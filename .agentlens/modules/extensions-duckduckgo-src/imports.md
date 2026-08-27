# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_duckduckgo_src[extensions-duckduckgo-src] --> test_support[test-support]
    extensions_duckduckgo_src[extensions-duckduckgo-src] --> __[..]
    extensions_duckduckgo_src[extensions-duckduckgo-src] --> _[.]
    extensions_duckduckgo_src[extensions-duckduckgo-src] --> _[.]
    extensions_duckduckgo_src[extensions-duckduckgo-src] --> plugin_sdk[plugin-sdk]
    extensions_duckduckgo_src[extensions-duckduckgo-src] --> plugin_sdk[plugin-sdk]
    extensions_duckduckgo_src[extensions-duckduckgo-src] --> plugin_sdk[plugin-sdk]
    extensions_duckduckgo_src[extensions-duckduckgo-src] --> plugin_sdk[plugin-sdk]
    extensions_duckduckgo_src[extensions-duckduckgo-src] --> plugin_sdk[plugin-sdk]
    extensions_duckduckgo_src[extensions-duckduckgo-src] --> plugin_sdk[plugin-sdk]
    extensions_duckduckgo_src[extensions-duckduckgo-src] --> plugin_sdk[plugin-sdk]
    extensions_duckduckgo_src[extensions-duckduckgo-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../test-support/streaming-error-response.js`
- `../web-search-contract-api.js`
- `./config.js`
- `./ddg-search-provider.shared.js`
- `openclaw/plugin-sdk/html-entity-runtime`
- `openclaw/plugin-sdk/lazy-runtime`
- `openclaw/plugin-sdk/param-readers`
- `openclaw/plugin-sdk/provider-http`
- `openclaw/plugin-sdk/provider-web-search`
- `openclaw/plugin-sdk/provider-web-search-contract`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
