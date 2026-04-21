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
    headline: 'Four Print Textures. Any Colour In.',
    body: "Halftone dots, phosphor columns, crosshatch lines, watercolour wash. Each takes any Tailwind colour and renders it as a textured surface — no images, no SVG, no JavaScript.",
    code: `/* CMYK halftone dots */\n<div class="bg-comic-indigo-600">\n\n/* RGB pixel columns */\n<div class="bg-pixel-indigo-600">\n\n/* pen-and-ink crosshatch */\n<div class="bg-hatch-indigo-600">\n\n/* watercolour wash */\n<div class="bg-watercolor-indigo-600">`,
    stat: '4',
    statCaption: 'rendering engines',
  },
  {
    kicker: 'print',
    headline: 'One Input, Four Traditions.',
    body: "CMYK halftone decomposes into subtractive dot layers. CRT phosphor splits into additive RGB columns. Crosshatch builds stroke density from lightness. Watercolour blends nine pigment pools across three palette traditions — contemporary, Turner-era, and East Asian.",
    code: `/* adjust dot size & spacing */\ncomic-dot-2 comic-gap-6 comic-bleed-1\n\n/* phosphor glow */\npixel-size-2 pixel-bleed-1\n\n/* rotated angle, stroke width */\nhatch-angle-60 hatch-stroke-1 hatch-gap-8\n\n/* palette & wash density */\nwatercolor-traditional watercolor-wash-4\nwatercolor-eastern`,
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
];
