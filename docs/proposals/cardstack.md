---
layout: page
pageClass: home-landing
sidebar: false
aside: false
outline: false
title: Variant B — Card Stack
---

<CardStackRoot>

<!-- 1. Hero -->
<CardStackSlide :dark="true">
  <div class="flex flex-col items-center text-center gap-6">
    <JibLogo id="cs-logo" style="width: min(32vw, 280px); height: auto; filter: drop-shadow(0 12px 24px oklch(0.5 0.15 237 / 0.4));" />
    <h1 class="text-4xl md:text-5xl font-black tracking-tight">Set sail with Tailwind v4.</h1>
    <p class="text-base opacity-75 max-w-[44ch]">A CSS-first plugin. Drop it in — ship further.</p>
    <div class="flex flex-wrap justify-center gap-2">
      <StatPill n="1" caption="import" />
      <StatPill n="0" caption="JS" />
      <StatPill n="16" caption="spaces" />
    </div>
  </div>
</CardStackSlide>

<!-- 2. Borders -->
<CardStackSlide>
  <div class="grid md:grid-cols-[1.3fr_1fr] gap-6 items-start">
    <DemoCard title="border gradients, demystified" :rotate="-1" :z="20" :large="true">
      <h2 class="text-2xl font-black tracking-tight mb-3">Intuitive class syntax.</h2>
      <div class="grid grid-cols-2 gap-3 mt-4">
        <div class="aspect-square rounded-xl border-4 border-linear-to-br border-from-violet-500 border-to-cyan-400"></div>
        <div class="aspect-square rounded-xl border-4 border-conic-0 border-spin border-spin-duration-4 border-from-rose-500 border-via-amber-400 border-to-rose-500"></div>
      </div>
    </DemoCard>
    <div class="space-y-3">
      <CodeCard :rotate="1" :z="15">&lt;div class="border-4 border-linear-to-br
  border-from-violet-500
  border-to-cyan-400 rounded-xl"&gt;</CodeCard>
      <StatCard n="8" caption="interpolation modes" :rotate="-2" :z="10" />
      <InfoCard :rotate="1" :z="8"><p class="text-sm">Same grammar as <code class="font-mono text-sky-500">bg-linear-*</code>. No new concepts.</p></InfoCard>
    </div>
  </div>
</CardStackSlide>

<!-- 3. Colour Transforms -->
<CardStackSlide>
  <div class="grid md:grid-cols-[1fr_1.3fr] gap-6 items-start">
    <div class="space-y-3">
      <InfoCard :rotate="-1" :z="15"><h2 class="text-xl font-black tracking-tight">Colors, Transformed.</h2><p class="text-sm mt-1 opacity-80">Lighten, darken, saturate, hue-shift. One class each.</p></InfoCard>
      <CodeCard :rotate="2" :z="12">&lt;div class="bg-blue-500 bg-lighten-30"&gt;
&lt;div class="bg-blue-500 bg-darken-40"&gt;
&lt;div class="bg-blue-500 bg-hue-rotate-90"&gt;</CodeCard>
      <StatCard n="5" caption="transform types" :rotate="-1" :z="8" />
    </div>
    <DemoCard title="live swatches" :rotate="1" :z="20" :large="true">
      <div class="space-y-2">
        <div class="flex gap-1">
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-lighten-10"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-lighten-20"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-lighten-30"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-lighten-40"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-lighten-50"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-lighten-60"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-lighten-70"></div>
        </div>
        <div class="flex gap-1">
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-darken-10"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-darken-20"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-darken-30"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-darken-40"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-darken-50"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-darken-60"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-darken-70"></div>
        </div>
        <div class="flex gap-1">
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-hue-rotate-0"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-hue-rotate-45"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-hue-rotate-90"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-hue-rotate-135"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-hue-rotate-180"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-hue-rotate-225"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-hue-rotate-270"></div>
          <div class="flex-1 h-8 first:rounded-l last:rounded-r bg-blue-500 bg-hue-rotate-315"></div>
        </div>
      </div>
    </DemoCard>
  </div>
</CardStackSlide>

<!-- 4. Colour Spaces -->
<CardStackSlide>
  <div class="grid md:grid-cols-[1.3fr_1fr] gap-6 items-start">
    <DemoCard title="16 spaces, same syntax" :rotate="-1" :z="20" :large="true">
      <div class="grid grid-cols-4 gap-1.5">
        <div class="aspect-[4/3] rounded bg-red-500 p-1.5 flex items-end bg-lighten-40/oklch"><span class="font-mono text-[8px] text-gray-900 opacity-75">/oklch</span></div>
        <div class="aspect-[4/3] rounded bg-red-500 p-1.5 flex items-end bg-lighten-40/hsl"><span class="font-mono text-[8px] text-gray-900 opacity-75">/hsl</span></div>
        <div class="aspect-[4/3] rounded bg-red-500 p-1.5 flex items-end bg-lighten-40/lab"><span class="font-mono text-[8px] text-gray-900 opacity-75">/lab</span></div>
        <div class="aspect-[4/3] rounded bg-red-500 p-1.5 flex items-end bg-lighten-40/lch"><span class="font-mono text-[8px] text-gray-900 opacity-75">/lch</span></div>
        <div class="aspect-[4/3] rounded bg-red-500 p-1.5 flex items-end bg-lighten-40/oklab"><span class="font-mono text-[8px] text-gray-900 opacity-75">/oklab</span></div>
        <div class="aspect-[4/3] rounded bg-red-500 p-1.5 flex items-end bg-lighten-40/hwb"><span class="font-mono text-[8px] text-gray-900 opacity-75">/hwb</span></div>
        <div class="aspect-[4/3] rounded bg-red-500 p-1.5 flex items-end bg-lighten-40/rgb"><span class="font-mono text-[8px] text-gray-900 opacity-75">/rgb</span></div>
        <div class="aspect-[4/3] rounded bg-red-500 p-1.5 flex items-end bg-lighten-40/srgb"><span class="font-mono text-[8px] text-gray-900 opacity-75">/srgb</span></div>
        <div class="aspect-[4/3] rounded bg-red-500 p-1.5 flex items-end bg-lighten-40/srgb-linear"><span class="font-mono text-[8px] text-gray-900 opacity-75">/srgb-linear</span></div>
        <div class="aspect-[4/3] rounded bg-red-500 p-1.5 flex items-end bg-lighten-40/display-p3"><span class="font-mono text-[8px] text-gray-900 opacity-75">/display-p3</span></div>
        <div class="aspect-[4/3] rounded bg-red-500 p-1.5 flex items-end bg-lighten-40/a98-rgb"><span class="font-mono text-[8px] text-gray-900 opacity-75">/a98-rgb</span></div>
        <div class="aspect-[4/3] rounded bg-red-500 p-1.5 flex items-end bg-lighten-40/prophoto-rgb"><span class="font-mono text-[8px] text-gray-900 opacity-75">/prophoto-rgb</span></div>
        <div class="aspect-[4/3] rounded bg-red-500 p-1.5 flex items-end bg-lighten-40/rec2020"><span class="font-mono text-[8px] text-gray-900 opacity-75">/rec2020</span></div>
        <div class="aspect-[4/3] rounded bg-red-500 p-1.5 flex items-end bg-lighten-40/xyz"><span class="font-mono text-[8px] text-gray-900 opacity-75">/xyz</span></div>
        <div class="aspect-[4/3] rounded bg-red-500 p-1.5 flex items-end bg-lighten-40/xyz-d50"><span class="font-mono text-[8px] text-gray-900 opacity-75">/xyz-d50</span></div>
        <div class="aspect-[4/3] rounded bg-red-500 p-1.5 flex items-end bg-lighten-40/xyz-d65"><span class="font-mono text-[8px] text-gray-900 opacity-75">/xyz-d65</span></div>
      </div>
    </DemoCard>
    <div class="space-y-3">
      <InfoCard :rotate="1" :z="15"><h2 class="text-xl font-black tracking-tight">Sixteen Colour Spaces.</h2><p class="text-sm mt-1 opacity-80">Your colour theory, not ours. Swap modifier, swap space.</p></InfoCard>
      <CodeCard :rotate="-1" :z="12">&lt;div class="bg-red-500 bg-lighten-40/oklch"&gt;
&lt;div class="bg-red-500 bg-lighten-40/hsl"&gt;
&lt;div class="bg-red-500 bg-lighten-40/lab"&gt;</CodeCard>
      <StatCard n="16" caption="colour spaces" :rotate="2" :z="8" />
    </div>
  </div>
</CardStackSlide>

<!-- 5. Ripple -->
<CardStackSlide>
  <div class="grid md:grid-cols-[1fr_1.3fr] gap-6 items-start">
    <div class="space-y-3">
      <InfoCard :rotate="-2" :z="15"><h2 class="text-xl font-black tracking-tight">Fully Customisable Ripple.</h2><p class="text-sm mt-1 opacity-80">Any colour, any speed, any origin. Zero JS.</p></InfoCard>
      <CodeCard :rotate="1" :z="12">&lt;button class="bg-indigo-600 bg-ripple
  ripple-color-white/40
  ripple-position-center
  ripple-duration-60"&gt;</CodeCard>
      <StatCard n="0" caption="JavaScript" :rotate="-1" :z="8" />
    </div>
    <DemoCard title="tap to test" :rotate="1" :z="20" :large="true">
      <div class="grid grid-cols-2 gap-3">
        <button class="aspect-square rounded-xl border-0 cursor-pointer bg-indigo-600 bg-ripple ripple-color-white/40 ripple-position-center ripple-duration-60 text-white text-xs font-mono p-3 text-left">center</button>
        <button class="aspect-square rounded-xl border-0 cursor-pointer bg-emerald-600 bg-ripple ripple-color-amber-300/60 ripple-position-top ripple-duration-30 text-white text-xs font-mono p-3 text-left">top · fast</button>
        <button class="aspect-square rounded-xl border-0 cursor-pointer bg-rose-600 bg-ripple ripple-color-white/50 ripple-position-bottom ripple-duration-100 ripple-fade text-white text-xs font-mono p-3 text-left">bottom · fade</button>
        <button class="aspect-square rounded-xl border-0 cursor-pointer bg-sky-600 bg-ripple ripple-color-sky-200/70 ripple-position-left ripple-duration-40 text-white text-xs font-mono p-3 text-left">left · 400ms</button>
      </div>
    </DemoCard>
  </div>
</CardStackSlide>

<!-- 6. Comic + CRT -->
<CardStackSlide>
  <div class="grid md:grid-cols-2 gap-6 items-start">
    <DemoCard title="any color → CMYK halftone" :rotate="-1" :z="20" :large="true">
      <div class="space-y-3">
        <div class="h-24 rounded-xl bg-comic-blue-500"></div>
        <div class="h-24 rounded-xl bg-comic-rose-500"></div>
      </div>
      <p class="text-xs font-mono mt-3 opacity-60">bg-comic-{color} converts any colour to dots</p>
    </DemoCard>
    <DemoCard title="any color → RGB pixels" :rotate="1" :z="20" :large="true">
      <div class="space-y-3">
        <div class="h-24 rounded-xl bg-pixel-blue-500 pixel-size-1 pixel-gap-1 pixel-bleed-0.5"></div>
        <div class="h-24 rounded-xl bg-pixel-rose-500 pixel-size-1 pixel-gap-1 pixel-bleed-0.5"></div>
      </div>
      <p class="text-xs font-mono mt-3 opacity-60">bg-pixel-{color} converts to RGB columns</p>
    </DemoCard>
  </div>
</CardStackSlide>

<!-- 7. Experimental Waters -->
<CardStackSlide :dark="true">
  <div class="text-center space-y-4 py-12">
    <p class="font-mono text-[11px] uppercase tracking-widest text-sky-400/80">crossing the meridian</p>
    <h2 class="text-4xl md:text-5xl font-black tracking-tight">Experimental Waters</h2>
    <p class="text-base opacity-60 max-w-[44ch] mx-auto">Upcoming features, available now. Chromium-only — progressive enhancement.</p>
  </div>
</CardStackSlide>

<!-- 8. Corner Shape -->
<CardStackSlide :dark="true">
  <div class="grid md:grid-cols-[1fr_1.2fr] gap-6 items-start">
    <div class="space-y-3">
      <InfoCard :rotate="-1" :z="15"><h2 class="text-xl font-black tracking-tight">Geometry, Reimagined.</h2><p class="text-sm mt-1 opacity-80">Beyond border-radius. Progressive enhancement.</p></InfoCard>
      <CodeCard :rotate="1" :z="12">&lt;div class="corner-squircle rounded-3xl"&gt;
&lt;div class="corner-bevel rounded-3xl"&gt;
&lt;div class="corner-tl-scoop
  corner-br-scoop rounded-3xl"&gt;</CodeCard>
    </div>
    <DemoCard title="corner-shape" :rotate="1" :z="20" :large="true">
      <div class="grid grid-cols-3 gap-3">
        <div class="aspect-square rounded-3xl corner-squircle bg-sky-500"></div>
        <div class="aspect-square rounded-3xl corner-bevel bg-violet-500"></div>
        <div class="aspect-square rounded-3xl corner-tl-scoop corner-br-scoop bg-amber-500"></div>
        <div class="aspect-square rounded-3xl corner-t-notch bg-rose-500"></div>
        <div class="aspect-square rounded-3xl -corner-3 bg-emerald-500"></div>
        <div class="aspect-square rounded-3xl corner-tl-bevel corner-tr-scoop corner-bl-notch corner-br-squircle bg-pink-500"></div>
      </div>
    </DemoCard>
  </div>
</CardStackSlide>

<!-- 9. WCAG Badge -->
<CardStackSlide :dark="true">
  <div class="grid md:grid-cols-[1.3fr_1fr] gap-6 items-start">
    <DemoCard title="debug assistant" :rotate="-1" :z="20" :large="true">
      <h2 class="text-2xl font-black tracking-tight mb-3">Accessibility, one class away.</h2>
      <div class="grid grid-cols-2 gap-3 mt-3">
        <div class="rounded-xl bg-indigo-900 text-white wcag-badge p-4 min-h-[90px] flex items-end"><span class="text-sm font-bold">White on dark</span></div>
        <div class="rounded-xl bg-blue-600 text-white wcag-badge p-4 min-h-[90px] flex items-end"><span class="text-sm font-bold">White on blue</span></div>
        <div class="rounded-xl bg-orange-400 text-orange-900 wcag-badge p-4 min-h-[90px] flex items-end"><span class="text-sm font-bold">Borderline</span></div>
        <div class="rounded-xl bg-yellow-200 text-yellow-400 wcag-badge p-4 min-h-[90px] flex items-end"><span class="text-sm font-bold">Poor contrast</span></div>
      </div>
    </DemoCard>
    <div class="space-y-3">
      <CodeCard :rotate="1" :z="15">&lt;div class="bg-blue-600 text-a11y-aa
  wcag-badge"&gt;
  Instant contrast validation
&lt;/div&gt;</CodeCard>
      <InfoCard :rotate="-1" :z="10"><p class="text-sm">No JavaScript. No build step. Just add <code class="font-mono text-sky-500">wcag-badge</code>.</p></InfoCard>
    </div>
  </div>
</CardStackSlide>

<!-- 10. Accessible Shade Finale -->
<CardStackSlide :dark="true">
  <div class="space-y-8">
    <div class="text-center">
      <p class="font-mono text-[11px] uppercase tracking-widest text-sky-400/80">the showstopper</p>
      <h2 class="text-4xl md:text-5xl font-black tracking-tight mt-2">Accessibility, Automated.</h2>
      <p class="text-base opacity-75 max-w-[52ch] mx-auto mt-3">Generate perfect colour contrast every time. Pick AA, AAA, or AA Large — the CSS does the rest. No fuss. Updates automatically.</p>
    </div>
    <div class="finale-hue-stage grid grid-cols-3 md:grid-cols-6 gap-2">
      <div v-for="off in [0,60,120,180,240,300]" :key="off"
        class="text-a11y-aa wcag-badge rounded-xl p-4 min-h-[120px] flex flex-col justify-end"
        :style="{ '--tw-jib--background-color-source': `oklch(0.55 0.2 calc(var(--landing-demo-hue,0)*1deg+${off}deg))`, '--tw-jib--background-color': `oklch(0.55 0.2 calc(var(--landing-demo-hue,0)*1deg+${off}deg))`, background: `oklch(0.55 0.2 calc(var(--landing-demo-hue,0)*1deg+${off}deg))` }"
      >
        <span class="text-xs font-mono opacity-80">+{{ off }}°</span>
        <span class="text-lg font-bold mt-1">Auto</span>
      </div>
    </div>
    <div class="flex justify-center gap-3">
      <a href="/tw-jib-css/guide/wcag" class="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white no-underline">Read the docs</a>
      <a href="/tw-jib-css/guide/installation" class="rounded-xl border border-sky-400/50 px-6 py-3 text-sm font-semibold text-sky-300 no-underline">Get Started</a>
    </div>
  </div>
</CardStackSlide>

</CardStackRoot>
