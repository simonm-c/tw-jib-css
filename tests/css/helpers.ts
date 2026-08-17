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
  const entries = [STABLE];
  if (opts?.experimental) entries.push(EXPERIMENTAL);
  if (opts?.functions) entries.push(FUNCTIONS);

  return compileEntries(entries, classes, opts?.extra);
}

/**
 * Compile against an arbitrary set of entry files, in the order given.
 *
 * `compile` is the one to reach for; this exists for the per-suite subpaths,
 * where the entry under test is the subject rather than a flag on the default.
 */
export async function compileEntries(
  entries: string[],
  classes: string,
  extra?: string,
): Promise<string> {
  const input = `
@import 'tailwindcss';
${entries.map((entry) => `@import '${entry}';`).join('\n')}
${extra ?? ''}
`;

  const compiler = await twCompile(input, {
    base: repoRoot,
    onDependency: () => {},
  });
  const candidates = classes.split(/\s+/).filter(Boolean);
  const result = compiler.build(candidates);
  return result;
}

/** The per-suite entries `tw-jib-css` exports as subpaths. */
export type Suite =
  | 'border-gradient'
  | 'border-style'
  | 'color-transforms'
  | 'accessible-shade'
  | 'ripple'
  | 'grid'
  | 'comic'
  | 'pixel';

export interface Scenario {
  /** Reads as the consumer's import line, so a failure names the setup. */
  name: string;
  compile: (classes: string, opts?: { extra?: string }) => Promise<string>;
}

/**
 * The three ways a consumer can reach a suite's utilities. Every suite's tests
 * run against all three, because each is a separate published contract:
 *
 *   tw-jib-css                what someone who opted into nothing gets
 *   + tw-jib-css-experimental the same utilities with the overrides loaded over
 *                             them — the only combination that can catch a newer
 *                             import regressing a utility that already worked
 *   tw-jib-css/<suite>        the subpath taken WITHOUT the umbrella entry,
 *                             which has to stand up on its own
 *
 * Running one suite's assertions under all three is not repetition: each is
 * something a consumer can actually write, and they can diverge.
 */
/**
 * The two ways to reach the STABLE implementation of a suite, and only those.
 *
 * For assertions about how the stable chain is built — that a space needs no
 * @supports gate, that a property reads one link rather than another — rather
 * than about what the utility does. Loading the experimental overrides replaces
 * that mechanism on purpose, so such a claim is false there without anything
 * being broken. Behavioural assertions belong in `suiteScenarios`, which does
 * include the experimental load.
 */
export function stableScenarios(suite: Suite): Scenario[] {
  const [stable, , subpath] = suiteScenarios(suite);
  return [stable, subpath];
}

export function suiteScenarios(...suites: Suite[]): Scenario[] {
  const entries = suites.map((suite) => `./packages/tw-jib-css/src/${suite}.css`);
  return [
    {
      name: 'tw-jib-css',
      compile: (classes, opts) => compileEntries([STABLE], classes, opts?.extra),
    },
    {
      name: 'tw-jib-css + tw-jib-css-experimental',
      compile: (classes, opts) => compileEntries([STABLE, EXPERIMENTAL], classes, opts?.extra),
    },
    {
      // Several suites means a test that composes across them: the subpath
      // scenario has to import each one, exactly as such a consumer would.
      name: suites.map((suite) => `tw-jib-css/${suite}`).join(' + '),
      compile: (classes, opts) => compileEntries(entries, classes, opts?.extra),
    },
  ];
}
