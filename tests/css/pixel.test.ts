import { describe, test, expect } from 'vitest';
import { suiteScenarios } from './helpers.js';

/** Top-level comma-separated layers of a background-image list. */
function imageLayers(value: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let current = '';
  for (const char of value) {
    if (char === '(') depth++;
    if (char === ')') depth--;
    if (char === ',' && depth === 0) {
      out.push(current.trim());
      current = '';
    } else current += char;
  }
  out.push(current.trim());
  return out;
}

describe.each(suiteScenarios('pixel'))('pixel utilities, $name', ({ compile }) => {
  describe('bg-pixel-*', () => {
    test('bg-pixel-red-500 draws radial-gradient layers with screen blend', async () => {
      const css = await compile('bg-pixel-red-500');
      expect(css).toContain('radial-gradient(');
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

    test('bg-pixel-red-500 interpolates every layer in linear light', async () => {
      const css = await compile('bg-pixel-red-500');
      expect(
        /--jib-pixel-column:[^;]* in srgb-linear;/.test(css),
        'the column ellipse all three channels share names srgb-linear',
      ).toBe(true);
      expect(css, 'the row mask names srgb-linear').toContain('in srgb-linear, white,');
    });

    test('bg-pixel-[#ff6600] accepts arbitrary color', async () => {
      const css = await compile('bg-pixel-[#ff6600]');
      expect(css).toContain('radial-gradient(');
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
      ).toBe('max(0.5px, calc(var(--jib-pixel-size) / 2))');
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

    test('a phosphor is as tall as its triplet is wide', async () => {
      // Arrange
      // Act
      const css = await compile('bg-pixel-red-500');

      // Assert
      expect(
        decl(css, '--jib-pixel-height'),
        'three channels plus two channel gaps: four channel widths from a 1px channel up',
      ).toBe('calc(var(--jib-pixel-size) * 3 + var(--jib-pixel-channel-gap) * 2)');
    });

    test('the cell is one phosphor height plus the gap, square on both axes', async () => {
      // Arrange
      // Act
      const css = await compile('bg-pixel-red-500');

      // Assert
      expect(decl(css, '--jib-pixel-cell')).toBe(
        'calc(var(--jib-pixel-height) + var(--jib-pixel-gap-actual))',
      );
      expect(
        imageLayers(decl(css, '--jib-background-image'))
          .slice(0, 4)
          .every((layer) => layer.includes('/ var(--jib-pixel-cell) var(--jib-pixel-cell)')),
        'the row mask and the three channels each tile one square cell',
      ).toBe(true);
    });

    test('green and blue offset from the anchor by one and two channel-plus-gap steps', async () => {
      // Arrange
      // Act
      const css = await compile('bg-pixel-red-500');

      // Assert
      expect(css, 'green sits one channel plus one gap along from the anchor').toContain(
        'calc(var(--jib-background-position-x) + var(--jib-pixel-size) + var(--jib-pixel-channel-gap)) var(--jib-background-position-y)',
      );
      expect(css, 'blue sits two channels plus two gaps along from the anchor').toContain(
        'calc(var(--jib-background-position-x) + var(--jib-pixel-size) * 2 + var(--jib-pixel-channel-gap) * 2) var(--jib-background-position-y)',
      );
    });

    test('the row mask and red sit on the anchor', async () => {
      // Arrange
      const anchor = 'var(--jib-background-position-x) var(--jib-background-position-y) /';

      // Act
      const [rowMask, red] = imageLayers(
        decl(await compile('bg-pixel-red-500'), '--jib-background-image'),
      );

      // Assert
      expect(rowMask, 'the row mask follows bg-position').toContain(anchor);
      expect(red, 'red follows bg-position').toContain(anchor);
    });

    test('no position or size longhand is left for a later background shorthand to reset', async () => {
      // Arrange
      // Act
      const css = await compile('bg-pixel-red-500');
      const rule = css.slice(
        css.indexOf('.bg-pixel-red-500 {'),
        css.indexOf('\n  }', css.indexOf('.bg-pixel-red-500 {')),
      );

      // Assert
      expect(
        rule,
        'border-* and bg-ripple rebuild the shorthand after this rule; a longhand here would fall back to one element-sized tile',
      ).not.toMatch(/\n\s*background-(position|size):/);
    });
  });

  describe('bloom', () => {
    const decl = (css: string, prop: string): string => {
      const m = new RegExp(`${prop}:\\s*([^;]+);`).exec(css);
      expect(m, `${prop} should be emitted`).not.toBeNull();
      return m![1];
    };

    test('a channel fades to nothing bloom past its phosphor edge', async () => {
      // Arrange
      // Act
      const css = await compile('bg-pixel-red-500');

      // Assert
      expect(
        decl(css, '--jib-pixel-column'),
        'the ellipse radius across the channel is half the phosphor plus the bloom',
      ).toMatch(/^calc\(var\(--jib-pixel-size\) \/ 2 \+ var\(--jib-pixel-bloom\)\) /);
    });

    test('a row fades to nothing bloom past its phosphor edge', async () => {
      // Arrange
      // Act
      const css = await compile('bg-pixel-red-500');

      // Assert
      expect(
        decl(css, '--jib-background-image'),
        'the row mask radius is half the phosphor height plus the bloom, the same reach as a channel',
      ).toContain(
        'calc(var(--jib-pixel-height) / 2 + var(--jib-pixel-bloom)) in srgb-linear, white,',
      );
    });

    test('the hint floor keeps a channel no sharper than a parabola', async () => {
      // Arrange
      // Act
      const css = await compile('bg-pixel-red-500');

      // Assert
      expect(
        decl(css, '--jib-pixel-hint'),
        'a hint at √½ of the radius bends the fade into a parabola; any lower sharpens it into a spike',
      ).toContain('sqrt(max(0.5,');
    });

    test('the channels fade to transparent, so /opacity still shows the page through the gaps', async () => {
      // Arrange
      // Act
      const css = await compile('bg-pixel-red-500');

      // Assert
      expect(
        decl(css, '--jib-background-image').match(/var\(--jib-pixel-hint\), transparent\)/g)
          ?.length,
        'all three channels end at transparent; an opaque end would stack alpha over the gaps',
      ).toBe(3);
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

    test('the channel hint derives its ratio without dividing by a length', async () => {
      const value = ratioDecl(await compile('bg-pixel-red-500'), '--jib-pixel-hint');
      expect(value).toContain('tan(atan2(var(--jib-pixel-size),');
      expect(value, `--jib-pixel-hint must not divide lengths: ${value}`).not.toContain('/');
    });

    test('the row hint derives its ratio without dividing by a length', async () => {
      const value = ratioDecl(await compile('bg-pixel-red-500'), '--jib-background-image');
      expect(
        value,
        'the row mask hint reads phosphor height over height plus twice the bloom',
      ).toContain(
        'tan(atan2(var(--jib-pixel-height), calc(var(--jib-pixel-height) + var(--jib-pixel-bloom) * 2)))',
      );
    });
  });
});
