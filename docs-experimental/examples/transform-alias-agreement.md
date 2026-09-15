---
title: Transform alias agreement fixture
---

<!-- llm-context: verification fixture for the directional alias functions. Each case sets color three ways: alias = --jib-lighten/darken/saturate/desaturate, prim = the --jib-lightness/--jib-saturation call the alias forwards to, util = the equivalent text-* utility. The negative cases have no utility form and compare alias against prim only, proving the aliases do not clamp. Lives in the experimental instance because every cell needs CSS @function. -->

# Transform alias agreement fixture

Each directional alias rendered beside the primitive it forwards to and the utility it mirrors, so a drift between the three shows up as a colour difference rather than a silent divergence.

`--jib-darken(c, 20)` is defined as `--jib-lightness(c, -20)` and is meant to match `text-darken-20`. Nothing enforces that but this page: the unit suite reads emitted CSS and cannot tell whether the engine resolves the three routes to the same colour.

Three readouts per case:

- **alias.** The directional function, called with a positive amount.
- **prim.** The primitive it forwards to, called with the sign already applied.
- **util.** The utility class of the same name.

The first swatch is an uncoloured control: a cell matching it is one whose declaration the engine dropped.

Targeted by the Playwright integration suite.

<div class="grid grid-cols-1 gap-2 my-2">
  <div data-test="uncoloured" class="h-20 rounded-lg flex items-center justify-center bg-gray-100"><span>uncoloured control</span></div>
</div>

## Lightness

<div class="grid grid-cols-3 gap-2 my-2">
  <div data-test="alias-lighten-20" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-[--jib-lighten(var(--color-violet-600),20)]"><span>alias lighten-20</span></div>
  <div data-test="prim-lighten-20" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-[--jib-lightness(var(--color-violet-600),20)]"><span>prim</span></div>
  <div data-test="util-lighten-20" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-violet-600 text-lighten-20"><span>util</span></div>
</div>

<div class="grid grid-cols-3 gap-2 my-2">
  <div data-test="alias-darken-20" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-[--jib-darken(var(--color-violet-600),20)]"><span>alias darken-20</span></div>
  <div data-test="prim-darken-20" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-[--jib-lightness(var(--color-violet-600),-20)]"><span>prim</span></div>
  <div data-test="util-darken-20" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-violet-600 text-darken-20"><span>util</span></div>
</div>

<div class="grid grid-cols-3 gap-2 my-2">
  <div data-test="alias-darken-20-lab" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-[--jib-darken(var(--color-violet-600),20,lab)]"><span>alias darken-20-lab</span></div>
  <div data-test="prim-darken-20-lab" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-[--jib-lightness(var(--color-violet-600),-20,lab)]"><span>prim</span></div>
  <div data-test="util-darken-20-lab" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-violet-600 text-darken-20/lab"><span>util</span></div>
</div>

## Saturation

<div class="grid grid-cols-3 gap-2 my-2">
  <div data-test="alias-saturate-30" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-[--jib-saturate(var(--color-violet-600),30)]"><span>alias saturate-30</span></div>
  <div data-test="prim-saturate-30" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-[--jib-saturation(var(--color-violet-600),30)]"><span>prim</span></div>
  <div data-test="util-saturate-30" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-violet-600 text-saturate-30"><span>util</span></div>
</div>

<div class="grid grid-cols-3 gap-2 my-2">
  <div data-test="alias-desaturate-30" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-[--jib-desaturate(var(--color-violet-600),30)]"><span>alias desaturate-30</span></div>
  <div data-test="prim-desaturate-30" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-[--jib-saturation(var(--color-violet-600),-30)]"><span>prim</span></div>
  <div data-test="util-desaturate-30" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-violet-600 text-desaturate-30"><span>util</span></div>
</div>

<div class="grid grid-cols-3 gap-2 my-2">
  <div data-test="alias-desaturate-30-lab" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-[--jib-desaturate(var(--color-violet-600),30,lab)]"><span>alias desaturate-30-lab</span></div>
  <div data-test="prim-desaturate-30-lab" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-[--jib-saturation(var(--color-violet-600),-30,lab)]"><span>prim</span></div>
  <div data-test="util-desaturate-30-lab" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-violet-600 text-desaturate-30/lab"><span>util</span></div>
</div>

## Negative amounts

No utility spells these: a negative amount inverts the direction, which is what lets one custom property animate through zero. Alias against primitive only.

<div class="grid grid-cols-2 gap-2 my-2">
  <div data-test="alias-darken-neg20" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-[--jib-darken(var(--color-violet-600),-20)]"><span>alias darken-neg20</span></div>
  <div data-test="prim-darken-neg20" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-[--jib-lightness(var(--color-violet-600),20)]"><span>prim</span></div>
</div>

<div class="grid grid-cols-2 gap-2 my-2">
  <div data-test="alias-lighten-neg20" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-[--jib-lighten(var(--color-violet-600),-20)]"><span>alias lighten-neg20</span></div>
  <div data-test="prim-lighten-neg20" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-[--jib-lightness(var(--color-violet-600),-20)]"><span>prim</span></div>
</div>

<div class="grid grid-cols-2 gap-2 my-2">
  <div data-test="alias-desaturate-neg30" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-[--jib-desaturate(var(--color-violet-600),-30)]"><span>alias desaturate-neg30</span></div>
  <div data-test="prim-desaturate-neg30" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-[--jib-saturation(var(--color-violet-600),30)]"><span>prim</span></div>
</div>

<div class="grid grid-cols-2 gap-2 my-2">
  <div data-test="alias-saturate-neg30" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-[--jib-saturate(var(--color-violet-600),-30)]"><span>alias saturate-neg30</span></div>
  <div data-test="prim-saturate-neg30" class="h-20 rounded-lg flex items-center justify-center bg-gray-100 text-[--jib-saturation(var(--color-violet-600),-30)]"><span>prim</span></div>
</div>
