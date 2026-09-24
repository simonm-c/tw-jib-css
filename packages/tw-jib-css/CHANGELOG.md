# Changelog

## [2.0.3](https://github.com/simonm-c/tw-jib-css/compare/tw-jib-css-v2.0.2...tw-jib-css-v2.0.3) (2026-09-24)


### Bug Fixes

* **automatic-contrast:** fold the bare candidate into the seeded block ([08539ad](https://github.com/simonm-c/tw-jib-css/commit/08539ad4f59c00ce5fb4ab16a9e51e6367d01d6a))
* **border-style:** keep a per-side style through a later width utility ([22c80ce](https://github.com/simonm-c/tw-jib-css/commit/22c80ce616a532c3447f395a92b897d2a78a1698))
* **border-style:** keep a per-side style through a later width utility ([60b03b1](https://github.com/simonm-c/tw-jib-css/commit/60b03b1942301c20ab3ed36eae413cecf9be4f5e))
* **border-style:** register the per-side style slots ([8ca638b](https://github.com/simonm-c/tw-jib-css/commit/8ca638b2a8df91509af2ba45ce74319531c9a9c3))
* **core:** carry Tailwind's background longhands through the shorthand ([28916e5](https://github.com/simonm-c/tw-jib-css/commit/28916e56d730beaa198d27fa66d3e031af8089ca))
* **core:** carry Tailwind's background longhands through the shorthand ([06c59dc](https://github.com/simonm-c/tw-jib-css/commit/06c59dccf2e5bd25ceba8dc0329411b8be0fd10e))
* **core:** keep the border gradient when a background gradient has no stop ([46c1d91](https://github.com/simonm-c/tw-jib-css/commit/46c1d91dfb61c098608270734b864a1d52705a13))
* **core:** paint a background colour once in every composited shorthand ([b677128](https://github.com/simonm-c/tw-jib-css/commit/b677128831de02c4df861573cc9ff85ba079558b))

## [2.0.2](https://github.com/simonm-c/tw-jib-css/compare/tw-jib-css-v2.0.1...tw-jib-css-v2.0.2) (2026-09-20)


### Bug Fixes

* **core:** accept the `/alpha` modifier on border and gradient stop c… ([b94457f](https://github.com/simonm-c/tw-jib-css/commit/b94457fd8535c9caf9bbcb10f3231ec05959c065))

## [2.0.1](https://github.com/simonm-c/tw-jib-css/compare/tw-jib-css-v1.0.0...tw-jib-css-v2.0.1) (2026-09-17)


### ⚠ BREAKING CHANGES

* **css:** every `--tw-jib--*` custom property and `@function` is now `--jib-*`, with internal double separators collapsed to one: `--tw-jib--fill-hue--amount` is `--jib-fill-hue-amount`, `--tw-jib--contrast--shade` is `--jib-contrast-shade`. Tailwind's own `--tw-bg-image` and `--tw-gradient-*` are unchanged. A consumer `@theme` key in the `--jib-contrast-ratio-*` namespace must be renamed by hand and fails silently otherwise: `text-contrast-<level>` stops existing rather than erroring.

### Features

* **border-gradient:** add border-spin-reverse and a spin duration na… ([a53ab1d](https://github.com/simonm-c/tw-jib-css/commit/a53ab1d5e551fe7be79808a7207a898b150efb3b))
* **border-gradient:** add border-spin-reverse and a spin duration namespace ([fa96b08](https://github.com/simonm-c/tw-jib-css/commit/fa96b081798d7c4112f075cc80a066866be92c37))
* **core:** accept every Tailwind spelling of a custom-property value ([1e13d1e](https://github.com/simonm-c/tw-jib-css/commit/1e13d1ec0e1aa903479771065d775dae56d258e5))
* **css:** rename variables to `--jib-*` and add directional aliases ([9fda1ca](https://github.com/simonm-c/tw-jib-css/commit/9fda1ca65c03cb444e748f48675d0bc59cad17af))


### Bug Fixes

* **border-gradient:** accept arbitrary values on border-linear-to ([42321d2](https://github.com/simonm-c/tw-jib-css/commit/42321d216eef51ed780dffda3be860c0662bf225))
* **core:** fail visibly when a colour transform has no source ([9dcaeb5](https://github.com/simonm-c/tw-jib-css/commit/9dcaeb5b2440eb84ee7f3765f6406801751c1b8f))
* **core:** seed sourceless text transforms from canvastext ([a92170c](https://github.com/simonm-c/tw-jib-css/commit/a92170cb5e75f19ca63293be4a1ec792bee449a7))


### Code Refactoring

* **border-gradient:** drop the inert var(`--color`) token ([75ca552](https://github.com/simonm-c/tw-jib-css/commit/75ca5526d7346e165463b53f1356991f2068d21f))
* **css:** move `@function` call sites into the experimental package ([0f7a753](https://github.com/simonm-c/tw-jib-css/commit/0f7a7533ea04c161bf4d956fe2d185f691b988f6))
* **css:** move `@function` call sites into the experimental package ([90a3038](https://github.com/simonm-c/tw-jib-css/commit/90a3038510f09eefd4df31b80f1206908cd57078))
