import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { HeadConfig } from 'vitepress';

export interface OgImage {
  /** Basename of a PNG under the instance's own `public/og/`. */
  file: string;
  /** The headline the image renders. */
  alt: string;
}

export interface OgHeadOptions {
  /** The instance's deployed root, trailing slash included; an og: URL must be absolute. */
  siteUrl: string;
  siteName: string;
  /** Absolute path to the instance's `public/`. */
  publicDir: string;
  /** Page path relative to the instance's source root, e.g. `guide/ripple.md`. */
  relativePath: string;
  title: string;
  description: string;
  pages: Record<string, OgImage>;
  fallback: OgImage;
}

interface Size {
  width: string;
  height: string;
}

const sizes = new Map<string, Size>();

/* IHDR carries width then height as big-endian uint32 at byte 16 of every PNG.
 * Reading them beats declaring them: a scraper that is lied to about the box
 * renders the card at the wrong aspect, and a missing file throws here rather
 * than 404ing months later in someone else's feed. */
function pngSize(path: string): Size {
  const cached = sizes.get(path);
  if (cached) return cached;

  const bytes = readFileSync(path);
  const size = { width: String(bytes.readUInt32BE(16)), height: String(bytes.readUInt32BE(20)) };
  sizes.set(path, size);
  return size;
}

export function ogHead({
  siteUrl,
  siteName,
  publicDir,
  relativePath,
  title,
  description,
  pages,
  fallback,
}: OgHeadOptions): HeadConfig[] {
  const image = pages[relativePath] ?? fallback;
  const src = `${siteUrl}og/${image.file}.png`;
  const { width, height } = pngSize(join(publicDir, 'og', `${image.file}.png`));
  const route = relativePath.replace(/\.md$/, '.html').replace(/(^|\/)index\.html$/, '$1');

  return [
    /* Page names repeat across instances, so each copy names itself
     * authoritative rather than competing as duplicate content. */
    ['link', { rel: 'canonical', href: `${siteUrl}${route}` }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:site_name', content: siteName }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:url', content: `${siteUrl}${route}` }],
    ['meta', { property: 'og:image', content: src }],
    ['meta', { property: 'og:image:type', content: 'image/png' }],
    ['meta', { property: 'og:image:width', content: width }],
    ['meta', { property: 'og:image:height', content: height }],
    ['meta', { property: 'og:image:alt', content: image.alt }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: title }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:image', content: src }],
    ['meta', { name: 'twitter:image:alt', content: image.alt }],
  ];
}
