# Module: extensions/matrix

[← Back to INDEX](../../INDEX.md)

**Type:** js/ts | **Files:** 167

**Entry point:** `extensions/matrix/index.ts`

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `extensions/matrix/api.ts` | 37 |  |
| `extensions/matrix/auth-presence.ts` | 35 |  |
| `extensions/matrix/channel-plugin-api.ts` | 3 |  |
| `extensions/matrix/cli-metadata.ts` | 12 |  |
| `extensions/matrix/contract-api.ts` | 8 |  |
| `extensions/matrix/doctor-contract-api.test.ts` | 650 | 📊 |
| `extensions/matrix/doctor-contract-api.ts` | 698 | 📊 |
| `extensions/matrix/helper-api.ts` | 4 |  |
| `extensions/matrix/index.test.ts` | 150 |  |
| `extensions/matrix/index.ts` | 52 |  |
| `extensions/matrix/plugin-entry.handlers.runtime.ts` | 2 |  |
| `extensions/matrix/runtime-api.ts` | 70 |  |
| `extensions/matrix/runtime-setter-api.ts` | 3 |  |
| `extensions/matrix/secret-contract-api.ts` | 6 |  |
| `extensions/matrix/session-binding-contract-api.ts` | 6 |  |
| `extensions/matrix/setup-entry.ts` | 18 |  |
| `extensions/matrix/setup-plugin-api.ts` | 3 |  |
| `extensions/matrix/src/account-selection.test.ts` | 142 |  |
| `extensions/matrix/src/account-selection.ts` | 224 |  |
| `extensions/matrix/src/actions.account-propagation.test.ts` | 267 |  |
| `extensions/matrix/src/actions.test.ts` | 252 |  |
| `extensions/matrix/src/actions.ts` | 362 |  |
| `extensions/matrix/src/approval-auth.test.ts` | 24 |  |
| `extensions/matrix/src/approval-auth.ts` | 17 |  |
| `extensions/matrix/src/approval-handler.runtime.test.ts` | 603 | 📊 |
| `extensions/matrix/src/approval-handler.runtime.ts` | 609 | 📊 |
| `extensions/matrix/src/approval-ids.ts` | 7 |  |
| `extensions/matrix/src/approval-native.test.ts` | 417 |  |
| `extensions/matrix/src/approval-native.ts` | 371 |  |
| `extensions/matrix/src/approval-reaction-auth.ts` | 46 |  |
| `extensions/matrix/src/approval-reactions.test.ts` | 315 |  |
| `extensions/matrix/src/approval-reactions.ts` | 370 |  |
| `extensions/matrix/src/auth-precedence.ts` | 62 |  |
| `extensions/matrix/src/channel-account-paths.ts` | 98 |  |
| `extensions/matrix/src/channel.account-paths.test.ts` | 105 |  |
| `extensions/matrix/src/channel.directory.test.ts` | 617 | 📊 |
| `extensions/matrix/src/channel.message-adapter.test.ts` | 265 |  |
| `extensions/matrix/src/channel.resolve.test.ts` | 50 |  |
| `extensions/matrix/src/channel.runtime.ts` | 18 |  |
| `extensions/matrix/src/channel.setup.test.ts` | 310 |  |
| `extensions/matrix/src/channel.setup.ts` | 49 |  |
| `extensions/matrix/src/channel.ts` | 680 | 📊 |
| `extensions/matrix/src/cli-metadata.ts` | 20 |  |
| `extensions/matrix/src/cli.test.ts` | 2019 | 📊 |
| `extensions/matrix/src/cli.ts` | 2325 | 📊 |
| `extensions/matrix/src/config-adapter.ts` | 42 |  |
| `extensions/matrix/src/config-schema.test.ts` | 158 |  |
| `extensions/matrix/src/config-schema.ts` | 161 |  |
| `extensions/matrix/src/config-ui-hints.ts` | 44 |  |
| `extensions/matrix/src/delivery-trace.test.ts` | 363 |  |
| `extensions/matrix/src/directory-live.test.ts` | 198 |  |
| `extensions/matrix/src/directory-live.ts` | 239 |  |
| `extensions/matrix/src/doctor-contract.ts` | 381 |  |
| `extensions/matrix/src/doctor.test.ts` | 425 |  |
| `extensions/matrix/src/doctor.ts` | 85 |  |
| `extensions/matrix/src/env-vars.ts` | 97 |  |
| `extensions/matrix/src/exec-approval-resolver.test.ts` | 80 |  |
| `extensions/matrix/src/exec-approval-resolver.ts` | 29 |  |
| `extensions/matrix/src/exec-approvals.test.ts` | 502 | 📊 |
| `extensions/matrix/src/exec-approvals.ts` | 290 |  |
| `extensions/matrix/src/group-mentions.test.ts` | 69 |  |
| `extensions/matrix/src/group-mentions.ts` | 35 |  |
| `extensions/matrix/src/matrix/account-config.ts` | 176 |  |
| `extensions/matrix/src/matrix/accounts.readiness.test.ts` | 28 |  |
| `extensions/matrix/src/matrix/accounts.test.ts` | 790 | 📊 |
| `extensions/matrix/src/matrix/accounts.ts` | 195 |  |
| `extensions/matrix/src/matrix/actions.ts` | 30 |  |
| `extensions/matrix/src/matrix/active-client.ts` | 27 |  |
| `extensions/matrix/src/matrix/async-lock.ts` | 19 |  |
| `extensions/matrix/src/matrix/backup-health.ts` | 125 |  |
| `extensions/matrix/src/matrix/client-bootstrap.test.ts` | 89 |  |
| `extensions/matrix/src/matrix/client-bootstrap.ts` | 165 |  |
| `extensions/matrix/src/matrix/client-resolver.test-helpers.ts` | 164 |  |
| `extensions/matrix/src/matrix/client.test.ts` | 871 | 📊 |
| `extensions/matrix/src/matrix/client.ts` | 24 |  |
| `extensions/matrix/src/matrix/config-paths.ts` | 32 |  |
| `extensions/matrix/src/matrix/config-update.test.ts` | 256 |  |
| `extensions/matrix/src/matrix/config-update.ts` | 299 |  |
| `extensions/matrix/src/matrix/credentials-read.ts` | 142 |  |
| `extensions/matrix/src/matrix/credentials-write.runtime.ts` | 30 |  |
| `extensions/matrix/src/matrix/credentials.test.ts` | 256 |  |
| `extensions/matrix/src/matrix/credentials.ts` | 103 |  |
| `extensions/matrix/src/matrix/crypto-state-store.ts` | 631 | 📊 |
| `extensions/matrix/src/matrix/deps.test.ts` | 200 |  |
| `extensions/matrix/src/matrix/deps.ts` | 255 |  |
| `extensions/matrix/src/matrix/device-health.test.ts` | 60 |  |
| `extensions/matrix/src/matrix/device-health.ts` | 32 |  |
| `extensions/matrix/src/matrix/direct-management.test.ts` | 400 |  |
| `extensions/matrix/src/matrix/direct-management.ts` | 350 |  |
| `extensions/matrix/src/matrix/direct-room.test.ts` | 62 |  |
| `extensions/matrix/src/matrix/direct-room.ts` | 129 |  |
| `extensions/matrix/src/matrix/draft-stream.test.ts` | 561 | 📊 |
| `extensions/matrix/src/matrix/draft-stream.ts` | 229 |  |
| `extensions/matrix/src/matrix/encryption-guidance.ts` | 25 |  |
| `extensions/matrix/src/matrix/errors.ts` | 22 |  |
| `extensions/matrix/src/matrix/format.test.ts` | 344 |  |
| `extensions/matrix/src/matrix/format.ts` | 441 |  |
| `extensions/matrix/src/matrix/media-errors.ts` | 21 |  |
| `extensions/matrix/src/matrix/media-text.ts` | 163 |  |
| `extensions/matrix/src/matrix/outbound-media-runtime.ts` | 2 |  |
| `extensions/matrix/src/matrix/poll-summary.ts` | 111 |  |
| `extensions/matrix/src/matrix/poll-types.test.ts` | 202 |  |
| `extensions/matrix/src/matrix/poll-types.ts` | 429 |  |
| `extensions/matrix/src/matrix/probe.runtime.ts` | 5 |  |
| `extensions/matrix/src/matrix/probe.test.ts` | 155 |  |
| `extensions/matrix/src/matrix/probe.ts` | 94 |  |
| `extensions/matrix/src/matrix/profile.test.ts` | 155 |  |
| `extensions/matrix/src/matrix/profile.ts` | 185 |  |
| `extensions/matrix/src/matrix/reaction-common.test.ts` | 97 |  |
| `extensions/matrix/src/matrix/reaction-common.ts` | 148 |  |
| `extensions/matrix/src/matrix/read-policy.test.ts` | 616 | 📊 |
| `extensions/matrix/src/matrix/read-policy.ts` | 251 |  |
| `extensions/matrix/src/matrix/sdk.test.ts` | 3973 | 📊 |
| `extensions/matrix/src/matrix/sdk.ts` | 2180 | 📊 |
| `extensions/matrix/src/matrix/send.test.ts` | 1231 | 📊 |
| `extensions/matrix/src/matrix/send.ts` | 698 | 📊 |
| `extensions/matrix/src/matrix/session-store-metadata.ts` | 109 |  |
| `extensions/matrix/src/matrix/sqlite-state.ts` | 41 |  |
| `extensions/matrix/src/matrix/startup-abort.ts` | 59 |  |
| `extensions/matrix/src/matrix/subagent-hooks.test.ts` | 882 | 📊 |
| `extensions/matrix/src/matrix/subagent-hooks.ts` | 309 |  |
| `extensions/matrix/src/matrix/sync-state.ts` | 28 |  |
| `extensions/matrix/src/matrix/target-ids.ts` | 80 |  |
| `extensions/matrix/src/matrix/thread-bindings-shared.ts` | 207 |  |
| `extensions/matrix/src/matrix/thread-bindings.test.ts` | 679 | 📊 |
| `extensions/matrix/src/matrix/thread-bindings.ts` | 710 | 📊 |
| `extensions/matrix/src/onboarding.resolve.test.ts` | 76 |  |
| `extensions/matrix/src/onboarding.test-harness.ts` | 312 |  |
| `extensions/matrix/src/onboarding.test.ts` | 503 | 📊 |
| `extensions/matrix/src/onboarding.ts` | 772 | 📊 |
| `extensions/matrix/src/outbound-tool-trace-sanitize.test.ts` | 20 |  |
| `extensions/matrix/src/outbound.test.ts` | 583 | 📊 |
| `extensions/matrix/src/outbound.ts` | 282 |  |
| `extensions/matrix/src/plugin-entry.runtime.js` | 115 |  |
| `extensions/matrix/src/plugin-entry.runtime.test.ts` | 135 |  |
| `extensions/matrix/src/plugin-entry.runtime.ts` | 67 |  |
| `extensions/matrix/src/profile-update.ts` | 72 |  |
| `extensions/matrix/src/record-shared.ts` | 4 |  |
| `extensions/matrix/src/resolve-targets.test.ts` | 179 |  |
| `extensions/matrix/src/resolve-targets.ts` | 176 |  |
| `extensions/matrix/src/resolver.runtime.ts` | 6 |  |
| `extensions/matrix/src/resolver.ts` | 22 |  |
| `extensions/matrix/src/runtime-api.ts` | 107 |  |
| `extensions/matrix/src/runtime.ts` | 14 |  |
| `extensions/matrix/src/secret-contract.ts` | 163 |  |
| `extensions/matrix/src/session-route.test.ts` | 370 |  |
| `extensions/matrix/src/session-route.ts` | 128 |  |
| `extensions/matrix/src/setup-bootstrap.ts` | 103 |  |
| `extensions/matrix/src/setup-config.ts` | 223 |  |
| `extensions/matrix/src/setup-contract.ts` | 93 |  |
| `extensions/matrix/src/setup-core.test.ts` | 474 |  |
| `extensions/matrix/src/setup-core.ts` | 147 |  |
| `extensions/matrix/src/setup-dm-policy.ts` | 16 |  |
| `extensions/matrix/src/setup-surface.ts` | 5 |  |
| `extensions/matrix/src/storage-paths.ts` | 76 |  |
| `extensions/matrix/src/test-runtime.ts` | 134 |  |
| `extensions/matrix/src/test-support/monitor-route-test-support.ts` | 11 |  |
| `extensions/matrix/src/thread-binding-api.test.ts` | 34 |  |
| `extensions/matrix/src/thread-binding-api.ts` | 24 |  |
| `extensions/matrix/src/tool-actions.runtime.ts` | 2 |  |
| `extensions/matrix/src/tool-actions.test.ts` | 672 | 📊 |
| `extensions/matrix/src/tool-actions.ts` | 571 | 📊 |
| `extensions/matrix/src/types.ts` | 254 |  |
| `extensions/matrix/subagent-hooks-api.ts` | 18 |  |
| `extensions/matrix/test-api.ts` | 31 |  |
| `extensions/matrix/thread-binding-api.ts` | 5 |  |
| `extensions/matrix/thread-bindings-runtime.ts` | 5 |  |

## Child Modules

- [extensions-matrix-src-matrix-actions](../extensions-matrix-src-matrix-actions/MODULE.md)
- [extensions-matrix-src-matrix-client](../extensions-matrix-src-matrix-client/MODULE.md)
- [extensions-matrix-src-matrix-monitor](../extensions-matrix-src-matrix-monitor/MODULE.md)
- [extensions-matrix-src-matrix-sdk](../extensions-matrix-src-matrix-sdk/MODULE.md)
- [extensions-matrix-src-matrix-send](../extensions-matrix-src-matrix-send/MODULE.md)

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 1 | 0 | 0 |

## 🔴 High Priority

### `INVARIANT` (extensions/matrix/src/channel.ts:590)

> The import() below cannot hang because:
