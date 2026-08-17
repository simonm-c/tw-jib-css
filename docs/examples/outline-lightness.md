---
title: Outline Lightness Test Fixtures
layout: page
---

# Outline Lightness Test Fixtures

Test page covering all outline-darken/outline-lighten × color space combinations.

## Darken – Default (oklch, no modifier)

Darken amounts 0–100 on outline-blue-500.

<div class="grid grid-cols-5 gap-3 my-6">
  <div data-test="outline-darken-0" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-0 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">darken-0</span>
  </div>
  <div data-test="outline-darken-5" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-5 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">darken-5</span>
  </div>
  <div data-test="outline-darken-10" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-10 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">darken-10</span>
  </div>
  <div data-test="outline-darken-20" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-20 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">darken-20</span>
  </div>
  <div data-test="outline-darken-50" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-50 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">darken-50</span>
  </div>
  <div data-test="outline-darken-75" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-75 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">darken-75</span>
  </div>
  <div data-test="outline-darken-100" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-100 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">darken-100</span>
  </div>
</div>

## Lighten – Default (oklch, no modifier)

Lighten amounts 0–100 on outline-blue-500.

<div class="grid grid-cols-5 gap-3 my-6">
  <div data-test="outline-lighten-0" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-0 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">lighten-0</span>
  </div>
  <div data-test="outline-lighten-5" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-5 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">lighten-5</span>
  </div>
  <div data-test="outline-lighten-10" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-10 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">lighten-10</span>
  </div>
  <div data-test="outline-lighten-20" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-20 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">lighten-20</span>
  </div>
  <div data-test="outline-lighten-50" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-50 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">lighten-50</span>
  </div>
  <div data-test="outline-lighten-75" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-75 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">lighten-75</span>
  </div>
  <div data-test="outline-lighten-100" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-100 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">lighten-100</span>
  </div>
</div>

## Darken – All 17 Color Spaces

Each uses `outline-blue-500 outline-darken-20/{space}`.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="outline-darken-oklch" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-20/oklch outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">/oklch</span>
  </div>
  <div data-test="outline-darken-lch" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-20/lch outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">/lch</span>
  </div>
  <div data-test="outline-darken-lab" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-20/lab outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">/lab</span>
  </div>
  <div data-test="outline-darken-oklab" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-20/oklab outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">/oklab</span>
  </div>
  <div data-test="outline-darken-hsl" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-20/hsl outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">/hsl</span>
  </div>
  <div data-test="outline-darken-hwb" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-20/hwb outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">/hwb</span>
  </div>
  <div data-test="outline-darken-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-20/rgb outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">/rgb</span>
  </div>
  <div data-test="outline-darken-srgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-20/srgb outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">/srgb</span>
  </div>
  <div data-test="outline-darken-srgb-linear" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-20/srgb-linear outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">/srgb-linear</span>
  </div>
  <div data-test="outline-darken-display-p3" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-20/display-p3 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">/display-p3</span>
  </div>
  <div data-test="outline-darken-a98-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-20/a98-rgb outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">/a98-rgb</span>
  </div>
  <div data-test="outline-darken-prophoto-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-20/prophoto-rgb outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">/prophoto-rgb</span>
  </div>
  <div data-test="outline-darken-rec2020" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-20/rec2020 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">/rec2020</span>
  </div>
  <div data-test="outline-darken-xyz" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-20/xyz outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">/xyz</span>
  </div>
  <div data-test="outline-darken-xyz-d50" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-20/xyz-d50 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">/xyz-d50</span>
  </div>
  <div data-test="outline-darken-xyz-d65" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-20/xyz-d65 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">/xyz-d65</span>
  </div>
  <div data-test="outline-darken-color-mix" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-20/color-mix outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">/color-mix</span>
  </div>
</div>

## Lighten – All 17 Color Spaces

Each uses `outline-blue-500 outline-lighten-20/{space}`.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="outline-lighten-oklch" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-20/oklch outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">/oklch</span>
  </div>
  <div data-test="outline-lighten-lch" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-20/lch outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">/lch</span>
  </div>
  <div data-test="outline-lighten-lab" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-20/lab outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">/lab</span>
  </div>
  <div data-test="outline-lighten-oklab" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-20/oklab outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">/oklab</span>
  </div>
  <div data-test="outline-lighten-hsl" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-20/hsl outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">/hsl</span>
  </div>
  <div data-test="outline-lighten-hwb" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-20/hwb outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">/hwb</span>
  </div>
  <div data-test="outline-lighten-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-20/rgb outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">/rgb</span>
  </div>
  <div data-test="outline-lighten-srgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-20/srgb outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">/srgb</span>
  </div>
  <div data-test="outline-lighten-srgb-linear" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-20/srgb-linear outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">/srgb-linear</span>
  </div>
  <div data-test="outline-lighten-display-p3" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-20/display-p3 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">/display-p3</span>
  </div>
  <div data-test="outline-lighten-a98-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-20/a98-rgb outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">/a98-rgb</span>
  </div>
  <div data-test="outline-lighten-prophoto-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-20/prophoto-rgb outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">/prophoto-rgb</span>
  </div>
  <div data-test="outline-lighten-rec2020" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-20/rec2020 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">/rec2020</span>
  </div>
  <div data-test="outline-lighten-xyz" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-20/xyz outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">/xyz</span>
  </div>
  <div data-test="outline-lighten-xyz-d50" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-20/xyz-d50 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">/xyz-d50</span>
  </div>
  <div data-test="outline-lighten-xyz-d65" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-20/xyz-d65 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">/xyz-d65</span>
  </div>
  <div data-test="outline-lighten-color-mix" class="h-20 rounded-lg flex items-center justify-center bg-gray-800 outline-3 outline-blue-500 outline-lighten-20/color-mix outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-400">/color-mix</span>
  </div>
</div>

## Alias Equivalence

Verify `outline-lightness-{n}` and `outline-lighten-{n}` produce the same result.

<div class="grid grid-cols-2 gap-3 my-6">
  <div data-test="outline-alias-lightness" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-lightness-20 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">outline-lightness-20</span>
  </div>
  <div data-test="outline-alias-lighten" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-lighten-20 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">outline-lighten-20</span>
  </div>
  <div data-test="outline-alias-neg-lightness" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 -outline-lightness-20 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">-outline-lightness-20</span>
  </div>
  <div data-test="outline-alias-darken" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 outline-3 outline-blue-500 outline-darken-20 outline-offset-[-3px]">
    <span class="text-xs font-mono text-gray-500">outline-darken-20</span>
  </div>
</div>
