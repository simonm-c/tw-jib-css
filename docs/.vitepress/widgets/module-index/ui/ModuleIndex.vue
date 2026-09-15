<script setup lang="ts">
import CodePanel from '@shared/shared/ui/CodePanel.vue';
</script>

<template>
  <section
    class="relative bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 px-6 md:px-12 py-16"
  >
    <div class="mx-auto w-full max-w-[1300px] space-y-10">
      <div class="space-y-2">
        <h2 class="text-3xl md:text-4xl font-black tracking-tight">Also Included.</h2>
        <p class="text-base opacity-70 max-w-[48ch] leading-relaxed">
          Two modules that touch no color, and one package that deliberately isn't in this one.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- The two modules that read no color at all. They carry none of the
             color machinery and their support floor is plain Tailwind's, which
             is the reason they are worth naming rather than burying. -->
        <div class="space-y-8">
          <div class="space-y-3">
            <h3 class="text-lg font-bold">Border Styles</h3>
            <p class="text-sm opacity-70 leading-relaxed">
              Tailwind sets border style on all four sides at once. These do one side at a time. A
              dashed top over a dotted bottom, no custom rule.
            </p>
            <CodePanel lang="html" wrap
              >&lt;div class="border-t-dashed border-b-dotted"&gt; &lt;div class="border-l-double
              border-r-solid"&gt; &lt;div class="border-x-dashed border-y-dotted"&gt;</CodePanel
            >
            <a
              href="/tw-jib-css/guide/border-style"
              class="inline-block text-sm font-semibold text-(color:--docs-accent) no-underline hover:text-lighten-15"
              >Border Style docs &rarr;</a
            >
          </div>

          <div class="space-y-3">
            <h3 class="text-lg font-bold">Named Grid Areas</h3>
            <p class="text-sm opacity-70 leading-relaxed">
              Tailwind has <code class="font-mono text-xs">grid-cols</code> and
              <code class="font-mono text-xs">grid-rows</code> but no
              <code class="font-mono text-xs">grid-template-areas</code>. Name the regions in the
              markup, place children by name, stop counting line numbers.
            </p>
            <CodePanel lang="html" wrap
              >&lt;div class="grid grid-template-areas-['head_head'_'side_main']"&gt; &lt;header
              class="grid-area-[head]"&gt; &lt;aside class="grid-area-[side]"&gt;</CodePanel
            >
            <a
              href="/tw-jib-css/guide/grid"
              class="inline-block text-sm font-semibold text-(color:--docs-accent) no-underline hover:text-lighten-15"
              >Grid docs &rarr;</a
            >
          </div>
        </div>

        <!-- The only pointer from this instance to the experimental one. It is
             deliberately the last thing on the page and deliberately states the
             cost before the contents: a reader who never scrolls this far has
             lost nothing, and a reader who does gets the trade, not a teaser.
             No support claim is made here; the experimental instance carries
             it per module. -->
        <div class="space-y-3">
          <div class="flex flex-wrap items-center gap-2">
            <h3 class="text-lg font-bold">Cutting-Edge CSS</h3>
            <span
              class="rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300"
              >separate package</span
            >
          </div>
          <p class="text-sm opacity-70 leading-relaxed">
            A second, optional install for the newest things CSS can do. Corner shapes past the
            circular arc, animation to <code class="font-mono text-xs">auto</code>, a styleable
            <code class="font-mono text-xs">select</code>, a live WCAG badge, and the color
            transforms as callable CSS functions.
          </p>
          <p class="text-sm opacity-70 leading-relaxed">
            Nothing above depends on it. Half of it does replace utilities on this page with
            <code class="font-mono text-xs">@function</code> versions, so that half is its own
            opt-in import.
          </p>
          <CodePanel lang="css" wrap
            >@import 'tailwindcss'; @import 'tw-jib-css'; @import
            'tw-jib-css-experimental';</CodePanel
          >
          <a
            href="https://simonm-c.github.io/tw-jib-css/experimental/"
            target="_self"
            class="inline-block text-sm font-semibold text-(color:--docs-accent) no-underline hover:text-lighten-15"
            >Experimental docs &rarr;</a
          >
        </div>
      </div>

      <div class="flex gap-3 pt-4">
        <a
          href="/tw-jib-css/guide/installation"
          class="rounded-xl bg-(color:--docs-accent) bg-darken-10 px-6 py-3 text-sm font-semibold text-white no-underline hover:bg-(color:--docs-accent)"
          >Get Started</a
        >
        <a
          href="https://github.com/simonm-c/tw-jib-css"
          class="rounded-xl border border-(color:--docs-accent)/50 px-6 py-3 text-sm font-semibold text-(color:--docs-accent) text-lighten-20 no-underline hover:bg-(color:--docs-accent)/10"
          >GitHub</a
        >
      </div>
    </div>
  </section>
</template>
