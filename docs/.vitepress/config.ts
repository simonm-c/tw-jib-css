import { defineConfig } from 'vitepress';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  title: 'Jibcss',
  description:
    'TailwindCSS v4 utility library — border gradients, color transforms, ripple effects, and more.',
  base: '/tw-jib-css/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/tw-jib-css/jibcss-mark.svg' }],
  ],

  themeConfig: {
    siteTitle: false,
    nav: [{ text: 'Guide', link: '/guide/installation' }],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/guide/installation' },
          { text: 'What Jibcss Adds', link: '/guide/what-jibcss-adds' },
        ],
      },
      {
        text: 'Core Concepts',
        items: [
          { text: 'Color Transforms', link: '/guide/color-transforms' },
          { text: 'Color Spaces', link: '/guide/color-spaces' },
          { text: 'Print Textures', link: '/guide/print-textures' },
          { text: 'Gradient Borders', link: '/guide/gradient-borders' },
          { text: 'Ripples', link: '/guide/ripples' },
          { text: 'Accessible Color', link: '/guide/accessible-color' },
          { text: 'Composition', link: '/guide/composition' },
        ],
      },
      {
        text: 'Color',
        items: [
          { text: 'Lightness', link: '/guide/lightness' },
          { text: 'Saturation', link: '/guide/saturation' },
          { text: 'Hue Rotate', link: '/guide/hue-rotate' },
          { text: 'Colour Spaces', link: '/guide/colour-spaces' },
        ],
      },
      {
        text: 'Borders',
        items: [
          { text: 'Border Gradient', link: '/guide/border-gradient' },
          { text: 'Border Spin', link: '/guide/border-spin' },
          { text: 'Border Style', link: '/guide/border-style' },
        ],
      },
      {
        text: 'Backgrounds',
        items: [
          { text: 'Comic', link: '/guide/comic' },
          { text: 'Pixel', link: '/guide/pixel' },
          { text: 'Ripple', link: '/guide/ripple' },
        ],
      },
      {
        text: 'Accessibility',
        items: [
          { text: 'Accessible Shade', link: '/guide/wcag' },
          { text: 'WCAG Badge', link: '/guide/wcag-badge' },
        ],
      },
      {
        text: 'Supporting',
        items: [
          { text: 'Grid', link: '/guide/grid' },
        ],
      },
      {
        text: 'Experimental',
        items: [
          { text: 'Corner Shape', link: '/guide/corner' },
          { text: 'Interpolate Size', link: '/guide/interpolate' },
          { text: 'Base Select Picker', link: '/guide/picker' },
        ],
      },
      {
        text: 'Showcase',
        items: [{ text: 'Texture Showcase', link: '/examples/showcase' }],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/simonm-c/tw-jib-css' }],
  },
});
