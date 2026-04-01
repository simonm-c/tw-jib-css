import { compile as twCompile } from '@tailwindcss/node';
import { resolve } from 'node:path';
import { readFile } from 'node:fs/promises';

const srcDir = resolve(import.meta.dirname, '../../src');

/**
 * Compile a set of utility classes against tw-jib-css and return the generated CSS.
 *
 * Uses Tailwind's own compilation API so we test real output, not approximations.
 */
export async function compile(classes: string): Promise<string> {
  const indexCss = await readFile(resolve(srcDir, 'index.css'), 'utf-8');

  const input = `
${indexCss}

@tailwind utilities;
`;

  const compiler = await twCompile(input, {
    base: srcDir,
    onDependency: () => {},
  });
  const result = compiler.build([classes]);
  return result;
}
