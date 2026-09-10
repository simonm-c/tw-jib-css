<script setup lang="ts">
import { computed } from 'vue';
import CodePanel from '@shared/shared/ui/CodePanel.vue';
import { slides, type FeatureSlideData } from '../model/slides';

const props = defineProps<{ index: number }>();
const slide = computed<FeatureSlideData>(() => slides[props.index]);
</script>

<template>
  <section
    :class="[
      'relative px-6 md:px-12 py-16',
      slide.dark
        ? 'bg-gray-950 text-gray-100 dark:bg-white dark:text-gray-900'
        : 'bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100',
    ]"
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
        <h2 class="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          {{ slide.headline }}
        </h2>
        <p class="text-base leading-relaxed opacity-85">{{ slide.body }}</p>

        <CodePanel lang="html" wrap>{{ slide.code }}</CodePanel>
      </div>
    </div>
  </section>
</template>
