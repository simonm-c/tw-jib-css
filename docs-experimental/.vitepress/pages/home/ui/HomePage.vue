<script setup lang="ts">
import SiteHero from '../../../widgets/site-hero/ui/SiteHero.vue';
import FeatureSlide from '../../../widgets/feature-slide/ui/FeatureSlide.vue';
import WcagBadgeShowcase from '../../../widgets/wcag-badge-showcase/ui/WcagBadgeShowcase.vue';
import PageIndex from '../../../widgets/page-index/ui/PageIndex.vue';
</script>

<template>
  <div>
    <SiteHero />

    <!-- 0 · functions -->
    <FeatureSlide :index="0">
      <div class="grid grid-cols-2 gap-3 w-full max-w-md">
        <div class="aspect-4/3 rounded-xl p-4 flex flex-col justify-center bg-gray-950">
          <span class="font-mono text-[9px] opacity-60 text-white mb-2"
            >text + text-decoration</span
          >
          <span
            class="font-mono text-base font-bold text-sky-400 underline decoration-wavy decoration-2 underline-offset-4 decoration-[--jib-lightness(var(--color-sky-400),35)]"
            >color: base<br />underline: +35</span
          >
        </div>

        <div class="aspect-4/3 rounded-xl p-3 flex items-center justify-center bg-gray-950">
          <div
            class="w-20 h-20 rounded-lg flex items-center justify-center font-mono text-[9px] font-bold text-white/80 bg-sky-400 shadow-[0_0_0_3px_--jib-lightness(var(--color-sky-400),-30),0_16px_32px_-4px_--jib-lightness(var(--color-sky-400),-40)]"
          >
            bg: base<br />ring: −30
          </div>
        </div>

        <div class="aspect-4/3 rounded-xl p-3 flex items-center justify-center bg-gray-950">
          <svg viewBox="0 0 48 48" class="w-24 h-24">
            <circle
              cx="24"
              cy="24"
              r="16"
              stroke-width="4"
              class="fill-sky-400 stroke-[--jib-lightness(var(--color-sky-400),-35)]"
            />
            <text
              x="24"
              y="22"
              text-anchor="middle"
              font-family="monospace"
              font-size="5"
              fill="white"
              opacity="0.85"
            >
              fill: base
            </text>
            <text
              x="24"
              y="29"
              text-anchor="middle"
              font-family="monospace"
              font-size="5"
              fill="white"
              opacity="0.85"
            >
              stroke: −35
            </text>
          </svg>
        </div>

        <div class="aspect-4/3 rounded-xl p-3 flex flex-col gap-2 bg-gray-950">
          <span class="font-mono text-[9px] opacity-60 text-white">linear-gradient stops</span>
          <div
            class="flex-1 rounded-md flex items-center justify-center font-mono text-[9px] font-bold text-white bg-[linear-gradient(135deg,var(--color-sky-400),--jib-saturation(var(--color-sky-400),-60))]"
          >
            base → sat(−60)
          </div>
        </div>
      </div>
    </FeatureSlide>

    <!-- 1 · automatic contrast as a function, reaching properties the class cannot.
         AAA is unreachable from teal-600: the solve clamps to black at 5.724:1, the Max
         state. teal-500 renders 7.151. -->
    <FeatureSlide :index="1">
      <div class="grid grid-cols-2 gap-3 w-full max-w-md">
        <div
          class="aspect-4/3 rounded-xl p-3 flex flex-col justify-between bg-teal-500 text-[--jib-auto-contrast(var(--color-teal-500),aaa,oklch)]"
        >
          <span class="font-mono text-[9px] opacity-80">button border + text</span>
          <button
            class="rounded-md px-3 py-1.5 font-semibold text-xs cursor-pointer bg-transparent self-start border-2 border-[--jib-auto-contrast(var(--color-teal-500),aaa,oklch)] text-[--jib-auto-contrast(var(--color-teal-500),aaa,oklch)]"
          >
            Continue →
          </button>
        </div>

        <div
          class="aspect-4/3 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-900"
        >
          <svg viewBox="0 0 48 48" class="w-20 h-20">
            <rect x="6" y="6" width="36" height="36" rx="6" class="fill-teal-500" />
            <path
              d="M16 25 L22 31 L34 17"
              fill="none"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="stroke-[--jib-auto-contrast(var(--color-teal-500),aaa,oklch)]"
            />
          </svg>
        </div>

        <!-- The gradient's far stop is teal-500's shade, a near-black, so text painted in
             the shade colour runs to 1:1 against its own background at the right-hand end. -->
        <div
          class="aspect-4/3 rounded-xl p-3 flex flex-col justify-between bg-gray-100 dark:bg-gray-900"
        >
          <span class="font-mono text-[9px] opacity-80">the shade, as a gradient stop</span>
          <div class="space-y-1.5">
            <div
              class="rounded-md h-8 bg-[linear-gradient(90deg,var(--color-teal-500),--jib-auto-contrast(var(--color-teal-500),aaa,oklch))]"
            ></div>
            <div class="flex justify-between font-mono text-[8px] opacity-70">
              <span>teal-500</span>
              <span>shade(aaa)</span>
            </div>
          </div>
        </div>

        <div
          class="aspect-4/3 rounded-xl p-3 flex flex-col justify-between bg-gray-100 dark:bg-gray-900"
        >
          <span class="font-mono text-[9px] opacity-80">solved, not searched</span>
          <div class="rounded-md h-10 flex items-center justify-center bg-teal-500">
            <span
              class="font-mono text-[10px] font-bold text-[--jib-auto-contrast(var(--color-teal-500),aaa,oklch)]"
              >solved for 7:1</span
            >
          </div>
        </div>
      </div>
    </FeatureSlide>

    <!-- 2 · corner shape.
         - square carries the same rounded-[40%] as its neighbours and shows no curve,
           so corner-shape is independent of the radius.
         - rounded-[40%], not [28%]: at 28% the round and squircle cells are near
           indistinguishable.
         - Labels centred: scoop and notch clip a caption placed in a corner. -->
    <FeatureSlide :index="2">
      <div class="grid grid-cols-4 gap-3 w-full max-w-md">
        <div
          class="aspect-square rounded-[40%] corner-round bg-teal-600 flex items-center justify-center"
        >
          <span class="font-mono text-[9px] text-white/90">round</span>
        </div>
        <div
          class="aspect-square rounded-[40%] corner-squircle bg-teal-600 flex items-center justify-center"
        >
          <span class="font-mono text-[9px] text-white/90">squircle</span>
        </div>
        <div
          class="aspect-square rounded-[40%] corner-bevel bg-teal-600 flex items-center justify-center"
        >
          <span class="font-mono text-[9px] text-white/90">bevel</span>
        </div>
        <div
          class="aspect-square rounded-[40%] corner-scoop bg-teal-600 flex items-center justify-center"
        >
          <span class="font-mono text-[9px] text-white/90">scoop</span>
        </div>
        <div
          class="aspect-square rounded-[40%] corner-notch bg-teal-600 flex items-center justify-center"
        >
          <span class="font-mono text-[9px] text-white/90">notch</span>
        </div>
        <div
          class="aspect-square rounded-[40%] corner-square bg-teal-600 flex items-center justify-center"
        >
          <span class="font-mono text-[9px] text-white/90">square</span>
        </div>
        <div
          class="aspect-square rounded-[40%] corner-4 bg-teal-600 flex items-center justify-center"
        >
          <span class="font-mono text-[9px] text-white/90">ellipse-4</span>
        </div>
        <div
          class="aspect-square rounded-[40%] corner-t-squircle corner-b-bevel bg-teal-600 flex items-center justify-center"
        >
          <span class="font-mono text-[9px] text-white/90">mixed</span>
        </div>
      </div>
    </FeatureSlide>

    <!-- 3 · interpolate size.
         Rows aligned to their own start, so a panel can only grow downward into empty
         space; otherwise the snapping panel resizes the block and shunts the eased panel
         mid-flight, reading as a stutter in the panel that is easing correctly. -->
    <FeatureSlide :index="3">
      <div class="grid w-full max-w-2xl grid-cols-2 items-start gap-x-4 gap-y-1.5 self-start">
        <p class="flex items-center gap-2 m-0">
          <span
            class="rounded-full border border-emerald-500/40 bg-emerald-500/15 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300"
            >with</span
          >
          <span class="font-mono text-[10px] opacity-60">parent has interpolate-keywords</span>
        </p>
        <p class="flex items-center gap-2 m-0">
          <span
            class="rounded-full border border-gray-500/40 bg-gray-500/15 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest opacity-70"
            >without</span
          >
          <span class="font-mono text-[10px] opacity-60">same animation, no utility</span>
        </p>
        <div
          class="interpolate-keywords rounded-xl border border-teal-500/40 overflow-hidden bg-gray-900"
        >
          <div
            class="w-full px-4 py-2.5 text-left text-sm font-semibold text-teal-200 bg-teal-500/10"
          >
            Disclosure panel
          </div>
          <div
            class="animate-[landing-disclosure_var(--landing-disclosure-cycle)_ease-in-out_infinite] motion-reduce:animate-none h-0 motion-reduce:h-auto overflow-hidden"
          >
            <p class="m-0 p-4 text-sm text-gray-300">
              Eases to its natural height. No measured pixel value anywhere, and no JavaScript.
            </p>
          </div>
        </div>
        <div class="rounded-xl border border-gray-500/30 overflow-hidden bg-gray-900">
          <div
            class="w-full px-4 py-2.5 text-left text-sm font-semibold text-gray-400 bg-gray-500/10"
          >
            Disclosure panel
          </div>
          <!-- The delay in the shorthand holds this panel back so it pops as the panel beside
               it finishes easing, never during. -->
          <div
            class="animate-[landing-disclosure_var(--landing-disclosure-cycle)_ease-in-out_calc(var(--landing-disclosure-cycle)/8)_infinite] motion-reduce:animate-none h-0 motion-reduce:h-auto overflow-hidden"
          >
            <p class="m-0 p-4 text-sm text-gray-400">
              Snaps. This is what CSS did before interpolate-size.
            </p>
          </div>
        </div>
      </div>
    </FeatureSlide>

    <!-- 4 · base select picker -->
    <FeatureSlide :index="4">
      <div class="w-full max-w-xs space-y-3">
        <!-- - *:text-gray-200 colours the <option>s: they do not inherit the select's colour
               in base-select mode, because the UA sheet sets option colour explicitly.
             - Gecko drops its native dropdown indicator once an author sets a
               background-color on a select, leaving no affordance, hence the fallback arrow.
             - supports-[appearance:base-select]:hidden removes that fallback wherever the
               real picker-icon draws. -->
        <div class="relative">
          <select
            class="appearance-base-select w-full px-4 py-3 rounded-xl border-2 border-teal-500/50 bg-gray-900 text-sm text-gray-200 picker:bg-gray-900 picker:border-2 picker:border-teal-500/40 picker:rounded-xl picker:shadow-lg picker:p-2 picker-icon:text-teal-400 picker-icon:transition-all open:picker-icon:rotate-180 checkmark:text-teal-400 *:text-gray-200 *:rounded-md *:px-2 *:py-1.5"
          >
            <option>Apple</option>
            <option>Banana</option>
            <option>Cherry</option>
            <option>Date</option>
            <option>Elderberry</option>
          </select>
          <span
            aria-hidden="true"
            class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-teal-400 supports-[appearance:base-select]:hidden"
            >▾</span
          >
        </div>
        <p class="font-mono text-[10px] opacity-50 m-0">a real select, open it</p>
      </div>
    </FeatureSlide>

    <WcagBadgeShowcase />

    <PageIndex />
  </div>
</template>
