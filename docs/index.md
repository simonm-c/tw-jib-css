---
layout: page
pageClass: home-landing
sidebar: false
aside: false
outline: false
title: Jibcss
---

<MagazineRoot>
<MagazineHero />

<MagazineSlide :index="0">
<div class="grid grid-cols-2 gap-4 w-full max-w-md">
<div class="aspect-square rounded-2xl border-4 border-linear-to-br border-from-violet-500 border-to-cyan-400"></div>
<div class="aspect-square rounded-2xl border-4 border-linear-to-br/longer border-from-rose-500 border-to-sky-400"></div>
<div class="aspect-square rounded-2xl border-4 border-conic-0 border-from-indigo-500 border-via-pink-500 border-to-indigo-500"></div>
<div class="aspect-square rounded-full border-4 border-conic-0 border-spin border-spin-duration-4 border-from-emerald-400 border-via-violet-500 border-to-emerald-400"></div>
</div>
</MagazineSlide>

<MagazineSlide :index="1">
<div class="space-y-3 w-full max-w-sm">
<div class="flex gap-1"><div v-for="n in [0,10,20,30,40,50,60,70]" :key="n" :class="['flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-blue-500', n > 0 ? `bg-lighten-${n}` : '']"></div></div>
<div class="flex gap-1"><div v-for="n in [0,10,20,30,40,50,60,70]" :key="n" :class="['flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-blue-500', n > 0 ? `bg-darken-${n}` : '']"></div></div>
<div class="flex gap-1"><div v-for="h in [0,45,90,135,180,225,270,315]" :key="h" :class="['flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-blue-500', `bg-hue-rotate-${h}`]"></div></div>
<div class="flex gap-1"><div v-for="s in [0,10,20,30,40,50,60,70]" :key="s" :class="['flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-blue-500', s > 0 ? `-bg-saturation-${s}` : '']"></div></div>
</div>
</MagazineSlide>

<MagazineSlide :index="2">
<div class="grid grid-cols-4 gap-2 w-full max-w-md">
<div v-for="sp in ['oklch','hsl','lab','lch','oklab','hwb','rgb','srgb','srgb-linear','display-p3','a98-rgb','prophoto-rgb','rec2020','xyz','xyz-d50','xyz-d65']" :key="sp" :class="['aspect-[4/3] rounded-lg bg-red-500 p-2 flex items-end', `bg-lighten-40/${sp}`]">
<span class="font-mono text-[9px] text-a11y-aa opacity-80">/{{ sp }}</span>
</div>
</div>
</MagazineSlide>

<MagazineSlide :index="3">
<div class="grid grid-cols-2 gap-3 w-full max-w-sm">
<button class="aspect-square rounded-2xl border-0 cursor-pointer bg-indigo-600 bg-ripple ripple-color-white/40 ripple-position-center ripple-duration-60 text-white text-xs font-mono p-3 text-left">center · white</button>
<button class="aspect-square rounded-2xl border-0 cursor-pointer bg-emerald-600 bg-ripple ripple-color-amber-300/60 ripple-position-top ripple-duration-30 text-white text-xs font-mono p-3 text-left">top · amber · fast</button>
<button class="aspect-square rounded-2xl border-0 cursor-pointer bg-rose-600 bg-ripple ripple-color-white/50 ripple-position-bottom ripple-duration-100 ripple-fade text-white text-xs font-mono p-3 text-left">bottom · fade</button>
<button class="aspect-square rounded-2xl border-0 cursor-pointer bg-sky-600 bg-ripple ripple-color-sky-200/70 ripple-position-left ripple-duration-40 text-white text-xs font-mono p-3 text-left">left · sky · 400ms</button>
</div>
</MagazineSlide>

<MagazineSlide :index="4">
<div class="grid grid-cols-2 gap-4 w-full max-w-lg">
<div class="space-y-2">
<div class="aspect-square rounded-xl bg-comic-blue-500 comic-dot-1 comic-gap-4 comic-bleed-0.5"></div>
<div class="aspect-square rounded-xl bg-comic-rose-500 comic-dot-1 comic-gap-4 comic-bleed-0.5"></div>
</div>
<div class="space-y-2">
<div class="aspect-square rounded-xl bg-pixel-blue-500 pixel-size-1 pixel-gap-1 pixel-bleed-0.5"></div>
<div class="aspect-square rounded-xl bg-pixel-rose-500 pixel-size-1 pixel-gap-1 pixel-bleed-0.5"></div>
</div>
</div>
</MagazineSlide>

<MagazineExperimentalBreak />

<MagazineSlide :index="5">
<div class="grid grid-cols-3 gap-3 w-full max-w-sm">
<div class="aspect-square rounded-3xl corner-squircle bg-sky-500"></div>
<div class="aspect-square rounded-3xl corner-bevel bg-violet-500"></div>
<div class="aspect-square rounded-3xl corner-tl-scoop corner-br-scoop bg-amber-500"></div>
<div class="aspect-square rounded-3xl corner-t-notch bg-rose-500"></div>
<div class="aspect-square rounded-3xl -corner-3 bg-emerald-500"></div>
<div class="aspect-square rounded-3xl corner-tl-bevel corner-tr-scoop corner-bl-notch corner-br-squircle bg-pink-500"></div>
</div>
</MagazineSlide>

<MagazineSlide :index="6">
<div class="grid grid-cols-2 gap-3 w-full max-w-sm">
<div class="rounded-xl bg-indigo-900 text-white wcag-badge p-5 min-h-25 flex items-end"><span class="text-sm font-bold">White on dark</span></div>
<div class="rounded-xl bg-blue-600 text-white wcag-badge p-5 min-h-25 flex items-end"><span class="text-sm font-bold">White on blue</span></div>
<div class="rounded-xl bg-orange-400 text-orange-900 wcag-badge p-5 min-h-25 flex items-end"><span class="text-sm font-bold">Borderline</span></div>
<div class="rounded-xl bg-yellow-200 text-yellow-400 wcag-badge p-5 min-h-25 flex items-end"><span class="text-sm font-bold">Poor contrast</span></div>
</div>
</MagazineSlide>

<MagazineFinale />
</MagazineRoot>
