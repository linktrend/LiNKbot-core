# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_tavily[extensions-tavily] --> src[src]
    extensions_tavily[extensions-tavily] --> src[src]
    extensions_tavily[extensions-tavily] --> src[src]
    extensions_tavily[extensions-tavily] --> _[.]
    extensions_tavily[extensions-tavily] --> plugin_sdk[plugin-sdk]
    extensions_tavily[extensions-tavily] --> plugin_sdk[plugin-sdk]
    extensions_tavily[extensions-tavily] --> plugin_sdk[plugin-sdk]
```

## External Dependencies

Dependencies from other modules:

- `./src/tavily-extract-tool.js`
- `./src/tavily-search-provider.js`
- `./src/tavily-search-tool.js`
- `./web-search-shared.js`
- `openclaw/plugin-sdk/lazy-runtime`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/provider-web-search-contract`
