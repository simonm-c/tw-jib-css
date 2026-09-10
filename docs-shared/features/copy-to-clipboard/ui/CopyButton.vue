<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ text: string }>();

const copied = ref(false);

async function copy(text: string) {
  // Silent on failure by design: the clipboard is refused on an insecure origin
  // and behind some permission policies, and the snippet is on screen either
  // way. An error state here would draw more attention than the miss deserves.
  try {
    await navigator.clipboard.writeText(text);
    copied.value = true;
    setTimeout(() => (copied.value = false), 1200);
  } catch {}
}
</script>

<template>
  <button
    type="button"
    class="shrink-0 rounded border-0 bg-(color:--docs-accent)/20 px-2.5 py-0.5 text-xs font-semibold cursor-pointer text-(color:--docs-accent) text-lighten-30 hover:bg-(color:--docs-accent)/30"
    @click="copy(text)"
  >
    {{ copied ? '✓' : 'Copy' }}
  </button>
</template>
