import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    // The generators are Node programs; nothing else here is.
    files: ['scripts/**'],
    languageOptions: { globals: { console: 'readonly', process: 'readonly' } },
  },
  {
    // A leading underscore marks a positional a callback accepts only to reach a
    // later one, which eslint's default tolerates everywhere but the end of the list.
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
    },
  },
  {
    ignores: [
      'node_modules',
      'dist',
      'docs/.vitepress/dist',
      'docs/.vitepress/cache',
      'docs-experimental/.vitepress/dist',
      'docs-experimental/.vitepress/cache',
    ],
  },
);
