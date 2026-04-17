export interface MagazineSlideData {
  slideNumber: string;
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
    slideNumber: '02 / 10',
    headline: 'Border Gradients, Demystified.',
    body: "Gradient borders usually mean SVG tricks, pseudo-element hacks, or background-clip workarounds. With jibcss, they're utility classes — the same grammar you already know from Tailwind's bg-linear-*. Linear, radial, conic, and animated spin with 8 interpolation modes.",
    code: `<div class="border-4 border-linear-to-br\n  border-from-violet-500 border-to-cyan-400\n  rounded-2xl">\n\n<div class="border-4 border-conic-0 border-spin\n  border-from-rose-500 border-via-amber-400\n  border-to-rose-500 rounded-full">`,
    stat: '8',
    statCaption: 'interpolation modes',
  },
  {
    slideNumber: '03 / 10',
    headline: 'Colors, Transformed.',
    body: 'Lighten, darken, saturate, desaturate, or hue-shift any colour with a single utility class. Works across bg-, text-, fill-, stroke-, outline-, accent-, and border- properties. Compose freely — stack transforms on the same element.',
    code: `<div class="bg-blue-500 bg-lighten-30">\n<div class="bg-blue-500 bg-darken-40">\n<div class="bg-blue-500 bg-hue-rotate-90">\n<div class="bg-blue-500 -bg-saturation-50">\n\n/* compose them */\n<div class="bg-blue-500 bg-lighten-20\n  bg-hue-rotate-45 -bg-saturation-20">`,
    stat: '5',
    statCaption: 'transform types',
    flipped: true,
  },
  {
    slideNumber: '04 / 10',
    headline: 'Sixteen Colour Spaces, One Syntax.',
    body: 'Most libraries lock you into one colour interpolation. jibcss gives you sixteen — oklch, hsl, lab, lch, oklab, hwb, srgb, display-p3, and more. Just append a modifier. Same utility, different colour science.',
    code: `<div class="bg-red-500 bg-lighten-40/oklch">\n<div class="bg-red-500 bg-lighten-40/hsl">\n<div class="bg-red-500 bg-lighten-40/lab">\n<div class="bg-red-500 bg-lighten-40/display-p3">`,
    stat: '16',
    statCaption: 'colour spaces',
  },
  {
    slideNumber: '05 / 10',
    headline: 'Ripple. Fully Customisable.',
    body: 'Material-style ripple animation, pure CSS. No event listeners, no DOM manipulation — just @property transitions. Choose any colour, any speed, any origin point. Click the demos.',
    code: `<button class="bg-indigo-600 bg-ripple\n  ripple-color-white/40\n  ripple-position-center\n  ripple-duration-60">\n\nripple-color-rose-500/50\nripple-duration-30\nripple-position-top`,
    stat: '0',
    statCaption: 'JavaScript required',
    flipped: true,
  },
  {
    slideNumber: '06 / 10',
    headline: 'Any Color, Converted.',
    body: "Comic halftone and CRT phosphor patterns aren't static backgrounds — they convert any colour you give them into CMYK dots or RGB pixel columns. Change the input colour, the pattern updates. Pure CSS.",
    code: `/* CMYK halftone dots */\n<div class="bg-comic-blue-500\n  comic-dot-1 comic-gap-4 comic-bleed-0.5">\n\n/* RGB pixel columns */\n<div class="bg-pixel-rose-500\n  pixel-size-1 pixel-gap-1 pixel-bleed-0.5">`,
  },
  // Experimental break is handled separately
  {
    slideNumber: '07 / 10',
    headline: 'Geometry, Reimagined.',
    body: 'CSS corner-shape goes beyond border-radius. Squircle, bevel, scoop, notch — mix per corner. Progressive enhancement via @supports — standard border-radius as fallback.',
    code: `<div class="corner-squircle rounded-3xl">\n<div class="corner-bevel rounded-3xl">\n<div class="corner-tl-scoop\n  corner-br-scoop rounded-3xl">\n<div class="-corner-3 rounded-3xl">`,
    dark: true,
  },
  {
    slideNumber: '08 / 10',
    headline: 'Your Debug Assistant.',
    body: 'Accessibility is just a class away. Add wcag-badge to any element and instantly see its WCAG contrast rating — AAA, AA, AA Large, or Fail. Auto-positioned, auto-coloured. No JavaScript, no build step.',
    code: `<div class="bg-indigo-900 text-white wcag-badge">\n  Badge reads: AAA\n</div>\n<div class="bg-blue-600 text-white wcag-badge">\n  Badge reads: AA\n</div>\n<div class="bg-yellow-200 text-yellow-500 wcag-badge">\n  Badge reads: Fail\n</div>`,
    dark: true,
    flipped: true,
  },
];
