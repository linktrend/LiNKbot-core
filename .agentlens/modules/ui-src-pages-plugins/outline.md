# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 6 large files in this module.

## ui/src/pages/plugins/plugins-page.test.ts (1036 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | RequestHandler | (private) |
| 27 | type | GatewayHarness | (private) |
| 32 | type | TestPluginsPage | (private) |
| 42 | type | RuntimeConfigTestState | (private) |
| 48 | fn | createPlugin | (private) |
| 63 | fn | createResult | (private) |
| 67 | fn | createClient | (private) |
| 75 | fn | createSnapshot | (private) |
| 95 | fn | createGateway | (private) |
| 127 | type | RuntimeConfigTestHarness | (private) |
| 140 | fn | createRuntimeConfigHarness | (private) |
| 167 | fn | createContext | (private) |
| 184 | fn | mountPage | (private) |
| 197 | fn | deferred | (private) |
| 205 | fn | clickRowAction | (private) |
| 256 | class | extends | (private) |
| 329 | class | extends | (private) |

## ui/src/pages/plugins/plugins-page.ts (1016 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | type | PluginsRouteData | pub |
| 67 | fn | errorMessage | (private) |
| 71 | fn | withPlugin | (private) |
| 88 | fn | mutationSuccessMessage | (private) |
| 100 | class | PluginsPage | (private) |
| 460 | fn | isCurrent | (private) |
| 489 | fn | isCurrent | (private) |
| 580 | fn | isCurrent | (private) |
| 698 | fn | isCurrent | (private) |
| 748 | fn | isCurrent | (private) |
| 784 | fn | isCurrent | (private) |
| 837 | fn | fail | (private) |
| 1010 | interface | HTMLElementTagNameMap | (private) |

## ui/src/pages/plugins/plugins.e2e.test.ts (666 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 161 | fn | inventory | (private) |
| 165 | fn | configSnapshot | (private) |
| 185 | fn | readOnlyConnectResponse | (private) |
| 208 | fn | requireRecord | (private) |
| 215 | fn | requestParams | (private) |
| 219 | fn | waitForNextRequest | (private) |
| 240 | fn | clickRowAction | (private) |
| 244 | fn | captureScreenshot | (private) |
| 256 | fn | newContext | (private) |
| 264 | fn | pluginMethodResponses | (private) |

## ui/src/pages/plugins/presentation.ts (622 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 186 | fn | pluginArtPath | pub |
| 214 | fn | takeGraphemes | (private) |
| 230 | fn | pluginFallbackGradient | pub |
| 241 | fn | pluginMonogram | pub |
| 264 | fn | pluginCategoryLabel | pub |
| 281 | type | ConnectorMcpTemplate | (private) |
| 293 | type | ConnectorGroup | pub |
| 298 | type | ConnectorSuggestion | pub |

## ui/src/pages/plugins/view.test.ts (686 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | PluginsViewProps | (private) |
| 13 | fn | createPlugin | (private) |
| 32 | fn | createResult | (private) |
| 36 | fn | createProps | (private) |
| 81 | fn | mount | (private) |
| 88 | fn | normalizedText | (private) |
| 92 | fn | actionButton | (private) |
| 100 | fn | clawHubKey | (private) |

## ui/src/pages/plugins/view.ts (1295 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | PluginsTab | pub |
| 45 | type | InstalledFilter | pub |
| 47 | type | PluginRowMessage | pub |
| 53 | type | PluginsViewProps | (private) |
| 97 | fn | filterLabel | (private) |
| 112 | fn | connectorGroupLabel | (private) |
| 127 | fn | pluginRowKey | pub |
| 131 | fn | clawHubRowKey | (private) |
| 135 | fn | connectorRowKey | pub |
| 139 | fn | normalizedQuery | (private) |
| 143 | fn | matchesPlugin | (private) |
| 158 | fn | matchesConnector | (private) |
| 168 | fn | sortCatalogPlugins | (private) |
| 196 | fn | installedPlugins | (private) |
| 220 | type | InstalledCategoryGroup | (private) |
| 226 | fn | groupInstalledByCategory | (private) |
| 234 | fn | rank | (private) |
| 247 | type | DiscoverShelves | (private) |
| 253 | fn | discoverShelves | (private) |
| 278 | fn | renderArtTile | (private) |
| 313 | fn | stateLabel | (private) |
| 328 | fn | stateStatus | (private) |
| 335 | fn | rowStateStatus | (private) |
| 339 | fn | originLabel | (private) |
| 357 | fn | renderMetaLine | (private) |
| 370 | fn | renderRowMessage | (private) |
| 407 | fn | fromInteractiveChild | (private) |
| 413 | fn | renderToggleButton | (private) |
| 439 | fn | renderRemoveButton | (private) |
| 462 | fn | renderInstallButton | (private) |
| 486 | fn | renderRemoveConfirm | (private) |
| 525 | fn | renderCatalogActions | (private) |
| 554 | fn | renderInstalledFilter | (private) |
| 575 | fn | renderInstalledRow | (private) |
| 624 | fn | renderMcpSection | (private) |
| 689 | fn | renderMcpRow | (private) |
| 717 | fn | renderInstalled | (private) |
| 744 | fn | renderCatalogRow | (private) |
| 789 | fn | renderConnectorRow | (private) |
| 853 | fn | renderShelf | (private) |
| 860 | fn | findInstalledSearchPlugin | (private) |
| 873 | fn | verificationLabel | (private) |
| 877 | fn | renderClawHubResult | (private) |
| 933 | fn | renderClawHubGroup | (private) |
| 978 | fn | renderDiscover | (private) |
| 1003 | fn | renderConnectorSection | (private) |
| 1033 | fn | detailMetaRow | (private) |
| 1042 | fn | renderDetailOverlay | (private) |
| 1146 | fn | renderDetailCover | (private) |
| 1183 | fn | renderEmpty | (private) |
| 1200 | fn | renderActivePanel | (private) |
| 1211 | fn | renderPlugins | pub |
