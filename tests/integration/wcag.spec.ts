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
    m = str.match(/^rgba?\\(\\s*([0-9.+\\-]+)\\s*[, ]\\s*([0-9.+\\-]+)\\s*[, ]\\s*([0-9.+\\-]+)\\s*(?:[,/]\\s*([0-9.+\\-]+%?)\\s*)?\\)$/);
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
    m = str.match(/^oklch\\(\\s*([0-9.+\\-]+%?)\\s+([0-9.+\\-]+%?)\\s+([0-9.+\\-]+)(?:deg)?\\s*(?:\\/\\s*([0-9.+\\-]+%?)\\s*)?\\)$/);
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
    m = str.match(/^oklab\\(\\s*([0-9.+\\-]+%?)\\s+([0-9.+\\-]+%?)\\s+([0-9.+\\-]+%?)\\s*(?:\\/\\s*([0-9.+\\-]+%?)\\s*)?\\)$/);
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
    m = str.match(/^color\\(\\s*srgb\\s+([0-9.+\\-]+)\\s+([0-9.+\\-]+)\\s+([0-9.+\\-]+)\\s*(?:\\/\\s*([0-9.+\\-]+%?)\\s*)?\\)$/);
    if (m) {
      const r = clamp01(parseFloat(m[1]));
      const g = clamp01(parseFloat(m[2]));
      const b = clamp01(parseFloat(m[3]));
      const a = m[4] ? (m[4].endsWith('%') ? parseFloat(m[4]) / 100 : parseFloat(m[4])) : 1;
      const lum = 0.2126 * srgbCompToLinear(r) + 0.7152 * srgbCompToLinear(g) + 0.0722 * srgbCompToLinear(b);
      return { lum, alpha: a };
    }

    // color(srgb-linear r g b [/ a])
    m = str.match(/^color\\(\\s*srgb-linear\\s+([0-9.+\\-]+)\\s+([0-9.+\\-]+)\\s+([0-9.+\\-]+)\\s*(?:\\/\\s*([0-9.+\\-]+%?)\\s*)?\\)$/);
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

  function toLumAlpha(str) {
    return parseColorToWcag(str) || canvasFallback(str);
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
      const { toLumAlpha, contrastRatio, wcagRating } = (window as unknown as { __wcagHelpers: { toLumAlpha: (s: string) => { lum: number; alpha: number }; contrastRatio: (a: number, b: number) => number; wcagRating: (r: number) => string } }).__wcagHelpers;

      const out: Record<string, A11yResult> = {};
      for (const sel of sels) {
        const el = document.querySelector(`[data-test="${sel}"]`);
        if (!el) {
          out[sel] = { bgColor: '', fgColor: '', bgLum: 0, fgLum: 0, ratio: 0, jsRating: 'Fail', fgAlpha: 0 };
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
// Best-possible contrast — for backgrounds where no in-hue shade can hit
// the requested WCAG level, the shade finder is allowed to fall back to
// pure white or pure black (whichever yields higher contrast). These
// helpers verify the fixture's text colour matches that extreme.
// ---------------------------------------------------------------------------

function ratio(l1: number, l2: number) {
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

const REQUIRED_RATIO = { AAA: 7, AA: 4.5, 'AA Large': 3 } as const;
type RequiredLevel = keyof typeof REQUIRED_RATIO;

interface BestPossible {
  bestRatio: number;
  bestExtreme: 'white' | 'black';
}

function bestPossibleAgainst(bgLum: number): BestPossible {
  const whiteRatio = ratio(bgLum, 1.0);
  const blackRatio = ratio(bgLum, 0.0);
  return whiteRatio >= blackRatio
    ? { bestRatio: whiteRatio, bestExtreme: 'white' }
    : { bestRatio: blackRatio, bestExtreme: 'black' };
}

/** Returns true if the shade finder picked the higher-contrast extreme
 *  for a background that cannot reach the requested level by any shade.
 *  Tolerance accounts for residual rounding in the colour pipeline.
 */
function chosePassingExtreme(
  result: { bgLum: number; ratio: number },
  required: RequiredLevel,
): { ok: boolean; reason: string } {
  const { bestRatio, bestExtreme } = bestPossibleAgainst(result.bgLum);
  if (bestRatio >= REQUIRED_RATIO[required]) {
    return { ok: false, reason: `${required} (${REQUIRED_RATIO[required]}:1) is reachable — best extreme gives ${bestRatio.toFixed(2)}:1` };
  }
  // Verify the shade-finder result is within 5% of the higher-contrast extreme.
  const TOLERANCE = 0.05;
  if (Math.abs(result.ratio - bestRatio) <= bestRatio * TOLERANCE) {
    return { ok: true, reason: `${required} unreachable; chose ${bestExtreme} (${result.ratio.toFixed(2)}:1 vs best ${bestRatio.toFixed(2)}:1)` };
  }
  return {
    ok: false,
    reason: `${required} unreachable; expected ${bestExtreme} (${bestRatio.toFixed(2)}:1) but got ${result.ratio.toFixed(2)}:1`,
  };
}

// ---------------------------------------------------------------------------
// text-a11y-aa tests
// ---------------------------------------------------------------------------

test.describe('text-a11y-aa — contrast verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(A11Y_PAGE, { waitUntil: 'networkidle' });
    const supports = await detectSupport(page);
    test.skip(!supports, 'Browser does not support CSS @function');
  });

  test('all 242 TW colours produce text that meets AA (4.5:1) or better', async ({ page }) => {
    const results = await extractA11yResults(page, A11Y_IDS);
    const failures: string[] = [];

    for (const id of A11Y_IDS) {
      const r = results[id];
      if (!r) {
        failures.push(`${id}: element not found`);
        continue;
      }
      if (r.jsRating !== 'AA' && r.jsRating !== 'AAA') {
        const extreme = chosePassingExtreme(r, 'AA');
        if (!extreme.ok) {
          failures.push(`${id}: ratio ${r.ratio.toFixed(2)} → ${r.jsRating} — ${extreme.reason}`);
        }
      }
    }

    expect(failures, `${failures.length} colours failed AA:\n${failures.join('\n')}`).toHaveLength(0);
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

test.describe('text-a11y-aaa — AAA contrast verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(A11Y_PAGE, { waitUntil: 'networkidle' });
    const supports = await detectSupport(page);
    test.skip(!supports, 'Browser does not support CSS @function');
  });

  test('all 242 TW colours produce text that meets AAA (7:1)', async ({ page }) => {
    const results = await extractA11yResults(page, A11Y_AAA_IDS);
    const failures: string[] = [];

    for (const id of A11Y_AAA_IDS) {
      const r = results[id];
      if (!r) {
        failures.push(`${id}: element not found`);
        continue;
      }
      if (r.jsRating !== 'AAA') {
        const extreme = chosePassingExtreme(r, 'AAA');
        if (!extreme.ok) {
          failures.push(`${id}: ratio ${r.ratio.toFixed(2)} → ${r.jsRating} — ${extreme.reason}`);
        }
      }
    }

    expect(failures, `${failures.length} colours failed AAA:\n${failures.join('\n')}`).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// text-a11y-aa-lg tests (separate page)
// ---------------------------------------------------------------------------

test.describe('text-a11y-aa-lg — AA Large contrast verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(A11Y_PAGE, { waitUntil: 'networkidle' });
    const supports = await detectSupport(page);
    test.skip(!supports, 'Browser does not support CSS @function');
  });

  test('all 242 TW colours produce text that meets AA Large (3:1)', async ({ page }) => {
    const results = await extractA11yResults(page, A11Y_AALG_IDS);
    const failures: string[] = [];

    for (const id of A11Y_AALG_IDS) {
      const r = results[id];
      if (!r) {
        failures.push(`${id}: element not found`);
        continue;
      }
      if (r.jsRating !== 'AA Large' && r.jsRating !== 'AA' && r.jsRating !== 'AAA') {
        const extreme = chosePassingExtreme(r, 'AA Large');
        if (!extreme.ok) {
          failures.push(`${id}: ratio ${r.ratio.toFixed(2)} → ${r.jsRating} — ${extreme.reason}`);
        }
      }
    }

    expect(failures, `${failures.length} colours failed AA Large:\n${failures.join('\n')}`).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// text-a11y — threshold edge cases
// ---------------------------------------------------------------------------

/** Backgrounds near each threshold, paired with the corresponding WCAG level */
const A11Y_EDGE_IDS = {
  // Near 3:1 — text-a11y-aa-lg must find a shade that passes AA Large
  'edge-blue-400': 'AA Large',
  'edge-emerald-500': 'AA Large',
  'edge-orange-500': 'AA Large',
  'edge-pink-400': 'AA Large',
  // Near 4.5:1 — text-a11y-aa must find a shade that passes AA
  'edge-slate-500': 'AA',
  'edge-red-600': 'AA',
  'edge-violet-500': 'AA',
  'edge-gray-500': 'AA',
  // Near 7:1 — text-a11y-aaa must find a shade that passes AAA
  'edge-blue-700': 'AAA',
  'edge-gray-600': 'AAA',
  'edge-slate-600': 'AAA',
  'edge-teal-600': 'AAA',
} as const;

test.describe('text-a11y — threshold edge cases', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(A11Y_PAGE, { waitUntil: 'networkidle' });
    const supports = await detectSupport(page);
    test.skip(!supports, 'Browser does not support CSS @function');
  });

  test('shade finder meets or exceeds requested level near each threshold boundary', async ({ page }) => {
    const ids = Object.keys(A11Y_EDGE_IDS);
    const results = await extractA11yResults(page, ids);
    const failures: string[] = [];

    for (const id of ids) {
      const r = results[id];
      const requiredLevel = A11Y_EDGE_IDS[id as keyof typeof A11Y_EDGE_IDS];
      if (!r) {
        failures.push(`${id}: element not found`);
        continue;
      }

      let passes = false;
      if (requiredLevel === 'AAA') passes = r.jsRating === 'AAA';
      else if (requiredLevel === 'AA') passes = r.jsRating === 'AA' || r.jsRating === 'AAA';
      else passes = r.jsRating === 'AA Large' || r.jsRating === 'AA' || r.jsRating === 'AAA';

      if (!passes) {
        const extreme = chosePassingExtreme(r, requiredLevel as RequiredLevel);
        if (!extreme.ok) {
          failures.push(`${id}: needs ${requiredLevel}, got ${r.jsRating} (ratio ${r.ratio.toFixed(2)}) — ${extreme.reason}`);
        }
      }
    }

    expect(failures, `${failures.length} edge cases failed:\n${failures.join('\n')}`).toHaveLength(0);
  });
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
