---
layout: page
pageClass: home-landing
sidebar: false
aside: false
outline: false
title: Variant C — Vertical River
---

<RiverRoot>

<RiverHero />

<RiverCopy>
<h2 class="text-4xl md:text-5xl font-black tracking-tight leading-tight">Border Gradients, Demystified.</h2>
<p class="text-lg mt-4 opacity-85 leading-relaxed">You've probably tried to add a gradient border before. It usually means pseudo-elements, SVG tricks, or background-clip workarounds that break as soon as you change border-radius. With jibcss, gradient borders are utility classes — the same Tailwind grammar you already know. Linear, radial, conic, and animated spin with 8 interpolation modes.</p>
</RiverCopy>

<RiverCode>&lt;div class="border-4 border-linear-to-br
  border-from-violet-500 border-to-cyan-400
  rounded-2xl"&gt;</RiverCode>

<RiverDemo>
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
<div class="aspect-square rounded-2xl border-4 border-linear-to-br border-from-violet-500 border-to-cyan-400"></div>
<div class="aspect-square rounded-2xl border-4 border-linear-to-br/longer border-from-rose-500 border-to-sky-400"></div>
<div class="aspect-square rounded-2xl border-4 border-conic-0 border-from-indigo-500 border-via-pink-500 border-to-indigo-500"></div>
<div class="aspect-square rounded-full border-4 border-conic-0 border-spin border-spin-duration-4 border-from-emerald-400 border-via-violet-500 border-to-emerald-400"></div>
</div>
</RiverDemo>

<RiverCopy>
<h2 class="text-4xl md:text-5xl font-black tracking-tight leading-tight">Colors, Transformed.</h2>
<p class="text-lg mt-4 opacity-85 leading-relaxed">Lighten, darken, saturate, desaturate, or hue-shift any colour with a single Tailwind utility. Works across every CSS property — bg, text, fill, stroke, outline, accent, border. Compose transforms freely on the same element.</p>
</RiverCopy>

<RiverCode>&lt;div class="bg-blue-500 bg-lighten-30"&gt;
&lt;div class="bg-blue-500 bg-darken-40"&gt;
&lt;div class="bg-blue-500 bg-hue-rotate-90"&gt;
&lt;div class="bg-blue-500 -bg-saturation-50"&gt;</RiverCode>

<RiverDemo>
<div class="space-y-3">
<p class="font-mono text-[11px] uppercase tracking-wider opacity-50">lighten</p>
<div class="flex gap-1">
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-lighten-10"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-lighten-20"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-lighten-30"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-lighten-40"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-lighten-50"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-lighten-60"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-lighten-70"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-lighten-80"></div>
</div>
<p class="font-mono text-[11px] uppercase tracking-wider opacity-50 mt-4">darken</p>
<div class="flex gap-1">
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-darken-10"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-darken-20"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-darken-30"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-darken-40"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-darken-50"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-darken-60"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-darken-70"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-darken-80"></div>
</div>
<p class="font-mono text-[11px] uppercase tracking-wider opacity-50 mt-4">hue rotate</p>
<div class="flex gap-1">
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-hue-rotate-0"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-hue-rotate-45"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-hue-rotate-90"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-hue-rotate-135"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-hue-rotate-180"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-hue-rotate-225"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-hue-rotate-270"></div>
  <div class="flex-1 h-12 first:rounded-l-xl last:rounded-r-xl bg-blue-500 bg-hue-rotate-315"></div>
</div>
</div>
</RiverDemo>

<RiverCopy>
<h2 class="text-4xl md:text-5xl font-black tracking-tight leading-tight">Sixteen Colour Spaces, One Syntax.</h2>
<p class="text-lg mt-4 opacity-85 leading-relaxed">Most libraries lock you into one colour interpolation — usually sRGB. jibcss gives you sixteen. Append a modifier, switch the colour science.</p>
</RiverCopy>

<RiverCode>&lt;div class="bg-red-500 bg-lighten-40/oklch"&gt;
&lt;div class="bg-red-500 bg-lighten-40/hsl"&gt;
&lt;div class="bg-red-500 bg-lighten-40/lab"&gt;</RiverCode>

<RiverDemo>
<div class="grid grid-cols-4 sm:grid-cols-8 gap-2">
  <div class="aspect-square rounded-lg bg-red-500 p-1.5 flex items-end bg-lighten-40/oklch"><span class="font-mono text-[8px] text-gray-900 opacity-75">/oklch</span></div>
  <div class="aspect-square rounded-lg bg-red-500 p-1.5 flex items-end bg-lighten-40/hsl"><span class="font-mono text-[8px] text-gray-900 opacity-75">/hsl</span></div>
  <div class="aspect-square rounded-lg bg-red-500 p-1.5 flex items-end bg-lighten-40/lab"><span class="font-mono text-[8px] text-gray-900 opacity-75">/lab</span></div>
  <div class="aspect-square rounded-lg bg-red-500 p-1.5 flex items-end bg-lighten-40/lch"><span class="font-mono text-[8px] text-gray-900 opacity-75">/lch</span></div>
  <div class="aspect-square rounded-lg bg-red-500 p-1.5 flex items-end bg-lighten-40/oklab"><span class="font-mono text-[8px] text-gray-900 opacity-75">/oklab</span></div>
  <div class="aspect-square rounded-lg bg-red-500 p-1.5 flex items-end bg-lighten-40/hwb"><span class="font-mono text-[8px] text-gray-900 opacity-75">/hwb</span></div>
  <div class="aspect-square rounded-lg bg-red-500 p-1.5 flex items-end bg-lighten-40/rgb"><span class="font-mono text-[8px] text-gray-900 opacity-75">/rgb</span></div>
  <div class="aspect-square rounded-lg bg-red-500 p-1.5 flex items-end bg-lighten-40/srgb"><span class="font-mono text-[8px] text-gray-900 opacity-75">/srgb</span></div>
  <div class="aspect-square rounded-lg bg-red-500 p-1.5 flex items-end bg-lighten-40/srgb-linear"><span class="font-mono text-[8px] text-gray-900 opacity-75">/srgb-linear</span></div>
  <div class="aspect-square rounded-lg bg-red-500 p-1.5 flex items-end bg-lighten-40/display-p3"><span class="font-mono text-[8px] text-gray-900 opacity-75">/display-p3</span></div>
  <div class="aspect-square rounded-lg bg-red-500 p-1.5 flex items-end bg-lighten-40/a98-rgb"><span class="font-mono text-[8px] text-gray-900 opacity-75">/a98-rgb</span></div>
  <div class="aspect-square rounded-lg bg-red-500 p-1.5 flex items-end bg-lighten-40/prophoto-rgb"><span class="font-mono text-[8px] text-gray-900 opacity-75">/prophoto-rgb</span></div>
  <div class="aspect-square rounded-lg bg-red-500 p-1.5 flex items-end bg-lighten-40/rec2020"><span class="font-mono text-[8px] text-gray-900 opacity-75">/rec2020</span></div>
  <div class="aspect-square rounded-lg bg-red-500 p-1.5 flex items-end bg-lighten-40/xyz"><span class="font-mono text-[8px] text-gray-900 opacity-75">/xyz</span></div>
  <div class="aspect-square rounded-lg bg-red-500 p-1.5 flex items-end bg-lighten-40/xyz-d50"><span class="font-mono text-[8px] text-gray-900 opacity-75">/xyz-d50</span></div>
  <div class="aspect-square rounded-lg bg-red-500 p-1.5 flex items-end bg-lighten-40/xyz-d65"><span class="font-mono text-[8px] text-gray-900 opacity-75">/xyz-d65</span></div>
</div>
</RiverDemo>

<RiverCopy>
<h2 class="text-4xl md:text-5xl font-black tracking-tight leading-tight">Ripple. Fully Yours.</h2>
<p class="text-lg mt-4 opacity-85 leading-relaxed">Material-style ripple powered entirely by CSS @property transitions. Any colour, any speed, any origin. Click the panels below.</p>
</RiverCopy>

<RiverCode>&lt;button class="bg-indigo-600 bg-ripple
  ripple-color-white/40
  ripple-position-center
  ripple-duration-60"&gt;</RiverCode>

<RiverDemo>
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
<button class="aspect-square rounded-2xl border-0 cursor-pointer bg-indigo-600 bg-ripple ripple-color-white/40 ripple-position-center ripple-duration-60 text-white text-sm font-mono p-4 text-left">center · white</button>
<button class="aspect-square rounded-2xl border-0 cursor-pointer bg-emerald-600 bg-ripple ripple-color-amber-300/60 ripple-position-top ripple-duration-30 text-white text-sm font-mono p-4 text-left">top · amber</button>
<button class="aspect-square rounded-2xl border-0 cursor-pointer bg-rose-600 bg-ripple ripple-color-white/50 ripple-position-bottom ripple-duration-100 ripple-fade text-white text-sm font-mono p-4 text-left">bottom · fade</button>
<button class="aspect-square rounded-2xl border-0 cursor-pointer bg-sky-600 bg-ripple ripple-color-sky-200/70 ripple-position-left ripple-duration-40 text-white text-sm font-mono p-4 text-left">left · 400ms</button>
</div>
</RiverDemo>

<RiverCopy>
<h2 class="text-4xl md:text-5xl font-black tracking-tight leading-tight">Any Color, Converted.</h2>
<p class="text-lg mt-4 opacity-85 leading-relaxed">Comic halftone and CRT phosphor patterns take any colour and convert it. CMYK dot separation for halftones, RGB channel columns for phosphors. Change the input, the pattern recalculates. No images, pure CSS.</p>
</RiverCopy>

<RiverDemo>
<div class="grid md:grid-cols-2 gap-6">
<div class="space-y-3">
<div class="h-28 rounded-xl bg-comic-blue-500"></div>
<div class="h-28 rounded-xl bg-comic-rose-500"></div>
<p class="font-mono text-[11px] opacity-50">bg-comic-{color} converts to CMYK dots</p>
</div>
<div class="space-y-3">
<div class="h-28 rounded-xl bg-pixel-blue-500 pixel-size-1 pixel-gap-1 pixel-bleed-0.5"></div>
<div class="h-28 rounded-xl bg-pixel-rose-500 pixel-size-1 pixel-gap-1 pixel-bleed-0.5"></div>
<p class="font-mono text-[11px] opacity-50">bg-pixel-{color} converts to RGB columns</p>
</div>
</div>
</RiverDemo>

<RiverExperimentalBreak />

<RiverCopy>
<h2 class="text-4xl md:text-5xl font-black tracking-tight leading-tight text-gray-100">Geometry, Reimagined.</h2>
<p class="text-lg mt-4 opacity-75 leading-relaxed">CSS corner-shape arrives in Chromium 139+. Squircle, bevel, scoop, notch — mix per corner. jibcss wraps it in utility classes with @supports progressive enhancement.</p>
</RiverCopy>

<RiverDemo :dark="true">
<div class="grid grid-cols-3 md:grid-cols-6 gap-4">
<div class="aspect-square rounded-3xl corner-squircle bg-sky-500"></div>
<div class="aspect-square rounded-3xl corner-bevel bg-violet-500"></div>
<div class="aspect-square rounded-3xl corner-tl-scoop corner-br-scoop bg-amber-500"></div>
<div class="aspect-square rounded-3xl corner-t-notch bg-rose-500"></div>
<div class="aspect-square rounded-3xl -corner-3 bg-emerald-500"></div>
<div class="aspect-square rounded-3xl corner-tl-bevel corner-tr-scoop corner-bl-notch corner-br-squircle bg-pink-500"></div>
</div>
</RiverDemo>

<RiverCopy>
<h2 class="text-4xl md:text-5xl font-black tracking-tight leading-tight text-gray-100">Your Debug Assistant.</h2>
<p class="text-lg mt-4 opacity-75 leading-relaxed">Add wcag-badge to any element and instantly validate contrast. AAA, AA, AA Large, or Fail. No JavaScript, no build step.</p>
</RiverCopy>

<RiverDemo :dark="true">
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
<div class="rounded-xl bg-indigo-900 text-white wcag-badge p-5 min-h-30 flex items-end"><span class="text-sm font-bold">White on dark</span></div>
<div class="rounded-xl bg-blue-600 text-white wcag-badge p-5 min-h-30 flex items-end"><span class="text-sm font-bold">White on blue</span></div>
<div class="rounded-xl bg-orange-400 text-orange-900 wcag-badge p-5 min-h-30 flex items-end"><span class="text-sm font-bold">Borderline</span></div>
<div class="rounded-xl bg-yellow-200 text-yellow-400 wcag-badge p-5 min-h-30 flex items-end"><span class="text-sm font-bold">Poor contrast</span></div>
</div>
</RiverDemo>

<RiverFinale />

</RiverRoot>
