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
      'demo-card overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-900 shadow-xl',
      large ? 'p-6 md:p-8' : 'p-4 md:p-5',
    ]"
    :style="{
      transform: `rotate(${rotate}deg)`,
      zIndex: z,
      position: 'relative',
    }"
  >
    <p v-if="title" class="font-mono text-[10px] uppercase tracking-[0.14em] opacity-50 mb-3">{{ title }}</p>
    <slot />
  </div>
</template>

<style scoped>
@supports (corner-shape: squircle) {
  .demo-card { corner-shape: squircle; }
}
</style>
