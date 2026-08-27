# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_cli_program[src-cli-program] --> src[src]
    src_cli_program[src-cli-program] --> src[src]
    src_cli_program[src-cli-program] --> src[src]
    src_cli_program[src-cli-program] --> src[src]
    src_cli_program[src-cli-program] --> src[src]
    src_cli_program[src-cli-program] --> commands[commands]
    src_cli_program[src-cli-program] --> commands[commands]
    src_cli_program[src-cli-program] --> commands[commands]
    src_cli_program[src-cli-program] --> commands[commands]
    src_cli_program[src-cli-program] --> commands[commands]
    src_cli_program[src-cli-program] --> commands[commands]
    src_cli_program[src-cli-program] --> commands[commands]
    src_cli_program[src-cli-program] --> commands[commands]
    src_cli_program[src-cli-program] --> config[config]
    src_cli_program[src-cli-program] --> config[config]
    src_cli_program[src-cli-program] --> config[config]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> infra[infra]
    src_cli_program[src-cli-program] --> infra[infra]
    src_cli_program[src-cli-program] --> infra[infra]
    src_cli_program[src-cli-program] --> infra[infra]
    src_cli_program[src-cli-program] --> infra[infra]
    src_cli_program[src-cli-program] --> infra[infra]
    src_cli_program[src-cli-program] --> logging[logging]
    src_cli_program[src-cli-program] --> plugins[plugins]
    src_cli_program[src-cli-program] --> plugins[plugins]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> shared[shared]
    src_cli_program[src-cli-program] --> shared[shared]
    src_cli_program[src-cli-program] --> shared[shared]
    src_cli_program[src-cli-program] --> test_utils[test-utils]
    src_cli_program[src-cli-program] --> transcripts[transcripts]
    src_cli_program[src-cli-program] --> transcripts[transcripts]
    src_cli_program[src-cli-program] --> transcripts[transcripts]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> __[..]
    src_cli_program[src-cli-program] --> shared[shared]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> message[message]
    src_cli_program[src-cli-program] --> message[message]
    src_cli_program[src-cli-program] --> message[message]
    src_cli_program[src-cli-program] --> message[message]
    src_cli_program[src-cli-program] --> message[message]
    src_cli_program[src-cli-program] --> message[message]
    src_cli_program[src-cli-program] --> message[message]
    src_cli_program[src-cli-program] --> message[message]
    src_cli_program[src-cli-program] --> message[message]
    src_cli_program[src-cli-program] --> message[message]
    src_cli_program[src-cli-program] --> message[message]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _[.]
    src_cli_program[src-cli-program] --> _openclaw[@openclaw]
    src_cli_program[src-cli-program] --> normalization_core[normalization-core]
    src_cli_program[src-cli-program] --> commander[commander]
    src_cli_program[src-cli-program] --> node_fs[node:fs]
    src_cli_program[src-cli-program] --> node_fs[node:fs]
    src_cli_program[src-cli-program] --> node_os[node:os]
    src_cli_program[src-cli-program] --> node_path[node:path]
    src_cli_program[src-cli-program] --> node_process[node:process]
    src_cli_program[src-cli-program] --> node_url[node:url]
    src_cli_program[src-cli-program] --> plugin_sdk[plugin-sdk]
    src_cli_program[src-cli-program] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/terminal-core/src/ansi.js`
- `../../../packages/terminal-core/src/links.js`
- `../../../packages/terminal-core/src/note.js`
- `../../../packages/terminal-core/src/safe-text.js`
- `../../../packages/terminal-core/src/theme.js`
- `../../commands/audit.js`
- `../../commands/auth-choice-options.js`
- `../../commands/backup-sqlite.js`
- `../../commands/backup-verify.js`
- `../../commands/backup.js`
- `../../commands/configure.shared.js`
- `../../commands/migrate.js`
- `../../commands/onboard-core-auth-flags.js`
- `../../config/config.js`
- `../../config/io.invalid-config.js`
- `../../config/paths.js`
- `../../globals.js`
- `../../infra/cli-root-options.js`
- `../../infra/errors.js`
- `../../infra/git-commit.js`
- `../../infra/home-dir.js`
- `../../infra/openclaw-root.js`
- `../../infra/parse-finite-number.js`
- `../../logging/state.js`
- `../../plugins/cli.js`
- `../../plugins/provider-auth-choices.js`
- `../../runtime.js`
- `../../shared/lazy-promise.js`
- `../../shared/lazy-runtime.js`
- `../../shared/levenshtein-distance.js`
- `../../test-utils/env.js`
- `../../transcripts/manual-source.js`
- `../../transcripts/store.js`
- `../../transcripts/summary.js`
- `../../utils.js`
- `../../version.js`
- `../argv-invocation.js`
- `../argv.js`
- `../banner.js`
- `../channel-options.js`
- `../cli-name.js`
- `../cli-utils.js`
- `../command-catalog.js`
- `../command-execution-startup.js`
- `../command-format.js`
- `../command-options.js`
- `../command-path-matches.js`
- `../command-path-policy.js`
- `../command-registration-policy.js`
- `../command-startup-policy.js`
- `../fresh-install-config.js`
- `../help-format.js`
- `../log-level-option.js`
- `../plugin-install-config-policy.js`
- `../shared/parse-port.js`
- `./action-reparse.js`
- `./build-program.js`
- `./command-descriptor-utils.js`
- `./command-group-descriptors.js`
- `./command-registry-core.js`
- `./command-registry.js`
- `./command-suggestions.js`
- `./command-tree.js`
- `./config-guard.js`
- `./context.js`
- `./core-command-descriptors.js`
- `./error-output.js`
- `./help.js`
- `./helpers.js`
- `./json-mode.js`
- `./message/helpers.js`
- `./message/register.broadcast.js`
- `./message/register.discord-admin.js`
- `./message/register.emoji-sticker.js`
- `./message/register.permissions-search.js`
- `./message/register.pins.js`
- `./message/register.poll.js`
- `./message/register.reactions.js`
- `./message/register.read-edit-delete.js`
- `./message/register.send.js`
- `./message/register.thread.js`
- `./parent-default-help.js`
- `./preaction.js`
- `./private-qa-cli.js`
- `./program-context.js`
- `./register-command-groups.js`
- `./register-lazy-command.js`
- `./register.agent-turn.js`
- `./register.agent.js`
- `./register.backup.js`
- `./register.configure.js`
- `./register.maintenance.js`
- `./register.message.js`
- `./register.onboard.js`
- `./register.setup.js`
- `./register.status-health-sessions.js`
- `./register.subclis-core.js`
- `./register.subclis.js`
- `./register.transcripts.js`
- `./root-help.js`
- `./route-args.js`
- `./route-specs.js`
- `./routed-command-definitions.js`
- `./routes.js`
- `./subcli-descriptors.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/string-coerce`
- `commander`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:process`
- `node:url`
- `openclaw/plugin-sdk/test-fixtures`
- `vitest`
