# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_proxy_capture[src-proxy-capture] --> helpers[helpers]
    src_proxy_capture[src-proxy-capture] --> config[config]
    src_proxy_capture[src-proxy-capture] --> infra[infra]
    src_proxy_capture[src-proxy-capture] --> infra[infra]
    src_proxy_capture[src-proxy-capture] --> infra[infra]
    src_proxy_capture[src-proxy-capture] --> infra[infra]
    src_proxy_capture[src-proxy-capture] --> infra[infra]
    src_proxy_capture[src-proxy-capture] --> infra[infra]
    src_proxy_capture[src-proxy-capture] --> infra[infra]
    src_proxy_capture[src-proxy-capture] --> infra[infra]
    src_proxy_capture[src-proxy-capture] --> infra[infra]
    src_proxy_capture[src-proxy-capture] --> logging[logging]
    src_proxy_capture[src-proxy-capture] --> logging[logging]
    src_proxy_capture[src-proxy-capture] --> process[process]
    src_proxy_capture[src-proxy-capture] --> state[state]
    src_proxy_capture[src-proxy-capture] --> _[.]
    src_proxy_capture[src-proxy-capture] --> _[.]
    src_proxy_capture[src-proxy-capture] --> _[.]
    src_proxy_capture[src-proxy-capture] --> _[.]
    src_proxy_capture[src-proxy-capture] --> _[.]
    src_proxy_capture[src-proxy-capture] --> _[.]
    src_proxy_capture[src-proxy-capture] --> _[.]
    src_proxy_capture[src-proxy-capture] --> normalization_core[normalization-core]
    src_proxy_capture[src-proxy-capture] --> normalization_core[normalization-core]
    src_proxy_capture[src-proxy-capture] --> _openclaw[@openclaw]
    src_proxy_capture[src-proxy-capture] --> node_buffer[node:buffer]
    src_proxy_capture[src-proxy-capture] --> node_crypto[node:crypto]
    src_proxy_capture[src-proxy-capture] --> node_fs[node:fs]
    src_proxy_capture[src-proxy-capture] --> node_fs[node:fs]
    src_proxy_capture[src-proxy-capture] --> node_http[node:http]
    src_proxy_capture[src-proxy-capture] --> node_https[node:https]
    src_proxy_capture[src-proxy-capture] --> node_net[node:net]
    src_proxy_capture[src-proxy-capture] --> node_os[node:os]
    src_proxy_capture[src-proxy-capture] --> node_path[node:path]
    src_proxy_capture[src-proxy-capture] --> node_process[node:process]
    src_proxy_capture[src-proxy-capture] --> node_string_decoder[node:string_decoder]
    src_proxy_capture[src-proxy-capture] --> node_url[node:url]
    src_proxy_capture[src-proxy-capture] --> node_zlib[node:zlib]
    src_proxy_capture[src-proxy-capture] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../test/helpers/temp-dir.js`
- `../config/paths.js`
- `../infra/crypto-digest.js`
- `../infra/fetch-headers.js`
- `../infra/node-sqlite.js`
- `../infra/private-mode.js`
- `../infra/resolve-system-bin.js`
- `../infra/sqlite-files.js`
- `../infra/sqlite-strict.js`
- `../infra/sqlite-transaction.js`
- `../infra/sqlite-wal.js`
- `../logging/secret-redaction-registry.js`
- `../logging/secret-redaction-registry.test-support.js`
- `../process/exec.js`
- `../state/openclaw-state-db.js`
- `./ca.js`
- `./coverage.js`
- `./env.js`
- `./paths.js`
- `./proxy-server.js`
- `./runtime.js`
- `./store.sqlite.js`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/proxyline`
- `node:buffer`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:http`
- `node:https`
- `node:net`
- `node:os`
- `node:path`
- `node:process`
- `node:string_decoder`
- `node:url`
- `node:zlib`
- `vitest`
