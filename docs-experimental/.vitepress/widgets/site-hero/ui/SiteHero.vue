<script setup lang="ts">
import JibLogo from '@shared/shared/ui/JibLogo.vue';
import CopyButton from '@shared/features/copy-to-clipboard/ui/CopyButton.vue';

const INSTALL_SNIPPET = 'npm install -D tw-jib-css tw-jib-css-experimental';
</script>

<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center px-6 py-16">
    <div class="flex flex-col items-center gap-7 text-center max-w-3xl">
      <div class="relative">
        <JibLogo
          class="w-[min(32vw,280px)] h-auto drop-shadow-[0_12px_24px] drop-shadow-(color:--docs-accent)/35"
        />
        <span
          class="absolute -right-3 -bottom-2 rotate-[-8deg] rounded-md border border-(color:--docs-accent)/50 bg-(color:--docs-accent) px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-white"
        >
          experimental
        </span>
      </div>

      <h1 class="text-4xl md:text-5xl font-black tracking-tight leading-tight">
        Simple Tailwind utilities for cutting-edge CSS.
      </h1>

      <p class="text-lg opacity-80 leading-relaxed max-w-[52ch]">
        Five color functions that reach where a class cannot, corner shapes past the circular arc,
        animation to
        <code class="font-mono">auto</code>, a select you can actually style, and a live WCAG rating
        printed on any element.
      </p>

      <div
        class="rounded-xl bg-gray-800 border border-(color:--docs-accent)/40 px-4 py-3 font-mono text-[13px] text-gray-300 text-left"
      >
        <div class="flex items-start gap-3">
          <pre
            class="m-0 leading-relaxed whitespace-pre-wrap"
          ><code>{{ INSTALL_SNIPPET }}</code></pre>
          <CopyButton :text="INSTALL_SNIPPET" />
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-3 mt-1">
        <a
          href="/tw-jib-css/experimental/guide/installation"
          class="rounded-xl bg-(color:--docs-accent) px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-lighten-10"
          >Get started</a
        >
        <a
          href="/tw-jib-css/"
          target="_self"
          class="rounded-xl border border-(color:--docs-accent)/50 px-5 py-2.5 text-sm font-semibold text-(color:--docs-accent) dark:text-lighten-20 no-underline hover:bg-(color:--docs-accent)/10"
          >Stable docs</a
        >
        <a
          href="https://github.com/simonm-c/tw-jib-css"
          class="rounded-xl border border-(color:--docs-accent)/50 px-5 py-2.5 text-sm font-semibold text-(color:--docs-accent) dark:text-lighten-20 no-underline hover:bg-(color:--docs-accent)/10"
          >GitHub</a
        >
      </div>
    </div>
  </section>
</template>
