# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_skills_lifecycle[src-skills-lifecycle] --> src[src]
    src_skills_lifecycle[src-skills-lifecycle] --> infra[infra]
    src_skills_lifecycle[src-skills-lifecycle] --> infra[infra]
    src_skills_lifecycle[src-skills-lifecycle] --> infra[infra]
    src_skills_lifecycle[src-skills-lifecycle] --> infra[infra]
    src_skills_lifecycle[src-skills-lifecycle] --> infra[infra]
    src_skills_lifecycle[src-skills-lifecycle] --> infra[infra]
    src_skills_lifecycle[src-skills-lifecycle] --> infra[infra]
    src_skills_lifecycle[src-skills-lifecycle] --> infra[infra]
    src_skills_lifecycle[src-skills-lifecycle] --> infra[infra]
    src_skills_lifecycle[src-skills-lifecycle] --> infra[infra]
    src_skills_lifecycle[src-skills-lifecycle] --> infra[infra]
    src_skills_lifecycle[src-skills-lifecycle] --> infra[infra]
    src_skills_lifecycle[src-skills-lifecycle] --> infra[infra]
    src_skills_lifecycle[src-skills-lifecycle] --> infra[infra]
    src_skills_lifecycle[src-skills-lifecycle] --> infra[infra]
    src_skills_lifecycle[src-skills-lifecycle] --> infra[infra]
    src_skills_lifecycle[src-skills-lifecycle] --> net[net]
    src_skills_lifecycle[src-skills-lifecycle] --> infra[infra]
    src_skills_lifecycle[src-skills-lifecycle] --> infra[infra]
    src_skills_lifecycle[src-skills-lifecycle] --> infra[infra]
    src_skills_lifecycle[src-skills-lifecycle] --> plugins[plugins]
    src_skills_lifecycle[src-skills-lifecycle] --> plugins[plugins]
    src_skills_lifecycle[src-skills-lifecycle] --> plugins[plugins]
    src_skills_lifecycle[src-skills-lifecycle] --> plugins[plugins]
    src_skills_lifecycle[src-skills-lifecycle] --> process[process]
    src_skills_lifecycle[src-skills-lifecycle] --> shared[shared]
    src_skills_lifecycle[src-skills-lifecycle] --> state[state]
    src_skills_lifecycle[src-skills-lifecycle] --> test_helpers[test-helpers]
    src_skills_lifecycle[src-skills-lifecycle] --> test_utils[test-utils]
    src_skills_lifecycle[src-skills-lifecycle] --> test_utils[test-utils]
    src_skills_lifecycle[src-skills-lifecycle] --> test_utils[test-utils]
    src_skills_lifecycle[src-skills-lifecycle] --> __[..]
    src_skills_lifecycle[src-skills-lifecycle] --> discovery[discovery]
    src_skills_lifecycle[src-skills-lifecycle] --> loading[loading]
    src_skills_lifecycle[src-skills-lifecycle] --> loading[loading]
    src_skills_lifecycle[src-skills-lifecycle] --> loading[loading]
    src_skills_lifecycle[src-skills-lifecycle] --> loading[loading]
    src_skills_lifecycle[src-skills-lifecycle] --> loading[loading]
    src_skills_lifecycle[src-skills-lifecycle] --> loading[loading]
    src_skills_lifecycle[src-skills-lifecycle] --> runtime[runtime]
    src_skills_lifecycle[src-skills-lifecycle] --> test_support[test-support]
    src_skills_lifecycle[src-skills-lifecycle] --> test_support[test-support]
    src_skills_lifecycle[src-skills-lifecycle] --> test_support[test-support]
    src_skills_lifecycle[src-skills-lifecycle] --> _[.]
    src_skills_lifecycle[src-skills-lifecycle] --> _[.]
    src_skills_lifecycle[src-skills-lifecycle] --> _[.]
    src_skills_lifecycle[src-skills-lifecycle] --> _[.]
    src_skills_lifecycle[src-skills-lifecycle] --> _[.]
    src_skills_lifecycle[src-skills-lifecycle] --> _[.]
    src_skills_lifecycle[src-skills-lifecycle] --> _[.]
    src_skills_lifecycle[src-skills-lifecycle] --> _[.]
    src_skills_lifecycle[src-skills-lifecycle] --> _[.]
    src_skills_lifecycle[src-skills-lifecycle] --> _[.]
    src_skills_lifecycle[src-skills-lifecycle] --> _[.]
    src_skills_lifecycle[src-skills-lifecycle] --> _[.]
    src_skills_lifecycle[src-skills-lifecycle] --> net_policy[net-policy]
    src_skills_lifecycle[src-skills-lifecycle] --> _openclaw[@openclaw]
    src_skills_lifecycle[src-skills-lifecycle] --> normalization_core[normalization-core]
    src_skills_lifecycle[src-skills-lifecycle] --> normalization_core[normalization-core]
    src_skills_lifecycle[src-skills-lifecycle] --> normalization_core[normalization-core]
    src_skills_lifecycle[src-skills-lifecycle] --> normalization_core[normalization-core]
    src_skills_lifecycle[src-skills-lifecycle] --> child_process[child_process]
    src_skills_lifecycle[src-skills-lifecycle] --> jszip[jszip]
    src_skills_lifecycle[src-skills-lifecycle] --> node_crypto[node:crypto]
    src_skills_lifecycle[src-skills-lifecycle] --> node_fs[node:fs]
    src_skills_lifecycle[src-skills-lifecycle] --> node_fs[node:fs]
    src_skills_lifecycle[src-skills-lifecycle] --> node_os[node:os]
    src_skills_lifecycle[src-skills-lifecycle] --> node_path[node:path]
    src_skills_lifecycle[src-skills-lifecycle] --> node_stream[node:stream]
    src_skills_lifecycle[src-skills-lifecycle] --> node_stream[node:stream]
    src_skills_lifecycle[src-skills-lifecycle] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/terminal-core/src/ansi.js`
- `../../infra/archive-path.js`
- `../../infra/archive.js`
- `../../infra/brew.js`
- `../../infra/clawhub-install-trust.js`
- `../../infra/clawhub.js`
- `../../infra/container-environment.js`
- `../../infra/crypto-digest.js`
- `../../infra/errors.js`
- `../../infra/fs-safe.js`
- `../../infra/host-env-security.js`
- `../../infra/install-flow.js`
- `../../infra/install-package-dir.js`
- `../../infra/install-safe-path.js`
- `../../infra/install-source-utils.js`
- `../../infra/json-files.js`
- `../../infra/kysely-sync.js`
- `../../infra/net/fetch-guard.js`
- `../../infra/path-safety.js`
- `../../infra/private-temp-workspace.js`
- `../../infra/tmp-openclaw-dir.js`
- `../../plugins/git-install.js`
- `../../plugins/hook-runner-global.js`
- `../../plugins/hooks.test-fixtures.js`
- `../../plugins/install-security-scan.js`
- `../../process/exec.js`
- `../../shared/lazy-promise.js`
- `../../state/openclaw-state-db.js`
- `../../test-helpers/temp-dir.js`
- `../../test-utils/env.js`
- `../../test-utils/fixture-suite.js`
- `../../test-utils/tracked-temp-dirs.js`
- `../../utils.js`
- `../discovery/status.js`
- `../loading/config.js`
- `../loading/frontmatter.js`
- `../loading/local-loader.js`
- `../loading/source.js`
- `../loading/symlink-targets.js`
- `../loading/workspace.js`
- `../runtime/tools-dir.js`
- `../test-support/install-download-test-utils.js`
- `../test-support/install-test-mocks.js`
- `../test-support/test-helpers.js`
- `./archive-install.js`
- `./clawhub.js`
- `./gh-config-discovery.js`
- `./install-download.js`
- `./install-output.js`
- `./install-tar-verbose.js`
- `./install.js`
- `./install.test-support.js`
- `./source-install.js`
- `./upload-store.js`
- `./upload-store.sqlite.js`
- `./upload-store.test-support.js`
- `@openclaw/net-policy/redact-sensitive-url`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `child_process`
- `jszip`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:stream`
- `node:stream/promises`
- `vitest`
