# Module: src/agents/cli-runner

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 52

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/agents/cli-runner/bundle-mcp-adapter-shared.ts` | 65 |  |
| `src/agents/cli-runner/bundle-mcp-claude.ts` | 106 |  |
| `src/agents/cli-runner/bundle-mcp-codex.ts` | 254 |  |
| `src/agents/cli-runner/bundle-mcp-codex.user-config.test.ts` | 765 | 📊 |
| `src/agents/cli-runner/bundle-mcp-gemini.ts` | 146 |  |
| `src/agents/cli-runner/bundle-mcp.codex.test.ts` | 49 |  |
| `src/agents/cli-runner/bundle-mcp.gemini.live.test.ts` | 112 |  |
| `src/agents/cli-runner/bundle-mcp.gemini.test.ts` | 213 |  |
| `src/agents/cli-runner/bundle-mcp.resume.test.ts` | 146 |  |
| `src/agents/cli-runner/bundle-mcp.test-support.ts` | 89 |  |
| `src/agents/cli-runner/bundle-mcp.test.ts` | 373 |  |
| `src/agents/cli-runner/bundle-mcp.ts` | 322 |  |
| `src/agents/cli-runner/bundle-mcp.user-config.test.ts` | 328 |  |
| `src/agents/cli-runner/claude-live-session-policy.test.ts` | 13 |  |
| `src/agents/cli-runner/claude-live-session-policy.ts` | 18 |  |
| `src/agents/cli-runner/claude-live-session.background-tasks.test.ts` | 876 | 📊 |
| `src/agents/cli-runner/claude-live-session.test-support.ts` | 29 |  |
| `src/agents/cli-runner/claude-live-session.ts` | 1834 | 📊 |
| `src/agents/cli-runner/claude-skills-plugin.ts` | 157 |  |
| `src/agents/cli-runner/delivery-evidence.ts` | 79 |  |
| `src/agents/cli-runner/execute-messaging.ts` | 98 |  |
| `src/agents/cli-runner/execute-node-claude.ts` | 364 |  |
| `src/agents/cli-runner/execute-output-buffer.test.ts` | 32 |  |
| `src/agents/cli-runner/execute-output-buffer.ts` | 7 |  |
| `src/agents/cli-runner/execute.runtime.ts` | 2 |  |
| `src/agents/cli-runner/execute.supervisor-capture.test.ts` | 2367 | 📊 |
| `src/agents/cli-runner/execute.test-support.ts` | 151 |  |
| `src/agents/cli-runner/execute.ts` | 2218 | 📊 |
| `src/agents/cli-runner/helpers.system-prompt-resume.test.ts` | 268 |  |
| `src/agents/cli-runner/helpers.system-prompt.test.ts` | 192 |  |
| `src/agents/cli-runner/helpers.ts` | 596 | 📊 |
| `src/agents/cli-runner/log.ts` | 19 |  |
| `src/agents/cli-runner/mcp-grant-context.ts` | 160 |  |
| `src/agents/cli-runner/model-call-diagnostics.test.ts` | 359 |  |
| `src/agents/cli-runner/model-call-diagnostics.ts` | 563 | 📊 |
| `src/agents/cli-runner/output-error.ts` | 37 |  |
| `src/agents/cli-runner/prepare-claude.ts` | 30 |  |
| `src/agents/cli-runner/prepare.runtime.ts` | 2 |  |
| `src/agents/cli-runner/prepare.test-support.ts` | 15 |  |
| `src/agents/cli-runner/prepare.test.ts` | 4852 | 📊 |
| `src/agents/cli-runner/prepare.ts` | 1376 | 📊 |
| `src/agents/cli-runner/reliability.ts` | 126 |  |
| `src/agents/cli-runner/reseed-envelope.test.ts` | 77 |  |
| `src/agents/cli-runner/reseed-envelope.ts` | 42 |  |
| `src/agents/cli-runner/run-diagnostics.test.ts` | 260 |  |
| `src/agents/cli-runner/run-diagnostics.ts` | 198 |  |
| `src/agents/cli-runner/session-history.test.ts` | 1063 | 📊 |
| `src/agents/cli-runner/session-history.ts` | 633 | 📊 |
| `src/agents/cli-runner/toml-inline.ts` | 41 |  |
| `src/agents/cli-runner/tool-policy.test.ts` | 62 |  |
| `src/agents/cli-runner/tool-policy.ts` | 56 |  |
| `src/agents/cli-runner/types.ts` | 288 |  |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 1 | 0 | 0 |

## 🔴 High Priority

### `RULE` (src/agents/cli-runner/execute-node-claude.ts:40)

> onto the node. --allowedTools is stripped because Claude treats it as
