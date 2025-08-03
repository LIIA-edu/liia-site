import matter from 'gray-matter';
import '../lib/buffer-polyfill';

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
  eager: true 
});

export const getAllPosts = (): Post[] => {
  const posts: Post[] = [];
  
  Object.entries(postModules).forEach(([path, content]) => {
    const { data, content: markdownContent } = matter(content as string);
    posts.push({
      ...(data as PostMetadata),
      content: markdownContent,
    });
  });
  
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = (slug: string): Post | undefined => {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug);
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