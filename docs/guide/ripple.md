---
title: Ripple
---

<!-- llm-context: ripple module — Material-style ripple effect via CSS @property transitions, no JavaScript required. Uses reverse-transition technique so the ripple always completes its full duration, even on quick clicks. -->

# Ripple

Material-style ripple effect triggered on click — pure CSS, no JavaScript. Uses `@property` transitions to expand a radial gradient outward from the click point. The ripple always completes its full duration, even if the click is released early.

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/ripple';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'bg-ripple', styles: 'Enables ripple effect on :active via radial-gradient animation' },
  { class: 'ripple-color-<color>', styles: '--ripple-color: <color>' },
  { class: 'ripple-color-<color>/<opacity>', styles: '--ripple-color: color-mix(in oklch, <color> calc(<opacity> * 1%), transparent)' },
  { class: 'ripple-color-current', styles: '--ripple-color: currentColor' },
  { class: 'ripple-color-[<value>]', styles: '--ripple-color: <value>' },
  { class: 'ripple-duration-<number>', styles: '--ripple-duration: calc(<number> * 10ms)' },
  { class: 'ripple-duration-[<value>]', styles: '--ripple-duration: <value>' },
  { class: 'ripple-position-center', styles: '--ripple-position: center' },
  { class: 'ripple-position-top', styles: '--ripple-position: top' },
  { class: 'ripple-position-bottom', styles: '--ripple-position: bottom' },
  { class: 'ripple-position-left', styles: '--ripple-position: left' },
  { class: 'ripple-position-right', styles: '--ripple-position: right' },
  { class: 'ripple-position-[<value>]', styles: '--ripple-position: <value>' },
  { class: 'ripple-position-(position:--var)', styles: '--ripple-position: var(--var)' },
  { class: 'ripple-fade', styles: '--ripple-fade-amount: 100%' },
  { class: 'ripple-fade-none', styles: '--ripple-fade-amount: 0%' },
  { class: 'ripple-fade-<number>', styles: '--ripple-fade-amount: calc(<number> * 1%)' },
]" />

## Basic Usage

Add `bg-ripple` to any element to enable the ripple effect on click:

<Example>
  <button class="bg-ripple bg-blue-500 text-white px-8 py-4 rounded-lg font-medium cursor-pointer">
    Click me
  </button>
</Example>

## Ripple Colour

The default ripple is white at 20% opacity. Use `ripple-color-{color}` to customise:

<Example>
  <div class="flex gap-3">
    <div class="bg-ripple bg-blue-600 ripple-color-white text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">white</div>
    <div class="bg-ripple bg-blue-600 ripple-color-indigo-300 text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">indigo-300</div>
    <div class="bg-ripple bg-blue-600 ripple-color-amber-300 text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">amber-300</div>
    <div class="bg-ripple bg-white ripple-color-current text-blue-500 border border-gray-200 rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">current</div>
  </div>
</Example>

Use `ripple-color-current` to match the ripple to the element's text colour. This is useful for outlined or ghost buttons where the text colour defines the theme.

## Opacity

Opacity is applied using `color-mix(in oklch)`. See the [Colour Spaces guide](/guide/colour-spaces) to learn why oklch is used as the default mixing space.

Control ripple opacity with the slash modifier:

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

Control how long the ripple animation takes. The value is multiplied by `10ms`, so `ripple-duration-30` = 300ms. The default is `0.3s`.

<Example>
  <div class="flex gap-3">
    <div class="bg-ripple bg-blue-600 ripple-duration-20 text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">200ms</div>
    <div class="bg-ripple bg-blue-600 ripple-duration-40 text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">400ms</div>
    <div class="bg-ripple bg-blue-600 ripple-duration-80 text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">800ms</div>
    <div class="bg-ripple bg-blue-600 ripple-duration-[2s] text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">2s</div>
  </div>
</Example>

## Fade

Enable the ripple to fade out as it expands. By default there is no fade.

<Example>
  <div class="flex gap-3">
    <div class="bg-ripple bg-blue-600 ripple-color-amber-300 ripple-fade text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">fade</div>
    <div class="bg-ripple bg-blue-600 ripple-color-amber-300 ripple-fade-50 text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">fade-50</div>
    <div class="bg-ripple bg-blue-600 ripple-color-amber-300 ripple-fade-80 text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">fade-80</div>
    <div class="bg-ripple bg-blue-600 ripple-color-amber-300 ripple-fade-none text-white rounded-lg size-24 flex items-center justify-center text-xs cursor-pointer">fade-none</div>
  </div>
</Example>

## Using a custom value

Use the `ripple-color-[<value>]` syntax to set ripple properties based on a completely custom value:

<Example>
  <button class="bg-ripple ripple-color-[#bada55] ripple-duration-[350ms] ripple-position-[30%_70%] bg-gray-800 text-white px-8 py-4 rounded-lg font-medium cursor-pointer">
    Custom everything
  </button>
</Example>

## Using a custom variable

For CSS variables, use the typed bare-value syntax `ripple-color-(color:--var)`. The `color` type hint tells Tailwind to interpret the variable as a colour:

<Example>
  <div class="flex gap-3">
    <button class="bg-ripple ripple-color-(color:--theme-ripple) bg-gray-800 text-white px-8 py-4 rounded-lg font-medium cursor-pointer" style="--theme-ripple: #bada55">
      ripple-color-(color:--theme-ripple)
    </button>
    <button class="bg-ripple ripple-color-(color:--theme-ripple) bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-lg font-medium cursor-pointer" style="--theme-ripple: #6366f1">
      ripple-color-(color:--theme-ripple)
    </button>
  </div>
</Example>

The same pattern works for all ripple properties. For position, use the `position` type hint:

```html
<div class="bg-ripple ripple-position-(position:--ripple-pos)" style="--ripple-pos: 25% 75%">
```

### Cursor-tracking ripple

By default, `ripple-position` is a fixed value — the ripple always starts from the same point. To make the ripple originate from where the user actually clicks, bind `ripple-position` to a CSS variable and update it with JavaScript on each `mousedown`:

<Example>
  <button
    class="bg-ripple ripple-position-(position:--ripple-pos) ripple-color-amber-300 bg-blue-600 text-white px-12 py-6 rounded-lg font-medium cursor-pointer"
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

The JavaScript is minimal — convert the cursor position to a percentage and write it to `--ripple-pos` on each `mousedown`:

::: code-group

```js [JavaScript]
// HTML: <button class="ripple-btn bg-ripple ripple-position-(position:--ripple-pos)">Click me</button>

const button = document.querySelector('.ripple-btn');

button.addEventListener('mousedown', (e) => {
  const rect = button.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
  const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
  button.style.setProperty('--ripple-pos', `${x}% ${y}%`);
});
```

```ts [TypeScript]
// HTML: <button class="ripple-btn bg-ripple ripple-position-(position:--ripple-pos)">Click me</button>

const button = document.querySelector<HTMLButtonElement>('.ripple-btn')!;

button.addEventListener('mousedown', (e: MouseEvent) => {
  const rect = button.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
  const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
  button.style.setProperty('--ripple-pos', `${x}% ${y}%`);
});
```

```jsx [React]
function RippleButton() {
  function handleMouseDown(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
    const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
    e.currentTarget.style.setProperty('--ripple-pos', `${x}% ${y}%`);
  }

  return (
    <button
      className="bg-ripple ripple-position-(position:--ripple-pos)"
      onMouseDown={handleMouseDown}
    >
      Click me
    </button>
  );
}
```

```vue [Vue]
<template>
  <button
    ref="buttonRef"
    class="bg-ripple ripple-position-(position:--ripple-pos)"
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
  const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
  const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
  buttonRef.value.style.setProperty('--ripple-pos', `${x}% ${y}%`);
}
</script>
```

:::

::: tip Why not just set `--tw-jib--ripple-position` directly?
You could — but using a custom variable via `ripple-position-(position:--ripple-pos)` keeps the contract explicit. Tailwind sees the utility in your markup and includes the ripple-position rule in the output. Setting the internal variable directly works at runtime, but the utility won't appear in your compiled CSS unless something else references it.
:::

## Applying conditionally

