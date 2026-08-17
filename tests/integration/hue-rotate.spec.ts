import { test, expect, type Page } from '@playwright/test';
import { colorDistance, extractStyles, gotoExample, type Rgb } from './helpers';

const PAGE = 'examples/hue-rotate';

async function gotoPage(page: Page) {
  await gotoExample(page, PAGE, 'smoke-0');
}

/** Read the painted colour of each fixture, keyed by id. */
async function extractBgColors(page: Page, selectors: string[]): Promise<Record<string, Rgb>> {
  const styles = await extractStyles(page, selectors);
  return Object.fromEntries(Object.entries(styles).map(([sel, style]) => [sel, style.rgb]));
}

test.describe('bg-hue-rotate — clockwise rotation', () => {
  test('0° equals base red-500', async ({ page }) => {
    // Arrange
    await gotoPage(page);

    // Act
    const colors = await extractBgColors(page, ['smoke-0']);

    // Assert — red-500 is approximately (239, 68, 68), so red dominates
    expect(colors['smoke-0'].r).toBeGreaterThan(colors['smoke-0'].g);
    expect(colors['smoke-0'].r).toBeGreaterThan(colors['smoke-0'].b);
  });

  test('60°, 120°, 180° shift away from red', async ({ page }) => {
    // Arrange
    await gotoPage(page);

    // Act
    const colors = await extractBgColors(page, ['smoke-0', 'smoke-60', 'smoke-120', 'smoke-180']);

    // Assert — further round the wheel is further from the base colour
    expect(colorDistance(colors['smoke-0'], colors['smoke-60'])).toBeGreaterThan(30);
    expect(colorDistance(colors['smoke-0'], colors['smoke-120'])).toBeGreaterThan(60);
    expect(colorDistance(colors['smoke-0'], colors['smoke-180'])).toBeGreaterThan(90);
  });

  test('180° produces the complementary hue (red no longer dominant)', async ({ page }) => {
    // Arrange
    await gotoPage(page);

    // Act
    const { 'smoke-180': complement } = await extractBgColors(page, ['smoke-180']);

    // Assert — the complement of red is cyan-ish, so green + blue lead
    expect(complement.r).toBeLessThan(Math.max(complement.g, complement.b));
  });
});

test.describe('bg-hue-rotate — counterclockwise', () => {
  test('-180° equals +180° (rotation symmetry at half-turn)', async ({ page }) => {
    // Arrange
    await gotoPage(page);

    // Act
    const colors = await extractBgColors(page, ['smoke-180', 'ccw-180']);

    // Assert — a half-turn lands on the same hue whichever way it is taken
    expect(colorDistance(colors['smoke-180'], colors['ccw-180'])).toBeLessThan(3);
  });

  test('-60° differs from +60°', async ({ page }) => {
    // Arrange
    await gotoPage(page);

    // Act
    const colors = await extractBgColors(page, ['smoke-60', 'ccw-60']);

    // Assert
    expect(colorDistance(colors['smoke-60'], colors['ccw-60'])).toBeGreaterThan(30);
  });
});

test.describe('bg-hue-rotate — colour space modifiers', () => {
  const SPACES = ['space-oklch', 'space-hsl', 'space-lab', 'space-rgb'];

  test('oklch, hsl, lab, rgb produce distinct results for the same degree', async ({ page }) => {
    // Arrange
    await gotoPage(page);

    // Act
    const colors = await extractBgColors(page, SPACES);

    // Assert — every space painted something, and they do not all agree:
    // 120° means a different rotation in each of them.
    for (const key of SPACES) {
      expect(colors[key].a, `${key} should be painted`).toBeGreaterThan(0);
    }
    const maxPairDistance = Math.max(
      colorDistance(colors['space-oklch'], colors['space-hsl']),
      colorDistance(colors['space-oklch'], colors['space-lab']),
      colorDistance(colors['space-oklch'], colors['space-rgb']),
      colorDistance(colors['space-hsl'], colors['space-rgb']),
    );
    expect(maxPairDistance).toBeGreaterThan(5);
  });
});

test.describe('full wheel coverage', () => {
  test('each 30° step produces a distinct colour', async ({ page }) => {
    // Arrange — the smoke row is itself a full wheel of bg-red-500.
    await gotoPage(page);
    const ids = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((d) => `smoke-${d}`);

    // Act
    const colors = await extractBgColors(page, ids);

    // Assert
    for (let i = 1; i < ids.length; i++) {
      expect(
        colorDistance(colors[ids[i - 1]], colors[ids[i]]),
        `${ids[i]} should differ from ${ids[i - 1]}`,
      ).toBeGreaterThan(10);
    }
  });
});
