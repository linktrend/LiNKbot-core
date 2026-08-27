# src/gateway/server.sessions.list-changed.test.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1222
- **Language:** TypeScript
- **Symbols:** 18
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 43 | type | MockCalls | (private) | - |
| 46 | type | SessionStoreEntryOptions | (private) | - |
| 47 | type | MutationMethod | (private) | - |
| 49 | fn | isRecord | (private) | `function isRecord(value: unknown): value is Rec...` |
| 53 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 61 | fn | requireArray | (private) | `function requireArray(value: unknown, label: st...` |
| 69 | fn | expectFields | (private) | `function expectFields(record: Record<string, un...` |
| 75 | fn | transcriptMessageContents | (private) | `function transcriptMessageContents(events: read...` |
| 83 | fn | expectRespondPayload | (private) | `function expectRespondPayload(respond: MockCall...` |
| 91 | fn | findSession | (private) | `function findSession(` |
| 106 | fn | expectChangedBroadcast | (private) | `function expectChangedBroadcast(` |
| 120 | fn | invokeSessionsList | (private) | `async function invokeSessionsList({` |
| 160 | fn | invokeSessionMutation | (private) | `async function invokeSessionMutation({` |
| 198 | fn | invokeSessionsPatch | (private) | `async function invokeSessionsPatch(params: Reco...` |
| 202 | fn | writeMainSessionStore | (private) | `async function writeMainSessionStore(options?: ...` |
| 211 | fn | expectMainPatchBroadcast | (private) | `function expectMainPatchBroadcast(` |
| 295 | fn | invokeSessionsCompact | (private) | `async function invokeSessionsCompact({` |
| 314 | fn | expectListedSessionActiveRun | (private) | `async function expectListedSessionActiveRun(` |
