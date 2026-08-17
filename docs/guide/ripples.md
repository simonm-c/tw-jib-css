---
title: Ripples
---

# Ripples

Material-style ripple, pure CSS. Any colour, any origin, any speed.

## How it works

Add `bg-ripple` to any element. On `:active`, a radial gradient expands outward from the origin point. No JavaScript, no event listeners – it's `@property` transitions on the gradient's size and opacity.

<Example stretch>
  <div class="flex gap-3">
    <button class="flex-1 aspect-square rounded-2xl border-0 cursor-pointer bg-indigo-600 bg-ripple ripple-color-white/40 ripple-position-center ripple-duration-60 text-white text-xs font-mono p-3 text-left">center · white</button>
    <button class="flex-1 aspect-square rounded-2xl border-0 cursor-pointer bg-emerald-600 bg-ripple ripple-color-amber-300/60 ripple-position-top ripple-duration-30 text-white text-xs font-mono p-3 text-left">top · amber · fast</button>
    <button class="flex-1 aspect-square rounded-2xl border-0 cursor-pointer bg-rose-600 bg-ripple ripple-color-white/50 ripple-position-bottom ripple-duration-100 ripple-fade text-white text-xs font-mono p-3 text-left">bottom · fade</button>
  </div>
</Example>

```html
<button
  class="bg-indigo-600 bg-ripple
  ripple-color-white/40
  ripple-position-center
  ripple-duration-60"
>
  Click me
</button>
```

## Three modifier dimensions

**Colour** – `ripple-color-{color}/{opacity}`. Default: white at 20% opacity.

**Position** – `ripple-position-{origin}`. Options: `center`, `top`, `bottom`, `left`, `right`. Default: center.

**Duration** – `ripple-duration-{n}`. Multiplied by 10ms. `ripple-duration-60` = 600ms. Default: 600ms.

**Fade** – Add `ripple-fade` for opacity fade-out as the ripple expands.

## Reference

See the [Ripple reference](/guide/ripple) for the full class list, custom values, and cursor-tracking implementation.
