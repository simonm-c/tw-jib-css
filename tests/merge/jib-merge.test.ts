import { describe, expect, test } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { extendTailwindMerge, getDefaultConfig } from 'tailwind-merge';
import { extendTailwindMerge as extendCnMerge } from 'cn/config';
import { createJibPlugin, jibExtension, withJib } from 'tw-jib-css-merge';
import {
  jibAutomaticContrastExtension,
  withJibAutomaticContrast,
} from 'tw-jib-css-merge/automatic-contrast';
import {
  jibBorderGradientExtension,
  withJibBorderGradient,
} from 'tw-jib-css-merge/border-gradient';
import { jibBorderStyleExtension, withJibBorderStyle } from 'tw-jib-css-merge/border-style';
import {
  jibColorTransformsExtension,
  withJibColorTransforms,
} from 'tw-jib-css-merge/color-transforms';
import { jibComicExtension, withJibComic } from 'tw-jib-css-merge/comic';
import { jibGridExtension, withJibGrid } from 'tw-jib-css-merge/grid';
import { jibPixelExtension, withJibPixel } from 'tw-jib-css-merge/pixel';
import { jibRippleExtension, withJibRipple } from 'tw-jib-css-merge/ripple';
import { jibCornerExtension, withJibCorner } from 'tw-jib-css-merge/experimental/corner';
import {
  jibInterpolateExtension,
  withJibInterpolate,
} from 'tw-jib-css-merge/experimental/interpolate';
import { jibPickerExtension, withJibPicker } from 'tw-jib-css-merge/experimental/picker';
import { jibWcagBadgeExtension, withJibWcagBadge } from 'tw-jib-css-merge/experimental/wcag-badge';
import { jibExperimentalExtension, withJibExperimental } from 'tw-jib-css-merge/experimental';

const repoRoot = resolve(import.meta.dirname, '../..');

type Merge = (classes: string) => string;

type ClassGroups = Readonly<Partial<Record<string, readonly unknown[]>>>;

interface MergeModule {
  name: string;
  extension: { extend?: { classGroups?: ClassGroups } };
}

const STABLE_MODULES: MergeModule[] = [
  {
    name: 'automatic-contrast',
    extension: jibAutomaticContrastExtension,
  },
  { name: 'border-gradient', extension: jibBorderGradientExtension },
  { name: 'border-style', extension: jibBorderStyleExtension },
  {
    name: 'color-transforms',
    extension: jibColorTransformsExtension,
  },
  { name: 'comic', extension: jibComicExtension },
  { name: 'grid', extension: jibGridExtension },
  { name: 'pixel', extension: jibPixelExtension },
  { name: 'ripple', extension: jibRippleExtension },
];

const EXPERIMENTAL_MODULES: MergeModule[] = [
  { name: 'corner', extension: jibCornerExtension },
  { name: 'interpolate', extension: jibInterpolateExtension },
  { name: 'picker', extension: jibPickerExtension },
  { name: 'wcag-badge', extension: jibWcagBadgeExtension },
];

/* The functions entry re-implements classes the color-transforms and
 * automatic-contrast configs already cover, so it has no config of its own. */
const CONFIG_FREE_EXPERIMENTAL_ENTRIES = ['functions'];

/* cn's extendTailwindMerge reads only its first argument, and its object form
 * drops postfixLookupClassGroups, so it gets the plugins as one function. */
const stableMerges: (readonly [string, Merge])[] = [
  [
    'tailwind-merge with every stable module plugin',
    extendTailwindMerge(
      withJibRipple,
      withJibBorderGradient,
      withJibColorTransforms,
      withJibAutomaticContrast,
      withJibBorderStyle,
      withJibGrid,
      withJibComic,
      withJibPixel,
    ),
  ],
  ['tailwind-merge with withJib', extendTailwindMerge(withJib)],
  [
    'cn with every stable module plugin composed',
    extendCnMerge((config) =>
      [
        withJibRipple,
        withJibBorderGradient,
        withJibColorTransforms,
        withJibAutomaticContrast,
        withJibBorderStyle,
        withJibGrid,
        withJibComic,
        withJibPixel,
      ].reduce((current, plugin) => plugin(current), config),
    ),
  ],
  ['tailwind-merge with jibExtension', extendTailwindMerge(jibExtension)],
  ['cn with withJib', extendCnMerge(withJib)],
];
const experimentalMerges: (readonly [string, Merge])[] = [
  [
    'tailwind-merge with every stable and experimental module plugin',
    extendTailwindMerge(
      withJibRipple,
      withJibBorderGradient,
      withJibColorTransforms,
      withJibAutomaticContrast,
      withJibBorderStyle,
      withJibGrid,
      withJibComic,
      withJibPixel,
      withJibCorner,
      withJibInterpolate,
      withJibPicker,
      withJibWcagBadge,
    ),
  ],
  [
    'tailwind-merge with withJib then withJibExperimental',
    extendTailwindMerge(withJib, withJibExperimental),
  ],
  [
    'tailwind-merge with jibExtension then withJibExperimental',
    extendTailwindMerge(jibExtension, withJibExperimental),
  ],
  [
    'cn with withJib and withJibExperimental composed',
    extendCnMerge((config) => withJibExperimental(withJib(config))),
  ],
];
const tailwindMerge = extendTailwindMerge(withJib);

function collectFiles(directory: string, extension: string): string[] {
  return readdirSync(directory, { withFileTypes: true, recursive: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(extension))
    .map((entry) => join(entry.parentPath, entry.name));
}

/* A string definition is a literal class part, an object key a part with
 * children; functions are value validators and name nothing. */
function collectClassPaths(classGroups: ClassGroups): Set<string> {
  const paths = new Set<string>();
  const visit = (definitions: readonly unknown[], parent: string) => {
    for (const definition of definitions) {
      if (typeof definition === 'string') {
        paths.add(definition === '' ? parent : parent ? `${parent}-${definition}` : definition);
      } else if (definition !== null && typeof definition === 'object') {
        for (const [key, children] of Object.entries(definition)) {
          const path = parent ? `${parent}-${key}` : key;
          paths.add(path);
          visit(children as readonly unknown[], path);
        }
      }
    }
  };
  for (const definitions of Object.values(classGroups)) if (definitions) visit(definitions, '');
  return paths;
}

const STABLE_KEPT = [
  [
    'the base colour under each colour transform',
    'bg-blue-500 bg-lighten-20 bg-hue-rotate-45 -bg-saturation-20',
  ],
  ['a text colour under its transform', 'text-blue-500 -text-saturation-40'],
  ['an accent colour under its transform', 'accent-blue-500 accent-darken-20/oklch'],
  [
    'a stroke width and colour under a stroke transform',
    'stroke-2 stroke-red-500 stroke-lighten-10',
  ],
  ['a border colour under its transform', 'border-red-500 -border-hue-rotate-30'],
  ['a background colour under the ripple', 'bg-red-500/50 bg-ripple'],
  ['a texture under the ripple', 'bg-comic-red-500 bg-ripple'],
  ['a flat colour beside the texture it feeds', 'bg-violet-600 bg-comic-violet-600'],
  ['a border colour beside a gradient', 'border-red-500 border-linear-to-r'],
  ['a gradient beside a border colour', 'border-linear-to-r border-red-500'],
  [
    'each gradient stop',
    'border-conic-0 border-from-red-500 border-via-yellow-400 border-to-blue-500',
  ],
  ['a stop colour beside its position', 'border-from-red-500 border-from-[20%]'],
  ['an interpolation beside a direction', 'border-linear/srgb border-linear-to-r'],
  ['an interpolation beside its bare type', 'border-radial/srgb border-radial'],
  [
    'a spin beside its gradient and stops',
    'border-conic-0 border-spin border-spin-reverse border-from-red-500',
  ],
  ['a side style beside the all-sides style', 'border-dashed border-t-dotted'],
  ['a side style beside a border colour', 'border-b-inset border-gray-300'],
  [
    'automatic contrast beside a background transform',
    'bg-violet-600 bg-lighten-30 text-contrast-aa',
  ],
] as const;

const STABLE_RESOLVED = [
  ['lighten and darken on one surface', 'bg-lighten-20/oklch bg-darken-10', 'bg-darken-10'],
  ['a negative and a positive lightness', '-bg-lightness-20 bg-lighten-10', 'bg-lighten-10'],
  [
    'saturate and desaturate on one surface',
    'text-saturate-20 text-desaturate-10',
    'text-desaturate-10',
  ],
  ['two hue rotations', 'fill-hue-rotate-90 -fill-hue-rotate-45', '-fill-hue-rotate-45'],
  ['two textures', 'bg-comic-red-500 bg-pixel-blue-500', 'bg-pixel-blue-500'],
  ['a gradient and a texture', 'bg-linear-to-r bg-comic-red-500', 'bg-comic-red-500'],
  ['a text colour and automatic contrast', 'text-white text-contrast-aa', 'text-contrast-aa'],
  ['automatic contrast and a text colour', 'text-contrast-aa/oklch text-red-500', 'text-red-500'],
  ['two gradient directions', 'border-linear-to-r border-linear-45', 'border-linear-45'],
  [
    'a bare gradient type and a direction',
    'border-linear border-linear-to-r',
    'border-linear-to-r',
  ],
  ['two interpolations', 'border-linear/srgb border-conic/oklch', 'border-conic/oklch'],
  ['two stop colours', 'border-from-red-500 border-from-blue-500', 'border-from-blue-500'],
  ['an animation and the border spin', 'animate-spin border-spin', 'border-spin'],
  [
    'two spin durations',
    'border-spin-duration-slow border-spin-duration-2',
    'border-spin-duration-2',
  ],
  ['two all-sides border styles', 'border-groove border-dashed', 'border-dashed'],
  ['a side style and the inline-axis style', 'border-l-dotted border-x-dashed', 'border-x-dashed'],
  [
    'a grid placement and a grid area',
    'col-span-2 row-start-1 grid-area-[main]',
    'grid-area-[main]',
  ],
  ['two ripple fades', 'ripple-fade ripple-fade-none', 'ripple-fade-none'],
  ['two ripple colours', 'ripple-color-current ripple-color-white/30', 'ripple-color-white/30'],
  ['two comic dot sizes', 'comic-dot-1 comic-dot-2', 'comic-dot-2'],
  ['two pixel sizes', 'pixel-size-2 pixel-size-[3px]', 'pixel-size-[3px]'],
] as const;

const SURFACES = ['bg', 'text', 'fill', 'stroke', 'outline', 'accent', 'border'] as const;

const TRANSFORM_STAGES = {
  lightness: ['lightness-20', '-lightness-20', 'lighten-20', 'darken-20'],
  saturation: ['saturation-20', '-saturation-20', 'saturate-20', 'desaturate-20'],
  'hue-rotate': ['hue-rotate-20', '-hue-rotate-20'],
} as const;

type TransformStage = keyof typeof TRANSFORM_STAGES;

const STAGE_NAMES = Object.keys(TRANSFORM_STAGES) as TransformStage[];

function buildTransformClass(surface: string, alias: string): string {
  return alias.startsWith('-') ? `-${surface}${alias}` : `${surface}-${alias}`;
}

const ALIAS_CASES = SURFACES.flatMap((surface) =>
  STAGE_NAMES.map((stage) => [surface, stage] as const),
);

const STACKING_CASES = SURFACES.flatMap((surface) =>
  STAGE_NAMES.flatMap((first, index) =>
    STAGE_NAMES.slice(index + 1).map((second) => [surface, first, second] as const),
  ),
);

function describeColourTransforms(merge: Merge): void {
  test.each(ALIAS_CASES)('resolves every pair of %s %s aliases to the last', (surface, stage) => {
    // Arrange
    const aliases = TRANSFORM_STAGES[stage].map((alias) => buildTransformClass(surface, alias));
    const pairs = aliases.flatMap((first) =>
      aliases.filter((second) => second !== first).map((second) => [first, second] as const),
    );

    // Act
    const unresolved = pairs.filter(
      ([first, second]) => merge(`${first} ${second}/oklch`) !== `${second}/oklch`,
    );

    // Assert
    expect(
      unresolved,
      `the ${stage} aliases on ${surface} write one stage, so a later alias must replace an earlier one`,
    ).toEqual([]);
  });

  test.each(STACKING_CASES)(
    'keeps every %s %s transform beside every %s transform and the base colour',
    (surface, first, second) => {
      // Arrange
      const lists = TRANSFORM_STAGES[first].flatMap((firstAlias) =>
        TRANSFORM_STAGES[second].flatMap((secondAlias) => {
          const firstClass = buildTransformClass(surface, firstAlias);
          const secondClass = buildTransformClass(surface, secondAlias);
          return [
            `${surface}-red-500 ${firstClass} ${secondClass}`,
            `${surface}-red-500 ${secondClass} ${firstClass}`,
          ];
        }),
      );

      // Act
      const altered = lists.filter((classes) => merge(classes) !== classes);

      // Assert
      expect(
        altered,
        `${first} and ${second} are separate stages of the ${surface} pipeline, so each must survive the other and the colour they read`,
      ).toEqual([]);
    },
  );
}

const EXPERIMENTAL_KEPT = [
  ['a corner shape beside a side shape set after it', 'corner-squircle corner-t-bevel'],
  [
    'pseudo-element variants in different orders',
    'picker:hover:bg-red-500 hover:picker:bg-blue-500',
  ],
] as const;

const EXPERIMENTAL_RESOLVED = [
  [
    'a side corner shape and an all-corners shape',
    'corner-t-bevel corner-squircle',
    'corner-squircle',
  ],
  ['two appearances', 'appearance-none appearance-base-select', 'appearance-base-select'],
  [
    'two interpolate-size keywords',
    'interpolate-keywords interpolate-numeric',
    'interpolate-numeric',
  ],
] as const;

function collectUtilityRoots(sourceDirectory: string): string[] {
  const roots = collectFiles(join(repoRoot, 'packages', sourceDirectory), '.css')
    .flatMap((file) => [...readFileSync(file, 'utf8').matchAll(/^@utility -?([^\s{]+)/gm)])
    .map(([, name]) => name.replace(/-\*$/, ''));
  return [...new Set(roots)];
}

function collectCssEntries(packageName: string): string[] {
  const manifest = JSON.parse(
    readFileSync(join(repoRoot, 'packages', packageName, 'package.json'), 'utf8'),
  ) as { exports: Record<string, unknown> };
  return Object.keys(manifest.exports)
    .filter((path) => path !== '.')
    .map((path) => path.replace(/^\.\//, ''));
}

function collectCssEntryImports(packageName: string, entry: string): string[] {
  const source = readFileSync(
    join(repoRoot, 'packages', packageName, 'src', `${entry}.css`),
    'utf8',
  );
  return [...source.matchAll(/@import "\.\/([^/"]+)\//g)].map(([, folder]) => folder);
}

interface FixtureClassList {
  file: string;
  dataTest: string | undefined;
  classes: string;
}

function collectFixtureClassLists(directory: string): FixtureClassList[] {
  return collectFiles(join(repoRoot, directory), '.md').flatMap((file) =>
    [...readFileSync(file, 'utf8').matchAll(/<[a-z][^>]*\bclass="([^"]+)"[^>]*>/g)].map(
      ([tag, classes]) => ({
        file: relative(repoRoot, file),
        dataTest: /\bdata-test="([^"]+)"/.exec(tag)?.[1],
        classes: classes.trim().split(/\s+/).join(' '),
      }),
    ),
  );
}

/* Fixtures that put conflicting classes on one element on purpose, by data-test
 * id, with the classes twMerge must drop from them. */
const CONFLICT_FIXTURES: Record<string, readonly string[]> = {
  'gradient-comic': ['bg-linear-to-r'],
  'gradient-pixel': ['bg-linear-to-r'],
};

function expectedMerge({ dataTest, classes }: FixtureClassList): string {
  const dropped = (dataTest && CONFLICT_FIXTURES[dataTest]) || [];
  return classes
    .split(' ')
    .filter((name) => !dropped.includes(name))
    .join(' ');
}

const tailwindOwnedByValidator = new Set(['bg-current']);
const defaultClassPaths = collectClassPaths(getDefaultConfig().classGroups);
const stableClassPaths = collectClassPaths(jibExtension.extend?.classGroups ?? {});
const experimentalClassPaths = collectClassPaths(
  jibExperimentalExtension.extend?.classGroups ?? {},
);

const UNCLAIMED_MESSAGE =
  'a utility no class path names falls through to a Tailwind validator, which reads most jib names as a colour and deletes the class it composes with';
const FIXTURE_MESSAGE =
  'a fixture class list is markup the library documents as working together, less the classes a listed conflict fixture must drop';

function collectThemeKeys(namespace: string): string[] {
  const keys = collectFiles(join(repoRoot, 'packages/tw-jib-css/src'), '.css').flatMap((file) => [
    ...readFileSync(file, 'utf8').matchAll(new RegExp(`^\\s*--${namespace}-([a-z0-9-]+):`, 'gm')),
  ]);
  return [...new Set(keys.map(([, key]) => key))];
}

describe('tw-jib-css-merge', () => {
  describe.each(stableMerges)('through %s', (_engine, merge) => {
    describeColourTransforms(merge);

    test.each(STABLE_KEPT)('keeps %s', (_scenario, classes) => {
      // Act
      const merged = merge(classes);

      // Assert
      expect(merged, `${classes} compose, so twMerge must keep every class`).toBe(classes);
    });

    test.each(STABLE_RESOLVED)('resolves %s to the last', (_scenario, classes, winner) => {
      // Act
      const merged = merge(classes);

      // Assert
      expect(merged, `${classes} set the same thing, so only the last should survive`).toBe(winner);
    });

    test('every class list in the stable fixtures survives unchanged', () => {
      // Arrange
      const classLists = collectFixtureClassLists('docs/examples');

      // Act
      const altered = classLists.filter((list) => merge(list.classes) !== expectedMerge(list));

      // Assert
      expect(classLists.length, 'the fixture glob must find class lists to check').toBeGreaterThan(
        0,
      );
      expect(altered, FIXTURE_MESSAGE).toEqual([]);
    });
  });

  test('every @utility in tw-jib-css names a class path in the stable config alone', () => {
    // Arrange
    const claimedPaths = new Set([...defaultClassPaths, ...stableClassPaths]);

    // Act
    const unclaimed = collectUtilityRoots('tw-jib-css/src').filter(
      (root) => !claimedPaths.has(root) && !tailwindOwnedByValidator.has(root),
    );

    // Assert
    expect(unclaimed, UNCLAIMED_MESSAGE).toEqual([]);
  });

  test.each(collectThemeKeys('jib-border-gradient-type'))(
    'keeps the %s gradient type beside a border colour',
    (type) => {
      // Arrange
      const classes = `border-red-500 border-${type}`;

      // Act
      const merged = tailwindMerge(classes);

      // Assert
      expect(
        merged,
        `border-${type} is a theme key in the CSS, so it must not read as a border colour`,
      ).toBe(classes);
    },
  );

  test.each(
    collectThemeKeys('jib-border-gradient-type').flatMap((type) =>
      collectThemeKeys('jib-gradient-interpolation').map((interpolation) => [type, interpolation]),
    ),
  )('keeps border-%s/%s beside a direction and a border colour', (type, interpolation) => {
    // Arrange
    const classes = `border-red-500 border-${type}/${interpolation} border-linear-to-r`;

    // Act
    const merged = tailwindMerge(classes);

    // Assert
    expect(
      merged,
      `/${interpolation} is a theme key in the CSS, so border-${type}/${interpolation} must carry the interpolation`,
    ).toBe(classes);
  });

  test.each(collectThemeKeys('jib-border-gradient-direction'))(
    'resolves border-linear-to-%s as a gradient direction',
    (direction) => {
      // Arrange
      const classes = `border-red-500 border-linear-to-${direction} border-linear-45`;

      // Act
      const merged = tailwindMerge(classes);

      // Assert
      expect(
        merged,
        `border-linear-to-${direction} is a theme key in the CSS, so it is a direction, not a border colour`,
      ).toBe('border-red-500 border-linear-45');
    },
  );

  test('createJibPlugin carries project gradient types and interpolations', () => {
    // Arrange
    const merge = extendTailwindMerge(
      createJibPlugin({ gradientTypes: ['diamond'], gradientInterpolations: ['brand'] }),
    );
    const classes = 'border-red-500 border-diamond border-linear/brand';

    // Act
    const merged = merge(classes);

    // Assert
    expect(
      merged,
      'a project-added type or interpolation must resolve to a jib group, not a border colour',
    ).toBe(classes);
  });
});

describe('tw-jib-css-merge/experimental', () => {
  test('registers no class group the stable config already registers', () => {
    // Arrange
    const stableGroups = Object.keys(jibExtension.extend?.classGroups ?? {});

    // Act
    const reregistered = Object.keys(jibExperimentalExtension.extend?.classGroups ?? {}).filter(
      (group) => stableGroups.includes(group),
    );

    // Assert
    expect(
      reregistered,
      'extend concatenates, so a group in both configs registers its classes twice when they are composed',
    ).toEqual([]);
  });

  test('every @utility in tw-jib-css-experimental names a class path once composed with stable', () => {
    // Arrange
    const claimedPaths = new Set([
      ...defaultClassPaths,
      ...stableClassPaths,
      ...experimentalClassPaths,
    ]);

    // Act
    const unclaimed = collectUtilityRoots('tw-jib-css-experimental/src').filter(
      (root) => !claimedPaths.has(root) && !tailwindOwnedByValidator.has(root),
    );

    // Assert
    expect(unclaimed, UNCLAIMED_MESSAGE).toEqual([]);
  });

  describe.each(experimentalMerges)('through %s', (_engine, merge) => {
    describeColourTransforms(merge);

    test.each([...STABLE_KEPT, ...EXPERIMENTAL_KEPT])('keeps %s', (_scenario, classes) => {
      // Act
      const merged = merge(classes);

      // Assert
      expect(merged, `${classes} compose, so twMerge must keep every class`).toBe(classes);
    });

    test.each([...STABLE_RESOLVED, ...EXPERIMENTAL_RESOLVED])(
      'resolves %s to the last',
      (_scenario, classes, winner) => {
        // Act
        const merged = merge(classes);

        // Assert
        expect(merged, `${classes} set the same thing, so only the last should survive`).toBe(
          winner,
        );
      },
    );

    test('every class list in the fixtures survives unchanged', () => {
      // Arrange
      const classLists = [
        ...collectFixtureClassLists('docs/examples'),
        ...collectFixtureClassLists('docs-experimental/examples'),
      ];

      // Act
      const altered = classLists.filter((list) => merge(list.classes) !== expectedMerge(list));

      // Assert
      expect(classLists.length, 'the fixture glob must find class lists to check').toBeGreaterThan(
        0,
      );
      expect(altered, FIXTURE_MESSAGE).toEqual([]);
    });
  });
});

describe('tw-jib-css-merge module sub-paths', () => {
  test('every tw-jib-css entry has a merge sub-path of the same name', () => {
    // Arrange
    const mergeModules = STABLE_MODULES.map((module) => module.name);

    // Act
    const missing = collectCssEntries('tw-jib-css').filter(
      (entry) => !mergeModules.includes(entry),
    );

    // Assert
    expect(
      missing,
      'a CSS module a project can import alone needs a merge config it can take alone',
    ).toEqual([]);
  });

  test('every tw-jib-css-experimental entry has a merge sub-path under experimental/', () => {
    // Arrange
    const mergeModules = EXPERIMENTAL_MODULES.map((module) => module.name);

    // Act
    const missing = collectCssEntries('tw-jib-css-experimental').filter(
      (entry) => !mergeModules.includes(entry) && !CONFIG_FREE_EXPERIMENTAL_ENTRIES.includes(entry),
    );

    // Assert
    expect(
      missing,
      'a CSS module a project can import alone needs a merge config it can take alone',
    ).toEqual([]);
  });

  test.each(STABLE_MODULES)(
    'every @utility in tw-jib-css/$name names a class path in its own config',
    ({ name, extension }) => {
      // Arrange
      const claimedPaths = new Set([
        ...defaultClassPaths,
        ...collectClassPaths(extension.extend?.classGroups ?? {}),
      ]);
      const roots = collectCssEntryImports('tw-jib-css', name)
        .filter((folder) => folder !== 'core')
        .flatMap((folder) => collectUtilityRoots(`tw-jib-css/src/${folder}`));

      // Act
      const unclaimed = roots.filter((root) => !claimedPaths.has(root));

      // Assert
      expect(roots.length, `the ${name} entry must import utilities to check`).toBeGreaterThan(0);
      expect(unclaimed, UNCLAIMED_MESSAGE).toEqual([]);
    },
  );

  test.each(EXPERIMENTAL_MODULES)(
    'every @utility in tw-jib-css-experimental/$name names a class path in its own config',
    ({ name, extension }) => {
      // Arrange
      const claimedPaths = new Set([
        ...defaultClassPaths,
        ...collectClassPaths(extension.extend?.classGroups ?? {}),
      ]);
      const roots = collectCssEntryImports('tw-jib-css-experimental', name).flatMap((folder) =>
        collectUtilityRoots(`tw-jib-css-experimental/src/${folder}`),
      );

      // Act
      const unclaimed = roots.filter((root) => !claimedPaths.has(root));

      // Assert
      expect(roots.length, `the ${name} entry must import utilities to check`).toBeGreaterThan(0);
      expect(unclaimed, UNCLAIMED_MESSAGE).toEqual([]);
    },
  );

  test('the classes the functions entry re-implements are named by the color-transforms and automatic-contrast configs', () => {
    // Arrange
    const claimedPaths = new Set([
      ...defaultClassPaths,
      ...collectClassPaths(jibColorTransformsExtension.extend?.classGroups ?? {}),
      ...collectClassPaths(jibAutomaticContrastExtension.extend?.classGroups ?? {}),
    ]);
    const roots = collectCssEntryImports('tw-jib-css-experimental', 'functions').flatMap((folder) =>
      collectUtilityRoots(`tw-jib-css-experimental/src/${folder}`),
    );

    // Act
    const unclaimed = roots.filter((root) => !claimedPaths.has(root));

    // Assert
    expect(roots.length, 'the functions entry must import utilities to check').toBeGreaterThan(0);
    expect(
      unclaimed,
      'functions has no config of its own, so the stable modules it overrides must cover it',
    ).toEqual([]);
  });

  test('no jib class group is registered by two module configs', () => {
    // Arrange
    const owners = [...STABLE_MODULES, ...EXPERIMENTAL_MODULES].flatMap((module) =>
      Object.keys(module.extension.extend?.classGroups ?? {})
        .filter((group) => group.startsWith('jib.'))
        .map((group) => [group, module.name] as const),
    );

    // Act
    const shared = owners.filter(
      ([group], index) => owners.findIndex(([other]) => other === group) !== index,
    );

    // Assert
    expect(
      shared,
      'extend concatenates, so a group in two modules registers its classes twice when they are composed',
    ).toEqual([]);
  });
});
