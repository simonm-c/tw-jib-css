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

TailwindCSS v4 utility library — border gradients, CSS relative color transforms, ripple effects, and more — built entirely with CSS-first `@utility` and `@custom-variant` syntax.

## Features

- **Pure CSS** — no JavaScript plugin system, no `plugin()` or `addUtilities()`
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
@import 'tw-jib-css/lighten-darken';
```

### Experimental utilities

Experimental utilities have limited browser support and are imported separately:

```css
@import 'tw-jib-css';
@import 'tw-jib-css/experimental';
```

## Modules

### Border Gradient

Gradient borders via `background: padding-box/border-box` clipping. Linear, radial, conic gradients with 8 interpolation modes and animated spin.

```html
<div
  class="border-2 border-transparent border-from-blue-500 border-to-purple-500 border-linear-to-r rounded-lg p-4"
>
  Gradient border
</div>
```

### Color Transforms (Lighten/Darken)

Relative color transforms across 16 color spaces including oklch, hsl, and color-mix.

```html
<div class="bg-blue-500 bg-darken-20/oklch">20% darker in oklch</div>
```

### Ripple

Material-style ripple effect — pure CSS, no JavaScript. Radial gradient animation via `@property`.

```html
<button class="bg-ripple ripple-color-blue-500">Click me</button>
```

### Supporting Modules

| Module       | Import                    | Description                                              |
| ------------ | ------------------------- | -------------------------------------------------------- |
| Border Style | `tw-jib-css/border-style` | Per-side border styles (`border-t-dashed`, etc.)         |
| Scrollbar    | `tw-jib-css/scrollbar`    | `scrollbar-color`, `scrollbar-width`, `scrollbar-gutter` |
| Grid         | `tw-jib-css/grid`         | Grid template areas and named grid areas                 |

### Experimental Modules

| Module             | Import                                | Browser Support      |
| ------------------ | ------------------------------------- | -------------------- |
| Corner Shape       | `tw-jib-css/experimental/corner`      | ~68% (Chrome 139+)   |
| Interpolate Size   | `tw-jib-css/experimental/interpolate` | ~48% (Chromium only) |
| Base Select Picker | `tw-jib-css/experimental/picker`      | Chromium only        |

## Documentation

Full documentation with interactive demos: [tw-jib-css docs](https://simonm-c.github.io/tw-jib-css/)

## License

[MIT](LICENSE)
