import { expect, type Page } from '@playwright/test';

/**
 * Extractors fail on an absent `[data-test]` id rather than defaulting: a zero
 * reading is indistinguishable from a genuinely dark, transparent result, so a
 * renamed fixture would satisfy the assertion it was meant to prove.
 */

export interface ElementStyles {
  backgroundColor: string;
  backgroundImage: string;
  borderColor: string;
  /** Physical order: top, right, bottom, left. */
  borderStyles: [string, string, string, string];
  animation: string;
  animationDirection: string;
  blendMode: string;
  layerCount: number;
  backgroundClip: string;
  backgroundOrigin: string;
  backgroundSize: string;
  backgroundPosition: string;
  backgroundRepeat: string;
  backgroundAttachment: string;
  rgb: Rgb;
  /** Gamma-encoded brightness proxy, not WCAG relative luminance: the channels
   *  are not linearised. */
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

function assertNonePlaceholder(missing: string[], page: string) {
  expect(
    missing,
    `missing [data-test] fixtures on ${page}: renamed or removed since the spec was written`,
  ).toEqual([]);
}

/** The canvas converts any computed colour format to RGBA, which makes the
 *  readback comparable across engines that serialise differently. */
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
        borderStyles: [
          computed.borderTopStyle,
          computed.borderRightStyle,
          computed.borderBottomStyle,
          computed.borderLeftStyle,
        ],
        animation: computed.animation,
        animationDirection: computed.animationDirection,
        blendMode: computed.backgroundBlendMode,
        layerCount: backgroundImage === 'none' ? 0 : backgroundImage.split('gradient(').length - 1,
        backgroundClip: computed.backgroundClip,
        backgroundOrigin: computed.backgroundOrigin,
        backgroundSize: computed.backgroundSize,
        backgroundPosition: computed.backgroundPosition,
        backgroundRepeat: computed.backgroundRepeat,
        backgroundAttachment: computed.backgroundAttachment,
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
 * Samples the painted pixel. Computed style cannot answer this: a texture
 * module paints through gradient layers, so its background-color is transparent
 * whatever it looks like.
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

/** Anchor on any id the page defines: reading styles before it exists returns
 *  initial values that look real. */
export async function gotoExample(page: Page, path: string, anchorId: string) {
  await page.goto(path, { waitUntil: 'networkidle' });
  await page.locator(`[data-test="${anchorId}"]`).waitFor();
}

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
 * `toContain('gradient')` over the whole background-image passes on ANY layer,
 * so an element whose border gradient dropped out still passes. It is the last
 * layer, so check that layer alone. Pass a type where the test names one.
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

/** 0 = identical, 441 = opposite. */
export function colorDistance(a: Rgb, b: Rgb): number {
  return Math.sqrt((a.r - b.r) ** 2 + (a.g - b.g) ** 2 + (a.b - b.b) ** 2);
}

/** Gate on capability, never a browser name: each spec records what the engine
 *  does, and one that ships the feature needs no edit. */
export async function supportsQuery(page: Page, query: string): Promise<boolean> {
  return page.evaluate((q) => CSS.supports(q), query);
}

export function borderStopPositions(styles: ElementStyles): string[] {
  const layer = splitLayers(styles.backgroundImage).at(-1) ?? '';
  const args = layer.slice(layer.indexOf('(') + 1, layer.lastIndexOf(')'));
  return splitLayers(args)
    .map((stop) => /(-?[\d.]+%)$/.exec(stop.trim())?.[1])
    .filter((position): position is string => position !== undefined);
}
