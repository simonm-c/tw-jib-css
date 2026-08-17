import { test, expect, type Page } from '@playwright/test';
import { extractStyles, gotoExample, expectBorderGradient } from './helpers';

const PAGE = 'examples/border-gradient';

async function gotoPage(page: Page) {
  await gotoExample(page, PAGE, 'bg-named');
}

test.describe('background colors', () => {
  test('named colors produce non-transparent background with gradient layers', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['bg-named', 'bg-named-alt', 'bg-black', 'bg-white'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expect(styles[id].alpha, `${id} should be opaque`).toBeGreaterThan(0.5);
      expectBorderGradient(styles, [id]);
      expect(styles[id].borderColor, `${id} should have transparent border`).toBe(
        'rgba(0, 0, 0, 0)',
      );
    }
  });

  test('opacity variants preserve alpha', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const styles = await extractStyles(page, [
      'bg-opacity-50',
      'bg-opacity-25',
      'bg-opacity-75',
      'bg-opacity-0',
    ]);
    // Assert
    expect(styles['bg-opacity-50'].alpha).toBeCloseTo(0.5, 1);
    expect(styles['bg-opacity-25'].alpha).toBeCloseTo(0.25, 1);
    expect(styles['bg-opacity-75'].alpha).toBeCloseTo(0.75, 1);
    expect(styles['bg-opacity-0'].alpha).toBeLessThan(0.05);
  });

  test('arbitrary color values render with gradient layers', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['bg-arbitrary-hex', 'bg-arbitrary-rgb', 'bg-arbitrary-oklch', 'bg-css-var'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expect(styles[id].alpha, `${id} should be opaque`).toBeGreaterThan(0.5);
      expectBorderGradient(styles, [id]);
    }
  });

  test('special background values render with gradient layers', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['bg-inherit', 'bg-transparent', 'bg-current'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id]);
      expect(styles[id].borderColor, `${id}`).toBe('rgba(0, 0, 0, 0)');
    }
  });
});

test.describe('background linear gradients', () => {
  test('cardinal and diagonal directions produce linear-gradient bg layer', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = [
      'bg-linear-to-r',
      'bg-linear-to-l',
      'bg-linear-to-t',
      'bg-linear-to-b',
      'bg-linear-to-tr',
      'bg-linear-to-br',
      'bg-linear-to-bl',
      'bg-linear-to-tl',
    ];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      // BG layer (2nd layer) should be linear-gradient; border layer (3rd) is also linear
      const count = (styles[id].backgroundImage.match(/linear-gradient/g) || []).length;
      expect(count, `${id} should have at least 2 linear-gradient layers`).toBeGreaterThanOrEqual(
        2,
      );
      expect(styles[id].borderColor).toBe('rgba(0, 0, 0, 0)');
    }
  });

  test('angle variants produce linear-gradient bg layer', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['bg-linear-angle', 'bg-linear-angle-neg', 'bg-linear-angle-arbitrary'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expect(styles[id].backgroundImage, `${id}`).toContain('linear-gradient');
    }
  });

  test('via and positioned stops render correctly', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['bg-linear-via', 'bg-linear-positions'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expect(styles[id].backgroundImage, `${id}`).toContain('linear-gradient');
    }
  });
});

test.describe('background radial and conic gradients', () => {
  test('bg-radial produces radial-gradient layer', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['bg-radial', 'bg-radial-position'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expect(styles[id].backgroundImage, `${id}`).toContain('radial-gradient');
    }
  });

  test('bg-conic produces conic-gradient layer', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['bg-conic', 'bg-conic-angle', 'bg-conic-angle-neg', 'bg-conic-arbitrary'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expect(styles[id].backgroundImage, `${id}`).toContain('conic-gradient');
    }
  });

  test('bg-none has no gradient in bg layer', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const styles = await extractStyles(page, ['bg-none']);
    // Should still have the border gradient layer
    // Assert
    expect(styles['bg-none'].backgroundImage).toContain('gradient');
  });
});

test.describe('background gradient interpolation', () => {
  test('all 8 interpolation modifiers render gradient layers', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = [
      'bg-interp-srgb',
      'bg-interp-hsl',
      'bg-interp-oklab',
      'bg-interp-oklch',
      'bg-interp-longer',
      'bg-interp-shorter',
      'bg-interp-increasing',
      'bg-interp-decreasing',
    ];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expect(styles[id].backgroundImage, `${id}`).toContain('linear-gradient');
    }
  });
});

test.describe('background URLs', () => {
  test('bg-url renders with gradient layers', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const styles = await extractStyles(page, ['bg-url']);
    // Assert
    expect(styles['bg-url'].backgroundImage).toContain('gradient');
  });
});

test.describe('border gradient linear directions', () => {
  test('all 8 cardinal and diagonal directions render linear-gradient border', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = [
      'border-linear-to-r',
      'border-linear-to-l',
      'border-linear-to-t',
      'border-linear-to-b',
      'border-linear-to-tr',
      'border-linear-to-br',
      'border-linear-to-bl',
      'border-linear-to-tl',
    ];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expect(styles[id].backgroundImage, `${id} should have linear-gradient`).toContain(
        'linear-gradient',
      );
      expect(styles[id].borderColor, `${id} should have transparent border`).toBe(
        'rgba(0, 0, 0, 0)',
      );
    }
  });
});

test.describe('border gradient linear angles', () => {
  test('positive, negative, and arbitrary angles render linear-gradient', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = [
      'border-linear-45',
      'border-linear-90',
      'border-linear-135',
      'border-linear-neg',
      'border-linear-arbitrary-angle',
    ];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expect(styles[id].backgroundImage, `${id}`).toContain('linear-gradient');
      expect(styles[id].borderColor, `${id}`).toBe('rgba(0, 0, 0, 0)');
    }
  });
});

test.describe('border gradient radial', () => {
  test('radial border gradients with position variants render', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['border-radial', 'border-radial-position', 'border-radial-position-top'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expect(styles[id].backgroundImage, `${id}`).toContain('radial-gradient');
      expect(styles[id].borderColor, `${id}`).toBe('rgba(0, 0, 0, 0)');
    }
  });
});

test.describe('border gradient conic', () => {
  test('conic border gradients at various angles render', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = [
      'border-conic-0',
      'border-conic-45',
      'border-conic-90',
      'border-conic-180',
      'border-conic-neg',
    ];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expect(styles[id].backgroundImage, `${id}`).toContain('conic-gradient');
      expect(styles[id].borderColor, `${id}`).toBe('rgba(0, 0, 0, 0)');
    }
  });
});

test.describe('border gradient interpolation', () => {
  test('linear interpolation modifiers render gradient', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = [
      'border-interp-srgb',
      'border-interp-hsl',
      'border-interp-oklab',
      'border-interp-oklch',
      'border-interp-longer',
      'border-interp-shorter',
      'border-interp-increasing',
      'border-interp-decreasing',
    ];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expect(styles[id].backgroundImage, `${id}`).toContain('linear-gradient');
    }
  });

  test('radial interpolation modifiers render gradient', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = [
      'border-radial-interp-srgb',
      'border-radial-interp-oklch',
      'border-radial-interp-longer',
      'border-radial-interp-decreasing',
    ];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expect(styles[id].backgroundImage, `${id}`).toContain('radial-gradient');
    }
  });

  test('conic interpolation modifiers render gradient', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = [
      'border-conic-interp-srgb',
      'border-conic-interp-oklch',
      'border-conic-interp-longer',
      'border-conic-interp-increasing',
    ];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expect(styles[id].backgroundImage, `${id}`).toContain('conic-gradient');
    }
  });
});

test.describe('border gradient color stops', () => {
  test('named, arbitrary, CSS variable, and transparent stops render gradient', async ({
    page,
  }) => {
    // Arrange
    await gotoPage(page);
    const ids = [
      'border-stops-named',
      'border-stops-arbitrary',
      'border-stops-css-var',
      'border-stops-transparent-to',
      'border-stops-transparent-from',
      'border-stops-inherit',
    ];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id]);
      expect(styles[id].borderColor, `${id}`).toBe('rgba(0, 0, 0, 0)');
    }
  });

  test('via stops render gradient', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['border-stops-via', 'border-stops-via-arbitrary', 'border-stops-via-transparent'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id]);
    }
  });

  test('positioned stops render gradient', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = [
      'border-stops-from-pos',
      'border-stops-to-pos',
      'border-stops-via-pos',
      'border-stops-all-pos',
    ];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id]);
    }
  });
});

test.describe('border spin', () => {
  test('spin elements have border-spin animation', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['border-spin-conic', 'border-spin-fast', 'border-spin-slow', 'border-spin-interp'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expect(styles[id].animation, `${id} should have border-spin animation`).toContain(
        'border-spin',
      );
      expectBorderGradient(styles, [id], 'conic');
    }
  });

  test('spin duration variants apply', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const styles = await extractStyles(page, ['border-spin-conic', 'border-spin-slow']);
    // Default is 1s, slow is 3s
    // Assert
    expect(styles['border-spin-conic'].animation).toContain('1s');
    expect(styles['border-spin-slow'].animation).toContain('3s');
  });
});

test.describe('edge cases', () => {
  test('bg opacity + border interpolation render gradient', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = [
      'edge-bg-opacity-border-srgb',
      'edge-bg-opacity-border-oklch',
      'edge-bg-opacity-border-longer',
      'edge-bg-opacity-border-hsl',
      'edge-bg-opacity-border-oklab',
      'edge-bg-opacity-border-shorter',
      'edge-bg-opacity-border-increasing',
      'edge-bg-opacity-border-decreasing',
    ];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id]);
      expect(styles[id].borderColor, `${id}`).toBe('rgba(0, 0, 0, 0)');
    }
  });

  test('both bg and border interpolation render gradient', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = [
      'edge-both-srgb',
      'edge-both-oklch',
      'edge-bg-srgb-border-longer',
      'edge-bg-longer-border-srgb',
      'edge-bg-hsl-border-oklch',
      'edge-bg-oklch-border-hsl',
      'edge-bg-increasing-border-decreasing',
      'edge-bg-decreasing-border-increasing',
    ];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id]);
    }
  });

  test('mixed gradient types render the correct gradient type per layer', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const styles = await extractStyles(page, [
      'edge-bg-radial-border-linear',
      'edge-bg-radial-border-conic',
      'edge-bg-conic-border-linear',
      'edge-bg-conic-border-radial',
      'edge-bg-linear-border-radial',
      'edge-bg-linear-border-conic',
    ]);

    // BG layer contains the bg gradient type, border layer contains the border gradient type
    // Assert
    expect(styles['edge-bg-radial-border-linear'].backgroundImage).toContain('radial-gradient');
    expect(styles['edge-bg-radial-border-linear'].backgroundImage).toContain('linear-gradient');

    expect(styles['edge-bg-radial-border-conic'].backgroundImage).toContain('radial-gradient');
    expect(styles['edge-bg-radial-border-conic'].backgroundImage).toContain('conic-gradient');

    expect(styles['edge-bg-conic-border-linear'].backgroundImage).toContain('conic-gradient');
    expect(styles['edge-bg-conic-border-linear'].backgroundImage).toContain('linear-gradient');

    expect(styles['edge-bg-conic-border-radial'].backgroundImage).toContain('conic-gradient');
    expect(styles['edge-bg-conic-border-radial'].backgroundImage).toContain('radial-gradient');

    expect(styles['edge-bg-linear-border-radial'].backgroundImage).toContain('linear-gradient');
    expect(styles['edge-bg-linear-border-radial'].backgroundImage).toContain('radial-gradient');

    expect(styles['edge-bg-linear-border-conic'].backgroundImage).toContain('linear-gradient');
    expect(styles['edge-bg-linear-border-conic'].backgroundImage).toContain('conic-gradient');
  });

  test('arbitrary border color formats render gradient', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = [
      'edge-border-arbitrary-oklch',
      'edge-border-arbitrary-hsl',
      'edge-border-arbitrary-rgb',
    ];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id]);
      expect(styles[id].borderColor, `${id}`).toBe('rgba(0, 0, 0, 0)');
    }
  });

  test('different border widths all render gradient', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['edge-border-1', 'edge-border-2', 'edge-border-4', 'edge-border-8'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id]);
      expect(styles[id].borderColor, `${id}`).toBe('rgba(0, 0, 0, 0)');
    }
  });

  test('no background + border gradient renders gradient', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['edge-no-bg-linear', 'edge-no-bg-radial', 'edge-no-bg-conic', 'edge-no-bg-spin'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id]);
      expect(styles[id].borderColor, `${id}`).toBe('rgba(0, 0, 0, 0)');
    }
    // Spin should still animate
    expect(styles['edge-no-bg-spin'].animation).toContain('border-spin');
  });
});

test.describe('border styles', () => {
  test('transparent border-color (default): all 8 styles render gradient with transparent border', async ({
    page,
  }) => {
    // Arrange
    await gotoPage(page);
    const ids = [
      'style-solid',
      'style-dashed',
      'style-dotted',
      'style-double',
      'style-groove',
      'style-ridge',
      'style-inset',
      'style-outset',
    ];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id]);
      expect(styles[id].borderColor, `${id} should have transparent border`).toBe(
        'rgba(0, 0, 0, 0)',
      );
    }
  });

  test('solid border-color: all 8 styles render gradient layers with non-transparent border', async ({
    page,
  }) => {
    // Arrange
    await gotoPage(page);
    const ids = [
      'style-color-solid',
      'style-color-dashed',
      'style-color-dotted',
      'style-color-double',
      'style-color-groove',
      'style-color-ridge',
      'style-color-inset',
      'style-color-outset',
    ];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id]);
      expect(styles[id].borderColor, `${id} should have non-transparent border`).not.toBe(
        'rgba(0, 0, 0, 0)',
      );
    }
  });

  test('semi-transparent border-color: all 8 styles render gradient layers', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = [
      'style-alpha-solid',
      'style-alpha-dashed',
      'style-alpha-dotted',
      'style-alpha-double',
      'style-alpha-groove',
      'style-alpha-ridge',
      'style-alpha-inset',
      'style-alpha-outset',
    ];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id]);
    }
  });
});

test.describe('state variants', () => {
  /*
   * WebKit matches :hover here but never re-resolves
   * --tw-jib--background-color-source, so the painted colour stays at the base.
   * Gecko and Blink both re-resolve it. That is a defect in the utility, not a
   * gap in the engine's hover support, so this is marked as an expected failure
   * rather than skipped: the assertion below states the intended behaviour, and
   * Playwright fails the run if WebKit ever starts passing, which is the signal
   * to delete this annotation.
   */
  test('hover:bg changes background on hover', async ({ page, browserName }) => {
    test.fail(browserName === 'webkit', 'hover: does not re-resolve the tw-jib colour source');

    await gotoPage(page);
    const element = page.locator('[data-test="edge-hover-bg"]');
    const before = await element.evaluate((node) => getComputedStyle(node).backgroundColor);

    await element.hover();
    expect(await element.evaluate((node) => node.matches(':hover'))).toBe(true);

    // Assert – poll rather than sleep, so the test waits exactly as long as the
    // style recalc takes on this engine instead of a guessed interval.
    await expect
      .poll(() => element.evaluate((node) => getComputedStyle(node).backgroundColor))
      .not.toBe(before);
  });

  test('focus:bg changes background on focus', async ({ page }) => {
    await gotoPage(page);
    const element = page.locator('[data-test="edge-focus-bg"]');
    const before = await element.evaluate((node) => getComputedStyle(node).backgroundColor);

    await element.focus();

    await expect
      .poll(() => element.evaluate((node) => getComputedStyle(node).backgroundColor))
      .not.toBe(before);
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
