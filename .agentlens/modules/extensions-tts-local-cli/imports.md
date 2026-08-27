# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_tts_local_cli[extensions-tts-local-cli] --> _[.]
    extensions_tts_local_cli[extensions-tts-local-cli] --> node_fs[node:fs]
    extensions_tts_local_cli[extensions-tts-local-cli] --> node_os[node:os]
    extensions_tts_local_cli[extensions-tts-local-cli] --> node_path[node:path]
    extensions_tts_local_cli[extensions-tts-local-cli] --> plugin_sdk[plugin-sdk]
    extensions_tts_local_cli[extensions-tts-local-cli] --> plugin_sdk[plugin-sdk]
    extensions_tts_local_cli[extensions-tts-local-cli] --> plugin_sdk[plugin-sdk]
    extensions_tts_local_cli[extensions-tts-local-cli] --> plugin_sdk[plugin-sdk]
    extensions_tts_local_cli[extensions-tts-local-cli] --> plugin_sdk[plugin-sdk]
    extensions_tts_local_cli[extensions-tts-local-cli] --> plugin_sdk[plugin-sdk]
    extensions_tts_local_cli[extensions-tts-local-cli] --> plugin_sdk[plugin-sdk]
    extensions_tts_local_cli[extensions-tts-local-cli] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./speech-provider.js`
- `node:fs`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/media-runtime`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/process-runtime`
- `openclaw/plugin-sdk/runtime-env`
- `openclaw/plugin-sdk/security-runtime`
- `openclaw/plugin-sdk/temp-path`
- `openclaw/plugin-sdk/text-utility-runtime`
- `vitest`
