import { describe, expect, test } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { compileEntries } from './helpers.js';

/*
 * Every suite is importable on its own, and taking the whole library costs no
 * more than taking it once.
 *
 * Those goals pull against each other, because Tailwind does NOT de-duplicate
 * @import: a file reached down more than one path has its @utility and @theme
 * blocks re-emitted per path. (@property is the exception – it is keyed by
 * name, which is what lets the partials share core's registrations freely.) So
 * the split is structural rather than conventional: PARTIALS (leading
 * underscore) never import core, per-suite ENTRIES do, and index.css composes
 * the partials so core lands once. Both halves are asserted below; either alone
 * would pass while the library was broken in the other direction.
 */

const SRC = './packages/tw-jib-css/src';
const pkg = resolve(import.meta.dirname, '../../packages/tw-jib-css/package.json');

/* The utilities a consumer of each suite would actually write. Each list mixes
 * the suite's own utilities with the core ones they are meant to compose with,
 * since composing with core is the whole reason a suite has to carry it. */
const SUITES = [
  {
    subpath: 'color-transforms',
    classes: 'bg-red-500 bg-lighten-20 text-saturation-40/lab bg-hue-rotate-45 border-darken-10',
  },
  { subpath: 'accessible-shade', classes: 'bg-red-500 text-a11y-aa text-a11y-aaa/lch' },
  {
    subpath: 'border-gradient',
    classes: 'bg-red-500 border-from-red-500 border-to-blue-500 border-linear-45 border-spin',
  },
  { subpath: 'ripple', classes: 'bg-red-500 bg-ripple ripple-color-white ripple-duration-500' },
  { subpath: 'comic', classes: 'bg-comic-red-500 comic-dot-2 comic-gap-3' },
  { subpath: 'pixel', classes: 'bg-pixel-red-500 pixel-size-2 pixel-bloom-1' },
  { subpath: 'border-style', classes: 'border-t-dashed border-x-double' },
  { subpath: 'grid', classes: "grid-area-[a] grid-template-areas-['a_b']" },
] as const;

/*
 * A var() read with NO fallback that is neither @property-registered nor
 * written anywhere in the output is a dangling reference, and the failure is
 * silent in the worst way: an unresolvable var() makes its whole declaration
 * invalid at computed-value time, so a `background` shorthand naming an
 * unregistered layer does not degrade to a partial background, it produces
 * none at all.
 *
 * Reads WITH a fallback are excluded deliberately – that is the pipeline's own
 * idiom (a lightness expression starts from -after-saturation falling back to
 * -after-hue-rotate falling back to the source), and those stages are meant to
 * be unwritten until something writes them.
 */
function danglingReads(css: string): string[] {
  const registered = new Set([...css.matchAll(/@property (--[\w-]+)/g)].map((m) => m[1]));
  const written = new Set([...css.matchAll(/(--tw-jib--[\w-]+)\s*:/g)].map((m) => m[1]));
  const read = [...css.matchAll(/var\((--tw-jib--[\w-]+)\s*\)/g)].map((m) => m[1]);
  return [...new Set(read)].filter((name) => !registered.has(name) && !written.has(name));
}

const ruleCount = (css: string, cls: string) =>
  css.split(`.${cls.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')} {`).length - 1;

describe('per-suite subpaths', () => {
  test('package.json exports one entry per suite', () => {
    const { exports } = JSON.parse(readFileSync(pkg, 'utf8')) as {
      exports: Record<string, { style: string; default: string }>;
    };
    for (const { subpath } of SUITES) {
      expect(exports[`./${subpath}`], `./${subpath} is not exported`).toBeDefined();
      expect(exports[`./${subpath}`].style).toBe(
        `${SRC.replace('./packages/tw-jib-css/', './')}/${subpath}.css`,
      );
    }
  });

  describe('each suite stands alone', () => {
    for (const { subpath, classes } of SUITES) {
      test(`${subpath} resolves every var() it emits`, async () => {
        const css = await compileEntries([`${SRC}/${subpath}.css`], classes);
        expect(
          danglingReads(css),
          `${subpath} emits var()s nothing registers or writes – importing it alone yields dead declarations`,
        ).toEqual([]);
      });
    }
  });

  /*
   * The specific dangling reference that motivated moving the background layer
   * slots into core/_index.css. A suite writing the layered shorthand needs every slot
   * registered, including those whose WRITERS live in other suites.
   */
  describe('the background shorthand carries every layer', () => {
    const LAYERS = [
      '--tw-jib--ripple-image',
      '--tw-jib--background-image',
      '--tw-jib--border-gradient',
    ];
    for (const { subpath, classes } of SUITES) {
      test(`${subpath}`, async () => {
        const css = await compileEntries([`${SRC}/${subpath}.css`], classes);
        if (!css.includes('background: var(--tw-jib--ripple-image)')) return;
        for (const layer of LAYERS) {
          expect(css, `${subpath} writes the shorthand without registering ${layer}`).toContain(
            `@property ${layer} `,
          );
        }
      });
    }
  });

  /* The transforms are one pipeline – each stage's expression names the stage
   * before it – so they ship as a single suite. */
  test('color-transforms carries every stage', async () => {
    const css = await compileEntries(
      [`${SRC}/color-transforms.css`],
      'bg-red-500 bg-lighten-20 bg-saturate-20 bg-hue-rotate-45',
    );
    for (const stage of ['lightness', 'saturation', 'hue-rotate']) {
      expect(css, `${stage} is missing from the color-transforms suite`).toContain(
        `--tw-jib--background-color-after-${stage}:`,
      );
    }
  });

  /*
   * Composed from the partials, so core is reached once. Asserted against a
   * single-suite entry rather than a fixed number: what matters is that taking
   * the whole library costs no more per core utility than taking one suite.
   */
  describe('the combined entry does not re-emit core', () => {
    const CORE_UTILITIES = ['bg-none', 'text-red-500', 'fill-red-500', 'accent-red-500'];
    const classes = CORE_UTILITIES.join(' ');

    for (const cls of CORE_UTILITIES) {
      test(cls, async () => {
        const [combined, single] = await Promise.all([
          compileEntries([`${SRC}/index.css`], classes),
          compileEntries([`${SRC}/ripple.css`], classes),
        ]);
        expect(
          ruleCount(combined, cls),
          `.${cls} is emitted more times from index.css than from a single suite – a partial is being reached twice`,
        ).toBe(ruleCount(single, cls));
      });
    }
  });
});
