import { StaticImageData } from "next/image";

// Home page section types
export interface NavItem {
  label: string;
  href: string;
}
export interface Service {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  price: string;
  iconBg: string;
  iconColor: string;
  hoverGradient: string;
}

// about page section types
export interface GalleryItem {
  id: number;
  type: "image" | "video";
  src: string;
  thumbnail: string;
  title: string;
  category: string;
  description: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

// services types

export interface ServiceCategory {
  id: number;
  title: string;
  description: string;
  services: string[];
  startingPrice: string;
  duration: string;
  popular?: boolean;
  image: string;
  gradient: string;
}
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  brushColor: string;
  rating: number;
  specialty: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  brushColor: string;
  rating: number;
  specialty: string;
}

// contact page section types
export interface FormData {
  message: string;
  name: string;
  email: string;
  subject: string;
}

// blog details section types

export type PostItem = {
  id: string;
  title: string;
  meta: string;
  thumbnailSrc: string | StaticImageData;
};

export type RecentPostsProps = {
  items?: PostItem[];
  className?: string;
};

// privacy policy section types
export interface Section {
  id: string;
  title: string;
  icon: React.ElementType;
  content: string[];
  subsections?: {
    title: string;
    content: string[];
  }[];
}

// Additional types for centralized data management
export interface PortfolioCategory {
  id: string;
  label: string;
  icon: React.ElementType;
  count: number;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  text: string;
  author: string;
  rating: number;
  image: string;
}

export interface ContactInfo {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  color: string;
  bgColor: string;
}

export interface NavLink {
  name: string;
  path: string;
  icon: React.ElementType;
}

export interface ServicePricing {
  name: string;
  price: number;
}

export interface Feature {
  icon: React.ElementType;
  text: string;
}

export interface Statistic {
  number: string;
  label: string;
}

export interface Milestone {
  number: string;
  label: string;
  icon: React.ElementType;
}

export interface BlogPost {
  id: number;
  date: string;
  month: string;
  category: string;
  title: string;
  excerpt: string;
  excerpt2: string;
  excerpt3: string;
  excerpt4: string;
  image: string;
  author: string;
  readTime: string;
  comment: string;
}

// Additional types for component data
export interface VideoItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
  icon: React.ElementType;
  videoUrl: string;
}

export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
  duration: number;
}

export interface AboutFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface GalleryImage {
  url: any;
  alt: string;
  span: string;
}

export interface GalleryStat {
  icon: React.ElementType;
  label: string;
  value: string;
}

export interface Comment {
  id: string;
  author: string;
  date: string;
  content: string;
  avatarSrc: any;
}

export interface Brand {
  name: string;
  tagline: string;
}

export interface Promise {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ServiceItem {
  name: string;
}

export interface ServiceCategoryItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  services: ServiceItem[];
}
