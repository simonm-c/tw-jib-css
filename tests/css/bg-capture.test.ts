import { describe, test, expect } from 'vitest';
import { compile, registration, suiteScenarios } from './helpers.js';
import { BG_LAYER, BG_LAYER_TEXTURED } from './constants.js';

const GEOMETRY_SLOTS = [
  '--jib-background-position',
  '--jib-background-size',
  '--jib-background-repeat',
  '--jib-background-attachment',
] as const;

const SIZE = [
  ['bg-auto', 'auto'],
  ['bg-cover', 'cover'],
  ['bg-contain', 'contain'],
  ['bg-size-[30px_20px]', '30px 20px'],
] as const;

const POSITION = [
  ['bg-top', 'top'],
  ['bg-bottom', 'bottom'],
  ['bg-left', 'left'],
  ['bg-right', 'right'],
  ['bg-center', 'center'],
  ['bg-top-left', 'left top'],
  ['bg-top-right', 'right top'],
  ['bg-bottom-left', 'left bottom'],
  ['bg-bottom-right', 'right bottom'],
  ['bg-position-[10px_4px]', '10px 4px'],
] as const;

const REPEAT = [
  ['bg-repeat', 'repeat'],
  ['bg-no-repeat', 'no-repeat'],
  ['bg-repeat-x', 'repeat-x'],
  ['bg-repeat-y', 'repeat-y'],
  ['bg-repeat-space', 'space'],
  ['bg-repeat-round', 'round'],
] as const;

const ATTACHMENT = [
  ['bg-fixed', 'fixed'],
  ['bg-local', 'local'],
  ['bg-scroll', 'scroll'],
] as const;

const ORIGIN = [
  ['bg-origin-border', 'border-box'],
  ['bg-origin-padding', 'padding-box'],
  ['bg-origin-content', 'content-box'],
] as const;

describe('slot registration', () => {
  test.each([...GEOMETRY_SLOTS, '--jib-background-origin', '--jib-border-gradient-origin'])(
    '%s constrains its syntax rather than accepting any token',
    async (slot) => {
      const decl = registration(await compile('bg-ripple'), slot);
      expect(decl, `@property ${slot} not emitted`).toBeTruthy();
      expect(decl, `a "*" slot substitutes a bad value and invalidates every layer`).not.toContain(
        'syntax: "*"',
      );
    },
  );

  test('the colour underlay defaults to transparent so an unset slot paints nothing', async () => {
    const decl = registration(await compile('bg-ripple'), '--jib-background-color-layer');
    expect(decl, '@property --jib-background-color-layer not emitted').toBeTruthy();
    expect(decl).toContain('initial-value: transparent');
  });
});

const CAPTURED: [slot: string, pairs: readonly (readonly [string, string])[]][] = [
  ['--jib-background-size', SIZE],
  ['--jib-background-position', POSITION],
  ['--jib-background-repeat', REPEAT],
  ['--jib-background-attachment', ATTACHMENT],
];

describe.each(suiteScenarios('ripple'))('Tailwind companions, $name', ({ compile: build }) => {
  test.each(CAPTURED.flatMap(([slot, pairs]) => pairs.map(([u, v]) => [u, v, slot] as const)))(
    '%s routes %s into the shorthand',
    async (utility, value, slot) => {
      const css = await build(`bg-ripple ${utility}`);
      expect(css, `${utility} should write ${value} to ${slot}`).toContain(`${slot}: ${value};`);
    },
  );

  test.each(ORIGIN)(
    '%s writes %s to the content and border-gradient slots',
    async (utility, box) => {
      const css = await build(`bg-ripple ${utility}`);
      for (const slot of ['--jib-background-origin', '--jib-border-gradient-origin']) {
        expect(css, `${utility} should write ${box} to ${slot}`).toContain(`${slot}: ${box};`);
      }
    },
  );
});

describe('the composited shorthand', () => {
  test.each(GEOMETRY_SLOTS)('reads %s on its content layer', (slot) => {
    expect(
      BG_LAYER,
      `the shorthand ignores ${slot}, so Tailwind's longhand stays overwritten`,
    ).toContain(`var(${slot})`);
  });

  const COLOUR_POSITION = 'var(--jib-border-gradient-clip) var(--jib-background-color-layer)';

  test.each(['bg-none', 'bg-[url(/a.png)]', 'bg-linear-to-r'])(
    '%s replaces the image position, so its shorthand carries the colour underlay',
    async (utility) => {
      const css = await compile(utility);
      expect(
        css,
        'the colour is evicted from the image layer, leaving the underlay the only place it can paint',
      ).toContain(COLOUR_POSITION);
    },
  );

  test.each(['bg-ripple', 'bg-comic-slate-500', 'bg-pixel-blue-500', 'border-linear-to-r'])(
    '%s reads the image slot, so its shorthand leaves the colour underlay off',
    async (utility) => {
      const css = await compile(utility);
      expect(
        css,
        'the colour already rides in its image layer; carrying it underneath as well paints it twice',
      ).not.toContain(COLOUR_POSITION);
    },
  );

  test.each(GEOMETRY_SLOTS)('leaves %s off a texture, which supplies its own geometry', (slot) => {
    expect(BG_LAYER_TEXTURED).not.toContain(`var(${slot})`);
  });
});

describe('the colour underlay', () => {
  test('a colour utility fills it so bg-none still paints that colour', async () => {
    const css = await compile('bg-red-500 bg-none');
    expect(css).toContain('--jib-background-color-layer: var(--jib-background-color);');
  });

  test('bg-current fills it from the inherited colour', async () => {
    const css = await compile('bg-current');
    expect(css).toContain('--jib-background-color-layer: var(--jib-background-color);');
  });

  test('an image utility leaves it unset rather than painting canvas behind the image', async () => {
    const css = await compile('bg-[url(/hero.jpg)]');
    expect(css).not.toContain('--jib-background-color-layer: var(');
  });
});

describe('Tailwind spells size, position and image on the bare bg-* namespace too', () => {
  test.each([
    ['bg-[size:cover]', '--jib-background-size', 'cover'],
    ['bg-(size:--v)', '--jib-background-size', 'var(--v)'],
    ['bg-[position:center]', '--jib-background-position', 'center'],
    ['bg-(position:--v)', '--jib-background-position', 'var(--v)'],
    ['bg-[center]', '--jib-background-position', 'center'],
    ['bg-[30px_20px]', '--jib-background-position', '30px 20px'],
  ])('%s routes into %s', async (utility, slot, value) => {
    const css = await compile(utility);
    expect(css, `${utility} should write ${value} to ${slot}`).toContain(`${slot}: ${value};`);
  });

  test.each([
    ['bg-[url(/a.png)]', 'url(/a.png)'],
    ['bg-[image:linear-gradient(red,blue)]', 'linear-gradient(red,blue)'],
    ['bg-[linear-gradient(red,blue)]', 'linear-gradient(red,blue)'],
    ['bg-(image:--v)', 'var(--v)'],
  ])('%s fills the image slot', async (utility, value) => {
    const css = await compile(utility);
    expect(css, `${utility} should write ${value} to --jib-background-image`).toContain(
      `--jib-background-image: ${value};`,
    );
  });

  test('bg-[cover] stays uncaptured, because the hint that matches it also claims lengths', async () => {
    const css = await compile('bg-[cover]');
    expect(
      css,
      'capturing it would set the size slot where Tailwind sets background-position',
    ).not.toContain('--jib-background-size: cover;');
  });
});
