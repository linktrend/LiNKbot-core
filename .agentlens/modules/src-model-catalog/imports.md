# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_model_catalog[src-model-catalog] --> src[src]
    src_model_catalog[src-model-catalog] --> src[src]
    src_model_catalog[src-model-catalog] --> _[.]
    src_model_catalog[src-model-catalog] --> model_catalog_core[model-catalog-core]
    src_model_catalog[src-model-catalog] --> model_catalog_core[model-catalog-core]
    src_model_catalog[src-model-catalog] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../packages/normalization-core/src/string-coerce.js`
- `../../packages/normalization-core/src/string-normalization.js`
- `./index.js`
- `@openclaw/model-catalog-core/model-catalog-normalize`
- `@openclaw/model-catalog-core/model-catalog-refs`
- `vitest`
