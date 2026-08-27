# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_cli_update_cli[src-cli-update-cli] --> src[src]
    src_cli_update_cli[src-cli-update-cli] --> src[src]
    src_cli_update_cli[src-cli-update-cli] --> src[src]
    src_cli_update_cli[src-cli-update-cli] --> src[src]
    src_cli_update_cli[src-cli-update-cli] --> src[src]
    src_cli_update_cli[src-cli-update-cli] --> src[src]
    src_cli_update_cli[src-cli-update-cli] --> commands[commands]
    src_cli_update_cli[src-cli-update-cli] --> commands[commands]
    src_cli_update_cli[src-cli-update-cli] --> shared[shared]
    src_cli_update_cli[src-cli-update-cli] --> shared[shared]
    src_cli_update_cli[src-cli-update-cli] --> commands[commands]
    src_cli_update_cli[src-cli-update-cli] --> config[config]
    src_cli_update_cli[src-cli-update-cli] --> config[config]
    src_cli_update_cli[src-cli-update-cli] --> config[config]
    src_cli_update_cli[src-cli-update-cli] --> config[config]
    src_cli_update_cli[src-cli-update-cli] --> config[config]
    src_cli_update_cli[src-cli-update-cli] --> config[config]
    src_cli_update_cli[src-cli-update-cli] --> config[config]
    src_cli_update_cli[src-cli-update-cli] --> daemon[daemon]
    src_cli_update_cli[src-cli-update-cli] --> daemon[daemon]
    src_cli_update_cli[src-cli-update-cli] --> daemon[daemon]
    src_cli_update_cli[src-cli-update-cli] --> daemon[daemon]
    src_cli_update_cli[src-cli-update-cli] --> daemon[daemon]
    src_cli_update_cli[src-cli-update-cli] --> daemon[daemon]
    src_cli_update_cli[src-cli-update-cli] --> daemon[daemon]
    src_cli_update_cli[src-cli-update-cli] --> daemon[daemon]
    src_cli_update_cli[src-cli-update-cli] --> daemon[daemon]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> format_time[format-time]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> infra[infra]
    src_cli_update_cli[src-cli-update-cli] --> plugins[plugins]
    src_cli_update_cli[src-cli-update-cli] --> plugins[plugins]
    src_cli_update_cli[src-cli-update-cli] --> plugins[plugins]
    src_cli_update_cli[src-cli-update-cli] --> plugins[plugins]
    src_cli_update_cli[src-cli-update-cli] --> plugins[plugins]
    src_cli_update_cli[src-cli-update-cli] --> plugins[plugins]
    src_cli_update_cli[src-cli-update-cli] --> plugins[plugins]
    src_cli_update_cli[src-cli-update-cli] --> plugins[plugins]
    src_cli_update_cli[src-cli-update-cli] --> plugins[plugins]
    src_cli_update_cli[src-cli-update-cli] --> plugins[plugins]
    src_cli_update_cli[src-cli-update-cli] --> plugins[plugins]
    src_cli_update_cli[src-cli-update-cli] --> plugins[plugins]
    src_cli_update_cli[src-cli-update-cli] --> plugins[plugins]
    src_cli_update_cli[src-cli-update-cli] --> process[process]
    src_cli_update_cli[src-cli-update-cli] --> __[..]
    src_cli_update_cli[src-cli-update-cli] --> state[state]
    src_cli_update_cli[src-cli-update-cli] --> test_helpers[test-helpers]
    src_cli_update_cli[src-cli-update-cli] --> __[..]
    src_cli_update_cli[src-cli-update-cli] --> __[..]
    src_cli_update_cli[src-cli-update-cli] --> __[..]
    src_cli_update_cli[src-cli-update-cli] --> __[..]
    src_cli_update_cli[src-cli-update-cli] --> __[..]
    src_cli_update_cli[src-cli-update-cli] --> __[..]
    src_cli_update_cli[src-cli-update-cli] --> daemon_cli[daemon-cli]
    src_cli_update_cli[src-cli-update-cli] --> daemon_cli[daemon-cli]
    src_cli_update_cli[src-cli-update-cli] --> __[..]
    src_cli_update_cli[src-cli-update-cli] --> __[..]
    src_cli_update_cli[src-cli-update-cli] --> _[.]
    src_cli_update_cli[src-cli-update-cli] --> _[.]
    src_cli_update_cli[src-cli-update-cli] --> _[.]
    src_cli_update_cli[src-cli-update-cli] --> _[.]
    src_cli_update_cli[src-cli-update-cli] --> _[.]
    src_cli_update_cli[src-cli-update-cli] --> _[.]
    src_cli_update_cli[src-cli-update-cli] --> _[.]
    src_cli_update_cli[src-cli-update-cli] --> _[.]
    src_cli_update_cli[src-cli-update-cli] --> _[.]
    src_cli_update_cli[src-cli-update-cli] --> _[.]
    src_cli_update_cli[src-cli-update-cli] --> _[.]
    src_cli_update_cli[src-cli-update-cli] --> _[.]
    src_cli_update_cli[src-cli-update-cli] --> _[.]
    src_cli_update_cli[src-cli-update-cli] --> _[.]
    src_cli_update_cli[src-cli-update-cli] --> _[.]
    src_cli_update_cli[src-cli-update-cli] --> _[.]
    src_cli_update_cli[src-cli-update-cli] --> _[.]
    src_cli_update_cli[src-cli-update-cli] --> _[.]
    src_cli_update_cli[src-cli-update-cli] --> _[.]
    src_cli_update_cli[src-cli-update-cli] --> _[.]
    src_cli_update_cli[src-cli-update-cli] --> _clack[@clack]
    src_cli_update_cli[src-cli-update-cli] --> _openclaw[@openclaw]
    src_cli_update_cli[src-cli-update-cli] --> normalization_core[normalization-core]
    src_cli_update_cli[src-cli-update-cli] --> normalization_core[normalization-core]
    src_cli_update_cli[src-cli-update-cli] --> normalization_core[normalization-core]
    src_cli_update_cli[src-cli-update-cli] --> node_child_process[node:child_process]
    src_cli_update_cli[src-cli-update-cli] --> node_fs[node:fs]
    src_cli_update_cli[src-cli-update-cli] --> node_fs[node:fs]
    src_cli_update_cli[src-cli-update-cli] --> node_os[node:os]
    src_cli_update_cli[src-cli-update-cli] --> node_path[node:path]
    src_cli_update_cli[src-cli-update-cli] --> node_stream[node:stream]
    src_cli_update_cli[src-cli-update-cli] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/terminal-core/src/ansi.js`
- `../../../packages/terminal-core/src/prompt-select-styled.js`
- `../../../packages/terminal-core/src/prompt-style.js`
- `../../../packages/terminal-core/src/safe-text.js`
- `../../../packages/terminal-core/src/table.js`
- `../../../packages/terminal-core/src/theme.js`
- `../../commands/doctor-completion.js`
- `../../commands/doctor.js`
- `../../commands/doctor/shared/missing-configured-plugin-install.js`
- `../../commands/doctor/shared/update-phase.js`
- `../../commands/status.update.js`
- `../../config/backup-rotation.js`
- `../../config/config.js`
- `../../config/env-substitution.js`
- `../../config/includes.js`
- `../../config/issue-format.js`
- `../../config/materialize.js`
- `../../config/paths.js`
- `../../daemon/cmd-argv.js`
- `../../daemon/constants.js`
- `../../daemon/gateway-entrypoint.js`
- `../../daemon/launchd.js`
- `../../daemon/paths.js`
- `../../daemon/restart-logs.js`
- `../../daemon/schtasks.js`
- `../../daemon/service-layout.js`
- `../../daemon/service.js`
- `../../infra/disk-space.js`
- `../../infra/format-time/format-duration.ts`
- `../../infra/fs-safe.js`
- `../../infra/gateway-supervision.js`
- `../../infra/home-dir.js`
- `../../infra/json-files.js`
- `../../infra/openclaw-root.js`
- `../../infra/package-json.js`
- `../../infra/package-tag.js`
- `../../infra/package-update-steps.js`
- `../../infra/parse-finite-number.js`
- `../../infra/restart-sentinel.js`
- `../../infra/restart-stale-pids.js`
- `../../infra/runtime-guard.js`
- `../../infra/update-channels.js`
- `../../infra/update-check-package-target.js`
- `../../infra/update-check.js`
- `../../infra/update-control-plane-sentinel.js`
- `../../infra/update-doctor-result.js`
- `../../infra/update-global.js`
- `../../infra/update-managed-service-handoff-cleanup.js`
- `../../infra/update-post-core-context.js`
- `../../infra/update-runner.js`
- `../../infra/windows-install-roots.js`
- `../../plugins/bundle-manifest.js`
- `../../plugins/config-state.js`
- `../../plugins/install-paths.js`
- `../../plugins/install-record-commit.js`
- `../../plugins/installed-plugin-index-records.js`
- `../../plugins/manifest.js`
- `../../plugins/npm-project-roots.js`
- `../../plugins/official-external-install-records.js`
- `../../plugins/package-entry-resolution.js`
- `../../plugins/plugin-peer-link.js`
- `../../plugins/registry-refresh.js`
- `../../plugins/stale-local-bundled-plugin-install-records.js`
- `../../plugins/update.js`
- `../../process/exec.js`
- `../../runtime.js`
- `../../state/openclaw-database-preflight.js`
- `../../test-helpers/temp-dir.js`
- `../../utils.js`
- `../../version.js`
- `../cli-name.js`
- `../command-format.js`
- `../completion-runtime.js`
- `../daemon-cli.js`
- `../daemon-cli/launchd-recovery.js`
- `../daemon-cli/restart-health.js`
- `../plugins-location-bridges.js`
- `../signal-exit-barrier.js`
- `./active-plugin-payload-validation.js`
- `./plugin-payload-validation.js`
- `./post-core-plugin-convergence.js`
- `./progress.js`
- `./restart-helper.js`
- `./shared.js`
- `./suppress-deprecations.js`
- `./update-command-config.js`
- `./update-command-dry-run.js`
- `./update-command-execution.js`
- `./update-command-git.js`
- `./update-command-package.js`
- `./update-command-plugins.js`
- `./update-command-plugins.test-support.js`
- `./update-command-post-core.js`
- `./update-command-post-update.js`
- `./update-command-resume.js`
- `./update-command-service.js`
- `./update-command-service.test-support.js`
- `./update-command.js`
- `@clack/prompts`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/result`
- `@openclaw/normalization-core/string-coerce`
- `node:child_process`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:stream`
- `vitest`
