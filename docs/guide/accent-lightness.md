---
title: Accent Lightness
---

<!-- llm-context: accent-lightness / -accent-lightness utility — adjusts accent colour lightness using CSS relative colour syntax across 17 colour spaces. accent-lightness-{n} to lighten, -accent-lightness-{n} to darken, with optional /{color-space} modifier. accent-lighten-{n} and accent-darken-{n} are user-friendly aliases. -->

# Accent Lightness

Adjust the lightness of any accent colour using CSS relative colour syntax. Use `accent-lightness-{amount}` to lighten and `-accent-lightness-{amount}` to darken. Works across 17 colour spaces with a simple slash modifier. Particularly useful for styling checkboxes, radio buttons, range sliders, and progress bars.

Lightness utilities are also available for [background](/guide/lightness), [text](/guide/text-lightness), [fill](/guide/fill-lightness), [stroke](/guide/stroke-lightness), and [outline](/guide/outline-lightness).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/lightness';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'accent-lightness-<amount>', styles: 'accent-color: oklch(from var(--tw-jib--accent-color) calc(l + ...) c h / alpha)' },
  { class: '-accent-lightness-<amount>', styles: 'accent-color: oklch(from var(--tw-jib--accent-color) calc(l - ...) c h / alpha)' },
  { class: 'accent-lightness-<amount>/oklch', styles: 'accent-color: oklch(from var(--tw-jib--accent-color) calc(l + ...) c h / alpha)' },
  { class: 'accent-lightness-<amount>/hsl', styles: 'accent-color: hsl(from var(--tw-jib--accent-color) h s calc(l + ...) / alpha)' },
  { class: 'accent-lightness-<amount>/color-mix', styles: 'accent-color: color-mix(in oklab, var(--tw-jib--accent-color) ..., white ...)' },
]" />

## Basic Usage

### Lighten

Set a base accent colour with `accent-{color}`, then lighten it with `accent-lightness-{amount}`:

<Example stretch>
  <div class="flex gap-6 items-center">
    <label class="flex items-center gap-2">
      <input type="checkbox" checked class="accent-blue-500 w-6 h-6" />
      <span class="text-sm">base</span>
    </label>
    <label class="flex items-center gap-2">
      <input type="checkbox" checked class="accent-blue-500 accent-lightness-20 w-6 h-6" />
      <span class="text-sm">+20</span>
    </label>
    <label class="flex items-center gap-2">
      <input type="checkbox" checked class="accent-blue-500 accent-lightness-40 w-6 h-6" />
      <span class="text-sm">+40</span>
    </label>
  </div>
</Example>

### Darken

Use `-accent-lightness-{amount}` to decrease lightness:

<Example stretch>
  <div class="flex gap-6 items-center">
    <label class="flex items-center gap-2">
      <input type="checkbox" checked class="accent-blue-500 w-6 h-6" />
      <span class="text-sm">base</span>
    </label>
    <label class="flex items-center gap-2">
      <input type="checkbox" checked class="accent-blue-500 -accent-lightness-20 w-6 h-6" />
      <span class="text-sm">-20</span>
    </label>
    <label class="flex items-center gap-2">
      <input type="checkbox" checked class="accent-blue-500 -accent-lightness-40 w-6 h-6" />
      <span class="text-sm">-40</span>
    </label>
  </div>
</Example>

## Scale

### Lighten scale

<Example stretch>
  <div class="flex gap-3 items-end">
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">base</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 accent-lightness-10 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">10</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 accent-lightness-20 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">20</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 accent-lightness-30 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 accent-lightness-40 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">40</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 accent-lightness-50 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">50</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 accent-lightness-60 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 accent-lightness-70 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">70</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 accent-lightness-80 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">80</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 accent-lightness-90 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
  </div>
</Example>

### Darken scale

<Example stretch>
  <div class="flex gap-3 items-end">
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">base</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 -accent-lightness-10 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">10</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 -accent-lightness-20 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">20</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 -accent-lightness-30 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 -accent-lightness-40 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">40</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 -accent-lightness-50 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">50</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 -accent-lightness-60 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 -accent-lightness-70 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">70</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 -accent-lightness-80 w-5 h-5" />
      <div class="text-[10px] text-gray-400 mt-0.5">80</div>
    </div>
    <div class="text-center">
      <input type="checkbox" checked class="accent-blue-500 -accent-lightness-90 w-5 h-5" />
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
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="accent-blue-500 w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 accent-lightness-20/oklch w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 accent-lightness-40/oklch w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 accent-lightness-60/oklch w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 accent-lightness-80/oklch w-5 h-5" />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="accent-blue-500 w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 accent-lightness-20/hsl w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 accent-lightness-40/hsl w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 accent-lightness-60/hsl w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 accent-lightness-80/hsl w-5 h-5" />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="accent-blue-500 w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 accent-lightness-20/rgb w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 accent-lightness-40/rgb w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 accent-lightness-60/rgb w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 accent-lightness-80/rgb w-5 h-5" />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="accent-blue-500 w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 accent-lightness-20/color-mix w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 accent-lightness-40/color-mix w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 accent-lightness-60/color-mix w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 accent-lightness-80/color-mix w-5 h-5" />
      </div>
    </div>
  </div>
</Example>

### Darken across selected spaces

<Example stretch>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="accent-blue-500 w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-lightness-20/oklch w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-lightness-40/oklch w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-lightness-60/oklch w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-lightness-80/oklch w-5 h-5" />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="accent-blue-500 w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-lightness-20/hsl w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-lightness-40/hsl w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-lightness-60/hsl w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-lightness-80/hsl w-5 h-5" />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="accent-blue-500 w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-lightness-20/rgb w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-lightness-40/rgb w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-lightness-60/rgb w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-lightness-80/rgb w-5 h-5" />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1 gap-2 items-center">
        <input type="checkbox" checked class="accent-blue-500 w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-lightness-20/color-mix w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-lightness-40/color-mix w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-lightness-60/color-mix w-5 h-5" />
        <input type="checkbox" checked class="accent-blue-500 -accent-lightness-80/color-mix w-5 h-5" />
      </div>
    </div>
  </div>
</Example>

## Aliases

For convenience, `accent-lighten-*` and `accent-darken-*` are provided as user-friendly aliases that map to the same underlying utilities:

| Alias | Equivalent |
| --- | --- |
| `accent-lighten-{amount}` | `accent-lightness-{amount}` |
| `accent-lighten-{amount}/{space}` | `accent-lightness-{amount}/{space}` |
| `accent-darken-{amount}` | `-accent-lightness-{amount}` |
| `accent-darken-{amount}/{space}` | `-accent-lightness-{amount}/{space}` |

Both forms produce identical CSS output. Use whichever reads better in your markup:

```html
<!-- These are equivalent -->
<input type="checkbox" class="accent-blue-500 accent-lightness-20" />
<input type="checkbox" class="accent-blue-500 accent-lighten-20" />

<!-- These are equivalent -->
<input type="checkbox" class="accent-blue-500 -accent-lightness-20" />
<input type="checkbox" class="accent-blue-500 accent-darken-20" />
```
