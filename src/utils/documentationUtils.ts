import { parseYamlModules } from "./yamlContent";

export type DocumentationType =
  | "tutorial"
  | "best-practices"
  | "protocol"
  | "workflow";

export interface DocumentationItem {
  name: string;
  description: string;
  type?: DocumentationType;
  chapters?: number;
  readTime?: string;
  downloads?: string;
  url?: string;
  lastUpdated?: string;
  order?: number;
}

const modules = import.meta.glob("/src/documentation/*.yml", {
  query: "?raw",
  import: "default",
  eager: true,
});

const documentation: DocumentationItem[] = parseYamlModules<DocumentationItem>(modules)
  .map(({ path: _path, ...d }) => d)
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

export const getAllDocumentation = (): DocumentationItem[] => documentation;