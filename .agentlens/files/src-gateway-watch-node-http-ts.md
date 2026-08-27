# src/gateway/watch-node-http.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1083
- **Language:** TypeScript
- **Symbols:** 28
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 96 | type | QueuedNodeEvent | (private) | - |
| 98 | type | PendingChallenge | (private) | - |
| 100 | type | ResponseLifecycle | (private) | - |
| 105 | type | WatchNodeSession | (private) | - |
| 120 | type | WatchNodeHttpRuntimeOptions | (private) | - |
| 133 | class | WatchNodePairingRateLimitError | (private) | - |
| 139 | fn | normalizePath | (private) | `function normalizePath(req: IncomingMessage): s...` |
| 147 | fn | readBearerToken | (private) | `function readBearerToken(req: IncomingMessage):...` |
| 153 | fn | resolveWatchClientAddress | (private) | `function resolveWatchClientAddress(` |
| 175 | fn | isStringRecord | (private) | `function isStringRecord(value: unknown): value ...` |
| 179 | fn | trackResponseLifecycle | (private) | `function trackResponseLifecycle(res: ServerResp...` |
| 186 | fn | settle | (private) | `const settle = (value: boolean) => {` |
| 195 | fn | onFinish | (private) | `const onFinish = () => settle(true);` |
| 196 | fn | onClose | (private) | `const onClose = () => {` |
| 205 | fn | hasOnlyBoundedWatchSurface | (private) | `function hasOnlyBoundedWatchSurface(connect: Co...` |
| 217 | fn | isCanonicalWatchNode | (private) | `function isCanonicalWatchNode(connect: ConnectP...` |
| 233 | fn | createChallengeStore | (private) | `function createChallengeStore() {` |
| 236 | fn | pruneExpired | (private) | `const pruneExpired = (current: number) => {` |
| 279 | fn | broadcastPairingSuperseded | (private) | `function broadcastPairingSuperseded(` |
| 299 | fn | createWatchNodeHttpRuntime | pub | `export function createWatchNodeHttpRuntime(opti...` |
| 314 | fn | closeSession | (private) | `const closeSession = (session: WatchNodeSession...` |
| 340 | fn | armExpiry | (private) | `const armExpiry = (session: WatchNodeSession) => {` |
| 349 | fn | touchSession | (private) | `const touchSession = (session: WatchNodeSession...` |
| 458 | fn | handleChallenge | (private) | `const handleChallenge = (req: IncomingMessage, ...` |
| 475 | fn | handleConnect | (private) | `const handleConnect = async (req: IncomingMessa...` |
| 931 | fn | handlePoll | (private) | `const handlePoll = async (req: IncomingMessage,...` |
| 972 | fn | handleDisconnect | (private) | `const handleDisconnect = (req: IncomingMessage,...` |
| 985 | fn | handleResult | (private) | `const handleResult = async (req: IncomingMessag...` |

## Public API

### `createWatchNodeHttpRuntime`

```
export function createWatchNodeHttpRuntime(options: WatchNodeHttpRuntimeOptions): {
```

**Line:** 299 | **Kind:** fn
