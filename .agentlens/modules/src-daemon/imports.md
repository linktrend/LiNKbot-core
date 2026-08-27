# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_daemon[src-daemon] --> src[src]
    src_daemon[src-daemon] --> src[src]
    src_daemon[src-daemon] --> bootstrap[bootstrap]
    src_daemon[src-daemon] --> bootstrap[bootstrap]
    src_daemon[src-daemon] --> cli[cli]
    src_daemon[src-daemon] --> config[config]
    src_daemon[src-daemon] --> config[config]
    src_daemon[src-daemon] --> config[config]
    src_daemon[src-daemon] --> config[config]
    src_daemon[src-daemon] --> infra[infra]
    src_daemon[src-daemon] --> infra[infra]
    src_daemon[src-daemon] --> infra[infra]
    src_daemon[src-daemon] --> infra[infra]
    src_daemon[src-daemon] --> infra[infra]
    src_daemon[src-daemon] --> infra[infra]
    src_daemon[src-daemon] --> infra[infra]
    src_daemon[src-daemon] --> infra[infra]
    src_daemon[src-daemon] --> infra[infra]
    src_daemon[src-daemon] --> infra[infra]
    src_daemon[src-daemon] --> infra[infra]
    src_daemon[src-daemon] --> infra[infra]
    src_daemon[src-daemon] --> infra[infra]
    src_daemon[src-daemon] --> infra[infra]
    src_daemon[src-daemon] --> infra[infra]
    src_daemon[src-daemon] --> infra[infra]
    src_daemon[src-daemon] --> infra[infra]
    src_daemon[src-daemon] --> infra[infra]
    src_daemon[src-daemon] --> infra[infra]
    src_daemon[src-daemon] --> infra[infra]
    src_daemon[src-daemon] --> process[process]
    src_daemon[src-daemon] --> process[process]
    src_daemon[src-daemon] --> test_helpers[test-helpers]
    src_daemon[src-daemon] --> test_utils[test-utils]
    src_daemon[src-daemon] --> test_utils[test-utils]
    src_daemon[src-daemon] --> __[..]
    src_daemon[src-daemon] --> utils[utils]
    src_daemon[src-daemon] --> __[..]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> _[.]
    src_daemon[src-daemon] --> test_helpers[test-helpers]
    src_daemon[src-daemon] --> test_helpers[test-helpers]
    src_daemon[src-daemon] --> _openclaw[@openclaw]
    src_daemon[src-daemon] --> normalization_core[normalization-core]
    src_daemon[src-daemon] --> normalization_core[normalization-core]
    src_daemon[src-daemon] --> normalization_core[normalization-core]
    src_daemon[src-daemon] --> normalization_core[normalization-core]
    src_daemon[src-daemon] --> node_child_process[node:child_process]
    src_daemon[src-daemon] --> node_crypto[node:crypto]
    src_daemon[src-daemon] --> node_fs[node:fs]
    src_daemon[src-daemon] --> node_fs[node:fs]
    src_daemon[src-daemon] --> node_os[node:os]
    src_daemon[src-daemon] --> node_path[node:path]
    src_daemon[src-daemon] --> node_sqlite[node:sqlite]
    src_daemon[src-daemon] --> node_stream[node:stream]
    src_daemon[src-daemon] --> node_util[node:util]
    src_daemon[src-daemon] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../packages/terminal-core/src/ansi.js`
- `../../packages/terminal-core/src/theme.js`
- `../bootstrap/node-extra-ca-certs.js`
- `../bootstrap/node-startup-env.js`
- `../cli/command-format.js`
- `../config/config.js`
- `../config/future-version-guard.js`
- `../config/paths.js`
- `../config/state-dir-dotenv.js`
- `../infra/errors.js`
- `../infra/fs-safe.js`
- `../infra/gateway-process-argv.js`
- `../infra/gateway-processes.js`
- `../infra/gateway-supervision.js`
- `../infra/host-env-security.js`
- `../infra/package-json.js`
- `../infra/parse-finite-number.js`
- `../infra/ports-probe.js`
- `../infra/ports.js`
- `../infra/restart-stale-pids.js`
- `../infra/runtime-guard.js`
- `../infra/runtime-status.ts`
- `../infra/shell-inline-command.js`
- `../infra/shell-wrapper-resolution.js`
- `../infra/sqlite-runtime-version.js`
- `../infra/stable-node-path.js`
- `../infra/tcp-port.js`
- `../infra/windows-install-roots.js`
- `../infra/windows-launcher-encoding.js`
- `../process/exec.js`
- `../process/kill-tree.js`
- `../test-helpers/workspace.js`
- `../test-utils/env.js`
- `../test-utils/vitest-spies.js`
- `../utils.js`
- `../utils/with-timeout.js`
- `../version.js`
- `./arg-split.js`
- `./cmd-argv.js`
- `./cmd-set.js`
- `./constants.js`
- `./diagnostics.js`
- `./exec-file.js`
- `./future-config-guard.js`
- `./gateway-entrypoint.js`
- `./gateway-heap.js`
- `./inspect.js`
- `./launchd-current-service.js`
- `./launchd-plist.js`
- `./launchd-restart-handoff.js`
- `./launchd.js`
- `./output.js`
- `./paths.js`
- `./program-args.js`
- `./restart-logs.js`
- `./runtime-binary.js`
- `./runtime-format.js`
- `./runtime-hints.js`
- `./runtime-parse.js`
- `./runtime-paths.js`
- `./schtasks-exec.js`
- `./schtasks.js`
- `./service-audit.js`
- `./service-env-merge.js`
- `./service-env-plan.js`
- `./service-env.js`
- `./service-layout.js`
- `./service-managed-env.js`
- `./service-mutation.js`
- `./service-path-policy.js`
- `./service-runtime.js`
- `./service.js`
- `./service.test-helpers.js`
- `./systemd-hints.js`
- `./systemd-linger.js`
- `./systemd-unavailable.js`
- `./systemd-unit.js`
- `./systemd.js`
- `./test-helpers/schtasks-base-mocks.js`
- `./test-helpers/schtasks-fixtures.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/result`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `node:child_process`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:sqlite`
- `node:stream`
- `node:util`
- `vitest`
