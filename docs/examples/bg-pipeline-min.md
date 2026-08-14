---
title: bg Pipeline Minimal Test
layout: page
---

# bg Pipeline Minimal Test

## A: chained transforms only (no WCAG)

<div data-test="chain" class="h-32 w-64 rounded-lg flex items-center justify-center bg-red-500 bg-hue-rotate-90 -bg-saturation-30 bg-lightness-25">
  <span class="text-sm font-mono text-white">chain only</span>
</div>

## B: bg-red-500 + WCAG only (no transforms)

<div data-test="wcag" class="h-32 w-64 rounded-lg flex items-center justify-center bg-red-500">
  <span class="text-sm font-mono text-a11y-aa">a11y only</span>
</div>

## C: chained transforms + WCAG

<div data-test="all" class="h-32 w-64 rounded-lg flex items-center justify-center bg-red-500 bg-hue-rotate-90 -bg-saturation-30 bg-lightness-25">
  <span class="text-sm font-mono text-a11y-aa">all 3 + a11y</span>
</div>
