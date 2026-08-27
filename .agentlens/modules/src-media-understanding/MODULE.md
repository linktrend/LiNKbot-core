# Module: src/media-understanding

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 74

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/media-understanding/apply-capability.ts` | 16 |  |
| `src/media-understanding/apply.echo-transcript.test.ts` | 345 |  |
| `src/media-understanding/apply.runtime.ts` | 2 |  |
| `src/media-understanding/apply.test.ts` | 2076 | 📊 |
| `src/media-understanding/apply.ts` | 725 | 📊 |
| `src/media-understanding/attachments.cache.test.ts` | 106 |  |
| `src/media-understanding/attachments.cache.ts` | 522 | 📊 |
| `src/media-understanding/attachments.guards.test.ts` | 42 |  |
| `src/media-understanding/attachments.normalize.test.ts` | 28 |  |
| `src/media-understanding/attachments.normalize.ts` | 131 |  |
| `src/media-understanding/attachments.select.ts` | 94 |  |
| `src/media-understanding/attachments.ts` | 8 |  |
| `src/media-understanding/audio-preflight.test.ts` | 104 |  |
| `src/media-understanding/audio-preflight.ts` | 89 |  |
| `src/media-understanding/audio-transcription-runner.ts` | 53 |  |
| `src/media-understanding/audio.test-helpers.ts` | 83 |  |
| `src/media-understanding/config-provider-models.ts` | 34 |  |
| `src/media-understanding/defaults.constants.ts` | 2 |  |
| `src/media-understanding/defaults.test.ts` | 274 |  |
| `src/media-understanding/defaults.ts` | 245 |  |
| `src/media-understanding/echo-transcript.test.ts` | 182 |  |
| `src/media-understanding/echo-transcript.ts` | 74 |  |
| `src/media-understanding/entry-capabilities.ts` | 66 |  |
| `src/media-understanding/extracted-file-images.ts` | 14 |  |
| `src/media-understanding/file-extraction-limits.test.ts` | 67 |  |
| `src/media-understanding/file-extraction-limits.ts` | 68 |  |
| `src/media-understanding/fs.ts` | 7 |  |
| `src/media-understanding/image-input-normalize.ts` | 48 |  |
| `src/media-understanding/image-model-runtime.ts` | 314 |  |
| `src/media-understanding/image-runtime.ts` | 21 |  |
| `src/media-understanding/image.runtime-profile.test.ts` | 885 | 📊 |
| `src/media-understanding/image.runtime-timeout.test.ts` | 794 | 📊 |
| `src/media-understanding/image.test.ts` | 969 | 📊 |
| `src/media-understanding/image.ts` | 576 | 📊 |
| `src/media-understanding/local-audio.test.ts` | 297 |  |
| `src/media-understanding/local-audio.ts` | 462 |  |
| `src/media-understanding/manifest-metadata.ts` | 46 |  |
| `src/media-understanding/media-understanding-misc.test.ts` | 405 |  |
| `src/media-understanding/media-understanding-url-fallback.test.ts` | 126 |  |
| `src/media-understanding/openai-audio-api.ts` | 14 |  |
| `src/media-understanding/openai-compatible-audio.pin-dns.test.ts` | 58 |  |
| `src/media-understanding/openai-compatible-audio.test.ts` | 174 |  |
| `src/media-understanding/openai-compatible-audio.ts` | 89 |  |
| `src/media-understanding/openai-compatible-video.ts` | 2 |  |
| `src/media-understanding/provider-capability-registry.test.ts` | 51 |  |
| `src/media-understanding/provider-capability-registry.ts` | 44 |  |
| `src/media-understanding/provider-id.ts` | 2 |  |
| `src/media-understanding/provider-registry.test.ts` | 166 |  |
| `src/media-understanding/provider-registry.ts` | 88 |  |
| `src/media-understanding/resolve.test.ts` | 91 |  |
| `src/media-understanding/resolve.ts` | 172 |  |
| `src/media-understanding/runner.attachments.test.ts` | 26 |  |
| `src/media-understanding/runner.attachments.ts` | 27 |  |
| `src/media-understanding/runner.auto-audio.test.ts` | 601 | 📊 |
| `src/media-understanding/runner.cli-audio.test.ts` | 333 |  |
| `src/media-understanding/runner.deepgram.test.ts` | 157 |  |
| `src/media-understanding/runner.entries.guards.test.ts` | 205 |  |
| `src/media-understanding/runner.entries.ts` | 1115 | 📊 |
| `src/media-understanding/runner.local-no-auth.test.ts` | 700 | 📊 |
| `src/media-understanding/runner.proxy.test.ts` | 226 |  |
| `src/media-understanding/runner.skip-tiny-audio.test.ts` | 227 |  |
| `src/media-understanding/runner.test-mocks.ts` | 49 |  |
| `src/media-understanding/runner.test-support.ts` | 19 |  |
| `src/media-understanding/runner.test-utils.ts` | 87 |  |
| `src/media-understanding/runner.ts` | 1172 | 📊 |
| `src/media-understanding/runner.video.test.ts` | 461 |  |
| `src/media-understanding/runner.vision-skip.test.ts` | 1085 | 📊 |
| `src/media-understanding/runtime-types.ts` | 155 |  |
| `src/media-understanding/runtime.test.ts` | 991 | 📊 |
| `src/media-understanding/runtime.ts` | 420 |  |
| `src/media-understanding/scope.ts` | 66 |  |
| `src/media-understanding/shared.test.ts` | 1153 | 📊 |
| `src/media-understanding/shared.ts` | 755 | 📊 |
| `src/media-understanding/types.ts` | 282 |  |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 0 | 0 | 1 |

## 🟢 Low Priority

### `NOTE` (src/media-understanding/apply.test.ts:1862)

> The sanitizeFilename in store.ts would strip most dangerous chars,
