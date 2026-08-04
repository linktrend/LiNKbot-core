# OCP-W30 Approved PDF Routing — Candidate Release Graph

**Packet:** `OCP-W30-APPROVED-PDF-ROUTING`
**Candidate branch:** `ocp-w30-approved-pdf-routing-cli`
**Base:** `origin/dev/cursor/ocp-w20-diffcheck-correction` @ `fe56c2e697e142f549a58a40de2a51d62334571b`
**Live Lisa:** untouched (candidate-only; no profile/credential/cloud/migration/deploy)
**CI / Bugbot:** deferred (honest — not claimed)

## Routing summary (candidate)

| Slot                            | Value                                                                            |
| ------------------------------- | -------------------------------------------------------------------------------- |
| `pdf` / documentModels          | `minimax/MiniMax-M3`                                                             |
| Capability class                | `approved_unverified`                                                            |
| First proof                     | controlled production rollout (separately authorized; **not claimed done here**) |
| Alternate paid document routing | **forbidden**                                                                    |
| Non-live defaults               | `liveMutationAllowed=false`, `paidSpendEnablementAllowed=false`                  |

## Candidate posture (not proven)

- Principal-approved **candidate** only: MiniMax-M3 may be named as the PDF/document route under capability `approved_unverified`.
- Do **not** imply MiniMax-M3 PDF capability was already proven, accepted, or live.
- First-PDF proof happens only during a separately authorized production rollout; this packet does not execute or claim that proof.
- Success claims require a **first-production-proof receipt** (see Remaining human gates). Without that receipt, treat PDF capability as unverified.

## Deterministic candidate release order

1. **W20 diffcheck-correction base** `fe56c2e…` — start SHA for this wave.
2. **This W30 candidate tip** — approve MiniMax-M3 PDF/document candidate at `approved_unverified`; wire fail-closed disable-PDF-only rollback language; keep text/image/default-fallback intact; keep non-live hard stops.
3. **Separately authorized production rollout** (not part of this wave) — controlled first-PDF proof only when deployment/credentials gates are cleared.
4. **First-production-proof receipt** — required before any success claim that M3 PDF works in production.
5. **Human final acceptance** — remains a separate gate after proof receipt.

## Remaining human gates

- Deployment / promote to live targeting (separate authorization)
- Credentials / live Lisa profile sync (separate authorization; live Lisa untouched by this candidate)
- Controlled **first-PDF proof** during production rollout (not claimed here)
- **First-production-proof receipt** before any success claim
- Final acceptance after proof receipt
- Paid Nemotron / paid spend enablement (still `paidSpendEnablementAllowed=false`)
- CI + Bugbot (deferred here)
- Promote/merge to `development` after review

## Rollback

1. **Candidate git rollback:** revert this candidate-only commit on the W30 branch. Leaves live Lisa untouched.
2. **Runtime fail-closed (provider/PDF failure during rollout):** disable **PDF document routing only**; preserve text, image, and default-fallback routes; emit a non-secret failure event; **no** paid alternate document model.

## Honesty bounds

- No claim of live canary, production proof, or MiniMax-M3 PDF verification from this packet alone.
- CI / Bugbot deferred — not green-washed.
- `liveMutationAllowed=false` and `paidSpendEnablementAllowed=false` remain hard stops until Principal flips them under separate approval.
