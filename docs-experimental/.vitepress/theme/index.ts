import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import './tailwind.css';

import JibLogo from '@shared/shared/ui/JibLogo.vue';
import Example from '@shared/entities/example/ui/Example.vue';
import UtilityTable from '@shared/entities/utility/ui/UtilityTable.vue';

import HomePage from '../pages/home/ui/HomePage.vue';

const SURFACE = 'corner-squircle';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-title-before': () => h(JibLogo, { class: 'mr-2 h-9 w-auto' }),
    });
  },
  enhanceApp({ app, router }) {
    app.component('Example', (props, { slots }) =>
      h(Example, { surfaceClass: SURFACE, ...props }, slots),
    );
    app.component('UtilityTable', (props, { slots }) =>
      h(UtilityTable, { surfaceClass: SURFACE, ...props }, slots),
    );
    app.component('HomePage', HomePage);

    if (typeof window !== 'undefined' && router) {
      // `pageClass` only reaches <main>; the nav bar needs the class on <body> too.
      router.onAfterRouteChange = (to: string) => {
        const isLanding = /\/tw-jib-css\/experimental\/(index\.html)?$/.test(to);
        document.body.classList.toggle('home-landing', isLanding);
      };
    }
  },
} satisfies Theme;
