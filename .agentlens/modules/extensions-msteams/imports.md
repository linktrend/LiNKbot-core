# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_msteams[extensions-msteams] --> _[.]
    extensions_msteams[extensions-msteams] --> src[src]
    extensions_msteams[extensions-msteams] --> src[src]
    extensions_msteams[extensions-msteams] --> src[src]
    extensions_msteams[extensions-msteams] --> src[src]
    extensions_msteams[extensions-msteams] --> src[src]
    extensions_msteams[extensions-msteams] --> src[src]
    extensions_msteams[extensions-msteams] --> src[src]
    extensions_msteams[extensions-msteams] --> node_crypto[node:crypto]
    extensions_msteams[extensions-msteams] --> node_fs[node:fs]
    extensions_msteams[extensions-msteams] --> node_os[node:os]
    extensions_msteams[extensions-msteams] --> node_path[node:path]
    extensions_msteams[extensions-msteams] --> plugin_sdk[plugin-sdk]
    extensions_msteams[extensions-msteams] --> plugin_sdk[plugin-sdk]
    extensions_msteams[extensions-msteams] --> plugin_sdk[plugin-sdk]
    extensions_msteams[extensions-msteams] --> plugin_sdk[plugin-sdk]
    extensions_msteams[extensions-msteams] --> plugin_sdk[plugin-sdk]
    extensions_msteams[extensions-msteams] --> plugin_sdk[plugin-sdk]
    extensions_msteams[extensions-msteams] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./doctor-contract-api.js`
- `./src/conversation-store-helpers.js`
- `./src/conversation-store-state.js`
- `./src/delegated-state.js`
- `./src/polls.js`
- `./src/resolve-allowlist.js`
- `./src/sso-token-store.js`
- `./src/token.js`
- `node:crypto`
- `node:fs/promises`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/channel-entry-contract`
- `openclaw/plugin-sdk/directory-runtime`
- `openclaw/plugin-sdk/plugin-state-test-runtime`
- `openclaw/plugin-sdk/runtime-doctor`
- `openclaw/plugin-sdk/session-store-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
