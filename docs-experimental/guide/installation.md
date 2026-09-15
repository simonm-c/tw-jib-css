---
title: Installation
---

<!-- llm-context: Adds tw-jib-css-experimental to a TailwindCSS v4 project. It is a SEPARATE package from tw-jib-css and declares it as a peer dependency, so both must be installed; tw-jib-css/experimental does not exist as a sub-path. Import order is load-bearing: experimental must come after stable, because source order is what carries the overrides. Peer dependencies are tailwindcss >=4.3.0 and tw-jib-css. Every module is importable on its own via a package sub-path export: functions (override), corner, interpolate, picker, wcag-badge (additions). corner, interpolate and picker read nothing from tw-jib-css and carry no colour machinery. The functions module is both a callable-CSS-function API and an override that re-implements bg-lightness-*, bg-saturation-*, bg-hue-rotate- and text-contrast-* on top of @function; both paths compute the same closed forms. Automatic contrast itself is stable, not experimental; only the WCAG badge that names a rating stayed here. Everything sits behind @supports, so an engine without the feature gets a no-op rather than a break. -->

# Installation

Add `tw-jib-css-experimental` to your TailwindCSS v4 project.

## Install

Both packages, always. This one declares the stable package as a real peer dependency, not a
convention — see [Why both](#why-both) below.

::: code-group

```bash [npm]
npm install -D tw-jib-css tw-jib-css-experimental
```

```bash [pnpm]
pnpm add -D tw-jib-css tw-jib-css-experimental
```

```bash [yarn]
yarn add -D tw-jib-css tw-jib-css-experimental
```

```bash [bun]
bun add -D tw-jib-css tw-jib-css-experimental
```

:::

## Import

```css
@import 'tailwindcss';
@import 'tw-jib-css';
@import 'tw-jib-css-experimental'; /* after stable: order carries the override */
```

::: warning Order is load-bearing
Same-name `@utility` blocks never merge. Tailwind emits both and the later one wins where its gate
holds, so importing this package **before** the stable one costs you the overrides silently: no error,
no warning, just the stable implementation still running.
:::

That is the whole package. If you want a part of it, read on.

## Take only what you need

Each module has a package sub-path export and stands on its own. This matters more here than in the
stable package, because additions and overrides sit side by side and **only the overrides can change
markup you have already written**. Taking an addition should not reroute classes you already use, so it
doesn't:

```css
@import 'tailwindcss';
@import 'tw-jib-css';
@import 'tw-jib-css-experimental/corner'; /* squircles, and nothing else */
```

### Modules

| Module                               | Import path                           | Kind     |
| ------------------------------------ | ------------------------------------- | -------- |
| _everything below_                   | `tw-jib-css-experimental`             | both     |
| [Functions](#the-function-overrides) | `tw-jib-css-experimental/functions`   | Override |
| [Corner shape](/corner)              | `tw-jib-css-experimental/corner`      | Addition |
| [Interpolate size](/interpolate)     | `tw-jib-css-experimental/interpolate` | Addition |
| [Base select picker](/picker)        | `tw-jib-css-experimental/picker`      | Addition |
| [WCAG badge](/wcag-badge)            | `tw-jib-css-experimental/wcag-badge`  | Addition |

`corner`, `interpolate` and `picker` read nothing from `tw-jib-css`, so taking one of those carries no
colour machinery at all. `functions` and `wcag-badge` do.

## Why both

This is a separate package, never a sub-path: `tw-jib-css/experimental` does not exist.

The stable package is a peer dependency because the override lives in _its_ files. The `@utility` blocks
that call the `@function` dispatchers ship with `tw-jib-css`, gated on `@custom-variant`s that only this
package defines. Install this one alone and there is nothing for it to override; install the stable one
alone and those gates resolve to a test no engine passes, so they stay inert.

## The @function overrides

The `functions` module brings two things worth separating.

The first is an **API**: the colour transforms and the contrast solve as callable CSS functions, so a
derived colour can go anywhere a colour goes rather than only where a utility happens to exist. Each
function has its own page in the sidebar.

The second is an **override**. The module re-implements four families on top of those functions, and they
win over the stable versions wherever CSS `@function` is supported. Same class names, same output,
different machinery.

| Utility family                                        | Stable implementation        | With this module            |
| ----------------------------------------------------- | ---------------------------- | --------------------------- |
| `bg-lightness-*`, `bg-lighten-*`, `bg-darken-*`       | relative colour syntax       | `--tw-jib--lightness()`     |
| `bg-saturation-*`, `bg-saturate-*`, `bg-desaturate-*` | relative colour syntax       | `--tw-jib--saturation()`    |
| `bg-hue-rotate-*`                                     | relative colour syntax       | `--tw-jib--hue-rotate()`    |
| `text-contrast-*`                                     | nested relative-colour chain | `--tw-jib--auto-contrast()` |

Both paths compute the same closed forms. Measured against each other they agree to serialisation
precision, so you cannot tell from the output which one ran. The override exists because `@function`
expresses the maths with local bindings instead of one deeply nested expression, which is easier to
maintain.

Automatic contrast itself is _not_ experimental. `text-contrast-aa`, `text-contrast-aaa` and
`text-contrast-aa-lg` [ship from the stable entry](https://simonm-c.github.io/tw-jib-css/guide/automatic-contrast),
exact on Chromium, Firefox and Safari alike. Only the _measuring_ half stayed here: the
[badge](/wcag-badge) that names a rating needs `if(style())`, because reading a rating out means turning
a colour into a string. The shade solves in closed-form relative colour syntax; the badge cannot.

## Browser support

Everything here needs features that are not yet baseline, and most of it is Chromium-only today.

All of it sits behind an `@supports` gate, so an engine without the feature ignores the utility rather
than breaking on it. For the four overridden families that means falling through to the stable
implementation and producing the same result — importing this package is safe everywhere, it simply does
less in some places.

The one capability with no stable fallback is [`--tw-jib--wcag-rating()`](/guide/wcag-rating), which
returns a string rather than a colour. Nothing in relative colour syntax can turn a colour into a word,
so that one is genuinely absent elsewhere rather than differently implemented.

Per-module status is on each module's page, and in the live pills below.

## The stable package

If you have not installed `tw-jib-css` yet, start with
[its installation guide](https://simonm-c.github.io/tw-jib-css/guide/installation). Nothing in that
package runs CSS `@function`, which is the guarantee that covers you if you opted into nothing here.

<BaselineSupport :features="['function', 'if', 'corner-shape', 'interpolate-size', 'customizable-select']" />
