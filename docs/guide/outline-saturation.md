---
title: Outline Saturation
---

<!-- llm-context: outline-saturation / -outline-saturation utility — adjusts outline colour saturation/chroma using CSS relative colour syntax across 17 colour spaces. outline-saturation-{n} to saturate, -outline-saturation-{n} to desaturate, with optional /{color-space} modifier. outline-saturate-{n} and outline-desaturate-{n} are user-friendly aliases. -->

# Outline Saturation

Adjust the saturation (chroma) of any outline colour using CSS relative colour syntax. Use `outline-saturation-{amount}` to saturate and `-outline-saturation-{amount}` to desaturate. Works across 17 colour spaces with a simple slash modifier.

Saturation utilities are also available for [background](/guide/saturation), [text](/guide/text-saturation), [fill](/guide/fill-saturation), [stroke](/guide/stroke-saturation), [accent](/guide/accent-saturation), and [border](/guide/border-saturation).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/saturation';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'outline-saturation-<amount>', styles: 'outline-color: oklch(from var(--tw-jib--outline-color) l calc(c ...) h / alpha)' },
  { class: '-outline-saturation-<amount>', styles: 'outline-color: oklch(from var(--tw-jib--outline-color) l calc(c ...) h / alpha)' },
  { class: 'outline-saturation-<amount>/oklch', styles: 'outline-color: oklch(from var(--tw-jib--outline-color) l calc(c ...) h / alpha)' },
  { class: 'outline-saturation-<amount>/hsl', styles: 'outline-color: hsl(from var(--tw-jib--outline-color) h calc(s ...) l / alpha)' },
  { class: 'outline-saturation-<amount>/color-mix', styles: 'outline-color: color-mix(in oklch, ...)' },
]" />

## Basic Usage

### Saturate

Set a base outline colour with `outline-{color}`, then increase saturation with `outline-saturation-{amount}`. Start with a desaturated colour to see the full effect:

<Example stretch>
  <div class="flex gap-4">
    <div class="outline outline-2 outline-slate-400 p-4 rounded text-sm text-center">base</div>
    <div class="outline outline-2 outline-slate-400 outline-saturation-20 p-4 rounded text-sm text-center">+20</div>
    <div class="outline outline-2 outline-slate-400 outline-saturation-40 p-4 rounded text-sm text-center">+40</div>
  </div>
</Example>

### Desaturate

Use `-outline-saturation-{amount}` to decrease saturation:

<Example stretch>
  <div class="flex gap-4">
    <div class="outline outline-2 outline-blue-500 p-4 rounded text-sm text-center">base</div>
    <div class="outline outline-2 outline-blue-500 -outline-saturation-20 p-4 rounded text-sm text-center">-20</div>
    <div class="outline outline-2 outline-blue-500 -outline-saturation-40 p-4 rounded text-sm text-center">-40</div>
  </div>
</Example>

## Scale

### Saturate scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <div class="outline outline-2 outline-slate-400 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">base</div>
    </div>
    <div class="text-center">
      <div class="outline outline-2 outline-slate-400 outline-saturation-10 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">10</div>
    </div>
    <div class="text-center">
      <div class="outline outline-2 outline-slate-400 outline-saturation-20 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">20</div>
    </div>
    <div class="text-center">
      <div class="outline outline-2 outline-slate-400 outline-saturation-30 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <div class="outline outline-2 outline-slate-400 outline-saturation-40 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">40</div>
    </div>
    <div class="text-center">
      <div class="outline outline-2 outline-slate-400 outline-saturation-50 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">50</div>
    </div>
    <div class="text-center">
      <div class="outline outline-2 outline-slate-400 outline-saturation-60 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <div class="outline outline-2 outline-slate-400 outline-saturation-70 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">70</div>
    </div>
    <div class="text-center">
      <div class="outline outline-2 outline-slate-400 outline-saturation-80 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">80</div>
    </div>
    <div class="text-center">
      <div class="outline outline-2 outline-slate-400 outline-saturation-90 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
  </div>
</Example>

### Desaturate scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <div class="outline outline-2 outline-blue-500 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">base</div>
    </div>
    <div class="text-center">
      <div class="outline outline-2 outline-blue-500 -outline-saturation-10 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">10</div>
    </div>
    <div class="text-center">
      <div class="outline outline-2 outline-blue-500 -outline-saturation-20 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">20</div>
    </div>
    <div class="text-center">
      <div class="outline outline-2 outline-blue-500 -outline-saturation-30 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <div class="outline outline-2 outline-blue-500 -outline-saturation-40 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">40</div>
    </div>
    <div class="text-center">
      <div class="outline outline-2 outline-blue-500 -outline-saturation-50 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">50</div>
    </div>
    <div class="text-center">
      <div class="outline outline-2 outline-blue-500 -outline-saturation-60 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <div class="outline outline-2 outline-blue-500 -outline-saturation-70 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">70</div>
    </div>
    <div class="text-center">
      <div class="outline outline-2 outline-blue-500 -outline-saturation-80 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">80</div>
    </div>
    <div class="text-center">
      <div class="outline outline-2 outline-blue-500 -outline-saturation-90 w-10 h-10 rounded"></div>
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
        <div class="outline outline-2 outline-slate-400 w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-slate-400 outline-saturation-20/oklch w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-slate-400 outline-saturation-40/oklch w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-slate-400 outline-saturation-60/oklch w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-slate-400 outline-saturation-80/oklch w-10 h-10 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1">
        <div class="outline outline-2 outline-slate-400 w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-slate-400 outline-saturation-20/hsl w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-slate-400 outline-saturation-40/hsl w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-slate-400 outline-saturation-60/hsl w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-slate-400 outline-saturation-80/hsl w-10 h-10 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1 gap-1">
        <div class="outline outline-2 outline-slate-400 w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-slate-400 outline-saturation-20/oklab w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-slate-400 outline-saturation-40/oklab w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-slate-400 outline-saturation-60/oklab w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-slate-400 outline-saturation-80/oklab w-10 h-10 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1 gap-1">
        <div class="outline outline-2 outline-slate-400 w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-slate-400 outline-saturation-20/color-mix w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-slate-400 outline-saturation-40/color-mix w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-slate-400 outline-saturation-60/color-mix w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-slate-400 outline-saturation-80/color-mix w-10 h-10 rounded"></div>
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
        <div class="outline outline-2 outline-blue-500 w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-blue-500 -outline-saturation-20/oklch w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-blue-500 -outline-saturation-40/oklch w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-blue-500 -outline-saturation-60/oklch w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-blue-500 -outline-saturation-80/oklch w-10 h-10 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1">
        <div class="outline outline-2 outline-blue-500 w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-blue-500 -outline-saturation-20/hsl w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-blue-500 -outline-saturation-40/hsl w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-blue-500 -outline-saturation-60/hsl w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-blue-500 -outline-saturation-80/hsl w-10 h-10 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1 gap-1">
        <div class="outline outline-2 outline-blue-500 w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-blue-500 -outline-saturation-20/oklab w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-blue-500 -outline-saturation-40/oklab w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-blue-500 -outline-saturation-60/oklab w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-blue-500 -outline-saturation-80/oklab w-10 h-10 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1 gap-1">
        <div class="outline outline-2 outline-blue-500 w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-blue-500 -outline-saturation-20/color-mix w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-blue-500 -outline-saturation-40/color-mix w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-blue-500 -outline-saturation-60/color-mix w-10 h-10 rounded"></div>
        <div class="outline outline-2 outline-blue-500 -outline-saturation-80/color-mix w-10 h-10 rounded"></div>
      </div>
    </div>
  </div>
</Example>

## Aliases

For convenience, `outline-saturate-*` and `outline-desaturate-*` are provided as user-friendly aliases that map to the same underlying utilities:

| Alias | Equivalent |
| --- | --- |
| `outline-saturate-{amount}` | `outline-saturation-{amount}` |
| `outline-saturate-{amount}/{space}` | `outline-saturation-{amount}/{space}` |
| `outline-desaturate-{amount}` | `-outline-saturation-{amount}` |
| `outline-desaturate-{amount}/{space}` | `-outline-saturation-{amount}/{space}` |

Both forms produce identical CSS output. Use whichever reads better in your markup:

```html
<!-- These are equivalent -->
<div class="outline-slate-400 outline-saturation-20">...</div>
<div class="outline-slate-400 outline-saturate-20">...</div>

<!-- These are equivalent -->
<div class="outline-blue-500 -outline-saturation-20">...</div>
<div class="outline-blue-500 outline-desaturate-20">...</div>
```
