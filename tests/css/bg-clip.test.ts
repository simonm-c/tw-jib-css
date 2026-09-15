import { describe, test, expect } from 'vitest';
import { suiteScenarios, type Suite } from './helpers.js';
import { BG_LAYER } from './constants.js';

const COMPOSITED: { suite: Suite; utility: string }[] = [
  { suite: 'comic', utility: 'bg-comic-red-500' },
  { suite: 'pixel', utility: 'bg-pixel-red-500' },
  { suite: 'ripple', utility: 'bg-ripple' },
  { suite: 'border-gradient', utility: 'border-linear-to-r' },
];

const CLIP_KEYWORDS = [
  ['bg-clip-border', 'border-box'],
  ['bg-clip-padding', 'padding-box'],
  ['bg-clip-content', 'content-box'],
  ['bg-clip-text', 'text'],
] as const;

const SLOTS = ['--jib-background-clip', '--jib-border-gradient-clip'] as const;

function registration(css: string, name: string): string | undefined {
  return css.match(new RegExp(`@property ${name} \\{[\\s\\S]*?\\n\\}`))?.[0];
}

describe.each(suiteScenarios('comic'))('clip slot registration, $name', ({ compile }) => {
  test('the pattern slot defaults to the padding box', async () => {
    const css = await compile('bg-comic-red-500');
    const decl = registration(css, SLOTS[0]);
    expect(decl, `@property ${SLOTS[0]} not emitted`).toBeTruthy();
    expect(decl).toContain('inherits: false');
    expect(decl).toContain('initial-value: padding-box');
  });

  test('the border-gradient slot defaults to the border box', async () => {
    const css = await compile('bg-comic-red-500');
    const decl = registration(css, SLOTS[1]);
    expect(decl, `@property ${SLOTS[1]} not emitted`).toBeTruthy();
    expect(decl).toContain('inherits: false');
    expect(decl).toContain('initial-value: border-box');
  });

  /* A "*" slot substitutes whatever it holds, so one bad value invalidates the
   * shorthand and takes every layer. Measured: background-image = `none`. */
  test.each(SLOTS)('%s constrains its syntax rather than accepting any token', async (slot) => {
    const css = await compile('bg-comic-red-500');
    const decl = registration(css, slot);
    expect(decl, `@property ${slot} not emitted`).toBeTruthy();
    expect(decl).not.toContain('syntax: "*"');
    expect(decl).toContain('syntax: "padding-box | border-box | content-box | text"');
  });
});

describe.each(suiteScenarios('comic'))('bg-clip-* companions, $name', ({ compile }) => {
  test.each(CLIP_KEYWORDS)('%s writes %s to both slots', async (utility, keyword) => {
    const css = await compile(`bg-comic-red-500 ${utility}`);
    for (const slot of SLOTS) {
      expect(css, `${utility} should write ${keyword} to ${slot}`).toContain(
        `${slot}: ${keyword};`,
      );
    }
  });
});

describe('every composited shorthand reads both clip slots', () => {
  test.each(COMPOSITED)('$suite via $utility', async ({ suite, utility }) => {
    const [stable] = suiteScenarios(suite);
    const css = await stable.compile(utility);
    expect(css).toContain(BG_LAYER);
  });
});

const TAILWIND_GRADIENTS = ['bg-linear-to-r', 'bg-radial', 'bg-conic'] as const;

describe.each(suiteScenarios('comic'))('Tailwind gradients composite too, $name', ({ compile }) => {
  test.each(TAILWIND_GRADIENTS)('%s reads both clip slots', async (utility) => {
    const css = await compile(`${utility} from-red-500 to-blue-500`);
    expect(css).toContain(BG_LAYER);
  });

  test.each(TAILWIND_GRADIENTS)('%s carries bg-clip-text into both slots', async (utility) => {
    const css = await compile(`${utility} from-red-500 to-blue-500 bg-clip-text`);
    for (const slot of SLOTS) {
      expect(css, `${utility} should write text to ${slot}`).toContain(`${slot}: text;`);
    }
  });

  test('a gradient layered with a pattern still takes one clip', async () => {
    const css = await compile(
      'bg-comic-red-500 bg-linear-to-r from-red-500 to-blue-500 bg-clip-text',
    );
    for (const slot of SLOTS) {
      expect(css).toContain(`${slot}: text;`);
    }
    expect(css).toContain(BG_LAYER);
  });
});
