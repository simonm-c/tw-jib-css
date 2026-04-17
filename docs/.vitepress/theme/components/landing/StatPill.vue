<script setup lang="ts">
defineProps<{ n: string | number; caption: string }>();
</script>

<template>
  <div
    class="inline-flex items-baseline gap-2 rounded-full border border-jib-brand -border-saturation-30 border-lighten-50 dark:border-darken-45 bg-jib-brand -bg-saturation-50 bg-lighten-92 dark:bg-darken-78 px-4 py-1.5 font-mono text-xs"
  >
    <span class="text-base font-black tabular-nums text-a11y-aaa">{{ n }}</span>
    <span class="opacity-70 text-a11y-aa">{{ caption }}</span>
  </div>
</template>
