# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/browser/chrome-extension/background.js (785 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 63 | fn | setBadge | (private) |
| 74 | fn | flashPageShareBadge | (private) |
| 89 | fn | getConfig | (private) |
| 98 | fn | getCopilotConfig | (private) |
| 111 | fn | findOpenClawGroups | (private) |
| 119 | fn | listSharedTabs | (private) |
| 129 | fn | addTabToOpenClawGroup | (private) |
| 145 | fn | removeTabFromOpenClawGroup | (private) |
| 153 | fn | isTabShared | (private) |
| 158 | fn | isOpenClawGroupId | (private) |
| 170 | fn | scheduleTabsSync | (private) |
| 180 | fn | syncTabsToRelay | (private) |
| 200 | fn | attachDebugger | (private) |
| 211 | fn | assertAccess | (private) |
| 219 | fn | attach | (private) |
| 260 | fn | detachDebugger | (private) |
| 271 | fn | revokeCopilotDebugger | (private) |
| 291 | fn | restoreCopilotDebugger | (private) |
| 330 | fn | send | (private) |
| 336 | fn | clearRelayOpeningDeadline | (private) |
| 341 | fn | armRelayOpeningDeadline | (private) |
| 346 | fn | handleRelayCommand | (private) |
| 405 | fn | sendHello | (private) |
| 417 | fn | connectRelay | (private) |
| 484 | fn | sendPageShareRequest | (private) |
| 505 | fn | ensureRelayReady | (private) |
| 518 | fn | sendPageToOpenClaw | (private) |
| 532 | fn | sendSelectionSnapshot | (private) |
| 544 | fn | withShareBadge | (private) |
| 551 | fn | sendPageFromChromeEntry | (private) |
| 555 | fn | installPageShareContextMenu | (private) |
| 577 | fn | handleRelayOpeningDeadline | (private) |
| 609 | fn | scheduleReconnect | (private) |

## extensions/browser/chrome-extension/sidepanel.e2e.test.ts (1020 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | type | RequestFrame | (private) |
| 53 | type | GatewayHarness | (private) |
| 66 | type | RelayHarness | (private) |
| 74 | type | TargetInfo | (private) |
| 76 | type | PanelTarget | (private) |
| 87 | fn | isSidePanelTarget | (private) |
| 95 | fn | textValue | (private) |
| 99 | fn | rawDataText | (private) |
| 117 | fn | listen | (private) |
| 129 | fn | sendResponse | (private) |
| 133 | fn | sendError | (private) |
| 144 | fn | createRelayHarness | (private) |
| 201 | fn | createGatewayHarness | (private) |
| 352 | fn | createFixtureServer | (private) |
| 370 | fn | copyExtension | (private) |
| 399 | fn | resolveChromiumExecutable | (private) |
| 415 | fn | waitForServiceWorker | (private) |
| 419 | fn | restartServiceWorker | (private) |
| 444 | fn | createPanelTarget | (private) |
| 474 | fn | send | (private) |
| 486 | fn | evaluate | (private) |
| 499 | fn | selectorExpression | (private) |
| 540 | fn | openTabPanel | (private) |
| 593 | fn | disableTabPanel | (private) |
| 609 | fn | unshareTab | (private) |
