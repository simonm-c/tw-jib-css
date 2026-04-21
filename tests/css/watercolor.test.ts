import { describe, test, expect } from 'vitest';
import { compile } from './helpers.js';

describe('watercolor utilities', () => {
  describe('bg-watercolor-*', () => {
    test('bg-watercolor-red-500 generates radial-gradient with multiply blend', async () => {
      const css = await compile('bg-watercolor-red-500');
      expect(css).toContain('radial-gradient');
      expect(css).toContain(
        'background-blend-mode: normal, multiply, multiply, multiply, multiply, multiply, multiply, multiply, multiply, multiply, multiply, multiply, multiply, multiply, multiply, multiply, multiply, multiply, multiply, normal, normal',
      );
    });

    test('bg-watercolor-red-500 has balanced parentheses in --tw-jib--background-image', async () => {
      const css = await compile('bg-watercolor-red-500');
      const prop = '--tw-jib--background-image:';
      const start = css.indexOf(prop);
      const end = css.indexOf('padding-box;', start);
      const value = css.slice(start, end + 'padding-box;'.length);
      let opens = 0;
      let closes = 0;
      for (const ch of value) {
        if (ch === '(') opens++;
        if (ch === ')') closes++;
      }
      expect(opens).toBe(closes);
    });

    test('bg-watercolor-red-500 has white paper base layer', async () => {
      const css = await compile('bg-watercolor-red-500');
      expect(css).toContain('linear-gradient(rgb(255 255 255');
    });

    test('bg-watercolor-red-500/50 sets opacity modifier', async () => {
      const css = await compile('bg-watercolor-red-500/50');
      expect(css).toContain('0.01');
    });

    test('bg-watercolor-[#ff6600] accepts arbitrary color', async () => {
      const css = await compile('bg-watercolor-[#ff6600]');
      expect(css).toContain('radial-gradient');
      expect(css).toContain('#ff6600');
    });
  });

  describe('watercolor-wash-*', () => {
    test('watercolor-wash-1 sets wash level', async () => {
      const css = await compile('watercolor-wash-1');
      expect(css).toContain('--tw-jib--wc-wash: 1');
    });

    test('watercolor-wash-[2.5] accepts arbitrary number', async () => {
      const css = await compile('watercolor-wash-[2.5]');
      expect(css).toContain('--tw-jib--wc-wash:');
    });
  });
});
