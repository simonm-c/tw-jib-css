---
title: tailwind-merge
---

<!-- llm-context: tailwind-merge config for tw-jib-css, published as the separate package tw-jib-css-merge with tailwind-merge ^3.6.0 as a peer dependency. Without it tailwind-merge reads most jib classes as core colour utilities and deletes classes meant to work together (bg-blue-500 bg-lighten-20 becomes bg-lighten-20); with it, classes that compose are kept and real conflicts resolve to the last class. Usage: extendTailwindMerge(withJib); your own extension object goes first and withJib after any other plugin. Every CSS module has a matching sub-path (tw-jib-css-merge/ripple exports withJibRipple and jibRippleExtension, and so on), so a project taking some modules takes the same configs. shadcn's cn package needs the plugins composed into one function, because it ignores further arguments and the object form's postfixLookupClassGroups. createJibPlugin, createJibExtension and the border-gradient module's createJibBorderGradientPlugin take gradientTypes and gradientInterpolations for project theme keys. -->

# tailwind-merge

[tailwind-merge](https://github.com/dcastil/tailwind-merge) only knows Tailwind's own classes. Most
tw-jib-css classes start with a core prefix, so it reads them as core utilities, usually as a colour,
and deletes classes that were meant to work together:

```js
twMerge('bg-blue-500 bg-lighten-20'); // 'bg-lighten-20': the colour being lightened is gone
twMerge('bg-red-500 bg-ripple'); // 'bg-ripple'
twMerge('border-b-inset border-gray-300'); // 'border-gray-300'
twMerge('border-linear-to-r border-from-pink-500 border-to-cyan-500'); // 'border-to-cyan-500'
```

`tw-jib-css-merge` is the config that fixes this. Classes that compose are kept, and jib classes that
really do conflict resolve like any other Tailwind class: the last one wins.

## Install

It is a separate package. tailwind-merge is a peer dependency, version 3.6 or later.

::: code-group

```bash [npm]
npm install tw-jib-css-merge tailwind-merge
```

```bash [pnpm]
pnpm add tw-jib-css-merge tailwind-merge
```

```bash [yarn]
yarn add tw-jib-css-merge tailwind-merge
```

```bash [bun]
bun add tw-jib-css-merge tailwind-merge
```

:::

## Use

Pass `withJib` to `extendTailwindMerge`, and use the function it returns wherever you merge classes:

```js
import { extendTailwindMerge } from 'tailwind-merge';
import { withJib } from 'tw-jib-css-merge';

export const twMerge = extendTailwindMerge(withJib);
```

### Plugin order

Your own extension object goes first, because `extendTailwindMerge` only accepts an object in that
position. Put `withJib` after any other plugin: it adds classes to the core `bg-image`, `text-color`
and `border-style` groups, and a plugin that later replaces one of those groups drops them.

```js
extendTailwindMerge({ extend: { … } }, withOtherPlugin, withJib);
```

## Take only what you need

Every [CSS module](/guide/installation#take-only-what-you-need) has a matching config, so a project
that imports some modules can take the same ones here. `withJib` is all of them together.

| CSS import                      | Merge import                          | Plugin                     |
| ------------------------------- | ------------------------------------- | -------------------------- |
| `tw-jib-css`                    | `tw-jib-css-merge`                    | `withJib`                  |
| `tw-jib-css/automatic-contrast` | `tw-jib-css-merge/automatic-contrast` | `withJibAutomaticContrast` |
| `tw-jib-css/color-transforms`   | `tw-jib-css-merge/color-transforms`   | `withJibColorTransforms`   |
| `tw-jib-css/border-gradient`    | `tw-jib-css-merge/border-gradient`    | `withJibBorderGradient`    |
| `tw-jib-css/ripple`             | `tw-jib-css-merge/ripple`             | `withJibRipple`            |
| `tw-jib-css/comic`              | `tw-jib-css-merge/comic`              | `withJibComic`             |
| `tw-jib-css/pixel`              | `tw-jib-css-merge/pixel`              | `withJibPixel`             |
| `tw-jib-css/border-style`       | `tw-jib-css-merge/border-style`       | `withJibBorderStyle`       |
| `tw-jib-css/grid`               | `tw-jib-css-merge/grid`               | `withJibGrid`              |

```js
import { extendTailwindMerge } from 'tailwind-merge';
import { withJibAutomaticContrast } from 'tw-jib-css-merge/automatic-contrast';
import { withJibBorderGradient } from 'tw-jib-css-merge/border-gradient';

export const twMerge = extendTailwindMerge(withJibAutomaticContrast, withJibBorderGradient);
```

Each plugin also has a plain-object form, named the same way: `jibExtension` for the whole library,
`jibRippleExtension` for `tw-jib-css-merge/ripple`, and so on. Pass one as the first argument of
`extendTailwindMerge`, or to `mergeConfigs`.

## shadcn's cn package

`cn/config` is a different merge engine, and it differs from tailwind-merge in two ways that matter
here:

- Its `extendTailwindMerge` reads only the first argument, so further plugins are silently ignored.
- Its object form drops `postfixLookupClassGroups`. Passed `jibExtension`, it loses the
  `border-linear/<mode>` handling, and `border-linear/srgb border-linear` keeps only the second class.

Pass `withJib` as the single argument instead. It merges through tailwind-merge's own `mergeConfigs`,
so `tailwind-merge` still has to be installed alongside `cn`:

```js
import { extendTailwindMerge } from 'cn/config';
import { withJib } from 'tw-jib-css-merge';

export const twMerge = extendTailwindMerge(withJib);
```

With module plugins, compose them into that one function:

```js
export const twMerge = extendTailwindMerge((config) =>
  withJibBorderGradient(withJibAutomaticContrast(config)),
);
```

A merge config only reaches the components that merge through it. shadcn/ui's registry components
import `cn` from the `cn` package directly rather than from your project's merge helper, so they skip
this config along with every other project extension
([shadcn-ui/ui#11854](https://github.com/shadcn-ui/ui/issues/11854)).

## Your own theme keys

Gradient types and interpolation modes are matched by name. A key you add to
`--jib-border-gradient-type-*` or `--jib-gradient-interpolation-*` has to be passed in, or
tailwind-merge reads `border-<type>` and `border-<type>/<mode>` as a border colour. The factories add
to the built-in names:

```js
import { createJibPlugin } from 'tw-jib-css-merge';

export const twMerge = extendTailwindMerge(
  createJibPlugin({ gradientTypes: ['diamond'], gradientInterpolations: ['brand'] }),
);
```

`createJibExtension` takes the same options and returns the plain object in place of `jibExtension`.
With the module plugins, `createJibBorderGradientPlugin` and `createJibBorderGradientExtension`, from
`tw-jib-css-merge/border-gradient`, do the same in place of `withJibBorderGradient`.

Keys you add under `--jib-border-gradient-direction-*`, `--jib-contrast-ratio-*` and
`--jib-border-spin-duration-*` need nothing extra.

## Experimental

`tw-jib-css-experimental` has its own config, from `tw-jib-css-merge/experimental`, that goes after
`withJib`. See the [experimental docs](https://simonm-c.github.io/tw-jib-css/experimental/guide/tailwind-merge).
