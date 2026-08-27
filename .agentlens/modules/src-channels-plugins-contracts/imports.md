# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> lib[lib]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> config[config]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> plugin_sdk[plugin-sdk]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> test_helpers[test-helpers]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> plugins[plugins]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> plugins[plugins]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> plugins[plugins]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> test_utils[test-utils]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> test_utils[test-utils]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> test_utils[test-utils]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> __[..]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> __[..]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> turn[turn]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> __[..]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> outbound[outbound]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> outbound[outbound]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> __[..]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> _[.]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> _[.]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> test_helpers[test-helpers]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> test_helpers[test-helpers]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> test_helpers[test-helpers]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> test_helpers[test-helpers]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> test_helpers[test-helpers]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> test_helpers[test-helpers]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> test_helpers[test-helpers]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> test_helpers[test-helpers]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> test_helpers[test-helpers]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> test_helpers[test-helpers]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> _openclaw[@openclaw]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> node_child_process[node:child_process]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> node_fs[node:fs]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> node_path[node:path]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> node_url[node:url]
    src_channels_plugins_contracts[src-channels-plugins-contracts] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../../scripts/lib/extension-source-classifier.mjs`
- `../../../config/runtime-group-policy.js`
- `../../../plugin-sdk/channel-config-helpers.js`
- `../../../plugin-sdk/test-helpers/public-artifacts.js`
- `../../../plugins/hook-runner-global.js`
- `../../../plugins/manifest-registry.js`
- `../../../plugins/runtime.js`
- `../../../test-utils/channel-plugins.js`
- `../../../test-utils/fs-scan-assertions.js`
- `../../../test-utils/repo-files.js`
- `../../chat-type.js`
- `../../conversation-label.js`
- `../../turn/dispatch-result.js`
- `../index.js`
- `../outbound/direct-text-media.js`
- `../outbound/load.js`
- `../registry-loader.js`
- `./outbound-payload-testkit.js`
- `./test-helpers.js`
- `./test-helpers/bundled-channel-plugin-loader.js`
- `./test-helpers/channel-catalog-contract.js`
- `./test-helpers/channel-plugin-catalog-contract-suites.js`
- `./test-helpers/config-write-contract-suites.js`
- `./test-helpers/group-policy-contract-suites.js`
- `./test-helpers/group-policy-contract.js`
- `./test-helpers/manifest.js`
- `./test-helpers/registry-backed-contract-shards.js`
- `./test-helpers/registry-session-binding.js`
- `./test-helpers/session-binding-registry-backed-contract.js`
- `@openclaw/normalization-core`
- `node:child_process`
- `node:fs`
- `node:path`
- `node:url`
- `vitest`
