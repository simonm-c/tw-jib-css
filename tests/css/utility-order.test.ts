import { describe, test, expect } from 'vitest';
import { compile } from './helpers.js';

/** Source order inside this layer is what decides between two class rules of
 *  equal specificity, so comparing indices here answers which one wins. */
function utilities(css: string): string {
  const start = css.indexOf('@layer utilities {');
  const end = css.indexOf('\n@property', start);
  return css.slice(start, end === -1 ? undefined : end);
}

function positionOf(css: string, declaration: string, label: string): number {
  const at = utilities(css).indexOf(declaration);
  expect(at, `${label} was not emitted`).toBeGreaterThan(-1);
  return at;
}

const SHORTHAND = 'background: var(--jib-ripple-image)';

const SHORTHAND_OWNERS = [
  'bg-ripple',
  'bg-comic-slate-500',
  'bg-pixel-blue-500',
  'bg-linear-to-r',
  'bg-none',
  'bg-[url(/a.png)]',
  'border-linear-to-r',
] as const;

describe('the composited shorthand outranks the longhands it replaces', () => {
  test.each(SHORTHAND_OWNERS)("%s sorts after Tailwind's own background-color", async (owner) => {
    const css = await compile(`bg-white/50 ${owner}`);
    const shorthand = positionOf(css, SHORTHAND, `${owner}: the composited shorthand`);
    const colour = positionOf(css, 'background-color: color-mix(', 'bg-white/50: background-color');
    expect(
      shorthand,
      'sorting first leaves Tailwind’s background-color painting beneath every layer the shorthand builds',
    ).toBeGreaterThan(colour);
  });

  test.each([
    ['bg-none', 'background-image: none'],
    ['bg-[url(/a.png)]', 'background-image: url(/a.png)'],
  ])('%s sorts after its own Tailwind longhand, %s', async (owner, longhand) => {
    const css = await compile(owner);
    const shorthand = positionOf(css, SHORTHAND, `${owner}: the composited shorthand`);
    const image = positionOf(css, longhand, `${owner}: Tailwind’s longhand`);
    expect(
      shorthand,
      'a background-image sorting later replaces every layer the shorthand built',
    ).toBeGreaterThan(image);
  });
});
