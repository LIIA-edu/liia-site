import BlogCard from "./BlogCard";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/utils/postUtils";

const BlogSection = () => {
  const blogPosts = getAllPosts().slice(0, 6); // Show first 6 posts

  return (
    <section id="blog" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Latest Research Posts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing computational biology insights, tutorials, and research findings from the cutting edge of bioinformatics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8" asChild>
            <a href="/blog">View All Posts</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;