# src/auto-reply/reply/followup-runner.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 7215
- **Language:** TypeScript
- **Symbols:** 30
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 67 | fn | debugFollowupTest | (private) | `function debugFollowupTest(message: string): vo...` |
| 74 | fn | joinPromptSections | (private) | `function joinPromptSections(...sections: Array<...` |
| 84 | fn | createTestUserTurnRecorder | (private) | `function createTestUserTurnRecorder(message: Pe...` |
| 92 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 99 | fn | requireMockCallArg | (private) | `function requireMockCallArg(` |
| 110 | fn | requireLastMockCallArg | (private) | `function requireLastMockCallArg(` |
| 122 | fn | expectBlockReplyText | (private) | `function expectBlockReplyText(onBlockReply: { m...` |
| 130 | fn | expectNoBlockReplyText | (private) | `function expectNoBlockReplyText(` |
| 141 | fn | expectNoBlockReplyTextIncludes | (private) | `function expectNoBlockReplyTextIncludes(` |
| 152 | fn | registerFollowupTestSessionStore | (private) | `function registerFollowupTestSessionStore(` |
| 166 | fn | incrementRunCompactionCountForFollowupTest | (private) | `async function incrementRunCompactionCountForFo...` |
| 217 | fn | getFollowupTestQueue | (private) | `function getFollowupTestQueue(key: string): {` |
| 234 | fn | clearFollowupQueueForFollowupTest | (private) | `function clearFollowupQueueForFollowupTest(key:...` |
| 245 | fn | enqueueFollowupRunForFollowupTest | (private) | `function enqueueFollowupRunForFollowupTest(` |
| 267 | fn | refreshQueuedFollowupSessionForFollowupTest | (private) | `function refreshQueuedFollowupSessionForFollowu...` |
| 297 | fn | rewrite | (private) | `const rewrite = (run?: FollowupRun["run"]) => {` |
| 328 | fn | persistRunSessionUsageForFollowupTest | (private) | `async function persistRunSessionUsageForFollowu...` |
| 386 | fn | loadFreshFollowupRunnerModuleForTest | (private) | `async function loadFreshFollowupRunnerModuleFor...` |
| 541 | fn | setFastFollowupCliBackendDeps | (private) | `function setFastFollowupCliBackendDeps(): void {` |
| 680 | fn | createQueuedRun | (private) | `function createQueuedRun(` |
| 1070 | fn | releaseBarrier | (private) | `let releaseBarrier = () => {};` |
| 1315 | fn | normalizeComparablePath | (private) | `async function normalizeComparablePath(filePath...` |
| 1320 | fn | mockCompactionRun | (private) | `function mockCompactionRun(params: {` |
| 1340 | fn | createAsyncReplySpy | (private) | `function createAsyncReplySpy() {` |
| 4960 | fn | createMessagingDedupeRunner | (private) | `function createMessagingDedupeRunner(` |
| 4992 | fn | runMessagingCase | (private) | `async function runMessagingCase(params: {` |
| 5027 | fn | makeTextReplyDedupeResult | (private) | `function makeTextReplyDedupeResult(overrides?: ...` |
| 5788 | fn | releaseDelivery | (private) | `let releaseDelivery = () => {};` |
| 6954 | fn | runTypingCase | (private) | `async function runTypingCase(agentResult: Recor...` |
| 6972 | fn | expectTypingCleanup | (private) | `function expectTypingCleanup(typing: ReturnType...` |
