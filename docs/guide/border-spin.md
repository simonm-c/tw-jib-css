---
title: Border spin
---

<!-- llm-context: Turns a conic gradient border into a continuous rotation. Uses @property and @keyframes, and needs the border-gradient utilities for the gradient itself. -->

# Border spin

Animated rotating gradient borders. Add `border-spin` to any element with a conic border gradient to spin it continuously.

::: info Browser support
The animated angle needs `@property`, which is the older of the two, but there is nothing to spin without a [border gradient](/guide/border-gradient), so the gradient's floor is the one that applies. Live status for both is at the foot of this page.
:::

::: warning This animation does not stop itself
`border-spin` carries no `prefers-reduced-motion` query of its own, so a reader who has asked
their system for reduced motion still gets the spin. Ask for it through the variant instead:

```html
<div class="border-4 border-conic-0 motion-safe:border-spin"></div>
```

`motion-reduce:animate-none` turns it off the other way round. Neither needs `!`, and every other
variant works the same: `border-spin` declares nothing but the animation, so it has no specificity
to out-rank.
:::

## Quick reference

<UtilityTable :rows="[
  { class: 'border-spin', styles: 'animation: border-spin var(--jib-border-spin-duration) linear infinite var(--jib-border-spin-direction)' },
  { class: 'border-spin-reverse', styles: '--jib-border-spin-direction: reverse' },
  { class: 'border-spin-duration-<number>', styles: '--jib-border-spin-duration: <number> * 1000ms' },
  { class: 'border-spin-duration-<name>', styles: '--jib-border-spin-duration: var(--jib-border-spin-duration-<name>)' },
  { class: 'border-spin-duration-[<value>]', styles: '--jib-border-spin-duration: <value>' },
]" />

## Basic usage

Add `border-spin` to rotate the gradient continuously. The default duration is `1s`.

<Example>
  <div class="flex gap-4 items-start">
    <div class="flex flex-col items-center gap-2">
      <div class="size-28 border-8 border-conic-0 border-from-rose-500 border-via-amber-400 border-to-rose-500 border-spin rounded-full bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">border-spin</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="size-28 border-8 border-conic/longer border-from-red-500 border-via-emerald-400 border-to-blue-500 border-spin border-spin-duration-2 rounded-full bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">border-spin border-spin-duration-2</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <button class="border-4 border-conic/longer border-from-blue-500 border-via-red-500 border-to-yellow-400 border-spin border-spin-duration-1.5 bg-white rounded-full px-6 py-3 text-sm text-gray-700 cursor-pointer">Loading...</button>
      <span class="font-mono text-[11px] text-gray-500">border-spin-duration-1.5</span>
    </div>
  </div>
</Example>

## Reverse

`border-spin-reverse` turns the rotation the other way. It declares only the direction, so it
composes with everything else: pair it with a duration, a variant, or neither.

<Example>
  <div class="flex gap-4 items-start">
    <div class="flex flex-col items-center gap-2">
      <div class="size-24 border-8 border-conic-0 border-from-sky-500 border-via-fuchsia-400 border-to-sky-500 border-spin rounded-full bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">border-spin</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="size-24 border-8 border-conic-0 border-from-sky-500 border-via-fuchsia-400 border-to-sky-500 border-spin border-spin-reverse rounded-full bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">border-spin border-spin-reverse</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="size-24 border-8 border-conic-0 border-from-sky-500 border-via-fuchsia-400 border-to-sky-500 border-spin border-spin-reverse border-spin-duration-3 rounded-full bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">border-spin-reverse border-spin-duration-3</span>
    </div>
  </div>
</Example>

Two rings turning against each other read as a single mechanism rather than two spinners:

<Example>
  <div class="flex items-center justify-center">
    <div class="relative size-32">
      <div class="absolute inset-0 border-8 border-conic-0 border-from-transparent border-to-indigo-600 border-spin rounded-full"></div>
      <div class="absolute inset-4 border-8 border-conic-0 border-from-transparent border-to-rose-500 border-spin border-spin-reverse border-spin-duration-1.5 rounded-full"></div>
    </div>
  </div>
</Example>

## Spin duration

Use `border-spin-duration-<number>` where `n` is in seconds (multiplied by 1000ms):

<Example>
  <div class="flex gap-4 items-start">
    <div class="flex flex-col items-center gap-2">
      <div class="size-24 border-8 border-conic-0 border-from-orange-500 border-to-violet-600 border-spin border-spin-duration-0.5 rounded-full bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">border-spin-duration-0.5</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="size-24 border-8 border-conic-0 border-from-orange-500 border-to-violet-600 border-spin rounded-full bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">1s (default)</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="size-24 border-8 border-conic-0 border-from-orange-500 border-to-violet-600 border-spin border-spin-duration-3 rounded-full bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">border-spin-duration-3</span>
    </div>
  </div>
</Example>

## Using a custom value

Use bracket notation for custom durations:

<Example>
  <div class="flex flex-col items-center gap-2">
    <div class="size-28 border-8 border-conic-0 border-from-[#ff6b35] border-to-[#6366f1] border-spin border-spin-duration-[500ms] rounded-full bg-white"></div>
    <span class="font-mono text-[11px] text-gray-500">border-spin-duration-[500ms]</span>
  </div>
</Example>

## Naming your own durations

`border-spin-duration-*` reads the `--jib-border-spin-duration-*` theme namespace, so a project
can name its speeds once and use them everywhere:

```css
@theme {
  --jib-border-spin-duration-slow: 4s;
  --jib-border-spin-duration-brisk: 600ms;
}
```

```html
<div class="border-4 border-conic-0 border-spin border-spin-duration-slow"></div>
```

## Using a custom variable

Reference CSS custom properties with the typed bare-value syntax `(type:--var)`:

| Utility                  | Type hint | Example                                    |
| ------------------------ | --------- | ------------------------------------------ |
| `border-spin-duration-*` | `time`    | `border-spin-duration-(time:--spin-speed)` |

Custom properties inherit, so the variable can live on an ancestor and every spinner below it
follows. Changing it at runtime retimes them together:

```html
<div style="--spin-speed: 2.5s">
  <div class="border-4 border-conic-0 border-spin border-spin-duration-(--spin-speed)"></div>
  <div class="border-4 border-conic-0 border-spin border-spin-duration-(--spin-speed)"></div>
</div>
```

## How it works

Registering `--jib-border-gradient-angle` as an `<angle>` through `@property` is what makes it animatable. Every conic border gradient starts from that angle, so `border-conic-45` is a declaration of it, and a `@keyframes` animation rotates it from `0deg` to `360deg`. An animation beats a declaration by cascade origin rather than by selector weight, which is how `border-spin` takes the angle over while carrying no specificity of its own. `--jib-border-spin-duration` sets how long one turn takes, defaulting to `1s`, and `--jib-border-spin-direction` is the `animation-direction` slot of the same shorthand, defaulting to `normal`. Because both are read out of the shorthand rather than redeclared beside it, `border-spin-reverse` and the duration utilities never restate the animation and so never have to out-rank it.

## Import

Included in `@import 'tw-jib-css'`. To import individually:

```css
@import 'tw-jib-css/border-gradient';
```

Note: `border-spin` is part of the `border-gradient` module.

<BaselineSupport :features="['registered-custom-properties', 'gradient-interpolation']" />
