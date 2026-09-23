<script setup lang="ts">
import CodePanel from '@shared/shared/ui/CodePanel.vue';

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
    label: 'bold titles and headings',
    cls: 'text-contrast-aa-lg',
    textSize: 'text-2xl font-black',
    sample: 'Bold Brand Title',
    shadeKey: 'dark' as const,
  },
  {
    level: 'aa',
    label: 'body copy, the usual choice',
    cls: 'text-contrast-aa',
    textSize: 'text-base',
    sample: 'Body copy, readable anywhere',
    shadeKey: 'dark' as const,
  },
  {
    level: 'aaa',
    label: 'small text, the strictest level',
    cls: 'text-contrast-aaa',
    textSize: 'text-sm',
    sample: 'Small text, strictest level',
    shadeKey: 'dark' as const,
  },
];

const engines = ['Chromium', 'Firefox', 'Safari'];
</script>

<template>
  <section
    class="relative bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 px-6 md:px-12 py-12"
  >
    <div class="mx-auto w-full max-w-[1300px] space-y-7">
      <div class="grid gap-x-10 gap-y-3 md:grid-cols-[auto_1fr] md:items-end">
        <div class="space-y-1.5">
          <h2 class="text-4xl md:text-5xl font-black tracking-tight leading-[0.95]">
            Text that adapts<br />to any background.
          </h2>
        </div>
        <p class="max-w-[60ch] text-base md:text-lg leading-relaxed opacity-80 md:pb-1">
          Pick a text color by hand and you own it forever, through every palette tweak and every
          theme after. Name the level instead, AA, AAA or AA Large, and CSS solves the color from
          whatever background is actually under it.
        </p>
      </div>

      <div
        class="space-y-5 animate-[landing-demo-hue-cycle_12s_linear_infinite] motion-reduce:animate-none"
      >
        <div v-for="r in ratios" :key="r.level" class="space-y-2">
          <p class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span
              class="font-mono text-[11px] uppercase tracking-wider text-(color:--docs-accent) dark:text-(color:--docs-accent) dark:text-lighten-15"
              >text-contrast-{{ r.level }}</span
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
        <CodePanel lang="css"
          >&lt;div class="bg-violet-600 text-contrast-aa"&gt; Auto-contrasted text &lt;/div&gt;
          &lt;div class="bg-amber-400 text-contrast-aaa"&gt; Stricter AAA contrast &lt;/div&gt;
          &lt;div class="bg-emerald-700 text-contrast-aa-lg"&gt; Large-text ratio
          &lt;/div&gt;</CodePanel
        >

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
              >exact on 242 colors, all three levels</span
            >
          </div>
          <p class="text-sm leading-relaxed opacity-70">
            The shade is <strong class="font-bold opacity-100">solved, not searched</strong>. Invert
            the ratio formula for a target luminance, build a color that carries it. Plain relative
            color syntax, so it ships from the main entry.
          </p>
          <p class="text-sm leading-relaxed opacity-60">
            It lands on the threshold with no padding, so a pixel-sampled reading can sit a few
            thousandths either side. Want headroom? Raise
            <code class="font-mono text-xs">--jib-contrast-ratio-*</code> and every utility follows.
          </p>
          <a
            href="/tw-jib-css/guide/automatic-contrast"
            class="inline-block text-sm font-semibold text-(color:--docs-accent) no-underline hover:text-lighten-15"
            >Accessible Shade docs &rarr;</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
