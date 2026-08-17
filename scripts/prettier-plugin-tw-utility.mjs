import postcssPlugin from 'prettier/plugins/postcss.js';

/**
 * Keep prettier from closing up the space before `*` inside `@utility`.
 *
 * Prettier suppresses that space for every word/`*` pair under an `@utility`
 * at-rule, so `@utility bg-lightness-*` keeps its star tight. The rule reaches
 * declaration values as well, where it rewrites `calc(l * (1 - x))` into
 * `calc(l* (1 - x))`.
 *
 * Both forms compute the same colour – `*` needs no surrounding whitespace,
 * unlike `+` and `-` – so the rewrite is not wrong on its own. It matters
 * because lightness/_*.css and saturation/_*.css repeat one colour expression
 * in an `@utility` fallback and in the `@theme inline` value a `--modifier()`
 * resolves to, and Tailwind collapses that pair only while the two are
 * byte-equal. Prettier reformats the `@utility` copy and not the `@theme` one,
 * which splits them and emits both.
 *
 * The suppression is keyed on the at-rule's name in the AST, so parsing under
 * a different name steps around it; the real name goes back into the printed
 * document.
 */
const ALIAS = 'utility-tw-jib';

const { parsers: baseParsers, printers: basePrinters } = postcssPlugin;

function walk(node, visit) {
  if (!node || typeof node !== 'object') return;
  visit(node);
  for (const key of ['nodes', 'children']) {
    if (Array.isArray(node[key])) for (const child of node[key]) walk(child, visit);
  }
}

async function parse(text, options) {
  const ast = await baseParsers.css.parse(text, options);
  walk(ast, (node) => {
    if (node.type === 'css-atrule' && node.name === 'utility') node.name = ALIAS;
  });
  return ast;
}

function restore(doc) {
  if (typeof doc === 'string') return doc.includes(ALIAS) ? doc.replaceAll(ALIAS, 'utility') : doc;
  if (Array.isArray(doc)) return doc.map(restore);
  if (doc && typeof doc === 'object') {
    const out = { ...doc };
    for (const key of ['contents', 'parts', 'breakContents', 'flatContents', 'expandedStates']) {
      if (key in out) out[key] = restore(out[key]);
    }
    return out;
  }
  return doc;
}

export const parsers = { css: { ...baseParsers.css, parse } };

export const printers = {
  postcss: {
    ...basePrinters.postcss,
    print: (path, options, print) => restore(basePrinters.postcss.print(path, options, print)),
  },
};
