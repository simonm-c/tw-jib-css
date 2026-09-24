import { compile as twCompile } from '@tailwindcss/node';
import { resolve } from 'node:path';

const repoRoot = resolve(import.meta.dirname, '../..');

const STABLE = './packages/tw-jib-css/src/index.css';
const EXPERIMENTAL = './packages/tw-jib-css-experimental/src/index.css';
const FUNCTIONS = './packages/tw-jib-css-experimental/src/functions.css';

/** Real @import statements, not inlined text: the packages sit in different
 *  directories and no single base resolves both. */
export async function compile(
  classes: string,
  opts?: { experimental?: boolean; functions?: boolean; extra?: string },
): Promise<string> {
  const entries = [STABLE];
  if (opts?.experimental) entries.push(EXPERIMENTAL);
  if (opts?.functions) entries.push(FUNCTIONS);

  return compileEntries(entries, classes, opts?.extra);
}

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

export type Suite =
  | 'border-gradient'
  | 'border-style'
  | 'color-transforms'
  | 'automatic-contrast'
  | 'ripple'
  | 'grid'
  | 'comic'
  | 'pixel';

export interface Scenario {
  name: string;
  compile: (classes: string, opts?: { extra?: string }) => Promise<string>;
}

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
      name: suites.map((suite) => `tw-jib-css/${suite}`).join(' + '),
      compile: (classes, opts) => compileEntries(entries, classes, opts?.extra),
    },
  ];
}

export function registration(css: string, name: string): string | undefined {
  return css.match(new RegExp(`@property ${name} \\{[\\s\\S]*?\\n\\}`))?.[0];
}
