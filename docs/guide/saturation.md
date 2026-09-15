---
title: Saturation
---

<!-- llm-context: Saturates or desaturates any Tailwind color on seven surfaces, across seventeen color spaces. <surface>-saturation-<number> saturates and -<surface>-saturation-<number> desaturates, with an optional /<space> modifier, on background, text, fill, stroke, outline, accent and border. -->

# Saturation

Adjust the saturation (chroma) of any color. Positive values increase saturation, negative values desaturate. Works across all color-accepting properties and all 17 color spaces.

::: warning A source color from a CSS variable must carry the `color:` hint
These utilities transform the color already on the element, so that color has to reach them. `bg-(color:--brand)` does; `bg-(--brand)` does not, because Tailwind will not infer a type from inside a `var()`. Without the hint the class still compiles and the color still appears, but the transform runs against an unset source: `bg-*` washes out to near-white, the other six surfaces go fully transparent. See [Colors from CSS variables need a type hint](/guide/composition#colors-from-css-variables-need-a-type-hint).
:::

## Quick reference

<UtilityTable :rows="[
  { class: 'bg-saturation-<number>', styles: 'Increase background saturation by n%' },
  { class: '-bg-saturation-<number>', styles: 'Decrease background saturation by n%' },
  { class: 'bg-saturation-<number>/<space>', styles: 'Saturate in a specific color space' },
  { class: '-bg-saturation-<number>/<space>', styles: 'Desaturate in a specific color space' },
  { class: 'bg-saturate-<number>', styles: 'Alias for bg-saturation-<number>' },
  { class: 'bg-desaturate-<number>', styles: 'Alias for -bg-saturation-<number>' },
  { class: 'bg-saturation-[<value>]', styles: 'Saturate by an arbitrary amount' },
  { class: 'bg-saturation-(--<var>)', styles: 'Saturate by a custom property' },
  { class: 'text-saturation-<number>', styles: 'Adjust text color saturation' },
  { class: 'fill-saturation-<number>', styles: 'Adjust SVG fill saturation' },
  { class: 'stroke-saturation-<number>', styles: 'Adjust SVG stroke saturation' },
  { class: 'outline-saturation-<number>', styles: 'Adjust outline color saturation' },
  { class: 'accent-saturation-<number>', styles: 'Adjust accent color saturation' },
  { class: 'border-saturation-<number>', styles: 'Adjust border color saturation' },
]" />

Amount is 0–100, a percentage of the distance to full chroma or grey.
`bg-saturation-50` moves halfway to full; `-bg-saturation-100` reaches greyscale.
Every surface takes the same negative prefix and `/<space>` modifier.

## Examples

### Saturate and desaturate

Start with a muted color to see the full range:

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

The saturation amount is a registered `@property` variable, so it transitions:

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

## Surfaces

| Surface    | Saturate                      | Desaturate                     | Aliases                                                   |
| ---------- | ----------------------------- | ------------------------------ | --------------------------------------------------------- |
| Background | `bg-saturation-<number>`      | `-bg-saturation-<number>`      | `bg-saturate-<number>` `bg-desaturate-<number>`           |
| Text       | `text-saturation-<number>`    | `-text-saturation-<number>`    | `text-saturate-<number>` `text-desaturate-<number>`       |
| Fill       | `fill-saturation-<number>`    | `-fill-saturation-<number>`    | `fill-saturate-<number>` `fill-desaturate-<number>`       |
| Stroke     | `stroke-saturation-<number>`  | `-stroke-saturation-<number>`  | `stroke-saturate-<number>` `stroke-desaturate-<number>`   |
| Outline    | `outline-saturation-<number>` | `-outline-saturation-<number>` | `outline-saturate-<number>` `outline-desaturate-<number>` |
| Accent     | `accent-saturation-<number>`  | `-accent-saturation-<number>`  | `accent-saturate-<number>` `accent-desaturate-<number>`   |
| Border     | `border-saturation-<number>`  | `-border-saturation-<number>`  | `border-saturate-<number>` `border-desaturate-<number>`   |

Every surface has the alias pair, and most people reach for those first:
`text-desaturate-40` says what it does without the reader having to notice a leading
minus. See [Aliases](#aliases).

## Color space support

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

See the [Color Spaces reference](/guide/color-spaces) for what each space is and when to choose one.

::: info How scaling works
**oklch, lch.** Chroma interpolates toward the maximum (saturate) or 0 (desaturate). Lightness holds constant.

**oklab, lab.** Both chromatic axes (a, b) scale toward their theoretical maxima or toward 0.

**HSL.** S interpolates toward 100% or 0%.

**RGB-family.** Each channel moves toward or away from its grayscale luma value (`0.213r + 0.715g + 0.072b`).

**color-mix.** Blends toward gray (desaturation) or maximum chroma (saturation) via `color-mix()` in oklch.
:::

## Aliases

`<surface>-saturate-*` and `<surface>-desaturate-*` are convenience aliases:

| Alias                         | Equivalent                     |
| ----------------------------- | ------------------------------ |
| `bg-saturate-<number>`        | `bg-saturation-<number>`       |
| `bg-desaturate-<number>`      | `-bg-saturation-<number>`      |
| `text-saturate-<number>`      | `text-saturation-<number>`     |
| `text-desaturate-<number>`    | `-text-saturation-<number>`    |
| `fill-saturate-<number>`      | `fill-saturation-<number>`     |
| `fill-desaturate-<number>`    | `-fill-saturation-<number>`    |
| `stroke-saturate-<number>`    | `stroke-saturation-<number>`   |
| `stroke-desaturate-<number>`  | `-stroke-saturation-<number>`  |
| `outline-saturate-<number>`   | `outline-saturation-<number>`  |
| `outline-desaturate-<number>` | `-outline-saturation-<number>` |
| `accent-saturate-<number>`    | `accent-saturation-<number>`   |
| `accent-desaturate-<number>`  | `-accent-saturation-<number>`  |
| `border-saturate-<number>`    | `border-saturation-<number>`   |
| `border-desaturate-<number>`  | `-border-saturation-<number>`  |

Both forms produce identical CSS, and both take the `/<space>` modifier:
`border-desaturate-30/lch` is `-border-saturation-30/lch`.

```html
<!-- equivalent -->
<div class="bg-blue-500 -bg-saturation-30">...</div>
<div class="bg-blue-500 bg-desaturate-30">...</div>
```

## Applying conditionally

Every saturation utility works with Tailwind's variant prefixes:

```html
<div class="bg-blue-500 hover:-bg-saturation-50 transition duration-300">
  <div class="bg-blue-500 dark:-bg-saturation-30">
    <div class="bg-blue-500 md:bg-saturation-20"></div>
  </div>
</div>
```

## Browser support

Requires CSS relative color syntax: Chrome 111+, Safari 16.4+, Firefox 128+.

::: info Rendering paths
Saturation utilities are plain CSS relative color syntax, and every modern browser evaluates them at render time. [How it works](/guide/color-spaces#how-a-modifier-resolves) covers the mechanism.
:::

## Import

`<surface>-saturation-*`, `<surface>-saturate-*` and `<surface>-desaturate-*` all ship in
the **`color-transforms`** module, alongside lightness and hue rotation. The three are one
pipeline, so they publish as one entry.

Included in `@import 'tw-jib-css'`, or on its own:

```css
@import 'tw-jib-css/color-transforms';
```
