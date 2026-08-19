import { expect, type Page } from '@playwright/test';

/**
 * Shared readback for the integration lane.
 *
 * Every extractor here fails when a requested `[data-test]` id is absent rather
 * than substituting a default. That distinction is load-bearing: the utilities
 * under test are overwhelmingly asserted as "darker than" or "more transparent
 * than", so an element that reads back as zero luminance and zero alpha is
 * indistinguishable from a perfectly dark, perfectly transparent result. A
 * renamed fixture would then satisfy the assertion it was supposed to prove.
 */

export interface ElementStyles {
  backgroundColor: string;
  backgroundImage: string;
  borderColor: string;
  animation: string;
  blendMode: string;
  /** Number of gradient() functions in the background-image layer list. */
  layerCount: number;
  /** backgroundColor as RGBA, for specs comparing hue rather than brightness. */
  rgb: Rgb;
  /**
   * Gamma-encoded brightness proxy, not WCAG relative luminance – the channels
   * are not linearised. It exists to rank colours by brightness against each
   * other, which is all the transform specs ask of it. Contrast work needs the
   * real thing, and computes it separately in wcag.spec.ts.
   */
  luminance: number;
  alpha: number;
}

export interface Rgb {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface SampledColor extends Rgb {
  luminance: number;
}

/**
 * Fail naming the ids that were asked for and not found, so a renamed fixture
 * reports itself instead of silently degrading every assertion downstream.
 */
function assertNonePlaceholder(missing: string[], page: string) {
  expect(
    missing,
    `missing [data-test] fixtures on ${page} – renamed or removed since the spec was written`,
  ).toEqual([]);
}

/**
 * Batch-extract computed styles from `[data-test]` elements in one round-trip.
 *
 * A 1×1 canvas converts any computed colour format (oklch, color(), lab, …) to
 * RGBA, which is what makes the readback comparable across engines that
 * serialise the same colour differently.
 */
export async function extractStyles(
  page: Page,
  selectors: string[],
): Promise<Record<string, ElementStyles>> {
  const { styles, missing } = await page.evaluate((sels) => {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext('2d')!;

    function colorToRgba(color: string) {
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 1, 1);
      const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
      return { r, g, b, a: a / 255 };
    }

    const found: Record<string, ElementStyles> = {};
    const absent: string[] = [];
    for (const sel of sels) {
      const element = document.querySelector(`[data-test="${sel}"]`);
      if (!element) {
        absent.push(sel);
        continue;
      }
      const computed = getComputedStyle(element);
      const backgroundImage = computed.backgroundImage;
      const { r, g, b, a } = colorToRgba(computed.backgroundColor);
      found[sel] = {
        backgroundColor: computed.backgroundColor,
        backgroundImage,
        borderColor: computed.borderColor,
        animation: computed.animation,
        blendMode: computed.backgroundBlendMode,
        layerCount: backgroundImage === 'none' ? 0 : backgroundImage.split('gradient(').length - 1,
        rgb: { r, g, b, a },
        luminance: 0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255),
        alpha: a,
      };
    }
    return { styles: found, missing: absent };
  }, selectors);

  assertNonePlaceholder(missing, page.url());
  return styles;
}

/**
 * Sample the colour actually painted at each element's centre, by screenshotting
 * the page and reading the pixel back off a canvas.
 *
 * Computed style cannot answer this one: a texture module paints entirely
 * through gradient layers, so its computed `background-color` is transparent no
 * matter what the element looks like.
 */
export async function extractRenderedColors(
  page: Page,
  selectors: string[],
): Promise<Record<string, SampledColor>> {
  const screenshot = await page.screenshot({ fullPage: true });

  const { rects, missing } = await page.evaluate((sels) => {
    const found: Record<string, { x: number; y: number; w: number; h: number }> = {};
    const absent: string[] = [];
    for (const sel of sels) {
      const element = document.querySelector(`[data-test="${sel}"]`);
      if (!element) {
        absent.push(sel);
        continue;
      }
      const box = element.getBoundingClientRect();
      found[sel] = {
        x: box.x + window.scrollX,
        y: box.y + window.scrollY,
        w: box.width,
        h: box.height,
      };
    }
    return { rects: found, missing: absent };
  }, selectors);

  assertNonePlaceholder(missing, page.url());

  const sampled = await page.evaluate(
    async (args: {
      img: string;
      rects: Record<string, { x: number; y: number; w: number; h: number }>;
    }) => {
      const image = new Image();
      image.src = `data:image/png;base64,${args.img}`;
      await image.decode();
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(image, 0, 0);

      // The screenshot is in device pixels; getBoundingClientRect is in CSS px.
      const dpr = window.devicePixelRatio || 1;
      const result: Record<string, { r: number; g: number; b: number; a: number }> = {};
      for (const [sel, rect] of Object.entries(args.rects)) {
        const cx = Math.floor((rect.x + rect.w / 2) * dpr);
        const cy = Math.floor((rect.y + rect.h / 2) * dpr);
        const [r, g, b, a] = ctx.getImageData(cx, cy, 1, 1).data;
        result[sel] = { r, g, b, a: a / 255 };
      }
      return result;
    },
    { img: screenshot.toString('base64'), rects },
  );

  const out: Record<string, SampledColor> = {};
  for (const [sel, color] of Object.entries(sampled)) {
    out[sel] = {
      ...color,
      luminance: 0.2126 * (color.r / 255) + 0.7152 * (color.g / 255) + 0.0722 * (color.b / 255),
    };
  }
  return out;
}

/**
 * Navigate to an example fixture and wait for it to paint. The anchor is any id
 * the page is known to define – reading styles before it exists returns initial
 * values that look like real ones.
 */
export async function gotoExample(page: Page, path: string, anchorId: string) {
  await page.goto(path, { waitUntil: 'networkidle' });
  await page.locator(`[data-test="${anchorId}"]`).waitFor();
}

/** Split a comma-separated background-image list on top-level commas only. */
export function splitLayers(backgroundImage: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let current = '';
  for (const char of backgroundImage) {
    if (char === '(') depth++;
    if (char === ')') depth--;
    if (char === ',' && depth === 0) {
      parts.push(current.trim());
      current = '';
    } else current += char;
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

/**
 * Assert each element paints a real border-gradient layer.
 *
 * `toContain('gradient')` over the whole background-image is satisfied by ANY
 * layer in the stack, so an element whose border gradient dropped out still
 * passes it as long as its background image survived – the assertion cannot tell
 * a healthy element from a degraded one. The border gradient is the last layer
 * (it is the border-box one), so checking that layer alone is what makes the
 * difference. Pass a type where the test names one, so "radial border variants
 * render" fails if a linear gradient turns up instead.
 */
export function expectBorderGradient(
  styles: Record<string, ElementStyles>,
  ids: string[],
  type: 'linear' | 'radial' | 'conic' | 'any' = 'any',
) {
  for (const id of ids) {
    const layers = splitLayers(styles[id].backgroundImage);
    const borderLayer = layers.at(-1) ?? '';
    const wanted = type === 'any' ? 'gradient(' : `${type}-gradient(`;
    expect(
      borderLayer,
      `${id}: border layer should be a ${type} gradient, got "${borderLayer.slice(0, 60)}"`,
    ).toContain(wanted);
  }
}

/** Colour distance in RGB Euclidean space. 0 = identical, 441 = opposite. */
export function colorDistance(a: Rgb, b: Rgb): number {
  return Math.sqrt((a.r - b.r) ** 2 + (a.g - b.g) ** 2 + (a.b - b.b) ** 2);
}

/**
 * Whether the engine satisfies an `@supports` query. Specs gate on this rather
 * than on a browser name, so each one records what the engine actually does and
 * an engine that ships the feature needs no edit here to be covered.
 */
export async function supportsQuery(page: Page, query: string): Promise<boolean> {
  return page.evaluate((q) => CSS.supports(q), query);
}
