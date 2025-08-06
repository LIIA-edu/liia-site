import { parseMarkdownModules } from './markdownUtils';

export interface PostMetadata {
  title: string;
  date: string;
  tags: string[];
  description: string;
  readTime: string;
  featured?: boolean;
  slug: string;
}

export interface Post extends PostMetadata {
  content: string;
}

// Import all post files
const postModules = import.meta.glob('/src/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const posts: Post[] = parseMarkdownModules<PostMetadata>(postModules)
  .map(({ path, ...post }) => post)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getAllPosts = (): Post[] => posts;

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find((post) => post.slug === slug);
};

export const getFeaturedPosts = (): Post[] => {
  return posts.filter((post) => post.featured);
};

export const getPostsByTag = (tag: string): Post[] => {
  return posts.filter((post) => post.tags.includes(tag));
};

export const getAllTags = (): string[] => {
  const tags = new Set<string>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
};
