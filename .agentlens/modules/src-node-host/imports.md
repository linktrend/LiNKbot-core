# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_node_host[src-node-host] --> src[src]
    src_node_host[src-node-host] --> src[src]
    src_node_host[src-node-host] --> helpers[helpers]
    src_node_host[src-node-host] --> agents[agents]
    src_node_host[src-node-host] --> agents[agents]
    src_node_host[src-node-host] --> agents[agents]
    src_node_host[src-node-host] --> agents[agents]
    src_node_host[src-node-host] --> agents[agents]
    src_node_host[src-node-host] --> agents[agents]
    src_node_host[src-node-host] --> config[config]
    src_node_host[src-node-host] --> config[config]
    src_node_host[src-node-host] --> config[config]
    src_node_host[src-node-host] --> config[config]
    src_node_host[src-node-host] --> config[config]
    src_node_host[src-node-host] --> gateway[gateway]
    src_node_host[src-node-host] --> gateway[gateway]
    src_node_host[src-node-host] --> gateway[gateway]
    src_node_host[src-node-host] --> gateway[gateway]
    src_node_host[src-node-host] --> command_analysis[command-analysis]
    src_node_host[src-node-host] --> command_analysis[command-analysis]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> infra[infra]
    src_node_host[src-node-host] --> __[..]
    src_node_host[src-node-host] --> plugins[plugins]
    src_node_host[src-node-host] --> plugins[plugins]
    src_node_host[src-node-host] --> plugins[plugins]
    src_node_host[src-node-host] --> runtime[runtime]
    src_node_host[src-node-host] --> process[process]
    src_node_host[src-node-host] --> process[process]
    src_node_host[src-node-host] --> process[process]
    src_node_host[src-node-host] --> process[process]
    src_node_host[src-node-host] --> routing[routing]
    src_node_host[src-node-host] --> shared[shared]
    src_node_host[src-node-host] --> shared[shared]
    src_node_host[src-node-host] --> shared[shared]
    src_node_host[src-node-host] --> loading[loading]
    src_node_host[src-node-host] --> state[state]
    src_node_host[src-node-host] --> test_utils[test-utils]
    src_node_host[src-node-host] --> __[..]
    src_node_host[src-node-host] --> utils[utils]
    src_node_host[src-node-host] --> utils[utils]
    src_node_host[src-node-host] --> __[..]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> _[.]
    src_node_host[src-node-host] --> client[client]
    src_node_host[src-node-host] --> sdk[sdk]
    src_node_host[src-node-host] --> net_policy[net-policy]
    src_node_host[src-node-host] --> _openclaw[@openclaw]
    src_node_host[src-node-host] --> normalization_core[normalization-core]
    src_node_host[src-node-host] --> normalization_core[normalization-core]
    src_node_host[src-node-host] --> normalization_core[normalization-core]
    src_node_host[src-node-host] --> normalization_core[normalization-core]
    src_node_host[src-node-host] --> node_child_process[node:child_process]
    src_node_host[src-node-host] --> node_crypto[node:crypto]
    src_node_host[src-node-host] --> node_fs[node:fs]
    src_node_host[src-node-host] --> node_fs[node:fs]
    src_node_host[src-node-host] --> node_os[node:os]
    src_node_host[src-node-host] --> node_path[node:path]
    src_node_host[src-node-host] --> node_readline[node:readline]
    src_node_host[src-node-host] --> node_string_decoder[node:string_decoder]
    src_node_host[src-node-host] --> vitest[vitest]
    src_node_host[src-node-host] --> zod[zod]
```

## External Dependencies

Dependencies from other modules:

- `../../packages/gateway-protocol/src/client-info.js`
- `../../packages/gateway-protocol/src/connect-error-details.js`
- `../../test/helpers/temp-dir.js`
- `../agents/agent-bundle-mcp-filter.js`
- `../agents/mcp-content.js`
- `../agents/mcp-json-schema-validator.js`
- `../agents/mcp-metadata.js`
- `../agents/mcp-transport-config.js`
- `../agents/mcp-transport.js`
- `../config/config.js`
- `../config/mcp-config-normalize.js`
- `../config/paths.js`
- `../config/runtime-snapshot.js`
- `../config/zod-schema.js`
- `../gateway/client-start-readiness.js`
- `../gateway/client.js`
- `../gateway/connection-auth.js`
- `../gateway/node-connect-reconcile.js`
- `../infra/command-analysis/inline-eval.js`
- `../infra/command-analysis/policy.js`
- `../infra/dedupe.js`
- `../infra/device-identity.js`
- `../infra/errors.js`
- `../infra/exec-approvals.js`
- `../infra/exec-authorization-plan.js`
- `../infra/exec-authorization-render.js`
- `../infra/exec-command-resolution.js`
- `../infra/exec-host.js`
- `../infra/exec-policy.js`
- `../infra/exec-safe-bin-runtime-policy.js`
- `../infra/exec-wrapper-resolution.js`
- `../infra/executable-path.js`
- `../infra/file-read.js`
- `../infra/fs-safe-advanced.js`
- `../infra/host-directory-listing.js`
- `../infra/host-env-security.js`
- `../infra/inline-option-token.js`
- `../infra/installed-apps.js`
- `../infra/kysely-sync.js`
- `../infra/machine-name.js`
- `../infra/node-commands.js`
- `../infra/package-manager-exec-wrapper.js`
- `../infra/path-env.js`
- `../infra/path-guards.js`
- `../infra/shell-inline-command.js`
- `../infra/system-run-approval-binding.js`
- `../infra/system-run-command.js`
- `../infra/terminal-file-upload.js`
- `../logger.js`
- `../plugins/loader.test-fixtures.js`
- `../plugins/registry-empty.js`
- `../plugins/runtime.js`
- `../plugins/runtime/runtime-registry-loader.js`
- `../process/exec.js`
- `../process/kill-tree.js`
- `../process/terminal-pty.js`
- `../process/windows-command.js`
- `../routing/session-key.js`
- `../shared/bounded-buffer.js`
- `../shared/lazy-runtime.js`
- `../shared/node-skill-constraints.js`
- `../skills/loading/local-loader.js`
- `../state/openclaw-state-db.js`
- `../test-utils/env.js`
- `../utils.js`
- `../utils/shell-argv.js`
- `../utils/utf8-truncate.js`
- `../version.js`
- `./config.js`
- `./exec-policy.js`
- `./invoke-agent-cli-claude-handler.js`
- `./invoke-agent-cli-claude-params.js`
- `./invoke-agent-cli-claude.js`
- `./invoke-device-apps.js`
- `./invoke-file-commands.js`
- `./invoke-payload.js`
- `./invoke-system-run-allowlist.js`
- `./invoke-system-run-plan.js`
- `./invoke-system-run.js`
- `./invoke.js`
- `./invoke.test-support.js`
- `./mcp.js`
- `./node-event-params.js`
- `./node-invoke-progress.js`
- `./plugin-node-host.js`
- `./pty-command.js`
- `./runner.js`
- `./runtime.js`
- `./skills.js`
- `./with-timeout.js`
- `./worker-support.js`
- `@modelcontextprotocol/sdk/client/index.js`
- `@modelcontextprotocol/sdk/types.js`
- `@openclaw/net-policy/redact-sensitive-url`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `node:child_process`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:readline`
- `node:string_decoder`
- `vitest`
- `zod`
