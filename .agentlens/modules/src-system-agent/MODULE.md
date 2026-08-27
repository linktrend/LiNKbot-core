# Module: src/system-agent

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 72

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/system-agent/agent-id.ts` | 12 |  |
| `src/system-agent/agent-turn.test-support.ts` | 41 |  |
| `src/system-agent/agent-turn.test.ts` | 1078 | 📊 |
| `src/system-agent/agent-turn.ts` | 447 |  |
| `src/system-agent/approval-intent.test.ts` | 221 |  |
| `src/system-agent/approval-intent.ts` | 177 |  |
| `src/system-agent/assistant-prompts.ts` | 243 |  |
| `src/system-agent/assistant-timeout.test.ts` | 51 |  |
| `src/system-agent/assistant-timeout.ts` | 53 |  |
| `src/system-agent/assistant.configured.test.ts` | 383 |  |
| `src/system-agent/assistant.test.ts` | 114 |  |
| `src/system-agent/assistant.ts` | 199 |  |
| `src/system-agent/audit.test-support.ts` | 14 |  |
| `src/system-agent/audit.test.ts` | 45 |  |
| `src/system-agent/audit.ts` | 50 |  |
| `src/system-agent/chat-engine.channel-hooks.test.ts` | 158 |  |
| `src/system-agent/chat-engine.test.ts` | 2245 | 📊 |
| `src/system-agent/chat-engine.ts` | 1256 | 📊 |
| `src/system-agent/config-write-parity.test.ts` | 82 |  |
| `src/system-agent/config-write-policy.ts` | 69 |  |
| `src/system-agent/delegation-session.ts` | 13 |  |
| `src/system-agent/dialogue.ts` | 110 |  |
| `src/system-agent/inference-error.ts` | 27 |  |
| `src/system-agent/inference-fallback.test.ts` | 231 |  |
| `src/system-agent/inference-fallback.ts` | 150 |  |
| `src/system-agent/inference-route.ts` | 330 |  |
| `src/system-agent/new-agent-welcome.test.ts` | 16 |  |
| `src/system-agent/new-agent-welcome.ts` | 8 |  |
| `src/system-agent/onboarding-welcome.test.ts` | 210 |  |
| `src/system-agent/onboarding-welcome.ts` | 145 |  |
| `src/system-agent/operation-types.ts` | 48 |  |
| `src/system-agent/operations-execute.ts` | 501 | 📊 |
| `src/system-agent/operations-execution-helpers.ts` | 763 | 📊 |
| `src/system-agent/operations-parse.ts` | 429 |  |
| `src/system-agent/operations.setup.test.ts` | 1065 | 📊 |
| `src/system-agent/operations.test.ts` | 1044 | 📊 |
| `src/system-agent/operations.ts` | 2 |  |
| `src/system-agent/operator-approval.ts` | 43 |  |
| `src/system-agent/overview.test.ts` | 136 |  |
| `src/system-agent/overview.ts` | 369 |  |
| `src/system-agent/plugin-install.ts` | 19 |  |
| `src/system-agent/post-write-verification.ts` | 47 |  |
| `src/system-agent/probes.test.ts` | 81 |  |
| `src/system-agent/probes.ts` | 88 |  |
| `src/system-agent/rescue-channel.live.test.ts` | 118 |  |
| `src/system-agent/rescue-message.test.ts` | 712 | 📊 |
| `src/system-agent/rescue-message.ts` | 347 |  |
| `src/system-agent/rescue-policy.test.ts` | 65 |  |
| `src/system-agent/rescue-policy.ts` | 157 |  |
| `src/system-agent/revalidate-inference-owner.ts` | 28 |  |
| `src/system-agent/setup-app-recommendations.live.test.ts` | 98 |  |
| `src/system-agent/setup-app-recommendations.test.ts` | 303 |  |
| `src/system-agent/setup-app-recommendations.ts` | 380 |  |
| `src/system-agent/setup-apply.test.ts` | 858 | 📊 |
| `src/system-agent/setup-apply.ts` | 619 | 📊 |
| `src/system-agent/setup-config-snapshot.ts` | 28 |  |
| `src/system-agent/setup-inference-auth-options.ts` | 108 |  |
| `src/system-agent/setup-inference-detection.test.ts` | 125 |  |
| `src/system-agent/setup-inference-detection.ts` | 190 |  |
| `src/system-agent/setup-inference-detection.worker.ts` | 36 |  |
| `src/system-agent/setup-inference-probe.ts` | 10 |  |
| `src/system-agent/setup-inference.test.ts` | 5885 | 📊 |
| `src/system-agent/setup-inference.ts` | 3490 | 📊 |
| `src/system-agent/system-agent.test-helpers.ts` | 190 |  |
| `src/system-agent/system-agent.test.ts` | 421 |  |
| `src/system-agent/system-agent.ts` | 202 |  |
| `src/system-agent/transcript-store.test.ts` | 86 |  |
| `src/system-agent/transcript-store.ts` | 56 |  |
| `src/system-agent/tui-backend.test.ts` | 486 |  |
| `src/system-agent/tui-backend.ts` | 534 | 📊 |
| `src/system-agent/verified-inference.test.ts` | 1478 | 📊 |
| `src/system-agent/verified-inference.ts` | 929 | 📊 |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 2 | 0 | 1 |

## 🔴 High Priority

### `RULE` (src/system-agent/rescue-policy.ts:6)

> checks for remote OpenClaw rescue commands.

### `RULE` (src/system-agent/setup-inference.test.ts:4957)

> after the pre-commit rejection.

## 🟢 Low Priority

### `NOTE` (src/system-agent/chat-engine.ts:327)

> /progress/action steps advance on any input.
