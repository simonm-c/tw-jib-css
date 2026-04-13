---
title: Border Lightness Test Fixtures
layout: page
---

# Border Lightness Test Fixtures

Test page covering all border-darken/border-lighten × color space combinations.

## Darken — Default (oklch, no modifier)

Darken amounts 0–100 on outline-blue-500.

<div class="grid grid-cols-5 gap-3 my-6">
  <div data-test="border-darken-0" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-0">
    <span class="text-xs font-mono text-gray-500">darken-0</span>
  </div>
  <div data-test="border-darken-5" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-5">
    <span class="text-xs font-mono text-gray-500">darken-5</span>
  </div>
  <div data-test="border-darken-10" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-10">
    <span class="text-xs font-mono text-gray-500">darken-10</span>
  </div>
  <div data-test="border-darken-20" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-20">
    <span class="text-xs font-mono text-gray-500">darken-20</span>
  </div>
  <div data-test="border-darken-50" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-50">
    <span class="text-xs font-mono text-gray-500">darken-50</span>
  </div>
  <div data-test="border-darken-75" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-75">
    <span class="text-xs font-mono text-gray-500">darken-75</span>
  </div>
  <div data-test="border-darken-100" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-100">
    <span class="text-xs font-mono text-gray-500">darken-100</span>
  </div>
</div>

## Lighten — Default (oklch, no modifier)

Lighten amounts 0–100 on outline-blue-500.

<div class="grid grid-cols-5 gap-3 my-6">
  <div data-test="border-lighten-0" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-0">
    <span class="text-xs font-mono text-gray-400">lighten-0</span>
  </div>
  <div data-test="border-lighten-5" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-5">
    <span class="text-xs font-mono text-gray-400">lighten-5</span>
  </div>
  <div data-test="border-lighten-10" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-10">
    <span class="text-xs font-mono text-gray-400">lighten-10</span>
  </div>
  <div data-test="border-lighten-20" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-20">
    <span class="text-xs font-mono text-gray-400">lighten-20</span>
  </div>
  <div data-test="border-lighten-50" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-50">
    <span class="text-xs font-mono text-gray-400">lighten-50</span>
  </div>
  <div data-test="border-lighten-75" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-75">
    <span class="text-xs font-mono text-gray-400">lighten-75</span>
  </div>
  <div data-test="border-lighten-100" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-100">
    <span class="text-xs font-mono text-gray-400">lighten-100</span>
  </div>
</div>

## Darken — All 17 Color Spaces

Each uses `outline-blue-500 border-darken-20/{space}`.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="border-darken-oklch" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-20/oklch">
    <span class="text-xs font-mono text-gray-500">/oklch</span>
  </div>
  <div data-test="border-darken-lch" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-20/lch">
    <span class="text-xs font-mono text-gray-500">/lch</span>
  </div>
  <div data-test="border-darken-lab" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-20/lab">
    <span class="text-xs font-mono text-gray-500">/lab</span>
  </div>
  <div data-test="border-darken-oklab" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-20/oklab">
    <span class="text-xs font-mono text-gray-500">/oklab</span>
  </div>
  <div data-test="border-darken-hsl" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-20/hsl">
    <span class="text-xs font-mono text-gray-500">/hsl</span>
  </div>
  <div data-test="border-darken-hwb" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-20/hwb">
    <span class="text-xs font-mono text-gray-500">/hwb</span>
  </div>
  <div data-test="border-darken-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-20/rgb">
    <span class="text-xs font-mono text-gray-500">/rgb</span>
  </div>
  <div data-test="border-darken-srgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-20/srgb">
    <span class="text-xs font-mono text-gray-500">/srgb</span>
  </div>
  <div data-test="border-darken-srgb-linear" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-20/srgb-linear">
    <span class="text-xs font-mono text-gray-500">/srgb-linear</span>
  </div>
  <div data-test="border-darken-display-p3" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-20/display-p3">
    <span class="text-xs font-mono text-gray-500">/display-p3</span>
  </div>
  <div data-test="border-darken-a98-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-20/a98-rgb">
    <span class="text-xs font-mono text-gray-500">/a98-rgb</span>
  </div>
  <div data-test="border-darken-prophoto-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-20/prophoto-rgb">
    <span class="text-xs font-mono text-gray-500">/prophoto-rgb</span>
  </div>
  <div data-test="border-darken-rec2020" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-20/rec2020">
    <span class="text-xs font-mono text-gray-500">/rec2020</span>
  </div>
  <div data-test="border-darken-xyz" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-20/xyz">
    <span class="text-xs font-mono text-gray-500">/xyz</span>
  </div>
  <div data-test="border-darken-xyz-d50" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-20/xyz-d50">
    <span class="text-xs font-mono text-gray-500">/xyz-d50</span>
  </div>
  <div data-test="border-darken-xyz-d65" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-20/xyz-d65">
    <span class="text-xs font-mono text-gray-500">/xyz-d65</span>
  </div>
  <div data-test="border-darken-color-mix" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-20/color-mix">
    <span class="text-xs font-mono text-gray-500">/color-mix</span>
  </div>
</div>

## Lighten — All 17 Color Spaces

Each uses `outline-blue-500 border-lighten-20/{space}`.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="border-lighten-oklch" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-20/oklch">
    <span class="text-xs font-mono text-gray-400">/oklch</span>
  </div>
  <div data-test="border-lighten-lch" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-20/lch">
    <span class="text-xs font-mono text-gray-400">/lch</span>
  </div>
  <div data-test="border-lighten-lab" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-20/lab">
    <span class="text-xs font-mono text-gray-400">/lab</span>
  </div>
  <div data-test="border-lighten-oklab" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-20/oklab">
    <span class="text-xs font-mono text-gray-400">/oklab</span>
  </div>
  <div data-test="border-lighten-hsl" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-20/hsl">
    <span class="text-xs font-mono text-gray-400">/hsl</span>
  </div>
  <div data-test="border-lighten-hwb" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-20/hwb">
    <span class="text-xs font-mono text-gray-400">/hwb</span>
  </div>
  <div data-test="border-lighten-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-20/rgb">
    <span class="text-xs font-mono text-gray-400">/rgb</span>
  </div>
  <div data-test="border-lighten-srgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-20/srgb">
    <span class="text-xs font-mono text-gray-400">/srgb</span>
  </div>
  <div data-test="border-lighten-srgb-linear" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-20/srgb-linear">
    <span class="text-xs font-mono text-gray-400">/srgb-linear</span>
  </div>
  <div data-test="border-lighten-display-p3" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-20/display-p3">
    <span class="text-xs font-mono text-gray-400">/display-p3</span>
  </div>
  <div data-test="border-lighten-a98-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-20/a98-rgb">
    <span class="text-xs font-mono text-gray-400">/a98-rgb</span>
  </div>
  <div data-test="border-lighten-prophoto-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-20/prophoto-rgb">
    <span class="text-xs font-mono text-gray-400">/prophoto-rgb</span>
  </div>
  <div data-test="border-lighten-rec2020" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-20/rec2020">
    <span class="text-xs font-mono text-gray-400">/rec2020</span>
  </div>
  <div data-test="border-lighten-xyz" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-20/xyz">
    <span class="text-xs font-mono text-gray-400">/xyz</span>
  </div>
  <div data-test="border-lighten-xyz-d50" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-20/xyz-d50">
    <span class="text-xs font-mono text-gray-400">/xyz-d50</span>
  </div>
  <div data-test="border-lighten-xyz-d65" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-20/xyz-d65">
    <span class="text-xs font-mono text-gray-400">/xyz-d65</span>
  </div>
  <div data-test="border-lighten-color-mix" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 border-2 border-blue-500 border-lighten-20/color-mix">
    <span class="text-xs font-mono text-gray-400">/color-mix</span>
  </div>
</div>

## Alias Equivalence

Verify `border-lightness-{n}` and `border-lighten-{n}` produce the same result.

<div class="grid grid-cols-2 gap-3 my-6">
  <div data-test="border-alias-lightness" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-lightness-20">
    <span class="text-xs font-mono text-gray-500">border-lightness-20</span>
  </div>
  <div data-test="border-alias-lighten" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-lighten-20">
    <span class="text-xs font-mono text-gray-500">border-lighten-20</span>
  </div>
  <div data-test="border-alias-neg-lightness" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 -border-lightness-20">
    <span class="text-xs font-mono text-gray-500">-border-lightness-20</span>
  </div>
  <div data-test="border-alias-darken" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 border-2 border-blue-500 border-darken-20">
    <span class="text-xs font-mono text-gray-500">border-darken-20</span>
  </div>
</div>
