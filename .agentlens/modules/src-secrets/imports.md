# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_secrets[src-secrets] --> src[src]
    src_secrets[src-secrets] --> paci_fake[paci-fake]
    src_secrets[src-secrets] --> helpers[helpers]
    src_secrets[src-secrets] --> helpers[helpers]
    src_secrets[src-secrets] --> agents[agents]
    src_secrets[src-secrets] --> agents[agents]
    src_secrets[src-secrets] --> agents[agents]
    src_secrets[src-secrets] --> agents[agents]
    src_secrets[src-secrets] --> auth_profiles[auth-profiles]
    src_secrets[src-secrets] --> auth_profiles[auth-profiles]
    src_secrets[src-secrets] --> auth_profiles[auth-profiles]
    src_secrets[src-secrets] --> auth_profiles[auth-profiles]
    src_secrets[src-secrets] --> auth_profiles[auth-profiles]
    src_secrets[src-secrets] --> auth_profiles[auth-profiles]
    src_secrets[src-secrets] --> auth_profiles[auth-profiles]
    src_secrets[src-secrets] --> auth_profiles[auth-profiles]
    src_secrets[src-secrets] --> auth_profiles[auth-profiles]
    src_secrets[src-secrets] --> auth_profiles[auth-profiles]
    src_secrets[src-secrets] --> auth_profiles[auth-profiles]
    src_secrets[src-secrets] --> agents[agents]
    src_secrets[src-secrets] --> agents[agents]
    src_secrets[src-secrets] --> agents[agents]
    src_secrets[src-secrets] --> agents[agents]
    src_secrets[src-secrets] --> agents[agents]
    src_secrets[src-secrets] --> sandbox[sandbox]
    src_secrets[src-secrets] --> sandbox[sandbox]
    src_secrets[src-secrets] --> agents[agents]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> config[config]
    src_secrets[src-secrets] --> config[config]
    src_secrets[src-secrets] --> config[config]
    src_secrets[src-secrets] --> config[config]
    src_secrets[src-secrets] --> config[config]
    src_secrets[src-secrets] --> config[config]
    src_secrets[src-secrets] --> config[config]
    src_secrets[src-secrets] --> config[config]
    src_secrets[src-secrets] --> gateway[gateway]
    src_secrets[src-secrets] --> gateway[gateway]
    src_secrets[src-secrets] --> infra[infra]
    src_secrets[src-secrets] --> infra[infra]
    src_secrets[src-secrets] --> infra[infra]
    src_secrets[src-secrets] --> infra[infra]
    src_secrets[src-secrets] --> infra[infra]
    src_secrets[src-secrets] --> infra[infra]
    src_secrets[src-secrets] --> infra[infra]
    src_secrets[src-secrets] --> infra[infra]
    src_secrets[src-secrets] --> logging[logging]
    src_secrets[src-secrets] --> logging[logging]
    src_secrets[src-secrets] --> logging[logging]
    src_secrets[src-secrets] --> media_understanding[media-understanding]
    src_secrets[src-secrets] --> media_understanding[media-understanding]
    src_secrets[src-secrets] --> plugin_sdk[plugin-sdk]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> test_helpers[test-helpers]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> plugins[plugins]
    src_secrets[src-secrets] --> process[process]
    src_secrets[src-secrets] --> routing[routing]
    src_secrets[src-secrets] --> routing[routing]
    src_secrets[src-secrets] --> security[security]
    src_secrets[src-secrets] --> security[security]
    src_secrets[src-secrets] --> shared[shared]
    src_secrets[src-secrets] --> shared[shared]
    src_secrets[src-secrets] --> shared[shared]
    src_secrets[src-secrets] --> shared[shared]
    src_secrets[src-secrets] --> shared[shared]
    src_secrets[src-secrets] --> state[state]
    src_secrets[src-secrets] --> test_helpers[test-helpers]
    src_secrets[src-secrets] --> test_utils[test-utils]
    src_secrets[src-secrets] --> test_utils[test-utils]
    src_secrets[src-secrets] --> test_utils[test-utils]
    src_secrets[src-secrets] --> test_utils[test-utils]
    src_secrets[src-secrets] --> test_utils[test-utils]
    src_secrets[src-secrets] --> __[..]
    src_secrets[src-secrets] --> utils[utils]
    src_secrets[src-secrets] --> utils[utils]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _[.]
    src_secrets[src-secrets] --> _clack[@clack]
    src_secrets[src-secrets] --> model_catalog_core[model-catalog-core]
    src_secrets[src-secrets] --> _openclaw[@openclaw]
    src_secrets[src-secrets] --> normalization_core[normalization-core]
    src_secrets[src-secrets] --> normalization_core[normalization-core]
    src_secrets[src-secrets] --> normalization_core[normalization-core]
    src_secrets[src-secrets] --> node_crypto[node:crypto]
    src_secrets[src-secrets] --> node_fs[node:fs]
    src_secrets[src-secrets] --> node_fs[node:fs]
    src_secrets[src-secrets] --> node_os[node:os]
    src_secrets[src-secrets] --> node_path[node:path]
    src_secrets[src-secrets] --> node_url[node:url]
    src_secrets[src-secrets] --> node_util[node:util]
    src_secrets[src-secrets] --> typebox[typebox]
    src_secrets[src-secrets] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../packages/gateway-protocol/src/schema.js`
- `../../test/helpers/paci-fake/keys.js`
- `../../test/helpers/temp-dir.js`
- `../../test/helpers/temp-dir.ts`
- `../agents/agent-dir-registry.js`
- `../agents/agent-scope-config.js`
- `../agents/agent-scope.js`
- `../agents/auth-profiles.js`
- `../agents/auth-profiles/constants.js`
- `../agents/auth-profiles/order.js`
- `../agents/auth-profiles/path-constants.js`
- `../agents/auth-profiles/paths.js`
- `../agents/auth-profiles/persisted.js`
- `../agents/auth-profiles/policy.js`
- `../agents/auth-profiles/runtime-snapshots.js`
- `../agents/auth-profiles/runtime-snapshots.test-support.js`
- `../agents/auth-profiles/sqlite.js`
- `../agents/auth-profiles/store.js`
- `../agents/auth-profiles/store.test-support.js`
- `../agents/machine-token-host.js`
- `../agents/machine-token.js`
- `../agents/model-auth-markers.js`
- `../agents/model-selection.js`
- `../agents/provider-auth-aliases.js`
- `../agents/sandbox/config.js`
- `../agents/sandbox/sanitize-env-vars.js`
- `../agents/stable-stringify.js`
- `../channels/plugins/bootstrap-registry.js`
- `../config/bundled-channel-config-metadata.generated.js`
- `../config/config.js`
- `../config/home-env.test-harness.js`
- `../config/paths.js`
- `../config/runtime-snapshot.js`
- `../config/types.secrets.js`
- `../config/validation.js`
- `../config/zod-schema.core.js`
- `../gateway/credential-planner.js`
- `../gateway/resolve-configured-secret-input-string.js`
- `../infra/boundary-file-read.js`
- `../infra/errors.js`
- `../infra/exec-safety.js`
- `../infra/fs-safe.js`
- `../infra/parse-finite-number.js`
- `../infra/private-file-store.js`
- `../infra/prototype-keys.js`
- `../infra/replace-file.js`
- `../logging/redact.js`
- `../logging/secret-redaction-registry.js`
- `../logging/secret-redaction-registry.test-support.js`
- `../media-understanding/entry-capabilities.js`
- `../media-understanding/provider-capability-registry.js`
- `../plugin-sdk/secret-input-schema.js`
- `../plugins/bundled-plugin-metadata.js`
- `../plugins/config-contracts.js`
- `../plugins/config-state.js`
- `../plugins/current-plugin-metadata-snapshot.js`
- `../plugins/hardlink-policy.js`
- `../plugins/installed-plugin-index-records.js`
- `../plugins/installed-plugin-index.js`
- `../plugins/loader-shared.js`
- `../plugins/loader.test-fixtures.js`
- `../plugins/manifest-owner-policy.js`
- `../plugins/manifest-registry.js`
- `../plugins/plugin-config-trust.js`
- `../plugins/plugin-metadata-snapshot.js`
- `../plugins/plugin-module-loader-cache.js`
- `../plugins/plugin-registry.js`
- `../plugins/public-surface-loader.js`
- `../plugins/registry-empty.js`
- `../plugins/runtime.js`
- `../plugins/setup-descriptors.js`
- `../plugins/slots.js`
- `../plugins/test-helpers/fs-fixtures.js`
- `../plugins/web-fetch-providers.runtime.js`
- `../plugins/web-fetch-providers.shared.js`
- `../plugins/web-provider-public-artifacts.explicit.js`
- `../plugins/web-search-providers.runtime.js`
- `../plugins/web-search-providers.shared.js`
- `../process/exec.js`
- `../routing/account-id.js`
- `../routing/session-key.js`
- `../security/audit-fs.js`
- `../security/scan-paths.js`
- `../shared/env-var-candidates.js`
- `../shared/lazy-promise.js`
- `../shared/lazy-runtime.js`
- `../shared/number-coercion.js`
- `../shared/path-array-index.js`
- `../state/openclaw-agent-db.js`
- `../test-helpers/temp-dir.js`
- `../test-utils/env.js`
- `../test-utils/process-tree.js`
- `../test-utils/secret-ref-test-vectors.js`
- `../test-utils/talk-test-provider.js`
- `../test-utils/vitest-spies.js`
- `../utils.js`
- `../utils/normalize-secret-input.js`
- `../utils/run-with-concurrency.js`
- `./apply.js`
- `./audit.js`
- `./auth-profiles-scan.js`
- `./auth-store-paths.js`
- `./channel-contract-api.js`
- `./command-config.js`
- `./config-io.js`
- `./configure-plan.js`
- `./credential-matrix.js`
- `./exec-resolution-policy.js`
- `./json-pointer.js`
- `./model-provider-header-policy.js`
- `./path-utils.js`
- `./plan.js`
- `./provider-env-vars.js`
- `./provider-integrations.js`
- `./ref-contract.js`
- `./resolve-errors.js`
- `./resolve.js`
- `./runtime-assignment-provenance.js`
- `./runtime-auth-profile-owner.js`
- `./runtime-auth.integration.test-helpers.js`
- `./runtime-channel-inactive-variants.test-support.ts`
- `./runtime-command-secrets.js`
- `./runtime-config-collectors-channels.js`
- `./runtime-config-collectors-core.js`
- `./runtime-config-collectors-memory.js`
- `./runtime-config-collectors-plugins.js`
- `./runtime-config-collectors-sandbox.js`
- `./runtime-config-collectors-tts.js`
- `./runtime-degraded-state.js`
- `./runtime-discord.test-support.ts`
- `./runtime-fast-path.js`
- `./runtime-gateway-auth-surfaces.js`
- `./runtime-matrix.test-support.ts`
- `./runtime-media-secret-owner.js`
- `./runtime-memory-secret-owner.js`
- `./runtime-nextcloud-talk.test-support.ts`
- `./runtime-owner-assignments.js`
- `./runtime-owner-contract.js`
- `./runtime-provider-auth-activation.js`
- `./runtime-provider-auth-warnings.js`
- `./runtime-sandbox-secret-owner.js`
- `./runtime-secret-scan.js`
- `./runtime-shared.js`
- `./runtime-state.js`
- `./runtime-telegram.test-support.ts`
- `./runtime-warning-log.js`
- `./runtime-web-secret-owner.js`
- `./runtime-web-tools-selection.types.js`
- `./runtime-web-tools-state.js`
- `./runtime-web-tools.js`
- `./runtime-web-tools.shared.js`
- `./runtime-zalo.test-support.ts`
- `./runtime.integration.test-helpers.js`
- `./runtime.js`
- `./runtime.test-support.js`
- `./runtime.test-support.ts`
- `./secret-value.js`
- `./sentinel.js`
- `./shared.js`
- `./storage-scan.js`
- `./target-registry-data.js`
- `./target-registry-pattern.js`
- `./target-registry.js`
- `./unsupported-surface-policy.js`
- `@clack/prompts`
- `@openclaw/model-catalog-core/provider-id`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:url`
- `node:util`
- `typebox/compile`
- `vitest`
