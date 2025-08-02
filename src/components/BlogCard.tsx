import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
  readTime: string;
  featured?: boolean;
}

const BlogCard = ({ title, description, date, tags, readTime, featured = false }: BlogCardProps) => {
  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-elegant ${
      featured ? 'bg-gradient-card border-primary/20' : ''
    }`}>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">{date}</span>
          <span className="text-sm text-muted-foreground">{readTime}</span>
        </div>
        <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;