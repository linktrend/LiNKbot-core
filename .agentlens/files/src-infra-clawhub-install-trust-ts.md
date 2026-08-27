# src/infra/clawhub-install-trust.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1099
- **Language:** TypeScript
- **Symbols:** 60
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 25 | type | ClawHubTrustErrorCode | pub | - |
| 28 | type | ClawHubRiskAcknowledgementRequest | pub | - |
| 36 | type | ClawHubTrustInstallRecordFields | (private) | - |
| 47 | type | ClawHubTrustAcceptedResult | (private) | - |
| 53 | type | ClawHubTrustFailure | (private) | - |
| 61 | type | ClawHubInstallLogger | (private) | - |
| 66 | type | ClawHubTrustSubject | (private) | - |
| 72 | type | ClawHubSkillSecurityLinks | (private) | - |
| 77 | type | ClawHubPluginSecurityLinks | (private) | - |
| 82 | type | ClawHubSecurityLinks | (private) | - |
| 83 | type | ClawHubFetchedSubjectSecurity | (private) | - |
| 108 | fn | normalizeClawHubTrustToken | (private) | `function normalizeClawHubTrustToken(value: stri...` |
| 112 | fn | formatClawHubTrustStatus | (private) | `function formatClawHubTrustStatus(label: string...` |
| 116 | fn | formatClawHubReasonCode | (private) | `function formatClawHubReasonCode(reason: string...` |
| 143 | type | ClawHubTrustAssessment | (private) | - |
| 149 | fn | isPendingOrStaleTrustWarning | (private) | `function isPendingOrStaleTrustWarning(trust: Cl...` |
| 153 | fn | isNonRiskScanStatus | (private) | `function isNonRiskScanStatus(trust: ClawHubPack...` |
| 157 | fn | isNonRiskReason | (private) | `function isNonRiskReason(trust: ClawHubPackageS...` |
| 161 | fn | resolveClawHubRiskReasons | (private) | `function resolveClawHubRiskReasons(trust: ClawH...` |
| 186 | fn | resolveClawHubTrustStatusNotices | (private) | `function resolveClawHubTrustStatusNotices(trust...` |
| 203 | fn | isBlockingClawHubTrust | (private) | `function isBlockingClawHubTrust(trust: ClawHubP...` |
| 219 | fn | hasMaliciousClawHubTrustSignal | (private) | `function hasMaliciousClawHubTrustSignal(trust: ...` |
| 229 | fn | assessClawHubTrust | (private) | `function assessClawHubTrust(trust: ClawHubPacka...` |
| 244 | fn | buildClawHubTrustInstallRecordFields | (private) | `function buildClawHubTrustInstallRecordFields(p...` |
| 267 | fn | encodeClawHubPackagePath | (private) | `function encodeClawHubPackagePath(packageName: ...` |
| 274 | fn | resolveClawHubSubjectUrl | (private) | `function resolveClawHubSubjectUrl(params: {` |
| 285 | fn | resolveClawHubSecurityLinks | (private) | `function resolveClawHubSecurityLinks(params: {` |
| 310 | fn | padRight | (private) | `function padRight(value: string, width: number)...` |
| 314 | fn | wrapWords | (private) | `function wrapWords(text: string, width: number)...` |
| 336 | fn | resolveClawHubTrustAccent | (private) | `function resolveClawHubTrustAccent(` |
| 352 | fn | formatClawHubEvidenceLine | (private) | `function formatClawHubEvidenceLine(params: {` |
| 361 | fn | renderClawHubTrustBox | (private) | `function renderClawHubTrustBox(` |
| 386 | fn | formatLinkedClawHubValue | (private) | `function formatLinkedClawHubValue(params: {` |
| 398 | fn | formatClawHubTrustEvidenceLines | (private) | `function formatClawHubTrustEvidenceLines(params: {` |
| 462 | fn | formatClawHubRawLinkLine | (private) | `function formatClawHubRawLinkLine(label: string...` |
| 466 | fn | formatClawHubRawLinks | (private) | `function formatClawHubRawLinks(params: {` |
| 487 | fn | formatClawHubTrustWarning | (private) | `function formatClawHubTrustWarning(params: {` |
| 575 | fn | formatClawHubReleaseLabel | (private) | `function formatClawHubReleaseLabel(packageName:...` |
| 579 | fn | formatClawHubSubjectPackageName | (private) | `function formatClawHubSubjectPackageName(subjec...` |
| 585 | fn | formatClawHubSubjectReleaseLabel | (private) | `function formatClawHubSubjectReleaseLabel(subje...` |
| 589 | fn | validateClawHubSecurityIdentity | (private) | `function validateClawHubSecurityIdentity(params: {` |
| 617 | fn | readSkillVerdictSecurityStatus | (private) | `function readSkillVerdictSecurityStatus(item: C...` |
| 628 | fn | readSkillVerdictSecurityPassed | (private) | `function readSkillVerdictSecurityPassed(` |
| 638 | fn | hasUsablePassingSkillVerdictSecurity | (private) | `function hasUsablePassingSkillVerdictSecurity(i...` |
| 644 | fn | hasSkillVerdictSecurityError | (private) | `function hasSkillVerdictSecurityError(item: Cla...` |
| 648 | fn | isSkillVerdictPendingReason | (private) | `function isSkillVerdictPendingReason(reason: st...` |
| 653 | fn | isSkillVerdictStaleReason | (private) | `function isSkillVerdictStaleReason(reason: stri...` |
| 658 | fn | isSkillVerdictBlockingReason | (private) | `function isSkillVerdictBlockingReason(reason: s...` |
| 669 | fn | mapSkillSecurityVerdictToPackageSecurity | (private) | `function mapSkillSecurityVerdictToPackageSecuri...` |
| 749 | fn | resolveSkillSecurityLinks | (private) | `function resolveSkillSecurityLinks(` |
| 763 | fn | readObject | (private) | `function readObject(value: unknown): Record<str...` |
| 769 | fn | readOptionalStringField | (private) | `function readOptionalStringField(value: unknown...` |
| 774 | fn | readOptionalNumberField | (private) | `function readOptionalNumberField(value: unknown...` |
| 780 | fn | mapSkillVerificationSecurityForVerdict | (private) | `function mapSkillVerificationSecurityForVerdict(` |
| 800 | fn | hasOnlyNonSecuritySkillVerifyReasons | (private) | `function hasOnlyNonSecuritySkillVerifyReasons(r...` |
| 809 | fn | isOwnerQualifiedSkillNotFoundVerdict | (private) | `function isOwnerQualifiedSkillNotFoundVerdict(i...` |
| 813 | fn | mapSkillVerificationToSecurityVerdictItem | (private) | `function mapSkillVerificationToSecurityVerdictI...` |
| 871 | fn | fetchOwnerQualifiedSkillSecurityFallback | (private) | `async function fetchOwnerQualifiedSkillSecurity...` |
| 911 | fn | fetchClawHubSubjectSecurity | (private) | `async function fetchClawHubSubjectSecurity(para...` |
| 976 | fn | ensureClawHubPackageTrustAcknowledged | pub | `export async function ensureClawHubPackageTrust...` |

## Public API

### `ensureClawHubPackageTrustAcknowledged`

```
export async function ensureClawHubPackageTrustAcknowledged(params: {
```

**Line:** 976 | **Kind:** fn
