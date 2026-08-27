# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_agents_sessions[src-agents-sessions] --> compaction[compaction]
    src_agents_sessions[src-agents-sessions] --> harness[harness]
    src_agents_sessions[src-agents-sessions] --> helpers[helpers]
    src_agents_sessions[src-agents-sessions] --> auto_reply[auto-reply]
    src_agents_sessions[src-agents-sessions] --> config[config]
    src_agents_sessions[src-agents-sessions] --> sessions[sessions]
    src_agents_sessions[src-agents-sessions] --> sessions[sessions]
    src_agents_sessions[src-agents-sessions] --> sessions[sessions]
    src_agents_sessions[src-agents-sessions] --> sessions[sessions]
    src_agents_sessions[src-agents-sessions] --> sessions[sessions]
    src_agents_sessions[src-agents-sessions] --> sessions[sessions]
    src_agents_sessions[src-agents-sessions] --> infra[infra]
    src_agents_sessions[src-agents-sessions] --> infra[infra]
    src_agents_sessions[src-agents-sessions] --> infra[infra]
    src_agents_sessions[src-agents-sessions] --> llm[llm]
    src_agents_sessions[src-agents-sessions] --> llm[llm]
    src_agents_sessions[src-agents-sessions] --> oauth[oauth]
    src_agents_sessions[src-agents-sessions] --> utils[utils]
    src_agents_sessions[src-agents-sessions] --> utils[utils]
    src_agents_sessions[src-agents-sessions] --> __[..]
    src_agents_sessions[src-agents-sessions] --> logging[logging]
    src_agents_sessions[src-agents-sessions] --> process[process]
    src_agents_sessions[src-agents-sessions] --> process[process]
    src_agents_sessions[src-agents-sessions] --> process[process]
    src_agents_sessions[src-agents-sessions] --> sessions[sessions]
    src_agents_sessions[src-agents-sessions] --> sessions[sessions]
    src_agents_sessions[src-agents-sessions] --> sessions[sessions]
    src_agents_sessions[src-agents-sessions] --> shared[shared]
    src_agents_sessions[src-agents-sessions] --> shared[shared]
    src_agents_sessions[src-agents-sessions] --> shared[shared]
    src_agents_sessions[src-agents-sessions] --> loading[loading]
    src_agents_sessions[src-agents-sessions] --> __[..]
    src_agents_sessions[src-agents-sessions] --> __[..]
    src_agents_sessions[src-agents-sessions] --> __[..]
    src_agents_sessions[src-agents-sessions] --> embedded_agent_runner[embedded-agent-runner]
    src_agents_sessions[src-agents-sessions] --> __[..]
    src_agents_sessions[src-agents-sessions] --> __[..]
    src_agents_sessions[src-agents-sessions] --> __[..]
    src_agents_sessions[src-agents-sessions] --> theme[theme]
    src_agents_sessions[src-agents-sessions] --> __[..]
    src_agents_sessions[src-agents-sessions] --> __[..]
    src_agents_sessions[src-agents-sessions] --> runtime[runtime]
    src_agents_sessions[src-agents-sessions] --> __[..]
    src_agents_sessions[src-agents-sessions] --> __[..]
    src_agents_sessions[src-agents-sessions] --> utils[utils]
    src_agents_sessions[src-agents-sessions] --> utils[utils]
    src_agents_sessions[src-agents-sessions] --> utils[utils]
    src_agents_sessions[src-agents-sessions] --> utils[utils]
    src_agents_sessions[src-agents-sessions] --> utils[utils]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> extensions[extensions]
    src_agents_sessions[src-agents-sessions] --> extensions[extensions]
    src_agents_sessions[src-agents-sessions] --> extensions[extensions]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> _[.]
    src_agents_sessions[src-agents-sessions] --> tools[tools]
    src_agents_sessions[src-agents-sessions] --> tools[tools]
    src_agents_sessions[src-agents-sessions] --> tools[tools]
    src_agents_sessions[src-agents-sessions] --> tools[tools]
    src_agents_sessions[src-agents-sessions] --> tools[tools]
    src_agents_sessions[src-agents-sessions] --> _earendil_works[@earendil-works]
    src_agents_sessions[src-agents-sessions] --> _openclaw[@openclaw]
    src_agents_sessions[src-agents-sessions] --> internal[internal]
    src_agents_sessions[src-agents-sessions] --> internal[internal]
    src_agents_sessions[src-agents-sessions] --> ai[ai]
    src_agents_sessions[src-agents-sessions] --> _openclaw[@openclaw]
    src_agents_sessions[src-agents-sessions] --> normalization_core[normalization-core]
    src_agents_sessions[src-agents-sessions] --> normalization_core[normalization-core]
    src_agents_sessions[src-agents-sessions] --> normalization_core[normalization-core]
    src_agents_sessions[src-agents-sessions] --> chalk[chalk]
    src_agents_sessions[src-agents-sessions] --> minimatch[minimatch]
    src_agents_sessions[src-agents-sessions] --> node_child_process[node:child_process]
    src_agents_sessions[src-agents-sessions] --> node_crypto[node:crypto]
    src_agents_sessions[src-agents-sessions] --> node_events[node:events]
    src_agents_sessions[src-agents-sessions] --> node_fs[node:fs]
    src_agents_sessions[src-agents-sessions] --> node_fs[node:fs]
    src_agents_sessions[src-agents-sessions] --> node_os[node:os]
    src_agents_sessions[src-agents-sessions] --> node_path[node:path]
    src_agents_sessions[src-agents-sessions] --> node_string_decoder[node:string_decoder]
    src_agents_sessions[src-agents-sessions] --> node_util[node:util]
    src_agents_sessions[src-agents-sessions] --> plugin_sdk[plugin-sdk]
    src_agents_sessions[src-agents-sessions] --> proper_lockfile[proper-lockfile]
    src_agents_sessions[src-agents-sessions] --> typebox[typebox]
    src_agents_sessions[src-agents-sessions] --> typebox[typebox]
    src_agents_sessions[src-agents-sessions] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/agent-core/src/harness/compaction/compaction.js`
- `../../../packages/agent-core/src/harness/prompt-template-arguments.js`
- `../../../test/helpers/temp-dir.js`
- `../../auto-reply/thinking.js`
- `../../config/config.js`
- `../../config/sessions/session-accessor.js`
- `../../config/sessions/sqlite-marker.js`
- `../../config/sessions/transcript-jsonl.js`
- `../../config/sessions/transcript-tree.js`
- `../../config/sessions/transcript-write-context.js`
- `../../config/sessions/version.js`
- `../../infra/deep-merge.js`
- `../../infra/parse-finite-number.js`
- `../../infra/replace-file.js`
- `../../llm/ai-transport-host.js`
- `../../llm/model-runtime-binding.js`
- `../../llm/utils/oauth/index.js`
- `../../llm/utils/rate-limit-window.js`
- `../../llm/utils/retry.js`
- `../../logger.js`
- `../../logging/subsystem.js`
- `../../process/child-process.js`
- `../../process/exec.js`
- `../../process/kill-tree.js`
- `../../sessions/user-turn-transcript-runtime-context.js`
- `../../sessions/user-turn-transcript.js`
- `../../sessions/user-turn-transcript.test-support.js`
- `../../shared/ignore-rules.js`
- `../../shared/tilde-path.js`
- `../../shared/transcript-only-openclaw-assistant.js`
- `../../skills/loading/session.js`
- `../agent-model-discovery.js`
- `../config.js`
- `../defaults.js`
- `../embedded-agent-runner/session-manager-init.js`
- `../live-test-helpers.js`
- `../model-discovery-context.js`
- `../models-config.js`
- `../modes/interactive/theme/theme.js`
- `../plugin-model-catalog.js`
- `../promised-work-prompt.js`
- `../runtime/index.js`
- `../session-file-repair.js`
- `../shell-utils.js`
- `../utils/frontmatter.js`
- `../utils/fs-watch.js`
- `../utils/git.js`
- `../utils/paths.js`
- `../utils/sleep.js`
- `./agent-session-base.js`
- `./agent-session-compaction.js`
- `./agent-session-execution.js`
- `./agent-session-extensions.js`
- `./agent-session-inspection.js`
- `./agent-session-models.js`
- `./agent-session-prompting.js`
- `./agent-session-tree.js`
- `./agent-session-utils.js`
- `./agent-session.js`
- `./auth-guidance.js`
- `./auth-storage-oauth-registry.js`
- `./auth-storage.js`
- `./bash-executor.js`
- `./defaults.js`
- `./event-bus.js`
- `./extensions/index.js`
- `./extensions/loader.js`
- `./extensions/runner.js`
- `./http-dispatcher.js`
- `./manual-compaction-preflight.js`
- `./messages.js`
- `./model-registry-runtime.js`
- `./model-registry.js`
- `./model-resolver.js`
- `./package-manager.js`
- `./prompt-templates.js`
- `./provider-display-names.js`
- `./resolve-config-value.js`
- `./resource-loader.js`
- `./sdk.js`
- `./session-manager-branching.js`
- `./session-manager-codec.js`
- `./session-manager-core.js`
- `./session-manager-entries.js`
- `./session-manager-file.js`
- `./session-manager-id.js`
- `./session-manager-list.js`
- `./session-manager-persistence.js`
- `./session-manager.js`
- `./settings-manager.js`
- `./source-info.js`
- `./storage-lock.js`
- `./system-prompt.js`
- `./telemetry.js`
- `./tools/bash.js`
- `./tools/index.js`
- `./tools/output-accumulator.js`
- `./tools/tool-definition-wrapper.js`
- `./tools/truncate.js`
- `@earendil-works/pi-tui`
- `@openclaw/ai`
- `@openclaw/ai/internal/anthropic`
- `@openclaw/ai/internal/runtime`
- `@openclaw/ai/providers`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/utf16-slice`
- `chalk`
- `minimatch`
- `node:child_process`
- `node:crypto`
- `node:events`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:string_decoder`
- `node:util/types`
- `openclaw/plugin-sdk/llm`
- `proper-lockfile`
- `typebox`
- `typebox/compile`
- `vitest`
