---
title: Automatic contrast
---

<!-- llm-context: --tw-jib--auto-contrast(<color>, <level>, <space>) is the CSS @function form of the stable text-contrast-* utilities. It returns a <color> whose WCAG 2.x contrast ratio against the color you pass equals the requested level exactly, solved in closed form rather than searched. Because it returns a value it reaches properties text-contrast-* cannot: border-color, an SVG stroke, an outline, a box-shadow, a gradient stop. Levels are aa (4.5:1), aaa (7:1) and aa-lg (3:1). The space argument is optional and defaults to oklch; oklch, oklab, lch, lab, hsl and hwb are recognised and anything else uses the shared core path. A level is only reachable if the base color can carry it; where it cannot, the solve clamps to white or black and returns the maximum available instead. Importing the functions entry also re-implements text-contrast-* on top of this function wherever CSS @function is supported. Chromium only. -->

# Automatic contrast

`--tw-jib--auto-contrast()` takes a background color and a WCAG level and returns a text color whose contrast ratio against that background equals the level exactly. The shade is not searched for, it is solved: WCAG's ratio constrains one quantity, relative luminance, and luminance is linear in linear-light RGB, so the target inverts algebraically.

`text-contrast-*` paints exactly one thing, `color`, on the element carrying its own background. The function has no such limit, and that is the reason to reach for it.

::: tip Chromium only
CSS `@function` ships in Chromium and nowhere else yet, so every example here is blank in Firefox and Safari.

The class form is stable and works in every engine, verified exact against all 242 Tailwind colors at all three levels. If you need accessible text color rather than accessible border or stroke color, use [the stable utility](https://simonm-c.github.io/tw-jib-css/guide/automatic-contrast).
:::

## Quick reference

| Call                                                 | Returns                                               |
| ---------------------------------------------------- | ----------------------------------------------------- |
| `--tw-jib--auto-contrast(<color>)`                   | a shade at exactly WCAG AA, 4.5:1, against that color |
| `--tw-jib--auto-contrast(<color>, aaa)`              | a shade at exactly WCAG AAA, 7:1                      |
| `--tw-jib--auto-contrast(<color>, aa-lg)`            | a shade at exactly WCAG AA Large, 3:1                 |
| `--tw-jib--auto-contrast(<color>, <level>, <space>)` | the same, with chroma shaped by the named space       |

The level is a bare identifier, not a string. `aaa` maps to 7, `aa-lg` to 3, and anything else to 4.5. The space is optional and defaults to `oklch`.

## What the utility cannot reach

### A border and its text, from one token

The element's background, its border color and its text color all derive from a single value. Change the token and all three follow, each still at its ratio.

<Example stretch>
  <div class="flex justify-center p-8">
    <div class="w-64 rounded-xl border-4 bg-teal-500 p-4 [border-color:--tw-jib--auto-contrast(var(--color-teal-500),aaa)] [color:--tw-jib--auto-contrast(var(--color-teal-500),aaa)]">
      <div class="font-mono text-[10px] uppercase tracking-widest opacity-80">solved for 7:1</div>
      <div class="mt-2 text-lg font-bold">Border and text</div>
    </div>
  </div>
</Example>

```html
<div
  class="bg-teal-500 border-4
         [border-color:--tw-jib--auto-contrast(var(--color-teal-500),aaa)]
         [color:--tw-jib--auto-contrast(var(--color-teal-500),aaa)]"
>
  Border and text
</div>
```

### An SVG stroke

A stroke is not text, so no amount of `text-contrast-*` reaches it.

<Example stretch>
  <div class="flex justify-center p-8">
    <svg viewBox="0 0 48 48" class="size-28">
      <rect x="4" y="4" width="40" height="40" rx="8" class="fill-teal-500" />
      <path d="M15 25 L21 31 L33 17" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="stroke-[--tw-jib--auto-contrast(var(--color-teal-500),aaa)]" />
    </svg>
  </div>
</Example>

```html
<svg viewBox="0 0 48 48">
  <rect class="fill-teal-500" />
  <path class="stroke-[--tw-jib--auto-contrast(var(--color-teal-500),aaa)]" />
</svg>
```

### A gradient ending on the solved shade

The far stop of this bar is the accessible pair of the near stop, which makes the derivation visible: the two ends of the ramp are exactly 7:1 apart.

<Example stretch>
  <div class="flex flex-col gap-2 p-6">
    <div class="h-12 rounded-lg bg-[linear-gradient(90deg,var(--color-teal-500),--tw-jib--auto-contrast(var(--color-teal-500),aaa))]"></div>
    <div class="flex justify-between font-mono text-[10px] opacity-70">
      <span>teal-500</span>
      <span>shade(aaa)</span>
    </div>
  </div>
</Example>

```html
<div
  class="bg-[linear-gradient(90deg,var(--color-teal-500),
             --tw-jib--auto-contrast(var(--color-teal-500),aaa))]"
></div>
```

Nothing is written inside the bar. The shade is the far stop, so text painted in it would sit at 1:1 against its own background at the right-hand end.

### A focus ring that stays legible

<Example stretch>
  <div class="flex justify-center p-8">
    <button class="rounded-lg border-0 bg-teal-500 px-5 py-2.5 text-sm font-semibold cursor-pointer [color:--tw-jib--auto-contrast(var(--color-teal-500),aaa)] outline-offset-2 focus:[outline:3px_solid_--tw-jib--auto-contrast(var(--color-teal-500),aa)]">
      focus me
    </button>
  </div>
</Example>

```html
<button
  class="bg-teal-500 outline-offset-2
         [color:--tw-jib--auto-contrast(var(--color-teal-500),aaa)]
         focus:[outline:3px_solid_--tw-jib--auto-contrast(var(--color-teal-500),aa)]"
>
  focus me
</button>
```

## The three levels

<Example stretch>
  <div class="grid grid-cols-3 gap-3 p-6">
    <div class="rounded-lg bg-teal-500 p-5 text-center [color:--tw-jib--auto-contrast(var(--color-teal-500),aa-lg)]"><span class="font-mono text-xs font-bold">aa-lg · 3:1</span></div>
    <div class="rounded-lg bg-teal-500 p-5 text-center [color:--tw-jib--auto-contrast(var(--color-teal-500),aa)]"><span class="font-mono text-xs font-bold">aa · 4.5:1</span></div>
    <div class="rounded-lg bg-teal-500 p-5 text-center [color:--tw-jib--auto-contrast(var(--color-teal-500),aaa)]"><span class="font-mono text-xs font-bold">aaa · 7:1</span></div>
  </div>
</Example>

::: warning A level is only reachable if the base can carry it
The solve is exact, but it is bounded by white and black. Ask for a ratio a color cannot reach and the result clamps to whichever end is further away and returns the maximum available instead, which is a lower ratio than you asked for. It does not error.

`teal-500` carries AAA: measured in Chromium it solves to 7.151:1. `teal-600` does not. Its solve clamps to black and delivers 5.724:1, which is the ceiling for that color, not a 7:1 pair. Mid-to-dark saturated colors are where this bites.

If a ratio matters, measure the pair rather than trusting the request. [`--tw-jib--wcag-rating()`](/guide/wcag-rating) reports what a pair actually achieved, and puts the answer on the page.
:::

## Color spaces

The space argument shapes the chroma of the returned shade. It does not affect correctness: the achieved ratio is owned by a shared final stage that every path runs through.

| Space            | Recognised as                   |
| ---------------- | ------------------------------- |
| `oklch`, `oklab` | the Oklch path, and the default |
| `lch`, `lab`     | the Lch path                    |
| `hsl`            | the HSL path                    |
| `hwb`            | the HWB path                    |
| anything else    | the shared core path            |

<Example stretch>
  <div class="grid grid-cols-4 gap-2 p-6">
    <div class="rounded-md bg-teal-500 p-4 text-center [color:--tw-jib--auto-contrast(var(--color-teal-500),aaa,oklch)]"><span class="font-mono text-[10px] font-bold">oklch</span></div>
    <div class="rounded-md bg-teal-500 p-4 text-center [color:--tw-jib--auto-contrast(var(--color-teal-500),aaa,lch)]"><span class="font-mono text-[10px] font-bold">lch</span></div>
    <div class="rounded-md bg-teal-500 p-4 text-center [color:--tw-jib--auto-contrast(var(--color-teal-500),aaa,hsl)]"><span class="font-mono text-[10px] font-bold">hsl</span></div>
    <div class="rounded-md bg-teal-500 p-4 text-center [color:--tw-jib--auto-contrast(var(--color-teal-500),aaa,hwb)]"><span class="font-mono text-[10px] font-bold">hwb</span></div>
  </div>
</Example>

## The override

This module re-implements `text-contrast-*` on top of this function wherever `@function` is supported, keeping the class name and its output. See [the overrides](/overview#the-function-overrides).

## Import

```css
@import 'tw-jib-css';
@import 'tw-jib-css-experimental/functions';
```
