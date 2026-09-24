<script setup lang="ts">
import JibLogo from '@shared/shared/ui/JibLogo.vue';
import CopyButton from '@shared/features/copy-to-clipboard/ui/CopyButton.vue';

const INSTALL_SNIPPET = "@import 'tw-jib-css';";
</script>

<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center px-6 py-16">
    <div class="flex flex-col items-center gap-8 text-center max-w-3xl">
      <JibLogo
        class="w-[min(36vw,320px)] h-auto drop-shadow-[0_12px_24px] drop-shadow-(color:--docs-accent)/40"
      />

      <h1 class="text-4xl md:text-5xl font-black tracking-tight leading-tight">
        Simple Tailwind utilities for complicated CSS.
      </h1>

      <p class="text-lg opacity-80 leading-relaxed max-w-[48ch]">
        Text that always hits your contrast target, whatever is behind it. Gradient borders as plain
        classes. Any color lightened, darkened or hue-shifted in place. Halftone and CRT textures,
        no image files. One stylesheet, no plugin, no config.
      </p>

      <div
        class="flex items-center gap-2 rounded-xl bg-gray-800 border-2 border-conic-0 border-spin border-spin-duration-4 border-from-sky-400 border-via-violet-500 border-to-sky-400 motion-reduce:[animation:none]! px-4 py-2 font-mono text-sm text-gray-300"
      >
        <code>{{ INSTALL_SNIPPET }}</code>
        <CopyButton :text="INSTALL_SNIPPET" class="ml-2" />
      </div>

      <p class="-mt-4 font-mono text-xs opacity-50">
        or only the part you want:
        <a
          href="/tw-jib-css/guide/installation#take-only-what-you-need"
          class="text-(color:--docs-accent) text-lighten-20 no-underline hover:underline"
          >tw-jib-css/automatic-contrast</a
        >
      </p>

      <div class="flex gap-3 mt-2">
        <a
          href="/tw-jib-css/guide/installation"
          class="rounded-xl bg-(color:--docs-accent) bg-darken-10 px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-(color:--docs-accent)"
          >Get Started</a
        >
        <a
          href="https://github.com/simonm-c/tw-jib-css"
          class="rounded-xl border border-(color:--docs-accent)/50 px-5 py-2.5 text-sm font-semibold text-(color:--docs-accent) text-lighten-20 no-underline hover:bg-(color:--docs-accent)/10"
          >GitHub</a
        >
      </div>
    </div>
  </section>
</template>
