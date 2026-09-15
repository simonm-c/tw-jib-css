---
title: Base Select Picker
---

<!-- llm-context: picker module (experimental). CSS appearance: base-select and custom variants for ::picker(select), ::picker-icon, and ::checkmark pseudo-elements. Chromium only, Firefox WIP. -->

# Base Select Picker

The `appearance: base-select` value opts a `<select>` into rendering you can reach. With the `::picker(select)`, `::picker-icon` and `::checkmark` pseudo-elements, you can style a native dropdown without JavaScript.

::: warning Browser Support
`appearance: base-select` is supported in Chromium browsers only. Firefox support is in progress. An engine without it ignores these utilities and variants.
:::

## Quick reference

<UtilityTable :rows="[
  { class: 'appearance-base-select', styles: 'appearance: base-select' },
  { class: 'picker:<utility>', styles: 'Targets ::picker(select), the dropdown popup' },
  { class: 'picker-icon:<utility>', styles: 'Targets ::picker-icon, the dropdown arrow' },
  { class: 'checkmark:<utility>', styles: 'Targets ::checkmark, the selected-item indicator' },
]" />

## Basic usage

Apply `appearance-base-select` to a `<select>` element to opt into customisable rendering:

<Example>
  <select class="appearance-base-select px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm text-gray-700">
    <option>Apple</option>
    <option>Banana</option>
    <option>Cherry</option>
  </select>
</Example>

## Fully styled select

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

## Custom variants

### `picker:*`

Targets the dropdown popup via `::picker(select)`, and sets `appearance: base-select` on the parent `<select>` for you.

<Example>
  <select class="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm picker:bg-white picker:rounded-xl picker:shadow-xl picker:p-3 picker:border picker:border-gray-200">
    <option>Styled dropdown popup</option>
    <option>With shadow and rounded corners</option>
  </select>
</Example>

### `picker-icon:*`

Targets the dropdown arrow via `::picker-icon`, and also sets `appearance: base-select`.

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

## Import

Included in `@import 'tw-jib-css-experimental'`. To take it on its own, with no other
experimental module, and none of the [`@function` overrides](/guide/installation#the-function-overrides):

```css
@import 'tw-jib-css-experimental/picker';
```

This entry reads nothing from `tw-jib-css`, so it costs you no color machinery you
aren't using.
