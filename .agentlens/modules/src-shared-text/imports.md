# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_shared_text[src-shared-text] --> src[src]
    src_shared_text[src-shared-text] --> src[src]
    src_shared_text[src-shared-text] --> src[src]
    src_shared_text[src-shared-text] --> _[.]
    src_shared_text[src-shared-text] --> _[.]
    src_shared_text[src-shared-text] --> _[.]
    src_shared_text[src-shared-text] --> _[.]
    src_shared_text[src-shared-text] --> _[.]
    src_shared_text[src-shared-text] --> _[.]
    src_shared_text[src-shared-text] --> _[.]
    src_shared_text[src-shared-text] --> _[.]
    src_shared_text[src-shared-text] --> _openclaw[@openclaw]
    src_shared_text[src-shared-text] --> normalization_core[normalization-core]
    src_shared_text[src-shared-text] --> normalization_core[normalization-core]
    src_shared_text[src-shared-text] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/markdown-core/src/assistant-transcript-headers.js`
- `../../../packages/markdown-core/src/ir.js`
- `../../../packages/tool-call-repair/src/index.js`
- `./assistant-visible-text.js`
- `./citation-control-markers.js`
- `./code-regions.js`
- `./final-tags.js`
- `./join-segments.js`
- `./model-special-tokens.js`
- `./reasoning-tags.js`
- `./tool-call-shaped-text.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `vitest`
