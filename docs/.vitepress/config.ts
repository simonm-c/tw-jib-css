import { defineConfig } from 'vitepress';

export default defineConfig({
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
          { text: 'Border Gradient', link: '/guide/border-gradient' },
          { text: 'Color Transforms', link: '/guide/color-transforms' },
          { text: 'Ripple', link: '/guide/ripple' },
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
