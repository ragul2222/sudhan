import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import LoadingSkeleton from '../components/common/LoadingSkeleton';
import ProductCard from '../components/products/ProductCard';
import ProductFilters from '../components/products/ProductFilters';
import { getProducts, getCategories } from '../services/api.service';
import { FilterOptions } from '../types';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const DEFAULT_GSM_MIN = 0;
const DEFAULT_GSM_MAX = 1000;

const Products = () => {
  const { category: categorySlug } = useParams<{ category?: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);
  const [filters, setFilters] = useState({
    category: searchParams.get('category') ? [parseInt(searchParams.get('category')!)] : [],
    material: searchParams.get('material')?.split(',').filter(Boolean) || [],
    gsmMin: parseInt(searchParams.get('gsmMin') || String(DEFAULT_GSM_MIN)),
    gsmMax: parseInt(searchParams.get('gsmMax') || String(DEFAULT_GSM_MAX)),
    width: searchParams.get('width')?.split(',').filter(Boolean) || [],
  });
  const [sortBy, setSortBy] = useState<FilterOptions['sort']>((searchParams.get('sort') as FilterOptions['sort']) || 'featured');
  const [page, setPage] = useState(parseInt(searchParams.get('page') || '1'));

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  // Apply category from route slug when available
  useEffect(() => {
    if (!categories?.data) return;
    if (!categorySlug) return;
    const match = categories.data.find((c) => c.slug === categorySlug);
    if (match && (!filters.category.length || filters.category[0] !== match.id)) {
      setFilters((prev) => ({
        ...prev,
        category: [match.id],
      }));
      setPage(1);
    }
  }, [categorySlug, categories, filters.category]);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Update URL params
  useEffect(() => {
    const params: any = {};
    if (debouncedSearch) params.search = debouncedSearch;
    if (filters.category.length) params.category = filters.category.join(',');
    if (filters.material.length) params.material = filters.material.join(',');
    if (filters.gsmMin !== DEFAULT_GSM_MIN) params.gsmMin = filters.gsmMin.toString();
    if (filters.gsmMax !== DEFAULT_GSM_MAX) params.gsmMax = filters.gsmMax.toString();
    if (filters.width.length) params.width = filters.width.join(',');
    if (sortBy !== 'featured') params.sort = sortBy;
    if (page !== 1) params.page = page.toString();
    setSearchParams(params);
  }, [debouncedSearch, filters, sortBy, page]);

  const { data: products, isLoading } = useQuery({
    queryKey: ['products', debouncedSearch, filters, sortBy, page],
    queryFn: () => getProducts({
      search: debouncedSearch,
      category: filters.category,
      material: filters.material.length ? filters.material : undefined,
      gsmMin: filters.gsmMin,
      gsmMax: filters.gsmMax,
      width: filters.width.length ? filters.width : undefined,
      sort: sortBy,
      page,
      limit: 12,
    }),
  });

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    setPage(1); // Reset to first page when filters change
  };

  const handleResetFilters = () => {
    setFilters({
      category: [],
      material: [],
      gsmMin: DEFAULT_GSM_MIN,
      gsmMax: DEFAULT_GSM_MAX,
      width: [],
    });
    setSearchQuery('');
    setSortBy('featured');
    setPage(1);
  };

  return (
    <>
      <SEO
        title="Our Products - Premium Knitted Fabrics"
        description="Explore our wide range of premium knitted fabrics including Lycra, Single Jersey, Loop Knit, and more. Custom GSM, widths, and colors available."
      />

      <div className="min-h-screen bg-gray-50 pb-16">
        {/* Hero / Controls */}
        <div className="bg-white border-b border-gray-200">
          <div className="container-custom py-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-2">Product Catalogue</p>
                  <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-3">Our Products</h1>
                  <p className="text-lg text-gray-600 max-w-3xl">
                    Discover our premium collection of knitted fabrics tailored for diverse applications.
                  </p>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold">
                    {products?.pagination?.total || products?.data?.length || 0} items
                  </div>
                  <div className="px-4 py-2 rounded-full bg-gray-100 text-gray-700">
                    {categories?.data?.length || 0} categories
                  </div>
                </div>
              </div>

              {/* Search & Sort */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="relative flex-1">
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products by name, material or application"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as FilterOptions['sort'])}
                  className="px-4 py-3 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="featured">Featured</option>
                  <option value="name_asc">Name (A-Z)</option>
                  <option value="name_desc">Name (Z-A)</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Body */}
        <div className="container-custom mt-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            {categories?.data && (
              <ProductFilters
                categories={categories.data}
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleResetFilters}
              />
            )}

            {/* Products Grid */}
            <div className="flex-1">
              {isLoading ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(9)].map((_, i) => (
                    <LoadingSkeleton key={i} type="card" />
                  ))}
                </div>
              ) : products?.data.length ? (
                <>
                  <div className="mb-4 text-sm text-gray-600">
                    Showing {products.data.length} of {products.pagination?.total || products.data.length} products
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.data.map((product, index) => (
                      <ProductCard key={product.id} product={product} index={index} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {products.pagination && products.pagination.totalPages > 1 && (
                    <div className="mt-12 flex justify-center gap-2">
                      {[...Array(products.pagination.totalPages)].map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setPage(i + 1)}
                          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                            page === i + 1
                              ? 'bg-primary-600 text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your filters or search query</p>
                  <button
                    onClick={handleResetFilters}
                    className="btn-primary"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
