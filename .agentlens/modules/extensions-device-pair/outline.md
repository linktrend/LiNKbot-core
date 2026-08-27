# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## extensions/device-pair/index.test.ts (1462 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 73 | fn | expectPathMissing | (private) |
| 90 | type | ListedPendingPairingRequest | (private) |
| 91 | type | ApproveDevicePairingResolved | (private) |
| 92 | type | ApprovedPairingResult | (private) |
| 96 | type | ApprovedPairingDevice | (private) |
| 100 | fn | createApi | (private) |
| 127 | fn | registerPairCommand | (private) |
| 147 | fn | requireText | (private) |
| 154 | fn | requireMediaUrl | (private) |
| 161 | fn | createChannelRuntime | (private) |
| 183 | fn | createCommandContext | (private) |
| 200 | fn | makePendingPairingRequest | (private) |
| 214 | fn | makeApprovedPairingDevice | (private) |
| 240 | fn | makeApprovedPairingResult | (private) |
| 254 | fn | mockPendingPairingList | (private) |
| 261 | fn | createInternalApproveLatestContext | (private) |
| 270 | fn | expectApproveCalledWithInternalPairingScopes | (private) |

## extensions/device-pair/index.ts (1014 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | NotifyModule | (private) |
| 25 | fn | formatDurationMinutes | (private) |
| 31 | type | DevicePairPluginConfig | (private) |
| 35 | type | SetupPayload | (private) |
| 44 | type | ResolveUrlResult | (private) |
| 51 | type | ResolveAuthLabelResult | (private) |
| 56 | type | QrCommandContext | (private) |
| 65 | type | QrChannelSender | (private) |
| 125 | fn | normalizeUrl | (private) |
| 144 | fn | parseNormalizedGatewayUrl | (private) |
| 164 | fn | describeSecureMobilePairingFix | (private) |
| 175 | fn | normalizeHostForIpCheck | (private) |
| 190 | fn | isLoopbackHost | (private) |
| 205 | fn | resolveScheme | (private) |
| 215 | fn | parseIPv4Octets | (private) |
| 230 | fn | isPrivateIPv4 | (private) |
| 248 | fn | isPrivateLanIPv6 | (private) |
| 260 | fn | isPrivateLanCleartextHost | (private) |
| 275 | fn | isTailnetIPv4 | (private) |
| 284 | fn | isMobilePairingCleartextAllowedHost | (private) |
| 291 | fn | validateMobilePairingUrl | (private) |
| 309 | fn | isFullAccessMobilePairingUrl | (private) |
| 320 | fn | pickMatchingIPv4 | (private) |
| 345 | fn | pickTailnetIPv4 | (private) |
| 349 | fn | resolveTailnetHost | (private) |
| 360 | fn | resolveAuthLabel | (private) |
| 380 | fn | pickFirstDefined | (private) |
| 390 | fn | resolveRequiredAuthLabel | (private) |
| 404 | fn | resolveGatewayUrl | (private) |
| 471 | fn | resolveMobilePairingGatewayUrl | (private) |
| 489 | fn | encodeSetupCode | (private) |
| 495 | fn | buildPairingFlowLines | (private) |
| 504 | fn | buildSecurityNoticeLines | (private) |
| 523 | fn | buildQrFollowUpLines | (private) |
| 533 | fn | formatSetupReply | (private) |
| 553 | fn | formatSetupInstructions | (private) |
| 566 | fn | buildQrInfoLines | (private) |
| 587 | fn | formatQrInfoMarkdown | (private) |
| 609 | fn | resolveQrChannelSender | (private) |
| 614 | fn | resolveQrReplyTarget | (private) |
| 631 | fn | formatGatewayLines | (private) |
| 637 | fn | buildAccessLines | (private) |
| 649 | fn | issueSetupPayload | (private) |
| 682 | fn | sendQrPngToSupportedChannel | (private) |

## extensions/device-pair/notify.test.ts (501 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | createDeferred | (private) |
| 66 | fn | openStore | (private) |
| 73 | fn | createApi | (private) |
| 92 | fn | openSubscriberStore | (private) |
