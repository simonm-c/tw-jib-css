---
title: Darken
---

<!-- llm-context: bg-darken utility — darkens background colours using CSS relative colour syntax across 17 colour spaces. bg-darken-{n} with optional /{color-space} modifier. -->

# Darken

Darken any background colour using CSS relative colour syntax. Works across 17 colour spaces with a simple slash modifier.

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/ripple';
@import 'tw-jib-css/border-gradient';
@import 'tw-jib-css/lighten-darken';
```
Note: `lighten-darken` depends on `border-gradient` (for `--tw-bg-color`) which depends on `ripple`.
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'bg-darken-<amount>', styles: '--tw-darken-amount: calc(<amount> * 0.01); background-color: oklch(from var(--tw-bg-color) calc(l - var(--tw-darken-amount)) c h / alpha)' },
  { class: 'bg-darken-<amount>/oklch', styles: 'background-color: oklch(from var(--tw-bg-color) calc(l - <amount>) c h / alpha)' },
  { class: 'bg-darken-<amount>/lch', styles: 'background-color: lch(from var(--tw-bg-color) calc(l - <amount>) c h / alpha)' },
  { class: 'bg-darken-<amount>/lab', styles: 'background-color: lab(from var(--tw-bg-color) calc(l - <amount>) a b / alpha)' },
  { class: 'bg-darken-<amount>/oklab', styles: 'background-color: oklab(from var(--tw-bg-color) calc(l - <amount>) a b / alpha)' },
  { class: 'bg-darken-<amount>/hsl', styles: 'background-color: hsl(from var(--tw-bg-color) h s calc(l - <amount>) / alpha)' },
  { class: 'bg-darken-<amount>/hwb', styles: 'background-color: hwb(from var(--tw-bg-color) h calc(w - <amount>) calc(b + <amount>) / alpha)' },
  { class: 'bg-darken-<amount>/rgb', styles: 'background-color: rgb(from var(--tw-bg-color) calc(r - <amount>) calc(g - <amount>) calc(b - <amount>) / alpha)' },
  { class: 'bg-darken-<amount>/srgb', styles: 'background-color: color(from var(--tw-bg-color) srgb calc(r - <amount>) ...)' },
  { class: 'bg-darken-<amount>/srgb-linear', styles: 'background-color: color(from var(--tw-bg-color) srgb-linear calc(r - <amount>) ...)' },
  { class: 'bg-darken-<amount>/display-p3', styles: 'background-color: color(from var(--tw-bg-color) display-p3 calc(r - <amount>) ...)' },
  { class: 'bg-darken-<amount>/a98-rgb', styles: 'background-color: color(from var(--tw-bg-color) a98-rgb calc(r - <amount>) ...)' },
  { class: 'bg-darken-<amount>/prophoto-rgb', styles: 'background-color: color(from var(--tw-bg-color) prophoto-rgb calc(r - <amount>) ...)' },
  { class: 'bg-darken-<amount>/rec2020', styles: 'background-color: color(from var(--tw-bg-color) rec2020 calc(r - <amount>) ...)' },
  { class: 'bg-darken-<amount>/xyz', styles: 'background-color: color(from var(--tw-bg-color) xyz calc(x - <amount>) ...)' },
  { class: 'bg-darken-<amount>/xyz-d50', styles: 'background-color: color(from var(--tw-bg-color) xyz-d50 calc(x - <amount>) ...)' },
  { class: 'bg-darken-<amount>/xyz-d65', styles: 'background-color: color(from var(--tw-bg-color) xyz-d65 calc(x - <amount>) ...)' },
  { class: 'bg-darken-<amount>/color-mix', styles: 'background-color: color-mix(in oklab, var(--tw-bg-color) 100%, black calc(<amount> * 1%))' },
]" />

## Basic Usage

Set a base background colour with `bg-{color}`, then darken it with `bg-darken-{amount}`:

<Example stretch>
  <div class="flex gap-1">
    <div class="flex-1 bg-blue-500 p-6 text-center text-white text-sm font-medium">base</div>
    <div class="flex-1 bg-blue-500 bg-darken-20 p-6 text-center text-white text-sm">20</div>
    <div class="flex-1 bg-blue-500 bg-darken-40 p-6 text-center text-white text-sm">40</div>
  </div>
</Example>

## Scale

Use increasing values to create a consistent darkening scale from a single base colour:

<Example stretch>
  <div>
    <div class="flex">
      <div class="flex-1 bg-blue-500 h-12"></div>
      <div class="flex-1 bg-blue-500 bg-darken-10 h-12"></div>
      <div class="flex-1 bg-blue-500 bg-darken-20 h-12"></div>
      <div class="flex-1 bg-blue-500 bg-darken-30 h-12"></div>
      <div class="flex-1 bg-blue-500 bg-darken-40 h-12"></div>
      <div class="flex-1 bg-blue-500 bg-darken-50 h-12"></div>
      <div class="flex-1 bg-blue-500 bg-darken-60 h-12"></div>
      <div class="flex-1 bg-blue-500 bg-darken-70 h-12"></div>
      <div class="flex-1 bg-blue-500 bg-darken-80 h-12"></div>
      <div class="flex-1 bg-blue-500 bg-darken-90 h-12"></div>
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

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-10/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-30/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-50/oklch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-70/oklch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-10/lch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-30/lch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-50/lch h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-70/lch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-10/lab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-30/lab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-50/lab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-70/lab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-10/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-30/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-50/oklab h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-70/oklab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-10/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-30/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-50/hsl h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-70/hsl h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hwb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-10/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-30/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-50/hwb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-70/hwb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-10/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-30/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-50/rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-70/rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-10/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-30/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-50/srgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-70/srgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb-linear</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-10/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-30/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-50/srgb-linear h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-70/srgb-linear h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/display-p3</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-10/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-30/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-50/display-p3 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-70/display-p3 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/a98-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-10/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-30/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-50/a98-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-70/a98-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/prophoto-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-10/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-30/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-50/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-70/prophoto-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rec2020</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-10/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-30/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-50/rec2020 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-70/rec2020 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-10/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-30/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-50/xyz h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-70/xyz h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d50</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-10/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-30/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-50/xyz-d50 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-70/xyz-d50 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d65</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-10/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-30/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-50/xyz-d65 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-70/xyz-d65 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-blue-500 h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-10/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-30/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-50/color-mix h-8"></div>
        <div class="flex-1 bg-blue-500 bg-darken-70/color-mix h-8"></div>
      </div>
    </div>
  </div>
</Example>

### Edge cases: light and dark sources

#### Light source (`bg-yellow-100`)

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-yellow-100 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-10/oklch h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-20/oklch h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-30/oklch h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-40/oklch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-yellow-100 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-10/lch h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-20/lch h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-30/lch h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-40/lch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-yellow-100 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-10/lab h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-20/lab h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-30/lab h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-40/lab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-yellow-100 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-10/oklab h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-20/oklab h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-30/oklab h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-40/oklab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-yellow-100 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-10/hsl h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-20/hsl h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-30/hsl h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-40/hsl h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hwb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-yellow-100 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-10/hwb h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-20/hwb h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-30/hwb h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-40/hwb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-yellow-100 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-10/rgb h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-20/rgb h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-30/rgb h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-40/rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-yellow-100 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-10/srgb h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-20/srgb h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-30/srgb h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-40/srgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb-linear</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-yellow-100 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-10/srgb-linear h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-20/srgb-linear h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-30/srgb-linear h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-40/srgb-linear h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/display-p3</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-yellow-100 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-10/display-p3 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-20/display-p3 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-30/display-p3 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-40/display-p3 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/a98-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-yellow-100 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-10/a98-rgb h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-20/a98-rgb h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-30/a98-rgb h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-40/a98-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/prophoto-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-yellow-100 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-10/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-20/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-30/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-40/prophoto-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rec2020</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-yellow-100 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-10/rec2020 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-20/rec2020 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-30/rec2020 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-40/rec2020 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-yellow-100 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-10/xyz h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-20/xyz h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-30/xyz h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-40/xyz h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d50</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-yellow-100 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-10/xyz-d50 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-20/xyz-d50 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-30/xyz-d50 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-40/xyz-d50 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d65</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-yellow-100 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-10/xyz-d65 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-20/xyz-d65 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-30/xyz-d65 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-40/xyz-d65 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-yellow-100 h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-10/color-mix h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-20/color-mix h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-30/color-mix h-8"></div>
        <div class="flex-1 bg-yellow-100 bg-darken-40/color-mix h-8"></div>
      </div>
    </div>
  </div>
</Example>

#### Dark source (`bg-indigo-800`)

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-indigo-800 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-10/oklch h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-20/oklch h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-30/oklch h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-40/oklch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-indigo-800 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-10/lch h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-20/lch h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-30/lch h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-40/lch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-indigo-800 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-10/lab h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-20/lab h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-30/lab h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-40/lab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-indigo-800 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-10/oklab h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-20/oklab h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-30/oklab h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-40/oklab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-indigo-800 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-10/hsl h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-20/hsl h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-30/hsl h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-40/hsl h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/hwb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-indigo-800 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-10/hwb h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-20/hwb h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-30/hwb h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-40/hwb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-indigo-800 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-10/rgb h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-20/rgb h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-30/rgb h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-40/rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-indigo-800 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-10/srgb h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-20/srgb h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-30/srgb h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-40/srgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/srgb-linear</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-indigo-800 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-10/srgb-linear h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-20/srgb-linear h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-30/srgb-linear h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-40/srgb-linear h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/display-p3</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-indigo-800 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-10/display-p3 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-20/display-p3 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-30/display-p3 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-40/display-p3 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/a98-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-indigo-800 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-10/a98-rgb h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-20/a98-rgb h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-30/a98-rgb h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-40/a98-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/prophoto-rgb</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-indigo-800 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-10/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-20/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-30/prophoto-rgb h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-40/prophoto-rgb h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/rec2020</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-indigo-800 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-10/rec2020 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-20/rec2020 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-30/rec2020 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-40/rec2020 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-indigo-800 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-10/xyz h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-20/xyz h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-30/xyz h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-40/xyz h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d50</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-indigo-800 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-10/xyz-d50 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-20/xyz-d50 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-30/xyz-d50 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-40/xyz-d50 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/xyz-d65</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-indigo-800 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-10/xyz-d65 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-20/xyz-d65 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-30/xyz-d65 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-40/xyz-d65 h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-indigo-800 h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-10/color-mix h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-20/color-mix h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-30/color-mix h-8"></div>
        <div class="flex-1 bg-indigo-800 bg-darken-40/color-mix h-8"></div>
      </div>
    </div>
  </div>
</Example>

See the [Colour Spaces guide](/guide/colour-spaces) for an overview of how these spaces differ and when to choose each one.

## Negative Values

Use a negative arbitrary value to invert the effect — `bg-darken-[-20]` lightens instead of darkens:

<Example stretch>
  <div class="flex gap-1">
    <div class="flex-1 bg-blue-500 p-4 text-center text-white text-sm font-medium">base</div>
    <div class="flex-1 bg-blue-500 bg-darken-[-10] p-4 text-center text-gray-800 text-sm">[-10]</div>
    <div class="flex-1 bg-blue-500 bg-darken-[-20] p-4 text-center text-gray-800 text-sm">[-20]</div>
    <div class="flex-1 bg-blue-500 bg-darken-[-30] p-4 text-center text-gray-800 text-sm">[-30]</div>
  </div>
</Example>

This works because the utility uses `calc(l - amount)` under the hood — a negative amount adds lightness instead of subtracting it. Colour space modifiers work the same way: `bg-darken-[-20]/hsl`.

## Using a custom value

Use the `bg-darken-[<value>]` syntax to set the darken amount based on a completely custom value:

<Example>
  <div class="flex gap-1">
    <div class="bg-blue-500 bg-darken-[15] rounded-lg p-6 text-white text-center text-sm">bg-darken-[15]</div>
    <div class="bg-blue-500 bg-darken-[0.15]/oklch rounded-lg p-6 text-white text-center text-sm">bg-darken-[0.15]/oklch</div>
  </div>
</Example>

## Using a custom variable

For CSS variables, use the `number:` type prefix to tell Tailwind the custom property is a number:

<Example>
  <div class="bg-blue-500 bg-darken-(number:--brand-darken)/oklch rounded-lg p-6 text-white text-center text-sm" style="--brand-darken: 25">
    bg-darken-(number:--brand-darken)/oklch
  </div>
</Example>

The `number:` prefix resolves ambiguity so Tailwind knows to treat the custom property as a numeric value. This is shorthand for `bg-darken-[var(--brand-darken)]` that adds the `var()` function for you automatically.

## Applying conditionally

### Hover and focus states

Prefix a `bg-darken` utility with a state variant like `hover:*` to only apply it in that state:

<Example>
  <button class="bg-blue-500 hover:bg-darken-15 text-white px-6 py-3 rounded-lg font-medium cursor-pointer transition-colors">
    Hover to darken
  </button>
</Example>

## How It Works

Under the hood, `bg-darken-*` uses [CSS relative colour syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Relative_colors) to transform the `--tw-bg-color` custom property set by `bg-{color}`.

For example, `bg-darken-20/oklch` compiles to:

```css
background-color: oklch(from var(--tw-bg-color) calc(l - 0.2) c h / alpha);
```

The `color-mix` space uses a different technique — mixing the base colour with black:

```css
background-color: color-mix(in oklab, var(--tw-bg-color) 100%, black 20%);
```

## Experimental: CSS Functions

::: warning Browser Support
CSS `@function` is not yet supported in any stable browser. The utilities below activate automatically via `@supports` when browser support arrives — no action required from you. The same utility classes work with both the current and future implementation.
:::

The library includes a set of CSS `@function` declarations that provide a more composable implementation path. Instead of generating a separate rule per colour space, a single `--darken()` dispatch function routes to space-specific functions like `--oklch-darken()`, `--lch-darken()`, etc.

When browsers support `@function`, the generated CSS is simpler:

```css
/* Current approach (relative colour syntax + @theme variables) */
background-color: oklch(from var(--tw-bg-color) calc(l - 0.2) c h / alpha);

/* @function approach (when supported) */
background-color: --darken(var(--tw-bg-color), 20, oklch);
```

The `--darken()` function accepts three parameters: the base colour, the amount (0–100), and an optional colour space identifier (defaults to `oklch`). A custom variant `supports-darken` is used to gate the `@function` path behind feature detection.
