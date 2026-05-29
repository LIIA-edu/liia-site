import matter from 'gray-matter';
import '../lib/buffer-polyfill';

function stringifyDates<T>(value: T): T {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10) as unknown as T;
  }
  if (Array.isArray(value)) {
    return value.map(stringifyDates) as unknown as T;
  }
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = stringifyDates(v);
    }
    return out as T;
  }
  return value;
}

export type MarkdownFile<T> = T & {
  content: string;
  path: string;
};

/**
 * Convert a Vite import.meta.glob result into typed markdown objects.
 * @param modules Result of import.meta.glob with `eager: true` and `?raw` query.
 */
export function parseMarkdownModules<T>(modules: Record<string, unknown>): MarkdownFile<T>[] {
  return Object.entries(modules)
    .map(([path, raw]) => {
      try {
        const { data, content } = matter(raw as string);
        return { ...(stringifyDates(data) as T), content, path };
      } catch (err) {
        console.warn(`[markdown] Skipping ${path}: failed to parse frontmatter`, err);
        return null;
      }
    })
    .filter((entry): entry is MarkdownFile<T> => entry !== null);
}
