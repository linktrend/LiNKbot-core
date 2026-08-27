# extensions/codex/src/supervision-tools.ts

[← Back to Module](../modules/extensions-codex/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1225
- **Language:** TypeScript
- **Symbols:** 58
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 103 | type | CodexSupervisorTurnMode | (private) | - |
| 104 | type | CodexSupervisionRequestPolicy | (private) | - |
| 106 | class | CodexSupervisionPolicyError | (private) | - |
| 108 | type | NormalizedSupervisionEndpoint | (private) | - |
| 114 | type | ResolvedSupervisionEndpoint | (private) | - |
| 118 | type | CodexSupervisorSession | (private) | - |
| 131 | type | CodexSupervisorEndpointHealth | (private) | - |
| 137 | type | CodexSupervisorSessionListResult | (private) | - |
| 142 | type | EndpointRequest | (private) | - |
| 148 | type | CodexSupervisionToolsOptions | (private) | - |
| 160 | fn | asRecord | (private) | `function asRecord(value: unknown): Record<strin...` |
| 164 | fn | asRecordArray | (private) | `function asRecordArray(value: unknown): Record<...` |
| 168 | fn | readCompatNextCursor | (private) | `function readCompatNextCursor(value: unknown, m...` |
| 182 | fn | readCompatThreadId | (private) | `function readCompatThreadId(value: unknown, met...` |
| 193 | fn | readLoadedThreadIds | (private) | `function readLoadedThreadIds(data: unknown[]): ...` |
| 200 | fn | readStoredThreads | (private) | `function readStoredThreads(data: unknown[], max...` |
| 213 | fn | readBooleanParam | (private) | `function readBooleanParam(params: Record<string...` |
| 217 | fn | readIntegerParam | (private) | `function readIntegerParam(params: Record<string...` |
| 231 | fn | readModeParam | (private) | `function readModeParam(params: Record<string, u...` |
| 242 | fn | normalizeEndpointId | (private) | `function normalizeEndpointId(value: string, ind...` |
| 247 | fn | normalizeConfiguredEndpoint | (private) | `function normalizeConfiguredEndpoint(` |
| 259 | fn | parseEndpointRecord | (private) | `function parseEndpointRecord(value: unknown): C...` |
| 291 | fn | endpointFromToken | (private) | `function endpointFromToken(token: string, index...` |
| 323 | fn | requireUniqueEndpointIds | (private) | `function requireUniqueEndpointIds(` |
| 336 | fn | readLegacyEnvEndpoints | (private) | `function readLegacyEnvEndpoints(env: NodeJS.Pro...` |
| 356 | fn | resolveEndpoints | (private) | `function resolveEndpoints(` |
| 386 | fn | resolveEndpointStartOptions | (private) | `function resolveEndpointStartOptions(params: {` |
| 432 | fn | supervisionEndpointConnectionKey | (private) | `function supervisionEndpointConnectionKey(param...` |
| 463 | fn | createCanonicalEndpointRequest | (private) | `function createCanonicalEndpointRequest(options...` |
| 489 | fn | statusType | (private) | `function statusType(thread: Record<string, unkn...` |
| 494 | fn | sourceLabel | (private) | `function sourceLabel(value: unknown): string | ...` |
| 507 | fn | toSession | (private) | `function toSession(` |
| 530 | fn | threadFromRead | (private) | `function threadFromRead(value: unknown): Record...` |
| 534 | fn | isLoadedThreadReadMiss | (private) | `function isLoadedThreadReadMiss(error: unknown)...` |
| 539 | fn | readThread | (private) | `async function readThread(params: {` |
| 571 | fn | listLoadedSessions | (private) | `async function listLoadedSessions(` |
| 623 | fn | listStoredSessions | (private) | `async function listStoredSessions(params: {` |
| 679 | fn | listSessionSnapshot | (private) | `async function listSessionSnapshot(params: {` |
| 721 | fn | resolveEndpointForThread | (private) | `async function resolveEndpointForThread(params: {` |
| 764 | fn | findInProgressTurnId | (private) | `function findInProgressTurnId(thread: Record<st...` |
| 774 | fn | resolveInProgressTurnId | (private) | `async function resolveInProgressTurnId(params: {` |
| 800 | fn | redactString | (private) | `function redactString(value: string): string {` |
| 808 | fn | redactCodexSupervisionValue | (private) | `function redactCodexSupervisionValue(value: unk...` |
| 828 | fn | redactEndpointUrl | (private) | `function redactEndpointUrl(value: string): stri...` |
| 845 | fn | endpointResult | (private) | `function endpointResult(` |
| 884 | fn | sanitizeSessionListResult | (private) | `function sanitizeSessionListResult(` |
| 903 | fn | requireSupervisionEnabled | (private) | `function requireSupervisionEnabled(pluginConfig...` |
| 911 | fn | requireOwnerAccess | (private) | `function requireOwnerAccess(options: CodexSuper...` |
| 919 | fn | resolveToolPolicy | (private) | `function resolveToolPolicy(` |
| 940 | fn | requireRawTranscriptAccess | (private) | `function requireRawTranscriptAccess(` |
| 951 | fn | requireWriteAccess | (private) | `function requireWriteAccess(options: CodexSuper...` |
| 959 | fn | requireLiveToolPolicy | (private) | `function requireLiveToolPolicy(` |
| 981 | fn | requireCurrentEndpoint | (private) | `function requireCurrentEndpoint(` |
| 996 | fn | requireCurrentEndpointSet | (private) | `function requireCurrentEndpointSet(` |
| 1017 | fn | createPolicyGuardedRequest | (private) | `function createPolicyGuardedRequest(` |
| 1030 | fn | idleContinuationError | (private) | `function idleContinuationError(threadId: string...` |
| 1037 | fn | createCodexSupervisionTools | pub | `export function createCodexSupervisionTools(opt...` |
| 1042 | fn | current | (private) | `const current = () => {` |

## Public API

### `createCodexSupervisionTools`

```
export function createCodexSupervisionTools(options: CodexSupervisionToolsOptions): AnyAgentTool[] {
```

**Line:** 1037 | **Kind:** fn
