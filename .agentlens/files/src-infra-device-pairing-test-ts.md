# src/infra/device-pairing.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2104
- **Language:** TypeScript
- **Symbols:** 18
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 34 | type | RotateDeviceTokenResult | (private) | - |
| 36 | fn | setupPairedOperatorDevice | (private) | `async function setupPairedOperatorDevice(baseDi...` |
| 49 | fn | setupPairedNodeDevice | (private) | `async function setupPairedNodeDevice(baseDir: s...` |
| 62 | fn | setupPairedBrowserOperatorDevice | (private) | `async function setupPairedBrowserOperatorDevice...` |
| 81 | fn | setupOperatorToken | (private) | `async function setupOperatorToken(scopes: strin...` |
| 89 | fn | verifyOperatorToken | (private) | `function verifyOperatorToken(params: { baseDir:...` |
| 99 | fn | requireToken | (private) | `function requireToken(token: string | undefined...` |
| 107 | fn | requireValue | (private) | `function requireValue<T>(value: T | null | unde...` |
| 114 | fn | isRecord | (private) | `function isRecord(value: unknown): value is Rec...` |
| 118 | fn | requireRecord | (private) | `function requireRecord(value: unknown, message:...` |
| 125 | fn | expectRecordFields | (private) | `function expectRecordFields(` |
| 137 | fn | expectArrayIncludesAll | (private) | `function expectArrayIncludesAll(value: unknown,...` |
| 146 | fn | requireRotatedEntry | (private) | `function requireRotatedEntry(result: RotateDevi...` |
| 154 | fn | overwritePairedOperatorTokenScopes | (private) | `async function overwritePairedOperatorTokenScop...` |
| 161 | fn | mutatePairedDevice | (private) | `async function mutatePairedDevice(` |
| 175 | fn | mutatePendingRequest | (private) | `function mutatePendingRequest(` |
| 186 | fn | clearPairedOperatorApprovalBaseline | (private) | `async function clearPairedOperatorApprovalBasel...` |
| 196 | fn | makeDevicePairingDir | (private) | `async function makeDevicePairingDir(): Promise<...` |
