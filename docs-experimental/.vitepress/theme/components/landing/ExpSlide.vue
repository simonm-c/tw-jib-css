<script setup lang="ts">
import { computed } from 'vue';
import { slides, type ExpSlideData } from './expData';

const props = defineProps<{ index: number }>();
const slide = computed<ExpSlideData>(() => slides[props.index]);
</script>

<template>
  <section
    class="relative min-h-screen flex items-center px-6 md:px-12 py-16 bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100"
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
        <!-- Addition vs override is the thing a reader most needs to know before
             they copy anything off this page, so it leads every slide. -->
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
          <span class="font-mono text-[11px] uppercase tracking-widest opacity-50">{{
            slide.kicker
          }}</span>
          <span class="font-mono text-[11px] opacity-60">· {{ slide.support }}</span>
        </div>

        <h2 class="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          {{ slide.headline }}
        </h2>
        <p class="text-base leading-relaxed opacity-85">{{ slide.body }}</p>

        <div
          class="rounded-xl bg-gray-900 dark:bg-gray-800 border border-gray-700/50 overflow-hidden"
        >
          <div class="flex items-center justify-between px-3 py-1.5 border-b border-gray-700/30">
            <span class="font-mono text-[10px] text-gray-400 uppercase tracking-wider">{{
              slide.lang
            }}</span>
          </div>
          <pre
            class="m-0 px-4 py-3 overflow-x-auto font-mono text-[12px] leading-relaxed text-gray-300 whitespace-pre-wrap"
          ><code>{{ slide.code }}</code></pre>
        </div>

        <div class="flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <div v-if="slide.stat" class="flex items-baseline gap-3">
            <span class="text-5xl font-extrabold tabular-nums text-jib-lab dark:text-violet-400">{{
              slide.stat
            }}</span>
            <span class="font-mono text-[11px] uppercase tracking-wider opacity-60">{{
              slide.statCaption
            }}</span>
          </div>
          <a
            :href="slide.link.href"
            class="text-sm font-semibold text-jib-lab dark:text-violet-400 no-underline hover:opacity-70"
            >{{ slide.link.text }} &rarr;</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
