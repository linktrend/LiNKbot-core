# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_channels_message_access[src-channels-message-access] --> __[..]
    src_channels_message_access[src-channels-message-access] --> __[..]
    src_channels_message_access[src-channels-message-access] --> __[..]
    src_channels_message_access[src-channels-message-access] --> _[.]
    src_channels_message_access[src-channels-message-access] --> _[.]
    src_channels_message_access[src-channels-message-access] --> _[.]
    src_channels_message_access[src-channels-message-access] --> _[.]
    src_channels_message_access[src-channels-message-access] --> _[.]
    src_channels_message_access[src-channels-message-access] --> _[.]
    src_channels_message_access[src-channels-message-access] --> _[.]
    src_channels_message_access[src-channels-message-access] --> _[.]
    src_channels_message_access[src-channels-message-access] --> _openclaw[@openclaw]
    src_channels_message_access[src-channels-message-access] --> normalization_core[normalization-core]
    src_channels_message_access[src-channels-message-access] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../allow-from.js`
- `../command-gating.js`
- `../mention-gating.js`
- `./allowlist.js`
- `./decision.js`
- `./effective-allow-from.js`
- `./runtime-access-groups.js`
- `./runtime-identity.js`
- `./sender-gates.js`
- `./state.js`
- `./store-allow-from.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/string-normalization`
- `vitest`
