# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    packages_markdown_core_src[packages-markdown-core-src] --> src[src]
    packages_markdown_core_src[packages-markdown-core-src] --> _[.]
    packages_markdown_core_src[packages-markdown-core-src] --> _[.]
    packages_markdown_core_src[packages-markdown-core-src] --> _[.]
    packages_markdown_core_src[packages-markdown-core-src] --> _[.]
    packages_markdown_core_src[packages-markdown-core-src] --> _[.]
    packages_markdown_core_src[packages-markdown-core-src] --> _[.]
    packages_markdown_core_src[packages-markdown-core-src] --> _[.]
    packages_markdown_core_src[packages-markdown-core-src] --> _[.]
    packages_markdown_core_src[packages-markdown-core-src] --> _[.]
    packages_markdown_core_src[packages-markdown-core-src] --> _[.]
    packages_markdown_core_src[packages-markdown-core-src] --> _[.]
    packages_markdown_core_src[packages-markdown-core-src] --> _[.]
    packages_markdown_core_src[packages-markdown-core-src] --> _[.]
    packages_markdown_core_src[packages-markdown-core-src] --> _openclaw[@openclaw]
    packages_markdown_core_src[packages-markdown-core-src] --> normalization_core[normalization-core]
    packages_markdown_core_src[packages-markdown-core-src] --> json5[json5]
    packages_markdown_core_src[packages-markdown-core-src] --> markdown_it[markdown-it]
    packages_markdown_core_src[packages-markdown-core-src] --> markdown_it_cjk_friendly[markdown-it-cjk-friendly]
    packages_markdown_core_src[packages-markdown-core-src] --> common[common]
    packages_markdown_core_src[packages-markdown-core-src] --> vitest[vitest]
    packages_markdown_core_src[packages-markdown-core-src] --> yaml[yaml]
```

## External Dependencies

Dependencies from other modules:

- `../../terminal-core/src/ansi.js`
- `./assistant-transcript-headers.js`
- `./assistant-transcript.js`
- `./chunk-text.js`
- `./fences.js`
- `./frontmatter.js`
- `./html-tags.js`
- `./ir-annotations.js`
- `./ir-source-spacing.js`
- `./ir-spans.js`
- `./ir.js`
- `./render-aware-chunking.js`
- `./render.js`
- `./tables.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/utf16-slice`
- `json5`
- `markdown-it`
- `markdown-it-cjk-friendly`
- `markdown-it/lib/common/html_re.mjs`
- `vitest`
- `yaml`
