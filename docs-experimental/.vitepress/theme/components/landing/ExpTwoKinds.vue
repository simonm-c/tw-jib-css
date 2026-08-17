<script setup lang="ts">
/*
 * The one thing a reader must understand before copying anything: half this
 * package cannot affect existing markup, and half of it silently reimplements
 * classes the stable package already ships. Placed immediately after the hero.
 */
const additions = [
  { cls: 'corner-squircle', href: '/tw-jib-css/experimental/corner', label: 'Corner Shape' },
  {
    cls: 'interpolate-keywords',
    href: '/tw-jib-css/experimental/interpolate',
    label: 'Interpolate Size',
  },
  { cls: 'appearance-base-select', href: '/tw-jib-css/experimental/picker', label: 'Base Select' },
  { cls: 'wcag-badge', href: '/tw-jib-css/experimental/wcag-badge', label: 'WCAG Badge' },
];

const overrides = ['bg-lightness-*', 'bg-saturation-*', 'bg-hue-rotate-*', 'text-a11y-*'];
</script>

<template>
  <section
    class="relative min-h-screen flex items-center px-6 md:px-12 py-16 bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100"
  >
    <div class="mx-auto w-full max-w-[1300px] space-y-10">
      <div class="space-y-3 max-w-[60ch]">
        <p
          class="font-mono text-[11px] uppercase tracking-widest text-jib-lab dark:text-violet-400"
        >
          separate package · import order matters
        </p>
        <h2 class="text-4xl md:text-5xl font-black tracking-tight leading-[0.95]">
          Two Kinds of Thing.
        </h2>
        <p class="text-lg leading-relaxed opacity-85">
          Importing the package root gives you both. Only one of them can change code you have
          already written — which is the whole reason they are separable.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <!-- Additions -->
        <div class="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-6 space-y-4">
          <div class="flex items-center gap-2">
            <span
              class="rounded-full border border-emerald-500/40 bg-emerald-500/15 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300"
              >additions</span
            >
            <span class="font-mono text-[11px] opacity-60">safe to take individually</span>
          </div>
          <p class="text-sm leading-relaxed opacity-80">
            Classes with no stable equivalent. Nothing you already use changes, because nothing you
            already use has these names.
          </p>
          <ul class="space-y-2 list-none pl-0 m-0">
            <li v-for="a in additions" :key="a.cls" class="flex items-center justify-between gap-3">
              <code class="font-mono text-[12px] text-emerald-800 dark:text-emerald-300">{{
                a.cls
              }}</code>
              <a
                :href="a.href"
                class="text-[11px] font-semibold no-underline opacity-60 hover:opacity-100"
                >{{ a.label }}</a
              >
            </li>
          </ul>
          <!-- mt-4: see the matching note in the overrides card. -->
          <div
            class="mt-4 rounded-lg bg-gray-900 dark:bg-gray-800 px-3 py-2 font-mono text-[11px] text-gray-300"
          >
            <code>@import 'tw-jib-css-experimental/corner';</code>
          </div>
        </div>

        <!-- Overrides -->
        <div class="rounded-2xl border border-amber-500/40 bg-amber-500/5 p-6 space-y-4">
          <div class="flex items-center gap-2">
            <span
              class="rounded-full border border-amber-500/40 bg-amber-500/15 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300"
              >overrides</span
            >
            <span class="font-mono text-[11px] opacity-60">changes existing markup</span>
          </div>
          <p class="text-sm leading-relaxed opacity-80">
            Classes the stable package already defines, replaced. Same names and the same results
            where they overlap — but the functions behind them also reach where no class can, into a
            gradient stop or a layered shadow. That reach is the reason to take this half; that it
            changes pages you have already built is the reason to take it deliberately.
          </p>
          <ul class="space-y-2 list-none pl-0 m-0">
            <li v-for="o in overrides" :key="o">
              <code class="font-mono text-[12px] text-amber-800 dark:text-amber-300">{{ o }}</code>
            </li>
          </ul>
          <!-- mt-4 explicitly. The parent's space-y-4 puts margin-block-end on
               non-last children through a zero-specificity :where(), so the m-0
               on the <ul> above beat it and this box sat flush against the last
               list row — measured 0px. Do not rely on space-y-* across a child
               that resets its own margin. -->
          <div
            class="mt-4 rounded-lg bg-gray-900 dark:bg-gray-800 px-3 py-2 font-mono text-[11px] text-gray-300"
          >
            <code>@import 'tw-jib-css-experimental/functions';</code>
          </div>
        </div>
      </div>

      <!-- Side by side rather than stacked: this panel is the densest on the page
           and stacking these two pushed the heading up under the fixed nav. -->
      <div class="grid md:grid-cols-2 gap-6 items-center">
        <div
          class="rounded-xl bg-gray-900 dark:bg-gray-800 border border-gray-700/50 overflow-hidden"
        >
          <div class="px-3 py-1.5 border-b border-gray-700/30">
            <span class="font-mono text-[10px] text-gray-400 uppercase tracking-wider"
              >css · both, in order</span
            >
          </div>
          <pre
            class="m-0 px-4 py-3 font-mono text-[12px] leading-relaxed text-gray-300"
          ><code>@import 'tailwindcss';
@import 'tw-jib-css';
@import 'tw-jib-css-experimental';</code></pre>
        </div>
        <p class="text-sm opacity-70 leading-relaxed m-0">
          Experimental always comes <strong class="font-bold opacity-100">after</strong> stable. Get
          the order wrong and the overrides do nothing.
        </p>
      </div>
    </div>
  </section>
</template>
