import { parseYamlModules } from "./yamlContent";

export type DatasetAccess = "open" | "controlled";

export interface Dataset {
  name: string;
  description: string;
  size?: string;
  samples?: string;
  access?: DatasetAccess;
  downloads?: string;
  citations?: string;
  doi?: string;
  url?: string;
  order?: number;
}

const modules = import.meta.glob("/src/datasets/*.yml", {
  query: "?raw",
  import: "default",
  eager: true,
});

const datasets: Dataset[] = parseYamlModules<Dataset>(modules)
  .map(({ path: _path, ...d }) => d)
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

export const getAllDatasets = (): Dataset[] => datasets;