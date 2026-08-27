# src/agents/embedded-agent-helpers/errors.ts

[← Back to Module](../modules/src-agents-embedded-agent-helpers/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1813
- **Language:** TypeScript
- **Symbols:** 88
- **Public symbols:** 27

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 86 | fn | isReasoningConstraintErrorMessage | pub | `export function isReasoningConstraintErrorMessa...` |
| 99 | fn | hasRateLimitTpmHint | (private) | `function hasRateLimitTpmHint(raw: string): bool...` |
| 105 | fn | isContextOverflowError | pub | `export function isContextOverflowError(errorMes...` |
| 167 | fn | isLikelyContextOverflowError | pub | `export function isLikelyContextOverflowError(er...` |
| 206 | fn | isCompactionFailureError | pub | `export function isCompactionFailureError(errorM...` |
| 240 | fn | extractObservedOverflowTokenCount | pub | `export function extractObservedOverflowTokenCou...` |
| 276 | type | PaymentRequiredFailoverReason | (private) | - |
| 278 | type | FailoverSignal | pub | - |
| 287 | type | FailoverClassification | pub | - |
| 299 | fn | normalizeFailoverDetailString | (private) | `function normalizeFailoverDetailString(value: s...` |
| 309 | fn | appendFailoverDetailCandidate | (private) | `function appendFailoverDetailCandidate(candidat...` |
| 320 | fn | collectFailoverDetailCandidates | (private) | `function collectFailoverDetailCandidates(` |
| 365 | fn | extractFailoverSignalDetails | pub | `export function extractFailoverSignalDetails(.....` |
| 377 | type | ProviderRuntimeFailureKind | pub | - |
| 468 | fn | stripErrorPrefix | (private) | `function stripErrorPrefix(raw: string): string {` |
| 472 | fn | inferSignalStatus | pub | `export function inferSignalStatus(signal: Failo...` |
| 479 | fn | isExplicitNoBodyHttpMessage | (private) | `function isExplicitNoBodyHttpMessage(raw: strin...` |
| 495 | fn | isUnclassifiedNoBodyHttpSignal | pub | `export function isUnclassifiedNoBodyHttpSignal(...` |
| 504 | fn | isHtmlErrorResponse | (private) | `function isHtmlErrorResponse(raw: string, statu...` |
| 521 | fn | isCloudflareChallengeResponse | (private) | `function isCloudflareChallengeResponse(message:...` |
| 525 | fn | isTransportHtmlErrorStatus | (private) | `function isTransportHtmlErrorStatus(status: num...` |
| 533 | fn | isOpenAICodexScopeContext | (private) | `function isOpenAICodexScopeContext(raw: string,...` |
| 542 | fn | isAuthScopeErrorMessage | (private) | `function isAuthScopeErrorMessage(raw: string, s...` |
| 567 | fn | isProxyErrorMessage | (private) | `function isProxyErrorMessage(raw: string, statu...` |
| 577 | fn | isDnsTransportErrorMessage | (private) | `function isDnsTransportErrorMessage(raw: string...` |
| 581 | fn | isReplayInvalidErrorMessage | (private) | `function isReplayInvalidErrorMessage(raw: strin...` |
| 585 | fn | isThinkingSignatureReplayInvalidErrorMessage | (private) | `function isThinkingSignatureReplayInvalidErrorM...` |
| 589 | fn | isSandboxBlockedErrorMessage | (private) | `function isSandboxBlockedErrorMessage(raw: stri...` |
| 593 | fn | isSchemaErrorMessage | (private) | `function isSchemaErrorMessage(raw: string): boo...` |
| 600 | fn | isTimeoutTransportErrorMessage | (private) | `function isTimeoutTransportErrorMessage(raw: st...` |
| 616 | fn | isOAuthRefreshTimeoutMessage | (private) | `function isOAuthRefreshTimeoutMessage(raw: stri...` |
| 620 | fn | isOAuthRefreshContentionMessage | (private) | `function isOAuthRefreshContentionMessage(raw: s...` |
| 628 | fn | isOAuthCallbackTimeoutMessage | (private) | `function isOAuthCallbackTimeoutMessage(raw: str...` |
| 632 | fn | isOAuthCallbackValidationMessage | (private) | `function isOAuthCallbackValidationMessage(raw: ...` |
| 635 | fn | includesAnyHint | (private) | `function includesAnyHint(text: string, hints: r...` |
| 639 | fn | hasExplicit402BillingSignal | (private) | `function hasExplicit402BillingSignal(text: stri...` |
| 649 | fn | hasQuotaRefreshWindowSignal | (private) | `function hasQuotaRefreshWindowSignal(text: stri...` |
| 656 | fn | hasRetryable402TransientSignal | (private) | `function hasRetryable402TransientSignal(text: s...` |
| 671 | fn | hasKnownBareLeading402Signal | (private) | `function hasKnownBareLeading402Signal(text: str...` |
| 680 | fn | normalize402Message | (private) | `function normalize402Message(raw: string): stri...` |
| 684 | fn | classify402Message | (private) | `function classify402Message(message: string): P...` |
| 709 | fn | classifyFailoverReasonFrom402Text | (private) | `function classifyFailoverReasonFrom402Text(raw:...` |
| 723 | fn | toReasonClassification | (private) | `function toReasonClassification(reason: Failove...` |
| 727 | fn | failoverReasonFromClassification | (private) | `function failoverReasonFromClassification(` |
| 736 | fn | isTransientHttpError | pub | `export function isTransientHttpError(raw: strin...` |
| 748 | fn | classifyFailoverClassificationFromHttpStatus | (private) | `function classifyFailoverClassificationFromHttp...` |
| 874 | fn | classifyFailoverReasonFromCode | (private) | `function classifyFailoverReasonFromCode(raw: st...` |
| 900 | fn | classifyFailoverReasonFromErrorType | (private) | `function classifyFailoverReasonFromErrorType(ra...` |
| 913 | fn | classifyFailoverClassificationFromErrorType | (private) | `function classifyFailoverClassificationFromErro...` |
| 920 | fn | isProvider | (private) | `function isProvider(provider: string | undefine...` |
| 925 | fn | hasProviderBilling429Override | (private) | `function hasProviderBilling429Override(provider...` |
| 931 | fn | hasStructuredBilling429Signal | (private) | `function hasStructuredBilling429Signal(raw: str...` |
| 939 | fn | hasBillingApiErrorType | (private) | `function hasBillingApiErrorType(raw: string): b...` |
| 947 | fn | isAmbiguousGeneric429BalanceMessage | (private) | `function isAmbiguousGeneric429BalanceMessage(ra...` |
| 951 | fn | isBilling429MessageForProvider | (private) | `function isBilling429MessageForProvider(raw: st...` |
| 963 | fn | isGenericUnknownStreamErrorMessage | pub | `export function isGenericUnknownStreamErrorMess...` |
| 967 | fn | isOpenRouterProviderReturnedError | (private) | `function isOpenRouterProviderReturnedError(raw:...` |
| 974 | fn | isOpenRouterKeyLimitExceededError | (private) | `function isOpenRouterKeyLimitExceededError(raw:...` |
| 980 | fn | isOpenRouterKeyBudgetLimitExceededError | (private) | `function isOpenRouterKeyBudgetLimitExceededErro...` |
| 987 | fn | isExactUnknownNoDetailsError | (private) | `function isExactUnknownNoDetailsError(raw: stri...` |
| 993 | fn | isClaudeCliLoggedOutError | (private) | `function isClaudeCliLoggedOutError(raw: string,...` |
| 1002 | fn | isUnsupportedImageInputErrorMessage | (private) | `function isUnsupportedImageInputErrorMessage(ra...` |
| 1014 | fn | classifyFailoverClassificationFromMessage | (private) | `function classifyFailoverClassificationFromMess...` |
| 1126 | fn | classificationReason | (private) | `function classificationReason(` |
| 1132 | fn | classifyFailoverDetailCandidates | (private) | `function classifyFailoverDetailCandidates(` |
| 1148 | fn | mergeMessageAndDetailClassification | (private) | `function mergeMessageAndDetailClassification(` |
| 1169 | fn | classifyFailoverSignal | pub | `export function classifyFailoverSignal(signal: ...` |
| 1235 | fn | classifyProviderRuntimeFailureKind | pub | `export function classifyProviderRuntimeFailureK...` |
| 1339 | fn | buildAssistantFailoverSignal | (private) | `function buildAssistantFailoverSignal(` |
| 1353 | fn | classifyAssistantFailoverReason | pub | `export function classifyAssistantFailoverReason(` |
| 1365 | fn | formatAssistantErrorText | pub | `export function formatAssistantErrorText(` |
| 1582 | fn | isRawAssistantErrorPassthrough | (private) | `function isRawAssistantErrorPassthrough(params: {` |
| 1605 | fn | formatUserFacingAssistantErrorText | pub | `export function formatUserFacingAssistantErrorT...` |
| 1631 | fn | isRateLimitAssistantError | pub | `export function isRateLimitAssistantError(msg: ...` |
| 1648 | fn | isMissingToolCallInputError | (private) | `function isMissingToolCallInputError(raw: strin...` |
| 1655 | fn | isBillingAssistantError | pub | `export function isBillingAssistantError(msg: As...` |
| 1669 | fn | isJsonApiInternalServerError | (private) | `function isJsonApiInternalServerError(raw: stri...` |
| 1692 | fn | isStructuredServerErrorMessage | (private) | `function isStructuredServerErrorMessage(raw: st...` |
| 1709 | fn | parseImageDimensionError | pub | `export function parseImageDimensionError(raw: s...` |
| 1732 | fn | isImageDimensionErrorMessage | (private) | `function isImageDimensionErrorMessage(raw: stri...` |
| 1736 | fn | parseImageSizeError | pub | `export function parseImageSizeError(raw: string...` |
| 1754 | fn | isImageSizeError | (private) | `function isImageSizeError(errorMessage?: string...` |
| 1761 | fn | isCloudCodeAssistFormatError | pub | `export function isCloudCodeAssistFormatError(ra...` |
| 1765 | fn | isAuthAssistantError | pub | `export function isAuthAssistantError(msg: Assis...` |
| 1772 | fn | isCliSessionExpiredErrorMessage | (private) | `function isCliSessionExpiredErrorMessage(raw: s...` |
| 1794 | fn | classifyFailoverReason | pub | `export function classifyFailoverReason(` |
| 1806 | fn | isFailoverErrorMessage | pub | `export function isFailoverErrorMessage(raw: str...` |
| 1810 | fn | isFailoverAssistantError | pub | `export function isFailoverAssistantError(msg: A...` |

## Public API

### `isReasoningConstraintErrorMessage`

```
export function isReasoningConstraintErrorMessage(raw: string): boolean {
```

**Line:** 86 | **Kind:** fn

### `isContextOverflowError`

```
export function isContextOverflowError(errorMessage?: string): boolean {
```

**Line:** 105 | **Kind:** fn

### `isLikelyContextOverflowError`

```
export function isLikelyContextOverflowError(errorMessage?: string): boolean {
```

**Line:** 167 | **Kind:** fn

### `isCompactionFailureError`

```
export function isCompactionFailureError(errorMessage?: string): boolean {
```

**Line:** 206 | **Kind:** fn

### `extractObservedOverflowTokenCount`

```
export function extractObservedOverflowTokenCount(errorMessage?: string): number | undefined {
```

**Line:** 240 | **Kind:** fn

### `extractFailoverSignalDetails`

```
export function extractFailoverSignalDetails(...values: unknown[]): string[] | undefined {
```

**Line:** 365 | **Kind:** fn

### `inferSignalStatus`

```
export function inferSignalStatus(signal: FailoverSignal): number | undefined {
```

**Line:** 472 | **Kind:** fn

### `isUnclassifiedNoBodyHttpSignal`

```
export function isUnclassifiedNoBodyHttpSignal(signal: FailoverSignal): boolean {
```

**Line:** 495 | **Kind:** fn

### `isTransientHttpError`

```
export function isTransientHttpError(raw: string): boolean {
```

**Line:** 736 | **Kind:** fn

### `isGenericUnknownStreamErrorMessage`

```
export function isGenericUnknownStreamErrorMessage(raw: string): boolean {
```

**Line:** 963 | **Kind:** fn

### `classifyFailoverSignal`

```
export function classifyFailoverSignal(signal: FailoverSignal): FailoverClassification | null {
```

**Line:** 1169 | **Kind:** fn

### `classifyProviderRuntimeFailureKind`

```
export function classifyProviderRuntimeFailureKind(
```

**Line:** 1235 | **Kind:** fn

### `classifyAssistantFailoverReason`

```
export function classifyAssistantFailoverReason(
```

**Line:** 1353 | **Kind:** fn

### `formatAssistantErrorText`

```
export function formatAssistantErrorText(
```

**Line:** 1365 | **Kind:** fn

### `formatUserFacingAssistantErrorText`

```
export function formatUserFacingAssistantErrorText(
```

**Line:** 1605 | **Kind:** fn

### `isRateLimitAssistantError`

```
export function isRateLimitAssistantError(msg: AssistantMessage | undefined): boolean {
```

**Line:** 1631 | **Kind:** fn

### `isBillingAssistantError`

```
export function isBillingAssistantError(msg: AssistantMessage | undefined): boolean {
```

**Line:** 1655 | **Kind:** fn

### `parseImageDimensionError`

```
export function parseImageDimensionError(raw: string): {
```

**Line:** 1709 | **Kind:** fn

### `parseImageSizeError`

```
export function parseImageSizeError(raw: string): {
```

**Line:** 1736 | **Kind:** fn

### `isCloudCodeAssistFormatError`

```
export function isCloudCodeAssistFormatError(raw: string): boolean {
```

**Line:** 1761 | **Kind:** fn

### `isAuthAssistantError`

```
export function isAuthAssistantError(msg: AssistantMessage | undefined): boolean {
```

**Line:** 1765 | **Kind:** fn

### `classifyFailoverReason`

```
export function classifyFailoverReason(
```

**Line:** 1794 | **Kind:** fn

### `isFailoverErrorMessage`

```
export function isFailoverErrorMessage(raw: string, opts?: { provider?: string }): boolean {
```

**Line:** 1806 | **Kind:** fn

### `isFailoverAssistantError`

```
export function isFailoverAssistantError(msg: AssistantMessage | undefined): boolean {
```

**Line:** 1810 | **Kind:** fn
