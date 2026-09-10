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
  title: 'Jibcss Experimental',
  description:
    'Experimental tw-jib-css utilities: CSS @function color transforms, corner-shape, interpolate-size, base-select picker, and a WCAG contrast badge.',
  base: '/tw-jib-css/experimental/',
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: '/tw-jib-css/experimental/jibcss-mark.svg' },
    ],
  ],

  /* The stable instance is a separate build with its own page set, so its routes
   * are dead links here by definition. The negative lookahead keeps this
   * instance's own routes checked. */
  ignoreDeadLinks: [/^\/tw-jib-css\/(?!experimental\/)/],

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

    /* Absolute, because nav items go through withBase() and a root-relative form
     * would resolve under this instance's own base. Only nav items are affected;
     * in-body links are raw <a href>. */
    nav: [
      { text: 'Overview', link: '/overview' },
      { text: 'Stable docs', link: 'https://simonm-c.github.io/tw-jib-css/' },
    ],

    sidebar: [
      {
        text: 'Experimental',
        items: [{ text: 'Overview', link: '/overview' }],
      },
      {
        text: 'Accessibility',
        items: [
          { text: 'Automatic contrast', link: '/guide/automatic-contrast' },
          { text: 'WCAG rating', link: '/guide/wcag-rating' },
        ],
      },
      {
        text: 'Color',
        items: [
          { text: 'Lightness', link: '/guide/lightness' },
          { text: 'Saturation', link: '/guide/saturation' },
          { text: 'Hue rotate', link: '/guide/hue-rotate' },
        ],
      },
      {
        text: 'Additions',
        items: [
          { text: 'Corner Shape', link: '/corner' },
          { text: 'Interpolate Size', link: '/interpolate' },
          { text: 'Base Select Picker', link: '/picker' },
          { text: 'WCAG Badge', link: '/wcag-badge' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/simonm-c/tw-jib-css' }],
  },
});
