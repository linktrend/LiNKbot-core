# src/gateway/server.sessions.reset-hooks.test.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1000
- **Language:** TypeScript
- **Symbols:** 28
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 27 | type | HookEventRecord | (private) | - |
| 34 | type | CommandNewHookEvent | (private) | - |
| 44 | type | SessionEntryWithCliBindings | (private) | - |
| 51 | fn | firstHookCall | (private) | `function firstHookCall(mock: { mock: { calls: u...` |
| 59 | fn | expectTranscriptResetEvent | (private) | `function expectTranscriptResetEvent(params: {` |
| 71 | fn | expectMainHookContext | (private) | `function expectMainHookContext(context: HookEve...` |
| 77 | fn | expectStringValue | (private) | `function expectStringValue(value: unknown, labe...` |
| 85 | fn | expectStringWithPrefix | (private) | `function expectStringWithPrefix(value: unknown,...` |
| 92 | fn | configureGlobalAgentSessionStore | (private) | `async function configureGlobalAgentSessionStore...` |
| 127 | fn | withGlobalAgentSessionStore | (private) | `async function withGlobalAgentSessionStore<T>(` |
| 139 | fn | writeGlobalSessionFile | (private) | `async function writeGlobalSessionFile(storePath...` |
| 150 | fn | writeMessageTranscript | (private) | `async function writeMessageTranscript(params: {` |
| 167 | fn | writeMainTranscriptSession | (private) | `async function writeMainTranscriptSession(param...` |
| 197 | fn | loadEntry | (private) | `function loadEntry(params: { agentId?: string; ...` |
| 205 | fn | writeMainSessionEntry | (private) | `async function writeMainSessionEntry(` |
| 216 | fn | resetMainSession | (private) | `async function resetMainSession() {` |
| 220 | fn | resetSession | (private) | `async function resetSession(key: string) {` |
| 229 | fn | createFromMainSession | (private) | `async function createFromMainSession(params: { ...` |
| 238 | fn | performSessionReset | (private) | `async function performSessionReset(params: {` |
| 250 | fn | expectResetErrorMessage | (private) | `function expectResetErrorMessage(` |
| 261 | fn | isCommandNewHookEvent | (private) | `function isCommandNewHookEvent(event: unknown):...` |
| 270 | fn | commandNewHookEvents | (private) | `function commandNewHookEvents() {` |
| 276 | fn | expectSingleCommandNewHookEvent | (private) | `function expectSingleCommandNewHookEvent() {` |
| 288 | fn | claudeCliBindings | (private) | `function claudeCliBindings(sessionId: string) {` |
| 298 | fn | cliBoundSessionEntry | (private) | `function cliBoundSessionEntry(` |
| 309 | fn | resolveGatewaySessionStorePathForKey | (private) | `async function resolveGatewaySessionStorePathFo...` |
| 320 | fn | loadGatewaySessionStoreForKey | (private) | `async function loadGatewaySessionStoreForKey(ke...` |
| 330 | fn | expectCliBindingsCleared | (private) | `function expectCliBindingsCleared(` |
