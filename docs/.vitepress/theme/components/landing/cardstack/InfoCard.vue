<script setup lang="ts">
withDefaults(defineProps<{
  rotate?: number;
  z?: number;
}>(), { rotate: 0, z: 5 });
</script>

<template>
  <div
    class="info-card overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700/40 bg-gray-50 dark:bg-gray-800/50 px-4 py-3 shadow-md"
    :style="{
      transform: `rotate(${rotate}deg)`,
      zIndex: z,
      position: 'relative',
    }"
  >
    <slot />
  </div>
</template>
