import matter from 'gray-matter';
import '../lib/buffer-polyfill';

export interface MarkdownFile<T> extends T {
  content: string;
  path: string;
}

/**
 * Convert a Vite import.meta.glob result into typed markdown objects.
 * @param modules Result of import.meta.glob with `eager: true` and `?raw` query.
 */
export function parseMarkdownModules<T>(modules: Record<string, unknown>): MarkdownFile<T>[] {
  return Object.entries(modules).map(([path, raw]) => {
    const { data, content } = matter(raw as string);
    return { ...(data as T), content, path };
  });
}
