<script setup lang="ts">
import CodePanel from '@shared/shared/ui/CodePanel.vue';
/*
 * `select-none` on the animated wrapper: a drag across a continuously
 * repainting grid selects nothing a reader wants.
 */
/*
 * Labels must not name a colour: bg-hue-rotate-* moves the background hue every
 * frame, so "white on blue" is false a second later.
 */
const cards = [
  { bg: 'bg-indigo-900', text: 'text-white', label: 'Light on dark', pair: 'white on 900' },
  { bg: 'bg-blue-600', text: 'text-white', label: 'Light on mid', pair: 'white on 600' },
  { bg: 'bg-orange-400', text: 'text-orange-900', label: 'Dark on light', pair: '900 on 400' },
  { bg: 'bg-yellow-200', text: 'text-yellow-400', label: 'Two near tones', pair: '400 on 200' },
];
</script>

<template>
  <section
    class="relative px-6 md:px-12 py-20 bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100"
  >
    <div class="mx-auto w-full max-w-[1300px] space-y-10">
      <div class="grid md:grid-cols-[1fr_1fr] gap-8 items-start">
        <div class="space-y-4 max-w-[56ch]">
          <div class="flex flex-wrap items-center gap-2">
            <span
              class="rounded-full border border-emerald-500/40 bg-emerald-500/15 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300"
              >addition</span
            >
          </div>

          <h2 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95]">
            A live WCAG rating<br />on every element.
          </h2>

          <p class="text-lg leading-relaxed opacity-85">
            A dev-mode badge that prints an element's live WCAG rating. AAA, AA, AA Large or Fail.
            Pure CSS, no JavaScript, no build step. On while you design, off before you ship.
          </p>

          <p class="text-base leading-relaxed opacity-70">
            Change the background, the text color, hover it, animate it. The rating follows.
          </p>

          <p class="text-base leading-relaxed opacity-70">
            With <code class="font-mono">text-contrast-*</code> it adds a fifth state,
            <strong class="font-bold opacity-100">Max</strong>, for when the level you asked for is
            unreachable from that background.
          </p>

          <div class="flex flex-wrap gap-3 pt-1">
            <a
              href="/tw-jib-css/experimental/wcag-badge"
              class="text-sm font-semibold text-(color:--docs-accent) no-underline hover:opacity-70"
              >WCAG badge docs &rarr;</a
            >
            <a
              href="/tw-jib-css/guide/automatic-contrast"
              target="_self"
              class="text-sm font-semibold opacity-60 no-underline hover:opacity-100"
              >The stable shade, every engine &rarr;</a
            >
          </div>
        </div>

        <CodePanel lang="wcag badge"
          >&lt;div class="bg-blue-600 text-white wcag-badge"&gt; Reads: AA &lt;/div&gt; &lt;!--
          shade + badge together --&gt; &lt;div class="bg-yellow-200 text-contrast-aaa
          wcag-badge"&gt; Auto-contrast, plus its rating &lt;/div&gt; /* or call the function
          directly */ .label::before { content: --jib-wcag-rating( var(--bg), var(--fg));
          }</CodePanel
        >
      </div>

      <!-- Animated background + a rating re-solved every frame. On `select-none`,
           see the script comment above. -->
      <div class="space-y-3">
        <p class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span class="font-mono text-[11px] uppercase tracking-wider text-(color:--docs-accent)"
            >wcag-badge</span
          >
          <span class="text-[11px] opacity-60">watch the ratings change as the colors move</span>
        </p>

        <div
          class="grid grid-cols-2 lg:grid-cols-4 gap-3 select-none animate-[landing-demo-hue-cycle_14s_linear_infinite] motion-reduce:animate-none"
        >
          <div
            v-for="c in cards"
            :key="c.label"
            :class="[
              'relative overflow-hidden rounded-xl p-5 min-h-28 flex items-end wcag-badge',
              c.bg,
              c.text,
              'bg-hue-rotate-(number:--landing-demo-hue)',
            ]"
          >
            <span class="flex flex-col gap-0.5">
              <span class="text-sm font-bold">{{ c.label }}</span>
              <span class="font-mono text-[10px] opacity-70">{{ c.pair }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
