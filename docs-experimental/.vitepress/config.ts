import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitepress';
import tailwindcss from '@tailwindcss/vite';
import { ogHead, type OgImage } from '../../docs-shared/shared/lib/og';

const SITE_URL = 'https://simonm-c.github.io/tw-jib-css/experimental/';

const OVERVIEW: OgImage = {
  file: 'experimental-overview',
  alt: 'Simple Tailwind utilities for cutting-edge CSS.',
};
const CONTRAST: OgImage = {
  file: 'automatic-contrast',
  alt: 'Rings, borders, icons, and more: all auto-contrast.',
};
const WCAG_RATING: OgImage = {
  file: 'wcag-badge',
  alt: 'A live WCAG rating on every element.',
};
const COLOR_TRANSFORMS: OgImage = {
  file: 'color-transforms',
  alt: 'Shadows, gradients, and more: one colour, transformed.',
};
const CORNER: OgImage = {
  file: 'corner-shape',
  alt: 'Squircles, bevels, scoops and notches.',
};
const PICKER: OgImage = {
  file: 'base-select',
  alt: 'A select you can finally style.',
};

const OG_PAGES: Record<string, OgImage> = {
  'guide/automatic-contrast.md': CONTRAST,
  'guide/wcag-rating.md': WCAG_RATING,
  'wcag-badge.md': WCAG_RATING,
  'guide/lightness.md': COLOR_TRANSFORMS,
  'guide/saturation.md': COLOR_TRANSFORMS,
  'guide/hue-rotate.md': COLOR_TRANSFORMS,
  'corner.md': CORNER,
  'picker.md': PICKER,
};

export default defineConfig({
  vue: {
    template: {
      compilerOptions: { isCustomElement: (tag) => tag === 'baseline-status' },
    },
  },
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
  sitemap: {
    hostname: 'https://simonm-c.github.io/tw-jib-css/experimental/',
    /* examples/ are Playwright fixtures, excluded here on the same grounds
     * the search index drops them. */
    transformItems: (items) => items.filter((i) => !i.url.startsWith('examples/')),
  },
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: '/tw-jib-css/experimental/jibcss-mark.svg' },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/tw-jib-css/experimental/favicon-32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/tw-jib-css/experimental/favicon-16.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/tw-jib-css/experimental/apple-touch-icon.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/tw-jib-css/experimental/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#05121d' }],
  ],

  /* VitePress runs transformHead on build only; a dev server serves no og: tags. */
  transformHead: ({ pageData, title, description }) =>
    ogHead({
      siteUrl: SITE_URL,
      siteName: 'Jibcss Experimental',
      publicDir: fileURLToPath(new URL('../public', import.meta.url)),
      relativePath: pageData.relativePath,
      title,
      description,
      pages: OG_PAGES,
      fallback: OVERVIEW,
    }),

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
      { text: 'Guide', link: '/guide/installation' },
      { text: 'Stable docs', link: 'https://simonm-c.github.io/tw-jib-css/' },
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [{ text: 'Installation', link: '/guide/installation' }],
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
          { text: 'Corner shape', link: '/corner' },
          { text: 'Interpolate size', link: '/interpolate' },
          { text: 'Base select picker', link: '/picker' },
          { text: 'WCAG badge', link: '/wcag-badge' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/simonm-c/tw-jib-css' }],
  },
});
