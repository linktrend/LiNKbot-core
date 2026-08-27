# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_security[src-security] --> helpers[helpers]
    src_security[src-security] --> agents[agents]
    src_security[src-security] --> agents[agents]
    src_security[src-security] --> auth_profiles[auth-profiles]
    src_security[src-security] --> agents[agents]
    src_security[src-security] --> agents[agents]
    src_security[src-security] --> agents[agents]
    src_security[src-security] --> agents[agents]
    src_security[src-security] --> sandbox[sandbox]
    src_security[src-security] --> sandbox[sandbox]
    src_security[src-security] --> sandbox[sandbox]
    src_security[src-security] --> agents[agents]
    src_security[src-security] --> channels[channels]
    src_security[src-security] --> channels[channels]
    src_security[src-security] --> channels[channels]
    src_security[src-security] --> message_access[message-access]
    src_security[src-security] --> message_access[message-access]
    src_security[src-security] --> message_access[message-access]
    src_security[src-security] --> plugins[plugins]
    src_security[src-security] --> plugins[plugins]
    src_security[src-security] --> channels[channels]
    src_security[src-security] --> cli[cli]
    src_security[src-security] --> compat[compat]
    src_security[src-security] --> config[config]
    src_security[src-security] --> config[config]
    src_security[src-security] --> config[config]
    src_security[src-security] --> config[config]
    src_security[src-security] --> config[config]
    src_security[src-security] --> config[config]
    src_security[src-security] --> config[config]
    src_security[src-security] --> gateway[gateway]
    src_security[src-security] --> gateway[gateway]
    src_security[src-security] --> gateway[gateway]
    src_security[src-security] --> gateway[gateway]
    src_security[src-security] --> gateway[gateway]
    src_security[src-security] --> gateway[gateway]
    src_security[src-security] --> gateway[gateway]
    src_security[src-security] --> hooks[hooks]
    src_security[src-security] --> command_analysis[command-analysis]
    src_security[src-security] --> infra[infra]
    src_security[src-security] --> infra[infra]
    src_security[src-security] --> infra[infra]
    src_security[src-security] --> infra[infra]
    src_security[src-security] --> infra[infra]
    src_security[src-security] --> infra[infra]
    src_security[src-security] --> infra[infra]
    src_security[src-security] --> infra[infra]
    src_security[src-security] --> infra[infra]
    src_security[src-security] --> plugin_sdk[plugin-sdk]
    src_security[src-security] --> plugins[plugins]
    src_security[src-security] --> plugins[plugins]
    src_security[src-security] --> plugins[plugins]
    src_security[src-security] --> plugins[plugins]
    src_security[src-security] --> plugins[plugins]
    src_security[src-security] --> plugins[plugins]
    src_security[src-security] --> plugins[plugins]
    src_security[src-security] --> plugins[plugins]
    src_security[src-security] --> plugins[plugins]
    src_security[src-security] --> plugins[plugins]
    src_security[src-security] --> process[process]
    src_security[src-security] --> routing[routing]
    src_security[src-security] --> secrets[secrets]
    src_security[src-security] --> shared[shared]
    src_security[src-security] --> shared[shared]
    src_security[src-security] --> shared[shared]
    src_security[src-security] --> test_utils[test-utils]
    src_security[src-security] --> test_utils[test-utils]
    src_security[src-security] --> __[..]
    src_security[src-security] --> __[..]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> _[.]
    src_security[src-security] --> model_catalog_core[model-catalog-core]
    src_security[src-security] --> _openclaw[@openclaw]
    src_security[src-security] --> normalization_core[normalization-core]
    src_security[src-security] --> normalization_core[normalization-core]
    src_security[src-security] --> normalization_core[normalization-core]
    src_security[src-security] --> normalization_core[normalization-core]
    src_security[src-security] --> node_child_process[node:child_process]
    src_security[src-security] --> node_crypto[node:crypto]
    src_security[src-security] --> node_fs[node:fs]
    src_security[src-security] --> node_fs[node:fs]
    src_security[src-security] --> node_net[node:net]
    src_security[src-security] --> node_os[node:os]
    src_security[src-security] --> node_path[node:path]
    src_security[src-security] --> node_timers[node:timers]
    src_security[src-security] --> node_util[node:util]
    src_security[src-security] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../test/helpers/temp-dir.js`
- `../agents/agent-scope.js`
- `../agents/agent-tools.policy.js`
- `../agents/auth-profiles/sqlite.js`
- `../agents/defaults.js`
- `../agents/exec-defaults.js`
- `../agents/model-selection-normalize.js`
- `../agents/model-selection-shared.js`
- `../agents/sandbox/config.js`
- `../agents/sandbox/network-mode.js`
- `../agents/sandbox/validate-sandbox-security.js`
- `../agents/tool-policy-match.js`
- `../channels/account-snapshot-fields.js`
- `../channels/allow-from.js`
- `../channels/command-gating.js`
- `../channels/message-access/dm-allow-state.js`
- `../channels/message-access/effective-allow-from.js`
- `../channels/message-access/store-allow-from.js`
- `../channels/plugins/helpers.js`
- `../channels/plugins/read-only.js`
- `../channels/read-only-account-inspect.js`
- `../cli/command-format.js`
- `../compat/legacy-names.js`
- `../config/commands.js`
- `../config/config.js`
- `../config/dangerous-name-matching.js`
- `../config/includes-scan.js`
- `../config/model-input.js`
- `../config/paths.js`
- `../config/types.secrets.js`
- `../gateway/auth-config-utils.js`
- `../gateway/auth-resolve.js`
- `../gateway/auth-token-source-conflict.js`
- `../gateway/auth.js`
- `../gateway/hooks-policy.js`
- `../gateway/node-command-policy.js`
- `../gateway/probe-auth.js`
- `../hooks/configured.js`
- `../infra/command-analysis/inline-eval.js`
- `../infra/diagnostic-events.js`
- `../infra/errors.js`
- `../infra/exec-approvals.js`
- `../infra/exec-safe-bin-config.js`
- `../infra/exec-safe-bin-runtime-policy.js`
- `../infra/exec-safe-bin-semantics.js`
- `../infra/fs-safe.js`
- `../infra/package-update-utils.js`
- `../infra/parse-finite-number.js`
- `../plugin-sdk/group-access.js`
- `../plugins/config-contract-matches.js`
- `../plugins/config-contracts.js`
- `../plugins/config-normalization-shared.js`
- `../plugins/config-state.js`
- `../plugins/current-plugin-metadata-snapshot.js`
- `../plugins/installed-plugin-index-record-reader.js`
- `../plugins/installed-plugin-index-store.js`
- `../plugins/manifest-owner-policy.js`
- `../plugins/plugin-registry.js`
- `../plugins/web-search-credential-presence.js`
- `../process/exec.js`
- `../routing/session-key.js`
- `../secrets/shared.js`
- `../shared/lazy-promise.js`
- `../shared/lazy-runtime.js`
- `../shared/model-param-b.js`
- `../test-utils/env.js`
- `../test-utils/process-tree.js`
- `../utils.js`
- `../version.js`
- `./audit-channel-test-helpers.js`
- `./audit-channel.js`
- `./audit-deep-code-safety.js`
- `./audit-deep-probe-findings.js`
- `./audit-extra.async.js`
- `./audit-extra.summary.js`
- `./audit-extra.sync.js`
- `./audit-fs.js`
- `./audit-gateway-config.js`
- `./audit-mcporter-registry.js`
- `./audit-model-refs.js`
- `./audit.js`
- `./audit.test-support.js`
- `./channel-metadata.js`
- `./context-visibility.js`
- `./core-dangerous-config-flags.js`
- `./dangerous-config-flags-core.js`
- `./dangerous-config-flags-current.js`
- `./dangerous-config-flags.js`
- `./dangerous-tools.js`
- `./exec-filesystem-policy.js`
- `./external-content.js`
- `./fix.js`
- `./install-policy.js`
- `./installed-plugin-dirs.js`
- `./safe-regex.js`
- `./scan-paths.js`
- `./secret-equal.js`
- `./secret-mask.js`
- `./test-temp-cases.js`
- `./windows-acl.js`
- `@openclaw/model-catalog-core/provider-id`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `node:child_process`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:net`
- `node:os`
- `node:path`
- `node:timers`
- `node:util`
- `vitest`
