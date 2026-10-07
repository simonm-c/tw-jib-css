import { fromTheme, mergeConfigs, validators } from 'tailwind-merge';
import type { Config, ConfigExtension, DefaultThemeGroupIds } from 'tailwind-merge';
import type { JibExtensionOf, JibPlugin } from './_types.js';

const { isArbitraryValue, isArbitraryVariable, isInteger, isNumber } = validators;

type ClassGroup = NonNullable<
  NonNullable<
    NonNullable<ConfigExtension<string, DefaultThemeGroupIds>['extend']>['classGroups']
  >[string]
>;

export const color: ClassGroup = [fromTheme('color'), isArbitraryVariable, isArbitraryValue];
export const integer: ClassGroup = [isInteger, isArbitraryVariable, isArbitraryValue];
export const number: ClassGroup = [isNumber, isArbitraryVariable, isArbitraryValue];
export const arbitrary: ClassGroup = [isArbitraryVariable, isArbitraryValue];

function concatEntries<Key extends string, Value>(
  records: readonly Partial<Record<Key, readonly Value[]>>[],
): Partial<Record<Key, Value[]>> {
  const combined: Partial<Record<Key, Value[]>> = {};
  for (const record of records) {
    for (const key of Object.keys(record) as Key[]) {
      combined[key] = [...(combined[key] ?? []), ...(record[key] ?? [])];
    }
  }
  return combined;
}

/* Arrays concatenate per key, as extendTailwindMerge does with extensions passed
 * separately, so a core group two modules extend keeps both sets of classes. */
export function combineExtensions<ClassGroupIds extends string>(
  ...extensions: readonly JibExtensionOf<ClassGroupIds>[]
): JibExtensionOf<ClassGroupIds> {
  const parts = extensions.map((extension) => extension.extend ?? {});
  return {
    extend: {
      classGroups: concatEntries(parts.map((part) => part.classGroups ?? {})),
      conflictingClassGroups: concatEntries(parts.map((part) => part.conflictingClassGroups ?? {})),
      postfixLookupClassGroups: parts.flatMap((part) => part.postfixLookupClassGroups ?? []),
      orderSensitiveModifiers: parts.flatMap((part) => part.orderSensitiveModifiers ?? []),
    },
  };
}

export function toPlugin<ClassGroupIds extends string>(
  extension: JibExtensionOf<ClassGroupIds>,
): JibPlugin {
  /* cn hands the plugin its own config type, which mergeConfigs reads the same
   * way as tailwind-merge's, so the public signature is generic. */
  function plugin<TConfig extends object>(config: TConfig): TConfig;
  function plugin(config: Config<string, string>): Config<string, string> {
    return mergeConfigs(config, extension);
  }
  return plugin;
}
