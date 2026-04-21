---
title: Text Lightness Test Fixtures
layout: page
---

# Text Lightness Test Fixtures

Test page covering all text-darken/text-lighten × color space combinations.

## Darken — Default (oklch, no modifier)

Darken amounts 0–100 on text-blue-500.

<div class="grid grid-cols-5 gap-3 my-6">
  <div data-test="text-darken-0" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-0">
    <span class="text-lg font-bold font-mono">darken-0</span>
  </div>
  <div data-test="text-darken-5" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-5">
    <span class="text-lg font-bold font-mono">darken-5</span>
  </div>
  <div data-test="text-darken-10" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-10">
    <span class="text-lg font-bold font-mono">darken-10</span>
  </div>
  <div data-test="text-darken-20" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-20">
    <span class="text-lg font-bold font-mono">darken-20</span>
  </div>
  <div data-test="text-darken-50" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-50">
    <span class="text-lg font-bold font-mono">darken-50</span>
  </div>
  <div data-test="text-darken-75" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-75">
    <span class="text-lg font-bold font-mono">darken-75</span>
  </div>
  <div data-test="text-darken-100" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-100">
    <span class="text-lg font-bold font-mono">darken-100</span>
  </div>
</div>

## Lighten — Default (oklch, no modifier)

Lighten amounts 0–100 on text-blue-500.

<div class="grid grid-cols-5 gap-3 my-6">
  <div data-test="text-lighten-0" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-0">
    <span class="text-lg font-bold font-mono">lighten-0</span>
  </div>
  <div data-test="text-lighten-5" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-5">
    <span class="text-lg font-bold font-mono">lighten-5</span>
  </div>
  <div data-test="text-lighten-10" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-10">
    <span class="text-lg font-bold font-mono">lighten-10</span>
  </div>
  <div data-test="text-lighten-20" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-20">
    <span class="text-lg font-bold font-mono">lighten-20</span>
  </div>
  <div data-test="text-lighten-50" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-50">
    <span class="text-lg font-bold font-mono">lighten-50</span>
  </div>
  <div data-test="text-lighten-75" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-75">
    <span class="text-lg font-bold font-mono">lighten-75</span>
  </div>
  <div data-test="text-lighten-100" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-100">
    <span class="text-lg font-bold font-mono">lighten-100</span>
  </div>
</div>

## Darken — All 17 Color Spaces

Each uses `text-blue-500 text-darken-20/{space}`.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="text-darken-oklch" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-20/oklch">
    <span class="text-lg font-bold font-mono">/oklch</span>
  </div>
  <div data-test="text-darken-lch" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-20/lch">
    <span class="text-lg font-bold font-mono">/lch</span>
  </div>
  <div data-test="text-darken-lab" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-20/lab">
    <span class="text-lg font-bold font-mono">/lab</span>
  </div>
  <div data-test="text-darken-oklab" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-20/oklab">
    <span class="text-lg font-bold font-mono">/oklab</span>
  </div>
  <div data-test="text-darken-hsl" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-20/hsl">
    <span class="text-lg font-bold font-mono">/hsl</span>
  </div>
  <div data-test="text-darken-hwb" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-20/hwb">
    <span class="text-lg font-bold font-mono">/hwb</span>
  </div>
  <div data-test="text-darken-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-20/rgb">
    <span class="text-lg font-bold font-mono">/rgb</span>
  </div>
  <div data-test="text-darken-srgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-20/srgb">
    <span class="text-lg font-bold font-mono">/srgb</span>
  </div>
  <div data-test="text-darken-srgb-linear" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-20/srgb-linear">
    <span class="text-lg font-bold font-mono">/srgb-linear</span>
  </div>
  <div data-test="text-darken-display-p3" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-20/display-p3">
    <span class="text-lg font-bold font-mono">/display-p3</span>
  </div>
  <div data-test="text-darken-a98-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-20/a98-rgb">
    <span class="text-lg font-bold font-mono">/a98-rgb</span>
  </div>
  <div data-test="text-darken-prophoto-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-20/prophoto-rgb">
    <span class="text-lg font-bold font-mono">/prophoto-rgb</span>
  </div>
  <div data-test="text-darken-rec2020" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-20/rec2020">
    <span class="text-lg font-bold font-mono">/rec2020</span>
  </div>
  <div data-test="text-darken-xyz" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-20/xyz">
    <span class="text-lg font-bold font-mono">/xyz</span>
  </div>
  <div data-test="text-darken-xyz-d50" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-20/xyz-d50">
    <span class="text-lg font-bold font-mono">/xyz-d50</span>
  </div>
  <div data-test="text-darken-xyz-d65" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-20/xyz-d65">
    <span class="text-lg font-bold font-mono">/xyz-d65</span>
  </div>
  <div data-test="text-darken-color-mix" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-20/color-mix">
    <span class="text-lg font-bold font-mono">/color-mix</span>
  </div>
</div>

## Lighten — All 17 Color Spaces

Each uses `text-blue-500 text-lighten-20/{space}`.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="text-lighten-oklch" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-20/oklch">
    <span class="text-lg font-bold font-mono">/oklch</span>
  </div>
  <div data-test="text-lighten-lch" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-20/lch">
    <span class="text-lg font-bold font-mono">/lch</span>
  </div>
  <div data-test="text-lighten-lab" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-20/lab">
    <span class="text-lg font-bold font-mono">/lab</span>
  </div>
  <div data-test="text-lighten-oklab" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-20/oklab">
    <span class="text-lg font-bold font-mono">/oklab</span>
  </div>
  <div data-test="text-lighten-hsl" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-20/hsl">
    <span class="text-lg font-bold font-mono">/hsl</span>
  </div>
  <div data-test="text-lighten-hwb" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-20/hwb">
    <span class="text-lg font-bold font-mono">/hwb</span>
  </div>
  <div data-test="text-lighten-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-20/rgb">
    <span class="text-lg font-bold font-mono">/rgb</span>
  </div>
  <div data-test="text-lighten-srgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-20/srgb">
    <span class="text-lg font-bold font-mono">/srgb</span>
  </div>
  <div data-test="text-lighten-srgb-linear" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-20/srgb-linear">
    <span class="text-lg font-bold font-mono">/srgb-linear</span>
  </div>
  <div data-test="text-lighten-display-p3" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-20/display-p3">
    <span class="text-lg font-bold font-mono">/display-p3</span>
  </div>
  <div data-test="text-lighten-a98-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-20/a98-rgb">
    <span class="text-lg font-bold font-mono">/a98-rgb</span>
  </div>
  <div data-test="text-lighten-prophoto-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-20/prophoto-rgb">
    <span class="text-lg font-bold font-mono">/prophoto-rgb</span>
  </div>
  <div data-test="text-lighten-rec2020" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-20/rec2020">
    <span class="text-lg font-bold font-mono">/rec2020</span>
  </div>
  <div data-test="text-lighten-xyz" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-20/xyz">
    <span class="text-lg font-bold font-mono">/xyz</span>
  </div>
  <div data-test="text-lighten-xyz-d50" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-20/xyz-d50">
    <span class="text-lg font-bold font-mono">/xyz-d50</span>
  </div>
  <div data-test="text-lighten-xyz-d65" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-20/xyz-d65">
    <span class="text-lg font-bold font-mono">/xyz-d65</span>
  </div>
  <div data-test="text-lighten-color-mix" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 text-lighten-20/color-mix">
    <span class="text-lg font-bold font-mono">/color-mix</span>
  </div>
</div>

## Alias Equivalence

Verify `text-lightness-{n}` and `text-lighten-{n}` produce the same result.

<div class="grid grid-cols-2 gap-3 my-6">
  <div data-test="text-alias-lightness" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-lightness-20">
    <span class="text-lg font-bold font-mono">text-lightness-20</span>
  </div>
  <div data-test="text-alias-lighten" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-lighten-20">
    <span class="text-lg font-bold font-mono">text-lighten-20</span>
  </div>
  <div data-test="text-alias-neg-lightness" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 -text-lightness-20">
    <span class="text-lg font-bold font-mono">-text-lightness-20</span>
  </div>
  <div data-test="text-alias-darken" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 text-darken-20">
    <span class="text-lg font-bold font-mono">text-darken-20</span>
  </div>
</div>

## State Variants

Hover to see the lightness change.

<div class="grid grid-cols-2 gap-3 my-6">
  <div data-test="text-hover-lighten" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 text-blue-500 hover:text-lighten-30">
    <span class="text-lg font-bold font-mono">hover:text-lighten-30</span>
  </div>
  <div data-test="text-hover-darken" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-blue-500 hover:text-darken-30">
    <span class="text-lg font-bold font-mono">hover:text-darken-30</span>
  </div>
</div>

## Multiple Base Colors

Verify lightness transforms work across different base colors.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="text-red-darken" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-red-500 text-darken-20">
    <span class="text-lg font-bold font-mono">red-500</span>
  </div>
  <div data-test="text-green-darken" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-green-500 text-darken-20">
    <span class="text-lg font-bold font-mono">green-500</span>
  </div>
  <div data-test="text-amber-darken" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-amber-500 text-darken-20">
    <span class="text-lg font-bold font-mono">amber-500</span>
  </div>
  <div data-test="text-purple-darken" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-purple-500 text-darken-20">
    <span class="text-lg font-bold font-mono">purple-500</span>
  </div>
</div>
