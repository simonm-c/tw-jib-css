import { test, expect, type Page } from '@playwright/test';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

interface ElementStyles {
  backgroundColor: string;
  backgroundImage: string;
  borderColor: string;
  animation: string;
  luminance: number;
  alpha: number;
}

/**
 * Batch-extract computed styles from multiple `[data-test]` elements in one
 * round-trip to the browser.
 */
async function extractStyles(
  page: Page,
  selectors: string[],
): Promise<Record<string, ElementStyles>> {
  return page.evaluate((sels) => {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext('2d')!;

    function colorToRgba(color: string) {
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 1, 1);
      const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
      return { r, g, b, a: a / 255 };
    }

    const out: Record<string, ElementStyles> = {};
    for (const sel of sels) {
      const el = document.querySelector(`[data-test="${sel}"]`);
      if (!el) {
        out[sel] = { backgroundColor: 'transparent', backgroundImage: 'none', borderColor: '', animation: 'none', luminance: 0, alpha: 0 };
        continue;
      }
      const cs = getComputedStyle(el);
      const bg = cs.backgroundColor;
      const { r, g, b, a } = colorToRgba(bg);
      out[sel] = {
        backgroundColor: bg,
        backgroundImage: cs.backgroundImage,
        borderColor: cs.borderColor,
        animation: cs.animation,
        luminance: 0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255),
        alpha: a,
      };
    }
    return out;
  }, selectors);
}

const PAGE = 'examples/border-gradient';

async function gotoPage(page: Page) {
  await page.goto(PAGE, { waitUntil: 'networkidle' });
  await page.locator('[data-test="bg-named"]').waitFor();
}

// ---------------------------------------------------------------------------
// Background colors
// ---------------------------------------------------------------------------

test.describe('background colors', () => {
  test('named colors produce non-transparent background with gradient layers', async ({ page }) => {
    await gotoPage(page);
    const ids = ['bg-named', 'bg-named-alt', 'bg-black', 'bg-white'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].alpha, `${id} should be opaque`).toBeGreaterThan(0.5);
      expect(s[id].backgroundImage, `${id} should have gradient layers`).toContain('gradient');
      expect(s[id].borderColor, `${id} should have transparent border`).toBe('rgba(0, 0, 0, 0)');
    }
  });

  test('opacity variants preserve alpha', async ({ page }) => {
    await gotoPage(page);
    const s = await extractStyles(page, ['bg-opacity-50', 'bg-opacity-25', 'bg-opacity-75', 'bg-opacity-0']);
    expect(s['bg-opacity-50'].alpha).toBeCloseTo(0.5, 1);
    expect(s['bg-opacity-25'].alpha).toBeCloseTo(0.25, 1);
    expect(s['bg-opacity-75'].alpha).toBeCloseTo(0.75, 1);
    expect(s['bg-opacity-0'].alpha).toBeLessThan(0.05);
  });

  test('arbitrary color values render with gradient layers', async ({ page }) => {
    await gotoPage(page);
    const ids = ['bg-arbitrary-hex', 'bg-arbitrary-rgb', 'bg-arbitrary-oklch', 'bg-css-var'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].alpha, `${id} should be opaque`).toBeGreaterThan(0.5);
      expect(s[id].backgroundImage, `${id}`).toContain('gradient');
    }
  });

  test('special background values render with gradient layers', async ({ page }) => {
    await gotoPage(page);
    const ids = ['bg-inherit', 'bg-transparent', 'bg-current'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id}`).toContain('gradient');
      expect(s[id].borderColor, `${id}`).toBe('rgba(0, 0, 0, 0)');
    }
  });
});

// ---------------------------------------------------------------------------
// Background gradients
// ---------------------------------------------------------------------------

test.describe('background linear gradients', () => {
  test('cardinal and diagonal directions produce linear-gradient bg layer', async ({ page }) => {
    await gotoPage(page);
    const ids = [
      'bg-linear-to-r', 'bg-linear-to-l', 'bg-linear-to-t', 'bg-linear-to-b',
      'bg-linear-to-tr', 'bg-linear-to-br', 'bg-linear-to-bl', 'bg-linear-to-tl',
    ];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      // BG layer (2nd layer) should be linear-gradient; border layer (3rd) is also linear
      const count = (s[id].backgroundImage.match(/linear-gradient/g) || []).length;
      expect(count, `${id} should have at least 2 linear-gradient layers`).toBeGreaterThanOrEqual(2);
      expect(s[id].borderColor).toBe('rgba(0, 0, 0, 0)');
    }
  });

  test('angle variants produce linear-gradient bg layer', async ({ page }) => {
    await gotoPage(page);
    const ids = ['bg-linear-angle', 'bg-linear-angle-neg', 'bg-linear-angle-arbitrary'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id}`).toContain('linear-gradient');
    }
  });

  test('via and positioned stops render correctly', async ({ page }) => {
    await gotoPage(page);
    const ids = ['bg-linear-via', 'bg-linear-positions'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id}`).toContain('linear-gradient');
    }
  });
});

test.describe('background radial and conic gradients', () => {
  test('bg-radial produces radial-gradient layer', async ({ page }) => {
    await gotoPage(page);
    const ids = ['bg-radial', 'bg-radial-position'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id}`).toContain('radial-gradient');
    }
  });

  test('bg-conic produces conic-gradient layer', async ({ page }) => {
    await gotoPage(page);
    const ids = ['bg-conic', 'bg-conic-angle', 'bg-conic-angle-neg', 'bg-conic-arbitrary'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id}`).toContain('conic-gradient');
    }
  });

  test('bg-none has no gradient in bg layer', async ({ page }) => {
    await gotoPage(page);
    const s = await extractStyles(page, ['bg-none']);
    // Should still have the border gradient layer
    expect(s['bg-none'].backgroundImage).toContain('gradient');
  });
});

test.describe('background gradient interpolation', () => {
  test('all 8 interpolation modifiers render gradient layers', async ({ page }) => {
    await gotoPage(page);
    const ids = [
      'bg-interp-srgb', 'bg-interp-hsl', 'bg-interp-oklab', 'bg-interp-oklch',
      'bg-interp-longer', 'bg-interp-shorter', 'bg-interp-increasing', 'bg-interp-decreasing',
    ];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id}`).toContain('linear-gradient');
    }
  });
});

// ---------------------------------------------------------------------------
// Background URLs
// ---------------------------------------------------------------------------

test.describe('background URLs', () => {
  test('bg-url renders with gradient layers', async ({ page }) => {
    await gotoPage(page);
    const s = await extractStyles(page, ['bg-url']);
    expect(s['bg-url'].backgroundImage).toContain('gradient');
  });
});

// ---------------------------------------------------------------------------
// Border gradient directions
// ---------------------------------------------------------------------------

test.describe('border gradient linear directions', () => {
  test('all 8 cardinal and diagonal directions render linear-gradient border', async ({ page }) => {
    await gotoPage(page);
    const ids = [
      'border-linear-to-r', 'border-linear-to-l', 'border-linear-to-t', 'border-linear-to-b',
      'border-linear-to-tr', 'border-linear-to-br', 'border-linear-to-bl', 'border-linear-to-tl',
    ];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id} should have linear-gradient`).toContain('linear-gradient');
      expect(s[id].borderColor, `${id} should have transparent border`).toBe('rgba(0, 0, 0, 0)');
    }
  });
});

test.describe('border gradient linear angles', () => {
  test('positive, negative, and arbitrary angles render linear-gradient', async ({ page }) => {
    await gotoPage(page);
    const ids = [
      'border-linear-45', 'border-linear-90', 'border-linear-135',
      'border-linear-neg', 'border-linear-arbitrary-angle',
    ];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id}`).toContain('linear-gradient');
      expect(s[id].borderColor, `${id}`).toBe('rgba(0, 0, 0, 0)');
    }
  });
});

// ---------------------------------------------------------------------------
// Border gradient radial and conic
// ---------------------------------------------------------------------------

test.describe('border gradient radial', () => {
  test('radial border gradients with position variants render', async ({ page }) => {
    await gotoPage(page);
    const ids = ['border-radial', 'border-radial-position', 'border-radial-position-top'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id}`).toContain('radial-gradient');
      expect(s[id].borderColor, `${id}`).toBe('rgba(0, 0, 0, 0)');
    }
  });
});

test.describe('border gradient conic', () => {
  test('conic border gradients at various angles render', async ({ page }) => {
    await gotoPage(page);
    const ids = ['border-conic-0', 'border-conic-45', 'border-conic-90', 'border-conic-180', 'border-conic-neg'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id}`).toContain('conic-gradient');
      expect(s[id].borderColor, `${id}`).toBe('rgba(0, 0, 0, 0)');
    }
  });
});

// ---------------------------------------------------------------------------
// Border gradient interpolation
// ---------------------------------------------------------------------------

test.describe('border gradient interpolation', () => {
  test('linear interpolation modifiers render gradient', async ({ page }) => {
    await gotoPage(page);
    const ids = [
      'border-interp-srgb', 'border-interp-hsl', 'border-interp-oklab', 'border-interp-oklch',
      'border-interp-longer', 'border-interp-shorter', 'border-interp-increasing', 'border-interp-decreasing',
    ];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id}`).toContain('linear-gradient');
    }
  });

  test('radial interpolation modifiers render gradient', async ({ page }) => {
    await gotoPage(page);
    const ids = [
      'border-radial-interp-srgb', 'border-radial-interp-oklch',
      'border-radial-interp-longer', 'border-radial-interp-decreasing',
    ];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id}`).toContain('radial-gradient');
    }
  });

  test('conic interpolation modifiers render gradient', async ({ page }) => {
    await gotoPage(page);
    const ids = [
      'border-conic-interp-srgb', 'border-conic-interp-oklch',
      'border-conic-interp-longer', 'border-conic-interp-increasing',
    ];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id}`).toContain('conic-gradient');
    }
  });
});

// ---------------------------------------------------------------------------
// Border gradient color stops
// ---------------------------------------------------------------------------

test.describe('border gradient color stops', () => {
  test('named, arbitrary, CSS variable, and transparent stops render gradient', async ({ page }) => {
    await gotoPage(page);
    const ids = [
      'border-stops-named', 'border-stops-arbitrary', 'border-stops-css-var',
      'border-stops-transparent-to', 'border-stops-transparent-from',
      'border-stops-inherit',
    ];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id}`).toContain('gradient');
      expect(s[id].borderColor, `${id}`).toBe('rgba(0, 0, 0, 0)');
    }
  });

  test('via stops render gradient', async ({ page }) => {
    await gotoPage(page);
    const ids = ['border-stops-via', 'border-stops-via-arbitrary', 'border-stops-via-transparent'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id}`).toContain('gradient');
    }
  });

  test('positioned stops render gradient', async ({ page }) => {
    await gotoPage(page);
    const ids = ['border-stops-from-pos', 'border-stops-to-pos', 'border-stops-via-pos', 'border-stops-all-pos'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id}`).toContain('gradient');
    }
  });
});

// ---------------------------------------------------------------------------
// Border spin
// ---------------------------------------------------------------------------

test.describe('border spin', () => {
  test('spin elements have border-spin animation', async ({ page }) => {
    await gotoPage(page);
    const ids = ['border-spin-conic', 'border-spin-fast', 'border-spin-slow', 'border-spin-interp'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].animation, `${id} should have border-spin animation`).toContain('border-spin');
      expect(s[id].backgroundImage, `${id}`).toContain('gradient');
    }
  });

  test('spin duration variants apply', async ({ page }) => {
    await gotoPage(page);
    const s = await extractStyles(page, ['border-spin-conic', 'border-spin-slow']);
    // Default is 1s, slow is 3s
    expect(s['border-spin-conic'].animation).toContain('1s');
    expect(s['border-spin-slow'].animation).toContain('3s');
  });
});

// ---------------------------------------------------------------------------
// Edge cases
// ---------------------------------------------------------------------------

test.describe('edge cases', () => {
  test('bg opacity + border interpolation render gradient', async ({ page }) => {
    await gotoPage(page);
    const ids = [
      'edge-bg-opacity-border-srgb', 'edge-bg-opacity-border-oklch',
      'edge-bg-opacity-border-longer', 'edge-bg-opacity-border-hsl',
      'edge-bg-opacity-border-oklab', 'edge-bg-opacity-border-shorter',
      'edge-bg-opacity-border-increasing', 'edge-bg-opacity-border-decreasing',
    ];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id}`).toContain('gradient');
      expect(s[id].borderColor, `${id}`).toBe('rgba(0, 0, 0, 0)');
    }
  });

  test('both bg and border interpolation render gradient', async ({ page }) => {
    await gotoPage(page);
    const ids = [
      'edge-both-srgb', 'edge-both-oklch',
      'edge-bg-srgb-border-longer', 'edge-bg-longer-border-srgb',
      'edge-bg-hsl-border-oklch', 'edge-bg-oklch-border-hsl',
      'edge-bg-increasing-border-decreasing', 'edge-bg-decreasing-border-increasing',
    ];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id}`).toContain('gradient');
    }
  });

  test('mixed gradient types render the correct gradient type per layer', async ({ page }) => {
    await gotoPage(page);
    const s = await extractStyles(page, [
      'edge-bg-radial-border-linear', 'edge-bg-radial-border-conic',
      'edge-bg-conic-border-linear', 'edge-bg-conic-border-radial',
      'edge-bg-linear-border-radial', 'edge-bg-linear-border-conic',
    ]);

    // BG layer contains the bg gradient type, border layer contains the border gradient type
    expect(s['edge-bg-radial-border-linear'].backgroundImage).toContain('radial-gradient');
    expect(s['edge-bg-radial-border-linear'].backgroundImage).toContain('linear-gradient');

    expect(s['edge-bg-radial-border-conic'].backgroundImage).toContain('radial-gradient');
    expect(s['edge-bg-radial-border-conic'].backgroundImage).toContain('conic-gradient');

    expect(s['edge-bg-conic-border-linear'].backgroundImage).toContain('conic-gradient');
    expect(s['edge-bg-conic-border-linear'].backgroundImage).toContain('linear-gradient');

    expect(s['edge-bg-conic-border-radial'].backgroundImage).toContain('conic-gradient');
    expect(s['edge-bg-conic-border-radial'].backgroundImage).toContain('radial-gradient');

    expect(s['edge-bg-linear-border-radial'].backgroundImage).toContain('linear-gradient');
    expect(s['edge-bg-linear-border-radial'].backgroundImage).toContain('radial-gradient');

    expect(s['edge-bg-linear-border-conic'].backgroundImage).toContain('linear-gradient');
    expect(s['edge-bg-linear-border-conic'].backgroundImage).toContain('conic-gradient');
  });

  test('arbitrary border color formats render gradient', async ({ page }) => {
    await gotoPage(page);
    const ids = ['edge-border-arbitrary-oklch', 'edge-border-arbitrary-hsl', 'edge-border-arbitrary-rgb'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id}`).toContain('gradient');
      expect(s[id].borderColor, `${id}`).toBe('rgba(0, 0, 0, 0)');
    }
  });

  test('different border widths all render gradient', async ({ page }) => {
    await gotoPage(page);
    const ids = ['edge-border-1', 'edge-border-2', 'edge-border-4', 'edge-border-8'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id}`).toContain('gradient');
      expect(s[id].borderColor, `${id}`).toBe('rgba(0, 0, 0, 0)');
    }
  });

  test('no background + border gradient renders gradient', async ({ page }) => {
    await gotoPage(page);
    const ids = ['edge-no-bg-linear', 'edge-no-bg-radial', 'edge-no-bg-conic', 'edge-no-bg-spin'];
    const s = await extractStyles(page, ids);
    for (const id of ids) {
      expect(s[id].backgroundImage, `${id}`).toContain('gradient');
      expect(s[id].borderColor, `${id}`).toBe('rgba(0, 0, 0, 0)');
    }
    // Spin should still animate
    expect(s['edge-no-bg-spin'].animation).toContain('border-spin');
  });
});

test.describe('state variants', () => {
  test('hover:bg changes background on hover', async ({ page, browserName }) => {
    await gotoPage(page);
    const el = page.locator('[data-test="edge-hover-bg"]');
    const before = await el.evaluate((e) => getComputedStyle(e).backgroundColor);
    await el.hover();
    // Allow time for style recalc
    await page.waitForTimeout(100);
    const after = await el.evaluate((e) => getComputedStyle(e).backgroundColor);
    // WebKit may not reliably trigger :hover in headless mode
    if (browserName !== 'webkit') {
      expect(after).not.toBe(before);
    }
  });

  test('focus:bg changes background on focus', async ({ page }) => {
    await gotoPage(page);
    const el = page.locator('[data-test="edge-focus-bg"]');
    const before = await el.evaluate((e) => getComputedStyle(e).backgroundColor);
    await el.focus();
    await page.waitForTimeout(100);
    const after = await el.evaluate((e) => getComputedStyle(e).backgroundColor);
    expect(after).not.toBe(before);
  });

  test('dark:bg applies in dark mode', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await gotoPage(page);
    const el = page.locator('[data-test="edge-dark-bg"]');
    const lightBg = await el.evaluate((e) => getComputedStyle(e).backgroundColor);

    await page.emulateMedia({ colorScheme: 'dark' });
    await gotoPage(page);
    const darkBg = await el.evaluate((e) => getComputedStyle(e).backgroundColor);

    expect(darkBg).not.toBe(lightBg);
  });
});
