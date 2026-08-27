# src/agents/command/attempt-execution.cli.test.ts

[← Back to Module](../modules/src-agents-command/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3551
- **Language:** TypeScript
- **Symbols:** 19
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 36 | type | RunAgentAttemptParams | (private) | - |
| 37 | fn | runAgentAttempt | (private) | `const runAgentAttempt = (` |
| 130 | fn | makeCliResult | (private) | `function makeCliResult(text: string): EmbeddedA...` |
| 158 | fn | persistCliTranscriptEntry | (private) | `async function persistCliTranscriptEntry(` |
| 168 | fn | readSessionMessages | (private) | `async function readSessionMessages(sessionFile:...` |
| 177 | fn | readSessionFileEntries | (private) | `async function readSessionFileEntries(sessionFi...` |
| 187 | fn | readTranscriptEntries | (private) | `async function readTranscriptEntries<T extends ...` |
| 211 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 218 | fn | expectRecordFields | (private) | `function expectRecordFields(record: Record<stri...` |
| 224 | fn | requireMockArg | (private) | `function requireMockArg(mock: ReturnType<typeof...` |
| 232 | fn | expectMockArgFields | (private) | `function expectMockArgFields(` |
| 240 | fn | firstRunCliAgentArg | (private) | `function firstRunCliAgentArg(callIndex = 0) {` |
| 244 | fn | firstEmbeddedAgentArg | (private) | `function firstEmbeddedAgentArg(callIndex = 0) {` |
| 253 | fn | runOpenClawEmbeddedAttemptForTest | (private) | `async function runOpenClawEmbeddedAttemptForTes...` |
| 333 | fn | writeSessionStoreSeed | (private) | `async function writeSessionStoreSeed(sessionSto...` |
| 340 | fn | readSessionStore | (private) | `function readSessionStore(): Record<string, Ses...` |
| 354 | fn | runClaudeCliAttempt | (private) | `async function runClaudeCliAttempt(params: {` |
| 394 | fn | writeClaudeCliAssistantTranscript | (private) | `async function writeClaudeCliAssistantTranscrip...` |
| 414 | fn | makeClaudeCliSessionEntry | (private) | `function makeClaudeCliSessionEntry(` |

## Memory Markers

### 🟡 `FIXME` (line 755)

> condition: the managed stdio child is still live but Claude wrote no
