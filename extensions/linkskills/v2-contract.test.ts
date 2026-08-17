import { describe, expect, it } from "vitest";
import {
  SKILLS_COMMIT,
  SKILLS_TREE,
  SKILLS_CONTRACT_VERSION,
  SKILLS_MCP_PROTOCOL_VERSION,
  validateSkillsQualificationIdentity,
  validateSkillsV2Request,
} from "./api.js";

const base = {
  providerCandidate: { commit: SKILLS_COMMIT, tree: SKILLS_TREE },
  protocolVersion: SKILLS_MCP_PROTOCOL_VERSION,
  contractVersion: SKILLS_CONTRACT_VERSION,
  operation: "skills_catalog_list",
  actorId: "actor-1",
  idempotencyKey: "skills-idem-00000001",
  limit: 25,
} as const;
describe("Skills v2 consumer boundary", () => {
  it("accepts catalog discovery and exact release detail", () => {
    expect(validateSkillsV2Request(base).ok).toBe(true);
    expect(
      validateSkillsV2Request({ ...base, operation: "skills_catalog_search", query: "echo" }).ok,
    ).toBe(true);
    expect(
      validateSkillsV2Request({
        ...base,
        operation: "skills_release_describe",
        skillId: "skill.echo",
        version: "1.0.0",
      }).ok,
    ).toBe(true);
  });
  it.each([
    ["legacy run", { operation: "skills_run_start" }, "legacy_execution_disabled"],
    ["legacy tool", { operation: "skills_tool_invoke" }, "legacy_execution_disabled"],
    ["wrong protocol", { protocolVersion: "2025-03-26" }, "incompatible_protocol"],
    [
      "wrong tree",
      { providerCandidate: { commit: SKILLS_COMMIT, tree: "other" } },
      "wrong_provider",
    ],
    ["unbounded page", { limit: 101 }, "invalid_pagination"],
    ["malformed optional skill", { skillId: { nested: true } }, "invalid_shape"],
    ["malformed optional version", { version: { nested: true } }, "invalid_shape"],
    ["missing feedback reference", { operation: "skills_feedback_submit" }, "invalid_shape"],
    [
      "unbound feedback submission",
      { operation: "skills_feedback_submit", feedbackRef: "feedback-1" },
      "invalid_shape",
    ],
    ["missing report reference", { operation: "skills_use_report_submit" }, "invalid_shape"],
    ["missing catalog search query", { operation: "skills_catalog_search" }, "invalid_shape"],
    ["missing qualification identity", { operation: "skills_qualification_get" }, "invalid_shape"],
  ] as const)("fails closed for %s", (_name, changes, code) =>
    expect(validateSkillsV2Request({ ...base, ...changes })).toMatchObject({ ok: false, code }),
  );

  it("accepts feedback submission only when bound to an exact release", () => {
    expect(
      validateSkillsV2Request({
        ...base,
        operation: "skills_feedback_submit",
        feedbackRef: "feedback-1",
        skillId: "skill.echo",
        version: "1.0.0",
      }).ok,
    ).toBe(true);
  });

  it("accepts qualification lookup only for an exact release", () => {
    expect(
      validateSkillsV2Request({
        ...base,
        operation: "skills_qualification_get",
        skillId: "skill.echo",
        version: "1.0.0",
      }).ok,
    ).toBe(true);
  });

  it.each([
    ["mismatched skill id", { skillId: "skill.other", version: "1.0.0" }],
    ["mismatched version", { skillId: "skill.echo", version: "2.0.0" }],
    ["missing skill id", { version: "1.0.0" }],
    ["missing version", { skillId: "skill.echo" }],
  ] as const)("rejects qualification evidence with %s", (_name, value) => {
    expect(
      validateSkillsQualificationIdentity(value, { skillId: "skill.echo", version: "1.0.0" }),
    ).toBe(false);
  });

  it("accepts qualification evidence matching the requested release", () => {
    expect(
      validateSkillsQualificationIdentity(
        { skillId: "skill.echo", version: "1.0.0", state: "qualified" },
        { skillId: "skill.echo", version: "1.0.0" },
      ),
    ).toBe(true);
  });
});
