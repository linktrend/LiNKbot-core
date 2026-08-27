# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_flows[src-flows] --> src[src]
    src_flows[src-flows] --> src[src]
    src_flows[src-flows] --> src[src]
    src_flows[src-flows] --> helpers[helpers]
    src_flows[src-flows] --> agents[agents]
    src_flows[src-flows] --> agents[agents]
    src_flows[src-flows] --> agents[agents]
    src_flows[src-flows] --> agents[agents]
    src_flows[src-flows] --> agents[agents]
    src_flows[src-flows] --> agents[agents]
    src_flows[src-flows] --> agents[agents]
    src_flows[src-flows] --> agents[agents]
    src_flows[src-flows] --> embedded_agent_runner[embedded-agent-runner]
    src_flows[src-flows] --> run[run]
    src_flows[src-flows] --> embedded_agent_runner[embedded-agent-runner]
    src_flows[src-flows] --> harness[harness]
    src_flows[src-flows] --> agents[agents]
    src_flows[src-flows] --> agents[agents]
    src_flows[src-flows] --> agents[agents]
    src_flows[src-flows] --> agents[agents]
    src_flows[src-flows] --> agents[agents]
    src_flows[src-flows] --> agents[agents]
    src_flows[src-flows] --> agents[agents]
    src_flows[src-flows] --> agents[agents]
    src_flows[src-flows] --> agents[agents]
    src_flows[src-flows] --> runtime_plan[runtime-plan]
    src_flows[src-flows] --> agents[agents]
    src_flows[src-flows] --> agents[agents]
    src_flows[src-flows] --> tools[tools]
    src_flows[src-flows] --> channels[channels]
    src_flows[src-flows] --> plugins[plugins]
    src_flows[src-flows] --> plugins[plugins]
    src_flows[src-flows] --> plugins[plugins]
    src_flows[src-flows] --> plugins[plugins]
    src_flows[src-flows] --> channels[channels]
    src_flows[src-flows] --> cli[cli]
    src_flows[src-flows] --> daemon_cli[daemon-cli]
    src_flows[src-flows] --> channel_setup[channel-setup]
    src_flows[src-flows] --> channel_setup[channel-setup]
    src_flows[src-flows] --> channel_setup[channel-setup]
    src_flows[src-flows] --> channel_setup[channel-setup]
    src_flows[src-flows] --> commands[commands]
    src_flows[src-flows] --> commands[commands]
    src_flows[src-flows] --> commands[commands]
    src_flows[src-flows] --> commands[commands]
    src_flows[src-flows] --> commands[commands]
    src_flows[src-flows] --> commands[commands]
    src_flows[src-flows] --> shared[shared]
    src_flows[src-flows] --> shared[shared]
    src_flows[src-flows] --> shared[shared]
    src_flows[src-flows] --> commands[commands]
    src_flows[src-flows] --> models[models]
    src_flows[src-flows] --> models[models]
    src_flows[src-flows] --> config[config]
    src_flows[src-flows] --> config[config]
    src_flows[src-flows] --> config[config]
    src_flows[src-flows] --> config[config]
    src_flows[src-flows] --> config[config]
    src_flows[src-flows] --> daemon[daemon]
    src_flows[src-flows] --> daemon[daemon]
    src_flows[src-flows] --> gateway[gateway]
    src_flows[src-flows] --> gateway[gateway]
    src_flows[src-flows] --> gateway[gateway]
    src_flows[src-flows] --> gateway[gateway]
    src_flows[src-flows] --> infra[infra]
    src_flows[src-flows] --> media_understanding[media-understanding]
    src_flows[src-flows] --> plugins[plugins]
    src_flows[src-flows] --> plugins[plugins]
    src_flows[src-flows] --> plugins[plugins]
    src_flows[src-flows] --> plugins[plugins]
    src_flows[src-flows] --> plugins[plugins]
    src_flows[src-flows] --> plugins[plugins]
    src_flows[src-flows] --> plugins[plugins]
    src_flows[src-flows] --> plugins[plugins]
    src_flows[src-flows] --> plugins[plugins]
    src_flows[src-flows] --> plugins[plugins]
    src_flows[src-flows] --> plugins[plugins]
    src_flows[src-flows] --> routing[routing]
    src_flows[src-flows] --> __[..]
    src_flows[src-flows] --> secrets[secrets]
    src_flows[src-flows] --> secrets[secrets]
    src_flows[src-flows] --> shared[shared]
    src_flows[src-flows] --> discovery[discovery]
    src_flows[src-flows] --> workshop[workshop]
    src_flows[src-flows] --> workshop[workshop]
    src_flows[src-flows] --> test_utils[test-utils]
    src_flows[src-flows] --> __[..]
    src_flows[src-flows] --> web_search[web-search]
    src_flows[src-flows] --> i18n[i18n]
    src_flows[src-flows] --> _[.]
    src_flows[src-flows] --> _[.]
    src_flows[src-flows] --> _[.]
    src_flows[src-flows] --> _[.]
    src_flows[src-flows] --> _[.]
    src_flows[src-flows] --> _[.]
    src_flows[src-flows] --> _[.]
    src_flows[src-flows] --> _[.]
    src_flows[src-flows] --> _[.]
    src_flows[src-flows] --> _[.]
    src_flows[src-flows] --> _[.]
    src_flows[src-flows] --> _[.]
    src_flows[src-flows] --> _[.]
    src_flows[src-flows] --> _[.]
    src_flows[src-flows] --> _[.]
    src_flows[src-flows] --> _[.]
    src_flows[src-flows] --> _[.]
    src_flows[src-flows] --> _[.]
    src_flows[src-flows] --> _[.]
    src_flows[src-flows] --> _[.]
    src_flows[src-flows] --> _clack[@clack]
    src_flows[src-flows] --> model_catalog_core[model-catalog-core]
    src_flows[src-flows] --> net_policy[net-policy]
    src_flows[src-flows] --> _openclaw[@openclaw]
    src_flows[src-flows] --> normalization_core[normalization-core]
    src_flows[src-flows] --> normalization_core[normalization-core]
    src_flows[src-flows] --> normalization_core[normalization-core]
    src_flows[src-flows] --> normalization_core[normalization-core]
    src_flows[src-flows] --> node_fs[node:fs]
    src_flows[src-flows] --> node_fs[node:fs]
    src_flows[src-flows] --> node_os[node:os]
    src_flows[src-flows] --> node_path[node:path]
    src_flows[src-flows] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../packages/terminal-core/src/links.js`
- `../../packages/terminal-core/src/prompt-style.js`
- `../../packages/terminal-core/src/safe-text.js`
- `../../test/helpers/wizard-prompter.js`
- `../agents/agent-bundle-mcp-names.js`
- `../agents/agent-bundle-mcp-tools.js`
- `../agents/agent-scope-config.js`
- `../agents/agent-scope.js`
- `../agents/agent-tools.js`
- `../agents/agent-tools.policy.js`
- `../agents/conversation-capability-profile.js`
- `../agents/defaults.js`
- `../agents/embedded-agent-runner/effective-tool-policy.js`
- `../agents/embedded-agent-runner/run/attempt-tool-construction-plan.js`
- `../agents/embedded-agent-runner/tool-result-truncation.js`
- `../agents/harness/policy.js`
- `../agents/model-catalog-visibility.js`
- `../agents/model-catalog.js`
- `../agents/model-picker-visibility.js`
- `../agents/model-provider-auth.js`
- `../agents/model-ref-shared.js`
- `../agents/model-selection.js`
- `../agents/model-tool-support.js`
- `../agents/openai-model-routes.js`
- `../agents/prepared-model-catalog.js`
- `../agents/runtime-plan/tools.js`
- `../agents/tool-policy.js`
- `../agents/tool-schema-projection.js`
- `../agents/tools/model-config.helpers.js`
- `../channels/chat-meta.js`
- `../channels/plugins/bundled.js`
- `../channels/plugins/helpers.js`
- `../channels/plugins/lifecycle-startup.js`
- `../channels/plugins/setup-registry.js`
- `../channels/registry.js`
- `../cli/command-format.js`
- `../cli/daemon-cli/probe.js`
- `../commands/channel-setup/discovery.js`
- `../commands/channel-setup/plugin-install.js`
- `../commands/channel-setup/registry.js`
- `../commands/channel-setup/trusted-catalog.js`
- `../commands/doctor-browser.js`
- `../commands/doctor-command-owner.js`
- `../commands/doctor-completion.js`
- `../commands/doctor-session-locks.js`
- `../commands/doctor-skills-core.js`
- `../commands/doctor-ui.js`
- `../commands/doctor/shared/codex-route-warnings.js`
- `../commands/doctor/shared/preview-warnings.js`
- `../commands/doctor/shared/update-phase.js`
- `../commands/gateway-health-auth-diagnostic.js`
- `../commands/models/list.manifest-catalog.js`
- `../commands/models/shared.js`
- `../config/channel-configured.js`
- `../config/model-input.js`
- `../config/model-policy-allowlist-migration.js`
- `../config/paths.js`
- `../config/types.secrets.js`
- `../daemon/service-runtime.js`
- `../daemon/service.js`
- `../gateway/auth-mode-policy.js`
- `../gateway/auth-token-resolution.js`
- `../gateway/auth.js`
- `../gateway/call.js`
- `../infra/errors.js`
- `../media-understanding/local-audio.js`
- `../plugins/bundled-sources.js`
- `../plugins/config-state.js`
- `../plugins/enable.js`
- `../plugins/manifest-owner-policy.js`
- `../plugins/providers.js`
- `../plugins/public-surface-loader.js`
- `../plugins/registry-empty.js`
- `../plugins/tools.js`
- `../plugins/web-search-install-catalog.js`
- `../plugins/web-search-providers.runtime.js`
- `../plugins/web-search-providers.shared.js`
- `../routing/session-key.js`
- `../runtime.js`
- `../secrets/exec-resolution-policy.js`
- `../secrets/legacy-secretref-env-marker.js`
- `../shared/lazy-runtime.js`
- `../skills/discovery/status.js`
- `../skills/workshop/config.js`
- `../skills/workshop/tool-policy-diagnostic.js`
- `../test-utils/env.js`
- `../utils.js`
- `../web-search/runtime.js`
- `../wizard/i18n/index.js`
- `./bundled-health-checks.js`
- `./channel-setup.js`
- `./channel-setup.prompts.js`
- `./channel-setup.status.js`
- `./channel-setup.test-helpers.js`
- `./doctor-core-checks.js`
- `./doctor-error-message.js`
- `./doctor-health-contributions.js`
- `./doctor-health-contributions.test-support.js`
- `./doctor-lint-flow.js`
- `./doctor-removed-workspaces-state-check.js`
- `./doctor-repair-flow.js`
- `./doctor-startup-channel-maintenance.js`
- `./doctor-tool-result-cap-advice.js`
- `./health-check-adapter.js`
- `./health-check-registry.js`
- `./health-checks.js`
- `./model-picker.provider-catalog.js`
- `./search-setup.js`
- `./types.js`
- `@clack/prompts`
- `@openclaw/model-catalog-core/provider-id`
- `@openclaw/net-policy/redact-sensitive-url`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `vitest`
