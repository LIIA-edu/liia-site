import matter from 'gray-matter';
import { Buffer } from 'buffer';

// Polyfill Buffer for browser environment
if (typeof window !== 'undefined') {
  window.Buffer = Buffer;
}

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

// Import all profile files
const profileModules = import.meta.glob('/src/profiles/*.md', { 
  as: 'raw',
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
  
  // Sort by position hierarchy
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