# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_config_sessions[src-config-sessions] --> helpers[helpers]
    src_config_sessions[src-config-sessions] --> helpers[helpers]
    src_config_sessions[src-config-sessions] --> runtime[runtime]
    src_config_sessions[src-config-sessions] --> agents[agents]
    src_config_sessions[src-config-sessions] --> agents[agents]
    src_config_sessions[src-config-sessions] --> auth_profiles[auth-profiles]
    src_config_sessions[src-config-sessions] --> agents[agents]
    src_config_sessions[src-config-sessions] --> agents[agents]
    src_config_sessions[src-config-sessions] --> agents[agents]
    src_config_sessions[src-config-sessions] --> sessions[sessions]
    src_config_sessions[src-config-sessions] --> agents[agents]
    src_config_sessions[src-config-sessions] --> agents[agents]
    src_config_sessions[src-config-sessions] --> channels[channels]
    src_config_sessions[src-config-sessions] --> channels[channels]
    src_config_sessions[src-config-sessions] --> inbound_event[inbound-event]
    src_config_sessions[src-config-sessions] --> plugins[plugins]
    src_config_sessions[src-config-sessions] --> plugins[plugins]
    src_config_sessions[src-config-sessions] --> plugins[plugins]
    src_config_sessions[src-config-sessions] --> plugins[plugins]
    src_config_sessions[src-config-sessions] --> cli[cli]
    src_config_sessions[src-config-sessions] --> cli[cli]
    src_config_sessions[src-config-sessions] --> gateway[gateway]
    src_config_sessions[src-config-sessions] --> infra[infra]
    src_config_sessions[src-config-sessions] --> infra[infra]
    src_config_sessions[src-config-sessions] --> infra[infra]
    src_config_sessions[src-config-sessions] --> infra[infra]
    src_config_sessions[src-config-sessions] --> infra[infra]
    src_config_sessions[src-config-sessions] --> infra[infra]
    src_config_sessions[src-config-sessions] --> infra[infra]
    src_config_sessions[src-config-sessions] --> infra[infra]
    src_config_sessions[src-config-sessions] --> infra[infra]
    src_config_sessions[src-config-sessions] --> infra[infra]
    src_config_sessions[src-config-sessions] --> logging[logging]
    src_config_sessions[src-config-sessions] --> logging[logging]
    src_config_sessions[src-config-sessions] --> logging[logging]
    src_config_sessions[src-config-sessions] --> plugins[plugins]
    src_config_sessions[src-config-sessions] --> plugins[plugins]
    src_config_sessions[src-config-sessions] --> plugins[plugins]
    src_config_sessions[src-config-sessions] --> routing[routing]
    src_config_sessions[src-config-sessions] --> routing[routing]
    src_config_sessions[src-config-sessions] --> sessions[sessions]
    src_config_sessions[src-config-sessions] --> sessions[sessions]
    src_config_sessions[src-config-sessions] --> sessions[sessions]
    src_config_sessions[src-config-sessions] --> sessions[sessions]
    src_config_sessions[src-config-sessions] --> sessions[sessions]
    src_config_sessions[src-config-sessions] --> sessions[sessions]
    src_config_sessions[src-config-sessions] --> shared[shared]
    src_config_sessions[src-config-sessions] --> shared[shared]
    src_config_sessions[src-config-sessions] --> shared[shared]
    src_config_sessions[src-config-sessions] --> shared[shared]
    src_config_sessions[src-config-sessions] --> shared[shared]
    src_config_sessions[src-config-sessions] --> shared[shared]
    src_config_sessions[src-config-sessions] --> test_support[test-support]
    src_config_sessions[src-config-sessions] --> state[state]
    src_config_sessions[src-config-sessions] --> state[state]
    src_config_sessions[src-config-sessions] --> state[state]
    src_config_sessions[src-config-sessions] --> test_helpers[test-helpers]
    src_config_sessions[src-config-sessions] --> test_utils[test-utils]
    src_config_sessions[src-config-sessions] --> test_utils[test-utils]
    src_config_sessions[src-config-sessions] --> test_utils[test-utils]
    src_config_sessions[src-config-sessions] --> test_utils[test-utils]
    src_config_sessions[src-config-sessions] --> test_utils[test-utils]
    src_config_sessions[src-config-sessions] --> test_utils[test-utils]
    src_config_sessions[src-config-sessions] --> trajectory[trajectory]
    src_config_sessions[src-config-sessions] --> trajectory[trajectory]
    src_config_sessions[src-config-sessions] --> __[..]
    src_config_sessions[src-config-sessions] --> utils[utils]
    src_config_sessions[src-config-sessions] --> utils[utils]
    src_config_sessions[src-config-sessions] --> utils[utils]
    src_config_sessions[src-config-sessions] --> utils[utils]
    src_config_sessions[src-config-sessions] --> utils[utils]
    src_config_sessions[src-config-sessions] --> __[..]
    src_config_sessions[src-config-sessions] --> __[..]
    src_config_sessions[src-config-sessions] --> __[..]
    src_config_sessions[src-config-sessions] --> __[..]
    src_config_sessions[src-config-sessions] --> __[..]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> _[.]
    src_config_sessions[src-config-sessions] --> model_catalog_core[model-catalog-core]
    src_config_sessions[src-config-sessions] --> _openclaw[@openclaw]
    src_config_sessions[src-config-sessions] --> normalization_core[normalization-core]
    src_config_sessions[src-config-sessions] --> normalization_core[normalization-core]
    src_config_sessions[src-config-sessions] --> normalization_core[normalization-core]
    src_config_sessions[src-config-sessions] --> normalization_core[normalization-core]
    src_config_sessions[src-config-sessions] --> kysely[kysely]
    src_config_sessions[src-config-sessions] --> node_async_hooks[node:async_hooks]
    src_config_sessions[src-config-sessions] --> node_child_process[node:child_process]
    src_config_sessions[src-config-sessions] --> node_crypto[node:crypto]
    src_config_sessions[src-config-sessions] --> node_fs[node:fs]
    src_config_sessions[src-config-sessions] --> node_fs[node:fs]
    src_config_sessions[src-config-sessions] --> node_os[node:os]
    src_config_sessions[src-config-sessions] --> node_path[node:path]
    src_config_sessions[src-config-sessions] --> node_process[node:process]
    src_config_sessions[src-config-sessions] --> node_readline[node:readline]
    src_config_sessions[src-config-sessions] --> node_url[node:url]
    src_config_sessions[src-config-sessions] --> node_util[node:util]
    src_config_sessions[src-config-sessions] --> node_worker_threads[node:worker_threads]
    src_config_sessions[src-config-sessions] --> node_zlib[node:zlib]
    src_config_sessions[src-config-sessions] --> plugin_sdk[plugin-sdk]
    src_config_sessions[src-config-sessions] --> plugin_sdk[plugin-sdk]
    src_config_sessions[src-config-sessions] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../test/helpers/promise.js`
- `../../../test/helpers/temp-dir.js`
- `../../acp/runtime/session-meta.js`
- `../../agents/agent-runtime-id.js`
- `../../agents/agent-scope.js`
- `../../agents/auth-profiles/sqlite.js`
- `../../agents/session-dirs.js`
- `../../agents/session-transcript-repair.js`
- `../../agents/session-write-lock.js`
- `../../agents/sessions/session-manager.js`
- `../../agents/transcript-redact.js`
- `../../agents/usage.js`
- `../../channels/chat-type.js`
- `../../channels/conversation-label.js`
- `../../channels/inbound-event/context.js`
- `../../channels/plugins/index.js`
- `../../channels/plugins/registry.js`
- `../../channels/plugins/session-conversation.js`
- `../../channels/plugins/session-thread-info-loaded.js`
- `../../cli/parse-bytes.js`
- `../../cli/parse-duration.js`
- `../../gateway/session-store-key.js`
- `../../infra/errors.js`
- `../../infra/file-read.js`
- `../../infra/home-dir.js`
- `../../infra/json-files.js`
- `../../infra/kysely-sync.js`
- `../../infra/node-sqlite.js`
- `../../infra/parse-finite-number.js`
- `../../infra/sqlite-transaction.js`
- `../../infra/state-migrations.js`
- `../../infra/tmp-openclaw-dir.js`
- `../../logging/logger.js`
- `../../logging/redact.js`
- `../../logging/subsystem.js`
- `../../plugins/host-hook-json.js`
- `../../plugins/runtime.js`
- `../../plugins/session-entry-slot-keys.js`
- `../../routing/conversation-ref.js`
- `../../routing/session-key.js`
- `../../sessions/agent-harness-session-key.js`
- `../../sessions/session-key-utils.js`
- `../../sessions/session-lifecycle-admission.js`
- `../../sessions/session-lifecycle-events.js`
- `../../sessions/session-state-events.js`
- `../../sessions/transcript-events.js`
- `../../shared/chat-message-content.js`
- `../../shared/lazy-runtime.js`
- `../../shared/number-coercion.js`
- `../../shared/regexp.js`
- `../../shared/store-writer-queue.js`
- `../../shared/transcript-only-openclaw-assistant.js`
- `../../skills/test-support/test-helpers.js`
- `../../state/openclaw-agent-db-readonly.js`
- `../../state/openclaw-agent-db.js`
- `../../state/openclaw-state-db.js`
- `../../test-helpers/temp-dir.js`
- `../../test-utils/channel-plugins.js`
- `../../test-utils/deferred.js`
- `../../test-utils/env.js`
- `../../test-utils/fixture-suite.js`
- `../../test-utils/openclaw-test-state.js`
- `../../test-utils/session-conversation-registry.js`
- `../../trajectory/paths.js`
- `../../trajectory/runtime-store.sqlite.js`
- `../../utils.js`
- `../../utils/account-id.js`
- `../../utils/delivery-context.shared.js`
- `../../utils/message-channel.js`
- `../../utils/run-with-concurrency.js`
- `../../utils/token-format.js`
- `../cache-utils.js`
- `../config.js`
- `../io.js`
- `../paths.js`
- `../zod-schema.session.js`
- `./ambient-transcript-watermark.js`
- `./archive-compression.js`
- `./artifacts.js`
- `./cleanup-service.js`
- `./cli-session-binding.js`
- `./conversation-delivery-store.js`
- `./conversation-identity.js`
- `./conversation-registry.js`
- `./disk-budget.js`
- `./entry-freshness.js`
- `./explicit-session-key-normalization.js`
- `./file-range.js`
- `./goals.js`
- `./group.js`
- `./internal-session-key.js`
- `./lifecycle.js`
- `./main-session.js`
- `./metadata.js`
- `./model-override-provenance.js`
- `./paths.js`
- `./plugin-host-cleanup.js`
- `./reset-policy.js`
- `./reset.js`
- `./restart-recovery-receipt.js`
- `./restart-recovery-state.js`
- `./session-accessor.entry-mutation.js`
- `./session-accessor.entry.js`
- `./session-accessor.js`
- `./session-accessor.lifecycle.js`
- `./session-accessor.sqlite-active-events.js`
- `./session-accessor.sqlite-archive.js`
- `./session-accessor.sqlite-conversation.js`
- `./session-accessor.sqlite-entry-store.js`
- `./session-accessor.sqlite-events.js`
- `./session-accessor.sqlite-history.js`
- `./session-accessor.sqlite-identity.js`
- `./session-accessor.sqlite-lifecycle-state.js`
- `./session-accessor.sqlite-maintenance.js`
- `./session-accessor.sqlite-normalize.js`
- `./session-accessor.sqlite-parent-fork.js`
- `./session-accessor.sqlite-provenance.js`
- `./session-accessor.sqlite-read.js`
- `./session-accessor.sqlite-scope.js`
- `./session-accessor.sqlite-session-row.js`
- `./session-accessor.sqlite-status.js`
- `./session-accessor.sqlite-transcript-state.js`
- `./session-accessor.sqlite-transcript-store.js`
- `./session-accessor.sqlite.js`
- `./session-accessor.transcript-target.js`
- `./session-accessor.transcript.js`
- `./session-entry-lineage.js`
- `./session-entry-selection.js`
- `./session-file-rotation.js`
- `./session-file.js`
- `./session-history-eviction.js`
- `./session-key.js`
- `./session-key.test-helpers.js`
- `./session-registry-maintenance.js`
- `./session-snapshot-merge.js`
- `./session-sqlite-target.js`
- `./session-store-path.js`
- `./session-transcript-index.js`
- `./session-transcript-projection-rebuild.js`
- `./session-transcript-reconcile.js`
- `./session-transcript-search.js`
- `./session-transcript-turn-state.js`
- `./skill-prompt-blobs.js`
- `./sqlite-marker.js`
- `./store-cache.js`
- `./store-entry-shape.js`
- `./store-entry.js`
- `./store-load.js`
- `./store-maintenance-operations.js`
- `./store-maintenance-preserve.js`
- `./store-maintenance-runtime.js`
- `./store-maintenance.js`
- `./store-migrations.js`
- `./store-temp-cleanup.js`
- `./store-writer-state.js`
- `./store-writer.js`
- `./store.js`
- `./targets.js`
- `./test-helpers.js`
- `./thread-info.js`
- `./transcript-append.test-support.js`
- `./transcript-assistant-message.js`
- `./transcript-header.js`
- `./transcript-jsonl.js`
- `./transcript-mirror.js`
- `./transcript-recent-window.js`
- `./transcript-replay.js`
- `./transcript-stream.js`
- `./transcript-tree.js`
- `./transcript-visible-events.js`
- `./transcript-write-context.js`
- `./transcript.js`
- `./types.js`
- `./version.js`
- `@openclaw/model-catalog-core/provider-id`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `kysely`
- `node:async_hooks`
- `node:child_process`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:process`
- `node:readline`
- `node:url`
- `node:util`
- `node:worker_threads`
- `node:zlib`
- `openclaw/plugin-sdk/keyed-async-queue`
- `openclaw/plugin-sdk/test-env`
- `vitest`
