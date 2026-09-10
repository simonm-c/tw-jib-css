import { test, expect, type Page } from '@playwright/test';
import { EXPERIMENTAL_BASE } from '../../playwright.config';

const TW_HUES = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
] as const;

const TW_SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

const CONTRAST_IDS = TW_HUES.flatMap((h) => TW_SHADES.map((s) => `${h}-${s}`));

const CONTRAST_AAA_IDS = TW_HUES.flatMap((h) => TW_SHADES.map((s) => `aaa-${h}-${s}`));
const CONTRAST_AALG_IDS = TW_HUES.flatMap((h) => TW_SHADES.map((s) => `aalg-${h}-${s}`));

const BADGE_IDS = TW_HUES.flatMap((h) => TW_SHADES.map((s) => `badge-${h}-${s}`));

const SUPPORTS_WCAG =
  '(background: if(style(--value): red)) and (background: --tw-jib--linearize(red))';

const CONTRAST_PAGE = 'examples/wcag';
const BADGE_PAGE = `${EXPERIMENTAL_BASE}examples/wcag-badge`;
const COMBO_PAGE = `${EXPERIMENTAL_BASE}examples/wcag-contrast-badge`;
const AGREEMENT_PAGE = `${EXPERIMENTAL_BASE}examples/wcag-agreement`;

const COMBO_GROUPS = [
  { prefix: 'aa', level: 'AA', hues: ['red', 'blue', 'green', 'amber', 'slate'] },
  { prefix: 'aaa', level: 'AAA', hues: ['red', 'blue', 'slate'] },
  { prefix: 'aalg', level: 'AA Large', hues: ['red', 'blue', 'slate'] },
] as const;

interface ContrastResult {
  bgColor: string;
  fgColor: string;
  bgLum: number;
  fgLum: number;
  ratio: number;
  jsRating: string;
  fgAlpha: number;
  /** false when the coarse 8-bit canvas fallback was used. */
  exact: boolean;
}

interface BadgeResult {
  bgColor: string;
  fgColor: string;
  bgLum: number;
  fgLum: number;
  ratio: number;
  jsRating: string;
  cssRating: string;
}

/**
 * Character classes MUST accept exponent notation: Chromium serialises a
 * gamut-bound channel as e.g. -1.49012e-8, and [0-9.+\-] silently drops the
 * colour to the coarse canvas path.
 */
const COLOR_HELPERS_SOURCE = `
  function srgbCompToLinear(c) {
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }
  function oklabToLinearSRGB(L, a, b) {
    const l_ = Math.pow(L + 0.3963377774 * a + 0.2158037573 * b, 3);
    const m_ = Math.pow(L - 0.1055613458 * a - 0.0638541728 * b, 3);
    const s_ = Math.pow(L - 0.0894841775 * a - 1.2914855480 * b, 3);
    return [
       4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_,
      -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_,
      -0.0041960863 * l_ - 0.7034186147 * m_ + 1.7076147010 * s_,
    ];
  }
  function clamp01(x) { return Math.min(1, Math.max(0, x)); }

  function parseColorToWcag(str) {
    str = String(str).trim();
    let m;

    // rgb(r, g, b) / rgb(r g b) / rgba(...) / rgb(r g b / a)
    m = str.match(/^rgba?\\(\\s*([0-9.eE+\\-]+)\\s*[, ]\\s*([0-9.eE+\\-]+)\\s*[, ]\\s*([0-9.eE+\\-]+)\\s*(?:[,/]\\s*([0-9.eE+\\-]+%?)\\s*)?\\)$/);
    if (m) {
      const r = clamp01(parseFloat(m[1]) / 255);
      const g = clamp01(parseFloat(m[2]) / 255);
      const b = clamp01(parseFloat(m[3]) / 255);
      const a = m[4] ? (m[4].endsWith('%') ? parseFloat(m[4]) / 100 : parseFloat(m[4])) : 1;
      const lum = 0.2126 * srgbCompToLinear(r) + 0.7152 * srgbCompToLinear(g) + 0.0722 * srgbCompToLinear(b);
      return { lum, alpha: a };
    }

    // oklch(L C H [/ A]) : L number 0..1 or %, C number, H deg
    // Unclamped: out-of-gamut shades legitimately give r > 1 or g < 0, and clamping
    // shifts the ratio by several percent.
    m = str.match(/^oklch\\(\\s*([0-9.eE+\\-]+%?)\\s+([0-9.eE+\\-]+%?)\\s+([0-9.eE+\\-]+)(?:deg)?\\s*(?:\\/\\s*([0-9.eE+\\-]+%?)\\s*)?\\)$/);
    if (m) {
      let L = parseFloat(m[1]); if (m[1].endsWith('%')) L /= 100;
      let C = parseFloat(m[2]); if (m[2].endsWith('%')) C *= 0.4 / 100;
      const H = parseFloat(m[3]);
      const a = m[4] ? (m[4].endsWith('%') ? parseFloat(m[4]) / 100 : parseFloat(m[4])) : 1;
      const oa = C * Math.cos(H * Math.PI / 180);
      const ob = C * Math.sin(H * Math.PI / 180);
      const [r, g, b] = oklabToLinearSRGB(L, oa, ob);
      const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return { lum, alpha: a };
    }

    // oklab(L a b [/ A]) : L 0..1 or %, a/b number or % (100% = 0.4)
    m = str.match(/^oklab\\(\\s*([0-9.eE+\\-]+%?)\\s+([0-9.eE+\\-]+%?)\\s+([0-9.eE+\\-]+%?)\\s*(?:\\/\\s*([0-9.eE+\\-]+%?)\\s*)?\\)$/);
    if (m) {
      let L = parseFloat(m[1]); if (m[1].endsWith('%')) L /= 100;
      let oa = parseFloat(m[2]); if (m[2].endsWith('%')) oa *= 0.4 / 100;
      let ob = parseFloat(m[3]); if (m[3].endsWith('%')) ob *= 0.4 / 100;
      const a = m[4] ? (m[4].endsWith('%') ? parseFloat(m[4]) / 100 : parseFloat(m[4])) : 1;
      const [r, g, b] = oklabToLinearSRGB(L, oa, ob);
      const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return { lum, alpha: a };
    }

    // color(srgb r g b [/ a]) : r/g/b in 0..1
    m = str.match(/^color\\(\\s*srgb\\s+([0-9.eE+\\-]+)\\s+([0-9.eE+\\-]+)\\s+([0-9.eE+\\-]+)\\s*(?:\\/\\s*([0-9.eE+\\-]+%?)\\s*)?\\)$/);
    if (m) {
      const r = clamp01(parseFloat(m[1]));
      const g = clamp01(parseFloat(m[2]));
      const b = clamp01(parseFloat(m[3]));
      const a = m[4] ? (m[4].endsWith('%') ? parseFloat(m[4]) / 100 : parseFloat(m[4])) : 1;
      const lum = 0.2126 * srgbCompToLinear(r) + 0.7152 * srgbCompToLinear(g) + 0.0722 * srgbCompToLinear(b);
      return { lum, alpha: a };
    }

    // color(srgb-linear r g b [/ a])
    m = str.match(/^color\\(\\s*srgb-linear\\s+([0-9.eE+\\-]+)\\s+([0-9.eE+\\-]+)\\s+([0-9.eE+\\-]+)\\s*(?:\\/\\s*([0-9.eE+\\-]+%?)\\s*)?\\)$/);
    if (m) {
      const r = clamp01(parseFloat(m[1]));
      const g = clamp01(parseFloat(m[2]));
      const b = clamp01(parseFloat(m[3]));
      const a = m[4] ? (m[4].endsWith('%') ? parseFloat(m[4]) / 100 : parseFloat(m[4])) : 1;
      const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return { lum, alpha: a };
    }

    return null;
  }

  const _canvas = document.createElement('canvas');
  _canvas.width = _canvas.height = 1;
  const _ctx = _canvas.getContext('2d');
  function canvasFallback(str) {
    _ctx.clearRect(0, 0, 1, 1);
    _ctx.fillStyle = str;
    _ctx.fillRect(0, 0, 1, 1);
    const [r, g, b, a] = _ctx.getImageData(0, 0, 1, 1).data;
    const lum = 0.2126 * srgbCompToLinear(r / 255) + 0.7152 * srgbCompToLinear(g / 255) + 0.0722 * srgbCompToLinear(b / 255);
    return { lum, alpha: a / 255 };
  }

  function toLumAlpha(str) {
    const parsed = parseColorToWcag(str);
    if (parsed) return { lum: parsed.lum, alpha: parsed.alpha, exact: true };
    const fallback = canvasFallback(str);
    return { lum: fallback.lum, alpha: fallback.alpha, exact: false };
  }

  function contrastRatio(l1, l2) {
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  }

  function wcagRating(ratio) {
    if (ratio >= 7) return 'AAA';
    if (ratio >= 4.5) return 'AA';
    if (ratio >= 3) return 'AA Large';
    return 'Fail';
  }
`;

declare global {
  interface Window {
    __wcagHelpers: {
      toLumAlpha: (color: string) => { lum: number; alpha: number; exact: boolean };
      contrastRatio: (a: number, b: number) => number;
      wcagRating: (ratio: number) => string;
    };
  }
}

function expectNoMissingFixtures(missing: string[], page: string) {
  expect(missing, `missing [data-test] fixtures on ${page}`).toEqual([]);
}

async function extractContrastResults(
  page: Page,
  ids: string[],
): Promise<Record<string, ContrastResult>> {
  const { out, missing } = await page.evaluate(
    ({ sels, helpersSrc }) => {
      new Function(
        helpersSrc + '; window.__wcagHelpers = { toLumAlpha, contrastRatio, wcagRating };',
      )();
      const { toLumAlpha, contrastRatio, wcagRating } = window.__wcagHelpers;

      const out: Record<string, ContrastResult> = {};
      const missing: string[] = [];
      for (const sel of sels) {
        const el = document.querySelector(`[data-test="${sel}"]`);
        if (!el) {
          missing.push(sel);
          continue;
        }
        const cs = getComputedStyle(el);
        const bgStr = cs.backgroundColor;
        const fgStr = cs.color;
        const bg = toLumAlpha(bgStr);
        const fg = toLumAlpha(fgStr);
        const ratio = contrastRatio(bg.lum, fg.lum);
        out[sel] = {
          bgColor: bgStr,
          fgColor: fgStr,
          bgLum: bg.lum,
          fgLum: fg.lum,
          ratio,
          jsRating: wcagRating(ratio),
          fgAlpha: fg.alpha,
          exact: bg.exact && fg.exact,
        };
      }
      return { out, missing };
    },
    { sels: ids, helpersSrc: COLOR_HELPERS_SOURCE },
  );
  expectNoMissingFixtures(missing, page.url());
  return out;
}

async function extractBadgeResults(
  page: Page,
  ids: string[],
): Promise<Record<string, BadgeResult>> {
  const { out, missing } = await page.evaluate(
    ({ sels, helpersSrc }) => {
      new Function(
        helpersSrc + '; window.__wcagHelpers = { toLumAlpha, contrastRatio, wcagRating };',
      )();
      const { toLumAlpha, contrastRatio, wcagRating } = window.__wcagHelpers;

      const out: Record<string, BadgeResult> = {};
      const missing: string[] = [];
      for (const sel of sels) {
        const el = document.querySelector(`[data-test="${sel}"]`);
        if (!el) {
          missing.push(sel);
          continue;
        }
        const cs = getComputedStyle(el);
        const afterCs = getComputedStyle(el, '::after');
        const bgStr = cs.backgroundColor;
        const fgStr = cs.color;
        const bg = toLumAlpha(bgStr);
        const fg = toLumAlpha(fgStr);
        const ratio = contrastRatio(bg.lum, fg.lum);
        // ::after content arrives quoted
        const rawContent = afterCs.content || '';
        const cssRating = rawContent.replace(/^["']|["']$/g, '');
        out[sel] = {
          bgColor: bgStr,
          fgColor: fgStr,
          bgLum: bg.lum,
          fgLum: fg.lum,
          ratio,
          jsRating: wcagRating(ratio),
          cssRating,
        };
      }
      return { out, missing };
    },
    { sels: ids, helpersSrc: COLOR_HELPERS_SOURCE },
  );
  expectNoMissingFixtures(missing, page.url());
  return out;
}

async function detectSupport(page: Page): Promise<boolean> {
  return page.evaluate((q) => CSS.supports(q), SUPPORTS_WCAG);
}

/** Whether this engine accepts a channel keyword inside pow(). False on Gecko. */
async function detectChannelPow(page: Page): Promise<boolean> {
  return page.evaluate(() => CSS.supports('color', 'oklch(from red calc(pow(alpha, 0.5)) c h)'));
}

async function extractColorVsInherited(
  page: Page,
  ids: string[],
): Promise<Record<string, { color: string; inherited: string }>> {
  const { out, missing } = await page.evaluate((sels) => {
    const out: Record<string, { color: string; inherited: string }> = {};
    const missing: string[] = [];
    for (const sel of sels) {
      const el = document.querySelector(`[data-test="${sel}"]`);
      if (!el) {
        missing.push(sel);
        continue;
      }
      out[sel] = {
        color: getComputedStyle(el).color,
        inherited: el.parentElement ? getComputedStyle(el.parentElement).color : '',
      };
    }
    return { out, missing };
  }, ids);
  expectNoMissingFixtures(missing, page.url());
  return out;
}

function ratio(l1: number, l2: number) {
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

const TARGET_RATIO = { AAA: 7, AA: 4.5, 'AA Large': 3 } as const;

const EXACT_TOLERANCE = 0.006;
const CAPPED_TOLERANCE = 0.03;

/** maxCR(Yb). Bottoms out at √21 ≈ 4.583 at the 0.1791 pivot, so 3:1 and
 *  4.5:1 are always reachable and 7:1 is not. */
function maxContrastAgainst(bgLum: number): number {
  return Math.max(ratio(bgLum, 1.0), ratio(bgLum, 0.0));
}

type Verdict = 'PASS' | 'CAPPED' | 'FAIL';

function gradeExactness(
  result: { bgLum: number; ratio: number },
  target: number,
): { verdict: Verdict; reason: string } {
  const ceiling = maxContrastAgainst(result.bgLum);
  if (Math.abs(result.ratio - target) <= EXACT_TOLERANCE) {
    return { verdict: 'PASS', reason: `hit ${result.ratio.toFixed(4)} (target ${target})` };
  }
  if (ceiling < target) {
    if (Math.abs(result.ratio - ceiling) <= CAPPED_TOLERANCE) {
      return {
        verdict: 'CAPPED',
        reason: `${target}:1 unreachable, parked at ceiling ${ceiling.toFixed(3)} (got ${result.ratio.toFixed(4)})`,
      };
    }
    return {
      verdict: 'FAIL',
      reason: `${target}:1 unreachable (ceiling ${ceiling.toFixed(3)}) but got ${result.ratio.toFixed(4)}, which is neither target nor ceiling`,
    };
  }
  return {
    verdict: 'FAIL',
    reason: `${target}:1 IS reachable (ceiling ${ceiling.toFixed(3)}) but got ${result.ratio.toFixed(4)}`,
  };
}

function gradeGrid(
  results: Record<string, ContrastResult>,
  ids: string[],
  target: number,
): { failures: string[]; pass: number; capped: number } {
  const failures: string[] = [];
  let pass = 0;
  let capped = 0;
  for (const id of ids) {
    const r = results[id];
    if (!r) {
      failures.push(`${id}: element not found`);
      continue;
    }
    if (!r.exact) {
      failures.push(
        `${id}: measured via the 8-bit canvas fallback, too coarse to grade, bg "${r.bgColor}", fg "${r.fgColor}"`,
      );
      continue;
    }
    const graded = gradeExactness(r, target);
    if (graded.verdict === 'PASS') pass++;
    else if (graded.verdict === 'CAPPED') capped++;
    else failures.push(`${id}: ${graded.reason}`);
  }
  return { failures, pass, capped };
}

/** Chromium serialises the final stage as color(srgb-linear r g b). For
 *  neutrality checks, where 8-bit rounding would hide the measurement. */
function parseLinearChannels(str: string): [number, number, number] | null {
  const m = str.trim().match(/^color\(srgb-linear\s+([-\d.e+]+)\s+([-\d.e+]+)\s+([-\d.e+]+)/);
  return m ? [Number(m[1]), Number(m[2]), Number(m[3])] : null;
}

function channelSpread(str: string): number | null {
  const ch = parseLinearChannels(str);
  return ch ? Math.max(...ch) - Math.min(...ch) : null;
}

test.describe('text-contrast-aa: exact ratio verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(CONTRAST_PAGE, { waitUntil: 'networkidle' });
  });

  test('all 242 TW colours land exactly on 4.5:1', async ({ page }) => {
    // Arrange
    // Act
    const results = await extractContrastResults(page, CONTRAST_IDS);
    const { failures, capped } = gradeGrid(results, CONTRAST_IDS, TARGET_RATIO.AA);

    // Assert
    expect(failures, `${failures.length} colours missed AA:\n${failures.join('\n')}`).toHaveLength(
      0,
    );
    expect(capped, 'AA is reachable from every background; none should be capped').toBe(0);
  });

  test('all 242 TW colours have visible (non-transparent) text', async ({ page }) => {
    // Arrange
    // Act
    const results = await extractContrastResults(page, CONTRAST_IDS);
    const invisible: string[] = [];

    // Assert
    for (const id of CONTRAST_IDS) {
      const r = results[id];
      if (!r || r.fgAlpha < 0.1) {
        invisible.push(id);
      }
    }

    expect(
      invisible,
      `${invisible.length} colours have invisible text:\n${invisible.join(', ')}`,
    ).toHaveLength(0);
  });
});

test.describe('text-contrast-aaa: exact ratio verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(CONTRAST_PAGE, { waitUntil: 'networkidle' });
  });

  test('all 242 TW colours land exactly on 7:1, or at their physical ceiling', async ({ page }) => {
    // Arrange
    // Act
    const results = await extractContrastResults(page, CONTRAST_AAA_IDS);
    const { failures, capped } = gradeGrid(results, CONTRAST_AAA_IDS, TARGET_RATIO.AAA);

    // Assert
    expect(failures, `${failures.length} colours missed AAA:\n${failures.join('\n')}`).toHaveLength(
      0,
    );
    // 7:1 is unreachable for luminance in (0.10, 0.30), so some cells MUST cap.
    // Zero capped = the grading is not discriminating.
    expect(capped, 'some mid-luminance backgrounds cannot reach 7:1').toBeGreaterThan(0);
  });
});

test.describe('text-contrast-aa-lg: exact ratio verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(CONTRAST_PAGE, { waitUntil: 'networkidle' });
  });

  test('all 242 TW colours land exactly on 3:1', async ({ page }) => {
    // Arrange
    // Act
    const results = await extractContrastResults(page, CONTRAST_AALG_IDS);
    const { failures, capped } = gradeGrid(results, CONTRAST_AALG_IDS, TARGET_RATIO['AA Large']);

    // Assert
    expect(
      failures,
      `${failures.length} colours missed AA Large:\n${failures.join('\n')}`,
    ).toHaveLength(0);
    expect(capped, 'AA Large is reachable from every background; none should be capped').toBe(0);
  });
});

const CONTRAST_EDGE_IDS = {
  'edge-blue-400': TARGET_RATIO['AA Large'],
  'edge-emerald-500': TARGET_RATIO['AA Large'],
  'edge-orange-500': TARGET_RATIO['AA Large'],
  'edge-pink-400': TARGET_RATIO['AA Large'],
  'edge-slate-500': TARGET_RATIO.AA,
  'edge-red-600': TARGET_RATIO.AA,
  'edge-violet-500': TARGET_RATIO.AA,
  'edge-gray-500': TARGET_RATIO.AA,
  'edge-blue-700': TARGET_RATIO.AAA,
  'edge-gray-600': TARGET_RATIO.AAA,
  'edge-slate-600': TARGET_RATIO.AAA,
  'edge-teal-600': TARGET_RATIO.AAA,
} as const;

test.describe('text-contrast: threshold edge cases', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(CONTRAST_PAGE, { waitUntil: 'networkidle' });
  });

  test('lands on target (or the ceiling) near each threshold boundary', async ({ page }) => {
    // Arrange
    const ids = Object.keys(CONTRAST_EDGE_IDS);
    // Act
    const results = await extractContrastResults(page, ids);
    const failures: string[] = [];

    // Assert
    for (const id of ids) {
      const r = results[id];
      if (!r) {
        failures.push(`${id}: element not found`);
        continue;
      }
      const target = CONTRAST_EDGE_IDS[id as keyof typeof CONTRAST_EDGE_IDS];
      const graded = gradeExactness(r, target);
      if (graded.verdict === 'FAIL') failures.push(`${id}: ${graded.reason}`);
    }

    expect(failures, `${failures.length} edge cases failed:\n${failures.join('\n')}`).toHaveLength(
      0,
    );
  });
});

const FROZEN_TARGETS = {
  'frozen-grey-aa': TARGET_RATIO.AA,
  'frozen-grey-aaa': TARGET_RATIO.AAA,
  'frozen-grey-aalg': TARGET_RATIO['AA Large'],
  'frozen-onebit-warm': TARGET_RATIO.AA,
  'frozen-onebit-cool': TARGET_RATIO.AA,
  'frozen-feasible-pink': TARGET_RATIO.AA,
  'frozen-feasible-grey': TARGET_RATIO.AA,
  'frozen-capped-grey': TARGET_RATIO.AAA,
  'frozen-capped-indigo': TARGET_RATIO.AAA,
} as const;

const FROZEN_EXPECT_CAPPED = new Set(['frozen-capped-grey', 'frozen-capped-indigo']);

test.describe('text-contrast: frozen regression cases', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(CONTRAST_PAGE, { waitUntil: 'networkidle' });
  });

  test('every frozen case grades as expected', async ({ page }) => {
    // Arrange
    const ids = Object.keys(FROZEN_TARGETS);
    // Act
    const results = await extractContrastResults(page, ids);
    const failures: string[] = [];

    // Assert
    for (const id of ids) {
      const r = results[id];
      if (!r) {
        failures.push(`${id}: element not found`);
        continue;
      }
      const target = FROZEN_TARGETS[id as keyof typeof FROZEN_TARGETS];
      const graded = gradeExactness(r, target);
      const expected: Verdict = FROZEN_EXPECT_CAPPED.has(id) ? 'CAPPED' : 'PASS';
      if (graded.verdict !== expected) {
        failures.push(`${id}: expected ${expected}, got ${graded.verdict}, ${graded.reason}`);
      }
    }

    expect(
      failures,
      `${failures.length} frozen cases regressed:\n${failures.join('\n')}`,
    ).toHaveLength(0);
  });

  test('exact grey stays achromatic at all three levels', async ({ page }) => {
    // Arrange
    // Luma weights do not sum to exactly 1.0 in float, leaving a uniform ~1e-7
    // residual in the chroma vector on an exact grey. A gamut-maximal scale
    // amplifies that into a visible tint; min(1, …) keeps it the size it started.
    const ids = ['frozen-grey-aa', 'frozen-grey-aaa', 'frozen-grey-aalg'];
    // Act
    const results = await extractContrastResults(page, ids);
    const tinted: string[] = [];

    // Assert
    for (const id of ids) {
      const spread = channelSpread(results[id]?.fgColor ?? '');
      if (spread === null) {
        tinted.push(`${id}: could not parse channels from "${results[id]?.fgColor}"`);
      } else if (spread > 1e-3) {
        tinted.push(`${id}: channel spread ${spread.toExponential(3)}: grey input produced a tint`);
      }
    }

    expect(
      tinted,
      `${tinted.length} grey fixtures picked up a tint:\n${tinted.join('\n')}`,
    ).toHaveLength(0);
  });

  test('one-bit tints stay near-neutral and near-identical', async ({ page }) => {
    // Arrange
    // #d5d4d4 vs #d4d4d5 differ by one 8-bit step, so their chroma vectors differ
    // in direction by that much: a gamut-maximal scale would amplify it into
    // crimson vs ultramarine.
    // Act
    const results = await extractContrastResults(page, [
      'frozen-onebit-warm',
      'frozen-onebit-cool',
    ]);
    const warm = results['frozen-onebit-warm'];
    const cool = results['frozen-onebit-cool'];

    const warmCh = parseLinearChannels(warm?.fgColor ?? '');
    const coolCh = parseLinearChannels(cool?.fgColor ?? '');
    // Assert
    expect(warmCh, `unparseable warm fg "${warm?.fgColor}"`).not.toBeNull();
    expect(coolCh, `unparseable cool fg "${cool?.fgColor}"`).not.toBeNull();

    const warmSpread = Math.max(...warmCh!) - Math.min(...warmCh!);
    const coolSpread = Math.max(...coolCh!) - Math.min(...coolCh!);
    expect(warmSpread, `#d5d4d4 output is too chromatic: spread ${warmSpread}`).toBeLessThan(0.02);
    expect(coolSpread, `#d4d4d5 output is too chromatic: spread ${coolSpread}`).toBeLessThan(0.02);

    const divergence = Math.max(...warmCh!.map((v, i) => Math.abs(v - coolCh![i])));
    expect(
      divergence,
      `indistinguishable backgrounds produced divergent shades: ${divergence} (${warm?.fgColor} vs ${cool?.fgColor})`,
    ).toBeLessThan(0.02);
  });
});

// Asserted PER ENGINE: Gecko seeds oklch/oklab/lch/lab linearly rather than by
// cube root, so the ratio matches but the chroma does not.

const INVARIANT_SPACES = [
  'oklch',
  'oklab',
  'lch',
  'lab',
  'hsl',
  'hwb',
  'rgb',
  'srgb',
  'srgb-linear',
  'display-p3',
  'a98-rgb',
  'prophoto-rgb',
  'rec2020',
  'xyz',
  'xyz-d50',
  'xyz-d65',
  'color-mix',
] as const;

test.describe('text-contrast: cross-pipeline invariance', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(CONTRAST_PAGE, { waitUntil: 'networkidle' });
  });

  for (const bg of ['violet', 'grey'] as const) {
    test(`all 17 colour spaces report the same ratio on the ${bg} background`, async ({ page }) => {
      // Arrange
      const ids = INVARIANT_SPACES.map((s) => `invariant-${bg}-${s}`);
      // Act
      const results = await extractContrastResults(page, ids);

      const missing = ids.filter((id) => !results[id]);
      // Assert
      expect(missing, `missing fixtures: ${missing.join(', ')}`).toHaveLength(0);

      const ratios = ids.map((id) => results[id].ratio);
      const spread = Math.max(...ratios) - Math.min(...ratios);
      const table = ids
        .map((id, i) => `    ${INVARIANT_SPACES[i].padEnd(13)} ${ratios[i].toFixed(6)}`)
        .join('\n');

      expect(
        spread,
        `ratio diverges across pipelines (spread ${spread.toExponential(3)}): alpha is being quantised somewhere:\n${table}`,
      ).toBeLessThanOrEqual(EXACT_TOLERANCE);

      const { failures } = gradeGrid(results, ids, TARGET_RATIO.AA);
      expect(
        failures,
        `${failures.length} spaces off target:\n${failures.join('\n')}`,
      ).toHaveLength(0);
    });
  }
});

// Gecko rejects a channel keyword inside pow(), and the invalid expression
// surfaces only at `color: var(…)`, falling back to INHERITED.

const POW_SEEDED_SPACES = ['oklch', 'oklab', 'lch', 'lab'] as const;

test.describe('text-contrast: the pow() gate', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(CONTRAST_PAGE, { waitUntil: 'networkidle' });
  });

  for (const bg of ['violet', 'grey'] as const) {
    test(`no cube-root-seeded space falls back to inherited text on ${bg}`, async ({ page }) => {
      // Arrange
      const ids = POW_SEEDED_SPACES.map((s) => `invariant-${bg}-${s}`);
      // Act
      const results = await extractColorVsInherited(page, ids);
      const broken: string[] = [];

      // Assert
      for (const id of ids) {
        const r = results[id];
        if (!r?.color) {
          broken.push(`${id}: element not found`);
          continue;
        }
        if (r.color === r.inherited) {
          broken.push(
            `${id}: colour is identical to the inherited value "${r.inherited}": the shade declaration was dropped, so the pow() seed is reaching an engine that rejects it`,
          );
        }
      }

      expect(
        broken,
        `${broken.length} spaces fell back to inherited:\n${broken.join('\n')}`,
      ).toHaveLength(0);
    });
  }

  test('the gate agrees with what the engine actually accepts', async ({ page }) => {
    // Arrange
    const gate = await detectChannelPow(page);
    // Act
    const accepts = await page.evaluate(() =>
      CSS.supports('color', 'oklch(from red calc(pow(alpha, 0.333333)) c h / alpha)'),
    );
    // Assert
    expect(
      gate,
      `supports-channel-pow reports ${gate} but the shipped cube-root seed is ${accepts ? 'accepted' : 'rejected'}`,
    ).toBe(accepts);
  });
});

const AGREEMENT_CASES = ['violet', 'grey', 'teal'].flatMap((bg) =>
  [
    ['aa', 'oklch'],
    ['aa', 'srgb'],
    ['aa', 'hsl'],
    ['aaa', 'lch'],
    ['aa', 'hwb'],
  ].map(([lvl, sp]) => `${bg}-${lvl}-${sp}`),
);

test.describe('text-contrast: the utility and the @function API agree', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(AGREEMENT_PAGE, { waitUntil: 'networkidle' });
    const supports = await detectSupport(page);
    test.skip(!supports, 'Browser does not support CSS @function');
  });

  test('every level/space pair lands on the same colour by both routes', async ({ page }) => {
    // Arrange
    const ids = AGREEMENT_CASES.flatMap((c) => [
      `agree-util-${c}`,
      `agree-fn-${c}`,
      `agree-stable-${c}`,
    ]);
    // Act
    const results = await extractContrastResults(page, ids);
    const drifted: string[] = [];

    const TOLERANCE = 1e-4;

    // Assert
    for (const c of AGREEMENT_CASES) {
      const util = results[`agree-util-${c}`];
      const fn = results[`agree-fn-${c}`];
      const stable = results[`agree-stable-${c}`];
      if (!util || !fn || !stable) {
        drifted.push(`${c}: fixture missing`);
        continue;
      }
      for (const [aName, a, bName, b] of [
        ['@function', fn, 'stable chain', stable],
        ['utility', util, '@function', fn],
      ] as const) {
        const delta = Math.abs(a.fgLum - b.fgLum);
        if (delta > TOLERANCE) {
          drifted.push(
            `${c}: ${aName} "${a.fgColor}" (Y=${a.fgLum.toFixed(6)}) vs ${bName} "${b.fgColor}" (Y=${b.fgLum.toFixed(6)}), ΔY=${delta.toExponential(3)}`,
          );
        }
      }
    }

    expect(
      drifted,
      `${drifted.length} disagreements across ${AGREEMENT_CASES.length} cases, the two implementations have drifted apart:\n${drifted.join('\n')}`,
    ).toHaveLength(0);
  });

  test('the stable readout is reading a real chain, not inheriting a colour', async ({ page }) => {
    // Arrange
    const ids = AGREEMENT_CASES.map((c) => `agree-stable-${c}`);
    // Act
    const chains = await page.evaluate(
      (sels) =>
        Object.fromEntries(
          sels.map((sel) => {
            const el = document.querySelector(`[data-test="${sel}"]`);
            return [
              sel,
              el ? getComputedStyle(el).getPropertyValue('--tw-jib--contrast--shade').trim() : '',
            ];
          }),
        ),
      ids,
    );
    const broken = ids.filter((id) => !chains[id]?.includes('srgb-linear'));
    // Assert
    expect(
      broken,
      `${broken.length} readouts have no chain to read, --tw-jib--contrast--shade did not reach the child, so the agreement test is comparing the @function path against itself:\n${broken
        .map((id) => `${id}: "${chains[id]}"`)
        .join('\n')}`,
    ).toHaveLength(0);
  });
});

const RATING_RANK = { Fail: 0, 'AA Large': 1, AA: 2, AAA: 3 } as const;

test.describe('text-contrast + wcag-badge: the badge must agree with the class', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(COMBO_PAGE, { waitUntil: 'networkidle' });
    const supports = await detectSupport(page);
    test.skip(!supports, 'Browser does not support CSS @function');
  });

  for (const group of COMBO_GROUPS) {
    test(`badge awards at least ${group.level} where text-contrast-${group.prefix} asks for it`, async ({
      // Arrange
      page,
    }) => {
      const ids = group.hues.flatMap((h) => TW_SHADES.map((s) => `${group.prefix}-${h}-${s}`));
      // Act
      const results = await extractBadgeResults(page, ids);
      const target = TARGET_RATIO[group.level];
      const wanted = RATING_RANK[group.level];
      const failures: string[] = [];
      let unreachable = 0;

      // Assert
      for (const id of ids) {
        const r = results[id];
        if (!r) {
          failures.push(`${id}: element not found`);
          continue;
        }
        if (maxContrastAgainst(r.bgLum) < target) {
          unreachable++;
          if (r.cssRating !== 'Max') {
            failures.push(
              `${id}: ${group.level} unreachable (ceiling ${maxContrastAgainst(r.bgLum).toFixed(2)}), badge should say "Max" but says "${r.cssRating}"`,
            );
          }
          continue;
        }
        const got = RATING_RANK[r.cssRating as keyof typeof RATING_RANK] ?? -1;
        if (got < wanted) {
          failures.push(
            `${id}: class asks ${group.level}, badge says "${r.cssRating}" (measured ${r.ratio.toFixed(6)}, ceiling ${maxContrastAgainst(r.bgLum).toFixed(3)})`,
          );
        }
      }

      expect(
        failures,
        `${failures.length} fixtures disagree with their class (${unreachable} of ${ids.length} were unreachable):\n${failures.join('\n')}`,
      ).toHaveLength(0);
    });
  }

  test('a bare wcag-badge never reports Max', async ({ page }) => {
    // Arrange
    await page.goto(BADGE_PAGE, { waitUntil: 'networkidle' });
    // Act
    const results = await extractBadgeResults(page, BADGE_IDS);
    const spurious = BADGE_IDS.filter((id) => results[id]?.cssRating === 'Max');
    // Assert
    expect(
      spurious,
      `badge reported Max without a requested level:\n${spurious.join(', ')}`,
    ).toHaveLength(0);
  });
});

function ratingsCompatible(cssRating: string, jsRating: string): boolean {
  return cssRating === jsRating;
}

test.describe('wcag-badge: rating verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BADGE_PAGE, { waitUntil: 'networkidle' });
    const supports = await detectSupport(page);
    test.skip(!supports, 'Browser does not support CSS @function');
  });

  test('CSS rating matches JS rating for all 242 TW colours', async ({ page }) => {
    // Arrange
    // Act
    const results = await extractBadgeResults(page, BADGE_IDS);
    const mismatches: string[] = [];

    // Assert
    for (const id of BADGE_IDS) {
      const r = results[id];
      if (!r) {
        mismatches.push(`${id}: element not found`);
        continue;
      }
      if (!ratingsCompatible(r.cssRating, r.jsRating)) {
        mismatches.push(
          `${id}: CSS says "${r.cssRating}", JS says "${r.jsRating}" (ratio ${r.ratio.toFixed(2)})`,
        );
      }
    }

    expect(
      mismatches,
      `${mismatches.length} rating mismatches:\n${mismatches.join('\n')}`,
    ).toHaveLength(0);
  });

  test('all 242 badges have non-empty ::after content', async ({ page }) => {
    // Arrange
    // Act
    const results = await extractBadgeResults(page, BADGE_IDS);
    const empty: string[] = [];

    // Assert
    for (const id of BADGE_IDS) {
      const r = results[id];
      if (!r || !r.cssRating || r.cssRating === 'none' || r.cssRating === 'normal') {
        empty.push(id);
      }
    }

    expect(empty, `${empty.length} badges have no content:\n${empty.join(', ')}`).toHaveLength(0);
  });

  test('CSS rating matches JS rating for threshold edge cases', async ({ page }) => {
    // Arrange
    const edgeIds = [
      'edge-blue700-black',
      'edge-orange500-white',
      'edge-red400-white',
      'edge-emerald500-white',
      'edge-gray600-black',
      'edge-violet400-white',
      'edge-slate500-white',
      'edge-slate500-black',
      'edge-red600-white',
      'edge-red600-black',
      'edge-gray500-white',
      'edge-violet500-white',
      'edge-violet500-black',
      'edge-blue600-black',
      'edge-blue700-white',
      'edge-orange500-black',
      'edge-gray600-white',
      'edge-slate600-white',
    ];

    // Act
    const results = await extractBadgeResults(page, edgeIds);
    const mismatches: string[] = [];

    // Assert
    for (const id of edgeIds) {
      const r = results[id];
      if (!r) {
        mismatches.push(`${id}: element not found`);
        continue;
      }
      if (!ratingsCompatible(r.cssRating, r.jsRating)) {
        mismatches.push(
          `${id}: CSS "${r.cssRating}" vs JS "${r.jsRating}" (ratio ${r.ratio.toFixed(2)})`,
        );
      }
    }

    expect(
      mismatches,
      `${mismatches.length} edge case mismatches:\n${mismatches.join('\n')}`,
    ).toHaveLength(0);
  });

  test('all ratings are clean (exact pipeline produces no tilde)', async ({ page }) => {
    // Arrange
    const cleanIds = ['clean-fail', 'clean-aalg', 'clean-aa', 'clean-aaa'];

    // Act
    const results = await extractBadgeResults(page, cleanIds);
    const hasTilde: string[] = [];

    // Assert
    for (const id of cleanIds) {
      const r = results[id];
      if (!r) {
        hasTilde.push(`${id}: element not found`);
        continue;
      }
      if (r.cssRating.startsWith('~')) {
        hasTilde.push(`${id}: unexpected tilde "${r.cssRating}" (ratio ${r.ratio.toFixed(2)})`);
      }
    }

    expect(
      hasTilde,
      `${hasTilde.length} pairs have unexpected tilde:\n${hasTilde.join('\n')}`,
    ).toHaveLength(0);
  });
});
