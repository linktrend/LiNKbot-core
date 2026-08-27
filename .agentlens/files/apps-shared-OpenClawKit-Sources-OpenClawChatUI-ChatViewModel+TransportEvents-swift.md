# apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatViewModel+TransportEvents.swift

[← Back to Module](../modules/apps-shared-OpenClawKit-Sources-OpenClawChatUI/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1036
- **Language:** Swift
- **Symbols:** 40
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 7 | class | PendingRunOwnerReference | (private) | `class PendingRunOwnerReference` |
| 10 | method | init | (internal) | `init(_ value: OpenClawChatViewModel)` |
| 16 | mod | extension OpenClawChatViewModel | (internal) | - |
| 17 | fn | resolveInlineWidgetResource | (internal) | `func resolveInlineWidgetResource(     path: Str...` |
| 23 | fn | handleTransportEvent | (internal) | `func handleTransportEvent(_ evt: OpenClawChatTr...` |
| 90 | fn | handleSessionMessageEvent | (private) | `private func handleSessionMessageEvent(_ payloa...` |
| 128 | fn | handleChatEvent | (private) | `private func handleChatEvent(_ chat: OpenClawCh...` |
| 210 | fn | appendFinalChatMessageIfPresent | (private) | `private func appendFinalChatMessageIfPresent(_ ...` |
| 268 | fn | isAssistantMessage | (internal) | `static func isAssistantMessage(_ message: OpenC...` |
| 272 | fn | messageWithTimestampIfNeeded | (private) | `private static func messageWithTimestampIfNeede...` |
| 289 | fn | handleAgentEvent | (private) | `private func handleAgentEvent(_ evt: OpenClawAg...` |
| 332 | fn | handleAgentLifecycleEvent | (private) | `private func handleAgentLifecycleEvent(_ evt: O...` |
| 365 | fn | lowercasedAgentEventString | (private) | `private static func lowercasedAgentEventString(...` |
| 369 | fn | agentEventBool | (private) | `private static func agentEventBool(_ value: Any...` |
| 379 | fn | agentLifecycleErrorMessage | (private) | `private static func agentLifecycleErrorMessage(...` |
| 396 | fn | finishPendingRunAfterTerminalOkSendAck | (internal) | `func finishPendingRunAfterTerminalOkSendAck(_ r...` |
| 405 | fn | finishPendingRunIfTerminalSendAck | (internal) | `func finishPendingRunIfTerminalSendAck(_ respon...` |
| 432 | fn | removePendingLocalUserEcho | (internal) | `func removePendingLocalUserEcho(for runId: String)` |
| 438 | fn | refreshIfPending | (private) | `private func refreshIfPending(     runId: Strin...` |
| 512 | fn | finishPendingRun | (private) | `private func finishPendingRun(runId: String, te...` |
| 526 | fn | isCurrentPendingRunOwner | (private) | `private func isCurrentPendingRunOwner(     runI...` |
| 536 | fn | clearPendingRunIfAssistantMessagePresent | (internal) | `@discardableResult   func clearPendingRunIfAssi...` |
| 545 | fn | hasUnansweredLatestUser | (internal) | `static func hasUnansweredLatestUser(in messages...` |
| 549 | fn | latestUserTurn | (internal) | `static func latestUserTurn(in messages: [OpenCl...` |
| 556 | fn | userTurn | (internal) | `static func userTurn(     at userIndex: [OpenCl...` |
| 583 | fn | hasAnsweredUser | (internal) | `static func hasAnsweredUser(     _ user: Latest...` |
| 623 | fn | hasAssistantMessage | (private) | `private static func hasAssistantMessage(     af...` |
| 637 | fn | hasAssistantMessageAfterLatestUser | (private) | `private static func hasAssistantMessageAfterLat...` |
| 652 | fn | assistantHapticEvent | (private) | `private static func assistantHapticEvent(     f...` |
| 665 | fn | assistantHapticEventAfterLatestUser | (internal) | `func assistantHapticEventAfterLatestUser() -> O...` |
| 672 | fn | assistantHapticEvent | (private) | `private func assistantHapticEvent(after timesta...` |
| 683 | fn | refreshHistoriesAfterOutboxFlush | (internal) | `func refreshHistoriesAfterOutboxFlush(     targ...` |
| 724 | fn | refreshHistoryAfterRun | (internal) | `@discardableResult   func refreshHistoryAfterRu...` |
| 755 | fn | armPendingRunOwner | (internal) | `func armPendingRunOwner(     runId: String,    ...` |
| 856 | fn | pendingRunWaitTimeout | (private) | `private static func pendingRunWaitTimeout(     ...` |
| 871 | fn | processPendingRunObservation | (private) | `private static func processPendingRunObservatio...` |
| 951 | fn | pendingRunRefreshDelay | (private) | `private static func pendingRunRefreshDelay(    ...` |
| 969 | fn | refreshPendingRunOwner | (private) | `private static func refreshPendingRunOwner(    ...` |
| 986 | fn | clearPendingRun | (internal) | `func clearPendingRun(     _ runId: String,     ...` |
| 1007 | fn | clearPendingRuns | (internal) | `func clearPendingRuns(     reason: String?,    ...` |
