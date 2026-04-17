<script setup lang="ts">
import { ref, onMounted } from 'vue';

const STORAGE_KEY = 'jib-brand-color';

const presets = [
  { name: 'red',      css: 'bg-red-500',      value: 'var(--color-red-500)' },
  { name: 'orange',   css: 'bg-orange-500',   value: 'var(--color-orange-500)' },
  { name: 'amber',    css: 'bg-amber-500',    value: 'var(--color-amber-500)' },
  { name: 'yellow',   css: 'bg-yellow-500',   value: 'var(--color-yellow-500)' },
  { name: 'lime',     css: 'bg-lime-500',     value: 'var(--color-lime-500)' },
  { name: 'green',    css: 'bg-green-500',    value: 'var(--color-green-500)' },
  { name: 'emerald',  css: 'bg-emerald-500',  value: 'var(--color-emerald-500)' },
  { name: 'teal',     css: 'bg-teal-500',     value: 'var(--color-teal-500)' },
  { name: 'cyan',     css: 'bg-cyan-500',     value: 'var(--color-cyan-500)' },
  { name: 'sky',      css: 'bg-sky-500',      value: 'var(--color-sky-500)' },
  { name: 'blue',     css: 'bg-blue-500',     value: 'var(--color-blue-500)' },
  { name: 'indigo',   css: 'bg-indigo-500',   value: 'var(--color-indigo-500)' },
  { name: 'violet',   css: 'bg-violet-500',   value: 'var(--color-violet-500)' },
  { name: 'purple',   css: 'bg-purple-500',   value: 'var(--color-purple-500)' },
  { name: 'fuchsia',  css: 'bg-fuchsia-500',  value: 'var(--color-fuchsia-500)' },
  { name: 'pink',     css: 'bg-pink-500',     value: 'var(--color-pink-500)' },
  { name: 'rose',     css: 'bg-rose-500',     value: 'var(--color-rose-500)' },
  { name: 'slate',    css: 'bg-slate-500',    value: 'var(--color-slate-500)' },
  { name: 'gray',     css: 'bg-gray-500',     value: 'var(--color-gray-500)' },
  { name: 'zinc',     css: 'bg-zinc-500',     value: 'var(--color-zinc-500)' },
  { name: 'neutral',  css: 'bg-neutral-500',  value: 'var(--color-neutral-500)' },
  { name: 'stone',    css: 'bg-stone-500',    value: 'var(--color-stone-500)' },
] as const;

const active = ref('deep-sky');

function apply(value: string, name: string) {
  document.documentElement.style.setProperty('--color-jib-brand', value);
  active.value = name;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ name, value })); } catch {}
}

function onCustomColor(e: Event) {
  const hex = (e.target as HTMLInputElement).value;
  apply(hex, '__custom');
}

onMounted(() => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const { name, value } = JSON.parse(stored);
      apply(value, name);
    }
  } catch {}
});
</script>

<template>
  <div
    class="jib-brandpicker flex items-center gap-2 px-2"
    title="Trim the sail"
  >
    <!-- Wind/sail glyph prefix -->
    <svg
      class="shrink-0 text-jib-wind opacity-80"
      width="16" height="16" viewBox="0 0 20 20" aria-hidden="true"
    >
      <path d="M 3 18 L 3 2 L 17 13 L 5 13 L 3 18 Z" fill="currentColor" opacity="0.6" />
      <path d="M 3 18 L 3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none" />
    </svg>

    <div class="flex items-center gap-1">
      <button
        v-for="preset in presets"
        :key="preset.name"
        :title="preset.name"
        :class="[
          preset.css,
          'jib-brandpicker-chip size-4 rounded-full border-0 cursor-pointer shrink-0 transition-shadow bg-ripple ripple-color-white/40 ripple-position-center',
          active === preset.name
            ? 'ring-2 ring-[var(--color-jib-wind)] ring-offset-1 ring-offset-gray-900'
            : 'hover:ring-1 hover:ring-white/50',
        ]"
        @click="apply(preset.value, preset.name)"
      />
      <label
        :class="[
          'jib-brandpicker-chip relative size-4 overflow-hidden rounded-full border border-jib-wind/40 cursor-pointer shrink-0',
          active === '__custom'
            ? 'ring-2 ring-[var(--color-jib-wind)] ring-offset-1 ring-offset-gray-900'
            : '',
        ]"
        title="Custom color"
      >
        <input
          type="color"
          class="absolute inset-0 size-full cursor-pointer opacity-0"
          @input="onCustomColor"
        />
        <span class="block size-full bg-conic-[red,yellow,lime,aqua,blue,magenta,red]" />
      </label>
    </div>
  </div>
</template>

<style scoped>
@supports (corner-shape: squircle) {
  .jib-brandpicker-chip {
    corner-shape: squircle;
  }
}
</style>
