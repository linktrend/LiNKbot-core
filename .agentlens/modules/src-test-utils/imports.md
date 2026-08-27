# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_test_utils[src-test-utils] --> auth_profiles[auth-profiles]
    src_test_utils[src-test-utils] --> auth_profiles[auth-profiles]
    src_test_utils[src-test-utils] --> auth_profiles[auth-profiles]
    src_test_utils[src-test-utils] --> agents[agents]
    src_test_utils[src-test-utils] --> agents[agents]
    src_test_utils[src-test-utils] --> plugins[plugins]
    src_test_utils[src-test-utils] --> sessions[sessions]
    src_test_utils[src-test-utils] --> sessions[sessions]
    src_test_utils[src-test-utils] --> sessions[sessions]
    src_test_utils[src-test-utils] --> sessions[sessions]
    src_test_utils[src-test-utils] --> infra[infra]
    src_test_utils[src-test-utils] --> infra[infra]
    src_test_utils[src-test-utils] --> infra[infra]
    src_test_utils[src-test-utils] --> plugin_sdk[plugin-sdk]
    src_test_utils[src-test-utils] --> plugins[plugins]
    src_test_utils[src-test-utils] --> plugins[plugins]
    src_test_utils[src-test-utils] --> plugins[plugins]
    src_test_utils[src-test-utils] --> plugins[plugins]
    src_test_utils[src-test-utils] --> plugins[plugins]
    src_test_utils[src-test-utils] --> plugins[plugins]
    src_test_utils[src-test-utils] --> secrets[secrets]
    src_test_utils[src-test-utils] --> sessions[sessions]
    src_test_utils[src-test-utils] --> tasks[tasks]
    src_test_utils[src-test-utils] --> _[.]
    src_test_utils[src-test-utils] --> _[.]
    src_test_utils[src-test-utils] --> _[.]
    src_test_utils[src-test-utils] --> _[.]
    src_test_utils[src-test-utils] --> _[.]
    src_test_utils[src-test-utils] --> _[.]
    src_test_utils[src-test-utils] --> _[.]
    src_test_utils[src-test-utils] --> _[.]
    src_test_utils[src-test-utils] --> _[.]
    src_test_utils[src-test-utils] --> _[.]
    src_test_utils[src-test-utils] --> _[.]
    src_test_utils[src-test-utils] --> _[.]
    src_test_utils[src-test-utils] --> _openclaw[@openclaw]
    src_test_utils[src-test-utils] --> normalization_core[normalization-core]
    src_test_utils[src-test-utils] --> normalization_core[normalization-core]
    src_test_utils[src-test-utils] --> commander[commander]
    src_test_utils[src-test-utils] --> node_child_process[node:child_process]
    src_test_utils[src-test-utils] --> node_fs[node:fs]
    src_test_utils[src-test-utils] --> node_fs[node:fs]
    src_test_utils[src-test-utils] --> node_module[node:module]
    src_test_utils[src-test-utils] --> node_net[node:net]
    src_test_utils[src-test-utils] --> node_os[node:os]
    src_test_utils[src-test-utils] --> node_path[node:path]
    src_test_utils[src-test-utils] --> node_url[node:url]
    src_test_utils[src-test-utils] --> node_worker_threads[node:worker_threads]
    src_test_utils[src-test-utils] --> undici[undici]
```

## Internal Dependencies

Dependencies within this module:

- `vitest`

## External Dependencies

Dependencies from other modules:

- `../agents/auth-profiles/persisted.js`
- `../agents/auth-profiles/sqlite.js`
- `../agents/auth-profiles/store.js`
- `../agents/session-write-lock.js`
- `../agents/session-write-lock.test-support.js`
- `../channels/plugins/setup-wizard.js`
- `../config/sessions/store-cache.js`
- `../config/sessions/store-writer-state.js`
- `../config/sessions/store-writer.js`
- `../config/sessions/store.js`
- `../infra/file-lock.js`
- `../infra/shell-env.js`
- `../infra/system-run-command.js`
- `../plugin-sdk/facade-loader.js`
- `../plugins/bundled-dir.js`
- `../plugins/bundled-plugin-metadata.js`
- `../plugins/captured-registration.js`
- `../plugins/public-surface-runtime.js`
- `../plugins/registry-empty.js`
- `../plugins/sdk-alias.js`
- `../secrets/provider-env-vars.js`
- `../sessions/session-key-utils.js`
- `../tasks/task-registry.store.js`
- `./channel-plugins.js`
- `./deferred.js`
- `./env.js`
- `./exec-assertions.js`
- `./fetch-mock.js`
- `./mock-http.js`
- `./node-process.js`
- `./openclaw-test-state.js`
- `./plugin-runtime-env.js`
- `./process-tree.js`
- `./session-state-cleanup.js`
- `./temp-home.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `commander`
- `node:child_process`
- `node:fs`
- `node:fs/promises`
- `node:module`
- `node:net`
- `node:os`
- `node:path`
- `node:url`
- `node:worker_threads`
- `undici`
