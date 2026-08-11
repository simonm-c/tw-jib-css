<script setup lang="ts">
import CompassRose from '../CompassRose.vue';
</script>

<template>
  <section class="relative min-h-[60vh] snap-start flex items-center justify-center bg-gray-950 text-gray-100 dark:bg-white dark:text-gray-900 border-y-2 border-sky-400/30">
    <div class="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
      <CompassRose :size="280" class="text-sky-400" />
    </div>

    <div class="text-center space-y-4 relative z-10">
      <p class="font-mono text-[11px] uppercase tracking-widest text-sky-400/80">crossing the meridian</p>
      <h2 class="text-4xl md:text-5xl font-black tracking-tight">Experimental Waters</h2>
      <p class="text-base opacity-70 max-w-[48ch] mx-auto leading-relaxed">
        Upcoming features, available now. Powered by CSS <code class="font-mono text-sky-300">@function</code> and cutting-edge browser primitives. Chromium-only — progressive enhancement below.
      </p>
    </div>
  </section>
</template>
