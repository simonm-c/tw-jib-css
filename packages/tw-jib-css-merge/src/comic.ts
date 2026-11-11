import { color, number, toPlugin } from './_shared.js';
import type { JibExtensionOf } from './_types.js';

export type JibComicClassGroupIds = `jib.comic-${'dot' | 'gap' | 'bleed' | 'paper'}`;

export const jibComicExtension: JibExtensionOf<JibComicClassGroupIds> = {
  extend: {
    classGroups: {
      'bg-image': [{ bg: [{ comic: color }] }],
      'jib.comic-dot': [{ 'comic-dot': number }],
      'jib.comic-gap': [{ 'comic-gap': number }],
      'jib.comic-bleed': [{ 'comic-bleed': number }],
      'jib.comic-paper': [{ 'comic-paper': color }],
    },
  },
};

export const withJibComic = toPlugin(jibComicExtension);
