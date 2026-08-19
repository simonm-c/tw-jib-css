---
title: Color Transforms
---

# Color Transforms

Lighten, darken, saturate, desaturate, or hue-shift any Tailwind colour with a utility.

## The grammar

Set a base colour with a standard Tailwind class, then stack a transform:

```html
<div class="bg-blue-500 bg-lighten-30"></div>
```

The transform operates on the colour you set. Change the base colour, the transform follows.

## Five transform types

<Example stretch>
  <div class="flex flex-col gap-2">
    <div class="flex gap-1">
      <div class="flex-1 bg-blue-500 p-4 text-center text-gray-900 text-sm">base</div>
      <div class="flex-1 bg-blue-500 bg-lighten-30 p-4 text-center text-gray-900 text-sm">lighten</div>
      <div class="flex-1 bg-blue-500 bg-darken-30 p-4 text-center text-white text-sm">darken</div>
      <div class="flex-1 bg-blue-500 bg-hue-rotate-90 p-4 text-center text-gray-900 text-sm">hue +90</div>
      <div class="flex-1 bg-blue-500 -bg-saturation-40 p-4 text-center text-gray-900 text-sm">desat</div>
    </div>
  </div>
</Example>

```html
<div class="bg-blue-500 bg-lighten-30">
  <div class="bg-blue-500 bg-darken-30">
    <div class="bg-blue-500 bg-hue-rotate-90">
      <div class="bg-blue-500 -bg-saturation-40"></div>
    </div>
  </div>
</div>
```

Lightness and saturation support positive and negative values. Prefix with `-` to reverse: `-bg-lightness-30` darkens, `-bg-saturation-30` desaturates.

## Transforms compose

Stack multiple transforms on the same element:

```html
<div class="bg-blue-500 bg-lighten-20 bg-hue-rotate-45 -bg-saturation-20"></div>
```

Order in the class list doesn't matter. Each transform reads the same base colour and applies independently.

## Every colour-accepting property

Transforms aren't limited to backgrounds. Swap the prefix to target any surface:

```html
<div class="text-red-500 text-lighten-30">lighter text</div>
<svg class="fill-green-600 fill-darken-20">darker fill</svg>
<div class="border-indigo-500 border-hue-rotate-180">shifted border</div>
```

All seven surfaces: `bg-`, `text-`, `fill-`, `stroke-`, `outline-`, `accent-`, `border-`.

## Colour space modifiers

Every transform defaults to oklch. Append a modifier to pick a different space:

```html
<div class="bg-red-500 bg-lighten-40/hsl">
  <div class="bg-red-500 bg-lighten-40/display-p3"></div>
</div>
```

Different spaces produce visually different results from the same input. See [Color Spaces](/guide/color-spaces) for when this matters.

## How it works

Every transform is CSS relative colour syntax. Each colour space has a pre-computed
expression built at compile time via Tailwind's `@theme inline`, so a modifier is a
theme lookup rather than a branch: writing `bg-lightness-30/hsl` resolves
`--modifier()` to the pre-built HSL expression.

That is the whole mechanism, and it runs on **Chrome 111+, Safari 16.4+, Firefox 128+**.
There is no JavaScript, no build step beyond Tailwind itself, and nothing to detect –
the same expression evaluates on every engine.

```css
@import 'tw-jib-css';
```

## Reference pages

Each transform type has a full reference page with the complete class list, formulas, and all 17 colour spaces compared:

- [Lightness](/guide/lightness) – lighten and darken
- [Saturation](/guide/saturation) – saturate and desaturate
- [Hue Rotate](/guide/hue-rotate) – shift hue by degrees
