# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_telegram_src_miniapp[extensions-telegram-src-miniapp] --> __[..]
    extensions_telegram_src_miniapp[extensions-telegram-src-miniapp] --> __[..]
    extensions_telegram_src_miniapp[extensions-telegram-src-miniapp] --> __[..]
    extensions_telegram_src_miniapp[extensions-telegram-src-miniapp] --> _[.]
    extensions_telegram_src_miniapp[extensions-telegram-src-miniapp] --> _[.]
    extensions_telegram_src_miniapp[extensions-telegram-src-miniapp] --> _[.]
    extensions_telegram_src_miniapp[extensions-telegram-src-miniapp] --> _[.]
    extensions_telegram_src_miniapp[extensions-telegram-src-miniapp] --> _openclaw[@openclaw]
    extensions_telegram_src_miniapp[extensions-telegram-src-miniapp] --> node_crypto[node:crypto]
    extensions_telegram_src_miniapp[extensions-telegram-src-miniapp] --> node_stream[node:stream]
    extensions_telegram_src_miniapp[extensions-telegram-src-miniapp] --> plugin_sdk[plugin-sdk]
    extensions_telegram_src_miniapp[extensions-telegram-src-miniapp] --> plugin_sdk[plugin-sdk]
    extensions_telegram_src_miniapp[extensions-telegram-src-miniapp] --> plugin_sdk[plugin-sdk]
    extensions_telegram_src_miniapp[extensions-telegram-src-miniapp] --> plugin_sdk[plugin-sdk]
    extensions_telegram_src_miniapp[extensions-telegram-src-miniapp] --> plugin_sdk[plugin-sdk]
    extensions_telegram_src_miniapp[extensions-telegram-src-miniapp] --> plugin_sdk[plugin-sdk]
    extensions_telegram_src_miniapp[extensions-telegram-src-miniapp] --> plugin_sdk[plugin-sdk]
    extensions_telegram_src_miniapp[extensions-telegram-src-miniapp] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../access-groups.js`
- `../accounts.js`
- `../allow-from.js`
- `./init-data.js`
- `./owner.js`
- `./page.js`
- `./url.js`
- `@openclaw/normalization-core`
- `node:crypto`
- `node:stream`
- `openclaw/plugin-sdk/account-id`
- `openclaw/plugin-sdk/core`
- `openclaw/plugin-sdk/device-bootstrap`
- `openclaw/plugin-sdk/plugin-test-api`
- `openclaw/plugin-sdk/process-runtime`
- `openclaw/plugin-sdk/security-runtime`
- `openclaw/plugin-sdk/text-utility-runtime`
- `vitest`
