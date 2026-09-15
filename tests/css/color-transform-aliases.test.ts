import { describe, test, expect } from 'vitest';
import { compile } from './helpers.js';

/** [alias, primitive it forwards to, whether it negates the amount] */
const ALIASES: [string, string, boolean][] = [
  ['lighten', 'lightness', false],
  ['darken', 'lightness', true],
  ['saturate', 'saturation', false],
  ['desaturate', 'saturation', true],
];

/** Signature runs `@function --jib-<name>(…) returns <color> {`, whose own
 *  parens rule out a lazy match up to the first `)`. */
function body(css: string, name: string): string | undefined {
  return css.match(new RegExp(`@function --jib-${name}\\([\\s\\S]*?\\{([\\s\\S]*?)\\}`))?.[1];
}

describe('directional alias functions', () => {
  describe.each(ALIASES)('--jib-%s', (alias, primitive, negates) => {
    test('is defined by the experimental entry', async () => {
      const css = await compile('bg-blue-500', { experimental: true });
      expect(css).toContain(`@function --jib-${alias}(`);
    });

    test('is reachable from the functions subpath alone', async () => {
      const css = await compile('bg-blue-500', { functions: true });
      expect(css).toContain(`@function --jib-${alias}(`);
    });

    test('is absent from the main entry, which never runs @function', async () => {
      const css = await compile('bg-blue-500');
      expect(css).not.toContain(`@function --jib-${alias}(`);
    });

    test(`forwards to --jib-${primitive}`, async () => {
      const css = await compile('bg-blue-500', { experimental: true });
      expect(body(css, alias)).toContain(`--jib-${primitive}(var(--color),`);
    });

    test(
      negates
        ? 'negates the amount, so a positive argument moves in the named direction'
        : 'passes the amount through unchanged',
      async () => {
        const css = await compile('bg-blue-500', { experimental: true });
        expect(body(css, alias)).toContain(
          negates ? 'calc(var(--amount) * -1)' : 'var(--color), var(--amount),',
        );
      },
    );

    test('forwards the interpolation space rather than pinning oklch', async () => {
      const css = await compile('bg-blue-500', { experimental: true });
      expect(body(css, alias)).toContain('var(--interpolation)');
    });

    test('defaults the amount to 0, so a bare call is identity', async () => {
      const css = await compile('bg-blue-500', { experimental: true });
      expect(css).toContain(
        `@function --jib-${alias}(--color type(<color>): currentColor, --amount type(<number>): 0`,
      );
    });
  });
});
