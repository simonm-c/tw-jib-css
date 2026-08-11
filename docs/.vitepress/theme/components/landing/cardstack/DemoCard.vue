<script setup lang="ts">
withDefaults(defineProps<{
  title?: string;
  rotate?: number;
  z?: number;
  large?: boolean;
}>(), { rotate: 0, z: 10, large: false });
</script>

<template>
  <div
    :class="[
      'overflow-hidden rounded-2xl corner-squircle border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-900 shadow-xl relative rotate-(--card-rotate) z-(--card-z)',
      large ? 'p-6 md:p-8' : 'p-4 md:p-5',
    ]"
    :style="{ '--card-rotate': `${rotate}deg`, '--card-z': z }"
  >
    <p v-if="title" class="font-mono text-[10px] uppercase tracking-[0.14em] opacity-50 mb-3">{{ title }}</p>
    <slot />
  </div>
</template>
