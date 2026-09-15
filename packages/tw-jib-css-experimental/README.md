<p align="center">
  <a href="https://simonm-c.github.io/tw-jib-css/experimental/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://simonm-c.github.io/tw-jib-css/jibcss-logotype-white-hex.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://simonm-c.github.io/tw-jib-css/jibcss-logotype-dark-hex.svg">
      <img alt="Jibcss Experimental" src="https://simonm-c.github.io/tw-jib-css/jibcss-logotype-dark-hex.svg" width="280" height="100" style="max-width: 100%;">
    </picture>
  </a>
</p>

<p align="center"><strong>tw-jib-css-experimental</strong>. CSS features that are not baseline yet, as Tailwind utilities.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/tw-jib-css-experimental"><img src="https://img.shields.io/npm/v/tw-jib-css-experimental" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/tw-jib-css-experimental"><img src="https://img.shields.io/npm/dm/tw-jib-css-experimental" alt="npm downloads"></a>
  <a href="https://github.com/simonm-c/tw-jib-css/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="license"></a>
</p>

CSS `@function` colour transforms, `corner-shape`, `interpolate-size`, a styleable `<select>` and a live
WCAG contrast badge. Everything here needs browser features that are not yet baseline. Most of it is
Chromium-only today, and all of it sits behind an `@supports` gate, so it degrades rather than breaks.

This is a **separate package** from [`tw-jib-css`](https://www.npmjs.com/package/tw-jib-css), not a sub-path
of it. Everything in the stable package works on every engine; nothing in this one does.

## Installation

```bash
pnpm add -D tw-jib-css tw-jib-css-experimental
```

`tw-jib-css` is a peer dependency, and a real one rather than a convention. The `@utility` blocks that call
this package's `@function` dispatchers live in _its_ files, gated on `@custom-variant`s that only this
package defines. Installed alone, the overrides below have nothing to override.

## Usage

```css
@import 'tailwindcss';
@import 'tw-jib-css';
@import 'tw-jib-css-experimental';
```

Experimental always comes **after** stable. Source order is what carries the overrides.

## Two kinds of thing in one package

Only one of them can change code you have already written.

|               | What importing it does                                                                                                                                                                                                      |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Additions** | Give you a class with no stable equivalent: `corner-*`, `interpolate-*`, `appearance-base-select`, `wcag-badge`. Nothing you already use changes.                                                                           |
| **Overrides** | Re-implement utilities the stable package already defines, on CSS `@function`. `bg-lightness-*`, `bg-saturation-*`, `bg-hue-rotate-*` and `text-contrast-*` keep their names and their output, and change how they compute. |

Importing the package root gives you both. Each is reachable alone:

```css
/* the overrides, without the additions */
@import 'tw-jib-css-experimental/functions';

/* an addition, without the overrides */
@import 'tw-jib-css-experimental/corner';
```

> [!WARNING]
> **The `@function` overrides change utilities you already use.** Importing the package root, or
> `tw-jib-css-experimental/functions`, reroutes `bg-lightness-*`, `bg-saturation-*`, `bg-hue-rotate-*`
> and `text-contrast-*` onto CSS `@function` wherever an engine supports it. Same names, same output, a
> different code path. That is a deliberate import, not something an addition should drag in, which is
> why the two halves have separate entries. The stable package is untouched either way.

## Modules

Every module is its own entry point, and taking one brings nothing else with it. `corner`,
`interpolate` and `picker` read nothing from `tw-jib-css` either, so they carry none of its colour
machinery. This is a separate package, never a sub-path of the stable one. `tw-jib-css/experimental`
does not exist.

| Module                                                                             | Import                                | Kind     | Browser support                             |
| ---------------------------------------------------------------------------------- | ------------------------------------- | -------- | ------------------------------------------- |
| [Functions](https://simonm-c.github.io/tw-jib-css/experimental/functions)          | `tw-jib-css-experimental/functions`   | Override | Chromium only (CSS `@function`)             |
| [Corner Shape](https://simonm-c.github.io/tw-jib-css/experimental/corner)          | `tw-jib-css-experimental/corner`      | Addition | Chrome 139+ (~68%)                          |
| [Interpolate Size](https://simonm-c.github.io/tw-jib-css/experimental/interpolate) | `tw-jib-css-experimental/interpolate` | Addition | Chromium only (~48%)                        |
| [Base Select Picker](https://simonm-c.github.io/tw-jib-css/experimental/picker)    | `tw-jib-css-experimental/picker`      | Addition | Chromium only, Firefox in progress          |
| [WCAG Badge](https://simonm-c.github.io/tw-jib-css/experimental/wcag-badge)        | `tw-jib-css-experimental/wcag-badge`  | Addition | Chromium only (`@function` + `if(style())`) |

### Functions

The colour transforms as callable CSS functions, so a derived colour can go anywhere a colour goes rather
than only where a utility exists: a gradient stop, a layered shadow, an SVG stroke, a text-decoration.

```css
.card {
  background: linear-gradient(
    135deg,
    var(--color-sky-400),
    --jib-saturation(var(--color-sky-400), -60)
  );
  box-shadow: 0 0 0 3px --jib-lightness(var(--color-sky-400), -30);
  border-color: --jib-auto-contrast(var(--color-violet-600), aaa, oklch);
}
```

| Function                                         | Returns                                                                    |
| ------------------------------------------------ | -------------------------------------------------------------------------- |
| `--jib-lightness(<color>, <number>, <space>)`    | the colour, lightness shifted                                              |
| `--jib-lighten(<color>, <number>, <space>)`      | the same, named for the direction                                          |
| `--jib-darken(<color>, <number>, <space>)`       | the same with the amount negated                                           |
| `--jib-saturation(<color>, <number>, <space>)`   | the colour, saturation shifted                                             |
| `--jib-saturate(<color>, <number>, <space>)`     | the same, named for the direction                                          |
| `--jib-desaturate(<color>, <number>, <space>)`   | the same with the amount negated                                           |
| `--jib-hue-rotate(<color>, <number>, <space>)`   | the colour, hue rotated by degrees                                         |
| `--jib-auto-contrast(<color>, <level>, <space>)` | a text colour at exactly that level's WCAG ratio                           |
| `--jib-wcag-rating(<bg>, <fg>)`                  | the pair's rating as a `<string>`: `"AAA"`, `"AA"`, `"AA Large"`, `"Fail"` |

The space argument is optional and defaults to `oklch`, matching every other transform in the library.

The directional aliases mirror the class API, so `--jib-darken(c, 20)` is `bg-darken-20`. Neither clamps: `--jib-darken(c, -20)` lightens, which is what lets one custom property animate through zero.

### Corner Shape

`corner-shape` decides what a corner does with the radius `rounded-*` already gave it.
Round is the shape browsers have always drawn. The others were previously an SVG, a
clip-path, or a designer quietly giving up.

```html
<div class="rounded-2xl corner-squircle">iOS-style squircle</div>
<div class="rounded-2xl corner-bevel">Bevelled</div>
<div class="rounded-2xl corner-scoop">Scooped inward</div>
<div class="rounded-2xl corner-notch">Notched</div>
```

Six named shapes: `round`, `squircle`, `bevel`, `scoop`, `notch`, `square`.

The scopes mirror `rounded-*` exactly, so you already know the grammar. Every scope
Tailwind gives `rounded-*` has a `corner-*` counterpart, all fifteen of them:

| Scope          | Radius           | Shape             |
| -------------- | ---------------- | ----------------- |
| All four       | `rounded-2xl`    | `corner-bevel`    |
| Sides          | `rounded-t-2xl`  | `corner-t-bevel`  |
| Single corner  | `rounded-tl-2xl` | `corner-tl-bevel` |
| Logical side   | `rounded-s-2xl`  | `corner-s-bevel`  |
| Logical corner | `rounded-ss-2xl` | `corner-ss-bevel` |

So they compose the way you would expect, and mixing scopes is the interesting part:

```html
<div class="rounded-2xl corner-squircle corner-tr-notch">Squircle, one notched corner</div>
<div class="rounded-2xl corner-t-scoop corner-b-bevel">Scooped above, bevelled below</div>
```

Underneath the names is one continuous parameter. `corner-shape` is a superellipse, and the
keywords are landmarks on it, so a bare number gets you the shapes between them:

```html
<div class="rounded-2xl corner-4">Between squircle and square</div>
<div class="rounded-2xl -corner-2">Negative, scooped further than scoop</div>
<div class="rounded-2xl corner-infinity">The limit: a hard square corner</div>
```

Bracket syntax works too, so `corner-[2.5]` is a one-off.

> [!NOTE]
> Chrome 139+. Everything sits behind `@supports (corner-shape: squircle)`, so an engine
> without it keeps the plain rounded corner `rounded-*` already drew. That is the whole
> failure mode: no layout shift, no fallback to write, and nothing to clean up when support
> arrives. It is the cheapest thing in this package to adopt early.

### Interpolate Size

```html
<div class="interpolate-keywords">
  <div class="h-0 group-hover:h-auto transition-all duration-300">Animates to auto</div>
</div>
```

### Base Select Picker

```html
<select
  class="appearance-base-select picker:rounded-xl picker-icon:text-violet-500 checkmark:text-violet-500"
>
  <option>Apple</option>
</select>
```

### WCAG Badge

```html
<div class="bg-blue-600 text-white wcag-badge">Reads: AA</div>
```

The badge is the half of the WCAG module that could not be made portable. Its partner `text-contrast-*` is
**stable** and [ships from `tw-jib-css`](https://simonm-c.github.io/tw-jib-css/guide/automatic-contrast), exact on
Chromium, Firefox and Safari alike. The shade is solvable in closed-form relative colour syntax, whereas
reading a rating _out_ means turning a colour into a string, and `if(style())` is the only way CSS can do
that.

## Documentation

Full docs with live demos: **[Jibcss Experimental](https://simonm-c.github.io/tw-jib-css/experimental/)**

The stable package documents itself separately: [Jibcss](https://simonm-c.github.io/tw-jib-css/).

## License

[MIT](https://github.com/simonm-c/tw-jib-css/blob/main/LICENSE)
