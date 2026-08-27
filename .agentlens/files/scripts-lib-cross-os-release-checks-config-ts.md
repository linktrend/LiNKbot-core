# scripts/lib/cross-os-release-checks/config.ts

[← Back to Module](../modules/scripts-lib-cross-os-release-checks/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 686
- **Language:** TypeScript
- **Symbols:** 66
- **Public symbols:** 55

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 5 | type | CrossOsSuite | (private) | - |
| 6 | type | CrossOsMode | (private) | - |
| 7 | type | CrossOsOsId | (private) | - |
| 8 | type | ProviderId | (private) | - |
| 9 | type | ProviderConfig | pub | - |
| 17 | type | ParsedArgs | pub | - |
| 18 | type | LaneResult | pub | - |
| 19 | type | CandidateBuild | pub | - |
| 26 | type | PackageJson | pub | - |
| 32 | type | LaneState | pub | - |
| 42 | type | GatewayHandle | pub | - |
| 47 | type | CommandResult | pub | - |
| 48 | type | AgentTurnResult | pub | - |
| 49 | type | CommandOptions | pub | - |
| 57 | type | CommandInvocation | pub | - |
| 63 | type | Cleanup | pub | - |
| 64 | type | LaneBaseParams | pub | - |
| 69 | type | LaneCommandParams | pub | - |
| 74 | type | AgentOutputOptions | pub | - |
| 75 | type | SummaryPayload | pub | - |
| 146 | fn | resolveProviderConfig | pub | `export function resolveProviderConfig(provider:...` |
| 165 | fn | buildCrossOsReleaseSmokePluginAllowlist | pub | `export function buildCrossOsReleaseSmokePluginA...` |
| 171 | fn | buildCrossOsReleaseSmokeMemorySlotConfigArgs | pub | `export function buildCrossOsReleaseSmokeMemoryS...` |
| 175 | fn | shouldSeedProviderConfigModels | (private) | `function shouldSeedProviderConfigModels(provide...` |
| 181 | fn | buildReleaseProviderConfigOverride | pub | `export function buildReleaseProviderConfigOverr...` |
| 213 | fn | managedGatewayRestartCommandTimeoutMs | pub | `export function managedGatewayRestartCommandTim...` |
| 227 | fn | gatewayReadyDeadlineMs | pub | `export function gatewayReadyDeadlineMs(platform...` |
| 233 | fn | resolveNpmPackTarballFileName | pub | `export function resolveNpmPackTarballFileName(v...` |
| 246 | fn | resolvePackDestinationTarball | pub | `export function resolvePackDestinationTarball(` |
| 267 | fn | parseArgs | pub | `export function parseArgs(argv: string[]): Pars...` |
| 289 | fn | parsePositiveIntegerEnv | pub | `export function parsePositiveIntegerEnv(name: s...` |
| 304 | fn | parseBooleanEnv | (private) | `function parseBooleanEnv(name: string, fallback...` |
| 318 | fn | resolveCrossOsAgentTurnOptional | pub | `export function resolveCrossOsAgentTurnOptional...` |
| 322 | fn | looksLikeReleaseVersionRef | pub | `export function looksLikeReleaseVersionRef(ref:...` |
| 329 | fn | normalizeRequestedRef | pub | `export function normalizeRequestedRef(ref?: str...` |
| 343 | fn | isImmutableReleaseRef | pub | `export function isImmutableReleaseRef(ref?: str...` |
| 348 | fn | resolveRequestedSuites | pub | `export function resolveRequestedSuites(mode: st...` |
| 365 | fn | resolveRunnerMatrix | pub | `export function resolveRunnerMatrix(params: {` |
| 376 | fn | pick | (private) | `const pick = (...values: Array<string | undefin...` |
| 421 | fn | parseCrossOsSuiteFilter | pub | `export function parseCrossOsSuiteFilter(rawFilt...` |
| 469 | fn | normalizeCrossOsSuiteFilterToken | (private) | `function normalizeCrossOsSuiteFilterToken(token...` |
| 478 | fn | readRunnerOverrideEnv | pub | `export function readRunnerOverrideEnv(env = pro...` |
| 479 | fn | preferNonEmptyEnv | (private) | `const preferNonEmptyEnv = (primary: string | un...` |
| 504 | fn | formatSuiteLabel | (private) | `function formatSuiteLabel(suite: CrossOsSuite) {` |
| 517 | fn | shouldUseManagedGatewayService | pub | `export function shouldUseManagedGatewayService(...` |
| 521 | fn | shouldUseManagedGatewayForInstallerRuntime | pub | `export function shouldUseManagedGatewayForInsta...` |
| 525 | fn | shouldExerciseManagedGatewayLifecycleAfterInstall | pub | `export function shouldExerciseManagedGatewayLif...` |
| 529 | fn | shouldStopManagedGatewayBeforeManualFallback | pub | `export function shouldStopManagedGatewayBeforeM...` |
| 533 | fn | shouldRunBundledPluginPostinstall | pub | `export function shouldRunBundledPluginPostinsta...` |
| 537 | fn | looksLikeCommitSha | pub | `export function looksLikeCommitSha(ref: string) {` |
| 541 | fn | resolveExpectedDevUpdateRef | pub | `export function resolveExpectedDevUpdateRef(ref...` |
| 546 | fn | resolveDevUpdateVerificationRef | pub | `export function resolveDevUpdateVerificationRef...` |
| 553 | fn | shouldRunMainChannelDevUpdate | pub | `export function shouldRunMainChannelDevUpdate(r...` |
| 560 | fn | shouldSkipInstallerDaemonHealthCheck | pub | `export function shouldSkipInstallerDaemonHealth...` |
| 564 | fn | buildRealUpdateEnv | pub | `export function buildRealUpdateEnv(env: NodeJS....` |
| 575 | fn | verifyPackagedUpgradeUpdateResult | pub | `export function verifyPackagedUpgradeUpdateResult(` |
| 590 | fn | buildPackagedUpgradeUpdateArgs | pub | `export function buildPackagedUpgradeUpdateArgs(...` |
| 603 | fn | isRecoverableWindowsPackagedUpgradeSwapCleanupFailure | pub | `export function isRecoverableWindowsPackagedUpg...` |
| 620 | fn | isRecoverableWindowsPackagedUpgradeTimeoutError | pub | `export function isRecoverableWindowsPackagedUpg...` |
| 636 | fn | shouldRunPackagedUpgradeStatusProbe | pub | `export function shouldRunPackagedUpgradeStatusP...` |
| 643 | fn | verifyWindowsPackagedUpgradeFallbackInstall | pub | `export function verifyWindowsPackagedUpgradeFal...` |
| 657 | fn | resolveExplicitBaselineVersion | pub | `export function resolveExplicitBaselineVersion(...` |
| 668 | fn | installTimeoutMs | pub | `export function installTimeoutMs() {` |
| 672 | fn | updateTimeoutMs | pub | `export function updateTimeoutMs() {` |
| 678 | fn | updateStepTimeoutSeconds | (private) | `function updateStepTimeoutSeconds() {` |
| 684 | fn | isSupportedCrossOsSuite | pub | `export function isSupportedCrossOsSuite(value: ...` |

## Public API

### `resolveProviderConfig`

```
export function resolveProviderConfig(provider: string, env = process.env): ProviderConfig | null {
```

**Line:** 146 | **Kind:** fn

### `buildCrossOsReleaseSmokePluginAllowlist`

```
export function buildCrossOsReleaseSmokePluginAllowlist(
```

**Line:** 165 | **Kind:** fn

### `buildCrossOsReleaseSmokeMemorySlotConfigArgs`

```
export function buildCrossOsReleaseSmokeMemorySlotConfigArgs() {
```

**Line:** 171 | **Kind:** fn

### `buildReleaseProviderConfigOverride`

```
export function buildReleaseProviderConfigOverride(providerMeta: ProviderConfig) {
```

**Line:** 181 | **Kind:** fn

### `managedGatewayRestartCommandTimeoutMs`

```
export function managedGatewayRestartCommandTimeoutMs(platform = process.platform) {
```

**Line:** 213 | **Kind:** fn

### `gatewayReadyDeadlineMs`

```
export function gatewayReadyDeadlineMs(platform = process.platform) {
```

**Line:** 227 | **Kind:** fn

### `resolveNpmPackTarballFileName`

```
export function resolveNpmPackTarballFileName(value: unknown, label = "npm pack") {
```

**Line:** 233 | **Kind:** fn

### `resolvePackDestinationTarball`

```
export function resolvePackDestinationTarball(
```

**Line:** 246 | **Kind:** fn

### `parseArgs`

```
export function parseArgs(argv: string[]): ParsedArgs {
```

**Line:** 267 | **Kind:** fn

### `parsePositiveIntegerEnv`

```
export function parsePositiveIntegerEnv(name: string, fallback: number, env = process.env): number {
```

**Line:** 289 | **Kind:** fn

### `resolveCrossOsAgentTurnOptional`

```
export function resolveCrossOsAgentTurnOptional(env = process.env) {
```

**Line:** 318 | **Kind:** fn

### `looksLikeReleaseVersionRef`

```
export function looksLikeReleaseVersionRef(ref: string) {
```

**Line:** 322 | **Kind:** fn

### `normalizeRequestedRef`

```
export function normalizeRequestedRef(ref?: string) {
```

**Line:** 329 | **Kind:** fn

### `isImmutableReleaseRef`

```
export function isImmutableReleaseRef(ref?: string) {
```

**Line:** 343 | **Kind:** fn

### `resolveRequestedSuites`

```
export function resolveRequestedSuites(mode: string, ref: string): CrossOsSuite[] {
```

**Line:** 348 | **Kind:** fn

### `resolveRunnerMatrix`

```
export function resolveRunnerMatrix(params: {
```

**Line:** 365 | **Kind:** fn

### `parseCrossOsSuiteFilter`

```
export function parseCrossOsSuiteFilter(rawFilter: string) {
```

**Line:** 421 | **Kind:** fn

### `readRunnerOverrideEnv`

```
export function readRunnerOverrideEnv(env = process.env) {
```

**Line:** 478 | **Kind:** fn

### `shouldUseManagedGatewayService`

```
export function shouldUseManagedGatewayService(platform = process.platform) {
```

**Line:** 517 | **Kind:** fn

### `shouldUseManagedGatewayForInstallerRuntime`

```
export function shouldUseManagedGatewayForInstallerRuntime(platform = process.platform) {
```

**Line:** 521 | **Kind:** fn

### `shouldExerciseManagedGatewayLifecycleAfterInstall`

```
export function shouldExerciseManagedGatewayLifecycleAfterInstall(platform = process.platform) {
```

**Line:** 525 | **Kind:** fn

### `shouldStopManagedGatewayBeforeManualFallback`

```
export function shouldStopManagedGatewayBeforeManualFallback(platform = process.platform) {
```

**Line:** 529 | **Kind:** fn

### `shouldRunBundledPluginPostinstall`

```
export function shouldRunBundledPluginPostinstall(_options?: { lane?: LaneState }) {
```

**Line:** 533 | **Kind:** fn

### `looksLikeCommitSha`

```
export function looksLikeCommitSha(ref: string) {
```

**Line:** 537 | **Kind:** fn

### `resolveExpectedDevUpdateRef`

```
export function resolveExpectedDevUpdateRef(ref?: string) {
```

**Line:** 541 | **Kind:** fn

### `resolveDevUpdateVerificationRef`

```
export function resolveDevUpdateVerificationRef(ref: string, sourceSha?: string) {
```

**Line:** 546 | **Kind:** fn

### `shouldRunMainChannelDevUpdate`

```
export function shouldRunMainChannelDevUpdate(ref: string) {
```

**Line:** 553 | **Kind:** fn

### `shouldSkipInstallerDaemonHealthCheck`

```
export function shouldSkipInstallerDaemonHealthCheck(platform = process.platform) {
```

**Line:** 560 | **Kind:** fn

### `buildRealUpdateEnv`

```
export function buildRealUpdateEnv(env: NodeJS.ProcessEnv) {
```

**Line:** 564 | **Kind:** fn

### `verifyPackagedUpgradeUpdateResult`

```
export function verifyPackagedUpgradeUpdateResult(
```

**Line:** 575 | **Kind:** fn

### `buildPackagedUpgradeUpdateArgs`

```
export function buildPackagedUpgradeUpdateArgs(candidateUrl: string) {
```

**Line:** 590 | **Kind:** fn

### `isRecoverableWindowsPackagedUpgradeSwapCleanupFailure`

```
export function isRecoverableWindowsPackagedUpgradeSwapCleanupFailure(
```

**Line:** 603 | **Kind:** fn

### `isRecoverableWindowsPackagedUpgradeTimeoutError`

```
export function isRecoverableWindowsPackagedUpgradeTimeoutError(
```

**Line:** 620 | **Kind:** fn

### `shouldRunPackagedUpgradeStatusProbe`

```
export function shouldRunPackagedUpgradeStatusProbe({
```

**Line:** 636 | **Kind:** fn

### `verifyWindowsPackagedUpgradeFallbackInstall`

```
export function verifyWindowsPackagedUpgradeFallbackInstall({
```

**Line:** 643 | **Kind:** fn

### `resolveExplicitBaselineVersion`

```
export function resolveExplicitBaselineVersion(baselineSpec: string) {
```

**Line:** 657 | **Kind:** fn

### `installTimeoutMs`

```
export function installTimeoutMs() {
```

**Line:** 668 | **Kind:** fn

### `updateTimeoutMs`

```
export function updateTimeoutMs() {
```

**Line:** 672 | **Kind:** fn

### `isSupportedCrossOsSuite`

```
export function isSupportedCrossOsSuite(value: string): value is CrossOsSuite {
```

**Line:** 684 | **Kind:** fn
