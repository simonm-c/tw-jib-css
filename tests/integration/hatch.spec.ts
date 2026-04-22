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

/**
 * Extract actual rendered pixel colour at each element's centre by taking
 * a full-page screenshot, loading it back into a browser canvas, and sampling.
 */
async function extractRenderedColors(
  page: Page,
  selectors: string[],
): Promise<Record<string, { r: number; g: number; b: number; a: number; luminance: number }>> {
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

  const out: Record<string, { r: number; g: number; b: number; a: number; luminance: number }> = {};
  for (const [sel, c] of Object.entries(colors)) {
    out[sel] = { ...c, luminance: 0.2126 * (c.r / 255) + 0.7152 * (c.g / 255) + 0.0722 * (c.b / 255) };
  }
  return out;
}

const PAGE = 'examples/hatch';

async function gotoPage(page: Page) {
  await page.goto(PAGE, { waitUntil: 'networkidle' });
  await page.locator('[data-test="black"]').waitFor();
}

// ---------------------------------------------------------------------------
// Primary & secondary colours
// ---------------------------------------------------------------------------

test.describe('bg-hatch — primary colours render', () => {
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

  test('white hatch is near-white (paper dominates)', async ({ page }) => {
    await gotoPage(page);
    const c = await extractRenderedColors(page, ['white']);
    expect(c['white'].luminance).toBeGreaterThan(0.8);
  });
});

// ---------------------------------------------------------------------------
// Angle variations
// ---------------------------------------------------------------------------

test.describe('hatch-angle — angle variations render', () => {
  test('all angle variants render with gradients', async ({ page }) => {
    await gotoPage(page);
    const ids = ['angle-0', 'angle-15', 'angle-35', 'angle-45', 'angle-90', 'angle-135'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].exists, `${id} should exist`).toBe(true);
      expect(s[id].backgroundImage, `${id} should have gradient layers`).toContain('gradient');
    }
  });
});

// ---------------------------------------------------------------------------
// Weight & spacing variations
// ---------------------------------------------------------------------------

test.describe('hatch-stroke / hatch-gap — weight and spacing variations', () => {
  test('all weight variants render', async ({ page }) => {
    await gotoPage(page);
    const ids = ['weight-1', 'weight-2', 'weight-3', 'weight-4', 'weight-6'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].exists, `${id} should exist`).toBe(true);
      expect(s[id].backgroundImage, `${id} should have gradient`).toContain('gradient');
    }
  });

  test('all spacing variants render', async ({ page }) => {
    await gotoPage(page);
    const ids = ['spacing-1', 'spacing-2', 'spacing-4', 'spacing-8', 'spacing-12', 'spacing-16'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].exists, `${id} should exist`).toBe(true);
      expect(s[id].backgroundImage, `${id} should have gradient`).toContain('gradient');
    }
  });

  test('bleed variants render', async ({ page }) => {
    await gotoPage(page);
    const ids = ['bleed-0', 'bleed-1', 'bleed-2', 'bleed-3', 'bleed-4'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].exists, `${id} should exist`).toBe(true);
    }
  });
});

// ---------------------------------------------------------------------------
// Opacity
// ---------------------------------------------------------------------------

test.describe('bg-hatch opacity modifier', () => {
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
    // Lower opacity = lighter appearance (closer to white paper)
    expect(c['opacity-50'].luminance).toBeGreaterThan(c['opacity-100'].luminance);
  });
});

// ---------------------------------------------------------------------------
// Density tiers
// ---------------------------------------------------------------------------

test.describe('hatch density tiers', () => {
  test('all density tier variants render', async ({ page }) => {
    await gotoPage(page);
    const ids = ['tier-broken', 'tier-sparse', 'tier-medium', 'tier-dense', 'tier-triple'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].exists, `${id} should exist`).toBe(true);
      expect(s[id].backgroundImage, `${id} should have gradient`).toContain('gradient');
    }
  });

  test('dense tier is darker than sparse tier', async ({ page }) => {
    await gotoPage(page);
    const c = await extractRenderedColors(page, ['tier-sparse', 'tier-dense']);
    expect(c['tier-dense'].luminance).toBeLessThan(c['tier-sparse'].luminance);
  });
});

// ---------------------------------------------------------------------------
// Border gradient composition
// ---------------------------------------------------------------------------

test.describe('hatch + border gradient composition', () => {
  test('border gradient variants all render with gradients', async ({ page }) => {
    await gotoPage(page);
    const ids = [
      'border-linear-r', 'border-linear-b', 'border-linear-br', 'border-linear-angle',
      'border-conic', 'border-spin', 'border-spin-fast', 'border-spin-longer',
    ];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id} should have gradient layers`).toContain('gradient');
    }
  });
});

// ---------------------------------------------------------------------------
// Full colour palette
// ---------------------------------------------------------------------------

test.describe('hatch — full Tailwind colour palette', () => {
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

  test('blue scale 50–950 shows luminance gradient (lighter to darker)', async ({ page }) => {
    await gotoPage(page);
    const shades = ['blue-50', 'blue-200', 'blue-500', 'blue-800', 'blue-950'];
    const c = await extractRenderedColors(page, shades);
    // Overall trend: blue-50 should be lighter than blue-950
    expect(c['blue-50'].luminance).toBeGreaterThan(c['blue-950'].luminance);
    // Check monotonic decrease across sampled shades
    for (let i = 1; i < shades.length; i++) {
      expect(
        c[shades[i]].luminance,
        `${shades[i]} should be <= ${shades[i - 1]}`,
      ).toBeLessThanOrEqual(c[shades[i - 1]].luminance + 0.05);
    }
  });
});
