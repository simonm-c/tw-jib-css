import { describe, test, expect } from 'vitest';
import { compileEntries } from './helpers.js';

const INITIAL_VALUES: Record<string, string> = {
  '--jib-accent-color': 'black',
  '--jib-accent-color-source': 'transparent',
  '--jib-accent-hue-amount': '0',
  '--jib-accent-lightness-amount': '0',
  '--jib-accent-saturation-amount': '0',
  '--jib-background-attachment': 'scroll',
  '--jib-background-clip': 'padding-box',
  '--jib-background-color': 'canvas',
  '--jib-background-color-layer': 'transparent',
  '--jib-background-color-source': 'canvas',
  '--jib-background-hue-amount': '0',
  '--jib-background-image': 'linear-gradient(canvas 0 0)',
  '--jib-background-lightness-amount': '0',
  '--jib-background-origin': 'padding-box',
  '--jib-background-position': '0% 0%',
  '--jib-background-repeat': 'repeat',
  '--jib-background-saturation-amount': '0',
  '--jib-background-size': 'auto',
  '--jib-border-color': 'black',
  '--jib-border-color-source': 'transparent',
  '--jib-border-gradient': 'linear-gradient(transparent 0 0)',
  '--jib-border-gradient-angle': '0deg',
  '--jib-border-gradient-clip': 'border-box',
  '--jib-border-gradient-from': '#0000',
  '--jib-border-gradient-from-position': '0%',
  '--jib-border-gradient-origin': 'border-box',
  '--jib-border-gradient-to': '#0000',
  '--jib-border-gradient-to-position': '100%',
  '--jib-border-gradient-via': '#0000',
  '--jib-border-gradient-via-position': '50%',
  '--jib-border-hue-amount': '0',
  '--jib-border-lightness-amount': '0',
  '--jib-border-saturation-amount': '0',
  '--jib-border-spin-direction': 'normal',
  '--jib-border-spin-duration': '1s',
  '--jib-comic-bleed': '1px',
  '--jib-comic-color': 'black',
  '--jib-comic-dot': '1px',
  '--jib-comic-gap': '2px',
  '--jib-comic-opacity': '1',
  '--jib-contrast-ratio': '4.5',
  '--jib-fill-color': 'black',
  '--jib-fill-color-source': 'transparent',
  '--jib-fill-hue-amount': '0',
  '--jib-fill-lightness-amount': '0',
  '--jib-fill-saturation-amount': '0',
  '--jib-gradient-interpolation': 'in oklab',
  '--jib-outline-color': 'black',
  '--jib-outline-color-source': 'transparent',
  '--jib-outline-hue-amount': '0',
  '--jib-outline-lightness-amount': '0',
  '--jib-outline-saturation-amount': '0',
  '--jib-pixel-bloom': '1px',
  '--jib-pixel-color': 'white',
  '--jib-pixel-gap': '1',
  '--jib-pixel-opacity': '1',
  '--jib-pixel-size': '1px',
  '--jib-ripple-color': 'oklch(1 0 0 / 20%)',
  '--jib-ripple-color-mix': '0%',
  '--jib-ripple-distance': '100%',
  '--jib-ripple-duration': '0.3s',
  '--jib-ripple-fade-amount': '0%',
  '--jib-ripple-image':
    'radial-gradient(circle at center, transparent 0%, transparent 0%, transparent 0%, transparent 100%)',
  '--jib-ripple-opacity': '0',
  '--jib-ripple-position': 'center',
  '--jib-stroke-color': 'black',
  '--jib-stroke-color-source': 'transparent',
  '--jib-stroke-hue-amount': '0',
  '--jib-stroke-lightness-amount': '0',
  '--jib-stroke-saturation-amount': '0',
  '--jib-text-color': 'canvastext',
  '--jib-text-color-source': 'canvastext',
  '--jib-text-hue-amount': '0',
  '--jib-text-lightness-amount': '0',
  '--jib-text-saturation-amount': '0',
  '--jib-wcag-shortfall': '0',
};

const VISIBLE_SEED_CHANNELS = [
  ['background', 'canvas'],
  ['text', 'canvastext'],
] as const;

const TRANSPARENT_SEED_CHANNELS = ['accent', 'border', 'fill', 'outline', 'stroke'] as const;

/** Tailwind emits a registration only for a utility in the candidate list. */
const ALL_UTILITIES = [
  'bg-red-500 bg-lighten-20 bg-hue-rotate-20 bg-saturate-20',
  'text-lighten-20 text-hue-rotate-20 text-saturate-20',
  'fill-lighten-20 fill-hue-rotate-20 fill-saturate-20',
  'stroke-lighten-20 stroke-hue-rotate-20 stroke-saturate-20',
  'outline-lighten-20 outline-hue-rotate-20 outline-saturate-20',
  'accent-lighten-20 accent-hue-rotate-20 accent-saturate-20',
  'border-lighten-20 border-hue-rotate-20 border-saturate-20',
  'bg-comic-red-500 bg-pixel-red-500 bg-ripple bg-clip-text',
  'border-linear-to-r text-contrast-aa wcag-badge',
].join(' ');

const ENTRIES = [
  './packages/tw-jib-css/src/index.css',
  './packages/tw-jib-css-experimental/src/index.css',
];

function initialValues(css: string): Map<string, string> {
  const found = new Map<string, string>();
  for (const block of css.matchAll(/@property (--[\w-]+) \{(.*?)\n\}/gs)) {
    const initial = block[2].match(/initial-value:\s*([^;]+);/);
    if (initial) found.set(block[1], initial[1].trim());
  }
  return found;
}

describe('registered initial values', () => {
  let cached: Map<string, string> | undefined;
  async function emitted() {
    cached ??= initialValues(await compileEntries(ENTRIES, ALL_UTILITIES));
    return cached;
  }

  test.each(Object.entries(INITIAL_VALUES))('%s initialises to %s', async (name, expected) => {
    const found = await emitted();
    expect(found.has(name), `${name} is registered without an initial value, or not at all`).toBe(
      true,
    );
    expect(found.get(name), `${name} changed the value every sourceless use falls back to`).toBe(
      expected,
    );
  });

  test('no registration carries an initial value this table does not pin', async () => {
    const found = await emitted();
    const unpinned = [...found.keys()].filter((name) => !(name in INITIAL_VALUES));
    expect(
      unpinned,
      'a new registered initial value must be added to INITIAL_VALUES so a later change to it fails here',
    ).toEqual([]);
  });

  test.each(VISIBLE_SEED_CHANNELS)(
    '%s seeds its transform chain from a colour that renders',
    async (channel, expected) => {
      const found = await emitted();
      expect(
        found.get(`--jib-${channel}-color-source`),
        `a transform reads -source, so seeding it from transparent renders nothing for ${channel}`,
      ).toBe(expected);
    },
  );

  test.each(VISIBLE_SEED_CHANNELS)(
    '%s seeds the chain and its composed output identically',
    async (channel) => {
      const found = await emitted();
      expect(
        found.get(`--jib-${channel}-color-source`),
        `${channel} would render one colour through a transform and another without one`,
      ).toBe(found.get(`--jib-${channel}-color`));
    },
  );

  test.each(TRANSPARENT_SEED_CHANNELS)(
    '%s deliberately seeds its transform chain from transparent',
    async (channel) => {
      const found = await emitted();
      expect(
        found.get(`--jib-${channel}-color-source`),
        `${channel} renders nothing from a transform alone; changing this is a deliberate choice, not a fix`,
      ).toBe('transparent');
    },
  );
});
