import { defineConfig } from 'vitepress';
import tailwindcss from '@tailwindcss/vite';

/*
 * Second VitePress instance, for the tw-jib-css-experimental package.
 *
 * Separate from docs/ rather than a section within it: the experimental package
 * overrides utilities the stable package defines, one instance emits one
 * stylesheet, and per-page CSS loading leaks in dev. See theme/tailwind.css.
 *
 * Deployed under /tw-jib-css/experimental/ so both instances can sit on the
 * same GitHub Pages site, the stable one at the root.
 */
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  title: 'Jibcss Experimental',
  description:
    'Experimental tw-jib-css utilities – CSS @function colour transforms, corner-shape, interpolate-size, base-select picker, and a WCAG contrast badge.',
  base: '/tw-jib-css/experimental/',
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: '/tw-jib-css/experimental/jibcss-mark.svg' },
    ],
  ],

  /*
   * Links into the STABLE instance cannot be resolved from here – it is a
   * separate VitePress build with its own page set, so its routes are dead links
   * by definition to this one. Ignore exactly those and nothing else: the
   * negative lookahead keeps /tw-jib-css/experimental/* checked, so a genuinely
   * broken link within this instance still fails the build.
   */
  ignoreDeadLinks: [/^\/tw-jib-css\/(?!experimental\/)/],

  themeConfig: {
    // The logo comes from the theme's nav-bar-title-before slot; a text title
    // beside it would read twice. The "experimental" wordmark is on the landing.
    siteTitle: false,

    /*
     * "Stable docs" must be an ABSOLUTE url, not '/tw-jib-css/'. Nav items go
     * through VitePress's withBase(), which prepends this instance's base to
     * anything not protocol-qualified, so the root-relative form resolves to
     * /tw-jib-css/experimental/tw-jib-css/ and 404s. Only nav items are affected:
     * the landing components' in-body links are raw <a href> and bypass withBase.
     *
     * The cost is that this leaves localhost in dev. There is no third option:
     * cross-instance links cannot be expressed as base-relative paths.
     */
    nav: [
      { text: 'Overview', link: '/overview' },
      { text: 'Stable docs', link: 'https://simonm-c.github.io/tw-jib-css/' },
    ],

    sidebar: [
      {
        text: 'Experimental',
        items: [
          { text: 'Overview', link: '/overview' },
          { text: 'Functions', link: '/functions' },
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
