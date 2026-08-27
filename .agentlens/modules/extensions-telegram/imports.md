# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_telegram[extensions-telegram] --> _[.]
    extensions_telegram[extensions-telegram] --> _[.]
    extensions_telegram[extensions-telegram] --> _[.]
    extensions_telegram[extensions-telegram] --> _[.]
    extensions_telegram[extensions-telegram] --> _[.]
    extensions_telegram[extensions-telegram] --> src[src]
    extensions_telegram[extensions-telegram] --> miniapp[miniapp]
    extensions_telegram[extensions-telegram] --> miniapp[miniapp]
    extensions_telegram[extensions-telegram] --> plugin_sdk[plugin-sdk]
    extensions_telegram[extensions-telegram] --> plugin_sdk[plugin-sdk]
    extensions_telegram[extensions-telegram] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./api.js`
- `./channel-config-api.js`
- `./index.js`
- `./miniapp-api.js`
- `./setup-entry.js`
- `./src/account-inspect.js`
- `./src/miniapp/command.js`
- `./src/miniapp/routes.js`
- `openclaw/plugin-sdk/channel-entry-contract`
- `openclaw/plugin-sdk/channel-test-helpers`
- `vitest`
