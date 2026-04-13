---
title: Border Saturation
---

<!-- llm-context: border-saturation / -border-saturation utility — adjusts border colour saturation/chroma using CSS relative colour syntax across 17 colour spaces. border-saturation-{n} to saturate, -border-saturation-{n} to desaturate, with optional /{color-space} modifier. border-saturate-{n} and border-desaturate-{n} are user-friendly aliases. -->

# Border Saturation

Adjust the saturation (chroma) of any border colour using CSS relative colour syntax. Use `border-saturation-{amount}` to saturate and `-border-saturation-{amount}` to desaturate. Works across 17 colour spaces with a simple slash modifier.

Saturation utilities are also available for [background](/guide/saturation), [text](/guide/text-saturation), [fill](/guide/fill-saturation), [stroke](/guide/stroke-saturation), [outline](/guide/outline-saturation), [accent](/guide/accent-saturation), and [border](/guide/border-saturation).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/saturation';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'border-saturation-<amount>', styles: 'border: oklch(from var(--tw-jib--border-color) l calc(c ...) h / alpha)' },
  { class: '-border-saturation-<amount>', styles: 'border: oklch(from var(--tw-jib--border-color) l calc(c ...) h / alpha)' },
  { class: 'border-saturation-<amount>/oklch', styles: 'border: oklch(...)' },
  { class: 'border-saturation-<amount>/hsl', styles: 'border: hsl(...)' },
]" />

## Basic Usage

### Saturate

```html
<div class="border-slate-400 border-saturation-20">...</div>
```

### Desaturate

```html
<div class="border-blue-500 -border-saturation-20">...</div>
```

## Aliases

`border-saturate-{amount}` and `border-desaturate-{amount}` are user-friendly aliases.

## Colour Spaces

Use the slash modifier to select a colour space. For details on how scaling works per space, see [Background Saturation](/guide/saturation#how-scaling-works).

```html
<div class="border-blue-500 -border-saturation-30/oklch">...</div>
<div class="border-blue-500 -border-saturation-30/hsl">...</div>
<div class="border-blue-500 -border-saturation-30/oklab">...</div>
```
