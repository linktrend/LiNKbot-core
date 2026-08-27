# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_senseaudio[extensions-senseaudio] --> _[.]
    extensions_senseaudio[extensions-senseaudio] --> node_child_process[node:child_process]
    extensions_senseaudio[extensions-senseaudio] --> node_fs[node:fs]
    extensions_senseaudio[extensions-senseaudio] --> node_os[node:os]
    extensions_senseaudio[extensions-senseaudio] --> node_path[node:path]
    extensions_senseaudio[extensions-senseaudio] --> plugin_sdk[plugin-sdk]
    extensions_senseaudio[extensions-senseaudio] --> plugin_sdk[plugin-sdk]
    extensions_senseaudio[extensions-senseaudio] --> plugin_sdk[plugin-sdk]
    extensions_senseaudio[extensions-senseaudio] --> plugin_sdk[plugin-sdk]
    extensions_senseaudio[extensions-senseaudio] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./media-understanding-provider.js`
- `node:child_process`
- `node:fs`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/media-runtime`
- `openclaw/plugin-sdk/media-understanding`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/test-media-understanding`
- `vitest`
