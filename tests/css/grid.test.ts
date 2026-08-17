import { describe, test, expect } from 'vitest';
import { suiteScenarios } from './helpers.js';

describe.each(suiteScenarios('grid'))('grid utilities – $name', ({ compile }) => {
  test('grid-area-[sidebar] sets named grid-area', async () => {
    const css = await compile('grid-area-[sidebar]');
    expect(css).toContain('grid-area: sidebar');
  });

  test('grid-area-1 sets numeric grid-area', async () => {
    const css = await compile('grid-area-1');
    expect(css).toContain('grid-area: 1');
  });

  test('grid-template-areas accepts arbitrary value', async () => {
    const css = await compile("grid-template-areas-['header_header'_'sidebar_main']");
    expect(css).toContain('grid-template-areas:');
  });
});
