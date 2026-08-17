---
title: Gradient Borders
---

# Gradient Borders

Linear, radial, conic, and animated gradient borders. Same grammar as Tailwind's `bg-linear-*`, applied to borders.

## The parallel to Tailwind's gradient API

If you know `bg-linear-to-br`, you already know `border-linear-to-br`. The utilities mirror Tailwind's background gradient classes, with `border-from-*`, `border-via-*`, and `border-to-*` setting colour stops.

```html
<div
  class="border-4 border-linear-to-br
  border-from-violet-500 border-to-cyan-400
  rounded-2xl"
></div>
```

<Example stretch>
  <div class="flex gap-4">
    <div class="flex-1 aspect-square rounded-2xl border-4 border-linear-to-br border-from-violet-500 border-to-cyan-400"></div>
    <div class="flex-1 aspect-square rounded-2xl border-4 border-conic-0 border-from-indigo-500 border-via-pink-500 border-to-indigo-500"></div>
    <div class="flex-1 aspect-square rounded-full border-4 border-conic-0 border-spin border-spin-duration-4 border-from-emerald-400 border-via-violet-500 border-to-emerald-400"></div>
  </div>
</Example>

## Three gradient types

**Linear** — `border-linear-to-{direction}` with directional keywords (`br`, `t`, `l`, etc.) or custom angles.

**Radial** — `border-radial-*` with optional position control.

**Conic** — `border-conic-{angle}` for conic sweeps. Pair with `border-spin` for animation.

## Animated spin

Add `border-spin` to a conic gradient for continuous rotation. Control speed with `border-spin-duration-{seconds}`:

```html
<div
  class="border-4 border-conic-0 border-spin border-spin-duration-4
  border-from-emerald-400 border-via-violet-500 border-to-emerald-400
  rounded-full"
></div>
```

Respects `prefers-reduced-motion`.

## Interpolation modes

All 8 CSS gradient interpolation modes are supported via modifiers: `border-linear-to-br/shorter`, `border-linear-to-br/longer`, etc.

## Reference

See the [Border Gradient reference](/guide/border-gradient) for the full class list, interpolation modes, colour stop positions, and edge cases.
