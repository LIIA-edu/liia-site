import BlogCard from "./BlogCard";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/utils/postUtils";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const blogPosts = getAllPosts().slice(0, 6); // Show first 6 posts

  return (
    <section id="blog" className="py-20 bg-background">
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
          <Button size="lg" className="px-8" asChild>
            <Link to="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;