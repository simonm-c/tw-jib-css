import { describe, test, expect } from 'vitest';
import { compile } from './helpers.js';

describe('comic utilities', () => {
  describe('bg-comic-*', () => {
    test('bg-comic-red-500 generates radial-gradient with multiply blend', async () => {
      const css = await compile('bg-comic-red-500');
      expect(css).toContain('radial-gradient');
      expect(css).toContain('background-blend-mode: normal, multiply, multiply, multiply, multiply, normal, normal');
    });

    test('bg-comic-red-500 extracts CMYK channels via relative color syntax', async () => {
      const css = await compile('bg-comic-red-500');
      // C channel (cyan)
      expect(css).toContain('0 255 255');
      // M channel (magenta)
      expect(css).toContain('255 0 255');
      // Y channel (yellow)
      expect(css).toContain('255 255 0');
      // K channel (black)
      expect(css).toContain('0 0 0');
    });

    test('bg-comic-red-500 has white base layer in --tw-jib--bg-image', async () => {
      const css = await compile('bg-comic-red-500');
      expect(css).toContain('linear-gradient(rgb(255 255 255');
    });

    test('bg-comic-red-500/50 sets opacity modifier', async () => {
      const css = await compile('bg-comic-red-500/50');
      expect(css).toContain('0.01');
    });

    test('bg-comic-[#ff6600] accepts arbitrary color', async () => {
      const css = await compile('bg-comic-[#ff6600]');
      expect(css).toContain('radial-gradient');
      expect(css).toContain('#ff6600');
    });
  });

  describe('comic-dot-*', () => {
    test('comic-dot-2 sets dot radius from spacing scale', async () => {
      const css = await compile('comic-dot-2');
      expect(css).toContain('--tw-jib--comic-dot');
    });

    test('comic-dot-[3px] accepts arbitrary length', async () => {
      const css = await compile('comic-dot-[3px]');
      expect(css).toContain('--tw-jib--comic-dot: 3px');
    });
  });

  describe('comic-bleed-*', () => {
    test('comic-bleed-2 sets bleed with spacing/4 scaling', async () => {
      const css = await compile('comic-bleed-2');
      expect(css).toContain('--tw-jib--comic-bleed');
    });

    test('comic-bleed-[2px] accepts arbitrary length', async () => {
      const css = await compile('comic-bleed-[2px]');
      expect(css).toContain('--tw-jib--comic-bleed: 2px');
    });
  });

  describe('comic-gap-*', () => {
    test('comic-gap-4 sets gap with spacing/4 scaling', async () => {
      const css = await compile('comic-gap-4');
      expect(css).toContain('--tw-jib--comic-gap');
    });

    test('comic-gap-[5px] accepts arbitrary length', async () => {
      const css = await compile('comic-gap-[5px]');
      expect(css).toContain('--tw-jib--comic-gap: 5px');
    });
  });
});
