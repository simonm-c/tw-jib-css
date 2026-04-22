import { describe, test, expect } from 'vitest';
import { compile } from './helpers.js';

describe('scrollbar utilities', () => {
  test('scrollbar-auto sets scrollbar-color: auto', async () => {
    const css = await compile('scrollbar-auto');
    expect(css).toContain('scrollbar-color: auto');
  });

  test('scrollbar-red-500 sets thumb color', async () => {
    const css = await compile('scrollbar-red-500');
    expect(css).toContain('--tw-jib--scrollbar-thumb');
    expect(css).toContain('scrollbar-color:');
  });

  test('scrollbar-thumb-blue-500 sets thumb independently', async () => {
    const css = await compile('scrollbar-thumb-blue-500');
    expect(css).toContain('--tw-jib--scrollbar-thumb');
    expect(css).toContain('scrollbar-color:');
  });

  test('scrollbar-track-gray-100 sets track independently', async () => {
    const css = await compile('scrollbar-track-gray-100');
    expect(css).toContain('--tw-jib--scrollbar-track');
    expect(css).toContain('scrollbar-color:');
  });

  test('scrollbar-thumb-blue-500/50 supports opacity modifier', async () => {
    const css = await compile('scrollbar-thumb-blue-500/50');
    expect(css).toContain('--tw-jib--scrollbar-thumb');
  });

  test('scrollbar-width-thin sets scrollbar-width', async () => {
    const css = await compile('scrollbar-width-thin');
    expect(css).toContain('scrollbar-width: thin');
  });

  test('scrollbar-width-none hides scrollbar', async () => {
    const css = await compile('scrollbar-width-none');
    expect(css).toContain('scrollbar-width: none');
  });

  test('scrollbar-gutter-stable sets scrollbar-gutter', async () => {
    const css = await compile('scrollbar-gutter-stable');
    expect(css).toContain('scrollbar-gutter: stable');
  });

  test('scrollbar-gutter-stable-both sets both-edges', async () => {
    const css = await compile('scrollbar-gutter-stable-both');
    expect(css).toContain('scrollbar-gutter: stable both-edges');
  });
});
