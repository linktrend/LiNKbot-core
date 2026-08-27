# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    scripts_e2e_parallels[scripts-e2e-parallels] --> format_time[format-time]
    scripts_e2e_parallels[scripts-e2e-parallels] --> lib[lib]
    scripts_e2e_parallels[scripts-e2e-parallels] --> __[..]
    scripts_e2e_parallels[scripts-e2e-parallels] --> __[..]
    scripts_e2e_parallels[scripts-e2e-parallels] --> __[..]
    scripts_e2e_parallels[scripts-e2e-parallels] --> _[.]
    scripts_e2e_parallels[scripts-e2e-parallels] --> _[.]
    scripts_e2e_parallels[scripts-e2e-parallels] --> _[.]
    scripts_e2e_parallels[scripts-e2e-parallels] --> _[.]
    scripts_e2e_parallels[scripts-e2e-parallels] --> _[.]
    scripts_e2e_parallels[scripts-e2e-parallels] --> _[.]
    scripts_e2e_parallels[scripts-e2e-parallels] --> _[.]
    scripts_e2e_parallels[scripts-e2e-parallels] --> _[.]
    scripts_e2e_parallels[scripts-e2e-parallels] --> _[.]
    scripts_e2e_parallels[scripts-e2e-parallels] --> _[.]
    scripts_e2e_parallels[scripts-e2e-parallels] --> _[.]
    scripts_e2e_parallels[scripts-e2e-parallels] --> _[.]
    scripts_e2e_parallels[scripts-e2e-parallels] --> _[.]
    scripts_e2e_parallels[scripts-e2e-parallels] --> _[.]
    scripts_e2e_parallels[scripts-e2e-parallels] --> _[.]
    scripts_e2e_parallels[scripts-e2e-parallels] --> _[.]
    scripts_e2e_parallels[scripts-e2e-parallels] --> _[.]
    scripts_e2e_parallels[scripts-e2e-parallels] --> _[.]
    scripts_e2e_parallels[scripts-e2e-parallels] --> _[.]
    scripts_e2e_parallels[scripts-e2e-parallels] --> _openclaw[@openclaw]
    scripts_e2e_parallels[scripts-e2e-parallels] --> normalization_core[normalization-core]
    scripts_e2e_parallels[scripts-e2e-parallels] --> node_child_process[node:child_process]
    scripts_e2e_parallels[scripts-e2e-parallels] --> node_crypto[node:crypto]
    scripts_e2e_parallels[scripts-e2e-parallels] --> node_fs[node:fs]
    scripts_e2e_parallels[scripts-e2e-parallels] --> node_fs[node:fs]
    scripts_e2e_parallels[scripts-e2e-parallels] --> node_http[node:http]
    scripts_e2e_parallels[scripts-e2e-parallels] --> node_net[node:net]
    scripts_e2e_parallels[scripts-e2e-parallels] --> node_os[node:os]
    scripts_e2e_parallels[scripts-e2e-parallels] --> node_path[node:path]
    scripts_e2e_parallels[scripts-e2e-parallels] --> node_stream[node:stream]
    scripts_e2e_parallels[scripts-e2e-parallels] --> node_url[node:url]
```

## External Dependencies

Dependencies from other modules:

- `../../../src/infra/format-time/format-duration.ts`
- `../../lib/sleep.mjs`
- `../../npm-runner.mjs`
- `../../pnpm-runner.mjs`
- `../../windows-cmd-helpers.mjs`
- `./agent-workspace.ts`
- `./common.ts`
- `./env-limits.ts`
- `./filesystem.ts`
- `./guest-transports.ts`
- `./host-command.ts`
- `./host-server.ts`
- `./lane-runner.ts`
- `./macos-discord.ts`
- `./npm-update-scripts.ts`
- `./package-artifact.ts`
- `./parallels-vm.ts`
- `./phase-runner.ts`
- `./plugin-isolation.ts`
- `./powershell.ts`
- `./provider-auth.ts`
- `./smoke-common.ts`
- `./update-job-timeout.ts`
- `./windows-git.ts`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `node:child_process`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:http`
- `node:net`
- `node:os`
- `node:path`
- `node:stream/promises`
- `node:url`
