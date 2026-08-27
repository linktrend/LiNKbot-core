# apps/ios/WatchApp/Sources/WatchInboxMessages.swift

[← Back to Module](../modules/apps-ios-WatchApp-Sources/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1091
- **Language:** Swift
- **Symbols:** 53
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 15 | struct | WatchExecApprovalIdentityKey | (internal) | `struct WatchExecApprovalIdentityKey` |
| 22 | struct | WatchExecApprovalPromptMessage | (internal) | `struct WatchExecApprovalPromptMessage` |
| 28 | struct | WatchExecApprovalResolvedMessage | (internal) | `struct WatchExecApprovalResolvedMessage` |
| 36 | fn | parseTransportOutcome | (internal) | `static func parseTransportOutcome(_ value: Any?...` |
| 43 | struct | WatchExecApprovalExpiredMessage | (internal) | `struct WatchExecApprovalExpiredMessage` |
| 50 | struct | WatchExecApprovalSnapshotMessage | (internal) | `struct WatchExecApprovalSnapshotMessage` |
| 57 | method | init | (internal) | `init(     approvals: [WatchExecApprovalItem],  ...` |
| 80 | enum | WatchStatusLocalizationKey | (internal) | `enum WatchStatusLocalizationKey` |
| 214 | enum | WatchDeliveryStatusCode | (internal) | `enum WatchDeliveryStatusCode` |
| 222 | struct | WatchAppCommandStatus | (internal) | `struct WatchAppCommandStatus` |
| 227 | fn | localizedText | (internal) | `func localizedText(     localize: (WatchStatusL...` |
| 248 | fn | decodeLegacyLocalizedText | (internal) | `static func decodeLegacyLocalizedText(_ text: S...` |
| 259 | struct | WatchReplyStatus | (internal) | `struct WatchReplyStatus` |
| 264 | fn | localizedText | (internal) | `func localizedText(     localize: (WatchStatusL...` |
| 287 | fn | decodeLegacyLocalizedText | (internal) | `static func decodeLegacyLocalizedText(_ text: S...` |
| 298 | enum | WatchExecApprovalStatusCode | (internal) | `enum WatchExecApprovalStatusCode` |
| 306 | struct | WatchExecApprovalStatus | (internal) | `struct WatchExecApprovalStatus` |
| 310 | fn | localizedText | (internal) | `func localizedText(     localize: (WatchStatusL...` |
| 334 | fn | decodeLegacyLocalizedText | (internal) | `static func decodeLegacyLocalizedText(_ text: S...` |
| 341 | enum | WatchExecApprovalOutcomeCode | (internal) | `enum WatchExecApprovalOutcomeCode` |
| 354 | struct | WatchExecApprovalOutcome | (internal) | `struct WatchExecApprovalOutcome` |
| 357 | fn | localizedText | (internal) | `func localizedText(     localize: (WatchStatusL...` |
| 387 | fn | decodeLegacyLocalizedText | (internal) | `static func decodeLegacyLocalizedText(_ text: S...` |
| 413 | fn | resolved | (internal) | `static func resolved(     outcome: WatchExecApp...` |
| 449 | mod | extension WatchAppCommand | (internal) | - |
| 450 | fn | localizedLabel | (private) | `fileprivate func localizedLabel(     localize: ...` |
| 468 | mod | extension WatchExecApprovalDecision | (internal) | - |
| 469 | fn | localizedLabel | (private) | `fileprivate func localizedLabel(     localize: ...` |
| 481 | struct | WatchAppSnapshotMessage | (internal) | `struct WatchAppSnapshotMessage` |
| 498 | method | init | (internal) | `init(     gatewayStatus: OpenClawWatchAppStatus...` |
| 534 | fn | parsePayload | (internal) | `static func parsePayload(_ payload: [String: An...` |
| 596 | fn | localizedChatStatusText | (internal) | `static func localizedChatStatusText(     status...` |
| 637 | method | init | (internal) | `init(from decoder: Decoder) throws` |
| 699 | fn | encode | (internal) | `func encode(to encoder: Encoder) throws` |
| 719 | fn | parseStatus | (private) | `private static func parseStatus(     _ value: A...` |
| 741 | fn | decodeLegacyGatewayStatus | (private) | `private static func decodeLegacyGatewayStatus( ...` |
| 754 | fn | decodeLegacyTalkStatus | (private) | `private static func decodeLegacyTalkStatus(    ...` |
| 775 | fn | decodeLegacyChatStatus | (private) | `private static func decodeLegacyChatStatus(    ...` |
| 796 | fn | parseChatItem | (private) | `private static func parseChatItem(_ item: Any) ...` |
| 815 | fn | boolValue | (private) | `private static func boolValue(_ value: Any?) ->...` |
| 833 | struct | WatchNotifyMessage | (internal) | `struct WatchNotifyMessage` |
| 848 | struct | WatchExecApprovalRecord | (internal) | `struct WatchExecApprovalRecord` |
| 881 | method | init | (internal) | `init(     approval: WatchExecApprovalItem,     ...` |
| 903 | method | init | (internal) | `init(from decoder: Decoder) throws` |
| 923 | fn | encode | (internal) | `func encode(to encoder: Encoder) throws` |
| 938 | fn | decodeLegacyStatus | (private) | `private static func decodeLegacyStatus(_ text: ...` |
| 944 | mod | extension OpenClawWatchAppStatus | (internal) | - |
| 945 | fn | localizedText | (internal) | `func localizedText(     localize: (WatchStatusL...` |
| 985 | fn | localizedGatewayText | (private) | `private func localizedGatewayText(     localize...` |
| 1009 | fn | localizedTalkText | (private) | `private func localizedTalkText(     localize: (...` |
| 1044 | fn | localizedChatText | (private) | `private func localizedChatText(     localize: (...` |
| 1059 | fn | localizedPresentation | (private) | `private func localizedPresentation(     localiz...` |
| 1071 | fn | localizedGatewayProblemWithRequestID | (private) | `private func localizedGatewayProblemWithRequest...` |
