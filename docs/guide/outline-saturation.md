---
title: Outline Saturation
---

<!-- llm-context: outline-saturation / -outline-saturation utility — adjusts outline colour saturation/chroma using CSS relative colour syntax across 17 colour spaces. outline-saturation-{n} to saturate, -outline-saturation-{n} to desaturate, with optional /{color-space} modifier. outline-saturate-{n} and outline-desaturate-{n} are user-friendly aliases. -->

# Outline Saturation

Adjust the saturation (chroma) of any outline colour using CSS relative colour syntax. Use `outline-saturation-{amount}` to saturate and `-outline-saturation-{amount}` to desaturate. Works across 17 colour spaces with a simple slash modifier.

Saturation utilities are also available for [background](/guide/saturation), [text](/guide/text-saturation), [fill](/guide/fill-saturation), [stroke](/guide/stroke-saturation), [outline](/guide/outline-saturation), [accent](/guide/accent-saturation), and [border](/guide/border-saturation).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/saturation';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'outline-saturation-<amount>', styles: 'outline: oklch(from var(--tw-jib--outline-color) l calc(c ...) h / alpha)' },
  { class: '-outline-saturation-<amount>', styles: 'outline: oklch(from var(--tw-jib--outline-color) l calc(c ...) h / alpha)' },
  { class: 'outline-saturation-<amount>/oklch', styles: 'outline: oklch(...)' },
  { class: 'outline-saturation-<amount>/hsl', styles: 'outline: hsl(...)' },
]" />

## Basic Usage

### Saturate

```html
<div class="outline-slate-400 outline-saturation-20">...</div>
```

### Desaturate

```html
<div class="outline-blue-500 -outline-saturation-20">...</div>
```

## Aliases

`outline-saturate-{amount}` and `outline-desaturate-{amount}` are user-friendly aliases.

## Colour Spaces

Use the slash modifier to select a colour space. For details on how scaling works per space, see [Background Saturation](/guide/saturation#how-scaling-works).

```html
<div class="outline-blue-500 -outline-saturation-30/oklch">...</div>
<div class="outline-blue-500 -outline-saturation-30/hsl">...</div>
<div class="outline-blue-500 -outline-saturation-30/oklab">...</div>
```
