<script setup lang="ts">
import { computed } from 'vue';
import CodePanel from '@shared/shared/ui/CodePanel.vue';
import { slides, type FeatureSlideData } from '../model/slides';

const props = defineProps<{ index: number }>();
const slide = computed<FeatureSlideData>(() => slides[props.index]);
</script>

<template>
  <section
    class="relative px-6 md:px-12 py-16 bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100"
  >
    <div
      :class="[
        'mx-auto grid w-full max-w-[1300px] gap-8 md:gap-12 items-center',
        slide.flipped ? 'md:grid-cols-[1fr_1.4fr]' : 'md:grid-cols-[1.4fr_1fr]',
      ]"
    >
      <div
        :class="[
          'min-h-[300px] flex items-center justify-center rounded-2xl',
          slide.flipped ? 'md:order-2' : '',
        ]"
      >
        <slot />
      </div>

      <div :class="['space-y-5', slide.flipped ? 'md:order-1' : '']">
        <div class="flex flex-wrap items-center gap-2">
          <span
            :class="[
              'rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest',
              slide.kind === 'override'
                ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/40'
                : 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40',
            ]"
            >{{ slide.kind }}</span
          >
        </div>

        <h2 class="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          {{ slide.headline }}
        </h2>
        <p class="text-base leading-relaxed opacity-85">{{ slide.body }}</p>

        <CodePanel :lang="slide.lang" wrap>{{ slide.code }}</CodePanel>

        <div class="flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <a
            :href="slide.link.href"
            :target="slide.link.crossSite ? '_self' : undefined"
            class="text-sm font-semibold text-(color:--docs-accent) no-underline hover:opacity-70"
            >{{ slide.link.text }} &rarr;</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
