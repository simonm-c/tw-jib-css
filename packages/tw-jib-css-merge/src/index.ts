import { combineExtensions, toPlugin } from './_shared.js';
import type { JibExtensionOf, JibOptions, JibPlugin } from './_types.js';
import { jibAutomaticContrastExtension } from './automatic-contrast.js';
import type { JibAutomaticContrastClassGroupIds } from './automatic-contrast.js';
import { createJibBorderGradientExtension } from './border-gradient.js';
import type { JibBorderGradientClassGroupIds } from './border-gradient.js';
import { jibBorderStyleExtension } from './border-style.js';
import type { JibBorderStyleClassGroupIds } from './border-style.js';
import { jibColorTransformsExtension } from './color-transforms.js';
import type { JibColorTransformsClassGroupIds } from './color-transforms.js';
import { jibComicExtension } from './comic.js';
import type { JibComicClassGroupIds } from './comic.js';
import { jibGridExtension } from './grid.js';
import type { JibGridClassGroupIds } from './grid.js';
import { jibPixelExtension } from './pixel.js';
import type { JibPixelClassGroupIds } from './pixel.js';
import { jibRippleExtension } from './ripple.js';
import type { JibRippleClassGroupIds } from './ripple.js';

export type { JibExtensionOf, JibOptions, JibPlugin } from './_types.js';

export type JibClassGroupIds =
  | JibAutomaticContrastClassGroupIds
  | JibBorderGradientClassGroupIds
  | JibBorderStyleClassGroupIds
  | JibColorTransformsClassGroupIds
  | JibComicClassGroupIds
  | JibGridClassGroupIds
  | JibPixelClassGroupIds
  | JibRippleClassGroupIds;

export type JibExtension = JibExtensionOf<JibClassGroupIds>;

export function createJibExtension(options?: JibOptions): JibExtension {
  return combineExtensions<JibClassGroupIds>(
    jibRippleExtension,
    createJibBorderGradientExtension(options),
    jibColorTransformsExtension,
    jibAutomaticContrastExtension,
    jibBorderStyleExtension,
    jibGridExtension,
    jibComicExtension,
    jibPixelExtension,
  );
}

export const createJibPlugin = (options?: JibOptions): JibPlugin =>
  toPlugin(createJibExtension(options));

export const jibExtension = createJibExtension();

export const withJib = toPlugin(jibExtension);
