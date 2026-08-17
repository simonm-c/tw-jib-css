---
title: What Jibcss Adds
---

# What Jibcss Adds

One element, three layers that plain Tailwind can't do:

<Example>
  <div class="bg-comic-indigo-600
    border-4 border-linear-to-br border-from-indigo-300 border-to-cyan-300
    text-white
    rounded-xl p-6 max-w-sm">
    <h3 class="text-lg font-bold">Event name</h3>
    <p class="text-sm mt-1 opacity-90">A card with a comic halftone background, a gradient border, and auto-contrasted text. All CSS, no JavaScript.</p>
  </div>
</Example>

```html
<div
  class="bg-comic-indigo-600
  border-4 border-linear-to-br border-from-indigo-300 border-to-cyan-300
  text-a11y-aa
  rounded-xl p-6"
>
  <h3>Event name</h3>
  <p>A card with a comic halftone background, a gradient border, and auto-contrasted text.</p>
</div>
```

Every class in that snippet either comes from stock Tailwind (`rounded-xl`, `p-6`) or from jibcss. Here's what jibcss is doing.

## The background is a texture, not an image

`bg-comic-indigo-600` takes `indigo-600` and renders it as CMYK halftone dots — pure CSS gradients with multiply blending. Change the colour to `bg-comic-rose-500` and the dot layers recalculate.

Two textures are available: comic (CMYK halftone) and pixel (CRT phosphors). See [Print Textures](/guide/print-textures).

## The text colour is computed from the background

`text-a11y-aa` doesn't set a fixed colour. It reads the background, calculates WCAG 2.x luminance, and returns a text shade guaranteed to pass the 4.5:1 AA ratio — at render time, in CSS.

Change the background and the text colour updates. Three levels available: `text-a11y-aa`, `text-a11y-aaa`, `text-a11y-aa-lg`. See [Accessible Color](/guide/accessible-color).

## The border is a gradient, not a solid

`border-linear-to-br border-from-indigo-300 border-to-cyan-300` is the same grammar as Tailwind's `bg-linear-*`, applied to borders. Linear, radial, conic, animated spin, 8 interpolation modes.

No pseudo-elements, no SVG, no workarounds. See [Gradient Borders](/guide/gradient-borders).

## What else

Beyond these three layers, jibcss adds:

- **Colour transforms** — lighten, darken, saturate, desaturate, hue-shift any Tailwind colour. See [Color Transforms](/guide/color-transforms).
- **16 colour spaces** — append `/oklch`, `/hsl`, `/display-p3` to any transform. See [Color Spaces](/guide/color-spaces).
- **Ripple effects** — material-style ripple, pure CSS. See [Ripples](/guide/ripples).
- **Composition** — every utility stacks. See [Composition](/guide/composition).
