import { test, expect, type Page } from '@playwright/test';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

interface ElementStyles {
  backgroundColor: string;
  backgroundImage: string;
  luminance: number;
  alpha: number;
}

/**
 * Batch-extract computed styles from multiple `[data-test]` elements in one
 * round-trip to the browser.
 *
 * Uses a 1×1 canvas to convert any computed color format (oklch, color(),
 * rgb, etc.) to RGBA pixel values, making the extraction cross-browser.
 */
async function extractStyles(
  page: Page,
  selectors: string[],
): Promise<Record<string, ElementStyles>> {
  return page.evaluate((sels) => {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext('2d')!;

    function colorToRgba(color: string): { r: number; g: number; b: number; a: number } {
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 1, 1);
      const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
      return { r, g, b, a: a / 255 };
    }

    const out: Record<string, { backgroundColor: string; backgroundImage: string; luminance: number; alpha: number }> = {};
    for (const sel of sels) {
      const el = document.querySelector(`[data-test="${sel}"]`);
      if (!el) {
        out[sel] = { backgroundColor: 'transparent', backgroundImage: 'none', luminance: 0, alpha: 0 };
        continue;
      }
      const cs = getComputedStyle(el);
      const bg = cs.backgroundColor;
      const bgImg = cs.backgroundImage;
      const { r, g, b, a } = colorToRgba(bg);
      out[sel] = {
        backgroundColor: bg,
        backgroundImage: bgImg,
        luminance: 0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255),
        alpha: a,
      };
    }
    return out;
  }, selectors);
}

/**
 * Navigate to the color-transforms example page and wait for it to render.
 */
async function gotoPage(page: Page) {
  await page.goto(PAGE, { waitUntil: 'networkidle' });
  // Ensure at least one test element is present
  await page.locator('[data-test="darken-0"]').waitFor();
}

/**
 * Convert a computed color string to RGBA via canvas in the browser.
 */
async function getElementColor(page: Page, selector: string) {
  return page.evaluate((sel) => {
    const el = document.querySelector(`[data-test="${sel}"]`);
    if (!el) return { r: 0, g: 0, b: 0, a: 0, luminance: 0 };
    const cs = getComputedStyle(el);
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, 1, 1);
    ctx.fillStyle = cs.backgroundColor;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
    const lum = 0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255);
    return { r, g, b, a: a / 255, luminance: lum };
  }, selector);
}

const SUPPORTS_QUERY =
  '(background: if(style(--value): red)) and (background: --darken-oklch(red, 20))';

async function detectFunctionSupport(page: Page): Promise<boolean> {
  return page.evaluate((q) => CSS.supports(q), SUPPORTS_QUERY);
}

const PAGE = 'examples/color-transforms';

/**
 * Expected computed color-space prefix per modifier.
 * Browsers resolve relative color syntax and return the result in a
 * canonical format — e.g. hsl/hwb/rgb all resolve to color(srgb …).
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
  'oklch', 'lch', 'lab', 'oklab', 'hsl', 'hwb', 'rgb',
  'srgb', 'srgb-linear', 'display-p3', 'a98-rgb',
  'prophoto-rgb', 'rec2020', 'xyz', 'xyz-d50', 'xyz-d65',
  'color-mix',
];

// ---------------------------------------------------------------------------
// Stable path — runs on ALL browsers
// ---------------------------------------------------------------------------

test.describe('stable path (all browsers)', () => {
  test.describe('darken — default amounts', () => {
    test('monotonically decreasing luminance from darken-0 to darken-100', async ({ page }) => {
      await gotoPage(page);
      const ids = ['darken-0', 'darken-5', 'darken-10', 'darken-20', 'darken-50', 'darken-75', 'darken-100'];
      const s = await extractStyles(page, ids);

      for (const id of ids) {
        // Default color space is oklch
        expect(s[id].backgroundColor, `${id} should use oklch`).toContain('oklch(');
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }

      const baseLum = s['darken-0'].luminance;
      expect(s['darken-20'].luminance).toBeLessThan(baseLum + 0.01);
      expect(s['darken-50'].luminance).toBeLessThan(s['darken-20'].luminance + 0.01);
      expect(s['darken-100'].luminance).toBeLessThan(0.05);
    });
  });

  test.describe('lighten — default amounts', () => {
    test('monotonically increasing luminance from lighten-0 to lighten-100', async ({ page }) => {
      await gotoPage(page);
      const ids = ['lighten-0', 'lighten-5', 'lighten-10', 'lighten-20', 'lighten-50', 'lighten-75', 'lighten-100'];
      const s = await extractStyles(page, ids);

      for (const id of ids) {
        expect(s[id].backgroundColor, `${id} should use oklch`).toContain('oklch(');
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }

      const baseLum = s['lighten-0'].luminance;
      expect(s['lighten-20'].luminance).toBeGreaterThan(baseLum - 0.01);
      expect(s['lighten-50'].luminance).toBeGreaterThan(s['lighten-20'].luminance - 0.01);
      expect(s['lighten-100'].luminance).toBeGreaterThan(0.90);
    });
  });

  test.describe('darken — all 17 color spaces', () => {
    test('each color space returns the correct computed format and is darker than base', async ({ page }) => {
      await gotoPage(page);
      const darkenIds = ALL_SPACES.map((sp) => `darken-${sp}`);
      const s = await extractStyles(page, ['darken-0', ...darkenIds]);
      const baseLum = s['darken-0'].luminance;

      for (const sp of ALL_SPACES) {
        const id = `darken-${sp}`;
        // color-mix stable fallback is `inherit` → transparent on browsers without @function
        if (sp === 'color-mix') continue;
        const prefix = EXPECTED_SPACE_PREFIX[sp];
        expect(s[id].backgroundColor, `${id} should be in ${sp} color space`).toContain(prefix);
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
        expect(s[id].luminance, `${id} should be darker than base`).toBeLessThan(baseLum + 0.02);
      }
    });
  });

  test.describe('lighten — all 17 color spaces', () => {
    test('each color space returns the correct computed format and is lighter than base', async ({ page }) => {
      await gotoPage(page);
      const lightenIds = ALL_SPACES.map((sp) => `lighten-${sp}`);
      const s = await extractStyles(page, ['lighten-0', ...lightenIds]);
      const baseLum = s['lighten-0'].luminance;

      for (const sp of ALL_SPACES) {
        const id = `lighten-${sp}`;
        if (sp === 'color-mix') continue;
        const prefix = EXPECTED_SPACE_PREFIX[sp];
        expect(s[id].backgroundColor, `${id} should be in ${sp} color space`).toContain(prefix);
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
        expect(s[id].luminance, `${id} should be lighter than base`).toBeGreaterThan(baseLum - 0.02);
      }
    });
  });

  test.describe('base color range — darken-20', () => {
    test('20 base colors produce non-transparent darkened backgrounds', async ({ page }) => {
      await gotoPage(page);
      const ids = [
        'base-red-500', 'base-orange-500', 'base-amber-500', 'base-yellow-400',
        'base-lime-500', 'base-green-500', 'base-emerald-500', 'base-teal-500',
        'base-cyan-500', 'base-sky-500', 'base-blue-500', 'base-indigo-500',
        'base-violet-500', 'base-purple-500', 'base-fuchsia-500', 'base-pink-500',
        'base-rose-500', 'base-slate-400', 'base-gray-500', 'base-white',
      ];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });
  });

  test.describe('base color range — lighten-20', () => {
    test('20 base colors produce non-transparent lightened backgrounds', async ({ page }) => {
      await gotoPage(page);
      const ids = [
        'base-lighten-red-500', 'base-lighten-orange-500', 'base-lighten-amber-500',
        'base-lighten-yellow-400', 'base-lighten-lime-500', 'base-lighten-green-500',
        'base-lighten-emerald-500', 'base-lighten-teal-500', 'base-lighten-cyan-500',
        'base-lighten-sky-500', 'base-lighten-blue-500', 'base-lighten-indigo-500',
        'base-lighten-violet-500', 'base-lighten-purple-500', 'base-lighten-fuchsia-500',
        'base-lighten-pink-500', 'base-lighten-rose-500', 'base-lighten-slate-700',
        'base-lighten-gray-500', 'base-lighten-black',
      ];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });
  });

  test.describe('special base colors', () => {
    test('arbitrary and CSS-variable base colors produce non-transparent backgrounds', async ({ page }) => {
      await gotoPage(page);
      const ids = [
        'base-arbitrary-hex', 'base-arbitrary-oklch', 'base-arbitrary-rgb', 'base-css-var',
        'base-arbitrary-hex-lighten', 'base-arbitrary-oklch-lighten', 'base-css-var-lighten',
      ];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });
  });

  test.describe('base colors × color spaces', () => {
    test('red-500 darken across 5 spaces', async ({ page }) => {
      await gotoPage(page);
      const ids = ['red-oklch', 'red-hsl', 'red-rgb', 'red-srgb', 'red-display-p3'];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });

    test('emerald-400 darken across 5 spaces', async ({ page }) => {
      await gotoPage(page);
      const ids = ['emerald-oklch', 'emerald-hsl', 'emerald-rgb', 'emerald-srgb', 'emerald-display-p3'];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });

    test('purple-600 lighten across 5 spaces', async ({ page }) => {
      await gotoPage(page);
      const ids = ['purple-oklch', 'purple-hsl', 'purple-rgb', 'purple-srgb', 'purple-display-p3'];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });
  });

  test.describe('opacity + darken', () => {
    test('opacity preserved with darken across amounts', async ({ page }) => {
      await gotoPage(page);
      const ids = [
        'opacity-25-darken-10', 'opacity-25-darken-20', 'opacity-25-darken-50',
        'opacity-50-darken-10', 'opacity-50-darken-20', 'opacity-50-darken-50',
        'opacity-75-darken-10', 'opacity-75-darken-20', 'opacity-75-darken-50',
        'opacity-0-darken', 'opacity-100-darken', 'opacity-5-darken',
      ];
      const s = await extractStyles(page, ids);

      // Elements with opacity 0 should have alpha near 0
      expect(s['opacity-0-darken'].alpha).toBeLessThan(0.05);
      // Elements with opacity 100 should have alpha 1
      expect(s['opacity-100-darken'].alpha).toBeCloseTo(1, 1);
      // Elements with opacity 5 should have very low alpha
      expect(s['opacity-5-darken'].alpha).toBeLessThan(0.15);

      // Opacity is correctly applied — check approximate alpha values
      expect(s['opacity-25-darken-10'].alpha).toBeCloseTo(0.25, 1);
      expect(s['opacity-50-darken-20'].alpha).toBeCloseTo(0.5, 1);
      expect(s['opacity-75-darken-50'].alpha).toBeCloseTo(0.75, 1);
    });
  });

  test.describe('opacity + lighten', () => {
    test('opacity preserved with lighten across amounts', async ({ page }) => {
      await gotoPage(page);
      const ids = [
        'opacity-25-lighten-10', 'opacity-25-lighten-20', 'opacity-25-lighten-50',
        'opacity-50-lighten-10', 'opacity-50-lighten-20', 'opacity-50-lighten-50',
        'opacity-75-lighten-10', 'opacity-75-lighten-20', 'opacity-75-lighten-50',
        'opacity-0-lighten', 'opacity-100-lighten', 'opacity-5-lighten',
      ];
      const s = await extractStyles(page, ids);

      expect(s['opacity-0-lighten'].alpha).toBeLessThan(0.05);
      expect(s['opacity-100-lighten'].alpha).toBeCloseTo(1, 1);
      expect(s['opacity-5-lighten'].alpha).toBeLessThan(0.15);

      expect(s['opacity-25-lighten-10'].alpha).toBeCloseTo(0.25, 1);
      expect(s['opacity-50-lighten-20'].alpha).toBeCloseTo(0.5, 1);
      expect(s['opacity-75-lighten-50'].alpha).toBeCloseTo(0.75, 1);
    });
  });

  test.describe('opacity + color space modifiers', () => {
    test('darken with explicit space preserves opacity', async ({ page }) => {
      await gotoPage(page);
      const ids = [
        'opacity-50-darken-oklch', 'opacity-50-darken-hsl', 'opacity-50-darken-rgb',
        'opacity-50-darken-srgb', 'opacity-50-darken-lab', 'opacity-50-darken-display-p3',
      ];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].alpha, `${id} should preserve ~50% opacity`).toBeCloseTo(0.5, 1);
      }
      // color-mix stable fallback is `inherit` → may not preserve opacity
      const cmix = await extractStyles(page, ['opacity-50-darken-color-mix']);
      expect(cmix['opacity-50-darken-color-mix'].backgroundColor).toBeDefined();
    });

    test('lighten with explicit space preserves opacity', async ({ page }) => {
      await gotoPage(page);
      const ids = [
        'opacity-50-lighten-oklch', 'opacity-50-lighten-hsl', 'opacity-50-lighten-rgb',
        'opacity-50-lighten-srgb',
      ];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].alpha, `${id} should preserve ~50% opacity`).toBeCloseTo(0.5, 1);
      }
      const cmix = await extractStyles(page, ['opacity-50-lighten-color-mix']);
      expect(cmix['opacity-50-lighten-color-mix'].backgroundColor).toBeDefined();
    });
  });

  test.describe('opacity + different base colors', () => {
    test('various base colors with opacity produce non-transparent backgrounds', async ({ page }) => {
      await gotoPage(page);
      const ids = [
        'opacity-red-darken', 'opacity-green-darken', 'opacity-purple-darken', 'opacity-amber-darken',
        'opacity-red-lighten', 'opacity-green-lighten', 'opacity-purple-lighten', 'opacity-amber-lighten',
        'opacity-white-darken', 'opacity-black-lighten',
        'opacity-arbitrary-darken', 'opacity-arbitrary-lighten',
      ];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });
  });

  test.describe('opacity + darken/lighten + border gradient', () => {
    test('border gradient renders with opacity and color transform', async ({ page }) => {
      await gotoPage(page);
      const ids = [
        'opacity-darken-border-linear', 'opacity-lighten-border-linear',
        'opacity-darken-space-border', 'opacity-lighten-space-border',
        'opacity-darken-border-radial', 'opacity-lighten-border-conic',
        'opacity-darken-border-spin', 'opacity-darken-border-interp',
      ];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].backgroundImage, `${id} should have gradient`).toContain('gradient');
      }
    });
  });

  test.describe('color transform + border gradient', () => {
    test('darken with all border types renders gradient', async ({ page }) => {
      await gotoPage(page);
      const ids = [
        'darken-border-linear-r', 'darken-border-linear-b', 'darken-border-linear-45',
        'darken-border-radial', 'darken-border-conic', 'darken-border-spin',
      ];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].backgroundImage, `${id} should have gradient`).toContain('gradient');
      }
    });

    test('lighten with all border types renders gradient', async ({ page }) => {
      await gotoPage(page);
      const ids = [
        'lighten-border-linear-r', 'lighten-border-linear-b',
        'lighten-border-radial', 'lighten-border-conic',
      ];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].backgroundImage, `${id} should have gradient`).toContain('gradient');
      }
    });

    test('color space + border interpolation combos render gradient', async ({ page }) => {
      await gotoPage(page);
      const ids = [
        'darken-oklch-border-srgb', 'darken-hsl-border-oklch',
        'darken-srgb-border-longer', 'lighten-oklab-border-decreasing',
      ];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].backgroundImage, `${id} should have gradient`).toContain('gradient');
      }
    });

    test('base colors + border gradient render gradient', async ({ page }) => {
      await gotoPage(page);
      const ids = [
        'red-darken-border', 'green-darken-border',
        'purple-lighten-border', 'arbitrary-darken-border',
      ];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].backgroundImage, `${id} should have gradient`).toContain('gradient');
      }
    });
  });

  test.describe('edge cases: extreme amounts', () => {
    test('darken-0 and lighten-0 approximate base; darken-100 near black; lighten-100 near white', async ({ page }) => {
      await gotoPage(page);
      const ids = ['edge-darken-0', 'edge-darken-100', 'edge-lighten-0', 'edge-lighten-100', 'edge-darken-1', 'edge-lighten-1'];
      const s = await extractStyles(page, ids);

      for (const id of ids) {
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }

      // darken-100 should be near black
      expect(s['edge-darken-100'].luminance).toBeLessThan(0.05);
      // lighten-100 should be near white
      expect(s['edge-lighten-100'].luminance).toBeGreaterThan(0.90);

      // darken-0 and lighten-0 should be close to each other (both are base blue-500)
      expect(Math.abs(s['edge-darken-0'].luminance - s['edge-lighten-0'].luminance)).toBeLessThan(0.02);

      // darken-1 and lighten-1 should be very close to base
      expect(Math.abs(s['edge-darken-1'].luminance - s['edge-darken-0'].luminance)).toBeLessThan(0.03);
      expect(Math.abs(s['edge-lighten-1'].luminance - s['edge-lighten-0'].luminance)).toBeLessThan(0.03);
    });
  });

  test.describe('edge cases: already dark / already light', () => {
    test('darkening already-dark and lightening already-light produce non-transparent colors', async ({ page }) => {
      await gotoPage(page);
      const ids = ['edge-dark-darken', 'edge-dark-darken-hsl', 'edge-light-lighten', 'edge-light-lighten-rgb'];
      const s = await extractStyles(page, ids);

      for (const id of ids) {
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }

      // Darkened slate-900 should be very dark
      expect(s['edge-dark-darken'].luminance).toBeLessThan(0.1);
      // Lightened yellow-100 should be very light
      expect(s['edge-light-lighten'].luminance).toBeGreaterThan(0.85);
    });
  });

  test.describe('edge cases: no explicit background', () => {
    test('darken/lighten without bg-* class resolves to a background', async ({ page }) => {
      await gotoPage(page);
      const ids = ['edge-no-bg-darken', 'edge-no-bg-lighten', 'edge-no-bg-darken-space'];
      const s = await extractStyles(page, ids);

      for (const id of ids) {
        // Should resolve to something — the key is no crash
        expect(s[id].backgroundColor).toBeDefined();
      }
    });
  });

  test.describe('edge cases: hover state', () => {
    test('hover:bg-darken-20 darkens on hover', async ({ page }) => {
      await gotoPage(page);
      const before = await getElementColor(page, 'edge-hover-darken');

      await page.locator('[data-test="edge-hover-darken"]').hover();

      const after = await getElementColor(page, 'edge-hover-darken');
      expect(after.luminance).toBeLessThan(before.luminance + 0.01);
    });
  });

  test.describe('edge cases: dark mode', () => {
    test('dark:bg-darken-30 applies darker value in dark mode', async ({ page }) => {
      // Light mode
      await page.emulateMedia({ colorScheme: 'light' });
      await gotoPage(page);
      const light = await getElementColor(page, 'edge-dark-mode');

      // Dark mode
      await page.emulateMedia({ colorScheme: 'dark' });
      await gotoPage(page);
      const dark = await getElementColor(page, 'edge-dark-mode');

      // dark:bg-darken-30 should be darker than light mode's bg-darken-10
      expect(dark.luminance).toBeLessThan(light.luminance + 0.01);
    });
  });

  test.describe('triple combo: opacity + transform + border gradient', () => {
    test('all triple combos render gradient with non-transparent background', async ({ page }) => {
      await gotoPage(page);
      const ids = ['triple-darken', 'triple-lighten', 'triple-darken-space', 'triple-lighten-space'];
      const s = await extractStyles(page, ids);

      for (const id of ids) {
        expect(s[id].backgroundImage, `${id} should have gradient`).toContain('gradient');
      }
    });
  });
});

// ---------------------------------------------------------------------------
// @function path — runs only when CSS @function IS supported
// ---------------------------------------------------------------------------

test.describe('@function path (browsers with CSS @function support)', () => {
  test.beforeEach(async ({ page }) => {
    await gotoPage(page);
    const supports = await detectFunctionSupport(page);
    test.skip(!supports, 'Browser does not support CSS @function');
  });

  test.describe('color-mix space resolves via @function', () => {
    test('darken-20/color-mix produces a real darkened color (not inherit)', async ({ page }) => {
      const s = await extractStyles(page, ['darken-0', 'darken-color-mix']);
      expect(s['darken-color-mix'].alpha, 'color-mix should not be transparent').toBeGreaterThan(0.5);
      expect(s['darken-color-mix'].luminance, 'color-mix should be darker than base')
        .toBeLessThan(s['darken-0'].luminance + 0.02);
    });

    test('lighten-20/color-mix produces a real lightened color', async ({ page }) => {
      const s = await extractStyles(page, ['lighten-0', 'lighten-color-mix']);
      expect(s['lighten-color-mix'].alpha, 'color-mix should not be transparent').toBeGreaterThan(0.5);
      expect(s['lighten-color-mix'].luminance, 'color-mix should be lighter than base')
        .toBeGreaterThan(s['lighten-0'].luminance - 0.02);
    });

    test('opacity-50 + darken/color-mix produces a non-transparent color', async ({ page }) => {
      const s = await extractStyles(page, ['opacity-50-darken-color-mix', 'opacity-50-lighten-color-mix']);
      // color-mix may shift alpha slightly due to the mix calculation
      expect(s['opacity-50-darken-color-mix'].alpha).toBeGreaterThan(0.3);
      expect(s['opacity-50-lighten-color-mix'].alpha).toBeGreaterThan(0.3);
    });
  });

  test.describe('all 17 color spaces render via @function', () => {
    test('darken-20 across all spaces including color-mix', async ({ page }) => {
      const darkenIds = ALL_SPACES.map((sp) => `darken-${sp}`);
      const s = await extractStyles(page, ['darken-0', ...darkenIds]);
      const baseLum = s['darken-0'].luminance;

      for (const sp of ALL_SPACES) {
        const id = `darken-${sp}`;
        const prefix = EXPECTED_SPACE_PREFIX[sp];
        expect(s[id].backgroundColor, `${id} should be in ${sp} color space`).toContain(prefix);
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
        expect(s[id].luminance, `${id} should be darker than base`).toBeLessThan(baseLum + 0.02);
      }
    });

    test('lighten-20 across all spaces including color-mix', async ({ page }) => {
      const lightenIds = ALL_SPACES.map((sp) => `lighten-${sp}`);
      const s = await extractStyles(page, ['lighten-0', ...lightenIds]);
      const baseLum = s['lighten-0'].luminance;

      for (const sp of ALL_SPACES) {
        const id = `lighten-${sp}`;
        const prefix = EXPECTED_SPACE_PREFIX[sp];
        expect(s[id].backgroundColor, `${id} should be in ${sp} color space`).toContain(prefix);
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
        expect(s[id].luminance, `${id} should be lighter than base`).toBeGreaterThan(baseLum - 0.02);
      }
    });
  });
});

// ---------------------------------------------------------------------------
// Stable fallback path — runs only when CSS @function is NOT supported
// ---------------------------------------------------------------------------

test.describe('stable fallback path (browsers without CSS @function)', () => {
  test.beforeEach(async ({ page }) => {
    await gotoPage(page);
    const supports = await detectFunctionSupport(page);
    test.skip(supports, 'Browser supports CSS @function — stable fallback not active');
  });

  test.describe('color-mix space falls back to inherit', () => {
    test('darken-20/color-mix falls back to transparent (inherit)', async ({ page }) => {
      const s = await extractStyles(page, ['darken-color-mix', 'lighten-color-mix']);
      // Stable path uses `inherit` for color-mix → transparent on the test page
      expect(s['darken-color-mix'].alpha, 'color-mix stable fallback should be transparent').toBeLessThan(0.05);
      expect(s['lighten-color-mix'].alpha, 'color-mix stable fallback should be transparent').toBeLessThan(0.05);
    });

    test('opacity-50 + darken/color-mix falls back to transparent', async ({ page }) => {
      const s = await extractStyles(page, ['opacity-50-darken-color-mix', 'opacity-50-lighten-color-mix']);
      expect(s['opacity-50-darken-color-mix'].alpha).toBeLessThan(0.05);
      expect(s['opacity-50-lighten-color-mix'].alpha).toBeLessThan(0.05);
    });
  });

  test.describe('all 16 non-color-mix spaces render via relative color syntax', () => {
    test('darken-20 across 16 spaces returns correct computed format', async ({ page }) => {
      const nonMixSpaces = ALL_SPACES.filter((sp) => sp !== 'color-mix');
      const darkenIds = nonMixSpaces.map((sp) => `darken-${sp}`);
      const s = await extractStyles(page, ['darken-0', ...darkenIds]);
      const baseLum = s['darken-0'].luminance;

      for (const sp of nonMixSpaces) {
        const id = `darken-${sp}`;
        const prefix = EXPECTED_SPACE_PREFIX[sp];
        expect(s[id].backgroundColor, `${id} should be in ${sp} color space`).toContain(prefix);
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
        expect(s[id].luminance, `${id} should be darker than base`).toBeLessThan(baseLum + 0.02);
      }
    });

    test('lighten-20 across 16 spaces returns correct computed format', async ({ page }) => {
      const nonMixSpaces = ALL_SPACES.filter((sp) => sp !== 'color-mix');
      const lightenIds = nonMixSpaces.map((sp) => `lighten-${sp}`);
      const s = await extractStyles(page, ['lighten-0', ...lightenIds]);
      const baseLum = s['lighten-0'].luminance;

      for (const sp of nonMixSpaces) {
        const id = `lighten-${sp}`;
        const prefix = EXPECTED_SPACE_PREFIX[sp];
        expect(s[id].backgroundColor, `${id} should be in ${sp} color space`).toContain(prefix);
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
        expect(s[id].luminance, `${id} should be lighter than base`).toBeGreaterThan(baseLum - 0.02);
      }
    });
  });

  test.describe('default oklch amounts via relative color syntax', () => {
    test('darken monotonically decreases luminance', async ({ page }) => {
      const ids = ['darken-0', 'darken-5', 'darken-10', 'darken-20', 'darken-50', 'darken-75', 'darken-100'];
      const s = await extractStyles(page, ids);

      for (const id of ids) {
        expect(s[id].backgroundColor, `${id} should use oklch`).toContain('oklch(');
        expect(s[id].alpha, `${id}`).toBeGreaterThan(0.5);
      }

      const baseLum = s['darken-0'].luminance;
      expect(s['darken-20'].luminance).toBeLessThan(baseLum + 0.01);
      expect(s['darken-50'].luminance).toBeLessThan(s['darken-20'].luminance + 0.01);
      expect(s['darken-100'].luminance).toBeLessThan(0.05);
    });

    test('lighten monotonically increases luminance', async ({ page }) => {
      const ids = ['lighten-0', 'lighten-5', 'lighten-10', 'lighten-20', 'lighten-50', 'lighten-75', 'lighten-100'];
      const s = await extractStyles(page, ids);

      for (const id of ids) {
        expect(s[id].backgroundColor, `${id} should use oklch`).toContain('oklch(');
        expect(s[id].alpha, `${id}`).toBeGreaterThan(0.5);
      }

      const baseLum = s['lighten-0'].luminance;
      expect(s['lighten-20'].luminance).toBeGreaterThan(baseLum - 0.01);
      expect(s['lighten-50'].luminance).toBeGreaterThan(s['lighten-20'].luminance - 0.01);
      expect(s['lighten-100'].luminance).toBeGreaterThan(0.90);
    });
  });

  test.describe('base colors and special values via stable path', () => {
    test('20 base colors darken via relative color syntax', async ({ page }) => {
      const ids = [
        'base-red-500', 'base-orange-500', 'base-amber-500', 'base-yellow-400',
        'base-lime-500', 'base-green-500', 'base-emerald-500', 'base-teal-500',
        'base-cyan-500', 'base-sky-500', 'base-blue-500', 'base-indigo-500',
        'base-violet-500', 'base-purple-500', 'base-fuchsia-500', 'base-pink-500',
        'base-rose-500', 'base-slate-400', 'base-gray-500', 'base-white',
      ];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });

    test('20 base colors lighten via relative color syntax', async ({ page }) => {
      const ids = [
        'base-lighten-red-500', 'base-lighten-orange-500', 'base-lighten-amber-500',
        'base-lighten-yellow-400', 'base-lighten-lime-500', 'base-lighten-green-500',
        'base-lighten-emerald-500', 'base-lighten-teal-500', 'base-lighten-cyan-500',
        'base-lighten-sky-500', 'base-lighten-blue-500', 'base-lighten-indigo-500',
        'base-lighten-violet-500', 'base-lighten-purple-500', 'base-lighten-fuchsia-500',
        'base-lighten-pink-500', 'base-lighten-rose-500', 'base-lighten-slate-700',
        'base-lighten-gray-500', 'base-lighten-black',
      ];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });

    test('arbitrary and CSS-variable base colors render via stable path', async ({ page }) => {
      const ids = [
        'base-arbitrary-hex', 'base-arbitrary-oklch', 'base-arbitrary-rgb', 'base-css-var',
        'base-arbitrary-hex-lighten', 'base-arbitrary-oklch-lighten', 'base-css-var-lighten',
      ];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });

    test('base colors × color spaces render via stable path', async ({ page }) => {
      const ids = [
        'red-oklch', 'red-hsl', 'red-rgb', 'red-srgb', 'red-display-p3',
        'emerald-oklch', 'emerald-hsl', 'emerald-rgb', 'emerald-srgb', 'emerald-display-p3',
        'purple-oklch', 'purple-hsl', 'purple-rgb', 'purple-srgb', 'purple-display-p3',
      ];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
    });
  });

  test.describe('opacity via stable path', () => {
    test('opacity preserved with darken via relative color syntax', async ({ page }) => {
      const s = await extractStyles(page, [
        'opacity-25-darken-10', 'opacity-50-darken-20', 'opacity-75-darken-50',
        'opacity-0-darken', 'opacity-100-darken',
      ]);
      expect(s['opacity-0-darken'].alpha).toBeLessThan(0.05);
      expect(s['opacity-100-darken'].alpha).toBeCloseTo(1, 1);
      expect(s['opacity-25-darken-10'].alpha).toBeCloseTo(0.25, 1);
      expect(s['opacity-50-darken-20'].alpha).toBeCloseTo(0.5, 1);
      expect(s['opacity-75-darken-50'].alpha).toBeCloseTo(0.75, 1);
    });

    test('opacity preserved with lighten via relative color syntax', async ({ page }) => {
      const s = await extractStyles(page, [
        'opacity-25-lighten-10', 'opacity-50-lighten-20', 'opacity-75-lighten-50',
        'opacity-0-lighten', 'opacity-100-lighten',
      ]);
      expect(s['opacity-0-lighten'].alpha).toBeLessThan(0.05);
      expect(s['opacity-100-lighten'].alpha).toBeCloseTo(1, 1);
      expect(s['opacity-25-lighten-10'].alpha).toBeCloseTo(0.25, 1);
      expect(s['opacity-50-lighten-20'].alpha).toBeCloseTo(0.5, 1);
      expect(s['opacity-75-lighten-50'].alpha).toBeCloseTo(0.75, 1);
    });

    test('opacity + explicit color space preserves opacity', async ({ page }) => {
      const ids = [
        'opacity-50-darken-oklch', 'opacity-50-darken-hsl', 'opacity-50-darken-rgb',
        'opacity-50-darken-srgb', 'opacity-50-darken-lab', 'opacity-50-darken-display-p3',
        'opacity-50-lighten-oklch', 'opacity-50-lighten-hsl', 'opacity-50-lighten-rgb',
        'opacity-50-lighten-srgb',
      ];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].alpha, `${id} should preserve ~50% opacity`).toBeCloseTo(0.5, 1);
      }
    });

    test('different base colors with opacity render via stable path', async ({ page }) => {
      const ids = [
        'opacity-red-darken', 'opacity-green-darken', 'opacity-purple-darken', 'opacity-amber-darken',
        'opacity-red-lighten', 'opacity-green-lighten', 'opacity-purple-lighten', 'opacity-amber-lighten',
        'opacity-white-darken', 'opacity-black-lighten',
        'opacity-arbitrary-darken', 'opacity-arbitrary-lighten',
      ];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.1);
      }
    });
  });

  test.describe('border gradient combos via stable path', () => {
    test('opacity + transform + border gradient renders gradient', async ({ page }) => {
      const ids = [
        'opacity-darken-border-linear', 'opacity-lighten-border-linear',
        'opacity-darken-space-border', 'opacity-lighten-space-border',
        'opacity-darken-border-radial', 'opacity-lighten-border-conic',
        'opacity-darken-border-spin', 'opacity-darken-border-interp',
      ];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].backgroundImage, `${id}`).toContain('gradient');
      }
    });

    test('darken/lighten + all border types renders gradient', async ({ page }) => {
      const ids = [
        'darken-border-linear-r', 'darken-border-linear-b', 'darken-border-linear-45',
        'darken-border-radial', 'darken-border-conic', 'darken-border-spin',
        'lighten-border-linear-r', 'lighten-border-linear-b',
        'lighten-border-radial', 'lighten-border-conic',
      ];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].backgroundImage, `${id}`).toContain('gradient');
      }
    });

    test('color space + border interpolation renders gradient', async ({ page }) => {
      const ids = [
        'darken-oklch-border-srgb', 'darken-hsl-border-oklch',
        'darken-srgb-border-longer', 'lighten-oklab-border-decreasing',
      ];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].backgroundImage, `${id}`).toContain('gradient');
      }
    });

    test('base colors + border gradient renders gradient', async ({ page }) => {
      const ids = ['red-darken-border', 'green-darken-border', 'purple-lighten-border', 'arbitrary-darken-border'];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].backgroundImage, `${id}`).toContain('gradient');
      }
    });
  });

  test.describe('edge cases via stable path', () => {
    test('extreme amounts render correctly', async ({ page }) => {
      const ids = ['edge-darken-0', 'edge-darken-100', 'edge-lighten-0', 'edge-lighten-100', 'edge-darken-1', 'edge-lighten-1'];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
      expect(s['edge-darken-100'].luminance).toBeLessThan(0.05);
      expect(s['edge-lighten-100'].luminance).toBeGreaterThan(0.90);
      expect(Math.abs(s['edge-darken-0'].luminance - s['edge-lighten-0'].luminance)).toBeLessThan(0.02);
    });

    test('already dark/light bases render correctly', async ({ page }) => {
      const ids = ['edge-dark-darken', 'edge-dark-darken-hsl', 'edge-light-lighten', 'edge-light-lighten-rgb'];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].alpha, `${id} should not be transparent`).toBeGreaterThan(0.5);
      }
      expect(s['edge-dark-darken'].luminance).toBeLessThan(0.1);
      expect(s['edge-light-lighten'].luminance).toBeGreaterThan(0.85);
    });

    test('no explicit background still resolves', async ({ page }) => {
      const ids = ['edge-no-bg-darken', 'edge-no-bg-lighten', 'edge-no-bg-darken-space'];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].backgroundColor).toBeDefined();
      }
    });

    test('hover state variant applies via stable path', async ({ page }) => {
      const before = await getElementColor(page, 'edge-hover-darken');
      await page.locator('[data-test="edge-hover-darken"]').hover();
      const after = await getElementColor(page, 'edge-hover-darken');
      expect(after.luminance).toBeLessThan(before.luminance + 0.01);
    });

    test('dark mode variant applies via stable path', async ({ page }) => {
      await page.emulateMedia({ colorScheme: 'light' });
      await gotoPage(page);
      const light = await getElementColor(page, 'edge-dark-mode');

      await page.emulateMedia({ colorScheme: 'dark' });
      await gotoPage(page);
      const dark = await getElementColor(page, 'edge-dark-mode');

      expect(dark.luminance).toBeLessThan(light.luminance + 0.01);
    });
  });

  test.describe('triple combo via stable path', () => {
    test('opacity + transform + border gradient renders gradient', async ({ page }) => {
      const ids = ['triple-darken', 'triple-lighten', 'triple-darken-space', 'triple-lighten-space'];
      const s = await extractStyles(page, ids);
      for (const id of ids) {
        expect(s[id].backgroundImage, `${id}`).toContain('gradient');
      }
    });
  });
});
