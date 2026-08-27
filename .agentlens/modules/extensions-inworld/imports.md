# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_inworld[extensions-inworld] --> _[.]
    extensions_inworld[extensions-inworld] --> _[.]
    extensions_inworld[extensions-inworld] --> _[.]
    extensions_inworld[extensions-inworld] --> _openclaw[@openclaw]
    extensions_inworld[extensions-inworld] --> plugin_sdk[plugin-sdk]
    extensions_inworld[extensions-inworld] --> plugin_sdk[plugin-sdk]
    extensions_inworld[extensions-inworld] --> plugin_sdk[plugin-sdk]
    extensions_inworld[extensions-inworld] --> plugin_sdk[plugin-sdk]
    extensions_inworld[extensions-inworld] --> plugin_sdk[plugin-sdk]
    extensions_inworld[extensions-inworld] --> plugin_sdk[plugin-sdk]
    extensions_inworld[extensions-inworld] --> plugin_sdk[plugin-sdk]
    extensions_inworld[extensions-inworld] --> plugin_sdk[plugin-sdk]
    extensions_inworld[extensions-inworld] --> plugin_sdk[plugin-sdk]
    extensions_inworld[extensions-inworld] --> plugin_sdk[plugin-sdk]
    extensions_inworld[extensions-inworld] --> plugin_sdk[plugin-sdk]
    extensions_inworld[extensions-inworld] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./index.js`
- `./speech-provider.js`
- `./tts.js`
- `@openclaw/normalization-core`
- `openclaw/plugin-sdk/media-runtime`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/response-limit-runtime`
- `openclaw/plugin-sdk/secret-input`
- `openclaw/plugin-sdk/speech-core`
- `openclaw/plugin-sdk/ssrf-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/test-env`
- `openclaw/plugin-sdk/test-live`
- `openclaw/plugin-sdk/text-utility-runtime`
- `vitest`
