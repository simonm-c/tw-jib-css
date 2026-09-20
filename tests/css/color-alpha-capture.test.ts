import { describe, test, expect } from 'vitest';
import { readdir, readFile } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';
import { compile } from './helpers.js';

const packagesRoot = resolve(import.meta.dirname, '../../packages');

/** [utility prefix, the custom property it sets] */
const CAPTURES: [string, string][] = [
  ['bg', '--jib-background-color-source'],
  ['text', '--jib-text-color-source'],
  ['fill', '--jib-fill-color-source'],
  ['stroke', '--jib-stroke-color-source'],
  ['outline', '--jib-outline-color-source'],
  ['accent', '--jib-accent-color-source'],
  ['border', '--jib-border-color-source'],
  ['ripple-color', '--jib-ripple-color'],
  ['border-from', '--jib-border-gradient-from'],
  ['border-via', '--jib-border-gradient-via'],
  ['border-to', '--jib-border-gradient-to'],
];

/** [alpha modifier, the alpha argument it compiles to] */
const FORMS: [string, string][] = [
  ['/50', 'calc(50 * 1%)'],
  ['/[50%]', '50%'],
  ['/[.5]', 'calc(.5 * 100%)'],
];

async function utilityBlocks(): Promise<{ file: string; name: string; body: string }[]> {
  const blocks: { file: string; name: string; body: string }[] = [];

  for (const path of await readdir(packagesRoot, { recursive: true, withFileTypes: true })) {
    if (!path.isFile() || !path.name.endsWith('.css')) continue;
    const full = join(path.parentPath, path.name);
    if (!full.includes(`${resolve(packagesRoot)}/`) || !full.includes('/src/')) continue;

    const css = await readFile(full, 'utf8');
    for (const match of css.matchAll(/@utility\s+([^\s{]+)\s*\{/g)) {
      let depth = 1;
      let i = match.index + match[0].length;
      for (; i < css.length && depth > 0; i++) {
        if (css[i] === '{') depth++;
        else if (css[i] === '}') depth--;
      }
      blocks.push({
        file: relative(packagesRoot, full),
        name: match[1],
        body: css.slice(match.index + match[0].length, i - 1),
      });
    }
  }

  return blocks;
}

describe.each(CAPTURES)('%s-* captures the alpha modifier', (prefix, property) => {
  test.each(FORMS)(`${prefix}-red-500%s`, async (form, alpha) => {
    const css = await compile(`${prefix}-red-500${form}`);
    expect(css, `${prefix}-* emitted no capture for the theme colour`).toContain(
      `${property}: color-mix(in oklab, var(--color-red-500) ${alpha}, transparent)`,
    );
  });

  test('arbitrary colour value', async () => {
    const css = await compile(`${prefix}-[#f00]/50`);
    expect(css, `${prefix}-* emitted no capture for an arbitrary colour`).toContain(
      `${property}: color-mix(in oklab, #f00 calc(50 * 1%), transparent)`,
    );
  });
});

describe('gradient stop positions, which carry no colour', () => {
  test.each([
    ['border-from-30%', '--jib-border-gradient-from-position: 30%'],
    ['border-via-50%', '--jib-border-gradient-via-position: 50%'],
    ['border-to-80%', '--jib-border-gradient-to-position: 80%'],
  ])('%s still compiles beside the alpha forms', async (utility, expected) => {
    const css = await compile(`border-linear-to-r ${utility}`);
    expect(css).toContain(expected);
  });
});

test('every @utility that takes a colour also reads a modifier', async () => {
  const takesColour = (await utilityBlocks()).filter(
    ({ body }) => body.includes('--color- *') || body.includes('[color]'),
  );

  expect(takesColour.length, 'the colour-capture scan matched nothing').toBeGreaterThan(0);
  expect(
    takesColour
      .filter(({ body }) => !body.includes('--modifier('))
      .map(({ file, name }) => `${file}: @utility ${name}`),
    'a colour utility with no --modifier() silently emits nothing for classes carrying /alpha',
  ).toEqual([]);
});
