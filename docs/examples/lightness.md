---
title: Color Transform Test Fixtures
layout: page
---

<style>
:root {
  --custom-bg-color: oklch(0.65 0.15 250);
}
</style>

# Color Transform Test Fixtures

Test page covering all bg-darken/bg-lighten × color space × base color × border-gradient combinations.

## Darken — Default (oklch, no modifier)

Darken amounts 0–100 on bg-blue-500.

<div class="grid grid-cols-5 gap-3 my-6">
  <div data-test="darken-0" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-0">
    <span class="text-xs font-mono text-white/70">darken-0</span>
  </div>
  <div data-test="darken-5" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-5">
    <span class="text-xs font-mono text-white/70">darken-5</span>
  </div>
  <div data-test="darken-10" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-10">
    <span class="text-xs font-mono text-white/70">darken-10</span>
  </div>
  <div data-test="darken-20" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-20">
    <span class="text-xs font-mono text-white/70">darken-20</span>
  </div>
  <div data-test="darken-50" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-50">
    <span class="text-xs font-mono text-white/70">darken-50</span>
  </div>
  <div data-test="darken-75" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-75">
    <span class="text-xs font-mono text-white/70">darken-75</span>
  </div>
  <div data-test="darken-100" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-100">
    <span class="text-xs font-mono text-white/70">darken-100</span>
  </div>
</div>

## Lighten — Default (oklch, no modifier)

Lighten amounts 0–100 on bg-blue-500.

<div class="grid grid-cols-5 gap-3 my-6">
  <div data-test="lighten-0" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-0">
    <span class="text-xs font-mono text-white/70">lighten-0</span>
  </div>
  <div data-test="lighten-5" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-5">
    <span class="text-xs font-mono text-white/70">lighten-5</span>
  </div>
  <div data-test="lighten-10" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-10">
    <span class="text-xs font-mono text-white/70">lighten-10</span>
  </div>
  <div data-test="lighten-20" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">lighten-20</span>
  </div>
  <div data-test="lighten-50" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-50">
    <span class="text-xs font-mono text-gray-700">lighten-50</span>
  </div>
  <div data-test="lighten-75" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-75">
    <span class="text-xs font-mono text-gray-700">lighten-75</span>
  </div>
  <div data-test="lighten-100" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-100">
    <span class="text-xs font-mono text-gray-700">lighten-100</span>
  </div>
</div>

## Darken — All 17 Color Spaces

Each uses `bg-blue-500 bg-darken-20/{space}`.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="darken-oklch" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-20/oklch">
    <span class="text-xs font-mono text-white/70">/oklch</span>
  </div>
  <div data-test="darken-lch" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-20/lch">
    <span class="text-xs font-mono text-white/70">/lch</span>
  </div>
  <div data-test="darken-lab" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-20/lab">
    <span class="text-xs font-mono text-white/70">/lab</span>
  </div>
  <div data-test="darken-oklab" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-20/oklab">
    <span class="text-xs font-mono text-white/70">/oklab</span>
  </div>
  <div data-test="darken-hsl" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-20/hsl">
    <span class="text-xs font-mono text-white/70">/hsl</span>
  </div>
  <div data-test="darken-hwb" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-20/hwb">
    <span class="text-xs font-mono text-white/70">/hwb</span>
  </div>
  <div data-test="darken-rgb" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-20/rgb">
    <span class="text-xs font-mono text-white/70">/rgb</span>
  </div>
  <div data-test="darken-srgb" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-20/srgb">
    <span class="text-xs font-mono text-white/70">/srgb</span>
  </div>
  <div data-test="darken-srgb-linear" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-20/srgb-linear">
    <span class="text-xs font-mono text-white/70">/srgb-linear</span>
  </div>
  <div data-test="darken-display-p3" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-20/display-p3">
    <span class="text-xs font-mono text-white/70">/display-p3</span>
  </div>
  <div data-test="darken-a98-rgb" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-20/a98-rgb">
    <span class="text-xs font-mono text-white/70">/a98-rgb</span>
  </div>
  <div data-test="darken-prophoto-rgb" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-20/prophoto-rgb">
    <span class="text-xs font-mono text-white/70">/prophoto-rgb</span>
  </div>
  <div data-test="darken-rec2020" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-20/rec2020">
    <span class="text-xs font-mono text-white/70">/rec2020</span>
  </div>
  <div data-test="darken-xyz" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-20/xyz">
    <span class="text-xs font-mono text-white/70">/xyz</span>
  </div>
  <div data-test="darken-xyz-d50" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-20/xyz-d50">
    <span class="text-xs font-mono text-white/70">/xyz-d50</span>
  </div>
  <div data-test="darken-xyz-d65" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-20/xyz-d65">
    <span class="text-xs font-mono text-white/70">/xyz-d65</span>
  </div>
  <div data-test="darken-color-mix" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-20/color-mix">
    <span class="text-xs font-mono text-white/70">/color-mix</span>
  </div>
</div>

## Lighten — All 17 Color Spaces

Each uses `bg-blue-500 bg-lighten-20/{space}`.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="lighten-oklch" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-20/oklch">
    <span class="text-xs font-mono text-white/70">/oklch</span>
  </div>
  <div data-test="lighten-lch" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-20/lch">
    <span class="text-xs font-mono text-white/70">/lch</span>
  </div>
  <div data-test="lighten-lab" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-20/lab">
    <span class="text-xs font-mono text-white/70">/lab</span>
  </div>
  <div data-test="lighten-oklab" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-20/oklab">
    <span class="text-xs font-mono text-white/70">/oklab</span>
  </div>
  <div data-test="lighten-hsl" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-20/hsl">
    <span class="text-xs font-mono text-white/70">/hsl</span>
  </div>
  <div data-test="lighten-hwb" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-20/hwb">
    <span class="text-xs font-mono text-white/70">/hwb</span>
  </div>
  <div data-test="lighten-rgb" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-20/rgb">
    <span class="text-xs font-mono text-white/70">/rgb</span>
  </div>
  <div data-test="lighten-srgb" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-20/srgb">
    <span class="text-xs font-mono text-white/70">/srgb</span>
  </div>
  <div data-test="lighten-srgb-linear" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-20/srgb-linear">
    <span class="text-xs font-mono text-white/70">/srgb-linear</span>
  </div>
  <div data-test="lighten-display-p3" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-20/display-p3">
    <span class="text-xs font-mono text-white/70">/display-p3</span>
  </div>
  <div data-test="lighten-a98-rgb" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-20/a98-rgb">
    <span class="text-xs font-mono text-white/70">/a98-rgb</span>
  </div>
  <div data-test="lighten-prophoto-rgb" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-20/prophoto-rgb">
    <span class="text-xs font-mono text-white/70">/prophoto-rgb</span>
  </div>
  <div data-test="lighten-rec2020" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-20/rec2020">
    <span class="text-xs font-mono text-white/70">/rec2020</span>
  </div>
  <div data-test="lighten-xyz" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-20/xyz">
    <span class="text-xs font-mono text-white/70">/xyz</span>
  </div>
  <div data-test="lighten-xyz-d50" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-20/xyz-d50">
    <span class="text-xs font-mono text-white/70">/xyz-d50</span>
  </div>
  <div data-test="lighten-xyz-d65" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-20/xyz-d65">
    <span class="text-xs font-mono text-white/70">/xyz-d65</span>
  </div>
  <div data-test="lighten-color-mix" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-20/color-mix">
    <span class="text-xs font-mono text-white/70">/color-mix</span>
  </div>
</div>

## Base Color Range — Darken-20

Darken-20 (default oklch) across the full color spectrum + special values.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="base-red-500" class="h-20 rounded-lg flex items-center justify-center bg-red-500 bg-darken-20">
    <span class="text-xs font-mono text-white/70">red-500</span>
  </div>
  <div data-test="base-orange-500" class="h-20 rounded-lg flex items-center justify-center bg-orange-500 bg-darken-20">
    <span class="text-xs font-mono text-white/70">orange-500</span>
  </div>
  <div data-test="base-amber-500" class="h-20 rounded-lg flex items-center justify-center bg-amber-500 bg-darken-20">
    <span class="text-xs font-mono text-white/70">amber-500</span>
  </div>
  <div data-test="base-yellow-400" class="h-20 rounded-lg flex items-center justify-center bg-yellow-400 bg-darken-20">
    <span class="text-xs font-mono text-white/70">yellow-400</span>
  </div>
  <div data-test="base-lime-500" class="h-20 rounded-lg flex items-center justify-center bg-lime-500 bg-darken-20">
    <span class="text-xs font-mono text-white/70">lime-500</span>
  </div>
  <div data-test="base-green-500" class="h-20 rounded-lg flex items-center justify-center bg-green-500 bg-darken-20">
    <span class="text-xs font-mono text-white/70">green-500</span>
  </div>
  <div data-test="base-emerald-500" class="h-20 rounded-lg flex items-center justify-center bg-emerald-500 bg-darken-20">
    <span class="text-xs font-mono text-white/70">emerald-500</span>
  </div>
  <div data-test="base-teal-500" class="h-20 rounded-lg flex items-center justify-center bg-teal-500 bg-darken-20">
    <span class="text-xs font-mono text-white/70">teal-500</span>
  </div>
  <div data-test="base-cyan-500" class="h-20 rounded-lg flex items-center justify-center bg-cyan-500 bg-darken-20">
    <span class="text-xs font-mono text-white/70">cyan-500</span>
  </div>
  <div data-test="base-sky-500" class="h-20 rounded-lg flex items-center justify-center bg-sky-500 bg-darken-20">
    <span class="text-xs font-mono text-white/70">sky-500</span>
  </div>
  <div data-test="base-blue-500" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-20">
    <span class="text-xs font-mono text-white/70">blue-500</span>
  </div>
  <div data-test="base-indigo-500" class="h-20 rounded-lg flex items-center justify-center bg-indigo-500 bg-darken-20">
    <span class="text-xs font-mono text-white/70">indigo-500</span>
  </div>
  <div data-test="base-violet-500" class="h-20 rounded-lg flex items-center justify-center bg-violet-500 bg-darken-20">
    <span class="text-xs font-mono text-white/70">violet-500</span>
  </div>
  <div data-test="base-purple-500" class="h-20 rounded-lg flex items-center justify-center bg-purple-500 bg-darken-20">
    <span class="text-xs font-mono text-white/70">purple-500</span>
  </div>
  <div data-test="base-fuchsia-500" class="h-20 rounded-lg flex items-center justify-center bg-fuchsia-500 bg-darken-20">
    <span class="text-xs font-mono text-white/70">fuchsia-500</span>
  </div>
  <div data-test="base-pink-500" class="h-20 rounded-lg flex items-center justify-center bg-pink-500 bg-darken-20">
    <span class="text-xs font-mono text-white/70">pink-500</span>
  </div>
  <div data-test="base-rose-500" class="h-20 rounded-lg flex items-center justify-center bg-rose-500 bg-darken-20">
    <span class="text-xs font-mono text-white/70">rose-500</span>
  </div>
  <div data-test="base-slate-400" class="h-20 rounded-lg flex items-center justify-center bg-slate-400 bg-darken-20">
    <span class="text-xs font-mono text-white/70">slate-400</span>
  </div>
  <div data-test="base-gray-500" class="h-20 rounded-lg flex items-center justify-center bg-gray-500 bg-darken-20">
    <span class="text-xs font-mono text-white/70">gray-500</span>
  </div>
  <div data-test="base-white" class="h-20 rounded-lg flex items-center justify-center bg-white bg-darken-20">
    <span class="text-xs font-mono text-gray-700">white</span>
  </div>
</div>

## Base Color Range — Lighten-20

Lighten-20 (default oklch) across the full color spectrum + special values.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="base-lighten-red-500" class="h-20 rounded-lg flex items-center justify-center bg-red-500 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">red-500</span>
  </div>
  <div data-test="base-lighten-orange-500" class="h-20 rounded-lg flex items-center justify-center bg-orange-500 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">orange-500</span>
  </div>
  <div data-test="base-lighten-amber-500" class="h-20 rounded-lg flex items-center justify-center bg-amber-500 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">amber-500</span>
  </div>
  <div data-test="base-lighten-yellow-400" class="h-20 rounded-lg flex items-center justify-center bg-yellow-400 bg-lighten-20">
    <span class="text-xs font-mono text-gray-700">yellow-400</span>
  </div>
  <div data-test="base-lighten-lime-500" class="h-20 rounded-lg flex items-center justify-center bg-lime-500 bg-lighten-20">
    <span class="text-xs font-mono text-gray-700">lime-500</span>
  </div>
  <div data-test="base-lighten-green-500" class="h-20 rounded-lg flex items-center justify-center bg-green-500 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">green-500</span>
  </div>
  <div data-test="base-lighten-emerald-500" class="h-20 rounded-lg flex items-center justify-center bg-emerald-500 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">emerald-500</span>
  </div>
  <div data-test="base-lighten-teal-500" class="h-20 rounded-lg flex items-center justify-center bg-teal-500 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">teal-500</span>
  </div>
  <div data-test="base-lighten-cyan-500" class="h-20 rounded-lg flex items-center justify-center bg-cyan-500 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">cyan-500</span>
  </div>
  <div data-test="base-lighten-sky-500" class="h-20 rounded-lg flex items-center justify-center bg-sky-500 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">sky-500</span>
  </div>
  <div data-test="base-lighten-blue-500" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">blue-500</span>
  </div>
  <div data-test="base-lighten-indigo-500" class="h-20 rounded-lg flex items-center justify-center bg-indigo-500 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">indigo-500</span>
  </div>
  <div data-test="base-lighten-violet-500" class="h-20 rounded-lg flex items-center justify-center bg-violet-500 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">violet-500</span>
  </div>
  <div data-test="base-lighten-purple-500" class="h-20 rounded-lg flex items-center justify-center bg-purple-500 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">purple-500</span>
  </div>
  <div data-test="base-lighten-fuchsia-500" class="h-20 rounded-lg flex items-center justify-center bg-fuchsia-500 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">fuchsia-500</span>
  </div>
  <div data-test="base-lighten-pink-500" class="h-20 rounded-lg flex items-center justify-center bg-pink-500 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">pink-500</span>
  </div>
  <div data-test="base-lighten-rose-500" class="h-20 rounded-lg flex items-center justify-center bg-rose-500 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">rose-500</span>
  </div>
  <div data-test="base-lighten-slate-700" class="h-20 rounded-lg flex items-center justify-center bg-slate-700 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">slate-700</span>
  </div>
  <div data-test="base-lighten-gray-500" class="h-20 rounded-lg flex items-center justify-center bg-gray-500 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">gray-500</span>
  </div>
  <div data-test="base-lighten-black" class="h-20 rounded-lg flex items-center justify-center bg-black bg-lighten-20">
    <span class="text-xs font-mono text-white/70">black</span>
  </div>
</div>

## Special Base Colors — Darken & Lighten

Arbitrary, CSS variable, and extreme base colors.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="base-arbitrary-hex" class="h-20 rounded-lg flex items-center justify-center bg-[#ff6b35] bg-darken-20">
    <span class="text-xs font-mono text-white/70">[#ff6b35] darken</span>
  </div>
  <div data-test="base-arbitrary-oklch" class="h-20 rounded-lg flex items-center justify-center bg-[oklch(0.7_0.15_200)] bg-darken-20">
    <span class="text-xs font-mono text-white/70">[oklch()] darken</span>
  </div>
  <div data-test="base-arbitrary-rgb" class="h-20 rounded-lg flex items-center justify-center bg-[rgb(50,215,30)] bg-darken-20">
    <span class="text-xs font-mono text-white/70">[rgb()] darken</span>
  </div>
  <div data-test="base-css-var" class="h-20 rounded-lg flex items-center justify-center bg-(color:--custom-bg-color) bg-darken-20">
    <span class="text-xs font-mono text-white/70">(color:--var) darken</span>
  </div>
  <div data-test="base-arbitrary-hex-lighten" class="h-20 rounded-lg flex items-center justify-center bg-[#ff6b35] bg-lighten-20">
    <span class="text-xs font-mono text-white/70">[#ff6b35] lighten</span>
  </div>
  <div data-test="base-arbitrary-oklch-lighten" class="h-20 rounded-lg flex items-center justify-center bg-[oklch(0.7_0.15_200)] bg-lighten-20">
    <span class="text-xs font-mono text-white/70">[oklch()] lighten</span>
  </div>
  <div data-test="base-css-var-lighten" class="h-20 rounded-lg flex items-center justify-center bg-(color:--custom-bg-color) bg-lighten-20">
    <span class="text-xs font-mono text-white/70">(color:--var) lighten</span>
  </div>
</div>

## Base Colors × Color Spaces

Select colors with darken-20 across a range of spaces to catch per-space issues.

### Red-500

<div class="grid grid-cols-5 gap-3 my-6">
  <div data-test="red-oklch" class="h-20 rounded-lg flex items-center justify-center bg-red-500 bg-darken-20/oklch">
    <span class="text-xs font-mono text-white/70">oklch</span>
  </div>
  <div data-test="red-hsl" class="h-20 rounded-lg flex items-center justify-center bg-red-500 bg-darken-20/hsl">
    <span class="text-xs font-mono text-white/70">hsl</span>
  </div>
  <div data-test="red-rgb" class="h-20 rounded-lg flex items-center justify-center bg-red-500 bg-darken-20/rgb">
    <span class="text-xs font-mono text-white/70">rgb</span>
  </div>
  <div data-test="red-srgb" class="h-20 rounded-lg flex items-center justify-center bg-red-500 bg-darken-20/srgb">
    <span class="text-xs font-mono text-white/70">srgb</span>
  </div>
  <div data-test="red-display-p3" class="h-20 rounded-lg flex items-center justify-center bg-red-500 bg-darken-20/display-p3">
    <span class="text-xs font-mono text-white/70">display-p3</span>
  </div>
</div>

### Emerald-400

<div class="grid grid-cols-5 gap-3 my-6">
  <div data-test="emerald-oklch" class="h-20 rounded-lg flex items-center justify-center bg-emerald-400 bg-darken-20/oklch">
    <span class="text-xs font-mono text-white/70">oklch</span>
  </div>
  <div data-test="emerald-hsl" class="h-20 rounded-lg flex items-center justify-center bg-emerald-400 bg-darken-20/hsl">
    <span class="text-xs font-mono text-white/70">hsl</span>
  </div>
  <div data-test="emerald-rgb" class="h-20 rounded-lg flex items-center justify-center bg-emerald-400 bg-darken-20/rgb">
    <span class="text-xs font-mono text-white/70">rgb</span>
  </div>
  <div data-test="emerald-srgb" class="h-20 rounded-lg flex items-center justify-center bg-emerald-400 bg-darken-20/srgb">
    <span class="text-xs font-mono text-white/70">srgb</span>
  </div>
  <div data-test="emerald-display-p3" class="h-20 rounded-lg flex items-center justify-center bg-emerald-400 bg-darken-20/display-p3">
    <span class="text-xs font-mono text-white/70">display-p3</span>
  </div>
</div>

### Purple-600

<div class="grid grid-cols-5 gap-3 my-6">
  <div data-test="purple-oklch" class="h-20 rounded-lg flex items-center justify-center bg-purple-600 bg-lighten-20/oklch">
    <span class="text-xs font-mono text-white/70">oklch</span>
  </div>
  <div data-test="purple-hsl" class="h-20 rounded-lg flex items-center justify-center bg-purple-600 bg-lighten-20/hsl">
    <span class="text-xs font-mono text-white/70">hsl</span>
  </div>
  <div data-test="purple-rgb" class="h-20 rounded-lg flex items-center justify-center bg-purple-600 bg-lighten-20/rgb">
    <span class="text-xs font-mono text-white/70">rgb</span>
  </div>
  <div data-test="purple-srgb" class="h-20 rounded-lg flex items-center justify-center bg-purple-600 bg-lighten-20/srgb">
    <span class="text-xs font-mono text-white/70">srgb</span>
  </div>
  <div data-test="purple-display-p3" class="h-20 rounded-lg flex items-center justify-center bg-purple-600 bg-lighten-20/display-p3">
    <span class="text-xs font-mono text-white/70">display-p3</span>
  </div>
</div>

## Opacity + Darken

Opacity modifiers across levels and amounts.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="opacity-25-darken-10" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/25 bg-darken-10">
    <span class="text-xs font-mono text-white/70">bg/25 darken-10</span>
  </div>
  <div data-test="opacity-25-darken-20" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/25 bg-darken-20">
    <span class="text-xs font-mono text-white/70">bg/25 darken-20</span>
  </div>
  <div data-test="opacity-25-darken-50" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/25 bg-darken-50">
    <span class="text-xs font-mono text-white/70">bg/25 darken-50</span>
  </div>
  <div data-test="opacity-50-darken-10" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/50 bg-darken-10">
    <span class="text-xs font-mono text-white/70">bg/50 darken-10</span>
  </div>
  <div data-test="opacity-50-darken-20" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/50 bg-darken-20">
    <span class="text-xs font-mono text-white/70">bg/50 darken-20</span>
  </div>
  <div data-test="opacity-50-darken-50" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/50 bg-darken-50">
    <span class="text-xs font-mono text-white/70">bg/50 darken-50</span>
  </div>
  <div data-test="opacity-75-darken-10" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/75 bg-darken-10">
    <span class="text-xs font-mono text-white/70">bg/75 darken-10</span>
  </div>
  <div data-test="opacity-75-darken-20" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/75 bg-darken-20">
    <span class="text-xs font-mono text-white/70">bg/75 darken-20</span>
  </div>
  <div data-test="opacity-75-darken-50" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/75 bg-darken-50">
    <span class="text-xs font-mono text-white/70">bg/75 darken-50</span>
  </div>
  <div data-test="opacity-0-darken" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/0 bg-darken-20">
    <span class="text-xs font-mono text-gray-500">bg/0 darken-20</span>
  </div>
  <div data-test="opacity-100-darken" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/100 bg-darken-20">
    <span class="text-xs font-mono text-white/70">bg/100 darken-20</span>
  </div>
  <div data-test="opacity-5-darken" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/5 bg-darken-20">
    <span class="text-xs font-mono text-gray-500">bg/5 darken-20</span>
  </div>
</div>

## Opacity + Lighten

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="opacity-25-lighten-10" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/25 bg-lighten-10">
    <span class="text-xs font-mono text-white/70">bg/25 lighten-10</span>
  </div>
  <div data-test="opacity-25-lighten-20" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/25 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">bg/25 lighten-20</span>
  </div>
  <div data-test="opacity-25-lighten-50" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/25 bg-lighten-50">
    <span class="text-xs font-mono text-gray-700">bg/25 lighten-50</span>
  </div>
  <div data-test="opacity-50-lighten-10" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/50 bg-lighten-10">
    <span class="text-xs font-mono text-white/70">bg/50 lighten-10</span>
  </div>
  <div data-test="opacity-50-lighten-20" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/50 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">bg/50 lighten-20</span>
  </div>
  <div data-test="opacity-50-lighten-50" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/50 bg-lighten-50">
    <span class="text-xs font-mono text-gray-700">bg/50 lighten-50</span>
  </div>
  <div data-test="opacity-75-lighten-10" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/75 bg-lighten-10">
    <span class="text-xs font-mono text-white/70">bg/75 lighten-10</span>
  </div>
  <div data-test="opacity-75-lighten-20" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/75 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">bg/75 lighten-20</span>
  </div>
  <div data-test="opacity-75-lighten-50" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/75 bg-lighten-50">
    <span class="text-xs font-mono text-gray-700">bg/75 lighten-50</span>
  </div>
  <div data-test="opacity-0-lighten" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/0 bg-lighten-20">
    <span class="text-xs font-mono text-gray-500">bg/0 lighten-20</span>
  </div>
  <div data-test="opacity-100-lighten" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/100 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">bg/100 lighten-20</span>
  </div>
  <div data-test="opacity-5-lighten" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/5 bg-lighten-20">
    <span class="text-xs font-mono text-gray-500">bg/5 lighten-20</span>
  </div>
</div>

## Opacity + Color Space Modifiers

Opacity with explicit color space — darken and lighten.

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="opacity-50-darken-oklch" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/50 bg-darken-20/oklch">
    <span class="text-xs font-mono text-white/70">bg/50 darken/oklch</span>
  </div>
  <div data-test="opacity-50-darken-hsl" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/50 bg-darken-20/hsl">
    <span class="text-xs font-mono text-white/70">bg/50 darken/hsl</span>
  </div>
  <div data-test="opacity-50-darken-rgb" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/50 bg-darken-20/rgb">
    <span class="text-xs font-mono text-white/70">bg/50 darken/rgb</span>
  </div>
  <div data-test="opacity-50-darken-srgb" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/50 bg-darken-20/srgb">
    <span class="text-xs font-mono text-white/70">bg/50 darken/srgb</span>
  </div>
  <div data-test="opacity-50-darken-lab" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/50 bg-darken-20/lab">
    <span class="text-xs font-mono text-white/70">bg/50 darken/lab</span>
  </div>
  <div data-test="opacity-50-darken-display-p3" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/50 bg-darken-20/display-p3">
    <span class="text-xs font-mono text-white/70">bg/50 darken/p3</span>
  </div>
  <div data-test="opacity-50-darken-color-mix" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/50 bg-darken-20/color-mix">
    <span class="text-xs font-mono text-white/70">bg/50 darken/mix</span>
  </div>
  <div data-test="opacity-50-lighten-oklch" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/50 bg-lighten-20/oklch">
    <span class="text-xs font-mono text-white/70">bg/50 lighten/oklch</span>
  </div>
  <div data-test="opacity-50-lighten-hsl" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/50 bg-lighten-20/hsl">
    <span class="text-xs font-mono text-white/70">bg/50 lighten/hsl</span>
  </div>
  <div data-test="opacity-50-lighten-rgb" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/50 bg-lighten-20/rgb">
    <span class="text-xs font-mono text-white/70">bg/50 lighten/rgb</span>
  </div>
  <div data-test="opacity-50-lighten-srgb" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/50 bg-lighten-20/srgb">
    <span class="text-xs font-mono text-white/70">bg/50 lighten/srgb</span>
  </div>
  <div data-test="opacity-50-lighten-color-mix" class="h-20 rounded-lg flex items-center justify-center bg-blue-500/50 bg-lighten-20/color-mix">
    <span class="text-xs font-mono text-white/70">bg/50 lighten/mix</span>
  </div>
</div>

## Opacity + Different Base Colors + Darken/Lighten

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="opacity-red-darken" class="h-20 rounded-lg flex items-center justify-center bg-red-500/50 bg-darken-20">
    <span class="text-xs font-mono text-white/70">red/50 darken</span>
  </div>
  <div data-test="opacity-green-darken" class="h-20 rounded-lg flex items-center justify-center bg-green-500/50 bg-darken-20">
    <span class="text-xs font-mono text-white/70">green/50 darken</span>
  </div>
  <div data-test="opacity-purple-darken" class="h-20 rounded-lg flex items-center justify-center bg-purple-500/50 bg-darken-20">
    <span class="text-xs font-mono text-white/70">purple/50 darken</span>
  </div>
  <div data-test="opacity-amber-darken" class="h-20 rounded-lg flex items-center justify-center bg-amber-500/50 bg-darken-20">
    <span class="text-xs font-mono text-white/70">amber/50 darken</span>
  </div>
  <div data-test="opacity-red-lighten" class="h-20 rounded-lg flex items-center justify-center bg-red-500/50 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">red/50 lighten</span>
  </div>
  <div data-test="opacity-green-lighten" class="h-20 rounded-lg flex items-center justify-center bg-green-500/50 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">green/50 lighten</span>
  </div>
  <div data-test="opacity-purple-lighten" class="h-20 rounded-lg flex items-center justify-center bg-purple-500/50 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">purple/50 lighten</span>
  </div>
  <div data-test="opacity-amber-lighten" class="h-20 rounded-lg flex items-center justify-center bg-amber-500/50 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">amber/50 lighten</span>
  </div>
  <div data-test="opacity-white-darken" class="h-20 rounded-lg flex items-center justify-center bg-white/75 bg-darken-20">
    <span class="text-xs font-mono text-gray-700">white/75 darken</span>
  </div>
  <div data-test="opacity-black-lighten" class="h-20 rounded-lg flex items-center justify-center bg-black/75 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">black/75 lighten</span>
  </div>
  <div data-test="opacity-arbitrary-darken" class="h-20 rounded-lg flex items-center justify-center bg-[#ff6b35]/50 bg-darken-20">
    <span class="text-xs font-mono text-white/70">[#ff6b35]/50 darken</span>
  </div>
  <div data-test="opacity-arbitrary-lighten" class="h-20 rounded-lg flex items-center justify-center bg-[#ff6b35]/50 bg-lighten-20">
    <span class="text-xs font-mono text-white/70">[#ff6b35]/50 lighten</span>
  </div>
</div>

## Opacity + Darken/Lighten + Border Gradient

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="opacity-darken-border-linear" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500/50 bg-darken-20 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg/50 darken border</span>
  </div>
  <div data-test="opacity-lighten-border-linear" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500/50 bg-lighten-20 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg/50 lighten border</span>
  </div>
  <div data-test="opacity-darken-space-border" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500/50 bg-darken-20/hsl border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg/50 darken/hsl border</span>
  </div>
  <div data-test="opacity-lighten-space-border" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500/50 bg-lighten-20/srgb border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg/50 lighten/srgb border</span>
  </div>
  <div data-test="opacity-darken-border-radial" class="h-20 rounded-lg border-4 flex items-center justify-center bg-red-500/75 bg-darken-20 border-radial border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">bg/75 darken radial</span>
  </div>
  <div data-test="opacity-lighten-border-conic" class="h-20 rounded-lg border-4 flex items-center justify-center bg-red-500/75 bg-lighten-20 border-conic-0 border-from-amber-400 border-via-rose-500 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">bg/75 lighten conic</span>
  </div>
  <div data-test="opacity-darken-border-spin" class="h-20 rounded-lg border-4 flex items-center justify-center bg-emerald-500/50 bg-darken-20 border-conic-0 border-spin border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg/50 darken spin</span>
  </div>
  <div data-test="opacity-darken-border-interp" class="h-20 rounded-lg border-4 flex items-center justify-center bg-purple-500/50 bg-darken-20/oklch border-linear/longer border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg/50 darken/oklch b/longer</span>
  </div>
</div>

## Color Transform + Border Gradient

### Darken with all border types

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="darken-border-linear-r" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500 bg-darken-20 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">darken + linear-r</span>
  </div>
  <div data-test="darken-border-linear-b" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500 bg-darken-20 border-linear-to-b border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">darken + linear-b</span>
  </div>
  <div data-test="darken-border-linear-45" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500 bg-darken-20 border-linear-45 border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">darken + linear-45</span>
  </div>
  <div data-test="darken-border-radial" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500 bg-darken-20 border-radial border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">darken + radial</span>
  </div>
  <div data-test="darken-border-conic" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500 bg-darken-20 border-conic-0 border-from-rose-500 border-via-yellow-400 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">darken + conic</span>
  </div>
  <div data-test="darken-border-spin" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500 bg-darken-20 border-conic-0 border-spin border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">darken + spin</span>
  </div>
</div>

### Lighten with all border types

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="lighten-border-linear-r" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500 bg-lighten-20 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">lighten + linear-r</span>
  </div>
  <div data-test="lighten-border-linear-b" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500 bg-lighten-20 border-linear-to-b border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">lighten + linear-b</span>
  </div>
  <div data-test="lighten-border-radial" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500 bg-lighten-20 border-radial border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">lighten + radial</span>
  </div>
  <div data-test="lighten-border-conic" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500 bg-lighten-20 border-conic-0 border-from-rose-500 border-via-yellow-400 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">lighten + conic</span>
  </div>
</div>

### Color space modifier + border gradient interpolation

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="darken-oklch-border-srgb" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500 bg-darken-20/oklch border-linear/srgb border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">darken/oklch b/srgb</span>
  </div>
  <div data-test="darken-hsl-border-oklch" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500 bg-darken-20/hsl border-linear/oklch border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">darken/hsl b/oklch</span>
  </div>
  <div data-test="darken-srgb-border-longer" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500 bg-darken-20/srgb border-linear/longer border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">darken/srgb b/longer</span>
  </div>
  <div data-test="lighten-oklab-border-decreasing" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500 bg-lighten-20/oklab border-linear/decreasing border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">lighten/oklab b/decr</span>
  </div>
</div>

### Darken/lighten across base colors + border gradient

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="red-darken-border" class="h-20 rounded-lg border-4 flex items-center justify-center bg-red-500 bg-darken-20 border-linear-to-r border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">red darken border</span>
  </div>
  <div data-test="green-darken-border" class="h-20 rounded-lg border-4 flex items-center justify-center bg-green-500 bg-darken-20 border-linear-to-r border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">green darken border</span>
  </div>
  <div data-test="purple-lighten-border" class="h-20 rounded-lg border-4 flex items-center justify-center bg-purple-600 bg-lighten-20 border-linear-to-r border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">purple lighten border</span>
  </div>
  <div data-test="arbitrary-darken-border" class="h-20 rounded-lg border-4 flex items-center justify-center bg-[#ff6b35] bg-darken-20 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">[#ff6b35] darken border</span>
  </div>
</div>

## Edge Cases: Extreme Amounts

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="edge-darken-0" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-0">
    <span class="text-xs font-mono text-white/70">darken-0 (noop)</span>
  </div>
  <div data-test="edge-darken-100" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-100">
    <span class="text-xs font-mono text-white/70">darken-100 (max)</span>
  </div>
  <div data-test="edge-lighten-0" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-0">
    <span class="text-xs font-mono text-white/70">lighten-0 (noop)</span>
  </div>
  <div data-test="edge-lighten-100" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-100">
    <span class="text-xs font-mono text-gray-700">lighten-100 (max)</span>
  </div>
  <div data-test="edge-darken-1" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-1">
    <span class="text-xs font-mono text-white/70">darken-1 (tiny)</span>
  </div>
  <div data-test="edge-lighten-1" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-lighten-1">
    <span class="text-xs font-mono text-white/70">lighten-1 (tiny)</span>
  </div>
</div>

## Edge Cases: Already Dark / Already Light

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="edge-dark-darken" class="h-20 rounded-lg flex items-center justify-center bg-slate-900 bg-darken-20">
    <span class="text-xs font-mono text-white/70">dark + darken</span>
  </div>
  <div data-test="edge-dark-darken-hsl" class="h-20 rounded-lg flex items-center justify-center bg-slate-900 bg-darken-20/hsl">
    <span class="text-xs font-mono text-white/70">dark + darken/hsl</span>
  </div>
  <div data-test="edge-light-lighten" class="h-20 rounded-lg flex items-center justify-center bg-yellow-100 bg-lighten-20">
    <span class="text-xs font-mono text-gray-700">light + lighten</span>
  </div>
  <div data-test="edge-light-lighten-rgb" class="h-20 rounded-lg flex items-center justify-center bg-yellow-100 bg-lighten-20/rgb">
    <span class="text-xs font-mono text-gray-700">light + lighten/rgb</span>
  </div>
</div>

## Edge Cases: No Explicit Background

Color transform without a bg-* class (uses --tw-jib--bg-color default: canvas).

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="edge-no-bg-darken" class="h-20 rounded-lg flex items-center justify-center bg-darken-20">
    <span class="text-xs font-mono text-gray-500">no bg + darken</span>
  </div>
  <div data-test="edge-no-bg-lighten" class="h-20 rounded-lg flex items-center justify-center bg-lighten-20">
    <span class="text-xs font-mono text-gray-500">no bg + lighten</span>
  </div>
  <div data-test="edge-no-bg-darken-space" class="h-20 rounded-lg flex items-center justify-center bg-darken-20/oklch">
    <span class="text-xs font-mono text-gray-500">no bg + darken/oklch</span>
  </div>
</div>

## Edge Cases: State Variants

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="edge-hover-darken" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 hover:bg-darken-20 cursor-pointer">
    <span class="text-xs font-mono text-white/70">hover:darken</span>
  </div>
  <div data-test="edge-dark-mode" class="h-20 rounded-lg flex items-center justify-center bg-blue-500 bg-darken-10 dark:bg-darken-30">
    <span class="text-xs font-mono text-white/70">dark:darken-30</span>
  </div>
</div>

## Triple Combo: Opacity + Color Transform + Border Gradient

<div class="grid grid-cols-4 gap-3 my-6">
  <div data-test="triple-darken" class="h-20 rounded-lg border-4 flex items-center justify-center bg-blue-500/75 bg-darken-20 border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg/75 darken border</span>
  </div>
  <div data-test="triple-lighten" class="h-20 rounded-lg border-4 flex items-center justify-center bg-indigo-700/50 bg-lighten-25 border-linear-to-r border-from-amber-400 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">bg/50 lighten border</span>
  </div>
  <div data-test="triple-darken-space" class="h-20 rounded-lg border-4 flex items-center justify-center bg-emerald-500/80 bg-darken-15/hsl border-linear/oklch border-linear-to-r border-from-rose-500 border-to-cyan-500">
    <span class="text-xs font-mono text-white/70">bg/80 darken/hsl b/oklch</span>
  </div>
  <div data-test="triple-lighten-space" class="h-20 rounded-lg border-4 flex items-center justify-center bg-red-600/60 bg-lighten-20/oklab border-conic-0 border-from-amber-400 border-via-rose-500 border-to-emerald-500">
    <span class="text-xs font-mono text-white/70">bg/60 lighten/oklab conic</span>
  </div>
</div>
