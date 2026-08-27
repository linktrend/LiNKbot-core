# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_vllm[extensions-vllm] --> _[.]
    extensions_vllm[extensions-vllm] --> _[.]
    extensions_vllm[extensions-vllm] --> _[.]
    extensions_vllm[extensions-vllm] --> _[.]
    extensions_vllm[extensions-vllm] --> _[.]
    extensions_vllm[extensions-vllm] --> _[.]
    extensions_vllm[extensions-vllm] --> node_url[node:url]
    extensions_vllm[extensions-vllm] --> plugin_sdk[plugin-sdk]
    extensions_vllm[extensions-vllm] --> plugin_sdk[plugin-sdk]
    extensions_vllm[extensions-vllm] --> plugin_sdk[plugin-sdk]
    extensions_vllm[extensions-vllm] --> plugin_sdk[plugin-sdk]
    extensions_vllm[extensions-vllm] --> plugin_sdk[plugin-sdk]
    extensions_vllm[extensions-vllm] --> plugin_sdk[plugin-sdk]
    extensions_vllm[extensions-vllm] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./api.js`
- `./defaults.js`
- `./index.js`
- `./provider-policy-api.js`
- `./stream.js`
- `./thinking-policy.js`
- `node:url`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-model-shared`
- `openclaw/plugin-sdk/provider-setup`
- `openclaw/plugin-sdk/provider-stream-shared`
- `openclaw/plugin-sdk/provider-test-contracts`
- `vitest`
