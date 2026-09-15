import { test, expect, type Page } from '@playwright/test';
import { EXPERIMENTAL_BASE } from '../../playwright.config';
import { gotoExample, supportsQuery, colorDistance, type Rgb } from './helpers';

const PAGE = `${EXPERIMENTAL_BASE}examples/transform-alias-agreement`;

const SUPPORTS_QUERY =
  '(background: if(style(--value): red)) and (background: --jib-lighten(red, 20))';

/** 1 unit on the 8-bit RGB channel scale. */
const TOLERANCE = 1;

const MIRRORED = [
  'lighten-20',
  'darken-20',
  'darken-20-lab',
  'saturate-30',
  'desaturate-30',
  'desaturate-30-lab',
];

/** No util- cell exists for these: the class API has no negative-amount spelling. */
const INVERTED = ['darken-neg20', 'lighten-neg20', 'desaturate-neg30', 'saturate-neg30'];

const ALL = [...MIRRORED, ...INVERTED];

interface Sample extends Rgb {
  luminance: number;
}

/** Engines serialise computed colour differently; the canvas normalises to RGBA. */
async function readColors(page: Page, ids: string[]): Promise<Record<string, Sample>> {
  const { found, missing } = await page.evaluate((sels) => {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext('2d')!;
    const out: Record<string, Rgb> = {};
    const absent: string[] = [];
    for (const sel of sels) {
      const element = document.querySelector(`[data-test="${sel}"]`);
      if (!element) {
        absent.push(sel);
        continue;
      }
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = getComputedStyle(element).color;
      ctx.fillRect(0, 0, 1, 1);
      const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
      out[sel] = { r, g, b, a: a / 255 };
    }
    return { found: out, missing: absent };
  }, ids);

  expect(missing, `missing [data-test] fixtures on ${PAGE}`).toEqual([]);

  return Object.fromEntries(
    Object.entries(found).map(([id, rgb]) => [
      id,
      {
        ...rgb,
        luminance: 0.2126 * (rgb.r / 255) + 0.7152 * (rgb.g / 255) + 0.0722 * (rgb.b / 255),
      },
    ]),
  );
}

test.describe('directional alias functions', () => {
  test.beforeEach(async ({ page }) => {
    await gotoExample(page, PAGE, 'alias-lighten-20');
    test.skip(
      !(await supportsQuery(page, SUPPORTS_QUERY)),
      'Browser does not support CSS @function',
    );
  });

  test('every cell resolves a colour, so an agreement assertion cannot pass vacuously', async ({
    page,
  }) => {
    // Arrange
    const ids = ALL.flatMap((c) => [`alias-${c}`, `prim-${c}`]);
    // Act
    const colors = await readColors(page, [...ids, 'uncoloured']);
    const dropped = ids.filter(
      (id) => colorDistance(colors[id], colors['uncoloured']) <= TOLERANCE,
    );
    // Assert
    expect(
      dropped,
      `${dropped.length} cells match the uncoloured control, so the engine dropped the declaration rather than resolving the call: ${dropped.join(', ')}`,
    ).toHaveLength(0);
  });

  test('each alias lands on the same colour as the primitive it forwards to', async ({ page }) => {
    // Arrange
    const ids = ALL.flatMap((c) => [`alias-${c}`, `prim-${c}`]);
    // Act
    const colors = await readColors(page, ids);
    const drifted = ALL.flatMap((c) => {
      const delta = colorDistance(colors[`alias-${c}`], colors[`prim-${c}`]);
      return delta > TOLERANCE ? [`${c}: Δ=${delta.toFixed(3)}`] : [];
    });
    // Assert
    expect(
      drifted,
      `${drifted.length} of ${ALL.length} aliases disagree with the primitive they forward to:\n${drifted.join('\n')}`,
    ).toHaveLength(0);
  });

  test('each alias lands on the same colour as the utility it mirrors', async ({ page }) => {
    // Arrange
    const ids = MIRRORED.flatMap((c) => [`alias-${c}`, `util-${c}`]);
    // Act
    const colors = await readColors(page, ids);
    const drifted = MIRRORED.flatMap((c) => {
      const delta = colorDistance(colors[`alias-${c}`], colors[`util-${c}`]);
      return delta > TOLERANCE ? [`${c}: Δ=${delta.toFixed(3)}`] : [];
    });
    // Assert
    expect(
      drifted,
      `${drifted.length} of ${MIRRORED.length} aliases disagree with the class API they are named after:\n${drifted.join('\n')}`,
    ).toHaveLength(0);
  });

  test('the interpolation space reaches the primitive rather than defaulting to oklch', async ({
    page,
  }) => {
    // Arrange / Act
    const colors = await readColors(page, ['alias-darken-20', 'alias-darken-20-lab']);
    // Assert
    expect(
      colorDistance(colors['alias-darken-20'], colors['alias-darken-20-lab']),
      'darken in lab matched darken in oklch, so the third argument was dropped on the way through',
    ).toBeGreaterThan(TOLERANCE);
  });

  test('a negative amount inverts the direction instead of clamping at zero', async ({ page }) => {
    // Arrange / Act
    const colors = await readColors(page, [
      'alias-darken-20',
      'alias-darken-neg20',
      'alias-lighten-20',
    ]);
    // Assert
    expect(
      colors['alias-darken-20'].luminance,
      'darken(20) is not darker than lighten(20), so the sign never applied',
    ).toBeLessThan(colors['alias-lighten-20'].luminance);
    expect(
      colors['alias-darken-neg20'].luminance,
      'darken(-20) did not lighten, so the amount was clamped rather than inverted',
    ).toBeGreaterThan(colors['alias-darken-20'].luminance);
  });
});
