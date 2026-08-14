import { describe, test, expect } from 'vitest';
import { compile } from './helpers.js';

/**
 * Tests for lightness utilities across all non-bg color properties.
 * bg-lightness tests remain in color-transforms.test.ts.
 */

/**
 * Property configurations: [prefix, cssProperty, captureVar, sourceVar, baseClass, baseMarker]
 */
const PROPERTIES: [string, string, string, string, string, string][] = [
  [
    'text',
    'color',
    '--tw-jib--text-color',
    '--tw-jib--text-color-source',
    'text-blue-500',
    '--color-blue-500',
  ],
  [
    'fill',
    'fill',
    '--tw-jib--fill-color',
    '--tw-jib--fill-color-source',
    'fill-blue-500',
    '--color-blue-500',
  ],
  [
    'stroke',
    'stroke',
    '--tw-jib--stroke-color',
    '--tw-jib--stroke-color-source',
    'stroke-blue-500',
    '--color-blue-500',
  ],
  [
    'outline',
    'outline-color',
    '--tw-jib--outline-color',
    '--tw-jib--outline-color-source',
    'outline-blue-500',
    '--color-blue-500',
  ],
  [
    'accent',
    'accent-color',
    '--tw-jib--accent-color',
    '--tw-jib--accent-color-source',
    'accent-blue-500',
    '--color-blue-500',
  ],
  [
    'border',
    'border-color',
    '--tw-jib--border-color',
    '--tw-jib--border-color-source',
    'border-blue-500',
    '--color-blue-500',
  ],
];

const STABLE_SPACE_MARKERS: [string, string][] = [
  ['oklch', 'oklch('],
  ['hsl', 'hsl('],
  ['rgb', 'rgb('],
  ['srgb', ') srgb'],
  ['display-p3', ') display-p3'],
];

const SUPPORTS_FUNCTION =
  '@supports (background: if(style(--value): red)) and (background: --tw-jib--oklch-lightness(red, 20))';

describe.each(PROPERTIES)(
  '%s-lightness (stable path)',
  (prefix, cssProperty, captureVar, sourceVar, baseClass, baseMarker) => {
    const amountVar = `--tw-jib--${prefix}-lightness--amount`;
    const lightInput = `var(${captureVar}-after-saturation, var(${captureVar}-after-hue-rotate, var(${sourceVar})))`;

    function stableOklch(av: string) {
      return `oklch(from ${lightInput} calc(l * (1 - abs(var(${av}))) + max(0, var(${av}))) calc(c * min(1, (1 - abs(var(${av}))) * 5)) h / alpha)`;
    }

    const OKLCH = stableOklch(amountVar);

    describe('darken — default amounts', () => {
      test.each([0, 5, 10, 20, 50, 75, 100])(`${prefix}-darken-%i`, async (amount) => {
        const css = await compile(`${baseClass} ${prefix}-darken-${amount}`);
        expect(css).toContain(`${amountVar}: calc(${amount} * -0.01)`);
        expect(css).toContain(OKLCH);
        expect(css).toContain(`${sourceVar}: var(${baseMarker})`);
      });
    });

    describe('lighten — default amounts', () => {
      test.each([0, 5, 10, 20, 50, 75, 100])(`${prefix}-lighten-%i`, async (amount) => {
        const css = await compile(`${baseClass} ${prefix}-lighten-${amount}`);
        expect(css).toContain(`${amountVar}: calc(${amount} * 0.01)`);
        expect(css).toContain(OKLCH);
        expect(css).toContain(`${sourceVar}: var(${baseMarker})`);
      });
    });

    describe('color spaces via modifier', () => {
      test.each(STABLE_SPACE_MARKERS)(`${prefix}-darken-20/%s`, async (space, marker) => {
        const css = await compile(`${baseClass} ${prefix}-darken-20/${space}`);
        expect(css).toContain(marker);
        expect(css).toContain(`${amountVar}: calc(20 * -0.01)`);
      });
    });

    describe('aliases match primary', () => {
      test(`${prefix}-lightness-20 = ${prefix}-lighten-20`, async () => {
        const cssA = await compile(`${baseClass} ${prefix}-lightness-20`);
        const cssB = await compile(`${baseClass} ${prefix}-lighten-20`);
        expect(cssA).toContain(OKLCH);
        expect(cssB).toContain(OKLCH);
        expect(cssA).toContain(`${amountVar}: calc(20 * 0.01)`);
        expect(cssB).toContain(`${amountVar}: calc(20 * 0.01)`);
      });

      test(`-${prefix}-lightness-20 = ${prefix}-darken-20`, async () => {
        const cssA = await compile(`${baseClass} -${prefix}-lightness-20`);
        const cssB = await compile(`${baseClass} ${prefix}-darken-20`);
        expect(cssA).toContain(OKLCH);
        expect(cssB).toContain(OKLCH);
        expect(cssA).toContain(`${amountVar}: calc(20 * -0.01)`);
        expect(cssB).toContain(`${amountVar}: calc(20 * -0.01)`);
      });
    });

    test('sets the correct CSS property', async () => {
      const css = await compile(`${baseClass} ${prefix}-darken-20`);
      expect(css).toContain(`${cssProperty}:`);
    });

    test('state variants work', async () => {
      const css = await compile(`${baseClass} hover:${prefix}-darken-20`);
      expect(css).toContain('&:hover');
      expect(css).toContain(OKLCH);
    });

    test('different base colors', async () => {
      const css = await compile(`${prefix}-red-500 ${prefix}-darken-20`);
      expect(css).toContain('--color-red-500');
      expect(css).toContain(OKLCH);
    });
  },
);

describe.each(PROPERTIES)(
  '%s-lightness (experimental path)',
  (prefix, _cssProperty, captureVar, sourceVar, baseClass, _baseMarker) => {
    const lightInput = `var(${captureVar}-after-saturation, var(${captureVar}-after-hue-rotate, var(${sourceVar})))`;

    describe('darken with @function', () => {
      test.each([0, 20, 50, 100])(`${prefix}-darken-%i`, async (amount) => {
        const css = await compile(`${baseClass} ${prefix}-darken-${amount}`, { functions: true });
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--tw-jib--lightness(${lightInput}, calc(${amount} * -1), oklch)`);
      });
    });

    describe('lighten with @function', () => {
      test.each([0, 20, 50, 100])(`${prefix}-lighten-%i`, async (amount) => {
        const css = await compile(`${baseClass} ${prefix}-lighten-${amount}`, { functions: true });
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--tw-jib--lightness(${lightInput}, ${amount}, oklch)`);
      });
    });

    describe('color spaces with @function', () => {
      test.each(['oklch', 'hsl', 'rgb', 'srgb', 'display-p3'] as const)(
        `${prefix}-darken-20/%s`,
        async (space) => {
          const css = await compile(`${baseClass} ${prefix}-darken-20/${space}`, {
            functions: true,
          });
          expect(css).toContain(SUPPORTS_FUNCTION);
          expect(css).toContain('--tw-jib--lightness(');
          expect(css).toMatch(new RegExp(`calc\\(20 \\* -1\\),\\s+${space.replace('-', '\\-')}`));
        },
      );
    });
  },
);
