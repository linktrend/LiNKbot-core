# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_logging[src-logging] --> src[src]
    src_logging[src-logging] --> src[src]
    src_logging[src-logging] --> helpers[helpers]
    src_logging[src-logging] --> embedded_agent_runner[embedded-agent-runner]
    src_logging[src-logging] --> embedded_agent_runner[embedded-agent-runner]
    src_logging[src-logging] --> embedded_agent_runner[embedded-agent-runner]
    src_logging[src-logging] --> embedded_agent_runner[embedded-agent-runner]
    src_logging[src-logging] --> reply[reply]
    src_logging[src-logging] --> reply[reply]
    src_logging[src-logging] --> cli[cli]
    src_logging[src-logging] --> config[config]
    src_logging[src-logging] --> config[config]
    src_logging[src-logging] --> config[config]
    src_logging[src-logging] --> config[config]
    src_logging[src-logging] --> config[config]
    src_logging[src-logging] --> config[config]
    src_logging[src-logging] --> sessions[sessions]
    src_logging[src-logging] --> cron[cron]
    src_logging[src-logging] --> __[..]
    src_logging[src-logging] --> infra[infra]
    src_logging[src-logging] --> infra[infra]
    src_logging[src-logging] --> infra[infra]
    src_logging[src-logging] --> infra[infra]
    src_logging[src-logging] --> infra[infra]
    src_logging[src-logging] --> infra[infra]
    src_logging[src-logging] --> infra[infra]
    src_logging[src-logging] --> infra[infra]
    src_logging[src-logging] --> infra[infra]
    src_logging[src-logging] --> infra[infra]
    src_logging[src-logging] --> infra[infra]
    src_logging[src-logging] --> infra[infra]
    src_logging[src-logging] --> infra[infra]
    src_logging[src-logging] --> __[..]
    src_logging[src-logging] --> process[process]
    src_logging[src-logging] --> process[process]
    src_logging[src-logging] --> __[..]
    src_logging[src-logging] --> security[security]
    src_logging[src-logging] --> shared[shared]
    src_logging[src-logging] --> test_helpers[test-helpers]
    src_logging[src-logging] --> test_utils[test-utils]
    src_logging[src-logging] --> test_utils[test-utils]
    src_logging[src-logging] --> __[..]
    src_logging[src-logging] --> __[..]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> test_helpers[test-helpers]
    src_logging[src-logging] --> test_helpers[test-helpers]
    src_logging[src-logging] --> _[.]
    src_logging[src-logging] --> _openclaw[@openclaw]
    src_logging[src-logging] --> net_policy[net-policy]
    src_logging[src-logging] --> _openclaw[@openclaw]
    src_logging[src-logging] --> normalization_core[normalization-core]
    src_logging[src-logging] --> normalization_core[normalization-core]
    src_logging[src-logging] --> normalization_core[normalization-core]
    src_logging[src-logging] --> chalk[chalk]
    src_logging[src-logging] --> json5[json5]
    src_logging[src-logging] --> jszip[jszip]
    src_logging[src-logging] --> node_crypto[node:crypto]
    src_logging[src-logging] --> node_fs[node:fs]
    src_logging[src-logging] --> node_fs[node:fs]
    src_logging[src-logging] --> node_os[node:os]
    src_logging[src-logging] --> node_path[node:path]
    src_logging[src-logging] --> node_perf_hooks[node:perf_hooks]
    src_logging[src-logging] --> node_process[node:process]
    src_logging[src-logging] --> node_util[node:util]
    src_logging[src-logging] --> node_v8[node:v8]
    src_logging[src-logging] --> plugin_sdk[plugin-sdk]
    src_logging[src-logging] --> tslog[tslog]
    src_logging[src-logging] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../packages/terminal-core/src/ansi.js`
- `../../packages/terminal-core/src/progress-line.js`
- `../../test/helpers/temp-dir.js`
- `../agents/embedded-agent-runner/compaction-safety-timeout.js`
- `../agents/embedded-agent-runner/lanes.js`
- `../agents/embedded-agent-runner/runs.js`
- `../agents/embedded-agent-runner/runs.test-support.js`
- `../auto-reply/reply/reply-run-registry.js`
- `../auto-reply/reply/reply-run-registry.test-support.js`
- `../cli/argv.js`
- `../config/config.js`
- `../config/io.js`
- `../config/paths.js`
- `../config/redact-snapshot.js`
- `../config/redact-snapshot.secret-ref.js`
- `../config/schema.js`
- `../config/sessions/targets.js`
- `../cron/store.js`
- `../global-state.js`
- `../infra/crypto-digest.js`
- `../infra/diagnostic-event-listener-presence.js`
- `../infra/diagnostic-events.js`
- `../infra/diagnostic-trace-context.js`
- `../infra/fatal-error-hooks.js`
- `../infra/file-read.js`
- `../infra/home-dir.js`
- `../infra/parse-finite-number.js`
- `../infra/path-guards.js`
- `../infra/prototype-keys.js`
- `../infra/regular-file.js`
- `../infra/replace-file.js`
- `../infra/tmp-openclaw-dir.js`
- `../logging.js`
- `../process/command-queue.js`
- `../process/command-queue.test-support.js`
- `../runtime.js`
- `../security/config-regex.js`
- `../shared/lazy-runtime.js`
- `../test-helpers/temp-dir.js`
- `../test-utils/env.js`
- `../test-utils/openclaw-test-state.js`
- `../utils.js`
- `../version.js`
- `./config.js`
- `./console.js`
- `./diagnostic-memory.js`
- `./diagnostic-phase.js`
- `./diagnostic-run-activity.js`
- `./diagnostic-run-activity.test-support.js`
- `./diagnostic-runtime.js`
- `./diagnostic-session-attention.js`
- `./diagnostic-session-context.js`
- `./diagnostic-session-recovery-coordinator.js`
- `./diagnostic-session-recovery.js`
- `./diagnostic-session-state.js`
- `./diagnostic-stability-bundle.js`
- `./diagnostic-stability.js`
- `./diagnostic-stuck-session-recovery.runtime.js`
- `./diagnostic-support-bundle.js`
- `./diagnostic-support-export.js`
- `./diagnostic-support-log-redaction.js`
- `./diagnostic-support-redaction.js`
- `./diagnostic.js`
- `./env-log-level.js`
- `./levels.js`
- `./log-file-shared.js`
- `./log-tail.js`
- `./log-test-helpers.js`
- `./logger.js`
- `./message-lifecycle.js`
- `./parse-log-line.js`
- `./redact-bounded.js`
- `./redact-internal-state.js`
- `./redact-internal.js`
- `./redact.js`
- `./redact.test-support.js`
- `./secret-redaction-registry.js`
- `./secret-redaction-registry.test-support.js`
- `./state.js`
- `./subsystem.js`
- `./test-helpers/console-snapshot.js`
- `./test-helpers/diagnostic-log-capture.js`
- `./timestamps.js`
- `@openclaw/acp-core`
- `@openclaw/net-policy/redact-sensitive-url`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/utf16-slice`
- `chalk`
- `json5`
- `jszip`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:perf_hooks`
- `node:process`
- `node:util`
- `node:v8`
- `openclaw/plugin-sdk/test-fixtures`
- `tslog`
- `vitest`
