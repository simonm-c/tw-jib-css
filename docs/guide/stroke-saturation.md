---
title: Stroke Saturation
---

<!-- llm-context: stroke-saturation / -stroke-saturation utility — adjusts SVG stroke colour saturation/chroma using CSS relative colour syntax across 17 colour spaces. stroke-saturation-{n} to saturate, -stroke-saturation-{n} to desaturate, with optional /{color-space} modifier. stroke-saturate-{n} and stroke-desaturate-{n} are user-friendly aliases. -->

# Stroke Saturation

Adjust the saturation (chroma) of any SVG stroke colour using CSS relative colour syntax. Use `stroke-saturation-{amount}` to saturate and `-stroke-saturation-{amount}` to desaturate. Works across 17 colour spaces with a simple slash modifier.

Saturation utilities are also available for [background](/guide/saturation), [text](/guide/text-saturation), [fill](/guide/fill-saturation), [outline](/guide/outline-saturation), [accent](/guide/accent-saturation), and [border](/guide/border-saturation).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/saturation';
```
:::

## Quick Reference

Formulas use `amt` for `var(--tw-jib--stroke-saturation--amount)` — set to `<amount> × 0.01` (saturate) or `<amount> × −0.01` (desaturate).

<QuickReference :rows="[
  { class: 'stroke-saturation-<amount>', styles: 'stroke: oklch(from var(--tw-jib--stroke-color) l calc(c * (1 - max(amt, 0 - amt)) + max(0, amt) * 0.4) h / alpha)' },
  { class: '-stroke-saturation-<amount>', styles: 'stroke: oklch(from var(--tw-jib--stroke-color) l calc(c * (1 - max(amt, 0 - amt)) + max(0, amt) * 0.4) h / alpha)' },
  { class: 'stroke-saturation-<amount>/oklch', styles: 'stroke: oklch(from var(--tw-jib--stroke-color) l calc(c * (1 - max(amt, 0 - amt)) + max(0, amt) * 0.4) h / alpha)' },
  { class: 'stroke-saturation-<amount>/hsl', styles: 'stroke: hsl(from var(--tw-jib--stroke-color) h calc(s * (1 - max(amt, 0 - amt)) + max(0, amt) * 100) l / alpha)' },
  { class: 'stroke-saturation-<amount>/color-mix', styles: 'stroke: color-mix(in oklch, var(--tw-jib--stroke-color), gray calc(max(0, 0 - amt) * 100%))' },
]" />

## Basic Usage

### Saturate

Set a base stroke colour with `stroke-{color}`, then increase saturation with `stroke-saturation-{amount}`. Start with a desaturated colour to see the full effect:

<Example stretch>
  <div class="flex gap-4 items-center">
    <svg class="w-12 h-12 stroke-slate-400 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-12 h-12 stroke-slate-400 stroke-saturation-20 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-12 h-12 stroke-slate-400 stroke-saturation-40 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  </div>
</Example>

### Desaturate

Use `-stroke-saturation-{amount}` to decrease saturation:

<Example stretch>
  <div class="flex gap-4 items-center">
    <svg class="w-12 h-12 stroke-blue-500 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-12 h-12 stroke-blue-500 -stroke-saturation-20 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-12 h-12 stroke-blue-500 -stroke-saturation-40 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  </div>
</Example>

## Scale

### Saturate scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <svg class="w-10 h-10 stroke-slate-400 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">base</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-slate-400 stroke-saturation-10 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">10</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-slate-400 stroke-saturation-20 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">20</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-slate-400 stroke-saturation-30 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-slate-400 stroke-saturation-40 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">40</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-slate-400 stroke-saturation-50 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">50</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-slate-400 stroke-saturation-60 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-slate-400 stroke-saturation-70 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">70</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-slate-400 stroke-saturation-80 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">80</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-slate-400 stroke-saturation-90 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
  </div>
</Example>

### Desaturate scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">base</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 -stroke-saturation-10 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">10</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 -stroke-saturation-20 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">20</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 -stroke-saturation-30 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 -stroke-saturation-40 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">40</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 -stroke-saturation-50 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">50</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 -stroke-saturation-60 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 -stroke-saturation-70 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">70</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 -stroke-saturation-80 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">80</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 -stroke-saturation-90 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
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
        <svg class="w-8 h-8 stroke-slate-400 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-slate-400 stroke-saturation-20/oklch fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-slate-400 stroke-saturation-40/oklch fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-slate-400 stroke-saturation-60/oklch fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-slate-400 stroke-saturation-80/oklch fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 stroke-slate-400 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-slate-400 stroke-saturation-20/hsl fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-slate-400 stroke-saturation-40/hsl fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-slate-400 stroke-saturation-60/hsl fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-slate-400 stroke-saturation-80/hsl fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 stroke-slate-400 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-slate-400 stroke-saturation-20/oklab fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-slate-400 stroke-saturation-40/oklab fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-slate-400 stroke-saturation-60/oklab fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-slate-400 stroke-saturation-80/oklab fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 stroke-slate-400 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-slate-400 stroke-saturation-20/color-mix fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-slate-400 stroke-saturation-40/color-mix fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-slate-400 stroke-saturation-60/color-mix fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-slate-400 stroke-saturation-80/color-mix fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
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
        <svg class="w-8 h-8 stroke-blue-500 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-saturation-20/oklch fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-saturation-40/oklch fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-saturation-60/oklch fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-saturation-80/oklch fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 stroke-blue-500 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-saturation-20/hsl fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-saturation-40/hsl fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-saturation-60/hsl fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-saturation-80/hsl fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 stroke-blue-500 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-saturation-20/oklab fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-saturation-40/oklab fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-saturation-60/oklab fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-saturation-80/oklab fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 stroke-blue-500 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-saturation-20/color-mix fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-saturation-40/color-mix fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-saturation-60/color-mix fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-saturation-80/color-mix fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
  </div>
</Example>

## Aliases

For convenience, `stroke-saturate-*` and `stroke-desaturate-*` are provided as user-friendly aliases that map to the same underlying utilities:

| Alias | Equivalent |
| --- | --- |
| `stroke-saturate-{amount}` | `stroke-saturation-{amount}` |
| `stroke-saturate-{amount}/{space}` | `stroke-saturation-{amount}/{space}` |
| `stroke-desaturate-{amount}` | `-stroke-saturation-{amount}` |
| `stroke-desaturate-{amount}/{space}` | `-stroke-saturation-{amount}/{space}` |

Both forms produce identical CSS output. Use whichever reads better in your markup:

```html
<!-- These are equivalent -->
<svg class="stroke-slate-400 stroke-saturation-20">...</svg>
<svg class="stroke-slate-400 stroke-saturate-20">...</svg>

<!-- These are equivalent -->
<svg class="stroke-blue-500 -stroke-saturation-20">...</svg>
<svg class="stroke-blue-500 stroke-desaturate-20">...</svg>
```
