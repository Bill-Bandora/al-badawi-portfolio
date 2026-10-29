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
  imageSrcSet?: string;
  imageAlt?: LocalizedText;
  imageFit?: 'cover' | 'contain';
  primaryLink?: {
    url: string;
    label: LocalizedText;
  };
  release?: {
    version: string;
    build: string;
    status: LocalizedText;
    appStoreUrl?: string;
  };
  architectureNotes: LocalizedText;
  developmentStatus: LocalizedText;
  technicalChallenges?: LocalizedText[];
  relatedSlugs?: string[];
  disclaimer?: LocalizedText;
  visualTheme?: 'infrastructure' | 'privacy' | 'trading' | 'scanner' | 'studio';
  futureFeatures?: LocalizedText[];
  filters: string[];
}
