# Wave 19 correction packet — AuthClaims documentation/provenance

**Recorded:** 2026-07-29 Asia/Taipei
**Started from:** `febb498817e95dc372d07fbf6f40ed30153f3989`
**Correction commit:** `b1657b463a502cbcc26d55dba3fefc327f66149b`
**Exact clean tip:** `b1657b463a502cbcc26d55dba3fefc327f66149b` (tip-record docs-only if needed; authoritative `git rev-parse HEAD`)
**Agent:** Cursor Grok 4.5 High
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38) (draft — do not merge)

> Grok owns Phase-13 coverage/evidence + AuthClaims docs/provenance only. OpenClaw Codex owns the seven Phase-14 classifications. Owner countersigns are **not** requested until Codex confirms the resulting final head.

## Scope

Documentation/tooling only. No runtime behavior change. Fixture JSON bytes unchanged. No merge, CI/Bugbot poll, Lisa mutation, live Platform, Phases 7–12, or countersign request.

## Corrections

| #   | Deficiency                                                                       | Correction                                                                                                                                                                                                                                                                      |
| --- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Skills PIN still treated AuthClaims **1.0.0** as current                         | Labeled `platform_auth_claims_pin` **historical**; added approved authoritative `platform_auth_claims_consumer_override` for `platform.auth-claims/1.1.0` / `@linktrend/platform-contracts@0.2.2` / schema `c2e8bc68…` / contentHash `fb518834…` / Skills aggregate `20316371…` |
| 2   | PHASE-1-CONTRACT-CONSUMPTION claimed Skills/identity use 1.0; called gate CLOSED | Removed 1.0-as-current claims; distinguished historical 1.0 tip `429a7818…` from current 1.1 fixtures; stated Brain+Skills **`PENDING_OWNER_COUNTERSIGN`**; gate **RE-OPENED** (not CLOSED)                                                                                     |
| 3   | Platform PIN claimed fixture bytes unchanged / reaffirmation unnecessary         | Removed `brain_skills_fixture_bytes`; recorded wave-8 AuthClaims 1.1 fixture refresh + pending countersigns                                                                                                                                                                     |
| 4   | No fail-closed cross-artifact AuthClaims provenance check                        | Added `scripts/check-openclawdevelopmentplan01-authclaims-provenance.mjs` + focused tests                                                                                                                                                                                       |

## Authoritative AuthClaims pins / hashes

| Field                    | Value                                                                        |
| ------------------------ | ---------------------------------------------------------------------------- |
| Contract                 | `platform.auth-claims/1.1.0`                                                 |
| Package                  | `@linktrend/platform-contracts@0.2.2`                                        |
| Platform HEAD            | `6861a376aae5fa4e12c1b68a808d7b04e7bbfb5b`                                   |
| Schema SHA-256           | `c2e8bc68b3feb9a3dacc497f5a5d497b466c400804fb4f9e41734c10772ddfa1`           |
| contentHash              | `fb518834be897c32574df5f7235704fdb0de708bd3da1b48fc448246e3eca567`           |
| Brain fixture aggregate  | `4493f71432ef56f9fc272ff4c208b8901242c2bd83e138f53d6f0259b4f4811b` (75 JSON) |
| Skills fixture aggregate | `203163711b5db17b8a07d3956e41596384cbd08f0c110bd9f21abfc5c7e5e19a` (71 JSON) |
| Fixture-owner status     | **`PENDING_OWNER_COUNTERSIGN`** (gate **RE-OPENED**)                         |

Historical (not authoritative for current fixtures): Skills upstream vendored `platform.auth-claims/1.0.0` schema `b0397cdf…` / contentHash `6bf49618…`; prior CLOSED tip `429a7818…`.

## Changed files

- `docs/execution/openclawdevelopmentplan01/contracts/skills/PIN.json`
- `docs/execution/openclawdevelopmentplan01/contracts/platform/PIN.json`
- `docs/execution/openclawdevelopmentplan01/contracts/platform/auth-claims-1.1.0/README.md`
- `docs/execution/openclawdevelopmentplan01/PHASE-1-CONTRACT-CONSUMPTION.md`
- `scripts/check-openclawdevelopmentplan01-authclaims-provenance.mjs`
- `test/scripts/check-openclawdevelopmentplan01-authclaims-provenance.test.ts`
- this packet + handoff

## Validation (focused local only)

- AuthClaims provenance validator: **OK**
- AuthClaims provenance tests: **8/8 PASS**
- Section 13.3 ledger: **764/764** OK; descriptive exclusions **16**
- Combined focused tooling tests: **31/31 PASS** (23 ledger + 8 provenance)
- Fixture aggregates unchanged: Brain `4493f714…4811b` / Skills `20316371…e19a`
- Runtime trees / fixture JSON bytes untouched
- No Codex seven-classification column in Grok ledger artifacts

## Explicit non-claims

- No Codex seven-classifications assigned by Grok
- No merge / CI poll / Lisa / Platform live / Phases 7–12
- No Brain/Skills countersign request this wave
- Current fixture-owner gate is **not** CLOSED

## Codex ask

Re-verify tip. Confirm AuthClaims **1.1.0** authoritative pins/hashes, Skills historical-1.0 + authoritative-1.1 override, Platform wave-8 pending-countersign record, PHASE-1 consumption no longer claims 1.0 fixtures or CLOSED gate, provenance validator fail-closed, plan SHA, **764** items, **16** exclusions, fixture aggregates. Assign seven classifications independently. Countersigns only after that confirmation.
