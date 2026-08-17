/**
 * Generates, into docs/public/ from docs/guide/:
 * - llms.txt – structured index following the llms.txt convention
 * - llms-full.txt – all guide pages concatenated, Vue components stripped
 */

import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, basename } from 'node:path';

const GUIDE_DIR = join(import.meta.dirname, '..', 'docs', 'guide');
const OUTPUT_DIR = join(import.meta.dirname, '..', 'docs', 'public');
const BASE_URL = 'https://simonm-c.github.io/tw-jib-css/guide';

// Logical ordering: installation → concepts → flagship → supporting → experimental
const PAGE_ORDER = [
  'installation',
  'what-jibcss-adds',
  'color-spaces',
  'colour-spaces',
  'accessible-color',
  'composition',
  'print-textures',
  'color-transforms',
  'wcag',
  'border-gradient',
  'gradient-borders',
  'border-spin',
  'lightness',
  'saturation',
  'hue-rotate',
  'ripple',
  'ripples',
  'comic',
  'pixel',
  'border-style',
  'grid',
  'corner',
  'interpolate',
  'picker',
  'wcag-badge',
];

interface Page {
  slug: string;
  title: string;
  description: string;
  content: string;
}

function extractFrontmatter(raw: string): { title: string; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { title: '', body: raw };

  const fm = match[1];
  const body = match[2];
  const titleMatch = fm.match(/^title:\s*(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : '';
  return { title, body };
}

function extractDescription(body: string): string {
  const ctxMatch = body.match(/<!--\s*llm-context:\s*([\s\S]*?)\s*-->/);
  if (ctxMatch) {
    const first = ctxMatch[1].split(/\.\s/)[0];
    return first.endsWith('.') ? first : first + '.';
  }
  const lines = body.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (
      trimmed &&
      !trimmed.startsWith('#') &&
      !trimmed.startsWith('<') &&
      !trimmed.startsWith(':::')
    ) {
      return trimmed.length > 120 ? trimmed.slice(0, 117) + '...' : trimmed;
    }
  }
  return '';
}

function processContent(body: string): string {
  let out = body;

  out = out.replace(/<!--\s*llm-context:\s*([\s\S]*?)\s*-->/g, '> $1');

  out = out.replace(/<script[^>]*>[\s\S]*?<\/script>/g, '');

  out = out.replace(
    /<QuickReference\s+:rows="\[([\s\S]*?)\]"\s*\/>/g,
    (_match, rowsStr: string) => {
      const rows = [...rowsStr.matchAll(/class:\s*'([^']*)',\s*styles:\s*'([^']*)'/g)];
      if (rows.length === 0) return '';
      let table = '| Class | CSS |\n|---|---|\n';
      for (const [, cls, styles] of rows) {
        table += `| \`${cls}\` | \`${styles}\` |\n`;
      }
      return table;
    },
  );

  out = out.replace(/<Example[^>]*>/g, '\n```html');
  out = out.replace(/<\/Example>/g, '```\n');

  out = out.replace(
    /::: (tip|info|warning|danger)\s*(.*)\n/g,
    (_m, type: string, label: string) => {
      const heading = label.trim() || type.charAt(0).toUpperCase() + type.slice(1);
      return `**${heading}**\n`;
    },
  );
  out = out.replace(/^:::\s*$/gm, '');

  out = out.replace(/\n{4,}/g, '\n\n\n');

  return out.trim();
}

function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const files = readdirSync(GUIDE_DIR).filter((f) => f.endsWith('.md'));

  const pages: Page[] = [];

  for (const file of files) {
    const slug = basename(file, '.md');
    const raw = readFileSync(join(GUIDE_DIR, file), 'utf-8');
    const { title, body } = extractFrontmatter(raw);
    const description = extractDescription(body);
    const content = processContent(body);

    pages.push({
      slug,
      title: title || slug,
      description,
      content,
    });
  }

  pages.sort((a, b) => {
    const ai = PAGE_ORDER.indexOf(a.slug);
    const bi = PAGE_ORDER.indexOf(b.slug);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });

  const fullParts: string[] = [];
  for (const page of pages) {
    fullParts.push(`# ${page.title}\n\n${page.content}`);
  }
  const fullTxt = fullParts.join('\n\n---\n\n');
  writeFileSync(join(OUTPUT_DIR, 'llms-full.txt'), fullTxt, 'utf-8');

  const indexLines: string[] = [
    '# tw-jib-css',
    '',
    '> TailwindCSS v4 utility library – WCAG-exact text contrast, border gradients, CSS relative color transforms, ripple effects, print-inspired texture backgrounds, and more.',
    '',
    '## Docs',
    '',
  ];
  for (const page of pages) {
    indexLines.push(`- [${page.title}](${BASE_URL}/${page.slug}): ${page.description}`);
  }
  indexLines.push('');
  writeFileSync(join(OUTPUT_DIR, 'llms.txt'), indexLines.join('\n'), 'utf-8');

  console.log(`llms.txt: ${pages.length} pages indexed`);
  console.log(`llms-full.txt: ${fullTxt.length} characters`);
}

main();
