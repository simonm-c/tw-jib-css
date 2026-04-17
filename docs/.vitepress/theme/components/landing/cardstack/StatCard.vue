<script setup lang="ts">
withDefaults(defineProps<{
  n: string | number;
  caption: string;
  rotate?: number;
  z?: number;
}>(), { rotate: 0, z: 5 });
</script>

<template>
  <div
    class="stat-card overflow-hidden rounded-xl bg-sky-500/10 border border-sky-400/30 p-4 shadow-lg text-center"
    :style="{
      transform: `rotate(${rotate}deg)`,
      zIndex: z,
      position: 'relative',
    }"
  >
    <span class="block text-4xl font-extrabold tabular-nums text-sky-400">{{ n }}</span>
    <span class="block mt-1 font-mono text-[10px] uppercase tracking-wider opacity-60">{{ caption }}</span>
  </div>
</template>
