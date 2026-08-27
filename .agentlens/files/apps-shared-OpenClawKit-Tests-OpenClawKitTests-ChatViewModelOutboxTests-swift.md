# apps/shared/OpenClawKit/Tests/OpenClawKitTests/ChatViewModelOutboxTests.swift

[← Back to Module](../modules/apps-shared-OpenClawKit-Tests-OpenClawKitTests/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2592
- **Language:** Swift
- **Symbols:** 100
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 5 | fn | makeOutboxDatabaseURL | (private) | `private func makeOutboxDatabaseURL() throws -> URL` |
| 12 | fn | outboxTestCommand | (private) | `private func outboxTestCommand(id: String, text...` |
| 25 | fn | userTexts | (private) | `private func userTexts(_ vm: OpenClawChatViewMo...` |
| 34 | struct | OutboxSendError | (private) | `struct OutboxSendError` |
| 40 | class | OutboxTransportState | (private) | `actor OutboxTransportState` |
| 58 | fn | setHeldSendGate | (internal) | `func setHeldSendGate(_ gate: DeleteGate?)` |
| 62 | fn | setCommandListGate | (internal) | `func setCommandListGate(_ gate: DeleteGate?)` |
| 66 | fn | waitUntilCommandListStarted | (internal) | `func waitUntilCommandListStarted() async` |
| 70 | fn | awaitCommandListGate | (internal) | `func awaitCommandListGate() async` |
| 77 | fn | setSessionListGate | (internal) | `func setSessionListGate(_ gate: DeleteGate?)` |
| 81 | fn | awaitSessionListGate | (internal) | `func awaitSessionListGate() async` |
| 88 | fn | setStaleHistoryRows | (internal) | `func setStaleHistoryRows(_ rows: [AnyCodable]?)` |
| 99 | method | init | (internal) | `init(healthy: Bool, sendFails: Bool)` |
| 104 | fn | setHistoryFails | (internal) | `func setHistoryFails(_ fails: Bool)` |
| 108 | fn | setSessionListFails | (internal) | `func setSessionListFails(_ fails: Bool)` |
| 112 | fn | recordHistoryRequest | (internal) | `func recordHistoryRequest(agentID: String?)` |
| 117 | fn | setHealthy | (internal) | `func setHealthy(_ healthy: Bool)` |
| 121 | fn | setSessionRoutingContract | (internal) | `func setSessionRoutingContract(_ contract: String)` |
| 125 | fn | replaceRoute | (internal) | `func replaceRoute()` |
| 129 | fn | setSendFails | (internal) | `func setSendFails(_ fails: Bool)` |
| 133 | fn | setSendFailsAfterRecording | (internal) | `func setSendFailsAfterRecording(_ fails: Bool)` |
| 137 | fn | setSendRejects | (internal) | `func setSendRejects(_ rejects: Bool)` |
| 141 | fn | setSendResponseErrors | (internal) | `func setSendResponseErrors(_ rejects: Bool)` |
| 145 | fn | setSendRoutingChanged | (internal) | `func setSendRoutingChanged(_ changed: Bool)` |
| 149 | fn | recordSend | (internal) | `func recordSend(     sessionKey: String,     ag...` |
| 168 | class | OutboxTestTransport | (private) | `class OutboxTestTransport` |
| 176 | method | init | (internal) | `init(     healthy: Bool,     sendFails: Bool = ...` |
| 194 | fn | goOnline | (internal) | `func goOnline() async` |
| 199 | fn | emit | (internal) | `func emit(_ event: OpenClawChatTransportEvent)` |
| 203 | fn | requestHistory | (internal) | `func requestHistory(sessionKey: String) async t...` |
| 215 | fn | listCommands | (internal) | `func listCommands(sessionKey _: String) async t...` |
| 220 | fn | requestHistory | (private) | `private func requestHistory(     sessionKey: St...` |
| 263 | fn | sendMessage | (internal) | `func sendMessage(     sessionKey: String,     m...` |
| 279 | fn | sendMessage | (private) | `private func sendMessage(     sessionKey: Strin...` |
| 334 | fn | acquireOutboxRouteLease | (internal) | `func acquireOutboxRouteLease() async -> OpenCla...` |
| 380 | fn | releaseModelPatch | (internal) | `func releaseModelPatch()` |
| 384 | fn | waitUntilModelPatchStarted | (internal) | `func waitUntilModelPatchStarted() async` |
| 388 | fn | setSessionModel | (internal) | `func setSessionModel(sessionKey _: String, mode...` |
| 394 | fn | listSessions | (internal) | `func listSessions(     limit _: Int?,     searc...` |
| 409 | fn | requestHealth | (internal) | `func requestHealth(timeoutMs _: Int) async thro...` |
| 413 | fn | events | (internal) | `func events() -> AsyncStream<OpenClawChatTransp...` |
| 418 | fn | outboxSessionEntry | (private) | `private func outboxSessionEntry(   key: String,...` |
| 467 | fn | sendWhileOffline | (private) | `private func sendWhileOffline(_ vm: OpenClawCha...` |
| 481 | fn | queuedStateCount | (private) | `@MainActor private func queuedStateCount(_ vm: ...` |
| 489 | class | DelayingOutbox | (private) | `actor DelayingOutbox` |
| 497 | method | init | (internal) | `init(base: OpenClawChatSQLiteTranscriptCache)` |
| 505 | fn | setLoadDelayNanoseconds | (internal) | `func setLoadDelayNanoseconds(_ delay: UInt64)` |
| 509 | fn | setRecoveryAvailable | (internal) | `func setRecoveryAvailable(_ available: Bool)` |
| 513 | fn | setTerminalWritesAvailable | (internal) | `func setTerminalWritesAvailable(_ available: Bool)` |
| 517 | fn | waitUntilRecoveryAttempted | (internal) | `func waitUntilRecoveryAttempted() async` |
| 521 | fn | holdEnqueue | (internal) | `func holdEnqueue()` |
| 525 | fn | waitUntilEnqueueStarted | (internal) | `func waitUntilEnqueueStarted() async` |
| 529 | fn | releaseEnqueue | (internal) | `func releaseEnqueue() async` |
| 534 | fn | enqueueCommand | (internal) | `func enqueueCommand(_ command: OpenClawChatOutb...` |
| 542 | fn | loadCommands | (internal) | `func loadCommands() async -> [OpenClawChatOutbo...` |
| 549 | fn | loadCommandsIfAvailable | (internal) | `func loadCommandsIfAvailable() async -> [OpenCl...` |
| 556 | fn | recoverInterruptedSends | (internal) | `@discardableResult   func recoverInterruptedSen...` |
| 563 | fn | claimNextCommand | (internal) | `func claimNextCommand() async -> OpenClawChatOu...` |
| 567 | fn | markCommandQueued | (internal) | `func markCommandQueued(id: String, retryCount: ...` |
| 571 | fn | markCommandAwaitingConfirmation | (internal) | `func markCommandAwaitingConfirmation(id: String...` |
| 575 | fn | markCommandFailedIfPresent | (internal) | `func markCommandFailedIfPresent(     id: String...` |
| 584 | fn | markCommandRetriedIfPresent | (internal) | `func markCommandRetriedIfPresent(     id: Strin...` |
| 597 | fn | cancelCommand | (internal) | `func cancelCommand(id: String) async -> OpenCla...` |
| 601 | fn | confirmCommand | (internal) | `func confirmCommand(id: String) async -> OpenCl...` |
| 609 | class | SnapshotHoldingOutbox | (private) | `actor SnapshotHoldingOutbox` |
| 614 | method | init | (internal) | `init(base: OpenClawChatSQLiteTranscriptCache)` |
| 618 | fn | waitUntilSnapshotCaptured | (internal) | `func waitUntilSnapshotCaptured() async` |
| 622 | fn | holdNextLoad | (internal) | `func holdNextLoad()` |
| 628 | fn | releaseSnapshot | (internal) | `func releaseSnapshot() async` |
| 636 | fn | enqueueCommand | (internal) | `func enqueueCommand(_ command: OpenClawChatOutb...` |
| 640 | fn | loadCommands | (internal) | `func loadCommands() async -> [OpenClawChatOutbo...` |
| 650 | fn | loadCommandsIfAvailable | (internal) | `func loadCommandsIfAvailable() async -> [OpenCl...` |
| 660 | fn | recoverInterruptedSends | (internal) | `@discardableResult   func recoverInterruptedSen...` |
| 665 | fn | claimNextCommand | (internal) | `func claimNextCommand() async -> OpenClawChatOu...` |
| 669 | fn | markCommandQueued | (internal) | `func markCommandQueued(id: String, retryCount: ...` |
| 673 | fn | markCommandAwaitingConfirmation | (internal) | `func markCommandAwaitingConfirmation(id: String...` |
| 677 | fn | markCommandFailedIfPresent | (internal) | `func markCommandFailedIfPresent(     id: String...` |
| 685 | fn | markCommandRetriedIfPresent | (internal) | `func markCommandRetriedIfPresent(     id: Strin...` |
| 698 | fn | cancelCommand | (internal) | `func cancelCommand(id: String) async -> OpenCla...` |
| 702 | fn | confirmCommand | (internal) | `func confirmCommand(id: String) async -> OpenCl...` |
| 710 | class | CancellationHoldingOutbox | (private) | `actor CancellationHoldingOutbox` |
| 714 | method | init | (internal) | `init(base: OpenClawChatSQLiteTranscriptCache)` |
| 718 | fn | waitUntilCanceled | (internal) | `func waitUntilCanceled() async` |
| 722 | fn | releaseCancellation | (internal) | `func releaseCancellation() async` |
| 730 | fn | enqueueCommand | (internal) | `func enqueueCommand(_ command: OpenClawChatOutb...` |
| 734 | fn | loadCommands | (internal) | `func loadCommands() async -> [OpenClawChatOutbo...` |
| 738 | fn | loadCommandsIfAvailable | (internal) | `func loadCommandsIfAvailable() async -> [OpenCl...` |
| 742 | fn | recoverInterruptedSends | (internal) | `@discardableResult   func recoverInterruptedSen...` |
| 747 | fn | claimNextCommand | (internal) | `func claimNextCommand() async -> OpenClawChatOu...` |
| 751 | fn | markCommandQueued | (internal) | `func markCommandQueued(id: String, retryCount: ...` |
| 755 | fn | markCommandAwaitingConfirmation | (internal) | `func markCommandAwaitingConfirmation(id: String...` |
| 759 | fn | markCommandFailedIfPresent | (internal) | `func markCommandFailedIfPresent(     id: String...` |
| 767 | fn | markCommandRetriedIfPresent | (internal) | `func markCommandRetriedIfPresent(     id: Strin...` |
| 780 | fn | cancelCommand | (internal) | `func cancelCommand(id: String) async -> OpenCla...` |
| 787 | fn | confirmCommand | (internal) | `func confirmCommand(id: String) async -> OpenCl...` |
| 793 | struct | ChatViewModelOutboxTests | (internal) | `struct ChatViewModelOutboxTests` |
| 2124 | class | DeleteGate | (private) | `actor DeleteGate` |
| 2127 | fn | open | (internal) | `func open()` |
| 2135 | fn | wait | (internal) | `func wait() async` |
| 2144 | mod | extension ChatViewModelOutboxTests | (internal) | - |
