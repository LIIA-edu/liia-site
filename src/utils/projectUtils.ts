import matter from 'gray-matter';
import '../lib/buffer-polyfill';

export interface ProjectMetadata {
  id: string;
  title: string;
  description: string;
  status: 'ongoing' | 'completed' | 'planned';
  startDate: string;
  endDate?: string;
  funding: string;
  collaborators: string[];
  technologies: string[];
  image: string;
  team: string[];
  featured?: boolean;
}

export interface Project extends ProjectMetadata {
  content: string;
}

const projectModules = import.meta.glob('/src/projects/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true 
});

export const getAllProjects = (): Project[] => {
  const projects: Project[] = [];
  
  Object.entries(projectModules).forEach(([path, content]) => {
    const { data, content: markdownContent } = matter(content as string);
    projects.push({
      ...(data as ProjectMetadata),
      content: markdownContent,
    });
  });
  
  return projects.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
};

export const getProjectById = (id: string): Project | undefined => {
  const projects = getAllProjects();
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  const projects = getAllProjects();
  return projects.filter(project => project.featured);
};

export const getProjectsByStatus = (status: string): Project[] => {
  const projects = getAllProjects();
  return projects.filter(project => project.status === status);
};