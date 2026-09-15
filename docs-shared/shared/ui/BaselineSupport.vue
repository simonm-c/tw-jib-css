<script setup lang="ts">
import { onMounted, ref } from 'vue';

defineProps<{
  /**
   * web-features IDs this page's utilities are built on. One entry per feature,
   * because a pill reports a single feature's status.
   * @see https://github.com/web-platform-dx/web-features
   */
  features: string[];
}>();

/* The element registers itself on import and reads customElements at module
 * scope, which does not exist while VitePress prerenders. Importing it after
 * mount keeps the build from throwing and leaves the pills to hydrate. */
const ready = ref(false);
onMounted(async () => {
  await import('baseline-status');
  ready.value = true;
});
</script>

<template>
  <section class="mt-12 border-t border-(color:--vp-c-divider) pt-6">
    <h2 class="mt-0! border-0! pt-0! text-xl font-bold tracking-tight">Baseline status</h2>
    <p class="mt-1! text-sm opacity-70">
      What these utilities are built on, live from the
      <a href="https://webstatus.dev" target="_blank" rel="noreferrer">Web Platform Dashboard</a>.
    </p>

    <div class="mt-4 space-y-3">
      <!-- Height is reserved before hydration so the rest of the page does not
           jump when the pills arrive. -->
      <template v-if="ready">
        <baseline-status v-for="id in features" :key="id" :featureId="id" />
      </template>
      <template v-else>
        <div
          v-for="id in features"
          :key="`ph-${id}`"
          class="h-13 animate-pulse rounded-lg bg-(color:--vp-c-bg-soft)"
        />
      </template>
    </div>
  </section>
</template>

<style scoped>
baseline-status {
  --baseline-status-color-outline: var(--vp-c-divider);
  --baseline-status-color-link: var(--vp-c-brand-1);
  display: block;
}
</style>
