import { createContentLoader, BaseMetadata } from '@/lib/content-loader';

export interface PostMetadata extends BaseMetadata {
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

// Create post loader
const postLoader = createContentLoader<PostMetadata>(
  '/src/posts/*.md', 
  '/src/posts/'
);

export const getAllPosts = (): Post[] => {
  const posts = postLoader.getAllContent() as Post[];
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return postLoader.getContentByKey('slug', slug) as Post | undefined;
};

export const getFeaturedPosts = (): Post[] => {
  const posts = getAllPosts();
  return posts.filter(post => post.featured);
};

export const getPostsByTag = (tag: string): Post[] => {
  const posts = getAllPosts();
  return posts.filter(post => post.tags.includes(tag));
};

export const getAllTags = (): string[] => {
  const posts = getAllPosts();
  const tags = new Set<string>();
  
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  
  return Array.from(tags).sort();
};