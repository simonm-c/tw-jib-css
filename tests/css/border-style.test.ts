import { describe, test, expect } from 'vitest';
import { suiteScenarios } from './helpers.js';

describe.each(suiteScenarios('border-style'))('border-style utilities — $name', ({ compile }) => {
  // --- directions (one style each) ---

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

  test('border-l-solid sets border-left-style', async () => {
    const css = await compile('border-l-solid');
    expect(css).toContain('border-left-style: solid');
  });

  test('border-r-groove sets border-right-style', async () => {
    const css = await compile('border-r-groove');
    expect(css).toContain('border-right-style: groove');
  });

  test('border-y-ridge sets border-block-style', async () => {
    const css = await compile('border-y-ridge');
    expect(css).toContain('border-block-style: ridge');
  });

  test('border-s-inset sets border-inline-start-style', async () => {
    const css = await compile('border-s-inset');
    expect(css).toContain('border-inline-start-style: inset');
  });

  test('border-e-outset sets border-inline-end-style', async () => {
    const css = await compile('border-e-outset');
    expect(css).toContain('border-inline-end-style: outset');
  });

  // --- style values (using border-t-* as the direction) ---

  test('border-t-solid', async () => {
    const css = await compile('border-t-solid');
    expect(css).toContain('border-top-style: solid');
  });

  test('border-t-groove', async () => {
    const css = await compile('border-t-groove');
    expect(css).toContain('border-top-style: groove');
  });

  test('border-t-ridge', async () => {
    const css = await compile('border-t-ridge');
    expect(css).toContain('border-top-style: ridge');
  });

  test('border-t-inset', async () => {
    const css = await compile('border-t-inset');
    expect(css).toContain('border-top-style: inset');
  });

  test('border-t-outset', async () => {
    const css = await compile('border-t-outset');
    expect(css).toContain('border-top-style: outset');
  });

  test('border-t-none', async () => {
    const css = await compile('border-t-none');
    expect(css).toContain('border-top-style: none');
  });

  test('border-t-hidden', async () => {
    const css = await compile('border-t-hidden');
    expect(css).toContain('border-top-style: hidden');
  });
});
