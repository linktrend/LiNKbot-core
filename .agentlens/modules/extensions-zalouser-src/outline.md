# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 6 large files in this module.

## extensions/zalouser/src/monitor.group-gating.test.ts (968 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | createAccount | (private) |
| 46 | fn | createConfig | (private) |
| 61 | fn | createRuntimeEnv | (private) |
| 63 | type | DispatchReplyCallArg | (private) |
| 80 | fn | mockCallArg | (private) |
| 88 | fn | dispatchReplyCall | (private) |
| 92 | fn | installRuntime | (private) |
| 134 | type | TurnPlan | (private) |
| 286 | fn | installGroupCommandAuthRuntime | (private) |
| 293 | fn | processMessageThroughMonitor | (private) |
| 340 | fn | processGroupControlCommand | (private) |
| 358 | fn | createGroupMessage | (private) |
| 377 | fn | createDmMessage | (private) |
| 406 | fn | processMessageWithDefaults | (private) |
| 426 | fn | expectSkippedGroupMessage | (private) |
| 437 | fn | startMonitorForStartupResolution | (private) |
| 457 | fn | expectGroupCommandAuthorizers | (private) |
| 475 | fn | processOpenDmMessage | (private) |
| 493 | fn | expectDangerousNameMatching | (private) |
| 529 | fn | dispatchGroupMessage | (private) |

## extensions/zalouser/src/monitor.ts (964 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 59 | type | ZalouserMonitorOptions | (private) |
| 68 | type | ZalouserMonitorResult | (private) |
| 74 | fn | buildNameIndex | (private) |
| 88 | fn | resolveUserAllowlistEntries | (private) |
| 117 | type | ZalouserCoreRuntime | (private) |
| 119 | type | ZalouserGroupHistoryState | (private) |
| 124 | fn | normalizeZalouserAllowEntry | (private) |
| 128 | fn | normalizeZalouserSender | (private) |
| 132 | fn | resolveZalouserRouteAccess | (private) |
| 156 | fn | senderScopedZalouserGroupPolicy | (private) |
| 166 | fn | logVerbose | (private) |
| 172 | fn | resolveGroupRequireMention | (private) |
| 194 | fn | sendZalouserDeliveryAcks | (private) |
| 212 | fn | processMessage | (private) |
| 684 | fn | deliverZalouserReply | (private) |
| 745 | fn | monitorZalouserProvider | pub |
| 891 | fn | settleSuccess | (private) |
| 899 | fn | settleFailure | (private) |
| 912 | fn | onAbort | (private) |

## extensions/zalouser/src/setup-surface.ts (504 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | parseZalouserEntries | (private) |
| 46 | fn | setZalouserAccountScopedConfig | (private) |
| 61 | fn | setZalouserDmPolicy | (private) |
| 82 | fn | setZalouserGroupPolicy | (private) |
| 92 | fn | setZalouserGroupAllowlist | (private) |
| 105 | fn | ensureZalouserPluginEnabled | (private) |
| 132 | fn | noteZalouserHelp | (private) |
| 147 | fn | promptZalouserAllowFrom | (private) |
| 248 | fn | promptZalouserQuickstartDmPolicy | (private) |

## extensions/zalouser/src/text-styles.ts (547 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | InlineStyle | (private) |
| 10 | type | LineStyle | (private) |
| 16 | type | Segment | (private) |
| 21 | type | InlineMarker | (private) |
| 28 | type | ResolvedInlineMatch | (private) |
| 36 | type | FenceMarker | (private) |
| 42 | type | ActiveFence | (private) |
| 108 | fn | parseZalouserTextStyles | pub |
| 334 | fn | clampIndent | (private) |
| 338 | fn | stripOptionalMarkdownPadding | (private) |
| 349 | fn | hasClosingFence | (private) |
| 360 | fn | resolveOpeningFence | (private) |
| 382 | fn | stripQuotePrefix | (private) |
| 411 | fn | parseFenceMarker | (private) |
| 430 | fn | isClosingFence | (private) |
| 439 | fn | escapeLiteralText | (private) |
| 447 | fn | parseInlineSegments | (private) |
| 475 | fn | findNextInlineMatch | (private) |
| 506 | fn | pushSegment | (private) |
| 523 | fn | sameStyles | (private) |
| 527 | fn | normalizeCodeBlockLeadingWhitespace | (private) |
| 533 | fn | isIndentedCodeBlockLine | (private) |
| 537 | fn | stripCodeFenceIndent | (private) |

## extensions/zalouser/src/zalo-js.credentials.test.ts (507 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | fn | readStoredCredentials | (private) |
| 54 | fn | seedStoredCredentials | (private) |
| 62 | fn | createMockApi | (private) |
| 447 | fn | expectMissingSessionResult | (private) |

## extensions/zalouser/src/zalo-js.ts (1910 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 72 | type | CredentialPersistenceMode | (private) |
| 73 | type | CredentialPersistenceOptions | (private) |
| 74 | type | ZaloCredentialPayload | (private) |
| 76 | type | ActiveZaloQrLogin | (private) |
| 90 | type | ActiveZaloListener | (private) |
| 99 | type | AccountInfoResponse | (private) |
| 101 | fn | normalizeProfile | (private) |
| 106 | fn | toErrorMessage | (private) |
| 113 | fn | clampTextStyles | (private) |
| 146 | fn | toNumberId | (private) |
| 159 | fn | toStringValue | (private) |
| 169 | fn | normalizeAccountInfoUser | (private) |
| 183 | fn | toInteger | (private) |
| 197 | fn | normalizeMessageContent | (private) |
| 219 | fn | resolveInboundTimestamp | (private) |
| 220 | fn | fallbackTimestamp | (private) |
| 244 | fn | extractMentionIds | (private) |
| 262 | type | MentionSpan | (private) |
| 267 | fn | toNonNegativeInteger | (private) |
| 281 | fn | extractOwnMentionSpans | (private) |
| 334 | fn | stripOwnMentionsForCommandBody | (private) |
| 360 | fn | stripLeadingAtMentionForCommand | (private) |
| 368 | fn | resolveGroupNameFromMessageData | (private) |
| 379 | fn | buildEventMessage | (private) |
| 400 | fn | extractSendMessageId | (private) |
| 424 | fn | resolveMediaFileName | (private) |
| 458 | fn | resolveUploadedVoiceAsset | (private) |
| 481 | fn | buildZaloVoicePlaybackUrl | (private) |
| 487 | fn | mapFriend | (private) |
| 495 | fn | mapGroup | (private) |
| 507 | fn | readCredentials | (private) |
| 520 | fn | credentialSignature | (private) |
| 529 | fn | stableCanonicalValue | (private) |
| 543 | fn | stableSignatureValue | (private) |
| 547 | fn | canonicalCookieArray | (private) |
| 555 | fn | canonicalCredentialCookie | (private) |
| 574 | fn | writeCredentials | (private) |
| 598 | fn | snapshotApiCredentials | (private) |
| 622 | fn | writeApiCredentials | (private) |
| 631 | fn | writeApiCredentialsIfChanged | (private) |
| 640 | fn | persistApiCredentialsIfChanged | (private) |
| 649 | fn | clearCredentials | (private) |
| 661 | fn | ensureApi | (private) |
| 677 | fn | initPromise | (private) |
| 714 | fn | withZaloApi | (private) |
| 733 | fn | invalidateApi | (private) |
| 747 | fn | isQrLoginFresh | (private) |
| 751 | fn | resetQrLogin | (private) |
| 765 | fn | fetchGroupsByIds | (private) |
| 781 | fn | makeGroupContextCacheKey | (private) |
| 785 | fn | readCachedGroupContext | (private) |
| 801 | fn | trimGroupContextCache | (private) |
| 817 | fn | writeCachedGroupContext | (private) |
| 834 | fn | clearCachedGroupContext | (private) |
| 842 | fn | extractGroupMembersFromInfo | (private) |
| 863 | fn | normalizeZaloInboundMessage | pub |
| 928 | fn | truncatePayloadText | (private) |
| 932 | fn | zalouserSessionExists | (private) |
| 937 | fn | checkZaloAuthenticated | pub |
| 964 | fn | getZaloUserInfo | pub |
| 980 | fn | listZaloFriends | pub |
| 995 | fn | listZaloFriendsMatching | pub |
| 1017 | fn | listZaloGroups | pub |
| 1046 | fn | listZaloGroupsMatching | pub |
| 1062 | fn | listZaloGroupMembers | pub |
| 1135 | fn | resolveZaloGroupContext | pub |
| 1164 | fn | sendZaloTextMessage | pub |
| 1300 | fn | sendZaloTypingEvent | pub |
| 1315 | fn | resolveOwnUserId | (private) |
| 1338 | fn | resolveZaloOwnUserId | pub |
| 1342 | fn | sendZaloReaction | pub |
| 1380 | fn | sendZaloDeliveredEvent | pub |
| 1393 | fn | sendZaloSeenEvent | pub |
| 1405 | fn | sendZaloLink | pub |
| 1460 | fn | startZaloQrLogin | pub |
| 1639 | fn | waitForZaloQrLogin | pub |
| 1690 | fn | logoutZaloProfile | pub |
| 1719 | fn | startZaloListener | pub |
| 1740 | fn | cleanup | (private) |
| 1764 | fn | onMessage | (private) |
| 1773 | fn | failListener | (private) |
| 1782 | fn | onError | (private) |
| 1787 | fn | onClosed | (private) |
| 1837 | fn | resolveZaloGroupsByEntries | pub |
| 1870 | fn | resolveZaloAllowFromEntries | pub |
