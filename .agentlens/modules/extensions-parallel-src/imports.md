# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_parallel_src[extensions-parallel-src] --> test_support[test-support]
    extensions_parallel_src[extensions-parallel-src] --> __[..]
    extensions_parallel_src[extensions-parallel-src] --> __[..]
    extensions_parallel_src[extensions-parallel-src] --> _[.]
    extensions_parallel_src[extensions-parallel-src] --> _[.]
    extensions_parallel_src[extensions-parallel-src] --> _[.]
    extensions_parallel_src[extensions-parallel-src] --> _[.]
    extensions_parallel_src[extensions-parallel-src] --> _[.]
    extensions_parallel_src[extensions-parallel-src] --> _[.]
    extensions_parallel_src[extensions-parallel-src] --> _openclaw[@openclaw]
    extensions_parallel_src[extensions-parallel-src] --> node_crypto[node:crypto]
    extensions_parallel_src[extensions-parallel-src] --> node_module[node:module]
    extensions_parallel_src[extensions-parallel-src] --> plugin_sdk[plugin-sdk]
    extensions_parallel_src[extensions-parallel-src] --> plugin_sdk[plugin-sdk]
    extensions_parallel_src[extensions-parallel-src] --> plugin_sdk[plugin-sdk]
    extensions_parallel_src[extensions-parallel-src] --> plugin_sdk[plugin-sdk]
    extensions_parallel_src[extensions-parallel-src] --> plugin_sdk[plugin-sdk]
    extensions_parallel_src[extensions-parallel-src] --> plugin_sdk[plugin-sdk]
    extensions_parallel_src[extensions-parallel-src] --> plugin_sdk[plugin-sdk]
    extensions_parallel_src[extensions-parallel-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../test-support/streaming-error-response.js`
- `../test-api.js`
- `../web-search-contract-api.js`
- `./parallel-free-web-search-provider.js`
- `./parallel-free-web-search-provider.shared.js`
- `./parallel-mcp-search.runtime.js`
- `./parallel-search-normalize.js`
- `./parallel-web-search-provider.js`
- `./parallel-web-search-provider.shared.js`
- `@openclaw/normalization-core`
- `node:crypto`
- `node:module`
- `openclaw/plugin-sdk/extension-shared`
- `openclaw/plugin-sdk/lazy-runtime`
- `openclaw/plugin-sdk/provider-http`
- `openclaw/plugin-sdk/provider-web-search`
- `openclaw/plugin-sdk/provider-web-search-contract`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/text-utility-runtime`
- `vitest`
