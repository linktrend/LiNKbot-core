# extensions/device-pair/index.ts

[← Back to Module](../modules/extensions-device-pair/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1014
- **Language:** TypeScript
- **Symbols:** 44
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 13 | type | NotifyModule | (private) | - |
| 25 | fn | formatDurationMinutes | (private) | `function formatDurationMinutes(expiresAtMs: num...` |
| 31 | type | DevicePairPluginConfig | (private) | - |
| 35 | type | SetupPayload | (private) | - |
| 44 | type | ResolveUrlResult | (private) | - |
| 51 | type | ResolveAuthLabelResult | (private) | - |
| 56 | type | QrCommandContext | (private) | - |
| 65 | type | QrChannelSender | (private) | - |
| 125 | fn | normalizeUrl | (private) | `function normalizeUrl(raw: string, schemeFallba...` |
| 144 | fn | parseNormalizedGatewayUrl | (private) | `function parseNormalizedGatewayUrl(raw: string)...` |
| 164 | fn | describeSecureMobilePairingFix | (private) | `function describeSecureMobilePairingFix(source?...` |
| 175 | fn | normalizeHostForIpCheck | (private) | `function normalizeHostForIpCheck(host: string):...` |
| 190 | fn | isLoopbackHost | (private) | `function isLoopbackHost(host: string): boolean {` |
| 205 | fn | resolveScheme | (private) | `function resolveScheme(` |
| 215 | fn | parseIPv4Octets | (private) | `function parseIPv4Octets(address: string): [num...` |
| 230 | fn | isPrivateIPv4 | (private) | `function isPrivateIPv4(address: string): boolean {` |
| 248 | fn | isPrivateLanIPv6 | (private) | `function isPrivateLanIPv6(address: string): boo...` |
| 260 | fn | isPrivateLanCleartextHost | (private) | `function isPrivateLanCleartextHost(host: string...` |
| 275 | fn | isTailnetIPv4 | (private) | `function isTailnetIPv4(address: string): boolean {` |
| 284 | fn | isMobilePairingCleartextAllowedHost | (private) | `function isMobilePairingCleartextAllowedHost(ho...` |
| 291 | fn | validateMobilePairingUrl | (private) | `function validateMobilePairingUrl(url: string, ...` |
| 309 | fn | isFullAccessMobilePairingUrl | (private) | `function isFullAccessMobilePairingUrl(url: stri...` |
| 320 | fn | pickMatchingIPv4 | (private) | `function pickMatchingIPv4(predicate: (address: ...` |
| 345 | fn | pickTailnetIPv4 | (private) | `function pickTailnetIPv4(): string | null {` |
| 349 | fn | resolveTailnetHost | (private) | `async function resolveTailnetHost(): Promise<st...` |
| 360 | fn | resolveAuthLabel | (private) | `function resolveAuthLabel(cfg: OpenClawPluginAp...` |
| 380 | fn | pickFirstDefined | (private) | `function pickFirstDefined(candidates: Array<unk...` |
| 390 | fn | resolveRequiredAuthLabel | (private) | `function resolveRequiredAuthLabel(` |
| 404 | fn | resolveGatewayUrl | (private) | `async function resolveGatewayUrl(api: OpenClawP...` |
| 471 | fn | resolveMobilePairingGatewayUrl | (private) | `async function resolveMobilePairingGatewayUrl(a...` |
| 489 | fn | encodeSetupCode | (private) | `function encodeSetupCode(payload: SetupPayload)...` |
| 495 | fn | buildPairingFlowLines | (private) | `function buildPairingFlowLines(stepTwo: string)...` |
| 504 | fn | buildSecurityNoticeLines | (private) | `function buildSecurityNoticeLines(params: {` |
| 523 | fn | buildQrFollowUpLines | (private) | `function buildQrFollowUpLines(autoNotifyArmed: ...` |
| 533 | fn | formatSetupReply | (private) | `function formatSetupReply(payload: SetupPayload...` |
| 553 | fn | formatSetupInstructions | (private) | `function formatSetupInstructions(expiresAtMs: n...` |
| 566 | fn | buildQrInfoLines | (private) | `function buildQrInfoLines(params: {` |
| 587 | fn | formatQrInfoMarkdown | (private) | `function formatQrInfoMarkdown(params: {` |
| 609 | fn | resolveQrChannelSender | (private) | `function resolveQrChannelSender(channel: string...` |
| 614 | fn | resolveQrReplyTarget | (private) | `function resolveQrReplyTarget(ctx: QrCommandCon...` |
| 631 | fn | formatGatewayLines | (private) | `function formatGatewayLines(payload: SetupPaylo...` |
| 637 | fn | buildAccessLines | (private) | `function buildAccessLines(payload: SetupPayload...` |
| 649 | fn | issueSetupPayload | (private) | `async function issueSetupPayload(params: {` |
| 682 | fn | sendQrPngToSupportedChannel | (private) | `async function sendQrPngToSupportedChannel(para...` |
