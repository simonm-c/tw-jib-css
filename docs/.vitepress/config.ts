import { defineConfig } from 'vitepress';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  title: 'tw-jib-css',
  description:
    'TailwindCSS v4 utility library — border gradients, color transforms, ripple effects, and more.',
  base: '/tw-jib-css/',

  themeConfig: {
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
          { text: 'Border Style', link: '/guide/border-style' },
        ],
      },
      {
        text: 'Animations',
        items: [
          { text: 'Ripple', link: '/guide/ripple' },
        ],
      },
      {
        text: 'Color Transforms',
        items: [
          { text: 'Darken', link: '/guide/darken' },
          { text: 'Lighten', link: '/guide/lighten' },
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
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/simonm-c/tw-jib-css' }],
  },
});
