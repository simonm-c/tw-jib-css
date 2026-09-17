# Changelog

## [2.0.0](https://github.com/simonm-c/tw-jib-css/compare/tw-jib-css-experimental-v1.0.0...tw-jib-css-experimental-v2.0.0) (2026-09-17)


### ⚠ BREAKING CHANGES

* **css:** every --tw-jib--* custom property and @function is now --jib-*, with internal double separators collapsed to one: --tw-jib--fill-hue--amount is --jib-fill-hue-amount, --tw-jib--contrast--shade is --jib-contrast-shade. Tailwind's own --tw-bg-image and --tw-gradient-* are unchanged. A consumer @theme key in the --jib-contrast-ratio-* namespace must be renamed by hand and fails silently otherwise: text-contrast-<level> stops existing rather than erroring.

### Features

* **core:** accept every Tailwind spelling of a custom-property value ([1e13d1e](https://github.com/simonm-c/tw-jib-css/commit/1e13d1ec0e1aa903479771065d775dae56d258e5))
* **css:** rename variables to --jib-* and add directional aliases ([9fda1ca](https://github.com/simonm-c/tw-jib-css/commit/9fda1ca65c03cb444e748f48675d0bc59cad17af))


### Code Refactoring

* **css:** move `[@function](https://github.com/function)` call sites into the experimental package ([0f7a753](https://github.com/simonm-c/tw-jib-css/commit/0f7a7533ea04c161bf4d956fe2d185f691b988f6))
* **css:** move `[@function](https://github.com/function)` call sites into the experimental package ([90a3038](https://github.com/simonm-c/tw-jib-css/commit/90a3038510f09eefd4df31b80f1206908cd57078))

## Changelog
