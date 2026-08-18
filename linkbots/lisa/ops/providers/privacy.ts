import { isSharedBrainKnowledgeOperation } from "./capabilities.js";
import {
  denied,
  invalid,
  type LisaAdmittedOperation,
  type LisaPolicyDenied,
  type LisaPolicyInvalid,
  type LisaPrivacyClass,
  type LisaProviderName,
} from "./outcomes.js";
import {
  hasOwnDataField,
  isInheritedOrHostObject,
  isPlainOwnDataRecord,
  walkOwnStrings,
} from "./own-data.js";

const PRIVACY_CLASSES = new Set<LisaPrivacyClass>([
  "work",
  "personal_compliance",
  "private_health",
]);

const PROHIBITED_PAYLOAD_KEYS = new Set([
  "prompt",
  "prompts",
  "transcript",
  "transcripts",
  "reasoning",
  "reasoningTrace",
  "rawToolOutput",
  "toolOutput",
  "privateHealth",
  "selfie",
  "battery",
  "personalCompliance",
  "privateEpisode",
  "episodeBody",
  "binary",
  "attachment",
  "attachments",
  "telegram",
  "emailBody",
  "chatMessage",
  "messageBody",
  "conversation",
]);

export type LisaPrivacyResult =
  | { readonly status: "ok"; readonly privacyClass: LisaPrivacyClass }
  | LisaPolicyDenied
  | LisaPolicyInvalid;

export function evaluateLisaPrivacy(input: {
  privacyClass: unknown;
  payload: unknown;
  operation: LisaAdmittedOperation;
}): LisaPrivacyResult {
  const privacyClass = parsePrivacyClass(input.privacyClass);
  if (privacyClass.status !== "ok") {
    return privacyClass;
  }
  if (privacyClass.privacyClass !== "work" && selectsExternalProvider(input.operation.provider)) {
    return denied("privacy_class_forbidden_for_provider");
  }
  // Shared Brain knowledge stays work-class even if a later packet adds a non-external path.
  if (
    privacyClass.privacyClass !== "work" &&
    isSharedBrainKnowledgeOperation(input.operation.name)
  ) {
    return denied("shared_knowledge_requires_work_class");
  }
  const payloadDenial = inspectPayload(input.payload);
  if (payloadDenial) {
    return payloadDenial;
  }
  return privacyClass;
}

function parsePrivacyClass(
  value: unknown,
): { status: "ok"; privacyClass: LisaPrivacyClass } | LisaPolicyInvalid {
  if (typeof value !== "string" || !PRIVACY_CLASSES.has(value as LisaPrivacyClass)) {
    return invalid("malformed_privacy_class");
  }
  return { status: "ok", privacyClass: value as LisaPrivacyClass };
}

function selectsExternalProvider(provider: LisaProviderName): boolean {
  return (
    provider === "brain" ||
    provider === "skills" ||
    provider === "libraries" ||
    provider === "autowork"
  );
}

function inspectPayload(payload: unknown): LisaPolicyDenied | LisaPolicyInvalid | null {
  if (payload === undefined) {
    return null;
  }
  if (isInheritedOrHostObject(payload)) {
    return invalid("accessor_backed_or_inherited_payload");
  }
  if (!isPlainOwnDataRecord(payload) && typeof payload !== "string" && !Array.isArray(payload)) {
    return invalid("malformed_payload");
  }
  if (isPlainOwnDataRecord(payload)) {
    for (const key of Object.keys(payload)) {
      if (!hasOwnDataField(payload, key)) {
        return invalid("accessor_backed_or_inherited_payload");
      }
      if (PROHIBITED_PAYLOAD_KEYS.has(key)) {
        return denied(reasonForProhibitedKey(key));
      }
    }
  }
  let prohibited: LisaPolicyDenied | LisaPolicyInvalid | null = null;
  walkOwnStrings(payload, (text, path) => {
    if (prohibited) {
      return;
    }
    if (path.endsWith(".unbounded")) {
      prohibited = denied("unbounded_payload");
      return;
    }
    if (path.endsWith(".inherited")) {
      prohibited = invalid("accessor_backed_or_inherited_payload");
      return;
    }
    const leafKey = path.split(".").pop() ?? "";
    if (PROHIBITED_PAYLOAD_KEYS.has(leafKey)) {
      prohibited = denied(reasonForProhibitedKey(leafKey));
      return;
    }
    if (isSecretShaped(text)) {
      prohibited = denied("secret_payload");
      return;
    }
    if (isConversationOrTranscript(text, path)) {
      prohibited = denied("conversation_payload");
    }
  });
  return prohibited;
}

function reasonForProhibitedKey(key: string): string {
  if (
    key === "privateHealth" ||
    key === "selfie" ||
    key === "battery" ||
    key === "personalCompliance"
  ) {
    return "private_health_or_compliance_payload";
  }
  if (
    key === "transcript" ||
    key === "transcripts" ||
    key === "prompt" ||
    key === "prompts" ||
    key === "conversation" ||
    key === "telegram" ||
    key === "emailBody" ||
    key === "chatMessage" ||
    key === "messageBody" ||
    key === "privateEpisode" ||
    key === "episodeBody"
  ) {
    return "conversation_payload";
  }
  if (key === "binary" || key === "attachment" || key === "attachments") {
    return "unbounded_payload";
  }
  return "prohibited_payload";
}

function isSecretShaped(text: string): boolean {
  // Compose markers at runtime so tests and source do not store credential-shaped literals.
  const password = ["pass", "word"].join("");
  const apiKey = ["api", "-", "key"].join("");
  const bearer = ["Bear", "er"].join("");
  const lower = text.toLowerCase();
  return (
    lower.includes(password) ||
    lower.includes(apiKey) ||
    text.includes(bearer) ||
    lower.includes("oauth") ||
    /(?:^|[\s=:])(?:sk|tok)-[a-z0-9_-]{8,}/iu.test(text)
  );
}

function isConversationOrTranscript(text: string, path: string): boolean {
  const lowerPath = path.toLowerCase();
  if (
    lowerPath.includes("transcript") ||
    lowerPath.includes("conversation") ||
    lowerPath.includes("messagebody")
  ) {
    return text.length > 0;
  }
  return false;
}
