# docs-shared

The lower [Feature-Sliced Design][fsd] layers, shared by both VitePress
instances. `docs/` and `docs-experimental/` each hold their own `app`, `pages`
and `widgets`; everything beneath that lives here.

```
shared/     no domain knowledge, imports nothing above it
entities/   a thing the docs are about: an example, a utility
features/   something a reader does: copy a snippet
```

## Why a third directory rather than an import across instances

The two instances are deliberately independent, and the independence is
enforced by Tailwind rather than by convention: each `tailwind.css` declares its
own `@source` roots, so a component imported from the other instance's tree
would render with its utility classes never compiled. A shared root that _both_
instances scan is the only arrangement where one copy of a component is legal.
Both `tailwind.css` files therefore carry `@source '../../../docs-shared'`.

## The accent contract

The instances differ in accent colour, and that difference is the whole reason
these components were forked before. A Tailwind class cannot be composed at
runtime — the scanner reads source text — so the accent travels as a custom
property instead of a class name. Every shared component reaches for
`--docs-accent`, and each instance defines it once in its own `@theme` block.

Consequently `bg-(color:--docs-accent)` rather than `bg-sky-400`. The type hint
is required: `bg-(--docs-accent)` parses the property as a length. Relative
colour utilities still compose on top, because the `bg-(color:…)` form sets
`--jib-background-color-source` alongside `background-color`.

[fsd]: https://feature-sliced.design
