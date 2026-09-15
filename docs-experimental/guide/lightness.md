---
title: Lightness
---

<!-- llm-context: --tw-jib--lightness(<color>, <number>, <space>) is the CSS @function form of the stable lightness utilities. It returns a <color>, so a derived shade can go anywhere a color goes: text-decoration-color, a box-shadow or text-shadow color, a caret, a column rule, or a gradient stop, none of which have a utility form. Positive amounts lighten toward white, negative darken toward black. The space argument is optional and defaults to oklch; seventeen spaces are available, and per-space functions such as --tw-jib--oklch-lightness can be called directly. Importing the functions entry also re-implements bg-lightness-*, bg-lighten-* and bg-darken-* on top of this function wherever CSS @function is supported. Chromium only. -->

# Lightness

`--tw-jib--lightness()` is the lightness transform as a callable value. It takes a color and returns a color, which is the whole point: a derived shade can go wherever a color goes, not only where a utility happens to exist.

The stable package covers seven surfaces with `bg-lightness-*` and its siblings. This page is about the properties it does not reach.

::: tip Chromium only
CSS `@function` ships in Chromium and nowhere else yet. Firefox and Safari drop any declaration that calls one, so every example on this page renders in Chromium and is blank elsewhere.

The utility form has no such limit. If you need a lightened background, border, text, fill, stroke, outline or accent color in every engine, reach for [the stable utilities](https://simonm-c.github.io/tw-jib-css/guide/lightness) instead.
:::

## Quick reference

| Call                                              | Returns                                             |
| ------------------------------------------------- | --------------------------------------------------- |
| `--tw-jib--lightness(<color>, <number>)`          | the color, lightened `n`% of the way to white       |
| `--tw-jib--lightness(<color>, -<number>)`         | the color, darkened `n`% of the way to black        |
| `--tw-jib--lightness(<color>, <number>, <space>)` | the same, computed in the named color space         |
| `--tw-jib--<space>-lightness(<color>, <number>)`  | the per-space function, called without the dispatch |

Amount runs 0–100 and is a percentage of the remaining distance, so `50` travels halfway to white and `100` arrives exactly. The space argument is optional and defaults to `oklch`, matching every other transform in the library.

## What the utility cannot reach

### Underline color

An underline that is a lighter or deeper tint of the text color it sits under, derived from the one token that sets both. `text-decoration-color` has no utility in this library.

::: warning A shorthand elsewhere can silently win
`text-decoration` is a shorthand, and it resets `text-decoration-color` to `currentColor`. A stylesheet
rule that sets `text-decoration: underline` on, say, every `a` will therefore throw away a derived
underline color, and if that rule is unlayered it beats a Tailwind utility whatever the specificity.

Set `text-decoration-line` rather than the shorthand in the rule that is winning, or raise the utility
into the same layer. The demos below are spans for exactly this reason: this site's own theme styles
`a` that way.
:::

<Example stretch>
  <div class="flex flex-col gap-4 p-6 text-lg font-semibold">
    <span class="text-teal-700 dark:text-teal-300 underline decoration-4 underline-offset-4 decoration-[--tw-jib--lightness(var(--color-teal-700),45)]">a tinted underline</span>
    <span class="text-teal-700 dark:text-teal-300 underline decoration-4 underline-offset-4 decoration-[--tw-jib--lightness(var(--color-teal-700),-25)]">a deepened underline</span>
  </div>
</Example>

```html
<a
  class="text-teal-700 underline decoration-4
         decoration-[--tw-jib--lightness(var(--color-teal-700),45)]"
>
  a tinted underline
</a>
```

### A ring cut from the same token

`shadow-*` takes a color from the theme, but not a color derived from the one already on the element. The function does, so the halo and the fill stay locked together.

<Example stretch>
  <div class="flex flex-wrap gap-8 p-8">
    <div class="size-24 rounded-2xl bg-teal-500 shadow-[0_0_0_5px_--tw-jib--lightness(var(--color-teal-500),40)]"></div>
    <div class="size-24 rounded-2xl bg-teal-500 shadow-[0_0_0_5px_--tw-jib--lightness(var(--color-teal-500),-30)]"></div>
    <div class="size-24 rounded-2xl bg-rose-500 shadow-[0_0_0_5px_--tw-jib--lightness(var(--color-rose-500),40)]"></div>
  </div>
</Example>

```html
<div
  class="bg-teal-500
         shadow-[0_0_0_5px_--tw-jib--lightness(var(--color-teal-500),40)]"
></div>
```

### Both ends of a gradient, from one stop

This is the case with no utility answer at all. A gradient needs two colors; here you supply one and compute the other, so recoloring the whole ramp means editing a single token.

<Example stretch>
  <div class="flex flex-col gap-3 p-6">
    <div class="h-12 rounded-lg bg-[linear-gradient(90deg,var(--color-teal-600),--tw-jib--lightness(var(--color-teal-600),60))]"></div>
    <div class="h-12 rounded-lg bg-[linear-gradient(90deg,var(--color-indigo-600),--tw-jib--lightness(var(--color-indigo-600),60))]"></div>
    <div class="h-12 rounded-lg bg-[linear-gradient(90deg,var(--color-amber-500),--tw-jib--lightness(var(--color-amber-500),-45))]"></div>
  </div>
</Example>

```html
<div
  class="bg-[linear-gradient(90deg,var(--color-teal-600),
             --tw-jib--lightness(var(--color-teal-600),60))]"
></div>
```

### Text shadow

<Example stretch>
  <div class="p-8 text-4xl font-black tracking-tight text-teal-400">
    <span class="[text-shadow:0_3px_0_--tw-jib--lightness(var(--color-teal-400),-45)]">pressed into the page</span>
  </div>
</Example>

```html
<span
  class="text-teal-400
         [text-shadow:0_3px_0_--tw-jib--lightness(var(--color-teal-400),-45)]"
>
  pressed into the page
</span>
```

### A caret and a column rule

Two more properties with no utility form, both taking the function the same way.

<Example stretch>
  <div class="flex flex-col gap-5 p-6">
    <input
      value="the caret is a darker teal"
      class="w-full rounded-lg border-2 border-teal-500 bg-transparent px-3 py-2 text-sm caret-[--tw-jib--lightness(var(--color-teal-500),-35)]"
    />
    <div class="columns-2 gap-6 text-sm [column-rule:2px_solid_--tw-jib--lightness(var(--color-teal-500),25)]">
      <span>A column rule takes a color like any border does, and the rule here is a lighter cut of the same token the text is set in, so the pair moves together.</span>
    </div>
  </div>
</Example>

```html
<input class="caret-[--tw-jib--lightness(var(--color-teal-500),-35)]" />

<div
  class="columns-2
         [column-rule:2px_solid_--tw-jib--lightness(var(--color-teal-500),25)]"
></div>
```

## Agreeing with the utility

Where a utility does exist, the two forms are the same arithmetic and land on the same color. The left half of each pair is the class, the right half the function.

<Example stretch>
  <div class="grid grid-cols-2 gap-px p-6">
    <div class="bg-teal-500 bg-lighten-35 p-5 text-center font-mono text-[11px] text-teal-950">bg-lighten-35</div>
    <div class="[background-color:--tw-jib--lightness(var(--color-teal-500),35)] p-5 text-center font-mono text-[11px] text-teal-950">lightness(…,35)</div>
    <div class="bg-teal-500 bg-darken-35 p-5 text-center font-mono text-[11px] text-teal-50">bg-darken-35</div>
    <div class="[background-color:--tw-jib--lightness(var(--color-teal-500),-35)] p-5 text-center font-mono text-[11px] text-teal-50">lightness(…,-35)</div>
  </div>
</Example>

Reach for the class when a utility covers the surface. It works in every engine, and reads better.

## Per-space variants

The third argument names the space the arithmetic happens in. Every space also exists as a function of its own, which skips the dispatch when you already know the space you want.

| Space family           | Functions                                                                                                                                                                                                                     |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Perceptual polar       | `--tw-jib--oklch-lightness`, `--tw-jib--lch-lightness`                                                                                                                                                                        |
| Perceptual rectangular | `--tw-jib--oklab-lightness`, `--tw-jib--lab-lightness`                                                                                                                                                                        |
| Legacy                 | `--tw-jib--hsl-lightness`, `--tw-jib--hwb-lightness`                                                                                                                                                                          |
| RGB family             | `--tw-jib--rgb-lightness`, `--tw-jib--srgb-lightness`, `--tw-jib--srgb-linear-lightness`, `--tw-jib--display-p3-lightness`, `--tw-jib--a98-rgb-lightness`, `--tw-jib--prophoto-rgb-lightness`, `--tw-jib--rec-2020-lightness` |
| Device-independent     | `--tw-jib--xyz-lightness`, `--tw-jib--xyz-d50-lightness`, `--tw-jib--xyz-d65-lightness`                                                                                                                                       |
| Blend                  | `--tw-jib--color-mix-lightness`                                                                                                                                                                                               |

An unrecognised space falls back to `oklch` rather than failing.

<Example stretch>
  <div class="grid grid-cols-4 gap-2 p-6">
    <div class="h-16 rounded-md [background-color:--tw-jib--lightness(var(--color-teal-600),40,oklch)] flex items-end p-1.5"><span class="font-mono text-[9px] text-teal-950">oklch</span></div>
    <div class="h-16 rounded-md [background-color:--tw-jib--lightness(var(--color-teal-600),40,hsl)] flex items-end p-1.5"><span class="font-mono text-[9px] text-teal-950">hsl</span></div>
    <div class="h-16 rounded-md [background-color:--tw-jib--lightness(var(--color-teal-600),40,lab)] flex items-end p-1.5"><span class="font-mono text-[9px] text-teal-950">lab</span></div>
    <div class="h-16 rounded-md [background-color:--tw-jib--lightness(var(--color-teal-600),40,rgb)] flex items-end p-1.5"><span class="font-mono text-[9px] text-teal-950">rgb</span></div>
  </div>
</Example>

The spaces render identically to the utility's `/<space>` modifier, because it is this function underneath. For the full per-space matrix and advice on which space to pick, see [Color spaces](https://simonm-c.github.io/tw-jib-css/guide/color-spaces) in the stable docs.

## The override

Importing this module also re-implements `bg-lightness-*`, `bg-lighten-*` and `bg-darken-*` on top of this function, on every surface, wherever `@function` is supported. Same class names, same output. See [the overrides](/guide/installation#the-function-overrides) for how that swap is gated and why it cannot affect an engine that lacks `@function`.

## Import

Order matters: source order is what carries an override, so the stable package comes first.

```css
@import 'tw-jib-css';
@import 'tw-jib-css-experimental/functions';
```
