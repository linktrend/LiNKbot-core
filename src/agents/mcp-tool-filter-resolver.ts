/**
 * Plugin-registered MCP tool-filter resolvers: lookup and compose with operator
 * `mcp.servers.<id>.toolFilter`. Process-local only — never writes config.
 */
import { normalizeOptionalString } from "@openclaw/normalization-core/string-coerce";
import { logWarn } from "../logger.js";
import {
  getMcpToolFilterRegistrationGeneration,
  resetMcpToolFilterRegistrationGeneration,
} from "../plugins/mcp-tool-filter-registration.js";
import { collectLivePluginRegistries, getActivePluginRegistry } from "../plugins/runtime.js";
import type {
  McpServerToolFilterResolved,
  OpenClawPluginMcpServerToolFilter,
} from "../plugins/types.js";
import { matchesMcpToolFilterPattern } from "./agent-bundle-mcp-filter.js";

export type McpToolSelection = {
  include?: string[];
  exclude?: string[];
};

/** Catalog / materialization projection of a composed tool filter. */
export type McpCatalogToolFilter = {
  denyAll?: boolean;
  include?: string[];
  exclude?: string[];
  operator?: McpToolSelection;
  plugin?: McpToolSelection;
};

type McpServerToolFilterEntry = OpenClawPluginMcpServerToolFilter & {
  pluginId: string;
};

const MCP_TOOL_FILTER_TEST_STATE_KEY = Symbol.for("openclaw.mcpServerToolFilterTestState");

type McpToolFilterTestState = {
  resolversByServerName?: Map<string, McpServerToolFilterEntry>;
  registrationGeneration?: number;
};

function getTestState(): McpToolFilterTestState {
  const globalStore = globalThis as Record<PropertyKey, unknown>;
  const existing = globalStore[MCP_TOOL_FILTER_TEST_STATE_KEY] as
    | McpToolFilterTestState
    | undefined;
  if (existing) {
    return existing;
  }
  const state: McpToolFilterTestState = {};
  globalStore[MCP_TOOL_FILTER_TEST_STATE_KEY] = state;
  return state;
}

export function observeMcpToolFilterRegistrationGeneration(): number {
  const testOverride = getTestState().registrationGeneration;
  if (typeof testOverride === "number" && Number.isFinite(testOverride)) {
    return Math.floor(testOverride);
  }
  return getMcpToolFilterRegistrationGeneration();
}

function normalizeStringList(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) {
    return undefined;
  }
  const entries = value
    .filter((entry): entry is string => typeof entry === "string")
    .map((entry) => entry.trim())
    .filter(Boolean);
  return entries.length > 0 ? entries : undefined;
}

function normalizeResolvedOverlay(
  value: McpServerToolFilterResolved | null | undefined,
): McpToolSelection | null {
  if (value == null) {
    return null;
  }
  if (typeof value !== "object" || Array.isArray(value)) {
    return null;
  }
  const hasIncludeKey = Array.isArray(value.include);
  const include = normalizeStringList(value.include);
  const exclude = normalizeStringList(value.exclude);
  // Explicit empty include is deny-all (same as null). Empty include must never
  // mean "unrestricted" — that is the no-include-key / omit-include semantics.
  if (hasIncludeKey && !include) {
    return null;
  }
  return {
    include,
    exclude,
  };
}

type LiveMcpToolFilterClaim = McpServerToolFilterEntry & {
  registry: NonNullable<ReturnType<typeof getActivePluginRegistry>>;
};

function listMcpServerToolFiltersByServerName(): Map<string, McpServerToolFilterEntry> {
  const testOverrides = getTestState().resolversByServerName;
  if (testOverrides) {
    return new Map([...testOverrides.entries()].toSorted(([a], [b]) => a.localeCompare(b)));
  }
  // Live surfaces may diverge after agent ensure/reload. Bind safely:
  // 1) active registry claim wins when present (fresh reload over stale pins)
  // 2) else exactly one unique pin claim fills the gap
  // 3) else distinct competing claims fail closed (omit), never silent first-wins
  const claimsByServer = new Map<string, LiveMcpToolFilterClaim[]>();
  for (const registry of collectLivePluginRegistries()) {
    for (const entry of registry.mcpServerToolFilters ?? []) {
      const serverName = normalizeOptionalString(entry.resolver.serverName);
      if (!serverName || typeof entry.resolver.resolve !== "function") {
        continue;
      }
      const claims = claimsByServer.get(serverName) ?? [];
      claims.push({
        pluginId: entry.pluginId,
        serverName,
        resolve: entry.resolver.resolve,
        registry,
      });
      claimsByServer.set(serverName, claims);
    }
  }

  const activeRegistry = getActivePluginRegistry();
  const byName = new Map<string, McpServerToolFilterEntry>();
  for (const [serverName, claims] of [...claimsByServer.entries()].toSorted(([a], [b]) =>
    a.localeCompare(b),
  )) {
    const activeClaims = activeRegistry
      ? claims.filter((claim) => claim.registry === activeRegistry)
      : [];
    if (activeClaims.length > 0) {
      const chosen = activeClaims[0]!;
      byName.set(serverName, {
        pluginId: chosen.pluginId,
        serverName,
        resolve: chosen.resolve,
      });
      continue;
    }

    const unique: LiveMcpToolFilterClaim[] = [];
    for (const claim of claims) {
      // Same pluginId + same resolve closure is one claim; identical pin mirrors
      // of one registry must not look like a conflict.
      if (
        unique.some(
          (existing) => existing.pluginId === claim.pluginId && existing.resolve === claim.resolve,
        )
      ) {
        continue;
      }
      unique.push(claim);
    }
    if (unique.length === 1) {
      const chosen = unique[0]!;
      byName.set(serverName, {
        pluginId: chosen.pluginId,
        serverName,
        resolve: chosen.resolve,
      });
      continue;
    }
    if (unique.length > 1) {
      const pluginIds = [...new Set(unique.map((claim) => claim.pluginId))].toSorted();
      logWarn(
        `mcp tool filter: ambiguous live claims for server "${serverName}" (plugins: ${pluginIds.join(", ")}); failing closed`,
      );
      byName.set(serverName, {
        pluginId: pluginIds.join(","),
        serverName,
        // Deny-all via omit — never fall through to operator-ceiling-only.
        resolve: () => null,
      });
    }
  }
  return byName;
}

export function shouldExposeMcpTool(selection: McpToolSelection, toolName: string): boolean {
  const include = selection.include ?? [];
  const exclude = selection.exclude ?? [];
  if (
    include.length > 0 &&
    !include.some((pattern) => matchesMcpToolFilterPattern(pattern, toolName))
  ) {
    return false;
  }
  return !exclude.some((pattern) => matchesMcpToolFilterPattern(pattern, toolName));
}

export type ResolvedMcpToolFilterComposition =
  | { kind: "config-only"; selection: McpToolSelection }
  | { kind: "omit" }
  | { kind: "intersect"; config: McpToolSelection; plugin: McpToolSelection };

/**
 * Resolve the owning plugin overlay and compose it with the operator ceiling.
 * `omit` means the plugin default-denies / rolled back this server for the run.
 */
export async function resolveMcpToolFilterComposition(params: {
  serverName: string;
  configSelection: McpToolSelection;
}): Promise<ResolvedMcpToolFilterComposition> {
  const resolver = listMcpServerToolFiltersByServerName().get(params.serverName);
  if (!resolver) {
    return { kind: "config-only", selection: params.configSelection };
  }
  let overlay: McpServerToolFilterResolved | null;
  try {
    overlay = await Promise.resolve(resolver.resolve());
  } catch (error) {
    logWarn(
      `mcp tool filter: resolve failed for server "${params.serverName}" (plugin "${resolver.pluginId}"): ${
        error instanceof Error ? error.message : "unknown"
      }`,
    );
    return { kind: "omit" };
  }
  const pluginSelection = normalizeResolvedOverlay(overlay);
  if (pluginSelection === null) {
    return { kind: "omit" };
  }
  return {
    kind: "intersect",
    config: params.configSelection,
    plugin: pluginSelection,
  };
}

/** Apply composed selection to one listed tool name. */
export function shouldExposeComposedMcpTool(
  composition: ResolvedMcpToolFilterComposition,
  toolName: string,
): boolean {
  switch (composition.kind) {
    case "omit":
      return false;
    case "config-only":
      return shouldExposeMcpTool(composition.selection, toolName);
    case "intersect":
      return (
        shouldExposeMcpTool(composition.config, toolName) &&
        shouldExposeMcpTool(composition.plugin, toolName)
      );
    default: {
      const _exhaustive: never = composition;
      return _exhaustive;
    }
  }
}

function cloneSelection(selection: McpToolSelection): McpToolSelection | undefined {
  if (!selection.include && !selection.exclude) {
    return undefined;
  }
  return {
    ...(selection.include ? { include: [...selection.include] } : {}),
    ...(selection.exclude ? { exclude: [...selection.exclude] } : {}),
  };
}

/**
 * Catalog metadata projection of the effective filter.
 * Deny-all uses `denyAll: true` — never `include: []` (unrestricted).
 * Intersect preserves both sides so utility tools apply operator ∩ plugin.
 */
export function describeComposedMcpToolFilter(
  composition: ResolvedMcpToolFilterComposition,
): McpCatalogToolFilter | undefined {
  switch (composition.kind) {
    case "omit":
      return { denyAll: true };
    case "config-only":
      return cloneSelection(composition.selection);
    case "intersect": {
      const operator = cloneSelection(composition.config);
      const plugin = cloneSelection(composition.plugin);
      if (!operator && !plugin) {
        return undefined;
      }
      return {
        ...(operator ? { operator } : {}),
        ...(plugin ? { plugin } : {}),
        // Convenience flatten for diagnostics: plugin include under operator ceiling
        // is not authoritative alone — materialize must use operator ∩ plugin.
        ...(plugin?.include
          ? { include: [...plugin.include] }
          : operator?.include
            ? { include: [...operator.include] }
            : {}),
        ...(() => {
          const exclude = [
            ...(composition.config.exclude ?? []),
            ...(composition.plugin.exclude ?? []),
          ];
          return exclude.length > 0 ? { exclude } : {};
        })(),
      };
    }
    default: {
      const _exhaustive: never = composition;
      return _exhaustive;
    }
  }
}

/** Whether a utility operation (resources or prompts) passes catalog toolFilter metadata. */
export function serverAllowsMcpUtilityTool(
  toolFilter: McpCatalogToolFilter | undefined,
  operation: string,
): boolean {
  if (!toolFilter) {
    return true;
  }
  if (toolFilter.denyAll) {
    return false;
  }
  if (toolFilter.operator || toolFilter.plugin) {
    return (
      shouldExposeMcpTool(toolFilter.operator ?? {}, operation) &&
      shouldExposeMcpTool(toolFilter.plugin ?? {}, operation)
    );
  }
  return shouldExposeMcpTool(toolFilter, operation);
}

export const testing = {
  setResolversByServerName(resolvers: Map<string, McpServerToolFilterEntry> | undefined) {
    const state = getTestState();
    if (!resolvers) {
      delete state.resolversByServerName;
      return;
    }
    state.resolversByServerName = resolvers;
  },
  setRegistrationGeneration(generation: number | undefined) {
    const state = getTestState();
    if (generation === undefined) {
      delete state.registrationGeneration;
      return;
    }
    state.registrationGeneration = generation;
  },
  getRegistrationGeneration() {
    const testOverride = getTestState().registrationGeneration;
    if (typeof testOverride === "number" && Number.isFinite(testOverride)) {
      return Math.floor(testOverride);
    }
    return getMcpToolFilterRegistrationGeneration();
  },
  reset() {
    const globalStore = globalThis as Record<PropertyKey, unknown>;
    delete globalStore[MCP_TOOL_FILTER_TEST_STATE_KEY];
    resetMcpToolFilterRegistrationGeneration();
  },
};
