# Issue #209 Change-Scoped Secret-Scan Acceptance Package

## Status

Consumer acceptance evidence only. This package does not change the scanner,
delivery policy, or execution controller, and it does not authorize integration.

## Exact identity

| Binding                | Value                                                                     |
| ---------------------- | ------------------------------------------------------------------------- |
| Repository             | `linktrend/openclaw_prime`                                                |
| Trusted baseline ref   | `origin/development`                                                      |
| Baseline commit        | `455b8c6402a4a6cffc94554addeec7bd07447b67`                                |
| Baseline tree          | `268e627f99919c1d9f86b7eb00bd91bdbb7a545e`                                |
| Candidate commit       | `9ccc909e4be2c7b1d9d3d70771aee0e4a564e3e8`                                |
| Candidate tree         | `4ab0c9891d9e66d2d40c5c1f8c02a3d06cfd21cc`                                |
| Candidate content tree | `b24359214af4992257c811cb901c575bb1c6e986`                                |
| Scanner policy         | `secret-scan-policy/v1`                                                   |
| Scope/config digest    | `sha256:cca880817a220c3e43ddea487785f9b76b1ed47e2595dfc2d27653b964a5af59` |

## Scope

The baseline-to-candidate comparison has four modified paths and no additions:

- `.github/linktrend-secret-scan-fixtures.json`
- `.ide-development/schemas/secret-scan-result.schema.json`
- `.ide-development/tests/test_fixture_aware_secret_scan.py`
- `scripts/gitops/secret_scan.py`

The reusable scoped union contains those paths plus the eleven installed
scanner, generated-output, delivery, doctrine, schema, and Cursor security-rule
paths recorded by the IDE installation. The union has 12 unique paths. All 12
candidate blobs decoded successfully, and the exact scoped scan returned zero
findings on both the union and every changed path. The three declaration `bytes`
values are synthetic fixture material intentionally excluded by the scanner's
declaration self-scan rule; they are not credential findings.

The inherited full-history scan remains evidence for the unchanged baseline. It
is not rerun for each small fork delta.

## Controller acceptance rule

The central IDE v2.5 controller may reuse inherited baseline PASS evidence only
when every field below is byte-for-byte identical:

- repository and trusted baseline ref;
- baseline commit/tree;
- candidate commit/tree and candidate content tree;
- scanner policy version;
- changed-path list;
- installed scanner/policy path list; and
- scope/config digest.

The controller then scans `changed/additional paths ∪ managed scanner/policy
paths`. Any real credential, stale fixture, scope, missing-identity, stale-path,
or config mismatch is fail-closed. Typed binary/undecodable inputs retain the
existing nonblocking `skipped_input` behavior. No local bypass is implied.

## Negative and adversarial evidence

`.ide-development/tests/test_change_scoped_secret_scan_acceptance.py` records
the exact identity and proves that changing either tree, commit, policy version,
path set, or scope digest rejects reuse. It also generates credential-shaped
fixtures at test time so no credential value is stored in the repository. GitHub,
`sk-*`, cloud, database, private-key, and high-entropy values remain blocking;
variable/member/call/config references remain non-findings.

## Validation and remaining gate

The acceptance tests are documentation/test-fixture evidence for the central
controller. They do not make the current full-history scan green, do not dismiss
the remaining inherited findings, and do not authorize integration, rebaseline,
Cursor dispatch, runtime/VPS work, deployment, or upstream mutation.

## Session Metadata

| Field            | Value                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| Agent identity   | Codex Desktop Agent                                                                            |
| Session ID       | issue209-change-scoped-secret-scan-acceptance-20260821                                         |
| Orchestrator key | OpenClaw Prime and Lisa Planning 02                                                            |
| Objective        | Publish bounded consumer acceptance evidence for the central exact-identity change-scoped rule |
| Scope            | Documentation and test fixtures only                                                           |
| Started          | 2026-08-21 Asia/Taipei                                                                         |
| Ended            | 2026-08-21 Asia/Taipei                                                                         |
| Starting branch  | `issue/209-resolve-ide-v2-5-1-secret-scan-incompatibility-w`                                   |
| Ending branch    | `issue/209-resolve-ide-v2-5-1-secret-scan-incompatibility-w`                                   |
| Starting commit  | `9ccc909e4be2c7b1d9d3d70771aee0e4a564e3e8`                                                     |
| Ending commit    | `4d3f572a2a284b3d78971cbb86b84cdb5a025c33`                                                     |
| Ending tree      | `8e9c82be8fc81039042a4be3ae0e1c005c933c6c`                                                     |

## Files Inspected

- Root and scoped repository instructions, documentation handoff template, and
  relevant secret-scan tests/schema/policy paths.
- Baseline/candidate Git identities and the previously proven 12-path scoped
  scan evidence.

## Files Created

- `.ide-development/tests/test_change_scoped_secret_scan_acceptance.py`
- `docs/handoffs/2026-08-21-issue209-change-scoped-secret-scan-acceptance.md`

## Files Modified or Deleted

None.

## Commands Run

- Import-loaded acceptance unittest suite.
- `python3 -m py_compile .ide-development/tests/test_change_scoped_secret_scan_acceptance.py`
- `pnpm docs:list`
- `node scripts/check-changed.mjs --staged` (remote lane could not start; see below).
- `git diff --cached --check`, commit, push, and exact local/remote GitHub
  commit/tree readback.

## Decisions

- Store only consumer evidence; do not change scanner behavior, policy, or the
  governing controller. This preserves the fail-closed HOLD.
- Generate credential-shaped adversarial values at test time so repository
  contents contain no credential values.

## Tests and Verification

- Acceptance suite: 4/4 passed.
- Compile check: passed.
- `pnpm docs:list`: passed after the worktree dependency bootstrap.
- Local commit and remote branch commit both
  `4d3f572a2a284b3d78971cbb86b84cdb5a025c33`; local and remote tree both
  `8e9c82be8fc81039042a4be3ae0e1c005c933c6c`; worktree clean.

## Problems and Blockers

The staged changed-check classifier delegated to the required Crabbox lane, but
the Crabbox wrapper failed its basic `--version/--help` sanity check before any
repository check ran. This is infrastructure-limited evidence, not a PASS for
that remote lane.

## Uncommitted Changes

None at handoff. No pre-existing changes were overwritten.

## Risks and Unknowns

The central IDE controller has not yet adopted and independently verified this
exact-identity rule. The inherited full-history scan therefore remains red and
the overall readiness state remains HOLD.

## Remaining Work

The bound planner must independently verify this commit/tree and then adopt and
verify the reusable rule in the governing IDE controller before any integration
or readiness promotion.

## Exact Next Action

Planner independent verification of the pushed checkpoint; no product execution,
Cursor dispatch, runtime/VPS action, deployment, approval, or upstream mutation.

## Questions for Carlos

None; no founder approval is requested by this checkpoint.

## Questions for the Orchestrator or Next Agent

Please report any mismatch in the exact identity, 12-path union, or scope/config
digest before controller adoption.

## Confidence

High for the package contents, local tests, and exact remote identity; the
required remote changed-check lane remains unverified because its wrapper could
not start.
