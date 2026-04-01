---
title: Colour Spaces
---

<!-- llm-context: General overview of CSS colour spaces used across tw-jib-css utilities — what each space is, how they differ, and when to choose one. -->

# Colour Spaces

Several tw-jib-css utilities let you choose which colour space a transform or interpolation operates in. This page explains what each space is, how they differ, and when to pick one.

## What is a colour space?

A colour space is a model for representing colour numerically. Each space defines its own axes — some use lightness, hue, and chroma; others use red, green, and blue channels; others use device-independent coordinates.

The choice of colour space affects how colour transformations look. Adjusting "lightness" in one space may shift hue slightly, while another space keeps hue perfectly stable. Gradient interpolation between two colours can follow completely different paths depending on the space.

## Available colour spaces

CSS supports a wide range of colour spaces. tw-jib-css utilities expose these 17:

| Name | CSS notation | Characteristics |
| --- | --- | --- |
| OKLCh | `oklch()` | Perceptually uniform lightness and chroma with a hue angle. The default in tw-jib-css. |
| LCH | `lch()` | CIE LCH — perceptually uniform, predecessor to OKLCh. Slight hue shifts at high chroma. |
| OKLab | `oklab()` | Perceptually uniform lightness and two colour-opponent axes. No hue channel — good for hue-stable transforms. |
| CIELAB | `lab()` | The original perceptually uniform space. Similar to OKLab but with known uniformity issues at blue hues. |
| HSL | `hsl()` | Hue, Saturation, Lightness. Familiar and intuitive but not perceptually uniform. |
| HWB | `hwb()` | Hue, Whiteness, Blackness. An alternative to HSL that some find more intuitive for tinting and shading. |
| RGB | `rgb()` | Direct red, green, blue channel values. The web's legacy default. |
| sRGB | `color(srgb ...)` | The standard web colour space in functional `color()` notation. |
| Linear sRGB | `color(srgb-linear ...)` | sRGB without the gamma curve — linear light values. Used in physically-based rendering. |
| Display P3 | `color(display-p3 ...)` | Wide gamut. Covers colours available on modern Apple and flagship Android displays. |
| Adobe RGB (1998) | `color(a98-rgb ...)` | Wide gamut designed for print and photography workflows. |
| ProPhoto RGB | `color(prophoto-rgb ...)` | Very wide gamut. Covers nearly all visible colours — primarily used in photography. |
| Rec. 2020 | `color(rec2020 ...)` | Ultra-wide gamut designed for HDR video. |
| CIE XYZ | `color(xyz ...)` | Device-independent reference space. All other spaces can convert through XYZ. |
| CIE XYZ D50 | `color(xyz-d50 ...)` | XYZ under D50 (warm daylight) illuminant. Used by CIELAB and ProPhoto RGB internally. |
| CIE XYZ D65 | `color(xyz-d65 ...)` | XYZ under D65 (noon daylight) illuminant. Used by sRGB and OKLab internally. |
| color-mix | `color-mix()` | Not a colour space itself — blends colours using `color-mix()` in oklab. Shifts hue and saturation slightly. |

## Perceptual uniformity

In a **perceptually uniform** space, equal numeric changes produce equal visual changes regardless of the starting colour. A 10-unit lightness reduction on yellow looks the same as a 10-unit reduction on blue.

**OKLCh** and **OKLab** are the most perceptually uniform spaces available in CSS. This is why oklch is the default across tw-jib-css — transformations produce visually consistent results on any hue.

**HSL** and **RGB** are *not* perceptually uniform. The same numeric lightness change on different hues produces visibly different results. HSL's "50% lightness" looks much brighter on yellow than on blue. These spaces are still useful when you want direct control over specific channels, but they are less predictable for design-system-level colour manipulation.

**LCH** and **Lab** are perceptually uniform in theory but have known issues — particularly hue shifts in the blue region. OKLCh and OKLab were created specifically to fix these problems.

## Wide gamut spaces

Standard web colours live in the **sRGB** gamut. Modern displays — particularly Apple devices — support the wider **Display P3** gamut, which includes more vivid greens, reds, and oranges that sRGB cannot represent.

If you are working with colours outside the sRGB gamut, using a wide gamut space (Display P3, Adobe RGB, ProPhoto RGB, or Rec. 2020) preserves those colours without clipping. For most web work, sRGB or oklch is sufficient.

## Choosing a space

| Space | Best for |
| --- | --- |
| OKLCh (default) | General purpose. Perceptually uniform lightness — the same numeric change produces a visually consistent result on any hue. |
| OKLab | Smooth transforms without hue shifts. Good when you want to avoid any hue rotation during lightness changes. |
| HSL | Familiar and intuitive, but not perceptually uniform. The same amount on yellow looks different from the same amount on blue. |
| Display P3 | Wide-gamut displays. Preserves P3 colours without clipping to sRGB. |
| sRGB | Direct channel manipulation in the standard web colour space. Can produce harsh transitions. |
| LCH / Lab | Perceptually uniform alternatives if you need CIE-based spaces. OKLCh/OKLab are generally preferred. |

## Where colour spaces appear in tw-jib-css

- **[Darken](/guide/darken)** and **[Lighten](/guide/lighten)** — All 17 spaces available via the `/modifier` syntax (e.g. `bg-darken-20/oklch`).
- **[Border Gradient](/guide/border-gradient)** — Interpolation modes control which space gradients blend through (sRGB, HSL, OKLab, OKLCh with hue direction modifiers).
- **[Ripple](/guide/ripple)** — Uses `color-mix(in oklch)` internally for opacity blending.
