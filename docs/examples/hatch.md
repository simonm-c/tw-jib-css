---
title: Hatch Test Fixtures
layout: page
---

# Hatch Test Fixtures

Visual test page for `bg-hatch-*` utilities.

Six hatching layers gated by input lightness. Three mutually exclusive primary density tiers (sparse/medium/dense) plus crosshatch, triple hatch, and broken dashes.

## Utility Classes — Primary & Secondary Colours

Defaults: weight 1px, spacing 0.5px, bleed 0px, angle 35deg.

<div class="grid grid-cols-4 gap-4 my-6">
  <div>
    <div data-test="black" class="bg-hatch-black h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-hatch-black — dense + cross + triple</p>
  </div>
  <div>
    <div data-test="white" class="bg-hatch-white h-32 rounded-lg border border-gray-200"></div>
    <p class="text-xs font-mono text-center mt-1">bg-hatch-white — broken dashes</p>
  </div>
  <div>
    <div data-test="red" class="bg-hatch-red-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-hatch-red-500 — medium</p>
  </div>
  <div>
    <div data-test="green" class="bg-hatch-green-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-hatch-green-500 — medium</p>
  </div>
  <div>
    <div data-test="blue" class="bg-hatch-blue-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-hatch-blue-500 — medium</p>
  </div>
  <div>
    <div data-test="cyan" class="bg-hatch-cyan-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-hatch-cyan-500 — sparse</p>
  </div>
  <div>
    <div data-test="yellow" class="bg-hatch-yellow-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-hatch-yellow-500 — sparse</p>
  </div>
  <div>
    <div data-test="gray" class="bg-hatch-gray-500 h-32 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-hatch-gray-500 — medium</p>
  </div>
</div>

## Angle (hatch-angle-*)

All using `bg-hatch-blue-500`.

<div class="grid grid-cols-6 gap-3 my-6">
  <div>
    <div data-test="angle-0" class="bg-hatch-blue-500 hatch-angle-0 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">0deg</p>
  </div>
  <div>
    <div data-test="angle-15" class="bg-hatch-blue-500 hatch-angle-15 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">15deg</p>
  </div>
  <div>
    <div data-test="angle-35" class="bg-hatch-blue-500 hatch-angle-35 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">35deg (default)</p>
  </div>
  <div>
    <div data-test="angle-45" class="bg-hatch-blue-500 hatch-angle-45 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">45deg</p>
  </div>
  <div>
    <div data-test="angle-90" class="bg-hatch-blue-500 hatch-angle-90 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">90deg</p>
  </div>
  <div>
    <div data-test="angle-135" class="bg-hatch-blue-500 hatch-angle-135 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">135deg</p>
  </div>
</div>

## Weight (hatch-weight-*)

All using `bg-hatch-red-500`.

<div class="grid grid-cols-5 gap-3 my-6">
  <div>
    <div data-test="weight-1" class="bg-hatch-red-500 hatch-weight-1 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">weight-1 (1px)</p>
  </div>
  <div>
    <div data-test="weight-2" class="bg-hatch-red-500 hatch-weight-2 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">weight-2 (2px)</p>
  </div>
  <div>
    <div data-test="weight-3" class="bg-hatch-red-500 hatch-weight-3 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">weight-3 (3px)</p>
  </div>
  <div>
    <div data-test="weight-4" class="bg-hatch-red-500 hatch-weight-4 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">weight-4 (4px)</p>
  </div>
  <div>
    <div data-test="weight-6" class="bg-hatch-red-500 hatch-weight-6 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">weight-6 (6px)</p>
  </div>
</div>

## Spacing (hatch-spacing-*)

All using `bg-hatch-blue-500`.

<div class="grid grid-cols-6 gap-3 my-6">
  <div>
    <div data-test="spacing-1" class="bg-hatch-blue-500 hatch-spacing-1 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">spacing-1 (4px)</p>
  </div>
  <div>
    <div data-test="spacing-2" class="bg-hatch-blue-500 hatch-spacing-2 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">spacing-2 (8px)</p>
  </div>
  <div>
    <div data-test="spacing-4" class="bg-hatch-blue-500 hatch-spacing-4 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">spacing-4 (16px)</p>
  </div>
  <div>
    <div data-test="spacing-8" class="bg-hatch-blue-500 hatch-spacing-8 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">spacing-8 (32px)</p>
  </div>
  <div>
    <div data-test="spacing-12" class="bg-hatch-blue-500 hatch-spacing-12 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">spacing-12 (48px)</p>
  </div>
  <div>
    <div data-test="spacing-16" class="bg-hatch-blue-500 hatch-spacing-16 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">spacing-16 (64px)</p>
  </div>
</div>

## Bleed (hatch-bleed-*)

All using `bg-hatch-red-500`.

<div class="grid grid-cols-5 gap-3 my-6">
  <div>
    <div data-test="bleed-0" class="bg-hatch-red-500 hatch-bleed-0 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bleed-0 (crisp)</p>
  </div>
  <div>
    <div data-test="bleed-1" class="bg-hatch-red-500 hatch-bleed-1 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bleed-1</p>
  </div>
  <div>
    <div data-test="bleed-2" class="bg-hatch-red-500 hatch-bleed-2 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bleed-2</p>
  </div>
  <div>
    <div data-test="bleed-3" class="bg-hatch-red-500 hatch-bleed-3 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bleed-3</p>
  </div>
  <div>
    <div data-test="bleed-4" class="bg-hatch-red-500 hatch-bleed-4 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bleed-4</p>
  </div>
</div>

## Opacity (bg-hatch-*/opacity)

All using `bg-hatch-red-500` with varying opacity modifiers.

<div class="grid grid-cols-6 gap-3 my-6">
  <div>
    <div data-test="opacity-100" class="bg-hatch-red-500 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">100% (default)</p>
  </div>
  <div>
    <div data-test="opacity-75" class="bg-hatch-red-500/75 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">/75</p>
  </div>
  <div>
    <div data-test="opacity-50" class="bg-hatch-red-500/50 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">/50</p>
  </div>
  <div>
    <div data-test="opacity-25" class="bg-hatch-red-500/25 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">/25</p>
  </div>
  <div>
    <div data-test="opacity-10" class="bg-hatch-red-500/10 h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">/10</p>
  </div>
  <div>
    <div data-test="opacity-0" class="bg-hatch-red-500/0 h-28 rounded-lg border border-gray-200"></div>
    <p class="text-xs font-mono text-center mt-1">/0</p>
  </div>
</div>

### Opacity over coloured backgrounds

Verifies the white paper becomes transparent, letting underlying content show through.

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="opacity-over-gradient" class="relative h-28 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-linear-to-br from-sky-400 to-indigo-600"></div>
      <div class="absolute inset-0 bg-hatch-black/50"></div>
    </div>
    <p class="text-xs font-mono text-center mt-1">black/50 over gradient</p>
  </div>
  <div>
    <div data-test="opacity-over-solid" class="relative h-28 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-amber-400"></div>
      <div class="absolute inset-0 bg-hatch-blue-500/40"></div>
    </div>
    <p class="text-xs font-mono text-center mt-1">blue-500/40 over amber</p>
  </div>
  <div>
    <div data-test="opacity-over-red" class="relative h-28 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-red-500"></div>
      <div class="absolute inset-0 bg-hatch-emerald-500/60"></div>
    </div>
    <p class="text-xs font-mono text-center mt-1">emerald-500/60 over red</p>
  </div>
  <div>
    <div data-test="opacity-over-dark" class="relative h-28 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-gray-900"></div>
      <div class="absolute inset-0 bg-hatch-yellow-400/30"></div>
    </div>
    <p class="text-xs font-mono text-center mt-1">yellow-400/30 over dark</p>
  </div>
</div>

## Arbitrary Values

<div class="grid grid-cols-3 gap-3 my-6">
  <div>
    <div data-test="arbitrary-color" class="bg-hatch-[#ff6600] h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">bg-hatch-[#ff6600]</p>
  </div>
  <div>
    <div data-test="arbitrary-weight" class="bg-hatch-blue-500 hatch-weight-[3px] h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">weight-[3px]</p>
  </div>
  <div>
    <div data-test="arbitrary-spacing" class="bg-hatch-blue-500 hatch-spacing-[20px] h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">spacing-[20px]</p>
  </div>
</div>

## Weight + Spacing Combinations (colour: blue)

<div class="my-6">
  <h3 class="text-sm font-mono mb-2">weight: 1px</h3>
  <div class="grid grid-cols-5 gap-3 mb-6">
    <div>
      <div data-test="w1-s1" class="bg-hatch-blue-500 hatch-weight-1 hatch-spacing-1 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">spacing-1</p>
    </div>
    <div>
      <div data-test="w1-s2" class="bg-hatch-blue-500 hatch-weight-1 hatch-spacing-2 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">spacing-2</p>
    </div>
    <div>
      <div data-test="w1-s4" class="bg-hatch-blue-500 hatch-weight-1 hatch-spacing-4 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">spacing-4</p>
    </div>
    <div>
      <div data-test="w1-s8" class="bg-hatch-blue-500 hatch-weight-1 hatch-spacing-8 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">spacing-8</p>
    </div>
    <div>
      <div data-test="w1-s16" class="bg-hatch-blue-500 hatch-weight-1 hatch-spacing-16 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">spacing-16</p>
    </div>
  </div>

  <h3 class="text-sm font-mono mb-2">weight: 2px</h3>
  <div class="grid grid-cols-5 gap-3 mb-6">
    <div>
      <div data-test="w2-s1" class="bg-hatch-blue-500 hatch-weight-2 hatch-spacing-1 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">spacing-1</p>
    </div>
    <div>
      <div data-test="w2-s2" class="bg-hatch-blue-500 hatch-weight-2 hatch-spacing-2 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">spacing-2</p>
    </div>
    <div>
      <div data-test="w2-s4" class="bg-hatch-blue-500 hatch-weight-2 hatch-spacing-4 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">spacing-4</p>
    </div>
    <div>
      <div data-test="w2-s8" class="bg-hatch-blue-500 hatch-weight-2 hatch-spacing-8 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">spacing-8</p>
    </div>
    <div>
      <div data-test="w2-s16" class="bg-hatch-blue-500 hatch-weight-2 hatch-spacing-16 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">spacing-16</p>
    </div>
  </div>

  <h3 class="text-sm font-mono mb-2">weight: 4px</h3>
  <div class="grid grid-cols-5 gap-3 mb-6">
    <div>
      <div data-test="w4-s2" class="bg-hatch-blue-500 hatch-weight-4 hatch-spacing-2 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">spacing-2</p>
    </div>
    <div>
      <div data-test="w4-s4" class="bg-hatch-blue-500 hatch-weight-4 hatch-spacing-4 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">spacing-4</p>
    </div>
    <div>
      <div data-test="w4-s8" class="bg-hatch-blue-500 hatch-weight-4 hatch-spacing-8 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">spacing-8</p>
    </div>
    <div>
      <div data-test="w4-s16" class="bg-hatch-blue-500 hatch-weight-4 hatch-spacing-16 h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">spacing-16</p>
    </div>
    <div>
      <div data-test="w4-s24" class="bg-hatch-blue-500 hatch-weight-4 hatch-spacing-[24px] h-28 rounded-lg"></div>
      <p class="text-xs font-mono text-center mt-1">spacing-[24px]</p>
    </div>
  </div>
</div>

## Density Tier Transitions

Colours chosen to demonstrate each tier boundary.

<div class="grid grid-cols-5 gap-3 my-6">
  <div>
    <div data-test="tier-broken" class="bg-hatch-[oklch(0.95_0.05_200)] h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">l=0.95 — broken dashes</p>
  </div>
  <div>
    <div data-test="tier-sparse" class="bg-hatch-[oklch(0.70_0.10_200)] h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">l=0.70 — sparse</p>
  </div>
  <div>
    <div data-test="tier-medium" class="bg-hatch-[oklch(0.40_0.10_200)] h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">l=0.40 — medium</p>
  </div>
  <div>
    <div data-test="tier-dense" class="bg-hatch-[oklch(0.20_0.10_200)] h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">l=0.20 — dense + cross</p>
  </div>
  <div>
    <div data-test="tier-triple" class="bg-hatch-[oklch(0.10_0.10_200)] h-28 rounded-lg"></div>
    <p class="text-xs font-mono text-center mt-1">l=0.10 — dense + cross + triple</p>
  </div>
</div>

## Border Gradients

Hatching composing with border-gradient utilities on the same element.

### Linear Border Gradients

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="border-linear-r" class="bg-hatch-blue-500 h-28 rounded-lg border-4 border-linear-to-r border-from-rose-500 border-to-cyan-500"></div>
    <p class="text-xs font-mono text-center mt-1">border-linear-to-r</p>
  </div>
  <div>
    <div data-test="border-linear-b" class="bg-hatch-red-500 h-28 rounded-lg border-4 border-linear-to-b border-from-amber-400 border-to-emerald-500"></div>
    <p class="text-xs font-mono text-center mt-1">border-linear-to-b</p>
  </div>
  <div>
    <div data-test="border-linear-br" class="bg-hatch-emerald-500 h-28 rounded-lg border-4 border-linear-to-br border-from-pink-500 border-to-violet-500"></div>
    <p class="text-xs font-mono text-center mt-1">border-linear-to-br</p>
  </div>
  <div>
    <div data-test="border-linear-angle" class="bg-hatch-purple-500 h-28 rounded-lg border-4 border-linear-45 border-from-sky-400 border-to-indigo-600"></div>
    <p class="text-xs font-mono text-center mt-1">border-linear-45</p>
  </div>
</div>

### Conic Border Gradients + Spin

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="border-conic" class="bg-hatch-cyan-500 h-28 rounded-lg border-4 border-conic-0 border-from-rose-500 border-via-yellow-400 border-to-cyan-500"></div>
    <p class="text-xs font-mono text-center mt-1">border-conic-0</p>
  </div>
  <div>
    <div data-test="border-spin" class="bg-hatch-blue-500 h-28 rounded-lg border-4 border-conic-0 border-spin border-from-rose-500 border-via-yellow-400 border-to-cyan-500"></div>
    <p class="text-xs font-mono text-center mt-1">border-spin</p>
  </div>
  <div>
    <div data-test="border-spin-fast" class="bg-hatch-red-500 h-28 rounded-lg border-4 border-conic-0 border-spin border-spin-duration-[500ms] border-from-pink-500 border-to-violet-500"></div>
    <p class="text-xs font-mono text-center mt-1">spin 500ms</p>
  </div>
  <div>
    <div data-test="border-spin-longer" class="bg-hatch-purple-500 h-28 rounded-lg border-4 border-conic/longer border-conic-0 border-spin border-from-red-500 border-to-blue-500"></div>
    <p class="text-xs font-mono text-center mt-1">spin /longer</p>
  </div>
</div>

## Side-by-side: Solid vs Hatch — All Tailwind Colours

<div class="grid grid-cols-[auto_1fr_1fr] gap-x-3 gap-y-1 items-center my-6">
  <p class="text-xs font-mono font-bold">Colour</p>
  <p class="text-xs font-mono font-bold text-center">Solid</p>
  <p class="text-xs font-mono font-bold text-center">Hatch</p>

  <p class="text-xs font-mono">slate-500</p>
  <div class="h-16 rounded-lg bg-slate-500"></div>
  <div data-test="compare-slate" class="bg-hatch-slate-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">gray-500</p>
  <div class="h-16 rounded-lg bg-gray-500"></div>
  <div data-test="compare-gray" class="bg-hatch-gray-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">red-500</p>
  <div class="h-16 rounded-lg bg-red-500"></div>
  <div data-test="compare-red" class="bg-hatch-red-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">orange-500</p>
  <div class="h-16 rounded-lg bg-orange-500"></div>
  <div data-test="compare-orange" class="bg-hatch-orange-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">amber-500</p>
  <div class="h-16 rounded-lg bg-amber-500"></div>
  <div data-test="compare-amber" class="bg-hatch-amber-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">yellow-500</p>
  <div class="h-16 rounded-lg bg-yellow-500"></div>
  <div data-test="compare-yellow" class="bg-hatch-yellow-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">lime-500</p>
  <div class="h-16 rounded-lg bg-lime-500"></div>
  <div data-test="compare-lime" class="bg-hatch-lime-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">green-500</p>
  <div class="h-16 rounded-lg bg-green-500"></div>
  <div data-test="compare-green" class="bg-hatch-green-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">emerald-500</p>
  <div class="h-16 rounded-lg bg-emerald-500"></div>
  <div data-test="compare-emerald" class="bg-hatch-emerald-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">teal-500</p>
  <div class="h-16 rounded-lg bg-teal-500"></div>
  <div data-test="compare-teal" class="bg-hatch-teal-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">cyan-500</p>
  <div class="h-16 rounded-lg bg-cyan-500"></div>
  <div data-test="compare-cyan" class="bg-hatch-cyan-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">sky-500</p>
  <div class="h-16 rounded-lg bg-sky-500"></div>
  <div data-test="compare-sky" class="bg-hatch-sky-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">blue-500</p>
  <div class="h-16 rounded-lg bg-blue-500"></div>
  <div data-test="compare-blue" class="bg-hatch-blue-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">indigo-500</p>
  <div class="h-16 rounded-lg bg-indigo-500"></div>
  <div data-test="compare-indigo" class="bg-hatch-indigo-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">violet-500</p>
  <div class="h-16 rounded-lg bg-violet-500"></div>
  <div data-test="compare-violet" class="bg-hatch-violet-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">purple-500</p>
  <div class="h-16 rounded-lg bg-purple-500"></div>
  <div data-test="compare-purple" class="bg-hatch-purple-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">fuchsia-500</p>
  <div class="h-16 rounded-lg bg-fuchsia-500"></div>
  <div data-test="compare-fuchsia" class="bg-hatch-fuchsia-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">pink-500</p>
  <div class="h-16 rounded-lg bg-pink-500"></div>
  <div data-test="compare-pink" class="bg-hatch-pink-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">rose-500</p>
  <div class="h-16 rounded-lg bg-rose-500"></div>
  <div data-test="compare-rose" class="bg-hatch-rose-500 h-16 rounded-lg"></div>
</div>

## Full Scale: Blue 50–950

<div class="grid grid-cols-[auto_1fr_1fr] gap-x-3 gap-y-1 items-center my-6">
  <p class="text-xs font-mono font-bold">Shade</p>
  <p class="text-xs font-mono font-bold text-center">Solid</p>
  <p class="text-xs font-mono font-bold text-center">Hatch</p>

  <p class="text-xs font-mono">50</p>
  <div class="h-16 rounded-lg bg-blue-50"></div>
  <div data-test="blue-50" class="bg-hatch-blue-50 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">100</p>
  <div class="h-16 rounded-lg bg-blue-100"></div>
  <div data-test="blue-100" class="bg-hatch-blue-100 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">200</p>
  <div class="h-16 rounded-lg bg-blue-200"></div>
  <div data-test="blue-200" class="bg-hatch-blue-200 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">300</p>
  <div class="h-16 rounded-lg bg-blue-300"></div>
  <div data-test="blue-300" class="bg-hatch-blue-300 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">400</p>
  <div class="h-16 rounded-lg bg-blue-400"></div>
  <div data-test="blue-400" class="bg-hatch-blue-400 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">500</p>
  <div class="h-16 rounded-lg bg-blue-500"></div>
  <div data-test="blue-500" class="bg-hatch-blue-500 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">600</p>
  <div class="h-16 rounded-lg bg-blue-600"></div>
  <div data-test="blue-600" class="bg-hatch-blue-600 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">700</p>
  <div class="h-16 rounded-lg bg-blue-700"></div>
  <div data-test="blue-700" class="bg-hatch-blue-700 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">800</p>
  <div class="h-16 rounded-lg bg-blue-800"></div>
  <div data-test="blue-800" class="bg-hatch-blue-800 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">900</p>
  <div class="h-16 rounded-lg bg-blue-900"></div>
  <div data-test="blue-900" class="bg-hatch-blue-900 h-16 rounded-lg"></div>

  <p class="text-xs font-mono">950</p>
  <div class="h-16 rounded-lg bg-blue-950"></div>
  <div data-test="blue-950" class="bg-hatch-blue-950 h-16 rounded-lg"></div>
</div>
