import { parseYamlModules } from "./yamlContent";

export type CollaborationStatus = "active" | "past";

export interface Collaboration {
  name: string;
  location: string;
  type: string;
  focus: string;
  duration: string;
  status: CollaborationStatus;
  order?: number;
  principalInvestigator?: string;
  website?: string;
  description: string;
  keyProjects?: string[];
}

const modules = import.meta.glob("/src/collaborations/*.yml", {
  query: "?raw",
  import: "default",
  eager: true,
});

const collaborations: Collaboration[] = parseYamlModules<Collaboration>(modules)
  .map(({ path: _path, ...c }) => c)
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

export const getAllCollaborations = (): Collaboration[] => collaborations;

export const getActiveCollaborations = (): Collaboration[] =>
  collaborations.filter((c) => c.status === "active");

export const getPastCollaborations = (): Collaboration[] =>
  collaborations.filter((c) => c.status === "past");