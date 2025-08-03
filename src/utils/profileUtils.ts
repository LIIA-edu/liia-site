import matter from 'gray-matter';
import '../lib/buffer-polyfill';

export interface ProfileMetadata {
  id: string;
  name: string;
  position: string;
  image: string;
  email: string;
  bio: string;
  researchInterests: string[];
  education: string[];
  awards: string[];
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    google_scholar?: string;
    orcid?: string;
  };
}

export interface Profile extends ProfileMetadata {
  content: string;
}

const profileModules = import.meta.glob('/src/profiles/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true 
});

export const getAllProfiles = (): Profile[] => {
  const profiles: Profile[] = [];
  
  Object.entries(profileModules).forEach(([path, content]) => {
    const { data, content: markdownContent } = matter(content as string);
    profiles.push({
      ...(data as ProfileMetadata),
      content: markdownContent,
    });
  });
  
  const positionOrder = ['Principal Investigator', 'Postdoctoral Research Fellow', 'PhD Student'];
  return profiles.sort((a, b) => {
    const aOrder = positionOrder.findIndex(pos => a.position.includes(pos));
    const bOrder = positionOrder.findIndex(pos => b.position.includes(pos));
    return aOrder - bOrder;
  });
};

export const getProfileById = (id: string): Profile | undefined => {
  const profiles = getAllProfiles();
  return profiles.find(profile => profile.id === id);
};