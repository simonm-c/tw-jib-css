---
title: Base Select Picker
---

<!-- llm-context: picker module (experimental) — CSS appearance: base-select and custom variants for ::picker(select), ::picker-icon, and ::checkmark pseudo-elements. Chromium only, Firefox WIP. -->

# Base Select Picker

The `appearance: base-select` value opts into the new customisable `<select>` rendering. Combined with `::picker(select)`, `::picker-icon`, and `::checkmark` pseudo-elements, you can fully style native select dropdowns without JavaScript.

::: warning Browser Support
`appearance: base-select` is supported in Chromium browsers only. Firefox support is in progress. These utilities and variants will be silently ignored in unsupported browsers.
:::

::: tip Import
Included in `@import 'tw-jib-css/experimental'`. To import individually:
```css
@import 'tw-jib-css/experimental/picker';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'appearance-base-select', styles: 'appearance: base-select' },
  { class: 'picker:{utility}', styles: 'Targets ::picker(select) — the dropdown popup' },
  { class: 'picker-icon:{utility}', styles: 'Targets ::picker-icon — the dropdown arrow' },
  { class: 'checkmark:{utility}', styles: 'Targets ::checkmark — the selected-item indicator' },
]" />

## Basic Usage

Apply `appearance-base-select` to a `<select>` element to opt into customisable rendering:

<Example>
  <select class="appearance-base-select px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm text-gray-700">
    <option>Apple</option>
    <option>Banana</option>
    <option>Cherry</option>
  </select>
</Example>

## Fully Styled Select

Use the custom variants to style every part of the select:

<Example>
  <select class="appearance-base-select px-4 py-3 border-2 border-gray-300 rounded-xl bg-white text-sm text-gray-700 picker:bg-white picker:border-2 picker:border-gray-200 picker:rounded-xl picker:shadow-lg picker:p-2 picker-icon:text-blue-500 picker-icon:transition-all open:picker-icon:rotate-180 open:picker-icon:text-green-500 checkmark:text-green-500">
    <option>Apple</option>
    <option>Banana</option>
    <option>Cherry</option>
    <option>Date</option>
    <option>Elderberry</option>
  </select>
</Example>

## Custom Variants

### `picker:*`

Targets the dropdown popup via `::picker(select)`. Automatically sets `appearance: base-select` on the parent `<select>`.

<Example>
  <select class="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm picker:bg-white picker:rounded-xl picker:shadow-xl picker:p-3 picker:border picker:border-gray-200">
    <option>Styled dropdown popup</option>
    <option>With shadow and rounded corners</option>
  </select>
</Example>

### `picker-icon:*`

Targets the dropdown arrow icon via `::picker-icon`. Also auto-sets `appearance: base-select`.

<Example>
  <select class="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm picker-icon:text-red-500 picker-icon:transition-all open:picker-icon:rotate-180 open:picker-icon:text-green-500">
    <option>Red icon, green when open</option>
    <option>Rotates on open</option>
  </select>
</Example>

### `checkmark:*`

Targets the `::checkmark` pseudo-element that appears next to the selected option.

<Example>
  <select class="appearance-base-select px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm checkmark:text-green-500">
    <option>Green checkmark</option>
    <option>On the selected item</option>
  </select>
</Example>

