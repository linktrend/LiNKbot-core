# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_parallel[extensions-parallel] --> src[src]
    extensions_parallel[extensions-parallel] --> src[src]
    extensions_parallel[extensions-parallel] --> src[src]
    extensions_parallel[extensions-parallel] --> src[src]
    extensions_parallel[extensions-parallel] --> plugin_sdk[plugin-sdk]
    extensions_parallel[extensions-parallel] --> plugin_sdk[plugin-sdk]
    extensions_parallel[extensions-parallel] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./src/parallel-free-web-search-provider.js`
- `./src/parallel-free-web-search-provider.shared.js`
- `./src/parallel-web-search-provider.js`
- `./src/parallel-web-search-provider.shared.js`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/test-live`
- `vitest`
