import { describe, expect, it } from "vitest";
import {
  exactReleaseTelemetry,
  expectedPackageDigest,
  SKILLS_COMMIT,
  SKILLS_TREE,
  validateExactRelease,
  validateProgressiveReleaseTransition,
  type ExactRelease,
} from "./src/exact-release.js";

const now = "2026-08-13T00:00:00.000Z";
const releaseId = "skill.echo@2026.08.12";
const version = "2026.08.12";
const manifestDigest = "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const validRelease: ExactRelease = {
  release_id: releaseId,
  version,
  providerCandidate: { commit: SKILLS_COMMIT, tree: SKILLS_TREE },
  manifest_digest: manifestDigest,
  package_digest: expectedPackageDigest({ release_id: releaseId, manifest_digest: manifestDigest }),
  lifecycle: "qualified",
  state: "available",
  compatible_profiles: ["runtime:fixture-openclaw-01"],
  attestation: {
    issuer: "librarian",
    digest: "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    evaluated_at: "2026-08-12T12:00:00.000Z",
    valid_until: "2026-08-14T00:00:00.000Z",
  },
  issued_at: "2026-08-12T12:00:00.000Z",
  expires_at: "2026-08-14T00:00:00.000Z",
};

const check = (changes: Record<string, unknown>, code: string) => {
  const result = validateExactRelease(
    { ...validRelease, ...changes },
    { profile: "runtime:fixture-openclaw-01", now },
  );
  expect(result).toMatchObject({ ok: false, code });
  expect(exactReleaseTelemetry(result)).not.toHaveProperty("conversation");
  return result;
};

describe("exact provider Skills releases", () => {
  it("accepts an immutable, qualified, available, attested exact release", () => {
    const result = validateExactRelease(validRelease, {
      profile: "runtime:fixture-openclaw-01",
      now,
    });
    expect(result).toMatchObject({
      ok: true,
      release: validRelease,
      telemetry: { outcome: "accepted", release_id: validRelease.release_id },
    });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(Object.isFrozen(result.release)).toBe(true);
      expect(() => {
        (result.release as { release_id: string }).release_id = "skill.changed@1.0.0";
      }).toThrow();
      expect(result.release.release_id).toBe(validRelease.release_id);
    }
  });

  it.each([
    [{ release_id: "latest" }, "latest_alias"],
    [{ version: "latest" }, "latest_alias"],
    [{ version: "2026.08.13" }, "invalid_immutability"],
    [{ release_id: "skill.echo" }, "invalid_immutability"],
    [{ providerCandidate: undefined }, "invalid_provider_candidate"],
    [{ providerCandidate: { commit: "other", tree: SKILLS_TREE } }, "invalid_provider_candidate"],
    [{ providerCandidate: { commit: SKILLS_COMMIT, tree: "other" } }, "invalid_provider_candidate"],
    [
      { providerCandidate: { commit: SKILLS_COMMIT, tree: SKILLS_TREE, extra: true } },
      "invalid_provider_candidate",
    ],
    [{ manifest_digest: "latest" }, "invalid_digest"],
    [{ manifest_digest: "unpinned" }, "invalid_digest"],
    [{ package_digest: "corrupt" }, "invalid_digest"],
    [
      { package_digest: "sha256:bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb" },
      "invalid_digest",
    ],
    [
      { package_digest: "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
      "invalid_immutability",
    ],
    [{ lifecycle: "published" }, "invalid_lifecycle"],
    [{ state: "revoked" }, "invalid_state"],
    [{ state: "quarantined" }, "invalid_state"],
    [{ compatible_profiles: ["runtime:other"] }, "incompatible_profile"],
    [{ attestation: undefined }, "missing_attestation"],
    [{ issued_at: "not-a-time" }, "invalid_timestamp"],
    [{ issued_at: "2026-08-12" }, "invalid_timestamp"],
    [{ issued_at: "2026-02-30T12:00:00.000Z" }, "invalid_timestamp"],
    [{ issued_at: "2026-08-12T12:00:00+00:00" }, "invalid_timestamp"],
    [
      { attestation: { ...validRelease.attestation, evaluated_at: "2026-08-12" } },
      "invalid_timestamp",
    ],
    [{ expires_at: "2026-08-12T23:59:59.000Z" }, "stale_timestamp"],
    [{ issued_at: "2026-08-01T00:00:00.000Z" }, "stale_timestamp"],
  ] as const)("rejects %j", (changes, code) => {
    check(changes, code);
  });

  it("rejects invalid clock and max-age inputs", () => {
    expect(
      validateExactRelease(validRelease, {
        profile: "runtime:fixture-openclaw-01",
        now: new Date("invalid"),
      }),
    ).toMatchObject({ ok: false, code: "invalid_timestamp" });
    expect(
      validateExactRelease(validRelease, {
        profile: "runtime:fixture-openclaw-01",
        now,
        maxAgeMs: Number.NaN,
      }),
    ).toMatchObject({ ok: false, code: "invalid_timestamp" });
  });

  it("rejects raw conversation, prompt, reasoning, Brain, and raw-tool telemetry fields", () => {
    for (const field of [
      "conversation",
      "prompt",
      "reasoning",
      "brain_findings",
      "raw_tool_args",
      "raw_tool_result",
    ]) {
      const result = validateExactRelease(
        { ...validRelease, [field]: "must not be accepted" },
        { profile: "runtime:fixture-openclaw-01", now },
      );
      expect(result).toMatchObject({ ok: false, code: "invalid_shape" });
      expect(exactReleaseTelemetry(result)).not.toHaveProperty(field);
    }
  });

  it("rejects malformed identity and digest objects without leaking or throwing", () => {
    const malformedIdentity = validateExactRelease(
      { ...validRelease, release_id: { secret: "blocked" }, version: { private: "blocked" } },
      { profile: "runtime:fixture-openclaw-01", now },
    );
    expect(malformedIdentity).toMatchObject({ ok: false, code: "invalid_shape" });
    expect(exactReleaseTelemetry(malformedIdentity)).toEqual({
      outcome: "rejected",
      reason: "invalid_shape",
    });
    for (const changes of [
      { manifest_digest: { toString: null } },
      { package_digest: { toString: null } },
      { attestation: { ...validRelease.attestation, digest: { toString: null } } },
    ]) {
      expect(() =>
        validateExactRelease(
          { ...validRelease, ...changes },
          { profile: "runtime:fixture-openclaw-01", now },
        ),
      ).not.toThrow();
    }
  });

  it("rejects inherited and accessor-backed releases without invoking getters", () => {
    let getterCalls = 0;
    const accessorRelease = { ...validRelease } as Record<string, unknown>;
    Object.defineProperty(accessorRelease, "release_id", {
      enumerable: true,
      get() {
        getterCalls += 1;
        return getterCalls === 1 ? validRelease.release_id : "skill.other@2026.08.12";
      },
    });
    expect(
      validateExactRelease(accessorRelease, { profile: "runtime:fixture-openclaw-01", now }),
    ).toMatchObject({ ok: false, code: "invalid_shape" });
    expect(getterCalls).toBe(0);
    expect(
      validateExactRelease(Object.create(validRelease), {
        profile: "runtime:fixture-openclaw-01",
        now,
      }),
    ).toMatchObject({ ok: false, code: "invalid_shape" });
  });

  it("requires progressive index -> description -> fragments -> exact release", () => {
    const index = {
      stage: "index" as const,
      release_id: validRelease.release_id,
      version: validRelease.version,
    };
    const description = { ...index, stage: "description" as const };
    const fragments = {
      ...description,
      stage: "fragments" as const,
      manifest_digest: validRelease.manifest_digest,
    };
    const exact = {
      ...fragments,
      stage: "exact_release" as const,
      package_digest: validRelease.package_digest,
    };
    expect(validateProgressiveReleaseTransition(undefined, index)).toBe(true);
    expect(validateProgressiveReleaseTransition(undefined, { stage: "index" })).toBe(false);
    expect(validateProgressiveReleaseTransition(undefined, description)).toBe(false);
    expect(validateProgressiveReleaseTransition(index, description)).toBe(true);
    expect(validateProgressiveReleaseTransition(description, fragments)).toBe(true);
    expect(validateProgressiveReleaseTransition(fragments, exact)).toBe(true);
    expect(validateProgressiveReleaseTransition(index, fragments)).toBe(false);
    expect(validateProgressiveReleaseTransition(fragments, { ...exact, version: "other" })).toBe(
      false,
    );
    expect(
      validateProgressiveReleaseTransition(undefined, {
        stage: "index",
        release_id: { nested: true } as unknown as string,
        version: validRelease.version,
      }),
    ).toBe(false);
    expect(
      validateProgressiveReleaseTransition(description, {
        ...fragments,
        manifest_digest: "sha256:not-a-digest",
      }),
    ).toBe(false);
    expect(
      validateProgressiveReleaseTransition(description, {
        ...fragments,
        manifest_digest: { toString: () => validRelease.manifest_digest } as unknown as string,
      }),
    ).toBe(false);
    expect(() =>
      validateProgressiveReleaseTransition(description, {
        ...fragments,
        manifest_digest: { toString: null } as unknown as string,
      }),
    ).not.toThrow();
    expect(
      validateProgressiveReleaseTransition({ ...fragments, stage: "unknown" as never }, exact),
    ).toBe(false);
    expect(
      validateProgressiveReleaseTransition(
        { ...description, stage: "fragments", manifest_digest: undefined },
        exact,
      ),
    ).toBe(false);
    expect(
      validateProgressiveReleaseTransition(
        { ...index, stage: "description", release_id: undefined },
        fragments,
      ),
    ).toBe(false);
  });

  it("rejects inherited and accessor-backed progressive states without invoking getters", () => {
    const inherited = Object.create({
      stage: "index",
      release_id: validRelease.release_id,
      version: validRelease.version,
    });
    expect(validateProgressiveReleaseTransition(undefined, inherited)).toBe(false);
    let getterCalls = 0;
    const accessorState = {
      release_id: validRelease.release_id,
      version: validRelease.version,
    } as Record<string, unknown>;
    Object.defineProperty(accessorState, "stage", {
      enumerable: true,
      get() {
        getterCalls += 1;
        return "index";
      },
    });
    expect(validateProgressiveReleaseTransition(undefined, accessorState as never)).toBe(false);
    expect(getterCalls).toBe(0);
  });

  it("matches the provider package digest construction", () => {
    expect(
      expectedPackageDigest({
        release_id: validRelease.release_id,
        manifest_digest: validRelease.manifest_digest,
      }),
    ).toBe(validRelease.package_digest);
  });
});
