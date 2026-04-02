---
title: Installation
---

<!-- llm-context: Installation — how to add tw-jib-css to a TailwindCSS v4 project -->

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

### All stable utilities

Import the main entry point alongside TailwindCSS:

```css
@import 'tailwindcss';
@import 'tw-jib-css';
```

### Stable + experimental

Add the experimental entry point for cutting-edge CSS features with limited browser support:

```css
@import 'tailwindcss';
@import 'tw-jib-css';
@import 'tw-jib-css/experimental';
```

## Available Modules

| Module | Import Path | Stability |
| --- | --- | --- |
| Border Gradient | `tw-jib-css/border-gradient` | Stable |
| Color Transforms | `tw-jib-css/lighten-darken` | Stable |
| Ripple | `tw-jib-css/ripple` | Stable |
| Border Style | `tw-jib-css/border-style` | Stable |
| Scrollbar | `tw-jib-css/scrollbar` | Stable |
| Grid | `tw-jib-css/grid` | Stable |
| Corner Shape | `tw-jib-css/experimental/corner` | Experimental |
| Interpolate Size | `tw-jib-css/experimental/interpolate` | Experimental |
| Base Select Picker | `tw-jib-css/experimental/picker` | Experimental |

## Requirements

- **TailwindCSS v4.0+** — tw-jib-css uses the CSS-first `@utility`, `@custom-variant`, `@theme`, and `@property` syntax introduced in v4.
- **Modern browser** — CSS relative color syntax, `@property`, and `color-mix()` are used throughout. All major browsers support these features.
