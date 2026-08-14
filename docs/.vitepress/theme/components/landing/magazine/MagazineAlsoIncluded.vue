<template>
  <section
    class="relative min-h-[60vh] snap-start flex items-center bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 px-6 md:px-12 py-16"
  >
    <div class="mx-auto w-full max-w-[1300px] space-y-10">
      <div class="space-y-2">
        <h2 class="text-3xl md:text-4xl font-black tracking-tight">Also Included.</h2>
        <p class="text-base opacity-70 max-w-[48ch] leading-relaxed">
          What doesn't fit the colour story — and what deliberately isn't in this package at all.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Border Styles -->
        <div class="space-y-3">
          <h3 class="text-lg font-bold">Border Styles</h3>
          <p class="text-sm opacity-70 leading-relaxed">
            Per-side border styles that Tailwind doesn't expose. Dashed top, dotted bottom — mix
            freely.
          </p>
          <div
            class="rounded-xl bg-gray-900 dark:bg-gray-800 border border-gray-700/50 overflow-hidden"
          >
            <div class="px-3 py-1.5 border-b border-gray-700/30">
              <span class="font-mono text-[10px] text-gray-400 uppercase tracking-wider">html</span>
            </div>
            <pre
              class="m-0 px-4 py-3 font-mono text-[12px] leading-relaxed text-gray-300 whitespace-pre-wrap"
            ><code>&lt;div class="border-t-dashed border-b-dotted"&gt;
&lt;div class="border-l-double border-r-solid"&gt;
&lt;div class="border-x-dashed border-y-dotted"&gt;</code></pre>
          </div>
          <a
            href="/tw-jib-css/guide/border-style"
            class="inline-block text-sm font-semibold text-sky-500 no-underline hover:text-sky-400"
            >Border Style docs &rarr;</a
          >
        </div>

        <!-- The only pointer from this instance to the experimental one. It is
             deliberately the last thing on the page and deliberately states the
             cost before the contents: a reader who never scrolls this far has
             lost nothing, and a reader who does gets the trade, not a teaser.
             Nothing here is version-pinned — "not baseline yet" is the whole
             claim, and the experimental instance carries the per-module detail. -->
        <div class="space-y-3">
          <div class="flex flex-wrap items-center gap-2">
            <h3 class="text-lg font-bold">Not Baseline Yet</h3>
            <span
              class="rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300"
              >separate package</span
            >
          </div>
          <p class="text-sm opacity-70 leading-relaxed">
            A second, optional install carries the parts that aren't portable yet: corner shapes
            past the circular arc, animation to <code class="font-mono text-xs">auto</code>, a
            styleable <code class="font-mono text-xs">select</code>, a live WCAG badge, and the
            colour transforms as callable CSS functions you can drop into a gradient stop or a
            box-shadow. Mostly Chromium-only.
          </p>
          <p class="text-sm opacity-70 leading-relaxed">
            Nothing above depends on it, and nothing above changes if you skip it. Half of it does
            replace utilities on this page with <code class="font-mono text-xs">@function</code>
            reimplementations, so that half is its own opt-in import.
          </p>
          <div
            class="rounded-xl bg-gray-900 dark:bg-gray-800 border border-gray-700/50 overflow-hidden"
          >
            <div class="px-3 py-1.5 border-b border-gray-700/30">
              <span class="font-mono text-[10px] text-gray-400 uppercase tracking-wider"
                >css · order carries the override</span
              >
            </div>
            <pre
              class="m-0 px-4 py-3 font-mono text-[12px] leading-relaxed text-gray-300 whitespace-pre-wrap"
            ><code>@import 'tailwindcss';
@import 'tw-jib-css';
@import 'tw-jib-css-experimental';</code></pre>
          </div>
          <a
            href="https://simonm-c.github.io/tw-jib-css/experimental/"
            class="inline-block text-sm font-semibold text-sky-500 no-underline hover:text-sky-400"
            >Experimental docs &rarr;</a
          >
        </div>
      </div>

      <div class="flex gap-3 pt-4">
        <a
          href="/tw-jib-css/guide/installation"
          class="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white no-underline hover:bg-sky-400"
          >Get Started</a
        >
        <a
          href="https://github.com/simonm-c/tw-jib-css"
          class="rounded-xl border border-sky-400/50 px-6 py-3 text-sm font-semibold text-sky-300 no-underline hover:bg-sky-400/10"
          >GitHub</a
        >
      </div>
    </div>
  </section>
</template>
