---
title: Sub-Pixel Test Fixtures
layout: page
---

# Sub-Pixel Test Fixtures

Visual test page for `bg-pixel-*` utilities.

RGB sub-pixel columns on black background with `screen` blend mode (additive mixing). Cell = `(width * 3 + gap)` wide, `(height + gap)` tall. Gap separates each R|G|B triplet.

## Utility Classes — Primary & Secondary Colors

Defaults: size 1 (width=1px, height=2px), gap 1, bleed 1px.

<div class="grid grid-cols-4 gap-4 my-6">
  <div>
    <div data-test="white" class="bg-pixel-white h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-pixel-white — R+G+B</p>
  </div>
  <div>
    <div data-test="black" class="bg-pixel-black h-32 rounded-lg border border-gray-700"></div>
    <p class="text-xs font-mono text-center mt-1">bg-pixel-black — none</p>
  </div>
  <div>
    <div data-test="red" class="bg-pixel-red-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-pixel-red-500 — R heavy</p>
  </div>
  <div>
    <div data-test="green" class="bg-pixel-green-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-pixel-green-500 — G heavy</p>
  </div>
  <div>
    <div data-test="blue" class="bg-pixel-blue-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-pixel-blue-500 — B heavy</p>
  </div>
  <div>
    <div data-test="cyan" class="bg-pixel-cyan-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-pixel-cyan-500 — G+B</p>
  </div>
  <div>
    <div data-test="magenta" class="bg-pixel-fuchsia-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-pixel-fuchsia-500 — R+B</p>
  </div>
  <div>
    <div data-test="yellow" class="bg-pixel-yellow-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-pixel-yellow-500 — R+G</p>
  </div>
</div>

## Gap Sizes (pixel-gap-*)

All using `bg-pixel-blue-500`. Gap is a multiplier of pixel width (pixel-gap-1 = 1x width).

<div class="grid grid-cols-6 gap-3 my-6">
  <div>
    <div data-test="gap-0.5" class="bg-pixel-blue-500 pixel-gap-0.5 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">gap-0.5</p>
  </div>
  <div>
    <div data-test="gap-1" class="bg-pixel-blue-500 pixel-gap-1 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">gap-1</p>
  </div>
  <div>
    <div data-test="gap-1.5" class="bg-pixel-blue-500 pixel-gap-1.5 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">gap-1.5</p>
  </div>
  <div>
    <div data-test="gap-2" class="bg-pixel-blue-500 pixel-gap-2 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">gap-2</p>
  </div>
  <div>
    <div data-test="gap-4" class="bg-pixel-blue-500 pixel-gap-4 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">gap-4</p>
  </div>
  <div>
    <div data-test="gap-6" class="bg-pixel-blue-500 pixel-gap-6 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">gap-6</p>
  </div>
</div>

## Sub-Pixel Size (pixel-size-*)

Using `bg-pixel-red-500`. Size sets width (spacing/4, so size-1 = 1px); height is always 2x width.

<div class="grid grid-cols-5 gap-3 my-6">
  <div>
    <div data-test="size-1" class="bg-pixel-red-500 pixel-size-1 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">size-1 (1px)</p>
  </div>
  <div>
    <div data-test="size-2" class="bg-pixel-red-500 pixel-size-2 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">size-2 (2px)</p>
  </div>
  <div>
    <div data-test="size-3" class="bg-pixel-red-500 pixel-size-3 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">size-3 (3px)</p>
  </div>
  <div>
    <div data-test="size-4" class="bg-pixel-red-500 pixel-size-4 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">size-4 (4px)</p>
  </div>
  <div>
    <div data-test="size-6" class="bg-pixel-red-500 pixel-size-6 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">size-6 (6px)</p>
  </div>
</div>

## Bleed (pixel-bleed-*)

Using `bg-pixel-white`. From crisp LCD to CRT phosphor glow.

<div class="grid grid-cols-5 gap-3 my-6">
  <div>
    <div data-test="bleed-0" class="bg-pixel-white pixel-bleed-0 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bleed-0 (crisp)</p>
  </div>
  <div>
    <div data-test="bleed-0.5" class="bg-pixel-white pixel-bleed-0.5 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bleed-0.5</p>
  </div>
  <div>
    <div data-test="bleed-1" class="bg-pixel-white pixel-bleed-1 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bleed-1</p>
  </div>
  <div>
    <div data-test="bleed-1.5" class="bg-pixel-white pixel-bleed-1.5 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bleed-1.5</p>
  </div>
  <div>
    <div data-test="bleed-2" class="bg-pixel-white pixel-bleed-2 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bleed-2</p>
  </div>
</div>

### Bleed — All Tailwind Colors (bleed-1)

<div class="grid grid-cols-[auto_1fr_1fr] gap-x-3 gap-y-1 items-center my-6">
  <p class="text-xs font-mono font-bold">Color</p>
  <p class="text-xs font-mono font-bold text-center">bleed-0</p>
  <p class="text-xs font-mono font-bold text-center">bleed-1</p>

  <p class="text-xs font-mono">red-500</p>
  <div data-test="bleed-color-red-0" class="bg-pixel-red-500 pixel-bleed-0 h-16 rounded-lg"></div>
  <div data-test="bleed-color-red-1" class="bg-pixel-red-500 pixel-bleed-1 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">orange-500</p>
  <div data-test="bleed-color-orange-0" class="bg-pixel-orange-500 pixel-bleed-0 h-16 rounded-lg"></div>
  <div data-test="bleed-color-orange-1" class="bg-pixel-orange-500 pixel-bleed-1 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">amber-500</p>
  <div data-test="bleed-color-amber-0" class="bg-pixel-amber-500 pixel-bleed-0 h-16 rounded-lg"></div>
  <div data-test="bleed-color-amber-1" class="bg-pixel-amber-500 pixel-bleed-1 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">yellow-500</p>
  <div data-test="bleed-color-yellow-0" class="bg-pixel-yellow-500 pixel-bleed-0 h-16 rounded-lg"></div>
  <div data-test="bleed-color-yellow-1" class="bg-pixel-yellow-500 pixel-bleed-1 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">lime-500</p>
  <div data-test="bleed-color-lime-0" class="bg-pixel-lime-500 pixel-bleed-0 h-16 rounded-lg"></div>
  <div data-test="bleed-color-lime-1" class="bg-pixel-lime-500 pixel-bleed-1 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">green-500</p>
  <div data-test="bleed-color-green-0" class="bg-pixel-green-500 pixel-bleed-0 h-16 rounded-lg"></div>
  <div data-test="bleed-color-green-1" class="bg-pixel-green-500 pixel-bleed-1 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">emerald-500</p>
  <div data-test="bleed-color-emerald-0" class="bg-pixel-emerald-500 pixel-bleed-0 h-16 rounded-lg"></div>
  <div data-test="bleed-color-emerald-1" class="bg-pixel-emerald-500 pixel-bleed-1 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">teal-500</p>
  <div data-test="bleed-color-teal-0" class="bg-pixel-teal-500 pixel-bleed-0 h-16 rounded-lg"></div>
  <div data-test="bleed-color-teal-1" class="bg-pixel-teal-500 pixel-bleed-1 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">cyan-500</p>
  <div data-test="bleed-color-cyan-0" class="bg-pixel-cyan-500 pixel-bleed-0 h-16 rounded-lg"></div>
  <div data-test="bleed-color-cyan-1" class="bg-pixel-cyan-500 pixel-bleed-1 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">sky-500</p>
  <div data-test="bleed-color-sky-0" class="bg-pixel-sky-500 pixel-bleed-0 h-16 rounded-lg"></div>
  <div data-test="bleed-color-sky-1" class="bg-pixel-sky-500 pixel-bleed-1 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">blue-500</p>
  <div data-test="bleed-color-blue-0" class="bg-pixel-blue-500 pixel-bleed-0 h-16 rounded-lg"></div>
  <div data-test="bleed-color-blue-1" class="bg-pixel-blue-500 pixel-bleed-1 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">indigo-500</p>
  <div data-test="bleed-color-indigo-0" class="bg-pixel-indigo-500 pixel-bleed-0 h-16 rounded-lg"></div>
  <div data-test="bleed-color-indigo-1" class="bg-pixel-indigo-500 pixel-bleed-1 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">violet-500</p>
  <div data-test="bleed-color-violet-0" class="bg-pixel-violet-500 pixel-bleed-0 h-16 rounded-lg"></div>
  <div data-test="bleed-color-violet-1" class="bg-pixel-violet-500 pixel-bleed-1 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">purple-500</p>
  <div data-test="bleed-color-purple-0" class="bg-pixel-purple-500 pixel-bleed-0 h-16 rounded-lg"></div>
  <div data-test="bleed-color-purple-1" class="bg-pixel-purple-500 pixel-bleed-1 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">fuchsia-500</p>
  <div data-test="bleed-color-fuchsia-0" class="bg-pixel-fuchsia-500 pixel-bleed-0 h-16 rounded-lg"></div>
  <div data-test="bleed-color-fuchsia-1" class="bg-pixel-fuchsia-500 pixel-bleed-1 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">pink-500</p>
  <div data-test="bleed-color-pink-0" class="bg-pixel-pink-500 pixel-bleed-0 h-16 rounded-lg"></div>
  <div data-test="bleed-color-pink-1" class="bg-pixel-pink-500 pixel-bleed-1 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">rose-500</p>
  <div data-test="bleed-color-rose-0" class="bg-pixel-rose-500 pixel-bleed-0 h-16 rounded-lg"></div>
  <div data-test="bleed-color-rose-1" class="bg-pixel-rose-500 pixel-bleed-1 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">slate-500</p>
  <div data-test="bleed-color-slate-0" class="bg-pixel-slate-500 pixel-bleed-0 h-16 rounded-lg"></div>
  <div data-test="bleed-color-slate-1" class="bg-pixel-slate-500 pixel-bleed-1 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">gray-500</p>
  <div data-test="bleed-color-gray-0" class="bg-pixel-gray-500 pixel-bleed-0 h-16 rounded-lg"></div>
  <div data-test="bleed-color-gray-1" class="bg-pixel-gray-500 pixel-bleed-1 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">white</p>
  <div data-test="bleed-color-white-0" class="bg-pixel-white pixel-bleed-0 h-16 rounded-lg"></div>
  <div data-test="bleed-color-white-1" class="bg-pixel-white pixel-bleed-1 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">black</p>
  <div data-test="bleed-color-black-0" class="bg-pixel-black pixel-bleed-0 h-16 rounded-lg border border-gray-700"></div>
  <div data-test="bleed-color-black-1" class="bg-pixel-black pixel-bleed-1 h-16 rounded-lg border border-gray-700"></div>
</div>

### Bleed + Size Combinations (color: white)

<div class="my-6">
  <h3 class="text-sm font-mono mb-2">size-1 (1px)</h3>
  <div class="grid grid-cols-5 gap-3 mb-6">
    <div>
      <div data-test="bleed-size1-b0" class="bg-pixel-white pixel-size-1 pixel-bleed-0 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-0</p>
    </div>
    <div>
      <div data-test="bleed-size1-b05" class="bg-pixel-white pixel-size-1 pixel-bleed-0.5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-0.5</p>
    </div>
    <div>
      <div data-test="bleed-size1-b1" class="bg-pixel-white pixel-size-1 pixel-bleed-1 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-1</p>
    </div>
    <div>
      <div data-test="bleed-size1-b15" class="bg-pixel-white pixel-size-1 pixel-bleed-1.5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-1.5</p>
    </div>
    <div>
      <div data-test="bleed-size1-b2" class="bg-pixel-white pixel-size-1 pixel-bleed-2 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-2</p>
    </div>
  </div>

  <h3 class="text-sm font-mono mb-2">size-2 (2px)</h3>
  <div class="grid grid-cols-5 gap-3 mb-6">
    <div>
      <div data-test="bleed-size2-b0" class="bg-pixel-white pixel-size-2 pixel-bleed-0 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-0</p>
    </div>
    <div>
      <div data-test="bleed-size2-b05" class="bg-pixel-white pixel-size-2 pixel-bleed-0.5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-0.5</p>
    </div>
    <div>
      <div data-test="bleed-size2-b1" class="bg-pixel-white pixel-size-2 pixel-bleed-1 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-1</p>
    </div>
    <div>
      <div data-test="bleed-size2-b15" class="bg-pixel-white pixel-size-2 pixel-bleed-1.5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-1.5</p>
    </div>
    <div>
      <div data-test="bleed-size2-b2" class="bg-pixel-white pixel-size-2 pixel-bleed-2 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-2</p>
    </div>
  </div>

  <h3 class="text-sm font-mono mb-2">size-3 (3px)</h3>
  <div class="grid grid-cols-5 gap-3 mb-6">
    <div>
      <div data-test="bleed-size3-b0" class="bg-pixel-white pixel-size-3 pixel-bleed-0 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-0</p>
    </div>
    <div>
      <div data-test="bleed-size3-b05" class="bg-pixel-white pixel-size-3 pixel-bleed-0.5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-0.5</p>
    </div>
    <div>
      <div data-test="bleed-size3-b1" class="bg-pixel-white pixel-size-3 pixel-bleed-1 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-1</p>
    </div>
    <div>
      <div data-test="bleed-size3-b15" class="bg-pixel-white pixel-size-3 pixel-bleed-1.5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-1.5</p>
    </div>
    <div>
      <div data-test="bleed-size3-b2" class="bg-pixel-white pixel-size-3 pixel-bleed-2 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-2</p>
    </div>
  </div>
</div>

### Bleed + Gap Combinations (color: white, size default)

<div class="my-6">
  <h3 class="text-sm font-mono mb-2">gap-0.5</h3>
  <div class="grid grid-cols-5 gap-3 mb-6">
    <div>
      <div data-test="bleed-gap05-b0" class="bg-pixel-white pixel-gap-0.5 pixel-bleed-0 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-0</p>
    </div>
    <div>
      <div data-test="bleed-gap05-b05" class="bg-pixel-white pixel-gap-0.5 pixel-bleed-0.5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-0.5</p>
    </div>
    <div>
      <div data-test="bleed-gap05-b1" class="bg-pixel-white pixel-gap-0.5 pixel-bleed-1 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-1</p>
    </div>
    <div>
      <div data-test="bleed-gap05-b15" class="bg-pixel-white pixel-gap-0.5 pixel-bleed-1.5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-1.5</p>
    </div>
    <div>
      <div data-test="bleed-gap05-b2" class="bg-pixel-white pixel-gap-0.5 pixel-bleed-2 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-2</p>
    </div>
  </div>

  <h3 class="text-sm font-mono mb-2">gap-1</h3>
  <div class="grid grid-cols-5 gap-3 mb-6">
    <div>
      <div data-test="bleed-gap1-b0" class="bg-pixel-white pixel-gap-1 pixel-bleed-0 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-0</p>
    </div>
    <div>
      <div data-test="bleed-gap1-b05" class="bg-pixel-white pixel-gap-1 pixel-bleed-0.5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-0.5</p>
    </div>
    <div>
      <div data-test="bleed-gap1-b1" class="bg-pixel-white pixel-gap-1 pixel-bleed-1 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-1</p>
    </div>
    <div>
      <div data-test="bleed-gap1-b15" class="bg-pixel-white pixel-gap-1 pixel-bleed-1.5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-1.5</p>
    </div>
    <div>
      <div data-test="bleed-gap1-b2" class="bg-pixel-white pixel-gap-1 pixel-bleed-2 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-2</p>
    </div>
  </div>

  <h3 class="text-sm font-mono mb-2">gap-2</h3>
  <div class="grid grid-cols-5 gap-3 mb-6">
    <div>
      <div data-test="bleed-gap2-b0" class="bg-pixel-white pixel-gap-2 pixel-bleed-0 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-0</p>
    </div>
    <div>
      <div data-test="bleed-gap2-b05" class="bg-pixel-white pixel-gap-2 pixel-bleed-0.5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-0.5</p>
    </div>
    <div>
      <div data-test="bleed-gap2-b1" class="bg-pixel-white pixel-gap-2 pixel-bleed-1 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-1</p>
    </div>
    <div>
      <div data-test="bleed-gap2-b15" class="bg-pixel-white pixel-gap-2 pixel-bleed-1.5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-1.5</p>
    </div>
    <div>
      <div data-test="bleed-gap2-b2" class="bg-pixel-white pixel-gap-2 pixel-bleed-2 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">bleed-2</p>
    </div>
  </div>
</div>

## Opacity (bg-pixel-*/opacity)

All using `bg-pixel-red-500` with varying opacity modifiers. The black background and all sub-pixel layers fade together.

<div class="grid grid-cols-6 gap-3 my-6">
  <div>
    <div data-test="opacity-100" class="bg-pixel-red-500 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">100% (default)</p>
  </div>
  <div>
    <div data-test="opacity-75" class="bg-pixel-red-500/75 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">/75</p>
  </div>
  <div>
    <div data-test="opacity-50" class="bg-pixel-red-500/50 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">/50</p>
  </div>
  <div>
    <div data-test="opacity-25" class="bg-pixel-red-500/25 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">/25</p>
  </div>
  <div>
    <div data-test="opacity-10" class="bg-pixel-red-500/10 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">/10</p>
  </div>
  <div>
    <div data-test="opacity-0" class="bg-pixel-red-500/0 h-28 rounded-lg border border-gray-700"></div>
    <p class="text-xs font-mono text-center mt-1">/0</p>
  </div>
</div>

### Opacity over coloured backgrounds

Verifies the black background becomes transparent, letting underlying content show through.

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="opacity-over-gradient" class="relative h-28 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-sky-400 to-indigo-600"></div>
      <div class="absolute inset-0 bg-pixel-white/50"></div>
    </div>
    <p class="text-xs font-mono text-center mt-1">white/50 over gradient</p>
  </div>
  <div>
    <div data-test="opacity-over-solid" class="relative h-28 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-amber-400"></div>
      <div class="absolute inset-0 bg-pixel-blue-500/40"></div>
    </div>
    <p class="text-xs font-mono text-center mt-1">blue-500/40 over amber</p>
  </div>
  <div>
    <div data-test="opacity-over-red" class="relative h-28 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-red-500"></div>
      <div class="absolute inset-0 bg-pixel-emerald-500/60"></div>
    </div>
    <p class="text-xs font-mono text-center mt-1">emerald-500/60 over red</p>
  </div>
  <div>
    <div data-test="opacity-over-dark" class="relative h-28 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-gray-900"></div>
      <div class="absolute inset-0 bg-pixel-yellow-400/30"></div>
    </div>
    <p class="text-xs font-mono text-center mt-1">yellow-400/30 over dark</p>
  </div>
</div>

## Arbitrary Values

<div class="grid grid-cols-3 gap-3 my-6">
  <div>
    <div data-test="arbitrary-color" class="bg-pixel-[#ff6600] h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-pixel-[#ff6600]</p>
  </div>
  <div>
    <div data-test="arbitrary-size" class="bg-pixel-blue-500 pixel-size-[3px] h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">pixel-size-[3px]</p>
  </div>
  <div>
    <div data-test="arbitrary-bleed" class="bg-pixel-blue-500 pixel-bleed-[0.7rem] h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">pixel-bleed-[0.7rem]</p>
  </div>
</div>

## Size + Gap Combinations (color: blue)

<div class="my-6">
  <h3 class="text-sm font-mono mb-2">size-1 (1px w, 2px h)</h3>
  <div class="grid grid-cols-6 gap-3 mb-6">
    <div>
      <div data-test="s1-g0.5" class="bg-pixel-blue-500 pixel-size-1 pixel-gap-0.5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-0.5</p>
    </div>
    <div>
      <div data-test="s1-g1" class="bg-pixel-blue-500 pixel-size-1 pixel-gap-1 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-1</p>
    </div>
    <div>
      <div data-test="s1-g1.5" class="bg-pixel-blue-500 pixel-size-1 pixel-gap-1.5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-1.5</p>
    </div>
    <div>
      <div data-test="s1-g2" class="bg-pixel-blue-500 pixel-size-1 pixel-gap-2 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-2</p>
    </div>
    <div>
      <div data-test="s1-g4" class="bg-pixel-blue-500 pixel-size-1 pixel-gap-4 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-4</p>
    </div>
    <div>
      <div data-test="s1-g6" class="bg-pixel-blue-500 pixel-size-1 pixel-gap-6 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-6</p>
    </div>
  </div>

  <h3 class="text-sm font-mono mb-2">size-2 (2px w, 4px h)</h3>
  <div class="grid grid-cols-6 gap-3 mb-6">
    <div>
      <div data-test="s2-g0.5" class="bg-pixel-blue-500 pixel-size-2 pixel-gap-0.5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-0.5</p>
    </div>
    <div>
      <div data-test="s2-g1" class="bg-pixel-blue-500 pixel-size-2 pixel-gap-1 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-1</p>
    </div>
    <div>
      <div data-test="s2-g1.5" class="bg-pixel-blue-500 pixel-size-2 pixel-gap-1.5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-1.5</p>
    </div>
    <div>
      <div data-test="s2-g2" class="bg-pixel-blue-500 pixel-size-2 pixel-gap-2 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-2</p>
    </div>
    <div>
      <div data-test="s2-g4" class="bg-pixel-blue-500 pixel-size-2 pixel-gap-4 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-4</p>
    </div>
    <div>
      <div data-test="s2-g6" class="bg-pixel-blue-500 pixel-size-2 pixel-gap-6 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-6</p>
    </div>
  </div>

  <h3 class="text-sm font-mono mb-2">size-3 (3px w, 6px h)</h3>
  <div class="grid grid-cols-6 gap-3 mb-6">
    <div>
      <div data-test="s3-g0.5" class="bg-pixel-blue-500 pixel-size-3 pixel-gap-0.5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-0.5</p>
    </div>
    <div>
      <div data-test="s3-g1" class="bg-pixel-blue-500 pixel-size-3 pixel-gap-1 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-1</p>
    </div>
    <div>
      <div data-test="s3-g1.5" class="bg-pixel-blue-500 pixel-size-3 pixel-gap-1.5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-1.5</p>
    </div>
    <div>
      <div data-test="s3-g2" class="bg-pixel-blue-500 pixel-size-3 pixel-gap-2 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-2</p>
    </div>
    <div>
      <div data-test="s3-g4" class="bg-pixel-blue-500 pixel-size-3 pixel-gap-4 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-4</p>
    </div>
    <div>
      <div data-test="s3-g6" class="bg-pixel-blue-500 pixel-size-3 pixel-gap-6 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-6</p>
    </div>
  </div>
</div>

## Side-by-side: Solid vs Sub-Pixel — All Tailwind Colors

<div class="grid grid-cols-[auto_1fr_1fr] gap-x-3 gap-y-1 items-center my-6">
  <p class="text-xs font-mono font-bold">Color</p>
  <p class="text-xs font-mono font-bold text-center">Solid</p>
  <p class="text-xs font-mono font-bold text-center">Sub-Pixel</p>

  <p class="text-xs font-mono">slate-500</p>
  <div class="h-16 rounded-lg bg-slate-500"></div>
  <div data-test="compare-slate" class="bg-pixel-slate-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">gray-500</p>
  <div class="h-16 rounded-lg bg-gray-500"></div>
  <div data-test="compare-gray" class="bg-pixel-gray-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">zinc-500</p>
  <div class="h-16 rounded-lg bg-zinc-500"></div>
  <div data-test="compare-zinc" class="bg-pixel-zinc-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">neutral-500</p>
  <div class="h-16 rounded-lg bg-neutral-500"></div>
  <div data-test="compare-neutral" class="bg-pixel-neutral-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">stone-500</p>
  <div class="h-16 rounded-lg bg-stone-500"></div>
  <div data-test="compare-stone" class="bg-pixel-stone-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">red-500</p>
  <div class="h-16 rounded-lg bg-red-500"></div>
  <div data-test="compare-red" class="bg-pixel-red-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">orange-500</p>
  <div class="h-16 rounded-lg bg-orange-500"></div>
  <div data-test="compare-orange" class="bg-pixel-orange-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">amber-500</p>
  <div class="h-16 rounded-lg bg-amber-500"></div>
  <div data-test="compare-amber" class="bg-pixel-amber-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">yellow-500</p>
  <div class="h-16 rounded-lg bg-yellow-500"></div>
  <div data-test="compare-yellow" class="bg-pixel-yellow-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">lime-500</p>
  <div class="h-16 rounded-lg bg-lime-500"></div>
  <div data-test="compare-lime" class="bg-pixel-lime-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">green-500</p>
  <div class="h-16 rounded-lg bg-green-500"></div>
  <div data-test="compare-green" class="bg-pixel-green-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">emerald-500</p>
  <div class="h-16 rounded-lg bg-emerald-500"></div>
  <div data-test="compare-emerald" class="bg-pixel-emerald-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">teal-500</p>
  <div class="h-16 rounded-lg bg-teal-500"></div>
  <div data-test="compare-teal" class="bg-pixel-teal-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">cyan-500</p>
  <div class="h-16 rounded-lg bg-cyan-500"></div>
  <div data-test="compare-cyan" class="bg-pixel-cyan-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">sky-500</p>
  <div class="h-16 rounded-lg bg-sky-500"></div>
  <div data-test="compare-sky" class="bg-pixel-sky-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">blue-500</p>
  <div class="h-16 rounded-lg bg-blue-500"></div>
  <div data-test="compare-blue" class="bg-pixel-blue-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">indigo-500</p>
  <div class="h-16 rounded-lg bg-indigo-500"></div>
  <div data-test="compare-indigo" class="bg-pixel-indigo-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">violet-500</p>
  <div class="h-16 rounded-lg bg-violet-500"></div>
  <div data-test="compare-violet" class="bg-pixel-violet-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">purple-500</p>
  <div class="h-16 rounded-lg bg-purple-500"></div>
  <div data-test="compare-purple" class="bg-pixel-purple-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">fuchsia-500</p>
  <div class="h-16 rounded-lg bg-fuchsia-500"></div>
  <div data-test="compare-fuchsia" class="bg-pixel-fuchsia-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">pink-500</p>
  <div class="h-16 rounded-lg bg-pink-500"></div>
  <div data-test="compare-pink" class="bg-pixel-pink-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">rose-500</p>
  <div class="h-16 rounded-lg bg-rose-500"></div>
  <div data-test="compare-rose" class="bg-pixel-rose-500 h-16 rounded-lg"></div>
</div>

## Full Scale: Blue 50–950

<div class="grid grid-cols-[auto_1fr_1fr] gap-x-3 gap-y-1 items-center my-6">
  <p class="text-xs font-mono font-bold">Shade</p>
  <p class="text-xs font-mono font-bold text-center">Solid</p>
  <p class="text-xs font-mono font-bold text-center">Sub-Pixel</p>

  <p class="text-xs font-mono">50</p>
  <div class="h-16 rounded-lg bg-blue-50"></div>
  <div data-test="blue-50" class="bg-pixel-blue-50 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">100</p>
  <div class="h-16 rounded-lg bg-blue-100"></div>
  <div data-test="blue-100" class="bg-pixel-blue-100 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">200</p>
  <div class="h-16 rounded-lg bg-blue-200"></div>
  <div data-test="blue-200" class="bg-pixel-blue-200 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">300</p>
  <div class="h-16 rounded-lg bg-blue-300"></div>
  <div data-test="blue-300" class="bg-pixel-blue-300 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">400</p>
  <div class="h-16 rounded-lg bg-blue-400"></div>
  <div data-test="blue-400" class="bg-pixel-blue-400 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">500</p>
  <div class="h-16 rounded-lg bg-blue-500"></div>
  <div data-test="blue-500" class="bg-pixel-blue-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">600</p>
  <div class="h-16 rounded-lg bg-blue-600"></div>
  <div data-test="blue-600" class="bg-pixel-blue-600 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">700</p>
  <div class="h-16 rounded-lg bg-blue-700"></div>
  <div data-test="blue-700" class="bg-pixel-blue-700 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">800</p>
  <div class="h-16 rounded-lg bg-blue-800"></div>
  <div data-test="blue-800" class="bg-pixel-blue-800 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">900</p>
  <div class="h-16 rounded-lg bg-blue-900"></div>
  <div data-test="blue-900" class="bg-pixel-blue-900 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">950</p>
  <div class="h-16 rounded-lg bg-blue-950"></div>
  <div data-test="blue-950" class="bg-pixel-blue-950 h-16 rounded-lg"></div>
</div>

## Full Tailwind Palette — All Shades

<div class="my-6">

### Slate
<div class="grid grid-cols-11 gap-1 mb-4">
  <div data-test="slate-50" class="bg-pixel-slate-50 h-12 rounded"></div>
  <div data-test="slate-100" class="bg-pixel-slate-100 h-12 rounded"></div>
  <div data-test="slate-200" class="bg-pixel-slate-200 h-12 rounded"></div>
  <div data-test="slate-300" class="bg-pixel-slate-300 h-12 rounded"></div>
  <div data-test="slate-400" class="bg-pixel-slate-400 h-12 rounded"></div>
  <div data-test="slate-500" class="bg-pixel-slate-500 h-12 rounded"></div>
  <div data-test="slate-600" class="bg-pixel-slate-600 h-12 rounded"></div>
  <div data-test="slate-700" class="bg-pixel-slate-700 h-12 rounded"></div>
  <div data-test="slate-800" class="bg-pixel-slate-800 h-12 rounded"></div>
  <div data-test="slate-900" class="bg-pixel-slate-900 h-12 rounded"></div>
  <div data-test="slate-950" class="bg-pixel-slate-950 h-12 rounded"></div>
</div>

### Gray
<div class="grid grid-cols-11 gap-1 mb-4">
  <div data-test="gray-50" class="bg-pixel-gray-50 h-12 rounded"></div>
  <div data-test="gray-100" class="bg-pixel-gray-100 h-12 rounded"></div>
  <div data-test="gray-200" class="bg-pixel-gray-200 h-12 rounded"></div>
  <div data-test="gray-300" class="bg-pixel-gray-300 h-12 rounded"></div>
  <div data-test="gray-400" class="bg-pixel-gray-400 h-12 rounded"></div>
  <div data-test="gray-500" class="bg-pixel-gray-500 h-12 rounded"></div>
  <div data-test="gray-600" class="bg-pixel-gray-600 h-12 rounded"></div>
  <div data-test="gray-700" class="bg-pixel-gray-700 h-12 rounded"></div>
  <div data-test="gray-800" class="bg-pixel-gray-800 h-12 rounded"></div>
  <div data-test="gray-900" class="bg-pixel-gray-900 h-12 rounded"></div>
  <div data-test="gray-950" class="bg-pixel-gray-950 h-12 rounded"></div>
</div>

### Zinc
<div class="grid grid-cols-11 gap-1 mb-4">
  <div data-test="zinc-50" class="bg-pixel-zinc-50 h-12 rounded"></div>
  <div data-test="zinc-100" class="bg-pixel-zinc-100 h-12 rounded"></div>
  <div data-test="zinc-200" class="bg-pixel-zinc-200 h-12 rounded"></div>
  <div data-test="zinc-300" class="bg-pixel-zinc-300 h-12 rounded"></div>
  <div data-test="zinc-400" class="bg-pixel-zinc-400 h-12 rounded"></div>
  <div data-test="zinc-500" class="bg-pixel-zinc-500 h-12 rounded"></div>
  <div data-test="zinc-600" class="bg-pixel-zinc-600 h-12 rounded"></div>
  <div data-test="zinc-700" class="bg-pixel-zinc-700 h-12 rounded"></div>
  <div data-test="zinc-800" class="bg-pixel-zinc-800 h-12 rounded"></div>
  <div data-test="zinc-900" class="bg-pixel-zinc-900 h-12 rounded"></div>
  <div data-test="zinc-950" class="bg-pixel-zinc-950 h-12 rounded"></div>
</div>

### Red
<div class="grid grid-cols-11 gap-1 mb-4">
  <div data-test="red-50" class="bg-pixel-red-50 h-12 rounded"></div>
  <div data-test="red-100" class="bg-pixel-red-100 h-12 rounded"></div>
  <div data-test="red-200" class="bg-pixel-red-200 h-12 rounded"></div>
  <div data-test="red-300" class="bg-pixel-red-300 h-12 rounded"></div>
  <div data-test="red-400" class="bg-pixel-red-400 h-12 rounded"></div>
  <div data-test="red-500" class="bg-pixel-red-500 h-12 rounded"></div>
  <div data-test="red-600" class="bg-pixel-red-600 h-12 rounded"></div>
  <div data-test="red-700" class="bg-pixel-red-700 h-12 rounded"></div>
  <div data-test="red-800" class="bg-pixel-red-800 h-12 rounded"></div>
  <div data-test="red-900" class="bg-pixel-red-900 h-12 rounded"></div>
  <div data-test="red-950" class="bg-pixel-red-950 h-12 rounded"></div>
</div>

### Orange
<div class="grid grid-cols-11 gap-1 mb-4">
  <div data-test="orange-50" class="bg-pixel-orange-50 h-12 rounded"></div>
  <div data-test="orange-100" class="bg-pixel-orange-100 h-12 rounded"></div>
  <div data-test="orange-200" class="bg-pixel-orange-200 h-12 rounded"></div>
  <div data-test="orange-300" class="bg-pixel-orange-300 h-12 rounded"></div>
  <div data-test="orange-400" class="bg-pixel-orange-400 h-12 rounded"></div>
  <div data-test="orange-500" class="bg-pixel-orange-500 h-12 rounded"></div>
  <div data-test="orange-600" class="bg-pixel-orange-600 h-12 rounded"></div>
  <div data-test="orange-700" class="bg-pixel-orange-700 h-12 rounded"></div>
  <div data-test="orange-800" class="bg-pixel-orange-800 h-12 rounded"></div>
  <div data-test="orange-900" class="bg-pixel-orange-900 h-12 rounded"></div>
  <div data-test="orange-950" class="bg-pixel-orange-950 h-12 rounded"></div>
</div>

### Amber
<div class="grid grid-cols-11 gap-1 mb-4">
  <div data-test="amber-50" class="bg-pixel-amber-50 h-12 rounded"></div>
  <div data-test="amber-100" class="bg-pixel-amber-100 h-12 rounded"></div>
  <div data-test="amber-200" class="bg-pixel-amber-200 h-12 rounded"></div>
  <div data-test="amber-300" class="bg-pixel-amber-300 h-12 rounded"></div>
  <div data-test="amber-400" class="bg-pixel-amber-400 h-12 rounded"></div>
  <div data-test="amber-500" class="bg-pixel-amber-500 h-12 rounded"></div>
  <div data-test="amber-600" class="bg-pixel-amber-600 h-12 rounded"></div>
  <div data-test="amber-700" class="bg-pixel-amber-700 h-12 rounded"></div>
  <div data-test="amber-800" class="bg-pixel-amber-800 h-12 rounded"></div>
  <div data-test="amber-900" class="bg-pixel-amber-900 h-12 rounded"></div>
  <div data-test="amber-950" class="bg-pixel-amber-950 h-12 rounded"></div>
</div>

### Yellow
<div class="grid grid-cols-11 gap-1 mb-4">
  <div data-test="yellow-50" class="bg-pixel-yellow-50 h-12 rounded"></div>
  <div data-test="yellow-100" class="bg-pixel-yellow-100 h-12 rounded"></div>
  <div data-test="yellow-200" class="bg-pixel-yellow-200 h-12 rounded"></div>
  <div data-test="yellow-300" class="bg-pixel-yellow-300 h-12 rounded"></div>
  <div data-test="yellow-400" class="bg-pixel-yellow-400 h-12 rounded"></div>
  <div data-test="yellow-500" class="bg-pixel-yellow-500 h-12 rounded"></div>
  <div data-test="yellow-600" class="bg-pixel-yellow-600 h-12 rounded"></div>
  <div data-test="yellow-700" class="bg-pixel-yellow-700 h-12 rounded"></div>
  <div data-test="yellow-800" class="bg-pixel-yellow-800 h-12 rounded"></div>
  <div data-test="yellow-900" class="bg-pixel-yellow-900 h-12 rounded"></div>
  <div data-test="yellow-950" class="bg-pixel-yellow-950 h-12 rounded"></div>
</div>

### Lime
<div class="grid grid-cols-11 gap-1 mb-4">
  <div data-test="lime-50" class="bg-pixel-lime-50 h-12 rounded"></div>
  <div data-test="lime-100" class="bg-pixel-lime-100 h-12 rounded"></div>
  <div data-test="lime-200" class="bg-pixel-lime-200 h-12 rounded"></div>
  <div data-test="lime-300" class="bg-pixel-lime-300 h-12 rounded"></div>
  <div data-test="lime-400" class="bg-pixel-lime-400 h-12 rounded"></div>
  <div data-test="lime-500" class="bg-pixel-lime-500 h-12 rounded"></div>
  <div data-test="lime-600" class="bg-pixel-lime-600 h-12 rounded"></div>
  <div data-test="lime-700" class="bg-pixel-lime-700 h-12 rounded"></div>
  <div data-test="lime-800" class="bg-pixel-lime-800 h-12 rounded"></div>
  <div data-test="lime-900" class="bg-pixel-lime-900 h-12 rounded"></div>
  <div data-test="lime-950" class="bg-pixel-lime-950 h-12 rounded"></div>
</div>

### Green
<div class="grid grid-cols-11 gap-1 mb-4">
  <div data-test="green-50" class="bg-pixel-green-50 h-12 rounded"></div>
  <div data-test="green-100" class="bg-pixel-green-100 h-12 rounded"></div>
  <div data-test="green-200" class="bg-pixel-green-200 h-12 rounded"></div>
  <div data-test="green-300" class="bg-pixel-green-300 h-12 rounded"></div>
  <div data-test="green-400" class="bg-pixel-green-400 h-12 rounded"></div>
  <div data-test="green-500" class="bg-pixel-green-500 h-12 rounded"></div>
  <div data-test="green-600" class="bg-pixel-green-600 h-12 rounded"></div>
  <div data-test="green-700" class="bg-pixel-green-700 h-12 rounded"></div>
  <div data-test="green-800" class="bg-pixel-green-800 h-12 rounded"></div>
  <div data-test="green-900" class="bg-pixel-green-900 h-12 rounded"></div>
  <div data-test="green-950" class="bg-pixel-green-950 h-12 rounded"></div>
</div>

### Emerald
<div class="grid grid-cols-11 gap-1 mb-4">
  <div data-test="emerald-50" class="bg-pixel-emerald-50 h-12 rounded"></div>
  <div data-test="emerald-100" class="bg-pixel-emerald-100 h-12 rounded"></div>
  <div data-test="emerald-200" class="bg-pixel-emerald-200 h-12 rounded"></div>
  <div data-test="emerald-300" class="bg-pixel-emerald-300 h-12 rounded"></div>
  <div data-test="emerald-400" class="bg-pixel-emerald-400 h-12 rounded"></div>
  <div data-test="emerald-500" class="bg-pixel-emerald-500 h-12 rounded"></div>
  <div data-test="emerald-600" class="bg-pixel-emerald-600 h-12 rounded"></div>
  <div data-test="emerald-700" class="bg-pixel-emerald-700 h-12 rounded"></div>
  <div data-test="emerald-800" class="bg-pixel-emerald-800 h-12 rounded"></div>
  <div data-test="emerald-900" class="bg-pixel-emerald-900 h-12 rounded"></div>
  <div data-test="emerald-950" class="bg-pixel-emerald-950 h-12 rounded"></div>
</div>

### Teal
<div class="grid grid-cols-11 gap-1 mb-4">
  <div data-test="teal-50" class="bg-pixel-teal-50 h-12 rounded"></div>
  <div data-test="teal-100" class="bg-pixel-teal-100 h-12 rounded"></div>
  <div data-test="teal-200" class="bg-pixel-teal-200 h-12 rounded"></div>
  <div data-test="teal-300" class="bg-pixel-teal-300 h-12 rounded"></div>
  <div data-test="teal-400" class="bg-pixel-teal-400 h-12 rounded"></div>
  <div data-test="teal-500" class="bg-pixel-teal-500 h-12 rounded"></div>
  <div data-test="teal-600" class="bg-pixel-teal-600 h-12 rounded"></div>
  <div data-test="teal-700" class="bg-pixel-teal-700 h-12 rounded"></div>
  <div data-test="teal-800" class="bg-pixel-teal-800 h-12 rounded"></div>
  <div data-test="teal-900" class="bg-pixel-teal-900 h-12 rounded"></div>
  <div data-test="teal-950" class="bg-pixel-teal-950 h-12 rounded"></div>
</div>

### Cyan
<div class="grid grid-cols-11 gap-1 mb-4">
  <div data-test="cyan-50" class="bg-pixel-cyan-50 h-12 rounded"></div>
  <div data-test="cyan-100" class="bg-pixel-cyan-100 h-12 rounded"></div>
  <div data-test="cyan-200" class="bg-pixel-cyan-200 h-12 rounded"></div>
  <div data-test="cyan-300" class="bg-pixel-cyan-300 h-12 rounded"></div>
  <div data-test="cyan-400" class="bg-pixel-cyan-400 h-12 rounded"></div>
  <div data-test="cyan-500" class="bg-pixel-cyan-500 h-12 rounded"></div>
  <div data-test="cyan-600" class="bg-pixel-cyan-600 h-12 rounded"></div>
  <div data-test="cyan-700" class="bg-pixel-cyan-700 h-12 rounded"></div>
  <div data-test="cyan-800" class="bg-pixel-cyan-800 h-12 rounded"></div>
  <div data-test="cyan-900" class="bg-pixel-cyan-900 h-12 rounded"></div>
  <div data-test="cyan-950" class="bg-pixel-cyan-950 h-12 rounded"></div>
</div>

### Sky
<div class="grid grid-cols-11 gap-1 mb-4">
  <div data-test="sky-50" class="bg-pixel-sky-50 h-12 rounded"></div>
  <div data-test="sky-100" class="bg-pixel-sky-100 h-12 rounded"></div>
  <div data-test="sky-200" class="bg-pixel-sky-200 h-12 rounded"></div>
  <div data-test="sky-300" class="bg-pixel-sky-300 h-12 rounded"></div>
  <div data-test="sky-400" class="bg-pixel-sky-400 h-12 rounded"></div>
  <div data-test="sky-500" class="bg-pixel-sky-500 h-12 rounded"></div>
  <div data-test="sky-600" class="bg-pixel-sky-600 h-12 rounded"></div>
  <div data-test="sky-700" class="bg-pixel-sky-700 h-12 rounded"></div>
  <div data-test="sky-800" class="bg-pixel-sky-800 h-12 rounded"></div>
  <div data-test="sky-900" class="bg-pixel-sky-900 h-12 rounded"></div>
  <div data-test="sky-950" class="bg-pixel-sky-950 h-12 rounded"></div>
</div>

### Blue
<div class="grid grid-cols-11 gap-1 mb-4">
  <div data-test="blue-p-50" class="bg-pixel-blue-50 h-12 rounded"></div>
  <div data-test="blue-p-100" class="bg-pixel-blue-100 h-12 rounded"></div>
  <div data-test="blue-p-200" class="bg-pixel-blue-200 h-12 rounded"></div>
  <div data-test="blue-p-300" class="bg-pixel-blue-300 h-12 rounded"></div>
  <div data-test="blue-p-400" class="bg-pixel-blue-400 h-12 rounded"></div>
  <div data-test="blue-p-500" class="bg-pixel-blue-500 h-12 rounded"></div>
  <div data-test="blue-p-600" class="bg-pixel-blue-600 h-12 rounded"></div>
  <div data-test="blue-p-700" class="bg-pixel-blue-700 h-12 rounded"></div>
  <div data-test="blue-p-800" class="bg-pixel-blue-800 h-12 rounded"></div>
  <div data-test="blue-p-900" class="bg-pixel-blue-900 h-12 rounded"></div>
  <div data-test="blue-p-950" class="bg-pixel-blue-950 h-12 rounded"></div>
</div>

### Indigo
<div class="grid grid-cols-11 gap-1 mb-4">
  <div data-test="indigo-50" class="bg-pixel-indigo-50 h-12 rounded"></div>
  <div data-test="indigo-100" class="bg-pixel-indigo-100 h-12 rounded"></div>
  <div data-test="indigo-200" class="bg-pixel-indigo-200 h-12 rounded"></div>
  <div data-test="indigo-300" class="bg-pixel-indigo-300 h-12 rounded"></div>
  <div data-test="indigo-400" class="bg-pixel-indigo-400 h-12 rounded"></div>
  <div data-test="indigo-500" class="bg-pixel-indigo-500 h-12 rounded"></div>
  <div data-test="indigo-600" class="bg-pixel-indigo-600 h-12 rounded"></div>
  <div data-test="indigo-700" class="bg-pixel-indigo-700 h-12 rounded"></div>
  <div data-test="indigo-800" class="bg-pixel-indigo-800 h-12 rounded"></div>
  <div data-test="indigo-900" class="bg-pixel-indigo-900 h-12 rounded"></div>
  <div data-test="indigo-950" class="bg-pixel-indigo-950 h-12 rounded"></div>
</div>

### Violet
<div class="grid grid-cols-11 gap-1 mb-4">
  <div data-test="violet-50" class="bg-pixel-violet-50 h-12 rounded"></div>
  <div data-test="violet-100" class="bg-pixel-violet-100 h-12 rounded"></div>
  <div data-test="violet-200" class="bg-pixel-violet-200 h-12 rounded"></div>
  <div data-test="violet-300" class="bg-pixel-violet-300 h-12 rounded"></div>
  <div data-test="violet-400" class="bg-pixel-violet-400 h-12 rounded"></div>
  <div data-test="violet-500" class="bg-pixel-violet-500 h-12 rounded"></div>
  <div data-test="violet-600" class="bg-pixel-violet-600 h-12 rounded"></div>
  <div data-test="violet-700" class="bg-pixel-violet-700 h-12 rounded"></div>
  <div data-test="violet-800" class="bg-pixel-violet-800 h-12 rounded"></div>
  <div data-test="violet-900" class="bg-pixel-violet-900 h-12 rounded"></div>
  <div data-test="violet-950" class="bg-pixel-violet-950 h-12 rounded"></div>
</div>

### Purple
<div class="grid grid-cols-11 gap-1 mb-4">
  <div data-test="purple-50" class="bg-pixel-purple-50 h-12 rounded"></div>
  <div data-test="purple-100" class="bg-pixel-purple-100 h-12 rounded"></div>
  <div data-test="purple-200" class="bg-pixel-purple-200 h-12 rounded"></div>
  <div data-test="purple-300" class="bg-pixel-purple-300 h-12 rounded"></div>
  <div data-test="purple-400" class="bg-pixel-purple-400 h-12 rounded"></div>
  <div data-test="purple-500" class="bg-pixel-purple-500 h-12 rounded"></div>
  <div data-test="purple-600" class="bg-pixel-purple-600 h-12 rounded"></div>
  <div data-test="purple-700" class="bg-pixel-purple-700 h-12 rounded"></div>
  <div data-test="purple-800" class="bg-pixel-purple-800 h-12 rounded"></div>
  <div data-test="purple-900" class="bg-pixel-purple-900 h-12 rounded"></div>
  <div data-test="purple-950" class="bg-pixel-purple-950 h-12 rounded"></div>
</div>

### Fuchsia
<div class="grid grid-cols-11 gap-1 mb-4">
  <div data-test="fuchsia-50" class="bg-pixel-fuchsia-50 h-12 rounded"></div>
  <div data-test="fuchsia-100" class="bg-pixel-fuchsia-100 h-12 rounded"></div>
  <div data-test="fuchsia-200" class="bg-pixel-fuchsia-200 h-12 rounded"></div>
  <div data-test="fuchsia-300" class="bg-pixel-fuchsia-300 h-12 rounded"></div>
  <div data-test="fuchsia-400" class="bg-pixel-fuchsia-400 h-12 rounded"></div>
  <div data-test="fuchsia-500" class="bg-pixel-fuchsia-500 h-12 rounded"></div>
  <div data-test="fuchsia-600" class="bg-pixel-fuchsia-600 h-12 rounded"></div>
  <div data-test="fuchsia-700" class="bg-pixel-fuchsia-700 h-12 rounded"></div>
  <div data-test="fuchsia-800" class="bg-pixel-fuchsia-800 h-12 rounded"></div>
  <div data-test="fuchsia-900" class="bg-pixel-fuchsia-900 h-12 rounded"></div>
  <div data-test="fuchsia-950" class="bg-pixel-fuchsia-950 h-12 rounded"></div>
</div>

### Pink
<div class="grid grid-cols-11 gap-1 mb-4">
  <div data-test="pink-50" class="bg-pixel-pink-50 h-12 rounded"></div>
  <div data-test="pink-100" class="bg-pixel-pink-100 h-12 rounded"></div>
  <div data-test="pink-200" class="bg-pixel-pink-200 h-12 rounded"></div>
  <div data-test="pink-300" class="bg-pixel-pink-300 h-12 rounded"></div>
  <div data-test="pink-400" class="bg-pixel-pink-400 h-12 rounded"></div>
  <div data-test="pink-500" class="bg-pixel-pink-500 h-12 rounded"></div>
  <div data-test="pink-600" class="bg-pixel-pink-600 h-12 rounded"></div>
  <div data-test="pink-700" class="bg-pixel-pink-700 h-12 rounded"></div>
  <div data-test="pink-800" class="bg-pixel-pink-800 h-12 rounded"></div>
  <div data-test="pink-900" class="bg-pixel-pink-900 h-12 rounded"></div>
  <div data-test="pink-950" class="bg-pixel-pink-950 h-12 rounded"></div>
</div>

### Rose
<div class="grid grid-cols-11 gap-1 mb-4">
  <div data-test="rose-50" class="bg-pixel-rose-50 h-12 rounded"></div>
  <div data-test="rose-100" class="bg-pixel-rose-100 h-12 rounded"></div>
  <div data-test="rose-200" class="bg-pixel-rose-200 h-12 rounded"></div>
  <div data-test="rose-300" class="bg-pixel-rose-300 h-12 rounded"></div>
  <div data-test="rose-400" class="bg-pixel-rose-400 h-12 rounded"></div>
  <div data-test="rose-500" class="bg-pixel-rose-500 h-12 rounded"></div>
  <div data-test="rose-600" class="bg-pixel-rose-600 h-12 rounded"></div>
  <div data-test="rose-700" class="bg-pixel-rose-700 h-12 rounded"></div>
  <div data-test="rose-800" class="bg-pixel-rose-800 h-12 rounded"></div>
  <div data-test="rose-900" class="bg-pixel-rose-900 h-12 rounded"></div>
  <div data-test="rose-950" class="bg-pixel-rose-950 h-12 rounded"></div>
</div>

</div>
