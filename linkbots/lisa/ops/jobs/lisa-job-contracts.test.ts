import { describe, expect, it } from "vitest";
import {
  LISA_JOB_IDS,
  LISA_JOB_SCHEDULE_METADATA,
  LISA_JOB_TIME_ZONE,
  LISA_PROVIDER_POLICY_STATUSES,
  assertCycleIdentity,
  assertDestinationBindingId,
  assertLisaErrorCode,
  assertLisaGenericPrivacyClass,
  assertLisaScheduleMetadata,
  assertProviderFailure,
  assertProviderReceiptReference,
  assertSafeIdentifier,
  isLisaGenericPrivacyClass,
  isLisaJobId,
  isLisaLocalDate,
} from "./lisa-job-contracts.js";

describe("Lisa job contracts", () => {
  it("defines exactly ten canonical jobs with disabled Taipei metadata", () => {
    expect(LISA_PROVIDER_POLICY_STATUSES).toEqual(["accepted", "denied", "unavailable", "invalid"]);
    expect(LISA_JOB_IDS).toHaveLength(10);
    for (const jobId of LISA_JOB_IDS) {
      expect(isLisaJobId(jobId)).toBe(true);
      const metadata = LISA_JOB_SCHEDULE_METADATA[jobId];
      expect(metadata.timeZone).toBe(LISA_JOB_TIME_ZONE);
      expect(metadata.enabled).toBe(false);
      expect(metadata.deliveryMode).toBe("none");
      expect(() => assertLisaScheduleMetadata(metadata)).not.toThrow();
    }
  });

  it("validates cycle dates and rejects impossible dates", () => {
    expect(isLisaLocalDate("2026-08-13")).toBe(true);
    expect(isLisaLocalDate("2026-02-29")).toBe(false);
    expect(() =>
      assertCycleIdentity({ jobId: "librarian", cycleId: "cycle-1", localDate: "2026-08-13" }),
    ).not.toThrow();
    expect(() =>
      assertCycleIdentity({ jobId: "librarian", cycleId: "cycle-1", localDate: "2026-02-29" }),
    ).toThrow(/local date/iu);
  });

  it("keeps private health out of generic contracts and rejects address-like bindings", () => {
    expect(isLisaGenericPrivacyClass("work")).toBe(true);
    expect(isLisaGenericPrivacyClass("personal_compliance")).toBe(true);
    expect(isLisaGenericPrivacyClass("private_health")).toBe(false);
    expect(() => assertLisaGenericPrivacyClass("private_health")).toThrow(/private_health/iu);
    expect(() => assertSafeIdentifier("someone@example.test", "destinationBindingId")).toThrow(
      /binding identifier/iu,
    );
    expect(() => assertDestinationBindingId("123456789")).toThrow(/named/iu);
    expect(() => assertDestinationBindingId("carlos-work")).not.toThrow();
  });

  it("accepts exact release/contract references but no address or token-shaped identifier", () => {
    expect(() =>
      assertProviderReceiptReference({
        providerId: "linkbrain",
        releaseRef: "2026.08.13",
        contractRef: "librarian@1.0.0",
        receivedAtMs: 1_700_000_000_000,
      }),
    ).not.toThrow();
    expect(() =>
      assertProviderReceiptReference({
        providerId: "linkbrain",
        releaseRef: "bearer-token-value",
        contractRef: "librarian@1.0.0",
        receivedAtMs: 1_700_000_000_000,
      }),
    ).toThrow(/release reference/iu);
    expect(() =>
      assertProviderFailure({ code: "timeout", operatorDetail: "provider timed out" }),
    ).not.toThrow();
    expect(() =>
      assertProviderFailure({ code: "timeout", operatorDetail: "\u0000private" }),
    ).toThrow(/not safe/iu);
    expect(() =>
      assertProviderFailure({ code: "timeout", operatorDetail: "token: (secret-value" }),)
    ).toThrow(/not safe/iu);
    expect(() => assertLisaErrorCode("provider_timeout")).not.toThrow();
    expect(() => assertLisaErrorCode("Provider timed out")).toThrow(/payload-free/iu);
  });
});
