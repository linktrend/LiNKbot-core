# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_bonjour[extensions-bonjour] --> node_fs[node:fs]
    extensions_bonjour[extensions-bonjour] --> plugin_sdk[plugin-sdk]
    extensions_bonjour[extensions-bonjour] --> plugin_sdk[plugin-sdk]
    extensions_bonjour[extensions-bonjour] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `node:fs`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-api`
- `vitest`
