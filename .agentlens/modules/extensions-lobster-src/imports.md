# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_lobster_src[extensions-lobster-src] --> _[.]
    extensions_lobster_src[extensions-lobster-src] --> _[.]
    extensions_lobster_src[extensions-lobster-src] --> _[.]
    extensions_lobster_src[extensions-lobster-src] --> _[.]
    extensions_lobster_src[extensions-lobster-src] --> node_fs[node:fs]
    extensions_lobster_src[extensions-lobster-src] --> node_os[node:os]
    extensions_lobster_src[extensions-lobster-src] --> node_path[node:path]
    extensions_lobster_src[extensions-lobster-src] --> node_stream[node:stream]
    extensions_lobster_src[extensions-lobster-src] --> plugin_sdk[plugin-sdk]
    extensions_lobster_src[extensions-lobster-src] --> plugin_sdk[plugin-sdk]
    extensions_lobster_src[extensions-lobster-src] --> plugin_sdk[plugin-sdk]
    extensions_lobster_src[extensions-lobster-src] --> plugin_sdk[plugin-sdk]
    extensions_lobster_src[extensions-lobster-src] --> typebox[typebox]
    extensions_lobster_src[extensions-lobster-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./lobster-runner.js`
- `./lobster-taskflow.js`
- `./lobster-tool.js`
- `./taskflow-test-helpers.js`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:stream`
- `openclaw/plugin-sdk/channel-actions`
- `openclaw/plugin-sdk/param-readers`
- `openclaw/plugin-sdk/plugin-test-api`
- `openclaw/plugin-sdk/tool-results`
- `typebox`
- `vitest`
