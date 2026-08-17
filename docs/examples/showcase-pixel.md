---
title: Pixel Showcase
layout: page
sidebar: false
aside: false
pageClass: showcase
---

<div class="text-stone-100 font-bold">
<div class="h-screen w-screen fixed pointer-events-none inset-0 z-10 overflow-hidden">
  <div class="absolute top-0 bottom-0 w-[30%] -left-[20%] bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)] mix-blend-screen pointer-events-none animate-raster-retrace motion-reduce:hidden"></div>
</div><!-- ============================================================
     NAV
     ============================================================ -->
<nav class="sticky top-16 z-50 h-14 bg-pixel-stone-700 border-b border-stone-100/10 flex items-center justify-between px-8">
  <div class="flex items-center gap-3">
    <span class="font-departure text-[28px] text-stone-100 font-bold">RASTER</span>
  </div>
  <div class="hidden md:flex gap-8 font-departure text-[17px] text-stone-300">
    <span class="cursor-pointer hover:text-stone-100">Hero</span>
    <span class="cursor-pointer hover:text-stone-100">Schedule</span>
    <span class="cursor-pointer hover:text-stone-100">Calibration</span>
    <span class="cursor-pointer hover:text-stone-100">Channels</span>
    <span class="cursor-pointer hover:text-stone-100">Featured</span>
    <span class="cursor-pointer hover:text-stone-100">Archive</span>
  </div>
  <span class="bg-pixel-yellow-400 pixel-bloom-2 text-stone-100 font-silkscreen text-[15px] tabular-nums uppercase tracking-[0.06em] px-3 h-7 inline-flex items-center gap-2">
    <span class="w-2 h-2 bg-stone-950 animate-raster-live motion-reduce:animate-none"></span> LIVE DEMO
  </span>
</nav><!-- ============================================================
     HERO
     ============================================================ -->
<section class="relative min-h-[92vh] bg-pixel-blue-900 overflow-hidden">
  <div class="relative grid grid-cols-12 gap-6 max-w-[1440px] mx-auto px-16 pt-32 pb-20">
    <div class="col-span-12 md:col-span-8">
      <p class="font-silkscreen text-[16px] uppercase tracking-[0.08em] text-stone-400 m-0">
        PIXEL TEXTURE SHOWCASE
      </p>
      <h1 class="font-departure font-black border-0 text-[60px] md:text-[80px] leading-[0.98] tracking-[-0.01em] text-stone-100 mt-8">
        Every color is three columns of light.
      </h1>
      <p class="font-departure text-[22px] leading-[1.6] text-stone-300 max-w-[52ch] mt-8">
        Red, green, blue sub-pixels on a black backplate. No images, no SVG. Scroll for the dials.
      </p>
      <div class="flex flex-wrap gap-4 mt-10">
        <span class="bg-pixel-red-500 hover:bg-pixel-red-400 pixel-bloom-2 text-stone-100 font-departure text-[17px] uppercase tracking-[0.08em] h-12 px-8 inline-flex items-center cursor-pointer">
          Size dial →
        </span>
        <span class="bg-pixel-blue-700 text-stone-100 font-departure text-[17px] uppercase tracking-[0.08em] h-12 px-8 inline-flex items-center cursor-pointer hover:bg-pixel-blue-600">
          Bloom dial →
        </span>
      </div>
    </div>
    <article class="col-span-12 md:col-span-4 bg-pixel-fuchsia-800 pixel-bloom-2 text-stone-100 h-[520px] p-8 flex flex-col justify-between">
      <div>
        <p class="font-silkscreen text-[14px] uppercase tracking-[0.08em] m-0">pixel-fuchsia-800</p>
      </div>
      <div>
        <h3 class="font-departure font-black border-0 m-0 text-[44px] leading-[1.05]">
          Fuchsia<br/><span class="text-stone-300">= R + B</span>
        </h3>
      </div>
    </article>
  </div>
</section><!-- ============================================================
     01 · PALETTE
     ============================================================ -->
<section class="border-t border-stone-100/10 bg-pixel-stone-800 py-12">
  <div class="max-w-[1440px] mx-auto px-8">
    <div class="mb-8">
      <p class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-400 m-0">
        // 01 · THE PALETTE
      </p>
      <h2 class="font-departure font-black border-0 text-[44px] md:text-[52px] leading-[1.05] text-stone-100 mt-4 max-w-[40ch]">
        Six hues. Shade varies within each row.
      </h2>
    </div>    <div class="flex items-center justify-between mb-4 pt-4 border-t border-stone-100/10">
      <p class="font-silkscreen text-[15px] uppercase tracking-[0.08em] text-stone-400 m-0">18:00 – 02:00</p>
      <p class="font-silkscreen text-[15px] uppercase tracking-[0.08em] text-stone-400 m-0">▶ CURRENT 22:47</p>
    </div>    <div class="grid grid-cols-[80px_1fr] gap-4 items-center">
      <span class="font-silkscreen text-[15px] text-stone-500 text-right tabular-nums">RED</span>
      <div class="flex h-10 gap-[2px]">
        <div class="bg-pixel-red-600 text-stone-100 font-silkscreen text-[14px] px-2 flex items-center flex-3">-600</div>
        <div class="bg-pixel-red-500 text-stone-100 font-silkscreen text-[14px] px-2 flex items-center flex-4">-500</div>
        <div class="bg-pixel-red-700 text-stone-100 font-silkscreen text-[14px] px-2 flex items-center flex-3">-700</div>
      </div>      <span class="font-silkscreen text-[15px] text-stone-500 text-right tabular-nums">YELLOW</span>
      <div class="flex h-10 gap-[2px]">
        <div class="bg-pixel-yellow-500 text-stone-100 font-silkscreen text-[14px] px-2 flex items-center flex-5">-500</div>
        <div class="bg-pixel-yellow-600 text-stone-100 font-silkscreen text-[14px] px-2 flex items-center flex-5">-600</div>
      </div>      <span class="font-silkscreen text-[15px] text-stone-500 text-right tabular-nums">EMERALD</span>
      <div class="flex h-10 gap-[2px]">
        <div class="bg-pixel-emerald-500 text-stone-100 font-silkscreen text-[14px] px-2 flex items-center flex-4">-500</div>
        <div class="bg-pixel-emerald-700 text-stone-100 font-silkscreen text-[14px] px-2 flex items-center flex-6">-700</div>
      </div>      <span class="font-silkscreen text-[15px] text-stone-500 text-right tabular-nums">BLUE</span>
      <div class="flex h-10 gap-[2px]">
        <div class="bg-pixel-blue-600 text-stone-100 font-silkscreen text-[14px] px-2 flex items-center flex-7">-600</div>
        <div class="bg-pixel-blue-500 text-stone-100 font-silkscreen text-[14px] px-2 flex items-center flex-3">-500</div>
      </div>      <span class="font-silkscreen text-[15px] text-stone-500 text-right tabular-nums">FUCHSIA</span>
      <div class="flex h-10 gap-[2px]">
        <div class="bg-pixel-fuchsia-600 text-stone-100 font-silkscreen text-[14px] px-2 flex items-center flex-6">-600</div>
        <div class="bg-pixel-fuchsia-700 text-stone-100 font-silkscreen text-[14px] px-2 flex items-center flex-4">-700</div>
      </div>      <span class="font-silkscreen text-[15px] text-stone-500 text-right tabular-nums">CYAN</span>
      <div class="flex h-10 gap-[2px]">
        <div class="bg-pixel-cyan-500 text-stone-100 font-silkscreen text-[14px] px-2 flex items-center flex-3">-500</div>
        <div class="bg-pixel-cyan-700 text-stone-100 font-silkscreen text-[14px] px-2 flex items-center flex-7">-700</div>
      </div>
    </div>    <div class="grid grid-cols-9 mt-4 pt-3 border-t border-stone-100/10 font-silkscreen text-[14px] text-stone-500 tabular-nums">
      <span></span>
      <span>18:00</span><span>19:00</span><span>20:00</span><span>21:00</span><span>22:00</span><span>23:00</span><span>00:00</span><span>01:00</span>
    </div>
  </div>
</section><!-- ============================================================
     02 · SIZE
     ============================================================ -->
<section class="bg-pixel-green-800">
  <div class="px-16 py-24 max-w-[1440px] mx-auto">
    <p class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-400 m-0">
      // 02 · SIZE
    </p>
    <h2 class="font-departure font-black border-0 text-[52px] md:text-[60px] leading-[1.05] text-stone-100 mt-4 max-w-[32ch]">
      Same white. Only <code class="!text-[inherit] !bg-transparent !p-0">pixel-size</code> changes.
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mt-16">
      <figure>
        <div class="aspect-[3/4] bg-pixel-white"></div>
        <figcaption class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-100 mt-3">
          SIZE 1 · SHIPS HERE
        </figcaption>
      </figure>
      <figure>
        <div class="aspect-[3/4] bg-pixel-white pixel-size-1.5"></div>
        <figcaption class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-300 mt-3">
          SIZE 1.5 · UI
        </figcaption>
      </figure>
      <figure>
        <div class="aspect-[3/4] bg-pixel-white pixel-size-2"></div>
        <figcaption class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-400 mt-3">
          SIZE 2
        </figcaption>
      </figure>
      <figure>
        <div class="aspect-[3/4] bg-pixel-white pixel-size-3"></div>
        <figcaption class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-400 mt-3">
          SIZE 3
        </figcaption>
      </figure>
      <figure>
        <div class="aspect-[3/4] bg-pixel-white pixel-size-6"></div>
        <figcaption class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-400 mt-3">
          SIZE 6
        </figcaption>
      </figure>
    </div>
  </div>
</section><!-- ============================================================
     03 · CHANNELS
     ============================================================ -->
<section class="bg-pixel-stone-700">
  <div class="border-t border-stone-100/10 px-16 py-24 max-w-[1440px] mx-auto">
    <p class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-400 m-0">
      // 03 · CHANNELS
    </p>
    <h2 class="font-departure font-black border-0 text-[52px] leading-[1.05] text-stone-100 mt-4 max-w-[38ch]">
      Six tiles. Which columns are firing.
    </h2>    <div class="grid grid-cols-2 md:grid-cols-6 gap-4 mt-12">
      <article class="bg-pixel-red-500 text-stone-100 p-6 aspect-[2/3] flex flex-col justify-between">
        <span class="font-silkscreen text-[14px] uppercase tracking-[0.08em]">red · 500</span>
        <div>
          <h3 class="font-departure font-black border-0 m-0 text-[44px] leading-[1.0]">R</h3>
          <p class="font-silkscreen text-[15px] text-stone-300 mt-2">red only</p>
        </div>
      </article>
      <article class="bg-pixel-yellow-400 text-stone-100 p-6 aspect-[2/3] flex flex-col justify-between">
        <span class="font-silkscreen text-[14px] uppercase tracking-[0.08em]">yellow · 400</span>
        <div>
          <h3 class="font-departure font-black border-0 m-0 text-[44px] leading-[1.0]">R+G</h3>
          <p class="font-silkscreen text-[15px] text-stone-300 mt-2">red + green</p>
        </div>
      </article>
      <article class="bg-pixel-emerald-500 text-stone-100 p-6 aspect-[2/3] flex flex-col justify-between">
        <span class="font-silkscreen text-[14px] uppercase tracking-[0.08em]">emerald · 500</span>
        <div>
          <h3 class="font-departure font-black border-0 m-0 text-[44px] leading-[1.0]">G</h3>
          <p class="font-silkscreen text-[15px] text-stone-300 mt-2">green, trace B</p>
        </div>
      </article>
      <article class="bg-pixel-blue-500 text-stone-100 p-6 aspect-[2/3] flex flex-col justify-between">
        <span class="font-silkscreen text-[14px] uppercase tracking-[0.08em]">blue · 500</span>
        <div>
          <h3 class="font-departure font-black border-0 m-0 text-[44px] leading-[1.0]">B</h3>
          <p class="font-silkscreen text-[15px] text-stone-300 mt-2">blue only</p>
        </div>
      </article>
      <article class="bg-pixel-fuchsia-500 text-stone-100 p-6 aspect-[2/3] flex flex-col justify-between">
        <span class="font-silkscreen text-[14px] uppercase tracking-[0.08em]">fuchsia · 500</span>
        <div>
          <h3 class="font-departure font-black border-0 m-0 text-[44px] leading-[1.0]">R+B</h3>
          <p class="font-silkscreen text-[15px] text-stone-300 mt-2">red + blue</p>
        </div>
      </article>
      <article class="bg-pixel-cyan-500 text-stone-100 p-6 aspect-[2/3] flex flex-col justify-between">
        <span class="font-silkscreen text-[14px] uppercase tracking-[0.08em]">cyan · 500</span>
        <div>
          <h3 class="font-departure font-black border-0 m-0 text-[44px] leading-[1.0]">G+B</h3>
          <p class="font-silkscreen text-[15px] text-stone-300 mt-2">green + blue</p>
        </div>
      </article>
    </div>
  </div>
</section><!-- ============================================================
     04 · BLOOM
     ============================================================ -->
<section class="bg-pixel-rose-950">
  <div class="border-t border-stone-100/10 px-16 py-24 max-w-[1440px] mx-auto">
    <p class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-400 m-0">
      // 04 · BLOOM
    </p>
    <h2 class="font-departure font-black border-0 text-[52px] md:text-[60px] leading-[1.05] text-stone-100 mt-4 max-w-[32ch]">
      Columns spread. Seams blend. Colour saturates.
    </h2>    <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mt-16">
      <figure>
        <div class="aspect-[3/4] bg-pixel-yellow-400 pixel-bloom-0"></div>
        <figcaption class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-400 mt-3">BLOOM 0</figcaption>
      </figure>
      <figure>
        <div class="aspect-[3/4] bg-pixel-yellow-400 pixel-bloom-1"></div>
        <figcaption class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-400 mt-3">BLOOM 1</figcaption>
      </figure>
      <figure>
        <div class="aspect-[3/4] bg-pixel-yellow-400 pixel-bloom-2"></div>
        <figcaption class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-300 mt-3">BLOOM 2 · SHIPS HERE</figcaption>
      </figure>
      <figure>
        <div class="aspect-[3/4] bg-pixel-yellow-400 pixel-bloom-3"></div>
        <figcaption class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-200 mt-3">BLOOM 3</figcaption>
      </figure>
      <figure>
        <div class="aspect-[3/4] bg-pixel-yellow-400 pixel-bloom-4"></div>
        <figcaption class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-100 mt-3">BLOOM 4</figcaption>
      </figure>
    </div>    <p class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-400 mt-10">
      YELLOW = R + G · BLOOM RATE = R AND G FINDING EACH OTHER
    </p>    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
      <figure>
        <div class="aspect-video bg-pixel-fuchsia-500 pixel-bloom-0"></div>
        <figcaption class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-400 mt-3">FUCHSIA · BLOOM 0</figcaption>
      </figure>
      <figure>
        <div class="aspect-video bg-pixel-fuchsia-500 pixel-bloom-2"></div>
        <figcaption class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-300 mt-3">BLOOM 2</figcaption>
      </figure>
      <figure>
        <div class="aspect-video bg-pixel-fuchsia-500 pixel-bloom-4"></div>
        <figcaption class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-100 mt-3">BLOOM 4</figcaption>
      </figure>
    </div>
  </div>
</section><!-- ============================================================
     05 · CHIPS
     ============================================================ -->
<section class="bg-pixel-stone-600">
  <div class="border-t border-stone-100/10 px-16 py-24 max-w-[1440px] mx-auto">
    <p class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-400 m-0">
      // 05 · CHIPS
    </p>
    <h2 class="font-departure font-black border-0 text-[52px] leading-[1.05] text-stone-100 mt-4 max-w-[36ch]">
      Chips at -600. Headlines win.
    </h2>    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      <article class="bg-pixel-stone-800 border border-stone-100/10 p-8">
        <span class="bg-pixel-fuchsia-600 text-stone-100 font-silkscreen text-[14px] uppercase tracking-[0.08em] px-3 h-6 inline-flex items-center">
          fuchsia · 600
        </span>
        <h3 class="font-departure font-black border-0 text-[34px] leading-[1.1] text-stone-100 mt-6">
          Headline sits above chip in reading order
        </h3>
      </article>
      <article class="bg-pixel-stone-800 border border-stone-100/10 p-8">
        <span class="bg-pixel-emerald-600 text-stone-100 font-silkscreen text-[14px] uppercase tracking-[0.08em] px-3 h-6 inline-flex items-center">
          emerald · 600
        </span>
        <h3 class="font-departure font-black border-0 text-[34px] leading-[1.1] text-stone-100 mt-6">
          Chip hue rotates. Card surface doesn't.
        </h3>
      </article>
      <article class="bg-pixel-stone-800 border border-stone-100/10 p-8">
        <span class="bg-pixel-yellow-500 text-stone-100 font-silkscreen text-[14px] uppercase tracking-[0.08em] px-3 h-6 inline-flex items-center">
          yellow · 500
        </span>
        <h3 class="font-departure font-black border-0 text-[34px] leading-[1.1] text-stone-100 mt-6">
          Small chips use pixel-bloom-2
        </h3>
      </article>
    </div>
  </div>
</section><!-- ============================================================
     06 · FORM
     ============================================================ -->
<section class="bg-pixel-cyan-800">
  <div class="px-16 py-24">
    <div class="max-w-[640px] mx-auto mb-8">
      <p class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-400 m-0">
        // 06 · FORM
      </p>
      <h3 class="font-departure font-black border-0 text-[44px] leading-[1.05] text-stone-100 mt-4">
        Four bars. One border.
      </h3>
    </div>    <div class="max-w-[640px] mx-auto border border-stone-100/15 bg-pixel-stone-800 relative">
      <div class="absolute top-0 left-0 right-0 flex h-1">
        <div class="flex-1 bg-pixel-red-500"></div>
        <div class="flex-1 bg-pixel-yellow-400"></div>
        <div class="flex-1 bg-pixel-emerald-500"></div>
        <div class="flex-1 bg-pixel-blue-500"></div>
      </div>
      <div class="p-10 pt-12">
        <form class="flex gap-3" onsubmit="event.preventDefault()">
          <input type="email" placeholder="flat input · no texture" aria-label="Email address" class="flex-1 bg-pixel-stone-900 border border-stone-100/20 text-stone-100 caret-stone-100 font-departure text-[18px] px-4 h-12 outline-none focus:border-stone-100"/>
          <button type="submit" class="bg-pixel-red-500 hover:bg-pixel-red-400 pixel-bloom-2 text-stone-100 font-departure text-[17px] uppercase tracking-[0.08em] h-12 px-6">Submit →</button>
        </form>
      </div>
    </div>
  </div>
</section><!-- ============================================================
     FOOTER
     ============================================================ -->
<footer class="border-t bg-pixel-orange-900 border-stone-100/10 px-16 py-14">
  <div class="max-w-[1440px] mx-auto">
    <p class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-400 mb-3">
      // FOOTER · PIXEL-ORANGE-900
    </p>
    <p class="font-departure text-[18px] leading-[1.6] text-stone-300 max-w-[62ch] mb-10">
      Orange has no phosphor. It's R full, G partial, B dark.
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 font-departure text-[17px] text-stone-300">
      <div>
        <p class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-500 mb-3">LIBRARY</p>
        <ul class="space-y-2">
          <li class="hover:text-stone-100 cursor-pointer">Installation</li>
          <li class="hover:text-stone-100 cursor-pointer">Pixel reference</li>
          <li class="hover:text-stone-100 cursor-pointer">Print textures</li>
        </ul>
      </div>
      <div>
        <p class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-500 mb-3">OTHER SHOWCASES</p>
        <ul class="space-y-2">
          <li class="hover:text-stone-100 cursor-pointer">Comic halftone</li>
        </ul>
      </div>
      <div>
        <p class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-500 mb-3">SOURCE</p>
        <ul class="space-y-2">
          <li class="hover:text-stone-100 cursor-pointer">GitHub</li>
          <li class="hover:text-stone-100 cursor-pointer">NPM</li>
          <li class="hover:text-stone-100 cursor-pointer">Changelog</li>
        </ul>
      </div>
      <div>
        <p class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-500 mb-3">LICENSE</p>
        <ul class="space-y-2">
          <li class="hover:text-stone-100 cursor-pointer">MIT</li>
          <li class="hover:text-stone-100 cursor-pointer">Credits</li>
        </ul>
      </div>
    </div>
  </div>
</footer>
<div class="bg-pixel-stone-900 h-6 flex items-center justify-center">
  <span class="font-silkscreen text-[14px] uppercase tracking-[0.08em] text-stone-100">END OF SHOWCASE · PIXEL TEXTURES · TW-JIB-CSS</span>
</div>
</div>
