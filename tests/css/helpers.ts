import { compile as twCompile } from '@tailwindcss/node';
import { resolve } from 'node:path';

const repoRoot = resolve(import.meta.dirname, '../..');

const STABLE = './packages/tw-jib-css/src/index.css';
const EXPERIMENTAL = './packages/tw-jib-css-experimental/src/index.css';
const FUNCTIONS = './packages/tw-jib-css-experimental/src/functions.css';

/**
 * Compile one or more space-separated utility classes and return the generated CSS.
 *
 * The flags select which published artifact is under test, and the difference is
 * the point:
 *
 *   (neither)            tw-jib-css alone — what a consumer who opted into
 *                        nothing gets. Must never run @function.
 *   experimental: true   tw-jib-css-experimental — EVERYTHING experimental,
 *                        the @function overrides included.
 *   functions: true      tw-jib-css-experimental/functions — the overrides
 *                        WITHOUT the additions.
 *
 * Emitted in that order because source order is what carries the override.
 *
 * Composed as real @import statements rather than by inlining file text: the
 * packages live in different directories, so no single base makes inlined
 * relative imports resolve.
 *
 * `extra` appends consumer-side CSS — a consumer's own `@theme` block, say, to
 * check that a themeable namespace really is themeable.
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
