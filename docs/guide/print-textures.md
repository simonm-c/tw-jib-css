---
title: Print Textures
---

# Print Textures

Comic halftone and CRT pixel textures. Any colour in, textured surface out.

## The grammar

Both textures follow the same pattern: `bg-{texture}-{color}` plus modifier classes for grain, spacing, and edge softness (`bleed` for comic, `bloom` for pixel).

```html
<div class="bg-comic-blue-500">
<div class="bg-pixel-blue-500 pixel-size-1 pixel-gap-1">
```

Pass a Tailwind colour, get a textured surface. Change the colour, the texture updates — no images, no SVG, no JavaScript.

## Two rendering engines

<Example stretch>
  <div class="grid grid-cols-2 gap-3">
    <div class="aspect-square rounded-xl bg-comic-indigo-600 relative">
      <span class="absolute bottom-2 left-2 font-mono text-[9px] opacity-60">comic</span>
    </div>
    <div class="aspect-square rounded-xl bg-pixel-indigo-600 pixel-size-1 pixel-gap-1 pixel-bloom-0.5 relative">
      <span class="absolute bottom-2 left-2 font-mono text-[9px] text-white opacity-60">pixel</span>
    </div>
  </div>
</Example>

**Comic** decomposes the input into CMYK halftone dot layers using subtractive mixing — the same principle as a printing press.

**Pixel** splits the input into RGB column triplets with additive (screen) blending — mimics CRT and LCD phosphor displays.

## They compose with the rest of the library

Textures play nicely with gradient borders, colour transforms, and auto-contrast text:

```html
<div class="bg-comic-violet-600
  border-4 border-linear-to-br border-from-violet-300 border-to-pink-300
  text-a11y-aa p-6 rounded-xl">
  Comic halftone background, gradient border, accessible text.
</div>
```

## Reference pages

Each texture has a full reference with the complete modifier list, formulas, and configuration options:

- [Comic](/guide/comic) — CMYK halftone dots
- [Pixel](/guide/pixel) — RGB pixel columns
