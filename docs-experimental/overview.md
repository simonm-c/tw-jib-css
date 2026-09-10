---
title: Overview
---

<!-- llm-context: tw-jib-css-experimental is a SEPARATE npm package from tw-jib-css. It contains two kinds of thing: ADDITIONS (corner-shape, interpolate-size, base-select picker, wcag-badge) which add utilities with no stable equivalent, and OVERRIDES (the CSS @function reimplementations of lightness, saturation, hue-rotate and text-contrast-*) which replace utilities the stable package already ships. Importing the package root gives you both. Browser support is limited, mostly Chromium-only, and everything is gated behind @supports so unsupported utilities become no-ops rather than breaking. -->

# Overview

`tw-jib-css-experimental` is its own package, installed alongside the stable one. Everything here needs
browser features that are not yet baseline. Most of it is Chromium-only today, and all of it sits
behind an `@supports` gate, so it degrades rather than breaks.

```sh
npm install -D tw-jib-css tw-jib-css-experimental
```

```css
@import 'tailwindcss';
@import 'tw-jib-css';
@import 'tw-jib-css-experimental';
```

Experimental always comes **after** stable. Source order is what carries the overrides described below.

The stable package is a real peer dependency, not a convention. The `@utility` blocks that call the
`@function` dispatchers live in _its_ files, gated on `@custom-variant`s that only this package defines,
so on its own, this package's overrides have nothing to override.

## Two kinds of thing in one package

The distinction sounds academic. It isn't, because only one of them can change code you have already
written.

|               | What importing it does                                                                                                                                                                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Additions** | Give you a class with no stable equivalent: [corner shape](/corner), [interpolate size](/interpolate), [the base-select picker](/picker), [the WCAG badge](/wcag-badge). Nothing you already use changes.                                                  |
| **Overrides** | Re-implement utilities the stable package already defines, using CSS `@function`. See [the overrides](#the-function-overrides). `bg-lightness-*`, `bg-saturation-*`, `bg-hue-rotate-*` and `text-contrast-*` keep their names and change how they compute. |

Importing the package root gives you both. Each is reachable on its own if you want one without the other:

```css
/* additions only */
@import 'tw-jib-css-experimental/corner';

/* overrides only */
@import 'tw-jib-css-experimental/functions';
```

::: warning The overrides change utilities you already use
Taking `tw-jib-css-experimental/functions`, or the package root that includes it, reroutes
`bg-lightness-*`, `bg-saturation-*`, `bg-hue-rotate-*` and `text-contrast-*` onto CSS `@function`
wherever it is supported. Same names, same results, a different code path. If you only want a class
that has no stable form, take that module on its own instead.
:::

## Modules at a glance

Every module is its own entry point. Take the one you want and nothing else comes with it, which
matters more here than in the stable package, because the additions and the overrides live side by side
and only the overrides can change existing markup.

| Module                               | Import                                | Kind     | Support                                    |
| ------------------------------------ | ------------------------------------- | -------- | ------------------------------------------ |
| _everything below_                   | `tw-jib-css-experimental`             | both     | see each row                               |
| [Functions](#the-function-overrides) | `tw-jib-css-experimental/functions`   | Override | Chromium only, CSS `@function`             |
| [Corner Shape](/corner)              | `tw-jib-css-experimental/corner`      | Addition | Chrome 139+ · ~68%                         |
| [Interpolate Size](/interpolate)     | `tw-jib-css-experimental/interpolate` | Addition | Chromium only · ~48%                       |
| [Base Select Picker](/picker)        | `tw-jib-css-experimental/picker`      | Addition | Chromium only, Firefox in progress         |
| [WCAG Badge](/wcag-badge)            | `tw-jib-css-experimental/wcag-badge`  | Addition | Chromium only, `@function` + `if(style())` |

`corner`, `interpolate` and `picker` read nothing from `tw-jib-css` at all, so taking one of those
carries no color machinery. This is a separate package, never a sub-path of the stable one:
`tw-jib-css/experimental` does not exist.

## The @function overrides

The `functions` module is the one that can change markup you have already written, and it brings two
things worth separating.

The first is an **API**: the color transforms and the contrast solve as callable CSS functions, so a
derived color can go anywhere a color goes rather than only where a utility happens to exist. Each
function has its own page, listed under [Pages](#pages) below.

The second is an **override**. The module re-implements four families on top of those functions, and they
win over the stable versions wherever CSS `@function` is supported. Same class names, same output,
different machinery.

| Utility family                                        | Stable implementation       | With this module            |
| ----------------------------------------------------- | --------------------------- | --------------------------- |
| `bg-lightness-*`, `bg-lighten-*`, `bg-darken-*`       | relative color syntax       | `--tw-jib--lightness()`     |
| `bg-saturation-*`, `bg-saturate-*`, `bg-desaturate-*` | relative color syntax       | `--tw-jib--saturation()`    |
| `bg-hue-rotate-*`                                     | relative color syntax       | `--tw-jib--hue-rotate()`    |
| `text-contrast-*`                                     | nested relative-color chain | `--tw-jib--auto-contrast()` |

Both paths compute the same closed forms. Measured against each other they agree to serialisation
precision, so you cannot tell from the output which one ran. The override exists because `@function`
expresses the maths with local bindings instead of one deeply nested expression, which is easier to
maintain.

**Load it after the stable entry.** Same-name `@utility` blocks never merge; the later one wins where its
gate holds. Import it first and it loses the cascade and does nothing.

### How the stable package stays unaffected

The `@utility` blocks that call these functions live in the _stable_ files, gated on
`@variant supports-lightness` and its siblings. Those `@custom-variant`s are defined only in this
package. Without it, Tailwind falls back to its built-in `supports-*` variant and emits
`@supports (lightness: var(--tw))`, a test for a CSS property that does not exist. It is false in every
engine, so the block never applies. Importing this module supplies the real gate.

### Browser support

CSS `@function` is Chromium-only today. Firefox and Safari never take this path. They fall through to the
stable implementation and produce the same result, so importing the module is safe for them, it simply
does nothing.

The one capability with no stable fallback is [`--tw-jib--wcag-rating()`](/guide/wcag-rating), which
returns a string rather than a color. Nothing in relative color syntax can turn a color into a word, so
that one is genuinely absent elsewhere rather than differently implemented.

## What is _not_ in here

Automatic contrast itself. `text-contrast-aa`, `text-contrast-aaa` and `text-contrast-aa-lg` are
[stable and ship from the main entry](https://simonm-c.github.io/tw-jib-css/guide/automatic-contrast), exact on
Chromium, Firefox and Safari alike.

Only the _measuring_ half stayed experimental: the [badge](/wcag-badge) that names a rating needs
`if(style())`, because reading a rating out means turning a color into a string. The shade could be solved
in closed-form relative color syntax; the badge cannot be.

## Pages

- [Lightness](/guide/lightness) covers `--tw-jib--lightness()`.
- [Saturation](/guide/saturation) covers `--tw-jib--saturation()`.
- [Hue rotate](/guide/hue-rotate) covers `--tw-jib--hue-rotate()`.
- [Automatic contrast](/guide/automatic-contrast) covers `--tw-jib--auto-contrast()`.
- [WCAG rating](/guide/wcag-rating) covers `--tw-jib--wcag-rating()`, the one that returns a string.
- [Corner Shape](/corner) covers `corner-shape` squircles, bevels, scoops and notches.
- [Interpolate Size](/interpolate) animates to `auto` and other intrinsic keywords.
- [Base Select Picker](/picker) covers `appearance: base-select` and `::picker()`.
- [WCAG Badge](/wcag-badge) puts a live contrast rating on any element.
