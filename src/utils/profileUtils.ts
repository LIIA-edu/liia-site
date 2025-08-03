import { createContentLoader, BaseMetadata } from '@/lib/content-loader';

export interface ProfileMetadata extends BaseMetadata {
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

// Create profile loader
const profileLoader = createContentLoader<ProfileMetadata>(
  '/src/profiles/*.md', 
  '/src/profiles/'
);

export const getAllProfiles = (): Profile[] => {
  const profiles = profileLoader.getAllContent() as Profile[];
  
  // Sort by position hierarchy
  const positionOrder = ['Principal Investigator', 'Postdoctoral Research Fellow', 'PhD Student'];
  return profiles.sort((a, b) => {
    const aOrder = positionOrder.findIndex(pos => a.position.includes(pos));
    const bOrder = positionOrder.findIndex(pos => b.position.includes(pos));
    return aOrder - bOrder;
  });
};

export const getProfileById = (id: string): Profile | undefined => {
  return profileLoader.getContentByKey('id', id) as Profile | undefined;
};