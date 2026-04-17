---
title: Border Saturation
---

<!-- llm-context: border-saturation / -border-saturation utility — adjusts border colour saturation/chroma using CSS relative colour syntax across 17 colour spaces. border-saturation-{n} to saturate, -border-saturation-{n} to desaturate, with optional /{color-space} modifier. border-saturate-{n} and border-desaturate-{n} are user-friendly aliases. -->

# Border Saturation

Adjust the saturation (chroma) of any border colour using CSS relative colour syntax. Use `border-saturation-{amount}` to saturate and `-border-saturation-{amount}` to desaturate. Works across 17 colour spaces with a simple slash modifier.

Saturation utilities are also available for [background](/guide/saturation), [text](/guide/text-saturation), [fill](/guide/fill-saturation), [stroke](/guide/stroke-saturation), [outline](/guide/outline-saturation), and [accent](/guide/accent-saturation).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/saturation';
```
:::

## Quick Reference

Formulas use `amt` for `var(--tw-jib--border-saturation--amount)` — set to `<amount> × 0.01` (saturate) or `<amount> × −0.01` (desaturate).

<QuickReference :rows="[
  { class: 'border-saturation-<amount>', styles: 'border-color: oklch(from var(--tw-jib--border-color) l calc(c * (1 - max(amt, 0 - amt)) + max(0, amt) * 0.4) h / alpha)' },
  { class: '-border-saturation-<amount>', styles: 'border-color: oklch(from var(--tw-jib--border-color) l calc(c * (1 - max(amt, 0 - amt)) + max(0, amt) * 0.4) h / alpha)' },
  { class: 'border-saturation-<amount>/oklch', styles: 'border-color: oklch(from var(--tw-jib--border-color) l calc(c * (1 - max(amt, 0 - amt)) + max(0, amt) * 0.4) h / alpha)' },
  { class: 'border-saturation-<amount>/hsl', styles: 'border-color: hsl(from var(--tw-jib--border-color) h calc(s * (1 - max(amt, 0 - amt)) + max(0, amt) * 100) l / alpha)' },
  { class: 'border-saturation-<amount>/color-mix', styles: 'border-color: color-mix(in oklch, var(--tw-jib--border-color), gray calc(max(0, 0 - amt) * 100%))' },
]" />

## Basic Usage

### Saturate

Set a base border colour with `border-{color}`, then increase saturation with `border-saturation-{amount}`. Start with a desaturated colour to see the full effect:

<Example stretch>
  <div class="flex gap-4">
    <div class="border-2 border-slate-400 p-4 rounded text-sm text-center">base</div>
    <div class="border-2 border-slate-400 border-saturation-20 p-4 rounded text-sm text-center">+20</div>
    <div class="border-2 border-slate-400 border-saturation-40 p-4 rounded text-sm text-center">+40</div>
  </div>
</Example>

### Desaturate

Use `-border-saturation-{amount}` to decrease saturation:

<Example stretch>
  <div class="flex gap-4">
    <div class="border-2 border-blue-500 p-4 rounded text-sm text-center">base</div>
    <div class="border-2 border-blue-500 -border-saturation-20 p-4 rounded text-sm text-center">-20</div>
    <div class="border-2 border-blue-500 -border-saturation-40 p-4 rounded text-sm text-center">-40</div>
  </div>
</Example>

## Scale

### Saturate scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <div class="border-2 border-slate-400 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">base</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-slate-400 border-saturation-10 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">10</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-slate-400 border-saturation-20 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">20</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-slate-400 border-saturation-30 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-slate-400 border-saturation-40 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">40</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-slate-400 border-saturation-50 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">50</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-slate-400 border-saturation-60 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-slate-400 border-saturation-70 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">70</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-slate-400 border-saturation-80 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">80</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-slate-400 border-saturation-90 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
  </div>
</Example>

### Desaturate scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <div class="border-2 border-blue-500 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">base</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 -border-saturation-10 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">10</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 -border-saturation-20 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">20</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 -border-saturation-30 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 -border-saturation-40 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">40</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 -border-saturation-50 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">50</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 -border-saturation-60 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 -border-saturation-70 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">70</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 -border-saturation-80 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">80</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 -border-saturation-90 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
  </div>
</Example>

## Colour Spaces

Use the slash modifier to select a colour space. For background on each colour space, see the [Colour Spaces guide](/guide/colour-spaces). For details on how scaling works per space, see [Background Saturation](/guide/saturation#how-scaling-works).

### Saturate across selected spaces

<Example stretch>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1 gap-1">
        <div class="border-2 border-slate-400 w-10 h-10 rounded"></div>
        <div class="border-2 border-slate-400 border-saturation-20/oklch w-10 h-10 rounded"></div>
        <div class="border-2 border-slate-400 border-saturation-40/oklch w-10 h-10 rounded"></div>
        <div class="border-2 border-slate-400 border-saturation-60/oklch w-10 h-10 rounded"></div>
        <div class="border-2 border-slate-400 border-saturation-80/oklch w-10 h-10 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1">
        <div class="border-2 border-slate-400 w-10 h-10 rounded"></div>
        <div class="border-2 border-slate-400 border-saturation-20/hsl w-10 h-10 rounded"></div>
        <div class="border-2 border-slate-400 border-saturation-40/hsl w-10 h-10 rounded"></div>
        <div class="border-2 border-slate-400 border-saturation-60/hsl w-10 h-10 rounded"></div>
        <div class="border-2 border-slate-400 border-saturation-80/hsl w-10 h-10 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1 gap-1">
        <div class="border-2 border-slate-400 w-10 h-10 rounded"></div>
        <div class="border-2 border-slate-400 border-saturation-20/oklab w-10 h-10 rounded"></div>
        <div class="border-2 border-slate-400 border-saturation-40/oklab w-10 h-10 rounded"></div>
        <div class="border-2 border-slate-400 border-saturation-60/oklab w-10 h-10 rounded"></div>
        <div class="border-2 border-slate-400 border-saturation-80/oklab w-10 h-10 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1 gap-1">
        <div class="border-2 border-slate-400 w-10 h-10 rounded"></div>
        <div class="border-2 border-slate-400 border-saturation-20/color-mix w-10 h-10 rounded"></div>
        <div class="border-2 border-slate-400 border-saturation-40/color-mix w-10 h-10 rounded"></div>
        <div class="border-2 border-slate-400 border-saturation-60/color-mix w-10 h-10 rounded"></div>
        <div class="border-2 border-slate-400 border-saturation-80/color-mix w-10 h-10 rounded"></div>
      </div>
    </div>
  </div>
</Example>

### Desaturate across selected spaces

<Example stretch>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1 gap-1">
        <div class="border-2 border-blue-500 w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-saturation-20/oklch w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-saturation-40/oklch w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-saturation-60/oklch w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-saturation-80/oklch w-10 h-10 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1">
        <div class="border-2 border-blue-500 w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-saturation-20/hsl w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-saturation-40/hsl w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-saturation-60/hsl w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-saturation-80/hsl w-10 h-10 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1 gap-1">
        <div class="border-2 border-blue-500 w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-saturation-20/oklab w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-saturation-40/oklab w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-saturation-60/oklab w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-saturation-80/oklab w-10 h-10 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1 gap-1">
        <div class="border-2 border-blue-500 w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-saturation-20/color-mix w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-saturation-40/color-mix w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-saturation-60/color-mix w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-saturation-80/color-mix w-10 h-10 rounded"></div>
      </div>
    </div>
  </div>
</Example>

## Aliases

For convenience, `border-saturate-*` and `border-desaturate-*` are provided as user-friendly aliases that map to the same underlying utilities:

| Alias | Equivalent |
| --- | --- |
| `border-saturate-{amount}` | `border-saturation-{amount}` |
| `border-saturate-{amount}/{space}` | `border-saturation-{amount}/{space}` |
| `border-desaturate-{amount}` | `-border-saturation-{amount}` |
| `border-desaturate-{amount}/{space}` | `-border-saturation-{amount}/{space}` |

Both forms produce identical CSS output. Use whichever reads better in your markup:

```html
<!-- These are equivalent -->
<div class="border-slate-400 border-saturation-20">...</div>
<div class="border-slate-400 border-saturate-20">...</div>

<!-- These are equivalent -->
<div class="border-blue-500 -border-saturation-20">...</div>
<div class="border-blue-500 border-desaturate-20">...</div>
```
