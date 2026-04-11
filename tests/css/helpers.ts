import { compile as twCompile } from '@tailwindcss/node';
import { resolve } from 'node:path';
import { readFile } from 'node:fs/promises';

const srcDir = resolve(import.meta.dirname, '../../src');

/**
 * Compile a set of utility classes against tw-jib-css and return the generated CSS.
 *
 * Uses Tailwind's own compilation API so we test real output, not approximations.
 * Pass a single class or space-separated classes.
 * Set `experimental: true` to also include the experimental module.
 */
export async function compile(classes: string, opts?: { experimental?: boolean }): Promise<string> {
  const indexCss = await readFile(resolve(srcDir, 'index.css'), 'utf-8');
  const experimentalCss = opts?.experimental
    ? await readFile(resolve(srcDir, 'experimental.css'), 'utf-8')
    : '';

  const input = `
@import 'tailwindcss';
${indexCss}
${experimentalCss}
`;

  const compiler = await twCompile(input, {
    base: srcDir,
    onDependency: () => {},
  });
  const candidates = classes.split(/\s+/).filter(Boolean);
  const result = compiler.build(candidates);
  return result;
}
