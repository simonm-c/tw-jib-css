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

Import it alongside TailwindCSS:

```css
@import 'tailwindcss';
@import 'tw-jib-css';
```

## Available Modules

| Module           | Import Path                   |
| ---------------- | ----------------------------- |
| Border Gradient  | `tw-jib-css/border-gradient`  |
| Lightness        | `tw-jib-css/lightness`        |
| Saturation       | `tw-jib-css/saturation`       |
| Hue Rotate       | `tw-jib-css/hue-rotate`       |
| Accessible Shade | `tw-jib-css/accessible-shade` |
| Ripple           | `tw-jib-css/ripple`           |
| Comic Dots       | `tw-jib-css/comic`            |
| Pixel            | `tw-jib-css/pixel`            |
| Border Style     | `tw-jib-css/border-style`     |
| Grid             | `tw-jib-css/grid`             |

## Requirements

- **TailwindCSS v4.0+** — tw-jib-css uses the CSS-first `@utility`, `@custom-variant`, `@theme`, and `@property` syntax introduced in v4.
- **Modern browser** — CSS relative color syntax, `@property`, and `color-mix()` are used throughout. All major browsers support these features.
