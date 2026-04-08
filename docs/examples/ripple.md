---
title: Ripple Effect Test Fixtures
layout: page
---

# Ripple Effect Test Fixtures

Visual test page for `bg-ripple` over various background types. **Click and hold** each card to trigger the ripple animation.

## Ripple over Solid Colors

Default ripple (white 20% opacity, 400ms, center).

<div class="grid grid-cols-4 gap-4 my-6">
  <div>
    <div data-test="solid-blue" class="bg-blue-500 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">bg-blue-500</p>
  </div>
  <div>
    <div data-test="solid-red" class="bg-red-500 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">bg-red-500</p>
  </div>
  <div>
    <div data-test="solid-emerald" class="bg-emerald-500 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">bg-emerald-500</p>
  </div>
  <div>
    <div data-test="solid-gray-900" class="bg-gray-900 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">bg-gray-900</p>
  </div>
</div>

## Ripple over Linear Gradients

`bg-ripple` composes with TW gradient utilities via `--tw-jib--bg-image`.

<div class="grid grid-cols-3 gap-4 my-6">
  <div>
    <div data-test="linear-blue-purple" class="bg-linear-to-r from-blue-500 to-purple-500 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">from-blue-500 to-purple-500</p>
  </div>
  <div>
    <div data-test="linear-rose-orange" class="bg-linear-to-br from-rose-500 to-orange-400 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">from-rose-500 to-orange-400</p>
  </div>
  <div>
    <div data-test="linear-emerald-cyan" class="bg-linear-to-r from-emerald-400 to-cyan-400 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">from-emerald-400 to-cyan-400</p>
  </div>
  <div>
    <div data-test="linear-three-stop" class="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">indigo → purple → pink</p>
  </div>
  <div>
    <div data-test="linear-warm" class="bg-linear-to-br from-amber-200 via-red-400 to-fuchsia-600 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">amber → red → fuchsia</p>
  </div>
  <div>
    <div data-test="linear-dark" class="bg-linear-to-r from-gray-900 via-gray-700 to-gray-900 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">dark gradient (900→700→900)</p>
  </div>
</div>

## Ripple over Radial & Conic Gradients

<div class="grid grid-cols-3 gap-4 my-6">
  <div>
    <div data-test="radial-sky" class="bg-radial from-sky-300 to-blue-600 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">bg-radial sky → blue</p>
  </div>
  <div>
    <div data-test="radial-warm" class="bg-radial from-yellow-200 to-orange-500 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">bg-radial yellow → orange</p>
  </div>
  <div>
    <div data-test="conic-rainbow" class="bg-conic from-red-500 via-yellow-500 to-red-500 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">bg-conic rainbow</p>
  </div>
</div>

## Ripple over Ben Day Dots

`bg-comic-*` includes ripple and border-gradient layers in its background stack — just add `bg-ripple` on the same element.

<div class="grid grid-cols-3 gap-4 my-6">
  <div>
    <div data-test="comic-blue" class="bg-comic-blue-500 comic-gap-4 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">bg-comic-blue-500</p>
  </div>
  <div>
    <div data-test="comic-red" class="bg-comic-red-500 comic-gap-4 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">bg-comic-red-500</p>
  </div>
  <div>
    <div data-test="comic-emerald" class="bg-comic-emerald-500 comic-gap-4 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">bg-comic-emerald-500</p>
  </div>
  <div>
    <div data-test="comic-large-dots" class="bg-comic-purple-500 comic-dot-2 comic-gap-8 comic-bleed-1 bg-ripple ripple-color-purple-300 h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">large dots + colored ripple</p>
  </div>
  <div>
    <div data-test="comic-fine-dots" class="bg-comic-orange-500 comic-dot-0.5 comic-gap-2 comic-bleed-0 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">fine crisp dots</p>
  </div>
  <div>
    <div data-test="comic-soft-dots" class="bg-comic-cyan-500 comic-dot-1.5 comic-gap-4 comic-bleed-2 bg-ripple ripple-color-cyan-200 h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">soft bleed + colored ripple</p>
  </div>
  <div>
    <div data-test="comic-border-linear" class="bg-comic-blue-500 comic-gap-4 bg-ripple h-32 rounded-lg border-4 border-linear-to-r border-from-rose-500 border-to-cyan-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">dots + border-linear</p>
  </div>
  <div>
    <div data-test="comic-border-radial" class="bg-comic-red-500 comic-gap-4 bg-ripple h-32 rounded-lg border-4 border-radial border-from-amber-400 border-to-purple-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">dots + border-radial</p>
  </div>
  <div>
    <div data-test="comic-border-conic" class="bg-comic-emerald-500 comic-gap-4 bg-ripple h-32 rounded-lg border-4 border-conic-0 border-from-pink-500 border-via-yellow-400 border-to-cyan-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">dots + border-conic</p>
  </div>
  <div>
    <div data-test="comic-border-spin" class="bg-comic-purple-500 comic-dot-2 comic-gap-6 comic-bleed-1 bg-ripple ripple-color-purple-300 h-32 rounded-lg border-4 border-conic-0 border-spin border-from-sky-400 border-via-violet-500 border-to-sky-400 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">large dots + border-spin</p>
  </div>
  <div>
    <div data-test="comic-border-via" class="bg-comic-orange-500 comic-dot-0.5 comic-gap-2 comic-bleed-0 bg-ripple h-32 rounded-lg border-4 border-linear-to-br border-from-rose-500 border-via-amber-400 border-to-emerald-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">fine dots + border via</p>
  </div>
  <div>
    <div data-test="comic-border-interp" class="bg-comic-cyan-500 comic-dot-1.5 comic-gap-4 comic-bleed-2 bg-ripple ripple-color-cyan-200 h-32 rounded-lg border-4 border-linear-to-r/oklch border-from-red-500 border-to-blue-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">soft dots + border /oklch</p>
  </div>
</div>

## Ripple over Sub-Pixel Patterns

`bg-pixel-*` includes ripple and border-gradient layers — same single-element composition.

<div class="grid grid-cols-3 gap-4 my-6">
  <div>
    <div data-test="pixel-white" class="bg-pixel-white pixel-size-2 pixel-gap-1 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">bg-pixel-white</p>
  </div>
  <div>
    <div data-test="pixel-blue" class="bg-pixel-blue-500 pixel-size-2 pixel-gap-1 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">bg-pixel-blue-500</p>
  </div>
  <div>
    <div data-test="pixel-red" class="bg-pixel-red-500 pixel-size-2 pixel-gap-1 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">bg-pixel-red-500</p>
  </div>
  <div>
    <div data-test="pixel-large" class="bg-pixel-emerald-400 pixel-size-4 pixel-gap-2 pixel-bleed-1 bg-ripple ripple-color-emerald-200 h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">large pixels + colored ripple</p>
  </div>
  <div>
    <div data-test="pixel-crisp" class="bg-pixel-amber-400 pixel-size-1 pixel-gap-1 pixel-bleed-0 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">crisp tiny pixels</p>
  </div>
  <div>
    <div data-test="pixel-glow" class="bg-pixel-fuchsia-400 pixel-size-3 pixel-gap-1 pixel-bleed-2 bg-ripple ripple-color-fuchsia-200 h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">CRT glow + colored ripple</p>
  </div>
  <div>
    <div data-test="pixel-border-linear" class="bg-pixel-blue-500 pixel-size-2 pixel-gap-1 bg-ripple h-32 rounded-lg border-4 border-linear-to-r border-from-amber-400 border-to-emerald-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">pixels + border-linear</p>
  </div>
  <div>
    <div data-test="pixel-border-radial" class="bg-pixel-red-500 pixel-size-2 pixel-gap-1 bg-ripple h-32 rounded-lg border-4 border-radial border-from-rose-500 border-to-cyan-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">pixels + border-radial</p>
  </div>
  <div>
    <div data-test="pixel-border-conic" class="bg-pixel-white pixel-size-2 pixel-gap-1 bg-ripple h-32 rounded-lg border-4 border-conic-0 border-from-pink-500 border-via-yellow-400 border-to-cyan-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">pixels + border-conic</p>
  </div>
  <div>
    <div data-test="pixel-border-spin" class="bg-pixel-emerald-400 pixel-size-4 pixel-gap-2 pixel-bleed-1 bg-ripple ripple-color-emerald-200 h-32 rounded-lg border-4 border-conic-0 border-spin border-from-emerald-400 border-via-cyan-400 border-to-emerald-400 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">large pixels + border-spin</p>
  </div>
  <div>
    <div data-test="pixel-border-via" class="bg-pixel-amber-400 pixel-size-1 pixel-gap-1 pixel-bleed-0 bg-ripple h-32 rounded-lg border-4 border-linear-to-br border-from-rose-500 border-via-amber-400 border-to-indigo-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">crisp pixels + border via</p>
  </div>
  <div>
    <div data-test="pixel-border-interp" class="bg-pixel-fuchsia-400 pixel-size-3 pixel-gap-1 pixel-bleed-2 bg-ripple ripple-color-fuchsia-200 h-32 rounded-lg border-4 border-linear-to-r/longer border-from-red-500 border-to-blue-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">CRT glow + border /longer</p>
  </div>
</div>

## Ripple Customisation over Backgrounds

Testing ripple-color, ripple-duration, ripple-fade, and ripple-position with patterned backgrounds.

### Ripple Colors

<div class="grid grid-cols-4 gap-4 my-6">
  <div>
    <div data-test="color-default" class="bg-linear-to-r from-slate-800 to-slate-600 bg-ripple h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">default (white 20%)</p>
  </div>
  <div>
    <div data-test="color-blue" class="bg-linear-to-r from-slate-800 to-slate-600 bg-ripple ripple-color-blue-400 h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">ripple-color-blue-400</p>
  </div>
  <div>
    <div data-test="color-pink" class="bg-linear-to-r from-slate-800 to-slate-600 bg-ripple ripple-color-pink-400 h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">ripple-color-pink-400</p>
  </div>
  <div>
    <div data-test="color-current" class="bg-linear-to-r from-slate-800 to-slate-600 bg-ripple ripple-color-current text-amber-400 h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">ripple-color-current</p>
  </div>
</div>

### Ripple Duration

<div class="grid grid-cols-4 gap-4 my-6">
  <div>
    <div data-test="duration-20" class="bg-linear-to-br from-violet-500 to-fuchsia-500 bg-ripple ripple-duration-20 h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">ripple-duration-20 (200ms)</p>
  </div>
  <div>
    <div data-test="duration-40" class="bg-linear-to-br from-violet-500 to-fuchsia-500 bg-ripple ripple-duration-40 h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">ripple-duration-40 (400ms)</p>
  </div>
  <div>
    <div data-test="duration-80" class="bg-linear-to-br from-violet-500 to-fuchsia-500 bg-ripple ripple-duration-80 h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">ripple-duration-80 (800ms)</p>
  </div>
  <div>
    <div data-test="duration-150" class="bg-linear-to-br from-violet-500 to-fuchsia-500 bg-ripple ripple-duration-150 h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">ripple-duration-150 (1.5s)</p>
  </div>
</div>

### Ripple Fade

<div class="grid grid-cols-3 gap-4 my-6">
  <div>
    <div data-test="fade-none" class="bg-linear-to-r from-teal-400 to-cyan-500 bg-ripple ripple-fade-none ripple-duration-80 h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">ripple-fade-none</p>
  </div>
  <div>
    <div data-test="fade-50" class="bg-linear-to-r from-teal-400 to-cyan-500 bg-ripple ripple-fade-50 ripple-duration-80 h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">ripple-fade-50</p>
  </div>
  <div>
    <div data-test="fade-full" class="bg-linear-to-r from-teal-400 to-cyan-500 bg-ripple ripple-fade ripple-duration-80 h-32 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">ripple-fade (100%)</p>
  </div>
</div>

### Ripple Position

<div class="grid grid-cols-5 gap-3 my-6">
  <div>
    <div data-test="pos-center" class="bg-linear-to-br from-sky-400 to-indigo-500 bg-ripple ripple-position-center h-28 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">center</p>
  </div>
  <div>
    <div data-test="pos-top" class="bg-linear-to-br from-sky-400 to-indigo-500 bg-ripple ripple-position-top h-28 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">top</p>
  </div>
  <div>
    <div data-test="pos-bottom" class="bg-linear-to-br from-sky-400 to-indigo-500 bg-ripple ripple-position-bottom h-28 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">bottom</p>
  </div>
  <div>
    <div data-test="pos-left" class="bg-linear-to-br from-sky-400 to-indigo-500 bg-ripple ripple-position-left h-28 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">left</p>
  </div>
  <div>
    <div data-test="pos-right" class="bg-linear-to-br from-sky-400 to-indigo-500 bg-ripple ripple-position-right h-28 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">right</p>
  </div>
</div>

## Ripple with Border Gradients

`bg-ripple` composing with border-gradient utilities. All three features (background, border gradient, ripple) on the same element.

### Linear Border Gradients

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="border-linear-r" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-linear-to-r border-from-rose-500 border-to-cyan-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">border-linear-to-r</p>
  </div>
  <div>
    <div data-test="border-linear-b" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-linear-to-b border-from-amber-400 border-to-emerald-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">border-linear-to-b</p>
  </div>
  <div>
    <div data-test="border-linear-br" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-linear-to-br border-from-pink-500 border-to-violet-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">border-linear-to-br</p>
  </div>
  <div>
    <div data-test="border-linear-angle" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-linear-45 border-from-sky-400 border-to-indigo-600 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">border-linear-45</p>
  </div>
</div>

### Radial Border Gradients

<div class="grid grid-cols-3 gap-4 my-6">
  <div>
    <div data-test="border-radial" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-radial border-from-rose-500 border-to-cyan-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">border-radial</p>
  </div>
  <div>
    <div data-test="border-radial-at" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-radial-[at_25%_25%] border-from-amber-400 border-to-purple-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">border-radial [at 25% 25%]</p>
  </div>
  <div>
    <div data-test="border-radial-top" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-radial-[at_top] border-from-emerald-400 border-to-blue-600 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">border-radial [at top]</p>
  </div>
</div>

### Conic Border Gradients

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="border-conic-0" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-conic-0 border-from-rose-500 border-via-yellow-400 border-to-cyan-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">border-conic-0</p>
  </div>
  <div>
    <div data-test="border-conic-90" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-conic-90 border-from-pink-500 border-via-orange-400 border-to-violet-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">border-conic-90</p>
  </div>
  <div>
    <div data-test="border-conic-180" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-conic-180 border-from-emerald-400 border-via-sky-400 border-to-purple-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">border-conic-180</p>
  </div>
  <div>
    <div data-test="border-conic-neg" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 -border-conic-45 border-from-amber-400 border-via-red-500 border-to-indigo-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">-border-conic-45</p>
  </div>
</div>

### Border Spin + Ripple

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="border-spin-default" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-conic-0 border-spin border-from-rose-500 border-via-yellow-400 border-to-cyan-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">border-spin</p>
  </div>
  <div>
    <div data-test="border-spin-fast" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-conic-0 border-spin border-spin-duration-[500ms] border-from-pink-500 border-to-violet-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">spin 500ms</p>
  </div>
  <div>
    <div data-test="border-spin-slow" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-conic-0 border-spin border-spin-duration-3 border-from-emerald-400 border-to-blue-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">spin 3s</p>
  </div>
  <div>
    <div data-test="border-spin-longer" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-conic/longer border-conic-0 border-spin border-from-red-500 border-to-blue-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">spin /longer</p>
  </div>
</div>

### Border Via Colors + Ripple

<div class="grid grid-cols-3 gap-4 my-6">
  <div>
    <div data-test="border-via-linear" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-linear-to-r border-from-rose-500 border-via-yellow-400 border-to-cyan-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">linear from/via/to</p>
  </div>
  <div>
    <div data-test="border-via-conic" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-conic-0 border-from-indigo-500 border-via-pink-500 border-to-amber-400 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">conic from/via/to</p>
  </div>
  <div>
    <div data-test="border-via-radial" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-radial border-from-emerald-400 border-via-purple-500 border-to-orange-400 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">radial from/via/to</p>
  </div>
</div>

### Background Gradients + Border Gradients + Ripple

All three composing on the same element.

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="bg-grad-border-grad" class="bg-linear-to-r from-blue-500 to-purple-500 bg-ripple h-32 rounded-lg border-4 border-linear-to-b border-from-amber-400 border-to-emerald-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">bg-linear + border-linear</p>
  </div>
  <div>
    <div data-test="bg-radial-border-linear" class="bg-radial from-sky-300 to-blue-600 bg-ripple h-32 rounded-lg border-4 border-linear-to-r border-from-rose-500 border-to-cyan-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">bg-radial + border-linear</p>
  </div>
  <div>
    <div data-test="bg-conic-border-conic" class="bg-conic from-red-500 via-yellow-500 to-red-500 bg-ripple h-32 rounded-lg border-4 border-conic-0 border-from-cyan-400 border-via-blue-500 border-to-cyan-400 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">bg-conic + border-conic</p>
  </div>
  <div>
    <div data-test="bg-linear-border-spin" class="bg-linear-to-br from-rose-500 to-orange-400 bg-ripple h-32 rounded-lg border-4 border-conic-0 border-spin border-from-sky-400 border-via-violet-500 border-to-sky-400 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">bg-linear + border-spin</p>
  </div>
</div>

### Border Gradient Interpolation + Ripple

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="border-interp-oklch" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-linear-to-r/oklch border-from-red-500 border-to-blue-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">/oklch</p>
  </div>
  <div>
    <div data-test="border-interp-hsl" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-linear-to-r/hsl border-from-red-500 border-to-blue-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">/hsl</p>
  </div>
  <div>
    <div data-test="border-interp-longer" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-linear-to-r/longer border-from-red-500 border-to-blue-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">/longer</p>
  </div>
  <div>
    <div data-test="border-interp-shorter" class="bg-slate-800 bg-ripple h-32 rounded-lg border-4 border-linear-to-r/shorter border-from-red-500 border-to-blue-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">/shorter</p>
  </div>
</div>

### Ripple Customisation + Border Gradients

Custom ripple-color, ripple-duration, and ripple-fade with border gradients.

<div class="grid grid-cols-4 gap-3 my-6">
  <div>
    <div data-test="border-ripple-color" class="bg-slate-800 bg-ripple ripple-color-pink-400 h-32 rounded-lg border-4 border-linear-to-r border-from-pink-500 border-to-violet-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">ripple-color-pink</p>
  </div>
  <div>
    <div data-test="border-ripple-fast" class="bg-slate-800 bg-ripple ripple-duration-20 h-32 rounded-lg border-4 border-linear-to-r border-from-amber-400 border-to-red-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">ripple-duration-20</p>
  </div>
  <div>
    <div data-test="border-ripple-fade" class="bg-slate-800 bg-ripple ripple-fade ripple-duration-80 h-32 rounded-lg border-4 border-radial border-from-emerald-400 border-to-cyan-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">ripple-fade + radial</p>
  </div>
  <div>
    <div data-test="border-ripple-pos" class="bg-slate-800 bg-ripple ripple-position-top h-32 rounded-lg border-4 border-conic-0 border-spin border-from-sky-400 border-via-purple-500 border-to-sky-400 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">ripple-position-top + spin</p>
  </div>
</div>

### Ben Day Dots + Border Gradients + Ripple

<div class="grid grid-cols-3 gap-4 my-6">
  <div>
    <div data-test="comic-border-linear" class="bg-comic-blue-500 comic-gap-4 bg-ripple h-32 rounded-lg border-4 border-linear-to-r border-from-rose-500 border-to-cyan-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">comic + border-linear</p>
  </div>
  <div>
    <div data-test="comic-border-conic" class="bg-comic-purple-500 comic-gap-4 bg-ripple h-32 rounded-lg border-4 border-conic-0 border-from-amber-400 border-via-pink-500 border-to-amber-400 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">comic + border-conic</p>
  </div>
  <div>
    <div data-test="comic-border-spin" class="bg-comic-emerald-500 comic-gap-4 bg-ripple h-32 rounded-lg border-4 border-conic-0 border-spin border-from-sky-400 border-via-violet-500 border-to-sky-400 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">comic + border-spin</p>
  </div>
</div>

### Sub-Pixel Patterns + Border Gradients + Ripple

<div class="grid grid-cols-3 gap-4 my-6">
  <div>
    <div data-test="pixel-border-linear" class="bg-pixel-blue-500 pixel-size-2 pixel-gap-1 bg-ripple h-32 rounded-lg border-4 border-linear-to-r border-from-amber-400 border-to-emerald-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">pixel + border-linear</p>
  </div>
  <div>
    <div data-test="pixel-border-radial" class="bg-pixel-red-500 pixel-size-2 pixel-gap-1 bg-ripple h-32 rounded-lg border-4 border-radial border-from-rose-500 border-to-cyan-500 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">pixel + border-radial</p>
  </div>
  <div>
    <div data-test="pixel-border-spin" class="bg-pixel-fuchsia-400 pixel-size-3 pixel-gap-1 pixel-bleed-2 bg-ripple h-32 rounded-lg border-4 border-conic-0 border-spin border-from-emerald-400 border-via-cyan-400 border-to-emerald-400 cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">pixel CRT + border-spin</p>
  </div>
</div>

## Custom Variable Position (Cursor-Tracking)

Using `ripple-position-(position:--ripple-pos)` with JavaScript to make the ripple follow the click point.

<div class="grid grid-cols-3 gap-4 my-6">
  <div>
    <div data-test="var-pos-static" class="bg-blue-600 bg-ripple ripple-position-(position:--ripple-pos) h-32 rounded-lg cursor-pointer" style="--ripple-pos: 25% 75%"></div>
    <p class="text-xs font-mono text-center mt-1">static 25% 75%</p>
  </div>
  <div>
    <div
      data-test="var-pos-cursor"
      class="bg-blue-600 bg-ripple ripple-position-(position:--ripple-pos) ripple-color-amber-300 ripple-duration-60 h-32 rounded-lg cursor-pointer"
      onmousedown="const r=this.getBoundingClientRect();this.style.setProperty('--ripple-pos',(((event.clientX-r.left)/r.width*100).toFixed(1)+'% '+((event.clientY-r.top)/r.height*100).toFixed(1)+'%'))"
    ></div>
    <p class="text-xs font-mono text-center mt-1">cursor-tracking</p>
  </div>
  <div>
    <div
      data-test="var-pos-cursor-gradient"
      class="bg-linear-to-br from-indigo-500 to-purple-600 bg-ripple ripple-position-(position:--ripple-pos) ripple-color-white ripple-fade ripple-duration-80 h-32 rounded-lg cursor-pointer"
      onmousedown="const r=this.getBoundingClientRect();this.style.setProperty('--ripple-pos',(((event.clientX-r.left)/r.width*100).toFixed(1)+'% '+((event.clientY-r.top)/r.height*100).toFixed(1)+'%'))"
    ></div>
    <p class="text-xs font-mono text-center mt-1">cursor + gradient + fade</p>
  </div>
</div>

## Combined: All Background Types Side-by-Side

Same ripple settings (`ripple-color-white ripple-duration-60 ripple-fade`) across different background types for visual comparison.

<div class="grid grid-cols-4 gap-4 my-6">
  <div>
    <div data-test="compare-solid" class="bg-indigo-600 bg-ripple ripple-color-white ripple-duration-60 ripple-fade h-36 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">Solid</p>
  </div>
  <div>
    <div data-test="compare-gradient" class="bg-linear-to-br from-indigo-500 to-purple-600 bg-ripple ripple-color-white ripple-duration-60 ripple-fade h-36 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">Gradient</p>
  </div>
  <div>
    <div data-test="compare-comic" class="bg-comic-indigo-500 comic-gap-4 bg-ripple ripple-color-white ripple-duration-60 ripple-fade h-36 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">Ben Day</p>
  </div>
  <div>
    <div data-test="compare-pixel" class="bg-pixel-indigo-400 pixel-size-2 pixel-gap-1 bg-ripple ripple-color-white ripple-duration-60 ripple-fade h-36 rounded-lg cursor-pointer"></div>
    <p class="text-xs font-mono text-center mt-1">Sub-Pixel</p>
  </div>
</div>
