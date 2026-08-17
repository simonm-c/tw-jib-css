#!/usr/bin/env node

/**
 * Generates the comprehensive lightness matrix HTML for docs/examples/lightness.md.
 *
 * Usage:
 *   node scripts/generate-lightness-fixtures.mjs
 *
 * Outputs HTML to stdout – paste into the example page.
 */

// --- Data ---

const FULL_MATRIX_COLORS = [
  { name: 'red', light: '200', mid: '500', dark: '800' },
  { name: 'blue', light: '200', mid: '500', dark: '800' },
  { name: 'green', light: '200', mid: '500', dark: '800' },
  { name: 'amber', light: '200', mid: '500', dark: '800' },
  { name: 'slate', light: '200', mid: '500', dark: '800' },
];

const ALL_COLORS = [
  { name: 'red', light: '200', mid: '500', dark: '800' },
  { name: 'orange', light: '200', mid: '500', dark: '800' },
  { name: 'amber', light: '200', mid: '500', dark: '800' },
  { name: 'yellow', light: '200', mid: '500', dark: '800' },
  { name: 'lime', light: '200', mid: '500', dark: '800' },
  { name: 'green', light: '200', mid: '500', dark: '800' },
  { name: 'emerald', light: '200', mid: '500', dark: '800' },
  { name: 'teal', light: '200', mid: '500', dark: '800' },
  { name: 'cyan', light: '200', mid: '500', dark: '800' },
  { name: 'sky', light: '200', mid: '500', dark: '800' },
  { name: 'blue', light: '200', mid: '500', dark: '800' },
  { name: 'indigo', light: '200', mid: '500', dark: '800' },
  { name: 'violet', light: '200', mid: '500', dark: '800' },
  { name: 'purple', light: '200', mid: '500', dark: '800' },
  { name: 'fuchsia', light: '200', mid: '500', dark: '800' },
  { name: 'pink', light: '200', mid: '500', dark: '800' },
  { name: 'rose', light: '200', mid: '500', dark: '800' },
  { name: 'slate', light: '200', mid: '500', dark: '800' },
  { name: 'gray', light: '200', mid: '500', dark: '800' },
  { name: 'zinc', light: '200', mid: '500', dark: '800' },
  { name: 'neutral', light: '200', mid: '500', dark: '800' },
  { name: 'stone', light: '200', mid: '500', dark: '800' },
];

const SPACES = [
  'oklch',
  'lch',
  'lab',
  'oklab',
  'hsl',
  'hwb',
  'rgb',
  'srgb',
  'srgb-linear',
  'display-p3',
  'a98-rgb',
  'prophoto-rgb',
  'rec2020',
  'xyz',
  'xyz-d50',
  'xyz-d65',
  'color-mix',
];

const AMOUNTS = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// --- Helpers ---

function textColor(shade, direction, amount) {
  // Light base being darkened or high amounts of darkening → white text
  // Dark base being lightened or high amounts of lightening → could go either way
  if (direction === 'darken') {
    return 'text-white/60';
  }
  if (amount >= 50) {
    return 'text-gray-700/60';
  }
  if (shade === '200' && amount >= 30) {
    return 'text-gray-700/60';
  }
  return 'text-white/60';
}

function scaleRow(color, shade, direction, space, withModifier) {
  const spaceLabel = withModifier ? `/${space}` : '(default)';
  const modifier = withModifier ? `/${space}` : '';
  const dirClass = direction === 'darken' ? 'bg-darken' : 'bg-lighten';

  let html = `    <div class="flex items-center gap-2">\n`;
  html += `      <span class="w-24 text-[10px] text-gray-500 text-right font-mono shrink-0">${spaceLabel}</span>\n`;
  html += `      <div class="flex flex-1 gap-px">\n`;

  for (const amount of AMOUNTS) {
    const testId = `matrix-${color}-${shade}-${direction}-${amount}${withModifier ? `-${space}` : '-oklch'}`;
    const tc = textColor(shade, direction, amount);
    html += `        <div data-test="${testId}" class="flex-1 h-6 rounded-sm flex items-center justify-center bg-${color}-${shade} ${dirClass}-${amount}${modifier}">\n`;
    html += `          <span class="text-[7px] font-mono ${tc}">${amount}</span>\n`;
    html += `        </div>\n`;
  }

  html += `      </div>\n`;
  html += `    </div>\n`;
  return html;
}

function shadeBlock(color, shade, direction, spaces) {
  const label = shade === '200' ? 'light' : shade === '500' ? 'mid' : 'dark';
  let html = `#### ${color}-${shade} (${label} base) – ${direction === 'darken' ? 'Darken' : 'Lighten'} Scale\n\n`;
  html += `<div class="flex flex-col gap-px my-4">\n`;

  for (const space of spaces) {
    html += scaleRow(color, shade, direction, space, spaces.length > 1);
  }

  html += `</div>\n\n`;
  return html;
}

function colorSection(color, shades, spaces, heading) {
  let html = `### ${heading}\n\n`;

  for (const shade of shades) {
    html += shadeBlock(color.name, shade, 'lighten', spaces);
    html += shadeBlock(color.name, shade, 'darken', spaces);
  }

  return html;
}

// --- Main ---

let output = '';

// Section: Full matrix (5 key colors × all 17 spaces)
output += `## Comprehensive Matrix – Key Colors × All Spaces\n\n`;
output += `Full lightness scale (0–100) across all 17 colour spaces for 5 representative colours, each at 3 starting shades (200 light, 500 mid, 800 dark).\n\n`;

for (const color of FULL_MATRIX_COLORS) {
  const shades = [color.light, color.mid, color.dark];
  output += colorSection(
    color,
    shades,
    SPACES,
    `${color.name.charAt(0).toUpperCase() + color.name.slice(1)} – All Spaces`,
  );
}

// Section: All 22 colors × oklch only
output += `## All Tailwind Colors – Default (oklch)\n\n`;
output += `Full lightness scale (0–100) in the default oklch colour space for every Tailwind colour, each at 3 starting shades.\n\n`;

for (const color of ALL_COLORS) {
  // Skip the 5 already covered in full matrix
  if (FULL_MATRIX_COLORS.some((c) => c.name === color.name)) continue;

  const shades = [color.light, color.mid, color.dark];
  output += colorSection(
    color,
    shades,
    ['oklch'],
    `${color.name.charAt(0).toUpperCase() + color.name.slice(1)}`,
  );
}

process.stdout.write(output);
