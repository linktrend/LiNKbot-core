# ui/src/pages/config/config-page.ts

[← Back to Module](../modules/ui-src-pages-config/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1001
- **Language:** TypeScript
- **Symbols:** 12
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 60 | type | ConfigFormMode | (private) | - |
| 61 | type | ConfigSelection | (private) | - |
| 64 | type | ConfigPageSetting | (private) | - |
| 95 | fn | isUnknownSystemInfoMethodError | (private) | `function isUnknownSystemInfoMethodError(error: ...` |
| 103 | fn | supportsSystemInfo | pub | `export function supportsSystemInfo(hello: Appli...` |
| 107 | fn | defaultConfigSelection | (private) | `function defaultConfigSelection(pageId: ConfigP...` |
| 132 | fn | normalizeConfigSelection | (private) | `function normalizeConfigSelection(` |
| 153 | fn | configSelectionFromSearch | pub | `export function configSelectionFromSearch(pageI...` |
| 161 | fn | configPageTitle | (private) | `function configPageTitle(pageId: ConfigPageId):...` |
| 169 | fn | extractQuickSettingsSecurity | (private) | `function extractQuickSettingsSecurity(config: u...` |
| 212 | fn | applyTextScale | (private) | `function applyTextScale(value: unknown) {` |
| 222 | class | ConfigPage | pub | - |

## Public API

### `supportsSystemInfo`

```
export function supportsSystemInfo(hello: ApplicationGatewaySnapshot["hello"]): boolean {
```

**Line:** 103 | **Kind:** fn

### `configSelectionFromSearch`

```
export function configSelectionFromSearch(pageId: ConfigPageId, search: string): ConfigSelection {
```

**Line:** 153 | **Kind:** fn
