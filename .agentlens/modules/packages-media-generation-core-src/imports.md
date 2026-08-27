# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    packages_media_generation_core_src[packages-media-generation-core-src] --> _[.]
    packages_media_generation_core_src[packages-media-generation-core-src] --> _[.]
    packages_media_generation_core_src[packages-media-generation-core-src] --> _[.]
    packages_media_generation_core_src[packages-media-generation-core-src] --> _[.]
    packages_media_generation_core_src[packages-media-generation-core-src] --> model_catalog_core[model-catalog-core]
    packages_media_generation_core_src[packages-media-generation-core-src] --> normalization_core[normalization-core]
    packages_media_generation_core_src[packages-media-generation-core-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./capability-model-ref.js`
- `./catalog.js`
- `./model-ref.js`
- `./string.js`
- `@openclaw/model-catalog-core/model-catalog-refs`
- `@openclaw/normalization-core/string-coerce`
- `vitest`
