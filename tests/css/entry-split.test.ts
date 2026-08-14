import { describe, expect, test } from 'vitest';
import { compile } from './helpers';

/*
 * The experimental entry ADDS utilities. The functions entry OVERRIDES them.
 *
 * These were one entry. The override blocks rode along with corner, picker and
 * wcag-badge, so wanting any additive experimental utility silently opted every
 * supporting engine into the @function path for four utility families it had
 * never asked about — including text-a11y-*. Splitting the entries makes taking
 * that path a choice rather than a side effect.
 *
 * The contract this file guards:
 *
 *   main entry alone        never runs @function — the guarantee that matters,
 *                           because it covers consumers who opted into nothing
 *   experimental entry      everything experimental, overrides included
 *   experimental/functions  the overrides WITHOUT the additions
 *   experimental/<addition> an addition WITHOUT the overrides (individual subpaths)
 *
 * Both directions are asserted per module — absent from the main entry, present
 * with the opt-ins — so a regression cannot pass by breaking the override
 * outright.
 */

/*
 * WHAT TO ASSERT ON, AND WHY IT IS THE GATE AND NOT THE CALL.
 *
 * The @function call blocks live in the STABLE files (see the second
 * `@utility bg-hue-rotate-*` block in src/hue-rotate/_bg.css), gated on
 * `@variant supports-hue-rotate`. That @custom-variant is defined only in
 * _experimental.css. Without it, Tailwind falls back to its built-in supports-*
 * variant and emits `@supports (hue-rotate: var(--tw))` — a test for a CSS
 * property that does not exist, false in every engine, so the block is inert.
 *
 * So the call text is present either way and proves nothing. What changes is
 * the gate: only the functions entry brings the real one, which names the
 * per-space function. Assert on that.
 */
const OVERRIDES = [
  { module: 'lightness', cls: 'bg-lightness-20', gate: '--tw-jib--oklch-lightness(red, 20)' },
  { module: 'saturation', cls: 'bg-saturation-20', gate: '--tw-jib--oklch-saturation(red, 20)' },
  { module: 'hue-rotate', cls: 'bg-hue-rotate-45', gate: '--tw-jib--oklch-hue-rotate(red, 30)' },
  // the shade's @function block moved wholesale, so here the call itself is the tell
  {
    module: 'wcag shade',
    cls: 'text-a11y-aa',
    gate: '--tw-jib--text-color: --tw-jib--accessible-shade(',
  },
] as const;

// the inert gate the stable files compile to when the real variant is undefined
const INERT_GATES = [
  '(lightness: var(--tw))',
  '(saturation: var(--tw))',
  '(hue-rotate: var(--tw))',
];

describe('entry split — experimental adds, functions overrides', () => {
  describe('the MAIN entry never runs @function', () => {
    // This is the load-bearing guarantee. Everything else here is about which
    // opt-in gets you what; this is about a consumer who opted into nothing.
    for (const { module, cls, gate } of OVERRIDES) {
      test(`${module}: ${cls} has no live @function gate`, async () => {
        const css = await compile(`bg-blue-500 ${cls}`);
        expect(css, `${cls} reached a live @function path from the main entry alone`).not.toContain(
          gate,
        );
      });
    }

    // And that guarantee is only as good as Tailwind's fallback staying false.
    // If a future version resolves `supports-hue-rotate` to something that can
    // hold, the main entry would start running @function with nobody asking.
    test('the disabled blocks compile to a gate that cannot hold', async () => {
      const css = await compile('bg-blue-500 bg-lightness-20 bg-saturation-20 bg-hue-rotate-45');
      for (const gate of INERT_GATES) {
        expect(
          css,
          `expected the inert gate ${gate}; the stable entry may now run @function`,
        ).toContain(gate);
      }
    });
  });

  // The experimental entry is everything experimental, overrides included, so
  // importing it DOES change how these compile. Deliberate, and asserted so the
  // composition cannot drift unnoticed.
  describe('the experimental entry includes the overrides', () => {
    for (const { module, cls, gate } of OVERRIDES) {
      test(`${module}: ${cls} gets a live @function gate`, async () => {
        const css = await compile(`bg-blue-500 ${cls}`, { experimental: true });
        expect(css, `${cls} lost its @function path from the experimental entry`).toContain(gate);
      });
    }
  });

  describe('the functions entry supplies the override', () => {
    for (const { module, cls, gate } of OVERRIDES) {
      test(`${module}: ${cls} gets a live @function gate`, async () => {
        const css = await compile(`bg-blue-500 ${cls}`, { functions: true });
        expect(css, `${cls} lost its @function path`).toContain(gate);
      });
    }
  });

  // The stable form is what the main entry ships, so it must survive both — the
  // override wins on source order inside an @supports gate, it does not replace
  // the declaration in the output.
  describe('the stable form is emitted either way', () => {
    for (const { module, cls } of OVERRIDES) {
      test(`${module}: ${cls} keeps its stable declaration`, async () => {
        const bare = await compile(`bg-blue-500 ${cls}`);
        const withFns = await compile(`bg-blue-500 ${cls}`, { functions: true });
        expect(bare, `${cls} emitted nothing from the main entry`).toContain(
          `.${cls.replace('/', '\\/')}`,
        );
        expect(
          withFns,
          `${cls} lost its stable declaration when the functions entry loaded`,
        ).toContain(`.${cls.replace('/', '\\/')}`);
      });
    }
  });

  // wcag-badge ADDS a utility — colour→string has no stable form — so it stays
  // on the experimental entry and must not have followed the shade across.
  // Assert on a property only the badge utility declares, not on the function it
  // calls: wcag/_functions.css is imported by both entries, so the definitions
  // appear either way.
  test('wcag-badge stays on the experimental entry', async () => {
    const onExperimental = await compile('bg-blue-500 wcag-badge', { experimental: true });
    expect(onExperimental).toContain('--tw-jib--wcag-display:');

    const onFunctions = await compile('bg-blue-500 wcag-badge', { functions: true });
    expect(onFunctions, 'wcag-badge leaked into the functions entry').not.toContain(
      '--tw-jib--wcag-display:',
    );
  });
});
