<script setup lang="ts">
// 6 columns: first 3 light bases, second 3 dark bases — shows text flipping on both
const columns = [
  { hue: 'red',    light: '300', mid: '400', dark: '200', darkClass: 'bg-red-200' },
  { hue: 'orange', light: '300', mid: '400', dark: '200', darkClass: 'bg-orange-200' },
  { hue: 'yellow', light: '300', mid: '400', dark: '200', darkClass: 'bg-yellow-200' },
  { hue: 'green',  light: '800', mid: '700', dark: '900', darkClass: 'bg-green-900' },
  { hue: 'blue',   light: '800', mid: '700', dark: '900', darkClass: 'bg-blue-900' },
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
    sample: 'Small text guaranteed to pass',
    shadeKey: 'dark' as const,
  },
];
</script>

<template>
  <section class="relative min-h-screen snap-start flex items-center bg-gray-950 text-gray-100 dark:bg-white dark:text-gray-900 px-6 md:px-12 py-20">
    <div class="mx-auto w-full max-w-[1300px] space-y-10">
      <div class="grid md:grid-cols-[1fr_1fr] gap-8 items-start">
        <div class="space-y-4 max-w-[56ch]">
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95]">
            Accessibility,<br />Automated.
          </h2>
          <p class="text-lg leading-relaxed opacity-85">
            Generate perfect colour contrast every time. Pick a desired WCAG ratio — AA, AAA, or AA Large — and the CSS does the rest. Bold titles that match your brand, small text guaranteed to pass. No fuss, no JavaScript, updates automatically when the background changes.
          </p>
        </div>

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
      </div>

      <!-- 3 ratio rows, each with 6 cards using real TW colours + bg-hue-rotate animated -->
      <div class="space-y-6 animate-[landing-demo-hue-cycle_12s_linear_infinite] motion-reduce:animate-none">
        <div v-for="r in ratios" :key="r.level" class="space-y-2">
          <p class="font-mono text-[11px] uppercase tracking-wider text-sky-400/80">text-a11y-{{ r.level }}</p>
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
