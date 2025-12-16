export interface Product {
  id: number;
  name: string;
  slug: string;
  category?: string;
  categoryId: number;
  description: string;
  shortDescription?: string;
  images?: string[];
  thumbnail?: string;
  relatedProducts?: Product[];
  gsmMin?: number;
  gsmMax?: number;
  gsm?: {
    min: number;
    max: number;
  };
  width?: string;
  material?: string;
  moq?: string;
  colors?: string[];
  applications?: string[];
  packaging?: string;
  specifications?: {
    label: string;
    value: string;
  }[];
  featured?: boolean;
  active?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  productCount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Branch {
  id: number;
  name: string;
  type: 'office' | 'warehouse' | 'factory';
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  timing: string;
  image: string;
}

export interface Enquiry {
  id?: number;
  name: string;
  email: string;
  phone: string;
  company?: string;
  productInterest?: string;
  message: string;
  createdAt?: string;
}

export interface Testimonial {
  id: number;
  clientName: string;
  company: string;
  designation: string;
  message: string;
  rating: number;
  avatar: string;
  createdAt: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string;
  tags: string[];
  createdAt: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  role: 'admin' | 'super_admin';
  token?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface FilterOptions {
  category?: number[];
  categories?: number[];
  material?: string[];
  materials?: string[];
  gsmMin?: number;
  gsmMax?: number;
  width?: string[];
  widths?: string[];
  colors?: string[];
  search?: string;
  sort?: 'name' | 'name_asc' | 'name_desc' | 'newest' | 'popular' | 'featured';
  page?: number;
  limit?: number;
}
