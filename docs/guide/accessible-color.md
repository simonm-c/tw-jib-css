---
title: Accessible Color
---

# Accessible Color

`text-a11y-aa`, `text-a11y-aa-lg`, and `text-a11y-aaa` generate text colours guaranteed to pass WCAG contrast against any background.

## The core idea

Set a background colour. Add a `text-a11y-*` class. The CSS computes a text colour that passes the specified WCAG contrast ratio — 4.5:1 for AA, 3:1 for AA Large, 7:1 for AAA. Change the background, the text updates automatically.

<Example stretch>
  <div class="grid grid-cols-3 gap-2">
    <div class="bg-violet-600 text-a11y-aa p-4 rounded text-sm">AA on violet</div>
    <div class="bg-amber-400 text-a11y-aa p-4 rounded text-sm">AA on amber</div>
    <div class="bg-emerald-700 text-a11y-aa p-4 rounded text-sm">AA on emerald</div>
    <div class="bg-rose-500 text-a11y-aaa p-4 rounded text-sm">AAA on rose</div>
    <div class="bg-sky-200 text-a11y-aaa p-4 rounded text-sm">AAA on sky</div>
    <div class="bg-gray-800 text-a11y-aa-lg p-4 rounded text-sm font-bold">AA-lg on gray</div>
  </div>
</Example>

```html
<div class="bg-violet-600 text-a11y-aa">
  Auto-contrasted text
</div>

<div class="bg-amber-400 text-a11y-aaa">
  Stricter AAA contrast
</div>

<div class="bg-emerald-700 text-a11y-aa-lg">
  Large-text ratio
</div>
```

## Three WCAG levels

| Class | Ratio | Best for |
| --- | --- | --- |
| `text-a11y-aa-lg` | 3:1 | Bold headings and large text (18pt+) |
| `text-a11y-aa` | 4.5:1 | Standard body copy |
| `text-a11y-aaa` | 7:1 | Small text, maximum readability |

## How it works

Powered by CSS `@function` and relative colour syntax. The library computes WCAG 2.x luminance from the background colour, tests candidate text shades against the target ratio, and returns the closest passing shade — all at render time, no JavaScript, no build step.

This is the same underlying technique used by the [WCAG Badge](/guide/wcag-badge) for contrast verification.

## Pairs with the WCAG badge

Want to verify the contrast ratio of any element? Drop on a `wcag-badge`:

```html
<div class="bg-blue-600 text-a11y-aa wcag-badge">
  Badge shows: AAA / AA / AA Large / Fail
</div>
```

The badge displays the live WCAG rating. Use it while designing, remove it before shipping.

## Reference

See the [Accessible Shade reference](/guide/wcag) for the full implementation details and colour space support.
