---
title: Background Saturation
---

<!-- llm-context: bg-saturation / -bg-saturation utility — adjusts background colour saturation/chroma using CSS relative colour syntax across 17 colour spaces. bg-saturation-{n} to saturate, -bg-saturation-{n} to desaturate, with optional /{color-space} modifier. bg-saturate-{n} and bg-desaturate-{n} are user-friendly aliases. -->

# Background Saturation

Adjust the saturation (chroma) of any background colour using CSS relative colour syntax. Use `bg-saturation-{amount}` to saturate and `-bg-saturation-{amount}` to desaturate. Works across 17 colour spaces with a simple slash modifier.

Saturation utilities are also available for [text](/guide/text-saturation), [fill](/guide/fill-saturation), [stroke](/guide/stroke-saturation), [outline](/guide/outline-saturation), [accent](/guide/accent-saturation), and [border](/guide/border-saturation).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/saturation';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'bg-saturation-<amount>', styles: 'background-color: oklch(from var(--tw-jib--bg-color) l calc(c * (1 - abs) + max(0, amt) * 0.4) h / alpha)' },
  { class: '-bg-saturation-<amount>', styles: 'background-color: oklch(from var(--tw-jib--bg-color) l calc(c * (1 - abs) - ...) h / alpha)' },
  { class: 'bg-saturation-<amount>/oklch', styles: 'background-color: oklch(from ... l calc(c ...) h / alpha)' },
  { class: 'bg-saturation-<amount>/lch', styles: 'background-color: lch(from ... l calc(c ...) h / alpha)' },
  { class: 'bg-saturation-<amount>/hsl', styles: 'background-color: hsl(from ... h calc(s ...) l / alpha)' },
  { class: 'bg-saturation-<amount>/oklab', styles: 'background-color: oklab(from ... l calc(a * (1 + amt)) calc(b * (1 + amt)) / alpha)' },
  { class: 'bg-saturation-<amount>/lab', styles: 'background-color: lab(from ... l calc(a * (1 + amt)) calc(b * (1 + amt)) / alpha)' },
  { class: 'bg-saturation-<amount>/rgb', styles: 'background-color: rgb(from ... calc(r + amt * (r - gray)) calc(g + amt * (g - gray)) calc(b + amt * (b - gray)) / alpha)' },
  { class: 'bg-saturation-<amount>/color-mix', styles: 'background-color: color-mix(in oklch, ...)' },
]" />

## Basic Usage

### Saturate

Set a base background colour with `bg-{color}`, then increase saturation with `bg-saturation-{amount}`. Start with a desaturated colour to see the full effect:

<Example stretch>
  <div class="flex gap-1">
    <div class="flex-1 bg-slate-400 p-6 text-center text-white text-sm font-medium">base</div>
    <div class="flex-1 bg-slate-400 bg-saturation-20 p-6 text-center text-white text-sm">+20</div>
    <div class="flex-1 bg-slate-400 bg-saturation-40 p-6 text-center text-white text-sm">+40</div>
  </div>
</Example>

### Desaturate

Use `-bg-saturation-{amount}` to decrease saturation:

<Example stretch>
  <div class="flex gap-1">
    <div class="flex-1 bg-blue-500 p-6 text-center text-white text-sm font-medium">base</div>
    <div class="flex-1 bg-blue-500 -bg-saturation-20 p-6 text-center text-white text-sm">-20</div>
    <div class="flex-1 bg-blue-500 -bg-saturation-40 p-6 text-center text-white text-sm">-40</div>
  </div>
</Example>

## On hover

The saturation amount is a registered `@property` variable, so it composes with Tailwind's `hover:` prefix and animates smoothly when paired with `transition`:

<Example stretch>
  <div class="flex gap-3">
    <div class="flex-1 bg-blue-500 hover:-bg-saturation-80 transition duration-700 p-6 rounded text-center text-white text-sm font-medium cursor-pointer">hover to desaturate</div>
    <div class="flex-1 bg-slate-400 hover:bg-saturation-60 transition duration-700 p-6 rounded text-center text-white text-sm font-medium cursor-pointer">hover to saturate</div>
    <div class="flex-1 bg-blue-500 hover:-bg-saturation-100 transition duration-700 p-6 rounded text-center text-white text-sm font-medium cursor-pointer">hover to grey</div>
  </div>
</Example>

```html
<div class="bg-blue-500 hover:-bg-saturation-80 transition duration-700">
  hover to desaturate
</div>
```

## Scale

Use increasing values to create consistent saturation and desaturation scales from a single base colour:

### Saturate scale

<Example stretch>
  <div class="flex gap-1">
    <div class="flex-1 text-center">
      <div class="bg-slate-400 bg-saturation-0 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">0</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-slate-400 bg-saturation-10 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">10</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-slate-400 bg-saturation-20 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">20</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-slate-400 bg-saturation-30 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-slate-400 bg-saturation-40 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">40</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-slate-400 bg-saturation-50 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">50</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-slate-400 bg-saturation-60 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-slate-400 bg-saturation-70 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">70</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-slate-400 bg-saturation-80 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">80</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-slate-400 bg-saturation-90 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-slate-400 bg-saturation-100 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">100</div>
    </div>
  </div>
</Example>

### Desaturate scale

<Example stretch>
  <div class="flex gap-1">
    <div class="flex-1 text-center">
      <div class="bg-blue-500 -bg-saturation-0 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">0</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 -bg-saturation-10 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">10</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 -bg-saturation-20 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">20</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 -bg-saturation-30 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 -bg-saturation-40 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">40</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 -bg-saturation-50 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">50</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 -bg-saturation-60 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 -bg-saturation-70 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">70</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 -bg-saturation-80 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">80</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 -bg-saturation-90 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
    <div class="flex-1 text-center">
      <div class="bg-blue-500 -bg-saturation-100 h-12"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">100</div>
    </div>
  </div>
</Example>

## Aliases

`bg-saturate-{amount}` and `bg-desaturate-{amount}` are user-friendly aliases:

```html
<!-- These are equivalent -->
<div class="bg-slate-400 bg-saturation-20">...</div>
<div class="bg-blue-500 bg-saturate-20">...</div>

<!-- These are equivalent -->
<div class="bg-blue-500 -bg-saturation-20">...</div>
<div class="bg-blue-500 bg-desaturate-20">...</div>
```

## Colour Spaces

Use the slash modifier to select a colour space. Different spaces produce visually distinct results. For background on each colour space, see the [Colour Spaces guide](/guide/colour-spaces).

### Saturate across colour spaces

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-slate-400 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-10/oklch h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-20/oklch h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-30/oklch h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-40/oklch h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-50/oklch h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-60/oklch h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-70/oklch h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-80/oklch h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-90/oklch h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-100/oklch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-slate-400 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-10/lch h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-20/lch h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-30/lch h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-40/lch h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-50/lch h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-60/lch h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-70/lch h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-80/lch h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-90/lch h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-100/lch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-slate-400 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-10/oklab h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-20/oklab h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-30/oklab h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-40/oklab h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-50/oklab h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-60/oklab h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-70/oklab h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-80/oklab h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-90/oklab h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-100/oklab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-slate-400 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-10/lab h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-20/lab h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-30/lab h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-40/lab h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-50/lab h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-60/lab h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-70/lab h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-80/lab h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-90/lab h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-100/lab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-slate-400 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-10/hsl h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-20/hsl h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-30/hsl h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-40/hsl h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-50/hsl h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-60/hsl h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-70/hsl h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-80/hsl h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-90/hsl h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-100/hsl h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hwb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-slate-400 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-10/hwb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-20/hwb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-30/hwb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-40/hwb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-50/hwb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-60/hwb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-70/hwb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-80/hwb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-90/hwb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-100/hwb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-slate-400 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-10/rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-20/rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-30/rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-40/rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-50/rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-60/rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-70/rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-80/rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-90/rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-100/rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-slate-400 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-10/srgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-20/srgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-30/srgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-40/srgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-50/srgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-60/srgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-70/srgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-80/srgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-90/srgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-100/srgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb-linear</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-slate-400 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-10/srgb-linear h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-20/srgb-linear h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-30/srgb-linear h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-40/srgb-linear h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-50/srgb-linear h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-60/srgb-linear h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-70/srgb-linear h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-80/srgb-linear h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-90/srgb-linear h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-100/srgb-linear h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/display-p3</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-slate-400 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-10/display-p3 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-20/display-p3 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-30/display-p3 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-40/display-p3 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-50/display-p3 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-60/display-p3 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-70/display-p3 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-80/display-p3 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-90/display-p3 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-100/display-p3 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/a98-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-slate-400 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-10/a98-rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-20/a98-rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-30/a98-rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-40/a98-rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-50/a98-rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-60/a98-rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-70/a98-rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-80/a98-rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-90/a98-rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-100/a98-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/prophoto-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-slate-400 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-10/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-20/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-30/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-40/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-50/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-60/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-70/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-80/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-90/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-100/prophoto-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rec2020</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-slate-400 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-10/rec2020 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-20/rec2020 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-30/rec2020 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-40/rec2020 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-50/rec2020 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-60/rec2020 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-70/rec2020 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-80/rec2020 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-90/rec2020 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-100/rec2020 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-slate-400 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-10/xyz h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-20/xyz h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-30/xyz h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-40/xyz h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-50/xyz h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-60/xyz h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-70/xyz h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-80/xyz h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-90/xyz h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-100/xyz h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d50</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-slate-400 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-10/xyz-d50 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-20/xyz-d50 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-30/xyz-d50 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-40/xyz-d50 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-50/xyz-d50 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-60/xyz-d50 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-70/xyz-d50 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-80/xyz-d50 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-90/xyz-d50 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-100/xyz-d50 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d65</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-slate-400 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-10/xyz-d65 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-20/xyz-d65 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-30/xyz-d65 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-40/xyz-d65 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-50/xyz-d65 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-60/xyz-d65 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-70/xyz-d65 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-80/xyz-d65 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-90/xyz-d65 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-100/xyz-d65 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-slate-400 h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-10/color-mix h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-20/color-mix h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-30/color-mix h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-40/color-mix h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-50/color-mix h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-60/color-mix h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-70/color-mix h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-80/color-mix h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-90/color-mix h-8"></div>
        <div class="flex-1 bg-slate-400 bg-saturation-100/color-mix h-8"></div>
      </div>
    </div>
  </div>
</Example>

### Desaturate across colour spaces

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-10/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-30/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-50/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-70/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-90/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-100/oklch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-10/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-30/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-50/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-70/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-90/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-100/lch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-10/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-30/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-50/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-70/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-90/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-100/oklab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-10/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-30/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-50/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-70/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-90/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-100/lab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-10/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-30/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-50/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-70/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-90/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-100/hsl h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hwb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-10/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-30/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-50/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-70/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-90/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-100/hwb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-10/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-30/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-50/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-70/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-90/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-100/rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-10/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-30/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-50/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-70/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-90/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-100/srgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb-linear</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-10/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-30/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-50/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-70/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-90/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-100/srgb-linear h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/display-p3</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-10/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-30/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-50/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-70/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-90/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-100/display-p3 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/a98-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-10/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-30/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-50/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-70/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-90/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-100/a98-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/prophoto-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-10/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-30/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-50/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-70/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-90/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-100/prophoto-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rec2020</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-10/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-30/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-50/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-70/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-90/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-100/rec2020 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-10/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-30/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-50/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-70/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-90/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-100/xyz h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d50</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-10/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-30/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-50/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-70/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-90/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-100/xyz-d50 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d65</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-10/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-30/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-50/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-70/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-90/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-100/xyz-d65 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-10/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-20/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-30/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-40/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-50/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-60/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-70/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-80/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-90/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-saturation-100/color-mix h-8"></div>
      </div>
    </div>
  </div>
</Example>


## How Scaling Works

Saturation scaling varies by colour space:

- **oklch / lch** — modifies the chroma (`c`) channel directly. At `saturate-100`, chroma moves to the maximum (0.4 for oklch, 150 for lch). At `desaturate-100`, chroma drops to 0 (greyscale).
- **hsl** — modifies the saturation (`s`) channel directly. Scale 0–100%.
- **oklab / lab** — scales both `a` and `b` chrominance axes by the same factor, preserving hue angle.
- **hwb** — drives whiteness and blackness toward 0 (saturate) or 50/50 (desaturate).
- **rgb / srgb / display-p3 / etc.** — lerps each channel toward or away from the average grey `(r+g+b)/3`.
- **xyz / xyz-d50 / xyz-d65** — scales x and z toward or away from the achromatic axis while preserving luminance (y).
- **color-mix** — mixes with a zero-chroma or max-chroma variant in oklch (experimental only).

