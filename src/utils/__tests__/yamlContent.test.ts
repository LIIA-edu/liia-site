import { describe, it, expect, vi, beforeEach } from "vitest";
import { parseYaml, parseYamlModules } from "../yamlContent";

describe("parseYaml", () => {
  beforeEach(() => {
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  it("parses a valid YAML document", () => {
    const out = parseYaml<{ name: string; order: number }>("name: foo\norder: 2");
    expect(out).toEqual({ name: "foo", order: 2 });
  });

  it("returns fallback for malformed YAML", () => {
    const fallback = { name: "fallback" };
    expect(parseYaml("foo: : bad", fallback)).toEqual(fallback);
  });

  it("returns fallback for empty input", () => {
    expect(parseYaml("", { x: 1 })).toEqual({ x: 1 });
    expect(parseYaml("")).toBeNull();
  });

  it("converts top-level Date to YYYY-MM-DD string", () => {
    const out = parseYaml<{ lastUpdated: string }>("lastUpdated: 2024-12-15");
    expect(out?.lastUpdated).toBe("2024-12-15");
    expect(typeof out?.lastUpdated).toBe("string");
  });

  it("converts nested Dates inside objects and arrays", () => {
    const yml = `
nested:
  date: 2023-01-02
list:
  - when: 2022-06-30
  - when: 2024-09-09
`;
    const out = parseYaml<{
      nested: { date: string };
      list: { when: string }[];
    }>(yml);
    expect(out?.nested.date).toBe("2023-01-02");
    expect(out?.list[0].when).toBe("2022-06-30");
    expect(out?.list[1].when).toBe("2024-09-09");
  });
});

describe("parseYamlModules", () => {
  beforeEach(() => {
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  it("parses multiple modules and attaches path", () => {
    const modules = {
      "/a.yml": "name: A\norder: 1",
      "/b.yml": "name: B\norder: 2",
    };
    const out = parseYamlModules<{ name: string; order: number }>(modules);
    expect(out).toHaveLength(2);
    expect(out[0]).toMatchObject({ name: "A", order: 1, path: "/a.yml" });
    expect(out[1]).toMatchObject({ name: "B", order: 2, path: "/b.yml" });
  });

  it("skips modules whose YAML is invalid", () => {
    const modules = {
      "/good.yml": "name: ok",
      "/bad.yml": "foo: : bad",
    };
    const out = parseYamlModules<{ name: string }>(modules);
    expect(out).toHaveLength(1);
    expect(out[0].name).toBe("ok");
  });
});