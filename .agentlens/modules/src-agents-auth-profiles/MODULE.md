# Module: src/agents/auth-profiles

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 85

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/agents/auth-profiles/clone.ts` | 18 |  |
| `src/agents/auth-profiles/constants.ts` | 52 |  |
| `src/agents/auth-profiles/credential-normalize.ts` | 29 |  |
| `src/agents/auth-profiles/credential-state.test.ts` | 146 |  |
| `src/agents/auth-profiles/credential-state.ts` | 141 |  |
| `src/agents/auth-profiles/display.test.ts` | 49 |  |
| `src/agents/auth-profiles/display.ts` | 23 |  |
| `src/agents/auth-profiles/doctor.ts` | 83 |  |
| `src/agents/auth-profiles/effective-oauth.test.ts` | 90 |  |
| `src/agents/auth-profiles/effective-oauth.ts` | 29 |  |
| `src/agents/auth-profiles/external-auth.test-support.ts` | 22 |  |
| `src/agents/auth-profiles/external-auth.ts` | 184 |  |
| `src/agents/auth-profiles/external-cli-auth-selection.ts` | 221 |  |
| `src/agents/auth-profiles/external-cli-discovery.ts` | 137 |  |
| `src/agents/auth-profiles/external-cli-scope.ts` | 140 |  |
| `src/agents/auth-profiles/external-cli-sync.email-backfill.test.ts` | 71 |  |
| `src/agents/auth-profiles/external-cli-sync.ts` | 433 |  |
| `src/agents/auth-profiles/external-oauth.test.ts` | 278 |  |
| `src/agents/auth-profiles/failure-copy.test.ts` | 136 |  |
| `src/agents/auth-profiles/failure-copy.ts` | 136 |  |
| `src/agents/auth-profiles/failure-hook.ts` | 14 |  |
| `src/agents/auth-profiles/identity.ts` | 47 |  |
| `src/agents/auth-profiles/legacy-oauth-ref.ts` | 30 |  |
| `src/agents/auth-profiles/oauth-common-mocks.test-support.ts` | 64 |  |
| `src/agents/auth-profiles/oauth-external-auth-passthrough.test-support.ts` | 17 |  |
| `src/agents/auth-profiles/oauth-file-lock-passthrough.test-support.ts` | 21 |  |
| `src/agents/auth-profiles/oauth-identity.test.ts` | 387 |  |
| `src/agents/auth-profiles/oauth-identity.ts` | 94 |  |
| `src/agents/auth-profiles/oauth-lock-path.test.ts` | 265 |  |
| `src/agents/auth-profiles/oauth-lock-timeout-classification.test.ts` | 57 |  |
| `src/agents/auth-profiles/oauth-manager.test.ts` | 784 | 📊 |
| `src/agents/auth-profiles/oauth-manager.ts` | 849 | 📊 |
| `src/agents/auth-profiles/oauth-refresh-error.test.ts` | 141 |  |
| `src/agents/auth-profiles/oauth-refresh-failure.test.ts` | 236 |  |
| `src/agents/auth-profiles/oauth-refresh-failure.ts` | 240 |  |
| `src/agents/auth-profiles/oauth-refresh-lock-errors.ts` | 35 |  |
| `src/agents/auth-profiles/oauth-refresh-queue.test.ts` | 172 |  |
| `src/agents/auth-profiles/oauth-refresh-timeout.test.ts` | 61 |  |
| `src/agents/auth-profiles/oauth-shared.test.ts` | 184 |  |
| `src/agents/auth-profiles/oauth-shared.ts` | 219 |  |
| `src/agents/auth-profiles/oauth-test-utils.ts` | 151 |  |
| `src/agents/auth-profiles/oauth.adopt-identity.test.ts` | 309 |  |
| `src/agents/auth-profiles/oauth.concurrent-agents.test.ts` | 151 |  |
| `src/agents/auth-profiles/oauth.fallback-to-main-agent.test.ts` | 406 |  |
| `src/agents/auth-profiles/oauth.mirror-refresh.test.ts` | 532 | 📊 |
| `src/agents/auth-profiles/oauth.openai-codex-refresh-fallback.test.ts` | 1215 | 📊 |
| `src/agents/auth-profiles/oauth.test-support.ts` | 18 |  |
| `src/agents/auth-profiles/oauth.test.ts` | 613 | 📊 |
| `src/agents/auth-profiles/oauth.ts` | 567 | 📊 |
| `src/agents/auth-profiles/order.test.ts` | 844 | 📊 |
| `src/agents/auth-profiles/order.ts` | 532 | 📊 |
| `src/agents/auth-profiles/path-constants.ts` | 6 |  |
| `src/agents/auth-profiles/path-resolve.ts` | 85 |  |
| `src/agents/auth-profiles/paths-direct-import.test.ts` | 92 |  |
| `src/agents/auth-profiles/paths.ts` | 13 |  |
| `src/agents/auth-profiles/persisted-boundary.test.ts` | 422 |  |
| `src/agents/auth-profiles/persisted.ts` | 833 | 📊 |
| `src/agents/auth-profiles/policy.ts` | 151 |  |
| `src/agents/auth-profiles/portability.test.ts` | 91 |  |
| `src/agents/auth-profiles/portability.ts` | 98 |  |
| `src/agents/auth-profiles/profile-list.ts` | 34 |  |
| `src/agents/auth-profiles/profiles.test.ts` | 1363 | 📊 |
| `src/agents/auth-profiles/profiles.ts` | 336 |  |
| `src/agents/auth-profiles/read-only-availability.test.ts` | 92 |  |
| `src/agents/auth-profiles/read-only-availability.ts` | 128 |  |
| `src/agents/auth-profiles/repair.ts` | 190 |  |
| `src/agents/auth-profiles/runtime-snapshots.test-support.ts` | 25 |  |
| `src/agents/auth-profiles/runtime-snapshots.test.ts` | 250 |  |
| `src/agents/auth-profiles/runtime-snapshots.ts` | 510 | 📊 |
| `src/agents/auth-profiles/session-override.test.ts` | 670 | 📊 |
| `src/agents/auth-profiles/session-override.ts` | 302 |  |
| `src/agents/auth-profiles/source-check.test.ts` | 125 |  |
| `src/agents/auth-profiles/source-check.ts` | 191 |  |
| `src/agents/auth-profiles/sqlite.ts` | 340 |  |
| `src/agents/auth-profiles/state-observation.test.ts` | 41 |  |
| `src/agents/auth-profiles/state-observation.ts` | 64 |  |
| `src/agents/auth-profiles/state.ts` | 215 |  |
| `src/agents/auth-profiles/store.test-support.ts` | 21 |  |
| `src/agents/auth-profiles/store.ts` | 1728 | 📊 |
| `src/agents/auth-profiles/types.ts` | 169 |  |
| `src/agents/auth-profiles/upsert-with-lock.ts` | 28 |  |
| `src/agents/auth-profiles/usage-state.ts` | 259 |  |
| `src/agents/auth-profiles/usage.test-support.ts` | 21 |  |
| `src/agents/auth-profiles/usage.test.ts` | 1735 | 📊 |
| `src/agents/auth-profiles/usage.ts` | 1172 | 📊 |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 2 | 0 | 0 |

## 🔴 High Priority

### `INVARIANT` (src/agents/auth-profiles/constants.ts:20)

> OAUTH_REFRESH_CALL_TIMEOUT_MS < OAUTH_REFRESH_LOCK_OPTIONS.stale

### `INVARIANT` (src/agents/auth-profiles/usage.ts:137)

> a 401 that looks like a 12h token-family outage.
