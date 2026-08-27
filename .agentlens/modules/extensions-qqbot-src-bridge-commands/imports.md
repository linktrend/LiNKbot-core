# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_qqbot_src_bridge_commands[extensions-qqbot-src-bridge-commands] --> commands[commands]
    extensions_qqbot_src_bridge_commands[extensions-qqbot-src-bridge-commands] --> commands[commands]
    extensions_qqbot_src_bridge_commands[extensions-qqbot-src-bridge-commands] --> commands[commands]
    extensions_qqbot_src_bridge_commands[extensions-qqbot-src-bridge-commands] --> config[config]
    extensions_qqbot_src_bridge_commands[extensions-qqbot-src-bridge-commands] --> messaging[messaging]
    extensions_qqbot_src_bridge_commands[extensions-qqbot-src-bridge-commands] --> __[..]
    extensions_qqbot_src_bridge_commands[extensions-qqbot-src-bridge-commands] --> __[..]
    extensions_qqbot_src_bridge_commands[extensions-qqbot-src-bridge-commands] --> _[.]
    extensions_qqbot_src_bridge_commands[extensions-qqbot-src-bridge-commands] --> _[.]
    extensions_qqbot_src_bridge_commands[extensions-qqbot-src-bridge-commands] --> _[.]
    extensions_qqbot_src_bridge_commands[extensions-qqbot-src-bridge-commands] --> _[.]
    extensions_qqbot_src_bridge_commands[extensions-qqbot-src-bridge-commands] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../engine/commands/command-visibility.js`
- `../../engine/commands/slash-command-test-support.js`
- `../../engine/commands/slash-commands-impl.js`
- `../../engine/config/group.js`
- `../../engine/messaging/outbound.js`
- `../bootstrap.js`
- `../config.js`
- `./framework-context-adapter.js`
- `./framework-registration.js`
- `./from-parser.js`
- `./result-dispatcher.js`
- `vitest`
