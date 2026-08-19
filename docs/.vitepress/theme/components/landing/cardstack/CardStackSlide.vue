<script setup lang="ts">
defineProps<{
  dark?: boolean;
}>();
</script>

<template>
  <section
    :class="[
      'relative min-h-screen snap-start flex items-center justify-center px-6 py-16',
      dark
        ? 'bg-gray-950 text-gray-100'
        : 'bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100',
    ]"
  >
    <div class="relative w-full max-w-5xl">
      <slot />
    </div>
  </section>
</template>
