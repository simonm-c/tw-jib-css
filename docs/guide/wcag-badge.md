---
title: WCAG Badge
---

<!-- llm-context: wcag badge module (experimental) — wcag-badge overlays a ::after pseudo-element showing the WCAG 2.x contrast rating (AAA/AA/AA Large/Fail) for the element's bg + text colour combination. Badge background is green/yellow/orange/red using TW colour tokens. Badge text is black on yellow (AA), white on all others. All computation in CSS via @function + if(style()). Chromium only. -->

# WCAG Badge

`wcag-badge` overlays a live WCAG contrast rating on any element with a background and text colour. The badge shows AAA, AA, AA Large, or Fail — all computed in CSS at render time.

::: warning Browser Support
CSS `@function` and `if(style())` are required. Currently supported in Chromium browsers only. All utilities are wrapped in `@supports` and will be silently ignored in unsupported browsers.
:::

::: tip Import
Included in `@import 'tw-jib-css/experimental'`. To import individually:
```css
@import 'tw-jib-css/experimental/wcag';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'wcag-badge', styles: '::after badge showing AAA / AA / AA Large / Fail' },
]" />

## Basic Usage

Add `wcag-badge` to any element that has both a background colour (`bg-*`) and text colour (`text-*`):

<Example>
  <div class="grid grid-cols-3 gap-3">
    <div class="rounded-lg p-6 bg-slate-900 text-white wcag-badge text-center relative">
      <div class="font-bold">White on Slate 900</div>
    </div>
    <div class="rounded-lg p-6 bg-amber-200 text-amber-900 wcag-badge text-center relative">
      <div class="font-bold">Amber 900 on 200</div>
    </div>
    <div class="rounded-lg p-6 bg-gray-200 text-gray-400 wcag-badge text-center relative">
      <div class="font-bold">Low contrast</div>
    </div>
  </div>
</Example>

The badge background colour is green (AAA), yellow (AA), orange (AA Large), or red (Fail). Badge text is black on yellow (AA), white on all others.

## Across the Spectrum

White text on various backgrounds:

<Example>
  <div class="grid grid-cols-4 gap-3">
    <div class="rounded-lg p-5 bg-red-500 text-white wcag-badge text-center relative">
      <div class="font-bold">Red 500</div>
    </div>
    <div class="rounded-lg p-5 bg-red-800 text-white wcag-badge text-center relative">
      <div class="font-bold">Red 800</div>
    </div>
    <div class="rounded-lg p-5 bg-amber-400 text-white wcag-badge text-center relative">
      <div class="font-bold">Amber 400</div>
    </div>
    <div class="rounded-lg p-5 bg-emerald-600 text-white wcag-badge text-center relative">
      <div class="font-bold">Emerald 600</div>
    </div>
    <div class="rounded-lg p-5 bg-blue-500 text-white wcag-badge text-center relative">
      <div class="font-bold">Blue 500</div>
    </div>
    <div class="rounded-lg p-5 bg-blue-900 text-white wcag-badge text-center relative">
      <div class="font-bold">Blue 900</div>
    </div>
    <div class="rounded-lg p-5 bg-violet-500 text-white wcag-badge text-center relative">
      <div class="font-bold">Violet 500</div>
    </div>
    <div class="rounded-lg p-5 bg-slate-700 text-white wcag-badge text-center relative">
      <div class="font-bold">Slate 700</div>
    </div>
  </div>
</Example>

Dark text on light backgrounds:

<Example>
  <div class="grid grid-cols-4 gap-3">
    <div class="rounded-lg p-5 bg-rose-100 text-rose-700 wcag-badge text-center relative">
      <div class="font-bold">Rose 700/100</div>
    </div>
    <div class="rounded-lg p-5 bg-sky-100 text-sky-800 wcag-badge text-center relative">
      <div class="font-bold">Sky 800/100</div>
    </div>
    <div class="rounded-lg p-5 bg-lime-200 text-lime-900 wcag-badge text-center relative">
      <div class="font-bold">Lime 900/200</div>
    </div>
    <div class="rounded-lg p-5 bg-orange-100 text-orange-600 wcag-badge text-center relative">
      <div class="font-bold">Orange 600/100</div>
    </div>
  </div>
</Example>

## Combining with text-a11y-*

`wcag-badge` and `text-a11y-*` work together on the same element. The badge reads the text colour set by `text-a11y-*` and shows the actual contrast rating:

<Example>
  <div class="grid grid-cols-3 gap-3">
    <div class="rounded-lg p-6 bg-violet-600 text-a11y-aa wcag-badge text-center relative">
      <div class="font-bold">AA shade + badge</div>
    </div>
    <div class="rounded-lg p-6 bg-teal-300 text-a11y-aaa wcag-badge text-center relative">
      <div class="font-bold">AAA shade + badge</div>
    </div>
    <div class="rounded-lg p-6 bg-pink-700 text-a11y-aa-lg wcag-badge text-center relative">
      <div class="font-bold">AA Large + badge</div>
    </div>
  </div>
</Example>

Both utilities update live when the background changes — hover to see the text and badge recompute:

<Example>
  <div class="grid grid-cols-2 gap-3">
    <div class="rounded-lg p-6 bg-cyan-100 hover:bg-cyan-900 text-a11y-aa wcag-badge text-center relative transition-colors duration-300">
      <div class="font-bold">Cyan 100 → 900</div>
      <div class="text-xs mt-1">Hover me</div>
    </div>
    <div class="rounded-lg p-6 bg-fuchsia-800 text-a11y-aaa hover:text-a11y-aa-lg wcag-badge text-center relative transition-colors duration-300">
      <div class="font-bold">AAA -> AA Large</div>
      <div class="text-xs mt-1">Hover me</div>
    </div>
  </div>
</Example>

::: warning Badge must be on the text colour element
`wcag-badge` reads `--tw-jib--text-color` from the element it's placed on. It measures the contrast between **its own** background and text colour — it cannot see or predict the contrast of child elements.

Place the badge on the same element that has the text colour, or on a child element that carries the text colour. Do **not** place it on a parent and expect it to measure a child's `text-a11y-*` colour.
:::

## How It Works

The badge reads the captured `--tw-jib--bg-color` and `--tw-jib--text-color` custom properties (set by `bg-*` and `text-*` utilities in `core.css`), and runs them through an exact contrast pipeline:

1. **`--luminance-packed()`** — packs each colour's relative luminance into R and its complement into G, so a single `color-mix()` becomes a luminance subtraction.
2. **`--contrast-test-all()`** — a multi-channel `color-mix()` tests all three WCAG thresholds (3, 4.5, 7) simultaneously. Each output channel encodes one threshold; running both directional orderings handles either-can-be-lighter without branching.
3. **`--wcag-rating()`** — matches the result colour against the four exact states: white = AAA, yellow = AA, red = AA Large, black = Fail (returns `<string>`).
4. **`::after` pseudo-element** — `content: var(--tw-jib--wcag-rating)` displays the rating.
5. **Conditional badge colour** — `if(style())` maps the rating to green/yellow/orange/red using TW colour tokens; badge text is black on yellow (AA), white on all others.

Because the comparison stays in colour space the whole way through — no numeric luminance is ever extracted — there is no quantization error, no safety margin, and no uncertainty band.
