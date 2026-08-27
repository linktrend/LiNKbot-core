# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_firecrawl_src[extensions-firecrawl-src] --> test_support[test-support]
    extensions_firecrawl_src[extensions-firecrawl-src] --> __[..]
    extensions_firecrawl_src[extensions-firecrawl-src] --> _[.]
    extensions_firecrawl_src[extensions-firecrawl-src] --> _[.]
    extensions_firecrawl_src[extensions-firecrawl-src] --> _[.]
    extensions_firecrawl_src[extensions-firecrawl-src] --> _[.]
    extensions_firecrawl_src[extensions-firecrawl-src] --> _openclaw[@openclaw]
    extensions_firecrawl_src[extensions-firecrawl-src] --> plugin_sdk[plugin-sdk]
    extensions_firecrawl_src[extensions-firecrawl-src] --> plugin_sdk[plugin-sdk]
    extensions_firecrawl_src[extensions-firecrawl-src] --> plugin_sdk[plugin-sdk]
    extensions_firecrawl_src[extensions-firecrawl-src] --> plugin_sdk[plugin-sdk]
    extensions_firecrawl_src[extensions-firecrawl-src] --> plugin_sdk[plugin-sdk]
    extensions_firecrawl_src[extensions-firecrawl-src] --> plugin_sdk[plugin-sdk]
    extensions_firecrawl_src[extensions-firecrawl-src] --> plugin_sdk[plugin-sdk]
    extensions_firecrawl_src[extensions-firecrawl-src] --> plugin_sdk[plugin-sdk]
    extensions_firecrawl_src[extensions-firecrawl-src] --> plugin_sdk[plugin-sdk]
    extensions_firecrawl_src[extensions-firecrawl-src] --> plugin_sdk[plugin-sdk]
    extensions_firecrawl_src[extensions-firecrawl-src] --> plugin_sdk[plugin-sdk]
    extensions_firecrawl_src[extensions-firecrawl-src] --> plugin_sdk[plugin-sdk]
    extensions_firecrawl_src[extensions-firecrawl-src] --> plugin_sdk[plugin-sdk]
    extensions_firecrawl_src[extensions-firecrawl-src] --> plugin_sdk[plugin-sdk]
    extensions_firecrawl_src[extensions-firecrawl-src] --> typebox[typebox]
    extensions_firecrawl_src[extensions-firecrawl-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../test-support/streaming-error-response.js`
- `../web-search-shared.js`
- `./config.js`
- `./firecrawl-client.js`
- `./firecrawl-fetch-provider-shared.js`
- `./firecrawl-search-provider.js`
- `@openclaw/normalization-core`
- `openclaw/plugin-sdk/channel-actions`
- `openclaw/plugin-sdk/extension-shared`
- `openclaw/plugin-sdk/lazy-runtime`
- `openclaw/plugin-sdk/param-readers`
- `openclaw/plugin-sdk/provider-http`
- `openclaw/plugin-sdk/provider-web-fetch`
- `openclaw/plugin-sdk/provider-web-fetch-contract`
- `openclaw/plugin-sdk/provider-web-search`
- `openclaw/plugin-sdk/secret-input`
- `openclaw/plugin-sdk/security-runtime`
- `openclaw/plugin-sdk/ssrf-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/test-env`
- `openclaw/plugin-sdk/text-utility-runtime`
- `typebox`
- `vitest`
