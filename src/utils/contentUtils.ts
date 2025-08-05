import matter from 'gray-matter';
import '../lib/buffer-polyfill';

export interface ContentMetadata {
  title: string;
  [key: string]: unknown;
}

export interface Content extends ContentMetadata {
  content: string;
}

// Import all content files
const contentModules = import.meta.glob('/src/content/*.md', { 
  query: '?raw',
  import: 'default',
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

export const getLaboratoryVisionContent = (): Content | undefined => {
  return getContent('laboratory-vision');
};

export const getCollaborationsContent = (): Content | undefined => {
  return getContent('collaborations');
};

export const getResourcesContent = (): Content | undefined => {
  return getContent('resources');
};