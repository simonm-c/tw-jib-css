import { test, expect, type Page } from '@playwright/test';
import { extractStyles, gotoExample } from './helpers';

const PAGE = 'examples/border-lightness';

async function gotoPage(page: Page) {
  await gotoExample(page, PAGE, 'border-alpha-lighten');
}

test.describe('semi-transparent base color', () => {
  test('border transforms keep the alpha of the color they transform', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    const ids = [
      'border-alpha-lighten',
      'border-alpha-darken',
      'border-alpha-saturate',
      'border-alpha-hue-rotate',
    ];
    // Act
    const styles = await extractStyles(page, ids);
    // Assert
    for (const id of ids) {
      expect(
        styles[id].borderColor,
        `${id}: an uncaptured source transforms to the initial transparent, painting no border`,
      ).toMatch(/\/\s*0\.5\d*\s*\)/);
    }
  });
});
