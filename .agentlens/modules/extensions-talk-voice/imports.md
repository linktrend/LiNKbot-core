# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_talk_voice[extensions-talk-voice] --> _[.]
    extensions_talk_voice[extensions-talk-voice] --> _[.]
    extensions_talk_voice[extensions-talk-voice] --> plugin_sdk[plugin-sdk]
    extensions_talk_voice[extensions-talk-voice] --> plugin_sdk[plugin-sdk]
    extensions_talk_voice[extensions-talk-voice] --> plugin_sdk[plugin-sdk]
    extensions_talk_voice[extensions-talk-voice] --> plugin_sdk[plugin-sdk]
    extensions_talk_voice[extensions-talk-voice] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./api.js`
- `./index.js`
- `openclaw/plugin-sdk/error-runtime`
- `openclaw/plugin-sdk/number-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/talk-config-runtime`
- `vitest`
