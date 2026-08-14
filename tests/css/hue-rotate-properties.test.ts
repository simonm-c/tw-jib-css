import { describe, test, expect } from 'vitest';
import { compile } from './helpers.js';

/**
 * Tests for hue-rotate utilities across all 7 color properties.
 * Amount is in degrees (positive = clockwise). No color-mix modifier — see §3 of plan.
 */

/**
 * Property configurations: [prefix, cssProperty, captureVar, sourceVar, baseClass, baseMarker, hueSlug]
 * hueSlug matches the --tw-jib--{hueSlug}-hue--amount / -hue-interpolation-* prefix
 */
const PROPERTIES: [string, string, string, string, string, string, string][] = [
  [
    'bg',
    'background-color',
    '--tw-jib--background-color',
    '--tw-jib--background-color-source',
    'bg-blue-500',
    '--color-blue-500',
    'background',
  ],
  [
    'text',
    'color',
    '--tw-jib--text-color',
    '--tw-jib--text-color-source',
    'text-blue-500',
    '--color-blue-500',
    'text',
  ],
  [
    'fill',
    'fill',
    '--tw-jib--fill-color',
    '--tw-jib--fill-color-source',
    'fill-blue-500',
    '--color-blue-500',
    'fill',
  ],
  [
    'stroke',
    'stroke',
    '--tw-jib--stroke-color',
    '--tw-jib--stroke-color-source',
    'stroke-blue-500',
    '--color-blue-500',
    'stroke',
  ],
  [
    'outline',
    'outline-color',
    '--tw-jib--outline-color',
    '--tw-jib--outline-color-source',
    'outline-blue-500',
    '--color-blue-500',
    'outline',
  ],
  [
    'accent',
    'accent-color',
    '--tw-jib--accent-color',
    '--tw-jib--accent-color-source',
    'accent-blue-500',
    '--color-blue-500',
    'accent',
  ],
  [
    'border',
    'border-color',
    '--tw-jib--border-color',
    '--tw-jib--border-color-source',
    'border-blue-500',
    '--color-blue-500',
    'border',
  ],
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
  '@supports (background: if(style(--value): red)) and (background: --tw-jib--oklch-hue-rotate(red, 30))';

describe.each(PROPERTIES)(
  '%s-hue-rotate (stable path)',
  (prefix, cssProperty, captureVar, sourceVar, baseClass, baseMarker, hueSlug) => {
    const amountVar = `--tw-jib--${hueSlug}-hue--amount`;
    const STABLE_OKLCH = `oklch(from var(${sourceVar}) l c calc(h + var(${amountVar})) / alpha)`;

    describe('positive rotation — default amounts', () => {
      test.each([0, 15, 30, 90, 180, 270, 359])(`${prefix}-hue-rotate-%i`, async (amount) => {
        const css = await compile(`${baseClass} ${prefix}-hue-rotate-${amount}`);
        expect(css).toContain(`${amountVar}: ${amount}`);
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(`${sourceVar}: var(${baseMarker})`);
      });
    });

    describe('negative rotation — default amounts', () => {
      test.each([15, 30, 90, 180])(`-${prefix}-hue-rotate-%i`, async (amount) => {
        const css = await compile(`${baseClass} -${prefix}-hue-rotate-${amount}`);
        expect(css).toContain(`${amountVar}: calc(${amount} * -1)`);
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(`${sourceVar}: var(${baseMarker})`);
      });
    });

    describe('color spaces via modifier', () => {
      test.each(STABLE_SPACE_MARKERS)(`${prefix}-hue-rotate-30/%s`, async (space, marker) => {
        const css = await compile(`${baseClass} ${prefix}-hue-rotate-30/${space}`);
        expect(css).toContain(marker);
        expect(css).toContain(`${amountVar}: 30`);
      });

      test(`/rgb produces rgb( output in ${prefix} stage var`, async () => {
        const css = await compile(`${baseClass} ${prefix}-hue-rotate-30/rgb`);
        // Per the "never cross-convert" rule: /rgb must emit rgb(...), not oklch(...)
        expect(css).toContain('rgb(');
        expect(css).toContain(`${captureVar}-after-hue-rotate:`);
      });

      test(`/lab produces lab( output in ${prefix} stage var`, async () => {
        const css = await compile(`${baseClass} ${prefix}-hue-rotate-30/lab`);
        expect(css).toContain('lab(');
        expect(css).toContain(`${captureVar}-after-hue-rotate:`);
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
  (prefix, _cssProperty, _captureVar, sourceVar, baseClass) => {
    describe('positive rotation with @function', () => {
      test.each([0, 30, 90, 180])(`${prefix}-hue-rotate-%i`, async (amount) => {
        const css = await compile(`${baseClass} ${prefix}-hue-rotate-${amount}`, {
          functions: true,
        });
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--tw-jib--hue-rotate(var(${sourceVar}), ${amount}, oklch)`);
      });
    });

    describe('negative rotation with @function', () => {
      test.each([30, 90, 180])(`-${prefix}-hue-rotate-%i`, async (amount) => {
        const css = await compile(`${baseClass} -${prefix}-hue-rotate-${amount}`, {
          functions: true,
        });
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(
          `--tw-jib--hue-rotate(var(${sourceVar}), calc(${amount} * -1), oklch)`,
        );
      });
    });

    describe('color spaces with @function', () => {
      test.each(['oklch', 'hsl', 'rgb', 'srgb', 'display-p3', 'lab', 'xyz'] as const)(
        `${prefix}-hue-rotate-30/%s`,
        async (space) => {
          const css = await compile(`${baseClass} ${prefix}-hue-rotate-30/${space}`, {
            functions: true,
          });
          expect(css).toContain(SUPPORTS_FUNCTION);
          expect(css).toContain('--tw-jib--hue-rotate(');
          expect(css).toMatch(new RegExp(`30,\\s+${space.replace('-', '\\-')}`));
        },
      );
    });

    test('color-mix modifier is NOT supported', async () => {
      // hue-rotate deliberately omits color-mix — the modifier should not match.
      // The class compiles but without any hue-rotate output; no --tw-jib--hue-rotate() call.
      const css = await compile(`${baseClass} ${prefix}-hue-rotate-30/color-mix`, {
        functions: true,
      });
      expect(css).not.toMatch(/--hue-rotate\([^)]*color-mix/);
    });
  },
);

/**
 * bg-specific: must also compose with border-gradient via --tw-jib--background-image.
 */
describe('bg-hue-rotate composes with bg-image layer', () => {
  test('writes --tw-jib--background-image with the composed color', async () => {
    const css = await compile('bg-blue-500 bg-hue-rotate-30');
    expect(css).toContain(
      '--tw-jib--background-image: linear-gradient(var(--tw-jib--background-color) 0 0)',
    );
  });
});

// ---------------------------------------------------------------------------
// Experimental inline function usage (arbitrary values)
// ---------------------------------------------------------------------------

describe('experimental inline function usage', () => {
  test('bg-[...] with hue-rotate router function', async () => {
    const css = await compile('bg-[--tw-jib--hue-rotate(var(--color-red-500),180)]', {
      functions: true,
    });
    expect(css).toContain('--tw-jib--hue-rotate(');
    expect(css).toContain('background-color:');
  });

  test('bg-[...] with color space argument', async () => {
    const css = await compile('bg-[--tw-jib--hue-rotate(var(--color-red-500),120,oklch)]', {
      functions: true,
    });
    expect(css).toContain('--tw-jib--hue-rotate(');
    expect(css).toContain('oklch');
  });

  test('from-[...] gradient stop with hue-rotated color', async () => {
    const css = await compile(
      'bg-linear-to-r from-[--tw-jib--hue-rotate(var(--color-red-500),120)] to-red-500',
      { functions: true },
    );
    expect(css).toContain('--tw-jib--hue-rotate(');
    expect(css).toContain('--tw-gradient-from:');
  });

  test('from-[...] + to-[...] hue-rotated gradient', async () => {
    const css = await compile(
      'bg-linear-to-r from-[--tw-jib--hue-rotate(var(--color-red-500),60)] to-[--tw-jib--hue-rotate(var(--color-red-500),180)]',
      { functions: true },
    );
    expect(css).toContain('--tw-gradient-from:');
    expect(css).toContain('--tw-gradient-to:');
    const matches = css.match(/--tw-jib--hue-rotate\(/g);
    expect(matches?.length).toBeGreaterThanOrEqual(2);
  });
});
