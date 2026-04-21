<template>
  <section class="magazine-slide relative min-h-[60vh] scroll-snap-align-start flex items-center bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 px-6 md:px-12 py-16">
    <div class="mx-auto w-full max-w-[1300px] space-y-10">
      <div class="space-y-2">
        <h2 class="text-3xl md:text-4xl font-black tracking-tight">Also Included.</h2>
        <p class="text-base opacity-70 max-w-[48ch] leading-relaxed">
          Utilities that don't fit the colour story but are worth having.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Corner Shapes -->
        <div class="space-y-3">
          <h3 class="text-lg font-bold">Corner Shapes</h3>
          <p class="text-sm opacity-70 leading-relaxed">
            Squircle, bevel, scoop, notch — mix per corner. Progressive enhancement via <code class="font-mono text-sky-500">@supports</code>, standard border-radius as fallback.
          </p>
          <div class="rounded-xl bg-gray-900 dark:bg-gray-800 border border-gray-700/50 overflow-hidden">
            <div class="px-3 py-1.5 border-b border-gray-700/30">
              <span class="font-mono text-[10px] text-gray-400 uppercase tracking-wider">html</span>
            </div>
            <pre class="m-0 px-4 py-3 font-mono text-[12px] leading-relaxed text-gray-300 whitespace-pre-wrap"><code>&lt;div class="corner-squircle rounded-3xl"&gt;
&lt;div class="corner-bevel rounded-3xl"&gt;
&lt;div class="corner-tl-scoop corner-br-scoop"&gt;</code></pre>
          </div>
          <a href="/tw-jib-css/guide/corner" class="inline-block text-sm font-semibold text-sky-500 no-underline hover:text-sky-400">Corner Shape docs &rarr;</a>
        </div>

        <!-- Border Styles -->
        <div class="space-y-3">
          <h3 class="text-lg font-bold">Border Styles</h3>
          <p class="text-sm opacity-70 leading-relaxed">
            Per-side border styles that Tailwind doesn't expose. Dashed top, dotted bottom — mix freely.
          </p>
          <div class="rounded-xl bg-gray-900 dark:bg-gray-800 border border-gray-700/50 overflow-hidden">
            <div class="px-3 py-1.5 border-b border-gray-700/30">
              <span class="font-mono text-[10px] text-gray-400 uppercase tracking-wider">html</span>
            </div>
            <pre class="m-0 px-4 py-3 font-mono text-[12px] leading-relaxed text-gray-300 whitespace-pre-wrap"><code>&lt;div class="border-t-dashed border-b-dotted"&gt;
&lt;div class="border-l-double border-r-solid"&gt;
&lt;div class="border-x-dashed border-y-dotted"&gt;</code></pre>
          </div>
          <a href="/tw-jib-css/guide/border-style" class="inline-block text-sm font-semibold text-sky-500 no-underline hover:text-sky-400">Border Style docs &rarr;</a>
        </div>
      </div>

      <div class="flex gap-3 pt-4">
        <a href="/tw-jib-css/guide/installation" class="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white no-underline hover:bg-sky-400">Get Started</a>
        <a href="https://github.com/simonm-c/tw-jib-css" class="rounded-xl border border-sky-400/50 px-6 py-3 text-sm font-semibold text-sky-300 no-underline hover:bg-sky-400/10">GitHub</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.magazine-slide { scroll-snap-align: start; }
</style>
