# Lisa provider policy (Item 3 Wave A + Wave B wiring)

Lisa-owned source policy for five-provider consumption. This directory holds
the Wave A P-01 through P-09 scaffold (identity, capabilities, privacy, Skills,
Autowork, Libraries, obsolete-reference replacement, non-regression audit) and
the Wave B P-10 binder `wiring.ts`.

Wave A policy modules use Lisa-owned ports and deterministic fakes only. They
must not import Item 2 adapters or guess adapter exports.

Wave B `wiring.ts` may import only the five public barrels
`extensions/link*/api.ts` and only symbols recorded from the independently
accepted Item 2 head (plan §2.2). No deep `extensions/*/src/**` imports. No
live provider, VPS, credential, or schedule activation.

## Ownership

- Lisa policy lives here. It does not own provider truth.
- Ports are dependency-injected. Wave A tests use deterministic fakes. Wave B
  tests also exercise `createWiredLisaProviderPorts`.
- Do not import `extensions/link*/src` from Lisa policy or wiring.
- Do not mint credentials, enable schedules, or mutate live memory.

## Invariants this policy must not bypass

Model routing, mandatory Cursor ACP coding delegation, `main` versus
`lisa-cron` sandboxing, Google identities and safe wrappers, Carlos approval
gates, planning/HOLD behavior, memory privacy, heartbeat/jobs/channels, and
Personality/tool doctrine remain in their existing Lisa files. Provider
results are advisory and never execution authority.

## Outcomes

Every authorization returns exactly one closed status: `accepted`, `denied`,
`unavailable`, or `invalid`. Silent success, local-memory fallback claimed as
a provider result, and helper credential inheritance are forbidden.
