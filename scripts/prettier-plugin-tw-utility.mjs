import postcssPlugin from 'prettier/plugins/postcss.js';

/**
 * Prettier suppresses the space before `*` under an `@utility` at-rule, which
 * reaches declaration values too: `calc(l * (1 - x))` becomes `calc(l* (1 -
 * x))`. Tailwind collapses a `@utility` fallback and the `@theme inline` value
 * a `--modifier()` resolves to only while both are byte-equal, and prettier
 * reformats one copy but not the other.
 *
 * Keyed on the at-rule's name in the AST, so parsing under another name steps
 * around it.
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
