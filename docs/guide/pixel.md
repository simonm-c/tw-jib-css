---
title: Pixel
---

<!-- llm-context: RGB pixel column backgrounds with a CRT or LCD phosphor look, derived from any Tailwind color. Splits the color into R, G and B columns with relative color syntax and repeating linear gradients, composited with screen for additive mixing. -->

# Pixel

RGB pixel column backgrounds for any Tailwind color. LCD or CRT phosphor look, pure CSS.

Pixel mixes additively, the way a display emits light. Its sibling [Comic dots](/guide/comic) mixes subtractively, the way ink lands on paper. Left at their defaults both read back as the color you passed in; turn the knobs up and the channels come apart.

::: warning Browser support
Requires CSS relative color syntax (`rgb(from ... r 0 0)`). Chrome 111+, Safari 16.4+, Firefox 128+.
:::

::: danger Do not pair this with `text-contrast-*`
The columns sit on a black base, so the surface a reader sees is part phosphor and part black, in a proportion set by `pixel-gap`, `pixel-size` and `pixel-bloom`. `text-contrast-*` solves against one flat color and has no way to know any of that. Pick the text color by hand here. See [Composition](/guide/composition#what-automatic-contrast-can-see).
:::

## Quick reference

<UtilityTable :rows="[
  { class: 'bg-pixel-<color>', styles: 'Sets color and applies RGB pixel pattern with background-blend-mode: screen' },
  { class: 'bg-pixel-<color>/<opacity>', styles: 'Same with opacity modifier, 0-100' },
  { class: 'bg-pixel-<color>/[<number>]', styles: 'Same with a 0-1 opacity' },
  { class: 'bg-pixel-[<value>]', styles: 'Arbitrary color value' },
  { class: 'bg-pixel-(--var)', styles: 'Color from a custom property' },
  { class: 'pixel-size-<number>', styles: '--tw-jib--pixel-size: --spacing(<number>) / 4. Pixel size; width = size, height = size × 2.' },
  { class: 'pixel-size-[<value>]', styles: '--tw-jib--pixel-size: <value>' },
  { class: 'pixel-gap-<number>', styles: '--tw-jib--pixel-gap: <number>. Gap as a multiple of pixel width.' },
  { class: 'pixel-gap-[<value>]', styles: '--tw-jib--pixel-gap: <value>' },
  { class: 'pixel-bloom-<number>', styles: '--tw-jib--pixel-bloom: --spacing(<number>) / 4. Phosphor bloom; unbounded, saturates to solid.' },
  { class: 'pixel-bloom-[<value>]', styles: '--tw-jib--pixel-bloom: <value>' },
]" />

## How it works

The color splits into its RGB channels, the direct components of additive light:

| Column        | Color        | Extraction         |
| ------------- | ------------ | ------------------ |
| **R** (red)   | `rgb(r 0 0)` | Red channel only   |
| **G** (green) | `rgb(0 g 0)` | Green channel only |
| **B** (blue)  | `rgb(0 0 b)` | Blue channel only  |

Four background layers composite together. Each channel needs its own layer for `screen` blending to add up:

1. **Row mask.** `repeating-linear-gradient(to bottom, ...)` with white rows and black gaps, blended with `multiply` to punch out the horizontal row separators.
2. **Red column.** `repeating-linear-gradient(to right, ...)` at column position 0, blended with `screen`.
3. **Green column.** The same, at column position 1, blended with `screen`.
4. **Blue column.** The same, at column position 2, blended with `screen`.

All of it over a black `background-color`. `screen` adds the channels back together, which is additive mixing, and what comes out is tall rectangular pixels in R|G|B triplets, much like a real LCD panel.

Raise `pixel-bloom` above 0 and each column widens until neighbors overlap into secondary colors: yellow, cyan, magenta. That overlap is the CRT phosphor glow.

## Basic usage

Add `bg-pixel-<color>` to any element:

<Example>
  <div class="flex gap-4">
    <div class="bg-pixel-red-500 size-24 rounded-lg"></div>
    <div class="bg-pixel-blue-500 size-24 rounded-lg"></div>
    <div class="bg-pixel-emerald-500 size-24 rounded-lg"></div>
    <div class="bg-pixel-amber-500 size-24 rounded-lg"></div>
  </div>
</Example>

## Gap

Control the space between each R|G|B pixel triplet with `pixel-gap-<number>`. The value multiplies the pixel width, so `pixel-gap-1` is 1x and `pixel-gap-2` is 2x. The default is 1.

<Example>
  <div class="flex gap-3">
    <div class="space-y-1.5">
      <div class="bg-pixel-blue-500 pixel-gap-0.5 size-24 rounded-lg"></div>
      <p class="m-0 text-center text-xs font-mono opacity-60">gap-0.5</p>
    </div>
    <div class="space-y-1.5">
      <div class="bg-pixel-blue-500 pixel-gap-1 size-24 rounded-lg"></div>
      <p class="m-0 text-center text-xs font-mono opacity-60">gap-1</p>
    </div>
    <div class="space-y-1.5">
      <div class="bg-pixel-blue-500 pixel-gap-1.5 size-24 rounded-lg"></div>
      <p class="m-0 text-center text-xs font-mono opacity-60">gap-1.5</p>
    </div>
    <div class="space-y-1.5">
      <div class="bg-pixel-blue-500 pixel-gap-2 size-24 rounded-lg"></div>
      <p class="m-0 text-center text-xs font-mono opacity-60">gap-2</p>
    </div>
    <div class="space-y-1.5">
      <div class="bg-pixel-blue-500 pixel-gap-4 size-24 rounded-lg"></div>
      <p class="m-0 text-center text-xs font-mono opacity-60">gap-4</p>
    </div>
  </div>
</Example>

Gap scales with pixel size, so changing `pixel-size-*` moves the gap along with it.

## Size

Control the pixel size with `pixel-size-<number>`. Scales at spacing/4 so `pixel-size-1` = 1px, `pixel-size-2` = 2px. Width equals the size value and height is twice that, so a pixel keeps a 1:2 ratio. The default is 1px.

<Example>
  <div class="flex gap-3">
    <div class="space-y-1.5">
      <div class="bg-pixel-red-500 pixel-size-1 size-24 rounded-lg"></div>
      <p class="m-0 text-center text-xs font-mono opacity-60">size-1</p>
    </div>
    <div class="space-y-1.5">
      <div class="bg-pixel-red-500 pixel-size-2 size-24 rounded-lg"></div>
      <p class="m-0 text-center text-xs font-mono opacity-60">size-2</p>
    </div>
    <div class="space-y-1.5">
      <div class="bg-pixel-red-500 pixel-size-3 size-24 rounded-lg"></div>
      <p class="m-0 text-center text-xs font-mono opacity-60">size-3</p>
    </div>
    <div class="space-y-1.5">
      <div class="bg-pixel-red-500 pixel-size-4 size-24 rounded-lg"></div>
      <p class="m-0 text-center text-xs font-mono opacity-60">size-4</p>
    </div>
    <div class="space-y-1.5">
      <div class="bg-pixel-red-500 pixel-size-6 size-24 rounded-lg"></div>
      <p class="m-0 text-center text-xs font-mono opacity-60">size-6</p>
    </div>
  </div>
</Example>

## Bloom

Control the phosphor bloom with `pixel-bloom-<number>`. Scales at spacing/4 so `pixel-bloom-1` = 1px. This widens each channel outward so adjacent columns overlap additively, which is the CRT glow. The dial is unbounded; at high values every channel saturates and the pixel structure dissolves into solid color. The default is 1px.

- `pixel-bloom-0` gives crisp hard-edged rectangles, the LCD look
- `pixel-bloom-1` gives a slight glow, and is the default
- `pixel-bloom-2` makes adjacent channels meet
- Larger values saturate, and the structure fades into flat color

<Example>
  <div class="flex gap-3">
    <div class="space-y-1.5">
      <div class="bg-pixel-white pixel-bloom-0 size-24 rounded-lg"></div>
      <p class="m-0 text-center text-xs font-mono opacity-60">bloom-0</p>
    </div>
    <div class="space-y-1.5">
      <div class="bg-pixel-white pixel-bloom-1 size-24 rounded-lg"></div>
      <p class="m-0 text-center text-xs font-mono opacity-60">bloom-1</p>
    </div>
    <div class="space-y-1.5">
      <div class="bg-pixel-white pixel-bloom-2 size-24 rounded-lg"></div>
      <p class="m-0 text-center text-xs font-mono opacity-60">bloom-2</p>
    </div>
    <div class="space-y-1.5">
      <div class="bg-pixel-white pixel-bloom-3 size-24 rounded-lg"></div>
      <p class="m-0 text-center text-xs font-mono opacity-60">bloom-3</p>
    </div>
    <div class="space-y-1.5">
      <div class="bg-pixel-white pixel-bloom-4 size-24 rounded-lg"></div>
      <p class="m-0 text-center text-xs font-mono opacity-60">bloom-4</p>
    </div>
  </div>
</Example>

## Opacity

Add an opacity modifier with the `/` syntax to fade the whole pattern: all three RGB channel layers, the row mask and the black background. The bare value is a percentage (0–100); a bracketed value is a 0–1 alpha, so `/50` and `/[0.5]` are the same. The bracketed-percentage form `/[50%]` that the color utilities accept is not available here, because converting it would need `calc(x / 100%)`, which Firefox rejects.

<Example>
  <div class="flex gap-3">
    <div class="space-y-1.5">
      <div class="bg-pixel-red-500 size-24 rounded-lg"></div>
      <p class="m-0 text-center text-xs font-mono opacity-60">100%</p>
    </div>
    <div class="space-y-1.5">
      <div class="bg-pixel-red-500/75 size-24 rounded-lg"></div>
      <p class="m-0 text-center text-xs font-mono opacity-60">/75</p>
    </div>
    <div class="space-y-1.5">
      <div class="bg-pixel-red-500/50 size-24 rounded-lg"></div>
      <p class="m-0 text-center text-xs font-mono opacity-60">/50</p>
    </div>
    <div class="space-y-1.5">
      <div class="bg-pixel-red-500/25 size-24 rounded-lg"></div>
      <p class="m-0 text-center text-xs font-mono opacity-60">/25</p>
    </div>
    <div class="space-y-1.5">
      <div class="bg-pixel-red-500/10 size-24 rounded-lg"></div>
      <p class="m-0 text-center text-xs font-mono opacity-60">/10</p>
    </div>
  </div>
</Example>

It scales every RGB channel opacity by the same factor and turns the black background semi-transparent, so you can layer the pattern over whatever is underneath.

<Example>
  <div class="flex gap-3">
    <div class="space-y-1.5">
      <div class="relative size-24 rounded-lg overflow-hidden">
        <div class="absolute inset-0 bg-linear-to-br from-sky-400 to-indigo-600"></div>
        <div class="absolute inset-0 bg-pixel-white/50"></div>
      </div>
      <p class="m-0 text-center text-xs font-mono opacity-60">over gradient</p>
    </div>
    <div class="space-y-1.5">
      <div class="relative size-24 rounded-lg overflow-hidden">
        <div class="absolute inset-0 bg-linear-to-br from-amber-400 to-rose-500"></div>
        <div class="absolute inset-0 bg-pixel-blue-500/40"></div>
      </div>
      <p class="m-0 text-center text-xs font-mono opacity-60">over gradient</p>
    </div>
  </div>
</Example>

## RGB channel behavior

Every Tailwind color at every shade, rendered as pixels. Whites light all three R|G|B columns equally. Pure hues light only the channels they need: red lights R, blue lights B, yellow lights R+G.

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

Use the arbitrary value syntax for colors not in the Tailwind palette:

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
<!-- sub-pixels on hover -->
<div class="bg-blue-500 hover:bg-pixel-blue-500"></div>

<!-- larger pixels from md up -->
<div class="bg-pixel-red-500 md:pixel-size-3"></div>
```

## In practice

At page scale the same utilities read as surfaces rather than swatches: chrome, hero and cards are one `bg-pixel-*` class each over a shared black backplate. Small elements carry `pixel-bloom-2` so the columns merge instead of chewing through the glyphs, and text color is picked by hand for the reason in the callout above.

<Example stretch label="pixel · console ui">
  <div class="overflow-hidden text-stone-100">
    <div class="bg-pixel-stone-700 flex h-10 items-center justify-between border-b border-stone-100/10 px-3">
      <span class="font-departure text-[17px] font-bold">RASTER</span>
      <span class="bg-pixel-yellow-400 pixel-bloom-2 inline-flex h-5 items-center px-2 font-silkscreen text-[11px] uppercase tracking-[0.06em] text-stone-100">live</span>
    </div>
    <div class="bg-pixel-blue-900 px-5 pt-6 pb-7">
      <div class="font-silkscreen text-[11px] uppercase tracking-[0.08em] text-stone-400">bg-pixel-blue-900</div>
      <div class="mt-3 font-departure text-[26px] leading-[1.05] font-black">Every color is three columns of light.</div>
    </div>
    <div class="grid grid-cols-3 gap-px bg-stone-100/10">
      <div class="bg-pixel-fuchsia-700 flex aspect-[4/3] flex-col justify-between p-3">
        <span class="font-silkscreen text-[11px] uppercase tracking-[0.08em] text-stone-300">fuchsia · 700</span>
        <span class="font-departure text-[22px] font-black">R+B</span>
      </div>
      <div class="bg-pixel-yellow-500 flex aspect-[4/3] flex-col justify-between p-3">
        <span class="font-silkscreen text-[11px] uppercase tracking-[0.08em] text-stone-300">yellow · 500</span>
        <span class="font-departure text-[22px] font-black">R+G</span>
      </div>
      <div class="bg-pixel-cyan-700 flex aspect-[4/3] flex-col justify-between p-3">
        <span class="font-silkscreen text-[11px] uppercase tracking-[0.08em] text-stone-300">cyan · 700</span>
        <span class="font-departure text-[22px] font-black">G+B</span>
      </div>
    </div>
    <div class="bg-pixel-stone-800 flex gap-2 p-3">
      <span class="bg-pixel-stone-900 flex-1 border border-stone-100/20 px-3 py-2 font-departure text-[15px] text-stone-400">flat input · no texture</span>
      <span class="bg-pixel-red-500 pixel-bloom-2 inline-flex items-center px-4 font-departure text-[15px] uppercase tracking-[0.08em] text-stone-100">submit →</span>
    </div>
  </div>
</Example>

## Import

Included in `@import 'tw-jib-css'`. To import individually:

```css
@import 'tw-jib-css/pixel';
```
