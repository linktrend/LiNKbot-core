# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_file_transfer[extensions-file-transfer] --> _[.]
    extensions_file_transfer[extensions-file-transfer] --> shared[shared]
    extensions_file_transfer[extensions-file-transfer] --> tools[tools]
    extensions_file_transfer[extensions-file-transfer] --> plugin_sdk[plugin-sdk]
    extensions_file_transfer[extensions-file-transfer] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./index.js`
- `./src/shared/lazy-node-invoke-policy.js`
- `./src/tools/descriptors.js`
- `openclaw/plugin-sdk/plugin-entry`
- `vitest`
