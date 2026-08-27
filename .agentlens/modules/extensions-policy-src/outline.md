# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/policy/src/cli.test.ts (1116 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | PolicyCheckCliOptions | (private) |
| 17 | type | PolicyWatchCliOptions | (private) |
| 21 | type | PolicyCompareCliOptions | (private) |
| 26 | fn | runPolicyCli | (private) |
| 52 | fn | runPolicyCheckJson | (private) |
| 60 | fn | runPolicyWatchJson | (private) |
| 69 | fn | workspacePath | (private) |
| 73 | fn | runPolicyCompareJson | (private) |

## extensions/policy/src/policy-conformance.ts (631 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | PolicyConformanceFinding | (private) |
| 33 | type | PolicyConformanceReport | pub |
| 41 | type | PolicyDocument | (private) |
| 46 | type | PolicyDocumentReadResult | (private) |
| 55 | type | PolicyRuleClaim | (private) |
| 69 | fn | buildPolicyConformanceReport | pub |
| 139 | fn | uniqueConformanceFindings | (private) |
| 153 | fn | invalidParseConformanceFinding | (private) |
| 168 | fn | invalidShapeConformanceFinding | (private) |
| 185 | fn | collectInvalidScopedPolicyFindings | (private) |
| 241 | fn | invalidConformanceFinding | (private) |
| 253 | fn | invalidConformancePathFinding | (private) |
| 271 | fn | conformanceFinding | (private) |
| 324 | fn | baselineRuleIsNoOp | (private) |
| 341 | fn | policyRuleValueIsValid | (private) |
| 375 | fn | isExecApprovalAllowlistExpectedRule | (private) |
| 379 | fn | unsupportedPolicyKey | (private) |
| 386 | fn | isExecApprovalAllowlistRequirement | (private) |
| 402 | fn | policyStringIsAllowed | (private) |
| 422 | fn | policyRuleListIsEmpty | (private) |
| 432 | fn | missingConformanceFinding | (private) |
| 448 | fn | weakerConformanceFinding | (private) |
| 465 | fn | globallySatisfiesScopedClaim | (private) |
| 476 | fn | collectPolicyRuleClaims | (private) |
| 480 | fn | collectTopLevelPolicyRuleClaims | (private) |
| 499 | fn | collectScopedPolicyRuleClaims | (private) |
| 543 | fn | coalesceScopedPolicyRuleClaims | (private) |
| 561 | fn | normalizeSelectorValues | (private) |
| 575 | fn | scopedPolicyValue | (private) |
| 584 | fn | getPolicyPath | (private) |
| 595 | fn | readPolicyDocument | (private) |
| 622 | fn | resolvePolicyPath | (private) |
| 626 | fn | ocPathSegment | (private) |
