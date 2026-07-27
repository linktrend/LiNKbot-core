// Public linkskills surfaces for tests and future callers.
export { definePluginEntry } from "./runtime-api.js";
export type { OpenClawPluginApi, OpenClawPluginService } from "./runtime-api.js";
export {
  LINKSKILLS_CONVERSATION_HOOK_POLICY,
  LINKSKILLS_NAMESPACES,
  LINKSKILLS_PLUGIN_ID,
  type LinkskillsNamespace,
} from "./src/namespaces.js";
export {
  DEFAULT_LINKSKILLS_CONFIG,
  parseLinkskillsConfig,
  type LinkskillsConfig,
  type LinkskillsSecretInput,
} from "./src/config.js";
export {
  LINKSKILLS_REDACTION_POLICY_VERSION,
  buildSkillsTelemetryEnvelope,
  findProhibitedSkillsField,
  type SkillsInternalEnvelope,
  type SkillsTelemetryBody,
} from "./src/envelopes.js";
export {
  createLinkskillsRuntime,
  createSkillsFakeTransport,
  type LinkskillsDiagnostics,
  type LinkskillsRuntime,
  type LinkskillsTransport,
} from "./src/runtime.js";
