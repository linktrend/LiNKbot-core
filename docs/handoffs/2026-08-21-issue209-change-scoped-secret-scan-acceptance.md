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
