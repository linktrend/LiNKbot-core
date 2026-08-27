# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_voyage[extensions-voyage] --> _[.]
    extensions_voyage[extensions-voyage] --> _[.]
    extensions_voyage[extensions-voyage] --> _[.]
    extensions_voyage[extensions-voyage] --> _[.]
    extensions_voyage[extensions-voyage] --> plugin_sdk[plugin-sdk]
    extensions_voyage[extensions-voyage] --> plugin_sdk[plugin-sdk]
    extensions_voyage[extensions-voyage] --> plugin_sdk[plugin-sdk]
    extensions_voyage[extensions-voyage] --> plugin_sdk[plugin-sdk]
    extensions_voyage[extensions-voyage] --> plugin_sdk[plugin-sdk]
    extensions_voyage[extensions-voyage] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./embedding-batch.js`
- `./embedding-provider.js`
- `./memory-embedding-adapter.js`
- `./test-support.js`
- `openclaw/plugin-sdk/memory-core-host-engine-embeddings`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/provider-http`
- `openclaw/plugin-sdk/response-limit-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
