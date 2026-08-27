# src/gateway/node-registry.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1035
- **Language:** TypeScript
- **Symbols:** 18
- **Public symbols:** 8

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 42 | type | NodeSession | pub | - |
| 74 | type | AuthorizedSystemRunEvent | (private) | - |
| 81 | fn | resolvePendingSystemRunEvent | (private) | `function resolvePendingSystemRunEvent(params: {` |
| 103 | fn | normalizeSystemRunInvokeParams | (private) | `function normalizeSystemRunInvokeParams(params:...` |
| 127 | type | NodeInvokeResult | pub | - |
| 135 | type | NodeConnectivityResult | pub | - |
| 140 | type | PingableSocket | (private) | - |
| 155 | type | SerializedEventPayload | pub | - |
| 161 | type | NodeEventTransport | pub | - |
| 167 | type | NodeRegistryOptions | pub | - |
| 176 | fn | serializeEventPayload | pub | `export function serializeEventPayload(payload: ...` |
| 185 | fn | isSerializedEventPayload | (private) | `function isSerializedEventPayload(value: unknow...` |
| 195 | class | NodeRegistry | pub | - |
| 512 | fn | cleanup | (private) | `const cleanup = () => {` |
| 520 | fn | finish | (private) | `const finish = (result: NodeConnectivityResult)...` |
| 529 | fn | onPong | (private) | `const onPong = () => finish({ ok: true });` |
| 530 | fn | onClose | (private) | `const onClose = () =>` |
| 535 | fn | onError | (private) | `const onError = (err: unknown) =>` |

## Public API

### `serializeEventPayload`

```
export function serializeEventPayload(payload: unknown): SerializedEventPayload | null {
```

**Line:** 176 | **Kind:** fn
