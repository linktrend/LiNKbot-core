# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_irc[extensions-irc] --> _[.]
    extensions_irc[extensions-irc] --> _[.]
    extensions_irc[extensions-irc] --> _[.]
    extensions_irc[extensions-irc] --> _openclaw[@openclaw]
    extensions_irc[extensions-irc] --> plugin_sdk[plugin-sdk]
    extensions_irc[extensions-irc] --> plugin_sdk[plugin-sdk]
    extensions_irc[extensions-irc] --> plugin_sdk[plugin-sdk]
    extensions_irc[extensions-irc] --> plugin_sdk[plugin-sdk]
    extensions_irc[extensions-irc] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./doctor-contract-api.js`
- `./index.js`
- `./setup-entry.js`
- `@openclaw/normalization-core`
- `openclaw/plugin-sdk/channel-entry-contract`
- `openclaw/plugin-sdk/channel-test-helpers`
- `openclaw/plugin-sdk/plugin-test-contracts`
- `openclaw/plugin-sdk/runtime-doctor`
- `vitest`
