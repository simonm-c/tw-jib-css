<script setup lang="ts">
import { ref } from 'vue';
import JibLogo from '../../JibLogo.vue';
import StatPill from '../StatPill.vue';

const copied = ref(false);
async function copy() {
  try { await navigator.clipboard.writeText("@import 'tailwindcss';\n@import 'tw-jib-css';"); copied.value = true; setTimeout(() => (copied.value = false), 1200); } catch {}
}
</script>

<template>
  <section class="magazine-slide relative min-h-screen scroll-snap-align-start flex flex-col items-center justify-center px-6 py-16">
    <span class="absolute top-6 left-6 font-mono text-[11px] opacity-40">01 / 10</span>

    <div class="flex flex-col items-center gap-8 text-center max-w-3xl">
      <JibLogo id="mag-hero-logo" style="width: min(36vw, 320px); height: auto; filter: drop-shadow(0 12px 24px oklch(0.5 0.15 237 / 0.4));" />

      <h1 class="text-4xl md:text-5xl font-black tracking-tight leading-tight">
        Set sail with Tailwind v4.
      </h1>

      <p class="text-lg opacity-80 leading-relaxed max-w-[48ch]">
        A CSS-first plugin for Tailwind v4. Gradient borders, colour transforms, ripples, comic halftones, CRT phosphors. Drop it in — ship further.
      </p>

      <div class="flex items-center gap-2 rounded-xl bg-gray-800 border border-sky-400/30 px-4 py-2 font-mono text-sm text-gray-300">
        <code>@import 'tw-jib-css';</code>
        <button class="ml-2 rounded bg-sky-400/20 px-2.5 py-0.5 text-xs font-semibold cursor-pointer text-sky-300 border-0" @click="copy">{{ copied ? '✓' : 'Copy' }}</button>
      </div>

      <div class="flex flex-wrap justify-center gap-2">
        <StatPill n="1" caption="import" />
        <StatPill n="0" caption="JS config" />
        <StatPill n="16" caption="colour spaces" />
        <StatPill n="8" caption="interpolation modes" />
      </div>

      <div class="flex gap-3 mt-2">
        <a href="/tw-jib-css/guide/installation" class="rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-sky-400">Get Started</a>
        <a href="https://github.com/simonm-c/tw-jib-css" class="rounded-xl border border-sky-400/50 px-5 py-2.5 text-sm font-semibold text-sky-300 no-underline hover:bg-sky-400/10">GitHub</a>
      </div>

      <div class="mt-4 font-mono text-[11px] opacity-40">↓ scroll</div>
    </div>
  </section>
</template>

<style scoped>
.magazine-slide { scroll-snap-align: start; }
</style>
