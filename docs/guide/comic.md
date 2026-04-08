---
title: Comic Dots
---

<!-- llm-context: comic module — CMYK halftone dot pattern backgrounds. Converts any colour to overlapping cyan, magenta, yellow and black dots using CSS relative colour syntax and radial gradients. -->

# Comic Dots

Comic-book style CMYK halftone dot backgrounds. Any colour is decomposed into four overlapping dot grids — cyan, magenta, yellow, and black — using proper CMYK conversion via CSS relative colour syntax.

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/comic';
```
:::

::: warning Browser Support
Requires CSS `max()` inside `rgb()` relative colour syntax. Chrome 137+, Edge 137+. No Firefox or Safari support yet.
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'bg-comic-<color>', styles: 'Sets colour and applies CMYK dot pattern with background-blend-mode: multiply' },
  { class: 'bg-comic-<color>/<opacity>', styles: 'Same with opacity modifier' },
  { class: 'bg-comic-[<value>]', styles: 'Arbitrary colour value' },
  { class: 'comic-dot-<number>', styles: '--comic-dot: --spacing(<number>) — dot radius' },
  { class: 'comic-dot-[<value>]', styles: '--comic-dot: <value>' },
  { class: 'comic-bleed-<number>', styles: '--comic-bleed: --spacing(<number>) — dot edge softness' },
  { class: 'comic-bleed-[<value>]', styles: '--comic-bleed: <value>' },
  { class: 'comic-gap-<number>', styles: '--comic-gap: --spacing(<number>) / 4 — space between dots' },
  { class: 'comic-gap-[<value>]', styles: '--comic-gap: <value>' },
]" />

## How it works

Each colour is decomposed into CMYK channels using the inverse of its RGB values:

| Dot | Colour | Opacity formula |
|-----|--------|-----------------|
| **C** (cyan) | `rgb(0 255 255)` | `(max(R,G,B) - R) / max(R,G,B)` |
| **M** (magenta) | `rgb(255 0 255)` | `(max(R,G,B) - G) / max(R,G,B)` |
| **Y** (yellow) | `rgb(255 255 0)` | `(max(R,G,B) - B) / max(R,G,B)` |
| **K** (black) | `rgb(0 0 0)` | `1 - max(R,G,B) / 255` |

The four dot layers are staggered at different grid offsets and composited with `background-blend-mode: multiply` for subtractive colour mixing — just like a printing press.

## Basic Usage

Add `bg-comic-{color}` to any element:

<Example>
  <div class="flex gap-4">
    <div class="bg-comic-red-500 size-24 rounded-lg"></div>
    <div class="bg-comic-blue-500 size-24 rounded-lg"></div>
    <div class="bg-comic-emerald-500 size-24 rounded-lg"></div>
    <div class="bg-comic-amber-500 size-24 rounded-lg"></div>
  </div>
</Example>

## Gap

Control the space between dots with `comic-gap-{number}`. The value scales at `--spacing / 4` for fine control (comic-gap-1 = 1px, = 4px). The default is 2px.

<Example>
  <div class="flex gap-3">
    <div class="bg-comic-blue-500 comic-gap-0 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">gap-0</span></div>
    <div class="bg-comic-blue-500 comic-gap-1 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">gap-1</span></div>
    <div class="bg-comic-blue-500 comic-gap-2 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">gap-2</span></div>
    <div class="bg-comic-blue-500 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">gap-4</span></div>
    <div class="bg-comic-blue-500 comic-gap-8 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">gap-8</span></div>
  </div>
</Example>

Gap is additive to dot size — the grid cell is computed as `dot * 2 + gap`. This means changing `comic-dot-*` automatically scales the grid proportionally.

## Dot Size

Control the dot radius with `comic-dot-{number}` using the Tailwind spacing scale. The default is 1px.

<Example>
  <div class="flex gap-3">
    <div class="bg-comic-red-500 comic-dot-0.5 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">dot-0.5</span></div>
    <div class="bg-comic-red-500 comic-dot-1 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">dot-1</span></div>
    <div class="bg-comic-red-500 comic-dot-1.5 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">dot-1.5</span></div>
    <div class="bg-comic-red-500 comic-dot-2 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">dot-2</span></div>
    <div class="bg-comic-red-500 comic-dot-3 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">dot-3</span></div>
  </div>
</Example>

## Bleed

Control the dot edge softness with `comic-bleed-{number}`. The transparent gradient stop is positioned at `dot + bleed`, so:

- `comic-bleed-0` — crisp hard-edged circles
- `comic-bleed-1` — slight softness (default)
- Larger values — increasingly blurred dot edges

<Example>
  <div class="flex gap-3">
    <div class="bg-comic-red-500 comic-bleed-0 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">bleed-0</span></div>
    <div class="bg-comic-red-500 comic-bleed-1 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">bleed-1</span></div>
    <div class="bg-comic-red-500 comic-bleed-2 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">bleed-2</span></div>
    <div class="bg-comic-red-500 comic-bleed-3 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">bleed-3</span></div>
    <div class="bg-comic-red-500 comic-bleed-4 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">bleed-4</span></div>
  </div>
</Example>

## Opacity

Add an opacity modifier with the `/` syntax to fade the entire pattern — all four CMYK dot layers and the white background. The value is a percentage (0–100).

<Example>
  <div class="flex gap-3">
    <div class="bg-comic-red-500 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">100%</span></div>
    <div class="bg-comic-red-500/75 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">/75</span></div>
    <div class="bg-comic-red-500/50 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">/50</span></div>
    <div class="bg-comic-red-500/25 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">/25</span></div>
    <div class="bg-comic-red-500/10 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">/10</span></div>
  </div>
</Example>

This scales the computed CMYK channel opacities proportionally and makes the white background semi-transparent, so the pattern can be layered over other content.

<Example>
  <div class="flex gap-3">
    <div class="relative size-24 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-sky-400 to-indigo-600"></div>
      <div class="absolute inset-0 bg-comic-black/50"></div>
      <span class="relative text-xs font-mono text-white flex items-center justify-center h-full">over gradient</span>
    </div>
    <div class="relative size-24 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-amber-400 to-rose-500"></div>
      <div class="absolute inset-0 bg-comic-blue-500/40"></div>
      <span class="relative text-xs font-mono text-white flex items-center justify-center h-full">over gradient</span>
    </div>
  </div>
</Example>

## CMYK Channel Behaviour

Every Tailwind colour at every shade, rendered as Ben Day dots. Grays produce only K (black) dots with no colour cast — the key advantage of proper CMYK conversion over naive CMY.

<div class="space-y-4 my-6">
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Slate</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-slate-50 h-10 rounded-sm" title="slate-50"></div>
      <div class="bg-comic-slate-100 h-10 rounded-sm" title="slate-100"></div>
      <div class="bg-comic-slate-200 h-10 rounded-sm" title="slate-200"></div>
      <div class="bg-comic-slate-300 h-10 rounded-sm" title="slate-300"></div>
      <div class="bg-comic-slate-400 h-10 rounded-sm" title="slate-400"></div>
      <div class="bg-comic-slate-500 h-10 rounded-sm" title="slate-500"></div>
      <div class="bg-comic-slate-600 h-10 rounded-sm" title="slate-600"></div>
      <div class="bg-comic-slate-700 h-10 rounded-sm" title="slate-700"></div>
      <div class="bg-comic-slate-800 h-10 rounded-sm" title="slate-800"></div>
      <div class="bg-comic-slate-900 h-10 rounded-sm" title="slate-900"></div>
      <div class="bg-comic-slate-950 h-10 rounded-sm" title="slate-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Gray</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-gray-50 h-10 rounded-sm" title="gray-50"></div>
      <div class="bg-comic-gray-100 h-10 rounded-sm" title="gray-100"></div>
      <div class="bg-comic-gray-200 h-10 rounded-sm" title="gray-200"></div>
      <div class="bg-comic-gray-300 h-10 rounded-sm" title="gray-300"></div>
      <div class="bg-comic-gray-400 h-10 rounded-sm" title="gray-400"></div>
      <div class="bg-comic-gray-500 h-10 rounded-sm" title="gray-500"></div>
      <div class="bg-comic-gray-600 h-10 rounded-sm" title="gray-600"></div>
      <div class="bg-comic-gray-700 h-10 rounded-sm" title="gray-700"></div>
      <div class="bg-comic-gray-800 h-10 rounded-sm" title="gray-800"></div>
      <div class="bg-comic-gray-900 h-10 rounded-sm" title="gray-900"></div>
      <div class="bg-comic-gray-950 h-10 rounded-sm" title="gray-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Zinc</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-zinc-50 h-10 rounded-sm" title="zinc-50"></div>
      <div class="bg-comic-zinc-100 h-10 rounded-sm" title="zinc-100"></div>
      <div class="bg-comic-zinc-200 h-10 rounded-sm" title="zinc-200"></div>
      <div class="bg-comic-zinc-300 h-10 rounded-sm" title="zinc-300"></div>
      <div class="bg-comic-zinc-400 h-10 rounded-sm" title="zinc-400"></div>
      <div class="bg-comic-zinc-500 h-10 rounded-sm" title="zinc-500"></div>
      <div class="bg-comic-zinc-600 h-10 rounded-sm" title="zinc-600"></div>
      <div class="bg-comic-zinc-700 h-10 rounded-sm" title="zinc-700"></div>
      <div class="bg-comic-zinc-800 h-10 rounded-sm" title="zinc-800"></div>
      <div class="bg-comic-zinc-900 h-10 rounded-sm" title="zinc-900"></div>
      <div class="bg-comic-zinc-950 h-10 rounded-sm" title="zinc-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Neutral</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-neutral-50 h-10 rounded-sm" title="neutral-50"></div>
      <div class="bg-comic-neutral-100 h-10 rounded-sm" title="neutral-100"></div>
      <div class="bg-comic-neutral-200 h-10 rounded-sm" title="neutral-200"></div>
      <div class="bg-comic-neutral-300 h-10 rounded-sm" title="neutral-300"></div>
      <div class="bg-comic-neutral-400 h-10 rounded-sm" title="neutral-400"></div>
      <div class="bg-comic-neutral-500 h-10 rounded-sm" title="neutral-500"></div>
      <div class="bg-comic-neutral-600 h-10 rounded-sm" title="neutral-600"></div>
      <div class="bg-comic-neutral-700 h-10 rounded-sm" title="neutral-700"></div>
      <div class="bg-comic-neutral-800 h-10 rounded-sm" title="neutral-800"></div>
      <div class="bg-comic-neutral-900 h-10 rounded-sm" title="neutral-900"></div>
      <div class="bg-comic-neutral-950 h-10 rounded-sm" title="neutral-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Stone</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-stone-50 h-10 rounded-sm" title="stone-50"></div>
      <div class="bg-comic-stone-100 h-10 rounded-sm" title="stone-100"></div>
      <div class="bg-comic-stone-200 h-10 rounded-sm" title="stone-200"></div>
      <div class="bg-comic-stone-300 h-10 rounded-sm" title="stone-300"></div>
      <div class="bg-comic-stone-400 h-10 rounded-sm" title="stone-400"></div>
      <div class="bg-comic-stone-500 h-10 rounded-sm" title="stone-500"></div>
      <div class="bg-comic-stone-600 h-10 rounded-sm" title="stone-600"></div>
      <div class="bg-comic-stone-700 h-10 rounded-sm" title="stone-700"></div>
      <div class="bg-comic-stone-800 h-10 rounded-sm" title="stone-800"></div>
      <div class="bg-comic-stone-900 h-10 rounded-sm" title="stone-900"></div>
      <div class="bg-comic-stone-950 h-10 rounded-sm" title="stone-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Red</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-red-50 h-10 rounded-sm" title="red-50"></div>
      <div class="bg-comic-red-100 h-10 rounded-sm" title="red-100"></div>
      <div class="bg-comic-red-200 h-10 rounded-sm" title="red-200"></div>
      <div class="bg-comic-red-300 h-10 rounded-sm" title="red-300"></div>
      <div class="bg-comic-red-400 h-10 rounded-sm" title="red-400"></div>
      <div class="bg-comic-red-500 h-10 rounded-sm" title="red-500"></div>
      <div class="bg-comic-red-600 h-10 rounded-sm" title="red-600"></div>
      <div class="bg-comic-red-700 h-10 rounded-sm" title="red-700"></div>
      <div class="bg-comic-red-800 h-10 rounded-sm" title="red-800"></div>
      <div class="bg-comic-red-900 h-10 rounded-sm" title="red-900"></div>
      <div class="bg-comic-red-950 h-10 rounded-sm" title="red-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Orange</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-orange-50 h-10 rounded-sm" title="orange-50"></div>
      <div class="bg-comic-orange-100 h-10 rounded-sm" title="orange-100"></div>
      <div class="bg-comic-orange-200 h-10 rounded-sm" title="orange-200"></div>
      <div class="bg-comic-orange-300 h-10 rounded-sm" title="orange-300"></div>
      <div class="bg-comic-orange-400 h-10 rounded-sm" title="orange-400"></div>
      <div class="bg-comic-orange-500 h-10 rounded-sm" title="orange-500"></div>
      <div class="bg-comic-orange-600 h-10 rounded-sm" title="orange-600"></div>
      <div class="bg-comic-orange-700 h-10 rounded-sm" title="orange-700"></div>
      <div class="bg-comic-orange-800 h-10 rounded-sm" title="orange-800"></div>
      <div class="bg-comic-orange-900 h-10 rounded-sm" title="orange-900"></div>
      <div class="bg-comic-orange-950 h-10 rounded-sm" title="orange-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Amber</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-amber-50 h-10 rounded-sm" title="amber-50"></div>
      <div class="bg-comic-amber-100 h-10 rounded-sm" title="amber-100"></div>
      <div class="bg-comic-amber-200 h-10 rounded-sm" title="amber-200"></div>
      <div class="bg-comic-amber-300 h-10 rounded-sm" title="amber-300"></div>
      <div class="bg-comic-amber-400 h-10 rounded-sm" title="amber-400"></div>
      <div class="bg-comic-amber-500 h-10 rounded-sm" title="amber-500"></div>
      <div class="bg-comic-amber-600 h-10 rounded-sm" title="amber-600"></div>
      <div class="bg-comic-amber-700 h-10 rounded-sm" title="amber-700"></div>
      <div class="bg-comic-amber-800 h-10 rounded-sm" title="amber-800"></div>
      <div class="bg-comic-amber-900 h-10 rounded-sm" title="amber-900"></div>
      <div class="bg-comic-amber-950 h-10 rounded-sm" title="amber-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Yellow</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-yellow-50 h-10 rounded-sm" title="yellow-50"></div>
      <div class="bg-comic-yellow-100 h-10 rounded-sm" title="yellow-100"></div>
      <div class="bg-comic-yellow-200 h-10 rounded-sm" title="yellow-200"></div>
      <div class="bg-comic-yellow-300 h-10 rounded-sm" title="yellow-300"></div>
      <div class="bg-comic-yellow-400 h-10 rounded-sm" title="yellow-400"></div>
      <div class="bg-comic-yellow-500 h-10 rounded-sm" title="yellow-500"></div>
      <div class="bg-comic-yellow-600 h-10 rounded-sm" title="yellow-600"></div>
      <div class="bg-comic-yellow-700 h-10 rounded-sm" title="yellow-700"></div>
      <div class="bg-comic-yellow-800 h-10 rounded-sm" title="yellow-800"></div>
      <div class="bg-comic-yellow-900 h-10 rounded-sm" title="yellow-900"></div>
      <div class="bg-comic-yellow-950 h-10 rounded-sm" title="yellow-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Lime</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-lime-50 h-10 rounded-sm" title="lime-50"></div>
      <div class="bg-comic-lime-100 h-10 rounded-sm" title="lime-100"></div>
      <div class="bg-comic-lime-200 h-10 rounded-sm" title="lime-200"></div>
      <div class="bg-comic-lime-300 h-10 rounded-sm" title="lime-300"></div>
      <div class="bg-comic-lime-400 h-10 rounded-sm" title="lime-400"></div>
      <div class="bg-comic-lime-500 h-10 rounded-sm" title="lime-500"></div>
      <div class="bg-comic-lime-600 h-10 rounded-sm" title="lime-600"></div>
      <div class="bg-comic-lime-700 h-10 rounded-sm" title="lime-700"></div>
      <div class="bg-comic-lime-800 h-10 rounded-sm" title="lime-800"></div>
      <div class="bg-comic-lime-900 h-10 rounded-sm" title="lime-900"></div>
      <div class="bg-comic-lime-950 h-10 rounded-sm" title="lime-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Green</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-green-50 h-10 rounded-sm" title="green-50"></div>
      <div class="bg-comic-green-100 h-10 rounded-sm" title="green-100"></div>
      <div class="bg-comic-green-200 h-10 rounded-sm" title="green-200"></div>
      <div class="bg-comic-green-300 h-10 rounded-sm" title="green-300"></div>
      <div class="bg-comic-green-400 h-10 rounded-sm" title="green-400"></div>
      <div class="bg-comic-green-500 h-10 rounded-sm" title="green-500"></div>
      <div class="bg-comic-green-600 h-10 rounded-sm" title="green-600"></div>
      <div class="bg-comic-green-700 h-10 rounded-sm" title="green-700"></div>
      <div class="bg-comic-green-800 h-10 rounded-sm" title="green-800"></div>
      <div class="bg-comic-green-900 h-10 rounded-sm" title="green-900"></div>
      <div class="bg-comic-green-950 h-10 rounded-sm" title="green-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Emerald</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-emerald-50 h-10 rounded-sm" title="emerald-50"></div>
      <div class="bg-comic-emerald-100 h-10 rounded-sm" title="emerald-100"></div>
      <div class="bg-comic-emerald-200 h-10 rounded-sm" title="emerald-200"></div>
      <div class="bg-comic-emerald-300 h-10 rounded-sm" title="emerald-300"></div>
      <div class="bg-comic-emerald-400 h-10 rounded-sm" title="emerald-400"></div>
      <div class="bg-comic-emerald-500 h-10 rounded-sm" title="emerald-500"></div>
      <div class="bg-comic-emerald-600 h-10 rounded-sm" title="emerald-600"></div>
      <div class="bg-comic-emerald-700 h-10 rounded-sm" title="emerald-700"></div>
      <div class="bg-comic-emerald-800 h-10 rounded-sm" title="emerald-800"></div>
      <div class="bg-comic-emerald-900 h-10 rounded-sm" title="emerald-900"></div>
      <div class="bg-comic-emerald-950 h-10 rounded-sm" title="emerald-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Teal</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-teal-50 h-10 rounded-sm" title="teal-50"></div>
      <div class="bg-comic-teal-100 h-10 rounded-sm" title="teal-100"></div>
      <div class="bg-comic-teal-200 h-10 rounded-sm" title="teal-200"></div>
      <div class="bg-comic-teal-300 h-10 rounded-sm" title="teal-300"></div>
      <div class="bg-comic-teal-400 h-10 rounded-sm" title="teal-400"></div>
      <div class="bg-comic-teal-500 h-10 rounded-sm" title="teal-500"></div>
      <div class="bg-comic-teal-600 h-10 rounded-sm" title="teal-600"></div>
      <div class="bg-comic-teal-700 h-10 rounded-sm" title="teal-700"></div>
      <div class="bg-comic-teal-800 h-10 rounded-sm" title="teal-800"></div>
      <div class="bg-comic-teal-900 h-10 rounded-sm" title="teal-900"></div>
      <div class="bg-comic-teal-950 h-10 rounded-sm" title="teal-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Cyan</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-cyan-50 h-10 rounded-sm" title="cyan-50"></div>
      <div class="bg-comic-cyan-100 h-10 rounded-sm" title="cyan-100"></div>
      <div class="bg-comic-cyan-200 h-10 rounded-sm" title="cyan-200"></div>
      <div class="bg-comic-cyan-300 h-10 rounded-sm" title="cyan-300"></div>
      <div class="bg-comic-cyan-400 h-10 rounded-sm" title="cyan-400"></div>
      <div class="bg-comic-cyan-500 h-10 rounded-sm" title="cyan-500"></div>
      <div class="bg-comic-cyan-600 h-10 rounded-sm" title="cyan-600"></div>
      <div class="bg-comic-cyan-700 h-10 rounded-sm" title="cyan-700"></div>
      <div class="bg-comic-cyan-800 h-10 rounded-sm" title="cyan-800"></div>
      <div class="bg-comic-cyan-900 h-10 rounded-sm" title="cyan-900"></div>
      <div class="bg-comic-cyan-950 h-10 rounded-sm" title="cyan-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Sky</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-sky-50 h-10 rounded-sm" title="sky-50"></div>
      <div class="bg-comic-sky-100 h-10 rounded-sm" title="sky-100"></div>
      <div class="bg-comic-sky-200 h-10 rounded-sm" title="sky-200"></div>
      <div class="bg-comic-sky-300 h-10 rounded-sm" title="sky-300"></div>
      <div class="bg-comic-sky-400 h-10 rounded-sm" title="sky-400"></div>
      <div class="bg-comic-sky-500 h-10 rounded-sm" title="sky-500"></div>
      <div class="bg-comic-sky-600 h-10 rounded-sm" title="sky-600"></div>
      <div class="bg-comic-sky-700 h-10 rounded-sm" title="sky-700"></div>
      <div class="bg-comic-sky-800 h-10 rounded-sm" title="sky-800"></div>
      <div class="bg-comic-sky-900 h-10 rounded-sm" title="sky-900"></div>
      <div class="bg-comic-sky-950 h-10 rounded-sm" title="sky-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Blue</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-blue-50 h-10 rounded-sm" title="blue-50"></div>
      <div class="bg-comic-blue-100 h-10 rounded-sm" title="blue-100"></div>
      <div class="bg-comic-blue-200 h-10 rounded-sm" title="blue-200"></div>
      <div class="bg-comic-blue-300 h-10 rounded-sm" title="blue-300"></div>
      <div class="bg-comic-blue-400 h-10 rounded-sm" title="blue-400"></div>
      <div class="bg-comic-blue-500 h-10 rounded-sm" title="blue-500"></div>
      <div class="bg-comic-blue-600 h-10 rounded-sm" title="blue-600"></div>
      <div class="bg-comic-blue-700 h-10 rounded-sm" title="blue-700"></div>
      <div class="bg-comic-blue-800 h-10 rounded-sm" title="blue-800"></div>
      <div class="bg-comic-blue-900 h-10 rounded-sm" title="blue-900"></div>
      <div class="bg-comic-blue-950 h-10 rounded-sm" title="blue-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Indigo</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-indigo-50 h-10 rounded-sm" title="indigo-50"></div>
      <div class="bg-comic-indigo-100 h-10 rounded-sm" title="indigo-100"></div>
      <div class="bg-comic-indigo-200 h-10 rounded-sm" title="indigo-200"></div>
      <div class="bg-comic-indigo-300 h-10 rounded-sm" title="indigo-300"></div>
      <div class="bg-comic-indigo-400 h-10 rounded-sm" title="indigo-400"></div>
      <div class="bg-comic-indigo-500 h-10 rounded-sm" title="indigo-500"></div>
      <div class="bg-comic-indigo-600 h-10 rounded-sm" title="indigo-600"></div>
      <div class="bg-comic-indigo-700 h-10 rounded-sm" title="indigo-700"></div>
      <div class="bg-comic-indigo-800 h-10 rounded-sm" title="indigo-800"></div>
      <div class="bg-comic-indigo-900 h-10 rounded-sm" title="indigo-900"></div>
      <div class="bg-comic-indigo-950 h-10 rounded-sm" title="indigo-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Violet</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-violet-50 h-10 rounded-sm" title="violet-50"></div>
      <div class="bg-comic-violet-100 h-10 rounded-sm" title="violet-100"></div>
      <div class="bg-comic-violet-200 h-10 rounded-sm" title="violet-200"></div>
      <div class="bg-comic-violet-300 h-10 rounded-sm" title="violet-300"></div>
      <div class="bg-comic-violet-400 h-10 rounded-sm" title="violet-400"></div>
      <div class="bg-comic-violet-500 h-10 rounded-sm" title="violet-500"></div>
      <div class="bg-comic-violet-600 h-10 rounded-sm" title="violet-600"></div>
      <div class="bg-comic-violet-700 h-10 rounded-sm" title="violet-700"></div>
      <div class="bg-comic-violet-800 h-10 rounded-sm" title="violet-800"></div>
      <div class="bg-comic-violet-900 h-10 rounded-sm" title="violet-900"></div>
      <div class="bg-comic-violet-950 h-10 rounded-sm" title="violet-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Purple</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-purple-50 h-10 rounded-sm" title="purple-50"></div>
      <div class="bg-comic-purple-100 h-10 rounded-sm" title="purple-100"></div>
      <div class="bg-comic-purple-200 h-10 rounded-sm" title="purple-200"></div>
      <div class="bg-comic-purple-300 h-10 rounded-sm" title="purple-300"></div>
      <div class="bg-comic-purple-400 h-10 rounded-sm" title="purple-400"></div>
      <div class="bg-comic-purple-500 h-10 rounded-sm" title="purple-500"></div>
      <div class="bg-comic-purple-600 h-10 rounded-sm" title="purple-600"></div>
      <div class="bg-comic-purple-700 h-10 rounded-sm" title="purple-700"></div>
      <div class="bg-comic-purple-800 h-10 rounded-sm" title="purple-800"></div>
      <div class="bg-comic-purple-900 h-10 rounded-sm" title="purple-900"></div>
      <div class="bg-comic-purple-950 h-10 rounded-sm" title="purple-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Fuchsia</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-fuchsia-50 h-10 rounded-sm" title="fuchsia-50"></div>
      <div class="bg-comic-fuchsia-100 h-10 rounded-sm" title="fuchsia-100"></div>
      <div class="bg-comic-fuchsia-200 h-10 rounded-sm" title="fuchsia-200"></div>
      <div class="bg-comic-fuchsia-300 h-10 rounded-sm" title="fuchsia-300"></div>
      <div class="bg-comic-fuchsia-400 h-10 rounded-sm" title="fuchsia-400"></div>
      <div class="bg-comic-fuchsia-500 h-10 rounded-sm" title="fuchsia-500"></div>
      <div class="bg-comic-fuchsia-600 h-10 rounded-sm" title="fuchsia-600"></div>
      <div class="bg-comic-fuchsia-700 h-10 rounded-sm" title="fuchsia-700"></div>
      <div class="bg-comic-fuchsia-800 h-10 rounded-sm" title="fuchsia-800"></div>
      <div class="bg-comic-fuchsia-900 h-10 rounded-sm" title="fuchsia-900"></div>
      <div class="bg-comic-fuchsia-950 h-10 rounded-sm" title="fuchsia-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Pink</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-pink-50 h-10 rounded-sm" title="pink-50"></div>
      <div class="bg-comic-pink-100 h-10 rounded-sm" title="pink-100"></div>
      <div class="bg-comic-pink-200 h-10 rounded-sm" title="pink-200"></div>
      <div class="bg-comic-pink-300 h-10 rounded-sm" title="pink-300"></div>
      <div class="bg-comic-pink-400 h-10 rounded-sm" title="pink-400"></div>
      <div class="bg-comic-pink-500 h-10 rounded-sm" title="pink-500"></div>
      <div class="bg-comic-pink-600 h-10 rounded-sm" title="pink-600"></div>
      <div class="bg-comic-pink-700 h-10 rounded-sm" title="pink-700"></div>
      <div class="bg-comic-pink-800 h-10 rounded-sm" title="pink-800"></div>
      <div class="bg-comic-pink-900 h-10 rounded-sm" title="pink-900"></div>
      <div class="bg-comic-pink-950 h-10 rounded-sm" title="pink-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Rose</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-comic-rose-50 h-10 rounded-sm" title="rose-50"></div>
      <div class="bg-comic-rose-100 h-10 rounded-sm" title="rose-100"></div>
      <div class="bg-comic-rose-200 h-10 rounded-sm" title="rose-200"></div>
      <div class="bg-comic-rose-300 h-10 rounded-sm" title="rose-300"></div>
      <div class="bg-comic-rose-400 h-10 rounded-sm" title="rose-400"></div>
      <div class="bg-comic-rose-500 h-10 rounded-sm" title="rose-500"></div>
      <div class="bg-comic-rose-600 h-10 rounded-sm" title="rose-600"></div>
      <div class="bg-comic-rose-700 h-10 rounded-sm" title="rose-700"></div>
      <div class="bg-comic-rose-800 h-10 rounded-sm" title="rose-800"></div>
      <div class="bg-comic-rose-900 h-10 rounded-sm" title="rose-900"></div>
      <div class="bg-comic-rose-950 h-10 rounded-sm" title="rose-950"></div>
    </div>
  </div>
</div>

## Using a custom value

Use the arbitrary value syntax for colours not in the Tailwind palette:

<Example>
  <div class="flex gap-3">
    <div class="bg-comic-[#ff6600] size-24 rounded-lg"></div>
    <div class="bg-comic-[rgb(128,0,255)] size-24 rounded-lg"></div>
    <div class="bg-comic-[oklch(0.7_0.15_200)] size-24 rounded-lg"></div>
  </div>
</Example>

## Applying conditionally

All `bg-comic-*` and `comic-*` utilities support Tailwind's variant syntax:

```html
<div class="bg-blue-500 hover:bg-comic-blue-500 comic-gap-4">
  Dots on hover
</div>

<div class="bg-comic-red-500 md:comic-gap-8">
  Larger gaps on medium screens
</div>
```
