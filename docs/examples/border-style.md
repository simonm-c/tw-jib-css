---
title: Border Style Test Fixtures
layout: page
---

# Border style test fixtures

Visual test page for per-side `border-style` against Tailwind's width utilities.

Every width utility re-asserts a style, so each cell pairs a style with a width:
without one the style is never read, and without the other the border has no
thickness to show it. The four unstyled sides of a per-side cell read `solid` at
zero width, from Tailwind's own `border: 0 solid` preflight.

## One side styled, all-sides width

<div class="grid grid-cols-4 gap-4 my-6">
  <div data-test="side-top" class="border-8 border-t-groove border-gray-400 h-20"></div>
  <div data-test="side-right" class="border-8 border-r-ridge border-gray-400 h-20"></div>
  <div data-test="side-bottom" class="border-8 border-b-inset border-gray-400 h-20"></div>
  <div data-test="side-left" class="border-8 border-l-outset border-gray-400 h-20"></div>
</div>

## Per-side style over an all-sides style

<div class="grid grid-cols-2 gap-4 my-6">
  <div data-test="over-all-sides" class="border-8 border-groove border-t-ridge border-gray-400 h-20"></div>
  <div data-test="over-stock" class="border-8 border-dashed border-t-groove border-gray-400 h-20"></div>
</div>

## Axis variants

<div class="grid grid-cols-2 gap-4 my-6">
  <div data-test="axis-x" class="border-8 border-x-dotted border-gray-400 h-20"></div>
  <div data-test="axis-y" class="border-8 border-y-double border-gray-400 h-20"></div>
</div>

## Logical variants

<div class="grid grid-cols-2 gap-4 my-6">
  <div data-test="logical-start" class="border-8 border-s-groove border-gray-400 h-20"></div>
  <div data-test="logical-end" class="border-8 border-e-ridge border-gray-400 h-20"></div>
</div>

<div dir="rtl" class="grid grid-cols-2 gap-4 my-6">
  <div data-test="rtl-start" class="border-8 border-s-groove border-gray-400 h-20"></div>
  <div data-test="rtl-end" class="border-8 border-e-ridge border-gray-400 h-20"></div>
</div>

## Widths that sort after the style

The variant sorts last, so its width utility is the one that re-asserts the
style. Hover each cell; the style must not change.

<div class="grid grid-cols-3 gap-4 my-6">
  <div data-test="hover-side" class="border-8 border-t-groove hover:border-t-4 border-gray-400 h-20"></div>
  <div data-test="hover-all" class="border-4 border-groove hover:border-8 border-gray-400 h-20"></div>
  <div data-test="hover-logical" class="border-8 border-s-ridge hover:border-s-4 border-gray-400 h-20"></div>
</div>

## Widths in every form

<div class="grid grid-cols-4 gap-4 my-6">
  <div data-test="width-static" class="border border-t-groove border-gray-400 h-20"></div>
  <div data-test="width-number" class="border-8 border-t-groove border-gray-400 h-20"></div>
  <div data-test="width-arbitrary" class="border-[6px] border-t-groove border-gray-400 h-20"></div>
  <div data-test="width-side-static" class="border-t border-t-groove border-gray-400 h-20"></div>
</div>

## Stock Tailwind, unchanged

<div class="grid grid-cols-3 gap-4 my-6">
  <div data-test="stock-plain" class="border-8 border-gray-400 h-20"></div>
  <div data-test="stock-dashed" class="border-8 border-dashed border-gray-400 h-20"></div>
  <div data-test="stock-dotted" class="border-8 border-dotted border-gray-400 h-20"></div>
</div>

## Nested boxes

A child's own width utility re-reads the four side slots. The parent's per-side
style must not reach it.

<div class="my-6">
  <div data-test="nest-parent" class="border-8 border-t-groove border-gray-400 p-4">
    <div data-test="nest-child" class="border-8 border-gray-400 h-20"></div>
  </div>
</div>
