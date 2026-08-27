# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_web_readability[extensions-web-readability] --> _[.]
    extensions_web_readability[extensions-web-readability] --> plugin_sdk[plugin-sdk]
    extensions_web_readability[extensions-web-readability] --> plugin_sdk[plugin-sdk]
    extensions_web_readability[extensions-web-readability] --> plugin_sdk[plugin-sdk]
    extensions_web_readability[extensions-web-readability] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./web-content-extractor.js`
- `openclaw/plugin-sdk/lazy-runtime`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/web-content-extractor`
- `vitest`
