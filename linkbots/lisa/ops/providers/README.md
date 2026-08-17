# Lisa provider policy (Item 3 Wave A)

Lisa-owned source policy for five-provider consumption. This directory holds
the Wave A P-01 through P-09 scaffold: identity, capabilities, privacy, Skills,
Autowork, Libraries, obsolete-reference replacement, and the non-regression
audit. Wave B may later bind ports to public Item 2 barrels after an
independently accepted Item 2 head.

Wave A uses Lisa-owned ports and deterministic fakes only. Do not import Item 2
adapters, guess adapter exports, or activate runtime.

## Ownership

- Lisa policy lives here. It does not own provider truth.
- Ports are dependency-injected. Tests use deterministic fakes.
- Do not import `extensions/link*/src` or `extensions/link*/api.ts` in Wave A.
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
