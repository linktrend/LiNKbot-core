# scripts/github/barnacle-auto-response.mjs

[← Back to Module](../modules/scripts-github/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1204
- **Language:** JavaScript
- **Symbols:** 34
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 283 | fn | normalizeLogin | (private) | `const normalizeLogin = (login) => login.toLower...` |
| 286 | fn | isAutomationPullRequest | (private) | `function isAutomationPullRequest(pullRequest) {` |
| 294 | fn | extractIssueFormValue | (private) | `function extractIssueFormValue(body, field) {` |
| 316 | fn | hasLinkedReference | (private) | `function hasLinkedReference(text) {` |
| 320 | fn | hasFilledTemplateLine | (private) | `function hasFilledTemplateLine(body, field) {` |
| 326 | fn | hasMostlyBlankTemplate | (private) | `function hasMostlyBlankTemplate(body) {` |
| 355 | fn | stripPullRequestTemplateBoilerplate | (private) | `function stripPullRequestTemplateBoilerplate(te...` |
| 376 | fn | hasConcreteBehaviorContext | (private) | `function hasConcreteBehaviorContext(body, text) {` |
| 396 | fn | hasClearDesignContext | (private) | `function hasClearDesignContext(body, text) {` |
| 406 | fn | isMarkdownOrDocsFile | (private) | `function isMarkdownOrDocsFile(filename) {` |
| 414 | fn | isTestLikeFile | (private) | `function isTestLikeFile(filename) {` |
| 424 | fn | isInfraLikeFile | (private) | `function isInfraLikeFile(filename) {` |
| 437 | fn | surfacesForFile | (private) | `function surfacesForFile(filename) {` |
| 464 | fn | classifyPullRequestCandidateLabels | pub | `export function classifyPullRequestCandidateLab...` |
| 560 | fn | ensureLabelSynced | (private) | `async function ensureLabelSynced(github, contex...` |
| 594 | fn | syncManagedLabels | (private) | `async function syncManagedLabels(github, contex...` |
| 600 | fn | syncBugSubtypeLabel | (private) | `async function syncBugSubtypeLabel(github, cont...` |
| 647 | fn | createMaintainerChecker | (private) | `function createMaintainerChecker(github, contex...` |
| 675 | fn | hasPrivilegedRepositoryRole | (private) | `async function hasPrivilegedRepositoryRole(gith...` |
| 694 | fn | isPrivilegedActor | (private) | `async function isPrivilegedActor(github, contex...` |
| 701 | fn | isPrivilegedTargetAuthor | (private) | `async function isPrivilegedTargetAuthor(github,...` |
| 714 | fn | countMaintainerMentions | (private) | `async function countMaintainerMentions(body, au...` |
| 746 | fn | listPullRequestFiles | (private) | `async function listPullRequestFiles(github, con...` |
| 755 | fn | addMissingLabels | (private) | `async function addMissingLabels(github, context...` |
| 772 | fn | isClawSweeperOwnedLabel | (private) | `function isClawSweeperOwnedLabel(label) {` |
| 776 | fn | applyPullRequestCandidateLabels | (private) | `async function applyPullRequestCandidateLabels(...` |
| 799 | fn | isAutomationUser | (private) | `function isAutomationUser(user, fallbackLogin =...` |
| 804 | fn | isAutomationActor | (private) | `function isAutomationActor(context) {` |
| 808 | fn | isClawSweeperProofSufficientLabelEvent | (private) | `function isClawSweeperProofSufficientLabelEvent...` |
| 818 | fn | isGitHubAppPullRequestAuthor | (private) | `function isGitHubAppPullRequestAuthor(pullReque...` |
| 822 | fn | candidateActionRuleForLabelSet | (private) | `function candidateActionRuleForLabelSet(labelSe...` |
| 832 | fn | applyPullRequestCandidateAction | (private) | `async function applyPullRequestCandidateAction({` |
| 877 | fn | removeLabels | (private) | `async function removeLabels(github, context, is...` |
| 901 | fn | runBarnacleAutoResponse | pub | `export async function runBarnacleAutoResponse({...` |

## Public API

### `classifyPullRequestCandidateLabels`

```
export function classifyPullRequestCandidateLabels(pullRequest, files) {
```

**Line:** 464 | **Kind:** fn

### `runBarnacleAutoResponse`

```
export async function runBarnacleAutoResponse({ github, context, core = console }) {
```

**Line:** 901 | **Kind:** fn
