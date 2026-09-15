import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitepress';
import tailwindcss from '@tailwindcss/vite';
import { ogHead, type OgImage } from '../../docs-shared/shared/lib/og';

const SITE_URL = 'https://simonm-c.github.io/tw-jib-css/';

const OVERVIEW: OgImage = {
  file: 'overview',
  alt: 'Simple Tailwind utilities for complicated CSS.',
};
const CONTRAST: OgImage = {
  file: 'automatic-contrast',
  alt: 'Text that adapts to any background.',
};
const BORDER_GRADIENT: OgImage = {
  file: 'border-gradient',
  alt: 'Gradient borders without the hacks.',
};
const COLOR_TRANSFORMS: OgImage = {
  file: 'color-transforms',
  alt: 'Lighten, desaturate, rotate. Or all three.',
};
const PRINT_TEXTURES: OgImage = {
  file: 'print-textures',
  alt: 'CMYK dots and RGB pixels, faithfully reproduced.',
};
const RIPPLE: OgImage = {
  file: 'ripple',
  alt: 'Ripples on tap. Zero JavaScript.',
};

const OG_PAGES: Record<string, OgImage> = {
  'guide/automatic-contrast.md': CONTRAST,
  'guide/border-gradient.md': BORDER_GRADIENT,
  'guide/border-spin.md': BORDER_GRADIENT,
  'guide/lightness.md': COLOR_TRANSFORMS,
  'guide/saturation.md': COLOR_TRANSFORMS,
  'guide/hue-rotate.md': COLOR_TRANSFORMS,
  'guide/comic.md': PRINT_TEXTURES,
  'guide/pixel.md': PRINT_TEXTURES,
  'guide/ripple.md': RIPPLE,
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
  title: 'Jibcss',
  description:
    'TailwindCSS v4 utility library: border gradients, color transforms and ripple effects.',
  base: '/tw-jib-css/',
  sitemap: {
    hostname: 'https://simonm-c.github.io/tw-jib-css/',
    /* examples/ are Playwright fixtures, excluded here on the same grounds
     * the search index drops them. */
    transformItems: (items) => items.filter((i) => !i.url.startsWith('examples/')),
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/tw-jib-css/jibcss-mark.svg' }],
    [
      'link',
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/tw-jib-css/favicon-32.png' },
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/tw-jib-css/favicon-16.png' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/tw-jib-css/apple-touch-icon.png' },
    ],
    ['link', { rel: 'manifest', href: '/tw-jib-css/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#05121d' }],
  ],

  /* VitePress runs transformHead on build only; a dev server serves no og: tags. */
  transformHead: ({ pageData, title, description }) =>
    ogHead({
      siteUrl: SITE_URL,
      siteName: 'Jibcss',
      publicDir: fileURLToPath(new URL('../public', import.meta.url)),
      relativePath: pageData.relativePath,
      title,
      description,
      pages: OG_PAGES,
      fallback: OVERVIEW,
    }),

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
      { text: 'Experimental docs', link: 'https://simonm-c.github.io/tw-jib-css/experimental/' },
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
