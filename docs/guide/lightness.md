---
title: Lightness
---

<!-- llm-context: lightness utility — adjusts colour lightness using CSS relative colour syntax across 17 colour spaces. {surface}-lightness-{n} to lighten, -{surface}-lightness-{n} to darken, with optional /{color-space} modifier. Works on background, text, fill, stroke, outline, accent, and border surfaces. -->

# Lightness

Adjust the lightness of any colour. Positive values lighten, negative values darken. Works across all colour-accepting properties and all 17 colour spaces.

::: tip Import
Included in `@import 'tw-jib-css'`. Individual import:
```css
@import 'tw-jib-css/lightness';
```
:::

## Syntax

```
{surface}-lightness-{amount}        lighten
-{surface}-lightness-{amount}       darken
{surface}-lightness-{amount}/{space} lighten in a specific colour space
```

Amount is 0–100, representing the percentage distance to white (lighten) or black (darken). `bg-lightness-50` moves halfway to white. `bg-lightness-100` reaches white exactly.

## Surfaces

The same utility works across every colour-accepting property. Swap the prefix:

| Surface | Lighten | Darken |
| --- | --- | --- |
| Background | `bg-lightness-{n}` | `-bg-lightness-{n}` |
| Text | `text-lightness-{n}` | `-text-lightness-{n}` |
| Fill | `fill-lightness-{n}` | `-fill-lightness-{n}` |
| Stroke | `stroke-lightness-{n}` | `-stroke-lightness-{n}` |
| Outline | `outline-lightness-{n}` | `-outline-lightness-{n}` |
| Accent | `accent-lightness-{n}` | `-accent-lightness-{n}` |
| Border | `border-lightness-{n}` | `-border-lightness-{n}` |

## Quick Reference

<QuickReference :rows="[
  { class: 'bg-lightness-{n}', styles: 'Lighten background by n% toward white' },
  { class: '-bg-lightness-{n}', styles: 'Darken background by n% toward black' },
  { class: 'bg-lightness-{n}/{space}', styles: 'Lighten in a specific colour space' },
  { class: '-bg-lightness-{n}/{space}', styles: 'Darken in a specific colour space' },
  { class: 'bg-lighten-{n}', styles: 'Alias for bg-lightness-{n}' },
  { class: 'bg-darken-{n}', styles: 'Alias for -bg-lightness-{n}' },
  { class: 'text-lightness-{n}', styles: 'Lighten text colour' },
  { class: 'fill-lightness-{n}', styles: 'Lighten SVG fill' },
  { class: 'stroke-lightness-{n}', styles: 'Lighten SVG stroke' },
  { class: 'outline-lightness-{n}', styles: 'Lighten outline colour' },
  { class: 'accent-lightness-{n}', styles: 'Lighten accent colour' },
  { class: 'border-lightness-{n}', styles: 'Lighten border colour' },
]" />

Amount is 0–100. All surfaces support the same negative prefix and `/{space}` modifier.

## Examples

### Lighten and darken a background

Set a base colour with `bg-{color}`, then adjust:

<Example stretch>
  <div class="flex gap-1">
    <div class="flex-1 bg-blue-500 p-6 text-center text-white text-sm font-medium">base</div>
    <div class="flex-1 bg-blue-500 bg-lightness-20 p-6 text-center text-gray-800 text-sm">+20</div>
    <div class="flex-1 bg-blue-500 bg-lightness-40 p-6 text-center text-gray-800 text-sm">+40</div>
    <div class="flex-1 bg-blue-500 -bg-lightness-20 p-6 text-center text-white text-sm">−20</div>
    <div class="flex-1 bg-blue-500 -bg-lightness-40 p-6 text-center text-white text-sm">−40</div>
  </div>
</Example>

```html
<div class="bg-blue-500 bg-lightness-20">lighter</div>
<div class="bg-blue-500 -bg-lightness-40">darker</div>
```

### Lighten text

Same grammar, different surface:

<Example stretch>
  <div class="flex gap-3 bg-gray-900 p-6 rounded">
    <span class="text-blue-400 text-sm font-semibold">base</span>
    <span class="text-blue-400 text-lightness-20 text-sm font-semibold">+20</span>
    <span class="text-blue-400 text-lightness-40 text-sm font-semibold">+40</span>
  </div>
</Example>

```html
<span class="text-blue-400 text-lightness-20">lighter text</span>
```

### Lighten a border

<Example stretch>
  <div class="flex gap-3">
    <div class="flex-1 border-2 border-indigo-500 p-4 rounded text-center text-sm">base</div>
    <div class="flex-1 border-2 border-indigo-500 border-lightness-30 p-4 rounded text-center text-sm">+30</div>
    <div class="flex-1 border-2 border-indigo-500 -border-lightness-30 p-4 rounded text-center text-sm">−30</div>
  </div>
</Example>

```html
<div class="border-2 border-indigo-500 border-lightness-30">lighter border</div>
```

### Animate on hover

The lightness amount is a registered `@property` variable. It composes with Tailwind's `hover:` prefix and transitions smoothly:

<Example stretch>
  <div class="flex gap-3">
    <div class="flex-1 bg-blue-500 hover:bg-lightness-40 transition duration-700 p-6 rounded text-center text-white text-sm font-medium cursor-pointer">hover to lighten</div>
    <div class="flex-1 bg-blue-500 hover:-bg-lightness-40 transition duration-700 p-6 rounded text-center text-white text-sm font-medium cursor-pointer">hover to darken</div>
  </div>
</Example>

```html
<div class="bg-blue-500 hover:bg-lightness-40 transition duration-700">
  hover to lighten
</div>
```

### Full scale

<Example stretch>
  <div class="flex gap-1">
    <div class="flex-1 text-center">
      <div class="bg-blue-500 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">base</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 bg-lightness-10 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">10</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 bg-lightness-20 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">20</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 bg-lightness-30 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 bg-lightness-40 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">40</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 bg-lightness-50 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">50</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 bg-lightness-60 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 bg-lightness-70 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">70</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 bg-lightness-80 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">80</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 bg-lightness-90 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
  </div>
</Example>

## Colour Space Support

Append a modifier to select the interpolation space: `bg-lightness-30/oklch`, `bg-lightness-30/hsl`, etc. Default is oklch. Each column below shows base → +20 → +40 → +60 → +80.

### Perceptual polar

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/oklch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/lch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/lch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/lch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/lch h-8"></div>
      </div>
    </div>
  </div>
</Example>

### Perceptual rectangular

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/oklab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/lab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/lab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/lab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/lab h-8"></div>
      </div>
    </div>
  </div>
</Example>

### Legacy

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/hsl h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hwb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/hwb h-8"></div>
      </div>
    </div>
  </div>
</Example>

### RGB family

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/srgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb-linear</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/srgb-linear h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/display-p3</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/display-p3 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/a98-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/a98-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/prophoto-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/prophoto-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rec2020</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/rec2020 h-8"></div>
      </div>
    </div>
  </div>
</Example>

### Device-independent

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/xyz h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d50</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/xyz-d50 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d65</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/xyz-d65 h-8"></div>
      </div>
    </div>
  </div>
</Example>

### Colour-mix

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/color-mix h-8"></div>
      </div>
    </div>
  </div>
</Example>

See the [Colour Spaces reference](/guide/colour-spaces) for what each space is and when to choose one.

::: info How scaling works
Values 0–100 represent a **percentage of the distance** to white or black — not a fixed channel offset. `bg-lightness-50` moves halfway to white; `bg-lightness-100` reaches white exactly, regardless of where the colour started. Each colour space family handles this differently:

**oklch, lch, oklab, lab** — Lightness interpolates toward 1 (white) or 0 (black). Chroma is held constant through most of the range, tapering above 80 where the gamut narrows.

**HSL** — S is scaled by the gamut factor ratio `min(l, 100−l) / min(new_l, 100−new_l)`, clamped to ≤ 1, so saturation dampens as lightness moves toward the extremes.

**HWB** — Lightening adds whiteness and removes blackness; darkening does the reverse.

**RGB-family (rgb, srgb, display-p3, etc.)** — All three channels interpolate independently toward their white-point (or 0 for darkening).

**colour-mix** — Blends the colour with white or black via `color-mix()` in oklab. Acts as the reference curve that other spaces are calibrated against.
:::

## Aliases

`{surface}-lighten-*` and `{surface}-darken-*` are convenience aliases:

| Alias | Equivalent |
| --- | --- |
| `bg-lighten-{n}` | `bg-lightness-{n}` |
| `bg-darken-{n}` | `-bg-lightness-{n}` |
| `text-lighten-{n}` | `text-lightness-{n}` |
| `text-darken-{n}` | `-text-lightness-{n}` |

The same pattern applies to fill, stroke, outline, accent, and border. Both forms produce identical CSS.

```html
<!-- equivalent -->
<div class="bg-blue-500 bg-lightness-20">...</div>
<div class="bg-blue-500 bg-lighten-20">...</div>

<!-- equivalent -->
<div class="bg-blue-500 -bg-lightness-20">...</div>
<div class="bg-blue-500 bg-darken-20">...</div>
```

## Applying Conditionally

Every lightness utility works with Tailwind's variant prefixes:

```html
<div class="bg-blue-500 hover:bg-lightness-40 transition duration-300">
<div class="bg-blue-500 dark:bg-lightness-20">
<div class="bg-blue-500 md:bg-lightness-30">
```

## Browser Support

Requires CSS relative colour syntax: Chrome 111+, Safari 16.4+, Firefox 128+.

::: info Rendering paths
Lightness utilities use two CSS rendering paths — a stable path (relative colour syntax, all modern browsers) and an experimental path (CSS `@function`, Chromium only). The browser selects automatically via `@supports`. With the experimental import, transforms are also available as CSS functions callable in arbitrary values: `from-[--tw-jib--lightness(var(--color-blue-500),60)]`. See [How It Works](/guide/color-transforms#how-it-works-stable-and-experimental-paths) for details.
:::
