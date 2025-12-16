import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../services/api.service';
import { Product } from '../../types';

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchBar = ({ isOpen, onClose }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const { data: searchResults, isLoading } = useQuery({
    queryKey: ['search', debouncedQuery],
    queryFn: () => getProducts({ search: debouncedQuery }),
    enabled: debouncedQuery.length >= 2,
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />

          {/* Search Container */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white shadow-xl"
          >
            <div className="container-custom py-6">
              {/* Search Input */}
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search for products..."
                  className="w-full pl-12 pr-12 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                />
                <button
                  onClick={onClose}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600"
                  aria-label="Close search"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Search Results */}
              {debouncedQuery.length >= 2 && (
                <div className="mt-4 max-h-96 overflow-y-auto">
                  {isLoading ? (
                    <div className="py-8 text-center text-gray-500">
                      Searching...
                    </div>
                  ) : searchResults?.data.length ? (
                    <div className="space-y-2">
                      {searchResults.data.slice(0, 8).map((product: Product) => (
                        <Link
                          key={product.id}
                          to={`/products/${product.slug}`}
                          onClick={onClose}
                          className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          {product.thumbnail && (
                            <img
                              src={product.thumbnail}
                              alt={product.name}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                          )}
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">
                              {product.name}
                            </h4>
                            <p className="text-sm text-gray-600 line-clamp-1">
                              {product.shortDescription}
                            </p>
                            <div className="flex items-center space-x-2 mt-1">
                              {product.gsmMin && product.gsmMax && (
                                <span className="text-xs text-primary-600">
                                  {product.gsmMin}-{product.gsmMax} GSM
                                </span>
                              )}
                              {product.material && (
                                <span className="text-xs text-gray-500">
                                  {product.material}
                                </span>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                      {searchResults.data.length > 8 && (
                        <Link
                          to={`/products?search=${searchQuery}`}
                          onClick={onClose}
                          className="block text-center py-3 text-sm font-semibold text-primary-600 hover:text-primary-700"
                        >
                          View all {searchResults.data.length} results →
                        </Link>
                      )}
                    </div>
                  ) : (
                    <div className="py-8 text-center text-gray-500">
                      No products found for "{debouncedQuery}"
                    </div>
                  )}
                </div>
              )}

              {debouncedQuery.length > 0 && debouncedQuery.length < 2 && (
                <p className="mt-4 text-sm text-gray-500 text-center">
                  Type at least 2 characters to search
                </p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchBar;
