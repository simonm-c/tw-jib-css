<template>
  <div class="bg-gray-950 text-gray-100 px-6 py-24 md:py-32">
    <div class="mx-auto max-w-4xl space-y-8">
      <p class="font-mono text-[11px] uppercase tracking-widest text-sky-400/80 text-center">the showstopper</p>
      <h2 class="text-4xl md:text-6xl font-black tracking-tight leading-tight text-center">Accessibility, Automated.</h2>
      <p class="text-xl opacity-80 leading-relaxed text-center max-w-[56ch] mx-auto">
        Generate perfect colour contrast every time. Pick a desired WCAG ratio — AA, AAA, or AA Large — and the CSS does the rest. Bold titles that match your brand, small text guaranteed to pass, whatever your needs. No fuss, no JavaScript, updates automatically when the background changes.
      </p>
      <div class="finale-hue-stage grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-8">
        <div v-for="off in [0,60,120,180,240,300]" :key="off"
          class="text-a11y-aa wcag-badge rounded-xl p-5 min-h-[160px] flex flex-col justify-end"
          :style="{ '--tw-jib--background-color-source': `oklch(0.55 0.2 calc(var(--landing-demo-hue,0)*1deg+${off}deg))`, '--tw-jib--background-color': `oklch(0.55 0.2 calc(var(--landing-demo-hue,0)*1deg+${off}deg))`, background: `oklch(0.55 0.2 calc(var(--landing-demo-hue,0)*1deg+${off}deg))` }"
        >
          <span class="text-xs font-mono opacity-80">+{{ off }}°</span>
          <span class="text-xl font-bold mt-1">Auto contrast</span>
        </div>
      </div>
      <div class="mx-auto max-w-2xl rounded-xl bg-gray-800 border border-gray-700/50 overflow-hidden mt-8">
        <div class="px-3 py-1.5 border-b border-gray-700/30"><span class="font-mono text-[10px] text-gray-400 uppercase tracking-wider">accessible shade</span></div>
        <pre class="m-0 px-4 py-3 font-mono text-[13px] leading-relaxed text-gray-300"><code>&lt;div class="bg-violet-600 text-a11y-aa"&gt;
  Auto-contrasted text
&lt;/div&gt;

&lt;div class="bg-amber-400 text-a11y-aaa"&gt;
  Stricter AAA contrast
&lt;/div&gt;

&lt;div class="bg-emerald-700 text-a11y-aa-lg"&gt;
  Large-text ratio
&lt;/div&gt;</code></pre>
      </div>
      <div class="flex justify-center gap-3 mt-8">
        <a href="/tw-jib-css/guide/wcag" class="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white no-underline">Read the docs</a>
        <a href="/tw-jib-css/guide/installation" class="rounded-xl border border-sky-400/50 px-6 py-3 text-sm font-semibold text-sky-300 no-underline">Get Started</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.finale-hue-stage { animation: landing-demo-hue-cycle 18s linear infinite; }
@media (prefers-reduced-motion: reduce) { .finale-hue-stage { animation: none; } }
</style>
