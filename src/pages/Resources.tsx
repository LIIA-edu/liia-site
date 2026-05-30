import PageLayout from "@/components/layout/PageLayout";
import SectionLayout from "@/components/layout/SectionLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getResourcesContent } from "@/utils/contentUtils";
import { getAllSoftware } from "@/utils/softwareUtils";
import { getAllDatasets } from "@/utils/datasetsUtils";
import { getAllDocumentation } from "@/utils/documentationUtils";
import { getAllWebApps } from "@/utils/webAppsUtils";

interface ResourceItem {
  name: string;
  description: string;
  metadata: string[];
  links?: { label: string; url: string }[];
}

const Resources = () => {
  const content = getResourcesContent();

  if (!content) {
    return (
      <PageLayout>
        <SectionLayout className="py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Resources</h1>
            <p className="text-muted-foreground">Content not found.</p>
          </div>
        </SectionLayout>
      </PageLayout>
    );
  }

  const softwareTools: ResourceItem[] = getAllSoftware().map((s) => ({
    name: s.name,
    description: s.description,
    metadata: [
      s.category && `Category: ${s.category}`,
      s.language && `Language: ${s.language}`,
      s.license && `License: ${s.license}`,
      s.downloads && `Downloads: ${s.downloads}`,
      s.githubStars && `GitHub Stars: ${s.githubStars}`,
      s.lastUpdated && `Last Updated: ${s.lastUpdated}`,
    ].filter((m): m is string => Boolean(m)),
    links: [
      s.github ? { label: "GitHub", url: s.github } : null,
      s.documentation ? { label: "Documentation", url: s.documentation } : null,
    ].filter((l): l is { label: string; url: string } => Boolean(l)),
  }));

  const datasets: ResourceItem[] = getAllDatasets().map((d) => ({
    name: d.name,
    description: d.description,
    metadata: [
      d.size && `Size: ${d.size}`,
      d.samples && `Samples: ${d.samples}`,
      d.access && `Access: ${d.access.charAt(0).toUpperCase()}${d.access.slice(1)}`,
      d.downloads && `Downloads: ${d.downloads}`,
      d.citations && `Citations: ${d.citations}`,
      d.doi && `DOI: ${d.doi}`,
    ].filter((m): m is string => Boolean(m)),
    links: d.url ? [{ label: "DOI", url: d.url }] : undefined,
  }));

  const typeLabels: Record<string, string> = {
    tutorial: "Tutorial",
    "best-practices": "Best Practices",
    protocol: "Protocol",
    workflow: "Workflow",
  };

  const documentation: ResourceItem[] = getAllDocumentation().map((d) => ({
    name: d.name,
    description: d.description,
    metadata: [
      d.type && `Type: ${typeLabels[d.type] ?? d.type}`,
      d.chapters && `Chapters: ${d.chapters}`,
      d.readTime && `Read Time: ${d.readTime}`,
      d.downloads && `Downloads: ${d.downloads}`,
      d.lastUpdated && `Last Updated: ${d.lastUpdated}`,
    ].filter((m): m is string => Boolean(m)),
    links: d.url ? [{ label: "Open", url: d.url }] : undefined,
  }));

  const webApps: ResourceItem[] = getAllWebApps().map((w) => ({
    name: w.name,
    description: w.description,
    metadata: [w.type && `Type: ${w.type}`, w.metric].filter(
      (m): m is string => Boolean(m)
    ),
    links: [{ label: "Launch", url: w.url }],
  }));

  return (
    <PageLayout>
      {/* Hero Section */}
      <SectionLayout className="-mt-20 pt-20 pb-12 min-h-[40vh] flex items-center bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Research <span className="text-primary">Resources & Tools</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {content.description as string}
          </p>
        </div>
      </SectionLayout>

      {/* Software Tools */}
      <SectionLayout className="py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Software Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareTools.map((tool) => (
              <Card key={tool.name} className="shadow-card h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {tool.description}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    {tool.metadata.map((m, idx) => (
                      <li key={idx}>{m}</li>
                    ))}
                  </ul>
                  {tool.links && (
                    <div className="mt-auto flex flex-wrap gap-2">
                      {tool.links.map((link) => (
                        <Button
                          key={link.url}
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(link.url, "_blank")}
                        >
                          {link.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* Datasets */}
      <SectionLayout className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Datasets</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {datasets.map((dataset) => (
              <Card key={dataset.name} className="shadow-card h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">{dataset.name}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {dataset.description}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    {dataset.metadata.map((m, idx) => (
                      <li key={idx}>{m}</li>
                    ))}
                  </ul>
                  {dataset.links && (
                    <div className="mt-auto flex flex-wrap gap-2">
                      {dataset.links.map((link) => (
                        <Button
                          key={link.url}
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(link.url, "_blank")}
                        >
                          {link.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* Documentation & Protocols */}
      <SectionLayout className="py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Documentation & Protocols</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {documentation.map((doc) => (
              <Card key={doc.name} className="shadow-card h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">{doc.name}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {doc.description}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    {doc.metadata.map((m, idx) => (
                      <li key={idx}>{m}</li>
                    ))}
                  </ul>
                  {doc.links && (
                    <div className="mt-auto flex flex-wrap gap-2">
                      {doc.links.map((link) => (
                        <Button
                          key={link.url}
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(link.url, "_blank")}
                        >
                          {link.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* Web Applications */}
      <SectionLayout className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Web Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {webApps.map((app) => (
              <Card key={app.name} className="shadow-card h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">{app.name}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {app.description}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    {app.metadata.map((m, idx) => (
                      <li key={idx}>{m}</li>
                    ))}
                  </ul>
                  {app.links && (
                    <div className="mt-auto flex flex-wrap gap-2">
                      {app.links.map((link) => (
                        <Button
                          key={link.url}
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(link.url, "_blank")}
                        >
                          {link.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default Resources;