# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_qqbot_src_bridge_tools[extensions-qqbot-src-bridge-tools] --> tools[tools]
    extensions_qqbot_src_bridge_tools[extensions-qqbot-src-bridge-tools] --> tools[tools]
    extensions_qqbot_src_bridge_tools[extensions-qqbot-src-bridge-tools] --> utils[utils]
    extensions_qqbot_src_bridge_tools[extensions-qqbot-src-bridge-tools] --> __[..]
    extensions_qqbot_src_bridge_tools[extensions-qqbot-src-bridge-tools] --> _[.]
    extensions_qqbot_src_bridge_tools[extensions-qqbot-src-bridge-tools] --> _[.]
    extensions_qqbot_src_bridge_tools[extensions-qqbot-src-bridge-tools] --> plugin_sdk[plugin-sdk]
    extensions_qqbot_src_bridge_tools[extensions-qqbot-src-bridge-tools] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../engine/tools/channel-api.js`
- `../../engine/tools/remind-logic.js`
- `../../engine/utils/request-context.js`
- `../config.js`
- `./channel.js`
- `./remind.js`
- `openclaw/plugin-sdk/agent-harness-runtime`
- `vitest`
