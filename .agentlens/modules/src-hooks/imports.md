# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_hooks[src-hooks] --> src[src]
    src_hooks[src-hooks] --> src[src]
    src_hooks[src-hooks] --> agents[agents]
    src_hooks[src-hooks] --> agents[agents]
    src_hooks[src-hooks] --> agents[agents]
    src_hooks[src-hooks] --> plugins[plugins]
    src_hooks[src-hooks] --> cli[cli]
    src_hooks[src-hooks] --> compat[compat]
    src_hooks[src-hooks] --> config[config]
    src_hooks[src-hooks] --> __[..]
    src_hooks[src-hooks] --> infra[infra]
    src_hooks[src-hooks] --> infra[infra]
    src_hooks[src-hooks] --> infra[infra]
    src_hooks[src-hooks] --> infra[infra]
    src_hooks[src-hooks] --> infra[infra]
    src_hooks[src-hooks] --> infra[infra]
    src_hooks[src-hooks] --> infra[infra]
    src_hooks[src-hooks] --> infra[infra]
    src_hooks[src-hooks] --> infra[infra]
    src_hooks[src-hooks] --> infra[infra]
    src_hooks[src-hooks] --> infra[infra]
    src_hooks[src-hooks] --> infra[infra]
    src_hooks[src-hooks] --> infra[infra]
    src_hooks[src-hooks] --> infra[infra]
    src_hooks[src-hooks] --> infra[infra]
    src_hooks[src-hooks] --> infra[infra]
    src_hooks[src-hooks] --> infra[infra]
    src_hooks[src-hooks] --> infra[infra]
    src_hooks[src-hooks] --> logging[logging]
    src_hooks[src-hooks] --> logging[logging]
    src_hooks[src-hooks] --> logging[logging]
    src_hooks[src-hooks] --> plugins[plugins]
    src_hooks[src-hooks] --> plugins[plugins]
    src_hooks[src-hooks] --> plugins[plugins]
    src_hooks[src-hooks] --> plugins[plugins]
    src_hooks[src-hooks] --> plugins[plugins]
    src_hooks[src-hooks] --> plugins[plugins]
    src_hooks[src-hooks] --> plugins[plugins]
    src_hooks[src-hooks] --> process[process]
    src_hooks[src-hooks] --> process[process]
    src_hooks[src-hooks] --> __[..]
    src_hooks[src-hooks] --> security[security]
    src_hooks[src-hooks] --> shared[shared]
    src_hooks[src-hooks] --> shared[shared]
    src_hooks[src-hooks] --> shared[shared]
    src_hooks[src-hooks] --> shared[shared]
    src_hooks[src-hooks] --> shared[shared]
    src_hooks[src-hooks] --> shared[shared]
    src_hooks[src-hooks] --> shared[shared]
    src_hooks[src-hooks] --> loading[loading]
    src_hooks[src-hooks] --> test_utils[test-utils]
    src_hooks[src-hooks] --> test_utils[test-utils]
    src_hooks[src-hooks] --> test_utils[test-utils]
    src_hooks[src-hooks] --> test_utils[test-utils]
    src_hooks[src-hooks] --> test_utils[test-utils]
    src_hooks[src-hooks] --> __[..]
    src_hooks[src-hooks] --> utils[utils]
    src_hooks[src-hooks] --> utils[utils]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _[.]
    src_hooks[src-hooks] --> _openclaw[@openclaw]
    src_hooks[src-hooks] --> normalization_core[normalization-core]
    src_hooks[src-hooks] --> normalization_core[normalization-core]
    src_hooks[src-hooks] --> normalization_core[normalization-core]
    src_hooks[src-hooks] --> jszip[jszip]
    src_hooks[src-hooks] --> node_child_process[node:child_process]
    src_hooks[src-hooks] --> node_crypto[node:crypto]
    src_hooks[src-hooks] --> node_events[node:events]
    src_hooks[src-hooks] --> node_fs[node:fs]
    src_hooks[src-hooks] --> node_fs[node:fs]
    src_hooks[src-hooks] --> node_os[node:os]
    src_hooks[src-hooks] --> node_path[node:path]
    src_hooks[src-hooks] --> node_url[node:url]
    src_hooks[src-hooks] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../packages/markdown-core/src/frontmatter.js`
- `../../packages/terminal-core/src/ansi.js`
- `../agents/agent-scope.js`
- `../agents/embedded-agent.js`
- `../agents/timeout.js`
- `../channels/plugins/index.js`
- `../cli/command-format.js`
- `../compat/legacy-names.js`
- `../config/config.js`
- `../globals.js`
- `../infra/archive.js`
- `../infra/boundary-file-read.js`
- `../infra/diagnostic-trace-context.js`
- `../infra/env.js`
- `../infra/errors.js`
- `../infra/executable-path.js`
- `../infra/fs-safe.js`
- `../infra/install-flow.js`
- `../infra/install-from-npm-spec.js`
- `../infra/install-mode-options.js`
- `../infra/install-package-dir.js`
- `../infra/install-safe-path.js`
- `../infra/install-source-utils.js`
- `../infra/install-target.js`
- `../infra/json-files.js`
- `../infra/package-update-utils.js`
- `../infra/regular-file.js`
- `../infra/windows-install-roots.js`
- `../logging/logger.js`
- `../logging/state.js`
- `../logging/subsystem.js`
- `../plugins/bundle-manifest.js`
- `../plugins/config-policy.js`
- `../plugins/install-security-scan.js`
- `../plugins/manifest.js`
- `../plugins/plugin-metadata-snapshot.js`
- `../plugins/runtime.js`
- `../plugins/slots.js`
- `../process/exec.js`
- `../process/windows-command.js`
- `../runtime.js`
- `../security/scan-paths.js`
- `../shared/assistant-error-format.js`
- `../shared/config-eval.js`
- `../shared/entry-status.js`
- `../shared/frontmatter.js`
- `../shared/global-singleton.js`
- `../shared/lazy-runtime.js`
- `../shared/number-coercion.js`
- `../skills/loading/config.js`
- `../test-utils/channel-plugins.js`
- `../test-utils/env.js`
- `../test-utils/exec-assertions.js`
- `../test-utils/npm-spec-install-test-helpers.js`
- `../test-utils/vitest-spies.js`
- `../utils.js`
- `../utils/message-channel-constants.js`
- `../utils/string-readers.js`
- `./bundled-dir.js`
- `./config.js`
- `./configured.js`
- `./fire-and-forget.js`
- `./frontmatter.js`
- `./gmail-setup-utils.js`
- `./gmail-watcher-errors.js`
- `./gmail-watcher-lifecycle.js`
- `./gmail-watcher.js`
- `./gmail.js`
- `./hooks-status.js`
- `./import-url.js`
- `./install.js`
- `./installs.js`
- `./internal-hook-types.js`
- `./internal-hooks.js`
- `./legacy-config.js`
- `./llm-slug-generator.js`
- `./loader.js`
- `./message-hook-mappers.js`
- `./module-loader.js`
- `./plugin-hooks.js`
- `./policy.js`
- `./workspace.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `jszip`
- `node:child_process`
- `node:crypto`
- `node:events`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:url`
- `vitest`
