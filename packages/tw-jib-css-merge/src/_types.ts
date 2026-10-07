import type { ConfigExtension, DefaultClassGroupIds, DefaultThemeGroupIds } from 'tailwind-merge';

export type JibExtensionOf<ClassGroupIds extends string> = ConfigExtension<
  DefaultClassGroupIds | ClassGroupIds,
  DefaultThemeGroupIds
>;

/** Generic over the config so cn's extendTailwindMerge accepts it as well. */
export type JibPlugin = <TConfig extends object>(config: TConfig) => TConfig;

export interface JibOptions {
  /** Keys added to the `--jib-border-gradient-type-*` theme namespace. */
  gradientTypes?: readonly string[];
  /** Keys added to the `--jib-gradient-interpolation-*` theme namespace. */
  gradientInterpolations?: readonly string[];
}
