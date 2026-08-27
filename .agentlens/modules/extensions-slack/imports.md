# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_slack[extensions-slack] --> _[.]
    extensions_slack[extensions-slack] --> _[.]
    extensions_slack[extensions-slack] --> _[.]
    extensions_slack[extensions-slack] --> src[src]
    extensions_slack[extensions-slack] --> plugin_sdk[plugin-sdk]
    extensions_slack[extensions-slack] --> plugin_sdk[plugin-sdk]
    extensions_slack[extensions-slack] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./http-routes-api.js`
- `./index.js`
- `./setup-entry.js`
- `./src/account-inspect.js`
- `openclaw/plugin-sdk/channel-entry-contract`
- `openclaw/plugin-sdk/channel-test-helpers`
- `vitest`
