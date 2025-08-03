import { createContentLoader, BaseMetadata } from '@/lib/content-loader';

// Content-specific interfaces
export interface ContentMetadata extends BaseMetadata {
  title: string;
}

export interface Content extends ContentMetadata {
  content: string;
}

// Create content loader for static content
const contentLoader = createContentLoader<ContentMetadata>(
  '/src/content/*.md', 
  '/src/content/'
);

export const getContent = (filename: string): Content | undefined => {
  return contentLoader.getContentByFilename(filename) as Content | undefined;
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