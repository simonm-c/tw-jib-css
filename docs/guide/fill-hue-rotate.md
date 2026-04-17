---
title: Fill Hue Rotate
---

<!-- llm-context: fill-hue-rotate / -fill-hue-rotate utility — rotates the hue of the fill property using CSS relative colour syntax across 16 colour spaces. fill-hue-rotate-{deg} rotates clockwise, -fill-hue-rotate-{deg} rotates counterclockwise. Amount is in degrees. Optional /{color-space} modifier picks the rotation space. No color-mix modifier. -->

# Fill Hue Rotate

Rotate the hue of any fill value using CSS relative colour syntax. Use `fill-hue-rotate-{degrees}` to rotate clockwise and `-fill-hue-rotate-{degrees}` to rotate counterclockwise. Works across 16 colour spaces with a simple slash modifier.

Hue-rotate utilities are also available for [background](/guide/hue-rotate), [text](/guide/text-hue-rotate), [stroke](/guide/stroke-hue-rotate), [outline](/guide/outline-hue-rotate), [accent](/guide/accent-hue-rotate), [border](/guide/border-hue-rotate).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/hue-rotate';
```
:::

## Quick Reference

Formulas use `amt` for `var(--tw-jib--fill-hue--amount)`. In oklab/lab, trig rotation: `cos(amt * 1deg)`, `sin(amt * 1deg)`. RGB uses a 3×3 luma-preserving matrix (0.213, 0.715, 0.072).

<QuickReference :rows="[
  { class: 'fill-hue-rotate-<deg>', styles: 'fill: oklch(from var(--tw-jib--fill-color) l c calc(h + amt) / alpha)' },
  { class: '-fill-hue-rotate-<deg>', styles: 'fill: oklch(from var(--tw-jib--fill-color) l c calc(h + amt) / alpha)' },
  { class: 'fill-hue-rotate-<deg>/oklch', styles: 'fill: oklch(from var(--tw-jib--fill-color) l c calc(h + amt) / alpha)' },
  { class: 'fill-hue-rotate-<deg>/hsl', styles: 'fill: hsl(from var(--tw-jib--fill-color) calc(h + amt) s l / alpha)' },
  { class: 'fill-hue-rotate-<deg>/lab', styles: 'fill: lab(from var(--tw-jib--fill-color) l calc(a * cos(amt * 1deg) - b * sin(amt * 1deg)) calc(a * sin(amt * 1deg) + b * cos(amt * 1deg)) / alpha)' },
  { class: 'fill-hue-rotate-<deg>/rgb', styles: 'fill: rgb(from var(--tw-jib--fill-color) calc(r*(.213+.787*cos) + g*(.715-.715*cos-.715*sin) + b*(.072-.072*cos+.928*sin)) calc(r*(.213-.213*cos+.143*sin) + g*(.715+.285*cos+.140*sin) + b*(.072-.072*cos-.283*sin)) calc(r*(.213-.213*cos-.787*sin) + g*(.715-.715*cos+.715*sin) + b*(.072+.928*cos+.072*sin)) / alpha)' },
]" />

## Basic Usage

### Rotate clockwise

Set a base fill with `fill-{color}`, then rotate its hue with `fill-hue-rotate-{degrees}`:

<Example stretch>
  <div class="flex gap-4 items-center">
    <svg class="w-10 h-10 fill-red-500" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-10 h-10 fill-red-500 fill-hue-rotate-60" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-10 h-10 fill-red-500 fill-hue-rotate-120" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-10 h-10 fill-red-500 fill-hue-rotate-180" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  </div>
</Example>

### Rotate counterclockwise

Use `-fill-hue-rotate-{degrees}` to rotate in the opposite direction:

<Example stretch>
  <div class="flex gap-4 items-center">
    <svg class="w-10 h-10 fill-red-500" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-10 h-10 fill-red-500 -fill-hue-rotate-60" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-10 h-10 fill-red-500 -fill-hue-rotate-120" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-10 h-10 fill-red-500 -fill-hue-rotate-180" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  </div>
</Example>

## Scale

Use 30° steps to walk the full 360° colour wheel from any base colour.

### Clockwise scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">0</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-30" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-60" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-90" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-120" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">120</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-150" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">150</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-180" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">180</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-210" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">210</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-240" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">240</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-270" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">270</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-300" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">300</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-330" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">330</div>
    </div>
  </div>
</Example>

### Counterclockwise scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">0</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-30" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">-30</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-60" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">-60</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-90" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">-90</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-120" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">-120</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-150" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">-150</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-180" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">-180</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-210" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">-210</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-240" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">-240</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-270" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">-270</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-300" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">-300</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-330" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
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
        <svg class="w-8 h-8 fill-red-500" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-60/oklch" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-120/oklch" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-180/oklch" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-240/oklch" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-300/oklch" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 fill-red-500" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-60/hsl" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-120/hsl" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-180/hsl" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-240/hsl" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-300/hsl" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 fill-red-500" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-60/lab" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-120/lab" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-180/lab" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-240/lab" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-300/lab" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 fill-red-500" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-60/rgb" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-120/rgb" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-180/rgb" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-240/rgb" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 fill-hue-rotate-300/rgb" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
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
        <svg class="w-8 h-8 fill-red-500" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-60/oklch" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-120/oklch" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-180/oklch" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-240/oklch" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-300/oklch" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 fill-red-500" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-60/hsl" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-120/hsl" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-180/hsl" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-240/hsl" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-300/hsl" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 fill-red-500" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-60/lab" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-120/lab" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-180/lab" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-240/lab" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-300/lab" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 fill-red-500" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-60/rgb" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-120/rgb" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-180/rgb" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-240/rgb" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-red-500 -fill-hue-rotate-300/rgb" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
  </div>
</Example>

## Across Tailwind shades

Rotation preserves lightness and is applied uniformly across the full shade scale. The matrix below takes every Tailwind `fill-blue-*` shade and sweeps it through 360°:

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
      <svg class="flex-1 fill-blue-50 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-50 fill-hue-rotate-30 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-50 fill-hue-rotate-60 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-50 fill-hue-rotate-90 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-50 fill-hue-rotate-120 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-50 fill-hue-rotate-150 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-50 fill-hue-rotate-180 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-50 fill-hue-rotate-210 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-50 fill-hue-rotate-240 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-50 fill-hue-rotate-270 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-50 fill-hue-rotate-300 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-50 fill-hue-rotate-330 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <svg class="flex-1 fill-blue-100 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-100 fill-hue-rotate-30 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-100 fill-hue-rotate-60 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-100 fill-hue-rotate-90 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-100 fill-hue-rotate-120 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-100 fill-hue-rotate-150 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-100 fill-hue-rotate-180 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-100 fill-hue-rotate-210 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-100 fill-hue-rotate-240 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-100 fill-hue-rotate-270 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-100 fill-hue-rotate-300 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-100 fill-hue-rotate-330 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <svg class="flex-1 fill-blue-200 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-200 fill-hue-rotate-30 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-200 fill-hue-rotate-60 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-200 fill-hue-rotate-90 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-200 fill-hue-rotate-120 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-200 fill-hue-rotate-150 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-200 fill-hue-rotate-180 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-200 fill-hue-rotate-210 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-200 fill-hue-rotate-240 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-200 fill-hue-rotate-270 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-200 fill-hue-rotate-300 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-200 fill-hue-rotate-330 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <svg class="flex-1 fill-blue-300 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-300 fill-hue-rotate-30 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-300 fill-hue-rotate-60 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-300 fill-hue-rotate-90 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-300 fill-hue-rotate-120 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-300 fill-hue-rotate-150 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-300 fill-hue-rotate-180 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-300 fill-hue-rotate-210 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-300 fill-hue-rotate-240 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-300 fill-hue-rotate-270 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-300 fill-hue-rotate-300 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-300 fill-hue-rotate-330 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <svg class="flex-1 fill-blue-400 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-400 fill-hue-rotate-30 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-400 fill-hue-rotate-60 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-400 fill-hue-rotate-90 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-400 fill-hue-rotate-120 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-400 fill-hue-rotate-150 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-400 fill-hue-rotate-180 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-400 fill-hue-rotate-210 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-400 fill-hue-rotate-240 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-400 fill-hue-rotate-270 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-400 fill-hue-rotate-300 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-400 fill-hue-rotate-330 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <svg class="flex-1 fill-blue-500 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-500 fill-hue-rotate-30 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-500 fill-hue-rotate-60 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-500 fill-hue-rotate-90 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-500 fill-hue-rotate-120 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-500 fill-hue-rotate-150 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-500 fill-hue-rotate-180 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-500 fill-hue-rotate-210 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-500 fill-hue-rotate-240 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-500 fill-hue-rotate-270 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-500 fill-hue-rotate-300 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-500 fill-hue-rotate-330 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <svg class="flex-1 fill-blue-600 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-600 fill-hue-rotate-30 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-600 fill-hue-rotate-60 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-600 fill-hue-rotate-90 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-600 fill-hue-rotate-120 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-600 fill-hue-rotate-150 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-600 fill-hue-rotate-180 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-600 fill-hue-rotate-210 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-600 fill-hue-rotate-240 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-600 fill-hue-rotate-270 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-600 fill-hue-rotate-300 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-600 fill-hue-rotate-330 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <svg class="flex-1 fill-blue-700 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-700 fill-hue-rotate-30 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-700 fill-hue-rotate-60 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-700 fill-hue-rotate-90 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-700 fill-hue-rotate-120 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-700 fill-hue-rotate-150 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-700 fill-hue-rotate-180 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-700 fill-hue-rotate-210 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-700 fill-hue-rotate-240 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-700 fill-hue-rotate-270 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-700 fill-hue-rotate-300 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-700 fill-hue-rotate-330 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <svg class="flex-1 fill-blue-800 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-800 fill-hue-rotate-30 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-800 fill-hue-rotate-60 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-800 fill-hue-rotate-90 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-800 fill-hue-rotate-120 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-800 fill-hue-rotate-150 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-800 fill-hue-rotate-180 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-800 fill-hue-rotate-210 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-800 fill-hue-rotate-240 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-800 fill-hue-rotate-270 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-800 fill-hue-rotate-300 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-800 fill-hue-rotate-330 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <svg class="flex-1 fill-blue-900 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-900 fill-hue-rotate-30 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-900 fill-hue-rotate-60 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-900 fill-hue-rotate-90 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-900 fill-hue-rotate-120 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-900 fill-hue-rotate-150 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-900 fill-hue-rotate-180 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-900 fill-hue-rotate-210 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-900 fill-hue-rotate-240 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-900 fill-hue-rotate-270 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-900 fill-hue-rotate-300 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-900 fill-hue-rotate-330 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <svg class="flex-1 fill-blue-950 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-950 fill-hue-rotate-30 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-950 fill-hue-rotate-60 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-950 fill-hue-rotate-90 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-950 fill-hue-rotate-120 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-950 fill-hue-rotate-150 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-950 fill-hue-rotate-180 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-950 fill-hue-rotate-210 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-950 fill-hue-rotate-240 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-950 fill-hue-rotate-270 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-950 fill-hue-rotate-300 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
      <svg class="flex-1 fill-blue-950 fill-hue-rotate-330 h-6" viewBox="0 0 24 24" preserveAspectRatio="none"><rect width="24" height="24"/></svg>
    </div>
  </div>
  </div>
</Example>

