# src/config/validation.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2205
- **Language:** TypeScript
- **Symbols:** 69
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 78 | fn | formatRemovedPluginConfigWarning | (private) | `function formatRemovedPluginConfigWarning(plugi...` |
| 85 | type | UnknownIssueRecord | (private) | - |
| 86 | type | ConfigPathSegment | (private) | - |
| 87 | type | ExplicitPluginReferences | (private) | - |
| 93 | type | AllowedValuesCollection | (private) | - |
| 98 | type | JsonSchemaLike | (private) | - |
| 100 | fn | materializeBundledModelProviderOverlays | (private) | `function materializeBundledModelProviderOverlay...` |
| 132 | fn | stripPreservedLegacyRootKeysForValidation | (private) | `function stripPreservedLegacyRootKeysForValidat...` |
| 173 | fn | normalizeBundledChannelId | (private) | `function normalizeBundledChannelId(raw?: string...` |
| 182 | fn | toIssueRecord | (private) | `function toIssueRecord(value: unknown): Unknown...` |
| 189 | fn | toConfigPathSegments | (private) | `function toConfigPathSegments(pathLocal3: unkno...` |
| 199 | fn | formatConfigPath | (private) | `function formatConfigPath(segments: readonly Co...` |
| 203 | fn | withConfigIssuePath | (private) | `function withConfigIssuePath(` |
| 214 | fn | formatMissingOfficialExternalPluginWarning | (private) | `function formatMissingOfficialExternalPluginWar...` |
| 236 | fn | asJsonSchemaLike | (private) | `function asJsonSchemaLike(value: unknown): Json...` |
| 240 | fn | lookupJsonSchemaNode | (private) | `function lookupJsonSchemaNode(` |
| 267 | fn | collectAllowedValuesFromJsonSchemaNode | (private) | `function collectAllowedValuesFromJsonSchemaNode...` |
| 310 | fn | collectAllowedValuesFromBundledChannelSchemaPath | (private) | `function collectAllowedValuesFromBundledChannel...` |
| 327 | fn | formatRawChannelConfigIssueMessage | (private) | `function formatRawChannelConfigIssueMessage(mes...` |
| 331 | fn | buildDmPolicyDependencyWarning | (private) | `function buildDmPolicyDependencyWarning(params: {` |
| 359 | fn | hasDefinedConfigValue | (private) | `function hasDefinedConfigValue(record: Record<s...` |
| 363 | fn | hasConfiguredDmAllowFrom | (private) | `function hasConfiguredDmAllowFrom(` |
| 380 | fn | isConfigRecordEnabled | (private) | `function isConfigRecordEnabled(record: Record<s...` |
| 384 | type | ChannelDmPolicyDependencyWarningOptions | (private) | - |
| 388 | fn | hasChannelDmPolicyDependencyWarningCandidates | (private) | `function hasChannelDmPolicyDependencyWarningCan...` |
| 412 | fn | collectChannelDmPolicyDependencyWarnings | (private) | `function collectChannelDmPolicyDependencyWarnings(` |
| 468 | fn | collectRawBundledChannelConfigIssues | (private) | `function collectRawBundledChannelConfigIssues(c...` |
| 503 | fn | collectAllowedValuesFromCustomIssue | (private) | `function collectAllowedValuesFromCustomIssue(re...` |
| 518 | fn | appendNumericBoundHint | (private) | `function appendNumericBoundHint(message: string...` |
| 543 | fn | collectAllowedValuesFromIssue | (private) | `function collectAllowedValuesFromIssue(issue: u...` |
| 594 | fn | collectAllowedValuesFromIssueList | (private) | `function collectAllowedValuesFromIssueList(` |
| 613 | fn | collectAllowedValuesFromUnknownIssue | (private) | `function collectAllowedValuesFromUnknownIssue(i...` |
| 621 | fn | isBindingsIssuePath | (private) | `function isBindingsIssuePath(pathSegments: read...` |
| 625 | fn | isRouteTypeMismatchIssue | (private) | `function isRouteTypeMismatchIssue(issue: Unknow...` |
| 636 | fn | extractBindingsSpecificUnionIssue | (private) | `function extractBindingsSpecificUnionIssue(` |
| 719 | fn | isObjectSecretRefCandidate | (private) | `function isObjectSecretRefCandidate(value: unkn...` |
| 726 | fn | formatUnsupportedMutableSecretRefMessage | (private) | `function formatUnsupportedMutableSecretRefMessa...` |
| 735 | fn | pushUnsupportedMutableSecretRefIssue | (private) | `function pushUnsupportedMutableSecretRefIssue(` |
| 749 | fn | collectUnsupportedMutableSecretRefIssues | (private) | `function collectUnsupportedMutableSecretRefIssu...` |
| 758 | fn | formatFilteredUnrecognizedKeyMessage | (private) | `function formatFilteredUnrecognizedKeyMessage(m...` |
| 766 | fn | filterUnsupportedMutableSecretRefSchemaIssue | (private) | `function filterUnsupportedMutableSecretRefSchem...` |
| 807 | fn | mergeUnsupportedMutableSecretRefIssues | (private) | `function mergeUnsupportedMutableSecretRefIssues(` |
| 830 | fn | collectUnsupportedSecretRefPolicyIssues | pub | `export function collectUnsupportedSecretRefPoli...` |
| 834 | fn | mapZodIssueToConfigIssue | (private) | `function mapZodIssueToConfigIssue(issue: unknow...` |
| 877 | fn | collectExplicitPluginReferences | (private) | `function collectExplicitPluginReferences(raw: u...` |
| 928 | fn | resolveExplicitPluginReferencePath | (private) | `function resolveExplicitPluginReferencePath(` |
| 951 | fn | isWorkspaceAvatarPath | (private) | `function isWorkspaceAvatarPath(value: string, w...` |
| 957 | fn | createIdentityAvatarIssue | (private) | `function createIdentityAvatarIssue(index: numbe...` |
| 962 | fn | validateIdentityAvatar | (private) | `function validateIdentityAvatar(config: OpenCla...` |
| 1015 | fn | validateGatewayTailscaleBind | (private) | `function validateGatewayTailscaleBind(config: O...` |
| 1042 | fn | validateGatewayTailscaleAuth | (private) | `function validateGatewayTailscaleAuth(config: O...` |
| 1055 | fn | collectModelPolicyAllowIssues | (private) | `function collectModelPolicyAllowIssues(config: ...` |
| 1070 | fn | validateRefs | (private) | `const validateRefs = (` |
| 1114 | fn | validateConfigObjectRaw | pub | `export function validateConfigObjectRaw(` |
| 1184 | fn | validateConfigObject | pub | `export function validateConfigObject(` |
| 1203 | type | ValidateConfigWithPluginsResult | (private) | - |
| 1215 | type | ValidateConfigWithPluginsParams | (private) | - |
| 1226 | fn | validateConfigObjectWithPlugins | pub | `export function validateConfigObjectWithPlugins(` |
| 1241 | fn | validateConfigObjectRawWithPlugins | pub | `export function validateConfigObjectRawWithPlug...` |
| 1256 | fn | validateConfigObjectWithPluginsBase | (private) | `function validateConfigObjectWithPluginsBase(` |
| 1311 | type | RegistryInfo | (private) | - |
| 1588 | fn | matches | (private) | `const matches = (pluginId: string) => candidate...` |
| 1615 | fn | validateWebSearchProvider | (private) | `const validateWebSearchProvider = () => {` |
| 1678 | fn | validateConfiguredModelRefs | (private) | `const validateConfiguredModelRefs = () => {` |
| 1729 | fn | replaceChannelConfig | (private) | `const replaceChannelConfig = (channelId: string...` |
| 1742 | fn | replacePluginEntryConfig | (private) | `const replacePluginEntryConfig = (pluginId: str...` |
| 1833 | fn | validateHeartbeatTarget | (private) | `const validateHeartbeatTarget = (target: string...` |
| 1969 | fn | findBlockedPluginDiagnostic | (private) | `const findBlockedPluginDiagnostic = (pluginId: ...` |
| 1981 | fn | pushMissingPluginIssue | (private) | `const pushMissingPluginIssue = (` |

## Public API

### `collectUnsupportedSecretRefPolicyIssues`

```
export function collectUnsupportedSecretRefPolicyIssues(raw: unknown): ConfigValidationIssue[] {
```

**Line:** 830 | **Kind:** fn

### `validateConfigObjectRaw`

```
export function validateConfigObjectRaw(
```

**Line:** 1114 | **Kind:** fn

### `validateConfigObject`

```
export function validateConfigObject(
```

**Line:** 1184 | **Kind:** fn

### `validateConfigObjectWithPlugins`

```
export function validateConfigObjectWithPlugins(
```

**Line:** 1226 | **Kind:** fn

### `validateConfigObjectRawWithPlugins`

```
export function validateConfigObjectRawWithPlugins(
```

**Line:** 1241 | **Kind:** fn
