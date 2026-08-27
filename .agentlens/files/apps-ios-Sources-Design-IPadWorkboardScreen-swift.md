# apps/ios/Sources/Design/IPadWorkboardScreen.swift

[← Back to Module](../modules/apps-ios-Sources-Design/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1572
- **Language:** Swift
- **Symbols:** 56
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 4 | struct | IPadWorkboardScreen | (internal) | `struct IPadWorkboardScreen` |
| 255 | fn | newCardButton | (private) | `private func newCardButton(expands: Bool) -> so...` |
| 332 | fn | compactStatusChip | (private) | `private func compactStatusChip(_ status: String...` |
| 630 | fn | usesCompactTaskFlow | (internal) | `static func usesCompactTaskFlow(     horizontal...` |
| 637 | fn | workboardSubtitle | (internal) | `static func workboardSubtitle(boardScopeLabel: ...` |
| 644 | fn | compactWriteUnavailableMessage | (internal) | `static func compactWriteUnavailableMessage(canR...` |
| 650 | fn | boardScopeOptions | (internal) | `static func boardScopeOptions(knownBoardIDs: [S...` |
| 672 | fn | cards | (private) | `private func cards(forKanbanStatus status: Stri...` |
| 698 | fn | matchesQuery | (private) | `private func matchesQuery(_ card: IPadWorkboard...` |
| 714 | fn | loadCards | (private) | `private func loadCards(force: Bool) async` |
| 741 | fn | beginCreateCard | (private) | `private func beginCreateCard()` |
| 748 | fn | createCard | (private) | `private func createCard() async -> Bool` |
| 783 | fn | move | (private) | `private func move(_ card: IPadWorkboardCard, to...` |
| 803 | fn | archive | (private) | `private func archive(_ card: IPadWorkboardCard)...` |
| 822 | fn | dispatchCards | (private) | `private func dispatchCards() async` |
| 843 | fn | open | (private) | `private func open(_ card: IPadWorkboardCard)` |
| 852 | fn | replace | (private) | `private func replace(_ card: IPadWorkboardCard)` |
| 858 | fn | fetchCards | (private) | `private func fetchCards() async throws -> IPadW...` |
| 866 | fn | applyCardsResponse | (private) | `private func applyCardsResponse(_ response: IPa...` |
| 872 | fn | loadBoardScopes | (private) | `private func loadBoardScopes(force: Bool) async` |
| 887 | fn | request | (private) | `private func request(method: String, params: so...` |
| 899 | fn | normalizedStatuses | (private) | `private func normalizedStatuses(_ statuses: [St...` |
| 906 | fn | nextPosition | (private) | `private func nextPosition(for status: String, e...` |
| 914 | fn | decodeCardResponse | (private) | `private static func decodeCardResponse(_ data: ...` |
| 918 | fn | normalized | (private) | `private func normalized(_ value: String?) -> St...` |
| 924 | fn | boardID | (private) | `private func boardID(for card: IPadWorkboardCar...` |
| 930 | fn | rememberBoardIDs | (private) | `private func rememberBoardIDs(from cards: [IPad...` |
| 935 | fn | rememberBoardIDs | (private) | `private func rememberBoardIDs(from boards: [IPa...` |
| 942 | fn | normalizedScopeID | (internal) | `static func normalizedScopeID(_ value: String?)...` |
| 946 | fn | boardScopeLabel | (internal) | `static func boardScopeLabel(for boardID: String...` |
| 951 | fn | message | (private) | `private static func message(for error: Error) -...` |
| 960 | struct | IPadWorkboardKanbanColumn | (internal) | `struct IPadWorkboardKanbanColumn` |
| 1020 | struct | IPadWorkboardKanbanCard | (private) | `struct IPadWorkboardKanbanCard` |
| 1134 | struct | IPadWorkboardQueueRow | (internal) | `struct IPadWorkboardQueueRow` |
| 1289 | struct | IPadWorkboardCardDetailSheet | (private) | `struct IPadWorkboardCardDetailSheet` |
| 1365 | fn | detailRow | (private) | `private func detailRow(_ title: String, value: ...` |
| 1378 | enum | IPadWorkboardSheet | (private) | `enum IPadWorkboardSheet` |
| 1392 | enum | IPadWorkboardDefaults | (private) | `enum IPadWorkboardDefaults` |
| 1394 | fn | label | (internal) | `static func label(for status: String) -> String` |
| 1412 | fn | rank | (internal) | `static func rank(_ status: String) -> Int` |
| 1418 | struct | IPadWorkboardCardsResponse | (private) | `struct IPadWorkboardCardsResponse` |
| 1423 | struct | IPadWorkboardCardResponse | (private) | `struct IPadWorkboardCardResponse` |
| 1427 | struct | IPadWorkboardBoardsResponse | (private) | `struct IPadWorkboardBoardsResponse` |
| 1431 | struct | IPadWorkboardBoardSummary | (private) | `struct IPadWorkboardBoardSummary` |
| 1435 | struct | IPadWorkboardCard | (internal) | `struct IPadWorkboardCard` |
| 1449 | struct | IPadWorkboardMetadata | (internal) | `struct IPadWorkboardMetadata` |
| 1454 | struct | IPadWorkboardAutomationMetadata | (internal) | `struct IPadWorkboardAutomationMetadata` |
| 1458 | struct | IPadWorkboardListParams | (private) | `struct IPadWorkboardListParams` |
| 1462 | struct | IPadWorkboardCreateParams | (private) | `struct IPadWorkboardCreateParams` |
| 1474 | struct | IPadWorkboardMoveParams | (private) | `struct IPadWorkboardMoveParams` |
| 1480 | struct | IPadWorkboardArchiveParams | (private) | `struct IPadWorkboardArchiveParams` |
| 1485 | struct | IPadWorkboardDispatchSummary | (internal) | `struct IPadWorkboardDispatchSummary` |
| 1503 | method | init | (internal) | `init(from decoder: Decoder) throws` |
| 1541 | fn | arrayCount | (private) | `private static func arrayCount(     _ container...` |
| 1557 | fn | outcomeText | (private) | `private static func outcomeText(_ count: Int, _...` |
| 1572 | struct | IPadWorkboardDispatchEntry | (private) | `struct IPadWorkboardDispatchEntry` |
