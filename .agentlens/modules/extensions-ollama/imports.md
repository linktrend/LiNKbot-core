# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_ollama[extensions-ollama] --> _[.]
    extensions_ollama[extensions-ollama] --> _[.]
    extensions_ollama[extensions-ollama] --> _[.]
    extensions_ollama[extensions-ollama] --> _[.]
    extensions_ollama[extensions-ollama] --> _[.]
    extensions_ollama[extensions-ollama] --> _[.]
    extensions_ollama[extensions-ollama] --> src[src]
    extensions_ollama[extensions-ollama] --> src[src]
    extensions_ollama[extensions-ollama] --> src[src]
    extensions_ollama[extensions-ollama] --> src[src]
    extensions_ollama[extensions-ollama] --> src[src]
    extensions_ollama[extensions-ollama] --> src[src]
    extensions_ollama[extensions-ollama] --> src[src]
    extensions_ollama[extensions-ollama] --> src[src]
    extensions_ollama[extensions-ollama] --> src[src]
    extensions_ollama[extensions-ollama] --> src[src]
    extensions_ollama[extensions-ollama] --> src[src]
    extensions_ollama[extensions-ollama] --> model_catalog_core[model-catalog-core]
    extensions_ollama[extensions-ollama] --> _openclaw[@openclaw]
    extensions_ollama[extensions-ollama] --> node_child_process[node:child_process]
    extensions_ollama[extensions-ollama] --> node_fs[node:fs]
    extensions_ollama[extensions-ollama] --> node_fs[node:fs]
    extensions_ollama[extensions-ollama] --> node_os[node:os]
    extensions_ollama[extensions-ollama] --> node_path[node:path]
    extensions_ollama[extensions-ollama] --> plugin_sdk[plugin-sdk]
    extensions_ollama[extensions-ollama] --> plugin_sdk[plugin-sdk]
    extensions_ollama[extensions-ollama] --> plugin_sdk[plugin-sdk]
    extensions_ollama[extensions-ollama] --> plugin_sdk[plugin-sdk]
    extensions_ollama[extensions-ollama] --> plugin_sdk[plugin-sdk]
    extensions_ollama[extensions-ollama] --> plugin_sdk[plugin-sdk]
    extensions_ollama[extensions-ollama] --> plugin_sdk[plugin-sdk]
    extensions_ollama[extensions-ollama] --> plugin_sdk[plugin-sdk]
    extensions_ollama[extensions-ollama] --> plugin_sdk[plugin-sdk]
    extensions_ollama[extensions-ollama] --> plugin_sdk[plugin-sdk]
    extensions_ollama[extensions-ollama] --> plugin_sdk[plugin-sdk]
    extensions_ollama[extensions-ollama] --> plugin_sdk[plugin-sdk]
    extensions_ollama[extensions-ollama] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./api.js`
- `./doctor-contract-api.js`
- `./index.js`
- `./kimi-inline-reasoning.js`
- `./provider-discovery.js`
- `./provider-policy-api.js`
- `./src/defaults.js`
- `./src/discovery-shared.js`
- `./src/embedding-provider.js`
- `./src/media-understanding-provider.js`
- `./src/memory-embedding-adapter.js`
- `./src/node-inference.js`
- `./src/provider-base-url.js`
- `./src/provider-models.js`
- `./src/stream.js`
- `./src/web-search-provider.js`
- `./src/wsl2-crash-loop-check.js`
- `@openclaw/model-catalog-core/configured-model-refs`
- `@openclaw/normalization-core`
- `node:child_process`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/media-understanding`
- `openclaw/plugin-sdk/plugin-config-runtime`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-api`
- `openclaw/plugin-sdk/provider-auth`
- `openclaw/plugin-sdk/provider-auth-api-key`
- `openclaw/plugin-sdk/provider-catalog-shared`
- `openclaw/plugin-sdk/provider-model-shared`
- `openclaw/plugin-sdk/provider-web-search-contract`
- `openclaw/plugin-sdk/secret-input-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/test-env`
- `vitest`
