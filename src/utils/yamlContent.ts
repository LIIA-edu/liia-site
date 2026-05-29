import yaml from "js-yaml";

/**
 * Parse a raw YAML string into a typed object.
 * Returns the provided fallback (or null) when parsing fails or produces no document.
 */
export function parseYaml<T>(raw: string, fallback: T | null = null): T | null {
  try {
    const parsed = yaml.load(raw);
    return (parsed ?? fallback) as T | null;
  } catch (err) {
    console.error("Failed to parse YAML content:", err);
    return fallback;
  }
}

/**
 * Parse a glob result of raw YAML files (e.g. `import.meta.glob('*.yml', { query: '?raw', import: 'default', eager: true })`)
 * into an array of typed objects, preserving the source file path on each entry.
 */
export function parseYamlModules<T>(
  modules: Record<string, unknown>
): Array<T & { path: string }> {
  return Object.entries(modules)
    .map(([path, raw]) => {
      const data = parseYaml<T>(String(raw));
      return data ? { ...(data as T), path } : null;
    })
    .filter((entry): entry is T & { path: string } => entry !== null);
}