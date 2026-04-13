import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import './tailwind.css';
import QuickReference from './components/QuickReference.vue';
import Example from './components/Example.vue';
import JibLogo from './components/JibLogo.vue';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-title-before': () =>
        h(JibLogo, {
          id: 'nav-logo',
          style: 'height: 36px; width: auto; margin-right: 8px',
        }),
      'home-hero-image': () =>
        h(
          'div',
          {
            style:
              'width: 100%; height: 100%; display: flex; align-items: center; justify-content: center',
          },
          [
            h(JibLogo, {
              id: 'hero-logo',
              style: 'max-width: 320px; max-height: 320px; width: 100%; height: auto',
            }),
          ],
        ),
    });
  },
  enhanceApp({ app }) {
    app.component('QuickReference', QuickReference);
    app.component('Example', Example);
  },
} satisfies Theme;
