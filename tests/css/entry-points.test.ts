import { describe, expect, test } from 'vitest';
import { compile } from './helpers';

/*
 * The call text is present either way: the call blocks live in the stable files
 * behind a @custom-variant only the experimental package defines, and undefined
 * Tailwind emits a test for a property that does not exist. The gate changes.
 */
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

// what the stable files compile to when the real variant is undefined
const INERT_GATES = [
  '(lightness: var(--tw))',
  '(saturation: var(--tw))',
  '(hue-rotate: var(--tw))',
];

describe('what each published entry point delivers', () => {
  describe('the MAIN entry never runs @function', () => {
    for (const { module, cls, gate } of OVERRIDES) {
      test(`${module}: ${cls} has no live @function gate`, async () => {
        const css = await compile(`bg-blue-500 ${cls}`);
        expect(css, `${cls} reached a live @function path from the main entry alone`).not.toContain(
          gate,
        );
      });
    }

    // A Tailwind version that resolved the variant to something satisfiable would
    // start running @function unasked.
    test('the disabled blocks compile to a gate that cannot hold', async () => {
      const css = await compile('bg-blue-500 bg-lightness-20 bg-saturation-20 bg-hue-rotate-45');
      for (const gate of INERT_GATES) {
        expect(
          css,
          `expected the inert gate ${gate}; the stable entry may now run @function`,
        ).toContain(gate);
      }
    });
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
