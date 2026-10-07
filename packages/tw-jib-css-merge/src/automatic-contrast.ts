import { validators } from 'tailwind-merge';
import { toPlugin } from './_shared.js';
import type { JibExtensionOf } from './_types.js';

export type JibAutomaticContrastClassGroupIds = never;

export const jibAutomaticContrastExtension: JibExtensionOf<JibAutomaticContrastClassGroupIds> = {
  extend: {
    classGroups: {
      'text-color': [{ text: [{ contrast: [validators.isAny] }] }],
    },
  },
};

export const withJibAutomaticContrast = toPlugin(jibAutomaticContrastExtension);
