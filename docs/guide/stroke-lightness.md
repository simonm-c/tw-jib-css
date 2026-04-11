---
title: Stroke Lightness
---

<!-- llm-context: stroke-lightness / -stroke-lightness utility — adjusts SVG stroke colour lightness using CSS relative colour syntax across 17 colour spaces. stroke-lightness-{n} to lighten, -stroke-lightness-{n} to darken, with optional /{color-space} modifier. stroke-lighten-{n} and stroke-darken-{n} are user-friendly aliases. -->

# Stroke Lightness

Adjust the lightness of any SVG stroke colour using CSS relative colour syntax. Use `stroke-lightness-{amount}` to lighten and `-stroke-lightness-{amount}` to darken. Works across 17 colour spaces with a simple slash modifier.

Lightness utilities are also available for [background](/guide/lightness), [text](/guide/text-lightness), [fill](/guide/fill-lightness), [outline](/guide/outline-lightness), and [accent](/guide/accent-lightness).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/lightness';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'stroke-lightness-<amount>', styles: 'stroke: oklch(from var(--tw-jib--stroke-color) calc(l + ...) c h / alpha)' },
  { class: '-stroke-lightness-<amount>', styles: 'stroke: oklch(from var(--tw-jib--stroke-color) calc(l - ...) c h / alpha)' },
  { class: 'stroke-lightness-<amount>/oklch', styles: 'stroke: oklch(from var(--tw-jib--stroke-color) calc(l + ...) c h / alpha)' },
  { class: 'stroke-lightness-<amount>/hsl', styles: 'stroke: hsl(from var(--tw-jib--stroke-color) h s calc(l + ...) / alpha)' },
  { class: 'stroke-lightness-<amount>/color-mix', styles: 'stroke: color-mix(in oklab, var(--tw-jib--stroke-color) ..., white ...)' },
]" />

## Basic Usage

### Lighten

Set a base stroke colour with `stroke-{color}`, then lighten it with `stroke-lightness-{amount}`:

<Example stretch>
  <div class="flex gap-4 items-center">
    <svg class="w-12 h-12 stroke-blue-500 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-12 h-12 stroke-blue-500 stroke-lightness-20 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-12 h-12 stroke-blue-500 stroke-lightness-40 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  </div>
</Example>

### Darken

Use `-stroke-lightness-{amount}` to decrease lightness:

<Example stretch>
  <div class="flex gap-4 items-center">
    <svg class="w-12 h-12 stroke-blue-500 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-12 h-12 stroke-blue-500 -stroke-lightness-20 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    <svg class="w-12 h-12 stroke-blue-500 -stroke-lightness-40 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  </div>
</Example>

## Scale

### Lighten scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">base</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 stroke-lightness-10 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">10</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 stroke-lightness-20 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">20</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 stroke-lightness-30 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 stroke-lightness-40 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">40</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 stroke-lightness-50 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">50</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 stroke-lightness-60 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 stroke-lightness-70 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">70</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 stroke-lightness-80 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">80</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 stroke-lightness-90 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">90</div>
    </div>
  </div>
</Example>

### Darken scale

<Example stretch>
  <div class="flex gap-2 items-end">
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">base</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 -stroke-lightness-10 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">10</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 -stroke-lightness-20 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">20</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 -stroke-lightness-30 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">30</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 -stroke-lightness-40 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">40</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 -stroke-lightness-50 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">50</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 -stroke-lightness-60 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">60</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 -stroke-lightness-70 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">70</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 -stroke-lightness-80 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="text-[10px] text-gray-400 mt-0.5">80</div>
    </div>
    <div class="text-center">
      <svg class="w-10 h-10 stroke-blue-500 -stroke-lightness-90 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
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
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 stroke-blue-500 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 stroke-lightness-20/oklch fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 stroke-lightness-40/oklch fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 stroke-lightness-60/oklch fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 stroke-lightness-80/oklch fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 stroke-blue-500 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 stroke-lightness-20/hsl fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 stroke-lightness-40/hsl fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 stroke-lightness-60/hsl fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 stroke-lightness-80/hsl fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 stroke-blue-500 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 stroke-lightness-20/rgb fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 stroke-lightness-40/rgb fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 stroke-lightness-60/rgb fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 stroke-lightness-80/rgb fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 stroke-blue-500 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 stroke-lightness-20/color-mix fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 stroke-lightness-40/color-mix fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 stroke-lightness-60/color-mix fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 stroke-lightness-80/color-mix fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
  </div>
</Example>

### Darken across selected spaces

<Example stretch>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 stroke-blue-500 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-lightness-20/oklch fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-lightness-40/oklch fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-lightness-60/oklch fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-lightness-80/oklch fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 stroke-blue-500 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-lightness-20/hsl fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-lightness-40/hsl fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-lightness-60/hsl fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-lightness-80/hsl fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/rgb</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 stroke-blue-500 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-lightness-20/rgb fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-lightness-40/rgb fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-lightness-60/rgb fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-lightness-80/rgb fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/color-mix</span>
      <div class="flex flex-1 gap-1 items-center">
        <svg class="w-8 h-8 stroke-blue-500 fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-lightness-20/color-mix fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-lightness-40/color-mix fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-lightness-60/color-mix fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        <svg class="w-8 h-8 stroke-blue-500 -stroke-lightness-80/color-mix fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
  </div>
</Example>

## Aliases

For convenience, `stroke-lighten-*` and `stroke-darken-*` are provided as user-friendly aliases that map to the same underlying utilities:

| Alias | Equivalent |
| --- | --- |
| `stroke-lighten-{amount}` | `stroke-lightness-{amount}` |
| `stroke-lighten-{amount}/{space}` | `stroke-lightness-{amount}/{space}` |
| `stroke-darken-{amount}` | `-stroke-lightness-{amount}` |
| `stroke-darken-{amount}/{space}` | `-stroke-lightness-{amount}/{space}` |

Both forms produce identical CSS output. Use whichever reads better in your markup:

```html
<!-- These are equivalent -->
<svg class="stroke-blue-500 stroke-lightness-20">...</svg>
<svg class="stroke-blue-500 stroke-lighten-20">...</svg>

<!-- These are equivalent -->
<svg class="stroke-blue-500 -stroke-lightness-20">...</svg>
<svg class="stroke-blue-500 stroke-darken-20">...</svg>
```
