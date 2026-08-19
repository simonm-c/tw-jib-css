---
title: Functions
---

<!-- llm-context: tw-jib-css-experimental/functions is the CSS @function reimplementation of utilities the stable tw-jib-css package already ships. It defines --tw-jib--lightness(), --tw-jib--saturation(), --tw-jib--hue-rotate(), --tw-jib--accessible-shade() and --tw-jib--wcag-rating(), and it OVERRIDES bg-lightness-*, bg-saturation-*, bg-hue-rotate-* and text-a11y-* wherever CSS @function is supported. It is opt-in because it changes how existing classes compute. CSS @function is Chromium-only; Firefox and WebKit fall through to the stable path and produce the same colours. -->

# Functions

```css
@import 'tw-jib-css';
@import 'tw-jib-css-experimental/functions';
```

Two things arrive together with this entry, and they are worth separating in your head.

The first is an **API**: the colour transforms as callable CSS functions, so a derived colour can go anywhere a colour goes rather than only where a utility exists.

The second is an **override**: `bg-lightness-*`, `bg-saturation-*`, `bg-hue-rotate-*` and `text-a11y-*` are re-implemented on top of those functions and win over the stable versions wherever CSS `@function` is supported. Same class names, same output, different machinery.

## The API

| Function                                                | Returns                                                                 |
| ------------------------------------------------------- | ----------------------------------------------------------------------- |
| `--tw-jib--lightness(<color>, <number>, <space>)`       | the colour, lightness shifted by the amount                             |
| `--tw-jib--saturation(<color>, <number>, <space>)`      | the colour, saturation shifted                                          |
| `--tw-jib--hue-rotate(<color>, <number>, <space>)`      | the colour, hue rotated by degrees                                      |
| `--tw-jib--accessible-shade(<color>, <level>, <space>)` | a text colour at exactly the level's WCAG ratio against that background |
| `--tw-jib--wcag-rating(<bg>, <fg>)`                     | the pair's rating as a string – `"AAA"`, `"AA"`, `"AA Large"`, `"Fail"` |

The colour space argument is optional and defaults to `oklch`, matching every other transform in the library.

Because these are values, they compose into properties no utility covers:

```html
<span class="decoration-[--tw-jib--lightness(var(--color-sky-400),35)]">
  <div class="shadow-[0_0_0_3px_--tw-jib--lightness(var(--color-sky-400),-30)]">
    <circle class="stroke-[--tw-jib--accessible-shade(var(--color-violet-600),aaa,oklch)]" />
    <div class="bg-[linear-gradient(90deg,var(--c),--tw-jib--saturation(var(--c),-60))]"></div></div
></span>
```

See [the experimental index](/) for these rendered live.

## The override

Importing this entry does not add classes. It replaces the implementation behind four families you may already be using:

| Utility family                                        | Stable implementation        | With this entry                |
| ----------------------------------------------------- | ---------------------------- | ------------------------------ |
| `bg-lightness-*`, `bg-lighten-*`, `bg-darken-*`       | relative colour syntax       | `--tw-jib--lightness()`        |
| `bg-saturation-*`, `bg-saturate-*`, `bg-desaturate-*` | relative colour syntax       | `--tw-jib--saturation()`       |
| `bg-hue-rotate-*`                                     | relative colour syntax       | `--tw-jib--hue-rotate()`       |
| `text-a11y-*`                                         | nested relative-colour chain | `--tw-jib--accessible-shade()` |

Both paths compute the same closed forms and were measured agreeing to serialisation precision, so which one runs is invisible in the output. The override exists because `@function` expresses the maths with local bindings instead of one deeply nested expression, which is far easier to maintain.

**Load it after the stable entry.** Same-name `@utility` blocks never merge; the later one wins where its gate holds. Import it first and it loses the cascade and does nothing.

### How the stable package stays unaffected

The `@utility` blocks that call these functions live in the _stable_ files, gated on `@variant supports-lightness` and its siblings. Those `@custom-variant`s are defined only in this package. Without it, Tailwind falls back to its built-in `supports-*` variant and emits `@supports (lightness: var(--tw))` – a test for a CSS property that does not exist, false in every engine, so the block never applies. Importing this entry supplies the real gate.

## Browser support

CSS `@function` is Chromium-only today. Firefox and Safari never take this path – they fall through to the stable implementation and produce the same result, so importing this entry is safe for them, it simply does nothing.
