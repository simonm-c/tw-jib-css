import { arbitrary, toPlugin } from '../_shared.js';
import type { JibExtensionOf } from '../_types.js';

export type JibInterpolateClassGroupIds = 'jib.interpolate-size';

export const jibInterpolateExtension: JibExtensionOf<JibInterpolateClassGroupIds> = {
  extend: {
    classGroups: {
      'jib.interpolate-size': [
        { interpolate: ['numeric', 'keywords', 'numeric-only', 'allow-keywords', ...arbitrary] },
      ],
    },
  },
};

export const withJibInterpolate = toPlugin(jibInterpolateExtension);
