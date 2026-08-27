# apps/ios/WatchApp/Sources/WatchInboxView.swift

[← Back to Module](../modules/apps-ios-WatchApp-Sources/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1652
- **Language:** Swift
- **Symbols:** 53
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 5 | enum | WatchTextValue | (private) | `enum WatchTextValue` |
| 19 | struct | WatchInboxView | (internal) | `struct WatchInboxView` |
| 45 | struct | WatchControlSurfaceView | (private) | `struct WatchControlSurfaceView` |
| 492 | fn | approvalDecisionSubtitle | (private) | `private func approvalDecisionSubtitle(_ record:...` |
| 509 | fn | approvalAccessory | (private) | `private func approvalAccessory(_ record: WatchE...` |
| 519 | fn | approvalRiskText | (private) | `private func approvalRiskText(_ risk: WatchRisk...` |
| 585 | fn | roleTitle | (private) | `private func roleTitle(_ role: String) -> String` |
| 596 | fn | actionSubtitle | (private) | `private func actionSubtitle(_ action: WatchProm...` |
| 607 | fn | expiryText | (private) | `private func expiryText(_ expiresAtMs: Int64?) ...` |
| 620 | enum | WatchClawStyle | (internal) | `enum WatchClawStyle` |
| 650 | enum | WatchAvatarSource | (private) | `enum WatchAvatarSource` |
| 651 | fn | normalized | (internal) | `static func normalized(_ value: String?) -> Str...` |
| 655 | fn | dataImage | (internal) | `static func dataImage(from source: String?) -> ...` |
| 669 | fn | remoteURL | (internal) | `static func remoteURL(from source: String?) -> ...` |
| 682 | struct | WatchClawAvatar | (private) | `struct WatchClawAvatar` |
| 747 | struct | WatchFaceHeader | (private) | `struct WatchFaceHeader` |
| 778 | struct | WatchHeroCard | (private) | `struct WatchHeroCard` |
| 819 | struct | WatchDetailText | (private) | `struct WatchDetailText` |
| 838 | struct | WatchCompactStatusStrip | (private) | `struct WatchCompactStatusStrip` |
| 863 | struct | WatchCompactMetric | (private) | `struct WatchCompactMetric` |
| 879 | struct | WatchPrimaryLabel | (private) | `struct WatchPrimaryLabel` |
| 898 | struct | WatchVoiceGlyph | (private) | `struct WatchVoiceGlyph` |
| 911 | struct | WatchPageRail | (private) | `struct WatchPageRail` |
| 928 | struct | WatchSecondaryLabel | (private) | `struct WatchSecondaryLabel` |
| 948 | struct | WatchSecondaryButton | (private) | `struct WatchSecondaryButton` |
| 960 | struct | WatchStackCard | (private) | `struct WatchStackCard` |
| 1013 | struct | WatchActionCard | (private) | `struct WatchActionCard` |
| 1030 | struct | WatchDecisionButton | (private) | `struct WatchDecisionButton` |
| 1053 | struct | WatchTinyStatus | (private) | `struct WatchTinyStatus` |
| 1065 | struct | WatchApprovalWarning | (private) | `struct WatchApprovalWarning` |
| 1076 | struct | WatchApprovalCommandReview | (private) | `struct WatchApprovalCommandReview` |
| 1105 | enum | WatchExecApprovalDisplay | (private) | `enum WatchExecApprovalDisplay` |
| 1106 | fn | warningText | (internal) | `static func warningText(_ value: String?) -> St...` |
| 1110 | fn | statusText | (internal) | `static func statusText(for record: WatchExecApp...` |
| 1121 | struct | WatchChatBubble | (private) | `struct WatchChatBubble` |
| 1178 | struct | WatchChatTimelineView | (private) | `struct WatchChatTimelineView` |
| 1262 | fn | sendMessage | (private) | `private func sendMessage(_ text: String) -> Str...` |
| 1278 | fn | startVoiceTurn | (private) | `private func startVoiceTurn()` |
| 1286 | fn | handleCompletedVoiceTurn | (private) | `private func handleCompletedVoiceTurn(commandId...` |
| 1297 | fn | cancelVoiceTurn | (private) | `private func cancelVoiceTurn()` |
| 1302 | fn | scheduleVoiceReplyTimeout | (private) | `private func scheduleVoiceReplyTimeout()` |
| 1313 | struct | WatchChatEmptyState | (private) | `struct WatchChatEmptyState` |
| 1344 | struct | WatchMiniUserDot | (private) | `struct WatchMiniUserDot` |
| 1357 | struct | WatchChatComposer | (private) | `struct WatchChatComposer` |
| 1440 | enum | WatchNativeTextInput | (private) | `enum WatchNativeTextInput` |
| 1441 | fn | present | (internal) | `@MainActor   static func present(     suggestio...` |
| 1459 | fn | stringValue | (private) | `private static func stringValue(_ result: Any) ...` |
| 1471 | struct | WatchExecApprovalListView | (private) | `struct WatchExecApprovalListView` |
| 1508 | fn | metadataLine | (private) | `private func metadataLine(for record: WatchExec...` |
| 1525 | fn | expiresText | (private) | `private static func expiresText(_ expiresAtMs: ...` |
| 1538 | struct | WatchExecApprovalDetailView | (private) | `struct WatchExecApprovalDetailView` |
| 1628 | fn | riskText | (private) | `private func riskText(_ risk: WatchRiskLevel?) ...` |
| 1641 | fn | expiresText | (private) | `private static func expiresText(_ expiresAtMs: ...` |
