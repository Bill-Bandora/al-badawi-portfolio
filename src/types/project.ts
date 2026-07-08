export interface LocalizedText {
  de: string;
  en: string;
  ar: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: LocalizedText;
  status: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  features: LocalizedText[];
  technologies: string[];
  role: LocalizedText[];
  image: string;
  landingPageUrl: string;
  landingPageLive: boolean;
  githubUrl?: string;
  filters: string[];
}
