# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_plugin_sdk_test_helpers_agents[src-plugin-sdk-test-helpers-agents] --> agents[agents]
    src_plugin_sdk_test_helpers_agents[src-plugin-sdk-test-helpers-agents] --> agents[agents]
    src_plugin_sdk_test_helpers_agents[src-plugin-sdk-test-helpers-agents] --> agents[agents]
    src_plugin_sdk_test_helpers_agents[src-plugin-sdk-test-helpers-agents] --> plugins[plugins]
    src_plugin_sdk_test_helpers_agents[src-plugin-sdk-test-helpers-agents] --> plugins[plugins]
    src_plugin_sdk_test_helpers_agents[src-plugin-sdk-test-helpers-agents] --> plugins[plugins]
    src_plugin_sdk_test_helpers_agents[src-plugin-sdk-test-helpers-agents] --> plugins[plugins]
    src_plugin_sdk_test_helpers_agents[src-plugin-sdk-test-helpers-agents] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../agents/agent-tools.before-tool-call.state.js`
- `../../../agents/provider-auth-aliases.js`
- `../../../agents/tool-terminal-presentation.js`
- `../../../plugins/hook-runner-global.js`
- `../../../plugins/hooks.test-helpers.js`
- `../../../plugins/registry-empty.js`
- `../../../plugins/runtime.js`
- `vitest`
