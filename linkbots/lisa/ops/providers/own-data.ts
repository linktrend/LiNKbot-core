/**
 * Own-data readers. Inherited and accessor-backed fields are not Lisa facts.
 * Removing this would let prototype getters smuggle actor or capability values.
 */

const SAFE_ID_RE = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/u;
const SECRET_SHAPE_RE = /(token|secret|password|bearer|oauth)/iu;

export function isPlainOwnDataRecord(value: unknown): value is Record<string, unknown> {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

export function isInheritedOrHostObject(value: unknown): boolean {
  return (
    value !== null &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    !isPlainOwnDataRecord(value)
  );
}

function ownDataDescriptor(value: object, key: string): PropertyDescriptor | undefined {
  return Object.getOwnPropertyDescriptor(value, key);
}

export function hasOwnDataField(value: object, key: string): boolean {
  const descriptor = ownDataDescriptor(value, key);
  return Boolean(
    descriptor &&
    descriptor.enumerable === true &&
    !("get" in descriptor && descriptor.get) &&
    !("set" in descriptor && descriptor.set) &&
    Object.prototype.hasOwnProperty.call(descriptor, "value"),
  );
}

export function readOwnDataValue(value: object, key: string): unknown {
  if (!hasOwnDataField(value, key)) {
    return undefined;
  }
  const descriptor = ownDataDescriptor(value, key);
  return descriptor?.value;
}

export function readOwnString(value: object, key: string): string | undefined {
  const raw = readOwnDataValue(value, key);
  return typeof raw === "string" ? raw : undefined;
}

export function readOwnFiniteInteger(value: object, key: string): number | undefined {
  const raw = readOwnDataValue(value, key);
  if (typeof raw !== "number" || !Number.isSafeInteger(raw)) {
    return undefined;
  }
  return raw;
}

export function readOwnStringArray(value: object, key: string): readonly string[] | undefined {
  const raw = readOwnDataValue(value, key);
  if (!Array.isArray(raw) || raw.some((entry) => typeof entry !== "string")) {
    return undefined;
  }
  return Object.freeze([...raw]);
}

export function isSafeOpaqueRef(value: string): boolean {
  return SAFE_ID_RE.test(value) && !SECRET_SHAPE_RE.test(value);
}

export function walkOwnStrings(
  value: unknown,
  visit: (text: string, path: string) => void,
  path = "payload",
  depth = 0,
): void {
  if (depth > 8) {
    visit("", `${path}.unbounded`);
    return;
  }
  if (typeof value === "string") {
    visit(value, path);
    return;
  }
  if (typeof value === "number" || typeof value === "boolean" || value === null) {
    return;
  }
  if (value === undefined) {
    return;
  }
  if (Array.isArray(value)) {
    if (value.length > 32) {
      visit("", `${path}.unbounded`);
      return;
    }
    value.forEach((entry, index) => {
      walkOwnStrings(entry, visit, `${path}[${index}]`, depth + 1);
    });
    return;
  }
  if (!isPlainOwnDataRecord(value)) {
    visit("", `${path}.inherited`);
    return;
  }
  const keys = Object.keys(value);
  if (keys.length > 32) {
    visit("", `${path}.unbounded`);
    return;
  }
  for (const key of keys) {
    if (!hasOwnDataField(value, key)) {
      visit("", `${path}.inherited`);
      return;
    }
    walkOwnStrings(readOwnDataValue(value, key), visit, `${path}.${key}`, depth + 1);
  }
}
