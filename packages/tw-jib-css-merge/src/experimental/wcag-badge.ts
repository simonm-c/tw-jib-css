import { toPlugin } from '../_shared.js';
import type { JibExtensionOf } from '../_types.js';

export type JibWcagBadgeClassGroupIds = 'jib.wcag-badge';

export const jibWcagBadgeExtension: JibExtensionOf<JibWcagBadgeClassGroupIds> = {
  extend: {
    classGroups: {
      'jib.wcag-badge': ['wcag-badge'],
    },
  },
};

export const withJibWcagBadge = toPlugin(jibWcagBadgeExtension);
