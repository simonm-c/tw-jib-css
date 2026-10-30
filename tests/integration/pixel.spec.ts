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

/** A radial layer's two radii, in px, as the engine computed them. */
function radii(layer: string): [number, number] {
  const m = /radial-gradient\(([\d.]+)px ([\d.]+)px/.exec(layer);
  expect(m, `layer should open with two px radii: ${layer.slice(0, 80)}`).not.toBeNull();
  return [Number(m![1]), Number(m![2])];
}

/** The colour hint between a radial layer's two stops, as a fraction of its radius. */
function hint(layer: string): number {
  const m = /,\s*([\d.]+)%,/.exec(layer);
  expect(m, `layer should carry a colour hint: ${layer.slice(0, 120)}`).not.toBeNull();
  return Number(m![1]) / 100;
}

/** A later background shorthand that resets the geometry leaves each layer one
 *  element-sized tile: a single phosphor mid-element. */
function expectPixelTiling(styles: Record<string, ElementStyles>, ids: string[]) {
  for (const id of ids) {
    const sizes = splitLayers(styles[id].backgroundSize);
    const positions = splitLayers(styles[id].backgroundPosition);
    for (const [name, at] of [
      ['row mask', 1],
      ['red', 2],
      ['green', 3],
      ['blue', 4],
    ] as const) {
      const [width, height] = sizes[at].split(' ');
      expect(width, `${id}: the ${name} tiles one cell, not the whole element`).not.toBe('auto');
      expect(height, `${id}: the ${name} cell is square`).toBe(width);
    }
    expect(positions[3], `${id}: green sits one channel along from red`).not.toBe(positions[2]);
    expect(positions[4], `${id}: blue sits one channel along from green`).not.toBe(positions[3]);
  }
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

  const ROW_MASK = 1;
  const RED = 2;
  const BLOOMS = [0, 1, 2, 3, 4] as const;

  test('a channel glows exactly the bloom past its phosphor edge', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = BLOOMS.map((b) => `bloom-${b}`);
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    expectPixelLayers(styles, ids);
    for (const b of BLOOMS) {
      const [across] = radii(splitLayers(styles[`bloom-${b}`].backgroundImage)[RED]);
      expect(across, `bloom-${b}: half the 1px phosphor plus ${b}px of bloom`).toBeCloseTo(
        0.5 + b,
        3,
      );
    }
  });

  test('a row glows exactly the bloom past its phosphor edge, the same reach as a channel', async ({
    page,
  }) => {
    // Arrange
    await gotoPage(page);
    const ids = BLOOMS.map((b) => `bloom-${b}`);
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    expectPixelLayers(styles, ids);
    for (const b of BLOOMS) {
      const [, down] = radii(splitLayers(styles[`bloom-${b}`].backgroundImage)[ROW_MASK]);
      expect(down, `bloom-${b}: half the 4px phosphor height plus ${b}px of bloom`).toBeCloseTo(
        2 + b,
        3,
      );
    }
  });

  test('bloom-0 lands every hint on the last stop, a hard-edged rectangle', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const styles = await extractStyles(page, ['bloom-0']);
    const layers = splitLayers(styles['bloom-0'].backgroundImage);
    // Assert
    expect(hint(layers[ROW_MASK]), 'the row mask steps straight from white to black').toBeCloseTo(
      1,
      4,
    );
    expect(hint(layers[RED]), 'the channel steps straight from colour to transparent').toBeCloseTo(
      1,
      4,
    );
  });

  test('no hint drops below √½, so the glow never sharpens past a parabola', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = BLOOMS.map((b) => `bloom-${b}`);
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const b of BLOOMS) {
      const layers = splitLayers(styles[`bloom-${b}`].backgroundImage);
      for (const [name, at] of [
        ['row mask', ROW_MASK],
        ['red channel', RED],
      ] as const) {
        expect(hint(layers[at]), `bloom-${b} ${name} hint`).toBeGreaterThanOrEqual(
          Math.SQRT1_2 - 1e-4,
        );
      }
    }
  });

  test('while above the floor, the hint keeps ¾ of the colour at the phosphor edge', async ({
    page,
  }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const styles = await extractStyles(page, ['bloom-size2-b1']);
    const rowMask = splitLayers(styles['bloom-size2-b1'].backgroundImage)[ROW_MASK];
    const [, reach] = radii(rowMask);
    const edge = 4 / reach;
    // Assert
    expect(
      Math.pow(edge, Math.log(0.5) / Math.log(hint(rowMask))),
      'a hint at h bends the fade to t^(ln ½ / ln h); at the 8px phosphor’s edge that is ¼ faded',
    ).toBeCloseTo(0.25, 3);
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

test.describe('pixel: bg-position anchors the channels', () => {
  const ROW_MASK = 1;
  const RED = 2;
  const GREEN = 3;

  const ANCHORS = [
    ['anchor-default', '0% 0%'],
    ['anchor-center', '50% 50%'],
    ['anchor-bottom-right', '100% 100%'],
    ['anchor-arbitrary', '0% 0%'],
  ] as const;

  for (const [id, position] of ANCHORS) {
    test(`${id} puts the row mask and red channel at ${position}`, async ({ page }) => {
      // Arrange
      await gotoPage(page);
      // Act
      const styles = await extractStyles(page, [id]);
      const layers = splitLayers(styles[id].backgroundPosition);
      // Assert
      expectPixelLayers(styles, [id]);
      expect(layers[ROW_MASK], `${id}: the row mask sits on the bg-position anchor`).toBe(position);
      expect(layers[RED], `${id}: red sits on the bg-position anchor`).toBe(position);
    });
  }

  test('bg-center offsets green from the centre, not from the corner', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const styles = await extractStyles(page, ['anchor-center']);
    const layers = splitLayers(styles['anchor-center'].backgroundPosition);
    // Assert
    expect(layers[GREEN], 'green is measured from the 50% anchor').toContain('50%');
    expect(layers[GREEN], 'green keeps its channel offset from red').not.toBe(layers[RED]);
  });
});

test.describe('pixel + border gradient composition', () => {
  test('a border gradient leaves every channel on its own tile and offset', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = [
      'border-linear-r',
      'border-linear-b',
      'border-radial',
      'border-conic-0',
      'border-spin-default',
      'border-via-linear',
      'border-interp-oklch',
    ];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    expectPixelTiling(styles, ids);
  });

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

test.describe('pixel + ripple composition', () => {
  test('bg-ripple leaves every channel on its own tile and offset', async ({ page }) => {
    // Arrange
    await gotoExample(page, 'examples/ripple', 'pixel-white');
    const ids = ['pixel-white', 'pixel-blue'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    expectPixelTiling(styles, ids);
  });
});
