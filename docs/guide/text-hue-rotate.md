---
title: Text Hue Rotate
---

<!-- llm-context: text-hue-rotate / -text-hue-rotate utility — rotates the hue of the color property using CSS relative colour syntax across 16 colour spaces. text-hue-rotate-{deg} rotates clockwise, -text-hue-rotate-{deg} rotates counterclockwise. Amount is in degrees. Optional /{color-space} modifier picks the rotation space. No color-mix modifier. -->

# Text Hue Rotate

Rotate the hue of any color value using CSS relative colour syntax. Use `text-hue-rotate-{degrees}` to rotate clockwise and `-text-hue-rotate-{degrees}` to rotate counterclockwise. Works across 16 colour spaces with a simple slash modifier.

Hue-rotate utilities are also available for [background](/guide/hue-rotate), [fill](/guide/fill-hue-rotate), [stroke](/guide/stroke-hue-rotate), [outline](/guide/outline-hue-rotate), [accent](/guide/accent-hue-rotate), [border](/guide/border-hue-rotate).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/hue-rotate';
```
:::

## Quick Reference

Formulas use `amt` for `var(--tw-jib--text-hue--amount)`. In oklab/lab, trig rotation: `cos(amt * 1deg)`, `sin(amt * 1deg)`. RGB uses a 3×3 luma-preserving matrix (0.213, 0.715, 0.072).

<QuickReference :rows="[
  { class: 'text-hue-rotate-<deg>', styles: 'color: oklch(from var(--tw-jib--text-color) l c calc(h + amt) / alpha)' },
  { class: '-text-hue-rotate-<deg>', styles: 'color: oklch(from var(--tw-jib--text-color) l c calc(h + amt) / alpha)' },
  { class: 'text-hue-rotate-<deg>/oklch', styles: 'color: oklch(from var(--tw-jib--text-color) l c calc(h + amt) / alpha)' },
  { class: 'text-hue-rotate-<deg>/hsl', styles: 'color: hsl(from var(--tw-jib--text-color) calc(h + amt) s l / alpha)' },
  { class: 'text-hue-rotate-<deg>/lab', styles: 'color: lab(from var(--tw-jib--text-color) l calc(a * cos(amt * 1deg) - b * sin(amt * 1deg)) calc(a * sin(amt * 1deg) + b * cos(amt * 1deg)) / alpha)' },
  { class: 'text-hue-rotate-<deg>/rgb', styles: 'color: rgb(from var(--tw-jib--text-color) calc(r*(.213+.787*cos) + g*(.715-.715*cos-.715*sin) + b*(.072-.072*cos+.928*sin)) calc(r*(.213-.213*cos+.143*sin) + g*(.715+.285*cos+.140*sin) + b*(.072-.072*cos-.283*sin)) calc(r*(.213-.213*cos-.787*sin) + g*(.715-.715*cos+.715*sin) + b*(.072+.928*cos+.072*sin)) / alpha)' },
]" />

## Basic Usage

### Rotate clockwise

Set a base color with `text-{color}`, then rotate its hue with `text-hue-rotate-{degrees}`:

<Example stretch>
  <div class="flex gap-6 items-center">
    <span class="text-red-500 text-2xl font-bold">base</span>
    <span class="text-red-500 text-hue-rotate-60 text-2xl font-bold">+60°</span>
    <span class="text-red-500 text-hue-rotate-120 text-2xl font-bold">+120°</span>
    <span class="text-red-500 text-hue-rotate-180 text-2xl font-bold">+180°</span>
  </div>
</Example>

### Rotate counterclockwise

Use `-text-hue-rotate-{degrees}` to rotate in the opposite direction:

<Example stretch>
  <div class="flex gap-6 items-center">
    <span class="text-red-500 text-2xl font-bold">base</span>
    <span class="text-red-500 -text-hue-rotate-60 text-2xl font-bold">-60°</span>
    <span class="text-red-500 -text-hue-rotate-120 text-2xl font-bold">-120°</span>
    <span class="text-red-500 -text-hue-rotate-180 text-2xl font-bold">-180°</span>
  </div>
</Example>

## Scale

Use 30° steps to walk the full 360° colour wheel from any base colour.

### Clockwise scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <span class="text-red-500 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">0</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 text-hue-rotate-30 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 text-hue-rotate-60 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 text-hue-rotate-90 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 text-hue-rotate-120 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">120</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 text-hue-rotate-150 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">150</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 text-hue-rotate-180 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">180</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 text-hue-rotate-210 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">210</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 text-hue-rotate-240 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">240</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 text-hue-rotate-270 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">270</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 text-hue-rotate-300 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">300</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 text-hue-rotate-330 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">330</div>
    </div>
  </div>
</Example>

### Counterclockwise scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <span class="text-red-500 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">0</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 -text-hue-rotate-30 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">-30</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 -text-hue-rotate-60 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">-60</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 -text-hue-rotate-90 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">-90</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 -text-hue-rotate-120 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">-120</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 -text-hue-rotate-150 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">-150</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 -text-hue-rotate-180 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">-180</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 -text-hue-rotate-210 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">-210</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 -text-hue-rotate-240 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">-240</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 -text-hue-rotate-270 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">-270</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 -text-hue-rotate-300 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">-300</div>
    </div>
    <div class="text-center">
      <span class="text-red-500 -text-hue-rotate-330 text-lg font-bold">Aa</span>
      <div class="text-[10px] text-gray-400 mt-0.5">-330</div>
    </div>
  </div>
</Example>

## Colour Spaces

Use the slash modifier to select a colour space. For background on each colour space, see the [Colour Spaces guide](/guide/colour-spaces). For details on how rotation works per space, see [Background Hue Rotate](/guide/hue-rotate#how-rotation-works).

### Clockwise across selected spaces

<Example stretch>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1 gap-1 items-center">
        <span class="text-red-500 text-lg font-bold">Aa</span>
        <span class="text-red-500 text-hue-rotate-60/oklch text-lg font-bold">Aa</span>
        <span class="text-red-500 text-hue-rotate-120/oklch text-lg font-bold">Aa</span>
        <span class="text-red-500 text-hue-rotate-180/oklch text-lg font-bold">Aa</span>
        <span class="text-red-500 text-hue-rotate-240/oklch text-lg font-bold">Aa</span>
        <span class="text-red-500 text-hue-rotate-300/oklch text-lg font-bold">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1 items-center">
        <span class="text-red-500 text-lg font-bold">Aa</span>
        <span class="text-red-500 text-hue-rotate-60/hsl text-lg font-bold">Aa</span>
        <span class="text-red-500 text-hue-rotate-120/hsl text-lg font-bold">Aa</span>
        <span class="text-red-500 text-hue-rotate-180/hsl text-lg font-bold">Aa</span>
        <span class="text-red-500 text-hue-rotate-240/hsl text-lg font-bold">Aa</span>
        <span class="text-red-500 text-hue-rotate-300/hsl text-lg font-bold">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1 gap-1 items-center">
        <span class="text-red-500 text-lg font-bold">Aa</span>
        <span class="text-red-500 text-hue-rotate-60/lab text-lg font-bold">Aa</span>
        <span class="text-red-500 text-hue-rotate-120/lab text-lg font-bold">Aa</span>
        <span class="text-red-500 text-hue-rotate-180/lab text-lg font-bold">Aa</span>
        <span class="text-red-500 text-hue-rotate-240/lab text-lg font-bold">Aa</span>
        <span class="text-red-500 text-hue-rotate-300/lab text-lg font-bold">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-1 items-center">
        <span class="text-red-500 text-lg font-bold">Aa</span>
        <span class="text-red-500 text-hue-rotate-60/rgb text-lg font-bold">Aa</span>
        <span class="text-red-500 text-hue-rotate-120/rgb text-lg font-bold">Aa</span>
        <span class="text-red-500 text-hue-rotate-180/rgb text-lg font-bold">Aa</span>
        <span class="text-red-500 text-hue-rotate-240/rgb text-lg font-bold">Aa</span>
        <span class="text-red-500 text-hue-rotate-300/rgb text-lg font-bold">Aa</span>
      </div>
    </div>
  </div>
</Example>

### Counterclockwise across selected spaces

<Example stretch>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1 gap-1 items-center">
        <span class="text-red-500 text-lg font-bold">Aa</span>
        <span class="text-red-500 -text-hue-rotate-60/oklch text-lg font-bold">Aa</span>
        <span class="text-red-500 -text-hue-rotate-120/oklch text-lg font-bold">Aa</span>
        <span class="text-red-500 -text-hue-rotate-180/oklch text-lg font-bold">Aa</span>
        <span class="text-red-500 -text-hue-rotate-240/oklch text-lg font-bold">Aa</span>
        <span class="text-red-500 -text-hue-rotate-300/oklch text-lg font-bold">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1 items-center">
        <span class="text-red-500 text-lg font-bold">Aa</span>
        <span class="text-red-500 -text-hue-rotate-60/hsl text-lg font-bold">Aa</span>
        <span class="text-red-500 -text-hue-rotate-120/hsl text-lg font-bold">Aa</span>
        <span class="text-red-500 -text-hue-rotate-180/hsl text-lg font-bold">Aa</span>
        <span class="text-red-500 -text-hue-rotate-240/hsl text-lg font-bold">Aa</span>
        <span class="text-red-500 -text-hue-rotate-300/hsl text-lg font-bold">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1 gap-1 items-center">
        <span class="text-red-500 text-lg font-bold">Aa</span>
        <span class="text-red-500 -text-hue-rotate-60/lab text-lg font-bold">Aa</span>
        <span class="text-red-500 -text-hue-rotate-120/lab text-lg font-bold">Aa</span>
        <span class="text-red-500 -text-hue-rotate-180/lab text-lg font-bold">Aa</span>
        <span class="text-red-500 -text-hue-rotate-240/lab text-lg font-bold">Aa</span>
        <span class="text-red-500 -text-hue-rotate-300/lab text-lg font-bold">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-1 items-center">
        <span class="text-red-500 text-lg font-bold">Aa</span>
        <span class="text-red-500 -text-hue-rotate-60/rgb text-lg font-bold">Aa</span>
        <span class="text-red-500 -text-hue-rotate-120/rgb text-lg font-bold">Aa</span>
        <span class="text-red-500 -text-hue-rotate-180/rgb text-lg font-bold">Aa</span>
        <span class="text-red-500 -text-hue-rotate-240/rgb text-lg font-bold">Aa</span>
        <span class="text-red-500 -text-hue-rotate-300/rgb text-lg font-bold">Aa</span>
      </div>
    </div>
  </div>
</Example>

## Across Tailwind shades

Rotation preserves lightness and is applied uniformly across the full shade scale. The matrix below takes every Tailwind `text-blue-*` shade and sweeps it through 360°:

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
      <span class="flex-1 text-blue-50 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-50 text-hue-rotate-30 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-50 text-hue-rotate-60 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-50 text-hue-rotate-90 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-50 text-hue-rotate-120 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-50 text-hue-rotate-150 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-50 text-hue-rotate-180 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-50 text-hue-rotate-210 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-50 text-hue-rotate-240 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-50 text-hue-rotate-270 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-50 text-hue-rotate-300 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-50 text-hue-rotate-330 text-sm font-bold text-center">Aa</span>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <span class="flex-1 text-blue-100 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-100 text-hue-rotate-30 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-100 text-hue-rotate-60 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-100 text-hue-rotate-90 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-100 text-hue-rotate-120 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-100 text-hue-rotate-150 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-100 text-hue-rotate-180 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-100 text-hue-rotate-210 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-100 text-hue-rotate-240 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-100 text-hue-rotate-270 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-100 text-hue-rotate-300 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-100 text-hue-rotate-330 text-sm font-bold text-center">Aa</span>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <span class="flex-1 text-blue-200 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-200 text-hue-rotate-30 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-200 text-hue-rotate-60 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-200 text-hue-rotate-90 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-200 text-hue-rotate-120 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-200 text-hue-rotate-150 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-200 text-hue-rotate-180 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-200 text-hue-rotate-210 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-200 text-hue-rotate-240 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-200 text-hue-rotate-270 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-200 text-hue-rotate-300 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-200 text-hue-rotate-330 text-sm font-bold text-center">Aa</span>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <span class="flex-1 text-blue-300 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-300 text-hue-rotate-30 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-300 text-hue-rotate-60 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-300 text-hue-rotate-90 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-300 text-hue-rotate-120 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-300 text-hue-rotate-150 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-300 text-hue-rotate-180 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-300 text-hue-rotate-210 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-300 text-hue-rotate-240 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-300 text-hue-rotate-270 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-300 text-hue-rotate-300 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-300 text-hue-rotate-330 text-sm font-bold text-center">Aa</span>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <span class="flex-1 text-blue-400 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-400 text-hue-rotate-30 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-400 text-hue-rotate-60 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-400 text-hue-rotate-90 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-400 text-hue-rotate-120 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-400 text-hue-rotate-150 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-400 text-hue-rotate-180 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-400 text-hue-rotate-210 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-400 text-hue-rotate-240 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-400 text-hue-rotate-270 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-400 text-hue-rotate-300 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-400 text-hue-rotate-330 text-sm font-bold text-center">Aa</span>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <span class="flex-1 text-blue-500 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-500 text-hue-rotate-30 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-500 text-hue-rotate-60 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-500 text-hue-rotate-90 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-500 text-hue-rotate-120 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-500 text-hue-rotate-150 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-500 text-hue-rotate-180 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-500 text-hue-rotate-210 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-500 text-hue-rotate-240 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-500 text-hue-rotate-270 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-500 text-hue-rotate-300 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-500 text-hue-rotate-330 text-sm font-bold text-center">Aa</span>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <span class="flex-1 text-blue-600 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-600 text-hue-rotate-30 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-600 text-hue-rotate-60 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-600 text-hue-rotate-90 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-600 text-hue-rotate-120 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-600 text-hue-rotate-150 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-600 text-hue-rotate-180 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-600 text-hue-rotate-210 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-600 text-hue-rotate-240 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-600 text-hue-rotate-270 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-600 text-hue-rotate-300 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-600 text-hue-rotate-330 text-sm font-bold text-center">Aa</span>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <span class="flex-1 text-blue-700 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-700 text-hue-rotate-30 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-700 text-hue-rotate-60 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-700 text-hue-rotate-90 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-700 text-hue-rotate-120 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-700 text-hue-rotate-150 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-700 text-hue-rotate-180 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-700 text-hue-rotate-210 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-700 text-hue-rotate-240 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-700 text-hue-rotate-270 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-700 text-hue-rotate-300 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-700 text-hue-rotate-330 text-sm font-bold text-center">Aa</span>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <span class="flex-1 text-blue-800 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-800 text-hue-rotate-30 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-800 text-hue-rotate-60 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-800 text-hue-rotate-90 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-800 text-hue-rotate-120 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-800 text-hue-rotate-150 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-800 text-hue-rotate-180 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-800 text-hue-rotate-210 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-800 text-hue-rotate-240 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-800 text-hue-rotate-270 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-800 text-hue-rotate-300 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-800 text-hue-rotate-330 text-sm font-bold text-center">Aa</span>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <span class="flex-1 text-blue-900 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-900 text-hue-rotate-30 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-900 text-hue-rotate-60 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-900 text-hue-rotate-90 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-900 text-hue-rotate-120 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-900 text-hue-rotate-150 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-900 text-hue-rotate-180 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-900 text-hue-rotate-210 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-900 text-hue-rotate-240 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-900 text-hue-rotate-270 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-900 text-hue-rotate-300 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-900 text-hue-rotate-330 text-sm font-bold text-center">Aa</span>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <span class="flex-1 text-blue-950 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-950 text-hue-rotate-30 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-950 text-hue-rotate-60 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-950 text-hue-rotate-90 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-950 text-hue-rotate-120 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-950 text-hue-rotate-150 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-950 text-hue-rotate-180 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-950 text-hue-rotate-210 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-950 text-hue-rotate-240 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-950 text-hue-rotate-270 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-950 text-hue-rotate-300 text-sm font-bold text-center">Aa</span>
      <span class="flex-1 text-blue-950 text-hue-rotate-330 text-sm font-bold text-center">Aa</span>
    </div>
  </div>
  </div>
</Example>

