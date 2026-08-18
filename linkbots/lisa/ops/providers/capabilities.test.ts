import { describe, expect, it } from "vitest";
import { LISA_ALLOWED_OPERATIONS, LISA_DENIED_OPERATIONS } from "./capabilities.js";
import { createFakeLisaProviderPorts, ownDataFactsForProvider } from "./fakes.js";
import type { LisaProviderName } from "./outcomes.js";
import { authorizeLisaProviderOperation } from "./policy.js";
import { UNAVAILABLE_PROVIDER_STATUSES } from "./ports.js";

const nowMs = 1_800_000_000_000;
const ports = createFakeLisaProviderPorts({ nowMs });

function authorize(provider: LisaProviderName, name: string, extra: Record<string, unknown> = {}) {
  return authorizeLisaProviderOperation(
    {
      agentId: "main",
      facts: ownDataFactsForProvider(provider),
      operation: { provider, name, ...extra },
      privacyClass: "work",
      payload: { records: [{ id: "ref-1", title: "redacted-metadata" }] },
    },
    ports,
  );
}

describe("Lisa allowed capability matrix", () => {
  it("admits every exhaustive allowed operation after identity succeeds", () => {
    const providers = Object.keys(LISA_ALLOWED_OPERATIONS) as LisaProviderName[];
    for (const provider of providers) {
      for (const name of LISA_ALLOWED_OPERATIONS[provider]) {
        const result = authorize(provider, name);
        expect(result.status, `${provider}:${name}`).toBe("accepted");
        if (result.status === "accepted") {
          expect(result.operation).toEqual({ provider, name });
          expect(result.executionAuthority).toBe("none");
          expect(result.scheduleEnabled).toBe(false);
        }
      }
    }
  });

  it("denies legacy and forbidden operations after identity succeeds", () => {
    const expected = [
      ["platform", "platform.issue_credential", "forbidden_operation"],
      ["brain", "brain_capture_batch", "legacy_operation"],
      ["brain", "brain_checkpoint_write", "legacy_operation"],
      ["brain", "brain_task_update", "legacy_operation"],
      ["skills", "skills_run_start", "legacy_operation"],
      ["skills", "skills_tool_invoke", "legacy_operation"],
      ["skills", "skills_list", "legacy_operation"],
      ["skills", "skills_search", "legacy_operation"],
      ["skills", "skills_describe", "legacy_operation"],
      ["skills", "skills_fragment_get", "legacy_operation"],
      ["skills", "skills_release_get", "legacy_operation"],
      ["autowork", "external_assistance", "forbidden_operation"],
      ["autowork", "media_package", "forbidden_operation"],
      ["autowork", "outreach_adapter", "forbidden_operation"],
      ["libraries", "libraries.catalogue.contribute", "forbidden_operation"],
      ["libraries", "libraries.contribution.intake", "forbidden_operation"],
    ] as const;
    for (const [provider, name, reasonCode] of expected) {
      expect(authorize(provider, name), `${provider}:${name}`).toMatchObject({
        status: "denied",
        reasonCode,
        retryable: false,
      });
    }
    expect(authorize("brain", "v2.secret.wipe")).toMatchObject({
      status: "denied",
      reasonCode: "unknown_operation",
    });
  });

  it("does not let extra fields widen the allowlist", () => {
    const acceptedDiscovery = authorize("brain", "v2.discovery", {
      extraOperation: "skills_run_start",
      grant: "external_assistance",
    });
    expect(acceptedDiscovery.status).toBe("accepted");
    if (acceptedDiscovery.status === "accepted") {
      expect(acceptedDiscovery.operation).toEqual({ provider: "brain", name: "v2.discovery" });
    }
    expect(authorize("brain", "skills_run_start")).toMatchObject({
      status: "denied",
      reasonCode: "unknown_operation",
    });
  });

  it("rejects accessor-backed operation names", () => {
    const operation: Record<string, unknown> = { provider: "brain" };
    Object.defineProperty(operation, "name", {
      enumerable: true,
      get: () => "v2.discovery",
    });
    expect(
      authorizeLisaProviderOperation(
        {
          agentId: "main",
          facts: ownDataFactsForProvider("brain"),
          operation,
          privacyClass: "work",
        },
        ports,
      ),
    ).toMatchObject({
      status: "invalid",
      reasonCode: "accessor_backed_or_inherited_operation",
    });
  });

  it("returns unavailable for every non-available provider status without attempting the operation", () => {
    for (const status of UNAVAILABLE_PROVIDER_STATUSES) {
      const result = authorizeLisaProviderOperation(
        {
          agentId: "main",
          facts: ownDataFactsForProvider("skills"),
          operation: { provider: "skills", name: "skills_catalog_list" },
          privacyClass: "work",
          payload: { records: [{ id: "skill-ref-1" }] },
        },
        createFakeLisaProviderPorts({ nowMs, statusByProvider: { skills: status } }),
      );
      expect(result, status).toMatchObject({
        status: "unavailable",
        reasonCode: `provider_${status}`,
        hold: true,
        retryable: true,
        usedLocalMemoryAsProviderResult: false,
      });
    }
  });

  it("keeps identity denials non-retryable even when the provider is also unavailable", () => {
    const result = authorizeLisaProviderOperation(
      {
        agentId: "main",
        facts: ownDataFactsForProvider("brain"),
        operation: { provider: "brain", name: "v2.discovery" },
        privacyClass: "work",
      },
      createFakeLisaProviderPorts({
        nowMs: 1_900_000_000_000,
        statusByProvider: { brain: "disabled" },
      }),
    );
    expect(result).toMatchObject({ status: "denied", reasonCode: "expired", retryable: false });
  });

  it("lists every denied catalogue name so the matrix stays exhaustive", () => {
    const providers = Object.keys(LISA_DENIED_OPERATIONS) as LisaProviderName[];
    for (const provider of providers) {
      for (const name of LISA_DENIED_OPERATIONS[provider]) {
        expect(authorize(provider, name).status, `${provider}:${name}`).toBe("denied");
      }
    }
  });
});
