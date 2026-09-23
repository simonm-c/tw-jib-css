import { describe, test, expect } from 'vitest';
import { suiteScenarios } from './helpers.js';
import { BG_LAYER } from './constants.js';

describe.each(suiteScenarios('border-style'))('border-style utilities, $name', ({ compile }) => {
  test('border-t-dashed sets border-top-style', async () => {
    const css = await compile('border-t-dashed');
    expect(css).toContain('border-top-style: dashed');
  });

  test('border-b-dotted sets border-bottom-style', async () => {
    const css = await compile('border-b-dotted');
    expect(css).toContain('border-bottom-style: dotted');
  });

  test('border-x-double sets border-inline-style', async () => {
    const css = await compile('border-x-double');
    expect(css).toContain('border-inline-style: double');
  });

  test('border-l-solid sets border-left-style', async () => {
    const css = await compile('border-l-solid');
    expect(css).toContain('border-left-style: solid');
  });

  test('border-r-groove sets border-right-style', async () => {
    const css = await compile('border-r-groove');
    expect(css).toContain('border-right-style: groove');
  });

  test('border-y-ridge sets border-block-style', async () => {
    const css = await compile('border-y-ridge');
    expect(css).toContain('border-block-style: ridge');
  });

  test('border-s-inset sets border-inline-start-style', async () => {
    const css = await compile('border-s-inset');
    expect(css).toContain('border-inline-start-style: inset');
  });

  test('border-e-outset sets border-inline-end-style', async () => {
    const css = await compile('border-e-outset');
    expect(css).toContain('border-inline-end-style: outset');
  });

  test('border-t-solid', async () => {
    const css = await compile('border-t-solid');
    expect(css).toContain('border-top-style: solid');
  });

  test('border-t-groove', async () => {
    const css = await compile('border-t-groove');
    expect(css).toContain('border-top-style: groove');
  });

  test('border-t-ridge', async () => {
    const css = await compile('border-t-ridge');
    expect(css).toContain('border-top-style: ridge');
  });

  test('border-t-inset', async () => {
    const css = await compile('border-t-inset');
    expect(css).toContain('border-top-style: inset');
  });

  test('border-t-outset', async () => {
    const css = await compile('border-t-outset');
    expect(css).toContain('border-top-style: outset');
  });

  test('border-t-none', async () => {
    const css = await compile('border-t-none');
    expect(css).toContain('border-top-style: none');
  });

  test('border-t-hidden', async () => {
    const css = await compile('border-t-hidden');
    expect(css).toContain('border-top-style: hidden');
  });
});

describe.each(suiteScenarios('border-style'))('all-sides border styles, $name', ({ compile }) => {
  test.each(['groove', 'ridge', 'inset', 'outset'])(
    'border-%s sets border-style on every side',
    async (style) => {
      const css = await compile(`border-${style}`);
      expect(css, `border-${style} should set border-style: ${style}`).toContain(
        `border-style: ${style}`,
      );
    },
  );

  test.each(['groove', 'ridge', 'inset', 'outset'])(
    'border-%s sets --tw-border-style, so a later-sorting width utility keeps the style',
    async (style) => {
      const css = await compile(`border-${style}`);
      expect(css, `border-${style} should set --tw-border-style: ${style}`).toContain(
        `--tw-border-style: ${style}`,
      );
    },
  );

  test('border-[border-style:groove] sets border-style from an arbitrary value', async () => {
    const css = await compile('border-[border-style:groove]');
    expect(css, 'the arbitrary form should set border-style: groove').toContain(
      'border-style: groove',
    );
  });

  test('border-groove composites no background layers', async () => {
    const css = await compile('border-groove');
    expect(css, 'a border style should not author the background shorthand').not.toContain(
      BG_LAYER,
    );
  });

  test('border-groove leaves border-color alone', async () => {
    const css = await compile('border-groove');
    expect(css, 'a border style should not clear the border colour').not.toContain(
      'border-color: transparent',
    );
  });
});

describe.each(suiteScenarios('border-style'))('arbitrary border styles, $name', ({ compile }) => {
  test.each([
    ['border', 'border-style'],
    ['border-t', 'border-top-style'],
    ['border-r', 'border-right-style'],
    ['border-b', 'border-bottom-style'],
    ['border-l', 'border-left-style'],
    ['border-x', 'border-inline-style'],
    ['border-y', 'border-block-style'],
    ['border-s', 'border-inline-start-style'],
    ['border-e', 'border-inline-end-style'],
  ])('%s-[border-style:groove] sets %s', async (prefix, property) => {
    const css = await compile(`${prefix}-[border-style:groove]`);
    expect(css, `${prefix}-[border-style:groove] should set ${property}: groove`).toContain(
      `${property}: groove`,
    );
  });
});

describe.each(suiteScenarios('border-style'))('per-side style slots, $name', ({ compile }) => {
  test.each([
    ['border-t-groove', '--jib-border-t-style: groove'],
    ['border-r-ridge', '--jib-border-r-style: ridge'],
    ['border-b-inset', '--jib-border-b-style: inset'],
    ['border-l-outset', '--jib-border-l-style: outset'],
  ])('%s writes its own side slot', async (candidate, slot) => {
    const css = await compile(candidate);
    expect(css, `${candidate} should write ${slot}`).toContain(slot);
  });

  test('border-x-dotted writes both inline slots', async () => {
    const css = await compile('border-x-dotted');
    expect(css, 'border-x should write the left slot').toContain('--jib-border-l-style: dotted');
    expect(css, 'border-x should write the right slot').toContain('--jib-border-r-style: dotted');
  });

  test('border-y-double writes both block slots', async () => {
    const css = await compile('border-y-double');
    expect(css, 'border-y should write the top slot').toContain('--jib-border-t-style: double');
    expect(css, 'border-y should write the bottom slot').toContain('--jib-border-b-style: double');
  });

  test('border-s-groove picks its physical slot by writing direction', async () => {
    const css = await compile('border-s-groove');
    expect(css, 'inline-start should be the left slot under ltr').toMatch(
      /:dir\(ltr\)[\s\S]*?--jib-border-l-style: groove/,
    );
    expect(css, 'inline-start should be the right slot under rtl').toMatch(
      /:dir\(rtl\)[\s\S]*?--jib-border-r-style: groove/,
    );
  });

  test('border-e-groove picks the opposite slot from border-s-*', async () => {
    const css = await compile('border-e-groove');
    expect(css, 'inline-end should be the right slot under ltr').toMatch(
      /:dir\(ltr\)[\s\S]*?--jib-border-r-style: groove/,
    );
    expect(css, 'inline-end should be the left slot under rtl').toMatch(
      /:dir\(rtl\)[\s\S]*?--jib-border-l-style: groove/,
    );
  });
});

describe.each(suiteScenarios('border-style'))('width readers, $name', ({ compile }) => {
  test.each(['border-4', 'border', 'border-[3px]'])(
    '%s reads all four slots instead of the single shared style',
    async (candidate) => {
      const css = await compile(candidate);
      for (const side of ['top', 'right', 'bottom', 'left']) {
        const slot = `--jib-border-${side[0]}-style`;
        expect(css, `${candidate} should read ${slot} for border-${side}-style`).toContain(
          `border-${side}-style: var(${slot}, var(--tw-border-style))`,
        );
      }
    },
  );

  test.each([
    ['border-t-4', 'top', 't'],
    ['border-r-4', 'right', 'r'],
    ['border-b-4', 'bottom', 'b'],
    ['border-l-4', 'left', 'l'],
  ])('%s reads only its own slot', async (candidate, side, key) => {
    const css = await compile(candidate);
    expect(css, `${candidate} should read --jib-border-${key}-style`).toContain(
      `border-${side}-style: var(--jib-border-${key}-style, var(--tw-border-style))`,
    );
  });

  test('a width reader falls back to Tailwind’s own style variable', async () => {
    const css = await compile('border-4 border-dashed');
    expect(css, 'the fallback keeps stock border-dashed working').toContain(
      'var(--tw-border-style)',
    );
    expect(css, 'Tailwind still sets its own variable').toContain('--tw-border-style: dashed');
  });

  test('the four-value list is never written into the shared style variable', async () => {
    const css = await compile('border-4 border-t-groove border-groove');
    expect(css, 'a list in --tw-border-style would compute to none in a longhand').not.toMatch(
      /--tw-border-style:\s*var\([^;]*var\(/,
    );
  });
});
