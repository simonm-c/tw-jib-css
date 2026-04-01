---
title: Grid
---

<!-- llm-context: grid module — CSS Grid template-areas and grid-area utilities. TailwindCSS v4 provides grid-cols and grid-rows but not grid-template-areas. -->

# Grid

Utilities for CSS Grid named template areas. TailwindCSS v4 provides `grid-cols-*` and `grid-rows-*` but doesn't expose `grid-template-areas` — this module adds that.

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/grid';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'grid-template-areas-[<value>]', styles: 'grid-template-areas: <value>' },
  { class: 'grid-area-<integer>', styles: 'grid-area: <integer>' },
  { class: 'grid-area-[<value>]', styles: 'grid-area: <value>' },
]" />

## Basic Usage

### Defining template areas

Use `grid-template-areas-[...]` with arbitrary value syntax to define named grid areas. Use underscores for spaces and single quotes to delimit each row:

<Example stretch>
  <div class="grid grid-template-areas-['header_header'_'sidebar_main'_'footer_footer'] grid-cols-2 grid-rows-[auto_1fr_auto] gap-2 h-64">
    <div class="grid-area-[header] bg-blue-500 rounded-lg p-3 text-white text-sm font-medium flex items-center justify-center">header</div>
    <div class="grid-area-[sidebar] bg-gray-200 rounded-lg p-3 text-gray-700 text-sm flex items-center justify-center">sidebar</div>
    <div class="grid-area-[main] bg-white border border-gray-200 rounded-lg p-3 text-gray-700 text-sm flex items-center justify-center">main</div>
    <div class="grid-area-[footer] bg-gray-800 rounded-lg p-3 text-white text-sm font-medium flex items-center justify-center">footer</div>
  </div>
</Example>

### Holy grail layout

<Example stretch>
  <div class="grid grid-template-areas-['header_header_header'_'nav_main_aside'_'footer_footer_footer'] grid-cols-[120px_1fr_120px] grid-rows-[auto_1fr_auto] gap-2 h-72">
    <div class="grid-area-[header] bg-blue-500 rounded-lg p-3 text-white text-sm font-medium flex items-center justify-center">header</div>
    <div class="grid-area-[nav] bg-gray-200 rounded-lg p-3 text-gray-700 text-xs flex items-center justify-center">nav</div>
    <div class="grid-area-[main] bg-white border border-gray-200 rounded-lg p-3 text-gray-700 text-sm flex items-center justify-center">main</div>
    <div class="grid-area-[aside] bg-gray-200 rounded-lg p-3 text-gray-700 text-xs flex items-center justify-center">aside</div>
    <div class="grid-area-[footer] bg-gray-800 rounded-lg p-3 text-white text-sm font-medium flex items-center justify-center">footer</div>
  </div>
</Example>

## Integer Grid Areas

Use `grid-area-{n}` to set a numeric grid area, useful for placing items by line number rather than named areas:

<Example stretch>
  <div class="grid grid-cols-3 gap-2">
    <div class="grid-area-1 bg-blue-500 rounded-lg p-3 text-white text-sm text-center">grid-area-1</div>
    <div class="grid-area-2 bg-blue-400 rounded-lg p-3 text-white text-sm text-center">grid-area-2</div>
    <div class="grid-area-3 bg-blue-300 rounded-lg p-3 text-white text-sm text-center">grid-area-3</div>
  </div>
</Example>

## Using a custom value

Since `grid-template-areas` requires complex string values, this utility uses arbitrary value syntax (`[...]`) as the primary interface:

- **Underscores** become spaces: `header_header` becomes `header header`
- **Single quotes** delimit rows: `'header_header'` defines one row
- **Multiple rows** — separate with underscores between quoted groups
- **Empty cells** — use `.` (dot) to define empty areas

Use `grid-area-[<value>]` for spanning or complex placement:

<Example stretch>
  <div class="grid grid-cols-3 gap-2">
    <div class="grid-area-[span_2/span_2] bg-blue-500 rounded-lg p-3 text-white text-sm text-center">grid-area-[span_2/span_2]</div>
    <div class="bg-gray-200 rounded-lg p-3 text-gray-700 text-sm text-center">auto</div>
    <div class="bg-gray-200 rounded-lg p-3 text-gray-700 text-sm text-center">auto</div>
  </div>
</Example>

### Empty cells

<Example stretch>
  <div class="grid grid-template-areas-['header_header'_'._main'_'footer_footer'] grid-cols-2 grid-rows-[auto_1fr_auto] gap-2 h-48">
    <div class="grid-area-[header] bg-blue-500 rounded-lg p-3 text-white text-sm font-medium flex items-center justify-center">header</div>
    <div class="grid-area-[main] bg-white border border-gray-200 rounded-lg p-3 text-gray-700 text-sm flex items-center justify-center">main</div>
    <div class="grid-area-[footer] bg-gray-800 rounded-lg p-3 text-white text-sm font-medium flex items-center justify-center">footer</div>
  </div>
</Example>

## Using a custom variable

For CSS variables, you can also use the `grid-area-(--custom-property)` syntax:

<Example stretch>
  <div class="grid grid-cols-3 gap-2">
    <div class="grid-area-(--hero-area) bg-blue-500 rounded-lg p-3 text-white text-sm text-center" style="--hero-area: span 2 / span 3">
      grid-area-(--hero-area)
    </div>
    <div class="bg-gray-200 rounded-lg p-3 text-gray-700 text-sm text-center">auto</div>
  </div>
</Example>

This is just a shorthand for `grid-area-[var(--hero-area)]` that adds the `var()` function for you automatically.

