---
title: Hue Rotate
---

<!-- llm-context: hue-rotate utility — rotates the hue of any colour using CSS relative colour syntax across 16 colour spaces. {surface}-hue-rotate-{deg} rotates clockwise, -{surface}-hue-rotate-{deg} counterclockwise. Works on background, text, fill, stroke, outline, accent, and border surfaces. No color-mix modifier — hue rotation has no honest two-colour form. -->

# Hue Rotate

Rotate the hue of any colour by a number of degrees. Positive values rotate clockwise, negative values counterclockwise. Works across all colour-accepting properties and 16 colour spaces.

::: tip Import
Included in `@import 'tw-jib-css'`. Individual import:
```css
@import 'tw-jib-css/hue-rotate';
```
:::

## Syntax

```
{surface}-hue-rotate-{degrees}        clockwise
-{surface}-hue-rotate-{degrees}       counterclockwise
{surface}-hue-rotate-{degrees}/{space} in a specific colour space
```

Amount is 0–360. `bg-hue-rotate-180` rotates to the complementary colour.

## Surfaces

| Surface | Clockwise | Counterclockwise |
| --- | --- | --- |
| Background | `bg-hue-rotate-{deg}` | `-bg-hue-rotate-{deg}` |
| Text | `text-hue-rotate-{deg}` | `-text-hue-rotate-{deg}` |
| Fill | `fill-hue-rotate-{deg}` | `-fill-hue-rotate-{deg}` |
| Stroke | `stroke-hue-rotate-{deg}` | `-stroke-hue-rotate-{deg}` |
| Outline | `outline-hue-rotate-{deg}` | `-outline-hue-rotate-{deg}` |
| Accent | `accent-hue-rotate-{deg}` | `-accent-hue-rotate-{deg}` |
| Border | `border-hue-rotate-{deg}` | `-border-hue-rotate-{deg}` |

## Quick Reference

<QuickReference :rows="[
  { class: 'bg-hue-rotate-{deg}', styles: 'Rotate background hue clockwise by {deg} degrees' },
  { class: '-bg-hue-rotate-{deg}', styles: 'Rotate background hue counterclockwise' },
  { class: 'bg-hue-rotate-{deg}/{space}', styles: 'Rotate in a specific colour space' },
  { class: 'text-hue-rotate-{deg}', styles: 'Rotate text colour hue' },
  { class: 'fill-hue-rotate-{deg}', styles: 'Rotate SVG fill hue' },
  { class: 'stroke-hue-rotate-{deg}', styles: 'Rotate SVG stroke hue' },
  { class: 'outline-hue-rotate-{deg}', styles: 'Rotate outline colour hue' },
  { class: 'accent-hue-rotate-{deg}', styles: 'Rotate accent colour hue' },
  { class: 'border-hue-rotate-{deg}', styles: 'Rotate border colour hue' },
]" />

Amount is 0–360 degrees. All surfaces support the same negative prefix and `/{space}` modifier.

## Examples

### Walk the colour wheel

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

### Shift text colour

```html
<span class="text-blue-500 text-hue-rotate-90">shifted to green</span>
```

### Animate on hover

The hue amount is a registered `@property` variable. Transitions work:

```html
<div class="bg-blue-500 hover:bg-hue-rotate-180 transition duration-700">
  hover to shift
</div>
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

## Colour Space Support

Append a modifier: `bg-hue-rotate-90/oklch`, `bg-hue-rotate-90/hsl`, etc. Default is oklch.

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
  </div>
</Example>

Available spaces: oklch (default), lch, oklab, lab, hsl, hwb, rgb, srgb, srgb-linear, display-p3, a98-rgb, prophoto-rgb, rec2020, xyz, xyz-d50, xyz-d65. No color-mix modifier — hue rotation has no honest two-colour interpolation form.

::: info How rotation works per space
**Polar spaces (oklch, lch, hsl, hwb)** — Adds degrees to the hue channel directly. The simplest and most predictable.

**Lab spaces (oklab, lab)** — Rotates the (a, b) chromatic plane trigonometrically: `a' = a·cos(θ) − b·sin(θ)`, `b' = a·sin(θ) + b·cos(θ)`. Preserves chroma exactly.

**RGB-family** — Applies a luma-preserving 3×3 colour matrix (same algorithm as SVG's `feColorMatrix type="hueRotate"`). Maintains perceived brightness.

**XYZ-family** — Rotates (x, z) deviations around the white point, preserving y (luminance).
:::

## Applying Conditionally

Every hue-rotate utility works with Tailwind's variant prefixes:

```html
<div class="bg-red-500 hover:bg-hue-rotate-180 transition duration-300">
<div class="bg-blue-500 dark:bg-hue-rotate-30">
<div class="bg-blue-500 md:bg-hue-rotate-90">
```

## Browser Support

Requires CSS relative colour syntax: Chrome 111+, Safari 16.4+, Firefox 128+. Lab-space trig functions (`cos()`, `sin()`) require Chrome 125+.
