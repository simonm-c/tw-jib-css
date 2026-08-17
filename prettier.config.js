/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  // Restores the space prettier closes up around `*` inside @utility, which
  // otherwise splits a colour expression from the @theme copy it must match.
  plugins: ['./scripts/prettier-plugin-tw-utility.mjs'],
  overrides: [
    {
      // Tailwind copies declaration values into the compiled CSS with the
      // source's own line breaks and quote characters, so how these files are
      // formatted is part of what ships.
      //
      // printWidth   Wrapping a value splits one declaration across lines, and
      //              a --modifier() result then no longer matches the fallback
      //              declaration it repeats verbatim – Tailwind stops
      //              collapsing the pair and emits both. Never wrapping keeps
      //              every value on one line, which is how they are written.
      // singleQuote  The WCAG ratings are strings that if(style()) compares,
      //              written "AAA" by wcag/_functions.css and queried the same
      //              way by wcag/_badge.css. Double quotes keep both sides as
      //              they are rather than rewriting a comparison that only
      //              Chromium can run.
      files: 'packages/*/src/**/*.css',
      options: { printWidth: 10000, singleQuote: false },
    },
  ],
};
