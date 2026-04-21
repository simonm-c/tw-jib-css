<script setup lang="ts">
import { computed } from 'vue';
import { slides, type MagazineSlideData } from './magazineData';

const props = defineProps<{ index: number }>();
const slide = computed<MagazineSlideData>(() => slides[props.index]);
</script>

<template>
  <section
    :class="[
      'magazine-slide relative min-h-screen scroll-snap-align-start flex items-center px-6 md:px-12 py-16',
      slide.dark ? 'bg-gray-950 text-gray-100 dark:bg-white dark:text-gray-900' : 'bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100',
    ]"
  >


    <div
      :class="[
        'mx-auto grid w-full max-w-[1300px] gap-8 md:gap-12 items-center',
        slide.flipped ? 'md:grid-cols-[1fr_1.4fr]' : 'md:grid-cols-[1.4fr_1fr]',
      ]"
    >
      <div :class="['min-h-[300px] flex items-center justify-center rounded-2xl overflow-hidden', slide.flipped ? 'md:order-2' : '']">
        <slot />
      </div>

      <div :class="['space-y-5', slide.flipped ? 'md:order-1' : '']">
        <h2 class="text-3xl md:text-4xl font-black tracking-tight leading-tight">{{ slide.headline }}</h2>
        <p class="text-base leading-relaxed opacity-85">{{ slide.body }}</p>

        <div class="rounded-xl bg-gray-900 dark:bg-gray-800 border border-gray-700/50 overflow-hidden">
          <div class="flex items-center justify-between px-3 py-1.5 border-b border-gray-700/30">
            <span class="font-mono text-[10px] text-gray-400 uppercase tracking-wider">html</span>
          </div>
          <pre class="m-0 px-4 py-3 overflow-x-auto font-mono text-[12px] leading-relaxed text-gray-300 whitespace-pre-wrap"><code>{{ slide.code }}</code></pre>
        </div>

        <div v-if="slide.stat" class="flex items-baseline gap-3">
          <span class="text-5xl font-extrabold tabular-nums text-sky-400">{{ slide.stat }}</span>
          <span class="font-mono text-[11px] uppercase tracking-wider opacity-60">{{ slide.statCaption }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.magazine-slide { scroll-snap-align: start; }
</style>
