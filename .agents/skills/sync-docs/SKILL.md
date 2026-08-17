---
name: sync-docs
description: >
  Audit source CSS utilities against documentation and synchronize.
  Detects missing pages, incomplete reference tables, missing modifiers,
  stale utility references, and missing examples. Works as full audit
  or targeted to a specific module.
license: MIT
metadata:
  author: Simon Monk-Chipman
  version: '1.0'
compatibility: tw-jib-css project with TailwindCSS v4
---

# Sync Documentation

You are a documentation synchronization agent for tw-jib-css, a TailwindCSS v4
CSS-first utility library. Your job is to ensure every `@utility` defined in
`src/` is accurately and completely documented in `docs/guide/`.

The Tailwind CSS documentation (https://tailwindcss.com/docs/) is the gold
standard. Every guide page should match its quality: scannable reference tables,
visual demos, conditional application examples, custom value/variable syntax.
Fetch a relevant Tailwind docs page when you need to reference the format for a
specific utility category.

## When to Use

Invoke this skill when:

- A source CSS file in `src/` has been added, modified, or removed
- The user asks you to audit, sync, or check documentation
- The user says something like "I updated lightness.css, sync the docs"
- A new module is being created and needs a guide page

## Scope Detection

Determine your scope from the user's invocation:

**Full audit** — User says "sync docs", "audit all docs", "check documentation",
or gives no specific module. Scan ALL source files against ALL guide pages.

**Targeted** — User names a specific module or file: "sync lightness docs",
"I updated scrollbar.css", "create docs for comic". Limit scope to that module
and its corresponding guide page(s).

For colour transform modules (lightness, saturation, hue-rotate), a targeted
sync includes ALL variant pages (bg, text, fill, stroke, outline, accent,
border) since they share the same source sub-files.

---

## Source-to-Documentation Map

Paths are relative to `packages/`. `docs/guide/` holds the stable pages,
`docs-experimental/` the experimental ones.

| Source Partial                                                                  | Guide Page(s)                          | Import Path                           |
| ------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------- |
| `tw-jib-css/src/border-gradient/_index.css`                                     | `border-gradient.md`, `border-spin.md` | `tw-jib-css/border-gradient`          |
| `tw-jib-css/src/border-style/_index.css`                                        | `border-style.md`                      | `tw-jib-css/border-style`             |
| `tw-jib-css/src/color-transforms/lightness/` → `_bg.css` … `_border.css`        | `lightness.md`                         | `tw-jib-css/color-transforms`         |
| `tw-jib-css/src/color-transforms/saturation/` → same pattern                    | `saturation.md`                        | `tw-jib-css/color-transforms`         |
| `tw-jib-css/src/color-transforms/hue-rotate/` → same pattern                    | `hue-rotate.md`                        | `tw-jib-css/color-transforms`         |
| `tw-jib-css/src/accessible-shade/_index.css`                                    | `wcag.md`, `accessible-color.md`       | `tw-jib-css/accessible-shade`         |
| `tw-jib-css/src/ripple/_index.css`                                              | `ripple.md`, `ripples.md`              | `tw-jib-css/ripple`                   |
| `tw-jib-css/src/grid/_index.css`                                                | `grid.md`                              | `tw-jib-css/grid`                     |
| `tw-jib-css/src/comic/_index.css`                                               | `comic.md`                             | `tw-jib-css/comic`                    |
| `tw-jib-css/src/pixel/_index.css`                                               | `pixel.md`                             | `tw-jib-css/pixel`                    |
| `tw-jib-css-experimental/src/corner/_index.css`                                 | `corner.md`                            | `tw-jib-css-experimental/corner`      |
| `tw-jib-css-experimental/src/interpolate/_index.css`                            | `interpolate.md`                       | `tw-jib-css-experimental/interpolate` |
| `tw-jib-css-experimental/src/picker/_index.css`                                 | `picker.md`                            | `tw-jib-css-experimental/picker`      |
| `tw-jib-css-experimental/src/wcag-badge/_index.css`                             | `wcag-badge.md`                        | `tw-jib-css-experimental/wcag-badge`  |
| `tw-jib-css-experimental/src/{color-transforms,accessible-shade}/_override.css` | `functions.md`                         | `tw-jib-css-experimental/functions`   |

A leading underscore marks a partial and its absence an entry; `_index.css` is a
folder's barrel and `_override.css` re-implements a class another package
already defines. The entry beside a folder is a bare import list, so read the
partials for utilities and `package.json` `exports` for the import path.
`core/` and `contrast/` publish nothing — they are shared by the suites that
import them.

Also check each package's `src/index.css` for its import list. If a partial is
imported there but has no entry in this map, a new guide page is needed.

---

## Phase 1: Source Extraction

For each source file in scope, extract the following by reading the CSS.

### 1a. Utility Names

Use `Grep` to find all `@utility` declarations:

```
pattern: @utility\s+(-?[\w-]+[\w*-]*)
glob: src/**/*.css
```

For each match, record:

- **Utility name** (e.g., `bg-lightness-*`, `-bg-lightness-*`)
- **Whether it has a wildcard** (`*`) — means it accepts values
- **Whether it is negative** (starts with `-`)
- **Property count** per block — multiple same-name blocks with different
  property counts = TW4 specificity stacking. Note this but do not document
  each block separately; document the combined behaviour.

### 1b. Value Types

Inside each `@utility` block, find `--value(...)` calls:

- Named string values: `--value('solid', 'dashed', ...)` → enumerate them all
- Type values: `--value(integer)`, `--value(number)`, `--value(--color-*, [color])`
- Bracket types: `[number]`, `[color]`, `[length]`, `[angle]`, `[percentage]`,
  `[position]`, `[border-style]`, `[*]`, `[url]` → arbitrary value syntax

### 1c. Modifier Types

Find `--modifier(...)` calls:

- Theme map modifiers: `--modifier(--tw-jib--background-color-interpolation-*)` →
  read the `@theme inline` block to get available modifier names
- Literal modifiers: `--modifier('oklch', 'lch', ...)` → enumerate all
- Numeric modifiers: `--modifier(integer)` → typically opacity as percentage
- Noop modifiers: `--tw-jib--noop: --modifier(...)` — these consume the modifier
  for validation only; still document them as available modifiers

### 1d. Custom Properties

Find `@property` declarations in `src/core/_index.css` and the module file:

- Record property name, syntax type, inherits flag, initial value
- These inform the "How it works" section and animation documentation

### 1e. Custom Variants

Find `@custom-variant` declarations:

- Record variant name and `@supports` condition
- These need documentation explaining usage and browser support

### 1f. Feature Gates

Find `@supports` blocks wrapping utility content:

- Record the support condition
- This determines browser support callouts in docs

### 1g. Theme Inline Maps

Read `@theme inline { ... }` blocks to extract:

- Modifier option names (e.g., `--tw-jib--gradient-interpolation-oklch` → modifier `/oklch`)
- Direction values (e.g., `--tw-jib--gradient-angle-to-t` → `border-linear-to-t`)
- Size/unit tokens

### 1h. Aliases

Identify utilities that produce identical CSS to another utility but with a
different name (e.g., `bg-lighten-*` = `bg-lightness-*`, `bg-darken-*` =
`-bg-lightness-*`). These get an Aliases section.

### 1i. CSS Functions (Experimental)

Find `@function --name() { ... }` blocks:

- Record function name, parameters, return type
- These are experimental and require `@supports` gating

---

## Phase 2: Documentation Audit

For each source module, read its corresponding guide page(s) and check every
item below. Mark each as pass ✓ or fail ✗.

### 2a. Page Existence

- Guide page exists at `docs/guide/{name}.md`
- Page is listed in sidebar at `docs/.vitepress/config.ts`
- Page has correct frontmatter with `title:`

### 2b. LLM Context

- `<!-- llm-context: ... -->` comment exists after frontmatter
- Summary accurately describes the utility's purpose and technique

### 2c. Import Tip Block

- Contains the `::: tip Import` block
- Import path matches `package.json` exports for this module
- Experimental modules note `@import 'tw-jib-css-experimental'` or their
  specific experimental sub-path. It is a separate package, not a sub-path of
  `tw-jib-css`, so `tw-jib-css/experimental/*` is always wrong

### 2d. Quick Reference Table

- `<QuickReference :rows="[...]" />` component exists
- Every utility name from Phase 1 has a corresponding row
- Every negative utility has a row
- Every modifier value has at least one example row showing the
  `utility-<value>/<modifier>` pattern
- Arbitrary value syntax documented if source supports bracket types
- CSS output in `styles` column is accurate to the actual declarations

### 2e. Basic Usage Section

- At least one `<Example>` component with working demo HTML
- Demo uses the primary utility in a realistic visual context
- For colour transforms: both lighten/increase and darken/decrease demonstrated

### 2f. Colour Spaces Section (colour transforms only)

- Section exists if utility supports colour space modifiers
- Shows comparison across at least the default (oklch) + 3 alternatives
- Links to the Colour Spaces guide: `/guide/colour-spaces`

### 2g. Scale Section (if applicable)

- Range of values demonstrated (e.g., 10–90 in increments)
- Both directions shown (lighten + darken, saturate + desaturate)

### 2h. Aliases Section (if applicable)

- Table mapping alias → canonical utility
- Code example showing both forms

### 2i. Applying Conditionally Section

- Hover/focus state example with code
- Demonstrates TW variant prefix pattern (`hover:utility-name`)

### 2j. Using a Custom Value Section

- Bracket notation example: `utility-[value]`
- `<Example>` demo with an arbitrary value

### 2k. Using a Custom Variable Section

- CSS variable syntax example: `utility-(type:--var-name)`
- `<Example>` demo with `style="--var: value"` inline

### 2l. Cross-references (colour transforms)

- Links to all variant pages (bg, text, fill, stroke, outline, accent, border)
- Links to Colour Spaces guide where relevant

### 2m. Stale References

- No utility names in docs that do not exist in source
- No modifiers documented that are not in the `@theme inline` map or
  `--modifier()` literal list
- No import paths that don't match `package.json` exports

---

## Phase 3: Gap Report

**ALWAYS present findings before making any changes.** Format the report as:

```markdown
## Documentation Audit: {scope}

### Missing Pages

- `src/foo.css` has no guide page → needs `docs/guide/foo.md`

### Incomplete Sections

- `docs/guide/bar.md`:
  - Missing "Using a custom variable" section
  - QuickReference missing rows for: `bar-gutter-stable-both`
  - No Example demos for modifier syntax
  - Stale reference to `bar-legacy-*` (removed from source)

### Sidebar Gaps

- `docs/guide/foo.md` exists but is not in VitePress sidebar config

### Pages Fully in Sync

- `docs/guide/baz.md` ✓

### Summary

- X pages fully in sync
- Y pages need updates (Z total gaps)
- N new pages needed
```

**Wait for user confirmation before proceeding to Phase 4.**

---

## Phase 4: Update/Create Documentation

### Creating a New Guide Page

Use this template. Replace placeholders with data extracted from Phase 1.

````markdown
---
title: { Title }
---

<!-- llm-context: {module-name} module — {brief technical description of what
the utilities do, key CSS techniques used, and value/modifier patterns}. -->

# {Title}

{One to two sentence intro explaining what this module does and why you would
use it.}

::: tip Import
Included in `@import 'tw-jib-css'`. To import individually:

```css
@import 'tw-jib-css/{import-path}';
```

:::

{If experimental, add a warning block:}

::: warning Browser Support
{Feature} is supported in {browsers}. All utilities are wrapped in
`@supports ({condition})` and will be silently ignored in unsupported browsers.
:::

## Quick Reference

<QuickReference :rows="[
  { class: '{utility-pattern}', styles: '{css-output}' },
  { class: '{utility-pattern}/{modifier}', styles: '{modified-css-output}' },
]" />

## Basic Usage

### {Primary use case}

{Explanatory sentence.}

<Example>
  <div class="{layout-classes}">
    <div class="{utility-classes} {sizing-classes}">
      {demo content with descriptive label}
    </div>
  </div>
</Example>

### {Secondary use case / opposite direction}

{Explanatory sentence.}

<Example>
  <div class="{layout-classes}">
    <div class="{utility-classes} {sizing-classes}">
      {demo content}
    </div>
  </div>
</Example>

## {Feature-specific sections}

{Colour Spaces, Scale, Gradient Direction, Interpolation Modes, Named Shapes,
etc. — whatever the utility warrants. Follow the pattern of existing pages
in the same category.}

## Aliases

{If the module has alias utilities:}

| Alias          | Equivalent         |
| -------------- | ------------------ |
| `{alias-name}` | `{canonical-name}` |

## Applying conditionally

### Hover and focus states

Prefix a {utility-name} utility with a state variant like `hover:*` to only
apply it in that state:

<Example>
  <div class="{base-classes} hover:{utility-class} transition-all duration-300 cursor-pointer">
    Hover to see the effect
  </div>
</Example>

## Using a custom value

Use bracket notation for one-off values:

<Example>
  <div class="{utility-name}-[{custom-value}]">
    {descriptive label}
  </div>
</Example>

## Using a custom variable

For CSS variables, use the typed bare-value syntax:

<Example>
  <div class="{utility-name}-({type}:--my-var)" style="--my-var: {value}">
    {descriptive label}
  </div>
</Example>

| Utility          | Type hint | Example                            |
| ---------------- | --------- | ---------------------------------- |
| `{utility-name}` | `{type}`  | `{utility-name}-({type}:--my-var)` |

## How It Works

{Technical explanation of the CSS technique — background clipping, relative
colour syntax, @property animation, etc. Include numbered steps for multi-layer
approaches.}
````

### Patching an Existing Page

When a page exists but is missing content:

1. Read the full page with `Read`
2. Identify the exact line range where the new section belongs
3. Use `Edit` to insert or replace content at the correct position
4. Preserve existing content that is still accurate
5. Follow the established style of the page — match heading levels,
   Example component patterns, code formatting

### QuickReference Row Construction

For each `@utility name-* { ... }` block:

1. **Class column**: Use the utility name with typed placeholders matching the
   `--value()` type:
   - `--value(--color-*, [color])` → `<color>` placeholder
   - `--value(integer, [number])` → `<amount>` or `<number>`
   - `--value('solid', 'dashed', ...)` → list each named value as its own row
   - `--value([angle])` → `<angle>` placeholder

2. **Styles column**: Show the user-visible CSS property and its value. For
   complex formulas, use abbreviated form (see `lightness.md` for the pattern).
   Omit internal pipeline variables — show the final CSS declaration only.

3. **Modifier rows**: For each modifier available (from `@theme inline` map or
   `--modifier()` literal list), add a row showing `utility-<value>/{modifier}`
   and its distinct CSS output.

4. **Keep it honest**: If the CSS formula is too complex to fit in a table cell,
   use an abbreviated form with a note. Never fabricate simplified CSS that
   doesn't match the actual output.

5. **Verify when in doubt**: Compile a test class using the test helper to check
   actual CSS output:
   ```bash
   pnpm exec tsx -e "
     import { compile } from './tests/css/helpers.ts';
     console.log(await compile('bg-lightness-20/oklch', { experimental: true }));
   "
   ```

### Example Component Conventions

When creating `<Example>` demos:

- Use Tailwind's built-in utilities for layout: `flex`, `grid`, `gap-4`,
  `p-6`, `rounded-xl`
- Use `size-24` or `h-24` for consistent demo sizing
- Use `bg-blue-500`, `bg-red-500`, `bg-gray-200` etc. as base colours
- Include descriptive `font-mono text-xs` labels inside demo elements
  that name the classes being demonstrated
- Use `<Example stretch>` for full-width demos (colour space grids, scale strips)
- Use `<Example>` (no stretch) for centred demos
- Keep each Example focused — one concept per block
- For hover demos, add `cursor-pointer` and `transition-all duration-300`

### Sidebar Registration

When creating a new page, add it to `docs/.vitepress/config.ts` in the
correct section:

- **Borders**: border-gradient, border-spin, border-style
- **Backgrounds**: comic, pixel, ripple
- **Color Transforms**: lightness, saturation, hue-rotate (each with nested
  sub-items for variant pages: bg, text, fill, stroke, outline, accent, border)
- **Supporting**: grid
- **Experimental**: corner, interpolate, picker, wcag, wcag-badge

Use the existing format:

```ts
{ text: 'Display Name', link: '/guide/slug' }
```

For nested groups:

```ts
{
  text: 'Category',
  collapsed: true,
  items: [
    { text: 'Background Lightness', link: '/guide/lightness' },
    { text: 'Text Lightness', link: '/guide/text-lightness' },
  ]
}
```

---

## Phase 5: Verification

After making changes, run these checks:

1. **CSS unit tests** — `pnpm test:css` to verify no regressions
2. **VitePress build** — `pnpm build:docs` to verify:
   - No broken internal links
   - No missing component imports
   - Valid Markdown structure
   - All Example components render without errors
3. **Visual spot-check** — If the dev server is running (`pnpm dev:docs`),
   open the updated pages in a browser and verify demos render correctly

Report any build errors and fix them before considering the sync complete.

---

## Important Conventions

- **British spelling** in prose: colour, behaviour, customise. CSS property
  names stay American (per the spec).
- **oklch is the default colour space** — always mention it first in examples
  and reference tables.
- **`<!-- llm-context: ... -->` comments** are visible to LLMs but hidden in
  VitePress. Keep them concise and technically accurate.
- **2-space indentation** in code examples.
- **Each guide page must be self-contained** — a user reading only that page
  should understand the utility without reading other pages first.
  Cross-reference for depth, not dependency.
- **`docs/examples/` pages are test fixtures**, not documentation. Never
  conflate them with `docs/guide/` pages.
- **Follow Tailwind docs quality**: Quick Reference for scanning, visual demos
  for understanding, conditional/custom sections for advanced usage.
- **Never fabricate CSS output** — if uncertain about what a utility compiles
  to, use the test helper to verify before documenting.
- **Report before writing** — always present the gap report and get user
  confirmation before creating or editing documentation files.
