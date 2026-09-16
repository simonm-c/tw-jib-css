# Changelog

## [2.0.0](https://github.com/simonm-c/tw-jib-css/compare/tw-jib-css-v1.0.0...tw-jib-css-v2.0.0) (2026-09-16)


### ⚠ BREAKING CHANGES

* **css:** every --tw-jib--* custom property and @function is now --jib-*, with internal double separators collapsed to one: --tw-jib--fill-hue--amount is --jib-fill-hue-amount, --tw-jib--contrast--shade is --jib-contrast-shade. Tailwind's own --tw-bg-image and --tw-gradient-* are unchanged. A consumer @theme key in the --jib-contrast-ratio-* namespace must be renamed by hand and fails silently otherwise: text-contrast-<level> stops existing rather than erroring.

### Features

* **border-gradient:** add border-spin-reverse and a spin duration na… ([a53ab1d](https://github.com/simonm-c/tw-jib-css/commit/a53ab1d5e551fe7be79808a7207a898b150efb3b))
* **border-gradient:** add border-spin-reverse and a spin duration namespace ([fa96b08](https://github.com/simonm-c/tw-jib-css/commit/fa96b081798d7c4112f075cc80a066866be92c37))
* **core:** accept every Tailwind spelling of a custom-property value ([1e13d1e](https://github.com/simonm-c/tw-jib-css/commit/1e13d1ec0e1aa903479771065d775dae56d258e5))
* **css:** rename variables to --jib-* and add directional aliases ([9fda1ca](https://github.com/simonm-c/tw-jib-css/commit/9fda1ca65c03cb444e748f48675d0bc59cad17af))


### Bug Fixes

* **border-gradient:** accept arbitrary values on border-linear-to ([42321d2](https://github.com/simonm-c/tw-jib-css/commit/42321d216eef51ed780dffda3be860c0662bf225))
* **core:** fail visibly when a colour transform has no source ([9dcaeb5](https://github.com/simonm-c/tw-jib-css/commit/9dcaeb5b2440eb84ee7f3765f6406801751c1b8f))
* **core:** seed sourceless text transforms from canvastext ([a92170c](https://github.com/simonm-c/tw-jib-css/commit/a92170cb5e75f19ca63293be4a1ec792bee449a7))
