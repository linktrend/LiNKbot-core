# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_gateway_worker_environments[src-gateway-worker-environments] --> src[src]
    src_gateway_worker_environments[src-gateway-worker-environments] --> schema[schema]
    src_gateway_worker_environments[src-gateway-worker-environments] --> schema[schema]
    src_gateway_worker_environments[src-gateway-worker-environments] --> src[src]
    src_gateway_worker_environments[src-gateway-worker-environments] --> helpers[helpers]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> auth_profiles[auth-profiles]
    src_gateway_worker_environments[src-gateway-worker-environments] --> auth_profiles[auth-profiles]
    src_gateway_worker_environments[src-gateway-worker-environments] --> embedded_agent_runner[embedded-agent-runner]
    src_gateway_worker_environments[src-gateway-worker-environments] --> embedded_agent_runner[embedded-agent-runner]
    src_gateway_worker_environments[src-gateway-worker-environments] --> run[run]
    src_gateway_worker_environments[src-gateway-worker-environments] --> run[run]
    src_gateway_worker_environments[src-gateway-worker-environments] --> embedded_agent_runner[embedded-agent-runner]
    src_gateway_worker_environments[src-gateway-worker-environments] --> embedded_agent_runner[embedded-agent-runner]
    src_gateway_worker_environments[src-gateway-worker-environments] --> embedded_agent_runner[embedded-agent-runner]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> harness[harness]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> sessions[sessions]
    src_gateway_worker_environments[src-gateway-worker-environments] --> sessions[sessions]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> test_helpers[test-helpers]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> agents[agents]
    src_gateway_worker_environments[src-gateway-worker-environments] --> config[config]
    src_gateway_worker_environments[src-gateway-worker-environments] --> config[config]
    src_gateway_worker_environments[src-gateway-worker-environments] --> sessions[sessions]
    src_gateway_worker_environments[src-gateway-worker-environments] --> sessions[sessions]
    src_gateway_worker_environments[src-gateway-worker-environments] --> config[config]
    src_gateway_worker_environments[src-gateway-worker-environments] --> infra[infra]
    src_gateway_worker_environments[src-gateway-worker-environments] --> infra[infra]
    src_gateway_worker_environments[src-gateway-worker-environments] --> infra[infra]
    src_gateway_worker_environments[src-gateway-worker-environments] --> infra[infra]
    src_gateway_worker_environments[src-gateway-worker-environments] --> infra[infra]
    src_gateway_worker_environments[src-gateway-worker-environments] --> infra[infra]
    src_gateway_worker_environments[src-gateway-worker-environments] --> infra[infra]
    src_gateway_worker_environments[src-gateway-worker-environments] --> infra[infra]
    src_gateway_worker_environments[src-gateway-worker-environments] --> infra[infra]
    src_gateway_worker_environments[src-gateway-worker-environments] --> infra[infra]
    src_gateway_worker_environments[src-gateway-worker-environments] --> infra[infra]
    src_gateway_worker_environments[src-gateway-worker-environments] --> infra[infra]
    src_gateway_worker_environments[src-gateway-worker-environments] --> infra[infra]
    src_gateway_worker_environments[src-gateway-worker-environments] --> infra[infra]
    src_gateway_worker_environments[src-gateway-worker-environments] --> infra[infra]
    src_gateway_worker_environments[src-gateway-worker-environments] --> llm[llm]
    src_gateway_worker_environments[src-gateway-worker-environments] --> utils[utils]
    src_gateway_worker_environments[src-gateway-worker-environments] --> logging[logging]
    src_gateway_worker_environments[src-gateway-worker-environments] --> logging[logging]
    src_gateway_worker_environments[src-gateway-worker-environments] --> logging[logging]
    src_gateway_worker_environments[src-gateway-worker-environments] --> plugin_sdk[plugin-sdk]
    src_gateway_worker_environments[src-gateway-worker-environments] --> plugins[plugins]
    src_gateway_worker_environments[src-gateway-worker-environments] --> plugins[plugins]
    src_gateway_worker_environments[src-gateway-worker-environments] --> plugins[plugins]
    src_gateway_worker_environments[src-gateway-worker-environments] --> process[process]
    src_gateway_worker_environments[src-gateway-worker-environments] --> process[process]
    src_gateway_worker_environments[src-gateway-worker-environments] --> process[process]
    src_gateway_worker_environments[src-gateway-worker-environments] --> secrets[secrets]
    src_gateway_worker_environments[src-gateway-worker-environments] --> security[security]
    src_gateway_worker_environments[src-gateway-worker-environments] --> sessions[sessions]
    src_gateway_worker_environments[src-gateway-worker-environments] --> sessions[sessions]
    src_gateway_worker_environments[src-gateway-worker-environments] --> sessions[sessions]
    src_gateway_worker_environments[src-gateway-worker-environments] --> shared[shared]
    src_gateway_worker_environments[src-gateway-worker-environments] --> state[state]
    src_gateway_worker_environments[src-gateway-worker-environments] --> state[state]
    src_gateway_worker_environments[src-gateway-worker-environments] --> test_helpers[test-helpers]
    src_gateway_worker_environments[src-gateway-worker-environments] --> trajectory[trajectory]
    src_gateway_worker_environments[src-gateway-worker-environments] --> trajectory[trajectory]
    src_gateway_worker_environments[src-gateway-worker-environments] --> utils[utils]
    src_gateway_worker_environments[src-gateway-worker-environments] --> utils[utils]
    src_gateway_worker_environments[src-gateway-worker-environments] --> __[..]
    src_gateway_worker_environments[src-gateway-worker-environments] --> worker[worker]
    src_gateway_worker_environments[src-gateway-worker-environments] --> worker[worker]
    src_gateway_worker_environments[src-gateway-worker-environments] --> __[..]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _[.]
    src_gateway_worker_environments[src-gateway-worker-environments] --> _openclaw[@openclaw]
    src_gateway_worker_environments[src-gateway-worker-environments] --> normalization_core[normalization-core]
    src_gateway_worker_environments[src-gateway-worker-environments] --> normalization_core[normalization-core]
    src_gateway_worker_environments[src-gateway-worker-environments] --> node_buffer[node:buffer]
    src_gateway_worker_environments[src-gateway-worker-environments] --> node_child_process[node:child_process]
    src_gateway_worker_environments[src-gateway-worker-environments] --> node_crypto[node:crypto]
    src_gateway_worker_environments[src-gateway-worker-environments] --> node_fs[node:fs]
    src_gateway_worker_environments[src-gateway-worker-environments] --> node_fs[node:fs]
    src_gateway_worker_environments[src-gateway-worker-environments] --> node_os[node:os]
    src_gateway_worker_environments[src-gateway-worker-environments] --> node_path[node:path]
    src_gateway_worker_environments[src-gateway-worker-environments] --> node_sqlite[node:sqlite]
    src_gateway_worker_environments[src-gateway-worker-environments] --> node_timers[node:timers]
    src_gateway_worker_environments[src-gateway-worker-environments] --> node_util[node:util]
    src_gateway_worker_environments[src-gateway-worker-environments] --> typebox[typebox]
    src_gateway_worker_environments[src-gateway-worker-environments] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/gateway-protocol/src/index.js`
- `../../../packages/gateway-protocol/src/schema/worker-admission.js`
- `../../../packages/gateway-protocol/src/schema/worker-inference.js`
- `../../../packages/retry/src/index.js`
- `../../../test/helpers/temp-dir.js`
- `../../agents/agent-runtime-id.js`
- `../../agents/agent-scope.js`
- `../../agents/auth-profiles/session-override.js`
- `../../agents/auth-profiles/store.js`
- `../../agents/embedded-agent-runner/extra-params.js`
- `../../agents/embedded-agent-runner/model.js`
- `../../agents/embedded-agent-runner/run/attempt.model-diagnostic-events.js`
- `../../agents/embedded-agent-runner/run/helpers.js`
- `../../agents/embedded-agent-runner/stream-resolution.js`
- `../../agents/embedded-agent-runner/usage-accumulator.js`
- `../../agents/embedded-agent-runner/utils.js`
- `../../agents/embedded-agent-subscribe.tools.js`
- `../../agents/harness/policy.js`
- `../../agents/model-ref-profile.js`
- `../../agents/model-selection-config.js`
- `../../agents/model-selection-shared.js`
- `../../agents/model-selection.js`
- `../../agents/model-visibility-policy.js`
- `../../agents/openai-routing.js`
- `../../agents/prepared-model-runtime.js`
- `../../agents/provider-model-route-auth.js`
- `../../agents/provider-model-route.js`
- `../../agents/provider-stream.js`
- `../../agents/session-model-ref.js`
- `../../agents/session-runtime-compat.js`
- `../../agents/sessions/messages.js`
- `../../agents/sessions/session-manager.js`
- `../../agents/simple-completion-runtime.js`
- `../../agents/simple-completion-scope.js`
- `../../agents/simple-completion-transport.js`
- `../../agents/stable-stringify.js`
- `../../agents/test-helpers/agent-message-fixtures.js`
- `../../agents/thinking-runtime.js`
- `../../agents/tool-policy.js`
- `../../agents/transcript-redact.js`
- `../../agents/usage.js`
- `../../config/config.js`
- `../../config/paths.js`
- `../../config/sessions/session-accessor.js`
- `../../config/sessions/sqlite-marker.js`
- `../../config/zod-schema.cloud-workers.js`
- `../../infra/agent-events.js`
- `../../infra/backoff.js`
- `../../infra/crypto-digest.js`
- `../../infra/diagnostic-events.js`
- `../../infra/diagnostic-llm-content.js`
- `../../infra/diagnostic-trace-context.js`
- `../../infra/errors.js`
- `../../infra/fs-safe.js`
- `../../infra/json-utf8-bytes.js`
- `../../infra/kysely-sync.js`
- `../../infra/npm-registry-spec.js`
- `../../infra/openclaw-root.js`
- `../../infra/package-dist-inventory.js`
- `../../infra/scp-host.js`
- `../../infra/secure-random.js`
- `../../llm/model-runtime-binding.js`
- `../../llm/utils/event-stream.js`
- `../../logging/redact.js`
- `../../logging/secret-redaction-registry.js`
- `../../logging/secret-redaction-registry.test-support.js`
- `../../plugin-sdk/keyed-async-queue.js`
- `../../plugins/provider-model-routes.js`
- `../../plugins/provider-registry-shared.js`
- `../../plugins/types.js`
- `../../process/exec.js`
- `../../process/gateway-work-admission.js`
- `../../process/kill-tree.js`
- `../../secrets/ref-contract.js`
- `../../security/secret-equal.js`
- `../../sessions/session-id-resolution.js`
- `../../sessions/session-lifecycle-admission.js`
- `../../sessions/transcript-events.js`
- `../../shared/deferred.js`
- `../../state/openclaw-agent-db.js`
- `../../state/openclaw-state-db.js`
- `../../test-helpers/temp-dir.js`
- `../../trajectory/runtime-store.sqlite.js`
- `../../trajectory/runtime.js`
- `../../utils/run-with-concurrency.js`
- `../../utils/usage-format.js`
- `../../version.js`
- `../../worker/launch-descriptor.js`
- `../../worker/transcript-message.js`
- `../session-utils.js`
- `./admission.js`
- `./bootstrap.js`
- `./bundle-staging.js`
- `./bundle.js`
- `./credential.js`
- `./identity.js`
- `./inference-runtime.js`
- `./inference-store.js`
- `./inference-terminal-message.js`
- `./inference-tool-call-stream.js`
- `./inference.js`
- `./live-event-projection.js`
- `./live-events.js`
- `./placement-dispatch-failure.js`
- `./placement-dispatch-pending-results.js`
- `./placement-dispatch-recovery.js`
- `./placement-dispatch-test-fixtures.js`
- `./placement-dispatch-test-harness.js`
- `./placement-dispatch.js`
- `./placement-force-abandon.js`
- `./placement-projector.js`
- `./placement-record.js`
- `./placement-row-codec.js`
- `./placement-state.js`
- `./placement-store.js`
- `./placement-turn-claims.js`
- `./placement-worker-gate.js`
- `./placement-workspace-journal.js`
- `./placement-workspace-result.js`
- `./reclaimed-placement-redispatch.js`
- `./service-validation.js`
- `./service.js`
- `./session-target.js`
- `./ssh.js`
- `./state.js`
- `./store.js`
- `./transcript-commit-store.js`
- `./transcript-commit.js`
- `./tunnel-ssh-runner.js`
- `./tunnel.js`
- `./worker-turn-admission.js`
- `./worker-turn-launcher.js`
- `./worker-turn-payload.js`
- `./workspace-accepted-sync.js`
- `./workspace-conflicts.js`
- `./workspace-finalize.js`
- `./workspace-manifest-remote-script.js`
- `./workspace-manifest.js`
- `./workspace-operation-coordinator.js`
- `./workspace-path-exclusions.js`
- `./workspace-reconcile-core.js`
- `./workspace-reconcile-derived-paths.js`
- `./workspace-reconcile-fs.js`
- `./workspace-reconcile-recovery.js`
- `./workspace-reconcile.js`
- `./workspace-result-staging.js`
- `./workspace-sync-helpers.js`
- `./workspace-sync-local.js`
- `./workspace-sync-scripts.js`
- `./workspace-sync.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `node:buffer`
- `node:child_process`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:sqlite`
- `node:timers/promises`
- `node:util`
- `typebox/value`
- `vitest`
