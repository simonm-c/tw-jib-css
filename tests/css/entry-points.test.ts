import { describe, expect, test } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { compile, compileEntries } from './helpers';
import { BG_LAYER } from './constants.js';

const SRC = './packages/tw-jib-css/src';
const srcDir = resolve(import.meta.dirname, '../../packages/tw-jib-css/src');

/* @function appears as a definition, or as a call: a --jib-* name followed by
 * "(", which var(--jib-*) never is because it closes on ")". */
const FUNCTION_TEXT = /@function\b|--jib-[a-z0-9-]+\(/;

/* gate: the @supports condition experimental's @custom-variant wraps the
 * re-implementation in. Its presence is what says the @function branch compiled. */
const OVERRIDES = [
  { module: 'lightness', cls: 'bg-lightness-20', gate: '--jib-oklch-lightness(red, 20)' },
  { module: 'saturation', cls: 'bg-saturation-20', gate: '--jib-oklch-saturation(red, 20)' },
  { module: 'hue-rotate', cls: 'bg-hue-rotate-45', gate: '--jib-oklch-hue-rotate(red, 30)' },
  {
    module: 'wcag shade',
    cls: 'text-contrast-aa',
    gate: '--jib-text-color: --jib-auto-contrast(',
  },
] as const;

const COMPOSITED_GRADIENTS = [
  'bg-linear-45',
  'bg-linear-to-r',
  'bg-linear-to-br/oklch',
  '-bg-linear-45',
  'bg-linear-[25deg]',
  'bg-radial',
  'bg-radial-[at_top]',
  'bg-conic',
  'bg-conic-180/longer',
  'bg-conic-[from_45deg]',
  '-bg-conic-90',
] as const;

const TAILWIND_PARITY = [
  'bg-linear-to-r',
  'bg-linear-45',
  'bg-linear-[25deg]',
  'bg-linear',
  'bg-linear-to-r/oklch',
  'bg-linear-[25deg]/oklch',
  'bg-linear-nonsense',
  '-bg-linear-45',
  '-bg-linear-to-r',
  '-bg-linear-45/oklch',
  'bg-radial',
  'bg-radial/oklch',
  'bg-radial-[at_top]',
  'bg-radial-[at_top]/oklch',
  '-bg-radial-[at_top]',
  'bg-linear-to-r/[in_oklch]',
  'bg-conic',
  'bg-conic-180/longer',
  'bg-conic-[from_45deg]/oklch',
  '-bg-conic',
  '-bg-conic-90/oklch',
] as const;

const TRANSFORMED = [
  { entry: 'index', classes: 'bg-blue-500 bg-lightness-20 bg-saturation-20 bg-hue-rotate-45' },
  {
    entry: 'color-transforms',
    classes:
      'bg-blue-500 bg-lighten-20 text-saturate-40/lab -border-hue-rotate-45 stroke-darken-10',
  },
  { entry: 'automatic-contrast', classes: 'bg-blue-500 text-contrast-aa text-contrast-aaa/lch' },
] as const;

describe('what each published entry point delivers', () => {
  describe('the MAIN package ships no @function', () => {
    test('no source file defines or calls one', () => {
      const offenders = readdirSync(srcDir, { recursive: true, encoding: 'utf8' })
        .filter((name) => name.endsWith('.css'))
        .filter((name) => FUNCTION_TEXT.test(readFileSync(resolve(srcDir, name), 'utf8')));
      expect(
        offenders,
        'the stable package holds no @function text at all; these files reintroduce it',
      ).toEqual([]);
    });

    for (const { entry, classes } of TRANSFORMED) {
      test(`${entry} compiles to no @function call`, async () => {
        const css = await compileEntries([`${SRC}/${entry}.css`], classes);
        expect(
          css.match(FUNCTION_TEXT)?.[0],
          `${entry} emitted an @function call; a consumer who opted into nothing would run it`,
        ).toBeUndefined();
      });
    }

    for (const { module, cls, gate } of OVERRIDES) {
      test(`${module}: ${cls} has no @function branch from the main entry`, async () => {
        const css = await compile(`bg-blue-500 ${cls}`);
        expect(css, `${cls} reached a live @function path from the main entry alone`).not.toContain(
          gate,
        );
      });
    }
  });

  describe('the gradient composites ship no matcher', () => {
    test.each(COMPOSITED_GRADIENTS)(
      '%s emits the image slot and the shorthand alone',
      async (cls) => {
        const css = await compile(`${cls} from-red-500 to-blue-500`);
        const layered = css.indexOf(BG_LAYER);
        expect(layered, `${cls} emitted no composited background`).toBeGreaterThan(-1);
        const rule = css.slice(css.lastIndexOf('{', layered) + 1, css.indexOf('\n  }', layered));
        const properties = [...rule.matchAll(/^\s*([\w-]+):/gm)].map((match) => match[1]);
        expect(
          properties,
          `${cls} shipped a declaration that exists only to make its block match`,
        ).toEqual(['--jib-background-image', 'background']);
      },
    );

    test('a value naming a CSS property does not become the sort key', async () => {
      const css = await compile('bg-linear-[display] from-red-500 to-blue-500');
      const layered = css.indexOf(BG_LAYER);
      const replaced = css.search(
        /\n\s+background-image: linear-gradient\(var\(--tw-gradient-stops/,
      );
      expect(layered, 'the composited background is missing').toBeGreaterThan(-1);
      expect(replaced, "Tailwind's own gradient declaration is missing").toBeGreaterThan(-1);
      expect(
        layered,
        'the composite sorted ahead of the background-image it layers, so the shorthand drops the gradient',
      ).toBeGreaterThan(replaced);
    });
  });

  describe('the gradient composites match what Tailwind matches', () => {
    test.each(TAILWIND_PARITY)(
      '%s composites exactly when Tailwind emits a gradient',
      async (cls) => {
        const tailwind = await compileEntries([], cls);
        const layer = tailwind.slice(tailwind.indexOf('@layer utilities'));
        const emitted = !layer.startsWith('@layer utilities;');

        const withLibrary = await compile(cls);
        expect(
          withLibrary.includes(BG_LAYER),
          emitted
            ? `Tailwind emits a gradient for ${cls} and the composite is missing`
            : `Tailwind rejects ${cls} and the composite is emitted anyway`,
        ).toBe(emitted);
      },
    );
  });

  describe('the experimental entry includes the overrides', () => {
    for (const { module, cls, gate } of OVERRIDES) {
      test(`${module}: ${cls} gets a live @function gate`, async () => {
        const css = await compile(`bg-blue-500 ${cls}`, { experimental: true });
        expect(css, `${cls} lost its @function path from the experimental entry`).toContain(gate);
      });
    }
  });

  describe('the functions entry supplies the override', () => {
    for (const { module, cls, gate } of OVERRIDES) {
      test(`${module}: ${cls} gets a live @function gate`, async () => {
        const css = await compile(`bg-blue-500 ${cls}`, { functions: true });
        expect(css, `${cls} lost its @function path`).toContain(gate);
      });
    }
  });

  describe('the stable form is emitted either way', () => {
    for (const { module, cls } of OVERRIDES) {
      test(`${module}: ${cls} keeps its stable declaration`, async () => {
        const bare = await compile(`bg-blue-500 ${cls}`);
        const withFns = await compile(`bg-blue-500 ${cls}`, { functions: true });
        expect(bare, `${cls} emitted nothing from the main entry`).toContain(
          `.${cls.replace('/', '\\/')}`,
        );
        expect(
          withFns,
          `${cls} lost its stable declaration when the functions entry loaded`,
        ).toContain(`.${cls.replace('/', '\\/')}`);
      });
    }
  });

  test('wcag-badge stays on the experimental entry', async () => {
    const onExperimental = await compile('bg-blue-500 wcag-badge', { experimental: true });
    expect(onExperimental).toContain('--jib-wcag-display:');

    const onFunctions = await compile('bg-blue-500 wcag-badge', { functions: true });
    expect(onFunctions, 'wcag-badge leaked into the functions entry').not.toContain(
      '--jib-wcag-display:',
    );
  });
});
