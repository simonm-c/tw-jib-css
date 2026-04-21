---
title: Comic Dots Test Fixtures
layout: page
---

# Comic Dots Test Fixtures

Visual test page for `bg-comic-*` utilities.

Cell size = `dot * 2 + gap`. Gap scales at `--spacing / 4` (comic-gap-1 = 1px, comic-gap-4 = 4px).

## Utility Classes — Primary & Secondary Colors

Defaults: dot 1px, bleed 1px, gap 2px.

<div class="grid grid-cols-4 gap-4 my-6">
  <div>
    <div data-test="black" class="bg-comic-black h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-comic-black — K only</p>
  </div>
  <div>
    <div data-test="white" class="bg-comic-white h-32 rounded-lg border border-gray-200"></div>
    <p class="text-xs font-mono text-center mt-1">bg-comic-white — none</p>
  </div>
  <div>
    <div data-test="red" class="bg-comic-red-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-comic-red-500 — M+Y</p>
  </div>
  <div>
    <div data-test="green" class="bg-comic-green-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-comic-green-500 — C+Y</p>
  </div>
  <div>
    <div data-test="blue" class="bg-comic-blue-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-comic-blue-500 — C+M</p>
  </div>
  <div>
    <div data-test="cyan" class="bg-comic-cyan-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-comic-cyan-500 — C only</p>
  </div>
  <div>
    <div data-test="magenta" class="bg-comic-fuchsia-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-comic-fuchsia-500 — M heavy</p>
  </div>
  <div>
    <div data-test="yellow" class="bg-comic-yellow-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-comic-yellow-500 — Y heavy</p>
  </div>
</div>

## Gap Sizes (comic-gap-*)

All using `bg-comic-blue-500`. Gap scales at spacing/4: comic-gap-1=1px, comic-gap-2=2px, comic-gap-4=4px, etc.

<div class="grid grid-cols-6 gap-3 my-6">
  <div>
    <div data-test="gap-0" class="bg-comic-blue-500 comic-gap-0 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">gap-0 (0px)</p>
  </div>
  <div>
    <div data-test="gap-1" class="bg-comic-blue-500 comic-gap-1 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">gap-1 (1px)</p>
  </div>
  <div>
    <div data-test="gap-2" class="bg-comic-blue-500 comic-gap-2 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">gap-2 (2px)</p>
  </div>
  <div>
    <div data-test="gap-4" class="bg-comic-blue-500 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">gap-4 (4px)</p>
  </div>
  <div>
    <div data-test="gap-8" class="bg-comic-blue-500 comic-gap-8 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">gap-8 (8px)</p>
  </div>
  <div>
    <div data-test="gap-16" class="bg-comic-blue-500 comic-gap-16 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">gap-16 (16px)</p>
  </div>
</div>

## Dot Radius (comic-dot-*)

Using `bg-comic-red-500 comic-gap-4`.

<div class="grid grid-cols-5 gap-3 my-6">
  <div>
    <div data-test="dot-0.5" class="bg-comic-red-500 comic-dot-0.5 comic-gap-4 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">dot-0.5</p>
  </div>
  <div>
    <div data-test="dot-1" class="bg-comic-red-500 comic-dot-1 comic-gap-4 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">dot-1</p>
  </div>
  <div>
    <div data-test="dot-1.5" class="bg-comic-red-500 comic-dot-1.5 comic-gap-4 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">dot-1.5</p>
  </div>
  <div>
    <div data-test="dot-2" class="bg-comic-red-500 comic-dot-2 comic-gap-4 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">dot-2</p>
  </div>
  <div>
    <div data-test="dot-3" class="bg-comic-red-500 comic-dot-3 comic-gap-4 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">dot-3</p>
  </div>
</div>

## Bleed (comic-bleed-*)

Using `bg-comic-red-500 comic-gap-4`.

<div class="grid grid-cols-5 gap-3 my-6">
  <div>
    <div data-test="bleed-0" class="bg-comic-red-500 comic-bleed-0 comic-gap-4 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bleed-0 (crisp)</p>
  </div>
  <div>
    <div data-test="bleed-0.5" class="bg-comic-red-500 comic-bleed-0.5 comic-gap-4 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bleed-0.5</p>
  </div>
  <div>
    <div data-test="bleed-1" class="bg-comic-red-500 comic-bleed-1 comic-gap-4 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bleed-1</p>
  </div>
  <div>
    <div data-test="bleed-1.5" class="bg-comic-red-500 comic-bleed-1.5 comic-gap-4 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bleed-1.5</p>
  </div>
  <div>
    <div data-test="bleed-2" class="bg-comic-red-500 comic-bleed-2 comic-gap-4 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bleed-2</p>
  </div>
</div>

## Opacity (bg-comic-*/opacity)

All using `bg-comic-red-500` with varying opacity modifiers. The white background and all dot layers fade together.

<div class="grid grid-cols-6 gap-3 my-6">
  <div>
    <div data-test="opacity-100" class="bg-comic-red-500 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">100% (default)</p>
  </div>
  <div>
    <div data-test="opacity-75" class="bg-comic-red-500/75 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">/75</p>
  </div>
  <div>
    <div data-test="opacity-50" class="bg-comic-red-500/50 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">/50</p>
  </div>
  <div>
    <div data-test="opacity-25" class="bg-comic-red-500/25 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">/25</p>
  </div>
  <div>
    <div data-test="opacity-10" class="bg-comic-red-500/10 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">/10</p>
  </div>
  <div>
    <div data-test="opacity-0" class="bg-comic-red-500/0 h-28 rounded-lg border border-gray-200"></div>
    <p class="text-xs font-mono text-center mt-1">/0</p>
  </div>
</div>

### Opacity over coloured backgrounds

Verifies the white background becomes transparent, letting underlying content show through.

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="opacity-over-gradient" class="relative h-28 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-sky-400 to-indigo-600"></div>
      <div class="absolute inset-0 bg-comic-black/50"></div>
    </div>
    <p class="text-xs font-mono text-center mt-1">black/50 over gradient</p>
  </div>
  <div>
    <div data-test="opacity-over-solid" class="relative h-28 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-amber-400"></div>
      <div class="absolute inset-0 bg-comic-blue-500/40"></div>
    </div>
    <p class="text-xs font-mono text-center mt-1">blue-500/40 over amber</p>
  </div>
  <div>
    <div data-test="opacity-over-red" class="relative h-28 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-red-500"></div>
      <div class="absolute inset-0 bg-comic-emerald-500/60"></div>
    </div>
    <p class="text-xs font-mono text-center mt-1">emerald-500/60 over red</p>
  </div>
  <div>
    <div data-test="opacity-over-dark" class="relative h-28 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-gray-900"></div>
      <div class="absolute inset-0 bg-comic-yellow-400/30"></div>
    </div>
    <p class="text-xs font-mono text-center mt-1">yellow-400/30 over dark</p>
  </div>
</div>

## Arbitrary Values

<div class="grid grid-cols-3 gap-3 my-6">
  <div>
    <div data-test="arbitrary-color" class="bg-comic-[#ff6600] h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-comic-[#ff6600]</p>
  </div>
  <div>
    <div data-test="arbitrary-dot" class="bg-comic-blue-500 comic-dot-[3px] comic-gap-8 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">dot-[3px]</p>
  </div>
  <div>
    <div data-test="arbitrary-gap" class="bg-comic-blue-500 comic-gap-[12px] h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">gap-[12px]</p>
  </div>
</div>

## Dot + Gap Combinations (color: blue)

<div class="my-6">
  <h3 class="text-sm font-mono mb-2">dot: 0.5px</h3>
  <div class="grid grid-cols-5 gap-3 mb-6">
    <div>
      <div data-test="d05-g1" class="bg-comic-blue-500 comic-dot-[0.5px] comic-bleed-[1px] comic-gap-1 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-1 (1px)</p>
    </div>
    <div>
      <div data-test="d05-g2" class="bg-comic-blue-500 comic-dot-[0.5px] comic-bleed-[1px] comic-gap-2 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-2 (2px)</p>
    </div>
    <div>
      <div data-test="d05-g4" class="bg-comic-blue-500 comic-dot-[0.5px] comic-bleed-[1px] comic-gap-4 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-4 (4px)</p>
    </div>
    <div>
      <div data-test="d05-g8" class="bg-comic-blue-500 comic-dot-[0.5px] comic-bleed-[1px] comic-gap-8 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-8 (8px)</p>
    </div>
    <div>
      <div data-test="d05-g16" class="bg-comic-blue-500 comic-dot-[0.5px] comic-bleed-[1px] comic-gap-16 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-16 (16px)</p>
    </div>
  </div>

  <h3 class="text-sm font-mono mb-2">dot: 1px</h3>
  <div class="grid grid-cols-5 gap-3 mb-6">
    <div>
      <div data-test="d1-g1" class="bg-comic-blue-500 comic-dot-[1px] comic-bleed-[2px] comic-gap-1 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-1 (1px)</p>
    </div>
    <div>
      <div data-test="d1-g2" class="bg-comic-blue-500 comic-dot-[1px] comic-bleed-[2px] comic-gap-2 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-2 (2px)</p>
    </div>
    <div>
      <div data-test="d1-g4" class="bg-comic-blue-500 comic-dot-[1px] comic-bleed-[2px] comic-gap-4 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-4 (4px)</p>
    </div>
    <div>
      <div data-test="d1-g8" class="bg-comic-blue-500 comic-dot-[1px] comic-bleed-[2px] comic-gap-8 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-8 (8px)</p>
    </div>
    <div>
      <div data-test="d1-g16" class="bg-comic-blue-500 comic-dot-[1px] comic-bleed-[2px] comic-gap-16 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-16 (16px)</p>
    </div>
  </div>

  <h3 class="text-sm font-mono mb-2">dot: 2px</h3>
  <div class="grid grid-cols-5 gap-3 mb-6">
    <div>
      <div data-test="d2-g2" class="bg-comic-blue-500 comic-dot-[2px] comic-bleed-[3px] comic-gap-2 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-2 (2px)</p>
    </div>
    <div>
      <div data-test="d2-g4" class="bg-comic-blue-500 comic-dot-[2px] comic-bleed-[3px] comic-gap-4 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-4 (4px)</p>
    </div>
    <div>
      <div data-test="d2-g8" class="bg-comic-blue-500 comic-dot-[2px] comic-bleed-[3px] comic-gap-8 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-8 (8px)</p>
    </div>
    <div>
      <div data-test="d2-g16" class="bg-comic-blue-500 comic-dot-[2px] comic-bleed-[3px] comic-gap-16 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-16 (16px)</p>
    </div>
    <div>
      <div data-test="d2-g24" class="bg-comic-blue-500 comic-dot-[2px] comic-bleed-[3px] comic-gap-[24px] h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-[24px]</p>
    </div>
  </div>

  <h3 class="text-sm font-mono mb-2">dot: 3px</h3>
  <div class="grid grid-cols-5 gap-3 mb-6">
    <div>
      <div data-test="d3-g2" class="bg-comic-blue-500 comic-dot-[3px] comic-bleed-[4px] comic-gap-2 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-2 (2px)</p>
    </div>
    <div>
      <div data-test="d3-g4" class="bg-comic-blue-500 comic-dot-[3px] comic-bleed-[4px] comic-gap-4 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-4 (4px)</p>
    </div>
    <div>
      <div data-test="d3-g8" class="bg-comic-blue-500 comic-dot-[3px] comic-bleed-[4px] comic-gap-8 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-8 (8px)</p>
    </div>
    <div>
      <div data-test="d3-g16" class="bg-comic-blue-500 comic-dot-[3px] comic-bleed-[4px] comic-gap-16 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-16 (16px)</p>
    </div>
    <div>
      <div data-test="d3-g32" class="bg-comic-blue-500 comic-dot-[3px] comic-bleed-[4px] comic-gap-[32px] h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">gap-[32px]</p>
    </div>
  </div>
</div>

## Border Gradients

Ben Day dots composing with border-gradient utilities on the same element.

### Linear Border Gradients

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="border-linear-r" class="bg-comic-blue-500 h-28 rounded-lg border-4 border-linear-to-r border-from-rose-500 border-to-cyan-500"></div>
    <p class="text-xs font-mono text-center mt-1">border-linear-to-r</p>
  </div>
  <div>
    <div data-test="border-linear-b" class="bg-comic-red-500 h-28 rounded-lg border-4 border-linear-to-b border-from-amber-400 border-to-emerald-500"></div>
    <p class="text-xs font-mono text-center mt-1">border-linear-to-b</p>
  </div>
  <div>
    <div data-test="border-linear-br" class="bg-comic-emerald-500 h-28 rounded-lg border-4 border-linear-to-br border-from-pink-500 border-to-violet-500"></div>
    <p class="text-xs font-mono text-center mt-1">border-linear-to-br</p>
  </div>
  <div>
    <div data-test="border-linear-angle" class="bg-comic-purple-500 h-28 rounded-lg border-4 border-linear-45 border-from-sky-400 border-to-indigo-600"></div>
    <p class="text-xs font-mono text-center mt-1">border-linear-45</p>
  </div>
</div>

### Radial Border Gradients

<div class="grid grid-cols-3 gap-4 my-6">
  <div>
    <div data-test="border-radial" class="bg-comic-blue-500 h-28 rounded-lg border-4 border-radial border-from-rose-500 border-to-cyan-500"></div>
    <p class="text-xs font-mono text-center mt-1">border-radial</p>
  </div>
  <div>
    <div data-test="border-radial-at" class="bg-comic-red-500 h-28 rounded-lg border-4 border-radial-[at_25%_25%] border-from-amber-400 border-to-purple-500"></div>
    <p class="text-xs font-mono text-center mt-1">border-radial [at 25% 25%]</p>
  </div>
  <div>
    <div data-test="border-radial-top" class="bg-comic-emerald-500 h-28 rounded-lg border-4 border-radial-[at_top] border-from-emerald-400 border-to-blue-600"></div>
    <p class="text-xs font-mono text-center mt-1">border-radial [at top]</p>
  </div>
</div>

### Conic Border Gradients

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="border-conic-0" class="bg-comic-cyan-500 h-28 rounded-lg border-4 border-conic-0 border-from-rose-500 border-via-yellow-400 border-to-cyan-500"></div>
    <p class="text-xs font-mono text-center mt-1">border-conic-0</p>
  </div>
  <div>
    <div data-test="border-conic-90" class="bg-comic-fuchsia-500 h-28 rounded-lg border-4 border-conic-90 border-from-pink-500 border-via-orange-400 border-to-violet-500"></div>
    <p class="text-xs font-mono text-center mt-1">border-conic-90</p>
  </div>
  <div>
    <div data-test="border-conic-180" class="bg-comic-yellow-500 h-28 rounded-lg border-4 border-conic-180 border-from-emerald-400 border-via-sky-400 border-to-purple-500"></div>
    <p class="text-xs font-mono text-center mt-1">border-conic-180</p>
  </div>
  <div>
    <div data-test="border-conic-neg" class="bg-comic-orange-500 h-28 rounded-lg border-4 -border-conic-45 border-from-amber-400 border-via-red-500 border-to-indigo-500"></div>
    <p class="text-xs font-mono text-center mt-1">-border-conic-45</p>
  </div>
</div>

### Border Spin

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="border-spin-default" class="bg-comic-blue-500 h-28 rounded-lg border-4 border-conic-0 border-spin border-from-rose-500 border-via-yellow-400 border-to-cyan-500"></div>
    <p class="text-xs font-mono text-center mt-1">border-spin</p>
  </div>
  <div>
    <div data-test="border-spin-fast" class="bg-comic-red-500 h-28 rounded-lg border-4 border-conic-0 border-spin border-spin-duration-[500ms] border-from-pink-500 border-to-violet-500"></div>
    <p class="text-xs font-mono text-center mt-1">spin 500ms</p>
  </div>
  <div>
    <div data-test="border-spin-slow" class="bg-comic-emerald-500 h-28 rounded-lg border-4 border-conic-0 border-spin border-spin-duration-3 border-from-emerald-400 border-to-blue-500"></div>
    <p class="text-xs font-mono text-center mt-1">spin 3s</p>
  </div>
  <div>
    <div data-test="border-spin-longer" class="bg-comic-purple-500 h-28 rounded-lg border-4 border-conic/longer border-conic-0 border-spin border-from-red-500 border-to-blue-500"></div>
    <p class="text-xs font-mono text-center mt-1">spin /longer</p>
  </div>
</div>

### Border Via Colors

<div class="grid grid-cols-3 gap-4 my-6">
  <div>
    <div data-test="border-via-linear" class="bg-comic-blue-500 h-28 rounded-lg border-4 border-linear-to-r border-from-rose-500 border-via-yellow-400 border-to-cyan-500"></div>
    <p class="text-xs font-mono text-center mt-1">linear from/via/to</p>
  </div>
  <div>
    <div data-test="border-via-conic" class="bg-comic-red-500 h-28 rounded-lg border-4 border-conic-0 border-from-indigo-500 border-via-pink-500 border-to-amber-400"></div>
    <p class="text-xs font-mono text-center mt-1">conic from/via/to</p>
  </div>
  <div>
    <div data-test="border-via-radial" class="bg-comic-emerald-500 h-28 rounded-lg border-4 border-radial border-from-emerald-400 border-via-purple-500 border-to-orange-400"></div>
    <p class="text-xs font-mono text-center mt-1">radial from/via/to</p>
  </div>
</div>

### Border Gradient Interpolation

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="border-interp-oklch" class="bg-comic-blue-500 h-28 rounded-lg border-4 border-linear-to-r/oklch border-from-red-500 border-to-blue-500"></div>
    <p class="text-xs font-mono text-center mt-1">/oklch</p>
  </div>
  <div>
    <div data-test="border-interp-hsl" class="bg-comic-red-500 h-28 rounded-lg border-4 border-linear-to-r/hsl border-from-red-500 border-to-blue-500"></div>
    <p class="text-xs font-mono text-center mt-1">/hsl</p>
  </div>
  <div>
    <div data-test="border-interp-longer" class="bg-comic-emerald-500 h-28 rounded-lg border-4 border-linear-to-r/longer border-from-red-500 border-to-blue-500"></div>
    <p class="text-xs font-mono text-center mt-1">/longer</p>
  </div>
  <div>
    <div data-test="border-interp-shorter" class="bg-comic-purple-500 h-28 rounded-lg border-4 border-linear-to-r/shorter border-from-red-500 border-to-blue-500"></div>
    <p class="text-xs font-mono text-center mt-1">/shorter</p>
  </div>
</div>

### Dot Variations + Border Gradients

Different dot sizes and bleed settings with border gradients.

<div class="grid grid-cols-3 gap-4 my-6">
  <div>
    <div data-test="fine-dots-border" class="bg-comic-orange-500 comic-dot-0.5 comic-gap-2 comic-bleed-0 h-28 rounded-lg border-4 border-linear-to-br border-from-rose-500 border-via-amber-400 border-to-emerald-500"></div>
    <p class="text-xs font-mono text-center mt-1">fine crisp + border via</p>
  </div>
  <div>
    <div data-test="large-dots-border" class="bg-comic-purple-500 comic-dot-2 comic-gap-8 comic-bleed-1 h-28 rounded-lg border-4 border-conic-0 border-spin border-from-sky-400 border-via-violet-500 border-to-sky-400"></div>
    <p class="text-xs font-mono text-center mt-1">large dots + border-spin</p>
  </div>
  <div>
    <div data-test="soft-dots-border" class="bg-comic-cyan-500 comic-dot-1.5 comic-gap-4 comic-bleed-2 h-28 rounded-lg border-4 border-radial border-from-pink-500 border-to-indigo-500"></div>
    <p class="text-xs font-mono text-center mt-1">soft bleed + border-radial</p>
  </div>
</div>

## Side-by-side: Solid vs Ben Day — All Tailwind Colors

<div class="grid grid-cols-[auto_1fr_1fr] gap-x-3 gap-y-1 items-center my-6">
  <p class="text-xs font-mono font-bold">Color</p>
  <p class="text-xs font-mono font-bold text-center">Solid</p>
  <p class="text-xs font-mono font-bold text-center">Ben Day</p>

  <p class="text-xs font-mono">slate-500</p>
  <div class="h-16 rounded-lg bg-slate-500"></div>
  <div data-test="compare-slate" class="bg-comic-slate-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">gray-500</p>
  <div class="h-16 rounded-lg bg-gray-500"></div>
  <div data-test="compare-gray" class="bg-comic-gray-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">zinc-500</p>
  <div class="h-16 rounded-lg bg-zinc-500"></div>
  <div data-test="compare-zinc" class="bg-comic-zinc-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">neutral-500</p>
  <div class="h-16 rounded-lg bg-neutral-500"></div>
  <div data-test="compare-neutral" class="bg-comic-neutral-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">stone-500</p>
  <div class="h-16 rounded-lg bg-stone-500"></div>
  <div data-test="compare-stone" class="bg-comic-stone-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">red-500</p>
  <div class="h-16 rounded-lg bg-red-500"></div>
  <div data-test="compare-red" class="bg-comic-red-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">orange-500</p>
  <div class="h-16 rounded-lg bg-orange-500"></div>
  <div data-test="compare-orange" class="bg-comic-orange-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">amber-500</p>
  <div class="h-16 rounded-lg bg-amber-500"></div>
  <div data-test="compare-amber" class="bg-comic-amber-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">yellow-500</p>
  <div class="h-16 rounded-lg bg-yellow-500"></div>
  <div data-test="compare-yellow" class="bg-comic-yellow-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">lime-500</p>
  <div class="h-16 rounded-lg bg-lime-500"></div>
  <div data-test="compare-lime" class="bg-comic-lime-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">green-500</p>
  <div class="h-16 rounded-lg bg-green-500"></div>
  <div data-test="compare-green" class="bg-comic-green-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">emerald-500</p>
  <div class="h-16 rounded-lg bg-emerald-500"></div>
  <div data-test="compare-emerald" class="bg-comic-emerald-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">teal-500</p>
  <div class="h-16 rounded-lg bg-teal-500"></div>
  <div data-test="compare-teal" class="bg-comic-teal-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">cyan-500</p>
  <div class="h-16 rounded-lg bg-cyan-500"></div>
  <div data-test="compare-cyan" class="bg-comic-cyan-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">sky-500</p>
  <div class="h-16 rounded-lg bg-sky-500"></div>
  <div data-test="compare-sky" class="bg-comic-sky-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">blue-500</p>
  <div class="h-16 rounded-lg bg-blue-500"></div>
  <div data-test="compare-blue" class="bg-comic-blue-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">indigo-500</p>
  <div class="h-16 rounded-lg bg-indigo-500"></div>
  <div data-test="compare-indigo" class="bg-comic-indigo-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">violet-500</p>
  <div class="h-16 rounded-lg bg-violet-500"></div>
  <div data-test="compare-violet" class="bg-comic-violet-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">purple-500</p>
  <div class="h-16 rounded-lg bg-purple-500"></div>
  <div data-test="compare-purple" class="bg-comic-purple-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">fuchsia-500</p>
  <div class="h-16 rounded-lg bg-fuchsia-500"></div>
  <div data-test="compare-fuchsia" class="bg-comic-fuchsia-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">pink-500</p>
  <div class="h-16 rounded-lg bg-pink-500"></div>
  <div data-test="compare-pink" class="bg-comic-pink-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">rose-500</p>
  <div class="h-16 rounded-lg bg-rose-500"></div>
  <div data-test="compare-rose" class="bg-comic-rose-500 h-16 rounded-lg"></div>
</div>

## Full Scale: Blue 50–950

<div class="grid grid-cols-[auto_1fr_1fr] gap-x-3 gap-y-1 items-center my-6">
  <p class="text-xs font-mono font-bold">Shade</p>
  <p class="text-xs font-mono font-bold text-center">Solid</p>
  <p class="text-xs font-mono font-bold text-center">Ben Day</p>

  <p class="text-xs font-mono">50</p>
  <div class="h-16 rounded-lg bg-blue-50"></div>
  <div data-test="blue-50" class="bg-comic-blue-50 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">100</p>
  <div class="h-16 rounded-lg bg-blue-100"></div>
  <div data-test="blue-100" class="bg-comic-blue-100 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">200</p>
  <div class="h-16 rounded-lg bg-blue-200"></div>
  <div data-test="blue-200" class="bg-comic-blue-200 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">300</p>
  <div class="h-16 rounded-lg bg-blue-300"></div>
  <div data-test="blue-300" class="bg-comic-blue-300 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">400</p>
  <div class="h-16 rounded-lg bg-blue-400"></div>
  <div data-test="blue-400" class="bg-comic-blue-400 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">500</p>
  <div class="h-16 rounded-lg bg-blue-500"></div>
  <div data-test="blue-500" class="bg-comic-blue-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">600</p>
  <div class="h-16 rounded-lg bg-blue-600"></div>
  <div data-test="blue-600" class="bg-comic-blue-600 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">700</p>
  <div class="h-16 rounded-lg bg-blue-700"></div>
  <div data-test="blue-700" class="bg-comic-blue-700 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">800</p>
  <div class="h-16 rounded-lg bg-blue-800"></div>
  <div data-test="blue-800" class="bg-comic-blue-800 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">900</p>
  <div class="h-16 rounded-lg bg-blue-900"></div>
  <div data-test="blue-900" class="bg-comic-blue-900 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">950</p>
  <div class="h-16 rounded-lg bg-blue-950"></div>
  <div data-test="blue-950" class="bg-comic-blue-950 h-16 rounded-lg"></div>
</div>
