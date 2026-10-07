import { combineExtensions, toPlugin } from './_shared.js';
import type { JibExtensionOf } from './_types.js';
import { jibCornerExtension } from './experimental/corner.js';
import type { JibCornerClassGroupIds } from './experimental/corner.js';
import { jibInterpolateExtension } from './experimental/interpolate.js';
import type { JibInterpolateClassGroupIds } from './experimental/interpolate.js';
import { jibPickerExtension } from './experimental/picker.js';
import type { JibPickerClassGroupIds } from './experimental/picker.js';
import { jibWcagBadgeExtension } from './experimental/wcag-badge.js';
import type { JibWcagBadgeClassGroupIds } from './experimental/wcag-badge.js';

export type JibExperimentalClassGroupIds =
  | JibCornerClassGroupIds
  | JibInterpolateClassGroupIds
  | JibPickerClassGroupIds
  | JibWcagBadgeClassGroupIds;

export type JibExperimentalExtension = JibExtensionOf<JibExperimentalClassGroupIds>;

/* The experimental overrides keep the stable class names and conflicts, so this
 * holds only what experimental adds and never re-registers a stable group. */
export const jibExperimentalExtension: JibExperimentalExtension =
  combineExtensions<JibExperimentalClassGroupIds>(
    jibCornerExtension,
    jibInterpolateExtension,
    jibPickerExtension,
    jibWcagBadgeExtension,
  );

export const withJibExperimental = toPlugin(jibExperimentalExtension);
