export interface FeatureSlideData {
  /** Drives the badge colour and wording. */
  kind: 'addition' | 'override';
  kicker: string;
  headline: string;
  body: string;
  code: string;
  lang: 'html' | 'css';
  flipped?: boolean;
  link: { text: string; href: string };
}

export const slides: FeatureSlideData[] = [
  {
    kind: 'override',
    kicker: 'functions',
    headline: 'Color transforms as callable CSS functions.',
    body: "Utilities own the single-property case: bg, text, border. A gradient stop, a layered shadow, an SVG stroke, a text-decoration color. A class cannot reach in there. These functions can, anywhere a <color> fits, on any token, with no relationship to the element's own background.",
    code: `.card {\n  /* a stop inside a gradient */\n  background: linear-gradient(135deg,\n    var(--color-sky-400),\n    --tw-jib--saturation(var(--color-sky-400), -60));\n\n  /* two derived shadows */\n  box-shadow:\n    0 0 0 3px --tw-jib--lightness(var(--color-sky-400), -30),\n    0 16px 32px -4px --tw-jib--lightness(var(--color-sky-400), -40);\n}`,
    lang: 'css',
    flipped: true,
    link: { text: 'Lightness as a function', href: '/tw-jib-css/experimental/guide/lightness' },
  },
  {
    kind: 'override',
    kicker: 'automatic contrast',
    headline: 'Accessible text color, on any property.',
    body: "text-contrast-* paints one thing: text color, on this element, from this element's own background. The function goes anywhere. A border, an SVG stroke, a gradient stop, generated content, each solved for the ratio you named, from whatever color you hand it.",
    /*
     * teal-500, NOT teal-600: AAA is unreachable from teal-600, the solve
     * clamps to black and the badge correctly calls it Max.
     */
    code: `.cta {\n  /* both from one background token, solved for 7:1 */\n  color:        --tw-jib--auto-contrast(\n                  var(--color-teal-500), aaa, oklch);\n  border-color: --tw-jib--auto-contrast(\n                  var(--color-teal-500), aaa, oklch);\n}`,
    lang: 'css',
    link: { text: 'Stable automatic contrast', href: '/tw-jib-css/guide/automatic-contrast' },
  },
  {
    kind: 'addition',
    kicker: 'corner shape',
    headline: 'Squircles, bevels, scoops and notches.',
    flipped: true,
    body: 'border-radius only ever drew a circular arc. corner-shape draws that same radius as a squircle, a bevel, a scoop, a notch, or any superellipse exponent you name. rounded-* still sets the size. You pick the curve.',
    code: `<div class="rounded-2xl corner-round">\n<div class="rounded-2xl corner-squircle">\n<div class="rounded-2xl corner-bevel">\n<div class="rounded-2xl corner-scoop">\n<div class="rounded-2xl corner-notch">\n<div class="rounded-2xl corner-square">\n\n<!-- per corner, and any superellipse exponent -->\n<div class="rounded-2xl corner-t-squircle corner-b-bevel">\n<div class="rounded-2xl corner-4">`,
    lang: 'html',
    link: { text: 'Corner shape docs', href: '/tw-jib-css/experimental/corner' },
  },
  {
    kind: 'addition',
    kicker: 'interpolate size',
    headline: 'Animate height to auto.',
    body: '0 to auto has always snapped, because CSS cannot transition to an intrinsic keyword. interpolate-size: allow-keywords lifts that, on the parent, for every child. Accordions and disclosure panels stop needing a measured height in JavaScript.',
    code: `<!-- the utility goes on an ANCESTOR -->\n<div class="interpolate-keywords">\n\n  <!-- transition to auto -->\n  <div class="group">\n    <button>Expand</button>\n    <div class="h-0 group-hover:h-auto\n      transition-all duration-300 overflow-hidden">…</div>\n  </div>\n\n  <!-- or animate to it, as the panels here do -->\n  <div class="h-0 overflow-hidden\n    animate-[disclosure_6s_ease-in-out_infinite]">…</div>\n</div>`,
    lang: 'html',
    link: { text: 'Interpolate size docs', href: '/tw-jib-css/experimental/interpolate' },
  },
  {
    kind: 'addition',
    kicker: 'base select',
    headline: 'A native select you can style.',
    body: 'appearance: base-select opts a native <select> into rendering you can reach. The popup, the arrow and the checkmark each get a variant, so the dropdown takes the same classes as everything else. Still a real select, with real keyboard and accessibility behavior.',
    code: `<select class="appearance-base-select\n  picker:rounded-xl picker:shadow-lg picker:p-2\n  picker-icon:text-teal-600\n  open:picker-icon:rotate-180\n  checkmark:text-teal-600">\n  <option>Apple</option>\n  <option>Banana</option>\n</select>`,
    lang: 'html',
    flipped: true,
    link: { text: 'Base select docs', href: '/tw-jib-css/experimental/picker' },
  },
];
