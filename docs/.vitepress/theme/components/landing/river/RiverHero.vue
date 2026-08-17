<script setup lang="ts">
import { ref } from 'vue';
import JibLogo from '../../JibLogo.vue';
import StatPill from '../StatPill.vue';
</script>

<template>
  <div class="bg-gray-950 text-gray-100 px-6 py-24 md:py-32 text-center">
    <div class="mx-auto max-w-3xl space-y-6">
      <JibLogo
        id="riv-logo"
        class="w-[min(28vw,240px)] h-auto mx-auto block drop-shadow-[0_10px_20px_oklch(0.5_0.15_237/0.4)]"
      />
      <h1 class="text-4xl md:text-6xl font-black tracking-tight leading-tight">
        Set sail with Tailwind v4.
      </h1>
      <p class="text-lg opacity-75 max-w-[48ch] mx-auto">
        A CSS-first plugin. Gradient borders, colour transforms, ripples, comic halftones, CRT
        phosphors. Drop it in — ship further.
      </p>
      <div class="flex flex-wrap justify-center gap-2">
        <StatPill n="1" caption="import" />
        <StatPill n="0" caption="JS" />
        <StatPill n="16" caption="spaces" />
      </div>
      <div class="flex justify-center gap-3">
        <a
          href="/tw-jib-css/guide/installation"
          class="rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white no-underline"
          >Get Started</a
        >
        <a
          href="https://github.com/simonm-c/tw-jib-css"
          class="rounded-xl border border-sky-400/50 px-5 py-2.5 text-sm font-semibold text-sky-300 no-underline"
          >GitHub</a
        >
      </div>
    </div>
  </div>
</template>
