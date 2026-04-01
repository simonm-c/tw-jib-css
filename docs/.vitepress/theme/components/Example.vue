<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

defineProps<{
  /** When true, preview uses block display instead of flex centering */
  stretch?: boolean;
}>();

const preview = ref<HTMLElement>();
const code = ref('');
const showCode = ref(false);

function formatHtml(html: string): string {
  // Remove leading/trailing whitespace and normalize
  let formatted = html.trim();

  // Basic formatting: add newlines between tags
  formatted = formatted.replace(/></g, '>\n<');

  // Remove empty lines and excessive whitespace
  formatted = formatted
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join('\n');

  // Simple indentation based on nesting
  const lines = formatted.split('\n');
  let indent = 0;
  const result: string[] = [];

  for (const line of lines) {
    // Decrease indent for closing tags
    if (line.startsWith('</') || line.startsWith('-->')) {
      indent = Math.max(0, indent - 1);
    }

    result.push('  '.repeat(indent) + line);

    // Increase indent for opening tags (not self-closing or void)
    if (
      line.match(/^<[a-z][^/]*>$/i) &&
      !line.match(/^<(img|br|hr|input|meta|link|area|base|col|embed|source|track|wbr)\b/i) &&
      !line.endsWith('/>')
    ) {
      indent++;
    }
  }

  return result.join('\n');
}

onMounted(async () => {
  await nextTick();
  if (preview.value) {
    code.value = formatHtml(preview.value.innerHTML);
  }
});
</script>

<template>
  <div class="my-4 bg-white dark:bg-gray-900 border-2 border-linear-to-r border-from-gray-200 border-to-gray-300 dark:border-from-gray-700 dark:border-to-gray-600 rounded-lg overflow-hidden not-prose">
    <div
      ref="preview"
      :class="[
        'p-6 bg-white dark:bg-gray-900',
        'bg-[radial-gradient(circle,_rgb(0_0_0_/_0.07)_1px,_transparent_1px)] dark:bg-[radial-gradient(circle,_rgb(255_255_255_/_0.07)_1px,_transparent_1px)]',
        'bg-[length:16px_16px]',
        stretch ? 'block' : 'flex justify-center items-center',
      ]"
    >
      <slot />
    </div>
    <div class="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
      <button
        class="w-full bg-transparent border-0 text-gray-500 dark:text-gray-400 text-xs font-medium cursor-pointer px-4 py-2 hover:text-gray-700 dark:hover:text-gray-300 transition-colors text-left"
        @click="showCode = !showCode"
      >
        {{ showCode ? 'Hide code' : 'Show code' }}
      </button>
      <div v-show="showCode" class="border-t border-gray-200 dark:border-gray-700">
        <pre class="m-0 p-4 overflow-x-auto text-[13px] leading-relaxed bg-gray-950 text-gray-300"><code>{{ code }}</code></pre>
      </div>
    </div>
  </div>
</template>
