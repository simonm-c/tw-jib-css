---
title: Background Clip Test Fixtures
layout: page
---

# Background clip test fixtures

Visual test page for `bg-clip-*` against the composited `background` shorthand.

Every composited utility paints a layered background whose last layer is the
border gradient, so each cell carries one. Without it that layer is a
transparent placeholder and a clip that wrongly skipped it would look identical
to one that reached it.

`Ag` is the glyph payload: `bg-clip-text` is only observable on a cell that has
text to clip to.

## Default clip, no `bg-clip-*` present

The pattern layers take the padding box, the border gradient the border box.

<div class="grid grid-cols-4 gap-4 my-6">
  <div>
    <div data-test="default-comic" class="bg-comic-red-500 comic-dot-2 comic-gap-4 border-8 border-linear-to-r border-from-emerald-400 border-to-yellow-300 h-24 p-2 text-2xl font-black">Ag</div>
    <p class="text-xs font-mono text-center mt-1">comic</p>
  </div>
  <div>
    <div data-test="default-pixel" class="bg-pixel-red-500 pixel-size-3 pixel-gap-2 border-8 border-linear-to-r border-from-emerald-400 border-to-yellow-300 h-24 p-2 text-2xl font-black">Ag</div>
    <p class="text-xs font-mono text-center mt-1">pixel</p>
  </div>
  <div>
    <div data-test="default-ripple" class="bg-ripple ripple-color-red-500 border-8 border-linear-to-r border-from-emerald-400 border-to-yellow-300 h-24 p-2 text-2xl font-black">Ag</div>
    <p class="text-xs font-mono text-center mt-1">ripple</p>
  </div>
  <div>
    <div data-test="default-linear" class="bg-linear-to-r from-red-500 to-blue-500 border-8 border-linear-to-r border-from-emerald-400 border-to-yellow-300 h-24 p-2 text-2xl font-black">Ag</div>
    <p class="text-xs font-mono text-center mt-1">linear</p>
  </div>
</div>

## `bg-clip-text`

Every layer clips to the glyphs, the border gradient included.

<div class="grid grid-cols-4 gap-4 my-6">
  <div>
    <div data-test="text-comic" class="bg-comic-red-500 comic-dot-2 comic-gap-4 border-8 border-linear-to-r border-from-emerald-400 border-to-yellow-300 bg-clip-text text-transparent h-24 p-2 text-2xl font-black">Ag</div>
    <p class="text-xs font-mono text-center mt-1">comic</p>
  </div>
  <div>
    <div data-test="text-pixel" class="bg-pixel-red-500 pixel-size-3 pixel-gap-2 border-8 border-linear-to-r border-from-emerald-400 border-to-yellow-300 bg-clip-text text-transparent h-24 p-2 text-2xl font-black">Ag</div>
    <p class="text-xs font-mono text-center mt-1">pixel</p>
  </div>
  <div>
    <div data-test="text-ripple" class="bg-ripple ripple-color-red-500 border-8 border-linear-to-r border-from-emerald-400 border-to-yellow-300 bg-clip-text text-transparent h-24 p-2 text-2xl font-black">Ag</div>
    <p class="text-xs font-mono text-center mt-1">ripple</p>
  </div>
  <div>
    <div data-test="text-linear" class="bg-linear-to-r from-red-500 to-blue-500 border-8 border-linear-to-r border-from-emerald-400 border-to-yellow-300 bg-clip-text text-transparent h-24 p-2 text-2xl font-black">Ag</div>
    <p class="text-xs font-mono text-center mt-1">linear</p>
  </div>
</div>

## The other box keywords

<div class="grid grid-cols-4 gap-4 my-6">
  <div>
    <div data-test="content-comic" class="bg-comic-red-500 comic-dot-2 comic-gap-4 border-8 border-linear-to-r border-from-emerald-400 border-to-yellow-300 bg-clip-content h-24 p-2 text-2xl font-black">Ag</div>
    <p class="text-xs font-mono text-center mt-1">bg-clip-content</p>
  </div>
  <div>
    <div data-test="border-comic" class="bg-comic-red-500 comic-dot-2 comic-gap-4 border-8 border-linear-to-r border-from-emerald-400 border-to-yellow-300 bg-clip-border h-24 p-2 text-2xl font-black">Ag</div>
    <p class="text-xs font-mono text-center mt-1">bg-clip-border</p>
  </div>
  <div>
    <div data-test="padding-comic" class="bg-comic-red-500 comic-dot-2 comic-gap-4 border-8 border-linear-to-r border-from-emerald-400 border-to-yellow-300 bg-clip-padding h-24 p-2 text-2xl font-black">Ag</div>
    <p class="text-xs font-mono text-center mt-1">bg-clip-padding</p>
  </div>
</div>

## Unparseable slot values

The slots are registered with a closed keyword list, so a value outside it is
rejected at assignment and the initial value stands. Were they registered as
`*`, the token would reach the shorthand and invalidate it at computed-value
time, and these cells would paint no background at all.

<div class="grid grid-cols-4 gap-4 my-6">
  <div>
    <div data-test="invalid-comic" class="bg-comic-red-500 comic-dot-2 comic-gap-4 border-8 border-linear-to-r border-from-emerald-400 border-to-yellow-300 [--jib-background-clip:nonsense] [--jib-border-gradient-clip:nonsense] h-24 p-2 text-2xl font-black">Ag</div>
    <p class="text-xs font-mono text-center mt-1">comic, both slots</p>
  </div>
  <div>
    <div data-test="invalid-pixel" class="bg-pixel-red-500 pixel-size-3 pixel-gap-2 border-8 border-linear-to-r border-from-emerald-400 border-to-yellow-300 [--jib-background-clip:nonsense] [--jib-border-gradient-clip:nonsense] h-24 p-2 text-2xl font-black">Ag</div>
    <p class="text-xs font-mono text-center mt-1">pixel, both slots</p>
  </div>
</div>
