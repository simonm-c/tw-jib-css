/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  plugins: ['./scripts/prettier-plugin-tw-utility.mjs'],
  overrides: [
    {
      // Tailwind copies declaration values with the source's own line breaks and
      // quotes, so a wrapped value stops matching the fallback it repeats and both
      // get emitted. The WCAG ratings are strings if(style()) compares, so the quote
      // character matters too.
      files: 'packages/*/src/**/*.css',
      options: { printWidth: 10000, singleQuote: false },
    },
  ],
};
