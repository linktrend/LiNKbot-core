# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## ui/src/pages/config/config-page.ts (1001 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | type | ConfigFormMode | (private) |
| 61 | type | ConfigSelection | (private) |
| 64 | type | ConfigPageSetting | (private) |
| 95 | fn | isUnknownSystemInfoMethodError | (private) |
| 103 | fn | supportsSystemInfo | pub |
| 107 | fn | defaultConfigSelection | (private) |
| 132 | fn | normalizeConfigSelection | (private) |
| 153 | fn | configSelectionFromSearch | pub |
| 161 | fn | configPageTitle | (private) |
| 169 | fn | extractQuickSettingsSecurity | (private) |
| 212 | fn | applyTextScale | (private) |
| 222 | class | ConfigPage | pub |

## ui/src/pages/config/view.browser.test.ts (1389 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | fn | baseProps | (private) |
| 102 | fn | findOptionalButtonByText | (private) |
| 111 | fn | renderConfigView | (private) |
| 120 | fn | rerender | (private) |
| 132 | fn | normalizedText | (private) |
| 136 | fn | findButtonByText | (private) |
| 146 | fn | findButtonContainingText | (private) |
| 156 | fn | sectionTabLabels | (private) |
| 162 | fn | selectConfigTab | (private) |
| 172 | fn | queryRequired | (private) |
| 597 | fn | renderCase | (private) |
| 809 | fn | rerender | (private) |
| 878 | fn | rerender | (private) |
| 928 | fn | rerender | (private) |
| 1014 | fn | rerender | (private) |
| 1058 | fn | rerender | (private) |

## ui/src/pages/config/view.ts (2113 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 71 | type | SettingsMediaDeviceState | (private) |
| 78 | type | ConfigFormMode | (private) |
| 80 | type | ConfigDiffPath | (private) |
| 81 | type | ConfigDiffEntry | (private) |
| 82 | type | RawDiffCache | (private) |
| 87 | type | SchemaAnalysisCache | (private) |
| 94 | type | ConfigViewState | pub |
| 107 | fn | createConfigViewState | pub |
| 120 | type | ConfigProps | pub |
| 500 | type | SectionCategory | (private) |
| 506 | type | SectionCategoryDefinition | (private) |
| 555 | fn | getSectionIcon | (private) |
| 559 | fn | scopeSchemaSections | (private) |
| 584 | fn | asConfigSchema | (private) |
| 591 | fn | configSectionKey | (private) |
| 595 | fn | getConfigSchemaAnalysis | (private) |
| 626 | fn | formatConfigDiffPath | (private) |
| 630 | fn | computeDiff | (private) |
| 640 | fn | pushChange | (private) |
| 646 | fn | arrayValuesDiffer | (private) |
| 661 | fn | objectValuesDiffer | (private) |
| 679 | fn | valuesDiffer | (private) |
| 705 | fn | compare | (private) |
| 747 | fn | computeRawDiff | (private) |
| 790 | fn | truncateValue | (private) |
| 809 | fn | hintKeyMatchesPathPrefix | (private) |
| 817 | fn | hasSensitiveHintForPathPrefix | (private) |
| 823 | fn | isSensitiveDiffPath | (private) |
| 838 | fn | renderRawDiffValue | (private) |
| 851 | type | ThemeOption | (private) |
| 878 | fn | renderThemeCardVisual | (private) |
| 893 | fn | importedThemeName | (private) |
| 899 | fn | focusCustomThemeImportInput | (private) |
| 919 | fn | renderSettingsMediaDeviceField | (private) |
| 989 | fn | renderSettingsMicrophoneField | (private) |
| 1002 | fn | renderSettingsCameraField | (private) |
| 1015 | fn | renderChatPreferencesSection | (private) |
| 1106 | fn | renderLobsterPetSection | (private) |
| 1174 | fn | renderSidebarPreferencesSection | (private) |
| 1195 | fn | renderAppearanceSection | (private) |
| 1420 | fn | renderBusyButtonContent | (private) |
| 1426 | type | ConfigApplyBannerProps | (private) |
| 1436 | fn | renderConfigApplyBanner | pub |
| 1464 | fn | renderConfigAutoSaveStatus | pub |
| 1491 | fn | resetConfigEphemeralState | (private) |
| 1501 | fn | configContextKey | (private) |
| 1513 | fn | isSensitivePathRevealed | (private) |
| 1521 | fn | toggleSensitivePathReveal | (private) |
| 1533 | fn | renderConfig | pub |
| 1559 | fn | resetContentScroll | (private) |
| 1602 | fn | isVisibleVirtualSection | (private) |
| 1606 | fn | resolveNavSectionLabel | (private) |
| 1649 | fn | renderAccordionNav | (private) |
