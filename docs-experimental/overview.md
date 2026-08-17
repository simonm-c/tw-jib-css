---
title: Overview
---

<!-- llm-context: tw-jib-css-experimental is a SEPARATE npm package from tw-jib-css. It contains two kinds of thing: ADDITIONS (corner-shape, interpolate-size, base-select picker, wcag-badge) which add utilities with no stable equivalent, and OVERRIDES (the CSS @function reimplementations of lightness, saturation, hue-rotate and text-a11y-*) which replace utilities the stable package already ships. Importing the package root gives you both. Browser support is limited, mostly Chromium-only, and everything is gated behind @supports so unsupported utilities become no-ops rather than breaking. -->

# Overview

`tw-jib-css-experimental` is its own package, installed alongside the stable one. Everything here needs
browser features that are not yet baseline — most of it is Chromium-only today, and all of it is gated
behind `@supports` so it degrades rather than breaks.

```sh
npm install tw-jib-css tw-jib-css-experimental
```

```css
@import 'tailwindcss';
@import 'tw-jib-css';
@import 'tw-jib-css-experimental';
```

Experimental always comes **after** stable. Source order is what carries the overrides described below.

The stable package is a real peer dependency, not a convention. The `@utility` blocks that call the
`@function` dispatchers live in _its_ files, gated on `@custom-variant`s that only this package defines —
so installed on its own, this package's overrides have nothing to override.

## Two kinds of thing in one package

The distinction matters more than it sounds, because only one of them can change code you have already
written.

|               | What importing it does                                                                                                                                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Additions** | Give you a class with no stable equivalent — [corner shape](/corner), [interpolate size](/interpolate), [the base-select picker](/picker), [the WCAG badge](/wcag-badge). Nothing you already use changes.                                       |
| **Overrides** | Re-implement utilities the stable package already defines, using CSS `@function` — see [the functions entry](/functions). `bg-lightness-*`, `bg-saturation-*`, `bg-hue-rotate-*` and `text-a11y-*` keep their names and change how they compute. |

Importing the package root gives you both. Each is reachable on its own if you want one without the other:

```css
/* additions only */
@import 'tw-jib-css-experimental/corner';

/* overrides only */
@import 'tw-jib-css-experimental/functions';
```

::: warning The overrides change utilities you already use
Taking `tw-jib-css-experimental/functions` — or the package root, which includes it — reroutes
`bg-lightness-*`, `bg-saturation-*`, `bg-hue-rotate-*` and `text-a11y-*` onto CSS `@function`
wherever it is supported. Same names, same results, a different code path. If you only want a class
that has no stable form, take that module on its own instead.
:::

## Modules at a glance

Every module is its own entry point. Take the one you want and nothing else comes with it — which
matters more here than in the stable package, because the additions and the overrides live side by side
and only the overrides can change existing markup.

| Module                           | Import                                | Kind     | Support                                     |
| -------------------------------- | ------------------------------------- | -------- | ------------------------------------------- |
| _everything below_               | `tw-jib-css-experimental`             | both     | see each row                                |
| [Functions](/functions)          | `tw-jib-css-experimental/functions`   | Override | Chromium only — CSS `@function`             |
| [Corner Shape](/corner)          | `tw-jib-css-experimental/corner`      | Addition | Chrome 139+ · ~68%                          |
| [Interpolate Size](/interpolate) | `tw-jib-css-experimental/interpolate` | Addition | Chromium only · ~48%                        |
| [Base Select Picker](/picker)    | `tw-jib-css-experimental/picker`      | Addition | Chromium only, Firefox in progress          |
| [WCAG Badge](/wcag-badge)        | `tw-jib-css-experimental/wcag-badge`  | Addition | Chromium only — `@function` + `if(style())` |

`corner`, `interpolate` and `picker` read nothing from `tw-jib-css` at all, so taking one of those
carries no colour machinery. This is a separate package, never a sub-path of the stable one:
`tw-jib-css/experimental` does not exist.

## What is _not_ in here

The accessible shade itself. `text-a11y-aa`, `text-a11y-aaa` and `text-a11y-aa-lg` are
[stable and ship from the main entry](https://simonm-c.github.io/tw-jib-css/guide/wcag), exact on
Chromium, Firefox and Safari alike.

Only the _measuring_ half stayed experimental: the [badge](/wcag-badge) that names a rating needs
`if(style())`, because reading a rating out means turning a colour into a string. The shade could be solved
in closed-form relative colour syntax; the badge cannot be.

## Pages

- [Functions](/functions) — the `@function` API and the utilities it overrides.
- [Corner Shape](/corner) — `corner-shape` squircles, bevels, scoops and notches.
- [Interpolate Size](/interpolate) — animate to `auto` and other intrinsic keywords.
- [Base Select Picker](/picker) — `appearance: base-select` and `::picker()`.
- [WCAG Badge](/wcag-badge) — live contrast rating on any element.
