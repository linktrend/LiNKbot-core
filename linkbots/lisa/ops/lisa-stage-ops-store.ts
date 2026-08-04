/**
 * Workshop adapter — thin re-export of the canonical Kysely Lisa stage-ops store.
 * Owner: src/state/lisa-stage-ops-store.ts
 *
 * No raw SQLite / DatabaseSync implementation lives here. Workshop node:test
 * callers must load register-strip-types-js-resolve.mjs so src `.js` imports resolve.
 */
export * from "../../../src/state/lisa-stage-ops-store.ts";
