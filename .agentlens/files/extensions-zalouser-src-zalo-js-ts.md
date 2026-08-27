# extensions/zalouser/src/zalo-js.ts

[← Back to Module](../modules/extensions-zalouser-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1910
- **Language:** TypeScript
- **Symbols:** 85
- **Public symbols:** 22

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 72 | type | CredentialPersistenceMode | (private) | - |
| 73 | type | CredentialPersistenceOptions | (private) | - |
| 74 | type | ZaloCredentialPayload | (private) | - |
| 76 | type | ActiveZaloQrLogin | (private) | - |
| 90 | type | ActiveZaloListener | (private) | - |
| 99 | type | AccountInfoResponse | (private) | - |
| 101 | fn | normalizeProfile | (private) | `function normalizeProfile(profile?: string | nu...` |
| 106 | fn | toErrorMessage | (private) | `function toErrorMessage(error: unknown): string {` |
| 113 | fn | clampTextStyles | (private) | `function clampTextStyles(` |
| 146 | fn | toNumberId | (private) | `function toNumberId(value: unknown): string {` |
| 159 | fn | toStringValue | (private) | `function toStringValue(value: unknown): string {` |
| 169 | fn | normalizeAccountInfoUser | (private) | `function normalizeAccountInfoUser(info: Account...` |
| 183 | fn | toInteger | (private) | `function toInteger(value: unknown, fallback = 0...` |
| 197 | fn | normalizeMessageContent | (private) | `function normalizeMessageContent(content: unkno...` |
| 219 | fn | resolveInboundTimestamp | (private) | `function resolveInboundTimestamp(rawTs: unknown...` |
| 220 | fn | fallbackTimestamp | (private) | `const fallbackTimestamp = () => asDateTimestamp...` |
| 244 | fn | extractMentionIds | (private) | `function extractMentionIds(rawMentions: unknown...` |
| 262 | type | MentionSpan | (private) | - |
| 267 | fn | toNonNegativeInteger | (private) | `function toNonNegativeInteger(value: unknown): ...` |
| 281 | fn | extractOwnMentionSpans | (private) | `function extractOwnMentionSpans(` |
| 334 | fn | stripOwnMentionsForCommandBody | (private) | `function stripOwnMentionsForCommandBody(` |
| 360 | fn | stripLeadingAtMentionForCommand | (private) | `function stripLeadingAtMentionForCommand(conten...` |
| 368 | fn | resolveGroupNameFromMessageData | (private) | `function resolveGroupNameFromMessageData(data: ...` |
| 379 | fn | buildEventMessage | (private) | `function buildEventMessage(data: Record<string,...` |
| 400 | fn | extractSendMessageId | (private) | `function extractSendMessageId(result: unknown):...` |
| 424 | fn | resolveMediaFileName | (private) | `function resolveMediaFileName(params: {` |
| 458 | fn | resolveUploadedVoiceAsset | (private) | `function resolveUploadedVoiceAsset(` |
| 481 | fn | buildZaloVoicePlaybackUrl | (private) | `function buildZaloVoicePlaybackUrl(asset: { fil...` |
| 487 | fn | mapFriend | (private) | `function mapFriend(friend: User): ZcaFriend {` |
| 495 | fn | mapGroup | (private) | `function mapGroup(groupId: string, group: Group...` |
| 507 | fn | readCredentials | (private) | `function readCredentials(profile: string): Stor...` |
| 520 | fn | credentialSignature | (private) | `function credentialSignature(credentials: ZaloC...` |
| 529 | fn | stableCanonicalValue | (private) | `function stableCanonicalValue(value: unknown): ...` |
| 543 | fn | stableSignatureValue | (private) | `function stableSignatureValue(value: unknown): ...` |
| 547 | fn | canonicalCookieArray | (private) | `function canonicalCookieArray(value: unknown[])...` |
| 555 | fn | canonicalCredentialCookie | (private) | `function canonicalCredentialCookie(cookie: Cred...` |
| 574 | fn | writeCredentials | (private) | `function writeCredentials(` |
| 598 | fn | snapshotApiCredentials | (private) | `function snapshotApiCredentials(` |
| 622 | fn | writeApiCredentials | (private) | `function writeApiCredentials(` |
| 631 | fn | writeApiCredentialsIfChanged | (private) | `function writeApiCredentialsIfChanged(profile: ...` |
| 640 | fn | persistApiCredentialsIfChanged | (private) | `function persistApiCredentialsIfChanged(profile...` |
| 649 | fn | clearCredentials | (private) | `function clearCredentials(profile: string): boo...` |
| 661 | fn | ensureApi | (private) | `async function ensureApi(` |
| 677 | fn | initPromise | (private) | `const initPromise = (async () => {` |
| 714 | fn | withZaloApi | (private) | `async function withZaloApi<T>(` |
| 733 | fn | invalidateApi | (private) | `function invalidateApi(profileInput?: string | ...` |
| 747 | fn | isQrLoginFresh | (private) | `function isQrLoginFresh(login: ActiveZaloQrLogi...` |
| 751 | fn | resetQrLogin | (private) | `function resetQrLogin(profileInput?: string | n...` |
| 765 | fn | fetchGroupsByIds | (private) | `async function fetchGroupsByIds(api: API, ids: ...` |
| 781 | fn | makeGroupContextCacheKey | (private) | `function makeGroupContextCacheKey(profile: stri...` |
| 785 | fn | readCachedGroupContext | (private) | `function readCachedGroupContext(profile: string...` |
| 801 | fn | trimGroupContextCache | (private) | `function trimGroupContextCache(now: number): vo...` |
| 817 | fn | writeCachedGroupContext | (private) | `function writeCachedGroupContext(profile: strin...` |
| 834 | fn | clearCachedGroupContext | (private) | `function clearCachedGroupContext(profile: strin...` |
| 842 | fn | extractGroupMembersFromInfo | (private) | `function extractGroupMembersFromInfo(` |
| 863 | fn | normalizeZaloInboundMessage | pub | `export function normalizeZaloInboundMessage(` |
| 928 | fn | truncatePayloadText | (private) | `function truncatePayloadText(text: string): str...` |
| 932 | fn | zalouserSessionExists | (private) | `function zalouserSessionExists(profileInput?: s...` |
| 937 | fn | checkZaloAuthenticated | pub | `export async function checkZaloAuthenticated(` |
| 964 | fn | getZaloUserInfo | pub | `export async function getZaloUserInfo(profileIn...` |
| 980 | fn | listZaloFriends | pub | `export async function listZaloFriends(` |
| 995 | fn | listZaloFriendsMatching | pub | `export async function listZaloFriendsMatching(` |
| 1017 | fn | listZaloGroups | pub | `export async function listZaloGroups(` |
| 1046 | fn | listZaloGroupsMatching | pub | `export async function listZaloGroupsMatching(` |
| 1062 | fn | listZaloGroupMembers | pub | `export async function listZaloGroupMembers(` |
| 1135 | fn | resolveZaloGroupContext | pub | `export async function resolveZaloGroupContext(` |
| 1164 | fn | sendZaloTextMessage | pub | `export async function sendZaloTextMessage(` |
| 1300 | fn | sendZaloTypingEvent | pub | `export async function sendZaloTypingEvent(` |
| 1315 | fn | resolveOwnUserId | (private) | `async function resolveOwnUserId(api: API): Prom...` |
| 1338 | fn | resolveZaloOwnUserId | pub | `export async function resolveZaloOwnUserId(prof...` |
| 1342 | fn | sendZaloReaction | pub | `export async function sendZaloReaction(params: {` |
| 1380 | fn | sendZaloDeliveredEvent | pub | `export async function sendZaloDeliveredEvent(pa...` |
| 1393 | fn | sendZaloSeenEvent | pub | `export async function sendZaloSeenEvent(params: {` |
| 1405 | fn | sendZaloLink | pub | `export async function sendZaloLink(` |
| 1460 | fn | startZaloQrLogin | pub | `export async function startZaloQrLogin(params: {` |
| 1639 | fn | waitForZaloQrLogin | pub | `export async function waitForZaloQrLogin(params: {` |
| 1690 | fn | logoutZaloProfile | pub | `export async function logoutZaloProfile(profile...` |
| 1719 | fn | startZaloListener | pub | `export async function startZaloListener(params: {` |
| 1740 | fn | cleanup | (private) | `const cleanup = () => {` |
| 1764 | fn | onMessage | (private) | `const onMessage = (incoming: Message) => {` |
| 1773 | fn | failListener | (private) | `const failListener = (error: Error) => {` |
| 1782 | fn | onError | (private) | `const onError = (error: unknown) => {` |
| 1787 | fn | onClosed | (private) | `const onClosed = (code: number, reason: string)...` |
| 1837 | fn | resolveZaloGroupsByEntries | pub | `export async function resolveZaloGroupsByEntrie...` |
| 1870 | fn | resolveZaloAllowFromEntries | pub | `export async function resolveZaloAllowFromEntri...` |

## Public API

### `normalizeZaloInboundMessage`

```
export function normalizeZaloInboundMessage(
```

**Line:** 863 | **Kind:** fn

### `checkZaloAuthenticated`

```
export async function checkZaloAuthenticated(
```

**Line:** 937 | **Kind:** fn

### `getZaloUserInfo`

```
export async function getZaloUserInfo(profileInput?: string | null): Promise<ZcaUserInfo | null> {
```

**Line:** 964 | **Kind:** fn

### `listZaloFriends`

```
export async function listZaloFriends(
```

**Line:** 980 | **Kind:** fn

### `listZaloFriendsMatching`

```
export async function listZaloFriendsMatching(
```

**Line:** 995 | **Kind:** fn

### `listZaloGroups`

```
export async function listZaloGroups(
```

**Line:** 1017 | **Kind:** fn

### `listZaloGroupsMatching`

```
export async function listZaloGroupsMatching(
```

**Line:** 1046 | **Kind:** fn

### `listZaloGroupMembers`

```
export async function listZaloGroupMembers(
```

**Line:** 1062 | **Kind:** fn

### `resolveZaloGroupContext`

```
export async function resolveZaloGroupContext(
```

**Line:** 1135 | **Kind:** fn

### `sendZaloTextMessage`

```
export async function sendZaloTextMessage(
```

**Line:** 1164 | **Kind:** fn

### `sendZaloTypingEvent`

```
export async function sendZaloTypingEvent(
```

**Line:** 1300 | **Kind:** fn

### `resolveZaloOwnUserId`

```
export async function resolveZaloOwnUserId(profileInput?: string | null): Promise<string> {
```

**Line:** 1338 | **Kind:** fn

### `sendZaloReaction`

```
export async function sendZaloReaction(params: {
```

**Line:** 1342 | **Kind:** fn

### `sendZaloDeliveredEvent`

```
export async function sendZaloDeliveredEvent(params: {
```

**Line:** 1380 | **Kind:** fn

### `sendZaloSeenEvent`

```
export async function sendZaloSeenEvent(params: {
```

**Line:** 1393 | **Kind:** fn

### `sendZaloLink`

```
export async function sendZaloLink(
```

**Line:** 1405 | **Kind:** fn

### `startZaloQrLogin`

```
export async function startZaloQrLogin(params: {
```

**Line:** 1460 | **Kind:** fn

### `waitForZaloQrLogin`

```
export async function waitForZaloQrLogin(params: {
```

**Line:** 1639 | **Kind:** fn

### `logoutZaloProfile`

```
export async function logoutZaloProfile(profileInput?: string | null): Promise<{
```

**Line:** 1690 | **Kind:** fn

### `startZaloListener`

```
export async function startZaloListener(params: {
```

**Line:** 1719 | **Kind:** fn

### `resolveZaloGroupsByEntries`

```
export async function resolveZaloGroupsByEntries(params: {
```

**Line:** 1837 | **Kind:** fn

### `resolveZaloAllowFromEntries`

```
export async function resolveZaloAllowFromEntries(params: {
```

**Line:** 1870 | **Kind:** fn
