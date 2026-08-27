# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_voice_call_src_providers_twilio[extensions-voice-call-src-providers-twilio] --> __[..]
    extensions_voice_call_src_providers_twilio[extensions-voice-call-src-providers-twilio] --> __[..]
    extensions_voice_call_src_providers_twilio[extensions-voice-call-src-providers-twilio] --> shared[shared]
    extensions_voice_call_src_providers_twilio[extensions-voice-call-src-providers-twilio] --> __[..]
    extensions_voice_call_src_providers_twilio[extensions-voice-call-src-providers-twilio] --> _[.]
    extensions_voice_call_src_providers_twilio[extensions-voice-call-src-providers-twilio] --> _[.]
    extensions_voice_call_src_providers_twilio[extensions-voice-call-src-providers-twilio] --> plugin_sdk[plugin-sdk]
    extensions_voice_call_src_providers_twilio[extensions-voice-call-src-providers-twilio] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../api.js`
- `../../webhook-security.js`
- `../shared/response-body.js`
- `../twilio-region.js`
- `./api.js`
- `./twiml-policy.js`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
