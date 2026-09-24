import { test, expect, type Page } from '@playwright/test';
import { extractStyles, gotoExample, type ElementStyles } from './helpers';

const PAGE = 'examples/border-style';

async function gotoPage(page: Page) {
  await gotoExample(page, PAGE, 'side-top');
}

function styles(all: Record<string, ElementStyles>, id: string): string {
  return all[id].borderStyles.join(' ');
}

test.describe('a per-side style survives an all-sides width utility', () => {
  const CASES = [
    ['side-top', 'groove solid solid solid'],
    ['side-right', 'solid ridge solid solid'],
    ['side-bottom', 'solid solid inset solid'],
    ['side-left', 'solid solid solid outset'],
  ] as const;

  for (const [id, expected] of CASES) {
    test(`${id} styles only its own side`, async ({ page }) => {
      // Arrange
      await gotoPage(page);
      // Act
      const all = await extractStyles(page, [id]);
      // Assert
      expect(styles(all, id), `${id}: top right bottom left`).toBe(expected);
    });
  }
});

test.describe('a per-side style composes over a whole-box style', () => {
  test('border-t-ridge overrides border-groove on the top side only', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const all = await extractStyles(page, ['over-all-sides']);
    // Assert
    expect(styles(all, 'over-all-sides'), 'top right bottom left').toBe(
      'ridge groove groove groove',
    );
  });

  test('border-t-groove overrides stock border-dashed on the top side only', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const all = await extractStyles(page, ['over-stock']);
    // Assert
    expect(styles(all, 'over-stock'), 'top right bottom left').toBe('groove dashed dashed dashed');
  });
});

test.describe('axis and logical variants reach their physical sides', () => {
  test('border-x-dotted styles left and right', async ({ page }) => {
    await gotoPage(page);
    const all = await extractStyles(page, ['axis-x']);
    expect(styles(all, 'axis-x'), 'top right bottom left').toBe('solid dotted solid dotted');
  });

  test('border-y-double styles top and bottom', async ({ page }) => {
    await gotoPage(page);
    const all = await extractStyles(page, ['axis-y']);
    expect(styles(all, 'axis-y'), 'top right bottom left').toBe('double solid double solid');
  });

  test('border-s-groove styles the left side in a left-to-right document', async ({ page }) => {
    await gotoPage(page);
    const all = await extractStyles(page, ['logical-start']);
    expect(styles(all, 'logical-start'), 'top right bottom left').toBe('solid solid solid groove');
  });

  test('border-e-ridge styles the right side in a left-to-right document', async ({ page }) => {
    await gotoPage(page);
    const all = await extractStyles(page, ['logical-end']);
    expect(styles(all, 'logical-end'), 'top right bottom left').toBe('solid ridge solid solid');
  });

  test('border-s-groove styles the right side under dir="rtl"', async ({ page }) => {
    await gotoPage(page);
    const all = await extractStyles(page, ['rtl-start']);
    expect(styles(all, 'rtl-start'), 'top right bottom left').toBe('solid groove solid solid');
  });

  test('border-e-ridge styles the left side under dir="rtl"', async ({ page }) => {
    await gotoPage(page);
    const all = await extractStyles(page, ['rtl-end']);
    expect(styles(all, 'rtl-end'), 'top right bottom left').toBe('solid solid solid ridge');
  });
});

test.describe('a width utility sorting after the style does not reset it', () => {
  const CASES = ['hover-side', 'hover-all', 'hover-logical'] as const;

  for (const id of CASES) {
    test(`${id} keeps its style while hovered`, async ({ page }) => {
      // Arrange
      await gotoPage(page);
      const before = styles(await extractStyles(page, [id]), id);
      // Act
      await page.locator(`[data-test="${id}"]`).hover();
      // Assert
      expect(
        await page.locator(`[data-test="${id}"]`).evaluate((n) => n.matches(':hover')),
        `${id}: hover did not engage`,
      ).toBe(true);
      expect(styles(await extractStyles(page, [id]), id), `${id}: at rest it was ${before}`).toBe(
        before,
      );
    });
  }
});

test.describe('every form of width utility reads the per-side style', () => {
  const CASES = ['width-static', 'width-number', 'width-arbitrary', 'width-side-static'] as const;

  for (const id of CASES) {
    test(`${id} keeps border-t-groove on the top side`, async ({ page }) => {
      await gotoPage(page);
      const all = await extractStyles(page, [id]);
      expect(all[id].borderStyles[0], `${id}: border-top-style`).toBe('groove');
    });
  }
});

test.describe('stock Tailwind border styles are unchanged', () => {
  const CASES = [
    ['stock-plain', 'solid'],
    ['stock-dashed', 'dashed'],
    ['stock-dotted', 'dotted'],
  ] as const;

  for (const [id, expected] of CASES) {
    test(`${id} applies ${expected} to all four sides`, async ({ page }) => {
      await gotoPage(page);
      const all = await extractStyles(page, [id]);
      expect(styles(all, id), `${id}: top right bottom left`).toBe(
        [expected, expected, expected, expected].join(' '),
      );
    });
  }
});

test.describe('a per-side style stops at the element that set it', () => {
  test('the parent keeps border-t-groove on its own top side', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const all = await extractStyles(page, ['nest-parent']);
    // Assert
    expect(styles(all, 'nest-parent'), 'nest-parent: top right bottom left').toBe(
      'groove solid solid solid',
    );
  });

  test('a nested width utility reads none of the parent’s side styles', async ({ page }) => {
    // Arrange
    await gotoPage(page);
    // Act
    const all = await extractStyles(page, ['nest-child']);
    // Assert
    expect(styles(all, 'nest-child'), 'an inheriting slot would give the child a groove top').toBe(
      'solid solid solid solid',
    );
  });
});
