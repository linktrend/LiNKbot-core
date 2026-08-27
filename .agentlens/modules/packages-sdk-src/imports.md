# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    packages_sdk_src[packages-sdk-src] --> scripts[scripts]
    packages_sdk_src[packages-sdk-src] --> scripts[scripts]
    packages_sdk_src[packages-sdk-src] --> gateway[gateway]
    packages_sdk_src[packages-sdk-src] --> infra[infra]
    packages_sdk_src[packages-sdk-src] --> infra[infra]
    packages_sdk_src[packages-sdk-src] --> infra[infra]
    packages_sdk_src[packages-sdk-src] --> test_utils[test-utils]
    packages_sdk_src[packages-sdk-src] --> utils[utils]
    packages_sdk_src[packages-sdk-src] --> _[.]
    packages_sdk_src[packages-sdk-src] --> _[.]
    packages_sdk_src[packages-sdk-src] --> _[.]
    packages_sdk_src[packages-sdk-src] --> _[.]
    packages_sdk_src[packages-sdk-src] --> _openclaw[@openclaw]
    packages_sdk_src[packages-sdk-src] --> _openclaw[@openclaw]
    packages_sdk_src[packages-sdk-src] --> node_child_process[node:child_process]
    packages_sdk_src[packages-sdk-src] --> node_crypto[node:crypto]
    packages_sdk_src[packages-sdk-src] --> node_fs[node:fs]
    packages_sdk_src[packages-sdk-src] --> node_fs[node:fs]
    packages_sdk_src[packages-sdk-src] --> node_http[node:http]
    packages_sdk_src[packages-sdk-src] --> node_net[node:net]
    packages_sdk_src[packages-sdk-src] --> node_os[node:os]
    packages_sdk_src[packages-sdk-src] --> node_path[node:path]
    packages_sdk_src[packages-sdk-src] --> vitest[vitest]
    packages_sdk_src[packages-sdk-src] --> ws[ws]
```

## External Dependencies

Dependencies from other modules:

- `../../../scripts/npm-runner.mjs`
- `../../../scripts/pnpm-runner.mjs`
- `../../../src/gateway/test-helpers.js`
- `../../../src/infra/agent-events.js`
- `../../../src/infra/windows-install-roots.js`
- `../../../src/infra/ws.js`
- `../../../src/test-utils/node-process.js`
- `../../../src/utils/with-timeout.js`
- `./event-hub.js`
- `./index.js`
- `./normalize.js`
- `./transport.js`
- `@openclaw/gateway-client`
- `@openclaw/sdk`
- `node:child_process`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:http`
- `node:net`
- `node:os`
- `node:path`
- `vitest`
- `ws`
