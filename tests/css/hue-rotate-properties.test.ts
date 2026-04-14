import { describe, test, expect } from 'vitest';
import { compile } from './helpers.js';

/**
 * Tests for hue-rotate utilities across all 7 color properties.
 * Amount is in degrees (positive = clockwise). No color-mix modifier — see §3 of plan.
 */

/**
 * Property configurations: [prefix, cssProperty, captureVar, baseClass, baseMarker, hueSlug]
 * hueSlug matches the --tw-jib--{hueSlug}-hue--amount / -hue-interpolation-* prefix
 */
const PROPERTIES: [string, string, string, string, string, string][] = [
  ['bg', 'background-color', '--tw-jib--bg-color', 'bg-blue-500', '--color-blue-500', 'background'],
  ['text', 'color', '--tw-jib--text-color', 'text-blue-500', '--color-blue-500', 'text'],
  ['fill', 'fill', '--tw-jib--fill-color', 'fill-blue-500', '--color-blue-500', 'fill'],
  ['stroke', 'stroke', '--tw-jib--stroke-color', 'stroke-blue-500', '--color-blue-500', 'stroke'],
  ['outline', 'outline-color', '--tw-jib--outline-color', 'outline-blue-500', '--color-blue-500', 'outline'],
  ['accent', 'accent-color', '--tw-jib--accent-color', 'accent-blue-500', '--color-blue-500', 'accent'],
  ['border', 'border-color', '--tw-jib--border-color', 'border-blue-500', '--color-blue-500', 'border'],
];

/**
 * Color-space modifier markers for stable-path assertions.
 * Each entry is [space-name, unique substring found in compiled stable CSS].
 */
const STABLE_SPACE_MARKERS: [string, string][] = [
  ['oklch', 'oklch('],
  ['hsl', 'hsl('],
  ['rgb', '0.213 + 0.787 * cos('],
  ['srgb', ') srgb'],
  ['display-p3', ') display-p3'],
  ['lab', 'lab('],
];

const SUPPORTS_FUNCTION =
  '@supports (background: if(style(--value): red)) and (background: --oklch-hue-rotate(red, 30))';

describe.each(PROPERTIES)(
  '%s-hue-rotate (stable path)',
  (prefix, cssProperty, captureVar, baseClass, baseMarker, hueSlug) => {
    const amountVar = `--tw-jib--${hueSlug}-hue--amount`;
    const STABLE_OKLCH = `oklch(from var(${captureVar}) l c calc(h + var(${amountVar})) / alpha)`;

    describe('positive rotation — default amounts', () => {
      test.each([0, 15, 30, 90, 180, 270, 359])(
        `${prefix}-hue-rotate-%i`,
        async (amount) => {
          const css = await compile(`${baseClass} ${prefix}-hue-rotate-${amount}`);
          expect(css).toContain(`${amountVar}: ${amount}`);
          expect(css).toContain(STABLE_OKLCH);
          expect(css).toContain(`${captureVar}: var(${baseMarker})`);
        },
      );
    });

    describe('negative rotation — default amounts', () => {
      test.each([15, 30, 90, 180])(
        `-${prefix}-hue-rotate-%i`,
        async (amount) => {
          const css = await compile(`${baseClass} -${prefix}-hue-rotate-${amount}`);
          expect(css).toContain(`${amountVar}: calc(${amount} * -1)`);
          expect(css).toContain(STABLE_OKLCH);
          expect(css).toContain(`${captureVar}: var(${baseMarker})`);
        },
      );
    });

    describe('color spaces via modifier', () => {
      test.each(STABLE_SPACE_MARKERS)(
        `${prefix}-hue-rotate-30/%s`,
        async (space, marker) => {
          const css = await compile(`${baseClass} ${prefix}-hue-rotate-30/${space}`);
          expect(css).toContain(marker);
          expect(css).toContain(`${amountVar}: 30`);
        },
      );

      test(`/rgb produces rgb( output in ${cssProperty}`, async () => {
        const css = await compile(`${baseClass} ${prefix}-hue-rotate-30/rgb`);
        // Per the "never cross-convert" rule: /rgb must emit rgb(...), not oklch(...)
        const propEsc = cssProperty.replace(/[-]/g, '\\-');
        expect(css).toMatch(new RegExp(`${propEsc}: rgb\\(`));
      });

      test(`/lab produces lab( output in ${cssProperty}`, async () => {
        const css = await compile(`${baseClass} ${prefix}-hue-rotate-30/lab`);
        const propEsc = cssProperty.replace(/[-]/g, '\\-');
        expect(css).toMatch(new RegExp(`${propEsc}: lab\\(`));
      });
    });

    test('sets the correct CSS property', async () => {
      const css = await compile(`${baseClass} ${prefix}-hue-rotate-30`);
      expect(css).toContain(`${cssProperty}:`);
    });

    test('state variants work', async () => {
      const css = await compile(`${baseClass} hover:${prefix}-hue-rotate-30`);
      expect(css).toContain('&:hover');
      expect(css).toContain(STABLE_OKLCH);
    });

    test('different base colors', async () => {
      const css = await compile(`${prefix}-red-500 ${prefix}-hue-rotate-30`);
      expect(css).toContain('--color-red-500');
      expect(css).toContain(STABLE_OKLCH);
    });
  },
);

describe.each(PROPERTIES)(
  '%s-hue-rotate (experimental path)',
  (prefix, _cssProperty, captureVar, baseClass) => {
    describe('positive rotation with @function', () => {
      test.each([0, 30, 90, 180])(
        `${prefix}-hue-rotate-%i`,
        async (amount) => {
          const css = await compile(
            `${baseClass} ${prefix}-hue-rotate-${amount}`,
            { experimental: true },
          );
          expect(css).toContain(SUPPORTS_FUNCTION);
          expect(css).toContain(`--hue-rotate(var(${captureVar}), ${amount})`);
        },
      );
    });

    describe('negative rotation with @function', () => {
      test.each([30, 90, 180])(
        `-${prefix}-hue-rotate-%i`,
        async (amount) => {
          const css = await compile(
            `${baseClass} -${prefix}-hue-rotate-${amount}`,
            { experimental: true },
          );
          expect(css).toContain(SUPPORTS_FUNCTION);
          expect(css).toContain(`--hue-rotate(var(${captureVar}), calc(${amount} * -1))`);
        },
      );
    });

    describe('color spaces with @function', () => {
      test.each(['oklch', 'hsl', 'rgb', 'srgb', 'display-p3', 'lab', 'xyz'] as const)(
        `${prefix}-hue-rotate-30/%s`,
        async (space) => {
          const css = await compile(
            `${baseClass} ${prefix}-hue-rotate-30/${space}`,
            { experimental: true },
          );
          expect(css).toContain(SUPPORTS_FUNCTION);
          expect(css).toContain('--hue-rotate(');
          expect(css).toContain(`30, ${space}`);
        },
      );
    });

    test('color-mix modifier is NOT supported', async () => {
      // hue-rotate deliberately omits color-mix — the modifier should not match.
      // The class compiles but without any hue-rotate output; no --hue-rotate() call.
      const css = await compile(
        `${baseClass} ${prefix}-hue-rotate-30/color-mix`,
        { experimental: true },
      );
      expect(css).not.toMatch(/--hue-rotate\([^)]*color-mix/);
    });
  },
);

/**
 * bg-specific: must also compose with border-gradient via --tw-jib--bg-image.
 */
describe('bg-hue-rotate composes with bg-image layer', () => {
  test('writes --tw-jib--bg-image with the rotated color', async () => {
    const css = await compile('bg-blue-500 bg-hue-rotate-30');
    expect(css).toContain('--tw-jib--bg-image: linear-gradient(');
    // The bg-image gradient should carry the oklch transform
    expect(css).toMatch(/--tw-jib--bg-image: linear-gradient\(oklch\(from var\(--tw-jib--bg-color\) l c calc\(h \+ var\(--tw-jib--background-hue--amount\)\)/);
  });
});
