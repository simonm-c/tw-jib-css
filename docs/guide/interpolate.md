---
title: Interpolate Size
---

<!-- llm-context: interpolate module (experimental) — CSS interpolate-size property for animating keyword sizes (auto, min-content, etc.). Chromium only, ~48% browser support. -->

# Interpolate Size

The CSS `interpolate-size` property enables smooth transitions to and from keyword sizes like `auto`, `min-content`, and `max-content`. Without it, CSS cannot animate between a fixed size and `auto`.

::: warning Browser Support
`interpolate-size` is supported in Chromium browsers only (~48% of users). Firefox and Safari do not support it yet.
:::

::: tip Import
Included in `@import 'tw-jib-css/experimental'`. To import individually:
```css
@import 'tw-jib-css/experimental/interpolate';
```
:::

## Quick Reference

<QuickReference :rows="[
  { class: 'interpolate-numeric', styles: 'interpolate-size: numeric-only' },
  { class: 'interpolate-keywords', styles: 'interpolate-size: allow-keywords' },
  { class: 'interpolate-[<value>]', styles: 'interpolate-size: <value>' },
]" />

## Basic Usage

Add `interpolate-keywords` to a parent element to enable smooth height transitions for its children:

<Example stretch>
  <div class="interpolate-keywords max-w-sm mx-auto">
    <div class="group border border-gray-200 rounded-lg overflow-hidden bg-white">
      <button class="w-full p-4 text-left text-sm font-medium text-gray-700 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
        Hover to expand
      </button>
      <div class="h-0 group-hover:h-auto transition-all duration-300 overflow-hidden">
        <div class="p-4 text-sm text-gray-600">
          <p>This content smoothly animates to its natural height on hover.</p>
          <p class="mt-2">Without <code class="text-xs bg-gray-100 px-1 py-0.5 rounded">interpolate-keywords</code>, the transition would snap instantly.</p>
        </div>
      </div>
    </div>
  </div>
</Example>

## Values

| Value | Behaviour |
| --- | --- |
| `numeric-only` | Default browser behaviour — only numeric-to-numeric transitions work. `0px` → `auto` will snap. |
| `allow-keywords` | Enables transitions involving keyword sizes (`auto`, `min-content`, `max-content`, `fit-content`). |

