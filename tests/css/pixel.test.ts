import { describe, test, expect } from 'vitest';
import { compile } from './helpers.js';

describe('pixel utilities', () => {
  describe('bg-pixel-*', () => {
    test('bg-pixel-red-500 generates repeating-linear-gradient with screen blend', async () => {
      const css = await compile('bg-pixel-red-500');
      expect(css).toContain('repeating-linear-gradient');
      expect(css).toContain('background-blend-mode: normal, multiply, screen, screen, screen, normal');
    });

    test('bg-pixel-red-500 extracts RGB channels via relative color syntax', async () => {
      const css = await compile('bg-pixel-red-500');
      // R channel
      expect(css).toContain('r 0 0');
      // G channel
      expect(css).toContain('0 g 0');
      // B channel
      expect(css).toContain('0 0 b');
    });

    test('bg-pixel-red-500 has black background-color', async () => {
      const css = await compile('bg-pixel-red-500');
      expect(css).toContain('background-color: rgb(0 0 0');
    });

    test('bg-pixel-red-500/50 sets opacity modifier', async () => {
      const css = await compile('bg-pixel-red-500/50');
      expect(css).toContain('0.01');
    });

    test('bg-pixel-[#ff6600] accepts arbitrary color', async () => {
      const css = await compile('bg-pixel-[#ff6600]');
      expect(css).toContain('repeating-linear-gradient');
      expect(css).toContain('#ff6600');
    });
  });

  describe('pixel-size-*', () => {
    test('pixel-size-2 sets sub-pixel size from spacing scale', async () => {
      const css = await compile('pixel-size-2');
      expect(css).toContain('--tw-jib--pixel-size');
    });

    test('pixel-size-[5px] accepts arbitrary length', async () => {
      const css = await compile('pixel-size-[5px]');
      expect(css).toContain('--tw-jib--pixel-size: 5px');
    });
  });

  describe('pixel-gap-*', () => {
    test('pixel-gap-2 sets gap multiplier', async () => {
      const css = await compile('pixel-gap-2');
      expect(css).toContain('--tw-jib--pixel-gap: 2');
    });

    test('pixel-gap-[number:0.5] accepts arbitrary number', async () => {
      const css = await compile('pixel-gap-[number:0.5]');
      expect(css).toContain('--tw-jib--pixel-gap:');
    });
  });

  describe('pixel-bleed-*', () => {
    test('pixel-bleed-1 sets bleed with spacing/4 scaling', async () => {
      const css = await compile('pixel-bleed-1');
      expect(css).toContain('--tw-jib--pixel-bleed');
    });

    test('pixel-bleed-[2px] accepts arbitrary length', async () => {
      const css = await compile('pixel-bleed-[2px]');
      expect(css).toContain('--tw-jib--pixel-bleed: 2px');
    });
  });
});
