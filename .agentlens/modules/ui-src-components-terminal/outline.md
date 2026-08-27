# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## ui/src/components/terminal/terminal-connection.test.ts (1115 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | fn | deferred | (private) |
| 27 | fn | makeFakeClient | (private) |
| 76 | fn | setLivenessProbeOutcomes | (private) |
| 1002 | fn | probes | (private) |
| 1084 | fn | probeCount | (private) |

## ui/src/components/terminal/terminal-connection.ts (592 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 5 | type | TerminalRequestOptions | (private) |
| 8 | interface | TerminalGatewayClient | pub |
| 20 | type | TerminalOpenResult | (private) |
| 29 | type | TerminalCatalogReference | (private) |
| 35 | type | TerminalAttachResult | (private) |
| 42 | type | TerminalSessionInfo | pub |
| 53 | type | TerminalExitInfo | (private) |
| 60 | type | SessionSink | (private) |
| 67 | type | StreamState | (private) |
| 74 | type | PendingEvent | (private) |
| 85 | class | TerminalOpenTimeoutError | pub |
| 92 | fn | isTerminalOpenRequestTimeout | (private) |
| 99 | fn | isTerminalOpenTimeout | (private) |
| 107 | class | TerminalConnection | pub |

## ui/src/components/terminal/terminal-panel.test.ts (1091 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | CreateOptions | (private) |
| 19 | type | CreateGhosttyTerminalMock | (private) |
| 22 | type | TerminalFactory | (private) |
| 26 | fn | createTerminalController | (private) |
| 54 | fn | terminalOpenResult | (private) |
| 64 | fn | deferred | (private) |
| 80 | class | TestTerminalPanel | (private) |
| 86 | fn | startPanelWithPendingOpen | (private) |
| 139 | class | LazyUpgradeTerminalPanel | (private) |
| 650 | type | ListedSession | (private) |
| 746 | fn | pick | (private) |

## ui/src/components/terminal/terminal-panel.ts (1156 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | type | TerminalDock | (private) |
| 51 | type | TerminalTabState | (private) |
| 63 | type | TerminalOperation | (private) |
| 70 | fn | shellBasename | (private) |
| 89 | fn | forceTerminalRender | (private) |
| 98 | class | OpenClawTerminalPanel | pub |
| 480 | fn | isCurrentRefresh | (private) |
| 1017 | fn | onMove | (private) |
| 1030 | fn | cleanup | (private) |
| 1039 | fn | onUp | (private) |
| 1152 | interface | HTMLElementTagNameMap | (private) |
