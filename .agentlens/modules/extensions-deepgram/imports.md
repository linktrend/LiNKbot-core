# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_deepgram[extensions-deepgram] --> _[.]
    extensions_deepgram[extensions-deepgram] --> _[.]
    extensions_deepgram[extensions-deepgram] --> _[.]
    extensions_deepgram[extensions-deepgram] --> node_http[node:http]
    extensions_deepgram[extensions-deepgram] --> plugin_sdk[plugin-sdk]
    extensions_deepgram[extensions-deepgram] --> plugin_sdk[plugin-sdk]
    extensions_deepgram[extensions-deepgram] --> plugin_sdk[plugin-sdk]
    extensions_deepgram[extensions-deepgram] --> plugin_sdk[plugin-sdk]
    extensions_deepgram[extensions-deepgram] --> plugin_sdk[plugin-sdk]
    extensions_deepgram[extensions-deepgram] --> plugin_sdk[plugin-sdk]
    extensions_deepgram[extensions-deepgram] --> plugin_sdk[plugin-sdk]
    extensions_deepgram[extensions-deepgram] --> plugin_sdk[plugin-sdk]
    extensions_deepgram[extensions-deepgram] --> vitest[vitest]
    extensions_deepgram[extensions-deepgram] --> ws[ws]
```

## External Dependencies

Dependencies from other modules:

- `./audio.js`
- `./media-understanding-provider.js`
- `./realtime-transcription-provider.js`
- `node:http`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/provider-http`
- `openclaw/plugin-sdk/provider-test-contracts`
- `openclaw/plugin-sdk/realtime-transcription`
- `openclaw/plugin-sdk/secret-input`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/test-live`
- `openclaw/plugin-sdk/test-media-understanding`
- `vitest`
- `ws`
