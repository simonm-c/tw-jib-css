import { validators } from 'tailwind-merge';
import { arbitrary, toPlugin } from '../_shared.js';
import type { JibExtensionOf } from '../_types.js';

const cornerShapes = [
  'round',
  'scoop',
  'bevel',
  'notch',
  'square',
  'squircle',
  'infinity',
  validators.isNumber,
  ...arbitrary,
];
const cornerSides = [
  's',
  'e',
  't',
  'r',
  'b',
  'l',
  'ss',
  'se',
  'ee',
  'es',
  'tl',
  'tr',
  'bl',
  'br',
] as const;

export type JibCornerClassGroupIds =
  | 'jib.corner'
  | `jib.corner-${'s' | 'e' | 't' | 'r' | 'b' | 'l' | 'ss' | 'se' | 'ee' | 'es' | 'tl' | 'tr' | 'bl' | 'br'}`;

export const jibCornerExtension: JibExtensionOf<JibCornerClassGroupIds> = {
  extend: {
    classGroups: {
      'jib.corner': [{ corner: cornerShapes }],
      ...Object.fromEntries(
        cornerSides.map((side) => [`jib.corner-${side}`, [{ [`corner-${side}`]: cornerShapes }]]),
      ),
    },
    conflictingClassGroups: {
      'jib.corner': cornerSides.map((side) => `jib.corner-${side}` as const),
      'jib.corner-s': ['jib.corner-ss', 'jib.corner-es'],
      'jib.corner-e': ['jib.corner-se', 'jib.corner-ee'],
      'jib.corner-t': ['jib.corner-tl', 'jib.corner-tr'],
      'jib.corner-r': ['jib.corner-tr', 'jib.corner-br'],
      'jib.corner-b': ['jib.corner-br', 'jib.corner-bl'],
      'jib.corner-l': ['jib.corner-tl', 'jib.corner-bl'],
    },
  },
};

export const withJibCorner = toPlugin(jibCornerExtension);
