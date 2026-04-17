---
title: Fill Saturation
---

<!-- llm-context: fill-saturation / -fill-saturation utility — adjusts SVG fill colour saturation/chroma using CSS relative colour syntax across 17 colour spaces. fill-saturation-{n} to saturate, -fill-saturation-{n} to desaturate, with optional /{color-space} modifier. fill-saturate-{n} and fill-desaturate-{n} are user-friendly aliases. -->

# Fill Saturation

Adjust the saturation (chroma) of any SVG fill colour using CSS relative colour syntax. Use `fill-saturation-{amount}` to saturate and `-fill-saturation-{amount}` to desaturate. Works across 17 colour spaces with a simple slash modifier.

Saturation utilities are also available for [background](/guide/saturation), [text](/guide/text-saturation), [stroke](/guide/stroke-saturation), [outline](/guide/outline-saturation), [accent](/guide/accent-saturation), and [border](/guide/border-saturation).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/saturation';
```
:::

## Quick Reference

Formulas use `amt` for `var(--tw-jib--fill-saturation--amount)` — set to `<amount> × 0.01` (saturate) or `<amount> × −0.01` (desaturate).

<QuickReference :rows="[
  { class: 'fill-saturation-<amount>', styles: 'fill: oklch(from var(--tw-jib--fill-color) l calc(c * (1 - max(amt, 0 - amt)) + max(0, amt) * 0.4) h / alpha)' },
  { class: '-fill-saturation-<amount>', styles: 'fill: oklch(from var(--tw-jib--fill-color) l calc(c * (1 - max(amt, 0 - amt)) + max(0, amt) * 0.4) h / alpha)' },
  { class: 'fill-saturation-<amount>/oklch', styles: 'fill: oklch(from var(--tw-jib--fill-color) l calc(c * (1 - max(amt, 0 - amt)) + max(0, amt) * 0.4) h / alpha)' },
  { class: 'fill-saturation-<amount>/hsl', styles: 'fill: hsl(from var(--tw-jib--fill-color) h calc(s * (1 - max(amt, 0 - amt)) + max(0, amt) * 100) l / alpha)' },
  { class: 'fill-saturation-<amount>/color-mix', styles: 'fill: color-mix(in oklch, var(--tw-jib--fill-color), gray calc(max(0, 0 - amt) * 100%))' },
]" />

## Basic Usage

### Saturate

Set a base fill colour with `fill-{color}`, then increase saturation with `fill-saturation-{amount}`. Start with a desaturated colour to see the full effect:

<Example stretch>
  <div class="flex gap-4 items-center">
    <svg class="w-10 h-10 fill-slate-400" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-10 h-10 fill-slate-400 fill-saturation-20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-10 h-10 fill-slate-400 fill-saturation-40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  </div>
</Example>

### Desaturate

Use `-fill-saturation-{amount}` to decrease saturation:

<Example stretch>
  <div class="flex gap-4 items-center">
    <svg class="w-10 h-10 fill-blue-500" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-10 h-10 fill-blue-500 -fill-saturation-20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-10 h-10 fill-blue-500 -fill-saturation-40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  </div>
</Example>

## Scale

### Saturate scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <svg class="w-8 h-8 fill-slate-400" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">base</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-slate-400 fill-saturation-10" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">10</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-slate-400 fill-saturation-20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">20</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-slate-400 fill-saturation-30" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-slate-400 fill-saturation-40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">40</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-slate-400 fill-saturation-50" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">50</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-slate-400 fill-saturation-60" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-slate-400 fill-saturation-70" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">70</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-slate-400 fill-saturation-80" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">80</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-slate-400 fill-saturation-90" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
  </div>
</Example>

### Desaturate scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <svg class="w-8 h-8 fill-blue-500" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">base</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-blue-500 -fill-saturation-10" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">10</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-blue-500 -fill-saturation-20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">20</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-blue-500 -fill-saturation-30" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-blue-500 -fill-saturation-40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">40</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-blue-500 -fill-saturation-50" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">50</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-blue-500 -fill-saturation-60" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-blue-500 -fill-saturation-70" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">70</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-blue-500 -fill-saturation-80" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">80</div>
    </div>
    <div class="text-center">
      <svg class="w-8 h-8 fill-blue-500 -fill-saturation-90" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
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
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 fill-slate-400" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-slate-400 fill-saturation-20/oklch" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-slate-400 fill-saturation-40/oklch" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-slate-400 fill-saturation-60/oklch" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-slate-400 fill-saturation-80/oklch" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 fill-slate-400" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-slate-400 fill-saturation-20/hsl" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-slate-400 fill-saturation-40/hsl" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-slate-400 fill-saturation-60/hsl" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-slate-400 fill-saturation-80/hsl" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 fill-slate-400" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-slate-400 fill-saturation-20/oklab" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-slate-400 fill-saturation-40/oklab" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-slate-400 fill-saturation-60/oklab" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-slate-400 fill-saturation-80/oklab" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 fill-slate-400" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-slate-400 fill-saturation-20/color-mix" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-slate-400 fill-saturation-40/color-mix" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-slate-400 fill-saturation-60/color-mix" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-slate-400 fill-saturation-80/color-mix" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
  </div>
</Example>

### Desaturate across selected spaces

<Example stretch>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 fill-blue-500" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-blue-500 -fill-saturation-20/oklch" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-blue-500 -fill-saturation-40/oklch" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-blue-500 -fill-saturation-60/oklch" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-blue-500 -fill-saturation-80/oklch" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 fill-blue-500" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-blue-500 -fill-saturation-20/hsl" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-blue-500 -fill-saturation-40/hsl" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-blue-500 -fill-saturation-60/hsl" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-blue-500 -fill-saturation-80/hsl" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 fill-blue-500" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-blue-500 -fill-saturation-20/oklab" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-blue-500 -fill-saturation-40/oklab" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-blue-500 -fill-saturation-60/oklab" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-blue-500 -fill-saturation-80/oklab" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 fill-blue-500" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-blue-500 -fill-saturation-20/color-mix" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-blue-500 -fill-saturation-40/color-mix" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-blue-500 -fill-saturation-60/color-mix" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 fill-blue-500 -fill-saturation-80/color-mix" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
  </div>
</Example>

## Aliases

For convenience, `fill-saturate-*` and `fill-desaturate-*` are provided as user-friendly aliases that map to the same underlying utilities:

| Alias | Equivalent |
| --- | --- |
| `fill-saturate-{amount}` | `fill-saturation-{amount}` |
| `fill-saturate-{amount}/{space}` | `fill-saturation-{amount}/{space}` |
| `fill-desaturate-{amount}` | `-fill-saturation-{amount}` |
| `fill-desaturate-{amount}/{space}` | `-fill-saturation-{amount}/{space}` |

Both forms produce identical CSS output. Use whichever reads better in your markup:

```html
<!-- These are equivalent -->
<svg class="fill-slate-400 fill-saturation-20">...</svg>
<svg class="fill-slate-400 fill-saturate-20">...</svg>

<!-- These are equivalent -->
<svg class="fill-blue-500 -fill-saturation-20">...</svg>
<svg class="fill-blue-500 fill-desaturate-20">...</svg>
```
