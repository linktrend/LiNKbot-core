# src/gateway/server.auth.control-ui.suite.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2490
- **Language:** TypeScript
- **Symbols:** 16
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 38 | fn | expectArrayIncludes | (private) | `function expectArrayIncludes(actual: unknown, e...` |
| 46 | fn | registerControlUiAndPairingSuite | pub | `export function registerControlUiAndPairingSuit...` |
| 81 | fn | buildSignedDeviceForIdentity | (private) | `const buildSignedDeviceForIdentity = async (par...` |
| 104 | fn | connectSetupCodeBootstrapNode | (private) | `const connectSetupCodeBootstrapNode = async (pa...` |
| 143 | fn | expectStatusAndHealthOk | (private) | `const expectStatusAndHealthOk = async (ws: WebS...` |
| 150 | fn | expectAdminRpcOk | (private) | `const expectAdminRpcOk = async (ws: WebSocket) ...` |
| 155 | fn | connectControlUiWithoutDeviceAndExpectOk | (private) | `const connectControlUiWithoutDeviceAndExpectOk ...` |
| 172 | fn | createOperatorIdentityFixture | (private) | `const createOperatorIdentityFixture = async (id...` |
| 188 | fn | startControlUiServerWithOperatorIdentity | (private) | `const startControlUiServerWithOperatorIdentity ...` |
| 207 | fn | startControlUiServerWithClient | (private) | `const startControlUiServerWithClient = async (` |
| 217 | fn | startControlUiServer | (private) | `const startControlUiServer = async (token?: str...` |
| 226 | fn | tamperPairedMetadata | (private) | `const tamperPairedMetadata = async (` |
| 241 | fn | stripPairedMetadataRolesAndScopes | (private) | `const stripPairedMetadataRolesAndScopes = async...` |
| 248 | fn | overwritePairedPublicKey | (private) | `const overwritePairedPublicKey = async (deviceI...` |
| 254 | fn | injectMalformedPairedAccessLists | (private) | `const injectMalformedPairedAccessLists = async ...` |
| 2124 | fn | connectWithNonce | (private) | `const connectWithNonce = async (role: "operator...` |

## Public API

### `registerControlUiAndPairingSuite`

```
export function registerControlUiAndPairingSuite(): void {
```

**Line:** 46 | **Kind:** fn
