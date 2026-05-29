import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { memo } from 'react';
import {
  getAllPublications,
  getPeerReviewedPublications,
  getPreprints,
  type Publication,
} from "@/utils/publicationsUtils";
import { getAllSoftware, getFeaturedSoftware, type Software } from "@/utils/softwareUtils";

interface PublicationsRendererProps {
  content: string;
  className?: string;
  limited?: boolean;
}

const typeLabels: Record<Publication["type"], string> = {
  "journal-article": "Journal Article",
  conference: "Conference",
  "book-chapter": "Book Chapter",
  review: "Review",
  preprint: "Preprint",
};

const PublicationCard = ({ pub }: { pub: Publication }) => {
  const doiUrl = pub.doi ? `https://doi.org/${pub.doi}` : pub.url;
  return (
    <div className="p-6 border border-border rounded-lg bg-white hover:shadow-elegant transition-shadow duration-300">
      <h4 className="text-lg font-semibold text-foreground mb-2 leading-snug">{pub.title}</h4>
      <p className="text-sm text-muted-foreground mb-1">{pub.authors}</p>
      {pub.venue && <p className="text-sm italic text-muted-foreground mb-3">{pub.venue}</p>}
      <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-border">
        <Badge variant="outline">{pub.year}</Badge>
        <Badge variant="secondary">{typeLabels[pub.type]}</Badge>
        {pub.preprintServer && <Badge variant="outline">{pub.preprintServer}</Badge>}
        {doiUrl && (
          <Button
            variant="outline"
            size="sm"
            className="ml-auto text-xs"
            onClick={() => window.open(doiUrl, "_blank")}
          >
            {pub.doi ? `DOI: ${pub.doi}` : "View"}
          </Button>
        )}
      </div>
    </div>
  );
};

const SoftwareCard = ({ tool }: { tool: Software }) => (
  <Card className="shadow-card h-full flex flex-col">
    <CardContent className="p-6 flex flex-col h-full">
      <h4 className="font-semibold text-primary mb-2">{tool.name}</h4>
      <p className="text-sm text-muted-foreground mb-3 flex-grow">{tool.description}</p>
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-4 text-xs text-muted-foreground">
          {tool.downloads && <span>{tool.downloads} downloads</span>}
          {tool.citations && <span>{tool.citations} citations</span>}
        </div>
      </div>
      {tool.github && (
        <Button
          variant="outline"
          size="sm"
          className="w-full mt-auto"
          onClick={() => tool.github && window.open(tool.github, "_blank")}
        >
          View on GitHub
        </Button>
      )}
    </CardContent>
  </Card>
);

const PublicationsRenderer = memo(({ content, className, limited = false }: PublicationsRendererProps) => {
  const peerReviewed = getPeerReviewedPublications();
  const preprints = getPreprints();
  const allPubs = getAllPublications();
  const displayedPublications = limited ? peerReviewed.slice(0, 5) : peerReviewed;

  const softwareTools = getAllSoftware();
  const displayedSoftware = limited ? getFeaturedSoftware(3) : softwareTools;

  // Metrics still come from the page singleton frontmatter
  const totalPublications =
    content.match(/totalPublications:\s*(\d+)/)?.[1] || String(allPubs.length);
  const totalCitations = content.match(/total_citations:\s*(\d+)/)?.[1] || "2,500+";
  const hIndex = content.match(/hIndex:\s*(\d+)/)?.[1] || "25";

  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card className="shadow-card text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">{totalPublications}</div>
            <div className="text-sm text-muted-foreground">Total Publications</div>
          </CardContent>
        </Card>
        <Card className="shadow-card text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">{totalCitations}</div>
            <div className="text-sm text-muted-foreground">Total Citations</div>
          </CardContent>
        </Card>
        <Card className="shadow-card text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">{hIndex}</div>
            <div className="text-sm text-muted-foreground">H-Index</div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-foreground">
          {limited ? "Recent Publications" : "All Publications"}
        </h3>
        <div className="space-y-6">
          {displayedPublications.map((pub) => (
            <PublicationCard key={`${pub.title}-${pub.year}`} pub={pub} />
          ))}
        </div>

        {limited && peerReviewed.length > 5 && (
          <div className="text-center mt-12">
            <Button size="lg" className="px-8" asChild>
              <Link to="/publications">View All Publications ({peerReviewed.length})</Link>
            </Button>
          </div>
        )}
      </div>

      {!limited && preprints.length > 0 && (
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Preprints</h3>
          <div className="space-y-6">
            {preprints.map((pub) => (
              <PublicationCard key={`${pub.title}-${pub.year}`} pub={pub} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-foreground">Open Source Software</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedSoftware.map((tool) => (
            <SoftwareCard key={tool.name} tool={tool} />
          ))}
        </div>

        {limited && softwareTools.length > 3 && (
          <div className="text-center mt-8">
            <Button size="lg" className="px-8" asChild>
              <Link to="/publications">View All Software ({softwareTools.length})</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
});

PublicationsRenderer.displayName = 'PublicationsRenderer';

export default PublicationsRenderer;