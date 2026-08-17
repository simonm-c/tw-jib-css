---
title: WCAG Badge
---

<!-- llm-context: wcag badge module (experimental) — wcag-badge overlays a ::after pseudo-element showing the WCAG 2.x contrast rating (AAA/AA/AA Large/Fail, plus Max) for the element's bg + text colour combination. Badge background is green/yellow/orange/red using TW colour tokens; Max shares Fail's red. Max appears only when text-a11y-* is on the same element and the level it requested is physically unreachable from that background. Badge text is black on yellow (AA), white on all others. All computation in CSS via @function + if(style()). Chromium only, and unlike text-a11y-* it cannot be made portable: colour-to-string needs if(style()). Ships from tw-jib-css-experimental, importable alone as tw-jib-css-experimental/wcag-badge; text-a11y-* ships from the stable tw-jib-css main entry. -->

# WCAG Badge

`wcag-badge` overlays a live WCAG contrast rating on any element with a background and text colour. The badge shows AAA, AA, AA Large, or Fail — all computed in CSS at render time. Paired with `text-a11y-*` it adds a fifth state, Max, for a level the background cannot physically reach.

::: warning Browser Support
CSS `@function` and `if(style())` are required. Currently supported in Chromium browsers only. The utility is wrapped in `@supports` and renders nothing in unsupported browsers.

This does **not** apply to its partner [`text-a11y-*`](https://simonm-c.github.io/tw-jib-css/guide/wcag), which is stable and works everywhere. The badge is the half of the module that cannot follow: reading a rating out means turning a colour into a _string_, and `if(style())` is the only way CSS can do that. So an element carrying both utilities gets an accessible shade in every browser and a badge only in Chromium.
:::

::: tip Import
Included in `@import 'tw-jib-css-experimental'`. To take it on its own — no other
experimental module, and none of the [`@function` overrides](/functions):

```css
@import 'tw-jib-css-experimental/wcag-badge';
```

Taking the badge deliberately does **not** reroute `text-a11y-*` onto `@function`.
The badge reads `--tw-jib--a11y-level`, which both shade paths write, so it reports
correctly either way. The accessible shade itself is separate and stable:
`@import 'tw-jib-css'`.
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'wcag-badge', styles: '::after badge showing AAA / AA / AA Large / Fail (or Max, with text-a11y-*)' },
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

The badge background colour is green (AAA), yellow (AA), orange (AA Large), or red (Fail, and Max). Badge text is black on yellow (AA), white on all others.

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

## Combining with text-a11y-\*

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

### Max — the level was impossible

Some ratios cannot be reached from some backgrounds. The most any background can
offer is `max((Y + 0.05)/0.05, 1.05/(Y + 0.05))`, which bottoms out at
`√21 ≈ 4.583` at the 0.1791 pivot — so 3:1 and 4.5:1 are always achievable, but
7:1 is out of reach for backgrounds in the middle of the luminance range. There
the shade saturates at pure black or white and delivers the best that exists.

Without a fifth state, that case reads as a plain `AA` — indistinguishable from
"your AAA request quietly didn't work". `Max` says the quiet part out loud: this
is the ceiling, and asking for more will not help.

<Example>
  <div class="grid grid-cols-3 gap-3">
    <div class="rounded-lg p-6 bg-red-500 text-a11y-aaa wcag-badge text-center relative">
      <div class="font-bold">AAA on Red 500</div>
      <div class="text-xs mt-1">ceiling 5.50:1</div>
    </div>
    <div class="rounded-lg p-6 bg-blue-500 text-a11y-aaa wcag-badge text-center relative">
      <div class="font-bold">AAA on Blue 500</div>
      <div class="text-xs mt-1">ceiling 5.66:1</div>
    </div>
    <div class="rounded-lg p-6 bg-slate-500 text-a11y-aaa wcag-badge text-center relative">
      <div class="font-bold">AAA on Slate 500</div>
      <div class="text-xs mt-1">ceiling 4.77:1</div>
    </div>
  </div>
</Example>

Two things follow from how it is derived:

- **It needs `text-a11y-*`.** Max describes a shortfall against a _requested_
  level, and only `text-a11y-*` records what was requested. A bare `wcag-badge`
  has no intent to compare against, so it never shows Max — it reports plain
  measurement, exactly as before.
- **It shares Fail's red.** Both mean "don't ship this as-is". The difference is
  what to do about it: Fail means fix the pair, Max means pick a different
  background or accept a lower level.

::: warning Badge must be on the text colour element
`wcag-badge` reads `--tw-jib--text-color` from the element it's placed on. It measures the contrast between **its own** background and text colour — it cannot see or predict the contrast of child elements.

Place the badge on the same element that has the text colour, or on a child element that carries the text colour. Do **not** place it on a parent and expect it to measure a child's `text-a11y-*` colour.
:::

## How It Works

The badge reads the captured `--tw-jib--background-color` and `--tw-jib--text-color` custom properties (set by `bg-*` and `text-*` utilities in `core/_index.css`), and runs them through an exact contrast pipeline:

1. **`--tw-jib--luminance-packed()`** — packs each colour's relative luminance into R and its complement into G, so a single `color-mix()` becomes a luminance subtraction.
2. **`--tw-jib--contrast-test-all()`** — a multi-channel `color-mix()` tests all three WCAG thresholds (3, 4.5, 7) simultaneously. Each output channel encodes one threshold; running both directional orderings handles either-can-be-lighter without branching.
3. **`--tw-jib--wcag-rating()`** — matches the result colour against the four exact states: white = AAA, yellow = AA, red = AA Large, black = Fail (returns `<string>`).
4. **`--tw-jib--wcag-shortfall`** — compares the rating against the level `text-a11y-*` recorded in `--tw-jib--a11y-level`, yielding the Max state described below.
5. **`::after` pseudo-element** — `content: var(--tw-jib--wcag-display)` displays the rating, or `Max`.
6. **Conditional badge colour** — `if(style())` maps the displayed value to green/yellow/orange/red using TW colour tokens; badge text is black on yellow (AA), white on all others.

Because the comparison stays in colour space the whole way through — no numeric luminance is ever extracted — there is no quantization error and no uncertainty band. Every step works in `srgb-linear`; routing the luminance through the legacy `rgb()` function instead costs 10⁻⁵-scale precision, always signed so the darker colour of a pair measures darker, which is enough to decide a verdict for a pair sitting on a threshold.

There is one deliberate tolerance. WCAG asks for a ratio of _at least_ the threshold, so a pair landing exactly on 4.5:1 is AA — but a step function returns "fail" at exactly zero. The thresholds therefore carry a 10⁻⁶ epsilon, about 5 × 10⁻⁴ in ratio terms, so an exact tie resolves in favour of passing. This matters because [`text-a11y-*`](https://simonm-c.github.io/tw-jib-css/guide/accessible-color) produces exact ties by design; without it the badge would contradict the class beside it on every element.
