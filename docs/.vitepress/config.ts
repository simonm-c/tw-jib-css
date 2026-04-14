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
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Installation', link: '/guide/installation' },
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
          { text: 'Comic Dots', link: '/guide/comic' },
          { text: 'Pixel', link: '/guide/pixel' },
          { text: 'Ripple', link: '/guide/ripple' },
        ],
      },
      {
        text: 'Color Transforms',
        items: [
          {
            text: 'Lightness',
            collapsed: false,
            items: [
              { text: 'Background', link: '/guide/lightness' },
              { text: 'Text', link: '/guide/text-lightness' },
              { text: 'Fill', link: '/guide/fill-lightness' },
              { text: 'Stroke', link: '/guide/stroke-lightness' },
              { text: 'Outline', link: '/guide/outline-lightness' },
              { text: 'Accent', link: '/guide/accent-lightness' },
              { text: 'Border', link: '/guide/border-lightness' },
            ],
          },
          {
            text: 'Saturation',
            collapsed: false,
            items: [
              { text: 'Background', link: '/guide/saturation' },
              { text: 'Text', link: '/guide/text-saturation' },
              { text: 'Fill', link: '/guide/fill-saturation' },
              { text: 'Stroke', link: '/guide/stroke-saturation' },
              { text: 'Outline', link: '/guide/outline-saturation' },
              { text: 'Accent', link: '/guide/accent-saturation' },
              { text: 'Border', link: '/guide/border-saturation' },
            ],
          },
          {
            text: 'Hue Rotate',
            collapsed: false,
            items: [
              { text: 'Background', link: '/guide/hue-rotate' },
              { text: 'Text', link: '/guide/text-hue-rotate' },
              { text: 'Fill', link: '/guide/fill-hue-rotate' },
              { text: 'Stroke', link: '/guide/stroke-hue-rotate' },
              { text: 'Outline', link: '/guide/outline-hue-rotate' },
              { text: 'Accent', link: '/guide/accent-hue-rotate' },
              { text: 'Border', link: '/guide/border-hue-rotate' },
            ],
          },
        ],
      },
      {
        text: 'Supporting',
        items: [
          { text: 'Scrollbar', link: '/guide/scrollbar' },
          { text: 'Grid', link: '/guide/grid' },
        ],
      },
      {
        text: 'Experimental',
        items: [
          { text: 'Corner Shape', link: '/guide/corner' },
          { text: 'Interpolate Size', link: '/guide/interpolate' },
          { text: 'Base Select Picker', link: '/guide/picker' },
          { text: 'Accessible Shade', link: '/guide/wcag' },
          { text: 'WCAG Badge', link: '/guide/wcag-badge' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/simonm-c/tw-jib-css' }],
  },
});
