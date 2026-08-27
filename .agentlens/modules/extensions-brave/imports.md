# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_brave[extensions-brave] --> src[src]
    extensions_brave[extensions-brave] --> src[src]
    extensions_brave[extensions-brave] --> _[.]
    extensions_brave[extensions-brave] --> plugin_sdk[plugin-sdk]
    extensions_brave[extensions-brave] --> plugin_sdk[plugin-sdk]
    extensions_brave[extensions-brave] --> plugin_sdk[plugin-sdk]
```

## External Dependencies

Dependencies from other modules:

- `./src/brave-web-search-provider.js`
- `./src/brave-web-search-provider.shared.js`
- `./web-search-shared.js`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/provider-web-search-config-contract`
- `openclaw/plugin-sdk/string-coerce-runtime`
