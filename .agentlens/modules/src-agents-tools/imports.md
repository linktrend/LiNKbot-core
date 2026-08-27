# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_agents_tools[src-agents-tools] --> src[src]
    src_agents_tools[src-agents-tools] --> src[src]
    src_agents_tools[src-agents-tools] --> schema[schema]
    src_agents_tools[src-agents-tools] --> schema[schema]
    src_agents_tools[src-agents-tools] --> schema[schema]
    src_agents_tools[src-agents-tools] --> src[src]
    src_agents_tools[src-agents-tools] --> src[src]
    src_agents_tools[src-agents-tools] --> src[src]
    src_agents_tools[src-agents-tools] --> helpers[helpers]
    src_agents_tools[src-agents-tools] --> helpers[helpers]
    src_agents_tools[src-agents-tools] --> runtime[runtime]
    src_agents_tools[src-agents-tools] --> runtime[runtime]
    src_agents_tools[src-agents-tools] --> auto_reply[auto-reply]
    src_agents_tools[src-agents-tools] --> auto_reply[auto-reply]
    src_agents_tools[src-agents-tools] --> reply[reply]
    src_agents_tools[src-agents-tools] --> reply[reply]
    src_agents_tools[src-agents-tools] --> auto_reply[auto-reply]
    src_agents_tools[src-agents-tools] --> plugins[plugins]
    src_agents_tools[src-agents-tools] --> plugins[plugins]
    src_agents_tools[src-agents-tools] --> plugins[plugins]
    src_agents_tools[src-agents-tools] --> plugins[plugins]
    src_agents_tools[src-agents-tools] --> channels[channels]
    src_agents_tools[src-agents-tools] --> channels[channels]
    src_agents_tools[src-agents-tools] --> cli[cli]
    src_agents_tools[src-agents-tools] --> cli[cli]
    src_agents_tools[src-agents-tools] --> cli[cli]
    src_agents_tools[src-agents-tools] --> cli[cli]
    src_agents_tools[src-agents-tools] --> cli[cli]
    src_agents_tools[src-agents-tools] --> cli[cli]
    src_agents_tools[src-agents-tools] --> config[config]
    src_agents_tools[src-agents-tools] --> config[config]
    src_agents_tools[src-agents-tools] --> config[config]
    src_agents_tools[src-agents-tools] --> config[config]
    src_agents_tools[src-agents-tools] --> config[config]
    src_agents_tools[src-agents-tools] --> config[config]
    src_agents_tools[src-agents-tools] --> config[config]
    src_agents_tools[src-agents-tools] --> sessions[sessions]
    src_agents_tools[src-agents-tools] --> sessions[sessions]
    src_agents_tools[src-agents-tools] --> sessions[sessions]
    src_agents_tools[src-agents-tools] --> sessions[sessions]
    src_agents_tools[src-agents-tools] --> sessions[sessions]
    src_agents_tools[src-agents-tools] --> config[config]
    src_agents_tools[src-agents-tools] --> config[config]
    src_agents_tools[src-agents-tools] --> cron[cron]
    src_agents_tools[src-agents-tools] --> cron[cron]
    src_agents_tools[src-agents-tools] --> cron[cron]
    src_agents_tools[src-agents-tools] --> cron[cron]
    src_agents_tools[src-agents-tools] --> cron[cron]
    src_agents_tools[src-agents-tools] --> gateway[gateway]
    src_agents_tools[src-agents-tools] --> gateway[gateway]
    src_agents_tools[src-agents-tools] --> gateway[gateway]
    src_agents_tools[src-agents-tools] --> gateway[gateway]
    src_agents_tools[src-agents-tools] --> gateway[gateway]
    src_agents_tools[src-agents-tools] --> gateway[gateway]
    src_agents_tools[src-agents-tools] --> gateway[gateway]
    src_agents_tools[src-agents-tools] --> gateway[gateway]
    src_agents_tools[src-agents-tools] --> gateway[gateway]
    src_agents_tools[src-agents-tools] --> gateway[gateway]
    src_agents_tools[src-agents-tools] --> gateway[gateway]
    src_agents_tools[src-agents-tools] --> gateway[gateway]
    src_agents_tools[src-agents-tools] --> gateway[gateway]
    src_agents_tools[src-agents-tools] --> terminal[terminal]
    src_agents_tools[src-agents-tools] --> terminal[terminal]
    src_agents_tools[src-agents-tools] --> terminal[terminal]
    src_agents_tools[src-agents-tools] --> terminal[terminal]
    src_agents_tools[src-agents-tools] --> image_generation[image-generation]
    src_agents_tools[src-agents-tools] --> image_generation[image-generation]
    src_agents_tools[src-agents-tools] --> image_generation[image-generation]
    src_agents_tools[src-agents-tools] --> infra[infra]
    src_agents_tools[src-agents-tools] --> infra[infra]
    src_agents_tools[src-agents-tools] --> infra[infra]
    src_agents_tools[src-agents-tools] --> infra[infra]
    src_agents_tools[src-agents-tools] --> infra[infra]
    src_agents_tools[src-agents-tools] --> infra[infra]
    src_agents_tools[src-agents-tools] --> infra[infra]
    src_agents_tools[src-agents-tools] --> infra[infra]
    src_agents_tools[src-agents-tools] --> net[net]
    src_agents_tools[src-agents-tools] --> net[net]
    src_agents_tools[src-agents-tools] --> infra[infra]
    src_agents_tools[src-agents-tools] --> outbound[outbound]
    src_agents_tools[src-agents-tools] --> outbound[outbound]
    src_agents_tools[src-agents-tools] --> outbound[outbound]
    src_agents_tools[src-agents-tools] --> outbound[outbound]
    src_agents_tools[src-agents-tools] --> infra[infra]
    src_agents_tools[src-agents-tools] --> interactive[interactive]
    src_agents_tools[src-agents-tools] --> llm[llm]
    src_agents_tools[src-agents-tools] --> llm[llm]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> logging[logging]
    src_agents_tools[src-agents-tools] --> logging[logging]
    src_agents_tools[src-agents-tools] --> logging[logging]
    src_agents_tools[src-agents-tools] --> media_generation[media-generation]
    src_agents_tools[src-agents-tools] --> media_understanding[media-understanding]
    src_agents_tools[src-agents-tools] --> media_understanding[media-understanding]
    src_agents_tools[src-agents-tools] --> media_understanding[media-understanding]
    src_agents_tools[src-agents-tools] --> media_understanding[media-understanding]
    src_agents_tools[src-agents-tools] --> media_understanding[media-understanding]
    src_agents_tools[src-agents-tools] --> media_understanding[media-understanding]
    src_agents_tools[src-agents-tools] --> media[media]
    src_agents_tools[src-agents-tools] --> media[media]
    src_agents_tools[src-agents-tools] --> media[media]
    src_agents_tools[src-agents-tools] --> media[media]
    src_agents_tools[src-agents-tools] --> media[media]
    src_agents_tools[src-agents-tools] --> media[media]
    src_agents_tools[src-agents-tools] --> media[media]
    src_agents_tools[src-agents-tools] --> media[media]
    src_agents_tools[src-agents-tools] --> media[media]
    src_agents_tools[src-agents-tools] --> music_generation[music-generation]
    src_agents_tools[src-agents-tools] --> music_generation[music-generation]
    src_agents_tools[src-agents-tools] --> music_generation[music-generation]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> plugin_sdk[plugin-sdk]
    src_agents_tools[src-agents-tools] --> plugin_sdk[plugin-sdk]
    src_agents_tools[src-agents-tools] --> plugin_sdk[plugin-sdk]
    src_agents_tools[src-agents-tools] --> plugin_sdk[plugin-sdk]
    src_agents_tools[src-agents-tools] --> plugin_sdk[plugin-sdk]
    src_agents_tools[src-agents-tools] --> plugins[plugins]
    src_agents_tools[src-agents-tools] --> plugins[plugins]
    src_agents_tools[src-agents-tools] --> plugins[plugins]
    src_agents_tools[src-agents-tools] --> plugins[plugins]
    src_agents_tools[src-agents-tools] --> plugins[plugins]
    src_agents_tools[src-agents-tools] --> plugins[plugins]
    src_agents_tools[src-agents-tools] --> plugins[plugins]
    src_agents_tools[src-agents-tools] --> plugins[plugins]
    src_agents_tools[src-agents-tools] --> plugins[plugins]
    src_agents_tools[src-agents-tools] --> plugins[plugins]
    src_agents_tools[src-agents-tools] --> plugins[plugins]
    src_agents_tools[src-agents-tools] --> plugins[plugins]
    src_agents_tools[src-agents-tools] --> plugins[plugins]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> routing[routing]
    src_agents_tools[src-agents-tools] --> secrets[secrets]
    src_agents_tools[src-agents-tools] --> secrets[secrets]
    src_agents_tools[src-agents-tools] --> secrets[secrets]
    src_agents_tools[src-agents-tools] --> secrets[secrets]
    src_agents_tools[src-agents-tools] --> secrets[secrets]
    src_agents_tools[src-agents-tools] --> secrets[secrets]
    src_agents_tools[src-agents-tools] --> security[security]
    src_agents_tools[src-agents-tools] --> security[security]
    src_agents_tools[src-agents-tools] --> sessions[sessions]
    src_agents_tools[src-agents-tools] --> sessions[sessions]
    src_agents_tools[src-agents-tools] --> sessions[sessions]
    src_agents_tools[src-agents-tools] --> sessions[sessions]
    src_agents_tools[src-agents-tools] --> sessions[sessions]
    src_agents_tools[src-agents-tools] --> sessions[sessions]
    src_agents_tools[src-agents-tools] --> sessions[sessions]
    src_agents_tools[src-agents-tools] --> shared[shared]
    src_agents_tools[src-agents-tools] --> shared[shared]
    src_agents_tools[src-agents-tools] --> shared[shared]
    src_agents_tools[src-agents-tools] --> shared[shared]
    src_agents_tools[src-agents-tools] --> shared[shared]
    src_agents_tools[src-agents-tools] --> shared[shared]
    src_agents_tools[src-agents-tools] --> shared[shared]
    src_agents_tools[src-agents-tools] --> text[text]
    src_agents_tools[src-agents-tools] --> text[text]
    src_agents_tools[src-agents-tools] --> workshop[workshop]
    src_agents_tools[src-agents-tools] --> state[state]
    src_agents_tools[src-agents-tools] --> system_agent[system-agent]
    src_agents_tools[src-agents-tools] --> system_agent[system-agent]
    src_agents_tools[src-agents-tools] --> system_agent[system-agent]
    src_agents_tools[src-agents-tools] --> tasks[tasks]
    src_agents_tools[src-agents-tools] --> tasks[tasks]
    src_agents_tools[src-agents-tools] --> tasks[tasks]
    src_agents_tools[src-agents-tools] --> tasks[tasks]
    src_agents_tools[src-agents-tools] --> tasks[tasks]
    src_agents_tools[src-agents-tools] --> tasks[tasks]
    src_agents_tools[src-agents-tools] --> tasks[tasks]
    src_agents_tools[src-agents-tools] --> tasks[tasks]
    src_agents_tools[src-agents-tools] --> tasks[tasks]
    src_agents_tools[src-agents-tools] --> tasks[tasks]
    src_agents_tools[src-agents-tools] --> test_helpers[test-helpers]
    src_agents_tools[src-agents-tools] --> test_utils[test-utils]
    src_agents_tools[src-agents-tools] --> test_utils[test-utils]
    src_agents_tools[src-agents-tools] --> test_utils[test-utils]
    src_agents_tools[src-agents-tools] --> test_utils[test-utils]
    src_agents_tools[src-agents-tools] --> test_utils[test-utils]
    src_agents_tools[src-agents-tools] --> test_utils[test-utils]
    src_agents_tools[src-agents-tools] --> transcripts[transcripts]
    src_agents_tools[src-agents-tools] --> transcripts[transcripts]
    src_agents_tools[src-agents-tools] --> transcripts[transcripts]
    src_agents_tools[src-agents-tools] --> transcripts[transcripts]
    src_agents_tools[src-agents-tools] --> transcripts[transcripts]
    src_agents_tools[src-agents-tools] --> tts[tts]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> utils[utils]
    src_agents_tools[src-agents-tools] --> utils[utils]
    src_agents_tools[src-agents-tools] --> utils[utils]
    src_agents_tools[src-agents-tools] --> utils[utils]
    src_agents_tools[src-agents-tools] --> utils[utils]
    src_agents_tools[src-agents-tools] --> video_generation[video-generation]
    src_agents_tools[src-agents-tools] --> video_generation[video-generation]
    src_agents_tools[src-agents-tools] --> video_generation[video-generation]
    src_agents_tools[src-agents-tools] --> web_fetch[web-fetch]
    src_agents_tools[src-agents-tools] --> web_search[web-search]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> auth_profiles[auth-profiles]
    src_agents_tools[src-agents-tools] --> auth_profiles[auth-profiles]
    src_agents_tools[src-agents-tools] --> auth_profiles[auth-profiles]
    src_agents_tools[src-agents-tools] --> auth_profiles[auth-profiles]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> embedded_agent_helpers[embedded-agent-helpers]
    src_agents_tools[src-agents-tools] --> embedded_agent_helpers[embedded-agent-helpers]
    src_agents_tools[src-agents-tools] --> embedded_agent_runner[embedded-agent-runner]
    src_agents_tools[src-agents-tools] --> run[run]
    src_agents_tools[src-agents-tools] --> run[run]
    src_agents_tools[src-agents-tools] --> embedded_agent_runner[embedded-agent-runner]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> harness[harness]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> sandbox[sandbox]
    src_agents_tools[src-agents-tools] --> schema[schema]
    src_agents_tools[src-agents-tools] --> schema[schema]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> sessions[sessions]
    src_agents_tools[src-agents-tools] --> tools[tools]
    src_agents_tools[src-agents-tools] --> tools[tools]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> test_helpers[test-helpers]
    src_agents_tools[src-agents-tools] --> test_helpers[test-helpers]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> utils[utils]
    src_agents_tools[src-agents-tools] --> __[..]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> _[.]
    src_agents_tools[src-agents-tools] --> acp_core[acp-core]
    src_agents_tools[src-agents-tools] --> internal[internal]
    src_agents_tools[src-agents-tools] --> media_core[media-core]
    src_agents_tools[src-agents-tools] --> media_core[media-core]
    src_agents_tools[src-agents-tools] --> media_core[media-core]
    src_agents_tools[src-agents-tools] --> media_core[media-core]
    src_agents_tools[src-agents-tools] --> model_catalog_core[model-catalog-core]
    src_agents_tools[src-agents-tools] --> _openclaw[@openclaw]
    src_agents_tools[src-agents-tools] --> normalization_core[normalization-core]
    src_agents_tools[src-agents-tools] --> normalization_core[normalization-core]
    src_agents_tools[src-agents-tools] --> normalization_core[normalization-core]
    src_agents_tools[src-agents-tools] --> normalization_core[normalization-core]
    src_agents_tools[src-agents-tools] --> normalization_core[normalization-core]
    src_agents_tools[src-agents-tools] --> normalization_core[normalization-core]
    src_agents_tools[src-agents-tools] --> node_async_hooks[node:async_hooks]
    src_agents_tools[src-agents-tools] --> node_crypto[node:crypto]
    src_agents_tools[src-agents-tools] --> node_fs[node:fs]
    src_agents_tools[src-agents-tools] --> node_fs[node:fs]
    src_agents_tools[src-agents-tools] --> node_os[node:os]
    src_agents_tools[src-agents-tools] --> node_path[node:path]
    src_agents_tools[src-agents-tools] --> node_url[node:url]
    src_agents_tools[src-agents-tools] --> p_map[p-map]
    src_agents_tools[src-agents-tools] --> typebox[typebox]
    src_agents_tools[src-agents-tools] --> typebox[typebox]
    src_agents_tools[src-agents-tools] --> undici[undici]
    src_agents_tools[src-agents-tools] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/gateway-protocol/src/client-info.js`
- `../../../packages/gateway-protocol/src/connect-error-details.js`
- `../../../packages/gateway-protocol/src/schema/agent.js`
- `../../../packages/gateway-protocol/src/schema/error-codes.js`
- `../../../packages/gateway-protocol/src/schema/ui-command.js`
- `../../../packages/media-generation-core/src/capability-model-ref.js`
- `../../../packages/media-generation-core/src/catalog.js`
- `../../../packages/web-content-core/src/provider-runtime-shared.js`
- `../../../test/helpers/promise.js`
- `../../../test/helpers/temp-dir.js`
- `../../acp/runtime/availability.js`
- `../../acp/runtime/session-meta.js`
- `../../auto-reply/heartbeat-tool-response.js`
- `../../auto-reply/reply-payload.js`
- `../../auto-reply/reply/agent-runner-payloads.js`
- `../../auto-reply/reply/strip-inbound-meta.js`
- `../../auto-reply/tokens.js`
- `../../channels/plugins/index.js`
- `../../channels/plugins/message-action-discovery.js`
- `../../channels/plugins/message-action-names.js`
- `../../channels/plugins/session-conversation.js`
- `../../channels/registry.js`
- `../../channels/thread-bindings-policy.js`
- `../../cli/command-secret-gateway.js`
- `../../cli/command-secret-targets.js`
- `../../cli/message-secret-scope.js`
- `../../cli/nodes-camera.js`
- `../../cli/nodes-screen.js`
- `../../cli/parse-duration.js`
- `../../config/agent-limits.js`
- `../../config/config.js`
- `../../config/io.js`
- `../../config/model-input.js`
- `../../config/paths.js`
- `../../config/plugin-web-search-config.js`
- `../../config/sessions.js`
- `../../config/sessions/cli-session-binding.js`
- `../../config/sessions/goals.js`
- `../../config/sessions/paths.js`
- `../../config/sessions/session-accessor.js`
- `../../config/sessions/thread-info.js`
- `../../config/types.secrets.js`
- `../../config/web-search-legacy-provider-keys.js`
- `../../cron/delivery-context.js`
- `../../cron/delivery-target-validation.js`
- `../../cron/normalize.js`
- `../../cron/pacing.js`
- `../../cron/webhook-url.js`
- `../../gateway/agent-runtime-identity-token.js`
- `../../gateway/boot-echo-guard.js`
- `../../gateway/call.js`
- `../../gateway/client.js`
- `../../gateway/credentials.js`
- `../../gateway/message-action-turn-capability.js`
- `../../gateway/method-scopes.js`
- `../../gateway/operator-approval-runtime-token.js`
- `../../gateway/server-plugins.js`
- `../../gateway/session-model-patch-origin.js`
- `../../gateway/session-patch-hooks.js`
- `../../gateway/session-transcript-readers.js`
- `../../gateway/session-utils.js`
- `../../gateway/terminal/buffer-text.js`
- `../../gateway/terminal/launch.js`
- `../../gateway/terminal/open-deadline.js`
- `../../gateway/terminal/session-manager.js`
- `../../image-generation/capabilities.js`
- `../../image-generation/model-ref.js`
- `../../image-generation/runtime.js`
- `../../infra/abort-signal.js`
- `../../infra/agent-events.js`
- `../../infra/crypto-digest.js`
- `../../infra/device-identity.js`
- `../../infra/errors.js`
- `../../infra/fs-safe.js`
- `../../infra/http-error-body.js`
- `../../infra/json-utf8-bytes.js`
- `../../infra/net/fetch-guard.js`
- `../../infra/net/ssrf.js`
- `../../infra/node-pairing-authz.js`
- `../../infra/outbound/message-action-params.js`
- `../../infra/outbound/message-action-runner.js`
- `../../infra/outbound/message-action-spec.js`
- `../../infra/outbound/outbound-policy.js`
- `../../infra/path-guards.js`
- `../../interactive/payload.js`
- `../../llm/model-runtime-binding.js`
- `../../llm/stream.js`
- `../../logger.js`
- `../../logging/diagnostic-session-state.js`
- `../../logging/redact.js`
- `../../logging/subsystem.js`
- `../../media-generation/runtime-shared.js`
- `../../media-understanding/defaults.js`
- `../../media-understanding/entry-capabilities.js`
- `../../media-understanding/provider-id.js`
- `../../media-understanding/provider-registry.js`
- `../../media-understanding/resolve.js`
- `../../media-understanding/shared.js`
- `../../media/channel-inbound-roots.js`
- `../../media/configured-max-bytes.js`
- `../../media/local-media-access.js`
- `../../media/media-reference.js`
- `../../media/media-services.js`
- `../../media/pdf-extract.js`
- `../../media/png-encode.js`
- `../../media/store.js`
- `../../media/web-media.js`
- `../../music-generation/capabilities.js`
- `../../music-generation/model-ref.js`
- `../../music-generation/runtime.js`
- `../../param-key.js`
- `../../plugin-sdk/channel-route.js`
- `../../plugin-sdk/media-understanding.js`
- `../../plugin-sdk/message-tool-delivery-hints.js`
- `../../plugin-sdk/request-url.js`
- `../../plugin-sdk/session-visibility.js`
- `../../plugins/capability-provider-runtime.js`
- `../../plugins/current-plugin-metadata-snapshot.js`
- `../../plugins/installed-plugin-index-policy.js`
- `../../plugins/manifest-contract-eligibility.js`
- `../../plugins/manifest-tool-availability.js`
- `../../plugins/plugin-metadata-snapshot.js`
- `../../plugins/plugin-registry.js`
- `../../plugins/provider-runtime.js`
- `../../plugins/registry-empty.js`
- `../../plugins/runtime-state.js`
- `../../plugins/runtime.js`
- `../../plugins/schema-validator.js`
- `../../plugins/tools.js`
- `../../poll-params.js`
- `../../routing/session-key.js`
- `../../secrets/provider-env-vars.js`
- `../../secrets/runtime-degraded-state.js`
- `../../secrets/runtime-state.js`
- `../../secrets/runtime-web-secret-owner.js`
- `../../secrets/runtime-web-tools-state.js`
- `../../secrets/sentinel.js`
- `../../security/dangerous-tools.js`
- `../../security/external-content.js`
- `../../sessions/input-provenance.js`
- `../../sessions/model-overrides.js`
- `../../sessions/session-id.js`
- `../../sessions/session-key-utils.js`
- `../../sessions/session-label.js`
- `../../sessions/session-lifecycle-admission.js`
- `../../sessions/session-state-events.js`
- `../../shared/chat-content.js`
- `../../shared/chat-message-content.js`
- `../../shared/html-entities.js`
- `../../shared/lazy-promise.js`
- `../../shared/node-list-parse.js`
- `../../shared/node-resolve.js`
- `../../shared/path-array-index.js`
- `../../shared/text/assistant-visible-text.js`
- `../../shared/text/formatted-reasoning-message.js`
- `../../skills/workshop/service.js`
- `../../state/openclaw-state-db.js`
- `../../system-agent/agent-id.js`
- `../../system-agent/operations.js`
- `../../system-agent/plugin-install.js`
- `../../tasks/cron-run-continuation-cleanup.js`
- `../../tasks/detached-task-runtime.js`
- `../../tasks/generated-media-task-activity.js`
- `../../tasks/runtime-internal.js`
- `../../tasks/task-completion-contract.js`
- `../../tasks/task-executor.js`
- `../../tasks/task-owner-access.js`
- `../../tasks/task-runtime.test-helpers.js`
- `../../tasks/task-status-access.js`
- `../../tasks/task-status.js`
- `../../test-helpers/temp-dir.js`
- `../../test-utils/channel-plugins.js`
- `../../test-utils/env.js`
- `../../test-utils/fetch-mock.js`
- `../../test-utils/openclaw-test-state.js`
- `../../test-utils/session-conversation-registry.js`
- `../../test-utils/tracked-temp-dirs.js`
- `../../transcripts/config.js`
- `../../transcripts/manual-source.js`
- `../../transcripts/provider-registry.js`
- `../../transcripts/store.js`
- `../../transcripts/summary.js`
- `../../tts/tts.js`
- `../../utils.js`
- `../../utils/delivery-context.shared.js`
- `../../utils/fetch-timeout.js`
- `../../utils/message-channel.js`
- `../../utils/normalize-secret-input.js`
- `../../utils/string-readers.js`
- `../../video-generation/capabilities.js`
- `../../video-generation/model-ref.js`
- `../../video-generation/runtime.js`
- `../../web-fetch/content-extractors.runtime.js`
- `../../web-search/runtime.js`
- `../agent-bundle-mcp-tools.js`
- `../agent-runtime-metadata.js`
- `../agent-scope-config.js`
- `../agent-scope.js`
- `../agent-tools.before-tool-call.js`
- `../anthropic-transport-stream.js`
- `../auth-profiles.js`
- `../auth-profiles/credential-state.js`
- `../auth-profiles/external-cli-sync.js`
- `../auth-profiles/oauth-shared.js`
- `../auth-profiles/profile-list.js`
- `../before-tool-call-metadata.js`
- `../channel-tool-metadata.js`
- `../channel-tools.js`
- `../defaults.js`
- `../embedded-agent-helpers/failover-matches.js`
- `../embedded-agent-helpers/sanitize-user-facing-text.js`
- `../embedded-agent-runner/model.static-catalog.js`
- `../embedded-agent-runner/run/attempt.queue-message.js`
- `../embedded-agent-runner/run/payloads.js`
- `../embedded-agent-runner/runs.js`
- `../embedded-agent-subscribe.tools.js`
- `../embedded-agent-utils.js`
- `../generated-attachments.js`
- `../harness/gateway-question.js`
- `../image-generation-task-status.js`
- `../image-sanitization.js`
- `../inherited-tool-deny.js`
- `../internal-events.js`
- `../internal-runtime-context.js`
- `../lanes.js`
- `../live-test-helpers.js`
- `../live-test-provider-drift.test-support.js`
- `../media-generation-task-status-shared.js`
- `../media-generation-task-status-shared.test-support.js`
- `../minimax-vlm.js`
- `../model-auth.js`
- `../model-catalog.js`
- `../model-fallback.js`
- `../model-selection.js`
- `../model-visibility-policy.js`
- `../music-generation-task-status.js`
- `../openclaw-tools.js`
- `../openclaw-tools.media-factory-plan.js`
- `../prepared-model-catalog.js`
- `../prepared-model-runtime.js`
- `../provider-auth-aliases.js`
- `../provider-request-config.js`
- `../provider-secret-egress.js`
- `../provider-stream.js`
- `../provider-transport-fetch.js`
- `../run-wait.js`
- `../sandbox/runtime-status.js`
- `../schema/string-enum.js`
- `../schema/typebox.js`
- `../session-model-auto-revert.js`
- `../session-model-ref.js`
- `../sessions/model-registry-runtime.js`
- `../sessions/tools/private-temp-file.js`
- `../sessions/tools/tool-contracts.js`
- `../spawned-context.js`
- `../stable-stringify.js`
- `../subagent-announce-delivery.js`
- `../subagent-announce-origin.js`
- `../subagent-attachments.js`
- `../subagent-control.js`
- `../subagent-depth.js`
- `../subagent-lifecycle-events.js`
- `../subagent-list.js`
- `../subagent-registry-state.js`
- `../subagent-registry.js`
- `../subagent-registry.mocks.shared.js`
- `../subagent-registry.test-helpers.js`
- `../subagent-spawn-ownership.js`
- `../subagent-spawn-plan.js`
- `../subagent-spawn.js`
- `../subagent-spawn.test-support.js`
- `../subagent-target-policy.js`
- `../subagent-task-name.js`
- `../swarm-code-mode.js`
- `../swarm-config.js`
- `../swarm-output-schema.js`
- `../swarm-scheduler.test-support.js`
- `../test-helpers/host-sandbox-fs-bridge.js`
- `../test-helpers/unsafe-mounted-sandbox.js`
- `../tool-description-presets.js`
- `../tool-images.js`
- `../tool-policy-match.js`
- `../tool-policy.js`
- `../tool-schema-hints.js`
- `../tool-terminal-presentation.js`
- `../usage.js`
- `../utils/sleep.js`
- `../video-generation-task-status.js`
- `./agent-step.js`
- `./agent-step.test-support.js`
- `./agents-list-tool.js`
- `./agents-wait-tool.js`
- `./agents-wait-tool.test-support.js`
- `./ask-user-tool.js`
- `./ask-user-tool.test-support.js`
- `./chat-history-text.js`
- `./common.js`
- `./conversation-tools.js`
- `./cron-tool-canonicalize.js`
- `./cron-tool-creator-cap.js`
- `./cron-tool-write.js`
- `./cron-tool.js`
- `./dashboard-tool.js`
- `./embedded-gateway-stub.js`
- `./gateway-caller-context.js`
- `./gateway-schema.js`
- `./gateway-tool.js`
- `./gateway.js`
- `./goal-tools.js`
- `./heartbeat-response-tool.js`
- `./image-generate-background.js`
- `./image-generate-tool.actions.js`
- `./image-generate-tool.js`
- `./image-tool.helpers.js`
- `./image-tool.js`
- `./image-tool.result.js`
- `./image-tool.test-support.js`
- `./in-process-gateway.js`
- `./manifest-capability-availability.js`
- `./media-generate-background-shared.js`
- `./media-generate-background.test-support.js`
- `./media-generate-tool-actions-shared.js`
- `./media-tool-shared.js`
- `./message-tool-description.js`
- `./message-tool-schema-scoping.js`
- `./message-tool.js`
- `./model-config.helpers.js`
- `./model-config.helpers.test-support.js`
- `./music-generate-background.js`
- `./music-generate-tool.actions.js`
- `./music-generate-tool.js`
- `./nodes-tool-commands.js`
- `./nodes-tool-media.js`
- `./nodes-utils.js`
- `./openclaw-delegate-tool.js`
- `./pdf-native-providers.js`
- `./pdf-tool.helpers.js`
- `./pdf-tool.model-config.js`
- `./pdf-tool.test-support.js`
- `./poll-vote-echo.js`
- `./scoped-session-access.js`
- `./screen-tool.js`
- `./session-status-session-resolve.js`
- `./sessions-access.js`
- `./sessions-announce-target.js`
- `./sessions-helpers.js`
- `./sessions-list-tool.js`
- `./sessions-resolution.js`
- `./sessions-resolution.test-support.js`
- `./sessions-search-tool.js`
- `./sessions-send-helpers.js`
- `./sessions-send-tokens.js`
- `./sessions-send-tool.a2a.js`
- `./sessions-send-tool.a2a.test-support.js`
- `./sessions-spawn-tool.js`
- `./sessions-spawn-visible-admission.js`
- `./sessions-spawn-visible.js`
- `./sessions-tool.js`
- `./sessions-wait-tool.js`
- `./sessions-yield-tool.js`
- `./skill-workshop-tool-helpers.js`
- `./skill-workshop-tool-presentation.js`
- `./skill-workshop-tool.js`
- `./structured-output-tool.js`
- `./structured-output-tool.test-support.js`
- `./subagents-tool.js`
- `./system-agent-tool.js`
- `./task-suggestion-tools.js`
- `./terminal-tool.js`
- `./tool-results.js`
- `./tool-runtime.helpers.js`
- `./transcripts-tool-runtime.js`
- `./transcripts-tool.js`
- `./tts-tool.js`
- `./update-plan-tool.js`
- `./video-generate-background.js`
- `./video-generate-tool.actions.js`
- `./video-generate-tool.js`
- `./video-generate-tool.test-support.js`
- `./web-fetch-utils.js`
- `./web-fetch-visibility.js`
- `./web-fetch.js`
- `./web-fetch.test-harness.js`
- `./web-fetch.test-mocks.js`
- `./web-fetch.test-support.js`
- `./web-guarded-fetch.js`
- `./web-search-output.js`
- `./web-search-provider-common.js`
- `./web-search-provider-config.js`
- `./web-search-provider-credentials.js`
- `./web-search.js`
- `./web-shared.js`
- `./web-tool-runtime-context.js`
- `./web-tools.js`
- `@openclaw/acp-core/session-interaction-mode`
- `@openclaw/ai/internal/openai`
- `@openclaw/media-core/base64`
- `@openclaw/media-core/constants`
- `@openclaw/media-core/inbound-path-policy`
- `@openclaw/media-core/mime`
- `@openclaw/model-catalog-core/provider-id`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/boolean-coercion`
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
- `p-map`
- `typebox`
- `typebox/value`
- `undici`
- `vitest`
