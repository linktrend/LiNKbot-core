# WP-01 Terra takeover handoff

## Attempt accounting

- Luna attempt 1: rejected commit `46d84bb66707228a410ca67d7a9c6aa089e01b3a`, tree `ac466668768a38c5fd17eaf25404ab4cda27843b`.
- Luna attempt 2: Codex CLI `gpt-5.6-luna` high-reasoning thread `019ffb96-8eed-7243-80e9-e3c618e7d966`, stopped after code production and before commit for substantive defects.
- Terra takeover is permitted under the packet's two unsuccessful code-producing attempt rule. No further Luna attempt is authorized without Carlos.

## Source-only boundaries

No SSH, VPS/profile/service/credential/OAuth/deployment/channel/schedule/deletion or other live mutation is in scope. Item 1 remains closed. The packet has not been accepted, integrated, deployed, or promoted.

## Functional source receipt

- Functional commit: `f0653a0f38e5a4d19a4348091da18c722eff0a7b`
- Functional tree: `f83b3c1d4b99b411da3947137c8a46f1089e295b`
- Staged source-only paths: generic exec routing/configuration/diagnostics/tests plus `WP-01-decision-execution-matrix.md` and `WP-01-linux-sandbox-plan.md`; no Lisa profile/runtime or Item 1/2/3 path.
- Captured final-tree validation on explicit supported Node `v24.19.0`:
  - `node scripts/run-vitest.mjs` over `exec-route-policy`, approvals config, exec security floor, host gateway, runtime, PTY fallback, and agent config: PASS, 2 shards, 198 tests.
  - `node scripts/run-oxlint.mjs` over the changed exec/approvals files: PASS.
  - `oxfmt --check` on all 12 explicit functional paths: PASS.
  - `git diff --check`: PASS before staging and after formatting.
- Checkpoint-2 behavioral amendment: a verified structural binding is its own constrained host approval. It bypasses only the conventional gateway allowlist/prompt pipeline, so exact adapters run without elevation even when legacy profile policy is `security=allowlist` and `ask=always`; profile STOP screening, exact parsed executable/prefix, enforced rendering, fixed environment, and caller-env rejection still apply. Captured restricted-profile regression and the full 198-test focused set pass.
- Full `node scripts/run-tsgo.mjs` was run in the supported Node 24.19 PTY but reached the supervisor-authorized 35-minute local resource bound and was interrupted. It is explicitly HOLD for the post-integration WP-04 combined remote type validation, not PASS and not a source failure.

## Supervisor acceptance and closeout

- 2026-08-14 00:55 Asia/Taipei — Supervisor checkpoint-2 ACCEPTED functional commit `f0653a0f38e5a4d19a4348091da18c722eff0a7b`, tree `f83b3c1d4b99b411da3947137c8a46f1089e295b`, for later serial integration only. Independent review confirmed generic opt-in routing, profile STOP-before-route behavior, exact gateway binding/enforced rendering, constrained adapter approval under restrictive legacy policy, fixed safe environment, legacy compatibility, truthful diagnostics, Node 24.19 focused 198/198 proof, and diff hygiene.
- The exact-tree full Node 24.19 `tsgo` lane remains an explicit WP-04 remote combined-validation HOLD after its supervisor-authorized 35-minute local resource bound. It is neither a WP-01 source failure nor a completion claim.
- This docs-only closeout moves the Terra session to `completed/`; it changes no functional path. Final clean status and closeout commit/tree are reported from post-commit Git evidence.
- No integration, promotion, deployment, VPS/profile/service/credential/OAuth access, reconciliation, channel cutover, or deletion is authorized by this acceptance.

## Remaining gates

Live sandbox, adapter, VPS host-key, OAuth/credential, Google behavior, deployment, reconciliation, independence, recovery, and retirement gates remain HOLD. Integration requires a separately explicit serial base/order and supervisor verification of this closeout.
