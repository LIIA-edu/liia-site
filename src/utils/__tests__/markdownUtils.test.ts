import { describe, it, expect, vi, beforeEach } from "vitest";
import { parseMarkdownModules } from "../markdownUtils";

describe("parseMarkdownModules", () => {
  beforeEach(() => {
    vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  it("extracts frontmatter and body content", () => {
    const modules = {
      "/post.md": `---\ntitle: Hello\nslug: hello\n---\nBody text here.\n`,
    };
    const out = parseMarkdownModules<{ title: string; slug: string }>(modules);
    expect(out).toHaveLength(1);
    expect(out[0].title).toBe("Hello");
    expect(out[0].slug).toBe("hello");
    expect(out[0].content.trim()).toBe("Body text here.");
    expect(out[0].path).toBe("/post.md");
  });

  it("converts frontmatter Date to YYYY-MM-DD string", () => {
    const modules = {
      "/post.md": `---\ntitle: T\ndate: 2024-12-15\n---\n# Body`,
    };
    const out = parseMarkdownModules<{ title: string; date: string }>(modules);
    expect(out[0].date).toBe("2024-12-15");
    expect(typeof out[0].date).toBe("string");
  });

  it("handles files without frontmatter", () => {
    const modules = { "/raw.md": "just some body" };
    const out = parseMarkdownModules<Record<string, unknown>>(modules);
    expect(out).toHaveLength(1);
    expect(out[0].content).toBe("just some body");
  });

  it("does not throw and skips files when parser errors", () => {
    // gray-matter is fairly permissive, so simulate an error by passing a non-string.
    const modules = { "/broken.md": 12345 as unknown };
    const out = parseMarkdownModules(modules);
    expect(out).toEqual([]);
  });
});