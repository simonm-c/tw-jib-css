<script setup lang="ts">
// 6 columns: first 3 light bases, second 3 dark bases — shows text flipping on both
const columns = [
  { hue: 'red',    light: '300', mid: '400', dark: '200' },
  { hue: 'orange', light: '300', mid: '400', dark: '200' },
  { hue: 'yellow', light: '300', mid: '400', dark: '200' },
  { hue: 'green',  light: '800', mid: '700', dark: '900' },
  { hue: 'blue',   light: '800', mid: '700', dark: '900' },
  { hue: 'purple', light: '800', mid: '700', dark: '900' },
];

const ratios = [
  {
    level: 'aa-lg',
    label: 'AA Large — bold titles and headings',
    cls: 'text-a11y-aa-lg',
    textSize: 'text-2xl font-black',
    sample: 'Bold Brand Title',
    shadeKey: 'dark' as const,
  },
  {
    level: 'aa',
    label: 'AA — standard, regular copy',
    cls: 'text-a11y-aa',
    textSize: 'text-base',
    sample: 'Regular body copy, readable anywhere',
    shadeKey: 'dark' as const,
  },
  {
    level: 'aaa',
    label: 'AAA — strictest, small body text',
    cls: 'text-a11y-aaa',
    textSize: 'text-sm',
    sample: 'Small text guaranteed to pass',
    shadeKey: 'dark' as const,
  },
];
</script>

<template>
  <section class="magazine-finale relative min-h-screen scroll-snap-align-start flex items-center bg-gray-950 text-gray-100 dark:bg-white dark:text-gray-900 px-6 md:px-12 py-20">
    <span class="absolute top-6 left-6 font-mono text-[11px] opacity-40">10 / 10</span>

    <div class="mx-auto w-full max-w-[1300px] space-y-10">
      <div class="space-y-4 max-w-[56ch]">
        <p class="font-mono text-[11px] uppercase tracking-widest text-sky-400/80">the showstopper</p>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95]">
          Accessibility,<br />Automated.
        </h2>
        <p class="text-lg leading-relaxed opacity-85">
          Generate perfect colour contrast every time. Pick a desired WCAG ratio — AA, AAA, or AA Large — and the CSS does the rest. Bold titles that match your brand, small text guaranteed to pass. No fuss, no JavaScript, updates automatically when the background changes.
        </p>
      </div>

      <!-- 3 ratio rows, each with 6 cards using real TW colours + bg-hue-rotate animated -->
      <div class="finale-hue-stage space-y-6">
        <div v-for="r in ratios" :key="r.level" class="space-y-2">
          <p class="font-mono text-[11px] uppercase tracking-wider text-sky-400/80">text-a11y-{{ r.level }}</p>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <div
              v-for="col in columns"
              :key="col.hue"
              :class="[
                'finale-card wcag-badge rounded-xl p-4 min-h-35 flex items-end',
                `bg-${col.hue}-${col[r.shadeKey]}`,
                'bg-hue-rotate-(number:--landing-demo-hue)',
                r.cls,
              ]"
            >
              <span :class="[r.textSize, 'leading-tight']">{{ r.sample }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Code -->
      <div class="grid md:grid-cols-2 gap-6">
        <div class="rounded-xl bg-gray-800 border border-gray-700/50 overflow-hidden">
          <div class="px-3 py-1.5 border-b border-gray-700/30">
            <span class="font-mono text-[10px] text-gray-400 uppercase tracking-wider">accessible shade</span>
          </div>
          <pre class="m-0 px-4 py-3 font-mono text-[12px] leading-relaxed text-gray-300"><code>&lt;div class="bg-violet-600 text-a11y-aa"&gt;
  Auto-contrasted text
&lt;/div&gt;

&lt;div class="bg-amber-400 text-a11y-aaa"&gt;
  Stricter AAA contrast
&lt;/div&gt;

&lt;div class="bg-emerald-700 text-a11y-aa-lg"&gt;
  Large-text ratio
&lt;/div&gt;</code></pre>
        </div>

        <div class="rounded-xl bg-gray-800 border border-gray-700/50 overflow-hidden">
          <div class="px-3 py-1.5 border-b border-gray-700/30">
            <span class="font-mono text-[10px] text-gray-400 uppercase tracking-wider">wcag badge</span>
          </div>
          <pre class="m-0 px-4 py-3 font-mono text-[12px] leading-relaxed text-gray-300"><code>&lt;div class="bg-blue-500 text-a11y-aa wcag-badge"&gt;
  Badge shows: AAA / AA / AA Large / Fail
  Auto-positioned, auto-coloured
&lt;/div&gt;

/* Powered by CSS @function */
/* --tw-jib--accessible-shade(background, level, space) */</code></pre>
        </div>
      </div>

      <!-- CTA -->
      <div class="flex gap-3 pt-4">
        <a href="/tw-jib-css/guide/wcag" class="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white no-underline hover:bg-sky-400">Read the docs</a>
        <a href="/tw-jib-css/guide/installation" class="rounded-xl border border-sky-400/50 px-6 py-3 text-sm font-semibold text-sky-300 no-underline hover:bg-sky-400/10">Get Started</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.magazine-finale { scroll-snap-align: start; }
.finale-hue-stage { animation: landing-demo-hue-cycle 12s linear infinite; }
.finale-card { position: relative; overflow: hidden; }
@media (prefers-reduced-motion: reduce) {
  .finale-hue-stage { animation: none; }
}
</style>
