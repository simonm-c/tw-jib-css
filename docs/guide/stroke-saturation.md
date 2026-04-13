---
title: Stroke Saturation
---

<!-- llm-context: stroke-saturation / -stroke-saturation utility — adjusts SVG stroke colour saturation/chroma using CSS relative colour syntax across 17 colour spaces. stroke-saturation-{n} to saturate, -stroke-saturation-{n} to desaturate, with optional /{color-space} modifier. stroke-saturate-{n} and stroke-desaturate-{n} are user-friendly aliases. -->

# Stroke Saturation

Adjust the saturation (chroma) of any SVG stroke colour using CSS relative colour syntax. Use `stroke-saturation-{amount}` to saturate and `-stroke-saturation-{amount}` to desaturate. Works across 17 colour spaces with a simple slash modifier.

Saturation utilities are also available for [background](/guide/saturation), [text](/guide/text-saturation), [fill](/guide/fill-saturation), [stroke](/guide/stroke-saturation), [outline](/guide/outline-saturation), [accent](/guide/accent-saturation), and [border](/guide/border-saturation).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/saturation';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'stroke-saturation-<amount>', styles: 'stroke: oklch(from var(--tw-jib--stroke-color) l calc(c ...) h / alpha)' },
  { class: '-stroke-saturation-<amount>', styles: 'stroke: oklch(from var(--tw-jib--stroke-color) l calc(c ...) h / alpha)' },
  { class: 'stroke-saturation-<amount>/oklch', styles: 'stroke: oklch(...)' },
  { class: 'stroke-saturation-<amount>/hsl', styles: 'stroke: hsl(...)' },
]" />

## Basic Usage

### Saturate

```html
<div class="stroke-slate-400 stroke-saturation-20">...</div>
```

### Desaturate

```html
<div class="stroke-blue-500 -stroke-saturation-20">...</div>
```

## Aliases

`stroke-saturate-{amount}` and `stroke-desaturate-{amount}` are user-friendly aliases.

## Colour Spaces

Use the slash modifier to select a colour space. For details on how scaling works per space, see [Background Saturation](/guide/saturation#how-scaling-works).

```html
<div class="stroke-blue-500 -stroke-saturation-30/oklch">...</div>
<div class="stroke-blue-500 -stroke-saturation-30/hsl">...</div>
<div class="stroke-blue-500 -stroke-saturation-30/oklab">...</div>
```
