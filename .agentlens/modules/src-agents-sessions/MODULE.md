# Module: src/agents/sessions

[← Back to INDEX](../../INDEX.md)

**Type:** js/ts | **Files:** 71

**Entry point:** `src/agents/sessions/index.ts`

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/agents/sessions/agent-session-base.ts` | 825 | 📊 |
| `src/agents/sessions/agent-session-compaction.ts` | 431 |  |
| `src/agents/sessions/agent-session-execution.ts` | 233 |  |
| `src/agents/sessions/agent-session-extensions.ts` | 420 |  |
| `src/agents/sessions/agent-session-inspection.ts` | 202 |  |
| `src/agents/sessions/agent-session-loop-correctness.test.ts` | 700 | 📊 |
| `src/agents/sessions/agent-session-models.ts` | 246 |  |
| `src/agents/sessions/agent-session-prompting.ts` | 545 | 📊 |
| `src/agents/sessions/agent-session-tree.ts` | 275 |  |
| `src/agents/sessions/agent-session-types.ts` | 123 |  |
| `src/agents/sessions/agent-session-utils.ts` | 62 |  |
| `src/agents/sessions/agent-session.context-usage.test.ts` | 276 |  |
| `src/agents/sessions/agent-session.live.test.ts` | 263 |  |
| `src/agents/sessions/agent-session.ts` | 22 |  |
| `src/agents/sessions/auth-guidance.ts` | 34 |  |
| `src/agents/sessions/auth-storage-oauth-registry.ts` | 14 |  |
| `src/agents/sessions/auth-storage.test.ts` | 171 |  |
| `src/agents/sessions/auth-storage.ts` | 544 | 📊 |
| `src/agents/sessions/bash-executor.test.ts` | 163 |  |
| `src/agents/sessions/bash-executor.ts` | 105 |  |
| `src/agents/sessions/defaults.ts` | 9 |  |
| `src/agents/sessions/diagnostics.ts` | 20 |  |
| `src/agents/sessions/event-bus.ts` | 42 |  |
| `src/agents/sessions/exec.test.ts` | 256 |  |
| `src/agents/sessions/exec.ts` | 237 |  |
| `src/agents/sessions/extension-sdk.ts` | 56 |  |
| `src/agents/sessions/footer-data-provider.ts` | 362 |  |
| `src/agents/sessions/http-dispatcher.test.ts` | 24 |  |
| `src/agents/sessions/http-dispatcher.ts` | 27 |  |
| `src/agents/sessions/index.ts` | 16 |  |
| `src/agents/sessions/keybindings.ts` | 386 |  |
| `src/agents/sessions/manual-compaction-preflight.ts` | 41 |  |
| `src/agents/sessions/messages.ts` | 12 |  |
| `src/agents/sessions/model-registry-runtime.ts` | 44 |  |
| `src/agents/sessions/model-registry.test.ts` | 745 | 📊 |
| `src/agents/sessions/model-registry.ts` | 1023 | 📊 |
| `src/agents/sessions/model-resolver.test.ts` | 149 |  |
| `src/agents/sessions/model-resolver.ts` | 654 | 📊 |
| `src/agents/sessions/package-manager.test.ts` | 295 |  |
| `src/agents/sessions/package-manager.ts` | 1486 | 📊 |
| `src/agents/sessions/prompt-templates.test.ts` | 49 |  |
| `src/agents/sessions/prompt-templates.ts` | 225 |  |
| `src/agents/sessions/provider-display-names.ts` | 37 |  |
| `src/agents/sessions/resolve-config-value.ts` | 142 |  |
| `src/agents/sessions/resource-loader.test.ts` | 99 |  |
| `src/agents/sessions/resource-loader.ts` | 1037 | 📊 |
| `src/agents/sessions/sdk.test.ts` | 848 | 📊 |
| `src/agents/sessions/sdk.ts` | 553 | 📊 |
| `src/agents/sessions/session-file-parser.ts` | 46 |  |
| `src/agents/sessions/session-manager-branching.ts` | 205 |  |
| `src/agents/sessions/session-manager-codec.ts` | 299 |  |
| `src/agents/sessions/session-manager-core.ts` | 608 | 📊 |
| `src/agents/sessions/session-manager-entries.ts` | 330 |  |
| `src/agents/sessions/session-manager-file.ts` | 563 | 📊 |
| `src/agents/sessions/session-manager-id.ts` | 17 |  |
| `src/agents/sessions/session-manager-list.ts` | 297 |  |
| `src/agents/sessions/session-manager-persistence.ts` | 431 |  |
| `src/agents/sessions/session-manager-types.ts` | 178 |  |
| `src/agents/sessions/session-manager.test.ts` | 3351 | 📊 |
| `src/agents/sessions/session-manager.tool-result-replay.test.ts` | 280 |  |
| `src/agents/sessions/session-manager.ts` | 359 |  |
| `src/agents/sessions/session-migrate-id-dedup.test.ts` | 134 |  |
| `src/agents/sessions/settings-manager.test.ts` | 70 |  |
| `src/agents/sessions/settings-manager.ts` | 1079 | 📊 |
| `src/agents/sessions/slash-commands.ts` | 15 |  |
| `src/agents/sessions/source-info.ts` | 47 |  |
| `src/agents/sessions/storage-lock.ts` | 21 |  |
| `src/agents/sessions/system-prompt.test.ts` | 19 |  |
| `src/agents/sessions/system-prompt.ts` | 182 |  |
| `src/agents/sessions/telemetry.ts` | 23 |  |
| `src/agents/sessions/windows-git-bash-path.test.ts` | 23 |  |

## Child Modules

- [src-agents-sessions-compaction](../src-agents-sessions-compaction/MODULE.md)
- [src-agents-sessions-extensions](../src-agents-sessions-extensions/MODULE.md)
- [src-agents-sessions-tools](../src-agents-sessions-tools/MODULE.md)

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 1 | 0 | 1 |

## 🔴 High Priority

### `WARNING` (src/agents/sessions/sdk.ts:129)

> if session was restored with a different model than saved */

## 🟢 Low Priority

### `NOTE` (src/agents/sessions/model-resolver.ts:327)

> This does not apply the thinking level by itself, but it may *parse* and
