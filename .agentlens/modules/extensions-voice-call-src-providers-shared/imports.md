# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_voice_call_src_providers_shared[extensions-voice-call-src-providers-shared] --> __[..]
    extensions_voice_call_src_providers_shared[extensions-voice-call-src-providers-shared] --> _[.]
    extensions_voice_call_src_providers_shared[extensions-voice-call-src-providers-shared] --> _[.]
    extensions_voice_call_src_providers_shared[extensions-voice-call-src-providers-shared] --> _[.]
    extensions_voice_call_src_providers_shared[extensions-voice-call-src-providers-shared] --> plugin_sdk[plugin-sdk]
    extensions_voice_call_src_providers_shared[extensions-voice-call-src-providers-shared] --> plugin_sdk[plugin-sdk]
    extensions_voice_call_src_providers_shared[extensions-voice-call-src-providers-shared] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../api.js`
- `./call-status.js`
- `./guarded-json-api.js`
- `./response-body.js`
- `openclaw/plugin-sdk/response-limit-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
