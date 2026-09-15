---
title: Automatic contrast
---

<!-- llm-context: Solves a text color whose WCAG contrast ratio against its own background equals the level you asked for, and ships from the main entry. text-contrast-{aa,aaa,aa-lg} solves in closed form for a same-hue text color whose WCAG 2.x contrast ratio against the background equals the requested ratio exactly. No candidate search, no verification pass. Optional /<space> modifier for all 17 color spaces selects the aesthetic path only; correctness is owned by a shared final stage. All computation happens in CSS relative color syntax at render time, no JS. Verified exact on Chromium, Firefox and WebKit. Levels are themeable via the --jib-contrast-ratio-* namespace. -->

# Automatic contrast

`text-contrast-*` derives a same-hue text color that hits your target WCAG ratio for any background. Set a background, add the utility, and CSS computes the shade at render time, with no JavaScript.

The shade is not searched for. It is **solved**. WCAG 2's contrast ratio constrains exactly one quantity, relative luminance, and luminance is a linear function of linear-light RGB. So invert the ratio formula for the target luminance, then use a single relative-color expression to build a color carrying that luminance, the background's hue and the background's chroma. The achieved ratio equals the requested ratio by construction: no candidate bracket, no verification pass, no convergence tolerance.

Solving instead of searching is also what makes the utility portable. A search would need a way to call itself and a way to pick the candidate that passed; the closed form needs neither, so it is built from `calc`, `clamp`, `min`, `max` and relative color syntax, and works everywhere.

::: warning A background from a CSS variable must carry the `color:` hint
`text-contrast-*` solves against the background you set with `bg-*`, so the background has to reach it. `bg-(color:--brand)` does; `bg-(--brand)` does not, because Tailwind will not infer a type from inside a `var()`. Without the hint the element still gets its background, but the contrast solve runs against an unset value and returns the same shade whatever color you passed — a plausible-looking result that does not meet the ratio the class names. See [Colors from CSS variables need a type hint](/guide/composition#colors-from-css-variables-need-a-type-hint).
:::

::: warning The ratio is exact, which cuts both ways
Because the utilities hit the ratio _exactly_ rather than overshooting it, the result can land a hair either side of the named threshold, around ±2 × 10⁻⁵ in practice. A checker that rounds before it compares still reads AAA. One doing a bare `ratio >= 7` may not, and will report `text-contrast-aaa` as AA. That is arithmetic on a tie, not a contrast failure. The pair sits at 7:1 to four decimal places. If you need an external report to read AAA without argument, ask for a slightly higher ratio than the level you need.
:::

::: tip Browser support
Works in Chromium, Firefox and Safari. Every engine gets the requested ratio exactly, verified against all 242 Tailwind colors at all three levels on each. The only per-engine difference is cosmetic; see [Color Spaces](#color-spaces) below.

`text-contrast-*` needs relative color syntax and `@property` and nothing else: Chrome 111+, Safari 16.4+, Firefox 128+.
:::

## Quick reference

<UtilityTable :rows="[
  { class: 'text-contrast-aa', styles: 'color: same-hue shade at exactly WCAG AA (4.5:1)' },
  { class: 'text-contrast-aaa', styles: 'color: same-hue shade at exactly WCAG AAA (7:1)' },
  { class: 'text-contrast-aa-lg', styles: 'color: same-hue shade at exactly WCAG AA Large (3:1)' },
  { class: 'text-contrast-aa/<space>', styles: 'color: AA shade, chroma shaped by the given color space' },
]" />

### Levels are themeable

The three levels are not hard-coded. They are entries in the `--jib-contrast-ratio-*` theme namespace. Add a key and you get a working utility:

```css
@theme {
  --jib-contrast-ratio-aa-plus: 5;
}
```

```html
<div class="bg-indigo-700 text-contrast-aa-plus">Solved for exactly 5:1</div>
```

Useful for the "AAA but let an external checker round in my favor" case in the warning above. The `/<space>` modifiers work on custom levels too.

## Basic usage

Set a background with `bg-*`, then use `text-contrast-*` to pick the WCAG level:

<Example>
  <div class="grid grid-cols-3 gap-3">
    <div class="rounded-lg p-4 bg-indigo-800 text-contrast-aa-lg text-center">
      <div class="text-lg font-bold">AA Large</div>
      <div class="text-xs">3:1 ratio</div>
    </div>
    <div class="rounded-lg p-4 bg-indigo-800 text-contrast-aa text-center">
      <div class="text-lg font-bold">AA</div>
      <div class="text-xs">4.5:1 ratio</div>
    </div>
    <div class="rounded-lg p-4 bg-indigo-800 text-contrast-aaa text-center">
      <div class="text-lg font-bold">AAA</div>
      <div class="text-xs">7:1 ratio</div>
    </div>
  </div>
</Example>

The result is a lighter or darker shade of the background color, landing on the requested ratio rather than merely clearing it. Dark backgrounds get lighter text, light backgrounds get darker text. The crossover is the luminance where there is equal room to move in either direction.

### WCAG levels

| Utility               | Ratio | Use case                         |
| --------------------- | ----- | -------------------------------- |
| `text-contrast-aa-lg` | 3:1   | Headings, bold text above 14pt   |
| `text-contrast-aa`    | 4.5:1 | Body text, standard UI labels    |
| `text-contrast-aaa`   | 7:1   | Fine print, captions, small text |

### Every Tailwind color

Every default TW color at every shade, with `text-contrast-aa` picking the text color for each:

<Example stretch>
  <div class="flex flex-col gap-1">
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-red-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-orange-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-amber-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-yellow-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-lime-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-green-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-emerald-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-teal-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-cyan-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-sky-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-blue-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-indigo-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-violet-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-purple-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-fuchsia-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-pink-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-rose-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-slate-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-gray-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-zinc-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-neutral-950 text-contrast-aa">950</div>
  </div>
  <div class="grid grid-cols-11 gap-1">
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-50 text-contrast-aa">50</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-100 text-contrast-aa">100</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-200 text-contrast-aa">200</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-300 text-contrast-aa">300</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-400 text-contrast-aa">400</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-500 text-contrast-aa">500</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-600 text-contrast-aa">600</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-700 text-contrast-aa">700</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-800 text-contrast-aa">800</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-900 text-contrast-aa">900</div>
    <div class="h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold bg-stone-950 text-contrast-aa">950</div>
  </div>
  </div>
</Example>

## Color spaces

The modifier selects the **aesthetic path** of the shade: how chroma and perceptual hue travel between the background and the output. It has no say in the ratio. One shared final stage owns correctness for every space, so all seventeen land on the same contrast and differ only in how colorful the result is. Default is oklch, as it is for every color transform in this library.

<Example>
  <div class="grid grid-cols-3 gap-3">
    <div class="rounded-lg p-4 bg-purple-700 text-contrast-aa text-center">
      <div class="font-bold">oklch (default)</div>
      <div class="text-xs">text-contrast-aa</div>
    </div>
    <div class="rounded-lg p-4 bg-purple-700 text-contrast-aa/hsl text-center">
      <div class="font-bold">hsl</div>
      <div class="text-xs">text-contrast-aa/hsl</div>
    </div>
    <div class="rounded-lg p-4 bg-purple-700 text-contrast-aa/lab text-center">
      <div class="font-bold">lab</div>
      <div class="text-xs">text-contrast-aa/lab</div>
    </div>
  </div>
</Example>

All 17 color spaces work: `oklch`, `lch`, `lab`, `oklab`, `hsl`, `hwb`, `rgb`, `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50`, `xyz-d65`, `color-mix`.

They fall into three groups by how their lightness relates to luminance:

| Group                       | Spaces                                                                                                                     | Behavior                                                                                                                                                                                                                                     |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Linear-light and RGB-family | `srgb`, `srgb-linear`, `rgb`, `xyz`, `xyz-d50`, `xyz-d65`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `color-mix` | The closed form _is_ the shade path. Each is a linear transform of linear-light RGB, so differences within the group are visually negligible. Output matches the background's chromaticity exactly.                                          |
| CIE Lab family              | `lab`, `lch`                                                                                                               | L\* is an invertible function of luminance, so the seed is exact in closed form. CSS `lab()`/`lch()` are D50-adapted, so L\* tracks chromatically adapted luminance; the final stage absorbs the difference.                                 |
| Perceptual-OK and legacy    | `oklab`, `oklch`, `hsl`, `hwb`                                                                                             | Lightness is _not_ a pure function of luminance, so the seed is approximate and the final stage corrects it. `hsl` keeps saturation and so washes out at extreme targets; `hwb` splits the input's whiteness/blackness budget by the target. |

`oklab` and `lab` route through the same pipelines as `oklch` and `lch`. Identical seeds; only the channel notation differs.

### One per-engine difference, in chroma only

`/oklch`, `/oklab`, `/lch` and `/lab` derive their seed lightness with a cube root. Firefox parses `pow()` but rejects a color _channel keyword_ as its argument, so on Firefox an `@supports` gate seeds these four linearly instead. Chrome and Safari both get the cube root.

The consequence is worth being precise about, because it is smaller than it sounds:

- **The ratio is unaffected.** The seed governs aesthetics; a shared final stage owns correctness. All four are exact on Firefox, same as everywhere else.
- **The chroma differs slightly.** A linear seed is less perceptually even, so `text-contrast-aa/oklch` on Firefox can be a touch more or less colorful than the same class in Chrome or Safari. Same hue, same contrast.

If you need the four to match pixel-for-pixel across engines, use a Class 1 space. `/srgb` and its ten siblings have no seed, so they are identical everywhere. Asking for `/oklch` and getting the linear seed still beats ignoring your modifier and handing you the core instead.

## Typographic hierarchy

Use different levels for different text sizes. Heading at AA Large, body at AA, fine print at AAA:

<Example>
  <div class="grid grid-cols-2 gap-4">
    <div class="rounded-xl overflow-hidden bg-teal-700 p-5">
      <div class="text-xl font-bold text-contrast-aa-lg">AA Large Heading</div>
      <p class="mt-2 text-sm text-contrast-aa">AA body text. Sed do eiusmod tempor incididunt ut labore.</p>
      <p class="mt-2 text-xs text-contrast-aaa">AAA fine print. Captions and small text.</p>
    </div>
    <div class="rounded-xl overflow-hidden bg-orange-300 p-5">
      <div class="text-xl font-bold text-contrast-aa-lg">AA Large Heading</div>
      <p class="mt-2 text-sm text-contrast-aa">AA body text. Sed do eiusmod tempor incididunt ut labore.</p>
      <p class="mt-2 text-xs text-contrast-aaa">AAA fine print. Captions and small text.</p>
    </div>
  </div>
</Example>

## Applying conditionally

Prefix with any variant. The solve happens against whatever background is in effect when
the variant matches, so a hover state that also changes the background gets a text colour
solved for the new one rather than the old.

<Example>
  <div class="flex flex-wrap gap-4">
    <div class="bg-sky-200 hover:bg-sky-900 text-contrast-aa rounded-xl p-5 w-56 cursor-pointer transition-colors duration-300">
      Hover me. The text re-solves against the darker background.
    </div>
    <div class="bg-lime-300 dark:bg-lime-950 text-contrast-aa rounded-xl p-5 w-56">
      Light and dark, both solved.
    </div>
  </div>
</Example>

Breakpoint variants work the same way, which is the practical route to the typographic
hierarchy above: `text-contrast-aa-lg md:text-contrast-aa` tightens the requirement as the
text gets smaller.

## Using a custom level

There is no bracket syntax here. `text-contrast-[5]` does not compile, and neither does
`text-contrast-(--my-ratio)`. That is deliberate rather than an omission.

A ratio is not a one-off value. Two elements asking for 5:1 are making the same
accessibility claim, and that claim belongs somewhere a reader can find it, not inlined at
two call sites that can drift apart. So levels come from your theme:

```css
@theme {
  --jib-contrast-ratio-brand: 5.5;
}
```

```html
<div class="bg-indigo-700 text-contrast-brand">Solved for exactly 5.5:1</div>
```

The name you choose becomes the utility, and it behaves like the built-in levels in every
respect, `/<space>` modifiers included:

<Example>
  <div class="rounded-xl bg-indigo-700 p-5">
    <div class="text-contrast-aa">aa, the built-in 4.5:1</div>
    <div class="text-contrast-aaa">aaa, the built-in 7:1</div>
  </div>
</Example>

The three shipped levels are ordinary entries in that same namespace, so nothing about a
level you add is a second-class case.

| Level                 | Ratio | WCAG rule                        |
| --------------------- | ----- | -------------------------------- |
| `text-contrast-aa`    | 4.5:1 | Normal body text                 |
| `text-contrast-aaa`   | 7:1   | Enhanced, normal body text       |
| `text-contrast-aa-lg` | 3:1   | Large text, 18.66px bold or 24px |

## How it works

Building a color at a known ratio, stage by stage.

### Which color hits this ratio?

The WCAG ratio `(Y_lighter + 0.05) / (Y_darker + 0.05)` inverts directly, giving the target luminance `Yt` for a requested ratio `R`. Any color with luminance `Yt` achieves `R` against the background exactly, whatever its hue or chroma. One degree of freedom is constrained, two are free, and the free two go to matching the background's color.

1. **The carrier.** Computes the background's luminance and smuggles it into the alpha channel. Relative color syntax allows one origin color per expression, so this is how a candidate built in oklch can still see the background's luminance: alpha is a float in `[0, 1]`, exactly a luminance's range, and it survives color-space conversion untouched.
2. **The target.** Solves for `Yt`. The `0.1791` pivot picks the direction, lighten or darken, without branching: it is the luminance where headroom toward black equals headroom toward white, `√0.0525 − 0.05`. Taking the side with more headroom is optimal.
3. **The seed.** For Class 2/3 spaces, a candidate in the requested space with its lightness derived from `Yt` and the background's chroma and hue kept.
4. **The chroma vector.** Reduces a candidate to its zero-luminance chroma, `c − Yc`.
5. **The lift.** The shared final stage, `out = Yt + min(1, caps) · vector`. Because the vector contributes no luminance, the output's luminance is `Yt` identically. The `caps` are the largest scale keeping every channel inside `[0, 1]`, so this one expression sets luminance exactly, gamut-maps at constant luminance, and is a no-op on a candidate that already fits.
6. **The dispatch.** Maps the level to its ratio and routes to the pipeline for the requested color space.

Because the caps act on whatever vector they are handed, they double as a gamut mapper that preserves WCAG luminance, something neither clipping nor generic chroma reduction can promise.

### Writing the solve in CSS

The whole thing renders as one nested relative-color expression, chained through
**unregistered custom properties**. That substitution is the trick: an unregistered custom
property's computed value is a token stream, so `var()` splices it in textually rather than
evaluating it, which gives the algebra above the local bindings it needs. Half a dozen small
declarations collapse into one nested expression the engine evaluates in a single step at
`color:`.

Two details of that arrangement are load-bearing rather than stylistic:

- **The links must stay unregistered.** Registering one as `syntax: '<color>'` forces the engine
  to evaluate it into a color value, and Gecko stores that at reduced precision. The damage
  lands hardest on the carrier, whose alpha channel _is_ the target luminance, so a 1/255 step of
  alpha is roughly 0.04 of contrast ratio. Measured over 27 cells, Firefox falls from 23 exact to 9. Unregistered, all three engines are exact.
- **The color-space modifier is a theme lookup, not a branch.** `@theme inline` holds one
  expression per space and the utility declares its result twice: oklch inline as the default,
  then again as `--modifier(--jib-contrast-shade-interpolation-*)`, which Tailwind emits only when
  a modifier is present. That is the same dispatch the [lightness](/guide/lightness) and
  [saturation](/guide/saturation) modules use.

### When the target is impossible

The most any background can offer is `max((Y + 0.05)/0.05, 1.05/(Y + 0.05))`, which bottoms out at `√21 ≈ 4.583` at the pivot. So 3:1 and 4.5:1 are reachable from _every_ background, but 7:1 is mathematically unreachable for backgrounds with luminance between roughly 0.10 and 0.30, and for many vivid mid-tones. There the target luminance clamps, the output saturates at pure black or white, and the achieved ratio is the best physics allows. `text-contrast-aaa` on `bg-indigo-600` tops out at 6.44:1.

The implementation lives in `automatic-contrast/_index.css` and ships from the main entry.

## Import

Included in `@import 'tw-jib-css'`. To import individually:

```css
@import 'tw-jib-css/automatic-contrast';
```

<BaselineSupport :features="['relative-color', 'registered-custom-properties']" />
