<script setup lang="ts">
defineProps<{
  /** Language tag for the header strip. Omit for a bare box with no header. */
  lang?: string;
  /** Let long lines wrap instead of scrolling. Prose-width panels want this. */
  wrap?: boolean;
}>();
</script>

<template>
  <div class="rounded-xl bg-gray-900 dark:bg-gray-800 border border-gray-700/50 overflow-hidden">
    <div v-if="lang" class="px-3 py-1.5 border-b border-gray-700/30">
      <span class="font-mono text-[10px] text-gray-400 uppercase tracking-wider">{{ lang }}</span>
    </div>
    <!-- Whitespace inside <pre> is content, so the tags close tight against the
         slot. A newline either side of it renders as a blank first line. -->
    <pre
      :class="[
        'm-0 px-4 py-3 overflow-x-auto font-mono text-[12px] leading-relaxed text-gray-300',
        wrap ? 'whitespace-pre-wrap' : '',
      ]"
    ><code><slot /></code></pre>
  </div>
</template>
