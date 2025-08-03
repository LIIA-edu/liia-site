import { memo } from 'react';
import DefaultRenderer from './renderers/DefaultRenderer';
import AboutRenderer from './renderers/AboutRenderer';
import PublicationsRenderer from './renderers/PublicationsRenderer';
import LaboratoryVisionRenderer from './renderers/LaboratoryVisionRenderer';
import ResearchGroupRenderer from './renderers/ResearchGroupRenderer';

interface MarkdownRendererProps {
  content: string;
  type?: 'default' | 'about' | 'publications' | 'publications-full' | 'laboratory-vision' | 'research-group';
  className?: string;
}

const MarkdownRenderer = memo(({ content, type = 'default', className = "" }: MarkdownRendererProps) => {
  const rendererProps = { content, className };

  switch (type) {
    case 'about':
      return <AboutRenderer {...rendererProps} />;
    case 'publications':
      return <PublicationsRenderer {...rendererProps} limited={true} />;
    case 'publications-full':
      return <PublicationsRenderer {...rendererProps} limited={false} />;
    case 'laboratory-vision':
      return <LaboratoryVisionRenderer {...rendererProps} />;
    case 'research-group':
      return <ResearchGroupRenderer {...rendererProps} />;
    default:
      return <DefaultRenderer {...rendererProps} />;
  }
});

MarkdownRenderer.displayName = 'MarkdownRenderer';

export default MarkdownRenderer;