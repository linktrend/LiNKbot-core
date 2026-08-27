# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_agents_auth_profiles[src-agents-auth-profiles] --> src[src]
    src_agents_auth_profiles[src-agents-auth-profiles] --> cli[cli]
    src_agents_auth_profiles[src-agents-auth-profiles] --> config[config]
    src_agents_auth_profiles[src-agents-auth-profiles] --> config[config]
    src_agents_auth_profiles[src-agents-auth-profiles] --> config[config]
    src_agents_auth_profiles[src-agents-auth-profiles] --> sessions[sessions]
    src_agents_auth_profiles[src-agents-auth-profiles] --> config[config]
    src_agents_auth_profiles[src-agents-auth-profiles] --> infra[infra]
    src_agents_auth_profiles[src-agents-auth-profiles] --> infra[infra]
    src_agents_auth_profiles[src-agents-auth-profiles] --> infra[infra]
    src_agents_auth_profiles[src-agents-auth-profiles] --> infra[infra]
    src_agents_auth_profiles[src-agents-auth-profiles] --> infra[infra]
    src_agents_auth_profiles[src-agents-auth-profiles] --> infra[infra]
    src_agents_auth_profiles[src-agents-auth-profiles] --> infra[infra]
    src_agents_auth_profiles[src-agents-auth-profiles] --> infra[infra]
    src_agents_auth_profiles[src-agents-auth-profiles] --> llm[llm]
    src_agents_auth_profiles[src-agents-auth-profiles] --> logging[logging]
    src_agents_auth_profiles[src-agents-auth-profiles] --> logging[logging]
    src_agents_auth_profiles[src-agents-auth-profiles] --> logging[logging]
    src_agents_auth_profiles[src-agents-auth-profiles] --> logging[logging]
    src_agents_auth_profiles[src-agents-auth-profiles] --> plugin_sdk[plugin-sdk]
    src_agents_auth_profiles[src-agents-auth-profiles] --> plugins[plugins]
    src_agents_auth_profiles[src-agents-auth-profiles] --> plugins[plugins]
    src_agents_auth_profiles[src-agents-auth-profiles] --> secrets[secrets]
    src_agents_auth_profiles[src-agents-auth-profiles] --> secrets[secrets]
    src_agents_auth_profiles[src-agents-auth-profiles] --> secrets[secrets]
    src_agents_auth_profiles[src-agents-auth-profiles] --> shared[shared]
    src_agents_auth_profiles[src-agents-auth-profiles] --> shared[shared]
    src_agents_auth_profiles[src-agents-auth-profiles] --> shared[shared]
    src_agents_auth_profiles[src-agents-auth-profiles] --> state[state]
    src_agents_auth_profiles[src-agents-auth-profiles] --> state[state]
    src_agents_auth_profiles[src-agents-auth-profiles] --> test_utils[test-utils]
    src_agents_auth_profiles[src-agents-auth-profiles] --> test_utils[test-utils]
    src_agents_auth_profiles[src-agents-auth-profiles] --> __[..]
    src_agents_auth_profiles[src-agents-auth-profiles] --> utils[utils]
    src_agents_auth_profiles[src-agents-auth-profiles] --> utils[utils]
    src_agents_auth_profiles[src-agents-auth-profiles] --> __[..]
    src_agents_auth_profiles[src-agents-auth-profiles] --> __[..]
    src_agents_auth_profiles[src-agents-auth-profiles] --> auth_profiles[auth-profiles]
    src_agents_auth_profiles[src-agents-auth-profiles] --> auth_profiles[auth-profiles]
    src_agents_auth_profiles[src-agents-auth-profiles] --> auth_profiles[auth-profiles]
    src_agents_auth_profiles[src-agents-auth-profiles] --> __[..]
    src_agents_auth_profiles[src-agents-auth-profiles] --> __[..]
    src_agents_auth_profiles[src-agents-auth-profiles] --> __[..]
    src_agents_auth_profiles[src-agents-auth-profiles] --> __[..]
    src_agents_auth_profiles[src-agents-auth-profiles] --> __[..]
    src_agents_auth_profiles[src-agents-auth-profiles] --> __[..]
    src_agents_auth_profiles[src-agents-auth-profiles] --> __[..]
    src_agents_auth_profiles[src-agents-auth-profiles] --> __[..]
    src_agents_auth_profiles[src-agents-auth-profiles] --> __[..]
    src_agents_auth_profiles[src-agents-auth-profiles] --> __[..]
    src_agents_auth_profiles[src-agents-auth-profiles] --> __[..]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _[.]
    src_agents_auth_profiles[src-agents-auth-profiles] --> model_catalog_core[model-catalog-core]
    src_agents_auth_profiles[src-agents-auth-profiles] --> _openclaw[@openclaw]
    src_agents_auth_profiles[src-agents-auth-profiles] --> normalization_core[normalization-core]
    src_agents_auth_profiles[src-agents-auth-profiles] --> normalization_core[normalization-core]
    src_agents_auth_profiles[src-agents-auth-profiles] --> normalization_core[normalization-core]
    src_agents_auth_profiles[src-agents-auth-profiles] --> normalization_core[normalization-core]
    src_agents_auth_profiles[src-agents-auth-profiles] --> node_fs[node:fs]
    src_agents_auth_profiles[src-agents-auth-profiles] --> node_fs[node:fs]
    src_agents_auth_profiles[src-agents-auth-profiles] --> node_http[node:http]
    src_agents_auth_profiles[src-agents-auth-profiles] --> node_os[node:os]
    src_agents_auth_profiles[src-agents-auth-profiles] --> node_path[node:path]
    src_agents_auth_profiles[src-agents-auth-profiles] --> node_util[node:util]
    src_agents_auth_profiles[src-agents-auth-profiles] --> plugin_sdk[plugin-sdk]
    src_agents_auth_profiles[src-agents-auth-profiles] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/terminal-core/src/ansi.js`
- `../../cli/command-format.js`
- `../../config/config.js`
- `../../config/model-input.js`
- `../../config/paths.js`
- `../../config/sessions/session-accessor.js`
- `../../config/types.secrets.js`
- `../../infra/crypto-digest.js`
- `../../infra/errors.js`
- `../../infra/file-lock.js`
- `../../infra/json-file.js`
- `../../infra/kysely-sync.js`
- `../../infra/node-sqlite.js`
- `../../infra/sqlite-files.js`
- `../../infra/sqlite-user-version.js`
- `../../llm/oauth.js`
- `../../logging/logger.js`
- `../../logging/redact-identifier.js`
- `../../logging/redact.js`
- `../../logging/subsystem.js`
- `../../plugin-sdk/github-copilot-domain.js`
- `../../plugins/provider-runtime.js`
- `../../plugins/provider-runtime.runtime.js`
- `../../secrets/ref-contract.js`
- `../../secrets/runtime-auth-profile-owner.js`
- `../../secrets/runtime-degraded-state.js`
- `../../shared/lazy-promise.js`
- `../../shared/markdown-code.js`
- `../../shared/number-coercion.js`
- `../../state/openclaw-agent-db.js`
- `../../state/openclaw-state-db.js`
- `../../test-utils/env.js`
- `../../test-utils/openclaw-test-state.js`
- `../../utils.js`
- `../../utils/boolean.js`
- `../../utils/normalize-secret-input.js`
- `../agent-dir-registry.js`
- `../agent-scope-config.js`
- `../auth-profiles/order.js`
- `../auth-profiles/store.js`
- `../auth-profiles/usage.js`
- `../chutes-oauth.js`
- `../cli-credentials.js`
- `../console-sanitize.js`
- `../failover-error.js`
- `../model-auth-markers.js`
- `../model-runtime-aliases.js`
- `../provider-auth-aliases.js`
- `../provider-auth-aliases.test-support.js`
- `../provider-auth-recovery-hint.js`
- `../provider-http-errors.js`
- `../provider-request-config.js`
- `./clone.js`
- `./constants.js`
- `./credential-normalize.js`
- `./credential-state.js`
- `./display.js`
- `./doctor.js`
- `./effective-oauth.js`
- `./external-auth.js`
- `./external-auth.test-support.js`
- `./external-cli-scope.js`
- `./external-cli-sync.js`
- `./failure-copy.js`
- `./failure-hook.js`
- `./identity.js`
- `./legacy-oauth-ref.js`
- `./oauth-common-mocks.test-support.js`
- `./oauth-external-auth-passthrough.test-support.js`
- `./oauth-file-lock-passthrough.test-support.js`
- `./oauth-identity.js`
- `./oauth-manager.js`
- `./oauth-refresh-failure.js`
- `./oauth-refresh-lock-errors.js`
- `./oauth-shared.js`
- `./oauth-test-utils.js`
- `./oauth.js`
- `./oauth.test-support.js`
- `./order.js`
- `./path-constants.js`
- `./path-resolve.js`
- `./paths.js`
- `./persisted.js`
- `./policy.js`
- `./portability.js`
- `./profile-list.js`
- `./profiles.js`
- `./read-only-availability.js`
- `./repair.js`
- `./runtime-snapshots.js`
- `./runtime-snapshots.test-support.js`
- `./session-override.js`
- `./source-check.js`
- `./sqlite.js`
- `./state-observation.js`
- `./state.js`
- `./store.js`
- `./store.test-support.js`
- `./usage-state.js`
- `./usage.js`
- `./usage.test-support.js`
- `@openclaw/model-catalog-core/provider-id`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `node:fs`
- `node:fs/promises`
- `node:http`
- `node:os`
- `node:path`
- `node:util`
- `openclaw/plugin-sdk/keyed-async-queue`
- `vitest`
