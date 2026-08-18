# OCP-01 Platform foundation

This material root consumes only the final LiNKplatform contract and the
shared immutable provider-pin verifier. It is a new candidate from
`origin/development`; it is not a recovery child of Issue #183.

## Immutable source

| Provider     | Commit                                     | Git tree                                   | Contract/schema                                                                       |
| ------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------------------------------------------------- |
| LiNKplatform | `5452f90a35ed690698a9161117a9d92c69985582` | `90b51726f7a77e4620151a463a10cfc3d2007c88` | `platform.auth-claims/1.1.0`, `platform.provider-trust/1.0.0`, schema `2026.07.28-w4` |

The contract artifact digests are recorded in
`docs/link-integrations/ocp-01/provider-pins.json`. The verifier accepts an
explicit provider scope, so this root verifies only Platform while the later
serial provider roots extend the same framework.

## Relationship to the retired root

Issue #183 remains the preserved five-provider source/ledger reference at
`a2e05663a4a74584d5ffde0102cc86fea14bb348` / tree
`24b5929daeab2314f60e2e08a36bdb2cad66fc12`. This root extracts the Platform
adapter and shared pin/provenance framework only; it does not repair, review,
or inherit the retired candidate's unresolved findings.

## Ownership boundary

Platform remains authoritative for actor identity, runtime binding,
credential references, issuer/audience/scope facts, capability facts, and
revocation. OpenClaw validates received facts and never issues credentials,
creates identity facts, bypasses revocation, or mutates Platform.

No Lisa, runtime, service, credential, schedule, VPS, deployment, production,
or provider-repository state is part of this root.
