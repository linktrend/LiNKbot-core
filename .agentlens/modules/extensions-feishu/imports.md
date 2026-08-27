# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_feishu[extensions-feishu] --> __[..]
    extensions_feishu[extensions-feishu] --> _[.]
    extensions_feishu[extensions-feishu] --> _[.]
    extensions_feishu[extensions-feishu] --> node_crypto[node:crypto]
    extensions_feishu[extensions-feishu] --> plugin_sdk[plugin-sdk]
    extensions_feishu[extensions-feishu] --> plugin_sdk[plugin-sdk]
    extensions_feishu[extensions-feishu] --> plugin_sdk[plugin-sdk]
    extensions_feishu[extensions-feishu] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../runtime.js`
- `./doctor-contract-api.js`
- `./subagent-hooks-api.js`
- `node:crypto`
- `openclaw/plugin-sdk/channel-entry-contract`
- `openclaw/plugin-sdk/channel-test-helpers`
- `openclaw/plugin-sdk/lazy-runtime`
- `vitest`
