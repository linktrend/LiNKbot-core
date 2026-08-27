# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_microsoft[extensions-microsoft] --> test_support[test-support]
    extensions_microsoft[extensions-microsoft] --> _[.]
    extensions_microsoft[extensions-microsoft] --> _[.]
    extensions_microsoft[extensions-microsoft] --> dist[dist]
    extensions_microsoft[extensions-microsoft] --> node_fs[node:fs]
    extensions_microsoft[extensions-microsoft] --> node_fs[node:fs]
    extensions_microsoft[extensions-microsoft] --> node_os[node:os]
    extensions_microsoft[extensions-microsoft] --> node_path[node:path]
    extensions_microsoft[extensions-microsoft] --> plugin_sdk[plugin-sdk]
    extensions_microsoft[extensions-microsoft] --> plugin_sdk[plugin-sdk]
    extensions_microsoft[extensions-microsoft] --> plugin_sdk[plugin-sdk]
    extensions_microsoft[extensions-microsoft] --> plugin_sdk[plugin-sdk]
    extensions_microsoft[extensions-microsoft] --> plugin_sdk[plugin-sdk]
    extensions_microsoft[extensions-microsoft] --> plugin_sdk[plugin-sdk]
    extensions_microsoft[extensions-microsoft] --> plugin_sdk[plugin-sdk]
    extensions_microsoft[extensions-microsoft] --> plugin_sdk[plugin-sdk]
    extensions_microsoft[extensions-microsoft] --> plugin_sdk[plugin-sdk]
    extensions_microsoft[extensions-microsoft] --> plugin_sdk[plugin-sdk]
    extensions_microsoft[extensions-microsoft] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../test-support/debug-proxy-env-test-helpers.js`
- `./speech-provider.js`
- `./tts.js`
- `node-edge-tts/dist/drm.js`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/media-runtime`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/provider-http`
- `openclaw/plugin-sdk/proxy-capture`
- `openclaw/plugin-sdk/security-runtime`
- `openclaw/plugin-sdk/speech`
- `openclaw/plugin-sdk/ssrf-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/temp-path`
- `openclaw/plugin-sdk/test-live`
- `vitest`
