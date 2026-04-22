# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0]

Initial release.

### Color Transforms

- **Lightness** — `bg-lightness-*`, `bg-lighten-*`, `bg-darken-*` across 17 colour spaces
- **Saturation** — `bg-saturation-*`, `bg-saturate-*`, `bg-desaturate-*` across 17 colour spaces
- **Hue Rotate** — `bg-hue-rotate-*` across 16 colour spaces with polar, Lab, and RGB-matrix rotation
- All color transforms support 7 targets: `bg-`, `text-`, `fill-`, `stroke-`, `outline-`, `accent-`, `border-`

### Border Gradient

- Linear, radial, conic gradient borders via `background: padding-box/border-box` clipping
- 8 interpolation modes
- Animated spin with `border-spin` and `prefers-reduced-motion` respect

### Print Textures

- **Hatch** — pen-and-ink crosshatching via 3-directional repeating gradients
- **Watercolor** — pigment pool simulation via 18-layer radial gradient stack with 3 palettes
- **Pixel** — RGB column rendering via 5-layer repeating gradients with screen blending
- **Comic** — CMYK halftone dots via 5-layer radial gradients with multiply blending

### Ripple

- Material-style ripple effect — pure CSS, no JavaScript
- Radial gradient animation via `@property`

### Supporting

- **Border Style** — per-side border styles (`border-t-dashed`, etc.)
- **Scrollbar** — `scrollbar-color`, `scrollbar-width`, `scrollbar-gutter`
- **Grid** — `grid-template-areas-*`, `grid-area-*`

### Experimental (separate import)

- **Corner Shape** — CSS `corner-shape` (Chrome 139+)
- **Interpolate Size** — `interpolate-size` keywords (Chromium only)
- **Base Select Picker** — `appearance: base-select` and `::picker()` (Chromium only)
- **WCAG Accessible Shade** — WCAG 2.x contrast computation via CSS `@function` (Chromium only)
