---
title: Accent Hue Rotate
---

<!-- llm-context: accent-hue-rotate / -accent-hue-rotate utility — rotates the hue of the accent-color property using CSS relative colour syntax across 16 colour spaces. accent-hue-rotate-{deg} rotates clockwise, -accent-hue-rotate-{deg} rotates counterclockwise. Amount is in degrees. Optional /{color-space} modifier picks the rotation space. No color-mix modifier. -->

# Accent Hue Rotate

Rotate the hue of any accent-color value using CSS relative colour syntax. Use `accent-hue-rotate-{degrees}` to rotate clockwise and `-accent-hue-rotate-{degrees}` to rotate counterclockwise. Works across 16 colour spaces with a simple slash modifier.

Hue-rotate utilities are also available for [background](/guide/hue-rotate), [text](/guide/text-hue-rotate), [fill](/guide/fill-hue-rotate), [stroke](/guide/stroke-hue-rotate), [outline](/guide/outline-hue-rotate), [border](/guide/border-hue-rotate).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/hue-rotate';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'accent-hue-rotate-<deg>', styles: 'accent-color: oklch(from var(--tw-jib--accent-color) l c calc(h + <deg>) / alpha)' },
  { class: '-accent-hue-rotate-<deg>', styles: 'accent-color: oklch(from var(--tw-jib--accent-color) l c calc(h - <deg>) / alpha)' },
  { class: 'accent-hue-rotate-<deg>/oklch', styles: 'accent-color: oklch(from ... l c calc(h + <deg>) / alpha)' },
  { class: 'accent-hue-rotate-<deg>/hsl', styles: 'accent-color: hsl(from ... calc(h + <deg>) s l / alpha)' },
  { class: 'accent-hue-rotate-<deg>/lab', styles: 'accent-color: lab(from ... l calc(a·cosθ − b·sinθ) calc(a·sinθ + b·cosθ) / alpha)' },
  { class: 'accent-hue-rotate-<deg>/rgb', styles: 'accent-color: rgb(from ... <SVG hueRotate matrix>)' },
]" />

## Basic Usage

### Rotate clockwise

Set a base accent-color with `accent-{color}`, then rotate its hue with `accent-hue-rotate-{degrees}`:

<Example stretch>
  <div class="flex gap-6 items-center">
    <input type="checkbox" checked class="w-6 h-6 accent-red-500" />
    <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-60" />
    <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-120" />
    <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-180" />
  </div>
</Example>

### Rotate counterclockwise

Use `-accent-hue-rotate-{degrees}` to rotate in the opposite direction:

<Example stretch>
  <div class="flex gap-6 items-center">
    <input type="checkbox" checked class="w-6 h-6 accent-red-500" />
    <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-60" />
    <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-120" />
    <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-180" />
  </div>
</Example>

## Scale

Use 30° steps to walk the full 360° colour wheel from any base colour.

### Clockwise scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500" />
      <div class="text-[10px] text-gray-400 mt-0.5">0</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-30" />
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-60" />
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-90" />
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-120" />
      <div class="text-[10px] text-gray-400 mt-0.5">120</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-150" />
      <div class="text-[10px] text-gray-400 mt-0.5">150</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-180" />
      <div class="text-[10px] text-gray-400 mt-0.5">180</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-210" />
      <div class="text-[10px] text-gray-400 mt-0.5">210</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-240" />
      <div class="text-[10px] text-gray-400 mt-0.5">240</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-270" />
      <div class="text-[10px] text-gray-400 mt-0.5">270</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-300" />
      <div class="text-[10px] text-gray-400 mt-0.5">300</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-330" />
      <div class="text-[10px] text-gray-400 mt-0.5">330</div>
    </div>
  </div>
</Example>

### Counterclockwise scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500" />
      <div class="text-[10px] text-gray-400 mt-0.5">0</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-30" />
      <div class="text-[10px] text-gray-400 mt-0.5">-30</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-60" />
      <div class="text-[10px] text-gray-400 mt-0.5">-60</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-90" />
      <div class="text-[10px] text-gray-400 mt-0.5">-90</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-120" />
      <div class="text-[10px] text-gray-400 mt-0.5">-120</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-150" />
      <div class="text-[10px] text-gray-400 mt-0.5">-150</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-180" />
      <div class="text-[10px] text-gray-400 mt-0.5">-180</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-210" />
      <div class="text-[10px] text-gray-400 mt-0.5">-210</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-240" />
      <div class="text-[10px] text-gray-400 mt-0.5">-240</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-270" />
      <div class="text-[10px] text-gray-400 mt-0.5">-270</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-300" />
      <div class="text-[10px] text-gray-400 mt-0.5">-300</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-330" />
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
        <input type="checkbox" checked class="w-6 h-6 accent-red-500" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-60/oklch" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-120/oklch" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-180/oklch" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-240/oklch" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-300/oklch" />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="w-6 h-6 accent-red-500" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-60/hsl" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-120/hsl" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-180/hsl" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-240/hsl" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-300/hsl" />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="w-6 h-6 accent-red-500" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-60/lab" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-120/lab" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-180/lab" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-240/lab" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-300/lab" />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="w-6 h-6 accent-red-500" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-60/rgb" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-120/rgb" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-180/rgb" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-240/rgb" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 accent-hue-rotate-300/rgb" />
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
        <input type="checkbox" checked class="w-6 h-6 accent-red-500" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-60/oklch" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-120/oklch" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-180/oklch" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-240/oklch" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-300/oklch" />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="w-6 h-6 accent-red-500" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-60/hsl" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-120/hsl" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-180/hsl" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-240/hsl" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-300/hsl" />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="w-6 h-6 accent-red-500" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-60/lab" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-120/lab" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-180/lab" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-240/lab" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-300/lab" />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="w-6 h-6 accent-red-500" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-60/rgb" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-120/rgb" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-180/rgb" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-240/rgb" />
        <input type="checkbox" checked class="w-6 h-6 accent-red-500 -accent-hue-rotate-300/rgb" />
      </div>
    </div>
  </div>
</Example>

## Across Tailwind shades

Rotation preserves lightness and is applied uniformly across the full shade scale. The matrix below takes every Tailwind `accent-blue-*` shade and sweeps it through 360°:

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
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-50 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-50 accent-hue-rotate-30 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-50 accent-hue-rotate-60 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-50 accent-hue-rotate-90 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-50 accent-hue-rotate-120 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-50 accent-hue-rotate-150 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-50 accent-hue-rotate-180 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-50 accent-hue-rotate-210 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-50 accent-hue-rotate-240 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-50 accent-hue-rotate-270 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-50 accent-hue-rotate-300 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-50 accent-hue-rotate-330 w-5 h-5" /></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-100 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-100 accent-hue-rotate-30 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-100 accent-hue-rotate-60 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-100 accent-hue-rotate-90 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-100 accent-hue-rotate-120 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-100 accent-hue-rotate-150 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-100 accent-hue-rotate-180 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-100 accent-hue-rotate-210 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-100 accent-hue-rotate-240 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-100 accent-hue-rotate-270 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-100 accent-hue-rotate-300 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-100 accent-hue-rotate-330 w-5 h-5" /></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-200 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-200 accent-hue-rotate-30 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-200 accent-hue-rotate-60 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-200 accent-hue-rotate-90 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-200 accent-hue-rotate-120 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-200 accent-hue-rotate-150 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-200 accent-hue-rotate-180 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-200 accent-hue-rotate-210 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-200 accent-hue-rotate-240 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-200 accent-hue-rotate-270 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-200 accent-hue-rotate-300 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-200 accent-hue-rotate-330 w-5 h-5" /></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-300 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-300 accent-hue-rotate-30 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-300 accent-hue-rotate-60 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-300 accent-hue-rotate-90 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-300 accent-hue-rotate-120 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-300 accent-hue-rotate-150 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-300 accent-hue-rotate-180 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-300 accent-hue-rotate-210 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-300 accent-hue-rotate-240 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-300 accent-hue-rotate-270 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-300 accent-hue-rotate-300 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-300 accent-hue-rotate-330 w-5 h-5" /></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-400 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-400 accent-hue-rotate-30 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-400 accent-hue-rotate-60 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-400 accent-hue-rotate-90 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-400 accent-hue-rotate-120 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-400 accent-hue-rotate-150 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-400 accent-hue-rotate-180 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-400 accent-hue-rotate-210 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-400 accent-hue-rotate-240 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-400 accent-hue-rotate-270 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-400 accent-hue-rotate-300 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-400 accent-hue-rotate-330 w-5 h-5" /></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-500 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-500 accent-hue-rotate-30 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-500 accent-hue-rotate-60 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-500 accent-hue-rotate-90 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-500 accent-hue-rotate-120 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-500 accent-hue-rotate-150 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-500 accent-hue-rotate-180 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-500 accent-hue-rotate-210 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-500 accent-hue-rotate-240 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-500 accent-hue-rotate-270 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-500 accent-hue-rotate-300 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-500 accent-hue-rotate-330 w-5 h-5" /></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-600 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-600 accent-hue-rotate-30 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-600 accent-hue-rotate-60 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-600 accent-hue-rotate-90 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-600 accent-hue-rotate-120 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-600 accent-hue-rotate-150 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-600 accent-hue-rotate-180 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-600 accent-hue-rotate-210 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-600 accent-hue-rotate-240 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-600 accent-hue-rotate-270 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-600 accent-hue-rotate-300 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-600 accent-hue-rotate-330 w-5 h-5" /></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-700 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-700 accent-hue-rotate-30 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-700 accent-hue-rotate-60 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-700 accent-hue-rotate-90 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-700 accent-hue-rotate-120 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-700 accent-hue-rotate-150 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-700 accent-hue-rotate-180 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-700 accent-hue-rotate-210 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-700 accent-hue-rotate-240 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-700 accent-hue-rotate-270 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-700 accent-hue-rotate-300 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-700 accent-hue-rotate-330 w-5 h-5" /></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-800 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-800 accent-hue-rotate-30 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-800 accent-hue-rotate-60 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-800 accent-hue-rotate-90 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-800 accent-hue-rotate-120 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-800 accent-hue-rotate-150 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-800 accent-hue-rotate-180 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-800 accent-hue-rotate-210 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-800 accent-hue-rotate-240 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-800 accent-hue-rotate-270 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-800 accent-hue-rotate-300 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-800 accent-hue-rotate-330 w-5 h-5" /></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-900 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-900 accent-hue-rotate-30 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-900 accent-hue-rotate-60 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-900 accent-hue-rotate-90 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-900 accent-hue-rotate-120 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-900 accent-hue-rotate-150 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-900 accent-hue-rotate-180 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-900 accent-hue-rotate-210 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-900 accent-hue-rotate-240 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-900 accent-hue-rotate-270 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-900 accent-hue-rotate-300 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-900 accent-hue-rotate-330 w-5 h-5" /></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-12 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1 gap-0.5 items-center">
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-950 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-950 accent-hue-rotate-30 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-950 accent-hue-rotate-60 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-950 accent-hue-rotate-90 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-950 accent-hue-rotate-120 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-950 accent-hue-rotate-150 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-950 accent-hue-rotate-180 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-950 accent-hue-rotate-210 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-950 accent-hue-rotate-240 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-950 accent-hue-rotate-270 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-950 accent-hue-rotate-300 w-5 h-5" /></div>
      <div class="flex-1 text-center"><input type="checkbox" checked class="accent-blue-950 accent-hue-rotate-330 w-5 h-5" /></div>
    </div>
  </div>
  </div>
</Example>

