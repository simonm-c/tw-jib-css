---
title: Border Gradient Test Fixtures
layout: page
---

<style>
:root {
  --custom-bg-color: oklch(0.65 0.15 250);
  --custom-border-from: oklch(0.6 0.25 330);
  --custom-border-to: oklch(0.7 0.2 200);
}
</style>

# Border Gradient Test Fixtures

Test page covering all background × border-gradient combinations.

## Background Colors

Each element pairs a background color variant with a standard linear border gradient.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="bg-named" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg-blue-500</span>
  </div>
  <div data-test="bg-named-alt" class="h-20 rounded-lg border-4 flex items-center justify-center bg-emerald-600 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg-emerald-600</span>
  </div>
  <div data-test="bg-opacity-50" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500/50 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg-blue-500/50</span>
  </div>
  <div data-test="bg-opacity-25" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500/25 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg-blue-500/25</span>
  </div>
  <div data-test="bg-opacity-75" class="h-20 rounded-lg border-4 flex items-center justify-center bg-red-500/75 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg-red-500/75</span>
  </div>
  <div data-test="bg-opacity-0" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500/0 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg-blue-500/0</span>
  </div>
  <div data-test="bg-arbitrary-hex" class="h-20 rounded-lg border-4 flex items-center justify-center bg-[#ff6b35] border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg-[#ff6b35]</span>
  </div>
  <div data-test="bg-arbitrary-rgb" class="h-20 rounded-lg border-4 flex items-center justify-center bg-[rgb(50,215,30)] border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg-[rgb()]</span>
  </div>
  <div data-test="bg-arbitrary-oklch" class="h-20 rounded-lg border-4 flex items-center justify-center bg-[oklch(0.7_0.15_200)] border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg-[oklch()]</span>
  </div>
  <div data-test="bg-css-var" class="h-20 rounded-lg border-4 flex items-center justify-center bg-(color:--custom-bg-color) border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg-(color:--var)</span>
  </div>
    <div class="bg-red-500">
      <div data-test="bg-inherit" class="h-20 rounded-lg border-4 flex items-center justify-center bg-inherit border-linear-to-r border-from-rose-500 border-to-cyan-500">
        <span class="text-xs font-mono text-white/70">bg-inherit</span>
      </div>
    </div>
  <div data-test="bg-transparent" class="h-20 rounded-lg border-4 flex items-center justify-center bg-transparent border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg-transparent</span>
  </div>
  <div data-test="bg-current" class="h-20 rounded-lg border-4 flex items-center justify-center text-indigo-500 bg-current border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg-current</span>
  </div>
  <div data-test="bg-black" class="h-20 rounded-lg border-4 flex items-center justify-center bg-black border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg-black</span>
  </div>
  <div data-test="bg-white" class="h-20 rounded-lg border-4 flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">bg-white</span>
  </div>
</div>

## Background Linear Gradients

Background gradients (all directions) with a standard border gradient.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="bg-linear-to-r" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r from-blue-500 to-purple-500 border-linear-to-b border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">to-r</span>
  </div>
  <div data-test="bg-linear-to-l" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-l from-blue-500 to-purple-500 border-linear-to-b border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">to-l</span>
  </div>
  <div data-test="bg-linear-to-t" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-t from-blue-500 to-purple-500 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">to-t</span>
  </div>
  <div data-test="bg-linear-to-b" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-b from-blue-500 to-purple-500 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">to-b</span>
  </div>
  <div data-test="bg-linear-to-tr" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-tr from-blue-500 to-purple-500 border-linear-to-bl border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">to-tr</span>
  </div>
  <div data-test="bg-linear-to-br" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-br from-blue-500 to-purple-500 border-linear-to-tl border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">to-br</span>
  </div>
  <div data-test="bg-linear-to-bl" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-bl from-blue-500 to-purple-500 border-linear-to-tr border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">to-bl</span>
  </div>
  <div data-test="bg-linear-to-tl" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-tl from-blue-500 to-purple-500 border-linear-to-br border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">to-tl</span>
  </div>
  <div data-test="bg-linear-angle" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-45 from-blue-500 to-purple-500 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">45deg</span>
  </div>
  <div data-test="bg-linear-angle-neg" class="h-20 rounded-lg border-4 flex items-center justify-center -bg-linear-45 from-blue-500 to-purple-500 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">-45deg</span>
  </div>
  <div data-test="bg-linear-angle-arbitrary" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-[137deg] from-blue-500 to-purple-500 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">[137deg]</span>
  </div>
  <div data-test="bg-linear-via" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r from-pink-500 via-yellow-400 to-cyan-500 border-linear-to-b border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">from/via/to</span>
  </div>
  <div data-test="bg-linear-positions" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r from-blue-500 from-10% via-purple-500 via-30% to-pink-500 to-90% border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">positions</span>
  </div>
</div>

## Background Radial & Conic Gradients

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="bg-radial" class="h-20 rounded-lg border-4 flex items-center justify-center bg-radial from-blue-500 to-purple-500 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">radial</span>
  </div>
  <div data-test="bg-radial-position" class="h-20 rounded-lg border-4 flex items-center justify-center bg-radial-[at_25%_25%] from-blue-500 to-purple-500 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">radial [at]</span>
  </div>
  <div data-test="bg-conic" class="h-20 rounded-lg border-4 flex items-center justify-center bg-conic from-blue-500 via-green-500 to-purple-500 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">conic</span>
  </div>
  <div data-test="bg-conic-angle" class="h-20 rounded-lg border-4 flex items-center justify-center bg-conic-45 from-blue-500 via-green-500 to-purple-500 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">conic 45</span>
  </div>
  <div data-test="bg-conic-angle-neg" class="h-20 rounded-lg border-4 flex items-center justify-center -bg-conic-45 from-blue-500 via-green-500 to-purple-500 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">conic -45</span>
  </div>
  <div data-test="bg-conic-arbitrary" class="h-20 rounded-lg border-4 flex items-center justify-center bg-conic-[from_90deg] from-blue-500 to-purple-500 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">conic [90deg]</span>
  </div>
  <div data-test="bg-none" class="h-20 rounded-lg border-4 flex items-center justify-center bg-none border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">bg-none</span>
  </div>
</div>

## Background Gradient Interpolation Modifiers

Background linear gradient with each TW4 interpolation modifier, plus a border gradient.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="bg-interp-srgb" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r/srgb from-red-500 to-blue-500 border-linear-to-b border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">/srgb</span>
  </div>
  <div data-test="bg-interp-hsl" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r/hsl from-red-500 to-blue-500 border-linear-to-b border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">/hsl</span>
  </div>
  <div data-test="bg-interp-oklab" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r/oklab from-red-500 to-blue-500 border-linear-to-b border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">/oklab</span>
  </div>
  <div data-test="bg-interp-oklch" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r/oklch from-red-500 to-blue-500 border-linear-to-b border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">/oklch</span>
  </div>
  <div data-test="bg-interp-longer" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r/longer from-red-500 to-blue-500 border-linear-to-b border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">/longer</span>
  </div>
  <div data-test="bg-interp-shorter" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r/shorter from-red-500 to-blue-500 border-linear-to-b border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">/shorter</span>
  </div>
  <div data-test="bg-interp-increasing" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r/increasing from-red-500 to-blue-500 border-linear-to-b border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">/increasing</span>
  </div>
  <div data-test="bg-interp-decreasing" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r/decreasing from-red-500 to-blue-500 border-linear-to-b border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">/decreasing</span>
  </div>
</div>

## Background URLs

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="bg-url" class="h-20 rounded-lg border-4 flex items-center justify-center bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2220%22%20height=%2220%22%3E%3Ccircle%20cx=%2210%22%20cy=%2210%22%20r=%224%22%20fill=%22%236366f1%22/%3E%3C/svg%3E')] border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">bg-[url()]</span>
  </div>
</div>

## Border Gradient Types

All border gradient types with a standard solid background.

### Linear Directions

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="border-linear-to-r" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">to-r</span>
  </div>
  <div data-test="border-linear-to-l" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-l border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">to-l</span>
  </div>
  <div data-test="border-linear-to-t" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-t border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">to-t</span>
  </div>
  <div data-test="border-linear-to-b" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-b border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">to-b</span>
  </div>
  <div data-test="border-linear-to-tr" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-tr border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">to-tr</span>
  </div>
  <div data-test="border-linear-to-br" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-br border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">to-br</span>
  </div>
  <div data-test="border-linear-to-bl" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-bl border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">to-bl</span>
  </div>
  <div data-test="border-linear-to-tl" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-tl border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">to-tl</span>
  </div>
</div>

### Linear Angles

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="border-linear-45" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-45 border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">45</span>
  </div>
  <div data-test="border-linear-90" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-90 border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">90</span>
  </div>
  <div data-test="border-linear-135" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-135 border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">135</span>
  </div>
  <div data-test="border-linear-neg" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 -border-linear-45 border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">-45</span>
  </div>
  <div data-test="border-linear-arbitrary-angle" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-[137deg] border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">[137deg]</span>
  </div>
</div>

### Radial

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="border-radial" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-radial border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">radial</span>
  </div>
  <div data-test="border-radial-position" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-radial-[at_25%_25%] border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">radial [at]</span>
  </div>
  <div data-test="border-radial-position-top" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-radial-[at_top] border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">radial [top]</span>
  </div>
</div>

### Conic

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="border-conic-0" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-conic-0 border-from-rose-500 border-via-yellow-400 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">conic 0</span>
  </div>
  <div data-test="border-conic-45" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-conic-45 border-from-rose-500 border-via-yellow-400 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">conic 45</span>
  </div>
  <div data-test="border-conic-90" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-conic-90 border-from-rose-500 border-via-yellow-400 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">conic 90</span>
  </div>
  <div data-test="border-conic-180" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-conic-180 border-from-rose-500 border-via-yellow-400 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">conic 180</span>
  </div>
  <div data-test="border-conic-neg" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 -border-conic-45 border-from-rose-500 border-via-yellow-400 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">conic -45</span>
  </div>
</div>

## Border Gradient Interpolation Modifiers

All 8 interpolation modes on a linear border gradient. Same from/to colors to show interpolation differences.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="border-interp-srgb" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear/srgb border-linear-to-r border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">/srgb</span>
  </div>
  <div data-test="border-interp-hsl" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear/hsl border-linear-to-r border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">/hsl</span>
  </div>
  <div data-test="border-interp-oklab" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear/oklab border-linear-to-r border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">/oklab</span>
  </div>
  <div data-test="border-interp-oklch" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear/oklch border-linear-to-r border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">/oklch</span>
  </div>
  <div data-test="border-interp-longer" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear/longer border-linear-to-r border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">/longer</span>
  </div>
  <div data-test="border-interp-shorter" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear/shorter border-linear-to-r border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">/shorter</span>
  </div>
  <div data-test="border-interp-increasing" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear/increasing border-linear-to-r border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">/increasing</span>
  </div>
  <div data-test="border-interp-decreasing" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear/decreasing border-linear-to-r border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">/decreasing</span>
  </div>
</div>

### Interpolation on Radial

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="border-radial-interp-srgb" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-radial/srgb border-radial border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">radial /srgb</span>
  </div>
  <div data-test="border-radial-interp-oklch" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-radial/oklch border-radial border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">radial /oklch</span>
  </div>
  <div data-test="border-radial-interp-longer" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-radial/longer border-radial border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">radial /longer</span>
  </div>
  <div data-test="border-radial-interp-decreasing" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-radial/decreasing border-radial border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">radial /decr</span>
  </div>
</div>

### Interpolation on Conic

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="border-conic-interp-srgb" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-conic/srgb border-conic-0 border-from-red-500 border-via-yellow-400 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">conic /srgb</span>
  </div>
  <div data-test="border-conic-interp-oklch" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-conic/oklch border-conic-0 border-from-red-500 border-via-yellow-400 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">conic /oklch</span>
  </div>
  <div data-test="border-conic-interp-longer" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-conic/longer border-conic-0 border-from-red-500 border-via-yellow-400 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">conic /longer</span>
  </div>
  <div data-test="border-conic-interp-increasing" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-conic/increasing border-conic-0 border-from-red-500 border-via-yellow-400 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">conic /incr</span>
  </div>
</div>

## Border Gradient Color Stops

### Basic From/To

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="border-stops-named" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-r border-from-blue-500 border-to-purple-500">
    <span class="text-xs font-mono text-white/70">named colors</span>
  </div>
  <div data-test="border-stops-arbitrary" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-r border-from-[#ff6b35] border-to-[#00b4d8]">
    <span class="text-xs font-mono text-white/70">arbitrary hex</span>
  </div>
  <div data-test="border-stops-css-var" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-r border-from-(color:--custom-border-from) border-to-(color:--custom-border-to)">
    <span class="text-xs font-mono text-white/70">css vars</span>
  </div>
  <div data-test="border-stops-transparent-to" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-r border-from-blue-500 border-to-transparent">
    <span class="text-xs font-mono text-white/70">to transparent</span>
  </div>
  <div data-test="border-stops-transparent-from" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-r border-from-transparent border-to-blue-500">
    <span class="text-xs font-mono text-white/70">from transparent</span>
  </div>
  <div data-test="border-stops-inherit" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-r border-from-inherit border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">from inherit</span>
  </div>
</div>

### From/Via/To

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="border-stops-via" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-r border-from-rose-500 border-via-yellow-400 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">from/via/to</span>
  </div>
  <div data-test="border-stops-via-arbitrary" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-r border-from-[#ff0000] border-via-[#00ff00] border-to-[#0000ff]">
    <span class="text-xs font-mono text-white/70">via arbitrary</span>
  </div>
  <div data-test="border-stops-via-transparent" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-r border-from-rose-500 border-via-transparent border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">via transparent</span>
  </div>
</div>

### Color Stop Positions

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="border-stops-from-pos" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-r border-from-rose-500 border-from-20% border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">from 20%</span>
  </div>
  <div data-test="border-stops-to-pos" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-r border-from-rose-500 border-to-cyan-500 border-to-80%">
    <span class="text-xs font-mono text-white/70">to 80%</span>
  </div>
  <div data-test="border-stops-via-pos" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-r border-from-rose-500 border-via-yellow-400 border-via-25% border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">via 25%</span>
  </div>
  <div data-test="border-stops-all-pos" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-r border-from-rose-500 border-from-10% border-via-yellow-400 border-via-30% border-to-cyan-500 border-to-90%">
    <span class="text-xs font-mono text-white/70">all positions</span>
  </div>
</div>

## Border Spin

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="border-spin-conic" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-conic-0 border-spin border-from-rose-500 border-via-yellow-400 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">spin default</span>
  </div>
  <div data-test="border-spin-fast" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-conic-0 border-spin border-spin-duration-[500ms] border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">spin 500ms</span>
  </div>
  <div data-test="border-spin-slow" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-conic-0 border-spin border-spin-duration-3 border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">spin 3s</span>
  </div>
  <div data-test="border-spin-interp" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-conic/longer border-conic-0 border-spin border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">spin /longer</span>
  </div>
</div>

## Edge Cases: Background Modifiers + Border Gradient

Background color with opacity modifier combined with each border gradient interpolation.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="edge-bg-opacity-border-srgb" class="h-20 rounded-lg border-4 flex items-center justify-center bg-indigo-500/50 border-linear/srgb border-linear-to-r border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">bg/50 + /srgb</span>
  </div>
  <div data-test="edge-bg-opacity-border-oklch" class="h-20 rounded-lg border-4 flex items-center justify-center bg-indigo-500/50 border-linear/oklch border-linear-to-r border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">bg/50 + /oklch</span>
  </div>
  <div data-test="edge-bg-opacity-border-longer" class="h-20 rounded-lg border-4 flex items-center justify-center bg-indigo-500/50 border-linear/longer border-linear-to-r border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">bg/50 + /longer</span>
  </div>
  <div data-test="edge-bg-opacity-border-hsl" class="h-20 rounded-lg border-4 flex items-center justify-center bg-indigo-500/50 border-linear/hsl border-linear-to-r border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">bg/50 + /hsl</span>
  </div>
  <div data-test="edge-bg-opacity-border-oklab" class="h-20 rounded-lg border-4 flex items-center justify-center bg-indigo-500/25 border-linear/oklab border-linear-to-r border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">bg/25 + /oklab</span>
  </div>
  <div data-test="edge-bg-opacity-border-shorter" class="h-20 rounded-lg border-4 flex items-center justify-center bg-indigo-500/75 border-linear/shorter border-linear-to-r border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">bg/75 + /shorter</span>
  </div>
  <div data-test="edge-bg-opacity-border-increasing" class="h-20 rounded-lg border-4 flex items-center justify-center bg-indigo-500/50 border-linear/increasing border-linear-to-r border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">bg/50 + /incr</span>
  </div>
  <div data-test="edge-bg-opacity-border-decreasing" class="h-20 rounded-lg border-4 flex items-center justify-center bg-indigo-500/50 border-linear/decreasing border-linear-to-r border-from-red-500 border-to-blue-500">
    <span class="text-xs font-mono text-white/70">bg/50 + /decr</span>
  </div>
</div>

## Edge Cases: Background Gradient Interpolation + Border Gradient Interpolation

Both the background gradient and border gradient use different interpolation modes.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="edge-both-srgb" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r/srgb from-red-500 to-blue-500 border-linear/srgb border-linear-to-b border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">both /srgb</span>
  </div>
  <div data-test="edge-both-oklch" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r/oklch from-red-500 to-blue-500 border-linear/oklch border-linear-to-b border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">both /oklch</span>
  </div>
  <div data-test="edge-bg-srgb-border-longer" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r/srgb from-red-500 to-blue-500 border-linear/longer border-linear-to-b border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">bg/srgb b/longer</span>
  </div>
  <div data-test="edge-bg-longer-border-srgb" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r/longer from-red-500 to-blue-500 border-linear/srgb border-linear-to-b border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">bg/longer b/srgb</span>
  </div>
  <div data-test="edge-bg-hsl-border-oklch" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r/hsl from-red-500 to-blue-500 border-linear/oklch border-linear-to-b border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">bg/hsl b/oklch</span>
  </div>
  <div data-test="edge-bg-oklch-border-hsl" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r/oklch from-red-500 to-blue-500 border-linear/hsl border-linear-to-b border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">bg/oklch b/hsl</span>
  </div>
  <div data-test="edge-bg-increasing-border-decreasing" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r/increasing from-red-500 to-blue-500 border-linear/decreasing border-linear-to-b border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">bg/incr b/decr</span>
  </div>
  <div data-test="edge-bg-decreasing-border-increasing" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r/decreasing from-red-500 to-blue-500 border-linear/increasing border-linear-to-b border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">bg/decr b/incr</span>
  </div>
</div>

## Edge Cases: Mixed Gradient Types

Background radial/conic with border linear/conic/radial, and vice versa.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="edge-bg-radial-border-linear" class="h-20 rounded-lg border-4 flex items-center justify-center bg-radial from-blue-500 to-purple-900 border-linear-to-r border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">radial + linear</span>
  </div>
  <div data-test="edge-bg-radial-border-conic" class="h-20 rounded-lg border-4 flex items-center justify-center bg-radial from-blue-500 to-purple-900 border-conic-0 border-from-amber-400 border-via-rose-500 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">radial + conic</span>
  </div>
  <div data-test="edge-bg-conic-border-linear" class="h-20 rounded-lg border-4 flex items-center justify-center bg-conic from-blue-500 via-green-500 to-purple-500 border-linear-to-r border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">conic + linear</span>
  </div>
  <div data-test="edge-bg-conic-border-radial" class="h-20 rounded-lg border-4 flex items-center justify-center bg-conic from-blue-500 via-green-500 to-purple-500 border-radial border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">conic + radial</span>
  </div>
  <div data-test="edge-bg-linear-border-radial" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r from-blue-500 to-purple-500 border-radial border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">linear + radial</span>
  </div>
  <div data-test="edge-bg-linear-border-conic" class="h-20 rounded-lg border-4 flex items-center justify-center bg-linear-to-r from-blue-500 to-purple-500 border-conic-0 border-from-amber-400 border-via-rose-500 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">linear + conic</span>
  </div>
</div>

## Edge Cases: Arbitrary Colors + Positions on Border Gradient

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="edge-border-arbitrary-oklch" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-r border-from-[oklch(0.6_0.25_330)] border-to-[oklch(0.7_0.2_200)]">
    <span class="text-xs font-mono text-white/70">oklch stops</span>
  </div>
  <div data-test="edge-border-arbitrary-hsl" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-r border-from-[hsl(330,80%,50%)] border-to-[hsl(200,80%,50%)]">
    <span class="text-xs font-mono text-white/70">hsl stops</span>
  </div>
  <div data-test="edge-border-arbitrary-rgb" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-r border-from-[rgb(255,100,50)] border-to-[rgb(0,180,216)]">
    <span class="text-xs font-mono text-white/70">rgb stops</span>
  </div>
</div>

## Border Styles: Transparent Border Colour (Default)

All 8 border styles with gradient and default transparent border colour.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="style-solid" class="h-20 rounded-lg border-8 border-solid flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">solid</span>
  </div>
  <div data-test="style-dashed" class="h-20 rounded-lg border-8 border-dashed flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">dashed</span>
  </div>
  <div data-test="style-dotted" class="h-20 rounded-lg border-8 border-dotted flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">dotted</span>
  </div>
  <div data-test="style-double" class="h-20 rounded-lg border-8 border-double flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">double</span>
  </div>
  <div data-test="style-groove" class="h-20 rounded-lg border-8 border-groove flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">groove</span>
  </div>
  <div data-test="style-ridge" class="h-20 rounded-lg border-8 border-ridge flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">ridge</span>
  </div>
  <div data-test="style-inset" class="h-20 rounded-lg border-8 border-inset flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">inset</span>
  </div>
  <div data-test="style-outset" class="h-20 rounded-lg border-8 border-outset flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">outset</span>
  </div>
</div>

## Border Styles: Solid Border Colour

All 8 border styles with gradient and a solid border colour (border-amber-500). Solid colour hides gradient on painted segments; gradient shows through gaps.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="style-color-solid" class="h-20 rounded-lg border-8 border-amber-500 border-solid flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">solid</span>
  </div>
  <div data-test="style-color-dashed" class="h-20 rounded-lg border-8 border-amber-500 border-dashed flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">dashed</span>
  </div>
  <div data-test="style-color-dotted" class="h-20 rounded-lg border-8 border-amber-500 border-dotted flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">dotted</span>
  </div>
  <div data-test="style-color-double" class="h-20 rounded-lg border-8 border-amber-500 border-double flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">double</span>
  </div>
  <div data-test="style-color-groove" class="h-20 rounded-lg border-8 border-amber-500 border-groove flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">groove</span>
  </div>
  <div data-test="style-color-ridge" class="h-20 rounded-lg border-8 border-amber-500 border-ridge flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">ridge</span>
  </div>
  <div data-test="style-color-inset" class="h-20 rounded-lg border-8 border-amber-500 border-inset flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">inset</span>
  </div>
  <div data-test="style-color-outset" class="h-20 rounded-lg border-8 border-amber-500 border-outset flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">outset</span>
  </div>
</div>

## Border Styles: Semi-Transparent Border Colour

All 8 border styles with gradient and a semi-transparent border colour (border-amber-500/50). Colour tints gradient on painted segments; full gradient in gaps.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="style-alpha-solid" class="h-20 rounded-lg border-8 border-amber-500/50 border-solid flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">solid</span>
  </div>
  <div data-test="style-alpha-dashed" class="h-20 rounded-lg border-8 border-amber-500/50 border-dashed flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">dashed</span>
  </div>
  <div data-test="style-alpha-dotted" class="h-20 rounded-lg border-8 border-amber-500/50 border-dotted flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">dotted</span>
  </div>
  <div data-test="style-alpha-double" class="h-20 rounded-lg border-8 border-amber-500/50 border-double flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">double</span>
  </div>
  <div data-test="style-alpha-groove" class="h-20 rounded-lg border-8 border-amber-500/50 border-groove flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">groove</span>
  </div>
  <div data-test="style-alpha-ridge" class="h-20 rounded-lg border-8 border-amber-500/50 border-ridge flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">ridge</span>
  </div>
  <div data-test="style-alpha-inset" class="h-20 rounded-lg border-8 border-amber-500/50 border-inset flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">inset</span>
  </div>
  <div data-test="style-alpha-outset" class="h-20 rounded-lg border-8 border-amber-500/50 border-outset flex items-center justify-center bg-white border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">outset</span>
  </div>
</div>

## Edge Cases: Thick & Thin Borders

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="edge-border-1" class="h-20 rounded-lg border flex items-center justify-center bg-slate-800 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">border (1px)</span>
  </div>
  <div data-test="edge-border-2" class="h-20 rounded-lg border-2 flex items-center justify-center bg-slate-800 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">border-2</span>
  </div>
  <div data-test="edge-border-4" class="h-20 rounded-lg border-4 flex items-center justify-center bg-slate-800 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">border-4</span>
  </div>
  <div data-test="edge-border-8" class="h-20 rounded-lg border-8 flex items-center justify-center bg-slate-800 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">border-8</span>
  </div>
</div>

## Edge Cases: No Background

Border gradient with no explicit background set.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="edge-no-bg-linear" class="h-20 rounded-lg border-4 flex items-center justify-center border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">no bg + linear</span>
  </div>
  <div data-test="edge-no-bg-radial" class="h-20 rounded-lg border-4 flex items-center justify-center border-radial border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">no bg + radial</span>
  </div>
  <div data-test="edge-no-bg-conic" class="h-20 rounded-lg border-4 flex items-center justify-center border-conic-0 border-from-rose-500 border-via-yellow-400 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">no bg + conic</span>
  </div>
  <div data-test="edge-no-bg-spin" class="h-20 rounded-lg border-4 flex items-center justify-center border-conic-0 border-spin border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500">no bg + spin</span>
  </div>
</div>

## Edge Cases: State Variants

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="edge-hover-bg" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500 hover:bg-red-500 border-linear-to-r border-from-rose-500 border-to-cyan-500 cursor-pointer">
    <span class="text-xs font-mono text-white/70">hover:bg</span>
  </div>
  <div data-test="edge-focus-bg" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500 focus:bg-green-500 border-linear-to-r border-from-rose-500 border-to-cyan-500 cursor-pointer" tabindex="0">
    <span class="text-xs font-mono text-white/70">focus:bg</span>
  </div>
  <div data-test="edge-dark-bg" class="h-20 rounded-lg border-4 flex items-center justify-center bg-white dark:bg-slate-900 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-gray-500 dark:text-white/70">dark:bg</span>
  </div>
</div>
