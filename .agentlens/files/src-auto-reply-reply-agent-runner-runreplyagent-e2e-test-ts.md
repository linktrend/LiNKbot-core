# src/auto-reply/reply/agent-runner.runreplyagent.e2e.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 4586
- **Language:** TypeScript
- **Symbols:** 15
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 47 | type | ReplyOptionsWithOperationRunState | (private) | - |
| 51 | type | AgentRunParams | (private) | - |
| 84 | fn | countMatching | (private) | `function countMatching<T>(items: readonly T[], ...` |
| 94 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 101 | fn | mockCallArgs | (private) | `function mockCallArgs(mock: ReturnType<typeof v...` |
| 109 | fn | requireStoredSessionEntry | (private) | `function requireStoredSessionEntry(storePath: s...` |
| 117 | fn | createSessionStoreFile | (private) | `async function createSessionStoreFile(entry: Se...` |
| 124 | fn | readStoredMainSession | (private) | `async function readStoredMainSession(storePath:...` |
| 135 | fn | getRunReplyAgent | (private) | `async function getRunReplyAgent() {` |
| 254 | fn | createMinimalRun | (private) | `function createMinimalRun(params?: {` |
| 365 | fn | runHookBackedEmbeddedAgent | (private) | `async function runHookBackedEmbeddedAgent(param...` |
| 398 | fn | attachSourceTurnRecorder | (private) | `function attachSourceTurnRecorder(params: {` |
| 424 | fn | requireBuiltChannelSourceTurnId | (private) | `function requireBuiltChannelSourceTurnId(` |
| 3077 | fn | markToolResultStarted | (private) | `let markToolResultStarted = () => {};` |
| 3081 | fn | releaseToolResult | (private) | `let releaseToolResult = () => {};` |
