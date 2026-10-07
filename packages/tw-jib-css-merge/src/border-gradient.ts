import { validators } from 'tailwind-merge';
import { arbitrary, color, number, toPlugin } from './_shared.js';
import type { JibExtensionOf, JibOptions, JibPlugin } from './_types.js';

const { isAny, isArbitraryLength, isPercent } = validators;

const position = [isPercent, isArbitraryLength];

/* The --jib-border-gradient-type-* and --jib-gradient-interpolation-* theme
 * keys. `border-<type>/<interpolation>` is matched by name, so a key missing
 * here resolves to border-color. */
const defaultGradientTypes = ['linear', 'radial', 'conic'];
const defaultGradientInterpolations = [
  'srgb',
  'hsl',
  'oklab',
  'oklch',
  'longer',
  'shorter',
  'increasing',
  'decreasing',
];

export type JibBorderGradientClassGroupIds =
  | 'jib.border-gradient'
  | 'jib.border-gradient-type'
  | 'jib.border-gradient-interpolation'
  | `jib.border-gradient-${'from' | 'via' | 'to'}${'' | '-position'}`
  | `jib.border-spin${'' | '-direction' | '-duration'}`;

export function createJibBorderGradientExtension({
  gradientTypes = [],
  gradientInterpolations = [],
}: JibOptions = {}): JibExtensionOf<JibBorderGradientClassGroupIds> {
  const types = [...defaultGradientTypes, ...gradientTypes];
  const interpolations = [...defaultGradientInterpolations, ...gradientInterpolations];

  return {
    extend: {
      classGroups: {
        /* The gradient holds border-color at transparent over any border-*
         * colour on the same element, so the two never conflict. */
        'jib.border-gradient': [
          {
            border: [
              {
                linear: [{ to: [isAny] }, ...number],
                radial: arbitrary,
                conic: number,
              },
            ],
          },
        ],
        'jib.border-gradient-type': types.map((type) => `border-${type}`),
        'jib.border-gradient-interpolation': types.flatMap((type) =>
          interpolations.map((interpolation) => `border-${type}/${interpolation}`),
        ),
        'jib.border-gradient-from-position': [{ 'border-from': position }],
        'jib.border-gradient-via-position': [{ 'border-via': position }],
        'jib.border-gradient-to-position': [{ 'border-to': position }],
        'jib.border-gradient-from': [{ 'border-from': color }],
        'jib.border-gradient-via': [{ 'border-via': color }],
        'jib.border-gradient-to': [{ 'border-to': color }],
        'jib.border-spin': ['border-spin'],
        'jib.border-spin-direction': ['border-spin-reverse'],
        'jib.border-spin-duration': [{ 'border-spin-duration': [isAny] }],
      },
      conflictingClassGroups: {
        animate: ['jib.border-spin'],
        'jib.border-spin': ['animate'],
        'jib.border-gradient': ['jib.border-gradient-type'],
        'jib.border-gradient-type': ['jib.border-gradient'],
      },
      /* `border-linear/srgb` writes the interpolation `border-linear` omits, so
       * the slash form is a separate group that composes with a direction. */
      postfixLookupClassGroups: ['jib.border-gradient-type'],
    },
  };
}

export const createJibBorderGradientPlugin = (options?: JibOptions): JibPlugin =>
  toPlugin(createJibBorderGradientExtension(options));

export const jibBorderGradientExtension = createJibBorderGradientExtension();

export const withJibBorderGradient = toPlugin(jibBorderGradientExtension);
