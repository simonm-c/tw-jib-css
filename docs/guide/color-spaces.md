---
title: Color Spaces
---

# Color Spaces

Every colour transform interpolates in a colour space. Jibcss gives you seventeen. Pick one by appending a modifier.

## What colour space changes

The colour space affects _how_ a transform calculates, not _what_ colours you can use. `bg-lighten-40/oklch` and `bg-lighten-40/hsl` both lighten the same input by the same amount — but the path from A to B is different, so the result looks different.

<Example stretch>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/oklch</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-20/oklch h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-40/oklch h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-60/oklch h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-80/oklch h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/hsl</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-20/hsl h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-40/hsl h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-60/hsl h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-80/hsl h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/lab</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-20/lab h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-40/lab h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-60/lab h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-80/lab h-8"></div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-24 text-xs text-gray-500 text-right font-mono shrink-0">/display-p3</span>
      <div class="flex flex-1">
        <div class="flex-1 bg-red-500 h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-20/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-40/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-60/display-p3 h-8"></div>
        <div class="flex-1 bg-red-500 bg-lightness-80/display-p3 h-8"></div>
      </div>
    </div>
  </div>
</Example>

Same input (`red-500`), same transform (`lighten-40`), four different results. The visible difference between oklch and hsl is the whole point.

## When to pick what

**oklch** (default) — Perceptually uniform. A 20-point lightness shift looks the same whether you start from blue or yellow. Best general-purpose choice.

**hsl** — Familiar if you've worked with CSS colour before. Less uniform — yellows blow out faster than blues — but sometimes that's the look you want.

**lab / oklab** — Perceptual spaces without a hue channel. Good for lightness and saturation where you want zero hue drift.

**display-p3** — Wide gamut. Same interpolation as srgb but covers more of the visible spectrum. Use when targeting Apple displays or modern HDR screens.

**color-mix** — Falls back to `color-mix()` in oklab. Maximum browser compatibility. Slightly different results from native relative colour syntax.

For most work, the default (oklch) is the right answer. Switch spaces when you see a visual difference you don't like and want to compare alternatives.

## The modifier syntax

```html
<div class="bg-blue-500 bg-lighten-30/oklch">
  <div class="bg-blue-500 bg-lighten-30/hsl">
    <div class="bg-blue-500 bg-hue-rotate-90/lab"></div>
  </div>
</div>
```

The modifier applies per-utility, not per-element. You can mix spaces on one element if you have a reason to:

```html
<div class="bg-blue-500 bg-lighten-20/oklch bg-hue-rotate-45/hsl"></div>
```

## Full list

See the [Colour Spaces reference](/guide/colour-spaces) for the complete list of 17 supported spaces with characteristics and browser support.
