<script setup lang="ts">
withDefaults(defineProps<{
  rotate?: number;
  z?: number;
}>(), { rotate: 0, z: 5 });
</script>

<template>
  <div
    class="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700/40 bg-gray-50 dark:bg-gray-800/50 px-4 py-3 shadow-md relative rotate-(--card-rotate) z-(--card-z)"
    :style="{ '--card-rotate': `${rotate}deg`, '--card-z': z }"
  >
    <slot />
  </div>
</template>
