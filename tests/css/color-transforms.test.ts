import { describe, test, expect } from 'vitest';
import { compile, suiteScenarios } from './helpers.js';
import {
  ALL_SPACES,
  BG_LAYER,
  DARKEN_PALETTE,
  LIGHTEN_PALETTE,
  supportsFunction,
} from './constants.js';

/**
 * The @supports query that gates the experimental @function path.
 */
const SUPPORTS_FUNCTION = supportsFunction('--tw-jib--oklch-lightness(red, 20)');

/**
 * The stable default oklch relative color expression used when no modifier is given.
 */
const BG_LIGHT_INPUT =
  'var(--tw-jib--background-color-after-saturation, var(--tw-jib--background-color-after-hue-rotate, var(--tw-jib--background-color-source)))';

const AMOUNT = 'var(--tw-jib--background-lightness--amount)';

/*
 * The stable oklch expression, asserted as the three things it has to get right
 * rather than as one exact string. Matching the whole serialisation makes every
 * assertion fail together when only the chroma term moved, and reports a
 * 300-character diff to say so.
 */
const STABLE_OKLCH_PARTS = {
  /** Seeded from the transform chain, so an earlier hue/saturation step feeds in. */
  seed: `oklch(from ${BG_LIGHT_INPUT}`,
  /** Lightness scales toward the target and lifts by the positive amount. */
  lightness: `calc(l * (1 - abs(${AMOUNT})) + max(0, ${AMOUNT}))`,
  /** Chroma is pulled in as lightness approaches either extreme. */
  chroma: `calc(c * min(1, (1 - abs(${AMOUNT})) * 5))`,
  /** Hue and alpha pass through untouched. */
  passthrough: 'h / alpha)',
} as const;

/** Assert the compiled CSS carries every part of the stable oklch expression. */
function expectStableOklch(css: string) {
  for (const [part, fragment] of Object.entries(STABLE_OKLCH_PARTS)) {
    expect(css, `stable oklch expression lost its ${part}`).toContain(fragment);
  }
}

/**
 * Map of color space → stable relative-color substring marker.
 * Each entry is [space-name, unique substring found in compiled CSS].
 */
const STABLE_SPACE_MARKERS: [string, string][] = [
  ['oklch', 'oklch('],
  ['lch', 'var(--tw-jib--background-lightness--amount)) * 100)'],
  ['lab', 'lab('],
  ['oklab', 'oklab('],
  ['hsl', 'hsl('],
  ['hwb', 'hwb('],
  ['rgb', 'max(0, var(--tw-jib--background-lightness--amount)) * 255)'],
  ['srgb', `from ${BG_LIGHT_INPUT} srgb`],
  ['srgb-linear', `from ${BG_LIGHT_INPUT} srgb-linear`],
  ['display-p3', `from ${BG_LIGHT_INPUT} display-p3`],
  ['a98-rgb', `from ${BG_LIGHT_INPUT} a98-rgb`],
  ['prophoto-rgb', `from ${BG_LIGHT_INPUT} prophoto-rgb`],
  ['rec2020', `from ${BG_LIGHT_INPUT} rec2020`],
  ['xyz', `from ${BG_LIGHT_INPUT} xyz`],
  ['xyz-d50', `from ${BG_LIGHT_INPUT} xyz-d50`],
  ['xyz-d65', `from ${BG_LIGHT_INPUT} xyz-d65`],
];

describe.each(suiteScenarios('color-transforms'))(
  'stable path (relative color syntax) — $name',
  ({ compile }) => {
    describe('darken — default amounts', () => {
      test.each([0, 5, 10, 20, 50, 75, 100])('bg-darken-%i', async (amount) => {
        const css = await compile(`bg-blue-500 bg-darken-${amount}`);
        expect(css).toContain(`--tw-jib--background-lightness--amount: calc(${amount} * -0.01)`);
        expectStableOklch(css);
        expect(css).toContain('--tw-jib--background-color-source: var(--color-blue-500)');
      });
    });

    describe('lighten — default amounts', () => {
      test.each([0, 5, 10, 20, 50, 75, 100])('bg-lighten-%i', async (amount) => {
        const css = await compile(`bg-blue-500 bg-lighten-${amount}`);
        expect(css).toContain(`--tw-jib--background-lightness--amount: calc(${amount} * 0.01)`);
        expectStableOklch(css);
        expect(css).toContain('--tw-jib--background-color-source: var(--color-blue-500)');
      });
    });

    describe('darken — all 17 color spaces', () => {
      test.each(STABLE_SPACE_MARKERS)('bg-darken-20/%s', async (space, marker) => {
        const css = await compile(`bg-blue-500 bg-darken-20/${space}`);
        expect(css).toContain(marker);
        expect(css).toContain('--tw-jib--background-lightness--amount: calc(20 * -0.01)');
      });

      test('bg-darken-20/color-mix', async () => {
        const css = await compile('bg-blue-500 bg-darken-20/color-mix');
        expect(css).toContain('color-mix(');
        expect(css).toContain('--tw-jib--background-lightness--amount: calc(20 * -0.01)');
      });
    });

    describe('lighten — all 17 color spaces', () => {
      test.each(STABLE_SPACE_MARKERS)('bg-lighten-20/%s', async (space, marker) => {
        const css = await compile(`bg-blue-500 bg-lighten-20/${space}`);
        expect(css).toContain(marker);
        expect(css).toContain('--tw-jib--background-lightness--amount: calc(20 * 0.01)');
      });

      test('bg-lighten-20/color-mix', async () => {
        const css = await compile('bg-blue-500 bg-lighten-20/color-mix');
        expect(css).toContain('color-mix(');
        expect(css).toContain('--tw-jib--background-lightness--amount: calc(20 * 0.01)');
      });
    });

    describe('base color range — darken-20', () => {
      test.each(DARKEN_PALETTE)('bg-%s bg-darken-20', async (color, marker) => {
        const css = await compile(`bg-${color} bg-darken-20`);
        expect(css).toContain(marker);
        expectStableOklch(css);
      });
    });

    describe('base color range — lighten-20', () => {
      test.each(LIGHTEN_PALETTE)('bg-%s bg-lighten-20', async (color, marker) => {
        const css = await compile(`bg-${color} bg-lighten-20`);
        expect(css).toContain(marker);
        expectStableOklch(css);
      });
    });

    describe('special base colors', () => {
      test('bg-[#ff6b35] bg-darken-20', async () => {
        const css = await compile('bg-[#ff6b35] bg-darken-20');
        expect(css).toContain('#ff6b35');
        expectStableOklch(css);
      });

      test('bg-[oklch(0.7_0.15_200)] bg-darken-20', async () => {
        const css = await compile('bg-[oklch(0.7_0.15_200)] bg-darken-20');
        expect(css).toContain('oklch(0.7 0.15 200)');
        expectStableOklch(css);
      });

      test('bg-[rgb(50,215,30)] bg-darken-20', async () => {
        const css = await compile('bg-[rgb(50,215,30)] bg-darken-20');
        expect(css).toContain('rgb(50,215,30)');
        expectStableOklch(css);
      });

      test('bg-(color:--custom-bg-color) bg-darken-20', async () => {
        const css = await compile('bg-(color:--custom-bg-color) bg-darken-20');
        expect(css).toContain('--custom-bg-color');
        expectStableOklch(css);
      });

      test('bg-[#ff6b35] bg-lighten-20', async () => {
        const css = await compile('bg-[#ff6b35] bg-lighten-20');
        expect(css).toContain('#ff6b35');
        expectStableOklch(css);
      });

      test('bg-[oklch(0.7_0.15_200)] bg-lighten-20', async () => {
        const css = await compile('bg-[oklch(0.7_0.15_200)] bg-lighten-20');
        expect(css).toContain('oklch(0.7 0.15 200)');
        expectStableOklch(css);
      });

      test('bg-(color:--custom-bg-color) bg-lighten-20', async () => {
        const css = await compile('bg-(color:--custom-bg-color) bg-lighten-20');
        expect(css).toContain('--custom-bg-color');
        expectStableOklch(css);
      });
    });

    describe('base colors × color spaces', () => {
      describe('red-500 darken', () => {
        test.each(['oklch', 'hsl', 'rgb', 'srgb', 'display-p3'] as const)(
          'bg-darken-20/%s',
          async (space) => {
            const css = await compile(`bg-red-500 bg-darken-20/${space}`);
            expect(css).toContain('--color-red-500');
            expect(css).toContain('--tw-jib--background-lightness--amount: calc(20 * -0.01)');
          },
        );
      });

      describe('emerald-400 darken', () => {
        test.each(['oklch', 'hsl', 'rgb', 'srgb', 'display-p3'] as const)(
          'bg-darken-20/%s',
          async (space) => {
            const css = await compile(`bg-emerald-400 bg-darken-20/${space}`);
            expect(css).toContain('--color-emerald-400');
            expect(css).toContain('--tw-jib--background-lightness--amount: calc(20 * -0.01)');
          },
        );
      });

      describe('purple-600 lighten', () => {
        test.each(['oklch', 'hsl', 'rgb', 'srgb', 'display-p3'] as const)(
          'bg-lighten-20/%s',
          async (space) => {
            const css = await compile(`bg-purple-600 bg-lighten-20/${space}`);
            expect(css).toContain('--color-purple-600');
            expect(css).toContain('--tw-jib--background-lightness--amount: calc(20 * 0.01)');
          },
        );
      });
    });

    describe('opacity + darken', () => {
      test.each([
        ['25', '10'],
        ['25', '20'],
        ['25', '50'],
        ['50', '10'],
        ['50', '20'],
        ['50', '50'],
        ['75', '10'],
        ['75', '20'],
        ['75', '50'],
      ])('bg-blue-500/%s bg-darken-%s', async (opacity, amount) => {
        const css = await compile(`bg-blue-500/${opacity} bg-darken-${amount}`);
        expect(css).toContain('color-mix');
        expectStableOklch(css);
        expect(css).toContain(`--tw-jib--background-lightness--amount: calc(${amount} * -0.01)`);
      });

      test.each([
        ['0', '20'],
        ['100', '20'],
        ['5', '20'],
      ])('bg-blue-500/%s bg-darken-%s (edge opacity)', async (opacity, amount) => {
        const css = await compile(`bg-blue-500/${opacity} bg-darken-${amount}`);
        expect(css).toContain('--color-blue-500');
        expectStableOklch(css);
      });
    });

    describe('opacity + lighten', () => {
      test.each([
        ['25', '10'],
        ['25', '20'],
        ['25', '50'],
        ['50', '10'],
        ['50', '20'],
        ['50', '50'],
        ['75', '10'],
        ['75', '20'],
        ['75', '50'],
      ])('bg-blue-500/%s bg-lighten-%s', async (opacity, amount) => {
        const css = await compile(`bg-blue-500/${opacity} bg-lighten-${amount}`);
        expect(css).toContain('color-mix');
        expectStableOklch(css);
        expect(css).toContain(`--tw-jib--background-lightness--amount: calc(${amount} * 0.01)`);
      });

      test.each([
        ['0', '20'],
        ['100', '20'],
        ['5', '20'],
      ])('bg-blue-500/%s bg-lighten-%s (edge opacity)', async (opacity, amount) => {
        const css = await compile(`bg-blue-500/${opacity} bg-lighten-${amount}`);
        expect(css).toContain('--color-blue-500');
        expectStableOklch(css);
      });
    });

    describe('opacity + color space modifiers', () => {
      test.each(['oklch', 'hsl', 'rgb', 'srgb', 'lab', 'display-p3', 'color-mix'] as const)(
        'bg-blue-500/50 bg-darken-20/%s',
        async (space) => {
          const css = await compile(`bg-blue-500/50 bg-darken-20/${space}`);
          expect(css).toContain('color-mix');
          expect(css).toContain('--tw-jib--background-lightness--amount: calc(20 * -0.01)');
        },
      );

      test.each(['oklch', 'hsl', 'rgb', 'srgb', 'color-mix'] as const)(
        'bg-blue-500/50 bg-lighten-20/%s',
        async (space) => {
          const css = await compile(`bg-blue-500/50 bg-lighten-20/${space}`);
          expect(css).toContain('color-mix');
          expect(css).toContain('--tw-jib--background-lightness--amount: calc(20 * 0.01)');
        },
      );
    });

    describe('opacity + different base colors', () => {
      test.each([
        ['red-500/50', 'bg-darken-20', '--color-red-500'],
        ['green-500/50', 'bg-darken-20', '--color-green-500'],
        ['purple-500/50', 'bg-darken-20', '--color-purple-500'],
        ['amber-500/50', 'bg-darken-20', '--color-amber-500'],
        ['red-500/50', 'bg-lighten-20', '--color-red-500'],
        ['green-500/50', 'bg-lighten-20', '--color-green-500'],
        ['purple-500/50', 'bg-lighten-20', '--color-purple-500'],
        ['amber-500/50', 'bg-lighten-20', '--color-amber-500'],
        ['white/75', 'bg-darken-20', 'background-color'],
        ['black/75', 'bg-lighten-20', 'background-color'],
        ['[#ff6b35]/50', 'bg-darken-20', '#ff6b35'],
        ['[#ff6b35]/50', 'bg-lighten-20', '#ff6b35'],
      ])('bg-%s %s', async (bgColor, transform, marker) => {
        const css = await compile(`bg-${bgColor} ${transform}`);
        expect(css).toContain(marker);
        expectStableOklch(css);
      });
    });

    describe('edge cases: extreme amounts', () => {
      test.each([
        ['darken', 0, '-0.01'],
        ['darken', 100, '-0.01'],
        ['darken', 1, '-0.01'],
        ['lighten', 0, '0.01'],
        ['lighten', 100, '0.01'],
        ['lighten', 1, '0.01'],
      ])('bg-%s-%i', async (direction, amount, factor) => {
        const css = await compile(`bg-blue-500 bg-${direction}-${amount}`);
        expect(css).toContain(
          `--tw-jib--background-lightness--amount: calc(${amount} * ${factor})`,
        );
        expectStableOklch(css);
      });
    });

    describe('edge cases: already dark / already light', () => {
      test('dark base + darken', async () => {
        const css = await compile('bg-slate-900 bg-darken-20');
        expect(css).toContain('--color-slate-900');
        expectStableOklch(css);
      });

      test('dark base + darken/hsl', async () => {
        const css = await compile('bg-slate-900 bg-darken-20/hsl');
        expect(css).toContain('--color-slate-900');
        expect(css).toContain('hsl(');
      });

      test('light base + lighten', async () => {
        const css = await compile('bg-yellow-100 bg-lighten-20');
        expect(css).toContain('--color-yellow-100');
        expectStableOklch(css);
      });

      test('light base + lighten/rgb', async () => {
        const css = await compile('bg-yellow-100 bg-lighten-20/rgb');
        expect(css).toContain('--color-yellow-100');
        expect(css).toContain('max(0, var(--tw-jib--background-lightness--amount)) * 255)');
      });
    });

    describe('edge cases: no explicit background', () => {
      test('bg-darken-20 alone', async () => {
        const css = await compile('bg-darken-20');
        expectStableOklch(css);
        expect(css).toContain('--tw-jib--background-lightness--amount: calc(20 * -0.01)');
      });

      test('bg-lighten-20 alone', async () => {
        const css = await compile('bg-lighten-20');
        expectStableOklch(css);
        expect(css).toContain('--tw-jib--background-lightness--amount: calc(20 * 0.01)');
      });

      test('bg-darken-20/oklch alone', async () => {
        const css = await compile('bg-darken-20/oklch');
        expect(css).toContain('oklch(');
        expect(css).toContain('--tw-jib--background-lightness--amount: calc(20 * -0.01)');
      });
    });

    describe('edge cases: state variants', () => {
      test('hover:bg-darken-20', async () => {
        const css = await compile('bg-blue-500 hover:bg-darken-20');
        expect(css).toContain('&:hover');
        expectStableOklch(css);
      });

      test('dark:bg-darken-30', async () => {
        const css = await compile('bg-blue-500 bg-darken-10 dark:bg-darken-30');
        expect(css).toContain('prefers-color-scheme: dark');
        expectStableOklch(css);
      });
    });
  },
);

describe('experimental path (@function + @supports)', () => {
  describe('darken — default amounts', () => {
    test.each([0, 5, 10, 20, 50, 75, 100])('bg-darken-%i', async (amount) => {
      const css = await compile(`bg-blue-500 bg-darken-${amount}`, { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(${amount} * -1), oklch)`);
    });
  });

  describe('lighten — default amounts', () => {
    test.each([0, 5, 10, 20, 50, 75, 100])('bg-lighten-%i', async (amount) => {
      const css = await compile(`bg-blue-500 bg-lighten-${amount}`, { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, ${amount}, oklch)`);
    });
  });

  describe('darken — all 17 color spaces', () => {
    test.each(ALL_SPACES)('bg-darken-20/%s', async (space) => {
      const css = await compile(`bg-blue-500 bg-darken-20/${space}`, { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--tw-jib--lightness(');
      expect(css).toMatch(new RegExp(`calc\\(20 \\* -1\\),\\s+${space.replace(/-/g, '\\-')}\\b`));
    });
  });

  describe('lighten — all 17 color spaces', () => {
    test.each(ALL_SPACES)('bg-lighten-20/%s', async (space) => {
      const css = await compile(`bg-blue-500 bg-lighten-20/${space}`, { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--tw-jib--lightness(');
      expect(css).toMatch(new RegExp(`20,\\s+${space.replace(/-/g, '\\-')}\\b`));
    });
  });

  describe('base color range — darken-20', () => {
    test.each(DARKEN_PALETTE)('bg-%s bg-darken-20', async (color, marker) => {
      const css = await compile(`bg-${color} bg-darken-20`, { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
      expect(css).toContain(marker);
    });
  });

  describe('base color range — lighten-20', () => {
    test.each(LIGHTEN_PALETTE)('bg-%s bg-lighten-20', async (color, marker) => {
      const css = await compile(`bg-${color} bg-lighten-20`, { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, 20, oklch)`);
      expect(css).toContain(marker);
    });
  });

  describe('special base colors', () => {
    test('bg-[#ff6b35] bg-darken-20', async () => {
      const css = await compile('bg-[#ff6b35] bg-darken-20', { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
      expect(css).toContain('#ff6b35');
    });

    test('bg-[oklch(0.7_0.15_200)] bg-darken-20', async () => {
      const css = await compile('bg-[oklch(0.7_0.15_200)] bg-darken-20', { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
    });

    test('bg-[rgb(50,215,30)] bg-darken-20', async () => {
      const css = await compile('bg-[rgb(50,215,30)] bg-darken-20', { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
    });

    test('bg-(color:--custom-bg-color) bg-darken-20', async () => {
      const css = await compile('bg-(color:--custom-bg-color) bg-darken-20', { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
    });

    test('bg-[#ff6b35] bg-lighten-20', async () => {
      const css = await compile('bg-[#ff6b35] bg-lighten-20', { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, 20, oklch)`);
    });

    test('bg-[oklch(0.7_0.15_200)] bg-lighten-20', async () => {
      const css = await compile('bg-[oklch(0.7_0.15_200)] bg-lighten-20', { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, 20, oklch)`);
    });

    test('bg-(color:--custom-bg-color) bg-lighten-20', async () => {
      const css = await compile('bg-(color:--custom-bg-color) bg-lighten-20', { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, 20, oklch)`);
    });
  });

  describe('base colors × color spaces', () => {
    describe('red-500 darken', () => {
      test.each(['oklch', 'hsl', 'rgb', 'srgb', 'display-p3'] as const)(
        'bg-darken-20/%s',
        async (space) => {
          const css = await compile(`bg-red-500 bg-darken-20/${space}`, { functions: true });
          expect(css).toContain(SUPPORTS_FUNCTION);
          expect(css).toContain('--tw-jib--lightness(');
          expect(css).toMatch(
            new RegExp(`calc\\(20 \\* -1\\),\\s+${space.replace(/-/g, '\\-')}\\b`),
          );
        },
      );
    });

    describe('emerald-400 darken', () => {
      test.each(['oklch', 'hsl', 'rgb', 'srgb', 'display-p3'] as const)(
        'bg-darken-20/%s',
        async (space) => {
          const css = await compile(`bg-emerald-400 bg-darken-20/${space}`, { functions: true });
          expect(css).toContain(SUPPORTS_FUNCTION);
          expect(css).toContain('--tw-jib--lightness(');
          expect(css).toMatch(
            new RegExp(`calc\\(20 \\* -1\\),\\s+${space.replace(/-/g, '\\-')}\\b`),
          );
        },
      );
    });

    describe('purple-600 lighten', () => {
      test.each(['oklch', 'hsl', 'rgb', 'srgb', 'display-p3'] as const)(
        'bg-lighten-20/%s',
        async (space) => {
          const css = await compile(`bg-purple-600 bg-lighten-20/${space}`, { functions: true });
          expect(css).toContain(SUPPORTS_FUNCTION);
          expect(css).toContain('--tw-jib--lightness(');
          expect(css).toMatch(new RegExp(`20,\\s+${space.replace(/-/g, '\\-')}\\b`));
        },
      );
    });
  });

  describe('opacity + darken', () => {
    test.each([
      ['25', '10'],
      ['25', '20'],
      ['25', '50'],
      ['50', '10'],
      ['50', '20'],
      ['50', '50'],
      ['75', '10'],
      ['75', '20'],
      ['75', '50'],
    ])('bg-blue-500/%s bg-darken-%s', async (opacity, amount) => {
      const css = await compile(`bg-blue-500/${opacity} bg-darken-${amount}`, { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(${amount} * -1), oklch)`);
    });

    test.each([
      ['0', '20'],
      ['100', '20'],
      ['5', '20'],
    ])('bg-blue-500/%s bg-darken-%s (edge opacity)', async (_opacity, amount) => {
      const css = await compile(`bg-blue-500/${_opacity} bg-darken-${amount}`, { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(${amount} * -1), oklch)`);
    });
  });

  describe('opacity + lighten', () => {
    test.each([
      ['25', '10'],
      ['25', '20'],
      ['25', '50'],
      ['50', '10'],
      ['50', '20'],
      ['50', '50'],
      ['75', '10'],
      ['75', '20'],
      ['75', '50'],
    ])('bg-blue-500/%s bg-lighten-%s', async (opacity, amount) => {
      const css = await compile(`bg-blue-500/${opacity} bg-lighten-${amount}`, { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, ${amount}, oklch)`);
    });

    test.each([
      ['0', '20'],
      ['100', '20'],
      ['5', '20'],
    ])('bg-blue-500/%s bg-lighten-%s (edge opacity)', async (_opacity, amount) => {
      const css = await compile(`bg-blue-500/${_opacity} bg-lighten-${amount}`, {
        functions: true,
      });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, ${amount}, oklch)`);
    });
  });

  describe('opacity + color space modifiers', () => {
    test.each(['oklch', 'hsl', 'rgb', 'srgb', 'lab', 'display-p3', 'color-mix'] as const)(
      'bg-blue-500/50 bg-darken-20/%s',
      async (space) => {
        const css = await compile(`bg-blue-500/50 bg-darken-20/${space}`, { functions: true });
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--tw-jib--lightness(');
        expect(css).toMatch(new RegExp(`calc\\(20 \\* -1\\),\\s+${space.replace(/-/g, '\\-')}\\b`));
      },
    );

    test.each(['oklch', 'hsl', 'rgb', 'srgb', 'color-mix'] as const)(
      'bg-blue-500/50 bg-lighten-20/%s',
      async (space) => {
        const css = await compile(`bg-blue-500/50 bg-lighten-20/${space}`, { functions: true });
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--tw-jib--lightness(');
        expect(css).toMatch(new RegExp(`20,\\s+${space.replace(/-/g, '\\-')}\\b`));
      },
    );
  });

  describe('opacity + different base colors', () => {
    test.each([
      [
        'red-500/50',
        'bg-darken-20',
        `--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`,
      ],
      [
        'green-500/50',
        'bg-darken-20',
        `--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`,
      ],
      [
        'purple-500/50',
        'bg-darken-20',
        `--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`,
      ],
      [
        'amber-500/50',
        'bg-darken-20',
        `--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`,
      ],
      ['red-500/50', 'bg-lighten-20', `--tw-jib--lightness(${BG_LIGHT_INPUT}, 20, oklch)`],
      ['green-500/50', 'bg-lighten-20', `--tw-jib--lightness(${BG_LIGHT_INPUT}, 20, oklch)`],
      ['purple-500/50', 'bg-lighten-20', `--tw-jib--lightness(${BG_LIGHT_INPUT}, 20, oklch)`],
      ['amber-500/50', 'bg-lighten-20', `--tw-jib--lightness(${BG_LIGHT_INPUT}, 20, oklch)`],
      ['white/75', 'bg-darken-20', `--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`],
      ['black/75', 'bg-lighten-20', `--tw-jib--lightness(${BG_LIGHT_INPUT}, 20, oklch)`],
      [
        '[#ff6b35]/50',
        'bg-darken-20',
        `--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`,
      ],
      ['[#ff6b35]/50', 'bg-lighten-20', `--tw-jib--lightness(${BG_LIGHT_INPUT}, 20, oklch)`],
    ])('bg-%s %s', async (bgColor, transform, marker) => {
      const css = await compile(`bg-${bgColor} ${transform}`, { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(marker);
    });
  });

  describe('opacity + darken/lighten + border gradient', () => {
    test('opacity-darken-border-linear', async () => {
      const css = await compile(
        'bg-blue-500/50 bg-darken-20 border-linear-to-r border-from-rose-500 border-to-cyan-500',
        { functions: true },
      );
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-lighten-border-linear', async () => {
      const css = await compile(
        'bg-blue-500/50 bg-lighten-20 border-linear-to-r border-from-rose-500 border-to-cyan-500',
        { functions: true },
      );
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, 20, oklch)`);
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-darken-space-border', async () => {
      const css = await compile(
        'bg-blue-500/50 bg-darken-20/hsl border-linear-to-r border-from-rose-500 border-to-cyan-500',
        { functions: true },
      );
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toMatch(/calc\(20 \* -1\),\s+hsl/);
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-lighten-space-border', async () => {
      const css = await compile(
        'bg-blue-500/50 bg-lighten-20/srgb border-linear-to-r border-from-rose-500 border-to-cyan-500',
        { functions: true },
      );
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toMatch(/20,\s+srgb/);
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-darken-border-radial', async () => {
      const css = await compile(
        'bg-red-500/75 bg-darken-20 border-radial border-from-amber-400 border-to-emerald-500',
        { functions: true },
      );
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-lighten-border-conic', async () => {
      const css = await compile(
        'bg-red-500/75 bg-lighten-20 border-conic-0 border-from-amber-400 border-via-rose-500 border-to-emerald-500',
        { functions: true },
      );
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, 20, oklch)`);
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-darken-border-spin', async () => {
      const css = await compile(
        'bg-emerald-500/50 bg-darken-20 border-conic-0 border-spin border-from-rose-500 border-to-cyan-500',
        { functions: true },
      );
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-darken-border-interp', async () => {
      const css = await compile(
        'bg-purple-500/50 bg-darken-20/oklch border-linear/longer border-linear-to-r border-from-rose-500 border-to-cyan-500',
        { functions: true },
      );
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toMatch(/calc\(20 \* -1\),\s+oklch/);
      expect(css).toContain(BG_LAYER);
    });
  });

  describe('color transform + border gradient', () => {
    describe('darken with all border types', () => {
      test('darken + linear-r', async () => {
        const css = await compile(
          'bg-blue-500 bg-darken-20 border-linear-to-r border-from-rose-500 border-to-cyan-500',
          { functions: true },
        );
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
        expect(css).toContain(BG_LAYER);
      });

      test('darken + linear-b', async () => {
        const css = await compile(
          'bg-blue-500 bg-darken-20 border-linear-to-b border-from-rose-500 border-to-cyan-500',
          { functions: true },
        );
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
        expect(css).toContain(BG_LAYER);
      });

      test('darken + linear-45', async () => {
        const css = await compile(
          'bg-blue-500 bg-darken-20 border-linear-45 border-from-rose-500 border-to-cyan-500',
          { functions: true },
        );
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
        expect(css).toContain(BG_LAYER);
      });

      test('darken + radial', async () => {
        const css = await compile(
          'bg-blue-500 bg-darken-20 border-radial border-from-rose-500 border-to-cyan-500',
          { functions: true },
        );
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
        expect(css).toContain(BG_LAYER);
      });

      test('darken + conic', async () => {
        const css = await compile(
          'bg-blue-500 bg-darken-20 border-conic-0 border-from-rose-500 border-via-yellow-400 border-to-cyan-500',
          { functions: true },
        );
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
        expect(css).toContain(BG_LAYER);
      });

      test('darken + spin', async () => {
        const css = await compile(
          'bg-blue-500 bg-darken-20 border-conic-0 border-spin border-from-rose-500 border-to-cyan-500',
          { functions: true },
        );
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
        expect(css).toContain(BG_LAYER);
      });
    });

    describe('lighten with all border types', () => {
      test('lighten + linear-r', async () => {
        const css = await compile(
          'bg-blue-500 bg-lighten-20 border-linear-to-r border-from-rose-500 border-to-cyan-500',
          { functions: true },
        );
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, 20, oklch)`);
        expect(css).toContain(BG_LAYER);
      });

      test('lighten + linear-b', async () => {
        const css = await compile(
          'bg-blue-500 bg-lighten-20 border-linear-to-b border-from-rose-500 border-to-cyan-500',
          { functions: true },
        );
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, 20, oklch)`);
        expect(css).toContain(BG_LAYER);
      });

      test('lighten + radial', async () => {
        const css = await compile(
          'bg-blue-500 bg-lighten-20 border-radial border-from-rose-500 border-to-cyan-500',
          { functions: true },
        );
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, 20, oklch)`);
        expect(css).toContain(BG_LAYER);
      });

      test('lighten + conic', async () => {
        const css = await compile(
          'bg-blue-500 bg-lighten-20 border-conic-0 border-from-rose-500 border-via-yellow-400 border-to-cyan-500',
          { functions: true },
        );
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, 20, oklch)`);
        expect(css).toContain(BG_LAYER);
      });
    });

    describe('color space + border interpolation', () => {
      test('darken/oklch + border/srgb', async () => {
        const css = await compile(
          'bg-blue-500 bg-darken-20/oklch border-linear/srgb border-linear-to-r border-from-rose-500 border-to-cyan-500',
          { functions: true },
        );
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toMatch(/calc\(20 \* -1\),\s+oklch/);
        expect(css).toContain(BG_LAYER);
      });

      test('darken/hsl + border/oklch', async () => {
        const css = await compile(
          'bg-blue-500 bg-darken-20/hsl border-linear/oklch border-linear-to-r border-from-rose-500 border-to-cyan-500',
          { functions: true },
        );
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toMatch(/calc\(20 \* -1\),\s+hsl/);
        expect(css).toContain(BG_LAYER);
      });

      test('darken/srgb + border/longer', async () => {
        const css = await compile(
          'bg-blue-500 bg-darken-20/srgb border-linear/longer border-linear-to-r border-from-rose-500 border-to-cyan-500',
          { functions: true },
        );
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toMatch(/calc\(20 \* -1\),\s+srgb/);
        expect(css).toContain(BG_LAYER);
      });

      test('lighten/oklab + border/decreasing', async () => {
        const css = await compile(
          'bg-blue-500 bg-lighten-20/oklab border-linear/decreasing border-linear-to-r border-from-rose-500 border-to-cyan-500',
          { functions: true },
        );
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toMatch(/20,\s+oklab/);
        expect(css).toContain(BG_LAYER);
      });
    });

    describe('base colors + border gradient', () => {
      test('red darken + border', async () => {
        const css = await compile(
          'bg-red-500 bg-darken-20 border-linear-to-r border-from-amber-400 border-to-emerald-500',
          { functions: true },
        );
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
        expect(css).toContain(BG_LAYER);
      });

      test('green darken + border', async () => {
        const css = await compile(
          'bg-green-500 bg-darken-20 border-linear-to-r border-from-amber-400 border-to-emerald-500',
          { functions: true },
        );
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
        expect(css).toContain(BG_LAYER);
      });

      test('purple lighten + border', async () => {
        const css = await compile(
          'bg-purple-600 bg-lighten-20 border-linear-to-r border-from-amber-400 border-to-emerald-500',
          { functions: true },
        );
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, 20, oklch)`);
        expect(css).toContain(BG_LAYER);
      });

      test('arbitrary darken + border', async () => {
        const css = await compile(
          'bg-[#ff6b35] bg-darken-20 border-linear-to-r border-from-rose-500 border-to-cyan-500',
          { functions: true },
        );
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
        expect(css).toContain(BG_LAYER);
      });
    });
  });

  describe('edge cases: extreme amounts', () => {
    test.each([0, 100, 1])('bg-darken-%i', async (amount) => {
      const css = await compile(`bg-blue-500 bg-darken-${amount}`, { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(${amount} * -1), oklch)`);
    });

    test.each([0, 100, 1])('bg-lighten-%i', async (amount) => {
      const css = await compile(`bg-blue-500 bg-lighten-${amount}`, { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, ${amount}, oklch)`);
    });
  });

  describe('edge cases: already dark / already light', () => {
    test('dark base + darken', async () => {
      const css = await compile('bg-slate-900 bg-darken-20', { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
    });

    test('dark base + darken/hsl', async () => {
      const css = await compile('bg-slate-900 bg-darken-20/hsl', { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toMatch(/calc\(20 \* -1\),\s+hsl/);
    });

    test('light base + lighten', async () => {
      const css = await compile('bg-yellow-100 bg-lighten-20', { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, 20, oklch)`);
    });

    test('light base + lighten/rgb', async () => {
      const css = await compile('bg-yellow-100 bg-lighten-20/rgb', { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toMatch(/20,\s+rgb\b/);
    });
  });

  describe('edge cases: no explicit background', () => {
    test('bg-darken-20 alone', async () => {
      const css = await compile('bg-darken-20', { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
    });

    test('bg-lighten-20 alone', async () => {
      const css = await compile('bg-lighten-20', { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, 20, oklch)`);
    });

    test('bg-darken-20/oklch alone', async () => {
      const css = await compile('bg-darken-20/oklch', { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toMatch(/calc\(20 \* -1\),\s+oklch/);
    });
  });

  describe('edge cases: state variants', () => {
    test('hover:bg-darken-20', async () => {
      const css = await compile('bg-blue-500 hover:bg-darken-20', { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
      expect(css).toContain('&:hover');
    });

    test('dark:bg-darken-30', async () => {
      const css = await compile('bg-blue-500 bg-darken-10 dark:bg-darken-30', { functions: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(30 * -1), oklch)`);
      expect(css).toContain('prefers-color-scheme: dark');
    });
  });

  describe('triple combo: opacity + transform + border gradient', () => {
    test('triple-darken', async () => {
      const css = await compile(
        'bg-blue-500/75 bg-darken-20 border-linear-to-r border-from-rose-500 border-to-cyan-500',
        { functions: true },
      );
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, calc(20 * -1), oklch)`);
      expect(css).toContain(BG_LAYER);
    });

    test('triple-lighten', async () => {
      const css = await compile(
        'bg-indigo-700/50 bg-lighten-25 border-linear-to-r border-from-amber-400 border-to-emerald-500',
        { functions: true },
      );
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain(`--tw-jib--lightness(${BG_LIGHT_INPUT}, 25, oklch)`);
      expect(css).toContain(BG_LAYER);
    });

    test('triple-darken-space', async () => {
      const css = await compile(
        'bg-emerald-500/80 bg-darken-15/hsl border-linear/oklch border-linear-to-r border-from-rose-500 border-to-cyan-500',
        { functions: true },
      );
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toMatch(/calc\(15 \* -1\),\s+hsl/);
      expect(css).toContain(BG_LAYER);
    });

    test('triple-lighten-space', async () => {
      const css = await compile(
        'bg-red-600/60 bg-lighten-20/oklab border-conic-0 border-from-amber-400 border-via-rose-500 border-to-emerald-500',
        { functions: true },
      );
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toMatch(/20,\s+oklab/);
      expect(css).toContain(BG_LAYER);
    });
  });
});

describe('experimental inline function usage', () => {
  test('bg-[...] with lightness router function', async () => {
    const css = await compile('bg-[--tw-jib--lightness(var(--color-blue-500),60)]', {
      functions: true,
    });
    expect(css).toContain('--tw-jib--lightness(');
    expect(css).toContain('background-color:');
  });

  test('bg-[...] with negative amount (darken)', async () => {
    const css = await compile('bg-[--tw-jib--lightness(var(--color-blue-500),-60)]', {
      functions: true,
    });
    expect(css).toContain('--tw-jib--lightness(');
    expect(css).toContain('-60');
  });

  test('bg-[...] with color space argument', async () => {
    const css = await compile('bg-[--tw-jib--lightness(var(--color-blue-500),30,hsl)]', {
      functions: true,
    });
    expect(css).toContain('--tw-jib--lightness(');
    expect(css).toContain('hsl');
  });

  test('from-[...] gradient stop with lightness', async () => {
    const css = await compile(
      'bg-linear-to-r from-[--tw-jib--lightness(var(--color-blue-500),60)] to-blue-500',
      { functions: true },
    );
    expect(css).toContain('--tw-jib--lightness(');
    expect(css).toContain('--tw-gradient-from:');
  });

  test('to-[...] gradient stop with darkened lightness', async () => {
    const css = await compile(
      'bg-linear-to-r from-blue-500 to-[--tw-jib--lightness(var(--color-blue-500),-60)]',
      { functions: true },
    );
    expect(css).toContain('--tw-jib--lightness(');
    expect(css).toContain('--tw-gradient-to:');
  });

  test('from-[...] + to-[...] both using lightness functions', async () => {
    const css = await compile(
      'bg-linear-to-r from-[--tw-jib--lightness(var(--color-blue-500),60)] to-[--tw-jib--lightness(var(--color-blue-500),-60)]',
      { functions: true },
    );
    expect(css).toContain('--tw-gradient-from:');
    expect(css).toContain('--tw-gradient-to:');
    // Both stops should reference the lightness function
    const matches = css.match(/--tw-jib--lightness\(/g);
    expect(matches?.length).toBeGreaterThanOrEqual(2);
  });

  test('from-[...] + via-[...] + to-[...] all with lightness functions', async () => {
    const css = await compile(
      'bg-linear-to-r from-[--tw-jib--lightness(var(--color-blue-500),60)] via-[--tw-jib--lightness(var(--color-blue-500),0)] to-[--tw-jib--lightness(var(--color-blue-500),-60)]',
      { functions: true },
    );
    expect(css).toContain('--tw-gradient-from:');
    expect(css).toContain('--tw-gradient-via:');
    expect(css).toContain('--tw-gradient-to:');
  });

  test('bg-[...] with CSS variable as color', async () => {
    const css = await compile('bg-[--tw-jib--lightness(var(--brand-primary),60)]', {
      functions: true,
    });
    expect(css).toContain('--tw-jib--lightness(');
    expect(css).toContain('--brand-primary');
  });

  test('nested composition: lightness wrapping hue-rotate', async () => {
    const css = await compile(
      'bg-[--tw-jib--lightness(--tw-jib--hue-rotate(var(--color-red-500),120),30)]',
      { functions: true },
    );
    expect(css).toContain('--tw-jib--lightness(');
    expect(css).toContain('--tw-jib--hue-rotate(');
  });
});

describe.each(suiteScenarios('color-transforms', 'border-gradient'))(
  'opacity + darken/lighten + border gradient — $name',
  ({ compile }) => {
    test('opacity-darken-border-linear', async () => {
      const css = await compile(
        'bg-blue-500/50 bg-darken-20 border-linear-to-r border-from-rose-500 border-to-cyan-500',
      );
      expectStableOklch(css);
      expect(css).toContain(BG_LAYER);
      expect(css).toContain('border-color: transparent');
    });

    test('opacity-lighten-border-linear', async () => {
      const css = await compile(
        'bg-blue-500/50 bg-lighten-20 border-linear-to-r border-from-rose-500 border-to-cyan-500',
      );
      expectStableOklch(css);
      expect(css).toContain(BG_LAYER);
      expect(css).toContain('border-color: transparent');
    });

    test('opacity-darken-space-border', async () => {
      const css = await compile(
        'bg-blue-500/50 bg-darken-20/hsl border-linear-to-r border-from-rose-500 border-to-cyan-500',
      );
      expect(css).toContain('hsl(');
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-lighten-space-border', async () => {
      const css = await compile(
        'bg-blue-500/50 bg-lighten-20/srgb border-linear-to-r border-from-rose-500 border-to-cyan-500',
      );
      expect(css).toContain(`from ${BG_LIGHT_INPUT} srgb`);
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-darken-border-radial', async () => {
      const css = await compile(
        'bg-red-500/75 bg-darken-20 border-radial border-from-amber-400 border-to-emerald-500',
      );
      expectStableOklch(css);
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-lighten-border-conic', async () => {
      const css = await compile(
        'bg-red-500/75 bg-lighten-20 border-conic-0 border-from-amber-400 border-via-rose-500 border-to-emerald-500',
      );
      expectStableOklch(css);
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-darken-border-spin', async () => {
      const css = await compile(
        'bg-emerald-500/50 bg-darken-20 border-conic-0 border-spin border-from-rose-500 border-to-cyan-500',
      );
      expectStableOklch(css);
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-darken-border-interp', async () => {
      const css = await compile(
        'bg-purple-500/50 bg-darken-20/oklch border-linear/longer border-linear-to-r border-from-rose-500 border-to-cyan-500',
      );
      expect(css).toContain('oklch(');
      expect(css).toContain(BG_LAYER);
    });
  },
);

describe.each(suiteScenarios('color-transforms', 'border-gradient'))(
  'color transform + border gradient — $name',
  ({ compile }) => {
    describe('darken with all border types', () => {
      test('darken + linear-r', async () => {
        const css = await compile(
          'bg-blue-500 bg-darken-20 border-linear-to-r border-from-rose-500 border-to-cyan-500',
        );
        expectStableOklch(css);
        expect(css).toContain(BG_LAYER);
        expect(css).toContain('border-color: transparent');
      });

      test('darken + linear-b', async () => {
        const css = await compile(
          'bg-blue-500 bg-darken-20 border-linear-to-b border-from-rose-500 border-to-cyan-500',
        );
        expectStableOklch(css);
        expect(css).toContain(BG_LAYER);
      });

      test('darken + linear-45', async () => {
        const css = await compile(
          'bg-blue-500 bg-darken-20 border-linear-45 border-from-rose-500 border-to-cyan-500',
        );
        expectStableOklch(css);
        expect(css).toContain(BG_LAYER);
      });

      test('darken + radial', async () => {
        const css = await compile(
          'bg-blue-500 bg-darken-20 border-radial border-from-rose-500 border-to-cyan-500',
        );
        expectStableOklch(css);
        expect(css).toContain(BG_LAYER);
      });

      test('darken + conic', async () => {
        const css = await compile(
          'bg-blue-500 bg-darken-20 border-conic-0 border-from-rose-500 border-via-yellow-400 border-to-cyan-500',
        );
        expectStableOklch(css);
        expect(css).toContain(BG_LAYER);
      });

      test('darken + spin', async () => {
        const css = await compile(
          'bg-blue-500 bg-darken-20 border-conic-0 border-spin border-from-rose-500 border-to-cyan-500',
        );
        expectStableOklch(css);
        expect(css).toContain(BG_LAYER);
        expect(css).toContain('animation');
      });
    });

    describe('lighten with all border types', () => {
      test('lighten + linear-r', async () => {
        const css = await compile(
          'bg-blue-500 bg-lighten-20 border-linear-to-r border-from-rose-500 border-to-cyan-500',
        );
        expectStableOklch(css);
        expect(css).toContain(BG_LAYER);
      });

      test('lighten + linear-b', async () => {
        const css = await compile(
          'bg-blue-500 bg-lighten-20 border-linear-to-b border-from-rose-500 border-to-cyan-500',
        );
        expectStableOklch(css);
        expect(css).toContain(BG_LAYER);
      });

      test('lighten + radial', async () => {
        const css = await compile(
          'bg-blue-500 bg-lighten-20 border-radial border-from-rose-500 border-to-cyan-500',
        );
        expectStableOklch(css);
        expect(css).toContain(BG_LAYER);
      });

      test('lighten + conic', async () => {
        const css = await compile(
          'bg-blue-500 bg-lighten-20 border-conic-0 border-from-rose-500 border-via-yellow-400 border-to-cyan-500',
        );
        expectStableOklch(css);
        expect(css).toContain(BG_LAYER);
      });
    });

    describe('color space + border interpolation', () => {
      test('darken/oklch + border/srgb', async () => {
        const css = await compile(
          'bg-blue-500 bg-darken-20/oklch border-linear/srgb border-linear-to-r border-from-rose-500 border-to-cyan-500',
        );
        expect(css).toContain('oklch(');
        expect(css).toContain('--tw-jib--gradient-interpolation: in srgb');
        expect(css).toContain(BG_LAYER);
      });

      test('darken/hsl + border/oklch', async () => {
        const css = await compile(
          'bg-blue-500 bg-darken-20/hsl border-linear/oklch border-linear-to-r border-from-rose-500 border-to-cyan-500',
        );
        expect(css).toContain('hsl(');
        expect(css).toContain('--tw-jib--gradient-interpolation: in oklch');
        expect(css).toContain(BG_LAYER);
      });

      test('darken/srgb + border/longer', async () => {
        const css = await compile(
          'bg-blue-500 bg-darken-20/srgb border-linear/longer border-linear-to-r border-from-rose-500 border-to-cyan-500',
        );
        expect(css).toContain(`from ${BG_LIGHT_INPUT} srgb`);
        expect(css).toContain(BG_LAYER);
      });

      test('lighten/oklab + border/decreasing', async () => {
        const css = await compile(
          'bg-blue-500 bg-lighten-20/oklab border-linear/decreasing border-linear-to-r border-from-rose-500 border-to-cyan-500',
        );
        expect(css).toContain('oklab(');
        expect(css).toContain(BG_LAYER);
      });
    });

    describe('base colors + border gradient', () => {
      test('red darken + border', async () => {
        const css = await compile(
          'bg-red-500 bg-darken-20 border-linear-to-r border-from-amber-400 border-to-emerald-500',
        );
        expect(css).toContain('--color-red-500');
        expectStableOklch(css);
        expect(css).toContain(BG_LAYER);
      });

      test('green darken + border', async () => {
        const css = await compile(
          'bg-green-500 bg-darken-20 border-linear-to-r border-from-amber-400 border-to-emerald-500',
        );
        expect(css).toContain('--color-green-500');
        expectStableOklch(css);
        expect(css).toContain(BG_LAYER);
      });

      test('purple lighten + border', async () => {
        const css = await compile(
          'bg-purple-600 bg-lighten-20 border-linear-to-r border-from-amber-400 border-to-emerald-500',
        );
        expect(css).toContain('--color-purple-600');
        expectStableOklch(css);
        expect(css).toContain(BG_LAYER);
      });

      test('arbitrary darken + border', async () => {
        const css = await compile(
          'bg-[#ff6b35] bg-darken-20 border-linear-to-r border-from-rose-500 border-to-cyan-500',
        );
        expect(css).toContain('#ff6b35');
        expectStableOklch(css);
        expect(css).toContain(BG_LAYER);
      });
    });
  },
);

describe.each(suiteScenarios('color-transforms', 'border-gradient'))(
  'triple combo: opacity + transform + border gradient — $name',
  ({ compile }) => {
    test('triple-darken', async () => {
      const css = await compile(
        'bg-blue-500/75 bg-darken-20 border-linear-to-r border-from-rose-500 border-to-cyan-500',
      );
      expect(css).toContain('color-mix');
      expectStableOklch(css);
      expect(css).toContain(BG_LAYER);
    });

    test('triple-lighten', async () => {
      const css = await compile(
        'bg-indigo-700/50 bg-lighten-25 border-linear-to-r border-from-amber-400 border-to-emerald-500',
      );
      expect(css).toContain('color-mix');
      expectStableOklch(css);
      expect(css).toContain(BG_LAYER);
    });

    test('triple-darken-space', async () => {
      const css = await compile(
        'bg-emerald-500/80 bg-darken-15/hsl border-linear/oklch border-linear-to-r border-from-rose-500 border-to-cyan-500',
      );
      expect(css).toContain('color-mix');
      expect(css).toContain('hsl(');
      expect(css).toContain(BG_LAYER);
    });

    test('triple-lighten-space', async () => {
      const css = await compile(
        'bg-red-600/60 bg-lighten-20/oklab border-conic-0 border-from-amber-400 border-via-rose-500 border-to-emerald-500',
      );
      expect(css).toContain('color-mix');
      expect(css).toContain('oklab(');
      expect(css).toContain(BG_LAYER);
    });
  },
);
