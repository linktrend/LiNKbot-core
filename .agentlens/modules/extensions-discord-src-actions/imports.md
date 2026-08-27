# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_discord_src_actions[extensions-discord-src-actions] --> __[..]
    extensions_discord_src_actions[extensions-discord-src-actions] --> __[..]
    extensions_discord_src_actions[extensions-discord-src-actions] --> __[..]
    extensions_discord_src_actions[extensions-discord-src-actions] --> __[..]
    extensions_discord_src_actions[extensions-discord-src-actions] --> __[..]
    extensions_discord_src_actions[extensions-discord-src-actions] --> monitor[monitor]
    extensions_discord_src_actions[extensions-discord-src-actions] --> monitor[monitor]
    extensions_discord_src_actions[extensions-discord-src-actions] --> monitor[monitor]
    extensions_discord_src_actions[extensions-discord-src-actions] --> __[..]
    extensions_discord_src_actions[extensions-discord-src-actions] --> __[..]
    extensions_discord_src_actions[extensions-discord-src-actions] --> __[..]
    extensions_discord_src_actions[extensions-discord-src-actions] --> __[..]
    extensions_discord_src_actions[extensions-discord-src-actions] --> __[..]
    extensions_discord_src_actions[extensions-discord-src-actions] --> __[..]
    extensions_discord_src_actions[extensions-discord-src-actions] --> __[..]
    extensions_discord_src_actions[extensions-discord-src-actions] --> __[..]
    extensions_discord_src_actions[extensions-discord-src-actions] --> __[..]
    extensions_discord_src_actions[extensions-discord-src-actions] --> test_support[test-support]
    extensions_discord_src_actions[extensions-discord-src-actions] --> __[..]
    extensions_discord_src_actions[extensions-discord-src-actions] --> _[.]
    extensions_discord_src_actions[extensions-discord-src-actions] --> _[.]
    extensions_discord_src_actions[extensions-discord-src-actions] --> _[.]
    extensions_discord_src_actions[extensions-discord-src-actions] --> _[.]
    extensions_discord_src_actions[extensions-discord-src-actions] --> _[.]
    extensions_discord_src_actions[extensions-discord-src-actions] --> _[.]
    extensions_discord_src_actions[extensions-discord-src-actions] --> _[.]
    extensions_discord_src_actions[extensions-discord-src-actions] --> _[.]
    extensions_discord_src_actions[extensions-discord-src-actions] --> _[.]
    extensions_discord_src_actions[extensions-discord-src-actions] --> _[.]
    extensions_discord_src_actions[extensions-discord-src-actions] --> _[.]
    extensions_discord_src_actions[extensions-discord-src-actions] --> _[.]
    extensions_discord_src_actions[extensions-discord-src-actions] --> _[.]
    extensions_discord_src_actions[extensions-discord-src-actions] --> _[.]
    extensions_discord_src_actions[extensions-discord-src-actions] --> _openclaw[@openclaw]
    extensions_discord_src_actions[extensions-discord-src-actions] --> discord_api_types[discord-api-types]
    extensions_discord_src_actions[extensions-discord-src-actions] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_actions[extensions-discord-src-actions] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_actions[extensions-discord-src-actions] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_actions[extensions-discord-src-actions] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_actions[extensions-discord-src-actions] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_actions[extensions-discord-src-actions] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_actions[extensions-discord-src-actions] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_actions[extensions-discord-src-actions] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_actions[extensions-discord-src-actions] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../action-runtime-api.js`
- `../accounts.js`
- `../client.js`
- `../components.js`
- `../inbound-event-delivery.js`
- `../monitor/allow-list.js`
- `../monitor/gateway-registry.js`
- `../monitor/presence-cache.js`
- `../outbound-components.js`
- `../reply-reference.js`
- `../runtime-api.js`
- `../send.components.js`
- `../send.js`
- `../send.permissions.js`
- `../send.shared.js`
- `../shared-interactive.js`
- `../targets.js`
- `../test-support/config.js`
- `../trusted-requester-actions.js`
- `./handle-action.guild-admin.js`
- `./runtime-deps.js`
- `./runtime.guild.js`
- `./runtime.js`
- `./runtime.messaging.js`
- `./runtime.messaging.messages.js`
- `./runtime.messaging.reactions.js`
- `./runtime.messaging.runtime.js`
- `./runtime.messaging.send.js`
- `./runtime.messaging.shared.js`
- `./runtime.moderation-shared.js`
- `./runtime.moderation.js`
- `./runtime.presence.js`
- `./runtime.shared.js`
- `@openclaw/normalization-core`
- `discord-api-types/v10`
- `openclaw/plugin-sdk/account-resolution`
- `openclaw/plugin-sdk/agent-runtime`
- `openclaw/plugin-sdk/boolean-param`
- `openclaw/plugin-sdk/channel-actions`
- `openclaw/plugin-sdk/error-runtime`
- `openclaw/plugin-sdk/interactive-runtime`
- `openclaw/plugin-sdk/runtime-group-policy`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
