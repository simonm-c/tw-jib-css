<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

defineProps<{
  /** When true, preview uses block display instead of flex centering */
  stretch?: boolean;
  /** Optional eyebrow label shown above the preview */
  label?: string;
}>();

const preview = ref<HTMLElement>();
const code = ref('');
const showCode = ref(false);

function formatHtml(html: string): string {
  let formatted = html.trim();
  formatted = formatted.replace(/></g, '>\n<');
  formatted = formatted
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join('\n');
  const lines = formatted.split('\n');
  let indent = 0;
  const result: string[] = [];
  for (const line of lines) {
    if (line.startsWith('</') || line.startsWith('-->')) {
      indent = Math.max(0, indent - 1);
    }
    result.push('  '.repeat(indent) + line);
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
  <div
    class="group my-5 overflow-hidden rounded-2xl border border-jib-brand -border-saturation-50 border-lighten-72 dark:border-darken-55 bg-jib-brand -bg-saturation-50 bg-lighten-92 dark:bg-darken-85 transition-shadow duration-200 hover:shadow-[0_0_0_2px_var(--color-jib-wind)] not-prose"
  >
    <p
      v-if="label"
      class="flex items-center gap-2 border-b border-jib-wind/25 bg-jib-brand -bg-saturation-60 bg-lighten-95 dark:bg-darken-88 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-900 dark:text-slate-200"
    >
      <span class="opacity-80">{{ label }}</span>
    </p>

    <div
      ref="preview"
      :class="['relative p-6', stretch ? 'block' : 'flex justify-center items-center']"
    >
      <slot />
    </div>

    <div
      class="border-t border-jib-wind/25 bg-jib-brand -bg-saturation-60 bg-lighten-95 dark:bg-darken-88"
    >
      <button
        class="w-full border-0 bg-transparent bg-ripple ripple-color-jib-wind/40 ripple-position-center px-4 py-2 text-left font-mono text-[11px] uppercase tracking-[0.2em] cursor-pointer text-slate-900 dark:text-slate-200 transition-colors"
        @click="showCode = !showCode"
      >
        {{ showCode ? 'hide code' : 'show code' }}
      </button>
      <div v-show="showCode" class="border-t border-jib-wind/20">
        <pre
          class="m-0 overflow-x-auto bg-jib-brand -bg-saturation-40 bg-darken-80 dark:bg-darken-88 p-4 text-[13px] leading-relaxed text-slate-200"
        ><code>{{ code }}</code></pre>
      </div>
    </div>
  </div>
</template>
