import { parseYaml } from "./yamlContent";
import heroRaw from "@/content/hero.yml?raw";
import siteConfigRaw from "@/content/site-config.yml?raw";

export interface HeroContent {
  headline: string;
  highlight: string;
  tagline: string;
}

export interface QuickLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  siteName: string;
  siteFullName: string;
  copyright: string;
  footerNote: string;
  footerResearchAreas: string[];
  quickLinks: QuickLink[];
}

const heroFallback: HeroContent = {
  headline: "Advancing",
  highlight: "Immunooncology with AI",
  tagline:
    "Pioneering computational methods that harness artificial intelligence to understand cancer biology, develop personalized treatments, and accelerate drug discovery.",
};

const siteConfigFallback: SiteConfig = {
  siteName: "LIIA",
  siteFullName:
    "Laboratório de pesquisa em Imunooncologia e Inteligência Artificial - Explorando biologia computacional através de pesquisa, inovação e ciência aberta.",
  copyright: "© 2024 LIIA. All rights reserved.",
  footerNote: "Built with modern web technologies for the scientific community",
  footerResearchAreas: [
    "Computational Biology",
    "Machine Learning",
    "Genomics & Single-Cell",
    "Bioinformatics Tools",
  ],
  quickLinks: [
    { label: "Blog", href: "/blog" },
    { label: "About", href: "#about" },
    { label: "Publications", href: "#publications" },
    { label: "Contact", href: "#contact" },
  ],
};

export const heroContent: HeroContent =
  parseYaml<HeroContent>(heroRaw, heroFallback) ?? heroFallback;

export const siteConfig: SiteConfig =
  parseYaml<SiteConfig>(siteConfigRaw, siteConfigFallback) ?? siteConfigFallback;