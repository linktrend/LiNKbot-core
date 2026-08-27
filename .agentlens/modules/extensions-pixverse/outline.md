# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/pixverse/video-generation-provider.test.ts (735 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | firstPostJsonRequest | (private) |
| 34 | fn | firstMultipartRequest | (private) |
| 42 | fn | firstPollRequest | (private) |
| 54 | fn | pollFetchHeaders | (private) |
| 59 | fn | streamedJsonResponse | (private) |
| 74 | fn | oversizedJsonResponse | (private) |

## extensions/pixverse/video-generation-provider.ts (521 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 63 | type | PixVerseUploadImageResponse | (private) |
| 68 | type | PixVerseVideoCreateResponse | (private) |
| 72 | type | PixVerseVideoResultResponse | (private) |
| 82 | fn | resolvePixVerseBaseUrl | (private) |
| 92 | fn | resolvePixVerseApiRegion | (private) |
| 110 | fn | normalizePixVerseModel | (private) |
| 115 | fn | resolvePixVerseQuality | (private) |
| 129 | fn | resolvePixVerseDurationSeconds | (private) |
| 136 | fn | appendOptionalNumber | (private) |
| 143 | fn | appendOptionalInt32Seed | (private) |
| 150 | fn | readPixVerseSeed | (private) |
| 154 | fn | appendOptionalString | (private) |
| 161 | fn | buildPixVerseHeaders | (private) |
| 172 | fn | readPixVerseSuccess | (private) |
| 192 | fn | readPixVerseJson | (private) |
| 197 | fn | readPixVerseVideoId | (private) |
| 205 | fn | readPixVerseImageId | (private) |
| 213 | fn | readPixVerseStatus | (private) |
| 221 | fn | buildUploadImageForm | (private) |
| 240 | fn | buildVideoBody | (private) |
| 285 | fn | readPixVerseFailureMessage | (private) |
| 298 | fn | pollPixVerseVideo | (private) |
| 307 | fn | readResult | (private) |
| 327 | fn | extractPixVerseVideo | (private) |
| 344 | fn | buildPixVerseVideoGenerationProvider | pub |
