import { describe, test, expect } from 'vitest';
import { compile, stableScenarios, suiteScenarios } from './helpers.js';

// The definition shares the call's name and comes first in the output, so
// anchor on the declaration colon.
const SHADE_CALL = ': --jib-auto-contrast(';

const SUPPORTS_WCAG =
  '@supports (background: if(style(--value): red)) and (background: --jib-linearize(red))';

const SUPPORTS_CHANNEL_POW = '@supports (color: oklch(from red calc(pow(alpha, 0.5)) c h))';

const LEVELS = ['aa', 'aaa', 'aa-lg'] as const;

const COLOR_SPACES = [
  'oklch',
  'lch',
  'lab',
  'oklab',
  'hsl',
  'hwb',
  'rgb',
  'srgb',
  'srgb-linear',
  'display-p3',
  'a98-rgb',
  'prophoto-rgb',
  'rec2020',
  'xyz',
  'xyz-d50',
  'xyz-d65',
  'color-mix',
] as const;

const POW_SEEDED = ['oklch', 'oklab', 'lch', 'lab'] as const;

describe('text-contrast utilities: stable path', () => {
  describe('present WITHOUT the experimental flag', () => {
    test.each(LEVELS)('text-contrast-%s compiles from the core entry', async (level) => {
      const css = await compile(`bg-blue-500 text-contrast-${level}`);
      expect(css).toContain('--jib-contrast-shade:');
      expect(css).toContain('color: var(--jib-contrast-shade)');
    });

    test.each(LEVELS)('text-contrast-%s reaches the shade without @function', async (level) => {
      const css = await compile(`bg-blue-500 text-contrast-${level}`);
      expect(css, 'the shade called @function from the main entry alone').not.toContain(
        '--jib-auto-contrast(',
      );
      expect(css, 'the shade compiled behind a live @function gate').not.toContain(SUPPORTS_WCAG);
    });
  });

  describe.each(suiteScenarios('automatic-contrast'))(
    'each level reads its ratio from the theme map, $name',
    ({ compile }) => {
      test.each(LEVELS)('text-contrast-%s', async (level) => {
        const css = await compile(`bg-blue-500 text-contrast-${level}`);
        expect(css).toContain(`--jib-contrast-ratio: var(--jib-contrast-ratio-${level})`);
        expect(css).toContain('var(--jib-background-color)');
      });
    },
  );

  test('the level → ratio map is emitted with the three WCAG ratios', async () => {
    const css = await compile('bg-blue-500 text-contrast-aa text-contrast-aaa text-contrast-aa-lg');
    expect(css).toContain('--jib-contrast-ratio-aa: 4.5');
    expect(css).toContain('--jib-contrast-ratio-aaa: 7');
    expect(css).toContain('--jib-contrast-ratio-aa-lg: 3');
  });

  test('a consumer-defined level works end to end', async () => {
    const css = await compile('bg-blue-500 text-contrast-aa-plus', {
      extra: '@theme { --jib-contrast-ratio-aa-plus: 5; }',
    });
    expect(css).toContain('.text-contrast-aa-plus');
    expect(css).toContain('--jib-contrast-ratio: var(--jib-contrast-ratio-aa-plus)');
    expect(css).toContain('--jib-contrast-shade:');
    expect(css).toContain('--jib-contrast-ratio-aa-plus: 5');
  });

  describe('the default colour space is oklch', () => {
    test('text-contrast-aa without a modifier seeds in oklch', async () => {
      const css = await compile('bg-blue-500 text-contrast-aa');
      expect(css).toContain('--jib-contrast-vector: var(--jib-contrast-oklch)');
      expect(css).toContain('oklch(from var(--jib-contrast-target)');
    });

    test('both implementations default to oklch', async () => {
      const css = await compile('bg-blue-500 text-contrast-aa', { functions: true });
      expect(css).toContain('--jib-contrast-vector: var(--jib-contrast-oklch)');
      const call = css.slice(css.indexOf(SHADE_CALL));
      expect(call.slice(0, 300)).toMatch(/,\s*oklch\)/);
    });

    test('the bare candidate gets the precise seed behind the gate too', async () => {
      const css = await compile('bg-blue-500 text-contrast-aa');
      expect(css).toContain(SUPPORTS_CHANNEL_POW);
      const gated = css.slice(css.indexOf(SUPPORTS_CHANNEL_POW));
      expect(gated).toContain(
        '--jib-contrast-vector: color(from oklch(from var(--jib-contrast-target) calc(pow(alpha, 0.333333))',
      );
    });

    test('no shared --oklch-precise link is emitted', async () => {
      const css = await compile(
        'bg-blue-500 text-contrast-aa text-contrast-aa/oklch text-contrast-aa/lch text-contrast-aa/hsl',
      );
      expect(css).not.toContain('--jib-contrast-oklch-precise');
    });
  });

  describe.each(suiteScenarios('automatic-contrast'))(
    'colour space modifiers, $name',
    ({ compile }) => {
      test.each(COLOR_SPACES)('text-contrast-aa/%s resolves a vector', async (space) => {
        const css = await compile(`bg-blue-500 text-contrast-aa/${space}`);
        expect(css).toContain(`.text-contrast-aa\\/${space}`);
        expect(css).toContain('--jib-contrast-shade:');
        expect(css).toContain('color: var(--jib-contrast-shade)');
      });

      test('all 17 spaces compile at all 3 levels', async () => {
        const classes = LEVELS.flatMap((l) => COLOR_SPACES.map((s) => `text-contrast-${l}/${s}`));
        const css = await compile(`bg-blue-500 ${classes.join(' ')}`);
        const missing = classes.filter((c) => !css.includes(`.${c.replace('/', '\\/')}`));
        expect(
          missing,
          `${missing.length} candidates did not compile: ${missing.join(', ')}`,
        ).toHaveLength(0);
      });

      test('Class 2/3 spaces seed from the retargeted carrier', async () => {
        for (const [space, fn] of [
          ['oklch', 'oklch(from var(--jib-contrast-target)'],
          ['oklab', 'oklch(from var(--jib-contrast-target)'],
          ['lch', 'lch(from var(--jib-contrast-target)'],
          ['lab', 'lch(from var(--jib-contrast-target)'],
          ['hsl', 'hsl(from var(--jib-contrast-target)'],
          ['hwb', 'hwb(from var(--jib-contrast-target)'],
        ] as const) {
          const css = await compile(`bg-blue-500 text-contrast-aa/${space}`);
          expect(css, `${space} did not seed from the carrier`).toContain(fn);
        }
      });

      test('Class 1 spaces share the one core expression, overriding the default', async () => {
        for (const space of [
          'rgb',
          'srgb',
          'srgb-linear',
          'display-p3',
          'a98-rgb',
          'prophoto-rgb',
          'rec2020',
          'xyz',
          'xyz-d50',
          'xyz-d65',
          'color-mix',
        ] as const) {
          const css = await compile(`bg-blue-500 text-contrast-aa/${space}`);
          const dflt = css.indexOf('--jib-contrast-vector: var(--jib-contrast-oklch);');
          const core = css.indexOf('--jib-contrast-vector: var(--jib-contrast-core);');
          expect(dflt, `${space}: oklch default declaration missing`).toBeGreaterThan(-1);
          expect(core, `${space} is not routed to the core`).toBeGreaterThan(-1);
          expect(
            core,
            `${space}: the core override precedes the default, so it loses`,
          ).toBeGreaterThan(dflt);
        }
      });
    },
  );

  describe.each(stableScenarios('automatic-contrast'))('the pow() gate, $name', ({ compile }) => {
    test.each(POW_SEEDED)(
      'text-contrast-aa/%s puts its cube-root seed behind @supports',
      async (space) => {
        const css = await compile(`bg-blue-500 text-contrast-aa/${space}`);
        expect(css).toContain(SUPPORTS_CHANNEL_POW);
        expect(css).toContain('pow(alpha, 0.333333)');
        const gateIndex = css.indexOf(SUPPORTS_CHANNEL_POW);
        expect(css.slice(0, gateIndex)).not.toContain('pow(alpha');
      },
    );

    test.each(['hsl', 'hwb', 'srgb', 'xyz', 'color-mix'] as const)(
      'text-contrast-aa/%s needs no gate',
      async (space) => {
        const css = await compile(`bg-blue-500 text-contrast-aa/${space}`);
        expect(css).not.toContain(SUPPORTS_CHANNEL_POW);
        expect(css).not.toContain('pow(alpha');
      },
    );
  });

  describe.each(stableScenarios('automatic-contrast'))('registration, $name', ({ compile }) => {
    test('--jib-contrast-ratio is a non-inheriting number', async () => {
      const css = await compile('bg-blue-500 text-contrast-aa');
      const decl = css.match(/@property --jib-contrast-ratio \{[\s\S]*?\}/)?.[0];
      expect(decl, '@property --jib-contrast-ratio not emitted').toBeTruthy();
      expect(decl).toContain('syntax: "<number>"');
      expect(decl).toContain('inherits: false');
      expect(decl).toContain('initial-value: 4.5');
    });

    test('no chain intermediate is registered as a colour', async () => {
      const css = await compile('bg-blue-500 text-contrast-aa/oklch');
      for (const link of ['carrier', 'core', 'target', 'vector', 'shade']) {
        const decl = css.match(
          new RegExp(`@property --jib-contrast-${link} \\{[\\s\\S]*?\\}`),
        )?.[0];
        expect(decl, `--jib-contrast-${link} is registered: ${decl}`).toBeUndefined();
      }
    });

    test('color: reads the unregistered link, not --jib-text-color', async () => {
      const css = await compile('bg-blue-500 text-contrast-aa');
      expect(css).toContain('color: var(--jib-contrast-shade)');
      expect(css).not.toContain('color: var(--jib-text-color)');
      // still written, so the badge has something to measure
      expect(css).toContain('--jib-text-color: var(--jib-contrast-shade)');
    });
  });

  test('records the requested level for wcag-badge exactly once, bare and modified', async () => {
    for (const level of LEVELS) {
      const bare = await compile(`bg-blue-500 text-contrast-${level}`);
      const bareCount = bare.split(`--jib-contrast-level: ${level};`).length - 1;
      expect(bareCount, `bare text-contrast-${level} emitted its level record ${bareCount}×`).toBe(
        1,
      );

      const modified = await compile(`bg-blue-500 text-contrast-${level}/hsl`);
      const modCount = modified.split(`--jib-contrast-level: ${level};`).length - 1;
      expect(modCount, `text-contrast-${level}/hsl emitted its level record ${modCount}×`).toBe(1);
    }
  });

  test('state variants work', async () => {
    const css = await compile('bg-blue-500 hover:text-contrast-aa');
    expect(css).toContain('&:hover');
    expect(css).toContain('--jib-contrast-shade:');
  });

  describe.each(suiteScenarios('automatic-contrast'))(
    'oklch colours (high saturation, low sRGB luminance), $name',
    ({ compile }) => {
      test('compiles with an oklch arbitrary bg colour', async () => {
        const css = await compile('bg-[oklch(54.6%_0.245_262.881)] text-contrast-aa');
        expect(css).toContain('--jib-contrast-shade:');
        expect(css).toContain('var(--jib-background-color)');
      });

      test('compiles with an oklch arbitrary bg and a colour space modifier', async () => {
        const css = await compile('bg-[oklch(70%_0.15_150)] text-contrast-aaa/oklab');
        expect(css).toContain('--jib-contrast-shade:');
        expect(css).toContain('--jib-contrast-ratio: var(--jib-contrast-ratio-aaa)');
      });

      test('compiles with a dark oklch bg', async () => {
        const css = await compile('bg-[oklch(25%_0.1_280)] text-contrast-aa-lg');
        expect(css).toContain('--jib-contrast-shade:');
        expect(css).toContain('--jib-contrast-ratio: var(--jib-contrast-ratio-aa-lg)');
      });
    },
  );

  describe('the @function override is preferred where supported', () => {
    test('both implementations are emitted, @function last', async () => {
      const css = await compile('bg-blue-500 text-contrast-aa', { functions: true });
      const stableAt = css.indexOf('--jib-contrast-shade:');
      const fnAt = css.indexOf(SHADE_CALL);
      expect(stableAt, 'stable fallback chain missing').toBeGreaterThan(-1);
      expect(fnAt, '@function override missing').toBeGreaterThan(-1);
      expect(
        fnAt,
        '@function override precedes the stable chain, so it loses the cascade',
      ).toBeGreaterThan(stableAt);
    });

    test('the override is gated on @function support', async () => {
      const css = await compile('bg-blue-500 text-contrast-aa', { functions: true });
      const fnAt = css.indexOf(SHADE_CALL);
      expect(css.slice(0, fnAt)).toContain(SUPPORTS_WCAG);
    });

    test('the stable chain is ungated, so it is what unsupported engines get', async () => {
      const css = await compile('bg-blue-500 text-contrast-aa');
      expect(css).toContain('--jib-contrast-shade:');
      expect(css).not.toContain(SUPPORTS_WCAG);
    });

    test('all 3 levels and 17 spaces get the override', async () => {
      const candidates = LEVELS.flatMap((level) =>
        [null, ...COLOR_SPACES].map((space) =>
          space ? `text-contrast-${level}/${space}` : `text-contrast-${level}`,
        ),
      );
      const compiled = await Promise.all(
        candidates.map(async (cls) => ({
          cls,
          css: await compile(`bg-blue-500 ${cls}`, { functions: true }),
        })),
      );
      const missing = compiled.filter((c) => !c.css.includes(SHADE_CALL)).map((c) => c.cls);
      expect(
        missing,
        `${missing.length} candidates have no @function override: ${missing.join(', ')}`,
      ).toHaveLength(0);
    });

    test('a themed level keeps the stable path even with @function available', async () => {
      const css = await compile('bg-blue-500 text-contrast-aa-plus', {
        functions: true,
        extra: '@theme { --jib-contrast-ratio-aa-plus: 5; }',
      });
      expect(css).toContain('--jib-contrast-ratio: var(--jib-contrast-ratio-aa-plus)');
      const rules = [...css.matchAll(/\.text-contrast-aa-plus \{[\s\S]*?\n {2}\}/g)].map(
        (m) => m[0],
      );
      expect(rules.length, 'no .text-contrast-aa-plus rule emitted').toBeGreaterThan(0);
      for (const rule of rules) {
        expect(rule, `themed level reached the @function dispatcher:\n${rule}`).not.toContain(
          '--jib-auto-contrast(',
        );
      }
    });
  });

  test('the composable @function API is still defined', async () => {
    const css = await compile('bg-blue-500 wcag-badge', { experimental: true });
    expect(css).toContain('@function --jib-auto-contrast(');
    expect(css).toContain('@function --jib-linearize(');
  });
});

describe('wcag-badge utility: experimental', () => {
  test('not present without the experimental flag', async () => {
    const css = await compile('bg-blue-500 text-white wcag-badge');
    expect(css).not.toContain('--wcag-rating');
  });

  test('generates ::after pseudo-element', async () => {
    const css = await compile('bg-blue-500 text-white wcag-badge', { experimental: true });
    expect(css).toContain(SUPPORTS_WCAG);
    expect(css).toContain('::after');
    expect(css).toContain('--jib-wcag-rating');
    expect(css).toContain('content:');
  });

  test('reads captured bg and text colours', async () => {
    const css = await compile('bg-blue-500 text-white wcag-badge', { experimental: true });
    expect(css).toContain('--jib-wcag-rating(var(--jib-background-color)');
    expect(css).toContain('var(--jib-text-color)');
  });

  test('badge background uses conditional rating colours', async () => {
    const css = await compile('bg-blue-500 text-white wcag-badge', { experimental: true });
    expect(css).toContain('--jib-wcag-badge-bg');
    expect(css).toContain('--color-green-500');
    expect(css).toContain('--color-yellow-500');
    expect(css).toContain('--color-orange-500');
    expect(css).toContain('--color-red-500');
  });

  test('badge text uses if(style()) for colour', async () => {
    const css = await compile('bg-blue-500 text-white wcag-badge', { experimental: true });
    expect(css).toContain('style(--jib-wcag-display: "AA")');
  });

  describe('Max state', () => {
    test('--jib-contrast-level is registered as non-inheriting', async () => {
      const css = await compile('bg-blue-500 wcag-badge', { experimental: true });
      expect(css).toContain('@property --jib-contrast-level');
      expect(css).toContain('inherits: false');
    });

    test('badge derives a shortfall from the requested level', async () => {
      const css = await compile('bg-blue-500 text-white wcag-badge', { experimental: true });
      expect(css).toContain('--jib-wcag-shortfall');
      expect(css).toContain('style(--jib-contrast-level: aaa)');
      expect(css).toContain('"Max"');
    });

    test('badge displays the shortfall-aware value, not the raw rating', async () => {
      const css = await compile('bg-blue-500 text-white wcag-badge', { experimental: true });
      expect(css).toContain('content: var(--jib-wcag-display)');
    });

    // style() compares token streams, so trailing whitespace fails silently
    test('style()-compared properties have no trailing whitespace', async () => {
      const css = await compile('bg-blue-500 text-white wcag-badge', { experimental: true });
      for (const prop of ['--jib-wcag-shortfall', '--jib-wcag-display']) {
        const decl = css.match(new RegExp(`${prop}:[\\s\\S]*?;`))?.[0];
        expect(decl, `${prop} declaration not found`).toBeTruthy();
        expect(decl, `${prop} has whitespace before its closing paren`).not.toMatch(/\s\);$/);
      }
    });
  });
});
