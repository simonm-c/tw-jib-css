---
title: Pixel
---

<!-- llm-context: pixel module — RGB pixel pattern backgrounds. Decomposes any colour into R, G, B rectangular columns using CSS relative colour syntax and repeating linear gradients with screen blend mode (additive mixing). Mimics LCD/CRT display phosphors. -->

# Pixel

RGB pixel column backgrounds for any Tailwind colour. LCD or CRT phosphor look, pure CSS.

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/pixel';
```
:::

::: warning Browser Support
Requires CSS relative colour syntax (`rgb(from ... r 0 0)`). Chrome 111+, Safari 16.4+, Firefox 128+.
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'bg-pixel-<color>', styles: 'Sets colour and applies RGB pixel pattern with background-blend-mode: screen' },
  { class: 'bg-pixel-<color>/<opacity>', styles: 'Same with opacity modifier' },
  { class: 'bg-pixel-[<value>]', styles: 'Arbitrary colour value' },
  { class: 'pixel-size-<number>', styles: '--tw-jib--pixel-size: --spacing(<number>) / 4 — pixel size (width = size, height = size × 2)' },
  { class: 'pixel-size-[<value>]', styles: '--tw-jib--pixel-size: <value>' },
  { class: 'pixel-gap-<number>', styles: '--tw-jib--pixel-gap: <number> — gap multiplier of pixel width' },
  { class: 'pixel-gap-[<value>]', styles: '--tw-jib--pixel-gap: <value>' },
  { class: 'pixel-bloom-<number>', styles: '--tw-jib--pixel-bloom: --spacing(<number>) / 4 — phosphor bloom (unbounded; saturates to solid)' },
  { class: 'pixel-bloom-[<value>]', styles: '--tw-jib--pixel-bloom: <value>' },
]" />

## How it works

Each colour is split into its RGB channels — the direct components of additive light:

| Column | Colour | Extraction |
|--------|--------|------------|
| **R** (red) | `rgb(r 0 0)` | Red channel only |
| **G** (green) | `rgb(0 g 0)` | Green channel only |
| **B** (blue) | `rgb(0 0 b)` | Blue channel only |

Four background layers are composited — each channel needs its own layer for `screen` blending to work additively:

1. **Row mask** — `repeating-linear-gradient(to bottom, ...)` with white rows and black gaps. Blended with `multiply` to punch out horizontal row separators.
2. **Red column** — `repeating-linear-gradient(to right, ...)` at column position 0. Blended with `screen`.
3. **Green column** — same, at column position 1. Blended with `screen`.
4. **Blue column** — same, at column position 2. Blended with `screen`.

Over a black `background-color`. The `screen` blend mode adds the channels together (additive mixing), creating tall rectangular pixels arranged in R|G|B triplets — just like a real LCD panel. When `pixel-bloom` > 0, each channel's column widens outward and adjacent channels overlap to produce secondary colours (yellow, cyan, magenta) — mimicking CRT phosphor glow. The dial is unbounded: at high values every channel saturates and the pattern dissolves into solid colour.

## Basic Usage

Add `bg-pixel-{color}` to any element:

<Example>
  <div class="flex gap-4">
    <div class="bg-pixel-red-500 size-24 rounded-lg"></div>
    <div class="bg-pixel-blue-500 size-24 rounded-lg"></div>
    <div class="bg-pixel-emerald-500 size-24 rounded-lg"></div>
    <div class="bg-pixel-amber-500 size-24 rounded-lg"></div>
  </div>
</Example>

## Gap

Control the space between each R|G|B pixel triplet with `pixel-gap-{number}`. The value is a multiplier of the pixel width — `pixel-gap-1` = 1x pixel width, `pixel-gap-2` = 2x, etc. The default is 1.

<Example>
  <div class="flex gap-3">
    <div class="bg-pixel-blue-500 pixel-gap-0.5 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">gap-0.5</span></div>
    <div class="bg-pixel-blue-500 pixel-gap-1 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">gap-1</span></div>
    <div class="bg-pixel-blue-500 pixel-gap-1.5 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">gap-1.5</span></div>
    <div class="bg-pixel-blue-500 pixel-gap-2 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">gap-2</span></div>
    <div class="bg-pixel-blue-500 pixel-gap-4 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">gap-4</span></div>
  </div>
</Example>

Gap scales proportionally with pixel size — changing `pixel-size-*` automatically adjusts the gap.

## Size

Control the pixel size with `pixel-size-{number}`. Scales at spacing/4 so `pixel-size-1` = 1px, `pixel-size-2` = 2px. Width equals the size value; height is always 2x width (preserving the 1:2 aspect ratio). The default is 1px.

<Example>
  <div class="flex gap-3">
    <div class="bg-pixel-red-500 pixel-size-1 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">size-1</span></div>
    <div class="bg-pixel-red-500 pixel-size-2 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">size-2</span></div>
    <div class="bg-pixel-red-500 pixel-size-3 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">size-3</span></div>
    <div class="bg-pixel-red-500 pixel-size-4 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">size-4</span></div>
    <div class="bg-pixel-red-500 pixel-size-6 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">size-6</span></div>
  </div>
</Example>

## Bloom

Control the phosphor bloom with `pixel-bloom-{number}`. Scales at spacing/4 so `pixel-bloom-1` = 1px. This widens each channel outward so adjacent columns overlap additively — the CRT glow effect. The dial is unbounded; at high values every channel saturates and the pixel structure dissolves into solid colour. The default is 1px.

- `pixel-bloom-0` — crisp hard-edged rectangles (LCD look)
- `pixel-bloom-1` — slight glow (default)
- `pixel-bloom-2` — adjacent channels fully meet
- Larger — saturation regime; structure fades into colour

<Example>
  <div class="flex gap-3">
    <div class="bg-pixel-white pixel-bloom-0 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">bloom-0</span></div>
    <div class="bg-pixel-white pixel-bloom-1 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">bloom-1</span></div>
    <div class="bg-pixel-white pixel-bloom-2 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">bloom-2</span></div>
    <div class="bg-pixel-white pixel-bloom-3 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">bloom-3</span></div>
    <div class="bg-pixel-white pixel-bloom-4 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">bloom-4</span></div>
  </div>
</Example>

## Opacity

Add an opacity modifier with the `/` syntax to fade the entire pattern — all three RGB channel layers, the row mask, and the black background. The value is a percentage (0–100).

<Example>
  <div class="flex gap-3">
    <div class="bg-pixel-red-500 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">100%</span></div>
    <div class="bg-pixel-red-500/75 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">/75</span></div>
    <div class="bg-pixel-red-500/50 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">/50</span></div>
    <div class="bg-pixel-red-500/25 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">/25</span></div>
    <div class="bg-pixel-red-500/10 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">/10</span></div>
  </div>
</Example>

This scales the RGB channel opacities proportionally and makes the black background semi-transparent, so the pattern can be layered over other content.

<Example>
  <div class="flex gap-3">
    <div class="relative size-24 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-linear-to-br from-sky-400 to-indigo-600"></div>
      <div class="absolute inset-0 bg-pixel-white/50"></div>
      <span class="relative text-xs font-mono text-white flex items-center justify-center h-full">over gradient</span>
    </div>
    <div class="relative size-24 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-linear-to-br from-amber-400 to-rose-500"></div>
      <div class="absolute inset-0 bg-pixel-blue-500/40"></div>
      <span class="relative text-xs font-mono text-white flex items-center justify-center h-full">over gradient</span>
    </div>
  </div>
</Example>

## RGB Channel Behaviour

Every Tailwind colour at every shade, rendered as pixels. Whites light all three R|G|B columns equally. Pure hues light only the relevant channels — red lights R, blue lights B, yellow lights R+G.

<div class="space-y-4 my-6">
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Slate</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-pixel-slate-50 h-10 rounded-sm" title="slate-50"></div>
      <div class="bg-pixel-slate-100 h-10 rounded-sm" title="slate-100"></div>
      <div class="bg-pixel-slate-200 h-10 rounded-sm" title="slate-200"></div>
      <div class="bg-pixel-slate-300 h-10 rounded-sm" title="slate-300"></div>
      <div class="bg-pixel-slate-400 h-10 rounded-sm" title="slate-400"></div>
      <div class="bg-pixel-slate-500 h-10 rounded-sm" title="slate-500"></div>
      <div class="bg-pixel-slate-600 h-10 rounded-sm" title="slate-600"></div>
      <div class="bg-pixel-slate-700 h-10 rounded-sm" title="slate-700"></div>
      <div class="bg-pixel-slate-800 h-10 rounded-sm" title="slate-800"></div>
      <div class="bg-pixel-slate-900 h-10 rounded-sm" title="slate-900"></div>
      <div class="bg-pixel-slate-950 h-10 rounded-sm" title="slate-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Gray</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-pixel-gray-50 h-10 rounded-sm" title="gray-50"></div>
      <div class="bg-pixel-gray-100 h-10 rounded-sm" title="gray-100"></div>
      <div class="bg-pixel-gray-200 h-10 rounded-sm" title="gray-200"></div>
      <div class="bg-pixel-gray-300 h-10 rounded-sm" title="gray-300"></div>
      <div class="bg-pixel-gray-400 h-10 rounded-sm" title="gray-400"></div>
      <div class="bg-pixel-gray-500 h-10 rounded-sm" title="gray-500"></div>
      <div class="bg-pixel-gray-600 h-10 rounded-sm" title="gray-600"></div>
      <div class="bg-pixel-gray-700 h-10 rounded-sm" title="gray-700"></div>
      <div class="bg-pixel-gray-800 h-10 rounded-sm" title="gray-800"></div>
      <div class="bg-pixel-gray-900 h-10 rounded-sm" title="gray-900"></div>
      <div class="bg-pixel-gray-950 h-10 rounded-sm" title="gray-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Red</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-pixel-red-50 h-10 rounded-sm" title="red-50"></div>
      <div class="bg-pixel-red-100 h-10 rounded-sm" title="red-100"></div>
      <div class="bg-pixel-red-200 h-10 rounded-sm" title="red-200"></div>
      <div class="bg-pixel-red-300 h-10 rounded-sm" title="red-300"></div>
      <div class="bg-pixel-red-400 h-10 rounded-sm" title="red-400"></div>
      <div class="bg-pixel-red-500 h-10 rounded-sm" title="red-500"></div>
      <div class="bg-pixel-red-600 h-10 rounded-sm" title="red-600"></div>
      <div class="bg-pixel-red-700 h-10 rounded-sm" title="red-700"></div>
      <div class="bg-pixel-red-800 h-10 rounded-sm" title="red-800"></div>
      <div class="bg-pixel-red-900 h-10 rounded-sm" title="red-900"></div>
      <div class="bg-pixel-red-950 h-10 rounded-sm" title="red-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Orange</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-pixel-orange-50 h-10 rounded-sm" title="orange-50"></div>
      <div class="bg-pixel-orange-100 h-10 rounded-sm" title="orange-100"></div>
      <div class="bg-pixel-orange-200 h-10 rounded-sm" title="orange-200"></div>
      <div class="bg-pixel-orange-300 h-10 rounded-sm" title="orange-300"></div>
      <div class="bg-pixel-orange-400 h-10 rounded-sm" title="orange-400"></div>
      <div class="bg-pixel-orange-500 h-10 rounded-sm" title="orange-500"></div>
      <div class="bg-pixel-orange-600 h-10 rounded-sm" title="orange-600"></div>
      <div class="bg-pixel-orange-700 h-10 rounded-sm" title="orange-700"></div>
      <div class="bg-pixel-orange-800 h-10 rounded-sm" title="orange-800"></div>
      <div class="bg-pixel-orange-900 h-10 rounded-sm" title="orange-900"></div>
      <div class="bg-pixel-orange-950 h-10 rounded-sm" title="orange-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Amber</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-pixel-amber-50 h-10 rounded-sm" title="amber-50"></div>
      <div class="bg-pixel-amber-100 h-10 rounded-sm" title="amber-100"></div>
      <div class="bg-pixel-amber-200 h-10 rounded-sm" title="amber-200"></div>
      <div class="bg-pixel-amber-300 h-10 rounded-sm" title="amber-300"></div>
      <div class="bg-pixel-amber-400 h-10 rounded-sm" title="amber-400"></div>
      <div class="bg-pixel-amber-500 h-10 rounded-sm" title="amber-500"></div>
      <div class="bg-pixel-amber-600 h-10 rounded-sm" title="amber-600"></div>
      <div class="bg-pixel-amber-700 h-10 rounded-sm" title="amber-700"></div>
      <div class="bg-pixel-amber-800 h-10 rounded-sm" title="amber-800"></div>
      <div class="bg-pixel-amber-900 h-10 rounded-sm" title="amber-900"></div>
      <div class="bg-pixel-amber-950 h-10 rounded-sm" title="amber-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Yellow</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-pixel-yellow-50 h-10 rounded-sm" title="yellow-50"></div>
      <div class="bg-pixel-yellow-100 h-10 rounded-sm" title="yellow-100"></div>
      <div class="bg-pixel-yellow-200 h-10 rounded-sm" title="yellow-200"></div>
      <div class="bg-pixel-yellow-300 h-10 rounded-sm" title="yellow-300"></div>
      <div class="bg-pixel-yellow-400 h-10 rounded-sm" title="yellow-400"></div>
      <div class="bg-pixel-yellow-500 h-10 rounded-sm" title="yellow-500"></div>
      <div class="bg-pixel-yellow-600 h-10 rounded-sm" title="yellow-600"></div>
      <div class="bg-pixel-yellow-700 h-10 rounded-sm" title="yellow-700"></div>
      <div class="bg-pixel-yellow-800 h-10 rounded-sm" title="yellow-800"></div>
      <div class="bg-pixel-yellow-900 h-10 rounded-sm" title="yellow-900"></div>
      <div class="bg-pixel-yellow-950 h-10 rounded-sm" title="yellow-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Green</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-pixel-green-50 h-10 rounded-sm" title="green-50"></div>
      <div class="bg-pixel-green-100 h-10 rounded-sm" title="green-100"></div>
      <div class="bg-pixel-green-200 h-10 rounded-sm" title="green-200"></div>
      <div class="bg-pixel-green-300 h-10 rounded-sm" title="green-300"></div>
      <div class="bg-pixel-green-400 h-10 rounded-sm" title="green-400"></div>
      <div class="bg-pixel-green-500 h-10 rounded-sm" title="green-500"></div>
      <div class="bg-pixel-green-600 h-10 rounded-sm" title="green-600"></div>
      <div class="bg-pixel-green-700 h-10 rounded-sm" title="green-700"></div>
      <div class="bg-pixel-green-800 h-10 rounded-sm" title="green-800"></div>
      <div class="bg-pixel-green-900 h-10 rounded-sm" title="green-900"></div>
      <div class="bg-pixel-green-950 h-10 rounded-sm" title="green-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Emerald</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-pixel-emerald-50 h-10 rounded-sm" title="emerald-50"></div>
      <div class="bg-pixel-emerald-100 h-10 rounded-sm" title="emerald-100"></div>
      <div class="bg-pixel-emerald-200 h-10 rounded-sm" title="emerald-200"></div>
      <div class="bg-pixel-emerald-300 h-10 rounded-sm" title="emerald-300"></div>
      <div class="bg-pixel-emerald-400 h-10 rounded-sm" title="emerald-400"></div>
      <div class="bg-pixel-emerald-500 h-10 rounded-sm" title="emerald-500"></div>
      <div class="bg-pixel-emerald-600 h-10 rounded-sm" title="emerald-600"></div>
      <div class="bg-pixel-emerald-700 h-10 rounded-sm" title="emerald-700"></div>
      <div class="bg-pixel-emerald-800 h-10 rounded-sm" title="emerald-800"></div>
      <div class="bg-pixel-emerald-900 h-10 rounded-sm" title="emerald-900"></div>
      <div class="bg-pixel-emerald-950 h-10 rounded-sm" title="emerald-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Cyan</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-pixel-cyan-50 h-10 rounded-sm" title="cyan-50"></div>
      <div class="bg-pixel-cyan-100 h-10 rounded-sm" title="cyan-100"></div>
      <div class="bg-pixel-cyan-200 h-10 rounded-sm" title="cyan-200"></div>
      <div class="bg-pixel-cyan-300 h-10 rounded-sm" title="cyan-300"></div>
      <div class="bg-pixel-cyan-400 h-10 rounded-sm" title="cyan-400"></div>
      <div class="bg-pixel-cyan-500 h-10 rounded-sm" title="cyan-500"></div>
      <div class="bg-pixel-cyan-600 h-10 rounded-sm" title="cyan-600"></div>
      <div class="bg-pixel-cyan-700 h-10 rounded-sm" title="cyan-700"></div>
      <div class="bg-pixel-cyan-800 h-10 rounded-sm" title="cyan-800"></div>
      <div class="bg-pixel-cyan-900 h-10 rounded-sm" title="cyan-900"></div>
      <div class="bg-pixel-cyan-950 h-10 rounded-sm" title="cyan-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Blue</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-pixel-blue-50 h-10 rounded-sm" title="blue-50"></div>
      <div class="bg-pixel-blue-100 h-10 rounded-sm" title="blue-100"></div>
      <div class="bg-pixel-blue-200 h-10 rounded-sm" title="blue-200"></div>
      <div class="bg-pixel-blue-300 h-10 rounded-sm" title="blue-300"></div>
      <div class="bg-pixel-blue-400 h-10 rounded-sm" title="blue-400"></div>
      <div class="bg-pixel-blue-500 h-10 rounded-sm" title="blue-500"></div>
      <div class="bg-pixel-blue-600 h-10 rounded-sm" title="blue-600"></div>
      <div class="bg-pixel-blue-700 h-10 rounded-sm" title="blue-700"></div>
      <div class="bg-pixel-blue-800 h-10 rounded-sm" title="blue-800"></div>
      <div class="bg-pixel-blue-900 h-10 rounded-sm" title="blue-900"></div>
      <div class="bg-pixel-blue-950 h-10 rounded-sm" title="blue-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Violet</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-pixel-violet-50 h-10 rounded-sm" title="violet-50"></div>
      <div class="bg-pixel-violet-100 h-10 rounded-sm" title="violet-100"></div>
      <div class="bg-pixel-violet-200 h-10 rounded-sm" title="violet-200"></div>
      <div class="bg-pixel-violet-300 h-10 rounded-sm" title="violet-300"></div>
      <div class="bg-pixel-violet-400 h-10 rounded-sm" title="violet-400"></div>
      <div class="bg-pixel-violet-500 h-10 rounded-sm" title="violet-500"></div>
      <div class="bg-pixel-violet-600 h-10 rounded-sm" title="violet-600"></div>
      <div class="bg-pixel-violet-700 h-10 rounded-sm" title="violet-700"></div>
      <div class="bg-pixel-violet-800 h-10 rounded-sm" title="violet-800"></div>
      <div class="bg-pixel-violet-900 h-10 rounded-sm" title="violet-900"></div>
      <div class="bg-pixel-violet-950 h-10 rounded-sm" title="violet-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Purple</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-pixel-purple-50 h-10 rounded-sm" title="purple-50"></div>
      <div class="bg-pixel-purple-100 h-10 rounded-sm" title="purple-100"></div>
      <div class="bg-pixel-purple-200 h-10 rounded-sm" title="purple-200"></div>
      <div class="bg-pixel-purple-300 h-10 rounded-sm" title="purple-300"></div>
      <div class="bg-pixel-purple-400 h-10 rounded-sm" title="purple-400"></div>
      <div class="bg-pixel-purple-500 h-10 rounded-sm" title="purple-500"></div>
      <div class="bg-pixel-purple-600 h-10 rounded-sm" title="purple-600"></div>
      <div class="bg-pixel-purple-700 h-10 rounded-sm" title="purple-700"></div>
      <div class="bg-pixel-purple-800 h-10 rounded-sm" title="purple-800"></div>
      <div class="bg-pixel-purple-900 h-10 rounded-sm" title="purple-900"></div>
      <div class="bg-pixel-purple-950 h-10 rounded-sm" title="purple-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Fuchsia</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-pixel-fuchsia-50 h-10 rounded-sm" title="fuchsia-50"></div>
      <div class="bg-pixel-fuchsia-100 h-10 rounded-sm" title="fuchsia-100"></div>
      <div class="bg-pixel-fuchsia-200 h-10 rounded-sm" title="fuchsia-200"></div>
      <div class="bg-pixel-fuchsia-300 h-10 rounded-sm" title="fuchsia-300"></div>
      <div class="bg-pixel-fuchsia-400 h-10 rounded-sm" title="fuchsia-400"></div>
      <div class="bg-pixel-fuchsia-500 h-10 rounded-sm" title="fuchsia-500"></div>
      <div class="bg-pixel-fuchsia-600 h-10 rounded-sm" title="fuchsia-600"></div>
      <div class="bg-pixel-fuchsia-700 h-10 rounded-sm" title="fuchsia-700"></div>
      <div class="bg-pixel-fuchsia-800 h-10 rounded-sm" title="fuchsia-800"></div>
      <div class="bg-pixel-fuchsia-900 h-10 rounded-sm" title="fuchsia-900"></div>
      <div class="bg-pixel-fuchsia-950 h-10 rounded-sm" title="fuchsia-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Pink</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-pixel-pink-50 h-10 rounded-sm" title="pink-50"></div>
      <div class="bg-pixel-pink-100 h-10 rounded-sm" title="pink-100"></div>
      <div class="bg-pixel-pink-200 h-10 rounded-sm" title="pink-200"></div>
      <div class="bg-pixel-pink-300 h-10 rounded-sm" title="pink-300"></div>
      <div class="bg-pixel-pink-400 h-10 rounded-sm" title="pink-400"></div>
      <div class="bg-pixel-pink-500 h-10 rounded-sm" title="pink-500"></div>
      <div class="bg-pixel-pink-600 h-10 rounded-sm" title="pink-600"></div>
      <div class="bg-pixel-pink-700 h-10 rounded-sm" title="pink-700"></div>
      <div class="bg-pixel-pink-800 h-10 rounded-sm" title="pink-800"></div>
      <div class="bg-pixel-pink-900 h-10 rounded-sm" title="pink-900"></div>
      <div class="bg-pixel-pink-950 h-10 rounded-sm" title="pink-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Rose</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-pixel-rose-50 h-10 rounded-sm" title="rose-50"></div>
      <div class="bg-pixel-rose-100 h-10 rounded-sm" title="rose-100"></div>
      <div class="bg-pixel-rose-200 h-10 rounded-sm" title="rose-200"></div>
      <div class="bg-pixel-rose-300 h-10 rounded-sm" title="rose-300"></div>
      <div class="bg-pixel-rose-400 h-10 rounded-sm" title="rose-400"></div>
      <div class="bg-pixel-rose-500 h-10 rounded-sm" title="rose-500"></div>
      <div class="bg-pixel-rose-600 h-10 rounded-sm" title="rose-600"></div>
      <div class="bg-pixel-rose-700 h-10 rounded-sm" title="rose-700"></div>
      <div class="bg-pixel-rose-800 h-10 rounded-sm" title="rose-800"></div>
      <div class="bg-pixel-rose-900 h-10 rounded-sm" title="rose-900"></div>
      <div class="bg-pixel-rose-950 h-10 rounded-sm" title="rose-950"></div>
    </div>
  </div>
</div>

## Using a custom value

Use the arbitrary value syntax for colours not in the Tailwind palette:

<Example>
  <div class="flex gap-3">
    <div class="bg-pixel-[#ff6600] size-24 rounded-lg"></div>
    <div class="bg-pixel-[rgb(128,0,255)] size-24 rounded-lg"></div>
    <div class="bg-pixel-[oklch(0.7_0.15_200)] size-24 rounded-lg"></div>
  </div>
</Example>

## Applying conditionally

All `bg-pixel-*` and `pixel-*` utilities support Tailwind's variant syntax:

```html
<div class="bg-blue-500 hover:bg-pixel-blue-500">
  Sub-pixels on hover
</div>

<div class="bg-pixel-red-500 md:pixel-size-3">
  Larger pixels on medium screens
</div>
```