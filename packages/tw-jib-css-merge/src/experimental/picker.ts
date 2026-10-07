import { toPlugin } from '../_shared.js';
import type { JibExtensionOf } from '../_types.js';

export type JibPickerClassGroupIds = never;

export const jibPickerExtension: JibExtensionOf<JibPickerClassGroupIds> = {
  extend: {
    classGroups: {
      appearance: ['appearance-base-select'],
    },
    orderSensitiveModifiers: ['picker', 'picker-icon', 'checkmark'],
  },
};

export const withJibPicker = toPlugin(jibPickerExtension);
