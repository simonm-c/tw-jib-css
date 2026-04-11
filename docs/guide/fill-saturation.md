---
title: Fill Saturation
---

<!-- llm-context: fill-saturation / -fill-saturation utility — adjusts SVG fill colour saturation/chroma using CSS relative colour syntax across 17 colour spaces. fill-saturation-{n} to saturate, -fill-saturation-{n} to desaturate, with optional /{color-space} modifier. fill-saturate-{n} and fill-desaturate-{n} are user-friendly aliases. -->

# Fill Saturation

Adjust the saturation (chroma) of any SVG fill colour using CSS relative colour syntax. Use `fill-saturation-{amount}` to saturate and `-fill-saturation-{amount}` to desaturate. Works across 17 colour spaces with a simple slash modifier.

Saturation utilities are also available for [background](/guide/saturation), [text](/guide/text-saturation), [fill](/guide/fill-saturation), [stroke](/guide/stroke-saturation), [outline](/guide/outline-saturation), [accent](/guide/accent-saturation), and [border](/guide/border-saturation).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/saturation';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'fill-saturation-<amount>', styles: 'fill: oklch(from var(--tw-jib--fill-color) l calc(c ...) h / alpha)' },
  { class: '-fill-saturation-<amount>', styles: 'fill: oklch(from var(--tw-jib--fill-color) l calc(c ...) h / alpha)' },
  { class: 'fill-saturation-<amount>/oklch', styles: 'fill: oklch(...)' },
  { class: 'fill-saturation-<amount>/hsl', styles: 'fill: hsl(...)' },
]" />

## Basic Usage

### Saturate

```html
<div class="fill-slate-400 fill-saturation-20">...</div>
```

### Desaturate

```html
<div class="fill-blue-500 -fill-saturation-20">...</div>
```

## Aliases

`fill-saturate-{amount}` and `fill-desaturate-{amount}` are user-friendly aliases.

## Colour Spaces

Use the slash modifier to select a colour space. For details on how scaling works per space, see [Background Saturation](/guide/saturation#how-scaling-works).

```html
<div class="fill-blue-500 -fill-saturation-30/oklch">...</div>
<div class="fill-blue-500 -fill-saturation-30/hsl">...</div>
<div class="fill-blue-500 -fill-saturation-30/oklab">...</div>
```
