<script setup lang="ts">
const variants = [
  {
    slug: 'magazine',
    letter: 'A',
    title: 'Magazine Spread',
    device: '2-column split, alternating sides',
    blurb: 'Scroll-snap slides with demo on one side, copy + code + stat on the other. Alternating columns per slide. Editorial magazine feel.',
    density: 'high',
    scroll: 'snap',
    reference: 'viteplus.dev · Stripe',
  },
  {
    slug: 'cardstack',
    letter: 'B',
    title: 'Card Stack',
    device: 'Overlapping card clusters',
    blurb: 'Each viewport slide is a cluster of 3-5 tilted cards — demo card, code card, stat card. Tactile, playful, dense information per panel.',
    density: 'very high',
    scroll: 'snap',
    reference: 'Figma · Dribbble',
  },
  {
    slug: 'river',
    letter: 'C',
    title: 'Vertical River',
    device: 'Alternating wide demos + narrow copy',
    blurb: 'Continuous scroll — no snap. Full-width demo bands alternate with centred copy and code. Natural reading flow, longest editorial copy.',
    density: 'medium-high',
    scroll: 'continuous',
    reference: 'Stripe · Linear long-form',
  },
];
</script>

<template>
  <section class="not-prose mx-auto max-w-5xl px-6 py-16 md:py-24">
    <p class="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] opacity-75 text-slate-900 dark:text-slate-200">
      jibcss · landing variants
    </p>

    <h1 class="text-4xl md:text-5xl font-black tracking-[-0.03em] leading-[0.9] text-slate-900 dark:text-slate-200">
      Three layouts. Same direction.
    </h1>

    <p class="mt-4 max-w-[52ch] text-base opacity-80 text-slate-900 dark:text-slate-200 leading-relaxed">
      Dense cinematic slides, reference-card palette, visible markup, accessible shade as the finale showstopper. Three different ways to arrange it.
    </p>

    <div class="mt-12 grid gap-6 md:grid-cols-3">
      <a
        v-for="v in variants"
        :key="v.slug"
        :href="`./${v.slug}`"
        class="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-900 p-5 no-underline transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
      >
        <p class="font-mono text-[10px] uppercase tracking-[0.14em] opacity-50">{{ v.letter }} · {{ v.device }}</p>
        <h2 class="mt-2 text-xl font-black tracking-tight text-gray-900 dark:text-gray-100">{{ v.title }}</h2>
        <p class="mt-3 text-sm opacity-80 text-gray-700 dark:text-gray-300 leading-relaxed">{{ v.blurb }}</p>

        <dl class="mt-4 grid grid-cols-2 gap-x-3 gap-y-1 text-[10px] font-mono opacity-60 text-gray-600 dark:text-gray-400">
          <dt class="uppercase tracking-[0.12em]">density</dt>
          <dd>{{ v.density }}</dd>
          <dt class="uppercase tracking-[0.12em]">scroll</dt>
          <dd>{{ v.scroll }}</dd>
          <dt class="uppercase tracking-[0.12em]">closest to</dt>
          <dd>{{ v.reference }}</dd>
        </dl>

        <p class="mt-4 font-mono text-[11px] text-sky-500 opacity-70 group-hover:opacity-100">Open {{ v.letter }} →</p>
      </a>
    </div>
  </section>
</template>
