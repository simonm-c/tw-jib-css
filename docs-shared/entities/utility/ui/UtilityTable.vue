<script setup lang="ts">
import { ref, computed } from 'vue';
import type { UtilityRow } from '../model/types';

const props = withDefaults(
  defineProps<{
    rows: UtilityRow[];
    initialCount?: number;
    title?: string;
    /** A Tailwind class cannot be composed at runtime, so the app layer binds this
     *  literal at registration. */
    surfaceClass?: string;
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
    :class="[
      surfaceClass,
      'my-5 overflow-hidden rounded-2xl border border-(color:--docs-accent) -border-saturation-50 border-lighten-72 dark:border-darken-55 bg-(color:--docs-accent) -bg-saturation-50 bg-lighten-92 dark:bg-darken-88 transition-shadow duration-200 hover:shadow-[0_0_0_2px_var(--docs-accent)] not-prose',
    ]"
  >
    <table class="w-full border-collapse text-sm">
      <thead>
        <tr class="bg-(color:--docs-accent) -bg-saturation-60 bg-lighten-96 dark:bg-darken-92">
          <th
            class="border-b border-(color:--docs-accent)/25 px-4 py-2.5 text-left font-mono text-[11px] uppercase tracking-[0.2em] text-slate-900 dark:text-slate-200"
          >
            class
          </th>
          <th
            class="border-b border-(color:--docs-accent)/25 px-4 py-2.5 text-left font-mono text-[11px] uppercase tracking-[0.2em] text-slate-900 dark:text-slate-200"
          >
            styles
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, i) in visibleRows"
          :key="i"
          class="border-b border-(color:--docs-accent)/15 last:border-b-0 transition-colors hover:bg-(color:--docs-accent)/5"
        >
          <td class="whitespace-nowrap px-4 py-2 font-mono text-[13px] text-(color:--docs-accent)">
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
      class="flex justify-center border-t border-(color:--docs-accent)/25 bg-(color:--docs-accent) -bg-saturation-60 bg-lighten-96 dark:bg-darken-92 py-2"
    >
      <button
        class="rounded-full border-0 bg-(color:--docs-accent)/15 bg-ripple ripple-color-(color:--docs-accent)/40 ripple-position-center px-4 py-1 font-mono text-[11px] uppercase tracking-[0.18em] font-medium cursor-pointer text-slate-900 dark:text-slate-200 transition-colors hover:bg-(color:--docs-accent)/25"
        @click="expanded = !expanded"
      >
        {{ expanded ? 'Show fewer' : `Show all ${rows.length}` }}
      </button>
    </div>
  </div>
</template>
