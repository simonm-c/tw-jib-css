<script setup lang="ts">
// Light bases first, then dark – shows text flipping on both
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
    label: 'AA Large – bold titles and headings',
    cls: 'text-a11y-aa-lg',
    textSize: 'text-2xl font-black',
    sample: 'Bold Brand Title',
    shadeKey: 'dark' as const,
  },
  {
    level: 'aa',
    label: 'AA – standard, regular copy',
    cls: 'text-a11y-aa',
    textSize: 'text-base',
    sample: 'Regular body copy, readable anywhere',
    shadeKey: 'dark' as const,
  },
  {
    level: 'aaa',
    label: 'AAA – strictest, small body text',
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
    class="relative min-h-screen flex items-center bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 px-6 md:px-12 py-12"
  >
    <div class="mx-auto w-full max-w-[1300px] space-y-7">
      <!-- Heading and lede share a row so the swatches below clear the fold:
           the copy costs no height of its own, it fills the space beside a
           two-line title. Everything that explains rather than demonstrates
           sits after the demo. -->
      <div class="grid gap-x-10 gap-y-3 md:grid-cols-[auto_1fr] md:items-end">
        <div class="space-y-1.5">
          <p
            class="font-mono text-[11px] uppercase tracking-widest text-sky-500 dark:text-sky-400/80"
          >
            stable · every engine
          </p>
          <h2 class="text-4xl md:text-5xl font-black tracking-tight leading-[0.95]">
            Accessibility,<br />Automated.
          </h2>
        </div>
        <p class="max-w-[60ch] text-base md:text-lg leading-relaxed opacity-80 md:pb-1">
          Ask for a WCAG level – AA, AAA, or AA Large – and the CSS solves the text colour for the
          background it lands on. No JavaScript.
        </p>
      </div>

      <div
        class="space-y-5 animate-[landing-demo-hue-cycle_12s_linear_infinite] motion-reduce:animate-none"
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
                'relative overflow-hidden rounded-xl p-4 min-h-32 flex items-end',
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

      <div class="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start">
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

        <div class="space-y-3">
          <div class="flex flex-wrap items-center gap-2">
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
          <p class="text-sm leading-relaxed opacity-70">
            The shade is <strong class="font-bold opacity-100">solved, not searched</strong> –
            invert the ratio formula for a target luminance, then build a colour that carries it.
            Plain relative colour syntax, so it ships from the main entry.
          </p>
          <!-- The solve targets the threshold with zero headroom, so 8-bit
               rasterisation can round either way and about half the time rounds
               down – an eyedropper or a screenshot-sampling audit then reads a
               hair under. Say so here rather than let a reader discover it with
               a colour picker. -->
          <p class="text-sm leading-relaxed opacity-60">
            Solved to the threshold with no padding, so a pixel-sampled reading can sit a few
            thousandths either side of it. For headroom, raise the level tokens
            <code class="font-mono text-xs">--tw-jib--a11y-ratio-*</code> and every utility follows.
          </p>
          <a
            href="/tw-jib-css/guide/wcag"
            class="inline-block text-sm font-semibold text-sky-500 no-underline hover:text-sky-400"
            >Accessible Shade docs &rarr;</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
