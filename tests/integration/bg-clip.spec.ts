import { test, expect, type Page } from '@playwright/test';
import { extractStyles, gotoExample, splitLayers } from './helpers';

/**
 * A `background` reading an unparseable token is thrown away whole, so the
 * failure is every layer vanishing at once, not a wrong clip. Only a renderer
 * shows that.
 */

const PAGE = 'examples/bg-clip';

const SUITES = ['comic', 'pixel', 'ripple', 'linear'] as const;

async function gotoPage(page: Page) {
  await gotoExample(page, PAGE, 'default-comic');
}

function clipList(backgroundClip: string): string[] {
  return splitLayers(backgroundClip);
}

test.describe('default clip: each layer takes the box it paints into', () => {
  for (const suite of SUITES) {
    test(`${suite} clips its pattern layers to the padding box`, async ({ page }) => {
      // Arrange
      await gotoPage(page);
      // Act
      const styles = await extractStyles(page, [`default-${suite}`]);
      const clips = clipList(styles[`default-${suite}`].backgroundClip);
      // Assert
      expect(
        clips.slice(0, -1).every((c) => c === 'padding-box'),
        clips.join(', '),
      ).toBe(true);
    });

    test(`${suite} clips its border gradient to the border box`, async ({ page }) => {
      // Arrange
      await gotoPage(page);
      // Act
      const styles = await extractStyles(page, [`default-${suite}`]);
      const clips = clipList(styles[`default-${suite}`].backgroundClip);
      // Assert
      expect(clips.at(-1), clips.join(', ')).toBe('border-box');
    });
  }
});

test.describe('bg-clip-text reaches every layer', () => {
  for (const suite of SUITES) {
    test(`${suite} clips all layers, border gradient included`, async ({ page }) => {
      // Arrange
      await gotoPage(page);
      // Act
      const styles = await extractStyles(page, [`text-${suite}`]);
      const clips = clipList(styles[`text-${suite}`].backgroundClip);
      // Assert
      expect(
        clips.every((c) => c === 'text'),
        clips.join(', '),
      ).toBe(true);
    });

    test(`${suite} keeps every layer while clipped to text`, async ({ page }) => {
      // Arrange
      await gotoPage(page);
      // Act
      const styles = await extractStyles(page, [`default-${suite}`, `text-${suite}`]);
      // Assert
      expect(styles[`text-${suite}`].layerCount).toBe(styles[`default-${suite}`].layerCount);
    });
  }
});

test.describe('the remaining box keywords reach every layer', () => {
  for (const [id, keyword] of [
    ['content-comic', 'content-box'],
    ['border-comic', 'border-box'],
    ['padding-comic', 'padding-box'],
  ] as const) {
    test(`${id} resolves to ${keyword} on every layer`, async ({ page }) => {
      // Arrange
      await gotoPage(page);
      // Act
      const styles = await extractStyles(page, [id]);
      const clips = clipList(styles[id].backgroundClip);
      // Assert
      expect(
        clips.every((c) => c === keyword),
        clips.join(', '),
      ).toBe(true);
    });
  }
});

test.describe('an unparseable slot value falls back instead of voiding the shorthand', () => {
  for (const suite of ['comic', 'pixel'] as const) {
    /* Measured on a `*` slot: background-image computes to `none`. */
    test(`${suite} keeps every layer`, async ({ page }) => {
      // Arrange
      await gotoPage(page);
      // Act
      const styles = await extractStyles(page, [`default-${suite}`, `invalid-${suite}`]);
      // Assert
      expect(styles[`invalid-${suite}`].layerCount).toBe(styles[`default-${suite}`].layerCount);
    });

    test(`${suite} falls back to the default clip list`, async ({ page }) => {
      // Arrange
      await gotoPage(page);
      // Act
      const styles = await extractStyles(page, [`default-${suite}`, `invalid-${suite}`]);
      // Assert
      expect(styles[`invalid-${suite}`].backgroundClip).toBe(
        styles[`default-${suite}`].backgroundClip,
      );
    });
  }
});
