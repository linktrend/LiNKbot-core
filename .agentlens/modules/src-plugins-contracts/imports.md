# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_plugins_contracts[src-plugins-contracts] --> src[src]
    src_plugins_contracts[src-plugins-contracts] --> lib[lib]
    src_plugins_contracts[src-plugins-contracts] --> lib[lib]
    src_plugins_contracts[src-plugins-contracts] --> lib[lib]
    src_plugins_contracts[src-plugins-contracts] --> auth_profiles[auth-profiles]
    src_plugins_contracts[src-plugins-contracts] --> config[config]
    src_plugins_contracts[src-plugins-contracts] --> config[config]
    src_plugins_contracts[src-plugins-contracts] --> config[config]
    src_plugins_contracts[src-plugins-contracts] --> config[config]
    src_plugins_contracts[src-plugins-contracts] --> sessions[sessions]
    src_plugins_contracts[src-plugins-contracts] --> gateway[gateway]
    src_plugins_contracts[src-plugins-contracts] --> gateway[gateway]
    src_plugins_contracts[src-plugins-contracts] --> server_methods[server-methods]
    src_plugins_contracts[src-plugins-contracts] --> gateway[gateway]
    src_plugins_contracts[src-plugins-contracts] --> gateway[gateway]
    src_plugins_contracts[src-plugins-contracts] --> infra[infra]
    src_plugins_contracts[src-plugins-contracts] --> net[net]
    src_plugins_contracts[src-plugins-contracts] --> infra[infra]
    src_plugins_contracts[src-plugins-contracts] --> plugin_sdk[plugin-sdk]
    src_plugins_contracts[src-plugins-contracts] --> test_helpers[test-helpers]
    src_plugins_contracts[src-plugins-contracts] --> test_helpers[test-helpers]
    src_plugins_contracts[src-plugins-contracts] --> test_helpers[test-helpers]
    src_plugins_contracts[src-plugins-contracts] --> test_helpers[test-helpers]
    src_plugins_contracts[src-plugins-contracts] --> test_helpers[test-helpers]
    src_plugins_contracts[src-plugins-contracts] --> test_helpers[test-helpers]
    src_plugins_contracts[src-plugins-contracts] --> plugins[plugins]
    src_plugins_contracts[src-plugins-contracts] --> shared[shared]
    src_plugins_contracts[src-plugins-contracts] --> test_utils[test-utils]
    src_plugins_contracts[src-plugins-contracts] --> test_utils[test-utils]
    src_plugins_contracts[src-plugins-contracts] --> test_utils[test-utils]
    src_plugins_contracts[src-plugins-contracts] --> test_utils[test-utils]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> test_helpers[test-helpers]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> __[..]
    src_plugins_contracts[src-plugins-contracts] --> _[.]
    src_plugins_contracts[src-plugins-contracts] --> inventory[inventory]
    src_plugins_contracts[src-plugins-contracts] --> _[.]
    src_plugins_contracts[src-plugins-contracts] --> _[.]
    src_plugins_contracts[src-plugins-contracts] --> _[.]
    src_plugins_contracts[src-plugins-contracts] --> _[.]
    src_plugins_contracts[src-plugins-contracts] --> test_helpers[test-helpers]
    src_plugins_contracts[src-plugins-contracts] --> _[.]
    src_plugins_contracts[src-plugins-contracts] --> media_core[media-core]
    src_plugins_contracts[src-plugins-contracts] --> _openclaw[@openclaw]
    src_plugins_contracts[src-plugins-contracts] --> normalization_core[normalization-core]
    src_plugins_contracts[src-plugins-contracts] --> normalization_core[normalization-core]
    src_plugins_contracts[src-plugins-contracts] --> node_child_process[node:child_process]
    src_plugins_contracts[src-plugins-contracts] --> node_fs[node:fs]
    src_plugins_contracts[src-plugins-contracts] --> node_fs[node:fs]
    src_plugins_contracts[src-plugins-contracts] --> node_http[node:http]
    src_plugins_contracts[src-plugins-contracts] --> node_module[node:module]
    src_plugins_contracts[src-plugins-contracts] --> node_os[node:os]
    src_plugins_contracts[src-plugins-contracts] --> node_path[node:path]
    src_plugins_contracts[src-plugins-contracts] --> node_url[node:url]
    src_plugins_contracts[src-plugins-contracts] --> plugin_sdk[plugin-sdk]
    src_plugins_contracts[src-plugins-contracts] --> plugin_sdk[plugin-sdk]
    src_plugins_contracts[src-plugins-contracts] --> plugin_sdk[plugin-sdk]
    src_plugins_contracts[src-plugins-contracts] --> plugin_sdk[plugin-sdk]
    src_plugins_contracts[src-plugins-contracts] --> plugin_sdk[plugin-sdk]
    src_plugins_contracts[src-plugins-contracts] --> typescript[typescript]
    src_plugins_contracts[src-plugins-contracts] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/gateway-protocol/src/index.js`
- `../../../scripts/lib/config-boundary-guard.mjs`
- `../../../scripts/lib/deprecated-config-api-guard.mjs`
- `../../../scripts/lib/extension-package-boundary.ts`
- `../../agents/auth-profiles/store.js`
- `../../config/bundled-channel-config-metadata.generated.js`
- `../../config/runtime-snapshot.js`
- `../../config/schema-base.js`
- `../../config/sessions.js`
- `../../config/sessions/session-accessor.js`
- `../../gateway/operator-scopes.js`
- `../../gateway/server-methods.js`
- `../../gateway/server-methods/plugin-host-hooks.js`
- `../../gateway/session-utils.js`
- `../../gateway/test-temp-config.js`
- `../../infra/agent-events.js`
- `../../infra/net/fetch-guard.js`
- `../../infra/tmp-openclaw-dir.js`
- `../../plugin-sdk/entrypoints.js`
- `../../plugin-sdk/test-helpers/import-side-effects.js`
- `../../plugin-sdk/test-helpers/provider-contract.js`
- `../../plugin-sdk/test-helpers/public-surface-loader.js`
- `../../plugin-sdk/test-helpers/string-utils.js`
- `../../plugin-sdk/test-helpers/web-fetch-provider-contract.js`
- `../../plugin-sdk/test-helpers/web-search-provider-contract.js`
- `../../plugins/provider-auth-choice-preference.js`
- `../../shared/lazy-runtime.js`
- `../../test-utils/channel-plugins.js`
- `../../test-utils/env.js`
- `../../test-utils/fs-scan-assertions.js`
- `../../test-utils/repo-files.js`
- `../bundled-capability-runtime.js`
- `../bundled-plugin-metadata.js`
- `../command-registration.js`
- `../commands.js`
- `../discovery.js`
- `../embedding-providers.js`
- `../hooks.js`
- `../host-hook-attachments.js`
- `../host-hook-cleanup.js`
- `../host-hook-runtime.js`
- `../host-hook-runtime.test-fixtures.js`
- `../host-hook-scheduled-turns.js`
- `../host-hook-state.js`
- `../host-hooks.js`
- `../inspect-shape.js`
- `../loader.js`
- `../loader.test-fixtures.js`
- `../manifest-registry.js`
- `../memory-embedding-providers.js`
- `../plugin-registry.js`
- `../provider-contract-public-artifacts.js`
- `../provider-wizard.js`
- `../registry-empty.js`
- `../registry.js`
- `../runtime.js`
- `../status.test-fixtures.js`
- `../status.test-helpers.js`
- `../test-helpers/fs-fixtures.js`
- `../trusted-tool-policy.js`
- `../web-provider-public-artifacts.explicit.js`
- `./host-hook-fixture.js`
- `./inventory/bundled-capability-metadata.js`
- `./registry.js`
- `./safe.js`
- `./setup.js`
- `./shared.js`
- `./test-helpers/bundled-plugin-roots.js`
- `./tts-contract-suites.js`
- `@openclaw/media-core/mime`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/string-coerce`
- `node:child_process`
- `node:fs`
- `node:fs/promises`
- `node:http`
- `node:module`
- `node:os`
- `node:path`
- `node:url`
- `openclaw/plugin-sdk/core`
- `openclaw/plugin-sdk/plugin-test-contracts`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-test-contracts`
- `openclaw/plugin-sdk/test-env`
- `typescript`
- `vitest`
