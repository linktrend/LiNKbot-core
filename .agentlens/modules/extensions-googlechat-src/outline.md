# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 8 large files in this module.

## extensions/googlechat/src/channel.test.ts (588 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | normalizeGoogleChatTarget | (private) |
| 48 | fn | resolveGoogleChatAccountImpl | (private) |
| 65 | fn | mockGoogleChatOutboundSpaceResolution | (private) |
| 150 | fn | createGoogleChatCfg | (private) |
| 166 | fn | requireMockArg | (private) |

## extensions/googlechat/src/google-auth.runtime.test.ts (587 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | fn | MockGaxios | (private) |
| 69 | fn | mockCallArg | (private) |
| 77 | type | GoogleAuthFetch | (private) |
| 79 | fn | createGoogleAuthTransportFetch | (private) |

## extensions/googlechat/src/google-auth.runtime.ts (520 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | FetchLike | (private) |
| 14 | type | GoogleAuthRuntime | (private) |
| 15 | type | GoogleAuthTransport | (private) |
| 16 | type | GoogleAuthTransportOptions | (private) |
| 19 | type | GoogleAuthTransportInit | (private) |
| 20 | type | ProxyRule | (private) |
| 21 | type | TlsOptions | (private) |
| 25 | type | ProxyAgentLike | (private) |
| 29 | type | TlsAgentLike | (private) |
| 32 | type | GoogleChatServiceAccountCredentials | (private) |
| 51 | fn | normalizeGoogleAuthPreparedRequestHeaders | (private) |
| 60 | fn | normalizeGoogleAuthResponseHeaders | (private) |
| 69 | fn | installGoogleAuthHeaderCompatibilityInterceptor | (private) |
| 81 | fn | asNullableObjectRecord | (private) |
| 85 | fn | hasProxyAgentShape | (private) |
| 90 | fn | hasTlsAgentShape | (private) |
| 95 | fn | resolveGoogleAuthAgent | (private) |
| 99 | fn | hasTlsOptions | (private) |
| 103 | fn | resolveGoogleAuthTlsOptions | (private) |
| 128 | fn | normalizeGoogleAuthProxyEnvValue | (private) |
| 136 | fn | resolveGoogleAuthEnvProxyUrl | (private) |
| 149 | fn | collectGoogleAuthNoProxyRules | (private) |
| 161 | fn | shouldBypassGoogleAuthProxy | (private) |
| 189 | fn | readGoogleAuthProxyUrl | (private) |
| 200 | fn | readOptionalTrimmedString | (private) |
| 218 | fn | readRequiredTrimmedString | (private) |
| 227 | fn | assertExactUrlField | (private) |
| 243 | fn | assertUrlPrefixField | (private) |
| 259 | fn | validateGoogleChatServiceAccountCredentials | (private) |
| 285 | fn | readCredentialsFile | (private) |
| 337 | fn | sanitizeGoogleAuthInit | (private) |
| 352 | fn | resolveGoogleAuthDispatcherPolicy | (private) |
| 413 | fn | createGoogleAuthFetch | (private) |
| 440 | fn | readGoogleAuthResponseBytes | (private) |
| 492 | fn | loadGoogleAuthRuntime | pub |
| 500 | fn | getGoogleAuthTransport | pub |
| 509 | fn | resolveValidatedGoogleChatCredentials | pub |

## extensions/googlechat/src/monitor-webhook.test.ts (783 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | ProcessEventFn | (private) |
| 33 | fn | createRequest | (private) |
| 51 | fn | createResponse | (private) |
| 67 | fn | installSimplePipeline | (private) |
| 93 | fn | runWebhookHandler | (private) |

## extensions/googlechat/src/monitor.test.ts (724 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 83 | fn | createInboundClassificationHarness | (private) |
| 100 | fn | processGoogleChatTestEvent | (private) |
| 429 | fn | botStatusEvent | (private) |

## extensions/googlechat/src/monitor.ts (550 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | fn | logVerbose | (private) |
| 47 | fn | normalizeAudienceType | (private) |
| 62 | fn | resolveGoogleChatTimestampMs | (private) |
| 70 | fn | resolveGoogleChatBotLoopProtection | (private) |
| 101 | fn | resolveGoogleChatBotLoopProtectionConfig | (private) |
| 108 | fn | shouldSuppressGoogleChatBotLoop | (private) |
| 128 | fn | processGoogleChatEvent | (private) |
| 163 | fn | resolveBotDisplayName | (private) |
| 179 | fn | processMessageWithPipeline | (private) |
| 452 | fn | downloadAttachment | (private) |
| 474 | fn | monitorGoogleChatProvider | (private) |
| 534 | fn | startGoogleChatMonitor | pub |
| 540 | fn | resolveGoogleChatWebhookPath | pub |

## extensions/googlechat/src/setup.test.ts (768 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 62 | fn | buildAccount | (private) |
| 77 | fn | waitForGoogleChatMonitorStarted | (private) |
| 449 | fn | makeTempDir | (private) |

## extensions/googlechat/src/targets.test.ts (913 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 93 | fn | expireGoogleChatCertCache | (private) |
| 118 | fn | stubSuccessfulSend | (private) |
| 131 | fn | createStalledResponse | (private) |
| 140 | fn | expectDownloadToRejectForResponse | (private) |
| 150 | fn | mockCallArg | (private) |
| 158 | fn | lastGuardedFetchOptions | (private) |
| 565 | fn | mockTicket | (private) |
