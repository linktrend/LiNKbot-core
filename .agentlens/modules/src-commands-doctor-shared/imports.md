# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_commands_doctor_shared[src-commands-doctor-shared] --> src[src]
    src_commands_doctor_shared[src-commands-doctor-shared] --> src[src]
    src_commands_doctor_shared[src-commands-doctor-shared] --> src[src]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> auth_profiles[auth-profiles]
    src_commands_doctor_shared[src-commands-doctor-shared] --> auth_profiles[auth-profiles]
    src_commands_doctor_shared[src-commands-doctor-shared] --> auth_profiles[auth-profiles]
    src_commands_doctor_shared[src-commands-doctor-shared] --> auth_profiles[auth-profiles]
    src_commands_doctor_shared[src-commands-doctor-shared] --> auth_profiles[auth-profiles]
    src_commands_doctor_shared[src-commands-doctor-shared] --> auth_profiles[auth-profiles]
    src_commands_doctor_shared[src-commands-doctor-shared] --> auth_profiles[auth-profiles]
    src_commands_doctor_shared[src-commands-doctor-shared] --> auth_profiles[auth-profiles]
    src_commands_doctor_shared[src-commands-doctor-shared] --> auth_profiles[auth-profiles]
    src_commands_doctor_shared[src-commands-doctor-shared] --> auth_profiles[auth-profiles]
    src_commands_doctor_shared[src-commands-doctor-shared] --> auth_profiles[auth-profiles]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> embedded_agent_runner[embedded-agent-runner]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> harness[harness]
    src_commands_doctor_shared[src-commands-doctor-shared] --> harness[harness]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> runtime_plan[runtime-plan]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> agents[agents]
    src_commands_doctor_shared[src-commands-doctor-shared] --> channels[channels]
    src_commands_doctor_shared[src-commands-doctor-shared] --> channels[channels]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> channels[channels]
    src_commands_doctor_shared[src-commands-doctor-shared] --> cli[cli]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> sessions[sessions]
    src_commands_doctor_shared[src-commands-doctor-shared] --> sessions[sessions]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> config[config]
    src_commands_doctor_shared[src-commands-doctor-shared] --> context_engine[context-engine]
    src_commands_doctor_shared[src-commands-doctor-shared] --> context_engine[context-engine]
    src_commands_doctor_shared[src-commands-doctor-shared] --> context_engine[context-engine]
    src_commands_doctor_shared[src-commands-doctor-shared] --> gateway[gateway]
    src_commands_doctor_shared[src-commands-doctor-shared] --> gateway[gateway]
    src_commands_doctor_shared[src-commands-doctor-shared] --> infra[infra]
    src_commands_doctor_shared[src-commands-doctor-shared] --> infra[infra]
    src_commands_doctor_shared[src-commands-doctor-shared] --> infra[infra]
    src_commands_doctor_shared[src-commands-doctor-shared] --> infra[infra]
    src_commands_doctor_shared[src-commands-doctor-shared] --> infra[infra]
    src_commands_doctor_shared[src-commands-doctor-shared] --> infra[infra]
    src_commands_doctor_shared[src-commands-doctor-shared] --> infra[infra]
    src_commands_doctor_shared[src-commands-doctor-shared] --> infra[infra]
    src_commands_doctor_shared[src-commands-doctor-shared] --> infra[infra]
    src_commands_doctor_shared[src-commands-doctor-shared] --> infra[infra]
    src_commands_doctor_shared[src-commands-doctor-shared] --> infra[infra]
    src_commands_doctor_shared[src-commands-doctor-shared] --> infra[infra]
    src_commands_doctor_shared[src-commands-doctor-shared] --> infra[infra]
    src_commands_doctor_shared[src-commands-doctor-shared] --> infra[infra]
    src_commands_doctor_shared[src-commands-doctor-shared] --> infra[infra]
    src_commands_doctor_shared[src-commands-doctor-shared] --> infra[infra]
    src_commands_doctor_shared[src-commands-doctor-shared] --> infra[infra]
    src_commands_doctor_shared[src-commands-doctor-shared] --> logging[logging]
    src_commands_doctor_shared[src-commands-doctor-shared] --> logging[logging]
    src_commands_doctor_shared[src-commands-doctor-shared] --> pairing[pairing]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugin_sdk[plugin-sdk]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> runtime[runtime]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> test_helpers[test-helpers]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugins[plugins]
    src_commands_doctor_shared[src-commands-doctor-shared] --> routing[routing]
    src_commands_doctor_shared[src-commands-doctor-shared] --> routing[routing]
    src_commands_doctor_shared[src-commands-doctor-shared] --> routing[routing]
    src_commands_doctor_shared[src-commands-doctor-shared] --> secrets[secrets]
    src_commands_doctor_shared[src-commands-doctor-shared] --> secrets[secrets]
    src_commands_doctor_shared[src-commands-doctor-shared] --> sessions[sessions]
    src_commands_doctor_shared[src-commands-doctor-shared] --> shared[shared]
    src_commands_doctor_shared[src-commands-doctor-shared] --> state[state]
    src_commands_doctor_shared[src-commands-doctor-shared] --> state[state]
    src_commands_doctor_shared[src-commands-doctor-shared] --> test_utils[test-utils]
    src_commands_doctor_shared[src-commands-doctor-shared] --> test_utils[test-utils]
    src_commands_doctor_shared[src-commands-doctor-shared] --> test_utils[test-utils]
    src_commands_doctor_shared[src-commands-doctor-shared] --> test_utils[test-utils]
    src_commands_doctor_shared[src-commands-doctor-shared] --> __[..]
    src_commands_doctor_shared[src-commands-doctor-shared] --> __[..]
    src_commands_doctor_shared[src-commands-doctor-shared] --> __[..]
    src_commands_doctor_shared[src-commands-doctor-shared] --> __[..]
    src_commands_doctor_shared[src-commands-doctor-shared] --> __[..]
    src_commands_doctor_shared[src-commands-doctor-shared] --> __[..]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _[.]
    src_commands_doctor_shared[src-commands-doctor-shared] --> model_catalog_core[model-catalog-core]
    src_commands_doctor_shared[src-commands-doctor-shared] --> model_catalog_core[model-catalog-core]
    src_commands_doctor_shared[src-commands-doctor-shared] --> model_catalog_core[model-catalog-core]
    src_commands_doctor_shared[src-commands-doctor-shared] --> _openclaw[@openclaw]
    src_commands_doctor_shared[src-commands-doctor-shared] --> normalization_core[normalization-core]
    src_commands_doctor_shared[src-commands-doctor-shared] --> normalization_core[normalization-core]
    src_commands_doctor_shared[src-commands-doctor-shared] --> normalization_core[normalization-core]
    src_commands_doctor_shared[src-commands-doctor-shared] --> node_child_process[node:child_process]
    src_commands_doctor_shared[src-commands-doctor-shared] --> node_crypto[node:crypto]
    src_commands_doctor_shared[src-commands-doctor-shared] --> node_fs[node:fs]
    src_commands_doctor_shared[src-commands-doctor-shared] --> node_fs[node:fs]
    src_commands_doctor_shared[src-commands-doctor-shared] --> node_os[node:os]
    src_commands_doctor_shared[src-commands-doctor-shared] --> node_path[node:path]
    src_commands_doctor_shared[src-commands-doctor-shared] --> node_sqlite[node:sqlite]
    src_commands_doctor_shared[src-commands-doctor-shared] --> node_util[node:util]
    src_commands_doctor_shared[src-commands-doctor-shared] --> plugin_sdk[plugin-sdk]
    src_commands_doctor_shared[src-commands-doctor-shared] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../../packages/terminal-core/src/ansi.js`
- `../../../../packages/terminal-core/src/note.js`
- `../../../../packages/terminal-core/src/safe-text.js`
- `../../../agents/agent-bundle-mcp-names.js`
- `../../../agents/agent-runtime-id.js`
- `../../../agents/agent-scope-config.js`
- `../../../agents/agent-scope.js`
- `../../../agents/agent-tools.js`
- `../../../agents/auth-health.js`
- `../../../agents/auth-profiles/constants.js`
- `../../../agents/auth-profiles/external-auth.js`
- `../../../agents/auth-profiles/external-auth.test-support.js`
- `../../../agents/auth-profiles/legacy-oauth-ref.js`
- `../../../agents/auth-profiles/oauth-shared.js`
- `../../../agents/auth-profiles/order.js`
- `../../../agents/auth-profiles/paths.js`
- `../../../agents/auth-profiles/persisted.js`
- `../../../agents/auth-profiles/sqlite.js`
- `../../../agents/auth-profiles/state.js`
- `../../../agents/auth-profiles/store.js`
- `../../../agents/cli-backends.js`
- `../../../agents/configured-provider-fallback.js`
- `../../../agents/defaults.js`
- `../../../agents/embedded-agent-runner/model.js`
- `../../../agents/glob-pattern.js`
- `../../../agents/harness-runtimes.js`
- `../../../agents/harness/policy.js`
- `../../../agents/harness/registry.js`
- `../../../agents/model-ref-profile.js`
- `../../../agents/model-ref-shared.js`
- `../../../agents/model-runtime-policy.js`
- `../../../agents/model-selection-normalize.js`
- `../../../agents/model-selection.js`
- `../../../agents/model-visibility-policy.js`
- `../../../agents/provider-auth-aliases.js`
- `../../../agents/provider-auth-aliases.test-support.js`
- `../../../agents/provider-tool-policy.js`
- `../../../agents/runtime-plan/tools.js`
- `../../../agents/sandbox-tool-policy.js`
- `../../../agents/tool-catalog.js`
- `../../../agents/tool-policy-match.js`
- `../../../agents/tool-policy-shared.js`
- `../../../agents/tool-policy.js`
- `../../../agents/tool-schema-projection.js`
- `../../../agents/tools-effective-inventory-build.js`
- `../../../channels/config-presence.js`
- `../../../channels/ids.js`
- `../../../channels/plugins/bootstrap-registry.js`
- `../../../channels/plugins/bundled.js`
- `../../../channels/plugins/catalog.js`
- `../../../channels/plugins/dm-access.js`
- `../../../channels/plugins/doctor-contract-api.js`
- `../../../channels/plugins/legacy-config.js`
- `../../../channels/plugins/read-only.js`
- `../../../channels/plugins/registry.js`
- `../../../channels/plugins/setup-promotion-helpers.js`
- `../../../channels/registry.js`
- `../../../cli/parse-duration.js`
- `../../../config/bindings.js`
- `../../../config/bundled-channel-config-metadata.generated.js`
- `../../../config/channel-configured.js`
- `../../../config/codex-plugin-diagnostics.js`
- `../../../config/defaults.js`
- `../../../config/gateway-control-ui-origins.js`
- `../../../config/issue-format.js`
- `../../../config/legacy.js`
- `../../../config/legacy.shared.js`
- `../../../config/mcp-config-normalize.js`
- `../../../config/model-input.js`
- `../../../config/model-policy-allowlist-migration.js`
- `../../../config/paths.js`
- `../../../config/plugin-auto-enable.js`
- `../../../config/plugin-install-config-migration.js`
- `../../../config/sessions/store.js`
- `../../../config/sessions/targets.js`
- `../../../config/talk.js`
- `../../../config/types.models.js`
- `../../../config/types.secrets.js`
- `../../../config/types.tools.js`
- `../../../config/validation.js`
- `../../../config/version.js`
- `../../../context-engine/host-compat.js`
- `../../../context-engine/init.js`
- `../../../context-engine/registry.js`
- `../../../gateway/auth-config-utils.js`
- `../../../gateway/auth.js`
- `../../../infra/clawhub-spec.js`
- `../../../infra/env.js`
- `../../../infra/errors.js`
- `../../../infra/exec-command-resolution.js`
- `../../../infra/exec-safe-bin-config.js`
- `../../../infra/exec-safe-bin-runtime-policy.js`
- `../../../infra/exec-safe-bin-semantics.js`
- `../../../infra/exec-safe-bin-trust.js`
- `../../../infra/google-api-base-url.js`
- `../../../infra/home-dir.js`
- `../../../infra/json-file.js`
- `../../../infra/json-files.js`
- `../../../infra/npm-registry-spec.js`
- `../../../infra/openclaw-root.js`
- `../../../infra/prototype-keys.js`
- `../../../infra/update-channels.js`
- `../../../infra/update-doctor-result.js`
- `../../../logging/logger.js`
- `../../../logging/state.js`
- `../../../pairing/pairing-store.js`
- `../../../plugin-sdk/windows-spawn.js`
- `../../../plugins/bundled-load-path-aliases.js`
- `../../../plugins/bundled-plugin-startup-metadata.js`
- `../../../plugins/bundled-sources.js`
- `../../../plugins/channel-plugin-ids.js`
- `../../../plugins/clawhub-error-codes.js`
- `../../../plugins/clawhub-install-records.js`
- `../../../plugins/clawhub.js`
- `../../../plugins/config-state.js`
- `../../../plugins/default-enablement.js`
- `../../../plugins/doctor-contract-registry.js`
- `../../../plugins/embedding-provider-config.js`
- `../../../plugins/gateway-startup-plugin-ids.js`
- `../../../plugins/gateway-startup-speech-providers.js`
- `../../../plugins/install-channel-specs.js`
- `../../../plugins/install-paths.js`
- `../../../plugins/install.js`
- `../../../plugins/installed-plugin-index-record-reader.js`
- `../../../plugins/installed-plugin-index-records.js`
- `../../../plugins/installed-plugin-index-store.js`
- `../../../plugins/installed-plugin-index.js`
- `../../../plugins/installs.js`
- `../../../plugins/legacy-npm-declaration.js`
- `../../../plugins/manifest-contract-eligibility.js`
- `../../../plugins/manifest-owner-policy.js`
- `../../../plugins/manifest-registry-installed.js`
- `../../../plugins/official-external-plugin-catalog.js`
- `../../../plugins/official-external-plugin-targets.js`
- `../../../plugins/plugin-metadata-snapshot.js`
- `../../../plugins/plugin-registry.js`
- `../../../plugins/provider-install-catalog.js`
- `../../../plugins/provider-model-compat.js`
- `../../../plugins/runtime/runtime-registry-loader.js`
- `../../../plugins/setup-registry.js`
- `../../../plugins/slots.js`
- `../../../plugins/test-helpers/fs-fixtures.js`
- `../../../plugins/tools.js`
- `../../../plugins/update.js`
- `../../../plugins/web-search-install-catalog.js`
- `../../../routing/channel-route-targets.js`
- `../../../routing/default-account-warnings.js`
- `../../../routing/session-key.js`
- `../../../secrets/channel-env-var-names.js`
- `../../../secrets/legacy-secretref-env-marker.js`
- `../../../sessions/agent-harness-session-key.js`
- `../../../shared/lazy-promise.js`
- `../../../state/openclaw-agent-db.js`
- `../../../state/openclaw-state-db.js`
- `../../../test-utils/env.js`
- `../../../test-utils/fs-scan-assertions.js`
- `../../../test-utils/openclaw-test-state.js`
- `../../../test-utils/repo-files.js`
- `../../../utils.js`
- `../../../version.js`
- `../../doctor-auth-profile-config.js`
- `../../doctor-config-analysis.js`
- `../../random-token.js`
- `../channel-capabilities.js`
- `./allow-from-mode.js`
- `./allowfrom-fallback-migration.js`
- `./allowlist-policy-repair.js`
- `./allowlist.js`
- `./bundled-plugin-load-paths.js`
- `./channel-doctor.js`
- `./channel-legacy-config-migrate.js`
- `./channel-plugin-blockers.js`
- `./codex-native-assets.js`
- `./codex-native-assets.test-support.js`
- `./codex-route-compaction-repair.js`
- `./codex-route-compaction-scan.js`
- `./codex-route-config-repair.js`
- `./codex-route-config-scan.js`
- `./codex-route-model-ref.js`
- `./codex-route-model-slots.js`
- `./codex-route-runtime-policy.js`
- `./codex-route-session-repair.js`
- `./codex-route-session-repair.test-support.js`
- `./codex-route-warnings.js`
- `./config-flow-steps.js`
- `./config-mutation-state.js`
- `./configured-provider-plugin-ids.js`
- `./configured-provider-plugin-installs.js`
- `./configured-provider-selection-ids.js`
- `./configured-runtime-plugin-installs.js`
- `./context-engine-host-compat.js`
- `./deprecation-compat.js`
- `./empty-allowlist-policy.js`
- `./empty-allowlist-scan.js`
- `./exec-safe-bins.js`
- `./hooks-token-reuse-repair.js`
- `./legacy-config-binding-repair.js`
- `./legacy-config-compat.js`
- `./legacy-config-compatibility-base.js`
- `./legacy-config-core-normalizers.js`
- `./legacy-config-migrate.js`
- `./legacy-config-migrations.audio.js`
- `./legacy-config-migrations.channels.js`
- `./legacy-config-migrations.js`
- `./legacy-config-migrations.queue.js`
- `./legacy-config-migrations.runtime.agents.js`
- `./legacy-config-migrations.runtime.cron.js`
- `./legacy-config-migrations.runtime.diagnostics.js`
- `./legacy-config-migrations.runtime.gateway.js`
- `./legacy-config-migrations.runtime.js`
- `./legacy-config-migrations.runtime.mcp.js`
- `./legacy-config-migrations.runtime.models.js`
- `./legacy-config-migrations.runtime.providers.js`
- `./legacy-config-migrations.runtime.retired.js`
- `./legacy-config-migrations.runtime.session.js`
- `./legacy-config-migrations.runtime.system-agent.js`
- `./legacy-config-migrations.runtime.tts.js`
- `./legacy-config-migrations.web-search.js`
- `./legacy-config-record-shared.js`
- `./legacy-models-add-metadata.js`
- `./legacy-oauth-sidecar.js`
- `./legacy-oauth-sidecar.test-support.js`
- `./legacy-runtime-model-providers.js`
- `./legacy-talk-config-normalizer.js`
- `./legacy-tools-by-sender.js`
- `./legacy-web-fetch-migrate.js`
- `./legacy-web-search-migrate.js`
- `./legacy-x-search-migrate.js`
- `./missing-configured-plugin-install.js`
- `./object.js`
- `./open-policy-allowfrom.js`
- `./plugin-dependency-cleanup.js`
- `./plugin-dependency-cleanup.test-support.js`
- `./plugin-registry-migration.js`
- `./plugin-runtime-symlinks.js`
- `./plugin-tool-allowlist-warnings.js`
- `./preview-warnings.js`
- `./primary-model-ref.js`
- `./pristine-startup-state.js`
- `./release-configured-plugin-installs.js`
- `./stale-auth-order.js`
- `./stale-auth-order.test-support.js`
- `./stale-oauth-profile-shadows.js`
- `./stale-oauth-profile-shadows.test-support.js`
- `./stale-plugin-config.js`
- `./stale-plugin-repair-preservation.js`
- `./stale-subagent-allowlist.js`
- `./startup-plugin-convergence-plan.js`
- `./update-phase.js`
- `@openclaw/model-catalog-core/configured-model-refs`
- `@openclaw/model-catalog-core/model-catalog-refs`
- `@openclaw/model-catalog-core/provider-id`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `node:child_process`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:sqlite`
- `node:util`
- `openclaw/plugin-sdk/test-fixtures`
- `vitest`
