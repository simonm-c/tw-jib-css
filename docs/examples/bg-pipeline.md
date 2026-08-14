---
title: bg Pipeline Composition Test
layout: page
---

# bg Pipeline Composition Test

Verification fixture for the chained `hue-rotate → saturation → lightness` pipeline. Each row should render the swatch background AND a `text-a11y-aa` text colour computed against the post-pipeline background.

The text colour is the check: `text-a11y-aa` reads the composed background, so a correct pipeline shows text contrasted against the post-transform swatch rather than the pre-pipeline source.

## Single transforms

<div class="grid grid-cols-3 gap-3 my-6">
  <div data-test="bg-only" class="h-24 rounded-lg flex items-center justify-center bg-red-500">
    <span class="text-sm font-mono text-a11y-aa">bg-red-500 only</span>
  </div>
  <div data-test="lightness-only" class="h-24 rounded-lg flex items-center justify-center bg-red-500 bg-lightness-30">
    <span class="text-sm font-mono text-a11y-aa">+ bg-lightness-30</span>
  </div>
  <div data-test="darken-only" class="h-24 rounded-lg flex items-center justify-center bg-red-500 -bg-lightness-30">
    <span class="text-sm font-mono text-a11y-aa">+ -bg-lightness-30</span>
  </div>
  <div data-test="saturation-only" class="h-24 rounded-lg flex items-center justify-center bg-red-500 -bg-saturation-50">
    <span class="text-sm font-mono text-a11y-aa">+ -bg-saturation-50</span>
  </div>
  <div data-test="hue-only" class="h-24 rounded-lg flex items-center justify-center bg-red-500 bg-hue-rotate-90">
    <span class="text-sm font-mono text-a11y-aa">+ bg-hue-rotate-90</span>
  </div>
  <div data-test="hue-only-180" class="h-24 rounded-lg flex items-center justify-center bg-red-500 bg-hue-rotate-180">
    <span class="text-sm font-mono text-a11y-aa">+ bg-hue-rotate-180</span>
  </div>
</div>

## Pairwise composition

<div class="grid grid-cols-3 gap-3 my-6">
  <div data-test="hue-sat" class="h-24 rounded-lg flex items-center justify-center bg-red-500 bg-hue-rotate-90 -bg-saturation-40">
    <span class="text-sm font-mono text-a11y-aa">hue-90 + -sat-40</span>
  </div>
  <div data-test="hue-light" class="h-24 rounded-lg flex items-center justify-center bg-red-500 bg-hue-rotate-90 bg-lightness-25">
    <span class="text-sm font-mono text-a11y-aa">hue-90 + light-25</span>
  </div>
  <div data-test="sat-light" class="h-24 rounded-lg flex items-center justify-center bg-red-500 -bg-saturation-30 bg-lightness-30">
    <span class="text-sm font-mono text-a11y-aa">-sat-30 + light-30</span>
  </div>
</div>

## Full pipeline (the headline case)

<div class="grid grid-cols-3 gap-3 my-6">
  <div data-test="all-three-light" class="h-24 rounded-lg flex items-center justify-center bg-red-500 bg-hue-rotate-120 -bg-saturation-30 bg-lightness-25">
    <span class="text-sm font-mono text-a11y-aa">all 3 (lightened)</span>
  </div>
  <div data-test="all-three-dark" class="h-24 rounded-lg flex items-center justify-center bg-blue-500 bg-hue-rotate-180 -bg-saturation-20 -bg-lightness-30">
    <span class="text-sm font-mono text-a11y-aa">all 3 (darkened)</span>
  </div>
  <div data-test="all-three-extreme" class="h-24 rounded-lg flex items-center justify-center bg-green-600 bg-hue-rotate-90 -bg-saturation-50 bg-lightness-40">
    <span class="text-sm font-mono text-a11y-aa">all 3 (extreme)</span>
  </div>
</div>

## bg-current source

<div class="grid grid-cols-2 gap-3 my-6 text-purple-700">
  <div data-test="bg-current" class="h-24 rounded-lg flex items-center justify-center bg-current">
    <span class="text-sm font-mono text-a11y-aa">bg-current</span>
  </div>
  <div data-test="bg-current-chain" class="h-24 rounded-lg flex items-center justify-center bg-current bg-hue-rotate-60 bg-lightness-20">
    <span class="text-sm font-mono text-a11y-aa">bg-current + hue + light</span>
  </div>
</div>

## Sanity reference — pre-refactor behaviour

If chaining is broken or WCAG sees the wrong colour, compare against `bg-red-500` alone above — the text colour and badge rating should match what a single applied transform produces individually, with no chained transforms losing their effect.
