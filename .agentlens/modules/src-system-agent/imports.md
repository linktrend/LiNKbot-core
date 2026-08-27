# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_system_agent[src-system-agent] --> helpers[helpers]
    src_system_agent[src-system-agent] --> agents[agents]
    src_system_agent[src-system-agent] --> agents[agents]
    src_system_agent[src-system-agent] --> agents[agents]
    src_system_agent[src-system-agent] --> auth_profiles[auth-profiles]
    src_system_agent[src-system-agent] --> auth_profiles[auth-profiles]
    src_system_agent[src-system-agent] --> auth_profiles[auth-profiles]
    src_system_agent[src-system-agent] --> auth_profiles[auth-profiles]
    src_system_agent[src-system-agent] --> auth_profiles[auth-profiles]
    src_system_agent[src-system-agent] --> agents[agents]
    src_system_agent[src-system-agent] --> agents[agents]
    src_system_agent[src-system-agent] --> agents[agents]
    src_system_agent[src-system-agent] --> agents[agents]
    src_system_agent[src-system-agent] --> cli_runner[cli-runner]
    src_system_agent[src-system-agent] --> agents[agents]
    src_system_agent[src-system-agent] --> agents[agents]
    src_system_agent[src-system-agent] --> agents[agents]
    src_system_agent[src-system-agent] --> agents[agents]
    src_system_agent[src-system-agent] --> harness[harness]
    src_system_agent[src-system-agent] --> harness[harness]
    src_system_agent[src-system-agent] --> agents[agents]
    src_system_agent[src-system-agent] --> agents[agents]
    src_system_agent[src-system-agent] --> agents[agents]
    src_system_agent[src-system-agent] --> agents[agents]
    src_system_agent[src-system-agent] --> runtime_plan[runtime-plan]
    src_system_agent[src-system-agent] --> agents[agents]
    src_system_agent[src-system-agent] --> tools[tools]
    src_system_agent[src-system-agent] --> agents[agents]
    src_system_agent[src-system-agent] --> cli[cli]
    src_system_agent[src-system-agent] --> commands[commands]
    src_system_agent[src-system-agent] --> config[config]
    src_system_agent[src-system-agent] --> config[config]
    src_system_agent[src-system-agent] --> config[config]
    src_system_agent[src-system-agent] --> config[config]
    src_system_agent[src-system-agent] --> config[config]
    src_system_agent[src-system-agent] --> config[config]
    src_system_agent[src-system-agent] --> config[config]
    src_system_agent[src-system-agent] --> config[config]
    src_system_agent[src-system-agent] --> config[config]
    src_system_agent[src-system-agent] --> infra[infra]
    src_system_agent[src-system-agent] --> infra[infra]
    src_system_agent[src-system-agent] --> infra[infra]
    src_system_agent[src-system-agent] --> logging[logging]
    src_system_agent[src-system-agent] --> logging[logging]
    src_system_agent[src-system-agent] --> plugin_state[plugin-state]
    src_system_agent[src-system-agent] --> plugins[plugins]
    src_system_agent[src-system-agent] --> plugins[plugins]
    src_system_agent[src-system-agent] --> plugins[plugins]
    src_system_agent[src-system-agent] --> plugins[plugins]
    src_system_agent[src-system-agent] --> plugins[plugins]
    src_system_agent[src-system-agent] --> plugins[plugins]
    src_system_agent[src-system-agent] --> plugins[plugins]
    src_system_agent[src-system-agent] --> plugins[plugins]
    src_system_agent[src-system-agent] --> plugins[plugins]
    src_system_agent[src-system-agent] --> plugins[plugins]
    src_system_agent[src-system-agent] --> plugins[plugins]
    src_system_agent[src-system-agent] --> plugins[plugins]
    src_system_agent[src-system-agent] --> plugins[plugins]
    src_system_agent[src-system-agent] --> plugins[plugins]
    src_system_agent[src-system-agent] --> plugins[plugins]
    src_system_agent[src-system-agent] --> plugins[plugins]
    src_system_agent[src-system-agent] --> plugins[plugins]
    src_system_agent[src-system-agent] --> plugins[plugins]
    src_system_agent[src-system-agent] --> runtime[runtime]
    src_system_agent[src-system-agent] --> process[process]
    src_system_agent[src-system-agent] --> routing[routing]
    src_system_agent[src-system-agent] --> __[..]
    src_system_agent[src-system-agent] --> shared[shared]
    src_system_agent[src-system-agent] --> state[state]
    src_system_agent[src-system-agent] --> state[state]
    src_system_agent[src-system-agent] --> test_helpers[test-helpers]
    src_system_agent[src-system-agent] --> test_utils[test-utils]
    src_system_agent[src-system-agent] --> tui[tui]
    src_system_agent[src-system-agent] --> __[..]
    src_system_agent[src-system-agent] --> i18n[i18n]
    src_system_agent[src-system-agent] --> wizard[wizard]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> _[.]
    src_system_agent[src-system-agent] --> model_catalog_core[model-catalog-core]
    src_system_agent[src-system-agent] --> _openclaw[@openclaw]
    src_system_agent[src-system-agent] --> normalization_core[normalization-core]
    src_system_agent[src-system-agent] --> normalization_core[normalization-core]
    src_system_agent[src-system-agent] --> normalization_core[normalization-core]
    src_system_agent[src-system-agent] --> node_crypto[node:crypto]
    src_system_agent[src-system-agent] --> node_fs[node:fs]
    src_system_agent[src-system-agent] --> node_fs[node:fs]
    src_system_agent[src-system-agent] --> node_http[node:http]
    src_system_agent[src-system-agent] --> node_os[node:os]
    src_system_agent[src-system-agent] --> node_path[node:path]
    src_system_agent[src-system-agent] --> node_process[node:process]
    src_system_agent[src-system-agent] --> node_url[node:url]
    src_system_agent[src-system-agent] --> node_util[node:util]
    src_system_agent[src-system-agent] --> node_worker_threads[node:worker_threads]
    src_system_agent[src-system-agent] --> p_limit[p-limit]
    src_system_agent[src-system-agent] --> vitest[vitest]
    src_system_agent[src-system-agent] --> zod[zod]
```

## External Dependencies

Dependencies from other modules:

- `../../test/helpers/temp-dir.js`
- `../agents/agent-create.js`
- `../agents/agent-scope-config.js`
- `../agents/agent-scope.js`
- `../agents/auth-profiles/credential-normalize.js`
- `../agents/auth-profiles/oauth-test-utils.js`
- `../agents/auth-profiles/persisted.js`
- `../agents/auth-profiles/profiles.js`
- `../agents/auth-profiles/store.js`
- `../agents/cli-auth-epoch.js`
- `../agents/cli-backends.js`
- `../agents/cli-backends.test-support.js`
- `../agents/cli-execution-auth.js`
- `../agents/cli-runner/helpers.js`
- `../agents/docs-path.js`
- `../agents/embedded-agent-utils.js`
- `../agents/execution-auth-binding.js`
- `../agents/failover-error.js`
- `../agents/harness/registry.js`
- `../agents/harness/runtime-plugin.js`
- `../agents/model-auth.js`
- `../agents/model-ref-profile.js`
- `../agents/model-selection.js`
- `../agents/provider-auth-aliases.js`
- `../agents/runtime-plan/auth.js`
- `../agents/simple-completion-runtime.js`
- `../agents/tools/system-agent-tool.js`
- `../agents/workspace-default.js`
- `../cli/progress.js`
- `../commands/onboard-inference.js`
- `../config/config.js`
- `../config/io.write-prepare.js`
- `../config/local-model-lean-auto.js`
- `../config/merge-patch.js`
- `../config/model-input.js`
- `../config/paths.js`
- `../config/sensitive-paths.js`
- `../config/types.secrets.js`
- `../config/zod-schema.root-shape.js`
- `../infra/clawhub.js`
- `../infra/errors.js`
- `../infra/sqlite-audit-record-store.js`
- `../logging/redact.js`
- `../logging/subsystem.js`
- `../plugin-state/plugin-state-store.js`
- `../plugins/config-state.js`
- `../plugins/enable.js`
- `../plugins/install-provenance.js`
- `../plugins/installed-plugin-index-records.js`
- `../plugins/managed-npm-retention.js`
- `../plugins/manifest-owner-policy.js`
- `../plugins/official-external-plugin-catalog.js`
- `../plugins/plugin-metadata-snapshot.js`
- `../plugins/plugin-registry.js`
- `../plugins/plugin-runtime-artifact-identity.js`
- `../plugins/provider-auth-choice-order.js`
- `../plugins/provider-auth-choice.js`
- `../plugins/provider-auth-choices.js`
- `../plugins/providers.js`
- `../plugins/providers.runtime.js`
- `../plugins/recommended-tool-installs.js`
- `../plugins/registry-empty.js`
- `../plugins/runtime.js`
- `../plugins/runtime/runtime-registry-loader.js`
- `../process/exec.js`
- `../routing/session-key.js`
- `../runtime.js`
- `../shared/listeners.js`
- `../state/openclaw-agent-db.js`
- `../state/openclaw-state-db.js`
- `../test-helpers/temp-dir.js`
- `../test-utils/env.js`
- `../tui/tui.js`
- `../utils.js`
- `../wizard/i18n/index.js`
- `../wizard/session.js`
- `./agent-id.js`
- `./agent-turn.js`
- `./agent-turn.test-support.js`
- `./approval-intent.js`
- `./assistant-prompts.js`
- `./assistant-timeout.js`
- `./assistant.js`
- `./audit.js`
- `./audit.test-support.js`
- `./chat-engine.js`
- `./config-write-policy.js`
- `./dialogue.js`
- `./inference-error.js`
- `./inference-fallback.js`
- `./inference-route.js`
- `./new-agent-welcome.js`
- `./onboarding-welcome.js`
- `./operations-execution-helpers.js`
- `./operations-parse.js`
- `./operations.js`
- `./operator-approval.js`
- `./overview.js`
- `./plugin-install.js`
- `./post-write-verification.js`
- `./probes.js`
- `./rescue-message.js`
- `./rescue-policy.js`
- `./revalidate-inference-owner.js`
- `./setup-app-recommendations.js`
- `./setup-apply.js`
- `./setup-config-snapshot.js`
- `./setup-inference-auth-options.js`
- `./setup-inference-probe.js`
- `./setup-inference.js`
- `./system-agent.js`
- `./system-agent.test-helpers.js`
- `./transcript-store.js`
- `./tui-backend.js`
- `./verified-inference.js`
- `@openclaw/model-catalog-core/provider-id`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/utf16-slice`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:http`
- `node:os`
- `node:path`
- `node:process`
- `node:url`
- `node:util`
- `node:worker_threads`
- `p-limit`
- `vitest`
- `zod`
