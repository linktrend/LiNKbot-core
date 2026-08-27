# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_cli_daemon_cli[src-cli-daemon-cli] --> src[src]
    src_cli_daemon_cli[src-cli-daemon-cli] --> src[src]
    src_cli_daemon_cli[src-cli-daemon-cli] --> bootstrap[bootstrap]
    src_cli_daemon_cli[src-cli-daemon-cli] --> commands[commands]
    src_cli_daemon_cli[src-cli-daemon-cli] --> commands[commands]
    src_cli_daemon_cli[src-cli-daemon-cli] --> commands[commands]
    src_cli_daemon_cli[src-cli-daemon-cli] --> config[config]
    src_cli_daemon_cli[src-cli-daemon-cli] --> config[config]
    src_cli_daemon_cli[src-cli-daemon-cli] --> config[config]
    src_cli_daemon_cli[src-cli-daemon-cli] --> config[config]
    src_cli_daemon_cli[src-cli-daemon-cli] --> config[config]
    src_cli_daemon_cli[src-cli-daemon-cli] --> config[config]
    src_cli_daemon_cli[src-cli-daemon-cli] --> config[config]
    src_cli_daemon_cli[src-cli-daemon-cli] --> config[config]
    src_cli_daemon_cli[src-cli-daemon-cli] --> config[config]
    src_cli_daemon_cli[src-cli-daemon-cli] --> daemon[daemon]
    src_cli_daemon_cli[src-cli-daemon-cli] --> daemon[daemon]
    src_cli_daemon_cli[src-cli-daemon-cli] --> daemon[daemon]
    src_cli_daemon_cli[src-cli-daemon-cli] --> daemon[daemon]
    src_cli_daemon_cli[src-cli-daemon-cli] --> daemon[daemon]
    src_cli_daemon_cli[src-cli-daemon-cli] --> daemon[daemon]
    src_cli_daemon_cli[src-cli-daemon-cli] --> daemon[daemon]
    src_cli_daemon_cli[src-cli-daemon-cli] --> daemon[daemon]
    src_cli_daemon_cli[src-cli-daemon-cli] --> daemon[daemon]
    src_cli_daemon_cli[src-cli-daemon-cli] --> daemon[daemon]
    src_cli_daemon_cli[src-cli-daemon-cli] --> daemon[daemon]
    src_cli_daemon_cli[src-cli-daemon-cli] --> daemon[daemon]
    src_cli_daemon_cli[src-cli-daemon-cli] --> daemon[daemon]
    src_cli_daemon_cli[src-cli-daemon-cli] --> daemon[daemon]
    src_cli_daemon_cli[src-cli-daemon-cli] --> daemon[daemon]
    src_cli_daemon_cli[src-cli-daemon-cli] --> daemon[daemon]
    src_cli_daemon_cli[src-cli-daemon-cli] --> daemon[daemon]
    src_cli_daemon_cli[src-cli-daemon-cli] --> daemon[daemon]
    src_cli_daemon_cli[src-cli-daemon-cli] --> daemon[daemon]
    src_cli_daemon_cli[src-cli-daemon-cli] --> gateway[gateway]
    src_cli_daemon_cli[src-cli-daemon-cli] --> gateway[gateway]
    src_cli_daemon_cli[src-cli-daemon-cli] --> gateway[gateway]
    src_cli_daemon_cli[src-cli-daemon-cli] --> gateway[gateway]
    src_cli_daemon_cli[src-cli-daemon-cli] --> gateway[gateway]
    src_cli_daemon_cli[src-cli-daemon-cli] --> gateway[gateway]
    src_cli_daemon_cli[src-cli-daemon-cli] --> gateway[gateway]
    src_cli_daemon_cli[src-cli-daemon-cli] --> gateway[gateway]
    src_cli_daemon_cli[src-cli-daemon-cli] --> gateway[gateway]
    src_cli_daemon_cli[src-cli-daemon-cli] --> gateway[gateway]
    src_cli_daemon_cli[src-cli-daemon-cli] --> gateway[gateway]
    src_cli_daemon_cli[src-cli-daemon-cli] --> infra[infra]
    src_cli_daemon_cli[src-cli-daemon-cli] --> infra[infra]
    src_cli_daemon_cli[src-cli-daemon-cli] --> infra[infra]
    src_cli_daemon_cli[src-cli-daemon-cli] --> infra[infra]
    src_cli_daemon_cli[src-cli-daemon-cli] --> infra[infra]
    src_cli_daemon_cli[src-cli-daemon-cli] --> infra[infra]
    src_cli_daemon_cli[src-cli-daemon-cli] --> infra[infra]
    src_cli_daemon_cli[src-cli-daemon-cli] --> infra[infra]
    src_cli_daemon_cli[src-cli-daemon-cli] --> infra[infra]
    src_cli_daemon_cli[src-cli-daemon-cli] --> infra[infra]
    src_cli_daemon_cli[src-cli-daemon-cli] --> infra[infra]
    src_cli_daemon_cli[src-cli-daemon-cli] --> infra[infra]
    src_cli_daemon_cli[src-cli-daemon-cli] --> infra[infra]
    src_cli_daemon_cli[src-cli-daemon-cli] --> infra[infra]
    src_cli_daemon_cli[src-cli-daemon-cli] --> infra[infra]
    src_cli_daemon_cli[src-cli-daemon-cli] --> logging[logging]
    src_cli_daemon_cli[src-cli-daemon-cli] --> plugins[plugins]
    src_cli_daemon_cli[src-cli-daemon-cli] --> plugins[plugins]
    src_cli_daemon_cli[src-cli-daemon-cli] --> process[process]
    src_cli_daemon_cli[src-cli-daemon-cli] --> __[..]
    src_cli_daemon_cli[src-cli-daemon-cli] --> shared[shared]
    src_cli_daemon_cli[src-cli-daemon-cli] --> test_helpers[test-helpers]
    src_cli_daemon_cli[src-cli-daemon-cli] --> test_utils[test-utils]
    src_cli_daemon_cli[src-cli-daemon-cli] --> __[..]
    src_cli_daemon_cli[src-cli-daemon-cli] --> __[..]
    src_cli_daemon_cli[src-cli-daemon-cli] --> __[..]
    src_cli_daemon_cli[src-cli-daemon-cli] --> __[..]
    src_cli_daemon_cli[src-cli-daemon-cli] --> __[..]
    src_cli_daemon_cli[src-cli-daemon-cli] --> __[..]
    src_cli_daemon_cli[src-cli-daemon-cli] --> __[..]
    src_cli_daemon_cli[src-cli-daemon-cli] --> __[..]
    src_cli_daemon_cli[src-cli-daemon-cli] --> shared[shared]
    src_cli_daemon_cli[src-cli-daemon-cli] --> __[..]
    src_cli_daemon_cli[src-cli-daemon-cli] --> __[..]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _[.]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _[.]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _[.]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _[.]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _[.]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _[.]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _[.]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _[.]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _[.]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _[.]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _[.]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _[.]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _[.]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _[.]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _[.]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _[.]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _[.]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _[.]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _[.]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _[.]
    src_cli_daemon_cli[src-cli-daemon-cli] --> test_helpers[test-helpers]
    src_cli_daemon_cli[src-cli-daemon-cli] --> _openclaw[@openclaw]
    src_cli_daemon_cli[src-cli-daemon-cli] --> normalization_core[normalization-core]
    src_cli_daemon_cli[src-cli-daemon-cli] --> normalization_core[normalization-core]
    src_cli_daemon_cli[src-cli-daemon-cli] --> commander[commander]
    src_cli_daemon_cli[src-cli-daemon-cli] --> json5[json5]
    src_cli_daemon_cli[src-cli-daemon-cli] --> node_fs[node:fs]
    src_cli_daemon_cli[src-cli-daemon-cli] --> node_os[node:os]
    src_cli_daemon_cli[src-cli-daemon-cli] --> node_path[node:path]
    src_cli_daemon_cli[src-cli-daemon-cli] --> node_stream[node:stream]
    src_cli_daemon_cli[src-cli-daemon-cli] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/terminal-core/src/links.js`
- `../../../packages/terminal-core/src/theme.js`
- `../../bootstrap/node-startup-env.js`
- `../../commands/daemon-install-helpers.js`
- `../../commands/daemon-runtime.js`
- `../../commands/gateway-install-token.js`
- `../../config/commands.flags.js`
- `../../config/config.js`
- `../../config/future-version-guard.js`
- `../../config/io.js`
- `../../config/issue-format.js`
- `../../config/mutate.js`
- `../../config/paths.js`
- `../../config/recovery-policy.js`
- `../../config/types.secrets.js`
- `../../daemon/constants.js`
- `../../daemon/container-context.js`
- `../../daemon/diagnostics.js`
- `../../daemon/gateway-heap.js`
- `../../daemon/inspect.js`
- `../../daemon/launchd.js`
- `../../daemon/program-args.js`
- `../../daemon/restart-logs.js`
- `../../daemon/runtime-format.js`
- `../../daemon/runtime-hints.js`
- `../../daemon/service-audit.js`
- `../../daemon/service-env-merge.js`
- `../../daemon/service-mutation.js`
- `../../daemon/service-runtime.js`
- `../../daemon/service.js`
- `../../daemon/service.test-helpers.js`
- `../../daemon/systemd-hints.js`
- `../../daemon/systemd-unavailable.js`
- `../../daemon/systemd.js`
- `../../gateway/auth-token-resolution.js`
- `../../gateway/auth.js`
- `../../gateway/call.js`
- `../../gateway/control-ui-links.js`
- `../../gateway/credential-planner.js`
- `../../gateway/credentials-secret-inputs.js`
- `../../gateway/credentials.js`
- `../../gateway/net.js`
- `../../gateway/probe-auth.js`
- `../../gateway/probe.js`
- `../../gateway/secret-input-paths.js`
- `../../infra/errors.js`
- `../../infra/gateway-lock.js`
- `../../infra/gateway-processes.js`
- `../../infra/gateway-supervision.js`
- `../../infra/host-env-security.js`
- `../../infra/network-discovery-display.js`
- `../../infra/parse-finite-number.js`
- `../../infra/ports.js`
- `../../infra/restart-handoff.js`
- `../../infra/restart-intent.js`
- `../../infra/restart.js`
- `../../infra/startup-migration-checkpoint.js`
- `../../infra/tcp-port.js`
- `../../infra/windows-gateway-firewall-diagnostics.js`
- `../../infra/wsl.js`
- `../../logging/log-file-path.js`
- `../../plugins/installed-plugin-index-record-reader.js`
- `../../plugins/plugin-version-drift.js`
- `../../process/kill-tree.js`
- `../../runtime.js`
- `../../shared/lazy-promise.js`
- `../../test-helpers/workspace.js`
- `../../test-utils/env.js`
- `../../utils.js`
- `../../version.js`
- `../command-format.js`
- `../command-options.js`
- `../config-recovery-hints.js`
- `../error-format.js`
- `../parse-duration.js`
- `../progress.js`
- `../shared/parse-port.js`
- `../terminal-interactivity.js`
- `../test-runtime-capture.js`
- `./gateway-token-drift.js`
- `./install.js`
- `./launchd-recovery.js`
- `./lifecycle-audit.js`
- `./lifecycle-config-preflight.js`
- `./lifecycle-core.js`
- `./lifecycle-safe-restart.js`
- `./probe.js`
- `./register-service-commands.js`
- `./response.js`
- `./restart-health-probe.js`
- `./restart-health.constants.js`
- `./restart-health.js`
- `./restart-health.test-helpers.js`
- `./restart-lock-replacement.js`
- `./restart-port-ownership.js`
- `./shared.js`
- `./start-repair.js`
- `./status.gather.js`
- `./status.print.js`
- `./test-helpers/lifecycle-core-harness.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `commander`
- `json5`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:stream`
- `vitest`
