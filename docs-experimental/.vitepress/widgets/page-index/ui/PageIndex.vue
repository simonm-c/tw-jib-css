<script setup lang="ts">
const pages = [
  {
    kind: 'override' as const,
    title: 'Lightness',
    href: '/tw-jib-css/experimental/guide/lightness',
    blurb: 'A shade as a value, so it reaches a gradient stop, a shadow or an underline.',
  },
  {
    kind: 'override' as const,
    title: 'Saturation',
    href: '/tw-jib-css/experimental/guide/saturation',
    blurb: 'Drain a color toward gray anywhere a color fits, lightness left alone.',
  },
  {
    kind: 'override' as const,
    title: 'Hue rotate',
    href: '/tw-jib-css/experimental/guide/hue-rotate',
    blurb: 'Several rotations of one token in a single declaration: a whole scheme from one color.',
  },
  {
    kind: 'override' as const,
    title: 'Automatic contrast',
    href: '/tw-jib-css/experimental/guide/automatic-contrast',
    blurb: 'The WCAG solve on a border, a stroke, an outline or a gradient stop, not only on text.',
  },
  {
    kind: 'addition' as const,
    title: 'WCAG rating',
    href: '/tw-jib-css/experimental/guide/wcag-rating',
    blurb: 'The one that returns a string, so a pair can print its own rating.',
  },
  {
    kind: 'addition' as const,
    title: 'Corner shape',
    href: '/tw-jib-css/experimental/corner',
    blurb: 'Squircles, bevels, scoops, notches and arbitrary superellipses, per corner.',
  },
  {
    kind: 'addition' as const,
    title: 'Interpolate size',
    href: '/tw-jib-css/experimental/interpolate',
    blurb: 'Animate to auto and the other intrinsic keywords.',
  },
  {
    kind: 'addition' as const,
    title: 'Base select picker',
    href: '/tw-jib-css/experimental/picker',
    blurb: 'appearance: base-select, plus variants for the popup, icon and checkmark.',
  },
  {
    kind: 'addition' as const,
    title: 'WCAG badge',
    href: '/tw-jib-css/experimental/wcag-badge',
    blurb: 'A live contrast rating on any element, computed entirely in CSS.',
  },
];
</script>

<template>
  <section
    class="relative px-6 md:px-12 py-16 bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100"
  >
    <div class="mx-auto w-full max-w-[1300px] space-y-8">
      <div class="space-y-2">
        <h2 class="text-3xl md:text-4xl font-black tracking-tight">Everything in here.</h2>
        <p class="text-base opacity-70 max-w-[52ch] leading-relaxed">
          Nine pages. Four change classes you already use. The rest cannot.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <a
          v-for="p in pages"
          :key="p.href"
          :href="p.href"
          class="group block rounded-2xl border border-gray-300/60 dark:border-gray-700/60 p-5 space-y-2 no-underline text-inherit hover:border-(color:--docs-accent)"
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
          </div>
          <h3 class="text-lg font-bold m-0 group-hover:text-(color:--docs-accent)">
            {{ p.title }}
          </h3>
          <p class="text-sm opacity-70 leading-relaxed m-0">{{ p.blurb }}</p>
        </a>
      </div>

      <div class="flex flex-wrap gap-3 pt-2">
        <a
          href="/tw-jib-css/experimental/guide/installation"
          class="rounded-xl bg-(color:--docs-accent) px-6 py-3 text-sm font-semibold text-white no-underline hover:bg-lighten-10"
          >Get started</a
        >
        <a
          href="/tw-jib-css/"
          class="rounded-xl border border-(color:--docs-accent)/50 px-6 py-3 text-sm font-semibold text-(color:--docs-accent) dark:text-lighten-20 no-underline hover:bg-(color:--docs-accent)/10"
          >Stable docs</a
        >
        <a
          href="https://github.com/simonm-c/tw-jib-css"
          class="rounded-xl border border-(color:--docs-accent)/50 px-6 py-3 text-sm font-semibold text-(color:--docs-accent) dark:text-lighten-20 no-underline hover:bg-(color:--docs-accent)/10"
          >GitHub</a
        >
      </div>
    </div>
  </section>
</template>
