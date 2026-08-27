# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_e2e[ui-src-e2e] --> src[src]
    ui_src_e2e[ui-src-e2e] --> src[src]
    ui_src_e2e[ui-src-e2e] --> agents[agents]
    ui_src_e2e[ui-src-e2e] --> agents[agents]
    ui_src_e2e[ui-src-e2e] --> agents[agents]
    ui_src_e2e[ui-src-e2e] --> config[config]
    ui_src_e2e[ui-src-e2e] --> gateway[gateway]
    ui_src_e2e[ui-src-e2e] --> gateway[gateway]
    ui_src_e2e[ui-src-e2e] --> gateway[gateway]
    ui_src_e2e[ui-src-e2e] --> test_utils[test-utils]
    ui_src_e2e[ui-src-e2e] --> app[app]
    ui_src_e2e[ui-src-e2e] --> sessions[sessions]
    ui_src_e2e[ui-src-e2e] --> chat[chat]
    ui_src_e2e[ui-src-e2e] --> usage[usage]
    ui_src_e2e[ui-src-e2e] --> test_helpers[test-helpers]
    ui_src_e2e[ui-src-e2e] --> api[api]
    ui_src_e2e[ui-src-e2e] --> components[components]
    ui_src_e2e[ui-src-e2e] --> components[components]
    ui_src_e2e[ui-src-e2e] --> _openclaw[@openclaw]
    ui_src_e2e[ui-src-e2e] --> node_crypto[node:crypto]
    ui_src_e2e[ui-src-e2e] --> node_fs[node:fs]
    ui_src_e2e[ui-src-e2e] --> node_fs[node:fs]
    ui_src_e2e[ui-src-e2e] --> node_http[node:http]
    ui_src_e2e[ui-src-e2e] --> node_module[node:module]
    ui_src_e2e[ui-src-e2e] --> node_os[node:os]
    ui_src_e2e[ui-src-e2e] --> node_path[node:path]
    ui_src_e2e[ui-src-e2e] --> playwright[playwright]
    ui_src_e2e[ui-src-e2e] --> playwright[playwright]
    ui_src_e2e[ui-src-e2e] --> qrcode[qrcode]
    ui_src_e2e[ui-src-e2e] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/gateway-protocol/src/connect-error-details.js`
- `../../../packages/gateway-protocol/src/index.js`
- `../../../src/agents/agent-bundle-mcp-materialize.js`
- `../../../src/agents/agent-bundle-mcp-runtime.js`
- `../../../src/agents/mcp-ui-resource.js`
- `../../../src/config/config.js`
- `../../../src/gateway/control-ui-csp.ts`
- `../../../src/gateway/server.js`
- `../../../src/gateway/test-helpers.e2e.js`
- `../../../src/test-utils/env.js`
- `../app/gateway-scope.ts`
- `../lib/sessions/drag.ts`
- `../pages/chat/run-lifecycle.ts`
- `../pages/usage/refresh-policy.ts`
- `../test-helpers/control-ui-e2e.ts`
- `/src/api/gateway.ts`
- `/src/components/mcp-app-security.ts`
- `/src/components/mcp-app-view-registration.ts`
- `@openclaw/normalization-core`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:http`
- `node:module`
- `node:os`
- `node:path`
- `playwright`
- `playwright/test`
- `qrcode`
- `vitest`
