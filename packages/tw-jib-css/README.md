<p align="center">
  <a href="https://simonm-c.github.io/tw-jib-css/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://simonm-c.github.io/tw-jib-css/jibcss-logotype-white-hex.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://simonm-c.github.io/tw-jib-css/jibcss-logotype-dark-hex.svg">
      <img alt="Jibcss" src="https://simonm-c.github.io/tw-jib-css/jibcss-logotype-dark-hex.svg" width="280" height="100" style="max-width: 100%;">
    </picture>
  </a>
</p>

<p align="center"><strong>tw-jib-css</strong> – WCAG-exact text contrast, gradient borders, and colour transforms. Every engine.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/tw-jib-css"><img src="https://img.shields.io/npm/v/tw-jib-css" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/tw-jib-css"><img src="https://img.shields.io/npm/dm/tw-jib-css" alt="npm downloads"></a>
  <a href="https://github.com/simonm-c/tw-jib-css/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="license"></a>
</p>

A TailwindCSS v4 utility library built entirely with the CSS-first `@utility`, `@custom-variant`,
`@theme` and `@property` syntax. No JavaScript plugin system, no `plugin()`, no `addUtilities()`, no
build step – it ships raw CSS your Tailwind compiler consumes directly.

Everything here works on every engine that supports CSS relative colour syntax: **Chrome 111+,
Safari 16.4+, Firefox 128+**. Nothing in this package runs CSS `@function`; that is the guarantee that
covers consumers who opted into nothing.

## Installation

```bash
pnpm add -D tw-jib-css
```

Peer dependency: `tailwindcss >=4.3.0`.

## Usage

```css
@import 'tailwindcss';
@import 'tw-jib-css';
```

## What you get

| Import                        | Module           | Class patterns                                                                                                                           |
| ----------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `tw-jib-css`                  | everything       | all of the below, plus the colour pipeline that feeds them                                                                               |
| `tw-jib-css/accessible-shade` | Accessible Shade | `text-a11y-aa` `text-a11y-aaa` `text-a11y-aa-lg`                                                                                         |
| `tw-jib-css/color-transforms` | Lightness        | `{surface}-lightness-*` `-{surface}-lightness-*` `{surface}-lighten-*` `{surface}-darken-*`                                              |
| `tw-jib-css/color-transforms` | Saturation       | `{surface}-saturation-*` `-{surface}-saturation-*` `{surface}-saturate-*` `{surface}-desaturate-*`                                       |
| `tw-jib-css/color-transforms` | Hue Rotate       | `{surface}-hue-rotate-*` `-{surface}-hue-rotate-*`                                                                                       |
| `tw-jib-css/border-gradient`  | Border Gradient  | `border-from-*` `border-via-*` `border-to-*` `border-linear-*` `border-radial-*` `border-conic-*` `border-spin` `border-spin-duration-*` |
| `tw-jib-css/ripple`           | Ripple           | `bg-ripple` `ripple-color-*` `ripple-duration-*` `ripple-position-*` `ripple-fade-*`                                                     |
| `tw-jib-css/comic`            | Comic Halftone   | `bg-comic-*` `comic-dot-*` `comic-gap-*` `comic-bleed-*`                                                                                 |
| `tw-jib-css/pixel`            | CRT Pixel        | `bg-pixel-*` `pixel-size-*` `pixel-gap-*` `pixel-bloom-*`                                                                                |
| `tw-jib-css/border-style`     | Border Style     | `border-{t,r,b,l,x,y,s,e}-{solid,dashed,dotted,double,groove,ridge,inset,outset,none,hidden}`                                            |
| `tw-jib-css/grid`             | Grid Areas       | `grid-template-areas-*` `grid-area-*`                                                                                                    |

`{surface}` is one of `bg` `text` `fill` `stroke` `outline` `accent` `border`. Every utility accepts
Tailwind's arbitrary-value syntax (`bg-lightness-[37]`) and composes with every variant (`hover:`,
`dark:`, `md:`).

## Accessible Shade

A text colour whose WCAG 2.x contrast against the background **equals** the ratio you asked for –
solved in closed form from the ratio formula. Not a binary search, not a precomputed table, no
JavaScript. Exact on Chromium, Firefox and Safari alike.

```html
<div class="bg-violet-600 text-a11y-aa">Exactly 4.5:1</div>
<div class="bg-amber-300 text-a11y-aaa">Exactly 7:1</div>
<div class="bg-teal-800 text-a11y-aa/oklch">4.5:1, chroma shaped in oklch</div>
```

Levels are themeable. Define a ratio and the class exists:

```css
@theme {
  --tw-jib--a11y-ratio-aa-plus: 5;
}
```

```html
<span class="text-a11y-aa-plus">exactly 5:1</span>
```

Its partner `wcag-badge` – which _measures_ a pair and prints its rating – needs `if(style())` and
lives in [`tw-jib-css-experimental`](https://www.npmjs.com/package/tw-jib-css-experimental).

## The colour pipeline

`bg-*` writes a source colour; hue-rotate, saturation and lightness compose over it in that order;
`text-a11y-*` reads the composed result. So this does what it looks like it does:

```html
<div class="bg-red-500 bg-hue-rotate-120 -bg-saturation-30 bg-lightness-25">
  <span class="text-a11y-aa">contrasted against the transformed background</span>
</div>
```

### Colour space modifiers

Append `/space` to any transform. Defaults to `oklch` everywhere.

**Lightness, saturation, `text-a11y-*`** – 17 spaces:

```
oklch  lch  lab  oklab  hsl  hwb  rgb  srgb  srgb-linear  display-p3
a98-rgb  prophoto-rgb  rec2020  xyz  xyz-d50  xyz-d65  color-mix
```

**Hue rotate** – the same 16, minus `color-mix`; there is no honest two-colour form of a rotation.

```html
<div class="bg-blue-500 bg-darken-20/oklch">20% darker in oklch</div>
<div class="bg-red-500 bg-desaturate-30/hsl">30% less saturated in hsl</div>
<div class="bg-emerald-500 bg-hue-rotate-45/lab">45° in lab</div>
```

## Take only what you need

Every import in the [What you get](#what-you-get) table is its own entry point and stands entirely on
its own. Somebody who wants accessible text shades imports that one module – they don't take comic
halftones, ripples or gradient borders as the price of admission.

```css
@import 'tailwindcss';
@import 'tw-jib-css/accessible-shade';
@import 'tw-jib-css/grid';
```

**Why it's worth doing.** Not bundle size – Tailwind's scanner purges classes you never write either
way. What it saves is the part the scanner _cannot_ reach: `@property` registrations and `@theme` keys
aren't classes, so they're emitted whether or not anything uses them. The colour pipeline behind
`bg-lighten-*` and `text-a11y-*` is a few dozen registrations, and the root entry emits all of them.
`tw-jib-css/grid` and `tw-jib-css/border-style` emit none – those utilities read no colour, so they
carry no colour machinery and their browser-support floor is plain Tailwind's.

Lightness, saturation and hue-rotate ship as one `color-transforms` module rather than three,
because they are one pipeline: each stage's expression starts from the stage before it, so a stage
taken alone would compute against a value nothing can write.

Importing several modules costs no more than importing the root entry: the root is composed from the
partials so the shared pipeline lands once rather than once per module. Both halves – that each module
resolves every `var()` it emits alone, and that the combined entry doesn't re-emit the shared core –
are covered by the test suite.

## Other modules

### Border Gradient

Gradient borders via `background: padding-box / border-box` clipping. Linear, radial and conic, with
8 interpolation modes (`srgb` `hsl` `oklab` `oklch` `longer` `shorter` `increasing` `decreasing`) and
an animated spin.

```html
<div
  class="border-2 border-transparent border-from-blue-500 border-to-purple-500 border-linear-to-r rounded-lg p-4"
>
  Gradient border
</div>
```

### Ripple

Material-style ripple – pure CSS, no JavaScript. Radial gradient animation driven by `@property`.

```html
<button class="bg-ripple ripple-color-blue-500">Click me</button>
```

### Print Textures

`bg-comic-*` renders CMYK halftone dots through layered radial gradients and multiply blending;
`bg-pixel-*` renders RGB phosphor columns through repeating gradients and screen blending. Any colour
in, textured surface out.

```html
<div class="bg-comic-rose-500 comic-dot-2">Halftone</div>
<div class="bg-pixel-cyan-400 pixel-size-3 pixel-bloom-2">CRT</div>
```

### Supporting

`border-style` fills in the per-side border styles Tailwind doesn't expose (`border-t-dashed`).
`grid` adds template areas and named areas (`grid-template-areas-*`, `grid-area-*`).

## The experimental package

Not-yet-baseline features live in a separate package,
[`tw-jib-css-experimental`](https://www.npmjs.com/package/tw-jib-css-experimental) – CSS `@function`
colour transforms, `corner-shape`, `interpolate-size`, a styleable `<select>`, and the WCAG badge. It
declares this package as a peer dependency.

```bash
pnpm add -D tw-jib-css tw-jib-css-experimental
```

```css
@import 'tailwindcss';
@import 'tw-jib-css';
@import 'tw-jib-css-experimental'; /* always after stable – source order carries the override */
```

> [!WARNING]
> **Half of that package overrides utilities this one ships.** Importing its root, or
> `tw-jib-css-experimental/functions`, reroutes `bg-lightness-*`, `bg-saturation-*`,
> `bg-hue-rotate-*` and `text-a11y-*` onto CSS `@function` – same names, same output, a different
> code path.
>
> The reroute is progressive, not a swap. Each override sits inside an `@supports` test for
> `@function` itself, so an engine that understands `@function` takes that path and every other
> engine keeps running the stable declarations this package emitted first. Both paths stay in the
> stylesheet and the class works everywhere either way – you are adding a better path for browsers
> that have one, not trading away the one you had.
>
> Its additions (`corner-*`, `interpolate-*`, `appearance-base-select`, `wcag-badge`) are reachable
> on their own sub-paths if that is all you want. Read its README first.

## Documentation

Full docs with live demos: **[Jibcss](https://simonm-c.github.io/tw-jib-css/)**

For LLMs and agents, following the [llms.txt](https://llmstxt.org/) convention:

- [llms.txt](https://simonm-c.github.io/tw-jib-css/llms.txt) – indexed map of every guide page
- [llms-full.txt](https://simonm-c.github.io/tw-jib-css/llms-full.txt) – the whole corpus in one fetch

The experimental package documents itself separately:
[Jibcss Experimental](https://simonm-c.github.io/tw-jib-css/experimental/).

## License

[MIT](https://github.com/simonm-c/tw-jib-css/blob/main/LICENSE)
