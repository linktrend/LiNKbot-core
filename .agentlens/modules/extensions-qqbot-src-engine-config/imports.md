# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_qqbot_src_engine_config[extensions-qqbot-src-engine-config] --> test_support[test-support]
    extensions_qqbot_src_engine_config[extensions-qqbot-src-engine-config] --> adapter[adapter]
    extensions_qqbot_src_engine_config[extensions-qqbot-src-engine-config] --> utils[utils]
    extensions_qqbot_src_engine_config[extensions-qqbot-src-engine-config] --> utils[utils]
    extensions_qqbot_src_engine_config[extensions-qqbot-src-engine-config] --> _[.]
    extensions_qqbot_src_engine_config[extensions-qqbot-src-engine-config] --> _[.]
    extensions_qqbot_src_engine_config[extensions-qqbot-src-engine-config] --> node_fs[node:fs]
    extensions_qqbot_src_engine_config[extensions-qqbot-src-engine-config] --> node_os[node:os]
    extensions_qqbot_src_engine_config[extensions-qqbot-src-engine-config] --> node_path[node:path]
    extensions_qqbot_src_engine_config[extensions-qqbot-src-engine-config] --> plugin_sdk[plugin-sdk]
    extensions_qqbot_src_engine_config[extensions-qqbot-src-engine-config] --> plugin_sdk[plugin-sdk]
    extensions_qqbot_src_engine_config[extensions-qqbot-src-engine-config] --> plugin_sdk[plugin-sdk]
    extensions_qqbot_src_engine_config[extensions-qqbot-src-engine-config] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../test-support/runtime.js`
- `../adapter/index.js`
- `../utils/sqlite-state.js`
- `../utils/string-normalize.js`
- `./group.js`
- `./resolve.js`
- `node:fs`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/channel-policy`
- `openclaw/plugin-sdk/plugin-state-test-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
