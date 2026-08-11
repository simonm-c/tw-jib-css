export interface MagazineSlideData {
  kicker: string;
  headline: string;
  body: string;
  code: string;
  stat?: string;
  statCaption?: string;
  flipped?: boolean;
  dark?: boolean;
}

export const slides: MagazineSlideData[] = [
  {
    kicker: 'color',
    headline: 'Colors, Transformed.',
    body: 'Lighten, darken, saturate, desaturate, or hue-shift any colour with a single utility class. Works across bg-, text-, fill-, stroke-, outline-, accent-, and border- properties. Compose freely — stack transforms on the same element.',
    code: `<div class="bg-blue-500 bg-lighten-30">\n<div class="bg-blue-500 bg-darken-40">\n<div class="bg-blue-500 bg-hue-rotate-90">\n<div class="bg-blue-500 -bg-saturation-50">\n\n/* compose them */\n<div class="bg-blue-500 bg-lighten-20\n  bg-hue-rotate-45 -bg-saturation-20">`,
    stat: '5',
    statCaption: 'transform types',
    flipped: true,
  },
  {
    kicker: 'color spaces',
    headline: 'Sixteen Colour Spaces, One Syntax.',
    body: 'Most libraries lock you into one colour interpolation. jibcss gives you sixteen — oklch, hsl, lab, lch, oklab, hwb, srgb, display-p3, and more. Just append a modifier. Same utility, different colour science.',
    code: `<div class="bg-red-500 bg-lighten-40/oklch">\n<div class="bg-red-500 bg-lighten-40/hsl">\n<div class="bg-red-500 bg-lighten-40/lab">\n<div class="bg-red-500 bg-lighten-40/display-p3">`,
    stat: '16',
    statCaption: 'colour spaces',
  },
  {
    kicker: 'print',
    headline: 'Two Print Textures. Any Colour In.',
    body: "Halftone dots and phosphor columns. Each takes any Tailwind colour and renders it as a textured surface — no images, no SVG, no JavaScript.",
    code: `/* CMYK halftone dots */\n<div class="bg-comic-indigo-600">\n\n/* RGB pixel columns */\n<div class="bg-pixel-indigo-600">`,
    stat: '2',
    statCaption: 'rendering engines',
  },
  {
    kicker: 'print',
    headline: 'One Input, Every Dial.',
    body: "CMYK halftone decomposes into subtractive dot layers. CRT phosphor splits into additive RGB columns. Tune dot size, gap, and bleed; pixel size and bloom — every dial reshapes the same input colour.",
    code: `/* adjust dot size & spacing */\ncomic-dot-2 comic-gap-6 comic-bleed-1\n\n/* phosphor glow */\npixel-size-2 pixel-bloom-1`,
    flipped: true,
  },
  {
    kicker: 'borders',
    headline: 'Border Gradients, Demystified.',
    body: "Gradient borders usually mean SVG tricks, pseudo-element hacks, or background-clip workarounds. With jibcss, they're utility classes — the same syntax you already know from Tailwind's bg-linear-*. Linear, radial, conic, and animated spin with 8 interpolation modes.",
    code: `<div class="border-4 border-linear-to-br\n  border-from-violet-500 border-to-cyan-400\n  rounded-2xl">\n\n<div class="border-4 border-conic-0 border-spin\n  border-from-rose-500 border-via-amber-400\n  border-to-rose-500 rounded-full">`,
    stat: '8',
    statCaption: 'interpolation modes',
  },
  {
    kicker: 'interaction',
    headline: 'Ripple. Fully Customisable.',
    body: 'Material-style ripple animation, pure CSS. No event listeners, no DOM manipulation — just @property transitions. Choose any colour, any speed, any origin point. Click the demos.',
    code: `<button class="bg-indigo-600 bg-ripple\n  ripple-color-white/40\n  ripple-position-center\n  ripple-duration-60">\n\nripple-color-rose-500/50\nripple-duration-30\nripple-position-top`,
    stat: '0',
    statCaption: 'JavaScript required',
    flipped: true,
  },
  {
    kicker: 'debug',
    headline: 'Your Contrast, Visible.',
    body: "A dev-mode badge that shows the live WCAG rating of any element — AAA, AA, AA Large, or Fail. Pure CSS, no JavaScript, no build step. Drop it on while you're designing, take it off before you ship.",
    code: `<div class="bg-indigo-900 text-white wcag-badge">\n  Badge reads: AAA\n</div>\n<div class="bg-blue-600 text-white wcag-badge">\n  Badge reads: AA\n</div>\n<div class="bg-yellow-200 text-yellow-500 wcag-badge">\n  Badge reads: Fail\n</div>\n\n/* Powered by @property + relative color syntax */`,
    dark: true,
    flipped: true,
  },
  {
    kicker: '@function',
    headline: 'Beyond the Class Syntax.',
    body: "Utilities own the single-property case: bg, text, border. But a gradient stop, a layered shadow, an SVG fill, a text-decoration colour — the class syntax can't reach in there. The @functions can. Call --tw-jib--lightness, --tw-jib--saturation, --tw-jib--hue-rotate anywhere a <color> fits, on a theme token that has nothing to do with the element's own background.",
    code: `/* text in brand, underline a lighter derivative */\nstyle="color: var(--brand);\n  text-decoration: underline wavy;\n  text-decoration-color:\n    --tw-jib--lightness(var(--brand), 35)"\n\n/* bg in brand, ring + drop shadow darker */\nstyle="background: var(--brand);\n  box-shadow:\n    0 0 0 3px --tw-jib--lightness(var(--brand), -30),\n    0 16px 32px --tw-jib--lightness(var(--brand), -40)"\n\n/* SVG: brand fill, darker stroke */\n<circle style="fill: var(--brand);\n  stroke: --tw-jib--lightness(var(--brand), -35)" />\n\n/* gradient: brand → muted version */\nbackground: linear-gradient(135deg,\n  var(--brand),\n  --tw-jib--saturation(var(--brand), -60))`,
    stat: '69',
    statCaption: 'CSS @functions',
    dark: true,
  },
  {
    kicker: '@function',
    headline: 'Accessible Shades, On Any Property.',
    body: "--tw-jib--accessible-shade solves for a tone that hits the requested ratio exactly; --tw-jib--wcag-rating returns the rating as a <string>. The class form only paints text colour. The functions paint borders, SVG strokes, gradient stops, ::before content — anywhere a value fits, derived from a theme token you pass in.",
    code: `/* bg + auto-contrasting text & border */\nstyle="background: var(--brand);\n  color: --tw-jib--accessible-shade(\n    var(--brand), aaa);\n  border-left-color: same(...)"\n\n/* SVG stroke from the same token */\n<path style="stroke:\n  --tw-jib--accessible-shade(\n    var(--brand), aaa)" />\n\n/* live rating as a content string */\n.label::before { content:\n  --tw-jib--wcag-rating(var(--bg), var(--fg)) }\n\n/* gradient stop picks its own contrast */\nbackground: linear-gradient(90deg,\n  var(--brand),\n  --tw-jib--accessible-shade(\n    var(--brand), aaa))`,
    dark: true,
    flipped: true,
  },
];
