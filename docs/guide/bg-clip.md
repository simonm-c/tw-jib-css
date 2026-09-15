---
title: Background clip
---

<!-- llm-context: bg-clip-* against composited backgrounds. Every background this library draws is one `background` shorthand holding several layers, and background-clip is a list, so Tailwind's own single-value bg-clip-* would be overwritten by the shorthand. Core re-declares bg-clip-border, bg-clip-padding, bg-clip-content and bg-clip-text as stacking companions that route the keyword through two registered slots the shorthand reads. Applies to comic, pixel, ripple, border gradients and Tailwind's own bg-linear-*, bg-radial-* and bg-conic-*, so bg-clip-text over a gradient behaves the way it reads. -->

# Background clip

Tailwind's own `bg-clip-*` utilities, kept working against the multi-layer backgrounds this
library draws. Nothing new to learn or import.

## Quick reference

<UtilityTable :rows="[
  { class: 'bg-clip-border', styles: 'background-clip: border-box (all layers)' },
  { class: 'bg-clip-padding', styles: 'background-clip: padding-box (all layers)' },
  { class: 'bg-clip-content', styles: 'background-clip: content-box (all layers)' },
  { class: 'bg-clip-text', styles: 'background-clip: text (all layers)' },
]" />

## Basic usage

### Clipping a texture to the text

Pair `bg-clip-text` with `text-transparent` to fill glyphs with the background. This works
the same over a halftone as it does over a flat colour.

<Example>
  <div class="flex flex-wrap gap-6">
    <div class="bg-comic-red-500 bg-clip-text text-transparent text-5xl font-extrabold tracking-tight">Halftone</div>
    <div class="bg-pixel-blue-500 bg-clip-text text-transparent text-5xl font-extrabold tracking-tight">Pixel</div>
  </div>
</Example>

### Standard Tailwind gradients

`bg-linear-*`, `bg-radial-*` and `bg-conic-*` are composited too, so a gradient joins the
layer list instead of replacing it. Gradient text behaves exactly as it does in stock
Tailwind:

<Example>
  <div class="flex flex-col gap-4">
    <div class="bg-linear-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-5xl font-extrabold tracking-tight">Linear</div>
    <div class="bg-conic from-amber-400 via-rose-500 to-amber-400 bg-clip-text text-transparent text-5xl font-extrabold tracking-tight">Conic</div>
  </div>
</Example>

### A gradient and a texture together

Because they share one list, a single clip utility governs both. There is no per-layer
clip to reason about.

<Example>
  <div class="bg-linear-to-r from-indigo-500 to-emerald-400 bg-comic-purple-500/40 bg-clip-text text-transparent text-5xl font-extrabold tracking-tight">
    Both at once
  </div>
</Example>

## Choosing the box

The three box keywords behave as they do in plain CSS. The background stops at the border,
padding or content edge. With a gradient border present, the border gradient follows the
same utility, so the two never disagree.

<Example stretch>
  <div class="flex flex-wrap gap-4">
    <div class="bg-comic-blue-500 bg-clip-border border-8 border-dashed border-slate-900/30 rounded-xl size-32 flex items-center justify-center font-mono text-xs">border</div>
    <div class="bg-comic-blue-500 bg-clip-padding border-8 border-dashed border-slate-900/30 rounded-xl size-32 flex items-center justify-center font-mono text-xs">padding</div>
    <div class="bg-comic-blue-500 bg-clip-content border-8 border-dashed border-slate-900/30 p-4 rounded-xl size-32 flex items-center justify-center font-mono text-xs">content</div>
  </div>
</Example>

## Applying conditionally

Prefix with a state or breakpoint variant like any other utility:

<Example>
  <div class="bg-linear-to-r from-sky-500 to-violet-500 text-transparent bg-clip-text hover:bg-clip-border hover:text-white transition-all duration-300 cursor-pointer text-4xl font-extrabold tracking-tight w-fit px-3 rounded-lg">
    Hover me
  </div>
</Example>

## Why the utilities are re-declared

Tailwind's `bg-clip-*` sets `background-clip` to a single keyword, which is right for the
single-layer background Tailwind draws.

Every background here is a **list**. A comic halftone is five radial gradients, a pixel
surface five repeating ones, a ripple three layers, and a gradient border paints into the
border box beside all of them. They arrive as one `background` shorthand, and
`background-clip` is a list property, so one keyword repeats across every layer.

Both declarations then exist on the element, and whichever the cascade puts last decides
the whole list. Which one that is varies by utility, so `bg-clip-text` on a halftone would
work or not depending on class order. Routing the keyword through slots the shorthand
reads is what removes that.

## How it works

Two registered custom properties carry the keyword, and the shorthand reads both:

1. `--tw-jib--background-clip` clips the pattern layers. It defaults to `padding-box`.
2. `--tw-jib--border-gradient-clip` clips the border-gradient layer. It defaults to
   `border-box`, because a border gradient has to reach the border edge to be visible.

The two defaults differ, which is why there are two slots. The utilities write to **both**,
so a class means the same thing whether or not a gradient border is present.

Both are registered with `syntax: "padding-box | border-box | content-box | text"` rather
than `*`. A `*` slot substitutes whatever token it holds, so one unparseable value would
reach the shorthand and invalidate it at computed-value time, taking every layer with it
rather than just the clip. Constrained, a bad value is rejected at assignment and the
initial value stands.

## Browser support

`background-clip` is universal. `background-clip: text` needs Chrome 120+, Safari 14+ or
Firefox 49+; older engines want the `-webkit-` prefix, which Tailwind emits for you.

## Import

No `bg-clip` module to take. These live in the shared core, so **every** entry carries
them, including a single-module one:

```css
@import 'tw-jib-css/comic';
```

<BaselineSupport :features="['background-clip-text', 'relative-color']" />
