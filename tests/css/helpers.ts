import { compile as twCompile } from '@tailwindcss/node';
import { resolve } from 'node:path';

const repoRoot = resolve(import.meta.dirname, '../..');

const STABLE = './packages/tw-jib-css/src/index.css';
const EXPERIMENTAL = './packages/tw-jib-css-experimental/src/index.css';
const FUNCTIONS = './packages/tw-jib-css-experimental/src/functions.css';

/**
 * Compile a set of utility classes against the packages and return the generated CSS.
 *
 * Uses Tailwind's own compilation API so we test real output, not approximations.
 * Pass a single class or space-separated classes.
 *
 * The entries are separate flags because they are separate published artifacts,
 * and the difference is the point:
 *
 *   (neither)            tw-jib-css alone — what a consumer who opted into
 *                        nothing gets. Must never run @function.
 *   experimental: true   tw-jib-css-experimental — EVERYTHING experimental,
 *                        the @function overrides included.
 *   functions: true      tw-jib-css-experimental/functions — the overrides
 *                        WITHOUT the additions.
 *
 * Order mirrors the documented consumer order: stable, then experimental, then
 * functions. Source order is what carries the override.
 *
 * Composed as real @import statements resolved from the repo root, rather than
 * by inlining file text: the two packages live in different directories, so
 * there is no single base that makes inlined relative imports resolve. Letting
 * Tailwind resolve each file's imports relative to that file is both correct
 * and closer to what a consumer's build does.
 *
 * Pass `extra` to append consumer-side CSS — a consumer's own `@theme` block,
 * for instance, to check that a themeable namespace really is themeable.
 */
export async function compile(
  classes: string,
  opts?: { experimental?: boolean; functions?: boolean; extra?: string },
): Promise<string> {
  const entries = [`@import '${STABLE}';`];
  if (opts?.experimental) entries.push(`@import '${EXPERIMENTAL}';`);
  if (opts?.functions) entries.push(`@import '${FUNCTIONS}';`);

  const input = `
@import 'tailwindcss';
${entries.join('\n')}
${opts?.extra ?? ''}
`;

  const compiler = await twCompile(input, {
    base: repoRoot,
    onDependency: () => {},
  });
  const candidates = classes.split(/\s+/).filter(Boolean);
  const result = compiler.build(candidates);
  return result;
}
