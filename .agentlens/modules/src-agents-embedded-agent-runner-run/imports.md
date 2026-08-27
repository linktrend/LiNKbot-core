# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> harness[harness]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> src[src]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> src[src]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> src[src]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> src[src]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> helpers[helpers]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> runtime[runtime]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> auto_reply[auto-reply]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> auto_reply[auto-reply]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> auto_reply[auto-reply]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> auto_reply[auto-reply]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> auto_reply[auto-reply]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> auto_reply[auto-reply]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> reply[reply]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> reply[reply]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> reply[reply]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> reply[reply]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> auto_reply[auto-reply]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> auto_reply[auto-reply]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> config[config]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> config[config]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> sessions[sessions]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> sessions[sessions]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> sessions[sessions]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> sessions[sessions]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> sessions[sessions]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> sessions[sessions]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> sessions[sessions]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> context_engine[context-engine]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> context_engine[context-engine]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> context_engine[context-engine]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> context_engine[context-engine]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> context_engine[context-engine]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> gateway[gateway]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> server_methods[server-methods]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> hooks[hooks]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> infra[infra]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> infra[infra]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> infra[infra]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> infra[infra]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> infra[infra]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> infra[infra]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> infra[infra]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> infra[infra]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> infra[infra]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> infra[infra]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> infra[infra]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> infra[infra]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> infra[infra]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> infra[infra]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> net[net]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> infra[infra]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> infra[infra]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> infra[infra]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> infra[infra]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> interactive[interactive]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> llm[llm]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> stream_wrappers[stream-wrappers]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> llm[llm]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> utils[utils]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> utils[utils]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> logging[logging]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> logging[logging]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> logging[logging]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> media[media]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> media[media]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> plugins[plugins]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> plugins[plugins]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> plugins[plugins]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> plugins[plugins]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> plugins[plugins]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> plugins[plugins]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> plugins[plugins]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> plugins[plugins]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> plugins[plugins]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> plugins[plugins]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> plugins[plugins]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> plugins[plugins]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> plugins[plugins]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> plugins[plugins]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> process[process]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> routing[routing]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> secrets[secrets]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> secrets[secrets]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> sessions[sessions]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> sessions[sessions]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> sessions[sessions]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> sessions[sessions]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> sessions[sessions]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> sessions[sessions]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> shared[shared]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> shared[shared]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> shared[shared]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> shared[shared]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> shared[shared]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> shared[shared]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> text[text]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> text[text]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> shared[shared]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> shared[shared]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> loading[loading]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> runtime[runtime]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> runtime[runtime]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> tasks[tasks]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> tasks[tasks]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> tasks[tasks]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> tasks[tasks]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> tasks[tasks]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> test_utils[test-utils]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> trajectory[trajectory]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> trajectory[trajectory]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> utils[utils]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> utils[utils]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> utils[utils]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> utils[utils]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> utils[utils]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> auth_profiles[auth-profiles]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> auth_profiles[auth-profiles]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> command[command]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> harness[harness]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> harness[harness]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> harness[harness]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> harness[harness]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> harness[harness]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> harness[harness]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> runtime_plan[runtime-plan]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> runtime_plan[runtime-plan]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> runtime_plan[runtime-plan]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> runtime_plan[runtime-plan]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> runtime[runtime]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> sandbox[sandbox]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> sessions[sessions]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> sessions[sessions]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> sessions[sessions]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> tools[tools]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> test_helpers[test-helpers]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> test_helpers[test-helpers]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> test_helpers[test-helpers]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> test_helpers[test-helpers]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> test_helpers[test-helpers]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> test_helpers[test-helpers]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> tools[tools]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> tools[tools]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> __[..]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _[.]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> internal[internal]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> internal[internal]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> internal[internal]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> media_core[media-core]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> model_catalog_core[model-catalog-core]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> _openclaw[@openclaw]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> normalization_core[normalization-core]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> normalization_core[normalization-core]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> normalization_core[normalization-core]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> normalization_core[normalization-core]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> normalization_core[normalization-core]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> node_async_hooks[node:async_hooks]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> node_crypto[node:crypto]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> node_fs[node:fs]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> node_fs[node:fs]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> node_os[node:os]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> node_path[node:path]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> node_url[node:url]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> node_util[node:util]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> plugin_sdk[plugin-sdk]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> plugin_sdk[plugin-sdk]
    src_agents_embedded_agent_runner_run[src-agents-embedded-agent-runner-run] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../../packages/agent-core/src/harness/messages.js`
- `../../../../packages/normalization-core/src/string-coerce.js`
- `../../../../packages/normalization-core/src/string-normalization.js`
- `../../../../packages/terminal-core/src/ansi.js`
- `../../../../packages/tool-call-repair/src/index.js`
- `../../../../test/helpers/temp-dir.js`
- `../../../acp/runtime/availability.js`
- `../../../auto-reply/handoff-summarizer.js`
- `../../../auto-reply/heartbeat-filter.js`
- `../../../auto-reply/heartbeat-reply-payload.js`
- `../../../auto-reply/heartbeat-tool-response.js`
- `../../../auto-reply/heartbeat.js`
- `../../../auto-reply/reply-payload.js`
- `../../../auto-reply/reply/reply-directives.js`
- `../../../auto-reply/reply/source-turn-id.js`
- `../../../auto-reply/reply/strip-inbound-meta.js`
- `../../../auto-reply/reply/untrusted-context.js`
- `../../../auto-reply/tokens.js`
- `../../../auto-reply/tool-meta.js`
- `../../../config/config.js`
- `../../../config/sessions.js`
- `../../../config/sessions/paths.js`
- `../../../config/sessions/session-accessor.js`
- `../../../config/sessions/sqlite-marker.js`
- `../../../config/sessions/store-maintenance.js`
- `../../../config/sessions/transcript-append.test-support.js`
- `../../../config/sessions/transcript-write-context.js`
- `../../../config/sessions/transcript.js`
- `../../../context-engine/delegate.js`
- `../../../context-engine/host-compat.js`
- `../../../context-engine/registry.js`
- `../../../context-engine/runtime-settings.js`
- `../../../context-engine/types.js`
- `../../../gateway/message-action-turn-capability.js`
- `../../../gateway/server-methods/agent-timestamp.js`
- `../../../hooks/fire-and-forget.js`
- `../../../infra/abort-signal.js`
- `../../../infra/agent-events.js`
- `../../../infra/backoff.js`
- `../../../infra/diagnostic-error-metadata.js`
- `../../../infra/diagnostic-events.js`
- `../../../infra/diagnostic-llm-content.js`
- `../../../infra/diagnostic-trace-context.js`
- `../../../infra/diagnostics-timeline.js`
- `../../../infra/embedded-mode.js`
- `../../../infra/errors.js`
- `../../../infra/heartbeat-outcome-store.js`
- `../../../infra/heartbeat-summary.js`
- `../../../infra/local-file-access.js`
- `../../../infra/machine-name.js`
- `../../../infra/net/undici-global-dispatcher.js`
- `../../../infra/os-summary.js`
- `../../../infra/parse-finite-number.js`
- `../../../infra/secure-random.js`
- `../../../infra/tmp-openclaw-dir.js`
- `../../../interactive/payload.js`
- `../../../llm/model-runtime-binding.js`
- `../../../llm/providers/stream-wrappers/openai.js`
- `../../../llm/stream.js`
- `../../../llm/utils/event-stream.js`
- `../../../llm/utils/rate-limit-window.js`
- `../../../logging/diagnostic-run-activity.js`
- `../../../logging/redact-identifier.js`
- `../../../logging/secret-redaction-registry.js`
- `../../../media/media-reference.js`
- `../../../media/web-media.js`
- `../../../plugins/command-registry-state.js`
- `../../../plugins/current-plugin-metadata-snapshot.js`
- `../../../plugins/hook-agent-context.js`
- `../../../plugins/hook-decision-types.js`
- `../../../plugins/hook-runner-global.js`
- `../../../plugins/hooks.js`
- `../../../plugins/hooks.test-fixtures.js`
- `../../../plugins/host-hook-state.js`
- `../../../plugins/host-hooks.js`
- `../../../plugins/memory-state.test-fixtures.js`
- `../../../plugins/provider-hook-runtime.js`
- `../../../plugins/provider-model-compat.js`
- `../../../plugins/provider-runtime.js`
- `../../../plugins/tools.js`
- `../../../process/command-queue.js`
- `../../../routing/session-key.js`
- `../../../secrets/runtime-degraded-state.js`
- `../../../secrets/sentinel.js`
- `../../../sessions/agent-harness-session-key.js`
- `../../../sessions/input-provenance.js`
- `../../../sessions/session-key-utils.js`
- `../../../sessions/user-turn-media.js`
- `../../../sessions/user-turn-transcript.js`
- `../../../sessions/user-turn-transcript.test-support.js`
- `../../../shared/balanced-json.js`
- `../../../shared/chat-message-content.js`
- `../../../shared/fast-mode.js`
- `../../../shared/global-singleton.js`
- `../../../shared/lazy-runtime.js`
- `../../../shared/message-content-blocks.js`
- `../../../shared/text/assistant-visible-text.js`
- `../../../shared/text/join-segments.js`
- `../../../shared/tool-activity-heartbeat.js`
- `../../../shared/transcript-only-openclaw-assistant.js`
- `../../../skills/loading/workspace.js`
- `../../../skills/runtime/embedded-run-entries.js`
- `../../../skills/runtime/env-overrides.js`
- `../../../tasks/agent-harness-task-runtime-scope.js`
- `../../../tasks/detached-task-runtime.js`
- `../../../tasks/task-executor-policy.js`
- `../../../tasks/task-runtime.test-helpers.js`
- `../../../tasks/task-status-access.js`
- `../../../test-utils/env.js`
- `../../../trajectory/metadata.js`
- `../../../trajectory/runtime.js`
- `../../../utils.js`
- `../../../utils/cjk-chars.js`
- `../../../utils/directive-tags.js`
- `../../../utils/message-channel-normalize.js`
- `../../../utils/message-channel.js`
- `../../../utils/provider-utils.js`
- `../../accepted-session-spawn.js`
- `../../agent-bundle-lsp-runtime.js`
- `../../agent-bundle-mcp-names.js`
- `../../agent-bundle-mcp-tools.js`
- `../../agent-compaction-constants.js`
- `../../agent-project-settings.js`
- `../../agent-run-terminal-outcome.js`
- `../../agent-runtime-id.js`
- `../../agent-scope.js`
- `../../agent-settings.js`
- `../../agent-tool-definition-adapter.js`
- `../../agent-tools.before-tool-call.js`
- `../../agent-tools.js`
- `../../agent-tools.ring-zero-context.js`
- `../../anthropic-payload-log.js`
- `../../auth-profiles.js`
- `../../auth-profiles/external-cli-auth-selection.js`
- `../../auth-profiles/failure-copy.js`
- `../../bash-process-references.js`
- `../../bash-process-registry.js`
- `../../bash-process-registry.test-helpers.js`
- `../../bash-process-registry.test-support.js`
- `../../bootstrap-budget.js`
- `../../bootstrap-files.js`
- `../../bootstrap-mode.js`
- `../../bootstrap-routing.js`
- `../../cache-trace.js`
- `../../channel-tool-metadata.js`
- `../../channel-tools.js`
- `../../code-mode-control-tools.js`
- `../../code-mode.js`
- `../../command/session.js`
- `../../compaction.js`
- `../../console-sanitize.js`
- `../../content-blocks.js`
- `../../context-window-guard.js`
- `../../conversation-capability-profile.js`
- `../../core-tool-factory-descriptors.js`
- `../../date-time.js`
- `../../defaults.js`
- `../../delegation-capability.js`
- `../../docs-path.js`
- `../../embedded-agent-error-observation.js`
- `../../embedded-agent-helpers.js`
- `../../embedded-agent-message-tool-source-reply.js`
- `../../embedded-agent-subscribe.handlers.tools.js`
- `../../embedded-agent-subscribe.js`
- `../../embedded-agent-utils.js`
- `../../execution-auth-binding.js`
- `../../execution-contract.js`
- `../../failover-error.js`
- `../../failover-policy.js`
- `../../fast-mode.js`
- `../../harness/agent-end-side-effects.js`
- `../../harness/gateway-question.js`
- `../../harness/lifecycle-hook-helpers.js`
- `../../harness/runtime-plugin.js`
- `../../harness/selection.js`
- `../../harness/support.js`
- `../../heartbeat-system-prompt.js`
- `../../hook-system-context-boundary.js`
- `../../image-generation-task-status.js`
- `../../image-sanitization.js`
- `../../internal-runtime-context.js`
- `../../live-model-switch-error.js`
- `../../live-model-switch.js`
- `../../local-model-lean.js`
- `../../memory-prompt-prepare.js`
- `../../model-auth.js`
- `../../model-selection.js`
- `../../model-thinking-default.js`
- `../../model-tool-support.js`
- `../../music-generation-task-status.js`
- `../../openai-routing.js`
- `../../plugin-text-transforms.js`
- `../../prepared-model-runtime.js`
- `../../prompt-surface.js`
- `../../provider-attribution.js`
- `../../provider-model-route-auth.js`
- `../../provider-request-config.js`
- `../../provider-secret-egress.js`
- `../../provider-stream.js`
- `../../replay-turn-classification.js`
- `../../run-cleanup-timeout.js`
- `../../run-session-target.js`
- `../../run-termination.js`
- `../../runtime-auth-refresh.js`
- `../../runtime-capabilities.js`
- `../../runtime-plan/build.js`
- `../../runtime-plan/credential-scoped-model.js`
- `../../runtime-plan/prepare-auth.js`
- `../../runtime-plan/tools.js`
- `../../runtime/index.js`
- `../../sandbox-media-paths.js`
- `../../sandbox.js`
- `../../sandbox/runtime-status.js`
- `../../session-file-repair.js`
- `../../session-placement-admission.js`
- `../../session-suspension.js`
- `../../session-tool-result-guard-wrapper.js`
- `../../session-transcript-repair.js`
- `../../session-write-lock-error.js`
- `../../session-write-lock.js`
- `../../session-write-lock.test-support.js`
- `../../sessions/index.js`
- `../../sessions/model-registry-runtime.js`
- `../../sessions/session-manager.js`
- `../../sessions/tools/tool-definition-wrapper.js`
- `../../shell-utils.js`
- `../../stable-stringify.js`
- `../../stream-iterator-wrapper.js`
- `../../stream-message-shared.js`
- `../../subagent-active-context.js`
- `../../subagent-registry.js`
- `../../subagent-registry.test-helpers.js`
- `../../system-prompt-params.js`
- `../../system-prompt-report.js`
- `../../system-prompt.js`
- `../../test-helpers/agent-message-fixtures.js`
- `../../test-helpers/agent-session-token-mock.js`
- `../../test-helpers/agent-tools-sandbox-context.js`
- `../../test-helpers/assistant-message-fixtures.js`
- `../../test-helpers/host-sandbox-fs-bridge.js`
- `../../test-helpers/unsafe-mounted-sandbox.js`
- `../../thinking-runtime.js`
- `../../timeout.js`
- `../../tool-allowlist-guard.js`
- `../../tool-call-id.js`
- `../../tool-error-summary.js`
- `../../tool-fs-policy.js`
- `../../tool-images.js`
- `../../tool-loop-detection.js`
- `../../tool-mutation.js`
- `../../tool-policy-match.js`
- `../../tool-policy.js`
- `../../tool-replay-safety.js`
- `../../tool-schema-projection.js`
- `../../tool-schema-quarantine.js`
- `../../tool-search-runtime-config.js`
- `../../tool-search.js`
- `../../tool-search.test-support.js`
- `../../tool-terminal-outcome.js`
- `../../tool-terminal-presentation.js`
- `../../tools/computer-tool.js`
- `../../tools/cron-tool.js`
- `../../transcript-policy.js`
- `../../usage.js`
- `../../video-generation-task-status.js`
- `../../workspace-run.js`
- `../../workspace.js`
- `../abort.js`
- `../cache-ttl.js`
- `../compaction-hooks.js`
- `../compaction-runtime-context.js`
- `../compaction-safety-timeout.js`
- `../compaction-successor-transcript.js`
- `../context-engine-capabilities.js`
- `../context-engine-maintenance.js`
- `../delivery-evidence.js`
- `../effective-tool-policy.js`
- `../empty-assistant-turn.js`
- `../extensions.js`
- `../extra-params.js`
- `../failure-signal.js`
- `../google-prompt-cache.js`
- `../history.js`
- `../logger.js`
- `../message-action-discovery-input.js`
- `../model-context-tokens.js`
- `../model.js`
- `../prompt-cache-observability.js`
- `../prompt-cache-retention.js`
- `../replay-history.js`
- `../replay-state.js`
- `../resource-loader.js`
- `../runs.js`
- `../sandbox-info.js`
- `../sandbox-skills.js`
- `../session-file-key.js`
- `../session-manager-cache.js`
- `../session-manager-init.js`
- `../session-prompt-state.js`
- `../stream-resolution.js`
- `../system-prompt.js`
- `../thinking-replay-repair.js`
- `../thinking.js`
- `../tool-call-argument-decoding.js`
- `../tool-name-allowlist.js`
- `../tool-result-context-guard.js`
- `../tool-result-truncation.js`
- `../tool-split.js`
- `../usage-accumulator.js`
- `../utils.js`
- `../wait-for-idle-before-flush.js`
- `./abortable.js`
- `./agent-end-context.js`
- `./assistant-failover.js`
- `./attempt-abort.js`
- `./attempt-after-turn.js`
- `./attempt-before-agent-run.js`
- `./attempt-bootstrap-prepare.js`
- `./attempt-bundle-tools.js`
- `./attempt-client-tools.js`
- `./attempt-context-guards.js`
- `./attempt-context-summary.js`
- `./attempt-execution-phase.js`
- `./attempt-execution-settle.js`
- `./attempt-finalize.js`
- `./attempt-history-prepare.js`
- `./attempt-hook-messages.js`
- `./attempt-http-runtime.js`
- `./attempt-orphan-repair.js`
- `./attempt-prompt-assembly.js`
- `./attempt-prompt-context.js`
- `./attempt-prompt-dispatch.js`
- `./attempt-prompt-error.js`
- `./attempt-prompt-execution-prepare.js`
- `./attempt-prompt-observability.js`
- `./attempt-prompt-phase.js`
- `./attempt-prompt-preflight.js`
- `./attempt-prompt-skip.js`
- `./attempt-prompt-submit.js`
- `./attempt-result.js`
- `./attempt-session-boundary.js`
- `./attempt-session-cleanup.js`
- `./attempt-session-lock-prepare.js`
- `./attempt-session-manager-prepare.js`
- `./attempt-session-runtime-prepare.js`
- `./attempt-session-settle.js`
- `./attempt-session.js`
- `./attempt-setup.js`
- `./attempt-stage-timing.js`
- `./attempt-startup.js`
- `./attempt-stream-finalize.js`
- `./attempt-stream-prepare.js`
- `./attempt-stream-runtime-prepare.js`
- `./attempt-stream-settle.js`
- `./attempt-stream-transport.js`
- `./attempt-stream.js`
- `./attempt-system-prompt-prepare.js`
- `./attempt-system-prompt.js`
- `./attempt-timeout-prepare.js`
- `./attempt-tool-allowlist.js`
- `./attempt-tool-base-prepare.js`
- `./attempt-tool-catalog.js`
- `./attempt-tool-construction-plan.js`
- `./attempt-trajectory-flush-cleanup.js`
- `./attempt-trajectory-status.js`
- `./attempt-trajectory.js`
- `./attempt-transcript-helpers.js`
- `./attempt.abort-settle-timeout.js`
- `./attempt.async-tasks.js`
- `./attempt.bootstrap-context.js`
- `./attempt.context-engine-helpers.js`
- `./attempt.llm-boundary.js`
- `./attempt.model-diagnostic-events.js`
- `./attempt.prompt-helpers.js`
- `./attempt.queue-message.js`
- `./attempt.run-decisions.js`
- `./attempt.session-lock.js`
- `./attempt.session-lock.test-support.js`
- `./attempt.sessions-yield.js`
- `./attempt.spawn-workspace.test-support.js`
- `./attempt.stop-reason-recovery.js`
- `./attempt.subscription-cleanup.js`
- `./attempt.thread-helpers.js`
- `./attempt.tool-call-argument-repair.js`
- `./attempt.tool-call-block-type.js`
- `./attempt.tool-call-normalization.js`
- `./attempt.tool-run-context.js`
- `./attempt.tool-search-run-plan.js`
- `./attempt.transcript-policy.js`
- `./attempt.user-message-boundary.js`
- `./attempt.user-transcript-context-registry.js`
- `./auth-controller.js`
- `./auth-plan.js`
- `./auth-profile-failure-policy.js`
- `./auth-profile-success.js`
- `./auth-store.js`
- `./backend.js`
- `./blocked-run-result.js`
- `./codex-app-server-recovery.js`
- `./compaction-retry-aggregate-timeout.js`
- `./compaction-timeout.js`
- `./execution-phase-diagnostics.js`
- `./failover-observation.js`
- `./failover-policy.js`
- `./fallbacks.js`
- `./helpers.js`
- `./history-image-prune.js`
- `./idle-timeout-breaker.js`
- `./images.js`
- `./incomplete-turn.js`
- `./lane-controller.js`
- `./lane-runtime.js`
- `./llm-idle-timeout.js`
- `./message-merge-strategy.js`
- `./message-tool-terminal.js`
- `./message-transform-stream-wrapper.js`
- `./midturn-precheck.js`
- `./model-harness.js`
- `./model-setup.js`
- `./overflow-context-recovery.js`
- `./payloads.js`
- `./payloads.test-helpers.js`
- `./pre-persisted-user-turn.js`
- `./preemptive-compaction.js`
- `./prepared-runtime-context.js`
- `./progress-controller.js`
- `./prompt-failure.js`
- `./recovery-message-action-capability.js`
- `./retry-limit.js`
- `./run-attempt-dispatch.js`
- `./run-attempt-result.js`
- `./runtime-context-prompt.js`
- `./runtime-preparation.js`
- `./runtime-resolution.js`
- `./session-bootstrap.js`
- `./setup.js`
- `./skill-workshop-attempt-params.js`
- `./source-reply-payloads.js`
- `./stream-wrapper.js`
- `./terminal-outcome.js`
- `./terminal-resolution.js`
- `./terminal-retry-state.js`
- `./timeout-context-recovery.js`
- `./tool-activity-heartbeat.js`
- `./tool-failure-acknowledgement.js`
- `./tool-media-payloads.js`
- `./trigger-policy.js`
- `@openclaw/ai/internal/openai`
- `@openclaw/ai/internal/runtime`
- `@openclaw/ai/internal/shared`
- `@openclaw/media-core/constants`
- `@openclaw/model-catalog-core/provider-id`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `node:async_hooks`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:url`
- `node:util`
- `openclaw/plugin-sdk/agent-runtime-test-contracts`
- `openclaw/plugin-sdk/llm`
- `vitest`
