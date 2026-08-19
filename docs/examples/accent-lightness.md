---
title: Accent Lightness Test Fixtures
layout: page
---

# Accent Lightness Test Fixtures

Test page covering all accent-darken/accent-lighten × color space combinations.

## Darken – Default (oklch, no modifier)

Darken amounts 0–100 on accent-blue-500.

<div class="grid grid-cols-5 gap-3 my-6">
  <div data-test="accent-darken-0" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-0" />
      <span class="text-[10px] font-mono text-gray-500">darken-0</span>
    </label>
  </div>
  <div data-test="accent-darken-5" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-5" />
      <span class="text-[10px] font-mono text-gray-500">darken-5</span>
    </label>
  </div>
  <div data-test="accent-darken-10" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-10" />
      <span class="text-[10px] font-mono text-gray-500">darken-10</span>
    </label>
  </div>
  <div data-test="accent-darken-20" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-20" />
      <span class="text-[10px] font-mono text-gray-500">darken-20</span>
    </label>
  </div>
  <div data-test="accent-darken-50" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-50" />
      <span class="text-[10px] font-mono text-gray-500">darken-50</span>
    </label>
  </div>
  <div data-test="accent-darken-75" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-75" />
      <span class="text-[10px] font-mono text-gray-500">darken-75</span>
    </label>
  </div>
  <div data-test="accent-darken-100" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-100" />
      <span class="text-[10px] font-mono text-gray-500">darken-100</span>
    </label>
  </div>
</div>

## Lighten – Default (oklch, no modifier)

Lighten amounts 0–100 on accent-blue-500.

<div class="grid grid-cols-5 gap-3 my-6">
  <div data-test="accent-lighten-0" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-0" />
      <span class="text-[10px] font-mono text-gray-400">lighten-0</span>
    </label>
  </div>
  <div data-test="accent-lighten-5" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-5" />
      <span class="text-[10px] font-mono text-gray-400">lighten-5</span>
    </label>
  </div>
  <div data-test="accent-lighten-10" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-10" />
      <span class="text-[10px] font-mono text-gray-400">lighten-10</span>
    </label>
  </div>
  <div data-test="accent-lighten-20" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-20" />
      <span class="text-[10px] font-mono text-gray-400">lighten-20</span>
    </label>
  </div>
  <div data-test="accent-lighten-50" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-50" />
      <span class="text-[10px] font-mono text-gray-400">lighten-50</span>
    </label>
  </div>
  <div data-test="accent-lighten-75" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-75" />
      <span class="text-[10px] font-mono text-gray-400">lighten-75</span>
    </label>
  </div>
  <div data-test="accent-lighten-100" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-100" />
      <span class="text-[10px] font-mono text-gray-400">lighten-100</span>
    </label>
  </div>
</div>

## Darken – All 17 Color Spaces

Each uses `accent-blue-500 accent-darken-20/{space}`.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="accent-darken-oklch" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-20/oklch" />
      <span class="text-[10px] font-mono text-gray-500">/oklch</span>
    </label>
  </div>
  <div data-test="accent-darken-lch" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-20/lch" />
      <span class="text-[10px] font-mono text-gray-500">/lch</span>
    </label>
  </div>
  <div data-test="accent-darken-lab" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-20/lab" />
      <span class="text-[10px] font-mono text-gray-500">/lab</span>
    </label>
  </div>
  <div data-test="accent-darken-oklab" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-20/oklab" />
      <span class="text-[10px] font-mono text-gray-500">/oklab</span>
    </label>
  </div>
  <div data-test="accent-darken-hsl" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-20/hsl" />
      <span class="text-[10px] font-mono text-gray-500">/hsl</span>
    </label>
  </div>
  <div data-test="accent-darken-hwb" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-20/hwb" />
      <span class="text-[10px] font-mono text-gray-500">/hwb</span>
    </label>
  </div>
  <div data-test="accent-darken-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-20/rgb" />
      <span class="text-[10px] font-mono text-gray-500">/rgb</span>
    </label>
  </div>
  <div data-test="accent-darken-srgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-20/srgb" />
      <span class="text-[10px] font-mono text-gray-500">/srgb</span>
    </label>
  </div>
  <div data-test="accent-darken-srgb-linear" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-20/srgb-linear" />
      <span class="text-[10px] font-mono text-gray-500">/srgb-linear</span>
    </label>
  </div>
  <div data-test="accent-darken-display-p3" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-20/display-p3" />
      <span class="text-[10px] font-mono text-gray-500">/display-p3</span>
    </label>
  </div>
  <div data-test="accent-darken-a98-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-20/a98-rgb" />
      <span class="text-[10px] font-mono text-gray-500">/a98-rgb</span>
    </label>
  </div>
  <div data-test="accent-darken-prophoto-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-20/prophoto-rgb" />
      <span class="text-[10px] font-mono text-gray-500">/prophoto-rgb</span>
    </label>
  </div>
  <div data-test="accent-darken-rec2020" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-20/rec2020" />
      <span class="text-[10px] font-mono text-gray-500">/rec2020</span>
    </label>
  </div>
  <div data-test="accent-darken-xyz" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-20/xyz" />
      <span class="text-[10px] font-mono text-gray-500">/xyz</span>
    </label>
  </div>
  <div data-test="accent-darken-xyz-d50" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-20/xyz-d50" />
      <span class="text-[10px] font-mono text-gray-500">/xyz-d50</span>
    </label>
  </div>
  <div data-test="accent-darken-xyz-d65" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-20/xyz-d65" />
      <span class="text-[10px] font-mono text-gray-500">/xyz-d65</span>
    </label>
  </div>
  <div data-test="accent-darken-color-mix" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-20/color-mix" />
      <span class="text-[10px] font-mono text-gray-500">/color-mix</span>
    </label>
  </div>
</div>

## Lighten – All 17 Color Spaces

Each uses `accent-blue-500 accent-lighten-20/{space}`.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="accent-lighten-oklch" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-20/oklch" />
      <span class="text-[10px] font-mono text-gray-400">/oklch</span>
    </label>
  </div>
  <div data-test="accent-lighten-lch" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-20/lch" />
      <span class="text-[10px] font-mono text-gray-400">/lch</span>
    </label>
  </div>
  <div data-test="accent-lighten-lab" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-20/lab" />
      <span class="text-[10px] font-mono text-gray-400">/lab</span>
    </label>
  </div>
  <div data-test="accent-lighten-oklab" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-20/oklab" />
      <span class="text-[10px] font-mono text-gray-400">/oklab</span>
    </label>
  </div>
  <div data-test="accent-lighten-hsl" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-20/hsl" />
      <span class="text-[10px] font-mono text-gray-400">/hsl</span>
    </label>
  </div>
  <div data-test="accent-lighten-hwb" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-20/hwb" />
      <span class="text-[10px] font-mono text-gray-400">/hwb</span>
    </label>
  </div>
  <div data-test="accent-lighten-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-20/rgb" />
      <span class="text-[10px] font-mono text-gray-400">/rgb</span>
    </label>
  </div>
  <div data-test="accent-lighten-srgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-20/srgb" />
      <span class="text-[10px] font-mono text-gray-400">/srgb</span>
    </label>
  </div>
  <div data-test="accent-lighten-srgb-linear" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-20/srgb-linear" />
      <span class="text-[10px] font-mono text-gray-400">/srgb-linear</span>
    </label>
  </div>
  <div data-test="accent-lighten-display-p3" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-20/display-p3" />
      <span class="text-[10px] font-mono text-gray-400">/display-p3</span>
    </label>
  </div>
  <div data-test="accent-lighten-a98-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-20/a98-rgb" />
      <span class="text-[10px] font-mono text-gray-400">/a98-rgb</span>
    </label>
  </div>
  <div data-test="accent-lighten-prophoto-rgb" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-20/prophoto-rgb" />
      <span class="text-[10px] font-mono text-gray-400">/prophoto-rgb</span>
    </label>
  </div>
  <div data-test="accent-lighten-rec2020" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-20/rec2020" />
      <span class="text-[10px] font-mono text-gray-400">/rec2020</span>
    </label>
  </div>
  <div data-test="accent-lighten-xyz" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-20/xyz" />
      <span class="text-[10px] font-mono text-gray-400">/xyz</span>
    </label>
  </div>
  <div data-test="accent-lighten-xyz-d50" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-20/xyz-d50" />
      <span class="text-[10px] font-mono text-gray-400">/xyz-d50</span>
    </label>
  </div>
  <div data-test="accent-lighten-xyz-d65" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-20/xyz-d65" />
      <span class="text-[10px] font-mono text-gray-400">/xyz-d65</span>
    </label>
  </div>
  <div data-test="accent-lighten-color-mix" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-20/color-mix" />
      <span class="text-[10px] font-mono text-gray-400">/color-mix</span>
    </label>
  </div>
</div>

## Alias Equivalence

Verify `accent-lightness-{n}` and `accent-lighten-{n}` produce the same result.

<div class="grid grid-cols-2 gap-3 my-6">
  <div data-test="accent-alias-lightness" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lightness-20" />
      <span class="text-[10px] font-mono text-gray-500">accent-lightness-20</span>
    </label>
  </div>
  <div data-test="accent-alias-lighten" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-20" />
      <span class="text-[10px] font-mono text-gray-500">accent-lighten-20</span>
    </label>
  </div>
  <div data-test="accent-alias-neg-lightness" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 -accent-lightness-20" />
      <span class="text-[10px] font-mono text-gray-500">-accent-lightness-20</span>
    </label>
  </div>
  <div data-test="accent-alias-darken" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-20" />
      <span class="text-[10px] font-mono text-gray-500">accent-darken-20</span>
    </label>
  </div>
</div>

## Form Elements

Verify lightness works across different form element types.

<div class="grid grid-cols-3 gap-6 my-6">
  <div data-test="accent-checkbox" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex items-center gap-2">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-darken-20" />
      <span class="text-xs font-mono text-gray-500">checkbox</span>
    </label>
  </div>
  <div data-test="accent-radio" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex items-center gap-2">
      <input type="radio" checked class="w-6 h-6 accent-blue-500 accent-darken-20" />
      <span class="text-xs font-mono text-gray-500">radio</span>
    </label>
  </div>
  <div data-test="accent-range" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <input type="range" value="60" class="w-24 accent-blue-500 accent-darken-20" />
      <span class="text-xs font-mono text-gray-500">range</span>
    </label>
  </div>
  <div data-test="accent-progress" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center gap-1">
      <progress value="60" max="100" class="w-24 accent-blue-500 accent-darken-20"></progress>
      <span class="text-xs font-mono text-gray-500">progress</span>
    </label>
  </div>
  <div data-test="accent-checkbox-lighten" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex items-center gap-2">
      <input type="checkbox" checked class="w-6 h-6 accent-blue-500 accent-lighten-20" />
      <span class="text-xs font-mono text-gray-400">checkbox +20</span>
    </label>
  </div>
  <div data-test="accent-radio-lighten" class="h-20 rounded-lg flex items-center justify-center bg-gray-800">
    <label class="flex items-center gap-2">
      <input type="radio" checked class="w-6 h-6 accent-blue-500 accent-lighten-20" />
      <span class="text-xs font-mono text-gray-400">radio +20</span>
    </label>
  </div>
</div>
