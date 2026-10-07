import { arbitrary, integer, toPlugin } from './_shared.js';
import type { JibExtensionOf } from './_types.js';

export type JibGridClassGroupIds = 'jib.grid-template-areas' | 'jib.grid-area';

export const jibGridExtension: JibExtensionOf<JibGridClassGroupIds> = {
  extend: {
    classGroups: {
      'jib.grid-template-areas': [{ 'grid-template-areas': arbitrary }],
      'jib.grid-area': [{ 'grid-area': integer }],
    },
    conflictingClassGroups: {
      'jib.grid-area': [
        'col-start-end',
        'col-start',
        'col-end',
        'row-start-end',
        'row-start',
        'row-end',
      ],
    },
  },
};

export const withJibGrid = toPlugin(jibGridExtension);
