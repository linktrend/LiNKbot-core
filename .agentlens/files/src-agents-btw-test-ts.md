# src/agents/btw.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2739
- **Language:** TypeScript
- **Symbols:** 31
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 250 | type | RunBtwSideQuestionParams | (private) | - |
| 271 | fn | makeAsyncEvents | (private) | `function makeAsyncEvents(events: unknown[]) {` |
| 283 | fn | createSessionEntry | (private) | `function createSessionEntry(overrides: Partial<...` |
| 292 | fn | createAssistantDoneEvent | (private) | `function createAssistantDoneEvent(content: unkn...` |
| 311 | fn | createDoneEvent | (private) | `function createDoneEvent(text: string) {` |
| 315 | fn | createThinkingOnlyDoneEvent | (private) | `function createThinkingOnlyDoneEvent(thinking: ...` |
| 319 | fn | mockDoneAnswer | (private) | `function mockDoneAnswer(text: string) {` |
| 323 | fn | mockCliOutput | (private) | `function mockCliOutput(output: { text: string; ...` |
| 331 | fn | registerCodexSideQuestionHarness | (private) | `function registerCodexSideQuestionHarness(` |
| 346 | fn | supportsPreparedOpenAIAuth | (private) | `function supportsPreparedOpenAIAuth(ctx: Parame...` |
| 367 | fn | runSideQuestion | (private) | `function runSideQuestion(overrides: Partial<Run...` |
| 382 | fn | runMathSideQuestion | (private) | `function runMathSideQuestion(overrides: Partial...` |
| 389 | fn | clearBuiltSessionMessages | (private) | `function clearBuiltSessionMessages() {` |
| 393 | fn | createUserTranscriptMessage | (private) | `function createUserTranscriptMessage(content: u...` |
| 401 | fn | createAssistantTranscriptMessage | (private) | `function createAssistantTranscriptMessage(` |
| 425 | fn | createTranscriptEntry | (private) | `function createTranscriptEntry(params: { id: st...` |
| 434 | fn | mockTranscriptEntries | (private) | `function mockTranscriptEntries(entries: unknown...` |
| 438 | fn | mockActiveTranscript | (private) | `function mockActiveTranscript(messages: unknown...` |
| 445 | fn | mockCall | (private) | `function mockCall(` |
| 456 | fn | mockArg | (private) | `function mockArg(` |
| 464 | fn | runMathSideQuestionAndCaptureContext | (private) | `async function runMathSideQuestionAndCaptureCon...` |
| 471 | fn | expectRecordFields | (private) | `function expectRecordFields(` |
| 485 | fn | streamContext | (private) | `function streamContext(callIndex = 0): {` |
| 499 | fn | contextMessages | (private) | `function contextMessages(context: unknown): Arr...` |
| 507 | fn | expectTextBlockContains | (private) | `function expectTextBlockContains(block: unknown...` |
| 513 | fn | firstTextBlockIncludes | (private) | `function firstTextBlockIncludes(message: Record...` |
| 522 | fn | expectNoAssistantMessages | (private) | `function expectNoAssistantMessages(context: unk...` |
| 530 | fn | expectSanitizedAssistantContext | (private) | `function expectSanitizedAssistantContext(contex...` |
| 541 | fn | expectSeedOnlyUserContext | (private) | `function expectSeedOnlyUserContext(context: unk...` |
| 551 | fn | mockOpenAIPlatformProfile | (private) | `function mockOpenAIPlatformProfile(): void {` |
| 2183 | fn | onPayload | (private) | `const onPayload = (options as { onPayload?: (pa...` |
