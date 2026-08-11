import { test, expect, type Page } from '@playwright/test';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const TW_HUES = [
  'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
  'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink',
  'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone',
] as const;

const TW_SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

/** All 242 data-test IDs for the accessible shade page (AA level) */
const A11Y_IDS = TW_HUES.flatMap((h) => TW_SHADES.map((s) => `${h}-${s}`));

/** AAA and AA Large grids */
const A11Y_AAA_IDS = TW_HUES.flatMap((h) => TW_SHADES.map((s) => `aaa-${h}-${s}`));
const A11Y_AALG_IDS = TW_HUES.flatMap((h) => TW_SHADES.map((s) => `aalg-${h}-${s}`));

/** All 242 data-test IDs for the badge page */
const BADGE_IDS = TW_HUES.flatMap((h) => TW_SHADES.map((s) => `badge-${h}-${s}`));

const SUPPORTS_WCAG =
  '(background: if(style(--value): red)) and (background: --tw-jib--linearize(red))';

const A11Y_PAGE = 'examples/wcag';
const BADGE_PAGE = 'examples/wcag-badge';
/** Both utilities on the same element — the combination fixture. */
const COMBO_PAGE = 'examples/wcag-a11y-badge';

/** Fixture ids on COMBO_PAGE, grouped by the level their class requests. */
const COMBO_GROUPS = [
  { prefix: 'aa', level: 'AA', hues: ['red', 'blue', 'green', 'amber', 'slate'] },
  { prefix: 'aaa', level: 'AAA', hues: ['red', 'blue', 'slate'] },
  { prefix: 'aalg', level: 'AA Large', hues: ['red', 'blue', 'slate'] },
] as const;

// ---------------------------------------------------------------------------
// Helpers — run inside page.evaluate
// ---------------------------------------------------------------------------

interface A11yResult {
  bgColor: string;
  fgColor: string;
  bgLum: number;
  fgLum: number;
  ratio: number;
  jsRating: string;
  fgAlpha: number;
  /** false if either colour fell back to the 8-bit canvas path, making the
   *  measured ratio too coarse for an exact-ratio assertion. */
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
 * Browser-side helpers that parse a CSS colour string directly to WCAG
 * relative luminance — bypassing canvas2d, which would round through 8-bit
 * sRGB and lose ~5–10% precision on oklch/oklab shades the renderer
 * actually paints with full float precision.
 *
 * Handles oklch(), oklab(), rgb()/rgba(), color(srgb …),
 * color(srgb-linear …); falls back to canvas for any other format
 * (hsl/hwb/named colours/system colours).
 *
 * The numeric character classes MUST accept exponent notation. Chromium
 * serialises a channel that landed exactly on a gamut bound as e.g.
 * -1.49012e-8, and a class of [0-9.+\-] silently fails to match it, dropping
 * the colour to the 8-bit canvas path — precise enough for a rating check,
 * nowhere near precise enough for an exact-ratio check. toLumAlpha reports
 * which path it took so that degradation cannot hide again.
 *
 * Injected via string template into both extract functions because
 * page.evaluate() can't share scope.
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

  /**
   * Parse a CSS colour string to { lum, alpha } with full float precision.
   * Returns null if the string is in an unrecognised format — caller can
   * fall back to canvas.
   */
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

    // oklch(L C H [/ A])  — L: number 0..1 or %, C: number, H: number in deg
    // Linear sRGB is NOT clamped before WCAG luminance — out-of-gamut
    // oklch shades commonly produce r > 1 or g < 0 (TW4 reds are outside
    // sRGB), and clamping shifts the ratio by several percent. WCAG 2
    // luminance is defined as a linear combination of linear sRGB, valid
    // for any real input (matches OddContrast/DevTools behaviour).
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

    // oklab(L a b [/ A])  — L: 0..1 or %, a/b: number or % (100% = 0.4)
    // No clamp — see oklch comment above.
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

    // color(srgb r g b [/ a])  — r/g/b in 0..1
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

  // Canvas fallback — used only for unparseable formats (hsl, named, etc).
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

  // exact: true when parsed at full float precision, false when the 8-bit
  // canvas fallback was used. Callers doing exact-ratio work must reject false.
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

/**
 * Batch-extract text-a11y results: bg colour, computed text colour,
 * JS-computed WCAG ratio and rating. Luminance is computed by parsing
 * the CSS colour string directly (full float precision) — no canvas
 * 8-bit roundtrip.
 */
async function extractA11yResults(
  page: Page,
  ids: string[],
): Promise<Record<string, A11yResult>> {
  return page.evaluate(
    ({ sels, helpersSrc }) => {
      // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
      new Function(helpersSrc + '; window.__wcagHelpers = { toLumAlpha, contrastRatio, wcagRating };')();
      const { toLumAlpha, contrastRatio, wcagRating } = (window as unknown as { __wcagHelpers: { toLumAlpha: (s: string) => { lum: number; alpha: number; exact: boolean }; contrastRatio: (a: number, b: number) => number; wcagRating: (r: number) => string } }).__wcagHelpers;

      const out: Record<string, A11yResult> = {};
      for (const sel of sels) {
        const el = document.querySelector(`[data-test="${sel}"]`);
        if (!el) {
          out[sel] = { bgColor: '', fgColor: '', bgLum: 0, fgLum: 0, ratio: 0, jsRating: 'Fail', fgAlpha: 0, exact: false };
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
      return out;
    },
    { sels: ids, helpersSrc: COLOR_HELPERS_SOURCE },
  );
}

/**
 * Batch-extract wcag-badge results: bg+fg colours, JS ratio/rating,
 * and the CSS-computed rating from ::after content.
 */
async function extractBadgeResults(
  page: Page,
  ids: string[],
): Promise<Record<string, BadgeResult>> {
  return page.evaluate(
    ({ sels, helpersSrc }) => {
      // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
      new Function(helpersSrc + '; window.__wcagHelpers = { toLumAlpha, contrastRatio, wcagRating };')();
      const { toLumAlpha, contrastRatio, wcagRating } = (window as unknown as { __wcagHelpers: { toLumAlpha: (s: string) => { lum: number; alpha: number }; contrastRatio: (a: number, b: number) => number; wcagRating: (r: number) => string } }).__wcagHelpers;

      const out: Record<string, BadgeResult> = {};
      for (const sel of sels) {
        const el = document.querySelector(`[data-test="${sel}"]`);
        if (!el) {
          out[sel] = { bgColor: '', fgColor: '', bgLum: 0, fgLum: 0, ratio: 0, jsRating: 'Fail', cssRating: '' };
          continue;
        }
        const cs = getComputedStyle(el);
        const afterCs = getComputedStyle(el, '::after');
        const bgStr = cs.backgroundColor;
        const fgStr = cs.color;
        const bg = toLumAlpha(bgStr);
        const fg = toLumAlpha(fgStr);
        const ratio = contrastRatio(bg.lum, fg.lum);
        // ::after content comes as e.g. '"AAA"' — strip quotes
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
      return out;
    },
    { sels: ids, helpersSrc: COLOR_HELPERS_SOURCE },
  );
}

async function detectSupport(page: Page): Promise<boolean> {
  return page.evaluate((q) => CSS.supports(q), SUPPORTS_WCAG);
}

// ---------------------------------------------------------------------------
// Exactness grading
//
// The shade is solved algebraically rather than searched, so the contract is
// much stronger than "the rating is at or above the requested level": the
// achieved ratio EQUALS the requested ratio. Three verdicts:
//
//   PASS   — |measured − target| <= 0.006. Covers computed-value
//            serialisation rounding plus the infinitesimal band around the
//            branchless step functions used for the direction pivot.
//   CAPPED — the target is physically unreachable from this background, so
//            the output saturated at pure black or white and the achieved
//            ratio equals the background's ceiling. Correct degradation.
//   FAIL   — anything else.
//
// Deliberately grading the RATIO, not the rating string. The utilities aim at
// the ratio exactly, so a measured value lands a hair either side of the named
// threshold (observed spread ~1.6e-5) and a `ratio >= 7 ? 'AAA'` classifier
// flips between AAA and AA on float noise. Asserting the rating would be flaky
// by construction; asserting the ratio is the real contract.
// ---------------------------------------------------------------------------

function ratio(l1: number, l2: number) {
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

const TARGET_RATIO = { AAA: 7, AA: 4.5, 'AA Large': 3 } as const;

/** Tolerance on hitting the requested ratio. */
const EXACT_TOLERANCE = 0.006;
/** Tolerance on parking at the background's physical ceiling. */
const CAPPED_TOLERANCE = 0.03;

/** maxCR(Yb) — the highest ratio ANY colour can achieve against this
 *  background. Bottoms out at √21 ≈ 4.583 at the 0.1791 pivot, which is why
 *  3:1 and 4.5:1 are always reachable and 7:1 is not. */
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

/** Grade a whole grid of fixtures against one target ratio. */
function gradeGrid(
  results: Record<string, A11yResult>,
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
        `${id}: measured via the 8-bit canvas fallback, too coarse to grade — bg "${r.bgColor}", fg "${r.fgColor}"`,
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

/** Parse the linear-light channel triple out of a computed text colour.
 *  The shade pipeline's final stage emits color(from … srgb-linear …), which
 *  Chromium serialises as color(srgb-linear r g b). Used for neutrality
 *  checks, where 8-bit rounding would hide the thing being measured. */
function parseLinearChannels(str: string): [number, number, number] | null {
  const m = str
    .trim()
    .match(/^color\(srgb-linear\s+([-\d.e+]+)\s+([-\d.e+]+)\s+([-\d.e+]+)/);
  return m ? [Number(m[1]), Number(m[2]), Number(m[3])] : null;
}

/** Spread between the largest and smallest channel — 0 means achromatic. */
function channelSpread(str: string): number | null {
  const ch = parseLinearChannels(str);
  return ch ? Math.max(...ch) - Math.min(...ch) : null;
}

// ---------------------------------------------------------------------------
// text-a11y-aa tests
// ---------------------------------------------------------------------------

test.describe('text-a11y-aa — exact ratio verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(A11Y_PAGE, { waitUntil: 'networkidle' });
    const supports = await detectSupport(page);
    test.skip(!supports, 'Browser does not support CSS @function');
  });

  test('all 242 TW colours land exactly on 4.5:1', async ({ page }) => {
    const results = await extractA11yResults(page, A11Y_IDS);
    const { failures, capped } = gradeGrid(results, A11Y_IDS, TARGET_RATIO.AA);

    expect(failures, `${failures.length} colours missed AA:\n${failures.join('\n')}`).toHaveLength(0);
    // 4.5:1 is below the √21 ≈ 4.583 floor of maxCR, so it is reachable from
    // EVERY background — nothing may degrade to the ceiling.
    expect(capped, 'AA is reachable from every background; none should be capped').toBe(0);
  });

  test('all 242 TW colours have visible (non-transparent) text', async ({ page }) => {
    const results = await extractA11yResults(page, A11Y_IDS);
    const invisible: string[] = [];

    for (const id of A11Y_IDS) {
      const r = results[id];
      if (!r || r.fgAlpha < 0.1) {
        invisible.push(id);
      }
    }

    expect(invisible, `${invisible.length} colours have invisible text:\n${invisible.join(', ')}`).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// text-a11y-aaa tests (separate page)
// ---------------------------------------------------------------------------

test.describe('text-a11y-aaa — exact ratio verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(A11Y_PAGE, { waitUntil: 'networkidle' });
    const supports = await detectSupport(page);
    test.skip(!supports, 'Browser does not support CSS @function');
  });

  test('all 242 TW colours land exactly on 7:1, or at their physical ceiling', async ({ page }) => {
    const results = await extractA11yResults(page, A11Y_AAA_IDS);
    const { failures, capped } = gradeGrid(results, A11Y_AAA_IDS, TARGET_RATIO.AAA);

    expect(failures, `${failures.length} colours missed AAA:\n${failures.join('\n')}`).toHaveLength(0);
    // 7:1 is mathematically unreachable for backgrounds with luminance in
    // (0.10, 0.30), so some cells MUST degrade to the ceiling. Zero capped
    // would mean the grading is not actually discriminating.
    expect(capped, 'some mid-luminance backgrounds cannot reach 7:1').toBeGreaterThan(0);
  });
});

// ---------------------------------------------------------------------------
// text-a11y-aa-lg tests (separate page)
// ---------------------------------------------------------------------------

test.describe('text-a11y-aa-lg — exact ratio verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(A11Y_PAGE, { waitUntil: 'networkidle' });
    const supports = await detectSupport(page);
    test.skip(!supports, 'Browser does not support CSS @function');
  });

  test('all 242 TW colours land exactly on 3:1', async ({ page }) => {
    const results = await extractA11yResults(page, A11Y_AALG_IDS);
    const { failures, capped } = gradeGrid(results, A11Y_AALG_IDS, TARGET_RATIO['AA Large']);

    expect(failures, `${failures.length} colours missed AA Large:\n${failures.join('\n')}`).toHaveLength(0);
    expect(capped, 'AA Large is reachable from every background; none should be capped').toBe(0);
  });
});

// ---------------------------------------------------------------------------
// text-a11y — threshold edge cases
// ---------------------------------------------------------------------------

/** Backgrounds near each threshold, paired with the ratio their class targets */
const A11Y_EDGE_IDS = {
  // Near 3:1 — text-a11y-aa-lg
  'edge-blue-400': TARGET_RATIO['AA Large'],
  'edge-emerald-500': TARGET_RATIO['AA Large'],
  'edge-orange-500': TARGET_RATIO['AA Large'],
  'edge-pink-400': TARGET_RATIO['AA Large'],
  // Near 4.5:1 — text-a11y-aa
  'edge-slate-500': TARGET_RATIO.AA,
  'edge-red-600': TARGET_RATIO.AA,
  'edge-violet-500': TARGET_RATIO.AA,
  'edge-gray-500': TARGET_RATIO.AA,
  // Near 7:1 — text-a11y-aaa
  'edge-blue-700': TARGET_RATIO.AAA,
  'edge-gray-600': TARGET_RATIO.AAA,
  'edge-slate-600': TARGET_RATIO.AAA,
  'edge-teal-600': TARGET_RATIO.AAA,
} as const;

test.describe('text-a11y — threshold edge cases', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(A11Y_PAGE, { waitUntil: 'networkidle' });
    const supports = await detectSupport(page);
    test.skip(!supports, 'Browser does not support CSS @function');
  });

  test('lands on target (or the ceiling) near each threshold boundary', async ({ page }) => {
    const ids = Object.keys(A11Y_EDGE_IDS);
    const results = await extractA11yResults(page, ids);
    const failures: string[] = [];

    for (const id of ids) {
      const r = results[id];
      if (!r) {
        failures.push(`${id}: element not found`);
        continue;
      }
      const target = A11Y_EDGE_IDS[id as keyof typeof A11Y_EDGE_IDS];
      const graded = gradeExactness(r, target);
      if (graded.verdict === 'FAIL') failures.push(`${id}: ${graded.reason}`);
    }

    expect(failures, `${failures.length} edge cases failed:\n${failures.join('\n')}`).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// Frozen regression cases
//
// Each was a characterised failure during development of the closed-form
// solver. The exact-grey and one-bit-tint cases now guard an invariant rather
// than reproducing a live bug — the formulations that broke them are gone from
// the API — so they are expected to pass comfortably. Do not delete them on
// those grounds: they are the direct check that float residue in the chroma
// vector stays unamplified.
// ---------------------------------------------------------------------------

/** Fixture id → the ratio its class targets. */
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

/** The two AAA fixtures whose targets are physically out of reach. */
const FROZEN_EXPECT_CAPPED = new Set(['frozen-capped-grey', 'frozen-capped-indigo']);

test.describe('text-a11y — frozen regression cases', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(A11Y_PAGE, { waitUntil: 'networkidle' });
    const supports = await detectSupport(page);
    test.skip(!supports, 'Browser does not support CSS @function');
  });

  test('every frozen case grades as expected', async ({ page }) => {
    const ids = Object.keys(FROZEN_TARGETS);
    const results = await extractA11yResults(page, ids);
    const failures: string[] = [];

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
        failures.push(`${id}: expected ${expected}, got ${graded.verdict} — ${graded.reason}`);
      }
    }

    expect(failures, `${failures.length} frozen cases regressed:\n${failures.join('\n')}`).toHaveLength(0);
  });

  test('exact grey stays achromatic at all three levels', async ({ page }) => {
    // The luma weights do not sum to exactly 1.0 in float, leaving a uniform
    // residual of order 1e-7 in the chroma vector on a mathematically exact
    // grey. An earlier formulation amplified it ~1e5x into a visible tint and
    // a 0.015 luminance error. The scale is now bounded by min(1, …), so the
    // residual must stay the size it started.
    const ids = ['frozen-grey-aa', 'frozen-grey-aaa', 'frozen-grey-aalg'];
    const results = await extractA11yResults(page, ids);
    const tinted: string[] = [];

    for (const id of ids) {
      const spread = channelSpread(results[id]?.fgColor ?? '');
      if (spread === null) {
        tinted.push(`${id}: could not parse channels from "${results[id]?.fgColor}"`);
      } else if (spread > 1e-3) {
        tinted.push(`${id}: channel spread ${spread.toExponential(3)} — grey input produced a tint`);
      }
    }

    expect(tinted, `${tinted.length} grey fixtures picked up a tint:\n${tinted.join('\n')}`).toHaveLength(0);
  });

  test('one-bit tints stay near-neutral and near-identical', async ({ page }) => {
    // #d5d4d4 vs #d4d4d5 differ by one 8-bit step and are visually identical.
    // Their chroma vectors differ in direction by a quantisation-scale amount,
    // so a gamut-maximal scale amplified that into crimson vs ultramarine.
    const results = await extractA11yResults(page, ['frozen-onebit-warm', 'frozen-onebit-cool']);
    const warm = results['frozen-onebit-warm'];
    const cool = results['frozen-onebit-cool'];

    const warmCh = parseLinearChannels(warm?.fgColor ?? '');
    const coolCh = parseLinearChannels(cool?.fgColor ?? '');
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

// ---------------------------------------------------------------------------
// Cross-pipeline invariance
//
// All seventeen colour-space modifiers share one luminance solve, so they MUST
// report the identical ratio on a given background — the space only changes the
// aesthetic path. The Class 2/3 pipelines carry the solved target luminance
// through the alpha channel of a nested relative colour, so any quantisation of
// alpha in that nest shows up here as a divergence. This is the test that
// catches carrier breakage.
// ---------------------------------------------------------------------------

const INVARIANT_SPACES = [
  'oklch', 'oklab', 'lch', 'lab', 'hsl', 'hwb', 'rgb',
  'srgb', 'srgb-linear', 'display-p3', 'a98-rgb',
  'prophoto-rgb', 'rec2020', 'xyz', 'xyz-d50', 'xyz-d65',
  'color-mix',
] as const;

test.describe('text-a11y — cross-pipeline invariance', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(A11Y_PAGE, { waitUntil: 'networkidle' });
    const supports = await detectSupport(page);
    test.skip(!supports, 'Browser does not support CSS @function');
  });

  for (const bg of ['violet', 'grey'] as const) {
    test(`all 17 colour spaces report the same ratio on the ${bg} background`, async ({ page }) => {
      const ids = INVARIANT_SPACES.map((s) => `invariant-${bg}-${s}`);
      const results = await extractA11yResults(page, ids);

      const missing = ids.filter((id) => !results[id]);
      expect(missing, `missing fixtures: ${missing.join(', ')}`).toHaveLength(0);

      const ratios = ids.map((id) => results[id].ratio);
      const spread = Math.max(...ratios) - Math.min(...ratios);
      const table = ids
        .map((id, i) => `    ${INVARIANT_SPACES[i].padEnd(13)} ${ratios[i].toFixed(6)}`)
        .join('\n');

      expect(
        spread,
        `ratio diverges across pipelines (spread ${spread.toExponential(3)}) — alpha is being quantised somewhere:\n${table}`,
      ).toBeLessThanOrEqual(EXACT_TOLERANCE);

      // And every one of them must actually be on target, not merely agree.
      const { failures } = gradeGrid(results, ids, TARGET_RATIO.AA);
      expect(failures, `${failures.length} spaces off target:\n${failures.join('\n')}`).toHaveLength(0);
    });
  }
});

// ---------------------------------------------------------------------------
// text-a11y + wcag-badge on the same element
//
// The two utilities must not contradict each other: if the class asks for AA,
// the badge sitting on that element has to say AA or better. This is the check
// that a closed-form shade makes load-bearing. While shades were found by
// search they overshot every threshold, so the badge's own precision never
// decided a verdict. Landing exactly ON a threshold makes the badge the
// arbiter of an exact tie, and it got it wrong twice over — a legacy rgb()
// round-trip in the luminance path biased the measurement 5e-4 to 9e-4 toward
// failing, and a step function that returns 0 at exactly 0 failed the tie
// regardless. Both are fixed in _functions.css; this is the guard.
// ---------------------------------------------------------------------------

const RATING_RANK = { Fail: 0, 'AA Large': 1, AA: 2, AAA: 3 } as const;

test.describe('text-a11y + wcag-badge — the badge must agree with the class', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(COMBO_PAGE, { waitUntil: 'networkidle' });
    const supports = await detectSupport(page);
    test.skip(!supports, 'Browser does not support CSS @function');
  });

  for (const group of COMBO_GROUPS) {
    test(`badge awards at least ${group.level} where text-a11y-${group.prefix} asks for it`, async ({ page }) => {
      const ids = group.hues.flatMap((h) => TW_SHADES.map((s) => `${group.prefix}-${h}-${s}`));
      const results = await extractBadgeResults(page, ids);
      const target = TARGET_RATIO[group.level];
      const wanted = RATING_RANK[group.level];
      const failures: string[] = [];
      let unreachable = 0;

      for (const id of ids) {
        const r = results[id];
        if (!r) {
          failures.push(`${id}: element not found`);
          continue;
        }
        // Where the level is physically unreachable the shade parks at the
        // background's ceiling and the badge is right to report lower.
        if (maxContrastAgainst(r.bgLum) < target) {
          unreachable++;
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
        `${failures.length} of ${ids.length - unreachable} reachable fixtures disagree with their class:\n${failures.join('\n')}`,
      ).toHaveLength(0);
    });
  }
});

// ---------------------------------------------------------------------------
// wcag-badge tests
// ---------------------------------------------------------------------------

/**
 * The CSS pipeline is mathematically exact (packed-luminance + multi-channel
 * color-mix), so the rating must strictly match the JS reference.
 */
function ratingsCompatible(cssRating: string, jsRating: string): boolean {
  return cssRating === jsRating;
}

test.describe('wcag-badge — rating verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BADGE_PAGE, { waitUntil: 'networkidle' });
    const supports = await detectSupport(page);
    test.skip(!supports, 'Browser does not support CSS @function');
  });

  test('CSS rating matches JS rating for all 242 TW colours', async ({ page }) => {
    const results = await extractBadgeResults(page, BADGE_IDS);
    const mismatches: string[] = [];

    for (const id of BADGE_IDS) {
      const r = results[id];
      if (!r) {
        mismatches.push(`${id}: element not found`);
        continue;
      }
      if (!ratingsCompatible(r.cssRating, r.jsRating)) {
        mismatches.push(`${id}: CSS says "${r.cssRating}", JS says "${r.jsRating}" (ratio ${r.ratio.toFixed(2)})`);
      }
    }

    expect(mismatches, `${mismatches.length} rating mismatches:\n${mismatches.join('\n')}`).toHaveLength(0);
  });

  test('all 242 badges have non-empty ::after content', async ({ page }) => {
    const results = await extractBadgeResults(page, BADGE_IDS);
    const empty: string[] = [];

    for (const id of BADGE_IDS) {
      const r = results[id];
      if (!r || !r.cssRating || r.cssRating === 'none' || r.cssRating === 'normal') {
        empty.push(id);
      }
    }

    expect(empty, `${empty.length} badges have no content:\n${empty.join(', ')}`).toHaveLength(0);
  });

  test('CSS rating matches JS rating for threshold edge cases', async ({ page }) => {
    const edgeIds = [
      // Near 3:1
      'edge-blue700-black', 'edge-orange500-white', 'edge-red400-white',
      'edge-emerald500-white', 'edge-gray600-black', 'edge-violet400-white',
      // Near 4.5:1
      'edge-slate500-white', 'edge-slate500-black', 'edge-red600-white',
      'edge-red600-black', 'edge-gray500-white', 'edge-violet500-white',
      'edge-violet500-black', 'edge-blue600-black',
      // Near 7:1
      'edge-blue700-white', 'edge-orange500-black', 'edge-gray600-white',
      'edge-slate600-white',
    ];

    const results = await extractBadgeResults(page, edgeIds);
    const mismatches: string[] = [];

    for (const id of edgeIds) {
      const r = results[id];
      if (!r) {
        mismatches.push(`${id}: element not found`);
        continue;
      }
      if (!ratingsCompatible(r.cssRating, r.jsRating)) {
        mismatches.push(`${id}: CSS "${r.cssRating}" vs JS "${r.jsRating}" (ratio ${r.ratio.toFixed(2)})`);
      }
    }

    expect(mismatches, `${mismatches.length} edge case mismatches:\n${mismatches.join('\n')}`).toHaveLength(0);
  });

  test('all ratings are clean (exact pipeline produces no tilde)', async ({ page }) => {
    const cleanIds = ['clean-fail', 'clean-aalg', 'clean-aa', 'clean-aaa'];

    const results = await extractBadgeResults(page, cleanIds);
    const hasTilde: string[] = [];

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

    expect(hasTilde, `${hasTilde.length} pairs have unexpected tilde:\n${hasTilde.join('\n')}`).toHaveLength(0);
  });
});
