import { describe, expect, it } from "vitest";
import {
  createFakeLisaProviderPorts,
  createFakeSkillsPort,
  FAKE_SKILL_ID,
  FAKE_SKILL_RELEASE_ID,
  ownDataFactsForProvider,
} from "./fakes.js";
import { LISA_OCP01_PIN_IDENTITIES } from "./pin-identities.js";
import { requestLisaSkills } from "./skills.js";

const nowMs = 1_800_000_000_000;
const ports = createFakeLisaProviderPorts({ nowMs });

function request(input: {
  name: string;
  request?: unknown;
  payload?: unknown;
  agentId?: string;
  facts?: Record<string, unknown>;
  statusByProvider?: Parameters<typeof createFakeLisaProviderPorts>[0] extends infer T
    ? T extends { statusByProvider?: infer S }
      ? S
      : never
    : never;
  skills?: ReturnType<typeof createFakeSkillsPort>;
}) {
  return requestLisaSkills(
    {
      agentId: input.agentId ?? "main",
      facts: input.facts ?? ownDataFactsForProvider("skills"),
      operation: { provider: "skills", name: input.name },
      privacyClass: "work",
      payload: input.payload ?? { records: [{ id: "skill-ref-1" }] },
      request: input.request,
    },
    createFakeLisaProviderPorts({
      nowMs,
      statusByProvider: input.statusByProvider,
      skills: input.skills,
    }),
  );
}

describe("Lisa Skills domain request and outcome policy", () => {
  it("accepts catalog list, exact-release describe/verify, and use-report status against pins", () => {
    const catalog = request({ name: "skills_catalog_list" });
    expect(catalog.status).toBe("accepted");
    if (catalog.status === "accepted") {
      expect(catalog.advisory).toBe(true);
      expect(catalog.executionAuthority).toBe("none");
      expect(catalog.evidence.kind).toBe("catalog");
      expect(catalog.evidence.skillId).toBe(FAKE_SKILL_ID);
    }

    const describe = request({
      name: "skills_release_describe",
      request: {
        skillId: FAKE_SKILL_ID,
        releaseId: FAKE_SKILL_RELEASE_ID,
        pinCommit: LISA_OCP01_PIN_IDENTITIES.skills.commit,
        pinTree: LISA_OCP01_PIN_IDENTITIES.skills.tree,
      },
    });
    expect(describe.status).toBe("accepted");
    if (describe.status === "accepted") {
      expect(describe.evidence.kind).toBe("release-describe");
      expect(describe.evidence.pinCommit).toBe(LISA_OCP01_PIN_IDENTITIES.skills.commit);
    }

    const verify = request({
      name: "skills_release_verify",
      request: {
        skillId: FAKE_SKILL_ID,
        releaseId: FAKE_SKILL_RELEASE_ID,
        pinCommit: LISA_OCP01_PIN_IDENTITIES.skills.commit,
        pinTree: LISA_OCP01_PIN_IDENTITIES.skills.tree,
      },
    });
    expect(verify.status).toBe("accepted");
    if (verify.status === "accepted") {
      expect(verify.evidence.kind).toBe("release-verify");
      expect(verify.evidence.releaseId).toBe(FAKE_SKILL_RELEASE_ID);
    }

    const status = request({
      name: "skills_use_report_status_get",
      request: { skillId: FAKE_SKILL_ID, reportId: "use-report-1" },
    });
    expect(status.status).toBe("accepted");
    if (status.status === "accepted") {
      expect(status.evidence.kind).toBe("use-report-status");
      expect(status.evidence.reportStatus).toBe("recorded");
    }
  });

  it("denies legacy run/tool operations and rejects missing skillId or cross-operation fields", () => {
    expect(request({ name: "skills_run_start" })).toMatchObject({
      status: "denied",
      reasonCode: "legacy_operation",
      retryable: false,
    });
    expect(request({ name: "skills_tool_invoke" })).toMatchObject({
      status: "denied",
      reasonCode: "legacy_operation",
    });
    expect(request({ name: "skills_release_verify" })).toMatchObject({
      status: "invalid",
      reasonCode: "missing_skill_id",
    });
    expect(
      request({
        name: "skills_catalog_list",
        request: { releaseId: FAKE_SKILL_RELEASE_ID },
      }),
    ).toMatchObject({ status: "invalid", reasonCode: "cross_operation_fields" });
    expect(
      request({
        name: "skills_release_describe",
        request: { skillId: FAKE_SKILL_ID, releaseId: FAKE_SKILL_RELEASE_ID, runId: "run-1" },
      }),
    ).toMatchObject({ status: "invalid", reasonCode: "cross_operation_fields" });
  });

  it("rejects accessor-backed Skills requests", () => {
    const skillsRequest: Record<string, unknown> = { releaseId: FAKE_SKILL_RELEASE_ID };
    Object.defineProperty(skillsRequest, "skillId", {
      enumerable: true,
      get: () => FAKE_SKILL_ID,
    });
    expect(request({ name: "skills_release_describe", request: skillsRequest })).toMatchObject({
      status: "invalid",
      reasonCode: "accessor_backed_or_inherited_request",
    });
  });

  it("returns unavailable for offline, stale, unauthorized, and missing exact release", () => {
    expect(
      request({
        name: "skills_catalog_list",
        statusByProvider: { skills: "offline" },
      }),
    ).toMatchObject({
      status: "unavailable",
      reasonCode: "provider_offline",
      hold: true,
      usedLocalMemoryAsProviderResult: false,
    });
    expect(
      request({
        name: "skills_catalog_list",
        statusByProvider: { skills: "stale" },
      }),
    ).toMatchObject({ status: "unavailable", reasonCode: "provider_stale" });
    expect(
      request({
        name: "skills_catalog_list",
        statusByProvider: { skills: "unauthorized" },
      }),
    ).toMatchObject({ status: "unavailable", reasonCode: "provider_unauthorized" });
    expect(
      request({
        name: "skills_release_verify",
        request: { skillId: FAKE_SKILL_ID, releaseId: FAKE_SKILL_RELEASE_ID },
        skills: createFakeSkillsPort({ missingRelease: true }),
      }),
    ).toMatchObject({
      status: "unavailable",
      reasonCode: "missing_exact_release",
      hold: true,
    });
  });

  it("keeps helper inheritance denied before any Skills port call", () => {
    expect(
      requestLisaSkills(
        {
          agentId: "cursor",
          facts: ownDataFactsForProvider("skills"),
          operation: { provider: "skills", name: "skills_catalog_list" },
          privacyClass: "work",
        },
        ports,
      ),
    ).toMatchObject({ status: "denied", reasonCode: "helper_credential_inheritance" });
  });
});
