# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> agents[agents]
    test_scripts[test-scripts] --> agents[agents]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> config[config]
    test_scripts[test-scripts] --> config[config]
    test_scripts[test-scripts] --> config[config]
    test_scripts[test-scripts] --> infra[infra]
    test_scripts[test-scripts] --> outbound[outbound]
    test_scripts[test-scripts] --> outbound[outbound]
    test_scripts[test-scripts] --> src[src]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> dev[dev]
    test_scripts[test-scripts] --> dev[dev]
    test_scripts[test-scripts] --> dev[dev]
    test_scripts[test-scripts] --> dev[dev]
    test_scripts[test-scripts] --> dev[dev]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> e2e[e2e]
    test_scripts[test-scripts] --> e2e[e2e]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> codex_media_path[codex-media-path]
    test_scripts[test-scripts] --> codex_media_path[codex-media-path]
    test_scripts[test-scripts] --> config_reload[config-reload]
    test_scripts[test-scripts] --> fixtures[fixtures]
    test_scripts[test-scripts] --> fixtures[fixtures]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> gateway_network[gateway-network]
    test_scripts[test-scripts] --> gateway_network[gateway-network]
    test_scripts[test-scripts] --> gateway_network[gateway-network]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> onboard[onboard]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> release_user_journey[release-user-journey]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> upgrade_survivor[upgrade-survivor]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> e2e[e2e]
    test_scripts[test-scripts] --> e2e[e2e]
    test_scripts[test-scripts] --> e2e[e2e]
    test_scripts[test-scripts] --> parallels[parallels]
    test_scripts[test-scripts] --> parallels[parallels]
    test_scripts[test-scripts] --> parallels[parallels]
    test_scripts[test-scripts] --> parallels[parallels]
    test_scripts[test-scripts] --> parallels[parallels]
    test_scripts[test-scripts] --> parallels[parallels]
    test_scripts[test-scripts] --> parallels[parallels]
    test_scripts[test-scripts] --> parallels[parallels]
    test_scripts[test-scripts] --> parallels[parallels]
    test_scripts[test-scripts] --> parallels[parallels]
    test_scripts[test-scripts] --> parallels[parallels]
    test_scripts[test-scripts] --> parallels[parallels]
    test_scripts[test-scripts] --> parallels[parallels]
    test_scripts[test-scripts] --> parallels[parallels]
    test_scripts[test-scripts] --> parallels[parallels]
    test_scripts[test-scripts] --> parallels[parallels]
    test_scripts[test-scripts] --> e2e[e2e]
    test_scripts[test-scripts] --> e2e[e2e]
    test_scripts[test-scripts] --> e2e[e2e]
    test_scripts[test-scripts] --> e2e[e2e]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> github[github]
    test_scripts[test-scripts] --> github[github]
    test_scripts[test-scripts] --> github[github]
    test_scripts[test-scripts] --> github[github]
    test_scripts[test-scripts] --> github[github]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> cross_os_release_checks[cross-os-release-checks]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> ts_topology[ts-topology]
    test_scripts[test-scripts] --> ts_topology[ts-topology]
    test_scripts[test-scripts] --> ts_topology[ts-topology]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> mantis[mantis]
    test_scripts[test-scripts] --> mantis[mantis]
    test_scripts[test-scripts] --> mantis[mantis]
    test_scripts[test-scripts] --> mantis[mantis]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> perf[perf]
    test_scripts[test-scripts] --> perf[perf]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> pre_commit[pre-commit]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> qa[qa]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> repro[repro]
    test_scripts[test-scripts] --> repro[repro]
    test_scripts[test-scripts] --> repro[repro]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> scripts[scripts]
    test_scripts[test-scripts] --> opengrep[opengrep]
    test_scripts[test-scripts] --> gateway[gateway]
    test_scripts[test-scripts] --> infra[infra]
    test_scripts[test-scripts] --> infra[infra]
    test_scripts[test-scripts] --> plugins[plugins]
    test_scripts[test-scripts] --> state[state]
    test_scripts[test-scripts] --> test_utils[test-utils]
    test_scripts[test-scripts] --> test_utils[test-utils]
    test_scripts[test-scripts] --> test_utils[test-utils]
    test_scripts[test-scripts] --> test_utils[test-utils]
    test_scripts[test-scripts] --> test_utils[test-utils]
    test_scripts[test-scripts] --> __[..]
    test_scripts[test-scripts] --> lib[lib]
    test_scripts[test-scripts] --> config[config]
    test_scripts[test-scripts] --> sessions[sessions]
    test_scripts[test-scripts] --> sessions[sessions]
    test_scripts[test-scripts] --> sessions[sessions]
    test_scripts[test-scripts] --> sessions[sessions]
    test_scripts[test-scripts] --> context_engine[context-engine]
    test_scripts[test-scripts] --> monitor[monitor]
    test_scripts[test-scripts] --> runtime[runtime]
    test_scripts[test-scripts] --> gateway[gateway]
    test_scripts[test-scripts] --> gateway[gateway]
    test_scripts[test-scripts] --> agents[agents]
    test_scripts[test-scripts] --> agents[agents]
    test_scripts[test-scripts] --> helpers[helpers]
    test_scripts[test-scripts] --> helpers[helpers]
    test_scripts[test-scripts] --> helpers[helpers]
    test_scripts[test-scripts] --> helpers[helpers]
    test_scripts[test-scripts] --> helpers[helpers]
    test_scripts[test-scripts] --> helpers[helpers]
    test_scripts[test-scripts] --> infra[infra]
    test_scripts[test-scripts] --> infra[infra]
    test_scripts[test-scripts] --> infra[infra]
    test_scripts[test-scripts] --> infra[infra]
    test_scripts[test-scripts] --> infra[infra]
    test_scripts[test-scripts] --> infra[infra]
    test_scripts[test-scripts] --> infra[infra]
    test_scripts[test-scripts] --> infra[infra]
    test_scripts[test-scripts] --> runtime[runtime]
    test_scripts[test-scripts] --> __[..]
    test_scripts[test-scripts] --> __[..]
    test_scripts[test-scripts] --> sessions[sessions]
    test_scripts[test-scripts] --> sessions[sessions]
    test_scripts[test-scripts] --> vitest[vitest]
    test_scripts[test-scripts] --> vitest[vitest]
    test_scripts[test-scripts] --> vitest[vitest]
    test_scripts[test-scripts] --> vitest[vitest]
    test_scripts[test-scripts] --> vitest[vitest]
    test_scripts[test-scripts] --> vitest[vitest]
    test_scripts[test-scripts] --> vitest[vitest]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> _[.]
    test_scripts[test-scripts] --> client[client]
    test_scripts[test-scripts] --> client[client]
    test_scripts[test-scripts] --> _openclaw[@openclaw]
    test_scripts[test-scripts] --> fs_safe[fs-safe]
    test_scripts[test-scripts] --> _openclaw[@openclaw]
    test_scripts[test-scripts] --> normalization_core[normalization-core]
    test_scripts[test-scripts] --> fast_glob[fast-glob]
    test_scripts[test-scripts] --> json5[json5]
    test_scripts[test-scripts] --> jszip[jszip]
    test_scripts[test-scripts] --> node_buffer[node:buffer]
    test_scripts[test-scripts] --> node_child_process[node:child_process]
    test_scripts[test-scripts] --> node_crypto[node:crypto]
    test_scripts[test-scripts] --> node_events[node:events]
    test_scripts[test-scripts] --> node_fs[node:fs]
    test_scripts[test-scripts] --> node_fs[node:fs]
    test_scripts[test-scripts] --> node_http[node:http]
    test_scripts[test-scripts] --> node_module[node:module]
    test_scripts[test-scripts] --> node_net[node:net]
    test_scripts[test-scripts] --> node_os[node:os]
    test_scripts[test-scripts] --> node_path[node:path]
    test_scripts[test-scripts] --> node_perf_hooks[node:perf_hooks]
    test_scripts[test-scripts] --> node_process[node:process]
    test_scripts[test-scripts] --> node_readline[node:readline]
    test_scripts[test-scripts] --> node_sqlite[node:sqlite]
    test_scripts[test-scripts] --> node_stream[node:stream]
    test_scripts[test-scripts] --> node_timers[node:timers]
    test_scripts[test-scripts] --> node_url[node:url]
    test_scripts[test-scripts] --> node_util[node:util]
    test_scripts[test-scripts] --> node_vm[node:vm]
    test_scripts[test-scripts] --> node_worker_threads[node:worker_threads]
    test_scripts[test-scripts] --> node_zlib[node:zlib]
    test_scripts[test-scripts] --> plugin_sdk[plugin-sdk]
    test_scripts[test-scripts] --> plugin_sdk[plugin-sdk]
    test_scripts[test-scripts] --> plugin_sdk[plugin-sdk]
    test_scripts[test-scripts] --> plugin_sdk[plugin-sdk]
    test_scripts[test-scripts] --> plugin_sdk[plugin-sdk]
    test_scripts[test-scripts] --> playwright_core[playwright-core]
    test_scripts[test-scripts] --> yaml[yaml]
```

## Internal Dependencies

Dependencies within this module:

- `os`
- `vitest`
- `ws`

## External Dependencies

Dependencies from other modules:

- `../../.agents/skills/openclaw-changelog-update/scripts/verify-release-notes.mjs`
- `../../.agents/skills/openclaw-live-updater/scripts/update-main.mjs`
- `../../agents/cli-runner.js`
- `../../agents/model-fallback.js`
- `../../apps/android/scripts/build-release-artifacts.ts`
- `../../config/knip.all-exports.config.ts`
- `../../config/knip.config.ts`
- `../../config/knip.scripts-exports.config.ts`
- `../../infra/agent-events.js`
- `../../infra/outbound/deliver.js`
- `../../infra/outbound/session-context.js`
- `../../packages/markdown-core/src/ir.js`
- `../../scripts/android-app-i18n.ts`
- `../../scripts/android-pin-version.ts`
- `../../scripts/anthropic-prompt-probe.ts`
- `../../scripts/apple-app-i18n.ts`
- `../../scripts/audit-seams.mjs`
- `../../scripts/bench-cli-startup.ts`
- `../../scripts/bench-gateway-restart.ts`
- `../../scripts/bench-gateway-startup.ts`
- `../../scripts/bench-model.ts`
- `../../scripts/bench-test-changed.mjs`
- `../../scripts/build-all.mjs`
- `../../scripts/build-diffs-viewer-runtime.mjs`
- `../../scripts/build-discord-activity-sdk.mjs`
- `../../scripts/bundled-plugin-assets.mjs`
- `../../scripts/changed-lanes.mjs`
- `../../scripts/check-changed.mjs`
- `../../scripts/check-changelog-attributions.mjs`
- `../../scripts/check-channel-agnostic-boundaries.mjs`
- `../../scripts/check-cli-bootstrap-imports.mjs`
- `../../scripts/check-cli-startup-memory.mjs`
- `../../scripts/check-control-ui-performance.mjs`
- `../../scripts/check-database-first-legacy-stores.mjs`
- `../../scripts/check-deadcode-exports.mjs`
- `../../scripts/check-deadcode-unused-files.mjs`
- `../../scripts/check-dependency-pins.mjs`
- `../../scripts/check-docs-i18n-glossary.mjs`
- `../../scripts/check-docs-mdx.mjs`
- `../../scripts/check-dynamic-import-warts.mjs`
- `../../scripts/check-extension-package-tsc-boundary.mjs`
- `../../scripts/check-extension-wildcard-reexports.mjs`
- `../../scripts/check-file-utils.js`
- `../../scripts/check-gateway-cpu-scenarios.mjs`
- `../../scripts/check-gateway-watch-regression.mjs`
- `../../scripts/check-max-lines-ratchet.mjs`
- `../../scripts/check-memory-fd-repro.mjs`
- `../../scripts/check-native-state-schema-version.mjs`
- `../../scripts/check-no-conflict-markers.mjs`
- `../../scripts/check-no-random-messaging-tmp.mjs`
- `../../scripts/check-openclawdevelopmentplan01-authclaims-provenance.mjs`
- `../../scripts/check-openclawdevelopmentplan01-section-13.3-ledger.mjs`
- `../../scripts/check-package-patches.mjs`
- `../../scripts/check-plugin-gateway-gauntlet.mjs`
- `../../scripts/check-plugin-npm-runtime-builds.mjs`
- `../../scripts/check-plugin-sdk-wildcard-reexports.mjs`
- `../../scripts/check-protocol-event-coverage.mjs`
- `../../scripts/check-release-metadata-only.mjs`
- `../../scripts/check-runtime-sidecar-loaders.mjs`
- `../../scripts/check-script-declarations.mjs`
- `../../scripts/check-session-accessor-boundary.mjs`
- `../../scripts/check-session-transcript-reader-boundary.mjs`
- `../../scripts/check-sqlite-transaction-boundary.mjs`
- `../../scripts/check.mjs`
- `../../scripts/ci-changed-scope.mjs`
- `../../scripts/ci-run-node-test-shard.mjs`
- `../../scripts/ci-run-timings.mjs`
- `../../scripts/close-duplicate-prs-after-merge.mjs`
- `../../scripts/control-ui-i18n-verify.ts`
- `../../scripts/control-ui-i18n.ts`
- `../../scripts/crabbox-wrapper-providers.mjs`
- `../../scripts/debug-claude-usage.ts`
- `../../scripts/dependency-changes-report.mjs`
- `../../scripts/dependency-ownership-surface-report.mjs`
- `../../scripts/dependency-vulnerability-gate.mjs`
- `../../scripts/dev/discord-acp-plain-language-smoke.ts`
- `../../scripts/dev/gateway-ws-client.js`
- `../../scripts/dev/realtime-talk-live-smoke.ts`
- `../../scripts/dev/test-device-pair-telegram.ts`
- `../../scripts/dev/tui-pty-test-watch.ts`
- `../../scripts/docs-sync-publish.mjs`
- `../../scripts/e2e/cron-mcp-cleanup-docker-client.ts`
- `../../scripts/e2e/kitchen-sink-rpc-walk.mjs`
- `../../scripts/e2e/lib/agent-turn-output.mjs`
- `../../scripts/e2e/lib/bounded-response-text.mjs`
- `../../scripts/e2e/lib/codex-install-utils.mjs`
- `../../scripts/e2e/lib/codex-media-path/jsonl-request-tail.mjs`
- `../../scripts/e2e/lib/codex-media-path/limits.mjs`
- `../../scripts/e2e/lib/config-reload/log-scanner.mjs`
- `../../scripts/e2e/lib/fixtures/common.mjs`
- `../../scripts/e2e/lib/fixtures/mock-openai-config.mjs`
- `../../scripts/e2e/lib/gateway-frame-payload.mjs`
- `../../scripts/e2e/lib/gateway-network/client.mjs`
- `../../scripts/e2e/lib/gateway-network/limits.mjs`
- `../../scripts/e2e/lib/gateway-network/ws-frames.mjs`
- `../../scripts/e2e/lib/incremental-line-reader.mjs`
- `../../scripts/e2e/lib/mcp-code-mode-validation.ts`
- `../../scripts/e2e/lib/mock-openai-http.mjs`
- `../../scripts/e2e/lib/onboard/log-contains.mjs`
- `../../scripts/e2e/lib/plugin-index-sqlite.mjs`
- `../../scripts/e2e/lib/pond-gateway-rpc.mjs`
- `../../scripts/e2e/lib/release-user-journey/assertions.mjs`
- `../../scripts/e2e/lib/session-log-mentions.ts`
- `../../scripts/e2e/lib/temp-state-dir.ts`
- `../../scripts/e2e/lib/text-file-utils.mjs`
- `../../scripts/e2e/lib/upgrade-survivor/config-recipe.mjs`
- `../../scripts/e2e/lib/websocket-open.mjs`
- `../../scripts/e2e/mcp-channel-limits.ts`
- `../../scripts/e2e/mcp-code-mode-gateway-client.ts`
- `../../scripts/e2e/npm-telegram-live-runner.ts`
- `../../scripts/e2e/parallels/agent-workspace.ts`
- `../../scripts/e2e/parallels/common.ts`
- `../../scripts/e2e/parallels/guest-transports.ts`
- `../../scripts/e2e/parallels/host-command.ts`
- `../../scripts/e2e/parallels/host-server.ts`
- `../../scripts/e2e/parallels/linux-smoke.ts`
- `../../scripts/e2e/parallels/macos-discord.ts`
- `../../scripts/e2e/parallels/macos-smoke.ts`
- `../../scripts/e2e/parallels/npm-update-scripts.ts`
- `../../scripts/e2e/parallels/npm-update-smoke.ts`
- `../../scripts/e2e/parallels/package-artifact.ts`
- `../../scripts/e2e/parallels/phase-runner.ts`
- `../../scripts/e2e/parallels/plugin-isolation.ts`
- `../../scripts/e2e/parallels/update-job-timeout.ts`
- `../../scripts/e2e/parallels/windows-git.ts`
- `../../scripts/e2e/parallels/windows-smoke.ts`
- `../../scripts/e2e/telegram-bot-api.ts`
- `../../scripts/e2e/telegram-user-crabbox-proof.ts`
- `../../scripts/e2e/telegram-user-credential-io.ts`
- `../../scripts/e2e/telegram-user-credential-paths.ts`
- `../../scripts/ensure-cli-startup-build.mjs`
- `../../scripts/ensure-extension-memory-build.mjs`
- `../../scripts/ensure-playwright-chromium.mjs`
- `../../scripts/firecrawl-compare.ts`
- `../../scripts/format-docs.mjs`
- `../../scripts/full-release-validation-at-sha.mjs`
- `../../scripts/generate-dependency-release-evidence.mjs`
- `../../scripts/generate-docs-map.mjs`
- `../../scripts/generate-npm-shrinkwrap.mjs`
- `../../scripts/generate-prompt-snapshots.js`
- `../../scripts/gh-read.js`
- `../../scripts/github/barnacle-auto-response.mjs`
- `../../scripts/github/dependency-guard.mjs`
- `../../scripts/github/pr-ci-sweeper.mjs`
- `../../scripts/github/real-behavior-proof-policy.mjs`
- `../../scripts/github/security-sensitive-guard.mjs`
- `../../scripts/label-open-issues.ts`
- `../../scripts/lib/android-version.ts`
- `../../scripts/lib/arg-utils.mjs`
- `../../scripts/lib/bounded-response.mjs`
- `../../scripts/lib/bounded-response.ts`
- `../../scripts/lib/bundled-plugin-build-entries.mjs`
- `../../scripts/lib/bundled-plugin-source-utils.mjs`
- `../../scripts/lib/changed-extensions.mjs`
- `../../scripts/lib/changed-path-facts.mjs`
- `../../scripts/lib/channel-contract-test-plan.mjs`
- `../../scripts/lib/ci-changed-node-test-plan.mjs`
- `../../scripts/lib/ci-node-test-plan.mjs`
- `../../scripts/lib/clawhub-bootstrap-artifact.mjs`
- `../../scripts/lib/codex-app-server-protocol-artifacts.js`
- `../../scripts/lib/codex-app-server-protocol-source.js`
- `../../scripts/lib/control-ui-i18n-raw-copy.ts`
- `../../scripts/lib/control-ui-i18n-sync-plan.ts`
- `../../scripts/lib/cross-os-release-checks/index.ts`
- `../../scripts/lib/deprecated-plugin-sdk-usage.mjs`
- `../../scripts/lib/dev-tooling-safety.ts`
- `../../scripts/lib/direct-run.mjs`
- `../../scripts/lib/docker-e2e-plan.mjs`
- `../../scripts/lib/docker-e2e-scenarios.mjs`
- `../../scripts/lib/extension-import-boundary-checker.mjs`
- `../../scripts/lib/extension-source-classifier.mjs`
- `../../scripts/lib/extension-test-plan.mjs`
- `../../scripts/lib/extension-vitest-paths.mjs`
- `../../scripts/lib/format-generated-module.mjs`
- `../../scripts/lib/gateway-startup-trace-ranking.js`
- `../../scripts/lib/ghsa-patch-subprocess.mjs`
- `../../scripts/lib/ios-version.ts`
- `../../scripts/lib/kova-report-gate.mjs`
- `../../scripts/lib/kova-report-publish-files.mjs`
- `../../scripts/lib/kova-report-selector.mjs`
- `../../scripts/lib/kova-workflow-evidence.mjs`
- `../../scripts/lib/local-build-metadata-paths.mjs`
- `../../scripts/lib/local-build-metadata.mjs`
- `../../scripts/lib/local-heavy-check-runtime.mjs`
- `../../scripts/lib/managed-child-process.mjs`
- `../../scripts/lib/merge-head-diff-base.mjs`
- `../../scripts/lib/npm-verify-exec.ts`
- `../../scripts/lib/openclawdevelopmentplan01-section-13.3-plan-extract.mjs`
- `../../scripts/lib/package-dist-inventory.ts`
- `../../scripts/lib/package-root-args.mjs`
- `../../scripts/lib/plain-gh.mjs`
- `../../scripts/lib/plugin-contract-test-plan.mjs`
- `../../scripts/lib/plugin-gateway-gauntlet.mjs`
- `../../scripts/lib/plugin-inventory-doc.mjs`
- `../../scripts/lib/plugin-npm-package-manifest.mjs`
- `../../scripts/lib/plugin-npm-release.ts`
- `../../scripts/lib/plugin-npm-runtime-assets.mjs`
- `../../scripts/lib/plugin-npm-runtime-build.mjs`
- `../../scripts/lib/plugin-package-dependencies.mjs`
- `../../scripts/lib/plugin-prerelease-test-plan.mjs`
- `../../scripts/lib/plugin-sdk-declaration-budget.mjs`
- `../../scripts/lib/plugin-sdk-deprecated-public-subpaths.json`
- `../../scripts/lib/release-beta-verifier.ts`
- `../../scripts/lib/release-upgrade-baseline.mjs`
- `../../scripts/lib/report-cli-helpers.mjs`
- `../../scripts/lib/sleep.mjs`
- `../../scripts/lib/source-file-scan-cache.mjs`
- `../../scripts/lib/sqlite-reliability-cli.js`
- `../../scripts/lib/sqlite-reliability-wal-monitor.js`
- `../../scripts/lib/sqlite-session-schema-baseline.ts`
- `../../scripts/lib/sqlite-state-benchmark-cli.js`
- `../../scripts/lib/static-extension-assets.mjs`
- `../../scripts/lib/test-group-report.mjs`
- `../../scripts/lib/ts-guard-utils.mjs`
- `../../scripts/lib/ts-topology/analyze.js`
- `../../scripts/lib/ts-topology/reports.js`
- `../../scripts/lib/ts-topology/scope.js`
- `../../scripts/lib/tsdown-config-groups.mjs`
- `../../scripts/lib/tsgo-sparse-guard.mjs`
- `../../scripts/lib/vitest-batch-runner.mjs`
- `../../scripts/lib/vitest-local-scheduling.mjs`
- `../../scripts/lib/vitest-shard-timings.mjs`
- `../../scripts/lib/windows-taskkill.mjs`
- `../../scripts/lib/workspace-bootstrap-smoke.mjs`
- `../../scripts/mantis/build-telegram-desktop-proof-evidence.mjs`
- `../../scripts/mantis/build-telegram-evidence.mjs`
- `../../scripts/mantis/build-web-ui-chat-evidence.mjs`
- `../../scripts/mantis/publish-pr-evidence.mjs`
- `../../scripts/measure-rpc-rtt.mjs`
- `../../scripts/mobile-release-ref.ts`
- `../../scripts/native-app-i18n.ts`
- `../../scripts/npm-runner.mjs`
- `../../scripts/ocm-npm-workspace-deps.mjs`
- `../../scripts/openclaw-npm-extended-stable-release.mjs`
- `../../scripts/openclaw-npm-resume-run.mjs`
- `../../scripts/openclaw-performance-source-summary.mjs`
- `../../scripts/package-changelog.mjs`
- `../../scripts/perf/issue-78851-model-resolution-cli.js`
- `../../scripts/perf/summarize-cpuprofile.mjs`
- `../../scripts/periphery-intersection.mjs`
- `../../scripts/plan-release-workflow-matrix.mjs`
- `../../scripts/plan-targeted-docker-lane-groups.mjs`
- `../../scripts/plugin-boundary-report.js`
- `../../scripts/plugin-publication-artifact.mjs`
- `../../scripts/plugin-release-pretag-pack-check.ts`
- `../../scripts/plugin-sdk-surface-report.mjs`
- `../../scripts/pnpm-runner.mjs`
- `../../scripts/postinstall-bundled-plugins.mjs`
- `../../scripts/pre-commit/pnpm-audit-prod.mjs`
- `../../scripts/preinstall-package-manager-warning.mjs`
- `../../scripts/prepare-extension-package-boundary-artifacts.mjs`
- `../../scripts/prepare-git-hooks.mjs`
- `../../scripts/prepare-openclaw-npm-shrinkwrap.ts`
- `../../scripts/print-cli-backend-live-metadata.js`
- `../../scripts/profile-extension-memory.mjs`
- `../../scripts/prompt-snapshot-files.js`
- `../../scripts/qa-e2e.js`
- `../../scripts/qa-lab-up.js`
- `../../scripts/qa/ux-matrix-evidence-producer.js`
- `../../scripts/release-beta-smoke.ts`
- `../../scripts/release-candidate-checklist.mjs`
- `../../scripts/release-check.ts`
- `../../scripts/release-ci-summary.mjs`
- `../../scripts/release-prepare.ts`
- `../../scripts/release-version.ts`
- `../../scripts/render-github-release-notes.mjs`
- `../../scripts/report-test-temp-creations.mjs`
- `../../scripts/repro/code-mode-namespace-live.ts`
- `../../scripts/repro/limit-edge-case-live-proof.mjs`
- `../../scripts/repro/tool-surface-live-bench.ts`
- `../../scripts/resolve-openclaw-package-candidate.mjs`
- `../../scripts/resolve-upgrade-survivor-baselines.mjs`
- `../../scripts/root-dependency-ownership-audit.mjs`
- `../../scripts/run-additional-boundary-checks.mjs`
- `../../scripts/run-android-gradle.mjs`
- `../../scripts/run-node-watch-paths.mjs`
- `../../scripts/run-oxlint-shards.mjs`
- `../../scripts/run-oxlint.mjs`
- `../../scripts/run-vitest-profile.mjs`
- `../../scripts/run-vitest.mjs`
- `../../scripts/run-with-env.mjs`
- `../../scripts/runtime-postbuild-stamp.mjs`
- `../../scripts/runtime-postbuild.mjs`
- `../../scripts/stage-bundled-plugin-runtime.mjs`
- `../../scripts/sync-codex-model-prompt-fixture.js`
- `../../scripts/sync-native-a2ui.mjs`
- `../../scripts/test-built-status-message-runtime.mjs`
- `../../scripts/test-docker-all.mjs`
- `../../scripts/test-env-mutation-report.js`
- `../../scripts/test-extension-batch.mjs`
- `../../scripts/test-force.js`
- `../../scripts/test-group-report.mjs`
- `../../scripts/test-live-shard.mjs`
- `../../scripts/test-live.mjs`
- `../../scripts/test-perf-budget.mjs`
- `../../scripts/test-projects.test-support.mjs`
- `../../scripts/test-report-utils.mjs`
- `../../scripts/test-shell-completion.ts`
- `../../scripts/test-skip-inventory.js`
- `../../scripts/testbox-lease-freshness.mjs`
- `../../scripts/transitive-manifest-risk-report.mjs`
- `../../scripts/ts-topology.ts`
- `../../scripts/tsdown-build.mjs`
- `../../scripts/type-suppression-inventory.js`
- `../../scripts/ui.js`
- `../../scripts/validate-full-release-validation-evidence.mjs`
- `../../scripts/verify-clawhub-published-artifact.mjs`
- `../../scripts/verify-docker-attestations.mjs`
- `../../scripts/verify-plugin-npm-published-runtime.mjs`
- `../../scripts/verify-pr-hosted-gates.mjs`
- `../../scripts/vitest-process-group.mjs`
- `../../scripts/watch-node.mjs`
- `../../scripts/windows-cmd-helpers.mjs`
- `../../scripts/write-build-info.ts`
- `../../scripts/write-cli-startup-metadata.ts`
- `../../scripts/zai-fallback-repro.ts`
- `../../security/opengrep/check-rule-metadata.mjs`
- `../../src/gateway/call.js`
- `../../src/infra/kysely-sync.js`
- `../../src/infra/runtime-guard.js`
- `../../src/plugins/plugin-module-loader-cache.js`
- `../../src/state/openclaw-state-db.js`
- `../../src/test-utils/env.js`
- `../../src/test-utils/fs-scan-assertions.js`
- `../../src/test-utils/node-process.js`
- `../../src/test-utils/ports.js`
- `../../src/test-utils/repo-files.js`
- `../../tsdown.config.ts`
- `../../ui/src/i18n/lib/registry.ts`
- `../config/sessions.js`
- `../config/sessions/session-accessor.js`
- `../config/sessions/store-load.js`
- `../config/sessions/store.js`
- `../config/sessions/transcript-append.test-support.js`
- `../context-engine/registry.js`
- `../discord/monitor/thread-bindings.js`
- `../e2e/qa-lab/runtime/openai-image-auth-docker-client.ts`
- `../gateway/call.js`
- `../gateway/session-utils.fs.js`
- `../helpers/agents/happy-path-prompt-snapshots.js`
- `../helpers/agents/prompt-snapshot-paths.js`
- `../helpers/bounded-child-output.js`
- `../helpers/captured-io.js`
- `../helpers/sqlite-sessions-transcripts-flip-proof.ts`
- `../helpers/temp-dir.js`
- `../helpers/temp-dir.ts`
- `../helpers/temp-repo.js`
- `../infra/agent-events.js`
- `../infra/custom-writer.js`
- `../infra/fs-safe.js`
- `../infra/heartbeat-wake.js`
- `../infra/json-files.js`
- `../infra/replace-file.js`
- `../infra/system-events.js`
- `../infra/system-message.js`
- `../runtime/json-output.js`
- `../session-transcript-readers.js`
- `../session-utils.js`
- `../sessions/session-lifecycle-events.js`
- `../sessions/transcript-events.js`
- `../vitest/vitest.agents-paths.mjs`
- `../vitest/vitest.commands-light-paths.mjs`
- `../vitest/vitest.contracts-shared.ts`
- `../vitest/vitest.extensions.config.ts`
- `../vitest/vitest.plugins.config.ts`
- `../vitest/vitest.test-shards.mjs`
- `../vitest/vitest.tooling.config.ts`
- `./android-version.test-support.ts`
- `./bench-gateway-child-test-support.js`
- `./chunk.cjs`
- `./custom-writer.js`
- `./install-npm-fixtures.js`
- `./ios-version.test-support.ts`
- `./jobs.js`
- `./missing.runtime.js`
- `./openclaw-log.js`
- `./runtime.js`
- `./session-transcript-readers.js`
- `./session-utils.fs.js`
- `./session-utils.js`
- `./side-effect.js`
- `./sqlite-transaction.js`
- `./store.js`
- `./subagent-announce.js`
- `./subagent-registry-completion.js`
- `./subagent-registry-state.js`
- `./subagent-registry.js`
- `./task-registry-control.runtime.js`
- `./test-helpers.js`
- `./test-helpers.ts`
- `./timer.js`
- `@modelcontextprotocol/sdk/client/index.js`
- `@modelcontextprotocol/sdk/client/stdio.js`
- `@openclaw/fs-safe`
- `@openclaw/fs-safe/store`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `fast-glob`
- `json5`
- `jszip`
- `node:buffer`
- `node:child_process`
- `node:crypto`
- `node:events`
- `node:fs`
- `node:fs/promises`
- `node:http`
- `node:module`
- `node:net`
- `node:os`
- `node:path`
- `node:perf_hooks`
- `node:process`
- `node:readline`
- `node:sqlite`
- `node:stream`
- `node:timers/promises`
- `node:url`
- `node:util`
- `node:vm`
- `node:worker_threads`
- `node:zlib`
- `openclaw/plugin-sdk/file-access-runtime`
- `openclaw/plugin-sdk/file-lock`
- `openclaw/plugin-sdk/json-store`
- `openclaw/plugin-sdk/security-runtime`
- `openclaw/plugin-sdk/test-fixtures`
- `playwright-core`
- `yaml`
