import { parseYamlModules } from "./yamlContent";

export interface Software {
  name: string;
  description: string;
  category?: string;
  language?: string;
  license?: string;
  github?: string;
  documentation?: string;
  downloads?: string;
  githubStars?: string;
  citations?: string;
  lastUpdated?: string;
  featured?: boolean;
  order?: number;
}

const modules = import.meta.glob("/src/software/*.yml", {
  query: "?raw",
  import: "default",
  eager: true,
});

const software: Software[] = parseYamlModules<Software>(modules)
  .map(({ path: _path, ...s }) => s)
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

export const getAllSoftware = (): Software[] => software;

export const getFeaturedSoftware = (limit = 3): Software[] => {
  const featured = software.filter((s) => s.featured);
  return (featured.length > 0 ? featured : software).slice(0, limit);
};