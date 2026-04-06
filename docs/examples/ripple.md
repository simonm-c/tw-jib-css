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
