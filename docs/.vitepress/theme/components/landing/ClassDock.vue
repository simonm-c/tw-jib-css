<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

type Entry = { label: string; classes: string };
const registry = ref<Record<string, Entry>>({});
const activeId = ref<string | null>(null);
const copied = ref(false);

let observer: IntersectionObserver | null = null;

function scan() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-stratum][data-stratum-label][data-stratum-classes]'));
  const next: Record<string, Entry> = {};
  for (const el of els) {
    const id = el.getAttribute('data-stratum') || '';
    if (!id) continue;
    next[id] = {
      label: el.getAttribute('data-stratum-label') || id,
      classes: el.getAttribute('data-stratum-classes') || '',
    };
  }
  registry.value = next;

  if (observer) observer.disconnect();
  observer = new IntersectionObserver(
    (entries) => {
      // Find most-visible entry
      let best: IntersectionObserverEntry | null = null;
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
      }
      if (best) {
        const id = (best.target as HTMLElement).getAttribute('data-stratum');
        if (id) activeId.value = id;
      }
    },
    { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
  );
  for (const el of els) observer.observe(el);
}

onMounted(() => {
  // Wait one tick so content is mounted
  requestAnimationFrame(() => requestAnimationFrame(scan));
  // Re-scan on route change (for SPA navigation)
  window.addEventListener('popstate', scan);
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
  window.removeEventListener('popstate', scan);
});

async function onCopy() {
  const entry = activeId.value ? registry.value[activeId.value] : null;
  if (!entry) return;
  try {
    await navigator.clipboard.writeText(entry.classes);
    copied.value = true;
    setTimeout(() => (copied.value = false), 1400);
  } catch {}
}
</script>

<template>
  <Transition name="dock">
    <div
      v-if="activeId && registry[activeId]"
      class="class-dock fixed bottom-4 left-1/2 z-50 -translate-x-1/2 max-w-[min(90vw,820px)]"
    >
      <div
        class="flex items-center gap-3 rounded-full border border-jib-wind/50 bg-jib-brand -bg-saturation-60 bg-darken-88 backdrop-blur px-4 py-2 shadow-lg"
      >
        <span class="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] opacity-80 text-slate-200">
          {{ registry[activeId].label }}
        </span>
        <code
          class="flex-1 min-w-0 overflow-x-auto font-mono text-[12px] whitespace-nowrap text-slate-200 opacity-90"
        >{{ registry[activeId].classes }}</code>
        <button
          type="button"
          class="shrink-0 rounded-full border-0 bg-jib-wind/20 hover:bg-jib-wind/30 bg-ripple ripple-color-jib-wind/50 ripple-position-center px-3 py-1 text-xs font-semibold cursor-pointer text-slate-200"
          @click="onCopy"
        >{{ copied ? 'Copied' : 'Copy' }}</button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.dock-enter-active,
.dock-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.dock-enter-from,
.dock-leave-to {
  transform: translate(-50%, 20%);
  opacity: 0;
}
</style>
