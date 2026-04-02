---
title: Border Spin
---

<!-- llm-context: border-spin module — animated rotating gradient borders using @property and @keyframes. Requires border-gradient utilities for the gradient itself. -->

# Border Spin

Animate gradient borders with a continuous rotation effect. Add `border-spin` to any element with a border gradient to spin it. Uses `@property` to make the gradient angle animatable via CSS `@keyframes`.

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/border-gradient';
```
Note: `border-spin` is part of the `border-gradient` module.
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'border-spin', styles: 'animation: border-spin var(--tw-border-spin-duration) linear infinite' },
  { class: 'border-spin-duration-<number>', styles: '--tw-border-spin-duration: <number> * 1000ms' },
  { class: 'border-spin-duration-[<value>]', styles: '--tw-border-spin-duration: <value>' },
]" />

## Basic Usage

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

## Spin Duration

Use `border-spin-duration-{n}` where `n` is in seconds (multiplied by 1000ms):

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

## Using a custom variable

Reference CSS custom properties with the typed bare-value syntax `(type:--var)`:

| Utility | Type hint | Example |
| --- | --- | --- |
| `border-spin-duration-*` | `time` | `border-spin-duration-(time:--spin-speed)` |

## How It Works

The animated spin uses `@property` to register `--tw-border-gradient-angle` as an `<angle>`, making it animatable. A CSS `@keyframes` animation rotates the angle from `0deg` to `360deg`, creating the continuous spin effect. The duration is controlled by the `--tw-border-spin-duration` custom property (default `1s`).
