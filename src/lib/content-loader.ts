import matter from 'gray-matter';
import '../lib/buffer-polyfill';

export interface BaseMetadata {
  [key: string]: any;
}

export interface BaseContent<T extends BaseMetadata = BaseMetadata> {
  content: string;
}

export interface ContentModules {
  [path: string]: string;
}

/**
 * Generic content loader for markdown files
 * @param globPattern - Glob pattern for importing files
 * @param pathPrefix - Prefix to remove from file paths
 */
export function createContentLoader<T extends BaseMetadata>(
  globPattern: string,
  pathPrefix: string = ''
) {
  const modules = import.meta.glob(globPattern, { as: 'raw', eager: true }) as ContentModules;

  const getAllContent = (): (T & BaseContent<T>)[] => {
    const items: (T & BaseContent<T>)[] = [];
    
    Object.entries(modules).forEach(([path, rawContent]) => {
      try {
        const { data, content } = matter(rawContent);
        items.push({
          ...(data as T),
          content,
        });
      } catch (error) {
        console.error(`Error parsing content from ${path}:`, error);
      }
    });
    
    return items;
  };

  const getContentByKey = (key: string, value: any): (T & BaseContent<T>) | undefined => {
    const items = getAllContent();
    return items.find(item => item[key] === value);
  };

  const getContentByFilename = (filename: string): (T & BaseContent<T>) | undefined => {
    const path = `${pathPrefix}${filename}.md`;
    const rawContent = modules[path];
    
    if (!rawContent) {
      return undefined;
    }
    
    try {
      const { data, content } = matter(rawContent);
      return {
        ...(data as T),
        content,
      };
    } catch (error) {
      console.error(`Error parsing content from ${path}:`, error);
      return undefined;
    }
  };

  return {
    getAllContent,
    getContentByKey,
    getContentByFilename,
    modules
  };
}