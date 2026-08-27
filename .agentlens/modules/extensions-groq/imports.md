# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_groq[extensions-groq] --> _[.]
    extensions_groq[extensions-groq] --> _[.]
    extensions_groq[extensions-groq] --> _[.]
    extensions_groq[extensions-groq] --> plugin_sdk[plugin-sdk]
    extensions_groq[extensions-groq] --> plugin_sdk[plugin-sdk]
    extensions_groq[extensions-groq] --> plugin_sdk[plugin-sdk]
    extensions_groq[extensions-groq] --> plugin_sdk[plugin-sdk]
    extensions_groq[extensions-groq] --> plugin_sdk[plugin-sdk]
    extensions_groq[extensions-groq] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./api.js`
- `./index.js`
- `./media-understanding-provider.js`
- `openclaw/plugin-sdk/llm`
- `openclaw/plugin-sdk/media-understanding`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-auth-api-key`
- `vitest`
