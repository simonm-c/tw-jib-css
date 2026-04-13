---
title: Accessible Shade
---

<!-- llm-context: wcag accessible shade module (experimental) — text-a11y-{aa,aaa,aa-lg} auto-selects the nearest same-hue accessible text colour for a given background using WCAG 2.x contrast ratio computation. Optional /{colour-space} modifier for all 17 colour spaces. All computation happens in CSS via @function + if(style()) at render time — no JS. Chromium only. -->

# Accessible Shade

`text-a11y-*` automatically picks the nearest same-hue accessible text colour for any background. Set a background, add the utility, and CSS computes the WCAG-compliant shade at render time — no JavaScript.

Under the hood, the contrast pipeline stays in colour space the entire time: packed luminance plus a multi-channel `color-mix()` test all three WCAG thresholds in one operation, with no quantization or safety margins. The shade finder seeds a target oklch lightness directly from the WCAG formula and verifies a tight bracket of candidates around it.

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
  { class: 'text-a11y-aa', styles: 'color: nearest shade passing WCAG AA (4.5:1)' },
  { class: 'text-a11y-aaa', styles: 'color: nearest shade passing WCAG AAA (7:1)' },
  { class: 'text-a11y-aa-lg', styles: 'color: nearest shade passing WCAG AA Large (3:1)' },
  { class: 'text-a11y-aa/<space>', styles: 'color: AA shade in specified colour space' },
]" />

## Basic Usage

Set a background with `bg-*`, then use `text-a11y-*` to pick the WCAG level:

<Example>
  <div class="grid grid-cols-3 gap-3">
    <div class="rounded-lg p-4 bg-indigo-600 text-a11y-aa-lg text-center">
      <div class="text-lg font-bold">AA Large</div>
      <div class="text-xs">3:1 ratio</div>
    </div>
    <div class="rounded-lg p-4 bg-indigo-600 text-a11y-aa text-center">
      <div class="text-lg font-bold">AA</div>
      <div class="text-xs">4.5:1 ratio</div>
    </div>
    <div class="rounded-lg p-4 bg-indigo-600 text-a11y-aaa text-center">
      <div class="text-lg font-bold">AAA</div>
      <div class="text-xs">7:1 ratio</div>
    </div>
  </div>
</Example>

The shade finder searches lighter or darker shades of the background colour, returning the closest one that passes the requested WCAG level. Dark backgrounds get lighter text, light backgrounds get darker text.

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

By default the shade finder works in oklch. Use a modifier to pick a different colour space:

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

All 17 colour spaces from the lightness module are supported: `oklch`, `lch`, `lab`, `oklab`, `hsl`, `hwb`, `rgb`, `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50`, `xyz-d65`, `color-mix`.

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

## How It Works

The utility pipeline is built from composable CSS `@function` definitions:

1. **`--linearize()`** — undoes sRGB gamma via `pow()`.
2. **`--luminance-packed()`** — packs `L` into R and `255−L` into G in a single colour, so the next step can treat luminance subtraction as a `color-mix()`.
3. **`--contrast-test-directed()`** — multi-channel `color-mix()` that scales each output channel by a different WCAG threshold (R=3, G=4.5, B=7), testing all three levels in one operation.
4. **`--contrast-test-all()`** — runs the directed test in both orderings and combines them; the output colour _is_ the rating (white = AAA, yellow = AA, red = AA Large, black = Fail).
5. **`--wcag-rating()`** — matches the result colour and returns a `<string>` for `content:` / `style()` use.
6. **`--get-wcag-lum()`** — banded threshold chain used only to seed the shade finder's target computation (never on the contrast hot path).
7. **`--accessible-shade-lg / -aa / -aaa`** — solve the WCAG formula for a target oklch lightness, push the seed by a chroma-correction factor, generate a tight bracket of candidates via `--lightness()`, and verify each with `--contrast-test-all()`. The crossover at `--luminance-threshold(bg, 0.18)` decides whether to search lighter or darker first.

The contrast comparison is mathematically exact — no number is ever extracted from a colour, so there is no quantization error, no safety margin, and no uncertainty band. All functions are defined in `wcag/_functions.css` and can be imported independently for use in custom CSS.
