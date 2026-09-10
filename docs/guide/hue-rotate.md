---
title: Hue rotate
---

<!-- llm-context: Rotates the hue of any Tailwind color on seven surfaces, across sixteen color spaces. <surface>-hue-rotate-<degrees> rotates clockwise and -<surface>-hue-rotate-<degrees> counterclockwise, on background, text, fill, stroke, outline, accent and border. There is no color-mix modifier, because hue rotation has no honest two-color form. -->

# Hue rotate

Rotate the hue of any color by a number of degrees. Positive values rotate clockwise, negative values counterclockwise. Works across all color-accepting properties and 16 color spaces, one fewer than lightness and saturation because rotation has no `color-mix` form.

## Quick reference

<UtilityTable :rows="[
  { class: 'bg-hue-rotate-<degrees>', styles: 'Rotate background hue clockwise by <degrees> degrees' },
  { class: '-bg-hue-rotate-<degrees>', styles: 'Rotate background hue counterclockwise' },
  { class: 'bg-hue-rotate-<degrees>/<space>', styles: 'Rotate in a specific color space' },
  { class: 'bg-hue-rotate-[<value>]', styles: 'Rotate by an arbitrary number of degrees' },
  { class: 'bg-hue-rotate-(number:--<var>)', styles: 'Rotate by a custom property' },
  { class: 'text-hue-rotate-<degrees>', styles: 'Rotate text color hue' },
  { class: 'fill-hue-rotate-<degrees>', styles: 'Rotate SVG fill hue' },
  { class: 'stroke-hue-rotate-<degrees>', styles: 'Rotate SVG stroke hue' },
  { class: 'outline-hue-rotate-<degrees>', styles: 'Rotate outline color hue' },
  { class: 'accent-hue-rotate-<degrees>', styles: 'Rotate accent color hue' },
  { class: 'border-hue-rotate-<degrees>', styles: 'Rotate border color hue' },
]" />

Amount is 0–360 degrees. `bg-hue-rotate-180` gives the complementary hue.
Every surface takes the same negative prefix and `/<space>` modifier.

## Examples

### Walk the color wheel

<Example stretch>
  <div class="flex gap-1">
    <div class="flex-1 bg-red-500 p-6 text-center text-white text-sm font-medium">base</div>
    <div class="flex-1 bg-red-500 bg-hue-rotate-60 p-6 text-center text-white text-sm">+60°</div>
    <div class="flex-1 bg-red-500 bg-hue-rotate-120 p-6 text-center text-white text-sm">+120°</div>
    <div class="flex-1 bg-red-500 bg-hue-rotate-180 p-6 text-center text-white text-sm">+180°</div>
    <div class="flex-1 bg-red-500 bg-hue-rotate-240 p-6 text-center text-white text-sm">+240°</div>
    <div class="flex-1 bg-red-500 bg-hue-rotate-300 p-6 text-center text-white text-sm">+300°</div>
  </div>
</Example>

```html
<div class="bg-red-500 bg-hue-rotate-60">yellow-ish</div>
<div class="bg-red-500 bg-hue-rotate-180">complementary</div>
```

### Shift text color

```html
<span class="text-blue-500 text-hue-rotate-90">shifted to green</span>
```

### Animate on hover

The hue amount is a registered `@property` variable, so it transitions:

```html
<div class="bg-blue-500 hover:bg-hue-rotate-180 transition duration-700">hover to shift</div>
```

### Full rotation

<Example stretch>
  <div class="flex gap-1">
    <div class="flex-1 text-center">
      <div class="bg-blue-500 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">0°</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 bg-hue-rotate-45 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">45°</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 bg-hue-rotate-90 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">90°</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 bg-hue-rotate-135 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">135°</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 bg-hue-rotate-180 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">180°</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 bg-hue-rotate-225 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">225°</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 bg-hue-rotate-270 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">270°</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 bg-hue-rotate-315 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">315°</div>
    </div>
  </div>
</Example>

## Surfaces

| Surface    | Clockwise                      | Counterclockwise                |
| ---------- | ------------------------------ | ------------------------------- |
| Background | `bg-hue-rotate-<degrees>`      | `-bg-hue-rotate-<degrees>`      |
| Text       | `text-hue-rotate-<degrees>`    | `-text-hue-rotate-<degrees>`    |
| Fill       | `fill-hue-rotate-<degrees>`    | `-fill-hue-rotate-<degrees>`    |
| Stroke     | `stroke-hue-rotate-<degrees>`  | `-stroke-hue-rotate-<degrees>`  |
| Outline    | `outline-hue-rotate-<degrees>` | `-outline-hue-rotate-<degrees>` |
| Accent     | `accent-hue-rotate-<degrees>`  | `-accent-hue-rotate-<degrees>`  |
| Border     | `border-hue-rotate-<degrees>`  | `-border-hue-rotate-<degrees>`  |

## Color space support

Append a modifier: `bg-hue-rotate-90/oklch`, `bg-hue-rotate-90/hsl`, etc. Default is oklch. Each column below shows base → +60° → +120° → +180° → +240° → +300°.

### Perceptual polar

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-60/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-120/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-180/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-240/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-300/oklch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-60/lch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-120/lch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-180/lch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-240/lch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-300/lch h-8"></div>
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
        <div class="flex-1 bg-blue-500 bg-hue-rotate-60/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-120/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-180/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-240/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-300/oklab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-60/lab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-120/lab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-180/lab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-240/lab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-300/lab h-8"></div>
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
        <div class="flex-1 bg-blue-500 bg-hue-rotate-60/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-120/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-180/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-240/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-300/hsl h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hwb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-60/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-120/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-180/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-240/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-300/hwb h-8"></div>
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
        <div class="flex-1 bg-blue-500 bg-hue-rotate-60/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-120/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-180/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-240/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-300/rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-60/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-120/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-180/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-240/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-300/srgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb-linear</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-60/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-120/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-180/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-240/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-300/srgb-linear h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/display-p3</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-60/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-120/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-180/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-240/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-300/display-p3 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/a98-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-60/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-120/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-180/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-240/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-300/a98-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/prophoto-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-60/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-120/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-180/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-240/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-300/prophoto-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rec2020</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-60/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-120/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-180/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-240/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-300/rec2020 h-8"></div>
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
        <div class="flex-1 bg-blue-500 bg-hue-rotate-60/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-120/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-180/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-240/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-300/xyz h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d50</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-60/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-120/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-180/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-240/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-300/xyz-d50 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d65</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-60/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-120/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-180/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-240/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-hue-rotate-300/xyz-d65 h-8"></div>
      </div>
    </div>
  </div>
</Example>

Sixteen spaces, not the seventeen the other transforms get. There is no `bg-hue-rotate-*/color-mix`, because `color-mix()` blends toward a second color and a rotation has none to offer. Lightness can aim at white or black, saturation can aim at gray, but the color a rotation lands on is the answer you are asking for, so you would have to know it before you could name it. See the [Color Spaces reference](/guide/color-spaces) for what each space is and when to choose one.

::: info How rotation works per space
**Polar spaces (oklch, lch, hsl, hwb).** Adds degrees to the hue channel directly. The simplest and most predictable.

**Lab spaces (oklab, lab).** Rotates the (a, b) chromatic plane trigonometrically: `a' = a·cos(θ) − b·sin(θ)`, `b' = a·sin(θ) + b·cos(θ)`. Preserves chroma exactly.

**RGB-family.** Applies a luma-preserving 3×3 color matrix (same algorithm as SVG's `feColorMatrix type="hueRotate"`). Maintains perceived brightness.

**XYZ-family.** Rotates (x, z) deviations around the white point, preserving y (luminance).
:::

## Applying conditionally

Every hue-rotate utility works with Tailwind's variant prefixes:

```html
<div class="bg-red-500 hover:bg-hue-rotate-180 transition duration-300">
  <div class="bg-blue-500 dark:bg-hue-rotate-30">
    <div class="bg-blue-500 md:bg-hue-rotate-90"></div>
  </div>
</div>
```

## Browser support

Requires CSS relative color syntax: Chrome 111+, Safari 16.4+, Firefox 128+. Lab-space trig functions (`cos()`, `sin()`) require Chrome 125+.

::: info Rendering paths
Hue-rotate utilities are plain CSS relative color syntax, and every modern browser evaluates them at render time. [How it works](/guide/color-spaces#how-a-modifier-resolves) covers the mechanism.
:::

## Import

`<surface>-hue-rotate-*` ships in the **`color-transforms`** module, alongside lightness
and saturation. The three are one pipeline, so they publish as one entry.

Included in `@import 'tw-jib-css'`, or on its own:

```css
@import 'tw-jib-css/color-transforms';
```
