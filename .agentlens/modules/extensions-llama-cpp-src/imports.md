# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_llama_cpp_src[extensions-llama-cpp-src] --> _[.]
    extensions_llama_cpp_src[extensions-llama-cpp-src] --> _[.]
    extensions_llama_cpp_src[extensions-llama-cpp-src] --> _[.]
    extensions_llama_cpp_src[extensions-llama-cpp-src] --> _[.]
    extensions_llama_cpp_src[extensions-llama-cpp-src] --> node_crypto[node:crypto]
    extensions_llama_cpp_src[extensions-llama-cpp-src] --> node_fs[node:fs]
    extensions_llama_cpp_src[extensions-llama-cpp-src] --> node_module[node:module]
    extensions_llama_cpp_src[extensions-llama-cpp-src] --> node_os[node:os]
    extensions_llama_cpp_src[extensions-llama-cpp-src] --> node_path[node:path]
    extensions_llama_cpp_src[extensions-llama-cpp-src] --> node_url[node:url]
    extensions_llama_cpp_src[extensions-llama-cpp-src] --> plugin_sdk[plugin-sdk]
    extensions_llama_cpp_src[extensions-llama-cpp-src] --> plugin_sdk[plugin-sdk]
    extensions_llama_cpp_src[extensions-llama-cpp-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./defaults.js`
- `./inference-provider.js`
- `./node-llama.runtime.js`
- `./setup.js`
- `node:crypto`
- `node:fs/promises`
- `node:module`
- `node:os`
- `node:path`
- `node:url`
- `openclaw/plugin-sdk/llm`
- `openclaw/plugin-sdk/memory-core-host-engine-embeddings`
- `vitest`
