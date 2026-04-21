---
title: Hatch
---

<!-- llm-context: hatch module — pencil-hatching backgrounds. Converts any colour to three directional hatching layers (primary 12-slot, cross 6-slot, third 6-slot) using oklch relative colour syntax and repeating linear gradients with multiply blend mode. Per-slot alpha is L-range gated with smooth ramps and press-curve modulation (peak = 0.95 − 0.3 × l). Primary slots have alpha floor of 0.35 for baseline coverage. Cross and third are purely L-gated (no floor). Classical hatching angles (35deg primary, +90deg cross, +45deg third). Ink derived from input colour: L squared, C doubled, H preserved. White paper base. Knob utilities: hatch-angle, hatch-stroke, hatch-gap. -->

# Hatch

Pencil-hatching backgrounds for any Tailwind colour. Three directional stroke layers mimic the look of hand-drawn crosshatching. Pure CSS, no images.

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/hatch';
```
:::

::: info Browser Support
Uses CSS relative colour syntax with `oklch(from ...)` and `clamp()` inside alpha channels. Chrome 111+, Safari 16.4+, Firefox 128+.
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'bg-hatch-<color>', styles: 'Sets colour and applies 3-direction hatching pattern with background-blend-mode: multiply' },
  { class: 'bg-hatch-<color>/<opacity>', styles: 'Same with opacity modifier (0–100)' },
  { class: 'bg-hatch-[<value>]', styles: 'Arbitrary colour value' },
  { class: 'hatch-angle-<number>', styles: '--tw-jib--hatch-angle: <number>deg — primary hatching angle' },
  { class: 'hatch-angle-[<angle>]', styles: '--tw-jib--hatch-angle: <angle>' },
  { class: 'hatch-stroke-<number>', styles: '--tw-jib--hatch-stroke: --spacing(<number>) / 4 — line thickness' },
  { class: 'hatch-stroke-[<length>]', styles: '--tw-jib--hatch-stroke: <length>' },
  { class: 'hatch-gap-<number>', styles: '--tw-jib--hatch-gap: --spacing(<number>) / 4 — whitespace between strokes' },
  { class: 'hatch-gap-[<length>]', styles: '--tw-jib--hatch-gap: <length>' },
]" />

## How it works

Three directional hatching layers are composited with `background-blend-mode: multiply` over a white paper base. Each layer is a `repeating-linear-gradient` whose per-slot alpha ramps smoothly with the input colour's oklch lightness.

### Three directions

| Direction | Cell size | Slots | Angle | Activation |
|-----------|----------|-------|-------|------------|
| **Primary** | 12-slot | pA (0,6), pB (1,5,7,11), pC (2,4,8,10), pD (3,9) | 35&deg; | Always on (alpha floor 0.35) |
| **Cross** | 6-slot | c0 (0), c3 (3), c900 (1,2,4,5) | +90&deg; | Mid-to-dark inputs only (no floor) |
| **Third** | 6-slot | t0 (0), t3 (3), t900 (1,2,4,5) | +45&deg; | Dark inputs only (no floor) |

Each slot's ink uses a different L-range ramp threshold — primary slots activate progressively from light to dark, cross slots fire at mid-tones, and third-direction slots only appear at the darkest inputs. All transitions are smooth alpha ramps, not hard snaps.

### Alpha formula

Each slot's alpha is computed as:

```
peak  = 0.95 − 0.3 × l                    (press-curve modulation)
ramp  = clamp(0, (start_l − l) / span, 1)  (L-range gate)
alpha = max(0.35, peak × ramp) × opacity    (primary slots — floor keeps light inputs visible)
alpha = peak × ramp × opacity               (cross & third slots — no floor)
```

### Ink derivation

All slots share the same ink colour, derived from the input:

- **Hue** preserved from input
- **Chroma** doubled (`c * 2`) for vivid ink; stays near sRGB gamut
- **Lightness** squared (`l * l`) — light inputs stay light and chromatic, dark inputs darken aggressively

## Basic Usage

Add `bg-hatch-{color}` to any element:

<Example>
  <div class="flex gap-4">
    <div class="bg-hatch-red-500 size-24 rounded-lg"></div>
    <div class="bg-hatch-blue-500 size-24 rounded-lg"></div>
    <div class="bg-hatch-emerald-500 size-24 rounded-lg"></div>
    <div class="bg-hatch-amber-500 size-24 rounded-lg"></div>
  </div>
</Example>

Darker colours produce denser hatching — the same lightness-based tier system an illustrator would use:

<Example>
  <div class="flex gap-3">
    <div class="bg-hatch-blue-100 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono">blue-100</span></div>
    <div class="bg-hatch-blue-300 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono">blue-300</span></div>
    <div class="bg-hatch-blue-500 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">blue-500</span></div>
    <div class="bg-hatch-blue-700 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">blue-700</span></div>
    <div class="bg-hatch-blue-900 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">blue-900</span></div>
  </div>
</Example>

## Angle

Control the primary hatching angle with `hatch-angle-{number}`. The value is in degrees. Cross and triple angles derive automatically (+90&deg; and +60&deg; respectively). The default is 35&deg; — slightly off-axis feels hand-placed; exact 45&deg; reads digital.

<Example>
  <div class="flex gap-3">
    <div class="bg-hatch-blue-500 hatch-angle-0 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">0</span></div>
    <div class="bg-hatch-blue-500 hatch-angle-35 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">35</span></div>
    <div class="bg-hatch-blue-500 hatch-angle-45 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">45</span></div>
    <div class="bg-hatch-blue-500 hatch-angle-90 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">90</span></div>
    <div class="bg-hatch-blue-500 hatch-angle-135 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">135</span></div>
  </div>
</Example>

## Stroke

Control the line thickness with `hatch-stroke-{number}`. Scales at `--spacing / 4` for fine control (hatch-stroke-1 = 1px, hatch-stroke-4 = 4px). Strokes should not be sub-pixel — browsers anti-alias inconsistently below 1px. The default is 3px.

<Example>
  <div class="flex gap-3">
    <div class="bg-hatch-red-500 hatch-stroke-1 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">stroke-1</span></div>
    <div class="bg-hatch-red-500 hatch-stroke-2 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">stroke-2</span></div>
    <div class="bg-hatch-red-500 hatch-stroke-3 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">stroke-3</span></div>
    <div class="bg-hatch-red-500 hatch-stroke-4 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">stroke-4</span></div>
    <div class="bg-hatch-red-500 hatch-stroke-6 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">stroke-6</span></div>
  </div>
</Example>

## Gap

Control the whitespace between strokes with `hatch-gap-{number}`. Scales at `--spacing / 4` for fine control (hatch-gap-1 = 1px, hatch-gap-4 = 4px). The default is 2px.

<Example>
  <div class="flex gap-3">
    <div class="bg-hatch-blue-500 hatch-gap-1 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">gap-1</span></div>
    <div class="bg-hatch-blue-500 hatch-gap-2 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">gap-2</span></div>
    <div class="bg-hatch-blue-500 hatch-gap-4 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">gap-4</span></div>
    <div class="bg-hatch-blue-500 hatch-gap-8 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">gap-8</span></div>
    <div class="bg-hatch-blue-500 hatch-gap-12 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">gap-12</span></div>
  </div>
</Example>

Gap is additive to stroke — the full cycle is `stroke + gap`. Changing either automatically rescales all three direction cell sizes.

## Opacity

Add an opacity modifier with the `/` syntax to fade the entire pattern — all six hatching layers and the white paper base. The value is a percentage (0–100).

<Example>
  <div class="flex gap-3">
    <div class="bg-hatch-red-500 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">100%</span></div>
    <div class="bg-hatch-red-500/75 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">/75</span></div>
    <div class="bg-hatch-red-500/50 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono">/50</span></div>
    <div class="bg-hatch-red-500/25 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono">/25</span></div>
    <div class="bg-hatch-red-500/10 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono">/10</span></div>
  </div>
</Example>

This scales ink alpha proportionally and makes the white paper semi-transparent, so the pattern can be layered over other content.

<Example>
  <div class="flex gap-3">
    <div class="relative size-24 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-linear-to-br from-sky-400 to-indigo-600"></div>
      <div class="absolute inset-0 bg-hatch-black/50"></div>
      <span class="relative text-xs font-mono text-white flex items-center justify-center h-full">over gradient</span>
    </div>
    <div class="relative size-24 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-linear-to-br from-amber-400 to-rose-500"></div>
      <div class="absolute inset-0 bg-hatch-blue-500/40"></div>
      <span class="relative text-xs font-mono text-white flex items-center justify-center h-full">over gradient</span>
    </div>
  </div>
</Example>

## Tonal Response

Every Tailwind colour at every shade, rendered as hatching. Light colours produce sparse single-direction lines. Mid-tones switch to medium density. Dark colours add crosshatch and triple hatch for maximum coverage. Very light inputs get broken dashes as a textural overlay.

<div class="space-y-4 my-6">
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Slate</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-hatch-slate-50 h-10 rounded-sm" title="slate-50"></div>
      <div class="bg-hatch-slate-100 h-10 rounded-sm" title="slate-100"></div>
      <div class="bg-hatch-slate-200 h-10 rounded-sm" title="slate-200"></div>
      <div class="bg-hatch-slate-300 h-10 rounded-sm" title="slate-300"></div>
      <div class="bg-hatch-slate-400 h-10 rounded-sm" title="slate-400"></div>
      <div class="bg-hatch-slate-500 h-10 rounded-sm" title="slate-500"></div>
      <div class="bg-hatch-slate-600 h-10 rounded-sm" title="slate-600"></div>
      <div class="bg-hatch-slate-700 h-10 rounded-sm" title="slate-700"></div>
      <div class="bg-hatch-slate-800 h-10 rounded-sm" title="slate-800"></div>
      <div class="bg-hatch-slate-900 h-10 rounded-sm" title="slate-900"></div>
      <div class="bg-hatch-slate-950 h-10 rounded-sm" title="slate-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Red</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-hatch-red-50 h-10 rounded-sm" title="red-50"></div>
      <div class="bg-hatch-red-100 h-10 rounded-sm" title="red-100"></div>
      <div class="bg-hatch-red-200 h-10 rounded-sm" title="red-200"></div>
      <div class="bg-hatch-red-300 h-10 rounded-sm" title="red-300"></div>
      <div class="bg-hatch-red-400 h-10 rounded-sm" title="red-400"></div>
      <div class="bg-hatch-red-500 h-10 rounded-sm" title="red-500"></div>
      <div class="bg-hatch-red-600 h-10 rounded-sm" title="red-600"></div>
      <div class="bg-hatch-red-700 h-10 rounded-sm" title="red-700"></div>
      <div class="bg-hatch-red-800 h-10 rounded-sm" title="red-800"></div>
      <div class="bg-hatch-red-900 h-10 rounded-sm" title="red-900"></div>
      <div class="bg-hatch-red-950 h-10 rounded-sm" title="red-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Orange</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-hatch-orange-50 h-10 rounded-sm" title="orange-50"></div>
      <div class="bg-hatch-orange-100 h-10 rounded-sm" title="orange-100"></div>
      <div class="bg-hatch-orange-200 h-10 rounded-sm" title="orange-200"></div>
      <div class="bg-hatch-orange-300 h-10 rounded-sm" title="orange-300"></div>
      <div class="bg-hatch-orange-400 h-10 rounded-sm" title="orange-400"></div>
      <div class="bg-hatch-orange-500 h-10 rounded-sm" title="orange-500"></div>
      <div class="bg-hatch-orange-600 h-10 rounded-sm" title="orange-600"></div>
      <div class="bg-hatch-orange-700 h-10 rounded-sm" title="orange-700"></div>
      <div class="bg-hatch-orange-800 h-10 rounded-sm" title="orange-800"></div>
      <div class="bg-hatch-orange-900 h-10 rounded-sm" title="orange-900"></div>
      <div class="bg-hatch-orange-950 h-10 rounded-sm" title="orange-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Amber</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-hatch-amber-50 h-10 rounded-sm" title="amber-50"></div>
      <div class="bg-hatch-amber-100 h-10 rounded-sm" title="amber-100"></div>
      <div class="bg-hatch-amber-200 h-10 rounded-sm" title="amber-200"></div>
      <div class="bg-hatch-amber-300 h-10 rounded-sm" title="amber-300"></div>
      <div class="bg-hatch-amber-400 h-10 rounded-sm" title="amber-400"></div>
      <div class="bg-hatch-amber-500 h-10 rounded-sm" title="amber-500"></div>
      <div class="bg-hatch-amber-600 h-10 rounded-sm" title="amber-600"></div>
      <div class="bg-hatch-amber-700 h-10 rounded-sm" title="amber-700"></div>
      <div class="bg-hatch-amber-800 h-10 rounded-sm" title="amber-800"></div>
      <div class="bg-hatch-amber-900 h-10 rounded-sm" title="amber-900"></div>
      <div class="bg-hatch-amber-950 h-10 rounded-sm" title="amber-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Green</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-hatch-green-50 h-10 rounded-sm" title="green-50"></div>
      <div class="bg-hatch-green-100 h-10 rounded-sm" title="green-100"></div>
      <div class="bg-hatch-green-200 h-10 rounded-sm" title="green-200"></div>
      <div class="bg-hatch-green-300 h-10 rounded-sm" title="green-300"></div>
      <div class="bg-hatch-green-400 h-10 rounded-sm" title="green-400"></div>
      <div class="bg-hatch-green-500 h-10 rounded-sm" title="green-500"></div>
      <div class="bg-hatch-green-600 h-10 rounded-sm" title="green-600"></div>
      <div class="bg-hatch-green-700 h-10 rounded-sm" title="green-700"></div>
      <div class="bg-hatch-green-800 h-10 rounded-sm" title="green-800"></div>
      <div class="bg-hatch-green-900 h-10 rounded-sm" title="green-900"></div>
      <div class="bg-hatch-green-950 h-10 rounded-sm" title="green-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Cyan</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-hatch-cyan-50 h-10 rounded-sm" title="cyan-50"></div>
      <div class="bg-hatch-cyan-100 h-10 rounded-sm" title="cyan-100"></div>
      <div class="bg-hatch-cyan-200 h-10 rounded-sm" title="cyan-200"></div>
      <div class="bg-hatch-cyan-300 h-10 rounded-sm" title="cyan-300"></div>
      <div class="bg-hatch-cyan-400 h-10 rounded-sm" title="cyan-400"></div>
      <div class="bg-hatch-cyan-500 h-10 rounded-sm" title="cyan-500"></div>
      <div class="bg-hatch-cyan-600 h-10 rounded-sm" title="cyan-600"></div>
      <div class="bg-hatch-cyan-700 h-10 rounded-sm" title="cyan-700"></div>
      <div class="bg-hatch-cyan-800 h-10 rounded-sm" title="cyan-800"></div>
      <div class="bg-hatch-cyan-900 h-10 rounded-sm" title="cyan-900"></div>
      <div class="bg-hatch-cyan-950 h-10 rounded-sm" title="cyan-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Blue</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-hatch-blue-50 h-10 rounded-sm" title="blue-50"></div>
      <div class="bg-hatch-blue-100 h-10 rounded-sm" title="blue-100"></div>
      <div class="bg-hatch-blue-200 h-10 rounded-sm" title="blue-200"></div>
      <div class="bg-hatch-blue-300 h-10 rounded-sm" title="blue-300"></div>
      <div class="bg-hatch-blue-400 h-10 rounded-sm" title="blue-400"></div>
      <div class="bg-hatch-blue-500 h-10 rounded-sm" title="blue-500"></div>
      <div class="bg-hatch-blue-600 h-10 rounded-sm" title="blue-600"></div>
      <div class="bg-hatch-blue-700 h-10 rounded-sm" title="blue-700"></div>
      <div class="bg-hatch-blue-800 h-10 rounded-sm" title="blue-800"></div>
      <div class="bg-hatch-blue-900 h-10 rounded-sm" title="blue-900"></div>
      <div class="bg-hatch-blue-950 h-10 rounded-sm" title="blue-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Violet</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-hatch-violet-50 h-10 rounded-sm" title="violet-50"></div>
      <div class="bg-hatch-violet-100 h-10 rounded-sm" title="violet-100"></div>
      <div class="bg-hatch-violet-200 h-10 rounded-sm" title="violet-200"></div>
      <div class="bg-hatch-violet-300 h-10 rounded-sm" title="violet-300"></div>
      <div class="bg-hatch-violet-400 h-10 rounded-sm" title="violet-400"></div>
      <div class="bg-hatch-violet-500 h-10 rounded-sm" title="violet-500"></div>
      <div class="bg-hatch-violet-600 h-10 rounded-sm" title="violet-600"></div>
      <div class="bg-hatch-violet-700 h-10 rounded-sm" title="violet-700"></div>
      <div class="bg-hatch-violet-800 h-10 rounded-sm" title="violet-800"></div>
      <div class="bg-hatch-violet-900 h-10 rounded-sm" title="violet-900"></div>
      <div class="bg-hatch-violet-950 h-10 rounded-sm" title="violet-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Pink</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-hatch-pink-50 h-10 rounded-sm" title="pink-50"></div>
      <div class="bg-hatch-pink-100 h-10 rounded-sm" title="pink-100"></div>
      <div class="bg-hatch-pink-200 h-10 rounded-sm" title="pink-200"></div>
      <div class="bg-hatch-pink-300 h-10 rounded-sm" title="pink-300"></div>
      <div class="bg-hatch-pink-400 h-10 rounded-sm" title="pink-400"></div>
      <div class="bg-hatch-pink-500 h-10 rounded-sm" title="pink-500"></div>
      <div class="bg-hatch-pink-600 h-10 rounded-sm" title="pink-600"></div>
      <div class="bg-hatch-pink-700 h-10 rounded-sm" title="pink-700"></div>
      <div class="bg-hatch-pink-800 h-10 rounded-sm" title="pink-800"></div>
      <div class="bg-hatch-pink-900 h-10 rounded-sm" title="pink-900"></div>
      <div class="bg-hatch-pink-950 h-10 rounded-sm" title="pink-950"></div>
    </div>
  </div>
</div>

## Using a custom value

Use the arbitrary value syntax for colours not in the Tailwind palette:

<Example>
  <div class="flex gap-3">
    <div class="bg-hatch-[#ff6600] size-24 rounded-lg"></div>
    <div class="bg-hatch-[rgb(128,0,255)] size-24 rounded-lg"></div>
    <div class="bg-hatch-[oklch(0.7_0.15_200)] size-24 rounded-lg"></div>
  </div>
</Example>

## Applying conditionally

All `bg-hatch-*` and `hatch-*` utilities support Tailwind's variant syntax:

```html
<div class="bg-blue-500 hover:bg-hatch-blue-500">
  Hatching on hover
</div>

<div class="bg-hatch-red-500 md:hatch-gap-8">
  Wider gap on medium screens
</div>
```