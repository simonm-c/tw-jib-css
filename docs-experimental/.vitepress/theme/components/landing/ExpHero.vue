<script setup lang="ts">
import { ref } from 'vue';
import JibLogo from '../JibLogo.vue';
import StatPill from './StatPill.vue';

const IMPORT_SNIPPET =
  "@import 'tailwindcss';\n@import 'tw-jib-css';\n@import 'tw-jib-css-experimental';";

const copied = ref(false);
async function copy() {
  try {
    await navigator.clipboard.writeText(IMPORT_SNIPPET);
    copied.value = true;
    setTimeout(() => (copied.value = false), 1200);
  } catch {}
}
</script>

<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center px-6 py-16">
    <div class="flex flex-col items-center gap-7 text-center max-w-3xl">
      <div class="relative">
        <JibLogo
          id="exp-hero-logo"
          class="w-[min(32vw,280px)] h-auto drop-shadow-[0_12px_24px_oklch(0.54_0.28_293/0.35)]"
        />
        <span
          class="absolute -right-3 -bottom-2 rotate-[-8deg] rounded-md border border-jib-lab/50 bg-jib-lab px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-white"
        >
          experimental
        </span>
      </div>

      <h1 class="text-4xl md:text-5xl font-black tracking-tight leading-tight">
        The parts that aren’t baseline yet.
      </h1>

      <p class="text-lg opacity-80 leading-relaxed max-w-[52ch]">
        A separate package. Colour transforms you can call anywhere, corner shapes beyond the
        circular arc, animation to <code class="font-mono">auto</code>, a styleable select, and a
        live WCAG contrast badge. Mostly Chromium-only, and it degrades quietly everywhere else —
        unsupported utilities become no-ops, and every stable class keeps working.
      </p>

      <div
        class="rounded-xl bg-gray-800 border border-jib-lab/40 px-4 py-3 font-mono text-[13px] text-gray-300 text-left"
      >
        <div class="flex items-start gap-3">
          <pre
            class="m-0 leading-relaxed"
          ><code>npm i tw-jib-css tw-jib-css-experimental</code></pre>
          <button
            class="shrink-0 rounded bg-jib-lab/25 px-2.5 py-0.5 text-xs font-semibold cursor-pointer text-violet-200 border-0"
            @click="copy"
          >
            {{ copied ? '✓' : 'Copy' }}
          </button>
        </div>
      </div>

      <!-- Every pill has to say something specific to THIS package. A pill that
           restates the install line above it, or repeats a claim the stable
           package makes just as well, differentiates nothing. Quantify the risk
           surface instead — that is what a reader weighing a second install
           wants to know. -->
      <div class="flex flex-wrap justify-center gap-2">
        <StatPill n="5" caption="callable CSS functions" />
        <StatPill n="4" caption="additions, safe alone" />
        <StatPill n="1" caption="override entry, opt-in" />
        <StatPill n="4" caption="families it replaces" />
      </div>

      <div class="flex flex-wrap justify-center gap-3 mt-1">
        <a
          href="/tw-jib-css/experimental/overview"
          class="rounded-xl bg-jib-lab px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-jib-lab hover:bg-lighten-10"
          >Read the overview</a
        >
        <a
          href="/tw-jib-css/"
          class="rounded-xl border border-jib-lab/50 px-5 py-2.5 text-sm font-semibold text-jib-lab dark:text-violet-300 no-underline hover:bg-jib-lab/10"
          >Stable docs</a
        >
        <a
          href="https://github.com/simonm-c/tw-jib-css"
          class="rounded-xl border border-jib-lab/50 px-5 py-2.5 text-sm font-semibold text-jib-lab dark:text-violet-300 no-underline hover:bg-jib-lab/10"
          >GitHub</a
        >
      </div>

      <div class="mt-3 font-mono text-[11px] opacity-40">↓ scroll</div>
    </div>
  </section>
</template>
