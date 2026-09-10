import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, basename } from 'node:path';

const GUIDE_DIR = join(import.meta.dirname, '..', 'docs', 'guide');
const OUTPUT_DIR = join(import.meta.dirname, '..', 'docs', 'public');
const SITE_URL = 'https://simonm-c.github.io/tw-jib-css';
const BASE_URL = `${SITE_URL}/guide`;

const PAGE_ORDER = [
  'installation',
  'composition',
  'automatic-contrast',
  'lightness',
  'saturation',
  'hue-rotate',
  'color-spaces',
  'border-gradient',
  'border-spin',
  'border-style',
  'comic',
  'pixel',
  'ripple',
  'bg-clip',
  'grid',
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

/**
 * Blocks: opening tag in the first column, closed by the matching tag in the
 * first column, which separates them from indented markup inside a fence.
 * Fences are tracked regardless, since a sample may start a line with a tag.
 */
function dropDemoBlocks(body: string): string {
  const lines = body.split('\n');
  const kept: string[] = [];
  let inFence = false;
  let openTag: string | null = null;

  for (const line of lines) {
    if (/^```/.test(line)) {
      inFence = !inFence;
      kept.push(line);
      continue;
    }
    if (inFence) {
      kept.push(line);
      continue;
    }

    if (openTag) {
      if (line === `</${openTag}>`) openTag = null;
      continue;
    }

    const open = line.match(/^<([a-z][a-z0-9]*)\b/);
    if (open) {
      const tag = open[1];
      if (!new RegExp(`</${tag}>\\s*$`).test(line)) openTag = tag;
      continue;
    }

    kept.push(line);
  }

  return kept.join('\n');
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

  out = out.replace(/^<summary>(.*?)<\/summary>\s*$/gm, '**$1**');
  out = out.replace(/^<\/?details>\s*$/gm, '');

  out = dropDemoBlocks(out);

  out = out.replace(
    /::: (tip|info|warning|danger)\s*(.*)\n/g,
    (_m, type: string, label: string) => {
      const heading = label.trim() || type.charAt(0).toUpperCase() + type.slice(1);
      return `**${heading}**\n`;
    },
  );
  out = out.replace(/^::: ?code-group\s*$/gm, '');
  out = out.replace(/^:::\s*$/gm, '');

  out = out.replace(/\]\(\/([^)]*)\)/g, `](${SITE_URL}/$1)`);
  out = out.replace(/\]\(\.\/([^)#]*)\.md(#[^)]*)?\)/g, `](${BASE_URL}/$1$2)`);

  out = out.replace(/^#\s+.*\n/m, '');

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
    '> TailwindCSS v4 utility library: WCAG-exact text contrast, border gradients, CSS relative color transforms, ripple effects, print-inspired texture backgrounds, and more.',
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
