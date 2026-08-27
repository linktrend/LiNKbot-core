# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_codex_src_app_server_sandbox_exec_server[extensions-codex-src-app-server-sandbox-exec-server] --> _[.]
    extensions_codex_src_app_server_sandbox_exec_server[extensions-codex-src-app-server-sandbox-exec-server] --> _[.]
    extensions_codex_src_app_server_sandbox_exec_server[extensions-codex-src-app-server-sandbox-exec-server] --> _[.]
    extensions_codex_src_app_server_sandbox_exec_server[extensions-codex-src-app-server-sandbox-exec-server] --> _[.]
    extensions_codex_src_app_server_sandbox_exec_server[extensions-codex-src-app-server-sandbox-exec-server] --> node_child_process[node:child_process]
    extensions_codex_src_app_server_sandbox_exec_server[extensions-codex-src-app-server-sandbox-exec-server] --> node_path[node:path]
    extensions_codex_src_app_server_sandbox_exec_server[extensions-codex-src-app-server-sandbox-exec-server] --> node_url[node:url]
    extensions_codex_src_app_server_sandbox_exec_server[extensions-codex-src-app-server-sandbox-exec-server] --> plugin_sdk[plugin-sdk]
    extensions_codex_src_app_server_sandbox_exec_server[extensions-codex-src-app-server-sandbox-exec-server] --> plugin_sdk[plugin-sdk]
    extensions_codex_src_app_server_sandbox_exec_server[extensions-codex-src-app-server-sandbox-exec-server] --> plugin_sdk[plugin-sdk]
```

## External Dependencies

Dependencies from other modules:

- `./fs-policy.js`
- `./json-rpc.js`
- `./path-uri.js`
- `./runtime.js`
- `node:child_process`
- `node:path`
- `node:url`
- `openclaw/plugin-sdk/agent-harness-runtime`
- `openclaw/plugin-sdk/ssrf-runtime`
- `openclaw/plugin-sdk/text-utility-runtime`
