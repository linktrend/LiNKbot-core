# apps/ios/Sources/RootTabs.swift

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1396
- **Language:** Swift
- **Symbols:** 66
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 6 | struct | RootTabs | (internal) | `struct RootTabs` |
| 49 | method | init | (internal) | `init(initialSidebarVisibility: Bool? = nil)` |
| 59 | fn | initialDestination | (internal) | `static func initialDestination(arguments: [Stri...` |
| 75 | fn | requestedInitialSidebarDestination | (internal) | `static func requestedInitialSidebarDestination(...` |
| 160 | fn | sidebarNavigationSplitContent | (private) | `private func sidebarNavigationSplitContent(side...` |
| 178 | fn | sidebarDrawerContent | (private) | `private func sidebarDrawerContent(     sidebarW...` |
| 202 | fn | sidebarDrawerLayer | (private) | `private func sidebarDrawerLayer(     sidebarWid...` |
| 213 | fn | sidebarDrawerContentSurface | (private) | `private func sidebarDrawerContentSurface(sideba...` |
| 237 | fn | sidebarDrawerContentCard | (private) | `private func sidebarDrawerContentCard(sidebarWi...` |
| 291 | fn | sidebarColumn | (private) | `private func sidebarColumn(drawerSafeAreaInsets...` |
| 502 | fn | sidebarContentRevealProgress | (private) | `private func sidebarContentRevealProgress(sideb...` |
| 511 | fn | sidebarContentDismissGesture | (private) | `private func sidebarContentDismissGesture(sideb...` |
| 529 | fn | sidebarEdgeOpenGesture | (private) | `private func sidebarEdgeOpenGesture(sidebarWidt...` |
| 547 | fn | shouldUseSidebarDrawer | (private) | `private func shouldUseSidebarDrawer(containerSi...` |
| 551 | fn | sidebarWidth | (private) | `private func sidebarWidth(containerWidth: CGFlo...` |
| 555 | fn | rootOverlays | (private) | `private func rootOverlays(_ content: some View)...` |
| 603 | fn | gatewayProblemToast | (private) | `private func gatewayProblemToast(_ problem: Gat...` |
| 639 | fn | handleGatewayProblemReport | (private) | `private func handleGatewayProblemReport()` |
| 667 | fn | rootLifecycle | (private) | `private func rootLifecycle(_ content: some View...` |
| 674 | fn | rootVoiceWakeLifecycle | (private) | `private func rootVoiceWakeLifecycle(_ content: ...` |
| 697 | fn | rootAppearLifecycle | (private) | `private func rootAppearLifecycle(_ content: som...` |
| 727 | fn | rootGatewayProblemLifecycle | (private) | `private func rootGatewayProblemLifecycle(_ cont...` |
| 739 | fn | rootGatewayLifecycle | (private) | `private func rootGatewayLifecycle(_ content: so...` |
| 766 | fn | rootRequestLifecycle | (private) | `private func rootRequestLifecycle(_ content: so...` |
| 794 | fn | handleDashboardNavigationRequest | (private) | `private func handleDashboardNavigationRequest(_...` |
| 799 | fn | rootPresentation | (private) | `private func rootPresentation(_ content: some V...` |
| 854 | fn | updateIdleTimer | (private) | `private func updateIdleTimer()` |
| 861 | mod | extension RootTabs | (internal) | - |
| 862 | fn | updateCanvasState | (private) | `private func updateCanvasState()` |
| 866 | fn | updateCanvasDebugStatus | (private) | `private func updateCanvasDebugStatus()` |
| 874 | fn | updateHomeCanvasState | (private) | `private func updateHomeCanvasState()` |
| 885 | fn | makeHomeCanvasPayload | (private) | `private func makeHomeCanvasPayload() -> RootTab...` |
| 939 | fn | resolveActiveAgentID | (private) | `private func resolveActiveAgentID() -> String` |
| 947 | fn | resolveDefaultAgentID | (private) | `private func resolveDefaultAgentID() -> String` |
| 951 | fn | homeCanvasAgents | (private) | `private func homeCanvasAgents(activeAgentID: St...` |
| 972 | fn | homeCanvasName | (private) | `private func homeCanvasName(for agent: AgentSum...` |
| 978 | mod | extension RootTabs | (internal) | - |
| 979 | fn | selectSidebarDestination | (private) | `private func selectSidebarDestination(_ destina...` |
| 992 | fn | handleOpenChatRequest | (private) | `private func handleOpenChatRequest(_: Int)` |
| 996 | fn | selectSettingsRoute | (private) | `private func selectSettingsRoute(_ route: Setti...` |
| 1011 | fn | pushSidebarSettingsRoute | (private) | `private func pushSidebarSettingsRoute(_ route: ...` |
| 1018 | fn | suppressExecApprovalPromptForNotificationSettings | (private) | `private func suppressExecApprovalPromptForNotif...` |
| 1026 | fn | handleSettingsRouteChange | (private) | `private func handleSettingsRouteChange(_ route:...` |
| 1038 | fn | handleSidebarSettingsNavigationPathChange | (private) | `private func handleSidebarSettingsNavigationPat...` |
| 1049 | fn | showSidebar | (private) | `private func showSidebar()` |
| 1056 | fn | hideSidebar | (private) | `private func hideSidebar()` |
| 1063 | fn | updateSidebarLayout | (private) | `private func updateSidebarLayout(containerSize:...` |
| 1080 | fn | setSidebarVisible | (private) | `private func setSidebarVisible(_ isVisible: Bool)` |
| 1085 | fn | homeCanvasBadge | (private) | `private func homeCanvasBadge(for agent: AgentSu...` |
| 1102 | fn | normalized | (private) | `private func normalized(_ value: String?) -> St...` |
| 1108 | fn | gatewayProblemPrimaryActionTitle | (private) | `private func gatewayProblemPrimaryActionTitle(_...` |
| 1116 | fn | handleGatewayProblemPrimaryAction | (private) | `private func handleGatewayProblemPrimaryAction(...` |
| 1134 | fn | evaluateOnboardingPresentation | (private) | `private func evaluateOnboardingPresentation(for...` |
| 1162 | fn | hasExistingGatewayConfig | (private) | `private func hasExistingGatewayConfig() -> Bool` |
| 1173 | fn | maybeAutoOpenSettings | (private) | `private func maybeAutoOpenSettings()` |
| 1188 | fn | maybeOpenSettingsForGatewaySetup | (private) | `private func maybeOpenSettingsForGatewaySetup()` |
| 1203 | fn | handleGatewaySetupRequest | (private) | `private func handleGatewaySetupRequest(_ reques...` |
| 1208 | fn | maybeRequestLocalNetworkAccess | (private) | `private func maybeRequestLocalNetworkAccess(rea...` |
| 1215 | fn | requestLocalNetworkAccess | (private) | `private func requestLocalNetworkAccess(reason: ...` |
| 1220 | fn | applyInitialChatSessionIfNeeded | (private) | `private func applyInitialChatSessionIfNeeded()` |
| 1226 | fn | maybeShowQuickSetup | (private) | `private func maybeShowQuickSetup()` |
| 1240 | struct | RootCameraFlashOverlay | (private) | `struct RootCameraFlashOverlay` |
| 1345 | struct | RootTabsPreviewHost | (private) | `struct RootTabsPreviewHost` |
| 1351 | method | init | (internal) | `init(     idiom: UIUserInterfaceIdiom,     gate...` |
| 1375 | enum | RootTabsPreviewGatewayState | (private) | `enum RootTabsPreviewGatewayState` |
| 1380 | fn | apply | (internal) | `@MainActor   func apply(to appModel: NodeAppModel)` |
