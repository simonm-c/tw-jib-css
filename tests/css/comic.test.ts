import { describe, test, expect } from 'vitest';
import { suiteScenarios } from './helpers.js';

describe.each(suiteScenarios('comic'))('comic utilities, $name', ({ compile }) => {
  describe('bg-comic-*', () => {
    test('bg-comic-red-500 generates radial-gradient with multiply blend', async () => {
      const css = await compile('bg-comic-red-500');
      expect(css).toContain('radial-gradient');
      expect(css).toContain(
        'background-blend-mode: normal, multiply, multiply, multiply, multiply, normal, normal',
      );
    });

    test('bg-comic-red-500 extracts CMYK channels via relative color syntax', async () => {
      const css = await compile('bg-comic-red-500');
      expect(css).toContain('0 255 255');
      expect(css).toContain('255 0 255');
      expect(css).toContain('255 255 0');
      expect(css).toContain('0 0 0');
    });

    test('bg-comic-red-500 has white base layer in --jib-background-image', async () => {
      const css = await compile('bg-comic-red-500');
      expect(css).toContain('linear-gradient(rgb(255 255 255');
    });

    test('bg-comic-red-500/50 sets opacity modifier', async () => {
      const css = await compile('bg-comic-red-500/50');
      expect(css).toContain('0.01');
    });

    test.each([
      ['cyan', 'var(--jib-background-position-x) var(--jib-background-position-y)'],
      [
        'magenta',
        'calc(var(--jib-background-position-x) + var(--jib-comic-cell) / 2) calc(var(--jib-background-position-y) + var(--jib-comic-cell) / 2)',
      ],
      [
        'yellow',
        'calc(var(--jib-background-position-x) + var(--jib-comic-cell) / 2) var(--jib-background-position-y)',
      ],
      [
        'key',
        'var(--jib-background-position-x) calc(var(--jib-background-position-y) + var(--jib-comic-cell) / 2)',
      ],
    ])('the %s screen sits on the bg-position anchor plus its offset', async (screen, position) => {
      // Arrange
      // Act
      const css = await compile('bg-comic-red-500');

      // Assert
      expect(
        css,
        `the ${screen} dots must follow bg-position, or animating comic-dot grows them from the top left`,
      ).toContain(`) ${position} / var(--jib-comic-cell) var(--jib-comic-cell)`);
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
      expect(css).toContain('--jib-comic-dot');
    });

    test('comic-dot-[3px] accepts arbitrary length', async () => {
      const css = await compile('comic-dot-[3px]');
      expect(css).toContain('--jib-comic-dot: 3px');
    });
  });

  describe('comic-bleed-*', () => {
    test('comic-bleed-2 sets bleed with spacing/4 scaling', async () => {
      const css = await compile('comic-bleed-2');
      expect(css).toContain('--jib-comic-bleed');
    });

    test('comic-bleed-[2px] accepts arbitrary length', async () => {
      const css = await compile('comic-bleed-[2px]');
      expect(css).toContain('--jib-comic-bleed: 2px');
    });
  });

  describe('comic-gap-*', () => {
    test('comic-gap-4 sets gap with spacing/4 scaling', async () => {
      const css = await compile('comic-gap-4');
      expect(css).toContain('--jib-comic-gap');
    });

    test('comic-gap-[5px] accepts arbitrary length', async () => {
      const css = await compile('comic-gap-[5px]');
      expect(css).toContain('--jib-comic-gap: 5px');
    });
  });
});
