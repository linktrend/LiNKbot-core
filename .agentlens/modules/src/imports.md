# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> cli[cli]
    src[src] --> config[config]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> logging[logging]
    src[src] --> harness[harness]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> plugins[plugins]
    src[src] --> routing[routing]
    src[src] --> security[security]
    src[src] --> sessions[sessions]
    src[src] --> shared[shared]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_utils[test-utils]
    src[src] --> agents[agents]
    src[src] --> helpers[helpers]
    src[src] --> helpers[helpers]
    src[src] --> __[..]
    src[src] --> utils[utils]
    src[src] --> control_plane[control-plane]
    src[src] --> acp[acp]
    src[src] --> acp[acp]
    src[src] --> acp[acp]
    src[src] --> runtime[runtime]
    src[src] --> runtime[runtime]
    src[src] --> runtime[runtime]
    src[src] --> acp[acp]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> command[command]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> embedded_agent_helpers[embedded-agent-helpers]
    src[src] --> embedded_agent_helpers[embedded-agent-helpers]
    src[src] --> embedded_agent_helpers[embedded-agent-helpers]
    src[src] --> embedded_agent_helpers[embedded-agent-helpers]
    src[src] --> agents[agents]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> runtime_plan[runtime-plan]
    src[src] --> runtime_plan[runtime-plan]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> sandbox[sandbox]
    src[src] --> sandbox[sandbox]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> sessions[sessions]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> audit[audit]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> auto_reply[auto-reply]
    src[src] --> bindings[bindings]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> message[message]
    src[src] --> channels[channels]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> contracts[contracts]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> outbound[outbound]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> commands[commands]
    src[src] --> commitments[commitments]
    src[src] --> __[..]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> context_engine[context-engine]
    src[src] --> context_engine[context-engine]
    src[src] --> context_engine[context-engine]
    src[src] --> context_engine[context-engine]
    src[src] --> context_engine[context-engine]
    src[src] --> isolated_agent[isolated-agent]
    src[src] --> cron[cron]
    src[src] --> daemon[daemon]
    src[src] --> fleet[fleet]
    src[src] --> fleet[fleet]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> hooks[hooks]
    src[src] --> hooks[hooks]
    src[src] --> hooks[hooks]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> format_time[format-time]
    src[src] --> format_time[format-time]
    src[src] --> format_time[format-time]
    src[src] --> format_time[format-time]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> net[net]
    src[src] --> net[net]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> tls[tls]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> interactive[interactive]
    src[src] --> __[..]
    src[src] --> blueprints[blueprints]
    src[src] --> __[..]
    src[src] --> llm[llm]
    src[src] --> stream_wrappers[stream-wrappers]
    src[src] --> stream_wrappers[stream-wrappers]
    src[src] --> stream_wrappers[stream-wrappers]
    src[src] --> stream_wrappers[stream-wrappers]
    src[src] --> stream_wrappers[stream-wrappers]
    src[src] --> stream_wrappers[stream-wrappers]
    src[src] --> stream_wrappers[stream-wrappers]
    src[src] --> llm[llm]
    src[src] --> utils[utils]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> media_understanding[media-understanding]
    src[src] --> media[media]
    src[src] --> media[media]
    src[src] --> media[media]
    src[src] --> media[media]
    src[src] --> media[media]
    src[src] --> media[media]
    src[src] --> media[media]
    src[src] --> media[media]
    src[src] --> media[media]
    src[src] --> model_catalog[model-catalog]
    src[src] --> node_host[node-host]
    src[src] --> __[..]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> internal[internal]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> schema[schema]
    src[src] --> schema[schema]
    src[src] --> schema[schema]
    src[src] --> schema[schema]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> speech_core[speech-core]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> pairing[pairing]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_state[plugin-state]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> runtime[runtime]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> process[process]
    src[src] --> process[process]
    src[src] --> process[process]
    src[src] --> process[process]
    src[src] --> process[process]
    src[src] --> routing[routing]
    src[src] --> routing[routing]
    src[src] --> routing[routing]
    src[src] --> routing[routing]
    src[src] --> __[..]
    src[src] --> scripts[scripts]
    src[src] --> scripts[scripts]
    src[src] --> scripts[scripts]
    src[src] --> lib[lib]
    src[src] --> lib[lib]
    src[src] --> lib[lib]
    src[src] --> lib[lib]
    src[src] --> lib[lib]
    src[src] --> lib[lib]
    src[src] --> lib[lib]
    src[src] --> scripts[scripts]
    src[src] --> scripts[scripts]
    src[src] --> scripts[scripts]
    src[src] --> scripts[scripts]
    src[src] --> scripts[scripts]
    src[src] --> __[..]
    src[src] --> secrets[secrets]
    src[src] --> security[security]
    src[src] --> security[security]
    src[src] --> security[security]
    src[src] --> security[security]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> text[text]
    src[src] --> shared[shared]
    src[src] --> discovery[discovery]
    src[src] --> loading[loading]
    src[src] --> loading[loading]
    src[src] --> runtime[runtime]
    src[src] --> runtime[runtime]
    src[src] --> runtime[runtime]
    src[src] --> runtime[runtime]
    src[src] --> workshop[workshop]
    src[src] --> workshop[workshop]
    src[src] --> workshop[workshop]
    src[src] --> state[state]
    src[src] --> status[status]
    src[src] --> status[status]
    src[src] --> status[status]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> __[..]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> auto_reply[auto-reply]
    src[src] --> helpers[helpers]
    src[src] --> helpers[helpers]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> helpers[helpers]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> helpers[helpers]
    src[src] --> paci_fake[paci-fake]
    src[src] --> paci_fake[paci-fake]
    src[src] --> helpers[helpers]
    src[src] --> helpers[helpers]
    src[src] --> helpers[helpers]
    src[src] --> helpers[helpers]
    src[src] --> helpers[helpers]
    src[src] --> helpers[helpers]
    src[src] --> vitest[vitest]
    src[src] --> vitest[vitest]
    src[src] --> vitest[vitest]
    src[src] --> vitest[vitest]
    src[src] --> __[..]
    src[src] --> tts[tts]
    src[src] --> tts[tts]
    src[src] --> tts[tts]
    src[src] --> tts[tts]
    src[src] --> tts[tts]
    src[src] --> __[..]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> wizard[wizard]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> control_plane[control-plane]
    src[src] --> control_plane[control-plane]
    src[src] --> acp[acp]
    src[src] --> acp[acp]
    src[src] --> runtime[runtime]
    src[src] --> runtime[runtime]
    src[src] --> runtime[runtime]
    src[src] --> acp[acp]
    src[src] --> acp[acp]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> agent_hooks[agent-hooks]
    src[src] --> agent_hooks[agent-hooks]
    src[src] --> agent_hooks[agent-hooks]
    src[src] --> context_pruning[context-pruning]
    src[src] --> context_pruning[context-pruning]
    src[src] --> context_pruning[context-pruning]
    src[src] --> agent_hooks[agent-hooks]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> command[command]
    src[src] --> command[command]
    src[src] --> command[command]
    src[src] --> command[command]
    src[src] --> command[command]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> sandbox[sandbox]
    src[src] --> sandbox[sandbox]
    src[src] --> sandbox[sandbox]
    src[src] --> sandbox[sandbox]
    src[src] --> sandbox[sandbox]
    src[src] --> sandbox[sandbox]
    src[src] --> sandbox[sandbox]
    src[src] --> sandbox[sandbox]
    src[src] --> sandbox[sandbox]
    src[src] --> sandbox[sandbox]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> sessions[sessions]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> agents[agents]
    src[src] --> worktrees[worktrees]
    src[src] --> worktrees[worktrees]
    src[src] --> worktrees[worktrees]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> auto_reply[auto-reply]
    src[src] --> auto_reply[auto-reply]
    src[src] --> auto_reply[auto-reply]
    src[src] --> auto_reply[auto-reply]
    src[src] --> auto_reply[auto-reply]
    src[src] --> auto_reply[auto-reply]
    src[src] --> auto_reply[auto-reply]
    src[src] --> auto_reply[auto-reply]
    src[src] --> auto_reply[auto-reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> queue[queue]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> auto_reply[auto-reply]
    src[src] --> auto_reply[auto-reply]
    src[src] --> auto_reply[auto-reply]
    src[src] --> auto_reply[auto-reply]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> bindings[bindings]
    src[src] --> __[..]
    src[src] --> canvas[canvas]
    src[src] --> canvas[canvas]
    src[src] --> canvas[canvas]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> message_access[message-access]
    src[src] --> message[message]
    src[src] --> message[message]
    src[src] --> message[message]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> outbound[outbound]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> __[..]
    src[src] --> cli_runner[cli-runner]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> daemon_cli[daemon-cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> gateway_cli[gateway-cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> program[program]
    src[src] --> program[program]
    src[src] --> program[program]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> shared[shared]
    src[src] --> update_cli[update-cli]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> commands[commands]
    src[src] --> commands[commands]
    src[src] --> commands[commands]
    src[src] --> commands[commands]
    src[src] --> commands[commands]
    src[src] --> commands[commands]
    src[src] --> channel_setup[channel-setup]
    src[src] --> channel_setup[channel-setup]
    src[src] --> channel_setup[channel-setup]
    src[src] --> commands[commands]
    src[src] --> commands[commands]
    src[src] --> commands[commands]
    src[src] --> commands[commands]
    src[src] --> commands[commands]
    src[src] --> commands[commands]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> commands[commands]
    src[src] --> commands[commands]
    src[src] --> commands[commands]
    src[src] --> migrate[migrate]
    src[src] --> migrate[migrate]
    src[src] --> commands[commands]
    src[src] --> commands[commands]
    src[src] --> commands[commands]
    src[src] --> commands[commands]
    src[src] --> commands[commands]
    src[src] --> commitments[commitments]
    src[src] --> commitments[commitments]
    src[src] --> commitments[commitments]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> compat[compat]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> context_engine[context-engine]
    src[src] --> context_engine[context-engine]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> cron[cron]
    src[src] --> isolated_agent[isolated-agent]
    src[src] --> isolated_agent[isolated-agent]
    src[src] --> cron[cron]
    src[src] --> service[service]
    src[src] --> service[service]
    src[src] --> service[service]
    src[src] --> cron[cron]
    src[src] --> store[store]
    src[src] --> cron[cron]
    src[src] --> cron[cron]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> daemon[daemon]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> embedded_agent_helpers[embedded-agent-helpers]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> flows[flows]
    src[src] --> flows[flows]
    src[src] --> flows[flows]
    src[src] --> flows[flows]
    src[src] --> flows[flows]
    src[src] --> flows[flows]
    src[src] --> flows[flows]
    src[src] --> flows[flows]
    src[src] --> __[..]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> methods[methods]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> server_methods[server-methods]
    src[src] --> server_methods[server-methods]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> gateway[gateway]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> hooks[hooks]
    src[src] --> hooks[hooks]
    src[src] --> hooks[hooks]
    src[src] --> hooks[hooks]
    src[src] --> hooks[hooks]
    src[src] --> hooks[hooks]
    src[src] --> hooks[hooks]
    src[src] --> hooks[hooks]
    src[src] --> hooks[hooks]
    src[src] --> hooks[hooks]
    src[src] --> hooks[hooks]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> command_analysis[command-analysis]
    src[src] --> command_analysis[command-analysis]
    src[src] --> command_explainer[command-explainer]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> format_time[format-time]
    src[src] --> format_time[format-time]
    src[src] --> format_time[format-time]
    src[src] --> format_time[format-time]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> net[net]
    src[src] --> net[net]
    src[src] --> net[net]
    src[src] --> net[net]
    src[src] --> proxy[proxy]
    src[src] --> net[net]
    src[src] --> net[net]
    src[src] --> net[net]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> tls[tls]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> interactive[interactive]
    src[src] --> __[..]
    src[src] --> llm[llm]
    src[src] --> llm[llm]
    src[src] --> stream_wrappers[stream-wrappers]
    src[src] --> stream_wrappers[stream-wrappers]
    src[src] --> stream_wrappers[stream-wrappers]
    src[src] --> stream_wrappers[stream-wrappers]
    src[src] --> stream_wrappers[stream-wrappers]
    src[src] --> stream_wrappers[stream-wrappers]
    src[src] --> stream_wrappers[stream-wrappers]
    src[src] --> stream_wrappers[stream-wrappers]
    src[src] --> llm[llm]
    src[src] --> utils[utils]
    src[src] --> oauth[oauth]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> logging[logging]
    src[src] --> mcp[mcp]
    src[src] --> media_generation[media-generation]
    src[src] --> __[..]
    src[src] --> media_understanding[media-understanding]
    src[src] --> media[media]
    src[src] --> media[media]
    src[src] --> media[media]
    src[src] --> media[media]
    src[src] --> media[media]
    src[src] --> media[media]
    src[src] --> media[media]
    src[src] --> memory_host_sdk[memory-host-sdk]
    src[src] --> memory_host_sdk[memory-host-sdk]
    src[src] --> memory_host_sdk[memory-host-sdk]
    src[src] --> host[host]
    src[src] --> memory_host_sdk[memory-host-sdk]
    src[src] --> memory_host_sdk[memory-host-sdk]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> memory[memory]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> model_catalog[model-catalog]
    src[src] --> model_catalog[model-catalog]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> models[models]
    src[src] --> models[models]
    src[src] --> __[..]
    src[src] --> node_host[node-host]
    src[src] --> node_host[node-host]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> src[src]
    src[src] --> pairing[pairing]
    src[src] --> pairing[pairing]
    src[src] --> pairing[pairing]
    src[src] --> pairing[pairing]
    src[src] --> pairing[pairing]
    src[src] --> pairing[pairing]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> test_helpers[test-helpers]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_state[plugin-state]
    src[src] --> plugin_state[plugin-state]
    src[src] --> plugin_state[plugin-state]
    src[src] --> plugin_state[plugin-state]
    src[src] --> plugin_state[plugin-state]
    src[src] --> __[..]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> inventory[inventory]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> runtime[runtime]
    src[src] --> runtime[runtime]
    src[src] --> runtime[runtime]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> __[..]
    src[src] --> process[process]
    src[src] --> process[process]
    src[src] --> process[process]
    src[src] --> process[process]
    src[src] --> process[process]
    src[src] --> process[process]
    src[src] --> process[process]
    src[src] --> supervisor[supervisor]
    src[src] --> program[program]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> provider_runtime[provider-runtime]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> proxy_capture[proxy-capture]
    src[src] --> proxy_capture[proxy-capture]
    src[src] --> proxy_capture[proxy-capture]
    src[src] --> proxy_capture[proxy-capture]
    src[src] --> proxy_capture[proxy-capture]
    src[src] --> proxy_capture[proxy-capture]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> routing[routing]
    src[src] --> routing[routing]
    src[src] --> routing[routing]
    src[src] --> routing[routing]
    src[src] --> routing[routing]
    src[src] --> routing[routing]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> runtime_plan[runtime-plan]
    src[src] --> runtime_plan[runtime-plan]
    src[src] --> runtime_plan[runtime-plan]
    src[src] --> runtime_plan[runtime-plan]
    src[src] --> runtime_plan[runtime-plan]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> runtime[runtime]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> secrets[secrets]
    src[src] --> security[security]
    src[src] --> security[security]
    src[src] --> security[security]
    src[src] --> security[security]
    src[src] --> security[security]
    src[src] --> security[security]
    src[src] --> security[security]
    src[src] --> security[security]
    src[src] --> security[security]
    src[src] --> security[security]
    src[src] --> security[security]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> server_methods[server-methods]
    src[src] --> server_methods[server-methods]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> tools[tools]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> __[..]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> text[text]
    src[src] --> text[text]
    src[src] --> text[text]
    src[src] --> text[text]
    src[src] --> text[text]
    src[src] --> text[text]
    src[src] --> text[text]
    src[src] --> text[text]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> __[..]
    src[src] --> discovery[discovery]
    src[src] --> discovery[discovery]
    src[src] --> lifecycle[lifecycle]
    src[src] --> lifecycle[lifecycle]
    src[src] --> lifecycle[lifecycle]
    src[src] --> lifecycle[lifecycle]
    src[src] --> loading[loading]
    src[src] --> loading[loading]
    src[src] --> research[research]
    src[src] --> runtime[runtime]
    src[src] --> security[security]
    src[src] --> test_support[test-support]
    src[src] --> workshop[workshop]
    src[src] --> workshop[workshop]
    src[src] --> workshop[workshop]
    src[src] --> snapshot[snapshot]
    src[src] --> __[..]
    src[src] --> state[state]
    src[src] --> state[state]
    src[src] --> state[state]
    src[src] --> state[state]
    src[src] --> state[state]
    src[src] --> state[state]
    src[src] --> state[state]
    src[src] --> state[state]
    src[src] --> state[state]
    src[src] --> state[state]
    src[src] --> state[state]
    src[src] --> state[state]
    src[src] --> state[state]
    src[src] --> state[state]
    src[src] --> __[..]
    src[src] --> status[status]
    src[src] --> status[status]
    src[src] --> status[status]
    src[src] --> status[status]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> system_agent[system-agent]
    src[src] --> system_agent[system-agent]
    src[src] --> system_agent[system-agent]
    src[src] --> system_agent[system-agent]
    src[src] --> system_agent[system-agent]
    src[src] --> __[..]
    src[src] --> talk[talk]
    src[src] --> talk[talk]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> tasks[tasks]
    src[src] --> __[..]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> __[..]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> test_utils[test-utils]
    src[src] --> helpers[helpers]
    src[src] --> theme[theme]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> trajectory[trajectory]
    src[src] --> trajectory[trajectory]
    src[src] --> trajectory[trajectory]
    src[src] --> trajectory[trajectory]
    src[src] --> __[..]
    src[src] --> transcripts[transcripts]
    src[src] --> __[..]
    src[src] --> tts[tts]
    src[src] --> tts[tts]
    src[src] --> tui[tui]
    src[src] --> tui[tui]
    src[src] --> usage_bar[usage-bar]
    src[src] --> usage_bar[usage-bar]
    src[src] --> usage_bar[usage-bar]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> __[..]
    src[src] --> web_search[web-search]
    src[src] --> wizard[wizard]
    src[src] --> i18n[i18n]
    src[src] --> wizard[wizard]
    src[src] --> wizard[wizard]
    src[src] --> wizard[wizard]
    src[src] --> wizard[wizard]
    src[src] --> __[..]
    src[src] --> __[..]
    src[src] --> _payload[.payload]
    src[src] --> __tests__[__tests__]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> agent_hooks[agent-hooks]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> agents[agents]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auth_profiles[auth-profiles]
    src[src] --> auto_reply[auto-reply]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> bootstrap[bootstrap]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> capability_cli[capability-cli]
    src[src] --> capability_cli[capability-cli]
    src[src] --> capability_cli[capability-cli]
    src[src] --> capability_cli[capability-cli]
    src[src] --> capability_cli[capability-cli]
    src[src] --> capability_cli[capability-cli]
    src[src] --> capability_cli[capability-cli]
    src[src] --> capability_cli[capability-cli]
    src[src] --> capability_cli[capability-cli]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> channel_setup[channel-setup]
    src[src] --> channel_setup[channel-setup]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> channels[channels]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> cli_runner[cli-runner]
    src[src] --> cli_runner[cli-runner]
    src[src] --> cli_runner[cli-runner]
    src[src] --> cli_runner[cli-runner]
    src[src] --> cli_runner[cli-runner]
    src[src] --> cli_runner[cli-runner]
    src[src] --> cli_runner[cli-runner]
    src[src] --> cli_runner[cli-runner]
    src[src] --> cli_runner[cli-runner]
    src[src] --> cli_runner[cli-runner]
    src[src] --> cli_runner[cli-runner]
    src[src] --> cli_runner[cli-runner]
    src[src] --> cli_runner[cli-runner]
    src[src] --> cli_runner[cli-runner]
    src[src] --> cli_runner[cli-runner]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> cli[cli]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> command_analysis[command-analysis]
    src[src] --> command_analysis[command-analysis]
    src[src] --> command_analysis[command-analysis]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> command_explainer[command-explainer]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> command[command]
    src[src] --> command[command]
    src[src] --> command[command]
    src[src] --> command[command]
    src[src] --> command[command]
    src[src] --> command[command]
    src[src] --> command[command]
    src[src] --> command[command]
    src[src] --> command[command]
    src[src] --> command[command]
    src[src] --> command[command]
    src[src] --> command[command]
    src[src] --> command[command]
    src[src] --> command[command]
    src[src] --> _[.]
    src[src] --> commands_acp[commands-acp]
    src[src] --> commands_acp[commands-acp]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> commands_subagents[commands-subagents]
    src[src] --> commands_subagents[commands-subagents]
    src[src] --> commands_subagents[commands-subagents]
    src[src] --> commands_subagents[commands-subagents]
    src[src] --> commands_subagents[commands-subagents]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> compat[compat]
    src[src] --> compat[compat]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> config[config]
    src[src] --> config[config]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> daemon_cli[daemon-cli]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> cron[cron]
    src[src] --> doctor[doctor]
    src[src] --> doctor[doctor]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> embedded_agent_helpers[embedded-agent-helpers]
    src[src] --> embedded_agent_helpers[embedded-agent-helpers]
    src[src] --> embedded_agent_helpers[embedded-agent-helpers]
    src[src] --> embedded_agent_helpers[embedded-agent-helpers]
    src[src] --> embedded_agent_helpers[embedded-agent-helpers]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> embedded_agent_runner[embedded-agent-runner]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> format_time[format-time]
    src[src] --> format_time[format-time]
    src[src] --> format_time[format-time]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> gateway_cli[gateway-cli]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> gateway_status[gateway-status]
    src[src] --> gateway_status[gateway-status]
    src[src] --> gateway_status[gateway-status]
    src[src] --> gateway_status[gateway-status]
    src[src] --> gateway_status[gateway-status]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> harness[harness]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> i18n[i18n]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> inbound_event[inbound-event]
    src[src] --> inbound_event[inbound-event]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> infra[infra]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> logging[logging]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> message[message]
    src[src] --> message[message]
    src[src] --> migrate[migrate]
    src[src] --> migrate[migrate]
    src[src] --> migrate[migrate]
    src[src] --> migrate[migrate]
    src[src] --> migrate[migrate]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> models[models]
    src[src] --> models[models]
    src[src] --> models[models]
    src[src] --> models[models]
    src[src] --> models[models]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> net[net]
    src[src] --> net[net]
    src[src] --> proxy[proxy]
    src[src] --> proxy[proxy]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> nodes_cli[nodes-cli]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> onboard_non_interactive[onboard-non-interactive]
    src[src] --> onboard_non_interactive[onboard-non-interactive]
    src[src] --> onboard_non_interactive[onboard-non-interactive]
    src[src] --> local[local]
    src[src] --> local[local]
    src[src] --> onboard_non_interactive[onboard-non-interactive]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> outbound[outbound]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> plugins_http[plugins-http]
    src[src] --> plugins_http[plugins-http]
    src[src] --> plugins_http[plugins-http]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> plugins[plugins]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> process[process]
    src[src] --> process[process]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> program[program]
    src[src] --> program[program]
    src[src] --> program[program]
    src[src] --> program[program]
    src[src] --> program[program]
    src[src] --> program[program]
    src[src] --> program[program]
    src[src] --> program[program]
    src[src] --> program[program]
    src[src] --> program[program]
    src[src] --> program[program]
    src[src] --> program[program]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> queue[queue]
    src[src] --> queue[queue]
    src[src] --> queue[queue]
    src[src] --> queue[queue]
    src[src] --> queue[queue]
    src[src] --> queue[queue]
    src[src] --> queue[queue]
    src[src] --> queue[queue]
    src[src] --> queue[queue]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> exec[exec]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> queue[queue]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> reply[reply]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> run[run]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> runtime_plan[runtime-plan]
    src[src] --> runtime_plan[runtime-plan]
    src[src] --> runtime_plan[runtime-plan]
    src[src] --> runtime_plan[runtime-plan]
    src[src] --> runtime_plan[runtime-plan]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> runtime[runtime]
    src[src] --> runtime[runtime]
    src[src] --> runtime[runtime]
    src[src] --> runtime[runtime]
    src[src] --> runtime[runtime]
    src[src] --> runtime[runtime]
    src[src] --> runtime[runtime]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> sandbox[sandbox]
    src[src] --> sandbox[sandbox]
    src[src] --> sandbox[sandbox]
    src[src] --> sandbox[sandbox]
    src[src] --> sandbox[sandbox]
    src[src] --> sandbox[sandbox]
    src[src] --> sandbox[sandbox]
    src[src] --> sandbox[sandbox]
    src[src] --> sandbox[sandbox]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> schema[schema]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> sessions[sessions]
    src[src] --> compaction[compaction]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> sessions[sessions]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> __tests__[__tests__]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> agents[agents]
    src[src] --> infra[infra]
    src[src] --> plugins[plugins]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> status_all[status-all]
    src[src] --> status_all[status-all]
    src[src] --> status_all[status-all]
    src[src] --> status_all[status-all]
    src[src] --> status_all[status-all]
    src[src] --> status_all[status-all]
    src[src] --> status_all[status-all]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> test_fixtures[test-fixtures]
    src[src] --> _[.]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> test_helpers[test-helpers]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> test_utils[test-utils]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> tools[tools]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> turn[turn]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> update_cli[update-cli]
    src[src] --> update_cli[update-cli]
    src[src] --> update_cli[update-cli]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> utils[utils]
    src[src] --> utils[utils]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> ws_connection[ws-connection]
    src[src] --> ws_connection[ws-connection]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _[.]
    src[src] --> _clack[@clack]
    src[src] --> _clack[@clack]
    src[src] --> _earendil_works[@earendil-works]
    src[src] --> client[client]
    src[src] --> client[client]
    src[src] --> client[client]
    src[src] --> client[client]
    src[src] --> client[client]
    src[src] --> shared[shared]
    src[src] --> shared[shared]
    src[src] --> sdk[sdk]
    src[src] --> validation[validation]
    src[src] --> runtime[runtime]
    src[src] --> runtime[runtime]
    src[src] --> runtime[runtime]
    src[src] --> acp_core[acp-core]
    src[src] --> _openclaw[@openclaw]
    src[src] --> internal[internal]
    src[src] --> internal[internal]
    src[src] --> internal[internal]
    src[src] --> internal[internal]
    src[src] --> internal[internal]
    src[src] --> ai[ai]
    src[src] --> _openclaw[@openclaw]
    src[src] --> fs_safe[fs-safe]
    src[src] --> fs_safe[fs-safe]
    src[src] --> fs_safe[fs-safe]
    src[src] --> fs_safe[fs-safe]
    src[src] --> fs_safe[fs-safe]
    src[src] --> fs_safe[fs-safe]
    src[src] --> fs_safe[fs-safe]
    src[src] --> fs_safe[fs-safe]
    src[src] --> fs_safe[fs-safe]
    src[src] --> _openclaw[@openclaw]
    src[src] --> media_core[media-core]
    src[src] --> media_core[media-core]
    src[src] --> media_core[media-core]
    src[src] --> media_core[media-core]
    src[src] --> media_core[media-core]
    src[src] --> media_core[media-core]
    src[src] --> media_core[media-core]
    src[src] --> media_core[media-core]
    src[src] --> media_core[media-core]
    src[src] --> model_catalog_core[model-catalog-core]
    src[src] --> model_catalog_core[model-catalog-core]
    src[src] --> model_catalog_core[model-catalog-core]
    src[src] --> model_catalog_core[model-catalog-core]
    src[src] --> model_catalog_core[model-catalog-core]
    src[src] --> model_catalog_core[model-catalog-core]
    src[src] --> net_policy[net-policy]
    src[src] --> net_policy[net-policy]
    src[src] --> net_policy[net-policy]
    src[src] --> net_policy[net-policy]
    src[src] --> net_policy[net-policy]
    src[src] --> _openclaw[@openclaw]
    src[src] --> normalization_core[normalization-core]
    src[src] --> normalization_core[normalization-core]
    src[src] --> normalization_core[normalization-core]
    src[src] --> normalization_core[normalization-core]
    src[src] --> normalization_core[normalization-core]
    src[src] --> normalization_core[normalization-core]
    src[src] --> normalization_core[normalization-core]
    src[src] --> _openclaw[@openclaw]
    src[src] --> _silvia_odwyer[@silvia-odwyer]
    src[src] --> capped_telemetry_helper[capped-telemetry-helper]
    src[src] --> chalk[chalk]
    src[src] --> child_process[child_process]
    src[src] --> chokidar[chokidar]
    src[src] --> commander[commander]
    src[src] --> esbuild[esbuild]
    src[src] --> execa[execa]
    src[src] --> hidden_telemetry_helper[hidden-telemetry-helper]
    src[src] --> iconv_lite[iconv-lite]
    src[src] --> jiti[jiti]
    src[src] --> jose[jose]
    src[src] --> jszip[jszip]
    src[src] --> node_async_hooks[node:async_hooks]
    src[src] --> node_buffer[node:buffer]
    src[src] --> node_child_process[node:child_process]
    src[src] --> node_crypto[node:crypto]
    src[src] --> node_events[node:events]
    src[src] --> node_fs[node:fs]
    src[src] --> node_fs[node:fs]
    src[src] --> node_http[node:http]
    src[src] --> node_http2[node:http2]
    src[src] --> node_https[node:https]
    src[src] --> node_module[node:module]
    src[src] --> node_net[node:net]
    src[src] --> node_os[node:os]
    src[src] --> node_path[node:path]
    src[src] --> node_perf_hooks[node:perf_hooks]
    src[src] --> node_process[node:process]
    src[src] --> node_readline[node:readline]
    src[src] --> node_readline[node:readline]
    src[src] --> node_sqlite[node:sqlite]
    src[src] --> node_stream[node:stream]
    src[src] --> node_stream[node:stream]
    src[src] --> node_string_decoder[node:string_decoder]
    src[src] --> node_timers[node:timers]
    src[src] --> node_timers[node:timers]
    src[src] --> node_tls[node:tls]
    src[src] --> node_url[node:url]
    src[src] --> node_util[node:util]
    src[src] --> node_vm[node:vm]
    src[src] --> node_worker_threads[node:worker_threads]
    src[src] --> node_zlib[node:zlib]
    src[src] --> openai[openai]
    src[src] --> openclaw[openclaw]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> plugin_sdk[plugin-sdk]
    src[src] --> p_limit[p-limit]
    src[src] --> p_map[p-map]
    src[src] --> qrcode[qrcode]
    src[src] --> quickjs_wasi[quickjs-wasi]
    src[src] --> telemetry_helper[telemetry-helper]
    src[src] --> typebox[typebox]
    src[src] --> typebox[typebox]
    src[src] --> typebox[typebox]
    src[src] --> typescript[typescript]
    src[src] --> yaml[yaml]
```

## Internal Dependencies

Dependencies within this module:

- `diff`
- `dotenv`
- `http`
- `json5`
- `kysely`
- `ms`
- `openai`
- `path`
- `rastermill`
- `semver`
- `typebox`
- `vitest`
- `web-push`
- `ws`
- `zod`

## External Dependencies

Dependencies from other modules:

- `../../../agents/agent-scope.js`
- `../../../agents/workspace.js`
- `../../../cli/deps.js`
- `../../../config/paths.js`
- `../../../config/sessions/session-accessor.js`
- `../../../config/sessions/sqlite-marker.js`
- `../../../config/sessions/transcript-visible-events.js`
- `../../../gateway/boot.js`
- `../../../gateway/startup-tasks.js`
- `../../../infra/errors.js`
- `../../../infra/exec-approvals.js`
- `../../../infra/fs-safe.js`
- `../../../infra/json-files.js`
- `../../../logging/subsystem.js`
- `../../../packages/agent-core/src/harness/messages.js`
- `../../../packages/gateway-protocol/src/client-info.js`
- `../../../packages/gateway-protocol/src/index.js`
- `../../../packages/gateway-protocol/src/startup-unavailable.js`
- `../../../packages/terminal-core/src/ansi.js`
- `../../../packages/terminal-core/src/safe-text.js`
- `../../../packages/terminal-core/src/table.js`
- `../../../plugins/registry-empty.js`
- `../../../routing/session-key.js`
- `../../../security/external-content.js`
- `../../../sessions/input-provenance.js`
- `../../../shared/transcript-only-openclaw-assistant.js`
- `../../../test-helpers/workspace.js`
- `../../../test-utils/env.js`
- `../../../test/helpers/agents/llm-stream-simple-mock.js`
- `../../../test/helpers/normalize-text.js`
- `../../../test/helpers/temp-dir.js`
- `../../../utils.js`
- `../../../utils/syntax-highlight.js`
- `../../acp/control-plane/manager.js`
- `../../acp/conversation-id.js`
- `../../acp/persistent-bindings.types.js`
- `../../acp/policy.js`
- `../../acp/runtime/availability.js`
- `../../acp/runtime/errors.js`
- `../../acp/runtime/session-meta.js`
- `../../acp/tool-status.js`
- `../../agents/agent-bundle-mcp-manager-api.js`
- `../../agents/agent-bundle-mcp-runtime.js`
- `../../agents/agent-bundle-mcp-tools.js`
- `../../agents/agent-runtime-id.js`
- `../../agents/agent-scope.js`
- `../../agents/agent-tools.js`
- `../../agents/agent-tools.policy.js`
- `../../agents/auth-health.js`
- `../../agents/auth-profiles.js`
- `../../agents/auth-profiles/failure-copy.js`
- `../../agents/auth-profiles/oauth-refresh-failure.js`
- `../../agents/auth-profiles/order.js`
- `../../agents/auth-profiles/session-override.js`
- `../../agents/auth-profiles/store.js`
- `../../agents/bash-process-registry.js`
- `../../agents/bash-tools.exec-runtime.js`
- `../../agents/bash-tools.js`
- `../../agents/bootstrap-budget.js`
- `../../agents/bootstrap-cache.js`
- `../../agents/bootstrap-files.js`
- `../../agents/bootstrap-mode.js`
- `../../agents/bootstrap-prompt.js`
- `../../agents/btw.js`
- `../../agents/cli-backends.js`
- `../../agents/cli-backends.test-support.js`
- `../../agents/cli-runner.js`
- `../../agents/cli-session.js`
- `../../agents/codex-native-web-search-core.js`
- `../../agents/command/attempt-execution.js`
- `../../agents/compaction-real-conversation.js`
- `../../agents/compaction.js`
- `../../agents/content-blocks.js`
- `../../agents/context-cache.js`
- `../../agents/context.js`
- `../../agents/conversation-capability-profile.js`
- `../../agents/current-time.js`
- `../../agents/date-time.js`
- `../../agents/defaults.js`
- `../../agents/embedded-agent-block-chunker.js`
- `../../agents/embedded-agent-helpers.js`
- `../../agents/embedded-agent-helpers/bootstrap.js`
- `../../agents/embedded-agent-helpers/errors.js`
- `../../agents/embedded-agent-helpers/failover-matches.js`
- `../../agents/embedded-agent-helpers/sanitize-user-facing-text.js`
- `../../agents/embedded-agent-messaging.js`
- `../../agents/embedded-agent-runner/compact-reasons.js`
- `../../agents/embedded-agent-runner/delivery-evidence.js`
- `../../agents/embedded-agent-runner/result-fallback-classifier.js`
- `../../agents/embedded-agent-runner/runs.js`
- `../../agents/embedded-agent-runner/runs.test-support.js`
- `../../agents/embedded-agent-runner/sandbox-info.js`
- `../../agents/embedded-agent-runner/sandbox-skills.js`
- `../../agents/embedded-agent-runner/session-prompt-state.js`
- `../../agents/embedded-agent-runner/tool-result-char-estimator.js`
- `../../agents/embedded-agent-subscribe.tools.js`
- `../../agents/embedded-agent-utils.js`
- `../../agents/embedded-agent.js`
- `../../agents/exec-defaults.js`
- `../../agents/failover-error.js`
- `../../agents/fast-mode.js`
- `../../agents/harness/errors.js`
- `../../agents/harness/hook-helpers.js`
- `../../agents/harness/policy.js`
- `../../agents/harness/registry.js`
- `../../agents/harness/runtime-plugin.js`
- `../../agents/harness/selection.js`
- `../../agents/identity.js`
- `../../agents/internal-runtime-context.js`
- `../../agents/live-model-switch-error.js`
- `../../agents/live-model-switch.js`
- `../../agents/main-session-recovery-clear.js`
- `../../agents/main-session-recovery-owner-release.js`
- `../../agents/main-session-recovery-state.js`
- `../../agents/main-session-recovery-store.js`
- `../../agents/mcp-app-model-context.js`
- `../../agents/model-auth-label.js`
- `../../agents/model-auth.js`
- `../../agents/model-catalog-browse.js`
- `../../agents/model-catalog-visibility.js`
- `../../agents/model-catalog.runtime.js`
- `../../agents/model-fallback.js`
- `../../agents/model-picker-visibility.js`
- `../../agents/model-provider-auth.js`
- `../../agents/model-ref-shared.js`
- `../../agents/model-runtime-aliases.js`
- `../../agents/model-selection-cli.js`
- `../../agents/model-selection-normalize.js`
- `../../agents/model-selection-shared.js`
- `../../agents/model-selection.js`
- `../../agents/model-tool-support.js`
- `../../agents/model-visibility-policy.js`
- `../../agents/openai-model-routes.js`
- `../../agents/openai-routing.js`
- `../../agents/path-policy.js`
- `../../agents/prepared-model-catalog.js`
- `../../agents/prompt-surface.js`
- `../../agents/provider-auth-aliases.js`
- `../../agents/run-termination.js`
- `../../agents/runtime-plan/auth.js`
- `../../agents/runtime-plan/build.js`
- `../../agents/sandbox-paths.js`
- `../../agents/sandbox.js`
- `../../agents/sandbox/runtime-status.js`
- `../../agents/sandbox/shared.js`
- `../../agents/session-model-auto-revert.js`
- `../../agents/session-model-ref.js`
- `../../agents/session-placement-admission.js`
- `../../agents/session-runtime-compat.js`
- `../../agents/sessions/session-manager.js`
- `../../agents/simple-completion-runtime.js`
- `../../agents/spawned-context.js`
- `../../agents/subagent-capabilities.js`
- `../../agents/subagent-registry-memory.js`
- `../../agents/subagent-registry-queries.js`
- `../../agents/subagent-registry-state.js`
- `../../agents/subagent-registry.js`
- `../../agents/subagent-registry.test-helpers.js`
- `../../agents/system-prompt-config.js`
- `../../agents/system-prompt-params.js`
- `../../agents/system-prompt-report.js`
- `../../agents/system-prompt.js`
- `../../agents/thinking-runtime.js`
- `../../agents/timeout.js`
- `../../agents/tool-display.js`
- `../../agents/tool-policy-match.js`
- `../../agents/tool-policy.js`
- `../../agents/tools-effective-inventory.js`
- `../../agents/tools/ask-user-tool.js`
- `../../agents/tools/chat-history-text.js`
- `../../agents/tools/sessions-helpers.js`
- `../../agents/transcript-redact.js`
- `../../agents/usage.js`
- `../../agents/utility-model.js`
- `../../agents/workspace-bootstrap-read.js`
- `../../agents/workspace.js`
- `../../audit/message-audit-events.js`
- `../../auto-reply/reply/agent-runner-failure-copy.js`
- `../../auto-reply/reply/display-text-sanitize.js`
- `../../auto-reply/reply/inbound-text.js`
- `../../auto-reply/reply/reply-run-registry.js`
- `../../auto-reply/reply/reply-run-registry.test-support.js`
- `../../auto-reply/tokens.js`
- `../../bindings/records.js`
- `../../browser-lifecycle-cleanup.js`
- `../../bundled-plugin-scan.js`
- `../../channels/chat-type.js`
- `../../channels/conversation-binding-context.js`
- `../../channels/conversation-label.js`
- `../../channels/mention-pattern-policy.js`
- `../../channels/message/ingress-drain.js`
- `../../channels/model-overrides.js`
- `../../channels/plugins/binding-registry.js`
- `../../channels/plugins/binding-targets.js`
- `../../channels/plugins/bundled.js`
- `../../channels/plugins/config-writes.js`
- `../../channels/plugins/contracts/test-helpers.js`
- `../../channels/plugins/conversation-bindings.js`
- `../../channels/plugins/exec-approval-local.js`
- `../../channels/plugins/index.js`
- `../../channels/plugins/outbound/load.js`
- `../../channels/plugins/registry-loaded.js`
- `../../channels/plugins/session-conversation.js`
- `../../channels/progress-draft-compositor.js`
- `../../channels/progress-draft-status-text.js`
- `../../channels/registry.js`
- `../../channels/streaming.js`
- `../../channels/thread-bindings-messages.js`
- `../../channels/typing-lifecycle.js`
- `../../channels/typing-start-guard.js`
- `../../cli/command-format.js`
- `../../cli/command-secret-gateway.js`
- `../../cli/command-secret-targets.js`
- `../../cli/message-secret-scope.js`
- `../../cli/npm-resolution.js`
- `../../cli/parse-duration.js`
- `../../cli/plugin-install-plan.js`
- `../../cli/plugins-command-helpers.js`
- `../../cli/prompt.js`
- `../../commands/health.js`
- `../../commitments/runtime.js`
- `../../config.js`
- `../../config/bindings.js`
- `../../config/byte-size.js`
- `../../config/cache-utils.js`
- `../../config/commands.flags.js`
- `../../config/config-paths.js`
- `../../config/config.js`
- `../../config/group-policy.js`
- `../../config/home-env.test-harness.js`
- `../../config/includes.js`
- `../../config/io.js`
- `../../config/issue-format.js`
- `../../config/mcp-config.js`
- `../../config/merge-patch.js`
- `../../config/model-input.js`
- `../../config/nix-mode-write-guard.js`
- `../../config/paths.js`
- `../../config/plugin-auto-enable.js`
- `../../config/redact-argv.js`
- `../../config/redact-snapshot.js`
- `../../config/runtime-overrides.js`
- `../../config/runtime-schema.js`
- `../../config/runtime-snapshot.js`
- `../../config/schema.js`
- `../../config/sessions.js`
- `../../config/sessions/ambient-transcript-watermark.js`
- `../../config/sessions/conversation-delivery-store.js`
- `../../config/sessions/conversation-identity.js`
- `../../config/sessions/explicit-session-key-normalization.js`
- `../../config/sessions/goals.js`
- `../../config/sessions/group.js`
- `../../config/sessions/lifecycle.js`
- `../../config/sessions/main-session.js`
- `../../config/sessions/metadata.js`
- `../../config/sessions/paths.js`
- `../../config/sessions/reset-preserved-selection.js`
- `../../config/sessions/reset.js`
- `../../config/sessions/restart-recovery-state.js`
- `../../config/sessions/session-accessor.js`
- `../../config/sessions/session-accessor.sqlite.js`
- `../../config/sessions/session-key.js`
- `../../config/sessions/session-snapshot-merge.js`
- `../../config/sessions/skill-suggestions.js`
- `../../config/sessions/sqlite-marker.js`
- `../../config/sessions/store-entry.js`
- `../../config/sessions/store-maintenance.js`
- `../../config/sessions/store-writer.js`
- `../../config/sessions/store.js`
- `../../config/sessions/terminal-status.js`
- `../../config/sessions/thread-info.js`
- `../../config/sessions/transcript-jsonl.js`
- `../../config/sessions/transcript-replay.js`
- `../../config/sessions/transcript-tree.js`
- `../../config/sessions/transcript-write-context.js`
- `../../config/sessions/transcript.js`
- `../../config/sessions/types.js`
- `../../config/sessions/version.js`
- `../../config/silent-reply.js`
- `../../config/talk.js`
- `../../config/types.secrets.js`
- `../../config/validation.js`
- `../../context-engine/host-compat.js`
- `../../context-engine/init.js`
- `../../context-engine/registry.js`
- `../../context-engine/runtime-settings.js`
- `../../context-engine/types.js`
- `../../cron/isolated-agent/session-key.js`
- `../../cron/store.js`
- `../../daemon/runtime-binary.js`
- `../../fleet/cell-profile.js`
- `../../fleet/service.runtime.js`
- `../../gateway/active-sessions-shutdown-tracker.js`
- `../../gateway/mcp-app-channel-action.js`
- `../../gateway/message-action-turn-capability.js`
- `../../gateway/session-compaction-checkpoints.js`
- `../../gateway/session-patch-hooks.js`
- `../../gateway/session-transcript-files.fs.js`
- `../../gateway/session-transcript-readers.js`
- `../../gateway/session-utils.fs.js`
- `../../gateway/session-utils.js`
- `../../globals.js`
- `../../hooks.js`
- `../../hooks/fire-and-forget.js`
- `../../hooks/internal-hooks.js`
- `../../hooks/message-hook-mappers.js`
- `../../infra/abort-signal.js`
- `../../infra/active-node-context.js`
- `../../infra/agent-events.js`
- `../../infra/approval-errors.js`
- `../../infra/approval-gateway-resolver.js`
- `../../infra/approval-native-route-coordinator.js`
- `../../infra/archive.js`
- `../../infra/backoff.js`
- `../../infra/boundary-file-read.js`
- `../../infra/channel-approval-auth.js`
- `../../infra/channel-summary.js`
- `../../infra/clawhub.js`
- `../../infra/crypto-digest.js`
- `../../infra/dedupe.js`
- `../../infra/diagnostic-events.js`
- `../../infra/diagnostic-flags.js`
- `../../infra/diagnostic-llm-content.js`
- `../../infra/diagnostic-trace-context.js`
- `../../infra/diagnostics-timeline.js`
- `../../infra/errors.js`
- `../../infra/format-time/format-datetime.ts`
- `../../infra/format-time/format-duration.js`
- `../../infra/format-time/format-duration.ts`
- `../../infra/format-time/format-relative.ts`
- `../../infra/fs-safe.js`
- `../../infra/gateway-lock.js`
- `../../infra/gateway-suspend-coordinator.js`
- `../../infra/gemini-auth.js`
- `../../infra/google-api-base-url.js`
- `../../infra/heartbeat-events-filter.js`
- `../../infra/heartbeat-run-scope.js`
- `../../infra/heartbeat-wake.js`
- `../../infra/http-body.js`
- `../../infra/machine-name.js`
- `../../infra/net/node-proxy-agent.js`
- `../../infra/net/proxy-fetch.js`
- `../../infra/openclaw-root.js`
- `../../infra/os-summary.js`
- `../../infra/outbound/channel-target-prefix.js`
- `../../infra/outbound/channel-target.js`
- `../../infra/outbound/payloads.js`
- `../../infra/outbound/session-binding-service.js`
- `../../infra/outbound/session-context.js`
- `../../infra/parse-finite-number.js`
- `../../infra/private-file-store.js`
- `../../infra/promotions-feed.js`
- `../../infra/restart-sentinel.js`
- `../../infra/restart.js`
- `../../infra/scp-host.js`
- `../../infra/secure-random.js`
- `../../infra/session-cost-usage.js`
- `../../infra/session-maintenance-warning.js`
- `../../infra/state-migrations.onboarding-recommendations.js`
- `../../infra/system-events.js`
- `../../infra/system-message.js`
- `../../infra/system-presence.js`
- `../../infra/tcp-port.js`
- `../../infra/tls/gateway.js`
- `../../infra/tmp-openclaw-dir.js`
- `../../infra/update-startup.js`
- `../../interactive/payload.js`
- `../../internal-hooks.js`
- `../../linkbots/blueprints/business-plan-workflow.js`
- `../../llm-slug-generator.js`
- `../../llm/model-runtime-binding.js`
- `../../llm/providers/stream-wrappers/anthropic-family-cache-semantics.js`
- `../../llm/providers/stream-wrappers/google.js`
- `../../llm/providers/stream-wrappers/minimax.js`
- `../../llm/providers/stream-wrappers/moonshot.js`
- `../../llm/providers/stream-wrappers/openai.js`
- `../../llm/providers/stream-wrappers/proxy.js`
- `../../llm/providers/stream-wrappers/stream-payload-utils.js`
- `../../llm/stream.js`
- `../../llm/utils/event-stream.js`
- `../../logging/diagnostic-payload.js`
- `../../logging/diagnostic-run-activity.js`
- `../../logging/diagnostic-run-activity.test-support.js`
- `../../logging/diagnostic-runtime.js`
- `../../logging/diagnostic-session-state.js`
- `../../logging/diagnostic.js`
- `../../logging/logger.js`
- `../../logging/message-lifecycle.js`
- `../../logging/redact-identifier.js`
- `../../logging/secret-redaction-registry.js`
- `../../logging/state.js`
- `../../logging/subsystem.js`
- `../../manifest-registry.js`
- `../../manifest.js`
- `../../media-understanding/extracted-file-images.js`
- `../../media/audio-tags.js`
- `../../media/channel-inbound-roots.js`
- `../../media/configured-max-bytes.js`
- `../../media/media-reference-comparison.js`
- `../../media/media-reference.js`
- `../../media/outbound-attachment.js`
- `../../media/parse.js`
- `../../media/read-capability.js`
- `../../media/store.js`
- `../../model-catalog/manifest-planner.js`
- `../../node-host/with-timeout.js`
- `../../package.json`
- `../../packages/agent-core/src/errors.js`
- `../../packages/agent-core/src/tool-execution-context.js`
- `../../packages/ai/src/internal/retry-after.js`
- `../../packages/gateway-client/src/index.js`
- `../../packages/gateway-protocol/src/client-info.js`
- `../../packages/gateway-protocol/src/connect-error-details.js`
- `../../packages/gateway-protocol/src/index.js`
- `../../packages/gateway-protocol/src/schema/approval-id.js`
- `../../packages/gateway-protocol/src/schema/approvals.js`
- `../../packages/gateway-protocol/src/schema/snapshot.js`
- `../../packages/gateway-protocol/src/schema/terminal-constants.js`
- `../../packages/markdown-core/src/code-spans.js`
- `../../packages/markdown-core/src/fences.js`
- `../../packages/markdown-core/src/frontmatter.js`
- `../../packages/media-generation-core/src/capability-model-ref.js`
- `../../packages/media-generation-core/src/catalog.js`
- `../../packages/memory-host-sdk/src/engine-storage.js`
- `../../packages/normalization-core/src/number-coercion.js`
- `../../packages/normalization-core/src/record-coerce.js`
- `../../packages/normalization-core/src/string-coerce.js`
- `../../packages/normalization-core/src/string-normalization.js`
- `../../packages/retry/src/index.js`
- `../../packages/speech-core/voice-models.js`
- `../../packages/terminal-core/src/ansi-sequences.js`
- `../../packages/terminal-core/src/ansi.js`
- `../../packages/terminal-core/src/decorative-emoji.js`
- `../../packages/terminal-core/src/health-style.js`
- `../../packages/terminal-core/src/links.js`
- `../../packages/terminal-core/src/note.js`
- `../../packages/terminal-core/src/osc-progress.js`
- `../../packages/terminal-core/src/progress-line.js`
- `../../packages/terminal-core/src/prompt-select-styled-params.js`
- `../../packages/terminal-core/src/prompt-select-styled.js`
- `../../packages/terminal-core/src/prompt-style.js`
- `../../packages/terminal-core/src/restore.js`
- `../../packages/terminal-core/src/safe-text.js`
- `../../packages/terminal-core/src/stream-writer.js`
- `../../packages/terminal-core/src/table.js`
- `../../packages/terminal-core/src/terminal-link.js`
- `../../packages/terminal-core/src/theme.js`
- `../../packages/web-content-core/src/provider-runtime-shared.js`
- `../../pairing/pairing-store.js`
- `../../plugin-sdk/account-resolution.js`
- `../../plugin-sdk/allow-from.js`
- `../../plugin-sdk/allowlist-config-edit.js`
- `../../plugin-sdk/approval-approvers.js`
- `../../plugin-sdk/approval-runtime.js`
- `../../plugin-sdk/channel-config-helpers.js`
- `../../plugin-sdk/channel-route.js`
- `../../plugin-sdk/gateway-method-runtime.js`
- `../../plugin-sdk/message-tool-delivery-hints.js`
- `../../plugin-sdk/provider-auth-login-flow-runtime.js`
- `../../plugin-sdk/provider-stream-shared.js`
- `../../plugin-state/plugin-state-store.js`
- `../../plugins/before-agent-reply.js`
- `../../plugins/bundled-install.js`
- `../../plugins/bundled-package-channel-metadata.js`
- `../../plugins/bundled-sources.js`
- `../../plugins/clawhub-install-records.js`
- `../../plugins/clawhub.js`
- `../../plugins/cli-backends.runtime.js`
- `../../plugins/command-registry-state.js`
- `../../plugins/commands.js`
- `../../plugins/config-state.js`
- `../../plugins/conversation-binding.js`
- `../../plugins/current-plugin-metadata-snapshot.js`
- `../../plugins/enable.js`
- `../../plugins/git-install.js`
- `../../plugins/hook-agent-context.js`
- `../../plugins/hook-runner-global.js`
- `../../plugins/http-registry.js`
- `../../plugins/install-persistence.js`
- `../../plugins/install-provenance.js`
- `../../plugins/install.js`
- `../../plugins/installed-plugin-index-records.js`
- `../../plugins/manifest-contract-eligibility.js`
- `../../plugins/manifest-metadata-scan.js`
- `../../plugins/manifest-owner-policy.js`
- `../../plugins/manifest-registry.js`
- `../../plugins/manifest.js`
- `../../plugins/memory-runtime.js`
- `../../plugins/memory-state.js`
- `../../plugins/memory-state.test-fixtures.js`
- `../../plugins/official-external-install-trust.js`
- `../../plugins/provider-auth-choice.js`
- `../../plugins/provider-auth-choices.js`
- `../../plugins/provider-discovery.js`
- `../../plugins/provider-hook-runtime.js`
- `../../plugins/provider-install-catalog.js`
- `../../plugins/provider-model-compat.js`
- `../../plugins/provider-runtime.js`
- `../../plugins/providers.js`
- `../../plugins/registry-empty.js`
- `../../plugins/registry-refresh.js`
- `../../plugins/registry.js`
- `../../plugins/runtime.js`
- `../../plugins/runtime/gateway-request-scope.js`
- `../../plugins/status.js`
- `../../plugins/status.test-fixtures.js`
- `../../plugins/toggle-config.js`
- `../../plugins/tools.js`
- `../../process/command-queue.js`
- `../../process/command-queue.test-support.js`
- `../../process/exec.js`
- `../../process/gateway-work-admission.js`
- `../../process/lanes.js`
- `../../routing/account-id.js`
- `../../routing/account-lookup.js`
- `../../routing/conversation-ref.js`
- `../../routing/session-key.js`
- `../../runtime.js`
- `../../scripts/build-stamp.mjs`
- `../../scripts/copy-bundled-plugin-metadata.mjs`
- `../../scripts/gateway-watch-tmux.mjs`
- `../../scripts/lib/bundled-runtime-sidecar-paths.json`
- `../../scripts/lib/local-build-metadata-paths.mjs`
- `../../scripts/lib/official-external-channel-catalog.json`
- `../../scripts/lib/official-external-plugin-catalog.json`
- `../../scripts/lib/official-external-provider-catalog.json`
- `../../scripts/lib/package-dist-inventory.ts`
- `../../scripts/lib/recommended-tool-installs.json`
- `../../scripts/load-channel-config-surface.ts`
- `../../scripts/prune-docker-plugin-dist.mjs`
- `../../scripts/run-node.mjs`
- `../../scripts/stage-bundled-plugin-runtime.mjs`
- `../../scripts/watch-node.mjs`
- `../../sdk-alias.js`
- `../../secrets/sentinel.js`
- `../../security/config-regex.js`
- `../../security/external-content.js`
- `../../security/secret-equal.js`
- `../../security/secret-mask.js`
- `../../sessions/agent-harness-session-key.js`
- `../../sessions/conversation-turns.js`
- `../../sessions/input-provenance.js`
- `../../sessions/level-overrides.js`
- `../../sessions/model-overrides.js`
- `../../sessions/send-policy.js`
- `../../sessions/session-chat-type-shared.js`
- `../../sessions/session-key-utils.js`
- `../../sessions/session-label.js`
- `../../sessions/session-lifecycle-admission.js`
- `../../sessions/session-state-events.js`
- `../../sessions/session-state-notices.js`
- `../../sessions/transcript-events.js`
- `../../sessions/user-turn-media.js`
- `../../sessions/user-turn-transcript.js`
- `../../sessions/user-turn-transcript.test-support.js`
- `../../shared/assistant-error-format.js`
- `../../shared/chat-content.js`
- `../../shared/chat-envelope.js`
- `../../shared/deferred.js`
- `../../shared/global-singleton.js`
- `../../shared/html-entities.js`
- `../../shared/lazy-promise.js`
- `../../shared/lazy-runtime.js`
- `../../shared/message-content-blocks.js`
- `../../shared/number-coercion.js`
- `../../shared/silent-reply-policy.js`
- `../../shared/string-sample.js`
- `../../shared/text/assistant-visible-text.js`
- `../../shared/transcript-only-openclaw-assistant.js`
- `../../skills/discovery/chat-commands.js`
- `../../skills/loading/skill-contract.js`
- `../../skills/loading/workspace.js`
- `../../skills/runtime/embedded-run-entries.js`
- `../../skills/runtime/env-overrides.js`
- `../../skills/runtime/remote.js`
- `../../skills/runtime/session-snapshot.js`
- `../../skills/workshop/config.js`
- `../../skills/workshop/learn-prompt.js`
- `../../skills/workshop/tool-policy-diagnostic.js`
- `../../state/openclaw-agent-db.js`
- `../../status/agent-runtime-label.js`
- `../../status/status-plugin-health.js`
- `../../status/status-text.js`
- `../../tasks/detached-task-runtime.js`
- `../../tasks/task-executor.js`
- `../../tasks/task-flow-registry.js`
- `../../tasks/task-owner-access.js`
- `../../tasks/task-registry.js`
- `../../tasks/task-registry.store.js`
- `../../tasks/task-runtime.test-helpers.js`
- `../../tasks/task-status-access.js`
- `../../tasks/task-status.js`
- `../../test-helpers/state-dir-env.js`
- `../../test-helpers/temp-dir.js`
- `../../test-helpers/workspace.js`
- `../../test-runtime-capture.js`
- `../../test-utils/channel-plugins.js`
- `../../test-utils/env.js`
- `../../test-utils/fetch-mock.js`
- `../../test-utils/internal-hook-event-payload.js`
- `../../test-utils/mock-call-assertions.js`
- `../../test-utils/repo-files.js`
- `../../test-utils/session-conversation-registry.js`
- `../../test-utils/session-write-lock-module-mock.js`
- `../../test-utils/tracked-temp-dirs.js`
- `../../test/helpers/agents/prompt-composition-scenarios.js`
- `../../test/helpers/agents/transport-params-runtime-contract.js`
- `../../test/helpers/auto-reply/trigger-handling-test-harness.js`
- `../../test/helpers/browser-bundled-plugin-fixture.js`
- `../../test/helpers/bundled-runtime-sidecars.js`
- `../../test/helpers/config/config-honor-audit.js`
- `../../test/helpers/config/heartbeat-config-honor.inventory.js`
- `../../test/helpers/config/redact-snapshot-test-hints.js`
- `../../test/helpers/image-fixtures.js`
- `../../test/helpers/infra/delivery-recovery.js`
- `../../test/helpers/infra/heartbeat-runner-channel-plugins.js`
- `../../test/helpers/normalize-text.js`
- `../../test/helpers/paci-fake/keys.js`
- `../../test/helpers/paci-fake/server.js`
- `../../test/helpers/paths.js`
- `../../test/helpers/promise.js`
- `../../test/helpers/temp-dir.js`
- `../../test/helpers/temp-repo.js`
- `../../test/helpers/vitest-config-paths.js`
- `../../test/helpers/wizard-prompter.js`
- `../../test/vitest/vitest.bundled-plugin-paths.ts`
- `../../test/vitest/vitest.e2e.config.ts`
- `../../test/vitest/vitest.live.config.ts`
- `../../test/vitest/vitest.system-load.ts`
- `../../tsdown.config.ts`
- `../../tts/directives.js`
- `../../tts/provider-registry.js`
- `../../tts/status-config.js`
- `../../tts/tts-config.js`
- `../../tts/tts.js`
- `../../utils.js`
- `../../utils/cjk-chars.js`
- `../../utils/delivery-context.js`
- `../../utils/delivery-context.shared.js`
- `../../utils/directive-tags.js`
- `../../utils/message-channel.js`
- `../../utils/normalize-secret-input.js`
- `../../utils/provider-utils.js`
- `../../utils/string-readers.js`
- `../../utils/usage-format.js`
- `../../utils/utf8-truncate.js`
- `../../wizard/clack-prompter.js`
- `../accepted-session-spawn.js`
- `../account-snapshot-fields.js`
- `../acp/control-plane/manager.js`
- `../acp/control-plane/spawn.js`
- `../acp/event-ledger.js`
- `../acp/policy.js`
- `../acp/runtime/availability.js`
- `../acp/runtime/errors.js`
- `../acp/runtime/session-meta.js`
- `../acp/secret-file.js`
- `../acp/types.js`
- `../agent-bundle-lsp-runtime.js`
- `../agent-bundle-mcp-tools.js`
- `../agent-hooks/compaction-safeguard-runtime.js`
- `../agent-hooks/compaction-safeguard.js`
- `../agent-hooks/context-pruning.js`
- `../agent-hooks/context-pruning/runtime.js`
- `../agent-hooks/context-pruning/settings.js`
- `../agent-hooks/context-pruning/tools.js`
- `../agent-hooks/session-manager-runtime-registry.js`
- `../agent-model-discovery.js`
- `../agent-project-settings.js`
- `../agent-runtime-id.js`
- `../agent-scope.js`
- `../agent-settings.js`
- `../agent-tool-definition-adapter.js`
- `../agent-tools.before-tool-call.js`
- `../agent-tools.js`
- `../agents/agent-bundle-mcp-materialize.js`
- `../agents/agent-bundle-mcp-runtime.js`
- `../agents/agent-create.js`
- `../agents/agent-delete-safety.js`
- `../agents/agent-runtime-config.js`
- `../agents/agent-runtime-id.js`
- `../agents/agent-runtime-metadata.js`
- `../agents/agent-scope-config.js`
- `../agents/agent-scope.js`
- `../agents/agent-tool-handler-state.test-helpers.js`
- `../agents/agent-tools.policy.js`
- `../agents/apply-patch-paths.js`
- `../agents/auth-health.js`
- `../agents/auth-profiles.js`
- `../agents/auth-profiles/constants.js`
- `../agents/auth-profiles/credential-state.js`
- `../agents/auth-profiles/doctor.js`
- `../agents/auth-profiles/identity.js`
- `../agents/auth-profiles/oauth-refresh-failure.js`
- `../agents/auth-profiles/oauth-test-utils.js`
- `../agents/auth-profiles/order.js`
- `../agents/auth-profiles/path-resolve.js`
- `../agents/auth-profiles/paths.js`
- `../agents/auth-profiles/persisted.js`
- `../agents/auth-profiles/profiles.js`
- `../agents/auth-profiles/repair.js`
- `../agents/auth-profiles/runtime-snapshots.js`
- `../agents/auth-profiles/state.js`
- `../agents/auth-profiles/store.js`
- `../agents/auth-profiles/upsert-with-lock.js`
- `../agents/bash-process-registry.js`
- `../agents/bash-process-registry.test-helpers.js`
- `../agents/bash-process-registry.test-support.js`
- `../agents/bootstrap-budget.js`
- `../agents/bootstrap-files.js`
- `../agents/bootstrap-hooks.js`
- `../agents/chutes-oauth.js`
- `../agents/cli-backends.test-support.js`
- `../agents/cli-credentials.js`
- `../agents/code-mode-namespaces.js`
- `../agents/codex-native-web-search.shared.js`
- `../agents/command/claude-cli-project-dir.js`
- `../agents/command/delivery.js`
- `../agents/command/delivery.runtime.js`
- `../agents/command/session-store.js`
- `../agents/command/session.js`
- `../agents/configured-provider-fallback.js`
- `../agents/context-cache.js`
- `../agents/context-resolution.js`
- `../agents/context-window-guard.js`
- `../agents/context.js`
- `../agents/copilot-routing.js`
- `../agents/current-time.js`
- `../agents/date-time.js`
- `../agents/defaults.js`
- `../agents/embedded-agent-helpers.js`
- `../agents/embedded-agent-runner/lanes.js`
- `../agents/embedded-agent-runner/run-state.js`
- `../agents/embedded-agent-subscribe.handlers.compaction.js`
- `../agents/embedded-agent-utils.js`
- `../agents/embedded-agent.js`
- `../agents/failover-error.js`
- `../agents/glob-pattern.js`
- `../agents/gpt5-prompt-overlay.js`
- `../agents/harness-runtimes.js`
- `../agents/harness/native-hook-relay.js`
- `../agents/harness/policy.js`
- `../agents/harness/registry.js`
- `../agents/harness/selection.js`
- `../agents/identity-avatar-file.js`
- `../agents/identity-file.js`
- `../agents/identity.js`
- `../agents/internal-runtime-context.js`
- `../agents/lanes.js`
- `../agents/machine-token-fingerprint.js`
- `../agents/machine-token-host.js`
- `../agents/main-session-recovery-lifecycle.js`
- `../agents/main-session-recovery-state.js`
- `../agents/mcp-http-fetch.js`
- `../agents/mcp-oauth-provider.js`
- `../agents/mcp-oauth-store.js`
- `../agents/mcp-oauth.js`
- `../agents/mcp-tool-filter-resolver.js`
- `../agents/mcp-transport-config.js`
- `../agents/memory-search.js`
- `../agents/model-auth-availability.js`
- `../agents/model-auth-env.js`
- `../agents/model-auth-label.js`
- `../agents/model-auth-markers.js`
- `../agents/model-auth.js`
- `../agents/model-catalog-scope.js`
- `../agents/model-catalog.js`
- `../agents/model-ref-profile.js`
- `../agents/model-ref-shared.js`
- `../agents/model-runtime-aliases.js`
- `../agents/model-runtime-policy.js`
- `../agents/model-selection-config.js`
- `../agents/model-selection-shared.js`
- `../agents/model-selection.js`
- `../agents/model-visibility-policy.js`
- `../agents/openai-completions-compat.js`
- `../agents/openai-routing.js`
- `../agents/openai-strict-tool-setting.js`
- `../agents/owner-display.js`
- `../agents/path-policy.js`
- `../agents/plugin-text-transforms.js`
- `../agents/prepared-model-catalog.js`
- `../agents/prepared-model-runtime.js`
- `../agents/profile-manifest.js`
- `../agents/provider-auth-aliases.js`
- `../agents/provider-auth-recovery-hint.js`
- `../agents/provider-http-errors.js`
- `../agents/provider-model-route.js`
- `../agents/provider-request-config.js`
- `../agents/provider-secret-egress.js`
- `../agents/provider-transport-fetch.js`
- `../agents/run-termination.js`
- `../agents/sandbox.js`
- `../agents/sandbox/backend.js`
- `../agents/sandbox/bind-spec.js`
- `../agents/sandbox/config.js`
- `../agents/sandbox/fs-paths.js`
- `../agents/sandbox/host-paths.js`
- `../agents/sandbox/network-mode.js`
- `../agents/sandbox/registry.js`
- `../agents/sandbox/runtime-status.js`
- `../agents/sandbox/shared.js`
- `../agents/sandbox/tool-policy.js`
- `../agents/self-hosted-provider-defaults.js`
- `../agents/session-agent-binding.js`
- `../agents/session-dirs.js`
- `../agents/session-write-lock.js`
- `../agents/sessions/session-manager.js`
- `../agents/spawned-context.js`
- `../agents/stream-message-shared.js`
- `../agents/subagent-recovery-state.js`
- `../agents/thinking-runtime.js`
- `../agents/tool-description-summary.js`
- `../agents/tool-display-config.js`
- `../agents/tool-display.js`
- `../agents/tool-fs-policy.js`
- `../agents/tool-policy-match.js`
- `../agents/tool-policy-shared.js`
- `../agents/tool-policy.js`
- `../agents/tools/model-config.helpers.js`
- `../agents/tools/web-search-provider-config.js`
- `../agents/usage.js`
- `../agents/workspace-default.js`
- `../agents/workspace-dir.js`
- `../agents/workspace-dirs.js`
- `../agents/workspace-legacy-state.js`
- `../agents/workspace-state-store.js`
- `../agents/workspace-templates.js`
- `../agents/workspace.js`
- `../agents/worktrees/owner-protection.js`
- `../agents/worktrees/registry.js`
- `../agents/worktrees/service.js`
- `../anthropic-vertex-stream.js`
- `../auth-profiles.js`
- `../auth-rate-limit.js`
- `../auth.js`
- `../auto-reply/chunk.js`
- `../auto-reply/command-detection.js`
- `../auto-reply/envelope.js`
- `../auto-reply/heartbeat-filter.js`
- `../auto-reply/heartbeat-reply-payload.js`
- `../auto-reply/heartbeat-tool-response.js`
- `../auto-reply/heartbeat.js`
- `../auto-reply/inbound-debounce.js`
- `../auto-reply/reply-payload.js`
- `../auto-reply/reply/acp-stream-settings.js`
- `../auto-reply/reply/agent-runner-failure-copy.js`
- `../auto-reply/reply/completion-delivery-policy.js`
- `../auto-reply/reply/config-value.js`
- `../auto-reply/reply/directive-handling.defaults.js`
- `../auto-reply/reply/dispatcher-registry.js`
- `../auto-reply/reply/memory-flush.js`
- `../auto-reply/reply/pending-final-delivery.js`
- `../auto-reply/reply/queue/cleanup.test-support.js`
- `../auto-reply/reply/reply-directives.js`
- `../auto-reply/reply/reply-operation-run-state.js`
- `../auto-reply/reply/reply-payloads-dedupe.js`
- `../auto-reply/reply/reply-run-registry.js`
- `../auto-reply/reply/reply-run-registry.test-support.js`
- `../auto-reply/reply/response-prefix-template.js`
- `../auto-reply/reply/runtime-policy-session-key.js`
- `../auto-reply/reply/session-system-events.js`
- `../auto-reply/reply/streaming-directives.js`
- `../auto-reply/reply/strip-inbound-meta.js`
- `../auto-reply/reply/subagents-utils.js`
- `../auto-reply/reply/test-ctx.js`
- `../auto-reply/thinking.js`
- `../auto-reply/thinking.shared.js`
- `../auto-reply/tokens.js`
- `../auto-reply/tool-meta.js`
- `../bash-process-references.js`
- `../bash-process-registry.js`
- `../bash-process-registry.test-helpers.js`
- `../bash-process-registry.test-support.js`
- `../bindings/records.js`
- `../bootstrap-files.js`
- `../canvas/config.js`
- `../canvas/documents.js`
- `../canvas/widget-tool.js`
- `../channel-health-policy.js`
- `../channel-tools.js`
- `../channels/account-inspection.js`
- `../channels/account-snapshot-fields.js`
- `../channels/account-summary.js`
- `../channels/chat-meta.js`
- `../channels/chat-type.js`
- `../channels/config-presence.js`
- `../channels/conversation-binding-context.js`
- `../channels/conversation-resolution.js`
- `../channels/ids.js`
- `../channels/message-access/dm-allow-state.js`
- `../channels/message/ingress-drain.js`
- `../channels/message/ingress-queue.js`
- `../channels/message/runtime.js`
- `../channels/plugins/approvals.js`
- `../channels/plugins/bootstrap-registry.js`
- `../channels/plugins/bundled.js`
- `../channels/plugins/config-schema.js`
- `../channels/plugins/configured-state.js`
- `../channels/plugins/conversation-read-origin.js`
- `../channels/plugins/dm-access.js`
- `../channels/plugins/exposure.js`
- `../channels/plugins/helpers.js`
- `../channels/plugins/index.js`
- `../channels/plugins/message-action-discovery.js`
- `../channels/plugins/message-action-names.js`
- `../channels/plugins/meta-normalization.js`
- `../channels/plugins/native-approval-prompt.js`
- `../channels/plugins/outbound/load.js`
- `../channels/plugins/pairing.js`
- `../channels/plugins/persisted-auth-state.js`
- `../channels/plugins/read-only-command-defaults.js`
- `../channels/plugins/read-only.js`
- `../channels/plugins/registry-loaded.js`
- `../channels/plugins/registry.js`
- `../channels/plugins/session-conversation.js`
- `../channels/plugins/setup-helpers.js`
- `../channels/plugins/setup-registry.js`
- `../channels/plugins/status-state.js`
- `../channels/plugins/status.js`
- `../channels/plugins/types.public.js`
- `../channels/read-only-account-inspect.js`
- `../channels/registry.js`
- `../channels/reply-prefix.js`
- `../channels/route-projection.js`
- `../channels/sender-label.js`
- `../channels/streaming.js`
- `../channels/thread-bindings-messages.js`
- `../channels/thread-bindings-policy.js`
- `../channels/typing.js`
- `../chunk.js`
- `../cli-runner/tool-policy.js`
- `../cli/claw-banner.js`
- `../cli/cli-name.js`
- `../cli/command-config-resolution.js`
- `../cli/command-format.js`
- `../cli/command-secret-targets.js`
- `../cli/completion-runtime.js`
- `../cli/config-recovery-hints.js`
- `../cli/daemon-cli/probe.js`
- `../cli/dotenv.js`
- `../cli/error-format.js`
- `../cli/gateway-cli/call.js`
- `../cli/gateway-port-option.js`
- `../cli/message-secret-scope.js`
- `../cli/one-shot-exit.js`
- `../cli/outbound-send-deps.js`
- `../cli/parse-bytes.js`
- `../cli/parse-duration.js`
- `../cli/plugin-install-plan.js`
- `../cli/plugins-cli-test-helpers.js`
- `../cli/profile.js`
- `../cli/program/command-descriptor-utils.js`
- `../cli/program/helpers.js`
- `../cli/program/register-command-groups.js`
- `../cli/progress.js`
- `../cli/prompt.js`
- `../cli/quote-cli-arg.js`
- `../cli/requirements-test-fixtures.js`
- `../cli/shared/parse-port.js`
- `../cli/update-cli/progress.js`
- `../codex-runtime-plugin-install.js`
- `../command-auth.js`
- `../command-detection.js`
- `../command-turn-context.js`
- `../command-turn-detection.js`
- `../commands-registry-list.js`
- `../commands-registry-normalize.js`
- `../commands-registry.js`
- `../commands-registry.shared.js`
- `../commands-text-routing.js`
- `../commands/agents.bindings.js`
- `../commands/agents.config.js`
- `../commands/auth-choice-legacy.js`
- `../commands/auth-token.js`
- `../commands/backup-shared.js`
- `../commands/backup-verify.js`
- `../commands/channel-setup/channel-plugin-resolution.js`
- `../commands/channel-setup/plugin-install.js`
- `../commands/channel-setup/registry.js`
- `../commands/cleanup-utils.js`
- `../commands/daemon-install-helpers.js`
- `../commands/daemon-runtime.js`
- `../commands/docs.js`
- `../commands/doctor-command-owner.js`
- `../commands/doctor-completion.js`
- `../commands/doctor/shared/configured-runtime-plugin-installs.js`
- `../commands/doctor/shared/legacy-config-core-migrate.js`
- `../commands/doctor/shared/legacy-config-migrations.js`
- `../commands/doctor/shared/legacy-talk-config-normalizer.js`
- `../commands/gateway-install-token.js`
- `../commands/health-format.js`
- `../commands/health.js`
- `../commands/migrate/context.js`
- `../commands/migrate/memory-import.js`
- `../commands/onboard-helpers.js`
- `../commands/onboard-recommendations.js`
- `../commands/onboarding-plugin-install.js`
- `../commands/sandbox-explain.js`
- `../commands/sandbox.js`
- `../commitments/store-record.js`
- `../commitments/store.js`
- `../commitments/store.test-utils.js`
- `../compaction-real-conversation.js`
- `../compaction-usage.js`
- `../compat/legacy-names.js`
- `../config/agent-limits.js`
- `../config/allowed-values.js`
- `../config/bindings.js`
- `../config/bundled-channel-config-metadata.generated.js`
- `../config/channel-capabilities.js`
- `../config/channel-compat-normalization.js`
- `../config/channel-config-metadata.js`
- `../config/channel-configured.js`
- `../config/commands.flags.js`
- `../config/config-paths.js`
- `../config/config.js`
- `../config/cron-limits.js`
- `../config/env-substitution.js`
- `../config/env-vars.js`
- `../config/exec-command-highlighting.js`
- `../config/gateway-control-ui-origins.js`
- `../config/gateway-dispatch-config.js`
- `../config/group-policy.js`
- `../config/home-env.test-harness.js`
- `../config/includes.js`
- `../config/io.audit.js`
- `../config/io.audit.test-support.js`
- `../config/io.invalid-config.js`
- `../config/io.js`
- `../config/io.meta.js`
- `../config/io.write-prepare.js`
- `../config/issue-format.js`
- `../config/issue-location.js`
- `../config/legacy.js`
- `../config/logging.js`
- `../config/mcp-config-normalize.js`
- `../config/mcp-config.js`
- `../config/merge-patch.js`
- `../config/model-input.js`
- `../config/model-policy-allowlist-migration.js`
- `../config/model-policy-ref.js`
- `../config/model-provider-config.js`
- `../config/mutate.js`
- `../config/nix-mode-write-guard.js`
- `../config/paths.js`
- `../config/plugin-auto-enable.js`
- `../config/plugin-auto-enable.test-helpers.js`
- `../config/plugins-allowlist.js`
- `../config/provider-policy.js`
- `../config/recovery-policy.js`
- `../config/redact-snapshot.js`
- `../config/runtime-schema.js`
- `../config/runtime-snapshot.js`
- `../config/runtime-source-projection.js`
- `../config/sessions.js`
- `../config/sessions/archive-compression.js`
- `../config/sessions/artifacts.js`
- `../config/sessions/cli-session-binding.js`
- `../config/sessions/delivery-info.js`
- `../config/sessions/internal-session-key.js`
- `../config/sessions/lifecycle.js`
- `../config/sessions/main-session.js`
- `../config/sessions/model-override-provenance.js`
- `../config/sessions/paths.js`
- `../config/sessions/restart-recovery-state.js`
- `../config/sessions/session-accessor.js`
- `../config/sessions/session-accessor.sqlite.js`
- `../config/sessions/session-key.js`
- `../config/sessions/session-model-fallback.js`
- `../config/sessions/session-sqlite-target.js`
- `../config/sessions/skill-prompt-blobs.js`
- `../config/sessions/sqlite-marker.js`
- `../config/sessions/store-entry-shape.js`
- `../config/sessions/store-entry.js`
- `../config/sessions/store-load.js`
- `../config/sessions/store-maintenance-preserve.js`
- `../config/sessions/store.js`
- `../config/sessions/targets.js`
- `../config/sessions/thread-info.js`
- `../config/sessions/transcript-header.js`
- `../config/sessions/transcript-tree.js`
- `../config/sessions/transcript-visible-events.js`
- `../config/sessions/transcript.js`
- `../config/sessions/types.js`
- `../config/sessions/version.js`
- `../config/state-dir-dotenv.js`
- `../config/test-helpers.js`
- `../config/types.models.js`
- `../config/types.secrets.js`
- `../config/validation.js`
- `../config/version.js`
- `../config/zod-schema.core.js`
- `../config/zod-schema.js`
- `../config/zod-schema.root-support.js`
- `../context-engine/host-compat.js`
- `../context-engine/registry.js`
- `../context-window-guard.js`
- `../control-ui-plugin-auth-cookie.js`
- `../conversation-capability-profile.js`
- `../copilot-dynamic-headers.js`
- `../copilot-runtime-plugin-install.js`
- `../cron/active-jobs.js`
- `../cron/isolated-agent/session-key.js`
- `../cron/isolated-agent/session.js`
- `../cron/parse.js`
- `../cron/service/active-run-cancellation.js`
- `../cron/service/execution-errors.js`
- `../cron/service/task-runs.js`
- `../cron/store.js`
- `../cron/store/key.js`
- `../cron/task-run-detail.js`
- `../cron/task-run-history.js`
- `../daemon/cmd-argv.js`
- `../daemon/constants.js`
- `../daemon/container-context.js`
- `../daemon/diagnostics.js`
- `../daemon/gateway-entrypoint.js`
- `../daemon/gateway-heap.js`
- `../daemon/inspect.js`
- `../daemon/launchd.js`
- `../daemon/node-service.js`
- `../daemon/paths.js`
- `../daemon/program-args.js`
- `../daemon/restart-logs.js`
- `../daemon/runtime-binary.js`
- `../daemon/runtime-format.js`
- `../daemon/runtime-hints.js`
- `../daemon/runtime-paths.js`
- `../daemon/schtasks.js`
- `../daemon/service-audit.js`
- `../daemon/service-env-plan.js`
- `../daemon/service-env-render-policy.js`
- `../daemon/service-env.js`
- `../daemon/service-layout.js`
- `../daemon/service-managed-env.js`
- `../daemon/service-path-policy.js`
- `../daemon/service-runtime.js`
- `../daemon/service.js`
- `../daemon/service.test-helpers.js`
- `../daemon/systemd-hints.js`
- `../daemon/systemd-unavailable.js`
- `../daemon/systemd.js`
- `../dashboard.js`
- `../date-time.js`
- `../defaults.js`
- `../directive-parsing.js`
- `../dispatch-dispatcher.js`
- `../dispatch.js`
- `../docs-path.js`
- `../doctor-auth-flat-profiles.js`
- `../doctor-auth-oauth-sidecar.js`
- `../doctor-plugin-registry.js`
- `../embedded-agent-helpers.js`
- `../embedded-agent-helpers/errors.js`
- `../envelope.js`
- `../exec-approval-manager.js`
- `../exec-defaults.js`
- `../execution-contract.js`
- `../failover-error.js`
- `../fallback-state.js`
- `../fleet-cli.js`
- `../flows/bundled-health-checks.js`
- `../flows/doctor-core-checks.js`
- `../flows/doctor-health-contributions.js`
- `../flows/doctor-lint-flow.js`
- `../flows/health-check-registry.js`
- `../flows/health-checks.js`
- `../flows/provider-flow.js`
- `../flows/provider-flow.runtime.js`
- `../fs-safe.js`
- `../gateway/agent-list.js`
- `../gateway/auth-install-policy.js`
- `../gateway/auth-mode-policy.js`
- `../gateway/auth-resolve.js`
- `../gateway/auth-token-resolution.js`
- `../gateway/auth-token-source-conflict.js`
- `../gateway/auth.js`
- `../gateway/call.js`
- `../gateway/channel-health-policy.js`
- `../gateway/client-start-readiness.js`
- `../gateway/client.js`
- `../gateway/config-diff.js`
- `../gateway/config-reload-plan.js`
- `../gateway/config-reload-settings.js`
- `../gateway/config-reload.js`
- `../gateway/connection-details.js`
- `../gateway/control-ui-links.js`
- `../gateway/control-ui-shared.js`
- `../gateway/credentials-secret-inputs.js`
- `../gateway/credentials.js`
- `../gateway/explicit-connection-policy.js`
- `../gateway/gateway-config-prompts.shared.js`
- `../gateway/local-request-context.js`
- `../gateway/managed-image-record-store.js`
- `../gateway/mcp-http.loopback-runtime.js`
- `../gateway/message-action-turn-capability.js`
- `../gateway/method-scopes.js`
- `../gateway/methods/registry.js`
- `../gateway/minimal-gateway.test-helpers.js`
- `../gateway/model-pricing-cache-state.js`
- `../gateway/model-pricing-config.js`
- `../gateway/net.js`
- `../gateway/node-agent-cli-runtime.js`
- `../gateway/node-command-policy.js`
- `../gateway/node-plugin-tool-snapshot.js`
- `../gateway/operator-approvals-client.js`
- `../gateway/operator-scopes.js`
- `../gateway/probe-auth.js`
- `../gateway/probe-target.js`
- `../gateway/probe.js`
- `../gateway/resolve-configured-secret-input-string.js`
- `../gateway/secret-input-paths.js`
- `../gateway/security-path.js`
- `../gateway/server-methods/agent-request-preflight.js`
- `../gateway/server-methods/usage.js`
- `../gateway/server-plugin-runtime-client.js`
- `../gateway/server-plugins.js`
- `../gateway/server-recovery-runtime-context.js`
- `../gateway/server.js`
- `../gateway/session-store-key.js`
- `../gateway/session-transcript-readers.js`
- `../gateway/session-utils.js`
- `../gateway/test-helpers.agent-results.js`
- `../gateway/test-helpers.e2e.js`
- `../global-state.js`
- `../globals.js`
- `../gpt5-prompt-overlay.js`
- `../group-activation.js`
- `../handshake-timeouts.js`
- `../harness/compaction-recovery.js`
- `../harness/compaction.js`
- `../harness/policy.js`
- `../harness/registry.js`
- `../harness/runtime-plugin.js`
- `../harness/selection.js`
- `../harness/support.js`
- `../harness/tool-result-middleware.js`
- `../heartbeat-system-prompt.js`
- `../heartbeat.js`
- `../hooks-mapping.js`
- `../hooks.js`
- `../hooks/fire-and-forget.js`
- `../hooks/gmail-ops.js`
- `../hooks/gmail.js`
- `../hooks/hooks-status.js`
- `../hooks/install.js`
- `../hooks/installs.js`
- `../hooks/internal-hooks.js`
- `../hooks/message-hook-mappers.js`
- `../hooks/policy.js`
- `../hooks/update.js`
- `../hooks/workspace.js`
- `../hosted-plugin-surface-url.js`
- `../http-auth-utils.js`
- `../http-common.js`
- `../image-sanitization.js`
- `../infra/abort-signal.js`
- `../infra/active-node-context.js`
- `../infra/agent-events.js`
- `../infra/approval-errors.js`
- `../infra/archive-path.js`
- `../infra/archive.js`
- `../infra/backoff.js`
- `../infra/backup-create.js`
- `../infra/bonjour-discovery.js`
- `../infra/boundary-file-read.js`
- `../infra/boundary-path.js`
- `../infra/brew.js`
- `../infra/browser-open.js`
- `../infra/channels-status-issues.js`
- `../infra/clawhub-install-trust.js`
- `../infra/clawhub-spec.js`
- `../infra/clawhub.js`
- `../infra/cli-root-options.js`
- `../infra/clipboard.js`
- `../infra/command-analysis/inline-eval.js`
- `../infra/command-analysis/policy.js`
- `../infra/command-explainer/index.js`
- `../infra/container-environment.js`
- `../infra/control-ui-assets.js`
- `../infra/crypto-digest.js`
- `../infra/dedupe.js`
- `../infra/deep-merge.js`
- `../infra/delivery-queue-sqlite.js`
- `../infra/detect-binary.js`
- `../infra/device-auth-store.js`
- `../infra/device-identity.js`
- `../infra/device-pairing.js`
- `../infra/diagnostic-error-metadata.js`
- `../infra/diagnostic-event-listener-presence.js`
- `../infra/diagnostic-events.js`
- `../infra/diagnostic-flags.js`
- `../infra/diagnostic-llm-content.js`
- `../infra/diagnostic-trace-context.js`
- `../infra/diagnostics-timeline.js`
- `../infra/disk-space.js`
- `../infra/dotenv-global.js`
- `../infra/dotenv.js`
- `../infra/ed25519-signature.js`
- `../infra/embedded-mode.js`
- `../infra/embedded-plugin-approval-broker.js`
- `../infra/env.js`
- `../infra/errors.js`
- `../infra/event-session-routing.js`
- `../infra/exec-approval-command-display.js`
- `../infra/exec-approval-reply.js`
- `../infra/exec-approval-surface.js`
- `../infra/exec-approvals-denylist.js`
- `../infra/exec-approvals-effective.js`
- `../infra/exec-approvals.js`
- `../infra/exec-authorization-plan.js`
- `../infra/exec-authorization-render.js`
- `../infra/exec-auto-review.js`
- `../infra/exec-command-resolution.js`
- `../infra/exec-control-command-guard.js`
- `../infra/exec-policy.js`
- `../infra/exec-safe-bin-policy.js`
- `../infra/exec-safe-bin-runtime-policy.js`
- `../infra/exec-safe-bin-trust.js`
- `../infra/exec-safety.js`
- `../infra/exec-wrapper-tokens.js`
- `../infra/executable-path.js`
- `../infra/file-lock-manager.js`
- `../infra/file-lock.js`
- `../infra/file-read.js`
- `../infra/file-store.js`
- `../infra/format-time/format-datetime.ts`
- `../infra/format-time/format-duration.js`
- `../infra/format-time/format-duration.ts`
- `../infra/format-time/format-relative.ts`
- `../infra/fs-safe-advanced.js`
- `../infra/fs-safe-defaults.js`
- `../infra/fs-safe.js`
- `../infra/gateway-discovery-targets.js`
- `../infra/gateway-lock.js`
- `../infra/gateway-processes.js`
- `../infra/git-commit.js`
- `../infra/git-root.js`
- `../infra/heartbeat-summary.js`
- `../infra/heartbeat-wake.js`
- `../infra/home-dir.js`
- `../infra/host-env-security.js`
- `../infra/http-body.js`
- `../infra/http-error-body.js`
- `../infra/inline-option-token.js`
- `../infra/install-flow.js`
- `../infra/install-mode-options.js`
- `../infra/install-package-dir.js`
- `../infra/install-safe-path.js`
- `../infra/install-source-utils.js`
- `../infra/install-target.js`
- `../infra/installed-apps.js`
- `../infra/json-file.js`
- `../infra/json-files.js`
- `../infra/json-utf8-bytes.js`
- `../infra/kysely-sync.js`
- `../infra/local-file-access.js`
- `../infra/map-size.js`
- `../infra/net/fetch-guard.js`
- `../infra/net/guarded-body-stream.js`
- `../infra/net/hostname.js`
- `../infra/net/proxy-env.js`
- `../infra/net/proxy/proxy-validation.js`
- `../infra/net/redirect-headers.js`
- `../infra/net/ssrf.js`
- `../infra/net/undici-runtime.js`
- `../infra/node-commands.js`
- `../infra/node-shell.js`
- `../infra/node-sqlite.js`
- `../infra/npm-integrity.js`
- `../infra/npm-managed-root.js`
- `../infra/npm-pack-install.js`
- `../infra/npm-registry-spec.js`
- `../infra/openclaw-exec-env.js`
- `../infra/openclaw-root.js`
- `../infra/os-summary.js`
- `../infra/outbound/best-effort-delivery.js`
- `../infra/outbound/channel-selection.js`
- `../infra/outbound/channel-target-prefix.js`
- `../infra/outbound/channel-target.js`
- `../infra/outbound/conversation-id.js`
- `../infra/outbound/deliver-types.js`
- `../infra/outbound/format.js`
- `../infra/outbound/message-action-params.js`
- `../infra/outbound/message-action-runner.js`
- `../infra/outbound/message.js`
- `../infra/outbound/outbound-policy.js`
- `../infra/outbound/send-deps.js`
- `../infra/outbound/session-binding-normalization.js`
- `../infra/outbound/session-binding-service.js`
- `../infra/outbound/session-context.js`
- `../infra/outbound/source-delivery-plan.js`
- `../infra/outbound/target-normalization.js`
- `../infra/outbound/target-resolver.js`
- `../infra/outbound/targets.js`
- `../infra/package-update-utils.js`
- `../infra/parse-finite-number.js`
- `../infra/path-alias-guards.js`
- `../infra/path-env.js`
- `../infra/path-guards.js`
- `../infra/path-prepend.js`
- `../infra/plain-object.js`
- `../infra/plugin-approval-canonical-decisions.js`
- `../infra/plugin-approvals.js`
- `../infra/ports-format.js`
- `../infra/ports-inspect.js`
- `../infra/ports-lsof.js`
- `../infra/ports-netstat.js`
- `../infra/ports-probe.js`
- `../infra/ports.js`
- `../infra/private-file-store.js`
- `../infra/private-mode.js`
- `../infra/private-temp-workspace.js`
- `../infra/prototype-keys.js`
- `../infra/regular-file.js`
- `../infra/remote-env.js`
- `../infra/replace-file.js`
- `../infra/resolve-system-bin.js`
- `../infra/restart-coordinator.js`
- `../infra/restart-handoff.js`
- `../infra/restart-sentinel.js`
- `../infra/retry.js`
- `../infra/retryable-network-errors.js`
- `../infra/runtime-guard.js`
- `../infra/runtime-status.ts`
- `../infra/safe-cwd.js`
- `../infra/safe-package-install.js`
- `../infra/scp-host.js`
- `../infra/secure-random.js`
- `../infra/semver.js`
- `../infra/session-delivery-queue-runtime.js`
- `../infra/session-delivery-queue.js`
- `../infra/shell-env.js`
- `../infra/shell-wrapper-resolution.js`
- `../infra/sibling-temp-file.js`
- `../infra/sqlite-audit-record-store.js`
- `../infra/sqlite-files.js`
- `../infra/sqlite-integrity.js`
- `../infra/sqlite-snapshot.js`
- `../infra/sqlite-transaction.js`
- `../infra/sqlite-user-version.js`
- `../infra/startup-migration-checkpoint.js`
- `../infra/system-events.js`
- `../infra/system-message.js`
- `../infra/system-run-approval-context.js`
- `../infra/system-run-command.js`
- `../infra/tailnet.js`
- `../infra/tailscale.js`
- `../infra/tcp-port.js`
- `../infra/tls/gateway.js`
- `../infra/tmp-openclaw-dir.js`
- `../infra/unhandled-rejections.js`
- `../infra/update-channels.js`
- `../infra/update-check.js`
- `../infra/update-control-plane-sentinel.js`
- `../infra/update-doctor-result.js`
- `../infra/update-runner.js`
- `../infra/widearea-dns.js`
- `../infra/windows-encoding.js`
- `../infra/windows-gateway-firewall-diagnostics.js`
- `../infra/windows-install-roots.js`
- `../infra/windows-port-pids.js`
- `../infra/wsl.js`
- `../interactive/payload.js`
- `../internal-runtime-context.js`
- `../llm/ai-transport-host.js`
- `../llm/model-runtime-binding.js`
- `../llm/providers/stream-wrappers/anthropic-family-cache-semantics.js`
- `../llm/providers/stream-wrappers/anthropic-family-tool-payload-compat.js`
- `../llm/providers/stream-wrappers/google.js`
- `../llm/providers/stream-wrappers/minimax.js`
- `../llm/providers/stream-wrappers/moonshot-thinking.js`
- `../llm/providers/stream-wrappers/openai.js`
- `../llm/providers/stream-wrappers/proxy.js`
- `../llm/providers/stream-wrappers/stream-payload-utils.js`
- `../llm/stream.js`
- `../llm/utils/event-stream.js`
- `../llm/utils/oauth/abort.js`
- `../logger.js`
- `../logging.js`
- `../logging/config.js`
- `../logging/console.js`
- `../logging/diagnostic-run-activity.js`
- `../logging/diagnostic-runtime.js`
- `../logging/diagnostic-session-state.js`
- `../logging/diagnostic.js`
- `../logging/levels.js`
- `../logging/log-tail.js`
- `../logging/log-test-helpers.js`
- `../logging/logger.js`
- `../logging/parse-log-line.js`
- `../logging/redact-identifier.js`
- `../logging/redact.js`
- `../logging/secret-redaction-registry.js`
- `../logging/secret-redaction-registry.test-support.js`
- `../logging/state.js`
- `../logging/subsystem.js`
- `../logging/test-helpers/diagnostic-log-capture.js`
- `../logging/test-helpers/warn-log-capture.js`
- `../logging/timestamps.js`
- `../mcp/channel-server.js`
- `../media-generation/live-test-helpers.js`
- `../media-note.js`
- `../media-understanding/shared.js`
- `../media/image-ops.js`
- `../media/media-reference-comparison.js`
- `../media/media-reference.js`
- `../media/media-services.js`
- `../media/qr-terminal.ts`
- `../media/sniff-mime-from-base64.js`
- `../media/store.js`
- `../memory-host-sdk/dreaming.js`
- `../memory-host-sdk/engine-qmd.js`
- `../memory-host-sdk/engine-storage.js`
- `../memory-host-sdk/host/config-utils.js`
- `../memory-host-sdk/multimodal.js`
- `../memory-host-sdk/secret.js`
- `../memory-prompt-prepare.js`
- `../memory-search.js`
- `../memory/root-memory-files.js`
- `../method-scopes.js`
- `../model-auth-markers.js`
- `../model-auth.js`
- `../model-catalog/index.js`
- `../model-catalog/manifest-planner.js`
- `../model-discovery-context.js`
- `../model-extra-params.js`
- `../model-fallback.js`
- `../model-max-tokens-params.js`
- `../model-ref-shared.js`
- `../model-runtime-aliases.js`
- `../model-runtime.js`
- `../model-selection-shared.js`
- `../model-selection.js`
- `../model-suppression.js`
- `../model-tool-support.js`
- `../model.js`
- `../models/alias-name.js`
- `../models/shared.js`
- `../net.js`
- `../node-host/config.js`
- `../node-host/with-timeout.js`
- `../openai-completions-compat.js`
- `../openai-routing.js`
- `../packages/terminal-core/src/progress-line.js`
- `../packages/terminal-core/src/restore.js`
- `../packages/terminal-core/src/theme.js`
- `../pairing/pairing-labels.js`
- `../pairing/pairing-store-keys.js`
- `../pairing/pairing-store-sqlite.js`
- `../pairing/pairing-store-sqlite.test-helpers.js`
- `../pairing/pairing-store.js`
- `../pairing/setup-code.js`
- `../plugin-model-catalog.js`
- `../plugin-node-capability.js`
- `../plugin-sdk/access-groups.js`
- `../plugin-sdk/agent-harness.js`
- `../plugin-sdk/approval-auth-helpers.js`
- `../plugin-sdk/approval-renderers.js`
- `../plugin-sdk/channel-access-compat.js`
- `../plugin-sdk/channel-config-helpers.js`
- `../plugin-sdk/channel-entry-contract.js`
- `../plugin-sdk/channel-route.js`
- `../plugin-sdk/facade-loader.js`
- `../plugin-sdk/facade-runtime.js`
- `../plugin-sdk/memory-core-bundled-runtime.js`
- `../plugin-sdk/migration.js`
- `../plugin-sdk/minimax.js`
- `../plugin-sdk/opencode.js`
- `../plugin-sdk/provider-catalog-shared.js`
- `../plugin-sdk/provider-onboard.js`
- `../plugin-sdk/provider-stream-shared.js`
- `../plugin-sdk/provider-tools.js`
- `../plugin-sdk/reply-payload.js`
- `../plugin-sdk/secret-input-schema.js`
- `../plugin-sdk/session-visibility.js`
- `../plugin-sdk/status-helpers.js`
- `../plugin-sdk/test-helpers/temp-home.js`
- `../plugin-sdk/tool-plugin.js`
- `../plugin-sdk/windows-spawn.js`
- `../plugin-state/plugin-blob-store.js`
- `../plugin-state/plugin-state-lease.js`
- `../plugin-state/plugin-state-store.js`
- `../plugin-state/plugin-state-store.test-helpers.js`
- `../plugin-state/runtime-health-store.js`
- `../plugin-text-transforms.js`
- `../plugins/agent-prompt-surface-kind.js`
- `../plugins/agent-tool-result-middleware.js`
- `../plugins/before-agent-reply.js`
- `../plugins/bundle-lsp.js`
- `../plugins/bundle-mcp.js`
- `../plugins/bundled-channel-config-metadata.js`
- `../plugins/bundled-compat.js`
- `../plugins/bundled-dir.js`
- `../plugins/bundled-install.js`
- `../plugins/bundled-load-path-aliases.js`
- `../plugins/bundled-sources.js`
- `../plugins/capability-provider-runtime.js`
- `../plugins/catalog-search.js`
- `../plugins/channel-plugin-ids.js`
- `../plugins/clawhub-error-codes.js`
- `../plugins/clawhub-install-records.js`
- `../plugins/clawhub.js`
- `../plugins/cli-backends.runtime.js`
- `../plugins/codex-app-server-extension-factory.js`
- `../plugins/command-registry-state.js`
- `../plugins/commands.js`
- `../plugins/config-policy.js`
- `../plugins/config-state.js`
- `../plugins/contracts/inventory/bundled-capability-metadata.js`
- `../plugins/current-plugin-metadata-snapshot.js`
- `../plugins/current-plugin-metadata-state.js`
- `../plugins/doctor-contract-registry.js`
- `../plugins/document-extractors.runtime.js`
- `../plugins/embedding-provider-runtime.js`
- `../plugins/embedding-providers.js`
- `../plugins/enable.js`
- `../plugins/gateway-startup-plugin-ids.js`
- `../plugins/gateway-startup-speech-providers.js`
- `../plugins/git-install.js`
- `../plugins/hook-agent-context.js`
- `../plugins/hook-before-tool-call-result.js`
- `../plugins/hook-decision-types.js`
- `../plugins/hook-runner-global-state.js`
- `../plugins/hook-runner-global.js`
- `../plugins/hooks.js`
- `../plugins/hooks.test-fixtures.js`
- `../plugins/host-hook-json.js`
- `../plugins/host-hook-state.js`
- `../plugins/host-tool-param-parsers.js`
- `../plugins/install-channel-specs.js`
- `../plugins/install-overrides.js`
- `../plugins/install-paths.js`
- `../plugins/install-persistence.js`
- `../plugins/install-provenance.js`
- `../plugins/install-record-commit.js`
- `../plugins/install.js`
- `../plugins/installed-plugin-index-hash.js`
- `../plugins/installed-plugin-index-policy.js`
- `../plugins/installed-plugin-index-record-reader.js`
- `../plugins/installed-plugin-index-records.js`
- `../plugins/installed-plugin-index-store.js`
- `../plugins/installed-plugin-index.js`
- `../plugins/installs.js`
- `../plugins/loader.js`
- `../plugins/loader.test-fixtures.js`
- `../plugins/managed-npm-retention.js`
- `../plugins/manifest-command-aliases.js`
- `../plugins/manifest-contract-eligibility.js`
- `../plugins/manifest-contribution-ids.js`
- `../plugins/manifest-metadata-scan.js`
- `../plugins/manifest-model-id-normalization.js`
- `../plugins/manifest-model-suppression.js`
- `../plugins/manifest-owner-policy.js`
- `../plugins/manifest-registry-installed.js`
- `../plugins/manifest-registry.js`
- `../plugins/manifest-tool-availability.js`
- `../plugins/manifest.js`
- `../plugins/marketplace.js`
- `../plugins/mcp-tool-filter-registration.js`
- `../plugins/memory-embedding-providers.js`
- `../plugins/memory-runtime.js`
- `../plugins/memory-state.js`
- `../plugins/memory-state.test-fixtures.js`
- `../plugins/migration-provider-runtime.js`
- `../plugins/module-export.js`
- `../plugins/npm-project-roots.js`
- `../plugins/official-external-install-trust.js`
- `../plugins/official-external-plugin-catalog.js`
- `../plugins/official-external-plugin-repair-hints.js`
- `../plugins/official-external-provider-endpoints.js`
- `../plugins/package-entry-resolution.js`
- `../plugins/plugin-cache-primitives.js`
- `../plugins/plugin-config-trust.js`
- `../plugins/plugin-control-plane-context.js`
- `../plugins/plugin-lifecycle-trace.js`
- `../plugins/plugin-metadata-lifecycle.js`
- `../plugins/plugin-metadata-snapshot.js`
- `../plugins/plugin-module-loader-cache.js`
- `../plugins/plugin-peer-link.js`
- `../plugins/plugin-registry-contributions.js`
- `../plugins/plugin-registry.js`
- `../plugins/plugin-version-drift.js`
- `../plugins/provider-auth-choice-helpers.js`
- `../plugins/provider-auth-choice-order.js`
- `../plugins/provider-auth-choice-preference.js`
- `../plugins/provider-auth-choice.js`
- `../plugins/provider-auth-choice.runtime.js`
- `../plugins/provider-auth-choices.js`
- `../plugins/provider-auth-helpers.js`
- `../plugins/provider-auth-input.js`
- `../plugins/provider-auth-mode.js`
- `../plugins/provider-auth-ref.js`
- `../plugins/provider-claude-thinking.js`
- `../plugins/provider-discovery.js`
- `../plugins/provider-hook-runtime.js`
- `../plugins/provider-install-catalog.js`
- `../plugins/provider-model-compat.js`
- `../plugins/provider-model-primary.js`
- `../plugins/provider-model-routes.js`
- `../plugins/provider-openai-chatgpt-oauth-tls.js`
- `../plugins/provider-public-artifacts.js`
- `../plugins/provider-registry-shared.js`
- `../plugins/provider-replay-helpers.js`
- `../plugins/provider-runtime.js`
- `../plugins/provider-runtime.runtime.js`
- `../plugins/provider-thinking.js`
- `../plugins/provider-wizard.js`
- `../plugins/providers.js`
- `../plugins/providers.runtime.js`
- `../plugins/public-surface-loader.js`
- `../plugins/registry-empty.js`
- `../plugins/registry-refresh.js`
- `../plugins/registry.js`
- `../plugins/restart-recovery-hook-safety.js`
- `../plugins/runtime-channel-state.js`
- `../plugins/runtime-degraded-state.js`
- `../plugins/runtime-sidecar-paths.js`
- `../plugins/runtime-state.js`
- `../plugins/runtime.js`
- `../plugins/runtime/gateway-request-scope.js`
- `../plugins/runtime/runtime-channel.js`
- `../plugins/runtime/standalone-runtime-registry-loader.js`
- `../plugins/schema-validator.js`
- `../plugins/sdk-alias.js`
- `../plugins/setup-registry.js`
- `../plugins/setup-registry.runtime.js`
- `../plugins/slots.js`
- `../plugins/stale-local-bundled-plugin-install-records.js`
- `../plugins/status.js`
- `../plugins/status.test-fixtures.js`
- `../plugins/synthetic-auth.runtime.js`
- `../plugins/test-helpers/cold-plugin-fixtures.js`
- `../plugins/test-helpers/fs-fixtures.js`
- `../plugins/test-helpers/managed-npm-plugin.js`
- `../plugins/text-transforms.runtime.js`
- `../plugins/tool-grant-allowlist.js`
- `../plugins/tools.js`
- `../plugins/trusted-tool-policy.js`
- `../plugins/types.js`
- `../plugins/update.js`
- `../plugins/web-content-extractors.runtime.js`
- `../plugins/web-fetch-providers.runtime.js`
- `../plugins/web-fetch-providers.shared.js`
- `../plugins/web-search-install-catalog.js`
- `../plugins/web-search-providers.runtime.js`
- `../plugins/web-search-providers.shared.js`
- `../plugins/worker-provider-registry.js`
- `../prepared-model-runtime.js`
- `../process/child-process-tree.js`
- `../process/command-queue.js`
- `../process/exec.js`
- `../process/gateway-work-admission.js`
- `../process/kill-tree.js`
- `../process/lanes.js`
- `../process/linux-oom-score.js`
- `../process/supervisor/index.js`
- `../program/helpers.js`
- `../prompt-surface.js`
- `../provider-api-families.js`
- `../provider-local-service.js`
- `../provider-request-config.js`
- `../provider-runtime/operation-retry.js`
- `../provider-secret-egress.js`
- `../provider-stream.js`
- `../provider-transport-fetch.js`
- `../provider-transport-stream.js`
- `../proxy-capture/ca.js`
- `../proxy-capture/coverage.js`
- `../proxy-capture/env.js`
- `../proxy-capture/proxy-server.js`
- `../proxy-capture/runtime.js`
- `../proxy-capture/store.sqlite.js`
- `../replay-turn-classification.js`
- `../reply-payload.js`
- `../reply.test-harness.js`
- `../resolve-system-bin.js`
- `../routing/account-id.js`
- `../routing/account-lookup.js`
- `../routing/bindings.js`
- `../routing/bound-account-read.js`
- `../routing/resolve-route.js`
- `../routing/session-key.js`
- `../run-cleanup-timeout.js`
- `../run-session-target.js`
- `../runtime-api.js`
- `../runtime-capabilities.js`
- `../runtime-plan/build.js`
- `../runtime-plan/credential-scoped-model.js`
- `../runtime-plan/materialize-model.js`
- `../runtime-plan/prepare-auth.js`
- `../runtime-plan/resolve-auth.js`
- `../runtime-plugins.js`
- `../runtime.js`
- `../runtime/index.js`
- `../sandbox.js`
- `../schtasks.js`
- `../secrets/channel-contract-api.js`
- `../secrets/channel-env-var-names.js`
- `../secrets/channel-env-vars.js`
- `../secrets/command-config.js`
- `../secrets/json-pointer.js`
- `../secrets/model-provider-header-policy.js`
- `../secrets/path-utils.js`
- `../secrets/provider-env-vars.js`
- `../secrets/provider-integrations.js`
- `../secrets/ref-contract.js`
- `../secrets/resolve.js`
- `../secrets/runtime-auth-profile-owner.js`
- `../secrets/runtime-config-collectors-plugins.js`
- `../secrets/runtime-config-collectors.js`
- `../secrets/runtime-degraded-state.js`
- `../secrets/runtime-memory-secret-owner.js`
- `../secrets/runtime-shared.js`
- `../secrets/runtime-state.js`
- `../secrets/runtime-web-tools-state.js`
- `../secrets/runtime-web-tools.js`
- `../secrets/runtime.js`
- `../secrets/secret-value.js`
- `../secrets/sentinel.js`
- `../secrets/target-registry.js`
- `../secrets/unsupported-surface-policy.js`
- `../security/audit.js`
- `../security/dangerous-tools.js`
- `../security/dm-policy-shared.js`
- `../security/exec-filesystem-policy.js`
- `../security/fix.js`
- `../security/install-policy.js`
- `../security/safe-regex.js`
- `../security/scan-paths.js`
- `../security/secret-equal.js`
- `../security/secret-mask.js`
- `../security/system-tags.js`
- `../send-policy.js`
- `../sender-identity.js`
- `../server-constants.js`
- `../server-methods/approval-shared.js`
- `../server-methods/nodes-wake-state.js`
- `../server-utils.js`
- `../server.e2e-ws-harness.js`
- `../session-agent-binding.js`
- `../session-async-task-status.js`
- `../session-file-repair.js`
- `../session-raw-append-message.js`
- `../session-suspension.js`
- `../session-tool-result-guard-wrapper.js`
- `../session-transcript-repair.js`
- `../session-write-lock-error.js`
- `../session-write-lock.js`
- `../sessions/agent-harness-session-key.js`
- `../sessions/classify-session-kind.js`
- `../sessions/index.js`
- `../sessions/input-provenance.js`
- `../sessions/model-overrides.js`
- `../sessions/model-registry-runtime.js`
- `../sessions/send-policy.js`
- `../sessions/session-chat-type-shared.js`
- `../sessions/session-id-resolution.js`
- `../sessions/session-key-utils.js`
- `../sessions/session-lifecycle-admission.js`
- `../sessions/session-lifecycle-events.js`
- `../sessions/session-manager.js`
- `../sessions/session-state-events.js`
- `../sessions/tools/tool-contracts.js`
- `../sessions/transcript-events.js`
- `../sessions/user-turn-transcript-runtime-context.js`
- `../sessions/user-turn-transcript.js`
- `../sessions/user-turn-transcript.test-support.js`
- `../shared.js`
- `../shared/agent-liveness.js`
- `../shared/agent-run-status.js`
- `../shared/assistant-error-format.js`
- `../shared/avatar-limits.js`
- `../shared/avatar-policy.js`
- `../shared/balanced-json.js`
- `../shared/chat-content.js`
- `../shared/chat-envelope.js`
- `../shared/chat-message-content.js`
- `../shared/custom-command-config.js`
- `../shared/deferred.js`
- `../shared/device-auth-store.js`
- `../shared/device-auth.js`
- `../shared/device-bootstrap-profile.js`
- `../shared/device-pairing-access.js`
- `../shared/fast-mode.js`
- `../shared/frontmatter.js`
- `../shared/gateway-method-policy.js`
- `../shared/gateway-tailscale-auth-policy.js`
- `../shared/global-singleton.js`
- `../shared/google-turn-ordering.js`
- `../shared/human-list.js`
- `../shared/import-specifier.js`
- `../shared/iso-time.js`
- `../shared/json-schema-defaults.js`
- `../shared/lazy-promise.js`
- `../shared/lazy-runtime.js`
- `../shared/listeners.js`
- `../shared/lobster-day.js`
- `../shared/markdown-code.js`
- `../shared/model-key.js`
- `../shared/model-param-b.js`
- `../shared/node-list-parse.js`
- `../shared/number-coercion.js`
- `../shared/operator-scope-compat.js`
- `../shared/path-array-index.js`
- `../shared/pid-alive.js`
- `../shared/progress-labels.js`
- `../shared/regexp.js`
- `../shared/runtime-import.js`
- `../shared/safe-record.js`
- `../shared/silent-reply-policy.js`
- `../shared/subagents-format.js`
- `../shared/tailscale-status.js`
- `../shared/text-chunking.js`
- `../shared/text/assistant-transcript-role-headers.js`
- `../shared/text/assistant-visible-text.js`
- `../shared/text/code-regions.js`
- `../shared/text/final-tags.js`
- `../shared/text/join-segments.js`
- `../shared/text/model-special-tokens.js`
- `../shared/text/reasoning-tags.js`
- `../shared/text/tool-call-shaped-text.js`
- `../shared/thread-binding-lifecycle.js`
- `../shared/transcript-only-openclaw-assistant.js`
- `../shell-utils.js`
- `../skills/discovery/agent-filter.js`
- `../skills/discovery/status.js`
- `../skills/lifecycle/clawhub.js`
- `../skills/lifecycle/gh-config-discovery.js`
- `../skills/lifecycle/install.js`
- `../skills/lifecycle/source-install.js`
- `../skills/loading/bundled-dir.js`
- `../skills/loading/source.js`
- `../skills/research/autocapture.js`
- `../skills/runtime/refresh.test-support.js`
- `../skills/security/scanner.js`
- `../skills/test-support/test-helpers.js`
- `../skills/workshop/curator.js`
- `../skills/workshop/policy.js`
- `../skills/workshop/service.js`
- `../snapshot/local-repository.js`
- `../stable-stringify.js`
- `../state/onboarding-recommendations.js`
- `../state/openclaw-agent-db-readonly.js`
- `../state/openclaw-agent-db.js`
- `../state/openclaw-agent-db.paths.js`
- `../state/openclaw-agent-schema.generated.js`
- `../state/openclaw-quarantine-store.js`
- `../state/openclaw-schema-versions.js`
- `../state/openclaw-state-db-readonly.js`
- `../state/openclaw-state-db-schema-helpers.js`
- `../state/openclaw-state-db.js`
- `../state/openclaw-state-db.paths.js`
- `../state/openclaw-state-lease.js`
- `../state/openclaw-state-schema.generated.js`
- `../state/openclaw-state-snapshot-sanitizer.js`
- `../status.js`
- `../status/agent-runtime-label.js`
- `../status/codex-synthetic-usage.js`
- `../status/fallback-notice-state.js`
- `../status/status-message.js`
- `../stream-message-shared.js`
- `../stream.js`
- `../system-agent/agent-id.js`
- `../system-agent/audit.js`
- `../system-agent/audit.test-support.js`
- `../system-agent/probes.js`
- `../system-agent/setup-app-recommendations.js`
- `../system-prompt-config.js`
- `../talk/client-voice-confirmation.js`
- `../talk/client-voice-session.js`
- `../tasks/background-exec-task-contract.js`
- `../tasks/detached-task-runtime-contract.js`
- `../tasks/detached-task-runtime-state.js`
- `../tasks/detached-task-runtime.js`
- `../tasks/runtime-internal.js`
- `../tasks/task-cancellation-state.js`
- `../tasks/task-completion-contract.js`
- `../tasks/task-executor.js`
- `../tasks/task-flow-registry.audit.js`
- `../tasks/task-flow-registry.js`
- `../tasks/task-flow-registry.maintenance.js`
- `../tasks/task-flow-registry.store.sqlite.js`
- `../tasks/task-flow-runtime-internal.js`
- `../tasks/task-registry.audit.js`
- `../tasks/task-registry.audit.shared.js`
- `../tasks/task-registry.js`
- `../tasks/task-registry.maintenance.js`
- `../tasks/task-registry.reconcile.js`
- `../tasks/task-registry.store.sqlite.js`
- `../tasks/task-registry.summary.js`
- `../tasks/task-restart-blocker.js`
- `../tasks/task-runtime.test-helpers.js`
- `../tasks/task-status-access.js`
- `../tasks/task-status.js`
- `../test-helpers.js`
- `../test-helpers/agent-message-fixtures.js`
- `../test-helpers/agent-tool-stubs.js`
- `../test-helpers/assistant-message-fixtures.js`
- `../test-helpers/model-fallback-config-fixture.js`
- `../test-helpers/network-interfaces.js`
- `../test-helpers/state-dir-env.js`
- `../test-helpers/temp-dir.js`
- `../test-helpers/workspace.js`
- `../test-http-response.js`
- `../test-utils/camera-url-test-helpers.js`
- `../test-utils/channel-plugin-test-fixtures.js`
- `../test-utils/channel-plugins.js`
- `../test-utils/chunk-test-helpers.js`
- `../test-utils/command-runner.js`
- `../test-utils/deferred.js`
- `../test-utils/env.js`
- `../test-utils/fetch-mock.js`
- `../test-utils/fixture-suite.js`
- `../test-utils/fs-scan-assertions.js`
- `../test-utils/mock-call-assertions.js`
- `../test-utils/mock-http-response.js`
- `../test-utils/mock-http.js`
- `../test-utils/node-process.js`
- `../test-utils/npm-spec-install-test-helpers.js`
- `../test-utils/openclaw-test-state.js`
- `../test-utils/ports.js`
- `../test-utils/process-tree.js`
- `../test-utils/provider-usage-fetch.js`
- `../test-utils/repo-files.js`
- `../test-utils/secret-file-fixture.js`
- `../test-utils/secret-ref-test-vectors.js`
- `../test-utils/session-conversation-registry.js`
- `../test-utils/session-state-cleanup.js`
- `../test-utils/symlink-rebind-race.js`
- `../test-utils/system-run-prepare-payload.js`
- `../test-utils/talk-test-provider.js`
- `../test-utils/temp-dir.js`
- `../test-utils/temp-home.js`
- `../test-utils/tracked-temp-dirs.js`
- `../test-utils/typed-cases.js`
- `../test-utils/vitest-module-mocks.js`
- `../test-utils/vitest-spies.js`
- `../test-utils/web-provider-runtime.test-helpers.js`
- `../test-utils/zip-central-directory-fixture.js`
- `../test/helpers/temp-dir.js`
- `../theme/theme.js`
- `../thinking-runtime.js`
- `../thinking.js`
- `../thinking.shared.js`
- `../timeout.js`
- `../tokens.js`
- `../tool-call-id.js`
- `../tool-error-summary.js`
- `../tool-loop-detection-config.js`
- `../tool-meta.js`
- `../tool-policy-declared-context.js`
- `../tool-policy-pipeline.js`
- `../tool-policy.js`
- `../tool-replay-safety.js`
- `../tool-result-error.js`
- `../tool-schema-projection.js`
- `../tool-schema-quarantine.js`
- `../tool-search.js`
- `../trajectory/command-export.js`
- `../trajectory/paths.js`
- `../trajectory/runtime-file.js`
- `../trajectory/runtime-store.sqlite.js`
- `../transcript-policy.js`
- `../transcripts/config.js`
- `../transport-stream-shared.js`
- `../tts/tts-config.js`
- `../tts/tts-settings.js`
- `../tui/tui-last-session.js`
- `../tui/tui-launch.js`
- `../usage-bar/contract.js`
- `../usage-bar/template.js`
- `../usage-bar/translator.js`
- `../usage.js`
- `../utils.js`
- `../utils/boolean.js`
- `../utils/cjk-chars.js`
- `../utils/conversation-target.js`
- `../utils/delivery-context.js`
- `../utils/delivery-context.shared.js`
- `../utils/directive-tags.js`
- `../utils/fetch-timeout.js`
- `../utils/message-channel-constants.js`
- `../utils/message-channel-core.js`
- `../utils/message-channel-normalize.js`
- `../utils/message-channel.js`
- `../utils/normalize-secret-input.js`
- `../utils/parse-json-compat.js`
- `../utils/run-with-concurrency.js`
- `../utils/safe-json.js`
- `../utils/shell-argv.js`
- `../utils/sleep.js`
- `../utils/string-readers.js`
- `../utils/timer-delay.js`
- `../utils/token-format.js`
- `../utils/transcript-tools.js`
- `../utils/usage-format.js`
- `../utils/utf8-truncate.js`
- `../utils/with-timeout.js`
- `../utils/zod-parse.js`
- `../version.js`
- `../web-search/runtime.js`
- `../wizard/clack-prompter.js`
- `../wizard/i18n/index.js`
- `../wizard/prompts.js`
- `../wizard/setup.js`
- `../wizard/setup.secret-input.js`
- `../wizard/setup.shared.js`
- `../workspace-run.js`
- `../ws-log.js`
- `./.payload/runtime.cjs`
- `./__tests__/test-utils.js`
- `./abort-cutoff.js`
- `./abort-cutoff.runtime.js`
- `./abort-primitives.js`
- `./abort-signal.js`
- `./abort.js`
- `./abort.test-support.js`
- `./accepted-session-spawn.js`
- `./account-snapshot-fields.js`
- `./account-summary.js`
- `./ack-reactions.js`
- `./acp-cli.js`
- `./acp-parent-stream-store.sqlite.js`
- `./acp-parent-stream-store.sqlite.test-support.js`
- `./acp-projector.js`
- `./acp-reset-target.js`
- `./acp-reset-target.test-support.js`
- `./acp-runtime-overlay.js`
- `./acp-spawn-parent-stream.js`
- `./acp-stream-settings.js`
- `./activation-context.js`
- `./activation-planner.js`
- `./activation-source-config.js`
- `./active-runtime-registry.js`
- `./advertised-lan-host.js`
- `./agent-auth-credentials.js`
- `./agent-auth-discovery-core.js`
- `./agent-auth-discovery.js`
- `./agent-bundle-lsp-dependencies.js`
- `./agent-bundle-lsp-process.js`
- `./agent-bundle-lsp-runtime.js`
- `./agent-bundle-mcp-combined.js`
- `./agent-bundle-mcp-filter.js`
- `./agent-bundle-mcp-harness.js`
- `./agent-bundle-mcp-manager-api.js`
- `./agent-bundle-mcp-manager-install.js`
- `./agent-bundle-mcp-manager-lifecycle.js`
- `./agent-bundle-mcp-manager.js`
- `./agent-bundle-mcp-materialize.js`
- `./agent-bundle-mcp-names.js`
- `./agent-bundle-mcp-runtime-config.js`
- `./agent-bundle-mcp-runtime-shared.js`
- `./agent-bundle-mcp-runtime.js`
- `./agent-bundle-mcp-tools.js`
- `./agent-command-recovery-owner.js`
- `./agent-command-restart-recovery.js`
- `./agent-command-state.test-mocks.js`
- `./agent-command.test-mocks.js`
- `./agent-compaction-constants.js`
- `./agent-create.js`
- `./agent-dir-registry.js`
- `./agent-dirs.js`
- `./agent-event-bridge.js`
- `./agent-event-emission.js`
- `./agent-events.js`
- `./agent-hooks/session-manager-runtime-registry.js`
- `./agent-lifecycle-parent-state.js`
- `./agent-lifecycle-terminal.js`
- `./agent-limits.js`
- `./agent-model-discovery.js`
- `./agent-project-settings-snapshot.js`
- `./agent-project-settings.js`
- `./agent-prompt-surface-kind.js`
- `./agent-run-terminal-outcome.js`
- `./agent-runner-auth-profile.js`
- `./agent-runner-auto-fallback.js`
- `./agent-runner-cli-candidate.js`
- `./agent-runner-cli-dispatch.js`
- `./agent-runner-command-output.js`
- `./agent-runner-context-recovery.js`
- `./agent-runner-embedded-candidate.js`
- `./agent-runner-error-handler.js`
- `./agent-runner-event-handler.js`
- `./agent-runner-execution.js`
- `./agent-runner-execution.test-support.js`
- `./agent-runner-failure-copy.js`
- `./agent-runner-failure-reply.js`
- `./agent-runner-fallback-candidate.js`
- `./agent-runner-fallback-cycle.js`
- `./agent-runner-fallback-settlement.js`
- `./agent-runner-helpers.js`
- `./agent-runner-memory.js`
- `./agent-runner-memory.test-support.js`
- `./agent-runner-model-fallback-lifecycle.js`
- `./agent-runner-payloads.js`
- `./agent-runner-presentation.js`
- `./agent-runner-reminder-guard.js`
- `./agent-runner-run-params.js`
- `./agent-runner-session-reset.js`
- `./agent-runner-session-reset.test-support.js`
- `./agent-runner-turn-timing.js`
- `./agent-runner-usage-line.js`
- `./agent-runner-utils.js`
- `./agent-runner.js`
- `./agent-runner.test-fixtures.js`
- `./agent-runtime-config.js`
- `./agent-runtime-id.js`
- `./agent-scope-config.js`
- `./agent-scope.js`
- `./agent-settings.js`
- `./agent-steering-queue.js`
- `./agent-tool-definition-adapter.js`
- `./agent-tool-handler-state.test-helpers.js`
- `./agent-tool-result-middleware.js`
- `./agent-tools.abort.js`
- `./agent-tools.before-tool-call.js`
- `./agent-tools.before-tool-call.state.js`
- `./agent-tools.deferred-followup.js`
- `./agent-tools.js`
- `./agent-tools.message-provider-policy.js`
- `./agent-tools.params.js`
- `./agent-tools.policy.js`
- `./agent-tools.read.js`
- `./agent-tools.ring-zero-context.js`
- `./agent-tools.schema.js`
- `./agent-turn-attachments.js`
- `./agent-via-gateway.js`
- `./agent.js`
- `./agents.bind.test-support.js`
- `./agents.binding-format.js`
- `./agents.bindings.js`
- `./agents.command-shared.js`
- `./agents.commands.add.js`
- `./agents.commands.delete.js`
- `./agents.commands.identity.js`
- `./agents.config.js`
- `./agents.providers.js`
- `./agents/model-selection-normalize.js`
- `./ai-transport-host.js`
- `./allow-from.js`
- `./allowed-values.js`
- `./allowlist-match.js`
- `./announce-idempotency.js`
- `./anthropic-payload-log.js`
- `./anthropic-payload-policy.js`
- `./anthropic-transport-stream.js`
- `./anthropic-vertex-stream.js`
- `./api-builder.js`
- `./api-facades.js`
- `./api-key-rotation.js`
- `./api-lifecycle.js`
- `./apply-patch-model-policy.js`
- `./apply-patch-paths.js`
- `./apply-patch-update.js`
- `./apply-patch.js`
- `./apply-patch.test-support.js`
- `./approval-display-paths.js`
- `./approval-errors.js`
- `./approval-gateway-resolver.js`
- `./approval-gateway-runtime-context.js`
- `./approval-gateway-runtime-methods.js`
- `./approval-handler-adapter-runtime.js`
- `./approval-handler-bootstrap.js`
- `./approval-handler-runtime.js`
- `./approval-handler.test-helpers.js`
- `./approval-native-delivery.js`
- `./approval-native-route-coordinator.js`
- `./approval-native-route-notice.js`
- `./approval-native-runtime.js`
- `./approval-native-target-key.js`
- `./approval-presentation.js`
- `./approval-request-account-binding.js`
- `./approval-request-filters.js`
- `./approval-resolution-ref.js`
- `./approval-turn-source.js`
- `./approval-types.js`
- `./approval-view-model.js`
- `./archive-path.js`
- `./archive.js`
- `./argv-invocation.js`
- `./argv.js`
- `./attach-cli.js`
- `./audio-tags.js`
- `./audio-transcode.js`
- `./audio.js`
- `./audit.js`
- `./audit.test-support.js`
- `./auth-choice-legacy.js`
- `./auth-choice-options.js`
- `./auth-choice-options.static.js`
- `./auth-choice-prompt.js`
- `./auth-choice.apply-helpers.js`
- `./auth-choice.apply.api-providers.js`
- `./auth-choice.apply.js`
- `./auth-choice.js`
- `./auth-choice.model-check.js`
- `./auth-health.js`
- `./auth-profiles.js`
- `./auth-profiles/constants.js`
- `./auth-profiles/credential-state.js`
- `./auth-profiles/display.js`
- `./auth-profiles/doctor.js`
- `./auth-profiles/effective-oauth.js`
- `./auth-profiles/external-auth.test-support.js`
- `./auth-profiles/external-cli-auth-selection.js`
- `./auth-profiles/external-cli-discovery.js`
- `./auth-profiles/external-cli-scope.js`
- `./auth-profiles/external-cli-sync.js`
- `./auth-profiles/oauth-refresh-failure.js`
- `./auth-profiles/oauth.js`
- `./auth-profiles/order.js`
- `./auth-profiles/persisted.js`
- `./auth-profiles/profile-list.js`
- `./auth-profiles/read-only-availability.js`
- `./auth-profiles/runtime-snapshots.js`
- `./auth-profiles/session-override.js`
- `./auth-profiles/source-check.js`
- `./auth-profiles/sqlite.js`
- `./auth-profiles/store.js`
- `./auth-profiles/usage-state.js`
- `./auth-profiles/usage.js`
- `./auto-reply/templating.js`
- `./backoff.js`
- `./backup-create-stream.js`
- `./backup-create.js`
- `./backup-rotation.js`
- `./backup-shared.js`
- `./backup-sqlite.js`
- `./backup-tar-retry.js`
- `./backup-verify.js`
- `./backup-volatile-filter.js`
- `./backup-volatile-stat-cache.js`
- `./backup.js`
- `./backup.test-support.js`
- `./banner-config-lite.js`
- `./banner.js`
- `./bash-command.js`
- `./bash-process-references.js`
- `./bash-process-registry.js`
- `./bash-process-registry.test-helpers.js`
- `./bash-process-registry.test-support.js`
- `./bash-tools.descriptions.js`
- `./bash-tools.exec-approval-followup-state.js`
- `./bash-tools.exec-approval-followup.js`
- `./bash-tools.exec-approval-request.js`
- `./bash-tools.exec-host-gateway.js`
- `./bash-tools.exec-host-node-phases.js`
- `./bash-tools.exec-host-node.js`
- `./bash-tools.exec-host-shared.js`
- `./bash-tools.exec-output.js`
- `./bash-tools.exec-runtime.js`
- `./bash-tools.exec-task-tracking.js`
- `./bash-tools.exec-workdir.js`
- `./bash-tools.exec.js`
- `./bash-tools.js`
- `./bash-tools.process-send-keys.js`
- `./bash-tools.process.js`
- `./bash-tools.schemas.js`
- `./bash-tools.shared.js`
- `./before-agent-reply.js`
- `./before-tool-call-metadata.js`
- `./binaries.js`
- `./block-reply-coalescer.js`
- `./block-reply-pipeline.js`
- `./block-streaming.js`
- `./body.js`
- `./bonjour-discovery.js`
- `./bootstrap-budget.js`
- `./bootstrap-cache.js`
- `./bootstrap-files.js`
- `./bootstrap-hooks.js`
- `./bootstrap-mode.js`
- `./bootstrap-prompt.js`
- `./bootstrap-routing.js`
- `./bootstrap/node-startup-env.js`
- `./boundary-path.js`
- `./brew.js`
- `./browser-open.js`
- `./btw-command.js`
- `./btw-transcript.js`
- `./bundle-config-shared.js`
- `./bundle-lsp.js`
- `./bundle-manifest.js`
- `./bundle-mcp-config.js`
- `./bundle-mcp-shared.test-harness.js`
- `./bundle-mcp.js`
- `./bundle-mcp.test-support.js`
- `./bundled-capability-runtime.js`
- `./bundled-channel-catalog-read.js`
- `./bundled-channel-config-metadata.generated.js`
- `./bundled-channel-config-metadata.js`
- `./bundled-channel-runtime.js`
- `./bundled-compat.js`
- `./bundled-dir.js`
- `./bundled-load-path-aliases.js`
- `./bundled-manifest-contract-plugins.js`
- `./bundled-package-channel-metadata.js`
- `./bundled-plugin-metadata.js`
- `./bundled-plugin-scan.js`
- `./bundled-source-overlays.js`
- `./bundled-sources.js`
- `./byte-size.js`
- `./cache-trace.js`
- `./cache-ttl.js`
- `./cache-utils.js`
- `./canvas-render.ts`
- `./capability-cli.js`
- `./capability-cli/audio.js`
- `./capability-cli/embedding.js`
- `./capability-cli/image.js`
- `./capability-cli/metadata.js`
- `./capability-cli/model.js`
- `./capability-cli/shared.js`
- `./capability-cli/tts.js`
- `./capability-cli/video.js`
- `./capability-cli/web.js`
- `./capability-provider-runtime.js`
- `./captured-registration.js`
- `./channel-account-context.js`
- `./channel-activity.js`
- `./channel-alias-migration.js`
- `./channel-approval-auth.js`
- `./channel-auth.js`
- `./channel-capabilities.js`
- `./channel-catalog-registry.js`
- `./channel-compat-normalization.js`
- `./channel-config-metadata.js`
- `./channel-config.js`
- `./channel-configured-shared.js`
- `./channel-configured.js`
- `./channel-context.js`
- `./channel-inbound-roots.js`
- `./channel-options.js`
- `./channel-options.test-support.js`
- `./channel-plugin-ids.js`
- `./channel-presence-policy.js`
- `./channel-runtime-context.js`
- `./channel-setup/discovery.js`
- `./channel-setup/plugin-install.js`
- `./channel-summary.js`
- `./channel-tool-metadata.js`
- `./channel-tools.js`
- `./channel-validation.js`
- `./channels-cli.js`
- `./channels-status-issues.js`
- `./channels.mock-harness.js`
- `./channels.plugin-install.test-helpers.js`
- `./channels/add.js`
- `./channels/list.js`
- `./channels/logs.js`
- `./channels/remove.js`
- `./channels/resolve.js`
- `./channels/status-config-format.js`
- `./channels/status.js`
- `./chat-meta-shared.js`
- `./chat-meta.js`
- `./chat-type.js`
- `./child-admission.js`
- `./child-process-bridge.js`
- `./child-process.js`
- `./chunk.js`
- `./chutes-oauth.js`
- `./clack-navigation-prompts.js`
- `./clack-prompter.js`
- `./claw-banner.js`
- `./clawhub-error-codes.js`
- `./clawhub-install-records.js`
- `./clawhub-retry.js`
- `./clawhub-risk-acknowledgement.js`
- `./clawhub.js`
- `./cleanup-command.test-support.js`
- `./cleanup-plan.js`
- `./cleanup-utils.js`
- `./cli-auth-epoch.js`
- `./cli-auth-epoch.test-support.js`
- `./cli-backend-dispatch-eligibility.js`
- `./cli-backend-dispatch-transcript.js`
- `./cli-backend-dispatch.js`
- `./cli-backends.js`
- `./cli-backends.test-support.js`
- `./cli-credentials.js`
- `./cli-executable-identity.js`
- `./cli-execution-auth.js`
- `./cli-gateway-nodes-runtime.js`
- `./cli-name.js`
- `./cli-output.js`
- `./cli-registry-loader.js`
- `./cli-root-options.js`
- `./cli-runner.js`
- `./cli-runner.test-support.js`
- `./cli-runner/bundle-mcp-adapter-shared.js`
- `./cli-runner/claude-live-session.js`
- `./cli-runner/claude-live-session.test-support.js`
- `./cli-runner/delivery-evidence.js`
- `./cli-runner/execute.js`
- `./cli-runner/execute.runtime.js`
- `./cli-runner/execute.test-support.js`
- `./cli-runner/helpers.js`
- `./cli-runner/log.js`
- `./cli-runner/prepare.js`
- `./cli-runner/prepare.runtime.js`
- `./cli-runner/prepare.test-support.js`
- `./cli-runner/reseed-envelope.js`
- `./cli-runner/run-diagnostics.js`
- `./cli-runner/session-history.js`
- `./cli-session.js`
- `./cli-utils.js`
- `./cli/argv.js`
- `./cli/container-target.js`
- `./cli/deps.js`
- `./cli/failure-output.js`
- `./cli/precomputed-help.js`
- `./cli/profile.js`
- `./cli/respawn-policy.js`
- `./cli/startup-trace.js`
- `./cli/wait.js`
- `./cli/windows-argv.js`
- `./close-reason.js`
- `./code-mode-control-tools.js`
- `./code-mode-json.js`
- `./code-mode-namespaces.js`
- `./code-mode-namespaces.test-support.js`
- `./code-mode-swarm-controller-source.js`
- `./code-mode.js`
- `./code-mode.test-support.js`
- `./codex-app-server-extension-factory.js`
- `./codex-mcp-config.js`
- `./codex-native-web-search-core.js`
- `./codex-native-web-search.js`
- `./codex-native-web-search.shared.js`
- `./codex-plugin-diagnostics.js`
- `./command-analysis/inline-eval.js`
- `./command-analysis/policy.js`
- `./command-analysis/risks.js`
- `./command-auth.js`
- `./command-bootstrap.js`
- `./command-carriers.js`
- `./command-catalog.js`
- `./command-config-resolution.js`
- `./command-detection.js`
- `./command-execution-startup.js`
- `./command-explainer/extract.js`
- `./command-format.js`
- `./command-gates.js`
- `./command-gating.js`
- `./command-options.js`
- `./command-path-matches.js`
- `./command-path-policy.js`
- `./command-poll-backoff.js`
- `./command-queue.test-support.js`
- `./command-registration-policy.js`
- `./command-registration.js`
- `./command-registry-state.js`
- `./command-secret-gateway.js`
- `./command-secret-gateway.test-support.js`
- `./command-secret-targets.js`
- `./command-session-metadata.js`
- `./command-source.test-helpers.js`
- `./command-specs.js`
- `./command-startup-policy.js`
- `./command-turn-context.js`
- `./command-turn-detection.js`
- `./command/acp-execution.js`
- `./command/attempt-execution.helpers.js`
- `./command/attempt-execution.js`
- `./command/attempt-execution.shared.js`
- `./command/ingress-diagnostics.js`
- `./command/lifecycle.js`
- `./command/model-selection.js`
- `./command/post-run.js`
- `./command/prepare.js`
- `./command/run-embedded-attempt.js`
- `./command/runtime-loaders.js`
- `./command/session-helpers.js`
- `./command/session-preparation.js`
- `./command/session.js`
- `./commands-acp.js`
- `./commands-acp/shared.js`
- `./commands-acp/targets.js`
- `./commands-agent-scope.test-support.js`
- `./commands-allowlist.js`
- `./commands-approve.js`
- `./commands-args.js`
- `./commands-bash.js`
- `./commands-btw.js`
- `./commands-compact.js`
- `./commands-config.js`
- `./commands-context-command.js`
- `./commands-context-report.js`
- `./commands-context.js`
- `./commands-diagnostics.js`
- `./commands-dock.js`
- `./commands-export-common.js`
- `./commands-export-session-file.js`
- `./commands-export-session.js`
- `./commands-export-trajectory.js`
- `./commands-filesystem.test-support.js`
- `./commands-goal.js`
- `./commands-handlers.order.js`
- `./commands-info.js`
- `./commands-learn.js`
- `./commands-login.js`
- `./commands-mcp.js`
- `./commands-models.js`
- `./commands-name.js`
- `./commands-openclaw-cli.js`
- `./commands-plugin.js`
- `./commands-plugins-install.js`
- `./commands-plugins.js`
- `./commands-private-route.js`
- `./commands-registry-list.js`
- `./commands-registry-normalize.js`
- `./commands-registry.data.js`
- `./commands-registry.js`
- `./commands-registry.shared.js`
- `./commands-reset-hooks.js`
- `./commands-reset-mode.js`
- `./commands-reset.js`
- `./commands-session-abort.js`
- `./commands-session-abort.test-support.js`
- `./commands-session-store.js`
- `./commands-session.js`
- `./commands-setunset-standard.js`
- `./commands-setunset.js`
- `./commands-slash-parse.js`
- `./commands-status-subagents.js`
- `./commands-status.js`
- `./commands-steer.js`
- `./commands-steer.runtime.js`
- `./commands-subagents-dispatch.js`
- `./commands-subagents-text.js`
- `./commands-subagents.js`
- `./commands-subagents.test-helpers.js`
- `./commands-subagents/action-focus.js`
- `./commands-subagents/action-info.js`
- `./commands-subagents/action-log.js`
- `./commands-subagents/action-unfocus.js`
- `./commands-subagents/shared.js`
- `./commands-system-agent.js`
- `./commands-system-prompt.js`
- `./commands-tasks.js`
- `./commands-tts.js`
- `./commands-whoami.js`
- `./commands.flags.js`
- `./commands.js`
- `./commands.runtime.js`
- `./commands.test-harness.js`
- `./commitments.js`
- `./compact-reasons.js`
- `./compact.hooks.harness.js`
- `./compact.js`
- `./compaction-duplicate-user-messages.js`
- `./compaction-harness-model-provider.js`
- `./compaction-hooks.js`
- `./compaction-notice.js`
- `./compaction-planning-worker.js`
- `./compaction-planning-worker.test-support.js`
- `./compaction-planning.js`
- `./compaction-planning.worker.js`
- `./compaction-provider.js`
- `./compaction-runtime-context.js`
- `./compaction-safety-timeout.js`
- `./compaction-session-agent.js`
- `./compaction-successor-transcript.js`
- `./compaction-usage.js`
- `./compaction.js`
- `./compaction.test-support.js`
- `./compat/conversation-read-tools.js`
- `./compat/registry.js`
- `./completion-cli.js`
- `./completion-delivery-policy.js`
- `./completion-fish.js`
- `./completion-runtime.js`
- `./config-activation-shared.js`
- `./config-cli.js`
- `./config-commands.js`
- `./config-contracts.js`
- `./config-env-vars.js`
- `./config-journal-snapshot.js`
- `./config-mutations.js`
- `./config-normalization-shared.js`
- `./config-paths.js`
- `./config-policy.js`
- `./config-presence.js`
- `./config-recovery-hints.js`
- `./config-schema.js`
- `./config-set-input.js`
- `./config-set-parser.js`
- `./config-state.js`
- `./config-validation.js`
- `./config-value.js`
- `./config-write-authorization.js`
- `./config.backup-rotation.test-helpers.js`
- `./config.js`
- `./config/channel-configured-shared.js`
- `./config/config.js`
- `./config/sessions/paths.js`
- `./config/sessions/session-key.js`
- `./config/sessions/store.js`
- `./configure.channels.js`
- `./configure.commands.js`
- `./configure.daemon.js`
- `./configure.gateway-auth.js`
- `./configure.gateway.js`
- `./configure.shared.js`
- `./configure.wizard.js`
- `./configured-provider-fallback.js`
- `./console-sanitize.js`
- `./container-environment.js`
- `./container-target.js`
- `./content-blocks.js`
- `./context-cache.js`
- `./context-engine-capabilities.js`
- `./context-engine-maintenance.js`
- `./context-resolution.js`
- `./context-runtime-state.js`
- `./context-text.js`
- `./context-treemap.js`
- `./context-truncation-notice.js`
- `./context-visibility.js`
- `./context-window-guard.js`
- `./context.js`
- `./control-ui-assets.js`
- `./control-ui-css.js`
- `./conversation-binding-context.js`
- `./conversation-binding-input.js`
- `./conversation-binding-session-key.js`
- `./conversation-binding.js`
- `./conversation-binding.test-fixtures.js`
- `./conversation-capability-profile.js`
- `./conversation-label-generator.js`
- `./conversation-label.js`
- `./conversation-resolution.js`
- `./conversation-turn-capture.js`
- `./copilot-dynamic-headers.js`
- `./copilot-routing.js`
- `./core-tool-factory-descriptors.js`
- `./cron-cli.js`
- `./cron-limits.js`
- `./crypto-digest.js`
- `./current-plugin-metadata-snapshot.js`
- `./current-plugin-metadata-state.js`
- `./current-time.js`
- `./current-turn-images.js`
- `./cursor-acp-model.js`
- `./custom-api-registry.js`
- `./daemon-cli/register.js`
- `./daemon-install-helpers.js`
- `./daemon-install-plan.shared.js`
- `./daemon-install-runtime-warning.js`
- `./daemon-runtime.js`
- `./dangerous-name-matching.js`
- `./dashboard.js`
- `./date-time.js`
- `./debug-commands.js`
- `./dedupe.js`
- `./deep-merge.js`
- `./deepseek-text-filter.js`
- `./default-enablement.js`
- `./defaults.js`
- `./delegation-capability.js`
- `./delivery-evidence.js`
- `./delivery-hints.js`
- `./delivery-queue-sqlite.js`
- `./delivery-recovery.shared.js`
- `./dependency-denylist-packages.js`
- `./dependency-denylist.js`
- `./detect-binary.js`
- `./detect-package-manager.js`
- `./dev-source-root.js`
- `./device-auth-store.js`
- `./device-bootstrap.js`
- `./device-identity-coordinator.js`
- `./device-identity-legacy.js`
- `./device-identity-store.js`
- `./device-identity.js`
- `./device-pairing-migration.js`
- `./device-pairing-store.js`
- `./device-pairing.js`
- `./devices-cli.js`
- `./diagnostic-error-metadata.js`
- `./diagnostic-event-listener-presence.js`
- `./diagnostic-events.js`
- `./diagnostic-flags.js`
- `./diagnostic-llm-content.js`
- `./diagnostic-log-capture.js`
- `./diagnostic-redaction.js`
- `./diagnostic-trace-context.js`
- `./diagnostics-timeline.js`
- `./direct-dm.js`
- `./directive-handling.auth-profile.js`
- `./directive-handling.auth.js`
- `./directive-handling.defaults.js`
- `./directive-handling.directive-only.js`
- `./directive-handling.fast-lane.js`
- `./directive-handling.impl.js`
- `./directive-handling.levels.js`
- `./directive-handling.model-picker.js`
- `./directive-handling.model-runtime.js`
- `./directive-handling.model-selection.js`
- `./directive-handling.model.js`
- `./directive-handling.parse.js`
- `./directive-handling.persist.js`
- `./directive-handling.queue-validation.js`
- `./directive-handling.shared.js`
- `./directives.js`
- `./directory-cli.js`
- `./discovery.js`
- `./disk-space.js`
- `./dispatch-acp-command-bypass.js`
- `./dispatch-acp-delivery.js`
- `./dispatch-acp.js`
- `./dispatch-dispatcher.js`
- `./dispatch-from-config.abort-and-dedupe.test-utils.js`
- `./dispatch-from-config.abort.js`
- `./dispatch-from-config.audit.js`
- `./dispatch-from-config.base.test-utils.js`
- `./dispatch-from-config.context.js`
- `./dispatch-from-config.delivery-and-tts.test-utils.js`
- `./dispatch-from-config.harness-defaults.js`
- `./dispatch-from-config.hooks-and-send-policy.test-utils.js`
- `./dispatch-from-config.js`
- `./dispatch-from-config.lifecycle-and-bindings.test-utils.js`
- `./dispatch-from-config.lifecycle.js`
- `./dispatch-from-config.payloads.js`
- `./dispatch-from-config.pending-final.js`
- `./dispatch-from-config.plugin-binding.js`
- `./dispatch-from-config.progress.test-utils.js`
- `./dispatch-from-config.routing.test-utils.js`
- `./dispatch-from-config.runtime-loaders.js`
- `./dispatch-from-config.runtime.js`
- `./dispatch-from-config.send-policy-routing.test-utils.js`
- `./dispatch-from-config.shared.test-harness.js`
- `./dispatch-from-config.test-harness.js`
- `./dispatch-from-config.timing.js`
- `./dispatch-from-config.transcript.js`
- `./dispatch-wrapper-resolution.js`
- `./dispatcher-registry.js`
- `./display-text-sanitize.js`
- `./dns-cli.js`
- `./doc-baseline.js`
- `./docker-setup.e2e.test-support.js`
- `./docs-path.js`
- `./doctor-auth-flat-profiles.js`
- `./doctor-auth-legacy-oauth.js`
- `./doctor-auth-oauth-sidecar.js`
- `./doctor-auth-oauth-sidecar.test-support.js`
- `./doctor-auth.js`
- `./doctor-auth.test-support.js`
- `./doctor-bootstrap-size.js`
- `./doctor-browser.js`
- `./doctor-channel-ingress.js`
- `./doctor-claude-cli.js`
- `./doctor-command-owner.js`
- `./doctor-completion.js`
- `./doctor-config-analysis.js`
- `./doctor-config-audit-scrub.js`
- `./doctor-config-flow.js`
- `./doctor-config-flow.test-utils.js`
- `./doctor-config-preflight.js`
- `./doctor-contract-registry-loader-state.js`
- `./doctor-contract-registry.js`
- `./doctor-contract-registry.test-fixtures.js`
- `./doctor-disk-space.js`
- `./doctor-format.js`
- `./doctor-gateway-auth-token.js`
- `./doctor-gateway-health.js`
- `./doctor-gateway-services.js`
- `./doctor-heartbeat-main-session-repair.js`
- `./doctor-heartbeat-main-session-repair.test-support.js`
- `./doctor-heartbeat-session-target.js`
- `./doctor-heartbeat-template-repair.js`
- `./doctor-install-policy.js`
- `./doctor-install.js`
- `./doctor-lint.js`
- `./doctor-main-session-recovery.js`
- `./doctor-memory-search.js`
- `./doctor-platform-notes.js`
- `./doctor-plugin-generations.js`
- `./doctor-plugin-manifests.js`
- `./doctor-plugin-registry.js`
- `./doctor-post-upgrade.js`
- `./doctor-post-upgrade.types.js`
- `./doctor-prompter.js`
- `./doctor-repair-mode.js`
- `./doctor-sandbox.js`
- `./doctor-sandbox.test-support.js`
- `./doctor-security.js`
- `./doctor-service-audit.test-helpers.js`
- `./doctor-service-repair-policy.js`
- `./doctor-session-locks.js`
- `./doctor-session-snapshots.js`
- `./doctor-session-snapshots.test-support.js`
- `./doctor-session-sqlite-compact.js`
- `./doctor-session-sqlite-github-issue.js`
- `./doctor-session-sqlite-migration-run.js`
- `./doctor-session-sqlite-readers.js`
- `./doctor-session-sqlite-recover-report.js`
- `./doctor-session-sqlite-restore-report.js`
- `./doctor-session-sqlite-types.js`
- `./doctor-session-sqlite.js`
- `./doctor-session-state-providers.js`
- `./doctor-session-transcripts.js`
- `./doctor-skills-core.js`
- `./doctor-skills.js`
- `./doctor-sqlite-compact.js`
- `./doctor-sqlite-maintenance-lock.js`
- `./doctor-state-integrity-format.js`
- `./doctor-state-integrity.js`
- `./doctor-state-migration-fs.js`
- `./doctor-state-migrations.js`
- `./doctor-state-sqlite-compact.js`
- `./doctor-ui.js`
- `./doctor-update.js`
- `./doctor-usage-cost-cache.js`
- `./doctor-web-fetch-proxy.js`
- `./doctor-whatsapp-responsiveness.js`
- `./doctor-workspace-status.js`
- `./doctor-workspace.js`
- `./doctor.e2e-harness.js`
- `./doctor.fast-path-mocks.js`
- `./doctor.note-test-helpers.js`
- `./doctor/cron/store-migration.js`
- `./doctor/emit-notes.js`
- `./doctor/finalize-config-flow.js`
- `./doctor/shared/codex-route-model-ref.js`
- `./doctor/shared/codex-route-warnings.js`
- `./doctor/shared/config-flow-steps.js`
- `./doctor/shared/config-mutation-state.js`
- `./doctor/shared/default-account-warnings.js`
- `./doctor/shared/exec-safe-bins.js`
- `./doctor/shared/legacy-config-core-migrate.js`
- `./doctor/shared/legacy-config-core-normalizers.js`
- `./doctor/shared/legacy-config-issues.js`
- `./doctor/shared/legacy-config-migrations.js`
- `./doctor/shared/legacy-config-migrations.runtime.models.js`
- `./doctor/shared/legacy-config-record-shared.js`
- `./doctor/shared/legacy-config-state-migration-input.js`
- `./doctor/shared/legacy-oauth-sidecar.js`
- `./doctor/shared/plugin-registry-migration.js`
- `./doctor/shared/stale-agent-model-ref-repair.js`
- `./doctor/shared/update-phase.js`
- `./document-extractor-public-artifacts.js`
- `./document-extractors.runtime.js`
- `./dotenv-global.js`
- `./dotenv.js`
- `./draft-preview-finalizer.js`
- `./draft-stream-controls.js`
- `./draft-stream-loop.js`
- `./ed25519-signature.js`
- `./effective-plugin-ids.js`
- `./effective-reply-route.js`
- `./effective-tool-policy.js`
- `./elevated-allowlist-matcher.js`
- `./elevated-unavailable.js`
- `./embedded-agent-block-chunker.js`
- `./embedded-agent-error-observation.js`
- `./embedded-agent-helpers.js`
- `./embedded-agent-helpers/bootstrap.js`
- `./embedded-agent-helpers/errors.js`
- `./embedded-agent-helpers/failover-matches.js`
- `./embedded-agent-helpers/google.js`
- `./embedded-agent-helpers/sanitize-user-facing-text.js`
- `./embedded-agent-lsp.js`
- `./embedded-agent-mcp.js`
- `./embedded-agent-message-tool-source-reply.js`
- `./embedded-agent-messaging.js`
- `./embedded-agent-runner-extraparams.test-support.js`
- `./embedded-agent-runner.js`
- `./embedded-agent-runner.sanitize-session-history.test-harness.js`
- `./embedded-agent-runner/compact.runtime.js`
- `./embedded-agent-runner/compaction-safety-timeout.js`
- `./embedded-agent-runner/context-engine-maintenance.js`
- `./embedded-agent-runner/context-truncation-notice.js`
- `./embedded-agent-runner/delivery-evidence.js`
- `./embedded-agent-runner/effective-tool-policy.js`
- `./embedded-agent-runner/extensions.js`
- `./embedded-agent-runner/extra-params.js`
- `./embedded-agent-runner/extra-params.test-support.js`
- `./embedded-agent-runner/history.js`
- `./embedded-agent-runner/logger.js`
- `./embedded-agent-runner/model.js`
- `./embedded-agent-runner/model.static-catalog.js`
- `./embedded-agent-runner/replay-history.js`
- `./embedded-agent-runner/replay-state.js`
- `./embedded-agent-runner/result-fallback-classifier.js`
- `./embedded-agent-runner/run-state.js`
- `./embedded-agent-runner/run/abortable.js`
- `./embedded-agent-runner/run/attempt-tool-construction-plan.js`
- `./embedded-agent-runner/run/attempt.tool-call-normalization.js`
- `./embedded-agent-runner/run/incomplete-turn.js`
- `./embedded-agent-runner/run/payloads.js`
- `./embedded-agent-runner/runs.js`
- `./embedded-agent-runner/runs.test-support.js`
- `./embedded-agent-runner/sandbox-info.js`
- `./embedded-agent-runner/stream-resolution.js`
- `./embedded-agent-runner/tool-name-allowlist.js`
- `./embedded-agent-runner/tool-result-truncation.js`
- `./embedded-agent-runner/tool-send-receipts.js`
- `./embedded-agent-runner/tool-split.js`
- `./embedded-agent-runner/wait-for-idle-before-flush.js`
- `./embedded-agent-subscribe.callback.js`
- `./embedded-agent-subscribe.compaction-test-helpers.js`
- `./embedded-agent-subscribe.e2e-harness.js`
- `./embedded-agent-subscribe.handlers.compaction.js`
- `./embedded-agent-subscribe.handlers.compaction.runtime.js`
- `./embedded-agent-subscribe.handlers.js`
- `./embedded-agent-subscribe.handlers.lifecycle.js`
- `./embedded-agent-subscribe.handlers.messages.js`
- `./embedded-agent-subscribe.handlers.messages.test-support.js`
- `./embedded-agent-subscribe.handlers.tools.js`
- `./embedded-agent-subscribe.js`
- `./embedded-agent-subscribe.openai-responses.test-helpers.js`
- `./embedded-agent-subscribe.promise.js`
- `./embedded-agent-subscribe.raw-stream.js`
- `./embedded-agent-subscribe.tool-text-diagnostics.js`
- `./embedded-agent-subscribe.tools.js`
- `./embedded-agent-subscribe.tools.test-support.js`
- `./embedded-agent-utils.js`
- `./embedded-mode.js`
- `./embedded-plugin-approval-broker.js`
- `./embedding-provider-config.js`
- `./embedding-provider-runtime-shared.js`
- `./embedding-providers.js`
- `./emit-notes.js`
- `./empty-assistant-turn.js`
- `./enable.js`
- `./entry.compile-cache.js`
- `./entry.compile-cache.test-support.js`
- `./entry.js`
- `./entry.respawn.js`
- `./entry.version-fast-path.js`
- `./env-preserve.js`
- `./env-substitution.js`
- `./env-vars.js`
- `./env.js`
- `./envelope.js`
- `./error-format.js`
- `./errors.js`
- `./event-loop-health.js`
- `./event-session-routing.js`
- `./exec-allowlist-pattern.js`
- `./exec-approval-channel-runtime.js`
- `./exec-approval-command-display.js`
- `./exec-approval-forwarder.js`
- `./exec-approval-policy-snapshot.js`
- `./exec-approval-reply.js`
- `./exec-approval-result.js`
- `./exec-approval-session-target.js`
- `./exec-approval-surface.js`
- `./exec-approvals-allowlist.js`
- `./exec-approvals-analysis.js`
- `./exec-approvals-cli.js`
- `./exec-approvals-denylist.js`
- `./exec-approvals-test-helpers.js`
- `./exec-approvals.js`
- `./exec-authorization-plan.js`
- `./exec-authorization-render.js`
- `./exec-auto-review.js`
- `./exec-auto-reviewer.js`
- `./exec-auto-reviewer.prompt.js`
- `./exec-command-highlighting.js`
- `./exec-command-resolution.js`
- `./exec-defaults.js`
- `./exec-host.js`
- `./exec-output.js`
- `./exec-policy-cli.js`
- `./exec-policy.js`
- `./exec-result.js`
- `./exec-route-policy.js`
- `./exec-runner.js`
- `./exec-safe-bin-policy-profiles.js`
- `./exec-safe-bin-policy.js`
- `./exec-safe-bin-runtime-policy.js`
- `./exec-safe-bin-semantics.js`
- `./exec-safe-bin-trust.js`
- `./exec-safe-builtins.js`
- `./exec-safety.js`
- `./exec-spawn.js`
- `./exec-termination.js`
- `./exec-wrapper-resolution.js`
- `./exec-wrapper-tokens.js`
- `./exec-wrapper-trust-plan.js`
- `./exec.js`
- `./executable-path.js`
- `./execution-auth-binding.js`
- `./execution-contract.js`
- `./export-trajectory.js`
- `./extensions.js`
- `./externalized-bundled-plugins.js`
- `./extra-params.js`
- `./extra-params.test-support.js`
- `./failover-error.js`
- `./failover-policy.js`
- `./failure-output.js`
- `./failure-signal.js`
- `./fallback-skip-cache.js`
- `./fallback-skip-cache.test-support.js`
- `./fallback-state.js`
- `./fast-mode.js`
- `./fatal-error-hooks.js`
- `./feedback-reflection.js`
- `./fetch-headers.js`
- `./fetch.js`
- `./ffmpeg-exec.js`
- `./ffmpeg-limits.js`
- `./file-context.js`
- `./file-lock.js`
- `./finalize-config-flow.js`
- `./fingerprint.js`
- `./fixed-window-rate-limit.js`
- `./flows.js`
- `./followup-delivery.js`
- `./followup-runner.js`
- `./format-time/format-datetime.js`
- `./format-time/format-duration-internal.js`
- `./format-time/format-relative.ts`
- `./fresh-install-config.js`
- `./fs-safe-advanced.js`
- `./fs-safe-defaults.js`
- `./fs-safe-remove.js`
- `./fs-safe.js`
- `./future-version-guard.js`
- `./gateway-active-work.js`
- `./gateway-boot-lifecycle.js`
- `./gateway-cli.js`
- `./gateway-cli/runtime-hooks.js`
- `./gateway-control-ui-origins.js`
- `./gateway-dispatch-config.js`
- `./gateway-env-selection.js`
- `./gateway-health-auth-diagnostic.js`
- `./gateway-install-token.js`
- `./gateway-install-token.persist.runtime.js`
- `./gateway-lock.js`
- `./gateway-port-option.js`
- `./gateway-presence.js`
- `./gateway-process-argv.js`
- `./gateway-readiness.js`
- `./gateway-rpc.js`
- `./gateway-run-argv.js`
- `./gateway-secret-options.js`
- `./gateway-startup-plugin-ids.js`
- `./gateway-startup-speech-providers.js`
- `./gateway-status.js`
- `./gateway-status/discovery.js`
- `./gateway-status/helpers.js`
- `./gateway-status/output.js`
- `./gateway-status/probe-run.js`
- `./gateway-status/test-support.js`
- `./gateway-supervision.js`
- `./gateway-suspend-coordinator.js`
- `./gateway-work-admission.js`
- `./gateway-work-admission.test-helpers.js`
- `./gateway.js`
- `./gemini-auth.js`
- `./generated-attachments.js`
- `./generated-media-direct-delivery-wake.js`
- `./generated-plugin-test-helpers.js`
- `./get-reply-directive-aliases.js`
- `./get-reply-directives-apply.js`
- `./get-reply-directives-utils.js`
- `./get-reply-directives.js`
- `./get-reply-exec-overrides.js`
- `./get-reply-fast-path.js`
- `./get-reply-fast-path.test-support.js`
- `./get-reply-inline-actions.js`
- `./get-reply-native-slash-fast-path.js`
- `./get-reply-run-queue.js`
- `./get-reply-run.js`
- `./get-reply.test-fixtures.js`
- `./get-reply.test-loader.js`
- `./get-reply.test-mocks.js`
- `./get-reply.test-runtime-mocks.js`
- `./get-reply.types.js`
- `./git-install.js`
- `./git-root.js`
- `./glob-pattern.js`
- `./global-state.js`
- `./globals.js`
- `./google-api-base-url.js`
- `./google-prompt-cache.js`
- `./google-simple-completion-stream.js`
- `./gpt5-prompt-overlay.js`
- `./group-activation.js`
- `./group-id-simple.js`
- `./group-id.js`
- `./group-policy.js`
- `./group-scope-tree.js`
- `./groups.js`
- `./handler.js`
- `./hardlink-policy.js`
- `./harness-runtimes.js`
- `./harness/agent-end-side-effects.js`
- `./harness/context-engine-lifecycle.js`
- `./harness/errors.js`
- `./harness/hook-context.js`
- `./harness/hook-helpers.js`
- `./harness/hook-history.js`
- `./harness/lifecycle-hook-helpers.js`
- `./harness/policy.js`
- `./harness/registry.js`
- `./harness/runtime-plugin.js`
- `./harness/selection.js`
- `./harness/support.js`
- `./harness/user-input-bridge.js`
- `./health-format.js`
- `./health-state.js`
- `./health.js`
- `./heartbeat-active-hours.js`
- `./heartbeat-cooldown.js`
- `./heartbeat-delivery-normalization.js`
- `./heartbeat-events-filter.js`
- `./heartbeat-events.js`
- `./heartbeat-filter.js`
- `./heartbeat-outcome-store.js`
- `./heartbeat-reason.js`
- `./heartbeat-reply-payload.js`
- `./heartbeat-run-scope.js`
- `./heartbeat-runner.js`
- `./heartbeat-runner.test-harness.js`
- `./heartbeat-runner.test-utils.js`
- `./heartbeat-schedule.js`
- `./heartbeat-summary.js`
- `./heartbeat-system-prompt.js`
- `./heartbeat-terminal-tool-failure.js`
- `./heartbeat-tool-response.js`
- `./heartbeat-typing.js`
- `./heartbeat-visibility.js`
- `./heartbeat-wake-policy.js`
- `./heartbeat-wake.js`
- `./heartbeat.js`
- `./help-format.js`
- `./helper.cjs`
- `./helper.js`
- `./history-media.js`
- `./history.js`
- `./home-dir.js`
- `./hook-agent-context.js`
- `./hook-decision-types.js`
- `./hook-install-persistence.js`
- `./hook-runner-global-state.js`
- `./hook-runner-global.js`
- `./hook-system-context-boundary.js`
- `./hooks-cli.js`
- `./hooks-request-handler.js`
- `./hooks.js`
- `./hooks.test-fixtures.js`
- `./hooks.test-helpers.js`
- `./host-env-security-policy.js`
- `./host-env-security-policy.json`
- `./host-env-security.js`
- `./host-hook-attachments.js`
- `./host-hook-cleanup-timeout.js`
- `./host-hook-cleanup.js`
- `./host-hook-json.js`
- `./host-hook-runtime.js`
- `./host-hook-scheduled-turns.js`
- `./host-hook-state.js`
- `./host-hooks.js`
- `./host-tool-param-parsers.js`
- `./http-body.js`
- `./http-error-body.js`
- `./http-listen.js`
- `./http-path.js`
- `./http-registry.js`
- `./http-response-body-timeout.js`
- `./http-route-overlap.js`
- `./http-work-admission.js`
- `./i18n/index.js`
- `./identity-avatar-file.js`
- `./identity-avatar.js`
- `./identity-file.js`
- `./identity.js`
- `./ids.js`
- `./image-generation-task-status.js`
- `./image-ops.js`
- `./image-sanitization.js`
- `./implicit-mentions.js`
- `./inbound-context.js`
- `./inbound-debounce-policy.js`
- `./inbound-debounce.js`
- `./inbound-dedupe.js`
- `./inbound-event/context.js`
- `./inbound-event/envelope.js`
- `./inbound-media.js`
- `./inbound-meta.js`
- `./inbound-text.js`
- `./includes-scan.js`
- `./includes.js`
- `./index.js`
- `./infra/env.js`
- `./infra/errors.js`
- `./infra/fatal-error-hooks.js`
- `./infra/fs-safe.js`
- `./infra/home-dir.js`
- `./infra/is-main.js`
- `./infra/non-fatal-cleanup.js`
- `./infra/openclaw-exec-env.js`
- `./infra/plain-object.js`
- `./infra/ports.js`
- `./infra/unhandled-rejections.js`
- `./infra/warning-filter.js`
- `./inherited-tool-deny.js`
- `./inline-option-token.js`
- `./inspect-shape.js`
- `./install-channel-specs.js`
- `./install-flow.js`
- `./install-from-npm-spec.js`
- `./install-installed-package.js`
- `./install-managed-npm-state.js`
- `./install-managed-npm.js`
- `./install-mode-options.js`
- `./install-npm-metadata.js`
- `./install-npm-resolution.js`
- `./install-overrides.js`
- `./install-package-dir.js`
- `./install-paths.js`
- `./install-persistence.js`
- `./install-policy-context.js`
- `./install-provenance.js`
- `./install-record-commit.js`
- `./install-safe-path.js`
- `./install-security-scan.js`
- `./install-shared.js`
- `./install-source-info.js`
- `./install-source-utils.js`
- `./install-spec.js`
- `./install-target.js`
- `./install-types.js`
- `./install.js`
- `./installed-apps.js`
- `./installed-plugin-index-config-path-scope.js`
- `./installed-plugin-index-hash.js`
- `./installed-plugin-index-install-records.js`
- `./installed-plugin-index-manifest.js`
- `./installed-plugin-index-policy.js`
- `./installed-plugin-index-record-builder.js`
- `./installed-plugin-index-record-cache.js`
- `./installed-plugin-index-record-reader.js`
- `./installed-plugin-index-records.js`
- `./installed-plugin-index-registry.js`
- `./installed-plugin-index-scope-lookup.js`
- `./installed-plugin-index-store-path.js`
- `./installed-plugin-index-store.js`
- `./installed-plugin-index-types.js`
- `./installed-plugin-index.js`
- `./installs.js`
- `./interactive-binding-helpers.js`
- `./interactive-registry.js`
- `./interactive-registry.test-fixtures.js`
- `./interactive-shared.js`
- `./interactive-state.js`
- `./interactive.js`
- `./internal-event-contract.js`
- `./internal-events.js`
- `./internal-runtime-context.js`
- `./internal-session-effects.js`
- `./invalid-config-recovery.js`
- `./io.audit.js`
- `./io.audit.test-support.js`
- `./io.clobber-snapshot.js`
- `./io.context.js`
- `./io.factory.js`
- `./io.health-state.js`
- `./io.invalid-config.js`
- `./io.js`
- `./io.load.js`
- `./io.meta.js`
- `./io.observe-recovery.js`
- `./io.observe-suspicious.js`
- `./io.observe.js`
- `./io.owner-display-secret.js`
- `./io.read-helpers.js`
- `./io.recovery.js`
- `./io.snapshot-shared.js`
- `./io.snapshot.js`
- `./io.state.js`
- `./io.types.js`
- `./io.warnings.js`
- `./io.write-prepare.js`
- `./io.write-safety.js`
- `./io.write.js`
- `./is-main.js`
- `./issue-format.js`
- `./issue-location.js`
- `./json-file.js`
- `./json-files.js`
- `./json-output-mode.js`
- `./json-unsafe-integers.js`
- `./json-utf8-bytes.js`
- `./json5-comments.js`
- `./jsonl-socket.js`
- `./kill-tree.js`
- `./kysely-sync.js`
- `./lanes.js`
- `./lazy-exec-tool.js`
- `./lazy-service-module.js`
- `./legacy-config-detection.test-support.js`
- `./legacy-json-object-stream.js`
- `./legacy-names.js`
- `./legacy-npm-declaration.js`
- `./legacy.js`
- `./legacy.shared.js`
- `./linux-oom-score.js`
- `./live-auth-keys.js`
- `./live-cache-regression-baseline.js`
- `./live-cache-regression-policy.js`
- `./live-cache-regression-runner.js`
- `./live-cache-test-support.js`
- `./live-model-dynamic-candidates.js`
- `./live-model-errors.js`
- `./live-model-filter.js`
- `./live-model-switch-error.js`
- `./live-model-turn-probes.js`
- `./live-provider-owner.js`
- `./live-target-matcher.js`
- `./live-test-helpers.js`
- `./live-test-provider-drift.js`
- `./live-test-provider-drift.test-support.js`
- `./load-options.js`
- `./loader-activating-lock.js`
- `./loader-cache-instances.js`
- `./loader-cache-state.js`
- `./loader-cache.js`
- `./loader-channel-runtime.js`
- `./loader-channel-setup.js`
- `./loader-discovery.js`
- `./loader-load-context.js`
- `./loader-module-runtime.js`
- `./loader-provenance.js`
- `./loader-records.js`
- `./loader-registration-plan.js`
- `./loader-runtime-candidate.js`
- `./loader-runtime-load.js`
- `./loader-shared.js`
- `./loader.activation.test-utils.js`
- `./loader.base.test-utils.js`
- `./loader.discovery-and-security.test-utils.js`
- `./loader.hooks-and-runtime.test-utils.js`
- `./loader.js`
- `./loader.registration.test-utils.js`
- `./loader.test-fixtures.js`
- `./loader.test-harness.js`
- `./lobster-art.js`
- `./lobster-art.ts`
- `./local-coder-artifacts.js`
- `./local-media-access.js`
- `./local-media-path.js`
- `./local-model-lean-auto.js`
- `./local-model-lean.js`
- `./local-repository.js`
- `./local-roots.js`
- `./location.js`
- `./log-level-option.js`
- `./logger.js`
- `./logging.js`
- `./logging/console.js`
- `./logging/levels.js`
- `./logging/logger.js`
- `./logging/subsystem.js`
- `./logs-cli.js`
- `./logs-cli.runtime.js`
- `./machine-token-assertion.js`
- `./machine-token-cache.js`
- `./machine-token-discovery.js`
- `./machine-token-fetch.js`
- `./machine-token-fingerprint.js`
- `./machine-token-host.js`
- `./machine-token-network.js`
- `./machine-token-types.js`
- `./machine-token.js`
- `./main-session-recovery-clear.js`
- `./main-session-recovery-lifecycle.js`
- `./main-session-recovery-owner-release.js`
- `./main-session-recovery-restore.js`
- `./main-session-recovery-state.js`
- `./main-session-recovery-store.js`
- `./main-session-restart-claim.js`
- `./main-session-restart-dispatch.js`
- `./main-session-restart-recovery-failure.js`
- `./main-session-restart-recovery.js`
- `./managed-npm-retention.js`
- `./manifest-command-aliases.js`
- `./manifest-contract-eligibility.js`
- `./manifest-contract-runtime.js`
- `./manifest-metadata-scan.js`
- `./manifest-model-id-normalization.js`
- `./manifest-model-suppression.js`
- `./manifest-owner-policy.js`
- `./manifest-registry-installed.js`
- `./manifest-registry.js`
- `./manifest-tool-availability.js`
- `./manifest.js`
- `./manual-compaction-boundary.js`
- `./map-size.js`
- `./markdown-tables.js`
- `./marketplace.js`
- `./materialize.js`
- `./mcp-app-channel-action.js`
- `./mcp-app-model-context.js`
- `./mcp-app-sandbox.js`
- `./mcp-auth-profile.js`
- `./mcp-cli.js`
- `./mcp-commands.js`
- `./mcp-config-normalize.js`
- `./mcp-config-shared.js`
- `./mcp-config.js`
- `./mcp-connection-resolver.js`
- `./mcp-content.js`
- `./mcp-http-fetch.js`
- `./mcp-http.js`
- `./mcp-json-schema-validator.js`
- `./mcp-metadata.js`
- `./mcp-oauth-fetch.js`
- `./mcp-oauth-provider.js`
- `./mcp-oauth-store.js`
- `./mcp-oauth.js`
- `./mcp-stdio-transport.js`
- `./mcp-stdio.js`
- `./mcp-tool-filter-registration.js`
- `./mcp-tool-filter-resolver.js`
- `./mcp-transport-config.js`
- `./mcp-transport.js`
- `./mcp-ui-resource.js`
- `./mcp-ui-resource.test-support.js`
- `./media-audio-field-metadata.js`
- `./media-generation-task-status-shared.js`
- `./media-generation-task-status-shared.test-support.js`
- `./media-note.js`
- `./media-reference-comparison.js`
- `./media-reference.js`
- `./media-services.js`
- `./media-understanding.test-fixtures.js`
- `./memory-embedding-providers.js`
- `./memory-flush.js`
- `./memory-prompt-prepare.js`
- `./memory-search.js`
- `./memory-state.js`
- `./memory-state.test-fixtures.js`
- `./mention-gating.js`
- `./mentions.js`
- `./merge-patch.js`
- `./message-action-discovery-input.js`
- `./message-format.js`
- `./message-preprocess-hooks.js`
- `./message-secret-scope.js`
- `./message/live.js`
- `./message/reply-pipeline.js`
- `./migrate/apply.js`
- `./migrate/output.js`
- `./migrate/providers.js`
- `./migrate/selection.js`
- `./migrate/skill-selection-prompt.js`
- `./min-host-version.js`
- `./minimax-vlm.js`
- `./missing-dependency.cjs`
- `./model-alias-lines.js`
- `./model-auth-availability.js`
- `./model-auth-env-vars.js`
- `./model-auth-env.js`
- `./model-auth-label.js`
- `./model-auth-markers.js`
- `./model-auth-runtime-shared.js`
- `./model-auth.js`
- `./model-catalog-browse.js`
- `./model-catalog-lookup.js`
- `./model-catalog-registration.js`
- `./model-catalog-route.js`
- `./model-catalog-scope.js`
- `./model-catalog-visibility.js`
- `./model-catalog.js`
- `./model-context-tokens.js`
- `./model-discovery-context.js`
- `./model-extra-params.js`
- `./model-fallback-observation.js`
- `./model-fallback.js`
- `./model-fallback.test-support.js`
- `./model-input.js`
- `./model-max-tokens-params.js`
- `./model-overrides.js`
- `./model-picker-visibility.js`
- `./model-picker.js`
- `./model-policy-allowlist-migration.js`
- `./model-policy-ref.js`
- `./model-provider-auth-state.js`
- `./model-provider-auth.js`
- `./model-provider-auth.worker.js`
- `./model-provider-config.js`
- `./model-ref-profile.js`
- `./model-ref-shared.js`
- `./model-runtime-aliases.js`
- `./model-runtime-binding.js`
- `./model-runtime-policy.js`
- `./model-runtime.js`
- `./model-scan.js`
- `./model-selection-cli.js`
- `./model-selection-config.js`
- `./model-selection-directive.js`
- `./model-selection-display.js`
- `./model-selection-normalize.js`
- `./model-selection-resolve.js`
- `./model-selection-shared.js`
- `./model-selection.js`
- `./model-suppression.js`
- `./model-thinking-default.js`
- `./model-tool-support.js`
- `./model-transport-debug.js`
- `./model-transport-url.js`
- `./model-visibility-policy.js`
- `./model.compat.js`
- `./model.forward-compat.test-support.js`
- `./model.inline-provider.js`
- `./model.js`
- `./model.provider-normalization.js`
- `./model.provider-runtime.test-support.js`
- `./model.static-catalog.js`
- `./model.static-id.js`
- `./model.test-harness.js`
- `./models-cli.js`
- `./models-config-state.js`
- `./models-config-state.test-support.js`
- `./models-config.e2e-harness.js`
- `./models-config.js`
- `./models-config.merge.js`
- `./models-config.plan.js`
- `./models-config.plan.test-support.js`
- `./models-config.providers.implicit.js`
- `./models-config.providers.implicit.test-support.js`
- `./models-config.providers.js`
- `./models-config.providers.keys.js`
- `./models-config.providers.normalize.js`
- `./models-config.providers.policy.js`
- `./models-config.providers.policy.lookup.js`
- `./models-config.providers.policy.runtime.js`
- `./models-config.providers.secret-helpers.js`
- `./models-config.providers.secrets.js`
- `./models-config.providers.source-managed.js`
- `./models-config.test-support.js`
- `./models-config.test-utils.js`
- `./models/alias-name.js`
- `./models/auth.js`
- `./models/fallbacks.js`
- `./models/list.manifest-catalog.js`
- `./models/set.js`
- `./module-export.js`
- `./mutate.js`
- `./mutation-conflict.js`
- `./native-command-session-targets.js`
- `./native-hook-relay-cli.js`
- `./native-module-require.js`
- `./navigation-prompter.js`
- `./net/hostname.js`
- `./net/proxy-fetch.js`
- `./net/proxy/active-proxy-state.js`
- `./net/proxy/proxy-lifecycle.js`
- `./network-discovery-display.js`
- `./network-interfaces.js`
- `./nix-mode-write-guard.js`
- `./node-commands.js`
- `./node-daemon-install-helpers.js`
- `./node-extra-ca-certs.js`
- `./node-http-proxy.js`
- `./node-pairing-authz.js`
- `./node-pairing-migration.js`
- `./node-pairing-surface.js`
- `./node-pairing.js`
- `./node-plugin-tools.js`
- `./node-shell.js`
- `./node-sqlite.js`
- `./node-startup-env.js`
- `./nodes-camera.js`
- `./nodes-cli.js`
- `./nodes-cli/rpc.js`
- `./nodes-media-utils.js`
- `./non-clawhub-install-acknowledgement.js`
- `./non-fatal-cleanup.js`
- `./non-interactive-prompter.js`
- `./noncoding-route.js`
- `./normalize-exec-safe-bin.js`
- `./normalize-paths.js`
- `./normalize-reply.js`
- `./npm-install-env.js`
- `./npm-integrity.js`
- `./npm-managed-root.js`
- `./npm-pack-install.js`
- `./npm-project-roots.js`
- `./npm-registry-spec.js`
- `./npm-resolution.js`
- `./official-external-install-records.js`
- `./official-external-install-trust.js`
- `./official-external-plugin-bundled-catalogs.js`
- `./official-external-plugin-catalog-envelope.js`
- `./official-external-plugin-catalog-snapshot-store.js`
- `./official-external-plugin-catalog.js`
- `./official-external-plugin-repair-hints.js`
- `./official-external-provider-endpoints.js`
- `./onboard-browser-handoff.js`
- `./onboard-channels.js`
- `./onboard-config.js`
- `./onboard-custom-config.js`
- `./onboard-custom.js`
- `./onboard-guided-manual.js`
- `./onboard-guided.js`
- `./onboard-helpers.js`
- `./onboard-hooks.js`
- `./onboard-inference.js`
- `./onboard-inference.test-support.js`
- `./onboard-interactive-runner.js`
- `./onboard-interactive.js`
- `./onboard-non-interactive.js`
- `./onboard-non-interactive.test-helpers.js`
- `./onboard-non-interactive/api-keys.js`
- `./onboard-non-interactive/local.js`
- `./onboard-non-interactive/local.test-support.js`
- `./onboard-non-interactive/local/auth-choice-inference.js`
- `./onboard-non-interactive/local/gateway-config.js`
- `./onboard-non-interactive/remote.js`
- `./onboard-recommendations.js`
- `./onboard-remote-gateway.js`
- `./onboard-remote.js`
- `./onboard-search.js`
- `./onboard-skills.js`
- `./onboard-skills.test-support.js`
- `./onboard.js`
- `./onboarding-plugin-install.js`
- `./onboarding-plugin-install.test-support.js`
- `./one-shot-exit.js`
- `./openai-compatible-conversation-turn.js`
- `./openai-compatible-embedding-provider.js`
- `./openai-completions-compat.js`
- `./openai-completions-compat.test-support.js`
- `./openai-completions-string-content.js`
- `./openai-completions-transport.js`
- `./openai-model-routes.js`
- `./openai-reasoning-compat.js`
- `./openai-responses-payload-policy.js`
- `./openai-responses-replay.js`
- `./openai-responses-terminal-outcome.js`
- `./openai-responses-transport.js`
- `./openai-routing.js`
- `./openai-strict-tool-setting.js`
- `./openai-transport-params.js`
- `./openai-transport-shared.js`
- `./openai-transport-stream.js`
- `./openai-transport-stream.test-harness.js`
- `./openai-transport-stream.test-support.js`
- `./openclaw-exec-env.js`
- `./openclaw-plugin-tools.js`
- `./openclaw-root.fs.runtime.js`
- `./openclaw-root.js`
- `./openclaw-tools.generation.test-support.js`
- `./openclaw-tools.js`
- `./openclaw-tools.media-factory-plan.js`
- `./openclaw-tools.nodes-workspace-guard.js`
- `./openclaw-tools.plugin-context.js`
- `./openclaw-tools.registration.js`
- `./openclaw-tools.subagents.sessions-spawn.test-harness.js`
- `./openclaw-tools.subagents.test-harness.js`
- `./openclaw-tools.swarm.js`
- `./operation-retry.js`
- `./origin-routing.js`
- `./os-summary.js`
- `./outbound-send-mapping.js`
- `./outbound/deliver-types.js`
- `./outbound/identity.js`
- `./outbound/session-binding-normalization.js`
- `./outbound/session-context.js`
- `./outbound/targets.js`
- `./outbound/targets.test-helpers.js`
- `./owner-display.js`
- `./package-compat.js`
- `./package-dist-inventory.js`
- `./package-entry-resolution.js`
- `./package-entrypoints.js`
- `./package-json.js`
- `./package-manager-exec-wrapper.js`
- `./package-tag.js`
- `./package-update-steps.js`
- `./pairing-cli.js`
- `./pairing-files.js`
- `./pairing-token.js`
- `./param-key.js`
- `./parse-bytes.js`
- `./parse-duration.js`
- `./parse-finite-number.js`
- `./parse-port.js`
- `./parse-timeout.js`
- `./parse.js`
- `./path-alias-guards.js`
- `./path-env.js`
- `./path-guards.js`
- `./path-policy.js`
- `./path-prepend.js`
- `./path-safety.js`
- `./paths.js`
- `./payload`
- `./payload-redaction.js`
- `./payload.js`
- `./pdf-extract.js`
- `./pending-final-delivery.js`
- `./pending-tool-task-drain.js`
- `./plain-object.js`
- `./plugin-approval-canonical-decisions.js`
- `./plugin-approvals.js`
- `./plugin-auto-enable.detect.js`
- `./plugin-auto-enable.js`
- `./plugin-auto-enable.prefer-over.js`
- `./plugin-auto-enable.shared.js`
- `./plugin-auto-enable.test-helpers.js`
- `./plugin-cache-primitives.js`
- `./plugin-control-plane-context.js`
- `./plugin-install-config-policy.js`
- `./plugin-install-path-warnings.js`
- `./plugin-install-plan.js`
- `./plugin-lifecycle-trace.js`
- `./plugin-load-profile.js`
- `./plugin-lookup-table.js`
- `./plugin-metadata-lifecycle.js`
- `./plugin-metadata-snapshot.js`
- `./plugin-model-catalog.js`
- `./plugin-module-loader-cache.js`
- `./plugin-peer-link.js`
- `./plugin-policy-id.js`
- `./plugin-registration-transaction.js`
- `./plugin-registry-contributions.js`
- `./plugin-registry-id-normalizer.js`
- `./plugin-registry-loader.js`
- `./plugin-registry-snapshot.js`
- `./plugin-registry.js`
- `./plugin-route-runtime-scopes.js`
- `./plugin-runtime-activation.js`
- `./plugin-runtime-artifact-identity.js`
- `./plugin-runtime-artifact-resolution.js`
- `./plugin-scan-existence-cache.js`
- `./plugin-scope.js`
- `./plugin-sdk-native-resolver.js`
- `./plugin-sdk/browser-host-inspection.js`
- `./plugin-sdk/browser-maintenance.js`
- `./plugin-snapshot-fingerprint.js`
- `./plugin-text-transforms.js`
- `./plugin-tool-delivery-defaults.js`
- `./plugin-version-drift.js`
- `./plugin-web-search-config.js`
- `./plugins-allowlist.js`
- `./plugins-authoring-command.js`
- `./plugins-cli-test-helpers.js`
- `./plugins-command-helpers.js`
- `./plugins-commands.js`
- `./plugins-config.js`
- `./plugins-http.js`
- `./plugins-http/path-context.js`
- `./plugins-http/route-auth.js`
- `./plugins-http/route-match.js`
- `./plugins-install-command.js`
- `./plugins-install-command.test-support.js`
- `./plugins-install-records.js`
- `./plugins-json-logger.js`
- `./plugins-list-format.js`
- `./plugins-location-bridges.js`
- `./plugins-uninstall-selection.js`
- `./plugins-update-command.js`
- `./plugins-update-gateway-signal.js`
- `./plugins-update-outcomes.js`
- `./plugins-update-selection.js`
- `./plugins/bundled-ids.js`
- `./plugins/bundled.js`
- `./plugins/channel-meta.js`
- `./plugins/index.js`
- `./plugins/registry.js`
- `./plugins/session-conversation.js`
- `./plugins/target-parsing-loaded.js`
- `./plugins/thread-binding-api.js`
- `./png-encode.js`
- `./poll-params.js`
- `./polls.js`
- `./port-defaults.js`
- `./ports-format.js`
- `./ports-inspect.js`
- `./ports-lsof.js`
- `./ports-netstat.js`
- `./ports-probe.js`
- `./ports.js`
- `./post-compaction-context.js`
- `./post-compaction-loop-guard.js`
- `./preauth-connection-budget.js`
- `./precomputed-help.js`
- `./prepared-model-catalog.js`
- `./prepared-model-registry.js`
- `./prepared-model-runtime.js`
- `./prepared-model-runtime.owner.js`
- `./presence-events.js`
- `./private-file-store.js`
- `./private-message-tool-final.js`
- `./private-temp-workspace.js`
- `./process-respawn.js`
- `./process/child-process-bridge.js`
- `./process/respawn-child-runner.js`
- `./profile-manifest.js`
- `./profile-utils.js`
- `./profile.js`
- `./program.js`
- `./program.nodes-test-helpers.js`
- `./program.test-mocks.js`
- `./program/command-registry-core.js`
- `./program/command-suggestions.js`
- `./program/command-tree.js`
- `./program/core-command-descriptors.js`
- `./program/help.js`
- `./program/helpers.js`
- `./program/json-mode.js`
- `./program/parent-default-help.js`
- `./program/program-context.js`
- `./program/register.subclis-core.js`
- `./program/routes.js`
- `./program/subcli-descriptors.js`
- `./progress-draft-compositor.js`
- `./progress-draft-lines.js`
- `./progress-draft-status-text.js`
- `./progress-narrator-model.js`
- `./progress-narrator.js`
- `./progress.js`
- `./promised-work-prompt.js`
- `./promotions-feed.js`
- `./prompt-cache-observability.js`
- `./prompt-cache-retention.js`
- `./prompt-prelude.js`
- `./prompt-session-context.js`
- `./prompt-surface.js`
- `./prompt.js`
- `./prompts.js`
- `./prototype-keys.js`
- `./provider-api-families.js`
- `./provider-api-key-auth.js`
- `./provider-attribution.js`
- `./provider-auth-aliases.js`
- `./provider-auth-aliases.test-support.js`
- `./provider-auth-choice-helpers.js`
- `./provider-auth-choices.js`
- `./provider-auth-helpers.js`
- `./provider-auth-input.js`
- `./provider-auth-mode.js`
- `./provider-auth-ref.js`
- `./provider-catalog-result.js`
- `./provider-catalog-unified-text.js`
- `./provider-catalog.js`
- `./provider-config-owner.js`
- `./provider-discovery.js`
- `./provider-discovery.runtime.js`
- `./provider-hook-runtime.js`
- `./provider-http-errors.js`
- `./provider-install-catalog.js`
- `./provider-local-service.js`
- `./provider-model-auth-source-plan.js`
- `./provider-model-compat.js`
- `./provider-model-helpers.js`
- `./provider-model-normalization.runtime.js`
- `./provider-model-primary.js`
- `./provider-model-route-auth.js`
- `./provider-model-route.js`
- `./provider-model-routes.js`
- `./provider-oauth-flow.js`
- `./provider-openai-chatgpt-oauth.js`
- `./provider-policy-surface.js`
- `./provider-policy.js`
- `./provider-public-artifacts.js`
- `./provider-registry-shared.js`
- `./provider-replay-helpers.js`
- `./provider-request-config.js`
- `./provider-request-error-classifier.js`
- `./provider-runtime.js`
- `./provider-runtime.test-support.js`
- `./provider-secret-egress.js`
- `./provider-self-hosted-setup.js`
- `./provider-stream.js`
- `./provider-thinking-active.js`
- `./provider-tool-policy.js`
- `./provider-transport-fetch.js`
- `./provider-transport-stream.js`
- `./provider-usage-plugin-runtime.test-mocks.js`
- `./provider-usage.auth.js`
- `./provider-usage.fetch.claude.js`
- `./provider-usage.fetch.codex.js`
- `./provider-usage.fetch.deepseek.js`
- `./provider-usage.fetch.gemini.js`
- `./provider-usage.fetch.minimax.js`
- `./provider-usage.fetch.shared.js`
- `./provider-usage.fetch.zai.js`
- `./provider-usage.format.js`
- `./provider-usage.js`
- `./provider-usage.load.js`
- `./provider-usage.shared.js`
- `./provider-usage.test-support.js`
- `./provider-validation.js`
- `./provider-wizard.js`
- `./providers.js`
- `./providers.runtime.js`
- `./proxy-cli.js`
- `./pty-dsr.js`
- `./pty-keys.js`
- `./public-surface-loader.js`
- `./public-surface-runtime.js`
- `./push-apns-http2.js`
- `./push-apns-payloads.js`
- `./push-apns-store.js`
- `./push-apns.js`
- `./push-apns.relay.js`
- `./push-web-store.js`
- `./push-web.js`
- `./qr-cli.js`
- `./qr-image.ts`
- `./qr-runtime.ts`
- `./qr-terminal.ts`
- `./question-channel-runtime-internal.js`
- `./question-gateway-resolver.js`
- `./question-reaction-runtime.js`
- `./queue-policy.js`
- `./queue.js`
- `./queue.test-helpers.js`
- `./queue/cleanup.js`
- `./queue/cleanup.test-support.js`
- `./queue/directive.js`
- `./queue/drain.js`
- `./queue/enqueue.test-support.js`
- `./queue/settings-runtime.js`
- `./queue/settings.js`
- `./queue/state.js`
- `./queue/types.js`
- `./queued-file-writer.js`
- `./quote-cli-arg.js`
- `./random-token.js`
- `./rate-limit-window.js`
- `./read-capability.js`
- `./read-model.js`
- `./read-only-account-inspect.js`
- `./readiness.js`
- `./realtime-bootstrap-context.js`
- `./recommended-tool-installs.js`
- `./recovery-policy.js`
- `./redact-argv.js`
- `./redact-snapshot.js`
- `./redact-snapshot.raw.js`
- `./redact-snapshot.secret-ref.js`
- `./redact-snapshot.test-helpers.js`
- `./register-plugin-cli-command-groups.js`
- `./registry-api.js`
- `./registry-empty.js`
- `./registry-lifecycle.js`
- `./registry-lookup.js`
- `./registry-normalize.js`
- `./registry-refresh.js`
- `./registry-registrars-capabilities.js`
- `./registry-registrars-host.js`
- `./registry-registrars-memory.js`
- `./registry-registrars-network.js`
- `./registry-registrars-operations.js`
- `./registry-registrars-providers.js`
- `./registry-registrars-tools-hooks.js`
- `./registry-registrars.js`
- `./registry-runtime.js`
- `./registry-state.js`
- `./registry.js`
- `./regular-file.js`
- `./repair-sequencing.js`
- `./replace-file.js`
- `./replay-history.js`
- `./replay-state.js`
- `./replay-turn-classification.js`
- `./reply-config-runtime-mode.js`
- `./reply-delivery.js`
- `./reply-directives.js`
- `./reply-dispatcher.js`
- `./reply-dispatcher.types.js`
- `./reply-elevated.js`
- `./reply-inline-whitespace.js`
- `./reply-inline.js`
- `./reply-media-paths.js`
- `./reply-media-paths.runtime.js`
- `./reply-operation-abort.js`
- `./reply-operation-run-state.js`
- `./reply-payload.js`
- `./reply-payloads-base.js`
- `./reply-payloads-dedupe.js`
- `./reply-payloads.js`
- `./reply-reference.js`
- `./reply-run-finalization-lease.js`
- `./reply-run-registry.js`
- `./reply-run-registry.test-support.js`
- `./reply-tags.js`
- `./reply-threading.js`
- `./reply-timing-tracker.js`
- `./reply-turn-admission.js`
- `./reply-usage-state.js`
- `./reply.directive.directive-behavior.e2e-harness.js`
- `./reply.directive.directive-behavior.e2e-mocks.js`
- `./reply.test-helpers.js`
- `./reply.triggers.group-intro-prompts.cases.js`
- `./reply.triggers.trigger-handling.filters-usage-summary-current-model-provider.cases.js`
- `./reply/abort-primitives.js`
- `./reply/delivery-hints.js`
- `./reply/directive-handling.impl.js`
- `./reply/directive-handling.parse.js`
- `./reply/directives.js`
- `./reply/dispatch-from-config.js`
- `./reply/exec/directive.js`
- `./reply/get-reply-fast-path.test-support.js`
- `./reply/get-reply.test-loader.js`
- `./reply/groups.js`
- `./reply/inbound-context.js`
- `./reply/inbound-dedupe.js`
- `./reply/inbound-meta.js`
- `./reply/inbound-text.js`
- `./reply/mentions.js`
- `./reply/model-selection-directive.js`
- `./reply/prompt-prelude.js`
- `./reply/queue.js`
- `./reply/queue/directive.js`
- `./reply/reply-dispatcher.js`
- `./reply/reply-payload-sending-hook.js`
- `./reply/reply-tags.js`
- `./reply/reply-usage-state.js`
- `./reply/reply.test-helpers.js`
- `./reply/session.js`
- `./reply/stage-sandbox-media.js`
- `./reply/strip-inbound-meta.js`
- `./reply/test-ctx.js`
- `./requirements-test-fixtures.js`
- `./reset-authorization.js`
- `./resolve-system-bin.js`
- `./resolve-utils.js`
- `./resource-loader.js`
- `./respawn-child-runner.js`
- `./respawn-policy.js`
- `./response-prefix-template.js`
- `./responses-image-payload-sanitizer.js`
- `./restart-coordinator.js`
- `./restart-handoff.js`
- `./restart-intent.js`
- `./restart-recovery-claim.js`
- `./restart-recovery-hook-safety.js`
- `./restart-sentinel-store.js`
- `./restart-sentinel.js`
- `./restart-stale-pids.js`
- `./restart.js`
- `./result-fallback-classifier.js`
- `./retry-after.js`
- `./retry-attempt-errors.js`
- `./retry-policy.js`
- `./retry.js`
- `./root-help-live-config.js`
- `./root-option-forward.js`
- `./root-option-scan.js`
- `./root-option-value.js`
- `./roots.js`
- `./route-projection.js`
- `./route-reply.js`
- `./routed-delivery-thread.js`
- `./routing-policy.js`
- `./run-cleanup-timeout.js`
- `./run-execution.js`
- `./run-loop.js`
- `./run-main-policy.js`
- `./run-main.js`
- `./run-session-target.js`
- `./run-state-machine.js`
- `./run-state.js`
- `./run-termination.js`
- `./run-timeout-attribution.js`
- `./run-wait.js`
- `./run.js`
- `./run.overflow-compaction.fixture.js`
- `./run.overflow-compaction.harness.js`
- `./run/assistant-failure.js`
- `./run/attempt-dispatch-preparation.js`
- `./run/attempt-normalization.js`
- `./run/attempt-recovery.js`
- `./run/attempt-stage-timing.js`
- `./run/attempt.model-diagnostic-events.js`
- `./run/attempt.prompt-helpers.js`
- `./run/attempt.session-lock.js`
- `./run/attempt.thread-helpers.js`
- `./run/codex-app-server-recovery.js`
- `./run/compaction-runtime.js`
- `./run/context-recovery-state.js`
- `./run/execution-phase-diagnostics.js`
- `./run/failover-policy.js`
- `./run/failover-retry-controller.js`
- `./run/fallbacks.js`
- `./run/helpers.js`
- `./run/idle-timeout-breaker.js`
- `./run/incomplete-turn.js`
- `./run/lane-controller.js`
- `./run/lane-runtime.js`
- `./run/midturn-precheck.js`
- `./run/preemptive-compaction.js`
- `./run/prepared-runtime-context.js`
- `./run/progress-controller.js`
- `./run/recovery-message-action-capability.js`
- `./run/retry-limit.js`
- `./run/runtime-context-prompt.js`
- `./run/runtime-preparation.js`
- `./run/runtime-resolution.js`
- `./run/session-bootstrap.js`
- `./run/session-prompt-state.js`
- `./run/terminal-preparation.js`
- `./run/terminal-resolution.js`
- `./run/terminal-retry-state.js`
- `./run/terminal-timeout.js`
- `./runs.js`
- `./runs.test-support.js`
- `./runtime-auth-refresh.js`
- `./runtime-capabilities.js`
- `./runtime-channel-state.js`
- `./runtime-degraded-state.js`
- `./runtime-execution.js`
- `./runtime-group-policy.js`
- `./runtime-guard.js`
- `./runtime-overrides.js`
- `./runtime-plan/auth.js`
- `./runtime-plan/materialize-model.js`
- `./runtime-plan/prepare-auth.js`
- `./runtime-plan/resolve-auth.js`
- `./runtime-plan/tools.js`
- `./runtime-plugin-install.js`
- `./runtime-plugins.js`
- `./runtime-policy-session-key.js`
- `./runtime-shared.js`
- `./runtime-sidecar-paths-baseline.js`
- `./runtime-sidecar-paths.js`
- `./runtime-snapshot.js`
- `./runtime-state-key.js`
- `./runtime-state.js`
- `./runtime-status.js`
- `./runtime-workspace-state.js`
- `./runtime.cjs`
- `./runtime.js`
- `./runtime/gateway-request-scope.js`
- `./runtime/index.js`
- `./runtime/load-context.js`
- `./runtime/metadata-registry-loader.js`
- `./runtime/runtime-plugin-boundary.js`
- `./runtime/runtime-registry-loader.js`
- `./runtime/standalone-runtime-registry-loader.js`
- `./safe-cwd.js`
- `./safe-package-install.js`
- `./sandbox-display.js`
- `./sandbox-explain.js`
- `./sandbox-formatters.js`
- `./sandbox-info.js`
- `./sandbox-media-paths.js`
- `./sandbox-paths.js`
- `./sandbox-skills.js`
- `./sandbox-tool-policy.js`
- `./sandbox.js`
- `./sandbox/backend.js`
- `./sandbox/config.js`
- `./sandbox/constants.js`
- `./sandbox/context.js`
- `./sandbox/docker.js`
- `./sandbox/path-utils.js`
- `./sandbox/runtime-status.js`
- `./sandbox/tool-policy.js`
- `./sandbox/workspace-mounts.js`
- `./sanitize-for-prompt.js`
- `./schema-base.js`
- `./schema-validator.js`
- `./schema.help.agents.js`
- `./schema.help.automation.js`
- `./schema.help.core.js`
- `./schema.help.js`
- `./schema.help.models.js`
- `./schema.help.quality.test-fixtures.js`
- `./schema.help.runtime.js`
- `./schema.hints.js`
- `./schema.js`
- `./schema.labels.js`
- `./schema.node-capabilities.js`
- `./schema.shared.js`
- `./schema.tags.js`
- `./schema/typebox.js`
- `./schtasks-fixtures.js`
- `./scp-host.js`
- `./sdk-alias.js`
- `./secret-file.js`
- `./secrets-cli.js`
- `./secure-random.js`
- `./security-cli.js`
- `./security-events.js`
- `./semver.js`
- `./send-policy.js`
- `./sender-identity.js`
- `./sender-label.js`
- `./sender-tool-policy.js`
- `./sensitive-paths.js`
- `./services.js`
- `./session-async-task-status.js`
- `./session-cost-usage-cache.sqlite.js`
- `./session-cost-usage-rollup.js`
- `./session-cost-usage-totals.js`
- `./session-cost-usage.js`
- `./session-cost-usage.test-support.js`
- `./session-delivery-queue-runtime.js`
- `./session-delivery-queue-runtime.test-support.js`
- `./session-delivery-queue-storage.js`
- `./session-delivery-queue.js`
- `./session-delivery.js`
- `./session-dirs.js`
- `./session-discussion-registry.js`
- `./session-entry-handle.js`
- `./session-entry-persistence.js`
- `./session-entry-slot-keys.js`
- `./session-file-key.js`
- `./session-file-repair.js`
- `./session-fork.js`
- `./session-hooks.js`
- `./session-init-conflict-retry.js`
- `./session-manager-cache.js`
- `./session-manager-cache.test-support.js`
- `./session-manager-init.js`
- `./session-model-ref.js`
- `./session-parent-fork-prepare.js`
- `./session-placement-admission.js`
- `./session-prompt-state.js`
- `./session-raw-append-message.js`
- `./session-reset-cleanup.js`
- `./session-reset-model.js`
- `./session-reset-prompt.js`
- `./session-route-reset.js`
- `./session-run-accounting.js`
- `./session-runtime-compat.js`
- `./session-slug.js`
- `./session-store-targets.js`
- `./session-suspension.js`
- `./session-system-events.js`
- `./session-tool-result-guard-wrapper.js`
- `./session-tool-result-guard.js`
- `./session-tool-result-state.js`
- `./session-transcript-repair.js`
- `./session-updates.js`
- `./session-usage.js`
- `./session-write-lock-error.js`
- `./session-write-lock.js`
- `./session.js`
- `./sessions-cleanup.js`
- `./sessions-compact.js`
- `./sessions-display-model.js`
- `./sessions-table.js`
- `./sessions-tail.js`
- `./sessions-tail.test-support.js`
- `./sessions.js`
- `./sessions.test-helpers.js`
- `./sessions.test-support.js`
- `./sessions/auth-storage.js`
- `./sessions/compaction/compaction.js`
- `./sessions/index.js`
- `./sessions/model-registry-runtime.js`
- `./sessions/session-manager.js`
- `./sessions/settings-manager.js`
- `./sessions/store-cache.js`
- `./sessions/store.js`
- `./sessions/tools/limits.js`
- `./sessions/tools/truncate.js`
- `./setup-descriptors.js`
- `./setup-registry-loader-state.js`
- `./setup-registry.js`
- `./setup.app-recommendations.js`
- `./setup.completion.js`
- `./setup.finalize.js`
- `./setup.gateway-config.js`
- `./setup.js`
- `./setup.memory-import.js`
- `./setup.migration-import.js`
- `./setup.migration-recovery.js`
- `./setup.migration-snapshot.js`
- `./setup.model-auth.js`
- `./setup.official-plugins.js`
- `./setup.plugin-config.js`
- `./setup.post-install-migration.js`
- `./setup.secret-input.js`
- `./setup.security-note.js`
- `./setup.shared.js`
- `./setup/__tests__/test-utils.js`
- `./shared/active-tool-schema-warnings.js`
- `./shared/allowfrom-fallback-migration.js`
- `./shared/allowlist-policy-repair.js`
- `./shared/bundled-plugin-load-paths.js`
- `./shared/channel-doctor.js`
- `./shared/codex-route-warnings.js`
- `./shared/config-mutation-state.js`
- `./shared/configured-runtime-plugin-installs.js`
- `./shared/context-engine-host-compat.js`
- `./shared/empty-allowlist-scan.js`
- `./shared/exec-safe-bins.js`
- `./shared/invalid-plugin-config.js`
- `./shared/lazy-runtime.js`
- `./shared/legacy-config-migrate.js`
- `./shared/legacy-tools-by-sender.js`
- `./shared/missing-configured-plugin-install.js`
- `./shared/number-coercion.js`
- `./shared/open-policy-allowfrom.js`
- `./shared/plugin-dependency-cleanup.js`
- `./shared/stale-auth-order.js`
- `./shared/stale-oauth-profile-shadows.js`
- `./shared/stale-plugin-config.js`
- `./shared/stale-subagent-allowlist.js`
- `./shared/update-phase.js`
- `./shell-env-expected-keys.js`
- `./shell-inline-command.js`
- `./shell-snapshot.js`
- `./shell-utils.js`
- `./shell-wrapper-resolution.js`
- `./signal-exit-barrier.js`
- `./silent-reply.js`
- `./simple-completion-runtime.js`
- `./simple-completion-scope.js`
- `./simple-completion-transport.js`
- `./skill-filter.js`
- `./skill-workshop-prompt.js`
- `./skills-cli.format.js`
- `./skills-cli.js`
- `./slot-selection.js`
- `./slots.js`
- `./snapshot-provider.js`
- `./sniff-mime-from-base64.js`
- `./source-display.js`
- `./source-reply-delivery-mode.js`
- `./source-turn-id.js`
- `./spawn-pipeline.js`
- `./spawn-plan.js`
- `./spawn-ps.js`
- `./spawn-requester-origin.js`
- `./spawn-utils.js`
- `./spawned-context.js`
- `./sqlite-audit-record-store.js`
- `./sqlite-index-schema.js`
- `./sqlite-integrity.js`
- `./sqlite-number.js`
- `./sqlite-runtime-version.js`
- `./sqlite-schema-contract.js`
- `./sqlite-snapshot.js`
- `./sqlite-strict.js`
- `./sqlite-transaction.js`
- `./sqlite-user-version.js`
- `./sqlite-wal.js`
- `./src/agents/embedded-agent-subscribe.callback.ts`
- `./src/infra/tmp-openclaw-dir.ts`
- `./src/plugins/hooks.ts`
- `./ssh-config.js`
- `./ssh-tunnel.js`
- `./stable-node-path.js`
- `./stable-stringify.js`
- `./stage-remote-inbound-media.js`
- `./stage-sandbox-media.js`
- `./stage-sandbox-media.test-harness.js`
- `./stage-sandbox-media.test-support.js`
- `./stale-local-bundled-plugin-install-records.js`
- `./stale-lock-file.js`
- `./stall-watchdog.js`
- `./startup-context.js`
- `./startup-metadata.js`
- `./startup-metadata.test-support.js`
- `./startup-migration-checkpoint.js`
- `./startup-trace-segment.js`
- `./startup-trace.js`
- `./state-dir-dotenv.js`
- `./state-migrations.acp-replay.js`
- `./state-migrations.apns.js`
- `./state-migrations.audit-backup.js`
- `./state-migrations.audit-checkpoints.js`
- `./state-migrations.audit-coordination.js`
- `./state-migrations.audit-logs.js`
- `./state-migrations.audit-records.js`
- `./state-migrations.audit-recovery-protocol.js`
- `./state-migrations.audit-recovery.js`
- `./state-migrations.audit-sanitized.js`
- `./state-migrations.channel-pairing.js`
- `./state-migrations.commitments.js`
- `./state-migrations.debug-proxy.js`
- `./state-migrations.device-identity-repair.js`
- `./state-migrations.device-identity.js`
- `./state-migrations.fs.js`
- `./state-migrations.js`
- `./state-migrations.legacy-sessions.js`
- `./state-migrations.managed-outgoing-images.js`
- `./state-migrations.mcp-oauth-format.js`
- `./state-migrations.mcp-oauth-lock-stale.js`
- `./state-migrations.mcp-oauth-lock.js`
- `./state-migrations.mcp-oauth.js`
- `./state-migrations.messages.js`
- `./state-migrations.node-host.js`
- `./state-migrations.onboarding-recommendations.js`
- `./state-migrations.plugin-state.js`
- `./state-migrations.rescue-pending.js`
- `./state-migrations.restart-sentinel.js`
- `./state-migrations.runtime-state.js`
- `./state-migrations.session-store.js`
- `./state-migrations.session-surfaces.js`
- `./state-migrations.state-dir.js`
- `./state-migrations.storage.js`
- `./state-migrations.subagent-registry-db.js`
- `./state-migrations.subagent-registry.js`
- `./state-migrations.task-sidecar-rows.js`
- `./state-migrations.tui-last-session.js`
- `./state-migrations.update-check.js`
- `./state-migrations.web-push-parse.js`
- `./state-migrations.web-push.js`
- `./state-migrations.workspace-setup-receipts.js`
- `./state-migrations.workspace-setup-store.js`
- `./state-migrations.workspace-setup.js`
- `./status-all/channels-table.js`
- `./status-all/channels.js`
- `./status-all/format.js`
- `./status-all/report-data.js`
- `./status-all/report-lines.js`
- `./status-all/report-sections.js`
- `./status-all/text-report.js`
- `./status-dependencies-core.js`
- `./status-json-command.ts`
- `./status-json-payload.ts`
- `./status-json-runtime.ts`
- `./status-json.js`
- `./status-overview-rows.ts`
- `./status-overview-surface.ts`
- `./status-overview-values.ts`
- `./status-reactions.js`
- `./status-runtime-shared.ts`
- `./status-update-restart.ts`
- `./status.command-report-data.ts`
- `./status.command-report.ts`
- `./status.command-sections.js`
- `./status.command-sections.ts`
- `./status.command.js`
- `./status.command.test-support.js`
- `./status.daemon.js`
- `./status.format.js`
- `./status.gateway-connection.js`
- `./status.gateway-connection.ts`
- `./status.js`
- `./status.link-channel.js`
- `./status.node-mode.js`
- `./status.scan-execute.ts`
- `./status.scan-memory.ts`
- `./status.scan-overview.ts`
- `./status.scan-result.ts`
- `./status.scan.bootstrap-shared.js`
- `./status.scan.bootstrap-shared.ts`
- `./status.scan.config-shared.js`
- `./status.scan.fast-json.js`
- `./status.scan.shared.js`
- `./status.scan.test-helpers.js`
- `./status.service-summary.js`
- `./status.summary.js`
- `./status.summary.runtime.js`
- `./status.test-fixtures.js`
- `./status.test-helpers.js`
- `./status.test-support.ts`
- `./status.update.js`
- `./store.download.js`
- `./store.js`
- `./store.runtime.js`
- `./store.shared.js`
- `./store.test-support.js`
- `./stored-model-override.js`
- `./stranded-reply-recovery.js`
- `./stream-iterator-wrapper.js`
- `./stream-message-shared.js`
- `./stream-resolution.js`
- `./stream.js`
- `./streaming-directives.js`
- `./streaming-flat-key-deprecation.js`
- `./streaming.js`
- `./strip-inbound-meta.js`
- `./subagent-active-context.js`
- `./subagent-announce-capture.js`
- `./subagent-announce-delivery.js`
- `./subagent-announce-delivery.runtime.js`
- `./subagent-announce-delivery.test-support.js`
- `./subagent-announce-dispatch.js`
- `./subagent-announce-origin.js`
- `./subagent-announce-output.js`
- `./subagent-announce-output.test-support.js`
- `./subagent-announce.js`
- `./subagent-announce.requester-settle-wake.js`
- `./subagent-announce.runtime.js`
- `./subagent-announce.test-support.js`
- `./subagent-attachments.js`
- `./subagent-capabilities.js`
- `./subagent-control.js`
- `./subagent-control.test-support.js`
- `./subagent-delivery-state.js`
- `./subagent-depth.js`
- `./subagent-initial-user-message.js`
- `./subagent-lifecycle-events.js`
- `./subagent-light-context.js`
- `./subagent-list.js`
- `./subagent-orphan-recovery.js`
- `./subagent-recovery-state.js`
- `./subagent-registry-cleanup.js`
- `./subagent-registry-completion.js`
- `./subagent-registry-helpers.js`
- `./subagent-registry-lifecycle.js`
- `./subagent-registry-maintenance.js`
- `./subagent-registry-memory.js`
- `./subagent-registry-queries.js`
- `./subagent-registry-read.js`
- `./subagent-registry-requester-yield.js`
- `./subagent-registry-run-manager.js`
- `./subagent-registry-state.js`
- `./subagent-registry-steer-runtime.js`
- `./subagent-registry.js`
- `./subagent-registry.mocks.shared.js`
- `./subagent-registry.persistence.test-support.js`
- `./subagent-registry.store.sqlite.js`
- `./subagent-registry.test-helpers.js`
- `./subagent-requester-store-key.js`
- `./subagent-run-generation.js`
- `./subagent-run-liveness.js`
- `./subagent-run-timeout.js`
- `./subagent-session-cleanup.js`
- `./subagent-session-metrics.js`
- `./subagent-session-reconciliation.js`
- `./subagent-spawn-accepted-note.js`
- `./subagent-spawn-ownership.js`
- `./subagent-spawn-plan.js`
- `./subagent-spawn-thinking.js`
- `./subagent-spawn.js`
- `./subagent-spawn.runtime.js`
- `./subagent-spawn.test-helpers.js`
- `./subagent-spawn.test-support.js`
- `./subagent-system-prompt.js`
- `./subagent-target-policy.js`
- `./subagent-task-name.js`
- `./subagent-yield-output.js`
- `./subagents-utils.js`
- `./supervisor-markers.js`
- `./swarm-code-mode.js`
- `./swarm-collector.js`
- `./swarm-config.js`
- `./swarm-output-schema.js`
- `./swarm-scheduler.js`
- `./swarm-scheduler.test-support.js`
- `./synthetic-auth.runtime.js`
- `./system-agent-with-inference.js`
- `./system-events.js`
- `./system-message.js`
- `./system-presence.js`
- `./system-prompt-config.js`
- `./system-prompt-params.js`
- `./system-prompt-report.js`
- `./system-prompt.js`
- `./system-run-approval-binding.js`
- `./system-run-approval-context.js`
- `./system-run-command.js`
- `./system-run-normalize.js`
- `./systemd-linger.js`
- `./tagline.js`
- `./tailnet.js`
- `./talk-defaults.js`
- `./talk.js`
- `./targets.js`
- `./tasks-audit-system.js`
- `./tasks-json.js`
- `./tasks.js`
- `./tcp-port.js`
- `./temp-download.js`
- `./templating.js`
- `./terminal-file-upload.js`
- `./terminal-interactivity.js`
- `./test-ctx.js`
- `./test-fixtures/acp-runtime.js`
- `./test-helpers.js`
- `./test-helpers/agent-message-fixtures.js`
- `./test-helpers/agent-session-token-mock.js`
- `./test-helpers/agent-tool-stubs.js`
- `./test-helpers/agent-tools-fs-helpers.js`
- `./test-helpers/agent-tools-sandbox-context.js`
- `./test-helpers/archive-fixtures.js`
- `./test-helpers/assistant-message-fixtures.js`
- `./test-helpers/claude-api-error-fixture.js`
- `./test-helpers/cold-plugin-fixtures.js`
- `./test-helpers/command-auth-registry-fixture.js`
- `./test-helpers/embedded-agent-runner-e2e-fixtures.js`
- `./test-helpers/embedded-agent-runner-e2e-mocks.js`
- `./test-helpers/fast-bash-tools.js`
- `./test-helpers/fast-coding-tools.js`
- `./test-helpers/fast-openclaw-tools-sessions.js`
- `./test-helpers/fast-openclaw-tools.js`
- `./test-helpers/fast-tool-stubs.js`
- `./test-helpers/fs-fixtures.js`
- `./test-helpers/host-sandbox-fs-bridge.js`
- `./test-helpers/install-fixtures.js`
- `./test-helpers/managed-npm-plugin.js`
- `./test-helpers/model-fallback-config-fixture.js`
- `./test-helpers/registry-jiti-mocks.js`
- `./test-helpers/sandbox-agent-config-fixtures.js`
- `./test-helpers/session-config.js`
- `./test-helpers/subagent-gateway.js`
- `./test-helpers/temp-dir.js`
- `./test-helpers/temp-plugin-extension-fixtures.js`
- `./test-helpers/unsafe-mounted-sandbox.js`
- `./test-runtime-capture.js`
- `./test-runtime-config-helpers.js`
- `./test-utils/env.js`
- `./test-wizard-helpers.js`
- `./text-format.js`
- `./text-transforms.runtime.js`
- `./thinking-block.js`
- `./thinking-replay-repair.js`
- `./thinking-runtime.js`
- `./thinking.js`
- `./thinking.shared.js`
- `./thread-binding-id.js`
- `./thread-bindings-messages.js`
- `./thread-bindings-policy.js`
- `./timeout.js`
- `./tmp-openclaw-dir.js`
- `./toggle-config.js`
- `./tokens.js`
- `./tool-allowlist-guard.js`
- `./tool-call-argument-decoding.js`
- `./tool-call-id.js`
- `./tool-call-shared.js`
- `./tool-catalog.js`
- `./tool-contracts.js`
- `./tool-description-presets.js`
- `./tool-description-summary.js`
- `./tool-descriptor-cache.js`
- `./tool-display-common.js`
- `./tool-display-config.js`
- `./tool-display-exec-shell.js`
- `./tool-display-exec.js`
- `./tool-display.js`
- `./tool-error-state.js`
- `./tool-error-summary.js`
- `./tool-fs-policy.js`
- `./tool-grant-allowlist.js`
- `./tool-images.js`
- `./tool-loop-detection-config.js`
- `./tool-loop-detection.js`
- `./tool-meta.js`
- `./tool-mutation-names.js`
- `./tool-mutation.js`
- `./tool-name-allowlist.js`
- `./tool-policy-audit.js`
- `./tool-policy-declared-context.js`
- `./tool-policy-match.js`
- `./tool-policy-pipeline.js`
- `./tool-policy-pipeline.test-support.js`
- `./tool-policy-shared.js`
- `./tool-policy.js`
- `./tool-replay-safety.js`
- `./tool-result-char-estimator.js`
- `./tool-result-context-guard.js`
- `./tool-result-error.js`
- `./tool-runtime-config.js`
- `./tool-schema-hints.js`
- `./tool-schema-projection.js`
- `./tool-schema-quarantine-health.js`
- `./tool-schema-quarantine.js`
- `./tool-search-runtime-config.js`
- `./tool-search.js`
- `./tool-search.test-support.js`
- `./tool-send-receipts.js`
- `./tool-split.js`
- `./tool-terminal-outcome.js`
- `./tool-terminal-presentation.js`
- `./tools-effective-inventory-build.js`
- `./tools-effective-inventory-groups.js`
- `./tools-effective-inventory-shared.js`
- `./tools.test-fixtures.js`
- `./tools/agent-step.test-support.js`
- `./tools/agents-list-tool.js`
- `./tools/agents-wait-tool.js`
- `./tools/ask-user-tool.js`
- `./tools/ask-user-tool.test-support.js`
- `./tools/chat-history-text.js`
- `./tools/common.js`
- `./tools/computer-tool.js`
- `./tools/conversation-tools.js`
- `./tools/cron-tool.js`
- `./tools/dashboard-tool.js`
- `./tools/embedded-gateway-stub.js`
- `./tools/gateway-caller-context.js`
- `./tools/gateway-tool.js`
- `./tools/gateway.js`
- `./tools/goal-tools.js`
- `./tools/heartbeat-response-tool.js`
- `./tools/image-generate-tool.js`
- `./tools/image-tool.js`
- `./tools/manifest-capability-availability.js`
- `./tools/message-tool.js`
- `./tools/model-config.helpers.js`
- `./tools/music-generate-tool.js`
- `./tools/nodes-tool.js`
- `./tools/nodes-utils.js`
- `./tools/openclaw-delegate-tool.js`
- `./tools/pdf-tool.js`
- `./tools/screen-tool.js`
- `./tools/session-status-tool.js`
- `./tools/sessions-helpers.js`
- `./tools/sessions-history-tool.js`
- `./tools/sessions-list-tool.js`
- `./tools/sessions-resolution.test-support.js`
- `./tools/sessions-search-tool.js`
- `./tools/sessions-send-tokens.js`
- `./tools/sessions-send-tool.a2a.test-support.js`
- `./tools/sessions-send-tool.js`
- `./tools/sessions-spawn-tool.js`
- `./tools/sessions-tool.js`
- `./tools/sessions-wait-tool.js`
- `./tools/sessions-yield-tool.js`
- `./tools/skill-workshop-tool-factory.js`
- `./tools/structured-output-tool.js`
- `./tools/subagents-tool.js`
- `./tools/task-suggestion-tools.js`
- `./tools/terminal-tool.js`
- `./tools/transcripts-tool.js`
- `./tools/tts-tool.js`
- `./tools/update-plan-tool.js`
- `./tools/video-generate-tool.js`
- `./tools/web-search.js`
- `./tools/web-tools.js`
- `./trace-base.js`
- `./transcript-file-state.js`
- `./transcript-policy.js`
- `./transcript-redact.js`
- `./transcript-rewrite.js`
- `./transcript-runtime-state.js`
- `./transcript.js`
- `./transport-message-transform.js`
- `./transport-stream-shared.js`
- `./turn/kernel.js`
- `./types.js`
- `./types.models.js`
- `./types.secrets.js`
- `./types.tools.js`
- `./typing-lifecycle.js`
- `./typing-mode.js`
- `./typing-policy.js`
- `./typing-start-guard.js`
- `./typing.js`
- `./unhandled-rejections.js`
- `./uninstall.js`
- `./untrusted-context.js`
- `./update-attempt.js`
- `./update-channels.js`
- `./update-check-package-target.js`
- `./update-check.js`
- `./update-cli.js`
- `./update-cli.test-helpers.js`
- `./update-cli/status.js`
- `./update-cli/update-command.js`
- `./update-cli/wizard.js`
- `./update-config.js`
- `./update-control-plane-sentinel.js`
- `./update-doctor-result.js`
- `./update-global.js`
- `./update-managed-service-handoff-cleanup.js`
- `./update-managed-service-handoff.js`
- `./update-package-manager.js`
- `./update-post-core-context.js`
- `./update-post-core-finalize.js`
- `./update-restart-sentinel-payload.js`
- `./update-runner-command.js`
- `./update-runner-doctor.js`
- `./update-runner-git-commands.js`
- `./update-runner-git-preflight.js`
- `./update-runner-git-target.js`
- `./update-runner-git.js`
- `./update-runner-global.js`
- `./update-runner-install-surface.js`
- `./update-runner.js`
- `./update-source.js`
- `./usage-accumulator.js`
- `./usage.js`
- `./users-cli.js`
- `./utility-model.js`
- `./utils.js`
- `./utils/event-stream.js`
- `./utils/paths.js`
- `./validation-diagnostics.js`
- `./validation.js`
- `./version.js`
- `./video-dimensions.js`
- `./video-generation-task-status.js`
- `./voicewake-routing.js`
- `./voicewake.js`
- `./wait-for-idle-before-flush.js`
- `./wait.js`
- `./warning-filter.js`
- `./web-content-extractor-public-artifacts.js`
- `./web-content-extractors.runtime.js`
- `./web-fetch-providers.shared.js`
- `./web-media.js`
- `./web-provider-public-artifacts.explicit.js`
- `./web-provider-public-artifacts.js`
- `./web-provider-resolution-shared.js`
- `./web-provider-runtime-shared.js`
- `./web-search-install-catalog.js`
- `./web-search-legacy-provider-keys.js`
- `./web-search-providers.shared.js`
- `./web-search-tool-policy.js`
- `./webhooks-cli.js`
- `./websocket-session.js`
- `./widearea-dns.js`
- `./windows-argv.js`
- `./windows-command.js`
- `./windows-encoding.js`
- `./windows-gateway-firewall-diagnostics.js`
- `./windows-install-roots.js`
- `./windows-launcher-encoding.js`
- `./windows-port-pids.js`
- `./windows-shell-command.js`
- `./windows-task-restart.js`
- `./worker-provider-registry.js`
- `./workspace-bootstrap-read.js`
- `./workspace-default.js`
- `./workspace-dir.js`
- `./workspace-legacy-state.js`
- `./workspace-legacy-state.test-support.js`
- `./workspace-run.js`
- `./workspace-state-store.js`
- `./workspace-templates.js`
- `./workspace.js`
- `./worktrees-cli.js`
- `./ws-connection.js`
- `./ws-connection.test-helpers.js`
- `./ws-connection/handshake-auth-log-limiter.js`
- `./ws-connection/worker-connection.js`
- `./ws-shared-generation.js`
- `./ws-types.js`
- `./ws.js`
- `./wsl.js`
- `./zod-schema.agent-defaults.js`
- `./zod-schema.agent-model.js`
- `./zod-schema.agent-runtime.js`
- `./zod-schema.agents.js`
- `./zod-schema.allowdeny.js`
- `./zod-schema.approvals.js`
- `./zod-schema.channel-messaging-common.js`
- `./zod-schema.channels-config.js`
- `./zod-schema.channels.js`
- `./zod-schema.cloud-workers.js`
- `./zod-schema.core.js`
- `./zod-schema.discord.js`
- `./zod-schema.gateway.js`
- `./zod-schema.hooks.js`
- `./zod-schema.implicit-mentions.js`
- `./zod-schema.installs.js`
- `./zod-schema.js`
- `./zod-schema.node-host.js`
- `./zod-schema.providers-core.js`
- `./zod-schema.providers-whatsapp.js`
- `./zod-schema.proxy.js`
- `./zod-schema.root-shape.js`
- `./zod-schema.root-support.js`
- `./zod-schema.secret-input-validation.js`
- `./zod-schema.sensitive.js`
- `./zod-schema.session.js`
- `@clack/core`
- `@clack/prompts`
- `@earendil-works/pi-tui`
- `@modelcontextprotocol/sdk/client/auth.js`
- `@modelcontextprotocol/sdk/client/index.js`
- `@modelcontextprotocol/sdk/client/sse.js`
- `@modelcontextprotocol/sdk/client/stdio.js`
- `@modelcontextprotocol/sdk/client/streamableHttp.js`
- `@modelcontextprotocol/sdk/shared/auth.js`
- `@modelcontextprotocol/sdk/shared/stdio.js`
- `@modelcontextprotocol/sdk/types.js`
- `@modelcontextprotocol/sdk/validation/ajv-provider.js`
- `@openclaw/acp-core/runtime/error-text`
- `@openclaw/acp-core/runtime/session-identifiers`
- `@openclaw/acp-core/runtime/session-identity`
- `@openclaw/acp-core/session-interaction-mode`
- `@openclaw/ai`
- `@openclaw/ai/internal/anthropic`
- `@openclaw/ai/internal/openai`
- `@openclaw/ai/internal/retry-after`
- `@openclaw/ai/internal/runtime`
- `@openclaw/ai/internal/shared`
- `@openclaw/ai/providers`
- `@openclaw/fs-safe`
- `@openclaw/fs-safe/advanced`
- `@openclaw/fs-safe/atomic`
- `@openclaw/fs-safe/config`
- `@openclaw/fs-safe/errors`
- `@openclaw/fs-safe/json`
- `@openclaw/fs-safe/root`
- `@openclaw/fs-safe/secret`
- `@openclaw/fs-safe/store`
- `@openclaw/fs-safe/test-hooks`
- `@openclaw/llm-core`
- `@openclaw/media-core/base64`
- `@openclaw/media-core/constants`
- `@openclaw/media-core/content-length`
- `@openclaw/media-core/file-name`
- `@openclaw/media-core/inbound-path-policy`
- `@openclaw/media-core/inline-image-data-url`
- `@openclaw/media-core/media-source-url`
- `@openclaw/media-core/mime`
- `@openclaw/media-core/read-byte-stream-with-limit`
- `@openclaw/model-catalog-core/configured-model-refs`
- `@openclaw/model-catalog-core/model-catalog-normalize`
- `@openclaw/model-catalog-core/model-catalog-refs`
- `@openclaw/model-catalog-core/provider-id`
- `@openclaw/model-catalog-core/provider-model-id-normalization`
- `@openclaw/model-catalog-core/provider-model-id-normalize`
- `@openclaw/net-policy/ip`
- `@openclaw/net-policy/ipv4`
- `@openclaw/net-policy/redact-sensitive-url`
- `@openclaw/net-policy/url-protocol`
- `@openclaw/net-policy/url-userinfo`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/error-coercion`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/result`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `@openclaw/proxyline`
- `@silvia-odwyer/photon-node`
- `capped-telemetry-helper`
- `chalk`
- `child_process`
- `chokidar`
- `commander`
- `esbuild`
- `execa`
- `hidden-telemetry-helper`
- `iconv-lite`
- `jiti`
- `jose`
- `jszip`
- `node:async_hooks`
- `node:buffer`
- `node:child_process`
- `node:crypto`
- `node:events`
- `node:fs`
- `node:fs/promises`
- `node:http`
- `node:http2`
- `node:https`
- `node:module`
- `node:net`
- `node:os`
- `node:path`
- `node:perf_hooks`
- `node:process`
- `node:readline`
- `node:readline/promises`
- `node:sqlite`
- `node:stream`
- `node:stream/promises`
- `node:string_decoder`
- `node:timers`
- `node:timers/promises`
- `node:tls`
- `node:url`
- `node:util`
- `node:vm`
- `node:worker_threads`
- `node:zlib`
- `openai/streaming`
- `openclaw/plugin-sdk`
- `openclaw/plugin-sdk/agent-core`
- `openclaw/plugin-sdk/agent-harness-runtime`
- `openclaw/plugin-sdk/agent-runtime-test-contracts`
- `openclaw/plugin-sdk/agent-sessions`
- `openclaw/plugin-sdk/channel-config-helpers`
- `openclaw/plugin-sdk/channel-config-schema`
- `openclaw/plugin-sdk/core`
- `openclaw/plugin-sdk/hook-runtime`
- `openclaw/plugin-sdk/keyed-async-queue`
- `openclaw/plugin-sdk/llm`
- `openclaw/plugin-sdk/plugin-state-test-runtime`
- `openclaw/plugin-sdk/plugin-test-contracts`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-auth-api-key`
- `openclaw/plugin-sdk/provider-catalog-shared`
- `openclaw/plugin-sdk/reply-payload`
- `openclaw/plugin-sdk/test-env`
- `openclaw/plugin-sdk/test-fixtures`
- `openclaw/plugin-sdk/tool-plugin`
- `p-limit`
- `p-map`
- `qrcode`
- `quickjs-wasi`
- `telemetry-helper`
- `typebox/compile`
- `typebox/format`
- `typebox/value`
- `typescript`
- `yaml`
