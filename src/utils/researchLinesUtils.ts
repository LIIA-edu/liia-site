import { parseYamlModules } from "./yamlContent";

export interface ResearchLine {
  title: string;
  description: string;
  technologies: string[];
  order?: number;
}

const modules = import.meta.glob("/src/research-lines/*.yml", {
  query: "?raw",
  import: "default",
  eager: true,
});

const researchLines: ResearchLine[] = parseYamlModules<ResearchLine>(modules)
  .map(({ path: _path, ...line }) => line)
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

export const getResearchLines = (): ResearchLine[] => researchLines;