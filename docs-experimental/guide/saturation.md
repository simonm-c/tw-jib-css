---
title: Saturation
---

<!-- llm-context: --tw-jib--saturation(<color>, <number>, <space>) is the CSS @function form of the stable saturation utilities. It returns a <color>, so a saturated or muted derivative can go anywhere a color goes: a gradient stop, a box-shadow or text-shadow color, text-decoration-color, a caret, a column rule. Positive amounts saturate, negative amounts drain toward gray. The space argument is optional and defaults to oklch; seventeen spaces are available including color-mix, and per-space functions such as --tw-jib--oklch-saturation can be called directly. Importing the functions entry also re-implements bg-saturation-*, bg-saturate-* and bg-desaturate-* on top of this function wherever CSS @function is supported. Chromium only. -->

# Saturation

`--tw-jib--saturation()` is the saturation transform as a callable value. Positive amounts push a color further from gray, negative amounts drain it toward gray, and the result is a color you can put anywhere a color is accepted.

`bg-saturation-*` and its siblings already cover the seven utility surfaces. What follows is everything else.

::: tip Chromium only
CSS `@function` ships in Chromium and nowhere else yet, and an engine without it drops the whole declaration rather than falling back. Every example here is blank in Firefox and Safari.

For a muted background, border, text, fill, stroke, outline or accent in every engine, use [the stable utilities](https://simonm-c.github.io/tw-jib-css/guide/saturation).
:::

## Quick reference

| Call                                               | Returns                                             |
| -------------------------------------------------- | --------------------------------------------------- |
| `--tw-jib--saturation(<color>, <number>)`          | the color, saturated `n`% further from gray         |
| `--tw-jib--saturation(<color>, -<number>)`         | the color, drained `n`% of the way to gray          |
| `--tw-jib--saturation(<color>, <number>, <space>)` | the same, computed in the named color space         |
| `--tw-jib--<space>-saturation(<color>, <number>)`  | the per-space function, called without the dispatch |

Amount runs 0–100 as a percentage of the remaining distance, so `-100` is fully gray and keeps the original lightness. The space argument is optional and defaults to `oklch`.

## What the utility cannot reach

### A gradient that drains to gray

The clearest case for a function. A ramp from a color to its own desaturated self needs two colors that must stay related; supply one and compute the other and there is only ever one token to change.

<Example stretch>
  <div class="flex flex-col gap-3 p-6">
    <div class="h-12 rounded-lg bg-[linear-gradient(90deg,var(--color-teal-500),--tw-jib--saturation(var(--color-teal-500),-100))]"></div>
    <div class="h-12 rounded-lg bg-[linear-gradient(90deg,var(--color-rose-500),--tw-jib--saturation(var(--color-rose-500),-100))]"></div>
    <div class="h-12 rounded-lg bg-[linear-gradient(90deg,var(--color-amber-400),--tw-jib--saturation(var(--color-amber-400),-100))]"></div>
  </div>
</Example>

```html
<div
  class="bg-[linear-gradient(90deg,var(--color-teal-500),
             --tw-jib--saturation(var(--color-teal-500),-100))]"
></div>
```

Lightness is preserved across the ramp, so the bar reads as color draining out rather than as a fade to a lighter or darker gray.

### A muted halo

<Example stretch>
  <div class="flex flex-wrap gap-8 p-8">
    <div class="size-24 rounded-full bg-fuchsia-500 shadow-[0_0_0_6px_--tw-jib--saturation(var(--color-fuchsia-500),-70)]"></div>
    <div class="size-24 rounded-full bg-teal-500 shadow-[0_0_0_6px_--tw-jib--saturation(var(--color-teal-500),-70)]"></div>
    <div class="size-24 rounded-full bg-indigo-500 shadow-[0_0_0_6px_--tw-jib--saturation(var(--color-indigo-500),-70)]"></div>
  </div>
</Example>

```html
<div
  class="bg-fuchsia-500
         shadow-[0_0_0_6px_--tw-jib--saturation(var(--color-fuchsia-500),-70)]"
></div>
```

### An underline that comes alive on hover

Arbitrary values take Tailwind's variants like anything else, so the function can sit behind `hover:`. A rule elsewhere setting the `text-decoration` shorthand will discard the derived color; see [the note on lightness](/guide/lightness#what-the-utility-cannot-reach).

<Example stretch>
  <div class="flex flex-col gap-4 p-6 text-lg font-semibold">
    <span class="cursor-pointer text-teal-600 dark:text-teal-300 underline decoration-4 underline-offset-4 decoration-[--tw-jib--saturation(var(--color-teal-600),-90)] hover:decoration-[--tw-jib--saturation(var(--color-teal-600),40)] transition-all duration-300">hover to saturate the underline</span>
  </div>
</Example>

```html
<a
  class="text-teal-600 underline decoration-4 transition-all
         decoration-[--tw-jib--saturation(var(--color-teal-600),-90)]
         hover:decoration-[--tw-jib--saturation(var(--color-teal-600),40)]"
>
  hover to saturate the underline
</a>
```

### A caret and a column rule

<Example stretch>
  <div class="flex flex-col gap-5 p-6">
    <input
      value="a vivid caret in muted text"
      class="w-full rounded-lg border-2 [border-color:--tw-jib--saturation(var(--color-teal-500),-75)] bg-transparent px-3 py-2 text-sm caret-[--tw-jib--saturation(var(--color-teal-500),50)]"
    />
    <div class="columns-2 gap-6 text-sm [column-rule:2px_solid_--tw-jib--saturation(var(--color-teal-500),-60)]">
      <span>The rule between these columns is the same token the border above uses, drained most of the way to gray so it separates without competing.</span>
    </div>
  </div>
</Example>

```html
<input
  class="[border-color:--tw-jib--saturation(var(--color-teal-500),-75)]
         caret-[--tw-jib--saturation(var(--color-teal-500),50)]"
/>
```

## Agreeing with the utility

<Example stretch>
  <div class="grid grid-cols-2 gap-px p-6">
    <div class="bg-teal-500 bg-saturate-40 p-5 text-center font-mono text-[11px] text-teal-950">bg-saturate-40</div>
    <div class="[background-color:--tw-jib--saturation(var(--color-teal-500),40)] p-5 text-center font-mono text-[11px] text-teal-950">saturation(…,40)</div>
    <div class="bg-teal-500 bg-desaturate-70 p-5 text-center font-mono text-[11px] text-teal-950">bg-desaturate-70</div>
    <div class="[background-color:--tw-jib--saturation(var(--color-teal-500),-70)] p-5 text-center font-mono text-[11px] text-teal-950">saturation(…,-70)</div>
  </div>
</Example>

Where a class covers the surface, use the class. It reads better and it works everywhere.

## Per-space variants

| Space family           | Functions                                                                                                                                                                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Perceptual polar       | `--tw-jib--oklch-saturation`, `--tw-jib--lch-saturation`                                                                                                                                                                             |
| Perceptual rectangular | `--tw-jib--oklab-saturation`, `--tw-jib--lab-saturation`                                                                                                                                                                             |
| Legacy                 | `--tw-jib--hsl-saturation`, `--tw-jib--hwb-saturation`                                                                                                                                                                               |
| RGB family             | `--tw-jib--rgb-saturation`, `--tw-jib--srgb-saturation`, `--tw-jib--srgb-linear-saturation`, `--tw-jib--display-p3-saturation`, `--tw-jib--a98-rgb-saturation`, `--tw-jib--prophoto-rgb-saturation`, `--tw-jib--rec-2020-saturation` |
| Device-independent     | `--tw-jib--xyz-saturation`, `--tw-jib--xyz-d50-saturation`, `--tw-jib--xyz-d65-saturation`                                                                                                                                           |
| Blend                  | `--tw-jib--color-mix-saturation`                                                                                                                                                                                                     |

Saturation has a `color-mix` path because it has an endpoint to mix toward: gray. An unrecognised space falls back to `oklch`.

<Example stretch>
  <div class="grid grid-cols-4 gap-2 p-6">
    <div class="h-16 rounded-md [background-color:--tw-jib--saturation(var(--color-teal-500),-60,oklch)] flex items-end p-1.5"><span class="font-mono text-[9px] text-teal-950">oklch</span></div>
    <div class="h-16 rounded-md [background-color:--tw-jib--saturation(var(--color-teal-500),-60,hsl)] flex items-end p-1.5"><span class="font-mono text-[9px] text-teal-950">hsl</span></div>
    <div class="h-16 rounded-md [background-color:--tw-jib--saturation(var(--color-teal-500),-60,lab)] flex items-end p-1.5"><span class="font-mono text-[9px] text-teal-950">lab</span></div>
    <div class="h-16 rounded-md [background-color:--tw-jib--saturation(var(--color-teal-500),-60,color-mix)] flex items-end p-1.5"><span class="font-mono text-[9px] text-teal-950">color-mix</span></div>
  </div>
</Example>

For which space to reach for and the full per-space matrix, see [Color spaces](https://simonm-c.github.io/tw-jib-css/guide/color-spaces) in the stable docs.

## The override

This module re-implements `bg-saturation-*`, `bg-saturate-*` and `bg-desaturate-*` on top of this function, on every surface, wherever `@function` is supported. See [the overrides](/overview#the-function-overrides).

## Import

```css
@import 'tw-jib-css';
@import 'tw-jib-css-experimental/functions';
```
