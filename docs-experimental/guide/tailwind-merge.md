---
title: tailwind-merge
---

<!-- llm-context: tailwind-merge config for tw-jib-css-experimental, from the tw-jib-css-merge/experimental sub-path of the separate tw-jib-css-merge package. withJibExperimental adds only what the experimental package adds, so it goes after withJib from the stable entry: extendTailwindMerge(withJib, withJibExperimental). Every experimental CSS module has a matching sub-path (tw-jib-css-merge/experimental/corner exports withJibCorner, and likewise interpolate, picker and wcag-badge); functions needs none, because the stable config already covers the classes it re-implements. shadcn's cn package reads only the first argument of extendTailwindMerge, so it needs the plugins composed into one function. -->

# tailwind-merge

The [stable docs](https://simonm-c.github.io/tw-jib-css/guide/tailwind-merge) cover
`tw-jib-css-merge`, the tailwind-merge config for `tw-jib-css`, and why tailwind-merge needs one.
This page covers the part for this package.

## Install

The experimental config ships in the same package as the stable one, as the
`tw-jib-css-merge/experimental` sub-path. tailwind-merge is a peer dependency, version 3.6 or later.

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

`withJibExperimental` holds only what this package adds, so it goes after `withJib`, the same way the
CSS imports go after the stable ones:

```js
import { extendTailwindMerge } from 'tailwind-merge';
import { withJib } from 'tw-jib-css-merge';
import { withJibExperimental } from 'tw-jib-css-merge/experimental';

export const twMerge = extendTailwindMerge(withJib, withJibExperimental);
```

Your own extension object goes first, and both jib plugins after any other plugin:

```js
extendTailwindMerge({ extend: { … } }, withOtherPlugin, withJib, withJibExperimental);
```

## Take only what you need

Every module this package publishes has a matching config, so a project that imports some modules can
take the same ones here. `withJibExperimental` is all of them together.

| CSS import                            | Merge import                                | Plugin                |
| ------------------------------------- | ------------------------------------------- | --------------------- |
| `tw-jib-css-experimental`             | `tw-jib-css-merge/experimental`             | `withJibExperimental` |
| `tw-jib-css-experimental/corner`      | `tw-jib-css-merge/experimental/corner`      | `withJibCorner`       |
| `tw-jib-css-experimental/interpolate` | `tw-jib-css-merge/experimental/interpolate` | `withJibInterpolate`  |
| `tw-jib-css-experimental/picker`      | `tw-jib-css-merge/experimental/picker`      | `withJibPicker`       |
| `tw-jib-css-experimental/wcag-badge`  | `tw-jib-css-merge/experimental/wcag-badge`  | `withJibWcagBadge`    |
| `tw-jib-css-experimental/functions`   | none needed                                 |                       |

`functions` re-implements classes the stable package already ships, so the stable config for those
classes covers it: `withJib`, or `withJibColorTransforms` and `withJibAutomaticContrast`.

```js
import { extendTailwindMerge } from 'tailwind-merge';
import { withJib } from 'tw-jib-css-merge';
import { withJibCorner } from 'tw-jib-css-merge/experimental/corner';

export const twMerge = extendTailwindMerge(withJib, withJibCorner);
```

Each plugin also has a plain-object form, named the same way: `jibExperimentalExtension`,
`jibCornerExtension` and so on, for `mergeConfigs`.

## shadcn's cn package

`cn/config` reads only the first argument of `extendTailwindMerge`, so `withJibExperimental` passed
second is silently ignored. Compose the two into one function:

```js
import { extendTailwindMerge } from 'cn/config';
import { withJib } from 'tw-jib-css-merge';
import { withJibExperimental } from 'tw-jib-css-merge/experimental';

export const twMerge = extendTailwindMerge((config) => withJibExperimental(withJib(config)));
```

The [stable docs](https://simonm-c.github.io/tw-jib-css/guide/tailwind-merge#shadcn-s-cn-package)
explain why the plain object does not work there, and why shadcn/ui's own components skip any
project merge config.

## Your own theme keys

Gradient types and interpolation modes added to the theme are passed to the stable config, through
`createJibPlugin` in place of `withJib`. See the
[stable docs](https://simonm-c.github.io/tw-jib-css/guide/tailwind-merge#your-own-theme-keys).
`withJibExperimental` and its modules need no options.
