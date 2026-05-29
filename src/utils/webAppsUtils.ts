import { parseYamlModules } from "./yamlContent";

export interface WebApp {
  name: string;
  description: string;
  type?: string;
  url: string;
  metric?: string;
  order?: number;
}

const modules = import.meta.glob("/src/web-apps/*.yml", {
  query: "?raw",
  import: "default",
  eager: true,
});

const webApps: WebApp[] = parseYamlModules<WebApp>(modules)
  .map(({ path: _path, ...w }) => w)
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

export const getAllWebApps = (): WebApp[] => webApps;