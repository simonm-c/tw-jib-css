export interface ExpSlideData {
  /** Which half of the package this is — drives the badge colour and wording. */
  kind: 'addition' | 'override';
  kicker: string;
  headline: string;
  body: string;
  code: string;
  /** Language label on the code panel. */
  lang: 'html' | 'css';
  /** Honest browser support, shown on every slide. */
  support: string;
  stat?: string;
  statCaption?: string;
  flipped?: boolean;
  link: { text: string; href: string };
}

export const slides: ExpSlideData[] = [
  {
    kind: 'override',
    kicker: 'functions',
    headline: 'Beyond the Class Syntax.',
    body: 'Utilities own the single-property case: bg, text, border. A gradient stop, a layered shadow, an SVG stroke, a text-decoration colour — a class cannot reach in there. These functions can. Call them anywhere a <color> fits, on any token you like, with no relationship to the element’s own background.',
    code: `.card {\n  /* a stop inside a gradient */\n  background: linear-gradient(135deg,\n    var(--color-sky-400),\n    --tw-jib--saturation(var(--color-sky-400), -60));\n\n  /* two derived shadows */\n  box-shadow:\n    0 0 0 3px --tw-jib--lightness(var(--color-sky-400), -30),\n    0 16px 32px -4px --tw-jib--lightness(var(--color-sky-400), -40);\n}`,
    lang: 'css',
    support: 'Chromium only',
    stat: '5',
    statCaption: 'callable functions',
    flipped: true,
    link: { text: 'The functions entry', href: '/tw-jib-css/experimental/functions' },
  },
  {
    kind: 'override',
    kicker: 'accessible shade',
    headline: 'Accessible Shades, On Any Property.',
    body: 'text-a11y-* only ever paints text colour, on this element, from this element’s own background. The function goes anywhere: a border, an SVG stroke, a gradient stop, generated content — solved for the ratio you asked for, from whatever colour you hand it.',
    /*
     * violet-700, NOT violet-600. AAA is physically unreachable from
     * violet-600: the solve clamps to white and delivers 5.895:1, which the
     * badge correctly calls Max. This slide's whole claim is the ratio, so
     * demoing it on a colour that cannot reach the ratio disproved the claim to
     * anyone who measured it. violet-700 solves to 7.03 rendered.
     */
    code: `.cta {\n  /* both from one background token, solved for 7:1 */\n  color:        --tw-jib--accessible-shade(\n                  var(--color-violet-700), aaa, oklch);\n  border-color: --tw-jib--accessible-shade(\n                  var(--color-violet-700), aaa, oklch);\n}`,
    lang: 'css',
    support: 'Chromium only — the class form is stable everywhere',
    stat: '7:1',
    statCaption: 'on any property, not just text',
    link: { text: 'Stable accessible shade', href: '/tw-jib-css/guide/wcag' },
  },
  {
    kind: 'addition',
    kicker: 'corner shape',
    headline: 'Corners That Aren’t Arcs.',
    flipped: true,
    body: 'border-radius only ever drew a circular arc. corner-shape draws the same radius as a squircle, a bevel, a scoop, a notch — or any superellipse exponent you name. Keep your rounded-* for the size; pick the curve separately.',
    code: `<div class="rounded-2xl corner-round">\n<div class="rounded-2xl corner-squircle">\n<div class="rounded-2xl corner-bevel">\n<div class="rounded-2xl corner-scoop">\n<div class="rounded-2xl corner-notch">\n<div class="rounded-2xl corner-square">\n\n<!-- per corner, and any superellipse exponent -->\n<div class="rounded-2xl corner-t-squircle corner-b-bevel">\n<div class="rounded-2xl corner-4">`,
    lang: 'html',
    support: 'Chrome 139+ · ~68%',
    stat: '6',
    statCaption: 'named shapes, plus superellipse',
    link: { text: 'Corner Shape docs', href: '/tw-jib-css/experimental/corner' },
  },
  {
    kind: 'addition',
    kicker: 'interpolate size',
    headline: 'Animate to auto.',
    body: 'CSS has never been able to transition from a fixed size to an intrinsic keyword — 0 to auto snaps. interpolate-size: allow-keywords lifts that, on the parent, for every child. Disclosure panels and accordions stop needing a JavaScript height measurement.',
    /* Must describe what the panels beside it are doing. The demo is now an
     * autoplaying A/B rather than a :hover, so a sample showing only
     * group-hover left a reader comparing a transition against an animation. */
    code: `<!-- the utility goes on an ANCESTOR -->\n<div class="interpolate-keywords">\n\n  <!-- transition to auto -->\n  <div class="group">\n    <button>Expand</button>\n    <div class="h-0 group-hover:h-auto\n      transition-all duration-300 overflow-hidden">…</div>\n  </div>\n\n  <!-- or animate to it, as the panels here do -->\n  <div class="h-0 overflow-hidden\n    animate-[disclosure_6s_ease-in-out_infinite]">…</div>\n</div>`,
    lang: 'html',
    support: 'Chromium only · ~48%',
    stat: '0',
    statCaption: 'height measurements in JS',
    link: { text: 'Interpolate Size docs', href: '/tw-jib-css/experimental/interpolate' },
  },
  {
    kind: 'addition',
    kicker: 'base select',
    headline: 'A select You Can Actually Style.',
    body: 'appearance: base-select opts a native <select> into rendering you can reach. The popup, the arrow, the selected-item checkmark each get a variant, so the dropdown is styled with the same classes as everything else — and it stays a real select, with real keyboard and accessibility behaviour.',
    code: `<select class="appearance-base-select\n  picker:rounded-xl picker:shadow-lg picker:p-2\n  picker-icon:text-violet-500\n  open:picker-icon:rotate-180\n  checkmark:text-violet-500">\n  <option>Apple</option>\n  <option>Banana</option>\n</select>`,
    lang: 'html',
    support: 'Chromium only, Firefox in progress',
    stat: '3',
    statCaption: 'pseudo-element variants',
    flipped: true,
    link: { text: 'Base Select docs', href: '/tw-jib-css/experimental/picker' },
  },
];
