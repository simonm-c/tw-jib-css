<script setup lang="ts">
withDefaults(defineProps<{
  rotate?: number;
  z?: number;
}>(), { rotate: 0, z: 5 });
</script>

<template>
  <div
    class="code-card overflow-hidden rounded-xl bg-gray-900 dark:bg-gray-800 border border-gray-700/50 shadow-lg"
    :style="{
      transform: `rotate(${rotate}deg)`,
      zIndex: z,
      position: 'relative',
    }"
  >
    <div class="px-3 py-1.5 border-b border-gray-700/30">
      <span class="font-mono text-[9px] text-gray-500 uppercase tracking-wider">html</span>
    </div>
    <pre class="m-0 px-4 py-3 overflow-x-auto font-mono text-[11px] leading-relaxed text-gray-300"><code><slot /></code></pre>
  </div>
</template>
