# OCP-W20 Cross-Repo Integration — Candidate Release Graph

**Packet:** `OCP-W20-CROSS-REPO-INTEGRATION`
**Candidate branch:** `ocp-w20-cross-repo-integration-cli`
**Base:** `origin/dev/cursor/ocp-w10-independent-correction` @ `3169119fb697fa28cc6d2c244231729a8206e68d`
**Live Lisa:** untouched (candidate-only; no profile/credential/cloud/migration/deploy)
**CI / Bugbot:** deferred (honest — not claimed)

## Immutable certified candidate heads (read-only)

| System | Checkout | SHA | Notes |
| --- | --- | --- | --- |
| Platform | `/Users/linktrend/Projects/LiNKplatform` | `421a35e97bc302be0f5e1f196d0a5e8d132f6fd8` | draft PR #17; not edited |
| Brain | `brain-repin-diffcheck-correction-2` | `a5bc9fe13f58374e3e5267c7352b1c342d6171c1` | candidate only; not edited |
| Skills | `skills-repin-certified-platform-cli` | `35d528f510cfb41bfab9ee306556dcd7a495ff16` | draft PR #23; not edited |

## Freshly resolved openclaw_prime integration leads (already ancestors of base)

| Lead | Ref | SHA | Relation to base |
| --- | --- | --- | --- |
| PR #38 | `issue/ocp-openclawdevelopmentplan01` | `3c8dbf9f5741cad1d1cd50d88b260be48dfa97e5` | ancestor — no merge |
| ACP wait | `issue/ocp-acp-wait-reentry` | `0675755d170aaa264dac898081cc10d58af017a4` | ancestor — no merge |
| Lisa ops | `issue/ocp-lisa-ops01` | `fb9fe4b68b85fd866670ce748ba1c060cab6a323` | ancestor — no merge |
| W10 correction | `dev/cursor/ocp-w10-independent-correction` | `3169119fb697fa28cc6d2c244231729a8206e68d` | **start SHA** |

## Deterministic candidate release order (no source-branch merges)

1. **Certified Platform pin** `421a35e…` — PACI envelope `0.1.0` / schema freeze compatibility proven via paci-fake fixtures (Lane A).
2. **Certified Brain pin** `a5bc9fe…` — consumer of Platform pin; candidate only.
3. **Certified Skills pin** `35d528f…` — consumer of Platform pin; candidate only.
4. **PR #38 PACI/Brain/Skills adapters** `3c8dbf9…` — already on W10 lineage; provenance only.
5. **ACP `sessions_wait` re-entry** `0675755…` — registry persist + deadline; already on W10 lineage.
6. **Lisa ops01** `fb9fe4b…` — allowlists / Ship-Pull / Repair / digest / heartbeat; already on W10 lineage.
7. **W10 independent correction** `3169119…` — MiniMax PDF honesty + ACP adversarial waits.
8. **This W20 candidate tip** — fail-closed live ops gate + machine-readable PDF `needs_human_gate` + cross-repo evidence + release graph.
9. **Human gates before any live cutover** (not part of this wave):
   - PDF `documentModels` enablement (`pdfDocumentModelsCutover.state=needs_human_gate`)
   - Live Lisa profile sync with separately approved credentials
   - Paid Nemotron spend enablement (evaluation-only forever until explicit approval)
   - CI + Bugbot (deferred here)
   - Promote/merge to `development` after review (draft PR only from this wave)

## Remaining gates

- `needs_human_gate`: MiniMax-M3 PDF unproven; media PDF owner remains `MiniMax-M2.7`
- Live ops enablement: explicit live targeting + separately approved credentials
- CI / Bugbot deferred
- No claim of live canary or production proof

## Rollback

Revert this candidate-only commit on the W20 branch. Leaves live Lisa untouched.
