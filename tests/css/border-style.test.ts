import { describe, test, expect } from 'vitest';
import { compile } from './helpers.js';

describe('border-style utilities', () => {
  test('border-t-dashed sets border-top-style', async () => {
    const css = await compile('border-t-dashed');
    expect(css).toContain('border-top-style: dashed');
  });

  test('border-b-dotted sets border-bottom-style', async () => {
    const css = await compile('border-b-dotted');
    expect(css).toContain('border-bottom-style: dotted');
  });

  test('border-x-double sets border-inline-style', async () => {
    const css = await compile('border-x-double');
    expect(css).toContain('border-inline-style: double');
  });
});
