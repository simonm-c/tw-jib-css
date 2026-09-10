/** Every layer carries a second box value so `bg-clip-*` can reach a clip the
 *  shorthand would otherwise overwrite. */
export const BG_LAYER =
  'var(--tw-jib--ripple-image) padding-box var(--tw-jib--background-clip), var(--tw-jib--background-image) padding-box var(--tw-jib--background-clip), var(--tw-jib--border-gradient) border-box var(--tw-jib--border-gradient-clip)';

/** [tailwind-class-suffix, unique CSS substring marker] */
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

export const supportsFunction = (call: string) =>
  `@supports (background: if(style(--value): red)) and (background: ${call})`;

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
