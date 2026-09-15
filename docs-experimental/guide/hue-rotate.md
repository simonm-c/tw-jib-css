---
title: Hue rotate
---

<!-- llm-context: --tw-jib--hue-rotate(<color>, <number>, <space>) is the CSS @function form of the stable hue-rotate utilities. It returns a <color>, so a rotated hue can go anywhere a color goes, and because it is a value rather than a class you can put several rotations of one token in a single declaration: a multi-stop gradient, a layered shadow, a text-shadow. The amount is in degrees. The space argument is optional and defaults to oklch; sixteen spaces are available and there is deliberately no color-mix path, because a rotation has no endpoint to mix toward. Importing the functions entry also re-implements bg-hue-rotate-* on top of this function wherever CSS @function is supported. Chromium only. -->

# Hue rotate

`--tw-jib--hue-rotate()` walks a color around the wheel by a number of degrees and returns the result. Because it returns a value rather than styling an element, you can call it several times in one declaration and build a whole scheme out of a single token.

::: tip Chromium only
CSS `@function` ships in Chromium and nowhere else yet. An engine without it drops the declaration outright, so every example here is blank in Firefox and Safari.

For a rotated background, border, text, fill, stroke, outline or accent in every engine, use [the stable utilities](https://simonm-c.github.io/tw-jib-css/guide/hue-rotate).
:::

## Quick reference

| Call                                                | Returns                                             |
| --------------------------------------------------- | --------------------------------------------------- |
| `--tw-jib--hue-rotate(<color>, <degrees>)`          | the color, hue advanced by `deg` degrees            |
| `--tw-jib--hue-rotate(<color>, -<degrees>)`         | the color, hue retarded by `deg` degrees            |
| `--tw-jib--hue-rotate(<color>, <degrees>, <space>)` | the same, computed in the named color space         |
| `--tw-jib--<space>-hue-rotate(<color>, <degrees>)`  | the per-space function, called without the dispatch |

The amount is a bare number of degrees, and it wraps, so `370` and `10` agree. Lightness and chroma are left alone. The space argument is optional and defaults to `oklch`.

## What the utility cannot reach

### A whole scheme from one token

This is the case the class form cannot express at all. Each stop is the same token at a different rotation, so the entire ramp is defined by one color and a set of angles.

<Example stretch>
  <div class="flex flex-col gap-3 p-6">
    <div class="h-14 rounded-lg bg-[linear-gradient(90deg,var(--color-teal-500),--tw-jib--hue-rotate(var(--color-teal-500),60),--tw-jib--hue-rotate(var(--color-teal-500),120),--tw-jib--hue-rotate(var(--color-teal-500),180))]"></div>
    <div class="h-14 rounded-lg bg-[conic-gradient(var(--color-teal-500),--tw-jib--hue-rotate(var(--color-teal-500),90),--tw-jib--hue-rotate(var(--color-teal-500),180),--tw-jib--hue-rotate(var(--color-teal-500),270),var(--color-teal-500))]"></div>
  </div>
</Example>

```html
<div
  class="bg-[linear-gradient(90deg,var(--color-teal-500),
             --tw-jib--hue-rotate(var(--color-teal-500),60),
             --tw-jib--hue-rotate(var(--color-teal-500),120),
             --tw-jib--hue-rotate(var(--color-teal-500),180))]"
></div>
```

Swap `--color-teal-500` for any other token and the whole ramp re-derives, still evenly spaced.

### Layered shadows, each a further step round

<Example stretch>
  <div class="flex justify-center p-12">
    <div class="size-24 rounded-2xl bg-teal-500 shadow-[8px_0_0_--tw-jib--hue-rotate(var(--color-teal-500),40),16px_0_0_--tw-jib--hue-rotate(var(--color-teal-500),80),24px_0_0_--tw-jib--hue-rotate(var(--color-teal-500),120)]"></div>
  </div>
</Example>

```html
<div
  class="bg-teal-500
         shadow-[8px_0_0_--tw-jib--hue-rotate(var(--color-teal-500),40),
                 16px_0_0_--tw-jib--hue-rotate(var(--color-teal-500),80),
                 24px_0_0_--tw-jib--hue-rotate(var(--color-teal-500),120)]"
></div>
```

### Split text shadows

Two rotations in opposite directions, offset either side of the glyphs.

<Example stretch>
  <div class="p-10 text-center text-4xl font-black tracking-tight text-teal-500">
    <span class="[text-shadow:-2px_0_0_--tw-jib--hue-rotate(var(--color-teal-500),-70),2px_0_0_--tw-jib--hue-rotate(var(--color-teal-500),70)]">out of register</span>
  </div>
</Example>

```html
<span
  class="text-teal-500
         [text-shadow:-2px_0_0_--tw-jib--hue-rotate(var(--color-teal-500),-70),
                       2px_0_0_--tw-jib--hue-rotate(var(--color-teal-500),70)]"
>
  out of register
</span>
```

### An underline off the text color

<Example stretch>
  <div class="flex flex-col gap-4 p-6 text-lg font-semibold">
    <span class="text-teal-600 dark:text-teal-300 underline decoration-4 underline-offset-4 decoration-[--tw-jib--hue-rotate(var(--color-teal-600),150)]">a complementary underline</span>
  </div>
</Example>

```html
<a
  class="text-teal-600 underline decoration-4
         decoration-[--tw-jib--hue-rotate(var(--color-teal-600),150)]"
>
  a complementary underline
</a>
```

## Agreeing with the utility

<Example stretch>
  <div class="grid grid-cols-2 gap-px p-6">
    <div class="bg-teal-500 bg-hue-rotate-90 p-5 text-center font-mono text-[11px] text-white">bg-hue-rotate-90</div>
    <div class="[background-color:--tw-jib--hue-rotate(var(--color-teal-500),90)] p-5 text-center font-mono text-[11px] text-white">hue-rotate(…,90)</div>
    <div class="bg-teal-500 bg-hue-rotate-210 p-5 text-center font-mono text-[11px] text-white">bg-hue-rotate-210</div>
    <div class="[background-color:--tw-jib--hue-rotate(var(--color-teal-500),210)] p-5 text-center font-mono text-[11px] text-white">hue-rotate(…,210)</div>
  </div>
</Example>

## Per-space variants

| Space family           | Functions                                                                                                                                                                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Perceptual polar       | `--tw-jib--oklch-hue-rotate`, `--tw-jib--lch-hue-rotate`                                                                                                                                                                             |
| Perceptual rectangular | `--tw-jib--oklab-hue-rotate`, `--tw-jib--lab-hue-rotate`                                                                                                                                                                             |
| Legacy                 | `--tw-jib--hsl-hue-rotate`, `--tw-jib--hwb-hue-rotate`                                                                                                                                                                               |
| RGB family             | `--tw-jib--rgb-hue-rotate`, `--tw-jib--srgb-hue-rotate`, `--tw-jib--srgb-linear-hue-rotate`, `--tw-jib--display-p3-hue-rotate`, `--tw-jib--a98-rgb-hue-rotate`, `--tw-jib--prophoto-rgb-hue-rotate`, `--tw-jib--rec-2020-hue-rotate` |
| Device-independent     | `--tw-jib--xyz-hue-rotate`, `--tw-jib--xyz-d50-hue-rotate`, `--tw-jib--xyz-d65-hue-rotate`                                                                                                                                           |

The polar spaces add to the hue angle directly. Lab and Oklab rotate the a/b plane trigonometrically, and the RGB family applies a luma-preserving matrix. An unrecognised space falls back to `oklch`.

<Example stretch>
  <div class="grid grid-cols-4 gap-2 p-6">
    <div class="h-16 rounded-md [background-color:--tw-jib--hue-rotate(var(--color-teal-500),120,oklch)] flex items-end p-1.5"><span class="font-mono text-[9px] text-white">oklch</span></div>
    <div class="h-16 rounded-md [background-color:--tw-jib--hue-rotate(var(--color-teal-500),120,hsl)] flex items-end p-1.5"><span class="font-mono text-[9px] text-white">hsl</span></div>
    <div class="h-16 rounded-md [background-color:--tw-jib--hue-rotate(var(--color-teal-500),120,lab)] flex items-end p-1.5"><span class="font-mono text-[9px] text-white">lab</span></div>
    <div class="h-16 rounded-md [background-color:--tw-jib--hue-rotate(var(--color-teal-500),120,rgb)] flex items-end p-1.5"><span class="font-mono text-[9px] text-white">rgb</span></div>
  </div>
</Example>

### There is no color-mix path

`color-mix()` blends toward a second color, and lightness and saturation both have one to name up front: white or black for lightness, gray for saturation. A rotation does not. The color you land on _is_ the answer, so there is nothing to aim at until you already have it, and any fixed substitute would wash the hue toward that color instead of rotating it.

So the space is absent rather than approximated. `--tw-jib--color-mix-hue-rotate` does not exist, and `bg-hue-rotate-90/color-mix` emits no rule, which gives you no rotation instead of a wrong one.

## The override

This module re-implements `bg-hue-rotate-*` on top of this function, on every surface, wherever `@function` is supported. See [the overrides](/guide/installation#the-function-overrides).

## Import

```css
@import 'tw-jib-css';
@import 'tw-jib-css-experimental/functions';
```

<BaselineSupport :features="['function', 'relative-color']" />
