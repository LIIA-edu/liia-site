import matter from 'gray-matter';
import { Buffer } from 'buffer';

// Polyfill Buffer for browser environment
if (typeof window !== 'undefined') {
  window.Buffer = Buffer;
}

// Generic content interface
export interface ContentMetadata {
  title: string;
  [key: string]: any;
}

export interface Content extends ContentMetadata {
  content: string;
}

// Import all content files
const contentModules = import.meta.glob('/src/content/*.md', { 
  as: 'raw',
  eager: true 
});

export const getContent = (filename: string): Content | undefined => {
  const path = `/src/content/${filename}.md`;
  const rawContent = contentModules[path];
  
  if (!rawContent) {
    return undefined;
  }
  
  const { data, content } = matter(rawContent as string);
  
  return {
    ...(data as ContentMetadata),
    content,
  };
};

export const getAboutContent = (): Content | undefined => {
  return getContent('about');
};

export const getPublicationsContent = (): Content | undefined => {
  return getContent('publications');
};

export const getResearchGroupContent = (): Content | undefined => {
  return getContent('research-group');
};