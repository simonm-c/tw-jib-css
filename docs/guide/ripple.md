---
title: Ripple
---

<!-- llm-context: Material-style press ripple built from a radial gradient and @property transitions, with no JavaScript. A reverse-transition technique keeps the ripple running its full duration even on a quick click. -->

# Ripple

Material-style ripple effect on click. Pure CSS, no JavaScript. The ripple always runs its full duration, even if you let go early.

::: info Browser support
Two features set the floor: `@property`, which carries the animated transitions, and `color-mix()`, which builds the ripple color itself. `@property` landed first in every engine, but without `color-mix()` the ripple color is invalid and nothing paints, so `color-mix()` is the one that matters. No relative color syntax is involved. Live status for both is at the foot of this page.
:::

## Quick reference

<UtilityTable :rows="[
  { class: 'bg-ripple', styles: 'Enables ripple effect on :active via radial-gradient animation' },
  { class: 'ripple-color-<color>', styles: '--jib-ripple-color: <color>' },
  { class: 'ripple-color-<color>/<opacity>', styles: '--jib-ripple-color: <color> at <opacity>%' },
  { class: 'ripple-color-<color>/[<percentage>]', styles: '--jib-ripple-color: <color> at that percentage' },
  { class: 'ripple-color-<color>/[<number>]', styles: '--jib-ripple-color: <color> at <number> × 100%' },
  { class: 'ripple-color-current', styles: '--jib-ripple-color: currentColor' },
  { class: 'ripple-color-[<value>]', styles: '--jib-ripple-color: <value>' },
  { class: 'ripple-color-(--var)', styles: '--jib-ripple-color: var(--var)' },
  { class: 'ripple-duration-<number>', styles: '--jib-ripple-duration: calc(<number> * 10ms)' },
  { class: 'ripple-duration-[<value>]', styles: '--jib-ripple-duration: <value>' },
  { class: 'ripple-position-center', styles: '--jib-ripple-position: center' },
  { class: 'ripple-position-top', styles: '--jib-ripple-position: top' },
  { class: 'ripple-position-bottom', styles: '--jib-ripple-position: bottom' },
  { class: 'ripple-position-left', styles: '--jib-ripple-position: left' },
  { class: 'ripple-position-right', styles: '--jib-ripple-position: right' },
  { class: 'ripple-position-[<value>]', styles: '--jib-ripple-position: <value>' },
  { class: 'ripple-position-(--var)', styles: '--jib-ripple-position: var(--var)' },
  { class: 'ripple-fade', styles: '--jib-ripple-fade-amount: 100%' },
  { class: 'ripple-fade-none', styles: '--jib-ripple-fade-amount: 0%' },
  { class: 'ripple-fade-<number>', styles: '--jib-ripple-fade-amount: calc(<number> * 1%)' },
]" />

## Basic usage

Add `bg-ripple` to any element to enable the ripple effect on click:

<Example>
  <button class="bg-ripple bg-blue-500 text-white px-8 py-4 rounded-lg font-medium cursor-pointer">
    Click me
  </button>
</Example>

## Ripple color

The default ripple is white at 20% opacity. Use `ripple-color-<color>` to customise:

<Example>
  <div class="flex gap-3">
    <div class="bg-ripple bg-blue-600 ripple-color-white text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">white</div>
    <div class="bg-ripple bg-blue-600 ripple-color-indigo-300 text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">indigo-300</div>
    <div class="bg-ripple bg-blue-600 ripple-color-amber-300 text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">amber-300</div>
    <div class="bg-ripple bg-white ripple-color-current text-blue-500 border border-gray-200 rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">current</div>
  </div>
</Example>

Use `ripple-color-current` to match the ripple to the element's text color. Handy on outlined or ghost buttons, where the text color is the theme.

## Opacity

Control ripple opacity with the slash modifier. It takes the same three spellings Tailwind's own opacity modifiers do — a bare number is a percentage, a bracketed percentage passes through, and a bracketed number is a 0–1 alpha:

```html
<div class="bg-ripple ripple-color-red-500/50"></div>
<div class="bg-ripple ripple-color-red-500/[50%]"></div>
<div class="bg-ripple ripple-color-red-500/[0.5]"></div>
```

<Example>
  <div class="flex gap-2">
    <div class="bg-ripple bg-blue-600 ripple-color-red-500/90 text-white rounded-lg size-20 flex items-center justify-center text-xs cursor-pointer">/90</div>
    <div class="bg-ripple bg-blue-600 ripple-color-red-500/70 text-white rounded-lg size-20 flex items-center justify-center text-xs cursor-pointer">/70</div>
    <div class="bg-ripple bg-blue-600 ripple-color-red-500/50 text-white rounded-lg size-20 flex items-center justify-center text-xs cursor-pointer">/50</div>
    <div class="bg-ripple bg-blue-600 ripple-color-red-500/30 text-white rounded-lg size-20 flex items-center justify-center text-xs cursor-pointer">/30</div>
    <div class="bg-ripple bg-blue-600 ripple-color-red-500/10 text-white rounded-lg size-20 flex items-center justify-center text-xs cursor-pointer">/10</div>
  </div>
</Example>

## Position

Set where the ripple originates. The default is `center`.

<Example>
  <div class="flex gap-3">
    <div class="bg-ripple bg-blue-600 ripple-position-center text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">center</div>
    <div class="bg-ripple bg-blue-600 ripple-position-top text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">top</div>
    <div class="bg-ripple bg-blue-600 ripple-position-bottom text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">bottom</div>
    <div class="bg-ripple bg-blue-600 ripple-position-left text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">left</div>
    <div class="bg-ripple bg-blue-600 ripple-position-right text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">right</div>
  </div>
</Example>

Use arbitrary values to set a precise origin point with `ripple-position-[<x>_<y>]`:

<Example>
  <div class="flex gap-3">
    <div class="bg-ripple bg-blue-600 ripple-position-[12px_8px] text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">12px 8px</div>
    <div class="bg-ripple bg-blue-600 ripple-position-[73%_15%] text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">73% 15%</div>
    <div class="bg-ripple bg-blue-600 ripple-position-[4px_85%] text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">4px 85%</div>
  </div>
</Example>

## Duration

Control how long the animation runs. The value multiplies `10ms`, so `ripple-duration-30` is 300ms. The default is `0.3s`.

<Example>
  <div class="flex gap-3">
    <div class="bg-ripple bg-blue-600 ripple-duration-20 text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">200ms</div>
    <div class="bg-ripple bg-blue-600 ripple-duration-40 text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">400ms</div>
    <div class="bg-ripple bg-blue-600 ripple-duration-80 text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">800ms</div>
    <div class="bg-ripple bg-blue-600 ripple-duration-[2s] text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">2s</div>
  </div>
</Example>

## Fade

Fade the ripple out as it expands. Off by default.

<Example>
  <div class="flex gap-3">
    <div class="bg-ripple bg-blue-600 ripple-color-amber-300 ripple-fade text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">fade</div>
    <div class="bg-ripple bg-blue-600 ripple-color-amber-300 ripple-fade-50 text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">fade-50</div>
    <div class="bg-ripple bg-blue-600 ripple-color-amber-300 ripple-fade-80 text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">fade-80</div>
    <div class="bg-ripple bg-blue-600 ripple-color-amber-300 ripple-fade-none text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">fade-none</div>
  </div>
</Example>

## Using a custom value

Use the `ripple-color-[<value>]` syntax to pass a value the palette doesn't have:

<Example>
  <button class="bg-ripple ripple-color-[#bada55] ripple-duration-[350ms] ripple-position-[30%_70%] bg-gray-800 text-white px-8 py-4 rounded-lg font-medium cursor-pointer">
    Custom everything
  </button>
</Example>

## Using a custom variable

Reference a CSS variable with `(--var)`. Every ripple utility takes one kind of value, so none of them needs a type hint:

<Example>
  <div class="flex gap-3">
    <button class="bg-ripple ripple-color-(--theme-ripple) bg-gray-800 text-white px-8 py-4 rounded-lg font-medium cursor-pointer [--theme-ripple:#bada55]">
      ripple-color-(--theme-ripple)
    </button>
    <button class="bg-ripple ripple-color-(--theme-ripple) bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-lg font-medium cursor-pointer [--theme-ripple:#6366f1]">
      ripple-color-(--theme-ripple)
    </button>
  </div>
</Example>

The same applies to position, duration and fade:

```html
<div class="bg-ripple ripple-position-(--ripple-pos) [--ripple-pos:25%_75%]"></div>
```

A type hint is still accepted — `ripple-color-(color:--var)` works — and is needed on utilities whose namespace takes more than one kind of value, such as `bg-*` and the gradient stops. See [Colors from CSS variables need a type hint](/guide/composition#colors-from-css-variables-need-a-type-hint).

### Cursor-tracking ripple

By default, `ripple-position` is a fixed value, so the ripple always starts from the same point. To start it wherever the user clicks, bind `ripple-position` to a CSS variable and update it with JavaScript on each `mousedown`:

<Example>
  <button
    class="bg-ripple ripple-position-(--ripple-pos) ripple-color-amber-300 bg-blue-600 text-white px-12 py-6 rounded-lg font-medium cursor-pointer"
    @mousedown="(e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
      const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
      e.currentTarget.style.setProperty('--ripple-pos', `${x}% ${y}%`);
    }"
  >
    Click anywhere on this button
  </button>
</Example>

The JavaScript is small. Convert the cursor position to a percentage and write it to `--ripple-pos` on each `mousedown`:

::: code-group

```js [JavaScript]
// HTML: <button class="ripple-btn bg-ripple ripple-position-(--ripple-pos)">Click me</button>

const button = document.querySelector('.ripple-btn');

button.addEventListener('mousedown', (e) => {
  const rect = button.getBoundingClientRect();
  const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1);
  const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1);
  button.style.setProperty('--ripple-pos', `${x}% ${y}%`);
});
```

```ts [TypeScript]
// HTML: <button class="ripple-btn bg-ripple ripple-position-(--ripple-pos)">Click me</button>

const button = document.querySelector<HTMLButtonElement>('.ripple-btn')!;

button.addEventListener('mousedown', (e: MouseEvent) => {
  const rect = button.getBoundingClientRect();
  const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1);
  const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1);
  button.style.setProperty('--ripple-pos', `${x}% ${y}%`);
});
```

```jsx [React]
function RippleButton() {
  function handleMouseDown(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1);
    const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1);
    e.currentTarget.style.setProperty('--ripple-pos', `${x}% ${y}%`);
  }

  return (
    <button className="bg-ripple ripple-position-(--ripple-pos)" onMouseDown={handleMouseDown}>
      Click me
    </button>
  );
}
```

```vue [Vue]
<template>
  <button
    ref="buttonRef"
    class="bg-ripple ripple-position-(--ripple-pos)"
    @mousedown="handleMouseDown"
  >
    Click me
  </button>
</template>

<script setup>
import { useTemplateRef } from 'vue';

const buttonRef = useTemplateRef('buttonRef');

function handleMouseDown(e) {
  const rect = buttonRef.value.getBoundingClientRect();
  const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1);
  const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1);
  buttonRef.value.style.setProperty('--ripple-pos', `${x}% ${y}%`);
}
</script>
```

:::

::: tip Why not just set `--jib-ripple-position` directly?
You could, but a custom variable via `ripple-position-(--ripple-pos)` keeps the contract explicit. Tailwind sees the utility in your markup and emits the ripple-position rule. Setting the internal variable directly works at runtime, but the utility won't appear in your compiled CSS unless something else references it.
:::

## Applying conditionally

## Import

Included in `@import 'tw-jib-css'`. To import individually:

```css
@import 'tw-jib-css/ripple';
```

<BaselineSupport :features="['registered-custom-properties', 'color-mix']" />
