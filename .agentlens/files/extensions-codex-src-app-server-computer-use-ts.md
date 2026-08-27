# extensions/codex/src/app-server/computer-use.ts

[← Back to Module](../modules/extensions-codex-src-app-server/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1264
- **Language:** TypeScript
- **Symbols:** 57
- **Public symbols:** 8

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 40 | type | CodexComputerUseRequest | (private) | - |
| 46 | type | CodexComputerUseStatusReason | (private) | - |
| 58 | type | CodexComputerUseInstallationStatus | (private) | - |
| 65 | type | CodexComputerUseExposureStatus | (private) | - |
| 67 | type | CodexComputerUseLiveTestState | (private) | - |
| 69 | type | CodexComputerUseStatusSection | (private) | - |
| 75 | type | CodexComputerUseLiveTestStatus | (private) | - |
| 88 | type | CodexComputerUseRepairStatus | pub | - |
| 96 | type | CodexComputerUseStatus | pub | - |
| 120 | class | CodexComputerUseSetupError | (private) | - |
| 131 | type | CodexComputerUseSetupParams | pub | - |
| 147 | type | CodexComputerUseInspectionParams | (private) | - |
| 162 | type | MarketplaceRef | (private) | - |
| 174 | type | MarketplaceResolution | (private) | - |
| 179 | type | PluginInspection | (private) | - |
| 195 | fn | readCodexComputerUseStatus | pub | `export async function readCodexComputerUseStatus(` |
| 221 | fn | ensureCodexComputerUse | pub | `export async function ensureCodexComputerUse(` |
| 264 | fn | installCodexComputerUse | pub | `export async function installCodexComputerUse(` |
| 283 | fn | inspectCodexComputerUse | (private) | `async function inspectCodexComputerUse(` |
| 362 | fn | inspectCodexComputerUseWithoutFence | (private) | `async function inspectCodexComputerUseWithoutFe...` |
| 413 | fn | ensureComputerUsePlugin | (private) | `async function ensureComputerUsePlugin(params: {` |
| 475 | fn | readComputerUseTools | (private) | `async function readComputerUseTools(params: {` |
| 533 | fn | isNonStrictLiveTestStartupAllowed | (private) | `function isNonStrictLiveTestStartupAllowed(` |
| 548 | fn | runCodexComputerUseLiveTest | pub | `export async function runCodexComputerUseLiveTe...` |
| 633 | fn | cleanupComputerUseProbeThread | (private) | `async function cleanupComputerUseProbeThread(` |
| 644 | fn | scopedRepairUnavailableStatus | (private) | `function scopedRepairUnavailableStatus(): Codex...` |
| 655 | fn | resolveMarketplaceRef | (private) | `async function resolveMarketplaceRef(params: {` |
| 732 | fn | listComputerUseMarketplaceCandidates | (private) | `async function listComputerUseMarketplaceCandid...` |
| 742 | fn | blockUnsafeAutoInstallStatus | (private) | `function blockUnsafeAutoInstallStatus(` |
| 755 | fn | shouldAddBundledComputerUseMarketplace | (private) | `function shouldAddBundledComputerUseMarketplace...` |
| 770 | fn | resolveBundledComputerUseMarketplacePath | (private) | `function resolveBundledComputerUseMarketplacePa...` |
| 784 | fn | findComputerUseMarketplaces | (private) | `function findComputerUseMarketplaces(` |
| 805 | fn | chooseKnownComputerUseMarketplace | (private) | `function chooseKnownComputerUseMarketplace(` |
| 817 | fn | marketplaceDiscoveryWaitUntil | (private) | `function marketplaceDiscoveryWaitUntil(params: {` |
| 832 | fn | delay | (private) | `async function delay(ms: number, signal?: Abort...` |
| 837 | fn | onAbort | (private) | `const onAbort = () => {` |
| 850 | fn | abortError | (private) | `function abortError(signal?: AbortSignal): Error {` |
| 855 | fn | readComputerUsePlugin | (private) | `async function readComputerUsePlugin(` |
| 867 | fn | readMcpServerStatus | (private) | `async function readMcpServerStatus(` |
| 887 | fn | reloadMcpServers | (private) | `async function reloadMcpServers(request: CodexC...` |
| 891 | fn | pluginRequestParams | (private) | `function pluginRequestParams(marketplace: Marke...` |
| 901 | fn | pluginSetupReason | (private) | `function pluginSetupReason(` |
| 911 | fn | pluginSetupMessage | (private) | `function pluginSetupMessage(` |
| 925 | fn | remoteInstallUnsupportedMessage | (private) | `function remoteInstallUnsupportedMessage(` |
| 934 | fn | statusFromPlugin | (private) | `function statusFromPlugin(params: {` |
| 962 | fn | disabledStatus | (private) | `function disabledStatus(config: ResolvedCodexCo...` |
| 992 | fn | unavailableStatus | (private) | `function unavailableStatus(` |
| 1028 | fn | installationStatusFromPlugin | (private) | `function installationStatusFromPlugin(` |
| 1053 | fn | exposureStatusFromTools | (private) | `function exposureStatusFromTools(` |
| 1071 | fn | skippedLiveTestStatus | (private) | `function skippedLiveTestStatus(` |
| 1087 | fn | pluginWarnings | (private) | `function pluginWarnings(plugin: CodexPluginDeta...` |
| 1098 | fn | killStaleComputerUseMcpChildren | pub | `export async function killStaleComputerUseMcpCh...` |
| 1165 | fn | parsePsOutput | (private) | `function parsePsOutput(stdout: string): Array<{...` |
| 1184 | fn | isStaleComputerUseMcpChild | (private) | `function isStaleComputerUseMcpChild(command: st...` |
| 1188 | fn | isDescendantOfPid | (private) | `function isDescendantOfPid(` |
| 1210 | fn | createComputerUseRequest | (private) | `function createComputerUseRequest(params: {` |
| 1255 | fn | resolveComputerUseConfig | (private) | `function resolveComputerUseConfig(` |

## Public API

### `readCodexComputerUseStatus`

```
export async function readCodexComputerUseStatus(
```

**Line:** 195 | **Kind:** fn

### `ensureCodexComputerUse`

```
export async function ensureCodexComputerUse(
```

**Line:** 221 | **Kind:** fn

### `installCodexComputerUse`

```
export async function installCodexComputerUse(
```

**Line:** 264 | **Kind:** fn

### `runCodexComputerUseLiveTest`

```
export async function runCodexComputerUseLiveTest(params: {
```

**Line:** 548 | **Kind:** fn

### `killStaleComputerUseMcpChildren`

```
export async function killStaleComputerUseMcpChildren(
```

**Line:** 1098 | **Kind:** fn
