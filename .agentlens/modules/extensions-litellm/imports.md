# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_litellm[extensions-litellm] --> _[.]
    extensions_litellm[extensions-litellm] --> _[.]
    extensions_litellm[extensions-litellm] --> _[.]
    extensions_litellm[extensions-litellm] --> _[.]
    extensions_litellm[extensions-litellm] --> node_fs[node:fs]
    extensions_litellm[extensions-litellm] --> node_net[node:net]
    extensions_litellm[extensions-litellm] --> node_os[node:os]
    extensions_litellm[extensions-litellm] --> node_path[node:path]
    extensions_litellm[extensions-litellm] --> plugin_sdk[plugin-sdk]
    extensions_litellm[extensions-litellm] --> plugin_sdk[plugin-sdk]
    extensions_litellm[extensions-litellm] --> plugin_sdk[plugin-sdk]
    extensions_litellm[extensions-litellm] --> plugin_sdk[plugin-sdk]
    extensions_litellm[extensions-litellm] --> plugin_sdk[plugin-sdk]
    extensions_litellm[extensions-litellm] --> plugin_sdk[plugin-sdk]
    extensions_litellm[extensions-litellm] --> plugin_sdk[plugin-sdk]
    extensions_litellm[extensions-litellm] --> plugin_sdk[plugin-sdk]
    extensions_litellm[extensions-litellm] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./image-generation-provider.js`
- `./index.js`
- `./onboard.js`
- `./provider-catalog.js`
- `node:fs`
- `node:net`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/image-generation`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-auth`
- `openclaw/plugin-sdk/provider-catalog-shared`
- `openclaw/plugin-sdk/provider-onboard`
- `openclaw/plugin-sdk/provider-test-contracts`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
