import { Type } from "typebox";
import type { OpenClawPluginApi } from "../runtime-api.js";
import { parseLinkbrainConfig } from "./config.js";
import { callLinkbrainMcpTool } from "./transport.js";

const brainReadSchema = Type.Object(
  {
    operation: Type.Union([
      Type.Literal("brain_browse"),
      Type.Literal("brain_search"),
      Type.Literal("brain_load"),
    ]),
    arguments: Type.Record(Type.String(), Type.Unknown()),
  },
  { additionalProperties: false },
);

const prohibitedActorFields = new Set(["actor_id", "actorId", "platformActorId", "actorBindingId"]);

function hasActorOverride(value: Record<string, unknown>): boolean {
  return Object.keys(value).some((key) => prohibitedActorFields.has(key));
}

function boundedJson(value: unknown): string {
  const text = JSON.stringify(value ?? {});
  return text.length <= 24_000 ? text : `${text.slice(0, 24_000)}…[truncated]`;
}

/**
 * A local, read-only Brain bridge for models whose external runtime cannot
 * safely receive managed MCP machine credentials.
 */
export function createLinkbrainReadTool(api: OpenClawPluginApi) {
  return {
    name: "linkbrain_read",
    label: "LiNKbrain Read",
    description: "Browse, search, or load authorised LiNKbrain knowledge.",
    parameters: brainReadSchema,
    async execute(_toolCallId: string, params: Record<string, unknown>) {
      const config = parseLinkbrainConfig(api.pluginConfig);
      if (!config.mcpRead) {
        return {
          content: [{ type: "text" as const, text: "LiNKbrain reading is disabled." }],
          details: { ok: false, reason: "disabled" },
        };
      }
      const operation = params.operation;
      const argumentsValue = params.arguments;
      if (
        (operation !== "brain_browse" &&
          operation !== "brain_search" &&
          operation !== "brain_load") ||
        typeof argumentsValue !== "object" ||
        argumentsValue === null ||
        Array.isArray(argumentsValue)
      ) {
        return {
          content: [{ type: "text" as const, text: "Invalid LiNKbrain read request." }],
          details: { ok: false, reason: "invalid_request" },
        };
      }
      if (hasActorOverride(argumentsValue as Record<string, unknown>)) {
        return {
          content: [{ type: "text" as const, text: "Actor identity is assigned by LiNKbrain." }],
          details: { ok: false, reason: "actor_override_rejected" },
        };
      }
      const result = await callLinkbrainMcpTool({
        api,
        config,
        toolName: operation,
        arguments: argumentsValue as Record<string, unknown>,
      });
      return {
        content: [
          {
            type: "text" as const,
            text: result.ok
              ? boundedJson(result.result)
              : `LiNKbrain request failed: ${result.safeMessage}`,
          },
        ],
        details: result.ok
          ? { ok: true, result: result.result ?? {} }
          : { ok: false, reason: result.safeMessage },
      };
    },
  };
}
