import { parseYamlModules } from "./yamlContent";

export type PublicationType =
  | "journal-article"
  | "conference"
  | "book-chapter"
  | "review"
  | "preprint";

export type PreprintServer = "bioRxiv" | "arXiv" | "medRxiv";

export interface Publication {
  title: string;
  authors: string;
  year: number;
  type: PublicationType;
  venue?: string;
  doi?: string;
  url?: string;
  preprintServer?: PreprintServer;
  order?: number;
  featured?: boolean;
}

const modules = import.meta.glob("/src/publications/*.yml", {
  query: "?raw",
  import: "default",
  eager: true,
});

const publications: Publication[] = parseYamlModules<Publication>(modules)
  .map(({ path: _path, ...p }) => p)
  .sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return (a.order ?? 999) - (b.order ?? 999);
  });

export const getAllPublications = (): Publication[] => publications;

export const getPublicationsByType = (type: PublicationType): Publication[] =>
  publications.filter((p) => p.type === type);

export const getPreprints = (): Publication[] => getPublicationsByType("preprint");

export const getPeerReviewedPublications = (): Publication[] =>
  publications.filter((p) => p.type !== "preprint");

export const getFeaturedPublications = (limit?: number): Publication[] => {
  const featured = publications.filter((p) => p.featured);
  const list = featured.length > 0 ? featured : publications;
  return typeof limit === "number" ? list.slice(0, limit) : list;
};