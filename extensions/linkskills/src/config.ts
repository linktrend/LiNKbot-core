/** Linkskills plugin config (§12.1 / §12.2). */

type LinkskillsSecretRef = {
  source: "env" | "file" | "exec";
  provider: string;
  id: string;
};

export type LinkskillsSecretInput = string | LinkskillsSecretRef;

type LinkskillsEnvironment = "test" | "stage" | "production";

export type LinkskillsTransportMode = "disabled" | "fake" | "mcp" | "http";

export type LinkskillsConfig = {
  mcpDiscoveryRead: boolean;
  governedExecution: boolean;
  telemetryEnqueue: boolean;
  telemetryDrain: boolean;
  /** Remote write adapter. Default disabled — no remote calls until operators opt in. */
  transportMode: LinkskillsTransportMode;
  /** Managed MCP server key under api.config.mcp.servers. */
  mcpServerName: string;
  skillsEndpoint?: string;
  skillsCredential?: LinkskillsSecretInput;
  redactionPolicyVersion: string;
  batchMaxEvents: number;
  flushIntervalMs: number;
  outboxMaxEntries: number;
  outboxAgeAlarmMs: number;
  environment: LinkskillsEnvironment;
};

export const DEFAULT_LINKSKILLS_CONFIG: LinkskillsConfig = Object.freeze({
  mcpDiscoveryRead: false,
  governedExecution: false,
  telemetryEnqueue: false,
  telemetryDrain: false,
  transportMode: "disabled",
  mcpServerName: "linkskills",
  redactionPolicyVersion: "skills.telemetry.v0",
  batchMaxEvents: 32,
  flushIntervalMs: 5_000,
  outboxMaxEntries: 1_000,
  outboxAgeAlarmMs: 3_600_000,
  environment: "test",
});

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readBoolean(value: unknown, fallback: boolean): boolean {
  return typeof value === "boolean" ? value : fallback;
}

function readPositiveInt(value: unknown, fallback: number, minimum: number): number {
  if (typeof value !== "number" || !Number.isInteger(value) || value < minimum) {
    return fallback;
  }
  return value;
}

function parseSecretInput(value: unknown): LinkskillsSecretInput | undefined {
  if (value === undefined) {
    return undefined;
  }
  if (typeof value === "string" && value.length > 0) {
    return value;
  }
  if (!isRecord(value)) {
    throw new Error("linkskills: skillsCredential must be a string or SecretRef object");
  }
  const source = value.source;
  const provider = value.provider;
  const id = value.id;
  if (
    (source !== "env" && source !== "file" && source !== "exec") ||
    typeof provider !== "string" ||
    provider.length === 0 ||
    typeof id !== "string" ||
    id.length === 0
  ) {
    throw new Error(
      'linkskills: skillsCredential SecretRef requires source ("env"|"file"|"exec"), provider, and id',
    );
  }
  if (Object.keys(value).some((key) => key !== "source" && key !== "provider" && key !== "id")) {
    throw new Error("linkskills: skillsCredential SecretRef has unexpected properties");
  }
  return { source, provider, id };
}

function parseEnvironment(value: unknown): LinkskillsEnvironment {
  if (value === "test" || value === "stage" || value === "production") {
    return value;
  }
  return DEFAULT_LINKSKILLS_CONFIG.environment;
}

function parseTransportMode(value: unknown): LinkskillsTransportMode {
  if (value === "disabled" || value === "fake" || value === "mcp" || value === "http") {
    return value;
  }
  return DEFAULT_LINKSKILLS_CONFIG.transportMode;
}

/**
 * Validates and normalizes plugin config. Independent Skills flags default off
 * so an enabled plugin still does no remote work until operators opt in.
 */
export function parseLinkskillsConfig(value: unknown): LinkskillsConfig {
  const raw = isRecord(value) ? value : {};
  const skillsEndpoint =
    typeof raw.skillsEndpoint === "string" && raw.skillsEndpoint.length > 0
      ? raw.skillsEndpoint
      : undefined;
  const redactionPolicyVersion =
    typeof raw.redactionPolicyVersion === "string" && raw.redactionPolicyVersion.length > 0
      ? raw.redactionPolicyVersion
      : DEFAULT_LINKSKILLS_CONFIG.redactionPolicyVersion;
  const mcpServerName =
    typeof raw.mcpServerName === "string" && raw.mcpServerName.length > 0
      ? raw.mcpServerName
      : DEFAULT_LINKSKILLS_CONFIG.mcpServerName;

  return {
    mcpDiscoveryRead: readBoolean(raw.mcpDiscoveryRead, DEFAULT_LINKSKILLS_CONFIG.mcpDiscoveryRead),
    governedExecution: readBoolean(
      raw.governedExecution,
      DEFAULT_LINKSKILLS_CONFIG.governedExecution,
    ),
    telemetryEnqueue: readBoolean(raw.telemetryEnqueue, DEFAULT_LINKSKILLS_CONFIG.telemetryEnqueue),
    telemetryDrain: readBoolean(raw.telemetryDrain, DEFAULT_LINKSKILLS_CONFIG.telemetryDrain),
    transportMode: parseTransportMode(raw.transportMode),
    mcpServerName,
    ...(skillsEndpoint ? { skillsEndpoint } : {}),
    ...(raw.skillsCredential !== undefined
      ? { skillsCredential: parseSecretInput(raw.skillsCredential) }
      : {}),
    redactionPolicyVersion,
    batchMaxEvents: readPositiveInt(
      raw.batchMaxEvents,
      DEFAULT_LINKSKILLS_CONFIG.batchMaxEvents,
      1,
    ),
    flushIntervalMs: readPositiveInt(
      raw.flushIntervalMs,
      DEFAULT_LINKSKILLS_CONFIG.flushIntervalMs,
      100,
    ),
    outboxMaxEntries: readPositiveInt(
      raw.outboxMaxEntries,
      DEFAULT_LINKSKILLS_CONFIG.outboxMaxEntries,
      1,
    ),
    outboxAgeAlarmMs: readPositiveInt(
      raw.outboxAgeAlarmMs,
      DEFAULT_LINKSKILLS_CONFIG.outboxAgeAlarmMs,
      1000,
    ),
    environment: parseEnvironment(raw.environment),
  };
}

export const linkskillsConfigSchema = {
  parse(value: unknown): LinkskillsConfig {
    return parseLinkskillsConfig(value);
  },
};
