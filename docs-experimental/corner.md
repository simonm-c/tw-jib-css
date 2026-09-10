---
title: Corner Shape
---

<!-- llm-context: corner module (experimental). CSS corner-shape property for squircle, bevel, scoop, notch, and superellipse corner rendering. Chrome 139+, ~68% browser support. All utilities wrapped in @supports (corner-shape: squircle). -->

# Corner Shape

The CSS `corner-shape` property controls how border-radius curves are drawn. Instead of standard circular arcs, you can use squircles (iOS-style), bevels, scoops, notches, and arbitrary superellipse values.

::: warning Browser Support
`corner-shape` is supported in Chrome 139+ (~68% of users). Firefox and Safari do not support it yet. Every utility sits inside `@supports (corner-shape: squircle)`, so an engine without it ignores them.
:::

## Quick reference

<UtilityTable :rows="[
  { class: 'corner-round', styles: 'corner-shape: round' },
  { class: 'corner-scoop', styles: 'corner-shape: scoop' },
  { class: 'corner-bevel', styles: 'corner-shape: bevel' },
  { class: 'corner-notch', styles: 'corner-shape: notch' },
  { class: 'corner-square', styles: 'corner-shape: square' },
  { class: 'corner-squircle', styles: 'corner-shape: squircle' },
  { class: 'corner-<number>', styles: 'corner-shape: superellipse(<number>)' },
  { class: 'corner-infinity', styles: 'corner-shape: superellipse(infinity)' },
  { class: '-corner-<number>', styles: 'corner-shape: superellipse(-<number>)' },
  { class: 'corner-t-<value>', styles: 'corner-top-left-shape + corner-top-right-shape: <value>' },
  { class: 'corner-r-<value>', styles: 'corner-top-right-shape + corner-bottom-right-shape: <value>' },
  { class: 'corner-b-<value>', styles: 'corner-bottom-left-shape + corner-bottom-right-shape: <value>' },
  { class: 'corner-l-<value>', styles: 'corner-top-left-shape + corner-bottom-left-shape: <value>' },
  { class: 'corner-s-<value>', styles: 'corner-start-start-shape + corner-end-start-shape: <value>' },
  { class: 'corner-e-<value>', styles: 'corner-start-end-shape + corner-end-end-shape: <value>' },
  { class: 'corner-tl-<value>', styles: 'corner-top-left-shape: <value>' },
  { class: 'corner-tr-<value>', styles: 'corner-top-right-shape: <value>' },
  { class: 'corner-bl-<value>', styles: 'corner-bottom-left-shape: <value>' },
  { class: 'corner-br-<value>', styles: 'corner-bottom-right-shape: <value>' },
  { class: 'corner-ss-<value>', styles: 'corner-start-start-shape: <value>' },
  { class: 'corner-se-<value>', styles: 'corner-start-end-shape: <value>' },
  { class: 'corner-ee-<value>', styles: 'corner-end-end-shape: <value>' },
  { class: 'corner-es-<value>', styles: 'corner-end-start-shape: <value>' },
]" />

## Basic usage

Combine `corner-*` with `rounded-*` to change how corners are drawn:

<Example>
  <div class="flex gap-4">
    <div class="rounded-2xl bg-blue-500 p-8 text-white text-sm text-center">Default round</div>
    <div class="rounded-2xl corner-squircle bg-blue-500 p-8 text-white text-sm text-center">Squircle</div>
  </div>
</Example>

The `corner-shape` property changes the curve shape. You still need `border-radius` (`rounded-*`) to set the corner size.

## Named shapes

Six named shapes:

<Example>
  <div class="grid grid-cols-3 gap-3 w-full max-w-lg">
    <div class="rounded-2xl corner-round bg-gray-200 p-6 text-center text-xs text-gray-600">round</div>
    <div class="rounded-2xl corner-scoop bg-gray-200 p-6 text-center text-xs text-gray-600">scoop</div>
    <div class="rounded-2xl corner-bevel bg-gray-200 p-6 text-center text-xs text-gray-600">bevel</div>
    <div class="rounded-2xl corner-notch bg-gray-200 p-6 text-center text-xs text-gray-600">notch</div>
    <div class="rounded-2xl corner-square bg-gray-200 p-6 text-center text-xs text-gray-600">square</div>
    <div class="rounded-2xl corner-squircle bg-gray-200 p-6 text-center text-xs text-gray-600">squircle</div>
  </div>
</Example>

## Superellipse values

Use numeric values to control the superellipse exponent:

<Example>
  <div class="flex gap-2 items-end">
    <div class="flex flex-col items-center gap-1">
      <div class="rounded-2xl corner-0.5 bg-blue-500 size-16"></div>
      <span class="text-[10px] text-gray-500">0.5</span>
    </div>
    <div class="flex flex-col items-center gap-1">
      <div class="rounded-2xl corner-1 bg-blue-500 size-16"></div>
      <span class="text-[10px] text-gray-500">1</span>
    </div>
    <div class="flex flex-col items-center gap-1">
      <div class="rounded-2xl corner-2 bg-blue-500 size-16"></div>
      <span class="text-[10px] text-gray-500">2</span>
    </div>
    <div class="flex flex-col items-center gap-1">
      <div class="rounded-2xl corner-3 bg-blue-500 size-16"></div>
      <span class="text-[10px] text-gray-500">3</span>
    </div>
    <div class="flex flex-col items-center gap-1">
      <div class="rounded-2xl corner-infinity bg-blue-500 size-16"></div>
      <span class="text-[10px] text-gray-500">infinity</span>
    </div>
  </div>
</Example>

## Side and corner variants

Apply shapes to specific sides or individual corners:

<Example>
  <div class="flex gap-3">
    <div class="rounded-2xl corner-t-squircle bg-blue-500 p-6 text-white text-xs text-center">corner-t-squircle</div>
    <div class="rounded-2xl corner-tr-bevel bg-blue-500 p-6 text-white text-xs text-center">corner-tr-bevel</div>
    <div class="rounded-2xl corner-t-squircle corner-b-bevel bg-blue-500 p-6 text-white text-xs text-center">mixed</div>
  </div>
</Example>

### Physical vs logical

| Logical       | LTR Equivalent |
| ------------- | -------------- |
| `corner-s-*`  | `corner-l-*`   |
| `corner-e-*`  | `corner-r-*`   |
| `corner-ss-*` | `corner-tl-*`  |
| `corner-se-*` | `corner-tr-*`  |
| `corner-ee-*` | `corner-br-*`  |
| `corner-es-*` | `corner-bl-*`  |

## Negative values

Prefix with `-` to negate the exponent, which flips the curve inward:

<Example>
  <div class="flex gap-2 items-end">
    <div class="flex flex-col items-center gap-1">
      <div class="rounded-2xl corner-1 bg-blue-500 size-20"></div>
      <span class="text-[10px] text-gray-500">corner-1</span>
    </div>
    <div class="flex flex-col items-center gap-1">
      <div class="rounded-2xl -corner-1 bg-blue-500 size-20"></div>
      <span class="text-[10px] text-gray-500">-corner-1</span>
    </div>
    <div class="flex flex-col items-center gap-1">
      <div class="rounded-2xl corner-2 bg-blue-500 size-20"></div>
      <span class="text-[10px] text-gray-500">corner-2</span>
    </div>
    <div class="flex flex-col items-center gap-1">
      <div class="rounded-2xl -corner-2 bg-blue-500 size-20"></div>
      <span class="text-[10px] text-gray-500">-corner-2</span>
    </div>
    <div class="flex flex-col items-center gap-1">
      <div class="rounded-2xl corner-3 bg-blue-500 size-20"></div>
      <span class="text-[10px] text-gray-500">corner-3</span>
    </div>
    <div class="flex flex-col items-center gap-1">
      <div class="rounded-2xl -corner-3 bg-blue-500 size-20"></div>
      <span class="text-[10px] text-gray-500">-corner-3</span>
    </div>
  </div>
</Example>

Negative values work with all directional variants:

<Example>
  <div class="flex gap-3">
    <div class="flex flex-col items-center gap-1">
      <div class="rounded-2xl -corner-t-3 bg-blue-500 size-20"></div>
      <span class="text-[10px] text-gray-500">-corner-t-3</span>
    </div>
    <div class="flex flex-col items-center gap-1">
      <div class="rounded-2xl -corner-b-3 bg-blue-500 size-20"></div>
      <span class="text-[10px] text-gray-500">-corner-b-3</span>
    </div>
    <div class="flex flex-col items-center gap-1">
      <div class="rounded-2xl -corner-tl-3 corner-br-3 bg-blue-500 size-20"></div>
      <span class="text-[10px] text-gray-500">-corner-tl-3 corner-br-3</span>
    </div>
    <div class="flex flex-col items-center gap-1">
      <div class="rounded-2xl -corner-2 corner-t-squircle bg-blue-500 size-20"></div>
      <span class="text-[10px] text-gray-500">-corner-2 corner-t-squircle</span>
    </div>
  </div>
</Example>

## Using a custom value

Use the `corner-[<value>]` syntax to pass a superellipse value of your own:

<Example>
  <div class="flex gap-4">
    <div class="rounded-2xl corner-2.5 bg-blue-500 p-8 text-white text-sm text-center">
      corner-2.5
    </div>
    <div class="rounded-2xl corner-[superellipse(4.2)] bg-blue-500 p-8 text-white text-sm text-center">
      corner-[superellipse(4.2)]
    </div>
  </div>
</Example>

## Using a custom variable

For CSS variables, you can also use the `corner-(--custom-property)` syntax:

<Example>
  <div class="rounded-2xl corner-(--brand-roundness) bg-blue-500 p-8 text-white text-sm text-center max-w-xs mx-auto [--brand-roundness:squircle]">
    corner-(--brand-roundness)
  </div>
</Example>

This is shorthand for `corner-[var(--brand-roundness)]`. It adds the `var()` wrapper for you.

## Applying conditionally

### Hover and focus states

Prefix a corner utility with a variant like `hover:*`:

<Example>
  <div class="rounded-2xl corner-round hover:corner-squircle bg-blue-500 p-8 text-white text-sm text-center max-w-xs mx-auto cursor-pointer transition-all">
    Hover for squircle
  </div>
</Example>

## Import

Included in `@import 'tw-jib-css-experimental'`. To take it on its own, with no other
experimental module, and none of the [`@function` overrides](/overview#the-function-overrides):

```css
@import 'tw-jib-css-experimental/corner';
```

This entry reads nothing from `tw-jib-css`, so it costs you no color machinery you
aren't using.
