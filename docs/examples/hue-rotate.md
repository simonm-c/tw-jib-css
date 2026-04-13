---
title: Hue Rotate Test Fixtures
layout: page
---

# Hue Rotate Test Fixtures

Full Tailwind colour × shade × rotation matrix. Every swatch is labelled with a `data-test` attribute of the form `{family}-{shade}-{degrees}` for Playwright assertions.

## Base smoke tests — bg-red-500

<div class="grid grid-cols-12 gap-1 my-6">
  <div data-test="smoke-0" class="h-10 rounded bg-red-500" title="0°"></div>
  <div data-test="smoke-30" class="h-10 rounded bg-red-500 bg-hue-rotate-30" title="30°"></div>
  <div data-test="smoke-60" class="h-10 rounded bg-red-500 bg-hue-rotate-60" title="60°"></div>
  <div data-test="smoke-90" class="h-10 rounded bg-red-500 bg-hue-rotate-90" title="90°"></div>
  <div data-test="smoke-120" class="h-10 rounded bg-red-500 bg-hue-rotate-120" title="120°"></div>
  <div data-test="smoke-150" class="h-10 rounded bg-red-500 bg-hue-rotate-150" title="150°"></div>
  <div data-test="smoke-180" class="h-10 rounded bg-red-500 bg-hue-rotate-180" title="180°"></div>
  <div data-test="smoke-210" class="h-10 rounded bg-red-500 bg-hue-rotate-210" title="210°"></div>
  <div data-test="smoke-240" class="h-10 rounded bg-red-500 bg-hue-rotate-240" title="240°"></div>
  <div data-test="smoke-270" class="h-10 rounded bg-red-500 bg-hue-rotate-270" title="270°"></div>
  <div data-test="smoke-300" class="h-10 rounded bg-red-500 bg-hue-rotate-300" title="300°"></div>
  <div data-test="smoke-330" class="h-10 rounded bg-red-500 bg-hue-rotate-330" title="330°"></div>
</div>

## Counterclockwise — bg-red-500

<div class="grid grid-cols-12 gap-1 my-6">
  <div data-test="ccw-0" class="h-10 rounded bg-red-500" title="-0°"></div>
  <div data-test="ccw-30" class="h-10 rounded bg-red-500 -bg-hue-rotate-30" title="-30°"></div>
  <div data-test="ccw-60" class="h-10 rounded bg-red-500 -bg-hue-rotate-60" title="-60°"></div>
  <div data-test="ccw-90" class="h-10 rounded bg-red-500 -bg-hue-rotate-90" title="-90°"></div>
  <div data-test="ccw-120" class="h-10 rounded bg-red-500 -bg-hue-rotate-120" title="-120°"></div>
  <div data-test="ccw-150" class="h-10 rounded bg-red-500 -bg-hue-rotate-150" title="-150°"></div>
  <div data-test="ccw-180" class="h-10 rounded bg-red-500 -bg-hue-rotate-180" title="-180°"></div>
  <div data-test="ccw-210" class="h-10 rounded bg-red-500 -bg-hue-rotate-210" title="-210°"></div>
  <div data-test="ccw-240" class="h-10 rounded bg-red-500 -bg-hue-rotate-240" title="-240°"></div>
  <div data-test="ccw-270" class="h-10 rounded bg-red-500 -bg-hue-rotate-270" title="-270°"></div>
  <div data-test="ccw-300" class="h-10 rounded bg-red-500 -bg-hue-rotate-300" title="-300°"></div>
  <div data-test="ccw-330" class="h-10 rounded bg-red-500 -bg-hue-rotate-330" title="-330°"></div>
</div>

## Colour space modifiers — 120° on bg-red-500

<div class="grid grid-cols-4 gap-2 my-6">
  <div data-test="space-oklch" class="h-12 rounded bg-red-500 bg-hue-rotate-120/oklch flex items-center justify-center text-xs font-mono text-white">/oklch</div>
  <div data-test="space-lch" class="h-12 rounded bg-red-500 bg-hue-rotate-120/lch flex items-center justify-center text-xs font-mono text-white">/lch</div>
  <div data-test="space-oklab" class="h-12 rounded bg-red-500 bg-hue-rotate-120/oklab flex items-center justify-center text-xs font-mono text-white">/oklab</div>
  <div data-test="space-lab" class="h-12 rounded bg-red-500 bg-hue-rotate-120/lab flex items-center justify-center text-xs font-mono text-white">/lab</div>
  <div data-test="space-hsl" class="h-12 rounded bg-red-500 bg-hue-rotate-120/hsl flex items-center justify-center text-xs font-mono text-white">/hsl</div>
  <div data-test="space-hwb" class="h-12 rounded bg-red-500 bg-hue-rotate-120/hwb flex items-center justify-center text-xs font-mono text-white">/hwb</div>
  <div data-test="space-rgb" class="h-12 rounded bg-red-500 bg-hue-rotate-120/rgb flex items-center justify-center text-xs font-mono text-white">/rgb</div>
  <div data-test="space-srgb" class="h-12 rounded bg-red-500 bg-hue-rotate-120/srgb flex items-center justify-center text-xs font-mono text-white">/srgb</div>
  <div data-test="space-srgb-linear" class="h-12 rounded bg-red-500 bg-hue-rotate-120/srgb-linear flex items-center justify-center text-xs font-mono text-white">/srgb-linear</div>
  <div data-test="space-display-p3" class="h-12 rounded bg-red-500 bg-hue-rotate-120/display-p3 flex items-center justify-center text-xs font-mono text-white">/display-p3</div>
  <div data-test="space-a98-rgb" class="h-12 rounded bg-red-500 bg-hue-rotate-120/a98-rgb flex items-center justify-center text-xs font-mono text-white">/a98-rgb</div>
  <div data-test="space-prophoto-rgb" class="h-12 rounded bg-red-500 bg-hue-rotate-120/prophoto-rgb flex items-center justify-center text-xs font-mono text-white">/prophoto-rgb</div>
  <div data-test="space-rec2020" class="h-12 rounded bg-red-500 bg-hue-rotate-120/rec2020 flex items-center justify-center text-xs font-mono text-white">/rec2020</div>
  <div data-test="space-xyz" class="h-12 rounded bg-red-500 bg-hue-rotate-120/xyz flex items-center justify-center text-xs font-mono text-white">/xyz</div>
  <div data-test="space-xyz-d50" class="h-12 rounded bg-red-500 bg-hue-rotate-120/xyz-d50 flex items-center justify-center text-xs font-mono text-white">/xyz-d50</div>
  <div data-test="space-xyz-d65" class="h-12 rounded bg-red-500 bg-hue-rotate-120/xyz-d65 flex items-center justify-center text-xs font-mono text-white">/xyz-d65</div>
</div>

## Text / border / accent smoke

<div class="flex gap-4 my-6 text-2xl font-bold">
  <span data-test="text-base" class="text-red-500">base</span>
  <span data-test="text-rot-120" class="text-red-500 text-hue-rotate-120">+120°</span>
  <span data-test="text-rot-neg-120" class="text-red-500 -text-hue-rotate-120">-120°</span>
</div>

<div class="flex gap-3 my-6">
  <div data-test="border-base" class="w-20 h-20 rounded border-4 border-red-500"></div>
  <div data-test="border-rot-120" class="w-20 h-20 rounded border-4 border-red-500 border-hue-rotate-120"></div>
  <div data-test="border-rot-neg-120" class="w-20 h-20 rounded border-4 border-red-500 -border-hue-rotate-120"></div>
</div>

## Full Tailwind matrix

Each family below shows all 11 shades (rows) rotated through the full 360° wheel in 30° increments (columns). Neutral families (slate, gray, zinc, neutral, stone) should show minimal variation — they're low-chroma.

### slate

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-slate-50 h-6" data-test="slate-50-0"></div>
      <div class="flex-1 bg-slate-50 bg-hue-rotate-30 h-6" data-test="slate-50-30"></div>
      <div class="flex-1 bg-slate-50 bg-hue-rotate-60 h-6" data-test="slate-50-60"></div>
      <div class="flex-1 bg-slate-50 bg-hue-rotate-90 h-6" data-test="slate-50-90"></div>
      <div class="flex-1 bg-slate-50 bg-hue-rotate-120 h-6" data-test="slate-50-120"></div>
      <div class="flex-1 bg-slate-50 bg-hue-rotate-150 h-6" data-test="slate-50-150"></div>
      <div class="flex-1 bg-slate-50 bg-hue-rotate-180 h-6" data-test="slate-50-180"></div>
      <div class="flex-1 bg-slate-50 bg-hue-rotate-210 h-6" data-test="slate-50-210"></div>
      <div class="flex-1 bg-slate-50 bg-hue-rotate-240 h-6" data-test="slate-50-240"></div>
      <div class="flex-1 bg-slate-50 bg-hue-rotate-270 h-6" data-test="slate-50-270"></div>
      <div class="flex-1 bg-slate-50 bg-hue-rotate-300 h-6" data-test="slate-50-300"></div>
      <div class="flex-1 bg-slate-50 bg-hue-rotate-330 h-6" data-test="slate-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-slate-100 h-6" data-test="slate-100-0"></div>
      <div class="flex-1 bg-slate-100 bg-hue-rotate-30 h-6" data-test="slate-100-30"></div>
      <div class="flex-1 bg-slate-100 bg-hue-rotate-60 h-6" data-test="slate-100-60"></div>
      <div class="flex-1 bg-slate-100 bg-hue-rotate-90 h-6" data-test="slate-100-90"></div>
      <div class="flex-1 bg-slate-100 bg-hue-rotate-120 h-6" data-test="slate-100-120"></div>
      <div class="flex-1 bg-slate-100 bg-hue-rotate-150 h-6" data-test="slate-100-150"></div>
      <div class="flex-1 bg-slate-100 bg-hue-rotate-180 h-6" data-test="slate-100-180"></div>
      <div class="flex-1 bg-slate-100 bg-hue-rotate-210 h-6" data-test="slate-100-210"></div>
      <div class="flex-1 bg-slate-100 bg-hue-rotate-240 h-6" data-test="slate-100-240"></div>
      <div class="flex-1 bg-slate-100 bg-hue-rotate-270 h-6" data-test="slate-100-270"></div>
      <div class="flex-1 bg-slate-100 bg-hue-rotate-300 h-6" data-test="slate-100-300"></div>
      <div class="flex-1 bg-slate-100 bg-hue-rotate-330 h-6" data-test="slate-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-slate-200 h-6" data-test="slate-200-0"></div>
      <div class="flex-1 bg-slate-200 bg-hue-rotate-30 h-6" data-test="slate-200-30"></div>
      <div class="flex-1 bg-slate-200 bg-hue-rotate-60 h-6" data-test="slate-200-60"></div>
      <div class="flex-1 bg-slate-200 bg-hue-rotate-90 h-6" data-test="slate-200-90"></div>
      <div class="flex-1 bg-slate-200 bg-hue-rotate-120 h-6" data-test="slate-200-120"></div>
      <div class="flex-1 bg-slate-200 bg-hue-rotate-150 h-6" data-test="slate-200-150"></div>
      <div class="flex-1 bg-slate-200 bg-hue-rotate-180 h-6" data-test="slate-200-180"></div>
      <div class="flex-1 bg-slate-200 bg-hue-rotate-210 h-6" data-test="slate-200-210"></div>
      <div class="flex-1 bg-slate-200 bg-hue-rotate-240 h-6" data-test="slate-200-240"></div>
      <div class="flex-1 bg-slate-200 bg-hue-rotate-270 h-6" data-test="slate-200-270"></div>
      <div class="flex-1 bg-slate-200 bg-hue-rotate-300 h-6" data-test="slate-200-300"></div>
      <div class="flex-1 bg-slate-200 bg-hue-rotate-330 h-6" data-test="slate-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-slate-300 h-6" data-test="slate-300-0"></div>
      <div class="flex-1 bg-slate-300 bg-hue-rotate-30 h-6" data-test="slate-300-30"></div>
      <div class="flex-1 bg-slate-300 bg-hue-rotate-60 h-6" data-test="slate-300-60"></div>
      <div class="flex-1 bg-slate-300 bg-hue-rotate-90 h-6" data-test="slate-300-90"></div>
      <div class="flex-1 bg-slate-300 bg-hue-rotate-120 h-6" data-test="slate-300-120"></div>
      <div class="flex-1 bg-slate-300 bg-hue-rotate-150 h-6" data-test="slate-300-150"></div>
      <div class="flex-1 bg-slate-300 bg-hue-rotate-180 h-6" data-test="slate-300-180"></div>
      <div class="flex-1 bg-slate-300 bg-hue-rotate-210 h-6" data-test="slate-300-210"></div>
      <div class="flex-1 bg-slate-300 bg-hue-rotate-240 h-6" data-test="slate-300-240"></div>
      <div class="flex-1 bg-slate-300 bg-hue-rotate-270 h-6" data-test="slate-300-270"></div>
      <div class="flex-1 bg-slate-300 bg-hue-rotate-300 h-6" data-test="slate-300-300"></div>
      <div class="flex-1 bg-slate-300 bg-hue-rotate-330 h-6" data-test="slate-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-slate-400 h-6" data-test="slate-400-0"></div>
      <div class="flex-1 bg-slate-400 bg-hue-rotate-30 h-6" data-test="slate-400-30"></div>
      <div class="flex-1 bg-slate-400 bg-hue-rotate-60 h-6" data-test="slate-400-60"></div>
      <div class="flex-1 bg-slate-400 bg-hue-rotate-90 h-6" data-test="slate-400-90"></div>
      <div class="flex-1 bg-slate-400 bg-hue-rotate-120 h-6" data-test="slate-400-120"></div>
      <div class="flex-1 bg-slate-400 bg-hue-rotate-150 h-6" data-test="slate-400-150"></div>
      <div class="flex-1 bg-slate-400 bg-hue-rotate-180 h-6" data-test="slate-400-180"></div>
      <div class="flex-1 bg-slate-400 bg-hue-rotate-210 h-6" data-test="slate-400-210"></div>
      <div class="flex-1 bg-slate-400 bg-hue-rotate-240 h-6" data-test="slate-400-240"></div>
      <div class="flex-1 bg-slate-400 bg-hue-rotate-270 h-6" data-test="slate-400-270"></div>
      <div class="flex-1 bg-slate-400 bg-hue-rotate-300 h-6" data-test="slate-400-300"></div>
      <div class="flex-1 bg-slate-400 bg-hue-rotate-330 h-6" data-test="slate-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-slate-500 h-6" data-test="slate-500-0"></div>
      <div class="flex-1 bg-slate-500 bg-hue-rotate-30 h-6" data-test="slate-500-30"></div>
      <div class="flex-1 bg-slate-500 bg-hue-rotate-60 h-6" data-test="slate-500-60"></div>
      <div class="flex-1 bg-slate-500 bg-hue-rotate-90 h-6" data-test="slate-500-90"></div>
      <div class="flex-1 bg-slate-500 bg-hue-rotate-120 h-6" data-test="slate-500-120"></div>
      <div class="flex-1 bg-slate-500 bg-hue-rotate-150 h-6" data-test="slate-500-150"></div>
      <div class="flex-1 bg-slate-500 bg-hue-rotate-180 h-6" data-test="slate-500-180"></div>
      <div class="flex-1 bg-slate-500 bg-hue-rotate-210 h-6" data-test="slate-500-210"></div>
      <div class="flex-1 bg-slate-500 bg-hue-rotate-240 h-6" data-test="slate-500-240"></div>
      <div class="flex-1 bg-slate-500 bg-hue-rotate-270 h-6" data-test="slate-500-270"></div>
      <div class="flex-1 bg-slate-500 bg-hue-rotate-300 h-6" data-test="slate-500-300"></div>
      <div class="flex-1 bg-slate-500 bg-hue-rotate-330 h-6" data-test="slate-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-slate-600 h-6" data-test="slate-600-0"></div>
      <div class="flex-1 bg-slate-600 bg-hue-rotate-30 h-6" data-test="slate-600-30"></div>
      <div class="flex-1 bg-slate-600 bg-hue-rotate-60 h-6" data-test="slate-600-60"></div>
      <div class="flex-1 bg-slate-600 bg-hue-rotate-90 h-6" data-test="slate-600-90"></div>
      <div class="flex-1 bg-slate-600 bg-hue-rotate-120 h-6" data-test="slate-600-120"></div>
      <div class="flex-1 bg-slate-600 bg-hue-rotate-150 h-6" data-test="slate-600-150"></div>
      <div class="flex-1 bg-slate-600 bg-hue-rotate-180 h-6" data-test="slate-600-180"></div>
      <div class="flex-1 bg-slate-600 bg-hue-rotate-210 h-6" data-test="slate-600-210"></div>
      <div class="flex-1 bg-slate-600 bg-hue-rotate-240 h-6" data-test="slate-600-240"></div>
      <div class="flex-1 bg-slate-600 bg-hue-rotate-270 h-6" data-test="slate-600-270"></div>
      <div class="flex-1 bg-slate-600 bg-hue-rotate-300 h-6" data-test="slate-600-300"></div>
      <div class="flex-1 bg-slate-600 bg-hue-rotate-330 h-6" data-test="slate-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-slate-700 h-6" data-test="slate-700-0"></div>
      <div class="flex-1 bg-slate-700 bg-hue-rotate-30 h-6" data-test="slate-700-30"></div>
      <div class="flex-1 bg-slate-700 bg-hue-rotate-60 h-6" data-test="slate-700-60"></div>
      <div class="flex-1 bg-slate-700 bg-hue-rotate-90 h-6" data-test="slate-700-90"></div>
      <div class="flex-1 bg-slate-700 bg-hue-rotate-120 h-6" data-test="slate-700-120"></div>
      <div class="flex-1 bg-slate-700 bg-hue-rotate-150 h-6" data-test="slate-700-150"></div>
      <div class="flex-1 bg-slate-700 bg-hue-rotate-180 h-6" data-test="slate-700-180"></div>
      <div class="flex-1 bg-slate-700 bg-hue-rotate-210 h-6" data-test="slate-700-210"></div>
      <div class="flex-1 bg-slate-700 bg-hue-rotate-240 h-6" data-test="slate-700-240"></div>
      <div class="flex-1 bg-slate-700 bg-hue-rotate-270 h-6" data-test="slate-700-270"></div>
      <div class="flex-1 bg-slate-700 bg-hue-rotate-300 h-6" data-test="slate-700-300"></div>
      <div class="flex-1 bg-slate-700 bg-hue-rotate-330 h-6" data-test="slate-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-slate-800 h-6" data-test="slate-800-0"></div>
      <div class="flex-1 bg-slate-800 bg-hue-rotate-30 h-6" data-test="slate-800-30"></div>
      <div class="flex-1 bg-slate-800 bg-hue-rotate-60 h-6" data-test="slate-800-60"></div>
      <div class="flex-1 bg-slate-800 bg-hue-rotate-90 h-6" data-test="slate-800-90"></div>
      <div class="flex-1 bg-slate-800 bg-hue-rotate-120 h-6" data-test="slate-800-120"></div>
      <div class="flex-1 bg-slate-800 bg-hue-rotate-150 h-6" data-test="slate-800-150"></div>
      <div class="flex-1 bg-slate-800 bg-hue-rotate-180 h-6" data-test="slate-800-180"></div>
      <div class="flex-1 bg-slate-800 bg-hue-rotate-210 h-6" data-test="slate-800-210"></div>
      <div class="flex-1 bg-slate-800 bg-hue-rotate-240 h-6" data-test="slate-800-240"></div>
      <div class="flex-1 bg-slate-800 bg-hue-rotate-270 h-6" data-test="slate-800-270"></div>
      <div class="flex-1 bg-slate-800 bg-hue-rotate-300 h-6" data-test="slate-800-300"></div>
      <div class="flex-1 bg-slate-800 bg-hue-rotate-330 h-6" data-test="slate-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-slate-900 h-6" data-test="slate-900-0"></div>
      <div class="flex-1 bg-slate-900 bg-hue-rotate-30 h-6" data-test="slate-900-30"></div>
      <div class="flex-1 bg-slate-900 bg-hue-rotate-60 h-6" data-test="slate-900-60"></div>
      <div class="flex-1 bg-slate-900 bg-hue-rotate-90 h-6" data-test="slate-900-90"></div>
      <div class="flex-1 bg-slate-900 bg-hue-rotate-120 h-6" data-test="slate-900-120"></div>
      <div class="flex-1 bg-slate-900 bg-hue-rotate-150 h-6" data-test="slate-900-150"></div>
      <div class="flex-1 bg-slate-900 bg-hue-rotate-180 h-6" data-test="slate-900-180"></div>
      <div class="flex-1 bg-slate-900 bg-hue-rotate-210 h-6" data-test="slate-900-210"></div>
      <div class="flex-1 bg-slate-900 bg-hue-rotate-240 h-6" data-test="slate-900-240"></div>
      <div class="flex-1 bg-slate-900 bg-hue-rotate-270 h-6" data-test="slate-900-270"></div>
      <div class="flex-1 bg-slate-900 bg-hue-rotate-300 h-6" data-test="slate-900-300"></div>
      <div class="flex-1 bg-slate-900 bg-hue-rotate-330 h-6" data-test="slate-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-slate-950 h-6" data-test="slate-950-0"></div>
      <div class="flex-1 bg-slate-950 bg-hue-rotate-30 h-6" data-test="slate-950-30"></div>
      <div class="flex-1 bg-slate-950 bg-hue-rotate-60 h-6" data-test="slate-950-60"></div>
      <div class="flex-1 bg-slate-950 bg-hue-rotate-90 h-6" data-test="slate-950-90"></div>
      <div class="flex-1 bg-slate-950 bg-hue-rotate-120 h-6" data-test="slate-950-120"></div>
      <div class="flex-1 bg-slate-950 bg-hue-rotate-150 h-6" data-test="slate-950-150"></div>
      <div class="flex-1 bg-slate-950 bg-hue-rotate-180 h-6" data-test="slate-950-180"></div>
      <div class="flex-1 bg-slate-950 bg-hue-rotate-210 h-6" data-test="slate-950-210"></div>
      <div class="flex-1 bg-slate-950 bg-hue-rotate-240 h-6" data-test="slate-950-240"></div>
      <div class="flex-1 bg-slate-950 bg-hue-rotate-270 h-6" data-test="slate-950-270"></div>
      <div class="flex-1 bg-slate-950 bg-hue-rotate-300 h-6" data-test="slate-950-300"></div>
      <div class="flex-1 bg-slate-950 bg-hue-rotate-330 h-6" data-test="slate-950-330"></div>
    </div>
  </div>
</div>

### gray

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-gray-50 h-6" data-test="gray-50-0"></div>
      <div class="flex-1 bg-gray-50 bg-hue-rotate-30 h-6" data-test="gray-50-30"></div>
      <div class="flex-1 bg-gray-50 bg-hue-rotate-60 h-6" data-test="gray-50-60"></div>
      <div class="flex-1 bg-gray-50 bg-hue-rotate-90 h-6" data-test="gray-50-90"></div>
      <div class="flex-1 bg-gray-50 bg-hue-rotate-120 h-6" data-test="gray-50-120"></div>
      <div class="flex-1 bg-gray-50 bg-hue-rotate-150 h-6" data-test="gray-50-150"></div>
      <div class="flex-1 bg-gray-50 bg-hue-rotate-180 h-6" data-test="gray-50-180"></div>
      <div class="flex-1 bg-gray-50 bg-hue-rotate-210 h-6" data-test="gray-50-210"></div>
      <div class="flex-1 bg-gray-50 bg-hue-rotate-240 h-6" data-test="gray-50-240"></div>
      <div class="flex-1 bg-gray-50 bg-hue-rotate-270 h-6" data-test="gray-50-270"></div>
      <div class="flex-1 bg-gray-50 bg-hue-rotate-300 h-6" data-test="gray-50-300"></div>
      <div class="flex-1 bg-gray-50 bg-hue-rotate-330 h-6" data-test="gray-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-gray-100 h-6" data-test="gray-100-0"></div>
      <div class="flex-1 bg-gray-100 bg-hue-rotate-30 h-6" data-test="gray-100-30"></div>
      <div class="flex-1 bg-gray-100 bg-hue-rotate-60 h-6" data-test="gray-100-60"></div>
      <div class="flex-1 bg-gray-100 bg-hue-rotate-90 h-6" data-test="gray-100-90"></div>
      <div class="flex-1 bg-gray-100 bg-hue-rotate-120 h-6" data-test="gray-100-120"></div>
      <div class="flex-1 bg-gray-100 bg-hue-rotate-150 h-6" data-test="gray-100-150"></div>
      <div class="flex-1 bg-gray-100 bg-hue-rotate-180 h-6" data-test="gray-100-180"></div>
      <div class="flex-1 bg-gray-100 bg-hue-rotate-210 h-6" data-test="gray-100-210"></div>
      <div class="flex-1 bg-gray-100 bg-hue-rotate-240 h-6" data-test="gray-100-240"></div>
      <div class="flex-1 bg-gray-100 bg-hue-rotate-270 h-6" data-test="gray-100-270"></div>
      <div class="flex-1 bg-gray-100 bg-hue-rotate-300 h-6" data-test="gray-100-300"></div>
      <div class="flex-1 bg-gray-100 bg-hue-rotate-330 h-6" data-test="gray-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-gray-200 h-6" data-test="gray-200-0"></div>
      <div class="flex-1 bg-gray-200 bg-hue-rotate-30 h-6" data-test="gray-200-30"></div>
      <div class="flex-1 bg-gray-200 bg-hue-rotate-60 h-6" data-test="gray-200-60"></div>
      <div class="flex-1 bg-gray-200 bg-hue-rotate-90 h-6" data-test="gray-200-90"></div>
      <div class="flex-1 bg-gray-200 bg-hue-rotate-120 h-6" data-test="gray-200-120"></div>
      <div class="flex-1 bg-gray-200 bg-hue-rotate-150 h-6" data-test="gray-200-150"></div>
      <div class="flex-1 bg-gray-200 bg-hue-rotate-180 h-6" data-test="gray-200-180"></div>
      <div class="flex-1 bg-gray-200 bg-hue-rotate-210 h-6" data-test="gray-200-210"></div>
      <div class="flex-1 bg-gray-200 bg-hue-rotate-240 h-6" data-test="gray-200-240"></div>
      <div class="flex-1 bg-gray-200 bg-hue-rotate-270 h-6" data-test="gray-200-270"></div>
      <div class="flex-1 bg-gray-200 bg-hue-rotate-300 h-6" data-test="gray-200-300"></div>
      <div class="flex-1 bg-gray-200 bg-hue-rotate-330 h-6" data-test="gray-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-gray-300 h-6" data-test="gray-300-0"></div>
      <div class="flex-1 bg-gray-300 bg-hue-rotate-30 h-6" data-test="gray-300-30"></div>
      <div class="flex-1 bg-gray-300 bg-hue-rotate-60 h-6" data-test="gray-300-60"></div>
      <div class="flex-1 bg-gray-300 bg-hue-rotate-90 h-6" data-test="gray-300-90"></div>
      <div class="flex-1 bg-gray-300 bg-hue-rotate-120 h-6" data-test="gray-300-120"></div>
      <div class="flex-1 bg-gray-300 bg-hue-rotate-150 h-6" data-test="gray-300-150"></div>
      <div class="flex-1 bg-gray-300 bg-hue-rotate-180 h-6" data-test="gray-300-180"></div>
      <div class="flex-1 bg-gray-300 bg-hue-rotate-210 h-6" data-test="gray-300-210"></div>
      <div class="flex-1 bg-gray-300 bg-hue-rotate-240 h-6" data-test="gray-300-240"></div>
      <div class="flex-1 bg-gray-300 bg-hue-rotate-270 h-6" data-test="gray-300-270"></div>
      <div class="flex-1 bg-gray-300 bg-hue-rotate-300 h-6" data-test="gray-300-300"></div>
      <div class="flex-1 bg-gray-300 bg-hue-rotate-330 h-6" data-test="gray-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-gray-400 h-6" data-test="gray-400-0"></div>
      <div class="flex-1 bg-gray-400 bg-hue-rotate-30 h-6" data-test="gray-400-30"></div>
      <div class="flex-1 bg-gray-400 bg-hue-rotate-60 h-6" data-test="gray-400-60"></div>
      <div class="flex-1 bg-gray-400 bg-hue-rotate-90 h-6" data-test="gray-400-90"></div>
      <div class="flex-1 bg-gray-400 bg-hue-rotate-120 h-6" data-test="gray-400-120"></div>
      <div class="flex-1 bg-gray-400 bg-hue-rotate-150 h-6" data-test="gray-400-150"></div>
      <div class="flex-1 bg-gray-400 bg-hue-rotate-180 h-6" data-test="gray-400-180"></div>
      <div class="flex-1 bg-gray-400 bg-hue-rotate-210 h-6" data-test="gray-400-210"></div>
      <div class="flex-1 bg-gray-400 bg-hue-rotate-240 h-6" data-test="gray-400-240"></div>
      <div class="flex-1 bg-gray-400 bg-hue-rotate-270 h-6" data-test="gray-400-270"></div>
      <div class="flex-1 bg-gray-400 bg-hue-rotate-300 h-6" data-test="gray-400-300"></div>
      <div class="flex-1 bg-gray-400 bg-hue-rotate-330 h-6" data-test="gray-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-gray-500 h-6" data-test="gray-500-0"></div>
      <div class="flex-1 bg-gray-500 bg-hue-rotate-30 h-6" data-test="gray-500-30"></div>
      <div class="flex-1 bg-gray-500 bg-hue-rotate-60 h-6" data-test="gray-500-60"></div>
      <div class="flex-1 bg-gray-500 bg-hue-rotate-90 h-6" data-test="gray-500-90"></div>
      <div class="flex-1 bg-gray-500 bg-hue-rotate-120 h-6" data-test="gray-500-120"></div>
      <div class="flex-1 bg-gray-500 bg-hue-rotate-150 h-6" data-test="gray-500-150"></div>
      <div class="flex-1 bg-gray-500 bg-hue-rotate-180 h-6" data-test="gray-500-180"></div>
      <div class="flex-1 bg-gray-500 bg-hue-rotate-210 h-6" data-test="gray-500-210"></div>
      <div class="flex-1 bg-gray-500 bg-hue-rotate-240 h-6" data-test="gray-500-240"></div>
      <div class="flex-1 bg-gray-500 bg-hue-rotate-270 h-6" data-test="gray-500-270"></div>
      <div class="flex-1 bg-gray-500 bg-hue-rotate-300 h-6" data-test="gray-500-300"></div>
      <div class="flex-1 bg-gray-500 bg-hue-rotate-330 h-6" data-test="gray-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-gray-600 h-6" data-test="gray-600-0"></div>
      <div class="flex-1 bg-gray-600 bg-hue-rotate-30 h-6" data-test="gray-600-30"></div>
      <div class="flex-1 bg-gray-600 bg-hue-rotate-60 h-6" data-test="gray-600-60"></div>
      <div class="flex-1 bg-gray-600 bg-hue-rotate-90 h-6" data-test="gray-600-90"></div>
      <div class="flex-1 bg-gray-600 bg-hue-rotate-120 h-6" data-test="gray-600-120"></div>
      <div class="flex-1 bg-gray-600 bg-hue-rotate-150 h-6" data-test="gray-600-150"></div>
      <div class="flex-1 bg-gray-600 bg-hue-rotate-180 h-6" data-test="gray-600-180"></div>
      <div class="flex-1 bg-gray-600 bg-hue-rotate-210 h-6" data-test="gray-600-210"></div>
      <div class="flex-1 bg-gray-600 bg-hue-rotate-240 h-6" data-test="gray-600-240"></div>
      <div class="flex-1 bg-gray-600 bg-hue-rotate-270 h-6" data-test="gray-600-270"></div>
      <div class="flex-1 bg-gray-600 bg-hue-rotate-300 h-6" data-test="gray-600-300"></div>
      <div class="flex-1 bg-gray-600 bg-hue-rotate-330 h-6" data-test="gray-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-gray-700 h-6" data-test="gray-700-0"></div>
      <div class="flex-1 bg-gray-700 bg-hue-rotate-30 h-6" data-test="gray-700-30"></div>
      <div class="flex-1 bg-gray-700 bg-hue-rotate-60 h-6" data-test="gray-700-60"></div>
      <div class="flex-1 bg-gray-700 bg-hue-rotate-90 h-6" data-test="gray-700-90"></div>
      <div class="flex-1 bg-gray-700 bg-hue-rotate-120 h-6" data-test="gray-700-120"></div>
      <div class="flex-1 bg-gray-700 bg-hue-rotate-150 h-6" data-test="gray-700-150"></div>
      <div class="flex-1 bg-gray-700 bg-hue-rotate-180 h-6" data-test="gray-700-180"></div>
      <div class="flex-1 bg-gray-700 bg-hue-rotate-210 h-6" data-test="gray-700-210"></div>
      <div class="flex-1 bg-gray-700 bg-hue-rotate-240 h-6" data-test="gray-700-240"></div>
      <div class="flex-1 bg-gray-700 bg-hue-rotate-270 h-6" data-test="gray-700-270"></div>
      <div class="flex-1 bg-gray-700 bg-hue-rotate-300 h-6" data-test="gray-700-300"></div>
      <div class="flex-1 bg-gray-700 bg-hue-rotate-330 h-6" data-test="gray-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-gray-800 h-6" data-test="gray-800-0"></div>
      <div class="flex-1 bg-gray-800 bg-hue-rotate-30 h-6" data-test="gray-800-30"></div>
      <div class="flex-1 bg-gray-800 bg-hue-rotate-60 h-6" data-test="gray-800-60"></div>
      <div class="flex-1 bg-gray-800 bg-hue-rotate-90 h-6" data-test="gray-800-90"></div>
      <div class="flex-1 bg-gray-800 bg-hue-rotate-120 h-6" data-test="gray-800-120"></div>
      <div class="flex-1 bg-gray-800 bg-hue-rotate-150 h-6" data-test="gray-800-150"></div>
      <div class="flex-1 bg-gray-800 bg-hue-rotate-180 h-6" data-test="gray-800-180"></div>
      <div class="flex-1 bg-gray-800 bg-hue-rotate-210 h-6" data-test="gray-800-210"></div>
      <div class="flex-1 bg-gray-800 bg-hue-rotate-240 h-6" data-test="gray-800-240"></div>
      <div class="flex-1 bg-gray-800 bg-hue-rotate-270 h-6" data-test="gray-800-270"></div>
      <div class="flex-1 bg-gray-800 bg-hue-rotate-300 h-6" data-test="gray-800-300"></div>
      <div class="flex-1 bg-gray-800 bg-hue-rotate-330 h-6" data-test="gray-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-gray-900 h-6" data-test="gray-900-0"></div>
      <div class="flex-1 bg-gray-900 bg-hue-rotate-30 h-6" data-test="gray-900-30"></div>
      <div class="flex-1 bg-gray-900 bg-hue-rotate-60 h-6" data-test="gray-900-60"></div>
      <div class="flex-1 bg-gray-900 bg-hue-rotate-90 h-6" data-test="gray-900-90"></div>
      <div class="flex-1 bg-gray-900 bg-hue-rotate-120 h-6" data-test="gray-900-120"></div>
      <div class="flex-1 bg-gray-900 bg-hue-rotate-150 h-6" data-test="gray-900-150"></div>
      <div class="flex-1 bg-gray-900 bg-hue-rotate-180 h-6" data-test="gray-900-180"></div>
      <div class="flex-1 bg-gray-900 bg-hue-rotate-210 h-6" data-test="gray-900-210"></div>
      <div class="flex-1 bg-gray-900 bg-hue-rotate-240 h-6" data-test="gray-900-240"></div>
      <div class="flex-1 bg-gray-900 bg-hue-rotate-270 h-6" data-test="gray-900-270"></div>
      <div class="flex-1 bg-gray-900 bg-hue-rotate-300 h-6" data-test="gray-900-300"></div>
      <div class="flex-1 bg-gray-900 bg-hue-rotate-330 h-6" data-test="gray-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-gray-950 h-6" data-test="gray-950-0"></div>
      <div class="flex-1 bg-gray-950 bg-hue-rotate-30 h-6" data-test="gray-950-30"></div>
      <div class="flex-1 bg-gray-950 bg-hue-rotate-60 h-6" data-test="gray-950-60"></div>
      <div class="flex-1 bg-gray-950 bg-hue-rotate-90 h-6" data-test="gray-950-90"></div>
      <div class="flex-1 bg-gray-950 bg-hue-rotate-120 h-6" data-test="gray-950-120"></div>
      <div class="flex-1 bg-gray-950 bg-hue-rotate-150 h-6" data-test="gray-950-150"></div>
      <div class="flex-1 bg-gray-950 bg-hue-rotate-180 h-6" data-test="gray-950-180"></div>
      <div class="flex-1 bg-gray-950 bg-hue-rotate-210 h-6" data-test="gray-950-210"></div>
      <div class="flex-1 bg-gray-950 bg-hue-rotate-240 h-6" data-test="gray-950-240"></div>
      <div class="flex-1 bg-gray-950 bg-hue-rotate-270 h-6" data-test="gray-950-270"></div>
      <div class="flex-1 bg-gray-950 bg-hue-rotate-300 h-6" data-test="gray-950-300"></div>
      <div class="flex-1 bg-gray-950 bg-hue-rotate-330 h-6" data-test="gray-950-330"></div>
    </div>
  </div>
</div>

### zinc

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-zinc-50 h-6" data-test="zinc-50-0"></div>
      <div class="flex-1 bg-zinc-50 bg-hue-rotate-30 h-6" data-test="zinc-50-30"></div>
      <div class="flex-1 bg-zinc-50 bg-hue-rotate-60 h-6" data-test="zinc-50-60"></div>
      <div class="flex-1 bg-zinc-50 bg-hue-rotate-90 h-6" data-test="zinc-50-90"></div>
      <div class="flex-1 bg-zinc-50 bg-hue-rotate-120 h-6" data-test="zinc-50-120"></div>
      <div class="flex-1 bg-zinc-50 bg-hue-rotate-150 h-6" data-test="zinc-50-150"></div>
      <div class="flex-1 bg-zinc-50 bg-hue-rotate-180 h-6" data-test="zinc-50-180"></div>
      <div class="flex-1 bg-zinc-50 bg-hue-rotate-210 h-6" data-test="zinc-50-210"></div>
      <div class="flex-1 bg-zinc-50 bg-hue-rotate-240 h-6" data-test="zinc-50-240"></div>
      <div class="flex-1 bg-zinc-50 bg-hue-rotate-270 h-6" data-test="zinc-50-270"></div>
      <div class="flex-1 bg-zinc-50 bg-hue-rotate-300 h-6" data-test="zinc-50-300"></div>
      <div class="flex-1 bg-zinc-50 bg-hue-rotate-330 h-6" data-test="zinc-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-zinc-100 h-6" data-test="zinc-100-0"></div>
      <div class="flex-1 bg-zinc-100 bg-hue-rotate-30 h-6" data-test="zinc-100-30"></div>
      <div class="flex-1 bg-zinc-100 bg-hue-rotate-60 h-6" data-test="zinc-100-60"></div>
      <div class="flex-1 bg-zinc-100 bg-hue-rotate-90 h-6" data-test="zinc-100-90"></div>
      <div class="flex-1 bg-zinc-100 bg-hue-rotate-120 h-6" data-test="zinc-100-120"></div>
      <div class="flex-1 bg-zinc-100 bg-hue-rotate-150 h-6" data-test="zinc-100-150"></div>
      <div class="flex-1 bg-zinc-100 bg-hue-rotate-180 h-6" data-test="zinc-100-180"></div>
      <div class="flex-1 bg-zinc-100 bg-hue-rotate-210 h-6" data-test="zinc-100-210"></div>
      <div class="flex-1 bg-zinc-100 bg-hue-rotate-240 h-6" data-test="zinc-100-240"></div>
      <div class="flex-1 bg-zinc-100 bg-hue-rotate-270 h-6" data-test="zinc-100-270"></div>
      <div class="flex-1 bg-zinc-100 bg-hue-rotate-300 h-6" data-test="zinc-100-300"></div>
      <div class="flex-1 bg-zinc-100 bg-hue-rotate-330 h-6" data-test="zinc-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-zinc-200 h-6" data-test="zinc-200-0"></div>
      <div class="flex-1 bg-zinc-200 bg-hue-rotate-30 h-6" data-test="zinc-200-30"></div>
      <div class="flex-1 bg-zinc-200 bg-hue-rotate-60 h-6" data-test="zinc-200-60"></div>
      <div class="flex-1 bg-zinc-200 bg-hue-rotate-90 h-6" data-test="zinc-200-90"></div>
      <div class="flex-1 bg-zinc-200 bg-hue-rotate-120 h-6" data-test="zinc-200-120"></div>
      <div class="flex-1 bg-zinc-200 bg-hue-rotate-150 h-6" data-test="zinc-200-150"></div>
      <div class="flex-1 bg-zinc-200 bg-hue-rotate-180 h-6" data-test="zinc-200-180"></div>
      <div class="flex-1 bg-zinc-200 bg-hue-rotate-210 h-6" data-test="zinc-200-210"></div>
      <div class="flex-1 bg-zinc-200 bg-hue-rotate-240 h-6" data-test="zinc-200-240"></div>
      <div class="flex-1 bg-zinc-200 bg-hue-rotate-270 h-6" data-test="zinc-200-270"></div>
      <div class="flex-1 bg-zinc-200 bg-hue-rotate-300 h-6" data-test="zinc-200-300"></div>
      <div class="flex-1 bg-zinc-200 bg-hue-rotate-330 h-6" data-test="zinc-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-zinc-300 h-6" data-test="zinc-300-0"></div>
      <div class="flex-1 bg-zinc-300 bg-hue-rotate-30 h-6" data-test="zinc-300-30"></div>
      <div class="flex-1 bg-zinc-300 bg-hue-rotate-60 h-6" data-test="zinc-300-60"></div>
      <div class="flex-1 bg-zinc-300 bg-hue-rotate-90 h-6" data-test="zinc-300-90"></div>
      <div class="flex-1 bg-zinc-300 bg-hue-rotate-120 h-6" data-test="zinc-300-120"></div>
      <div class="flex-1 bg-zinc-300 bg-hue-rotate-150 h-6" data-test="zinc-300-150"></div>
      <div class="flex-1 bg-zinc-300 bg-hue-rotate-180 h-6" data-test="zinc-300-180"></div>
      <div class="flex-1 bg-zinc-300 bg-hue-rotate-210 h-6" data-test="zinc-300-210"></div>
      <div class="flex-1 bg-zinc-300 bg-hue-rotate-240 h-6" data-test="zinc-300-240"></div>
      <div class="flex-1 bg-zinc-300 bg-hue-rotate-270 h-6" data-test="zinc-300-270"></div>
      <div class="flex-1 bg-zinc-300 bg-hue-rotate-300 h-6" data-test="zinc-300-300"></div>
      <div class="flex-1 bg-zinc-300 bg-hue-rotate-330 h-6" data-test="zinc-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-zinc-400 h-6" data-test="zinc-400-0"></div>
      <div class="flex-1 bg-zinc-400 bg-hue-rotate-30 h-6" data-test="zinc-400-30"></div>
      <div class="flex-1 bg-zinc-400 bg-hue-rotate-60 h-6" data-test="zinc-400-60"></div>
      <div class="flex-1 bg-zinc-400 bg-hue-rotate-90 h-6" data-test="zinc-400-90"></div>
      <div class="flex-1 bg-zinc-400 bg-hue-rotate-120 h-6" data-test="zinc-400-120"></div>
      <div class="flex-1 bg-zinc-400 bg-hue-rotate-150 h-6" data-test="zinc-400-150"></div>
      <div class="flex-1 bg-zinc-400 bg-hue-rotate-180 h-6" data-test="zinc-400-180"></div>
      <div class="flex-1 bg-zinc-400 bg-hue-rotate-210 h-6" data-test="zinc-400-210"></div>
      <div class="flex-1 bg-zinc-400 bg-hue-rotate-240 h-6" data-test="zinc-400-240"></div>
      <div class="flex-1 bg-zinc-400 bg-hue-rotate-270 h-6" data-test="zinc-400-270"></div>
      <div class="flex-1 bg-zinc-400 bg-hue-rotate-300 h-6" data-test="zinc-400-300"></div>
      <div class="flex-1 bg-zinc-400 bg-hue-rotate-330 h-6" data-test="zinc-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-zinc-500 h-6" data-test="zinc-500-0"></div>
      <div class="flex-1 bg-zinc-500 bg-hue-rotate-30 h-6" data-test="zinc-500-30"></div>
      <div class="flex-1 bg-zinc-500 bg-hue-rotate-60 h-6" data-test="zinc-500-60"></div>
      <div class="flex-1 bg-zinc-500 bg-hue-rotate-90 h-6" data-test="zinc-500-90"></div>
      <div class="flex-1 bg-zinc-500 bg-hue-rotate-120 h-6" data-test="zinc-500-120"></div>
      <div class="flex-1 bg-zinc-500 bg-hue-rotate-150 h-6" data-test="zinc-500-150"></div>
      <div class="flex-1 bg-zinc-500 bg-hue-rotate-180 h-6" data-test="zinc-500-180"></div>
      <div class="flex-1 bg-zinc-500 bg-hue-rotate-210 h-6" data-test="zinc-500-210"></div>
      <div class="flex-1 bg-zinc-500 bg-hue-rotate-240 h-6" data-test="zinc-500-240"></div>
      <div class="flex-1 bg-zinc-500 bg-hue-rotate-270 h-6" data-test="zinc-500-270"></div>
      <div class="flex-1 bg-zinc-500 bg-hue-rotate-300 h-6" data-test="zinc-500-300"></div>
      <div class="flex-1 bg-zinc-500 bg-hue-rotate-330 h-6" data-test="zinc-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-zinc-600 h-6" data-test="zinc-600-0"></div>
      <div class="flex-1 bg-zinc-600 bg-hue-rotate-30 h-6" data-test="zinc-600-30"></div>
      <div class="flex-1 bg-zinc-600 bg-hue-rotate-60 h-6" data-test="zinc-600-60"></div>
      <div class="flex-1 bg-zinc-600 bg-hue-rotate-90 h-6" data-test="zinc-600-90"></div>
      <div class="flex-1 bg-zinc-600 bg-hue-rotate-120 h-6" data-test="zinc-600-120"></div>
      <div class="flex-1 bg-zinc-600 bg-hue-rotate-150 h-6" data-test="zinc-600-150"></div>
      <div class="flex-1 bg-zinc-600 bg-hue-rotate-180 h-6" data-test="zinc-600-180"></div>
      <div class="flex-1 bg-zinc-600 bg-hue-rotate-210 h-6" data-test="zinc-600-210"></div>
      <div class="flex-1 bg-zinc-600 bg-hue-rotate-240 h-6" data-test="zinc-600-240"></div>
      <div class="flex-1 bg-zinc-600 bg-hue-rotate-270 h-6" data-test="zinc-600-270"></div>
      <div class="flex-1 bg-zinc-600 bg-hue-rotate-300 h-6" data-test="zinc-600-300"></div>
      <div class="flex-1 bg-zinc-600 bg-hue-rotate-330 h-6" data-test="zinc-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-zinc-700 h-6" data-test="zinc-700-0"></div>
      <div class="flex-1 bg-zinc-700 bg-hue-rotate-30 h-6" data-test="zinc-700-30"></div>
      <div class="flex-1 bg-zinc-700 bg-hue-rotate-60 h-6" data-test="zinc-700-60"></div>
      <div class="flex-1 bg-zinc-700 bg-hue-rotate-90 h-6" data-test="zinc-700-90"></div>
      <div class="flex-1 bg-zinc-700 bg-hue-rotate-120 h-6" data-test="zinc-700-120"></div>
      <div class="flex-1 bg-zinc-700 bg-hue-rotate-150 h-6" data-test="zinc-700-150"></div>
      <div class="flex-1 bg-zinc-700 bg-hue-rotate-180 h-6" data-test="zinc-700-180"></div>
      <div class="flex-1 bg-zinc-700 bg-hue-rotate-210 h-6" data-test="zinc-700-210"></div>
      <div class="flex-1 bg-zinc-700 bg-hue-rotate-240 h-6" data-test="zinc-700-240"></div>
      <div class="flex-1 bg-zinc-700 bg-hue-rotate-270 h-6" data-test="zinc-700-270"></div>
      <div class="flex-1 bg-zinc-700 bg-hue-rotate-300 h-6" data-test="zinc-700-300"></div>
      <div class="flex-1 bg-zinc-700 bg-hue-rotate-330 h-6" data-test="zinc-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-zinc-800 h-6" data-test="zinc-800-0"></div>
      <div class="flex-1 bg-zinc-800 bg-hue-rotate-30 h-6" data-test="zinc-800-30"></div>
      <div class="flex-1 bg-zinc-800 bg-hue-rotate-60 h-6" data-test="zinc-800-60"></div>
      <div class="flex-1 bg-zinc-800 bg-hue-rotate-90 h-6" data-test="zinc-800-90"></div>
      <div class="flex-1 bg-zinc-800 bg-hue-rotate-120 h-6" data-test="zinc-800-120"></div>
      <div class="flex-1 bg-zinc-800 bg-hue-rotate-150 h-6" data-test="zinc-800-150"></div>
      <div class="flex-1 bg-zinc-800 bg-hue-rotate-180 h-6" data-test="zinc-800-180"></div>
      <div class="flex-1 bg-zinc-800 bg-hue-rotate-210 h-6" data-test="zinc-800-210"></div>
      <div class="flex-1 bg-zinc-800 bg-hue-rotate-240 h-6" data-test="zinc-800-240"></div>
      <div class="flex-1 bg-zinc-800 bg-hue-rotate-270 h-6" data-test="zinc-800-270"></div>
      <div class="flex-1 bg-zinc-800 bg-hue-rotate-300 h-6" data-test="zinc-800-300"></div>
      <div class="flex-1 bg-zinc-800 bg-hue-rotate-330 h-6" data-test="zinc-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-zinc-900 h-6" data-test="zinc-900-0"></div>
      <div class="flex-1 bg-zinc-900 bg-hue-rotate-30 h-6" data-test="zinc-900-30"></div>
      <div class="flex-1 bg-zinc-900 bg-hue-rotate-60 h-6" data-test="zinc-900-60"></div>
      <div class="flex-1 bg-zinc-900 bg-hue-rotate-90 h-6" data-test="zinc-900-90"></div>
      <div class="flex-1 bg-zinc-900 bg-hue-rotate-120 h-6" data-test="zinc-900-120"></div>
      <div class="flex-1 bg-zinc-900 bg-hue-rotate-150 h-6" data-test="zinc-900-150"></div>
      <div class="flex-1 bg-zinc-900 bg-hue-rotate-180 h-6" data-test="zinc-900-180"></div>
      <div class="flex-1 bg-zinc-900 bg-hue-rotate-210 h-6" data-test="zinc-900-210"></div>
      <div class="flex-1 bg-zinc-900 bg-hue-rotate-240 h-6" data-test="zinc-900-240"></div>
      <div class="flex-1 bg-zinc-900 bg-hue-rotate-270 h-6" data-test="zinc-900-270"></div>
      <div class="flex-1 bg-zinc-900 bg-hue-rotate-300 h-6" data-test="zinc-900-300"></div>
      <div class="flex-1 bg-zinc-900 bg-hue-rotate-330 h-6" data-test="zinc-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-zinc-950 h-6" data-test="zinc-950-0"></div>
      <div class="flex-1 bg-zinc-950 bg-hue-rotate-30 h-6" data-test="zinc-950-30"></div>
      <div class="flex-1 bg-zinc-950 bg-hue-rotate-60 h-6" data-test="zinc-950-60"></div>
      <div class="flex-1 bg-zinc-950 bg-hue-rotate-90 h-6" data-test="zinc-950-90"></div>
      <div class="flex-1 bg-zinc-950 bg-hue-rotate-120 h-6" data-test="zinc-950-120"></div>
      <div class="flex-1 bg-zinc-950 bg-hue-rotate-150 h-6" data-test="zinc-950-150"></div>
      <div class="flex-1 bg-zinc-950 bg-hue-rotate-180 h-6" data-test="zinc-950-180"></div>
      <div class="flex-1 bg-zinc-950 bg-hue-rotate-210 h-6" data-test="zinc-950-210"></div>
      <div class="flex-1 bg-zinc-950 bg-hue-rotate-240 h-6" data-test="zinc-950-240"></div>
      <div class="flex-1 bg-zinc-950 bg-hue-rotate-270 h-6" data-test="zinc-950-270"></div>
      <div class="flex-1 bg-zinc-950 bg-hue-rotate-300 h-6" data-test="zinc-950-300"></div>
      <div class="flex-1 bg-zinc-950 bg-hue-rotate-330 h-6" data-test="zinc-950-330"></div>
    </div>
  </div>
</div>

### neutral

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-neutral-50 h-6" data-test="neutral-50-0"></div>
      <div class="flex-1 bg-neutral-50 bg-hue-rotate-30 h-6" data-test="neutral-50-30"></div>
      <div class="flex-1 bg-neutral-50 bg-hue-rotate-60 h-6" data-test="neutral-50-60"></div>
      <div class="flex-1 bg-neutral-50 bg-hue-rotate-90 h-6" data-test="neutral-50-90"></div>
      <div class="flex-1 bg-neutral-50 bg-hue-rotate-120 h-6" data-test="neutral-50-120"></div>
      <div class="flex-1 bg-neutral-50 bg-hue-rotate-150 h-6" data-test="neutral-50-150"></div>
      <div class="flex-1 bg-neutral-50 bg-hue-rotate-180 h-6" data-test="neutral-50-180"></div>
      <div class="flex-1 bg-neutral-50 bg-hue-rotate-210 h-6" data-test="neutral-50-210"></div>
      <div class="flex-1 bg-neutral-50 bg-hue-rotate-240 h-6" data-test="neutral-50-240"></div>
      <div class="flex-1 bg-neutral-50 bg-hue-rotate-270 h-6" data-test="neutral-50-270"></div>
      <div class="flex-1 bg-neutral-50 bg-hue-rotate-300 h-6" data-test="neutral-50-300"></div>
      <div class="flex-1 bg-neutral-50 bg-hue-rotate-330 h-6" data-test="neutral-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-neutral-100 h-6" data-test="neutral-100-0"></div>
      <div class="flex-1 bg-neutral-100 bg-hue-rotate-30 h-6" data-test="neutral-100-30"></div>
      <div class="flex-1 bg-neutral-100 bg-hue-rotate-60 h-6" data-test="neutral-100-60"></div>
      <div class="flex-1 bg-neutral-100 bg-hue-rotate-90 h-6" data-test="neutral-100-90"></div>
      <div class="flex-1 bg-neutral-100 bg-hue-rotate-120 h-6" data-test="neutral-100-120"></div>
      <div class="flex-1 bg-neutral-100 bg-hue-rotate-150 h-6" data-test="neutral-100-150"></div>
      <div class="flex-1 bg-neutral-100 bg-hue-rotate-180 h-6" data-test="neutral-100-180"></div>
      <div class="flex-1 bg-neutral-100 bg-hue-rotate-210 h-6" data-test="neutral-100-210"></div>
      <div class="flex-1 bg-neutral-100 bg-hue-rotate-240 h-6" data-test="neutral-100-240"></div>
      <div class="flex-1 bg-neutral-100 bg-hue-rotate-270 h-6" data-test="neutral-100-270"></div>
      <div class="flex-1 bg-neutral-100 bg-hue-rotate-300 h-6" data-test="neutral-100-300"></div>
      <div class="flex-1 bg-neutral-100 bg-hue-rotate-330 h-6" data-test="neutral-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-neutral-200 h-6" data-test="neutral-200-0"></div>
      <div class="flex-1 bg-neutral-200 bg-hue-rotate-30 h-6" data-test="neutral-200-30"></div>
      <div class="flex-1 bg-neutral-200 bg-hue-rotate-60 h-6" data-test="neutral-200-60"></div>
      <div class="flex-1 bg-neutral-200 bg-hue-rotate-90 h-6" data-test="neutral-200-90"></div>
      <div class="flex-1 bg-neutral-200 bg-hue-rotate-120 h-6" data-test="neutral-200-120"></div>
      <div class="flex-1 bg-neutral-200 bg-hue-rotate-150 h-6" data-test="neutral-200-150"></div>
      <div class="flex-1 bg-neutral-200 bg-hue-rotate-180 h-6" data-test="neutral-200-180"></div>
      <div class="flex-1 bg-neutral-200 bg-hue-rotate-210 h-6" data-test="neutral-200-210"></div>
      <div class="flex-1 bg-neutral-200 bg-hue-rotate-240 h-6" data-test="neutral-200-240"></div>
      <div class="flex-1 bg-neutral-200 bg-hue-rotate-270 h-6" data-test="neutral-200-270"></div>
      <div class="flex-1 bg-neutral-200 bg-hue-rotate-300 h-6" data-test="neutral-200-300"></div>
      <div class="flex-1 bg-neutral-200 bg-hue-rotate-330 h-6" data-test="neutral-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-neutral-300 h-6" data-test="neutral-300-0"></div>
      <div class="flex-1 bg-neutral-300 bg-hue-rotate-30 h-6" data-test="neutral-300-30"></div>
      <div class="flex-1 bg-neutral-300 bg-hue-rotate-60 h-6" data-test="neutral-300-60"></div>
      <div class="flex-1 bg-neutral-300 bg-hue-rotate-90 h-6" data-test="neutral-300-90"></div>
      <div class="flex-1 bg-neutral-300 bg-hue-rotate-120 h-6" data-test="neutral-300-120"></div>
      <div class="flex-1 bg-neutral-300 bg-hue-rotate-150 h-6" data-test="neutral-300-150"></div>
      <div class="flex-1 bg-neutral-300 bg-hue-rotate-180 h-6" data-test="neutral-300-180"></div>
      <div class="flex-1 bg-neutral-300 bg-hue-rotate-210 h-6" data-test="neutral-300-210"></div>
      <div class="flex-1 bg-neutral-300 bg-hue-rotate-240 h-6" data-test="neutral-300-240"></div>
      <div class="flex-1 bg-neutral-300 bg-hue-rotate-270 h-6" data-test="neutral-300-270"></div>
      <div class="flex-1 bg-neutral-300 bg-hue-rotate-300 h-6" data-test="neutral-300-300"></div>
      <div class="flex-1 bg-neutral-300 bg-hue-rotate-330 h-6" data-test="neutral-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-neutral-400 h-6" data-test="neutral-400-0"></div>
      <div class="flex-1 bg-neutral-400 bg-hue-rotate-30 h-6" data-test="neutral-400-30"></div>
      <div class="flex-1 bg-neutral-400 bg-hue-rotate-60 h-6" data-test="neutral-400-60"></div>
      <div class="flex-1 bg-neutral-400 bg-hue-rotate-90 h-6" data-test="neutral-400-90"></div>
      <div class="flex-1 bg-neutral-400 bg-hue-rotate-120 h-6" data-test="neutral-400-120"></div>
      <div class="flex-1 bg-neutral-400 bg-hue-rotate-150 h-6" data-test="neutral-400-150"></div>
      <div class="flex-1 bg-neutral-400 bg-hue-rotate-180 h-6" data-test="neutral-400-180"></div>
      <div class="flex-1 bg-neutral-400 bg-hue-rotate-210 h-6" data-test="neutral-400-210"></div>
      <div class="flex-1 bg-neutral-400 bg-hue-rotate-240 h-6" data-test="neutral-400-240"></div>
      <div class="flex-1 bg-neutral-400 bg-hue-rotate-270 h-6" data-test="neutral-400-270"></div>
      <div class="flex-1 bg-neutral-400 bg-hue-rotate-300 h-6" data-test="neutral-400-300"></div>
      <div class="flex-1 bg-neutral-400 bg-hue-rotate-330 h-6" data-test="neutral-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-neutral-500 h-6" data-test="neutral-500-0"></div>
      <div class="flex-1 bg-neutral-500 bg-hue-rotate-30 h-6" data-test="neutral-500-30"></div>
      <div class="flex-1 bg-neutral-500 bg-hue-rotate-60 h-6" data-test="neutral-500-60"></div>
      <div class="flex-1 bg-neutral-500 bg-hue-rotate-90 h-6" data-test="neutral-500-90"></div>
      <div class="flex-1 bg-neutral-500 bg-hue-rotate-120 h-6" data-test="neutral-500-120"></div>
      <div class="flex-1 bg-neutral-500 bg-hue-rotate-150 h-6" data-test="neutral-500-150"></div>
      <div class="flex-1 bg-neutral-500 bg-hue-rotate-180 h-6" data-test="neutral-500-180"></div>
      <div class="flex-1 bg-neutral-500 bg-hue-rotate-210 h-6" data-test="neutral-500-210"></div>
      <div class="flex-1 bg-neutral-500 bg-hue-rotate-240 h-6" data-test="neutral-500-240"></div>
      <div class="flex-1 bg-neutral-500 bg-hue-rotate-270 h-6" data-test="neutral-500-270"></div>
      <div class="flex-1 bg-neutral-500 bg-hue-rotate-300 h-6" data-test="neutral-500-300"></div>
      <div class="flex-1 bg-neutral-500 bg-hue-rotate-330 h-6" data-test="neutral-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-neutral-600 h-6" data-test="neutral-600-0"></div>
      <div class="flex-1 bg-neutral-600 bg-hue-rotate-30 h-6" data-test="neutral-600-30"></div>
      <div class="flex-1 bg-neutral-600 bg-hue-rotate-60 h-6" data-test="neutral-600-60"></div>
      <div class="flex-1 bg-neutral-600 bg-hue-rotate-90 h-6" data-test="neutral-600-90"></div>
      <div class="flex-1 bg-neutral-600 bg-hue-rotate-120 h-6" data-test="neutral-600-120"></div>
      <div class="flex-1 bg-neutral-600 bg-hue-rotate-150 h-6" data-test="neutral-600-150"></div>
      <div class="flex-1 bg-neutral-600 bg-hue-rotate-180 h-6" data-test="neutral-600-180"></div>
      <div class="flex-1 bg-neutral-600 bg-hue-rotate-210 h-6" data-test="neutral-600-210"></div>
      <div class="flex-1 bg-neutral-600 bg-hue-rotate-240 h-6" data-test="neutral-600-240"></div>
      <div class="flex-1 bg-neutral-600 bg-hue-rotate-270 h-6" data-test="neutral-600-270"></div>
      <div class="flex-1 bg-neutral-600 bg-hue-rotate-300 h-6" data-test="neutral-600-300"></div>
      <div class="flex-1 bg-neutral-600 bg-hue-rotate-330 h-6" data-test="neutral-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-neutral-700 h-6" data-test="neutral-700-0"></div>
      <div class="flex-1 bg-neutral-700 bg-hue-rotate-30 h-6" data-test="neutral-700-30"></div>
      <div class="flex-1 bg-neutral-700 bg-hue-rotate-60 h-6" data-test="neutral-700-60"></div>
      <div class="flex-1 bg-neutral-700 bg-hue-rotate-90 h-6" data-test="neutral-700-90"></div>
      <div class="flex-1 bg-neutral-700 bg-hue-rotate-120 h-6" data-test="neutral-700-120"></div>
      <div class="flex-1 bg-neutral-700 bg-hue-rotate-150 h-6" data-test="neutral-700-150"></div>
      <div class="flex-1 bg-neutral-700 bg-hue-rotate-180 h-6" data-test="neutral-700-180"></div>
      <div class="flex-1 bg-neutral-700 bg-hue-rotate-210 h-6" data-test="neutral-700-210"></div>
      <div class="flex-1 bg-neutral-700 bg-hue-rotate-240 h-6" data-test="neutral-700-240"></div>
      <div class="flex-1 bg-neutral-700 bg-hue-rotate-270 h-6" data-test="neutral-700-270"></div>
      <div class="flex-1 bg-neutral-700 bg-hue-rotate-300 h-6" data-test="neutral-700-300"></div>
      <div class="flex-1 bg-neutral-700 bg-hue-rotate-330 h-6" data-test="neutral-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-neutral-800 h-6" data-test="neutral-800-0"></div>
      <div class="flex-1 bg-neutral-800 bg-hue-rotate-30 h-6" data-test="neutral-800-30"></div>
      <div class="flex-1 bg-neutral-800 bg-hue-rotate-60 h-6" data-test="neutral-800-60"></div>
      <div class="flex-1 bg-neutral-800 bg-hue-rotate-90 h-6" data-test="neutral-800-90"></div>
      <div class="flex-1 bg-neutral-800 bg-hue-rotate-120 h-6" data-test="neutral-800-120"></div>
      <div class="flex-1 bg-neutral-800 bg-hue-rotate-150 h-6" data-test="neutral-800-150"></div>
      <div class="flex-1 bg-neutral-800 bg-hue-rotate-180 h-6" data-test="neutral-800-180"></div>
      <div class="flex-1 bg-neutral-800 bg-hue-rotate-210 h-6" data-test="neutral-800-210"></div>
      <div class="flex-1 bg-neutral-800 bg-hue-rotate-240 h-6" data-test="neutral-800-240"></div>
      <div class="flex-1 bg-neutral-800 bg-hue-rotate-270 h-6" data-test="neutral-800-270"></div>
      <div class="flex-1 bg-neutral-800 bg-hue-rotate-300 h-6" data-test="neutral-800-300"></div>
      <div class="flex-1 bg-neutral-800 bg-hue-rotate-330 h-6" data-test="neutral-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-neutral-900 h-6" data-test="neutral-900-0"></div>
      <div class="flex-1 bg-neutral-900 bg-hue-rotate-30 h-6" data-test="neutral-900-30"></div>
      <div class="flex-1 bg-neutral-900 bg-hue-rotate-60 h-6" data-test="neutral-900-60"></div>
      <div class="flex-1 bg-neutral-900 bg-hue-rotate-90 h-6" data-test="neutral-900-90"></div>
      <div class="flex-1 bg-neutral-900 bg-hue-rotate-120 h-6" data-test="neutral-900-120"></div>
      <div class="flex-1 bg-neutral-900 bg-hue-rotate-150 h-6" data-test="neutral-900-150"></div>
      <div class="flex-1 bg-neutral-900 bg-hue-rotate-180 h-6" data-test="neutral-900-180"></div>
      <div class="flex-1 bg-neutral-900 bg-hue-rotate-210 h-6" data-test="neutral-900-210"></div>
      <div class="flex-1 bg-neutral-900 bg-hue-rotate-240 h-6" data-test="neutral-900-240"></div>
      <div class="flex-1 bg-neutral-900 bg-hue-rotate-270 h-6" data-test="neutral-900-270"></div>
      <div class="flex-1 bg-neutral-900 bg-hue-rotate-300 h-6" data-test="neutral-900-300"></div>
      <div class="flex-1 bg-neutral-900 bg-hue-rotate-330 h-6" data-test="neutral-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-neutral-950 h-6" data-test="neutral-950-0"></div>
      <div class="flex-1 bg-neutral-950 bg-hue-rotate-30 h-6" data-test="neutral-950-30"></div>
      <div class="flex-1 bg-neutral-950 bg-hue-rotate-60 h-6" data-test="neutral-950-60"></div>
      <div class="flex-1 bg-neutral-950 bg-hue-rotate-90 h-6" data-test="neutral-950-90"></div>
      <div class="flex-1 bg-neutral-950 bg-hue-rotate-120 h-6" data-test="neutral-950-120"></div>
      <div class="flex-1 bg-neutral-950 bg-hue-rotate-150 h-6" data-test="neutral-950-150"></div>
      <div class="flex-1 bg-neutral-950 bg-hue-rotate-180 h-6" data-test="neutral-950-180"></div>
      <div class="flex-1 bg-neutral-950 bg-hue-rotate-210 h-6" data-test="neutral-950-210"></div>
      <div class="flex-1 bg-neutral-950 bg-hue-rotate-240 h-6" data-test="neutral-950-240"></div>
      <div class="flex-1 bg-neutral-950 bg-hue-rotate-270 h-6" data-test="neutral-950-270"></div>
      <div class="flex-1 bg-neutral-950 bg-hue-rotate-300 h-6" data-test="neutral-950-300"></div>
      <div class="flex-1 bg-neutral-950 bg-hue-rotate-330 h-6" data-test="neutral-950-330"></div>
    </div>
  </div>
</div>

### stone

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-stone-50 h-6" data-test="stone-50-0"></div>
      <div class="flex-1 bg-stone-50 bg-hue-rotate-30 h-6" data-test="stone-50-30"></div>
      <div class="flex-1 bg-stone-50 bg-hue-rotate-60 h-6" data-test="stone-50-60"></div>
      <div class="flex-1 bg-stone-50 bg-hue-rotate-90 h-6" data-test="stone-50-90"></div>
      <div class="flex-1 bg-stone-50 bg-hue-rotate-120 h-6" data-test="stone-50-120"></div>
      <div class="flex-1 bg-stone-50 bg-hue-rotate-150 h-6" data-test="stone-50-150"></div>
      <div class="flex-1 bg-stone-50 bg-hue-rotate-180 h-6" data-test="stone-50-180"></div>
      <div class="flex-1 bg-stone-50 bg-hue-rotate-210 h-6" data-test="stone-50-210"></div>
      <div class="flex-1 bg-stone-50 bg-hue-rotate-240 h-6" data-test="stone-50-240"></div>
      <div class="flex-1 bg-stone-50 bg-hue-rotate-270 h-6" data-test="stone-50-270"></div>
      <div class="flex-1 bg-stone-50 bg-hue-rotate-300 h-6" data-test="stone-50-300"></div>
      <div class="flex-1 bg-stone-50 bg-hue-rotate-330 h-6" data-test="stone-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-stone-100 h-6" data-test="stone-100-0"></div>
      <div class="flex-1 bg-stone-100 bg-hue-rotate-30 h-6" data-test="stone-100-30"></div>
      <div class="flex-1 bg-stone-100 bg-hue-rotate-60 h-6" data-test="stone-100-60"></div>
      <div class="flex-1 bg-stone-100 bg-hue-rotate-90 h-6" data-test="stone-100-90"></div>
      <div class="flex-1 bg-stone-100 bg-hue-rotate-120 h-6" data-test="stone-100-120"></div>
      <div class="flex-1 bg-stone-100 bg-hue-rotate-150 h-6" data-test="stone-100-150"></div>
      <div class="flex-1 bg-stone-100 bg-hue-rotate-180 h-6" data-test="stone-100-180"></div>
      <div class="flex-1 bg-stone-100 bg-hue-rotate-210 h-6" data-test="stone-100-210"></div>
      <div class="flex-1 bg-stone-100 bg-hue-rotate-240 h-6" data-test="stone-100-240"></div>
      <div class="flex-1 bg-stone-100 bg-hue-rotate-270 h-6" data-test="stone-100-270"></div>
      <div class="flex-1 bg-stone-100 bg-hue-rotate-300 h-6" data-test="stone-100-300"></div>
      <div class="flex-1 bg-stone-100 bg-hue-rotate-330 h-6" data-test="stone-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-stone-200 h-6" data-test="stone-200-0"></div>
      <div class="flex-1 bg-stone-200 bg-hue-rotate-30 h-6" data-test="stone-200-30"></div>
      <div class="flex-1 bg-stone-200 bg-hue-rotate-60 h-6" data-test="stone-200-60"></div>
      <div class="flex-1 bg-stone-200 bg-hue-rotate-90 h-6" data-test="stone-200-90"></div>
      <div class="flex-1 bg-stone-200 bg-hue-rotate-120 h-6" data-test="stone-200-120"></div>
      <div class="flex-1 bg-stone-200 bg-hue-rotate-150 h-6" data-test="stone-200-150"></div>
      <div class="flex-1 bg-stone-200 bg-hue-rotate-180 h-6" data-test="stone-200-180"></div>
      <div class="flex-1 bg-stone-200 bg-hue-rotate-210 h-6" data-test="stone-200-210"></div>
      <div class="flex-1 bg-stone-200 bg-hue-rotate-240 h-6" data-test="stone-200-240"></div>
      <div class="flex-1 bg-stone-200 bg-hue-rotate-270 h-6" data-test="stone-200-270"></div>
      <div class="flex-1 bg-stone-200 bg-hue-rotate-300 h-6" data-test="stone-200-300"></div>
      <div class="flex-1 bg-stone-200 bg-hue-rotate-330 h-6" data-test="stone-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-stone-300 h-6" data-test="stone-300-0"></div>
      <div class="flex-1 bg-stone-300 bg-hue-rotate-30 h-6" data-test="stone-300-30"></div>
      <div class="flex-1 bg-stone-300 bg-hue-rotate-60 h-6" data-test="stone-300-60"></div>
      <div class="flex-1 bg-stone-300 bg-hue-rotate-90 h-6" data-test="stone-300-90"></div>
      <div class="flex-1 bg-stone-300 bg-hue-rotate-120 h-6" data-test="stone-300-120"></div>
      <div class="flex-1 bg-stone-300 bg-hue-rotate-150 h-6" data-test="stone-300-150"></div>
      <div class="flex-1 bg-stone-300 bg-hue-rotate-180 h-6" data-test="stone-300-180"></div>
      <div class="flex-1 bg-stone-300 bg-hue-rotate-210 h-6" data-test="stone-300-210"></div>
      <div class="flex-1 bg-stone-300 bg-hue-rotate-240 h-6" data-test="stone-300-240"></div>
      <div class="flex-1 bg-stone-300 bg-hue-rotate-270 h-6" data-test="stone-300-270"></div>
      <div class="flex-1 bg-stone-300 bg-hue-rotate-300 h-6" data-test="stone-300-300"></div>
      <div class="flex-1 bg-stone-300 bg-hue-rotate-330 h-6" data-test="stone-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-stone-400 h-6" data-test="stone-400-0"></div>
      <div class="flex-1 bg-stone-400 bg-hue-rotate-30 h-6" data-test="stone-400-30"></div>
      <div class="flex-1 bg-stone-400 bg-hue-rotate-60 h-6" data-test="stone-400-60"></div>
      <div class="flex-1 bg-stone-400 bg-hue-rotate-90 h-6" data-test="stone-400-90"></div>
      <div class="flex-1 bg-stone-400 bg-hue-rotate-120 h-6" data-test="stone-400-120"></div>
      <div class="flex-1 bg-stone-400 bg-hue-rotate-150 h-6" data-test="stone-400-150"></div>
      <div class="flex-1 bg-stone-400 bg-hue-rotate-180 h-6" data-test="stone-400-180"></div>
      <div class="flex-1 bg-stone-400 bg-hue-rotate-210 h-6" data-test="stone-400-210"></div>
      <div class="flex-1 bg-stone-400 bg-hue-rotate-240 h-6" data-test="stone-400-240"></div>
      <div class="flex-1 bg-stone-400 bg-hue-rotate-270 h-6" data-test="stone-400-270"></div>
      <div class="flex-1 bg-stone-400 bg-hue-rotate-300 h-6" data-test="stone-400-300"></div>
      <div class="flex-1 bg-stone-400 bg-hue-rotate-330 h-6" data-test="stone-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-stone-500 h-6" data-test="stone-500-0"></div>
      <div class="flex-1 bg-stone-500 bg-hue-rotate-30 h-6" data-test="stone-500-30"></div>
      <div class="flex-1 bg-stone-500 bg-hue-rotate-60 h-6" data-test="stone-500-60"></div>
      <div class="flex-1 bg-stone-500 bg-hue-rotate-90 h-6" data-test="stone-500-90"></div>
      <div class="flex-1 bg-stone-500 bg-hue-rotate-120 h-6" data-test="stone-500-120"></div>
      <div class="flex-1 bg-stone-500 bg-hue-rotate-150 h-6" data-test="stone-500-150"></div>
      <div class="flex-1 bg-stone-500 bg-hue-rotate-180 h-6" data-test="stone-500-180"></div>
      <div class="flex-1 bg-stone-500 bg-hue-rotate-210 h-6" data-test="stone-500-210"></div>
      <div class="flex-1 bg-stone-500 bg-hue-rotate-240 h-6" data-test="stone-500-240"></div>
      <div class="flex-1 bg-stone-500 bg-hue-rotate-270 h-6" data-test="stone-500-270"></div>
      <div class="flex-1 bg-stone-500 bg-hue-rotate-300 h-6" data-test="stone-500-300"></div>
      <div class="flex-1 bg-stone-500 bg-hue-rotate-330 h-6" data-test="stone-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-stone-600 h-6" data-test="stone-600-0"></div>
      <div class="flex-1 bg-stone-600 bg-hue-rotate-30 h-6" data-test="stone-600-30"></div>
      <div class="flex-1 bg-stone-600 bg-hue-rotate-60 h-6" data-test="stone-600-60"></div>
      <div class="flex-1 bg-stone-600 bg-hue-rotate-90 h-6" data-test="stone-600-90"></div>
      <div class="flex-1 bg-stone-600 bg-hue-rotate-120 h-6" data-test="stone-600-120"></div>
      <div class="flex-1 bg-stone-600 bg-hue-rotate-150 h-6" data-test="stone-600-150"></div>
      <div class="flex-1 bg-stone-600 bg-hue-rotate-180 h-6" data-test="stone-600-180"></div>
      <div class="flex-1 bg-stone-600 bg-hue-rotate-210 h-6" data-test="stone-600-210"></div>
      <div class="flex-1 bg-stone-600 bg-hue-rotate-240 h-6" data-test="stone-600-240"></div>
      <div class="flex-1 bg-stone-600 bg-hue-rotate-270 h-6" data-test="stone-600-270"></div>
      <div class="flex-1 bg-stone-600 bg-hue-rotate-300 h-6" data-test="stone-600-300"></div>
      <div class="flex-1 bg-stone-600 bg-hue-rotate-330 h-6" data-test="stone-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-stone-700 h-6" data-test="stone-700-0"></div>
      <div class="flex-1 bg-stone-700 bg-hue-rotate-30 h-6" data-test="stone-700-30"></div>
      <div class="flex-1 bg-stone-700 bg-hue-rotate-60 h-6" data-test="stone-700-60"></div>
      <div class="flex-1 bg-stone-700 bg-hue-rotate-90 h-6" data-test="stone-700-90"></div>
      <div class="flex-1 bg-stone-700 bg-hue-rotate-120 h-6" data-test="stone-700-120"></div>
      <div class="flex-1 bg-stone-700 bg-hue-rotate-150 h-6" data-test="stone-700-150"></div>
      <div class="flex-1 bg-stone-700 bg-hue-rotate-180 h-6" data-test="stone-700-180"></div>
      <div class="flex-1 bg-stone-700 bg-hue-rotate-210 h-6" data-test="stone-700-210"></div>
      <div class="flex-1 bg-stone-700 bg-hue-rotate-240 h-6" data-test="stone-700-240"></div>
      <div class="flex-1 bg-stone-700 bg-hue-rotate-270 h-6" data-test="stone-700-270"></div>
      <div class="flex-1 bg-stone-700 bg-hue-rotate-300 h-6" data-test="stone-700-300"></div>
      <div class="flex-1 bg-stone-700 bg-hue-rotate-330 h-6" data-test="stone-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-stone-800 h-6" data-test="stone-800-0"></div>
      <div class="flex-1 bg-stone-800 bg-hue-rotate-30 h-6" data-test="stone-800-30"></div>
      <div class="flex-1 bg-stone-800 bg-hue-rotate-60 h-6" data-test="stone-800-60"></div>
      <div class="flex-1 bg-stone-800 bg-hue-rotate-90 h-6" data-test="stone-800-90"></div>
      <div class="flex-1 bg-stone-800 bg-hue-rotate-120 h-6" data-test="stone-800-120"></div>
      <div class="flex-1 bg-stone-800 bg-hue-rotate-150 h-6" data-test="stone-800-150"></div>
      <div class="flex-1 bg-stone-800 bg-hue-rotate-180 h-6" data-test="stone-800-180"></div>
      <div class="flex-1 bg-stone-800 bg-hue-rotate-210 h-6" data-test="stone-800-210"></div>
      <div class="flex-1 bg-stone-800 bg-hue-rotate-240 h-6" data-test="stone-800-240"></div>
      <div class="flex-1 bg-stone-800 bg-hue-rotate-270 h-6" data-test="stone-800-270"></div>
      <div class="flex-1 bg-stone-800 bg-hue-rotate-300 h-6" data-test="stone-800-300"></div>
      <div class="flex-1 bg-stone-800 bg-hue-rotate-330 h-6" data-test="stone-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-stone-900 h-6" data-test="stone-900-0"></div>
      <div class="flex-1 bg-stone-900 bg-hue-rotate-30 h-6" data-test="stone-900-30"></div>
      <div class="flex-1 bg-stone-900 bg-hue-rotate-60 h-6" data-test="stone-900-60"></div>
      <div class="flex-1 bg-stone-900 bg-hue-rotate-90 h-6" data-test="stone-900-90"></div>
      <div class="flex-1 bg-stone-900 bg-hue-rotate-120 h-6" data-test="stone-900-120"></div>
      <div class="flex-1 bg-stone-900 bg-hue-rotate-150 h-6" data-test="stone-900-150"></div>
      <div class="flex-1 bg-stone-900 bg-hue-rotate-180 h-6" data-test="stone-900-180"></div>
      <div class="flex-1 bg-stone-900 bg-hue-rotate-210 h-6" data-test="stone-900-210"></div>
      <div class="flex-1 bg-stone-900 bg-hue-rotate-240 h-6" data-test="stone-900-240"></div>
      <div class="flex-1 bg-stone-900 bg-hue-rotate-270 h-6" data-test="stone-900-270"></div>
      <div class="flex-1 bg-stone-900 bg-hue-rotate-300 h-6" data-test="stone-900-300"></div>
      <div class="flex-1 bg-stone-900 bg-hue-rotate-330 h-6" data-test="stone-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-stone-950 h-6" data-test="stone-950-0"></div>
      <div class="flex-1 bg-stone-950 bg-hue-rotate-30 h-6" data-test="stone-950-30"></div>
      <div class="flex-1 bg-stone-950 bg-hue-rotate-60 h-6" data-test="stone-950-60"></div>
      <div class="flex-1 bg-stone-950 bg-hue-rotate-90 h-6" data-test="stone-950-90"></div>
      <div class="flex-1 bg-stone-950 bg-hue-rotate-120 h-6" data-test="stone-950-120"></div>
      <div class="flex-1 bg-stone-950 bg-hue-rotate-150 h-6" data-test="stone-950-150"></div>
      <div class="flex-1 bg-stone-950 bg-hue-rotate-180 h-6" data-test="stone-950-180"></div>
      <div class="flex-1 bg-stone-950 bg-hue-rotate-210 h-6" data-test="stone-950-210"></div>
      <div class="flex-1 bg-stone-950 bg-hue-rotate-240 h-6" data-test="stone-950-240"></div>
      <div class="flex-1 bg-stone-950 bg-hue-rotate-270 h-6" data-test="stone-950-270"></div>
      <div class="flex-1 bg-stone-950 bg-hue-rotate-300 h-6" data-test="stone-950-300"></div>
      <div class="flex-1 bg-stone-950 bg-hue-rotate-330 h-6" data-test="stone-950-330"></div>
    </div>
  </div>
</div>

### red

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-red-50 h-6" data-test="red-50-0"></div>
      <div class="flex-1 bg-red-50 bg-hue-rotate-30 h-6" data-test="red-50-30"></div>
      <div class="flex-1 bg-red-50 bg-hue-rotate-60 h-6" data-test="red-50-60"></div>
      <div class="flex-1 bg-red-50 bg-hue-rotate-90 h-6" data-test="red-50-90"></div>
      <div class="flex-1 bg-red-50 bg-hue-rotate-120 h-6" data-test="red-50-120"></div>
      <div class="flex-1 bg-red-50 bg-hue-rotate-150 h-6" data-test="red-50-150"></div>
      <div class="flex-1 bg-red-50 bg-hue-rotate-180 h-6" data-test="red-50-180"></div>
      <div class="flex-1 bg-red-50 bg-hue-rotate-210 h-6" data-test="red-50-210"></div>
      <div class="flex-1 bg-red-50 bg-hue-rotate-240 h-6" data-test="red-50-240"></div>
      <div class="flex-1 bg-red-50 bg-hue-rotate-270 h-6" data-test="red-50-270"></div>
      <div class="flex-1 bg-red-50 bg-hue-rotate-300 h-6" data-test="red-50-300"></div>
      <div class="flex-1 bg-red-50 bg-hue-rotate-330 h-6" data-test="red-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-red-100 h-6" data-test="red-100-0"></div>
      <div class="flex-1 bg-red-100 bg-hue-rotate-30 h-6" data-test="red-100-30"></div>
      <div class="flex-1 bg-red-100 bg-hue-rotate-60 h-6" data-test="red-100-60"></div>
      <div class="flex-1 bg-red-100 bg-hue-rotate-90 h-6" data-test="red-100-90"></div>
      <div class="flex-1 bg-red-100 bg-hue-rotate-120 h-6" data-test="red-100-120"></div>
      <div class="flex-1 bg-red-100 bg-hue-rotate-150 h-6" data-test="red-100-150"></div>
      <div class="flex-1 bg-red-100 bg-hue-rotate-180 h-6" data-test="red-100-180"></div>
      <div class="flex-1 bg-red-100 bg-hue-rotate-210 h-6" data-test="red-100-210"></div>
      <div class="flex-1 bg-red-100 bg-hue-rotate-240 h-6" data-test="red-100-240"></div>
      <div class="flex-1 bg-red-100 bg-hue-rotate-270 h-6" data-test="red-100-270"></div>
      <div class="flex-1 bg-red-100 bg-hue-rotate-300 h-6" data-test="red-100-300"></div>
      <div class="flex-1 bg-red-100 bg-hue-rotate-330 h-6" data-test="red-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-red-200 h-6" data-test="red-200-0"></div>
      <div class="flex-1 bg-red-200 bg-hue-rotate-30 h-6" data-test="red-200-30"></div>
      <div class="flex-1 bg-red-200 bg-hue-rotate-60 h-6" data-test="red-200-60"></div>
      <div class="flex-1 bg-red-200 bg-hue-rotate-90 h-6" data-test="red-200-90"></div>
      <div class="flex-1 bg-red-200 bg-hue-rotate-120 h-6" data-test="red-200-120"></div>
      <div class="flex-1 bg-red-200 bg-hue-rotate-150 h-6" data-test="red-200-150"></div>
      <div class="flex-1 bg-red-200 bg-hue-rotate-180 h-6" data-test="red-200-180"></div>
      <div class="flex-1 bg-red-200 bg-hue-rotate-210 h-6" data-test="red-200-210"></div>
      <div class="flex-1 bg-red-200 bg-hue-rotate-240 h-6" data-test="red-200-240"></div>
      <div class="flex-1 bg-red-200 bg-hue-rotate-270 h-6" data-test="red-200-270"></div>
      <div class="flex-1 bg-red-200 bg-hue-rotate-300 h-6" data-test="red-200-300"></div>
      <div class="flex-1 bg-red-200 bg-hue-rotate-330 h-6" data-test="red-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-red-300 h-6" data-test="red-300-0"></div>
      <div class="flex-1 bg-red-300 bg-hue-rotate-30 h-6" data-test="red-300-30"></div>
      <div class="flex-1 bg-red-300 bg-hue-rotate-60 h-6" data-test="red-300-60"></div>
      <div class="flex-1 bg-red-300 bg-hue-rotate-90 h-6" data-test="red-300-90"></div>
      <div class="flex-1 bg-red-300 bg-hue-rotate-120 h-6" data-test="red-300-120"></div>
      <div class="flex-1 bg-red-300 bg-hue-rotate-150 h-6" data-test="red-300-150"></div>
      <div class="flex-1 bg-red-300 bg-hue-rotate-180 h-6" data-test="red-300-180"></div>
      <div class="flex-1 bg-red-300 bg-hue-rotate-210 h-6" data-test="red-300-210"></div>
      <div class="flex-1 bg-red-300 bg-hue-rotate-240 h-6" data-test="red-300-240"></div>
      <div class="flex-1 bg-red-300 bg-hue-rotate-270 h-6" data-test="red-300-270"></div>
      <div class="flex-1 bg-red-300 bg-hue-rotate-300 h-6" data-test="red-300-300"></div>
      <div class="flex-1 bg-red-300 bg-hue-rotate-330 h-6" data-test="red-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-red-400 h-6" data-test="red-400-0"></div>
      <div class="flex-1 bg-red-400 bg-hue-rotate-30 h-6" data-test="red-400-30"></div>
      <div class="flex-1 bg-red-400 bg-hue-rotate-60 h-6" data-test="red-400-60"></div>
      <div class="flex-1 bg-red-400 bg-hue-rotate-90 h-6" data-test="red-400-90"></div>
      <div class="flex-1 bg-red-400 bg-hue-rotate-120 h-6" data-test="red-400-120"></div>
      <div class="flex-1 bg-red-400 bg-hue-rotate-150 h-6" data-test="red-400-150"></div>
      <div class="flex-1 bg-red-400 bg-hue-rotate-180 h-6" data-test="red-400-180"></div>
      <div class="flex-1 bg-red-400 bg-hue-rotate-210 h-6" data-test="red-400-210"></div>
      <div class="flex-1 bg-red-400 bg-hue-rotate-240 h-6" data-test="red-400-240"></div>
      <div class="flex-1 bg-red-400 bg-hue-rotate-270 h-6" data-test="red-400-270"></div>
      <div class="flex-1 bg-red-400 bg-hue-rotate-300 h-6" data-test="red-400-300"></div>
      <div class="flex-1 bg-red-400 bg-hue-rotate-330 h-6" data-test="red-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-red-500 h-6" data-test="red-500-0"></div>
      <div class="flex-1 bg-red-500 bg-hue-rotate-30 h-6" data-test="red-500-30"></div>
      <div class="flex-1 bg-red-500 bg-hue-rotate-60 h-6" data-test="red-500-60"></div>
      <div class="flex-1 bg-red-500 bg-hue-rotate-90 h-6" data-test="red-500-90"></div>
      <div class="flex-1 bg-red-500 bg-hue-rotate-120 h-6" data-test="red-500-120"></div>
      <div class="flex-1 bg-red-500 bg-hue-rotate-150 h-6" data-test="red-500-150"></div>
      <div class="flex-1 bg-red-500 bg-hue-rotate-180 h-6" data-test="red-500-180"></div>
      <div class="flex-1 bg-red-500 bg-hue-rotate-210 h-6" data-test="red-500-210"></div>
      <div class="flex-1 bg-red-500 bg-hue-rotate-240 h-6" data-test="red-500-240"></div>
      <div class="flex-1 bg-red-500 bg-hue-rotate-270 h-6" data-test="red-500-270"></div>
      <div class="flex-1 bg-red-500 bg-hue-rotate-300 h-6" data-test="red-500-300"></div>
      <div class="flex-1 bg-red-500 bg-hue-rotate-330 h-6" data-test="red-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-red-600 h-6" data-test="red-600-0"></div>
      <div class="flex-1 bg-red-600 bg-hue-rotate-30 h-6" data-test="red-600-30"></div>
      <div class="flex-1 bg-red-600 bg-hue-rotate-60 h-6" data-test="red-600-60"></div>
      <div class="flex-1 bg-red-600 bg-hue-rotate-90 h-6" data-test="red-600-90"></div>
      <div class="flex-1 bg-red-600 bg-hue-rotate-120 h-6" data-test="red-600-120"></div>
      <div class="flex-1 bg-red-600 bg-hue-rotate-150 h-6" data-test="red-600-150"></div>
      <div class="flex-1 bg-red-600 bg-hue-rotate-180 h-6" data-test="red-600-180"></div>
      <div class="flex-1 bg-red-600 bg-hue-rotate-210 h-6" data-test="red-600-210"></div>
      <div class="flex-1 bg-red-600 bg-hue-rotate-240 h-6" data-test="red-600-240"></div>
      <div class="flex-1 bg-red-600 bg-hue-rotate-270 h-6" data-test="red-600-270"></div>
      <div class="flex-1 bg-red-600 bg-hue-rotate-300 h-6" data-test="red-600-300"></div>
      <div class="flex-1 bg-red-600 bg-hue-rotate-330 h-6" data-test="red-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-red-700 h-6" data-test="red-700-0"></div>
      <div class="flex-1 bg-red-700 bg-hue-rotate-30 h-6" data-test="red-700-30"></div>
      <div class="flex-1 bg-red-700 bg-hue-rotate-60 h-6" data-test="red-700-60"></div>
      <div class="flex-1 bg-red-700 bg-hue-rotate-90 h-6" data-test="red-700-90"></div>
      <div class="flex-1 bg-red-700 bg-hue-rotate-120 h-6" data-test="red-700-120"></div>
      <div class="flex-1 bg-red-700 bg-hue-rotate-150 h-6" data-test="red-700-150"></div>
      <div class="flex-1 bg-red-700 bg-hue-rotate-180 h-6" data-test="red-700-180"></div>
      <div class="flex-1 bg-red-700 bg-hue-rotate-210 h-6" data-test="red-700-210"></div>
      <div class="flex-1 bg-red-700 bg-hue-rotate-240 h-6" data-test="red-700-240"></div>
      <div class="flex-1 bg-red-700 bg-hue-rotate-270 h-6" data-test="red-700-270"></div>
      <div class="flex-1 bg-red-700 bg-hue-rotate-300 h-6" data-test="red-700-300"></div>
      <div class="flex-1 bg-red-700 bg-hue-rotate-330 h-6" data-test="red-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-red-800 h-6" data-test="red-800-0"></div>
      <div class="flex-1 bg-red-800 bg-hue-rotate-30 h-6" data-test="red-800-30"></div>
      <div class="flex-1 bg-red-800 bg-hue-rotate-60 h-6" data-test="red-800-60"></div>
      <div class="flex-1 bg-red-800 bg-hue-rotate-90 h-6" data-test="red-800-90"></div>
      <div class="flex-1 bg-red-800 bg-hue-rotate-120 h-6" data-test="red-800-120"></div>
      <div class="flex-1 bg-red-800 bg-hue-rotate-150 h-6" data-test="red-800-150"></div>
      <div class="flex-1 bg-red-800 bg-hue-rotate-180 h-6" data-test="red-800-180"></div>
      <div class="flex-1 bg-red-800 bg-hue-rotate-210 h-6" data-test="red-800-210"></div>
      <div class="flex-1 bg-red-800 bg-hue-rotate-240 h-6" data-test="red-800-240"></div>
      <div class="flex-1 bg-red-800 bg-hue-rotate-270 h-6" data-test="red-800-270"></div>
      <div class="flex-1 bg-red-800 bg-hue-rotate-300 h-6" data-test="red-800-300"></div>
      <div class="flex-1 bg-red-800 bg-hue-rotate-330 h-6" data-test="red-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-red-900 h-6" data-test="red-900-0"></div>
      <div class="flex-1 bg-red-900 bg-hue-rotate-30 h-6" data-test="red-900-30"></div>
      <div class="flex-1 bg-red-900 bg-hue-rotate-60 h-6" data-test="red-900-60"></div>
      <div class="flex-1 bg-red-900 bg-hue-rotate-90 h-6" data-test="red-900-90"></div>
      <div class="flex-1 bg-red-900 bg-hue-rotate-120 h-6" data-test="red-900-120"></div>
      <div class="flex-1 bg-red-900 bg-hue-rotate-150 h-6" data-test="red-900-150"></div>
      <div class="flex-1 bg-red-900 bg-hue-rotate-180 h-6" data-test="red-900-180"></div>
      <div class="flex-1 bg-red-900 bg-hue-rotate-210 h-6" data-test="red-900-210"></div>
      <div class="flex-1 bg-red-900 bg-hue-rotate-240 h-6" data-test="red-900-240"></div>
      <div class="flex-1 bg-red-900 bg-hue-rotate-270 h-6" data-test="red-900-270"></div>
      <div class="flex-1 bg-red-900 bg-hue-rotate-300 h-6" data-test="red-900-300"></div>
      <div class="flex-1 bg-red-900 bg-hue-rotate-330 h-6" data-test="red-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-red-950 h-6" data-test="red-950-0"></div>
      <div class="flex-1 bg-red-950 bg-hue-rotate-30 h-6" data-test="red-950-30"></div>
      <div class="flex-1 bg-red-950 bg-hue-rotate-60 h-6" data-test="red-950-60"></div>
      <div class="flex-1 bg-red-950 bg-hue-rotate-90 h-6" data-test="red-950-90"></div>
      <div class="flex-1 bg-red-950 bg-hue-rotate-120 h-6" data-test="red-950-120"></div>
      <div class="flex-1 bg-red-950 bg-hue-rotate-150 h-6" data-test="red-950-150"></div>
      <div class="flex-1 bg-red-950 bg-hue-rotate-180 h-6" data-test="red-950-180"></div>
      <div class="flex-1 bg-red-950 bg-hue-rotate-210 h-6" data-test="red-950-210"></div>
      <div class="flex-1 bg-red-950 bg-hue-rotate-240 h-6" data-test="red-950-240"></div>
      <div class="flex-1 bg-red-950 bg-hue-rotate-270 h-6" data-test="red-950-270"></div>
      <div class="flex-1 bg-red-950 bg-hue-rotate-300 h-6" data-test="red-950-300"></div>
      <div class="flex-1 bg-red-950 bg-hue-rotate-330 h-6" data-test="red-950-330"></div>
    </div>
  </div>
</div>

### orange

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-orange-50 h-6" data-test="orange-50-0"></div>
      <div class="flex-1 bg-orange-50 bg-hue-rotate-30 h-6" data-test="orange-50-30"></div>
      <div class="flex-1 bg-orange-50 bg-hue-rotate-60 h-6" data-test="orange-50-60"></div>
      <div class="flex-1 bg-orange-50 bg-hue-rotate-90 h-6" data-test="orange-50-90"></div>
      <div class="flex-1 bg-orange-50 bg-hue-rotate-120 h-6" data-test="orange-50-120"></div>
      <div class="flex-1 bg-orange-50 bg-hue-rotate-150 h-6" data-test="orange-50-150"></div>
      <div class="flex-1 bg-orange-50 bg-hue-rotate-180 h-6" data-test="orange-50-180"></div>
      <div class="flex-1 bg-orange-50 bg-hue-rotate-210 h-6" data-test="orange-50-210"></div>
      <div class="flex-1 bg-orange-50 bg-hue-rotate-240 h-6" data-test="orange-50-240"></div>
      <div class="flex-1 bg-orange-50 bg-hue-rotate-270 h-6" data-test="orange-50-270"></div>
      <div class="flex-1 bg-orange-50 bg-hue-rotate-300 h-6" data-test="orange-50-300"></div>
      <div class="flex-1 bg-orange-50 bg-hue-rotate-330 h-6" data-test="orange-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-orange-100 h-6" data-test="orange-100-0"></div>
      <div class="flex-1 bg-orange-100 bg-hue-rotate-30 h-6" data-test="orange-100-30"></div>
      <div class="flex-1 bg-orange-100 bg-hue-rotate-60 h-6" data-test="orange-100-60"></div>
      <div class="flex-1 bg-orange-100 bg-hue-rotate-90 h-6" data-test="orange-100-90"></div>
      <div class="flex-1 bg-orange-100 bg-hue-rotate-120 h-6" data-test="orange-100-120"></div>
      <div class="flex-1 bg-orange-100 bg-hue-rotate-150 h-6" data-test="orange-100-150"></div>
      <div class="flex-1 bg-orange-100 bg-hue-rotate-180 h-6" data-test="orange-100-180"></div>
      <div class="flex-1 bg-orange-100 bg-hue-rotate-210 h-6" data-test="orange-100-210"></div>
      <div class="flex-1 bg-orange-100 bg-hue-rotate-240 h-6" data-test="orange-100-240"></div>
      <div class="flex-1 bg-orange-100 bg-hue-rotate-270 h-6" data-test="orange-100-270"></div>
      <div class="flex-1 bg-orange-100 bg-hue-rotate-300 h-6" data-test="orange-100-300"></div>
      <div class="flex-1 bg-orange-100 bg-hue-rotate-330 h-6" data-test="orange-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-orange-200 h-6" data-test="orange-200-0"></div>
      <div class="flex-1 bg-orange-200 bg-hue-rotate-30 h-6" data-test="orange-200-30"></div>
      <div class="flex-1 bg-orange-200 bg-hue-rotate-60 h-6" data-test="orange-200-60"></div>
      <div class="flex-1 bg-orange-200 bg-hue-rotate-90 h-6" data-test="orange-200-90"></div>
      <div class="flex-1 bg-orange-200 bg-hue-rotate-120 h-6" data-test="orange-200-120"></div>
      <div class="flex-1 bg-orange-200 bg-hue-rotate-150 h-6" data-test="orange-200-150"></div>
      <div class="flex-1 bg-orange-200 bg-hue-rotate-180 h-6" data-test="orange-200-180"></div>
      <div class="flex-1 bg-orange-200 bg-hue-rotate-210 h-6" data-test="orange-200-210"></div>
      <div class="flex-1 bg-orange-200 bg-hue-rotate-240 h-6" data-test="orange-200-240"></div>
      <div class="flex-1 bg-orange-200 bg-hue-rotate-270 h-6" data-test="orange-200-270"></div>
      <div class="flex-1 bg-orange-200 bg-hue-rotate-300 h-6" data-test="orange-200-300"></div>
      <div class="flex-1 bg-orange-200 bg-hue-rotate-330 h-6" data-test="orange-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-orange-300 h-6" data-test="orange-300-0"></div>
      <div class="flex-1 bg-orange-300 bg-hue-rotate-30 h-6" data-test="orange-300-30"></div>
      <div class="flex-1 bg-orange-300 bg-hue-rotate-60 h-6" data-test="orange-300-60"></div>
      <div class="flex-1 bg-orange-300 bg-hue-rotate-90 h-6" data-test="orange-300-90"></div>
      <div class="flex-1 bg-orange-300 bg-hue-rotate-120 h-6" data-test="orange-300-120"></div>
      <div class="flex-1 bg-orange-300 bg-hue-rotate-150 h-6" data-test="orange-300-150"></div>
      <div class="flex-1 bg-orange-300 bg-hue-rotate-180 h-6" data-test="orange-300-180"></div>
      <div class="flex-1 bg-orange-300 bg-hue-rotate-210 h-6" data-test="orange-300-210"></div>
      <div class="flex-1 bg-orange-300 bg-hue-rotate-240 h-6" data-test="orange-300-240"></div>
      <div class="flex-1 bg-orange-300 bg-hue-rotate-270 h-6" data-test="orange-300-270"></div>
      <div class="flex-1 bg-orange-300 bg-hue-rotate-300 h-6" data-test="orange-300-300"></div>
      <div class="flex-1 bg-orange-300 bg-hue-rotate-330 h-6" data-test="orange-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-orange-400 h-6" data-test="orange-400-0"></div>
      <div class="flex-1 bg-orange-400 bg-hue-rotate-30 h-6" data-test="orange-400-30"></div>
      <div class="flex-1 bg-orange-400 bg-hue-rotate-60 h-6" data-test="orange-400-60"></div>
      <div class="flex-1 bg-orange-400 bg-hue-rotate-90 h-6" data-test="orange-400-90"></div>
      <div class="flex-1 bg-orange-400 bg-hue-rotate-120 h-6" data-test="orange-400-120"></div>
      <div class="flex-1 bg-orange-400 bg-hue-rotate-150 h-6" data-test="orange-400-150"></div>
      <div class="flex-1 bg-orange-400 bg-hue-rotate-180 h-6" data-test="orange-400-180"></div>
      <div class="flex-1 bg-orange-400 bg-hue-rotate-210 h-6" data-test="orange-400-210"></div>
      <div class="flex-1 bg-orange-400 bg-hue-rotate-240 h-6" data-test="orange-400-240"></div>
      <div class="flex-1 bg-orange-400 bg-hue-rotate-270 h-6" data-test="orange-400-270"></div>
      <div class="flex-1 bg-orange-400 bg-hue-rotate-300 h-6" data-test="orange-400-300"></div>
      <div class="flex-1 bg-orange-400 bg-hue-rotate-330 h-6" data-test="orange-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-orange-500 h-6" data-test="orange-500-0"></div>
      <div class="flex-1 bg-orange-500 bg-hue-rotate-30 h-6" data-test="orange-500-30"></div>
      <div class="flex-1 bg-orange-500 bg-hue-rotate-60 h-6" data-test="orange-500-60"></div>
      <div class="flex-1 bg-orange-500 bg-hue-rotate-90 h-6" data-test="orange-500-90"></div>
      <div class="flex-1 bg-orange-500 bg-hue-rotate-120 h-6" data-test="orange-500-120"></div>
      <div class="flex-1 bg-orange-500 bg-hue-rotate-150 h-6" data-test="orange-500-150"></div>
      <div class="flex-1 bg-orange-500 bg-hue-rotate-180 h-6" data-test="orange-500-180"></div>
      <div class="flex-1 bg-orange-500 bg-hue-rotate-210 h-6" data-test="orange-500-210"></div>
      <div class="flex-1 bg-orange-500 bg-hue-rotate-240 h-6" data-test="orange-500-240"></div>
      <div class="flex-1 bg-orange-500 bg-hue-rotate-270 h-6" data-test="orange-500-270"></div>
      <div class="flex-1 bg-orange-500 bg-hue-rotate-300 h-6" data-test="orange-500-300"></div>
      <div class="flex-1 bg-orange-500 bg-hue-rotate-330 h-6" data-test="orange-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-orange-600 h-6" data-test="orange-600-0"></div>
      <div class="flex-1 bg-orange-600 bg-hue-rotate-30 h-6" data-test="orange-600-30"></div>
      <div class="flex-1 bg-orange-600 bg-hue-rotate-60 h-6" data-test="orange-600-60"></div>
      <div class="flex-1 bg-orange-600 bg-hue-rotate-90 h-6" data-test="orange-600-90"></div>
      <div class="flex-1 bg-orange-600 bg-hue-rotate-120 h-6" data-test="orange-600-120"></div>
      <div class="flex-1 bg-orange-600 bg-hue-rotate-150 h-6" data-test="orange-600-150"></div>
      <div class="flex-1 bg-orange-600 bg-hue-rotate-180 h-6" data-test="orange-600-180"></div>
      <div class="flex-1 bg-orange-600 bg-hue-rotate-210 h-6" data-test="orange-600-210"></div>
      <div class="flex-1 bg-orange-600 bg-hue-rotate-240 h-6" data-test="orange-600-240"></div>
      <div class="flex-1 bg-orange-600 bg-hue-rotate-270 h-6" data-test="orange-600-270"></div>
      <div class="flex-1 bg-orange-600 bg-hue-rotate-300 h-6" data-test="orange-600-300"></div>
      <div class="flex-1 bg-orange-600 bg-hue-rotate-330 h-6" data-test="orange-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-orange-700 h-6" data-test="orange-700-0"></div>
      <div class="flex-1 bg-orange-700 bg-hue-rotate-30 h-6" data-test="orange-700-30"></div>
      <div class="flex-1 bg-orange-700 bg-hue-rotate-60 h-6" data-test="orange-700-60"></div>
      <div class="flex-1 bg-orange-700 bg-hue-rotate-90 h-6" data-test="orange-700-90"></div>
      <div class="flex-1 bg-orange-700 bg-hue-rotate-120 h-6" data-test="orange-700-120"></div>
      <div class="flex-1 bg-orange-700 bg-hue-rotate-150 h-6" data-test="orange-700-150"></div>
      <div class="flex-1 bg-orange-700 bg-hue-rotate-180 h-6" data-test="orange-700-180"></div>
      <div class="flex-1 bg-orange-700 bg-hue-rotate-210 h-6" data-test="orange-700-210"></div>
      <div class="flex-1 bg-orange-700 bg-hue-rotate-240 h-6" data-test="orange-700-240"></div>
      <div class="flex-1 bg-orange-700 bg-hue-rotate-270 h-6" data-test="orange-700-270"></div>
      <div class="flex-1 bg-orange-700 bg-hue-rotate-300 h-6" data-test="orange-700-300"></div>
      <div class="flex-1 bg-orange-700 bg-hue-rotate-330 h-6" data-test="orange-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-orange-800 h-6" data-test="orange-800-0"></div>
      <div class="flex-1 bg-orange-800 bg-hue-rotate-30 h-6" data-test="orange-800-30"></div>
      <div class="flex-1 bg-orange-800 bg-hue-rotate-60 h-6" data-test="orange-800-60"></div>
      <div class="flex-1 bg-orange-800 bg-hue-rotate-90 h-6" data-test="orange-800-90"></div>
      <div class="flex-1 bg-orange-800 bg-hue-rotate-120 h-6" data-test="orange-800-120"></div>
      <div class="flex-1 bg-orange-800 bg-hue-rotate-150 h-6" data-test="orange-800-150"></div>
      <div class="flex-1 bg-orange-800 bg-hue-rotate-180 h-6" data-test="orange-800-180"></div>
      <div class="flex-1 bg-orange-800 bg-hue-rotate-210 h-6" data-test="orange-800-210"></div>
      <div class="flex-1 bg-orange-800 bg-hue-rotate-240 h-6" data-test="orange-800-240"></div>
      <div class="flex-1 bg-orange-800 bg-hue-rotate-270 h-6" data-test="orange-800-270"></div>
      <div class="flex-1 bg-orange-800 bg-hue-rotate-300 h-6" data-test="orange-800-300"></div>
      <div class="flex-1 bg-orange-800 bg-hue-rotate-330 h-6" data-test="orange-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-orange-900 h-6" data-test="orange-900-0"></div>
      <div class="flex-1 bg-orange-900 bg-hue-rotate-30 h-6" data-test="orange-900-30"></div>
      <div class="flex-1 bg-orange-900 bg-hue-rotate-60 h-6" data-test="orange-900-60"></div>
      <div class="flex-1 bg-orange-900 bg-hue-rotate-90 h-6" data-test="orange-900-90"></div>
      <div class="flex-1 bg-orange-900 bg-hue-rotate-120 h-6" data-test="orange-900-120"></div>
      <div class="flex-1 bg-orange-900 bg-hue-rotate-150 h-6" data-test="orange-900-150"></div>
      <div class="flex-1 bg-orange-900 bg-hue-rotate-180 h-6" data-test="orange-900-180"></div>
      <div class="flex-1 bg-orange-900 bg-hue-rotate-210 h-6" data-test="orange-900-210"></div>
      <div class="flex-1 bg-orange-900 bg-hue-rotate-240 h-6" data-test="orange-900-240"></div>
      <div class="flex-1 bg-orange-900 bg-hue-rotate-270 h-6" data-test="orange-900-270"></div>
      <div class="flex-1 bg-orange-900 bg-hue-rotate-300 h-6" data-test="orange-900-300"></div>
      <div class="flex-1 bg-orange-900 bg-hue-rotate-330 h-6" data-test="orange-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-orange-950 h-6" data-test="orange-950-0"></div>
      <div class="flex-1 bg-orange-950 bg-hue-rotate-30 h-6" data-test="orange-950-30"></div>
      <div class="flex-1 bg-orange-950 bg-hue-rotate-60 h-6" data-test="orange-950-60"></div>
      <div class="flex-1 bg-orange-950 bg-hue-rotate-90 h-6" data-test="orange-950-90"></div>
      <div class="flex-1 bg-orange-950 bg-hue-rotate-120 h-6" data-test="orange-950-120"></div>
      <div class="flex-1 bg-orange-950 bg-hue-rotate-150 h-6" data-test="orange-950-150"></div>
      <div class="flex-1 bg-orange-950 bg-hue-rotate-180 h-6" data-test="orange-950-180"></div>
      <div class="flex-1 bg-orange-950 bg-hue-rotate-210 h-6" data-test="orange-950-210"></div>
      <div class="flex-1 bg-orange-950 bg-hue-rotate-240 h-6" data-test="orange-950-240"></div>
      <div class="flex-1 bg-orange-950 bg-hue-rotate-270 h-6" data-test="orange-950-270"></div>
      <div class="flex-1 bg-orange-950 bg-hue-rotate-300 h-6" data-test="orange-950-300"></div>
      <div class="flex-1 bg-orange-950 bg-hue-rotate-330 h-6" data-test="orange-950-330"></div>
    </div>
  </div>
</div>

### amber

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-amber-50 h-6" data-test="amber-50-0"></div>
      <div class="flex-1 bg-amber-50 bg-hue-rotate-30 h-6" data-test="amber-50-30"></div>
      <div class="flex-1 bg-amber-50 bg-hue-rotate-60 h-6" data-test="amber-50-60"></div>
      <div class="flex-1 bg-amber-50 bg-hue-rotate-90 h-6" data-test="amber-50-90"></div>
      <div class="flex-1 bg-amber-50 bg-hue-rotate-120 h-6" data-test="amber-50-120"></div>
      <div class="flex-1 bg-amber-50 bg-hue-rotate-150 h-6" data-test="amber-50-150"></div>
      <div class="flex-1 bg-amber-50 bg-hue-rotate-180 h-6" data-test="amber-50-180"></div>
      <div class="flex-1 bg-amber-50 bg-hue-rotate-210 h-6" data-test="amber-50-210"></div>
      <div class="flex-1 bg-amber-50 bg-hue-rotate-240 h-6" data-test="amber-50-240"></div>
      <div class="flex-1 bg-amber-50 bg-hue-rotate-270 h-6" data-test="amber-50-270"></div>
      <div class="flex-1 bg-amber-50 bg-hue-rotate-300 h-6" data-test="amber-50-300"></div>
      <div class="flex-1 bg-amber-50 bg-hue-rotate-330 h-6" data-test="amber-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-amber-100 h-6" data-test="amber-100-0"></div>
      <div class="flex-1 bg-amber-100 bg-hue-rotate-30 h-6" data-test="amber-100-30"></div>
      <div class="flex-1 bg-amber-100 bg-hue-rotate-60 h-6" data-test="amber-100-60"></div>
      <div class="flex-1 bg-amber-100 bg-hue-rotate-90 h-6" data-test="amber-100-90"></div>
      <div class="flex-1 bg-amber-100 bg-hue-rotate-120 h-6" data-test="amber-100-120"></div>
      <div class="flex-1 bg-amber-100 bg-hue-rotate-150 h-6" data-test="amber-100-150"></div>
      <div class="flex-1 bg-amber-100 bg-hue-rotate-180 h-6" data-test="amber-100-180"></div>
      <div class="flex-1 bg-amber-100 bg-hue-rotate-210 h-6" data-test="amber-100-210"></div>
      <div class="flex-1 bg-amber-100 bg-hue-rotate-240 h-6" data-test="amber-100-240"></div>
      <div class="flex-1 bg-amber-100 bg-hue-rotate-270 h-6" data-test="amber-100-270"></div>
      <div class="flex-1 bg-amber-100 bg-hue-rotate-300 h-6" data-test="amber-100-300"></div>
      <div class="flex-1 bg-amber-100 bg-hue-rotate-330 h-6" data-test="amber-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-amber-200 h-6" data-test="amber-200-0"></div>
      <div class="flex-1 bg-amber-200 bg-hue-rotate-30 h-6" data-test="amber-200-30"></div>
      <div class="flex-1 bg-amber-200 bg-hue-rotate-60 h-6" data-test="amber-200-60"></div>
      <div class="flex-1 bg-amber-200 bg-hue-rotate-90 h-6" data-test="amber-200-90"></div>
      <div class="flex-1 bg-amber-200 bg-hue-rotate-120 h-6" data-test="amber-200-120"></div>
      <div class="flex-1 bg-amber-200 bg-hue-rotate-150 h-6" data-test="amber-200-150"></div>
      <div class="flex-1 bg-amber-200 bg-hue-rotate-180 h-6" data-test="amber-200-180"></div>
      <div class="flex-1 bg-amber-200 bg-hue-rotate-210 h-6" data-test="amber-200-210"></div>
      <div class="flex-1 bg-amber-200 bg-hue-rotate-240 h-6" data-test="amber-200-240"></div>
      <div class="flex-1 bg-amber-200 bg-hue-rotate-270 h-6" data-test="amber-200-270"></div>
      <div class="flex-1 bg-amber-200 bg-hue-rotate-300 h-6" data-test="amber-200-300"></div>
      <div class="flex-1 bg-amber-200 bg-hue-rotate-330 h-6" data-test="amber-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-amber-300 h-6" data-test="amber-300-0"></div>
      <div class="flex-1 bg-amber-300 bg-hue-rotate-30 h-6" data-test="amber-300-30"></div>
      <div class="flex-1 bg-amber-300 bg-hue-rotate-60 h-6" data-test="amber-300-60"></div>
      <div class="flex-1 bg-amber-300 bg-hue-rotate-90 h-6" data-test="amber-300-90"></div>
      <div class="flex-1 bg-amber-300 bg-hue-rotate-120 h-6" data-test="amber-300-120"></div>
      <div class="flex-1 bg-amber-300 bg-hue-rotate-150 h-6" data-test="amber-300-150"></div>
      <div class="flex-1 bg-amber-300 bg-hue-rotate-180 h-6" data-test="amber-300-180"></div>
      <div class="flex-1 bg-amber-300 bg-hue-rotate-210 h-6" data-test="amber-300-210"></div>
      <div class="flex-1 bg-amber-300 bg-hue-rotate-240 h-6" data-test="amber-300-240"></div>
      <div class="flex-1 bg-amber-300 bg-hue-rotate-270 h-6" data-test="amber-300-270"></div>
      <div class="flex-1 bg-amber-300 bg-hue-rotate-300 h-6" data-test="amber-300-300"></div>
      <div class="flex-1 bg-amber-300 bg-hue-rotate-330 h-6" data-test="amber-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-amber-400 h-6" data-test="amber-400-0"></div>
      <div class="flex-1 bg-amber-400 bg-hue-rotate-30 h-6" data-test="amber-400-30"></div>
      <div class="flex-1 bg-amber-400 bg-hue-rotate-60 h-6" data-test="amber-400-60"></div>
      <div class="flex-1 bg-amber-400 bg-hue-rotate-90 h-6" data-test="amber-400-90"></div>
      <div class="flex-1 bg-amber-400 bg-hue-rotate-120 h-6" data-test="amber-400-120"></div>
      <div class="flex-1 bg-amber-400 bg-hue-rotate-150 h-6" data-test="amber-400-150"></div>
      <div class="flex-1 bg-amber-400 bg-hue-rotate-180 h-6" data-test="amber-400-180"></div>
      <div class="flex-1 bg-amber-400 bg-hue-rotate-210 h-6" data-test="amber-400-210"></div>
      <div class="flex-1 bg-amber-400 bg-hue-rotate-240 h-6" data-test="amber-400-240"></div>
      <div class="flex-1 bg-amber-400 bg-hue-rotate-270 h-6" data-test="amber-400-270"></div>
      <div class="flex-1 bg-amber-400 bg-hue-rotate-300 h-6" data-test="amber-400-300"></div>
      <div class="flex-1 bg-amber-400 bg-hue-rotate-330 h-6" data-test="amber-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-amber-500 h-6" data-test="amber-500-0"></div>
      <div class="flex-1 bg-amber-500 bg-hue-rotate-30 h-6" data-test="amber-500-30"></div>
      <div class="flex-1 bg-amber-500 bg-hue-rotate-60 h-6" data-test="amber-500-60"></div>
      <div class="flex-1 bg-amber-500 bg-hue-rotate-90 h-6" data-test="amber-500-90"></div>
      <div class="flex-1 bg-amber-500 bg-hue-rotate-120 h-6" data-test="amber-500-120"></div>
      <div class="flex-1 bg-amber-500 bg-hue-rotate-150 h-6" data-test="amber-500-150"></div>
      <div class="flex-1 bg-amber-500 bg-hue-rotate-180 h-6" data-test="amber-500-180"></div>
      <div class="flex-1 bg-amber-500 bg-hue-rotate-210 h-6" data-test="amber-500-210"></div>
      <div class="flex-1 bg-amber-500 bg-hue-rotate-240 h-6" data-test="amber-500-240"></div>
      <div class="flex-1 bg-amber-500 bg-hue-rotate-270 h-6" data-test="amber-500-270"></div>
      <div class="flex-1 bg-amber-500 bg-hue-rotate-300 h-6" data-test="amber-500-300"></div>
      <div class="flex-1 bg-amber-500 bg-hue-rotate-330 h-6" data-test="amber-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-amber-600 h-6" data-test="amber-600-0"></div>
      <div class="flex-1 bg-amber-600 bg-hue-rotate-30 h-6" data-test="amber-600-30"></div>
      <div class="flex-1 bg-amber-600 bg-hue-rotate-60 h-6" data-test="amber-600-60"></div>
      <div class="flex-1 bg-amber-600 bg-hue-rotate-90 h-6" data-test="amber-600-90"></div>
      <div class="flex-1 bg-amber-600 bg-hue-rotate-120 h-6" data-test="amber-600-120"></div>
      <div class="flex-1 bg-amber-600 bg-hue-rotate-150 h-6" data-test="amber-600-150"></div>
      <div class="flex-1 bg-amber-600 bg-hue-rotate-180 h-6" data-test="amber-600-180"></div>
      <div class="flex-1 bg-amber-600 bg-hue-rotate-210 h-6" data-test="amber-600-210"></div>
      <div class="flex-1 bg-amber-600 bg-hue-rotate-240 h-6" data-test="amber-600-240"></div>
      <div class="flex-1 bg-amber-600 bg-hue-rotate-270 h-6" data-test="amber-600-270"></div>
      <div class="flex-1 bg-amber-600 bg-hue-rotate-300 h-6" data-test="amber-600-300"></div>
      <div class="flex-1 bg-amber-600 bg-hue-rotate-330 h-6" data-test="amber-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-amber-700 h-6" data-test="amber-700-0"></div>
      <div class="flex-1 bg-amber-700 bg-hue-rotate-30 h-6" data-test="amber-700-30"></div>
      <div class="flex-1 bg-amber-700 bg-hue-rotate-60 h-6" data-test="amber-700-60"></div>
      <div class="flex-1 bg-amber-700 bg-hue-rotate-90 h-6" data-test="amber-700-90"></div>
      <div class="flex-1 bg-amber-700 bg-hue-rotate-120 h-6" data-test="amber-700-120"></div>
      <div class="flex-1 bg-amber-700 bg-hue-rotate-150 h-6" data-test="amber-700-150"></div>
      <div class="flex-1 bg-amber-700 bg-hue-rotate-180 h-6" data-test="amber-700-180"></div>
      <div class="flex-1 bg-amber-700 bg-hue-rotate-210 h-6" data-test="amber-700-210"></div>
      <div class="flex-1 bg-amber-700 bg-hue-rotate-240 h-6" data-test="amber-700-240"></div>
      <div class="flex-1 bg-amber-700 bg-hue-rotate-270 h-6" data-test="amber-700-270"></div>
      <div class="flex-1 bg-amber-700 bg-hue-rotate-300 h-6" data-test="amber-700-300"></div>
      <div class="flex-1 bg-amber-700 bg-hue-rotate-330 h-6" data-test="amber-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-amber-800 h-6" data-test="amber-800-0"></div>
      <div class="flex-1 bg-amber-800 bg-hue-rotate-30 h-6" data-test="amber-800-30"></div>
      <div class="flex-1 bg-amber-800 bg-hue-rotate-60 h-6" data-test="amber-800-60"></div>
      <div class="flex-1 bg-amber-800 bg-hue-rotate-90 h-6" data-test="amber-800-90"></div>
      <div class="flex-1 bg-amber-800 bg-hue-rotate-120 h-6" data-test="amber-800-120"></div>
      <div class="flex-1 bg-amber-800 bg-hue-rotate-150 h-6" data-test="amber-800-150"></div>
      <div class="flex-1 bg-amber-800 bg-hue-rotate-180 h-6" data-test="amber-800-180"></div>
      <div class="flex-1 bg-amber-800 bg-hue-rotate-210 h-6" data-test="amber-800-210"></div>
      <div class="flex-1 bg-amber-800 bg-hue-rotate-240 h-6" data-test="amber-800-240"></div>
      <div class="flex-1 bg-amber-800 bg-hue-rotate-270 h-6" data-test="amber-800-270"></div>
      <div class="flex-1 bg-amber-800 bg-hue-rotate-300 h-6" data-test="amber-800-300"></div>
      <div class="flex-1 bg-amber-800 bg-hue-rotate-330 h-6" data-test="amber-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-amber-900 h-6" data-test="amber-900-0"></div>
      <div class="flex-1 bg-amber-900 bg-hue-rotate-30 h-6" data-test="amber-900-30"></div>
      <div class="flex-1 bg-amber-900 bg-hue-rotate-60 h-6" data-test="amber-900-60"></div>
      <div class="flex-1 bg-amber-900 bg-hue-rotate-90 h-6" data-test="amber-900-90"></div>
      <div class="flex-1 bg-amber-900 bg-hue-rotate-120 h-6" data-test="amber-900-120"></div>
      <div class="flex-1 bg-amber-900 bg-hue-rotate-150 h-6" data-test="amber-900-150"></div>
      <div class="flex-1 bg-amber-900 bg-hue-rotate-180 h-6" data-test="amber-900-180"></div>
      <div class="flex-1 bg-amber-900 bg-hue-rotate-210 h-6" data-test="amber-900-210"></div>
      <div class="flex-1 bg-amber-900 bg-hue-rotate-240 h-6" data-test="amber-900-240"></div>
      <div class="flex-1 bg-amber-900 bg-hue-rotate-270 h-6" data-test="amber-900-270"></div>
      <div class="flex-1 bg-amber-900 bg-hue-rotate-300 h-6" data-test="amber-900-300"></div>
      <div class="flex-1 bg-amber-900 bg-hue-rotate-330 h-6" data-test="amber-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-amber-950 h-6" data-test="amber-950-0"></div>
      <div class="flex-1 bg-amber-950 bg-hue-rotate-30 h-6" data-test="amber-950-30"></div>
      <div class="flex-1 bg-amber-950 bg-hue-rotate-60 h-6" data-test="amber-950-60"></div>
      <div class="flex-1 bg-amber-950 bg-hue-rotate-90 h-6" data-test="amber-950-90"></div>
      <div class="flex-1 bg-amber-950 bg-hue-rotate-120 h-6" data-test="amber-950-120"></div>
      <div class="flex-1 bg-amber-950 bg-hue-rotate-150 h-6" data-test="amber-950-150"></div>
      <div class="flex-1 bg-amber-950 bg-hue-rotate-180 h-6" data-test="amber-950-180"></div>
      <div class="flex-1 bg-amber-950 bg-hue-rotate-210 h-6" data-test="amber-950-210"></div>
      <div class="flex-1 bg-amber-950 bg-hue-rotate-240 h-6" data-test="amber-950-240"></div>
      <div class="flex-1 bg-amber-950 bg-hue-rotate-270 h-6" data-test="amber-950-270"></div>
      <div class="flex-1 bg-amber-950 bg-hue-rotate-300 h-6" data-test="amber-950-300"></div>
      <div class="flex-1 bg-amber-950 bg-hue-rotate-330 h-6" data-test="amber-950-330"></div>
    </div>
  </div>
</div>

### yellow

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-yellow-50 h-6" data-test="yellow-50-0"></div>
      <div class="flex-1 bg-yellow-50 bg-hue-rotate-30 h-6" data-test="yellow-50-30"></div>
      <div class="flex-1 bg-yellow-50 bg-hue-rotate-60 h-6" data-test="yellow-50-60"></div>
      <div class="flex-1 bg-yellow-50 bg-hue-rotate-90 h-6" data-test="yellow-50-90"></div>
      <div class="flex-1 bg-yellow-50 bg-hue-rotate-120 h-6" data-test="yellow-50-120"></div>
      <div class="flex-1 bg-yellow-50 bg-hue-rotate-150 h-6" data-test="yellow-50-150"></div>
      <div class="flex-1 bg-yellow-50 bg-hue-rotate-180 h-6" data-test="yellow-50-180"></div>
      <div class="flex-1 bg-yellow-50 bg-hue-rotate-210 h-6" data-test="yellow-50-210"></div>
      <div class="flex-1 bg-yellow-50 bg-hue-rotate-240 h-6" data-test="yellow-50-240"></div>
      <div class="flex-1 bg-yellow-50 bg-hue-rotate-270 h-6" data-test="yellow-50-270"></div>
      <div class="flex-1 bg-yellow-50 bg-hue-rotate-300 h-6" data-test="yellow-50-300"></div>
      <div class="flex-1 bg-yellow-50 bg-hue-rotate-330 h-6" data-test="yellow-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-yellow-100 h-6" data-test="yellow-100-0"></div>
      <div class="flex-1 bg-yellow-100 bg-hue-rotate-30 h-6" data-test="yellow-100-30"></div>
      <div class="flex-1 bg-yellow-100 bg-hue-rotate-60 h-6" data-test="yellow-100-60"></div>
      <div class="flex-1 bg-yellow-100 bg-hue-rotate-90 h-6" data-test="yellow-100-90"></div>
      <div class="flex-1 bg-yellow-100 bg-hue-rotate-120 h-6" data-test="yellow-100-120"></div>
      <div class="flex-1 bg-yellow-100 bg-hue-rotate-150 h-6" data-test="yellow-100-150"></div>
      <div class="flex-1 bg-yellow-100 bg-hue-rotate-180 h-6" data-test="yellow-100-180"></div>
      <div class="flex-1 bg-yellow-100 bg-hue-rotate-210 h-6" data-test="yellow-100-210"></div>
      <div class="flex-1 bg-yellow-100 bg-hue-rotate-240 h-6" data-test="yellow-100-240"></div>
      <div class="flex-1 bg-yellow-100 bg-hue-rotate-270 h-6" data-test="yellow-100-270"></div>
      <div class="flex-1 bg-yellow-100 bg-hue-rotate-300 h-6" data-test="yellow-100-300"></div>
      <div class="flex-1 bg-yellow-100 bg-hue-rotate-330 h-6" data-test="yellow-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-yellow-200 h-6" data-test="yellow-200-0"></div>
      <div class="flex-1 bg-yellow-200 bg-hue-rotate-30 h-6" data-test="yellow-200-30"></div>
      <div class="flex-1 bg-yellow-200 bg-hue-rotate-60 h-6" data-test="yellow-200-60"></div>
      <div class="flex-1 bg-yellow-200 bg-hue-rotate-90 h-6" data-test="yellow-200-90"></div>
      <div class="flex-1 bg-yellow-200 bg-hue-rotate-120 h-6" data-test="yellow-200-120"></div>
      <div class="flex-1 bg-yellow-200 bg-hue-rotate-150 h-6" data-test="yellow-200-150"></div>
      <div class="flex-1 bg-yellow-200 bg-hue-rotate-180 h-6" data-test="yellow-200-180"></div>
      <div class="flex-1 bg-yellow-200 bg-hue-rotate-210 h-6" data-test="yellow-200-210"></div>
      <div class="flex-1 bg-yellow-200 bg-hue-rotate-240 h-6" data-test="yellow-200-240"></div>
      <div class="flex-1 bg-yellow-200 bg-hue-rotate-270 h-6" data-test="yellow-200-270"></div>
      <div class="flex-1 bg-yellow-200 bg-hue-rotate-300 h-6" data-test="yellow-200-300"></div>
      <div class="flex-1 bg-yellow-200 bg-hue-rotate-330 h-6" data-test="yellow-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-yellow-300 h-6" data-test="yellow-300-0"></div>
      <div class="flex-1 bg-yellow-300 bg-hue-rotate-30 h-6" data-test="yellow-300-30"></div>
      <div class="flex-1 bg-yellow-300 bg-hue-rotate-60 h-6" data-test="yellow-300-60"></div>
      <div class="flex-1 bg-yellow-300 bg-hue-rotate-90 h-6" data-test="yellow-300-90"></div>
      <div class="flex-1 bg-yellow-300 bg-hue-rotate-120 h-6" data-test="yellow-300-120"></div>
      <div class="flex-1 bg-yellow-300 bg-hue-rotate-150 h-6" data-test="yellow-300-150"></div>
      <div class="flex-1 bg-yellow-300 bg-hue-rotate-180 h-6" data-test="yellow-300-180"></div>
      <div class="flex-1 bg-yellow-300 bg-hue-rotate-210 h-6" data-test="yellow-300-210"></div>
      <div class="flex-1 bg-yellow-300 bg-hue-rotate-240 h-6" data-test="yellow-300-240"></div>
      <div class="flex-1 bg-yellow-300 bg-hue-rotate-270 h-6" data-test="yellow-300-270"></div>
      <div class="flex-1 bg-yellow-300 bg-hue-rotate-300 h-6" data-test="yellow-300-300"></div>
      <div class="flex-1 bg-yellow-300 bg-hue-rotate-330 h-6" data-test="yellow-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-yellow-400 h-6" data-test="yellow-400-0"></div>
      <div class="flex-1 bg-yellow-400 bg-hue-rotate-30 h-6" data-test="yellow-400-30"></div>
      <div class="flex-1 bg-yellow-400 bg-hue-rotate-60 h-6" data-test="yellow-400-60"></div>
      <div class="flex-1 bg-yellow-400 bg-hue-rotate-90 h-6" data-test="yellow-400-90"></div>
      <div class="flex-1 bg-yellow-400 bg-hue-rotate-120 h-6" data-test="yellow-400-120"></div>
      <div class="flex-1 bg-yellow-400 bg-hue-rotate-150 h-6" data-test="yellow-400-150"></div>
      <div class="flex-1 bg-yellow-400 bg-hue-rotate-180 h-6" data-test="yellow-400-180"></div>
      <div class="flex-1 bg-yellow-400 bg-hue-rotate-210 h-6" data-test="yellow-400-210"></div>
      <div class="flex-1 bg-yellow-400 bg-hue-rotate-240 h-6" data-test="yellow-400-240"></div>
      <div class="flex-1 bg-yellow-400 bg-hue-rotate-270 h-6" data-test="yellow-400-270"></div>
      <div class="flex-1 bg-yellow-400 bg-hue-rotate-300 h-6" data-test="yellow-400-300"></div>
      <div class="flex-1 bg-yellow-400 bg-hue-rotate-330 h-6" data-test="yellow-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-yellow-500 h-6" data-test="yellow-500-0"></div>
      <div class="flex-1 bg-yellow-500 bg-hue-rotate-30 h-6" data-test="yellow-500-30"></div>
      <div class="flex-1 bg-yellow-500 bg-hue-rotate-60 h-6" data-test="yellow-500-60"></div>
      <div class="flex-1 bg-yellow-500 bg-hue-rotate-90 h-6" data-test="yellow-500-90"></div>
      <div class="flex-1 bg-yellow-500 bg-hue-rotate-120 h-6" data-test="yellow-500-120"></div>
      <div class="flex-1 bg-yellow-500 bg-hue-rotate-150 h-6" data-test="yellow-500-150"></div>
      <div class="flex-1 bg-yellow-500 bg-hue-rotate-180 h-6" data-test="yellow-500-180"></div>
      <div class="flex-1 bg-yellow-500 bg-hue-rotate-210 h-6" data-test="yellow-500-210"></div>
      <div class="flex-1 bg-yellow-500 bg-hue-rotate-240 h-6" data-test="yellow-500-240"></div>
      <div class="flex-1 bg-yellow-500 bg-hue-rotate-270 h-6" data-test="yellow-500-270"></div>
      <div class="flex-1 bg-yellow-500 bg-hue-rotate-300 h-6" data-test="yellow-500-300"></div>
      <div class="flex-1 bg-yellow-500 bg-hue-rotate-330 h-6" data-test="yellow-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-yellow-600 h-6" data-test="yellow-600-0"></div>
      <div class="flex-1 bg-yellow-600 bg-hue-rotate-30 h-6" data-test="yellow-600-30"></div>
      <div class="flex-1 bg-yellow-600 bg-hue-rotate-60 h-6" data-test="yellow-600-60"></div>
      <div class="flex-1 bg-yellow-600 bg-hue-rotate-90 h-6" data-test="yellow-600-90"></div>
      <div class="flex-1 bg-yellow-600 bg-hue-rotate-120 h-6" data-test="yellow-600-120"></div>
      <div class="flex-1 bg-yellow-600 bg-hue-rotate-150 h-6" data-test="yellow-600-150"></div>
      <div class="flex-1 bg-yellow-600 bg-hue-rotate-180 h-6" data-test="yellow-600-180"></div>
      <div class="flex-1 bg-yellow-600 bg-hue-rotate-210 h-6" data-test="yellow-600-210"></div>
      <div class="flex-1 bg-yellow-600 bg-hue-rotate-240 h-6" data-test="yellow-600-240"></div>
      <div class="flex-1 bg-yellow-600 bg-hue-rotate-270 h-6" data-test="yellow-600-270"></div>
      <div class="flex-1 bg-yellow-600 bg-hue-rotate-300 h-6" data-test="yellow-600-300"></div>
      <div class="flex-1 bg-yellow-600 bg-hue-rotate-330 h-6" data-test="yellow-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-yellow-700 h-6" data-test="yellow-700-0"></div>
      <div class="flex-1 bg-yellow-700 bg-hue-rotate-30 h-6" data-test="yellow-700-30"></div>
      <div class="flex-1 bg-yellow-700 bg-hue-rotate-60 h-6" data-test="yellow-700-60"></div>
      <div class="flex-1 bg-yellow-700 bg-hue-rotate-90 h-6" data-test="yellow-700-90"></div>
      <div class="flex-1 bg-yellow-700 bg-hue-rotate-120 h-6" data-test="yellow-700-120"></div>
      <div class="flex-1 bg-yellow-700 bg-hue-rotate-150 h-6" data-test="yellow-700-150"></div>
      <div class="flex-1 bg-yellow-700 bg-hue-rotate-180 h-6" data-test="yellow-700-180"></div>
      <div class="flex-1 bg-yellow-700 bg-hue-rotate-210 h-6" data-test="yellow-700-210"></div>
      <div class="flex-1 bg-yellow-700 bg-hue-rotate-240 h-6" data-test="yellow-700-240"></div>
      <div class="flex-1 bg-yellow-700 bg-hue-rotate-270 h-6" data-test="yellow-700-270"></div>
      <div class="flex-1 bg-yellow-700 bg-hue-rotate-300 h-6" data-test="yellow-700-300"></div>
      <div class="flex-1 bg-yellow-700 bg-hue-rotate-330 h-6" data-test="yellow-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-yellow-800 h-6" data-test="yellow-800-0"></div>
      <div class="flex-1 bg-yellow-800 bg-hue-rotate-30 h-6" data-test="yellow-800-30"></div>
      <div class="flex-1 bg-yellow-800 bg-hue-rotate-60 h-6" data-test="yellow-800-60"></div>
      <div class="flex-1 bg-yellow-800 bg-hue-rotate-90 h-6" data-test="yellow-800-90"></div>
      <div class="flex-1 bg-yellow-800 bg-hue-rotate-120 h-6" data-test="yellow-800-120"></div>
      <div class="flex-1 bg-yellow-800 bg-hue-rotate-150 h-6" data-test="yellow-800-150"></div>
      <div class="flex-1 bg-yellow-800 bg-hue-rotate-180 h-6" data-test="yellow-800-180"></div>
      <div class="flex-1 bg-yellow-800 bg-hue-rotate-210 h-6" data-test="yellow-800-210"></div>
      <div class="flex-1 bg-yellow-800 bg-hue-rotate-240 h-6" data-test="yellow-800-240"></div>
      <div class="flex-1 bg-yellow-800 bg-hue-rotate-270 h-6" data-test="yellow-800-270"></div>
      <div class="flex-1 bg-yellow-800 bg-hue-rotate-300 h-6" data-test="yellow-800-300"></div>
      <div class="flex-1 bg-yellow-800 bg-hue-rotate-330 h-6" data-test="yellow-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-yellow-900 h-6" data-test="yellow-900-0"></div>
      <div class="flex-1 bg-yellow-900 bg-hue-rotate-30 h-6" data-test="yellow-900-30"></div>
      <div class="flex-1 bg-yellow-900 bg-hue-rotate-60 h-6" data-test="yellow-900-60"></div>
      <div class="flex-1 bg-yellow-900 bg-hue-rotate-90 h-6" data-test="yellow-900-90"></div>
      <div class="flex-1 bg-yellow-900 bg-hue-rotate-120 h-6" data-test="yellow-900-120"></div>
      <div class="flex-1 bg-yellow-900 bg-hue-rotate-150 h-6" data-test="yellow-900-150"></div>
      <div class="flex-1 bg-yellow-900 bg-hue-rotate-180 h-6" data-test="yellow-900-180"></div>
      <div class="flex-1 bg-yellow-900 bg-hue-rotate-210 h-6" data-test="yellow-900-210"></div>
      <div class="flex-1 bg-yellow-900 bg-hue-rotate-240 h-6" data-test="yellow-900-240"></div>
      <div class="flex-1 bg-yellow-900 bg-hue-rotate-270 h-6" data-test="yellow-900-270"></div>
      <div class="flex-1 bg-yellow-900 bg-hue-rotate-300 h-6" data-test="yellow-900-300"></div>
      <div class="flex-1 bg-yellow-900 bg-hue-rotate-330 h-6" data-test="yellow-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-yellow-950 h-6" data-test="yellow-950-0"></div>
      <div class="flex-1 bg-yellow-950 bg-hue-rotate-30 h-6" data-test="yellow-950-30"></div>
      <div class="flex-1 bg-yellow-950 bg-hue-rotate-60 h-6" data-test="yellow-950-60"></div>
      <div class="flex-1 bg-yellow-950 bg-hue-rotate-90 h-6" data-test="yellow-950-90"></div>
      <div class="flex-1 bg-yellow-950 bg-hue-rotate-120 h-6" data-test="yellow-950-120"></div>
      <div class="flex-1 bg-yellow-950 bg-hue-rotate-150 h-6" data-test="yellow-950-150"></div>
      <div class="flex-1 bg-yellow-950 bg-hue-rotate-180 h-6" data-test="yellow-950-180"></div>
      <div class="flex-1 bg-yellow-950 bg-hue-rotate-210 h-6" data-test="yellow-950-210"></div>
      <div class="flex-1 bg-yellow-950 bg-hue-rotate-240 h-6" data-test="yellow-950-240"></div>
      <div class="flex-1 bg-yellow-950 bg-hue-rotate-270 h-6" data-test="yellow-950-270"></div>
      <div class="flex-1 bg-yellow-950 bg-hue-rotate-300 h-6" data-test="yellow-950-300"></div>
      <div class="flex-1 bg-yellow-950 bg-hue-rotate-330 h-6" data-test="yellow-950-330"></div>
    </div>
  </div>
</div>

### lime

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-lime-50 h-6" data-test="lime-50-0"></div>
      <div class="flex-1 bg-lime-50 bg-hue-rotate-30 h-6" data-test="lime-50-30"></div>
      <div class="flex-1 bg-lime-50 bg-hue-rotate-60 h-6" data-test="lime-50-60"></div>
      <div class="flex-1 bg-lime-50 bg-hue-rotate-90 h-6" data-test="lime-50-90"></div>
      <div class="flex-1 bg-lime-50 bg-hue-rotate-120 h-6" data-test="lime-50-120"></div>
      <div class="flex-1 bg-lime-50 bg-hue-rotate-150 h-6" data-test="lime-50-150"></div>
      <div class="flex-1 bg-lime-50 bg-hue-rotate-180 h-6" data-test="lime-50-180"></div>
      <div class="flex-1 bg-lime-50 bg-hue-rotate-210 h-6" data-test="lime-50-210"></div>
      <div class="flex-1 bg-lime-50 bg-hue-rotate-240 h-6" data-test="lime-50-240"></div>
      <div class="flex-1 bg-lime-50 bg-hue-rotate-270 h-6" data-test="lime-50-270"></div>
      <div class="flex-1 bg-lime-50 bg-hue-rotate-300 h-6" data-test="lime-50-300"></div>
      <div class="flex-1 bg-lime-50 bg-hue-rotate-330 h-6" data-test="lime-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-lime-100 h-6" data-test="lime-100-0"></div>
      <div class="flex-1 bg-lime-100 bg-hue-rotate-30 h-6" data-test="lime-100-30"></div>
      <div class="flex-1 bg-lime-100 bg-hue-rotate-60 h-6" data-test="lime-100-60"></div>
      <div class="flex-1 bg-lime-100 bg-hue-rotate-90 h-6" data-test="lime-100-90"></div>
      <div class="flex-1 bg-lime-100 bg-hue-rotate-120 h-6" data-test="lime-100-120"></div>
      <div class="flex-1 bg-lime-100 bg-hue-rotate-150 h-6" data-test="lime-100-150"></div>
      <div class="flex-1 bg-lime-100 bg-hue-rotate-180 h-6" data-test="lime-100-180"></div>
      <div class="flex-1 bg-lime-100 bg-hue-rotate-210 h-6" data-test="lime-100-210"></div>
      <div class="flex-1 bg-lime-100 bg-hue-rotate-240 h-6" data-test="lime-100-240"></div>
      <div class="flex-1 bg-lime-100 bg-hue-rotate-270 h-6" data-test="lime-100-270"></div>
      <div class="flex-1 bg-lime-100 bg-hue-rotate-300 h-6" data-test="lime-100-300"></div>
      <div class="flex-1 bg-lime-100 bg-hue-rotate-330 h-6" data-test="lime-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-lime-200 h-6" data-test="lime-200-0"></div>
      <div class="flex-1 bg-lime-200 bg-hue-rotate-30 h-6" data-test="lime-200-30"></div>
      <div class="flex-1 bg-lime-200 bg-hue-rotate-60 h-6" data-test="lime-200-60"></div>
      <div class="flex-1 bg-lime-200 bg-hue-rotate-90 h-6" data-test="lime-200-90"></div>
      <div class="flex-1 bg-lime-200 bg-hue-rotate-120 h-6" data-test="lime-200-120"></div>
      <div class="flex-1 bg-lime-200 bg-hue-rotate-150 h-6" data-test="lime-200-150"></div>
      <div class="flex-1 bg-lime-200 bg-hue-rotate-180 h-6" data-test="lime-200-180"></div>
      <div class="flex-1 bg-lime-200 bg-hue-rotate-210 h-6" data-test="lime-200-210"></div>
      <div class="flex-1 bg-lime-200 bg-hue-rotate-240 h-6" data-test="lime-200-240"></div>
      <div class="flex-1 bg-lime-200 bg-hue-rotate-270 h-6" data-test="lime-200-270"></div>
      <div class="flex-1 bg-lime-200 bg-hue-rotate-300 h-6" data-test="lime-200-300"></div>
      <div class="flex-1 bg-lime-200 bg-hue-rotate-330 h-6" data-test="lime-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-lime-300 h-6" data-test="lime-300-0"></div>
      <div class="flex-1 bg-lime-300 bg-hue-rotate-30 h-6" data-test="lime-300-30"></div>
      <div class="flex-1 bg-lime-300 bg-hue-rotate-60 h-6" data-test="lime-300-60"></div>
      <div class="flex-1 bg-lime-300 bg-hue-rotate-90 h-6" data-test="lime-300-90"></div>
      <div class="flex-1 bg-lime-300 bg-hue-rotate-120 h-6" data-test="lime-300-120"></div>
      <div class="flex-1 bg-lime-300 bg-hue-rotate-150 h-6" data-test="lime-300-150"></div>
      <div class="flex-1 bg-lime-300 bg-hue-rotate-180 h-6" data-test="lime-300-180"></div>
      <div class="flex-1 bg-lime-300 bg-hue-rotate-210 h-6" data-test="lime-300-210"></div>
      <div class="flex-1 bg-lime-300 bg-hue-rotate-240 h-6" data-test="lime-300-240"></div>
      <div class="flex-1 bg-lime-300 bg-hue-rotate-270 h-6" data-test="lime-300-270"></div>
      <div class="flex-1 bg-lime-300 bg-hue-rotate-300 h-6" data-test="lime-300-300"></div>
      <div class="flex-1 bg-lime-300 bg-hue-rotate-330 h-6" data-test="lime-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-lime-400 h-6" data-test="lime-400-0"></div>
      <div class="flex-1 bg-lime-400 bg-hue-rotate-30 h-6" data-test="lime-400-30"></div>
      <div class="flex-1 bg-lime-400 bg-hue-rotate-60 h-6" data-test="lime-400-60"></div>
      <div class="flex-1 bg-lime-400 bg-hue-rotate-90 h-6" data-test="lime-400-90"></div>
      <div class="flex-1 bg-lime-400 bg-hue-rotate-120 h-6" data-test="lime-400-120"></div>
      <div class="flex-1 bg-lime-400 bg-hue-rotate-150 h-6" data-test="lime-400-150"></div>
      <div class="flex-1 bg-lime-400 bg-hue-rotate-180 h-6" data-test="lime-400-180"></div>
      <div class="flex-1 bg-lime-400 bg-hue-rotate-210 h-6" data-test="lime-400-210"></div>
      <div class="flex-1 bg-lime-400 bg-hue-rotate-240 h-6" data-test="lime-400-240"></div>
      <div class="flex-1 bg-lime-400 bg-hue-rotate-270 h-6" data-test="lime-400-270"></div>
      <div class="flex-1 bg-lime-400 bg-hue-rotate-300 h-6" data-test="lime-400-300"></div>
      <div class="flex-1 bg-lime-400 bg-hue-rotate-330 h-6" data-test="lime-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-lime-500 h-6" data-test="lime-500-0"></div>
      <div class="flex-1 bg-lime-500 bg-hue-rotate-30 h-6" data-test="lime-500-30"></div>
      <div class="flex-1 bg-lime-500 bg-hue-rotate-60 h-6" data-test="lime-500-60"></div>
      <div class="flex-1 bg-lime-500 bg-hue-rotate-90 h-6" data-test="lime-500-90"></div>
      <div class="flex-1 bg-lime-500 bg-hue-rotate-120 h-6" data-test="lime-500-120"></div>
      <div class="flex-1 bg-lime-500 bg-hue-rotate-150 h-6" data-test="lime-500-150"></div>
      <div class="flex-1 bg-lime-500 bg-hue-rotate-180 h-6" data-test="lime-500-180"></div>
      <div class="flex-1 bg-lime-500 bg-hue-rotate-210 h-6" data-test="lime-500-210"></div>
      <div class="flex-1 bg-lime-500 bg-hue-rotate-240 h-6" data-test="lime-500-240"></div>
      <div class="flex-1 bg-lime-500 bg-hue-rotate-270 h-6" data-test="lime-500-270"></div>
      <div class="flex-1 bg-lime-500 bg-hue-rotate-300 h-6" data-test="lime-500-300"></div>
      <div class="flex-1 bg-lime-500 bg-hue-rotate-330 h-6" data-test="lime-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-lime-600 h-6" data-test="lime-600-0"></div>
      <div class="flex-1 bg-lime-600 bg-hue-rotate-30 h-6" data-test="lime-600-30"></div>
      <div class="flex-1 bg-lime-600 bg-hue-rotate-60 h-6" data-test="lime-600-60"></div>
      <div class="flex-1 bg-lime-600 bg-hue-rotate-90 h-6" data-test="lime-600-90"></div>
      <div class="flex-1 bg-lime-600 bg-hue-rotate-120 h-6" data-test="lime-600-120"></div>
      <div class="flex-1 bg-lime-600 bg-hue-rotate-150 h-6" data-test="lime-600-150"></div>
      <div class="flex-1 bg-lime-600 bg-hue-rotate-180 h-6" data-test="lime-600-180"></div>
      <div class="flex-1 bg-lime-600 bg-hue-rotate-210 h-6" data-test="lime-600-210"></div>
      <div class="flex-1 bg-lime-600 bg-hue-rotate-240 h-6" data-test="lime-600-240"></div>
      <div class="flex-1 bg-lime-600 bg-hue-rotate-270 h-6" data-test="lime-600-270"></div>
      <div class="flex-1 bg-lime-600 bg-hue-rotate-300 h-6" data-test="lime-600-300"></div>
      <div class="flex-1 bg-lime-600 bg-hue-rotate-330 h-6" data-test="lime-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-lime-700 h-6" data-test="lime-700-0"></div>
      <div class="flex-1 bg-lime-700 bg-hue-rotate-30 h-6" data-test="lime-700-30"></div>
      <div class="flex-1 bg-lime-700 bg-hue-rotate-60 h-6" data-test="lime-700-60"></div>
      <div class="flex-1 bg-lime-700 bg-hue-rotate-90 h-6" data-test="lime-700-90"></div>
      <div class="flex-1 bg-lime-700 bg-hue-rotate-120 h-6" data-test="lime-700-120"></div>
      <div class="flex-1 bg-lime-700 bg-hue-rotate-150 h-6" data-test="lime-700-150"></div>
      <div class="flex-1 bg-lime-700 bg-hue-rotate-180 h-6" data-test="lime-700-180"></div>
      <div class="flex-1 bg-lime-700 bg-hue-rotate-210 h-6" data-test="lime-700-210"></div>
      <div class="flex-1 bg-lime-700 bg-hue-rotate-240 h-6" data-test="lime-700-240"></div>
      <div class="flex-1 bg-lime-700 bg-hue-rotate-270 h-6" data-test="lime-700-270"></div>
      <div class="flex-1 bg-lime-700 bg-hue-rotate-300 h-6" data-test="lime-700-300"></div>
      <div class="flex-1 bg-lime-700 bg-hue-rotate-330 h-6" data-test="lime-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-lime-800 h-6" data-test="lime-800-0"></div>
      <div class="flex-1 bg-lime-800 bg-hue-rotate-30 h-6" data-test="lime-800-30"></div>
      <div class="flex-1 bg-lime-800 bg-hue-rotate-60 h-6" data-test="lime-800-60"></div>
      <div class="flex-1 bg-lime-800 bg-hue-rotate-90 h-6" data-test="lime-800-90"></div>
      <div class="flex-1 bg-lime-800 bg-hue-rotate-120 h-6" data-test="lime-800-120"></div>
      <div class="flex-1 bg-lime-800 bg-hue-rotate-150 h-6" data-test="lime-800-150"></div>
      <div class="flex-1 bg-lime-800 bg-hue-rotate-180 h-6" data-test="lime-800-180"></div>
      <div class="flex-1 bg-lime-800 bg-hue-rotate-210 h-6" data-test="lime-800-210"></div>
      <div class="flex-1 bg-lime-800 bg-hue-rotate-240 h-6" data-test="lime-800-240"></div>
      <div class="flex-1 bg-lime-800 bg-hue-rotate-270 h-6" data-test="lime-800-270"></div>
      <div class="flex-1 bg-lime-800 bg-hue-rotate-300 h-6" data-test="lime-800-300"></div>
      <div class="flex-1 bg-lime-800 bg-hue-rotate-330 h-6" data-test="lime-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-lime-900 h-6" data-test="lime-900-0"></div>
      <div class="flex-1 bg-lime-900 bg-hue-rotate-30 h-6" data-test="lime-900-30"></div>
      <div class="flex-1 bg-lime-900 bg-hue-rotate-60 h-6" data-test="lime-900-60"></div>
      <div class="flex-1 bg-lime-900 bg-hue-rotate-90 h-6" data-test="lime-900-90"></div>
      <div class="flex-1 bg-lime-900 bg-hue-rotate-120 h-6" data-test="lime-900-120"></div>
      <div class="flex-1 bg-lime-900 bg-hue-rotate-150 h-6" data-test="lime-900-150"></div>
      <div class="flex-1 bg-lime-900 bg-hue-rotate-180 h-6" data-test="lime-900-180"></div>
      <div class="flex-1 bg-lime-900 bg-hue-rotate-210 h-6" data-test="lime-900-210"></div>
      <div class="flex-1 bg-lime-900 bg-hue-rotate-240 h-6" data-test="lime-900-240"></div>
      <div class="flex-1 bg-lime-900 bg-hue-rotate-270 h-6" data-test="lime-900-270"></div>
      <div class="flex-1 bg-lime-900 bg-hue-rotate-300 h-6" data-test="lime-900-300"></div>
      <div class="flex-1 bg-lime-900 bg-hue-rotate-330 h-6" data-test="lime-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-lime-950 h-6" data-test="lime-950-0"></div>
      <div class="flex-1 bg-lime-950 bg-hue-rotate-30 h-6" data-test="lime-950-30"></div>
      <div class="flex-1 bg-lime-950 bg-hue-rotate-60 h-6" data-test="lime-950-60"></div>
      <div class="flex-1 bg-lime-950 bg-hue-rotate-90 h-6" data-test="lime-950-90"></div>
      <div class="flex-1 bg-lime-950 bg-hue-rotate-120 h-6" data-test="lime-950-120"></div>
      <div class="flex-1 bg-lime-950 bg-hue-rotate-150 h-6" data-test="lime-950-150"></div>
      <div class="flex-1 bg-lime-950 bg-hue-rotate-180 h-6" data-test="lime-950-180"></div>
      <div class="flex-1 bg-lime-950 bg-hue-rotate-210 h-6" data-test="lime-950-210"></div>
      <div class="flex-1 bg-lime-950 bg-hue-rotate-240 h-6" data-test="lime-950-240"></div>
      <div class="flex-1 bg-lime-950 bg-hue-rotate-270 h-6" data-test="lime-950-270"></div>
      <div class="flex-1 bg-lime-950 bg-hue-rotate-300 h-6" data-test="lime-950-300"></div>
      <div class="flex-1 bg-lime-950 bg-hue-rotate-330 h-6" data-test="lime-950-330"></div>
    </div>
  </div>
</div>

### green

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-green-50 h-6" data-test="green-50-0"></div>
      <div class="flex-1 bg-green-50 bg-hue-rotate-30 h-6" data-test="green-50-30"></div>
      <div class="flex-1 bg-green-50 bg-hue-rotate-60 h-6" data-test="green-50-60"></div>
      <div class="flex-1 bg-green-50 bg-hue-rotate-90 h-6" data-test="green-50-90"></div>
      <div class="flex-1 bg-green-50 bg-hue-rotate-120 h-6" data-test="green-50-120"></div>
      <div class="flex-1 bg-green-50 bg-hue-rotate-150 h-6" data-test="green-50-150"></div>
      <div class="flex-1 bg-green-50 bg-hue-rotate-180 h-6" data-test="green-50-180"></div>
      <div class="flex-1 bg-green-50 bg-hue-rotate-210 h-6" data-test="green-50-210"></div>
      <div class="flex-1 bg-green-50 bg-hue-rotate-240 h-6" data-test="green-50-240"></div>
      <div class="flex-1 bg-green-50 bg-hue-rotate-270 h-6" data-test="green-50-270"></div>
      <div class="flex-1 bg-green-50 bg-hue-rotate-300 h-6" data-test="green-50-300"></div>
      <div class="flex-1 bg-green-50 bg-hue-rotate-330 h-6" data-test="green-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-green-100 h-6" data-test="green-100-0"></div>
      <div class="flex-1 bg-green-100 bg-hue-rotate-30 h-6" data-test="green-100-30"></div>
      <div class="flex-1 bg-green-100 bg-hue-rotate-60 h-6" data-test="green-100-60"></div>
      <div class="flex-1 bg-green-100 bg-hue-rotate-90 h-6" data-test="green-100-90"></div>
      <div class="flex-1 bg-green-100 bg-hue-rotate-120 h-6" data-test="green-100-120"></div>
      <div class="flex-1 bg-green-100 bg-hue-rotate-150 h-6" data-test="green-100-150"></div>
      <div class="flex-1 bg-green-100 bg-hue-rotate-180 h-6" data-test="green-100-180"></div>
      <div class="flex-1 bg-green-100 bg-hue-rotate-210 h-6" data-test="green-100-210"></div>
      <div class="flex-1 bg-green-100 bg-hue-rotate-240 h-6" data-test="green-100-240"></div>
      <div class="flex-1 bg-green-100 bg-hue-rotate-270 h-6" data-test="green-100-270"></div>
      <div class="flex-1 bg-green-100 bg-hue-rotate-300 h-6" data-test="green-100-300"></div>
      <div class="flex-1 bg-green-100 bg-hue-rotate-330 h-6" data-test="green-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-green-200 h-6" data-test="green-200-0"></div>
      <div class="flex-1 bg-green-200 bg-hue-rotate-30 h-6" data-test="green-200-30"></div>
      <div class="flex-1 bg-green-200 bg-hue-rotate-60 h-6" data-test="green-200-60"></div>
      <div class="flex-1 bg-green-200 bg-hue-rotate-90 h-6" data-test="green-200-90"></div>
      <div class="flex-1 bg-green-200 bg-hue-rotate-120 h-6" data-test="green-200-120"></div>
      <div class="flex-1 bg-green-200 bg-hue-rotate-150 h-6" data-test="green-200-150"></div>
      <div class="flex-1 bg-green-200 bg-hue-rotate-180 h-6" data-test="green-200-180"></div>
      <div class="flex-1 bg-green-200 bg-hue-rotate-210 h-6" data-test="green-200-210"></div>
      <div class="flex-1 bg-green-200 bg-hue-rotate-240 h-6" data-test="green-200-240"></div>
      <div class="flex-1 bg-green-200 bg-hue-rotate-270 h-6" data-test="green-200-270"></div>
      <div class="flex-1 bg-green-200 bg-hue-rotate-300 h-6" data-test="green-200-300"></div>
      <div class="flex-1 bg-green-200 bg-hue-rotate-330 h-6" data-test="green-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-green-300 h-6" data-test="green-300-0"></div>
      <div class="flex-1 bg-green-300 bg-hue-rotate-30 h-6" data-test="green-300-30"></div>
      <div class="flex-1 bg-green-300 bg-hue-rotate-60 h-6" data-test="green-300-60"></div>
      <div class="flex-1 bg-green-300 bg-hue-rotate-90 h-6" data-test="green-300-90"></div>
      <div class="flex-1 bg-green-300 bg-hue-rotate-120 h-6" data-test="green-300-120"></div>
      <div class="flex-1 bg-green-300 bg-hue-rotate-150 h-6" data-test="green-300-150"></div>
      <div class="flex-1 bg-green-300 bg-hue-rotate-180 h-6" data-test="green-300-180"></div>
      <div class="flex-1 bg-green-300 bg-hue-rotate-210 h-6" data-test="green-300-210"></div>
      <div class="flex-1 bg-green-300 bg-hue-rotate-240 h-6" data-test="green-300-240"></div>
      <div class="flex-1 bg-green-300 bg-hue-rotate-270 h-6" data-test="green-300-270"></div>
      <div class="flex-1 bg-green-300 bg-hue-rotate-300 h-6" data-test="green-300-300"></div>
      <div class="flex-1 bg-green-300 bg-hue-rotate-330 h-6" data-test="green-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-green-400 h-6" data-test="green-400-0"></div>
      <div class="flex-1 bg-green-400 bg-hue-rotate-30 h-6" data-test="green-400-30"></div>
      <div class="flex-1 bg-green-400 bg-hue-rotate-60 h-6" data-test="green-400-60"></div>
      <div class="flex-1 bg-green-400 bg-hue-rotate-90 h-6" data-test="green-400-90"></div>
      <div class="flex-1 bg-green-400 bg-hue-rotate-120 h-6" data-test="green-400-120"></div>
      <div class="flex-1 bg-green-400 bg-hue-rotate-150 h-6" data-test="green-400-150"></div>
      <div class="flex-1 bg-green-400 bg-hue-rotate-180 h-6" data-test="green-400-180"></div>
      <div class="flex-1 bg-green-400 bg-hue-rotate-210 h-6" data-test="green-400-210"></div>
      <div class="flex-1 bg-green-400 bg-hue-rotate-240 h-6" data-test="green-400-240"></div>
      <div class="flex-1 bg-green-400 bg-hue-rotate-270 h-6" data-test="green-400-270"></div>
      <div class="flex-1 bg-green-400 bg-hue-rotate-300 h-6" data-test="green-400-300"></div>
      <div class="flex-1 bg-green-400 bg-hue-rotate-330 h-6" data-test="green-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-green-500 h-6" data-test="green-500-0"></div>
      <div class="flex-1 bg-green-500 bg-hue-rotate-30 h-6" data-test="green-500-30"></div>
      <div class="flex-1 bg-green-500 bg-hue-rotate-60 h-6" data-test="green-500-60"></div>
      <div class="flex-1 bg-green-500 bg-hue-rotate-90 h-6" data-test="green-500-90"></div>
      <div class="flex-1 bg-green-500 bg-hue-rotate-120 h-6" data-test="green-500-120"></div>
      <div class="flex-1 bg-green-500 bg-hue-rotate-150 h-6" data-test="green-500-150"></div>
      <div class="flex-1 bg-green-500 bg-hue-rotate-180 h-6" data-test="green-500-180"></div>
      <div class="flex-1 bg-green-500 bg-hue-rotate-210 h-6" data-test="green-500-210"></div>
      <div class="flex-1 bg-green-500 bg-hue-rotate-240 h-6" data-test="green-500-240"></div>
      <div class="flex-1 bg-green-500 bg-hue-rotate-270 h-6" data-test="green-500-270"></div>
      <div class="flex-1 bg-green-500 bg-hue-rotate-300 h-6" data-test="green-500-300"></div>
      <div class="flex-1 bg-green-500 bg-hue-rotate-330 h-6" data-test="green-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-green-600 h-6" data-test="green-600-0"></div>
      <div class="flex-1 bg-green-600 bg-hue-rotate-30 h-6" data-test="green-600-30"></div>
      <div class="flex-1 bg-green-600 bg-hue-rotate-60 h-6" data-test="green-600-60"></div>
      <div class="flex-1 bg-green-600 bg-hue-rotate-90 h-6" data-test="green-600-90"></div>
      <div class="flex-1 bg-green-600 bg-hue-rotate-120 h-6" data-test="green-600-120"></div>
      <div class="flex-1 bg-green-600 bg-hue-rotate-150 h-6" data-test="green-600-150"></div>
      <div class="flex-1 bg-green-600 bg-hue-rotate-180 h-6" data-test="green-600-180"></div>
      <div class="flex-1 bg-green-600 bg-hue-rotate-210 h-6" data-test="green-600-210"></div>
      <div class="flex-1 bg-green-600 bg-hue-rotate-240 h-6" data-test="green-600-240"></div>
      <div class="flex-1 bg-green-600 bg-hue-rotate-270 h-6" data-test="green-600-270"></div>
      <div class="flex-1 bg-green-600 bg-hue-rotate-300 h-6" data-test="green-600-300"></div>
      <div class="flex-1 bg-green-600 bg-hue-rotate-330 h-6" data-test="green-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-green-700 h-6" data-test="green-700-0"></div>
      <div class="flex-1 bg-green-700 bg-hue-rotate-30 h-6" data-test="green-700-30"></div>
      <div class="flex-1 bg-green-700 bg-hue-rotate-60 h-6" data-test="green-700-60"></div>
      <div class="flex-1 bg-green-700 bg-hue-rotate-90 h-6" data-test="green-700-90"></div>
      <div class="flex-1 bg-green-700 bg-hue-rotate-120 h-6" data-test="green-700-120"></div>
      <div class="flex-1 bg-green-700 bg-hue-rotate-150 h-6" data-test="green-700-150"></div>
      <div class="flex-1 bg-green-700 bg-hue-rotate-180 h-6" data-test="green-700-180"></div>
      <div class="flex-1 bg-green-700 bg-hue-rotate-210 h-6" data-test="green-700-210"></div>
      <div class="flex-1 bg-green-700 bg-hue-rotate-240 h-6" data-test="green-700-240"></div>
      <div class="flex-1 bg-green-700 bg-hue-rotate-270 h-6" data-test="green-700-270"></div>
      <div class="flex-1 bg-green-700 bg-hue-rotate-300 h-6" data-test="green-700-300"></div>
      <div class="flex-1 bg-green-700 bg-hue-rotate-330 h-6" data-test="green-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-green-800 h-6" data-test="green-800-0"></div>
      <div class="flex-1 bg-green-800 bg-hue-rotate-30 h-6" data-test="green-800-30"></div>
      <div class="flex-1 bg-green-800 bg-hue-rotate-60 h-6" data-test="green-800-60"></div>
      <div class="flex-1 bg-green-800 bg-hue-rotate-90 h-6" data-test="green-800-90"></div>
      <div class="flex-1 bg-green-800 bg-hue-rotate-120 h-6" data-test="green-800-120"></div>
      <div class="flex-1 bg-green-800 bg-hue-rotate-150 h-6" data-test="green-800-150"></div>
      <div class="flex-1 bg-green-800 bg-hue-rotate-180 h-6" data-test="green-800-180"></div>
      <div class="flex-1 bg-green-800 bg-hue-rotate-210 h-6" data-test="green-800-210"></div>
      <div class="flex-1 bg-green-800 bg-hue-rotate-240 h-6" data-test="green-800-240"></div>
      <div class="flex-1 bg-green-800 bg-hue-rotate-270 h-6" data-test="green-800-270"></div>
      <div class="flex-1 bg-green-800 bg-hue-rotate-300 h-6" data-test="green-800-300"></div>
      <div class="flex-1 bg-green-800 bg-hue-rotate-330 h-6" data-test="green-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-green-900 h-6" data-test="green-900-0"></div>
      <div class="flex-1 bg-green-900 bg-hue-rotate-30 h-6" data-test="green-900-30"></div>
      <div class="flex-1 bg-green-900 bg-hue-rotate-60 h-6" data-test="green-900-60"></div>
      <div class="flex-1 bg-green-900 bg-hue-rotate-90 h-6" data-test="green-900-90"></div>
      <div class="flex-1 bg-green-900 bg-hue-rotate-120 h-6" data-test="green-900-120"></div>
      <div class="flex-1 bg-green-900 bg-hue-rotate-150 h-6" data-test="green-900-150"></div>
      <div class="flex-1 bg-green-900 bg-hue-rotate-180 h-6" data-test="green-900-180"></div>
      <div class="flex-1 bg-green-900 bg-hue-rotate-210 h-6" data-test="green-900-210"></div>
      <div class="flex-1 bg-green-900 bg-hue-rotate-240 h-6" data-test="green-900-240"></div>
      <div class="flex-1 bg-green-900 bg-hue-rotate-270 h-6" data-test="green-900-270"></div>
      <div class="flex-1 bg-green-900 bg-hue-rotate-300 h-6" data-test="green-900-300"></div>
      <div class="flex-1 bg-green-900 bg-hue-rotate-330 h-6" data-test="green-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-green-950 h-6" data-test="green-950-0"></div>
      <div class="flex-1 bg-green-950 bg-hue-rotate-30 h-6" data-test="green-950-30"></div>
      <div class="flex-1 bg-green-950 bg-hue-rotate-60 h-6" data-test="green-950-60"></div>
      <div class="flex-1 bg-green-950 bg-hue-rotate-90 h-6" data-test="green-950-90"></div>
      <div class="flex-1 bg-green-950 bg-hue-rotate-120 h-6" data-test="green-950-120"></div>
      <div class="flex-1 bg-green-950 bg-hue-rotate-150 h-6" data-test="green-950-150"></div>
      <div class="flex-1 bg-green-950 bg-hue-rotate-180 h-6" data-test="green-950-180"></div>
      <div class="flex-1 bg-green-950 bg-hue-rotate-210 h-6" data-test="green-950-210"></div>
      <div class="flex-1 bg-green-950 bg-hue-rotate-240 h-6" data-test="green-950-240"></div>
      <div class="flex-1 bg-green-950 bg-hue-rotate-270 h-6" data-test="green-950-270"></div>
      <div class="flex-1 bg-green-950 bg-hue-rotate-300 h-6" data-test="green-950-300"></div>
      <div class="flex-1 bg-green-950 bg-hue-rotate-330 h-6" data-test="green-950-330"></div>
    </div>
  </div>
</div>

### emerald

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-emerald-50 h-6" data-test="emerald-50-0"></div>
      <div class="flex-1 bg-emerald-50 bg-hue-rotate-30 h-6" data-test="emerald-50-30"></div>
      <div class="flex-1 bg-emerald-50 bg-hue-rotate-60 h-6" data-test="emerald-50-60"></div>
      <div class="flex-1 bg-emerald-50 bg-hue-rotate-90 h-6" data-test="emerald-50-90"></div>
      <div class="flex-1 bg-emerald-50 bg-hue-rotate-120 h-6" data-test="emerald-50-120"></div>
      <div class="flex-1 bg-emerald-50 bg-hue-rotate-150 h-6" data-test="emerald-50-150"></div>
      <div class="flex-1 bg-emerald-50 bg-hue-rotate-180 h-6" data-test="emerald-50-180"></div>
      <div class="flex-1 bg-emerald-50 bg-hue-rotate-210 h-6" data-test="emerald-50-210"></div>
      <div class="flex-1 bg-emerald-50 bg-hue-rotate-240 h-6" data-test="emerald-50-240"></div>
      <div class="flex-1 bg-emerald-50 bg-hue-rotate-270 h-6" data-test="emerald-50-270"></div>
      <div class="flex-1 bg-emerald-50 bg-hue-rotate-300 h-6" data-test="emerald-50-300"></div>
      <div class="flex-1 bg-emerald-50 bg-hue-rotate-330 h-6" data-test="emerald-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-emerald-100 h-6" data-test="emerald-100-0"></div>
      <div class="flex-1 bg-emerald-100 bg-hue-rotate-30 h-6" data-test="emerald-100-30"></div>
      <div class="flex-1 bg-emerald-100 bg-hue-rotate-60 h-6" data-test="emerald-100-60"></div>
      <div class="flex-1 bg-emerald-100 bg-hue-rotate-90 h-6" data-test="emerald-100-90"></div>
      <div class="flex-1 bg-emerald-100 bg-hue-rotate-120 h-6" data-test="emerald-100-120"></div>
      <div class="flex-1 bg-emerald-100 bg-hue-rotate-150 h-6" data-test="emerald-100-150"></div>
      <div class="flex-1 bg-emerald-100 bg-hue-rotate-180 h-6" data-test="emerald-100-180"></div>
      <div class="flex-1 bg-emerald-100 bg-hue-rotate-210 h-6" data-test="emerald-100-210"></div>
      <div class="flex-1 bg-emerald-100 bg-hue-rotate-240 h-6" data-test="emerald-100-240"></div>
      <div class="flex-1 bg-emerald-100 bg-hue-rotate-270 h-6" data-test="emerald-100-270"></div>
      <div class="flex-1 bg-emerald-100 bg-hue-rotate-300 h-6" data-test="emerald-100-300"></div>
      <div class="flex-1 bg-emerald-100 bg-hue-rotate-330 h-6" data-test="emerald-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-emerald-200 h-6" data-test="emerald-200-0"></div>
      <div class="flex-1 bg-emerald-200 bg-hue-rotate-30 h-6" data-test="emerald-200-30"></div>
      <div class="flex-1 bg-emerald-200 bg-hue-rotate-60 h-6" data-test="emerald-200-60"></div>
      <div class="flex-1 bg-emerald-200 bg-hue-rotate-90 h-6" data-test="emerald-200-90"></div>
      <div class="flex-1 bg-emerald-200 bg-hue-rotate-120 h-6" data-test="emerald-200-120"></div>
      <div class="flex-1 bg-emerald-200 bg-hue-rotate-150 h-6" data-test="emerald-200-150"></div>
      <div class="flex-1 bg-emerald-200 bg-hue-rotate-180 h-6" data-test="emerald-200-180"></div>
      <div class="flex-1 bg-emerald-200 bg-hue-rotate-210 h-6" data-test="emerald-200-210"></div>
      <div class="flex-1 bg-emerald-200 bg-hue-rotate-240 h-6" data-test="emerald-200-240"></div>
      <div class="flex-1 bg-emerald-200 bg-hue-rotate-270 h-6" data-test="emerald-200-270"></div>
      <div class="flex-1 bg-emerald-200 bg-hue-rotate-300 h-6" data-test="emerald-200-300"></div>
      <div class="flex-1 bg-emerald-200 bg-hue-rotate-330 h-6" data-test="emerald-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-emerald-300 h-6" data-test="emerald-300-0"></div>
      <div class="flex-1 bg-emerald-300 bg-hue-rotate-30 h-6" data-test="emerald-300-30"></div>
      <div class="flex-1 bg-emerald-300 bg-hue-rotate-60 h-6" data-test="emerald-300-60"></div>
      <div class="flex-1 bg-emerald-300 bg-hue-rotate-90 h-6" data-test="emerald-300-90"></div>
      <div class="flex-1 bg-emerald-300 bg-hue-rotate-120 h-6" data-test="emerald-300-120"></div>
      <div class="flex-1 bg-emerald-300 bg-hue-rotate-150 h-6" data-test="emerald-300-150"></div>
      <div class="flex-1 bg-emerald-300 bg-hue-rotate-180 h-6" data-test="emerald-300-180"></div>
      <div class="flex-1 bg-emerald-300 bg-hue-rotate-210 h-6" data-test="emerald-300-210"></div>
      <div class="flex-1 bg-emerald-300 bg-hue-rotate-240 h-6" data-test="emerald-300-240"></div>
      <div class="flex-1 bg-emerald-300 bg-hue-rotate-270 h-6" data-test="emerald-300-270"></div>
      <div class="flex-1 bg-emerald-300 bg-hue-rotate-300 h-6" data-test="emerald-300-300"></div>
      <div class="flex-1 bg-emerald-300 bg-hue-rotate-330 h-6" data-test="emerald-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-emerald-400 h-6" data-test="emerald-400-0"></div>
      <div class="flex-1 bg-emerald-400 bg-hue-rotate-30 h-6" data-test="emerald-400-30"></div>
      <div class="flex-1 bg-emerald-400 bg-hue-rotate-60 h-6" data-test="emerald-400-60"></div>
      <div class="flex-1 bg-emerald-400 bg-hue-rotate-90 h-6" data-test="emerald-400-90"></div>
      <div class="flex-1 bg-emerald-400 bg-hue-rotate-120 h-6" data-test="emerald-400-120"></div>
      <div class="flex-1 bg-emerald-400 bg-hue-rotate-150 h-6" data-test="emerald-400-150"></div>
      <div class="flex-1 bg-emerald-400 bg-hue-rotate-180 h-6" data-test="emerald-400-180"></div>
      <div class="flex-1 bg-emerald-400 bg-hue-rotate-210 h-6" data-test="emerald-400-210"></div>
      <div class="flex-1 bg-emerald-400 bg-hue-rotate-240 h-6" data-test="emerald-400-240"></div>
      <div class="flex-1 bg-emerald-400 bg-hue-rotate-270 h-6" data-test="emerald-400-270"></div>
      <div class="flex-1 bg-emerald-400 bg-hue-rotate-300 h-6" data-test="emerald-400-300"></div>
      <div class="flex-1 bg-emerald-400 bg-hue-rotate-330 h-6" data-test="emerald-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-emerald-500 h-6" data-test="emerald-500-0"></div>
      <div class="flex-1 bg-emerald-500 bg-hue-rotate-30 h-6" data-test="emerald-500-30"></div>
      <div class="flex-1 bg-emerald-500 bg-hue-rotate-60 h-6" data-test="emerald-500-60"></div>
      <div class="flex-1 bg-emerald-500 bg-hue-rotate-90 h-6" data-test="emerald-500-90"></div>
      <div class="flex-1 bg-emerald-500 bg-hue-rotate-120 h-6" data-test="emerald-500-120"></div>
      <div class="flex-1 bg-emerald-500 bg-hue-rotate-150 h-6" data-test="emerald-500-150"></div>
      <div class="flex-1 bg-emerald-500 bg-hue-rotate-180 h-6" data-test="emerald-500-180"></div>
      <div class="flex-1 bg-emerald-500 bg-hue-rotate-210 h-6" data-test="emerald-500-210"></div>
      <div class="flex-1 bg-emerald-500 bg-hue-rotate-240 h-6" data-test="emerald-500-240"></div>
      <div class="flex-1 bg-emerald-500 bg-hue-rotate-270 h-6" data-test="emerald-500-270"></div>
      <div class="flex-1 bg-emerald-500 bg-hue-rotate-300 h-6" data-test="emerald-500-300"></div>
      <div class="flex-1 bg-emerald-500 bg-hue-rotate-330 h-6" data-test="emerald-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-emerald-600 h-6" data-test="emerald-600-0"></div>
      <div class="flex-1 bg-emerald-600 bg-hue-rotate-30 h-6" data-test="emerald-600-30"></div>
      <div class="flex-1 bg-emerald-600 bg-hue-rotate-60 h-6" data-test="emerald-600-60"></div>
      <div class="flex-1 bg-emerald-600 bg-hue-rotate-90 h-6" data-test="emerald-600-90"></div>
      <div class="flex-1 bg-emerald-600 bg-hue-rotate-120 h-6" data-test="emerald-600-120"></div>
      <div class="flex-1 bg-emerald-600 bg-hue-rotate-150 h-6" data-test="emerald-600-150"></div>
      <div class="flex-1 bg-emerald-600 bg-hue-rotate-180 h-6" data-test="emerald-600-180"></div>
      <div class="flex-1 bg-emerald-600 bg-hue-rotate-210 h-6" data-test="emerald-600-210"></div>
      <div class="flex-1 bg-emerald-600 bg-hue-rotate-240 h-6" data-test="emerald-600-240"></div>
      <div class="flex-1 bg-emerald-600 bg-hue-rotate-270 h-6" data-test="emerald-600-270"></div>
      <div class="flex-1 bg-emerald-600 bg-hue-rotate-300 h-6" data-test="emerald-600-300"></div>
      <div class="flex-1 bg-emerald-600 bg-hue-rotate-330 h-6" data-test="emerald-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-emerald-700 h-6" data-test="emerald-700-0"></div>
      <div class="flex-1 bg-emerald-700 bg-hue-rotate-30 h-6" data-test="emerald-700-30"></div>
      <div class="flex-1 bg-emerald-700 bg-hue-rotate-60 h-6" data-test="emerald-700-60"></div>
      <div class="flex-1 bg-emerald-700 bg-hue-rotate-90 h-6" data-test="emerald-700-90"></div>
      <div class="flex-1 bg-emerald-700 bg-hue-rotate-120 h-6" data-test="emerald-700-120"></div>
      <div class="flex-1 bg-emerald-700 bg-hue-rotate-150 h-6" data-test="emerald-700-150"></div>
      <div class="flex-1 bg-emerald-700 bg-hue-rotate-180 h-6" data-test="emerald-700-180"></div>
      <div class="flex-1 bg-emerald-700 bg-hue-rotate-210 h-6" data-test="emerald-700-210"></div>
      <div class="flex-1 bg-emerald-700 bg-hue-rotate-240 h-6" data-test="emerald-700-240"></div>
      <div class="flex-1 bg-emerald-700 bg-hue-rotate-270 h-6" data-test="emerald-700-270"></div>
      <div class="flex-1 bg-emerald-700 bg-hue-rotate-300 h-6" data-test="emerald-700-300"></div>
      <div class="flex-1 bg-emerald-700 bg-hue-rotate-330 h-6" data-test="emerald-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-emerald-800 h-6" data-test="emerald-800-0"></div>
      <div class="flex-1 bg-emerald-800 bg-hue-rotate-30 h-6" data-test="emerald-800-30"></div>
      <div class="flex-1 bg-emerald-800 bg-hue-rotate-60 h-6" data-test="emerald-800-60"></div>
      <div class="flex-1 bg-emerald-800 bg-hue-rotate-90 h-6" data-test="emerald-800-90"></div>
      <div class="flex-1 bg-emerald-800 bg-hue-rotate-120 h-6" data-test="emerald-800-120"></div>
      <div class="flex-1 bg-emerald-800 bg-hue-rotate-150 h-6" data-test="emerald-800-150"></div>
      <div class="flex-1 bg-emerald-800 bg-hue-rotate-180 h-6" data-test="emerald-800-180"></div>
      <div class="flex-1 bg-emerald-800 bg-hue-rotate-210 h-6" data-test="emerald-800-210"></div>
      <div class="flex-1 bg-emerald-800 bg-hue-rotate-240 h-6" data-test="emerald-800-240"></div>
      <div class="flex-1 bg-emerald-800 bg-hue-rotate-270 h-6" data-test="emerald-800-270"></div>
      <div class="flex-1 bg-emerald-800 bg-hue-rotate-300 h-6" data-test="emerald-800-300"></div>
      <div class="flex-1 bg-emerald-800 bg-hue-rotate-330 h-6" data-test="emerald-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-emerald-900 h-6" data-test="emerald-900-0"></div>
      <div class="flex-1 bg-emerald-900 bg-hue-rotate-30 h-6" data-test="emerald-900-30"></div>
      <div class="flex-1 bg-emerald-900 bg-hue-rotate-60 h-6" data-test="emerald-900-60"></div>
      <div class="flex-1 bg-emerald-900 bg-hue-rotate-90 h-6" data-test="emerald-900-90"></div>
      <div class="flex-1 bg-emerald-900 bg-hue-rotate-120 h-6" data-test="emerald-900-120"></div>
      <div class="flex-1 bg-emerald-900 bg-hue-rotate-150 h-6" data-test="emerald-900-150"></div>
      <div class="flex-1 bg-emerald-900 bg-hue-rotate-180 h-6" data-test="emerald-900-180"></div>
      <div class="flex-1 bg-emerald-900 bg-hue-rotate-210 h-6" data-test="emerald-900-210"></div>
      <div class="flex-1 bg-emerald-900 bg-hue-rotate-240 h-6" data-test="emerald-900-240"></div>
      <div class="flex-1 bg-emerald-900 bg-hue-rotate-270 h-6" data-test="emerald-900-270"></div>
      <div class="flex-1 bg-emerald-900 bg-hue-rotate-300 h-6" data-test="emerald-900-300"></div>
      <div class="flex-1 bg-emerald-900 bg-hue-rotate-330 h-6" data-test="emerald-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-emerald-950 h-6" data-test="emerald-950-0"></div>
      <div class="flex-1 bg-emerald-950 bg-hue-rotate-30 h-6" data-test="emerald-950-30"></div>
      <div class="flex-1 bg-emerald-950 bg-hue-rotate-60 h-6" data-test="emerald-950-60"></div>
      <div class="flex-1 bg-emerald-950 bg-hue-rotate-90 h-6" data-test="emerald-950-90"></div>
      <div class="flex-1 bg-emerald-950 bg-hue-rotate-120 h-6" data-test="emerald-950-120"></div>
      <div class="flex-1 bg-emerald-950 bg-hue-rotate-150 h-6" data-test="emerald-950-150"></div>
      <div class="flex-1 bg-emerald-950 bg-hue-rotate-180 h-6" data-test="emerald-950-180"></div>
      <div class="flex-1 bg-emerald-950 bg-hue-rotate-210 h-6" data-test="emerald-950-210"></div>
      <div class="flex-1 bg-emerald-950 bg-hue-rotate-240 h-6" data-test="emerald-950-240"></div>
      <div class="flex-1 bg-emerald-950 bg-hue-rotate-270 h-6" data-test="emerald-950-270"></div>
      <div class="flex-1 bg-emerald-950 bg-hue-rotate-300 h-6" data-test="emerald-950-300"></div>
      <div class="flex-1 bg-emerald-950 bg-hue-rotate-330 h-6" data-test="emerald-950-330"></div>
    </div>
  </div>
</div>

### teal

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-teal-50 h-6" data-test="teal-50-0"></div>
      <div class="flex-1 bg-teal-50 bg-hue-rotate-30 h-6" data-test="teal-50-30"></div>
      <div class="flex-1 bg-teal-50 bg-hue-rotate-60 h-6" data-test="teal-50-60"></div>
      <div class="flex-1 bg-teal-50 bg-hue-rotate-90 h-6" data-test="teal-50-90"></div>
      <div class="flex-1 bg-teal-50 bg-hue-rotate-120 h-6" data-test="teal-50-120"></div>
      <div class="flex-1 bg-teal-50 bg-hue-rotate-150 h-6" data-test="teal-50-150"></div>
      <div class="flex-1 bg-teal-50 bg-hue-rotate-180 h-6" data-test="teal-50-180"></div>
      <div class="flex-1 bg-teal-50 bg-hue-rotate-210 h-6" data-test="teal-50-210"></div>
      <div class="flex-1 bg-teal-50 bg-hue-rotate-240 h-6" data-test="teal-50-240"></div>
      <div class="flex-1 bg-teal-50 bg-hue-rotate-270 h-6" data-test="teal-50-270"></div>
      <div class="flex-1 bg-teal-50 bg-hue-rotate-300 h-6" data-test="teal-50-300"></div>
      <div class="flex-1 bg-teal-50 bg-hue-rotate-330 h-6" data-test="teal-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-teal-100 h-6" data-test="teal-100-0"></div>
      <div class="flex-1 bg-teal-100 bg-hue-rotate-30 h-6" data-test="teal-100-30"></div>
      <div class="flex-1 bg-teal-100 bg-hue-rotate-60 h-6" data-test="teal-100-60"></div>
      <div class="flex-1 bg-teal-100 bg-hue-rotate-90 h-6" data-test="teal-100-90"></div>
      <div class="flex-1 bg-teal-100 bg-hue-rotate-120 h-6" data-test="teal-100-120"></div>
      <div class="flex-1 bg-teal-100 bg-hue-rotate-150 h-6" data-test="teal-100-150"></div>
      <div class="flex-1 bg-teal-100 bg-hue-rotate-180 h-6" data-test="teal-100-180"></div>
      <div class="flex-1 bg-teal-100 bg-hue-rotate-210 h-6" data-test="teal-100-210"></div>
      <div class="flex-1 bg-teal-100 bg-hue-rotate-240 h-6" data-test="teal-100-240"></div>
      <div class="flex-1 bg-teal-100 bg-hue-rotate-270 h-6" data-test="teal-100-270"></div>
      <div class="flex-1 bg-teal-100 bg-hue-rotate-300 h-6" data-test="teal-100-300"></div>
      <div class="flex-1 bg-teal-100 bg-hue-rotate-330 h-6" data-test="teal-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-teal-200 h-6" data-test="teal-200-0"></div>
      <div class="flex-1 bg-teal-200 bg-hue-rotate-30 h-6" data-test="teal-200-30"></div>
      <div class="flex-1 bg-teal-200 bg-hue-rotate-60 h-6" data-test="teal-200-60"></div>
      <div class="flex-1 bg-teal-200 bg-hue-rotate-90 h-6" data-test="teal-200-90"></div>
      <div class="flex-1 bg-teal-200 bg-hue-rotate-120 h-6" data-test="teal-200-120"></div>
      <div class="flex-1 bg-teal-200 bg-hue-rotate-150 h-6" data-test="teal-200-150"></div>
      <div class="flex-1 bg-teal-200 bg-hue-rotate-180 h-6" data-test="teal-200-180"></div>
      <div class="flex-1 bg-teal-200 bg-hue-rotate-210 h-6" data-test="teal-200-210"></div>
      <div class="flex-1 bg-teal-200 bg-hue-rotate-240 h-6" data-test="teal-200-240"></div>
      <div class="flex-1 bg-teal-200 bg-hue-rotate-270 h-6" data-test="teal-200-270"></div>
      <div class="flex-1 bg-teal-200 bg-hue-rotate-300 h-6" data-test="teal-200-300"></div>
      <div class="flex-1 bg-teal-200 bg-hue-rotate-330 h-6" data-test="teal-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-teal-300 h-6" data-test="teal-300-0"></div>
      <div class="flex-1 bg-teal-300 bg-hue-rotate-30 h-6" data-test="teal-300-30"></div>
      <div class="flex-1 bg-teal-300 bg-hue-rotate-60 h-6" data-test="teal-300-60"></div>
      <div class="flex-1 bg-teal-300 bg-hue-rotate-90 h-6" data-test="teal-300-90"></div>
      <div class="flex-1 bg-teal-300 bg-hue-rotate-120 h-6" data-test="teal-300-120"></div>
      <div class="flex-1 bg-teal-300 bg-hue-rotate-150 h-6" data-test="teal-300-150"></div>
      <div class="flex-1 bg-teal-300 bg-hue-rotate-180 h-6" data-test="teal-300-180"></div>
      <div class="flex-1 bg-teal-300 bg-hue-rotate-210 h-6" data-test="teal-300-210"></div>
      <div class="flex-1 bg-teal-300 bg-hue-rotate-240 h-6" data-test="teal-300-240"></div>
      <div class="flex-1 bg-teal-300 bg-hue-rotate-270 h-6" data-test="teal-300-270"></div>
      <div class="flex-1 bg-teal-300 bg-hue-rotate-300 h-6" data-test="teal-300-300"></div>
      <div class="flex-1 bg-teal-300 bg-hue-rotate-330 h-6" data-test="teal-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-teal-400 h-6" data-test="teal-400-0"></div>
      <div class="flex-1 bg-teal-400 bg-hue-rotate-30 h-6" data-test="teal-400-30"></div>
      <div class="flex-1 bg-teal-400 bg-hue-rotate-60 h-6" data-test="teal-400-60"></div>
      <div class="flex-1 bg-teal-400 bg-hue-rotate-90 h-6" data-test="teal-400-90"></div>
      <div class="flex-1 bg-teal-400 bg-hue-rotate-120 h-6" data-test="teal-400-120"></div>
      <div class="flex-1 bg-teal-400 bg-hue-rotate-150 h-6" data-test="teal-400-150"></div>
      <div class="flex-1 bg-teal-400 bg-hue-rotate-180 h-6" data-test="teal-400-180"></div>
      <div class="flex-1 bg-teal-400 bg-hue-rotate-210 h-6" data-test="teal-400-210"></div>
      <div class="flex-1 bg-teal-400 bg-hue-rotate-240 h-6" data-test="teal-400-240"></div>
      <div class="flex-1 bg-teal-400 bg-hue-rotate-270 h-6" data-test="teal-400-270"></div>
      <div class="flex-1 bg-teal-400 bg-hue-rotate-300 h-6" data-test="teal-400-300"></div>
      <div class="flex-1 bg-teal-400 bg-hue-rotate-330 h-6" data-test="teal-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-teal-500 h-6" data-test="teal-500-0"></div>
      <div class="flex-1 bg-teal-500 bg-hue-rotate-30 h-6" data-test="teal-500-30"></div>
      <div class="flex-1 bg-teal-500 bg-hue-rotate-60 h-6" data-test="teal-500-60"></div>
      <div class="flex-1 bg-teal-500 bg-hue-rotate-90 h-6" data-test="teal-500-90"></div>
      <div class="flex-1 bg-teal-500 bg-hue-rotate-120 h-6" data-test="teal-500-120"></div>
      <div class="flex-1 bg-teal-500 bg-hue-rotate-150 h-6" data-test="teal-500-150"></div>
      <div class="flex-1 bg-teal-500 bg-hue-rotate-180 h-6" data-test="teal-500-180"></div>
      <div class="flex-1 bg-teal-500 bg-hue-rotate-210 h-6" data-test="teal-500-210"></div>
      <div class="flex-1 bg-teal-500 bg-hue-rotate-240 h-6" data-test="teal-500-240"></div>
      <div class="flex-1 bg-teal-500 bg-hue-rotate-270 h-6" data-test="teal-500-270"></div>
      <div class="flex-1 bg-teal-500 bg-hue-rotate-300 h-6" data-test="teal-500-300"></div>
      <div class="flex-1 bg-teal-500 bg-hue-rotate-330 h-6" data-test="teal-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-teal-600 h-6" data-test="teal-600-0"></div>
      <div class="flex-1 bg-teal-600 bg-hue-rotate-30 h-6" data-test="teal-600-30"></div>
      <div class="flex-1 bg-teal-600 bg-hue-rotate-60 h-6" data-test="teal-600-60"></div>
      <div class="flex-1 bg-teal-600 bg-hue-rotate-90 h-6" data-test="teal-600-90"></div>
      <div class="flex-1 bg-teal-600 bg-hue-rotate-120 h-6" data-test="teal-600-120"></div>
      <div class="flex-1 bg-teal-600 bg-hue-rotate-150 h-6" data-test="teal-600-150"></div>
      <div class="flex-1 bg-teal-600 bg-hue-rotate-180 h-6" data-test="teal-600-180"></div>
      <div class="flex-1 bg-teal-600 bg-hue-rotate-210 h-6" data-test="teal-600-210"></div>
      <div class="flex-1 bg-teal-600 bg-hue-rotate-240 h-6" data-test="teal-600-240"></div>
      <div class="flex-1 bg-teal-600 bg-hue-rotate-270 h-6" data-test="teal-600-270"></div>
      <div class="flex-1 bg-teal-600 bg-hue-rotate-300 h-6" data-test="teal-600-300"></div>
      <div class="flex-1 bg-teal-600 bg-hue-rotate-330 h-6" data-test="teal-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-teal-700 h-6" data-test="teal-700-0"></div>
      <div class="flex-1 bg-teal-700 bg-hue-rotate-30 h-6" data-test="teal-700-30"></div>
      <div class="flex-1 bg-teal-700 bg-hue-rotate-60 h-6" data-test="teal-700-60"></div>
      <div class="flex-1 bg-teal-700 bg-hue-rotate-90 h-6" data-test="teal-700-90"></div>
      <div class="flex-1 bg-teal-700 bg-hue-rotate-120 h-6" data-test="teal-700-120"></div>
      <div class="flex-1 bg-teal-700 bg-hue-rotate-150 h-6" data-test="teal-700-150"></div>
      <div class="flex-1 bg-teal-700 bg-hue-rotate-180 h-6" data-test="teal-700-180"></div>
      <div class="flex-1 bg-teal-700 bg-hue-rotate-210 h-6" data-test="teal-700-210"></div>
      <div class="flex-1 bg-teal-700 bg-hue-rotate-240 h-6" data-test="teal-700-240"></div>
      <div class="flex-1 bg-teal-700 bg-hue-rotate-270 h-6" data-test="teal-700-270"></div>
      <div class="flex-1 bg-teal-700 bg-hue-rotate-300 h-6" data-test="teal-700-300"></div>
      <div class="flex-1 bg-teal-700 bg-hue-rotate-330 h-6" data-test="teal-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-teal-800 h-6" data-test="teal-800-0"></div>
      <div class="flex-1 bg-teal-800 bg-hue-rotate-30 h-6" data-test="teal-800-30"></div>
      <div class="flex-1 bg-teal-800 bg-hue-rotate-60 h-6" data-test="teal-800-60"></div>
      <div class="flex-1 bg-teal-800 bg-hue-rotate-90 h-6" data-test="teal-800-90"></div>
      <div class="flex-1 bg-teal-800 bg-hue-rotate-120 h-6" data-test="teal-800-120"></div>
      <div class="flex-1 bg-teal-800 bg-hue-rotate-150 h-6" data-test="teal-800-150"></div>
      <div class="flex-1 bg-teal-800 bg-hue-rotate-180 h-6" data-test="teal-800-180"></div>
      <div class="flex-1 bg-teal-800 bg-hue-rotate-210 h-6" data-test="teal-800-210"></div>
      <div class="flex-1 bg-teal-800 bg-hue-rotate-240 h-6" data-test="teal-800-240"></div>
      <div class="flex-1 bg-teal-800 bg-hue-rotate-270 h-6" data-test="teal-800-270"></div>
      <div class="flex-1 bg-teal-800 bg-hue-rotate-300 h-6" data-test="teal-800-300"></div>
      <div class="flex-1 bg-teal-800 bg-hue-rotate-330 h-6" data-test="teal-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-teal-900 h-6" data-test="teal-900-0"></div>
      <div class="flex-1 bg-teal-900 bg-hue-rotate-30 h-6" data-test="teal-900-30"></div>
      <div class="flex-1 bg-teal-900 bg-hue-rotate-60 h-6" data-test="teal-900-60"></div>
      <div class="flex-1 bg-teal-900 bg-hue-rotate-90 h-6" data-test="teal-900-90"></div>
      <div class="flex-1 bg-teal-900 bg-hue-rotate-120 h-6" data-test="teal-900-120"></div>
      <div class="flex-1 bg-teal-900 bg-hue-rotate-150 h-6" data-test="teal-900-150"></div>
      <div class="flex-1 bg-teal-900 bg-hue-rotate-180 h-6" data-test="teal-900-180"></div>
      <div class="flex-1 bg-teal-900 bg-hue-rotate-210 h-6" data-test="teal-900-210"></div>
      <div class="flex-1 bg-teal-900 bg-hue-rotate-240 h-6" data-test="teal-900-240"></div>
      <div class="flex-1 bg-teal-900 bg-hue-rotate-270 h-6" data-test="teal-900-270"></div>
      <div class="flex-1 bg-teal-900 bg-hue-rotate-300 h-6" data-test="teal-900-300"></div>
      <div class="flex-1 bg-teal-900 bg-hue-rotate-330 h-6" data-test="teal-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-teal-950 h-6" data-test="teal-950-0"></div>
      <div class="flex-1 bg-teal-950 bg-hue-rotate-30 h-6" data-test="teal-950-30"></div>
      <div class="flex-1 bg-teal-950 bg-hue-rotate-60 h-6" data-test="teal-950-60"></div>
      <div class="flex-1 bg-teal-950 bg-hue-rotate-90 h-6" data-test="teal-950-90"></div>
      <div class="flex-1 bg-teal-950 bg-hue-rotate-120 h-6" data-test="teal-950-120"></div>
      <div class="flex-1 bg-teal-950 bg-hue-rotate-150 h-6" data-test="teal-950-150"></div>
      <div class="flex-1 bg-teal-950 bg-hue-rotate-180 h-6" data-test="teal-950-180"></div>
      <div class="flex-1 bg-teal-950 bg-hue-rotate-210 h-6" data-test="teal-950-210"></div>
      <div class="flex-1 bg-teal-950 bg-hue-rotate-240 h-6" data-test="teal-950-240"></div>
      <div class="flex-1 bg-teal-950 bg-hue-rotate-270 h-6" data-test="teal-950-270"></div>
      <div class="flex-1 bg-teal-950 bg-hue-rotate-300 h-6" data-test="teal-950-300"></div>
      <div class="flex-1 bg-teal-950 bg-hue-rotate-330 h-6" data-test="teal-950-330"></div>
    </div>
  </div>
</div>

### cyan

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-cyan-50 h-6" data-test="cyan-50-0"></div>
      <div class="flex-1 bg-cyan-50 bg-hue-rotate-30 h-6" data-test="cyan-50-30"></div>
      <div class="flex-1 bg-cyan-50 bg-hue-rotate-60 h-6" data-test="cyan-50-60"></div>
      <div class="flex-1 bg-cyan-50 bg-hue-rotate-90 h-6" data-test="cyan-50-90"></div>
      <div class="flex-1 bg-cyan-50 bg-hue-rotate-120 h-6" data-test="cyan-50-120"></div>
      <div class="flex-1 bg-cyan-50 bg-hue-rotate-150 h-6" data-test="cyan-50-150"></div>
      <div class="flex-1 bg-cyan-50 bg-hue-rotate-180 h-6" data-test="cyan-50-180"></div>
      <div class="flex-1 bg-cyan-50 bg-hue-rotate-210 h-6" data-test="cyan-50-210"></div>
      <div class="flex-1 bg-cyan-50 bg-hue-rotate-240 h-6" data-test="cyan-50-240"></div>
      <div class="flex-1 bg-cyan-50 bg-hue-rotate-270 h-6" data-test="cyan-50-270"></div>
      <div class="flex-1 bg-cyan-50 bg-hue-rotate-300 h-6" data-test="cyan-50-300"></div>
      <div class="flex-1 bg-cyan-50 bg-hue-rotate-330 h-6" data-test="cyan-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-cyan-100 h-6" data-test="cyan-100-0"></div>
      <div class="flex-1 bg-cyan-100 bg-hue-rotate-30 h-6" data-test="cyan-100-30"></div>
      <div class="flex-1 bg-cyan-100 bg-hue-rotate-60 h-6" data-test="cyan-100-60"></div>
      <div class="flex-1 bg-cyan-100 bg-hue-rotate-90 h-6" data-test="cyan-100-90"></div>
      <div class="flex-1 bg-cyan-100 bg-hue-rotate-120 h-6" data-test="cyan-100-120"></div>
      <div class="flex-1 bg-cyan-100 bg-hue-rotate-150 h-6" data-test="cyan-100-150"></div>
      <div class="flex-1 bg-cyan-100 bg-hue-rotate-180 h-6" data-test="cyan-100-180"></div>
      <div class="flex-1 bg-cyan-100 bg-hue-rotate-210 h-6" data-test="cyan-100-210"></div>
      <div class="flex-1 bg-cyan-100 bg-hue-rotate-240 h-6" data-test="cyan-100-240"></div>
      <div class="flex-1 bg-cyan-100 bg-hue-rotate-270 h-6" data-test="cyan-100-270"></div>
      <div class="flex-1 bg-cyan-100 bg-hue-rotate-300 h-6" data-test="cyan-100-300"></div>
      <div class="flex-1 bg-cyan-100 bg-hue-rotate-330 h-6" data-test="cyan-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-cyan-200 h-6" data-test="cyan-200-0"></div>
      <div class="flex-1 bg-cyan-200 bg-hue-rotate-30 h-6" data-test="cyan-200-30"></div>
      <div class="flex-1 bg-cyan-200 bg-hue-rotate-60 h-6" data-test="cyan-200-60"></div>
      <div class="flex-1 bg-cyan-200 bg-hue-rotate-90 h-6" data-test="cyan-200-90"></div>
      <div class="flex-1 bg-cyan-200 bg-hue-rotate-120 h-6" data-test="cyan-200-120"></div>
      <div class="flex-1 bg-cyan-200 bg-hue-rotate-150 h-6" data-test="cyan-200-150"></div>
      <div class="flex-1 bg-cyan-200 bg-hue-rotate-180 h-6" data-test="cyan-200-180"></div>
      <div class="flex-1 bg-cyan-200 bg-hue-rotate-210 h-6" data-test="cyan-200-210"></div>
      <div class="flex-1 bg-cyan-200 bg-hue-rotate-240 h-6" data-test="cyan-200-240"></div>
      <div class="flex-1 bg-cyan-200 bg-hue-rotate-270 h-6" data-test="cyan-200-270"></div>
      <div class="flex-1 bg-cyan-200 bg-hue-rotate-300 h-6" data-test="cyan-200-300"></div>
      <div class="flex-1 bg-cyan-200 bg-hue-rotate-330 h-6" data-test="cyan-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-cyan-300 h-6" data-test="cyan-300-0"></div>
      <div class="flex-1 bg-cyan-300 bg-hue-rotate-30 h-6" data-test="cyan-300-30"></div>
      <div class="flex-1 bg-cyan-300 bg-hue-rotate-60 h-6" data-test="cyan-300-60"></div>
      <div class="flex-1 bg-cyan-300 bg-hue-rotate-90 h-6" data-test="cyan-300-90"></div>
      <div class="flex-1 bg-cyan-300 bg-hue-rotate-120 h-6" data-test="cyan-300-120"></div>
      <div class="flex-1 bg-cyan-300 bg-hue-rotate-150 h-6" data-test="cyan-300-150"></div>
      <div class="flex-1 bg-cyan-300 bg-hue-rotate-180 h-6" data-test="cyan-300-180"></div>
      <div class="flex-1 bg-cyan-300 bg-hue-rotate-210 h-6" data-test="cyan-300-210"></div>
      <div class="flex-1 bg-cyan-300 bg-hue-rotate-240 h-6" data-test="cyan-300-240"></div>
      <div class="flex-1 bg-cyan-300 bg-hue-rotate-270 h-6" data-test="cyan-300-270"></div>
      <div class="flex-1 bg-cyan-300 bg-hue-rotate-300 h-6" data-test="cyan-300-300"></div>
      <div class="flex-1 bg-cyan-300 bg-hue-rotate-330 h-6" data-test="cyan-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-cyan-400 h-6" data-test="cyan-400-0"></div>
      <div class="flex-1 bg-cyan-400 bg-hue-rotate-30 h-6" data-test="cyan-400-30"></div>
      <div class="flex-1 bg-cyan-400 bg-hue-rotate-60 h-6" data-test="cyan-400-60"></div>
      <div class="flex-1 bg-cyan-400 bg-hue-rotate-90 h-6" data-test="cyan-400-90"></div>
      <div class="flex-1 bg-cyan-400 bg-hue-rotate-120 h-6" data-test="cyan-400-120"></div>
      <div class="flex-1 bg-cyan-400 bg-hue-rotate-150 h-6" data-test="cyan-400-150"></div>
      <div class="flex-1 bg-cyan-400 bg-hue-rotate-180 h-6" data-test="cyan-400-180"></div>
      <div class="flex-1 bg-cyan-400 bg-hue-rotate-210 h-6" data-test="cyan-400-210"></div>
      <div class="flex-1 bg-cyan-400 bg-hue-rotate-240 h-6" data-test="cyan-400-240"></div>
      <div class="flex-1 bg-cyan-400 bg-hue-rotate-270 h-6" data-test="cyan-400-270"></div>
      <div class="flex-1 bg-cyan-400 bg-hue-rotate-300 h-6" data-test="cyan-400-300"></div>
      <div class="flex-1 bg-cyan-400 bg-hue-rotate-330 h-6" data-test="cyan-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-cyan-500 h-6" data-test="cyan-500-0"></div>
      <div class="flex-1 bg-cyan-500 bg-hue-rotate-30 h-6" data-test="cyan-500-30"></div>
      <div class="flex-1 bg-cyan-500 bg-hue-rotate-60 h-6" data-test="cyan-500-60"></div>
      <div class="flex-1 bg-cyan-500 bg-hue-rotate-90 h-6" data-test="cyan-500-90"></div>
      <div class="flex-1 bg-cyan-500 bg-hue-rotate-120 h-6" data-test="cyan-500-120"></div>
      <div class="flex-1 bg-cyan-500 bg-hue-rotate-150 h-6" data-test="cyan-500-150"></div>
      <div class="flex-1 bg-cyan-500 bg-hue-rotate-180 h-6" data-test="cyan-500-180"></div>
      <div class="flex-1 bg-cyan-500 bg-hue-rotate-210 h-6" data-test="cyan-500-210"></div>
      <div class="flex-1 bg-cyan-500 bg-hue-rotate-240 h-6" data-test="cyan-500-240"></div>
      <div class="flex-1 bg-cyan-500 bg-hue-rotate-270 h-6" data-test="cyan-500-270"></div>
      <div class="flex-1 bg-cyan-500 bg-hue-rotate-300 h-6" data-test="cyan-500-300"></div>
      <div class="flex-1 bg-cyan-500 bg-hue-rotate-330 h-6" data-test="cyan-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-cyan-600 h-6" data-test="cyan-600-0"></div>
      <div class="flex-1 bg-cyan-600 bg-hue-rotate-30 h-6" data-test="cyan-600-30"></div>
      <div class="flex-1 bg-cyan-600 bg-hue-rotate-60 h-6" data-test="cyan-600-60"></div>
      <div class="flex-1 bg-cyan-600 bg-hue-rotate-90 h-6" data-test="cyan-600-90"></div>
      <div class="flex-1 bg-cyan-600 bg-hue-rotate-120 h-6" data-test="cyan-600-120"></div>
      <div class="flex-1 bg-cyan-600 bg-hue-rotate-150 h-6" data-test="cyan-600-150"></div>
      <div class="flex-1 bg-cyan-600 bg-hue-rotate-180 h-6" data-test="cyan-600-180"></div>
      <div class="flex-1 bg-cyan-600 bg-hue-rotate-210 h-6" data-test="cyan-600-210"></div>
      <div class="flex-1 bg-cyan-600 bg-hue-rotate-240 h-6" data-test="cyan-600-240"></div>
      <div class="flex-1 bg-cyan-600 bg-hue-rotate-270 h-6" data-test="cyan-600-270"></div>
      <div class="flex-1 bg-cyan-600 bg-hue-rotate-300 h-6" data-test="cyan-600-300"></div>
      <div class="flex-1 bg-cyan-600 bg-hue-rotate-330 h-6" data-test="cyan-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-cyan-700 h-6" data-test="cyan-700-0"></div>
      <div class="flex-1 bg-cyan-700 bg-hue-rotate-30 h-6" data-test="cyan-700-30"></div>
      <div class="flex-1 bg-cyan-700 bg-hue-rotate-60 h-6" data-test="cyan-700-60"></div>
      <div class="flex-1 bg-cyan-700 bg-hue-rotate-90 h-6" data-test="cyan-700-90"></div>
      <div class="flex-1 bg-cyan-700 bg-hue-rotate-120 h-6" data-test="cyan-700-120"></div>
      <div class="flex-1 bg-cyan-700 bg-hue-rotate-150 h-6" data-test="cyan-700-150"></div>
      <div class="flex-1 bg-cyan-700 bg-hue-rotate-180 h-6" data-test="cyan-700-180"></div>
      <div class="flex-1 bg-cyan-700 bg-hue-rotate-210 h-6" data-test="cyan-700-210"></div>
      <div class="flex-1 bg-cyan-700 bg-hue-rotate-240 h-6" data-test="cyan-700-240"></div>
      <div class="flex-1 bg-cyan-700 bg-hue-rotate-270 h-6" data-test="cyan-700-270"></div>
      <div class="flex-1 bg-cyan-700 bg-hue-rotate-300 h-6" data-test="cyan-700-300"></div>
      <div class="flex-1 bg-cyan-700 bg-hue-rotate-330 h-6" data-test="cyan-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-cyan-800 h-6" data-test="cyan-800-0"></div>
      <div class="flex-1 bg-cyan-800 bg-hue-rotate-30 h-6" data-test="cyan-800-30"></div>
      <div class="flex-1 bg-cyan-800 bg-hue-rotate-60 h-6" data-test="cyan-800-60"></div>
      <div class="flex-1 bg-cyan-800 bg-hue-rotate-90 h-6" data-test="cyan-800-90"></div>
      <div class="flex-1 bg-cyan-800 bg-hue-rotate-120 h-6" data-test="cyan-800-120"></div>
      <div class="flex-1 bg-cyan-800 bg-hue-rotate-150 h-6" data-test="cyan-800-150"></div>
      <div class="flex-1 bg-cyan-800 bg-hue-rotate-180 h-6" data-test="cyan-800-180"></div>
      <div class="flex-1 bg-cyan-800 bg-hue-rotate-210 h-6" data-test="cyan-800-210"></div>
      <div class="flex-1 bg-cyan-800 bg-hue-rotate-240 h-6" data-test="cyan-800-240"></div>
      <div class="flex-1 bg-cyan-800 bg-hue-rotate-270 h-6" data-test="cyan-800-270"></div>
      <div class="flex-1 bg-cyan-800 bg-hue-rotate-300 h-6" data-test="cyan-800-300"></div>
      <div class="flex-1 bg-cyan-800 bg-hue-rotate-330 h-6" data-test="cyan-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-cyan-900 h-6" data-test="cyan-900-0"></div>
      <div class="flex-1 bg-cyan-900 bg-hue-rotate-30 h-6" data-test="cyan-900-30"></div>
      <div class="flex-1 bg-cyan-900 bg-hue-rotate-60 h-6" data-test="cyan-900-60"></div>
      <div class="flex-1 bg-cyan-900 bg-hue-rotate-90 h-6" data-test="cyan-900-90"></div>
      <div class="flex-1 bg-cyan-900 bg-hue-rotate-120 h-6" data-test="cyan-900-120"></div>
      <div class="flex-1 bg-cyan-900 bg-hue-rotate-150 h-6" data-test="cyan-900-150"></div>
      <div class="flex-1 bg-cyan-900 bg-hue-rotate-180 h-6" data-test="cyan-900-180"></div>
      <div class="flex-1 bg-cyan-900 bg-hue-rotate-210 h-6" data-test="cyan-900-210"></div>
      <div class="flex-1 bg-cyan-900 bg-hue-rotate-240 h-6" data-test="cyan-900-240"></div>
      <div class="flex-1 bg-cyan-900 bg-hue-rotate-270 h-6" data-test="cyan-900-270"></div>
      <div class="flex-1 bg-cyan-900 bg-hue-rotate-300 h-6" data-test="cyan-900-300"></div>
      <div class="flex-1 bg-cyan-900 bg-hue-rotate-330 h-6" data-test="cyan-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-cyan-950 h-6" data-test="cyan-950-0"></div>
      <div class="flex-1 bg-cyan-950 bg-hue-rotate-30 h-6" data-test="cyan-950-30"></div>
      <div class="flex-1 bg-cyan-950 bg-hue-rotate-60 h-6" data-test="cyan-950-60"></div>
      <div class="flex-1 bg-cyan-950 bg-hue-rotate-90 h-6" data-test="cyan-950-90"></div>
      <div class="flex-1 bg-cyan-950 bg-hue-rotate-120 h-6" data-test="cyan-950-120"></div>
      <div class="flex-1 bg-cyan-950 bg-hue-rotate-150 h-6" data-test="cyan-950-150"></div>
      <div class="flex-1 bg-cyan-950 bg-hue-rotate-180 h-6" data-test="cyan-950-180"></div>
      <div class="flex-1 bg-cyan-950 bg-hue-rotate-210 h-6" data-test="cyan-950-210"></div>
      <div class="flex-1 bg-cyan-950 bg-hue-rotate-240 h-6" data-test="cyan-950-240"></div>
      <div class="flex-1 bg-cyan-950 bg-hue-rotate-270 h-6" data-test="cyan-950-270"></div>
      <div class="flex-1 bg-cyan-950 bg-hue-rotate-300 h-6" data-test="cyan-950-300"></div>
      <div class="flex-1 bg-cyan-950 bg-hue-rotate-330 h-6" data-test="cyan-950-330"></div>
    </div>
  </div>
</div>

### sky

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-sky-50 h-6" data-test="sky-50-0"></div>
      <div class="flex-1 bg-sky-50 bg-hue-rotate-30 h-6" data-test="sky-50-30"></div>
      <div class="flex-1 bg-sky-50 bg-hue-rotate-60 h-6" data-test="sky-50-60"></div>
      <div class="flex-1 bg-sky-50 bg-hue-rotate-90 h-6" data-test="sky-50-90"></div>
      <div class="flex-1 bg-sky-50 bg-hue-rotate-120 h-6" data-test="sky-50-120"></div>
      <div class="flex-1 bg-sky-50 bg-hue-rotate-150 h-6" data-test="sky-50-150"></div>
      <div class="flex-1 bg-sky-50 bg-hue-rotate-180 h-6" data-test="sky-50-180"></div>
      <div class="flex-1 bg-sky-50 bg-hue-rotate-210 h-6" data-test="sky-50-210"></div>
      <div class="flex-1 bg-sky-50 bg-hue-rotate-240 h-6" data-test="sky-50-240"></div>
      <div class="flex-1 bg-sky-50 bg-hue-rotate-270 h-6" data-test="sky-50-270"></div>
      <div class="flex-1 bg-sky-50 bg-hue-rotate-300 h-6" data-test="sky-50-300"></div>
      <div class="flex-1 bg-sky-50 bg-hue-rotate-330 h-6" data-test="sky-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-sky-100 h-6" data-test="sky-100-0"></div>
      <div class="flex-1 bg-sky-100 bg-hue-rotate-30 h-6" data-test="sky-100-30"></div>
      <div class="flex-1 bg-sky-100 bg-hue-rotate-60 h-6" data-test="sky-100-60"></div>
      <div class="flex-1 bg-sky-100 bg-hue-rotate-90 h-6" data-test="sky-100-90"></div>
      <div class="flex-1 bg-sky-100 bg-hue-rotate-120 h-6" data-test="sky-100-120"></div>
      <div class="flex-1 bg-sky-100 bg-hue-rotate-150 h-6" data-test="sky-100-150"></div>
      <div class="flex-1 bg-sky-100 bg-hue-rotate-180 h-6" data-test="sky-100-180"></div>
      <div class="flex-1 bg-sky-100 bg-hue-rotate-210 h-6" data-test="sky-100-210"></div>
      <div class="flex-1 bg-sky-100 bg-hue-rotate-240 h-6" data-test="sky-100-240"></div>
      <div class="flex-1 bg-sky-100 bg-hue-rotate-270 h-6" data-test="sky-100-270"></div>
      <div class="flex-1 bg-sky-100 bg-hue-rotate-300 h-6" data-test="sky-100-300"></div>
      <div class="flex-1 bg-sky-100 bg-hue-rotate-330 h-6" data-test="sky-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-sky-200 h-6" data-test="sky-200-0"></div>
      <div class="flex-1 bg-sky-200 bg-hue-rotate-30 h-6" data-test="sky-200-30"></div>
      <div class="flex-1 bg-sky-200 bg-hue-rotate-60 h-6" data-test="sky-200-60"></div>
      <div class="flex-1 bg-sky-200 bg-hue-rotate-90 h-6" data-test="sky-200-90"></div>
      <div class="flex-1 bg-sky-200 bg-hue-rotate-120 h-6" data-test="sky-200-120"></div>
      <div class="flex-1 bg-sky-200 bg-hue-rotate-150 h-6" data-test="sky-200-150"></div>
      <div class="flex-1 bg-sky-200 bg-hue-rotate-180 h-6" data-test="sky-200-180"></div>
      <div class="flex-1 bg-sky-200 bg-hue-rotate-210 h-6" data-test="sky-200-210"></div>
      <div class="flex-1 bg-sky-200 bg-hue-rotate-240 h-6" data-test="sky-200-240"></div>
      <div class="flex-1 bg-sky-200 bg-hue-rotate-270 h-6" data-test="sky-200-270"></div>
      <div class="flex-1 bg-sky-200 bg-hue-rotate-300 h-6" data-test="sky-200-300"></div>
      <div class="flex-1 bg-sky-200 bg-hue-rotate-330 h-6" data-test="sky-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-sky-300 h-6" data-test="sky-300-0"></div>
      <div class="flex-1 bg-sky-300 bg-hue-rotate-30 h-6" data-test="sky-300-30"></div>
      <div class="flex-1 bg-sky-300 bg-hue-rotate-60 h-6" data-test="sky-300-60"></div>
      <div class="flex-1 bg-sky-300 bg-hue-rotate-90 h-6" data-test="sky-300-90"></div>
      <div class="flex-1 bg-sky-300 bg-hue-rotate-120 h-6" data-test="sky-300-120"></div>
      <div class="flex-1 bg-sky-300 bg-hue-rotate-150 h-6" data-test="sky-300-150"></div>
      <div class="flex-1 bg-sky-300 bg-hue-rotate-180 h-6" data-test="sky-300-180"></div>
      <div class="flex-1 bg-sky-300 bg-hue-rotate-210 h-6" data-test="sky-300-210"></div>
      <div class="flex-1 bg-sky-300 bg-hue-rotate-240 h-6" data-test="sky-300-240"></div>
      <div class="flex-1 bg-sky-300 bg-hue-rotate-270 h-6" data-test="sky-300-270"></div>
      <div class="flex-1 bg-sky-300 bg-hue-rotate-300 h-6" data-test="sky-300-300"></div>
      <div class="flex-1 bg-sky-300 bg-hue-rotate-330 h-6" data-test="sky-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-sky-400 h-6" data-test="sky-400-0"></div>
      <div class="flex-1 bg-sky-400 bg-hue-rotate-30 h-6" data-test="sky-400-30"></div>
      <div class="flex-1 bg-sky-400 bg-hue-rotate-60 h-6" data-test="sky-400-60"></div>
      <div class="flex-1 bg-sky-400 bg-hue-rotate-90 h-6" data-test="sky-400-90"></div>
      <div class="flex-1 bg-sky-400 bg-hue-rotate-120 h-6" data-test="sky-400-120"></div>
      <div class="flex-1 bg-sky-400 bg-hue-rotate-150 h-6" data-test="sky-400-150"></div>
      <div class="flex-1 bg-sky-400 bg-hue-rotate-180 h-6" data-test="sky-400-180"></div>
      <div class="flex-1 bg-sky-400 bg-hue-rotate-210 h-6" data-test="sky-400-210"></div>
      <div class="flex-1 bg-sky-400 bg-hue-rotate-240 h-6" data-test="sky-400-240"></div>
      <div class="flex-1 bg-sky-400 bg-hue-rotate-270 h-6" data-test="sky-400-270"></div>
      <div class="flex-1 bg-sky-400 bg-hue-rotate-300 h-6" data-test="sky-400-300"></div>
      <div class="flex-1 bg-sky-400 bg-hue-rotate-330 h-6" data-test="sky-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-sky-500 h-6" data-test="sky-500-0"></div>
      <div class="flex-1 bg-sky-500 bg-hue-rotate-30 h-6" data-test="sky-500-30"></div>
      <div class="flex-1 bg-sky-500 bg-hue-rotate-60 h-6" data-test="sky-500-60"></div>
      <div class="flex-1 bg-sky-500 bg-hue-rotate-90 h-6" data-test="sky-500-90"></div>
      <div class="flex-1 bg-sky-500 bg-hue-rotate-120 h-6" data-test="sky-500-120"></div>
      <div class="flex-1 bg-sky-500 bg-hue-rotate-150 h-6" data-test="sky-500-150"></div>
      <div class="flex-1 bg-sky-500 bg-hue-rotate-180 h-6" data-test="sky-500-180"></div>
      <div class="flex-1 bg-sky-500 bg-hue-rotate-210 h-6" data-test="sky-500-210"></div>
      <div class="flex-1 bg-sky-500 bg-hue-rotate-240 h-6" data-test="sky-500-240"></div>
      <div class="flex-1 bg-sky-500 bg-hue-rotate-270 h-6" data-test="sky-500-270"></div>
      <div class="flex-1 bg-sky-500 bg-hue-rotate-300 h-6" data-test="sky-500-300"></div>
      <div class="flex-1 bg-sky-500 bg-hue-rotate-330 h-6" data-test="sky-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-sky-600 h-6" data-test="sky-600-0"></div>
      <div class="flex-1 bg-sky-600 bg-hue-rotate-30 h-6" data-test="sky-600-30"></div>
      <div class="flex-1 bg-sky-600 bg-hue-rotate-60 h-6" data-test="sky-600-60"></div>
      <div class="flex-1 bg-sky-600 bg-hue-rotate-90 h-6" data-test="sky-600-90"></div>
      <div class="flex-1 bg-sky-600 bg-hue-rotate-120 h-6" data-test="sky-600-120"></div>
      <div class="flex-1 bg-sky-600 bg-hue-rotate-150 h-6" data-test="sky-600-150"></div>
      <div class="flex-1 bg-sky-600 bg-hue-rotate-180 h-6" data-test="sky-600-180"></div>
      <div class="flex-1 bg-sky-600 bg-hue-rotate-210 h-6" data-test="sky-600-210"></div>
      <div class="flex-1 bg-sky-600 bg-hue-rotate-240 h-6" data-test="sky-600-240"></div>
      <div class="flex-1 bg-sky-600 bg-hue-rotate-270 h-6" data-test="sky-600-270"></div>
      <div class="flex-1 bg-sky-600 bg-hue-rotate-300 h-6" data-test="sky-600-300"></div>
      <div class="flex-1 bg-sky-600 bg-hue-rotate-330 h-6" data-test="sky-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-sky-700 h-6" data-test="sky-700-0"></div>
      <div class="flex-1 bg-sky-700 bg-hue-rotate-30 h-6" data-test="sky-700-30"></div>
      <div class="flex-1 bg-sky-700 bg-hue-rotate-60 h-6" data-test="sky-700-60"></div>
      <div class="flex-1 bg-sky-700 bg-hue-rotate-90 h-6" data-test="sky-700-90"></div>
      <div class="flex-1 bg-sky-700 bg-hue-rotate-120 h-6" data-test="sky-700-120"></div>
      <div class="flex-1 bg-sky-700 bg-hue-rotate-150 h-6" data-test="sky-700-150"></div>
      <div class="flex-1 bg-sky-700 bg-hue-rotate-180 h-6" data-test="sky-700-180"></div>
      <div class="flex-1 bg-sky-700 bg-hue-rotate-210 h-6" data-test="sky-700-210"></div>
      <div class="flex-1 bg-sky-700 bg-hue-rotate-240 h-6" data-test="sky-700-240"></div>
      <div class="flex-1 bg-sky-700 bg-hue-rotate-270 h-6" data-test="sky-700-270"></div>
      <div class="flex-1 bg-sky-700 bg-hue-rotate-300 h-6" data-test="sky-700-300"></div>
      <div class="flex-1 bg-sky-700 bg-hue-rotate-330 h-6" data-test="sky-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-sky-800 h-6" data-test="sky-800-0"></div>
      <div class="flex-1 bg-sky-800 bg-hue-rotate-30 h-6" data-test="sky-800-30"></div>
      <div class="flex-1 bg-sky-800 bg-hue-rotate-60 h-6" data-test="sky-800-60"></div>
      <div class="flex-1 bg-sky-800 bg-hue-rotate-90 h-6" data-test="sky-800-90"></div>
      <div class="flex-1 bg-sky-800 bg-hue-rotate-120 h-6" data-test="sky-800-120"></div>
      <div class="flex-1 bg-sky-800 bg-hue-rotate-150 h-6" data-test="sky-800-150"></div>
      <div class="flex-1 bg-sky-800 bg-hue-rotate-180 h-6" data-test="sky-800-180"></div>
      <div class="flex-1 bg-sky-800 bg-hue-rotate-210 h-6" data-test="sky-800-210"></div>
      <div class="flex-1 bg-sky-800 bg-hue-rotate-240 h-6" data-test="sky-800-240"></div>
      <div class="flex-1 bg-sky-800 bg-hue-rotate-270 h-6" data-test="sky-800-270"></div>
      <div class="flex-1 bg-sky-800 bg-hue-rotate-300 h-6" data-test="sky-800-300"></div>
      <div class="flex-1 bg-sky-800 bg-hue-rotate-330 h-6" data-test="sky-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-sky-900 h-6" data-test="sky-900-0"></div>
      <div class="flex-1 bg-sky-900 bg-hue-rotate-30 h-6" data-test="sky-900-30"></div>
      <div class="flex-1 bg-sky-900 bg-hue-rotate-60 h-6" data-test="sky-900-60"></div>
      <div class="flex-1 bg-sky-900 bg-hue-rotate-90 h-6" data-test="sky-900-90"></div>
      <div class="flex-1 bg-sky-900 bg-hue-rotate-120 h-6" data-test="sky-900-120"></div>
      <div class="flex-1 bg-sky-900 bg-hue-rotate-150 h-6" data-test="sky-900-150"></div>
      <div class="flex-1 bg-sky-900 bg-hue-rotate-180 h-6" data-test="sky-900-180"></div>
      <div class="flex-1 bg-sky-900 bg-hue-rotate-210 h-6" data-test="sky-900-210"></div>
      <div class="flex-1 bg-sky-900 bg-hue-rotate-240 h-6" data-test="sky-900-240"></div>
      <div class="flex-1 bg-sky-900 bg-hue-rotate-270 h-6" data-test="sky-900-270"></div>
      <div class="flex-1 bg-sky-900 bg-hue-rotate-300 h-6" data-test="sky-900-300"></div>
      <div class="flex-1 bg-sky-900 bg-hue-rotate-330 h-6" data-test="sky-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-sky-950 h-6" data-test="sky-950-0"></div>
      <div class="flex-1 bg-sky-950 bg-hue-rotate-30 h-6" data-test="sky-950-30"></div>
      <div class="flex-1 bg-sky-950 bg-hue-rotate-60 h-6" data-test="sky-950-60"></div>
      <div class="flex-1 bg-sky-950 bg-hue-rotate-90 h-6" data-test="sky-950-90"></div>
      <div class="flex-1 bg-sky-950 bg-hue-rotate-120 h-6" data-test="sky-950-120"></div>
      <div class="flex-1 bg-sky-950 bg-hue-rotate-150 h-6" data-test="sky-950-150"></div>
      <div class="flex-1 bg-sky-950 bg-hue-rotate-180 h-6" data-test="sky-950-180"></div>
      <div class="flex-1 bg-sky-950 bg-hue-rotate-210 h-6" data-test="sky-950-210"></div>
      <div class="flex-1 bg-sky-950 bg-hue-rotate-240 h-6" data-test="sky-950-240"></div>
      <div class="flex-1 bg-sky-950 bg-hue-rotate-270 h-6" data-test="sky-950-270"></div>
      <div class="flex-1 bg-sky-950 bg-hue-rotate-300 h-6" data-test="sky-950-300"></div>
      <div class="flex-1 bg-sky-950 bg-hue-rotate-330 h-6" data-test="sky-950-330"></div>
    </div>
  </div>
</div>

### blue

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-blue-50 h-6" data-test="blue-50-0"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-30 h-6" data-test="blue-50-30"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-60 h-6" data-test="blue-50-60"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-90 h-6" data-test="blue-50-90"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-120 h-6" data-test="blue-50-120"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-150 h-6" data-test="blue-50-150"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-180 h-6" data-test="blue-50-180"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-210 h-6" data-test="blue-50-210"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-240 h-6" data-test="blue-50-240"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-270 h-6" data-test="blue-50-270"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-300 h-6" data-test="blue-50-300"></div>
      <div class="flex-1 bg-blue-50 bg-hue-rotate-330 h-6" data-test="blue-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-blue-100 h-6" data-test="blue-100-0"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-30 h-6" data-test="blue-100-30"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-60 h-6" data-test="blue-100-60"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-90 h-6" data-test="blue-100-90"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-120 h-6" data-test="blue-100-120"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-150 h-6" data-test="blue-100-150"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-180 h-6" data-test="blue-100-180"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-210 h-6" data-test="blue-100-210"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-240 h-6" data-test="blue-100-240"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-270 h-6" data-test="blue-100-270"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-300 h-6" data-test="blue-100-300"></div>
      <div class="flex-1 bg-blue-100 bg-hue-rotate-330 h-6" data-test="blue-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-blue-200 h-6" data-test="blue-200-0"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-30 h-6" data-test="blue-200-30"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-60 h-6" data-test="blue-200-60"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-90 h-6" data-test="blue-200-90"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-120 h-6" data-test="blue-200-120"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-150 h-6" data-test="blue-200-150"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-180 h-6" data-test="blue-200-180"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-210 h-6" data-test="blue-200-210"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-240 h-6" data-test="blue-200-240"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-270 h-6" data-test="blue-200-270"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-300 h-6" data-test="blue-200-300"></div>
      <div class="flex-1 bg-blue-200 bg-hue-rotate-330 h-6" data-test="blue-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-blue-300 h-6" data-test="blue-300-0"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-30 h-6" data-test="blue-300-30"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-60 h-6" data-test="blue-300-60"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-90 h-6" data-test="blue-300-90"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-120 h-6" data-test="blue-300-120"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-150 h-6" data-test="blue-300-150"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-180 h-6" data-test="blue-300-180"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-210 h-6" data-test="blue-300-210"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-240 h-6" data-test="blue-300-240"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-270 h-6" data-test="blue-300-270"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-300 h-6" data-test="blue-300-300"></div>
      <div class="flex-1 bg-blue-300 bg-hue-rotate-330 h-6" data-test="blue-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-blue-400 h-6" data-test="blue-400-0"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-30 h-6" data-test="blue-400-30"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-60 h-6" data-test="blue-400-60"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-90 h-6" data-test="blue-400-90"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-120 h-6" data-test="blue-400-120"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-150 h-6" data-test="blue-400-150"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-180 h-6" data-test="blue-400-180"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-210 h-6" data-test="blue-400-210"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-240 h-6" data-test="blue-400-240"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-270 h-6" data-test="blue-400-270"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-300 h-6" data-test="blue-400-300"></div>
      <div class="flex-1 bg-blue-400 bg-hue-rotate-330 h-6" data-test="blue-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-blue-500 h-6" data-test="blue-500-0"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-30 h-6" data-test="blue-500-30"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-60 h-6" data-test="blue-500-60"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-90 h-6" data-test="blue-500-90"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-120 h-6" data-test="blue-500-120"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-150 h-6" data-test="blue-500-150"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-180 h-6" data-test="blue-500-180"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-210 h-6" data-test="blue-500-210"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-240 h-6" data-test="blue-500-240"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-270 h-6" data-test="blue-500-270"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-300 h-6" data-test="blue-500-300"></div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-330 h-6" data-test="blue-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-blue-600 h-6" data-test="blue-600-0"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-30 h-6" data-test="blue-600-30"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-60 h-6" data-test="blue-600-60"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-90 h-6" data-test="blue-600-90"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-120 h-6" data-test="blue-600-120"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-150 h-6" data-test="blue-600-150"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-180 h-6" data-test="blue-600-180"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-210 h-6" data-test="blue-600-210"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-240 h-6" data-test="blue-600-240"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-270 h-6" data-test="blue-600-270"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-300 h-6" data-test="blue-600-300"></div>
      <div class="flex-1 bg-blue-600 bg-hue-rotate-330 h-6" data-test="blue-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-blue-700 h-6" data-test="blue-700-0"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-30 h-6" data-test="blue-700-30"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-60 h-6" data-test="blue-700-60"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-90 h-6" data-test="blue-700-90"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-120 h-6" data-test="blue-700-120"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-150 h-6" data-test="blue-700-150"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-180 h-6" data-test="blue-700-180"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-210 h-6" data-test="blue-700-210"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-240 h-6" data-test="blue-700-240"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-270 h-6" data-test="blue-700-270"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-300 h-6" data-test="blue-700-300"></div>
      <div class="flex-1 bg-blue-700 bg-hue-rotate-330 h-6" data-test="blue-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-blue-800 h-6" data-test="blue-800-0"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-30 h-6" data-test="blue-800-30"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-60 h-6" data-test="blue-800-60"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-90 h-6" data-test="blue-800-90"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-120 h-6" data-test="blue-800-120"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-150 h-6" data-test="blue-800-150"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-180 h-6" data-test="blue-800-180"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-210 h-6" data-test="blue-800-210"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-240 h-6" data-test="blue-800-240"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-270 h-6" data-test="blue-800-270"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-300 h-6" data-test="blue-800-300"></div>
      <div class="flex-1 bg-blue-800 bg-hue-rotate-330 h-6" data-test="blue-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-blue-900 h-6" data-test="blue-900-0"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-30 h-6" data-test="blue-900-30"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-60 h-6" data-test="blue-900-60"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-90 h-6" data-test="blue-900-90"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-120 h-6" data-test="blue-900-120"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-150 h-6" data-test="blue-900-150"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-180 h-6" data-test="blue-900-180"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-210 h-6" data-test="blue-900-210"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-240 h-6" data-test="blue-900-240"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-270 h-6" data-test="blue-900-270"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-300 h-6" data-test="blue-900-300"></div>
      <div class="flex-1 bg-blue-900 bg-hue-rotate-330 h-6" data-test="blue-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-blue-950 h-6" data-test="blue-950-0"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-30 h-6" data-test="blue-950-30"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-60 h-6" data-test="blue-950-60"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-90 h-6" data-test="blue-950-90"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-120 h-6" data-test="blue-950-120"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-150 h-6" data-test="blue-950-150"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-180 h-6" data-test="blue-950-180"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-210 h-6" data-test="blue-950-210"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-240 h-6" data-test="blue-950-240"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-270 h-6" data-test="blue-950-270"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-300 h-6" data-test="blue-950-300"></div>
      <div class="flex-1 bg-blue-950 bg-hue-rotate-330 h-6" data-test="blue-950-330"></div>
    </div>
  </div>
</div>

### indigo

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-indigo-50 h-6" data-test="indigo-50-0"></div>
      <div class="flex-1 bg-indigo-50 bg-hue-rotate-30 h-6" data-test="indigo-50-30"></div>
      <div class="flex-1 bg-indigo-50 bg-hue-rotate-60 h-6" data-test="indigo-50-60"></div>
      <div class="flex-1 bg-indigo-50 bg-hue-rotate-90 h-6" data-test="indigo-50-90"></div>
      <div class="flex-1 bg-indigo-50 bg-hue-rotate-120 h-6" data-test="indigo-50-120"></div>
      <div class="flex-1 bg-indigo-50 bg-hue-rotate-150 h-6" data-test="indigo-50-150"></div>
      <div class="flex-1 bg-indigo-50 bg-hue-rotate-180 h-6" data-test="indigo-50-180"></div>
      <div class="flex-1 bg-indigo-50 bg-hue-rotate-210 h-6" data-test="indigo-50-210"></div>
      <div class="flex-1 bg-indigo-50 bg-hue-rotate-240 h-6" data-test="indigo-50-240"></div>
      <div class="flex-1 bg-indigo-50 bg-hue-rotate-270 h-6" data-test="indigo-50-270"></div>
      <div class="flex-1 bg-indigo-50 bg-hue-rotate-300 h-6" data-test="indigo-50-300"></div>
      <div class="flex-1 bg-indigo-50 bg-hue-rotate-330 h-6" data-test="indigo-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-indigo-100 h-6" data-test="indigo-100-0"></div>
      <div class="flex-1 bg-indigo-100 bg-hue-rotate-30 h-6" data-test="indigo-100-30"></div>
      <div class="flex-1 bg-indigo-100 bg-hue-rotate-60 h-6" data-test="indigo-100-60"></div>
      <div class="flex-1 bg-indigo-100 bg-hue-rotate-90 h-6" data-test="indigo-100-90"></div>
      <div class="flex-1 bg-indigo-100 bg-hue-rotate-120 h-6" data-test="indigo-100-120"></div>
      <div class="flex-1 bg-indigo-100 bg-hue-rotate-150 h-6" data-test="indigo-100-150"></div>
      <div class="flex-1 bg-indigo-100 bg-hue-rotate-180 h-6" data-test="indigo-100-180"></div>
      <div class="flex-1 bg-indigo-100 bg-hue-rotate-210 h-6" data-test="indigo-100-210"></div>
      <div class="flex-1 bg-indigo-100 bg-hue-rotate-240 h-6" data-test="indigo-100-240"></div>
      <div class="flex-1 bg-indigo-100 bg-hue-rotate-270 h-6" data-test="indigo-100-270"></div>
      <div class="flex-1 bg-indigo-100 bg-hue-rotate-300 h-6" data-test="indigo-100-300"></div>
      <div class="flex-1 bg-indigo-100 bg-hue-rotate-330 h-6" data-test="indigo-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-indigo-200 h-6" data-test="indigo-200-0"></div>
      <div class="flex-1 bg-indigo-200 bg-hue-rotate-30 h-6" data-test="indigo-200-30"></div>
      <div class="flex-1 bg-indigo-200 bg-hue-rotate-60 h-6" data-test="indigo-200-60"></div>
      <div class="flex-1 bg-indigo-200 bg-hue-rotate-90 h-6" data-test="indigo-200-90"></div>
      <div class="flex-1 bg-indigo-200 bg-hue-rotate-120 h-6" data-test="indigo-200-120"></div>
      <div class="flex-1 bg-indigo-200 bg-hue-rotate-150 h-6" data-test="indigo-200-150"></div>
      <div class="flex-1 bg-indigo-200 bg-hue-rotate-180 h-6" data-test="indigo-200-180"></div>
      <div class="flex-1 bg-indigo-200 bg-hue-rotate-210 h-6" data-test="indigo-200-210"></div>
      <div class="flex-1 bg-indigo-200 bg-hue-rotate-240 h-6" data-test="indigo-200-240"></div>
      <div class="flex-1 bg-indigo-200 bg-hue-rotate-270 h-6" data-test="indigo-200-270"></div>
      <div class="flex-1 bg-indigo-200 bg-hue-rotate-300 h-6" data-test="indigo-200-300"></div>
      <div class="flex-1 bg-indigo-200 bg-hue-rotate-330 h-6" data-test="indigo-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-indigo-300 h-6" data-test="indigo-300-0"></div>
      <div class="flex-1 bg-indigo-300 bg-hue-rotate-30 h-6" data-test="indigo-300-30"></div>
      <div class="flex-1 bg-indigo-300 bg-hue-rotate-60 h-6" data-test="indigo-300-60"></div>
      <div class="flex-1 bg-indigo-300 bg-hue-rotate-90 h-6" data-test="indigo-300-90"></div>
      <div class="flex-1 bg-indigo-300 bg-hue-rotate-120 h-6" data-test="indigo-300-120"></div>
      <div class="flex-1 bg-indigo-300 bg-hue-rotate-150 h-6" data-test="indigo-300-150"></div>
      <div class="flex-1 bg-indigo-300 bg-hue-rotate-180 h-6" data-test="indigo-300-180"></div>
      <div class="flex-1 bg-indigo-300 bg-hue-rotate-210 h-6" data-test="indigo-300-210"></div>
      <div class="flex-1 bg-indigo-300 bg-hue-rotate-240 h-6" data-test="indigo-300-240"></div>
      <div class="flex-1 bg-indigo-300 bg-hue-rotate-270 h-6" data-test="indigo-300-270"></div>
      <div class="flex-1 bg-indigo-300 bg-hue-rotate-300 h-6" data-test="indigo-300-300"></div>
      <div class="flex-1 bg-indigo-300 bg-hue-rotate-330 h-6" data-test="indigo-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-indigo-400 h-6" data-test="indigo-400-0"></div>
      <div class="flex-1 bg-indigo-400 bg-hue-rotate-30 h-6" data-test="indigo-400-30"></div>
      <div class="flex-1 bg-indigo-400 bg-hue-rotate-60 h-6" data-test="indigo-400-60"></div>
      <div class="flex-1 bg-indigo-400 bg-hue-rotate-90 h-6" data-test="indigo-400-90"></div>
      <div class="flex-1 bg-indigo-400 bg-hue-rotate-120 h-6" data-test="indigo-400-120"></div>
      <div class="flex-1 bg-indigo-400 bg-hue-rotate-150 h-6" data-test="indigo-400-150"></div>
      <div class="flex-1 bg-indigo-400 bg-hue-rotate-180 h-6" data-test="indigo-400-180"></div>
      <div class="flex-1 bg-indigo-400 bg-hue-rotate-210 h-6" data-test="indigo-400-210"></div>
      <div class="flex-1 bg-indigo-400 bg-hue-rotate-240 h-6" data-test="indigo-400-240"></div>
      <div class="flex-1 bg-indigo-400 bg-hue-rotate-270 h-6" data-test="indigo-400-270"></div>
      <div class="flex-1 bg-indigo-400 bg-hue-rotate-300 h-6" data-test="indigo-400-300"></div>
      <div class="flex-1 bg-indigo-400 bg-hue-rotate-330 h-6" data-test="indigo-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-indigo-500 h-6" data-test="indigo-500-0"></div>
      <div class="flex-1 bg-indigo-500 bg-hue-rotate-30 h-6" data-test="indigo-500-30"></div>
      <div class="flex-1 bg-indigo-500 bg-hue-rotate-60 h-6" data-test="indigo-500-60"></div>
      <div class="flex-1 bg-indigo-500 bg-hue-rotate-90 h-6" data-test="indigo-500-90"></div>
      <div class="flex-1 bg-indigo-500 bg-hue-rotate-120 h-6" data-test="indigo-500-120"></div>
      <div class="flex-1 bg-indigo-500 bg-hue-rotate-150 h-6" data-test="indigo-500-150"></div>
      <div class="flex-1 bg-indigo-500 bg-hue-rotate-180 h-6" data-test="indigo-500-180"></div>
      <div class="flex-1 bg-indigo-500 bg-hue-rotate-210 h-6" data-test="indigo-500-210"></div>
      <div class="flex-1 bg-indigo-500 bg-hue-rotate-240 h-6" data-test="indigo-500-240"></div>
      <div class="flex-1 bg-indigo-500 bg-hue-rotate-270 h-6" data-test="indigo-500-270"></div>
      <div class="flex-1 bg-indigo-500 bg-hue-rotate-300 h-6" data-test="indigo-500-300"></div>
      <div class="flex-1 bg-indigo-500 bg-hue-rotate-330 h-6" data-test="indigo-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-indigo-600 h-6" data-test="indigo-600-0"></div>
      <div class="flex-1 bg-indigo-600 bg-hue-rotate-30 h-6" data-test="indigo-600-30"></div>
      <div class="flex-1 bg-indigo-600 bg-hue-rotate-60 h-6" data-test="indigo-600-60"></div>
      <div class="flex-1 bg-indigo-600 bg-hue-rotate-90 h-6" data-test="indigo-600-90"></div>
      <div class="flex-1 bg-indigo-600 bg-hue-rotate-120 h-6" data-test="indigo-600-120"></div>
      <div class="flex-1 bg-indigo-600 bg-hue-rotate-150 h-6" data-test="indigo-600-150"></div>
      <div class="flex-1 bg-indigo-600 bg-hue-rotate-180 h-6" data-test="indigo-600-180"></div>
      <div class="flex-1 bg-indigo-600 bg-hue-rotate-210 h-6" data-test="indigo-600-210"></div>
      <div class="flex-1 bg-indigo-600 bg-hue-rotate-240 h-6" data-test="indigo-600-240"></div>
      <div class="flex-1 bg-indigo-600 bg-hue-rotate-270 h-6" data-test="indigo-600-270"></div>
      <div class="flex-1 bg-indigo-600 bg-hue-rotate-300 h-6" data-test="indigo-600-300"></div>
      <div class="flex-1 bg-indigo-600 bg-hue-rotate-330 h-6" data-test="indigo-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-indigo-700 h-6" data-test="indigo-700-0"></div>
      <div class="flex-1 bg-indigo-700 bg-hue-rotate-30 h-6" data-test="indigo-700-30"></div>
      <div class="flex-1 bg-indigo-700 bg-hue-rotate-60 h-6" data-test="indigo-700-60"></div>
      <div class="flex-1 bg-indigo-700 bg-hue-rotate-90 h-6" data-test="indigo-700-90"></div>
      <div class="flex-1 bg-indigo-700 bg-hue-rotate-120 h-6" data-test="indigo-700-120"></div>
      <div class="flex-1 bg-indigo-700 bg-hue-rotate-150 h-6" data-test="indigo-700-150"></div>
      <div class="flex-1 bg-indigo-700 bg-hue-rotate-180 h-6" data-test="indigo-700-180"></div>
      <div class="flex-1 bg-indigo-700 bg-hue-rotate-210 h-6" data-test="indigo-700-210"></div>
      <div class="flex-1 bg-indigo-700 bg-hue-rotate-240 h-6" data-test="indigo-700-240"></div>
      <div class="flex-1 bg-indigo-700 bg-hue-rotate-270 h-6" data-test="indigo-700-270"></div>
      <div class="flex-1 bg-indigo-700 bg-hue-rotate-300 h-6" data-test="indigo-700-300"></div>
      <div class="flex-1 bg-indigo-700 bg-hue-rotate-330 h-6" data-test="indigo-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-indigo-800 h-6" data-test="indigo-800-0"></div>
      <div class="flex-1 bg-indigo-800 bg-hue-rotate-30 h-6" data-test="indigo-800-30"></div>
      <div class="flex-1 bg-indigo-800 bg-hue-rotate-60 h-6" data-test="indigo-800-60"></div>
      <div class="flex-1 bg-indigo-800 bg-hue-rotate-90 h-6" data-test="indigo-800-90"></div>
      <div class="flex-1 bg-indigo-800 bg-hue-rotate-120 h-6" data-test="indigo-800-120"></div>
      <div class="flex-1 bg-indigo-800 bg-hue-rotate-150 h-6" data-test="indigo-800-150"></div>
      <div class="flex-1 bg-indigo-800 bg-hue-rotate-180 h-6" data-test="indigo-800-180"></div>
      <div class="flex-1 bg-indigo-800 bg-hue-rotate-210 h-6" data-test="indigo-800-210"></div>
      <div class="flex-1 bg-indigo-800 bg-hue-rotate-240 h-6" data-test="indigo-800-240"></div>
      <div class="flex-1 bg-indigo-800 bg-hue-rotate-270 h-6" data-test="indigo-800-270"></div>
      <div class="flex-1 bg-indigo-800 bg-hue-rotate-300 h-6" data-test="indigo-800-300"></div>
      <div class="flex-1 bg-indigo-800 bg-hue-rotate-330 h-6" data-test="indigo-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-indigo-900 h-6" data-test="indigo-900-0"></div>
      <div class="flex-1 bg-indigo-900 bg-hue-rotate-30 h-6" data-test="indigo-900-30"></div>
      <div class="flex-1 bg-indigo-900 bg-hue-rotate-60 h-6" data-test="indigo-900-60"></div>
      <div class="flex-1 bg-indigo-900 bg-hue-rotate-90 h-6" data-test="indigo-900-90"></div>
      <div class="flex-1 bg-indigo-900 bg-hue-rotate-120 h-6" data-test="indigo-900-120"></div>
      <div class="flex-1 bg-indigo-900 bg-hue-rotate-150 h-6" data-test="indigo-900-150"></div>
      <div class="flex-1 bg-indigo-900 bg-hue-rotate-180 h-6" data-test="indigo-900-180"></div>
      <div class="flex-1 bg-indigo-900 bg-hue-rotate-210 h-6" data-test="indigo-900-210"></div>
      <div class="flex-1 bg-indigo-900 bg-hue-rotate-240 h-6" data-test="indigo-900-240"></div>
      <div class="flex-1 bg-indigo-900 bg-hue-rotate-270 h-6" data-test="indigo-900-270"></div>
      <div class="flex-1 bg-indigo-900 bg-hue-rotate-300 h-6" data-test="indigo-900-300"></div>
      <div class="flex-1 bg-indigo-900 bg-hue-rotate-330 h-6" data-test="indigo-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-indigo-950 h-6" data-test="indigo-950-0"></div>
      <div class="flex-1 bg-indigo-950 bg-hue-rotate-30 h-6" data-test="indigo-950-30"></div>
      <div class="flex-1 bg-indigo-950 bg-hue-rotate-60 h-6" data-test="indigo-950-60"></div>
      <div class="flex-1 bg-indigo-950 bg-hue-rotate-90 h-6" data-test="indigo-950-90"></div>
      <div class="flex-1 bg-indigo-950 bg-hue-rotate-120 h-6" data-test="indigo-950-120"></div>
      <div class="flex-1 bg-indigo-950 bg-hue-rotate-150 h-6" data-test="indigo-950-150"></div>
      <div class="flex-1 bg-indigo-950 bg-hue-rotate-180 h-6" data-test="indigo-950-180"></div>
      <div class="flex-1 bg-indigo-950 bg-hue-rotate-210 h-6" data-test="indigo-950-210"></div>
      <div class="flex-1 bg-indigo-950 bg-hue-rotate-240 h-6" data-test="indigo-950-240"></div>
      <div class="flex-1 bg-indigo-950 bg-hue-rotate-270 h-6" data-test="indigo-950-270"></div>
      <div class="flex-1 bg-indigo-950 bg-hue-rotate-300 h-6" data-test="indigo-950-300"></div>
      <div class="flex-1 bg-indigo-950 bg-hue-rotate-330 h-6" data-test="indigo-950-330"></div>
    </div>
  </div>
</div>

### violet

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-violet-50 h-6" data-test="violet-50-0"></div>
      <div class="flex-1 bg-violet-50 bg-hue-rotate-30 h-6" data-test="violet-50-30"></div>
      <div class="flex-1 bg-violet-50 bg-hue-rotate-60 h-6" data-test="violet-50-60"></div>
      <div class="flex-1 bg-violet-50 bg-hue-rotate-90 h-6" data-test="violet-50-90"></div>
      <div class="flex-1 bg-violet-50 bg-hue-rotate-120 h-6" data-test="violet-50-120"></div>
      <div class="flex-1 bg-violet-50 bg-hue-rotate-150 h-6" data-test="violet-50-150"></div>
      <div class="flex-1 bg-violet-50 bg-hue-rotate-180 h-6" data-test="violet-50-180"></div>
      <div class="flex-1 bg-violet-50 bg-hue-rotate-210 h-6" data-test="violet-50-210"></div>
      <div class="flex-1 bg-violet-50 bg-hue-rotate-240 h-6" data-test="violet-50-240"></div>
      <div class="flex-1 bg-violet-50 bg-hue-rotate-270 h-6" data-test="violet-50-270"></div>
      <div class="flex-1 bg-violet-50 bg-hue-rotate-300 h-6" data-test="violet-50-300"></div>
      <div class="flex-1 bg-violet-50 bg-hue-rotate-330 h-6" data-test="violet-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-violet-100 h-6" data-test="violet-100-0"></div>
      <div class="flex-1 bg-violet-100 bg-hue-rotate-30 h-6" data-test="violet-100-30"></div>
      <div class="flex-1 bg-violet-100 bg-hue-rotate-60 h-6" data-test="violet-100-60"></div>
      <div class="flex-1 bg-violet-100 bg-hue-rotate-90 h-6" data-test="violet-100-90"></div>
      <div class="flex-1 bg-violet-100 bg-hue-rotate-120 h-6" data-test="violet-100-120"></div>
      <div class="flex-1 bg-violet-100 bg-hue-rotate-150 h-6" data-test="violet-100-150"></div>
      <div class="flex-1 bg-violet-100 bg-hue-rotate-180 h-6" data-test="violet-100-180"></div>
      <div class="flex-1 bg-violet-100 bg-hue-rotate-210 h-6" data-test="violet-100-210"></div>
      <div class="flex-1 bg-violet-100 bg-hue-rotate-240 h-6" data-test="violet-100-240"></div>
      <div class="flex-1 bg-violet-100 bg-hue-rotate-270 h-6" data-test="violet-100-270"></div>
      <div class="flex-1 bg-violet-100 bg-hue-rotate-300 h-6" data-test="violet-100-300"></div>
      <div class="flex-1 bg-violet-100 bg-hue-rotate-330 h-6" data-test="violet-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-violet-200 h-6" data-test="violet-200-0"></div>
      <div class="flex-1 bg-violet-200 bg-hue-rotate-30 h-6" data-test="violet-200-30"></div>
      <div class="flex-1 bg-violet-200 bg-hue-rotate-60 h-6" data-test="violet-200-60"></div>
      <div class="flex-1 bg-violet-200 bg-hue-rotate-90 h-6" data-test="violet-200-90"></div>
      <div class="flex-1 bg-violet-200 bg-hue-rotate-120 h-6" data-test="violet-200-120"></div>
      <div class="flex-1 bg-violet-200 bg-hue-rotate-150 h-6" data-test="violet-200-150"></div>
      <div class="flex-1 bg-violet-200 bg-hue-rotate-180 h-6" data-test="violet-200-180"></div>
      <div class="flex-1 bg-violet-200 bg-hue-rotate-210 h-6" data-test="violet-200-210"></div>
      <div class="flex-1 bg-violet-200 bg-hue-rotate-240 h-6" data-test="violet-200-240"></div>
      <div class="flex-1 bg-violet-200 bg-hue-rotate-270 h-6" data-test="violet-200-270"></div>
      <div class="flex-1 bg-violet-200 bg-hue-rotate-300 h-6" data-test="violet-200-300"></div>
      <div class="flex-1 bg-violet-200 bg-hue-rotate-330 h-6" data-test="violet-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-violet-300 h-6" data-test="violet-300-0"></div>
      <div class="flex-1 bg-violet-300 bg-hue-rotate-30 h-6" data-test="violet-300-30"></div>
      <div class="flex-1 bg-violet-300 bg-hue-rotate-60 h-6" data-test="violet-300-60"></div>
      <div class="flex-1 bg-violet-300 bg-hue-rotate-90 h-6" data-test="violet-300-90"></div>
      <div class="flex-1 bg-violet-300 bg-hue-rotate-120 h-6" data-test="violet-300-120"></div>
      <div class="flex-1 bg-violet-300 bg-hue-rotate-150 h-6" data-test="violet-300-150"></div>
      <div class="flex-1 bg-violet-300 bg-hue-rotate-180 h-6" data-test="violet-300-180"></div>
      <div class="flex-1 bg-violet-300 bg-hue-rotate-210 h-6" data-test="violet-300-210"></div>
      <div class="flex-1 bg-violet-300 bg-hue-rotate-240 h-6" data-test="violet-300-240"></div>
      <div class="flex-1 bg-violet-300 bg-hue-rotate-270 h-6" data-test="violet-300-270"></div>
      <div class="flex-1 bg-violet-300 bg-hue-rotate-300 h-6" data-test="violet-300-300"></div>
      <div class="flex-1 bg-violet-300 bg-hue-rotate-330 h-6" data-test="violet-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-violet-400 h-6" data-test="violet-400-0"></div>
      <div class="flex-1 bg-violet-400 bg-hue-rotate-30 h-6" data-test="violet-400-30"></div>
      <div class="flex-1 bg-violet-400 bg-hue-rotate-60 h-6" data-test="violet-400-60"></div>
      <div class="flex-1 bg-violet-400 bg-hue-rotate-90 h-6" data-test="violet-400-90"></div>
      <div class="flex-1 bg-violet-400 bg-hue-rotate-120 h-6" data-test="violet-400-120"></div>
      <div class="flex-1 bg-violet-400 bg-hue-rotate-150 h-6" data-test="violet-400-150"></div>
      <div class="flex-1 bg-violet-400 bg-hue-rotate-180 h-6" data-test="violet-400-180"></div>
      <div class="flex-1 bg-violet-400 bg-hue-rotate-210 h-6" data-test="violet-400-210"></div>
      <div class="flex-1 bg-violet-400 bg-hue-rotate-240 h-6" data-test="violet-400-240"></div>
      <div class="flex-1 bg-violet-400 bg-hue-rotate-270 h-6" data-test="violet-400-270"></div>
      <div class="flex-1 bg-violet-400 bg-hue-rotate-300 h-6" data-test="violet-400-300"></div>
      <div class="flex-1 bg-violet-400 bg-hue-rotate-330 h-6" data-test="violet-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-violet-500 h-6" data-test="violet-500-0"></div>
      <div class="flex-1 bg-violet-500 bg-hue-rotate-30 h-6" data-test="violet-500-30"></div>
      <div class="flex-1 bg-violet-500 bg-hue-rotate-60 h-6" data-test="violet-500-60"></div>
      <div class="flex-1 bg-violet-500 bg-hue-rotate-90 h-6" data-test="violet-500-90"></div>
      <div class="flex-1 bg-violet-500 bg-hue-rotate-120 h-6" data-test="violet-500-120"></div>
      <div class="flex-1 bg-violet-500 bg-hue-rotate-150 h-6" data-test="violet-500-150"></div>
      <div class="flex-1 bg-violet-500 bg-hue-rotate-180 h-6" data-test="violet-500-180"></div>
      <div class="flex-1 bg-violet-500 bg-hue-rotate-210 h-6" data-test="violet-500-210"></div>
      <div class="flex-1 bg-violet-500 bg-hue-rotate-240 h-6" data-test="violet-500-240"></div>
      <div class="flex-1 bg-violet-500 bg-hue-rotate-270 h-6" data-test="violet-500-270"></div>
      <div class="flex-1 bg-violet-500 bg-hue-rotate-300 h-6" data-test="violet-500-300"></div>
      <div class="flex-1 bg-violet-500 bg-hue-rotate-330 h-6" data-test="violet-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-violet-600 h-6" data-test="violet-600-0"></div>
      <div class="flex-1 bg-violet-600 bg-hue-rotate-30 h-6" data-test="violet-600-30"></div>
      <div class="flex-1 bg-violet-600 bg-hue-rotate-60 h-6" data-test="violet-600-60"></div>
      <div class="flex-1 bg-violet-600 bg-hue-rotate-90 h-6" data-test="violet-600-90"></div>
      <div class="flex-1 bg-violet-600 bg-hue-rotate-120 h-6" data-test="violet-600-120"></div>
      <div class="flex-1 bg-violet-600 bg-hue-rotate-150 h-6" data-test="violet-600-150"></div>
      <div class="flex-1 bg-violet-600 bg-hue-rotate-180 h-6" data-test="violet-600-180"></div>
      <div class="flex-1 bg-violet-600 bg-hue-rotate-210 h-6" data-test="violet-600-210"></div>
      <div class="flex-1 bg-violet-600 bg-hue-rotate-240 h-6" data-test="violet-600-240"></div>
      <div class="flex-1 bg-violet-600 bg-hue-rotate-270 h-6" data-test="violet-600-270"></div>
      <div class="flex-1 bg-violet-600 bg-hue-rotate-300 h-6" data-test="violet-600-300"></div>
      <div class="flex-1 bg-violet-600 bg-hue-rotate-330 h-6" data-test="violet-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-violet-700 h-6" data-test="violet-700-0"></div>
      <div class="flex-1 bg-violet-700 bg-hue-rotate-30 h-6" data-test="violet-700-30"></div>
      <div class="flex-1 bg-violet-700 bg-hue-rotate-60 h-6" data-test="violet-700-60"></div>
      <div class="flex-1 bg-violet-700 bg-hue-rotate-90 h-6" data-test="violet-700-90"></div>
      <div class="flex-1 bg-violet-700 bg-hue-rotate-120 h-6" data-test="violet-700-120"></div>
      <div class="flex-1 bg-violet-700 bg-hue-rotate-150 h-6" data-test="violet-700-150"></div>
      <div class="flex-1 bg-violet-700 bg-hue-rotate-180 h-6" data-test="violet-700-180"></div>
      <div class="flex-1 bg-violet-700 bg-hue-rotate-210 h-6" data-test="violet-700-210"></div>
      <div class="flex-1 bg-violet-700 bg-hue-rotate-240 h-6" data-test="violet-700-240"></div>
      <div class="flex-1 bg-violet-700 bg-hue-rotate-270 h-6" data-test="violet-700-270"></div>
      <div class="flex-1 bg-violet-700 bg-hue-rotate-300 h-6" data-test="violet-700-300"></div>
      <div class="flex-1 bg-violet-700 bg-hue-rotate-330 h-6" data-test="violet-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-violet-800 h-6" data-test="violet-800-0"></div>
      <div class="flex-1 bg-violet-800 bg-hue-rotate-30 h-6" data-test="violet-800-30"></div>
      <div class="flex-1 bg-violet-800 bg-hue-rotate-60 h-6" data-test="violet-800-60"></div>
      <div class="flex-1 bg-violet-800 bg-hue-rotate-90 h-6" data-test="violet-800-90"></div>
      <div class="flex-1 bg-violet-800 bg-hue-rotate-120 h-6" data-test="violet-800-120"></div>
      <div class="flex-1 bg-violet-800 bg-hue-rotate-150 h-6" data-test="violet-800-150"></div>
      <div class="flex-1 bg-violet-800 bg-hue-rotate-180 h-6" data-test="violet-800-180"></div>
      <div class="flex-1 bg-violet-800 bg-hue-rotate-210 h-6" data-test="violet-800-210"></div>
      <div class="flex-1 bg-violet-800 bg-hue-rotate-240 h-6" data-test="violet-800-240"></div>
      <div class="flex-1 bg-violet-800 bg-hue-rotate-270 h-6" data-test="violet-800-270"></div>
      <div class="flex-1 bg-violet-800 bg-hue-rotate-300 h-6" data-test="violet-800-300"></div>
      <div class="flex-1 bg-violet-800 bg-hue-rotate-330 h-6" data-test="violet-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-violet-900 h-6" data-test="violet-900-0"></div>
      <div class="flex-1 bg-violet-900 bg-hue-rotate-30 h-6" data-test="violet-900-30"></div>
      <div class="flex-1 bg-violet-900 bg-hue-rotate-60 h-6" data-test="violet-900-60"></div>
      <div class="flex-1 bg-violet-900 bg-hue-rotate-90 h-6" data-test="violet-900-90"></div>
      <div class="flex-1 bg-violet-900 bg-hue-rotate-120 h-6" data-test="violet-900-120"></div>
      <div class="flex-1 bg-violet-900 bg-hue-rotate-150 h-6" data-test="violet-900-150"></div>
      <div class="flex-1 bg-violet-900 bg-hue-rotate-180 h-6" data-test="violet-900-180"></div>
      <div class="flex-1 bg-violet-900 bg-hue-rotate-210 h-6" data-test="violet-900-210"></div>
      <div class="flex-1 bg-violet-900 bg-hue-rotate-240 h-6" data-test="violet-900-240"></div>
      <div class="flex-1 bg-violet-900 bg-hue-rotate-270 h-6" data-test="violet-900-270"></div>
      <div class="flex-1 bg-violet-900 bg-hue-rotate-300 h-6" data-test="violet-900-300"></div>
      <div class="flex-1 bg-violet-900 bg-hue-rotate-330 h-6" data-test="violet-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-violet-950 h-6" data-test="violet-950-0"></div>
      <div class="flex-1 bg-violet-950 bg-hue-rotate-30 h-6" data-test="violet-950-30"></div>
      <div class="flex-1 bg-violet-950 bg-hue-rotate-60 h-6" data-test="violet-950-60"></div>
      <div class="flex-1 bg-violet-950 bg-hue-rotate-90 h-6" data-test="violet-950-90"></div>
      <div class="flex-1 bg-violet-950 bg-hue-rotate-120 h-6" data-test="violet-950-120"></div>
      <div class="flex-1 bg-violet-950 bg-hue-rotate-150 h-6" data-test="violet-950-150"></div>
      <div class="flex-1 bg-violet-950 bg-hue-rotate-180 h-6" data-test="violet-950-180"></div>
      <div class="flex-1 bg-violet-950 bg-hue-rotate-210 h-6" data-test="violet-950-210"></div>
      <div class="flex-1 bg-violet-950 bg-hue-rotate-240 h-6" data-test="violet-950-240"></div>
      <div class="flex-1 bg-violet-950 bg-hue-rotate-270 h-6" data-test="violet-950-270"></div>
      <div class="flex-1 bg-violet-950 bg-hue-rotate-300 h-6" data-test="violet-950-300"></div>
      <div class="flex-1 bg-violet-950 bg-hue-rotate-330 h-6" data-test="violet-950-330"></div>
    </div>
  </div>
</div>

### purple

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-purple-50 h-6" data-test="purple-50-0"></div>
      <div class="flex-1 bg-purple-50 bg-hue-rotate-30 h-6" data-test="purple-50-30"></div>
      <div class="flex-1 bg-purple-50 bg-hue-rotate-60 h-6" data-test="purple-50-60"></div>
      <div class="flex-1 bg-purple-50 bg-hue-rotate-90 h-6" data-test="purple-50-90"></div>
      <div class="flex-1 bg-purple-50 bg-hue-rotate-120 h-6" data-test="purple-50-120"></div>
      <div class="flex-1 bg-purple-50 bg-hue-rotate-150 h-6" data-test="purple-50-150"></div>
      <div class="flex-1 bg-purple-50 bg-hue-rotate-180 h-6" data-test="purple-50-180"></div>
      <div class="flex-1 bg-purple-50 bg-hue-rotate-210 h-6" data-test="purple-50-210"></div>
      <div class="flex-1 bg-purple-50 bg-hue-rotate-240 h-6" data-test="purple-50-240"></div>
      <div class="flex-1 bg-purple-50 bg-hue-rotate-270 h-6" data-test="purple-50-270"></div>
      <div class="flex-1 bg-purple-50 bg-hue-rotate-300 h-6" data-test="purple-50-300"></div>
      <div class="flex-1 bg-purple-50 bg-hue-rotate-330 h-6" data-test="purple-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-purple-100 h-6" data-test="purple-100-0"></div>
      <div class="flex-1 bg-purple-100 bg-hue-rotate-30 h-6" data-test="purple-100-30"></div>
      <div class="flex-1 bg-purple-100 bg-hue-rotate-60 h-6" data-test="purple-100-60"></div>
      <div class="flex-1 bg-purple-100 bg-hue-rotate-90 h-6" data-test="purple-100-90"></div>
      <div class="flex-1 bg-purple-100 bg-hue-rotate-120 h-6" data-test="purple-100-120"></div>
      <div class="flex-1 bg-purple-100 bg-hue-rotate-150 h-6" data-test="purple-100-150"></div>
      <div class="flex-1 bg-purple-100 bg-hue-rotate-180 h-6" data-test="purple-100-180"></div>
      <div class="flex-1 bg-purple-100 bg-hue-rotate-210 h-6" data-test="purple-100-210"></div>
      <div class="flex-1 bg-purple-100 bg-hue-rotate-240 h-6" data-test="purple-100-240"></div>
      <div class="flex-1 bg-purple-100 bg-hue-rotate-270 h-6" data-test="purple-100-270"></div>
      <div class="flex-1 bg-purple-100 bg-hue-rotate-300 h-6" data-test="purple-100-300"></div>
      <div class="flex-1 bg-purple-100 bg-hue-rotate-330 h-6" data-test="purple-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-purple-200 h-6" data-test="purple-200-0"></div>
      <div class="flex-1 bg-purple-200 bg-hue-rotate-30 h-6" data-test="purple-200-30"></div>
      <div class="flex-1 bg-purple-200 bg-hue-rotate-60 h-6" data-test="purple-200-60"></div>
      <div class="flex-1 bg-purple-200 bg-hue-rotate-90 h-6" data-test="purple-200-90"></div>
      <div class="flex-1 bg-purple-200 bg-hue-rotate-120 h-6" data-test="purple-200-120"></div>
      <div class="flex-1 bg-purple-200 bg-hue-rotate-150 h-6" data-test="purple-200-150"></div>
      <div class="flex-1 bg-purple-200 bg-hue-rotate-180 h-6" data-test="purple-200-180"></div>
      <div class="flex-1 bg-purple-200 bg-hue-rotate-210 h-6" data-test="purple-200-210"></div>
      <div class="flex-1 bg-purple-200 bg-hue-rotate-240 h-6" data-test="purple-200-240"></div>
      <div class="flex-1 bg-purple-200 bg-hue-rotate-270 h-6" data-test="purple-200-270"></div>
      <div class="flex-1 bg-purple-200 bg-hue-rotate-300 h-6" data-test="purple-200-300"></div>
      <div class="flex-1 bg-purple-200 bg-hue-rotate-330 h-6" data-test="purple-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-purple-300 h-6" data-test="purple-300-0"></div>
      <div class="flex-1 bg-purple-300 bg-hue-rotate-30 h-6" data-test="purple-300-30"></div>
      <div class="flex-1 bg-purple-300 bg-hue-rotate-60 h-6" data-test="purple-300-60"></div>
      <div class="flex-1 bg-purple-300 bg-hue-rotate-90 h-6" data-test="purple-300-90"></div>
      <div class="flex-1 bg-purple-300 bg-hue-rotate-120 h-6" data-test="purple-300-120"></div>
      <div class="flex-1 bg-purple-300 bg-hue-rotate-150 h-6" data-test="purple-300-150"></div>
      <div class="flex-1 bg-purple-300 bg-hue-rotate-180 h-6" data-test="purple-300-180"></div>
      <div class="flex-1 bg-purple-300 bg-hue-rotate-210 h-6" data-test="purple-300-210"></div>
      <div class="flex-1 bg-purple-300 bg-hue-rotate-240 h-6" data-test="purple-300-240"></div>
      <div class="flex-1 bg-purple-300 bg-hue-rotate-270 h-6" data-test="purple-300-270"></div>
      <div class="flex-1 bg-purple-300 bg-hue-rotate-300 h-6" data-test="purple-300-300"></div>
      <div class="flex-1 bg-purple-300 bg-hue-rotate-330 h-6" data-test="purple-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-purple-400 h-6" data-test="purple-400-0"></div>
      <div class="flex-1 bg-purple-400 bg-hue-rotate-30 h-6" data-test="purple-400-30"></div>
      <div class="flex-1 bg-purple-400 bg-hue-rotate-60 h-6" data-test="purple-400-60"></div>
      <div class="flex-1 bg-purple-400 bg-hue-rotate-90 h-6" data-test="purple-400-90"></div>
      <div class="flex-1 bg-purple-400 bg-hue-rotate-120 h-6" data-test="purple-400-120"></div>
      <div class="flex-1 bg-purple-400 bg-hue-rotate-150 h-6" data-test="purple-400-150"></div>
      <div class="flex-1 bg-purple-400 bg-hue-rotate-180 h-6" data-test="purple-400-180"></div>
      <div class="flex-1 bg-purple-400 bg-hue-rotate-210 h-6" data-test="purple-400-210"></div>
      <div class="flex-1 bg-purple-400 bg-hue-rotate-240 h-6" data-test="purple-400-240"></div>
      <div class="flex-1 bg-purple-400 bg-hue-rotate-270 h-6" data-test="purple-400-270"></div>
      <div class="flex-1 bg-purple-400 bg-hue-rotate-300 h-6" data-test="purple-400-300"></div>
      <div class="flex-1 bg-purple-400 bg-hue-rotate-330 h-6" data-test="purple-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-purple-500 h-6" data-test="purple-500-0"></div>
      <div class="flex-1 bg-purple-500 bg-hue-rotate-30 h-6" data-test="purple-500-30"></div>
      <div class="flex-1 bg-purple-500 bg-hue-rotate-60 h-6" data-test="purple-500-60"></div>
      <div class="flex-1 bg-purple-500 bg-hue-rotate-90 h-6" data-test="purple-500-90"></div>
      <div class="flex-1 bg-purple-500 bg-hue-rotate-120 h-6" data-test="purple-500-120"></div>
      <div class="flex-1 bg-purple-500 bg-hue-rotate-150 h-6" data-test="purple-500-150"></div>
      <div class="flex-1 bg-purple-500 bg-hue-rotate-180 h-6" data-test="purple-500-180"></div>
      <div class="flex-1 bg-purple-500 bg-hue-rotate-210 h-6" data-test="purple-500-210"></div>
      <div class="flex-1 bg-purple-500 bg-hue-rotate-240 h-6" data-test="purple-500-240"></div>
      <div class="flex-1 bg-purple-500 bg-hue-rotate-270 h-6" data-test="purple-500-270"></div>
      <div class="flex-1 bg-purple-500 bg-hue-rotate-300 h-6" data-test="purple-500-300"></div>
      <div class="flex-1 bg-purple-500 bg-hue-rotate-330 h-6" data-test="purple-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-purple-600 h-6" data-test="purple-600-0"></div>
      <div class="flex-1 bg-purple-600 bg-hue-rotate-30 h-6" data-test="purple-600-30"></div>
      <div class="flex-1 bg-purple-600 bg-hue-rotate-60 h-6" data-test="purple-600-60"></div>
      <div class="flex-1 bg-purple-600 bg-hue-rotate-90 h-6" data-test="purple-600-90"></div>
      <div class="flex-1 bg-purple-600 bg-hue-rotate-120 h-6" data-test="purple-600-120"></div>
      <div class="flex-1 bg-purple-600 bg-hue-rotate-150 h-6" data-test="purple-600-150"></div>
      <div class="flex-1 bg-purple-600 bg-hue-rotate-180 h-6" data-test="purple-600-180"></div>
      <div class="flex-1 bg-purple-600 bg-hue-rotate-210 h-6" data-test="purple-600-210"></div>
      <div class="flex-1 bg-purple-600 bg-hue-rotate-240 h-6" data-test="purple-600-240"></div>
      <div class="flex-1 bg-purple-600 bg-hue-rotate-270 h-6" data-test="purple-600-270"></div>
      <div class="flex-1 bg-purple-600 bg-hue-rotate-300 h-6" data-test="purple-600-300"></div>
      <div class="flex-1 bg-purple-600 bg-hue-rotate-330 h-6" data-test="purple-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-purple-700 h-6" data-test="purple-700-0"></div>
      <div class="flex-1 bg-purple-700 bg-hue-rotate-30 h-6" data-test="purple-700-30"></div>
      <div class="flex-1 bg-purple-700 bg-hue-rotate-60 h-6" data-test="purple-700-60"></div>
      <div class="flex-1 bg-purple-700 bg-hue-rotate-90 h-6" data-test="purple-700-90"></div>
      <div class="flex-1 bg-purple-700 bg-hue-rotate-120 h-6" data-test="purple-700-120"></div>
      <div class="flex-1 bg-purple-700 bg-hue-rotate-150 h-6" data-test="purple-700-150"></div>
      <div class="flex-1 bg-purple-700 bg-hue-rotate-180 h-6" data-test="purple-700-180"></div>
      <div class="flex-1 bg-purple-700 bg-hue-rotate-210 h-6" data-test="purple-700-210"></div>
      <div class="flex-1 bg-purple-700 bg-hue-rotate-240 h-6" data-test="purple-700-240"></div>
      <div class="flex-1 bg-purple-700 bg-hue-rotate-270 h-6" data-test="purple-700-270"></div>
      <div class="flex-1 bg-purple-700 bg-hue-rotate-300 h-6" data-test="purple-700-300"></div>
      <div class="flex-1 bg-purple-700 bg-hue-rotate-330 h-6" data-test="purple-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-purple-800 h-6" data-test="purple-800-0"></div>
      <div class="flex-1 bg-purple-800 bg-hue-rotate-30 h-6" data-test="purple-800-30"></div>
      <div class="flex-1 bg-purple-800 bg-hue-rotate-60 h-6" data-test="purple-800-60"></div>
      <div class="flex-1 bg-purple-800 bg-hue-rotate-90 h-6" data-test="purple-800-90"></div>
      <div class="flex-1 bg-purple-800 bg-hue-rotate-120 h-6" data-test="purple-800-120"></div>
      <div class="flex-1 bg-purple-800 bg-hue-rotate-150 h-6" data-test="purple-800-150"></div>
      <div class="flex-1 bg-purple-800 bg-hue-rotate-180 h-6" data-test="purple-800-180"></div>
      <div class="flex-1 bg-purple-800 bg-hue-rotate-210 h-6" data-test="purple-800-210"></div>
      <div class="flex-1 bg-purple-800 bg-hue-rotate-240 h-6" data-test="purple-800-240"></div>
      <div class="flex-1 bg-purple-800 bg-hue-rotate-270 h-6" data-test="purple-800-270"></div>
      <div class="flex-1 bg-purple-800 bg-hue-rotate-300 h-6" data-test="purple-800-300"></div>
      <div class="flex-1 bg-purple-800 bg-hue-rotate-330 h-6" data-test="purple-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-purple-900 h-6" data-test="purple-900-0"></div>
      <div class="flex-1 bg-purple-900 bg-hue-rotate-30 h-6" data-test="purple-900-30"></div>
      <div class="flex-1 bg-purple-900 bg-hue-rotate-60 h-6" data-test="purple-900-60"></div>
      <div class="flex-1 bg-purple-900 bg-hue-rotate-90 h-6" data-test="purple-900-90"></div>
      <div class="flex-1 bg-purple-900 bg-hue-rotate-120 h-6" data-test="purple-900-120"></div>
      <div class="flex-1 bg-purple-900 bg-hue-rotate-150 h-6" data-test="purple-900-150"></div>
      <div class="flex-1 bg-purple-900 bg-hue-rotate-180 h-6" data-test="purple-900-180"></div>
      <div class="flex-1 bg-purple-900 bg-hue-rotate-210 h-6" data-test="purple-900-210"></div>
      <div class="flex-1 bg-purple-900 bg-hue-rotate-240 h-6" data-test="purple-900-240"></div>
      <div class="flex-1 bg-purple-900 bg-hue-rotate-270 h-6" data-test="purple-900-270"></div>
      <div class="flex-1 bg-purple-900 bg-hue-rotate-300 h-6" data-test="purple-900-300"></div>
      <div class="flex-1 bg-purple-900 bg-hue-rotate-330 h-6" data-test="purple-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-purple-950 h-6" data-test="purple-950-0"></div>
      <div class="flex-1 bg-purple-950 bg-hue-rotate-30 h-6" data-test="purple-950-30"></div>
      <div class="flex-1 bg-purple-950 bg-hue-rotate-60 h-6" data-test="purple-950-60"></div>
      <div class="flex-1 bg-purple-950 bg-hue-rotate-90 h-6" data-test="purple-950-90"></div>
      <div class="flex-1 bg-purple-950 bg-hue-rotate-120 h-6" data-test="purple-950-120"></div>
      <div class="flex-1 bg-purple-950 bg-hue-rotate-150 h-6" data-test="purple-950-150"></div>
      <div class="flex-1 bg-purple-950 bg-hue-rotate-180 h-6" data-test="purple-950-180"></div>
      <div class="flex-1 bg-purple-950 bg-hue-rotate-210 h-6" data-test="purple-950-210"></div>
      <div class="flex-1 bg-purple-950 bg-hue-rotate-240 h-6" data-test="purple-950-240"></div>
      <div class="flex-1 bg-purple-950 bg-hue-rotate-270 h-6" data-test="purple-950-270"></div>
      <div class="flex-1 bg-purple-950 bg-hue-rotate-300 h-6" data-test="purple-950-300"></div>
      <div class="flex-1 bg-purple-950 bg-hue-rotate-330 h-6" data-test="purple-950-330"></div>
    </div>
  </div>
</div>

### fuchsia

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-fuchsia-50 h-6" data-test="fuchsia-50-0"></div>
      <div class="flex-1 bg-fuchsia-50 bg-hue-rotate-30 h-6" data-test="fuchsia-50-30"></div>
      <div class="flex-1 bg-fuchsia-50 bg-hue-rotate-60 h-6" data-test="fuchsia-50-60"></div>
      <div class="flex-1 bg-fuchsia-50 bg-hue-rotate-90 h-6" data-test="fuchsia-50-90"></div>
      <div class="flex-1 bg-fuchsia-50 bg-hue-rotate-120 h-6" data-test="fuchsia-50-120"></div>
      <div class="flex-1 bg-fuchsia-50 bg-hue-rotate-150 h-6" data-test="fuchsia-50-150"></div>
      <div class="flex-1 bg-fuchsia-50 bg-hue-rotate-180 h-6" data-test="fuchsia-50-180"></div>
      <div class="flex-1 bg-fuchsia-50 bg-hue-rotate-210 h-6" data-test="fuchsia-50-210"></div>
      <div class="flex-1 bg-fuchsia-50 bg-hue-rotate-240 h-6" data-test="fuchsia-50-240"></div>
      <div class="flex-1 bg-fuchsia-50 bg-hue-rotate-270 h-6" data-test="fuchsia-50-270"></div>
      <div class="flex-1 bg-fuchsia-50 bg-hue-rotate-300 h-6" data-test="fuchsia-50-300"></div>
      <div class="flex-1 bg-fuchsia-50 bg-hue-rotate-330 h-6" data-test="fuchsia-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-fuchsia-100 h-6" data-test="fuchsia-100-0"></div>
      <div class="flex-1 bg-fuchsia-100 bg-hue-rotate-30 h-6" data-test="fuchsia-100-30"></div>
      <div class="flex-1 bg-fuchsia-100 bg-hue-rotate-60 h-6" data-test="fuchsia-100-60"></div>
      <div class="flex-1 bg-fuchsia-100 bg-hue-rotate-90 h-6" data-test="fuchsia-100-90"></div>
      <div class="flex-1 bg-fuchsia-100 bg-hue-rotate-120 h-6" data-test="fuchsia-100-120"></div>
      <div class="flex-1 bg-fuchsia-100 bg-hue-rotate-150 h-6" data-test="fuchsia-100-150"></div>
      <div class="flex-1 bg-fuchsia-100 bg-hue-rotate-180 h-6" data-test="fuchsia-100-180"></div>
      <div class="flex-1 bg-fuchsia-100 bg-hue-rotate-210 h-6" data-test="fuchsia-100-210"></div>
      <div class="flex-1 bg-fuchsia-100 bg-hue-rotate-240 h-6" data-test="fuchsia-100-240"></div>
      <div class="flex-1 bg-fuchsia-100 bg-hue-rotate-270 h-6" data-test="fuchsia-100-270"></div>
      <div class="flex-1 bg-fuchsia-100 bg-hue-rotate-300 h-6" data-test="fuchsia-100-300"></div>
      <div class="flex-1 bg-fuchsia-100 bg-hue-rotate-330 h-6" data-test="fuchsia-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-fuchsia-200 h-6" data-test="fuchsia-200-0"></div>
      <div class="flex-1 bg-fuchsia-200 bg-hue-rotate-30 h-6" data-test="fuchsia-200-30"></div>
      <div class="flex-1 bg-fuchsia-200 bg-hue-rotate-60 h-6" data-test="fuchsia-200-60"></div>
      <div class="flex-1 bg-fuchsia-200 bg-hue-rotate-90 h-6" data-test="fuchsia-200-90"></div>
      <div class="flex-1 bg-fuchsia-200 bg-hue-rotate-120 h-6" data-test="fuchsia-200-120"></div>
      <div class="flex-1 bg-fuchsia-200 bg-hue-rotate-150 h-6" data-test="fuchsia-200-150"></div>
      <div class="flex-1 bg-fuchsia-200 bg-hue-rotate-180 h-6" data-test="fuchsia-200-180"></div>
      <div class="flex-1 bg-fuchsia-200 bg-hue-rotate-210 h-6" data-test="fuchsia-200-210"></div>
      <div class="flex-1 bg-fuchsia-200 bg-hue-rotate-240 h-6" data-test="fuchsia-200-240"></div>
      <div class="flex-1 bg-fuchsia-200 bg-hue-rotate-270 h-6" data-test="fuchsia-200-270"></div>
      <div class="flex-1 bg-fuchsia-200 bg-hue-rotate-300 h-6" data-test="fuchsia-200-300"></div>
      <div class="flex-1 bg-fuchsia-200 bg-hue-rotate-330 h-6" data-test="fuchsia-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-fuchsia-300 h-6" data-test="fuchsia-300-0"></div>
      <div class="flex-1 bg-fuchsia-300 bg-hue-rotate-30 h-6" data-test="fuchsia-300-30"></div>
      <div class="flex-1 bg-fuchsia-300 bg-hue-rotate-60 h-6" data-test="fuchsia-300-60"></div>
      <div class="flex-1 bg-fuchsia-300 bg-hue-rotate-90 h-6" data-test="fuchsia-300-90"></div>
      <div class="flex-1 bg-fuchsia-300 bg-hue-rotate-120 h-6" data-test="fuchsia-300-120"></div>
      <div class="flex-1 bg-fuchsia-300 bg-hue-rotate-150 h-6" data-test="fuchsia-300-150"></div>
      <div class="flex-1 bg-fuchsia-300 bg-hue-rotate-180 h-6" data-test="fuchsia-300-180"></div>
      <div class="flex-1 bg-fuchsia-300 bg-hue-rotate-210 h-6" data-test="fuchsia-300-210"></div>
      <div class="flex-1 bg-fuchsia-300 bg-hue-rotate-240 h-6" data-test="fuchsia-300-240"></div>
      <div class="flex-1 bg-fuchsia-300 bg-hue-rotate-270 h-6" data-test="fuchsia-300-270"></div>
      <div class="flex-1 bg-fuchsia-300 bg-hue-rotate-300 h-6" data-test="fuchsia-300-300"></div>
      <div class="flex-1 bg-fuchsia-300 bg-hue-rotate-330 h-6" data-test="fuchsia-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-fuchsia-400 h-6" data-test="fuchsia-400-0"></div>
      <div class="flex-1 bg-fuchsia-400 bg-hue-rotate-30 h-6" data-test="fuchsia-400-30"></div>
      <div class="flex-1 bg-fuchsia-400 bg-hue-rotate-60 h-6" data-test="fuchsia-400-60"></div>
      <div class="flex-1 bg-fuchsia-400 bg-hue-rotate-90 h-6" data-test="fuchsia-400-90"></div>
      <div class="flex-1 bg-fuchsia-400 bg-hue-rotate-120 h-6" data-test="fuchsia-400-120"></div>
      <div class="flex-1 bg-fuchsia-400 bg-hue-rotate-150 h-6" data-test="fuchsia-400-150"></div>
      <div class="flex-1 bg-fuchsia-400 bg-hue-rotate-180 h-6" data-test="fuchsia-400-180"></div>
      <div class="flex-1 bg-fuchsia-400 bg-hue-rotate-210 h-6" data-test="fuchsia-400-210"></div>
      <div class="flex-1 bg-fuchsia-400 bg-hue-rotate-240 h-6" data-test="fuchsia-400-240"></div>
      <div class="flex-1 bg-fuchsia-400 bg-hue-rotate-270 h-6" data-test="fuchsia-400-270"></div>
      <div class="flex-1 bg-fuchsia-400 bg-hue-rotate-300 h-6" data-test="fuchsia-400-300"></div>
      <div class="flex-1 bg-fuchsia-400 bg-hue-rotate-330 h-6" data-test="fuchsia-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-fuchsia-500 h-6" data-test="fuchsia-500-0"></div>
      <div class="flex-1 bg-fuchsia-500 bg-hue-rotate-30 h-6" data-test="fuchsia-500-30"></div>
      <div class="flex-1 bg-fuchsia-500 bg-hue-rotate-60 h-6" data-test="fuchsia-500-60"></div>
      <div class="flex-1 bg-fuchsia-500 bg-hue-rotate-90 h-6" data-test="fuchsia-500-90"></div>
      <div class="flex-1 bg-fuchsia-500 bg-hue-rotate-120 h-6" data-test="fuchsia-500-120"></div>
      <div class="flex-1 bg-fuchsia-500 bg-hue-rotate-150 h-6" data-test="fuchsia-500-150"></div>
      <div class="flex-1 bg-fuchsia-500 bg-hue-rotate-180 h-6" data-test="fuchsia-500-180"></div>
      <div class="flex-1 bg-fuchsia-500 bg-hue-rotate-210 h-6" data-test="fuchsia-500-210"></div>
      <div class="flex-1 bg-fuchsia-500 bg-hue-rotate-240 h-6" data-test="fuchsia-500-240"></div>
      <div class="flex-1 bg-fuchsia-500 bg-hue-rotate-270 h-6" data-test="fuchsia-500-270"></div>
      <div class="flex-1 bg-fuchsia-500 bg-hue-rotate-300 h-6" data-test="fuchsia-500-300"></div>
      <div class="flex-1 bg-fuchsia-500 bg-hue-rotate-330 h-6" data-test="fuchsia-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-fuchsia-600 h-6" data-test="fuchsia-600-0"></div>
      <div class="flex-1 bg-fuchsia-600 bg-hue-rotate-30 h-6" data-test="fuchsia-600-30"></div>
      <div class="flex-1 bg-fuchsia-600 bg-hue-rotate-60 h-6" data-test="fuchsia-600-60"></div>
      <div class="flex-1 bg-fuchsia-600 bg-hue-rotate-90 h-6" data-test="fuchsia-600-90"></div>
      <div class="flex-1 bg-fuchsia-600 bg-hue-rotate-120 h-6" data-test="fuchsia-600-120"></div>
      <div class="flex-1 bg-fuchsia-600 bg-hue-rotate-150 h-6" data-test="fuchsia-600-150"></div>
      <div class="flex-1 bg-fuchsia-600 bg-hue-rotate-180 h-6" data-test="fuchsia-600-180"></div>
      <div class="flex-1 bg-fuchsia-600 bg-hue-rotate-210 h-6" data-test="fuchsia-600-210"></div>
      <div class="flex-1 bg-fuchsia-600 bg-hue-rotate-240 h-6" data-test="fuchsia-600-240"></div>
      <div class="flex-1 bg-fuchsia-600 bg-hue-rotate-270 h-6" data-test="fuchsia-600-270"></div>
      <div class="flex-1 bg-fuchsia-600 bg-hue-rotate-300 h-6" data-test="fuchsia-600-300"></div>
      <div class="flex-1 bg-fuchsia-600 bg-hue-rotate-330 h-6" data-test="fuchsia-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-fuchsia-700 h-6" data-test="fuchsia-700-0"></div>
      <div class="flex-1 bg-fuchsia-700 bg-hue-rotate-30 h-6" data-test="fuchsia-700-30"></div>
      <div class="flex-1 bg-fuchsia-700 bg-hue-rotate-60 h-6" data-test="fuchsia-700-60"></div>
      <div class="flex-1 bg-fuchsia-700 bg-hue-rotate-90 h-6" data-test="fuchsia-700-90"></div>
      <div class="flex-1 bg-fuchsia-700 bg-hue-rotate-120 h-6" data-test="fuchsia-700-120"></div>
      <div class="flex-1 bg-fuchsia-700 bg-hue-rotate-150 h-6" data-test="fuchsia-700-150"></div>
      <div class="flex-1 bg-fuchsia-700 bg-hue-rotate-180 h-6" data-test="fuchsia-700-180"></div>
      <div class="flex-1 bg-fuchsia-700 bg-hue-rotate-210 h-6" data-test="fuchsia-700-210"></div>
      <div class="flex-1 bg-fuchsia-700 bg-hue-rotate-240 h-6" data-test="fuchsia-700-240"></div>
      <div class="flex-1 bg-fuchsia-700 bg-hue-rotate-270 h-6" data-test="fuchsia-700-270"></div>
      <div class="flex-1 bg-fuchsia-700 bg-hue-rotate-300 h-6" data-test="fuchsia-700-300"></div>
      <div class="flex-1 bg-fuchsia-700 bg-hue-rotate-330 h-6" data-test="fuchsia-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-fuchsia-800 h-6" data-test="fuchsia-800-0"></div>
      <div class="flex-1 bg-fuchsia-800 bg-hue-rotate-30 h-6" data-test="fuchsia-800-30"></div>
      <div class="flex-1 bg-fuchsia-800 bg-hue-rotate-60 h-6" data-test="fuchsia-800-60"></div>
      <div class="flex-1 bg-fuchsia-800 bg-hue-rotate-90 h-6" data-test="fuchsia-800-90"></div>
      <div class="flex-1 bg-fuchsia-800 bg-hue-rotate-120 h-6" data-test="fuchsia-800-120"></div>
      <div class="flex-1 bg-fuchsia-800 bg-hue-rotate-150 h-6" data-test="fuchsia-800-150"></div>
      <div class="flex-1 bg-fuchsia-800 bg-hue-rotate-180 h-6" data-test="fuchsia-800-180"></div>
      <div class="flex-1 bg-fuchsia-800 bg-hue-rotate-210 h-6" data-test="fuchsia-800-210"></div>
      <div class="flex-1 bg-fuchsia-800 bg-hue-rotate-240 h-6" data-test="fuchsia-800-240"></div>
      <div class="flex-1 bg-fuchsia-800 bg-hue-rotate-270 h-6" data-test="fuchsia-800-270"></div>
      <div class="flex-1 bg-fuchsia-800 bg-hue-rotate-300 h-6" data-test="fuchsia-800-300"></div>
      <div class="flex-1 bg-fuchsia-800 bg-hue-rotate-330 h-6" data-test="fuchsia-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-fuchsia-900 h-6" data-test="fuchsia-900-0"></div>
      <div class="flex-1 bg-fuchsia-900 bg-hue-rotate-30 h-6" data-test="fuchsia-900-30"></div>
      <div class="flex-1 bg-fuchsia-900 bg-hue-rotate-60 h-6" data-test="fuchsia-900-60"></div>
      <div class="flex-1 bg-fuchsia-900 bg-hue-rotate-90 h-6" data-test="fuchsia-900-90"></div>
      <div class="flex-1 bg-fuchsia-900 bg-hue-rotate-120 h-6" data-test="fuchsia-900-120"></div>
      <div class="flex-1 bg-fuchsia-900 bg-hue-rotate-150 h-6" data-test="fuchsia-900-150"></div>
      <div class="flex-1 bg-fuchsia-900 bg-hue-rotate-180 h-6" data-test="fuchsia-900-180"></div>
      <div class="flex-1 bg-fuchsia-900 bg-hue-rotate-210 h-6" data-test="fuchsia-900-210"></div>
      <div class="flex-1 bg-fuchsia-900 bg-hue-rotate-240 h-6" data-test="fuchsia-900-240"></div>
      <div class="flex-1 bg-fuchsia-900 bg-hue-rotate-270 h-6" data-test="fuchsia-900-270"></div>
      <div class="flex-1 bg-fuchsia-900 bg-hue-rotate-300 h-6" data-test="fuchsia-900-300"></div>
      <div class="flex-1 bg-fuchsia-900 bg-hue-rotate-330 h-6" data-test="fuchsia-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-fuchsia-950 h-6" data-test="fuchsia-950-0"></div>
      <div class="flex-1 bg-fuchsia-950 bg-hue-rotate-30 h-6" data-test="fuchsia-950-30"></div>
      <div class="flex-1 bg-fuchsia-950 bg-hue-rotate-60 h-6" data-test="fuchsia-950-60"></div>
      <div class="flex-1 bg-fuchsia-950 bg-hue-rotate-90 h-6" data-test="fuchsia-950-90"></div>
      <div class="flex-1 bg-fuchsia-950 bg-hue-rotate-120 h-6" data-test="fuchsia-950-120"></div>
      <div class="flex-1 bg-fuchsia-950 bg-hue-rotate-150 h-6" data-test="fuchsia-950-150"></div>
      <div class="flex-1 bg-fuchsia-950 bg-hue-rotate-180 h-6" data-test="fuchsia-950-180"></div>
      <div class="flex-1 bg-fuchsia-950 bg-hue-rotate-210 h-6" data-test="fuchsia-950-210"></div>
      <div class="flex-1 bg-fuchsia-950 bg-hue-rotate-240 h-6" data-test="fuchsia-950-240"></div>
      <div class="flex-1 bg-fuchsia-950 bg-hue-rotate-270 h-6" data-test="fuchsia-950-270"></div>
      <div class="flex-1 bg-fuchsia-950 bg-hue-rotate-300 h-6" data-test="fuchsia-950-300"></div>
      <div class="flex-1 bg-fuchsia-950 bg-hue-rotate-330 h-6" data-test="fuchsia-950-330"></div>
    </div>
  </div>
</div>

### pink

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-pink-50 h-6" data-test="pink-50-0"></div>
      <div class="flex-1 bg-pink-50 bg-hue-rotate-30 h-6" data-test="pink-50-30"></div>
      <div class="flex-1 bg-pink-50 bg-hue-rotate-60 h-6" data-test="pink-50-60"></div>
      <div class="flex-1 bg-pink-50 bg-hue-rotate-90 h-6" data-test="pink-50-90"></div>
      <div class="flex-1 bg-pink-50 bg-hue-rotate-120 h-6" data-test="pink-50-120"></div>
      <div class="flex-1 bg-pink-50 bg-hue-rotate-150 h-6" data-test="pink-50-150"></div>
      <div class="flex-1 bg-pink-50 bg-hue-rotate-180 h-6" data-test="pink-50-180"></div>
      <div class="flex-1 bg-pink-50 bg-hue-rotate-210 h-6" data-test="pink-50-210"></div>
      <div class="flex-1 bg-pink-50 bg-hue-rotate-240 h-6" data-test="pink-50-240"></div>
      <div class="flex-1 bg-pink-50 bg-hue-rotate-270 h-6" data-test="pink-50-270"></div>
      <div class="flex-1 bg-pink-50 bg-hue-rotate-300 h-6" data-test="pink-50-300"></div>
      <div class="flex-1 bg-pink-50 bg-hue-rotate-330 h-6" data-test="pink-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-pink-100 h-6" data-test="pink-100-0"></div>
      <div class="flex-1 bg-pink-100 bg-hue-rotate-30 h-6" data-test="pink-100-30"></div>
      <div class="flex-1 bg-pink-100 bg-hue-rotate-60 h-6" data-test="pink-100-60"></div>
      <div class="flex-1 bg-pink-100 bg-hue-rotate-90 h-6" data-test="pink-100-90"></div>
      <div class="flex-1 bg-pink-100 bg-hue-rotate-120 h-6" data-test="pink-100-120"></div>
      <div class="flex-1 bg-pink-100 bg-hue-rotate-150 h-6" data-test="pink-100-150"></div>
      <div class="flex-1 bg-pink-100 bg-hue-rotate-180 h-6" data-test="pink-100-180"></div>
      <div class="flex-1 bg-pink-100 bg-hue-rotate-210 h-6" data-test="pink-100-210"></div>
      <div class="flex-1 bg-pink-100 bg-hue-rotate-240 h-6" data-test="pink-100-240"></div>
      <div class="flex-1 bg-pink-100 bg-hue-rotate-270 h-6" data-test="pink-100-270"></div>
      <div class="flex-1 bg-pink-100 bg-hue-rotate-300 h-6" data-test="pink-100-300"></div>
      <div class="flex-1 bg-pink-100 bg-hue-rotate-330 h-6" data-test="pink-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-pink-200 h-6" data-test="pink-200-0"></div>
      <div class="flex-1 bg-pink-200 bg-hue-rotate-30 h-6" data-test="pink-200-30"></div>
      <div class="flex-1 bg-pink-200 bg-hue-rotate-60 h-6" data-test="pink-200-60"></div>
      <div class="flex-1 bg-pink-200 bg-hue-rotate-90 h-6" data-test="pink-200-90"></div>
      <div class="flex-1 bg-pink-200 bg-hue-rotate-120 h-6" data-test="pink-200-120"></div>
      <div class="flex-1 bg-pink-200 bg-hue-rotate-150 h-6" data-test="pink-200-150"></div>
      <div class="flex-1 bg-pink-200 bg-hue-rotate-180 h-6" data-test="pink-200-180"></div>
      <div class="flex-1 bg-pink-200 bg-hue-rotate-210 h-6" data-test="pink-200-210"></div>
      <div class="flex-1 bg-pink-200 bg-hue-rotate-240 h-6" data-test="pink-200-240"></div>
      <div class="flex-1 bg-pink-200 bg-hue-rotate-270 h-6" data-test="pink-200-270"></div>
      <div class="flex-1 bg-pink-200 bg-hue-rotate-300 h-6" data-test="pink-200-300"></div>
      <div class="flex-1 bg-pink-200 bg-hue-rotate-330 h-6" data-test="pink-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-pink-300 h-6" data-test="pink-300-0"></div>
      <div class="flex-1 bg-pink-300 bg-hue-rotate-30 h-6" data-test="pink-300-30"></div>
      <div class="flex-1 bg-pink-300 bg-hue-rotate-60 h-6" data-test="pink-300-60"></div>
      <div class="flex-1 bg-pink-300 bg-hue-rotate-90 h-6" data-test="pink-300-90"></div>
      <div class="flex-1 bg-pink-300 bg-hue-rotate-120 h-6" data-test="pink-300-120"></div>
      <div class="flex-1 bg-pink-300 bg-hue-rotate-150 h-6" data-test="pink-300-150"></div>
      <div class="flex-1 bg-pink-300 bg-hue-rotate-180 h-6" data-test="pink-300-180"></div>
      <div class="flex-1 bg-pink-300 bg-hue-rotate-210 h-6" data-test="pink-300-210"></div>
      <div class="flex-1 bg-pink-300 bg-hue-rotate-240 h-6" data-test="pink-300-240"></div>
      <div class="flex-1 bg-pink-300 bg-hue-rotate-270 h-6" data-test="pink-300-270"></div>
      <div class="flex-1 bg-pink-300 bg-hue-rotate-300 h-6" data-test="pink-300-300"></div>
      <div class="flex-1 bg-pink-300 bg-hue-rotate-330 h-6" data-test="pink-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-pink-400 h-6" data-test="pink-400-0"></div>
      <div class="flex-1 bg-pink-400 bg-hue-rotate-30 h-6" data-test="pink-400-30"></div>
      <div class="flex-1 bg-pink-400 bg-hue-rotate-60 h-6" data-test="pink-400-60"></div>
      <div class="flex-1 bg-pink-400 bg-hue-rotate-90 h-6" data-test="pink-400-90"></div>
      <div class="flex-1 bg-pink-400 bg-hue-rotate-120 h-6" data-test="pink-400-120"></div>
      <div class="flex-1 bg-pink-400 bg-hue-rotate-150 h-6" data-test="pink-400-150"></div>
      <div class="flex-1 bg-pink-400 bg-hue-rotate-180 h-6" data-test="pink-400-180"></div>
      <div class="flex-1 bg-pink-400 bg-hue-rotate-210 h-6" data-test="pink-400-210"></div>
      <div class="flex-1 bg-pink-400 bg-hue-rotate-240 h-6" data-test="pink-400-240"></div>
      <div class="flex-1 bg-pink-400 bg-hue-rotate-270 h-6" data-test="pink-400-270"></div>
      <div class="flex-1 bg-pink-400 bg-hue-rotate-300 h-6" data-test="pink-400-300"></div>
      <div class="flex-1 bg-pink-400 bg-hue-rotate-330 h-6" data-test="pink-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-pink-500 h-6" data-test="pink-500-0"></div>
      <div class="flex-1 bg-pink-500 bg-hue-rotate-30 h-6" data-test="pink-500-30"></div>
      <div class="flex-1 bg-pink-500 bg-hue-rotate-60 h-6" data-test="pink-500-60"></div>
      <div class="flex-1 bg-pink-500 bg-hue-rotate-90 h-6" data-test="pink-500-90"></div>
      <div class="flex-1 bg-pink-500 bg-hue-rotate-120 h-6" data-test="pink-500-120"></div>
      <div class="flex-1 bg-pink-500 bg-hue-rotate-150 h-6" data-test="pink-500-150"></div>
      <div class="flex-1 bg-pink-500 bg-hue-rotate-180 h-6" data-test="pink-500-180"></div>
      <div class="flex-1 bg-pink-500 bg-hue-rotate-210 h-6" data-test="pink-500-210"></div>
      <div class="flex-1 bg-pink-500 bg-hue-rotate-240 h-6" data-test="pink-500-240"></div>
      <div class="flex-1 bg-pink-500 bg-hue-rotate-270 h-6" data-test="pink-500-270"></div>
      <div class="flex-1 bg-pink-500 bg-hue-rotate-300 h-6" data-test="pink-500-300"></div>
      <div class="flex-1 bg-pink-500 bg-hue-rotate-330 h-6" data-test="pink-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-pink-600 h-6" data-test="pink-600-0"></div>
      <div class="flex-1 bg-pink-600 bg-hue-rotate-30 h-6" data-test="pink-600-30"></div>
      <div class="flex-1 bg-pink-600 bg-hue-rotate-60 h-6" data-test="pink-600-60"></div>
      <div class="flex-1 bg-pink-600 bg-hue-rotate-90 h-6" data-test="pink-600-90"></div>
      <div class="flex-1 bg-pink-600 bg-hue-rotate-120 h-6" data-test="pink-600-120"></div>
      <div class="flex-1 bg-pink-600 bg-hue-rotate-150 h-6" data-test="pink-600-150"></div>
      <div class="flex-1 bg-pink-600 bg-hue-rotate-180 h-6" data-test="pink-600-180"></div>
      <div class="flex-1 bg-pink-600 bg-hue-rotate-210 h-6" data-test="pink-600-210"></div>
      <div class="flex-1 bg-pink-600 bg-hue-rotate-240 h-6" data-test="pink-600-240"></div>
      <div class="flex-1 bg-pink-600 bg-hue-rotate-270 h-6" data-test="pink-600-270"></div>
      <div class="flex-1 bg-pink-600 bg-hue-rotate-300 h-6" data-test="pink-600-300"></div>
      <div class="flex-1 bg-pink-600 bg-hue-rotate-330 h-6" data-test="pink-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-pink-700 h-6" data-test="pink-700-0"></div>
      <div class="flex-1 bg-pink-700 bg-hue-rotate-30 h-6" data-test="pink-700-30"></div>
      <div class="flex-1 bg-pink-700 bg-hue-rotate-60 h-6" data-test="pink-700-60"></div>
      <div class="flex-1 bg-pink-700 bg-hue-rotate-90 h-6" data-test="pink-700-90"></div>
      <div class="flex-1 bg-pink-700 bg-hue-rotate-120 h-6" data-test="pink-700-120"></div>
      <div class="flex-1 bg-pink-700 bg-hue-rotate-150 h-6" data-test="pink-700-150"></div>
      <div class="flex-1 bg-pink-700 bg-hue-rotate-180 h-6" data-test="pink-700-180"></div>
      <div class="flex-1 bg-pink-700 bg-hue-rotate-210 h-6" data-test="pink-700-210"></div>
      <div class="flex-1 bg-pink-700 bg-hue-rotate-240 h-6" data-test="pink-700-240"></div>
      <div class="flex-1 bg-pink-700 bg-hue-rotate-270 h-6" data-test="pink-700-270"></div>
      <div class="flex-1 bg-pink-700 bg-hue-rotate-300 h-6" data-test="pink-700-300"></div>
      <div class="flex-1 bg-pink-700 bg-hue-rotate-330 h-6" data-test="pink-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-pink-800 h-6" data-test="pink-800-0"></div>
      <div class="flex-1 bg-pink-800 bg-hue-rotate-30 h-6" data-test="pink-800-30"></div>
      <div class="flex-1 bg-pink-800 bg-hue-rotate-60 h-6" data-test="pink-800-60"></div>
      <div class="flex-1 bg-pink-800 bg-hue-rotate-90 h-6" data-test="pink-800-90"></div>
      <div class="flex-1 bg-pink-800 bg-hue-rotate-120 h-6" data-test="pink-800-120"></div>
      <div class="flex-1 bg-pink-800 bg-hue-rotate-150 h-6" data-test="pink-800-150"></div>
      <div class="flex-1 bg-pink-800 bg-hue-rotate-180 h-6" data-test="pink-800-180"></div>
      <div class="flex-1 bg-pink-800 bg-hue-rotate-210 h-6" data-test="pink-800-210"></div>
      <div class="flex-1 bg-pink-800 bg-hue-rotate-240 h-6" data-test="pink-800-240"></div>
      <div class="flex-1 bg-pink-800 bg-hue-rotate-270 h-6" data-test="pink-800-270"></div>
      <div class="flex-1 bg-pink-800 bg-hue-rotate-300 h-6" data-test="pink-800-300"></div>
      <div class="flex-1 bg-pink-800 bg-hue-rotate-330 h-6" data-test="pink-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-pink-900 h-6" data-test="pink-900-0"></div>
      <div class="flex-1 bg-pink-900 bg-hue-rotate-30 h-6" data-test="pink-900-30"></div>
      <div class="flex-1 bg-pink-900 bg-hue-rotate-60 h-6" data-test="pink-900-60"></div>
      <div class="flex-1 bg-pink-900 bg-hue-rotate-90 h-6" data-test="pink-900-90"></div>
      <div class="flex-1 bg-pink-900 bg-hue-rotate-120 h-6" data-test="pink-900-120"></div>
      <div class="flex-1 bg-pink-900 bg-hue-rotate-150 h-6" data-test="pink-900-150"></div>
      <div class="flex-1 bg-pink-900 bg-hue-rotate-180 h-6" data-test="pink-900-180"></div>
      <div class="flex-1 bg-pink-900 bg-hue-rotate-210 h-6" data-test="pink-900-210"></div>
      <div class="flex-1 bg-pink-900 bg-hue-rotate-240 h-6" data-test="pink-900-240"></div>
      <div class="flex-1 bg-pink-900 bg-hue-rotate-270 h-6" data-test="pink-900-270"></div>
      <div class="flex-1 bg-pink-900 bg-hue-rotate-300 h-6" data-test="pink-900-300"></div>
      <div class="flex-1 bg-pink-900 bg-hue-rotate-330 h-6" data-test="pink-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-pink-950 h-6" data-test="pink-950-0"></div>
      <div class="flex-1 bg-pink-950 bg-hue-rotate-30 h-6" data-test="pink-950-30"></div>
      <div class="flex-1 bg-pink-950 bg-hue-rotate-60 h-6" data-test="pink-950-60"></div>
      <div class="flex-1 bg-pink-950 bg-hue-rotate-90 h-6" data-test="pink-950-90"></div>
      <div class="flex-1 bg-pink-950 bg-hue-rotate-120 h-6" data-test="pink-950-120"></div>
      <div class="flex-1 bg-pink-950 bg-hue-rotate-150 h-6" data-test="pink-950-150"></div>
      <div class="flex-1 bg-pink-950 bg-hue-rotate-180 h-6" data-test="pink-950-180"></div>
      <div class="flex-1 bg-pink-950 bg-hue-rotate-210 h-6" data-test="pink-950-210"></div>
      <div class="flex-1 bg-pink-950 bg-hue-rotate-240 h-6" data-test="pink-950-240"></div>
      <div class="flex-1 bg-pink-950 bg-hue-rotate-270 h-6" data-test="pink-950-270"></div>
      <div class="flex-1 bg-pink-950 bg-hue-rotate-300 h-6" data-test="pink-950-300"></div>
      <div class="flex-1 bg-pink-950 bg-hue-rotate-330 h-6" data-test="pink-950-330"></div>
    </div>
  </div>
</div>

### rose

<div class="my-4 flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0"></span>
    <div class="flex flex-1">
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">0°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">30°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">60°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">90°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">120°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">150°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">180°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">210°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">240°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">270°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">300°</div>
      <div class="flex-1 text-[9px] text-gray-400 font-mono text-center">330°</div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">50</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-rose-50 h-6" data-test="rose-50-0"></div>
      <div class="flex-1 bg-rose-50 bg-hue-rotate-30 h-6" data-test="rose-50-30"></div>
      <div class="flex-1 bg-rose-50 bg-hue-rotate-60 h-6" data-test="rose-50-60"></div>
      <div class="flex-1 bg-rose-50 bg-hue-rotate-90 h-6" data-test="rose-50-90"></div>
      <div class="flex-1 bg-rose-50 bg-hue-rotate-120 h-6" data-test="rose-50-120"></div>
      <div class="flex-1 bg-rose-50 bg-hue-rotate-150 h-6" data-test="rose-50-150"></div>
      <div class="flex-1 bg-rose-50 bg-hue-rotate-180 h-6" data-test="rose-50-180"></div>
      <div class="flex-1 bg-rose-50 bg-hue-rotate-210 h-6" data-test="rose-50-210"></div>
      <div class="flex-1 bg-rose-50 bg-hue-rotate-240 h-6" data-test="rose-50-240"></div>
      <div class="flex-1 bg-rose-50 bg-hue-rotate-270 h-6" data-test="rose-50-270"></div>
      <div class="flex-1 bg-rose-50 bg-hue-rotate-300 h-6" data-test="rose-50-300"></div>
      <div class="flex-1 bg-rose-50 bg-hue-rotate-330 h-6" data-test="rose-50-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">100</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-rose-100 h-6" data-test="rose-100-0"></div>
      <div class="flex-1 bg-rose-100 bg-hue-rotate-30 h-6" data-test="rose-100-30"></div>
      <div class="flex-1 bg-rose-100 bg-hue-rotate-60 h-6" data-test="rose-100-60"></div>
      <div class="flex-1 bg-rose-100 bg-hue-rotate-90 h-6" data-test="rose-100-90"></div>
      <div class="flex-1 bg-rose-100 bg-hue-rotate-120 h-6" data-test="rose-100-120"></div>
      <div class="flex-1 bg-rose-100 bg-hue-rotate-150 h-6" data-test="rose-100-150"></div>
      <div class="flex-1 bg-rose-100 bg-hue-rotate-180 h-6" data-test="rose-100-180"></div>
      <div class="flex-1 bg-rose-100 bg-hue-rotate-210 h-6" data-test="rose-100-210"></div>
      <div class="flex-1 bg-rose-100 bg-hue-rotate-240 h-6" data-test="rose-100-240"></div>
      <div class="flex-1 bg-rose-100 bg-hue-rotate-270 h-6" data-test="rose-100-270"></div>
      <div class="flex-1 bg-rose-100 bg-hue-rotate-300 h-6" data-test="rose-100-300"></div>
      <div class="flex-1 bg-rose-100 bg-hue-rotate-330 h-6" data-test="rose-100-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">200</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-rose-200 h-6" data-test="rose-200-0"></div>
      <div class="flex-1 bg-rose-200 bg-hue-rotate-30 h-6" data-test="rose-200-30"></div>
      <div class="flex-1 bg-rose-200 bg-hue-rotate-60 h-6" data-test="rose-200-60"></div>
      <div class="flex-1 bg-rose-200 bg-hue-rotate-90 h-6" data-test="rose-200-90"></div>
      <div class="flex-1 bg-rose-200 bg-hue-rotate-120 h-6" data-test="rose-200-120"></div>
      <div class="flex-1 bg-rose-200 bg-hue-rotate-150 h-6" data-test="rose-200-150"></div>
      <div class="flex-1 bg-rose-200 bg-hue-rotate-180 h-6" data-test="rose-200-180"></div>
      <div class="flex-1 bg-rose-200 bg-hue-rotate-210 h-6" data-test="rose-200-210"></div>
      <div class="flex-1 bg-rose-200 bg-hue-rotate-240 h-6" data-test="rose-200-240"></div>
      <div class="flex-1 bg-rose-200 bg-hue-rotate-270 h-6" data-test="rose-200-270"></div>
      <div class="flex-1 bg-rose-200 bg-hue-rotate-300 h-6" data-test="rose-200-300"></div>
      <div class="flex-1 bg-rose-200 bg-hue-rotate-330 h-6" data-test="rose-200-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">300</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-rose-300 h-6" data-test="rose-300-0"></div>
      <div class="flex-1 bg-rose-300 bg-hue-rotate-30 h-6" data-test="rose-300-30"></div>
      <div class="flex-1 bg-rose-300 bg-hue-rotate-60 h-6" data-test="rose-300-60"></div>
      <div class="flex-1 bg-rose-300 bg-hue-rotate-90 h-6" data-test="rose-300-90"></div>
      <div class="flex-1 bg-rose-300 bg-hue-rotate-120 h-6" data-test="rose-300-120"></div>
      <div class="flex-1 bg-rose-300 bg-hue-rotate-150 h-6" data-test="rose-300-150"></div>
      <div class="flex-1 bg-rose-300 bg-hue-rotate-180 h-6" data-test="rose-300-180"></div>
      <div class="flex-1 bg-rose-300 bg-hue-rotate-210 h-6" data-test="rose-300-210"></div>
      <div class="flex-1 bg-rose-300 bg-hue-rotate-240 h-6" data-test="rose-300-240"></div>
      <div class="flex-1 bg-rose-300 bg-hue-rotate-270 h-6" data-test="rose-300-270"></div>
      <div class="flex-1 bg-rose-300 bg-hue-rotate-300 h-6" data-test="rose-300-300"></div>
      <div class="flex-1 bg-rose-300 bg-hue-rotate-330 h-6" data-test="rose-300-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">400</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-rose-400 h-6" data-test="rose-400-0"></div>
      <div class="flex-1 bg-rose-400 bg-hue-rotate-30 h-6" data-test="rose-400-30"></div>
      <div class="flex-1 bg-rose-400 bg-hue-rotate-60 h-6" data-test="rose-400-60"></div>
      <div class="flex-1 bg-rose-400 bg-hue-rotate-90 h-6" data-test="rose-400-90"></div>
      <div class="flex-1 bg-rose-400 bg-hue-rotate-120 h-6" data-test="rose-400-120"></div>
      <div class="flex-1 bg-rose-400 bg-hue-rotate-150 h-6" data-test="rose-400-150"></div>
      <div class="flex-1 bg-rose-400 bg-hue-rotate-180 h-6" data-test="rose-400-180"></div>
      <div class="flex-1 bg-rose-400 bg-hue-rotate-210 h-6" data-test="rose-400-210"></div>
      <div class="flex-1 bg-rose-400 bg-hue-rotate-240 h-6" data-test="rose-400-240"></div>
      <div class="flex-1 bg-rose-400 bg-hue-rotate-270 h-6" data-test="rose-400-270"></div>
      <div class="flex-1 bg-rose-400 bg-hue-rotate-300 h-6" data-test="rose-400-300"></div>
      <div class="flex-1 bg-rose-400 bg-hue-rotate-330 h-6" data-test="rose-400-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">500</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-rose-500 h-6" data-test="rose-500-0"></div>
      <div class="flex-1 bg-rose-500 bg-hue-rotate-30 h-6" data-test="rose-500-30"></div>
      <div class="flex-1 bg-rose-500 bg-hue-rotate-60 h-6" data-test="rose-500-60"></div>
      <div class="flex-1 bg-rose-500 bg-hue-rotate-90 h-6" data-test="rose-500-90"></div>
      <div class="flex-1 bg-rose-500 bg-hue-rotate-120 h-6" data-test="rose-500-120"></div>
      <div class="flex-1 bg-rose-500 bg-hue-rotate-150 h-6" data-test="rose-500-150"></div>
      <div class="flex-1 bg-rose-500 bg-hue-rotate-180 h-6" data-test="rose-500-180"></div>
      <div class="flex-1 bg-rose-500 bg-hue-rotate-210 h-6" data-test="rose-500-210"></div>
      <div class="flex-1 bg-rose-500 bg-hue-rotate-240 h-6" data-test="rose-500-240"></div>
      <div class="flex-1 bg-rose-500 bg-hue-rotate-270 h-6" data-test="rose-500-270"></div>
      <div class="flex-1 bg-rose-500 bg-hue-rotate-300 h-6" data-test="rose-500-300"></div>
      <div class="flex-1 bg-rose-500 bg-hue-rotate-330 h-6" data-test="rose-500-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">600</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-rose-600 h-6" data-test="rose-600-0"></div>
      <div class="flex-1 bg-rose-600 bg-hue-rotate-30 h-6" data-test="rose-600-30"></div>
      <div class="flex-1 bg-rose-600 bg-hue-rotate-60 h-6" data-test="rose-600-60"></div>
      <div class="flex-1 bg-rose-600 bg-hue-rotate-90 h-6" data-test="rose-600-90"></div>
      <div class="flex-1 bg-rose-600 bg-hue-rotate-120 h-6" data-test="rose-600-120"></div>
      <div class="flex-1 bg-rose-600 bg-hue-rotate-150 h-6" data-test="rose-600-150"></div>
      <div class="flex-1 bg-rose-600 bg-hue-rotate-180 h-6" data-test="rose-600-180"></div>
      <div class="flex-1 bg-rose-600 bg-hue-rotate-210 h-6" data-test="rose-600-210"></div>
      <div class="flex-1 bg-rose-600 bg-hue-rotate-240 h-6" data-test="rose-600-240"></div>
      <div class="flex-1 bg-rose-600 bg-hue-rotate-270 h-6" data-test="rose-600-270"></div>
      <div class="flex-1 bg-rose-600 bg-hue-rotate-300 h-6" data-test="rose-600-300"></div>
      <div class="flex-1 bg-rose-600 bg-hue-rotate-330 h-6" data-test="rose-600-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">700</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-rose-700 h-6" data-test="rose-700-0"></div>
      <div class="flex-1 bg-rose-700 bg-hue-rotate-30 h-6" data-test="rose-700-30"></div>
      <div class="flex-1 bg-rose-700 bg-hue-rotate-60 h-6" data-test="rose-700-60"></div>
      <div class="flex-1 bg-rose-700 bg-hue-rotate-90 h-6" data-test="rose-700-90"></div>
      <div class="flex-1 bg-rose-700 bg-hue-rotate-120 h-6" data-test="rose-700-120"></div>
      <div class="flex-1 bg-rose-700 bg-hue-rotate-150 h-6" data-test="rose-700-150"></div>
      <div class="flex-1 bg-rose-700 bg-hue-rotate-180 h-6" data-test="rose-700-180"></div>
      <div class="flex-1 bg-rose-700 bg-hue-rotate-210 h-6" data-test="rose-700-210"></div>
      <div class="flex-1 bg-rose-700 bg-hue-rotate-240 h-6" data-test="rose-700-240"></div>
      <div class="flex-1 bg-rose-700 bg-hue-rotate-270 h-6" data-test="rose-700-270"></div>
      <div class="flex-1 bg-rose-700 bg-hue-rotate-300 h-6" data-test="rose-700-300"></div>
      <div class="flex-1 bg-rose-700 bg-hue-rotate-330 h-6" data-test="rose-700-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">800</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-rose-800 h-6" data-test="rose-800-0"></div>
      <div class="flex-1 bg-rose-800 bg-hue-rotate-30 h-6" data-test="rose-800-30"></div>
      <div class="flex-1 bg-rose-800 bg-hue-rotate-60 h-6" data-test="rose-800-60"></div>
      <div class="flex-1 bg-rose-800 bg-hue-rotate-90 h-6" data-test="rose-800-90"></div>
      <div class="flex-1 bg-rose-800 bg-hue-rotate-120 h-6" data-test="rose-800-120"></div>
      <div class="flex-1 bg-rose-800 bg-hue-rotate-150 h-6" data-test="rose-800-150"></div>
      <div class="flex-1 bg-rose-800 bg-hue-rotate-180 h-6" data-test="rose-800-180"></div>
      <div class="flex-1 bg-rose-800 bg-hue-rotate-210 h-6" data-test="rose-800-210"></div>
      <div class="flex-1 bg-rose-800 bg-hue-rotate-240 h-6" data-test="rose-800-240"></div>
      <div class="flex-1 bg-rose-800 bg-hue-rotate-270 h-6" data-test="rose-800-270"></div>
      <div class="flex-1 bg-rose-800 bg-hue-rotate-300 h-6" data-test="rose-800-300"></div>
      <div class="flex-1 bg-rose-800 bg-hue-rotate-330 h-6" data-test="rose-800-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">900</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-rose-900 h-6" data-test="rose-900-0"></div>
      <div class="flex-1 bg-rose-900 bg-hue-rotate-30 h-6" data-test="rose-900-30"></div>
      <div class="flex-1 bg-rose-900 bg-hue-rotate-60 h-6" data-test="rose-900-60"></div>
      <div class="flex-1 bg-rose-900 bg-hue-rotate-90 h-6" data-test="rose-900-90"></div>
      <div class="flex-1 bg-rose-900 bg-hue-rotate-120 h-6" data-test="rose-900-120"></div>
      <div class="flex-1 bg-rose-900 bg-hue-rotate-150 h-6" data-test="rose-900-150"></div>
      <div class="flex-1 bg-rose-900 bg-hue-rotate-180 h-6" data-test="rose-900-180"></div>
      <div class="flex-1 bg-rose-900 bg-hue-rotate-210 h-6" data-test="rose-900-210"></div>
      <div class="flex-1 bg-rose-900 bg-hue-rotate-240 h-6" data-test="rose-900-240"></div>
      <div class="flex-1 bg-rose-900 bg-hue-rotate-270 h-6" data-test="rose-900-270"></div>
      <div class="flex-1 bg-rose-900 bg-hue-rotate-300 h-6" data-test="rose-900-300"></div>
      <div class="flex-1 bg-rose-900 bg-hue-rotate-330 h-6" data-test="rose-900-330"></div>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 text-[10px] text-gray-500 text-right font-mono shrink-0">950</span>
    <div class="flex flex-1">
      <div class="flex-1 bg-rose-950 h-6" data-test="rose-950-0"></div>
      <div class="flex-1 bg-rose-950 bg-hue-rotate-30 h-6" data-test="rose-950-30"></div>
      <div class="flex-1 bg-rose-950 bg-hue-rotate-60 h-6" data-test="rose-950-60"></div>
      <div class="flex-1 bg-rose-950 bg-hue-rotate-90 h-6" data-test="rose-950-90"></div>
      <div class="flex-1 bg-rose-950 bg-hue-rotate-120 h-6" data-test="rose-950-120"></div>
      <div class="flex-1 bg-rose-950 bg-hue-rotate-150 h-6" data-test="rose-950-150"></div>
      <div class="flex-1 bg-rose-950 bg-hue-rotate-180 h-6" data-test="rose-950-180"></div>
      <div class="flex-1 bg-rose-950 bg-hue-rotate-210 h-6" data-test="rose-950-210"></div>
      <div class="flex-1 bg-rose-950 bg-hue-rotate-240 h-6" data-test="rose-950-240"></div>
      <div class="flex-1 bg-rose-950 bg-hue-rotate-270 h-6" data-test="rose-950-270"></div>
      <div class="flex-1 bg-rose-950 bg-hue-rotate-300 h-6" data-test="rose-950-300"></div>
      <div class="flex-1 bg-rose-950 bg-hue-rotate-330 h-6" data-test="rose-950-330"></div>
    </div>
  </div>
</div>
