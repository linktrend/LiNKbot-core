# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    root[root] --> agents[agents]
    root[root] --> agents[agents]
    root[root] --> agents[agents]
    root[root] --> embedded_agent_runner[embedded-agent-runner]
    root[root] --> embedded_agent_runner[embedded-agent-runner]
    root[root] --> cli[cli]
    root[root] --> config[config]
    root[root] --> infra[infra]
    root[root] --> plugins[plugins]
    root[root] --> system_agent[system-agent]
    root[root] --> system_agent[system-agent]
    root[root] --> system_agent[system-agent]
    root[root] --> diagnostics_otel[diagnostics-otel]
    root[root] --> qa_lab[qa-lab]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> mock_openai[mock-openai]
    root[root] --> telegram[telegram]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> dev[dev]
    root[root] --> lib[lib]
    root[root] --> codex_media_path[codex-media-path]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> openai_web_search_minimal[openai-web-search-minimal]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> e2e[e2e]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> scripts[scripts]
    root[root] --> scripts[scripts]
    root[root] --> auth_profiles[auth-profiles]
    root[root] --> sandbox[sandbox]
    root[root] --> gateway[gateway]
    root[root] --> infra[infra]
    root[root] --> infra[infra]
    root[root] --> infra[infra]
    root[root] --> infra[infra]
    root[root] --> logging[logging]
    root[root] --> logging[logging]
    root[root] --> logging[logging]
    root[root] --> state[state]
    root[root] --> test_utils[test-utils]
    root[root] --> utils[utils]
    root[root] --> ocp_01[ocp-01]
    root[root] --> helpers[helpers]
    root[root] --> helpers[helpers]
    root[root] --> helpers[helpers]
    root[root] --> helpers[helpers]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> src[src]
    root[root] --> schema[schema]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> lib[lib]
    root[root] --> agents[agents]
    root[root] --> agents[agents]
    root[root] --> reply[reply]
    root[root] --> config[config]
    root[root] --> sessions[sessions]
    root[root] --> cron[cron]
    root[root] --> gateway[gateway]
    root[root] --> infra[infra]
    root[root] --> infra[infra]
    root[root] --> format_time[format-time]
    root[root] --> format_time[format-time]
    root[root] --> outbound[outbound]
    root[root] --> plugins[plugins]
    root[root] --> process[process]
    root[root] --> process[process]
    root[root] --> shared[shared]
    root[root] --> shared[shared]
    root[root] --> text[text]
    root[root] --> text[text]
    root[root] --> test_utils[test-utils]
    root[root] --> test_utils[test-utils]
    root[root] --> test_utils[test-utils]
    root[root] --> utils[utils]
    root[root] --> helpers[helpers]
    root[root] --> api[api]
    root[root] --> __[..]
    root[root] --> __[..]
    root[root] --> app[app]
    root[root] --> app[app]
    root[root] --> app[app]
    root[root] --> app[app]
    root[root] --> components[components]
    root[root] --> components[components]
    root[root] --> components[components]
    root[root] --> components[components]
    root[root] --> components[components]
    root[root] --> components[components]
    root[root] --> components[components]
    root[root] --> run[run]
    root[root] --> reply[reply]
    root[root] --> commitments[commitments]
    root[root] --> commitments[commitments]
    root[root] --> commitments[commitments]
    root[root] --> config[config]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> system_agent[system-agent]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> helpers[helpers]
    root[root] --> i18n[i18n]
    root[root] --> board[board]
    root[root] --> widgets[widgets]
    root[root] --> config[config]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> sessions[sessions]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> skills[skills]
    root[root] --> lib[lib]
    root[root] --> lit[lit]
    root[root] --> lit[lit]
    root[root] --> lit[lit]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> lib[lib]
    root[root] --> embedded_agent_runner[embedded-agent-runner]
    root[root] --> agents[agents]
    root[root] --> agents[agents]
    root[root] --> commands[commands]
    root[root] --> commands[commands]
    root[root] --> sessions[sessions]
    root[root] --> sessions[sessions]
    root[root] --> sessions[sessions]
    root[root] --> sessions[sessions]
    root[root] --> gateway[gateway]
    root[root] --> gateway[gateway]
    root[root] --> infra[infra]
    root[root] --> infra[infra]
    root[root] --> infra[infra]
    root[root] --> infra[infra]
    root[root] --> infra[infra]
    root[root] --> logging[logging]
    root[root] --> media[media]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> plugins[plugins]
    root[root] --> plugins[plugins]
    root[root] --> src[src]
    root[root] --> snapshot[snapshot]
    root[root] --> state[state]
    root[root] --> state[state]
    root[root] --> tasks[tasks]
    root[root] --> tasks[tasks]
    root[root] --> test_helpers[test-helpers]
    root[root] --> test_helpers[test-helpers]
    root[root] --> test_utils[test-utils]
    root[root] --> test_utils[test-utils]
    root[root] --> test_utils[test-utils]
    root[root] --> test_utils[test-utils]
    root[root] --> src[src]
    root[root] --> utils[utils]
    root[root] --> utils[utils]
    root[root] --> styles[styles]
    root[root] --> styles[styles]
    root[root] --> styles[styles]
    root[root] --> styles[styles]
    root[root] --> test_helpers[test-helpers]
    root[root] --> test_helpers[test-helpers]
    root[root] --> test_helpers[test-helpers]
    root[root] --> test_helpers[test-helpers]
    root[root] --> test_helpers[test-helpers]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> __[..]
    root[root] --> api[api]
    root[root] --> __[..]
    root[root] --> __[..]
    root[root] --> app[app]
    root[root] --> app[app]
    root[root] --> app[app]
    root[root] --> app[app]
    root[root] --> app[app]
    root[root] --> app[app]
    root[root] --> app[app]
    root[root] --> app[app]
    root[root] --> app[app]
    root[root] --> app[app]
    root[root] --> app[app]
    root[root] --> __[..]
    root[root] --> __[..]
    root[root] --> __[..]
    root[root] --> __[..]
    root[root] --> __[..]
    root[root] --> components[components]
    root[root] --> components[components]
    root[root] --> __[..]
    root[root] --> __[..]
    root[root] --> src[src]
    root[root] --> firecrawl[firecrawl]
    root[root] --> mock_openai[mock-openai]
    root[root] --> shared[shared]
    root[root] --> shared[shared]
    root[root] --> src[src]
    root[root] --> fixtures[fixtures]
    root[root] --> __[..]
    root[root] --> i18n[i18n]
    root[root] --> __[..]
    root[root] --> jobs[jobs]
    root[root] --> agents[agents]
    root[root] --> lib[lib]
    root[root] --> board[board]
    root[root] --> board[board]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> chat[chat]
    root[root] --> chat[chat]
    root[root] --> lib[lib]
    root[root] --> config[config]
    root[root] --> config[config]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> cron[cron]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> sessions[sessions]
    root[root] --> sessions[sessions]
    root[root] --> sessions[sessions]
    root[root] --> sessions[sessions]
    root[root] --> sessions[sessions]
    root[root] --> sessions[sessions]
    root[root] --> sessions[sessions]
    root[root] --> sessions[sessions]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lit[lit]
    root[root] --> lit[lit]
    root[root] --> lit[lit]
    root[root] --> __[..]
    root[root] --> __[..]
    root[root] --> __[..]
    root[root] --> __[..]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> plugin[plugin]
    root[root] --> __[..]
    root[root] --> __[..]
    root[root] --> __[..]
    root[root] --> providers[providers]
    root[root] --> convex[convex]
    root[root] --> __[..]
    root[root] --> __[..]
    root[root] --> runtime[runtime]
    root[root] --> scripts[scripts]
    root[root] --> scripts[scripts]
    root[root] --> scripts[scripts]
    root[root] --> scripts[scripts]
    root[root] --> scripts[scripts]
    root[root] --> scripts[scripts]
    root[root] --> scripts[scripts]
    root[root] --> scripts[scripts]
    root[root] --> scripts[scripts]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> scripts[scripts]
    root[root] --> scripts[scripts]
    root[root] --> scripts[scripts]
    root[root] --> scripts[scripts]
    root[root] --> scripts[scripts]
    root[root] --> scripts[scripts]
    root[root] --> scripts[scripts]
    root[root] --> scripts[scripts]
    root[root] --> sessions[sessions]
    root[root] --> agents[agents]
    root[root] --> agents[agents]
    root[root] --> embedded_agent_helpers[embedded-agent-helpers]
    root[root] --> agents[agents]
    root[root] --> agents[agents]
    root[root] --> agents[agents]
    root[root] --> agents[agents]
    root[root] --> agents[agents]
    root[root] --> agents[agents]
    root[root] --> tools[tools]
    root[root] --> tools[tools]
    root[root] --> plugins[plugins]
    root[root] --> cli[cli]
    root[root] --> cli[cli]
    root[root] --> cli[cli]
    root[root] --> cli[cli]
    root[root] --> commands[commands]
    root[root] --> commands[commands]
    root[root] --> config[config]
    root[root] --> config[config]
    root[root] --> config[config]
    root[root] --> config[config]
    root[root] --> sessions[sessions]
    root[root] --> gateway[gateway]
    root[root] --> gateway[gateway]
    root[root] --> methods[methods]
    root[root] --> gateway[gateway]
    root[root] --> gateway[gateway]
    root[root] --> image_generation[image-generation]
    root[root] --> infra[infra]
    root[root] --> infra[infra]
    root[root] --> format_time[format-time]
    root[root] --> infra[infra]
    root[root] --> infra[infra]
    root[root] --> infra[infra]
    root[root] --> infra[infra]
    root[root] --> infra[infra]
    root[root] --> infra[infra]
    root[root] --> media[media]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> test_helpers[test-helpers]
    root[root] --> compat[compat]
    root[root] --> plugins[plugins]
    root[root] --> plugins[plugins]
    root[root] --> plugins[plugins]
    root[root] --> plugins[plugins]
    root[root] --> plugins[plugins]
    root[root] --> plugins[plugins]
    root[root] --> plugins[plugins]
    root[root] --> proxy_capture[proxy-capture]
    root[root] --> proxy_capture[proxy-capture]
    root[root] --> shared[shared]
    root[root] --> shared[shared]
    root[root] --> state[state]
    root[root] --> state[state]
    root[root] --> test_utils[test-utils]
    root[root] --> test_utils[test-utils]
    root[root] --> test_utils[test-utils]
    root[root] --> test_utils[test-utils]
    root[root] --> test_utils[test-utils]
    root[root] --> test_utils[test-utils]
    root[root] --> tui[tui]
    root[root] --> src[src]
    root[root] --> utils[utils]
    root[root] --> web_fetch[web-fetch]
    root[root] --> __[..]
    root[root] --> styles[styles]
    root[root] --> styles[styles]
    root[root] --> styles[styles]
    root[root] --> __[..]
    root[root] --> app_sidebar_cases[app-sidebar-cases]
    root[root] --> app_sidebar_cases[app-sidebar-cases]
    root[root] --> app_sidebar_cases[app-sidebar-cases]
    root[root] --> app_sidebar_cases[app-sidebar-cases]
    root[root] --> app_sidebar_cases[app-sidebar-cases]
    root[root] --> app_sidebar_cases[app-sidebar-cases]
    root[root] --> app_sidebar_cases[app-sidebar-cases]
    root[root] --> app_sidebar_cases[app-sidebar-cases]
    root[root] --> app_sidebar_cases[app-sidebar-cases]
    root[root] --> app_sidebar_cases[app-sidebar-cases]
    root[root] --> app_sidebar_cases[app-sidebar-cases]
    root[root] --> app_sidebar_cases[app-sidebar-cases]
    root[root] --> app_sidebar_cases[app-sidebar-cases]
    root[root] --> app_sidebar_cases[app-sidebar-cases]
    root[root] --> app_sidebar_cases[app-sidebar-cases]
    root[root] --> app_sidebar_cases[app-sidebar-cases]
    root[root] --> app_sidebar_cases[app-sidebar-cases]
    root[root] --> test_helpers[test-helpers]
    root[root] --> test_helpers[test-helpers]
    root[root] --> test_helpers[test-helpers]
    root[root] --> test_helpers[test-helpers]
    root[root] --> test_helpers[test-helpers]
    root[root] --> test_helpers[test-helpers]
    root[root] --> test_helpers[test-helpers]
    root[root] --> __[..]
    root[root] --> __[..]
    root[root] --> agents[agents]
    root[root] --> agents[agents]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> __[..]
    root[root] --> i18n[i18n]
    root[root] --> lib[lib]
    root[root] --> test_helpers[test-helpers]
    root[root] --> ui[ui]
    root[root] --> ui[ui]
    root[root] --> ui[ui]
    root[root] --> __[..]
    root[root] --> __[..]
    root[root] --> __[..]
    root[root] --> __[..]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> agents[agents]
    root[root] --> alibaba[alibaba]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> app[app]
    root[root] --> app[app]
    root[root] --> app[app]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> byteplus[byteplus]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> chat[chat]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> compliance[compliance]
    root[root] --> compliance[compliance]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> config[config]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> cron[cron]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> debug[debug]
    root[root] --> deepinfra[deepinfra]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> fal[fal]
    root[root] --> _[.]
    root[root] --> fixtures[fixtures]
    root[root] --> fixtures[fixtures]
    root[root] --> fixtures[fixtures]
    root[root] --> fixtures[fixtures]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> google[google]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> health[health]
    root[root] --> _[.]
    root[root] --> helpers[helpers]
    root[root] --> helpers[helpers]
    root[root] --> media_generation[media-generation]
    root[root] --> helpers[helpers]
    root[root] --> helpers[helpers]
    root[root] --> helpers[helpers]
    root[root] --> helpers[helpers]
    root[root] --> helpers[helpers]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> i18n[i18n]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> cross_os_release_checks[cross-os-release-checks]
    root[root] --> cross_os_release_checks[cross-os-release-checks]
    root[root] --> cross_os_release_checks[cross-os-release-checks]
    root[root] --> cross_os_release_checks[cross-os-release-checks]
    root[root] --> cross_os_release_checks[cross-os-release-checks]
    root[root] --> cross_os_release_checks[cross-os-release-checks]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> ts_topology[ts-topology]
    root[root] --> ts_topology[ts-topology]
    root[root] --> ts_topology[ts-topology]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> logs[logs]
    root[root] --> maintenance[maintenance]
    root[root] --> maintenance[maintenance]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> minimax[minimax]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> model_providers[model-providers]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> nodes[nodes]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> openai[openai]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> openrouter[openrouter]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> about[about]
    root[root] --> activity[activity]
    root[root] --> agents[agents]
    root[root] --> approvals[approvals]
    root[root] --> apps[apps]
    root[root] --> channels[channels]
    root[root] --> chat[chat]
    root[root] --> config[config]
    root[root] --> connection[connection]
    root[root] --> cron[cron]
    root[root] --> custodian[custodian]
    root[root] --> debug[debug]
    root[root] --> labs[labs]
    root[root] --> logs[logs]
    root[root] --> memory_import[memory-import]
    root[root] --> model_providers[model-providers]
    root[root] --> model_setup[model-setup]
    root[root] --> new_session[new-session]
    root[root] --> nodes[nodes]
    root[root] --> plugin[plugin]
    root[root] --> plugins[plugins]
    root[root] --> profile[profile]
    root[root] --> sessions[sessions]
    root[root] --> skill_workshop[skill-workshop]
    root[root] --> skills[skills]
    root[root] --> tasks[tasks]
    root[root] --> usage[usage]
    root[root] --> workboard[workboard]
    root[root] --> worktrees[worktrees]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> pixverse[pixverse]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> plugins[plugins]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> pre_commit[pre-commit]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> qwen[qwen]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> reporting[reporting]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> runway[runway]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> parallels[parallels]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> lib[lib]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> sessions[sessions]
    root[root] --> sessions[sessions]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> skills[skills]
    root[root] --> skills[skills]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> src[src]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> tasks[tasks]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> test_support[test-support]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> time_management[time-management]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> together[together]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> usage[usage]
    root[root] --> usage[usage]
    root[root] --> usage[usage]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vitest[vitest]
    root[root] --> vydra[vydra]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> _[.]
    root[root] --> xai[xai]
    root[root] --> dialog[dialog]
    root[root] --> dropdown_item[dropdown-item]
    root[root] --> dropdown[dropdown]
    root[root] --> option[option]
    root[root] --> popover[popover]
    root[root] --> radio_group[radio-group]
    root[root] --> radio[radio]
    root[root] --> select[select]
    root[root] --> switch[switch]
    root[root] --> tab_group[tab-group]
    root[root] --> tab_panel[tab-panel]
    root[root] --> tab[tab]
    root[root] --> tooltip[tooltip]
    root[root] --> _clack[@clack]
    root[root] --> _lit[@lit]
    root[root] --> _lydell[@lydell]
    root[root] --> _mdx_js[@mdx-js]
    root[root] --> ext_apps[ext-apps]
    root[root] --> client[client]
    root[root] --> client[client]
    root[root] --> server[server]
    root[root] --> server[server]
    root[root] --> sdk[sdk]
    root[root] --> fs_safe[fs-safe]
    root[root] --> gateway_client[gateway-client]
    root[root] --> _openclaw[@openclaw]
    root[root] --> model_catalog_core[model-catalog-core]
    root[root] --> _openclaw[@openclaw]
    root[root] --> normalization_core[normalization-core]
    root[root] --> normalization_core[normalization-core]
    root[root] --> normalization_core[normalization-core]
    root[root] --> normalization_core[normalization-core]
    root[root] --> _openclaw[@openclaw]
    root[root] --> _shikijs[@shikijs]
    root[root] --> _shikijs[@shikijs]
    root[root] --> _shikijs[@shikijs]
    root[root] --> _vitest[@vitest]
    root[root] --> __future__[__future__]
    root[root] --> acorn[acorn]
    root[root] --> argparse[argparse]
    root[root] --> atexit[atexit]
    root[root] --> base64[base64]
    root[root] --> cjs_only[cjs-only]
    root[root] --> collections[collections]
    root[root] --> contextlib[contextlib]
    root[root] --> ctypes[ctypes]
    root[root] --> dataclasses[dataclasses]
    root[root] --> datetime[datetime]
    root[root] --> dompurify[dompurify]
    root[root] --> esbuild[esbuild]
    root[root] --> execution[execution]
    root[root] --> fake_package_two[fake-package-two]
    root[root] --> fcntl[fcntl]
    root[root] --> fixture_sdk[fixture-sdk]
    root[root] --> fnmatch[fnmatch]
    root[root] --> getpass[getpass]
    root[root] --> hashlib[hashlib]
    root[root] --> lib[lib]
    root[root] --> languages[languages]
    root[root] --> languages[languages]
    root[root] --> languages[languages]
    root[root] --> languages[languages]
    root[root] --> languages[languages]
    root[root] --> languages[languages]
    root[root] --> languages[languages]
    root[root] --> languages[languages]
    root[root] --> languages[languages]
    root[root] --> languages[languages]
    root[root] --> languages[languages]
    root[root] --> languages[languages]
    root[root] --> languages[languages]
    root[root] --> languages[languages]
    root[root] --> hosted_git_info[hosted-git-info]
    root[root] --> ide_development[ide_development]
    root[root] --> importlib[importlib]
    root[root] --> jiti[jiti]
    root[root] --> lit[lit]
    root[root] --> directives[directives]
    root[root] --> directives[directives]
    root[root] --> directives[directives]
    root[root] --> directives[directives]
    root[root] --> directives[directives]
    root[root] --> lit[lit]
    root[root] --> math[math]
    root[root] --> msvcrt[msvcrt]
    root[root] --> node_assert[node:assert]
    root[root] --> node_buffer[node:buffer]
    root[root] --> node_child_process[node:child_process]
    root[root] --> node_crypto[node:crypto]
    root[root] --> node_dns[node:dns]
    root[root] --> node_dns[node:dns]
    root[root] --> node_events[node:events]
    root[root] --> node_fs[node:fs]
    root[root] --> node_fs[node:fs]
    root[root] --> node_http[node:http]
    root[root] --> node_https[node:https]
    root[root] --> node_module[node:module]
    root[root] --> node_net[node:net]
    root[root] --> node_os[node:os]
    root[root] --> node_path[node:path]
    root[root] --> node_perf_hooks[node:perf_hooks]
    root[root] --> node_process[node:process]
    root[root] --> node_readline[node:readline]
    root[root] --> node_sqlite[node:sqlite]
    root[root] --> node_stream[node:stream]
    root[root] --> node_string_decoder[node:string_decoder]
    root[root] --> node_test[node:test]
    root[root] --> node_timers[node:timers]
    root[root] --> node_timers[node:timers]
    root[root] --> node_url[node:url]
    root[root] --> node_util[node:util]
    root[root] --> node_vm[node:vm]
    root[root] --> node_worker_threads[node:worker_threads]
    root[root] --> node_zlib[node:zlib]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> plugin_sdk[plugin-sdk]
    root[root] --> p_limit[p-limit]
    root[root] --> p_map[p-map]
    root[root] --> pathlib[pathlib]
    root[root] --> pretty_ms[pretty-ms]
    root[root] --> qrcode[qrcode]
    root[root] --> semver[semver]
    root[root] --> shiki[shiki]
    root[root] --> shutil[shutil]
    root[root] --> sigstore[sigstore]
    root[root] --> slugify[slugify]
    root[root] --> tarfile[tarfile]
    root[root] --> tempfile[tempfile]
    root[root] --> typescript[typescript]
    root[root] --> typing[typing]
    root[root] --> undici[undici]
    root[root] --> unittest[unittest]
    root[root] --> urllib[urllib]
    root[root] --> vitest[vitest]
    root[root] --> yaml[yaml]
    root[root] --> zipfile[zipfile]
    root[root] --> zod[zod]
    root[root] --> zoneinfo[zoneinfo]
```

## Internal Dependencies

Dependencies within this module:

- `administrator_recovery`
- `bugbot_user_credentials`
- `cleanup_controls`
- `coordinator`
- `copy`
- `core`
- `delivery_modes`
- `generated_output_closure`
- `github_auth`
- `gitops`
- `issue_checkpoint`
- `json`
- `json5`
- `lit`
- `markdown-it`
- `markdown-it-task-lists`
- `model_usage`
- `os`
- `package_skill`
- `packager_coordinator`
- `packager_logic`
- `phase_integrator`
- `playwright`
- `promotion_receipt_gate`
- `quick_validate`
- `re`
- `readiness_status`
- `receipt_seal`
- `repair_task`
- `repository_protection`
- `review_ready_dispatch`
- `scripts`
- `secret_scan`
- `secrets`
- `stat`
- `subprocess`
- `sys`
- `time`
- `tsdown`
- `types`
- `uuid`
- `verify_reconciled_tree`
- `vite`
- `vitest`
- `ws`

## External Dependencies

Dependencies from other modules:

- `../../../../dist/agents/agent-bundle-mcp-materialize.js`
- `../../../../dist/agents/agent-bundle-mcp-runtime.js`
- `../../../../dist/agents/conversation-capability-profile.js`
- `../../../../dist/agents/embedded-agent-runner/effective-tool-policy.js`
- `../../../../dist/agents/embedded-agent-runner/tool-split.js`
- `../../../../dist/cli/run-main.js`
- `../../../../dist/config/config.js`
- `../../../../dist/infra/sqlite-audit-record-store.js`
- `../../../../dist/plugins/tools.js`
- `../../../../dist/system-agent/audit.js`
- `../../../../dist/system-agent/setup-inference.js`
- `../../../../dist/system-agent/system-agent.js`
- `../../../../extensions/diagnostics-otel/runtime-api.js`
- `../../../../extensions/qa-lab/api.js`
- `../../../../extensions/qa-lab/src/evidence-summary.js`
- `../../../../extensions/qa-lab/src/gateway-child.js`
- `../../../../extensions/qa-lab/src/providers/mock-openai/server.js`
- `../../../../extensions/telegram/runtime-api.js`
- `../../../../packages/gateway-protocol/src/approval-result-validators.js`
- `../../../../packages/gateway-protocol/src/version.js`
- `../../../../packages/terminal-core/src/ansi.js`
- `../../../../scripts/dev/gateway-smoke.js`
- `../../../../scripts/e2e/lib/codex-app-server-fixture.mjs`
- `../../../../scripts/e2e/lib/codex-media-path/jsonl-request-tail.mjs`
- `../../../../scripts/e2e/lib/gateway-frame-payload.mjs`
- `../../../../scripts/e2e/lib/mock-openai-http.mjs`
- `../../../../scripts/e2e/lib/openai-web-search-minimal/client.mjs`
- `../../../../scripts/e2e/lib/plugin-index-sqlite.mjs`
- `../../../../scripts/e2e/lib/temp-state-dir.ts`
- `../../../../scripts/e2e/mcp-channel-limits.ts`
- `../../../../scripts/lib/bundled-plugin-build-entries.mjs`
- `../../../../scripts/lib/gateway-ws-client.ts`
- `../../../../scripts/lib/windows-taskkill.mjs`
- `../../../../scripts/package-openclaw-for-docker.mjs`
- `../../../../scripts/pnpm-runner.mjs`
- `../../../../src/agents/auth-profiles/persisted.js`
- `../../../../src/agents/sandbox/browser-policy.js`
- `../../../../src/gateway/client.js`
- `../../../../src/infra/diagnostic-events.js`
- `../../../../src/infra/errors.js`
- `../../../../src/infra/heartbeat-active-hours.js`
- `../../../../src/infra/heartbeat-runner.js`
- `../../../../src/logging/config.js`
- `../../../../src/logging/redact.js`
- `../../../../src/logging/redact.test-support.js`
- `../../../../src/state/openclaw-agent-db.js`
- `../../../../src/test-utils/ports.js`
- `../../../../src/utils/message-channel.js`
- `../../../docs/link-integrations/ocp-01/verify-provider-pins.mjs`
- `../../../helpers/bounded-child-output.js`
- `../../../helpers/gateway-e2e-harness.js`
- `../../../helpers/openclaw-test-instance.js`
- `../../../helpers/temp-dir.js`
- `../../../lib/sleep.mjs`
- `../../../lib/windows-taskkill.mjs`
- `../../../packages/gateway-protocol/src/connect-error-details.js`
- `../../../packages/gateway-protocol/src/schema/session-placement-state.js`
- `../../../packages/gateway-protocol/src/session-icon.js`
- `../../../packages/markdown-core/src/assistant-transcript.js`
- `../../../packages/normalization-core/src/utf16-slice.ts`
- `../../../scripts/lib/android-version.ts`
- `../../../src/agents/auth-profiles.js`
- `../../../src/agents/internal-runtime-context.js`
- `../../../src/auto-reply/reply/get-reply-fast-path.test-support.js`
- `../../../src/config/schema-base.js`
- `../../../src/config/sessions/store.js`
- `../../../src/cron/service.test-harness.js`
- `../../../src/gateway/control-reply-text.js`
- `../../../src/infra/agent-events.js`
- `../../../src/infra/approval-display-paths.ts`
- `../../../src/infra/format-time/format-duration.ts`
- `../../../src/infra/format-time/format-relative.ts`
- `../../../src/infra/outbound/send-deps.js`
- `../../../src/plugins/bundled-plugin-metadata.js`
- `../../../src/process/command-queue.js`
- `../../../src/process/command-queue.test-support.js`
- `../../../src/shared/avatar-limits.js`
- `../../../src/shared/lobster-day.js`
- `../../../src/shared/text/assistant-visible-text.js`
- `../../../src/shared/text/citation-control-markers.js`
- `../../../src/test-utils/bundled-plugin-public-surface.js`
- `../../../src/test-utils/channel-plugins.js`
- `../../../src/test-utils/frozen-time.js`
- `../../../src/utils/directive-tags.js`
- `../../../test/helpers/ui-style-fixtures.js`
- `../../api/gateway.ts`
- `../../app-navigation.ts`
- `../../app-route-paths.ts`
- `../../app/context.ts`
- `../../app/lazy-custom-element.ts`
- `../../app/public-assets.ts`
- `../../app/settings.ts`
- `../../components/icons.ts`
- `../../components/markdown.ts`
- `../../components/modal-dialog.ts`
- `../../components/plugins-hub-tabs.ts`
- `../../components/sessions-hub-tabs.ts`
- `../../components/settings-ui.ts`
- `../../components/settings-workspace.ts`
- `../../dist/agents/embedded-agent-runner/run/runtime-context-prompt.js`
- `../../dist/auto-reply/reply/commands-system-agent.js`
- `../../dist/commitments/runtime.js`
- `../../dist/commitments/runtime.test-support.js`
- `../../dist/commitments/store.js`
- `../../dist/config/config.js`
- `../../dist/plugin-sdk/provider-onboard.js`
- `../../dist/system-agent/rescue-message.js`
- `../../extensions/qa-lab/src/cli-paths.js`
- `../../extensions/qa-lab/src/evidence-environment.js`
- `../../extensions/qa-lab/src/evidence-summary.js`
- `../../extensions/qa-lab/src/scorecard-taxonomy.js`
- `../../helpers/temp-dir.js`
- `../../i18n/index.ts`
- `../../lib/board/grid.ts`
- `../../lib/board/widgets/index.ts`
- `../../lib/config/index.ts`
- `../../lib/external-link.ts`
- `../../lib/format.ts`
- `../../lib/gateway-diagnostics.ts`
- `../../lib/open-external-url.ts`
- `../../lib/presenter.ts`
- `../../lib/sessions/index.ts`
- `../../lib/skills-grouping.ts`
- `../../lib/skills-shared.ts`
- `../../lib/skills/index.ts`
- `../../lib/string-coerce.ts`
- `../../lit/openclaw-element.ts`
- `../../lit/poll-controller.ts`
- `../../lit/subscriptions-controller.ts`
- `../../packages/normalization-core/src/expect.js`
- `../../packages/normalization-core/src/string-coerce.js`
- `../../packages/normalization-core/src/utf16-slice.js`
- `../../packages/normalization-core/src/utf16-slice.ts`
- `../../packages/plugin-package-contract/src/index.ts`
- `../../packages/terminal-core/src/ansi.js`
- `../../scripts/lib/local-build-metadata-paths.mjs`
- `../../src/agents/embedded-agent-runner/model.js`
- `../../src/agents/models-config-state.test-support.js`
- `../../src/agents/models-config.js`
- `../../src/commands/doctor-session-sqlite-compact.js`
- `../../src/commands/doctor-state-sqlite-compact.js`
- `../../src/config/sessions/archive-compression.js`
- `../../src/config/sessions/session-accessor.js`
- `../../src/config/sessions/session-accessor.sqlite.js`
- `../../src/config/sessions/sqlite-marker.js`
- `../../src/gateway/client.js`
- `../../src/gateway/test-helpers.e2e.js`
- `../../src/infra/clawhub-retry.js`
- `../../src/infra/device-identity.js`
- `../../src/infra/json-files.ts`
- `../../src/infra/node-sqlite.js`
- `../../src/infra/package-dist-inventory.ts`
- `../../src/logging/redact.js`
- `../../src/media/png-encode.js`
- `../../src/plugin-sdk/session-store-runtime.js`
- `../../src/plugin-sdk/session-transcript-runtime.js`
- `../../src/plugins/bundled-plugin-metadata.js`
- `../../src/plugins/min-host-version.ts`
- `../../src/runtime.js`
- `../../src/snapshot/local-repository.js`
- `../../src/state/openclaw-agent-db.js`
- `../../src/state/openclaw-state-db.js`
- `../../src/tasks/task-registry.js`
- `../../src/tasks/task-runtime.test-helpers.js`
- `../../src/test-helpers/temp-dir.js`
- `../../src/test-helpers/workspace.js`
- `../../src/test-utils/env.js`
- `../../src/test-utils/openclaw-test-state.js`
- `../../src/test-utils/plugin-registration.js`
- `../../src/test-utils/task-registry-runtime.js`
- `../../src/utils.js`
- `../../src/utils/message-channel.js`
- `../../src/utils/run-with-concurrency.js`
- `../../styles/approval.css`
- `../../styles/board.css`
- `../../styles/plugins.css`
- `../../styles/sidebar-markdown.css`
- `../../test-helpers/application-context.ts`
- `../../test-helpers/board-fixture.ts`
- `../../test-helpers/modal-dialog.ts`
- `../../test-helpers/storage.ts`
- `../../test-helpers/wait-for.ts`
- `../../test/vitest/vitest.agents-paths.mjs`
- `../../test/vitest/vitest.commands-light-paths.mjs`
- `../../test/vitest/vitest.extension-acpx-paths.mjs`
- `../../test/vitest/vitest.extension-active-memory-paths.mjs`
- `../../test/vitest/vitest.extension-browser-paths.mjs`
- `../../test/vitest/vitest.extension-channel-split-paths.mjs`
- `../../test/vitest/vitest.extension-codex-paths.mjs`
- `../../test/vitest/vitest.extension-diffs-paths.mjs`
- `../../test/vitest/vitest.extension-feishu-paths.mjs`
- `../../test/vitest/vitest.extension-irc-paths.mjs`
- `../../test/vitest/vitest.extension-matrix-paths.mjs`
- `../../test/vitest/vitest.extension-mattermost-paths.mjs`
- `../../test/vitest/vitest.extension-media-paths.mjs`
- `../../test/vitest/vitest.extension-memory-paths.mjs`
- `../../test/vitest/vitest.extension-messaging-paths.mjs`
- `../../test/vitest/vitest.extension-misc-paths.mjs`
- `../../test/vitest/vitest.extension-msteams-paths.mjs`
- `../../test/vitest/vitest.extension-provider-paths.mjs`
- `../../test/vitest/vitest.extension-qa-paths.mjs`
- `../../test/vitest/vitest.extension-telegram-paths.mjs`
- `../../test/vitest/vitest.extension-voice-call-paths.mjs`
- `../../test/vitest/vitest.extension-whatsapp-paths.mjs`
- `../../test/vitest/vitest.extension-zalo-paths.mjs`
- `../../test/vitest/vitest.test-shards.mjs`
- `../../test/vitest/vitest.tooling-isolated-paths.mjs`
- `../../test/vitest/vitest.unit-fast-paths.mjs`
- `../../test/vitest/vitest.unit-paths.mjs`
- `../agent-turn-output.mjs`
- `../api/gateway.ts`
- `../app-navigation.ts`
- `../app-route-paths.ts`
- `../app/approval-presentation.ts`
- `../app/browser.ts`
- `../app/context.ts`
- `../app/gateway-scope.ts`
- `../app/native-link-routing.ts`
- `../app/native-window-drag.ts`
- `../app/operator-access.ts`
- `../app/public-assets.ts`
- `../app/question-prompt.ts`
- `../app/settings.ts`
- `../app/user-profile.ts`
- `../auth-profile-store-assertions.mjs`
- `../bounded-response-text.mjs`
- `../build-info.ts`
- `../changed-lanes.mjs`
- `../codex-install-utils.mjs`
- `../components/icons.ts`
- `../components/tooltip.ts`
- `../ensure-playwright-chromium.mjs`
- `../env-limits.mjs`
- `../extensions/diffs/src/shiki-curated-languages.js`
- `../extensions/firecrawl/api.ts`
- `../extensions/qa-lab/src/providers/mock-openai/server.js`
- `../extensions/qa-lab/src/providers/shared/debug-request-cursor.js`
- `../extensions/qa-lab/src/providers/shared/mock-auth.js`
- `../extensions/qa-lab/src/qa-gateway-config.js`
- `../fixtures/mock-openai-config.mjs`
- `../generate-npm-shrinkwrap.mjs`
- `../i18n/index.ts`
- `../incremental-line-reader.mjs`
- `../jobs/lisa-job-desired-state.ts`
- `../lib/agents/display.ts`
- `../lib/avatar.ts`
- `../lib/board/availability-controller.ts`
- `../lib/board/provider.ts`
- `../lib/bounded-response.mjs`
- `../lib/bounded-response.ts`
- `../lib/chat/heartbeat-display.ts`
- `../lib/chat/message-extract.ts`
- `../lib/clipboard.ts`
- `../lib/config/index.ts`
- `../lib/config/mcp-servers.ts`
- `../lib/connection-hints.ts`
- `../lib/cron-status.ts`
- `../lib/cron/index.ts`
- `../lib/direct-run.mjs`
- `../lib/editor-links.ts`
- `../lib/external-link.ts`
- `../lib/format.ts`
- `../lib/gateway-methods.ts`
- `../lib/hover-marquee.ts`
- `../lib/identity-avatar.ts`
- `../lib/model-auth.ts`
- `../lib/numeric-options.mjs`
- `../lib/open-external-url.ts`
- `../lib/plain-gh.mjs`
- `../lib/regexp.mjs`
- `../lib/session-display.ts`
- `../lib/sessions/catalog-key.ts`
- `../lib/sessions/catalog-project-grouping.ts`
- `../lib/sessions/catalog-terminal.ts`
- `../lib/sessions/custom-groups.ts`
- `../lib/sessions/drag.ts`
- `../lib/sessions/grouping.ts`
- `../lib/sessions/index.ts`
- `../lib/sessions/session-key.ts`
- `../lib/sidebar-zone.ts`
- `../lib/sleep.mjs`
- `../lib/string-coerce.ts`
- `../lib/toast.ts`
- `../lib/uuid.ts`
- `../lib/windows-taskkill.mjs`
- `../lit/openclaw-element.ts`
- `../lit/poll-controller.ts`
- `../lit/subscriptions-controller.ts`
- `../local-storage.ts`
- `../mock-openai-http.mjs`
- `../npm-runner.mjs`
- `../package-compat.mjs`
- `../packages/gateway-protocol/src/schema.js`
- `../packages/normalization-core/src/expect.js`
- `../packages/normalization-core/src/string-coerce.js`
- `../packages/normalization-core/src/utf16-slice.js`
- `../packages/terminal-core/src/prompt-style.js`
- `../packages/terminal-core/src/theme.js`
- `../pages/plugin/route.ts`
- `../plugin-index-sqlite.mjs`
- `../plugin-publication-artifact.mjs`
- `../pnpm-runner.mjs`
- `../providers/pin-identities.ts`
- `../qa/convex-credential-broker/convex/payload_validation.js`
- `../release-assertion-files.mjs`
- `../runtime-postbuild-shared.mjs`
- `../runtime/script-evidence.js`
- `../scripts/check-architecture-smells.mjs`
- `../scripts/check-extension-plugin-sdk-boundary.mjs`
- `../scripts/check-plugin-extension-import-boundary.mjs`
- `../scripts/check-sdk-package-extension-import-boundary.mjs`
- `../scripts/check-src-extension-import-boundary.mjs`
- `../scripts/check-test-helper-extension-import-boundary.mjs`
- `../scripts/check-web-fetch-provider-boundaries.mjs`
- `../scripts/check-web-search-provider-boundaries.mjs`
- `../scripts/generate-npm-shrinkwrap.mjs`
- `../scripts/lib/bundled-plugin-build-entries.mjs`
- `../scripts/lib/guard-inventory-utils.mjs`
- `../scripts/lib/npm-publish-plan.mjs`
- `../scripts/lib/openclaw-release-clawhub-plan.ts`
- `../scripts/lib/package-dist-inventory.ts`
- `../scripts/lib/plugin-clawhub-release.ts`
- `../scripts/lib/plugin-npm-package-manifest.mjs`
- `../scripts/lib/plugin-npm-release.ts`
- `../scripts/lib/plugin-npm-runtime-build.mjs`
- `../scripts/lib/plugin-sdk-entries.mjs`
- `../scripts/lib/stable-release-closeout.mjs`
- `../scripts/lib/workspace-bootstrap-smoke.mjs`
- `../scripts/openclaw-npm-postpublish-verify.ts`
- `../scripts/openclaw-npm-prepublish-verify.ts`
- `../scripts/openclaw-npm-release-check.ts`
- `../scripts/openclaw-prepack.ts`
- `../scripts/plugin-clawhub-release-check.ts`
- `../scripts/release-check.ts`
- `../scripts/sparkle-build.ts`
- `../scripts/write-official-channel-catalog.mjs`
- `../sessions/session-key.ts`
- `../src/agents/agent-scope.js`
- `../src/agents/cli-backends.js`
- `../src/agents/embedded-agent-helpers/failover-matches.js`
- `../src/agents/live-auth-keys.js`
- `../src/agents/live-cache-regression-runner.js`
- `../src/agents/live-cache-test-support.js`
- `../src/agents/live-test-helpers.js`
- `../src/agents/model-auth.js`
- `../src/agents/tool-display-config.js`
- `../src/agents/tools/web-fetch-utils.js`
- `../src/agents/tools/web-fetch.js`
- `../src/channels/plugins/config-schema.js`
- `../src/cli/completion-runtime.js`
- `../src/cli/completion-runtime.ts`
- `../src/cli/plugins-authoring-command.js`
- `../src/cli/ports.js`
- `../src/commands/doctor-completion.js`
- `../src/commands/doctor-config-flow.js`
- `../src/config/config.js`
- `../src/config/doc-baseline.js`
- `../src/config/redact-snapshot.js`
- `../src/config/schema-base.js`
- `../src/config/sessions/session-accessor.js`
- `../src/gateway/client.js`
- `../src/gateway/control-ui-contract.js`
- `../src/gateway/methods/core-descriptors.js`
- `../src/gateway/server.js`
- `../src/gateway/test-helpers.e2e.js`
- `../src/image-generation/live-test-helpers.js`
- `../src/infra/env.js`
- `../src/infra/errors.ts`
- `../src/infra/format-time/format-duration.ts`
- `../src/infra/host-env-security-policy.js`
- `../src/infra/parse-finite-number.js`
- `../src/infra/resolve-system-bin.js`
- `../src/infra/restart-intent.js`
- `../src/infra/shell-env.js`
- `../src/infra/warning-filter.js`
- `../src/media/png-encode.js`
- `../src/plugin-sdk/api-baseline.ts`
- `../src/plugin-sdk/entrypoints.ts`
- `../src/plugin-sdk/facade-activation-contract.ts`
- `../src/plugin-sdk/runtime-store-registry.js`
- `../src/plugin-sdk/test-helpers/public-artifacts.js`
- `../src/plugins/compat/registry.ts`
- `../src/plugins/discovery.js`
- `../src/plugins/install-source-info.js`
- `../src/plugins/public-surface-loader.js`
- `../src/plugins/registry-empty.js`
- `../src/plugins/runtime-sidecar-paths-baseline.js`
- `../src/plugins/runtime-sidecar-paths.ts`
- `../src/plugins/sdk-alias.js`
- `../src/proxy-capture/ca.js`
- `../src/proxy-capture/env.js`
- `../src/shared/chat-message-content.js`
- `../src/shared/regexp.js`
- `../src/state/openclaw-agent-db.js`
- `../src/state/openclaw-state-db.js`
- `../src/test-utils/deferred.js`
- `../src/test-utils/env.js`
- `../src/test-utils/fs-scan-assertions.js`
- `../src/test-utils/generation-live-test-helpers.js`
- `../src/test-utils/node-process.js`
- `../src/test-utils/repo-files.js`
- `../src/tui/gateway-chat.js`
- `../src/utils.js`
- `../src/utils/message-channel.js`
- `../src/web-fetch/content-extractors.runtime.js`
- `../stage-ops-cron-installer.ts`
- `../styles/lobster-pet.css`
- `../styles/onboarding-memory-import.css`
- `../styles/option-card.css`
- `../templates.ts`
- `../test-helpers/app-sidebar-cases/agent-menu.ts`
- `../test-helpers/app-sidebar-cases/attention.ts`
- `../test-helpers/app-sidebar-cases/basics.ts`
- `../test-helpers/app-sidebar-cases/catalog-compat.ts`
- `../test-helpers/app-sidebar-cases/catalog-live-events.ts`
- `../test-helpers/app-sidebar-cases/catalog-live-state.ts`
- `../test-helpers/app-sidebar-cases/catalog-live.ts`
- `../test-helpers/app-sidebar-cases/catalog-pages.ts`
- `../test-helpers/app-sidebar-cases/child-sessions-cap.ts`
- `../test-helpers/app-sidebar-cases/child-sessions.ts`
- `../test-helpers/app-sidebar-cases/group-mutations.ts`
- `../test-helpers/app-sidebar-cases/interactions.ts`
- `../test-helpers/app-sidebar-cases/narration.ts`
- `../test-helpers/app-sidebar-cases/session-list-sections.ts`
- `../test-helpers/app-sidebar-cases/sessions.ts`
- `../test-helpers/app-sidebar-cases/sidebar-scroll.ts`
- `../test-helpers/app-sidebar-cases/sidebar-zone.ts`
- `../test-helpers/app-sidebar-suite.ts`
- `../test-helpers/application-context.ts`
- `../test-helpers/control-ui-e2e.ts`
- `../test-helpers/load-styles.ts`
- `../test-helpers/modal-dialog.ts`
- `../test-helpers/storage.ts`
- `../test-helpers/wait-for.ts`
- `../test-projects.test-support.mjs`
- `../test-report-utils.mjs`
- `../test/helpers/agents/happy-path-prompt-snapshots.js`
- `../test/helpers/agents/prompt-snapshot-paths.js`
- `../test/vitest/vitest.agents-paths.mjs`
- `../test/vitest/vitest.channel-paths.mjs`
- `../test/vitest/vitest.commands-light-paths.mjs`
- `../test/vitest/vitest.extension-acpx-paths.mjs`
- `../test/vitest/vitest.extension-active-memory-paths.mjs`
- `../test/vitest/vitest.extension-browser-paths.mjs`
- `../test/vitest/vitest.extension-channel-split-paths.mjs`
- `../test/vitest/vitest.extension-codex-paths.mjs`
- `../test/vitest/vitest.extension-diffs-paths.mjs`
- `../test/vitest/vitest.extension-feishu-paths.mjs`
- `../test/vitest/vitest.extension-irc-paths.mjs`
- `../test/vitest/vitest.extension-matrix-paths.mjs`
- `../test/vitest/vitest.extension-mattermost-paths.mjs`
- `../test/vitest/vitest.extension-media-paths.mjs`
- `../test/vitest/vitest.extension-memory-paths.mjs`
- `../test/vitest/vitest.extension-messaging-paths.mjs`
- `../test/vitest/vitest.extension-misc-paths.mjs`
- `../test/vitest/vitest.extension-msteams-paths.mjs`
- `../test/vitest/vitest.extension-provider-paths.mjs`
- `../test/vitest/vitest.extension-qa-paths.mjs`
- `../test/vitest/vitest.extension-telegram-paths.mjs`
- `../test/vitest/vitest.extension-voice-call-paths.mjs`
- `../test/vitest/vitest.extension-whatsapp-paths.mjs`
- `../test/vitest/vitest.extension-zalo-paths.mjs`
- `../test/vitest/vitest.plugin-sdk-paths.mjs`
- `../test/vitest/vitest.shared.config.ts`
- `../test/vitest/vitest.test-shards.mjs`
- `../test/vitest/vitest.tooling-isolated-paths.mjs`
- `../test/vitest/vitest.ui-paths.mjs`
- `../test/vitest/vitest.unit-fast-paths.mjs`
- `../test/vitest/vitest.unit-paths.mjs`
- `../text-file-utils.mjs`
- `../ui/src/i18n/index.ts`
- `../ui/src/lib/presenter.ts`
- `../ui/src/test-helpers/control-ui-e2e.ts`
- `../ui/vite.config.ts`
- `../ui/vitest.config.ts`
- `../ui/vitest.node.config.ts`
- `../vitest-process-group.mjs`
- `../web-awesome-tabs.ts`
- `../web-awesome.ts`
- `../windows-cmd-helpers.mjs`
- `./actions-artifact-archive.mjs`
- `./agent-scope-control.ts`
- `./agent-select.ts`
- `./agents/route.ts`
- `./alibaba/index.js`
- `./api.js`
- `./app-navigation.ts`
- `./app-route-paths.ts`
- `./app-routes.ts`
- `./app-sidebar-agent-menu.ts`
- `./app-sidebar-base.ts`
- `./app-sidebar-catalog-menu.ts`
- `./app-sidebar-child-session-data.ts`
- `./app-sidebar-menus.ts`
- `./app-sidebar-nav-menus.ts`
- `./app-sidebar-session-attention.ts`
- `./app-sidebar-session-catalog-live.ts`
- `./app-sidebar-session-catalog-state.ts`
- `./app-sidebar-session-catalogs.ts`
- `./app-sidebar-session-data.ts`
- `./app-sidebar-session-groups.ts`
- `./app-sidebar-session-list.ts`
- `./app-sidebar-session-menu-renderers.ts`
- `./app-sidebar-session-mutations.ts`
- `./app-sidebar-session-narration-element.ts`
- `./app-sidebar-session-narration.ts`
- `./app-sidebar-session-navigation.ts`
- `./app-sidebar-session-tree.ts`
- `./app-sidebar-session-types.ts`
- `./app/app-host.ts`
- `./app/public-assets.ts`
- `./app/stale-chunk-reload.ts`
- `./approval-page.ts`
- `./approvals-page.ts`
- `./arg-utils.mjs`
- `./assistant-identity.ts`
- `./availability-controller.ts`
- `./backup.js`
- `./battery.js`
- `./board-view.ts`
- `./board-widget-cell.ts`
- `./bounded-child-output.js`
- `./bounded-response.ts`
- `./browser-redact.ts`
- `./browser-runtime-policy.js`
- `./build-info-normalizers.ts`
- `./build-info.ts`
- `./bundled-plugin-assets.mjs`
- `./bundled-plugin-build-entries.mjs`
- `./bundled-plugin-paths.mjs`
- `./bundled-plugin-source-utils.mjs`
- `./byteplus/index.js`
- `./catalog-session-menu.ts`
- `./changed-extensions.mjs`
- `./changed-lanes.mjs`
- `./chat/sender-label.ts`
- `./check-cli-bootstrap-imports.mjs`
- `./check-file-utils.js`
- `./check-protocol-event-coverage.mjs`
- `./check.mjs`
- `./ci-node-test-plan.mjs`
- `./clawhub-release-candidate-install.js`
- `./cli-channel-picker.js`
- `./clipboard.ts`
- `./codex-app-server-protocol-artifacts.js`
- `./codex-auth-product-proof.test-support.js`
- `./command-palette-contract.ts`
- `./command-palette.ts`
- `./compliance-contracts.js`
- `./compliance/battery.ts`
- `./compliance/selfie.ts`
- `./confetti.ts`
- `./config-form-utils.ts`
- `./config-form.meta.ts`
- `./config-form.node.ts`
- `./config-form.search.ts`
- `./config-form.shared.ts`
- `./config-form.ts`
- `./config/control-ui-chunking.ts`
- `./connect-command.ts`
- `./connection-hints.ts`
- `./contract-pins.js`
- `./control-ui-i18n-verify.ts`
- `./control-ui-i18n.ts`
- `./control-ui-mock-background-tasks.ts`
- `./control-ui-mock-channels.ts`
- `./control-ui-mock-plugins.ts`
- `./control-ui-mock-skill-workshop.js`
- `./copy-bundled-plugin-metadata.mjs`
- `./copy-button.ts`
- `./crabbox-wrapper-providers.mjs`
- `./cron-status.ts`
- `./cron/cron-page.ts`
- `./data.ts`
- `./deadcode-knip-runner.mjs`
- `./debug/debug-page.ts`
- `./deepinfra/index.js`
- `./device-pair-setup.ts`
- `./dock-panel-layout.ts`
- `./docker-artifact-proof.js`
- `./docker-e2e-lane.fixture.ts`
- `./docker-e2e-scenarios.mjs`
- `./docker-openai-seed.ts`
- `./docs-sync-publish.mjs`
- `./e2e/lib/mcp-code-mode-probe-server.ts`
- `./e2e/lib/mcp-code-mode-validation.ts`
- `./e2e/lib/session-log-mentions.ts`
- `./elapsed-time.ts`
- `./ensure-extension-memory-build.mjs`
- `./env-limits.mjs`
- `./exact-release.js`
- `./exec-approval-card.ts`
- `./exec-approval.ts`
- `./external-link.ts`
- `./fal/index.js`
- `./file-preview-modal.ts`
- `./fixtures/common.mjs`
- `./fixtures/config.mjs`
- `./fixtures/plugins.mjs`
- `./fixtures/workspace.mjs`
- `./format.ts`
- `./gateway-e2e-harness.js`
- `./gateway-errors.ts`
- `./gateway-mcp-real-transports.js`
- `./gateway-methods.ts`
- `./github-link-hovercard.ts`
- `./google/index.js`
- `./grid.ts`
- `./guard-inventory-utils.mjs`
- `./health/health-contracts.ts`
- `./heartbeat-active-hours-runtime.js`
- `./helpers/captured-io.js`
- `./helpers/gateway-e2e-harness.js`
- `./helpers/media-generation/bundled-provider-builders.js`
- `./helpers/openclaw-test-instance.js`
- `./helpers/pattern-file.js`
- `./helpers/temp-dir.js`
- `./helpers/temp-repo.js`
- `./helpers/vitest-config-paths.js`
- `./hosted-media-provider-live.js`
- `./hover-marquee.ts`
- `./i18n/index.ts`
- `./icons-tools.ts`
- `./icons.ts`
- `./identity-avatar.ts`
- `./issue-78851-model-resolution-cli.js`
- `./json5-runtime.ts`
- `./knip.config.ts`
- `./labs-page.ts`
- `./labs-registry.ts`
- `./lib/actions-artifact-archive.mjs`
- `./lib/android-version.ts`
- `./lib/arg-utils.mjs`
- `./lib/bounded-response-text.mjs`
- `./lib/bounded-response.mjs`
- `./lib/bounded-response.ts`
- `./lib/budget-number-args.mjs`
- `./lib/bundled-extension-manifest.ts`
- `./lib/bundled-plugin-build-entries.mjs`
- `./lib/bundled-plugin-paths.mjs`
- `./lib/callsite-guard.mjs`
- `./lib/changed-path-facts.mjs`
- `./lib/check-timing-summary.mjs`
- `./lib/clawhub-bootstrap-artifact.mjs`
- `./lib/cli-startup-root-help-bundle.js`
- `./lib/codex-app-server-protocol-source.js`
- `./lib/config-boundary-guard.mjs`
- `./lib/control-ui-i18n-config.ts`
- `./lib/control-ui-i18n-raw-copy.ts`
- `./lib/control-ui-i18n-sync-plan.ts`
- `./lib/copy-assets.ts`
- `./lib/cross-os-release-checks/config.ts`
- `./lib/cross-os-release-checks/install.ts`
- `./lib/cross-os-release-checks/lanes.ts`
- `./lib/cross-os-release-checks/process.ts`
- `./lib/cross-os-release-checks/reporting.ts`
- `./lib/cross-os-release-checks/shared.ts`
- `./lib/deprecated-config-api-guard.mjs`
- `./lib/deprecated-plugin-sdk-usage.mjs`
- `./lib/dev-tooling-safety.ts`
- `./lib/direct-run.mjs`
- `./lib/docker-e2e-json-artifacts.mjs`
- `./lib/docker-e2e-plan.mjs`
- `./lib/docker-e2e-scenarios.mjs`
- `./lib/env-limits.mjs`
- `./lib/error-format.mjs`
- `./lib/extension-import-boundary-checker.mjs`
- `./lib/extension-source-classifier.mjs`
- `./lib/extension-test-plan.mjs`
- `./lib/extension-vitest-paths.mjs`
- `./lib/gateway-bench-child.ts`
- `./lib/gateway-bench-probes.ts`
- `./lib/gateway-startup-trace-ranking.js`
- `./lib/generated-text-asset.mjs`
- `./lib/ghsa-patch-subprocess.mjs`
- `./lib/github-repo.ts`
- `./lib/guard-inventory-utils.mjs`
- `./lib/import-cycle-graph.ts`
- `./lib/ios-version.ts`
- `./lib/legacy-store-path-domain.mjs`
- `./lib/local-build-metadata-paths.mjs`
- `./lib/local-build-metadata.mjs`
- `./lib/local-heavy-check-runtime.mjs`
- `./lib/managed-child-process.mjs`
- `./lib/mcp-code-mode-probe-server.ts`
- `./lib/mcp-code-mode-validation.ts`
- `./lib/merge-head-diff-base.mjs`
- `./lib/mintlify-accordion.mjs`
- `./lib/mock-openai-http.mjs`
- `./lib/npm-pack-budget.mjs`
- `./lib/npm-publish-plan.mjs`
- `./lib/npm-verify-exec.ts`
- `./lib/numeric-options.mjs`
- `./lib/official-external-channel-catalog.json`
- `./lib/openclaw-release-clawhub-plan.ts`
- `./lib/openclawdevelopmentplan01-section-13.3-plan-extract.mjs`
- `./lib/optional-bundled-clusters.mjs`
- `./lib/package-dist-imports.mjs`
- `./lib/package-dist-inventory.ts`
- `./lib/package-root-args.mjs`
- `./lib/pairing-guard-context.mjs`
- `./lib/plain-gh.mjs`
- `./lib/plugin-clawhub-release.ts`
- `./lib/plugin-gateway-gauntlet.mjs`
- `./lib/plugin-inventory-doc.mjs`
- `./lib/plugin-npm-package-manifest.mjs`
- `./lib/plugin-npm-release.ts`
- `./lib/plugin-npm-runtime-build.mjs`
- `./lib/plugin-package-dependencies.mjs`
- `./lib/plugin-sdk-declaration-budget.mjs`
- `./lib/plugin-sdk-entries.mjs`
- `./lib/pond-gateway-rpc.mjs`
- `./lib/record-shared.mjs`
- `./lib/regexp.mjs`
- `./lib/release-beta-verifier.ts`
- `./lib/report-cli-helpers.mjs`
- `./lib/session-log-mentions.ts`
- `./lib/sleep.mjs`
- `./lib/source-file-scan-cache.mjs`
- `./lib/sqlite-reliability-cli.js`
- `./lib/sqlite-session-schema-baseline.ts`
- `./lib/sqlite-state-benchmark-cli.js`
- `./lib/stable-release-closeout.mjs`
- `./lib/static-extension-assets.mjs`
- `./lib/string-coerce.ts`
- `./lib/temp-state-dir.ts`
- `./lib/test-group-report.mjs`
- `./lib/ts-guard-utils.mjs`
- `./lib/ts-topology/analyze.js`
- `./lib/ts-topology/reports.js`
- `./lib/ts-topology/scope.js`
- `./lib/tsdown-config-groups.mjs`
- `./lib/tsdown-output-roots.mjs`
- `./lib/tsgo-sparse-guard.mjs`
- `./lib/version-script-args.ts`
- `./lib/vitest-batch-runner.mjs`
- `./lib/vitest-local-scheduling.mjs`
- `./lib/vitest-report-cli-utils.mjs`
- `./lib/vitest-shard-timings.mjs`
- `./lib/windows-taskkill.mjs`
- `./lib/workspace-bootstrap-smoke.mjs`
- `./lisa-job-catalogue.ts`
- `./lisa-job-contracts.js`
- `./lisa-job-contracts.ts`
- `./lisa-job-desired-state.ts`
- `./lisa-live-digest-contract.mjs`
- `./lisa-live-job-ownership.mjs`
- `./lisa-live-message-contract.mjs`
- `./list-test-files.mjs`
- `./live-image-probe.js`
- `./load-channel-config-surface.ts`
- `./lobster-dex.ts`
- `./lobster-pet-audio.ts`
- `./lobster-pet-contract.ts`
- `./lobster-pet-look.ts`
- `./lobster-pet-standin.ts`
- `./lobster-pet.ts`
- `./local-build-metadata-paths.mjs`
- `./log-scanner.mjs`
- `./login-gate.ts`
- `./logs/logs-page.ts`
- `./maintenance/maintenance-contracts.ts`
- `./maintenance/maintenance.ts`
- `./managed-child-process.mjs`
- `./markdown-assistant-transcript.ts`
- `./markdown-render-options.ts`
- `./markdown.ts`
- `./mascot-animator.ts`
- `./mascot-canvas.ts`
- `./mascot-pose.ts`
- `./mcp-app-security.ts`
- `./mcp-app-unmount.ts`
- `./mcp-app-view-cache.ts`
- `./mcp-app-view.ts`
- `./mcp-channels.fixture.ts`
- `./mcp-client-temp-state.fixture.ts`
- `./mcp-server-form.ts`
- `./mcp-servers-card.ts`
- `./media-file-extension.ts`
- `./menu-shortcuts.ts`
- `./menu-surface.ts`
- `./minimax/index.js`
- `./mock-ops.ts`
- `./modal-dialog.ts`
- `./model-providers/route.ts`
- `./native-i18n-locales.ts`
- `./native-link-menu.ts`
- `./nodes/route.ts`
- `./non-isolated-runner.js`
- `./npm-publish-plan.mjs`
- `./npm-runner.mjs`
- `./numeric-options.mjs`
- `./onboarding-memory-import.ts`
- `./open-external-url.ts`
- `./openai/index.js`
- `./openclaw-npm-postpublish-verify.ts`
- `./openclaw-npm-release-check.ts`
- `./openclaw-test-instance.js`
- `./openrouter/index.js`
- `./option-card.ts`
- `./optional-bundled-clusters.mjs`
- `./package-changelog.mjs`
- `./pages/about/route.ts`
- `./pages/activity/route.ts`
- `./pages/agents/route.ts`
- `./pages/approvals/route.ts`
- `./pages/apps/route.ts`
- `./pages/channels/route.ts`
- `./pages/chat/route.ts`
- `./pages/config/route.ts`
- `./pages/connection/route.ts`
- `./pages/cron/route.ts`
- `./pages/custodian/route.ts`
- `./pages/debug/route.ts`
- `./pages/labs/route.ts`
- `./pages/logs/route.ts`
- `./pages/memory-import/route.ts`
- `./pages/model-providers/route.ts`
- `./pages/model-setup/route.ts`
- `./pages/new-session/route.ts`
- `./pages/nodes/route.ts`
- `./pages/plugin/route.ts`
- `./pages/plugins/route.ts`
- `./pages/profile/route.ts`
- `./pages/sessions/route.ts`
- `./pages/skill-workshop/route.ts`
- `./pages/skills/route.ts`
- `./pages/tasks/route.ts`
- `./pages/usage/route.ts`
- `./pages/workboard/route.ts`
- `./pages/worktrees/route.ts`
- `./panel-refresh-status.ts`
- `./panel-tab-strip.ts`
- `./pixverse/index.js`
- `./plugin-activation.ts`
- `./plugin-clawhub-release.ts`
- `./plugin-index-sqlite.mjs`
- `./plugin-lifecycle-probe-runtime.js`
- `./plugin-npm-release.ts`
- `./plugin-npm-runtime-assets.mjs`
- `./plugin-npm-runtime-build.mjs`
- `./plugin-publication-artifact.mjs`
- `./plugin-sdk-deprecated-barrel-subpaths.json`
- `./plugin-sdk-deprecated-public-subpaths.json`
- `./plugin-sdk-entries.mjs`
- `./plugin-sdk-entrypoints.json`
- `./plugin-sdk-private-local-only-subpaths.json`
- `./plugins-hub-tabs.ts`
- `./plugins/route.ts`
- `./pnpm-runner.mjs`
- `./postinstall-bundled-plugins.mjs`
- `./pre-commit/pnpm-audit-prod.mjs`
- `./prepare-openclaw-npm-shrinkwrap.ts`
- `./presenter.ts`
- `./process-warning-filter.mjs`
- `./prompt-snapshot-files.js`
- `./provider-quota-summary.ts`
- `./provider-runtime-shared.js`
- `./provider.ts`
- `./qa-otel-smoke-runtime.js`
- `./qualification-receipt.mjs`
- `./qwen/index.js`
- `./receipt-validator.js`
- `./regexp.mjs`
- `./render-github-release-notes.mjs`
- `./render-lisa-job-template.ts`
- `./reporting-contracts.js`
- `./reporting.js`
- `./reporting/reporting.ts`
- `./resizable-divider.ts`
- `./revision2-pins.js`
- `./revision2.js`
- `./root-dependency-ownership-audit.mjs`
- `./run-node-watch-paths.mjs`
- `./run-node.mjs`
- `./run-vitest.mjs`
- `./runtime-postbuild-shared.mjs`
- `./runtime-postbuild.mjs`
- `./runtime.js`
- `./runway/index.js`
- `./script-evidence.js`
- `./script-evidence.ts`
- `./scripts/e2e/parallels/package-artifact.ts`
- `./scripts/lib/bundled-plugin-build-entries.mjs`
- `./scripts/lib/plugin-sdk-entries.mjs`
- `./scripts/lib/tsdown-config-groups.mjs`
- `./scripts/lib/tsdown-output-roots.mjs`
- `./selfie.js`
- `./session-attention-presentation.ts`
- `./session-display.ts`
- `./session-goal.ts`
- `./session-icon-registry.ts`
- `./session-menu-work.ts`
- `./session-menu.ts`
- `./session-row-badges.ts`
- `./session-row-subtitle.ts`
- `./session-run-state.ts`
- `./sessions/route.ts`
- `./sessions/sessions-page.ts`
- `./settings-sidebar.ts`
- `./settings-ui.ts`
- `./setup.shared.js`
- `./side-effect`
- `./sidebar-agent-card.ts`
- `./sidebar-attention-dismissals.ts`
- `./sidebar-attention-items.ts`
- `./sidebar-attention.ts`
- `./sidebar-build-chip-format.ts`
- `./sidebar-build-chip.ts`
- `./sidebar-narration-line.ts`
- `./sidebar-update-card.ts`
- `./sidebar-zone.ts`
- `./skills/route.ts`
- `./skills/skills-page.ts`
- `./sleep.mjs`
- `./sparkle-build.ts`
- `./sqlite-reliability-contract.js`
- `./sqlite-reliability-wal-monitor.js`
- `./sqlite-reliability-writer.js`
- `./src/build-info-normalizers.ts`
- `./src/claims.js`
- `./src/contract.js`
- `./src/integration-status.js`
- `./stage-bundled-plugin-runtime.mjs`
- `./static-extension-assets.mjs`
- `./string-coerce.ts`
- `./strip-thinking-tags.ts`
- `./styles.css`
- `./tasks/tasks-page.ts`
- `./telegram-bot-api.ts`
- `./telegram-bot-token-runtime.js`
- `./telegram-user-credential-io.ts`
- `./telegram-user-credential-paths.ts`
- `./temp-dir.js`
- `./test-env.js`
- `./test-projects.test-support.mjs`
- `./test-report-utils.mjs`
- `./test-support/generation-live-test-helpers.js`
- `./testbox-lease-freshness.mjs`
- `./text-direction.ts`
- `./text-file-utils.mjs`
- `./theme-mode-toggle.ts`
- `./time-management/planner.ts`
- `./timestamps.js`
- `./toast.ts`
- `./together/index.js`
- `./tooltip.ts`
- `./ts-guard-utils.mjs`
- `./ts-topology.ts`
- `./update-run-package-self-upgrade.js`
- `./usage/refresh-policy.ts`
- `./usage/route.ts`
- `./usage/usage-page.ts`
- `./uuid.ts`
- `./validate-full-release-validation-evidence.mjs`
- `./view.ts`
- `./viewer-facepile.ts`
- `./vitest-process-group.mjs`
- `./vitest-report-cli-utils.mjs`
- `./vitest/vitest.acp.config.ts`
- `./vitest/vitest.agents-core-isolated.config.ts`
- `./vitest/vitest.agents-core.config.ts`
- `./vitest/vitest.agents-embedded-agent.config.ts`
- `./vitest/vitest.agents-paths.mjs`
- `./vitest/vitest.agents-support.config.ts`
- `./vitest/vitest.agents-tools.config.ts`
- `./vitest/vitest.agents.config.ts`
- `./vitest/vitest.auto-reply-core.config.ts`
- `./vitest/vitest.auto-reply-reply.config.ts`
- `./vitest/vitest.auto-reply-top-level.config.ts`
- `./vitest/vitest.auto-reply.config.ts`
- `./vitest/vitest.boundary.config.ts`
- `./vitest/vitest.bundled.config.ts`
- `./vitest/vitest.channels.config.ts`
- `./vitest/vitest.cli.config.ts`
- `./vitest/vitest.commands-light-paths.mjs`
- `./vitest/vitest.commands-light.config.ts`
- `./vitest/vitest.commands.config.ts`
- `./vitest/vitest.contracts-channel-config.config.ts`
- `./vitest/vitest.contracts-channel-registry.config.ts`
- `./vitest/vitest.contracts-channel-session.config.ts`
- `./vitest/vitest.contracts-channel-surface.config.ts`
- `./vitest/vitest.contracts-plugin.config.ts`
- `./vitest/vitest.contracts-shared.ts`
- `./vitest/vitest.cron.config.ts`
- `./vitest/vitest.daemon.config.ts`
- `./vitest/vitest.extension-acpx.config.ts`
- `./vitest/vitest.extension-browser.config.ts`
- `./vitest/vitest.extension-channels.config.ts`
- `./vitest/vitest.extension-diffs.config.ts`
- `./vitest/vitest.extension-discord.config.ts`
- `./vitest/vitest.extension-feishu.config.ts`
- `./vitest/vitest.extension-imessage.config.ts`
- `./vitest/vitest.extension-irc.config.ts`
- `./vitest/vitest.extension-line.config.ts`
- `./vitest/vitest.extension-matrix.config.ts`
- `./vitest/vitest.extension-mattermost.config.ts`
- `./vitest/vitest.extension-media.config.ts`
- `./vitest/vitest.extension-memory.config.ts`
- `./vitest/vitest.extension-messaging.config.ts`
- `./vitest/vitest.extension-misc.config.ts`
- `./vitest/vitest.extension-msteams.config.ts`
- `./vitest/vitest.extension-provider-openai.config.ts`
- `./vitest/vitest.extension-providers.config.ts`
- `./vitest/vitest.extension-qa.config.ts`
- `./vitest/vitest.extension-signal.config.ts`
- `./vitest/vitest.extension-slack.config.ts`
- `./vitest/vitest.extension-telegram.config.ts`
- `./vitest/vitest.extension-voice-call.config.ts`
- `./vitest/vitest.extension-whatsapp.config.ts`
- `./vitest/vitest.extension-zalo.config.ts`
- `./vitest/vitest.extensions.config.ts`
- `./vitest/vitest.gateway-client.config.ts`
- `./vitest/vitest.gateway-core.config.ts`
- `./vitest/vitest.gateway-methods.config.ts`
- `./vitest/vitest.gateway-server.config.ts`
- `./vitest/vitest.gateway.config.ts`
- `./vitest/vitest.hooks.config.ts`
- `./vitest/vitest.infra.config.ts`
- `./vitest/vitest.logging.config.ts`
- `./vitest/vitest.media-understanding.config.ts`
- `./vitest/vitest.media.config.ts`
- `./vitest/vitest.performance-config.ts`
- `./vitest/vitest.plugin-sdk-light.config.ts`
- `./vitest/vitest.plugin-sdk-paths.mjs`
- `./vitest/vitest.plugin-sdk.config.ts`
- `./vitest/vitest.plugins.config.ts`
- `./vitest/vitest.process.config.ts`
- `./vitest/vitest.runtime-config.config.ts`
- `./vitest/vitest.scoped-config.ts`
- `./vitest/vitest.secrets.config.ts`
- `./vitest/vitest.shared-core.config.ts`
- `./vitest/vitest.shared.config.ts`
- `./vitest/vitest.tasks.config.ts`
- `./vitest/vitest.test-shards.mjs`
- `./vitest/vitest.tooling-docker.config.ts`
- `./vitest/vitest.tooling-isolated-paths.mjs`
- `./vitest/vitest.tooling-isolated.config.ts`
- `./vitest/vitest.tooling.config.ts`
- `./vitest/vitest.tui.config.ts`
- `./vitest/vitest.ui.config.ts`
- `./vitest/vitest.unit-fast-fake-timers.config.ts`
- `./vitest/vitest.unit-fast-isolated.config.ts`
- `./vitest/vitest.unit-fast-paths.mjs`
- `./vitest/vitest.unit-fast.config.ts`
- `./vitest/vitest.unit-paths.mjs`
- `./vitest/vitest.unit.config.ts`
- `./vitest/vitest.utils.config.ts`
- `./vitest/vitest.wizard.config.ts`
- `./vydra/index.js`
- `./web-awesome-tabs.ts`
- `./web-awesome.ts`
- `./websocket-open.mjs`
- `./windows-cmd-helpers.mjs`
- `./windows-taskkill.mjs`
- `./wizard-prompter.js`
- `./worktrees-page.ts`
- `./write-official-channel-catalog.mjs`
- `./xai/index.js`
- `@awesome.me/webawesome/dist/components/dialog/dialog.js`
- `@awesome.me/webawesome/dist/components/dropdown-item/dropdown-item.js`
- `@awesome.me/webawesome/dist/components/dropdown/dropdown.js`
- `@awesome.me/webawesome/dist/components/option/option.js`
- `@awesome.me/webawesome/dist/components/popover/popover.js`
- `@awesome.me/webawesome/dist/components/radio-group/radio-group.js`
- `@awesome.me/webawesome/dist/components/radio/radio.js`
- `@awesome.me/webawesome/dist/components/select/select.js`
- `@awesome.me/webawesome/dist/components/switch/switch.js`
- `@awesome.me/webawesome/dist/components/tab-group/tab-group.js`
- `@awesome.me/webawesome/dist/components/tab-panel/tab-panel.js`
- `@awesome.me/webawesome/dist/components/tab/tab.js`
- `@awesome.me/webawesome/dist/components/tooltip/tooltip.js`
- `@clack/prompts`
- `@lit/context`
- `@lydell/node-pty`
- `@mdx-js/mdx`
- `@modelcontextprotocol/ext-apps/app-bridge`
- `@modelcontextprotocol/sdk/client/index.js`
- `@modelcontextprotocol/sdk/client/stdio.js`
- `@modelcontextprotocol/sdk/server/mcp.js`
- `@modelcontextprotocol/sdk/server/stdio.js`
- `@modelcontextprotocol/sdk/types.js`
- `@openclaw/fs-safe/secret`
- `@openclaw/gateway-client/browser`
- `@openclaw/gateway-protocol`
- `@openclaw/model-catalog-core/model-catalog-refs`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `@openclaw/uirouter`
- `@shikijs/core`
- `@shikijs/engine-javascript`
- `@shikijs/engine-oniguruma`
- `@vitest/browser-playwright`
- `__future__`
- `acorn`
- `argparse`
- `atexit`
- `base64`
- `cjs-only`
- `collections`
- `contextlib`
- `ctypes`
- `dataclasses`
- `datetime`
- `dompurify`
- `esbuild`
- `execution`
- `fake-package-two`
- `fcntl`
- `fixture-sdk`
- `fnmatch`
- `getpass`
- `hashlib`
- `highlight.js/lib/core`
- `highlight.js/lib/languages/bash`
- `highlight.js/lib/languages/cpp`
- `highlight.js/lib/languages/css`
- `highlight.js/lib/languages/diff`
- `highlight.js/lib/languages/go`
- `highlight.js/lib/languages/java`
- `highlight.js/lib/languages/javascript`
- `highlight.js/lib/languages/json`
- `highlight.js/lib/languages/markdown`
- `highlight.js/lib/languages/python`
- `highlight.js/lib/languages/rust`
- `highlight.js/lib/languages/typescript`
- `highlight.js/lib/languages/xml`
- `highlight.js/lib/languages/yaml`
- `hosted-git-info`
- `ide_development`
- `importlib`
- `jiti`
- `lit/decorators.js`
- `lit/directives/if-defined.js`
- `lit/directives/keyed.js`
- `lit/directives/ref.js`
- `lit/directives/repeat.js`
- `lit/directives/unsafe-html.js`
- `lit/static-html.js`
- `math`
- `msvcrt`
- `node:assert/strict`
- `node:buffer`
- `node:child_process`
- `node:crypto`
- `node:dns`
- `node:dns/promises`
- `node:events`
- `node:fs`
- `node:fs/promises`
- `node:http`
- `node:https`
- `node:module`
- `node:net`
- `node:os`
- `node:path`
- `node:perf_hooks`
- `node:process`
- `node:readline`
- `node:sqlite`
- `node:stream/promises`
- `node:string_decoder`
- `node:test`
- `node:timers`
- `node:timers/promises`
- `node:url`
- `node:util`
- `node:vm`
- `node:worker_threads`
- `node:zlib`
- `openclaw/plugin-sdk/agent-runtime`
- `openclaw/plugin-sdk/agent-sessions`
- `openclaw/plugin-sdk/diagnostic-runtime`
- `openclaw/plugin-sdk/error-runtime`
- `openclaw/plugin-sdk/image-generation-runtime`
- `openclaw/plugin-sdk/llm`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-test-contracts`
- `openclaw/plugin-sdk/runtime-config-snapshot`
- `openclaw/plugin-sdk/session-transcript-runtime`
- `openclaw/plugin-sdk/test-env`
- `openclaw/plugin-sdk/test-fixtures`
- `openclaw/plugin-sdk/test-live`
- `openclaw/plugin-sdk/test-live-auth`
- `openclaw/plugin-sdk/test-media-generation`
- `p-limit`
- `p-map`
- `pathlib`
- `pretty-ms`
- `qrcode`
- `semver`
- `shiki/themes`
- `shutil`
- `sigstore`
- `slugify`
- `tarfile`
- `tempfile`
- `typescript`
- `typing`
- `undici`
- `unittest`
- `urllib`
- `vitest/config`
- `yaml`
- `zipfile`
- `zod`
- `zoneinfo`
