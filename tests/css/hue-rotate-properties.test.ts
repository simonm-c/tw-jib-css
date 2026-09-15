import { describe, test, expect } from 'vitest';
import { compile, suiteScenarios } from './helpers.js';
import { supportsFunction } from './constants.js';

/** [prefix, cssProperty, captureVar, sourceVar, baseClass, baseMarker, hueSlug]
 *  hueSlug matches --jib-{hueSlug}-hue-amount */
const PROPERTIES: [string, string, string, string, string, string, string][] = [
  [
    'bg',
    'background-color',
    '--jib-background-color',
    '--jib-background-color-source',
    'bg-blue-500',
    '--color-blue-500',
    'background',
  ],
  [
    'text',
    'color',
    '--jib-text-color',
    '--jib-text-color-source',
    'text-blue-500',
    '--color-blue-500',
    'text',
  ],
  [
    'fill',
    'fill',
    '--jib-fill-color',
    '--jib-fill-color-source',
    'fill-blue-500',
    '--color-blue-500',
    'fill',
  ],
  [
    'stroke',
    'stroke',
    '--jib-stroke-color',
    '--jib-stroke-color-source',
    'stroke-blue-500',
    '--color-blue-500',
    'stroke',
  ],
  [
    'outline',
    'outline-color',
    '--jib-outline-color',
    '--jib-outline-color-source',
    'outline-blue-500',
    '--color-blue-500',
    'outline',
  ],
  [
    'accent',
    'accent-color',
    '--jib-accent-color',
    '--jib-accent-color-source',
    'accent-blue-500',
    '--color-blue-500',
    'accent',
  ],
  [
    'border',
    'border-color',
    '--jib-border-color',
    '--jib-border-color-source',
    'border-blue-500',
    '--color-blue-500',
    'border',
  ],
];

/** [space-name, unique substring found in compiled stable CSS] */
const STABLE_SPACE_MARKERS: [string, string][] = [
  ['oklch', 'oklch('],
  ['hsl', 'hsl('],
  ['rgb', '0.213 + 0.787 * cos('],
  ['srgb', ') srgb'],
  ['display-p3', ') display-p3'],
  ['lab', 'lab('],
];

const SUPPORTS_FUNCTION = supportsFunction('--jib-oklch-hue-rotate(red, 30)');

const PROPERTY_SCENARIOS = PROPERTIES.flatMap((property) =>
  suiteScenarios('color-transforms').map((scenario) => ({
    label: `${property[0]}-hue-rotate`,
    scenario,
    property,
  })),
);

describe.each(PROPERTY_SCENARIOS)(
  '$label (stable path): $scenario.name',
  ({ scenario: { compile }, property }) => {
    const [prefix, cssProperty, captureVar, sourceVar, baseClass, baseMarker, hueSlug] = property;
    const amountVar = `--jib-${hueSlug}-hue-amount`;
    const STABLE_OKLCH = `oklch(from var(${sourceVar}) l c calc(h + var(${amountVar})) / alpha)`;

    describe('positive rotation: default amounts', () => {
      test.each([0, 15, 30, 90, 180, 270, 359])(`${prefix}-hue-rotate-%i`, async (amount) => {
        const css = await compile(`${baseClass} ${prefix}-hue-rotate-${amount}`);
        expect(css).toContain(`${amountVar}: ${amount}`);
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(`${sourceVar}: var(${baseMarker})`);
      });
    });

    describe('negative rotation: default amounts', () => {
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
        expect(css).toContain(`--jib-hue-rotate(var(${sourceVar}), ${amount}, oklch)`);
      });
    });

    describe('negative rotation with @function', () => {
      test.each([30, 90, 180])(`-${prefix}-hue-rotate-%i`, async (amount) => {
        const css = await compile(`${baseClass} -${prefix}-hue-rotate-${amount}`, {
          functions: true,
        });
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--jib-hue-rotate(var(${sourceVar}), calc(${amount} * -1), oklch)`);
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
          expect(css).toContain('--jib-hue-rotate(');
          expect(css).toMatch(new RegExp(`30,\\s+${space.replace('-', '\\-')}`));
        },
      );
    });

    test('color-mix modifier is NOT supported', async () => {
      const css = await compile(`${baseClass} ${prefix}-hue-rotate-30/color-mix`, {
        functions: true,
      });
      expect(css).not.toMatch(/--hue-rotate\([^)]*color-mix/);
    });
  },
);

describe.each(suiteScenarios('color-transforms'))(
  'bg-hue-rotate composes with bg-image layer, $name',
  ({ compile }) => {
    test('writes --jib-background-image with the composed color', async () => {
      const css = await compile('bg-blue-500 bg-hue-rotate-30');
      expect(css).toContain(
        '--jib-background-image: linear-gradient(var(--jib-background-color) 0 0)',
      );
    });
  },
);

describe('experimental inline function usage', () => {
  test('bg-[...] with hue-rotate router function', async () => {
    const css = await compile('bg-[--jib-hue-rotate(var(--color-red-500),180)]', {
      functions: true,
    });
    expect(css).toContain('--jib-hue-rotate(');
    expect(css).toContain('background-color:');
  });

  test('bg-[...] with color space argument', async () => {
    const css = await compile('bg-[--jib-hue-rotate(var(--color-red-500),120,oklch)]', {
      functions: true,
    });
    expect(css).toContain('--jib-hue-rotate(');
    expect(css).toContain('oklch');
  });

  test('from-[...] gradient stop with hue-rotated color', async () => {
    const css = await compile(
      'bg-linear-to-r from-[--jib-hue-rotate(var(--color-red-500),120)] to-red-500',
      { functions: true },
    );
    expect(css).toContain('--jib-hue-rotate(');
    expect(css).toContain('--tw-gradient-from:');
  });

  test('from-[...] + to-[...] hue-rotated gradient', async () => {
    const css = await compile(
      'bg-linear-to-r from-[--jib-hue-rotate(var(--color-red-500),60)] to-[--jib-hue-rotate(var(--color-red-500),180)]',
      { functions: true },
    );
    expect(css).toContain('--tw-gradient-from:');
    expect(css).toContain('--tw-gradient-to:');
    const matches = css.match(/--jib-hue-rotate\(/g);
    expect(matches?.length).toBeGreaterThanOrEqual(2);
  });
});
