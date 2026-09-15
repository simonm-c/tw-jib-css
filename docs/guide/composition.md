---
title: Composition
---

<!-- llm-context: How tw-jib-css utilities combine on one element. The three color transforms are one fixed pipeline (hue-rotate then saturation then lightness) carried by a custom-property chain, so markup class order is irrelevant. Each of the seven surfaces has its own independent chain. text-contrast-* solves against a SINGLE background color and therefore cannot be used with the comic or pixel textures: those paint a background-image, dots or columns over a white (comic) or black (pixel) base, whose effective luminance depends on the gap, dot and bleed settings. Adding a flat bg-* color alongside a texture does not fix it and makes it worse, because bg-* and bg-comic-* write the same --tw-jib--background-image, so the flat color reaches the solve but never the paint. -->

# Composition

Utilities from different modules land on the same element with no special handling. Most of the time you can stack them and stop thinking about it. This page covers the order they run in, and the one pairing that does not work the way it looks like it should.

## The color pipeline

Lightness, saturation and hue rotation are one pipeline, not three separate operations. Each stage reads the stage before it:

```
bg-blue-500          the source color
  └─ bg-hue-rotate-45    rotates the source
       └─ -bg-saturation-20   desaturates the rotated color
            └─ bg-lighten-20       lightens the desaturated color
```

Each stage also falls back past any stage you left out, so writing lightness alone still reads the source color directly.

This is why class order in your markup makes no difference. `bg-lighten-20 bg-hue-rotate-45` and `bg-hue-rotate-45 bg-lighten-20` compile to the same chain, because the order lives in the custom properties rather than in the cascade.

<Example stretch>
  <div class="flex gap-1">
    <div class="flex-1 bg-blue-500 p-4 text-center text-white text-sm">base</div>
    <div class="flex-1 bg-blue-500 bg-lighten-20 p-4 text-center text-sm">+light</div>
    <div class="flex-1 bg-blue-500 bg-lighten-20 bg-hue-rotate-45 p-4 text-center text-sm">+light +hue</div>
    <div class="flex-1 bg-blue-500 bg-lighten-20 bg-hue-rotate-45 -bg-saturation-20 p-4 text-center text-sm">+light +hue −sat</div>
  </div>
</Example>

```html
<div class="bg-blue-500 bg-lighten-20 bg-hue-rotate-45 -bg-saturation-20"></div>
```

What the fixed order does affect is the input each stage gets. Lightness operates on an already-desaturated color, so a heavy `-bg-saturation-*` changes the material a later `bg-lighten-*` has to work with. The three ship as [one module](/guide/installation#modules) for exactly this reason: a stage taken alone would compute against a value nothing writes.

## Mixing color spaces

A `/modifier` binds to its own utility, so one element can run two transforms in two spaces:

```html
<div class="bg-blue-500 bg-lighten-30/oklch bg-hue-rotate-90/hsl"></div>
```

The lightness step interpolates in oklch and the hue rotation in hsl. See [Color spaces](/guide/color-spaces).

## Each surface is its own pipeline

`bg-`, `text-`, `fill-`, `stroke-`, `outline-`, `accent-` and `border-` each carry a separate chain. Transforming one leaves the others alone:

```html
<div class="bg-blue-500 bg-lighten-30 text-blue-500 -text-saturation-40">
  A lightened background under desaturated text, both derived from blue-500.
</div>
```

## Colors from CSS variables need a type hint

A color passed as a CSS variable must say that it is a color:

```html
<!-- correct -->
<div class="bg-(color:--brand) bg-lighten-20"></div>

<!-- wrong: the transform runs against nothing -->
<div class="bg-(--brand) bg-lighten-20"></div>
```

Tailwind works out the type of an arbitrary value by looking at it, and it will not look inside a `var()`. `bg-[#0047ab]` is a color because it reads as one; `bg-(--brand)` could be anything, so the type hint is how you say which. This is [Tailwind's own rule](https://tailwindcss.com/docs/adding-custom-styles#resolving-ambiguities), and it applies to all seven surfaces: `bg-`, `text-`, `fill-`, `stroke-`, `outline-`, `accent-` and `border-`.

Without the hint the class still compiles, and the color still appears — Tailwind's own utility sets it. What does not happen is the color entering the pipeline above, so every transform reads an unset source:

|               | with `(color:--brand)`      | with `(--brand)`        |
| ------------- | --------------------------- | ----------------------- |
| `bg-*`        | the transformed brand color | a washed-out near-white |
| the other six | the transformed brand color | fully transparent       |

The tell is that the result stops depending on the color you passed. Two different brand colors giving the same output means the transform is working on the default rather than on yours.

The hint is only needed where a namespace accepts more than a color, which is all seven of these: `bg-` also takes an image, `text-` a font size, `border-`, `outline-` and `stroke-` a width, `fill-` a paint reference like `url(#gradient)`, and `accent-` the keyword `auto`. Utilities that accept nothing but a color take the plain form: `ripple-color-(--brand)`, `bg-comic-(--brand)`, `bg-pixel-(--brand)`.

## What automatic contrast can see

`text-contrast-*` reads the end of the background pipeline, so it tracks whatever the transforms left there. Lighten the background and the text color follows:

```html
<div class="bg-violet-600 bg-lighten-30 text-contrast-aa">
  Solved against the lightened violet, not against violet-600.
</div>
```

::: danger Automatic contrast needs one flat color, so it cannot be used on a texture
`text-contrast-*` solves a ratio against a single color. A texture is a background _image_, and no single color describes it. Comic paints CMYK dots over a white base, pixel paints RGB columns over a black base, and what a reader looks at is a mixture of ink and gap whose luminance moves with `comic-gap`, `comic-dot` and `comic-bleed`, or the pixel equivalents.

At `comic-gap-0` the dots close up, the surface approaches the flat color, and the pairing can look right. Open the gaps to anything you would actually ship and the white base takes over most of the area, so a shade solved for the ink is being read against a surface that is mostly white.

Adding the flat color alongside the texture does not rescue it, and quietly makes it worse:

```html
<!-- Solves against violet-600, paints white-plus-dots. Confidently wrong. -->
<div class="bg-violet-600 bg-comic-violet-600 text-contrast-aa">…</div>
```

`bg-*` and `bg-comic-*` both write `--tw-jib--background-image`, so the flat layer never reaches the paint. It still reaches the solve, which is the trap: you get a shade computed for a violet that nobody sees.

Choose the text color yourself over a texture, and keep `text-contrast-*` for flat backgrounds.
:::

## Textures, borders and ripples on one element

These three occupy different parts of a single `background` shorthand, so they stack without fighting:

```css
background:
  var(--tw-jib--ripple-image) padding-box,
  var(--tw-jib--background-image) padding-box,
  var(--tw-jib--border-gradient) border-box;
```

The ripple and the texture paint inside the padding box, the gradient border paints in the border box. Nothing needs a pseudo-element:

```html
<div
  class="bg-comic-indigo-600
  border-4 border-linear-to-br border-from-indigo-300 border-to-cyan-300
  rounded-xl p-6"
></div>
```

## A card using most of it

The card carries the halftone and the gradient border, and picks its own text color because the background is a texture. The button sits on a flat color, so it can hand its text color to `text-contrast-aa` and take a ripple as well.

```html
<div
  class="bg-comic-indigo-600
  border-4 border-linear-to-br border-from-indigo-300 border-to-cyan-300
  text-gray-900
  rounded-xl p-6"
>
  <h3 class="text-lg font-bold">Card title</h3>
  <p class="text-sm">Body text, over a halftone, in a color chosen by hand.</p>
  <button
    class="bg-indigo-500 bg-lighten-20
    text-contrast-aa bg-ripple ripple-color-white/30
    rounded px-4 py-2 mt-3 border-0 cursor-pointer"
  >
    Action
  </button>
</div>
```

## Import

This page crosses modules, so it assumes the whole library:

```css
@import 'tw-jib-css';
```

Every module is also its own entry, and they compose the same way taken separately. See
[take only what you need](/guide/installation#take-only-what-you-need).

<BaselineSupport :features="['relative-color', 'registered-custom-properties', 'color-mix']" />
