# apps/ios/Sources/Design/CommandCenterTab.swift

[← Back to Module](../modules/apps-ios-Sources-Design/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1395
- **Language:** Swift
- **Symbols:** 47
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 4 | struct | CommandCenterTab | (internal) | `struct CommandCenterTab` |
| 138 | fn | threadTile | (private) | `private func threadTile(title: String, value: S...` |
| 212 | fn | dashboardActionRow | (private) | `private func dashboardActionRow(     title: Str...` |
| 239 | fn | usageTrend | (private) | `private func usageTrend(_ daily: [CostUsageDail...` |
| 253 | fn | usageCostText | (private) | `private func usageCostText(_ value: Double?) ->...` |
| 265 | fn | visibleOverviewSessions | (internal) | `static func visibleOverviewSessions(     _ sess...` |
| 290 | fn | usesSplitSectionsLayout | (internal) | `static func usesSplitSectionsLayout(     horizo...` |
| 298 | fn | shouldShowHeaderMark | (internal) | `static func shouldShowHeaderMark(     hasLeadin...` |
| 383 | fn | gatewayFact | (private) | `private func gatewayFact(icon: String, title: S...` |
| 479 | fn | cardHeader | (private) | `private func cardHeader(title: String) -> some ...` |
| 607 | fn | open | (private) | `private func open(_ route: WorkRoute, unread: B...` |
| 617 | fn | open | (private) | `private func open(_ session: OpenClawChatSessio...` |
| 621 | fn | openDefaultChatSession | (private) | `private func openDefaultChatSession()` |
| 625 | fn | patchSession | (private) | `private func patchSession(     _ session: OpenC...` |
| 644 | fn | deleteSession | (private) | `private func deleteSession(_ session: OpenClawC...` |
| 650 | fn | archiveSession | (private) | `private func archiveSession(_ session: OpenClaw...` |
| 662 | fn | forkSession | (private) | `private func forkSession(_ session: OpenClawCha...` |
| 676 | fn | performSessionMutation | (private) | `private func performSessionMutation(     resetA...` |
| 695 | fn | refreshRecentSessionsIfNeeded | (private) | `private func refreshRecentSessionsIfNeeded() async` |
| 705 | fn | applyCachedSessions | (private) | `private func applyCachedSessions() async` |
| 710 | fn | applySessions | (private) | `private func applySessions(_ sessions: [OpenCla...` |
| 719 | fn | sessionChoices | (private) | `private static func sessionChoices(     _ sessi...` |
| 728 | fn | sessionWorkItem | (internal) | `static func sessionWorkItem(     for session: O...` |
| 747 | fn | sessionTitle | (internal) | `static func sessionTitle(_ session: OpenClawCha...` |
| 767 | fn | redactedSessionTitle | (private) | `fileprivate static func redactedSessionTitle(fo...` |
| 786 | fn | humanizedSessionKey | (private) | `fileprivate static func humanizedSessionKey(_ k...` |
| 806 | fn | sessionDetail | (internal) | `static func sessionDetail(_ session: OpenClawCh...` |
| 814 | fn | relativeTimeText | (internal) | `static func relativeTimeText(     forMillisecon...` |
| 891 | fn | normalized | (private) | `private func normalized(_ value: String?) -> St...` |
| 895 | fn | normalized | (private) | `private static func normalized(_ value: String?...` |
| 903 | struct | CommandSessionsScreen | (internal) | `struct CommandSessionsScreen` |
| 1134 | fn | sectionHeader | (private) | `@ViewBuilder   private func sectionHeader(_ sec...` |
| 1151 | fn | groupMenu | (private) | `@ViewBuilder   private func groupMenu(for group...` |
| 1193 | fn | commitGroupEditor | (private) | `private func commitGroupEditor()` |
| 1211 | fn | deleteGroup | (private) | `private func deleteGroup(_ group: String)` |
| 1217 | fn | updateStoredGroups | (private) | `private func updateStoredGroups(_ transform: ([...` |
| 1225 | fn | patchGroupMembers | (private) | `private func patchGroupMembers(_ group: String,...` |
| 1261 | fn | sessionRow | (private) | `private func sessionRow(_ session: OpenClawChat...` |
| 1286 | fn | open | (private) | `private func open(_ session: OpenClawChatSessio...` |
| 1290 | fn | openSessionKey | (private) | `private func openSessionKey(_ key: String, unre...` |
| 1296 | fn | patchSession | (private) | `private func patchSession(     _ session: OpenC...` |
| 1315 | fn | deleteSession | (private) | `private func deleteSession(_ session: OpenClawC...` |
| 1321 | fn | toggleArchived | (private) | `private func toggleArchived(_ session: OpenClaw...` |
| 1334 | fn | forkSession | (private) | `private func forkSession(_ session: OpenClawCha...` |
| 1346 | fn | performMutation | (private) | `private func performMutation(     resetActiveSe...` |
| 1363 | fn | refreshSessions | (private) | `private func refreshSessions() async` |
| 1387 | mod | extension NodeAppModel | (internal) | - |
