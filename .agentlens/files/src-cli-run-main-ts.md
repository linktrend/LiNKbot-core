# src/cli/run-main.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1442
- **Language:** TypeScript
- **Symbols:** 61
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 75 | fn | loadRootHelpLiveConfigModule | (private) | `const loadRootHelpLiveConfigModule = async () =...` |
| 76 | fn | loadRootHelpMetadataModule | (private) | `const loadRootHelpMetadataModule = async () => ...` |
| 77 | fn | loadLoggingModule | (private) | `const loadLoggingModule = async () => await imp...` |
| 78 | fn | loadCliRegistryLoaderModule | (private) | `const loadCliRegistryLoaderModule = async () =>...` |
| 79 | fn | loadManifestCommandAliasesRuntimeModule | (private) | `const loadManifestCommandAliasesRuntimeModule =...` |
| 81 | fn | loadProxyLifecycleModule | (private) | `const loadProxyLifecycleModule = async () => aw...` |
| 82 | fn | loadProgressModule | (private) | `const loadProgressModule = async () => await im...` |
| 84 | fn | isRemoteAgentDispatchInvocation | (private) | `function isRemoteAgentDispatchInvocation(argv: ...` |
| 88 | fn | isGatewayRunFastPathArgv | pub | `export function isGatewayRunFastPathArgv(argv: ...` |
| 130 | fn | isGatewayRunInvocationArgv | (private) | `function isGatewayRunInvocationArgv(argv: strin...` |
| 138 | fn | tryRunGatewayRunFastPath | (private) | `async function tryRunGatewayRunFastPath(` |
| 184 | fn | beforeRun | (private) | `const beforeRun = async (opts: { force?: boolea...` |
| 245 | fn | closeCliMemoryManagers | (private) | `async function closeCliMemoryManagers(): Promis...` |
| 259 | fn | disposeCliAgentHarnesses | (private) | `async function disposeCliAgentHarnesses(): Prom...` |
| 273 | fn | isUnconfiguredConfigSnapshot | (private) | `function isUnconfiguredConfigSnapshot(` |
| 285 | fn | shouldStartOnboardingForFreshInstall | pub | `export async function shouldStartOnboardingForF...` |
| 294 | type | BareRootLaunchTarget | (private) | - |
| 314 | fn | resolveBareRootLaunchTarget | (private) | `async function resolveBareRootLaunchTarget(argv...` |
| 331 | fn | resolveConfiguredTuiLaunchTarget | (private) | `async function resolveConfiguredTuiLaunchTarget(` |
| 381 | type | GatewayProbeTarget | (private) | - |
| 389 | type | ReachableGateway | (private) | - |
| 398 | type | GatewayResolution | (private) | - |
| 405 | type | GatewayProbeAuth | (private) | - |
| 411 | fn | toReachableGateway | (private) | `function toReachableGateway(target: GatewayProb...` |
| 422 | fn | resolveReachableGateway | (private) | `async function resolveReachableGateway(` |
| 488 | fn | resolveGatewayProbeAuth | (private) | `async function resolveGatewayProbeAuth(` |
| 510 | fn | resolveGatewayProbeTargets | (private) | `async function resolveGatewayProbeTargets(confi...` |
| 529 | fn | isSafeGatewayProbeTarget | (private) | `function isSafeGatewayProbeTarget(target: Gatew...` |
| 538 | fn | isSafeRemoteGatewayProbeUrl | (private) | `function isSafeRemoteGatewayProbeUrl(url: strin...` |
| 562 | fn | isLoopbackGatewayHost | (private) | `function isLoopbackGatewayHost(hostname: string...` |
| 572 | fn | resolveValidatedRemoteGatewayUrl | (private) | `async function resolveValidatedRemoteGatewayUrl...` |
| 585 | fn | resolveLocalGatewayProbeTargets | (private) | `async function resolveLocalGatewayProbeTargets(` |
| 648 | fn | pauseNonTtyStdinForCliExit | (private) | `function pauseNonTtyStdinForCliExit(): void {` |
| 660 | fn | resolveMissingPluginCommandMessage | pub | `export function resolveMissingPluginCommandMess...` |
| 672 | fn | shouldLoadCliDotEnv | (private) | `function shouldLoadCliDotEnv(env: NodeJS.Proces...` |
| 680 | fn | isCommanderParseExit | (private) | `function isCommanderParseExit(error: unknown): ...` |
| 693 | fn | findCommandOption | (private) | `function findCommandOption(command: CommanderCo...` |
| 699 | fn | findSubcommand | (private) | `function findSubcommand(command: CommanderComma...` |
| 705 | fn | shouldOptionConsumeFollowingToken | (private) | `function shouldOptionConsumeFollowingToken(` |
| 719 | fn | isNoColorConsumedAsCommandOptionValue | (private) | `function isNoColorConsumedAsCommandOptionValue(` |
| 749 | fn | isLogLevelConsumedAsCommandOption | (private) | `function isLogLevelConsumedAsCommandOption(` |
| 784 | fn | normalizeRootNoColorArgvForProgram | (private) | `function normalizeRootNoColorArgvForProgram(arg...` |
| 791 | fn | normalizeRootLogLevelArgvForProgram | (private) | `function normalizeRootLogLevelArgvForProgram(ar...` |
| 798 | fn | ensureCliEnvProxyDispatcher | (private) | `async function ensureCliEnvProxyDispatcher(): P...` |
| 812 | fn | shouldBootstrapCliProxyBeforeFastPath | (private) | `function shouldBootstrapCliProxyBeforeFastPath(...` |
| 825 | fn | isKnownBuiltInCommandRoot | (private) | `function isKnownBuiltInCommandRoot(primary: str...` |
| 832 | fn | isPluginCliRoot | (private) | `async function isPluginCliRoot(params: {` |
| 849 | fn | createAllowlistAgnosticCliLookupConfig | (private) | `function createAllowlistAgnosticCliLookupConfig...` |
| 862 | fn | resolveCliCommandSurfaceOwner | (private) | `async function resolveCliCommandSurfaceOwner(pa...` |
| 889 | fn | resolveUnownedCliPrimaryCandidate | (private) | `function resolveUnownedCliPrimaryCandidate(argv...` |
| 903 | fn | resolveUnownedCliPrimary | (private) | `async function resolveUnownedCliPrimary(params: {` |
| 918 | fn | resolveUnownedCliPrimaryMessage | (private) | `async function resolveUnownedCliPrimaryMessage(...` |
| 946 | fn | bootstrapCliProxyCaptureAndDispatcher | (private) | `async function bootstrapCliProxyCaptureAndDispa...` |
| 966 | fn | runCli | pub | `export async function runCli(argv: string[] = p...` |
| 1048 | fn | uninstallProxySignalHandlers | (private) | `const uninstallProxySignalHandlers = () => {` |
| 1062 | fn | stopStartedProxy | (private) | `const stopStartedProxy = async () => {` |
| 1073 | fn | killStartedProxy | (private) | `const killStartedProxy = () => {` |
| 1078 | fn | installProxySignalHandlers | (private) | `const installProxySignalHandlers = () => {` |
| 1083 | fn | shutdown | (private) | `const shutdown = (exitCode: number) => {` |
| 1095 | fn | replaceStartedProxy | (private) | `const replaceStartedProxy = async (config: Open...` |
| 1272 | fn | stopStartupProgress | (private) | `const stopStartupProgress = () => {` |

## Public API

### `isGatewayRunFastPathArgv`

```
export function isGatewayRunFastPathArgv(argv: string[]): boolean {
```

**Line:** 88 | **Kind:** fn

### `shouldStartOnboardingForFreshInstall`

```
export async function shouldStartOnboardingForFreshInstall(argv: string[]): Promise<boolean> {
```

**Line:** 285 | **Kind:** fn

### `resolveMissingPluginCommandMessage`

```
export function resolveMissingPluginCommandMessage(
```

**Line:** 660 | **Kind:** fn

### `runCli`

```
export async function runCli(argv: string[] = process.argv) {
```

**Line:** 966 | **Kind:** fn
