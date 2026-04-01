/**
 * build-llm-docs.ts
 *
 * Generates LLM-optimised documentation files:
 * - docs/public/llms.txt — structured index following the llms.txt convention
 * - docs/public/llms-full.txt — all guide pages concatenated
 *
 * Processing steps:
 * 1. Read all .md files from docs/guide/
 * 2. Strip Vue SFC components (<script>, <template> blocks within MD)
 * 3. Convert HTML comments (<!-- llm-context: ... -->) to visible text
 * 4. Clean frontmatter
 * 5. Concatenate into llms-full.txt
 * 6. Generate llms.txt index
 */

// TODO: Implement when guide pages exist
console.log('build-llm-docs: no guide pages to process yet');
