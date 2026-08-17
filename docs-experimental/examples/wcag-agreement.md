---
title: WCAG agreement fixture
---

<!-- llm-context: verification fixture comparing the two text-a11y-* implementations on the same page. util = whatever the cascade picks, fn = --tw-jib--accessible-shade() called directly, stable = a child reading --tw-jib--a11y--shade. Lives in the experimental docs instance because the fn cells need CSS @function, which only the experimental package supplies; the instance imports both packages so all three readouts are available together. -->

# WCAG agreement fixture

Both implementations of `text-a11y-*` rendered side by side, so a drift between them shows up as a colour difference rather than a silent divergence.

This fixture lives in the experimental instance because the `fn` readout calls `--tw-jib--accessible-shade()` directly, which needs the `@function` entry. That entry also overrides the utility, so `util` here is the `@function` path – the `stable` cells read `--tw-jib--a11y--shade`, which the utility computes on every engine regardless of which path wins `color:`.

`text-a11y-*` has two implementations – the `@function` dispatcher, preferred wherever
CSS `@function` exists, and the nested relative-colour chain that engines without it
fall back to. They must produce the same colour, or which engine you are on becomes
visible. Three readouts per case:

- **util** – whatever the cascade picks: `@function` on Chromium, the chain elsewhere.
- **fn** – `--tw-jib--accessible-shade()` called directly. Renders nothing without `@function`.
- **stable** – a child reading `--tw-jib--a11y--shade`, the chain's own result, which the
  utility computes on every engine even where the `@function` override wins the `color:`.

So on Chromium all three are the comparison that matters: **fn** and **stable** are the two
paths side by side. Targeted by the Playwright integration suite.

### #7c3aed

<div class="grid grid-cols-5 gap-2 my-2">
  <div data-test="agree-util-violet-aa-oklch" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#7c3aed] text-a11y-aa/oklch"><span>util</span><span>aa/oklch</span></div>
  <div data-test="agree-util-violet-aa-srgb" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#7c3aed] text-a11y-aa/srgb"><span>util</span><span>aa/srgb</span></div>
  <div data-test="agree-util-violet-aa-hsl" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#7c3aed] text-a11y-aa/hsl"><span>util</span><span>aa/hsl</span></div>
  <div data-test="agree-util-violet-aaa-lch" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#7c3aed] text-a11y-aaa/lch"><span>util</span><span>aaa/lch</span></div>
  <div data-test="agree-util-violet-aa-hwb" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#7c3aed] text-a11y-aa/hwb"><span>util</span><span>aa/hwb</span></div>
</div>
<div class="grid grid-cols-5 gap-2 my-2">
  <div data-test="agree-fn-violet-aa-oklch" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#7c3aed] text-[--tw-jib--accessible-shade(#7c3aed,aa,oklch)]"><span>fn</span><span>aa/oklch</span></div>
  <div data-test="agree-fn-violet-aa-srgb" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#7c3aed] text-[--tw-jib--accessible-shade(#7c3aed,aa,srgb)]"><span>fn</span><span>aa/srgb</span></div>
  <div data-test="agree-fn-violet-aa-hsl" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#7c3aed] text-[--tw-jib--accessible-shade(#7c3aed,aa,hsl)]"><span>fn</span><span>aa/hsl</span></div>
  <div data-test="agree-fn-violet-aaa-lch" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#7c3aed] text-[--tw-jib--accessible-shade(#7c3aed,aaa,lch)]"><span>fn</span><span>aaa/lch</span></div>
  <div data-test="agree-fn-violet-aa-hwb" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#7c3aed] text-[--tw-jib--accessible-shade(#7c3aed,aa,hwb)]"><span>fn</span><span>aa/hwb</span></div>
</div>
<div class="grid grid-cols-5 gap-2 my-2">
  <div class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#7c3aed] text-a11y-aa/oklch"><span data-test="agree-stable-violet-aa-oklch" class="text-(color:--tw-jib--a11y--shade)">stable</span><span>aa/oklch</span></div>
  <div class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#7c3aed] text-a11y-aa/srgb"><span data-test="agree-stable-violet-aa-srgb" class="text-(color:--tw-jib--a11y--shade)">stable</span><span>aa/srgb</span></div>
  <div class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#7c3aed] text-a11y-aa/hsl"><span data-test="agree-stable-violet-aa-hsl" class="text-(color:--tw-jib--a11y--shade)">stable</span><span>aa/hsl</span></div>
  <div class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#7c3aed] text-a11y-aaa/lch"><span data-test="agree-stable-violet-aaa-lch" class="text-(color:--tw-jib--a11y--shade)">stable</span><span>aaa/lch</span></div>
  <div class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#7c3aed] text-a11y-aa/hwb"><span data-test="agree-stable-violet-aa-hwb" class="text-(color:--tw-jib--a11y--shade)">stable</span><span>aa/hwb</span></div>
</div>

### #d4d4d4

<div class="grid grid-cols-5 gap-2 my-2">
  <div data-test="agree-util-grey-aa-oklch" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#d4d4d4] text-a11y-aa/oklch"><span>util</span><span>aa/oklch</span></div>
  <div data-test="agree-util-grey-aa-srgb" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#d4d4d4] text-a11y-aa/srgb"><span>util</span><span>aa/srgb</span></div>
  <div data-test="agree-util-grey-aa-hsl" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#d4d4d4] text-a11y-aa/hsl"><span>util</span><span>aa/hsl</span></div>
  <div data-test="agree-util-grey-aaa-lch" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#d4d4d4] text-a11y-aaa/lch"><span>util</span><span>aaa/lch</span></div>
  <div data-test="agree-util-grey-aa-hwb" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#d4d4d4] text-a11y-aa/hwb"><span>util</span><span>aa/hwb</span></div>
</div>
<div class="grid grid-cols-5 gap-2 my-2">
  <div data-test="agree-fn-grey-aa-oklch" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#d4d4d4] text-[--tw-jib--accessible-shade(#d4d4d4,aa,oklch)]"><span>fn</span><span>aa/oklch</span></div>
  <div data-test="agree-fn-grey-aa-srgb" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#d4d4d4] text-[--tw-jib--accessible-shade(#d4d4d4,aa,srgb)]"><span>fn</span><span>aa/srgb</span></div>
  <div data-test="agree-fn-grey-aa-hsl" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#d4d4d4] text-[--tw-jib--accessible-shade(#d4d4d4,aa,hsl)]"><span>fn</span><span>aa/hsl</span></div>
  <div data-test="agree-fn-grey-aaa-lch" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#d4d4d4] text-[--tw-jib--accessible-shade(#d4d4d4,aaa,lch)]"><span>fn</span><span>aaa/lch</span></div>
  <div data-test="agree-fn-grey-aa-hwb" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#d4d4d4] text-[--tw-jib--accessible-shade(#d4d4d4,aa,hwb)]"><span>fn</span><span>aa/hwb</span></div>
</div>
<div class="grid grid-cols-5 gap-2 my-2">
  <div class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#d4d4d4] text-a11y-aa/oklch"><span data-test="agree-stable-grey-aa-oklch" class="text-(color:--tw-jib--a11y--shade)">stable</span><span>aa/oklch</span></div>
  <div class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#d4d4d4] text-a11y-aa/srgb"><span data-test="agree-stable-grey-aa-srgb" class="text-(color:--tw-jib--a11y--shade)">stable</span><span>aa/srgb</span></div>
  <div class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#d4d4d4] text-a11y-aa/hsl"><span data-test="agree-stable-grey-aa-hsl" class="text-(color:--tw-jib--a11y--shade)">stable</span><span>aa/hsl</span></div>
  <div class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#d4d4d4] text-a11y-aaa/lch"><span data-test="agree-stable-grey-aaa-lch" class="text-(color:--tw-jib--a11y--shade)">stable</span><span>aaa/lch</span></div>
  <div class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#d4d4d4] text-a11y-aa/hwb"><span data-test="agree-stable-grey-aa-hwb" class="text-(color:--tw-jib--a11y--shade)">stable</span><span>aa/hwb</span></div>
</div>

### #164e63

<div class="grid grid-cols-5 gap-2 my-2">
  <div data-test="agree-util-teal-aa-oklch" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#164e63] text-a11y-aa/oklch"><span>util</span><span>aa/oklch</span></div>
  <div data-test="agree-util-teal-aa-srgb" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#164e63] text-a11y-aa/srgb"><span>util</span><span>aa/srgb</span></div>
  <div data-test="agree-util-teal-aa-hsl" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#164e63] text-a11y-aa/hsl"><span>util</span><span>aa/hsl</span></div>
  <div data-test="agree-util-teal-aaa-lch" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#164e63] text-a11y-aaa/lch"><span>util</span><span>aaa/lch</span></div>
  <div data-test="agree-util-teal-aa-hwb" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#164e63] text-a11y-aa/hwb"><span>util</span><span>aa/hwb</span></div>
</div>
<div class="grid grid-cols-5 gap-2 my-2">
  <div data-test="agree-fn-teal-aa-oklch" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#164e63] text-[--tw-jib--accessible-shade(#164e63,aa,oklch)]"><span>fn</span><span>aa/oklch</span></div>
  <div data-test="agree-fn-teal-aa-srgb" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#164e63] text-[--tw-jib--accessible-shade(#164e63,aa,srgb)]"><span>fn</span><span>aa/srgb</span></div>
  <div data-test="agree-fn-teal-aa-hsl" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#164e63] text-[--tw-jib--accessible-shade(#164e63,aa,hsl)]"><span>fn</span><span>aa/hsl</span></div>
  <div data-test="agree-fn-teal-aaa-lch" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#164e63] text-[--tw-jib--accessible-shade(#164e63,aaa,lch)]"><span>fn</span><span>aaa/lch</span></div>
  <div data-test="agree-fn-teal-aa-hwb" class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#164e63] text-[--tw-jib--accessible-shade(#164e63,aa,hwb)]"><span>fn</span><span>aa/hwb</span></div>
</div>
<div class="grid grid-cols-5 gap-2 my-2">
  <div class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#164e63] text-a11y-aa/oklch"><span data-test="agree-stable-teal-aa-oklch" class="text-(color:--tw-jib--a11y--shade)">stable</span><span>aa/oklch</span></div>
  <div class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#164e63] text-a11y-aa/srgb"><span data-test="agree-stable-teal-aa-srgb" class="text-(color:--tw-jib--a11y--shade)">stable</span><span>aa/srgb</span></div>
  <div class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#164e63] text-a11y-aa/hsl"><span data-test="agree-stable-teal-aa-hsl" class="text-(color:--tw-jib--a11y--shade)">stable</span><span>aa/hsl</span></div>
  <div class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#164e63] text-a11y-aaa/lch"><span data-test="agree-stable-teal-aaa-lch" class="text-(color:--tw-jib--a11y--shade)">stable</span><span>aaa/lch</span></div>
  <div class="h-16 rounded flex flex-col items-center justify-center text-[10px] font-mono font-bold bg-[#164e63] text-a11y-aa/hwb"><span data-test="agree-stable-teal-aa-hwb" class="text-(color:--tw-jib--a11y--shade)">stable</span><span>aa/hwb</span></div>
</div>
