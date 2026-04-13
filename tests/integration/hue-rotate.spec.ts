import { test, expect, type Page } from '@playwright/test';

const PAGE = 'examples/hue-rotate';

interface Rgb {
  r: number;
  g: number;
  b: number;
  a: number;
}

/**
 * Batch-extract computed backgroundColor from [data-test] elements, converted
 * to RGBA via a 1x1 canvas so oklch/color()/lab outputs are comparable
 * cross-browser.
 */
async function extractBgColors(page: Page, selectors: string[]): Promise<Record<string, Rgb>> {
  return page.evaluate((sels) => {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext('2d')!;
    const out: Record<string, { r: number; g: number; b: number; a: number }> = {};
    for (const sel of sels) {
      const el = document.querySelector(`[data-test="${sel}"]`);
      if (!el) {
        out[sel] = { r: 0, g: 0, b: 0, a: 0 };
        continue;
      }
      const bg = getComputedStyle(el).backgroundColor;
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, 1, 1);
      const d = ctx.getImageData(0, 0, 1, 1).data;
      out[sel] = { r: d[0], g: d[1], b: d[2], a: d[3] / 255 };
    }
    return out;
  }, selectors);
}

/** Colour distance in RGB Euclidean space. 0 = identical, 441 = opposite. */
function dist(a: Rgb, b: Rgb): number {
  return Math.sqrt((a.r - b.r) ** 2 + (a.g - b.g) ** 2 + (a.b - b.b) ** 2);
}

async function gotoPage(page: Page) {
  await page.goto(PAGE, { waitUntil: 'networkidle' });
  await page.locator('[data-test="rot-0"]').waitFor();
}

test.describe('bg-hue-rotate — clockwise rotation', () => {
  test('0° equals base red-500', async ({ page }) => {
    await gotoPage(page);
    const c = await extractBgColors(page, ['rot-0']);
    // red-500 is approximately (239, 68, 68) — dominant red channel
    expect(c['rot-0'].r).toBeGreaterThan(c['rot-0'].g);
    expect(c['rot-0'].r).toBeGreaterThan(c['rot-0'].b);
  });

  test('60°, 120°, 180° shift away from red', async ({ page }) => {
    await gotoPage(page);
    const c = await extractBgColors(page, ['rot-0', 'rot-60', 'rot-120', 'rot-180']);
    // Each rotation should produce a perceptibly different colour from the base
    expect(dist(c['rot-0'], c['rot-60'])).toBeGreaterThan(30);
    expect(dist(c['rot-0'], c['rot-120'])).toBeGreaterThan(60);
    expect(dist(c['rot-0'], c['rot-180'])).toBeGreaterThan(90);
  });

  test('180° produces the complementary hue (red no longer dominant)', async ({ page }) => {
    await gotoPage(page);
    const { 'rot-180': c } = await extractBgColors(page, ['rot-180']);
    // Complement of red should have green + blue dominant over red
    expect(c.r).toBeLessThan(Math.max(c.g, c.b));
  });
});

test.describe('bg-hue-rotate — counterclockwise', () => {
  test('-180° equals +180° (rotation symmetry at half-turn)', async ({ page }) => {
    await gotoPage(page);
    const c = await extractBgColors(page, ['rot-180', 'rot-neg-180']);
    expect(dist(c['rot-180'], c['rot-neg-180'])).toBeLessThan(3);
  });

  test('-60° differs from +60°', async ({ page }) => {
    await gotoPage(page);
    const c = await extractBgColors(page, ['rot-60', 'rot-neg-60']);
    expect(dist(c['rot-60'], c['rot-neg-60'])).toBeGreaterThan(30);
  });
});

test.describe('bg-hue-rotate — colour space modifiers', () => {
  test('oklch, hsl, lab, rgb produce distinct results for the same degree', async ({ page }) => {
    await gotoPage(page);
    const c = await extractBgColors(page, [
      'space-oklch',
      'space-hsl',
      'space-lab',
      'space-rgb',
    ]);
    // Sanity check: all four produced a painted colour
    for (const key of ['space-oklch', 'space-hsl', 'space-lab', 'space-rgb']) {
      expect(c[key].a).toBeGreaterThan(0);
    }
    // At least one pair must differ (the 4 spaces treat 120° differently)
    const maxPairDist = Math.max(
      dist(c['space-oklch'], c['space-hsl']),
      dist(c['space-oklch'], c['space-lab']),
      dist(c['space-oklch'], c['space-rgb']),
      dist(c['space-hsl'], c['space-rgb']),
    );
    expect(maxPairDist).toBeGreaterThan(5);
  });
});

test.describe('full wheel coverage', () => {
  test('each 30° step produces a distinct colour', async ({ page }) => {
    await gotoPage(page);
    const keys = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((d) => `wheel-${d}`);
    const c = await extractBgColors(page, keys);
    // Consecutive steps should each differ by some margin
    for (let i = 1; i < keys.length; i++) {
      expect(dist(c[keys[i - 1]], c[keys[i]])).toBeGreaterThan(10);
    }
  });
});
