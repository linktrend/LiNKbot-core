# ui/src/pages/config/view.ts

[← Back to Module](../modules/ui-src-pages-config/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2113
- **Language:** TypeScript
- **Symbols:** 53
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 71 | type | SettingsMediaDeviceState | (private) | - |
| 78 | type | ConfigFormMode | (private) | - |
| 80 | type | ConfigDiffPath | (private) | - |
| 81 | type | ConfigDiffEntry | (private) | - |
| 82 | type | RawDiffCache | (private) | - |
| 87 | type | SchemaAnalysisCache | (private) | - |
| 94 | type | ConfigViewState | pub | - |
| 107 | fn | createConfigViewState | pub | `export function createConfigViewState(): Config...` |
| 120 | type | ConfigProps | pub | - |
| 500 | type | SectionCategory | (private) | - |
| 506 | type | SectionCategoryDefinition | (private) | - |
| 555 | fn | getSectionIcon | (private) | `function getSectionIcon(key: string) {` |
| 559 | fn | scopeSchemaSections | (private) | `function scopeSchemaSections(` |
| 584 | fn | asConfigSchema | (private) | `function asConfigSchema(value: unknown): JsonSc...` |
| 591 | fn | configSectionKey | (private) | `function configSectionKey(sections?: readonly s...` |
| 595 | fn | getConfigSchemaAnalysis | (private) | `function getConfigSchemaAnalysis(` |
| 626 | fn | formatConfigDiffPath | (private) | `function formatConfigDiffPath(path: ConfigDiffP...` |
| 630 | fn | computeDiff | (private) | `function computeDiff(` |
| 640 | fn | pushChange | (private) | `function pushChange(path: ConfigDiffPath, from:...` |
| 646 | fn | arrayValuesDiffer | (private) | `function arrayValuesDiffer(orig: unknown[], cur...` |
| 661 | fn | objectValuesDiffer | (private) | `function objectValuesDiffer(` |
| 679 | fn | valuesDiffer | (private) | `function valuesDiffer(orig: unknown, curr: unkn...` |
| 705 | fn | compare | (private) | `function compare(orig: unknown, curr: unknown, ...` |
| 747 | fn | computeRawDiff | (private) | `function computeRawDiff(` |
| 790 | fn | truncateValue | (private) | `function truncateValue(value: unknown, maxLen =...` |
| 809 | fn | hintKeyMatchesPathPrefix | (private) | `function hintKeyMatchesPathPrefix(hintKey: stri...` |
| 817 | fn | hasSensitiveHintForPathPrefix | (private) | `function hasSensitiveHintForPathPrefix(path: Co...` |
| 823 | fn | isSensitiveDiffPath | (private) | `function isSensitiveDiffPath(path: ConfigDiffPa...` |
| 838 | fn | renderRawDiffValue | (private) | `function renderRawDiffValue(` |
| 851 | type | ThemeOption | (private) | - |
| 878 | fn | renderThemeCardVisual | (private) | `function renderThemeCardVisual(id: ThemeName, a...` |
| 893 | fn | importedThemeName | (private) | `function importedThemeName(props: Pick<ConfigPr...` |
| 899 | fn | focusCustomThemeImportInput | (private) | `function focusCustomThemeImportInput() {` |
| 919 | fn | renderSettingsMediaDeviceField | (private) | `function renderSettingsMediaDeviceField(options: {` |
| 989 | fn | renderSettingsMicrophoneField | (private) | `function renderSettingsMicrophoneField(props: C...` |
| 1002 | fn | renderSettingsCameraField | (private) | `function renderSettingsCameraField(props: Confi...` |
| 1015 | fn | renderChatPreferencesSection | (private) | `function renderChatPreferencesSection(props: Co...` |
| 1106 | fn | renderLobsterPetSection | (private) | `function renderLobsterPetSection(props: ConfigP...` |
| 1174 | fn | renderSidebarPreferencesSection | (private) | `function renderSidebarPreferencesSection(props:...` |
| 1195 | fn | renderAppearanceSection | (private) | `function renderAppearanceSection(props: ConfigP...` |
| 1420 | fn | renderBusyButtonContent | (private) | `const renderBusyButtonContent = (busy: boolean,...` |
| 1426 | type | ConfigApplyBannerProps | (private) | - |
| 1436 | fn | renderConfigApplyBanner | pub | `export function renderConfigApplyBanner(props: ...` |
| 1464 | fn | renderConfigAutoSaveStatus | pub | `export function renderConfigAutoSaveStatus(prop...` |
| 1491 | fn | resetConfigEphemeralState | (private) | `function resetConfigEphemeralState(viewState: C...` |
| 1501 | fn | configContextKey | (private) | `function configContextKey(props: ConfigProps): ...` |
| 1513 | fn | isSensitivePathRevealed | (private) | `function isSensitivePathRevealed(` |
| 1521 | fn | toggleSensitivePathReveal | (private) | `function toggleSensitivePathReveal(viewState: C...` |
| 1533 | fn | renderConfig | pub | `export function renderConfig(props: ConfigProps) {` |
| 1559 | fn | resetContentScroll | (private) | `const resetContentScroll = (target: EventTarget...` |
| 1602 | fn | isVisibleVirtualSection | (private) | `const isVisibleVirtualSection = (key: string) =>` |
| 1606 | fn | resolveNavSectionLabel | (private) | `const resolveNavSectionLabel = (key: string) => {` |
| 1649 | fn | renderAccordionNav | (private) | `function renderAccordionNav() {` |

## Public API

### `createConfigViewState`

```
export function createConfigViewState(): ConfigViewState {
```

**Line:** 107 | **Kind:** fn

### `renderConfigApplyBanner`

```
export function renderConfigApplyBanner(props: ConfigApplyBannerProps) {
```

**Line:** 1436 | **Kind:** fn

### `renderConfigAutoSaveStatus`

```
export function renderConfigAutoSaveStatus(props: {
```

**Line:** 1464 | **Kind:** fn

### `renderConfig`

```
export function renderConfig(props: ConfigProps) {
```

**Line:** 1533 | **Kind:** fn
