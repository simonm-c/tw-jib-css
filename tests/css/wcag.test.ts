import { describe, test, expect } from 'vitest';
import { compile } from './helpers.js';

/**
 * Tests for the WCAG module, which is split across both entries:
 *
 *   text-a11y-*  two implementations. The @function dispatcher in
 *                wcag/_utilities.css is preferred and wins wherever CSS
 *                @function exists; the nested relative-colour chain in
 *                wcag/_stable.css ships from the core entry as the fallback.
 *                Same arrangement as bg-lightness-* and its siblings.
 *   wcag-badge   experimental only, needs @function + if(style()), no fallback.
 *
 * So the shade must compile WITHOUT { experimental: true } — that is the whole
 * point of the fallback — and must additionally pick up the @function override
 * WITH it. The badge must appear only with the flag. The shade assertions here
 * were previously the inverse, asserting absence without the flag, because the
 * @function path used to be the only implementation.
 */

const SUPPORTS_WCAG =
  '@supports (background: if(style(--value): red)) and (background: --tw-jib--linearize(red))';

const SUPPORTS_CHANNEL_POW = '@supports (color: oklch(from red calc(pow(alpha, 0.5)) c h))';

const LEVELS = ['aa', 'aaa', 'aa-lg'] as const;

const COLOR_SPACES = [
  'oklch', 'lch', 'lab', 'oklab', 'hsl', 'hwb', 'rgb',
  'srgb', 'srgb-linear', 'display-p3', 'a98-rgb',
  'prophoto-rgb', 'rec2020', 'xyz', 'xyz-d50', 'xyz-d65',
  'color-mix',
] as const;

/** The four spaces whose precise seed needs a cube root, hence the pow() gate. */
const POW_SEEDED = ['oklch', 'oklab', 'lch', 'lab'] as const;

describe('text-a11y utilities — stable path', () => {
  describe('present WITHOUT the experimental flag', () => {
    test.each(LEVELS)('text-a11y-%s compiles from the core entry', async (level) => {
      const css = await compile(`bg-blue-500 text-a11y-${level}`);
      expect(css).toContain('--tw-jib--a11y--shade:');
      expect(css).toContain('color: var(--tw-jib--a11y--shade)');
      // and it must not need @function to get there
      expect(css).not.toContain('--tw-jib--accessible-shade(');
      expect(css).not.toContain(SUPPORTS_WCAG);
    });
  });

  describe('each level reads its ratio from the theme map', () => {
    test.each(LEVELS)('text-a11y-%s', async (level) => {
      const css = await compile(`bg-blue-500 text-a11y-${level}`);
      expect(css).toContain(`--tw-jib--a11y--ratio: var(--tw-jib--a11y-ratio-${level})`);
      expect(css).toContain('var(--tw-jib--background-color)');
    });
  });

  test('the level → ratio map is emitted with the three WCAG ratios', async () => {
    const css = await compile('bg-blue-500 text-a11y-aa text-a11y-aaa text-a11y-aa-lg');
    expect(css).toContain('--tw-jib--a11y-ratio-aa: 4.5');
    expect(css).toContain('--tw-jib--a11y-ratio-aaa: 7');
    expect(css).toContain('--tw-jib--a11y-ratio-aa-lg: 3');
  });

  // The map is what makes levels themeable, and that only holds while nothing
  // consulting it hard-codes the three names. A --value() that fails to resolve
  // drops its whole block, so the enumerated --tw-jib--a11y-level record has to
  // live in a separate block from the ratio lookup.
  test('a consumer-defined level works end to end', async () => {
    const css = await compile('bg-blue-500 text-a11y-aa-plus', {
      extra: '@theme { --tw-jib--a11y-ratio-aa-plus: 5; }',
    });
    expect(css).toContain('.text-a11y-aa-plus');
    expect(css).toContain('--tw-jib--a11y--ratio: var(--tw-jib--a11y-ratio-aa-plus)');
    expect(css).toContain('--tw-jib--a11y--shade:');
    expect(css).toContain('--tw-jib--a11y-ratio-aa-plus: 5');
  });

  describe('the default colour space is oklch', () => {
    // oklch is Tailwind 4's own working space and the default for every colour
    // transform in this library, so the shade follows suit.
    test('text-a11y-aa without a modifier seeds in oklch', async () => {
      const css = await compile('bg-blue-500 text-a11y-aa');
      expect(css).toContain('--tw-jib--a11y--vector: var(--tw-jib--a11y--oklch)');
      expect(css).toContain('oklch(from var(--tw-jib--a11y--target)');
    });

    // The two implementations must default to the SAME space, or a bare
    // text-a11y-aa would be seeded one way on Chromium and another elsewhere.
    test('both implementations default to oklch', async () => {
      const css = await compile('bg-blue-500 text-a11y-aa', { experimental: true });
      expect(css).toContain('--tw-jib--a11y--vector: var(--tw-jib--a11y--oklch)');
      const call = css.slice(css.indexOf('--tw-jib--accessible-shade('));
      expect(call.slice(0, 300)).toMatch(/\n\s+oklch\n/);
    });

    test('the bare candidate gets the precise seed behind the gate too', async () => {
      // Block C is reached via --modifier(), so it cannot serve the bare
      // candidate; block D exists for exactly that and must be gated the same.
      const css = await compile('bg-blue-500 text-a11y-aa');
      expect(css).toContain(SUPPORTS_CHANNEL_POW);
      const gated = css.slice(css.indexOf(SUPPORTS_CHANNEL_POW));
      expect(gated).toContain('--tw-jib--a11y--vector: var(--tw-jib--a11y--oklch-precise)');
    });
  });

  describe('colour space modifiers', () => {
    test.each(COLOR_SPACES)('text-a11y-aa/%s resolves a vector', async (space) => {
      const css = await compile(`bg-blue-500 text-a11y-aa/${space}`);
      expect(css).toContain(`.text-a11y-aa\\/${space}`);
      expect(css).toContain('--tw-jib--a11y--shade:');
      expect(css).toContain('color: var(--tw-jib--a11y--shade)');
    });

    test('all 17 spaces compile at all 3 levels', async () => {
      const classes = LEVELS.flatMap((l) => COLOR_SPACES.map((s) => `text-a11y-${l}/${s}`));
      const css = await compile(`bg-blue-500 ${classes.join(' ')}`);
      const missing = classes.filter((c) => !css.includes(`.${c.replace('/', '\\/')}`));
      expect(missing, `${missing.length} candidates did not compile: ${missing.join(', ')}`).toHaveLength(0);
    });

    test('Class 2/3 spaces seed from the retargeted carrier', async () => {
      for (const [space, fn] of [
        ['oklch', 'oklch(from var(--tw-jib--a11y--target)'],
        ['oklab', 'oklch(from var(--tw-jib--a11y--target)'],
        ['lch', 'lch(from var(--tw-jib--a11y--target)'],
        ['lab', 'lch(from var(--tw-jib--a11y--target)'],
        ['hsl', 'hsl(from var(--tw-jib--a11y--target)'],
        ['hwb', 'hwb(from var(--tw-jib--a11y--target)'],
      ] as const) {
        const css = await compile(`bg-blue-500 text-a11y-aa/${space}`);
        expect(css, `${space} did not seed from the carrier`).toContain(fn);
      }
    });

    test('Class 1 spaces share the one core expression, overriding the default', async () => {
      // The oklch default declaration is always emitted; the modifier's is
      // emitted after it and wins. Order is the assertion — a core declaration
      // that landed first would be dead.
      for (const space of ['rgb', 'srgb', 'srgb-linear', 'display-p3', 'a98-rgb',
        'prophoto-rgb', 'rec2020', 'xyz', 'xyz-d50', 'xyz-d65', 'color-mix'] as const) {
        const css = await compile(`bg-blue-500 text-a11y-aa/${space}`);
        const dflt = css.indexOf('--tw-jib--a11y--vector: var(--tw-jib--a11y--oklch);');
        const core = css.indexOf('--tw-jib--a11y--vector: var(--tw-jib--a11y--core);');
        expect(dflt, `${space}: oklch default declaration missing`).toBeGreaterThan(-1);
        expect(core, `${space} is not routed to the core`).toBeGreaterThan(-1);
        expect(core, `${space}: the core override precedes the default, so it loses`).toBeGreaterThan(dflt);
      }
    });
  });

  describe('the pow() gate', () => {
    test.each(POW_SEEDED)('text-a11y-aa/%s puts its cube-root seed behind @supports', async (space) => {
      const css = await compile(`bg-blue-500 text-a11y-aa/${space}`);
      expect(css).toContain(SUPPORTS_CHANNEL_POW);
      expect(css).toContain('pow(alpha, 0.333333)');
      // The portable seed must still be there, outside the gate — Gecko has to
      // get an exact-ratio shade, not an ignored modifier.
      const gateIndex = css.indexOf(SUPPORTS_CHANNEL_POW);
      expect(css.slice(0, gateIndex)).not.toContain('pow(alpha');
    });

    test.each(['hsl', 'hwb', 'srgb', 'xyz', 'color-mix'] as const)(
      'text-a11y-aa/%s needs no gate',
      async (space) => {
        const css = await compile(`bg-blue-500 text-a11y-aa/${space}`);
        expect(css).not.toContain(SUPPORTS_CHANNEL_POW);
        expect(css).not.toContain('pow(alpha');
      },
    );
  });

  describe('registration', () => {
    test('--tw-jib--a11y--ratio is a non-inheriting number', async () => {
      const css = await compile('bg-blue-500 text-a11y-aa');
      const decl = css.match(/@property --tw-jib--a11y--ratio \{[\s\S]*?\}/)?.[0];
      expect(decl, '@property --tw-jib--a11y--ratio not emitted').toBeTruthy();
      expect(decl).toContain("syntax: '<number>'");
      expect(decl).toContain('inherits: false');
      expect(decl).toContain('initial-value: 4.5');
    });

    // §4.3 regression guard. Registering a chain link as <color> forces the
    // engine to evaluate it into a colour value; Gecko stores that at reduced
    // precision and the error compounds through the carrier's alpha, which IS
    // the target luminance. Measured over 27 cells: Firefox falls from 23 exact
    // to 9. Every intermediate must stay an unregistered token stream.
    test('no chain intermediate is registered as a colour', async () => {
      const css = await compile('bg-blue-500 text-a11y-aa/oklch');
      for (const link of ['carrier', 'core', 'target', 'vector', 'shade']) {
        const decl = css.match(new RegExp(`@property --tw-jib--a11y--${link} \\{[\\s\\S]*?\\}`))?.[0];
        expect(decl, `--tw-jib--a11y--${link} is registered: ${decl}`).toBeUndefined();
      }
    });

    // The delivered colour deliberately does not read back through
    // --tw-jib--text-color, which core.css registers as <color>. That last hop
    // measured exact on all three engines, so this is belt-and-braces: it keeps
    // the shade off a registered <color> entirely, one hop from where
    // registration demonstrably destroys the ratio.
    test('color: reads the unregistered link, not --tw-jib--text-color', async () => {
      const css = await compile('bg-blue-500 text-a11y-aa');
      expect(css).toContain('color: var(--tw-jib--a11y--shade)');
      expect(css).not.toContain('color: var(--tw-jib--text-color)');
      // still written, so the badge has something to measure
      expect(css).toContain('--tw-jib--text-color: var(--tw-jib--a11y--shade)');
    });
  });

  test('records the requested level for wcag-badge, bare and modified', async () => {
    for (const level of LEVELS) {
      const bare = await compile(`bg-blue-500 text-a11y-${level}`);
      expect(bare, `bare text-a11y-${level} lost its level record`).toContain(
        `--tw-jib--a11y-level: ${level}`,
      );
      const modified = await compile(`bg-blue-500 text-a11y-${level}/hsl`);
      expect(modified, `text-a11y-${level}/hsl lost its level record`).toContain(
        `--tw-jib--a11y-level: ${level}`,
      );
    }
  });

  test('state variants work', async () => {
    const css = await compile('bg-blue-500 hover:text-a11y-aa');
    expect(css).toContain('&:hover');
    expect(css).toContain('--tw-jib--a11y--shade:');
  });

  describe('oklch colours (high saturation, low sRGB luminance)', () => {
    test('compiles with an oklch arbitrary bg colour', async () => {
      const css = await compile('bg-[oklch(54.6%_0.245_262.881)] text-a11y-aa');
      expect(css).toContain('--tw-jib--a11y--shade:');
      expect(css).toContain('var(--tw-jib--background-color)');
    });

    test('compiles with an oklch arbitrary bg and a colour space modifier', async () => {
      const css = await compile('bg-[oklch(70%_0.15_150)] text-a11y-aaa/oklab');
      expect(css).toContain('--tw-jib--a11y--shade:');
      expect(css).toContain('--tw-jib--a11y--ratio: var(--tw-jib--a11y-ratio-aaa)');
    });

    test('compiles with a dark oklch bg', async () => {
      const css = await compile('bg-[oklch(25%_0.1_280)] text-a11y-aa-lg');
      expect(css).toContain('--tw-jib--a11y--shade:');
      expect(css).toContain('--tw-jib--a11y--ratio: var(--tw-jib--a11y-ratio-aa-lg)');
    });
  });

  // The @function path is the preferred one, so where it is available it has to
  // WIN. Same-name @utility blocks resolve on source order, and the only reason
  // it lands later is that wcag.css is imported after the core entry — which
  // makes this a real regression guard, not a tautology.
  describe('the @function override is preferred where supported', () => {
    test('both implementations are emitted, @function last', async () => {
      const css = await compile('bg-blue-500 text-a11y-aa', { experimental: true });
      const stableAt = css.indexOf('--tw-jib--a11y--shade:');
      const fnAt = css.indexOf('--tw-jib--accessible-shade(\n');
      expect(stableAt, 'stable fallback chain missing').toBeGreaterThan(-1);
      expect(fnAt, '@function override missing').toBeGreaterThan(-1);
      expect(fnAt, '@function override precedes the stable chain, so it loses the cascade').toBeGreaterThan(stableAt);
    });

    test('the override is gated on @function support', async () => {
      const css = await compile('bg-blue-500 text-a11y-aa', { experimental: true });
      const fnAt = css.indexOf('--tw-jib--accessible-shade(\n');
      expect(css.slice(0, fnAt)).toContain(SUPPORTS_WCAG);
    });

    test('the stable chain is ungated, so it is what unsupported engines get', async () => {
      const css = await compile('bg-blue-500 text-a11y-aa');
      expect(css).toContain('--tw-jib--a11y--shade:');
      expect(css).not.toContain(SUPPORTS_WCAG);
    });

    test('all 3 levels and 17 spaces get the override', async () => {
      const missing: string[] = [];
      for (const level of LEVELS) {
        for (const space of [null, ...COLOR_SPACES]) {
          const cls = space ? `text-a11y-${level}/${space}` : `text-a11y-${level}`;
          const css = await compile(`bg-blue-500 ${cls}`, { experimental: true });
          if (!css.includes('--tw-jib--accessible-shade(\n')) missing.push(cls);
        }
      }
      expect(missing, `${missing.length} candidates have no @function override: ${missing.join(', ')}`).toHaveLength(0);
    });

    // A consumer's own level has no ratio the @function dispatcher can be told
    // about, so it must keep the stable path on every engine rather than
    // silently resolving to the else branch's 4.5.
    test('a themed level keeps the stable path even with @function available', async () => {
      const css = await compile('bg-blue-500 text-a11y-aa-plus', {
        experimental: true,
        extra: '@theme { --tw-jib--a11y-ratio-aa-plus: 5; }',
      });
      expect(css).toContain('--tw-jib--a11y--ratio: var(--tw-jib--a11y-ratio-aa-plus)');
      const rules = [...css.matchAll(/\.text-a11y-aa-plus \{[\s\S]*?\n {2}\}/g)].map((m) => m[0]);
      expect(rules.length, 'no .text-a11y-aa-plus rule emitted').toBeGreaterThan(0);
      for (const rule of rules) {
        expect(rule, `themed level reached the @function dispatcher:\n${rule}`).not.toContain(
          '--tw-jib--accessible-shade(',
        );
      }
    });
  });

  test('the composable @function API is still defined', async () => {
    const css = await compile('bg-blue-500 wcag-badge', { experimental: true });
    expect(css).toContain('@function --tw-jib--accessible-shade(');
    expect(css).toContain('@function --tw-jib--linearize(');
  });
});

describe('wcag-badge utility — experimental', () => {
  test('not present without the experimental flag', async () => {
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
    test('--tw-jib--a11y-level is registered as non-inheriting', async () => {
      const css = await compile('bg-blue-500 wcag-badge', { experimental: true });
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
