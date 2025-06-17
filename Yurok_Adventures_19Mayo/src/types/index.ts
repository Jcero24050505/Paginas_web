export interface NavItem {
  title: string;
  path?: string;
  submenu?: NavItem[];
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
  duration?: string;
  ageGroup?: string;
}

export interface PricingOption {
  id: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  features: string[];
  type: 'single' | 'membership' | 'rental';
}

export interface CarouselImage {
  id: number;
  url: string;
  alt: string;
  title?: string;
}