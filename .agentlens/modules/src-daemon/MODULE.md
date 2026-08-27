# Module: src/daemon

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 75

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/daemon/arg-split.ts` | 68 |  |
| `src/daemon/cmd-argv.test.ts` | 43 |  |
| `src/daemon/cmd-argv.ts` | 27 |  |
| `src/daemon/cmd-set.ts` | 69 |  |
| `src/daemon/constants.test.ts` | 116 |  |
| `src/daemon/constants.ts` | 110 |  |
| `src/daemon/container-context.ts` | 13 |  |
| `src/daemon/diagnostics.test.ts` | 159 |  |
| `src/daemon/diagnostics.ts` | 119 |  |
| `src/daemon/exec-file.ts` | 35 |  |
| `src/daemon/future-config-guard.ts` | 26 |  |
| `src/daemon/gateway-entrypoint.ts` | 71 |  |
| `src/daemon/gateway-heap.test.ts` | 116 |  |
| `src/daemon/gateway-heap.ts` | 160 |  |
| `src/daemon/inspect.test.ts` | 422 |  |
| `src/daemon/inspect.ts` | 556 | 📊 |
| `src/daemon/launchd-current-service.test.ts` | 53 |  |
| `src/daemon/launchd-current-service.ts` | 40 |  |
| `src/daemon/launchd-plist.ts` | 336 |  |
| `src/daemon/launchd-restart-handoff.test.ts` | 314 |  |
| `src/daemon/launchd-restart-handoff.ts` | 280 |  |
| `src/daemon/launchd.integration.e2e.test.ts` | 267 |  |
| `src/daemon/launchd.test.ts` | 2628 | 📊 |
| `src/daemon/launchd.ts` | 1410 | 📊 |
| `src/daemon/node-service.ts` | 81 |  |
| `src/daemon/output.ts` | 25 |  |
| `src/daemon/paths.ts` | 63 |  |
| `src/daemon/program-args.test.ts` | 308 |  |
| `src/daemon/program-args.ts` | 302 |  |
| `src/daemon/restart-logs.test.ts` | 142 |  |
| `src/daemon/restart-logs.ts` | 131 |  |
| `src/daemon/runtime-binary.test.ts` | 46 |  |
| `src/daemon/runtime-binary.ts` | 29 |  |
| `src/daemon/runtime-format.test.ts` | 11 |  |
| `src/daemon/runtime-format.ts` | 67 |  |
| `src/daemon/runtime-hints.test.ts` | 86 |  |
| `src/daemon/runtime-hints.ts` | 65 |  |
| `src/daemon/runtime-hints.windows-paths.test.ts` | 44 |  |
| `src/daemon/runtime-parse.ts` | 24 |  |
| `src/daemon/runtime-paths.test.ts` | 574 | 📊 |
| `src/daemon/runtime-paths.ts` | 299 |  |
| `src/daemon/schtasks-exec.test.ts` | 53 |  |
| `src/daemon/schtasks-exec.ts` | 28 |  |
| `src/daemon/schtasks.install.test.ts` | 620 | 📊 |
| `src/daemon/schtasks.startup-fallback.test.ts` | 2049 | 📊 |
| `src/daemon/schtasks.stop.test.ts` | 547 | 📊 |
| `src/daemon/schtasks.test.ts` | 456 |  |
| `src/daemon/schtasks.ts` | 2132 | 📊 |
| `src/daemon/service-audit.test.ts` | 812 | 📊 |
| `src/daemon/service-audit.ts` | 674 | 📊 |
| `src/daemon/service-env-merge.ts` | 27 |  |
| `src/daemon/service-env-plan.ts` | 64 |  |
| `src/daemon/service-env-render-policy.ts` | 78 |  |
| `src/daemon/service-env.test.ts` | 1040 | 📊 |
| `src/daemon/service-env.ts` | 545 | 📊 |
| `src/daemon/service-layout.test.ts` | 41 |  |
| `src/daemon/service-layout.ts` | 156 |  |
| `src/daemon/service-managed-env.ts` | 166 |  |
| `src/daemon/service-mutation.ts` | 14 |  |
| `src/daemon/service-path-policy.ts` | 40 |  |
| `src/daemon/service-runtime.test.ts` | 110 |  |
| `src/daemon/service-runtime.ts` | 141 |  |
| `src/daemon/service-types.ts` | 132 |  |
| `src/daemon/service.test-helpers.ts` | 22 |  |
| `src/daemon/service.test.ts` | 396 |  |
| `src/daemon/service.ts` | 418 |  |
| `src/daemon/systemd-hints.test.ts` | 62 |  |
| `src/daemon/systemd-hints.ts` | 44 |  |
| `src/daemon/systemd-linger.ts` | 83 |  |
| `src/daemon/systemd-unavailable.test.ts` | 45 |  |
| `src/daemon/systemd-unavailable.ts` | 59 |  |
| `src/daemon/systemd-unit.test.ts` | 59 |  |
| `src/daemon/systemd-unit.ts` | 161 |  |
| `src/daemon/systemd.test.ts` | 2425 | 📊 |
| `src/daemon/systemd.ts` | 1576 | 📊 |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 0 | 0 | 2 |

## 🟢 Low Priority

### `NOTE` (src/daemon/service-env.ts:265)

> FNM_DIR on macOS defaults to ~/Library/Application Support/fnm

### `NOTE` (src/daemon/service-env.ts:266)

> PNPM_HOME on macOS defaults to ~/Library/pnpm
