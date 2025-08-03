import { createContentLoader, BaseMetadata } from '@/lib/content-loader';

export interface ProjectMetadata extends BaseMetadata {
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

// Create project loader
const projectLoader = createContentLoader<ProjectMetadata>(
  '/src/projects/*.md', 
  '/src/projects/'
);

export const getAllProjects = (): Project[] => {
  const projects = projectLoader.getAllContent() as Project[];
  return projects.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
};

export const getProjectById = (id: string): Project | undefined => {
  return projectLoader.getContentByKey('id', id) as Project | undefined;
};

export const getFeaturedProjects = (): Project[] => {
  const projects = getAllProjects();
  return projects.filter(project => project.featured);
};

export const getProjectsByStatus = (status: string): Project[] => {
  const projects = getAllProjects();
  return projects.filter(project => project.status === status);
};