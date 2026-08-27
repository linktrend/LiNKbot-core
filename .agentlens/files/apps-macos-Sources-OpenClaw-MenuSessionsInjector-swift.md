# apps/macos/Sources/OpenClaw/MenuSessionsInjector.swift

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1315
- **Language:** Swift
- **Symbols:** 77
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 6 | class | MenuSessionsInjector | (internal) | `class MenuSessionsInjector` |
| 40 | fn | install | (internal) | `func install(into statusItem: NSStatusItem)` |
| 58 | fn | menuWillOpen | (internal) | `func menuWillOpen(_ menu: NSMenu)` |
| 92 | fn | menuDidClose | (internal) | `func menuDidClose(_ menu: NSMenu)` |
| 99 | fn | startControlChannelObservation | (private) | `private func startControlChannelObservation()` |
| 105 | fn | observeControlChannelState | (private) | `private func observeControlChannelState()` |
| 117 | fn | handleControlChannelStateChange | (private) | `private func handleControlChannelStateChange()` |
| 136 | fn | menuNeedsUpdate | (internal) | `func menuNeedsUpdate(_ menu: NSMenu)` |
| 140 | fn | confinementRect | (internal) | `func confinementRect(for menu: NSMenu, on scree...` |
| 149 | mod | extension MenuSessionsInjector | (internal) | - |
| 155 | fn | inject | (private) | `private func inject(into menu: NSMenu)` |
| 196 | fn | injectNodes | (private) | `private func injectNodes(into menu: NSMenu)` |
| 270 | fn | repaintOpenMenu | (private) | `private func repaintOpenMenu(_ menu: NSMenu?) a...` |
| 278 | fn | repaintOpenMenuNodes | (private) | `private func repaintOpenMenuNodes(_ menu: NSMen...` |
| 285 | fn | shouldRepaintNodesAfterRefresh | (private) | `private func shouldRepaintNodesAfterRefresh() -...` |
| 292 | fn | buildContextSubmenu | (private) | `private func buildContextSubmenu(     width: CG...` |
| 376 | fn | contextRootSubtitle | (private) | `private func contextRootSubtitle(     isConnect...` |
| 391 | fn | activeRows | (private) | `private func activeRows(from snapshot: SessionS...` |
| 406 | fn | sessionsSubtitle | (private) | `private func sessionsSubtitle(count: Int) -> St...` |
| 411 | fn | insertUsageSection | (private) | `private func insertUsageSection(into menu: NSMe...` |
| 474 | fn | insertCostUsageSection | (private) | `private func insertCostUsageSection(into menu: ...` |
| 509 | fn | buildUsageOverflowMenu | (private) | `private func buildUsageOverflowMenu(rows: [Usag...` |
| 534 | fn | controlChannelStatusText | (private) | `private func controlChannelStatusText(for state...` |
| 547 | fn | buildCostUsageSubmenu | (private) | `private func buildCostUsageSubmenu(width: CGFlo...` |
| 576 | fn | gatewayEntry | (private) | `private func gatewayEntry() -> NodeInfo?` |
| 631 | fn | makeNodeItem | (private) | `private func makeNodeItem(entry: NodeInfo, widt...` |
| 644 | fn | makeSessionPreviewItem | (private) | `private func makeSessionPreviewItem(     sessio...` |
| 691 | fn | cancelPreviewTasks | (private) | `private func cancelPreviewTasks()` |
| 698 | fn | makeMessageItem | (private) | `private func makeMessageItem(text: String, symb...` |
| 733 | mod | extension MenuSessionsInjector | (internal) | - |
| 735 | fn | refreshCache | (private) | `private func refreshCache(force: Bool) async` |
| 761 | fn | refreshUsageCache | (private) | `private func refreshUsageCache(force: Bool) async` |
| 782 | fn | refreshCostUsageCache | (private) | `private func refreshCostUsageCache(force: Bool)...` |
| 805 | fn | compactUsageError | (private) | `private func compactUsageError(_ error: Error) ...` |
| 812 | fn | compactError | (private) | `private func compactError(_ error: Error) -> St...` |
| 824 | fn | menuStatusText | (private) | `private static func menuStatusText(_ text: Stri...` |
| 839 | mod | extension MenuSessionsInjector | (internal) | - |
| 841 | fn | buildSubmenu | (private) | `private func buildSubmenu(for row: SessionRow, ...` |
| 910 | fn | buildThinkingMenu | (private) | `private func buildThinkingMenu(for row: Session...` |
| 930 | fn | buildVerboseMenu | (private) | `private func buildVerboseMenu(for row: SessionR...` |
| 950 | fn | buildPreviewSubmenu | (private) | `private func buildPreviewSubmenu(sessionKey: St...` |
| 960 | fn | buildNodesOverflowMenu | (private) | `private func buildNodesOverflowMenu(entries: [N...` |
| 976 | fn | buildNodeSubmenu | (private) | `private func buildNodeSubmenu(entry: NodeInfo, ...` |
| 1021 | fn | makeNodeDetailItem | (private) | `private func makeNodeDetailItem(label: String, ...` |
| 1027 | fn | makeNodeCopyItem | (private) | `private func makeNodeCopyItem(label: String, va...` |
| 1034 | fn | makeNodeMultilineItem | (private) | `private func makeNodeMultilineItem(label: Strin...` |
| 1045 | fn | patchThinking | (private) | `@objc   private func patchThinking(_ sender: NS...` |
| 1063 | fn | patchVerbose | (private) | `@objc   private func patchVerbose(_ sender: NSM...` |
| 1081 | fn | openSessionLog | (private) | `@objc   private func openSessionLog(_ sender: N...` |
| 1090 | fn | resetSession | (private) | `@objc   private func resetSession(_ sender: NSM...` |
| 1109 | fn | compactSession | (private) | `@objc   private func compactSession(_ sender: N...` |
| 1128 | fn | deleteSession | (private) | `@objc   private func deleteSession(_ sender: NS...` |
| 1147 | fn | copyNodeSummary | (private) | `@objc   private func copyNodeSummary(_ sender: ...` |
| 1154 | fn | copyNodeValue | (private) | `@objc   private func copyNodeValue(_ sender: NS...` |
| 1163 | mod | extension MenuSessionsInjector | (internal) | - |
| 1165 | fn | findInsertIndex | (private) | `private func findInsertIndex(in menu: NSMenu) -...` |
| 1169 | fn | findNodesInsertIndex | (private) | `private func findNodesInsertIndex(in menu: NSMe...` |
| 1173 | fn | findDynamicSectionInsertIndex | (private) | `private func findDynamicSectionInsertIndex(in m...` |
| 1189 | fn | isInjectedItem | (private) | `private func isInjectedItem(_ item: NSMenuItem)...` |
| 1193 | fn | initialWidth | (private) | `private func initialWidth(for menu: NSMenu) -> ...` |
| 1200 | fn | submenuWidth | (private) | `private func submenuWidth() -> CGFloat` |
| 1210 | fn | menuWindowWidth | (private) | `private func menuWindowWidth(for menu: NSMenu) ...` |
| 1222 | fn | sortedNodeEntries | (private) | `private func sortedNodeEntries() -> [NodeInfo]` |
| 1236 | mod | extension MenuSessionsInjector | (internal) | - |
| 1238 | fn | makeHostedView | (private) | `private func makeHostedView(rootView: AnyView, ...` |
| 1250 | fn | captureMenuWidthIfAvailable | (private) | `private func captureMenuWidthIfAvailable(from v...` |
| 1256 | fn | currentMenuWidth | (private) | `private func currentMenuWidth(for menu: NSMenu)...` |
| 1273 | mod | extension MenuSessionsInjector | (internal) | - |
| 1274 | fn | setTestingControlChannelConnected | (internal) | `func setTestingControlChannelConnected(_ connec...` |
| 1277 | fn | setTestingSnapshot | (internal) | `func setTestingSnapshot(_ snapshot: SessionStor...` |
| 1283 | fn | setTestingUsageSummary | (internal) | `func setTestingUsageSummary(_ summary: GatewayU...` |
| 1288 | fn | setTestingCostUsageSummary | (internal) | `func setTestingCostUsageSummary(_ summary: Gate...` |
| 1294 | fn | injectForTesting | (internal) | `func injectForTesting(into menu: NSMenu)` |
| 1298 | fn | testingControlChannelStatusText | (internal) | `func testingControlChannelStatusText(for state:...` |
| 1302 | fn | testingFindInsertIndex | (internal) | `func testingFindInsertIndex(in menu: NSMenu) ->...` |
| 1306 | fn | testingFindNodesInsertIndex | (internal) | `func testingFindNodesInsertIndex(in menu: NSMen...` |
| 1310 | fn | testingSortedNodeEntries | (internal) | `func testingSortedNodeEntries() -> [NodeInfo]` |
