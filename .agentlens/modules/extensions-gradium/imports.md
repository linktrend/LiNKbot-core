# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_gradium[extensions-gradium] --> _[.]
    extensions_gradium[extensions-gradium] --> _[.]
    extensions_gradium[extensions-gradium] --> _[.]
    extensions_gradium[extensions-gradium] --> _[.]
    extensions_gradium[extensions-gradium] --> node_fs[node:fs]
    extensions_gradium[extensions-gradium] --> node_os[node:os]
    extensions_gradium[extensions-gradium] --> node_path[node:path]
    extensions_gradium[extensions-gradium] --> plugin_sdk[plugin-sdk]
    extensions_gradium[extensions-gradium] --> plugin_sdk[plugin-sdk]
    extensions_gradium[extensions-gradium] --> plugin_sdk[plugin-sdk]
    extensions_gradium[extensions-gradium] --> plugin_sdk[plugin-sdk]
    extensions_gradium[extensions-gradium] --> plugin_sdk[plugin-sdk]
    extensions_gradium[extensions-gradium] --> plugin_sdk[plugin-sdk]
    extensions_gradium[extensions-gradium] --> plugin_sdk[plugin-sdk]
    extensions_gradium[extensions-gradium] --> plugin_sdk[plugin-sdk]
    extensions_gradium[extensions-gradium] --> plugin_sdk[plugin-sdk]
    extensions_gradium[extensions-gradium] --> plugin_sdk[plugin-sdk]
    extensions_gradium[extensions-gradium] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./index.js`
- `./shared.js`
- `./speech-provider.js`
- `./tts.js`
- `node:fs`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-http`
- `openclaw/plugin-sdk/response-limit-runtime`
- `openclaw/plugin-sdk/secret-input`
- `openclaw/plugin-sdk/speech`
- `openclaw/plugin-sdk/speech-core`
- `openclaw/plugin-sdk/ssrf-runtime`
- `openclaw/plugin-sdk/test-live`
- `openclaw/plugin-sdk/test-media-understanding`
- `vitest`
