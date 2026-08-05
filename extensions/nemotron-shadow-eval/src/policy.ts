import { createHash } from "node:crypto";

export type ShadowConfig = {
  agentId: string;
  sessionKeys: string[];
  sampleEvery: number;
  model: string;
  maxPromptChars: number;
  maxOutputChars: number;
  maxTokens: number;
  maxDailySamples: number;
  maxDailyCostUsd: number;
};

export const DEFAULT_SHADOW_CONFIG: ShadowConfig = {
  agentId: "main",
  sessionKeys: ["agent:main:main"],
  sampleEvery: 10,
  model: "openrouter/nvidia/nemotron-3-super-120b-a12b",
  maxPromptChars: 4000,
  maxOutputChars: 1000,
  maxTokens: 800,
  maxDailySamples: 10,
  maxDailyCostUsd: 1,
};

const EXCLUDED = [
  /\b(code|coding|repository|repo|git|commit|push|pull request|deploy|production|migration)\b/i,
  /\b(secret|password|credential|token|oauth|cookie|api[- ]?key|private key)\b/i,
  /\b(send|post|publish|create|update|delete|remove|book|buy|purchase|pay|refund)\b/i,
  /\b(email|message|transcript|medical|legal|financial|human resources|hr record)\b/i,
  /\b(search the web|browse|latest|current price|current news)\b/i,
  /ignore (all|any|the) previous instructions|reveal (the )?(system|developer) prompt/i,
  /-----BEGIN [A-Z ]+PRIVATE KEY-----/,
  /\b(sk-|ghp_|github_pat_|AIza)[A-Za-z0-9_-]{8,}/,
];

const REDACTIONS: Array<[RegExp, string]> = [
  [
    /-----BEGIN [A-Z ]+PRIVATE KEY-----[\s\S]*?-----END [A-Z ]+PRIVATE KEY-----/g,
    "[REDACTED_PRIVATE_KEY]",
  ],
  [/\b(sk-|ghp_|github_pat_|AIza)[A-Za-z0-9_-]{8,}/g, "[REDACTED_TOKEN]"],
  [/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, "[REDACTED_EMAIL]"],
  [/(?:\/Users\/|\/home\/)[^\s]+/g, "[REDACTED_PATH]"],
];

export function parseShadowConfig(value: unknown): ShadowConfig {
  const raw = value && typeof value === "object" ? (value as Record<string, unknown>) : {};
  const integer = (key: keyof ShadowConfig, min: number, max: number) => {
    const candidate = raw[key];
    return typeof candidate === "number" &&
      Number.isInteger(candidate) &&
      candidate >= min &&
      candidate <= max
      ? candidate
      : (DEFAULT_SHADOW_CONFIG[key] as number);
  };
  const number = (key: keyof ShadowConfig, min: number, max: number) => {
    const candidate = raw[key];
    return typeof candidate === "number" &&
      Number.isFinite(candidate) &&
      candidate >= min &&
      candidate <= max
      ? candidate
      : (DEFAULT_SHADOW_CONFIG[key] as number);
  };
  return {
    agentId:
      typeof raw.agentId === "string" && raw.agentId ? raw.agentId : DEFAULT_SHADOW_CONFIG.agentId,
    sessionKeys:
      Array.isArray(raw.sessionKeys) &&
      raw.sessionKeys.every((entry) => typeof entry === "string") &&
      raw.sessionKeys.length > 0
        ? (raw.sessionKeys as string[])
        : [...DEFAULT_SHADOW_CONFIG.sessionKeys],
    sampleEvery: integer("sampleEvery", 2, 100),
    model: typeof raw.model === "string" && raw.model ? raw.model : DEFAULT_SHADOW_CONFIG.model,
    maxPromptChars: integer("maxPromptChars", 1, 12000),
    maxOutputChars: integer("maxOutputChars", 1, 4000),
    maxTokens: integer("maxTokens", 1, 2048),
    maxDailySamples: integer("maxDailySamples", 1, 100),
    maxDailyCostUsd: number("maxDailyCostUsd", 0, 25),
  };
}

export function eligiblePrompt(prompt: string, config: ShadowConfig): boolean {
  const trimmed = prompt.trim();
  return (
    trimmed.length > 0 &&
    trimmed.length <= config.maxPromptChars &&
    !EXCLUDED.some((pattern) => pattern.test(trimmed))
  );
}

export function sanitize(value: string, maxChars: number): string {
  let output = value;
  for (const [pattern, replacement] of REDACTIONS) {
    output = output.replace(pattern, replacement);
  }
  return output.slice(0, maxChars);
}

export function sha256(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

export function lexicalOverlap(left: string, right: string): number {
  const words = (text: string) => new Set(text.toLowerCase().match(/[a-z0-9]{3,}/g) ?? []);
  const a = words(left);
  const b = words(right);
  if (a.size === 0 && b.size === 0) {
    return 1;
  }
  const intersection = [...a].filter((word) => b.has(word)).length;
  return intersection / Math.max(1, new Set([...a, ...b]).size);
}

export function utcDay(now = new Date()): string {
  return now.toISOString().slice(0, 10);
}
