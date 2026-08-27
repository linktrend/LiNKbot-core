# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_agents_runtime_plan[src-agents-runtime-plan] --> auto_reply[auto-reply]
    src_agents_runtime_plan[src-agents-runtime-plan] --> config[config]
    src_agents_runtime_plan[src-agents-runtime-plan] --> config[config]
    src_agents_runtime_plan[src-agents-runtime-plan] --> config[config]
    src_agents_runtime_plan[src-agents-runtime-plan] --> infra[infra]
    src_agents_runtime_plan[src-agents-runtime-plan] --> interactive[interactive]
    src_agents_runtime_plan[src-agents-runtime-plan] --> plugins[plugins]
    src_agents_runtime_plan[src-agents-runtime-plan] --> plugins[plugins]
    src_agents_runtime_plan[src-agents-runtime-plan] --> plugins[plugins]
    src_agents_runtime_plan[src-agents-runtime-plan] --> plugins[plugins]
    src_agents_runtime_plan[src-agents-runtime-plan] --> plugins[plugins]
    src_agents_runtime_plan[src-agents-runtime-plan] --> secrets[secrets]
    src_agents_runtime_plan[src-agents-runtime-plan] --> __[..]
    src_agents_runtime_plan[src-agents-runtime-plan] --> __[..]
    src_agents_runtime_plan[src-agents-runtime-plan] --> auth_profiles[auth-profiles]
    src_agents_runtime_plan[src-agents-runtime-plan] --> auth_profiles[auth-profiles]
    src_agents_runtime_plan[src-agents-runtime-plan] --> auth_profiles[auth-profiles]
    src_agents_runtime_plan[src-agents-runtime-plan] --> __[..]
    src_agents_runtime_plan[src-agents-runtime-plan] --> __[..]
    src_agents_runtime_plan[src-agents-runtime-plan] --> embedded_agent_runner[embedded-agent-runner]
    src_agents_runtime_plan[src-agents-runtime-plan] --> embedded_agent_runner[embedded-agent-runner]
    src_agents_runtime_plan[src-agents-runtime-plan] --> embedded_agent_runner[embedded-agent-runner]
    src_agents_runtime_plan[src-agents-runtime-plan] --> harness[harness]
    src_agents_runtime_plan[src-agents-runtime-plan] --> __[..]
    src_agents_runtime_plan[src-agents-runtime-plan] --> __[..]
    src_agents_runtime_plan[src-agents-runtime-plan] --> __[..]
    src_agents_runtime_plan[src-agents-runtime-plan] --> __[..]
    src_agents_runtime_plan[src-agents-runtime-plan] --> __[..]
    src_agents_runtime_plan[src-agents-runtime-plan] --> __[..]
    src_agents_runtime_plan[src-agents-runtime-plan] --> __[..]
    src_agents_runtime_plan[src-agents-runtime-plan] --> __[..]
    src_agents_runtime_plan[src-agents-runtime-plan] --> __[..]
    src_agents_runtime_plan[src-agents-runtime-plan] --> __[..]
    src_agents_runtime_plan[src-agents-runtime-plan] --> __[..]
    src_agents_runtime_plan[src-agents-runtime-plan] --> __[..]
    src_agents_runtime_plan[src-agents-runtime-plan] --> _[.]
    src_agents_runtime_plan[src-agents-runtime-plan] --> _[.]
    src_agents_runtime_plan[src-agents-runtime-plan] --> _[.]
    src_agents_runtime_plan[src-agents-runtime-plan] --> _[.]
    src_agents_runtime_plan[src-agents-runtime-plan] --> _[.]
    src_agents_runtime_plan[src-agents-runtime-plan] --> _[.]
    src_agents_runtime_plan[src-agents-runtime-plan] --> _[.]
    src_agents_runtime_plan[src-agents-runtime-plan] --> _[.]
    src_agents_runtime_plan[src-agents-runtime-plan] --> model_catalog_core[model-catalog-core]
    src_agents_runtime_plan[src-agents-runtime-plan] --> _openclaw[@openclaw]
    src_agents_runtime_plan[src-agents-runtime-plan] --> node_fs[node:fs]
    src_agents_runtime_plan[src-agents-runtime-plan] --> node_url[node:url]
    src_agents_runtime_plan[src-agents-runtime-plan] --> plugin_sdk[plugin-sdk]
    src_agents_runtime_plan[src-agents-runtime-plan] --> typebox[typebox]
    src_agents_runtime_plan[src-agents-runtime-plan] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../auto-reply/tokens.js`
- `../../config/config.js`
- `../../config/model-provider-config.js`
- `../../config/types.secrets.js`
- `../../infra/errors.js`
- `../../interactive/payload.js`
- `../../plugins/config-state.js`
- `../../plugins/manifest-contract-eligibility.js`
- `../../plugins/provider-hook-runtime.js`
- `../../plugins/provider-runtime.js`
- `../../plugins/tools.js`
- `../../secrets/runtime-degraded-state.js`
- `../agent-runtime-id.js`
- `../agent-tools.before-tool-call.js`
- `../auth-profiles/order.js`
- `../auth-profiles/read-only-availability.js`
- `../auth-profiles/usage-state.js`
- `../before-tool-call-metadata.js`
- `../channel-tools.js`
- `../embedded-agent-runner/extra-params.js`
- `../embedded-agent-runner/result-fallback-classifier.js`
- `../embedded-agent-runner/tool-schema-runtime.js`
- `../harness/support.js`
- `../model-auth-env.js`
- `../model-auth-markers.js`
- `../model-auth.js`
- `../openai-model-routes.js`
- `../provider-auth-aliases.js`
- `../provider-auth-aliases.test-support.js`
- `../provider-model-auth-source-plan.js`
- `../provider-model-route-auth.js`
- `../provider-model-route.js`
- `../tool-schema-projection.js`
- `../tool-terminal-presentation.js`
- `../transcript-policy.js`
- `./auth.js`
- `./build.js`
- `./credential-scoped-model.js`
- `./materialize-model.js`
- `./model-route.js`
- `./prepare-auth.js`
- `./resolve-auth.js`
- `./tools.js`
- `@openclaw/model-catalog-core/provider-id`
- `@openclaw/normalization-core`
- `node:fs/promises`
- `node:url`
- `openclaw/plugin-sdk/agent-runtime-test-contracts`
- `typebox`
- `vitest`
