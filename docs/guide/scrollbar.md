---
title: Scrollbar
---

<!-- llm-context: scrollbar module — standard scrollbar-color, scrollbar-width, and scrollbar-gutter CSS properties via utility classes. No vendor-specific pseudo-elements. -->

# Scrollbar

Style scrollbars using the CSS standard `scrollbar-color`, `scrollbar-width`, and `scrollbar-gutter` properties. Works across all major browsers without vendor-specific pseudo-elements.

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/scrollbar';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'scrollbar-auto', styles: 'scrollbar-color: auto' },
  { class: 'scrollbar-thumb-<color>', styles: '--tw-scrollbar-thumb: <color>; scrollbar-color: var(--tw-scrollbar-thumb) var(--tw-scrollbar-track)' },
  { class: 'scrollbar-thumb-<color>/<opacity>', styles: '--tw-scrollbar-thumb: <color> at <opacity>% opacity' },
  { class: 'scrollbar-track-<color>', styles: '--tw-scrollbar-track: <color>; scrollbar-color: var(--tw-scrollbar-thumb) var(--tw-scrollbar-track)' },
  { class: 'scrollbar-track-<color>/<opacity>', styles: '--tw-scrollbar-track: <color> at <opacity>% opacity' },
  { class: 'scrollbar-width-auto', styles: 'scrollbar-width: auto' },
  { class: 'scrollbar-width-thin', styles: 'scrollbar-width: thin' },
  { class: 'scrollbar-width-none', styles: 'scrollbar-width: none' },
  { class: 'scrollbar-gutter-auto', styles: 'scrollbar-gutter: auto' },
  { class: 'scrollbar-gutter-stable', styles: 'scrollbar-gutter: stable' },
  { class: 'scrollbar-gutter-stable-both', styles: 'scrollbar-gutter: stable both-edges' },
]" />

## Basic Usage

Add scrollbar styling to any scrollable container:

<Example stretch>
  <div class="overflow-y-auto h-48 scrollbar-thumb-blue-500 scrollbar-track-gray-200 scrollbar-width-thin rounded-lg border border-gray-200 bg-white p-4">
    <p class="mb-4 text-sm text-gray-600">Scroll this container to see the styled scrollbar.</p>
    <p class="mb-4 text-sm text-gray-600">The thumb is blue and the track is light gray.</p>
    <p class="mb-4 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="mb-4 text-sm text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="mb-4 text-sm text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    <p class="mb-4 text-sm text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <p class="mb-4 text-sm text-gray-600">Excepteur sint occaecat cupidatat non proident.</p>
    <p class="text-sm text-gray-600">Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</Example>

## Thumb and Track Colours

Set the thumb (draggable handle) and track (background rail) colours independently:

<Example stretch>
  <div class="grid grid-cols-2 gap-4">
    <div class="overflow-y-auto h-36 scrollbar-thumb-indigo-500 scrollbar-track-indigo-100 rounded-lg border border-gray-200 bg-white p-3">
      <p class="text-xs text-gray-600 mb-3">Indigo thumb + track</p>
      <div class="h-64"></div>
    </div>
    <div class="overflow-y-auto h-36 scrollbar-thumb-gray-700 rounded-lg border border-gray-200 bg-white p-3">
      <p class="text-xs text-gray-600 mb-3">Dark thumb, transparent track</p>
      <div class="h-64"></div>
    </div>
  </div>
</Example>

The default thumb colour is `#7d7d7d` and the default track is `transparent`.

## Opacity

Control thumb and track opacity with the slash modifier:

<Example stretch>
  <div class="grid grid-cols-3 gap-4">
    <div class="overflow-y-auto h-36 scrollbar-thumb-blue-500/100 scrollbar-track-blue-100 scrollbar-width-thin rounded-lg border border-gray-200 bg-white p-3">
      <p class="text-xs text-gray-600 mb-3">thumb /100</p>
      <div class="h-64"></div>
    </div>
    <div class="overflow-y-auto h-36 scrollbar-thumb-blue-500/50 scrollbar-track-blue-100 scrollbar-width-thin rounded-lg border border-gray-200 bg-white p-3">
      <p class="text-xs text-gray-600 mb-3">thumb /50</p>
      <div class="h-64"></div>
    </div>
    <div class="overflow-y-auto h-36 scrollbar-thumb-blue-500/25 scrollbar-track-blue-100/50 scrollbar-width-thin rounded-lg border border-gray-200 bg-white p-3">
      <p class="text-xs text-gray-600 mb-3">thumb /25 track /50</p>
      <div class="h-64"></div>
    </div>
  </div>
</Example>

## Width

Control scrollbar thickness:

<Example stretch>
  <div class="grid grid-cols-3 gap-4">
    <div class="overflow-y-auto h-36 scrollbar-thumb-gray-400 scrollbar-width-auto rounded-lg border border-gray-200 bg-white p-3">
      <p class="text-xs text-gray-600 mb-3">auto</p>
      <div class="h-64"></div>
    </div>
    <div class="overflow-y-auto h-36 scrollbar-thumb-gray-400 scrollbar-width-thin rounded-lg border border-gray-200 bg-white p-3">
      <p class="text-xs text-gray-600 mb-3">thin</p>
      <div class="h-64"></div>
    </div>
    <div class="overflow-y-auto h-36 scrollbar-thumb-gray-400 scrollbar-width-none rounded-lg border border-gray-200 bg-white p-3">
      <p class="text-xs text-gray-600 mb-3">none (still scrollable)</p>
      <div class="h-64"></div>
    </div>
  </div>
</Example>

## Gutter

Reserve space for the scrollbar to prevent layout shifts when content becomes scrollable:

<Example stretch>
  <div class="grid grid-cols-2 gap-4">
    <div class="overflow-auto h-36 scrollbar-gutter-stable scrollbar-thumb-gray-400 scrollbar-width-thin rounded-lg border border-gray-200 bg-white p-3">
      <p class="text-xs text-gray-600">scrollbar-gutter-stable</p>
      <p class="text-xs text-gray-400 mt-2">Space reserved even with no overflow.</p>
    </div>
    <div class="overflow-auto h-36 scrollbar-gutter-stable-both scrollbar-thumb-gray-400 scrollbar-width-thin rounded-lg border border-gray-200 bg-white p-3">
      <p class="text-xs text-gray-600">scrollbar-gutter-stable-both</p>
      <p class="text-xs text-gray-400 mt-2">Space on both sides for symmetry.</p>
    </div>
  </div>
</Example>

## Using a custom value

Use the `scrollbar-thumb-[<value>]` syntax to set scrollbar colours based on a completely custom value:

<Example stretch>
  <div class="overflow-y-auto h-36 scrollbar-thumb-[#ff6b35] scrollbar-track-[oklch(0.95_0_0)] scrollbar-width-thin rounded-lg border border-gray-200 bg-white p-4">
    <p class="text-sm text-gray-600 mb-4">Custom scrollbar colours via arbitrary values.</p>
    <div class="h-64"></div>
  </div>
</Example>

## Using a custom variable

For CSS variables, you can also use the `scrollbar-thumb-(--custom-property)` syntax:

<Example stretch>
  <div class="overflow-y-auto h-36 scrollbar-thumb-(--brand-color) scrollbar-track-(--brand-track) scrollbar-width-thin rounded-lg border border-gray-200 bg-white p-4" style="--brand-color: #6366f1; --brand-track: #e0e7ff">
    <p class="text-sm text-gray-600 mb-4">Thumb and track colours from CSS variables.</p>
    <div class="h-64"></div>
  </div>
</Example>

This is just a shorthand for `scrollbar-thumb-[var(--brand-color)]` that adds the `var()` function for you automatically.

## Applying conditionally

### Hover and focus states

Prefix a scrollbar utility with a state variant like `hover:*` to only apply it in that state:

<Example stretch>
  <div class="overflow-y-auto h-36 scrollbar-thumb-gray-400 hover:scrollbar-thumb-blue-600 scrollbar-width-thin rounded-lg border border-gray-200 bg-white p-4 transition-colors cursor-pointer">
    <p class="text-sm text-gray-600 mb-4">Hover to change thumb colour.</p>
    <div class="h-64"></div>
  </div>
</Example>
