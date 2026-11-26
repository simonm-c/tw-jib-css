import { describe, test, expect } from 'vitest';
import { registration, suiteScenarios } from './helpers.js';

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
      // Arrange
      // Act
      const css = await compile('bg-comic-red-500');

      // Assert
      expect(css, 'cyan dots are not painted in srgb 0 1 1').toContain('srgb 0 1 1 /');
      expect(css, 'magenta dots are not painted in srgb 1 0 1').toContain('srgb 1 0 1 /');
      expect(css, 'yellow dots are not painted in srgb 1 1 0').toContain('srgb 1 1 0 /');
      expect(css, 'black dots are not painted in srgb 0 0 0').toContain('srgb 0 0 0 /');
    });

    test('bg-comic-red-500 paints its base layer from the paper slot, falling back to the theme paper', async () => {
      // Arrange
      // Act
      const css = await compile('bg-comic-red-500');

      // Assert
      expect(
        css,
        'the base layer must read comic-paper-* first and the @theme default second, faded by the opacity modifier',
      ).toContain(
        'linear-gradient(oklch(from var(--jib-comic-paper-color, var(--jib-comic-paper)) l c h / calc(alpha * var(--jib-comic-opacity))) 0 0)',
      );
    });

    test('bg-comic-red-500 emits a white theme paper by default', async () => {
      // Arrange
      // Act
      const css = await compile('bg-comic-red-500');

      // Assert
      expect(css, 'unconfigured projects keep printing on white paper').toMatch(
        /--jib-comic-paper: white;/,
      );
    });

    test('a project @theme replaces the paper default', async () => {
      // Arrange
      const extra = '@theme { --jib-comic-paper: #f4ead0; }';

      // Act
      const css = await compile('bg-comic-red-500', { extra });

      // Assert
      expect(css, 'the project-level paper must be what :root carries').toMatch(
        /--jib-comic-paper: #f4ead0;/,
      );
      expect(css, 'the library default must not survive beside the override').not.toMatch(
        /--jib-comic-paper: white;/,
      );
    });

    test('the paper slot neither inherits nor initialises', async () => {
      // Arrange
      // Act
      const css = await compile('bg-comic-red-500 comic-paper-red-100');
      const declaration = registration(css, '--jib-comic-paper-color');

      // Assert
      expect(declaration, 'the paper slot must be registered').toBeDefined();
      expect(declaration, "a nested comic must not print on its ancestor's paper").toContain(
        'inherits: false',
      );
      expect(
        declaration,
        'an initial value would win over the var() fallback and hide the theme paper',
      ).not.toContain('initial-value');
    });

    test('bg-comic-red-500/50 sets opacity modifier', async () => {
      const css = await compile('bg-comic-red-500/50');
      expect(css).toContain('0.01');
    });

    test.each([
      ['cyan', 'var(--jib-background-position-x) var(--jib-background-position-y)'],
      [
        'magenta',
        'calc(var(--jib-background-position-x) + var(--jib-comic-cell) / 5) calc(var(--jib-background-position-y) + var(--jib-comic-cell) * 2 / 5)',
      ],
      [
        'yellow',
        'calc(var(--jib-background-position-x) + var(--jib-comic-cell) * 2 / 5) calc(var(--jib-background-position-y) + var(--jib-comic-cell) * 4 / 5)',
      ],
      [
        'key',
        'calc(var(--jib-background-position-x) + var(--jib-comic-cell) * 3 / 5) calc(var(--jib-background-position-y) + var(--jib-comic-cell) / 5)',
      ],
    ])('the %s screen sits on the bg-position anchor plus its offset', async (screen, position) => {
      // Arrange
      // Act
      const css = await compile('bg-comic-red-500');

      // Assert
      expect(
        css,
        `the ${screen} dots must follow bg-position, or animating comic-dot grows them from the top left`,
      ).toContain(`) ${position} / var(--jib-comic-tile)`);
    });

    test('bg-comic-[#ff6600] accepts arbitrary color', async () => {
      const css = await compile('bg-comic-[#ff6600]');
      expect(css).toContain('radial-gradient');
      expect(css).toContain('#ff6600');
    });
  });

  describe('comic-dot-*', () => {
    test('comic-dot-2 sets the dot from the spacing scale', async () => {
      const css = await compile('comic-dot-2');
      expect(css).toContain('--jib-comic-dot');
    });

    test('comic-dot-[3px] accepts arbitrary length', async () => {
      const css = await compile('comic-dot-[3px]');
      expect(css).toContain('--jib-comic-dot: 3px');
    });
  });

  describe('comic-bleed-*', () => {
    test('comic-bleed-2 sets bleed as a multiple of the dot', async () => {
      // Arrange
      // Act
      const css = await compile('comic-bleed-2');

      // Assert
      expect(css, 'bleed must be a bare number so the screen zooms with comic-dot').toContain(
        '--jib-comic-bleed: 2;',
      );
    });

    test('comic-bleed-[0.25] accepts an arbitrary multiple', async () => {
      // Arrange
      // Act
      const css = await compile('comic-bleed-[0.25]');

      // Assert
      expect(css, 'an arbitrary bleed must reach the slot unchanged').toContain(
        '--jib-comic-bleed: 0.25;',
      );
    });
  });

  describe('comic-gap-*', () => {
    test('comic-gap-4 sets gap as a multiple of the dot', async () => {
      // Arrange
      // Act
      const css = await compile('comic-gap-4');

      // Assert
      expect(css, 'gap must be a bare number so the screen zooms with comic-dot').toContain(
        '--jib-comic-gap: 4;',
      );
    });

    test('comic-gap-[1.5] accepts an arbitrary multiple', async () => {
      // Arrange
      // Act
      const css = await compile('comic-gap-[1.5]');

      // Assert
      expect(css, 'an arbitrary gap must reach the slot unchanged').toContain(
        '--jib-comic-gap: 1.5;',
      );
    });

    test('bg-comic-red-500 sizes the cell from the dot alone', async () => {
      // Arrange
      // Act
      const css = await compile('bg-comic-red-500');

      // Assert
      expect(css, 'every length must scale with comic-dot for the dot to zoom the screen').toContain(
        '--jib-comic-cell: calc(var(--jib-comic-dot) * (2 + var(--jib-comic-gap)));',
      );
    });
  });

  describe('comic-paper-*', () => {
    test.each([
      ['comic-paper-amber-100', 'var(--color-amber-100)'],
      ['comic-paper-transparent', 'transparent'],
      ['comic-paper-[#f4ead0]', '#f4ead0'],
      ['comic-paper-[oklch(0.95_0.03_90)]', 'oklch(0.95 0.03 90)'],
      ['comic-paper-(color:--brand)', 'var(--brand)'],
    ])('%s sets the paper slot', async (utility, value) => {
      // Arrange
      // Act
      const css = await compile(utility);

      // Assert
      expect(css, `${utility} must write ${value} into the paper slot`).toContain(
        `--jib-comic-paper-color: ${value};`,
      );
    });

    test.each([
      ['comic-paper-amber-100/50', 'calc(50 * 1%)'],
      ['comic-paper-amber-100/[30%]', '30%'],
      ['comic-paper-amber-100/[0.5]', 'calc(0.5 * 100%)'],
    ])('%s fades the paper by its alpha modifier', async (utility, alpha) => {
      // Arrange
      // Act
      const css = await compile(utility);

      // Assert
      expect(css, `${utility} must mix the paper toward transparent by ${alpha}`).toContain(
        `--jib-comic-paper-color: color-mix(in oklab, var(--color-amber-100) ${alpha}, transparent);`,
      );
    });
  });
});
