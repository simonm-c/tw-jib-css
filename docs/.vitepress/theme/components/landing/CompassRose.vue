<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 20 });
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    aria-hidden="true"
    class="inline-block shrink-0 align-middle"
  >
    <g fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round">
      <circle cx="12" cy="12" r="9" opacity="0.5" />
      <path
        d="M12 2 L13 11 L22 12 L13 13 L12 22 L11 13 L2 12 L11 11 Z"
        fill="currentColor"
        opacity="0.9"
        stroke="none"
      />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </g>
  </svg>
</template>
