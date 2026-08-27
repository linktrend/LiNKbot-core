# Module: src/infra/net

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 29

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/infra/net/configured-local-origin-bypass.ts` | 90 |  |
| `src/infra/net/fetch-guard.ssrf.test.ts` | 2370 | 📊 |
| `src/infra/net/fetch-guard.ts` | 732 | 📊 |
| `src/infra/net/form-data.test.ts` | 37 |  |
| `src/infra/net/form-data.ts` | 8 |  |
| `src/infra/net/guarded-body-stream.test.ts` | 167 |  |
| `src/infra/net/guarded-body-stream.ts` | 99 |  |
| `src/infra/net/hostname.test.ts` | 20 |  |
| `src/infra/net/hostname.ts` | 12 |  |
| `src/infra/net/node-proxy-agent.test.ts` | 62 |  |
| `src/infra/net/node-proxy-agent.ts` | 255 |  |
| `src/infra/net/proxy-env.test.ts` | 434 |  |
| `src/infra/net/proxy-env.ts` | 295 |  |
| `src/infra/net/proxy-fetch.test.ts` | 523 | 📊 |
| `src/infra/net/proxy-fetch.ts` | 90 |  |
| `src/infra/net/redirect-headers.ts` | 40 |  |
| `src/infra/net/runtime-fetch.test.ts` | 139 |  |
| `src/infra/net/runtime-fetch.ts` | 120 |  |
| `src/infra/net/ssrf.dispatcher.test.ts` | 459 |  |
| `src/infra/net/ssrf.pinning.test.ts` | 297 |  |
| `src/infra/net/ssrf.test.ts` | 379 |  |
| `src/infra/net/ssrf.ts` | 780 | 📊 |
| `src/infra/net/undici-dispatcher-options.ts` | 207 |  |
| `src/infra/net/undici-error-diagnostics.ts` | 54 |  |
| `src/infra/net/undici-family-policy.ts` | 79 |  |
| `src/infra/net/undici-global-dispatcher.test.ts` | 889 | 📊 |
| `src/infra/net/undici-global-dispatcher.ts` | 385 |  |
| `src/infra/net/undici-runtime.test.ts` | 279 |  |
| `src/infra/net/undici-runtime.ts` | 82 |  |

## Child Modules

- [src-infra-net-proxy](../src-infra-net-proxy/MODULE.md)

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 2 | 0 | 0 |

## 🔴 High Priority

### `RULE` (src/infra/net/ssrf.test.ts:368)

> after the flag was flipped on.

### `RULE` (src/infra/net/ssrf.ts:78)

> equality needs deterministic set ordering and normalized host/origin
