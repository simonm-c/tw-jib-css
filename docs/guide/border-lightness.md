---
title: Border Lightness
---

<!-- llm-context: border-lightness / -border-lightness utility — adjusts border colour lightness using CSS relative colour syntax across 17 colour spaces. border-lightness-{n} to lighten, -border-lightness-{n} to darken, with optional /{color-space} modifier. border-lighten-{n} and border-darken-{n} are user-friendly aliases. -->

# Border Lightness

Adjust the lightness of any outline colour using CSS relative colour syntax. Use `border-lightness-{amount}` to lighten and `-border-lightness-{amount}` to darken. Works across 17 colour spaces with a simple slash modifier.

Lightness utilities are also available for [background](/guide/lightness), [text](/guide/text-lightness), [fill](/guide/fill-lightness), [stroke](/guide/stroke-lightness), [outline](/guide/outline-lightness), and [accent](/guide/accent-lightness).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/lightness';
```
:::

::: warning Incompatible with Border Gradient
Border lightness sets `border-color` directly and cannot be combined with `border-from-*` / `border-to-*` gradient utilities. This is the same limitation as background lightness with background gradients.
:::

## Quick Reference

Formulas use `amt` for `var(--tw-jib--border-lightness--amount)` — set to `<amount> × 0.01` (lighten) or `<amount> × −0.01` (darken).

<QuickReference :rows="[
  { class: 'border-lightness-<amount>', styles: 'border-color: oklch(from var(--tw-jib--border-color) calc(l * (1 - max(amt, 0 - amt)) + max(0, amt)) calc(c * min(1, (1 - max(amt, 0 - amt)) * 5)) h / alpha)' },
  { class: '-border-lightness-<amount>', styles: 'border-color: oklch(from var(--tw-jib--border-color) calc(l * (1 - max(amt, 0 - amt)) + max(0, amt)) calc(c * min(1, (1 - max(amt, 0 - amt)) * 5)) h / alpha)' },
  { class: 'border-lightness-<amount>/oklch', styles: 'border-color: oklch(from var(--tw-jib--border-color) calc(l * (1 - max(amt, 0 - amt)) + max(0, amt)) calc(c * min(1, (1 - max(amt, 0 - amt)) * 5)) h / alpha)' },
  { class: 'border-lightness-<amount>/hsl', styles: 'border-color: hsl(from var(--tw-jib--border-color) h calc(s * min(1, min(l, 100 - l) / max(min(L2, 100 - L2), 0.5))) L2 / alpha) — L2 = l * (1 - max(amt, 0 - amt)) + max(0, amt) * 100' },
  { class: 'border-lightness-<amount>/color-mix', styles: 'border-color: color-mix(in oklab, var(--tw-jib--border-color), white calc(amt * 100%))' },
]" />

## Basic Usage

### Lighten

Set a base border colour with `border-{color}`, then lighten it with `border-lightness-{amount}`:

<Example stretch>
  <div class="flex gap-4">
    <div class="border-2 border-blue-500 p-4 rounded text-sm text-center">base</div>
    <div class="border-2 border-blue-500 border-lightness-20 p-4 rounded text-sm text-center">+20</div>
    <div class="border-2 border-blue-500 border-lightness-40 p-4 rounded text-sm text-center">+40</div>
  </div>
</Example>

### Darken

Use `-border-lightness-{amount}` to decrease lightness:

<Example stretch>
  <div class="flex gap-4">
    <div class="border-2 border-blue-500 p-4 rounded text-sm text-center">base</div>
    <div class="border-2 border-blue-500 -border-lightness-20 p-4 rounded text-sm text-center">-20</div>
    <div class="border-2 border-blue-500 -border-lightness-40 p-4 rounded text-sm text-center">-40</div>
  </div>
</Example>

## Scale

### Lighten scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <div class="border-2 border-blue-500 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">base</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 border-lightness-10 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">10</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 border-lightness-20 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">20</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 border-lightness-30 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 border-lightness-40 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">40</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 border-lightness-50 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">50</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 border-lightness-60 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 border-lightness-70 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">70</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 border-lightness-80 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">80</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 border-lightness-90 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
  </div>
</Example>

### Darken scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <div class="border-2 border-blue-500 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">base</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 -border-lightness-10 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">10</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 -border-lightness-20 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">20</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 -border-lightness-30 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 -border-lightness-40 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">40</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 -border-lightness-50 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">50</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 -border-lightness-60 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 -border-lightness-70 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">70</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 -border-lightness-80 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">80</div>
    </div>
    <div class="text-center">
      <div class="border-2 border-blue-500 -border-lightness-90 w-10 h-10 rounded"></div>
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
  </div>
</Example>

## Colour Spaces

Use the slash modifier to select a colour space. For background on each colour space, see the [Colour Spaces guide](/guide/colour-spaces). For details on how scaling works, see [Background Lightness](/guide/lightness#how-scaling-works).

### Lighten across selected spaces

<Example stretch>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1 gap-1">
        <div class="border-2 border-blue-500 w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 border-lightness-20/oklch w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 border-lightness-40/oklch w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 border-lightness-60/oklch w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 border-lightness-80/oklch w-10 h-10 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1">
        <div class="border-2 border-blue-500 w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 border-lightness-20/hsl w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 border-lightness-40/hsl w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 border-lightness-60/hsl w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 border-lightness-80/hsl w-10 h-10 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-1">
        <div class="border-2 border-blue-500 w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 border-lightness-20/rgb w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 border-lightness-40/rgb w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 border-lightness-60/rgb w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 border-lightness-80/rgb w-10 h-10 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1 gap-1">
        <div class="border-2 border-blue-500 w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 border-lightness-20/color-mix w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 border-lightness-40/color-mix w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 border-lightness-60/color-mix w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 border-lightness-80/color-mix w-10 h-10 rounded"></div>
      </div>
    </div>
  </div>
</Example>

### Darken across selected spaces

<Example stretch>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1 gap-1">
        <div class="border-2 border-blue-500 w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-lightness-20/oklch w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-lightness-40/oklch w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-lightness-60/oklch w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-lightness-80/oklch w-10 h-10 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1">
        <div class="border-2 border-blue-500 w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-lightness-20/hsl w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-lightness-40/hsl w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-lightness-60/hsl w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-lightness-80/hsl w-10 h-10 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-1">
        <div class="border-2 border-blue-500 w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-lightness-20/rgb w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-lightness-40/rgb w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-lightness-60/rgb w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-lightness-80/rgb w-10 h-10 rounded"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1 gap-1">
        <div class="border-2 border-blue-500 w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-lightness-20/color-mix w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-lightness-40/color-mix w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-lightness-60/color-mix w-10 h-10 rounded"></div>
        <div class="border-2 border-blue-500 -border-lightness-80/color-mix w-10 h-10 rounded"></div>
      </div>
    </div>
  </div>
</Example>

## Aliases

For convenience, `border-lighten-*` and `border-darken-*` are provided as user-friendly aliases that map to the same underlying utilities:

| Alias | Equivalent |
| --- | --- |
| `border-lighten-{amount}` | `border-lightness-{amount}` |
| `border-lighten-{amount}/{space}` | `border-lightness-{amount}/{space}` |
| `border-darken-{amount}` | `-border-lightness-{amount}` |
| `border-darken-{amount}/{space}` | `-border-lightness-{amount}/{space}` |

Both forms produce identical CSS output. Use whichever reads better in your markup:

```html
<!-- These are equivalent -->
<div class="border-blue-500 border-lightness-20">...</div>
<div class="border-blue-500 border-lighten-20">...</div>

<!-- These are equivalent -->
<div class="border-blue-500 -border-lightness-20">...</div>
<div class="border-blue-500 border-darken-20">...</div>
```
