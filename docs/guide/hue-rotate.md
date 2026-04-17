---
title: Background Hue Rotate
---

<!-- llm-context: bg-hue-rotate / -bg-hue-rotate utility — rotates the hue of a background colour using CSS relative colour syntax across 16 colour spaces. bg-hue-rotate-{deg} rotates clockwise, -bg-hue-rotate-{deg} rotates counterclockwise. Amount is in degrees (0–360). Optional /{color-space} modifier picks the rotation space. Polar spaces (oklch, lch, hsl, hwb) add to the h channel. Lab spaces (oklab, lab) rotate the a/b chromatic plane trigonometrically. RGB-family (rgb, srgb, srgb-linear, display-p3, a98-rgb, prophoto-rgb, rec2020) uses the luma-preserving SVG feColorMatrix type=hueRotate. XYZ-family rotates (x, z) deviations around the white point preserving y. No color-mix modifier — hue rotation has no honest two-colour interpolation form. -->

# Background Hue Rotate

Rotate the hue of any background colour using CSS relative colour syntax. Use `bg-hue-rotate-{degrees}` to rotate clockwise and `-bg-hue-rotate-{degrees}` to rotate counterclockwise. Works across 16 colour spaces with a simple slash modifier.

Hue-rotate utilities are also available for [text](/guide/text-hue-rotate), [fill](/guide/fill-hue-rotate), [stroke](/guide/stroke-hue-rotate), [outline](/guide/outline-hue-rotate), [accent](/guide/accent-hue-rotate), and [border](/guide/border-hue-rotate).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/hue-rotate';
```
:::

## Quick Reference

Formulas use `amt` for `var(--tw-jib--background-hue--amount)` — set to `<deg>` (clockwise) or `-<deg>` (counterclockwise). In oklab/lab, rotation uses trig: `cos(amt * 1deg)`, `sin(amt * 1deg)`. RGB uses a 3×3 luma-preserving matrix (coefficients: 0.213, 0.715, 0.072).

<QuickReference :rows="[
  { class: 'bg-hue-rotate-<deg>', styles: '--tw-jib--background-hue--amount: <deg>; background-color: oklch(from var(--tw-jib--background-color) l c calc(h + amt) / alpha)' },
  { class: '-bg-hue-rotate-<deg>', styles: '--tw-jib--background-hue--amount: calc(<deg> * -1); background-color: oklch(from var(--tw-jib--background-color) l c calc(h + amt) / alpha)' },
  { class: 'bg-hue-rotate-<deg>/oklch', styles: 'background-color: oklch(from var(--tw-jib--background-color) l c calc(h + amt) / alpha)' },
  { class: 'bg-hue-rotate-<deg>/lch', styles: 'background-color: lch(from var(--tw-jib--background-color) l c calc(h + amt) / alpha)' },
  { class: 'bg-hue-rotate-<deg>/hsl', styles: 'background-color: hsl(from var(--tw-jib--background-color) calc(h + amt) s l / alpha)' },
  { class: 'bg-hue-rotate-<deg>/hwb', styles: 'background-color: hwb(from var(--tw-jib--background-color) calc(h + amt) w b / alpha)' },
  { class: 'bg-hue-rotate-<deg>/oklab', styles: 'background-color: oklab(from var(--tw-jib--background-color) l calc(a * cos(amt * 1deg) - b * sin(amt * 1deg)) calc(a * sin(amt * 1deg) + b * cos(amt * 1deg)) / alpha)' },
  { class: 'bg-hue-rotate-<deg>/lab', styles: 'background-color: lab(from var(--tw-jib--background-color) l calc(a * cos(amt * 1deg) - b * sin(amt * 1deg)) calc(a * sin(amt * 1deg) + b * cos(amt * 1deg)) / alpha)' },
  { class: 'bg-hue-rotate-<deg>/rgb', styles: 'background-color: rgb(from var(--tw-jib--background-color) calc(r*(.213+.787*cos) + g*(.715-.715*cos-.715*sin) + b*(.072-.072*cos+.928*sin)) calc(r*(.213-.213*cos+.143*sin) + g*(.715+.285*cos+.140*sin) + b*(.072-.072*cos-.283*sin)) calc(r*(.213-.213*cos-.787*sin) + g*(.715-.715*cos+.715*sin) + b*(.072+.928*cos+.072*sin)) / alpha)' },
]" />

## Basic Usage

### Rotate clockwise

Set a base background colour with `bg-{color}`, then rotate its hue with `bg-hue-rotate-{degrees}`. Positive values walk the colour wheel: red → yellow → green → cyan → blue → magenta → red.

<Example stretch>
  <div class="flex gap-1">
    <div class="flex-1 bg-red-500 p-6 text-center text-white text-sm font-medium">base</div>
    <div class="flex-1 bg-red-500 bg-hue-rotate-60 p-6 text-center text-white text-sm">+60°</div>
    <div class="flex-1 bg-red-500 bg-hue-rotate-120 p-6 text-center text-white text-sm">+120°</div>
    <div class="flex-1 bg-red-500 bg-hue-rotate-180 p-6 text-center text-white text-sm">+180°</div>
  </div>
</Example>

### Rotate counterclockwise

Use `-bg-hue-rotate-{degrees}` to rotate in the opposite direction:

<Example stretch>
  <div class="flex gap-1">
    <div class="flex-1 bg-red-500 p-6 text-center text-white text-sm font-medium">base</div>
    <div class="flex-1 bg-red-500 -bg-hue-rotate-60 p-6 text-center text-white text-sm">−60°</div>
    <div class="flex-1 bg-red-500 -bg-hue-rotate-120 p-6 text-center text-white text-sm">−120°</div>
    <div class="flex-1 bg-red-500 -bg-hue-rotate-180 p-6 text-center text-white text-sm">−180°</div>
  </div>
</Example>

## On hover

Because the rotation amount is a registered `@property` variable, hue-rotate composes with Tailwind's `hover:` prefix and animates smoothly when paired with `transition`:

<Example stretch>
  <div class="flex gap-3">
    <div class="flex-1 bg-blue-500 hover:bg-hue-rotate-90 transition duration-700 p-6 rounded text-center text-white text-sm font-medium cursor-pointer">hover +90°</div>
    <div class="flex-1 bg-blue-500 hover:bg-hue-rotate-180 transition duration-700 p-6 rounded text-center text-white text-sm font-medium cursor-pointer">hover +180°</div>
    <div class="flex-1 bg-blue-500 hover:-bg-hue-rotate-90 transition duration-700 p-6 rounded text-center text-white text-sm font-medium cursor-pointer">hover −90°</div>
  </div>
</Example>

```html
<div class="bg-blue-500 hover:bg-hue-rotate-180 transition duration-700">
  hover to rotate
</div>
```

## Scale

Use increasing values in 30° steps to walk the full 360° colour wheel from any base colour:

### Clockwise scale

<Example stretch>
  <div class="flex gap-1">
    <div class="flex-1 text-center">
      <div class="bg-red-500 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">0</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 bg-hue-rotate-30 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 bg-hue-rotate-60 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 bg-hue-rotate-90 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 bg-hue-rotate-120 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">120</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 bg-hue-rotate-150 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">150</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 bg-hue-rotate-180 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">180</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 bg-hue-rotate-210 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">210</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 bg-hue-rotate-240 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">240</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 bg-hue-rotate-270 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">270</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 bg-hue-rotate-300 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">300</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 bg-hue-rotate-330 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">330</div>
    </div>
  </div>
</Example>

### Counterclockwise scale

<Example stretch>
  <div class="flex gap-1">
    <div class="flex-1 text-center">
      <div class="bg-red-500 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-0</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 -bg-hue-rotate-30 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-30</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 -bg-hue-rotate-60 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-60</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 -bg-hue-rotate-90 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-90</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 -bg-hue-rotate-120 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-120</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 -bg-hue-rotate-150 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-150</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 -bg-hue-rotate-180 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-180</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 -bg-hue-rotate-210 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-210</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 -bg-hue-rotate-240 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-240</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 -bg-hue-rotate-270 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-270</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 -bg-hue-rotate-300 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-300</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-red-500 -bg-hue-rotate-330 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-330</div>
    </div>
  </div>
</Example>

## Colour Spaces

Use the slash modifier to select a colour space. Different spaces produce visually distinct results — polar spaces rotate smoothly through the hue wheel, Lab spaces preserve perceptual lightness, RGB-family uses the SVG hueRotate matrix, XYZ rotates around the white-point axis. For background on each colour space, see the [Colour Spaces guide](/guide/colour-spaces).

### Clockwise across colour spaces

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-30/oklch h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-60/oklch h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-90/oklch h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-120/oklch h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-150/oklch h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-180/oklch h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-210/oklch h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-240/oklch h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-270/oklch h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-300/oklch h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-330/oklch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-30/lch h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-60/lch h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-90/lch h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-120/lch h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-150/lch h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-180/lch h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-210/lch h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-240/lch h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-270/lch h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-300/lch h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-330/lch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-30/oklab h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-60/oklab h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-90/oklab h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-120/oklab h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-150/oklab h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-180/oklab h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-210/oklab h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-240/oklab h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-270/oklab h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-300/oklab h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-330/oklab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-30/lab h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-60/lab h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-90/lab h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-120/lab h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-150/lab h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-180/lab h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-210/lab h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-240/lab h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-270/lab h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-300/lab h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-330/lab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-30/hsl h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-60/hsl h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-90/hsl h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-120/hsl h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-150/hsl h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-180/hsl h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-210/hsl h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-240/hsl h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-270/hsl h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-300/hsl h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-330/hsl h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hwb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-30/hwb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-60/hwb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-90/hwb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-120/hwb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-150/hwb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-180/hwb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-210/hwb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-240/hwb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-270/hwb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-300/hwb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-330/hwb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-30/rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-60/rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-90/rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-120/rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-150/rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-180/rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-210/rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-240/rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-270/rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-300/rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-330/rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-30/srgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-60/srgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-90/srgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-120/srgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-150/srgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-180/srgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-210/srgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-240/srgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-270/srgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-300/srgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-330/srgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb-linear</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-30/srgb-linear h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-60/srgb-linear h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-90/srgb-linear h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-120/srgb-linear h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-150/srgb-linear h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-180/srgb-linear h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-210/srgb-linear h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-240/srgb-linear h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-270/srgb-linear h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-300/srgb-linear h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-330/srgb-linear h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/display-p3</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-30/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-60/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-90/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-120/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-150/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-180/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-210/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-240/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-270/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-300/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-330/display-p3 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/a98-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-30/a98-rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-60/a98-rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-90/a98-rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-120/a98-rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-150/a98-rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-180/a98-rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-210/a98-rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-240/a98-rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-270/a98-rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-300/a98-rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-330/a98-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/prophoto-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-30/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-60/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-90/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-120/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-150/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-180/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-210/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-240/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-270/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-300/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-330/prophoto-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rec2020</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-30/rec2020 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-60/rec2020 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-90/rec2020 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-120/rec2020 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-150/rec2020 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-180/rec2020 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-210/rec2020 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-240/rec2020 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-270/rec2020 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-300/rec2020 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-330/rec2020 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-30/xyz h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-60/xyz h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-90/xyz h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-120/xyz h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-150/xyz h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-180/xyz h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-210/xyz h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-240/xyz h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-270/xyz h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-300/xyz h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-330/xyz h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d50</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-30/xyz-d50 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-60/xyz-d50 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-90/xyz-d50 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-120/xyz-d50 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-150/xyz-d50 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-180/xyz-d50 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-210/xyz-d50 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-240/xyz-d50 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-270/xyz-d50 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-300/xyz-d50 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-330/xyz-d50 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d65</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-30/xyz-d65 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-60/xyz-d65 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-90/xyz-d65 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-120/xyz-d65 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-150/xyz-d65 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-180/xyz-d65 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-210/xyz-d65 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-240/xyz-d65 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-270/xyz-d65 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-300/xyz-d65 h-8"></div>
        <div class="flex-1 bg-red-500 bg-hue-rotate-330/xyz-d65 h-8"></div>
      </div>
    </div>
  </div>
</Example>

### Counterclockwise across colour spaces

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-30/oklch h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-60/oklch h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-90/oklch h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-120/oklch h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-150/oklch h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-180/oklch h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-210/oklch h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-240/oklch h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-270/oklch h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-300/oklch h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-330/oklch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-30/lch h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-60/lch h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-90/lch h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-120/lch h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-150/lch h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-180/lch h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-210/lch h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-240/lch h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-270/lch h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-300/lch h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-330/lch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-30/oklab h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-60/oklab h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-90/oklab h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-120/oklab h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-150/oklab h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-180/oklab h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-210/oklab h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-240/oklab h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-270/oklab h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-300/oklab h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-330/oklab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-30/lab h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-60/lab h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-90/lab h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-120/lab h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-150/lab h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-180/lab h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-210/lab h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-240/lab h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-270/lab h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-300/lab h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-330/lab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-30/hsl h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-60/hsl h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-90/hsl h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-120/hsl h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-150/hsl h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-180/hsl h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-210/hsl h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-240/hsl h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-270/hsl h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-300/hsl h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-330/hsl h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hwb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-30/hwb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-60/hwb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-90/hwb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-120/hwb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-150/hwb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-180/hwb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-210/hwb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-240/hwb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-270/hwb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-300/hwb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-330/hwb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-30/rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-60/rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-90/rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-120/rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-150/rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-180/rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-210/rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-240/rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-270/rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-300/rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-330/rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-30/srgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-60/srgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-90/srgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-120/srgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-150/srgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-180/srgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-210/srgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-240/srgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-270/srgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-300/srgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-330/srgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb-linear</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-30/srgb-linear h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-60/srgb-linear h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-90/srgb-linear h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-120/srgb-linear h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-150/srgb-linear h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-180/srgb-linear h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-210/srgb-linear h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-240/srgb-linear h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-270/srgb-linear h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-300/srgb-linear h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-330/srgb-linear h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/display-p3</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-30/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-60/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-90/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-120/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-150/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-180/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-210/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-240/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-270/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-300/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-330/display-p3 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/a98-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-30/a98-rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-60/a98-rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-90/a98-rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-120/a98-rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-150/a98-rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-180/a98-rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-210/a98-rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-240/a98-rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-270/a98-rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-300/a98-rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-330/a98-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/prophoto-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-30/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-60/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-90/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-120/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-150/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-180/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-210/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-240/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-270/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-300/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-330/prophoto-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rec2020</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-30/rec2020 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-60/rec2020 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-90/rec2020 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-120/rec2020 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-150/rec2020 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-180/rec2020 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-210/rec2020 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-240/rec2020 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-270/rec2020 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-300/rec2020 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-330/rec2020 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-30/xyz h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-60/xyz h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-90/xyz h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-120/xyz h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-150/xyz h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-180/xyz h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-210/xyz h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-240/xyz h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-270/xyz h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-300/xyz h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-330/xyz h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d50</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-30/xyz-d50 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-60/xyz-d50 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-90/xyz-d50 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-120/xyz-d50 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-150/xyz-d50 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-180/xyz-d50 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-210/xyz-d50 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-240/xyz-d50 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-270/xyz-d50 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-300/xyz-d50 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-330/xyz-d50 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d65</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-30/xyz-d65 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-60/xyz-d65 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-90/xyz-d65 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-120/xyz-d65 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-150/xyz-d65 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-180/xyz-d65 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-210/xyz-d65 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-240/xyz-d65 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-270/xyz-d65 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-300/xyz-d65 h-8"></div>
        <div class="flex-1 bg-red-500 -bg-hue-rotate-330/xyz-d65 h-8"></div>
      </div>
    </div>
  </div>
</Example>

## Across Tailwind shades

Rotation preserves lightness and is applied uniformly across the full shade scale. The matrix below takes every Tailwind `bg-blue-*` shade and sweeps it through 360°:

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1 gap-0.5">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
    </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 bg-blue-50 h-6"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-30 h-6"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-60 h-6"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-90 h-6"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-120 h-6"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-150 h-6"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-180 h-6"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-210 h-6"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-240 h-6"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-270 h-6"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-300 h-6"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-330 h-6"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 bg-blue-100 h-6"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-30 h-6"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-60 h-6"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-90 h-6"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-120 h-6"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-150 h-6"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-180 h-6"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-210 h-6"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-240 h-6"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-270 h-6"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-300 h-6"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-330 h-6"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 bg-blue-200 h-6"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-30 h-6"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-60 h-6"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-90 h-6"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-120 h-6"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-150 h-6"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-180 h-6"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-210 h-6"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-240 h-6"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-270 h-6"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-300 h-6"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-330 h-6"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 bg-blue-300 h-6"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-30 h-6"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-60 h-6"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-90 h-6"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-120 h-6"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-150 h-6"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-180 h-6"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-210 h-6"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-240 h-6"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-270 h-6"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-300 h-6"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-330 h-6"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 bg-blue-400 h-6"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-30 h-6"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-60 h-6"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-90 h-6"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-120 h-6"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-150 h-6"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-180 h-6"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-210 h-6"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-240 h-6"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-270 h-6"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-300 h-6"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-330 h-6"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 bg-blue-500 h-6"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-30 h-6"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-60 h-6"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-90 h-6"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-120 h-6"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-150 h-6"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-180 h-6"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-210 h-6"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-240 h-6"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-270 h-6"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-300 h-6"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-330 h-6"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 bg-blue-600 h-6"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-30 h-6"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-60 h-6"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-90 h-6"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-120 h-6"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-150 h-6"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-180 h-6"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-210 h-6"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-240 h-6"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-270 h-6"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-300 h-6"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-330 h-6"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 bg-blue-700 h-6"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-30 h-6"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-60 h-6"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-90 h-6"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-120 h-6"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-150 h-6"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-180 h-6"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-210 h-6"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-240 h-6"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-270 h-6"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-300 h-6"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-330 h-6"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 bg-blue-800 h-6"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-30 h-6"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-60 h-6"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-90 h-6"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-120 h-6"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-150 h-6"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-180 h-6"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-210 h-6"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-240 h-6"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-270 h-6"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-300 h-6"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-330 h-6"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 bg-blue-900 h-6"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-30 h-6"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-60 h-6"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-90 h-6"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-120 h-6"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-150 h-6"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-180 h-6"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-210 h-6"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-240 h-6"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-270 h-6"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-300 h-6"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-330 h-6"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 bg-blue-950 h-6"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-30 h-6"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-60 h-6"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-90 h-6"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-120 h-6"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-150 h-6"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-180 h-6"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-210 h-6"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-240 h-6"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-270 h-6"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-300 h-6"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-330 h-6"></div>
    </div>
  </div>
  </div>
</Example>

## How Rotation Works

Hue rotation means different things in different colour spaces:

- **oklch / lch / hsl / hwb** — polar spaces with a native `h` channel. The amount is added directly: `calc(h + {deg})`. Wrap-around past 360° is handled natively by the colour function.
- **oklab / lab** — rectangular chromatic spaces. The `a` and `b` axes are rotated as a 2D plane: `a' = a·cos(θ) − b·sin(θ)`, `b' = a·sin(θ) + b·cos(θ)`. Equivalent to polar rotation wherever chroma > 0.
- **rgb / srgb / srgb-linear / display-p3 / a98-rgb / prophoto-rgb / rec2020** — the SVG `feColorMatrix type="hueRotate"` matrix with luma coefficients `(0.213, 0.715, 0.072)`. Matches the behaviour of CSS `filter: hue-rotate()` while keeping the output in the requested colour space.
- **xyz / xyz-d50 / xyz-d65** — (x, z) are treated as offsets from the achromatic axis scaled by the white-point chromaticity, and rotated in the plane; y (luminance) is preserved.

::: info No `/color-mix` modifier
Unlike `lightness` and `saturation`, hue-rotate has no `/color-mix` modifier. Hue rotation has no honest two-colour interpolation form — you'd need to know the target hue in advance — so we omit it rather than fake it via an oklch wrapper.
:::
