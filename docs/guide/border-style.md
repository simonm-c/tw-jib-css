---
title: Border Style
---

<!-- llm-context: border-style module — per-side border styles (groove, ridge, inset, outset, etc.) that TailwindCSS v4 doesn't expose natively. Physical, axis, and logical side variants. -->

# Border Style

Set border styles on individual sides. TailwindCSS v4 provides `border-solid`, `border-dashed`, etc. for all four sides at once, but doesn't expose per-side control — this module fills that gap.

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:
```css
@import 'tw-jib-css/border-style';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'border-t-solid', styles: 'border-top-style: solid' },
  { class: 'border-t-dashed', styles: 'border-top-style: dashed' },
  { class: 'border-t-dotted', styles: 'border-top-style: dotted' },
  { class: 'border-t-double', styles: 'border-top-style: double' },
  { class: 'border-t-groove', styles: 'border-top-style: groove' },
  { class: 'border-t-ridge', styles: 'border-top-style: ridge' },
  { class: 'border-t-inset', styles: 'border-top-style: inset' },
  { class: 'border-t-outset', styles: 'border-top-style: outset' },
  { class: 'border-t-none', styles: 'border-top-style: none' },
  { class: 'border-t-hidden', styles: 'border-top-style: hidden' },
  { class: 'border-r-<style>', styles: 'border-right-style: <style>' },
  { class: 'border-b-<style>', styles: 'border-bottom-style: <style>' },
  { class: 'border-l-<style>', styles: 'border-left-style: <style>' },
  { class: 'border-x-<style>', styles: 'border-inline-style: <style>' },
  { class: 'border-y-<style>', styles: 'border-block-style: <style>' },
  { class: 'border-s-<style>', styles: 'border-inline-start-style: <style>' },
  { class: 'border-e-<style>', styles: 'border-inline-end-style: <style>' },
]" />

## Basic Usage

Apply different border styles to individual sides:

<Example>
  <div class="flex gap-4">
    <div class="border-4 border-gray-400 border-t-dashed p-6 bg-white text-center text-sm text-gray-600">border-t-dashed</div>
    <div class="border-4 border-gray-400 border-b-dotted p-6 bg-white text-center text-sm text-gray-600">border-b-dotted</div>
    <div class="border-4 border-gray-400 border-l-double p-6 bg-white text-center text-sm text-gray-600">border-l-double</div>
  </div>
</Example>

### Mixed styles

Combine multiple per-side styles for decorative effects:

<Example>
  <div class="border-4 border-gray-400 border-t-dotted border-r-double border-b-dashed border-l-groove p-8 bg-white text-center text-sm text-gray-600 max-w-xs mx-auto">
    Different style on each side
  </div>
</Example>

## Available Styles

<Example>
  <div class="grid grid-cols-2 gap-3 w-full max-w-lg">
    <div class="border-4 border-gray-400 border-t-solid p-4 bg-white text-center text-xs text-gray-600">solid</div>
    <div class="border-4 border-gray-400 border-t-dashed p-4 bg-white text-center text-xs text-gray-600">dashed</div>
    <div class="border-4 border-gray-400 border-t-dotted p-4 bg-white text-center text-xs text-gray-600">dotted</div>
    <div class="border-4 border-gray-400 border-t-double p-4 bg-white text-center text-xs text-gray-600">double</div>
    <div class="border-4 border-gray-400 border-t-groove p-4 bg-white text-center text-xs text-gray-600">groove</div>
    <div class="border-4 border-gray-400 border-t-ridge p-4 bg-white text-center text-xs text-gray-600">ridge</div>
    <div class="border-4 border-gray-400 border-t-inset p-4 bg-white text-center text-xs text-gray-600">inset</div>
    <div class="border-4 border-gray-400 border-t-outset p-4 bg-white text-center text-xs text-gray-600">outset</div>
  </div>
</Example>

## Side Variants

| Prefix | Sides | CSS Property |
| --- | --- | --- |
| `t` | Top | `border-top-style` |
| `r` | Right | `border-right-style` |
| `b` | Bottom | `border-bottom-style` |
| `l` | Left | `border-left-style` |
| `x` | Left + Right | `border-inline-style` |
| `y` | Top + Bottom | `border-block-style` |
| `s` | Inline start | `border-inline-start-style` |
| `e` | Inline end | `border-inline-end-style` |

### Axis variants

<Example>
  <div class="flex gap-4">
    <div class="border-4 border-gray-400 border-x-dashed p-6 bg-white text-center text-xs text-gray-600">border-x-dashed</div>
    <div class="border-4 border-gray-400 border-y-dotted p-6 bg-white text-center text-xs text-gray-600">border-y-dotted</div>
  </div>
</Example>

### Logical variants

The logical variants (`s` and `e`) respect writing direction — in LTR layouts, `s` is left and `e` is right. In RTL, they swap.

<Example>
  <div class="flex gap-4">
    <div class="border-4 border-gray-400 border-s-double p-6 bg-white text-center text-xs text-gray-600">border-s-double</div>
    <div class="border-4 border-gray-400 border-e-ridge p-6 bg-white text-center text-xs text-gray-600">border-e-ridge</div>
  </div>
</Example>

## Applying conditionally

### Hover and focus states

Prefix a border style utility with a state variant like `hover:*` to only apply it in that state:

<Example>
  <div class="border-4 border-gray-400 border-t-solid hover:border-t-dashed p-6 bg-white text-center text-sm text-gray-600 cursor-pointer transition-all">
    Hover to change top border to dashed
  </div>
</Example>
