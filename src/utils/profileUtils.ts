import { parseMarkdownModules } from './markdownUtils';

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
  eager: true,
});

const positionOrder = [
  'Principal Investigator',
  'Postdoctoral Research Fellow',
  'PhD Student',
];

const profiles: Profile[] = parseMarkdownModules<ProfileMetadata>(profileModules)
  .map(({ path, ...profile }) => profile)
  .sort((a, b) => {
    const aOrder = positionOrder.findIndex((pos) => a.position.includes(pos));
    const bOrder = positionOrder.findIndex((pos) => b.position.includes(pos));
    return aOrder - bOrder;
  });

export const getAllProfiles = (): Profile[] => profiles;

export const getProfileById = (id: string): Profile | undefined => {
  return profiles.find((profile) => profile.id === id);
};
