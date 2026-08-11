import { describe, test, expect } from 'vitest';
import { compile } from './helpers.js';

/**
 * Tests for WCAG experimental utilities: text-a11y-* and wcag-badge.
 * All utilities require { experimental: true } — they are gated behind
 * @supports and CSS @function.
 */

const SUPPORTS_WCAG =
  '@supports (background: if(style(--value): red)) and (background: --tw-jib--linearize(red))';

const LEVELS = ['aa', 'aaa', 'aa-lg'] as const;

const COLOR_SPACES = [
  'oklch', 'lch', 'lab', 'oklab', 'hsl', 'hwb', 'rgb',
  'srgb', 'srgb-linear', 'display-p3', 'a98-rgb',
  'prophoto-rgb', 'rec2020', 'xyz', 'xyz-d50', 'xyz-d65',
  'color-mix',
] as const;

describe('text-a11y utilities', () => {
  describe('not present without experimental flag', () => {
    test.each(LEVELS)('text-a11y-%s is absent', async (level) => {
      const css = await compile(`bg-blue-500 text-a11y-${level}`);
      expect(css).not.toContain('--tw-jib--accessible-shade');
    });
  });

  describe('each WCAG level compiles', () => {
    test.each(LEVELS)('text-a11y-%s', async (level) => {
      const css = await compile(`bg-blue-500 text-a11y-${level}`, { experimental: true });
      expect(css).toContain(SUPPORTS_WCAG);
      expect(css).toContain('--tw-jib--accessible-shade(');
      expect(css).toContain('var(--tw-jib--background-color)');
      expect(css).toContain(level);
    });
  });

  describe('default colour space is oklch', () => {
    test('text-a11y-aa without modifier uses oklch', async () => {
      const css = await compile('bg-blue-500 text-a11y-aa', { experimental: true });
      expect(css).toContain('--tw-jib--accessible-shade(');
      expect(css).toContain('oklch');
    });
  });

  describe('colour space modifiers', () => {
    test.each(COLOR_SPACES)('text-a11y-aa/%s', async (space) => {
      const css = await compile(`bg-blue-500 text-a11y-aa/${space}`, { experimental: true });
      expect(css).toContain(SUPPORTS_WCAG);
      expect(css).toContain('--tw-jib--accessible-shade(');
      expect(css).toContain(space);
    });
  });

  test('sets the color CSS property', async () => {
    const css = await compile('bg-blue-500 text-a11y-aa', { experimental: true });
    expect(css).toContain('color:');
  });

  test('state variants work', async () => {
    const css = await compile('bg-blue-500 hover:text-a11y-aa', { experimental: true });
    expect(css).toContain('&:hover');
    expect(css).toContain('--tw-jib--accessible-shade(');
  });

  describe('oklch colours (high saturation, low sRGB luminance)', () => {
    test('compiles with oklch arbitrary bg colour', async () => {
      const css = await compile('bg-[oklch(54.6%_0.245_262.881)] text-a11y-aa', { experimental: true });
      expect(css).toContain('--tw-jib--accessible-shade(');
      expect(css).toContain('var(--tw-jib--background-color)');
    });

    test('compiles with oklch arbitrary bg and colour space modifier', async () => {
      const css = await compile('bg-[oklch(70%_0.15_150)] text-a11y-aaa/oklab', { experimental: true });
      expect(css).toContain('--tw-jib--accessible-shade(');
      expect(css).toContain('oklab');
    });

    test('compiles with dark oklch bg', async () => {
      const css = await compile('bg-[oklch(25%_0.1_280)] text-a11y-aa-lg', { experimental: true });
      expect(css).toContain('--tw-jib--accessible-shade(');
      expect(css).toContain('aa-lg');
    });
  });
});

describe('wcag-badge utility', () => {
  test('not present without experimental flag', async () => {
    const css = await compile('bg-blue-500 text-white wcag-badge');
    expect(css).not.toContain('--wcag-rating');
  });

  test('generates ::after pseudo-element', async () => {
    const css = await compile('bg-blue-500 text-white wcag-badge', { experimental: true });
    expect(css).toContain(SUPPORTS_WCAG);
    expect(css).toContain('::after');
    expect(css).toContain('--tw-jib--wcag-rating');
    expect(css).toContain('content:');
  });

  test('reads captured bg and text colours', async () => {
    const css = await compile('bg-blue-500 text-white wcag-badge', { experimental: true });
    expect(css).toContain('--wcag-rating(var(--tw-jib--background-color)');
    expect(css).toContain('var(--tw-jib--text-color)');
  });

  test('badge background uses conditional rating colours', async () => {
    const css = await compile('bg-blue-500 text-white wcag-badge', { experimental: true });
    expect(css).toContain('--tw-jib--wcag-badge-bg');
    expect(css).toContain('--color-green-500');
    expect(css).toContain('--color-yellow-500');
    expect(css).toContain('--color-orange-500');
    expect(css).toContain('--color-red-500');
  });

  test('badge text uses if(style()) for colour', async () => {
    const css = await compile('bg-blue-500 text-white wcag-badge', { experimental: true });
    expect(css).toContain('style(--tw-jib--wcag-display: "AA")');
  });

  describe('Max state', () => {
    test('text-a11y-* records the requested level for the badge to read', async () => {
      for (const level of LEVELS) {
        const css = await compile(`bg-blue-500 text-a11y-${level}`, { experimental: true });
        expect(css).toContain('--tw-jib--a11y-level:');
        expect(css).toContain(level);
      }
    });

    test('--tw-jib--a11y-level is registered as non-inheriting', async () => {
      const css = await compile('bg-blue-500 text-a11y-aa', { experimental: true });
      expect(css).toContain('@property --tw-jib--a11y-level');
      expect(css).toContain('inherits: false');
    });

    test('badge derives a shortfall from the requested level', async () => {
      const css = await compile('bg-blue-500 text-white wcag-badge', { experimental: true });
      expect(css).toContain('--tw-jib--wcag-shortfall');
      expect(css).toContain('style(--tw-jib--a11y-level: aaa)');
      expect(css).toContain('"Max"');
    });

    test('badge displays the shortfall-aware value, not the raw rating', async () => {
      const css = await compile('bg-blue-500 text-white wcag-badge', { experimental: true });
      expect(css).toContain('content: var(--tw-jib--wcag-display)');
    });

    // The style()-compared properties must not carry the newline+indent that a
    // multi-line if() leaves inside the computed value — style() compares token
    // streams, so trailing whitespace makes every match silently fail.
    test('style()-compared properties have no trailing whitespace', async () => {
      const css = await compile('bg-blue-500 text-white wcag-badge', { experimental: true });
      for (const prop of ['--tw-jib--wcag-shortfall', '--tw-jib--wcag-display']) {
        const decl = css.match(new RegExp(`${prop}:[\\s\\S]*?;`))?.[0];
        expect(decl, `${prop} declaration not found`).toBeTruthy();
        expect(decl, `${prop} has whitespace before its closing paren`).not.toMatch(/\s\);$/);
      }
    });
  });
});
