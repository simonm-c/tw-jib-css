import { arbitrary, color, integer, toPlugin } from './_shared.js';
import type { JibExtensionOf } from './_types.js';

export type JibRippleClassGroupIds =
  `jib.ripple${'' | '-color' | '-duration' | '-position' | '-fade'}`;

export const jibRippleExtension: JibExtensionOf<JibRippleClassGroupIds> = {
  extend: {
    classGroups: {
      'jib.ripple': ['bg-ripple'],
      'jib.ripple-color': [{ 'ripple-color': ['current', ...color] }],
      'jib.ripple-duration': [{ 'ripple-duration': integer }],
      'jib.ripple-position': [
        { 'ripple-position': ['top', 'left', 'right', 'bottom', 'center', ...arbitrary] },
      ],
      'jib.ripple-fade': [{ 'ripple-fade': ['', 'none', ...integer] }],
    },
  },
};

export const withJibRipple = toPlugin(jibRippleExtension);
