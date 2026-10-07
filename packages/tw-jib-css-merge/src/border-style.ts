import { toPlugin } from './_shared.js';
import type { JibExtensionOf } from './_types.js';

const lineStyles = [
  'solid',
  'dashed',
  'dotted',
  'double',
  'hidden',
  'none',
  'groove',
  'ridge',
  'inset',
  'outset',
];
const borderSides = ['t', 'r', 'b', 'l', 'x', 'y', 's', 'e'];

export type JibBorderStyleClassGroupIds =
  `jib.border-style-${'t' | 'r' | 'b' | 'l' | 'x' | 'y' | 's' | 'e'}`;

export const jibBorderStyleExtension: JibExtensionOf<JibBorderStyleClassGroupIds> = {
  extend: {
    classGroups: {
      'border-style': ['groove', 'ridge', 'inset', 'outset'].map((style) => `border-${style}`),
      ...Object.fromEntries(
        borderSides.map((side) => [
          `jib.border-style-${side}`,
          [{ [`border-${side}`]: lineStyles }],
        ]),
      ),
    },
    conflictingClassGroups: {
      /* A side style outlives border-<style>: the width utilities read
       * var(--jib-border-t-style, var(--tw-border-style)). */
      'jib.border-style-x': [
        'jib.border-style-s',
        'jib.border-style-e',
        'jib.border-style-r',
        'jib.border-style-l',
      ],
      'jib.border-style-y': ['jib.border-style-t', 'jib.border-style-b'],
    },
  },
};

export const withJibBorderStyle = toPlugin(jibBorderStyleExtension);
