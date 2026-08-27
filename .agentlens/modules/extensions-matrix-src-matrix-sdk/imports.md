# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> __[..]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> __[..]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> __[..]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> __[..]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> __[..]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> __[..]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> _[.]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> _[.]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> _[.]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> _[.]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> _[.]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> _[.]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> _[.]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> _[.]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> _[.]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> _[.]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> _[.]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> _[.]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> _[.]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> _[.]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> _matrix_org[@matrix-org]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> _openclaw[@openclaw]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> esbuild[esbuild]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> fake_indexeddb[fake-indexeddb]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> crypto_api[crypto-api]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> crypto_api[crypto-api]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> crypto_api[crypto-api]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> crypto_api[crypto-api]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> lib[lib]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> lib[lib]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> node_events[node:events]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> node_fs[node:fs]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> node_http[node:http]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> node_module[node:module]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> node_os[node:os]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> node_path[node:path]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> node_timers[node:timers]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> node_url[node:url]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> node_util[node:util]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> plugin_sdk[plugin-sdk]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> plugin_sdk[plugin-sdk]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> plugin_sdk[plugin-sdk]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> plugin_sdk[plugin-sdk]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> plugin_sdk[plugin-sdk]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> plugin_sdk[plugin-sdk]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> plugin_sdk[plugin-sdk]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> plugin_sdk[plugin-sdk]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> plugin_sdk[plugin-sdk]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> plugin_sdk[plugin-sdk]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> plugin_sdk[plugin-sdk]
    extensions_matrix_src_matrix_sdk[extensions-matrix-src-matrix-sdk] --> vitest[vitest]
```

## Internal Dependencies

Dependencies within this module:

- `fake-indexeddb`

## External Dependencies

Dependencies from other modules:

- `../../runtime.js`
- `../../test-runtime.js`
- `../crypto-state-store.js`
- `../deps.js`
- `../errors.js`
- `../media-errors.js`
- `./crypto-bootstrap.js`
- `./crypto-facade.js`
- `./event-helpers.js`
- `./fake-indexeddb-prune.js`
- `./idb-persistence-lock.js`
- `./idb-persistence.js`
- `./idb-persistence.test-helpers.js`
- `./logger.js`
- `./read-response-with-limit.js`
- `./recovery-key-store.js`
- `./transport-runtime-api.js`
- `./transport.js`
- `./verification-manager.js`
- `./verification-status.js`
- `@matrix-org/matrix-sdk-crypto-nodejs`
- `@openclaw/normalization-core`
- `esbuild`
- `fake-indexeddb/auto`
- `matrix-js-sdk/lib/crypto-api/CryptoEvent.js`
- `matrix-js-sdk/lib/crypto-api/index.js`
- `matrix-js-sdk/lib/crypto-api/recovery-key.js`
- `matrix-js-sdk/lib/crypto-api/verification.js`
- `matrix-js-sdk/lib/matrix.js`
- `matrix-js-sdk/lib/types.js`
- `node:events`
- `node:fs`
- `node:http`
- `node:module`
- `node:os`
- `node:path`
- `node:timers/promises`
- `node:url`
- `node:util`
- `openclaw/plugin-sdk/expect-runtime`
- `openclaw/plugin-sdk/file-lock`
- `openclaw/plugin-sdk/lazy-runtime`
- `openclaw/plugin-sdk/logging-core`
- `openclaw/plugin-sdk/media-runtime`
- `openclaw/plugin-sdk/number-runtime`
- `openclaw/plugin-sdk/plugin-state-test-runtime`
- `openclaw/plugin-sdk/response-limit-runtime`
- `openclaw/plugin-sdk/runtime-fetch`
- `openclaw/plugin-sdk/ssrf-dispatcher`
- `openclaw/plugin-sdk/text-utility-runtime`
- `vitest`
