import { describe, test, expect } from 'vitest';
import { compile } from './helpers.js';

describe('pixel utilities', () => {
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
      // R channel
      expect(css).toContain('r 0 0');
      // G channel
      expect(css).toContain('0 g 0');
      // B channel
      expect(css).toContain('0 0 b');
    });

    test('bg-pixel-red-500 has black base layer in --tw-jib--background-image', async () => {
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

  describe('pixel-bloom-*', () => {
    test('pixel-bloom-1 sets bloom with spacing/4 scaling', async () => {
      const css = await compile('pixel-bloom-1');
      expect(css).toContain('--tw-jib--pixel-bloom');
    });

    test('pixel-bloom-[2px] accepts arbitrary length', async () => {
      const css = await compile('pixel-bloom-[2px]');
      expect(css).toContain('--tw-jib--pixel-bloom: 2px');
    });
  });

  /*
   * The bloom mid values are a dimensionless ratio of two lengths. Expressing
   * that as calc(a / b) costs the module every engine that cannot divide a
   * length by a length — Gecko rejects it, and because the ratio is substituted
   * into the `background` shorthand, one rejected division drops the entire
   * shorthand to `none`, i.e. the module renders nothing at all rather than
   * degrading. tan(atan2(a, b)) is the portable spelling of the same ratio.
   *
   * These assertions are deliberately about the shape of the generated CSS: the
   * browser-level consequence is covered in tests/integration/pixel.spec.ts, but
   * only a Firefox run would catch it there, so pin it here too.
   */
  describe('bloom ratio portability', () => {
    const ratioDecl = (css: string, prop: string): string => {
      const m = new RegExp(`${prop}:\\s*([^;]+);`).exec(css);
      expect(m, `${prop} should be emitted`).not.toBeNull();
      return m![1];
    };

    test.each([['--tw-jib--pixel-row-mid-alpha'], ['--tw-jib--pixel-col-mid-alpha']])(
      '%s derives its ratio without dividing by a length',
      async (prop) => {
        const value = ratioDecl(await compile('bg-pixel-red-500'), prop);
        expect(value).toContain('atan2(');
        expect(value).toContain('tan(');
        // No division operator at all: every operand here is a length, so any `/`
        // would be a length-by-length division.
        expect(value, `${prop} must not divide lengths: ${value}`).not.toContain('/');
      },
    );

    test('the caps and overflows feeding the ratio stay lengths', async () => {
      const css = await compile('bg-pixel-red-500');
      // max(0px, ...) keeps the overflow a length so atan2's two arguments agree
      // in type — atan2 rejects mismatched units.
      expect(ratioDecl(css, '--tw-jib--pixel-bloom-row-overflow')).toContain('max(0px');
      expect(ratioDecl(css, '--tw-jib--pixel-bloom-col-overflow')).toContain('max(0px');
    });
  });
});
