---
title: Watercolor Test Fixtures
layout: page
---

# Watercolor Test Fixtures

Visual test page for `bg-watercolor-*` utilities.

Nine pigment layers (6 primary + 3 shadow) composited with multiply blending over white paper. Per-pigment alpha computed from hue-distance, chroma, and dilution.

## Utility Classes — Primary & Secondary Colours

Defaults: contemporary palette, wash 3, opacity 100%.

<div class="grid grid-cols-4 gap-4 my-6">
  <div>
    <div data-test="black" class="bg-watercolor-black h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-watercolor-black</p>
  </div>
  <div>
    <div data-test="white" class="bg-watercolor-white h-32 rounded-lg border border-gray-200"></div>
    <p class="text-xs font-mono text-center mt-1">bg-watercolor-white</p>
  </div>
  <div>
    <div data-test="red" class="bg-watercolor-red-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-watercolor-red-500</p>
  </div>
  <div>
    <div data-test="green" class="bg-watercolor-green-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-watercolor-green-500</p>
  </div>
  <div>
    <div data-test="blue" class="bg-watercolor-blue-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-watercolor-blue-500</p>
  </div>
  <div>
    <div data-test="cyan" class="bg-watercolor-cyan-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-watercolor-cyan-500</p>
  </div>
  <div>
    <div data-test="yellow" class="bg-watercolor-yellow-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-watercolor-yellow-500</p>
  </div>
  <div>
    <div data-test="gray" class="bg-watercolor-gray-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-watercolor-gray-500</p>
  </div>
</div>

## Palettes

### Contemporary (default)

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="contemporary-red" class="bg-watercolor-red-500 watercolor-contemporary h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">red-500</p>
  </div>
  <div>
    <div data-test="contemporary-blue" class="bg-watercolor-blue-500 watercolor-contemporary h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">blue-500</p>
  </div>
  <div>
    <div data-test="contemporary-green" class="bg-watercolor-green-500 watercolor-contemporary h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">green-500</p>
  </div>
  <div>
    <div data-test="contemporary-amber" class="bg-watercolor-amber-500 watercolor-contemporary h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">amber-500</p>
  </div>
</div>

### Traditional

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="traditional-red" class="bg-watercolor-red-500 watercolor-traditional h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">red-500</p>
  </div>
  <div>
    <div data-test="traditional-blue" class="bg-watercolor-blue-500 watercolor-traditional h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">blue-500</p>
  </div>
  <div>
    <div data-test="traditional-green" class="bg-watercolor-green-500 watercolor-traditional h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">green-500</p>
  </div>
  <div>
    <div data-test="traditional-amber" class="bg-watercolor-amber-500 watercolor-traditional h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">amber-500</p>
  </div>
</div>

### Eastern

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="eastern-red" class="bg-watercolor-red-500 watercolor-eastern h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">red-500</p>
  </div>
  <div>
    <div data-test="eastern-blue" class="bg-watercolor-blue-500 watercolor-eastern h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">blue-500</p>
  </div>
  <div>
    <div data-test="eastern-green" class="bg-watercolor-green-500 watercolor-eastern h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">green-500</p>
  </div>
  <div>
    <div data-test="eastern-amber" class="bg-watercolor-amber-500 watercolor-eastern h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">amber-500</p>
  </div>
</div>

### Palette Comparison — Same Colours

<div class="grid grid-cols-[auto_1fr_1fr_1fr] gap-x-3 gap-y-1 items-center my-6">
  <p class="text-xs font-mono font-bold">Colour</p>
  <p class="text-xs font-mono font-bold text-center">Contemporary</p>
  <p class="text-xs font-mono font-bold text-center">Traditional</p>
  <p class="text-xs font-mono font-bold text-center">Eastern</p>

  <p class="text-xs font-mono">red-500</p>
  <div data-test="compare-red-contemporary" class="bg-watercolor-red-500 h-16 rounded-lg"></div>
  <div data-test="compare-red-traditional" class="bg-watercolor-red-500 watercolor-traditional h-16 rounded-lg"></div>
  <div data-test="compare-red-eastern" class="bg-watercolor-red-500 watercolor-eastern h-16 rounded-lg"></div>

  <p class="text-xs font-mono">blue-500</p>
  <div data-test="compare-blue-contemporary" class="bg-watercolor-blue-500 h-16 rounded-lg"></div>
  <div data-test="compare-blue-traditional" class="bg-watercolor-blue-500 watercolor-traditional h-16 rounded-lg"></div>
  <div data-test="compare-blue-eastern" class="bg-watercolor-blue-500 watercolor-eastern h-16 rounded-lg"></div>

  <p class="text-xs font-mono">green-500</p>
  <div data-test="compare-green-contemporary" class="bg-watercolor-green-500 h-16 rounded-lg"></div>
  <div data-test="compare-green-traditional" class="bg-watercolor-green-500 watercolor-traditional h-16 rounded-lg"></div>
  <div data-test="compare-green-eastern" class="bg-watercolor-green-500 watercolor-eastern h-16 rounded-lg"></div>

  <p class="text-xs font-mono">amber-500</p>
  <div data-test="compare-amber-contemporary" class="bg-watercolor-amber-500 h-16 rounded-lg"></div>
  <div data-test="compare-amber-traditional" class="bg-watercolor-amber-500 watercolor-traditional h-16 rounded-lg"></div>
  <div data-test="compare-amber-eastern" class="bg-watercolor-amber-500 watercolor-eastern h-16 rounded-lg"></div>

  <p class="text-xs font-mono">slate-700</p>
  <div data-test="compare-slate-contemporary" class="bg-watercolor-slate-700 h-16 rounded-lg"></div>
  <div data-test="compare-slate-traditional" class="bg-watercolor-slate-700 watercolor-traditional h-16 rounded-lg"></div>
  <div data-test="compare-slate-eastern" class="bg-watercolor-slate-700 watercolor-eastern h-16 rounded-lg"></div>
</div>

## Wash (watercolor-wash-*)

All using `bg-watercolor-blue-500`.

<div class="grid grid-cols-5 gap-3 my-6">
  <div>
    <div data-test="wash-1" class="bg-watercolor-blue-500 watercolor-wash-1 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">wash-1 (dry)</p>
  </div>
  <div>
    <div data-test="wash-2" class="bg-watercolor-blue-500 watercolor-wash-2 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">wash-2</p>
  </div>
  <div>
    <div data-test="wash-3" class="bg-watercolor-blue-500 watercolor-wash-3 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">wash-3 (default)</p>
  </div>
  <div>
    <div data-test="wash-4" class="bg-watercolor-blue-500 watercolor-wash-4 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">wash-4</p>
  </div>
  <div>
    <div data-test="wash-5" class="bg-watercolor-blue-500 watercolor-wash-5 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">wash-5 (wet)</p>
  </div>
</div>

### Wash across palettes

<div class="my-6">
  <h4 class="text-sm font-mono mb-2">Contemporary — red-500</h4>
  <div class="grid grid-cols-5 gap-3 mb-6">
    <div>
      <div data-test="wash-contemp-1" class="bg-watercolor-red-500 watercolor-wash-1 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">wash-1</p>
    </div>
    <div>
      <div data-test="wash-contemp-2" class="bg-watercolor-red-500 watercolor-wash-2 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">wash-2</p>
    </div>
    <div>
      <div data-test="wash-contemp-3" class="bg-watercolor-red-500 watercolor-wash-3 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">wash-3</p>
    </div>
    <div>
      <div data-test="wash-contemp-4" class="bg-watercolor-red-500 watercolor-wash-4 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">wash-4</p>
    </div>
    <div>
      <div data-test="wash-contemp-5" class="bg-watercolor-red-500 watercolor-wash-5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">wash-5</p>
    </div>
  </div>

  <h4 class="text-sm font-mono mb-2">Traditional — red-500</h4>
  <div class="grid grid-cols-5 gap-3 mb-6">
    <div>
      <div data-test="wash-trad-1" class="bg-watercolor-red-500 watercolor-traditional watercolor-wash-1 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">wash-1</p>
    </div>
    <div>
      <div data-test="wash-trad-2" class="bg-watercolor-red-500 watercolor-traditional watercolor-wash-2 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">wash-2</p>
    </div>
    <div>
      <div data-test="wash-trad-3" class="bg-watercolor-red-500 watercolor-traditional watercolor-wash-3 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">wash-3</p>
    </div>
    <div>
      <div data-test="wash-trad-4" class="bg-watercolor-red-500 watercolor-traditional watercolor-wash-4 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">wash-4</p>
    </div>
    <div>
      <div data-test="wash-trad-5" class="bg-watercolor-red-500 watercolor-traditional watercolor-wash-5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">wash-5</p>
    </div>
  </div>

  <h4 class="text-sm font-mono mb-2">Eastern — red-500</h4>
  <div class="grid grid-cols-5 gap-3 mb-6">
    <div>
      <div data-test="wash-east-1" class="bg-watercolor-red-500 watercolor-eastern watercolor-wash-1 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">wash-1</p>
    </div>
    <div>
      <div data-test="wash-east-2" class="bg-watercolor-red-500 watercolor-eastern watercolor-wash-2 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">wash-2</p>
    </div>
    <div>
      <div data-test="wash-east-3" class="bg-watercolor-red-500 watercolor-eastern watercolor-wash-3 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">wash-3</p>
    </div>
    <div>
      <div data-test="wash-east-4" class="bg-watercolor-red-500 watercolor-eastern watercolor-wash-4 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">wash-4</p>
    </div>
    <div>
      <div data-test="wash-east-5" class="bg-watercolor-red-500 watercolor-eastern watercolor-wash-5 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">wash-5</p>
    </div>
  </div>
</div>

## Opacity (bg-watercolor-*/opacity)

All using `bg-watercolor-red-500` with varying opacity modifiers.

<div class="grid grid-cols-6 gap-3 my-6">
  <div>
    <div data-test="opacity-100" class="bg-watercolor-red-500 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">100% (default)</p>
  </div>
  <div>
    <div data-test="opacity-75" class="bg-watercolor-red-500/75 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">/75</p>
  </div>
  <div>
    <div data-test="opacity-50" class="bg-watercolor-red-500/50 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">/50</p>
  </div>
  <div>
    <div data-test="opacity-25" class="bg-watercolor-red-500/25 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">/25</p>
  </div>
  <div>
    <div data-test="opacity-10" class="bg-watercolor-red-500/10 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">/10</p>
  </div>
  <div>
    <div data-test="opacity-0" class="bg-watercolor-red-500/0 h-28 rounded-lg border border-gray-200"></div>
    <p class="text-xs font-mono text-center mt-1">/0</p>
  </div>
</div>

### Opacity over coloured backgrounds

Verifies the white paper becomes transparent, letting underlying content show through.

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="opacity-over-gradient" class="relative h-28 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-linear-to-br from-sky-400 to-indigo-600"></div>
      <div class="absolute inset-0 bg-watercolor-black/50"></div>
    </div>
    <p class="text-xs font-mono text-center mt-1">black/50 over gradient</p>
  </div>
  <div>
    <div data-test="opacity-over-solid" class="relative h-28 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-amber-400"></div>
      <div class="absolute inset-0 bg-watercolor-blue-500/40"></div>
    </div>
    <p class="text-xs font-mono text-center mt-1">blue-500/40 over amber</p>
  </div>
  <div>
    <div data-test="opacity-over-red" class="relative h-28 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-red-500"></div>
      <div class="absolute inset-0 bg-watercolor-emerald-500/60"></div>
    </div>
    <p class="text-xs font-mono text-center mt-1">emerald-500/60 over red</p>
  </div>
  <div>
    <div data-test="opacity-over-dark" class="relative h-28 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-gray-900"></div>
      <div class="absolute inset-0 bg-watercolor-yellow-400/30"></div>
    </div>
    <p class="text-xs font-mono text-center mt-1">yellow-400/30 over dark</p>
  </div>
</div>

## Arbitrary Values

<div class="grid grid-cols-3 gap-3 my-6">
  <div>
    <div data-test="arbitrary-color" class="bg-watercolor-[#ff6600] h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-watercolor-[#ff6600]</p>
  </div>
  <div>
    <div data-test="arbitrary-rgb" class="bg-watercolor-[rgb(128,0,255)] h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-watercolor-[rgb(128,0,255)]</p>
  </div>
  <div>
    <div data-test="arbitrary-oklch" class="bg-watercolor-[oklch(0.7_0.15_200)] h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-watercolor-[oklch(0.7_0.15_200)]</p>
  </div>
</div>

## Shadow Activation — Dark Colour Tests

Colours chosen to test shadow pigment activation. Shadows appear as lightness decreases below the threshold.

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="shadow-light" class="bg-watercolor-blue-300 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">blue-300 — no shadows</p>
  </div>
  <div>
    <div data-test="shadow-mid" class="bg-watercolor-blue-600 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">blue-600 — shadow onset</p>
  </div>
  <div>
    <div data-test="shadow-dark" class="bg-watercolor-blue-800 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">blue-800 — full shadows</p>
  </div>
  <div>
    <div data-test="shadow-950" class="bg-watercolor-blue-950 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">blue-950 — maximum</p>
  </div>
</div>

### Shadow character across palettes (slate-800)

Low-chroma dark input — tests neutral-path shadow activation and chroma-gating differences.

<div class="grid grid-cols-3 gap-3 my-6">
  <div>
    <div data-test="shadow-neutral-contemporary" class="bg-watercolor-slate-800 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">Contemporary — chroma-gated</p>
  </div>
  <div>
    <div data-test="shadow-neutral-traditional" class="bg-watercolor-slate-800 watercolor-traditional h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">Traditional — earth shadows</p>
  </div>
  <div>
    <div data-test="shadow-neutral-eastern" class="bg-watercolor-slate-800 watercolor-eastern h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">Eastern — structural sumi</p>
  </div>
</div>

## Border Gradients

Watercolour composing with border-gradient utilities on the same element.

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="border-linear-r" class="bg-watercolor-blue-500 h-28 rounded-lg border-4 border-linear-to-r border-from-rose-500 border-to-cyan-500"></div>
    <p class="text-xs font-mono text-center mt-1">border-linear-to-r</p>
  </div>
  <div>
    <div data-test="border-linear-b" class="bg-watercolor-red-500 h-28 rounded-lg border-4 border-linear-to-b border-from-amber-400 border-to-emerald-500"></div>
    <p class="text-xs font-mono text-center mt-1">border-linear-to-b</p>
  </div>
  <div>
    <div data-test="border-conic" class="bg-watercolor-cyan-500 h-28 rounded-lg border-4 border-conic-0 border-from-rose-500 border-via-yellow-400 border-to-cyan-500"></div>
    <p class="text-xs font-mono text-center mt-1">border-conic-0</p>
  </div>
  <div>
    <div data-test="border-spin" class="bg-watercolor-blue-500 h-28 rounded-lg border-4 border-conic-0 border-spin border-from-rose-500 border-via-yellow-400 border-to-cyan-500"></div>
    <p class="text-xs font-mono text-center mt-1">border-spin</p>
  </div>
</div>

## Side-by-side: Solid vs Watercolor — All Tailwind Colours

<div class="grid grid-cols-[auto_1fr_1fr] gap-x-3 gap-y-1 items-center my-6">
  <p class="text-xs font-mono font-bold">Colour</p>
  <p class="text-xs font-mono font-bold text-center">Solid</p>
  <p class="text-xs font-mono font-bold text-center">Watercolor</p>

  <p class="text-xs font-mono">slate-500</p>
  <div class="h-16 rounded-lg bg-slate-500"></div>
  <div data-test="compare-slate" class="bg-watercolor-slate-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">gray-500</p>
  <div class="h-16 rounded-lg bg-gray-500"></div>
  <div data-test="compare-gray" class="bg-watercolor-gray-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">red-500</p>
  <div class="h-16 rounded-lg bg-red-500"></div>
  <div data-test="compare-red" class="bg-watercolor-red-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">orange-500</p>
  <div class="h-16 rounded-lg bg-orange-500"></div>
  <div data-test="compare-orange" class="bg-watercolor-orange-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">amber-500</p>
  <div class="h-16 rounded-lg bg-amber-500"></div>
  <div data-test="compare-amber" class="bg-watercolor-amber-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">yellow-500</p>
  <div class="h-16 rounded-lg bg-yellow-500"></div>
  <div data-test="compare-yellow" class="bg-watercolor-yellow-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">lime-500</p>
  <div class="h-16 rounded-lg bg-lime-500"></div>
  <div data-test="compare-lime" class="bg-watercolor-lime-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">green-500</p>
  <div class="h-16 rounded-lg bg-green-500"></div>
  <div data-test="compare-green" class="bg-watercolor-green-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">emerald-500</p>
  <div class="h-16 rounded-lg bg-emerald-500"></div>
  <div data-test="compare-emerald" class="bg-watercolor-emerald-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">teal-500</p>
  <div class="h-16 rounded-lg bg-teal-500"></div>
  <div data-test="compare-teal" class="bg-watercolor-teal-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">cyan-500</p>
  <div class="h-16 rounded-lg bg-cyan-500"></div>
  <div data-test="compare-cyan" class="bg-watercolor-cyan-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">sky-500</p>
  <div class="h-16 rounded-lg bg-sky-500"></div>
  <div data-test="compare-sky" class="bg-watercolor-sky-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">blue-500</p>
  <div class="h-16 rounded-lg bg-blue-500"></div>
  <div data-test="compare-blue" class="bg-watercolor-blue-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">indigo-500</p>
  <div class="h-16 rounded-lg bg-indigo-500"></div>
  <div data-test="compare-indigo" class="bg-watercolor-indigo-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">violet-500</p>
  <div class="h-16 rounded-lg bg-violet-500"></div>
  <div data-test="compare-violet" class="bg-watercolor-violet-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">purple-500</p>
  <div class="h-16 rounded-lg bg-purple-500"></div>
  <div data-test="compare-purple" class="bg-watercolor-purple-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">fuchsia-500</p>
  <div class="h-16 rounded-lg bg-fuchsia-500"></div>
  <div data-test="compare-fuchsia" class="bg-watercolor-fuchsia-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">pink-500</p>
  <div class="h-16 rounded-lg bg-pink-500"></div>
  <div data-test="compare-pink" class="bg-watercolor-pink-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">rose-500</p>
  <div class="h-16 rounded-lg bg-rose-500"></div>
  <div data-test="compare-rose" class="bg-watercolor-rose-500 h-16 rounded-lg"></div>
</div>

## Full Scale: Blue 50–950

<div class="grid grid-cols-[auto_1fr_1fr] gap-x-3 gap-y-1 items-center my-6">
  <p class="text-xs font-mono font-bold">Shade</p>
  <p class="text-xs font-mono font-bold text-center">Solid</p>
  <p class="text-xs font-mono font-bold text-center">Watercolor</p>

  <p class="text-xs font-mono">50</p>
  <div class="h-16 rounded-lg bg-blue-50"></div>
  <div data-test="blue-50" class="bg-watercolor-blue-50 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">100</p>
  <div class="h-16 rounded-lg bg-blue-100"></div>
  <div data-test="blue-100" class="bg-watercolor-blue-100 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">200</p>
  <div class="h-16 rounded-lg bg-blue-200"></div>
  <div data-test="blue-200" class="bg-watercolor-blue-200 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">300</p>
  <div class="h-16 rounded-lg bg-blue-300"></div>
  <div data-test="blue-300" class="bg-watercolor-blue-300 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">400</p>
  <div class="h-16 rounded-lg bg-blue-400"></div>
  <div data-test="blue-400" class="bg-watercolor-blue-400 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">500</p>
  <div class="h-16 rounded-lg bg-blue-500"></div>
  <div data-test="blue-500" class="bg-watercolor-blue-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">600</p>
  <div class="h-16 rounded-lg bg-blue-600"></div>
  <div data-test="blue-600" class="bg-watercolor-blue-600 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">700</p>
  <div class="h-16 rounded-lg bg-blue-700"></div>
  <div data-test="blue-700" class="bg-watercolor-blue-700 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">800</p>
  <div class="h-16 rounded-lg bg-blue-800"></div>
  <div data-test="blue-800" class="bg-watercolor-blue-800 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">900</p>
  <div class="h-16 rounded-lg bg-blue-900"></div>
  <div data-test="blue-900" class="bg-watercolor-blue-900 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">950</p>
  <div class="h-16 rounded-lg bg-blue-950"></div>
  <div data-test="blue-950" class="bg-watercolor-blue-950 h-16 rounded-lg"></div>
</div>

## Full Scale: Red 50–950 (Traditional)

<div class="grid grid-cols-[auto_1fr_1fr] gap-x-3 gap-y-1 items-center my-6">
  <p class="text-xs font-mono font-bold">Shade</p>
  <p class="text-xs font-mono font-bold text-center">Solid</p>
  <p class="text-xs font-mono font-bold text-center">Traditional</p>

  <p class="text-xs font-mono">50</p>
  <div class="h-16 rounded-lg bg-red-50"></div>
  <div data-test="red-trad-50" class="bg-watercolor-red-50 watercolor-traditional h-16 rounded-lg"></div>

  <p class="text-xs font-mono">100</p>
  <div class="h-16 rounded-lg bg-red-100"></div>
  <div data-test="red-trad-100" class="bg-watercolor-red-100 watercolor-traditional h-16 rounded-lg"></div>

  <p class="text-xs font-mono">200</p>
  <div class="h-16 rounded-lg bg-red-200"></div>
  <div data-test="red-trad-200" class="bg-watercolor-red-200 watercolor-traditional h-16 rounded-lg"></div>

  <p class="text-xs font-mono">300</p>
  <div class="h-16 rounded-lg bg-red-300"></div>
  <div data-test="red-trad-300" class="bg-watercolor-red-300 watercolor-traditional h-16 rounded-lg"></div>

  <p class="text-xs font-mono">400</p>
  <div class="h-16 rounded-lg bg-red-400"></div>
  <div data-test="red-trad-400" class="bg-watercolor-red-400 watercolor-traditional h-16 rounded-lg"></div>

  <p class="text-xs font-mono">500</p>
  <div class="h-16 rounded-lg bg-red-500"></div>
  <div data-test="red-trad-500" class="bg-watercolor-red-500 watercolor-traditional h-16 rounded-lg"></div>

  <p class="text-xs font-mono">600</p>
  <div class="h-16 rounded-lg bg-red-600"></div>
  <div data-test="red-trad-600" class="bg-watercolor-red-600 watercolor-traditional h-16 rounded-lg"></div>

  <p class="text-xs font-mono">700</p>
  <div class="h-16 rounded-lg bg-red-700"></div>
  <div data-test="red-trad-700" class="bg-watercolor-red-700 watercolor-traditional h-16 rounded-lg"></div>

  <p class="text-xs font-mono">800</p>
  <div class="h-16 rounded-lg bg-red-800"></div>
  <div data-test="red-trad-800" class="bg-watercolor-red-800 watercolor-traditional h-16 rounded-lg"></div>

  <p class="text-xs font-mono">900</p>
  <div class="h-16 rounded-lg bg-red-900"></div>
  <div data-test="red-trad-900" class="bg-watercolor-red-900 watercolor-traditional h-16 rounded-lg"></div>

  <p class="text-xs font-mono">950</p>
  <div class="h-16 rounded-lg bg-red-950"></div>
  <div data-test="red-trad-950" class="bg-watercolor-red-950 watercolor-traditional h-16 rounded-lg"></div>
</div>
