import { color, number, toPlugin } from './_shared.js';
import type { JibExtensionOf } from './_types.js';

export type JibComicClassGroupIds = `jib.comic-${'dot' | 'gap' | 'bleed'}`;

export const jibComicExtension: JibExtensionOf<JibComicClassGroupIds> = {
  extend: {
    classGroups: {
      'bg-image': [{ bg: [{ comic: color }] }],
      'jib.comic-dot': [{ 'comic-dot': number }],
      'jib.comic-gap': [{ 'comic-gap': number }],
      'jib.comic-bleed': [{ 'comic-bleed': number }],
    },
  },
};

export const withJibComic = toPlugin(jibComicExtension);
