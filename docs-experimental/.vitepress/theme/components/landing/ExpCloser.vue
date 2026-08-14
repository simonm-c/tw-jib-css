<script setup lang="ts">
const pages = [
  {
    kind: 'override' as const,
    title: 'Functions',
    href: '/tw-jib-css/experimental/functions',
    support: 'Chromium only',
    blurb: 'The five callable functions, and the four utility families they override.',
  },
  {
    kind: 'addition' as const,
    title: 'Corner Shape',
    href: '/tw-jib-css/experimental/corner',
    support: 'Chrome 139+ · ~68%',
    blurb: 'Squircles, bevels, scoops, notches and arbitrary superellipses, per corner.',
  },
  {
    kind: 'addition' as const,
    title: 'Interpolate Size',
    href: '/tw-jib-css/experimental/interpolate',
    support: 'Chromium · ~48%',
    blurb: 'Animate to auto and the other intrinsic keywords.',
  },
  {
    kind: 'addition' as const,
    title: 'Base Select Picker',
    href: '/tw-jib-css/experimental/picker',
    support: 'Chromium, Firefox WIP',
    blurb: 'appearance: base-select, plus variants for the popup, icon and checkmark.',
  },
  {
    kind: 'addition' as const,
    title: 'WCAG Badge',
    href: '/tw-jib-css/experimental/wcag-badge',
    support: 'Chromium only',
    blurb: 'A live contrast rating on any element, computed entirely in CSS.',
  },
];
</script>

<template>
  <section
    class="relative min-h-[70vh] snap-start flex items-center px-6 md:px-12 py-16 bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100"
  >
    <div class="mx-auto w-full max-w-[1300px] space-y-8">
      <div class="space-y-2">
        <h2 class="text-3xl md:text-4xl font-black tracking-tight">Everything In Here.</h2>
        <p class="text-base opacity-70 max-w-[52ch] leading-relaxed">
          Five pages. One of them changes classes you already use; the other four cannot.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <a
          v-for="p in pages"
          :key="p.href"
          :href="p.href"
          class="group block rounded-2xl border border-gray-300/60 dark:border-gray-700/60 p-5 space-y-2 no-underline text-inherit hover:border-jib-lab"
        >
          <div class="flex items-center gap-2">
            <span
              :class="[
                'rounded-full px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest border',
                p.kind === 'override'
                  ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/40'
                  : 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/40',
              ]"
              >{{ p.kind }}</span
            >
            <span class="font-mono text-[10px] opacity-55">{{ p.support }}</span>
          </div>
          <h3
            class="text-lg font-bold m-0 group-hover:text-jib-lab dark:group-hover:text-violet-400"
          >
            {{ p.title }}
          </h3>
          <p class="text-sm opacity-70 leading-relaxed m-0">{{ p.blurb }}</p>
        </a>
      </div>

      <div class="flex flex-wrap gap-3 pt-2">
        <a
          href="/tw-jib-css/experimental/overview"
          class="rounded-xl bg-jib-lab px-6 py-3 text-sm font-semibold text-white no-underline hover:bg-jib-lab hover:bg-lighten-10"
          >Read the overview</a
        >
        <a
          href="/tw-jib-css/"
          class="rounded-xl border border-jib-lab/50 px-6 py-3 text-sm font-semibold text-jib-lab dark:text-violet-300 no-underline hover:bg-jib-lab/10"
          >Stable docs</a
        >
        <a
          href="https://github.com/simonm-c/tw-jib-css"
          class="rounded-xl border border-jib-lab/50 px-6 py-3 text-sm font-semibold text-jib-lab dark:text-violet-300 no-underline hover:bg-jib-lab/10"
          >GitHub</a
        >
      </div>
    </div>
  </section>
</template>
