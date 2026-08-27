# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_tavily_src[extensions-tavily-src] --> test_support[test-support]
    extensions_tavily_src[extensions-tavily-src] --> __[..]
    extensions_tavily_src[extensions-tavily-src] --> _[.]
    extensions_tavily_src[extensions-tavily-src] --> _[.]
    extensions_tavily_src[extensions-tavily-src] --> _[.]
    extensions_tavily_src[extensions-tavily-src] --> _[.]
    extensions_tavily_src[extensions-tavily-src] --> plugin_sdk[plugin-sdk]
    extensions_tavily_src[extensions-tavily-src] --> plugin_sdk[plugin-sdk]
    extensions_tavily_src[extensions-tavily-src] --> plugin_sdk[plugin-sdk]
    extensions_tavily_src[extensions-tavily-src] --> plugin_sdk[plugin-sdk]
    extensions_tavily_src[extensions-tavily-src] --> plugin_sdk[plugin-sdk]
    extensions_tavily_src[extensions-tavily-src] --> plugin_sdk[plugin-sdk]
    extensions_tavily_src[extensions-tavily-src] --> plugin_sdk[plugin-sdk]
    extensions_tavily_src[extensions-tavily-src] --> plugin_sdk[plugin-sdk]
    extensions_tavily_src[extensions-tavily-src] --> plugin_sdk[plugin-sdk]
    extensions_tavily_src[extensions-tavily-src] --> typebox[typebox]
    extensions_tavily_src[extensions-tavily-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../test-support/streaming-error-response.js`
- `../web-search-shared.js`
- `./config.js`
- `./tavily-client.js`
- `./tavily-tool-config.js`
- `./tavily-tool-schema.js`
- `openclaw/plugin-sdk/extension-shared`
- `openclaw/plugin-sdk/lazy-runtime`
- `openclaw/plugin-sdk/param-readers`
- `openclaw/plugin-sdk/plugin-test-api`
- `openclaw/plugin-sdk/provider-http`
- `openclaw/plugin-sdk/provider-web-search`
- `openclaw/plugin-sdk/secret-input`
- `openclaw/plugin-sdk/security-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `typebox`
- `vitest`
