---
title: Composition
---

# Composition and Stacking

Jibcss utilities compose. Stack transforms, combine textures with borders, apply colour spaces to everything.

## Stacking transforms

Multiple transforms read the same base colour and apply independently:

```html
<div class="bg-blue-500 bg-lighten-20 bg-hue-rotate-45 -bg-saturation-20">
```

<Example stretch>
  <div class="flex gap-1">
    <div class="flex-1 bg-blue-500 p-4 text-center text-white text-sm">base</div>
    <div class="flex-1 bg-blue-500 bg-lighten-20 p-4 text-center text-sm">+light</div>
    <div class="flex-1 bg-blue-500 bg-lighten-20 bg-hue-rotate-45 p-4 text-center text-sm">+light +hue</div>
    <div class="flex-1 bg-blue-500 bg-lighten-20 bg-hue-rotate-45 -bg-saturation-20 p-4 text-center text-sm">+light +hue −sat</div>
  </div>
</Example>

Lightness and saturation compose additively. Hue rotation is additive. Order in the class list doesn't affect the result.

## Mixing colour spaces

Colour space modifiers apply per-utility, not per-element. You can mix spaces on one element:

```html
<div class="bg-blue-500 bg-lighten-30/oklch bg-hue-rotate-90/hsl">
```

The lightness shift interpolates in oklch, the hue rotation in hsl. Each utility reads the base colour independently.

## Textures with borders

Print textures and gradient borders coexist on the same element:

```html
<div class="bg-hatch-indigo-600
  border-4 border-linear-to-br
  border-from-indigo-300 border-to-purple-300
  rounded-xl p-6">
```

The texture occupies the background. The gradient border occupies the border area via background-clip. They don't interfere.

## Auto-contrast on any background

`text-a11y-*` reads the computed background colour. It works on solid colours, transformed colours, and textures:

```html
<div class="bg-watercolor-violet-600 text-a11y-aa p-6">
  Readable text on a watercolour background.
</div>
```

## A realistic composition

A card with a texture background, auto-contrast text, a gradient border, and a lightened accent:

```html
<div class="bg-watercolor-indigo-600
  border-4 border-linear-to-br
  border-from-indigo-300 border-to-cyan-300
  text-a11y-aa
  rounded-xl p-6">
  <h3 class="text-lg font-bold">Card title</h3>
  <p class="text-sm">Body text, auto-contrasted.</p>
  <button class="bg-indigo-500 bg-lighten-20
    text-a11y-aa bg-ripple ripple-color-white/30
    rounded px-4 py-2 mt-3 border-0 cursor-pointer">
    Action
  </button>
</div>
```

Every utility speaks the same grammar. That's the system.
