import { describe, test, expect } from 'vitest';
import { compile } from './helpers.js';
import { BG_LAYER, DARKEN_PALETTE, LIGHTEN_PALETTE } from './constants.js';

/**
 * The @supports query that gates the experimental @function path.
 */
const SUPPORTS_FUNCTION =
  '@supports (background: if(style(--value): red)) and (background: --saturation-oklch(red, 20))';

/**
 * The stable default oklch relative color expression used when no modifier is given.
 * Saturation: preserves l, modifies c toward 0.4 max, preserves h.
 */
const STABLE_OKLCH =
  'oklch(from var(--tw-jib--bg-color) l calc(c * (1 - max(var(--tw-jib--background-saturation--amount), calc(0 - var(--tw-jib--background-saturation--amount)))) + max(0, var(--tw-jib--background-saturation--amount)) * 0.4) h / alpha)';

/**
 * Map of color space → stable relative-color substring marker.
 * Each entry is [space-name, unique substring found in compiled CSS].
 */
const STABLE_SPACE_MARKERS: [string, string][] = [
  ['oklch', 'oklch('],
  ['lch', 'max(0, var(--tw-jib--background-saturation--amount)) * 150)'],
  ['lab', 'calc(a * (1 + var(--tw-jib--background-saturation--amount)))'],
  ['oklab', 'oklab('],
  ['hsl', 'hsl('],
  ['hwb', 'hwb('],
  ['rgb', '0.213 * r + 0.715 * g + 0.072 * b'],
  ['srgb', 'from var(--tw-jib--bg-color) srgb'],
  ['srgb-linear', 'from var(--tw-jib--bg-color) srgb-linear'],
  ['display-p3', 'from var(--tw-jib--bg-color) display-p3'],
  ['a98-rgb', 'from var(--tw-jib--bg-color) a98-rgb'],
  ['prophoto-rgb', 'from var(--tw-jib--bg-color) prophoto-rgb'],
  ['rec2020', 'from var(--tw-jib--bg-color) rec2020'],
  ['xyz', 'from var(--tw-jib--bg-color) xyz'],
  ['xyz-d50', 'from var(--tw-jib--bg-color) xyz-d50'],
  ['xyz-d65', 'from var(--tw-jib--bg-color) xyz-d65'],
];

const ALL_SPACES = [
  'oklch', 'lch', 'lab', 'oklab', 'hsl', 'hwb', 'rgb',
  'srgb', 'srgb-linear', 'display-p3', 'a98-rgb',
  'prophoto-rgb', 'rec2020', 'xyz', 'xyz-d50', 'xyz-d65',
  'color-mix',
] as const;

// ---------------------------------------------------------------------------
// Stable path (relative color syntax)
// ---------------------------------------------------------------------------

describe('stable path (relative color syntax)', () => {
  describe('desaturate — default amounts', () => {
    test.each([0, 5, 10, 20, 50, 75, 100])(
      'bg-desaturate-%i',
      async (amount) => {
        const css = await compile(`bg-blue-500 bg-desaturate-${amount}`);
        expect(css).toContain(`--tw-jib--background-saturation--amount: calc(${amount} * -0.01)`);
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain('--tw-jib--bg-color: var(--color-blue-500)');
      },
    );
  });

  describe('saturate — default amounts', () => {
    test.each([0, 5, 10, 20, 50, 75, 100])(
      'bg-saturate-%i',
      async (amount) => {
        const css = await compile(`bg-blue-500 bg-saturate-${amount}`);
        expect(css).toContain(`--tw-jib--background-saturation--amount: calc(${amount} * 0.01)`);
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain('--tw-jib--bg-color: var(--color-blue-500)');
      },
    );
  });

  describe('desaturate — all 17 color spaces', () => {
    test.each(STABLE_SPACE_MARKERS)(
      'bg-desaturate-20/%s',
      async (space, marker) => {
        const css = await compile(`bg-blue-500 bg-desaturate-20/${space}`);
        expect(css).toContain(marker);
        expect(css).toContain('--tw-jib--background-saturation--amount: calc(20 * -0.01)');
      },
    );

    test('bg-desaturate-20/color-mix (inherit fallback)', async () => {
      const css = await compile('bg-blue-500 bg-desaturate-20/color-mix');
      expect(css).toContain('background-color: inherit');
      expect(css).toContain('--tw-jib--background-saturation--amount: calc(20 * -0.01)');
    });
  });

  describe('saturate — all 17 color spaces', () => {
    test.each(STABLE_SPACE_MARKERS)(
      'bg-saturate-20/%s',
      async (space, marker) => {
        const css = await compile(`bg-blue-500 bg-saturate-20/${space}`);
        expect(css).toContain(marker);
        expect(css).toContain('--tw-jib--background-saturation--amount: calc(20 * 0.01)');
      },
    );

    test('bg-saturate-20/color-mix (inherit fallback)', async () => {
      const css = await compile('bg-blue-500 bg-saturate-20/color-mix');
      expect(css).toContain('background-color: inherit');
      expect(css).toContain('--tw-jib--background-saturation--amount: calc(20 * 0.01)');
    });
  });

  describe('base color range — desaturate-20', () => {
    test.each(DARKEN_PALETTE)('bg-%s bg-desaturate-20', async (color, marker) => {
      const css = await compile(`bg-${color} bg-desaturate-20`);
      expect(css).toContain(marker);
      expect(css).toContain(STABLE_OKLCH);
    });
  });

  describe('base color range — saturate-20', () => {
    test.each(LIGHTEN_PALETTE)('bg-%s bg-saturate-20', async (color, marker) => {
      const css = await compile(`bg-${color} bg-saturate-20`);
      expect(css).toContain(marker);
      expect(css).toContain(STABLE_OKLCH);
    });
  });

  describe('special base colors', () => {
    test('bg-[#ff6b35] bg-desaturate-20', async () => {
      const css = await compile('bg-[#ff6b35] bg-desaturate-20');
      expect(css).toContain('#ff6b35');
      expect(css).toContain(STABLE_OKLCH);
    });

    test('bg-[oklch(0.7_0.15_200)] bg-desaturate-20', async () => {
      const css = await compile('bg-[oklch(0.7_0.15_200)] bg-desaturate-20');
      expect(css).toContain('oklch(0.7 0.15 200)');
      expect(css).toContain(STABLE_OKLCH);
    });

    test('bg-(color:--custom-bg-color) bg-desaturate-20', async () => {
      const css = await compile('bg-(color:--custom-bg-color) bg-desaturate-20');
      expect(css).toContain('--custom-bg-color');
      expect(css).toContain(STABLE_OKLCH);
    });

    test('bg-[#ff6b35] bg-saturate-20', async () => {
      const css = await compile('bg-[#ff6b35] bg-saturate-20');
      expect(css).toContain('#ff6b35');
      expect(css).toContain(STABLE_OKLCH);
    });

    test('bg-[oklch(0.7_0.15_200)] bg-saturate-20', async () => {
      const css = await compile('bg-[oklch(0.7_0.15_200)] bg-saturate-20');
      expect(css).toContain('oklch(0.7 0.15 200)');
      expect(css).toContain(STABLE_OKLCH);
    });

    test('bg-(color:--custom-bg-color) bg-saturate-20', async () => {
      const css = await compile('bg-(color:--custom-bg-color) bg-saturate-20');
      expect(css).toContain('--custom-bg-color');
      expect(css).toContain(STABLE_OKLCH);
    });
  });

  describe('base colors × color spaces', () => {
    describe('red-500 desaturate', () => {
      test.each(['oklch', 'hsl', 'rgb', 'srgb', 'display-p3'] as const)(
        'bg-desaturate-20/%s',
        async (space) => {
          const css = await compile(`bg-red-500 bg-desaturate-20/${space}`);
          expect(css).toContain('--color-red-500');
          expect(css).toContain('--tw-jib--background-saturation--amount: calc(20 * -0.01)');
        },
      );
    });

    describe('purple-600 saturate', () => {
      test.each(['oklch', 'hsl', 'rgb', 'srgb', 'display-p3'] as const)(
        'bg-saturate-20/%s',
        async (space) => {
          const css = await compile(`bg-purple-600 bg-saturate-20/${space}`);
          expect(css).toContain('--color-purple-600');
          expect(css).toContain('--tw-jib--background-saturation--amount: calc(20 * 0.01)');
        },
      );
    });
  });

  describe('opacity + desaturate', () => {
    test.each([
      ['25', '10'], ['50', '20'], ['75', '50'],
    ])(
      'bg-blue-500/%s bg-desaturate-%s',
      async (opacity, amount) => {
        const css = await compile(`bg-blue-500/${opacity} bg-desaturate-${amount}`);
        expect(css).toContain('color-mix');
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(`--tw-jib--background-saturation--amount: calc(${amount} * -0.01)`);
      },
    );
  });

  describe('opacity + saturate', () => {
    test.each([
      ['25', '10'], ['50', '20'], ['75', '50'],
    ])(
      'bg-blue-500/%s bg-saturate-%s',
      async (opacity, amount) => {
        const css = await compile(`bg-blue-500/${opacity} bg-saturate-${amount}`);
        expect(css).toContain('color-mix');
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(`--tw-jib--background-saturation--amount: calc(${amount} * 0.01)`);
      },
    );
  });

  describe('saturation + border gradient', () => {
    test('desaturate + linear-r', async () => {
      const css = await compile('bg-blue-500 bg-desaturate-20 border-linear-to-r border-from-rose-500 border-to-cyan-500');
      expect(css).toContain(STABLE_OKLCH);
      expect(css).toContain(BG_LAYER);
      expect(css).toContain('border-color: transparent');
    });

    test('saturate + linear-r', async () => {
      const css = await compile('bg-blue-500 bg-saturate-20 border-linear-to-r border-from-rose-500 border-to-cyan-500');
      expect(css).toContain(STABLE_OKLCH);
      expect(css).toContain(BG_LAYER);
    });

    test('desaturate/hsl + border', async () => {
      const css = await compile('bg-blue-500 bg-desaturate-20/hsl border-linear-to-r border-from-rose-500 border-to-cyan-500');
      expect(css).toContain('hsl(');
      expect(css).toContain(BG_LAYER);
    });
  });

  describe('aliases match primary', () => {
    test('bg-saturation-20 = bg-saturate-20', async () => {
      const cssA = await compile('bg-blue-500 bg-saturation-20');
      const cssB = await compile('bg-blue-500 bg-saturate-20');
      expect(cssA).toContain(STABLE_OKLCH);
      expect(cssB).toContain(STABLE_OKLCH);
      expect(cssA).toContain('--tw-jib--background-saturation--amount: calc(20 * 0.01)');
      expect(cssB).toContain('--tw-jib--background-saturation--amount: calc(20 * 0.01)');
    });

    test('-bg-saturation-20 = bg-desaturate-20', async () => {
      const cssA = await compile('bg-blue-500 -bg-saturation-20');
      const cssB = await compile('bg-blue-500 bg-desaturate-20');
      expect(cssA).toContain(STABLE_OKLCH);
      expect(cssB).toContain(STABLE_OKLCH);
      expect(cssA).toContain('--tw-jib--background-saturation--amount: calc(20 * -0.01)');
      expect(cssB).toContain('--tw-jib--background-saturation--amount: calc(20 * -0.01)');
    });
  });

  describe('edge cases', () => {
    test('bg-desaturate-20 alone', async () => {
      const css = await compile('bg-desaturate-20');
      expect(css).toContain(STABLE_OKLCH);
      expect(css).toContain('--tw-jib--background-saturation--amount: calc(20 * -0.01)');
    });

    test('bg-saturate-20 alone', async () => {
      const css = await compile('bg-saturate-20');
      expect(css).toContain(STABLE_OKLCH);
      expect(css).toContain('--tw-jib--background-saturation--amount: calc(20 * 0.01)');
    });

    test('hover:bg-desaturate-20', async () => {
      const css = await compile('bg-blue-500 hover:bg-desaturate-20');
      expect(css).toContain('&:hover');
      expect(css).toContain(STABLE_OKLCH);
    });

    test('dark:bg-desaturate-30', async () => {
      const css = await compile('bg-blue-500 bg-desaturate-10 dark:bg-desaturate-30');
      expect(css).toContain('prefers-color-scheme: dark');
      expect(css).toContain(STABLE_OKLCH);
    });
  });
});

// ---------------------------------------------------------------------------
// Experimental path (@function + @supports)
// ---------------------------------------------------------------------------

describe('experimental path (@function + @supports)', () => {
  describe('desaturate — default amounts', () => {
    test.each([0, 5, 10, 20, 50, 75, 100])(
      'bg-desaturate-%i',
      async (amount) => {
        const css = await compile(`bg-blue-500 bg-desaturate-${amount}`, { experimental: true });
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--saturation(var(--tw-jib--bg-color), calc(${amount} * -1))`);
      },
    );
  });

  describe('saturate — default amounts', () => {
    test.each([0, 5, 10, 20, 50, 75, 100])(
      'bg-saturate-%i',
      async (amount) => {
        const css = await compile(`bg-blue-500 bg-saturate-${amount}`, { experimental: true });
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--saturation(var(--tw-jib--bg-color), ${amount})`);
      },
    );
  });

  describe('desaturate — all 17 color spaces', () => {
    test.each(ALL_SPACES)(
      'bg-desaturate-20/%s',
      async (space) => {
        const css = await compile(`bg-blue-500 bg-desaturate-20/${space}`, { experimental: true });
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--saturation(');
        expect(css).toContain(`calc(20 * -1), ${space}`);
      },
    );
  });

  describe('saturate — all 17 color spaces', () => {
    test.each(ALL_SPACES)(
      'bg-saturate-20/%s',
      async (space) => {
        const css = await compile(`bg-blue-500 bg-saturate-20/${space}`, { experimental: true });
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--saturation(');
        expect(css).toContain(`20, ${space}`);
      },
    );
  });

  describe('base color range', () => {
    test.each(DARKEN_PALETTE)('bg-%s bg-desaturate-20', async (color, marker) => {
      const css = await compile(`bg-${color} bg-desaturate-20`, { experimental: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--saturation(var(--tw-jib--bg-color), calc(20 * -1))');
      expect(css).toContain(marker);
    });

    test.each(LIGHTEN_PALETTE)('bg-%s bg-saturate-20', async (color, marker) => {
      const css = await compile(`bg-${color} bg-saturate-20`, { experimental: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--saturation(var(--tw-jib--bg-color), 20)');
      expect(css).toContain(marker);
    });
  });

  describe('special base colors', () => {
    test('bg-[#ff6b35] bg-desaturate-20', async () => {
      const css = await compile('bg-[#ff6b35] bg-desaturate-20', { experimental: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--saturation(var(--tw-jib--bg-color), calc(20 * -1))');
      expect(css).toContain('#ff6b35');
    });

    test('bg-[oklch(0.7_0.15_200)] bg-saturate-20', async () => {
      const css = await compile('bg-[oklch(0.7_0.15_200)] bg-saturate-20', { experimental: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--saturation(var(--tw-jib--bg-color), 20)');
    });

    test('bg-(color:--custom-bg-color) bg-desaturate-20', async () => {
      const css = await compile('bg-(color:--custom-bg-color) bg-desaturate-20', { experimental: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--saturation(var(--tw-jib--bg-color), calc(20 * -1))');
    });
  });

  describe('saturation + border gradient', () => {
    test('desaturate + linear-r', async () => {
      const css = await compile('bg-blue-500 bg-desaturate-20 border-linear-to-r border-from-rose-500 border-to-cyan-500', { experimental: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--saturation(var(--tw-jib--bg-color), calc(20 * -1))');
      expect(css).toContain(BG_LAYER);
    });

    test('saturate + linear-r', async () => {
      const css = await compile('bg-blue-500 bg-saturate-20 border-linear-to-r border-from-rose-500 border-to-cyan-500', { experimental: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--saturation(var(--tw-jib--bg-color), 20)');
      expect(css).toContain(BG_LAYER);
    });

    test('desaturate/hsl + border', async () => {
      const css = await compile('bg-blue-500 bg-desaturate-20/hsl border-linear-to-r border-from-rose-500 border-to-cyan-500', { experimental: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('calc(20 * -1), hsl');
      expect(css).toContain(BG_LAYER);
    });
  });

  describe('edge cases', () => {
    test('hover:bg-desaturate-20', async () => {
      const css = await compile('bg-blue-500 hover:bg-desaturate-20', { experimental: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--saturation(var(--tw-jib--bg-color), calc(20 * -1))');
      expect(css).toContain('&:hover');
    });

    test('bg-desaturate-20 alone', async () => {
      const css = await compile('bg-desaturate-20', { experimental: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--saturation(var(--tw-jib--bg-color), calc(20 * -1))');
    });

    test('bg-saturate-20 alone', async () => {
      const css = await compile('bg-saturate-20', { experimental: true });
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--saturation(var(--tw-jib--bg-color), 20)');
    });
  });
});
