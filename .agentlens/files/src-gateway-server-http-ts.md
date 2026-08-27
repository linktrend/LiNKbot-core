# src/gateway/server-http.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1193
- **Language:** TypeScript
- **Symbols:** 33
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 67 | type | PluginHttpRequestHandler | (private) | - |
| 79 | type | WatchNodeHttpRequestHandler | (private) | - |
| 81 | type | PluginHttpUpgradeHandler | (private) | - |
| 94 | type | ResolvePluginNodeCapabilityRoute | (private) | - |
| 147 | fn | isControlUiCatalogIconRequest | (private) | `function isControlUiCatalogIconRequest(pathname...` |
| 160 | fn | resolvePluginGatewayAuthBypassPaths | (private) | `async function resolvePluginGatewayAuthBypassPa...` |
| 179 | fn | getCachedPluginGatewayAuthBypassPaths | (private) | `function getCachedPluginGatewayAuthBypassPaths(` |
| 194 | fn | isOpenAiModelsPath | (private) | `function isOpenAiModelsPath(pathname: string): ...` |
| 198 | fn | isMcpAppStandalonePath | (private) | `function isMcpAppStandalonePath(pathname: strin...` |
| 202 | fn | isBoardWidgetPath | (private) | `function isBoardWidgetPath(pathname: string): b...` |
| 206 | fn | isEmbeddingsPath | (private) | `function isEmbeddingsPath(pathname: string): bo...` |
| 210 | fn | isOpenAiChatCompletionsPath | (private) | `function isOpenAiChatCompletionsPath(pathname: ...` |
| 214 | fn | isOpenResponsesPath | (private) | `function isOpenResponsesPath(pathname: string):...` |
| 218 | fn | isToolsInvokePath | (private) | `function isToolsInvokePath(pathname: string): b...` |
| 222 | fn | isManagedOutgoingImagePath | (private) | `function isManagedOutgoingImagePath(pathname: s...` |
| 226 | fn | isSessionKillPath | (private) | `function isSessionKillPath(pathname: string): b...` |
| 230 | fn | isSessionHistoryPath | (private) | `function isSessionHistoryPath(pathname: string)...` |
| 234 | fn | shouldEnforceDefaultPluginGatewayAuth | (private) | `function shouldEnforceDefaultPluginGatewayAuth(...` |
| 242 | fn | canRevealReadinessDetails | (private) | `async function canRevealReadinessDetails(params: {` |
| 271 | fn | handleGatewayProbeRequest | (private) | `async function handleGatewayProbeRequest(` |
| 325 | fn | writeUpgradeAuthFailure | (private) | `function writeUpgradeAuthFailure(` |
| 354 | fn | parseGatewayRequestPath | (private) | `function parseGatewayRequestPath(rawUrl: string...` |
| 362 | type | GatewayHttpRequestStage | (private) | - |
| 368 | fn | runGatewayHttpRequestStages | (private) | `async function runGatewayHttpRequestStages(` |
| 389 | fn | buildPluginRequestStages | (private) | `function buildPluginRequestStages(params: {` |
| 476 | fn | createGatewayHttpServer | pub | `export function createGatewayHttpServer(opts: {` |
| 530 | fn | handleRequestWithTrace | (private) | `function handleRequestWithTrace(req: IncomingMe...` |
| 536 | fn | handleRequest | (private) | `async function handleRequest(req: IncomingMessa...` |
| 582 | fn | handleControlUiRequest | (private) | `const handleControlUiRequest = async () =>` |
| 960 | fn | attachGatewayUpgradeHandler | pub | `export function attachGatewayUpgradeHandler(opt...` |
| 1095 | fn | releaseUpgradeBudget | (private) | `const releaseUpgradeBudget = () => {` |
| 1139 | fn | attachWorkerGatewayUpgradeHandler | pub | `export function attachWorkerGatewayUpgradeHandl...` |
| 1163 | fn | releaseUpgradeBudget | (private) | `const releaseUpgradeBudget = () => {` |

## Public API

### `createGatewayHttpServer`

```
export function createGatewayHttpServer(opts: {
```

**Line:** 476 | **Kind:** fn

### `attachGatewayUpgradeHandler`

```
export function attachGatewayUpgradeHandler(opts: {
```

**Line:** 960 | **Kind:** fn

### `attachWorkerGatewayUpgradeHandler`

```
export function attachWorkerGatewayUpgradeHandler(params: {
```

**Line:** 1139 | **Kind:** fn
