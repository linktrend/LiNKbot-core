# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_llama_cpp[extensions-llama-cpp] --> _[.]
    extensions_llama_cpp[extensions-llama-cpp] --> src[src]
    extensions_llama_cpp[extensions-llama-cpp] --> src[src]
    extensions_llama_cpp[extensions-llama-cpp] --> src[src]
    extensions_llama_cpp[extensions-llama-cpp] --> src[src]
    extensions_llama_cpp[extensions-llama-cpp] --> _openclaw[@openclaw]
    extensions_llama_cpp[extensions-llama-cpp] --> node_os[node:os]
    extensions_llama_cpp[extensions-llama-cpp] --> node_path[node:path]
    extensions_llama_cpp[extensions-llama-cpp] --> plugin_sdk[plugin-sdk]
    extensions_llama_cpp[extensions-llama-cpp] --> plugin_sdk[plugin-sdk]
    extensions_llama_cpp[extensions-llama-cpp] --> plugin_sdk[plugin-sdk]
    extensions_llama_cpp[extensions-llama-cpp] --> plugin_sdk[plugin-sdk]
    extensions_llama_cpp[extensions-llama-cpp] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./index.js`
- `./src/defaults.js`
- `./src/embedding-provider.js`
- `./src/inference-provider.js`
- `./src/setup.js`
- `@openclaw/normalization-core`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-api`
- `openclaw/plugin-sdk/plugin-test-contracts`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `vitest`
