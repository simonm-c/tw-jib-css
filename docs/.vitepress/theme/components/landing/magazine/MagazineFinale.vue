<script setup lang="ts">
// Light bases first, then dark — shows text flipping on both
const columns = [
  { hue: 'red', light: '300', mid: '400', dark: '200', darkClass: 'bg-red-200' },
  { hue: 'orange', light: '300', mid: '400', dark: '200', darkClass: 'bg-orange-200' },
  { hue: 'yellow', light: '300', mid: '400', dark: '200', darkClass: 'bg-yellow-200' },
  { hue: 'green', light: '800', mid: '700', dark: '900', darkClass: 'bg-green-900' },
  { hue: 'blue', light: '800', mid: '700', dark: '900', darkClass: 'bg-blue-900' },
  { hue: 'purple', light: '800', mid: '700', dark: '900', darkClass: 'bg-purple-900' },
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
    sample: 'Small text solved for the strictest level',
    shadeKey: 'dark' as const,
  },
];

const engines = ['Chromium', 'Firefox', 'Safari'];
</script>

<template>
  <section
    class="relative min-h-screen snap-start flex items-center bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 px-6 md:px-12 py-20"
  >
    <div class="mx-auto w-full max-w-[1300px] space-y-10">
      <div class="grid md:grid-cols-[1fr_1fr] gap-8 items-start">
        <div class="space-y-4 max-w-[56ch]">
          <p
            class="font-mono text-[11px] uppercase tracking-widest text-sky-500 dark:text-sky-400/80"
          >
            stable · every engine
          </p>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95]">
            Accessibility,<br />Automated.
          </h2>
          <p class="text-lg leading-relaxed opacity-85">
            Generate correct colour contrast every time. Pick a desired WCAG ratio — AA, AAA, or AA
            Large — and the CSS does the rest. Bold titles that match your brand, small text sized
            to the level you asked for. No fuss, no JavaScript, updates automatically when the
            background changes.
          </p>
          <p class="text-base leading-relaxed opacity-70">
            The shade is <strong class="font-bold opacity-100">solved, not searched</strong> —
            invert the WCAG ratio formula for a target luminance, then build a colour that carries
            it. That closed form is plain relative colour syntax, so it ships from the main entry
            and lands on the ratio you asked for, on every engine below.
          </p>
          <!-- The solve targets the threshold with ZERO headroom: measured 4.5000
               and 7.0000 to four decimals across these swatches. But 8-bit
               rasterisation then rounds either way, and about half the time it
               rounds down — bg-red-200 + text-a11y-aaa paints 6.947, so an
               eyedropper or a screenshot-sampling audit reads a hair under.
               Hence "lands on", not "guaranteed to pass": the arithmetic is
               exact, the painted pixel is exact ± one quantisation step. Say so
               rather than let a reader discover it with a colour picker. -->
          <p class="text-sm leading-relaxed opacity-60">
            Solved to the threshold with no padding — the ratio computes exact, then rasterises to 8
            bits per channel like every other colour on the page, so a pixel-sampled reading can sit
            a few thousandths either side. Want a margin above the line? Raise the level tokens,
            <code class="font-mono text-xs">--tw-jib--a11y-ratio-*</code>, and every utility
            follows.
          </p>

          <div class="flex flex-wrap items-center gap-2 pt-1">
            <span
              v-for="engine in engines"
              :key="engine"
              class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-emerald-700 dark:text-emerald-300"
            >
              <span aria-hidden="true">✓</span>{{ engine }}
            </span>
            <span class="font-mono text-[11px] opacity-60"
              >verified exact · 242 colours × 3 levels</span
            >
          </div>

          <a
            href="/tw-jib-css/guide/wcag"
            class="inline-block text-sm font-semibold text-sky-500 no-underline hover:text-sky-400"
            >Accessible Shade docs &rarr;</a
          >
        </div>

        <div
          class="rounded-xl bg-gray-900 dark:bg-gray-800 border border-gray-700/50 overflow-hidden"
        >
          <div class="px-3 py-1.5 border-b border-gray-700/30">
            <span class="font-mono text-[10px] text-gray-400 uppercase tracking-wider"
              >accessible shade</span
            >
          </div>
          <pre
            class="m-0 px-4 py-3 font-mono text-[12px] leading-relaxed text-gray-300"
          ><code>&lt;div class="bg-violet-600 text-a11y-aa"&gt;
  Auto-contrasted text
&lt;/div&gt;

&lt;div class="bg-amber-400 text-a11y-aaa"&gt;
  Stricter AAA contrast
&lt;/div&gt;

&lt;div class="bg-emerald-700 text-a11y-aa-lg"&gt;
  Large-text ratio
&lt;/div&gt;</code></pre>
        </div>
      </div>
      <div
        class="space-y-6 animate-[landing-demo-hue-cycle_12s_linear_infinite] motion-reduce:animate-none"
      >
        <div v-for="r in ratios" :key="r.level" class="space-y-2">
          <p class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span
              class="font-mono text-[11px] uppercase tracking-wider text-sky-500 dark:text-sky-400/80"
              >text-a11y-{{ r.level }}</span
            >
            <span class="text-[11px] opacity-60">{{ r.label }}</span>
          </p>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <div
              v-for="col in columns"
              :key="col.hue"
              :class="[
                'relative overflow-hidden rounded-xl p-4 min-h-35 flex items-end',
                col.darkClass,
                'bg-hue-rotate-(number:--landing-demo-hue)',
                r.cls,
              ]"
            >
              <span :class="[r.textSize, 'leading-tight']">{{ r.sample }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
