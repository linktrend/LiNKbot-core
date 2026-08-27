# extensions/telegram/src/polling-session.test.ts

[← Back to Module](../modules/extensions-telegram-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 5101
- **Language:** TypeScript
- **Symbols:** 54
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 35 | fn | resolveSpooledUpdateRetryDelayMs | (private) | `const resolveSpooledUpdateRetryDelayMs = (` |
| 39 | fn | shouldDeadLetterRetryableSpooledUpdate | (private) | `const shouldDeadLetterRetryableSpooledUpdate = (` |
| 47 | fn | waitForTelegramTestState | (private) | `async function waitForTelegramTestState<T>(asse...` |
| 122 | type | TelegramMessageProcessingResult | (private) | - |
| 124 | type | TelegramSpooledReplayDeferredParticipant | (private) | - |
| 126 | fn | claimSpooledUpdate | (private) | `async function claimSpooledUpdate(update: Teleg...` |
| 133 | fn | createTelegramMessageDispatchReplayForgetError | (private) | `async function createTelegramMessageDispatchRep...` |
| 134 | type | ReplayGuard | (private) | - |
| 135 | type | ReplayClaim | (private) | - |
| 164 | type | TelegramApiMiddleware | (private) | - |
| 169 | type | DrainPendingDeliveriesCall | (private) | - |
| 181 | type | WorkerPollSuccessListener | (private) | - |
| 187 | type | WorkerPollErrorListener | (private) | - |
| 193 | type | WorkerMessageListener | (private) | - |
| 194 | type | AsyncVoidFn | (private) | - |
| 195 | type | MockCallSource | (private) | - |
| 196 | type | TelegramPollingTestDatabase | (private) | - |
| 203 | fn | installTelegramIngressQueueRuntime | (private) | `function installTelegramIngressQueueRuntime(res...` |
| 214 | fn | mockObjectArg | (private) | `function mockObjectArg(` |
| 231 | fn | logContains | (private) | `function logContains(source: MockCallSource, te...` |
| 235 | fn | expectLogIncludes | (private) | `function expectLogIncludes(source: MockCallSour...` |
| 239 | fn | expectLogExcludes | (private) | `function expectLogExcludes(source: MockCallSour...` |
| 243 | fn | statusPatches | (private) | `function statusPatches(source: MockCallSource):...` |
| 253 | fn | expectPollingConnectedPatch | (private) | `function expectPollingConnectedPatch(patch: Rec...` |
| 261 | fn | makeBot | (private) | `function makeBot() {` |
| 272 | fn | installPollingStallWatchdogHarness | (private) | `function installPollingStallWatchdogHarness(dat...` |
| 366 | fn | expectTelegramBotTransportSequence | (private) | `function expectTelegramBotTransportSequence(fir...` |
| 372 | fn | expectDrainPendingDeliveriesCall | (private) | `function expectDrainPendingDeliveriesCall(index...` |
| 380 | fn | makeTelegramTransport | (private) | `function makeTelegramTransport() {` |
| 388 | fn | mockRestartAfterPollingError | (private) | `function mockRestartAfterPollingError(error: un...` |
| 411 | fn | createPollingSessionWithTransportRestart | (private) | `function createPollingSessionWithTransportResta...` |
| 419 | fn | createPollingSession | (private) | `function createPollingSession(params: {` |
| 450 | fn | mockBotCapturingApiMiddleware | (private) | `function mockBotCapturingApiMiddleware(botStop:...` |
| 467 | fn | mockLongRunningPollingCycle | (private) | `function mockLongRunningPollingCycle(runnerStop...` |
| 483 | fn | waitForApiMiddleware | (private) | `async function waitForApiMiddleware(` |
| 496 | type | TestTelegramUpdate | (private) | - |
| 506 | fn | topicUpdate | (private) | `function topicUpdate(updateId: number, threadId...` |
| 518 | fn | directUpdate | (private) | `function directUpdate(updateId: number, chatId:...` |
| 528 | fn | waitForAbortSignal | (private) | `async function waitForAbortSignal(signal: Abort...` |
| 537 | fn | writeSpooledTestUpdates | (private) | `async function writeSpooledTestUpdates(` |
| 547 | fn | pendingUpdateIds | (private) | `async function pendingUpdateIds(spoolDir: strin...` |
| 551 | fn | claimedAtForUpdate | (private) | `async function claimedAtForUpdate(spoolDir: str...` |
| 561 | fn | installSpooledClaimRefreshHarness | (private) | `function installSpooledClaimRefreshHarness(): {` |
| 594 | fn | normalizeTelegramTestAccountId | (private) | `function normalizeTelegramTestAccountId(spoolDi...` |
| 599 | fn | telegramTestQueueName | (private) | `function telegramTestQueueName(spoolDir: string...` |
| 603 | fn | openTelegramSpoolTestKysely | (private) | `function openTelegramSpoolTestKysely(spoolDir: ...` |
| 613 | fn | failedUpdateIds | (private) | `async function failedUpdateIds(spoolDir: string...` |
| 627 | fn | failedUpdateReasons | (private) | `async function failedUpdateReasons(` |
| 643 | fn | adoptClaimOwner | (private) | `async function adoptClaimOwner(params: {` |
| 665 | fn | withTempSpool | (private) | `async function withTempSpool<T>(fn: (spoolDir: ...` |
| 675 | fn | createIdleIngressWorker | (private) | `function createIdleIngressWorker() {` |
| 695 | fn | startIsolatedIngressSession | (private) | `function startIsolatedIngressSession(params: {` |
| 3731 | fn | createBot | (private) | `const createBot = (handleUpdate: (update: { upd...` |
| 5088 | fn | toLintErrorObject | (private) | `function toLintErrorObject(value: unknown, fall...` |
