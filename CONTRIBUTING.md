# Contributing to tw-jib-css

Thanks for contributing. Here is how to get set up.

## Getting started

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

## CSS-first principles

This library uses TailwindCSS v4's CSS-first architecture exclusively. **No JavaScript plugin code.**

All utilities must use native TW4 directives:

- `@utility` defines utility classes
- `@custom-variant` defines custom variants
- `@property` declares typed CSS custom properties
- `@theme inline` holds modifier maps and design tokens
- `@supports` gates experimental features behind a browser support check

Do **not** use `plugin()`, `addUtilities()`, or any JS-based Tailwind plugin API.

## Development workflow

1. Create a feature branch:
   ```bash
   git checkout -b feat/my-utility
   ```
2. Edit CSS under `packages/tw-jib-css/src/`, or
   `packages/tw-jib-css-experimental/src/` if the feature needs a browser
   capability that is not yet baseline
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

### CSS unit tests (Vitest)

Each utility should have corresponding tests in `tests/css/` that verify the compiled CSS output.

```bash
pnpm test:css
```

### Integration tests (Playwright)

Integration tests run against the VitePress docs site to check what real browsers render.
They serve a **built** site, not `vitepress dev`, so build it first:

```bash
pnpm build:docs && pnpm build:docs:experimental
pnpm test:integration
```

The build only needs redoing when a fixture under `docs/examples/` or the library
CSS changes; iterate on the specs themselves against an existing build.

A dev server is the wrong target here rather than merely a slower one. One
VitePress instance emits one stylesheet and Tailwind compiles it on demand, so a
worker opening a new example page rebuilds the stylesheet every other worker is
already reading, and the suite passes serially while failing in parallel.

### What to test

- Utility generates expected CSS declarations
- Utilities work with TW's arbitrary value syntax (`[...]`)
- Experimental features only apply in supporting browsers (`@supports` gates)
- Animated utilities respect `prefers-reduced-motion`

## Commit conventions

Use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` new utility or feature
- `fix:` bug fix
- `docs:` documentation changes
- `refactor:` code change that neither fixes a bug nor adds a feature
- `test:` adding or updating tests
- `chore:` tooling, CI, dependencies

Examples:

```
feat: add border-conic gradient interpolation modes
fix: correct display-p3 darken amount scaling
docs: add ripple usage examples to guide
```

## Pull request guidelines

- Keep PRs focused. One feature or fix per PR
- Include tests for new utilities
- Update documentation if adding user-facing changes
- Make sure `pnpm test` and `pnpm lint` pass
- Describe what you changed and why in the PR description

## Releasing

Releases are automated, and the commit messages above are what drive them, so
the type on a commit decides the next version number. `fix:` gives a patch,
`feat:` a minor, a `!` or a `BREAKING CHANGE:` footer a major. `docs:`, `test:`,
`chore:` and friends release nothing.

[release-please](https://github.com/googleapis/release-please) watches `main` and
keeps a single release pull request open, rewriting it as commits land. Merging
that PR is what cuts a release: it writes the version bumps and the per-package
`CHANGELOG.md`, tags, and hands off to the publish workflow.

Two things about that are deliberate rather than incidental:

**Both packages always carry the same version**, via the `linked-versions`
plugin in `release-please-config.json`. `tw-jib-css-experimental` declares
`tw-jib-css` as a peer with `workspace:^`, which resolves to whatever the stable
package's version is at pack time, so letting the two drift apart would publish
a peer range that points at a version nobody released.

**Publishing waits for a human.** The publish job runs in the `npm-publish`
environment, which requires a reviewer to approve the run before anything
reaches npm. A merged release PR is a request to publish, not a publish.

Only the code owner can approve a release PR or the deployment that follows, so
releasing is not something a contributor does.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
