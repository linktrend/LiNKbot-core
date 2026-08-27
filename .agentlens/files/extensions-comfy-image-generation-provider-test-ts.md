# extensions/comfy/image-generation-provider.test.ts

[← Back to Module](../modules/extensions-comfy/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1088
- **Language:** TypeScript
- **Symbols:** 15
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 20 | type | FetchGuardRequest | (private) | - |
| 31 | type | RealGuardParams | (private) | - |
| 32 | type | RealGuardFetchImpl | (private) | - |
| 33 | type | RealGuardLookupFn | (private) | - |
| 34 | type | RealGuardHarness | (private) | - |
| 39 | type | RealComfyFetchOptions | (private) | - |
| 47 | fn | fetchRequest | (private) | `function fetchRequest(call: number): FetchGuard...` |
| 55 | fn | parseJsonBody | (private) | `function parseJsonBody(call: number): Record<st...` |
| 59 | fn | mockLocalImageResponses | (private) | `function mockLocalImageResponses(promptId = "lo...` |
| 108 | fn | testWorkflowConfig | (private) | `function testWorkflowConfig(config: Record<stri...` |
| 120 | fn | toFetchUrl | (private) | `function toFetchUrl(input: RequestInfo | URL): ...` |
| 130 | fn | jsonResponse | (private) | `function jsonResponse(body: unknown): Response {` |
| 137 | fn | generatedHistory | (private) | `function generatedHistory(promptId: string) {` |
| 149 | fn | createLookupFn | (private) | `function createLookupFn(dns: Record<string, str...` |
| 168 | fn | installRealComfyFetchGuard | (private) | `function installRealComfyFetchGuard(options: Re...` |
