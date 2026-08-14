<script setup lang="ts">
import { ref, computed } from 'vue';

const props = withDefaults(
  defineProps<{
    rows: Array<{ class: string; styles: string }>;
    initialCount?: number;
    title?: string;
  }>(),
  { initialCount: 12, title: '' },
);

const expanded = ref(false);

const visibleRows = computed(() =>
  expanded.value ? props.rows : props.rows.slice(0, props.initialCount),
);

const hasMore = computed(() => props.rows.length > props.initialCount);
</script>

<template>
  <div
    class="my-5 overflow-hidden rounded-2xl border border-jib-brand -border-saturation-50 border-lighten-72 dark:border-darken-55 bg-jib-brand -bg-saturation-50 bg-lighten-92 dark:bg-darken-88 transition-shadow duration-200 hover:shadow-[0_0_0_2px_var(--color-jib-wind)] not-prose"
  >
    <table class="w-full border-collapse text-sm">
      <thead>
        <tr class="bg-jib-brand -bg-saturation-60 bg-lighten-96 dark:bg-darken-92">
          <th
            class="border-b border-jib-wind/25 px-4 py-2.5 text-left font-mono text-[11px] uppercase tracking-[0.2em] text-slate-900 dark:text-slate-200"
          >
            class
          </th>
          <th
            class="border-b border-jib-wind/25 px-4 py-2.5 text-left font-mono text-[11px] uppercase tracking-[0.2em] text-slate-900 dark:text-slate-200"
          >
            styles
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, i) in visibleRows"
          :key="i"
          class="border-b border-jib-wind/15 last:border-b-0 transition-colors hover:bg-jib-wind/5"
        >
          <td class="whitespace-nowrap px-4 py-2 font-mono text-[13px] text-jib-brand">
            {{ row.class }}
          </td>
          <td
            class="whitespace-nowrap px-4 py-2 font-mono text-[13px] text-slate-900 dark:text-slate-200 opacity-85"
          >
            {{ row.styles }}
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-if="hasMore"
      class="flex justify-center border-t border-jib-wind/25 bg-jib-brand -bg-saturation-60 bg-lighten-96 dark:bg-darken-92 py-2"
    >
      <button
        class="rounded-full border-0 bg-jib-wind/15 bg-ripple ripple-color-jib-wind/40 ripple-position-center px-4 py-1 font-mono text-[11px] uppercase tracking-[0.18em] font-medium cursor-pointer text-slate-900 dark:text-slate-200 transition-colors hover:bg-jib-wind/25"
        @click="expanded = !expanded"
      >
        {{ expanded ? 'Show fewer' : `Show all ${rows.length}` }}
      </button>
    </div>
  </div>
</template>
