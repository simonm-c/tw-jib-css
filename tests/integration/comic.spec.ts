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

const PAGE = 'examples/comic';

async function gotoPage(page: Page) {
  await page.goto(PAGE, { waitUntil: 'networkidle' });
  await page.locator('[data-test="black"]').waitFor();
}

// ---------------------------------------------------------------------------
// Primary colours
// ---------------------------------------------------------------------------

test.describe('bg-comic — primary colours render', () => {
  test('all primary colours produce gradient layers', async ({ page }) => {
    await gotoPage(page);
    const ids = ['black', 'white', 'red', 'green', 'blue', 'cyan', 'magenta', 'yellow'];
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
// Dot size variations
// ---------------------------------------------------------------------------

test.describe('comic-dot — dot size variations', () => {
  test('all dot size variants render with gradients', async ({ page }) => {
    await gotoPage(page);
    const ids = ['dot-0.5', 'dot-1', 'dot-1.5', 'dot-2', 'dot-3'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].exists, `${id} should exist`).toBe(true);
      expect(s[id].backgroundImage, `${id} should have gradient`).toContain('gradient');
    }
  });
});

// ---------------------------------------------------------------------------
// Gap variations
// ---------------------------------------------------------------------------

test.describe('comic-gap — gap variations', () => {
  test('all gap variants render', async ({ page }) => {
    await gotoPage(page);
    const ids = ['gap-0', 'gap-1', 'gap-2', 'gap-4', 'gap-8', 'gap-16'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].exists, `${id} should exist`).toBe(true);
      expect(s[id].backgroundImage, `${id} should have gradient`).toContain('gradient');
    }
  });
});

// ---------------------------------------------------------------------------
// Bleed variations
// ---------------------------------------------------------------------------

test.describe('comic-bleed — bleed variations', () => {
  test('all bleed variants render', async ({ page }) => {
    await gotoPage(page);
    const ids = ['bleed-0', 'bleed-0.5', 'bleed-1', 'bleed-1.5', 'bleed-2'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].exists, `${id} should exist`).toBe(true);
    }
  });
});

// ---------------------------------------------------------------------------
// Opacity
// ---------------------------------------------------------------------------

test.describe('bg-comic opacity modifier', () => {
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
// Dot + gap combinations
// ---------------------------------------------------------------------------

test.describe('comic dot + gap combinations', () => {
  test('representative dot+gap combos render', async ({ page }) => {
    await gotoPage(page);
    const ids = ['d05-g1', 'd05-g4', 'd1-g2', 'd1-g8', 'd2-g4', 'd2-g16', 'd3-g8', 'd3-g32'];
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

test.describe('comic + border gradient composition', () => {
  test('linear border directions render with gradients', async ({ page }) => {
    await gotoPage(page);
    const ids = ['border-linear-r', 'border-linear-b', 'border-linear-br', 'border-linear-angle'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id} should have gradient layers`).toContain('gradient');
    }
  });

  test('radial and conic border variants render', async ({ page }) => {
    await gotoPage(page);
    const ids = ['border-radial', 'border-conic-0', 'border-conic-90'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id} should have gradient layers`).toContain('gradient');
    }
  });

  test('border-spin variants render', async ({ page }) => {
    await gotoPage(page);
    const ids = ['border-spin-default', 'border-spin-fast', 'border-spin-slow', 'border-spin-longer'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id} should have gradient layers`).toContain('gradient');
    }
  });

  test('border via and interpolation variants render', async ({ page }) => {
    await gotoPage(page);
    const ids = ['border-via-linear', 'border-via-conic', 'border-via-radial',
      'border-interp-oklch', 'border-interp-hsl', 'border-interp-longer', 'border-interp-shorter'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id} should have gradient layers`).toContain('gradient');
    }
  });
});

// ---------------------------------------------------------------------------
// Full colour palette
// ---------------------------------------------------------------------------

test.describe('comic — full Tailwind colour palette', () => {
  test('all compare-* colours render with gradients', async ({ page }) => {
    await gotoPage(page);
    const colors = [
      'compare-slate', 'compare-gray', 'compare-zinc', 'compare-neutral', 'compare-stone',
      'compare-red', 'compare-orange', 'compare-amber', 'compare-yellow',
      'compare-lime', 'compare-green', 'compare-emerald', 'compare-teal',
      'compare-cyan', 'compare-sky', 'compare-blue', 'compare-indigo',
      'compare-violet', 'compare-purple', 'compare-fuchsia', 'compare-pink', 'compare-rose',
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
});
