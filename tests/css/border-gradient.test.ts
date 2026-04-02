import { describe, test, expect } from 'vitest';
import { compile } from './helpers.js';
import { BG_LAYER } from './constants.js';

/** Minimal border-gradient classes reused across most tests in this file. */
const BORDER = 'border-linear-to-r border-from-rose-500 border-to-cyan-500';

describe('background colors with border gradient', () => {
  test('bg-blue-500', async () => {
    const css = await compile(`bg-blue-500 ${BORDER}`);
    expect(css).toContain('--tw-jib--bg-color');
    expect(css).toContain('--tw-jib--border-gradient-from');
    expect(css).toContain('border-color: transparent');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-emerald-600', async () => {
    const css = await compile(`bg-emerald-600 ${BORDER}`);
    expect(css).toContain('--color-emerald-600');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-blue-500/50 opacity', async () => {
    const css = await compile(`bg-blue-500/50 ${BORDER}`);
    expect(css).toContain('color-mix');
    expect(css).toContain('50%');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-blue-500/25 opacity', async () => {
    const css = await compile(`bg-blue-500/25 ${BORDER}`);
    expect(css).toContain('color-mix');
    expect(css).toContain('25');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-red-500/75 opacity', async () => {
    const css = await compile(`bg-red-500/75 ${BORDER}`);
    expect(css).toContain('color-mix');
    expect(css).toContain('75');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-blue-500/0 opacity', async () => {
    const css = await compile(`bg-blue-500/0 ${BORDER}`);
    expect(css).toContain('--color-blue-500');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-[#ff6b35] arbitrary hex', async () => {
    const css = await compile(`bg-[#ff6b35] ${BORDER}`);
    expect(css).toContain('#ff6b35');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-[rgb(50,215,30)] arbitrary rgb', async () => {
    const css = await compile(`bg-[rgb(50,215,30)] ${BORDER}`);
    expect(css).toContain('rgb(50,215,30)');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-[oklch(0.7_0.15_200)] arbitrary oklch', async () => {
    const css = await compile(`bg-[oklch(0.7_0.15_200)] ${BORDER}`);
    expect(css).toContain('oklch');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-transparent', async () => {
    const css = await compile(`bg-transparent ${BORDER}`);
    expect(css).toContain('transparent');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-black', async () => {
    const css = await compile(`bg-black ${BORDER}`);
    expect(css).toContain('background-color');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-white', async () => {
    const css = await compile(`bg-white ${BORDER}`);
    expect(css).toContain('background-color');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-inherit', async () => {
    const css = await compile(`bg-inherit ${BORDER}`);
    expect(css).toContain('inherit');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-current', async () => {
    const css = await compile(`bg-current ${BORDER}`);
    expect(css).toContain('currentColor');
    expect(css).toContain(BG_LAYER);
  });
});

describe('background linear gradients with border gradient', () => {
  test.each([
    ['bg-linear-to-r', 'to right'],
    ['bg-linear-to-l', 'to left'],
    ['bg-linear-to-t', 'to top'],
    ['bg-linear-to-b', 'to bottom'],
    ['bg-linear-to-tr', 'to top right'],
    ['bg-linear-to-br', 'to bottom right'],
    ['bg-linear-to-bl', 'to bottom left'],
    ['bg-linear-to-tl', 'to top left'],
  ])('%s', async (cls, direction) => {
    const css = await compile(`${cls} from-blue-500 to-purple-500 ${BORDER}`);
    expect(css).toContain(direction);
    expect(css).toContain('linear-gradient');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-linear-45', async () => {
    const css = await compile(`bg-linear-45 from-blue-500 to-purple-500 ${BORDER}`);
    expect(css).toContain('linear-gradient');
    expect(css).toContain(BG_LAYER);
  });

  test('-bg-linear-45', async () => {
    const css = await compile(`-bg-linear-45 from-blue-500 to-purple-500 ${BORDER}`);
    expect(css).toContain('linear-gradient');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-linear-[137deg]', async () => {
    const css = await compile(`bg-linear-[137deg] from-blue-500 to-purple-500 ${BORDER}`);
    expect(css).toContain('137deg');
    expect(css).toContain(BG_LAYER);
  });

  test('from/via/to stops', async () => {
    const css = await compile('bg-linear-to-r from-pink-500 via-yellow-400 to-cyan-500 border-linear-to-b border-from-rose-500 border-to-cyan-500');
    expect(css).toContain('--color-pink-500');
    expect(css).toContain('--color-yellow-400');
    expect(css).toContain('--color-cyan-500');
    expect(css).toContain(BG_LAYER);
  });

  test('gradient stop positions', async () => {
    const css = await compile(`bg-linear-to-r from-blue-500 from-10% via-purple-500 via-30% to-pink-500 to-90% ${BORDER}`);
    expect(css).toContain('10%');
    expect(css).toContain('30%');
    expect(css).toContain('90%');
    expect(css).toContain(BG_LAYER);
  });
});

describe('background radial and conic gradients with border gradient', () => {
  test('bg-radial', async () => {
    const css = await compile(`bg-radial from-blue-500 to-purple-500 ${BORDER}`);
    expect(css).toContain('radial-gradient');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-radial-[at_25%_25%]', async () => {
    const css = await compile(`bg-radial-[at_25%_25%] from-blue-500 to-purple-500 ${BORDER}`);
    expect(css).toContain('25% 25%');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-conic', async () => {
    const css = await compile(`bg-conic from-blue-500 via-green-500 to-purple-500 ${BORDER}`);
    expect(css).toContain('conic-gradient');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-conic-45', async () => {
    const css = await compile(`bg-conic-45 from-blue-500 via-green-500 to-purple-500 ${BORDER}`);
    expect(css).toContain('conic-gradient');
    expect(css).toContain(BG_LAYER);
  });

  test('-bg-conic-45', async () => {
    const css = await compile(`-bg-conic-45 from-blue-500 via-green-500 to-purple-500 ${BORDER}`);
    expect(css).toContain('conic-gradient');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-conic-[from_90deg]', async () => {
    const css = await compile(`bg-conic-[from_90deg] from-blue-500 to-purple-500 ${BORDER}`);
    expect(css).toContain('90deg');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-none', async () => {
    const css = await compile(`bg-none ${BORDER}`);
    expect(css).toContain('none');
    expect(css).toContain(BG_LAYER);
  });
});

describe('background gradient interpolation modifiers', () => {
  test.each([
    ['bg-linear-to-r/srgb', 'in srgb'],
    ['bg-linear-to-r/hsl', 'in hsl'],
    ['bg-linear-to-r/oklab', 'in oklab'],
    ['bg-linear-to-r/oklch', 'in oklch'],
    ['bg-linear-to-r/longer', 'longer'],
    ['bg-linear-to-r/shorter', 'shorter'],
    ['bg-linear-to-r/increasing', 'increasing'],
    ['bg-linear-to-r/decreasing', 'decreasing'],
  ])('%s', async (cls, expected) => {
    const css = await compile(`${cls} from-red-500 to-blue-500 border-linear-to-b border-from-amber-400 border-to-emerald-500`);
    expect(css).toContain(expected);
    expect(css).toContain(BG_LAYER);
  });
});

describe('border gradient linear directions', () => {
  test.each([
    ['border-linear-to-r', 'to right'],
    ['border-linear-to-l', 'to left'],
    ['border-linear-to-t', 'to top'],
    ['border-linear-to-b', 'to bottom'],
    ['border-linear-to-tr', 'to top right'],
    ['border-linear-to-br', 'to bottom right'],
    ['border-linear-to-bl', 'to bottom left'],
    ['border-linear-to-tl', 'to top left'],
  ])('%s', async (cls, direction) => {
    const css = await compile(`bg-slate-800 ${cls} border-from-rose-500 border-to-cyan-500`);
    expect(css).toContain(direction);
    expect(css).toContain('linear-gradient');
    expect(css).toContain('border-color: transparent');
    expect(css).toContain(BG_LAYER);
  });
});

describe('border gradient linear angles', () => {
  test('border-linear-45', async () => {
    const css = await compile('bg-slate-800 border-linear-45 border-from-rose-500 border-to-cyan-500');
    expect(css).toContain('45 * 1deg');
    expect(css).toContain('linear-gradient');
    expect(css).toContain('border-color: transparent');
    expect(css).toContain(BG_LAYER);
  });

  test('border-linear-90', async () => {
    const css = await compile('bg-slate-800 border-linear-90 border-from-rose-500 border-to-cyan-500');
    expect(css).toContain('90 * 1deg');
    expect(css).toContain(BG_LAYER);
  });

  test('border-linear-135', async () => {
    const css = await compile('bg-slate-800 border-linear-135 border-from-rose-500 border-to-cyan-500');
    expect(css).toContain('135 * 1deg');
    expect(css).toContain(BG_LAYER);
  });

  test('-border-linear-45', async () => {
    const css = await compile('bg-slate-800 -border-linear-45 border-from-rose-500 border-to-cyan-500');
    expect(css).toContain('calc(45 * -1deg)');
    expect(css).toContain('linear-gradient');
    expect(css).toContain(BG_LAYER);
  });

  test('border-linear-[137deg]', async () => {
    const css = await compile('bg-slate-800 border-linear-[137deg] border-from-rose-500 border-to-cyan-500');
    expect(css).toContain('137deg');
    expect(css).toContain('linear-gradient');
    expect(css).toContain(BG_LAYER);
  });
});

describe('border gradient radial', () => {
  test('border-radial', async () => {
    const css = await compile('bg-slate-800 border-radial border-from-rose-500 border-to-cyan-500');
    expect(css).toContain('border-color: transparent');
    expect(css).toContain(BG_LAYER);
  });

  test('border-radial-[at_25%_25%]', async () => {
    const css = await compile('bg-slate-800 border-radial-[at_25%_25%] border-from-rose-500 border-to-cyan-500');
    expect(css).toContain('radial-gradient');
    expect(css).toContain('border-color: transparent');
    expect(css).toContain(BG_LAYER);
  });

  test('border-radial-[at_top]', async () => {
    const css = await compile('bg-slate-800 border-radial-[at_top] border-from-rose-500 border-to-cyan-500');
    expect(css).toContain('radial-gradient');
    expect(css).toContain(BG_LAYER);
  });
});

describe('border gradient conic', () => {
  test('border-conic-0', async () => {
    const css = await compile('bg-slate-800 border-conic-0 border-from-rose-500 border-via-yellow-400 border-to-cyan-500');
    expect(css).toContain('conic-gradient');
    expect(css).toContain('border-color: transparent');
    expect(css).toContain(BG_LAYER);
  });

  test('border-conic-45', async () => {
    const css = await compile('bg-slate-800 border-conic-45 border-from-rose-500 border-via-yellow-400 border-to-cyan-500');
    expect(css).toContain('45 * 1deg');
    expect(css).toContain('conic-gradient');
    expect(css).toContain(BG_LAYER);
  });

  test('border-conic-90', async () => {
    const css = await compile('bg-slate-800 border-conic-90 border-from-rose-500 border-via-yellow-400 border-to-cyan-500');
    expect(css).toContain('90 * 1deg');
    expect(css).toContain(BG_LAYER);
  });

  test('border-conic-180', async () => {
    const css = await compile('bg-slate-800 border-conic-180 border-from-rose-500 border-via-yellow-400 border-to-cyan-500');
    expect(css).toContain('180 * 1deg');
    expect(css).toContain(BG_LAYER);
  });

  test('-border-conic-45', async () => {
    const css = await compile('bg-slate-800 -border-conic-45 border-from-rose-500 border-via-yellow-400 border-to-cyan-500');
    expect(css).toContain('calc(45 * -1deg)');
    expect(css).toContain('conic-gradient');
    expect(css).toContain(BG_LAYER);
  });
});

describe('border gradient interpolation modifiers', () => {
  describe('on linear', () => {
    test.each([
      ['border-linear/srgb', 'in srgb'],
      ['border-linear/hsl', 'in hsl'],
      ['border-linear/oklab', 'in oklab'],
      ['border-linear/oklch', 'in oklch'],
      ['border-linear/longer', 'in oklch longer hue'],
      ['border-linear/shorter', 'in oklch shorter hue'],
      ['border-linear/increasing', 'in oklch increasing hue'],
      ['border-linear/decreasing', 'in oklch decreasing hue'],
    ])('%s', async (cls, expected) => {
      const css = await compile(`bg-slate-800 ${cls} border-linear-to-r border-from-red-500 border-to-blue-500`);
      expect(css).toContain(`--tw-jib--gradient-interpolation: ${expected}`);
      expect(css).toContain('linear-gradient');
      expect(css).toContain('border-color: transparent');
      expect(css).toContain(BG_LAYER);
    });
  });

  describe('on radial', () => {
    test.each([
      ['border-radial/srgb', 'in srgb'],
      ['border-radial/oklch', 'in oklch'],
      ['border-radial/longer', 'in oklch longer hue'],
      ['border-radial/decreasing', 'in oklch decreasing hue'],
    ])('%s', async (cls, expected) => {
      const css = await compile(`bg-slate-800 ${cls} border-radial border-from-red-500 border-to-blue-500`);
      expect(css).toContain(`--tw-jib--gradient-interpolation: ${expected}`);
      expect(css).toContain('radial-gradient');
      expect(css).toContain(BG_LAYER);
    });
  });

  describe('on conic', () => {
    test.each([
      ['border-conic/srgb', 'in srgb'],
      ['border-conic/oklch', 'in oklch'],
      ['border-conic/longer', 'in oklch longer hue'],
      ['border-conic/increasing', 'in oklch increasing hue'],
    ])('%s', async (cls, expected) => {
      const css = await compile(`bg-slate-800 ${cls} border-conic-0 border-from-red-500 border-via-yellow-400 border-to-blue-500`);
      expect(css).toContain(`--tw-jib--gradient-interpolation: ${expected}`);
      expect(css).toContain('conic-gradient');
      expect(css).toContain(BG_LAYER);
    });
  });
});

describe('border gradient color stops', () => {
  test('named colors', async () => {
    const css = await compile('bg-slate-800 border-linear-to-r border-from-blue-500 border-to-purple-500');
    expect(css).toContain('--tw-jib--border-gradient-from: var(--color-blue-500)');
    expect(css).toContain('--tw-jib--border-gradient-to: var(--color-purple-500)');
    expect(css).toContain(BG_LAYER);
  });

  test('arbitrary hex', async () => {
    const css = await compile('bg-slate-800 border-linear-to-r border-from-[#ff6b35] border-to-[#00b4d8]');
    expect(css).toContain('--tw-jib--border-gradient-from: #ff6b35');
    expect(css).toContain('--tw-jib--border-gradient-to: #00b4d8');
    expect(css).toContain(BG_LAYER);
  });

  test('CSS variables', async () => {
    const css = await compile('bg-slate-800 border-linear-to-r border-from-(color:--custom-border-from) border-to-(color:--custom-border-to)');
    expect(css).toContain('--tw-jib--border-gradient-from');
    expect(css).toContain('--tw-jib--border-gradient-to');
    expect(css).toContain(BG_LAYER);
  });

  test('border-from-transparent', async () => {
    const css = await compile('bg-slate-800 border-linear-to-r border-from-transparent border-to-blue-500');
    expect(css).toContain('--tw-jib--border-gradient-from: transparent');
    expect(css).toContain(BG_LAYER);
  });

  test('border-to-transparent', async () => {
    const css = await compile('bg-slate-800 border-linear-to-r border-from-blue-500 border-to-transparent');
    expect(css).toContain('--tw-jib--border-gradient-to: transparent');
    expect(css).toContain(BG_LAYER);
  });

  test('border-from-inherit', async () => {
    const css = await compile('bg-slate-800 border-linear-to-r border-from-inherit border-to-cyan-500');
    expect(css).toContain('--tw-jib--border-gradient-from: inherit');
    expect(css).toContain(BG_LAYER);
  });

  test('border-via named color', async () => {
    const css = await compile('bg-slate-800 border-linear-to-r border-from-rose-500 border-via-yellow-400 border-to-cyan-500');
    expect(css).toContain('--tw-jib--border-gradient-via: var(--color-yellow-400)');
    expect(css).toContain('--tw-jib--border-gradient-via-stops');
    expect(css).toContain(BG_LAYER);
  });

  test('border-via arbitrary hex', async () => {
    const css = await compile('bg-slate-800 border-linear-to-r border-from-[#ff0000] border-via-[#00ff00] border-to-[#0000ff]');
    expect(css).toContain('--tw-jib--border-gradient-from: #ff0000');
    expect(css).toContain('--tw-jib--border-gradient-via: #00ff00');
    expect(css).toContain('--tw-jib--border-gradient-to: #0000ff');
    expect(css).toContain(BG_LAYER);
  });

  test('border-via-transparent', async () => {
    const css = await compile('bg-slate-800 border-linear-to-r border-from-rose-500 border-via-transparent border-to-cyan-500');
    expect(css).toContain('--tw-jib--border-gradient-via: transparent');
    expect(css).toContain(BG_LAYER);
  });
});

describe('border gradient color stop positions', () => {
  test('border-from-20%', async () => {
    const css = await compile('bg-slate-800 border-linear-to-r border-from-rose-500 border-from-20% border-to-cyan-500');
    expect(css).toContain('--tw-jib--border-gradient-from-position: 20%');
    expect(css).toContain(BG_LAYER);
  });

  test('border-to-80%', async () => {
    const css = await compile(`bg-slate-800 ${BORDER} border-to-80%`);
    expect(css).toContain('--tw-jib--border-gradient-to-position: 80%');
    expect(css).toContain(BG_LAYER);
  });

  test('border-via-25%', async () => {
    const css = await compile('bg-slate-800 border-linear-to-r border-from-rose-500 border-via-yellow-400 border-via-25% border-to-cyan-500');
    expect(css).toContain('--tw-jib--border-gradient-via-position: 25%');
    expect(css).toContain(BG_LAYER);
  });

  test('all three positions', async () => {
    const css = await compile('bg-slate-800 border-linear-to-r border-from-rose-500 border-from-10% border-via-yellow-400 border-via-30% border-to-cyan-500 border-to-90%');
    expect(css).toContain('--tw-jib--border-gradient-from-position: 10%');
    expect(css).toContain('--tw-jib--border-gradient-via-position: 30%');
    expect(css).toContain('--tw-jib--border-gradient-to-position: 90%');
    expect(css).toContain(BG_LAYER);
  });
});

describe('border spin', () => {
  test('border-spin animation', async () => {
    const css = await compile('bg-slate-800 border-conic-0 border-spin border-from-rose-500 border-via-yellow-400 border-to-cyan-500');
    expect(css).toContain('animation: border-spin');
    expect(css).toContain('@keyframes border-spin');
    expect(css).toContain('--tw-jib--border-gradient-angle');
    expect(css).toContain(BG_LAYER);
  });

  test('border-spin-duration-3', async () => {
    const css = await compile('bg-slate-800 border-conic-0 border-spin border-spin-duration-3 border-from-rose-500 border-to-cyan-500');
    expect(css).toContain('--tw-jib--border-spin-duration: calc(3 * 1000ms)');
    expect(css).toContain(BG_LAYER);
  });

  test('border-spin with /longer interpolation', async () => {
    const css = await compile('bg-slate-800 border-conic/longer border-conic-0 border-spin border-from-red-500 border-to-blue-500');
    expect(css).toContain('--tw-jib--gradient-interpolation: in oklch longer hue');
    expect(css).toContain('animation: border-spin');
    expect(css).toContain(BG_LAYER);
  });
});

describe('edge cases: bg opacity + border interpolation', () => {
  test.each([
    ['border-linear/srgb', 'in srgb'],
    ['border-linear/oklch', 'in oklch'],
    ['border-linear/longer', 'in oklch longer hue'],
    ['border-linear/hsl', 'in hsl'],
    ['border-linear/oklab', 'in oklab'],
    ['border-linear/shorter', 'in oklch shorter hue'],
    ['border-linear/increasing', 'in oklch increasing hue'],
    ['border-linear/decreasing', 'in oklch decreasing hue'],
  ])('bg-indigo-500/50 + %s', async (cls, expected) => {
    const css = await compile(`bg-indigo-500/50 ${cls} border-linear-to-r border-from-red-500 border-to-blue-500`);
    expect(css).toContain('color-mix');
    expect(css).toContain(`--tw-jib--gradient-interpolation: ${expected}`);
    expect(css).toContain('border-color: transparent');
    expect(css).toContain(BG_LAYER);
  });
});

describe('edge cases: bg gradient interpolation + border gradient interpolation', () => {
  test('both /srgb', async () => {
    const css = await compile('bg-linear-to-r/srgb from-red-500 to-blue-500 border-linear/srgb border-linear-to-b border-from-amber-400 border-to-emerald-500');
    expect(css).toContain('in srgb');
    expect(css).toContain(BG_LAYER);
  });

  test('both /oklch', async () => {
    const css = await compile('bg-linear-to-r/oklch from-red-500 to-blue-500 border-linear/oklch border-linear-to-b border-from-amber-400 border-to-emerald-500');
    expect(css).toContain('in oklch');
    expect(css).toContain(BG_LAYER);
  });

  test('bg/srgb + border/longer', async () => {
    const css = await compile('bg-linear-to-r/srgb from-red-500 to-blue-500 border-linear/longer border-linear-to-b border-from-amber-400 border-to-emerald-500');
    expect(css).toContain('in srgb');
    expect(css).toContain('in oklch longer hue');
    expect(css).toContain(BG_LAYER);
  });

  test('bg/longer + border/srgb', async () => {
    const css = await compile('bg-linear-to-r/longer from-red-500 to-blue-500 border-linear/srgb border-linear-to-b border-from-amber-400 border-to-emerald-500');
    expect(css).toContain('longer');
    expect(css).toContain('in srgb');
    expect(css).toContain(BG_LAYER);
  });

  test('bg/hsl + border/oklch', async () => {
    const css = await compile('bg-linear-to-r/hsl from-red-500 to-blue-500 border-linear/oklch border-linear-to-b border-from-amber-400 border-to-emerald-500');
    expect(css).toContain('in hsl');
    expect(css).toContain('in oklch');
    expect(css).toContain(BG_LAYER);
  });

  test('bg/oklch + border/hsl', async () => {
    const css = await compile('bg-linear-to-r/oklch from-red-500 to-blue-500 border-linear/hsl border-linear-to-b border-from-amber-400 border-to-emerald-500');
    expect(css).toContain('in oklch');
    expect(css).toContain('in hsl');
    expect(css).toContain(BG_LAYER);
  });

  test('bg/increasing + border/decreasing', async () => {
    const css = await compile('bg-linear-to-r/increasing from-red-500 to-blue-500 border-linear/decreasing border-linear-to-b border-from-amber-400 border-to-emerald-500');
    expect(css).toContain('increasing');
    expect(css).toContain('decreasing');
    expect(css).toContain(BG_LAYER);
  });

  test('bg/decreasing + border/increasing', async () => {
    const css = await compile('bg-linear-to-r/decreasing from-red-500 to-blue-500 border-linear/increasing border-linear-to-b border-from-amber-400 border-to-emerald-500');
    expect(css).toContain('decreasing');
    expect(css).toContain('increasing');
    expect(css).toContain(BG_LAYER);
  });
});

describe('edge cases: mixed gradient types', () => {
  test('bg-radial + border-linear', async () => {
    const css = await compile('bg-radial from-blue-500 to-purple-900 border-linear-to-r border-from-amber-400 border-to-emerald-500');
    expect(css).toContain('radial-gradient');
    expect(css).toContain('linear-gradient');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-radial + border-conic', async () => {
    const css = await compile('bg-radial from-blue-500 to-purple-900 border-conic-0 border-from-amber-400 border-via-rose-500 border-to-emerald-500');
    expect(css).toContain('radial-gradient');
    expect(css).toContain('conic-gradient');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-conic + border-linear', async () => {
    const css = await compile('bg-conic from-blue-500 via-green-500 to-purple-500 border-linear-to-r border-from-amber-400 border-to-emerald-500');
    expect(css).toContain('conic-gradient');
    expect(css).toContain('linear-gradient');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-conic + border-radial', async () => {
    const css = await compile('bg-conic from-blue-500 via-green-500 to-purple-500 border-radial border-from-amber-400 border-to-emerald-500');
    expect(css).toContain('conic-gradient');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-linear + border-radial', async () => {
    const css = await compile('bg-linear-to-r from-blue-500 to-purple-500 border-radial border-from-amber-400 border-to-emerald-500');
    expect(css).toContain(BG_LAYER);
  });

  test('bg-linear + border-conic', async () => {
    const css = await compile('bg-linear-to-r from-blue-500 to-purple-500 border-conic-0 border-from-amber-400 border-via-rose-500 border-to-emerald-500');
    expect(css).toContain('conic-gradient');
    expect(css).toContain(BG_LAYER);
  });
});

describe('edge cases: arbitrary color formats on border gradient', () => {
  test('oklch values', async () => {
    const css = await compile('bg-slate-800 border-linear-to-r border-from-[oklch(0.6_0.25_330)] border-to-[oklch(0.7_0.2_200)]');
    expect(css).toContain('oklch(0.6 0.25 330)');
    expect(css).toContain('oklch(0.7 0.2 200)');
    expect(css).toContain(BG_LAYER);
  });

  test('hsl values', async () => {
    const css = await compile('bg-slate-800 border-linear-to-r border-from-[hsl(330,80%,50%)] border-to-[hsl(200,80%,50%)]');
    expect(css).toContain('hsl(330,80%,50%)');
    expect(css).toContain('hsl(200,80%,50%)');
    expect(css).toContain(BG_LAYER);
  });

  test('rgb values', async () => {
    const css = await compile('bg-slate-800 border-linear-to-r border-from-[rgb(255,100,50)] border-to-[rgb(0,180,216)]');
    expect(css).toContain('rgb(255,100,50)');
    expect(css).toContain('rgb(0,180,216)');
    expect(css).toContain(BG_LAYER);
  });
});

describe('edge cases: border widths', () => {
  test.each(['border', 'border-2', 'border-4', 'border-8'])(
    '%s + border gradient',
    async (widthClass) => {
      const css = await compile(`bg-slate-800 ${widthClass} ${BORDER}`);
      expect(css).toContain('linear-gradient');
      expect(css).toContain('border-color: transparent');
      expect(css).toContain(BG_LAYER);
    },
  );
});

describe('edge cases: no background', () => {
  test('border-linear without bg', async () => {
    const css = await compile(BORDER);
    expect(css).toContain('linear-gradient');
    expect(css).toContain('border-color: transparent');
    expect(css).toContain(BG_LAYER);
  });

  test('border-radial without bg', async () => {
    const css = await compile('border-radial border-from-rose-500 border-to-cyan-500');
    expect(css).toContain(BG_LAYER);
  });

  test('border-conic without bg', async () => {
    const css = await compile('border-conic-0 border-from-rose-500 border-via-yellow-400 border-to-cyan-500');
    expect(css).toContain('conic-gradient');
    expect(css).toContain(BG_LAYER);
  });

  test('border-spin without bg', async () => {
    const css = await compile('border-conic-0 border-spin border-from-rose-500 border-to-cyan-500');
    expect(css).toContain('animation: border-spin');
    expect(css).toContain(BG_LAYER);
  });
});

describe('edge cases: state variants', () => {
  test('hover:bg-red-500', async () => {
    const css = await compile(`bg-blue-500 hover:bg-red-500 ${BORDER}`);
    expect(css).toContain('hover');
    expect(css).toContain('--color-red-500');
    expect(css).toContain(BG_LAYER);
  });

  test('focus:bg-green-500', async () => {
    const css = await compile(`bg-blue-500 focus:bg-green-500 ${BORDER}`);
    expect(css).toContain('focus');
    expect(css).toContain('--color-green-500');
    expect(css).toContain(BG_LAYER);
  });

  test('dark:bg-slate-900', async () => {
    const css = await compile(`bg-white dark:bg-slate-900 ${BORDER}`);
    expect(css).toContain('prefers-color-scheme: dark');
    expect(css).toContain('--color-slate-900');
    expect(css).toContain(BG_LAYER);
  });
});
