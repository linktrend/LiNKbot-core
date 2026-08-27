# src/gateway/server.node-pairing-authz.test.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1029
- **Language:** TypeScript
- **Symbols:** 12
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 38 | fn | makeNodePairingStateDir | (private) | `async function makeNodePairingStateDir(): Promi...` |
| 43 | fn | seedNodeDevice | (private) | `async function seedNodeDevice(nodeId: string, b...` |
| 51 | fn | findPairedNode | (private) | `async function findPairedNode(nodeId: string, b...` |
| 56 | fn | requireApprovedPairing | (private) | `function requireApprovedPairing(` |
| 65 | fn | connectNodeClient | (private) | `async function connectNodeClient(params: {` |
| 90 | fn | expectRePairingRequest | (private) | `async function expectRePairingRequest(params: {` |
| 139 | type | NodeDiagnostics | (private) | - |
| 200 | fn | expectRpcNodePairingApprovalRejected | (private) | `async function expectRpcNodePairingApprovalReje...` |
| 244 | fn | describeWithGatewayServer | (private) | `function describeWithGatewayServer(` |
| 402 | fn | requestVictimNodeSurface | (private) | `async function requestVictimNodeSurface(nodeId:...` |
| 412 | fn | openDeviceTokenSession | (private) | `async function openDeviceTokenSession(params: {` |
| 752 | type | NodeDiagnostics | (private) | - |
