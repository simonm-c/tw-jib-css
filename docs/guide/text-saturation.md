---
title: Text Saturation
---

<!-- llm-context: text-saturation / -text-saturation utility — adjusts text colour saturation/chroma using CSS relative colour syntax across 17 colour spaces. text-saturation-{n} to saturate, -text-saturation-{n} to desaturate, with optional /{color-space} modifier. text-saturate-{n} and text-desaturate-{n} are user-friendly aliases. -->

# Text Saturation

Adjust the saturation (chroma) of any text colour using CSS relative colour syntax. Use `text-saturation-{amount}` to saturate and `-text-saturation-{amount}` to desaturate. Works across 17 colour spaces with a simple slash modifier.

Saturation utilities are also available for [background](/guide/saturation), [fill](/guide/fill-saturation), [stroke](/guide/stroke-saturation), [outline](/guide/outline-saturation), [accent](/guide/accent-saturation), and [border](/guide/border-saturation).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/saturation';
```
:::

## Quick Reference

Formulas use `amt` for `var(--tw-jib--text-saturation--amount)` — set to `<amount> × 0.01` (saturate) or `<amount> × −0.01` (desaturate).

<QuickReference :rows="[
  { class: 'text-saturation-<amount>', styles: 'color: oklch(from var(--tw-jib--text-color) l calc(c * (1 - max(amt, 0 - amt)) + max(0, amt) * 0.4) h / alpha)' },
  { class: '-text-saturation-<amount>', styles: 'color: oklch(from var(--tw-jib--text-color) l calc(c * (1 - max(amt, 0 - amt)) + max(0, amt) * 0.4) h / alpha)' },
  { class: 'text-saturation-<amount>/oklch', styles: 'color: oklch(from var(--tw-jib--text-color) l calc(c * (1 - max(amt, 0 - amt)) + max(0, amt) * 0.4) h / alpha)' },
  { class: 'text-saturation-<amount>/hsl', styles: 'color: hsl(from var(--tw-jib--text-color) h calc(s * (1 - max(amt, 0 - amt)) + max(0, amt) * 100) l / alpha)' },
  { class: 'text-saturation-<amount>/color-mix', styles: 'color: color-mix(in oklch, var(--tw-jib--text-color), gray calc(max(0, 0 - amt) * 100%))' },
]" />

## Basic Usage

### Saturate

Set a base text colour with `text-{color}`, then increase saturation with `text-saturation-{amount}`. Start with a desaturated colour to see the full effect:

<Example stretch>
  <div class="flex gap-6 text-2xl font-bold">
    <span class="text-slate-400">base</span>
    <span class="text-slate-400 text-saturation-20">+20</span>
    <span class="text-slate-400 text-saturation-40">+40</span>
  </div>
</Example>

### Desaturate

Use `-text-saturation-{amount}` to decrease saturation:

<Example stretch>
  <div class="flex gap-6 text-2xl font-bold">
    <span class="text-blue-500">base</span>
    <span class="text-blue-500 -text-saturation-20">-20</span>
    <span class="text-blue-500 -text-saturation-40">-40</span>
  </div>
</Example>

## Scale

### Saturate scale

<Example stretch>
  <div class="flex gap-2 text-lg font-bold">
    <div class="text-center">
      <span class="text-slate-400 text-saturation-0">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">0</div>
    </div>
    <div class="text-center">
      <span class="text-slate-400 text-saturation-10">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">10</div>
    </div>
    <div class="text-center">
      <span class="text-slate-400 text-saturation-20">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">20</div>
    </div>
    <div class="text-center">
      <span class="text-slate-400 text-saturation-30">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">30</div>
    </div>
    <div class="text-center">
      <span class="text-slate-400 text-saturation-40">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">40</div>
    </div>
    <div class="text-center">
      <span class="text-slate-400 text-saturation-50">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">50</div>
    </div>
    <div class="text-center">
      <span class="text-slate-400 text-saturation-60">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">60</div>
    </div>
    <div class="text-center">
      <span class="text-slate-400 text-saturation-70">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">70</div>
    </div>
    <div class="text-center">
      <span class="text-slate-400 text-saturation-80">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">80</div>
    </div>
    <div class="text-center">
      <span class="text-slate-400 text-saturation-90">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">90</div>
    </div>
    <div class="text-center">
      <span class="text-slate-400 text-saturation-100">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">100</div>
    </div>
  </div>
</Example>

### Desaturate scale

<Example stretch>
  <div class="flex gap-2 text-lg font-bold">
    <div class="text-center">
      <span class="text-blue-500 -text-saturation-0">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">0</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 -text-saturation-10">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">10</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 -text-saturation-20">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">20</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 -text-saturation-30">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">30</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 -text-saturation-40">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">40</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 -text-saturation-50">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">50</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 -text-saturation-60">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">60</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 -text-saturation-70">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">70</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 -text-saturation-80">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">80</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 -text-saturation-90">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">90</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 -text-saturation-100">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">100</div>
    </div>
  </div>
</Example>

## Colour Spaces

Use the slash modifier to select a colour space. For details on how scaling works per space, see [Background Saturation](/guide/saturation#how-scaling-works).

### Saturate across colour spaces

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-slate-400">Aa</span>
        <span class="text-slate-400 text-saturation-10/oklch">Aa</span>
        <span class="text-slate-400 text-saturation-20/oklch">Aa</span>
        <span class="text-slate-400 text-saturation-30/oklch">Aa</span>
        <span class="text-slate-400 text-saturation-40/oklch">Aa</span>
        <span class="text-slate-400 text-saturation-50/oklch">Aa</span>
        <span class="text-slate-400 text-saturation-60/oklch">Aa</span>
        <span class="text-slate-400 text-saturation-70/oklch">Aa</span>
        <span class="text-slate-400 text-saturation-80/oklch">Aa</span>
        <span class="text-slate-400 text-saturation-90/oklch">Aa</span>
        <span class="text-slate-400 text-saturation-100/oklch">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lch</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-slate-400">Aa</span>
        <span class="text-slate-400 text-saturation-10/lch">Aa</span>
        <span class="text-slate-400 text-saturation-20/lch">Aa</span>
        <span class="text-slate-400 text-saturation-30/lch">Aa</span>
        <span class="text-slate-400 text-saturation-40/lch">Aa</span>
        <span class="text-slate-400 text-saturation-50/lch">Aa</span>
        <span class="text-slate-400 text-saturation-60/lch">Aa</span>
        <span class="text-slate-400 text-saturation-70/lch">Aa</span>
        <span class="text-slate-400 text-saturation-80/lch">Aa</span>
        <span class="text-slate-400 text-saturation-90/lch">Aa</span>
        <span class="text-slate-400 text-saturation-100/lch">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-slate-400">Aa</span>
        <span class="text-slate-400 text-saturation-10/oklab">Aa</span>
        <span class="text-slate-400 text-saturation-20/oklab">Aa</span>
        <span class="text-slate-400 text-saturation-30/oklab">Aa</span>
        <span class="text-slate-400 text-saturation-40/oklab">Aa</span>
        <span class="text-slate-400 text-saturation-50/oklab">Aa</span>
        <span class="text-slate-400 text-saturation-60/oklab">Aa</span>
        <span class="text-slate-400 text-saturation-70/oklab">Aa</span>
        <span class="text-slate-400 text-saturation-80/oklab">Aa</span>
        <span class="text-slate-400 text-saturation-90/oklab">Aa</span>
        <span class="text-slate-400 text-saturation-100/oklab">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-slate-400">Aa</span>
        <span class="text-slate-400 text-saturation-10/lab">Aa</span>
        <span class="text-slate-400 text-saturation-20/lab">Aa</span>
        <span class="text-slate-400 text-saturation-30/lab">Aa</span>
        <span class="text-slate-400 text-saturation-40/lab">Aa</span>
        <span class="text-slate-400 text-saturation-50/lab">Aa</span>
        <span class="text-slate-400 text-saturation-60/lab">Aa</span>
        <span class="text-slate-400 text-saturation-70/lab">Aa</span>
        <span class="text-slate-400 text-saturation-80/lab">Aa</span>
        <span class="text-slate-400 text-saturation-90/lab">Aa</span>
        <span class="text-slate-400 text-saturation-100/lab">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-slate-400">Aa</span>
        <span class="text-slate-400 text-saturation-10/hsl">Aa</span>
        <span class="text-slate-400 text-saturation-20/hsl">Aa</span>
        <span class="text-slate-400 text-saturation-30/hsl">Aa</span>
        <span class="text-slate-400 text-saturation-40/hsl">Aa</span>
        <span class="text-slate-400 text-saturation-50/hsl">Aa</span>
        <span class="text-slate-400 text-saturation-60/hsl">Aa</span>
        <span class="text-slate-400 text-saturation-70/hsl">Aa</span>
        <span class="text-slate-400 text-saturation-80/hsl">Aa</span>
        <span class="text-slate-400 text-saturation-90/hsl">Aa</span>
        <span class="text-slate-400 text-saturation-100/hsl">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hwb</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-slate-400">Aa</span>
        <span class="text-slate-400 text-saturation-10/hwb">Aa</span>
        <span class="text-slate-400 text-saturation-20/hwb">Aa</span>
        <span class="text-slate-400 text-saturation-30/hwb">Aa</span>
        <span class="text-slate-400 text-saturation-40/hwb">Aa</span>
        <span class="text-slate-400 text-saturation-50/hwb">Aa</span>
        <span class="text-slate-400 text-saturation-60/hwb">Aa</span>
        <span class="text-slate-400 text-saturation-70/hwb">Aa</span>
        <span class="text-slate-400 text-saturation-80/hwb">Aa</span>
        <span class="text-slate-400 text-saturation-90/hwb">Aa</span>
        <span class="text-slate-400 text-saturation-100/hwb">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-slate-400">Aa</span>
        <span class="text-slate-400 text-saturation-10/rgb">Aa</span>
        <span class="text-slate-400 text-saturation-20/rgb">Aa</span>
        <span class="text-slate-400 text-saturation-30/rgb">Aa</span>
        <span class="text-slate-400 text-saturation-40/rgb">Aa</span>
        <span class="text-slate-400 text-saturation-50/rgb">Aa</span>
        <span class="text-slate-400 text-saturation-60/rgb">Aa</span>
        <span class="text-slate-400 text-saturation-70/rgb">Aa</span>
        <span class="text-slate-400 text-saturation-80/rgb">Aa</span>
        <span class="text-slate-400 text-saturation-90/rgb">Aa</span>
        <span class="text-slate-400 text-saturation-100/rgb">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-slate-400">Aa</span>
        <span class="text-slate-400 text-saturation-10/srgb">Aa</span>
        <span class="text-slate-400 text-saturation-20/srgb">Aa</span>
        <span class="text-slate-400 text-saturation-30/srgb">Aa</span>
        <span class="text-slate-400 text-saturation-40/srgb">Aa</span>
        <span class="text-slate-400 text-saturation-50/srgb">Aa</span>
        <span class="text-slate-400 text-saturation-60/srgb">Aa</span>
        <span class="text-slate-400 text-saturation-70/srgb">Aa</span>
        <span class="text-slate-400 text-saturation-80/srgb">Aa</span>
        <span class="text-slate-400 text-saturation-90/srgb">Aa</span>
        <span class="text-slate-400 text-saturation-100/srgb">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb-linear</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-slate-400">Aa</span>
        <span class="text-slate-400 text-saturation-10/srgb-linear">Aa</span>
        <span class="text-slate-400 text-saturation-20/srgb-linear">Aa</span>
        <span class="text-slate-400 text-saturation-30/srgb-linear">Aa</span>
        <span class="text-slate-400 text-saturation-40/srgb-linear">Aa</span>
        <span class="text-slate-400 text-saturation-50/srgb-linear">Aa</span>
        <span class="text-slate-400 text-saturation-60/srgb-linear">Aa</span>
        <span class="text-slate-400 text-saturation-70/srgb-linear">Aa</span>
        <span class="text-slate-400 text-saturation-80/srgb-linear">Aa</span>
        <span class="text-slate-400 text-saturation-90/srgb-linear">Aa</span>
        <span class="text-slate-400 text-saturation-100/srgb-linear">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/display-p3</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-slate-400">Aa</span>
        <span class="text-slate-400 text-saturation-10/display-p3">Aa</span>
        <span class="text-slate-400 text-saturation-20/display-p3">Aa</span>
        <span class="text-slate-400 text-saturation-30/display-p3">Aa</span>
        <span class="text-slate-400 text-saturation-40/display-p3">Aa</span>
        <span class="text-slate-400 text-saturation-50/display-p3">Aa</span>
        <span class="text-slate-400 text-saturation-60/display-p3">Aa</span>
        <span class="text-slate-400 text-saturation-70/display-p3">Aa</span>
        <span class="text-slate-400 text-saturation-80/display-p3">Aa</span>
        <span class="text-slate-400 text-saturation-90/display-p3">Aa</span>
        <span class="text-slate-400 text-saturation-100/display-p3">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/a98-rgb</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-slate-400">Aa</span>
        <span class="text-slate-400 text-saturation-10/a98-rgb">Aa</span>
        <span class="text-slate-400 text-saturation-20/a98-rgb">Aa</span>
        <span class="text-slate-400 text-saturation-30/a98-rgb">Aa</span>
        <span class="text-slate-400 text-saturation-40/a98-rgb">Aa</span>
        <span class="text-slate-400 text-saturation-50/a98-rgb">Aa</span>
        <span class="text-slate-400 text-saturation-60/a98-rgb">Aa</span>
        <span class="text-slate-400 text-saturation-70/a98-rgb">Aa</span>
        <span class="text-slate-400 text-saturation-80/a98-rgb">Aa</span>
        <span class="text-slate-400 text-saturation-90/a98-rgb">Aa</span>
        <span class="text-slate-400 text-saturation-100/a98-rgb">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/prophoto-rgb</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-slate-400">Aa</span>
        <span class="text-slate-400 text-saturation-10/prophoto-rgb">Aa</span>
        <span class="text-slate-400 text-saturation-20/prophoto-rgb">Aa</span>
        <span class="text-slate-400 text-saturation-30/prophoto-rgb">Aa</span>
        <span class="text-slate-400 text-saturation-40/prophoto-rgb">Aa</span>
        <span class="text-slate-400 text-saturation-50/prophoto-rgb">Aa</span>
        <span class="text-slate-400 text-saturation-60/prophoto-rgb">Aa</span>
        <span class="text-slate-400 text-saturation-70/prophoto-rgb">Aa</span>
        <span class="text-slate-400 text-saturation-80/prophoto-rgb">Aa</span>
        <span class="text-slate-400 text-saturation-90/prophoto-rgb">Aa</span>
        <span class="text-slate-400 text-saturation-100/prophoto-rgb">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rec2020</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-slate-400">Aa</span>
        <span class="text-slate-400 text-saturation-10/rec2020">Aa</span>
        <span class="text-slate-400 text-saturation-20/rec2020">Aa</span>
        <span class="text-slate-400 text-saturation-30/rec2020">Aa</span>
        <span class="text-slate-400 text-saturation-40/rec2020">Aa</span>
        <span class="text-slate-400 text-saturation-50/rec2020">Aa</span>
        <span class="text-slate-400 text-saturation-60/rec2020">Aa</span>
        <span class="text-slate-400 text-saturation-70/rec2020">Aa</span>
        <span class="text-slate-400 text-saturation-80/rec2020">Aa</span>
        <span class="text-slate-400 text-saturation-90/rec2020">Aa</span>
        <span class="text-slate-400 text-saturation-100/rec2020">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-slate-400">Aa</span>
        <span class="text-slate-400 text-saturation-10/xyz">Aa</span>
        <span class="text-slate-400 text-saturation-20/xyz">Aa</span>
        <span class="text-slate-400 text-saturation-30/xyz">Aa</span>
        <span class="text-slate-400 text-saturation-40/xyz">Aa</span>
        <span class="text-slate-400 text-saturation-50/xyz">Aa</span>
        <span class="text-slate-400 text-saturation-60/xyz">Aa</span>
        <span class="text-slate-400 text-saturation-70/xyz">Aa</span>
        <span class="text-slate-400 text-saturation-80/xyz">Aa</span>
        <span class="text-slate-400 text-saturation-90/xyz">Aa</span>
        <span class="text-slate-400 text-saturation-100/xyz">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d50</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-slate-400">Aa</span>
        <span class="text-slate-400 text-saturation-10/xyz-d50">Aa</span>
        <span class="text-slate-400 text-saturation-20/xyz-d50">Aa</span>
        <span class="text-slate-400 text-saturation-30/xyz-d50">Aa</span>
        <span class="text-slate-400 text-saturation-40/xyz-d50">Aa</span>
        <span class="text-slate-400 text-saturation-50/xyz-d50">Aa</span>
        <span class="text-slate-400 text-saturation-60/xyz-d50">Aa</span>
        <span class="text-slate-400 text-saturation-70/xyz-d50">Aa</span>
        <span class="text-slate-400 text-saturation-80/xyz-d50">Aa</span>
        <span class="text-slate-400 text-saturation-90/xyz-d50">Aa</span>
        <span class="text-slate-400 text-saturation-100/xyz-d50">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d65</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-slate-400">Aa</span>
        <span class="text-slate-400 text-saturation-10/xyz-d65">Aa</span>
        <span class="text-slate-400 text-saturation-20/xyz-d65">Aa</span>
        <span class="text-slate-400 text-saturation-30/xyz-d65">Aa</span>
        <span class="text-slate-400 text-saturation-40/xyz-d65">Aa</span>
        <span class="text-slate-400 text-saturation-50/xyz-d65">Aa</span>
        <span class="text-slate-400 text-saturation-60/xyz-d65">Aa</span>
        <span class="text-slate-400 text-saturation-70/xyz-d65">Aa</span>
        <span class="text-slate-400 text-saturation-80/xyz-d65">Aa</span>
        <span class="text-slate-400 text-saturation-90/xyz-d65">Aa</span>
        <span class="text-slate-400 text-saturation-100/xyz-d65">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-slate-400">Aa</span>
        <span class="text-slate-400 text-saturation-10/color-mix">Aa</span>
        <span class="text-slate-400 text-saturation-20/color-mix">Aa</span>
        <span class="text-slate-400 text-saturation-30/color-mix">Aa</span>
        <span class="text-slate-400 text-saturation-40/color-mix">Aa</span>
        <span class="text-slate-400 text-saturation-50/color-mix">Aa</span>
        <span class="text-slate-400 text-saturation-60/color-mix">Aa</span>
        <span class="text-slate-400 text-saturation-70/color-mix">Aa</span>
        <span class="text-slate-400 text-saturation-80/color-mix">Aa</span>
        <span class="text-slate-400 text-saturation-90/color-mix">Aa</span>
        <span class="text-slate-400 text-saturation-100/color-mix">Aa</span>
      </div>
    </div>
  </div>
</Example>

### Desaturate across colour spaces

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-blue-500">Aa</span>
        <span class="text-blue-500 -text-saturation-10/oklch">Aa</span>
        <span class="text-blue-500 -text-saturation-20/oklch">Aa</span>
        <span class="text-blue-500 -text-saturation-30/oklch">Aa</span>
        <span class="text-blue-500 -text-saturation-40/oklch">Aa</span>
        <span class="text-blue-500 -text-saturation-50/oklch">Aa</span>
        <span class="text-blue-500 -text-saturation-60/oklch">Aa</span>
        <span class="text-blue-500 -text-saturation-70/oklch">Aa</span>
        <span class="text-blue-500 -text-saturation-80/oklch">Aa</span>
        <span class="text-blue-500 -text-saturation-90/oklch">Aa</span>
        <span class="text-blue-500 -text-saturation-100/oklch">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lch</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-blue-500">Aa</span>
        <span class="text-blue-500 -text-saturation-10/lch">Aa</span>
        <span class="text-blue-500 -text-saturation-20/lch">Aa</span>
        <span class="text-blue-500 -text-saturation-30/lch">Aa</span>
        <span class="text-blue-500 -text-saturation-40/lch">Aa</span>
        <span class="text-blue-500 -text-saturation-50/lch">Aa</span>
        <span class="text-blue-500 -text-saturation-60/lch">Aa</span>
        <span class="text-blue-500 -text-saturation-70/lch">Aa</span>
        <span class="text-blue-500 -text-saturation-80/lch">Aa</span>
        <span class="text-blue-500 -text-saturation-90/lch">Aa</span>
        <span class="text-blue-500 -text-saturation-100/lch">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-blue-500">Aa</span>
        <span class="text-blue-500 -text-saturation-10/oklab">Aa</span>
        <span class="text-blue-500 -text-saturation-20/oklab">Aa</span>
        <span class="text-blue-500 -text-saturation-30/oklab">Aa</span>
        <span class="text-blue-500 -text-saturation-40/oklab">Aa</span>
        <span class="text-blue-500 -text-saturation-50/oklab">Aa</span>
        <span class="text-blue-500 -text-saturation-60/oklab">Aa</span>
        <span class="text-blue-500 -text-saturation-70/oklab">Aa</span>
        <span class="text-blue-500 -text-saturation-80/oklab">Aa</span>
        <span class="text-blue-500 -text-saturation-90/oklab">Aa</span>
        <span class="text-blue-500 -text-saturation-100/oklab">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-blue-500">Aa</span>
        <span class="text-blue-500 -text-saturation-10/lab">Aa</span>
        <span class="text-blue-500 -text-saturation-20/lab">Aa</span>
        <span class="text-blue-500 -text-saturation-30/lab">Aa</span>
        <span class="text-blue-500 -text-saturation-40/lab">Aa</span>
        <span class="text-blue-500 -text-saturation-50/lab">Aa</span>
        <span class="text-blue-500 -text-saturation-60/lab">Aa</span>
        <span class="text-blue-500 -text-saturation-70/lab">Aa</span>
        <span class="text-blue-500 -text-saturation-80/lab">Aa</span>
        <span class="text-blue-500 -text-saturation-90/lab">Aa</span>
        <span class="text-blue-500 -text-saturation-100/lab">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-blue-500">Aa</span>
        <span class="text-blue-500 -text-saturation-10/hsl">Aa</span>
        <span class="text-blue-500 -text-saturation-20/hsl">Aa</span>
        <span class="text-blue-500 -text-saturation-30/hsl">Aa</span>
        <span class="text-blue-500 -text-saturation-40/hsl">Aa</span>
        <span class="text-blue-500 -text-saturation-50/hsl">Aa</span>
        <span class="text-blue-500 -text-saturation-60/hsl">Aa</span>
        <span class="text-blue-500 -text-saturation-70/hsl">Aa</span>
        <span class="text-blue-500 -text-saturation-80/hsl">Aa</span>
        <span class="text-blue-500 -text-saturation-90/hsl">Aa</span>
        <span class="text-blue-500 -text-saturation-100/hsl">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hwb</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-blue-500">Aa</span>
        <span class="text-blue-500 -text-saturation-10/hwb">Aa</span>
        <span class="text-blue-500 -text-saturation-20/hwb">Aa</span>
        <span class="text-blue-500 -text-saturation-30/hwb">Aa</span>
        <span class="text-blue-500 -text-saturation-40/hwb">Aa</span>
        <span class="text-blue-500 -text-saturation-50/hwb">Aa</span>
        <span class="text-blue-500 -text-saturation-60/hwb">Aa</span>
        <span class="text-blue-500 -text-saturation-70/hwb">Aa</span>
        <span class="text-blue-500 -text-saturation-80/hwb">Aa</span>
        <span class="text-blue-500 -text-saturation-90/hwb">Aa</span>
        <span class="text-blue-500 -text-saturation-100/hwb">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-blue-500">Aa</span>
        <span class="text-blue-500 -text-saturation-10/rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-20/rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-30/rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-40/rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-50/rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-60/rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-70/rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-80/rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-90/rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-100/rgb">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-blue-500">Aa</span>
        <span class="text-blue-500 -text-saturation-10/srgb">Aa</span>
        <span class="text-blue-500 -text-saturation-20/srgb">Aa</span>
        <span class="text-blue-500 -text-saturation-30/srgb">Aa</span>
        <span class="text-blue-500 -text-saturation-40/srgb">Aa</span>
        <span class="text-blue-500 -text-saturation-50/srgb">Aa</span>
        <span class="text-blue-500 -text-saturation-60/srgb">Aa</span>
        <span class="text-blue-500 -text-saturation-70/srgb">Aa</span>
        <span class="text-blue-500 -text-saturation-80/srgb">Aa</span>
        <span class="text-blue-500 -text-saturation-90/srgb">Aa</span>
        <span class="text-blue-500 -text-saturation-100/srgb">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb-linear</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-blue-500">Aa</span>
        <span class="text-blue-500 -text-saturation-10/srgb-linear">Aa</span>
        <span class="text-blue-500 -text-saturation-20/srgb-linear">Aa</span>
        <span class="text-blue-500 -text-saturation-30/srgb-linear">Aa</span>
        <span class="text-blue-500 -text-saturation-40/srgb-linear">Aa</span>
        <span class="text-blue-500 -text-saturation-50/srgb-linear">Aa</span>
        <span class="text-blue-500 -text-saturation-60/srgb-linear">Aa</span>
        <span class="text-blue-500 -text-saturation-70/srgb-linear">Aa</span>
        <span class="text-blue-500 -text-saturation-80/srgb-linear">Aa</span>
        <span class="text-blue-500 -text-saturation-90/srgb-linear">Aa</span>
        <span class="text-blue-500 -text-saturation-100/srgb-linear">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/display-p3</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-blue-500">Aa</span>
        <span class="text-blue-500 -text-saturation-10/display-p3">Aa</span>
        <span class="text-blue-500 -text-saturation-20/display-p3">Aa</span>
        <span class="text-blue-500 -text-saturation-30/display-p3">Aa</span>
        <span class="text-blue-500 -text-saturation-40/display-p3">Aa</span>
        <span class="text-blue-500 -text-saturation-50/display-p3">Aa</span>
        <span class="text-blue-500 -text-saturation-60/display-p3">Aa</span>
        <span class="text-blue-500 -text-saturation-70/display-p3">Aa</span>
        <span class="text-blue-500 -text-saturation-80/display-p3">Aa</span>
        <span class="text-blue-500 -text-saturation-90/display-p3">Aa</span>
        <span class="text-blue-500 -text-saturation-100/display-p3">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/a98-rgb</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-blue-500">Aa</span>
        <span class="text-blue-500 -text-saturation-10/a98-rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-20/a98-rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-30/a98-rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-40/a98-rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-50/a98-rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-60/a98-rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-70/a98-rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-80/a98-rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-90/a98-rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-100/a98-rgb">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/prophoto-rgb</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-blue-500">Aa</span>
        <span class="text-blue-500 -text-saturation-10/prophoto-rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-20/prophoto-rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-30/prophoto-rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-40/prophoto-rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-50/prophoto-rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-60/prophoto-rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-70/prophoto-rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-80/prophoto-rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-90/prophoto-rgb">Aa</span>
        <span class="text-blue-500 -text-saturation-100/prophoto-rgb">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rec2020</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-blue-500">Aa</span>
        <span class="text-blue-500 -text-saturation-10/rec2020">Aa</span>
        <span class="text-blue-500 -text-saturation-20/rec2020">Aa</span>
        <span class="text-blue-500 -text-saturation-30/rec2020">Aa</span>
        <span class="text-blue-500 -text-saturation-40/rec2020">Aa</span>
        <span class="text-blue-500 -text-saturation-50/rec2020">Aa</span>
        <span class="text-blue-500 -text-saturation-60/rec2020">Aa</span>
        <span class="text-blue-500 -text-saturation-70/rec2020">Aa</span>
        <span class="text-blue-500 -text-saturation-80/rec2020">Aa</span>
        <span class="text-blue-500 -text-saturation-90/rec2020">Aa</span>
        <span class="text-blue-500 -text-saturation-100/rec2020">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-blue-500">Aa</span>
        <span class="text-blue-500 -text-saturation-10/xyz">Aa</span>
        <span class="text-blue-500 -text-saturation-20/xyz">Aa</span>
        <span class="text-blue-500 -text-saturation-30/xyz">Aa</span>
        <span class="text-blue-500 -text-saturation-40/xyz">Aa</span>
        <span class="text-blue-500 -text-saturation-50/xyz">Aa</span>
        <span class="text-blue-500 -text-saturation-60/xyz">Aa</span>
        <span class="text-blue-500 -text-saturation-70/xyz">Aa</span>
        <span class="text-blue-500 -text-saturation-80/xyz">Aa</span>
        <span class="text-blue-500 -text-saturation-90/xyz">Aa</span>
        <span class="text-blue-500 -text-saturation-100/xyz">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d50</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-blue-500">Aa</span>
        <span class="text-blue-500 -text-saturation-10/xyz-d50">Aa</span>
        <span class="text-blue-500 -text-saturation-20/xyz-d50">Aa</span>
        <span class="text-blue-500 -text-saturation-30/xyz-d50">Aa</span>
        <span class="text-blue-500 -text-saturation-40/xyz-d50">Aa</span>
        <span class="text-blue-500 -text-saturation-50/xyz-d50">Aa</span>
        <span class="text-blue-500 -text-saturation-60/xyz-d50">Aa</span>
        <span class="text-blue-500 -text-saturation-70/xyz-d50">Aa</span>
        <span class="text-blue-500 -text-saturation-80/xyz-d50">Aa</span>
        <span class="text-blue-500 -text-saturation-90/xyz-d50">Aa</span>
        <span class="text-blue-500 -text-saturation-100/xyz-d50">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d65</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-blue-500">Aa</span>
        <span class="text-blue-500 -text-saturation-10/xyz-d65">Aa</span>
        <span class="text-blue-500 -text-saturation-20/xyz-d65">Aa</span>
        <span class="text-blue-500 -text-saturation-30/xyz-d65">Aa</span>
        <span class="text-blue-500 -text-saturation-40/xyz-d65">Aa</span>
        <span class="text-blue-500 -text-saturation-50/xyz-d65">Aa</span>
        <span class="text-blue-500 -text-saturation-60/xyz-d65">Aa</span>
        <span class="text-blue-500 -text-saturation-70/xyz-d65">Aa</span>
        <span class="text-blue-500 -text-saturation-80/xyz-d65">Aa</span>
        <span class="text-blue-500 -text-saturation-90/xyz-d65">Aa</span>
        <span class="text-blue-500 -text-saturation-100/xyz-d65">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1 gap-2 text-lg font-bold">
        <span class="text-blue-500">Aa</span>
        <span class="text-blue-500 -text-saturation-10/color-mix">Aa</span>
        <span class="text-blue-500 -text-saturation-20/color-mix">Aa</span>
        <span class="text-blue-500 -text-saturation-30/color-mix">Aa</span>
        <span class="text-blue-500 -text-saturation-40/color-mix">Aa</span>
        <span class="text-blue-500 -text-saturation-50/color-mix">Aa</span>
        <span class="text-blue-500 -text-saturation-60/color-mix">Aa</span>
        <span class="text-blue-500 -text-saturation-70/color-mix">Aa</span>
        <span class="text-blue-500 -text-saturation-80/color-mix">Aa</span>
        <span class="text-blue-500 -text-saturation-90/color-mix">Aa</span>
        <span class="text-blue-500 -text-saturation-100/color-mix">Aa</span>
      </div>
    </div>
  </div>
</Example>

## Aliases

For convenience, `text-saturate-*` and `text-desaturate-*` are provided as user-friendly aliases that map to the same underlying utilities:

| Alias | Equivalent |
| --- | --- |
| `text-saturate-{amount}` | `text-saturation-{amount}` |
| `text-saturate-{amount}/{space}` | `text-saturation-{amount}/{space}` |
| `text-desaturate-{amount}` | `-text-saturation-{amount}` |
| `text-desaturate-{amount}/{space}` | `-text-saturation-{amount}/{space}` |

Both forms produce identical CSS output. Use whichever reads better in your markup:

```html
<!-- These are equivalent -->
<p class="text-slate-400 text-saturation-20">...</p>
<p class="text-slate-400 text-saturate-20">...</p>

<!-- These are equivalent -->
<p class="text-blue-500 -text-saturation-20">...</p>
<p class="text-blue-500 text-desaturate-20">...</p>
```

