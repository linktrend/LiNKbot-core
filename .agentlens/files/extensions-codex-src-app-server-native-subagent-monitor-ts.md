# extensions/codex/src/app-server/native-subagent-monitor.ts

[← Back to Module](../modules/extensions-codex-src-app-server/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1632
- **Language:** TypeScript
- **Symbols:** 29
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 32 | type | NativeSubagentMonitorRuntime | (private) | - |
| 37 | type | NativeSubagentMonitorClient | (private) | - |
| 42 | type | ParentState | (private) | - |
| 54 | type | ChildState | (private) | - |
| 72 | type | ChildAssistantMessages | (private) | - |
| 79 | type | RecoveredCompletion | (private) | - |
| 83 | type | ThreadRecovery | (private) | - |
| 91 | type | ThreadStatusRevision | (private) | - |
| 96 | type | TaskRecoveryCandidate | (private) | - |
| 105 | type | MonitorOptions | (private) | - |
| 148 | fn | registerMonitor | (private) | `function registerMonitor(params: {` |
| 172 | class | Monitor | (private) | - |
| 1435 | fn | readThreadTurnRecovery | (private) | `function readThreadTurnRecovery(` |
| 1454 | fn | toChildTurnCompletion | (private) | `function toChildTurnCompletion(` |
| 1480 | fn | lastChildAssistantMessage | (private) | `function lastChildAssistantMessage(childState: ...` |
| 1496 | fn | readTurnErrorMessage | (private) | `function readTurnErrorMessage(turn: JsonObject)...` |
| 1506 | fn | systemErrorFallbackCompletion | (private) | `function systemErrorFallbackCompletion(childThr...` |
| 1515 | fn | readTurnCompletion | (private) | `function readTurnCompletion(` |
| 1553 | fn | readLastAgentMessage | (private) | `function readLastAgentMessage(turn: JsonObject)...` |
| 1579 | fn | buildParentAgentPathKey | (private) | `function buildParentAgentPathKey(parentThreadId...` |
| 1583 | fn | isNoFinalCompletion | (private) | `function isNoFinalCompletion(completion: CodexN...` |
| 1590 | fn | delayForAttempt | (private) | `function delayForAttempt(delays: readonly numbe...` |
| 1594 | fn | readThreadParentThreadId | (private) | `function readThreadParentThreadId(thread: JsonO...` |
| 1601 | fn | readThreadSpawnSource | (private) | `function readThreadSpawnSource(thread: JsonObje...` |
| 1607 | fn | readString | (private) | `function readString(record: JsonObject | undefi...` |
| 1612 | fn | readStringArray | (private) | `function readStringArray(value: unknown): strin...` |
| 1619 | fn | readObjectStringKeys | (private) | `function readObjectStringKeys(value: JsonValue ...` |
| 1623 | fn | normalizeIdentifier | (private) | `function normalizeIdentifier(value: string | un...` |
| 1627 | fn | unrefTimer | (private) | `function unrefTimer(timer: ReturnType<typeof se...` |
