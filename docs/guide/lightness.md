---
title: Lightness
---

<!-- llm-context: bg-lightness / -bg-lightness utility — adjusts background colour lightness using CSS relative colour syntax across 17 colour spaces. bg-lightness-{n} to lighten, -bg-lightness-{n} to darken, with optional /{color-space} modifier. bg-lighten-{n} and bg-darken-{n} are user-friendly aliases. -->

# Lightness

Adjust the lightness of any background colour using CSS relative colour syntax. Use `bg-lightness-{amount}` to lighten and `-bg-lightness-{amount}` to darken. Works across 17 colour spaces with a simple slash modifier.

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/lightness';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'bg-lightness-<amount>', styles: '--tw-lightness-amount: calc(<amount> * 0.01); background-color: oklch(from var(--tw-bg-color) calc(l + var(--tw-lightness-amount)) c h / alpha)' },
  { class: '-bg-lightness-<amount>', styles: '--tw-lightness-amount: calc(<amount> * -0.01); background-color: oklch(from var(--tw-bg-color) calc(l + var(--tw-lightness-amount)) c h / alpha)' },
  { class: 'bg-lightness-<amount>/oklch', styles: 'background-color: oklch(from var(--tw-bg-color) calc(l + <amount>) c h / alpha)' },
  { class: 'bg-lightness-<amount>/lch', styles: 'background-color: lch(from var(--tw-bg-color) calc(l + <amount>) c h / alpha)' },
  { class: 'bg-lightness-<amount>/lab', styles: 'background-color: lab(from var(--tw-bg-color) calc(l + <amount>) a b / alpha)' },
  { class: 'bg-lightness-<amount>/oklab', styles: 'background-color: oklab(from var(--tw-bg-color) calc(l + <amount>) a b / alpha)' },
  { class: 'bg-lightness-<amount>/hsl', styles: 'background-color: hsl(from var(--tw-bg-color) h s calc(l + <amount>) / alpha)' },
  { class: 'bg-lightness-<amount>/hwb', styles: 'background-color: hwb(from var(--tw-bg-color) h calc(w + <amount>) calc(b - <amount>) / alpha)' },
  { class: 'bg-lightness-<amount>/rgb', styles: 'background-color: rgb(from var(--tw-bg-color) calc(r + <amount>) calc(g + <amount>) calc(b + <amount>) / alpha)' },
  { class: 'bg-lightness-<amount>/srgb', styles: 'background-color: color(from var(--tw-bg-color) srgb calc(r + <amount>) ...)' },
  { class: 'bg-lightness-<amount>/srgb-linear', styles: 'background-color: color(from var(--tw-bg-color) srgb-linear calc(r + <amount>) ...)' },
  { class: 'bg-lightness-<amount>/display-p3', styles: 'background-color: color(from var(--tw-bg-color) display-p3 calc(r + <amount>) ...)' },
  { class: 'bg-lightness-<amount>/a98-rgb', styles: 'background-color: color(from var(--tw-bg-color) a98-rgb calc(r + <amount>) ...)' },
  { class: 'bg-lightness-<amount>/prophoto-rgb', styles: 'background-color: color(from var(--tw-bg-color) prophoto-rgb calc(r + <amount>) ...)' },
  { class: 'bg-lightness-<amount>/rec2020', styles: 'background-color: color(from var(--tw-bg-color) rec2020 calc(r + <amount>) ...)' },
  { class: 'bg-lightness-<amount>/xyz', styles: 'background-color: color(from var(--tw-bg-color) xyz calc(x + <amount>) ...)' },
  { class: 'bg-lightness-<amount>/xyz-d50', styles: 'background-color: color(from var(--tw-bg-color) xyz-d50 calc(x + <amount>) ...)' },
  { class: 'bg-lightness-<amount>/xyz-d65', styles: 'background-color: color(from var(--tw-bg-color) xyz-d65 calc(x + <amount>) ...)' },
  { class: 'bg-lightness-<amount>/color-mix', styles: 'background-color: color-mix(in oklab, var(--tw-bg-color) 100%, white calc(<amount> * 1%))' },
]" />

## Basic Usage

### Lighten

Set a base background colour with `bg-{color}`, then lighten it with `bg-lightness-{amount}`:

<Example stretch>
  <div class="flex gap-1">
    <div class="flex-1 bg-blue-500 p-6 text-center text-white text-sm font-medium">base</div>
    <div class="flex-1 bg-blue-500 bg-lightness-20 p-6 text-center text-gray-800 text-sm">20</div>
    <div class="flex-1 bg-blue-500 bg-lightness-40 p-6 text-center text-gray-800 text-sm">40</div>
  </div>
</Example>

### Darken

Use `-bg-lightness-{amount}` to decrease lightness:

<Example stretch>
  <div class="flex gap-1">
    <div class="flex-1 bg-blue-500 p-6 text-center text-white text-sm font-medium">base</div>
    <div class="flex-1 bg-blue-500 -bg-lightness-20 p-6 text-center text-white text-sm">20</div>
    <div class="flex-1 bg-blue-500 -bg-lightness-40 p-6 text-center text-white text-sm">40</div>
  </div>
</Example>

## Scale

Use increasing values to create consistent lightening and darkening scales from a single base colour:

### Lighten scale

<Example stretch>
  <div>
    <div class="flex">
      <div class="flex-1 bg-blue-500 h-12"></div>
      <div class="flex-1 bg-blue-500 bg-lightness-10 h-12"></div>
      <div class="flex-1 bg-blue-500 bg-lightness-20 h-12"></div>
      <div class="flex-1 bg-blue-500 bg-lightness-30 h-12"></div>
      <div class="flex-1 bg-blue-500 bg-lightness-40 h-12"></div>
      <div class="flex-1 bg-blue-500 bg-lightness-50 h-12"></div>
      <div class="flex-1 bg-blue-500 bg-lightness-60 h-12"></div>
      <div class="flex-1 bg-blue-500 bg-lightness-70 h-12"></div>
      <div class="flex-1 bg-blue-500 bg-lightness-80 h-12"></div>
      <div class="flex-1 bg-blue-500 bg-lightness-90 h-12"></div>
    </div>
    <div class="flex text-[10px] text-gray-400 mt-0.5">
      <div class="flex-1 text-center">base</div>
      <div class="flex-1 text-center">10</div>
      <div class="flex-1 text-center">20</div>
      <div class="flex-1 text-center">30</div>
      <div class="flex-1 text-center">40</div>
      <div class="flex-1 text-center">50</div>
      <div class="flex-1 text-center">60</div>
      <div class="flex-1 text-center">70</div>
      <div class="flex-1 text-center">80</div>
      <div class="flex-1 text-center">90</div>
    </div>
  </div>
</Example>

### Darken scale

<Example stretch>
  <div>
    <div class="flex">
      <div class="flex-1 bg-blue-500 h-12"></div>
      <div class="flex-1 bg-blue-500 -bg-lightness-10 h-12"></div>
      <div class="flex-1 bg-blue-500 -bg-lightness-20 h-12"></div>
      <div class="flex-1 bg-blue-500 -bg-lightness-30 h-12"></div>
      <div class="flex-1 bg-blue-500 -bg-lightness-40 h-12"></div>
      <div class="flex-1 bg-blue-500 -bg-lightness-50 h-12"></div>
      <div class="flex-1 bg-blue-500 -bg-lightness-60 h-12"></div>
      <div class="flex-1 bg-blue-500 -bg-lightness-70 h-12"></div>
      <div class="flex-1 bg-blue-500 -bg-lightness-80 h-12"></div>
      <div class="flex-1 bg-blue-500 -bg-lightness-90 h-12"></div>
    </div>
    <div class="flex text-[10px] text-gray-400 mt-0.5">
      <div class="flex-1 text-center">base</div>
      <div class="flex-1 text-center">10</div>
      <div class="flex-1 text-center">20</div>
      <div class="flex-1 text-center">30</div>
      <div class="flex-1 text-center">40</div>
      <div class="flex-1 text-center">50</div>
      <div class="flex-1 text-center">60</div>
      <div class="flex-1 text-center">70</div>
      <div class="flex-1 text-center">80</div>
      <div class="flex-1 text-center">90</div>
    </div>
  </div>
</Example>

## Colour Spaces

Use the slash modifier to select a colour space. Different spaces produce visually distinct results. For background on each colour space, see the [Colour Spaces guide](/guide/colour-spaces).

### Lighten across colour spaces

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-10/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-30/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-50/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-70/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-90/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-100/oklch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-10/lch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/lch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-30/lch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/lch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-50/lch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/lch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-70/lch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/lch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-90/lch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-100/lch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-10/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-30/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-50/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-70/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-90/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-100/oklab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-10/lab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/lab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-30/lab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/lab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-50/lab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/lab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-70/lab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/lab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-90/lab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-100/lab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-10/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-30/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-50/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-70/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-90/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-100/hsl h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hwb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-10/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-30/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-50/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-70/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-90/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-100/hwb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-10/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-30/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-50/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-70/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-90/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-100/rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-10/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-30/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-50/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-70/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-90/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-100/srgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb-linear</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-10/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-30/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-50/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-70/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-90/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-100/srgb-linear h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/display-p3</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-10/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-30/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-50/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-70/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-90/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-100/display-p3 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/a98-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-10/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-30/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-50/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-70/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-90/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-100/a98-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/prophoto-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-10/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-30/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-50/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-70/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-90/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-100/prophoto-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rec2020</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-10/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-30/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-50/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-70/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-90/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-100/rec2020 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-10/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-30/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-50/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-70/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-90/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-100/xyz h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d50</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-10/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-30/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-50/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-70/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-90/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-100/xyz-d50 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d65</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-10/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-30/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-50/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-70/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-90/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-100/xyz-d65 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-10/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-20/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-30/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-40/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-50/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-60/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-70/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-80/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-90/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 bg-lightness-100/color-mix h-8"></div>
      </div>
    </div>
  </div>
</Example>

### Darken across colour spaces

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-10/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-20/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-30/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-40/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-50/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-60/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-70/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-80/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-90/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-100/oklch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-10/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-20/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-30/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-40/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-50/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-60/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-70/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-80/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-90/lch h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-100/lch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-10/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-20/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-30/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-40/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-50/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-60/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-70/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-80/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-90/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-100/oklab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-10/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-20/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-30/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-40/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-50/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-60/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-70/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-80/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-90/lab h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-100/lab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-10/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-20/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-30/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-40/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-50/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-60/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-70/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-80/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-90/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-100/hsl h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hwb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-10/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-20/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-30/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-40/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-50/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-60/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-70/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-80/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-90/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-100/hwb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-10/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-20/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-30/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-40/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-50/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-60/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-70/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-80/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-90/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-100/rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-10/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-20/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-30/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-40/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-50/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-60/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-70/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-80/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-90/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-100/srgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb-linear</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-10/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-20/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-30/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-40/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-50/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-60/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-70/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-80/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-90/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-100/srgb-linear h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/display-p3</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-10/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-20/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-30/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-40/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-50/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-60/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-70/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-80/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-90/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-100/display-p3 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/a98-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-10/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-20/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-30/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-40/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-50/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-60/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-70/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-80/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-90/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-100/a98-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/prophoto-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-10/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-20/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-30/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-40/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-50/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-60/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-70/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-80/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-90/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-100/prophoto-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rec2020</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-10/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-20/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-30/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-40/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-50/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-60/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-70/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-80/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-90/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-100/rec2020 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-10/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-20/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-30/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-40/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-50/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-60/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-70/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-80/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-90/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-100/xyz h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d50</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-10/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-20/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-30/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-40/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-50/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-60/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-70/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-80/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-90/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-100/xyz-d50 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d65</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-10/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-20/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-30/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-40/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-50/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-60/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-70/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-80/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-90/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-100/xyz-d65 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-10/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-20/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-30/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-40/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-50/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-60/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-70/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-80/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-90/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 -bg-lightness-100/color-mix h-8"></div>
      </div>
    </div>
  </div>
</Example>

::: info How scaling works
Values 0–100 represent a **percentage of the distance** to white or black — not a fixed channel offset. `bg-lightness-50` moves halfway to white; `bg-lightness-100` reaches white exactly, regardless of where the colour started. Each colour space family handles this differently:

**oklch, lch, oklab, lab** — Lightness interpolates toward 1 (white) or 0 (black). Chroma is held constant through most of the range, tapering above 80 where the gamut narrows and high chroma would cause browser clipping artefacts.

**HSL** — HSL's visible saturation peaks at L=50% (that's where the RGB gamut is widest). Darkening a light shade or lightening a dark shade would push lightness *toward* 50%, spiking saturation. To counter this, S is scaled by the gamut factor ratio `min(l, 100−l) / min(new_l, 100−new_l)`, clamped to ≤ 1 so it only ever dampens — never boosts — saturation.

**HWB** — Lightening adds whiteness and removes blackness; darkening does the reverse.

**RGB-family (rgb, srgb, display-p3, etc.)** — All three channels interpolate independently toward their white-point (or 0 for darkening). Chroma drops naturally as channels converge.

**colour-mix** — Blends the colour with white or black via `color-mix()` in oklab. Acts as the reference curve that other spaces are calibrated against.
:::

## Aliases

For convenience, `bg-lighten-*` and `bg-darken-*` are provided as user-friendly aliases that map to the same underlying utilities:

| Alias | Equivalent |
| --- | --- |
| `bg-lighten-{amount}` | `bg-lightness-{amount}` |
| `bg-lighten-{amount}/{space}` | `bg-lightness-{amount}/{space}` |
| `bg-darken-{amount}` | `-bg-lightness-{amount}` |
| `bg-darken-{amount}/{space}` | `-bg-lightness-{amount}/{space}` |

Both forms produce identical CSS output. Use whichever reads better in your markup:

```html
<!-- These are equivalent -->
<div class="bg-blue-500 bg-lightness-20">...</div>
<div class="bg-blue-500 bg-lighten-20">...</div>

<!-- These are equivalent -->
<div class="bg-blue-500 -bg-lightness-20">...</div>
<div class="bg-blue-500 bg-darken-20">...</div>
```
