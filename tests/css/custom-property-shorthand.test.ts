import { describe, test, expect } from 'vitest';
import { compile } from './helpers.js';

const SLOTS: Array<[string, string]> = [
  ['bg-lightness-(--v)', '--jib-background-lightness-amount: calc(var(--v) * 0.01)'],
  ['-bg-lightness-(--v)', '--jib-background-lightness-amount: calc(var(--v) * -0.01)'],
  ['text-saturate-(--v)', '--jib-text-saturation-amount: calc(var(--v) * 0.01)'],
  ['fill-hue-rotate-(--v)', '--jib-fill-hue-amount: var(--v)'],
  ['-fill-hue-rotate-(--v)', '--jib-fill-hue-amount: calc(var(--v) * -1)'],
  ['bg-comic-(--v)', '--jib-comic-color: var(--v)'],
  ['comic-dot-(--v)', '--jib-comic-dot: var(--v)'],
  ['comic-gap-(--v)', '--jib-comic-gap: var(--v)'],
  ['comic-bleed-(--v)', '--jib-comic-bleed: var(--v)'],
  ['bg-pixel-(--v)', '--jib-pixel-color: var(--v)'],
  ['pixel-size-(--v)', '--jib-pixel-size: var(--v)'],
  ['pixel-bloom-(--v)', '--jib-pixel-bloom: var(--v)'],
  ['ripple-color-(--v)', '--jib-ripple-color: var(--v)'],
  ['ripple-position-(--v)', '--jib-ripple-position: var(--v)'],
  ['ripple-fade-(--v)', '--jib-ripple-fade-amount: calc(var(--v) * 1%)'],
];

describe('the untyped custom-property shorthand', () => {
  for (const [cls, declaration] of SLOTS) {
    test(`${cls} fills the slot its typed form fills`, async () => {
      const css = await compile(cls);
      expect(css, `${cls} did not compile to \`${declaration}\``).toContain(declaration);
    });
  }

  test('-corner-(--v) negates the superellipse exponent', async () => {
    const css = await compile('-corner-(--v)', { experimental: true });
    expect(css, '-corner-(--v) did not reach the superellipse slot').toContain(
      'corner-shape: superellipse(calc(var(--v) * -1))',
    );
  });

  test('bg-lightness-(--v) reaches the @function path too', async () => {
    const css = await compile('bg-blue-500 bg-lightness-(--v)', { functions: true });
    expect(css, 'the @function block rejected the shorthand its calc twin accepts').toContain(
      '--jib-lightness(var(--jib-background-color-after-saturation, var(--jib-background-color-after-hue-rotate, var(--jib-background-color-source))), var(--v), oklch)',
    );
  });

  test('widening a slot leaves its named types matching as before', async () => {
    const css = await compile('bg-lightness-20 comic-dot-[3px] ripple-position-top');
    expect(css, 'the bare integer stopped reaching the lightness slot').toContain(
      '--jib-background-lightness-amount: calc(20 * 0.01)',
    );
    expect(css, 'the arbitrary length stopped reaching the dot slot').toContain(
      '--jib-comic-dot: 3px',
    );
    expect(css, 'the named keyword stopped reaching the position slot').toContain(
      '--jib-ripple-position: top',
    );
  });
});

const ALPHA_FORMS: Array<[string, string]> = [
  ['bg-red-500/50', '50%'],
  ['bg-red-500/[50%]', '50%'],
  ['bg-red-500/[0.5]', '50%'],
  ['text-red-500/[50%]', '50%'],
  ['outline-red-500/[0.25]', '25%'],
  ['ripple-color-red-500/[50%]', '50%'],
  ['ripple-color-red-500/[0.5]', 'calc(0.5 * 100%)'],
];

describe('the alpha modifier matches Tailwind on every spelling', () => {
  for (const [cls, alpha] of ALPHA_FORMS) {
    test(`${cls} resolves to ${alpha}`, async () => {
      const css = await compile(`bg-ripple ${cls}`);
      expect(css, `${cls} did not carry an alpha of ${alpha}`).toContain(alpha);
    });
  }

  test('an opacity slot takes the bracketed number unscaled', async () => {
    const css = await compile('bg-comic-red-500/[0.5] bg-pixel-blue-500/[0.25]');
    expect(css, 'the comic opacity rescaled a 0-1 alpha').toContain('--jib-comic-opacity: 0.5');
    expect(css, 'the pixel opacity rescaled a 0-1 alpha').toContain('--jib-pixel-opacity: 0.25');
  });

  test('a percentage never reaches the alpha arithmetic', async () => {
    const css = await compile('bg-ripple ripple-color-red-500/[55%]');
    expect(
      css,
      'calc(55% * 1%) is invalid, so the mix resolves to the initial ripple colour and discards the red',
    ).not.toContain('calc(55% * 1%)');
  });

  test('a garbled modifier still drops the utility', async () => {
    const css = await compile('bg-ripple ripple-color-red-500/[garbage]');
    expect(css, 'an unmatched modifier should leave no rule at all').not.toContain(
      'ripple-color-red-500',
    );
  });
});
