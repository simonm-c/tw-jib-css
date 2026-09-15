---
title: WCAG rating
---

<!-- llm-context: --jib-wcag-rating(<bg>, <fg>) returns the WCAG 2.x rating of a color pair as a <string>: "AAA", "AA", "AA Large" or "Fail". It is the only function in the package that returns a string rather than a color, which makes content: the property it is built for, and it has no utility form because a class cannot produce a string. The thresholds carry a small epsilon so a pair landing exactly on a boundary resolves in favour of passing, which matters because auto-contrast produces exact ties by design. The packaged form is the wcag-badge utility, which uses this function to print a rating over any element. Chromium only, because if(style()) is the only way CSS can turn a color into a string. -->

# WCAG rating

`--jib-wcag-rating()` takes two colors and returns their WCAG 2.x rating as a string: `"AAA"`, `"AA"`, `"AA Large"` or `"Fail"`.

It is the odd one out in this package. Every other function returns a color; this one returns a **string**, which means `content` is the property it exists for, and it means there can be no utility form. A class can set a color. A class cannot compute a word.

::: tip Chromium only
This one is Chromium-only for a deeper reason than the rest. Turning a color into a string needs `if(style())`, and no other engine has it. There is no stable fallback to drop back to, so unlike the color transforms this capability is genuinely absent elsewhere rather than merely differently implemented.

Its partner [`text-contrast-*`](https://simonm-c.github.io/tw-jib-css/guide/automatic-contrast) is stable and works everywhere. An element carrying both gets an accessible color in every browser and a printed rating only in Chromium.
:::

## Quick reference

| Call                            | Returns                                                 |
| ------------------------------- | ------------------------------------------------------- |
| `--jib-wcag-rating(<bg>, <fg>)` | `"AAA"`, `"AA"`, `"AA Large"` or `"Fail"` for that pair |

Argument order does not change the answer. Contrast is symmetric, and the function tests the pair rather than assuming which one is the text.

## Printing a rating

The natural home is a pseudo-element, where the string becomes visible content.

<Example stretch>
  <div class="grid grid-cols-2 gap-3 p-6">
    <div class="relative rounded-lg bg-teal-500 p-6 text-center [color:--jib-auto-contrast(var(--color-teal-500),aaa)] after:absolute after:right-2 after:top-2 after:rounded after:bg-black/70 after:px-1.5 after:py-0.5 after:font-mono after:text-[10px] after:font-bold after:text-white after:content-[--jib-wcag-rating(var(--color-teal-500),--jib-auto-contrast(var(--color-teal-500),aaa))]">
      <span class="font-bold">solved for aaa</span>
    </div>
    <div class="relative rounded-lg bg-teal-500 p-6 text-center text-white after:absolute after:right-2 after:top-2 after:rounded after:bg-black/70 after:px-1.5 after:py-0.5 after:font-mono after:text-[10px] after:font-bold after:text-white after:content-[--jib-wcag-rating(var(--color-teal-500),white)]">
      <span class="font-bold">plain white</span>
    </div>
  </div>
</Example>

```html
<div
  class="bg-teal-500 text-white
         after:content-[--jib-wcag-rating(var(--color-teal-500),white)]"
>
  plain white
</div>
```

The two tiles carry the same background. The left one takes its text color from [`--jib-auto-contrast()`](/guide/automatic-contrast) and the badge confirms the level it asked for; the right one uses plain white and the badge reports what that actually scores. Nothing is hard-coded in either label.

## Grading a set of pairs

Because the rating is computed rather than written down, a grid like this stays honest when the colors change.

<Example stretch>
  <div class="grid grid-cols-4 gap-3 p-6">
    <div class="relative rounded-lg bg-teal-950 p-5 text-center text-white after:absolute after:bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:font-mono after:text-[10px] after:font-bold after:opacity-80 after:content-[--jib-wcag-rating(var(--color-teal-950),white)]"><span class="font-mono text-[11px]">teal-950</span></div>
    <div class="relative rounded-lg bg-teal-700 p-5 text-center text-white after:absolute after:bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:font-mono after:text-[10px] after:font-bold after:opacity-80 after:content-[--jib-wcag-rating(var(--color-teal-700),white)]"><span class="font-mono text-[11px]">teal-700</span></div>
    <div class="relative rounded-lg bg-teal-500 p-5 text-center text-white after:absolute after:bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:font-mono after:text-[10px] after:font-bold after:opacity-80 after:content-[--jib-wcag-rating(var(--color-teal-500),white)]"><span class="font-mono text-[11px]">teal-500</span></div>
    <div class="relative rounded-lg bg-teal-300 p-5 text-center text-white after:absolute after:bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:font-mono after:text-[10px] after:font-bold after:opacity-80 after:content-[--jib-wcag-rating(var(--color-teal-300),white)]"><span class="font-mono text-[11px]">teal-300</span></div>
  </div>
</Example>

White text over the teal ramp, each tile reporting its own score. The pass boundary is somewhere in the middle of the ramp and the labels find it without being told where it is.

## Where the boundary sits

WCAG asks for a ratio of _at least_ the threshold, so a pair landing exactly on 4.5:1 is AA. A bare step function would return `"Fail"` at exactly zero margin, so the thresholds carry a small epsilon, about 5 × 10⁻⁴ in ratio terms, and an exact tie resolves in favour of passing.

That tolerance is not cosmetic. [`--jib-auto-contrast()`](/guide/automatic-contrast) hits its ratio _exactly_, which produces ties by design. Without the epsilon this function would contradict the solve sitting next to it on the same element.

## The packaged form

Wiring `content` onto a pseudo-element by hand is fine once. For the common case of "put a live rating on this element", the [`wcag-badge`](/wcag-badge) utility does it for you: it reads the element's own background and text color, calls this function, and positions the result.

Reach for the raw function when you want the string somewhere a badge does not go, or when you want to grade a pair neither of which is on the element.

## Import

`--jib-wcag-rating()` ships in the `functions` module. The badge utility is a separate module and can be taken on its own.

```css
@import 'tw-jib-css';
@import 'tw-jib-css-experimental/functions';
```

<BaselineSupport :features="['function', 'if']" />
