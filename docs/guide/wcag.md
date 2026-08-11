---
title: Accessible Shade
---

<!-- llm-context: wcag accessible shade module (stable, ships from the core entry) — text-a11y-{aa,aaa,aa-lg} solves in closed form for a same-hue text colour whose WCAG 2.x contrast ratio against the background equals the requested ratio exactly. No candidate search, no verification pass. Optional /{colour-space} modifier for all 17 colour spaces selects the aesthetic path only; correctness is owned by a shared final stage. All computation happens in CSS relative colour syntax at render time — no JS, no @function. Verified exact on Chromium, Firefox and WebKit. Levels are themeable via the --tw-jib--a11y-ratio-* namespace. The separate wcag-badge utility is Chromium-only. -->

# Accessible Shade

`text-a11y-*` derives a same-hue text colour that hits your target WCAG ratio for any background. Set a background, add the utility, and CSS computes the shade at render time — no JavaScript.

The shade is not searched for, it is **solved**. WCAG 2's contrast ratio constrains exactly one quantity — relative luminance — and luminance is a linear function of linear-light RGB. Invert the ratio formula for the target luminance, then build a colour with that luminance, the background's hue and the background's chroma, in a single relative-colour expression. The achieved ratio equals the requested ratio by construction: no candidate bracket, no verification pass, no convergence tolerance.

Solving instead of searching is also what makes the utility portable. A search needed `@function` to call itself and `if(style())` to pick the candidate that passed; the closed form needs neither, so it is built from `calc`, `clamp`, `min`, `max` and relative colour syntax — and works everywhere.

::: warning The ratio is exact, which cuts both ways
Because the utilities target the ratio *exactly* rather than overshooting it, the result can land a hair either side of the named threshold — around ±2 × 10⁻⁵ in practice. [`wcag-badge`](/guide/wcag-badge) accounts for this and reports the level you asked for. A third-party checker doing a bare `ratio >= 7` may not, and can report `text-a11y-aaa` as AA. That is arithmetic on a tie, not a contrast failure: the pair is at 7:1 to four decimal places. If you need an external report to read AAA unambiguously, ask for a slightly higher ratio than the level you need.
:::

::: tip Browser Support
Works in Chromium, Firefox and Safari. Every engine gets the requested ratio exactly — verified against all 242 Tailwind colours at all three levels on each. The only per-engine difference is cosmetic; see [Colour Spaces](#colour-spaces) below.

`text-a11y-*` needs only relative colour syntax and `@property`, both of which have been baseline for some time. The [`wcag-badge`](/guide/wcag-badge) that pairs with it is a different matter — it stays Chromium-only, because turning a colour into a rating *string* needs `if(style())`.
:::

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/accessible-shade';
```
The badge is separate and experimental: `@import 'tw-jib-css/experimental/wcag'`.
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'text-a11y-aa', styles: 'color: same-hue shade at exactly WCAG AA (4.5:1)' },
  { class: 'text-a11y-aaa', styles: 'color: same-hue shade at exactly WCAG AAA (7:1)' },
  { class: 'text-a11y-aa-lg', styles: 'color: same-hue shade at exactly WCAG AA Large (3:1)' },
  { class: 'text-a11y-aa/<space>', styles: 'color: AA shade, chroma shaped by the given colour space' },
]" />

### Levels are themeable

The three levels are not hard-coded — they are entries in the `--tw-jib--a11y-ratio-*` theme namespace. Add a key and you get a working utility:

```css
@theme {
  --tw-jib--a11y-ratio-aa-plus: 5;
}
```

```html
<div class="bg-indigo-700 text-a11y-aa-plus">Solved for exactly 5:1</div>
```

Useful for the "AAA but let an external checker round in my favour" case in the warning above. The `/<space>` modifiers work on custom levels too. What a custom level does *not* get is a `wcag-badge` **Max** state, since the badge only knows the three named levels.

## Basic Usage

Set a background with `bg-*`, then use `text-a11y-*` to pick the WCAG level:

<Example>
  <div class="grid grid-cols-3 gap-3">
    <div class="rounded-lg p-4 bg-indigo-800 text-a11y-aa-lg text-center">
      <div class="text-lg font-bold">AA Large</div>
      <div class="text-xs">3:1 ratio</div>
    </div>
    <div class="rounded-lg p-4 bg-indigo-800 text-a11y-aa text-center">
      <div class="text-lg font-bold">AA</div>
      <div class="text-xs">4.5:1 ratio</div>
    </div>
    <div class="rounded-lg p-4 bg-indigo-800 text-a11y-aaa text-center">
      <div class="text-lg font-bold">AAA</div>
      <div class="text-xs">7:1 ratio</div>
    </div>
  </div>
</Example>

The result is a lighter or darker shade of the background colour, landing on the requested ratio rather than merely clearing it. Dark backgrounds get lighter text, light backgrounds get darker text — the crossover is the luminance where there is equal room to move in either direction.

### WCAG Levels

| Utility | Ratio | Use case |
| --- | --- | --- |
| `text-a11y-aa-lg` | 3:1 | Headings, bold text above 14pt |
| `text-a11y-aa` | 4.5:1 | Body text, standard UI labels |
| `text-a11y-aaa` | 7:1 | Fine print, captions, small text |

### Every Tailwind Colour

Every default TW colour at all shade values, with `text-a11y-aa` automatically picking the accessible text shade:

<Example stretch>
  <div class="flex flex-col gap-1">
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-950 text-a11y-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-50 text-a11y-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-100 text-a11y-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-200 text-a11y-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-300 text-a11y-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-400 text-a11y-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-500 text-a11y-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-600 text-a11y-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-700 text-a11y-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-800 text-a11y-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-900 text-a11y-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-950 text-a11y-aa">950</div>
  </div>
  </div>
</Example>

## Colour Spaces

The modifier selects the **aesthetic path** of the shade — how chroma and perceptual hue travel between the background and the output. It does not affect the ratio: a single shared final stage owns correctness for every space, so all seventeen land on the same contrast ratio and differ only in how colourful the result is. Default is oklch, as it is for every colour transform in this library.

<Example>
  <div class="grid grid-cols-3 gap-3">
    <div class="rounded-lg p-4 bg-purple-700 text-a11y-aa text-center">
      <div class="font-bold">oklch (default)</div>
      <div class="text-xs">text-a11y-aa</div>
    </div>
    <div class="rounded-lg p-4 bg-purple-700 text-a11y-aa/hsl text-center">
      <div class="font-bold">hsl</div>
      <div class="text-xs">text-a11y-aa/hsl</div>
    </div>
    <div class="rounded-lg p-4 bg-purple-700 text-a11y-aa/lab text-center">
      <div class="font-bold">lab</div>
      <div class="text-xs">text-a11y-aa/lab</div>
    </div>
  </div>
</Example>

All 17 colour spaces are supported: `oklch`, `lch`, `lab`, `oklab`, `hsl`, `hwb`, `rgb`, `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50`, `xyz-d65`, `color-mix`.

They fall into three groups by how their lightness relates to luminance:

| Group | Spaces | Behaviour |
| --- | --- | --- |
| Linear-light and RGB-family | `srgb`, `srgb-linear`, `rgb`, `xyz`, `xyz-d50`, `xyz-d65`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `color-mix` | The closed form *is* the shade path. Each is a linear transform of linear-light RGB, so differences within the group are visually negligible. Output matches the background's chromaticity exactly. |
| CIE Lab family | `lab`, `lch` | L\* is an invertible function of luminance, so the seed is exact in closed form. CSS `lab()`/`lch()` are D50-adapted, so L\* tracks chromatically adapted luminance; the final stage absorbs the difference. |
| Perceptual-OK and legacy | `oklab`, `oklch`, `hsl`, `hwb` | Lightness is *not* a pure function of luminance, so the seed is approximate and the final stage corrects it. `hsl` keeps saturation and so washes out at extreme targets; `hwb` splits the input's whiteness/blackness budget by the target. |

`oklab` and `lab` route through the same pipelines as `oklch` and `lch` — identical seeds, only the channel notation differs.

### One per-engine difference, in chroma only

`/oklch`, `/oklab`, `/lch` and `/lab` derive their seed lightness with a cube root. Firefox parses `pow()` but rejects a colour *channel keyword* as its argument, so on Firefox these four are seeded linearly instead, behind an `@supports` gate. Chrome and Safari both get the cube root — Chrome through the `@function` path, Safari through the fallback.

The consequence is worth being precise about, because it is smaller than it sounds:

- **The ratio is unaffected.** The seed governs aesthetics; a shared final stage owns correctness. All four are exact on Firefox, same as everywhere else.
- **The chroma differs slightly.** A linear seed is less perceptually even, so `text-a11y-aa/oklch` on Firefox can be a touch more or less colourful than the same class in Chrome or Safari. Same hue, same contrast.

If you need the four to match pixel-for-pixel across engines, use a Class 1 space — `/srgb` and its ten siblings have no seed, so they are identical everywhere. Asking for `/oklch` and getting the linear seed is still strictly better than the alternative of ignoring your modifier and silently handing you the core.

## Typographic Hierarchy

Use different levels for different text sizes — heading at AA Large, body at AA, fine print at AAA:

<Example>
  <div class="grid grid-cols-2 gap-4">
    <div class="rounded-xl overflow-hidden bg-teal-700 p-5">
      <div class="text-xl font-bold text-a11y-aa-lg">AA Large Heading</div>
      <p class="mt-2 text-sm text-a11y-aa">AA body text. Sed do eiusmod tempor incididunt ut labore.</p>
      <p class="mt-2 text-xs text-a11y-aaa">AAA fine print. Captions and small text.</p>
    </div>
    <div class="rounded-xl overflow-hidden bg-orange-300 p-5">
      <div class="text-xl font-bold text-a11y-aa-lg">AA Large Heading</div>
      <p class="mt-2 text-sm text-a11y-aa">AA body text. Sed do eiusmod tempor incididunt ut labore.</p>
      <p class="mt-2 text-xs text-a11y-aaa">AAA fine print. Captions and small text.</p>
    </div>
  </div>
</Example>

## Combining with wcag-badge

`text-a11y-*` and `wcag-badge` work together on the same element. The accessible shade utility picks the text colour, and the badge verifies the actual contrast ratio — all in CSS at render time.

::: warning The badge needs the experimental entry, and Chromium
Everything in this section requires `@import 'tw-jib-css/experimental'` and a Chromium browser. In Firefox and Safari the shade still works and the badge simply renders nothing. That is the intended trade: the badge is a design-time instrument, the shade is what ships.
:::

<Example>
  <div class="grid grid-cols-3 gap-3">
    <div class="rounded-lg p-6 bg-indigo-600 text-a11y-aa wcag-badge text-center relative">
      <div class="font-bold">AA on Indigo 600</div>
    </div>
    <div class="rounded-lg p-6 bg-amber-300 text-a11y-aaa wcag-badge text-center relative">
      <div class="font-bold">AAA on Amber 300</div>
    </div>
    <div class="rounded-lg p-6 bg-emerald-700 text-a11y-aa-lg wcag-badge text-center relative">
      <div class="font-bold">AA Large on Emerald 700</div>
    </div>
  </div>
</Example>

The badge reads the text colour set by `text-a11y-*`, so the badge rating always reflects the actual contrast between the background and the accessible shade — not a guess.

### Real-time updates on hover

Because both utilities read CSS custom properties, they update live when the background changes. Hover the cards below — the text colour and badge rating recompute instantly:

<Example>
  <div class="grid grid-cols-3 gap-3">
    <div class="rounded-lg p-6 bg-sky-100 hover:bg-sky-800 text-a11y-aa wcag-badge text-center relative transition-colors duration-300">
      <div class="font-bold">Sky 100 → 800</div>
      <div class="text-xs mt-1">Hover to flip</div>
    </div>
    <div class="rounded-lg p-6 bg-rose-800 hover:bg-rose-200 text-a11y-aa wcag-badge text-center relative transition-colors duration-300">
      <div class="font-bold">Rose 800 → 200</div>
      <div class="text-xs mt-1">Hover to flip</div>
    </div>
    <div class="rounded-lg p-6 bg-emerald-200 hover:bg-emerald-900 text-a11y-aaa wcag-badge text-center relative transition-colors duration-300">
      <div class="font-bold">Emerald 200 → 900</div>
      <div class="text-xs mt-1">Hover to flip</div>
    </div>
  </div>
</Example>

<!-- llm-context: text-a11y-* sets --tw-jib--text-color so wcag-badge can read the actual accessible shade. Both utilities update live when bg changes (e.g. hover). -->

## How It Works

Measuring and constructing are separate problems and neither depends on the other, so they are separate layers — and they ship differently. Construction is the stable utility. Measurement is the Chromium-only badge.

### Measuring — what is this pair's rating?

<!-- llm-context: the measuring layer is Chromium-only @function code; it powers wcag-badge and is not needed by text-a11y-*. -->


1. **`--tw-jib--linearize()`** — converts to `srgb-linear`, letting the engine perform the sRGB transfer. Asking for the conversion rather than reimplementing it with `pow()` inherits the browser's own exactness, including the linear segment below 0.04045, and leaves out-of-gamut channels un-clamped so an oklch origin outside sRGB keeps its true luminance.
2. **`--tw-jib--luminance-packed()`** — packs `L` into R and `1−L` into G in a single colour, so the next step can treat luminance subtraction as a `color-mix()`.
3. **`--tw-jib--contrast-test-directed()`** — multi-channel `color-mix()` that scales each output channel by a different WCAG threshold (R=3, G=4.5, B=7), testing all three levels in one operation.
4. **`--tw-jib--contrast-test-all()`** — runs the directed test in both orderings and combines them; the output colour _is_ the rating (white = AAA, yellow = AA, red = AA Large, black = Fail).
5. **`--tw-jib--wcag-rating()`** — matches the result colour and returns a `<string>` for `content:` / `style()` use.

No number is ever extracted from a colour, so there is no quantization error, no safety margin, and no uncertainty band. This layer powers [`wcag-badge`](/guide/wcag-badge), which stays useful precisely because the construction layer's guarantees apply to *declared* colours only — not to background images, gradients, or alpha compositing over unknown ancestors.

### Constructing — which colour hits this ratio?

The WCAG ratio `(Y_lighter + 0.05) / (Y_darker + 0.05)` inverts directly, giving the target luminance `Yt` for a requested ratio `R`. Any colour with luminance `Yt` achieves `R` against the background exactly, whatever its hue or chroma — one degree of freedom is constrained, two are free, and the free ones are spent on matching the background's colour.

1. **`--tw-jib--wcag-carrier()`** — computes the background's luminance and smuggles it into the alpha channel. Relative colour syntax allows one origin colour per expression, so this is how a candidate built in oklch can still see the background's luminance: alpha is a float in `[0, 1]`, exactly a luminance's range, and it survives colour-space conversion untouched.
2. **`--tw-jib--wcag-target()`** / **`--tw-jib--wcag-core-vector()`** — solve for `Yt`. The direction (lighten vs darken) is chosen branchlessly at the `0.1791` pivot, the luminance where headroom toward black equals headroom toward white — `√0.0525 − 0.05`. Picking the side with more headroom is optimal.
3. **The seed** — for Class 2/3 spaces, a candidate in the requested space with its lightness derived from `Yt` and the background's chroma and hue kept.
4. **`--tw-jib--wcag-chroma-vector()`** — reduces a candidate to its zero-luminance chroma vector, `c − Yc`.
5. **`--tw-jib--wcag-lift()`** — the shared final stage: `out = Yt + min(1, caps) · vector`. Because the vector contributes no luminance, the output's luminance is `Yt` identically. The `caps` are the largest scale keeping every channel inside `[0, 1]`, so this one expression sets luminance exactly, gamut-maps at constant luminance, and is a no-op on a candidate that already fits.
6. **`--tw-jib--accessible-shade()`** — maps the level to its ratio and routes to the pipeline for the requested colour space.

Because the caps act on whatever vector they are handed, they double as a gamut mapper that preserves WCAG luminance — something neither clipping nor generic chroma reduction can promise.

### The same construction, without `@function`

`text-a11y-*` has two implementations, arranged exactly as [`bg-lightness-*`](/guide/lightness) and its siblings are. Where CSS `@function` exists, the utility calls the six functions above — that is the preferred path, and the one to reach for. Where it does not, the utility falls back to a form built from the same algebra with no function calls in it, so the shade still works instead of disappearing.

The fallback renders the whole solve as one nested relative-colour expression, chained through **unregistered custom properties**. That substitution is the trick: an unregistered custom property's computed value is a token stream, so `var()` splices it in textually rather than evaluating it — which is exactly the local binding a function body would have given you. Half a dozen small declarations collapse into one nested expression the engine evaluates in a single step at `color:`.

Both paths compute the same closed form and were measured landing on the same colour to serialisation precision, so which one your browser runs is not something you can see. An integration test asserts that, side by side, on every release.

Two details of the fallback are load-bearing rather than stylistic:

- **The links must stay unregistered.** Registering one as `syntax: '<color>'` forces the engine to evaluate it into a colour value, and Gecko stores that at reduced precision. The damage lands hardest on the carrier, whose alpha channel *is* the target luminance, so a 1/255 step of alpha is roughly 0.04 of contrast ratio. Measured over 27 cells, Firefox falls from 23 exact to 9. Unregistered, all three engines are exact.
- **The colour-space modifier is a theme lookup, not a branch.** `@theme inline` holds one expression per space and the utility declares its result twice — oklch inline as the default, then again as `--modifier(--tw-jib--a11y-shade-interpolation-*)`, which Tailwind emits only when a modifier is present. That is the same dispatch the [lightness](/guide/lightness) and [saturation](/guide/saturation) modules use, and it does the job `if(style())` does on the `@function` path.

Either way, `--tw-jib--accessible-shade()` stays callable directly — for borders, SVG strokes and gradient stops, which no `text-*` utility can express.

### When the target is impossible

The most any background can offer is `max((Y + 0.05)/0.05, 1.05/(Y + 0.05))`, which bottoms out at `√21 ≈ 4.583` at the pivot. So 3:1 and 4.5:1 are reachable from *every* background, but 7:1 is mathematically unreachable for backgrounds with luminance between roughly 0.10 and 0.30, and for many vivid mid-tones. There the target luminance clamps, the output saturates at pure black or white, and the achieved ratio is the best physics allows. `text-a11y-aaa` on `bg-indigo-600` tops out at 6.44:1. Pair it with [`wcag-badge`](/guide/wcag-badge) to see when you are in that band: the badge reads the level you asked for and displays **Max** instead of the achieved rating, so "AAA was impossible here" is distinguishable from "this pair is merely short".

The fallback lives in `wcag/_stable.css` and ships from the core entry. The `@function` definitions live in `wcag/_functions.css`, with the `@function` form of the utility in `wcag/_utilities.css`; both come in via `tw-jib-css/experimental/wcag`, and the functions can be called directly from your own CSS.
