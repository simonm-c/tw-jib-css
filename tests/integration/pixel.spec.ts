import { test, expect, type Page } from '@playwright/test';
import {
  extractRenderedColors,
  extractStyles,
  gotoExample,
  splitLayers,
  type ElementStyles,
} from './helpers';

/** Layer order: ripple, row-mask, R, G, B, black-base, border-gradient. All
 *  gradients, the unused ones from @property initial-values. */
const PIXEL_LAYERS = 7;

function expectPixelLayers(styles: Record<string, ElementStyles>, ids: string[]) {
  for (const id of ids) {
    expect(styles[id].backgroundImage, `${id} should not fall back to none`).not.toBe('none');
    expect(styles[id].layerCount, `${id} should composite ${PIXEL_LAYERS} gradient layers`).toBe(
      PIXEL_LAYERS,
    );
  }
}

/** Darkest stop = bloom row ratio as a grey level, so the minimum channel
 *  recovers the ratio. */
function rowMaskMidGrey(backgroundImage: string): number {
  const rowMask = splitLayers(backgroundImage)[1] ?? '';
  const greys = [...rowMask.matchAll(/rgba?\((\d+),\s*(\d+),\s*(\d+)/g)].map((m) => Number(m[1]));
  expect(greys.length, 'row mask should expose colour stops').toBeGreaterThan(0);
  return Math.min(...greys);
}

/** Ratio rides on the mid stops' alpha; an omitted alpha serialises as no
 *  `/ n`, which means 1. */
function channelMidAlpha(backgroundImage: string): number {
  const channel = splitLayers(backgroundImage)[2] ?? '';
  const alphas = [...channel.matchAll(/\/\s*([0-9.]+)/g)].map((m) => Number(m[1]));
  return alphas.length ? Math.min(...alphas) : 1;
}

const PAGE = 'examples/pixel';

async function gotoPage(page: Page) {
  await gotoExample(page, PAGE, 'white');
}
test.describe('bg-pixel: primary colours render', () => {
  test('all primary colours produce gradient layers', async ({ page }) => {
    await gotoPage(page);
    const ids = ['white', 'black', 'red', 'green', 'blue', 'cyan', 'magenta', 'yellow'];
    expectPixelLayers(await extractStyles(page, ids), ids);
  });

  test('white pixel is lighter than black pixel', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const colors = await extractRenderedColors(page, ['white', 'black']);
    // Assert
    expect(colors['white'].luminance).toBeGreaterThan(colors['black'].luminance);
  });
});

test.describe('pixel-size: size variations', () => {
  test('all size variants render with gradients', async ({ page }) => {
    await gotoPage(page);
    const ids = ['size-1', 'size-2', 'size-3', 'size-4', 'size-6'];
    expectPixelLayers(await extractStyles(page, ids), ids);
  });
});

test.describe('pixel-gap: gap variations', () => {
  test('all gap variants render', async ({ page }) => {
    await gotoPage(page);
    const ids = ['gap-0.5', 'gap-1', 'gap-1.5', 'gap-2', 'gap-4', 'gap-6'];
    expectPixelLayers(await extractStyles(page, ids), ids);
  });
});

test.describe('pixel-bloom: bloom variations', () => {
  test('all bloom variants render', async ({ page }) => {
    await gotoPage(page);
    const ids = ['bloom-0', 'bloom-1', 'bloom-2', 'bloom-3', 'bloom-4'];
    expectPixelLayers(await extractStyles(page, ids), ids);
  });

  test('bloom + size combinations render', async ({ page }) => {
    await gotoPage(page);
    const ids = [
      'bloom-size1-b0',
      'bloom-size1-b1',
      'bloom-size2-b0',
      'bloom-size2-b1',
      'bloom-size3-b0',
      'bloom-size3-b1',
    ];
    expectPixelLayers(await extractStyles(page, ids), ids);
  });

  /*
   * From the geometry, not read off a browser. pixel-size-1 (w = 1px), gap-1:
   *   row cap = gap/2 = 0.5px          → mid = (b - 0.5) / b
   *   col cap = w + eps + gap/2 = 2px  → mid = (b - 2) / (b - 2 + 2)
   */
  test('row-mask mid stop follows the bloom overflow ratio', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['bloom-0', 'bloom-1', 'bloom-2', 'bloom-3', 'bloom-4'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    expectPixelLayers(styles, ids);

    const expected = [0, 0.5, 0.75, 5 / 6, 0.875].map((r) => r * 255);
    const greys = ids.map((id) => rowMaskMidGrey(styles[id].backgroundImage));

    for (const [i, id] of ids.entries()) {
      // engine rounding, e.g. 127 vs 128 at bloom-1
      expect(
        Math.abs(greys[i] - expected[i]),
        `${id} row-mask mid grey: got ${greys[i]}, want ~${expected[i].toFixed(1)}`,
      ).toBeLessThanOrEqual(2);
    }
    for (let i = 1; i < greys.length; i++) {
      expect(greys[i], `bloom-${i} mid grey > bloom-${i - 1}`).toBeGreaterThan(greys[i - 1]);
    }
  });

  test('channel mid alpha stays 0 below the column cap and rises above it', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['bloom-0', 'bloom-1', 'bloom-2', 'bloom-3', 'bloom-4'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    expectPixelLayers(styles, ids);

    const alphas = ids.map((id) => channelMidAlpha(styles[id].backgroundImage));

    expect(alphas[0], 'bloom-0 channel mid alpha').toBeCloseTo(0, 3);
    expect(alphas[1], 'bloom-1 channel mid alpha').toBeCloseTo(0, 3);
    expect(alphas[2], 'bloom-2 channel mid alpha').toBeCloseTo(0, 3);
    expect(alphas[3], 'bloom-3 channel mid alpha').toBeCloseTo(1 / 3, 2);
    expect(alphas[4], 'bloom-4 channel mid alpha').toBeCloseTo(0.5, 2);
  });
});

test.describe('bg-pixel opacity modifier', () => {
  test('all opacity variants render', async ({ page }) => {
    await gotoPage(page);
    const ids = [
      'opacity-100',
      'opacity-75',
      'opacity-50',
      'opacity-25',
      'opacity-10',
      'opacity-0',
    ];
    expectPixelLayers(await extractStyles(page, ids), ids);
  });
});

test.describe('pixel + border gradient composition', () => {
  test('linear border directions render with gradients', async ({ page }) => {
    await gotoPage(page);
    const ids = ['border-linear-r', 'border-linear-b', 'border-linear-br', 'border-linear-angle'];
    expectPixelLayers(await extractStyles(page, ids), ids);
  });

  test('radial and conic border variants render', async ({ page }) => {
    await gotoPage(page);
    const ids = ['border-radial', 'border-conic-0', 'border-conic-90', 'border-conic-180'];
    expectPixelLayers(await extractStyles(page, ids), ids);
  });

  test('border-spin variants render', async ({ page }) => {
    await gotoPage(page);
    const ids = [
      'border-spin-default',
      'border-spin-fast',
      'border-spin-slow',
      'border-spin-longer',
    ];
    expectPixelLayers(await extractStyles(page, ids), ids);
  });

  test('border via and interpolation variants render', async ({ page }) => {
    await gotoPage(page);
    const ids = [
      'border-via-linear',
      'border-via-conic',
      'border-via-radial',
      'border-interp-oklch',
      'border-interp-hsl',
      'border-interp-longer',
      'border-interp-shorter',
    ];
    expectPixelLayers(await extractStyles(page, ids), ids);
  });
});

test.describe('pixel: colour scales', () => {
  test('bloom colour comparison: representative colours render', async ({ page }) => {
    await gotoPage(page);
    const colors = ['red', 'blue', 'green', 'amber', 'cyan', 'violet', 'pink', 'slate'];
    const ids = colors.flatMap((c) => [`bloom-color-${c}-0`, `bloom-color-${c}-1`]);
    expectPixelLayers(await extractStyles(page, ids), ids);
  });

  test('blue scale 50–950 shows luminance gradient', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const shades = ['blue-50', 'blue-200', 'blue-500', 'blue-800', 'blue-950'];
    // Act
    const colors = await extractRenderedColors(page, shades);
    // Assert
    expect(colors['blue-50'].luminance).toBeGreaterThan(colors['blue-950'].luminance);
  });
});

test.describe('bg-pixel: whole-page coverage', () => {
  test('every bg-pixel element on the page renders its full layer stack', async ({ page }) => {
    await gotoPage(page);

    const report = await page.evaluate((expectedLayers) => {
      const els = [...document.querySelectorAll('[data-test]')].filter((el) =>
        /(^|\s)bg-pixel-\S+/.test(el.className),
      );
      const broken: Array<{ id: string; layers: number }> = [];
      for (const el of els) {
        const bi = getComputedStyle(el).backgroundImage;
        const layers = bi === 'none' ? 0 : bi.split('gradient(').length - 1;
        if (layers !== expectedLayers) {
          broken.push({ id: el.getAttribute('data-test') ?? '?', layers });
        }
      }
      return { total: els.length, broken: broken.slice(0, 12), brokenCount: broken.length };
    }, PIXEL_LAYERS);

    expect(report.total, 'fixture should expose bg-pixel elements to sweep').toBeGreaterThan(300);
    expect(
      report.brokenCount,
      `${report.brokenCount}/${report.total} bg-pixel elements are not compositing ${PIXEL_LAYERS} layers. First few: ${JSON.stringify(report.broken)}`,
    ).toBe(0);
  });

  test('pixel elements blend their channel layers additively', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const styles = await extractStyles(page, ['blue-500']);
    // Assert
    expectPixelLayers(styles, ['blue-500']);
    expect(styles['blue-500'].blendMode, 'row mask should multiply').toContain('multiply');
    expect(
      styles['blue-500'].blendMode.match(/screen/g)?.length,
      'all three channel layers should screen',
    ).toBe(3);
  });
});
