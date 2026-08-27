# ui/src/pages/plugins/view.ts

[← Back to Module](../modules/ui-src-pages-plugins/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1295
- **Language:** TypeScript
- **Symbols:** 52
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 43 | type | PluginsTab | pub | - |
| 45 | type | InstalledFilter | pub | - |
| 47 | type | PluginRowMessage | pub | - |
| 53 | type | PluginsViewProps | (private) | - |
| 97 | fn | filterLabel | (private) | `function filterLabel(filter: InstalledFilter): ...` |
| 112 | fn | connectorGroupLabel | (private) | `function connectorGroupLabel(group: ConnectorGr...` |
| 127 | fn | pluginRowKey | pub | `export function pluginRowKey(pluginId: string):...` |
| 131 | fn | clawHubRowKey | (private) | `function clawHubRowKey(packageName: string): st...` |
| 135 | fn | connectorRowKey | pub | `export function connectorRowKey(connectorId: st...` |
| 139 | fn | normalizedQuery | (private) | `function normalizedQuery(query: string): string {` |
| 143 | fn | matchesPlugin | (private) | `function matchesPlugin(plugin: PluginCatalogIte...` |
| 158 | fn | matchesConnector | (private) | `function matchesConnector(connector: ConnectorS...` |
| 168 | fn | sortCatalogPlugins | (private) | `function sortCatalogPlugins(plugins: readonly P...` |
| 196 | fn | installedPlugins | (private) | `function installedPlugins(` |
| 220 | type | InstalledCategoryGroup | (private) | - |
| 226 | fn | groupInstalledByCategory | (private) | `function groupInstalledByCategory(plugins: read...` |
| 234 | fn | rank | (private) | `const rank = (category: string) => {` |
| 247 | type | DiscoverShelves | (private) | - |
| 253 | fn | discoverShelves | (private) | `function discoverShelves(plugins: readonly Plug...` |
| 278 | fn | renderArtTile | (private) | `function renderArtTile(` |
| 313 | fn | stateLabel | (private) | `function stateLabel(plugin: PluginCatalogItem):...` |
| 328 | fn | stateStatus | (private) | `function stateStatus(plugin: PluginCatalogItem) {` |
| 335 | fn | rowStateStatus | (private) | `function rowStateStatus(plugin: PluginCatalogIt...` |
| 339 | fn | originLabel | (private) | `function originLabel(origin: string): string {` |
| 357 | fn | renderMetaLine | (private) | `function renderMetaLine(parts: ReadonlyArray<Te...` |
| 370 | fn | renderRowMessage | (private) | `function renderRowMessage(` |
| 407 | fn | fromInteractiveChild | (private) | `function fromInteractiveChild(event: Event): bo...` |
| 413 | fn | renderToggleButton | (private) | `function renderToggleButton(` |
| 439 | fn | renderRemoveButton | (private) | `function renderRemoveButton(` |
| 462 | fn | renderInstallButton | (private) | `function renderInstallButton(` |
| 486 | fn | renderRemoveConfirm | (private) | `function renderRemoveConfirm(` |
| 525 | fn | renderCatalogActions | (private) | `function renderCatalogActions(` |
| 554 | fn | renderInstalledFilter | (private) | `function renderInstalledFilter(props: PluginsVi...` |
| 575 | fn | renderInstalledRow | (private) | `function renderInstalledRow(plugin: PluginCatal...` |
| 624 | fn | renderMcpSection | (private) | `function renderMcpSection(props: PluginsViewPro...` |
| 689 | fn | renderMcpRow | (private) | `function renderMcpRow(server: McpServerSummary,...` |
| 717 | fn | renderInstalled | (private) | `function renderInstalled(props: PluginsViewProp...` |
| 744 | fn | renderCatalogRow | (private) | `function renderCatalogRow(plugin: PluginCatalog...` |
| 789 | fn | renderConnectorRow | (private) | `function renderConnectorRow(` |
| 853 | fn | renderShelf | (private) | `function renderShelf(label: string, rows: reado...` |
| 860 | fn | findInstalledSearchPlugin | (private) | `function findInstalledSearchPlugin(` |
| 873 | fn | verificationLabel | (private) | `function verificationLabel(tier: string): string {` |
| 877 | fn | renderClawHubResult | (private) | `function renderClawHubResult(item: PluginSearch...` |
| 933 | fn | renderClawHubGroup | (private) | `function renderClawHubGroup(props: PluginsViewP...` |
| 978 | fn | renderDiscover | (private) | `function renderDiscover(props: PluginsViewProps) {` |
| 1003 | fn | renderConnectorSection | (private) | `function renderConnectorSection(` |
| 1033 | fn | detailMetaRow | (private) | `function detailMetaRow(label: string, value: st...` |
| 1042 | fn | renderDetailOverlay | (private) | `function renderDetailOverlay(props: PluginsView...` |
| 1146 | fn | renderDetailCover | (private) | `function renderDetailCover(` |
| 1183 | fn | renderEmpty | (private) | `function renderEmpty(title: string, body: strin...` |
| 1200 | fn | renderActivePanel | (private) | `function renderActivePanel(props: PluginsViewPr...` |
| 1211 | fn | renderPlugins | pub | `export function renderPlugins(props: PluginsVie...` |

## Public API

### `pluginRowKey`

```
export function pluginRowKey(pluginId: string): string {
```

**Line:** 127 | **Kind:** fn

### `connectorRowKey`

```
export function connectorRowKey(connectorId: string): string {
```

**Line:** 135 | **Kind:** fn

### `renderPlugins`

```
export function renderPlugins(props: PluginsViewProps) {
```

**Line:** 1211 | **Kind:** fn
