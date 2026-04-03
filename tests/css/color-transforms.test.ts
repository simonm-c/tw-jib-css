import { describe, test, expect } from 'vitest';
import { compile } from './helpers.js';
import { BG_LAYER, DARKEN_PALETTE, LIGHTEN_PALETTE } from './constants.js';

/**
 * The @supports query that gates the experimental @function path.
 */
const SUPPORTS_FUNCTION =
  '@supports (background: if(style(--value): red)) and (background: --darken-oklch(red, 20))';

/**
 * The stable default oklch relative color expression used when no modifier is given.
 */
const STABLE_OKLCH =
  'oklch(from var(--tw-jib--bg-color) calc(l - var(--tw-jib--darken-amount)) c h / alpha)';

/**
 * Map of color space → stable relative-color substring marker.
 * Each entry is [space-name, unique substring found in compiled CSS].
 */
const STABLE_SPACE_MARKERS: [string, string][] = [
  ['oklch', 'oklch('],
  ['lch', 'calc(l - var(--tw-jib--darken-amount) * 100) c h'],
  ['lab', 'lab('],
  ['oklab', 'oklab('],
  ['hsl', 'hsl('],
  ['hwb', 'hwb('],
  ['rgb', 'calc(r - var(--tw-jib--darken-amount) * 255)'],
  ['srgb', 'srgb calc(r - var(--tw-jib--darken-amount))'],
  ['srgb-linear', 'srgb-linear calc(r - var(--tw-jib--darken-amount))'],
  ['display-p3', 'display-p3 calc(r - var(--tw-jib--darken-amount))'],
  ['a98-rgb', 'a98-rgb calc(r - var(--tw-jib--darken-amount))'],
  ['prophoto-rgb', 'prophoto-rgb calc(r - var(--tw-jib--darken-amount))'],
  ['rec2020', 'rec2020 calc(r - var(--tw-jib--darken-amount))'],
  ['xyz', 'xyz calc(x - var(--tw-jib--darken-amount))'],
  ['xyz-d50', 'xyz-d50 calc(x - var(--tw-jib--darken-amount))'],
  ['xyz-d65', 'xyz-d65 calc(x - var(--tw-jib--darken-amount))'],
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
  describe('darken — default amounts', () => {
    test.each([0, 5, 10, 20, 50, 75, 100])(
      'bg-darken-%i',
      async (amount) => {
        const css = await compile(`bg-blue-500 bg-darken-${amount}`);
        expect(css).toContain(`--tw-jib--darken-amount: calc(${amount} * 0.01)`);
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain('--tw-jib--bg-color: var(--color-blue-500)');
      },
    );
  });

  describe('lighten — default amounts', () => {
    test.each([0, 5, 10, 20, 50, 75, 100])(
      'bg-lighten-%i',
      async (amount) => {
        const css = await compile(`bg-blue-500 bg-lighten-${amount}`);
        expect(css).toContain(`--tw-jib--darken-amount: calc(${amount} * -0.01)`);
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain('--tw-jib--bg-color: var(--color-blue-500)');
      },
    );
  });

  describe('darken — all 17 color spaces', () => {
    test.each(STABLE_SPACE_MARKERS)(
      'bg-darken-20/%s',
      async (space, marker) => {
        const css = await compile(`bg-blue-500 bg-darken-20/${space}`);
        expect(css).toContain(marker);
        expect(css).toContain('--tw-jib--darken-amount: calc(20 * 0.01)');
      },
    );

    test('bg-darken-20/color-mix (inherit fallback)', async () => {
      const css = await compile('bg-blue-500 bg-darken-20/color-mix');
      expect(css).toContain('background-color: inherit');
      expect(css).toContain('--tw-jib--darken-amount: calc(20 * 0.01)');
    });
  });

  describe('lighten — all 17 color spaces', () => {
    test.each(STABLE_SPACE_MARKERS)(
      'bg-lighten-20/%s',
      async (space, marker) => {
        const css = await compile(`bg-blue-500 bg-lighten-20/${space}`);
        expect(css).toContain(marker);
        expect(css).toContain('--tw-jib--darken-amount: calc(20 * -0.01)');
      },
    );

    test('bg-lighten-20/color-mix (inherit fallback)', async () => {
      const css = await compile('bg-blue-500 bg-lighten-20/color-mix');
      expect(css).toContain('background-color: inherit');
      expect(css).toContain('--tw-jib--darken-amount: calc(20 * -0.01)');
    });
  });

  describe('base color range — darken-20', () => {
    test.each(DARKEN_PALETTE)('bg-%s bg-darken-20', async (color, marker) => {
      const css = await compile(`bg-${color} bg-darken-20`);
      expect(css).toContain(marker);
      expect(css).toContain(STABLE_OKLCH);
    });
  });

  describe('base color range — lighten-20', () => {
    test.each(LIGHTEN_PALETTE)('bg-%s bg-lighten-20', async (color, marker) => {
      const css = await compile(`bg-${color} bg-lighten-20`);
      expect(css).toContain(marker);
      expect(css).toContain(STABLE_OKLCH);
    });
  });

  describe('special base colors', () => {
    test('bg-[#ff6b35] bg-darken-20', async () => {
      const css = await compile('bg-[#ff6b35] bg-darken-20');
      expect(css).toContain('#ff6b35');
      expect(css).toContain(STABLE_OKLCH);
    });

    test('bg-[oklch(0.7_0.15_200)] bg-darken-20', async () => {
      const css = await compile('bg-[oklch(0.7_0.15_200)] bg-darken-20');
      expect(css).toContain('oklch(0.7 0.15 200)');
      expect(css).toContain(STABLE_OKLCH);
    });

    test('bg-[rgb(50,215,30)] bg-darken-20', async () => {
      const css = await compile('bg-[rgb(50,215,30)] bg-darken-20');
      expect(css).toContain('rgb(50,215,30)');
      expect(css).toContain(STABLE_OKLCH);
    });

    test('bg-(color:--custom-bg-color) bg-darken-20', async () => {
      const css = await compile('bg-(color:--custom-bg-color) bg-darken-20');
      expect(css).toContain('--custom-bg-color');
      expect(css).toContain(STABLE_OKLCH);
    });

    test('bg-[#ff6b35] bg-lighten-20', async () => {
      const css = await compile('bg-[#ff6b35] bg-lighten-20');
      expect(css).toContain('#ff6b35');
      expect(css).toContain(STABLE_OKLCH);
    });

    test('bg-[oklch(0.7_0.15_200)] bg-lighten-20', async () => {
      const css = await compile('bg-[oklch(0.7_0.15_200)] bg-lighten-20');
      expect(css).toContain('oklch(0.7 0.15 200)');
      expect(css).toContain(STABLE_OKLCH);
    });

    test('bg-(color:--custom-bg-color) bg-lighten-20', async () => {
      const css = await compile('bg-(color:--custom-bg-color) bg-lighten-20');
      expect(css).toContain('--custom-bg-color');
      expect(css).toContain(STABLE_OKLCH);
    });
  });

  describe('base colors × color spaces', () => {
    describe('red-500 darken', () => {
      test.each(['oklch', 'hsl', 'rgb', 'srgb', 'display-p3'] as const)(
        'bg-darken-20/%s',
        async (space) => {
          const css = await compile(`bg-red-500 bg-darken-20/${space}`);
          expect(css).toContain('--color-red-500');
          expect(css).toContain('--tw-jib--darken-amount: calc(20 * 0.01)');
        },
      );
    });

    describe('emerald-400 darken', () => {
      test.each(['oklch', 'hsl', 'rgb', 'srgb', 'display-p3'] as const)(
        'bg-darken-20/%s',
        async (space) => {
          const css = await compile(`bg-emerald-400 bg-darken-20/${space}`);
          expect(css).toContain('--color-emerald-400');
          expect(css).toContain('--tw-jib--darken-amount: calc(20 * 0.01)');
        },
      );
    });

    describe('purple-600 lighten', () => {
      test.each(['oklch', 'hsl', 'rgb', 'srgb', 'display-p3'] as const)(
        'bg-lighten-20/%s',
        async (space) => {
          const css = await compile(`bg-purple-600 bg-lighten-20/${space}`);
          expect(css).toContain('--color-purple-600');
          expect(css).toContain('--tw-jib--darken-amount: calc(20 * -0.01)');
        },
      );
    });
  });

  describe('opacity + darken', () => {
    test.each([
      ['25', '10'], ['25', '20'], ['25', '50'],
      ['50', '10'], ['50', '20'], ['50', '50'],
      ['75', '10'], ['75', '20'], ['75', '50'],
    ])(
      'bg-blue-500/%s bg-darken-%s',
      async (opacity, amount) => {
        const css = await compile(`bg-blue-500/${opacity} bg-darken-${amount}`);
        expect(css).toContain('color-mix');
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(`--tw-jib--darken-amount: calc(${amount} * 0.01)`);
      },
    );

    test.each([
      ['0', '20'],
      ['100', '20'],
      ['5', '20'],
    ])(
      'bg-blue-500/%s bg-darken-%s (edge opacity)',
      async (opacity, amount) => {
        const css = await compile(`bg-blue-500/${opacity} bg-darken-${amount}`);
        expect(css).toContain('--color-blue-500');
        expect(css).toContain(STABLE_OKLCH);
      },
    );
  });

  describe('opacity + lighten', () => {
    test.each([
      ['25', '10'], ['25', '20'], ['25', '50'],
      ['50', '10'], ['50', '20'], ['50', '50'],
      ['75', '10'], ['75', '20'], ['75', '50'],
    ])(
      'bg-blue-500/%s bg-lighten-%s',
      async (opacity, amount) => {
        const css = await compile(`bg-blue-500/${opacity} bg-lighten-${amount}`);
        expect(css).toContain('color-mix');
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(`--tw-jib--darken-amount: calc(${amount} * -0.01)`);
      },
    );

    test.each([
      ['0', '20'],
      ['100', '20'],
      ['5', '20'],
    ])(
      'bg-blue-500/%s bg-lighten-%s (edge opacity)',
      async (opacity, amount) => {
        const css = await compile(`bg-blue-500/${opacity} bg-lighten-${amount}`);
        expect(css).toContain('--color-blue-500');
        expect(css).toContain(STABLE_OKLCH);
      },
    );
  });

  describe('opacity + color space modifiers', () => {
    test.each(['oklch', 'hsl', 'rgb', 'srgb', 'lab', 'display-p3', 'color-mix'] as const)(
      'bg-blue-500/50 bg-darken-20/%s',
      async (space) => {
        const css = await compile(`bg-blue-500/50 bg-darken-20/${space}`);
        expect(css).toContain('color-mix');
        expect(css).toContain('--tw-jib--darken-amount: calc(20 * 0.01)');
      },
    );

    test.each(['oklch', 'hsl', 'rgb', 'srgb', 'color-mix'] as const)(
      'bg-blue-500/50 bg-lighten-20/%s',
      async (space) => {
        const css = await compile(`bg-blue-500/50 bg-lighten-20/${space}`);
        expect(css).toContain('color-mix');
        expect(css).toContain('--tw-jib--darken-amount: calc(20 * -0.01)');
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
    ])(
      'bg-%s %s',
      async (bgColor, transform, marker) => {
        const css = await compile(`bg-${bgColor} ${transform}`);
        expect(css).toContain(marker);
        expect(css).toContain(STABLE_OKLCH);
      },
    );
  });

  describe('opacity + darken/lighten + border gradient', () => {
    test('opacity-darken-border-linear', async () => {
      const css = await compile('bg-blue-500/50 bg-darken-20 border-linear-to-r border-from-rose-500 border-to-cyan-500');
      expect(css).toContain(STABLE_OKLCH);
      expect(css).toContain(BG_LAYER);
      expect(css).toContain('border-color: transparent');
    });

    test('opacity-lighten-border-linear', async () => {
      const css = await compile('bg-blue-500/50 bg-lighten-20 border-linear-to-r border-from-rose-500 border-to-cyan-500');
      expect(css).toContain(STABLE_OKLCH);
      expect(css).toContain(BG_LAYER);
      expect(css).toContain('border-color: transparent');
    });

    test('opacity-darken-space-border', async () => {
      const css = await compile('bg-blue-500/50 bg-darken-20/hsl border-linear-to-r border-from-rose-500 border-to-cyan-500');
      expect(css).toContain('hsl(');
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-lighten-space-border', async () => {
      const css = await compile('bg-blue-500/50 bg-lighten-20/srgb border-linear-to-r border-from-rose-500 border-to-cyan-500');
      expect(css).toContain('srgb calc(r - var(--tw-jib--darken-amount))');
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-darken-border-radial', async () => {
      const css = await compile('bg-red-500/75 bg-darken-20 border-radial border-from-amber-400 border-to-emerald-500');
      expect(css).toContain(STABLE_OKLCH);
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-lighten-border-conic', async () => {
      const css = await compile('bg-red-500/75 bg-lighten-20 border-conic-0 border-from-amber-400 border-via-rose-500 border-to-emerald-500');
      expect(css).toContain(STABLE_OKLCH);
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-darken-border-spin', async () => {
      const css = await compile('bg-emerald-500/50 bg-darken-20 border-conic-0 border-spin border-from-rose-500 border-to-cyan-500');
      expect(css).toContain(STABLE_OKLCH);
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-darken-border-interp', async () => {
      const css = await compile('bg-purple-500/50 bg-darken-20/oklch border-linear/longer border-linear-to-r border-from-rose-500 border-to-cyan-500');
      expect(css).toContain('oklch(');
      expect(css).toContain(BG_LAYER);
    });
  });

  describe('color transform + border gradient', () => {
    describe('darken with all border types', () => {
      test('darken + linear-r', async () => {
        const css = await compile('bg-blue-500 bg-darken-20 border-linear-to-r border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(BG_LAYER);
        expect(css).toContain('border-color: transparent');
      });

      test('darken + linear-b', async () => {
        const css = await compile('bg-blue-500 bg-darken-20 border-linear-to-b border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(BG_LAYER);
      });

      test('darken + linear-45', async () => {
        const css = await compile('bg-blue-500 bg-darken-20 border-linear-45 border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(BG_LAYER);
      });

      test('darken + radial', async () => {
        const css = await compile('bg-blue-500 bg-darken-20 border-radial border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(BG_LAYER);
      });

      test('darken + conic', async () => {
        const css = await compile('bg-blue-500 bg-darken-20 border-conic-0 border-from-rose-500 border-via-yellow-400 border-to-cyan-500');
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(BG_LAYER);
      });

      test('darken + spin', async () => {
        const css = await compile('bg-blue-500 bg-darken-20 border-conic-0 border-spin border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(BG_LAYER);
        expect(css).toContain('animation');
      });
    });

    describe('lighten with all border types', () => {
      test('lighten + linear-r', async () => {
        const css = await compile('bg-blue-500 bg-lighten-20 border-linear-to-r border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(BG_LAYER);
      });

      test('lighten + linear-b', async () => {
        const css = await compile('bg-blue-500 bg-lighten-20 border-linear-to-b border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(BG_LAYER);
      });

      test('lighten + radial', async () => {
        const css = await compile('bg-blue-500 bg-lighten-20 border-radial border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(BG_LAYER);
      });

      test('lighten + conic', async () => {
        const css = await compile('bg-blue-500 bg-lighten-20 border-conic-0 border-from-rose-500 border-via-yellow-400 border-to-cyan-500');
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(BG_LAYER);
      });
    });

    describe('color space + border interpolation', () => {
      test('darken/oklch + border/srgb', async () => {
        const css = await compile('bg-blue-500 bg-darken-20/oklch border-linear/srgb border-linear-to-r border-from-rose-500 border-to-cyan-500');
        expect(css).toContain('oklch(');
        expect(css).toContain('--tw-jib--gradient-interpolation: in srgb');
        expect(css).toContain(BG_LAYER);
      });

      test('darken/hsl + border/oklch', async () => {
        const css = await compile('bg-blue-500 bg-darken-20/hsl border-linear/oklch border-linear-to-r border-from-rose-500 border-to-cyan-500');
        expect(css).toContain('hsl(');
        expect(css).toContain('--tw-jib--gradient-interpolation: in oklch');
        expect(css).toContain(BG_LAYER);
      });

      test('darken/srgb + border/longer', async () => {
        const css = await compile('bg-blue-500 bg-darken-20/srgb border-linear/longer border-linear-to-r border-from-rose-500 border-to-cyan-500');
        expect(css).toContain('srgb calc(r - var(--tw-jib--darken-amount))');
        expect(css).toContain(BG_LAYER);
      });

      test('lighten/oklab + border/decreasing', async () => {
        const css = await compile('bg-blue-500 bg-lighten-20/oklab border-linear/decreasing border-linear-to-r border-from-rose-500 border-to-cyan-500');
        expect(css).toContain('oklab(');
        expect(css).toContain(BG_LAYER);
      });
    });

    describe('base colors + border gradient', () => {
      test('red darken + border', async () => {
        const css = await compile('bg-red-500 bg-darken-20 border-linear-to-r border-from-amber-400 border-to-emerald-500');
        expect(css).toContain('--color-red-500');
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(BG_LAYER);
      });

      test('green darken + border', async () => {
        const css = await compile('bg-green-500 bg-darken-20 border-linear-to-r border-from-amber-400 border-to-emerald-500');
        expect(css).toContain('--color-green-500');
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(BG_LAYER);
      });

      test('purple lighten + border', async () => {
        const css = await compile('bg-purple-600 bg-lighten-20 border-linear-to-r border-from-amber-400 border-to-emerald-500');
        expect(css).toContain('--color-purple-600');
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(BG_LAYER);
      });

      test('arbitrary darken + border', async () => {
        const css = await compile('bg-[#ff6b35] bg-darken-20 border-linear-to-r border-from-rose-500 border-to-cyan-500');
        expect(css).toContain('#ff6b35');
        expect(css).toContain(STABLE_OKLCH);
        expect(css).toContain(BG_LAYER);
      });
    });
  });

  describe('edge cases: extreme amounts', () => {
    test.each([
      ['darken', 0, '0.01'],
      ['darken', 100, '0.01'],
      ['darken', 1, '0.01'],
      ['lighten', 0, '-0.01'],
      ['lighten', 100, '-0.01'],
      ['lighten', 1, '-0.01'],
    ])(
      'bg-%s-%i',
      async (direction, amount, factor) => {
        const css = await compile(`bg-blue-500 bg-${direction}-${amount}`);
        expect(css).toContain(`--tw-jib--darken-amount: calc(${amount} * ${factor})`);
        expect(css).toContain(STABLE_OKLCH);
      },
    );
  });

  describe('edge cases: already dark / already light', () => {
    test('dark base + darken', async () => {
      const css = await compile('bg-slate-900 bg-darken-20');
      expect(css).toContain('--color-slate-900');
      expect(css).toContain(STABLE_OKLCH);
    });

    test('dark base + darken/hsl', async () => {
      const css = await compile('bg-slate-900 bg-darken-20/hsl');
      expect(css).toContain('--color-slate-900');
      expect(css).toContain('hsl(');
    });

    test('light base + lighten', async () => {
      const css = await compile('bg-yellow-100 bg-lighten-20');
      expect(css).toContain('--color-yellow-100');
      expect(css).toContain(STABLE_OKLCH);
    });

    test('light base + lighten/rgb', async () => {
      const css = await compile('bg-yellow-100 bg-lighten-20/rgb');
      expect(css).toContain('--color-yellow-100');
      expect(css).toContain('calc(r - var(--tw-jib--darken-amount) * 255)');
    });
  });

  describe('edge cases: no explicit background', () => {
    test('bg-darken-20 alone', async () => {
      const css = await compile('bg-darken-20');
      expect(css).toContain(STABLE_OKLCH);
      expect(css).toContain('--tw-jib--darken-amount: calc(20 * 0.01)');
    });

    test('bg-lighten-20 alone', async () => {
      const css = await compile('bg-lighten-20');
      expect(css).toContain(STABLE_OKLCH);
      expect(css).toContain('--tw-jib--darken-amount: calc(20 * -0.01)');
    });

    test('bg-darken-20/oklch alone', async () => {
      const css = await compile('bg-darken-20/oklch');
      expect(css).toContain('oklch(');
      expect(css).toContain('--tw-jib--darken-amount: calc(20 * 0.01)');
    });
  });

  describe('edge cases: state variants', () => {
    test('hover:bg-darken-20', async () => {
      const css = await compile('bg-blue-500 hover:bg-darken-20');
      expect(css).toContain('&:hover');
      expect(css).toContain(STABLE_OKLCH);
    });

    test('dark:bg-darken-30', async () => {
      const css = await compile('bg-blue-500 bg-darken-10 dark:bg-darken-30');
      expect(css).toContain('prefers-color-scheme: dark');
      expect(css).toContain(STABLE_OKLCH);
    });
  });

  describe('triple combo: opacity + transform + border gradient', () => {
    test('triple-darken', async () => {
      const css = await compile('bg-blue-500/75 bg-darken-20 border-linear-to-r border-from-rose-500 border-to-cyan-500');
      expect(css).toContain('color-mix');
      expect(css).toContain(STABLE_OKLCH);
      expect(css).toContain(BG_LAYER);
    });

    test('triple-lighten', async () => {
      const css = await compile('bg-indigo-700/50 bg-lighten-25 border-linear-to-r border-from-amber-400 border-to-emerald-500');
      expect(css).toContain('color-mix');
      expect(css).toContain(STABLE_OKLCH);
      expect(css).toContain(BG_LAYER);
    });

    test('triple-darken-space', async () => {
      const css = await compile('bg-emerald-500/80 bg-darken-15/hsl border-linear/oklch border-linear-to-r border-from-rose-500 border-to-cyan-500');
      expect(css).toContain('color-mix');
      expect(css).toContain('hsl(');
      expect(css).toContain(BG_LAYER);
    });

    test('triple-lighten-space', async () => {
      const css = await compile('bg-red-600/60 bg-lighten-20/oklab border-conic-0 border-from-amber-400 border-via-rose-500 border-to-emerald-500');
      expect(css).toContain('color-mix');
      expect(css).toContain('oklab(');
      expect(css).toContain(BG_LAYER);
    });
  });
});

// ---------------------------------------------------------------------------
// Experimental path (@function + @supports)
// ---------------------------------------------------------------------------

describe('experimental path (@function + @supports)', () => {
  describe('darken — default amounts', () => {
    test.each([0, 5, 10, 20, 50, 75, 100])(
      'bg-darken-%i',
      async (amount) => {
        const css = await compile(`bg-blue-500 bg-darken-${amount}`);
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--darken(var(--tw-jib--bg-color), ${amount})`);
      },
    );
  });

  describe('lighten — default amounts', () => {
    test.each([0, 5, 10, 20, 50, 75, 100])(
      'bg-lighten-%i',
      async (amount) => {
        const css = await compile(`bg-blue-500 bg-lighten-${amount}`);
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--darken(var(--tw-jib--bg-color), calc(${amount} * -1))`);
      },
    );
  });

  describe('darken — all 17 color spaces', () => {
    test.each(ALL_SPACES)(
      'bg-darken-20/%s',
      async (space) => {
        const css = await compile(`bg-blue-500 bg-darken-20/${space}`);
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--darken(');
        expect(css).toContain(`20, ${space}`);
      },
    );
  });

  describe('lighten — all 17 color spaces', () => {
    test.each(ALL_SPACES)(
      'bg-lighten-20/%s',
      async (space) => {
        const css = await compile(`bg-blue-500 bg-lighten-20/${space}`);
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--darken(');
        expect(css).toContain(`calc(20 * -1), ${space}`);
      },
    );
  });

  describe('base color range — darken-20', () => {
    test.each(DARKEN_PALETTE)('bg-%s bg-darken-20', async (color, marker) => {
      const css = await compile(`bg-${color} bg-darken-20`);
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
      expect(css).toContain(marker);
    });
  });

  describe('base color range — lighten-20', () => {
    test.each(LIGHTEN_PALETTE)('bg-%s bg-lighten-20', async (color, marker) => {
      const css = await compile(`bg-${color} bg-lighten-20`);
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), calc(20 * -1))');
      expect(css).toContain(marker);
    });
  });

  describe('special base colors', () => {
    test('bg-[#ff6b35] bg-darken-20', async () => {
      const css = await compile('bg-[#ff6b35] bg-darken-20');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
      expect(css).toContain('#ff6b35');
    });

    test('bg-[oklch(0.7_0.15_200)] bg-darken-20', async () => {
      const css = await compile('bg-[oklch(0.7_0.15_200)] bg-darken-20');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
    });

    test('bg-[rgb(50,215,30)] bg-darken-20', async () => {
      const css = await compile('bg-[rgb(50,215,30)] bg-darken-20');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
    });

    test('bg-(color:--custom-bg-color) bg-darken-20', async () => {
      const css = await compile('bg-(color:--custom-bg-color) bg-darken-20');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
    });

    test('bg-[#ff6b35] bg-lighten-20', async () => {
      const css = await compile('bg-[#ff6b35] bg-lighten-20');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), calc(20 * -1))');
    });

    test('bg-[oklch(0.7_0.15_200)] bg-lighten-20', async () => {
      const css = await compile('bg-[oklch(0.7_0.15_200)] bg-lighten-20');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), calc(20 * -1))');
    });

    test('bg-(color:--custom-bg-color) bg-lighten-20', async () => {
      const css = await compile('bg-(color:--custom-bg-color) bg-lighten-20');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), calc(20 * -1))');
    });
  });

  describe('base colors × color spaces', () => {
    describe('red-500 darken', () => {
      test.each(['oklch', 'hsl', 'rgb', 'srgb', 'display-p3'] as const)(
        'bg-darken-20/%s',
        async (space) => {
          const css = await compile(`bg-red-500 bg-darken-20/${space}`);
          expect(css).toContain(SUPPORTS_FUNCTION);
          expect(css).toContain('--darken(');
          expect(css).toContain(`20, ${space}`);
        },
      );
    });

    describe('emerald-400 darken', () => {
      test.each(['oklch', 'hsl', 'rgb', 'srgb', 'display-p3'] as const)(
        'bg-darken-20/%s',
        async (space) => {
          const css = await compile(`bg-emerald-400 bg-darken-20/${space}`);
          expect(css).toContain(SUPPORTS_FUNCTION);
          expect(css).toContain('--darken(');
          expect(css).toContain(`20, ${space}`);
        },
      );
    });

    describe('purple-600 lighten', () => {
      test.each(['oklch', 'hsl', 'rgb', 'srgb', 'display-p3'] as const)(
        'bg-lighten-20/%s',
        async (space) => {
          const css = await compile(`bg-purple-600 bg-lighten-20/${space}`);
          expect(css).toContain(SUPPORTS_FUNCTION);
          expect(css).toContain('--darken(');
          expect(css).toContain(`calc(20 * -1), ${space}`);
        },
      );
    });
  });

  describe('opacity + darken', () => {
    test.each([
      ['25', '10'], ['25', '20'], ['25', '50'],
      ['50', '10'], ['50', '20'], ['50', '50'],
      ['75', '10'], ['75', '20'], ['75', '50'],
    ])(
      'bg-blue-500/%s bg-darken-%s',
      async (opacity, amount) => {
        const css = await compile(`bg-blue-500/${opacity} bg-darken-${amount}`);
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--darken(var(--tw-jib--bg-color), ${amount})`);
      },
    );

    test.each([
      ['0', '20'],
      ['100', '20'],
      ['5', '20'],
    ])(
      'bg-blue-500/%s bg-darken-%s (edge opacity)',
      async (_opacity, amount) => {
        const css = await compile(`bg-blue-500/${_opacity} bg-darken-${amount}`);
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--darken(var(--tw-jib--bg-color), ${amount})`);
      },
    );
  });

  describe('opacity + lighten', () => {
    test.each([
      ['25', '10'], ['25', '20'], ['25', '50'],
      ['50', '10'], ['50', '20'], ['50', '50'],
      ['75', '10'], ['75', '20'], ['75', '50'],
    ])(
      'bg-blue-500/%s bg-lighten-%s',
      async (opacity, amount) => {
        const css = await compile(`bg-blue-500/${opacity} bg-lighten-${amount}`);
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--darken(var(--tw-jib--bg-color), calc(${amount} * -1))`);
      },
    );

    test.each([
      ['0', '20'],
      ['100', '20'],
      ['5', '20'],
    ])(
      'bg-blue-500/%s bg-lighten-%s (edge opacity)',
      async (_opacity, amount) => {
        const css = await compile(`bg-blue-500/${_opacity} bg-lighten-${amount}`);
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--darken(var(--tw-jib--bg-color), calc(${amount} * -1))`);
      },
    );
  });

  describe('opacity + color space modifiers', () => {
    test.each(['oklch', 'hsl', 'rgb', 'srgb', 'lab', 'display-p3', 'color-mix'] as const)(
      'bg-blue-500/50 bg-darken-20/%s',
      async (space) => {
        const css = await compile(`bg-blue-500/50 bg-darken-20/${space}`);
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--darken(');
        expect(css).toContain(`20, ${space}`);
      },
    );

    test.each(['oklch', 'hsl', 'rgb', 'srgb', 'color-mix'] as const)(
      'bg-blue-500/50 bg-lighten-20/%s',
      async (space) => {
        const css = await compile(`bg-blue-500/50 bg-lighten-20/${space}`);
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--darken(');
        expect(css).toContain(`calc(20 * -1), ${space}`);
      },
    );
  });

  describe('opacity + different base colors', () => {
    test.each([
      ['red-500/50', 'bg-darken-20', '--darken(var(--tw-jib--bg-color), 20)'],
      ['green-500/50', 'bg-darken-20', '--darken(var(--tw-jib--bg-color), 20)'],
      ['purple-500/50', 'bg-darken-20', '--darken(var(--tw-jib--bg-color), 20)'],
      ['amber-500/50', 'bg-darken-20', '--darken(var(--tw-jib--bg-color), 20)'],
      ['red-500/50', 'bg-lighten-20', '--darken(var(--tw-jib--bg-color), calc(20 * -1))'],
      ['green-500/50', 'bg-lighten-20', '--darken(var(--tw-jib--bg-color), calc(20 * -1))'],
      ['purple-500/50', 'bg-lighten-20', '--darken(var(--tw-jib--bg-color), calc(20 * -1))'],
      ['amber-500/50', 'bg-lighten-20', '--darken(var(--tw-jib--bg-color), calc(20 * -1))'],
      ['white/75', 'bg-darken-20', '--darken(var(--tw-jib--bg-color), 20)'],
      ['black/75', 'bg-lighten-20', '--darken(var(--tw-jib--bg-color), calc(20 * -1))'],
      ['[#ff6b35]/50', 'bg-darken-20', '--darken(var(--tw-jib--bg-color), 20)'],
      ['[#ff6b35]/50', 'bg-lighten-20', '--darken(var(--tw-jib--bg-color), calc(20 * -1))'],
    ])(
      'bg-%s %s',
      async (bgColor, transform, marker) => {
        const css = await compile(`bg-${bgColor} ${transform}`);
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(marker);
      },
    );
  });

  describe('opacity + darken/lighten + border gradient', () => {
    test('opacity-darken-border-linear', async () => {
      const css = await compile('bg-blue-500/50 bg-darken-20 border-linear-to-r border-from-rose-500 border-to-cyan-500');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-lighten-border-linear', async () => {
      const css = await compile('bg-blue-500/50 bg-lighten-20 border-linear-to-r border-from-rose-500 border-to-cyan-500');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), calc(20 * -1))');
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-darken-space-border', async () => {
      const css = await compile('bg-blue-500/50 bg-darken-20/hsl border-linear-to-r border-from-rose-500 border-to-cyan-500');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('20, hsl');
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-lighten-space-border', async () => {
      const css = await compile('bg-blue-500/50 bg-lighten-20/srgb border-linear-to-r border-from-rose-500 border-to-cyan-500');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('calc(20 * -1), srgb');
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-darken-border-radial', async () => {
      const css = await compile('bg-red-500/75 bg-darken-20 border-radial border-from-amber-400 border-to-emerald-500');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-lighten-border-conic', async () => {
      const css = await compile('bg-red-500/75 bg-lighten-20 border-conic-0 border-from-amber-400 border-via-rose-500 border-to-emerald-500');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), calc(20 * -1))');
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-darken-border-spin', async () => {
      const css = await compile('bg-emerald-500/50 bg-darken-20 border-conic-0 border-spin border-from-rose-500 border-to-cyan-500');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
      expect(css).toContain(BG_LAYER);
    });

    test('opacity-darken-border-interp', async () => {
      const css = await compile('bg-purple-500/50 bg-darken-20/oklch border-linear/longer border-linear-to-r border-from-rose-500 border-to-cyan-500');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('20, oklch');
      expect(css).toContain(BG_LAYER);
    });
  });

  describe('color transform + border gradient', () => {
    describe('darken with all border types', () => {
      test('darken + linear-r', async () => {
        const css = await compile('bg-blue-500 bg-darken-20 border-linear-to-r border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
        expect(css).toContain(BG_LAYER);
      });

      test('darken + linear-b', async () => {
        const css = await compile('bg-blue-500 bg-darken-20 border-linear-to-b border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
        expect(css).toContain(BG_LAYER);
      });

      test('darken + linear-45', async () => {
        const css = await compile('bg-blue-500 bg-darken-20 border-linear-45 border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
        expect(css).toContain(BG_LAYER);
      });

      test('darken + radial', async () => {
        const css = await compile('bg-blue-500 bg-darken-20 border-radial border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
        expect(css).toContain(BG_LAYER);
      });

      test('darken + conic', async () => {
        const css = await compile('bg-blue-500 bg-darken-20 border-conic-0 border-from-rose-500 border-via-yellow-400 border-to-cyan-500');
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
        expect(css).toContain(BG_LAYER);
      });

      test('darken + spin', async () => {
        const css = await compile('bg-blue-500 bg-darken-20 border-conic-0 border-spin border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
        expect(css).toContain(BG_LAYER);
      });
    });

    describe('lighten with all border types', () => {
      test('lighten + linear-r', async () => {
        const css = await compile('bg-blue-500 bg-lighten-20 border-linear-to-r border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--darken(var(--tw-jib--bg-color), calc(20 * -1))');
        expect(css).toContain(BG_LAYER);
      });

      test('lighten + linear-b', async () => {
        const css = await compile('bg-blue-500 bg-lighten-20 border-linear-to-b border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--darken(var(--tw-jib--bg-color), calc(20 * -1))');
        expect(css).toContain(BG_LAYER);
      });

      test('lighten + radial', async () => {
        const css = await compile('bg-blue-500 bg-lighten-20 border-radial border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--darken(var(--tw-jib--bg-color), calc(20 * -1))');
        expect(css).toContain(BG_LAYER);
      });

      test('lighten + conic', async () => {
        const css = await compile('bg-blue-500 bg-lighten-20 border-conic-0 border-from-rose-500 border-via-yellow-400 border-to-cyan-500');
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--darken(var(--tw-jib--bg-color), calc(20 * -1))');
        expect(css).toContain(BG_LAYER);
      });
    });

    describe('color space + border interpolation', () => {
      test('darken/oklch + border/srgb', async () => {
        const css = await compile('bg-blue-500 bg-darken-20/oklch border-linear/srgb border-linear-to-r border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('20, oklch');
        expect(css).toContain(BG_LAYER);
      });

      test('darken/hsl + border/oklch', async () => {
        const css = await compile('bg-blue-500 bg-darken-20/hsl border-linear/oklch border-linear-to-r border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('20, hsl');
        expect(css).toContain(BG_LAYER);
      });

      test('darken/srgb + border/longer', async () => {
        const css = await compile('bg-blue-500 bg-darken-20/srgb border-linear/longer border-linear-to-r border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('20, srgb');
        expect(css).toContain(BG_LAYER);
      });

      test('lighten/oklab + border/decreasing', async () => {
        const css = await compile('bg-blue-500 bg-lighten-20/oklab border-linear/decreasing border-linear-to-r border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('calc(20 * -1), oklab');
        expect(css).toContain(BG_LAYER);
      });
    });

    describe('base colors + border gradient', () => {
      test('red darken + border', async () => {
        const css = await compile('bg-red-500 bg-darken-20 border-linear-to-r border-from-amber-400 border-to-emerald-500');
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
        expect(css).toContain(BG_LAYER);
      });

      test('green darken + border', async () => {
        const css = await compile('bg-green-500 bg-darken-20 border-linear-to-r border-from-amber-400 border-to-emerald-500');
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
        expect(css).toContain(BG_LAYER);
      });

      test('purple lighten + border', async () => {
        const css = await compile('bg-purple-600 bg-lighten-20 border-linear-to-r border-from-amber-400 border-to-emerald-500');
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--darken(var(--tw-jib--bg-color), calc(20 * -1))');
        expect(css).toContain(BG_LAYER);
      });

      test('arbitrary darken + border', async () => {
        const css = await compile('bg-[#ff6b35] bg-darken-20 border-linear-to-r border-from-rose-500 border-to-cyan-500');
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
        expect(css).toContain(BG_LAYER);
      });
    });
  });

  describe('edge cases: extreme amounts', () => {
    test.each([0, 100, 1])(
      'bg-darken-%i',
      async (amount) => {
        const css = await compile(`bg-blue-500 bg-darken-${amount}`);
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--darken(var(--tw-jib--bg-color), ${amount})`);
      },
    );

    test.each([0, 100, 1])(
      'bg-lighten-%i',
      async (amount) => {
        const css = await compile(`bg-blue-500 bg-lighten-${amount}`);
        expect(css).toContain(SUPPORTS_FUNCTION);
        expect(css).toContain(`--darken(var(--tw-jib--bg-color), calc(${amount} * -1))`);
      },
    );
  });

  describe('edge cases: already dark / already light', () => {
    test('dark base + darken', async () => {
      const css = await compile('bg-slate-900 bg-darken-20');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
    });

    test('dark base + darken/hsl', async () => {
      const css = await compile('bg-slate-900 bg-darken-20/hsl');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('20, hsl');
    });

    test('light base + lighten', async () => {
      const css = await compile('bg-yellow-100 bg-lighten-20');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), calc(20 * -1))');
    });

    test('light base + lighten/rgb', async () => {
      const css = await compile('bg-yellow-100 bg-lighten-20/rgb');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('calc(20 * -1), rgb');
    });
  });

  describe('edge cases: no explicit background', () => {
    test('bg-darken-20 alone', async () => {
      const css = await compile('bg-darken-20');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
    });

    test('bg-lighten-20 alone', async () => {
      const css = await compile('bg-lighten-20');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), calc(20 * -1))');
    });

    test('bg-darken-20/oklch alone', async () => {
      const css = await compile('bg-darken-20/oklch');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('20, oklch');
    });
  });

  describe('edge cases: state variants', () => {
    test('hover:bg-darken-20', async () => {
      const css = await compile('bg-blue-500 hover:bg-darken-20');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
      expect(css).toContain('&:hover');
    });

    test('dark:bg-darken-30', async () => {
      const css = await compile('bg-blue-500 bg-darken-10 dark:bg-darken-30');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), 30)');
      expect(css).toContain('prefers-color-scheme: dark');
    });
  });

  describe('triple combo: opacity + transform + border gradient', () => {
    test('triple-darken', async () => {
      const css = await compile('bg-blue-500/75 bg-darken-20 border-linear-to-r border-from-rose-500 border-to-cyan-500');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), 20)');
      expect(css).toContain(BG_LAYER);
    });

    test('triple-lighten', async () => {
      const css = await compile('bg-indigo-700/50 bg-lighten-25 border-linear-to-r border-from-amber-400 border-to-emerald-500');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('--darken(var(--tw-jib--bg-color), calc(25 * -1))');
      expect(css).toContain(BG_LAYER);
    });

    test('triple-darken-space', async () => {
      const css = await compile('bg-emerald-500/80 bg-darken-15/hsl border-linear/oklch border-linear-to-r border-from-rose-500 border-to-cyan-500');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('15, hsl');
      expect(css).toContain(BG_LAYER);
    });

    test('triple-lighten-space', async () => {
      const css = await compile('bg-red-600/60 bg-lighten-20/oklab border-conic-0 border-from-amber-400 border-via-rose-500 border-to-emerald-500');
      expect(css).toContain(SUPPORTS_FUNCTION);
      expect(css).toContain('calc(20 * -1), oklab');
      expect(css).toContain(BG_LAYER);
    });
  });
});
