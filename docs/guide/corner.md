---
title: Corner Shape
---

<!-- llm-context: corner module (experimental) — CSS corner-shape property for squircle, bevel, scoop, notch, and superellipse corner rendering. Chrome 139+, ~68% browser support. All utilities wrapped in @supports (corner-shape: squircle). -->

# Corner Shape

The CSS `corner-shape` property controls how border-radius curves are drawn. Instead of standard circular arcs, you can use squircles (iOS-style), bevels, scoops, notches, and arbitrary superellipse values.

::: warning Browser Support
`corner-shape` is supported in Chrome 139+ (~68% of users). Firefox and Safari do not support it yet. All utilities are wrapped in `@supports (corner-shape: squircle)` and will be silently ignored in unsupported browsers.
:::

::: tip Import
Included in `@import 'tw-jib-css/experimental'`. To import individually:
```css
@import 'tw-jib-css/experimental/corner';
```
:::

## Quick Reference

<QuickReference :rows="[
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

## Basic Usage

Combine `corner-*` with `rounded-*` to change how corners are drawn:

<Example>
  <div class="flex gap-4">
    <div class="rounded-2xl bg-blue-500 p-8 text-white text-sm text-center">Default round</div>
    <div class="rounded-2xl corner-squircle bg-blue-500 p-8 text-white text-sm text-center">Squircle</div>
  </div>
</Example>

The `corner-shape` property modifies the curve shape — you still need `border-radius` (`rounded-*`) to set the corner size.

## Named Shapes

Each named shape produces a distinct visual effect:

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

## Superellipse Values

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

## Side and Corner Variants

Apply shapes to specific sides or individual corners:

<Example>
  <div class="flex gap-3">
    <div class="rounded-2xl corner-t-squircle bg-blue-500 p-6 text-white text-xs text-center">corner-t-squircle</div>
    <div class="rounded-2xl corner-tr-bevel bg-blue-500 p-6 text-white text-xs text-center">corner-tr-bevel</div>
    <div class="rounded-2xl corner-t-squircle corner-b-bevel bg-blue-500 p-6 text-white text-xs text-center">mixed</div>
  </div>
</Example>

### Physical vs Logical

| Logical | LTR Equivalent |
| --- | --- |
| `corner-s-*` | `corner-l-*` |
| `corner-e-*` | `corner-r-*` |
| `corner-ss-*` | `corner-tl-*` |
| `corner-se-*` | `corner-tr-*` |
| `corner-ee-*` | `corner-br-*` |
| `corner-es-*` | `corner-bl-*` |

## Negative Values

Prefix with `-` to negate the superellipse exponent, which inverts the curve direction:

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

Use the `corner-[<value>]` syntax to set the corner shape based on a completely custom value:

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
  <div class="rounded-2xl corner-(--brand-roundness) bg-blue-500 p-8 text-white text-sm text-center max-w-xs mx-auto" style="--brand-roundness: squircle">
    corner-(--brand-roundness)
  </div>
</Example>

This is just a shorthand for `corner-[var(--brand-roundness)]` that adds the `var()` function for you automatically.

## Applying conditionally

### Hover and focus states

Prefix a corner utility with a state variant like `hover:*` to only apply it in that state:

<Example>
  <div class="rounded-2xl corner-round hover:corner-squircle bg-blue-500 p-8 text-white text-sm text-center max-w-xs mx-auto cursor-pointer transition-all">
    Hover for squircle
  </div>
</Example>
