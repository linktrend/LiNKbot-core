# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_twitch[extensions-twitch] --> _[.]
    extensions_twitch[extensions-twitch] --> _[.]
    extensions_twitch[extensions-twitch] --> _[.]
    extensions_twitch[extensions-twitch] --> node_crypto[node:crypto]
    extensions_twitch[extensions-twitch] --> plugin_sdk[plugin-sdk]
    extensions_twitch[extensions-twitch] --> plugin_sdk[plugin-sdk]
    extensions_twitch[extensions-twitch] --> plugin_sdk[plugin-sdk]
    extensions_twitch[extensions-twitch] --> plugin_sdk[plugin-sdk]
    extensions_twitch[extensions-twitch] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./index.js`
- `./markdown.js`
- `./setup-entry.js`
- `node:crypto`
- `openclaw/plugin-sdk/channel-entry-contract`
- `openclaw/plugin-sdk/channel-test-helpers`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/text-chunking`
- `vitest`
