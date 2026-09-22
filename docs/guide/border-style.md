---
title: Border style
---

<!-- llm-context: Sets border-style, whole-box or one side at a time. Covers groove, ridge, inset and outset, which stock TailwindCSS v4 exposes for no side at all, in all-sides, physical, axis and logical variants. -->

# Border style

Border styles TailwindCSS v4 doesn't expose, and per-side control it doesn't offer. Set `border-groove` on the whole box, or `border-t-dashed` and `border-b-dotted` on one side each.

::: info Browser support
No relative color syntax and no `@property` registrations of our own. The physical
and all-sides utilities are plain `border-*-style` declarations and work wherever
Tailwind itself does; the axis and logical utilities add the logical properties,
and the logical pair `border-s-*` and `border-e-*` also use `:dir()` to resolve
which physical side they land on.

Tailwind's own `ltr:` and `rtl:` variants are not used for that, because they also
match `[dir="ltr"] *`, which reaches through a nested `dir="rtl"` and would apply
both directions at once. `:dir()` matches inherited directionality instead, so it
resolves per element.
:::

## Quick reference

<UtilityTable :rows="[
  { class: 'border-groove', styles: 'border-style: groove' },
  { class: 'border-ridge', styles: 'border-style: ridge' },
  { class: 'border-inset', styles: 'border-style: inset' },
  { class: 'border-outset', styles: 'border-style: outset' },
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
  { class: 'border-[border-style:<style>]', styles: 'border-style: <style>' },
  { class: 'border-t-[border-style:<style>]', styles: 'border-top-style: <style>. Every side prefix takes the same form.' },
  { class: 'border-(border-style:--var)', styles: 'border-style: var(--var)' },
  { class: 'border-t-(border-style:--var)', styles: 'border-top-style: var(--var). Every side prefix takes the same form.' },
]" />

## Basic usage

The four 3D styles apply to the whole box. TailwindCSS ships `border-solid`,
`border-dashed`, `border-dotted` and `border-double` already; these are the four it
leaves out:

<Example>
  <div class="grid grid-cols-4 gap-3 w-full max-w-lg">
    <div class="border-8 border-gray-400 border-groove p-4 bg-white text-center text-xs text-gray-600">groove</div>
    <div class="border-8 border-gray-400 border-ridge p-4 bg-white text-center text-xs text-gray-600">ridge</div>
    <div class="border-8 border-gray-400 border-inset p-4 bg-white text-center text-xs text-gray-600">inset</div>
    <div class="border-8 border-gray-400 border-outset p-4 bg-white text-center text-xs text-gray-600">outset</div>
  </div>
</Example>

### Per side

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

## Available styles

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

## Side variants

| Prefix | Sides        | CSS Property                |
| ------ | ------------ | --------------------------- |
| `t`    | Top          | `border-top-style`          |
| `r`    | Right        | `border-right-style`        |
| `b`    | Bottom       | `border-bottom-style`       |
| `l`    | Left         | `border-left-style`         |
| `x`    | Left + Right | `border-inline-style`       |
| `y`    | Top + Bottom | `border-block-style`        |
| `s`    | Inline start | `border-inline-start-style` |
| `e`    | Inline end   | `border-inline-end-style`   |

### Axis variants

<Example>
  <div class="flex gap-4">
    <div class="border-4 border-gray-400 border-x-dashed p-6 bg-white text-center text-xs text-gray-600">border-x-dashed</div>
    <div class="border-4 border-gray-400 border-y-dotted p-6 bg-white text-center text-xs text-gray-600">border-y-dotted</div>
  </div>
</Example>

### Logical variants

The logical variants (`s` and `e`) follow writing direction. In LTR layouts `s` is left and `e` is right; in RTL they swap. They resolve per element, so a `dir="rtl"` subtree inside an LTR page swaps only inside that subtree.

<Example>
  <div class="flex gap-4">
    <div class="border-4 border-gray-400 border-s-double p-6 bg-white text-center text-xs text-gray-600">border-s-double</div>
    <div class="border-4 border-gray-400 border-e-ridge p-6 bg-white text-center text-xs text-gray-600">border-e-ridge</div>
  </div>
</Example>

## Composition

### Layering over a whole-box style

A side utility overrides a whole-box style on that side alone, whether the
whole-box style is one of these or one of TailwindCSS's own:

<Example>
  <div class="flex gap-4">
    <div class="border-8 border-indigo-500 border-groove border-t-ridge p-6 bg-white text-center text-xs text-gray-600">groove, ridge on top</div>
    <div class="border-8 border-indigo-500 border-dashed border-t-groove p-6 bg-white text-center text-xs text-gray-600">dashed, groove on top</div>
  </div>
</Example>

### With a per-side colour

Style and colour are set independently per side, so TailwindCSS's own
`border-t-<color>` composes with these. A red dashed top on an otherwise blue
border:

<Example>
  <div class="flex gap-4">
    <div class="border-8 border-blue-500 border-t-red-500 border-t-dashed p-6 bg-white text-center text-xs text-gray-600">border-t-red-500 border-t-dashed</div>
    <div class="border-8 border-blue-500 border-t-red-500 border-t-groove p-6 bg-white text-center text-xs text-gray-600">border-t-red-500 border-t-groove</div>
  </div>
</Example>

The 3D styles take their light and dark faces from the border colour, so
`border-t-groove` above bevels in red while the other three sides stay flat blue.

### Width utilities keep the style

Every TailwindCSS border-width utility also re-asserts a border style, so a width
that lands after the style in the cascade would otherwise reset it. Each side
keeps its own style through that, including when the width arrives in a variant
that sorts later:

<Example>
  <div class="flex gap-4">
    <div class="border-8 border-indigo-500 border-t-groove hover:border-t-4 p-6 bg-white text-center text-xs text-gray-600 cursor-pointer">hover: top stays groove</div>
    <div class="border-8 border-indigo-500 border-s-ridge hover:border-s-4 p-6 bg-white text-center text-xs text-gray-600 cursor-pointer">hover: start stays ridge</div>
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

## Using a custom value

Arbitrary values need the explicit `border-style:` type hint. A bare
`border-[groove]` is read as a colour by TailwindCSS's own border utility, so the
hint is what routes the value to the style instead:

<Example>
  <div class="border-4 border-gray-400 border-t-[border-style:groove] p-6 bg-white text-center text-sm text-gray-600">
    border-t-[border-style:groove]
  </div>
</Example>

## Using a custom variable

For CSS variables, use the typed bare-value syntax:

<Example>
  <div class="border-4 border-gray-400 border-t-(border-style:--my-style) p-6 bg-white text-center text-sm text-gray-600" style="--my-style: double">
    border-t-(border-style:--my-style)
  </div>
</Example>

| Utility         | Type hint      | Example                              |
| --------------- | -------------- | ------------------------------------ |
| `border`        | `border-style` | `border-(border-style:--my-style)`   |
| `border-<side>` | `border-style` | `border-t-(border-style:--my-style)` |

## Import

Included in `@import 'tw-jib-css'`. To import individually:

```css
@import 'tw-jib-css/border-style';
```

This entry carries none of the library's color machinery, because these utilities
read no color. Taking it costs you nothing but the border styles below. See [take
only what you need](/guide/installation#take-only-what-you-need).

<BaselineSupport :features="['logical-properties', 'dir-pseudo']" />
