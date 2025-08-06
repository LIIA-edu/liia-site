import { parseMarkdownModules } from './markdownUtils';

export interface ContentMetadata {
  title: string;
  [key: string]: unknown;
}

export interface Content extends ContentMetadata {
  content: string;
}

const contentModules = import.meta.glob('/src/content/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const contents = parseMarkdownModules<ContentMetadata>(contentModules);

export const getContent = (filename: string): Content | undefined => {
  const path = `/src/content/${filename}.md`;
  const match = contents.find((c) => c.path === path);
  if (!match) {
    return undefined;
  }
  const { path: _path, ...content } = match;
  return content;
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
