---
title: Accent Saturation
---

<!-- llm-context: accent-saturation / -accent-saturation utility — adjusts accent colour saturation/chroma using CSS relative colour syntax across 17 colour spaces. accent-saturation-{n} to saturate, -accent-saturation-{n} to desaturate, with optional /{color-space} modifier. accent-saturate-{n} and accent-desaturate-{n} are user-friendly aliases. -->

# Accent Saturation

Adjust the saturation (chroma) of any accent colour using CSS relative colour syntax. Use `accent-saturation-{amount}` to saturate and `-accent-saturation-{amount}` to desaturate. Works across 17 colour spaces with a simple slash modifier.

Saturation utilities are also available for [background](/guide/saturation), [text](/guide/text-saturation), [fill](/guide/fill-saturation), [stroke](/guide/stroke-saturation), [outline](/guide/outline-saturation), [accent](/guide/accent-saturation), and [border](/guide/border-saturation).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/saturation';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'accent-saturation-<amount>', styles: 'accent: oklch(from var(--tw-jib--accent-color) l calc(c ...) h / alpha)' },
  { class: '-accent-saturation-<amount>', styles: 'accent: oklch(from var(--tw-jib--accent-color) l calc(c ...) h / alpha)' },
  { class: 'accent-saturation-<amount>/oklch', styles: 'accent: oklch(...)' },
  { class: 'accent-saturation-<amount>/hsl', styles: 'accent: hsl(...)' },
]" />

## Basic Usage

### Saturate

```html
<div class="accent-slate-400 accent-saturation-20">...</div>
```

### Desaturate

```html
<div class="accent-blue-500 -accent-saturation-20">...</div>
```

## Aliases

`accent-saturate-{amount}` and `accent-desaturate-{amount}` are user-friendly aliases.

## Colour Spaces

Use the slash modifier to select a colour space. For details on how scaling works per space, see [Background Saturation](/guide/saturation#how-scaling-works).

```html
<div class="accent-blue-500 -accent-saturation-30/oklch">...</div>
<div class="accent-blue-500 -accent-saturation-30/hsl">...</div>
<div class="accent-blue-500 -accent-saturation-30/oklab">...</div>
```
