<p align="center">
  <a href="https://simonm-c.github.io/tw-jib-css/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="docs/public/jibcss-logotype-white-hex.svg">
      <source media="(prefers-color-scheme: light)" srcset="docs/public/jibcss-logotype-dark-hex.svg">
      <img alt="Jibcss" src="docs/public/jibcss-logotype-dark-hex.svg" width="280" height="100" style="max-width: 100%;">
    </picture>
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/tw-jib-css"><img src="https://img.shields.io/npm/v/tw-jib-css" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/tw-jib-css"><img src="https://img.shields.io/npm/dm/tw-jib-css" alt="npm downloads"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="license"></a>
</p>

A TailwindCSS v4 utility library built entirely with CSS-first `@utility` and `@custom-variant` syntax. WCAG-exact text contrast, border gradients, CSS relative color transforms, ripple effects.

## Packages

Two packages, split by **browser support contract** rather than by bundle size. Tailwind's scanner purges
unused classes either way. Everything in `tw-jib-css` works on every engine; nothing in the experimental
package does.

| Package                                                                  | What it is                                                                                           | Docs                                                        |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [**`tw-jib-css`**](packages/tw-jib-css#readme)                           | The stable library. Works on every engine. Its own README.                                           | [Docs](https://simonm-c.github.io/tw-jib-css/)              |
| [**`tw-jib-css-experimental`**](packages/tw-jib-css-experimental#readme) | Not-yet-baseline features, mostly Chromium-only. Its own package, its own README, its own docs site. | [Docs](https://simonm-c.github.io/tw-jib-css/experimental/) |

## Features

- **Pure CSS.** No JavaScript plugin system, no `plugin()` or `addUtilities()`
- **Contrast, solved not searched.** `text-contrast-*` hits your target WCAG ratio exactly, in Chromium,
  Firefox and Safari alike
- **TailwindCSS v4 native.** Uses `@utility`, `@custom-variant`, `@theme`, `@property`
- **Works with all variants.** Hover, focus, responsive, dark mode
- **No baggage.** Every module is its own entry point and stands alone. Want automatic contrast? Import
  that one module. You don't get comic halftones as the price of admission
- **No build step.** Your Tailwind compiler reads the raw CSS directly

## Installation

```bash
pnpm add -D tw-jib-css
```

## Usage

Import in your main CSS file alongside Tailwind:

```css
@import 'tailwindcss';
@import 'tw-jib-css';
```

## Take only what you need

Every module has a sub-path export and stands entirely on its own. Import one and it works; import
several and they compose exactly as they do from the root entry. Nobody who wants accessible text
shades has to take comic halftones to get them.

```css
@import 'tailwindcss';
@import 'tw-jib-css/automatic-contrast';
@import 'tw-jib-css/grid';
```

| Module                              | Import path                     | Colour pipeline |
| ----------------------------------- | ------------------------------- | --------------- |
| _everything below_                  | `tw-jib-css`                    | yes             |
| Automatic Contrast                  | `tw-jib-css/automatic-contrast` | yes             |
| Lightness + Saturation + Hue Rotate | `tw-jib-css/color-transforms`   | yes             |
| Border Gradient                     | `tw-jib-css/border-gradient`    | yes             |
| Ripple                              | `tw-jib-css/ripple`             | yes             |
| Comic                               | `tw-jib-css/comic`              | yes             |
| Pixel                               | `tw-jib-css/pixel`              | yes             |
| Border Style                        | `tw-jib-css/border-style`       | no              |
| Grid                                | `tw-jib-css/grid`               | no              |

**Why it's worth doing.** Not bundle size. Tailwind's scanner purges classes you never write either
way. What it saves is the part the scanner _cannot_ reach: `@property` registrations and `@theme` keys
aren't classes, so they're emitted whether or not anything uses them. The colour pipeline behind
`bg-lighten-*` and `text-contrast-*` is a few dozen registrations, and the root entry emits all of them.
`tw-jib-css/grid` emits none. Those utilities read no colour, so they carry no colour machinery, and
their browser-support floor is plain Tailwind's.

Lightness, saturation and hue-rotate ship as one `color-transforms` module rather than three because
they are one pipeline: each stage's expression starts from the stage before it, so a stage taken alone
would compute against a value nothing can write.

Taking the whole library costs no more per utility than taking one module. The root entry composes so
the shared pipeline lands once, not once per module. The test suite covers both halves.

## Requirements

- **TailwindCSS 4.3+**, declared as a peer dependency (`tailwindcss >=4.3.0`).
- **Chrome 138+, Safari 16.4+, Firefox 128+** for anything that transforms a colour. Relative colour
  syntax (Chrome 119+) and `@property` account for most of that, but the lightness and saturation
  transforms also use `abs()` and `sign()`, which Chromium shipped only in 138. `border-style` and
  `grid` need none of it and work wherever Tailwind does. Every
  [guide page](https://simonm-c.github.io/tw-jib-css/) carries live Baseline status for the features
  it is built on; `abs()`/`sign()` is
  [tracked here](https://webstatus.dev/features/abs-sign).

Nothing in this package runs CSS `@function`. That is deliberate. It is the guarantee that covers
consumers who opted into nothing.

## Modules

### Automatic Contrast

A text colour whose WCAG contrast against the background equals the ratio you asked
for. Solved in closed form from the ratio formula, not searched for. Ships from the
main entry and works in Chromium, Firefox and Safari; import on its own with
`tw-jib-css/automatic-contrast`.

```html
<div class="bg-violet-600 text-contrast-aa">Exactly 4.5:1</div>
<div class="bg-amber-300 text-contrast-aaa">Exactly 7:1</div>
<div class="bg-teal-800 text-contrast-aa/oklch">4.5:1, chroma shaped in oklch</div>
```

The matching `wcag-badge`, which _measures_ a pair and prints its rating, needs
`if(style())` and so lives in the separate
[experimental package](packages/tw-jib-css-experimental#readme), Chromium-only.

### Border Gradient

Gradient borders via `background: padding-box/border-box` clipping. Linear, radial, conic gradients with 8 interpolation modes and animated spin. Stops take the `/alpha` modifier in the same three spellings as `bg-*`.

```html
<div class="border-2 border-from-blue-500 border-to-purple-500 border-linear-to-r rounded-lg p-4">
  Gradient border
</div>
<div class="border-2 border-from-pink-500/50 border-to-transparent border-radial rounded-lg p-4">
  Faded gradient border
</div>
```

### Color Transforms

Lightness and saturation across 17 colour spaces including oklch, hsl and color-mix. Hue rotation
takes the same list minus `color-mix`, so 16.

```html
<div class="bg-blue-500 bg-darken-20/oklch">20% darker in oklch</div>
<div class="bg-red-500 bg-desaturate-30/oklch">30% less saturated</div>
<div class="bg-emerald-500 bg-hue-rotate-45/oklch">Hue shifted 45deg</div>
```

### Ripple

Material-style ripple effect. Pure CSS, no JavaScript, radial gradient animation via `@property`.

```html
<button class="bg-ripple ripple-color-blue-500">Click me</button>
```

### CMYK Dots and RGB Pixels

Pure CSS texture effects via layered gradient composition. `bg-comic-*` renders CMYK
halftone dots through radial gradients and multiply blending; `bg-pixel-*` renders RGB phosphor columns
through repeating gradients and screen blending. Any colour in, textured surface out.

```html
<div class="bg-comic-rose-500 comic-dot-2">Halftone</div>
<div class="bg-pixel-cyan-400 pixel-size-3 pixel-bloom-2">CRT</div>
```

### Supporting Modules

`border-style` fills in the per-side border styles Tailwind doesn't expose (`border-t-dashed`). `grid`
adds template areas and named areas (`grid-template-areas-*`, `grid-area-*`). Neither reads a colour, so
neither carries any of the colour machinery above.

## Experimental

Not-yet-baseline features live in a **separate package**,
[`tw-jib-css-experimental`](packages/tw-jib-css-experimental#readme): CSS `@function` colour transforms,
`corner-shape`, `interpolate-size`, a styleable `<select>` and a live WCAG contrast badge. It is mostly
Chromium-only, it has its own README and its own docs site, and it declares `tw-jib-css` as a peer
dependency.

```bash
pnpm add -D tw-jib-css tw-jib-css-experimental
```

Read its README before installing. Half of it _overrides_ utilities this package already ships, so importing
the root changes how those classes compute. The additions are reachable on their own if that is all you want.

→ **[Experimental README](packages/tw-jib-css-experimental#readme)** ·
**[Experimental docs](https://simonm-c.github.io/tw-jib-css/experimental/)**

## Documentation

Full documentation with interactive demos: [tw-jib-css docs](https://simonm-c.github.io/tw-jib-css/)

For LLMs and agents, following the [llms.txt](https://llmstxt.org/) convention:

- [llms.txt](https://simonm-c.github.io/tw-jib-css/llms.txt) maps every guide page, stable and experimental
- [llms-full.txt](https://simonm-c.github.io/tw-jib-css/llms-full.txt) is the whole corpus in one fetch

The experimental package documents itself on a separate site:
[Jibcss Experimental](https://simonm-c.github.io/tw-jib-css/experimental/). Both files above cover it,
in a section of their own, since a class it overrides behaves differently from the same name here.

## License

[MIT](LICENSE)
