export type ProjectCategory = 
  | 'all'
  | 'new-homes'
  | 'renovations-extensions'
  | 'interiors'
  | 'landscape-integration';

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  year: string;
  area: string;
  status: string;
  isConceptStudy: boolean;
  heroImage: string;
  heroImageAlt: string;
  brief: string;
  context: string;
  designResponse: string;
  spatialStory: string[];
  materials: {
    name: string;
    description: string;
  }[];
  gallery: {
    url: string;
    alt: string;
    caption: string;
    type: 'exterior' | 'interior' | 'detail' | 'drawing';
    aspectRatio?: '16:9' | '4:3' | '3:4' | '1:1';
  }[];
  drawings?: {
    title: string;
    type: 'Ground Floor Plan' | 'Cross Section' | 'Site Elevation';
    svgPathData?: string;
  }[];
  collaborators?: {
    role: string;
    name: string;
  }[];
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  readTime: string;
  publishedDate: string;
  category: string;
  heroImage: string;
  heroImageAlt: string;
  author: {
    name: string;
    role: string;
  };
  excerpt: string;
  content: {
    heading?: string;
    paragraphs: string[];
    pullQuote?: string;
  }[];
}

export interface ServicePillar {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  clientContribution: string;
  image: string;
  imageAlt: string;
}

export interface MediaAssetRecord {
  id: string;
  title: string;
  sourceCreator: string;
  sourceUrl: string;
  license: string;
  intendedPlacement: string;
  aspectRatio: string;
  suitabilityRationale: string;
  assetType: 'stock_photo' | 'stock_video' | 'vector_drawing' | 'interactive_3d';
}
