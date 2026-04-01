# Contributing to tw-jib-css

Thanks for your interest in contributing! This guide will help you get started.

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/<your-username>/tw-jib-css.git
   cd tw-jib-css
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```

## CSS-First Principles

This library uses TailwindCSS v4's CSS-first architecture exclusively. **No JavaScript plugin code.**

All utilities must use native TW4 directives:

- `@utility` — define utility classes
- `@custom-variant` — define custom variants
- `@property` — typed CSS custom properties
- `@theme inline` — modifier maps and design tokens
- `@supports` — gate experimental features behind browser support checks

Do **not** use `plugin()`, `addUtilities()`, or any JS-based Tailwind plugin API.

## Development Workflow

1. Create a feature branch:
   ```bash
   git checkout -b feat/my-utility
   ```
2. Edit CSS files in `src/`
3. Run the CSS unit tests:
   ```bash
   pnpm test:css
   ```
4. Run the linter and formatter:
   ```bash
   pnpm lint
   pnpm format
   ```
5. Commit your changes (see commit conventions below)
6. Open a pull request

## Testing

### CSS Unit Tests (Vitest)

Each utility should have corresponding tests in `tests/css/` that verify the compiled CSS output.

```bash
pnpm test:css
```

### Integration Tests (Playwright)

Integration tests run against the VitePress docs site to verify utilities render correctly in real browsers.

```bash
pnpm test:integration
```

### What to Test

- Utility generates expected CSS declarations
- Utilities work with TW's arbitrary value syntax (`[...]`)
- Experimental features only apply in supporting browsers (`@supports` gates)
- Accessibility: check `prefers-reduced-motion` is respected for animated utilities

## Commit Conventions

Use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — new utility or feature
- `fix:` — bug fix
- `docs:` — documentation changes
- `refactor:` — code change that neither fixes a bug nor adds a feature
- `test:` — adding or updating tests
- `chore:` — tooling, CI, dependencies

Examples:

```
feat: add border-conic gradient interpolation modes
fix: correct display-p3 darken amount scaling
docs: add ripple usage examples to guide
```

## Pull Request Guidelines

- Keep PRs focused — one feature or fix per PR
- Include tests for new utilities
- Update documentation if adding user-facing changes
- Ensure `pnpm test` and `pnpm lint` pass
- Describe what you changed and why in the PR description

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
