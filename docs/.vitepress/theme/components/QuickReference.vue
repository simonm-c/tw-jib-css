<script setup lang="ts">
import { ref, computed } from 'vue';

const props = withDefaults(
  defineProps<{
    rows: Array<{ class: string; styles: string }>;
    initialCount?: number;
  }>(),
  { initialCount: 12 },
);

const expanded = ref(false);

const visibleRows = computed(() =>
  expanded.value ? props.rows : props.rows.slice(0, props.initialCount),
);

const hasMore = computed(() => props.rows.length > props.initialCount);
</script>

<template>
  <div class="my-4 bg-white dark:bg-gray-900 border-2 border-linear-to-b border-from-gray-200 border-to-gray-300 dark:border-from-gray-700 dark:border-to-gray-600 rounded-lg overflow-hidden">
    <table class="w-full border-collapse text-sm">
      <thead>
        <tr class="bg-gray-50 dark:bg-gray-800/50">
          <th class="px-4 py-2.5 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
            Class
          </th>
          <th class="px-4 py-2.5 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
            Styles
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, i) in visibleRows"
          :key="i"
          class="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
        >
          <td class="px-4 py-2 font-mono text-[13px] text-sky-600 dark:text-sky-400 whitespace-nowrap">
            {{ row.class }}
          </td>
          <td class="px-4 py-2 font-mono text-[13px] text-gray-700 dark:text-gray-300 whitespace-nowrap">
            {{ row.styles }}
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-if="hasMore"
      class="flex justify-center py-2.5 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
    >
      <button
        class="bg-transparent border-0 text-sky-600 dark:text-sky-400 text-[13px] font-medium cursor-pointer px-3 py-1 rounded hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-colors"
        @click="expanded = !expanded"
      >
        {{ expanded ? 'Show fewer' : `Show all ${rows.length} classes` }}
      </button>
    </div>
  </div>
</template>
