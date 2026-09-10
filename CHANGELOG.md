# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

This file covers 1.0.0, where both packages were released together and there was
nothing before them to change. Everything after it is written by release-please,
per package, from the commits that went into it:

- [`packages/tw-jib-css/CHANGELOG.md`](packages/tw-jib-css/CHANGELOG.md)
- [`packages/tw-jib-css-experimental/CHANGELOG.md`](packages/tw-jib-css-experimental/CHANGELOG.md)

## [Unreleased]

## [1.0.0]

First release. Two packages, split by what an engine can actually run.

Every module is its own subpath export, and importing one brings nothing else with it.
`package.json` `exports` is the authority on what is importable.

### tw-jib-css

Runs on any engine with CSS relative colour syntax: Chrome 111+, Safari 16.4+, Firefox 128+.
Nothing in this package runs CSS `@function`, which is what makes that range hold.

#### Automatic contrast

`text-contrast-aa`, `text-contrast-aaa` and `text-contrast-aa-lg` set a text colour whose WCAG 2.x
contrast ratio against its own background equals the level you asked for. The shade is solved in
closed form rather than searched, so the result lands on 4.5:1, 7:1 or 3:1 rather than somewhere
past it. Adding a `--tw-jib--contrast-ratio-*` key to your own `@theme` defines a level of your
own, modifiers included. Seventeen colour spaces.

#### Colour transforms

Lightness, saturation and hue rotation, each on seven surfaces: `bg`, `text`, `fill`, `stroke`,
`outline`, `accent` and `border`.

- `<surface>-lightness-*`, `<surface>-lighten-*`, `<surface>-darken-*`. Seventeen colour spaces.
- `<surface>-saturation-*`, `<surface>-saturate-*`, `<surface>-desaturate-*`. Seventeen colour spaces.
- `<surface>-hue-rotate-*`. Sixteen colour spaces, with polar, Lab and RGB-matrix rotation.
  No `color-mix`, which has no meaning for a rotation.

`lightness`, `saturation` and `hue-rotate` also take a leading minus for the opposite direction.

#### Border gradient

Linear, radial and conic gradient borders, clipped with `background: padding-box/border-box`
rather than a pseudo-element or an SVG. `border-linear-*`, `border-linear-to-*`, `border-radial-*`
and `border-conic-*` set the gradient; `border-from-*`, `border-via-*` and `border-to-*` set the
stops and accept positions. `border-spin` rotates a conic border, and `border-spin-duration-*`
sets how long one turn takes.

#### Ripple

`bg-ripple` is a Material-style press ripple built from a radial gradient and two `@property`
transitions. No JavaScript. `ripple-color-*`, `ripple-duration-*`, `ripple-position-*` and
`ripple-fade-*` control it.

#### Comic

`bg-comic-*` renders any Tailwind colour as CMYK halftone dots, layered radial gradients under a
multiply blend. `comic-dot-*`, `comic-gap-*` and `comic-bleed-*` adjust the screen. Greys produce
K dots alone, with no colour cast.

#### Pixel

`bg-pixel-*` renders any Tailwind colour as RGB phosphor columns, layered repeating gradients
under a screen blend. `pixel-size-*`, `pixel-gap-*` and `pixel-bloom-*` adjust the grid.

#### Border style

`border-{t,r,b,l,x,y,s,e}-{solid,dashed,dotted,double,groove,ridge,inset,outset,none,hidden}`.
TailwindCSS v4 sets `border-style` for all four sides at once and leaves the per-side case out.

#### Grid

`grid-template-areas-*` and `grid-area-*`, which TailwindCSS v4 also leaves out.

### tw-jib-css-experimental

A separate package, never a `tw-jib-css` subpath. Everything here needs a browser feature that is
not yet baseline, and most of it is Chromium-only. All of it sits behind an `@supports` gate, so
an engine without the feature keeps the stable behaviour instead of losing the utility.

`tw-jib-css` is a real peer dependency. The `@utility` blocks that call this package's `@function`
dispatchers live in the stable package's files, gated on `@custom-variant`s only this package
defines, so the overrides have nothing to override when installed alone.

#### Functions

Re-implements `bg-lightness-*`, `bg-saturation-*`, `bg-hue-rotate-*` and `text-contrast-*` on CSS
`@function`. Same names, same output, different code path. It also exposes the transforms as
callable functions, so a derived colour can go anywhere a colour goes: a gradient stop, a layered
shadow, an SVG stroke, a text decoration. Importing the package root or
`tw-jib-css-experimental/functions` changes utilities you have already written, which is why the
overrides and the additions have separate entries.

#### Corner shape

`corner-*` for CSS `corner-shape`. Chrome 139+.

#### Interpolate size

`interpolate-numeric`, `interpolate-keywords` and `interpolate-*` for `interpolate-size`, which
lets a transition run to `auto`. Chromium only.

#### Picker

`appearance-base-select` and the `picker`, `picker-icon` and `checkmark` variants for
`appearance: base-select` and its pseudo-elements. Chromium only, with Firefox in progress.

#### WCAG badge

`wcag-badge` reports the measured contrast rating of an element as generated content, computed in
CSS. Needs `@function` and `if(style())`, so Chromium only.

[unreleased]: https://github.com/simonm-c/tw-jib-css/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/simonm-c/tw-jib-css/releases/tag/v1.0.0
