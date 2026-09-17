# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

This file covers 1.0.0, where both packages were released together and there was
nothing before them to change. Everything after it is written by release-please,
per package, from the commits that went into it:

- [`packages/tw-jib-css/CHANGELOG.md`](packages/tw-jib-css/CHANGELOG.md)
- [`packages/tw-jib-css-experimental/CHANGELOG.md`](packages/tw-jib-css-experimental/CHANGELOG.md)

## [3.0.0](https://github.com/simonm-c/tw-jib-css/compare/workspace-v2.0.0...workspace-v3.0.0) (2026-09-17)


### ⚠ BREAKING CHANGES

* **css:** every --tw-jib--* custom property and @function is now --jib-*, with internal double separators collapsed to one: --tw-jib--fill-hue--amount is --jib-fill-hue-amount, --tw-jib--contrast--shade is --jib-contrast-shade. Tailwind's own --tw-bg-image and --tw-gradient-* are unchanged. A consumer @theme key in the --jib-contrast-ratio-* namespace must be renamed by hand and fails silently otherwise: text-contrast-<level> stops existing rather than erroring.

### Features

* **border-gradient:** add border-spin-reverse and a spin duration na… ([a53ab1d](https://github.com/simonm-c/tw-jib-css/commit/a53ab1d5e551fe7be79808a7207a898b150efb3b))
* **border-gradient:** add border-spin-reverse and a spin duration namespace ([fa96b08](https://github.com/simonm-c/tw-jib-css/commit/fa96b081798d7c4112f075cc80a066866be92c37))
* **core:** accept every Tailwind spelling of a custom-property value ([1e13d1e](https://github.com/simonm-c/tw-jib-css/commit/1e13d1ec0e1aa903479771065d775dae56d258e5))
* **css:** rename variables to --jib-* and add directional aliases ([9fda1ca](https://github.com/simonm-c/tw-jib-css/commit/9fda1ca65c03cb444e748f48675d0bc59cad17af))
* **docs:** add favicons, web manifest, social previews and sitemaps ([800d775](https://github.com/simonm-c/tw-jib-css/commit/800d775a7f968ac785dcb1c3984f7586d89a5ada))
* **docs:** show live Baseline status on every guide page ([6901e9f](https://github.com/simonm-c/tw-jib-css/commit/6901e9f10de54276f8d23aeb39be1f1471b40e8b))
* **scripts:** index both docs instances in llms.txt ([bca2f81](https://github.com/simonm-c/tw-jib-css/commit/bca2f81fe26d406d9c6e797a025e5d9300491db1))


### Bug Fixes

* **border-gradient:** accept arbitrary values on border-linear-to ([42321d2](https://github.com/simonm-c/tw-jib-css/commit/42321d216eef51ed780dffda3be860c0662bf225))
* **core:** fail visibly when a colour transform has no source ([9dcaeb5](https://github.com/simonm-c/tw-jib-css/commit/9dcaeb5b2440eb84ee7f3765f6406801751c1b8f))
* **core:** seed sourceless text transforms from canvastext ([a92170c](https://github.com/simonm-c/tw-jib-css/commit/a92170cb5e75f19ca63293be4a1ec792bee449a7))
* **docs:** escape the router on links between the two instances ([8da2d2b](https://github.com/simonm-c/tw-jib-css/commit/8da2d2be6d08189a993696cb7e348bedf6771b4e))


### Code Refactoring

* **border-gradient:** drop the inert var(--color) token ([75ca552](https://github.com/simonm-c/tw-jib-css/commit/75ca5526d7346e165463b53f1356991f2068d21f))
* **css:** move `[@function](https://github.com/function)` call sites into the experimental package ([0f7a753](https://github.com/simonm-c/tw-jib-css/commit/0f7a7533ea04c161bf4d956fe2d185f691b988f6))
* **css:** move `[@function](https://github.com/function)` call sites into the experimental package ([90a3038](https://github.com/simonm-c/tw-jib-css/commit/90a3038510f09eefd4df31b80f1206908cd57078))

## [2.0.0](https://github.com/simonm-c/tw-jib-css/compare/workspace-v1.0.0...workspace-v2.0.0) (2026-09-17)


### ⚠ BREAKING CHANGES

* **css:** every --tw-jib--* custom property and @function is now --jib-*, with internal double separators collapsed to one: --tw-jib--fill-hue--amount is --jib-fill-hue-amount, --tw-jib--contrast--shade is --jib-contrast-shade. Tailwind's own --tw-bg-image and --tw-gradient-* are unchanged. A consumer @theme key in the --jib-contrast-ratio-* namespace must be renamed by hand and fails silently otherwise: text-contrast- &lt;level&gt; stops existing rather than erroring.

### Features

* **border-gradient:** add border-spin-reverse and a spin duration na… ([a53ab1d](https://github.com/simonm-c/tw-jib-css/commit/a53ab1d5e551fe7be79808a7207a898b150efb3b))
* **border-gradient:** add border-spin-reverse and a spin duration namespace ([fa96b08](https://github.com/simonm-c/tw-jib-css/commit/fa96b081798d7c4112f075cc80a066866be92c37))
* **core:** accept every Tailwind spelling of a custom-property value ([1e13d1e](https://github.com/simonm-c/tw-jib-css/commit/1e13d1ec0e1aa903479771065d775dae56d258e5))
* **css:** rename variables to --jib-* and add directional aliases ([9fda1ca](https://github.com/simonm-c/tw-jib-css/commit/9fda1ca65c03cb444e748f48675d0bc59cad17af))
* **docs:** add favicons, web manifest, social previews and sitemaps ([800d775](https://github.com/simonm-c/tw-jib-css/commit/800d775a7f968ac785dcb1c3984f7586d89a5ada))
* **docs:** show live Baseline status on every guide page ([6901e9f](https://github.com/simonm-c/tw-jib-css/commit/6901e9f10de54276f8d23aeb39be1f1471b40e8b))
* **scripts:** index both docs instances in llms.txt ([bca2f81](https://github.com/simonm-c/tw-jib-css/commit/bca2f81fe26d406d9c6e797a025e5d9300491db1))


### Bug Fixes

* **border-gradient:** accept arbitrary values on border-linear-to ([42321d2](https://github.com/simonm-c/tw-jib-css/commit/42321d216eef51ed780dffda3be860c0662bf225))
* **core:** fail visibly when a colour transform has no source ([9dcaeb5](https://github.com/simonm-c/tw-jib-css/commit/9dcaeb5b2440eb84ee7f3765f6406801751c1b8f))
* **core:** seed sourceless text transforms from canvastext ([a92170c](https://github.com/simonm-c/tw-jib-css/commit/a92170cb5e75f19ca63293be4a1ec792bee449a7))
* **docs:** escape the router on links between the two instances ([8da2d2b](https://github.com/simonm-c/tw-jib-css/commit/8da2d2be6d08189a993696cb7e348bedf6771b4e))


### Code Refactoring

* **border-gradient:** drop the inert var(--color) token ([75ca552](https://github.com/simonm-c/tw-jib-css/commit/75ca5526d7346e165463b53f1356991f2068d21f))
* **css:** move `[@function](https://github.com/function)` call sites into the experimental package ([0f7a753](https://github.com/simonm-c/tw-jib-css/commit/0f7a7533ea04c161bf4d956fe2d185f691b988f6))
* **css:** move `[@function](https://github.com/function)` call sites into the experimental package ([90a3038](https://github.com/simonm-c/tw-jib-css/commit/90a3038510f09eefd4df31b80f1206908cd57078))

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
