# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## src/proxy-capture/runtime.test.ts (623 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | StoreCall | (private) |
| 69 | fn | makeStreamingResponse | (private) |
| 88 | fn | waitForResponseSettled | (private) |

## src/proxy-capture/runtime.ts (678 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | CapturedResponseBodyResult | (private) |
| 47 | fn | readCapturedResponseBodyBounded | (private) |
| 117 | fn | parseDeclaredCaptureContentLength | (private) |
| 130 | type | GlobalFetchPatchedState | (private) |
| 134 | type | GlobalFetchPatchTarget | (private) |
| 138 | type | DebugProxyCaptureStoreLike | (private) |
| 143 | type | DebugProxyCaptureRuntimeDeps | pub |
| 154 | fn | resolveRuntimeDeps | (private) |
| 167 | fn | protocolFromUrl | (private) |
| 185 | fn | resolveUrlString | (private) |
| 198 | fn | isSensitiveCaptureHeaderName | (private) |
| 209 | fn | redactedCaptureHeaders | (private) |
| 228 | fn | redactCaptureUrl | (private) |
| 235 | fn | redactComponent | (private) |
| 237 | fn | decodeComponent | (private) |
| 290 | fn | redactCaptureText | (private) |
| 294 | fn | redactCapturePayload | (private) |
| 311 | fn | redactedCaptureJson | (private) |
| 319 | fn | createHttpCaptureEventBase | (private) |
| 344 | fn | installDebugProxyGlobalFetchPatch | (private) |
| 361 | fn | patchedFetch | (private) |
| 436 | fn | uninstallDebugProxyGlobalFetchPatch | (private) |
| 446 | fn | isDebugProxyGlobalFetchPatchInstalled | pub |
| 450 | fn | initializeDebugProxyCapture | pub |
| 472 | fn | finalizeDebugProxyCapture | pub |
| 486 | fn | captureHttpExchange | pub |
| 548 | fn | recordResponseMetadataOnly | (private) |
| 636 | fn | captureWsEvent | pub |

## src/proxy-capture/store.sqlite.ts (962 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | DebugProxyCaptureStoreOptions | (private) |
| 38 | type | PathBasedDebugProxyCaptureStore | (private) |
| 85 | fn | isInMemoryDatabasePath | (private) |
| 109 | fn | hardenLegacyDatabaseFiles | (private) |
| 117 | fn | openPathBasedDebugProxyCaptureStore | (private) |
| 177 | fn | serializeJson | (private) |
| 183 | fn | parseMetaJson | (private) |
| 195 | fn | sortObservedCounts | (private) |
| 201 | class | DebugProxyCaptureStoreImpl | (private) |
| 809 | type | DebugProxyCaptureStore | pub |
| 813 | type | LegacyDebugProxyCaptureStore | (private) |
| 817 | type | SharedDebugProxyCaptureStore | (private) |
| 821 | type | DebugProxyCaptureStoreConstructor | (private) |
| 831 | type | CachedStoreEntry | (private) |
| 839 | fn | resolveDebugProxyCaptureStoreKey | (private) |
| 848 | fn | getDebugProxyCaptureStoreImpl | (private) |
| 865 | fn | getDebugProxyCaptureStore | pub |
| 869 | fn | getDebugProxyCaptureStore | pub |
| 872 | fn | getDebugProxyCaptureStore | pub |
| 879 | fn | closeDebugProxyCaptureStore | pub |
| 890 | fn | acquireDebugProxyCaptureStore | pub |
| 897 | fn | acquireDebugProxyCaptureStore | pub |
| 901 | fn | acquireDebugProxyCaptureStore | pub |
| 936 | fn | persistEventPayload | pub |
| 958 | fn | safeJsonString | pub |
