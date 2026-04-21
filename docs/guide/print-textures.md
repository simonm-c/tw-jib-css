---
title: Print Textures
---

# Print Textures

Comic halftone, CRT pixel, hatch, and watercolour textures. Any colour in, textured surface out.

## The grammar

All four textures follow the same pattern: `bg-{texture}-{color}` plus modifier classes for grain, spacing, and bleed.

```html
<div class="bg-comic-blue-500">
<div class="bg-pixel-blue-500 pixel-size-1 pixel-gap-1">
<div class="bg-hatch-blue-500 hatch-angle-60">
<div class="bg-watercolor-blue-500 watercolor-traditional">
```

Pass a Tailwind colour, get a textured surface. Change the colour, the texture updates — no images, no SVG, no JavaScript.

## Four rendering engines

<Example stretch>
  <div class="grid grid-cols-2 gap-3">
    <div class="aspect-square rounded-xl bg-comic-indigo-600 relative">
      <span class="absolute bottom-2 left-2 font-mono text-[9px] opacity-60">comic</span>
    </div>
    <div class="aspect-square rounded-xl bg-pixel-indigo-600 pixel-size-1 pixel-gap-1 pixel-bleed-0.5 relative">
      <span class="absolute bottom-2 left-2 font-mono text-[9px] text-white opacity-60">pixel</span>
    </div>
    <div class="aspect-square rounded-xl bg-hatch-indigo-600 relative">
      <span class="absolute bottom-2 left-2 font-mono text-[9px] opacity-60">hatch</span>
    </div>
    <div class="aspect-square rounded-xl bg-watercolor-indigo-600 relative">
      <span class="absolute bottom-2 left-2 font-mono text-[9px] opacity-60">watercolor</span>
    </div>
  </div>
</Example>

**Comic** decomposes the input into CMYK halftone dot layers using subtractive mixing — the same principle as a printing press.

**Pixel** splits the input into RGB column triplets with additive (screen) blending — mimics CRT and LCD phosphor displays.

**Hatch** renders three directional crosshatch stroke layers with multiply blending. Input lightness drives stroke density: light inputs get sparse lines, dark inputs build to full crosshatch.

**Watercolour** blends nine pigment pools (six primary, three shadow) via multiply. Three palette modes: contemporary, traditional (Turner-era earth tones), and eastern (sumi ink and mineral pigments).

## They compose with the rest of the library

Textures play nicely with gradient borders, colour transforms, and auto-contrast text:

```html
<div class="bg-watercolor-violet-600
  border-4 border-linear-to-br border-from-violet-300 border-to-pink-300
  text-a11y-aa p-6 rounded-xl">
  Watercolour background, gradient border, accessible text.
</div>
```

## Reference pages

Each texture has a full reference with the complete modifier list, formulas, and configuration options:

- [Comic](/guide/comic) — CMYK halftone dots
- [Pixel](/guide/pixel) — RGB pixel columns
- [Hatch](/guide/hatch) — pen-and-ink crosshatch
- [Watercolor](/guide/watercolor) — multi-pigment wash
