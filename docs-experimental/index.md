---
layout: page
pageClass: home-landing
sidebar: false
aside: false
outline: false
title: Jibcss Experimental
---

<!-- llm-context: Landing page for tw-jib-css-experimental, a SEPARATE npm package from tw-jib-css with its own docs site. It contains two kinds of thing: ADDITIONS (corner-shape, interpolate-size, base-select picker, wcag-badge) which add utilities with no stable equivalent, and OVERRIDES (the CSS @function reimplementations of lightness, saturation, hue-rotate and text-a11y-*) which replace utilities the stable package already ships. Importing the package root gives you both. Browser support is limited, mostly Chromium-only. Prose version of this page: /tw-jib-css/experimental/overview -->

<ExpRoot>
<ExpHero />

<ExpTwoKinds />

<!-- 0 · functions, the reach-in. Static colours throughout: the point of this
     slide is where a function can be called, not that it can animate. -->
<ExpSlide :index="0">
<div class="grid grid-cols-2 gap-3 w-full max-w-md">

  <div class="aspect-4/3 rounded-xl p-4 flex flex-col justify-center bg-gray-950">
    <span class="font-mono text-[9px] opacity-60 text-white mb-2">text + text-decoration</span>
    <span class="font-mono text-base font-bold text-sky-400 underline decoration-wavy decoration-2 underline-offset-4 decoration-[--tw-jib--lightness(var(--color-sky-400),35)]">color: base<br>underline: +35</span>
  </div>

  <div class="aspect-4/3 rounded-xl p-3 flex items-center justify-center bg-gray-950">
    <div class="w-20 h-20 rounded-lg flex items-center justify-center font-mono text-[9px] font-bold text-white/80 bg-sky-400 shadow-[0_0_0_3px_--tw-jib--lightness(var(--color-sky-400),-30),0_16px_32px_-4px_--tw-jib--lightness(var(--color-sky-400),-40)]">bg: base<br>ring: −30</div>
  </div>

  <div class="aspect-4/3 rounded-xl p-3 flex items-center justify-center bg-gray-950">
    <svg viewBox="0 0 48 48" class="w-24 h-24">
      <circle cx="24" cy="24" r="16" stroke-width="4" class="fill-sky-400 stroke-[--tw-jib--lightness(var(--color-sky-400),-35)]" />
      <text x="24" y="22" text-anchor="middle" font-family="monospace" font-size="5" fill="white" opacity="0.85">fill: base</text>
      <text x="24" y="29" text-anchor="middle" font-family="monospace" font-size="5" fill="white" opacity="0.85">stroke: −35</text>
    </svg>
  </div>

  <div class="aspect-4/3 rounded-xl p-3 flex flex-col gap-2 bg-gray-950">
    <span class="font-mono text-[9px] opacity-60 text-white">linear-gradient stops</span>
    <div class="flex-1 rounded-md flex items-center justify-center font-mono text-[9px] font-bold text-white bg-[linear-gradient(135deg,var(--color-sky-400),--tw-jib--saturation(var(--color-sky-400),-60))]">base → sat(−60)</div>
  </div>

</div>
</ExpSlide>

<!-- 1 · accessible shade as a function, reaching properties the class cannot.

     violet-700 THROUGHOUT, never violet-600. AAA is physically unreachable from
     violet-600 — the solve clamps to white and delivers 5.895:1, which is the
     Max state, not a 7:1 state. This slide's every claim is the ratio, so the
     demo colour has to be one that can carry it. violet-700 renders 7.03.
     Check with a picker before changing any colour on this slide. -->
<ExpSlide :index="1">
<div class="grid grid-cols-2 gap-3 w-full max-w-md">

  <div class="aspect-4/3 rounded-xl p-3 flex flex-col justify-between bg-violet-700 text-[--tw-jib--accessible-shade(var(--color-violet-700),aaa,oklch)]">
    <span class="font-mono text-[9px] opacity-80">button border + text</span>
    <button class="rounded-md px-3 py-1.5 font-semibold text-xs cursor-pointer bg-transparent self-start border-2 border-[--tw-jib--accessible-shade(var(--color-violet-700),aaa,oklch)] text-[--tw-jib--accessible-shade(var(--color-violet-700),aaa,oklch)]">
      Continue →
    </button>
  </div>

  <div class="aspect-4/3 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <svg viewBox="0 0 48 48" class="w-20 h-20">
      <rect x="6" y="6" width="36" height="36" rx="6" class="fill-violet-700" />
      <path d="M16 25 L22 31 L34 17" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="stroke-[--tw-jib--accessible-shade(var(--color-violet-700),aaa,oklch)]" />
    </svg>
  </div>

  <!-- No text INSIDE this bar. The shade of violet-700 is a near-white, and the
       gradient's far stop IS that shade — so text painted in the shade colour
       ran to 1:1 against its own background at the right-hand end. The card
       demonstrates that a function can BE a gradient stop; the two endpoint
       swatches below say which colour is which without needing to overlay it. -->
  <div class="aspect-4/3 rounded-xl p-3 flex flex-col justify-between bg-gray-100 dark:bg-gray-900">
    <span class="font-mono text-[9px] opacity-80">the shade, as a gradient stop</span>
    <div class="space-y-1.5">
      <div class="rounded-md h-8 bg-[linear-gradient(90deg,var(--color-violet-700),--tw-jib--accessible-shade(var(--color-violet-700),aaa,oklch))]"></div>
      <div class="flex justify-between font-mono text-[8px] opacity-70">
        <span>violet-700</span>
        <span>shade(aaa)</span>
      </div>
    </div>
  </div>

  <div class="aspect-4/3 rounded-xl p-3 flex flex-col justify-between bg-gray-100 dark:bg-gray-900">
    <span class="font-mono text-[9px] opacity-80">solved, not searched</span>
    <div class="rounded-md h-10 flex items-center justify-center bg-violet-700">
      <span class="font-mono text-[10px] font-bold text-[--tw-jib--accessible-shade(var(--color-violet-700),aaa,oklch)]">solved for 7:1</span>
    </div>
  </div>

</div>
</ExpSlide>

<!-- 2 · corner shape.
     All SIX named shapes, because the stat on this slide says six. The demo used
     to show five plus a mixed pair, so a reader who counted the cells found a
     different number from the one printed beside them — and `square` is the cell
     that proves corner-shape is independent of the radius, since it carries the
     same rounded-[40%] as its neighbours and shows no curve at all.
     rounded-[40%], not [28%]: at 28% the round and squircle cells were near
     indistinguishable, which is the one comparison the headline rests on. The
     larger radius gives the superellipse exponent enough arc to separate them.
     Labels are CENTRED, not tucked into a corner: these shapes cut the corners
     away, so scoop and notch clipped their own captions when the label sat at
     bottom-left. The centre is the one region no corner-shape touches. -->
<ExpSlide :index="2">
<div class="grid grid-cols-4 gap-3 w-full max-w-md">
  <div class="aspect-square rounded-[40%] corner-round bg-violet-600 flex items-center justify-center"><span class="font-mono text-[9px] text-white/90">round</span></div>
  <div class="aspect-square rounded-[40%] corner-squircle bg-violet-600 flex items-center justify-center"><span class="font-mono text-[9px] text-white/90">squircle</span></div>
  <div class="aspect-square rounded-[40%] corner-bevel bg-violet-600 flex items-center justify-center"><span class="font-mono text-[9px] text-white/90">bevel</span></div>
  <div class="aspect-square rounded-[40%] corner-scoop bg-violet-600 flex items-center justify-center"><span class="font-mono text-[9px] text-white/90">scoop</span></div>
  <div class="aspect-square rounded-[40%] corner-notch bg-violet-600 flex items-center justify-center"><span class="font-mono text-[9px] text-white/90">notch</span></div>
  <div class="aspect-square rounded-[40%] corner-square bg-violet-600 flex items-center justify-center"><span class="font-mono text-[9px] text-white/90">square</span></div>
  <div class="aspect-square rounded-[40%] corner-4 bg-violet-600 flex items-center justify-center"><span class="font-mono text-[9px] text-white/90">ellipse-4</span></div>
  <div class="aspect-square rounded-[40%] corner-t-squircle corner-b-bevel bg-violet-600 flex items-center justify-center"><span class="font-mono text-[9px] text-white/90">mixed</span></div>
</div>
</ExpSlide>

<!-- 3 · interpolate size.

     Two panels running the identical 0 → auto keyframe animation, differing only
     in whether an ancestor carries interpolate-keywords. The top one eases, the
     bottom one snaps. Both run on a loop rather than on :hover, so the evidence
     is on screen for a reader who never touches the page — this is the lowest-
     support feature in the package and it previously showed nothing at rest. -->
<ExpSlide :index="3">
<div class="w-full max-w-sm space-y-4">

  <div class="interpolate-keywords space-y-1.5">
    <p class="flex items-center gap-2 m-0">
      <span class="rounded-full border border-emerald-500/40 bg-emerald-500/15 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300">with</span>
      <span class="font-mono text-[10px] opacity-60">parent has interpolate-keywords</span>
    </p>
    <div class="rounded-xl border border-violet-500/40 overflow-hidden bg-gray-900">
      <div class="w-full px-4 py-2.5 text-left text-sm font-semibold text-violet-200 bg-violet-500/10">
        Disclosure panel
      </div>
      <div class="landing-disclosure h-0 overflow-hidden">
        <p class="m-0 p-4 text-sm text-gray-300">Eases to its natural height. No measured pixel value anywhere, and no JavaScript.</p>
      </div>
    </div>
  </div>

  <div class="space-y-1.5">
    <p class="flex items-center gap-2 m-0">
      <span class="rounded-full border border-gray-500/40 bg-gray-500/15 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest opacity-70">without</span>
      <span class="font-mono text-[10px] opacity-60">same animation, no utility</span>
    </p>
    <div class="rounded-xl border border-gray-500/30 overflow-hidden bg-gray-900">
      <div class="w-full px-4 py-2.5 text-left text-sm font-semibold text-gray-400 bg-gray-500/10">
        Disclosure panel
      </div>
      <div class="landing-disclosure h-0 overflow-hidden">
        <p class="m-0 p-4 text-sm text-gray-400">Snaps. This is what CSS did before interpolate-size.</p>
      </div>
    </div>
  </div>

</div>
</ExpSlide>

<!-- 4 · base select picker -->
<ExpSlide :index="4">
<div class="w-full max-w-xs space-y-3">
  <!-- NO BLANK LINES IN THIS COMMENT. It is nested inside an HTML block, and a
       blank line ends that block — markdown then treats the remainder as an
       indented code block, the closing delimiter gets escaped along with it, and
       the page dies with "Unexpected EOF in comment". Nor can the delimiter
       itself be quoted in here, for the obvious reason.
       *:text-gray-200 colours the <option>s. They do NOT inherit the select's
       colour in base-select mode — the UA sheet sets option colour explicitly,
       so a dark picker background leaves black-on-dark text without this.
       The wrapper and the ▾ span are a fallback arrow for engines without
       base-select. Gecko drops its native dropdown indicator as soon as an
       author sets a background-color on a select — nothing to do with
       appearance-base-select, which is correctly ignored there — so this demo
       rendered as a plain box with no affordance in Firefox, on the slide whose
       whole subject is selects. supports-[appearance:base-select]:hidden takes
       the fallback back out wherever the real picker-icon is drawn, so the two
       never both appear. -->
  <div class="relative">
    <select class="appearance-base-select w-full px-4 py-3 rounded-xl border-2 border-violet-500/50 bg-gray-900 text-sm text-gray-200 picker:bg-gray-900 picker:border-2 picker:border-violet-500/40 picker:rounded-xl picker:shadow-lg picker:p-2 picker-icon:text-violet-400 picker-icon:transition-all open:picker-icon:rotate-180 checkmark:text-violet-400 *:text-gray-200 *:rounded-md *:px-2 *:py-1.5">
      <option>Apple</option>
      <option>Banana</option>
      <option>Cherry</option>
      <option>Date</option>
      <option>Elderberry</option>
    </select>
    <span aria-hidden="true" class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-violet-400 supports-[appearance:base-select]:hidden">▾</span>
  </div>
  <p class="font-mono text-[10px] opacity-50 m-0">a real select — open it</p>
</div>
</ExpSlide>

<ExpFinale />

<ExpCloser />
</ExpRoot>
