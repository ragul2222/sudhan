import type {
  ApiResponse,
  Branch,
  Category,
  Enquiry,
  FilterOptions,
  GalleryItem,
  PaginatedResponse,
  Product,
  Testimonial,
  User,
} from '../types';
import { branches, categories, galleryItems, products, testimonials } from '../data/staticData';

const delay = (ms = 120) => new Promise((resolve) => setTimeout(resolve, ms));

const normalizeText = (value?: string) => value?.toLowerCase().trim() || '';

const filterProducts = (filters: FilterOptions = {}) => {
  const categoryIds = filters.category?.length
    ? filters.category
    : filters.categories && filters.categories.length
      ? filters.categories
      : [];
  const materials = filters.material?.length
    ? filters.material
    : filters.materials && filters.materials.length
      ? filters.materials
      : [];
  const widths = filters.width?.length
    ? filters.width
    : filters.widths && filters.widths.length
      ? filters.widths
      : [];

  let filtered = [...products];

  if (categoryIds.length) {
    filtered = filtered.filter((product) => categoryIds.includes(product.categoryId));
  }

  if (materials.length) {
    filtered = filtered.filter((product) =>
      materials.some((m) => normalizeText(product.material).includes(normalizeText(m)))
    );
  }

  if (widths.length) {
    filtered = filtered.filter((product) =>
      widths.some((w) => normalizeText(product.width).includes(normalizeText(w)))
    );
  }

  if (typeof filters.gsmMin === 'number') {
    filtered = filtered.filter((product) => !product.gsmMin || product.gsmMin >= filters.gsmMin!);
  }

  if (typeof filters.gsmMax === 'number') {
    filtered = filtered.filter((product) => !product.gsmMax || product.gsmMax <= filters.gsmMax!);
  }

  if (filters.search) {
    const term = normalizeText(filters.search);
    filtered = filtered.filter((product) =>
      normalizeText(product.name).includes(term) ||
      normalizeText(product.description).includes(term) ||
      normalizeText(product.material).includes(term)
    );
  }

  // Sorting
  const sort = filters.sort || 'featured';
  filtered.sort((a, b) => {
    if (sort === 'newest') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    if (sort === 'popular') {
      return Number(b.featured) - Number(a.featured);
    }
    if (sort === 'name_desc') {
      return a.name.localeCompare(b.name) * -1;
    }
    if (sort === 'name' || sort === 'name_asc') {
      return a.name.localeCompare(b.name);
    }
    // default featured first
    return Number(b.featured) - Number(a.featured);
  });

  return filtered;
};

// Products
export const getProducts = async (filters?: FilterOptions) => {
  await delay();
  const all = filterProducts(filters);
  const page = filters?.page && filters.page > 0 ? filters.page : 1;
  const limit = filters?.limit && filters.limit > 0 ? filters.limit : 12;
  const start = (page - 1) * limit;
  const paginated = all.slice(start, start + limit);

  const response: PaginatedResponse<Product> = {
    success: true,
    data: paginated,
    pagination: {
      page,
      limit,
      total: all.length,
      totalPages: Math.max(1, Math.ceil(all.length / limit)),
    },
  };

  return response;
};

export const getProductBySlug = async (slug: string) => {
  await delay();
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return { success: false, data: undefined as unknown as Product, message: 'Product not found' };
  }

  const relatedProducts = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4);

  const response: ApiResponse<Product> = {
    success: true,
    data: {
      ...product,
      relatedProducts,
    },
  };

  return response;
};

export const getFeaturedProducts = async () => {
  await delay();
  const response: ApiResponse<Product[]> = {
    success: true,
    data: products.filter((p) => p.featured).slice(0, 8),
  };
  return response;
};

// Categories
export const getCategories = async () => {
  await delay();
  const withCounts = categories.map((cat) => ({
    ...cat,
    productCount: products.filter((p) => p.categoryId === cat.id).length,
  }));

  const response: ApiResponse<Category[]> = {
    success: true,
    data: withCounts,
  };

  return response;
};

export const getCategoryBySlug = async (slug: string) => {
  await delay();
  const category = categories.find((c) => c.slug === slug);
  if (!category) {
    return { success: false, data: undefined as unknown as Category, message: 'Category not found' };
  }

  const response: ApiResponse<Category> = {
    success: true,
    data: category,
  };

  return response;
};

// Branches
export const getBranches = async () => {
  await delay();
  const response: ApiResponse<Branch[]> = {
    success: true,
    data: branches,
  };
  return response;
};

// Enquiries
export const submitEnquiry = async (enquiry: Enquiry) => {
  await delay();
  const response: ApiResponse<Enquiry> = {
    success: true,
    data: {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      ...enquiry,
    },
    message: 'Enquiry stored locally (static build)',
  };
  return response;
};

// Testimonials
export const getTestimonials = async () => {
  await delay();
  const response: ApiResponse<Testimonial[]> = {
    success: true,
    data: testimonials,
  };
  return response;
};

// Gallery
export const getGalleryItems = async (category?: string) => {
  await delay();
  const items = category
    ? galleryItems.filter((item) => normalizeText(item.category) === normalizeText(category))
    : galleryItems;

  const response: ApiResponse<GalleryItem[]> = {
    success: true,
    data: items,
  };
  return response;
};

// Admin stubs (not supported in static build)
const adminDisabled = async () => {
  return Promise.reject(new Error('Admin endpoints are disabled in this static build'));
};

export const adminLogin = async (email: string, _password: string) => {
  await delay();
  const response: ApiResponse<User> = {
    success: true,
    data: {
      id: 1,
      email,
      name: 'Demo Admin',
      role: 'super_admin',
      token: 'static-demo-token',
    },
    message: 'Static demo login (no backend)',
  };
  return response;
};

export const createProduct = async (_product: FormData): Promise<ApiResponse<Product>> => adminDisabled();
export const updateProduct = async (_id: number, _product: FormData): Promise<ApiResponse<Product>> => adminDisabled();
export const deleteProduct = async (_id: number): Promise<ApiResponse<void>> => adminDisabled();
export const createCategory = async (_category: FormData): Promise<ApiResponse<Category>> => adminDisabled();
export const updateCategory = async (_id: number, _category: FormData): Promise<ApiResponse<Category>> => adminDisabled();
export const deleteCategory = async (_id: number): Promise<ApiResponse<void>> => adminDisabled();
export const getEnquiries = async (): Promise<ApiResponse<Enquiry[]>> => adminDisabled();
export const deleteEnquiry = async (_id: number): Promise<ApiResponse<void>> => adminDisabled();
