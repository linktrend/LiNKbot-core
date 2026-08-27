# src/gateway/worker-environments/service.ts

[← Back to Module](../modules/src-gateway-worker-environments/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1566
- **Language:** TypeScript
- **Symbols:** 46
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 74 | type | WorkerEnvironmentServiceErrorCode | (private) | - |
| 83 | class | WorkerEnvironmentServiceError | (private) | - |
| 92 | fn | serviceError | (private) | `const serviceError = (code: WorkerEnvironmentSe...` |
| 97 | fn | workerEnvironmentIdempotencyDigest | (private) | `function workerEnvironmentIdempotencyDigest(ide...` |
| 101 | fn | workerEnvironmentIdForIdempotencyKey | pub | `export function workerEnvironmentIdForIdempoten...` |
| 106 | type | WorkerEnvironmentServiceOptions | (private) | - |
| 147 | type | WorkerPlacementTurnBinding | pub | - |
| 154 | type | WorkerProcessTurnBinding | (private) | - |
| 158 | type | WorkerTerminalTurnFence | (private) | - |
| 163 | type | WorkerPendingTerminalTurnFence | (private) | - |
| 167 | type | WorkerTurnRequest | (private) | - |
| 172 | type | WorkerSessionPlacementGate | pub | - |
| 183 | type | WorkerTranscriptCommitApplicationResult | (private) | - |
| 187 | type | WorkerTranscriptCommitServiceResult | (private) | - |
| 191 | type | WorkerLiveEventServiceResult | (private) | - |
| 195 | type | WorkerInferenceStartServiceResult | (private) | - |
| 204 | type | WorkerInferenceCancelServiceResult | (private) | - |
| 209 | fn | requireWorkerProfile | (private) | `function requireWorkerProfile(value: unknown): ...` |
| 217 | fn | createWorkerEnvironmentService | pub | `export function createWorkerEnvironmentService(...` |
| 220 | fn | warn | (private) | `const warn = (message: string) => options.logge...` |
| 319 | fn | project | (private) | `const project = (record: WorkerEnvironmentRecor...` |
| 324 | fn | move | (private) | `const move = (` |
| 340 | fn | saveError | (private) | `const saveError = (r: WorkerEnvironmentRecord, ...` |
| 353 | fn | inState | (private) | `const inState = (r: WorkerEnvironmentRecord, .....` |
| 358 | fn | release | (private) | `const release = () => activeOperations.delete(o...` |
| 389 | fn | lifecycleLease | (private) | `const lifecycleLease = (record: WorkerEnvironme...` |
| 394 | fn | identityResolverFor | (private) | `const identityResolverFor = (` |
| 428 | fn | prepareInstallation | (private) | `const prepareInstallation = (record: WorkerEnvi...` |
| 431 | fn | credentialExpiry | (private) | `const credentialExpiry = () => {` |
| 443 | fn | credentialMaterial | (private) | `const credentialMaterial = () => createWorkerCr...` |
| 493 | fn | finishProvenDestroy | (private) | `const finishProvenDestroy = (record: WorkerEnvi...` |
| 536 | fn | finishBootstrap | (private) | `const finishBootstrap = async (` |
| 580 | fn | finishProvision | (private) | `const finishProvision = async (` |
| 640 | fn | cancelRequested | (private) | `const cancelRequested = (record: WorkerEnvironm...` |
| 643 | fn | beginDrain | (private) | `const beginDrain = (record: WorkerEnvironmentRe...` |
| 651 | fn | beginDestroy | (private) | `const beginDestroy = (record: WorkerEnvironment...` |
| 664 | fn | finishDestroy | (private) | `const finishDestroy = async (r: WorkerEnvironme...` |
| 682 | fn | ensurePendingCredential | (private) | `const ensurePendingCredential = (record: Worker...` |
| 853 | fn | create | (private) | `const create = async (profileId: string, idempo...` |
| 905 | fn | destroy | (private) | `const destroy = async (` |
| 1091 | fn | reconcilePass | (private) | `const reconcilePass = async () => {` |
| 1109 | fn | reconcileOnce | (private) | `const reconcileOnce = () => {` |
| 1118 | fn | start | (private) | `const start = () => {` |
| 1137 | fn | stop | (private) | `const stop = async () => {` |
| 1161 | fn | readPendingCredential | (private) | `const readPendingCredential = (binding: WorkerC...` |
| 1565 | type | WorkerEnvironmentService | pub | - |

## Public API

### `workerEnvironmentIdForIdempotencyKey`

```
export function workerEnvironmentIdForIdempotencyKey(idempotencyKey: string): string {
```

**Line:** 101 | **Kind:** fn

### `createWorkerEnvironmentService`

```
export function createWorkerEnvironmentService(options: WorkerEnvironmentServiceOptions) {
```

**Line:** 217 | **Kind:** fn
