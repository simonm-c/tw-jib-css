---
title: Watercolor
---

<!-- llm-context: watercolor module — multi-pigment watercolor wash backgrounds. Converts any colour to a 9-slot pigment palette (6 primary + 3 shadow) using oklch relative colour syntax and radial gradients with multiply blend mode. Per-pigment alpha computed from hue-distance falloff, chroma weighting, and dilution. Three palettes: contemporary (modern chromatic), traditional (Turner/Homer aged), eastern (sumi ink-and-wash). Wash control 1–5 scales pool size and density. -->

# Watercolor

Multi-pigment watercolour wash backgrounds for any Tailwind colour. Three palette traditions — contemporary, Turner-era, and East Asian. Pure CSS, no images.

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/watercolor';
```
:::

::: info Browser Support
Uses CSS relative colour syntax with `oklch(from ...)`, `pow()`, `cos()`, and `clamp()` inside alpha channels. Chrome 125+, Safari 18.2+, Firefox 128+.
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'bg-watercolor-<color>', styles: 'Sets colour and applies 9-pigment watercolor wash with background-blend-mode: multiply' },
  { class: 'bg-watercolor-<color>/<opacity>', styles: 'Same with opacity modifier (0–100)' },
  { class: 'bg-watercolor-[<value>]', styles: 'Arbitrary colour value' },
  { class: 'watercolor-wash-<number>', styles: '--tw-jib--wc-wash: <number> — water amount (1 = dry, 3 = balanced, 5 = wet)' },
  { class: 'watercolor-wash-[<value>]', styles: '--tw-jib--wc-wash: <value>' },
  { class: 'watercolor-contemporary', styles: 'Contemporary palette — modern pigments, chromatic shadows (default)' },
  { class: 'watercolor-traditional', styles: 'Traditional palette — Turner/Homer aged pigments, earth-dominant shadows' },
  { class: 'watercolor-eastern', styles: 'Eastern palette — East Asian ink-and-wash, sumi ink shadows' },
]" />

## How it works

The input colour's oklch channels (lightness, chroma, hue) drive per-pigment alpha computation. Each of the 9 palette slots is a pair of overlapping radial-gradient pools positioned at fixed coordinates. Every pool's alpha is computed inside the gradient's colour stop using relative colour syntax:

```
alpha = peak × hue_weight × chroma × dilution × wash_density × opacity
```

Where:
- **hue_weight** — `max(0, 1 - hue_distance / 90)` — pigments near the input hue activate strongly; distant pigments fade to zero
- **chroma** — `min(1, c / 0.12)` — low-chroma (grey) inputs suppress colour pigments
- **dilution** — `clamp(0.12, (1 - l) * 1.8 + 0.08, 1)` — lighter inputs produce more dilute washes
- **peak** — per-pigment maximum opacity, tuned per palette

Shadow pigments (slots 7–9) use a dual-activation model: a chromatic path (darkness-gated, hue-biased) and a neutrality path (low-chroma Jane's Grey mixing). This gives each palette genuinely different darkening character.

### Palette slots

| Slot | Role | Contemporary | Traditional | Eastern |
|------|------|-------------|-------------|---------|
| 1 | Cool red / magenta | Quinacridone Rose | Rose Madder | Carmine 胭脂 |
| 2 | Warm red / orange | Pyrrol Scarlet | Vermilion | Cinnabar 朱砂 |
| 3 | Yellow | Hansa Yellow | Gamboge | Gamboge 藤黃 |
| 4 | Green | Phthalo Green BS | Viridian | Malachite 石綠 |
| 5 | Cool blue | Phthalo Blue GS | Prussian Blue | Indigo 花青 |
| 6 | Warm blue | Ultramarine | Ultramarine | Azurite 石青 |
| 7 | Warm earth shadow | Burnt Sienna | Burnt Sienna | Sumi ink 墨 |
| 8 | Cool dark shadow | Ultramarine Dark | Indigo | Sumi ink 墨 |
| 9 | Warm deep shadow | Quin Rose warm | Sepia | Sumi ink 墨 |

## Basic Usage

Add `bg-watercolor-{color}` to any element:

<Example>
  <div class="flex gap-4">
    <div class="bg-watercolor-red-500 size-24 rounded-lg"></div>
    <div class="bg-watercolor-blue-500 size-24 rounded-lg"></div>
    <div class="bg-watercolor-emerald-500 size-24 rounded-lg"></div>
    <div class="bg-watercolor-amber-500 size-24 rounded-lg"></div>
  </div>
</Example>

Darker colours produce more pigment and activate shadow layers:

<Example>
  <div class="flex gap-3">
    <div class="bg-watercolor-blue-100 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono">blue-100</span></div>
    <div class="bg-watercolor-blue-300 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono">blue-300</span></div>
    <div class="bg-watercolor-blue-500 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">blue-500</span></div>
    <div class="bg-watercolor-blue-700 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">blue-700</span></div>
    <div class="bg-watercolor-blue-900 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">blue-900</span></div>
  </div>
</Example>

## Palettes

::: tip Palette inheritance
Unlike most properties in this library, palette and shadow tuning properties **inherit from parent elements**. Set the palette once on a container and every `bg-watercolor-*` child uses the same mode — no need to repeat `watercolor-traditional` or `watercolor-eastern` on each element.

```html
<section class="watercolor-traditional">
  <div class="bg-watercolor-red-500"><!-- traditional --></div>
  <div class="bg-watercolor-blue-500"><!-- traditional --></div>
  <div class="bg-watercolor-amber-500"><!-- traditional --></div>
</section>
```

A child can still override to a different palette locally — `watercolor-contemporary` on a single element wins over the inherited parent palette.
:::

### Contemporary (default)

Modern pigments with full chroma. Shadows are chromatic accents — they only activate on chromatic inputs (chroma-strength = 1). Gentle shadow onset, hue-selective earth tones, narrow warm accent.

<Example>
  <div class="flex gap-3">
    <div class="bg-watercolor-yellow-500 watercolor-contemporary size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono">yellow-500</span></div>
    <div class="bg-watercolor-red-700 watercolor-contemporary size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">red-700</span></div>
    <div class="bg-watercolor-teal-500 watercolor-contemporary size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">teal-500</span></div>
    <div class="bg-watercolor-slate-500 watercolor-contemporary size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">slate-500</span></div>
  </div>
</Example>

### Traditional

Historical palette with differential aging baked in. Fugitive organic pigments (rose madder, gamboge) drift lower-chroma and warmer; stable inorganic pigments (ultramarine, vermilion, viridian) hold. Earlier shadow onset, earth-dominant sienna, pervasive sepia warm-earth note — the Turner/Homer "old watercolour" signature.

<Example>
  <div class="flex gap-3">
    <div class="bg-watercolor-yellow-500 watercolor-traditional size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono">yellow-500</span></div>
    <div class="bg-watercolor-red-700 watercolor-traditional size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">red-700</span></div>
    <div class="bg-watercolor-teal-500 watercolor-traditional size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">teal-500</span></div>
    <div class="bg-watercolor-slate-500 watercolor-traditional size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">slate-500</span></div>
  </div>
</Example>

### Eastern

East Asian ink-and-wash tradition. Sumi ink is the structural dominant — all three shadow slots share identical ink values with different activation curves. Mineral pigments (cinnabar, malachite, azurite) at lower chroma but higher peak. Shadow chroma-gating nearly disabled (chroma-strength = 0.2), so ink tracks darkness regardless of source chroma.

<Example>
  <div class="flex gap-3">
    <div class="bg-watercolor-yellow-500 watercolor-eastern size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono">yellow-500</span></div>
    <div class="bg-watercolor-red-700 watercolor-eastern size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">red-700</span></div>
    <div class="bg-watercolor-teal-500 watercolor-eastern size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">teal-500</span></div>
    <div class="bg-watercolor-slate-500 watercolor-eastern size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">slate-500</span></div>
  </div>
</Example>

### Palette comparison

The same colours across all three palettes:

<Example stretch>
  <div class="grid grid-cols-4 gap-3">
    <p class="text-xs font-mono font-semibold col-span-4">Contemporary</p>
    <div class="bg-watercolor-yellow-500 h-20 rounded-lg"></div>
    <div class="bg-watercolor-red-700 h-20 rounded-lg"></div>
    <div class="bg-watercolor-teal-500 h-20 rounded-lg"></div>
    <div class="bg-watercolor-slate-500 h-20 rounded-lg"></div>
    <p class="text-xs font-mono font-semibold col-span-4">Traditional</p>
    <div class="bg-watercolor-yellow-500 watercolor-traditional h-20 rounded-lg"></div>
    <div class="bg-watercolor-red-700 watercolor-traditional h-20 rounded-lg"></div>
    <div class="bg-watercolor-teal-500 watercolor-traditional h-20 rounded-lg"></div>
    <div class="bg-watercolor-slate-500 watercolor-traditional h-20 rounded-lg"></div>
    <p class="text-xs font-mono font-semibold col-span-4">Eastern</p>
    <div class="bg-watercolor-yellow-500 watercolor-eastern h-20 rounded-lg"></div>
    <div class="bg-watercolor-red-700 watercolor-eastern h-20 rounded-lg"></div>
    <div class="bg-watercolor-teal-500 watercolor-eastern h-20 rounded-lg"></div>
    <div class="bg-watercolor-slate-500 watercolor-eastern h-20 rounded-lg"></div>
  </div>
</Example>

## Wash

Control the water amount with `watercolor-wash-{number}`. The scale runs 1–5 where:

- **1** — dry brush: tight pools, heavy pigment
- **3** — balanced wash (default)
- **5** — wet: diffuse pools, pale pigment

Wash affects both pool spread (ellipse scale 0.75x–1.6x) and per-pigment density (alpha multiplier 1.2x–0.65x).

<Example>
  <div class="flex gap-3">
    <div class="bg-watercolor-blue-500 watercolor-wash-1 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">wash-1</span></div>
    <div class="bg-watercolor-blue-500 watercolor-wash-2 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">wash-2</span></div>
    <div class="bg-watercolor-blue-500 watercolor-wash-3 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">wash-3</span></div>
    <div class="bg-watercolor-blue-500 watercolor-wash-4 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">wash-4</span></div>
    <div class="bg-watercolor-blue-500 watercolor-wash-5 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">wash-5</span></div>
  </div>
</Example>

## Opacity

Add an opacity modifier with the `/` syntax to fade the entire pattern — all nine pigment layers and the white paper base. The value is a percentage (0–100).

<Example>
  <div class="flex gap-3">
    <div class="bg-watercolor-red-500 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">100%</span></div>
    <div class="bg-watercolor-red-500/75 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono text-white">/75</span></div>
    <div class="bg-watercolor-red-500/50 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono">/50</span></div>
    <div class="bg-watercolor-red-500/25 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono">/25</span></div>
    <div class="bg-watercolor-red-500/10 size-24 rounded-lg flex items-center justify-center"><span class="text-xs font-mono">/10</span></div>
  </div>
</Example>

This scales ink alpha proportionally and makes the white paper semi-transparent, so the pattern can be layered over other content.

<Example>
  <div class="flex gap-3">
    <div class="relative size-24 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-linear-to-br from-sky-400 to-indigo-600"></div>
      <div class="absolute inset-0 bg-watercolor-black/50"></div>
      <span class="relative text-xs font-mono text-white flex items-center justify-center h-full">over gradient</span>
    </div>
    <div class="relative size-24 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-linear-to-br from-amber-400 to-rose-500"></div>
      <div class="absolute inset-0 bg-watercolor-blue-500/40"></div>
      <span class="relative text-xs font-mono text-white flex items-center justify-center h-full">over gradient</span>
    </div>
  </div>
</Example>

## Pigment Response

Every Tailwind colour at every shade, rendered as watercolour. Light colours produce dilute transparent washes. Saturated mid-tones show the strongest pigment activation. Dark colours bring in shadow layers.

<div class="space-y-4 my-6">
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Slate</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-watercolor-slate-50 h-10 rounded-sm" title="slate-50"></div>
      <div class="bg-watercolor-slate-100 h-10 rounded-sm" title="slate-100"></div>
      <div class="bg-watercolor-slate-200 h-10 rounded-sm" title="slate-200"></div>
      <div class="bg-watercolor-slate-300 h-10 rounded-sm" title="slate-300"></div>
      <div class="bg-watercolor-slate-400 h-10 rounded-sm" title="slate-400"></div>
      <div class="bg-watercolor-slate-500 h-10 rounded-sm" title="slate-500"></div>
      <div class="bg-watercolor-slate-600 h-10 rounded-sm" title="slate-600"></div>
      <div class="bg-watercolor-slate-700 h-10 rounded-sm" title="slate-700"></div>
      <div class="bg-watercolor-slate-800 h-10 rounded-sm" title="slate-800"></div>
      <div class="bg-watercolor-slate-900 h-10 rounded-sm" title="slate-900"></div>
      <div class="bg-watercolor-slate-950 h-10 rounded-sm" title="slate-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Red</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-watercolor-red-50 h-10 rounded-sm" title="red-50"></div>
      <div class="bg-watercolor-red-100 h-10 rounded-sm" title="red-100"></div>
      <div class="bg-watercolor-red-200 h-10 rounded-sm" title="red-200"></div>
      <div class="bg-watercolor-red-300 h-10 rounded-sm" title="red-300"></div>
      <div class="bg-watercolor-red-400 h-10 rounded-sm" title="red-400"></div>
      <div class="bg-watercolor-red-500 h-10 rounded-sm" title="red-500"></div>
      <div class="bg-watercolor-red-600 h-10 rounded-sm" title="red-600"></div>
      <div class="bg-watercolor-red-700 h-10 rounded-sm" title="red-700"></div>
      <div class="bg-watercolor-red-800 h-10 rounded-sm" title="red-800"></div>
      <div class="bg-watercolor-red-900 h-10 rounded-sm" title="red-900"></div>
      <div class="bg-watercolor-red-950 h-10 rounded-sm" title="red-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Orange</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-watercolor-orange-50 h-10 rounded-sm" title="orange-50"></div>
      <div class="bg-watercolor-orange-100 h-10 rounded-sm" title="orange-100"></div>
      <div class="bg-watercolor-orange-200 h-10 rounded-sm" title="orange-200"></div>
      <div class="bg-watercolor-orange-300 h-10 rounded-sm" title="orange-300"></div>
      <div class="bg-watercolor-orange-400 h-10 rounded-sm" title="orange-400"></div>
      <div class="bg-watercolor-orange-500 h-10 rounded-sm" title="orange-500"></div>
      <div class="bg-watercolor-orange-600 h-10 rounded-sm" title="orange-600"></div>
      <div class="bg-watercolor-orange-700 h-10 rounded-sm" title="orange-700"></div>
      <div class="bg-watercolor-orange-800 h-10 rounded-sm" title="orange-800"></div>
      <div class="bg-watercolor-orange-900 h-10 rounded-sm" title="orange-900"></div>
      <div class="bg-watercolor-orange-950 h-10 rounded-sm" title="orange-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Amber</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-watercolor-amber-50 h-10 rounded-sm" title="amber-50"></div>
      <div class="bg-watercolor-amber-100 h-10 rounded-sm" title="amber-100"></div>
      <div class="bg-watercolor-amber-200 h-10 rounded-sm" title="amber-200"></div>
      <div class="bg-watercolor-amber-300 h-10 rounded-sm" title="amber-300"></div>
      <div class="bg-watercolor-amber-400 h-10 rounded-sm" title="amber-400"></div>
      <div class="bg-watercolor-amber-500 h-10 rounded-sm" title="amber-500"></div>
      <div class="bg-watercolor-amber-600 h-10 rounded-sm" title="amber-600"></div>
      <div class="bg-watercolor-amber-700 h-10 rounded-sm" title="amber-700"></div>
      <div class="bg-watercolor-amber-800 h-10 rounded-sm" title="amber-800"></div>
      <div class="bg-watercolor-amber-900 h-10 rounded-sm" title="amber-900"></div>
      <div class="bg-watercolor-amber-950 h-10 rounded-sm" title="amber-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Green</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-watercolor-green-50 h-10 rounded-sm" title="green-50"></div>
      <div class="bg-watercolor-green-100 h-10 rounded-sm" title="green-100"></div>
      <div class="bg-watercolor-green-200 h-10 rounded-sm" title="green-200"></div>
      <div class="bg-watercolor-green-300 h-10 rounded-sm" title="green-300"></div>
      <div class="bg-watercolor-green-400 h-10 rounded-sm" title="green-400"></div>
      <div class="bg-watercolor-green-500 h-10 rounded-sm" title="green-500"></div>
      <div class="bg-watercolor-green-600 h-10 rounded-sm" title="green-600"></div>
      <div class="bg-watercolor-green-700 h-10 rounded-sm" title="green-700"></div>
      <div class="bg-watercolor-green-800 h-10 rounded-sm" title="green-800"></div>
      <div class="bg-watercolor-green-900 h-10 rounded-sm" title="green-900"></div>
      <div class="bg-watercolor-green-950 h-10 rounded-sm" title="green-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Cyan</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-watercolor-cyan-50 h-10 rounded-sm" title="cyan-50"></div>
      <div class="bg-watercolor-cyan-100 h-10 rounded-sm" title="cyan-100"></div>
      <div class="bg-watercolor-cyan-200 h-10 rounded-sm" title="cyan-200"></div>
      <div class="bg-watercolor-cyan-300 h-10 rounded-sm" title="cyan-300"></div>
      <div class="bg-watercolor-cyan-400 h-10 rounded-sm" title="cyan-400"></div>
      <div class="bg-watercolor-cyan-500 h-10 rounded-sm" title="cyan-500"></div>
      <div class="bg-watercolor-cyan-600 h-10 rounded-sm" title="cyan-600"></div>
      <div class="bg-watercolor-cyan-700 h-10 rounded-sm" title="cyan-700"></div>
      <div class="bg-watercolor-cyan-800 h-10 rounded-sm" title="cyan-800"></div>
      <div class="bg-watercolor-cyan-900 h-10 rounded-sm" title="cyan-900"></div>
      <div class="bg-watercolor-cyan-950 h-10 rounded-sm" title="cyan-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Blue</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-watercolor-blue-50 h-10 rounded-sm" title="blue-50"></div>
      <div class="bg-watercolor-blue-100 h-10 rounded-sm" title="blue-100"></div>
      <div class="bg-watercolor-blue-200 h-10 rounded-sm" title="blue-200"></div>
      <div class="bg-watercolor-blue-300 h-10 rounded-sm" title="blue-300"></div>
      <div class="bg-watercolor-blue-400 h-10 rounded-sm" title="blue-400"></div>
      <div class="bg-watercolor-blue-500 h-10 rounded-sm" title="blue-500"></div>
      <div class="bg-watercolor-blue-600 h-10 rounded-sm" title="blue-600"></div>
      <div class="bg-watercolor-blue-700 h-10 rounded-sm" title="blue-700"></div>
      <div class="bg-watercolor-blue-800 h-10 rounded-sm" title="blue-800"></div>
      <div class="bg-watercolor-blue-900 h-10 rounded-sm" title="blue-900"></div>
      <div class="bg-watercolor-blue-950 h-10 rounded-sm" title="blue-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Violet</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-watercolor-violet-50 h-10 rounded-sm" title="violet-50"></div>
      <div class="bg-watercolor-violet-100 h-10 rounded-sm" title="violet-100"></div>
      <div class="bg-watercolor-violet-200 h-10 rounded-sm" title="violet-200"></div>
      <div class="bg-watercolor-violet-300 h-10 rounded-sm" title="violet-300"></div>
      <div class="bg-watercolor-violet-400 h-10 rounded-sm" title="violet-400"></div>
      <div class="bg-watercolor-violet-500 h-10 rounded-sm" title="violet-500"></div>
      <div class="bg-watercolor-violet-600 h-10 rounded-sm" title="violet-600"></div>
      <div class="bg-watercolor-violet-700 h-10 rounded-sm" title="violet-700"></div>
      <div class="bg-watercolor-violet-800 h-10 rounded-sm" title="violet-800"></div>
      <div class="bg-watercolor-violet-900 h-10 rounded-sm" title="violet-900"></div>
      <div class="bg-watercolor-violet-950 h-10 rounded-sm" title="violet-950"></div>
    </div>
  </div>
  <div>
    <p class="text-xs font-mono font-semibold mb-1">Pink</p>
    <div class="grid grid-cols-11 gap-0.5">
      <div class="bg-watercolor-pink-50 h-10 rounded-sm" title="pink-50"></div>
      <div class="bg-watercolor-pink-100 h-10 rounded-sm" title="pink-100"></div>
      <div class="bg-watercolor-pink-200 h-10 rounded-sm" title="pink-200"></div>
      <div class="bg-watercolor-pink-300 h-10 rounded-sm" title="pink-300"></div>
      <div class="bg-watercolor-pink-400 h-10 rounded-sm" title="pink-400"></div>
      <div class="bg-watercolor-pink-500 h-10 rounded-sm" title="pink-500"></div>
      <div class="bg-watercolor-pink-600 h-10 rounded-sm" title="pink-600"></div>
      <div class="bg-watercolor-pink-700 h-10 rounded-sm" title="pink-700"></div>
      <div class="bg-watercolor-pink-800 h-10 rounded-sm" title="pink-800"></div>
      <div class="bg-watercolor-pink-900 h-10 rounded-sm" title="pink-900"></div>
      <div class="bg-watercolor-pink-950 h-10 rounded-sm" title="pink-950"></div>
    </div>
  </div>
</div>

## Using a custom value

Use the arbitrary value syntax for colours not in the Tailwind palette:

<Example>
  <div class="flex gap-3">
    <div class="bg-watercolor-[#ff6600] size-24 rounded-lg"></div>
    <div class="bg-watercolor-[rgb(128,0,255)] size-24 rounded-lg"></div>
    <div class="bg-watercolor-[oklch(0.7_0.15_200)] size-24 rounded-lg"></div>
  </div>
</Example>

## Applying conditionally

All `bg-watercolor-*` and `watercolor-*` utilities support Tailwind's variant syntax:

```html
<div class="bg-blue-500 hover:bg-watercolor-blue-500">
  Watercolour on hover
</div>

<div class="bg-watercolor-red-500 md:watercolor-wash-5">
  Wetter wash on medium screens
</div>

<div class="bg-watercolor-blue-500 hover:watercolor-traditional transition-all duration-300 cursor-pointer">
  Traditional palette on hover
</div>
```