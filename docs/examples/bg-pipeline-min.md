---
title: bg Pipeline Minimal Test
layout: page
---

# bg pipeline minimal test

## A: chained transforms only (no WCAG)

<div data-test="chain" class="h-32 w-64 rounded-lg flex items-center justify-center bg-red-500 bg-hue-rotate-90 -bg-saturation-30 bg-lightness-25">
  <span class="text-sm font-mono text-white">chain only</span>
</div>

## B: bg-red-500 + WCAG only (no transforms)

<div data-test="wcag" class="h-32 w-64 rounded-lg flex items-center justify-center bg-red-500">
  <span class="text-sm font-mono text-contrast-aa">contrast only</span>
</div>

## C: chained transforms + WCAG

<div data-test="all" class="h-32 w-64 rounded-lg flex items-center justify-center bg-red-500 bg-hue-rotate-90 -bg-saturation-30 bg-lightness-25">
  <span class="text-sm font-mono text-contrast-aa">all 3 + contrast</span>
</div>
