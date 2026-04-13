/**
 * Generate docs/examples/fill-lightness.md
 * Mirrors the structure of docs/examples/lightness.md but for SVG fill utilities.
 */

const HEART = `M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z`;

const SPACES = [
  'oklch', 'lch', 'lab', 'oklab', 'hsl', 'hwb', 'rgb', 'srgb',
  'srgb-linear', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec2020',
  'xyz', 'xyz-d50', 'xyz-d65', 'color-mix',
];

const AMOUNTS = [0, 5, 10, 20, 50, 75, 100];
const SCALE_AMOUNTS = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const KEY_COLORS = ['red', 'blue', 'green', 'amber', 'slate'];
const KEY_SHADES = [200, 500, 800];

const ALL_COLORS = [
  'orange', 'yellow', 'lime', 'emerald', 'teal', 'cyan', 'sky',
  'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose',
  'gray', 'zinc', 'neutral', 'stone',
];

function svg(fillClass: string, size = 'w-12 h-12') {
  return `<svg class="${size} ${fillClass}" viewBox="0 0 24 24"><path d="${HEART}"/></svg>`;
}

function lightnessCls(op: string, amount: number, space: string) {
  const spaceModifier = space === 'default' ? '' : `/${space}`;
  return op === 'darken'
    ? `-fill-lightness-${amount}${spaceModifier}`
    : `fill-lightness-${amount}${spaceModifier}`;
}

function icon(color: string, shade: number, op: string, amount: number, space: string, bg: string) {
  const fillClass = `fill-${color}-${shade} ${lightnessCls(op, amount, space)}`;
  const testId = `matrix-${color}-${shade}-${op}-${amount}-${space === 'default' ? 'oklch' : space}`;
  return `        <div data-test="${testId}" class="flex-1 h-8 rounded-sm flex items-center justify-center ${bg}">
          ${svg(fillClass, 'w-5 h-5')}
        </div>`;
}

function scaleRow(color: string, shade: number, op: string, space: string, label: string, bg: string) {
  const items = SCALE_AMOUNTS.map(a => icon(color, shade, op, a, space, bg)).join('\n');
  return `    <div class="flex items-center gap-2">
      <span class="w-24 text-[10px] text-gray-500 text-right font-mono shrink-0">${label}</span>
      <div class="flex flex-1 gap-px">
${items}
      </div>
    </div>`;
}

function allSpacesSection(color: string, shade: number, op: string, bg: string) {
  const title = `${color}-${shade} (${shade <= 200 ? 'light' : shade <= 500 ? 'mid' : 'dark'} base) — ${op === 'lighten' ? 'Lighten' : 'Darken'} Scale`;
  const rows = SPACES.map(s => scaleRow(color, shade, op, s, `/${s}`, bg)).join('\n');
  return `#### ${title}

<div class="flex flex-col gap-px my-4">
${rows}
</div>`;
}

function defaultOnlySection(color: string, shade: number, op: string, bg: string) {
  const title = `${color}-${shade} (${shade <= 200 ? 'light' : shade <= 500 ? 'mid' : 'dark'} base) — ${op === 'lighten' ? 'Lighten' : 'Darken'} Scale`;
  const row = scaleRow(color, shade, op, 'default', '(default)', bg);
  return `#### ${title}

<div class="flex flex-col gap-px my-4">
${row}
</div>`;
}

// --- Simple grid for the top sections ---

function simpleGrid(testPrefix: string, fillBase: string, op: string, amounts: number[], bg: string) {
  return amounts.map(a => {
    const cls = `${fillBase} ${lightnessCls(op, a, 'default')}`;
    return `  <div data-test="${testPrefix}-${a}" class="h-20 rounded-lg flex items-center justify-center ${bg}">
    ${svg(cls)}
    <span class="text-[10px] font-mono text-gray-500 absolute bottom-1">${a}</span>
  </div>`;
  }).join('\n');
}

function spaceGrid(testPrefix: string, fillBase: string, op: string, amount: number, bg: string) {
  return SPACES.map(s => {
    const cls = `${fillBase} ${lightnessCls(op, amount, s)}`;
    const label = bg.includes('800') ? 'text-gray-400' : 'text-gray-500';
    return `  <div data-test="${testPrefix}-${s}" class="h-20 rounded-lg flex items-center justify-center ${bg}">
    ${svg(cls)}
    <span class="text-[10px] font-mono ${label}">/${s}</span>
  </div>`;
  }).join('\n');
}

// --- Build the file ---

const lines: string[] = [];
const p = (s: string) => lines.push(s);

p(`---
title: Fill Lightness Test Fixtures
layout: page
---

# Fill Lightness Test Fixtures

Test page covering all fill-lightness / -fill-lightness × color space combinations.

## Darken — Default (oklch, no modifier)

Darken amounts 0–100 on fill-blue-500 using \`-fill-lightness-{n}\`.

<div class="grid grid-cols-5 gap-3 my-6">
${simpleGrid('fill-darken', 'fill-blue-500', 'darken', AMOUNTS, 'bg-gray-100')}
</div>

## Lighten — Default (oklch, no modifier)

Lighten amounts 0–100 on fill-blue-500 using \`fill-lightness-{n}\`.

<div class="grid grid-cols-5 gap-3 my-6">
${simpleGrid('fill-lighten', 'fill-blue-500', 'lighten', AMOUNTS, 'bg-gray-800')}
</div>

## Darken — All 17 Color Spaces

Each uses \`fill-blue-500 -fill-lightness-20/{space}\`.

<div class="grid grid-cols-4 gap-3 my-6">
${spaceGrid('fill-darken', 'fill-blue-500', 'darken', 20, 'bg-gray-100')}
</div>

## Lighten — All 17 Color Spaces

Each uses \`fill-blue-500 fill-lightness-20/{space}\`.

<div class="grid grid-cols-4 gap-3 my-6">
${spaceGrid('fill-lighten', 'fill-blue-500', 'lighten', 20, 'bg-gray-800')}
</div>`);

// Comprehensive Matrix — Key Colors × All Spaces
p(`
## Comprehensive Matrix — Key Colors × All Spaces

Full lightness scale (0–100) across all 17 colour spaces for 5 representative colours, each at 3 starting shades (200 light, 500 mid, 800 dark).`);

for (const color of KEY_COLORS) {
  p(`\n### ${color.charAt(0).toUpperCase() + color.slice(1)} — All Spaces`);
  for (const shade of KEY_SHADES) {
    const bg = shade >= 500 ? 'bg-gray-800' : 'bg-gray-100';
    p('');
    p(allSpacesSection(color, shade, 'lighten', bg));
    p('');
    p(allSpacesSection(color, shade, 'darken', shade <= 200 ? 'bg-gray-100' : 'bg-gray-800'));
  }
}

// All Tailwind Colors — Default (oklch)
p(`\n## All Tailwind Colors — Default (oklch)

Full lightness scale (0–100) in the default oklch colour space for every Tailwind colour, each at 3 starting shades.`);

for (const color of ALL_COLORS) {
  p(`\n### ${color.charAt(0).toUpperCase() + color.slice(1)}`);
  for (const shade of KEY_SHADES) {
    const bg = shade >= 500 ? 'bg-gray-800' : 'bg-gray-100';
    p('');
    p(defaultOnlySection(color, shade, 'lighten', bg));
    p('');
    p(defaultOnlySection(color, shade, 'darken', shade <= 200 ? 'bg-gray-100' : 'bg-gray-800'));
  }
}

// Alias Equivalence
p(`
## Alias Equivalence

Verify \`fill-lightness-{n}\` and \`fill-lighten-{n}\` produce the same result.

<div class="grid grid-cols-2 gap-3 my-6">
  <div data-test="fill-alias-lightness" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    ${svg('fill-blue-500 fill-lightness-20')}
    <span class="text-xs font-mono text-gray-500 ml-2">fill-lightness-20</span>
  </div>
  <div data-test="fill-alias-lighten" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    ${svg('fill-blue-500 fill-lighten-20')}
    <span class="text-xs font-mono text-gray-500 ml-2">fill-lighten-20</span>
  </div>
  <div data-test="fill-alias-neg-lightness" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    ${svg('fill-blue-500 -fill-lightness-20')}
    <span class="text-xs font-mono text-gray-500 ml-2">-fill-lightness-20</span>
  </div>
  <div data-test="fill-alias-darken" class="h-20 rounded-lg flex items-center justify-center bg-gray-100">
    ${svg('fill-blue-500 fill-darken-20')}
    <span class="text-xs font-mono text-gray-500 ml-2">fill-darken-20</span>
  </div>
</div>`);

const fs = await import('node:fs');
fs.writeFileSync('docs/examples/fill-lightness.md', lines.join('\n') + '\n');
console.log(`Generated ${lines.join('\n').split('\n').length} lines`);
