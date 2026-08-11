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

Powered by relative colour syntax. The WCAG ratio formula inverts to give a target luminance, and a colour with that luminance, the background's hue and the background's chroma is built in one relative-colour expression — so the shade is solved outright rather than searched for. All at render time, no JavaScript, no build step.

Because it is solved rather than searched, the whole thing also expresses without `@function` or `if(style())` — so the utility ships two implementations: CSS `@function` where the browser has it, and a nested relative-colour fallback where it does not. Either way you get the same colour, in Chromium, Firefox and Safari alike. Ships from the main entry:

```css
@import 'tw-jib-css';
```

The [WCAG Badge](/guide/wcag-badge) is the other half of the module: this utility *constructs* a colour at a known ratio, the badge *measures* whatever pair it is given. They share the same CSS-only approach but no machinery — measurement stays useful because it also works on colours this utility did not pick. The badge does need `if(style())`, so unlike the shade it is Chromium-only and lives in the experimental entry.

## Pairs with the WCAG badge

Want to verify the contrast ratio of any element? Drop on a `wcag-badge` — Chromium only, from `tw-jib-css/experimental`:

```html
<div class="bg-blue-600 text-a11y-aa wcag-badge">
  Badge shows: AAA / AA / AA Large / Fail
</div>
```

The badge displays the live WCAG rating. Use it while designing, remove it before shipping.

## Reference

See the [Accessible Shade reference](/guide/wcag) for the full implementation details and colour space support.
