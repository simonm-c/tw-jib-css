---
title: Border gradient
---

<!-- llm-context: Linear, radial and conic gradient borders as Tailwind classes, with no pseudo-element and no SVG. Built from a CSS background clipped padding-box over border-box, with eight interpolation modes and an animated spin. -->

# Border gradient

Linear, radial and conic gradient borders. Same grammar as Tailwind's `bg-linear-*`, applied to borders. 8 interpolation modes. For animated spinning borders, see [Border Spin](/guide/border-spin).

::: info Browser support
Built on registered custom properties and gradient color interpolation, which is also what the interpolation modes (`/shorter`, `/longer`, etc.) ride on. No relative color syntax is involved. Live status for both is at the foot of this page.
:::

::: warning Gradient stops from CSS variables must carry a type hint
`border-from-*`, `border-via-*` and `border-to-*` take either a color or a position, so a CSS variable has to say which: `border-from-(color:--brand)` or `border-from-(percentage:--stop)`. The untyped `border-from-(--brand)` matches neither and emits no rule at all, so the stop silently keeps its default. The [full table](#using-a-custom-variable) is below.
:::

## Quick reference

<UtilityTable :rows="[
  { class: 'border-linear-to-t', styles: '--jib-border-gradient: linear-gradient(to top var(--jib-gradient-interpolation), var(--jib-border-gradient-stops))' },
  { class: 'border-linear-to-tr', styles: '--jib-border-gradient: linear-gradient(to top right var(--jib-gradient-interpolation), var(--jib-border-gradient-stops))' },
  { class: 'border-linear-to-r', styles: '--jib-border-gradient: linear-gradient(to right var(--jib-gradient-interpolation), var(--jib-border-gradient-stops))' },
  { class: 'border-linear-to-br', styles: '--jib-border-gradient: linear-gradient(to bottom right var(--jib-gradient-interpolation), var(--jib-border-gradient-stops))' },
  { class: 'border-linear-to-b', styles: '--jib-border-gradient: linear-gradient(to bottom var(--jib-gradient-interpolation), var(--jib-border-gradient-stops))' },
  { class: 'border-linear-to-bl', styles: '--jib-border-gradient: linear-gradient(to bottom left var(--jib-gradient-interpolation), var(--jib-border-gradient-stops))' },
  { class: 'border-linear-to-l', styles: '--jib-border-gradient: linear-gradient(to left var(--jib-gradient-interpolation), var(--jib-border-gradient-stops))' },
  { class: 'border-linear-to-tl', styles: '--jib-border-gradient: linear-gradient(to top left var(--jib-gradient-interpolation), var(--jib-border-gradient-stops))' },
  { class: 'border-linear-to-[<value>]', styles: '--jib-border-gradient-position: <value>' },
  { class: 'border-linear-<angle>', styles: '--jib-border-gradient: linear-gradient(<angle>deg var(--jib-gradient-interpolation), var(--jib-border-gradient-stops))' },
  { class: 'border-radial', styles: '--jib-border-gradient: radial-gradient(var(--jib-gradient-interpolation), var(--jib-border-gradient-stops))' },
  { class: 'border-radial-[<value>]', styles: '--jib-border-gradient: radial-gradient(<value>, var(--jib-border-gradient-stops))' },
  { class: 'border-conic-<angle>', styles: '--jib-border-gradient-angle: <angle>deg; --jib-border-gradient: conic-gradient(from var(--jib-border-gradient-angle) var(--jib-gradient-interpolation), var(--jib-border-gradient-stops))' },
  { class: 'border-from-<color>', styles: '--jib-border-gradient-from: <color>' },
  { class: 'border-from-<color>/<alpha>', styles: '--jib-border-gradient-from: color-mix(in oklab, <color> <alpha>, transparent)' },
  { class: 'border-from-<percentage>', styles: '--jib-border-gradient-from-position: <percentage>' },
  { class: 'border-from-[<value>]', styles: '--jib-border-gradient-from: <value>' },
  { class: 'border-via-<color>', styles: '--jib-border-gradient-via: <color>' },
  { class: 'border-via-<color>/<alpha>', styles: '--jib-border-gradient-via: color-mix(in oklab, <color> <alpha>, transparent)' },
  { class: 'border-via-<percentage>', styles: '--jib-border-gradient-via-position: <percentage>' },
  { class: 'border-via-[<value>]', styles: '--jib-border-gradient-via: <value>' },
  { class: 'border-to-<color>', styles: '--jib-border-gradient-to: <color>' },
  { class: 'border-to-<color>/<alpha>', styles: '--jib-border-gradient-to: color-mix(in oklab, <color> <alpha>, transparent)' },
  { class: 'border-to-<percentage>', styles: '--jib-border-gradient-to-position: <percentage>' },
  { class: 'border-to-[<value>]', styles: '--jib-border-gradient-to: <value>' },
]" />

## Basic usage

### Linear gradient border

Use `border-linear-to-<direction>` with `border-from-<color>` and `border-to-<color>` to create a gradient border:

<Example>
  <div class="bg-white border-4 border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-xl p-6 text-center font-mono text-xs text-gray-500">
    border-linear-to-r border-from-pink-500 border-to-cyan-500
  </div>
</Example>

### With a background color

Border gradients work alongside Tailwind's `bg-*` utilities. Apply a `bg-*` class and the module layers your background inside the border gradient.

#### Solid background colors

<Example>
  <div class="flex gap-4">
    <div class="flex-1 bg-white border-4 border-linear-to-r border-from-orange-500 border-to-violet-500 rounded-xl p-6 text-center font-mono text-xs text-gray-500">bg-white</div>
    <div class="flex-1 bg-gray-900 border-4 border-linear-to-r border-from-orange-500 border-to-violet-500 rounded-xl p-6 text-center font-mono text-xs text-gray-400">bg-gray-900</div>
    <div class="flex-1 bg-sky-100 border-4 border-linear-to-r border-from-orange-500 border-to-violet-500 rounded-xl p-6 text-center font-mono text-xs text-gray-500">bg-sky-100</div>
  </div>
</Example>

#### Gradient backgrounds

Tailwind gradient backgrounds and border gradients coexist. The background gradient layers inside the padding area while the border gradient fills the border area. The background and border gradient types don't need to match:

<Example>
  <div class="flex flex-col gap-3">
    <div class="flex gap-4">
      <div class="flex-1 bg-linear-to-r from-indigo-500 to-purple-500 border-4 border-linear-to-r border-from-amber-400 border-to-rose-500 rounded-xl p-6 text-center font-mono text-xs text-white">bg-linear + border-linear</div>
      <div class="flex-1 bg-linear-to-br from-emerald-400 to-cyan-500 border-4 border-conic-0 border-from-amber-400 border-via-rose-500 border-to-emerald-500 rounded-xl p-6 text-center font-mono text-xs text-white">bg-linear + border-conic</div>
    </div>
    <div class="flex gap-4">
      <div class="flex-1 bg-radial from-blue-500 to-purple-900 border-4 border-linear-to-r border-from-amber-400 border-to-emerald-500 rounded-xl p-6 text-center font-mono text-xs text-white">bg-radial + border-linear</div>
      <div class="flex-1 bg-conic from-blue-500 via-green-500 to-purple-500 border-4 border-radial border-from-amber-400 border-to-emerald-500 rounded-xl p-6 text-center font-mono text-xs text-white">bg-conic + border-radial</div>
    </div>
  </div>
</Example>

#### Inherited backgrounds

The background color does not inherit from parent elements. The module registers `--jib-background-image` with `inherits: false`, so a child without its own `bg-*` class gets the initial value, `canvas`, rather than the parent's color:

<Example>
  <div class="bg-slate-800 rounded-xl p-6">
    <p class="text-sm text-slate-300 mb-3 font-mono">Parent: bg-slate-800</p>
    <div class="flex gap-4">
      <div class="flex-1 border-4 border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-lg p-4 text-center font-mono text-xs text-gray-500">No bg-* class (canvas)</div>
      <div class="flex-1 bg-slate-800 border-4 border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-lg p-4 text-center font-mono text-xs text-slate-300">bg-slate-800 (explicit)</div>
    </div>
  </div>
</Example>

#### Transparent and semi-transparent backgrounds

The border-gradient technique works by stacking two background layers: a `padding-box` layer, your background, on top of a `border-box` layer, the gradient. A transparent or semi-transparent background lets the gradient layer show through into the content area, not just the border:

<Example>
  <div class="flex gap-4">
    <div class="flex-1 bg-white border-4 border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-xl p-6 text-center font-mono text-xs text-gray-500">bg-white (opaque)</div>
    <!-- TODO: fix bg-*/opacity modifier not working with border-gradient (--tw-bg-image not receiving opacity value) -->
    <div class="flex-1 bg-white/50 border-4 border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-xl p-6 text-center font-mono text-xs text-gray-500">bg-white/50 (gradient bleeds through)</div>
    <div class="flex-1 bg-transparent border-4 border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-xl p-6 text-center font-mono text-xs text-gray-500">bg-transparent (fully visible)</div>
  </div>
</Example>

This falls out of the clipping technique. The `padding-box` layer must be fully opaque to mask the gradient behind it. If you want a see-through content area with only a gradient ring, reach for `mask-composite` instead: paint the gradient over the whole element and mask out everything but the border. It keeps `border-radius`, unlike `border-image`, and costs you a narrower support floor (Chrome 120+, Firefox 53+, Safari 15.4+).

### What doesn't work

::: warning
Backgrounds set outside Tailwind's `bg-*` classes won't show through the border gradient. The border-gradient utilities set a `background` shorthand that replaces any `background` or `background-color` from custom CSS classes or inline styles.
:::

The border-gradient utility's `background` shorthand overwrites a background set by a custom CSS class or an inline style. `--tw-bg-image` stays at its initial value, `canvas`, so the element loses the background you meant it to have:

```html
<!-- ✗ Custom class: the background gets overwritten -->
<style>
  .my-card {
    background: #e0f2fe;
  }
</style>
<div class="my-card border-4 border-linear-to-r border-from-pink-500 border-to-cyan-500">
  Background will be canvas, not #e0f2fe
</div>

<!-- ✗ Inline style: same issue -->
<div
  style="background-color: #e0f2fe"
  class="border-4 border-linear-to-r border-from-pink-500 border-to-cyan-500"
>
  Background will be canvas, not #e0f2fe
</div>
```

#### Workarounds

Route the color through Tailwind's `bg-*` pipeline so it feeds into `--tw-bg-image`:

```html
<!-- ✓ Arbitrary value -->
<div class="bg-[#e0f2fe] border-4 border-linear-to-r border-from-pink-500 border-to-cyan-500">
  ...
</div>

<!-- ✓ Custom property via bare-value syntax -->
<div class="bg-(--my-color) border-4 border-linear-to-r border-from-pink-500 border-to-cyan-500">
  ...
</div>
```

Or set `--tw-bg-image` directly to bypass the `bg-*` utility:

```html
<!-- ✓ Setting the custom property directly -->
<div
  style="--tw-bg-image: linear-gradient(#e0f2fe 0 0)"
  class="border-4 border-linear-to-r border-from-pink-500 border-to-cyan-500"
>
  ...
</div>
```

## Gradient direction

### Directional

Use `border-linear-to-{t|tr|r|br|b|bl|l|tl}` for predefined directions:

<Example>
  <div class="grid grid-cols-4 gap-3 w-full max-w-xl">
    <div class="border-4 border-linear-to-t border-from-rose-500 border-to-teal-400 rounded-lg p-4 text-center font-mono text-[11px] text-gray-500 bg-white">border-linear-to-t</div>
    <div class="border-4 border-linear-to-tr border-from-rose-500 border-to-teal-400 rounded-lg p-4 text-center font-mono text-[11px] text-gray-500 bg-white">border-linear-to-tr</div>
    <div class="border-4 border-linear-to-r border-from-rose-500 border-to-teal-400 rounded-lg p-4 text-center font-mono text-[11px] text-gray-500 bg-white">border-linear-to-r</div>
    <div class="border-4 border-linear-to-br border-from-rose-500 border-to-teal-400 rounded-lg p-4 text-center font-mono text-[11px] text-gray-500 bg-white">border-linear-to-br</div>
    <div class="border-4 border-linear-to-b border-from-rose-500 border-to-teal-400 rounded-lg p-4 text-center font-mono text-[11px] text-gray-500 bg-white">border-linear-to-b</div>
    <div class="border-4 border-linear-to-bl border-from-rose-500 border-to-teal-400 rounded-lg p-4 text-center font-mono text-[11px] text-gray-500 bg-white">border-linear-to-bl</div>
    <div class="border-4 border-linear-to-l border-from-rose-500 border-to-teal-400 rounded-lg p-4 text-center font-mono text-[11px] text-gray-500 bg-white">border-linear-to-l</div>
    <div class="border-4 border-linear-to-tl border-from-rose-500 border-to-teal-400 rounded-lg p-4 text-center font-mono text-[11px] text-gray-500 bg-white">border-linear-to-tl</div>
  </div>
</Example>

### Custom angle

Use `border-linear-<angle>` for a specific angle in degrees. Prefix with `-` for negative angles:

<Example>
  <div class="flex gap-3">
    <div class="border-4 border-linear-45 border-from-amber-400 border-to-indigo-600 rounded-xl p-6 text-center font-mono text-xs text-gray-500 bg-white">border-linear-45</div>
    <div class="border-4 border-linear-65 border-from-amber-400 border-to-indigo-600 rounded-xl p-6 text-center font-mono text-xs text-gray-500 bg-white">border-linear-65</div>
    <div class="border-4 border-linear-135 border-from-amber-400 border-to-indigo-600 rounded-xl p-6 text-center font-mono text-xs text-gray-500 bg-white">border-linear-135</div>
    <div class="border-4 -border-linear-45 border-from-amber-400 border-to-indigo-600 rounded-xl p-6 text-center font-mono text-xs text-gray-500 bg-white">-border-linear-45</div>
  </div>
</Example>

## Color stops

### Setting gradient colors

Use `border-from-<color>`, `border-via-<color>`, and `border-to-<color>` to set gradient color stops. These accept any Tailwind color, including `transparent` and `inherit`:

<Example>
  <div class="flex flex-col gap-3 w-full max-w-xl">
    <div class="border-4 border-linear-to-r border-from-pink-500 border-to-blue-500 rounded-lg p-4 bg-white font-mono text-xs text-gray-500">border-from-pink-500 border-to-blue-500</div>
    <div class="border-4 border-linear-to-r border-from-pink-500 border-via-yellow-400 border-to-blue-500 rounded-lg p-4 bg-white font-mono text-xs text-gray-500">border-from-pink-500 border-via-yellow-400 border-to-blue-500</div>
    <div class="border-4 border-linear-to-r border-from-blue-500 border-to-transparent rounded-lg p-4 bg-white font-mono text-xs text-gray-500">border-from-blue-500 border-to-transparent</div>
    <div class="border-4 border-linear-to-r border-from-inherit border-to-cyan-500 rounded-lg p-4 bg-white font-mono text-xs text-gray-500">border-from-inherit (resolves to registered initial value)</div>
  </div>
</Example>

<!-- llm-context: border-from-inherit sets --jib-border-gradient-from: inherit. Because this property is registered with inherits: false and initial-value: #0000, inherit resolves to transparent, not currentColor or the text color. -->

### Stop opacity

Every stop takes an opacity modifier in the three spellings Tailwind's own color utilities accept — a bare number is a percentage, a bracketed percentage passes through, and a bracketed number is a 0–1 alpha:

```html
<div class="border-linear-to-r border-from-pink-500/50 border-to-cyan-500"></div>
<div class="border-linear-to-r border-from-pink-500/[50%] border-to-cyan-500"></div>
<div class="border-linear-to-r border-from-pink-500/[.5] border-to-cyan-500"></div>
```

Pair a faded stop with `border-to-transparent` for a glow that falls off rather than ending on a hard edge:

<Example>
  <div class="flex flex-col gap-3 w-full max-w-xl">
    <div class="border-4 border-linear-to-r border-from-pink-500/50 border-to-cyan-500 rounded-lg p-4 bg-white font-mono text-xs text-gray-500">border-from-pink-500/50 border-to-cyan-500</div>
    <div class="border-4 border-linear-to-r border-from-pink-500 border-via-white/[50%] border-to-cyan-500 rounded-lg p-4 bg-white font-mono text-xs text-gray-500">border-via-white/[50%]</div>
    <div class="border-8 border-radial border-from-pink-500/50 border-to-transparent rounded-lg p-4 bg-white font-mono text-xs text-gray-500">border-radial border-from-pink-500/50 border-to-transparent</div>
  </div>
</Example>

### Setting gradient stop positions

Use `border-from-<number>%`, `border-via-<number>%`, and `border-to-<number>%` to set where each color stops:

<Example>
  <div class="flex flex-col gap-3 w-full max-w-xl">
    <div class="border-4 border-linear-to-r border-from-rose-500 border-from-10% border-via-amber-400 border-via-30% border-to-cyan-500 border-to-90% rounded-lg p-4 bg-white font-mono text-xs text-gray-500">
      border-from-10% border-via-30% border-to-90%
    </div>
  </div>
</Example>

## Radial gradients

Use `border-radial` for a gradient that radiates from the center. Use bracket notation to set a custom position, either percentage-based or keyword-based:

<Example>
  <div class="flex gap-4">
    <div class="flex flex-col items-center gap-2">
      <!-- TODO: fix bug where border-from-% and border-to-% stop positions don't apply without a border-via-* stop present -->
      <div class="size-36 border-16 border-radial border-from-yellow-400 border-from-0% border-via-yellow-400  border-via-30% border-to-violet-600 border-to-100% rounded-full bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">border-radial border-via-30% border-to-100%</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="size-36 border-8 border-radial-[at_25%_25%] border-from-white border-to-rose-600 rounded-full bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">border-radial-[at_25%_25%]</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="size-36 border-8 border-radial-[at_top] border-from-lime-400 border-to-indigo-600 rounded-full bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">border-radial-[at_top]</span>
    </div>
  </div>
</Example>

## Conic gradients

Use `border-conic-<angle>` for a gradient that sweeps around a center point. Prefix with `-` for negative start angles:

<Example>
  <div class="flex gap-4 flex-wrap">
    <div class="flex flex-col items-center gap-2">
      <div class="size-36 border-8 border-conic-0 border-from-orange-500 border-to-violet-600 rounded-full bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">border-conic-0</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="size-36 border-8 border-conic-90 border-from-orange-500 border-to-violet-600 rounded-full bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">border-conic-90</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="size-36 border-8 border-conic-180 border-from-orange-500 border-to-violet-600 rounded-full bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">border-conic-180</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="size-36 border-8 -border-conic-45 border-from-rose-500 border-via-amber-400 border-to-rose-500 rounded-full bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">-border-conic-45</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="size-36 border-8 border-conic/longer border-from-red-500 border-to-cyan-500 rounded-full bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">border-conic/longer</span>
    </div>
  </div>
</Example>

## Interpolation modes

Control how colors blend using the slash modifier on the gradient type. The default is `oklab`. See the [Color Spaces guide](/guide/color-spaces) for an overview of how these spaces differ.

### Linear

<Example stretch>
  <div class="grid grid-cols-4 gap-3 w-full">
    <div class="flex flex-col items-center gap-2">
      <div class="w-full h-12 border-4 border-linear/srgb border-from-red-500 border-to-cyan-500 rounded-lg bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/srgb</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-full h-12 border-4 border-linear/hsl border-from-red-500 border-to-cyan-500 rounded-lg bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/hsl</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-full h-12 border-4 border-linear/oklab border-from-red-500 border-to-cyan-500 rounded-lg bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/oklab</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-full h-12 border-4 border-linear/oklch border-from-red-500 border-to-cyan-500 rounded-lg bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/oklch</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-full h-12 border-4 border-linear/longer border-from-red-500 border-to-cyan-500 rounded-lg bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/longer</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-full h-12 border-4 border-linear/shorter border-from-red-500 border-to-cyan-500 rounded-lg bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/shorter</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-full h-12 border-4 border-linear/increasing border-from-red-500 border-to-cyan-500 rounded-lg bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/increasing</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-full h-12 border-4 border-linear/decreasing border-from-red-500 border-to-cyan-500 rounded-lg bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/decreasing</span>
    </div>
  </div>
</Example>

The same 8 modifiers apply to `border-radial` and `border-conic` gradients: `border-radial/oklch`, `border-conic/longer`, etc.

### Choosing an interpolation mode

See [Color Spaces](./color-spaces.md) for a deeper look at how each space affects blending.

| Mode               | Best for                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| `/oklab` (default) | Smooth, perceptually uniform blends. No hue shifts. Best general-purpose choice.                 |
| `/srgb`            | Classic RGB blending. Can produce muddy midpoints between complementary colors.                  |
| `/hsl`             | Hue-based blending. Predictable hue transitions but can produce unexpected bright or gray bands. |
| `/oklch`           | Perceptually uniform with hue control. Good for rainbow-like gradients.                          |
| `/longer`          | Takes the long way around the hue wheel in oklch. Creates rainbow effects between two colors.    |
| `/shorter`         | Shortest path around the hue wheel (default hue interpolation in oklch).                         |
| `/increasing`      | Always moves clockwise around the hue wheel.                                                     |
| `/decreasing`      | Always moves counter-clockwise around the hue wheel.                                             |

## Using a custom value

Use bracket notation for custom colors and angles. Color stops accept any CSS color format: hex, `rgb()`, `hsl()`, `oklch()`:

<Example>
  <div class="flex flex-col gap-3 w-full max-w-xl">
    <div class="flex flex-col items-center gap-2">
      <div class="w-full border-4 border-linear-[135deg] border-from-[#ff6b35] border-to-[#1a1a2e] rounded-xl p-6 bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">border-linear-[135deg] border-from-[#ff6b35]</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-full border-4 border-linear-to-r border-from-[oklch(0.6_0.25_330)] border-to-[oklch(0.7_0.2_200)] rounded-xl p-6 bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">border-from-[oklch(0.6_0.25_330)] border-to-[oklch(0.7_0.2_200)]</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="w-full border-4 border-linear-to-r border-from-[hsl(330,80%,50%)] border-to-[hsl(200,80%,50%)] rounded-xl p-6 bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">border-from-[hsl(330,80%,50%)] border-to-[hsl(200,80%,50%)]</span>
    </div>
  </div>
</Example>

## Using a custom variable

Reference CSS custom properties with `(--var)`. Where a utility accepts more than one kind of value, add a type hint — `(type:--var)` — so Tailwind knows which one you mean:

<Example>
  <div class="border-4 border-linear-to-r border-from-(color:--brand-from) border-to-(color:--brand-to) rounded-xl p-6 bg-white text-center font-mono text-xs text-gray-500 [--brand-from:#ff6b35] [--brand-to:#6366f1]">
    border-from-(color:--brand-from) border-to-(color:--brand-to)
  </div>
</Example>

The stop utilities take either a color or a position, so those need the hint. The rest take one kind of value and accept the plain form:

| Utility                  | Hint         | Example                                 |
| ------------------------ | ------------ | --------------------------------------- |
| `border-from-*`          | **required** | `border-from-(color:--brand-from)`      |
| `border-from-*`          | **required** | `border-from-(percentage:--stop-start)` |
| `border-via-*`           | **required** | `border-via-(color:--brand-accent)`     |
| `border-to-*`            | **required** | `border-to-(color:--brand-to)`          |
| `border-to-*`            | **required** | `border-to-(percentage:--stop-end)`     |
| `border-linear-*`        | none         | `border-linear-(--angle)`               |
| `border-linear-to-*`     | none         | `border-linear-to-(--direction)`        |
| `border-conic-*`         | none         | `border-conic-(--start-angle)`          |
| `border-radial-*`        | none         | `border-radial-(--position)`            |
| `border-spin-duration-*` | none         | `border-spin-duration-(--speed)`        |

An untyped variable on `border-from-*`, `border-via-*` or `border-to-*` matches nothing and emits no rule, so the stop keeps its default rather than failing loudly.

## Applying conditionally

### Hover and focus states

Prefix a border gradient utility with a state variant like `hover:*` to only apply it in that state:

<Example>
  <div class="border-4 border-linear-to-r border-from-blue-500 border-to-cyan-500 hover:border-from-pink-600 hover:border-to-amber-500 rounded-xl p-6 bg-white text-center font-mono text-xs text-gray-500 transition-colors cursor-pointer">
    Hover to shift gradient
  </div>
</Example>

## Border width

The gradient fills whatever border width you set. Thicker borders show more of the gradient:

<Example>
  <div class="flex gap-4">
    <div class="flex-1 border border-linear-to-r border-from-rose-500 border-to-cyan-500 rounded-lg p-4 bg-white text-center font-mono text-xs text-gray-500">border (1px)</div>
    <div class="flex-1 border-2 border-linear-to-r border-from-rose-500 border-to-cyan-500 rounded-lg p-4 bg-white text-center font-mono text-xs text-gray-500">border-2</div>
    <div class="flex-1 border-4 border-linear-to-r border-from-rose-500 border-to-cyan-500 rounded-lg p-4 bg-white text-center font-mono text-xs text-gray-500">border-4</div>
    <div class="flex-1 border-8 border-linear-to-r border-from-rose-500 border-to-cyan-500 rounded-lg p-4 bg-white text-center font-mono text-xs text-gray-500">border-8</div>
  </div>
</Example>

## Border style and border color

The gradient is a background layer clipped to `border-box` with `border-color: transparent`. What you see depends on how `border-color` and `border-style` paint over it.

With the default transparent `border-color`, every border style shows the gradient. A solid `border-color` hides it, a semi-transparent one tints it, and dashed, dotted or double styles show the gradient in their gaps.

<details>
<summary>Detailed interaction examples</summary>

### Default (transparent border color)

With `border-color: transparent`, all border styles look identical. The gradient shows through everywhere:

<Example stretch>
  <div class="grid grid-cols-4 gap-3 w-full">
    <div class="border-8 border-solid border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-lg p-4 text-center font-mono text-[11px] text-gray-500 bg-white">solid</div>
    <div class="border-8 border-dashed border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-lg p-4 text-center font-mono text-[11px] text-gray-500 bg-white">dashed</div>
    <div class="border-8 border-dotted border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-lg p-4 text-center font-mono text-[11px] text-gray-500 bg-white">dotted</div>
    <div class="border-8 border-double border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-lg p-4 text-center font-mono text-[11px] text-gray-500 bg-white">double</div>
  </div>
</Example>

### Solid border color hides the gradient

<Example stretch>
  <div class="grid grid-cols-4 gap-3 w-full">
    <div class="border-8 border-amber-500 border-solid border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-lg p-4 text-center font-mono text-[11px] text-gray-500 bg-white">solid</div>
    <div class="border-8 border-amber-500 border-dashed border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-lg p-4 text-center font-mono text-[11px] text-gray-500 bg-white">dashed</div>
    <div class="border-8 border-amber-500 border-dotted border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-lg p-4 text-center font-mono text-[11px] text-gray-500 bg-white">dotted</div>
    <div class="border-8 border-amber-500 border-double border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-lg p-4 text-center font-mono text-[11px] text-gray-500 bg-white">double</div>
  </div>
</Example>

### Semi-transparent border color tints the gradient

<Example stretch>
  <div class="grid grid-cols-4 gap-3 w-full">
    <div class="border-8 border-amber-500/50 border-solid border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-lg p-4 text-center font-mono text-[11px] text-gray-500 bg-white">solid</div>
    <div class="border-8 border-amber-500/50 border-dashed border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-lg p-4 text-center font-mono text-[11px] text-gray-500 bg-white">dashed</div>
    <div class="border-8 border-amber-500/50 border-dotted border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-lg p-4 text-center font-mono text-[11px] text-gray-500 bg-white">dotted</div>
    <div class="border-8 border-amber-500/50 border-double border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-lg p-4 text-center font-mono text-[11px] text-gray-500 bg-white">double</div>
  </div>
</Example>

</details>

## How it works

The technique is CSS background clipping. The utility sets a transparent border, then stacks two background layers behind it:

1. **Padding-box layer.** Your background color, clipped to the content and padding area
2. **Border-box layer.** The gradient, filling the whole box including the border area

The border area shows the gradient because the padding-box background doesn't cover it. This is a pure CSS technique that works with `border-radius` and doesn't require pseudo-elements.

For animated spinning borders, see [Border Spin](/guide/border-spin).

## Import

Included in `@import 'tw-jib-css'`. To import individually:

```css
@import 'tw-jib-css/border-gradient';
```

<BaselineSupport :features="['registered-custom-properties', 'gradient-interpolation']" />
