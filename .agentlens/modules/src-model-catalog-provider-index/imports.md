# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_model_catalog_provider_index[src-model-catalog-provider-index] --> src[src]
    src_model_catalog_provider_index[src-model-catalog-provider-index] --> src[src]
    src_model_catalog_provider_index[src-model-catalog-provider-index] --> src[src]
    src_model_catalog_provider_index[src-model-catalog-provider-index] --> infra[infra]
    src_model_catalog_provider_index[src-model-catalog-provider-index] --> infra[infra]
    src_model_catalog_provider_index[src-model-catalog-provider-index] --> infra[infra]
    src_model_catalog_provider_index[src-model-catalog-provider-index] --> __[..]
    src_model_catalog_provider_index[src-model-catalog-provider-index] --> _[.]
    src_model_catalog_provider_index[src-model-catalog-provider-index] --> _[.]
    src_model_catalog_provider_index[src-model-catalog-provider-index] --> _[.]
    src_model_catalog_provider_index[src-model-catalog-provider-index] --> model_catalog_core[model-catalog-core]
    src_model_catalog_provider_index[src-model-catalog-provider-index] --> model_catalog_core[model-catalog-core]
    src_model_catalog_provider_index[src-model-catalog-provider-index] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/normalization-core/src/number-coercion.js`
- `../../../packages/normalization-core/src/string-coerce.js`
- `../../../packages/normalization-core/src/string-normalization.js`
- `../../infra/clawhub-spec.js`
- `../../infra/npm-registry-spec.js`
- `../../infra/prototype-keys.js`
- `../../utils.js`
- `./index.js`
- `./normalize.js`
- `./openclaw-provider-index.js`
- `@openclaw/model-catalog-core/model-catalog-normalize`
- `@openclaw/model-catalog-core/model-catalog-refs`
- `vitest`
