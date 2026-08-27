# Module: src/flows

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 44

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/flows/bundled-health-checks.test.ts` | 83 |  |
| `src/flows/bundled-health-checks.ts` | 41 |  |
| `src/flows/channel-setup.prompts.test.ts` | 47 |  |
| `src/flows/channel-setup.prompts.ts` | 169 |  |
| `src/flows/channel-setup.status.test.ts` | 451 |  |
| `src/flows/channel-setup.status.ts` | 569 | 📊 |
| `src/flows/channel-setup.test-helpers.ts` | 53 |  |
| `src/flows/channel-setup.test.ts` | 1287 | 📊 |
| `src/flows/channel-setup.ts` | 836 | 📊 |
| `src/flows/doctor-core-browser-residue-check.test.ts` | 129 |  |
| `src/flows/doctor-core-checks.e2e.test.ts` | 115 |  |
| `src/flows/doctor-core-checks.runtime-errors.test.ts` | 172 |  |
| `src/flows/doctor-core-checks.runtime.test.ts` | 1176 | 📊 |
| `src/flows/doctor-core-checks.runtime.ts` | 1176 | 📊 |
| `src/flows/doctor-core-checks.test.ts` | 944 | 📊 |
| `src/flows/doctor-core-checks.ts` | 1199 | 📊 |
| `src/flows/doctor-error-message.ts` | 20 |  |
| `src/flows/doctor-health-contributions.test-support.ts` | 57 |  |
| `src/flows/doctor-health-contributions.test.ts` | 3585 | 📊 |
| `src/flows/doctor-health-contributions.ts` | 2341 | 📊 |
| `src/flows/doctor-health.ts` | 95 |  |
| `src/flows/doctor-lint-flow.test.ts` | 166 |  |
| `src/flows/doctor-lint-flow.ts` | 110 |  |
| `src/flows/doctor-removed-workspaces-state-check.test.ts` | 223 |  |
| `src/flows/doctor-removed-workspaces-state-check.ts` | 174 |  |
| `src/flows/doctor-repair-flow.test.ts` | 409 |  |
| `src/flows/doctor-repair-flow.ts` | 304 |  |
| `src/flows/doctor-startup-channel-maintenance.test.ts` | 138 |  |
| `src/flows/doctor-startup-channel-maintenance.ts` | 92 |  |
| `src/flows/doctor-tool-result-cap-advice.test.ts` | 80 |  |
| `src/flows/doctor-tool-result-cap-advice.ts` | 162 |  |
| `src/flows/health-check-adapter.ts` | 88 |  |
| `src/flows/health-check-registry.ts` | 51 |  |
| `src/flows/health-check-runner-types.ts` | 47 |  |
| `src/flows/health-checks.ts` | 114 |  |
| `src/flows/model-picker.provider-catalog.test.ts` | 69 |  |
| `src/flows/model-picker.provider-catalog.ts` | 36 |  |
| `src/flows/model-picker.ts` | 1736 | 📊 |
| `src/flows/provider-flow.runtime.ts` | 86 |  |
| `src/flows/provider-flow.test.ts` | 400 |  |
| `src/flows/provider-flow.ts` | 160 |  |
| `src/flows/search-setup.test.ts` | 593 | 📊 |
| `src/flows/search-setup.ts` | 709 | 📊 |
| `src/flows/types.ts` | 45 |  |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 1 | 0 | 0 |

## 🔴 High Priority

### `RULE` (src/flows/bundled-health-checks.ts:31)

> doctor checks are bundled, but still respect the same manifest owner gate as runtime.
