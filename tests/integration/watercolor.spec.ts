import { test, expect, type Page } from '@playwright/test';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

interface ElementStyles {
  backgroundImage: string;
  exists: boolean;
}

/**
 * Batch-extract computed backgroundImage from [data-test] elements.
 * Texture modules render entirely through gradient layers — backgroundColor
 * is always transparent, so we check backgroundImage for gradient presence.
 */
async function extractStyles(
  page: Page,
  selectors: string[],
): Promise<Record<string, ElementStyles>> {
  return page.evaluate((sels) => {
    const out: Record<string, { backgroundImage: string; exists: boolean }> = {};
    for (const sel of sels) {
      const el = document.querySelector(`[data-test="${sel}"]`);
      if (!el) {
        out[sel] = { backgroundImage: 'none', exists: false };
        continue;
      }
      out[sel] = {
        backgroundImage: getComputedStyle(el).backgroundImage,
        exists: true,
      };
    }
    return out;
  }, selectors);
}

interface RenderedColor {
  r: number;
  g: number;
  b: number;
  a: number;
  luminance: number;
}

/**
 * Extract actual rendered pixel colour at each element's centre by taking
 * a full-page screenshot, loading it back into a browser canvas, and sampling.
 */
async function extractRenderedColors(
  page: Page,
  selectors: string[],
): Promise<Record<string, RenderedColor>> {
  const screenshot = await page.screenshot({ fullPage: true });
  const imgBase64 = screenshot.toString('base64');

  const boxes = await page.evaluate((sels) => {
    const out: Record<string, { x: number; y: number; w: number; h: number } | null> = {};
    for (const sel of sels) {
      const el = document.querySelector(`[data-test="${sel}"]`);
      if (!el) { out[sel] = null; continue; }
      const r = el.getBoundingClientRect();
      out[sel] = { x: r.x + window.scrollX, y: r.y + window.scrollY, w: r.width, h: r.height };
    }
    return out;
  }, selectors);

  const colors = await page.evaluate(async (args: { img: string; rects: Record<string, { x: number; y: number; w: number; h: number } | null> }) => {
    const image = new Image();
    image.src = `data:image/png;base64,${args.img}`;
    await image.decode();
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(image, 0, 0);

    const dpr = window.devicePixelRatio || 1;
    const result: Record<string, { r: number; g: number; b: number; a: number }> = {};
    for (const [sel, rect] of Object.entries(args.rects)) {
      if (!rect) { result[sel] = { r: 0, g: 0, b: 0, a: 0 }; continue; }
      const cx = Math.floor((rect.x + rect.w / 2) * dpr);
      const cy = Math.floor((rect.y + rect.h / 2) * dpr);
      const [r, g, b, a] = ctx.getImageData(cx, cy, 1, 1).data;
      result[sel] = { r, g, b, a: a / 255 };
    }
    return result;
  }, { img: imgBase64, rects: boxes });

  const out: Record<string, RenderedColor> = {};
  for (const [sel, c] of Object.entries(colors)) {
    out[sel] = { ...c, luminance: 0.2126 * (c.r / 255) + 0.7152 * (c.g / 255) + 0.0722 * (c.b / 255) };
  }
  return out;
}

/** Colour distance in RGB Euclidean space. 0 = identical, 441 = opposite. */
function dist(a: RenderedColor, b: RenderedColor): number {
  return Math.sqrt((a.r - b.r) ** 2 + (a.g - b.g) ** 2 + (a.b - b.b) ** 2);
}

const PAGE = 'examples/watercolor';

async function gotoPage(page: Page) {
  await page.goto(PAGE, { waitUntil: 'networkidle' });
  await page.locator('[data-test="black"]').waitFor();
}


// ---------------------------------------------------------------------------
// Primary colours
// ---------------------------------------------------------------------------

test.describe('bg-watercolor — primary colours render', () => {
  test('all primary colours produce gradient layers', async ({ page }) => {

    await gotoPage(page);
    const ids = ['black', 'white', 'red', 'green', 'blue', 'cyan', 'yellow', 'gray'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].exists, `${id} should exist`).toBe(true);
      expect(s[id].backgroundImage, `${id} should have gradient layers`).toContain('gradient');
    }
  });

  test('dark input (black) is darker than light input (yellow)', async ({ page }) => {

    await gotoPage(page);
    const c = await extractRenderedColors(page, ['black', 'yellow']);
    expect(c['black'].luminance).toBeLessThan(c['yellow'].luminance);
  });
});

// ---------------------------------------------------------------------------
// Three palettes
// ---------------------------------------------------------------------------

test.describe('watercolor palettes', () => {
  test('contemporary, traditional, eastern all render with gradients', async ({ page }) => {

    await gotoPage(page);
    const ids = [
      'contemporary-red', 'contemporary-blue', 'contemporary-green', 'contemporary-amber',
      'traditional-red', 'traditional-blue', 'traditional-green', 'traditional-amber',
      'eastern-red', 'eastern-blue', 'eastern-green', 'eastern-amber',
    ];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].exists, `${id} should exist`).toBe(true);
      expect(s[id].backgroundImage, `${id} should have gradient layers`).toContain('gradient');
    }
  });

  test('different palettes produce distinct colours for the same input', async ({ page }) => {

    await gotoPage(page);
    const c = await extractRenderedColors(page, [
      'compare-red-contemporary', 'compare-red-traditional', 'compare-red-eastern',
      'compare-blue-contemporary', 'compare-blue-traditional', 'compare-blue-eastern',
    ]);

    // Red across palettes should differ
    const maxRedDist = Math.max(
      dist(c['compare-red-contemporary'], c['compare-red-traditional']),
      dist(c['compare-red-contemporary'], c['compare-red-eastern']),
      dist(c['compare-red-traditional'], c['compare-red-eastern']),
    );
    expect(maxRedDist, 'red should differ across palettes').toBeGreaterThan(5);

    // Blue across palettes should differ
    const maxBlueDist = Math.max(
      dist(c['compare-blue-contemporary'], c['compare-blue-traditional']),
      dist(c['compare-blue-contemporary'], c['compare-blue-eastern']),
      dist(c['compare-blue-traditional'], c['compare-blue-eastern']),
    );
    expect(maxBlueDist, 'blue should differ across palettes').toBeGreaterThan(5);
  });
});

// ---------------------------------------------------------------------------
// Wash levels
// ---------------------------------------------------------------------------

test.describe('watercolor-wash — wash level variations', () => {
  test('all wash levels render', async ({ page }) => {

    await gotoPage(page);
    const ids = ['wash-1', 'wash-2', 'wash-3', 'wash-4', 'wash-5'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].exists, `${id} should exist`).toBe(true);
      expect(s[id].backgroundImage, `${id} should have gradient`).toContain('gradient');
    }
  });

  test('wash levels across palettes all render', async ({ page }) => {
    await gotoPage(page);
    const ids = [
      'wash-contemp-1', 'wash-contemp-3', 'wash-contemp-5',
      'wash-trad-1', 'wash-trad-3', 'wash-trad-5',
      'wash-east-1', 'wash-east-3', 'wash-east-5',
    ];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].exists, `${id} should exist`).toBe(true);
    }
  });
});

// ---------------------------------------------------------------------------
// Opacity
// ---------------------------------------------------------------------------

test.describe('bg-watercolor opacity modifier', () => {
  test('all opacity variants render', async ({ page }) => {
    await gotoPage(page);
    const ids = ['opacity-100', 'opacity-75', 'opacity-50', 'opacity-25', 'opacity-10', 'opacity-0'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].exists, `${id} should exist`).toBe(true);
    }
  });

  test('reduced opacity produces lighter appearance', async ({ page }) => {

    await gotoPage(page);
    const c = await extractRenderedColors(page, ['opacity-100', 'opacity-50']);
    expect(c['opacity-50'].luminance).toBeGreaterThan(c['opacity-100'].luminance);
  });
});

// ---------------------------------------------------------------------------
// Shadow activation
// ---------------------------------------------------------------------------

test.describe('watercolor shadow layers', () => {
  test('shadow elements render with gradients', async ({ page }) => {

    await gotoPage(page);
    const ids = ['shadow-light', 'shadow-mid', 'shadow-dark', 'shadow-950'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].exists, `${id} should exist`).toBe(true);
      expect(s[id].backgroundImage, `${id} should have gradient`).toContain('gradient');
    }
  });

  test('darker inputs produce darker output', async ({ page }) => {

    await gotoPage(page);
    const c = await extractRenderedColors(page, ['shadow-light', 'shadow-dark']);
    expect(c['shadow-dark'].luminance).toBeLessThan(c['shadow-light'].luminance);
  });

  test('shadow character varies across palettes', async ({ page }) => {

    await gotoPage(page);
    const c = await extractRenderedColors(page, [
      'shadow-neutral-contemporary', 'shadow-neutral-traditional', 'shadow-neutral-eastern',
    ]);
    // At least one pair should differ
    const maxDist = Math.max(
      dist(c['shadow-neutral-contemporary'], c['shadow-neutral-traditional']),
      dist(c['shadow-neutral-contemporary'], c['shadow-neutral-eastern']),
    );
    expect(maxDist, 'shadow character should vary across palettes').toBeGreaterThan(3);
  });
});

// ---------------------------------------------------------------------------
// Arbitrary values
// ---------------------------------------------------------------------------

test.describe('watercolor arbitrary values', () => {
  test('arbitrary color, rgb, oklch all render with gradients', async ({ page }) => {

    await gotoPage(page);
    const ids = ['arbitrary-color', 'arbitrary-rgb', 'arbitrary-oklch'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].exists, `${id} should exist`).toBe(true);
      expect(s[id].backgroundImage, `${id} should have gradient`).toContain('gradient');
    }
  });
});

// ---------------------------------------------------------------------------
// Border gradient composition
// ---------------------------------------------------------------------------

test.describe('watercolor + border gradient composition', () => {
  test('border gradient variants render with gradients', async ({ page }) => {

    await gotoPage(page);
    const ids = ['border-linear-r', 'border-linear-b', 'border-conic', 'border-spin'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id} should have gradient layers`).toContain('gradient');
    }
  });
});

// ---------------------------------------------------------------------------
// Full colour palette
// ---------------------------------------------------------------------------

test.describe('watercolor — full Tailwind colour palette', () => {
  test('all compare-* colours render with gradients', async ({ page }) => {

    await gotoPage(page);
    const colors = [
      'compare-slate', 'compare-gray', 'compare-red', 'compare-orange',
      'compare-amber', 'compare-yellow', 'compare-lime', 'compare-green',
      'compare-emerald', 'compare-teal', 'compare-cyan', 'compare-sky',
      'compare-blue', 'compare-indigo', 'compare-violet', 'compare-purple',
      'compare-fuchsia', 'compare-pink', 'compare-rose',
    ];
    const s = await extractStyles(page, colors);
    for (const id of colors) {
      expect(s[id].exists, `${id} should exist`).toBe(true);
      expect(s[id].backgroundImage, `${id} should have gradient`).toContain('gradient');
    }
  });

  test('blue scale 50–950 shows luminance gradient', async ({ page }) => {

    await gotoPage(page);
    const shades = ['blue-50', 'blue-200', 'blue-500', 'blue-800', 'blue-950'];
    const c = await extractRenderedColors(page, shades);
    expect(c['blue-50'].luminance).toBeGreaterThan(c['blue-950'].luminance);
  });

  test('red traditional scale 50–950 shows luminance gradient', async ({ page }) => {

    await gotoPage(page);
    const shades = ['red-trad-50', 'red-trad-200', 'red-trad-500', 'red-trad-800', 'red-trad-950'];
    const c = await extractRenderedColors(page, shades);
    expect(c['red-trad-50'].luminance).toBeGreaterThan(c['red-trad-950'].luminance);
  });
});
