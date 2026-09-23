---
title: Color spaces
---

<!-- llm-context: The color space modifier shared by lightness, saturation and hue-rotate. What each space is, how the modifier resolves through @theme inline, when to pick which space, and why hue rotation has 16 spaces where the other two have 17. -->

# Color spaces

Every color transform does its arithmetic in a color space. A `/modifier` picks which one.

Lightness and saturation take seventeen. Hue rotation takes sixteen, and the missing one is `color-mix` for the reason in [Why hue rotation has no color-mix](#why-hue-rotation-has-no-color-mix).

## What the modifier changes

The space changes how a transform calculates, not which colors you can hand it. `bg-lighten-40/oklch` and `bg-lighten-40/hsl` lighten the same input by the same amount and arrive somewhere different, because they take different routes.

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-20/oklch h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-40/oklch h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-60/oklch h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-80/oklch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-20/hsl h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-40/hsl h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-60/hsl h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-80/hsl h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-20/lab h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-40/lab h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-60/lab h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-80/lab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/display-p3</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-20/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-40/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-60/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-80/display-p3 h-8"></div>
      </div>
    </div>
  </div>
</Example>

One input, `red-500`. One transform, `lightness-80`. Four endpoints. The gap between the oklch row and the hsl row is what the modifier is for.

## Syntax

```html
<div class="bg-blue-500 bg-lighten-30/oklch">
  <div class="bg-blue-500 bg-lighten-30/hsl">
    <div class="bg-blue-500 bg-hue-rotate-90/lab"></div>
  </div>
</div>
```

The modifier binds to the utility, not to the element, so one element can run two transforms in two spaces:

```html
<div class="bg-blue-500 bg-lighten-20/oklch bg-hue-rotate-45/hsl"></div>
```

Leave the modifier off and you get oklch.

## Choosing a space

**oklch, the default.** Perceptually uniform. A 20-point lightness shift looks like the same size step whether you start from blue or from yellow. Reach for something else only when oklch hands you a result you don't want.

**hsl.** Familiar from years of CSS. Not uniform: yellows blow out to white long before blues have moved. Pick it when that uneven response is the look you are after.

**lab and oklab.** Perceptual, with no hue channel to drift. Good for lightness and saturation when hue must not move at all.

**display-p3 and the other wide-gamut spaces.** Same arithmetic as srgb over a larger volume. Worth using when your source colors already sit outside srgb, since transforming inside srgb clips them.

**color-mix.** Blends toward white, black or gray using `color-mix()` in oklab rather than relative color syntax. Results differ slightly from the native path. Available on lightness and saturation, absent on hue rotation.

## Perceptual uniformity

In a perceptually uniform space, equal numeric changes produce equal visual changes whatever color you started from. Drop lightness by 10 units on yellow and on blue, and the two steps look the same size.

oklch and oklab are the most uniform spaces CSS offers, which is why oklch is the default here.

hsl and rgb are not uniform. The same numeric change reads differently on different hues, and hsl's "50% lightness" is much brighter on yellow than on blue. Both are still useful when you want to move a specific channel and know exactly which one you are moving.

lch and lab are uniform in theory but shift hue in the blue region. oklch and oklab exist to fix precisely that.

## Wide gamut

Standard web colors live in the srgb gamut. Modern displays, Apple's in particular, cover the wider Display P3 gamut, which reaches greens, reds and oranges srgb cannot express.

Transform a P3 color inside srgb and the result clips. Transform it in `display-p3`, `a98-rgb`, `prophoto-rgb` or `rec2020` and it survives. For work that starts and ends in srgb, oklch is enough.

## Every space

| Name             | CSS notation              | Characteristics                                                                                                |
| ---------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| OKLCh            | `oklch()`                 | Perceptually uniform lightness and chroma with a hue angle. The default.                                       |
| LCH              | `lch()`                   | CIE LCH, perceptually uniform, predecessor to OKLCh. Slight hue shifts at high chroma.                         |
| OKLab            | `oklab()`                 | Perceptually uniform lightness and two color-opponent axes. No hue channel, so it suits hue-stable transforms. |
| CIELAB           | `lab()`                   | The original perceptually uniform space. Like OKLab, with known uniformity problems at blue hues.              |
| HSL              | `hsl()`                   | Hue, Saturation, Lightness. Familiar, not perceptually uniform.                                                |
| HWB              | `hwb()`                   | Hue, Whiteness, Blackness. An alternative to HSL that some prefer for tinting and shading.                     |
| RGB              | `rgb()`                   | Direct red, green, blue channel values. The web's legacy default.                                              |
| sRGB             | `color(srgb ...)`         | The standard web color space in functional `color()` notation.                                                 |
| Linear sRGB      | `color(srgb-linear ...)`  | sRGB without the gamma curve, so linear light values. Used in physically-based rendering.                      |
| Display P3       | `color(display-p3 ...)`   | Wide gamut. Covers modern Apple and flagship Android displays.                                                 |
| Adobe RGB (1998) | `color(a98-rgb ...)`      | Wide gamut built for print and photography workflows.                                                          |
| ProPhoto RGB     | `color(prophoto-rgb ...)` | Very wide gamut, reaching nearly all visible colors. Mostly photography.                                       |
| Rec. 2020        | `color(rec2020 ...)`      | Ultra-wide gamut built for HDR video.                                                                          |
| CIE XYZ          | `color(xyz ...)`          | Device-independent reference space. Every other space converts through XYZ.                                    |
| CIE XYZ D50      | `color(xyz-d50 ...)`      | XYZ under the D50 (warm daylight) illuminant. CIELAB and ProPhoto RGB use it internally.                       |
| CIE XYZ D65      | `color(xyz-d65 ...)`      | XYZ under the D65 (noon daylight) illuminant. sRGB and OKLab use it internally.                                |
| color-mix        | `color-mix()`             | Not a space. Blends with `color-mix()` in oklab, which shifts hue and saturation a little.                     |

## How a modifier resolves

Each transform is CSS relative color syntax, and `@theme inline` holds one finished expression per space, built when Tailwind compiles. Writing `bg-lightness-30/hsl` resolves `--modifier()` to the hsl expression already sitting in the theme, so a modifier costs a lookup rather than a branch at render time.

Nothing here is detected, polyfilled or precomputed. The same expression evaluates on every engine that has the features listed at the foot of this page, and the arithmetic runs in `calc()` on every paint.

## Why hue rotation has no color-mix

`color-mix()` blends between two colors, so it needs a second color to aim at. Lightness has one: white going up, black going down. Saturation has one too, gray. In both cases you can name the endpoint before you know the amount, and the amount is only how far along you travel.

A rotation has no such endpoint. The color you land on _is_ the answer you are computing, so there is nothing to mix toward until you already have it. Any fixed color you substituted would wash the hue toward that color instead of rotating it, which is a different operation wearing the same name.

So the modifier is missing rather than approximated. Write `bg-hue-rotate-90/color-mix` and Tailwind emits no rule at all, which gives you no rotation instead of a wrong one. The other sixteen spaces each run the rotation as real arithmetic: hue addition in the polar spaces, a trigonometric rotation of the a/b plane in Lab, a luma-preserving matrix in the RGB family.

## Where the modifier applies

- [Lightness](/guide/lightness). All seventeen spaces, as `bg-lightness-20/oklch` or `-bg-lightness-20/oklch`, and the same on the `bg-lighten-*` and `bg-darken-*` aliases.
- [Saturation](/guide/saturation). All seventeen, as `bg-saturation-20/oklch` or `-bg-saturation-40/oklch`, and on the `bg-saturate-*` and `bg-desaturate-*` aliases.
- [Hue Rotate](/guide/hue-rotate). Sixteen, as `bg-hue-rotate-90/oklch`.
- [Automatic Contrast](/guide/automatic-contrast). `text-contrast-aa/oklch` and siblings pick the space the solved shade is built in.
- [Border Gradient](/guide/border-gradient) uses a different set: interpolation modes, which choose the space a gradient blends through rather than the space a transform computes in.

## Import

The modifier belongs to the transforms it modifies, so it arrives with the
**`color-transforms`** module rather than separately. Included in `@import 'tw-jib-css'`,
or on its own:

```css
@import 'tw-jib-css/color-transforms';
```

`text-contrast-*` takes the same modifier and ships in
[`tw-jib-css/automatic-contrast`](/guide/automatic-contrast).

<BaselineSupport :features="['relative-color', 'registered-custom-properties', 'oklab', 'abs-sign']" />
