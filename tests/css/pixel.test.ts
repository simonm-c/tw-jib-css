import { describe, test, expect } from 'vitest';
import { suiteScenarios } from './helpers.js';

describe.each(suiteScenarios('pixel'))('pixel utilities, $name', ({ compile }) => {
  describe('bg-pixel-*', () => {
    test('bg-pixel-red-500 generates repeating-linear-gradient with screen blend', async () => {
      const css = await compile('bg-pixel-red-500');
      expect(css).toContain('repeating-linear-gradient');
      expect(css).toContain(
        'background-blend-mode: normal, multiply, screen, screen, screen, normal, normal',
      );
    });

    test('bg-pixel-red-500 extracts RGB channels via relative color syntax', async () => {
      const css = await compile('bg-pixel-red-500');
      expect(css).toContain('r 0 0');
      expect(css).toContain('0 g 0');
      expect(css).toContain('0 0 b');
    });

    test('bg-pixel-red-500 has black base layer in --jib-background-image', async () => {
      const css = await compile('bg-pixel-red-500');
      expect(css).toContain('linear-gradient(rgb(0 0 0');
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
    test('pixel-size-2 sets pixel size from spacing scale', async () => {
      const css = await compile('pixel-size-2');
      expect(css).toContain('--jib-pixel-size');
    });

    test('pixel-size-[5px] accepts arbitrary length', async () => {
      const css = await compile('pixel-size-[5px]');
      expect(css).toContain('--jib-pixel-size: 5px');
    });
  });

  describe('pixel-gap-*', () => {
    test('pixel-gap-2 sets gap multiplier', async () => {
      const css = await compile('pixel-gap-2');
      expect(css).toContain('--jib-pixel-gap: 2');
    });

    test('pixel-gap-[number:0.5] accepts arbitrary number', async () => {
      const css = await compile('pixel-gap-[number:0.5]');
      expect(css).toContain('--jib-pixel-gap:');
    });
  });

  describe('pixel-bloom-*', () => {
    test('pixel-bloom-1 sets bloom with spacing/4 scaling', async () => {
      const css = await compile('pixel-bloom-1');
      expect(css).toContain('--jib-pixel-bloom');
    });

    test('pixel-bloom-[2px] accepts arbitrary length', async () => {
      const css = await compile('pixel-bloom-[2px]');
      expect(css).toContain('--jib-pixel-bloom: 2px');
    });
  });

  describe('channel gap geometry', () => {
    const decl = (css: string, prop: string): string => {
      const m = new RegExp(`${prop}:\\s*([^;]+);`).exec(css);
      expect(m, `${prop} should be emitted`).not.toBeNull();
      return m![1];
    };

    test('the gap is half a channel, so two gaps span one channel', async () => {
      // Arrange
      // Act
      const css = await compile('bg-pixel-red-500');

      // Assert
      expect(
        decl(css, '--jib-pixel-channel-gap'),
        'the gap must be half a channel width, not some other fraction',
      ).toBe('max(0.5px, calc(var(--jib-pixel-width) / 2))');
    });

    test('the 0.5px floor wins only at or below a 1px channel', async () => {
      // Arrange
      // Act
      const css = await compile('bg-pixel-red-500');

      // Assert
      expect(
        decl(css, '--jib-pixel-channel-gap'),
        'the floor keeps the gap at one device pixel for a sub-pixel channel',
      ).toContain('max(0.5px');
    });

    test('the triplet is three channels plus two gaps', async () => {
      // Arrange
      // Act
      const css = await compile('bg-pixel-red-500');

      // Assert
      expect(decl(css, '--jib-pixel-triplet-width')).toBe(
        'calc(var(--jib-pixel-width) * 3 + var(--jib-pixel-channel-gap) * 2)',
      );
    });

    test('green and blue offset by one and two channel-plus-gap steps', async () => {
      // Arrange
      // Act
      const css = await compile('bg-pixel-red-500');

      // Assert
      expect(css, 'green sits one channel plus one gap along').toContain(
        'calc(var(--jib-pixel-width) + var(--jib-pixel-channel-gap)) 0',
      );
      expect(css, 'blue sits two channels plus two gaps along').toContain(
        'calc(var(--jib-pixel-width) * 2 + var(--jib-pixel-channel-gap) * 2) 0',
      );
    });

    test('the column bloom cap reaches the next channel, gap included', async () => {
      // Arrange
      // Act
      const css = await compile('bg-pixel-red-500');

      // Assert
      expect(
        decl(css, '--jib-pixel-bloom-col-cap'),
        'the cap must track the gap, or bloom stops short of the neighbour',
      ).toBe(
        'calc(var(--jib-pixel-width) + var(--jib-pixel-channel-gap) + var(--jib-pixel-gap-actual) / 2)',
      );
    });
  });

  /*
   * Gecko cannot divide length by length, and the ratio feeds the `background`
   * shorthand, so one rejected division drops the whole thing to `none`.
   * tan(atan2(a, b)) is the portable spelling.
   */
  describe('bloom ratio portability', () => {
    const ratioDecl = (css: string, prop: string): string => {
      const m = new RegExp(`${prop}:\\s*([^;]+);`).exec(css);
      expect(m, `${prop} should be emitted`).not.toBeNull();
      return m![1];
    };

    test.each([['--jib-pixel-row-mid-alpha'], ['--jib-pixel-col-mid-alpha']])(
      '%s derives its ratio without dividing by a length',
      async (prop) => {
        const value = ratioDecl(await compile('bg-pixel-red-500'), prop);
        expect(value).toContain('atan2(');
        expect(value).toContain('tan(');
        expect(value, `${prop} must not divide lengths: ${value}`).not.toContain('/');
      },
    );

    test('the caps and overflows feeding the ratio stay lengths', async () => {
      const css = await compile('bg-pixel-red-500');
      // atan2 rejects mismatched units
      expect(ratioDecl(css, '--jib-pixel-bloom-row-overflow')).toContain('max(0px');
      expect(ratioDecl(css, '--jib-pixel-bloom-col-overflow')).toContain('max(0px');
    });
  });
});
