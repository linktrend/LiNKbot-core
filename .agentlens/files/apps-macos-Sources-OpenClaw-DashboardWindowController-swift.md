# apps/macos/Sources/OpenClaw/DashboardWindowController.swift

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1387
- **Language:** Swift
- **Symbols:** 94
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 5 | class | DashboardWindowContentView | (private) | `class DashboardWindowContentView` |
| 16 | class | DashboardWindow | (private) | `class DashboardWindow` |
| 17 | fn | toggleToolbarShown | (internal) | `override func toggleToolbarShown(_: Any?)` |
| 18 | fn | validateUserInterfaceItem | (internal) | `override func validateUserInterfaceItem(_ item:...` |
| 25 | class | DashboardWindowDragRegionView | (private) | `class DashboardWindowDragRegionView` |
| 29 | fn | mouseDown | (internal) | `override func mouseDown(with event: NSEvent)` |
| 35 | class | DashboardLinkSplitView | (private) | `class DashboardLinkSplitView` |
| 37 | fn | mouseDown | (internal) | `override func mouseDown(with event: NSEvent)` |
| 51 | fn | _testCompleteDividerDrag | (internal) | `func _testCompleteDividerDrag()` |
| 57 | class | DashboardLinkMessageHandler | (private) | `class DashboardLinkMessageHandler` |
| 60 | fn | userContentController | (internal) | `func userContentController(_: WKUserContentCont...` |
| 66 | class | DashboardWindowDragMessageHandler | (private) | `class DashboardWindowDragMessageHandler` |
| 69 | fn | userContentController | (internal) | `func userContentController(_: WKUserContentCont...` |
| 75 | class | DashboardUpdateMessageHandler | (private) | `class DashboardUpdateMessageHandler` |
| 78 | fn | userContentController | (internal) | `func userContentController(_: WKUserContentCont...` |
| 84 | class | DashboardWindowController | (internal) | `class DashboardWindowController` |
| 219 | fn | setUpdateBridgeEnabled | (internal) | `func setUpdateBridgeEnabled(_ enabled: Bool)` |
| 240 | fn | webView | (internal) | `func webView(     _ webView: WKWebView,     run...` |
| 265 | fn | webView | (internal) | `func webView(     _ webView: WKWebView,     run...` |
| 290 | fn | webView | (internal) | `func webView(     _ webView: WKWebView,     cre...` |
| 319 | fn | makeJavaScriptConfirmAlert | (private) | `private static func makeJavaScriptConfirmAlert(...` |
| 332 | fn | javaScriptConfirmResult | (private) | `private static func javaScriptConfirmResult(   ...` |
| 341 | method | init | (internal) | `required init?(coder _: NSCoder)` |
| 344 | fn | show | (internal) | `func show(url: URL, auth: DashboardWindowAuth, ...` |
| 349 | fn | loadInBackground | (internal) | `func loadInBackground(url: URL, auth: Dashboard...` |
| 359 | fn | update | (internal) | `func update(url: URL, auth: DashboardWindowAuth...` |
| 393 | fn | show | (internal) | `func show()` |
| 409 | fn | closeDashboard | (internal) | `func closeDashboard()` |
| 413 | fn | releaseFrameAutosaveForReplacement | (internal) | `func releaseFrameAutosaveForReplacement()` |
| 420 | fn | showFailure | (internal) | `func showFailure(title: String, message: String...` |
| 437 | fn | load | (private) | `private func load(_ url: URL)` |
| 445 | fn | openLinkBrowser | (private) | `private func openLinkBrowser(_ url: URL, reques...` |
| 460 | fn | persistedLinkBrowserWidth | (private) | `private func persistedLinkBrowserWidth() -> CGF...` |
| 468 | fn | restoreLinkBrowserWidth | (private) | `private func restoreLinkBrowserWidth(_ persiste...` |
| 484 | fn | persistLinkBrowserWidth | (private) | `private func persistLinkBrowserWidth()` |
| 491 | fn | requestBrowserProfileImportOfferIfNeeded | (private) | `private func requestBrowserProfileImportOfferIf...` |
| 522 | fn | handleOnboardingCompletion | (internal) | `func handleOnboardingCompletion()` |
| 528 | fn | closeLinkBrowser | (private) | `private func closeLinkBrowser(focusDashboard: B...` |
| 536 | fn | openExternal | (private) | `private func openExternal(_ url: URL)` |
| 541 | fn | receiveLinkMessage | (private) | `fileprivate func receiveLinkMessage(_ message: ...` |
| 565 | fn | receiveWindowDragMessage | (private) | `fileprivate func receiveWindowDragMessage(_ mes...` |
| 586 | fn | isWindowDragRequest | (internal) | `static func isWindowDragRequest(_ body: Any) ->...` |
| 591 | fn | receiveUpdateMessage | (private) | `fileprivate func receiveUpdateMessage(_ message...` |
| 614 | fn | isStartUpdateRequest | (internal) | `static func isStartUpdateRequest(_ body: Any) -...` |
| 619 | fn | linkRequest | (internal) | `static func linkRequest(from body: Any) -> Dash...` |
| 638 | fn | isTrustedLinkSource | (internal) | `static func isTrustedLinkSource(_ sourceURL: UR...` |
| 644 | fn | shouldAllowEditorURLLaunch | (internal) | `static func shouldAllowEditorURLLaunch(     fro...` |
| 652 | fn | isHTTPURL | (private) | `private static func isHTTPURL(_ url: URL) -> Bool` |
| 662 | fn | isExternalURL | (private) | `private static func isExternalURL(_ url: URL) -...` |
| 670 | fn | isEditorURL | (private) | `private static func isEditorURL(_ url: URL) -> ...` |
| 680 | fn | sameOrigin | (private) | `private static func sameOrigin(_ lhs: URL, _ rh...` |
| 686 | fn | refreshNativeAuthScript | (private) | `private func refreshNativeAuthScript(url: URL, ...` |
| 693 | fn | installHistoryStateBridge | (private) | `private func installHistoryStateBridge()` |
| 712 | fn | publishNativeHistoryState | (private) | `private func publishNativeHistoryState()` |
| 723 | fn | navigateBack | (internal) | `func navigateBack()` |
| 727 | fn | navigateForward | (internal) | `func navigateForward()` |
| 741 | fn | makeWindow | (private) | `private static func makeWindow(contentView: NSV...` |
| 800 | fn | installNativeChromeScript | (private) | `private static func installNativeChromeScript(i...` |
| 842 | fn | installNativeAuthScript | (private) | `private static func installNativeAuthScript(   ...` |
| 878 | fn | originString | (internal) | `static func originString(for url: URL) -> String` |
| 888 | fn | allowedPath | (internal) | `static func allowedPath(for url: URL) -> String` |
| 894 | fn | jsStringLiteral | (private) | `private static func jsStringLiteral(_ value: St...` |
| 905 | fn | shouldAllowNavigation | (internal) | `static func shouldAllowNavigation(to url: URL, ...` |
| 916 | fn | shouldAllowBrowserNavigation | (internal) | `static func shouldAllowBrowserNavigation(to url...` |
| 924 | fn | shouldOpenExternalDashboardNavigation | (internal) | `static func shouldOpenExternalDashboardNavigati...` |
| 934 | fn | targetlessNavigationAction | (internal) | `static func targetlessNavigationAction(     for...` |
| 958 | fn | newWindowAction | (internal) | `static func newWindowAction(for url: URL?, sour...` |
| 963 | fn | windowWillClose | (internal) | `func windowWillClose(_: Notification)` |
| 968 | fn | showLoadFailure | (private) | `private func showLoadFailure(_ error: Error)` |
| 996 | mod | extension DashboardWindowController | (internal) | - |
| 997 | fn | shouldReloadDashboard | (internal) | `static func shouldReloadDashboard(     currentU...` |
| 1012 | fn | dispatchNativeCommand | (internal) | `func dispatchNativeCommand(_ command: Dashboard...` |
| 1022 | fn | evaluateNativeCommand | (private) | `private func evaluateNativeCommand(_ command: D...` |
| 1044 | fn | flushPendingNativeCommands | (private) | `private func flushPendingNativeCommands()` |
| 1056 | mod | extension DashboardWindowController | (internal) | - |
| 1057 | fn | webView | (internal) | `func webView(     _ webView: WKWebView,     dec...` |
| 1141 | fn | webView | (internal) | `func webView(_ webView: WKWebView, didStartProv...` |
| 1152 | fn | webView | (internal) | `func webView(_ webView: WKWebView, didCommit _:...` |
| 1162 | fn | webView | (internal) | `func webView(_ webView: WKWebView, didFinish na...` |
| 1174 | fn | webView | (internal) | `func webView(_ webView: WKWebView, didFail _: W...` |
| 1183 | fn | webView | (internal) | `func webView(     _ webView: WKWebView,     did...` |
| 1196 | fn | decideTargetlessNavigation | (private) | `private func decideTargetlessNavigation(     _ ...` |
| 1222 | mod | extension DashboardWindowController | (internal) | - |
| 1313 | fn | _testCompleteLinkBrowserDividerDrag | (internal) | `func _testCompleteLinkBrowserDividerDrag()` |
| 1317 | fn | _testOpenLinkBrowser | (internal) | `func _testOpenLinkBrowser(_ url: URL, requestBr...` |
| 1321 | fn | _testCloseLinkBrowser | (internal) | `func _testCloseLinkBrowser()` |
| 1337 | fn | _testLinkBrowserOpenInNewTab | (internal) | `func _testLinkBrowserOpenInNewTab(_ url: URL)` |
| 1341 | fn | _testLinkBrowserCloseTab | (internal) | `func _testLinkBrowserCloseTab(at index: Int)` |
| 1345 | fn | _testLinkBrowserMoveTab | (internal) | `func _testLinkBrowserMoveTab(from fromIndex: In...` |
| 1349 | fn | _testLinkBrowserSelectTab | (internal) | `func _testLinkBrowserSelectTab(at index: Int)` |
| 1353 | fn | _testLinkBrowserContextMenu | (internal) | `func _testLinkBrowserContextMenu(forTabAt index...` |
| 1373 | fn | _testFocusLinkBrowser | (internal) | `func _testFocusLinkBrowser() -> Bool` |
| 1378 | fn | _testJavaScriptConfirmAlert | (internal) | `static func _testJavaScriptConfirmAlert(message...` |
| 1382 | fn | _testJavaScriptConfirmResult | (internal) | `static func _testJavaScriptConfirmResult(for re...` |
