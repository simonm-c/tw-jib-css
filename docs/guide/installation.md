---
title: Installation
---

<!-- llm-context: Installation – how to add tw-jib-css to a TailwindCSS v4 project. Peer dependency is tailwindcss >=4.3.0. Every module is importable on its own via a package sub-path export, and a module you do not import costs you nothing: @property registrations and @theme keys are emitted unconditionally, so unlike an unused class the scanner cannot purge them. grid and border-style emit no colour registrations at all. Lightness/saturation/hue-rotate ship as one color-transforms module because they are one pipeline. Experimental features are a SEPARATE package, tw-jib-css-experimental, never a tw-jib-css sub-path. -->

# Installation

Add tw-jib-css to your TailwindCSS v4 project.

## Install

::: code-group

```bash [npm]
npm install -D tw-jib-css
```

```bash [pnpm]
pnpm add -D tw-jib-css
```

```bash [yarn]
yarn add -D tw-jib-css
```

```bash [bun]
bun add -D tw-jib-css
```

:::

## Import

Import it alongside TailwindCSS:

```css
@import 'tailwindcss';
@import 'tw-jib-css';
```

That is the whole library. If you want a part of it, read on – every module is also
its own entry point.

## Take only what you need

Each module has a package sub-path export and stands entirely on its own. Want
accessible text shades and nothing else? Import that one module. You do not get
comic halftones, ripples or gradient borders as the price of admission:

```css
@import 'tailwindcss';
@import 'tw-jib-css/accessible-shade';
```

Import several and they compose exactly as they do from the root entry:

```css
@import 'tailwindcss';
@import 'tw-jib-css/accessible-shade';
@import 'tw-jib-css/border-gradient';
@import 'tw-jib-css/grid';
```

::: tip Why this is worth doing
Not bundle size – Tailwind's scanner purges classes you never write regardless, so
an unused utility costs you nothing either way.

What it saves is the part the scanner **cannot** reach. `@property` registrations and
`@theme` keys are not classes, so they are emitted whether or not anything uses
them. The colour pipeline that `bg-lighten-*` and `text-a11y-*` read from is a few
dozen registrations, and importing the root entry emits all of them. Importing
`tw-jib-css/grid` emits none: those utilities read no colour, so they carry no
colour machinery.

It also keeps your browser-support floor honest. `grid` and `border-style` are plain
CSS properties and need nothing modern at all – see [Browser
support](#browser-support).
:::

### Modules

| Module                                                                                             | Import path                   | Colour pipeline |
| -------------------------------------------------------------------------------------------------- | ----------------------------- | --------------- |
| _everything below_                                                                                 | `tw-jib-css`                  | yes             |
| [Accessible Shade](/guide/wcag)                                                                    | `tw-jib-css/accessible-shade` | yes             |
| [Lightness](/guide/lightness), [Saturation](/guide/saturation) and [Hue Rotate](/guide/hue-rotate) | `tw-jib-css/color-transforms` | yes             |
| [Border Gradient](/guide/border-gradient)                                                          | `tw-jib-css/border-gradient`  | yes             |
| [Ripple](/guide/ripple)                                                                            | `tw-jib-css/ripple`           | yes             |
| [Comic](/guide/comic)                                                                              | `tw-jib-css/comic`            | yes             |
| [Pixel](/guide/pixel)                                                                              | `tw-jib-css/pixel`            | yes             |
| [Border Style](/guide/border-style)                                                                | `tw-jib-css/border-style`     | no              |
| [Grid](/guide/grid)                                                                                | `tw-jib-css/grid`             | no              |

Lightness, saturation and hue-rotate ship as one module rather than three because
they are one pipeline: each stage's expression starts from the stage before it, so a
stage taken alone would compute against a value nothing can write.

Taking the whole library costs no more per utility than taking a single module –
the root entry is composed so the shared colour pipeline is emitted once, not once
per module. Both halves of that are covered by the test suite.

## Browser support

- **TailwindCSS 4.3+** – the library is built with the CSS-first `@utility`,
  `@custom-variant`, `@theme` and `@property` syntax, and uses the `--value()` and
  `--default()` functional-utility forms that 4.3 requires. `tailwindcss >=4.3.0`
  is declared as a peer dependency.
- **Colour utilities** – anything that transforms a colour needs CSS relative
  colour syntax and `@property`: **Chrome 111+, Safari 16.4+, Firefox 128+**. That
  covers accessible shade, the colour transforms, border gradients, ripple, comic
  and pixel. A few individual features want a little more, and each module page
  says so.
- **`border-style` and `grid`** – plain CSS properties, no relative colour syntax,
  no registrations. They work wherever Tailwind itself does.

Nothing in this package runs CSS `@function`. That is deliberate, and it is the
guarantee that covers you if you opted into nothing.

## Experimental features

Not-yet-baseline features live in a **separate package**,
[`tw-jib-css-experimental`](https://simonm-c.github.io/tw-jib-css/experimental/) – CSS
`@function` colour transforms, `corner-shape`, `interpolate-size`, a styleable
`<select>` and a live WCAG contrast badge. It is mostly Chromium-only and it declares
this package as a peer dependency.

```bash
npm install -D tw-jib-css tw-jib-css-experimental
```

```css
@import 'tailwindcss';
@import 'tw-jib-css';
@import 'tw-jib-css-experimental'; /* always after stable – order carries the override */
```

It is its own package, never a sub-path of this one: `tw-jib-css/experimental` does
not exist. Its modules are individually importable on the same principle as above
(`tw-jib-css-experimental/corner` and siblings), which matters more there than here,
because half of that package _overrides_ utilities this one ships. Taking an addition
should not reroute classes you already use – so it doesn't.

Read [its overview](https://simonm-c.github.io/tw-jib-css/experimental/overview)
before installing.
