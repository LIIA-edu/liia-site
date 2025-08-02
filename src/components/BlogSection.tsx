import BlogCard from "./BlogCard";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
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