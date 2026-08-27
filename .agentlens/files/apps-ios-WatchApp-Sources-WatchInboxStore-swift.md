# apps/ios/WatchApp/Sources/WatchInboxStore.swift

[← Back to Module](../modules/apps-ios-WatchApp-Sources/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1624
- **Language:** Swift
- **Symbols:** 60
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 6 | class | WatchInboxStore | (internal) | `class WatchInboxStore` |
| 24 | method | init | (internal) | `init(       approvalId: String,       gatewaySt...` |
| 38 | method | init | (internal) | `init(from decoder: Decoder) throws` |
| 52 | fn | encode | (internal) | `func encode(to encoder: Encoder) throws` |
| 63 | fn | decodeLegacyOutcome | (private) | `private static func decodeLegacyOutcome(_ text:...` |
| 239 | method | init | (internal) | `init(     defaults: UserDefaults = .standard,  ...` |
| 294 | fn | execApprovalSnapshotRequestItems | (internal) | `func execApprovalSnapshotRequestItems(     gate...` |
| 337 | fn | beginExecApprovalReviewLoading | (internal) | `func beginExecApprovalReviewLoading()` |
| 347 | fn | markExecApprovalReviewLoaded | (internal) | `func markExecApprovalReviewLoaded()` |
| 353 | fn | markExecApprovalReviewUnavailable | (internal) | `func markExecApprovalReviewUnavailable(_ messag...` |
| 363 | fn | consume | (internal) | `func consume(message: WatchNotifyMessage, trans...` |
| 404 | fn | consume | (internal) | `func consume(     execApprovalPrompt message: W...` |
| 478 | fn | consume | (internal) | `@discardableResult   func consume(     execAppr...` |
| 619 | fn | consume | (internal) | `func consume(appSnapshot message: WatchAppSnaps...` |
| 666 | fn | consume | (internal) | `func consume(chatCompletion message: WatchChatC...` |
| 670 | fn | markAppSnapshotRequestStarted | (internal) | `func markAppSnapshotRequestStarted()` |
| 675 | fn | markAppSnapshotRequestResult | (internal) | `func markAppSnapshotRequestResult(_ result: Wat...` |
| 691 | fn | makeAppCommand | (internal) | `func makeAppCommand(_ command: WatchAppCommand,...` |
| 706 | fn | markAppCommandSending | (internal) | `func markAppCommandSending(_ command: WatchAppC...` |
| 711 | fn | markAppCommandBlocked | (internal) | `func markAppCommandBlocked(_ command: WatchAppC...` |
| 719 | fn | markAppCommandResult | (internal) | `func markAppCommandResult(_ result: WatchReplyS...` |
| 739 | mod | extension WatchInboxStore | (internal) | - |
| 740 | fn | consume | (internal) | `func consume(execApprovalResolved message: Watc...` |
| 757 | fn | consume | (internal) | `func consume(execApprovalExpired message: Watch...` |
| 784 | fn | terminalExecApprovalOutcomeText | (internal) | `func terminalExecApprovalOutcomeText(     appro...` |
| 801 | fn | selectExecApproval | (internal) | `func selectExecApproval(id: String, gatewayStab...` |
| 812 | fn | beginExecApprovalDecision | (internal) | `func beginExecApprovalDecision(     approvalId:...` |
| 845 | fn | completeExecApprovalDecision | (internal) | `func completeExecApprovalDecision(     approval...` |
| 890 | fn | upsertExecApproval | (private) | `private func upsertExecApproval(     _ approval...` |
| 943 | fn | mergedExecApprovalRecord | (private) | `private func mergedExecApprovalRecord(     appr...` |
| 969 | fn | snapshotCanReplace | (private) | `private static func snapshotCanReplace(     rec...` |
| 985 | fn | isExecApprovalPromptSupersededBySnapshot | (private) | `private func isExecApprovalPromptSupersededBySn...` |
| 1011 | fn | removeExecApproval | (private) | `private func removeExecApproval(id: String, gat...` |
| 1037 | mod | extension WatchInboxStore | (internal) | - |
| 1038 | fn | routeGatewayPayload | (private) | `private func routeGatewayPayload(_ payload: Def...` |
| 1066 | fn | acceptsGatewayOwner | (private) | `private func acceptsGatewayOwner(_ gatewayStabl...` |
| 1073 | fn | replayDeferredGatewayPayloads | (internal) | `@discardableResult   func replayDeferredGateway...` |
| 1166 | mod | extension WatchInboxStore | (internal) | - |
| 1167 | fn | clearMessagePrompt | (private) | `private func clearMessagePrompt()` |
| 1189 | fn | removeExecApprovalNotifications | (private) | `private func removeExecApprovalNotifications(ap...` |
| 1203 | fn | hasLiveLegacyNotificationCollision | (private) | `private func hasLiveLegacyNotificationCollision...` |
| 1222 | fn | removeLocalNotifications | (private) | `private func removeLocalNotifications(identifie...` |
| 1248 | fn | execApprovalNotificationIdentifier | (private) | `private static func execApprovalNotificationIde...` |
| 1254 | fn | legacyExecApprovalNotificationIdentifier | (private) | `private static func legacyExecApprovalNotificat...` |
| 1261 | fn | execApprovalOwnerKey | (private) | `private static func execApprovalOwnerKey(     a...` |
| 1275 | fn | isExecApprovalTerminal | (private) | `private func isExecApprovalTerminal(approvalId:...` |
| 1288 | fn | recordExecApprovalTerminal | (private) | `@discardableResult   private func recordExecApp...` |
| 1330 | fn | pruneExecApprovalTerminalTombstones | (private) | `private func pruneExecApprovalTerminalTombstone...` |
| 1339 | fn | pruneExpiredExecApprovals | (private) | `private func pruneExpiredExecApprovals(nowMs: I...` |
| 1353 | fn | ensureValidExecApprovalSelection | (private) | `private func ensureValidExecApprovalSelection()` |
| 1365 | fn | restorePersistedState | (private) | `private func restorePersistedState()` |
| 1472 | fn | persistState | (private) | `private func persistState()` |
| 1513 | fn | deliveryKey | (private) | `private func deliveryKey(messageID: String?, ti...` |
| 1520 | fn | ensureNotificationAuthorization | (private) | `private func ensureNotificationAuthorization() ...` |
| 1531 | fn | mapHapticRisk | (private) | `private func mapHapticRisk(_ risk: String?) -> ...` |
| 1542 | fn | makeReplyDraft | (internal) | `func makeReplyDraft(action: WatchPromptAction) ...` |
| 1555 | fn | markReplySending | (internal) | `func markReplySending(actionLabel: String)` |
| 1565 | fn | markReplyResult | (internal) | `func markReplyResult(_ result: WatchReplySendRe...` |
| 1592 | fn | postLocalNotification | (private) | `private func postLocalNotification(     identif...` |
| 1620 | fn | nowMs | (private) | `private static func nowMs() -> Int64` |
