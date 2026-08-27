# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_qqbot_src_engine_group[extensions-qqbot-src-engine-group] --> utils[utils]
    extensions_qqbot_src_engine_group[extensions-qqbot-src-engine-group] --> utils[utils]
    extensions_qqbot_src_engine_group[extensions-qqbot-src-engine-group] --> utils[utils]
    extensions_qqbot_src_engine_group[extensions-qqbot-src-engine-group] --> _[.]
    extensions_qqbot_src_engine_group[extensions-qqbot-src-engine-group] --> _[.]
    extensions_qqbot_src_engine_group[extensions-qqbot-src-engine-group] --> _[.]
    extensions_qqbot_src_engine_group[extensions-qqbot-src-engine-group] --> _[.]
    extensions_qqbot_src_engine_group[extensions-qqbot-src-engine-group] --> plugin_sdk[plugin-sdk]
    extensions_qqbot_src_engine_group[extensions-qqbot-src-engine-group] --> plugin_sdk[plugin-sdk]
    extensions_qqbot_src_engine_group[extensions-qqbot-src-engine-group] --> plugin_sdk[plugin-sdk]
    extensions_qqbot_src_engine_group[extensions-qqbot-src-engine-group] --> plugin_sdk[plugin-sdk]
    extensions_qqbot_src_engine_group[extensions-qqbot-src-engine-group] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../utils/attachment-tags.js`
- `../utils/log.js`
- `../utils/text-parsing.js`
- `./activation.js`
- `./history.js`
- `./mention.js`
- `./message-gating.js`
- `openclaw/plugin-sdk/channel-mention-gating`
- `openclaw/plugin-sdk/group-activation`
- `openclaw/plugin-sdk/security-runtime`
- `openclaw/plugin-sdk/session-store-runtime`
- `vitest`
