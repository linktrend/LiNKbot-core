# extensions/memory-core/src/dreaming-narrative.test.ts

[← Back to Module](../modules/extensions-memory-core/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1245
- **Language:** TypeScript
- **Symbols:** 19
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 40 | fn | setNarrativeTestEnv | (private) | `function setNarrativeTestEnv(stateDir: string):...` |
| 44 | fn | restoreNarrativeTestEnv | (private) | `function restoreNarrativeTestEnv(): void {` |
| 52 | type | MockCallSource | (private) | - |
| 54 | fn | mockCallArg | (private) | `function mockCallArg(source: MockCallSource, la...` |
| 65 | fn | mockObjectArg | (private) | `function mockObjectArg(` |
| 78 | fn | logIncludes | (private) | `function logIncludes(source: MockCallSource, te...` |
| 82 | fn | expectLogIncludes | (private) | `function expectLogIncludes(source: MockCallSour...` |
| 86 | fn | expectLogExcludes | (private) | `function expectLogExcludes(source: MockCallSour...` |
| 90 | fn | seedSessionStore | (private) | `async function seedSessionStore(` |
| 99 | fn | readSessionStoreEntries | (private) | `function readSessionStoreEntries(storePath: str...` |
| 105 | fn | seedDreamingTranscriptEvent | (private) | `async function seedDreamingTranscriptEvent(para...` |
| 125 | fn | flushNarrativeSettleTimers | (private) | `async function flushNarrativeSettleTimers<T>(op...` |
| 130 | fn | expectPathMissing | (private) | `async function expectPathMissing(targetPath: st...` |
| 388 | fn | createMockSubagent | (private) | `function createMockSubagent(responseText: strin...` |
| 402 | fn | createMockLogger | (private) | `function createMockLogger() {` |
| 1071 | fn | deferred | (private) | `function deferred<T>(): Deferred<T> {` |
| 1082 | fn | createBlockingSubagent | (private) | `function createBlockingSubagent() {` |
| 1099 | fn | createMockLogger | (private) | `function createMockLogger() {` |
| 1103 | fn | drainMicrotasks | (private) | `async function drainMicrotasks(rounds = 30): Pr...` |
