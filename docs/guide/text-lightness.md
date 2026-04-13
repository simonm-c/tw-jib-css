---
title: Text Lightness
---

<!-- llm-context: text-lightness / -text-lightness utility — adjusts text colour lightness using CSS relative colour syntax across 17 colour spaces. text-lightness-{n} to lighten, -text-lightness-{n} to darken, with optional /{color-space} modifier. text-lighten-{n} and text-darken-{n} are user-friendly aliases. -->

# Text Lightness

Adjust the lightness of any text colour using CSS relative colour syntax. Use `text-lightness-{amount}` to lighten and `-text-lightness-{amount}` to darken. Works across 17 colour spaces with a simple slash modifier.

Lightness utilities are also available for [background](/guide/lightness), [fill](/guide/fill-lightness), [stroke](/guide/stroke-lightness), [outline](/guide/outline-lightness), and [accent](/guide/accent-lightness).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/lightness';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'text-lightness-<amount>', styles: 'color: oklch(from var(--tw-jib--text-color) calc(l + ...) c h / alpha)' },
  { class: '-text-lightness-<amount>', styles: 'color: oklch(from var(--tw-jib--text-color) calc(l - ...) c h / alpha)' },
  { class: 'text-lightness-<amount>/oklch', styles: 'color: oklch(from var(--tw-jib--text-color) calc(l + ...) c h / alpha)' },
  { class: 'text-lightness-<amount>/hsl', styles: 'color: hsl(from var(--tw-jib--text-color) h s calc(l + ...) / alpha)' },
  { class: 'text-lightness-<amount>/color-mix', styles: 'color: color-mix(in oklab, var(--tw-jib--text-color) ..., white ...)' },
]" />

## Basic Usage

### Lighten

Set a base text colour with `text-{color}`, then lighten it with `text-lightness-{amount}`:

<Example stretch>
  <div class="flex gap-6 text-2xl font-bold">
    <span class="text-blue-500">base</span>
    <span class="text-blue-500 text-lightness-20">+20</span>
    <span class="text-blue-500 text-lightness-40">+40</span>
  </div>
</Example>

### Darken

Use `-text-lightness-{amount}` to decrease lightness:

<Example stretch>
  <div class="flex gap-6 text-2xl font-bold">
    <span class="text-blue-500">base</span>
    <span class="text-blue-500 -text-lightness-20">-20</span>
    <span class="text-blue-500 -text-lightness-40">-40</span>
  </div>
</Example>

## Scale

### Lighten scale

<Example stretch>
  <div class="flex gap-2 text-lg font-bold">
    <div class="text-center">
      <span class="text-blue-500">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">base</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 text-lightness-10">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">10</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 text-lightness-20">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">20</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 text-lightness-30">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">30</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 text-lightness-40">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">40</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 text-lightness-50">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">50</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 text-lightness-60">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">60</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 text-lightness-70">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">70</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 text-lightness-80">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">80</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 text-lightness-90">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">90</div>
    </div>
  </div>
</Example>

### Darken scale

<Example stretch>
  <div class="flex gap-2 text-lg font-bold">
    <div class="text-center">
      <span class="text-blue-500">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">base</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 -text-lightness-10">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">10</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 -text-lightness-20">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">20</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 -text-lightness-30">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">30</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 -text-lightness-40">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">40</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 -text-lightness-50">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">50</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 -text-lightness-60">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">60</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 -text-lightness-70">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">70</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 -text-lightness-80">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">80</div>
    </div>
    <div class="text-center">
      <span class="text-blue-500 -text-lightness-90">Aa</span>
      <div class="text-[10px] text-gray-400 font-normal mt-0.5">90</div>
    </div>
  </div>
</Example>

## Colour Spaces

Use the slash modifier to select a colour space. Different spaces produce visually distinct results. For background on each colour space, see the [Colour Spaces guide](/guide/colour-spaces). For details on how scaling works, see [Background Lightness](/guide/lightness#how-scaling-works).

### Lighten across colour spaces

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-10/oklch">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-20/oklch">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-30/oklch">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-40/oklch">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-50/oklch">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-60/oklch">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-70/oklch">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-80/oklch">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-90/oklch">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-100/oklch">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lch</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-10/lch">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-20/lch">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-30/lch">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-40/lch">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-50/lch">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-60/lch">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-70/lch">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-80/lch">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-90/lch">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-100/lch">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-10/oklab">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-20/oklab">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-30/oklab">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-40/oklab">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-50/oklab">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-60/oklab">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-70/oklab">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-80/oklab">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-90/oklab">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-100/oklab">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-10/lab">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-20/lab">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-30/lab">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-40/lab">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-50/lab">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-60/lab">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-70/lab">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-80/lab">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-90/lab">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-100/lab">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-10/hsl">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-20/hsl">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-30/hsl">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-40/hsl">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-50/hsl">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-60/hsl">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-70/hsl">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-80/hsl">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-90/hsl">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-100/hsl">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hwb</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-10/hwb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-20/hwb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-30/hwb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-40/hwb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-50/hwb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-60/hwb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-70/hwb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-80/hwb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-90/hwb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-100/hwb">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-10/rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-20/rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-30/rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-40/rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-50/rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-60/rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-70/rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-80/rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-90/rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-100/rgb">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-10/srgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-20/srgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-30/srgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-40/srgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-50/srgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-60/srgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-70/srgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-80/srgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-90/srgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-100/srgb">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb-linear</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-10/srgb-linear">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-20/srgb-linear">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-30/srgb-linear">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-40/srgb-linear">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-50/srgb-linear">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-60/srgb-linear">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-70/srgb-linear">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-80/srgb-linear">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-90/srgb-linear">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-100/srgb-linear">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/display-p3</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-10/display-p3">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-20/display-p3">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-30/display-p3">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-40/display-p3">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-50/display-p3">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-60/display-p3">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-70/display-p3">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-80/display-p3">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-90/display-p3">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-100/display-p3">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/a98-rgb</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-10/a98-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-20/a98-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-30/a98-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-40/a98-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-50/a98-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-60/a98-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-70/a98-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-80/a98-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-90/a98-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-100/a98-rgb">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/prophoto-rgb</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-10/prophoto-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-20/prophoto-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-30/prophoto-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-40/prophoto-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-50/prophoto-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-60/prophoto-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-70/prophoto-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-80/prophoto-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-90/prophoto-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-100/prophoto-rgb">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rec2020</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-10/rec2020">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-20/rec2020">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-30/rec2020">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-40/rec2020">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-50/rec2020">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-60/rec2020">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-70/rec2020">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-80/rec2020">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-90/rec2020">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-100/rec2020">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-10/xyz">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-20/xyz">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-30/xyz">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-40/xyz">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-50/xyz">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-60/xyz">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-70/xyz">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-80/xyz">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-90/xyz">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-100/xyz">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d50</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-10/xyz-d50">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-20/xyz-d50">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-30/xyz-d50">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-40/xyz-d50">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-50/xyz-d50">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-60/xyz-d50">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-70/xyz-d50">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-80/xyz-d50">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-90/xyz-d50">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-100/xyz-d50">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d65</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-10/xyz-d65">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-20/xyz-d65">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-30/xyz-d65">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-40/xyz-d65">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-50/xyz-d65">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-60/xyz-d65">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-70/xyz-d65">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-80/xyz-d65">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-90/xyz-d65">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-100/xyz-d65">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-10/color-mix">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-20/color-mix">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-30/color-mix">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-40/color-mix">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-50/color-mix">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-60/color-mix">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-70/color-mix">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-80/color-mix">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-90/color-mix">Aa</span>
        <span class="flex-1 text-center text-blue-500 text-lightness-100/color-mix">Aa</span>
      </div>
    </div>
  </div>
</Example>

### Darken across colour spaces

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-10/oklch">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-20/oklch">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-30/oklch">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-40/oklch">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-50/oklch">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-60/oklch">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-70/oklch">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-80/oklch">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-90/oklch">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-100/oklch">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lch</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-10/lch">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-20/lch">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-30/lch">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-40/lch">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-50/lch">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-60/lch">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-70/lch">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-80/lch">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-90/lch">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-100/lch">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-10/oklab">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-20/oklab">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-30/oklab">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-40/oklab">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-50/oklab">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-60/oklab">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-70/oklab">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-80/oklab">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-90/oklab">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-100/oklab">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-10/lab">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-20/lab">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-30/lab">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-40/lab">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-50/lab">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-60/lab">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-70/lab">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-80/lab">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-90/lab">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-100/lab">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-10/hsl">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-20/hsl">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-30/hsl">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-40/hsl">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-50/hsl">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-60/hsl">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-70/hsl">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-80/hsl">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-90/hsl">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-100/hsl">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hwb</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-10/hwb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-20/hwb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-30/hwb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-40/hwb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-50/hwb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-60/hwb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-70/hwb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-80/hwb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-90/hwb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-100/hwb">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-10/rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-20/rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-30/rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-40/rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-50/rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-60/rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-70/rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-80/rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-90/rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-100/rgb">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-10/srgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-20/srgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-30/srgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-40/srgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-50/srgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-60/srgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-70/srgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-80/srgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-90/srgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-100/srgb">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb-linear</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-10/srgb-linear">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-20/srgb-linear">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-30/srgb-linear">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-40/srgb-linear">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-50/srgb-linear">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-60/srgb-linear">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-70/srgb-linear">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-80/srgb-linear">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-90/srgb-linear">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-100/srgb-linear">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/display-p3</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-10/display-p3">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-20/display-p3">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-30/display-p3">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-40/display-p3">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-50/display-p3">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-60/display-p3">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-70/display-p3">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-80/display-p3">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-90/display-p3">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-100/display-p3">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/a98-rgb</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-10/a98-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-20/a98-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-30/a98-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-40/a98-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-50/a98-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-60/a98-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-70/a98-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-80/a98-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-90/a98-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-100/a98-rgb">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/prophoto-rgb</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-10/prophoto-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-20/prophoto-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-30/prophoto-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-40/prophoto-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-50/prophoto-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-60/prophoto-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-70/prophoto-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-80/prophoto-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-90/prophoto-rgb">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-100/prophoto-rgb">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rec2020</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-10/rec2020">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-20/rec2020">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-30/rec2020">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-40/rec2020">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-50/rec2020">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-60/rec2020">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-70/rec2020">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-80/rec2020">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-90/rec2020">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-100/rec2020">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-10/xyz">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-20/xyz">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-30/xyz">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-40/xyz">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-50/xyz">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-60/xyz">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-70/xyz">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-80/xyz">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-90/xyz">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-100/xyz">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d50</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-10/xyz-d50">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-20/xyz-d50">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-30/xyz-d50">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-40/xyz-d50">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-50/xyz-d50">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-60/xyz-d50">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-70/xyz-d50">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-80/xyz-d50">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-90/xyz-d50">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-100/xyz-d50">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d65</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-10/xyz-d65">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-20/xyz-d65">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-30/xyz-d65">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-40/xyz-d65">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-50/xyz-d65">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-60/xyz-d65">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-70/xyz-d65">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-80/xyz-d65">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-90/xyz-d65">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-100/xyz-d65">Aa</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1 gap-1 text-lg font-bold">
        <span class="flex-1 text-center text-blue-500">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-10/color-mix">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-20/color-mix">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-30/color-mix">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-40/color-mix">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-50/color-mix">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-60/color-mix">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-70/color-mix">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-80/color-mix">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-90/color-mix">Aa</span>
        <span class="flex-1 text-center text-blue-500 -text-lightness-100/color-mix">Aa</span>
      </div>
    </div>
  </div>
</Example>

## Aliases

For convenience, `text-lighten-*` and `text-darken-*` are provided as user-friendly aliases that map to the same underlying utilities:

| Alias | Equivalent |
| --- | --- |
| `text-lighten-{amount}` | `text-lightness-{amount}` |
| `text-lighten-{amount}/{space}` | `text-lightness-{amount}/{space}` |
| `text-darken-{amount}` | `-text-lightness-{amount}` |
| `text-darken-{amount}/{space}` | `-text-lightness-{amount}/{space}` |

Both forms produce identical CSS output. Use whichever reads better in your markup:

```html
<!-- These are equivalent -->
<p class="text-blue-500 text-lightness-20">...</p>
<p class="text-blue-500 text-lighten-20">...</p>

<!-- These are equivalent -->
<p class="text-blue-500 -text-lightness-20">...</p>
<p class="text-blue-500 text-darken-20">...</p>
```
