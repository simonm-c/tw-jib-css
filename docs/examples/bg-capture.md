---
title: Background Longhand Test Fixtures
layout: page
---

# Background longhand test fixtures

Visual test page for Tailwind's `bg-cover`, `bg-center`, `bg-no-repeat`,
`bg-fixed`, `bg-origin-*` and `bg-none` against the composited `background`
shorthand.

The shorthand writes every background longhand at once, so a size, position,
repeat or attachment Tailwind set on its own would be reset to its initial
value. Each cell below carries a bordered, padded box so the origin and clip
boxes are distinguishable, and a tiled image whose natural size differs from the
box so `bg-cover` and `bg-contain` are observable.

## Size

<div class="grid grid-cols-4 gap-4 my-6">
  <div>
    <div data-test="size-default" class="bg-[url(/tw-jib-css/bg-capture-tile.svg)] h-24 border-4 border-transparent p-2"></div>
    <div class="text-xs font-mono text-center mt-1">default</div>
  </div>
  <div>
    <div data-test="size-cover" class="bg-[url(/tw-jib-css/bg-capture-tile.svg)] bg-cover h-24 border-4 border-transparent p-2"></div>
    <div class="text-xs font-mono text-center mt-1">bg-cover</div>
  </div>
  <div>
    <div data-test="size-contain" class="bg-[url(/tw-jib-css/bg-capture-tile.svg)] bg-contain h-24 border-4 border-transparent p-2"></div>
    <div class="text-xs font-mono text-center mt-1">bg-contain</div>
  </div>
  <div>
    <div data-test="size-arbitrary" class="bg-[url(/tw-jib-css/bg-capture-tile.svg)] bg-size-[30px_12px] h-24 border-4 border-transparent p-2"></div>
    <div class="text-xs font-mono text-center mt-1">bg-size-[30px_12px]</div>
  </div>
</div>

## Position and repeat

<div class="grid grid-cols-4 gap-4 my-6">
  <div>
    <div data-test="position-center" class="bg-[url(/tw-jib-css/bg-capture-tile.svg)] bg-center bg-no-repeat h-24 border-4 border-transparent p-2"></div>
    <div class="text-xs font-mono text-center mt-1">bg-center bg-no-repeat</div>
  </div>
  <div>
    <div data-test="position-corner" class="bg-[url(/tw-jib-css/bg-capture-tile.svg)] bg-bottom-right bg-no-repeat h-24 border-4 border-transparent p-2"></div>
    <div class="text-xs font-mono text-center mt-1">bg-bottom-right</div>
  </div>
  <div>
    <div data-test="position-arbitrary" class="bg-[url(/tw-jib-css/bg-capture-tile.svg)] bg-position-[10px_4px] bg-no-repeat h-24 border-4 border-transparent p-2"></div>
    <div class="text-xs font-mono text-center mt-1">bg-position-[10px_4px]</div>
  </div>
  <div>
    <div data-test="repeat-x" class="bg-[url(/tw-jib-css/bg-capture-tile.svg)] bg-repeat-x h-24 border-4 border-transparent p-2"></div>
    <div class="text-xs font-mono text-center mt-1">bg-repeat-x</div>
  </div>
</div>

## Attachment and origin

<div class="grid grid-cols-4 gap-4 my-6">
  <div>
    <div data-test="attachment-fixed" class="bg-linear-to-r from-fuchsia-500 to-cyan-500 bg-fixed h-24 border-4 border-transparent p-2"></div>
    <div class="text-xs font-mono text-center mt-1">bg-fixed</div>
  </div>
  <div>
    <div data-test="attachment-local" class="bg-linear-to-r from-fuchsia-500 to-cyan-500 bg-local h-24 border-4 border-transparent p-2"></div>
    <div class="text-xs font-mono text-center mt-1">bg-local</div>
  </div>
  <div>
    <div data-test="origin-content" class="bg-[url(/tw-jib-css/bg-capture-tile.svg)] bg-origin-content bg-no-repeat h-24 border-8 border-dashed border-slate-900/30 p-3"></div>
    <div class="text-xs font-mono text-center mt-1">bg-origin-content</div>
  </div>
  <div>
    <div data-test="origin-border" class="bg-[url(/tw-jib-css/bg-capture-tile.svg)] bg-origin-border bg-no-repeat h-24 border-8 border-dashed border-slate-900/30 p-3"></div>
    <div class="text-xs font-mono text-center mt-1">bg-origin-border</div>
  </div>
</div>

## The colour underlay

`bg-none` takes the image position for itself. The colour a `bg-*` utility set
stays, because it fills an underlay as well as the image slot, and a shorthand
that replaces the image position carries that underlay beneath every layer.

<div class="grid grid-cols-4 gap-4 my-6">
  <div>
    <div data-test="colour-plain" class="bg-red-500 h-24 border-4 border-transparent p-2"></div>
    <div class="text-xs font-mono text-center mt-1">bg-red-500</div>
  </div>
  <div>
    <div data-test="colour-none" class="bg-red-500 bg-none h-24 border-4 border-transparent p-2"></div>
    <div class="text-xs font-mono text-center mt-1">bg-red-500 bg-none</div>
  </div>
  <div>
    <div data-test="colour-under-gradient" class="bg-red-500 bg-linear-to-r from-transparent to-black/70 h-24 border-4 border-transparent p-2"></div>
    <div class="text-xs font-mono text-center mt-1">colour under a fade</div>
  </div>
  <div>
    <div data-test="colour-image-only" class="bg-[url(/tw-jib-css/bg-capture-tile.svg)] h-24 border-4 border-transparent p-2"></div>
    <div class="text-xs font-mono text-center mt-1">image, no colour</div>
  </div>
</div>

## Composition with the modules that own the shorthand

A texture supplies its own per-layer geometry, so `bg-cover` does not reach it.
A ripple and a border gradient keep the geometry their technique depends on
while the content layer still takes the utility.

<div class="grid grid-cols-4 gap-4 my-6">
  <div>
    <div data-test="texture-cover" class="bg-comic-red-500 comic-dot-2 comic-gap-4 bg-cover h-24 border-4 border-transparent p-2"></div>
    <div class="text-xs font-mono text-center mt-1">comic + bg-cover</div>
  </div>
  <div>
    <div data-test="ripple-cover" class="bg-[url(/tw-jib-css/bg-capture-tile.svg)] bg-cover bg-ripple h-24 border-4 border-transparent p-2"></div>
    <div class="text-xs font-mono text-center mt-1">ripple + bg-cover</div>
  </div>
  <div>
    <div data-test="border-cover" class="bg-[url(/tw-jib-css/bg-capture-tile.svg)] bg-cover border-8 border-linear-to-r border-from-emerald-400 border-to-yellow-300 h-24 p-2"></div>
    <div class="text-xs font-mono text-center mt-1">border gradient + bg-cover</div>
  </div>
  <div>
    <div data-test="border-origin" class="bg-[url(/tw-jib-css/bg-capture-tile.svg)] bg-origin-content border-8 border-linear-to-r border-from-emerald-400 border-to-yellow-300 h-24 p-3"></div>
    <div class="text-xs font-mono text-center mt-1">border gradient + bg-origin-content</div>
  </div>
</div>

## Grammar the slots cannot carry

`@property` has no `<position>` or `<bg-size>` component, so the slots accept a
narrower grammar than the CSS properties do. A value outside it is rejected at
computed-value time and the slot falls back to its initial value: the rest of
the stack still paints.

<div class="grid grid-cols-4 gap-4 my-6">
  <div>
    <div data-test="limit-position" class="bg-[url(/tw-jib-css/bg-capture-tile.svg)] bg-position-[left_10px_top_20px] bg-no-repeat h-24 border-4 border-transparent p-2"></div>
    <div class="text-xs font-mono text-center mt-1">bg-position-[left_10px_top_20px]</div>
  </div>
  <div>
    <div data-test="limit-size" class="bg-[url(/tw-jib-css/bg-capture-tile.svg)] bg-size-[auto_50%] bg-no-repeat h-24 border-4 border-transparent p-2"></div>
    <div class="text-xs font-mono text-center mt-1">bg-size-[auto_50%]</div>
  </div>
  <div>
    <div data-test="limit-bare-cover" class="bg-[url(/tw-jib-css/bg-capture-tile.svg)] bg-[cover] h-24 border-4 border-transparent p-2"></div>
    <div class="text-xs font-mono text-center mt-1">bg-[cover]</div>
  </div>
  <div>
    <div data-test="typed-arbitrary" class="bg-[url(/tw-jib-css/bg-capture-tile.svg)] bg-[size:cover] bg-[position:center] h-24 border-4 border-transparent p-2"></div>
    <div class="text-xs font-mono text-center mt-1">bg-[size:cover] bg-[position:center]</div>
  </div>
</div>

## Where the last layer stops

The last layer in the shorthand takes the border box, as a `background-color`
does in stock Tailwind, while the image layers stop at the padding box.
`bg-clip-padding` moves both.

<div class="grid grid-cols-3 gap-4 my-6">
  <div>
    <div data-test="underlay-border-box" class="bg-red-500 bg-ripple border-8 border-transparent h-24"></div>
    <div class="text-xs font-mono text-center mt-1">transparent border</div>
  </div>
  <div>
    <div data-test="underlay-clipped" class="bg-red-500 bg-ripple border-8 border-transparent bg-clip-padding h-24"></div>
    <div class="text-xs font-mono text-center mt-1">+ bg-clip-padding</div>
  </div>
  <div>
    <div data-test="underlay-behind-gradient" class="bg-red-500 border-8 border-linear-to-r border-from-lime-400 border-to-cyan-400 h-24"></div>
    <div class="text-xs font-mono text-center mt-1">under a border gradient</div>
  </div>
</div>

## One paint, not two

Each row is one composition, four times: `bg-white/50` and `bg-transparent`, each over a
black and a white backdrop. The gap between the two backdrops is how much of the backdrop
the element still lets through, which isolates coverage from whatever colour the layers
themselves contribute. `bg-white/50` must cut that gap in half exactly once.

<div class="grid gap-4 my-6">
  <div class="text-xs font-mono text-slate-400">no other background utility</div>
  <div class="grid grid-cols-4 gap-2">
    <div class="bg-black p-3">
      <div data-test="paint-alone-colour-black" class="h-16 border-4 border-transparent bg-white/50"></div>
    </div>
    <div class="bg-white p-3">
      <div data-test="paint-alone-colour-white" class="h-16 border-4 border-transparent bg-white/50"></div>
    </div>
    <div class="bg-black p-3">
      <div data-test="paint-alone-clear-black" class="h-16 border-4 border-transparent bg-transparent"></div>
    </div>
    <div class="bg-white p-3">
      <div data-test="paint-alone-clear-white" class="h-16 border-4 border-transparent bg-transparent"></div>
    </div>
  </div>
  <div class="text-xs font-mono text-slate-400">bg-ripple</div>
  <div class="grid grid-cols-4 gap-2">
    <div class="bg-black p-3">
      <div data-test="paint-ripple-colour-black" class="h-16 border-4 border-transparent bg-white/50 bg-ripple"></div>
    </div>
    <div class="bg-white p-3">
      <div data-test="paint-ripple-colour-white" class="h-16 border-4 border-transparent bg-white/50 bg-ripple"></div>
    </div>
    <div class="bg-black p-3">
      <div data-test="paint-ripple-clear-black" class="h-16 border-4 border-transparent bg-transparent bg-ripple"></div>
    </div>
    <div class="bg-white p-3">
      <div data-test="paint-ripple-clear-white" class="h-16 border-4 border-transparent bg-transparent bg-ripple"></div>
    </div>
  </div>
  <div class="text-xs font-mono text-slate-400">bg-comic-slate-500</div>
  <div class="grid grid-cols-4 gap-2">
    <div class="bg-black p-3">
      <div data-test="paint-comic-colour-black" class="h-16 border-4 border-transparent bg-white/50 bg-comic-slate-500"></div>
    </div>
    <div class="bg-white p-3">
      <div data-test="paint-comic-colour-white" class="h-16 border-4 border-transparent bg-white/50 bg-comic-slate-500"></div>
    </div>
    <div class="bg-black p-3">
      <div data-test="paint-comic-clear-black" class="h-16 border-4 border-transparent bg-transparent bg-comic-slate-500"></div>
    </div>
    <div class="bg-white p-3">
      <div data-test="paint-comic-clear-white" class="h-16 border-4 border-transparent bg-transparent bg-comic-slate-500"></div>
    </div>
  </div>
  <div class="text-xs font-mono text-slate-400">a border gradient with fully clear stops</div>
  <div class="grid grid-cols-4 gap-2">
    <div class="bg-black p-3">
      <div data-test="paint-gradient-clear-colour-black" class="h-16 border-4 bg-white/50 border-linear-to-r border-from-transparent border-to-transparent"></div>
    </div>
    <div class="bg-white p-3">
      <div data-test="paint-gradient-clear-colour-white" class="h-16 border-4 bg-white/50 border-linear-to-r border-from-transparent border-to-transparent"></div>
    </div>
    <div class="bg-black p-3">
      <div data-test="paint-gradient-clear-clear-black" class="h-16 border-4 bg-transparent border-linear-to-r border-from-transparent border-to-transparent"></div>
    </div>
    <div class="bg-white p-3">
      <div data-test="paint-gradient-clear-clear-white" class="h-16 border-4 bg-transparent border-linear-to-r border-from-transparent border-to-transparent"></div>
    </div>
  </div>
  <div class="text-xs font-mono text-slate-400">a border gradient with stops at /30</div>
  <div class="grid grid-cols-4 gap-2">
    <div class="bg-black p-3">
      <div data-test="paint-gradient-30-colour-black" class="h-16 border-4 bg-white/50 border-linear-to-r border-from-rose-500/30 border-to-cyan-500/30"></div>
    </div>
    <div class="bg-white p-3">
      <div data-test="paint-gradient-30-colour-white" class="h-16 border-4 bg-white/50 border-linear-to-r border-from-rose-500/30 border-to-cyan-500/30"></div>
    </div>
    <div class="bg-black p-3">
      <div data-test="paint-gradient-30-clear-black" class="h-16 border-4 bg-transparent border-linear-to-r border-from-rose-500/30 border-to-cyan-500/30"></div>
    </div>
    <div class="bg-white p-3">
      <div data-test="paint-gradient-30-clear-white" class="h-16 border-4 bg-transparent border-linear-to-r border-from-rose-500/30 border-to-cyan-500/30"></div>
    </div>
  </div>
  <div class="text-xs font-mono text-slate-400">a border gradient with opaque stops</div>
  <div class="grid grid-cols-4 gap-2">
    <div class="bg-black p-3">
      <div data-test="paint-gradient-opaque-colour-black" class="h-16 border-4 bg-white/50 border-linear-to-r border-from-rose-500 border-to-cyan-500"></div>
    </div>
    <div class="bg-white p-3">
      <div data-test="paint-gradient-opaque-colour-white" class="h-16 border-4 bg-white/50 border-linear-to-r border-from-rose-500 border-to-cyan-500"></div>
    </div>
    <div class="bg-black p-3">
      <div data-test="paint-gradient-opaque-clear-black" class="h-16 border-4 bg-transparent border-linear-to-r border-from-rose-500 border-to-cyan-500"></div>
    </div>
    <div class="bg-white p-3">
      <div data-test="paint-gradient-opaque-clear-white" class="h-16 border-4 bg-transparent border-linear-to-r border-from-rose-500 border-to-cyan-500"></div>
    </div>
  </div>
</div>
