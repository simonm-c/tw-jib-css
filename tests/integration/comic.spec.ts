import { test, expect, type Page } from '@playwright/test';
import { extractRenderedColors, extractStyles, gotoExample, expectBorderGradient } from './helpers';

const PAGE = 'examples/comic';

async function gotoPage(page: Page) {
  await gotoExample(page, PAGE, 'black');
}

test.describe('bg-comic – primary colours render', () => {
  test('all primary colours produce gradient layers', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['black', 'white', 'red', 'green', 'blue', 'cyan', 'magenta', 'yellow'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id]);
    }
  });

  test('dark input (black) is darker than light input (yellow)', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const colors = await extractRenderedColors(page, ['black', 'yellow']);
    // Assert
    expect(colors['black'].luminance).toBeLessThan(colors['yellow'].luminance);
  });
});

test.describe('comic-dot – dot size variations', () => {
  test('all dot size variants render with gradients', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['dot-0.5', 'dot-1', 'dot-1.5', 'dot-2', 'dot-3'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id]);
    }
  });
});

test.describe('comic-gap – gap variations', () => {
  test('all gap variants render', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['gap-0', 'gap-1', 'gap-2', 'gap-4', 'gap-8', 'gap-16'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id]);
    }
  });
});

test.describe('comic-bleed – bleed variations', () => {
  test('all bleed variants render', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['bleed-0', 'bleed-0.5', 'bleed-1', 'bleed-1.5', 'bleed-2'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id]);
    }
  });
});

test.describe('bg-comic opacity modifier', () => {
  test('all opacity variants render', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = [
      'opacity-100',
      'opacity-75',
      'opacity-50',
      'opacity-25',
      'opacity-10',
      'opacity-0',
    ];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id]);
    }
  });

  test('reduced opacity produces lighter appearance', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const colors = await extractRenderedColors(page, ['opacity-100', 'opacity-50']);
    // Assert
    expect(colors['opacity-50'].luminance).toBeGreaterThan(colors['opacity-100'].luminance);
  });
});

test.describe('comic dot + gap combinations', () => {
  test('representative dot+gap combos render', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['d05-g1', 'd05-g4', 'd1-g2', 'd1-g8', 'd2-g4', 'd2-g16', 'd3-g8', 'd3-g32'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id]);
    }
  });
});

test.describe('comic + border gradient composition', () => {
  test('linear border directions render with gradients', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['border-linear-r', 'border-linear-b', 'border-linear-br', 'border-linear-angle'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id], 'linear');
    }
  });

  test('radial and conic border variants render', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = ['border-radial', 'border-conic-0', 'border-conic-90'];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id]);
    }
  });

  test('border-spin variants render', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = [
      'border-spin-default',
      'border-spin-fast',
      'border-spin-slow',
      'border-spin-longer',
    ];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id], 'conic');
    }
  });

  test('border via and interpolation variants render', async ({ page }) => {
    // Arrange
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
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expectBorderGradient(styles, [id]);
    }
  });
});

test.describe('comic – full Tailwind colour palette', () => {
  test('all compare-* colours render with gradients', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const colors = [
      'compare-slate',
      'compare-gray',
      'compare-zinc',
      'compare-neutral',
      'compare-stone',
      'compare-red',
      'compare-orange',
      'compare-amber',
      'compare-yellow',
      'compare-lime',
      'compare-green',
      'compare-emerald',
      'compare-teal',
      'compare-cyan',
      'compare-sky',
      'compare-blue',
      'compare-indigo',
      'compare-violet',
      'compare-purple',
      'compare-fuchsia',
      'compare-pink',
      'compare-rose',
    ];
    // Act
    const styles = await extractStyles(page, colors);
    // Assert
    for (const id of colors) {
      expectBorderGradient(styles, [id]);
    }
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
