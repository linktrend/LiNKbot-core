# apps/ios/UITests/OpenClawSnapshotUITests.swift

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1120
- **Language:** Swift
- **Symbols:** 40
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 4 | class | OpenClawSnapshotUITests | (internal) | `class OpenClawSnapshotUITests` |
| 20 | fn | setUpWithError | (internal) | `override func setUpWithError() throws` |
| 25 | fn | tearDownWithError | (internal) | `override func tearDownWithError() throws` |
| 31 | fn | testConnectedGatewayTabs | (internal) | `func testConnectedGatewayTabs()` |
| 39 | fn | testAutomationManagementScreenshot | (internal) | `func testAutomationManagementScreenshot()` |
| 50 | fn | testSkillsManagementScreenshot | (internal) | `func testSkillsManagementScreenshot() throws` |
| 65 | fn | testOnboardingExplainsCapabilitiesAndTrust | (internal) | `func testOnboardingExplainsCapabilitiesAndTrust()` |
| 79 | fn | testSidebarOverviewNavigation | (internal) | `func testSidebarOverviewNavigation() throws` |
| 94 | fn | testLocationAlwaysWaitsForSlowSystemPermissionResponse | (internal) | `func testLocationAlwaysWaitsForSlowSystemPermis...` |
| 153 | fn | testLocationWhileUsingStaysSelectedAfterSlowSystemPermissionResponse | (internal) | `func testLocationWhileUsingStaysSelectedAfterSl...` |
| 206 | fn | testSettingsBackReturnsToOriginatingSidebarDestination | (internal) | `func testSettingsBackReturnsToOriginatingSideba...` |
| 226 | fn | testVoiceWakeResumesAfterTalkModeToggle | (internal) | `func testVoiceWakeResumesAfterTalkModeToggle() ...` |
| 289 | fn | testChatComposerStartsCompactAndGrowsWithDraft | (internal) | `func testChatComposerStartsCompactAndGrowsWithD...` |
| 354 | fn | testKeyboardOpenSendFollowsLiveEdge | (internal) | `func testKeyboardOpenSendFollowsLiveEdge() throws` |
| 385 | fn | testChatPresentationInLightAppearance | (internal) | `func testChatPresentationInLightAppearance() th...` |
| 399 | fn | testChatKeepsLayeredCanvasInDarkAppearance | (internal) | `func testChatKeepsLayeredCanvasInDarkAppearance...` |
| 414 | fn | testEmptyChatStarterPromptSendsMessage | (internal) | `func testEmptyChatStarterPromptSendsMessage() t...` |
| 438 | fn | testEmptyChatStarterPromptsLocalizeInGerman | (internal) | `func testEmptyChatStarterPromptsLocalizeInGerma...` |
| 463 | fn | testOnboardingPairCommandAndCompletionOpenChat | (internal) | `func testOnboardingPairCommandAndCompletionOpen...` |
| 513 | fn | testAppearanceUsesSettingsRow | (internal) | `func testAppearanceUsesSettingsRow() throws` |
| 562 | fn | testChatAndOverviewNavigateThroughSidebar | (internal) | `func testChatAndOverviewNavigateThroughSidebar(...` |
| 597 | fn | testAgentUsesToolbarFilter | (internal) | `func testAgentUsesToolbarFilter() throws` |
| 614 | fn | testLiveGatewayFreshInstallSetupAndRelaunch | (internal) | `func testLiveGatewayFreshInstallSetupAndRelaunc...` |
| 627 | fn | testLiveGatewayChatRoundTripAndControlOverview | (internal) | `func testLiveGatewayChatRoundTripAndControlOver...` |
| 675 | fn | testManualAuthRetryUsesEditedToken | (internal) | `func testManualAuthRetryUsesEditedToken() throws` |
| 726 | fn | testPhotosLimitedAccess | (internal) | `func testPhotosLimitedAccess() throws` |
| 774 | fn | testAppleHealthDisclosureIsVisible | (internal) | `func testAppleHealthDisclosureIsVisible() throws` |
| 791 | fn | launchApp | (private) | `private func launchApp(     for target: Screens...` |
| 822 | fn | waitForValue | (private) | `private func waitForValue(_ value: String, of e...` |
| 829 | fn | selectSidebarDestination | (private) | `private func selectSidebarDestination(     _ ti...` |
| 851 | fn | startNewChatFromSidebar | (private) | `private func startNewChatFromSidebar(     file:...` |
| 873 | fn | launchPairedLiveGatewayApp | (private) | `private func launchPairedLiveGatewayApp(     in...` |
| 922 | fn | relaunchConnectedLiveGatewayApp | (private) | `private func relaunchConnectedLiveGatewayApp(  ...` |
| 940 | fn | sendLiveGatewayMessage | (private) | `private func sendLiveGatewayMessage(     _ text...` |
| 961 | fn | openChatGatewaySettings | (private) | `private func openChatGatewaySettings(     file:...` |
| 977 | fn | assertDarkAppearanceTextVisible | (private) | `private func assertDarkAppearanceTextVisible(  ...` |
| 1030 | fn | assertChatCanvasIsNotSolidBlack | (private) | `private func assertChatCanvasIsNotSolidBlack(  ...` |
| 1083 | fn | sendFixtureChatMessage | (private) | `private func sendFixtureChatMessage(_ text: Str...` |
| 1105 | fn | attachScreenshot | (private) | `private func attachScreenshot(named name: String)` |
| 1113 | fn | attachFullScreenScreenshot | (private) | `private func attachFullScreenScreenshot(named n...` |
