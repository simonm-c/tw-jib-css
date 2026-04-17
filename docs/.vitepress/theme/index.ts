import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import './tailwind.css';

// Site-wide components
import QuickReference from './components/QuickReference.vue';
import Example from './components/Example.vue';
import JibLogo from './components/JibLogo.vue';
// Shared landing utilities
import ProposalsHub from './components/landing/ProposalsHub.vue';
import ClassDock from './components/landing/ClassDock.vue';
import StatPill from './components/landing/StatPill.vue';
import CompassRose from './components/landing/CompassRose.vue';

// A · Magazine Spread
import MagazineRoot from './components/landing/magazine/MagazineRoot.vue';
import MagazineSlide from './components/landing/magazine/MagazineSlide.vue';
import MagazineHero from './components/landing/magazine/MagazineHero.vue';
import MagazineExperimentalBreak from './components/landing/magazine/MagazineExperimentalBreak.vue';
import MagazineFinale from './components/landing/magazine/MagazineFinale.vue';

// B · Card Stack
import CardStackRoot from './components/landing/cardstack/CardStackRoot.vue';
import CardStackSlide from './components/landing/cardstack/CardStackSlide.vue';
import DemoCard from './components/landing/cardstack/DemoCard.vue';
import CodeCard from './components/landing/cardstack/CodeCard.vue';
import StatCard from './components/landing/cardstack/StatCard.vue';
import InfoCard from './components/landing/cardstack/InfoCard.vue';

// C · Vertical River
import RiverRoot from './components/landing/river/RiverRoot.vue';
import RiverCopy from './components/landing/river/RiverCopy.vue';
import RiverDemo from './components/landing/river/RiverDemo.vue';
import RiverCode from './components/landing/river/RiverCode.vue';
import RiverHero from './components/landing/river/RiverHero.vue';
import RiverExperimentalBreak from './components/landing/river/RiverExperimentalBreak.vue';
import RiverFinale from './components/landing/river/RiverFinale.vue';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-title-before': () =>
        h(JibLogo, { id: 'nav-logo', style: 'height: 36px; width: auto; margin-right: 8px' }),
      'layout-bottom': () => h(ClassDock),
    });
  },
  enhanceApp({ app, router }) {
    app.component('QuickReference', QuickReference);
    app.component('Example', Example);
    app.component('JibLogo', JibLogo);
    app.component('ProposalsHub', ProposalsHub);
    app.component('ClassDock', ClassDock);
    app.component('StatPill', StatPill);
    app.component('CompassRose', CompassRose);

    // A
    app.component('MagazineRoot', MagazineRoot);
    app.component('MagazineSlide', MagazineSlide);
    app.component('MagazineHero', MagazineHero);
    app.component('MagazineExperimentalBreak', MagazineExperimentalBreak);
    app.component('MagazineFinale', MagazineFinale);

    // B
    app.component('CardStackRoot', CardStackRoot);
    app.component('CardStackSlide', CardStackSlide);
    app.component('DemoCard', DemoCard);
    app.component('CodeCard', CodeCard);
    app.component('StatCard', StatCard);
    app.component('InfoCard', InfoCard);

    // C
    app.component('RiverRoot', RiverRoot);
    app.component('RiverCopy', RiverCopy);
    app.component('RiverDemo', RiverDemo);
    app.component('RiverCode', RiverCode);
    app.component('RiverHero', RiverHero);
    app.component('RiverExperimentalBreak', RiverExperimentalBreak);
    app.component('RiverFinale', RiverFinale);

    if (typeof window !== 'undefined' && router) {
      router.onAfterRouteChange = (to: string) => {
        const isLanding =
          /\/proposals\/(magazine|cardstack|river)(\.html)?\/?$/.test(to) ||
          /\/tw-jib-css\/?$/.test(to);
        document.body.classList.toggle('home-landing', isLanding);
      };
    }
  },
} satisfies Theme;
