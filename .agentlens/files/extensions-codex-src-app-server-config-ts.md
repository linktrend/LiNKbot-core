# extensions/codex/src/app-server/config.ts

[← Back to Module](../modules/extensions-codex-src-app-server/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2501
- **Language:** TypeScript
- **Symbols:** 160
- **Public symbols:** 35

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 45 | type | CodexAppServerTransportMode | (private) | - |
| 46 | type | CodexAppServerHomeScope | (private) | - |
| 47 | type | CodexAppServerPolicyMode | (private) | - |
| 48 | type | CodexAppServerConnectionClass | pub | - |
| 49 | type | CodexAppServerRemoteAppsSubstrate | (private) | - |
| 50 | type | OpenClawExecMode | (private) | - |
| 51 | type | OpenClawExecSecurity | (private) | - |
| 52 | type | OpenClawExecAsk | (private) | - |
| 53 | type | OpenClawExecApprovalFloorsForCodexAppServer | (private) | - |
| 57 | type | OpenClawExecPolicyForCodexAppServer | pub | - |
| 63 | type | OpenClawExecPolicy | (private) | - |
| 64 | type | ProviderAuthAliasConfig | (private) | - |
| 65 | type | CodexAppServerDefaultPolicy | (private) | - |
| 72 | type | CodexAppServerApprovalPolicy | pub | - |
| 73 | type | CodexAppServerApprovalPolicySource | (private) | - |
| 74 | type | CodexAppServerEffectiveApprovalPolicy | (private) | - |
| 75 | type | CodexAppServerSandboxMode | pub | - |
| 76 | type | CodexAppServerApprovalsReviewer | (private) | - |
| 77 | type | CodexAppServerCommandSource | (private) | - |
| 78 | type | CodexManagedCommandOrder | pub | - |
| 79 | type | CodexDynamicToolsLoading | pub | - |
| 80 | type | CodexPluginDestructivePolicy | (private) | - |
| 81 | type | CodexPluginDestructiveApprovalMode | pub | - |
| 85 | type | CodexPluginMarketplaceName | pub | - |
| 89 | type | CodexComputerUseConfig | pub | - |
| 107 | type | ResolvedCodexComputerUseConfig | pub | - |
| 125 | type | CodexPluginEntryConfig | (private) | - |
| 132 | type | CodexPluginsConfig | (private) | - |
| 139 | type | CodexSupervisionEndpoint | pub | - |
| 156 | type | CodexSupervisionConfig | (private) | - |
| 163 | type | CodexAppServerExperimentalConfig | (private) | - |
| 167 | type | CodexAppServerNetworkProxyDomainPermission | (private) | - |
| 168 | type | CodexAppServerNetworkProxyUnixSocketPermission | (private) | - |
| 169 | type | CodexAppServerNetworkProxyBaseProfile | (private) | - |
| 170 | type | CodexAppServerNetworkProxyMode | (private) | - |
| 172 | type | CodexAppServerNetworkProxyConfig | (private) | - |
| 189 | type | ResolvedCodexAppServerNetworkProxyConfig | (private) | - |
| 195 | type | ResolvedCodexPluginPolicy | pub | - |
| 204 | type | ResolvedCodexPluginsPolicy | pub | - |
| 213 | type | CodexAppServerStartOptions | pub | - |
| 233 | type | CodexAppServerRuntimeOptions | pub | - |
| 252 | type | CodexModelBackedReviewerContext | (private) | - |
| 262 | type | CodexPluginConfig | pub | - |
| 297 | fn | shouldAutoApproveCodexAppServerApprovals | pub | `export function shouldAutoApproveCodexAppServer...` |
| 485 | fn | readCodexPluginConfig | pub | `export function readCodexPluginConfig(value: un...` |
| 498 | fn | isCodexSandboxExecServerEnabled | pub | `export function isCodexSandboxExecServerEnabled...` |
| 502 | fn | assertCodexAppServerCommandHasNoInlineArgs | (private) | `function assertCodexAppServerCommandHasNoInline...` |
| 523 | fn | resolveCodexPluginsPolicy | pub | `export function resolveCodexPluginsPolicy(plugi...` |
| 560 | fn | isCodexPluginMarketplaceName | (private) | `function isCodexPluginMarketplaceName(` |
| 568 | fn | resolveCodexPluginDestructivePolicy | (private) | `function resolveCodexPluginDestructivePolicy(po...` |
| 581 | fn | resolveCodexAppServerRuntimeOptions | pub | `export function resolveCodexAppServerRuntimeOpt...` |
| 824 | fn | resolveCodexAppServerStartOptionsForAgent | pub | `export function resolveCodexAppServerStartOptio...` |
| 855 | fn | isCodexAppServerApprovalPolicyAllowedByRequirements | pub | `export function isCodexAppServerApprovalPolicyA...` |
| 873 | fn | canUseCodexModelBackedApprovalsReviewerForModel | pub | `export function canUseCodexModelBackedApprovals...` |
| 891 | fn | isTrustedCodexModelBackedOpenAIProvider | (private) | `function isTrustedCodexModelBackedOpenAIProvide...` |
| 919 | fn | resolveCodexModelBackedReviewerPolicyContext | pub | `export function resolveCodexModelBackedReviewer...` |
| 961 | fn | resolveCodexComputerUseConfig | pub | `export function resolveCodexComputerUseConfig(` |
| 1070 | fn | normalizeComputerUseHealthCheckIntervalMinutes | (private) | `function normalizeComputerUseHealthCheckInterva...` |
| 1076 | fn | normalizeComputerUsePluginCacheMode | (private) | `function normalizeComputerUsePluginCacheMode(va...` |
| 1080 | fn | codexAppServerStartOptionsKey | pub | `export function codexAppServerStartOptionsKey(` |
| 1114 | fn | codexSandboxPolicyForTurn | pub | `export function codexSandboxPolicyForTurn(` |
| 1134 | fn | resolveCodexSupervisionAppServerRuntimeOptions | pub | `export function resolveCodexSupervisionAppServe...` |
| 1150 | fn | resolveCodexAppServerNetworkProxy | (private) | `function resolveCodexAppServerNetworkProxy(` |
| 1201 | fn | resolveNetworkProxyPermissionProfileName | (private) | `function resolveNetworkProxyPermissionProfileName(` |
| 1216 | fn | fingerprintCodexAppServerNetworkProxyConfigPatch | (private) | `function fingerprintCodexAppServerNetworkProxyC...` |
| 1220 | fn | normalizeNetworkProxyPermissionMap | (private) | `function normalizeNetworkProxyPermissionMap<TPe...` |
| 1229 | fn | removeUndefinedJsonFields | (private) | `function removeUndefinedJsonFields(value: Recor...` |
| 1235 | fn | stableStringifyJson | (private) | `function stableStringifyJson(value: JsonValue):...` |
| 1248 | fn | withMcpElicitationsApprovalPolicy | pub | `export function withMcpElicitationsApprovalPolicy(` |
| 1281 | fn | resolveTransport | (private) | `function resolveTransport(value: unknown): Code...` |
| 1285 | fn | normalizeRemoteWorkspaceRoot | (private) | `function normalizeRemoteWorkspaceRoot(value: st...` |
| 1289 | fn | inferCodexAppServerConnectionClass | (private) | `function inferCodexAppServerConnectionClass(par...` |
| 1299 | fn | assertCodexAppServerConnectionClassConfig | (private) | `function assertCodexAppServerConnectionClassCon...` |
| 1318 | fn | assertCodexAppServerConnectionSecurity | pub | `export function assertCodexAppServerConnectionS...` |
| 1331 | fn | isLoopbackWebSocketUrl | (private) | `function isLoopbackWebSocketUrl(value: string):...` |
| 1351 | fn | hasIdentityBearingWebSocketAuth | (private) | `function hasIdentityBearingWebSocketAuth(params: {` |
| 1364 | fn | resolvePolicyMode | (private) | `function resolvePolicyMode(value: unknown): Cod...` |
| 1368 | fn | resolveDefaultCodexAppServerPolicy | (private) | `function resolveDefaultCodexAppServerPolicy(par...` |
| 1437 | fn | readCodexRequirementsToml | (private) | `function readCodexRequirementsToml(params: {` |
| 1460 | fn | resolveCodexRequirementsPath | (private) | `function resolveCodexRequirementsPath(env: Node...` |
| 1468 | fn | parseAllowedSandboxModesFromCodexRequirements | (private) | `function parseAllowedSandboxModesFromCodexRequi...` |
| 1483 | fn | parseAllowedApprovalPoliciesFromCodexRequirements | (private) | `function parseAllowedApprovalPoliciesFromCodexR...` |
| 1496 | fn | parseAllowedApprovalsReviewersFromCodexRequirements | (private) | `function parseAllowedApprovalsReviewersFromCode...` |
| 1509 | fn | parseMatchingRemoteSandboxModesFromCodexRequirements | (private) | `function parseMatchingRemoteSandboxModesFromCod...` |
| 1529 | fn | parseRequirementsSandboxModes | (private) | `function parseRequirementsSandboxModes(` |
| 1541 | fn | parseTopLevelRequirementsStringArray | (private) | `function parseTopLevelRequirementsStringArray(c...` |
| 1546 | fn | parseTomlStringValue | (private) | `function parseTomlStringValue(content: string, ...` |
| 1550 | fn | parseInlineOpenAIModelProviderBaseUrl | (private) | `function parseInlineOpenAIModelProviderBaseUrl(...` |
| 1557 | fn | parseTomlStringAssignmentValue | (private) | `function parseTomlStringAssignmentValue(` |
| 1573 | fn | parseTomlStringAssignment | (private) | `function parseTomlStringAssignment(content: str...` |
| 1579 | fn | tomlDottedKeyPattern | (private) | `function tomlDottedKeyPattern(key: string): str...` |
| 1583 | fn | tomlKeyPattern | (private) | `function tomlKeyPattern(key: string): string {` |
| 1588 | fn | parseRequirementsStringArray | (private) | `function parseRequirementsStringArray(content: ...` |
| 1601 | fn | parseTomlTableSection | (private) | `function parseTomlTableSection(content: string,...` |
| 1615 | fn | parseTomlArrayTableSections | (private) | `function parseTomlArrayTableSections(content: s...` |
| 1633 | fn | firstTomlTableOffset | (private) | `function firstTomlTableOffset(content: string):...` |
| 1638 | fn | stripTomlLineComments | (private) | `function stripTomlLineComments(value: string): ...` |
| 1678 | fn | normalizeRequirementsSandboxMode | (private) | `function normalizeRequirementsSandboxMode(value...` |
| 1692 | fn | normalizeRequirementsHostName | (private) | `function normalizeRequirementsHostName(value: s...` |
| 1697 | fn | requirementsHostNameMatchesAnyPattern | (private) | `function requirementsHostNameMatchesAnyPattern(...` |
| 1704 | fn | globPatternMatches | (private) | `function globPatternMatches(value: string, patt...` |
| 1719 | fn | normalizeRequirementsApprovalPolicy | (private) | `function normalizeRequirementsApprovalPolicy(` |
| 1731 | fn | normalizeRequirementsApprovalsReviewer | (private) | `function normalizeRequirementsApprovalsReviewer(` |
| 1738 | fn | selectGuardianApprovalPolicy | (private) | `function selectGuardianApprovalPolicy(` |
| 1759 | fn | selectGuardianApprovalsReviewer | (private) | `function selectGuardianApprovalsReviewer(` |
| 1780 | fn | selectUserApprovalsReviewer | (private) | `function selectUserApprovalsReviewer(` |
| 1792 | fn | isCodexModelBackedApprovalsReviewerProvider | (private) | `function isCodexModelBackedApprovalsReviewerPro...` |
| 1797 | fn | isTrustedCodexModelBackedApprovalsReviewerProvider | (private) | `function isTrustedCodexModelBackedApprovalsRevi...` |
| 1814 | fn | readCodexBaseUrlOverridesForModelBackedReview | (private) | `function readCodexBaseUrlOverridesForModelBacke...` |
| 1858 | fn | readCodexAppServerConfigToml | (private) | `function readCodexAppServerConfigToml(` |
| 1878 | fn | codexConfigEnablesNativeComputerUse | (private) | `function codexConfigEnablesNativeComputerUse(` |
| 1925 | fn | resolveCodexAppServerConfigPath | (private) | `function resolveCodexAppServerConfigPath(` |
| 1939 | fn | resolveCodexAppServerUserHomeDir | pub | `export function resolveCodexAppServerUserHomeDir(` |
| 1947 | fn | readErrorCode | (private) | `function readErrorCode(error: unknown): string ...` |
| 1953 | fn | readConfiguredOpenAIProvidersForModelBackedReview | (private) | `function readConfiguredOpenAIProvidersForModelB...` |
| 1973 | fn | configuredOpenAIProviderIsTrustedForModelBackedReview | (private) | `function configuredOpenAIProviderIsTrustedForMo...` |
| 2010 | fn | normalizeOpenAIModelBackedReviewerModelId | (private) | `function normalizeOpenAIModelBackedReviewerMode...` |
| 2019 | fn | matchesConfiguredOpenAIModelId | (private) | `function matchesConfiguredOpenAIModelId(modelId...` |
| 2024 | fn | hasNonEmptyRecord | (private) | `function hasNonEmptyRecord(value: unknown): boo...` |
| 2029 | fn | isNativeOpenAIBaseUrl | (private) | `function isNativeOpenAIBaseUrl(value: unknown):...` |
| 2041 | fn | openAIBaseUrlEnvOverridesAreTrustedForModelBackedReview | (private) | `function openAIBaseUrlEnvOverridesAreTrustedFor...` |
| 2047 | fn | isNativeChatGPTBaseUrl | (private) | `function isNativeChatGPTBaseUrl(value: unknown)...` |
| 2059 | fn | normalizeCodexModelBackedReviewerPolicyProvider | (private) | `function normalizeCodexModelBackedReviewerPolic...` |
| 2063 | fn | inferProviderFromModelRef | (private) | `function inferProviderFromModelRef(model: strin...` |
| 2069 | fn | selectForcedPromptingSandbox | (private) | `function selectForcedPromptingSandbox(params: {` |
| 2079 | fn | selectForcedDangerFullAccessSandbox | (private) | `function selectForcedDangerFullAccessSandbox(pa...` |
| 2098 | fn | selectGuardianSandbox | (private) | `function selectGuardianSandbox(` |
| 2113 | fn | resolveApprovalPolicy | (private) | `function resolveApprovalPolicy(value: unknown):...` |
| 2120 | fn | resolveSandbox | (private) | `function resolveSandbox(value: unknown): CodexA...` |
| 2126 | fn | resolveApprovalsReviewer | (private) | `function resolveApprovalsReviewer(value: unknow...` |
| 2132 | fn | resolveOpenClawExecPolicyFromConfig | (private) | `function resolveOpenClawExecPolicyFromConfig(pa...` |
| 2154 | fn | resolveOpenClawExecPolicyForCodexAppServer | pub | `export function resolveOpenClawExecPolicyForCod...` |
| 2176 | fn | resolveEffectiveOpenClawExecModeForCodexAppServer | (private) | `function resolveEffectiveOpenClawExecModeForCod...` |
| 2186 | fn | resolveCodexPolicyModeForOpenClawExecMode | (private) | `function resolveCodexPolicyModeForOpenClawExecM...` |
| 2195 | fn | assertCodexAppServerAllowedForOpenClawExecMode | (private) | `function assertCodexAppServerAllowedForOpenClaw...` |
| 2203 | fn | createDefaultOpenClawExecPolicy | (private) | `function createDefaultOpenClawExecPolicy(): Ope...` |
| 2211 | fn | applyOpenClawExecPolicyLayer | (private) | `function applyOpenClawExecPolicyLayer(` |
| 2240 | fn | resolveOpenClawExecApprovalFloorsForCodexAppServer | (private) | `function resolveOpenClawExecApprovalFloorsForCo...` |
| 2258 | fn | applyOpenClawExecApprovalFloors | (private) | `function applyOpenClawExecApprovalFloors(` |
| 2280 | fn | resolveOpenClawExecPolicyForMode | (private) | `function resolveOpenClawExecPolicyForMode(` |
| 2298 | fn | resolveOpenClawExecModeFromPolicy | (private) | `function resolveOpenClawExecModeFromPolicy(para...` |
| 2314 | fn | minOpenClawExecSecurity | (private) | `function minOpenClawExecSecurity(` |
| 2322 | fn | maxOpenClawExecAsk | (private) | `function maxOpenClawExecAsk(left: OpenClawExecA...` |
| 2327 | fn | readExecMode | (private) | `function readExecMode(value: unknown): OpenClaw...` |
| 2337 | fn | readRecord | (private) | `function readRecord(value: unknown): Record<str...` |
| 2343 | fn | normalizeCodexServiceTier | pub | `export function normalizeCodexServiceTier(value...` |
| 2361 | fn | isCodexFastServiceTier | pub | `export function isCodexFastServiceTier(value: u...` |
| 2365 | fn | normalizePositiveNumber | (private) | `function normalizePositiveNumber(value: unknown...` |
| 2369 | fn | normalizeHeaders | (private) | `function normalizeHeaders(value: unknown): Reco...` |
| 2389 | fn | normalizeCodexAppServerSecretInput | (private) | `function normalizeCodexAppServerSecretInput(par...` |
| 2396 | fn | normalizeStringList | (private) | `function normalizeStringList(value: unknown): s...` |
| 2400 | fn | readBooleanEnv | (private) | `function readBooleanEnv(value: string | undefin...` |
| 2414 | fn | readExecSecurity | (private) | `function readExecSecurity(value: unknown): Open...` |
| 2418 | fn | readExecAsk | (private) | `function readExecAsk(value: unknown): OpenClawE...` |
| 2422 | fn | readNumberEnv | (private) | `function readNumberEnv(value: string | undefine...` |
| 2431 | fn | resolveArgs | (private) | `function resolveArgs(configArgs: unknown, envAr...` |
| 2443 | fn | readNonEmptyString | (private) | `function readNonEmptyString(value: unknown): st...` |
| 2451 | fn | hashSecretForKey | (private) | `function hashSecretForKey(value: string | undef...` |
| 2462 | fn | getStartOptionsKeySecret | (private) | `function getStartOptionsKeySecret(): Buffer {` |
| 2470 | fn | splitShellWords | (private) | `function splitShellWords(value: string): string...` |

## Public API

### `shouldAutoApproveCodexAppServerApprovals`

```
export function shouldAutoApproveCodexAppServerApprovals(
```

**Line:** 297 | **Kind:** fn

### `readCodexPluginConfig`

```
export function readCodexPluginConfig(value: unknown): CodexPluginConfig {
```

**Line:** 485 | **Kind:** fn

### `isCodexSandboxExecServerEnabled`

```
export function isCodexSandboxExecServerEnabled(pluginConfig?: unknown): boolean {
```

**Line:** 498 | **Kind:** fn

### `resolveCodexPluginsPolicy`

```
export function resolveCodexPluginsPolicy(pluginConfig?: unknown): ResolvedCodexPluginsPolicy {
```

**Line:** 523 | **Kind:** fn

### `resolveCodexAppServerRuntimeOptions`

```
export function resolveCodexAppServerRuntimeOptions(
```

**Line:** 581 | **Kind:** fn

### `resolveCodexAppServerStartOptionsForAgent`

```
export function resolveCodexAppServerStartOptionsForAgent(params: {
```

**Line:** 824 | **Kind:** fn

### `isCodexAppServerApprovalPolicyAllowedByRequirements`

```
export function isCodexAppServerApprovalPolicyAllowedByRequirements(
```

**Line:** 855 | **Kind:** fn

### `canUseCodexModelBackedApprovalsReviewerForModel`

```
export function canUseCodexModelBackedApprovalsReviewerForModel(
```

**Line:** 873 | **Kind:** fn

### `resolveCodexModelBackedReviewerPolicyContext`

```
export function resolveCodexModelBackedReviewerPolicyContext(params: {
```

**Line:** 919 | **Kind:** fn

### `resolveCodexComputerUseConfig`

```
export function resolveCodexComputerUseConfig(
```

**Line:** 961 | **Kind:** fn

### `codexAppServerStartOptionsKey`

```
export function codexAppServerStartOptionsKey(
```

**Line:** 1080 | **Kind:** fn

### `codexSandboxPolicyForTurn`

```
export function codexSandboxPolicyForTurn(
```

**Line:** 1114 | **Kind:** fn

### `resolveCodexSupervisionAppServerRuntimeOptions`

```
export function resolveCodexSupervisionAppServerRuntimeOptions(
```

**Line:** 1134 | **Kind:** fn

### `withMcpElicitationsApprovalPolicy`

```
export function withMcpElicitationsApprovalPolicy(
```

**Line:** 1248 | **Kind:** fn

### `assertCodexAppServerConnectionSecurity`

```
export function assertCodexAppServerConnectionSecurity(params: {
```

**Line:** 1318 | **Kind:** fn

### `resolveCodexAppServerUserHomeDir`

```
export function resolveCodexAppServerUserHomeDir(
```

**Line:** 1939 | **Kind:** fn

### `resolveOpenClawExecPolicyForCodexAppServer`

```
export function resolveOpenClawExecPolicyForCodexAppServer(params: {
```

**Line:** 2154 | **Kind:** fn

### `normalizeCodexServiceTier`

```
export function normalizeCodexServiceTier(value: unknown): CodexServiceTier | undefined {
```

**Line:** 2343 | **Kind:** fn

### `isCodexFastServiceTier`

```
export function isCodexFastServiceTier(value: unknown): boolean {
```

**Line:** 2361 | **Kind:** fn
