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

TailwindCSS v4 utility library — WCAG-exact text contrast, border gradients, CSS relative color transforms, ripple effects, and more — built entirely with CSS-first `@utility` and `@custom-variant` syntax.

## Packages

Two packages, split by **browser support contract** rather than by bundle size — Tailwind's scanner purges
unused classes either way. Everything in `tw-jib-css` works on every engine; nothing in the experimental
package does.

| Package                                                                  | What it is                                                                                           | Docs                                                        |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [**`tw-jib-css`**](packages/tw-jib-css#readme)                           | The stable library. Works on every engine. Its own README.                                           | [Docs](https://simonm-c.github.io/tw-jib-css/)              |
| [**`tw-jib-css-experimental`**](packages/tw-jib-css-experimental#readme) | Not-yet-baseline features, mostly Chromium-only. Its own package, its own README, its own docs site. | [Docs](https://simonm-c.github.io/tw-jib-css/experimental/) |

## Features

- **Pure CSS** — no JavaScript plugin system, no `plugin()` or `addUtilities()`
- **Contrast, solved not searched** — `text-a11y-*` hits your target WCAG ratio exactly, in Chromium, Firefox and Safari alike
- **TailwindCSS v4 native** — uses `@utility`, `@custom-variant`, `@theme`, `@property`
- **Works with all variants** — hover, focus, responsive, dark mode, etc.
- **Selective imports** — import only what you need via sub-path exports
- **No build step** — ships raw CSS consumed directly by your Tailwind compiler

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

### Selective imports

Import only the modules you need:

```css
@import 'tailwindcss';
@import 'tw-jib-css/border-gradient';
@import 'tw-jib-css/lightness';
```

## Modules

### Accessible Shade

A text colour whose WCAG contrast against the background equals the ratio you asked
for — solved in closed form from the ratio formula, not searched for. Ships from the
main entry and works in Chromium, Firefox and Safari; import on its own with
`tw-jib-css/accessible-shade`.

```html
<div class="bg-violet-600 text-a11y-aa">Exactly 4.5:1</div>
<div class="bg-amber-300 text-a11y-aaa">Exactly 7:1</div>
<div class="bg-teal-800 text-a11y-aa/oklch">4.5:1, chroma shaped in oklch</div>
```

The matching `wcag-badge`, which _measures_ a pair and prints its rating, needs
`if(style())` and so lives in the separate
[experimental package](packages/tw-jib-css-experimental#readme), Chromium-only.

### Border Gradient

Gradient borders via `background: padding-box/border-box` clipping. Linear, radial, conic gradients with 8 interpolation modes and animated spin.

```html
<div
  class="border-2 border-transparent border-from-blue-500 border-to-purple-500 border-linear-to-r rounded-lg p-4"
>
  Gradient border
</div>
```

### Color Transforms

Relative color transforms — lightness, saturation, and hue rotation — across 17 colour spaces including oklch, hsl, and color-mix.

```html
<div class="bg-blue-500 bg-darken-20/oklch">20% darker in oklch</div>
<div class="bg-red-500 bg-desaturate-30/oklch">30% less saturated</div>
<div class="bg-emerald-500 bg-hue-rotate-45/oklch">Hue shifted 45deg</div>
```

### Ripple

Material-style ripple effect — pure CSS, no JavaScript. Radial gradient animation via `@property`.

```html
<button class="bg-ripple ripple-color-blue-500">Click me</button>
```

### Print Textures

Pure CSS print-inspired texture effects via layered gradient composition.

| Module | Import             | Description                                       |
| ------ | ------------------ | ------------------------------------------------- |
| Comic  | `tw-jib-css/comic` | CMYK halftone dots via radial gradient + multiply |
| Pixel  | `tw-jib-css/pixel` | RGB LCD/CRT columns via repeating linear gradient |

### Supporting Modules

| Module       | Import                    | Description                                      |
| ------------ | ------------------------- | ------------------------------------------------ |
| Border Style | `tw-jib-css/border-style` | Per-side border styles (`border-t-dashed`, etc.) |
| Grid         | `tw-jib-css/grid`         | Grid template areas and named grid areas         |

## Experimental

Not-yet-baseline features live in a **separate package**,
[`tw-jib-css-experimental`](packages/tw-jib-css-experimental#readme) — CSS `@function` colour transforms,
`corner-shape`, `interpolate-size`, a styleable `<select>`, and a live WCAG contrast badge. It is mostly
Chromium-only, it has its own README and its own docs site, and it declares `tw-jib-css` as a peer
dependency.

```bash
pnpm add -D tw-jib-css tw-jib-css-experimental
```

Read its README before installing: half of it _overrides_ utilities this package already ships, so importing
the root changes how those classes compute. The additions are reachable on their own if that is all you want.

→ **[Experimental README](packages/tw-jib-css-experimental#readme)** ·
**[Experimental docs](https://simonm-c.github.io/tw-jib-css/experimental/)**

## Documentation

Full documentation with interactive demos: [tw-jib-css docs](https://simonm-c.github.io/tw-jib-css/)

For LLMs and agents, following the [llms.txt](https://llmstxt.org/) convention:

- [llms.txt](https://simonm-c.github.io/tw-jib-css/llms.txt) — indexed map of every guide page
- [llms-full.txt](https://simonm-c.github.io/tw-jib-css/llms-full.txt) — the whole corpus in one fetch

The experimental package documents itself separately:
[Jibcss Experimental](https://simonm-c.github.io/tw-jib-css/experimental/).

## License

[MIT](LICENSE)
