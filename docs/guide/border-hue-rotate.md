---
title: Border Hue Rotate
---

<!-- llm-context: border-hue-rotate / -border-hue-rotate utility — rotates the hue of the border-color property using CSS relative colour syntax across 16 colour spaces. border-hue-rotate-{deg} rotates clockwise, -border-hue-rotate-{deg} rotates counterclockwise. Amount is in degrees. Optional /{color-space} modifier picks the rotation space. No color-mix modifier. -->

# Border Hue Rotate

Rotate the hue of any border-color value using CSS relative colour syntax. Use `border-hue-rotate-{degrees}` to rotate clockwise and `-border-hue-rotate-{degrees}` to rotate counterclockwise. Works across 16 colour spaces with a simple slash modifier.

Hue-rotate utilities are also available for [background](/guide/hue-rotate), [text](/guide/text-hue-rotate), [fill](/guide/fill-hue-rotate), [stroke](/guide/stroke-hue-rotate), [outline](/guide/outline-hue-rotate), [accent](/guide/accent-hue-rotate).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/hue-rotate';
```
:::

## Quick Reference

Formulas use `amt` for `var(--tw-jib--border-hue--amount)`. In oklab/lab, trig rotation: `cos(amt * 1deg)`, `sin(amt * 1deg)`. RGB uses a 3×3 luma-preserving matrix (0.213, 0.715, 0.072).

<QuickReference :rows="[
  { class: 'border-hue-rotate-<deg>', styles: 'border-color: oklch(from var(--tw-jib--border-color) l c calc(h + amt) / alpha)' },
  { class: '-border-hue-rotate-<deg>', styles: 'border-color: oklch(from var(--tw-jib--border-color) l c calc(h + amt) / alpha)' },
  { class: 'border-hue-rotate-<deg>/oklch', styles: 'border-color: oklch(from var(--tw-jib--border-color) l c calc(h + amt) / alpha)' },
  { class: 'border-hue-rotate-<deg>/hsl', styles: 'border-color: hsl(from var(--tw-jib--border-color) calc(h + amt) s l / alpha)' },
  { class: 'border-hue-rotate-<deg>/lab', styles: 'border-color: lab(from var(--tw-jib--border-color) l calc(a * cos(amt * 1deg) - b * sin(amt * 1deg)) calc(a * sin(amt * 1deg) + b * cos(amt * 1deg)) / alpha)' },
  { class: 'border-hue-rotate-<deg>/rgb', styles: 'border-color: rgb(from var(--tw-jib--border-color) calc(r*(.213+.787*cos) + g*(.715-.715*cos-.715*sin) + b*(.072-.072*cos+.928*sin)) calc(r*(.213-.213*cos+.143*sin) + g*(.715+.285*cos+.140*sin) + b*(.072-.072*cos-.283*sin)) calc(r*(.213-.213*cos-.787*sin) + g*(.715-.715*cos+.715*sin) + b*(.072+.928*cos+.072*sin)) / alpha)' },
]" />

## Basic Usage

### Rotate clockwise

Set a base border-color with `border-{color}`, then rotate its hue with `border-hue-rotate-{degrees}`:

<Example stretch>
  <div class="flex gap-4 items-center">
    <div class="w-10 h-10 border-red-500 border-4 rounded"></div>
    <div class="w-10 h-10 border-red-500 border-hue-rotate-60 border-4 rounded"></div>
    <div class="w-10 h-10 border-red-500 border-hue-rotate-120 border-4 rounded"></div>
    <div class="w-10 h-10 border-red-500 border-hue-rotate-180 border-4 rounded"></div>
  </div>
</Example>

### Rotate counterclockwise

Use `-border-hue-rotate-{degrees}` to rotate in the opposite direction:

<Example stretch>
  <div class="flex gap-4 items-center">
    <div class="w-10 h-10 border-red-500 border-4 rounded"></div>
    <div class="w-10 h-10 border-red-500 -border-hue-rotate-60 border-4 rounded"></div>
    <div class="w-10 h-10 border-red-500 -border-hue-rotate-120 border-4 rounded"></div>
    <div class="w-10 h-10 border-red-500 -border-hue-rotate-180 border-4 rounded"></div>
  </div>
</Example>

## Scale

Use 30° steps to walk the full 360° colour wheel from any base colour.

### Clockwise scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">0</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 border-hue-rotate-30 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 border-hue-rotate-60 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 border-hue-rotate-90 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 border-hue-rotate-120 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">120</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 border-hue-rotate-150 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">150</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 border-hue-rotate-180 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">180</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 border-hue-rotate-210 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">210</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 border-hue-rotate-240 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">240</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 border-hue-rotate-270 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">270</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 border-hue-rotate-300 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">300</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 border-hue-rotate-330 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">330</div>
    </div>
  </div>
</Example>

### Counterclockwise scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">0</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 -border-hue-rotate-30 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-30</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 -border-hue-rotate-60 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-60</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 -border-hue-rotate-90 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-90</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 -border-hue-rotate-120 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-120</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 -border-hue-rotate-150 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-150</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 -border-hue-rotate-180 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-180</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 -border-hue-rotate-210 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-210</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 -border-hue-rotate-240 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-240</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 -border-hue-rotate-270 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-270</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 -border-hue-rotate-300 border-4 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-300</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 border-red-500 -border-hue-rotate-330 border-4 rounded"></div>
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
        <div class="w-8 h-8 border-red-500 border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 border-hue-rotate-60/oklch border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 border-hue-rotate-120/oklch border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 border-hue-rotate-180/oklch border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 border-hue-rotate-240/oklch border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 border-hue-rotate-300/oklch border-4 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1 items-center">
        <div class="w-8 h-8 border-red-500 border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 border-hue-rotate-60/hsl border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 border-hue-rotate-120/hsl border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 border-hue-rotate-180/hsl border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 border-hue-rotate-240/hsl border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 border-hue-rotate-300/hsl border-4 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1 gap-1 items-center">
        <div class="w-8 h-8 border-red-500 border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 border-hue-rotate-60/lab border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 border-hue-rotate-120/lab border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 border-hue-rotate-180/lab border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 border-hue-rotate-240/lab border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 border-hue-rotate-300/lab border-4 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-1 items-center">
        <div class="w-8 h-8 border-red-500 border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 border-hue-rotate-60/rgb border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 border-hue-rotate-120/rgb border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 border-hue-rotate-180/rgb border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 border-hue-rotate-240/rgb border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 border-hue-rotate-300/rgb border-4 rounded"></div>
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
        <div class="w-8 h-8 border-red-500 border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 -border-hue-rotate-60/oklch border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 -border-hue-rotate-120/oklch border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 -border-hue-rotate-180/oklch border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 -border-hue-rotate-240/oklch border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 -border-hue-rotate-300/oklch border-4 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1 items-center">
        <div class="w-8 h-8 border-red-500 border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 -border-hue-rotate-60/hsl border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 -border-hue-rotate-120/hsl border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 -border-hue-rotate-180/hsl border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 -border-hue-rotate-240/hsl border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 -border-hue-rotate-300/hsl border-4 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1 gap-1 items-center">
        <div class="w-8 h-8 border-red-500 border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 -border-hue-rotate-60/lab border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 -border-hue-rotate-120/lab border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 -border-hue-rotate-180/lab border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 -border-hue-rotate-240/lab border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 -border-hue-rotate-300/lab border-4 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-1 items-center">
        <div class="w-8 h-8 border-red-500 border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 -border-hue-rotate-60/rgb border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 -border-hue-rotate-120/rgb border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 -border-hue-rotate-180/rgb border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 -border-hue-rotate-240/rgb border-4 rounded"></div>
        <div class="w-8 h-8 border-red-500 -border-hue-rotate-300/rgb border-4 rounded"></div>
      </div>
    </div>
  </div>
</Example>

## Across Tailwind shades

Rotation preserves lightness and is applied uniformly across the full shade scale. The matrix below takes every Tailwind `border-blue-*` shade and sweeps it through 360°:

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
      <div class="flex-1 border-blue-50 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-50 border-hue-rotate-30 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-50 border-hue-rotate-60 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-50 border-hue-rotate-90 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-50 border-hue-rotate-120 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-50 border-hue-rotate-150 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-50 border-hue-rotate-180 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-50 border-hue-rotate-210 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-50 border-hue-rotate-240 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-50 border-hue-rotate-270 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-50 border-hue-rotate-300 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-50 border-hue-rotate-330 h-6 border-4 rounded"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 border-blue-100 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-100 border-hue-rotate-30 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-100 border-hue-rotate-60 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-100 border-hue-rotate-90 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-100 border-hue-rotate-120 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-100 border-hue-rotate-150 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-100 border-hue-rotate-180 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-100 border-hue-rotate-210 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-100 border-hue-rotate-240 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-100 border-hue-rotate-270 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-100 border-hue-rotate-300 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-100 border-hue-rotate-330 h-6 border-4 rounded"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 border-blue-200 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-200 border-hue-rotate-30 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-200 border-hue-rotate-60 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-200 border-hue-rotate-90 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-200 border-hue-rotate-120 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-200 border-hue-rotate-150 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-200 border-hue-rotate-180 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-200 border-hue-rotate-210 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-200 border-hue-rotate-240 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-200 border-hue-rotate-270 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-200 border-hue-rotate-300 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-200 border-hue-rotate-330 h-6 border-4 rounded"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 border-blue-300 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-300 border-hue-rotate-30 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-300 border-hue-rotate-60 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-300 border-hue-rotate-90 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-300 border-hue-rotate-120 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-300 border-hue-rotate-150 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-300 border-hue-rotate-180 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-300 border-hue-rotate-210 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-300 border-hue-rotate-240 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-300 border-hue-rotate-270 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-300 border-hue-rotate-300 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-300 border-hue-rotate-330 h-6 border-4 rounded"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 border-blue-400 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-400 border-hue-rotate-30 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-400 border-hue-rotate-60 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-400 border-hue-rotate-90 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-400 border-hue-rotate-120 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-400 border-hue-rotate-150 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-400 border-hue-rotate-180 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-400 border-hue-rotate-210 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-400 border-hue-rotate-240 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-400 border-hue-rotate-270 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-400 border-hue-rotate-300 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-400 border-hue-rotate-330 h-6 border-4 rounded"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 border-blue-500 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-500 border-hue-rotate-30 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-500 border-hue-rotate-60 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-500 border-hue-rotate-90 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-500 border-hue-rotate-120 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-500 border-hue-rotate-150 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-500 border-hue-rotate-180 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-500 border-hue-rotate-210 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-500 border-hue-rotate-240 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-500 border-hue-rotate-270 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-500 border-hue-rotate-300 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-500 border-hue-rotate-330 h-6 border-4 rounded"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 border-blue-600 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-600 border-hue-rotate-30 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-600 border-hue-rotate-60 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-600 border-hue-rotate-90 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-600 border-hue-rotate-120 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-600 border-hue-rotate-150 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-600 border-hue-rotate-180 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-600 border-hue-rotate-210 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-600 border-hue-rotate-240 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-600 border-hue-rotate-270 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-600 border-hue-rotate-300 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-600 border-hue-rotate-330 h-6 border-4 rounded"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 border-blue-700 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-700 border-hue-rotate-30 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-700 border-hue-rotate-60 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-700 border-hue-rotate-90 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-700 border-hue-rotate-120 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-700 border-hue-rotate-150 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-700 border-hue-rotate-180 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-700 border-hue-rotate-210 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-700 border-hue-rotate-240 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-700 border-hue-rotate-270 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-700 border-hue-rotate-300 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-700 border-hue-rotate-330 h-6 border-4 rounded"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 border-blue-800 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-800 border-hue-rotate-30 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-800 border-hue-rotate-60 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-800 border-hue-rotate-90 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-800 border-hue-rotate-120 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-800 border-hue-rotate-150 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-800 border-hue-rotate-180 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-800 border-hue-rotate-210 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-800 border-hue-rotate-240 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-800 border-hue-rotate-270 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-800 border-hue-rotate-300 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-800 border-hue-rotate-330 h-6 border-4 rounded"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 border-blue-900 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-900 border-hue-rotate-30 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-900 border-hue-rotate-60 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-900 border-hue-rotate-90 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-900 border-hue-rotate-120 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-900 border-hue-rotate-150 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-900 border-hue-rotate-180 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-900 border-hue-rotate-210 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-900 border-hue-rotate-240 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-900 border-hue-rotate-270 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-900 border-hue-rotate-300 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-900 border-hue-rotate-330 h-6 border-4 rounded"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 border-blue-950 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-950 border-hue-rotate-30 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-950 border-hue-rotate-60 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-950 border-hue-rotate-90 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-950 border-hue-rotate-120 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-950 border-hue-rotate-150 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-950 border-hue-rotate-180 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-950 border-hue-rotate-210 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-950 border-hue-rotate-240 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-950 border-hue-rotate-270 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-950 border-hue-rotate-300 h-6 border-4 rounded"></div>
      <div class="flex-1 border-blue-950 border-hue-rotate-330 h-6 border-4 rounded"></div>
    </div>
  </div>
  </div>
</Example>

