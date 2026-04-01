import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import './tailwind.css';
import QuickReference from './components/QuickReference.vue';
import Example from './components/Example.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('QuickReference', QuickReference);
    app.component('Example', Example);
  },
} satisfies Theme;
