<p align="center"><strong>tw-jib-css-merge</strong>. A <a href="https://github.com/dcastil/tailwind-merge">tailwind-merge</a> config for tw-jib-css.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/tw-jib-css-merge"><img src="https://img.shields.io/npm/v/tw-jib-css-merge" alt="npm version"></a>
  <a href="https://github.com/simonm-c/tw-jib-css/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="license"></a>
</p>

Out of the box, tailwind-merge reads most jib classes as Tailwind colour utilities, so it deletes
classes that were meant to work together:

```js
twMerge('bg-blue-500 bg-lighten-20'); // 'bg-lighten-20'   (the colour being lightened is gone)
twMerge('bg-red-500 bg-ripple'); // 'bg-ripple'
twMerge('border-b-inset border-gray-300'); // 'border-gray-300'
twMerge('border-linear-to-r border-from-pink-500 border-to-cyan-500');
// 'border-to-cyan-500'
```

With this config, classes that compose are kept, and jib classes that really do conflict are
resolved like any other Tailwind class: the last one wins.

## Installation

```bash
pnpm add tw-jib-css-merge tailwind-merge
```

Peer dependencies: `tailwind-merge ^3.6.0` and `tw-jib-css`, at this package's version or a later one in the same major.

## Usage

Two entry points, mirroring the two CSS packages. `withJib` covers `tw-jib-css`;
`withJibExperimental` adds only what `tw-jib-css-experimental` adds, so it goes after `withJib`:

```js
import { extendTailwindMerge } from 'tailwind-merge';
import { withJib } from 'tw-jib-css-merge';
import { withJibExperimental } from 'tw-jib-css-merge/experimental';

export const twMerge = extendTailwindMerge(withJib); // tw-jib-css only
export const twMerge = extendTailwindMerge(withJib, withJibExperimental); // both
```

### Plugin order

Your own extension object goes first, because `extendTailwindMerge` only accepts an object in that
position. Put `withJib` after any other plugin. It adds classes to the core `bg-image`, `text-color`,
`border-style` and `appearance` groups, and a plugin that later replaces one of those groups drops
them.

```js
extendTailwindMerge({ extend: … }, withOtherPlugin, withJib, withJibExperimental);
```

Each plugin also has a plain-object form, for the first argument of `extendTailwindMerge` or for
`mergeConfigs`: `jibExtension` and `jibExperimentalExtension`.

The experimental overrides of the colour transforms and `text-contrast-*` keep the stable class names
and conflicts, so the experimental config adds class groups and never changes a stable one.

### One config per CSS module

Every module the CSS packages publish has a matching sub-path, so a project that imports some modules
can take the same ones here:

| CSS import                            | Merge import                                | Plugin                     |
| ------------------------------------- | ------------------------------------------- | -------------------------- |
| `tw-jib-css/automatic-contrast`       | `tw-jib-css-merge/automatic-contrast`       | `withJibAutomaticContrast` |
| `tw-jib-css/color-transforms`         | `tw-jib-css-merge/color-transforms`         | `withJibColorTransforms`   |
| `tw-jib-css/border-gradient`          | `tw-jib-css-merge/border-gradient`          | `withJibBorderGradient`    |
| `tw-jib-css/ripple`                   | `tw-jib-css-merge/ripple`                   | `withJibRipple`            |
| `tw-jib-css/comic`                    | `tw-jib-css-merge/comic`                    | `withJibComic`             |
| `tw-jib-css/pixel`                    | `tw-jib-css-merge/pixel`                    | `withJibPixel`             |
| `tw-jib-css/border-style`             | `tw-jib-css-merge/border-style`             | `withJibBorderStyle`       |
| `tw-jib-css/grid`                     | `tw-jib-css-merge/grid`                     | `withJibGrid`              |
| `tw-jib-css-experimental/corner`      | `tw-jib-css-merge/experimental/corner`      | `withJibCorner`            |
| `tw-jib-css-experimental/interpolate` | `tw-jib-css-merge/experimental/interpolate` | `withJibInterpolate`       |
| `tw-jib-css-experimental/picker`      | `tw-jib-css-merge/experimental/picker`      | `withJibPicker`            |
| `tw-jib-css-experimental/wcag-badge`  | `tw-jib-css-merge/experimental/wcag-badge`  | `withJibWcagBadge`         |

Each also exports its object form, named the same way (`jibRippleExtension` and so on).
`tw-jib-css-experimental/functions` needs no config of its own: it re-implements classes that
`withJibColorTransforms` and `withJibAutomaticContrast` already cover.

```js
extendTailwindMerge(withJibAutomaticContrast, withJibBorderGradient, withJibCorner);
```

## shadcn's cn package

`cn/config` is a different merge engine, and differs from tailwind-merge in two ways that matter here:

- Its `extendTailwindMerge` reads only the first argument, so further plugins are silently ignored.
- Its object form drops `postfixLookupClassGroups`. The extension objects lose the
  `border-linear/<mode>` handling there, and `border-linear/srgb border-linear` keeps only the
  second class.

Pass the plugins as one function instead:

```js
import { extendTailwindMerge } from 'cn/config';

export const twMerge = extendTailwindMerge((config) => withJibExperimental(withJib(config)));
```

Since the plugins merge through tailwind-merge's own `mergeConfigs`, `tailwind-merge` still has to be
installed alongside `cn`.

A merge config only reaches components that merge through it. shadcn/ui's registry components import
`cn` from the `cn` package directly, not from your project's own merge helper, so they skip this
config along with every other project extension
([shadcn-ui/ui#11854](https://github.com/shadcn-ui/ui/issues/11854)).

## What it decides

| Classes                                                                     | Result                                                                                                 |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `bg-blue-500 bg-lighten-20 bg-hue-rotate-45 -bg-saturation-20`              | All kept. Each transform reads the colour and the stage before it, on all seven surfaces.              |
| `bg-lighten-20 bg-darken-10`                                                | `bg-darken-10`. One lightness stage per surface, so `lighten`, `darken` and `lightness` share a group. |
| `bg-red-500 bg-ripple`, `bg-comic-red-500 bg-ripple`                        | All kept. The ripple paints its own layer.                                                             |
| `bg-comic-red-500 bg-pixel-blue-500`, `bg-linear-to-r bg-comic-red-500`     | The last one. Textures and gradients share one background-image slot.                                  |
| `bg-red-500 bg-comic-red-500`                                               | Both kept. The flat colour still feeds `text-contrast-*` and the transforms.                           |
| `text-white text-contrast-aa`                                               | `text-contrast-aa`. Automatic contrast sets the text colour.                                           |
| `border-red-500 border-linear-to-r border-from-pink-500 border-to-cyan-500` | All kept. The gradient holds the border colour at transparent.                                         |
| `border-linear/srgb border-linear-to-r`                                     | Both kept. The slash form carries the interpolation, the direction class carries the direction.        |
| `border-linear-to-r border-linear-45`                                       | `border-linear-45`.                                                                                    |
| `animate-spin border-spin`                                                  | `border-spin`. Both set `animation`.                                                                   |
| `border-dashed border-t-dotted`                                             | Both kept. A side's own style beats the all-sides style.                                               |
| `border-l-dotted border-x-dashed`                                           | `border-x-dashed`.                                                                                     |
| `col-span-2 grid-area-[main]`                                               | `grid-area-[main]`. `grid-area` sets all four placement longhands.                                     |
| `corner-t-bevel corner-squircle` (experimental)                             | `corner-squircle`, mirroring how `rounded-*` merges.                                                   |
| `appearance-none appearance-base-select` (experimental)                     | `appearance-base-select`.                                                                              |
| `picker:hover:bg-red-500 hover:picker:bg-blue-500` (experimental)           | Both kept. `picker:`, `picker-icon:` and `checkmark:` target pseudo-elements, so their order matters.  |

Unprefixed parameters dedupe within their own group and nowhere else: `comic-dot-*`, `comic-gap-*`,
`comic-bleed-*`, `pixel-size-*`, `pixel-gap-*`, `pixel-bloom-*`, `ripple-color-*`,
`ripple-duration-*`, `ripple-position-*`, `ripple-fade-*`, `border-spin-duration-*`,
`border-spin-reverse`, `grid-template-areas-*`, and from experimental, `interpolate-*`.

## Project theme keys

Gradient types and interpolation modes are matched by name, so a key you add to
`--jib-border-gradient-type-*` or `--jib-gradient-interpolation-*` has to be passed in. Otherwise
tailwind-merge reads `border-<type>` and `border-<type>/<mode>` as a border colour. The factories
add to the built-in names:

```js
import { createJibPlugin } from 'tw-jib-css-merge';

extendTailwindMerge(
  createJibPlugin({ gradientTypes: ['diamond'], gradientInterpolations: ['brand'] }),
);
```

`createJibExtension(options)` does the same in place of `jibExtension`. With the module plugins,
`createJibBorderGradientPlugin` and `createJibBorderGradientExtension`, from
`tw-jib-css-merge/border-gradient`, take the same options in place of `withJibBorderGradient`.

Keys under `--jib-border-gradient-direction-*`, `--jib-contrast-ratio-*` and
`--jib-border-spin-duration-*` need nothing extra.
