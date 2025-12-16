import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { Category } from '../../types';

interface ProductFiltersProps {
  categories: Category[];
  filters: {
    category: number[];
    material: string[];
    gsmMin: number;
    gsmMax: number;
    width: string[];
  };
  onFilterChange: (filters: any) => void;
  onReset: () => void;
}

const ProductFilters = ({ categories, filters, onFilterChange, onReset }: ProductFiltersProps) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const materials = ['Cotton', 'Lycra', 'Polyester', 'Viscose', 'Blended'];
  const widths = ['36 inches', '60 inches', '72 inches', '90 inches'];

  const handleCategoryChange = (categoryId: number) => {
    const newCategories = filters.category.includes(categoryId)
      ? filters.category.filter((id) => id !== categoryId)
      : [...filters.category, categoryId];
    onFilterChange({ ...filters, category: newCategories });
  };

  const handleMaterialChange = (material: string) => {
    const newMaterials = filters.material.includes(material)
      ? filters.material.filter((m) => m !== material)
      : [...filters.material, material];
    onFilterChange({ ...filters, material: newMaterials });
  };

  const handleWidthChange = (width: string) => {
    const newWidths = filters.width.includes(width)
      ? filters.width.filter((w) => w !== width)
      : [...filters.width, width];
    onFilterChange({ ...filters, width: newWidths });
  };

  const handleGsmChange = (type: 'min' | 'max', value: number) => {
    onFilterChange({
      ...filters,
      [type === 'min' ? 'gsmMin' : 'gsmMax']: value,
    });
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.category.includes(category.id)}
                onChange={() => handleCategoryChange(category.id)}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700">{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3">Material</h3>
        <div className="space-y-2">
          {materials.map((material) => (
            <label key={material} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.material.includes(material)}
                onChange={() => handleMaterialChange(material)}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700">{material}</span>
            </label>
          ))}
        </div>
      </div>

      {/* GSM Range */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3">GSM Range</h3>
        <div className="space-y-3">
          <div>
            <label className="text-xs text-gray-600 mb-1 block">Min GSM: {filters.gsmMin}</label>
            <input
              type="range"
              min="100"
              max="400"
              step="10"
              value={filters.gsmMin}
              onChange={(e) => handleGsmChange('min', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
          </div>
          <div>
            <label className="text-xs text-gray-600 mb-1 block">Max GSM: {filters.gsmMax}</label>
            <input
              type="range"
              min="100"
              max="400"
              step="10"
              value={filters.gsmMax}
              onChange={(e) => handleGsmChange('max', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
          </div>
        </div>
      </div>

      {/* Width */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3">Width</h3>
        <div className="space-y-2">
          {widths.map((width) => (
            <label key={width} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.width.includes(width)}
                onChange={() => handleWidthChange(width)}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700">{width}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="w-full py-2 px-4 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );

  return (
    <>
      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsMobileFilterOpen(true)}
        className="lg:hidden fixed bottom-20 left-6 z-30 bg-primary-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center space-x-2"
      >
        <FunnelIcon className="w-5 h-5" />
        <span className="font-semibold">Filters</span>
      </button>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Filters</h2>
          <FilterContent />
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileFilterOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-80 bg-white shadow-xl border-r border-gray-100 z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
                <FilterContent />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductFilters;
