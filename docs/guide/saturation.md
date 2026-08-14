---
title: Saturation
---

<!-- llm-context: saturation utility — adjusts colour saturation/chroma using CSS relative colour syntax across 17 colour spaces. {surface}-saturation-{n} to saturate, -{surface}-saturation-{n} to desaturate, with optional /{color-space} modifier. Works on background, text, fill, stroke, outline, accent, and border surfaces. -->

# Saturation

Adjust the saturation (chroma) of any colour. Positive values increase saturation, negative values desaturate. Works across all colour-accepting properties and all 17 colour spaces.

::: tip Import
Included in `@import 'tw-jib-css'`. Individual import:

```css
@import 'tw-jib-css/saturation';
```

:::

## Syntax

```
{surface}-saturation-{amount}        saturate
-{surface}-saturation-{amount}       desaturate
{surface}-saturation-{amount}/{space} saturate in a specific colour space
```

Amount is 0–100. `bg-saturation-50` moves halfway to full saturation. `-bg-saturation-100` reaches greyscale.

## Surfaces

| Surface    | Saturate                 | Desaturate                |
| ---------- | ------------------------ | ------------------------- |
| Background | `bg-saturation-{n}`      | `-bg-saturation-{n}`      |
| Text       | `text-saturation-{n}`    | `-text-saturation-{n}`    |
| Fill       | `fill-saturation-{n}`    | `-fill-saturation-{n}`    |
| Stroke     | `stroke-saturation-{n}`  | `-stroke-saturation-{n}`  |
| Outline    | `outline-saturation-{n}` | `-outline-saturation-{n}` |
| Accent     | `accent-saturation-{n}`  | `-accent-saturation-{n}`  |
| Border     | `border-saturation-{n}`  | `-border-saturation-{n}`  |

## Quick Reference

<QuickReference :rows="[
  { class: 'bg-saturation-{n}', styles: 'Increase background saturation by n%' },
  { class: '-bg-saturation-{n}', styles: 'Decrease background saturation by n%' },
  { class: 'bg-saturation-{n}/{space}', styles: 'Saturate in a specific colour space' },
  { class: '-bg-saturation-{n}/{space}', styles: 'Desaturate in a specific colour space' },
  { class: 'bg-saturate-{n}', styles: 'Alias for bg-saturation-{n}' },
  { class: 'bg-desaturate-{n}', styles: 'Alias for -bg-saturation-{n}' },
  { class: 'text-saturation-{n}', styles: 'Adjust text colour saturation' },
  { class: 'fill-saturation-{n}', styles: 'Adjust SVG fill saturation' },
  { class: 'stroke-saturation-{n}', styles: 'Adjust SVG stroke saturation' },
  { class: 'outline-saturation-{n}', styles: 'Adjust outline colour saturation' },
  { class: 'accent-saturation-{n}', styles: 'Adjust accent colour saturation' },
  { class: 'border-saturation-{n}', styles: 'Adjust border colour saturation' },
]" />

Amount is 0–100. All surfaces support the same negative prefix and `/{space}` modifier.

## Examples

### Saturate and desaturate

Start with a muted colour to see the full range:

<Example stretch>
  <div class="flex gap-1">
    <div class="flex-1 bg-slate-400 p-6 text-center text-white text-sm font-medium">base</div>
    <div class="flex-1 bg-slate-400 bg-saturation-20 p-6 text-center text-white text-sm">+20</div>
    <div class="flex-1 bg-slate-400 bg-saturation-40 p-6 text-center text-white text-sm">+40</div>
    <div class="flex-1 bg-blue-500 p-6 text-center text-white text-sm font-medium">base</div>
    <div class="flex-1 bg-blue-500 -bg-saturation-30 p-6 text-center text-white text-sm">−30</div>
    <div class="flex-1 bg-blue-500 -bg-saturation-60 p-6 text-center text-white text-sm">−60</div>
  </div>
</Example>

```html
<div class="bg-slate-400 bg-saturation-40">more vivid</div>
<div class="bg-blue-500 -bg-saturation-60">muted</div>
```

### Desaturate text

```html
<span class="text-red-500 -text-saturation-40">muted red text</span>
```

### Animate on hover

The saturation amount is a registered `@property` variable. Transitions work:

```html
<div class="bg-blue-500 hover:-bg-saturation-50 transition duration-700">hover to desaturate</div>
```

### Full desaturation scale

<Example stretch>
  <div class="flex gap-1">
    <div class="flex-1 text-center">
      <div class="bg-blue-500 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">base</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 -bg-saturation-10 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">10</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 -bg-saturation-20 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">20</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 -bg-saturation-30 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 -bg-saturation-40 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">40</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 -bg-saturation-50 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">50</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 -bg-saturation-60 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 -bg-saturation-70 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">70</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 -bg-saturation-80 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">80</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 -bg-saturation-90 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
  </div>
</Example>

## Colour Space Support

Append a modifier: `bg-saturation-30/oklch`, `-bg-saturation-50/hsl`, etc. Default is oklch. Each column below shows base → −20 → −40 → −60 → −80.

### Perceptual polar

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/oklch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/lch h-8"></div>
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
        <div class="flex-1 bg-blue-500 -bg-saturation-20/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/oklab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/lab h-8"></div>
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
        <div class="flex-1 bg-blue-500 -bg-saturation-20/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/hsl h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hwb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/hwb h-8"></div>
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
        <div class="flex-1 bg-blue-500 -bg-saturation-20/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/srgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb-linear</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/srgb-linear h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/display-p3</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/display-p3 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/a98-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/a98-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/prophoto-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/prophoto-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rec2020</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/rec2020 h-8"></div>
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
        <div class="flex-1 bg-blue-500 -bg-saturation-20/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/xyz h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d50</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/xyz-d50 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d65</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/xyz-d65 h-8"></div>
      </div>
    </div>
  </div>
</Example>

### Fallback

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/color-mix h-8"></div>
      </div>
    </div>
  </div>
</Example>

See the [Colour Spaces reference](/guide/colour-spaces) for what each space is and when to choose one.

::: info How scaling works
**oklch, lch** — Chroma interpolates toward the maximum (saturate) or 0 (desaturate). Lightness is held constant.

**oklab, lab** — Both chromatic axes (a, b) scale toward their theoretical maxima or toward 0.

**HSL** — S interpolates toward 100% or 0%.

**RGB-family** — Each channel moves toward or away from its greyscale luma value (`0.213r + 0.715g + 0.072b`).

**colour-mix** — Blends toward grey (desaturation) or maximum chroma (saturation) via `color-mix()` in oklch.
:::

## Aliases

`{surface}-saturate-*` and `{surface}-desaturate-*` are convenience aliases:

| Alias               | Equivalent           |
| ------------------- | -------------------- |
| `bg-saturate-{n}`   | `bg-saturation-{n}`  |
| `bg-desaturate-{n}` | `-bg-saturation-{n}` |

The same pattern applies to text, fill, stroke, outline, accent, and border.

```html
<!-- equivalent -->
<div class="bg-blue-500 -bg-saturation-30">...</div>
<div class="bg-blue-500 bg-desaturate-30">...</div>
```

## Applying Conditionally

Every saturation utility works with Tailwind's variant prefixes:

```html
<div class="bg-blue-500 hover:-bg-saturation-50 transition duration-300">
  <div class="bg-blue-500 dark:-bg-saturation-30">
    <div class="bg-blue-500 md:bg-saturation-20"></div>
  </div>
</div>
```

## Browser Support

Requires CSS relative colour syntax: Chrome 111+, Safari 16.4+, Firefox 128+.

::: info Rendering paths
Saturation utilities are CSS relative colour syntax, evaluated at render time in every modern browser. See [How It Works](/guide/color-transforms#how-it-works) for the mechanism.
:::
