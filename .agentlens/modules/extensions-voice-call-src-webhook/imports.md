# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> manager[manager]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> providers[providers]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> __[..]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> __[..]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> _[.]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> _[.]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> _[.]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> _[.]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> _[.]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> _openclaw[@openclaw]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> node_crypto[node:crypto]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> node_http[node:http]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> plugin_sdk[plugin-sdk]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> plugin_sdk[plugin-sdk]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> plugin_sdk[plugin-sdk]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> plugin_sdk[plugin-sdk]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> plugin_sdk[plugin-sdk]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> plugin_sdk[plugin-sdk]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> plugin_sdk[plugin-sdk]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> plugin_sdk[plugin-sdk]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> vitest[vitest]
    extensions_voice_call_src_webhook[extensions-voice-call-src-webhook] --> ws[ws]
```

## External Dependencies

Dependencies from other modules:

- `../manager/outbound.js`
- `../providers/telnyx.js`
- `../types.js`
- `../websocket-test-support.js`
- `./realtime-audio-pacer.js`
- `./realtime-handler.js`
- `./stale-call-reaper.js`
- `./stream-frame-adapter.js`
- `./tailscale.js`
- `@openclaw/normalization-core`
- `node:crypto`
- `node:http`
- `openclaw/plugin-sdk/error-runtime`
- `openclaw/plugin-sdk/number-runtime`
- `openclaw/plugin-sdk/process-runtime`
- `openclaw/plugin-sdk/realtime-voice`
- `openclaw/plugin-sdk/runtime-env`
- `openclaw/plugin-sdk/test-env`
- `openclaw/plugin-sdk/text-utility-runtime`
- `openclaw/plugin-sdk/webhook-ingress`
- `vitest`
- `ws`
