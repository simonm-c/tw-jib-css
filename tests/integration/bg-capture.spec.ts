import { test, expect, type Page } from '@playwright/test';
import {
  extractRenderedColors,
  extractStyles,
  expectBorderGradient,
  gotoExample,
  splitLayers,
  colorDistance,
} from './helpers';

/**
 * The shorthand writes every background longhand at once, so a reset shows up
 * only as a resolved value on the painting element. Compiled CSS cannot show
 * which layer a single-value longhand landed on.
 */

const PAGE = 'examples/bg-capture';

async function gotoPage(page: Page) {
  await gotoExample(page, PAGE, 'size-default');
}

/** The user's image sits between the ripple layer and the border gradient. */
function contentLayer(list: string): string {
  const layers = splitLayers(list);
  return (layers.length > 1 ? layers[1] : layers[0]) ?? '';
}

test.describe('size reaches the content layer', () => {
  for (const [id, expected] of [
    ['size-default', 'auto'],
    ['size-cover', 'cover'],
    ['size-contain', 'contain'],
    ['size-arbitrary', '30px 12px'],
  ] as const) {
    test(`${id} resolves to ${expected}`, async ({ page }) => {
      // Arrange
      await gotoPage(page);
      // Act
      const styles = await extractStyles(page, [id]);
      const size = contentLayer(styles[id].backgroundSize);
      // Assert
      expect(size, `${id}: full list was "${styles[id].backgroundSize}"`).toBe(expected);
    });
  }
});

test.describe('position and repeat reach the content layer', () => {
  for (const [id, property, expected] of [
    ['position-center', 'backgroundPosition', '50% 50%'],
    ['position-corner', 'backgroundPosition', '100% 100%'],
    ['position-arbitrary', 'backgroundPosition', '10px 4px'],
    ['repeat-x', 'backgroundRepeat', 'repeat-x'],
  ] as const) {
    test(`${id} resolves to ${expected}`, async ({ page }) => {
      // Arrange
      await gotoPage(page);
      // Act
      const styles = await extractStyles(page, [id]);
      const value = contentLayer(styles[id][property]);
      // Assert
      expect(value, `${id}: full list was "${styles[id][property]}"`).toBe(expected);
    });
  }
});

test.describe('attachment reaches the content layer', () => {
  for (const [id, expected] of [
    ['attachment-fixed', 'fixed'],
    ['attachment-local', 'local'],
  ] as const) {
    test(`${id} resolves to ${expected}`, async ({ page }) => {
      // Arrange
      await gotoPage(page);
      // Act
      const styles = await extractStyles(page, [id]);
      const value = contentLayer(styles[id].backgroundAttachment);
      // Assert
      expect(value, `${id}: full list was "${styles[id].backgroundAttachment}"`).toBe(expected);
    });
  }
});

test.describe('origin reaches every layer, so a border gradient cannot disagree', () => {
  for (const [id, expected] of [
    ['origin-content', 'content-box'],
    ['origin-border', 'border-box'],
  ] as const) {
    test(`${id} puts every layer in the ${expected}`, async ({ page }) => {
      // Arrange
      await gotoPage(page);
      // Act
      const styles = await extractStyles(page, [id]);
      const origins = splitLayers(styles[id].backgroundOrigin);
      // Assert
      expect(
        origins.every((o) => o === expected),
        `${id}: origins were "${styles[id].backgroundOrigin}"`,
      ).toBe(true);
    });
  }
});

test.describe('the colour underlay survives the image slot being taken', () => {
  test('bg-none keeps the colour a bg-* utility set', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const painted = await extractRenderedColors(page, ['colour-plain', 'colour-none']);
    // Assert
    expect(
      colorDistance(painted['colour-plain'], painted['colour-none']),
      `bg-none painted ${JSON.stringify(painted['colour-none'])}`,
    ).toBeLessThan(12);
  });

  test('a translucent gradient reveals the colour beneath it', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const painted = await extractRenderedColors(page, ['colour-under-gradient']);
    // Assert
    expect(
      painted['colour-under-gradient'].r,
      `the red underlay should dominate the midpoint, got ${JSON.stringify(painted['colour-under-gradient'])}`,
    ).toBeGreaterThan(painted['colour-under-gradient'].b);
  });

  test('an image with no colour utility paints no underlay', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const styles = await extractStyles(page, ['colour-image-only']);
    // Assert
    expect(styles['colour-image-only'].alpha, 'an opaque underlay would hide the page behind').toBe(
      0,
    );
  });
});

test.describe('composition with the modules that own the shorthand', () => {
  test('a texture keeps its own tiling rather than taking bg-cover', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const styles = await extractStyles(page, ['texture-cover']);
    const sizes = splitLayers(styles['texture-cover'].backgroundSize);
    // Assert
    expect(
      sizes.some((s) => s !== 'auto' && s !== 'cover'),
      `comic should still size its dot cells, got "${styles['texture-cover'].backgroundSize}"`,
    ).toBe(true);
  });

  test('a ripple keeps its own geometry while the content layer takes bg-cover', async ({
    page,
  }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const styles = await extractStyles(page, ['ripple-cover']);
    const sizes = splitLayers(styles['ripple-cover'].backgroundSize);
    // Assert
    expect(sizes[0], `ripple layer was "${sizes[0]}"`).toBe('auto');
    expect(sizes[1], `content layer was "${sizes[1]}"`).toBe('cover');
  });

  test('a border gradient survives bg-cover on the content layer', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const styles = await extractStyles(page, ['border-cover']);
    // Assert
    expectBorderGradient(styles, ['border-cover'], 'linear');
  });

  test('a border gradient follows bg-origin-content with the content layer', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const styles = await extractStyles(page, ['border-origin']);
    const origins = splitLayers(styles['border-origin'].backgroundOrigin);
    // Assert
    expect(origins.at(-1), `origins were "${styles['border-origin'].backgroundOrigin}"`).toBe(
      'content-box',
    );
  });
});

test.describe('grammar the slots cannot carry degrades to the initial value', () => {
  for (const [id, property, initial] of [
    ['limit-position', 'backgroundPosition', '0% 0%'],
    ['limit-size', 'backgroundSize', 'auto'],
    ['limit-bare-cover', 'backgroundSize', 'auto'],
  ] as const) {
    test(`${id} falls back to ${initial} rather than dropping the background`, async ({ page }) => {
      // Arrange
      await gotoPage(page);
      // Act
      const styles = await extractStyles(page, [id]);
      // Assert
      expect(styles[id].backgroundImage, `${id} lost every layer, not just the slot`).not.toBe(
        'none',
      );
      expect(
        contentLayer(styles[id][property]),
        `${id}: full list was "${styles[id][property]}"`,
      ).toBe(initial);
    });
  }

  test('the typed arbitrary spelling reaches both slots', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const styles = await extractStyles(page, ['typed-arbitrary']);
    // Assert
    expect(contentLayer(styles['typed-arbitrary'].backgroundSize)).toBe('cover');
    expect(contentLayer(styles['typed-arbitrary'].backgroundPosition)).toBe('50% 50%');
  });
});

test.describe("the colour underlay takes the last layer's box", () => {
  test('it reaches the border box, as a background-color does in stock Tailwind', async ({
    page,
  }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const styles = await extractStyles(page, ['underlay-border-box']);
    const clips = splitLayers(styles['underlay-border-box'].backgroundClip);
    // Assert
    expect(clips.at(-1), `clips were "${styles['underlay-border-box'].backgroundClip}"`).toBe(
      'border-box',
    );
  });

  test('bg-clip-padding confines it to the padding box', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const styles = await extractStyles(page, ['underlay-clipped']);
    const clips = splitLayers(styles['underlay-clipped'].backgroundClip);
    // Assert
    expect(
      clips.every((c) => c === 'padding-box'),
      `clips were "${styles['underlay-clipped'].backgroundClip}"`,
    ).toBe(true);
  });

  test('a border gradient still paints over it', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const styles = await extractStyles(page, ['underlay-behind-gradient']);
    // Assert
    expectBorderGradient(styles, ['underlay-behind-gradient'], 'linear');
  });
});
