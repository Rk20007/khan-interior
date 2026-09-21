export type ProjectCategory = 
  | 'all'
  | 'kitchen'
  | 'wardrobe'
  | 'living'
  | 'commercial'
  | 'mandir';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  type: 'Residential' | 'Commercial';
  location: string;
  client?: string;
  scope: string[];
  materials: string[];
  description: string;
  imageUrl: string;
  additionalImages?: string[];
  highlights: string[];
  completionTime: string;
  featured?: boolean;
  instagramPostRef?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  features: string[];
  image: string;
  startingPrice: string;
  popularFinishes: string[];
  warranty: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string; // e.g. "Ashiana Town, Bhiwadi"
  projectType: string; // e.g. "3BHK Full Interior & Modular Kitchen"
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface InstagramPost {
  id: string;
  caption: string;
  likes: string;
  category: string;
  imageUrl: string;
  tag: string;
  isVideo?: boolean;
}

export interface ConsultationRequest {
  fullName: string;
  phone: string;
  societyOrCity: string;
  projectType: string;
  bhkSize: string;
  estimatedBudget: string;
  message: string;
  preferredDate?: string;
}
