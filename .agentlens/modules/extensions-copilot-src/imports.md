# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_copilot_src[extensions-copilot-src] --> __[..]
    extensions_copilot_src[extensions-copilot-src] --> _[.]
    extensions_copilot_src[extensions-copilot-src] --> _[.]
    extensions_copilot_src[extensions-copilot-src] --> _[.]
    extensions_copilot_src[extensions-copilot-src] --> _[.]
    extensions_copilot_src[extensions-copilot-src] --> _[.]
    extensions_copilot_src[extensions-copilot-src] --> _[.]
    extensions_copilot_src[extensions-copilot-src] --> _[.]
    extensions_copilot_src[extensions-copilot-src] --> _[.]
    extensions_copilot_src[extensions-copilot-src] --> _[.]
    extensions_copilot_src[extensions-copilot-src] --> _[.]
    extensions_copilot_src[extensions-copilot-src] --> _[.]
    extensions_copilot_src[extensions-copilot-src] --> _[.]
    extensions_copilot_src[extensions-copilot-src] --> _[.]
    extensions_copilot_src[extensions-copilot-src] --> _[.]
    extensions_copilot_src[extensions-copilot-src] --> _[.]
    extensions_copilot_src[extensions-copilot-src] --> _[.]
    extensions_copilot_src[extensions-copilot-src] --> _github[@github]
    extensions_copilot_src[extensions-copilot-src] --> _openclaw[@openclaw]
    extensions_copilot_src[extensions-copilot-src] --> node_crypto[node:crypto]
    extensions_copilot_src[extensions-copilot-src] --> node_fs[node:fs]
    extensions_copilot_src[extensions-copilot-src] --> node_fs[node:fs]
    extensions_copilot_src[extensions-copilot-src] --> node_http[node:http]
    extensions_copilot_src[extensions-copilot-src] --> node_module[node:module]
    extensions_copilot_src[extensions-copilot-src] --> node_os[node:os]
    extensions_copilot_src[extensions-copilot-src] --> node_path[node:path]
    extensions_copilot_src[extensions-copilot-src] --> node_stream[node:stream]
    extensions_copilot_src[extensions-copilot-src] --> node_stream[node:stream]
    extensions_copilot_src[extensions-copilot-src] --> node_url[node:url]
    extensions_copilot_src[extensions-copilot-src] --> plugin_sdk[plugin-sdk]
    extensions_copilot_src[extensions-copilot-src] --> plugin_sdk[plugin-sdk]
    extensions_copilot_src[extensions-copilot-src] --> plugin_sdk[plugin-sdk]
    extensions_copilot_src[extensions-copilot-src] --> plugin_sdk[plugin-sdk]
    extensions_copilot_src[extensions-copilot-src] --> plugin_sdk[plugin-sdk]
    extensions_copilot_src[extensions-copilot-src] --> plugin_sdk[plugin-sdk]
    extensions_copilot_src[extensions-copilot-src] --> plugin_sdk[plugin-sdk]
    extensions_copilot_src[extensions-copilot-src] --> plugin_sdk[plugin-sdk]
    extensions_copilot_src[extensions-copilot-src] --> plugin_sdk[plugin-sdk]
    extensions_copilot_src[extensions-copilot-src] --> plugin_sdk[plugin-sdk]
    extensions_copilot_src[extensions-copilot-src] --> plugin_sdk[plugin-sdk]
    extensions_copilot_src[extensions-copilot-src] --> plugin_sdk[plugin-sdk]
    extensions_copilot_src[extensions-copilot-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../harness.js`
- `./attempt.js`
- `./auth-bridge.js`
- `./byok-proxy.js`
- `./dual-write-transcripts.js`
- `./event-bridge.js`
- `./hooks-bridge.js`
- `./native-subagent-task-mirror.js`
- `./permission-bridge.js`
- `./provider-bridge.js`
- `./replay-shim.js`
- `./runtime.js`
- `./sdk-loader.js`
- `./tool-bridge.js`
- `./usage-bridge.js`
- `./user-input-bridge.js`
- `./workspace-bootstrap.js`
- `@github/copilot-sdk`
- `@openclaw/normalization-core`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:http`
- `node:module`
- `node:os`
- `node:path`
- `node:stream`
- `node:stream/promises`
- `node:url`
- `openclaw/plugin-sdk/agent-harness-runtime`
- `openclaw/plugin-sdk/agent-harness-task-runtime`
- `openclaw/plugin-sdk/agent-harness-tool-runtime`
- `openclaw/plugin-sdk/hook-runtime`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-auth`
- `openclaw/plugin-sdk/session-store-runtime`
- `openclaw/plugin-sdk/session-transcript-runtime`
- `openclaw/plugin-sdk/ssrf-runtime`
- `openclaw/plugin-sdk/state-paths`
- `openclaw/plugin-sdk/test-fixtures`
- `openclaw/plugin-sdk/test-live`
- `vitest`
