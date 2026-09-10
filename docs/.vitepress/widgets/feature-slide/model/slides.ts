export interface FeatureSlideData {
  headline: string;
  body: string;
  code: string;
  flipped?: boolean;
  dark?: boolean;
}

export const slides: FeatureSlideData[] = [
  {
    headline: 'Gradient borders, as Tailwind classes.',
    body: 'Every AI chat input has one. Solved several times over, and every recipe has a catch. border-image cannot round a corner. mask-composite has the thinnest support. This runs the one that works, padding-box over border-box, which by hand is the string on the left. Linear, radial or conic across eight interpolation modes, and the transparent border comes free.',
    code: `<!-- the arbitrary-value version -->\n<div class="border-2 border-transparent rounded-xl\n  [background:linear-gradient(#fff,#fff)_padding-box,\n   linear-gradient(to_right,#3b82f6,#a855f7)_border-box]">\n\n<!-- the same border, this module -->\n<div class="border-2 rounded-xl\n  border-linear-to-r border-from-blue-500 border-to-purple-500">`,
  },
  {
    headline: 'Lighten, darken or hue-shift any color.',
    body: 'You want blue-500 a step darker on hover. The usual answer is a new palette entry to name, document and remember. Write bg-darken-15 instead and it derives from the color already on the element. Lighten, darken, saturate, desaturate, hue-shift, on all seven color properties. Every amount is a registered @property, so it transitions.',
    code: `<div class="bg-blue-500 bg-lighten-30">\n<div class="bg-blue-500 bg-darken-40">\n<div class="bg-blue-500 bg-hue-rotate-90">\n<div class="bg-blue-500 -bg-saturation-50">\n\n/* compose them */\n<div class="bg-blue-500 bg-lighten-20\n  bg-hue-rotate-45 -bg-saturation-20">`,
    flipped: true,
  },
  {
    headline: 'Seventeen color spaces, one modifier.',
    body: 'Lighten a yellow in HSL and it blows out to white. Lighten a blue the same amount and it barely moves. That is HSL, not you. Append /oklch and one number means one visible step on every hue. Append /hsl when the uneven look is the one you want.',
    code: `<div class="bg-red-500 bg-lighten-40/oklch">\n<div class="bg-red-500 bg-lighten-40/hsl">\n<div class="bg-red-500 bg-lighten-40/lab">\n<div class="bg-red-500 bg-lighten-40/display-p3">`,
  },
  {
    headline: 'Halftone and CRT textures from any color.',
    body: 'Not an overlay. Comic splits your color into CMYK dot grids and multiplies them back, the way a press prints. Pixel splits it into RGB columns and screens them, the way a display emits light. Left alone both read back as your color. Turn them up and the channels come apart. Ink holds its edge, emitters glare, which is why big dots want bleed at zero and big pixels want bloom cranked.',
    code: `<!-- working size: reads back as the color -->\n<div class="bg-comic-indigo-600">\n<div class="bg-pixel-indigo-600">\n\n<!-- turned up: the channels show -->\n<div class="bg-comic-indigo-600 comic-dot-1 comic-gap-10 comic-bleed-0">\n<div class="bg-pixel-indigo-600 pixel-size-6 pixel-bloom-8">`,
  },
  {
    headline: 'Click ripples, without JavaScript.',
    body: 'Most ripples need JavaScript. A listener, a click coordinate, a node you append and then remember to remove. This is a radial gradient and two @property transitions. Press sets the values instantly, release eases them back, so the ripple finishes even on a click you barely register. Click the demos.',
    code: `<button class="bg-indigo-600 bg-ripple\n  ripple-color-white/40\n  ripple-position-center\n  ripple-duration-60">\n\nripple-color-rose-500/50\nripple-duration-30\nripple-position-top`,
    flipped: true,
  },
];
