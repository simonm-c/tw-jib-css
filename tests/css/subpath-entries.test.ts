import { describe, expect, test } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { compileEntries } from './helpers.js';

const SRC = './packages/tw-jib-css/src';
const pkg = resolve(import.meta.dirname, '../../packages/tw-jib-css/package.json');

const SUITES = [
  {
    subpath: 'color-transforms',
    classes: 'bg-red-500 bg-lighten-20 text-saturation-40/lab bg-hue-rotate-45 border-darken-10',
  },
  { subpath: 'automatic-contrast', classes: 'bg-red-500 text-contrast-aa text-contrast-aaa/lch' },
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
 * An unresolvable var() invalidates its whole declaration at computed-value
 * time, so a `background` naming an unregistered layer paints nothing rather
 * than partially. Reads WITH a fallback are excluded: those stages are meant to
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
          `${subpath} emits var()s nothing registers or writes: importing it alone yields dead declarations`,
        ).toEqual([]);
      });
    }
  });

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
          `.${cls} is emitted more times from index.css than from a single suite, a partial is being reached twice`,
        ).toBe(ruleCount(single, cls));
      });
    }
  });
});
