# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> _[.]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> _[.]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> _[.]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> _[.]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> _[.]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> _anthropic_ai[@anthropic-ai]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> google_auth_library[google-auth-library]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> node_events[node:events]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> node_fs[node:fs]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> node_http[node:http]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> node_os[node:os]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> node_path[node:path]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> plugin_sdk[plugin-sdk]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> plugin_sdk[plugin-sdk]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> plugin_sdk[plugin-sdk]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> plugin_sdk[plugin-sdk]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> plugin_sdk[plugin-sdk]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> plugin_sdk[plugin-sdk]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> plugin_sdk[plugin-sdk]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> plugin_sdk[plugin-sdk]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> plugin_sdk[plugin-sdk]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> undici[undici]
    extensions_anthropic_vertex[extensions-anthropic-vertex] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./api.js`
- `./index.js`
- `./provider-catalog.js`
- `./provider-policy-api.js`
- `./region.js`
- `@anthropic-ai/vertex-sdk`
- `google-auth-library`
- `node:events`
- `node:fs`
- `node:http`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/lazy-runtime`
- `openclaw/plugin-sdk/llm`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-catalog-shared`
- `openclaw/plugin-sdk/provider-http`
- `openclaw/plugin-sdk/provider-model-shared`
- `openclaw/plugin-sdk/secret-file-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `undici`
- `vitest`
