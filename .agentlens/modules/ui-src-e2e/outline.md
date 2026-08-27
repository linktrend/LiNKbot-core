# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 10 large files in this module.

## ui/src/e2e/approval-page.e2e.test.ts (574 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | ApprovalSurface | (private) |
| 43 | fn | approvalPath | (private) |
| 47 | fn | approvalUrl | (private) |
| 51 | fn | pendingApproval | (private) |
| 76 | fn | allowedApproval | (private) |
| 86 | fn | requireBrowser | (private) |
| 93 | fn | createSurface | (private) |
| 133 | fn | closeRecordedSurface | (private) |
| 146 | fn | waitForApprovalPage | (private) |
| 151 | fn | expectStandaloneApprovalPage | (private) |
| 159 | fn | expectNoDecisionButtons | (private) |
| 169 | fn | waitForStableApprovalPaint | (private) |
| 189 | fn | expectMobilePendingLayout | (private) |

## ui/src/e2e/browser-talk-start-stop.e2e.test.ts (1026 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | fn | videoTalkCatalog | (private) |
| 32 | fn | installTalkBrowserFixtures | (private) |
| 34 | type | InputProcessor | (private) |
| 62 | class | MockAudioContext | (private) |
| 112 | fn | captureComposerProof | (private) |
| 120 | fn | captureVideoTalkProof | (private) |
| 128 | fn | installBlockedMicrophoneFixture | (private) |
| 142 | fn | installBlockedVideoTalkFixture | (private) |
| 156 | class | FakePeerConnection | (private) |
| 302 | fn | state | (private) |
| 403 | fn | state | (private) |
| 518 | class | FakeDataChannel | (private) |
| 531 | class | FakePeerConnection | (private) |

## ui/src/e2e/chat-composer-redesign.e2e.test.ts (909 lines)

_No symbols extracted._

## ui/src/e2e/chat-flow.e2e.test.ts (4174 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | fn | requireRecord | (private) |
| 47 | fn | requireString | (private) |
| 54 | fn | waitForRequests | (private) |
| 72 | fn | expectRequestCountStable | (private) |
| 87 | fn | installPlainHttpClipboardCapture | (private) |
| 106 | fn | copiedViaExec | (private) |
| 110 | fn | chatThreadDistanceFromBottom | (private) |
| 117 | fn | waitForChatScrollIdle | (private) |
| 123 | fn | readGeometry | (private) |
| 150 | fn | scrollChatThreadToTop | (private) |
| 158 | fn | newBrowserContext | (private) |
| 164 | fn | closeBrowserContext | (private) |
| 169 | fn | closeOpenBrowserContexts | (private) |
| 173 | fn | captureSessionAccessibilityProof | (private) |
| 190 | fn | visibleChatBubbleTexts | (private) |
| 208 | fn | chatSessionListResponse | (private) |
| 244 | fn | sidebarSessionOrder | (private) |
| 984 | fn | historyFor | (private) |
| 1001 | fn | readBlobProof | (private) |
| 1011 | fn | replaceHistory | (private) |
| 2623 | fn | readLayout | (private) |
| 2780 | fn | historyMessage | (private) |
| 2876 | type | FrameSample | (private) |
| 2890 | fn | sample | (private) |
| 3093 | fn | readStoredProof | (private) |
| 3284 | fn | openModelSelect | (private) |
| 3289 | fn | selectModel | (private) |
| 3772 | fn | sessionRow | (private) |

## ui/src/e2e/claude-sessions.e2e.test.ts (723 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | VisibleVirtualRow | (private) |
| 26 | fn | firstVisibleVirtualRow | (private) |
| 49 | type | VirtualRowPrependSample | (private) |
| 54 | fn | startVirtualRowPrependProbe | (private) |
| 64 | fn | sample | (private) |
| 99 | fn | finishVirtualRowPrependProbe | (private) |
| 117 | fn | expectStableVirtualRowPrepend | (private) |
| 134 | fn | resumableClaudeCatalog | (private) |
| 166 | fn | hostGroupedNativeCatalogs | (private) |
| 167 | fn | catalog | (private) |
| 208 | fn | expandCodingSection | (private) |
| 216 | fn | openClaudeCatalogTerminal | (private) |
| 388 | fn | catalogResponse | (private) |
| 525 | fn | expectCenteredLayout | (private) |
| 572 | fn | historyMessage | (private) |

## ui/src/e2e/codex-sessions.e2e.test.ts (662 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | expandCodingSection | (private) |
| 478 | fn | expandPluginSetting | (private) |

## ui/src/e2e/mcp-app-conformance.e2e.test.ts (607 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | fn | waitForText | (private) |
| 65 | fn | waitForTextContaining | (private) |
| 78 | fn | appHtml | (private) |
| 101 | fn | write | (private) |
| 154 | fn | writeFixtureServer | (private) |
| 199 | fn | findAppFrame | (private) |
| 242 | fn | mountControlUiHost | (private) |
| 329 | fn | requestStandaloneUrl | (private) |

## ui/src/e2e/new-session-page.e2e.test.ts (2955 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | fn | captureUiProof | (private) |
| 59 | fn | pastePng | (private) |
| 76 | fn | installRepositorySwitchGateway | (private) |
| 135 | fn | deferTargetRepositorySelection | (private) |
| 163 | fn | replaceGatewayClient | (private) |
| 261 | fn | finish | (private) |
| 374 | fn | proof | (private) |
| 380 | fn | navigate | (private) |
| 1437 | fn | readRecovery | (private) |

## ui/src/e2e/session-management.e2e.test.ts (1644 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | fn | sessionRow | (private) |
| 67 | fn | sessionsListResponse | (private) |
| 94 | fn | requireRecord | (private) |
| 101 | fn | waitForPatch | (private) |
| 120 | fn | activateMenuItem | (private) |
| 124 | fn | trimmedTextContents | (private) |
| 130 | fn | actionOpacity | (private) |
| 134 | fn | actionPointerEvents | (private) |
| 138 | fn | captureUiProof | (private) |
| 430 | fn | rowNames | (private) |
| 596 | fn | openSessionMenu | (private) |
| 603 | fn | expectDesktopCollapsed | (private) |
| 610 | fn | expectDrawerClosed | (private) |
| 618 | fn | hiddenActionCounts | (private) |
| 622 | fn | expectHiddenShortcutsInert | (private) |
| 1210 | fn | customGroupOrder | (private) |
| 1414 | fn | rows | (private) |

## ui/src/e2e/sidebar-customization.e2e.test.ts (834 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | trimmedTextContents | (private) |
| 33 | fn | roundedWidth | (private) |
| 37 | fn | visibleDrawerButton | (private) |
| 41 | fn | expectLobsterOnFooterLedge | (private) |
| 66 | fn | captureUiProof | (private) |
| 78 | fn | captureSettingsSidebarProof | (private) |
| 89 | fn | holdUiProof | (private) |
| 95 | fn | openSidebarTestPage | (private) |
| 223 | fn | openSettingsFromChip | (private) |
| 615 | fn | outcome | (private) |
