---
title: Border Gradient
---

<!-- llm-context: border-gradient module — gradient borders via CSS background padding-box/border-box clipping. Supports linear, radial, and conic gradients with 8 interpolation modes and animated spin. No pseudo-elements or JavaScript. -->

# Border Gradient

Apply gradient borders using CSS background clipping — no pseudo-elements or JavaScript. Supports linear, radial, and conic gradients with colour stop positions and 8 interpolation modes. For animated spinning borders, see [Border Spin](/guide/border-spin).

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/ripple';
@import 'tw-jib-css/border-gradient';
```
Note: `border-gradient` depends on `ripple` (for `--tw-ripple-image`).
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'border-linear-to-t', styles: '--tw-border-gradient: linear-gradient(to top, var(--tw-border-gradient-stops))' },
  { class: 'border-linear-to-tr', styles: '--tw-border-gradient: linear-gradient(to top right, var(--tw-border-gradient-stops))' },
  { class: 'border-linear-to-r', styles: '--tw-border-gradient: linear-gradient(to right, var(--tw-border-gradient-stops))' },
  { class: 'border-linear-to-br', styles: '--tw-border-gradient: linear-gradient(to bottom right, var(--tw-border-gradient-stops))' },
  { class: 'border-linear-to-b', styles: '--tw-border-gradient: linear-gradient(to bottom, var(--tw-border-gradient-stops))' },
  { class: 'border-linear-to-bl', styles: '--tw-border-gradient: linear-gradient(to bottom left, var(--tw-border-gradient-stops))' },
  { class: 'border-linear-to-l', styles: '--tw-border-gradient: linear-gradient(to left, var(--tw-border-gradient-stops))' },
  { class: 'border-linear-to-tl', styles: '--tw-border-gradient: linear-gradient(to top left, var(--tw-border-gradient-stops))' },
  { class: 'border-linear-<angle>', styles: '--tw-border-gradient: linear-gradient(<angle>deg, var(--tw-border-gradient-stops))' },
  { class: 'border-radial', styles: '--tw-border-gradient: radial-gradient(var(--tw-border-gradient-stops))' },
  { class: 'border-radial-[<value>]', styles: '--tw-border-gradient: radial-gradient(<value>, var(--tw-border-gradient-stops))' },
  { class: 'border-conic-<angle>', styles: '--tw-border-gradient: conic-gradient(from <angle>deg, var(--tw-border-gradient-stops))' },
  { class: 'border-from-<color>', styles: '--tw-border-gradient-from: <color>' },
  { class: 'border-from-<percentage>', styles: '--tw-border-gradient-from-position: <percentage>' },
  { class: 'border-from-[<value>]', styles: '--tw-border-gradient-from: <value>' },
  { class: 'border-via-<color>', styles: '--tw-border-gradient-via: <color>' },
  { class: 'border-via-<percentage>', styles: '--tw-border-gradient-via-position: <percentage>' },
  { class: 'border-via-[<value>]', styles: '--tw-border-gradient-via: <value>' },
  { class: 'border-to-<color>', styles: '--tw-border-gradient-to: <color>' },
  { class: 'border-to-<percentage>', styles: '--tw-border-gradient-to-position: <percentage>' },
  { class: 'border-to-[<value>]', styles: '--tw-border-gradient-to: <value>' },
]" />

## Basic Usage

### Linear gradient border

Use `border-linear-to-{direction}` with `border-from-{color}` and `border-to-{color}` to create a gradient border:

<Example>
  <div class="bg-white border-4 border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-xl p-6 text-center font-mono text-xs text-gray-500">
    border-linear-to-r border-from-pink-500 border-to-cyan-500
  </div>
</Example>

### With a background colour

Border gradients work alongside Tailwind's `bg-*` utilities. When you apply a `bg-*` class, the module layers your background inside the border gradient automatically.

#### Solid background colours

<Example>
  <div class="flex gap-4">
    <div class="flex-1 bg-white border-4 border-linear-to-r border-from-orange-500 border-to-violet-500 rounded-xl p-6 text-center font-mono text-xs text-gray-500">bg-white</div>
    <div class="flex-1 bg-gray-900 border-4 border-linear-to-r border-from-orange-500 border-to-violet-500 rounded-xl p-6 text-center font-mono text-xs text-gray-400">bg-gray-900</div>
    <div class="flex-1 bg-sky-100 border-4 border-linear-to-r border-from-orange-500 border-to-violet-500 rounded-xl p-6 text-center font-mono text-xs text-gray-500">bg-sky-100</div>
  </div>
</Example>

#### Gradient backgrounds

Tailwind gradient backgrounds and border gradients coexist — the background gradient layers inside the padding area while the border gradient fills the border area. The background and border gradient types don't need to match:

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

The background colour does not inherit from parent elements. The `--tw-bg-color` custom property is registered with `inherits: false`, so a child element without its own `bg-*` class gets the initial value (`canvas`) rather than the parent's colour:

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

The border-gradient technique works by stacking two background layers — a `padding-box` layer (your background) on top of a `border-box` layer (the gradient). A transparent or semi-transparent background lets the gradient layer show through into the content area, not just the border:

<Example>
  <div class="flex gap-4">
    <div class="flex-1 bg-white border-4 border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-xl p-6 text-center font-mono text-xs text-gray-500">bg-white (opaque)</div>
    <!-- TODO: fix bg-*/opacity modifier not working with border-gradient (--tw-bg-image not receiving opacity value) -->
    <div class="flex-1 bg-white/50 border-4 border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-xl p-6 text-center font-mono text-xs text-gray-500">bg-white/50 (gradient bleeds through)</div>
    <div class="flex-1 bg-transparent border-4 border-linear-to-r border-from-pink-500 border-to-cyan-500 rounded-xl p-6 text-center font-mono text-xs text-gray-500">bg-transparent (fully visible)</div>
  </div>
</Example>

This is inherent to the clipping technique — the `padding-box` layer must be fully opaque to mask the gradient behind it. If you want a see-through content area with only a gradient border, this approach won't work; you'd need a pseudo-element or `border-image` technique instead.

### What doesn't work

::: warning
Backgrounds set outside Tailwind's `bg-*` classes won't show through the border gradient. The border-gradient utilities set a `background` shorthand that replaces any `background` or `background-color` from custom CSS classes or inline styles.
:::

A background set via a custom CSS class or inline style is overwritten by the border-gradient utility's `background` shorthand. The `--tw-bg-image` property stays at its initial value (`canvas`), so the element loses its intended background:

```html
<!-- ✗ Custom class — background is overwritten -->
<style>.my-card { background: #e0f2fe; }</style>
<div class="my-card border-4 border-linear-to-r border-from-pink-500 border-to-cyan-500">
  Background will be canvas, not #e0f2fe
</div>

<!-- ✗ Inline style — same issue -->
<div style="background-color: #e0f2fe" class="border-4 border-linear-to-r border-from-pink-500 border-to-cyan-500">
  Background will be canvas, not #e0f2fe
</div>
```

#### Workarounds

Route the colour through Tailwind's `bg-*` pipeline so it feeds into `--tw-bg-image`:

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
<div style="--tw-bg-image: linear-gradient(#e0f2fe 0 0)" class="border-4 border-linear-to-r border-from-pink-500 border-to-cyan-500">
  ...
</div>
```

## Gradient Direction

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

Use `border-linear-{angle}` for a specific angle in degrees. Prefix with `-` for negative angles:

<Example>
  <div class="flex gap-3">
    <div class="border-4 border-linear-45 border-from-amber-400 border-to-indigo-600 rounded-xl p-6 text-center font-mono text-xs text-gray-500 bg-white">border-linear-45</div>
    <div class="border-4 border-linear-65 border-from-amber-400 border-to-indigo-600 rounded-xl p-6 text-center font-mono text-xs text-gray-500 bg-white">border-linear-65</div>
    <div class="border-4 border-linear-135 border-from-amber-400 border-to-indigo-600 rounded-xl p-6 text-center font-mono text-xs text-gray-500 bg-white">border-linear-135</div>
    <div class="border-4 -border-linear-45 border-from-amber-400 border-to-indigo-600 rounded-xl p-6 text-center font-mono text-xs text-gray-500 bg-white">-border-linear-45</div>
  </div>
</Example>

## Colour Stops

### Setting gradient colours

Use `border-from-{color}`, `border-via-{color}`, and `border-to-{color}` to set gradient colour stops. These accept any Tailwind colour, including `transparent` and `inherit`:

<Example>
  <div class="flex flex-col gap-3 w-full max-w-xl">
    <div class="border-4 border-linear-to-r border-from-pink-500 border-to-blue-500 rounded-lg p-4 bg-white font-mono text-xs text-gray-500">border-from-pink-500 border-to-blue-500</div>
    <div class="border-4 border-linear-to-r border-from-pink-500 border-via-yellow-400 border-to-blue-500 rounded-lg p-4 bg-white font-mono text-xs text-gray-500">border-from-pink-500 border-via-yellow-400 border-to-blue-500</div>
    <div class="border-4 border-linear-to-r border-from-blue-500 border-to-transparent rounded-lg p-4 bg-white font-mono text-xs text-gray-500">border-from-blue-500 border-to-transparent</div>
    <div class="border-4 border-linear-to-r border-from-inherit border-to-cyan-500 rounded-lg p-4 bg-white font-mono text-xs text-gray-500">border-from-inherit (resolves to registered initial value)</div>
  </div>
</Example>

<!-- llm-context: border-from-inherit sets --tw-jib--border-gradient-from: inherit. Because this property is registered with inherits: false and initial-value: #0000, inherit resolves to transparent — not currentColor or the text colour. -->

### Setting gradient stop positions

Use `border-from-{n}%`, `border-via-{n}%`, and `border-to-{n}%` to set where each colour stops:

<Example>
  <div class="flex flex-col gap-3 w-full max-w-xl">
    <div class="border-4 border-linear-to-r border-from-rose-500 border-from-10% border-via-amber-400 border-via-30% border-to-cyan-500 border-to-90% rounded-lg p-4 bg-white font-mono text-xs text-gray-500">
      border-from-10% border-via-30% border-to-90%
    </div>
  </div>
</Example>

## Radial Gradients

Use `border-radial` for a gradient that radiates from the centre. Use bracket notation to set a custom position — either percentage-based or keyword-based:

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

## Conic Gradients

Use `border-conic-{angle}` for a gradient that sweeps around a centre point. Prefix with `-` for negative start angles:

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

## Interpolation Modes

Control how colours blend using the slash modifier on the gradient type. The default is `oklab`. See the [Colour Spaces guide](/guide/colour-spaces) for an overview of how these spaces differ.

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

### Radial

<Example>
  <div class="grid grid-cols-4 gap-3 w-full max-w-2xl">
    <div class="flex flex-col items-center gap-2">
      <div class="border-8 border-radial/srgb border-from-red-500 border-to-cyan-500 rounded-full size-24 bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/srgb</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="border-8 border-radial/hsl border-from-red-500 border-to-cyan-500 rounded-full size-24 bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/hsl</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="border-8 border-radial/oklab border-from-red-500 border-to-cyan-500 rounded-full size-24 bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/oklab</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="border-8 border-radial/oklch border-from-red-500 border-to-cyan-500 rounded-full size-24 bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/oklch</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="border-8 border-radial/longer border-from-red-500 border-to-cyan-500 rounded-full size-24 bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/longer</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="border-8 border-radial/shorter border-from-red-500 border-to-cyan-500 rounded-full size-24 bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/shorter</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="border-8 border-radial/increasing border-from-red-500 border-to-cyan-500 rounded-full size-24 bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/increasing</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="border-8 border-radial/decreasing border-from-red-500 border-to-cyan-500 rounded-full size-24 bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/decreasing</span>
    </div>
  </div>
</Example>

### Conic

<Example>
  <div class="grid grid-cols-4 gap-3 w-full max-w-2xl">
    <div class="flex flex-col items-center gap-2">
      <div class="border-8 border-conic/srgb border-from-red-500 border-to-cyan-500 rounded-full size-24 bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/srgb</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="border-8 border-conic/hsl border-from-red-500 border-to-cyan-500 rounded-full size-24 bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/hsl</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="border-8 border-conic/oklab border-from-red-500 border-to-cyan-500 rounded-full size-24 bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/oklab</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="border-8 border-conic/oklch border-from-red-500 border-to-cyan-500 rounded-full size-24 bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/oklch</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="border-8 border-conic/longer border-from-red-500 border-to-cyan-500 rounded-full size-24 bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/longer</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="border-8 border-conic/shorter border-from-red-500 border-to-cyan-500 rounded-full size-24 bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/shorter</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="border-8 border-conic/increasing border-from-red-500 border-to-cyan-500 rounded-full size-24 bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/increasing</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="border-8 border-conic/decreasing border-from-red-500 border-to-cyan-500 rounded-full size-24 bg-white"></div>
      <span class="font-mono text-[11px] text-gray-500">/decreasing</span>
    </div>
  </div>
</Example>

Available modifiers: `/srgb`, `/hsl`, `/oklab`, `/oklch`, `/longer`, `/shorter`, `/increasing`, `/decreasing`

### Choosing an interpolation mode

See [Colour Spaces](./colour-spaces.md) for a deeper look at how each space affects blending.

| Mode | Best for |
| --- | --- |
| `/oklab` (default) | Smooth, perceptually uniform blends. No hue shifts. Best general-purpose choice. |
| `/srgb` | Classic RGB blending. Can produce muddy midpoints between complementary colours. |
| `/hsl` | Hue-based blending. Predictable hue transitions but can produce unexpected bright or grey bands. |
| `/oklch` | Perceptually uniform with hue control. Good for rainbow-like gradients. |
| `/longer` | Takes the long way around the hue wheel in oklch. Creates rainbow effects between two colours. |
| `/shorter` | Shortest path around the hue wheel (default hue interpolation in oklch). |
| `/increasing` | Always moves clockwise around the hue wheel. |
| `/decreasing` | Always moves counter-clockwise around the hue wheel. |

## Using a custom value

Use bracket notation for custom colours and angles. Colour stops accept any CSS colour format — hex, `rgb()`, `hsl()`, `oklch()`, etc.:

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

Reference CSS custom properties with the typed bare-value syntax `(type:--var)`. The type hint tells Tailwind how to interpret the variable:

<Example>
  <div class="border-4 border-linear-to-r border-from-(color:--brand-from) border-to-(color:--brand-to) rounded-xl p-6 bg-white text-center font-mono text-xs text-gray-500" style="--brand-from: #ff6b35; --brand-to: #6366f1">
    border-from-(color:--brand-from) border-to-(color:--brand-to)
  </div>
</Example>

All border gradient utilities that accept custom properties:

| Utility | Type hint | Example |
| --- | --- | --- |
| `border-from-*` | `color` | `border-from-(color:--brand-from)` |
| `border-via-*` | `color` | `border-via-(color:--brand-accent)` |
| `border-to-*` | `color` | `border-to-(color:--brand-to)` |
| `border-from-*` | `percentage` | `border-from-(percentage:--stop-start)` |
| `border-to-*` | `percentage` | `border-to-(percentage:--stop-end)` |
| `border-linear-*` | `number` | `border-linear-(number:--angle)` |
| `border-conic-*` | `number` | `border-conic-(number:--start-angle)` |

## Applying conditionally

### Hover and focus states

Prefix a border gradient utility with a state variant like `hover:*` to only apply it in that state:

<Example>
  <div class="border-4 border-linear-to-r border-from-blue-500 border-to-cyan-500 hover:border-from-pink-600 hover:border-to-amber-500 rounded-xl p-6 bg-white text-center font-mono text-xs text-gray-500 transition-colors cursor-pointer">
    Hover to shift gradient
  </div>
</Example>


## Border Width

The gradient fills whatever border width you set. Thicker borders show more of the gradient:

<Example>
  <div class="flex gap-4">
    <div class="flex-1 border border-linear-to-r border-from-rose-500 border-to-cyan-500 rounded-lg p-4 bg-white text-center font-mono text-xs text-gray-500">border (1px)</div>
    <div class="flex-1 border-2 border-linear-to-r border-from-rose-500 border-to-cyan-500 rounded-lg p-4 bg-white text-center font-mono text-xs text-gray-500">border-2</div>
    <div class="flex-1 border-4 border-linear-to-r border-from-rose-500 border-to-cyan-500 rounded-lg p-4 bg-white text-center font-mono text-xs text-gray-500">border-4</div>
    <div class="flex-1 border-8 border-linear-to-r border-from-rose-500 border-to-cyan-500 rounded-lg p-4 bg-white text-center font-mono text-xs text-gray-500">border-8</div>
  </div>
</Example>

## How It Works

The gradient border technique uses CSS background clipping. A transparent border is set, then two background layers are stacked:

1. **Padding-box layer** — your background colour, clipped to the content + padding area
2. **Border-box layer** — the gradient, filling the entire box including the border area

The border area shows the gradient because the padding-box background doesn't cover it. This is a pure CSS technique that works with `border-radius` and doesn't require pseudo-elements.

For animated spinning borders, see [Border Spin](/guide/border-spin).
