# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 1 large files in this module.

## scripts/mantis/publish-pr-evidence.mjs (634 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | fn | parseArgs | (private) |
| 34 | fn | readJson | (private) |
| 38 | fn | assertInside | (private) |
| 46 | fn | normalizeTargetPath | (private) |
| 61 | fn | resolveArtifact | (private) |
| 99 | fn | loadEvidenceManifest | pub |
| 126 | fn | encodePathForUrl | (private) |
| 134 | fn | artifactUrl | (private) |
| 138 | fn | requireEnv | (private) |
| 146 | fn | objectStorageConfig | (private) |
| 157 | fn | digestHex | (private) |
| 161 | fn | hmac | (private) |
| 165 | fn | signingKey | (private) |
| 172 | fn | s3Path | (private) |
| 176 | fn | contentType | (private) |
| 191 | fn | signedPutRequest | (private) |
| 235 | fn | byLane | (private) |
| 246 | fn | findPair | (private) |
| 253 | fn | renderPairTable | (private) |
| 277 | fn | renderSingleImageTables | (private) |
| 295 | fn | renderLinkList | (private) |
| 305 | fn | laneLine | (private) |
| 321 | fn | hasVisibleProofArtifacts | (private) |
| 329 | fn | isTelegramDesktopProof | (private) |
| 333 | fn | publicSummary | (private) |
| 337 | fn | overallStatus | (private) |
| 342 | fn | shouldPublishPrComment | pub |
| 352 | fn | renderEvidenceComment | pub |
| 437 | fn | run | (private) |
| 445 | fn | uploadArtifact | (private) |
| 482 | fn | publishArtifactFiles | pub |
| 538 | fn | upsertPrComment | (private) |
| 580 | fn | publishEvidence | pub |
