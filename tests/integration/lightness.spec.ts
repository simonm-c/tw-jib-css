import { test, expect, type Page } from '@playwright/test';
import { extractStyles, gotoExample, supportsQuery, expectBorderGradient } from './helpers';

/**
 * The engine capability that decides which path is live. The experimental
 * @function override needs both halves: `if(style(...))` to branch, and the
 * per-space function itself to exist.
 */
const SUPPORTS_QUERY =
  '(background: if(style(--value): red)) and (background: --tw-jib--oklch-lightness(red, 20))';

async function detectFunctionSupport(page: Page): Promise<boolean> {
  return supportsQuery(page, SUPPORTS_QUERY);
}

async function gotoPage(page: Page) {
  await gotoExample(page, PAGE, 'darken-0');
}

/** Read one fixture's painted colour, for the pairwise comparisons below. */
async function getElementColor(page: Page, selector: string) {
  const styles = await extractStyles(page, [selector]);
  return { ...styles[selector].rgb, luminance: styles[selector].luminance };
}

const PAGE = 'examples/lightness';

/**
 * Expected computed color-space prefix per modifier.
 * Browsers resolve relative color syntax and return the result in a
 * canonical format – e.g. hsl/hwb/rgb all resolve to color(srgb …).
 */
const EXPECTED_SPACE_PREFIX: Record<string, string> = {
  oklch: 'oklch(',
  lch: 'lch(',
  lab: 'lab(',
  oklab: 'oklab(',
  hsl: 'color(srgb',
  hwb: 'color(srgb',
  rgb: 'color(srgb',
  srgb: 'color(srgb',
  'srgb-linear': 'color(srgb-linear',
  'display-p3': 'color(display-p3',
  'a98-rgb': 'color(a98-rgb',
  'prophoto-rgb': 'color(prophoto-rgb',
  rec2020: 'color(rec2020',
  xyz: 'color(xyz-d65',
  'xyz-d50': 'color(xyz-d50',
  'xyz-d65': 'color(xyz-d65',
  'color-mix': 'oklab(',
};

const ALL_SPACES = [
  'oklch',
  'lch',
  'lab',
  'oklab',
  'hsl',
  'hwb',
  'rgb',
  'srgb',
  'srgb-linear',
  'display-p3',
  'a98-rgb',
  'prophoto-rgb',
  'rec2020',
  'xyz',
  'xyz-d50',
  'xyz-d65',
  'color-mix',
];

/*
 * Why this file has no @function-gated lane.
 *
 * The main entry's @function blocks compile behind a gate that cannot hold, so
 * this page renders through the stable relative-colour path on EVERY engine –
 * including one that implements @function. Skipping on CSS.supports() therefore
 * measured the engine rather than the page, and cost Blink the whole extended
 * set for nothing. This describe pins the premise the rest of the file rests on,
 * and is the render-time counterpart of tests/css/entry-points.test.ts.
 */
test.describe('the served CSS never runs @function', () => {
  test('no live @function gate reaches the page, whatever the engine supports', async ({
    page,
  }) => {
    // Arrange
    await gotoPage(page);
    const engineSupportsFunction = await detectFunctionSupport(page);

    // Act
    const gates = await page.evaluate(() => {
      const conditions: string[] = [];
      const walk = (rules: CSSRuleList) => {
        for (const rule of Array.from(rules)) {
          const nested = rule as CSSRule & { conditionText?: string; cssRules?: CSSRuleList };
          if (nested.conditionText !== undefined && rule.cssText.startsWith('@supports')) {
            conditions.push(nested.conditionText);
          }
          // Tailwind nests every rule inside @layer, so a flat scan finds nothing.
          if (nested.cssRules) walk(nested.cssRules);
        }
      };
      for (const sheet of Array.from(document.styleSheets)) {
        try {
          walk(sheet.cssRules);
        } catch {
          /* a cross-origin sheet is not one of ours */
        }
      }
      const unique = [...new Set(conditions)];
      return {
        namingATwJibFunction: unique.filter((condition) => condition.includes('--tw-jib--')),
        lightnessGates: unique
          .filter((condition) => condition.includes('lightness'))
          .map((condition) => ({ condition, holds: CSS.supports(condition) })),
      };
    });

    // Assert
    expect(
      gates.namingATwJibFunction,
      'the main entry shipped a gate naming a @function; consumers who opted into nothing would run it',
    ).toEqual([]);
    expect(
      gates.lightnessGates.length,
      'expected the inert lightness gate to be emitted',
    ).toBeGreaterThan(0);
    for (const { condition, holds } of gates.lightnessGates) {
      expect(
        holds,
        `${condition} is satisfiable (engine @function support: ${engineSupportsFunction}) – the stable entry may now run @function`,
      ).toBe(false);
    }
  });
});

test.describe('stable path (all browsers)', () => {
  test.describe('darken – default amounts', () => {
    test('monotonically decreasing luminance from darken-0 to darken-100', async ({ page }) => {
      // Arrange
      await gotoPage(page);
      const ids = [
        'darken-0',
        'darken-5',
        'darken-10',
        'darken-20',
        'darken-50',
        'darken-75',
        'darken-100',
      ];
      // Act
      const styles = await extractStyles(page, ids);

      // Assert
      for (const id of ids) {
        // Default color space is oklch
        expect(styles[id].backgroundColor, `${id} should use oklch`).toContain('oklch(');
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }

      const baseLum = styles['darken-0'].luminance;
      expect(styles['darken-20'].luminance).toBeLessThan(baseLum + 0.01);
      expect(styles['darken-50'].luminance).toBeLessThan(styles['darken-20'].luminance + 0.01);
      expect(styles['darken-100'].luminance).toBeLessThan(0.05);
    });
  });

  test.describe('lighten – default amounts', () => {
    test('monotonically increasing luminance from lighten-0 to lighten-100', async ({ page }) => {
      // Arrange
      await gotoPage(page);
      const ids = [
        'lighten-0',
        'lighten-5',
        'lighten-10',
        'lighten-20',
        'lighten-50',
        'lighten-75',
        'lighten-100',
      ];
      // Act
      const styles = await extractStyles(page, ids);

      // Assert
      for (const id of ids) {
        expect(styles[id].backgroundColor, `${id} should use oklch`).toContain('oklch(');
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }

      const baseLum = styles['lighten-0'].luminance;
      expect(styles['lighten-20'].luminance).toBeGreaterThan(baseLum - 0.01);
      expect(styles['lighten-50'].luminance).toBeGreaterThan(styles['lighten-20'].luminance - 0.01);
      expect(styles['lighten-100'].luminance).toBeGreaterThan(0.9);
    });
  });

  test.describe('darken – all 17 color spaces', () => {
    test('each color space returns the correct computed format and is darker than base', async ({
      page,
    }) => {
      // Arrange
      await gotoPage(page);
      const darkenIds = ALL_SPACES.map((sp) => `darken-${sp}`);
      // Act
      const styles = await extractStyles(page, ['darken-0', ...darkenIds]);
      const baseLum = styles['darken-0'].luminance;

      // Assert
      for (const sp of ALL_SPACES) {
        const id = `darken-${sp}`;
        const prefix = EXPECTED_SPACE_PREFIX[sp];
        expect(styles[id].backgroundColor, `${id} should be in ${sp} color space`).toContain(
          prefix,
        );
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
        expect(styles[id].luminance, `${id} should be darker than base`).toBeLessThan(
          baseLum + 0.02,
        );
      }
    });
  });

  test.describe('lighten – all 17 color spaces', () => {
    test('each color space returns the correct computed format and is lighter than base', async ({
      page,
    }) => {
      // Arrange
      await gotoPage(page);
      const lightenIds = ALL_SPACES.map((sp) => `lighten-${sp}`);
      // Act
      const styles = await extractStyles(page, ['lighten-0', ...lightenIds]);
      const baseLum = styles['lighten-0'].luminance;

      // Assert
      for (const sp of ALL_SPACES) {
        const id = `lighten-${sp}`;
        const prefix = EXPECTED_SPACE_PREFIX[sp];
        expect(styles[id].backgroundColor, `${id} should be in ${sp} color space`).toContain(
          prefix,
        );
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
        expect(styles[id].luminance, `${id} should be lighter than base`).toBeGreaterThan(
          baseLum - 0.02,
        );
      }
    });
  });

  test.describe('base color range – darken-20', () => {
    test('20 base colors produce non-transparent darkened backgrounds', async ({ page }) => {
      // Arrange
      await gotoPage(page);
      const ids = [
        'base-red-500',
        'base-orange-500',
        'base-amber-500',
        'base-yellow-400',
        'base-lime-500',
        'base-green-500',
        'base-emerald-500',
        'base-teal-500',
        'base-cyan-500',
        'base-sky-500',
        'base-blue-500',
        'base-indigo-500',
        'base-violet-500',
        'base-purple-500',
        'base-fuchsia-500',
        'base-pink-500',
        'base-rose-500',
        'base-slate-400',
        'base-gray-500',
        'base-white',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });
  });

  test.describe('base color range – lighten-20', () => {
    test('20 base colors produce non-transparent lightened backgrounds', async ({ page }) => {
      // Arrange
      await gotoPage(page);
      const ids = [
        'base-lighten-red-500',
        'base-lighten-orange-500',
        'base-lighten-amber-500',
        'base-lighten-yellow-400',
        'base-lighten-lime-500',
        'base-lighten-green-500',
        'base-lighten-emerald-500',
        'base-lighten-teal-500',
        'base-lighten-cyan-500',
        'base-lighten-sky-500',
        'base-lighten-blue-500',
        'base-lighten-indigo-500',
        'base-lighten-violet-500',
        'base-lighten-purple-500',
        'base-lighten-fuchsia-500',
        'base-lighten-pink-500',
        'base-lighten-rose-500',
        'base-lighten-slate-700',
        'base-lighten-gray-500',
        'base-lighten-black',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });
  });

  test.describe('special base colors', () => {
    test('arbitrary and CSS-variable base colors produce non-transparent backgrounds', async ({
      page,
    }) => {
      // Arrange
      await gotoPage(page);
      const ids = [
        'base-arbitrary-hex',
        'base-arbitrary-oklch',
        'base-arbitrary-rgb',
        'base-css-var',
        'base-arbitrary-hex-lighten',
        'base-arbitrary-oklch-lighten',
        'base-css-var-lighten',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });
  });

  test.describe('base colors × color spaces', () => {
    test('red-500 darken across 5 spaces', async ({ page }) => {
      // Arrange
      await gotoPage(page);
      const ids = ['red-oklch', 'red-hsl', 'red-rgb', 'red-srgb', 'red-display-p3'];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });

    test('emerald-400 darken across 5 spaces', async ({ page }) => {
      // Arrange
      await gotoPage(page);
      const ids = [
        'emerald-oklch',
        'emerald-hsl',
        'emerald-rgb',
        'emerald-srgb',
        'emerald-display-p3',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });

    test('purple-600 lighten across 5 spaces', async ({ page }) => {
      // Arrange
      await gotoPage(page);
      const ids = ['purple-oklch', 'purple-hsl', 'purple-rgb', 'purple-srgb', 'purple-display-p3'];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });
  });

  test.describe('opacity + darken', () => {
    test('opacity preserved with darken across amounts', async ({ page }) => {
      // Arrange
      await gotoPage(page);
      const ids = [
        'opacity-25-darken-10',
        'opacity-25-darken-20',
        'opacity-25-darken-50',
        'opacity-50-darken-10',
        'opacity-50-darken-20',
        'opacity-50-darken-50',
        'opacity-75-darken-10',
        'opacity-75-darken-20',
        'opacity-75-darken-50',
        'opacity-0-darken',
        'opacity-100-darken',
        'opacity-5-darken',
      ];
      // Act
      const styles = await extractStyles(page, ids);

      // Elements with opacity 0 should have alpha near 0
      // Assert
      expect(styles['opacity-0-darken'].alpha).toBeLessThan(0.05);
      // Elements with opacity 100 should have alpha 1
      expect(styles['opacity-100-darken'].alpha).toBeCloseTo(1, 1);
      // Elements with opacity 5 should have very low alpha
      expect(styles['opacity-5-darken'].alpha).toBeLessThan(0.15);

      // Opacity is correctly applied – check approximate alpha values
      expect(styles['opacity-25-darken-10'].alpha).toBeCloseTo(0.25, 1);
      expect(styles['opacity-50-darken-20'].alpha).toBeCloseTo(0.5, 1);
      expect(styles['opacity-75-darken-50'].alpha).toBeCloseTo(0.75, 1);
    });
  });

  test.describe('opacity + lighten', () => {
    test('opacity preserved with lighten across amounts', async ({ page }) => {
      // Arrange
      await gotoPage(page);
      const ids = [
        'opacity-25-lighten-10',
        'opacity-25-lighten-20',
        'opacity-25-lighten-50',
        'opacity-50-lighten-10',
        'opacity-50-lighten-20',
        'opacity-50-lighten-50',
        'opacity-75-lighten-10',
        'opacity-75-lighten-20',
        'opacity-75-lighten-50',
        'opacity-0-lighten',
        'opacity-100-lighten',
        'opacity-5-lighten',
      ];
      // Act
      const styles = await extractStyles(page, ids);

      // Assert
      expect(styles['opacity-0-lighten'].alpha).toBeLessThan(0.05);
      expect(styles['opacity-100-lighten'].alpha).toBeCloseTo(1, 1);
      expect(styles['opacity-5-lighten'].alpha).toBeLessThan(0.15);

      expect(styles['opacity-25-lighten-10'].alpha).toBeCloseTo(0.25, 1);
      expect(styles['opacity-50-lighten-20'].alpha).toBeCloseTo(0.5, 1);
      expect(styles['opacity-75-lighten-50'].alpha).toBeCloseTo(0.75, 1);
    });
  });

  test.describe('opacity + color space modifiers', () => {
    test('darken with explicit space preserves opacity', async ({ page }) => {
      // Arrange
      await gotoPage(page);
      const ids = [
        'opacity-50-darken-oklch',
        'opacity-50-darken-hsl',
        'opacity-50-darken-rgb',
        'opacity-50-darken-srgb',
        'opacity-50-darken-lab',
        'opacity-50-darken-display-p3',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expect(styles[id].alpha, `${id} should preserve ~50% opacity`).toBeCloseTo(0.5, 1);
      }
      const colorMix = await extractStyles(page, ['opacity-50-darken-color-mix']);
      expect(
        colorMix['opacity-50-darken-color-mix'].alpha,
        'color-mix should preserve ~50% opacity',
      ).toBeCloseTo(0.5, 1);
    });

    test('lighten with explicit space preserves opacity', async ({ page }) => {
      // Arrange
      await gotoPage(page);
      const ids = [
        'opacity-50-lighten-oklch',
        'opacity-50-lighten-hsl',
        'opacity-50-lighten-rgb',
        'opacity-50-lighten-srgb',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expect(styles[id].alpha, `${id} should preserve ~50% opacity`).toBeCloseTo(0.5, 1);
      }
      const colorMix = await extractStyles(page, ['opacity-50-lighten-color-mix']);
      expect(colorMix['opacity-50-lighten-color-mix'].backgroundColor).toBeDefined();
    });
  });

  test.describe('opacity + different base colors', () => {
    test('various base colors with opacity produce non-transparent backgrounds', async ({
      page,
    }) => {
      // Arrange
      await gotoPage(page);
      const ids = [
        'opacity-red-darken',
        'opacity-green-darken',
        'opacity-purple-darken',
        'opacity-amber-darken',
        'opacity-red-lighten',
        'opacity-green-lighten',
        'opacity-purple-lighten',
        'opacity-amber-lighten',
        'opacity-white-darken',
        'opacity-black-lighten',
        'opacity-arbitrary-darken',
        'opacity-arbitrary-lighten',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });
  });

  test.describe('opacity + darken/lighten + border gradient', () => {
    test('border gradient renders with opacity and color transform', async ({ page }) => {
      // Arrange
      await gotoPage(page);
      const ids = [
        'opacity-darken-border-linear',
        'opacity-lighten-border-linear',
        'opacity-darken-space-border',
        'opacity-lighten-space-border',
        'opacity-darken-border-radial',
        'opacity-lighten-border-conic',
        'opacity-darken-border-spin',
        'opacity-darken-border-interp',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expectBorderGradient(styles, [id]);
      }
    });
  });

  test.describe('color transform + border gradient', () => {
    test('darken with all border types renders gradient', async ({ page }) => {
      // Arrange
      await gotoPage(page);
      const ids = [
        'darken-border-linear-r',
        'darken-border-linear-b',
        'darken-border-linear-45',
        'darken-border-radial',
        'darken-border-conic',
        'darken-border-spin',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expectBorderGradient(styles, [id]);
      }
    });

    test('lighten with all border types renders gradient', async ({ page }) => {
      // Arrange
      await gotoPage(page);
      const ids = [
        'lighten-border-linear-r',
        'lighten-border-linear-b',
        'lighten-border-radial',
        'lighten-border-conic',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expectBorderGradient(styles, [id]);
      }
    });

    test('color space + border interpolation combos render gradient', async ({ page }) => {
      // Arrange
      await gotoPage(page);
      const ids = [
        'darken-oklch-border-srgb',
        'darken-hsl-border-oklch',
        'darken-srgb-border-longer',
        'lighten-oklab-border-decreasing',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expectBorderGradient(styles, [id]);
      }
    });

    test('base colors + border gradient render gradient', async ({ page }) => {
      // Arrange
      await gotoPage(page);
      const ids = [
        'red-darken-border',
        'green-darken-border',
        'purple-lighten-border',
        'arbitrary-darken-border',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expectBorderGradient(styles, [id]);
      }
    });
  });

  test.describe('edge cases: extreme amounts', () => {
    test('darken-0 and lighten-0 approximate base; darken-100 near black; lighten-100 near white', async ({
      page,
    }) => {
      // Arrange
      await gotoPage(page);
      const ids = [
        'edge-darken-0',
        'edge-darken-100',
        'edge-lighten-0',
        'edge-lighten-100',
        'edge-darken-1',
        'edge-lighten-1',
      ];
      // Act
      const styles = await extractStyles(page, ids);

      // Assert
      for (const id of ids) {
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }

      // darken-100 should be near black
      expect(styles['edge-darken-100'].luminance).toBeLessThan(0.05);
      // lighten-100 should be near white
      expect(styles['edge-lighten-100'].luminance).toBeGreaterThan(0.9);

      // darken-0 and lighten-0 should be close to each other (both are base blue-500)
      expect(
        Math.abs(styles['edge-darken-0'].luminance - styles['edge-lighten-0'].luminance),
      ).toBeLessThan(0.02);

      // darken-1 and lighten-1 should be very close to base
      expect(
        Math.abs(styles['edge-darken-1'].luminance - styles['edge-darken-0'].luminance),
      ).toBeLessThan(0.03);
      expect(
        Math.abs(styles['edge-lighten-1'].luminance - styles['edge-lighten-0'].luminance),
      ).toBeLessThan(0.03);
    });
  });

  test.describe('edge cases: already dark / already light', () => {
    test('darkening already-dark and lightening already-light produce non-transparent colors', async ({
      page,
    }) => {
      // Arrange
      await gotoPage(page);
      const ids = [
        'edge-dark-darken',
        'edge-dark-darken-hsl',
        'edge-light-lighten',
        'edge-light-lighten-rgb',
      ];
      // Act
      const styles = await extractStyles(page, ids);

      // Assert
      for (const id of ids) {
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }

      // Darkened slate-900 should be very dark
      expect(styles['edge-dark-darken'].luminance).toBeLessThan(0.1);
      // Lightened yellow-100 should be very light
      expect(styles['edge-light-lighten'].luminance).toBeGreaterThan(0.85);
    });
  });

  test.describe('edge cases: no explicit background', () => {
    test('darken/lighten without bg-* class resolves to a background', async ({ page }) => {
      // Arrange
      await gotoPage(page);
      const ids = ['edge-no-bg-darken', 'edge-no-bg-lighten', 'edge-no-bg-darken-space'];
      // Act
      const styles = await extractStyles(page, ids);

      // Assert
      for (const id of ids) {
        // Should resolve to something – the key is no crash
        expect(styles[id].backgroundColor).toBeDefined();
      }
    });
  });

  test.describe('edge cases: hover state', () => {
    test('hover:bg-darken-20 darkens on hover', async ({ page }) => {
      // Arrange
      await gotoPage(page);
      // Act
      const before = await getElementColor(page, 'edge-hover-darken');

      await page.locator('[data-test="edge-hover-darken"]').hover();

      const after = await getElementColor(page, 'edge-hover-darken');
      // Assert
      expect(after.luminance).toBeLessThan(before.luminance + 0.01);
    });
  });

  test.describe('edge cases: dark mode', () => {
    test('dark:bg-darken-30 applies darker value in dark mode', async ({ page }) => {
      // Arrange
      // Light mode
      await page.emulateMedia({ colorScheme: 'light' });
      await gotoPage(page);
      // Act
      const light = await getElementColor(page, 'edge-dark-mode');

      // Dark mode
      await page.emulateMedia({ colorScheme: 'dark' });
      await gotoPage(page);
      const dark = await getElementColor(page, 'edge-dark-mode');

      // dark:bg-darken-30 should be darker than light mode's bg-darken-10
      // Assert
      expect(dark.luminance).toBeLessThan(light.luminance + 0.01);
    });
  });

  test.describe('triple combo: opacity + transform + border gradient', () => {
    test('all triple combos render gradient with non-transparent background', async ({ page }) => {
      // Arrange
      await gotoPage(page);
      const ids = [
        'triple-darken',
        'triple-lighten',
        'triple-darken-space',
        'triple-lighten-space',
      ];
      // Act
      const styles = await extractStyles(page, ids);

      // Assert
      for (const id of ids) {
        expectBorderGradient(styles, [id]);
      }
    });
  });
});

test.describe('stable path – extended coverage', () => {
  test.beforeEach(async ({ page }) => {
    await gotoPage(page);
  });

  test.describe('color-mix space renders via stable path', () => {
    test('darken-20/color-mix produces a real darkened color', async ({ page }) => {
      // Arrange
      // Act
      const styles = await extractStyles(page, [
        'darken-0',
        'darken-color-mix',
        'lighten-color-mix',
      ]);
      const baseLum = styles['darken-0'].luminance;
      // Assert
      expect(
        styles['darken-color-mix'].alpha,
        'color-mix darken should not be transparent',
      ).toBeGreaterThan(0.5);
      expect(
        styles['darken-color-mix'].luminance,
        'color-mix darken should be darker than base',
      ).toBeLessThan(baseLum + 0.02);
      expect(
        styles['lighten-color-mix'].alpha,
        'color-mix lighten should not be transparent',
      ).toBeGreaterThan(0.5);
      expect(
        styles['lighten-color-mix'].luminance,
        'color-mix lighten should be lighter than base',
      ).toBeGreaterThan(baseLum - 0.02);
    });

    test('opacity-50 + darken/color-mix preserves opacity', async ({ page }) => {
      // Arrange
      // Act
      const styles = await extractStyles(page, [
        'opacity-50-darken-color-mix',
        'opacity-50-lighten-color-mix',
      ]);
      // Assert
      expect(
        styles['opacity-50-darken-color-mix'].alpha,
        'color-mix should preserve ~50% opacity',
      ).toBeCloseTo(0.5, 1);
      expect(
        styles['opacity-50-lighten-color-mix'].alpha,
        'color-mix should preserve ~50% opacity',
      ).toBeCloseTo(0.5, 1);
    });
  });

  test.describe('all 17 spaces render via relative color syntax', () => {
    test('darken-20 across all spaces returns correct computed format', async ({ page }) => {
      // Arrange
      const darkenIds = ALL_SPACES.map((sp) => `darken-${sp}`);
      // Act
      const styles = await extractStyles(page, ['darken-0', ...darkenIds]);
      const baseLum = styles['darken-0'].luminance;

      // Assert
      for (const sp of ALL_SPACES) {
        const id = `darken-${sp}`;
        const prefix = EXPECTED_SPACE_PREFIX[sp];
        expect(styles[id].backgroundColor, `${id} should be in ${sp} color space`).toContain(
          prefix,
        );
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
        expect(styles[id].luminance, `${id} should be darker than base`).toBeLessThan(
          baseLum + 0.02,
        );
      }
    });

    test('lighten-20 across all spaces returns correct computed format', async ({ page }) => {
      // Arrange
      const lightenIds = ALL_SPACES.map((sp) => `lighten-${sp}`);
      // Act
      const styles = await extractStyles(page, ['lighten-0', ...lightenIds]);
      const baseLum = styles['lighten-0'].luminance;

      // Assert
      for (const sp of ALL_SPACES) {
        const id = `lighten-${sp}`;
        const prefix = EXPECTED_SPACE_PREFIX[sp];
        expect(styles[id].backgroundColor, `${id} should be in ${sp} color space`).toContain(
          prefix,
        );
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
        expect(styles[id].luminance, `${id} should be lighter than base`).toBeGreaterThan(
          baseLum - 0.02,
        );
      }
    });
  });

  test.describe('default oklch amounts via relative color syntax', () => {
    test('darken monotonically decreases luminance', async ({ page }) => {
      // Arrange
      const ids = [
        'darken-0',
        'darken-5',
        'darken-10',
        'darken-20',
        'darken-50',
        'darken-75',
        'darken-100',
      ];
      // Act
      const styles = await extractStyles(page, ids);

      // Assert
      for (const id of ids) {
        expect(styles[id].backgroundColor, `${id} should use oklch`).toContain('oklch(');
        expect(styles[id].alpha, `${id}`).toBeGreaterThan(0.5);
      }

      const baseLum = styles['darken-0'].luminance;
      expect(styles['darken-20'].luminance).toBeLessThan(baseLum + 0.01);
      expect(styles['darken-50'].luminance).toBeLessThan(styles['darken-20'].luminance + 0.01);
      expect(styles['darken-100'].luminance).toBeLessThan(0.05);
    });

    test('lighten monotonically increases luminance', async ({ page }) => {
      // Arrange
      const ids = [
        'lighten-0',
        'lighten-5',
        'lighten-10',
        'lighten-20',
        'lighten-50',
        'lighten-75',
        'lighten-100',
      ];
      // Act
      const styles = await extractStyles(page, ids);

      // Assert
      for (const id of ids) {
        expect(styles[id].backgroundColor, `${id} should use oklch`).toContain('oklch(');
        expect(styles[id].alpha, `${id}`).toBeGreaterThan(0.5);
      }

      const baseLum = styles['lighten-0'].luminance;
      expect(styles['lighten-20'].luminance).toBeGreaterThan(baseLum - 0.01);
      expect(styles['lighten-50'].luminance).toBeGreaterThan(styles['lighten-20'].luminance - 0.01);
      expect(styles['lighten-100'].luminance).toBeGreaterThan(0.9);
    });
  });

  test.describe('base colors and special values via stable path', () => {
    test('arbitrary and CSS-variable base colors render via stable path', async ({ page }) => {
      // Arrange
      const ids = [
        'base-arbitrary-hex',
        'base-arbitrary-oklch',
        'base-arbitrary-rgb',
        'base-css-var',
        'base-arbitrary-hex-lighten',
        'base-arbitrary-oklch-lighten',
        'base-css-var-lighten',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });

    test('base colors × color spaces render via stable path', async ({ page }) => {
      // Arrange
      const ids = [
        'red-oklch',
        'red-hsl',
        'red-rgb',
        'red-srgb',
        'red-display-p3',
        'emerald-oklch',
        'emerald-hsl',
        'emerald-rgb',
        'emerald-srgb',
        'emerald-display-p3',
        'purple-oklch',
        'purple-hsl',
        'purple-rgb',
        'purple-srgb',
        'purple-display-p3',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });
  });

  test.describe('opacity via stable path', () => {
    test('opacity preserved with darken via relative color syntax', async ({ page }) => {
      // Arrange
      // Act
      const styles = await extractStyles(page, [
        'opacity-25-darken-10',
        'opacity-50-darken-20',
        'opacity-75-darken-50',
        'opacity-0-darken',
        'opacity-100-darken',
      ]);
      // Assert
      expect(styles['opacity-0-darken'].alpha).toBeLessThan(0.05);
      expect(styles['opacity-100-darken'].alpha).toBeCloseTo(1, 1);
      expect(styles['opacity-25-darken-10'].alpha).toBeCloseTo(0.25, 1);
      expect(styles['opacity-50-darken-20'].alpha).toBeCloseTo(0.5, 1);
      expect(styles['opacity-75-darken-50'].alpha).toBeCloseTo(0.75, 1);
    });

    test('opacity preserved with lighten via relative color syntax', async ({ page }) => {
      // Arrange
      // Act
      const styles = await extractStyles(page, [
        'opacity-25-lighten-10',
        'opacity-50-lighten-20',
        'opacity-75-lighten-50',
        'opacity-0-lighten',
        'opacity-100-lighten',
      ]);
      // Assert
      expect(styles['opacity-0-lighten'].alpha).toBeLessThan(0.05);
      expect(styles['opacity-100-lighten'].alpha).toBeCloseTo(1, 1);
      expect(styles['opacity-25-lighten-10'].alpha).toBeCloseTo(0.25, 1);
      expect(styles['opacity-50-lighten-20'].alpha).toBeCloseTo(0.5, 1);
      expect(styles['opacity-75-lighten-50'].alpha).toBeCloseTo(0.75, 1);
    });

    test('opacity + explicit color space preserves opacity', async ({ page }) => {
      // Arrange
      const ids = [
        'opacity-50-darken-oklch',
        'opacity-50-darken-hsl',
        'opacity-50-darken-rgb',
        'opacity-50-darken-srgb',
        'opacity-50-darken-lab',
        'opacity-50-darken-display-p3',
        'opacity-50-lighten-oklch',
        'opacity-50-lighten-hsl',
        'opacity-50-lighten-rgb',
        'opacity-50-lighten-srgb',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expect(styles[id].alpha, `${id} should preserve ~50% opacity`).toBeCloseTo(0.5, 1);
      }
    });

    test('different base colors with opacity render via stable path', async ({ page }) => {
      // Arrange
      const ids = [
        'opacity-red-darken',
        'opacity-green-darken',
        'opacity-purple-darken',
        'opacity-amber-darken',
        'opacity-red-lighten',
        'opacity-green-lighten',
        'opacity-purple-lighten',
        'opacity-amber-lighten',
        'opacity-white-darken',
        'opacity-black-lighten',
        'opacity-arbitrary-darken',
        'opacity-arbitrary-lighten',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.1);
      }
    });
  });

  test.describe('border gradient combos via stable path', () => {
    test('opacity + transform + border gradient renders gradient', async ({ page }) => {
      // Arrange
      const ids = [
        'opacity-darken-border-linear',
        'opacity-lighten-border-linear',
        'opacity-darken-space-border',
        'opacity-lighten-space-border',
        'opacity-darken-border-radial',
        'opacity-lighten-border-conic',
        'opacity-darken-border-spin',
        'opacity-darken-border-interp',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expectBorderGradient(styles, [id]);
      }
    });

    test('darken/lighten + all border types renders gradient', async ({ page }) => {
      // Arrange
      const ids = [
        'darken-border-linear-r',
        'darken-border-linear-b',
        'darken-border-linear-45',
        'darken-border-radial',
        'darken-border-conic',
        'darken-border-spin',
        'lighten-border-linear-r',
        'lighten-border-linear-b',
        'lighten-border-radial',
        'lighten-border-conic',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expectBorderGradient(styles, [id]);
      }
    });

    test('color space + border interpolation renders gradient', async ({ page }) => {
      // Arrange
      const ids = [
        'darken-oklch-border-srgb',
        'darken-hsl-border-oklch',
        'darken-srgb-border-longer',
        'lighten-oklab-border-decreasing',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expectBorderGradient(styles, [id]);
      }
    });

    test('base colors + border gradient renders gradient', async ({ page }) => {
      // Arrange
      const ids = [
        'red-darken-border',
        'green-darken-border',
        'purple-lighten-border',
        'arbitrary-darken-border',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expectBorderGradient(styles, [id]);
      }
    });
  });

  test.describe('edge cases via stable path', () => {
    test('extreme amounts render correctly', async ({ page }) => {
      // Arrange
      const ids = [
        'edge-darken-0',
        'edge-darken-100',
        'edge-lighten-0',
        'edge-lighten-100',
        'edge-darken-1',
        'edge-lighten-1',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
      expect(styles['edge-darken-100'].luminance).toBeLessThan(0.05);
      expect(styles['edge-lighten-100'].luminance).toBeGreaterThan(0.9);
      expect(
        Math.abs(styles['edge-darken-0'].luminance - styles['edge-lighten-0'].luminance),
      ).toBeLessThan(0.02);
    });

    test('already dark/light bases render correctly', async ({ page }) => {
      // Arrange
      const ids = [
        'edge-dark-darken',
        'edge-dark-darken-hsl',
        'edge-light-lighten',
        'edge-light-lighten-rgb',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
      expect(styles['edge-dark-darken'].luminance).toBeLessThan(0.1);
      expect(styles['edge-light-lighten'].luminance).toBeGreaterThan(0.85);
    });
  });

  test.describe('triple combo via stable path', () => {
    test('opacity + transform + border gradient renders gradient', async ({ page }) => {
      // Arrange
      const ids = [
        'triple-darken',
        'triple-lighten',
        'triple-darken-space',
        'triple-lighten-space',
      ];
      // Act
      const styles = await extractStyles(page, ids);
      // Assert
      for (const id of ids) {
        expectBorderGradient(styles, [id]);
      }
    });
  });

  // ---------------------------------------------------------------------------
  // Comprehensive matrix spot-checks
  // ---------------------------------------------------------------------------

  test.describe('comprehensive matrix', () => {
    test.beforeEach(async ({ page }) => {
      await gotoPage(page);
    });

    test('light base (red-200) darken scale is monotonically darker', async ({ page }) => {
      // Arrange
      const amounts = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
      const ids = amounts.map((a) => `matrix-red-200-darken-${a}-oklch`);
      // Act
      const styles = await extractStyles(page, ids);

      // Assert
      for (let i = 1; i < ids.length; i++) {
        expect(
          styles[ids[i]].luminance,
          `${ids[i]} should be darker than ${ids[i - 1]}`,
        ).toBeLessThanOrEqual(styles[ids[i - 1]].luminance + 0.02);
      }
    });

    test('dark base (blue-800) lighten scale is monotonically lighter', async ({ page }) => {
      // Arrange
      const amounts = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
      const ids = amounts.map((a) => `matrix-blue-800-lighten-${a}-oklch`);
      // Act
      const styles = await extractStyles(page, ids);

      // Assert
      for (let i = 1; i < ids.length; i++) {
        expect(
          styles[ids[i]].luminance,
          `${ids[i]} should be lighter than ${ids[i - 1]}`,
        ).toBeGreaterThanOrEqual(styles[ids[i - 1]].luminance - 0.02);
      }
    });

    test('mid base (green-500) works across all 17 colour spaces', async ({ page }) => {
      // Arrange
      const ids = ALL_SPACES.map((sp) => `matrix-green-500-darken-50-${sp}`);
      // Act
      const styles = await extractStyles(page, ids);

      // Assert
      for (const id of ids) {
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });

    test('all-colors oklch section renders non-transparent for sample colors', async ({ page }) => {
      // Arrange
      const sampleIds = [
        'matrix-orange-500-darken-30-oklch',
        'matrix-emerald-200-lighten-50-oklch',
        'matrix-violet-800-lighten-40-oklch',
        'matrix-zinc-500-darken-20-oklch',
        'matrix-stone-200-darken-60-oklch',
      ];
      // Act
      const styles = await extractStyles(page, sampleIds);

      // Assert
      for (const id of sampleIds) {
        expect(styles[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });

    test('light base darkened heavily is darker than mid base', async ({ page }) => {
      // Arrange
      const ids = ['matrix-amber-200-darken-80-oklch', 'matrix-amber-500-darken-80-oklch'];
      // Act
      const styles = await extractStyles(page, ids);
      // amber-200 darkened by 80 should still be lighter than amber-500 darkened by 80
      // (it started lighter)
      // Assert
      expect(styles[ids[0]].luminance).toBeGreaterThanOrEqual(styles[ids[1]].luminance - 0.05);
    });

    test('dark base lightened heavily is lighter than mid base', async ({ page }) => {
      // Arrange
      const ids = ['matrix-slate-800-lighten-80-oklch', 'matrix-slate-500-lighten-80-oklch'];
      // Act
      const styles = await extractStyles(page, ids);
      // slate-800 lightened by 80 should still be darker than slate-500 lightened by 80
      // Assert
      expect(styles[ids[0]].luminance).toBeLessThanOrEqual(styles[ids[1]].luminance + 0.05);
    });
  });
});
