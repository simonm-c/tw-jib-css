import { color, number, toPlugin } from './_shared.js';
import type { JibExtensionOf } from './_types.js';

export type JibPixelClassGroupIds = `jib.pixel-${'size' | 'gap' | 'bloom'}`;

export const jibPixelExtension: JibExtensionOf<JibPixelClassGroupIds> = {
  extend: {
    classGroups: {
      'bg-image': [{ bg: [{ pixel: color }] }],
      'jib.pixel-size': [{ 'pixel-size': number }],
      'jib.pixel-gap': [{ 'pixel-gap': number }],
      'jib.pixel-bloom': [{ 'pixel-bloom': number }],
    },
  },
};

export const withJibPixel = toPlugin(jibPixelExtension);
