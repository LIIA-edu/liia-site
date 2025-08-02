import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const blogPosts = [
    {
      title: "CRISPR-Cas9 Analysis Pipeline: From Raw Data to Insights",
      description: "A comprehensive guide to analyzing CRISPR-Cas9 screening data using R and Python. We explore statistical methods for identifying essential genes and compare different normalization approaches.",
      date: "Dec 15, 2024",
      tags: ["CRISPR", "R", "Python", "Statistics"],
      readTime: "12 min read",
      featured: true
    },
    {
      title: "Single-Cell RNA-seq: Unveiling Cellular Heterogeneity",
      description: "Deep dive into single-cell RNA sequencing analysis, covering quality control, dimensionality reduction, and cell type identification using Seurat and scanpy.",
      date: "Dec 8, 2024",
      tags: ["scRNA-seq", "Seurat", "Python", "Cell Biology"],
      readTime: "15 min read",
      featured: true
    },
    {
      title: "Machine Learning in Drug Discovery: A Practical Approach",
      description: "Exploring how machine learning algorithms can accelerate drug discovery processes, with hands-on examples using molecular descriptors and deep learning models.",
      date: "Nov 28, 2024",
      tags: ["Machine Learning", "Drug Discovery", "Cheminformatics"],
      readTime: "18 min read"
    },
    {
      title: "Genome Assembly Algorithms: Understanding the Fundamentals",
      description: "A technical overview of modern genome assembly algorithms, comparing overlap-layout-consensus and string graph approaches with practical examples.",
      date: "Nov 20, 2024",
      tags: ["Genome Assembly", "Algorithms", "Bioinformatics"],
      readTime: "10 min read"
    },
    {
      title: "Phylogenetic Analysis in the Age of Big Data",
      description: "Modern approaches to phylogenetic reconstruction using large genomic datasets, including maximum likelihood methods and Bayesian inference.",
      date: "Nov 12, 2024",
      tags: ["Phylogenetics", "Evolution", "Genomics"],
      readTime: "14 min read"
    },
    {
      title: "Protein Structure Prediction with AlphaFold2",
      description: "Understanding how AlphaFold2 revolutionized protein structure prediction and how to integrate these predictions into your research workflow.",
      date: "Oct 30, 2024",
      tags: ["Protein Structure", "AlphaFold", "Deep Learning"],
      readTime: "11 min read"
    }
  ];

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags) as string[];
  }, []);

  // Filter posts based on search term and selected tag
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesTag = selectedTag === "" || post.tags.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });
  }, [searchTerm, selectedTag]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Research Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Computational biology insights, tutorials, and research findings from the cutting edge of bioinformatics.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Tag Filter */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">Filter by tag:</p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge
                  variant={selectedTag === "" ? "default" : "outline"}
                  className="cursor-pointer transition-colors hover:bg-primary/10"
                  onClick={() => setSelectedTag("")}
                >
                  All
                </Badge>
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    className="cursor-pointer transition-colors hover:bg-primary/10"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No posts found matching your criteria.
              </p>
              <p className="text-muted-foreground mt-2">
                Try adjusting your search terms or clearing the tag filter.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;