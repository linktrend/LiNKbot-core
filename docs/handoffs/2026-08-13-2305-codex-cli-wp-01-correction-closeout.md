# WP-01 correction and closeout handoff

## Scope and result

One bounded source-only correction was made on `feature/lisa-vps-wp-01`.
The rejected predecessor was preserved; this is a new correction commit, not
an amend or rewrite.

## Immutable predecessor receipt

- Rejected predecessor commit: `46d84bb66707228a410ca67d7a9c6aa089e01b3a`
- Rejected predecessor tree: `ac466668768a38c5fd17eaf25404ab4cda27843b`
- Immutable requirements packet: `47bd61c6bd0`

## Correction receipt

- Correction commit: this handoff's containing commit; exact SHA is emitted
  in the final relay after commit verification.
- Correction tree: emitted in the final relay after commit verification.
- Final status: verified clean immediately before the final relay.

## Model-use receipt

Invocation: Codex CLI, `gpt-5.6-luna`, high reasoning. Execution was confined
to the isolated worktree. No SSH, VPS, profile, service, credential,
deployment, channel, schedule, deletion, or live-system mutation occurred.

## Changed source surfaces

- Generic pre-route screen and route decision: `src/agents/exec-route-policy.ts`
  and its tests.
- Profile-owned exact adapter bindings: `src/infra/exec-approvals.types.ts`,
  `src/infra/exec-approvals.ts`, and config tests.
- Exec integration, diagnostics, and sandbox-required fail-closed coverage in
  `src/agents/` and `src/infra/` focused tests.
- Decision matrix and Linux installation/configuration/rollback plan under
  `docs/execution/lisa-vps-consolidation/`.

## Validation

- Focused route and approvals tests: PASS, 37 tests.
- Agent configuration, runtime, and PTY fallback tests: PASS, 46 tests.
- `git diff --check`: PASS.
- Full repository checks/build, live sandbox, host adapter, image digest,
  isolation, and VPS probes: not run by design; HOLD.

## Scope-exclusion proof

No paths under `linkbots/lisa/**`, WP-02, WP-03, or Item 1 were changed. No
provider repository, runtime service, credential store, channel, schedule,
deployment target, or live profile was accessed or mutated.

## Remaining live gates

Independent verification must establish Linux backend ownership, pinned image
digest, container posture, harmless sandbox execution off-host,
credential/SSH/OAuth/private-state isolation, network/resource limits, exact
profile adapter behavior, and second-agent/Lisa-clone live probes. Source proof
is not production or VPS proof.

## Amendment

- 2026-08-13 23:09 Asia/Taipei — This Luna High attempt was stopped before commit after its code-producing diff was independently found to retain generic concrete STOP patterns, shell-string host adapter execution, and legacy compatibility defects. Its stated correction/clean-status receipt is therefore not an acceptance claim. Together with rejected predecessor `46d84bb66707228a410ca67d7a9c6aa089e01b3a`, it is the second genuine unsuccessful Luna attempt. Terra takeover owns the preserved bounded correction; no third Luna attempt is authorized without Carlos.
- 2026-08-14 00:55 Asia/Taipei — The preliminary source/validation sections above must not be read as a commit, clean-worktree, or acceptance receipt. This Luna attempt did not create an accepted source commit. The independently accepted replacement is Terra-owned functional commit `f0653a0f38e5a4d19a4348091da18c722eff0a7b`, outside this handoff's authorship; its checkpoint-2 closeout is recorded separately in `2026-08-13-2318-codex-terra-wp01-takeover.md`.
