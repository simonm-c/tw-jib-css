---
title: Outline Hue Rotate
---

<!-- llm-context: outline-hue-rotate / -outline-hue-rotate utility — rotates the hue of the outline-color property using CSS relative colour syntax across 16 colour spaces. outline-hue-rotate-{deg} rotates clockwise, -outline-hue-rotate-{deg} rotates counterclockwise. Amount is in degrees. Optional /{color-space} modifier picks the rotation space. No color-mix modifier. -->

# Outline Hue Rotate

Rotate the hue of any outline-color value using CSS relative colour syntax. Use `outline-hue-rotate-{degrees}` to rotate clockwise and `-outline-hue-rotate-{degrees}` to rotate counterclockwise. Works across 16 colour spaces with a simple slash modifier.

Hue-rotate utilities are also available for [background](/guide/hue-rotate), [text](/guide/text-hue-rotate), [fill](/guide/fill-hue-rotate), [stroke](/guide/stroke-hue-rotate), [accent](/guide/accent-hue-rotate), [border](/guide/border-hue-rotate).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/hue-rotate';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'outline-hue-rotate-<deg>', styles: 'outline-color: oklch(from var(--tw-jib--outline-color) l c calc(h + <deg>) / alpha)' },
  { class: '-outline-hue-rotate-<deg>', styles: 'outline-color: oklch(from var(--tw-jib--outline-color) l c calc(h - <deg>) / alpha)' },
  { class: 'outline-hue-rotate-<deg>/oklch', styles: 'outline-color: oklch(from ... l c calc(h + <deg>) / alpha)' },
  { class: 'outline-hue-rotate-<deg>/hsl', styles: 'outline-color: hsl(from ... calc(h + <deg>) s l / alpha)' },
  { class: 'outline-hue-rotate-<deg>/lab', styles: 'outline-color: lab(from ... l calc(a·cosθ − b·sinθ) calc(a·sinθ + b·cosθ) / alpha)' },
  { class: 'outline-hue-rotate-<deg>/rgb', styles: 'outline-color: rgb(from ... <SVG hueRotate matrix>)' },
]" />

## Basic Usage

### Rotate clockwise

Set a base outline-color with `outline-{color}`, then rotate its hue with `outline-hue-rotate-{degrees}`:

<Example stretch>
  <div class="flex gap-6 items-center p-2">
    <div class="w-10 h-10 outline-red-500 outline-4"></div>
    <div class="w-10 h-10 outline-red-500 outline-hue-rotate-60 outline-4"></div>
    <div class="w-10 h-10 outline-red-500 outline-hue-rotate-120 outline-4"></div>
    <div class="w-10 h-10 outline-red-500 outline-hue-rotate-180 outline-4"></div>
  </div>
</Example>

### Rotate counterclockwise

Use `-outline-hue-rotate-{degrees}` to rotate in the opposite direction:

<Example stretch>
  <div class="flex gap-6 items-center p-2">
    <div class="w-10 h-10 outline-red-500 outline-4"></div>
    <div class="w-10 h-10 outline-red-500 -outline-hue-rotate-60 outline-4"></div>
    <div class="w-10 h-10 outline-red-500 -outline-hue-rotate-120 outline-4"></div>
    <div class="w-10 h-10 outline-red-500 -outline-hue-rotate-180 outline-4"></div>
  </div>
</Example>

## Scale

Use 30° steps to walk the full 360° colour wheel from any base colour.

### Clockwise scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">0</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 outline-hue-rotate-30 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 outline-hue-rotate-60 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 outline-hue-rotate-90 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 outline-hue-rotate-120 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">120</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 outline-hue-rotate-150 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">150</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 outline-hue-rotate-180 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">180</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 outline-hue-rotate-210 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">210</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 outline-hue-rotate-240 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">240</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 outline-hue-rotate-270 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">270</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 outline-hue-rotate-300 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">300</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 outline-hue-rotate-330 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">330</div>
    </div>
  </div>
</Example>

### Counterclockwise scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">0</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-30 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-30</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-60 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-60</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-90 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-90</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-120 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-120</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-150 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-150</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-180 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-180</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-210 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-210</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-240 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-240</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-270 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-270</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-300 outline-4"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">-300</div>
    </div>
    <div class="text-center">
      <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-330 outline-4"></div>
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
      <div class="flex flex-1 gap-2 items-center">
        <div class="w-8 h-8 outline-red-500 outline-4"></div>
        <div class="w-8 h-8 outline-red-500 outline-hue-rotate-60/oklch outline-4"></div>
        <div class="w-8 h-8 outline-red-500 outline-hue-rotate-120/oklch outline-4"></div>
        <div class="w-8 h-8 outline-red-500 outline-hue-rotate-180/oklch outline-4"></div>
        <div class="w-8 h-8 outline-red-500 outline-hue-rotate-240/oklch outline-4"></div>
        <div class="w-8 h-8 outline-red-500 outline-hue-rotate-300/oklch outline-4"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-2 items-center">
        <div class="w-8 h-8 outline-red-500 outline-4"></div>
        <div class="w-8 h-8 outline-red-500 outline-hue-rotate-60/hsl outline-4"></div>
        <div class="w-8 h-8 outline-red-500 outline-hue-rotate-120/hsl outline-4"></div>
        <div class="w-8 h-8 outline-red-500 outline-hue-rotate-180/hsl outline-4"></div>
        <div class="w-8 h-8 outline-red-500 outline-hue-rotate-240/hsl outline-4"></div>
        <div class="w-8 h-8 outline-red-500 outline-hue-rotate-300/hsl outline-4"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1 gap-2 items-center">
        <div class="w-8 h-8 outline-red-500 outline-4"></div>
        <div class="w-8 h-8 outline-red-500 outline-hue-rotate-60/lab outline-4"></div>
        <div class="w-8 h-8 outline-red-500 outline-hue-rotate-120/lab outline-4"></div>
        <div class="w-8 h-8 outline-red-500 outline-hue-rotate-180/lab outline-4"></div>
        <div class="w-8 h-8 outline-red-500 outline-hue-rotate-240/lab outline-4"></div>
        <div class="w-8 h-8 outline-red-500 outline-hue-rotate-300/lab outline-4"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-2 items-center">
        <div class="w-8 h-8 outline-red-500 outline-4"></div>
        <div class="w-8 h-8 outline-red-500 outline-hue-rotate-60/rgb outline-4"></div>
        <div class="w-8 h-8 outline-red-500 outline-hue-rotate-120/rgb outline-4"></div>
        <div class="w-8 h-8 outline-red-500 outline-hue-rotate-180/rgb outline-4"></div>
        <div class="w-8 h-8 outline-red-500 outline-hue-rotate-240/rgb outline-4"></div>
        <div class="w-8 h-8 outline-red-500 outline-hue-rotate-300/rgb outline-4"></div>
      </div>
    </div>
  </div>
</Example>

### Counterclockwise across selected spaces

<Example stretch>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1 gap-2 items-center">
        <div class="w-8 h-8 outline-red-500 outline-4"></div>
        <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-60/oklch outline-4"></div>
        <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-120/oklch outline-4"></div>
        <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-180/oklch outline-4"></div>
        <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-240/oklch outline-4"></div>
        <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-300/oklch outline-4"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-2 items-center">
        <div class="w-8 h-8 outline-red-500 outline-4"></div>
        <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-60/hsl outline-4"></div>
        <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-120/hsl outline-4"></div>
        <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-180/hsl outline-4"></div>
        <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-240/hsl outline-4"></div>
        <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-300/hsl outline-4"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1 gap-2 items-center">
        <div class="w-8 h-8 outline-red-500 outline-4"></div>
        <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-60/lab outline-4"></div>
        <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-120/lab outline-4"></div>
        <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-180/lab outline-4"></div>
        <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-240/lab outline-4"></div>
        <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-300/lab outline-4"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-2 items-center">
        <div class="w-8 h-8 outline-red-500 outline-4"></div>
        <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-60/rgb outline-4"></div>
        <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-120/rgb outline-4"></div>
        <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-180/rgb outline-4"></div>
        <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-240/rgb outline-4"></div>
        <div class="w-8 h-8 outline-red-500 -outline-hue-rotate-300/rgb outline-4"></div>
      </div>
    </div>
  </div>
</Example>

## Across Tailwind shades

Rotation preserves lightness and is applied uniformly across the full shade scale. The matrix below takes every Tailwind `outline-blue-*` shade and sweeps it through 360°:

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
      <div class="flex-1 outline-blue-50 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-50 outline-hue-rotate-30 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-50 outline-hue-rotate-60 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-50 outline-hue-rotate-90 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-50 outline-hue-rotate-120 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-50 outline-hue-rotate-150 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-50 outline-hue-rotate-180 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-50 outline-hue-rotate-210 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-50 outline-hue-rotate-240 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-50 outline-hue-rotate-270 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-50 outline-hue-rotate-300 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-50 outline-hue-rotate-330 h-6 outline-4 outline-offset-[-4px]"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 outline-blue-100 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-100 outline-hue-rotate-30 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-100 outline-hue-rotate-60 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-100 outline-hue-rotate-90 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-100 outline-hue-rotate-120 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-100 outline-hue-rotate-150 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-100 outline-hue-rotate-180 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-100 outline-hue-rotate-210 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-100 outline-hue-rotate-240 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-100 outline-hue-rotate-270 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-100 outline-hue-rotate-300 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-100 outline-hue-rotate-330 h-6 outline-4 outline-offset-[-4px]"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 outline-blue-200 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-200 outline-hue-rotate-30 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-200 outline-hue-rotate-60 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-200 outline-hue-rotate-90 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-200 outline-hue-rotate-120 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-200 outline-hue-rotate-150 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-200 outline-hue-rotate-180 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-200 outline-hue-rotate-210 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-200 outline-hue-rotate-240 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-200 outline-hue-rotate-270 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-200 outline-hue-rotate-300 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-200 outline-hue-rotate-330 h-6 outline-4 outline-offset-[-4px]"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 outline-blue-300 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-300 outline-hue-rotate-30 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-300 outline-hue-rotate-60 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-300 outline-hue-rotate-90 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-300 outline-hue-rotate-120 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-300 outline-hue-rotate-150 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-300 outline-hue-rotate-180 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-300 outline-hue-rotate-210 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-300 outline-hue-rotate-240 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-300 outline-hue-rotate-270 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-300 outline-hue-rotate-300 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-300 outline-hue-rotate-330 h-6 outline-4 outline-offset-[-4px]"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 outline-blue-400 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-400 outline-hue-rotate-30 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-400 outline-hue-rotate-60 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-400 outline-hue-rotate-90 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-400 outline-hue-rotate-120 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-400 outline-hue-rotate-150 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-400 outline-hue-rotate-180 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-400 outline-hue-rotate-210 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-400 outline-hue-rotate-240 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-400 outline-hue-rotate-270 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-400 outline-hue-rotate-300 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-400 outline-hue-rotate-330 h-6 outline-4 outline-offset-[-4px]"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 outline-blue-500 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-500 outline-hue-rotate-30 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-500 outline-hue-rotate-60 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-500 outline-hue-rotate-90 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-500 outline-hue-rotate-120 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-500 outline-hue-rotate-150 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-500 outline-hue-rotate-180 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-500 outline-hue-rotate-210 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-500 outline-hue-rotate-240 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-500 outline-hue-rotate-270 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-500 outline-hue-rotate-300 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-500 outline-hue-rotate-330 h-6 outline-4 outline-offset-[-4px]"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 outline-blue-600 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-600 outline-hue-rotate-30 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-600 outline-hue-rotate-60 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-600 outline-hue-rotate-90 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-600 outline-hue-rotate-120 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-600 outline-hue-rotate-150 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-600 outline-hue-rotate-180 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-600 outline-hue-rotate-210 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-600 outline-hue-rotate-240 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-600 outline-hue-rotate-270 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-600 outline-hue-rotate-300 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-600 outline-hue-rotate-330 h-6 outline-4 outline-offset-[-4px]"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 outline-blue-700 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-700 outline-hue-rotate-30 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-700 outline-hue-rotate-60 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-700 outline-hue-rotate-90 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-700 outline-hue-rotate-120 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-700 outline-hue-rotate-150 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-700 outline-hue-rotate-180 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-700 outline-hue-rotate-210 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-700 outline-hue-rotate-240 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-700 outline-hue-rotate-270 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-700 outline-hue-rotate-300 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-700 outline-hue-rotate-330 h-6 outline-4 outline-offset-[-4px]"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 outline-blue-800 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-800 outline-hue-rotate-30 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-800 outline-hue-rotate-60 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-800 outline-hue-rotate-90 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-800 outline-hue-rotate-120 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-800 outline-hue-rotate-150 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-800 outline-hue-rotate-180 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-800 outline-hue-rotate-210 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-800 outline-hue-rotate-240 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-800 outline-hue-rotate-270 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-800 outline-hue-rotate-300 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-800 outline-hue-rotate-330 h-6 outline-4 outline-offset-[-4px]"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 outline-blue-900 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-900 outline-hue-rotate-30 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-900 outline-hue-rotate-60 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-900 outline-hue-rotate-90 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-900 outline-hue-rotate-120 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-900 outline-hue-rotate-150 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-900 outline-hue-rotate-180 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-900 outline-hue-rotate-210 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-900 outline-hue-rotate-240 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-900 outline-hue-rotate-270 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-900 outline-hue-rotate-300 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-900 outline-hue-rotate-330 h-6 outline-4 outline-offset-[-4px]"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 outline-blue-950 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-950 outline-hue-rotate-30 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-950 outline-hue-rotate-60 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-950 outline-hue-rotate-90 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-950 outline-hue-rotate-120 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-950 outline-hue-rotate-150 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-950 outline-hue-rotate-180 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-950 outline-hue-rotate-210 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-950 outline-hue-rotate-240 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-950 outline-hue-rotate-270 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-950 outline-hue-rotate-300 h-6 outline-4 outline-offset-[-4px]"></div>
      <div class="flex-1 outline-blue-950 outline-hue-rotate-330 h-6 outline-4 outline-offset-[-4px]"></div>
    </div>
  </div>
  </div>
</Example>

