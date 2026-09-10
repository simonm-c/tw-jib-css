---
title: Lightness
---

<!-- llm-context: Lightens or darkens any Tailwind color on seven surfaces, across seventeen color spaces. <surface>-lightness-<number> lightens and -<surface>-lightness-<number> darkens, with an optional /<space> modifier, on background, text, fill, stroke, outline, accent and border. -->

# Lightness

Adjust the lightness of any color. Positive values lighten, negative values darken. Works across all color-accepting properties and all 17 color spaces.

## Quick reference

<UtilityTable :rows="[
  { class: 'bg-lightness-<number>', styles: 'Lighten background by n% toward white' },
  { class: '-bg-lightness-<number>', styles: 'Darken background by n% toward black' },
  { class: 'bg-lightness-<number>/<space>', styles: 'Lighten in a specific color space' },
  { class: '-bg-lightness-<number>/<space>', styles: 'Darken in a specific color space' },
  { class: 'bg-lighten-<number>', styles: 'Alias for bg-lightness-<number>' },
  { class: 'bg-darken-<number>', styles: 'Alias for -bg-lightness-<number>' },
  { class: 'bg-lightness-[<value>]', styles: 'Lighten by an arbitrary amount' },
  { class: 'bg-lightness-(number:--<var>)', styles: 'Lighten by a custom property' },
  { class: 'text-lightness-<number>', styles: 'Lighten text color' },
  { class: 'fill-lightness-<number>', styles: 'Lighten SVG fill' },
  { class: 'stroke-lightness-<number>', styles: 'Lighten SVG stroke' },
  { class: 'outline-lightness-<number>', styles: 'Lighten outline color' },
  { class: 'accent-lightness-<number>', styles: 'Lighten accent color' },
  { class: 'border-lightness-<number>', styles: 'Lighten border color' },
]" />

Amount is 0–100, a percentage of the distance to white or black. `bg-lightness-50` moves
halfway to white; `bg-lightness-100` reaches white exactly. Every surface takes the same
negative prefix and `/<space>` modifier.

## Examples

### Lighten and darken a background

Set a base color with `bg-<color>`, then adjust:

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

The lightness amount is a registered `@property` variable, so it composes with Tailwind's `hover:` prefix and transitions:

<Example stretch>
  <div class="flex gap-3">
    <div class="flex-1 bg-blue-500 hover:bg-lightness-40 transition duration-700 p-6 rounded text-center text-white text-sm font-medium cursor-pointer">hover to lighten</div>
    <div class="flex-1 bg-blue-500 hover:-bg-lightness-40 transition duration-700 p-6 rounded text-center text-white text-sm font-medium cursor-pointer">hover to darken</div>
  </div>
</Example>

```html
<div class="bg-blue-500 hover:bg-lightness-40 transition duration-700">hover to lighten</div>
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

## Surfaces

The same utility works across every color-accepting property. Swap the prefix:

| Surface    | Lighten                      | Darken                        | Aliases                                              |
| ---------- | ---------------------------- | ----------------------------- | ---------------------------------------------------- |
| Background | `bg-lightness-<number>`      | `-bg-lightness-<number>`      | `bg-lighten-<number>` `bg-darken-<number>`           |
| Text       | `text-lightness-<number>`    | `-text-lightness-<number>`    | `text-lighten-<number>` `text-darken-<number>`       |
| Fill       | `fill-lightness-<number>`    | `-fill-lightness-<number>`    | `fill-lighten-<number>` `fill-darken-<number>`       |
| Stroke     | `stroke-lightness-<number>`  | `-stroke-lightness-<number>`  | `stroke-lighten-<number>` `stroke-darken-<number>`   |
| Outline    | `outline-lightness-<number>` | `-outline-lightness-<number>` | `outline-lighten-<number>` `outline-darken-<number>` |
| Accent     | `accent-lightness-<number>`  | `-accent-lightness-<number>`  | `accent-lighten-<number>` `accent-darken-<number>`   |
| Border     | `border-lightness-<number>`  | `-border-lightness-<number>`  | `border-lighten-<number>` `border-darken-<number>`   |

Every surface has the alias pair, and most people reach for those first: `bg-darken-20`
says what it does without the reader having to notice a leading minus. See
[Aliases](#aliases).

## Color space support

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

### Color-mix

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

See the [Color Spaces reference](/guide/color-spaces) for what each space is and when to choose one.

::: info How scaling works
Values 0–100 represent a **percentage of the distance** to white or black, not a fixed channel offset. `bg-lightness-50` moves halfway to white; `bg-lightness-100` reaches white exactly, regardless of where the color started. Each color space family handles this differently:

**oklch, lch, oklab, lab.** Lightness interpolates toward 1 (white) or 0 (black). Chroma holds constant through most of the range, tapering above 80 where the gamut narrows.

**HSL.** The gamut factor ratio `min(l, 100−l) / min(new_l, 100−new_l)` scales S, clamped to ≤ 1, so saturation dampens as lightness moves toward the extremes.

**HWB.** Lightening adds whiteness and removes blackness; darkening does the reverse.

**RGB-family (rgb, srgb, display-p3, etc.).** All three channels interpolate independently toward their white-point, or toward 0 for darkening.

**color-mix.** Blends the color with white or black via `color-mix()` in oklab. It is the reference curve the other spaces calibrate against.
:::

## Aliases

`<surface>-lighten-*` and `<surface>-darken-*` are convenience aliases:

| Alias                      | Equivalent                    |
| -------------------------- | ----------------------------- |
| `bg-lighten-<number>`      | `bg-lightness-<number>`       |
| `bg-darken-<number>`       | `-bg-lightness-<number>`      |
| `text-lighten-<number>`    | `text-lightness-<number>`     |
| `text-darken-<number>`     | `-text-lightness-<number>`    |
| `fill-lighten-<number>`    | `fill-lightness-<number>`     |
| `fill-darken-<number>`     | `-fill-lightness-<number>`    |
| `stroke-lighten-<number>`  | `stroke-lightness-<number>`   |
| `stroke-darken-<number>`   | `-stroke-lightness-<number>`  |
| `outline-lighten-<number>` | `outline-lightness-<number>`  |
| `outline-darken-<number>`  | `-outline-lightness-<number>` |
| `accent-lighten-<number>`  | `accent-lightness-<number>`   |
| `accent-darken-<number>`   | `-accent-lightness-<number>`  |
| `border-lighten-<number>`  | `border-lightness-<number>`   |
| `border-darken-<number>`   | `-border-lightness-<number>`  |

Both forms produce identical CSS, and both take the `/<space>` modifier:
`border-darken-20/lab` is `-border-lightness-20/lab`.

```html
<!-- equivalent -->
<div class="bg-blue-500 bg-lightness-20">...</div>
<div class="bg-blue-500 bg-lighten-20">...</div>

<!-- equivalent -->
<div class="bg-blue-500 -bg-lightness-20">...</div>
<div class="bg-blue-500 bg-darken-20">...</div>
```

## Applying conditionally

Every lightness utility works with Tailwind's variant prefixes:

```html
<div class="bg-blue-500 hover:bg-lightness-40 transition duration-300">
  <div class="bg-blue-500 dark:bg-lightness-20">
    <div class="bg-blue-500 md:bg-lightness-30"></div>
  </div>
</div>
```

## Browser support

Requires CSS relative color syntax: Chrome 111+, Safari 16.4+, Firefox 128+.

::: info Rendering paths
Lightness utilities are plain CSS relative color syntax, and every modern browser evaluates them at render time. [How it works](/guide/color-spaces#how-a-modifier-resolves) covers the mechanism.
:::

## Import

`<surface>-lightness-*`, `<surface>-lighten-*` and `<surface>-darken-*` all ship in the
**`color-transforms`** module, alongside saturation and hue rotation. Lightness, saturation
and hue are one pipeline, so they publish as one entry.

Included in `@import 'tw-jib-css'`, or on its own:

```css
@import 'tw-jib-css/color-transforms';
```
