/**
 * The layered background shorthand every border-gradient utility must produce.
 * Ripple sits above the bg image, which sits above the border gradient.
 */
export const BG_LAYER =
  'var(--tw-jib--ripple-image) padding-box, var(--tw-jib--background-image) padding-box, var(--tw-jib--border-gradient) border-box';

/**
 * Named colors used as darken base colors in palette tests.
 * Each entry is [tailwind-class-suffix, unique CSS substring marker].
 */
export const DARKEN_PALETTE: [string, string][] = [
  ['red-500', '--color-red-500'],
  ['orange-500', '--color-orange-500'],
  ['amber-500', '--color-amber-500'],
  ['yellow-400', '--color-yellow-400'],
  ['lime-500', '--color-lime-500'],
  ['green-500', '--color-green-500'],
  ['emerald-500', '--color-emerald-500'],
  ['teal-500', '--color-teal-500'],
  ['cyan-500', '--color-cyan-500'],
  ['sky-500', '--color-sky-500'],
  ['blue-500', '--color-blue-500'],
  ['indigo-500', '--color-indigo-500'],
  ['violet-500', '--color-violet-500'],
  ['purple-500', '--color-purple-500'],
  ['fuchsia-500', '--color-fuchsia-500'],
  ['pink-500', '--color-pink-500'],
  ['rose-500', '--color-rose-500'],
  ['slate-400', '--color-slate-400'],
  ['gray-500', '--color-gray-500'],
  ['white', 'background-color'],
];

/**
 * Named colors used as lighten base colors in palette tests.
 * Same as DARKEN_PALETTE but with darker base shades for white/black extremes.
 */
export const LIGHTEN_PALETTE: [string, string][] = [
  ['red-500', '--color-red-500'],
  ['orange-500', '--color-orange-500'],
  ['amber-500', '--color-amber-500'],
  ['yellow-400', '--color-yellow-400'],
  ['lime-500', '--color-lime-500'],
  ['green-500', '--color-green-500'],
  ['emerald-500', '--color-emerald-500'],
  ['teal-500', '--color-teal-500'],
  ['cyan-500', '--color-cyan-500'],
  ['sky-500', '--color-sky-500'],
  ['blue-500', '--color-blue-500'],
  ['indigo-500', '--color-indigo-500'],
  ['violet-500', '--color-violet-500'],
  ['purple-500', '--color-purple-500'],
  ['fuchsia-500', '--color-fuchsia-500'],
  ['pink-500', '--color-pink-500'],
  ['rose-500', '--color-rose-500'],
  ['slate-700', '--color-slate-700'],
  ['gray-500', '--color-gray-500'],
  ['black', 'background-color'],
];

/**
 * The @supports gate the experimental @function override compiles behind. The
 * gate's shape is shared; the function it names is per-module, so callers pass
 * that in. Written once here because a drift in the shape would silently stop
 * every module's override test from matching anything.
 */
export const supportsFunction = (call: string) =>
  `@supports (background: if(style(--value): red)) and (background: ${call})`;

/** Every colour space a transform modifier accepts, including the color-mix fallback. */
export const ALL_SPACES = [
  'oklch',
  'lch',
  'lab',
  'oklab',
  'hsl',
  'hwb',
  'rgb',
  'srgb',
  'srgb-linear',
  'display-p3',
  'a98-rgb',
  'prophoto-rgb',
  'rec2020',
  'xyz',
  'xyz-d50',
  'xyz-d65',
  'color-mix',
] as const;
