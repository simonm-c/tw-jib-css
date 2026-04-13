import { describe, test, expect } from 'vitest';
import { compile } from './helpers.js';

/**
 * Tests for lightness utilities across all non-bg color properties.
 * bg-lightness tests remain in color-transforms.test.ts.
 */

/**
 * Property configurations: [prefix, cssProperty, captureVar, baseClass, baseMarker]
 */
const PROPERTIES: [string, string, string, string, string][] = [
  ['text', 'color', '--tw-jib--text-color', 'text-blue-500', '--color-blue-500'],
  ['fill', 'fill', '--tw-jib--fill-color', 'fill-blue-500', '--color-blue-500'],
  ['stroke', 'stroke', '--tw-jib--stroke-color', 'stroke-blue-500', '--color-blue-500'],
  ['outline', 'outline-color', '--tw-jib--outline-color', 'outline-blue-500', '--color-blue-500'],
  ['accent', 'accent-color', '--tw-jib--accent-color', 'accent-blue-500', '--color-blue-500'],
  ['border', 'border-color', '--tw-jib--border-color', 'border-blue-500', '--color-blue-500'],
];

const STABLE_SPACE_MARKERS: [string, string][] = [
  ['oklch', 'oklch('],
  ['hsl', 'hsl('],
  ['rgb', 'rgb('],
  ['srgb', ') srgb'],
  ['display-p3', ') display-p3'],
];

const SUPPORTS_FUNCTION =
  '@supports (background: if(style(--value): red)) and (background: --lightness-oklch(red, 20))';

describe.each(PROPERTIES)(
  '%s-lightness (stable path)',
  (prefix, cssProperty, captureVar, baseClass, baseMarker) => {
    const amountVar = `--tw-jib--${prefix}-lightness--amount`;

    function stableOklch(av: string) {
      return `oklch(from var(${captureVar}) calc(l * (1 - max(var(${av}), calc(0 - var(${av})))) + max(0, var(${av}))) calc(c * min(1, (1 - max(var(${av}), calc(0 - var(${av})))) * 5)) h / alpha)`;
    }

    const OKLCH = stableOklch(amountVar);

    describe('darken — default amounts', () => {
      test.each([0, 5, 10, 20, 50, 75, 100])(
        `${prefix}-darken-%i`,
        async (amount) => {
          const css = await compile(`${baseClass} ${prefix}-darken-${amount}`);
          expect(css).toContain(`${amountVar}: calc(${amount} * -0.01)`);
          expect(css).toContain(OKLCH);
          expect(css).toContain(`${captureVar}: var(${baseMarker})`);
        },
      );
    });

    describe('lighten — default amounts', () => {
      test.each([0, 5, 10, 20, 50, 75, 100])(
        `${prefix}-lighten-%i`,
        async (amount) => {
          const css = await compile(`${baseClass} ${prefix}-lighten-${amount}`);
          expect(css).toContain(`${amountVar}: calc(${amount} * 0.01)`);
          expect(css).toContain(OKLCH);
          expect(css).toContain(`${captureVar}: var(${baseMarker})`);
        },
      );
    });

    describe('color spaces via modifier', () => {
      test.each(STABLE_SPACE_MARKERS)(
        `${prefix}-darken-20/%s`,
        async (space, marker) => {
          const css = await compile(`${baseClass} ${prefix}-darken-20/${space}`);
          expect(css).toContain(marker);
          expect(css).toContain(`${amountVar}: calc(20 * -0.01)`);
        },
      );
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
  (prefix, _cssProperty, captureVar, baseClass, _baseMarker) => {
    describe('darken with @function', () => {
      test.each([0, 20, 50, 100])(
        `${prefix}-darken-%i`,
        async (amount) => {
          const css = await compile(`${baseClass} ${prefix}-darken-${amount}`, { experimental: true });
          expect(css).toContain(SUPPORTS_FUNCTION);
          expect(css).toContain(`--lightness(var(${captureVar}), calc(${amount} * -1))`);
        },
      );
    });

    describe('lighten with @function', () => {
      test.each([0, 20, 50, 100])(
        `${prefix}-lighten-%i`,
        async (amount) => {
          const css = await compile(`${baseClass} ${prefix}-lighten-${amount}`, { experimental: true });
          expect(css).toContain(SUPPORTS_FUNCTION);
          expect(css).toContain(`--lightness(var(${captureVar}), ${amount})`);
        },
      );
    });

    describe('color spaces with @function', () => {
      test.each(['oklch', 'hsl', 'rgb', 'srgb', 'display-p3'] as const)(
        `${prefix}-darken-20/%s`,
        async (space) => {
          const css = await compile(`${baseClass} ${prefix}-darken-20/${space}`, { experimental: true });
          expect(css).toContain(SUPPORTS_FUNCTION);
          expect(css).toContain('--lightness(');
          expect(css).toContain(`calc(20 * -1), ${space}`);
        },
      );
    });
  },
);
