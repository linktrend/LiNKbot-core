# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_thread_ownership[extensions-thread-ownership] --> _[.]
    extensions_thread_ownership[extensions-thread-ownership] --> _[.]
    extensions_thread_ownership[extensions-thread-ownership] --> _openclaw[@openclaw]
    extensions_thread_ownership[extensions-thread-ownership] --> node_http[node:http]
    extensions_thread_ownership[extensions-thread-ownership] --> plugin_sdk[plugin-sdk]
    extensions_thread_ownership[extensions-thread-ownership] --> plugin_sdk[plugin-sdk]
    extensions_thread_ownership[extensions-thread-ownership] --> plugin_sdk[plugin-sdk]
    extensions_thread_ownership[extensions-thread-ownership] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./api.js`
- `./index.js`
- `@openclaw/normalization-core`
- `node:http`
- `openclaw/plugin-sdk/plugin-config-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/text-utility-runtime`
- `vitest`
