<script setup lang="ts">
import SiteHero from '../../../widgets/site-hero/ui/SiteHero.vue';
import ContrastShowcase from '../../../widgets/contrast-showcase/ui/ContrastShowcase.vue';
import FeatureSlide from '../../../widgets/feature-slide/ui/FeatureSlide.vue';
import ModuleIndex from '../../../widgets/module-index/ui/ModuleIndex.vue';
</script>

<template>
  <div>
    <SiteHero />

    <ContrastShowcase />

    <FeatureSlide :index="0">
      <div class="grid grid-cols-2 gap-4 w-full max-w-md">
        <div
          class="aspect-square rounded-2xl border-4 border-linear-to-br border-from-violet-500 border-to-cyan-400"
        ></div>
        <div
          class="aspect-square rounded-2xl border-4 border-linear-to-br/longer border-from-rose-500 border-to-sky-400"
        ></div>
        <div
          class="aspect-square rounded-2xl border-4 border-conic-0 border-from-indigo-500 border-via-pink-500 border-to-indigo-500"
        ></div>
        <div
          class="aspect-square rounded-full border-4 border-conic-0 border-spin border-spin-duration-4 border-from-emerald-400 border-via-violet-500 border-to-emerald-400"
        ></div>
        <div
          class="col-span-2 rounded-full border-4 border-linear-to-r border-from-amber-300 border-via-cyan-300 border-to-lime-300 bg-linear-to-r from-indigo-700 to-fuchsia-700 px-5 py-3 font-mono text-[11px] text-white"
        >
          gradient border, gradient body, one element
        </div>
      </div>
    </FeatureSlide>

    <FeatureSlide :index="1">
      <div
        class="animate-[landing-base-color_18s_ease-in-out_infinite] motion-reduce:animate-none space-y-3 w-full max-w-sm"
      >
        <div class="flex gap-1">
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color)"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-lighten-10"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-lighten-20"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-lighten-30"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-lighten-40"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-lighten-50"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-lighten-60"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-lighten-70"
          ></div>
        </div>
        <div class="flex gap-1">
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color)"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-darken-10"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-darken-20"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-darken-30"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-darken-40"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-darken-50"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-darken-60"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-darken-70"
          ></div>
        </div>
        <div class="flex gap-1">
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color)"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-hue-rotate-45"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-hue-rotate-90"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-hue-rotate-135"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-hue-rotate-180"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-hue-rotate-225"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-hue-rotate-270"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) bg-hue-rotate-315"
          ></div>
        </div>
        <div class="flex gap-1">
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color)"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) -bg-saturation-10"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) -bg-saturation-20"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) -bg-saturation-30"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) -bg-saturation-40"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) -bg-saturation-50"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) -bg-saturation-60"
          ></div>
          <div
            class="flex-1 h-10 first:rounded-l-lg last:rounded-r-lg bg-(color:--landing-base-color) -bg-saturation-70"
          ></div>
        </div>
      </div>
    </FeatureSlide>

    <FeatureSlide :index="2">
      <div
        class="animate-[landing-base-color_18s_ease-in-out_infinite] motion-reduce:animate-none grid grid-cols-4 gap-2 w-full max-w-md"
      >
        <div
          class="aspect-[4/3] rounded-lg bg-(color:--landing-base-color) p-2 flex items-end bg-lighten-40/oklch"
        >
          <span class="font-mono text-[9px] text-contrast-aa opacity-80">/oklch</span>
        </div>
        <div
          class="aspect-[4/3] rounded-lg bg-(color:--landing-base-color) p-2 flex items-end bg-lighten-40/hsl"
        >
          <span class="font-mono text-[9px] text-contrast-aa opacity-80">/hsl</span>
        </div>
        <div
          class="aspect-[4/3] rounded-lg bg-(color:--landing-base-color) p-2 flex items-end bg-lighten-40/lab"
        >
          <span class="font-mono text-[9px] text-contrast-aa opacity-80">/lab</span>
        </div>
        <div
          class="aspect-[4/3] rounded-lg bg-(color:--landing-base-color) p-2 flex items-end bg-lighten-40/lch"
        >
          <span class="font-mono text-[9px] text-contrast-aa opacity-80">/lch</span>
        </div>
        <div
          class="aspect-[4/3] rounded-lg bg-(color:--landing-base-color) p-2 flex items-end bg-lighten-40/oklab"
        >
          <span class="font-mono text-[9px] text-contrast-aa opacity-80">/oklab</span>
        </div>
        <div
          class="aspect-[4/3] rounded-lg bg-(color:--landing-base-color) p-2 flex items-end bg-lighten-40/hwb"
        >
          <span class="font-mono text-[9px] text-contrast-aa opacity-80">/hwb</span>
        </div>
        <div
          class="aspect-[4/3] rounded-lg bg-(color:--landing-base-color) p-2 flex items-end bg-lighten-40/rgb"
        >
          <span class="font-mono text-[9px] text-contrast-aa opacity-80">/rgb</span>
        </div>
        <div
          class="aspect-[4/3] rounded-lg bg-(color:--landing-base-color) p-2 flex items-end bg-lighten-40/srgb"
        >
          <span class="font-mono text-[9px] text-contrast-aa opacity-80">/srgb</span>
        </div>
        <div
          class="aspect-[4/3] rounded-lg bg-(color:--landing-base-color) p-2 flex items-end bg-lighten-40/srgb-linear"
        >
          <span class="font-mono text-[9px] text-contrast-aa opacity-80">/srgb-linear</span>
        </div>
        <div
          class="aspect-[4/3] rounded-lg bg-(color:--landing-base-color) p-2 flex items-end bg-lighten-40/display-p3"
        >
          <span class="font-mono text-[9px] text-contrast-aa opacity-80">/display-p3</span>
        </div>
        <div
          class="aspect-[4/3] rounded-lg bg-(color:--landing-base-color) p-2 flex items-end bg-lighten-40/a98-rgb"
        >
          <span class="font-mono text-[9px] text-contrast-aa opacity-80">/a98-rgb</span>
        </div>
        <div
          class="aspect-[4/3] rounded-lg bg-(color:--landing-base-color) p-2 flex items-end bg-lighten-40/prophoto-rgb"
        >
          <span class="font-mono text-[9px] text-contrast-aa opacity-80">/prophoto-rgb</span>
        </div>
        <div
          class="aspect-[4/3] rounded-lg bg-(color:--landing-base-color) p-2 flex items-end bg-lighten-40/rec2020"
        >
          <span class="font-mono text-[9px] text-contrast-aa opacity-80">/rec2020</span>
        </div>
        <div
          class="aspect-[4/3] rounded-lg bg-(color:--landing-base-color) p-2 flex items-end bg-lighten-40/xyz"
        >
          <span class="font-mono text-[9px] text-contrast-aa opacity-80">/xyz</span>
        </div>
        <div
          class="aspect-[4/3] rounded-lg bg-(color:--landing-base-color) p-2 flex items-end bg-lighten-40/xyz-d50"
        >
          <span class="font-mono text-[9px] text-contrast-aa opacity-80">/xyz-d50</span>
        </div>
        <div
          class="aspect-[4/3] rounded-lg bg-(color:--landing-base-color) p-2 flex items-end bg-lighten-40/xyz-d65"
        >
          <span class="font-mono text-[9px] text-contrast-aa opacity-80">/xyz-d65</span>
        </div>
      </div>
    </FeatureSlide>

    <FeatureSlide :index="3">
      <div
        class="animate-[landing-tex-color_18s_ease-in-out_infinite] motion-reduce:animate-none w-full max-w-md space-y-3"
      >
        <div class="flex items-center gap-3">
          <div class="h-9 w-9 shrink-0 rounded-lg bg-(color:--landing-tex-color)"></div>
          <span class="font-mono text-[10px] opacity-60">the source color, cycling</span>
        </div>
        <div class="grid grid-cols-2 gap-x-3 gap-y-4">
          <div class="space-y-1.5">
            <div
              class="aspect-[3/2] rounded-lg bg-comic-(color:--landing-tex-color) comic-gap-1 comic-bleed-2"
            ></div>
            <p class="m-0 font-mono text-[9px] opacity-60">comic-gap-1 comic-bleed-2</p>
          </div>
          <div class="space-y-1.5">
            <div
              class="aspect-[3/2] rounded-lg bg-pixel-(color:--landing-tex-color) pixel-gap-0 pixel-bloom-2"
            ></div>
            <p class="m-0 font-mono text-[9px] opacity-60">pixel-gap-0 pixel-bloom-2</p>
          </div>
          <div class="space-y-1.5">
            <div class="aspect-[3/2] rounded-lg bg-comic-(color:--landing-tex-color)"></div>
            <p class="m-0 font-mono text-[9px] opacity-60">no modifiers</p>
          </div>
          <div class="space-y-1.5">
            <div class="aspect-[3/2] rounded-lg bg-pixel-(color:--landing-tex-color)"></div>
            <p class="m-0 font-mono text-[9px] opacity-60">no modifiers</p>
          </div>
          <div class="space-y-1.5">
            <div
              class="aspect-[3/2] rounded-lg bg-comic-(color:--landing-tex-color) comic-dot-1 comic-gap-10 comic-bleed-0"
            ></div>
            <p class="m-0 font-mono text-[9px] opacity-60">
              comic-dot-1 comic-gap-10 comic-bleed-0
            </p>
          </div>
          <div class="space-y-1.5">
            <div
              class="aspect-[3/2] rounded-lg bg-pixel-(color:--landing-tex-color) pixel-size-6 pixel-bloom-8"
            ></div>
            <p class="m-0 font-mono text-[9px] opacity-60">pixel-size-6 pixel-bloom-8</p>
          </div>
        </div>
      </div>
    </FeatureSlide>

    <FeatureSlide :index="4">
      <div class="grid grid-cols-2 gap-3 w-full max-w-sm">
        <button
          class="aspect-square rounded-2xl border-0 cursor-pointer bg-indigo-600 bg-ripple ripple-color-white/40 ripple-position-center ripple-duration-60 text-white text-xs font-mono p-3 text-left"
        >
          ripple-position-center<br />ripple-duration-60
        </button>
        <button
          class="aspect-square rounded-2xl border-0 cursor-pointer bg-emerald-600 bg-ripple ripple-color-amber-300/60 ripple-position-top ripple-duration-30 text-white text-xs font-mono p-3 text-left"
        >
          ripple-position-top<br />ripple-duration-30
        </button>
        <button
          class="aspect-square rounded-2xl border-0 cursor-pointer bg-rose-600 bg-ripple ripple-color-white/50 ripple-position-bottom ripple-duration-100 ripple-fade text-white text-xs font-mono p-3 text-left"
        >
          ripple-position-bottom<br />ripple-fade
        </button>
        <button
          class="aspect-square rounded-2xl border-0 cursor-pointer bg-sky-600 bg-ripple ripple-color-sky-200/70 ripple-position-left ripple-duration-40 text-white text-xs font-mono p-3 text-left"
        >
          ripple-position-left<br />ripple-duration-40
        </button>
      </div>
    </FeatureSlide>

    <ModuleIndex />
  </div>
</template>
