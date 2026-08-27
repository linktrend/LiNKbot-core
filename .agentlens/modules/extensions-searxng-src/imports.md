# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_searxng_src[extensions-searxng-src] --> _[.]
    extensions_searxng_src[extensions-searxng-src] --> _[.]
    extensions_searxng_src[extensions-searxng-src] --> _openclaw[@openclaw]
    extensions_searxng_src[extensions-searxng-src] --> node_http[node:http]
    extensions_searxng_src[extensions-searxng-src] --> plugin_sdk[plugin-sdk]
    extensions_searxng_src[extensions-searxng-src] --> plugin_sdk[plugin-sdk]
    extensions_searxng_src[extensions-searxng-src] --> plugin_sdk[plugin-sdk]
    extensions_searxng_src[extensions-searxng-src] --> plugin_sdk[plugin-sdk]
    extensions_searxng_src[extensions-searxng-src] --> plugin_sdk[plugin-sdk]
    extensions_searxng_src[extensions-searxng-src] --> plugin_sdk[plugin-sdk]
    extensions_searxng_src[extensions-searxng-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./config.js`
- `./searxng-client.js`
- `@openclaw/normalization-core`
- `node:http`
- `openclaw/plugin-sdk/lazy-runtime`
- `openclaw/plugin-sdk/param-readers`
- `openclaw/plugin-sdk/provider-web-search`
- `openclaw/plugin-sdk/provider-web-search-contract`
- `openclaw/plugin-sdk/secret-input`
- `openclaw/plugin-sdk/ssrf-runtime`
- `vitest`
