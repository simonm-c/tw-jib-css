import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import './tailwind.css';

import JibLogo from '@shared/shared/ui/JibLogo.vue';
import Example from '@shared/entities/example/ui/Example.vue';
import UtilityTable from '@shared/entities/utility/ui/UtilityTable.vue';
import BaselineSupport from '@shared/shared/ui/BaselineSupport.vue';

import HomePage from '../pages/home/ui/HomePage.vue';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-title-before': () => h(JibLogo, { class: 'mr-2 h-9 w-auto' }),
    });
  },
  enhanceApp({ app, router }) {
    app.component('Example', Example);
    app.component('UtilityTable', UtilityTable);
    app.component('BaselineSupport', BaselineSupport);
    app.component('HomePage', HomePage);

    if (typeof window !== 'undefined' && router) {
      // `pageClass` only reaches <main>; the nav bar needs the class on <body> too.
      router.onAfterRouteChange = (to: string) => {
        document.body.classList.toggle('home-landing', /\/tw-jib-css\/?$/.test(to));
      };
    }
  },
} satisfies Theme;
