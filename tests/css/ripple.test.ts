import { describe, test, expect } from 'vitest';
import { compile } from './helpers.js';
import { BG_LAYER } from './constants.js';

describe('bg-ripple base utility', () => {
  test('sets the 3-layer background stack', async () => {
    const css = await compile('bg-ripple bg-blue-500');
    expect(css).toContain(BG_LAYER);
  });

  test('includes reverse-transition on custom properties', async () => {
    const css = await compile('bg-ripple bg-blue-500');
    expect(css).toContain('transition:');
    expect(css).toContain('--tw-jib--ripple-distance');
    expect(css).toContain('--tw-jib--ripple-color-mix');
    expect(css).toContain('--tw-jib--ripple-opacity');
  });

  test('includes -webkit-tap-highlight-color: transparent', async () => {
    const css = await compile('bg-ripple bg-blue-500');
    expect(css).toContain('-webkit-tap-highlight-color: transparent');
  });

  test(':active resets properties to start state', async () => {
    const css = await compile('bg-ripple bg-blue-500');
    expect(css).toContain('--tw-jib--ripple-distance: 0%');
    expect(css).toContain('--tw-jib--ripple-opacity: 1');
  });

  test('does not use @keyframes or animation', async () => {
    const css = await compile('bg-ripple bg-blue-500');
    expect(css).not.toContain('@keyframes ripple');
    expect(css).not.toContain('animation:');
  });

  test('includes radial-gradient with ripple-distance stops', async () => {
    const css = await compile('bg-ripple bg-blue-500');
    expect(css).toContain('radial-gradient(');
    expect(css).toContain('var(--tw-jib--ripple-distance)');
  });

  test('mixed ripple color uses opacity in color-mix', async () => {
    const css = await compile('bg-ripple bg-blue-500');
    expect(css).toContain('color-mix(');
    expect(css).toContain('var(--tw-jib--ripple-opacity)');
  });
});

describe('ripple-color utilities', () => {
  test('ripple-color-blue-400', async () => {
    const css = await compile('bg-ripple ripple-color-blue-400');
    expect(css).toContain('--tw-jib--ripple-color:');
    expect(css).toContain('--color-blue-400');
  });

  test('ripple-color-pink-400', async () => {
    const css = await compile('bg-ripple ripple-color-pink-400');
    expect(css).toContain('--tw-jib--ripple-color:');
    expect(css).toContain('--color-pink-400');
  });

  test('ripple-color-purple-300', async () => {
    const css = await compile('bg-ripple ripple-color-purple-300');
    expect(css).toContain('--tw-jib--ripple-color:');
    expect(css).toContain('--color-purple-300');
  });

  test('ripple-color-white', async () => {
    const css = await compile('bg-ripple ripple-color-white');
    expect(css).toContain('--tw-jib--ripple-color:');
  });

  test('ripple-color-current', async () => {
    const css = await compile('bg-ripple ripple-color-current');
    expect(css).toContain('--tw-jib--ripple-color: currentColor');
  });

  test('ripple-color with opacity modifier', async () => {
    const css = await compile('bg-ripple ripple-color-red-500/50');
    expect(css).toContain('--tw-jib--ripple-color:');
    expect(css).toContain('color-mix(');
    expect(css).toContain('50');
  });
});

describe('ripple-duration utilities', () => {
  test('ripple-duration-20 = 200ms', async () => {
    const css = await compile('bg-ripple ripple-duration-20');
    expect(css).toContain('--tw-jib--ripple-duration: calc(20 * 10ms)');
  });

  test('ripple-duration-40 = 400ms', async () => {
    const css = await compile('bg-ripple ripple-duration-40');
    expect(css).toContain('--tw-jib--ripple-duration: calc(40 * 10ms)');
  });

  test('ripple-duration-60 = 600ms', async () => {
    const css = await compile('bg-ripple ripple-duration-60');
    expect(css).toContain('--tw-jib--ripple-duration: calc(60 * 10ms)');
  });

  test('ripple-duration-80 = 800ms', async () => {
    const css = await compile('bg-ripple ripple-duration-80');
    expect(css).toContain('--tw-jib--ripple-duration: calc(80 * 10ms)');
  });

  test('ripple-duration-150 = 1.5s', async () => {
    const css = await compile('bg-ripple ripple-duration-150');
    expect(css).toContain('--tw-jib--ripple-duration: calc(150 * 10ms)');
  });

  test('arbitrary duration value', async () => {
    const css = await compile('bg-ripple ripple-duration-[350ms]');
    expect(css).toContain('--tw-jib--ripple-duration: 350ms');
  });
});

describe('ripple-fade utilities', () => {
  test('ripple-fade sets fade-amount to 100%', async () => {
    const css = await compile('bg-ripple ripple-fade');
    expect(css).toContain('--tw-jib--ripple-fade-amount: calc(100 * 1%)');
  });

  test('ripple-fade-none sets fade-amount to 0%', async () => {
    const css = await compile('bg-ripple ripple-fade-none');
    expect(css).toContain('--tw-jib--ripple-fade-amount: 0%');
  });

  test('ripple-fade-50 sets fade-amount to 50%', async () => {
    const css = await compile('bg-ripple ripple-fade-50');
    expect(css).toContain('--tw-jib--ripple-fade-amount: calc(50 * 1%)');
  });

  test('ripple-fade-80 sets fade-amount to 80%', async () => {
    const css = await compile('bg-ripple ripple-fade-80');
    expect(css).toContain('--tw-jib--ripple-fade-amount: calc(80 * 1%)');
  });
});

describe('ripple-position utilities', () => {
  test('ripple-position-center', async () => {
    const css = await compile('bg-ripple ripple-position-center');
    expect(css).toContain('--tw-jib--ripple-position: center');
  });

  test('ripple-position-top', async () => {
    const css = await compile('bg-ripple ripple-position-top');
    expect(css).toContain('--tw-jib--ripple-position: top');
  });

  test('ripple-position-bottom', async () => {
    const css = await compile('bg-ripple ripple-position-bottom');
    expect(css).toContain('--tw-jib--ripple-position: bottom');
  });

  test('ripple-position-left', async () => {
    const css = await compile('bg-ripple ripple-position-left');
    expect(css).toContain('--tw-jib--ripple-position: left');
  });

  test('ripple-position-right', async () => {
    const css = await compile('bg-ripple ripple-position-right');
    expect(css).toContain('--tw-jib--ripple-position: right');
  });

  test('arbitrary pixel values', async () => {
    const css = await compile('bg-ripple ripple-position-[12px_8px]');
    expect(css).toContain('--tw-jib--ripple-position: 12px 8px');
  });

  test('arbitrary percentage values', async () => {
    const css = await compile('bg-ripple ripple-position-[73%_15%]');
    expect(css).toContain('--tw-jib--ripple-position: 73% 15%');
  });

  test('arbitrary mixed units', async () => {
    const css = await compile('bg-ripple ripple-position-[4px_85%]');
    expect(css).toContain('--tw-jib--ripple-position: 4px 85%');
  });
});

describe('ripple composition with backgrounds', () => {
  test('composes with solid bg-*', async () => {
    const css = await compile('bg-ripple bg-blue-500');
    expect(css).toContain(BG_LAYER);
    expect(css).toContain('--color-blue-500');
  });

  test('composes with bg-linear-to-r', async () => {
    const css = await compile('bg-ripple bg-linear-to-r from-blue-500 to-purple-500');
    expect(css).toContain('linear-gradient(');
    expect(css).toContain(BG_LAYER);
  });

  test('composes with bg-radial', async () => {
    const css = await compile('bg-ripple bg-radial from-sky-300 to-blue-600');
    expect(css).toContain('radial-gradient(');
    expect(css).toContain(BG_LAYER);
  });

  test('composes with bg-conic', async () => {
    const css = await compile('bg-ripple bg-conic from-red-500 via-yellow-500 to-red-500');
    expect(css).toContain('conic-gradient(');
    expect(css).toContain(BG_LAYER);
  });
});

describe('ripple composition with border gradients', () => {
  test('composes with border-linear-to-r', async () => {
    const css = await compile('bg-ripple bg-slate-800 border-4 border-linear-to-r border-from-rose-500 border-to-cyan-500');
    expect(css).toContain(BG_LAYER);
    expect(css).toContain('--tw-jib--border-gradient');
  });

  test('composes with border-radial', async () => {
    const css = await compile('bg-ripple bg-slate-800 border-4 border-radial border-from-rose-500 border-to-cyan-500');
    expect(css).toContain(BG_LAYER);
  });

  test('composes with border-conic', async () => {
    const css = await compile('bg-ripple bg-slate-800 border-4 border-conic-0 border-from-rose-500 border-via-yellow-400 border-to-cyan-500');
    expect(css).toContain(BG_LAYER);
  });

  test('composes with border-spin', async () => {
    const css = await compile('bg-ripple bg-slate-800 border-4 border-conic-0 border-spin border-from-rose-500 border-via-yellow-400 border-to-cyan-500');
    expect(css).toContain(BG_LAYER);
    expect(css).toContain('border-spin');
  });
});

describe('combined ripple customisation', () => {
  test('all customisations together', async () => {
    const css = await compile('bg-ripple ripple-color-white ripple-duration-60 ripple-fade bg-indigo-600');
    expect(css).toContain('--tw-jib--ripple-fade-amount: calc(100 * 1%)');
    expect(css).toContain('--tw-jib--ripple-duration: calc(60 * 10ms)');
    expect(css).toContain(BG_LAYER);
  });

  test('color + position + duration + fade', async () => {
    const css = await compile('bg-ripple ripple-color-pink-400 ripple-position-top ripple-duration-80 ripple-fade-50');
    expect(css).toContain('--color-pink-400');
    expect(css).toContain('--tw-jib--ripple-position: top');
    expect(css).toContain('--tw-jib--ripple-duration: calc(80 * 10ms)');
    expect(css).toContain('--tw-jib--ripple-fade-amount: calc(50 * 1%)');
  });
});
