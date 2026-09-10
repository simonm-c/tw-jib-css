import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitepress';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@shared': fileURLToPath(new URL('../../docs-shared', import.meta.url)),
      },
    },
  },
  title: 'Jibcss',
  description:
    'TailwindCSS v4 utility library: border gradients, color transforms and ripple effects.',
  base: '/tw-jib-css/',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/tw-jib-css/jibcss-mark.svg' }]],

  themeConfig: {
    siteTitle: false,
    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          if (env.relativePath?.startsWith('examples/')) return '';
          return md.render(src, env);
        },
      },
    },
    /* Absolute, because nav links go through withBase() and a root-relative form
     * would resolve under this instance's own base. */
    nav: [
      { text: 'Guide', link: '/guide/installation' },
      { text: 'Experimental', link: 'https://simonm-c.github.io/tw-jib-css/experimental/' },
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Composition', link: '/guide/composition' },
        ],
      },
      {
        text: 'Accessibility',
        items: [{ text: 'Automatic contrast', link: '/guide/automatic-contrast' }],
      },
      {
        text: 'Color',
        items: [
          { text: 'Lightness', link: '/guide/lightness' },
          { text: 'Saturation', link: '/guide/saturation' },
          { text: 'Hue rotate', link: '/guide/hue-rotate' },
          { text: 'Color spaces', link: '/guide/color-spaces' },
        ],
      },
      {
        text: 'Borders',
        items: [
          { text: 'Border gradient', link: '/guide/border-gradient' },
          { text: 'Border spin', link: '/guide/border-spin' },
          { text: 'Border style', link: '/guide/border-style' },
        ],
      },
      {
        text: 'Backgrounds',
        items: [
          { text: 'Comic dots', link: '/guide/comic' },
          { text: 'Pixel', link: '/guide/pixel' },
          { text: 'Ripple', link: '/guide/ripple' },
          { text: 'Background clip', link: '/guide/bg-clip' },
        ],
      },
      {
        text: 'Layout',
        items: [{ text: 'Grid', link: '/guide/grid' }],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/simonm-c/tw-jib-css' }],
  },
});
