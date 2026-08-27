# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_gateway[src-gateway] --> src[src]
    src_gateway[src-gateway] --> src[src]
    src_gateway[src-gateway] --> src[src]
    src_gateway[src-gateway] --> src[src]
    src_gateway[src-gateway] --> src[src]
    src_gateway[src-gateway] --> src[src]
    src_gateway[src-gateway] --> src[src]
    src_gateway[src-gateway] --> src[src]
    src_gateway[src-gateway] --> src[src]
    src_gateway[src-gateway] --> src[src]
    src_gateway[src-gateway] --> src[src]
    src_gateway[src-gateway] --> src[src]
    src_gateway[src-gateway] --> src[src]
    src_gateway[src-gateway] --> helpers[helpers]
    src_gateway[src-gateway] --> gateway[gateway]
    src_gateway[src-gateway] --> gateway[gateway]
    src_gateway[src-gateway] --> gateway[gateway]
    src_gateway[src-gateway] --> helpers[helpers]
    src_gateway[src-gateway] --> helpers[helpers]
    src_gateway[src-gateway] --> helpers[helpers]
    src_gateway[src-gateway] --> lib[lib]
    src_gateway[src-gateway] --> control_plane[control-plane]
    src_gateway[src-gateway] --> runtime[runtime]
    src_gateway[src-gateway] --> runtime[runtime]
    src_gateway[src-gateway] --> runtime[runtime]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> auth_profiles[auth-profiles]
    src_gateway[src-gateway] --> auth_profiles[auth-profiles]
    src_gateway[src-gateway] --> auth_profiles[auth-profiles]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> cli_runner[cli-runner]
    src_gateway[src-gateway] --> cli_runner[cli-runner]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> embedded_agent_helpers[embedded-agent-helpers]
    src_gateway[src-gateway] --> embedded_agent_runner[embedded-agent-runner]
    src_gateway[src-gateway] --> embedded_agent_runner[embedded-agent-runner]
    src_gateway[src-gateway] --> embedded_agent_runner[embedded-agent-runner]
    src_gateway[src-gateway] --> embedded_agent_runner[embedded-agent-runner]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> harness[harness]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> sandbox[sandbox]
    src_gateway[src-gateway] --> sandbox[sandbox]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> tools[tools]
    src_gateway[src-gateway] --> tools[tools]
    src_gateway[src-gateway] --> tools[tools]
    src_gateway[src-gateway] --> tools[tools]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> agents[agents]
    src_gateway[src-gateway] --> worktrees[worktrees]
    src_gateway[src-gateway] --> worktrees[worktrees]
    src_gateway[src-gateway] --> worktrees[worktrees]
    src_gateway[src-gateway] --> worktrees[worktrees]
    src_gateway[src-gateway] --> audit[audit]
    src_gateway[src-gateway] --> audit[audit]
    src_gateway[src-gateway] --> audit[audit]
    src_gateway[src-gateway] --> auto_reply[auto-reply]
    src_gateway[src-gateway] --> auto_reply[auto-reply]
    src_gateway[src-gateway] --> auto_reply[auto-reply]
    src_gateway[src-gateway] --> reply[reply]
    src_gateway[src-gateway] --> reply[reply]
    src_gateway[src-gateway] --> reply[reply]
    src_gateway[src-gateway] --> reply[reply]
    src_gateway[src-gateway] --> reply[reply]
    src_gateway[src-gateway] --> reply[reply]
    src_gateway[src-gateway] --> reply[reply]
    src_gateway[src-gateway] --> reply[reply]
    src_gateway[src-gateway] --> reply[reply]
    src_gateway[src-gateway] --> reply[reply]
    src_gateway[src-gateway] --> reply[reply]
    src_gateway[src-gateway] --> queue[queue]
    src_gateway[src-gateway] --> queue[queue]
    src_gateway[src-gateway] --> reply[reply]
    src_gateway[src-gateway] --> reply[reply]
    src_gateway[src-gateway] --> reply[reply]
    src_gateway[src-gateway] --> reply[reply]
    src_gateway[src-gateway] --> reply[reply]
    src_gateway[src-gateway] --> auto_reply[auto-reply]
    src_gateway[src-gateway] --> auto_reply[auto-reply]
    src_gateway[src-gateway] --> boards[boards]
    src_gateway[src-gateway] --> boards[boards]
    src_gateway[src-gateway] --> __[..]
    src_gateway[src-gateway] --> canvas[canvas]
    src_gateway[src-gateway] --> canvas[canvas]
    src_gateway[src-gateway] --> canvas[canvas]
    src_gateway[src-gateway] --> channels[channels]
    src_gateway[src-gateway] --> channels[channels]
    src_gateway[src-gateway] --> message[message]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> channels[channels]
    src_gateway[src-gateway] --> channels[channels]
    src_gateway[src-gateway] --> turn[turn]
    src_gateway[src-gateway] --> chat[chat]
    src_gateway[src-gateway] --> chat[chat]
    src_gateway[src-gateway] --> cli[cli]
    src_gateway[src-gateway] --> cli[cli]
    src_gateway[src-gateway] --> update_cli[update-cli]
    src_gateway[src-gateway] --> commands[commands]
    src_gateway[src-gateway] --> commands[commands]
    src_gateway[src-gateway] --> commands[commands]
    src_gateway[src-gateway] --> commands[commands]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> config[config]
    src_gateway[src-gateway] --> cron[cron]
    src_gateway[src-gateway] --> cron[cron]
    src_gateway[src-gateway] --> cron[cron]
    src_gateway[src-gateway] --> cron[cron]
    src_gateway[src-gateway] --> cron[cron]
    src_gateway[src-gateway] --> cron[cron]
    src_gateway[src-gateway] --> cron[cron]
    src_gateway[src-gateway] --> cron[cron]
    src_gateway[src-gateway] --> cron[cron]
    src_gateway[src-gateway] --> cron[cron]
    src_gateway[src-gateway] --> service[service]
    src_gateway[src-gateway] --> cron[cron]
    src_gateway[src-gateway] --> cron[cron]
    src_gateway[src-gateway] --> cron[cron]
    src_gateway[src-gateway] --> cron[cron]
    src_gateway[src-gateway] --> __[..]
    src_gateway[src-gateway] --> hooks[hooks]
    src_gateway[src-gateway] --> hooks[hooks]
    src_gateway[src-gateway] --> hooks[hooks]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> net[net]
    src_gateway[src-gateway] --> net[net]
    src_gateway[src-gateway] --> proxy[proxy]
    src_gateway[src-gateway] --> proxy[proxy]
    src_gateway[src-gateway] --> net[net]
    src_gateway[src-gateway] --> net[net]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> outbound[outbound]
    src_gateway[src-gateway] --> outbound[outbound]
    src_gateway[src-gateway] --> outbound[outbound]
    src_gateway[src-gateway] --> outbound[outbound]
    src_gateway[src-gateway] --> outbound[outbound]
    src_gateway[src-gateway] --> outbound[outbound]
    src_gateway[src-gateway] --> outbound[outbound]
    src_gateway[src-gateway] --> outbound[outbound]
    src_gateway[src-gateway] --> outbound[outbound]
    src_gateway[src-gateway] --> outbound[outbound]
    src_gateway[src-gateway] --> outbound[outbound]
    src_gateway[src-gateway] --> outbound[outbound]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> tls[tls]
    src_gateway[src-gateway] --> tls[tls]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> infra[infra]
    src_gateway[src-gateway] --> __[..]
    src_gateway[src-gateway] --> __[..]
    src_gateway[src-gateway] --> logging[logging]
    src_gateway[src-gateway] --> logging[logging]
    src_gateway[src-gateway] --> logging[logging]
    src_gateway[src-gateway] --> logging[logging]
    src_gateway[src-gateway] --> logging[logging]
    src_gateway[src-gateway] --> logging[logging]
    src_gateway[src-gateway] --> logging[logging]
    src_gateway[src-gateway] --> logging[logging]
    src_gateway[src-gateway] --> logging[logging]
    src_gateway[src-gateway] --> media[media]
    src_gateway[src-gateway] --> media[media]
    src_gateway[src-gateway] --> media[media]
    src_gateway[src-gateway] --> media[media]
    src_gateway[src-gateway] --> media[media]
    src_gateway[src-gateway] --> media[media]
    src_gateway[src-gateway] --> media[media]
    src_gateway[src-gateway] --> media[media]
    src_gateway[src-gateway] --> media[media]
    src_gateway[src-gateway] --> media[media]
    src_gateway[src-gateway] --> media[media]
    src_gateway[src-gateway] --> media[media]
    src_gateway[src-gateway] --> media[media]
    src_gateway[src-gateway] --> host[host]
    src_gateway[src-gateway] --> model_catalog[model-catalog]
    src_gateway[src-gateway] --> node_host[node-host]
    src_gateway[src-gateway] --> plugin_sdk[plugin-sdk]
    src_gateway[src-gateway] --> plugin_sdk[plugin-sdk]
    src_gateway[src-gateway] --> plugin_state[plugin-state]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> runtime[runtime]
    src_gateway[src-gateway] --> runtime[runtime]
    src_gateway[src-gateway] --> runtime[runtime]
    src_gateway[src-gateway] --> runtime[runtime]
    src_gateway[src-gateway] --> runtime[runtime]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> plugins[plugins]
    src_gateway[src-gateway] --> process[process]
    src_gateway[src-gateway] --> process[process]
    src_gateway[src-gateway] --> process[process]
    src_gateway[src-gateway] --> process[process]
    src_gateway[src-gateway] --> process[process]
    src_gateway[src-gateway] --> supervisor[supervisor]
    src_gateway[src-gateway] --> routing[routing]
    src_gateway[src-gateway] --> routing[routing]
    src_gateway[src-gateway] --> routing[routing]
    src_gateway[src-gateway] --> __[..]
    src_gateway[src-gateway] --> secrets[secrets]
    src_gateway[src-gateway] --> secrets[secrets]
    src_gateway[src-gateway] --> secrets[secrets]
    src_gateway[src-gateway] --> secrets[secrets]
    src_gateway[src-gateway] --> secrets[secrets]
    src_gateway[src-gateway] --> secrets[secrets]
    src_gateway[src-gateway] --> secrets[secrets]
    src_gateway[src-gateway] --> secrets[secrets]
    src_gateway[src-gateway] --> secrets[secrets]
    src_gateway[src-gateway] --> secrets[secrets]
    src_gateway[src-gateway] --> secrets[secrets]
    src_gateway[src-gateway] --> secrets[secrets]
    src_gateway[src-gateway] --> secrets[secrets]
    src_gateway[src-gateway] --> secrets[secrets]
    src_gateway[src-gateway] --> secrets[secrets]
    src_gateway[src-gateway] --> secrets[secrets]
    src_gateway[src-gateway] --> secrets[secrets]
    src_gateway[src-gateway] --> security[security]
    src_gateway[src-gateway] --> security[security]
    src_gateway[src-gateway] --> security[security]
    src_gateway[src-gateway] --> security[security]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> sessions[sessions]
    src_gateway[src-gateway] --> shared[shared]
    src_gateway[src-gateway] --> shared[shared]
    src_gateway[src-gateway] --> shared[shared]
    src_gateway[src-gateway] --> shared[shared]
    src_gateway[src-gateway] --> shared[shared]
    src_gateway[src-gateway] --> shared[shared]
    src_gateway[src-gateway] --> shared[shared]
    src_gateway[src-gateway] --> shared[shared]
    src_gateway[src-gateway] --> shared[shared]
    src_gateway[src-gateway] --> shared[shared]
    src_gateway[src-gateway] --> shared[shared]
    src_gateway[src-gateway] --> shared[shared]
    src_gateway[src-gateway] --> shared[shared]
    src_gateway[src-gateway] --> shared[shared]
    src_gateway[src-gateway] --> shared[shared]
    src_gateway[src-gateway] --> shared[shared]
    src_gateway[src-gateway] --> shared[shared]
    src_gateway[src-gateway] --> shared[shared]
    src_gateway[src-gateway] --> shared[shared]
    src_gateway[src-gateway] --> text[text]
    src_gateway[src-gateway] --> text[text]
    src_gateway[src-gateway] --> shared[shared]
    src_gateway[src-gateway] --> runtime[runtime]
    src_gateway[src-gateway] --> runtime[runtime]
    src_gateway[src-gateway] --> workshop[workshop]
    src_gateway[src-gateway] --> state[state]
    src_gateway[src-gateway] --> state[state]
    src_gateway[src-gateway] --> state[state]
    src_gateway[src-gateway] --> talk[talk]
    src_gateway[src-gateway] --> talk[talk]
    src_gateway[src-gateway] --> talk[talk]
    src_gateway[src-gateway] --> talk[talk]
    src_gateway[src-gateway] --> talk[talk]
    src_gateway[src-gateway] --> talk[talk]
    src_gateway[src-gateway] --> talk[talk]
    src_gateway[src-gateway] --> talk[talk]
    src_gateway[src-gateway] --> talk[talk]
    src_gateway[src-gateway] --> talk[talk]
    src_gateway[src-gateway] --> talk[talk]
    src_gateway[src-gateway] --> talk[talk]
    src_gateway[src-gateway] --> tasks[tasks]
    src_gateway[src-gateway] --> tasks[tasks]
    src_gateway[src-gateway] --> tasks[tasks]
    src_gateway[src-gateway] --> tasks[tasks]
    src_gateway[src-gateway] --> tasks[tasks]
    src_gateway[src-gateway] --> tasks[tasks]
    src_gateway[src-gateway] --> test_helpers[test-helpers]
    src_gateway[src-gateway] --> test_helpers[test-helpers]
    src_gateway[src-gateway] --> test_helpers[test-helpers]
    src_gateway[src-gateway] --> test_utils[test-utils]
    src_gateway[src-gateway] --> test_utils[test-utils]
    src_gateway[src-gateway] --> test_utils[test-utils]
    src_gateway[src-gateway] --> test_utils[test-utils]
    src_gateway[src-gateway] --> test_utils[test-utils]
    src_gateway[src-gateway] --> test_utils[test-utils]
    src_gateway[src-gateway] --> test_utils[test-utils]
    src_gateway[src-gateway] --> test_utils[test-utils]
    src_gateway[src-gateway] --> test_utils[test-utils]
    src_gateway[src-gateway] --> test_utils[test-utils]
    src_gateway[src-gateway] --> test_utils[test-utils]
    src_gateway[src-gateway] --> trajectory[trajectory]
    src_gateway[src-gateway] --> __[..]
    src_gateway[src-gateway] --> utils[utils]
    src_gateway[src-gateway] --> utils[utils]
    src_gateway[src-gateway] --> utils[utils]
    src_gateway[src-gateway] --> utils[utils]
    src_gateway[src-gateway] --> utils[utils]
    src_gateway[src-gateway] --> utils[utils]
    src_gateway[src-gateway] --> utils[utils]
    src_gateway[src-gateway] --> utils[utils]
    src_gateway[src-gateway] --> utils[utils]
    src_gateway[src-gateway] --> utils[utils]
    src_gateway[src-gateway] --> utils[utils]
    src_gateway[src-gateway] --> utils[utils]
    src_gateway[src-gateway] --> utils[utils]
    src_gateway[src-gateway] --> utils[utils]
    src_gateway[src-gateway] --> __[..]
    src_gateway[src-gateway] --> wizard[wizard]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> methods[methods]
    src_gateway[src-gateway] --> methods[methods]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> server_methods[server-methods]
    src_gateway[src-gateway] --> server_methods[server-methods]
    src_gateway[src-gateway] --> server_methods[server-methods]
    src_gateway[src-gateway] --> server_methods[server-methods]
    src_gateway[src-gateway] --> server_methods[server-methods]
    src_gateway[src-gateway] --> server_methods[server-methods]
    src_gateway[src-gateway] --> server_methods[server-methods]
    src_gateway[src-gateway] --> server_methods[server-methods]
    src_gateway[src-gateway] --> server_methods[server-methods]
    src_gateway[src-gateway] --> server_methods[server-methods]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> __tests__[__tests__]
    src_gateway[src-gateway] --> server[server]
    src_gateway[src-gateway] --> server[server]
    src_gateway[src-gateway] --> server[server]
    src_gateway[src-gateway] --> server[server]
    src_gateway[src-gateway] --> server[server]
    src_gateway[src-gateway] --> server[server]
    src_gateway[src-gateway] --> server[server]
    src_gateway[src-gateway] --> plugins_http[plugins-http]
    src_gateway[src-gateway] --> plugins_http[plugins-http]
    src_gateway[src-gateway] --> plugins_http[plugins-http]
    src_gateway[src-gateway] --> plugins_http[plugins-http]
    src_gateway[src-gateway] --> server[server]
    src_gateway[src-gateway] --> server[server]
    src_gateway[src-gateway] --> server[server]
    src_gateway[src-gateway] --> server[server]
    src_gateway[src-gateway] --> server[server]
    src_gateway[src-gateway] --> ws_connection[ws-connection]
    src_gateway[src-gateway] --> ws_connection[ws-connection]
    src_gateway[src-gateway] --> server[server]
    src_gateway[src-gateway] --> server[server]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> terminal[terminal]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> test[test]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> worker_environments[worker-environments]
    src_gateway[src-gateway] --> worker_environments[worker-environments]
    src_gateway[src-gateway] --> worker_environments[worker-environments]
    src_gateway[src-gateway] --> worker_environments[worker-environments]
    src_gateway[src-gateway] --> worker_environments[worker-environments]
    src_gateway[src-gateway] --> worker_environments[worker-environments]
    src_gateway[src-gateway] --> worker_environments[worker-environments]
    src_gateway[src-gateway] --> worker_environments[worker-environments]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> _[.]
    src_gateway[src-gateway] --> sdk[sdk]
    src_gateway[src-gateway] --> media_core[media-core]
    src_gateway[src-gateway] --> media_core[media-core]
    src_gateway[src-gateway] --> media_core[media-core]
    src_gateway[src-gateway] --> model_catalog_core[model-catalog-core]
    src_gateway[src-gateway] --> model_catalog_core[model-catalog-core]
    src_gateway[src-gateway] --> net_policy[net-policy]
    src_gateway[src-gateway] --> net_policy[net-policy]
    src_gateway[src-gateway] --> _openclaw[@openclaw]
    src_gateway[src-gateway] --> normalization_core[normalization-core]
    src_gateway[src-gateway] --> normalization_core[normalization-core]
    src_gateway[src-gateway] --> normalization_core[normalization-core]
    src_gateway[src-gateway] --> normalization_core[normalization-core]
    src_gateway[src-gateway] --> normalization_core[normalization-core]
    src_gateway[src-gateway] --> normalization_core[normalization-core]
    src_gateway[src-gateway] --> chalk[chalk]
    src_gateway[src-gateway] --> chokidar[chokidar]
    src_gateway[src-gateway] --> file_type[file-type]
    src_gateway[src-gateway] --> node_async_hooks[node:async_hooks]
    src_gateway[src-gateway] --> node_buffer[node:buffer]
    src_gateway[src-gateway] --> node_child_process[node:child_process]
    src_gateway[src-gateway] --> node_crypto[node:crypto]
    src_gateway[src-gateway] --> node_events[node:events]
    src_gateway[src-gateway] --> node_fs[node:fs]
    src_gateway[src-gateway] --> node_fs[node:fs]
    src_gateway[src-gateway] --> node_http[node:http]
    src_gateway[src-gateway] --> node_https[node:https]
    src_gateway[src-gateway] --> node_net[node:net]
    src_gateway[src-gateway] --> node_os[node:os]
    src_gateway[src-gateway] --> node_path[node:path]
    src_gateway[src-gateway] --> node_perf_hooks[node:perf_hooks]
    src_gateway[src-gateway] --> node_stream[node:stream]
    src_gateway[src-gateway] --> node_stream[node:stream]
    src_gateway[src-gateway] --> node_string_decoder[node:string_decoder]
    src_gateway[src-gateway] --> node_timers[node:timers]
    src_gateway[src-gateway] --> node_tls[node:tls]
    src_gateway[src-gateway] --> node_url[node:url]
    src_gateway[src-gateway] --> node_util[node:util]
    src_gateway[src-gateway] --> node_worker_threads[node:worker_threads]
    src_gateway[src-gateway] --> node_zlib[node:zlib]
    src_gateway[src-gateway] --> plugin_sdk[plugin-sdk]
    src_gateway[src-gateway] --> plugin_sdk[plugin-sdk]
    src_gateway[src-gateway] --> plugin_sdk[plugin-sdk]
    src_gateway[src-gateway] --> plugin_sdk[plugin-sdk]
    src_gateway[src-gateway] --> plugin_sdk[plugin-sdk]
    src_gateway[src-gateway] --> plugin_sdk[plugin-sdk]
    src_gateway[src-gateway] --> p_map[p-map]
    src_gateway[src-gateway] --> undici[undici]
    src_gateway[src-gateway] --> vitest[vitest]
    src_gateway[src-gateway] --> zod[zod]
```

## Internal Dependencies

Dependencies within this module:

- `ws`

## External Dependencies

Dependencies from other modules:

- `../../packages/gateway-client/src/index.js`
- `../../packages/gateway-client/src/readiness.js`
- `../../packages/gateway-client/src/timeouts.js`
- `../../packages/gateway-protocol/src/client-info.js`
- `../../packages/gateway-protocol/src/connect-error-details.js`
- `../../packages/gateway-protocol/src/gateway-error-details.js`
- `../../packages/gateway-protocol/src/index.js`
- `../../packages/gateway-protocol/src/startup-unavailable.js`
- `../../packages/gateway-protocol/src/version.js`
- `../../packages/normalization-core/src/string-coerce.js`
- `../../packages/retry/src/index.js`
- `../../packages/speech-core/src/speech-text.js`
- `../../packages/terminal-core/src/ansi.js`
- `../../test/helpers/browser-bundled-plugin-fixture.js`
- `../../test/helpers/gateway/android-node-capabilities-policy-config.js`
- `../../test/helpers/gateway/android-node-capabilities-policy-source.js`
- `../../test/helpers/gateway/android-node-capabilities-required-commands.js`
- `../../test/helpers/image-fixtures.js`
- `../../test/helpers/live-image-probe.js`
- `../../test/helpers/temp-dir.js`
- `../../ui/src/lib/assistant-identity.ts`
- `../acp/control-plane/manager.js`
- `../acp/runtime/errors.js`
- `../acp/runtime/registry.js`
- `../acp/runtime/session-meta.js`
- `../agents/acp-spawn.js`
- `../agents/agent-bundle-mcp-runtime.js`
- `../agents/agent-bundle-mcp-tools.js`
- `../agents/agent-lifecycle-parent-state.js`
- `../agents/agent-model-discovery.js`
- `../agents/agent-run-terminal-outcome.js`
- `../agents/agent-runtime-id.js`
- `../agents/agent-runtime-metadata.js`
- `../agents/agent-scope-config.js`
- `../agents/agent-scope.js`
- `../agents/agent-tool-definition-adapter.js`
- `../agents/agent-tools.before-tool-call.js`
- `../agents/agent-tools.js`
- `../agents/agent-tools.message-provider-policy.js`
- `../agents/agent-tools.policy.js`
- `../agents/auth-profiles.js`
- `../agents/auth-profiles/path-constants.js`
- `../agents/auth-profiles/runtime-snapshots.js`
- `../agents/auth-profiles/store.js`
- `../agents/bash-process-registry.js`
- `../agents/bash-process-registry.test-helpers.js`
- `../agents/bash-process-registry.test-support.js`
- `../agents/bash-tools.schemas.js`
- `../agents/bootstrap-cache.js`
- `../agents/channel-tools.js`
- `../agents/cli-backends.js`
- `../agents/cli-backends.test-support.js`
- `../agents/cli-runner/claude-live-session.js`
- `../agents/cli-runner/reseed-envelope.js`
- `../agents/cli-session.js`
- `../agents/context-resolution.js`
- `../agents/context.js`
- `../agents/defaults.js`
- `../agents/embedded-agent-helpers/sanitize-user-facing-text.js`
- `../agents/embedded-agent-runner/delivery-evidence.js`
- `../agents/embedded-agent-runner/run-state.js`
- `../agents/embedded-agent-runner/runs.js`
- `../agents/embedded-agent-runner/runs.test-support.js`
- `../agents/embedded-agent-subscribe.e2e-harness.js`
- `../agents/embedded-agent-subscribe.js`
- `../agents/embedded-agent.js`
- `../agents/exec-defaults.js`
- `../agents/failover-error.js`
- `../agents/fast-mode.js`
- `../agents/harness/registry.js`
- `../agents/identity-avatar-file.js`
- `../agents/identity-avatar.js`
- `../agents/identity.js`
- `../agents/inherited-tool-deny.js`
- `../agents/internal-events.js`
- `../agents/internal-runtime-context.js`
- `../agents/lazy-exec-tool.js`
- `../agents/live-auth-keys.js`
- `../agents/live-model-dynamic-candidates.js`
- `../agents/live-model-errors.js`
- `../agents/live-model-filter.js`
- `../agents/live-target-matcher.js`
- `../agents/live-test-helpers.js`
- `../agents/live-test-provider-drift.js`
- `../agents/live-test-provider-drift.test-support.js`
- `../agents/main-session-recovery-clear.js`
- `../agents/main-session-recovery-lifecycle.js`
- `../agents/mcp-app-sandbox.js`
- `../agents/mcp-ui-resource.js`
- `../agents/memory-search.js`
- `../agents/model-auth.js`
- `../agents/model-catalog.js`
- `../agents/model-provider-auth.js`
- `../agents/model-ref-profile.js`
- `../agents/model-selection-normalize.js`
- `../agents/model-selection-shared.js`
- `../agents/model-selection.js`
- `../agents/model-suppression.js`
- `../agents/model-thinking-default.js`
- `../agents/model-visibility-policy.js`
- `../agents/models-config.js`
- `../agents/openclaw-tools.js`
- `../agents/prepared-model-catalog.js`
- `../agents/prepared-model-runtime.js`
- `../agents/provider-auth-aliases.js`
- `../agents/provider-auth-aliases.test-support.js`
- `../agents/provider-local-service.js`
- `../agents/run-termination.js`
- `../agents/sandbox/context.js`
- `../agents/sandbox/runtime-status.js`
- `../agents/sender-tool-policy.js`
- `../agents/session-model-ref.js`
- `../agents/session-placement-admission.js`
- `../agents/session-runtime-compat.js`
- `../agents/session-suspension.js`
- `../agents/sessions/session-manager.js`
- `../agents/simple-completion-runtime.js`
- `../agents/stream-message-shared.js`
- `../agents/subagent-capabilities.js`
- `../agents/subagent-control.js`
- `../agents/subagent-registry-read.js`
- `../agents/subagent-registry.js`
- `../agents/subagent-registry.store.sqlite.js`
- `../agents/subagent-registry.test-helpers.js`
- `../agents/subagent-run-liveness.js`
- `../agents/thinking-runtime.js`
- `../agents/tool-catalog.js`
- `../agents/tool-display-common.js`
- `../agents/tool-error-summary.js`
- `../agents/tool-loop-detection-config.js`
- `../agents/tool-policy-declared-context.js`
- `../agents/tool-policy-pipeline.js`
- `../agents/tool-policy.js`
- `../agents/tool-result-error.js`
- `../agents/tools/agent-step.test-support.js`
- `../agents/tools/common.js`
- `../agents/tools/cron-tool.js`
- `../agents/tools/sessions-send-tool.a2a.js`
- `../agents/usage.js`
- `../agents/utility-model.js`
- `../agents/worktrees/git.js`
- `../agents/worktrees/owner-protection.js`
- `../agents/worktrees/registry.js`
- `../agents/worktrees/service.js`
- `../audit/audit-config.js`
- `../audit/audit-recorder.js`
- `../audit/message-audit-events.js`
- `../auto-reply/group-activation.js`
- `../auto-reply/heartbeat-filter.js`
- `../auto-reply/heartbeat.js`
- `../auto-reply/reply/abort-primitives.js`
- `../auto-reply/reply/abort.js`
- `../auto-reply/reply/completion-delivery-policy.js`
- `../auto-reply/reply/conversation-label-generator.js`
- `../auto-reply/reply/dispatcher-registry.js`
- `../auto-reply/reply/display-text-sanitize.js`
- `../auto-reply/reply/get-reply-run-queue.js`
- `../auto-reply/reply/history.js`
- `../auto-reply/reply/inbound-context.js`
- `../auto-reply/reply/mentions.js`
- `../auto-reply/reply/provider-dispatcher.js`
- `../auto-reply/reply/queue/cleanup.js`
- `../auto-reply/reply/queue/settings.js`
- `../auto-reply/reply/reply-dispatcher.js`
- `../auto-reply/reply/session-fork.js`
- `../auto-reply/reply/session-hooks.js`
- `../auto-reply/reply/session-reset-cleanup.js`
- `../auto-reply/reply/strip-inbound-meta.js`
- `../auto-reply/thinking.js`
- `../auto-reply/tokens.js`
- `../boards/board-store.js`
- `../boards/sqlite-board-store.js`
- `../browser-lifecycle-cleanup.js`
- `../canvas/config.js`
- `../canvas/constants.js`
- `../canvas/documents.js`
- `../channels/account-snapshot-fields.js`
- `../channels/chat-type.js`
- `../channels/message/runtime.js`
- `../channels/plugins/binding-registry.js`
- `../channels/plugins/conversation-read-origin.js`
- `../channels/plugins/gateway-auth-bypass.js`
- `../channels/plugins/helpers.js`
- `../channels/plugins/index.js`
- `../channels/plugins/registry-loaded.js`
- `../channels/session.js`
- `../channels/streaming.js`
- `../channels/turn/kernel.js`
- `../chat/canvas-render.js`
- `../chat/tool-content.js`
- `../cli/config-recovery-hints.js`
- `../cli/deps.js`
- `../cli/update-cli/plugin-payload-validation.js`
- `../commands/agent.js`
- `../commands/agents.config.js`
- `../commands/doctor-session-sqlite-types.js`
- `../commands/status.gateway-probe.js`
- `../config/agent-limits.js`
- `../config/commands.flags.js`
- `../config/config-env-vars.js`
- `../config/config-journal-snapshot.js`
- `../config/config-paths.js`
- `../config/config.js`
- `../config/cron-limits.js`
- `../config/env-substitution.js`
- `../config/gateway-control-ui-origins.js`
- `../config/gateway-dispatch-config.js`
- `../config/gateway-env-selection.js`
- `../config/io.audit.js`
- `../config/io.invalid-config.js`
- `../config/io.js`
- `../config/issue-format.js`
- `../config/model-input.js`
- `../config/paths.js`
- `../config/plugin-auto-enable.js`
- `../config/plugin-web-search-config.js`
- `../config/recovery-policy.js`
- `../config/redact-snapshot.js`
- `../config/runtime-overrides.js`
- `../config/runtime-snapshot.js`
- `../config/sessions.js`
- `../config/sessions/archive-compression.js`
- `../config/sessions/artifacts.js`
- `../config/sessions/cli-session-binding.js`
- `../config/sessions/combined-store-gateway.js`
- `../config/sessions/conversation-delivery-store.js`
- `../config/sessions/conversation-identity.js`
- `../config/sessions/conversation-registry.js`
- `../config/sessions/file-range.js`
- `../config/sessions/generated-transcript-session-id.js`
- `../config/sessions/main-session.js`
- `../config/sessions/paths.js`
- `../config/sessions/reset-preserved-selection.js`
- `../config/sessions/restart-recovery-state.js`
- `../config/sessions/session-accessor.js`
- `../config/sessions/session-accessor.sqlite.js`
- `../config/sessions/session-entry-selection.js`
- `../config/sessions/session-model-fallback.js`
- `../config/sessions/session-sqlite-target.js`
- `../config/sessions/session-transcript-reconcile.js`
- `../config/sessions/sqlite-marker.js`
- `../config/sessions/startup-migration.js`
- `../config/sessions/store-cache.js`
- `../config/sessions/store-writer.js`
- `../config/sessions/store.js`
- `../config/sessions/thread-info.js`
- `../config/sessions/transcript-stream.js`
- `../config/sessions/transcript-tree.js`
- `../config/sessions/transcript.js`
- `../config/sessions/version.js`
- `../config/state-dir-dotenv.js`
- `../config/talk.js`
- `../config/types.secrets.js`
- `../cron/active-jobs.js`
- `../cron/command-output-summary.js`
- `../cron/command-runner.js`
- `../cron/delivery-context.js`
- `../cron/delivery.js`
- `../cron/delivery.test-helpers.js`
- `../cron/isolated-agent.js`
- `../cron/job-session-bindings.js`
- `../cron/public-job.js`
- `../cron/service.js`
- `../cron/service/active-run-cancellation.js`
- `../cron/session-target.js`
- `../cron/store.js`
- `../cron/trigger-script.js`
- `../cron/webhook-url.js`
- `../globals.js`
- `../hooks/configured.js`
- `../hooks/internal-hooks.js`
- `../hooks/module-loader.js`
- `../infra/abort-signal.js`
- `../infra/active-node-context.js`
- `../infra/advertised-lan-host.js`
- `../infra/agent-events.js`
- `../infra/approval-gateway-runtime-context.js`
- `../infra/approval-gateway-runtime-methods.js`
- `../infra/approval-handler-bootstrap.js`
- `../infra/approval-native-route-coordinator.js`
- `../infra/approval-presentation.js`
- `../infra/approval-resolution-ref.js`
- `../infra/backoff.js`
- `../infra/boundary-file-read.js`
- `../infra/channel-runtime-context.js`
- `../infra/container-environment.js`
- `../infra/control-ui-assets.js`
- `../infra/crypto-digest.js`
- `../infra/delivery-queue-sqlite.js`
- `../infra/delivery-recovery.shared.js`
- `../infra/dev-install-branch.js`
- `../infra/device-auth-store.js`
- `../infra/device-bootstrap.js`
- `../infra/device-identity.js`
- `../infra/device-pairing.js`
- `../infra/diagnostic-events.js`
- `../infra/diagnostic-trace-context.js`
- `../infra/diagnostics-timeline.js`
- `../infra/env.js`
- `../infra/errors.js`
- `../infra/event-session-routing.js`
- `../infra/exec-approval-forwarder.js`
- `../infra/exec-approvals.js`
- `../infra/file-read.js`
- `../infra/fs-safe.js`
- `../infra/gateway-suspend-coordinator.js`
- `../infra/heartbeat-events.js`
- `../infra/heartbeat-runner.js`
- `../infra/heartbeat-visibility.js`
- `../infra/heartbeat-wake.js`
- `../infra/home-dir.js`
- `../infra/http-body.js`
- `../infra/json-utf8-bytes.js`
- `../infra/kysely-sync.js`
- `../infra/local-file-access.js`
- `../infra/net/fetch-guard.js`
- `../infra/net/proxy-env.js`
- `../infra/net/proxy/active-proxy-state.js`
- `../infra/net/proxy/proxy-lifecycle.js`
- `../infra/net/ssrf.js`
- `../infra/net/undici-global-dispatcher.js`
- `../infra/network-discovery-display.js`
- `../infra/network-interfaces.js`
- `../infra/node-commands.js`
- `../infra/node-pairing-surface.js`
- `../infra/node-pairing.js`
- `../infra/openclaw-exec-env.js`
- `../infra/outbound/channel-resolution.js`
- `../infra/outbound/conversation-delivery.js`
- `../infra/outbound/deliver-types.js`
- `../infra/outbound/deliver.js`
- `../infra/outbound/delivery-queue-media-spool.js`
- `../infra/outbound/delivery-queue-storage.js`
- `../infra/outbound/delivery-queue.js`
- `../infra/outbound/outbound-session.js`
- `../infra/outbound/session-binding-service.js`
- `../infra/outbound/session-context.js`
- `../infra/outbound/target-resolver.js`
- `../infra/outbound/targets.js`
- `../infra/pairing-token.js`
- `../infra/parse-finite-number.js`
- `../infra/path-env.js`
- `../infra/path-safety.js`
- `../infra/plugin-approval-canonical-decisions.js`
- `../infra/plugin-approvals.js`
- `../infra/ports-probe.js`
- `../infra/push-apns.js`
- `../infra/regular-file.js`
- `../infra/restart-handoff.js`
- `../infra/restart-sentinel.js`
- `../infra/restart.js`
- `../infra/session-delivery-queue-runtime.js`
- `../infra/session-delivery-queue.js`
- `../infra/shell-wrapper-resolution.js`
- `../infra/supervisor-markers.js`
- `../infra/system-agent-approvals.js`
- `../infra/system-events.js`
- `../infra/system-presence.js`
- `../infra/system-run-approval-binding.js`
- `../infra/system-run-approval-context.js`
- `../infra/system-run-command.js`
- `../infra/tailnet.js`
- `../infra/tailscale.js`
- `../infra/tcp-port.js`
- `../infra/tls/fingerprint.js`
- `../infra/tls/gateway.js`
- `../infra/tmp-openclaw-dir.js`
- `../infra/update-control-plane-sentinel.js`
- `../infra/update-runner.js`
- `../infra/voicewake.js`
- `../infra/widearea-dns.js`
- `../infra/ws.js`
- `../logger.js`
- `../logging.js`
- `../logging/console.js`
- `../logging/diagnostic-payload.js`
- `../logging/diagnostic-phase.js`
- `../logging/diagnostic-stability.js`
- `../logging/diagnostic.js`
- `../logging/logger.js`
- `../logging/redact.js`
- `../logging/state.js`
- `../logging/subsystem.js`
- `../media/fetch.js`
- `../media/file-context.js`
- `../media/image-ops.js`
- `../media/input-files.js`
- `../media/local-media-access.js`
- `../media/local-media-path.js`
- `../media/local-roots.js`
- `../media/media-reference-comparison.js`
- `../media/media-reference.js`
- `../media/media-services.js`
- `../media/sniff-mime-from-base64.js`
- `../media/store.js`
- `../media/store.test-support.js`
- `../memory-host-sdk/host/backend-config.js`
- `../model-catalog/index.js`
- `../node-host/config.js`
- `../plugin-sdk/channel-route.js`
- `../plugin-sdk/google-model-id.js`
- `../plugin-state/plugin-state-store.js`
- `../plugins/active-runtime-registry.js`
- `../plugins/bundled-plugin-metadata.js`
- `../plugins/channel-plugin-ids.js`
- `../plugins/command-registry-state.js`
- `../plugins/config-state.js`
- `../plugins/current-plugin-metadata-snapshot.js`
- `../plugins/embedding-provider-runtime.js`
- `../plugins/hook-runner-global.js`
- `../plugins/hooks.test-helpers.js`
- `../plugins/host-hook-cleanup.js`
- `../plugins/host-hook-state.js`
- `../plugins/http-registry.js`
- `../plugins/installed-plugin-index-records.js`
- `../plugins/installed-plugin-index.js`
- `../plugins/loader-records.js`
- `../plugins/loader.js`
- `../plugins/loader.test-fixtures.js`
- `../plugins/management-service.js`
- `../plugins/manifest-contract-eligibility.js`
- `../plugins/memory-embedding-provider-runtime.js`
- `../plugins/memory-runtime.js`
- `../plugins/plugin-lookup-table.js`
- `../plugins/plugin-metadata-lifecycle.js`
- `../plugins/plugin-metadata-snapshot.js`
- `../plugins/plugin-module-loader-cache.js`
- `../plugins/provider-runtime.js`
- `../plugins/registry-empty.js`
- `../plugins/registry.js`
- `../plugins/runtime-degraded-state.js`
- `../plugins/runtime-state.js`
- `../plugins/runtime-workspace-state.js`
- `../plugins/runtime.js`
- `../plugins/runtime/gateway-bindings.js`
- `../plugins/runtime/gateway-bindings.test-fixtures.js`
- `../plugins/runtime/gateway-request-scope.js`
- `../plugins/runtime/load-context.js`
- `../plugins/runtime/runtime-channel.js`
- `../plugins/slots.js`
- `../plugins/status.test-fixtures.js`
- `../plugins/tools.js`
- `../plugins/worker-provider-registry.js`
- `../process/command-queue.js`
- `../process/command-queue.test-support.js`
- `../process/exec.js`
- `../process/gateway-work-admission.js`
- `../process/lanes.js`
- `../process/supervisor/index.js`
- `../routing/account-id.js`
- `../routing/account-lookup.js`
- `../routing/session-key.js`
- `../runtime.js`
- `../secrets/ref-contract.js`
- `../secrets/resolve-errors.js`
- `../secrets/resolve-secret-input-string.js`
- `../secrets/resolve.js`
- `../secrets/runtime-auth-profile-owner.js`
- `../secrets/runtime-command-secrets.js`
- `../secrets/runtime-degraded-state.js`
- `../secrets/runtime-fast-path.js`
- `../secrets/runtime-gateway-auth-surfaces.js`
- `../secrets/runtime-owner-assignments.js`
- `../secrets/runtime-provider-auth-activation.js`
- `../secrets/runtime-provider-auth-scope.js`
- `../secrets/runtime-state.js`
- `../secrets/runtime-telegram.test-support.ts`
- `../secrets/runtime-warning-log.js`
- `../secrets/runtime.integration.test-helpers.js`
- `../secrets/runtime.js`
- `../security/dangerous-config-flags-current.js`
- `../security/dangerous-tools.js`
- `../security/external-content.js`
- `../security/secret-equal.js`
- `../sessions/agent-harness-session-key.js`
- `../sessions/conversation-turns.js`
- `../sessions/input-provenance.js`
- `../sessions/level-overrides.js`
- `../sessions/model-overrides.js`
- `../sessions/send-policy.js`
- `../sessions/session-id-resolution.js`
- `../sessions/session-key-utils.js`
- `../sessions/session-label.js`
- `../sessions/session-lifecycle-admission.js`
- `../sessions/session-lifecycle-admission.test-support.js`
- `../sessions/session-lifecycle-events.js`
- `../sessions/session-state-events.js`
- `../sessions/session-upstream-monitor.js`
- `../sessions/transcript-events.js`
- `../shared/account-enabled.js`
- `../shared/avatar-limits.js`
- `../shared/avatar-policy.js`
- `../shared/chat-content.js`
- `../shared/chat-envelope.js`
- `../shared/chat-message-content.js`
- `../shared/deferred.js`
- `../shared/device-bootstrap-profile.js`
- `../shared/gateway-method-policy.js`
- `../shared/gateway-tailscale-auth-policy.js`
- `../shared/global-singleton.js`
- `../shared/lazy-runtime.js`
- `../shared/node-list-parse.js`
- `../shared/node-presence.js`
- `../shared/node-skill-constraints.js`
- `../shared/number-coercion.js`
- `../shared/operator-scope-compat.js`
- `../shared/regexp.js`
- `../shared/tailscale-status.js`
- `../shared/text/assistant-visible-text.js`
- `../shared/text/final-tags.js`
- `../shared/transcript-only-openclaw-assistant.js`
- `../skills/runtime/refresh-state.js`
- `../skills/runtime/remote.js`
- `../skills/workshop/curator.js`
- `../state/openclaw-agent-db.js`
- `../state/openclaw-state-db.js`
- `../state/user-profiles.js`
- `../talk/agent-consult-tool.js`
- `../talk/agent-run-control-shared.js`
- `../talk/agent-run-control.js`
- `../talk/client-voice-session.js`
- `../talk/client-voice-session.test-support.js`
- `../talk/consult-question.js`
- `../talk/forced-consult-coordinator.js`
- `../talk/observability.js`
- `../talk/provider-types.js`
- `../talk/session-log-runtime.js`
- `../talk/session-runtime.js`
- `../talk/talk-session-controller.js`
- `../tasks/cron-run-continuation-cleanup.js`
- `../tasks/task-registry.js`
- `../tasks/task-registry.maintenance.js`
- `../tasks/task-registry.store.js`
- `../tasks/task-restart-blocker.js`
- `../tasks/task-runtime.test-helpers.js`
- `../test-helpers/network-interfaces.js`
- `../test-helpers/state-dir-env.js`
- `../test-helpers/temp-dir.js`
- `../test-utils/channel-plugins.js`
- `../test-utils/deferred.js`
- `../test-utils/env.js`
- `../test-utils/fetch-mock.js`
- `../test-utils/openclaw-test-state.js`
- `../test-utils/ports.js`
- `../test-utils/repo-files.js`
- `../test-utils/talk-test-provider.js`
- `../test-utils/task-registry-runtime.js`
- `../test-utils/temp-home.js`
- `../test-utils/tracked-temp-dirs.js`
- `../trajectory/runtime-store.sqlite.js`
- `../utils.js`
- `../utils/cjk-chars.js`
- `../utils/delivery-context.shared.js`
- `../utils/directive-tags.js`
- `../utils/message-channel-constants.js`
- `../utils/message-channel-core.js`
- `../utils/message-channel-normalize.js`
- `../utils/message-channel.js`
- `../utils/run-with-concurrency.js`
- `../utils/shell-argv.js`
- `../utils/sleep.js`
- `../utils/timer-delay.js`
- `../utils/transcript-tools.js`
- `../utils/usage-format.js`
- `../utils/with-timeout.js`
- `../version.js`
- `../wizard/session.js`
- `./active-sessions-shutdown-tracker.js`
- `./agent-command-policy.js`
- `./agent-command.test-helpers.js`
- `./agent-event-assistant-text.js`
- `./agent-list.js`
- `./agent-prompt.js`
- `./applied-config-hash-publisher.js`
- `./approval-session-audience.js`
- `./assistant-avatar.js`
- `./assistant-identity.js`
- `./assistant-media-content-disposition.js`
- `./auth-config-utils.js`
- `./auth-mode-policy.js`
- `./auth-rate-limit.js`
- `./auth-resolve.js`
- `./auth-surface-resolution.js`
- `./auth.js`
- `./board-http.js`
- `./board-store.js`
- `./board-view-ticket.js`
- `./boot-echo-guard.js`
- `./call.js`
- `./channel-health-monitor.js`
- `./channel-health-policy.js`
- `./channel-status-patches.js`
- `./chat-abort.js`
- `./chat-attachments.js`
- `./chat-display-projection.js`
- `./chat-input-sanitize.js`
- `./chat-queued-turns.js`
- `./chat-sanitize.js`
- `./chat-tool-titles.js`
- `./cli-session-history.claude.js`
- `./cli-session-history.js`
- `./cli-session-history.merge.js`
- `./client-bootstrap.js`
- `./client-start-readiness.js`
- `./client.js`
- `./config-applied-revision.js`
- `./config-diff.js`
- `./config-reload-plan.js`
- `./config-reload-recovery.js`
- `./config-reload-settings.js`
- `./config-reload.js`
- `./connection-auth.js`
- `./connection-details.js`
- `./control-plane-audit.js`
- `./control-plane-identity.js`
- `./control-plane-rate-limit.js`
- `./control-reply-text.js`
- `./control-ui-contract.js`
- `./control-ui-csp.js`
- `./control-ui-github-api.js`
- `./control-ui-github-preview.js`
- `./control-ui-http-utils.js`
- `./control-ui-plugin-auth-cookie.js`
- `./control-ui-plugin-tabs.js`
- `./control-ui-routing.js`
- `./control-ui-session-prs.js`
- `./control-ui-shared.js`
- `./control-ui-static.js`
- `./control-ui.js`
- `./conversation-errors.js`
- `./conversation-list.js`
- `./conversation-read-origin.js`
- `./conversation-send.js`
- `./conversation-turn.js`
- `./credential-planner.js`
- `./credentials-secret-inputs.js`
- `./credentials.js`
- `./cron-exit-watch-shell.js`
- `./cron-exit-watchers.js`
- `./dashboard-session-title.js`
- `./device-auth.js`
- `./device-authz.test-helpers.js`
- `./device-metadata-normalization.js`
- `./device-pairing-prune.js`
- `./env-deprecation.js`
- `./event-loop-ready.js`
- `./events.js`
- `./exec-approval-ios-push.js`
- `./exec-approval-manager.js`
- `./explicit-connection-policy.js`
- `./gateway-cli-backend.live-helpers.js`
- `./gateway-cli-backend.live-probe-helpers.js`
- `./gateway-codex-harness.command-evidence.live-helpers.js`
- `./gateway-codex-harness.live-helpers.js`
- `./gateway-connection.test-mocks.js`
- `./github-remote.js`
- `./handshake-timeouts.js`
- `./hooks-mapping.js`
- `./hooks-policy.js`
- `./hooks-test-helpers.js`
- `./hooks.js`
- `./hosted-plugin-surface-url.js`
- `./http-auth-utils.js`
- `./http-common.js`
- `./http-endpoint-helpers.js`
- `./http-utils.js`
- `./input-allowlist.js`
- `./known-weak-gateway-secrets.js`
- `./lazy-handler.js`
- `./live-agent-probes.js`
- `./live-chat-projector.js`
- `./live-env-test-helpers.js`
- `./live-tool-probe.test-helpers.js`
- `./local-request-context.js`
- `./managed-image-record-store.js`
- `./mcp-app-channel-action.js`
- `./mcp-app-channel-origin.js`
- `./mcp-app-operations.js`
- `./mcp-app-reconstruction.js`
- `./mcp-app-sandbox-http.js`
- `./mcp-app-standalone.js`
- `./mcp-grant-store.js`
- `./mcp-http.handlers.js`
- `./mcp-http.js`
- `./mcp-http.loopback-runtime.js`
- `./mcp-http.protocol.js`
- `./mcp-http.request.js`
- `./mcp-http.runtime.js`
- `./mcp-http.schema.js`
- `./message-action-turn-capability.js`
- `./method-scopes.js`
- `./methods/core-descriptors.js`
- `./methods/registry.js`
- `./minimal-gateway.test-helpers.js`
- `./model-pricing-cache-state.js`
- `./model-pricing-cache.js`
- `./model-pricing-config.js`
- `./net.js`
- `./node-agent-cli-runtime.js`
- `./node-browser-proxy-policy.js`
- `./node-catalog.js`
- `./node-command-policy-mobile.js`
- `./node-command-policy.js`
- `./node-connect-reconcile.js`
- `./node-connection-notifications.js`
- `./node-invoke-plugin-policy.js`
- `./node-invoke-system-run-approval-errors.js`
- `./node-invoke-system-run-approval-match.js`
- `./node-invoke-system-run-approval.js`
- `./node-legacy-protocol-filter.js`
- `./node-normalize.js`
- `./node-pairing-auto-approve.js`
- `./node-pairing-ssh-verify.js`
- `./node-pairing-ssh-verify.runtime.js`
- `./node-pending-work.js`
- `./node-plugin-tool-snapshot.js`
- `./node-reapproval-coordinator.js`
- `./node-registry.invoke-stream.js`
- `./node-registry.js`
- `./node-registry.system-run.js`
- `./node-skill-descriptors.js`
- `./open-responses.schema.js`
- `./openai-compat-errors.js`
- `./openai-compatible-http.test-helpers.js`
- `./openai-http.js`
- `./openai-tool-choice.js`
- `./openresponses-file-content.js`
- `./openresponses-prompt.js`
- `./openresponses-shape.js`
- `./operator-approval-authorization.js`
- `./operator-approval-runtime-token.js`
- `./operator-approval-session-events.js`
- `./operator-approval-snapshot.js`
- `./operator-approval-store.js`
- `./operator-approvals-client.js`
- `./operator-scopes.js`
- `./origin-check.js`
- `./plugin-activation-runtime-config.js`
- `./plugin-channel-reload-targets.js`
- `./plugin-node-capability.js`
- `./probe-auth.js`
- `./probe.js`
- `./process-instance.js`
- `./question-manager.js`
- `./rate-limit-attempt-serialization.js`
- `./resolve-configured-secret-input-string.js`
- `./restart-trace.js`
- `./role-policy.js`
- `./runtime-plugin-config.js`
- `./secret-input-paths.js`
- `./security-path.js`
- `./server-active-work.js`
- `./server-aux-handlers.js`
- `./server-aux-methods.js`
- `./server-broadcast.js`
- `./server-channels.js`
- `./server-chat-state.js`
- `./server-chat.js`
- `./server-chat.load-gateway-session-row.runtime.js`
- `./server-chat.persist-session-lifecycle.runtime.js`
- `./server-constants.js`
- `./server-control-ui-root.js`
- `./server-cron-lazy.js`
- `./server-cron-notifications.js`
- `./server-cron-reconciled.js`
- `./server-cron.js`
- `./server-discovery.js`
- `./server-http.js`
- `./server-http.test-harness.js`
- `./server-in-process-dispatch.js`
- `./server-instance-runtime.js`
- `./server-lanes.js`
- `./server-live-state.js`
- `./server-methods-list.js`
- `./server-methods-node-methods.js`
- `./server-methods.js`
- `./server-methods/approval-run-cancellation.js`
- `./server-methods/approval-shared.js`
- `./server-methods/chat.js`
- `./server-methods/lazy-core-handlers.js`
- `./server-methods/nodes-wake-state.js`
- `./server-methods/nodes.handlers.invoke-result.js`
- `./server-methods/session-active-runs.js`
- `./server-methods/skills-method-names.js`
- `./server-methods/suspend.js`
- `./server-methods/task-summary.js`
- `./server-model-catalog.js`
- `./server-node-events.js`
- `./server-node-events.runtime.js`
- `./server-node-session-runtime.js`
- `./server-node-subscriptions.js`
- `./server-plugin-bootstrap.js`
- `./server-plugin-fallback-context.js`
- `./server-plugin-runtime-client.js`
- `./server-plugins-node-runtime.js`
- `./server-plugins.js`
- `./server-recovery-runtime-context.js`
- `./server-reload-handlers.js`
- `./server-request-context.js`
- `./server-restart-sentinel-agent-delivery.js`
- `./server-restart-sentinel-notice.js`
- `./server-runtime-config.js`
- `./server-runtime-handles.js`
- `./server-runtime-service-shared.js`
- `./server-runtime-services.js`
- `./server-runtime-state.js`
- `./server-shared-auth-generation.js`
- `./server-shared.js`
- `./server-startup-config-helpers.js`
- `./server-startup-config.js`
- `./server-startup-context-cache-prewarm.js`
- `./server-startup-early.js`
- `./server-startup-log.js`
- `./server-startup-memory.js`
- `./server-startup-outcomes.js`
- `./server-startup-plugins.js`
- `./server-startup-secret-diagnostics.js`
- `./server-startup-secret-surfaces.js`
- `./server-startup-session-migration.js`
- `./server-tailscale.js`
- `./server-talk-nodes.js`
- `./server-utils.js`
- `./server-wizard-sessions.js`
- `./server.agent.gateway-server-agent.mocks.js`
- `./server.auth.control-ui.suite.js`
- `./server.auth.default-token.suite.js`
- `./server.auth.modes.suite.js`
- `./server.auth.test-helpers.js`
- `./server.e2e-registry-helpers.js`
- `./server.e2e-ws-harness.js`
- `./server.impl.js`
- `./server.js`
- `./server/__tests__/test-utils.js`
- `./server/event-loop-health.js`
- `./server/health-state.js`
- `./server/hook-client-ip-config.js`
- `./server/hooks-request-handler.js`
- `./server/http-listen.js`
- `./server/http-work-admission.js`
- `./server/plugins-http.js`
- `./server/plugins-http/path-context.js`
- `./server/plugins-http/route-auth.js`
- `./server/plugins-http/route-capability.js`
- `./server/plugins-http/route-match.js`
- `./server/preauth-connection-budget.js`
- `./server/presence-events.js`
- `./server/readiness.js`
- `./server/tls.js`
- `./server/ws-connection.js`
- `./server/ws-connection/auth-context.js`
- `./server/ws-connection/handshake-auth-helpers.js`
- `./server/ws-shared-generation.js`
- `./server/ws-types.js`
- `./session-automation-index.js`
- `./session-child-sessions.js`
- `./session-compaction-checkpoint-entry.js`
- `./session-compaction-checkpoints.js`
- `./session-create-fork-entry.js`
- `./session-event-payload.js`
- `./session-groups.js`
- `./session-history-state.js`
- `./session-lifecycle-state.js`
- `./session-list-order.js`
- `./session-model-patch-origin.js`
- `./session-preview.test-helpers.js`
- `./session-store-key.js`
- `./session-subagent-reactivation.js`
- `./session-transcript-anchor-reader.js`
- `./session-transcript-files.fs.js`
- `./session-transcript-index.fs.js`
- `./session-transcript-json.js`
- `./session-transcript-key.js`
- `./session-transcript-path.js`
- `./session-transcript-readers.js`
- `./session-utils.fs-anchor.js`
- `./session-utils.fs.js`
- `./session-utils.js`
- `./sessions-history-http.js`
- `./sessions-patch.js`
- `./sessions-resolve.js`
- `./shared-auth.test-helpers.js`
- `./startup-auth.js`
- `./startup-control-ui-origins.js`
- `./startup-tasks.js`
- `./system-ca-warmup.js`
- `./talk-handoff.js`
- `./talk-realtime-relay-issues.js`
- `./talk-realtime-relay.js`
- `./talk-relay-session-lifecycle.js`
- `./talk-session-registry.js`
- `./talk-transcription-relay.js`
- `./talk.test-helpers.js`
- `./terminal/launch.js`
- `./test-helpers.agent-results.js`
- `./test-helpers.assertions.js`
- `./test-helpers.channels.js`
- `./test-helpers.config-snapshots.js`
- `./test-helpers.connected-session-store.js`
- `./test-helpers.e2e.js`
- `./test-helpers.js`
- `./test-helpers.lan-pairing.js`
- `./test-helpers.maintenance-state.js`
- `./test-helpers.mocks.js`
- `./test-helpers.node-invoke.js`
- `./test-helpers.openai-mock.js`
- `./test-helpers.plugin-registry.js`
- `./test-helpers.runtime-state.js`
- `./test-helpers.server-runtime-state.js`
- `./test-helpers.server.js`
- `./test-helpers.speech.js`
- `./test-http-response.js`
- `./test-openai-responses-model.js`
- `./test-temp-config.js`
- `./test-with-server.js`
- `./test/server-sessions.test-helpers.js`
- `./tool-resolution.js`
- `./tools-invoke-shared.js`
- `./user-profiles-http-path.js`
- `./user-profiles-http.js`
- `./watch-node-http.js`
- `./worker-environments/live-events.js`
- `./worker-environments/placement-dispatch.js`
- `./worker-environments/reclaimed-placement-redispatch.js`
- `./worker-environments/transcript-commit.js`
- `./worker-environments/worker-turn-launcher.js`
- `./worker-environments/workspace-conflicts.js`
- `./worker-environments/workspace-operation-coordinator.js`
- `./worker-environments/workspace-reconcile.js`
- `./worker-workspace-conflict-transcript.js`
- `./ws-log.js`
- `./ws-logging.js`
- `@modelcontextprotocol/sdk/types.js`
- `@openclaw/media-core/base64`
- `@openclaw/media-core/constants`
- `@openclaw/media-core/mime`
- `@openclaw/model-catalog-core/model-catalog-refs`
- `@openclaw/model-catalog-core/provider-id`
- `@openclaw/net-policy/ip`
- `@openclaw/net-policy/redact-sensitive-url`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/result`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `chalk`
- `chokidar`
- `file-type`
- `node:async_hooks`
- `node:buffer`
- `node:child_process`
- `node:crypto`
- `node:events`
- `node:fs`
- `node:fs/promises`
- `node:http`
- `node:https`
- `node:net`
- `node:os`
- `node:path`
- `node:perf_hooks`
- `node:stream`
- `node:stream/promises`
- `node:string_decoder`
- `node:timers/promises`
- `node:tls`
- `node:url`
- `node:util`
- `node:worker_threads`
- `node:zlib`
- `openclaw/plugin-sdk/agent-sessions`
- `openclaw/plugin-sdk/keyed-async-queue`
- `openclaw/plugin-sdk/llm`
- `openclaw/plugin-sdk/plugin-test-contracts`
- `openclaw/plugin-sdk/reply-payload`
- `openclaw/plugin-sdk/test-fixtures`
- `p-map`
- `undici`
- `vitest`
- `zod`
