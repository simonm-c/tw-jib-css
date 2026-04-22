import { describe, test, expect } from 'vitest';
import { compile } from './helpers.js';

describe('hatch utilities', () => {
  describe('bg-hatch-*', () => {
    test('bg-hatch-red-500 generates repeating-linear-gradient with multiply blend', async () => {
      const css = await compile('bg-hatch-red-500');
      expect(css).toContain('repeating-linear-gradient');
      expect(css).toContain('background-blend-mode: normal, multiply, multiply, multiply, normal, normal');
    });

    test('bg-hatch-red-500 uses oklch relative color syntax for ink derivation', async () => {
      const css = await compile('bg-hatch-red-500');
      expect(css).toContain('oklch(');
      expect(css).toContain('from var(--tw-jib--hatch-color)');
      // Ink formula: lightness squared, chroma doubled, hue preserved
      expect(css).toContain('calc(l * l)');
      expect(css).toContain('calc(c * 2)');
    });

    test('bg-hatch-red-500 has white paper base layer', async () => {
      const css = await compile('bg-hatch-red-500');
      expect(css).toContain('rgb(255 255 255');
    });

    test('bg-hatch-red-500/50 sets opacity modifier', async () => {
      const css = await compile('bg-hatch-red-500/50');
      expect(css).toContain('0.01');
    });

    test('bg-hatch-[#ff6600] accepts arbitrary color', async () => {
      const css = await compile('bg-hatch-[#ff6600]');
      expect(css).toContain('repeating-linear-gradient');
      expect(css).toContain('#ff6600');
    });
  });

  describe('hatch-angle-*', () => {
    test('hatch-angle-30 sets angle from number', async () => {
      const css = await compile('hatch-angle-30');
      expect(css).toContain('--tw-jib--hatch-angle');
    });

    test('hatch-angle-[45deg] accepts arbitrary angle', async () => {
      const css = await compile('hatch-angle-[45deg]');
      expect(css).toContain('--tw-jib--hatch-angle: 45deg');
    });
  });

  describe('hatch-stroke-*', () => {
    test('hatch-stroke-2 sets stroke from spacing/4 scale', async () => {
      const css = await compile('hatch-stroke-2');
      expect(css).toContain('--tw-jib--hatch-stroke');
    });

    test('hatch-stroke-[3px] accepts arbitrary length', async () => {
      const css = await compile('hatch-stroke-[3px]');
      expect(css).toContain('--tw-jib--hatch-stroke: 3px');
    });
  });

  describe('hatch-gap-*', () => {
    test('hatch-gap-4 sets gap from spacing/4 scale', async () => {
      const css = await compile('hatch-gap-4');
      expect(css).toContain('--tw-jib--hatch-gap');
    });

    test('hatch-gap-[5px] accepts arbitrary length', async () => {
      const css = await compile('hatch-gap-[5px]');
      expect(css).toContain('--tw-jib--hatch-gap: 5px');
    });
  });
});
