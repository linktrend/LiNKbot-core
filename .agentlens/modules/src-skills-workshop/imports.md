# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_skills_workshop[src-skills-workshop] --> src[src]
    src_skills_workshop[src-skills-workshop] --> agents[agents]
    src_skills_workshop[src-skills-workshop] --> agents[agents]
    src_skills_workshop[src-skills-workshop] --> embedded_agent_runner[embedded-agent-runner]
    src_skills_workshop[src-skills-workshop] --> embedded_agent_runner[embedded-agent-runner]
    src_skills_workshop[src-skills-workshop] --> embedded_agent_runner[embedded-agent-runner]
    src_skills_workshop[src-skills-workshop] --> agents[agents]
    src_skills_workshop[src-skills-workshop] --> agents[agents]
    src_skills_workshop[src-skills-workshop] --> agents[agents]
    src_skills_workshop[src-skills-workshop] --> agents[agents]
    src_skills_workshop[src-skills-workshop] --> agents[agents]
    src_skills_workshop[src-skills-workshop] --> utils[utils]
    src_skills_workshop[src-skills-workshop] --> auto_reply[auto-reply]
    src_skills_workshop[src-skills-workshop] --> auto_reply[auto-reply]
    src_skills_workshop[src-skills-workshop] --> config[config]
    src_skills_workshop[src-skills-workshop] --> config[config]
    src_skills_workshop[src-skills-workshop] --> sessions[sessions]
    src_skills_workshop[src-skills-workshop] --> sessions[sessions]
    src_skills_workshop[src-skills-workshop] --> gateway[gateway]
    src_skills_workshop[src-skills-workshop] --> infra[infra]
    src_skills_workshop[src-skills-workshop] --> infra[infra]
    src_skills_workshop[src-skills-workshop] --> infra[infra]
    src_skills_workshop[src-skills-workshop] --> infra[infra]
    src_skills_workshop[src-skills-workshop] --> infra[infra]
    src_skills_workshop[src-skills-workshop] --> infra[infra]
    src_skills_workshop[src-skills-workshop] --> infra[infra]
    src_skills_workshop[src-skills-workshop] --> infra[infra]
    src_skills_workshop[src-skills-workshop] --> logging[logging]
    src_skills_workshop[src-skills-workshop] --> logging[logging]
    src_skills_workshop[src-skills-workshop] --> plugin_state[plugin-state]
    src_skills_workshop[src-skills-workshop] --> process[process]
    src_skills_workshop[src-skills-workshop] --> routing[routing]
    src_skills_workshop[src-skills-workshop] --> state[state]
    src_skills_workshop[src-skills-workshop] --> test_utils[test-utils]
    src_skills_workshop[src-skills-workshop] --> test_utils[test-utils]
    src_skills_workshop[src-skills-workshop] --> discovery[discovery]
    src_skills_workshop[src-skills-workshop] --> discovery[discovery]
    src_skills_workshop[src-skills-workshop] --> lifecycle[lifecycle]
    src_skills_workshop[src-skills-workshop] --> loading[loading]
    src_skills_workshop[src-skills-workshop] --> loading[loading]
    src_skills_workshop[src-skills-workshop] --> loading[loading]
    src_skills_workshop[src-skills-workshop] --> loading[loading]
    src_skills_workshop[src-skills-workshop] --> runtime[runtime]
    src_skills_workshop[src-skills-workshop] --> security[security]
    src_skills_workshop[src-skills-workshop] --> test_support[test-support]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _[.]
    src_skills_workshop[src-skills-workshop] --> _openclaw[@openclaw]
    src_skills_workshop[src-skills-workshop] --> normalization_core[normalization-core]
    src_skills_workshop[src-skills-workshop] --> normalization_core[normalization-core]
    src_skills_workshop[src-skills-workshop] --> normalization_core[normalization-core]
    src_skills_workshop[src-skills-workshop] --> node_crypto[node:crypto]
    src_skills_workshop[src-skills-workshop] --> node_fs[node:fs]
    src_skills_workshop[src-skills-workshop] --> node_fs[node:fs]
    src_skills_workshop[src-skills-workshop] --> node_os[node:os]
    src_skills_workshop[src-skills-workshop] --> node_path[node:path]
    src_skills_workshop[src-skills-workshop] --> plugin_sdk[plugin-sdk]
    src_skills_workshop[src-skills-workshop] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/markdown-core/src/frontmatter.js`
- `../../agents/agent-scope.js`
- `../../agents/conversation-capability-profile.js`
- `../../agents/embedded-agent-runner/effective-tool-policy.js`
- `../../agents/embedded-agent-runner/model.js`
- `../../agents/embedded-agent-runner/runs.js`
- `../../agents/live-test-helpers.js`
- `../../agents/model-selection-config.js`
- `../../agents/model-selection.js`
- `../../agents/provider-tool-policy.js`
- `../../agents/tool-policy-match.js`
- `../../agents/utils/paths.js`
- `../../auto-reply/heartbeat-transcript-turns.js`
- `../../auto-reply/heartbeat.js`
- `../../config/config.js`
- `../../config/paths.js`
- `../../config/sessions/paths.js`
- `../../config/sessions/session-accessor.js`
- `../../gateway/session-transcript-readers.js`
- `../../infra/crypto-digest.js`
- `../../infra/diagnostic-events.js`
- `../../infra/errors.js`
- `../../infra/file-lock.js`
- `../../infra/fs-safe.js`
- `../../infra/json-files.js`
- `../../infra/kysely-sync.js`
- `../../infra/plugin-approvals.js`
- `../../logging/redact.js`
- `../../logging/subsystem.js`
- `../../plugin-state/plugin-state-store.js`
- `../../process/lanes.js`
- `../../routing/session-key.js`
- `../../state/openclaw-state-db.js`
- `../../test-utils/openclaw-test-state.js`
- `../../test-utils/tracked-temp-dirs.js`
- `../discovery/skill-index.js`
- `../discovery/status.js`
- `../lifecycle/workspace-skill-write.js`
- `../loading/frontmatter.js`
- `../loading/session.js`
- `../loading/symlink-targets.js`
- `../loading/workspace.js`
- `../runtime/refresh-state.js`
- `../security/scanner.js`
- `../test-support/e2e-test-helpers.js`
- `./config.js`
- `./curator.js`
- `./experience-review-prompt.js`
- `./experience-review.js`
- `./frontmatter.js`
- `./history-scan-candidate-rules.js`
- `./history-scan-candidates.js`
- `./history-scan-progress.js`
- `./history-scan-prompt.js`
- `./history-scan-review-outcome.js`
- `./history-scan-review.js`
- `./history-scan-state.js`
- `./history-scan-transcript-content.js`
- `./history-scan-transcript.js`
- `./history-scan.js`
- `./learn-prompt.js`
- `./policy.js`
- `./proposal-origin-validation.js`
- `./proposal-scan.js`
- `./service-query.js`
- `./service.js`
- `./store.js`
- `./tool-policy-diagnostic.js`
- `./types.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/utf16-slice`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/keyed-async-queue`
- `vitest`
