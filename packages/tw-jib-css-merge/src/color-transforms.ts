import { integer, toPlugin } from './_shared.js';
import type { JibExtensionOf } from './_types.js';

const surfaces = ['bg', 'text', 'fill', 'stroke', 'outline', 'accent', 'border'];

/* Each stage reads the surface colour and the stage before it, so a transform
 * conflicts with neither. */
export type JibColorTransformsClassGroupIds =
  `jib.${'bg' | 'text' | 'fill' | 'stroke' | 'outline' | 'accent' | 'border'}-${'lightness' | 'saturation' | 'hue-rotate'}`;

export const jibColorTransformsExtension: JibExtensionOf<JibColorTransformsClassGroupIds> = {
  extend: {
    classGroups: Object.fromEntries(
      surfaces.flatMap((surface) => [
        [
          `jib.${surface}-lightness`,
          [{ [surface]: [{ lighten: integer, darken: integer, lightness: integer }] }],
        ],
        [
          `jib.${surface}-saturation`,
          [{ [surface]: [{ saturate: integer, desaturate: integer, saturation: integer }] }],
        ],
        [`jib.${surface}-hue-rotate`, [{ [surface]: [{ 'hue-rotate': integer }] }]],
      ]),
    ),
  },
};

export const withJibColorTransforms = toPlugin(jibColorTransformsExtension);
