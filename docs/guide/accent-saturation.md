---
title: Accent Saturation
---

<!-- llm-context: accent-saturation / -accent-saturation utility — adjusts accent colour saturation/chroma using CSS relative colour syntax across 17 colour spaces. accent-saturation-{n} to saturate, -accent-saturation-{n} to desaturate, with optional /{color-space} modifier. accent-saturate-{n} and accent-desaturate-{n} are user-friendly aliases. -->

# Accent Saturation

Adjust the saturation (chroma) of any accent colour using CSS relative colour syntax. Use `accent-saturation-{amount}` to saturate and `-accent-saturation-{amount}` to desaturate. Works across 17 colour spaces with a simple slash modifier. Particularly useful for styling checkboxes, radio buttons, range sliders, and progress bars.

Saturation utilities are also available for [background](/guide/saturation), [text](/guide/text-saturation), [fill](/guide/fill-saturation), [stroke](/guide/stroke-saturation), [outline](/guide/outline-saturation), and [border](/guide/border-saturation).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/saturation';
```
:::

## Quick Reference

Formulas use `amt` for `var(--tw-jib--accent-saturation--amount)` — set to `<amount> × 0.01` (saturate) or `<amount> × −0.01` (desaturate).

<QuickReference :rows="[
  { class: 'accent-saturation-<amount>', styles: 'accent-color: oklch(from var(--tw-jib--accent-color) l calc(c * (1 - max(amt, 0 - amt)) + max(0, amt) * 0.4) h / alpha)' },
  { class: '-accent-saturation-<amount>', styles: 'accent-color: oklch(from var(--tw-jib--accent-color) l calc(c * (1 - max(amt, 0 - amt)) + max(0, amt) * 0.4) h / alpha)' },
  { class: 'accent-saturation-<amount>/oklch', styles: 'accent-color: oklch(from var(--tw-jib--accent-color) l calc(c * (1 - max(amt, 0 - amt)) + max(0, amt) * 0.4) h / alpha)' },
  { class: 'accent-saturation-<amount>/hsl', styles: 'accent-color: hsl(from var(--tw-jib--accent-color) h calc(s * (1 - max(amt, 0 - amt)) + max(0, amt) * 100) l / alpha)' },
  { class: 'accent-saturation-<amount>/color-mix', styles: 'accent-color: color-mix(in oklch, var(--tw-jib--accent-color), gray calc(max(0, 0 - amt) * 100%))' },
]" />

## Basic Usage

### Saturate

Set a base accent colour with `accent-{color}`, then increase saturation with `accent-saturation-{amount}`. Start with a desaturated colour to see the full effect:

<Example stretch>
  <div class="flex gap-6 items-center">
    <label class="flex items-center gap-2">
      <input type="checkbox" checked class="accent-slate-400 w-6 h-6" />
      <span class="text-sm">base</span>
    </label>
    <label class="flex items-center gap-2">
      <input type="checkbox" checked class="accent-slate-400 accent-saturation-20 w-6 h-6" />
      <span class="text-sm">+20</span>
    </label>
    <label class="flex items-center gap-2">
      <input type="checkbox" checked class="accent-slate-400 accent-saturation-40 w-6 h-6" />
      <span class="text-sm">+40</span>
    </label>
  </div>
</Example>

### Desaturate

Use `-accent-saturation-{amount}` to decrease saturation:

<Example stretch>
  <div class="flex gap-6 items-center">
    <label class="flex items-center gap-2">
      <input type="checkbox" checked class="accent-blue-500 w-6 h-6" />
      <span class="text-sm">base</span>
    </label>
    <label class="flex items-center gap-2">
      <input type="checkbox" checked class="accent-blue-500 -accent-saturation-20 w-6 h-6" />
      <span class="text-sm">-20</span>
    </label>
    <label class="flex items-center gap-2">
      <input type="checkbox" checked class="accent-blue-500 -accent-saturation-40 w-6 h-6" />
      <span class="text-sm">-40</span>
    </label>
  </div>
</Example>

## Scale

### Saturate scale

<Example stretch>
  <div class="flex gap-3 items-end">
    <div class="text-center">
      <input type="checkbox" checked class="accent-slate-400 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">base</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-slate-400 accent-saturation-10 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">10</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-slate-400 accent-saturation-20 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">20</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-slate-400 accent-saturation-30 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-slate-400 accent-saturation-40 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">40</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-slate-400 accent-saturation-50 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">50</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-slate-400 accent-saturation-60 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-slate-400 accent-saturation-70 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">70</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-slate-400 accent-saturation-80 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">80</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-slate-400 accent-saturation-90 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
  </div>
</Example>

### Desaturate scale

<Example stretch>
  <div class="flex gap-3 items-end">
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">base</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 -accent-saturation-10 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">10</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 -accent-saturation-20 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">20</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 -accent-saturation-30 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 -accent-saturation-40 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">40</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 -accent-saturation-50 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">50</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 -accent-saturation-60 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 -accent-saturation-70 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">70</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 -accent-saturation-80 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">80</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 -accent-saturation-90 w-5 h-5" />
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
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="accent-slate-400 w-5 h-5" />
        <input type="checkbox" checked class="accent-slate-400 accent-saturation-20/oklch w-5 h-5" />
        <input type="checkbox" checked class="accent-slate-400 accent-saturation-40/oklch w-5 h-5" />
        <input type="checkbox" checked class="accent-slate-400 accent-saturation-60/oklch w-5 h-5" />
        <input type="checkbox" checked class="accent-slate-400 accent-saturation-80/oklch w-5 h-5" />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="accent-slate-400 w-5 h-5" />
        <input type="checkbox" checked class="accent-slate-400 accent-saturation-20/hsl w-5 h-5" />
        <input type="checkbox" checked class="accent-slate-400 accent-saturation-40/hsl w-5 h-5" />
        <input type="checkbox" checked class="accent-slate-400 accent-saturation-60/hsl w-5 h-5" />
        <input type="checkbox" checked class="accent-slate-400 accent-saturation-80/hsl w-5 h-5" />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="accent-slate-400 w-5 h-5" />
        <input type="checkbox" checked class="accent-slate-400 accent-saturation-20/oklab w-5 h-5" />
        <input type="checkbox" checked class="accent-slate-400 accent-saturation-40/oklab w-5 h-5" />
        <input type="checkbox" checked class="accent-slate-400 accent-saturation-60/oklab w-5 h-5" />
        <input type="checkbox" checked class="accent-slate-400 accent-saturation-80/oklab w-5 h-5" />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="accent-slate-400 w-5 h-5" />
        <input type="checkbox" checked class="accent-slate-400 accent-saturation-20/color-mix w-5 h-5" />
        <input type="checkbox" checked class="accent-slate-400 accent-saturation-40/color-mix w-5 h-5" />
        <input type="checkbox" checked class="accent-slate-400 accent-saturation-60/color-mix w-5 h-5" />
        <input type="checkbox" checked class="accent-slate-400 accent-saturation-80/color-mix w-5 h-5" />
      </div>
    </div>
  </div>
</Example>

### Desaturate across selected spaces

<Example stretch>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="accent-blue-500 w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-saturation-20/oklch w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-saturation-40/oklch w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-saturation-60/oklch w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-saturation-80/oklch w-5 h-5" />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="accent-blue-500 w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-saturation-20/hsl w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-saturation-40/hsl w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-saturation-60/hsl w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-saturation-80/hsl w-5 h-5" />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklab</span>
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="accent-blue-500 w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-saturation-20/oklab w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-saturation-40/oklab w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-saturation-60/oklab w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-saturation-80/oklab w-5 h-5" />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="accent-blue-500 w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-saturation-20/color-mix w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-saturation-40/color-mix w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-saturation-60/color-mix w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-saturation-80/color-mix w-5 h-5" />
      </div>
    </div>
  </div>
</Example>

## Aliases

For convenience, `accent-saturate-*` and `accent-desaturate-*` are provided as user-friendly aliases that map to the same underlying utilities:

| Alias | Equivalent |
| --- | --- |
| `accent-saturate-{amount}` | `accent-saturation-{amount}` |
| `accent-saturate-{amount}/{space}` | `accent-saturation-{amount}/{space}` |
| `accent-desaturate-{amount}` | `-accent-saturation-{amount}` |
| `accent-desaturate-{amount}/{space}` | `-accent-saturation-{amount}/{space}` |

Both forms produce identical CSS output. Use whichever reads better in your markup:

```html
<!-- These are equivalent -->
<input type="checkbox" class="accent-slate-400 accent-saturation-20" />
<input type="checkbox" class="accent-slate-400 accent-saturate-20" />

<!-- These are equivalent -->
<input type="checkbox" class="accent-blue-500 -accent-saturation-20" />
<input type="checkbox" class="accent-blue-500 accent-desaturate-20" />
```
