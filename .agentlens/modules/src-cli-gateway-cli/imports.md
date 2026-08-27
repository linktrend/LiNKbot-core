# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_cli_gateway_cli[src-cli-gateway-cli] --> src[src]
    src_cli_gateway_cli[src-cli-gateway-cli] --> src[src]
    src_cli_gateway_cli[src-cli-gateway-cli] --> src[src]
    src_cli_gateway_cli[src-cli-gateway-cli] --> src[src]
    src_cli_gateway_cli[src-cli-gateway-cli] --> agents[agents]
    src_cli_gateway_cli[src-cli-gateway-cli] --> agents[agents]
    src_cli_gateway_cli[src-cli-gateway-cli] --> commands[commands]
    src_cli_gateway_cli[src-cli-gateway-cli] --> config[config]
    src_cli_gateway_cli[src-cli-gateway-cli] --> config[config]
    src_cli_gateway_cli[src-cli-gateway-cli] --> config[config]
    src_cli_gateway_cli[src-cli-gateway-cli] --> config[config]
    src_cli_gateway_cli[src-cli-gateway-cli] --> config[config]
    src_cli_gateway_cli[src-cli-gateway-cli] --> config[config]
    src_cli_gateway_cli[src-cli-gateway-cli] --> config[config]
    src_cli_gateway_cli[src-cli-gateway-cli] --> config[config]
    src_cli_gateway_cli[src-cli-gateway-cli] --> config[config]
    src_cli_gateway_cli[src-cli-gateway-cli] --> daemon[daemon]
    src_cli_gateway_cli[src-cli-gateway-cli] --> daemon[daemon]
    src_cli_gateway_cli[src-cli-gateway-cli] --> gateway[gateway]
    src_cli_gateway_cli[src-cli-gateway-cli] --> gateway[gateway]
    src_cli_gateway_cli[src-cli-gateway-cli] --> gateway[gateway]
    src_cli_gateway_cli[src-cli-gateway-cli] --> gateway[gateway]
    src_cli_gateway_cli[src-cli-gateway-cli] --> __[..]
    src_cli_gateway_cli[src-cli-gateway-cli] --> infra[infra]
    src_cli_gateway_cli[src-cli-gateway-cli] --> infra[infra]
    src_cli_gateway_cli[src-cli-gateway-cli] --> infra[infra]
    src_cli_gateway_cli[src-cli-gateway-cli] --> infra[infra]
    src_cli_gateway_cli[src-cli-gateway-cli] --> infra[infra]
    src_cli_gateway_cli[src-cli-gateway-cli] --> infra[infra]
    src_cli_gateway_cli[src-cli-gateway-cli] --> infra[infra]
    src_cli_gateway_cli[src-cli-gateway-cli] --> infra[infra]
    src_cli_gateway_cli[src-cli-gateway-cli] --> infra[infra]
    src_cli_gateway_cli[src-cli-gateway-cli] --> tls[tls]
    src_cli_gateway_cli[src-cli-gateway-cli] --> logging[logging]
    src_cli_gateway_cli[src-cli-gateway-cli] --> logging[logging]
    src_cli_gateway_cli[src-cli-gateway-cli] --> logging[logging]
    src_cli_gateway_cli[src-cli-gateway-cli] --> __[..]
    src_cli_gateway_cli[src-cli-gateway-cli] --> shared[shared]
    src_cli_gateway_cli[src-cli-gateway-cli] --> tasks[tasks]
    src_cli_gateway_cli[src-cli-gateway-cli] --> test_utils[test-utils]
    src_cli_gateway_cli[src-cli-gateway-cli] --> test_utils[test-utils]
    src_cli_gateway_cli[src-cli-gateway-cli] --> test_utils[test-utils]
    src_cli_gateway_cli[src-cli-gateway-cli] --> test_utils[test-utils]
    src_cli_gateway_cli[src-cli-gateway-cli] --> __[..]
    src_cli_gateway_cli[src-cli-gateway-cli] --> utils[utils]
    src_cli_gateway_cli[src-cli-gateway-cli] --> __[..]
    src_cli_gateway_cli[src-cli-gateway-cli] --> __[..]
    src_cli_gateway_cli[src-cli-gateway-cli] --> __[..]
    src_cli_gateway_cli[src-cli-gateway-cli] --> daemon_cli[daemon-cli]
    src_cli_gateway_cli[src-cli-gateway-cli] --> __[..]
    src_cli_gateway_cli[src-cli-gateway-cli] --> __[..]
    src_cli_gateway_cli[src-cli-gateway-cli] --> __[..]
    src_cli_gateway_cli[src-cli-gateway-cli] --> __[..]
    src_cli_gateway_cli[src-cli-gateway-cli] --> __[..]
    src_cli_gateway_cli[src-cli-gateway-cli] --> shared[shared]
    src_cli_gateway_cli[src-cli-gateway-cli] --> __[..]
    src_cli_gateway_cli[src-cli-gateway-cli] --> __[..]
    src_cli_gateway_cli[src-cli-gateway-cli] --> _[.]
    src_cli_gateway_cli[src-cli-gateway-cli] --> _[.]
    src_cli_gateway_cli[src-cli-gateway-cli] --> _[.]
    src_cli_gateway_cli[src-cli-gateway-cli] --> _[.]
    src_cli_gateway_cli[src-cli-gateway-cli] --> _[.]
    src_cli_gateway_cli[src-cli-gateway-cli] --> _[.]
    src_cli_gateway_cli[src-cli-gateway-cli] --> _[.]
    src_cli_gateway_cli[src-cli-gateway-cli] --> _[.]
    src_cli_gateway_cli[src-cli-gateway-cli] --> _[.]
    src_cli_gateway_cli[src-cli-gateway-cli] --> _[.]
    src_cli_gateway_cli[src-cli-gateway-cli] --> _[.]
    src_cli_gateway_cli[src-cli-gateway-cli] --> _openclaw[@openclaw]
    src_cli_gateway_cli[src-cli-gateway-cli] --> normalization_core[normalization-core]
    src_cli_gateway_cli[src-cli-gateway-cli] --> normalization_core[normalization-core]
    src_cli_gateway_cli[src-cli-gateway-cli] --> normalization_core[normalization-core]
    src_cli_gateway_cli[src-cli-gateway-cli] --> commander[commander]
    src_cli_gateway_cli[src-cli-gateway-cli] --> node_crypto[node:crypto]
    src_cli_gateway_cli[src-cli-gateway-cli] --> node_fs[node:fs]
    src_cli_gateway_cli[src-cli-gateway-cli] --> node_fs[node:fs]
    src_cli_gateway_cli[src-cli-gateway-cli] --> node_http[node:http]
    src_cli_gateway_cli[src-cli-gateway-cli] --> node_https[node:https]
    src_cli_gateway_cli[src-cli-gateway-cli] --> node_net[node:net]
    src_cli_gateway_cli[src-cli-gateway-cli] --> node_os[node:os]
    src_cli_gateway_cli[src-cli-gateway-cli] --> node_path[node:path]
    src_cli_gateway_cli[src-cli-gateway-cli] --> node_tls[node:tls]
    src_cli_gateway_cli[src-cli-gateway-cli] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/gateway-protocol/src/client-info.js`
- `../../../packages/markdown-core/src/frontmatter.js`
- `../../../packages/terminal-core/src/links.js`
- `../../../packages/terminal-core/src/theme.js`
- `../../agents/workspace-templates.js`
- `../../agents/workspace.js`
- `../../commands/onboard-helpers.js`
- `../../config/config-env-vars.js`
- `../../config/config.js`
- `../../config/future-version-guard.js`
- `../../config/gateway-env-selection.js`
- `../../config/io.audit.js`
- `../../config/io.invalid-config.js`
- `../../config/paths.js`
- `../../config/runtime-snapshot.js`
- `../../config/types.secrets.js`
- `../../daemon/constants.js`
- `../../daemon/service.js`
- `../../gateway/call.js`
- `../../gateway/net.js`
- `../../gateway/restart-trace.js`
- `../../gateway/ws-logging.js`
- `../../globals.js`
- `../../infra/env.js`
- `../../infra/errors.js`
- `../../infra/gateway-boot-lifecycle.js`
- `../../infra/gateway-discovery-targets.js`
- `../../infra/gateway-lock.js`
- `../../infra/gateway-processes.js`
- `../../infra/parse-finite-number.js`
- `../../infra/restart-handoff-contract.js`
- `../../infra/supervisor-markers.js`
- `../../infra/tls/fingerprint.js`
- `../../logging/console.js`
- `../../logging/diagnostic-phase.js`
- `../../logging/subsystem.js`
- `../../runtime.js`
- `../../shared/lazy-promise.js`
- `../../tasks/task-restart-blocker.js`
- `../../test-utils/command-runner.js`
- `../../test-utils/env.js`
- `../../test-utils/ports.js`
- `../../test-utils/secret-file-fixture.js`
- `../../utils.js`
- `../../utils/sleep.js`
- `../claw-banner.js`
- `../command-format.js`
- `../command-options.js`
- `../daemon-cli/register-service-commands.js`
- `../error-format.js`
- `../gateway-port-option.js`
- `../help-format.js`
- `../parse-timeout.js`
- `../progress.js`
- `../shared/parse-port.js`
- `../terminal-interactivity.js`
- `../test-runtime-capture.js`
- `./discover.js`
- `./future-config-guard.js`
- `./qa-parent-watchdog.js`
- `./register-restart-handoff.js`
- `./register.js`
- `./run-command.js`
- `./run-loop.js`
- `./run-options.js`
- `./run.js`
- `./run.test-support.js`
- `./runtime-hooks.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `commander`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:http`
- `node:https`
- `node:net`
- `node:os`
- `node:path`
- `node:tls`
- `vitest`
