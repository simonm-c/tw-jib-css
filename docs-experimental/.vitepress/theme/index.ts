import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import './tailwind.css';

import Example from './components/Example.vue';
import QuickReference from './components/QuickReference.vue';
import JibLogo from './components/JibLogo.vue';

// Landing – this instance's own splash, mirroring the stable one's shape.
import ExpRoot from './components/landing/ExpRoot.vue';
import ExpHero from './components/landing/ExpHero.vue';
import ExpTwoKinds from './components/landing/ExpTwoKinds.vue';
import ExpSlide from './components/landing/ExpSlide.vue';
import ExpFinale from './components/landing/ExpFinale.vue';
import ExpCloser from './components/landing/ExpCloser.vue';
import StatPill from './components/landing/StatPill.vue';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-title-before': () =>
        h(JibLogo, { id: 'exp-nav-logo', style: 'height: 36px; width: auto; margin-right: 8px' }),
    });
  },
  enhanceApp({ app, router }) {
    app.component('Example', Example);
    app.component('QuickReference', QuickReference);
    app.component('JibLogo', JibLogo);

    app.component('ExpRoot', ExpRoot);
    app.component('ExpHero', ExpHero);
    app.component('ExpTwoKinds', ExpTwoKinds);
    app.component('ExpSlide', ExpSlide);
    app.component('ExpFinale', ExpFinale);
    app.component('ExpCloser', ExpCloser);
    app.component('StatPill', StatPill);

    // `pageClass` only reaches <main>; the nav bar needs the class on <body> too.
    // Matches this instance's root, with or without a trailing index.html.
    if (typeof window !== 'undefined' && router) {
      router.onAfterRouteChange = (to: string) => {
        const isLanding = /\/tw-jib-css\/experimental\/(index\.html)?$/.test(to);
        document.body.classList.toggle('home-landing', isLanding);
      };
    }
  },
} satisfies Theme;
