# Module: src/gateway/worker-environments

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 101

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/gateway/worker-environments/admission.test.ts` | 132 |  |
| `src/gateway/worker-environments/admission.ts` | 166 |  |
| `src/gateway/worker-environments/bootstrap.test.ts` | 557 | 📊 |
| `src/gateway/worker-environments/bootstrap.ts` | 786 | 📊 |
| `src/gateway/worker-environments/bundle-staging.ts` | 311 |  |
| `src/gateway/worker-environments/bundle.test.ts` | 444 |  |
| `src/gateway/worker-environments/bundle.ts` | 522 | 📊 |
| `src/gateway/worker-environments/connection-identity.ts` | 12 |  |
| `src/gateway/worker-environments/credential.test.ts` | 30 |  |
| `src/gateway/worker-environments/credential.ts` | 53 |  |
| `src/gateway/worker-environments/identity.test.ts` | 79 |  |
| `src/gateway/worker-environments/identity.ts` | 48 |  |
| `src/gateway/worker-environments/inference-control.ts` | 10 |  |
| `src/gateway/worker-environments/inference-runtime.test.ts` | 795 | 📊 |
| `src/gateway/worker-environments/inference-runtime.ts` | 853 | 📊 |
| `src/gateway/worker-environments/inference-store.test.ts` | 242 |  |
| `src/gateway/worker-environments/inference-store.ts` | 364 |  |
| `src/gateway/worker-environments/inference-terminal-message.ts` | 83 |  |
| `src/gateway/worker-environments/inference-tool-call-stream.ts` | 188 |  |
| `src/gateway/worker-environments/inference.test.ts` | 328 |  |
| `src/gateway/worker-environments/inference.ts` | 684 | 📊 |
| `src/gateway/worker-environments/live-event-projection.ts` | 123 |  |
| `src/gateway/worker-environments/live-events.test.ts` | 621 | 📊 |
| `src/gateway/worker-environments/live-events.ts` | 764 | 📊 |
| `src/gateway/worker-environments/placement-dispatch-failure.ts` | 290 |  |
| `src/gateway/worker-environments/placement-dispatch-pending-results.ts` | 547 | 📊 |
| `src/gateway/worker-environments/placement-dispatch-reclaim.test.ts` | 130 |  |
| `src/gateway/worker-environments/placement-dispatch-recovery.ts` | 244 |  |
| `src/gateway/worker-environments/placement-dispatch-staged-results.test.ts` | 462 |  |
| `src/gateway/worker-environments/placement-dispatch-test-fixtures.ts` | 137 |  |
| `src/gateway/worker-environments/placement-dispatch-test-harness.ts` | 314 |  |
| `src/gateway/worker-environments/placement-dispatch.test.ts` | 1084 | 📊 |
| `src/gateway/worker-environments/placement-dispatch.ts` | 438 |  |
| `src/gateway/worker-environments/placement-force-abandon.test.ts` | 95 |  |
| `src/gateway/worker-environments/placement-force-abandon.ts` | 113 |  |
| `src/gateway/worker-environments/placement-projector.test.ts` | 115 |  |
| `src/gateway/worker-environments/placement-projector.ts` | 141 |  |
| `src/gateway/worker-environments/placement-record.ts` | 379 |  |
| `src/gateway/worker-environments/placement-row-codec.ts` | 431 |  |
| `src/gateway/worker-environments/placement-runtime.ts` | 10 |  |
| `src/gateway/worker-environments/placement-session-runtime.ts` | 33 |  |
| `src/gateway/worker-environments/placement-state.ts` | 47 |  |
| `src/gateway/worker-environments/placement-store.test.ts` | 1050 | 📊 |
| `src/gateway/worker-environments/placement-store.ts` | 530 | 📊 |
| `src/gateway/worker-environments/placement-turn-claims.ts` | 564 | 📊 |
| `src/gateway/worker-environments/placement-worker-gate.test.ts` | 153 |  |
| `src/gateway/worker-environments/placement-worker-gate.ts` | 63 |  |
| `src/gateway/worker-environments/placement-workspace-journal.ts` | 164 |  |
| `src/gateway/worker-environments/placement-workspace-result.ts` | 298 |  |
| `src/gateway/worker-environments/reclaimed-placement-redispatch.test.ts` | 48 |  |
| `src/gateway/worker-environments/reclaimed-placement-redispatch.ts` | 25 |  |
| `src/gateway/worker-environments/runtime.ts` | 5 |  |
| `src/gateway/worker-environments/service-contract.ts` | 57 |  |
| `src/gateway/worker-environments/service-validation.ts` | 42 |  |
| `src/gateway/worker-environments/service.test.ts` | 2483 | 📊 |
| `src/gateway/worker-environments/service.ts` | 1566 | 📊 |
| `src/gateway/worker-environments/session-target.ts` | 51 |  |
| `src/gateway/worker-environments/ssh.test.ts` | 64 |  |
| `src/gateway/worker-environments/ssh.ts` | 230 |  |
| `src/gateway/worker-environments/state.test.ts` | 45 |  |
| `src/gateway/worker-environments/state.ts` | 42 |  |
| `src/gateway/worker-environments/store.test.ts` | 638 | 📊 |
| `src/gateway/worker-environments/store.ts` | 889 | 📊 |
| `src/gateway/worker-environments/transcript-commit-store.test.ts` | 128 |  |
| `src/gateway/worker-environments/transcript-commit-store.ts` | 323 |  |
| `src/gateway/worker-environments/transcript-commit.test.ts` | 716 | 📊 |
| `src/gateway/worker-environments/transcript-commit.ts` | 479 |  |
| `src/gateway/worker-environments/tunnel-contract.ts` | 78 |  |
| `src/gateway/worker-environments/tunnel-ssh-runner.ts` | 129 |  |
| `src/gateway/worker-environments/tunnel.test.ts` | 969 | 📊 |
| `src/gateway/worker-environments/tunnel.ts` | 419 |  |
| `src/gateway/worker-environments/worker-turn-admission.ts` | 210 |  |
| `src/gateway/worker-environments/worker-turn-launcher.test.ts` | 1850 | 📊 |
| `src/gateway/worker-environments/worker-turn-launcher.ts` | 676 | 📊 |
| `src/gateway/worker-environments/worker-turn-payload.ts` | 197 |  |
| `src/gateway/worker-environments/workspace-accepted-sync.ts` | 233 |  |
| `src/gateway/worker-environments/workspace-conflicts.test.ts` | 14 |  |
| `src/gateway/worker-environments/workspace-conflicts.ts` | 53 |  |
| `src/gateway/worker-environments/workspace-finalize.test.ts` | 191 |  |
| `src/gateway/worker-environments/workspace-finalize.ts` | 37 |  |
| `src/gateway/worker-environments/workspace-manifest-remote-script.ts` | 515 | 📊 |
| `src/gateway/worker-environments/workspace-manifest.ts` | 309 |  |
| `src/gateway/worker-environments/workspace-operation-coordinator.test.ts` | 27 |  |
| `src/gateway/worker-environments/workspace-operation-coordinator.ts` | 25 |  |
| `src/gateway/worker-environments/workspace-path-exclusions.ts` | 28 |  |
| `src/gateway/worker-environments/workspace-reconcile-apply.ts` | 229 |  |
| `src/gateway/worker-environments/workspace-reconcile-core.ts` | 672 | 📊 |
| `src/gateway/worker-environments/workspace-reconcile-derived-paths.ts` | 111 |  |
| `src/gateway/worker-environments/workspace-reconcile-fs.ts` | 251 |  |
| `src/gateway/worker-environments/workspace-reconcile-recovery.test.ts` | 757 | 📊 |
| `src/gateway/worker-environments/workspace-reconcile-recovery.ts` | 588 | 📊 |
| `src/gateway/worker-environments/workspace-reconcile.test.ts` | 1017 | 📊 |
| `src/gateway/worker-environments/workspace-reconcile.ts` | 3 |  |
| `src/gateway/worker-environments/workspace-result-staging.ts` | 658 | 📊 |
| `src/gateway/worker-environments/workspace-sync-helpers.ts` | 352 |  |
| `src/gateway/worker-environments/workspace-sync-local.test.ts` | 105 |  |
| `src/gateway/worker-environments/workspace-sync-local.ts` | 242 |  |
| `src/gateway/worker-environments/workspace-sync-scripts.test.ts` | 695 | 📊 |
| `src/gateway/worker-environments/workspace-sync-scripts.ts` | 687 | 📊 |
| `src/gateway/worker-environments/workspace-sync-setup-script.ts` | 31 |  |
| `src/gateway/worker-environments/workspace-sync.ts` | 718 | 📊 |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies
