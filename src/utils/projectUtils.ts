import { parseMarkdownModules } from './markdownUtils';

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
  eager: true,
});

const projects: Project[] = parseMarkdownModules<ProjectMetadata>(projectModules)
  .map(({ path, ...project }) => project)
  .sort(
    (a, b) =>
      new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

export const getAllProjects = (): Project[] => projects;

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByStatus = (status: string): Project[] => {
  return projects.filter((project) => project.status === status);
};
