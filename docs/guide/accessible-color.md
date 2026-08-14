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
    <div class="bg-rose-900 text-a11y-aaa p-4 rounded text-sm">AAA on rose</div>
    <div class="bg-sky-200 text-a11y-aaa p-4 rounded text-sm">AAA on sky</div>
    <div class="bg-gray-800 text-a11y-aa-lg p-4 rounded text-sm font-bold">AA-lg on gray</div>
  </div>
</Example>

```html
<div class="bg-violet-600 text-a11y-aa">Auto-contrasted text</div>

<div class="bg-amber-400 text-a11y-aaa">Stricter AAA contrast</div>

<div class="bg-emerald-700 text-a11y-aa-lg">Large-text ratio</div>
```

## Three WCAG levels

| Class             | Ratio | Best for                             |
| ----------------- | ----- | ------------------------------------ |
| `text-a11y-aa-lg` | 3:1   | Bold headings and large text (18pt+) |
| `text-a11y-aa`    | 4.5:1 | Standard body copy                   |
| `text-a11y-aaa`   | 7:1   | Small text, maximum readability      |

## How it works

Powered by relative colour syntax. The WCAG ratio formula inverts to give a target luminance, and a colour with that luminance, the background's hue and the background's chroma is built in one relative-colour expression — so the shade is solved outright rather than searched for. All at render time, no JavaScript, no build step.

Because it is solved rather than searched, the whole thing expresses in plain relative colour syntax — `calc`, `clamp`, `min`, `max` and one nested colour expression. You get the same colour in Chromium, Firefox and Safari alike. Ships from the main entry:

```css
@import 'tw-jib-css';
```

## Reference

See the [Accessible Shade reference](/guide/wcag) for the full implementation details and colour space support.
