<script setup lang="ts">
defineProps<{ dark?: boolean }>();
</script>

<template>
  <div :class="['w-full px-6 py-10 md:py-14', dark ? 'bg-gray-950' : 'bg-gray-100 dark:bg-gray-900']">
    <div class="mx-auto max-w-6xl">
      <slot />
    </div>
  </div>
</template>
