---
title: Stroke Hue Rotate
---

<!-- llm-context: stroke-hue-rotate / -stroke-hue-rotate utility — rotates the hue of the stroke property using CSS relative colour syntax across 16 colour spaces. stroke-hue-rotate-{deg} rotates clockwise, -stroke-hue-rotate-{deg} rotates counterclockwise. Amount is in degrees. Optional /{color-space} modifier picks the rotation space. No color-mix modifier. -->

# Stroke Hue Rotate

Rotate the hue of any stroke value using CSS relative colour syntax. Use `stroke-hue-rotate-{degrees}` to rotate clockwise and `-stroke-hue-rotate-{degrees}` to rotate counterclockwise. Works across 16 colour spaces with a simple slash modifier.

Hue-rotate utilities are also available for [background](/guide/hue-rotate), [text](/guide/text-hue-rotate), [fill](/guide/fill-hue-rotate), [outline](/guide/outline-hue-rotate), [accent](/guide/accent-hue-rotate), [border](/guide/border-hue-rotate).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/hue-rotate';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'stroke-hue-rotate-<deg>', styles: 'stroke: oklch(from var(--tw-jib--stroke-color) l c calc(h + <deg>) / alpha)' },
  { class: '-stroke-hue-rotate-<deg>', styles: 'stroke: oklch(from var(--tw-jib--stroke-color) l c calc(h - <deg>) / alpha)' },
  { class: 'stroke-hue-rotate-<deg>/oklch', styles: 'stroke: oklch(from ... l c calc(h + <deg>) / alpha)' },
  { class: 'stroke-hue-rotate-<deg>/hsl', styles: 'stroke: hsl(from ... calc(h + <deg>) s l / alpha)' },
  { class: 'stroke-hue-rotate-<deg>/lab', styles: 'stroke: lab(from ... l calc(a·cosθ − b·sinθ) calc(a·sinθ + b·cosθ) / alpha)' },
  { class: 'stroke-hue-rotate-<deg>/rgb', styles: 'stroke: rgb(from ... <SVG hueRotate matrix>)' },
]" />

## Basic Usage

### Rotate clockwise

Set a base stroke with `stroke-{color}`, then rotate its hue with `stroke-hue-rotate-{degrees}`:

<Example stretch>
  <div class="flex gap-4 items-center">
    <svg class="w-10 h-10 stroke-red-500 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-10 h-10 stroke-red-500 stroke-hue-rotate-60 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-10 h-10 stroke-red-500 stroke-hue-rotate-120 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-10 h-10 stroke-red-500 stroke-hue-rotate-180 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  </div>
</Example>

### Rotate counterclockwise

Use `-stroke-hue-rotate-{degrees}` to rotate in the opposite direction:

<Example stretch>
  <div class="flex gap-4 items-center">
    <svg class="w-10 h-10 stroke-red-500 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-10 h-10 stroke-red-500 -stroke-hue-rotate-60 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-10 h-10 stroke-red-500 -stroke-hue-rotate-120 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-10 h-10 stroke-red-500 -stroke-hue-rotate-180 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  </div>
</Example>

## Scale

Use 30° steps to walk the full 360° colour wheel from any base colour.

### Clockwise scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">0</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-30 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-60 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-90 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-120 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">120</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-150 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">150</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-180 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">180</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-210 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">210</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-240 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">240</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-270 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">270</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-300 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">300</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-330 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">330</div>
    </div>
  </div>
</Example>

### Counterclockwise scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">0</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-30 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">-30</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-60 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">-60</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-90 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">-90</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-120 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">-120</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-150 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">-150</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-180 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">-180</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-210 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">-210</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-240 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">-240</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-270 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">-270</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-300 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">-300</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-330 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
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
        <svg class="w-8 h-8 stroke-red-500 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-60/oklch fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-120/oklch fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-180/oklch fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-240/oklch fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-300/oklch fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 stroke-red-500 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-60/hsl fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-120/hsl fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-180/hsl fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-240/hsl fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-300/hsl fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 stroke-red-500 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-60/lab fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-120/lab fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-180/lab fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-240/lab fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-300/lab fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 stroke-red-500 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-60/rgb fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-120/rgb fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-180/rgb fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-240/rgb fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 stroke-hue-rotate-300/rgb fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
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
        <svg class="w-8 h-8 stroke-red-500 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-60/oklch fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-120/oklch fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-180/oklch fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-240/oklch fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-300/oklch fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 stroke-red-500 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-60/hsl fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-120/hsl fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-180/hsl fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-240/hsl fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-300/hsl fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 stroke-red-500 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-60/lab fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-120/lab fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-180/lab fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-240/lab fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-300/lab fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 stroke-red-500 fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-60/rgb fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-120/rgb fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-180/rgb fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-240/rgb fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-red-500 -stroke-hue-rotate-300/rgb fill-none stroke-[3]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
  </div>
</Example>

## Across Tailwind shades

Rotation preserves lightness and is applied uniformly across the full shade scale. The matrix below takes every Tailwind `stroke-blue-*` shade and sweeps it through 360°:

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
      <svg class="flex-1 h-6 stroke-blue-50 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-50 stroke-hue-rotate-30 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-50 stroke-hue-rotate-60 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-50 stroke-hue-rotate-90 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-50 stroke-hue-rotate-120 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-50 stroke-hue-rotate-150 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-50 stroke-hue-rotate-180 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-50 stroke-hue-rotate-210 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-50 stroke-hue-rotate-240 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-50 stroke-hue-rotate-270 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-50 stroke-hue-rotate-300 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-50 stroke-hue-rotate-330 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <svg class="flex-1 h-6 stroke-blue-100 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-100 stroke-hue-rotate-30 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-100 stroke-hue-rotate-60 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-100 stroke-hue-rotate-90 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-100 stroke-hue-rotate-120 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-100 stroke-hue-rotate-150 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-100 stroke-hue-rotate-180 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-100 stroke-hue-rotate-210 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-100 stroke-hue-rotate-240 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-100 stroke-hue-rotate-270 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-100 stroke-hue-rotate-300 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-100 stroke-hue-rotate-330 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <svg class="flex-1 h-6 stroke-blue-200 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-200 stroke-hue-rotate-30 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-200 stroke-hue-rotate-60 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-200 stroke-hue-rotate-90 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-200 stroke-hue-rotate-120 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-200 stroke-hue-rotate-150 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-200 stroke-hue-rotate-180 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-200 stroke-hue-rotate-210 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-200 stroke-hue-rotate-240 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-200 stroke-hue-rotate-270 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-200 stroke-hue-rotate-300 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-200 stroke-hue-rotate-330 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <svg class="flex-1 h-6 stroke-blue-300 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-300 stroke-hue-rotate-30 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-300 stroke-hue-rotate-60 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-300 stroke-hue-rotate-90 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-300 stroke-hue-rotate-120 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-300 stroke-hue-rotate-150 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-300 stroke-hue-rotate-180 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-300 stroke-hue-rotate-210 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-300 stroke-hue-rotate-240 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-300 stroke-hue-rotate-270 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-300 stroke-hue-rotate-300 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-300 stroke-hue-rotate-330 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <svg class="flex-1 h-6 stroke-blue-400 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-400 stroke-hue-rotate-30 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-400 stroke-hue-rotate-60 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-400 stroke-hue-rotate-90 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-400 stroke-hue-rotate-120 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-400 stroke-hue-rotate-150 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-400 stroke-hue-rotate-180 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-400 stroke-hue-rotate-210 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-400 stroke-hue-rotate-240 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-400 stroke-hue-rotate-270 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-400 stroke-hue-rotate-300 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-400 stroke-hue-rotate-330 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <svg class="flex-1 h-6 stroke-blue-500 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-500 stroke-hue-rotate-30 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-500 stroke-hue-rotate-60 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-500 stroke-hue-rotate-90 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-500 stroke-hue-rotate-120 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-500 stroke-hue-rotate-150 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-500 stroke-hue-rotate-180 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-500 stroke-hue-rotate-210 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-500 stroke-hue-rotate-240 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-500 stroke-hue-rotate-270 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-500 stroke-hue-rotate-300 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-500 stroke-hue-rotate-330 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <svg class="flex-1 h-6 stroke-blue-600 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-600 stroke-hue-rotate-30 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-600 stroke-hue-rotate-60 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-600 stroke-hue-rotate-90 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-600 stroke-hue-rotate-120 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-600 stroke-hue-rotate-150 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-600 stroke-hue-rotate-180 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-600 stroke-hue-rotate-210 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-600 stroke-hue-rotate-240 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-600 stroke-hue-rotate-270 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-600 stroke-hue-rotate-300 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-600 stroke-hue-rotate-330 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <svg class="flex-1 h-6 stroke-blue-700 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-700 stroke-hue-rotate-30 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-700 stroke-hue-rotate-60 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-700 stroke-hue-rotate-90 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-700 stroke-hue-rotate-120 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-700 stroke-hue-rotate-150 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-700 stroke-hue-rotate-180 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-700 stroke-hue-rotate-210 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-700 stroke-hue-rotate-240 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-700 stroke-hue-rotate-270 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-700 stroke-hue-rotate-300 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-700 stroke-hue-rotate-330 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <svg class="flex-1 h-6 stroke-blue-800 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-800 stroke-hue-rotate-30 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-800 stroke-hue-rotate-60 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-800 stroke-hue-rotate-90 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-800 stroke-hue-rotate-120 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-800 stroke-hue-rotate-150 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-800 stroke-hue-rotate-180 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-800 stroke-hue-rotate-210 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-800 stroke-hue-rotate-240 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-800 stroke-hue-rotate-270 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-800 stroke-hue-rotate-300 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-800 stroke-hue-rotate-330 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <svg class="flex-1 h-6 stroke-blue-900 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-900 stroke-hue-rotate-30 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-900 stroke-hue-rotate-60 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-900 stroke-hue-rotate-90 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-900 stroke-hue-rotate-120 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-900 stroke-hue-rotate-150 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-900 stroke-hue-rotate-180 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-900 stroke-hue-rotate-210 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-900 stroke-hue-rotate-240 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-900 stroke-hue-rotate-270 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-900 stroke-hue-rotate-300 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-900 stroke-hue-rotate-330 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <svg class="flex-1 h-6 stroke-blue-950 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-950 stroke-hue-rotate-30 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-950 stroke-hue-rotate-60 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-950 stroke-hue-rotate-90 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-950 stroke-hue-rotate-120 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-950 stroke-hue-rotate-150 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-950 stroke-hue-rotate-180 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-950 stroke-hue-rotate-210 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-950 stroke-hue-rotate-240 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-950 stroke-hue-rotate-270 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-950 stroke-hue-rotate-300 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
      <svg class="flex-1 h-6 stroke-blue-950 stroke-hue-rotate-330 fill-none stroke-[3]" viewBox="0 0 24 24" preserveAspectRatio="none"><rect x="2" y="2" width="20" height="20"/></svg>
    </div>
  </div>
  </div>
</Example>

